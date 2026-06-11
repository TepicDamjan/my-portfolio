const VERTEX_SHADER = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;

    float color = 0.0;
    color += sin(uv.x * 10.0 + u_time * 0.5) * 0.1;
    color += sin(uv.y * 8.0 + u_time * 0.3) * 0.1;
    color += sin((uv.x + uv.y) * 5.0 + u_time * 0.4) * 0.1;

    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(uv, mouse);
    float glow = smoothstep(0.4, 0.0, dist) * 0.05;

    vec3 cream = vec3(0.988, 0.976, 0.973);
    vec3 forest = vec3(0.102, 0.2, 0.133);

    vec3 finalColor = mix(cream, forest, color + 0.05 + glow);

    gl_FragColor = vec4(finalColor, 1.0);
}`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export function initHeroShader(canvas: HTMLCanvasElement): (() => void) | null {
  const glContext =
    canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl");

  if (!glContext || !(glContext instanceof WebGLRenderingContext)) {
    return null;
  }

  const gl = glContext;

  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragmentShader = compileShader(
    gl,
    gl.FRAGMENT_SHADER,
    FRAGMENT_SHADER,
  );

  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(program, "u_time");
  const uResolution = gl.getUniformLocation(program, "u_resolution");
  const uMouse = gl.getUniformLocation(program, "u_mouse");

  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  let rafId = 0;

  const syncSize = () => {
    const w = canvas.clientWidth || 1280;
    const h = canvas.clientHeight || 720;

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const nx = (event.clientX - rect.left) / rect.width;
    const ny = 1.0 - (event.clientY - rect.top) / rect.height;
    mouse.x = nx * canvas.width;
    mouse.y = ny * canvas.height;
  };

  const render = (time: number) => {
    syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);

    if (uTime) gl.uniform1f(uTime, time * 0.001);
    if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height);
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    rafId = requestAnimationFrame(render);
  };

  syncSize();
  window.addEventListener("mousemove", handleMouseMove);
  rafId = requestAnimationFrame(render);

  const resizeObserver =
    typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(syncSize)
      : null;

  resizeObserver?.observe(canvas);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", handleMouseMove);
    resizeObserver?.disconnect();
    gl.deleteProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    gl.deleteBuffer(buffer);
  };
}
