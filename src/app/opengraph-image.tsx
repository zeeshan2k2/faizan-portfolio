import { ImageResponse } from "next/og";

import { siteMetadata } from "@/lib/metadata";

export const alt = siteMetadata.title;
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
          alignItems: "center",
          background: "#030303",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          fontFamily: "Arial, Helvetica, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 18% 58%, rgba(255,106,26,0.38), rgba(255,106,26,0.08) 26%, transparent 48%)",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            background:
              "radial-gradient(circle at 82% 18%, rgba(255,59,19,0.24), transparent 34%)",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 42,
            display: "flex",
            flexDirection: "column",
            gap: 34,
            height: 482,
            justifyContent: "center",
            padding: "70px 78px",
            position: "relative",
            width: 1040,
            background: "rgba(18,18,18,0.76)",
            boxShadow: "0 34px 120px rgba(0,0,0,0.55)",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 18,
              color: "rgba(255,255,255,0.64)",
              fontSize: 30,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                background: "#ff6a1a",
                borderRadius: 999,
                display: "block",
                height: 14,
                width: 14,
              }}
            />
            Karachi, Pakistan
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <h1
              style={{
                fontSize: 98,
                fontWeight: 600,
                letterSpacing: "-0.07em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Faizan Waheed
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 42,
                letterSpacing: "-0.045em",
                lineHeight: 1.15,
                margin: 0,
                maxWidth: 810,
              }}
            >
              Videographer & Video Editor creating ads, reels, commercials, and
              cinematic brand stories.
            </p>
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.46)",
              fontSize: 26,
              letterSpacing: "-0.02em",
            }}
          >
            Selected Work · Services · Contact
          </div>
        </div>
      </div>
    ),
    size,
  );
}
