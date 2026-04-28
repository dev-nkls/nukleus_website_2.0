"use client";

import { useEffect, useState } from "react";

export function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > window.innerHeight * 0.25);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`scroll-cue${hidden ? " is-hidden" : ""}`} aria-hidden="true">
      <span className="label">Scroll</span>
      <span className="chev">
        <svg
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 5l5 5 5-5" />
        </svg>
      </span>
    </div>
  );
}
