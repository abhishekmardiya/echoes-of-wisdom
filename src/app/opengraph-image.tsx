import { ImageResponse } from "next/og";

export const alt = "Echoes of Wisdom — highlighted quotes from books";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#d9d0c0",
        padding: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#f5f0e6",
          border: "1px solid #c4b8a4",
          boxShadow: "0 8px 32px rgba(80, 60, 30, 0.14)",
          padding: "56px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "1px",
                background: "#b8a88a",
              }}
            />
            <div
              style={{
                fontSize: "52px",
                fontWeight: 600,
                color: "#1a1a1a",
                letterSpacing: "0.04em",
              }}
            >
              Echoes of Wisdom
            </div>
            <div
              style={{
                width: "64px",
                height: "1px",
                background: "#b8a88a",
              }}
            />
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#1a1a1a",
              opacity: 0.45,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Underlined wisdom from books
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "36px",
              lineHeight: 1.55,
              color: "#1a1a1a",
              textAlign: "center",
              maxWidth: "920px",
            }}
          >
            <span
              style={{
                background: "rgba(255, 235, 59, 0.55)",
                padding: "4px 8px",
              }}
            >
              &ldquo;The secret of life, though, is to fall seven times and to
              get up eight times.&rdquo;
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#1a1a1a",
              opacity: 0.75,
            }}
          >
            - The Alchemist
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}

export default Image;
