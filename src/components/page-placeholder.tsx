type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function PagePlaceholder({ eyebrow, title, lede }: PagePlaceholderProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="flex w-full max-w-3xl flex-col items-start gap-6">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/50">
          {eyebrow}
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-xl text-lg text-foreground/70">{lede}</p>
        <p className="text-sm text-foreground/40">
          More detail coming soon.
        </p>
      </div>
    </section>
  );
}
