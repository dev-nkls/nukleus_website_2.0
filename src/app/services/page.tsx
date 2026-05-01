import type { Metadata } from "next";
import Link from "next/link";
import { PageBg } from "@/components/page-bg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom AI systems engineered around your specific business problems.",
};

const rows: { title: string; body: string }[] = [
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

export default function ServicesPage() {
  return (
    <div className="page-bg-host">
      <PageBg />

      <section className="center-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>What we build.</h1>
          <p className="lede">
            Custom AI systems engineered around your specific business problems, from production-grade agents to task automation to model-backed internal tools.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
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
