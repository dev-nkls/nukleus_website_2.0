import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <Image
            src="/brand/nukleus_logo_2026.png"
            alt="Nukleus"
            width={520}
            height={620}
            priority
            className="h-auto w-full max-w-md"
          />
          <h1 className="mt-12 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Tailor-made AI systems, built around your business.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/70">
            Custom AI, shipped fast, priced on outcomes.
          </p>
        </div>
      </main>
    </>
  );
}
