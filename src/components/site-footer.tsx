import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container row">
        <Link href="/" className="lockup" aria-label="Nukleus home">
          <Image src="/brand/nukleus_mark.svg" alt="" width={24} height={24} />
          <span className="name">Nukleus</span>
        </Link>
        <nav className="nav">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="copy">© Nukleus. All rights reserved.</p>
      </div>
    </footer>
  );
}
