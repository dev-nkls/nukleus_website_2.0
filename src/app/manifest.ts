// Web App Manifest — drives Android Add-to-Home-Screen + PWA install.
// Auto-served at /manifest.webmanifest and wired into <link rel="manifest">.
//
// iOS uses /apple-icon (180×180) instead of this manifest. Both ship.

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nukleus",
    short_name: "Nukleus",
    description:
      "Tailor-made AI systems for businesses. Custom AI, shipped fast, priced on outcomes.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f8fc",
    theme_color: "#a01818",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon1", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
