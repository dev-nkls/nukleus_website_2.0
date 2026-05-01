import Image from "next/image";
import Link from "next/link";
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
          <Image
            src="/brand/nukleus_mark.svg"
            alt=""
            width={36}
            height={36}
            priority
          />
          <span className="name">Nukleus</span>
        </Link>
        <nav className="nav nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
