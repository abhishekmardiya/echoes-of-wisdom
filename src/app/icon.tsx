import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#d9d0c0",
        padding: "3px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#f5f0e6",
          border: "1px solid #c4b8a4",
          borderRadius: "4px",
          gap: "3px",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "3px",
            background: "rgba(255, 235, 59, 0.9)",
            borderRadius: "1px",
          }}
        />
        <div
          style={{
            width: "14px",
            height: "3px",
            background: "rgba(255, 235, 59, 0.55)",
            borderRadius: "1px",
          }}
        />
        <div
          style={{
            width: "16px",
            height: "3px",
            background: "rgba(255, 235, 59, 0.75)",
            borderRadius: "1px",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
