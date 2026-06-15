import { ImageResponse } from "next/og";

export const alt = "Echoes of Wisdom — literary quotes from books";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f0e6",
        padding: "72px",
        gap: "36px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            width: "420px",
            height: "14px",
            background: "rgba(255, 235, 59, 0.95)",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            width: "360px",
            height: "14px",
            background: "rgba(255, 235, 59, 0.65)",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            width: "400px",
            height: "14px",
            background: "rgba(255, 235, 59, 0.8)",
            borderRadius: "4px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "#2c2824",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Echoes of Wisdom
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#5c5348",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Literary quotes and passages from books
        </div>
      </div>
    </div>,
    { ...size },
  );
}
