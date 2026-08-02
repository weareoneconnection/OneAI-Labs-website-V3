import { ImageResponse } from "next/og";

export const alt = "OneAI Labs — Commercial AI Infrastructure & Agent Product Ecosystem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050816",
          padding: 80,
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(5,8,22,0) 70%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,184,65,0.34) 0%, rgba(5,8,22,0) 70%)"
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2563EB 0%, #00D6F5 100%)"
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#050816",
                color: "#ffffff",
                fontSize: 28,
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: -2
              }}
            >
              1A
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#ffffff", fontSize: 30, fontWeight: 700 }}>OneAI Labs</div>
            <div
              style={{
                color: "#94A3B8",
                fontSize: 16,
                letterSpacing: 2,
                marginTop: 4
              }}
            >
              One Intelligence · Infinite Possibilities
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 900
            }}
          >
            Commercial AI Infrastructure & Agent Products
          </div>
          <div style={{ color: "#94A3B8", fontSize: 28, marginTop: 24, maxWidth: 860 }}>
            OneAI Core is the operating layer behind the OneAI product ecosystem.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["OneAI Core", "Agent OS", "Studio", "OneVideo", "TheOne"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "10px 22px",
                color: "#CBD5E1",
                fontSize: 20
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
