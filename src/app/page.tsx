import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { ScrollCue } from "@/components/scroll-cue";

const industries = [
  "Banking",
  "Insurance",
  "Lending",
  "E-commerce",
  "Automotive",
  "Software",
  "Energy",
  "Consumer products",
  "Professional services",
];

const services = [
  {
    title: "Data analytics.",
    body: "Descriptive, diagnostic, predictive, prescriptive. The full ladder, turning raw operational data into the insight that informs the next decision.",
  },
  {
    title: "Artificial intelligence.",
    body: "Predictive models, computer vision, NLP, machine learning. Designed for production, validated for compliance, monitored after launch.",
  },
  {
    title: "Data engineering.",
    body: "Pipelines, warehousing, governance, real-time processing. The foundation underneath everything else, built to scale with the business.",
  },
  {
    title: "Business intelligence.",
    body: "Dashboards, self-service reporting, advanced analytics integration. The right information in the right hands at the right time.",
  },
  {
    title: "Cloud integration.",
    body: "On-premises to cloud, API development, hybrid architectures. A connected, agile IT ecosystem without the migration drama.",
  },
  {
    title: "Model monitoring.",
    body: "Drift detection, retraining, audit trails, regulatory compliance. We don't ship a model and walk away, we keep it accurate.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero bold">
        <HeroVideo />
        <div className="container">
          <div className="grid">
            <div>
              <h1 style={{ marginTop: 18 }}>
                Tailor-made <span className="accent">AI systems</span>, built around your business.
              </h1>
              <p className="lede">
                Custom AI, shipped fast, priced on outcomes. We design and ship production systems for businesses that need real answers today.
              </p>
              <div className="cta">
                <Link className="btn btn-primary" href="/contact">
                  Get in touch <span className="arrow">→</span>
                </Link>
                <Link className="btn btn-ghost" href="/approach">
                  See how we work
                </Link>
              </div>
            </div>
            <div className="mark-col">
              <Image
                src="/brand/nukleus_mark_clean.svg"
                alt="Nukleus mark"
                width={460}
                height={460}
                priority
              />
            </div>
          </div>
        </div>
        <ScrollCue />
      </section>

      {/* Manifesto */}
      <section className="manifesto">
        <div className="container">
          <span className="eyebrow">Our Core</span>
          <blockquote>
            Discerning <span className="accent">information from noise</span> is the work. Everything else, the pipelines, the models, the dashboards, exists to serve that single decision.
          </blockquote>
          <cite>The Nukleus mission, in one breath.</cite>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="industries-band" aria-label="Industries we serve">
        <div className="industries-track">
          {[...industries, ...industries].map((industry, i) => (
            <span key={`${industry}-${i}`}>{industry}</span>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2>What we build.</h2>
            <p className="lede">
              Bespoke tools and technologies that integrate into your workflows. We abstract the technical complexity so your team can focus on the core of the business, its nucleus.
            </p>
          </div>
          <div className="services-grid bold">
            {services.map((s, i) => (
              <div key={s.title} className="service">
                <div className="num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing proof */}
      <section className="proof bold">
        <div className="container">
          <span className="eyebrow">A note on pricing</span>
          <blockquote style={{ marginTop: 24 }}>
            We price against outcomes, a percentage of revenue gained or cost saved. If our work doesn&apos;t move the number, your obligation is minimised. Same incentive, same direction, every engagement.
          </blockquote>
          <cite>The Nukleus contract, in one paragraph.</cite>
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band bold">
        <div className="container">
          <div className="grid">
            <div>
              <h2>
                Got a problem worth <em>solving?</em>
              </h2>
              <p className="meta">
                A 30-minute call. We&apos;ll tell you in plain English where data, AI, or better tooling actually moves the needle, and where it doesn&apos;t.
              </p>
            </div>
            <div>
              <Link className="btn btn-primary" href="/contact">
                Book a call <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
