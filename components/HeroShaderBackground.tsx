"use client";

import { useEffect, useRef } from "react";
import { initHeroShader } from "@/lib/hero-shader";

export function HeroShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    return initHeroShader(canvas) ?? undefined;
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 bg-surface"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
