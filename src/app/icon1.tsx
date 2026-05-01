// 512×512 PNG icon for Android Add-to-Home-Screen and PWA install.
// Co-exists with icon.svg (desktop favicon) — Next emits both.

import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon512() {
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
        <svg width={512} height={512} viewBox="140 20 400 400">
          <defs>
            <radialGradient id="i512_nuc" cx="36%" cy="30%" r="64%">
              <stop offset="0%" stopColor="#ff5252" />
              <stop offset="40%" stopColor="#d40d0d" />
              <stop offset="100%" stopColor="#5c0000" />
            </radialGradient>
            <radialGradient id="i512_el" cx="36%" cy="30%" r="64%">
              <stop offset="0%" stopColor="#ff5a5a" />
              <stop offset="40%" stopColor="#cc1010" />
              <stop offset="100%" stopColor="#5a0000" />
            </radialGradient>
          </defs>

          <circle cx="340" cy="225" r="82" fill="#cc0000" opacity="0.04" />
          <circle cx="340" cy="225" r="70" fill="#cc0000" opacity="0.05" />
          <circle cx="340" cy="225" r="68" fill="url(#i512_nuc)" />
          <ellipse cx="320" cy="208" rx="22" ry="16" fill="#ff6868" opacity="0.36" />
          <ellipse cx="312" cy="202" rx="9" ry="7" fill="#ffbbbb" opacity="0.44" />

          <circle cx="188" cy="138" r="26" fill="#cc0000" opacity="0.05" />
          <circle cx="188" cy="138" r="24" fill="url(#i512_el)" />
          <ellipse cx="180" cy="131" rx="8" ry="6" fill="#ff7070" opacity="0.36" />
          <ellipse cx="177" cy="129" rx="3.5" ry="2.5" fill="#ffcccc" opacity="0.44" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
