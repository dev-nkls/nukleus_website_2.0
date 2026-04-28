"use client";

import { useCallback } from "react";

export function ThemeToggle() {
  const onClick = useCallback(() => {
    const root = document.documentElement;
    const isDark = root.getAttribute("data-theme") === "dark-red";
    if (isDark) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", "dark-red");
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className="theme-toggle"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <svg
        className="icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        className="icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
