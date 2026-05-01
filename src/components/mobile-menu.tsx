"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  links: { href: string; label: string }[];
};

export function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-trigger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`bar ${open ? "open" : ""}`} aria-hidden />
        <span className={`bar ${open ? "open" : ""}`} aria-hidden />
      </button>
      <div
        className={`mobile-menu-drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu-nav" onClick={() => setOpen(false)}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
