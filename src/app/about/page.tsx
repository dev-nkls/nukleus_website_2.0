import type { Metadata } from "next";
import { PageBg } from "@/components/page-bg";

export const metadata: Metadata = {
  title: "About",
  description: "The team behind Nukleus.",
};

export default function AboutPage() {
  return (
    <div className="page-bg-host">
      <PageBg />

      <section className="center-hero left-align">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>The team behind Nukleus.</h1>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="about-prose">
            <p className="first">
              Nukleus is a small, senior team of engineers and applied scientists who design and ship AI systems for the businesses paying for them, not for conferences, not for venture decks, not for the demo reel.
            </p>
            <p>
              We started Nukleus because most AI work was being scoped by the wrong people, priced by the hour, and shipped without the monitoring that would tell you whether it was actually working. We do the opposite. We scope against the decision the business is trying to make, price against the outcome, and stay on the model after launch.
            </p>
            <p>
              If you have a problem that genuinely needs an AI-shaped answer, we&apos;d like to hear about it. If you don&apos;t, we&apos;ll tell you that too.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
