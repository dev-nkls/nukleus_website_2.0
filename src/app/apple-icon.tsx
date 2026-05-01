// Auto-served at /apple-icon and wired into <link rel="apple-touch-icon">
// by Next. Generates a 180×180 PNG at build time.
//
// Apple requires opaque (no transparency) and discourages thin marks at
// this size, so we render the brand mark centered on a cream surface
// matching the site bg, with the mark scaled to fill the icon area.

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f8fc",
        }}
      >
        <svg width={180} height={180} viewBox="140 20 400 400">
          <defs>
            <radialGradient id="ai_nuc" cx="36%" cy="30%" r="64%">
              <stop offset="0%" stopColor="#ff5252" />
              <stop offset="40%" stopColor="#d40d0d" />
              <stop offset="100%" stopColor="#5c0000" />
            </radialGradient>
            <radialGradient id="ai_el" cx="36%" cy="30%" r="64%">
              <stop offset="0%" stopColor="#ff5a5a" />
              <stop offset="40%" stopColor="#cc1010" />
              <stop offset="100%" stopColor="#5a0000" />
            </radialGradient>
          </defs>

          <circle cx="340" cy="225" r="82" fill="#cc0000" opacity="0.04" />
          <circle cx="340" cy="225" r="70" fill="#cc0000" opacity="0.05" />
          <circle cx="340" cy="225" r="68" fill="url(#ai_nuc)" />
          <ellipse cx="320" cy="208" rx="22" ry="16" fill="#ff6868" opacity="0.36" />
          <ellipse cx="312" cy="202" rx="9" ry="7" fill="#ffbbbb" opacity="0.44" />

          <circle cx="188" cy="138" r="26" fill="#cc0000" opacity="0.05" />
          <circle cx="188" cy="138" r="24" fill="url(#ai_el)" />
          <ellipse cx="180" cy="131" rx="8" ry="6" fill="#ff7070" opacity="0.36" />
          <ellipse cx="177" cy="129" rx="3.5" ry="2.5" fill="#ffcccc" opacity="0.44" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
