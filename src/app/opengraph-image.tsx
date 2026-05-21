import { ImageResponse } from "next/og";
import { BRAND, COLORS, PALETTE, SITE } from "@/lib/constants";

// "booth" coloured per-letter, mirroring the logo (Latin only — the default
// ImageResponse font has no Japanese glyphs, so katakana is omitted here).
const BOOTH = [
  { ch: "b", color: PALETTE.red },
  { ch: "o", color: PALETTE.orange },
  { ch: "o", color: PALETTE.yellow },
  { ch: "t", color: PALETTE.green },
  { ch: "h", color: PALETTE.blue },
];

// Placeholder social share image, generated at build time. Replace with
// real artwork once provided (CLAUDE.md: OG image is TBD). Latin-only copy —
// the default ImageResponse font has no Japanese glyphs.
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Generate once at build time (required under `output: "export"`).
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: COLORS.deepBlack,
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,200,200,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 85%, rgba(212,160,74,0.10) 0%, transparent 55%)`,
          color: COLORS.white,
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: COLORS.chrome3,
          }}
        >
          {BRAND.location}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: -6,
            lineHeight: 1,
            marginTop: 24,
          }}
        >
          <span style={{ color: COLORS.white }}>another</span>
          {BOOTH.map((l, i) => (
            <span key={i} style={{ color: l.color }}>
              {l.ch}
            </span>
          ))}
        </div>
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            color: COLORS.chrome2,
            marginTop: 36,
          }}
        >
          {BRAND.tagline}
        </div>
      </div>
    ),
    size,
  );
}
