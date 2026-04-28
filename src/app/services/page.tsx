import type { Metadata } from "next";
import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six capabilities, one team. Data analytics, AI, data engineering, BI, cloud integration, and model monitoring.",
};

const rows = [
  {
    title: "Data analytics",
    body: "Strategy, integration, and the full descriptive to diagnostic to predictive to prescriptive ladder. Big data, real-time, industry-specific. Insight your operators can act on, not a deck.",
  },
  {
    title: "Artificial intelligence",
    body: "Predictive models, machine learning, computer vision, NLP, chatbots, virtual assistants. Strategy through implementation, with the regulatory rigour your industry expects.",
  },
  {
    title: "Data engineering",
    body: "Pipelines, warehousing, integration, governance, quality. Cloud-native or on-prem, batch or real-time. The foundation that makes everything above it possible.",
  },
  {
    title: "Business intelligence",
    body: "Reporting, visualisation, dashboarding, self-service BI, advanced analytics integration. The right information in the right hands at the right time.",
  },
  {
    title: "Cloud integration",
    body: "Strategy, migration, platform selection, hybrid architectures, API design and management. A connected, agile IT ecosystem without the migration drama.",
  },
  {
    title: "Model monitoring & maintenance",
    body: "Drift detection, validation, retraining, auditing, regulatory compliance. The work that begins after launch, because models in production aren't models in a notebook.",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page-bold">
      <div className="services-bg" aria-hidden="true">
        <HeroVideo />
      </div>

      <section className="hero bold services-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1 style={{ marginTop: 18, maxWidth: 880 }}>
            What we <span className="accent">build.</span>
          </h1>
          <p className="lede services-lede">
            Six capabilities, one team. We design and ship the technology that turns enterprise data into timely, actionable decisions, from the pipeline beneath to the model on top.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 96, position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="services-list">
            {rows.map((r) => (
              <Link key={r.title} className="service-row" href="/contact">
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <span className="service-row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
