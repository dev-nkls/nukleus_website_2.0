"use client";

// Inline SVG copy of public/brand/nukleus_mark_clean.svg with animation
// hooks: <g class="mark-bob"> floats the whole mark, <g class="mark-orbit">
// drives the electron's tilted-plane orbit, the trail dots carry a staggered
// pulse via --i, and click events fire a one-shot expanding ring (.mark-pulse).
//
// Mouse-move over the mark sets --tilt-x / --tilt-y on the SVG so the whole
// mark gets a subtle 3D parallax. Leaving clears them.
//
// Keep this in sync with the source SVG if the brand mark changes.

import { CSSProperties, MouseEvent, useRef, useState } from "react";

type TrailDot = { cx: number; cy: number; r: number; opacity: number };

// 25 dots, ordered clockwise around the orbit starting from the upper-left.
const TRAIL_DOTS: TrailDot[] = [
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

// Max parallax tilt in degrees in any direction.
const TILT_MAX_DEG = 6;

export function HeroMark() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [pulses, setPulses] = useState<number[]>([]);

  function handleMouseMove(e: MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    svg.style.setProperty("--tilt-x", `${(-ny * TILT_MAX_DEG * 2).toFixed(2)}deg`);
    svg.style.setProperty("--tilt-y", `${(nx * TILT_MAX_DEG * 2).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    const svg = svgRef.current;
    if (!svg) return;
    svg.style.removeProperty("--tilt-x");
    svg.style.removeProperty("--tilt-y");
  }

  function handleClick() {
    setPulses((prev) => [...prev, Date.now() + Math.random()]);
  }

  function removePulse(id: number) {
    setPulses((prev) => prev.filter((p) => p !== id));
  }

  return (
    <svg
      ref={svgRef}
      viewBox="60 -20 500 480"
      role="img"
      aria-label="Nukleus mark"
      style={{ width: "100%", maxWidth: 460, height: "auto" }}
      className="hero-mark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <defs>
        <radialGradient id="gn_p2" cx="36%" cy="30%" r="64%">
          <stop offset="0%" stopColor="#ff5252" />
          <stop offset="40%" stopColor="#d40d0d" />
          <stop offset="100%" stopColor="#5c0000" />
        </radialGradient>
        <radialGradient id="ge_p2" cx="36%" cy="30%" r="64%">
          <stop offset="0%" stopColor="#ff5a5a" />
          <stop offset="40%" stopColor="#cc1010" />
          <stop offset="100%" stopColor="#5a0000" />
        </radialGradient>
        <radialGradient id="hz_p2" cx="50%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#eaeaf4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f8f8fc" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="mark-bob">
        {/* Trail dots — staggered pulse via --i (see globals.css) */}
        <g className="mark-trail">
          {TRAIL_DOTS.map((d, i) => (
            <circle
              key={i}
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              fill="#181820"
              opacity={d.opacity}
              style={{ ["--i" as string]: i } as CSSProperties}
            />
          ))}
        </g>

        {/* Click-pulse rings: each new click pushes a temporary ring that
            animates outward from the nucleus and self-removes on end. */}
        {pulses.map((id) => (
          <circle
            key={id}
            className="mark-pulse"
            cx="340"
            cy="225"
            fill="none"
            stroke="#d40d0d"
            onAnimationEnd={() => removePulse(id)}
          />
        ))}

        {/* Nucleus */}
        <g className="mark-nucleus">
          <circle cx="340" cy="225" r="82" fill="#cc0000" opacity="0.04" />
          <circle cx="340" cy="225" r="70" fill="#cc0000" opacity="0.05" />
          <circle cx="340" cy="225" r="68" fill="url(#gn_p2)" />
          <ellipse cx="320" cy="208" rx="22" ry="16" fill="#ff6868" opacity="0.36" />
          <ellipse cx="312" cy="202" rx="9" ry="7" fill="#ffbbbb" opacity="0.44" />
        </g>

        {/* Electron — orbits the nucleus around (340, 225) on a tilted plane */}
        <g className="mark-orbit">
          <circle cx="188" cy="138" r="26" fill="#cc0000" opacity="0.05" />
          <circle cx="188" cy="138" r="24" fill="url(#ge_p2)" />
          <ellipse cx="180" cy="131" rx="8" ry="6" fill="#ff7070" opacity="0.36" />
          <ellipse cx="177" cy="129" rx="3.5" ry="2.5" fill="#ffcccc" opacity="0.44" />
        </g>
      </g>
    </svg>
  );
}
