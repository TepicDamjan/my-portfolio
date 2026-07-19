import { ImageResponse } from "next/og";

export const alt = "Damjan Tepic — Digital Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fcf9f8",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.2em",
              color: "#424843",
            }}
          >
            DAMJAN TEPIC
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.15em",
              color: "#737972",
            }}
          >
            SELECTED WORK
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#1b1c1c",
            }}
          >
            THE ARCHITECTURE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#1b1c1c",
            }}
          >
            OF&nbsp;
            <span style={{ color: "#4a6450" }}>DIGITAL</span>
            &nbsp;EXPERIENCES
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 22,
              color: "#424843",
            }}
          >
            <span>FakturaOne</span>
            <span style={{ color: "#c2c8c0" }}>·</span>
            <span>MusicOne</span>
            <span style={{ color: "#c2c8c0" }}>·</span>
            <span>Glazure Cubak</span>
          </div>
          <div
            style={{
              width: 220,
              height: 8,
              backgroundColor: "#051e0e",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
