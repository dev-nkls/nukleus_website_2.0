import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-black/5">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Nukleus home">
          <Image
            src="/brand/nukleus_mark.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-xs font-medium tracking-[0.3em] uppercase">
            Nukleus
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-foreground/50">
          © {year} Nukleus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
