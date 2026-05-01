"use client";

// HeroMark — animated brand mark on the home hero.
//
// Architecture (matches ui_kits/marketing/index.html):
//   - The static layers (nucleus + 25 trail dots) are painted in inline SVG.
//   - The orbiting electron and click-pulse rings are HTML overlays positioned
//     absolutely on top of the SVG. Their parents (.mark-bob, .mark-orbit) are
//     plain divs that get GPU-composited transforms — way cheaper than animating
//     transforms on SVG groups, which forced a CSS-pixel re-rasterization of the
//     whole SVG each frame and was the source of orbit jank on large screens.
//
// Pivot math: nucleus at SVG (340, 225). With viewBox "90 -20 500 480",
// that's (340-90)/500 = 50% across, (225-(-20))/480 = 51.04% down.
//
// Trail-ring radius (measured from the TRAIL_DOTS array): ~175.5 SVG units
// = 35.1% of the 500-unit-wide viewBox, so the electron sits at 35.1cqw from
// the nucleus pivot.
//
// The electron orbits on a plane tilted 20° (rotateX(20deg)), so its path
// projects as an ellipse with vertical axis cos(20°) ≈ 0.9397 of the
// horizontal. The trail dots are painted as a flat circle in SVG — to keep
// the two paths coincident, we squash the SVG trail group by the same
// cos(20°) around the nucleus (see globals.css `.mark-trail`).
//
// Mouse-move sets --tilt-x / --tilt-y on the wrapper for a subtle 3D parallax.
// Click fires a one-shot expanding ring (.mark-pulse).
//
// Orbit rotation is driven by requestAnimationFrame (not a CSS animation) so
// that hover-driven speed changes integrate continuously from the current
// angle. A CSS `animation-duration` swap re-maps elapsed-time to a new
// percentage of the cycle, which made the electron jump to a different
// position on hover-out.
//
// Keep this in sync with the source SVG if the brand mark changes.

import { CSSProperties, MouseEvent, useEffect, useRef, useState } from "react";

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

// Orbit speeds — degrees per second. Counter-clockwise so the rendered
// rotation decreases over time (matches the prior keyframe -120° → -480°).
const BASE_SPEED_DPS = 360 / 12; // 12s per cycle = 30 deg/s
const HOVER_SPEED_DPS = 360 / 1.2; // 1.2s per cycle = 300 deg/s
// Time constant for the speed lerp. Smaller = snappier handoff.
const SPEED_TAU_S = 0.25;

export function HeroMark() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const [pulses, setPulses] = useState<number[]>([]);

  // Drive the orbit rotation in JS so speed changes don't snap the angle.
  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      orbit.style.transform = "rotateX(20deg) rotate(-120deg)";
      return;
    }

    let angle = -120; // matches prior @keyframes start
    let speed = BASE_SPEED_DPS;
    let lastT: number | null = null;
    let raf = 0;

    const step = (t: number) => {
      if (lastT == null) lastT = t;
      const dt = Math.min((t - lastT) / 1000, 0.1);
      lastT = t;

      const target =
        wrapperRef.current?.matches(":hover") ? HOVER_SPEED_DPS : BASE_SPEED_DPS;
      const alpha = 1 - Math.exp(-dt / SPEED_TAU_S);
      speed += (target - speed) * alpha;

      angle -= speed * dt;
      // Keep the angle bounded so it doesn't grow unboundedly over time.
      if (angle < -3600) angle += 360;

      orbit.style.transform = `rotateX(20deg) rotate(${angle.toFixed(3)}deg)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    wrap.style.setProperty("--tilt-x", `${(-ny * TILT_MAX_DEG * 2).toFixed(2)}deg`);
    wrap.style.setProperty("--tilt-y", `${(nx * TILT_MAX_DEG * 2).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    wrap.style.removeProperty("--tilt-x");
    wrap.style.removeProperty("--tilt-y");
  }

  function handleClick() {
    setPulses((prev) => [...prev, Date.now() + Math.random()]);
  }

  function removePulse(id: number) {
    setPulses((prev) => prev.filter((p) => p !== id));
  }

  return (
    <div
      ref={wrapperRef}
      role="img"
      aria-label="Nukleus mark"
      className="hero-mark"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Static layers — nucleus + trail dots — painted in SVG. */}
      <svg viewBox="90 -20 500 480" aria-hidden="true">
        <defs>
          <radialGradient id="gn_p2" cx="36%" cy="30%" r="64%">
            <stop offset="0%" stopColor="#ff5252" />
            <stop offset="40%" stopColor="#d40d0d" />
            <stop offset="100%" stopColor="#5c0000" />
          </radialGradient>
          <radialGradient id="hz_p2" cx="50%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#eaeaf4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#f8f8fc" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Trail dots — staggered pulse via --i (see globals.css).
            The whole group is squashed by cos(20°) so the flat SVG ring
            matches the ellipse the tilted electron orbit traces. */}
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

        {/* Nucleus */}
        <g className="mark-nucleus">
          <circle cx="340" cy="225" r="82" fill="#cc0000" opacity="0.04" />
          <circle cx="340" cy="225" r="70" fill="#cc0000" opacity="0.05" />
          <circle cx="340" cy="225" r="68" fill="url(#gn_p2)" />
          <ellipse cx="320" cy="208" rx="22" ry="16" fill="#ff6868" opacity="0.36" />
          <ellipse cx="312" cy="202" rx="9" ry="7" fill="#ffbbbb" opacity="0.44" />
        </g>
      </svg>

      {/* HTML overlay: bob > orbit > electron. Pulses get appended into
          .mark-bob at click time so they bob along with the mark. */}
      <div className="mark-bob">
        <div ref={orbitRef} className="mark-orbit">
          <div className="mark-electron">
            <svg viewBox="-26 -26 52 52" aria-hidden="true">
              <defs>
                <radialGradient id="ge_p2_html" cx="36%" cy="30%" r="64%">
                  <stop offset="0%" stopColor="#ff5a5a" />
                  <stop offset="40%" stopColor="#cc1010" />
                  <stop offset="100%" stopColor="#5a0000" />
                </radialGradient>
              </defs>
              <circle cx="0" cy="0" r="26" fill="#cc0000" opacity="0.05" />
              <circle cx="0" cy="0" r="24" fill="url(#ge_p2_html)" />
              <ellipse cx="-8" cy="-7" rx="8" ry="6" fill="#ff7070" opacity="0.36" />
              <ellipse cx="-11" cy="-9" rx="3.5" ry="2.5" fill="#ffcccc" opacity="0.44" />
            </svg>
          </div>
        </div>

        {pulses.map((id) => (
          <div
            key={id}
            className="mark-pulse"
            onAnimationEnd={() => removePulse(id)}
          />
        ))}
      </div>
    </div>
  );
}
