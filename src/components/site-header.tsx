import Link from "next/link";
import { HeaderMark } from "@/components/header-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container row">
        <Link href="/" className="lockup" aria-label="Nukleus home">
          <HeaderMark size={54} />
          <span className="name">Nukleus</span>
        </Link>
        <nav className="nav nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
