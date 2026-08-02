import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #2563EB 0%, #00D6F5 100%)"
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#050816",
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: -1
          }}
        >
          1A
        </div>
      </div>
    ),
    size
  );
}
