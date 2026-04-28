import type { Metadata } from "next";
import { HeroVideo } from "@/components/hero-video";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we work. Business-first, domain-immersed, outcome-priced.",
};

const pillars = [
  {
    accent: "Business",
    suffix: "-first.",
    body: "Technology is the means, not the headline. We start with the decision you're trying to make better, then work backward to the system that supports it.",
  },
  {
    accent: "Domain",
    suffix: "-immersed.",
    body: "Banking, insurance, lending, e-commerce, automotive, energy, software, consumer products. We learn your industry's vocabulary before we write a line of code.",
  },
  {
    accent: "Outcome",
    suffix: "-priced.",
    body: "We charge a percentage of the revenue gained or cost saved. Mutual incentive, transparent measurement, minimised risk.",
  },
];

const phases = [
  {
    title: "Discover.",
    body: "Stakeholder interviews, workflow walkthroughs, and a review of your data and systems. We surface the real business problem and define the outcome we'll be measured against.",
  },
  {
    title: "Architect.",
    body: "A written blueprint of the solution: data sources, model approach, integration points, success metrics, regulatory considerations. Signed off before any build begins.",
  },
  {
    title: "Build.",
    body: "Iterative development with weekly demos. We engineer the data foundation, train and validate the models, and refine against fresh data until the metric moves.",
  },
  {
    title: "Deploy.",
    body: "Integration with your existing systems, pilot testing in real-world conditions, and hands-on training for the people who will use it every day.",
  },
  {
    title: "Sustain.",
    body: "Monitoring for drift, scheduled retraining, audit trails for compliance, and ongoing partnership for what comes next. The handover is a beginning, not an ending.",
  },
];

export default function ApproachPage() {
  return (
    <div className="approach-page-bold">
      <div className="services-bg" aria-hidden="true">
        <HeroVideo />
      </div>

      <section className="hero bold services-hero">
        <div className="container">
          <span className="eyebrow">Approach</span>
          <h1 style={{ marginTop: 18, maxWidth: 880 }}>
            How we <span className="accent">work.</span>
          </h1>
          <p className="lede services-lede">
            Business-first technologists. We immerse ourselves in your domain, build tools tailored to it, and tie our pricing to the value we create, not the hours we log.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 96, position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="approach-pillars">
            {pillars.map((p, i) => (
              <div key={p.accent} className="approach-pillar" tabIndex={0}>
                <div className="pillar-inner">
                  <div className="pillar-face pillar-front">
                    <div className="num">{i + 1}</div>
                    <h3>
                      <span className="accent">{p.accent}</span>
                      {p.suffix}
                    </h3>
                  </div>
                  <div className="pillar-face pillar-back">
                    <p>{p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 32, paddingBottom: 120, position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="section-head">
            <h2>
              The shape of an <span className="accent">engagement.</span>
            </h2>
            <p className="lede approach-section-lede">
              Five phases, one direction. Each one ends with a tangible artifact, a stakeholder review, and a decision to continue.
            </p>
          </div>
          <div className="timeline">
            {phases.map((p, i) => (
              <div key={p.title} className="timeline-step" tabIndex={0}>
                <div className="timeline-marker">
                  <span className="timeline-num">{i + 1}</span>
                </div>
                <div className="timeline-body">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
