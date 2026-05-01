// Auto-served at /opengraph-image and wired into <meta property="og:image">
// + <meta name="twitter:image"> by Next. ImageResponse (Satori) renders this
// JSX into a 1200×630 PNG at build time — no Lambda, just a static asset.
//
// Satori supports a flexbox subset of CSS; complex CSS (backdrop-filter,
// filter, container queries) is not available, so the layout is kept flat
// and the brand mark is inlined as plain SVG primitives.

import { ImageResponse } from "next/og";

export const alt = "Nukleus — Tailor-made AI for business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TRAIL = [
  { cx: 223, cy: 95, r: 5.0, opacity: 0.9 },
  { cx: 253, cy: 74, r: 4.8, opacity: 0.84 },
  { cx: 286, cy: 59, r: 4.6, opacity: 0.78 },
  { cx: 322, cy: 50, r: 4.4, opacity: 0.72 },
  { cx: 358, cy: 50, r: 4.2, opacity: 0.66 },
  { cx: 394, cy: 59, r: 4.0, opacity: 0.6 },
  { cx: 428, cy: 74, r: 3.7, opacity: 0.54 },
  { cx: 457, cy: 95, r: 3.5, opacity: 0.48 },
  { cx: 482, cy: 122, r: 3.2, opacity: 0.43 },
  { cx: 500, cy: 154, r: 3.0, opacity: 0.38 },
  { cx: 511, cy: 189, r: 2.8, opacity: 0.33 },
  { cx: 515, cy: 225, r: 2.6, opacity: 0.28 },
  { cx: 511, cy: 261, r: 2.4, opacity: 0.24 },
  { cx: 500, cy: 296, r: 2.2, opacity: 0.2 },
  { cx: 482, cy: 328, r: 2.0, opacity: 0.17 },
  { cx: 457, cy: 355, r: 1.9, opacity: 0.14 },
  { cx: 428, cy: 377, r: 1.7, opacity: 0.11 },
  { cx: 394, cy: 391, r: 1.6, opacity: 0.09 },
  { cx: 358, cy: 400, r: 1.4, opacity: 0.07 },
  { cx: 322, cy: 400, r: 1.3, opacity: 0.06 },
  { cx: 286, cy: 391, r: 1.2, opacity: 0.05 },
  { cx: 253, cy: 377, r: 1.1, opacity: 0.04 },
  { cx: 223, cy: 355, r: 1.0, opacity: 0.03 },
  { cx: 198, cy: 328, r: 0.9, opacity: 0.025 },
  { cx: 180, cy: 296, r: 0.8, opacity: 0.018 },
];

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 56,
          padding: "0 88px",
          background: "#f8f8fc",
          color: "#0e0e18",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand mark + wordmark stack — mark on top, NUKLEUS + accent line
            below, mirroring the reference particle-aligned lockup. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            flexShrink: 0,
          }}
        >
          <svg width={420} height={420} viewBox="140 20 400 400">
            <defs>
              <radialGradient id="og_nuc" cx="36%" cy="30%" r="64%">
                <stop offset="0%" stopColor="#ff5252" />
                <stop offset="40%" stopColor="#d40d0d" />
                <stop offset="100%" stopColor="#5c0000" />
              </radialGradient>
              <radialGradient id="og_el" cx="36%" cy="30%" r="64%">
                <stop offset="0%" stopColor="#ff5a5a" />
                <stop offset="40%" stopColor="#cc1010" />
                <stop offset="100%" stopColor="#5a0000" />
              </radialGradient>
              <radialGradient id="og_hz" cx="50%" cy="48%" r="52%">
                <stop offset="0%" stopColor="#eaeaf4" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#f8f8fc" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="340"
              cy="225"
              rx="300"
              ry="240"
              fill="url(#og_hz)"
              opacity="0.65"
            />

            {TRAIL.map((d, i) => (
              <circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r={d.r}
                fill="#181820"
                opacity={d.opacity}
              />
            ))}

            <circle cx="340" cy="225" r="82" fill="#cc0000" opacity="0.04" />
            <circle cx="340" cy="225" r="70" fill="#cc0000" opacity="0.05" />
            <circle cx="340" cy="225" r="68" fill="url(#og_nuc)" />
            <ellipse cx="320" cy="208" rx="22" ry="16" fill="#ff6868" opacity="0.36" />
            <ellipse cx="312" cy="202" rx="9" ry="7" fill="#ffbbbb" opacity="0.44" />

            <circle cx="188" cy="138" r="26" fill="#cc0000" opacity="0.05" />
            <circle cx="188" cy="138" r="24" fill="url(#og_el)" />
            <ellipse cx="180" cy="131" rx="8" ry="6" fill="#ff7070" opacity="0.36" />
            <ellipse cx="177" cy="129" rx="3.5" ry="2.5" fill="#ffcccc" opacity="0.44" />
          </svg>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.6em",
              color: "#0e0e18",
              fontWeight: 500,
              paddingLeft: "0.6em",
            }}
          >
            NUKLEUS
          </div>
          <div
            style={{
              width: 140,
              height: 1.5,
              background: "#d40d0d",
              opacity: 0.48,
            }}
          />
        </div>

        {/* Tagline + sub-line — dark on cream, mirrors the H1 / sub-head
            locked in CLAUDE.md. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            width: 580,
          }}
        >
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#0e0e18",
            }}
          >
            Tailor-made AI systems, built around your business.
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#5a5a66",
              fontWeight: 400,
            }}
          >
            Custom AI, shipped fast, priced on outcomes.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
