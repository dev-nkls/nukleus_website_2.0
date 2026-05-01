import type { Metadata } from "next";
import { PageBg } from "@/components/page-bg";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Quality, speed, value-based pricing. We scope tightly, ship fast, and price against the outcome.",
};

const pillars: { num: string; title: string; body: string }[] = [
  {
    num: "1",
    title: "Quality.",
    body: "Senior engineers, every engagement. We don't subcontract the thinking and we don't ship work we'd be embarrassed to put our name on.",
  },
  {
    num: "2",
    title: "Speed.",
    body: "Tight scopes, weekly increments. You see working systems on the third week, not the third quarter, because momentum is part of the deliverable.",
  },
  {
    num: "3",
    title: "Outcome pricing.",
    body: "We charge a percentage of revenue gained or cost saved. If the work doesn't move the number, your obligation is minimised. Same incentive, same direction.",
  },
];

const phases: { num: string; title: string; body: string }[] = [
  {
    num: "1",
    title: "Scope.",
    body: "A 30-minute call. We name the decision the work has to support and write down the metric that proves it worked.",
  },
  {
    num: "2",
    title: "Design.",
    body: "A one-week paid sprint. Architecture, data plan, model approach, monitoring plan, and a fixed price for the build.",
  },
  {
    num: "3",
    title: "Build.",
    body: "Three to eight weeks. Weekly working increments, no quarterly checkpoint theatre. We ship to your environment, not ours.",
  },
  {
    num: "4",
    title: "Operate.",
    body: "We keep the model accurate. Drift detection, retraining, audit trails, handed off when you're ready, not when we are.",
  },
];

export default function ApproachPage() {
  return (
    <div className="approach-page-bold">
      {/* Section 1: hero + pillars share one video backdrop */}
      <div className="approach-block page-bg-host">
        <PageBg />

        <section className="approach-hero">
          <div className="container">
            <span className="eyebrow">Approach</span>
            <h1>
              How we <span className="accent">work.</span>
            </h1>
            <p className="lede">
              Quality, speed, value-based pricing. We scope tightly, ship fast, and price against the outcomes you actually need, not the hours we spend.
            </p>
            <div className="scroll-cue">Three principles</div>
          </div>
        </section>

        <section style={{ padding: "0 0 96px" }}>
          <div className="container">
            <div className="approach-pillars">
              {pillars.map((p) => (
                <article key={p.num} className="approach-pillar" tabIndex={0}>
                  <div className="num">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p className="pillar-desc">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Manifesto-style bridge */}
      <section className="approach-divider">
        <div className="container">
          <span className="eyebrow">The arc</span>
          <blockquote>
            From first call to <span className="accent">first value</span>, in weeks, not quarters.
          </blockquote>
        </div>
      </section>

      {/* Section 2: engagement / four steps — own video, offset to duration/2 */}
      <section
        className="approach-engagement page-bg-host"
        style={{ padding: "96px 0 120px" }}
      >
        <PageBg offset />
        <div className="container">
          <div className="approach-section-head">
            <span className="eyebrow">Engagement</span>
            <h2>
              Four steps, one <span className="accent">direction.</span>
            </h2>
            <p className="lede">
              No discovery sprawl, no scoping theatre, no committee architecture.
            </p>
          </div>
          <div className="timeline">
            {phases.map((p) => (
              <div key={p.num} className="timeline-step" tabIndex={0}>
                <div className="timeline-marker">
                  <span className="timeline-num">{p.num}</span>
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
