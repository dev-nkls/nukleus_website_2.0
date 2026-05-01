// HeaderMark — static brand mark used in the site header (and footer).
//
// Inlined as JSX (rather than imported via <Image src=...svg>) so the trail
// dots and nucleus can be re-themed via CSS in dark-red mode: trail goes
// white while the nucleus + electron stay red, matching the favicon look.
//
// Mirrors public/brand/nukleus_mark.svg — keep them in sync if the mark
// ever changes. The SVG file on disk remains the source of truth for the
// raw shape; this component just wraps it with class hooks.

type Props = {
  size?: number;
  className?: string;
};

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

export function HeaderMark({ size = 36, className }: Props) {
  return (
    <svg
      viewBox="100 20 400 400"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
      className={`header-mark${className ? ` ${className}` : ""}`}
    >
      <defs>
        <radialGradient id="hm_nuc" cx="36%" cy="30%" r="64%">
          <stop offset="0%" stopColor="#ff5252" />
          <stop offset="40%" stopColor="#d40d0d" />
          <stop offset="100%" stopColor="#5c0000" />
        </radialGradient>
        <radialGradient id="hm_el" cx="36%" cy="30%" r="64%">
          <stop offset="0%" stopColor="#ff5a5a" />
          <stop offset="40%" stopColor="#cc1010" />
          <stop offset="100%" stopColor="#5a0000" />
        </radialGradient>
      </defs>

      <g className="header-mark-trail">
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
      </g>

      <g className="header-mark-nucleus">
        <circle cx="340" cy="225" r="82" fill="#cc0000" opacity="0.04" />
        <circle cx="340" cy="225" r="70" fill="#cc0000" opacity="0.05" />
        <circle cx="340" cy="225" r="68" fill="url(#hm_nuc)" />
        <ellipse cx="320" cy="208" rx="22" ry="16" fill="#ff6868" opacity="0.36" />
        <ellipse cx="312" cy="202" rx="9" ry="7" fill="#ffbbbb" opacity="0.44" />
      </g>

      <g className="header-mark-electron">
        <circle cx="188" cy="138" r="26" fill="#cc0000" opacity="0.05" />
        <circle cx="188" cy="138" r="24" fill="url(#hm_el)" />
        <ellipse cx="180" cy="131" rx="8" ry="6" fill="#ff7070" opacity="0.36" />
        <ellipse cx="177" cy="129" rx="3.5" ry="2.5" fill="#ffcccc" opacity="0.44" />
      </g>
    </svg>
  );
}
