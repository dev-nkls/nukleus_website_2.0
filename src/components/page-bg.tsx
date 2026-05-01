"use client";

// PageBg — video backdrop for the services/approach/about/contact pages.
// Renders a single <video> sized to its parent (.page-bg-host) with the
// same monochrome wash + warm cream + faint red ellipses veil as the home
// hero. CSS lives in globals.css under .page-bg.
//
// The `offset` prop is used by the approach page where two PageBg
// instances sit one above the other — we seek the second one to
// duration/2 on metadata load so the two clips don't loop in lockstep.

import { useEffect, useRef } from "react";

export function PageBg({ offset = false }: { offset?: boolean }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const markReady = () => {
      if (v.readyState >= 2) v.classList.add("is-ready");
    };
    const seekHalf = () => {
      if (offset && Number.isFinite(v.duration) && v.duration > 0) {
        try {
          v.currentTime = v.duration / 2;
        } catch {
          /* ignore — some browsers throw before metadata is fully ready */
        }
      }
    };
    v.addEventListener("loadeddata", markReady);
    v.addEventListener("loadedmetadata", seekHalf);
    if (v.readyState >= 2) markReady();
    if (offset && v.readyState >= 1) seekHalf();
    return () => {
      v.removeEventListener("loadeddata", markReady);
      v.removeEventListener("loadedmetadata", seekHalf);
    };
  }, [offset]);

  return (
    <div className="page-bg" aria-hidden="true">
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/brand/hero_bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
