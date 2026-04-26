import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-black/5 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Nukleus home">
          <Image
            src="/brand/nukleus_particle_aligned.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9"
          />
          <span className="text-sm font-medium tracking-[0.3em] uppercase">
            Nukleus
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-foreground/70 sm:flex">
          {/* TODO: real nav once site map is decided */}
        </nav>
      </div>
    </header>
  );
}
