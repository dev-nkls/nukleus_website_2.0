"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onLoaded = () => {
      if (v.readyState >= 2) v.classList.add("is-ready");
    };
    v.addEventListener("loadeddata", onLoaded);
    if (v.readyState >= 2) v.classList.add("is-ready");
    return () => v.removeEventListener("loadeddata", onLoaded);
  }, []);

  return (
    <>
      <video
        ref={ref}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/brand/hero_bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-veil" aria-hidden="true" />
    </>
  );
}
