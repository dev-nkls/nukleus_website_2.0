import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business-first technologists shipping production AI across regulated industries.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <div className="container">
          <span className="eyebrow">About</span>
          <h1 style={{ marginTop: 18, maxWidth: 880 }}>
            Business-first technologists.
          </h1>
          <p className="lede">
            Nukleus is a partnership of engineers, data scientists, and analysts who&apos;ve shipped production systems across banking, insurance, lending, e-commerce, automotive, energy, software, and consumer products.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose">
            <p className="first">
              Our mission is straightforward: empower enterprises with bespoke technology that delivers actionable information at the right time. We start with the business decision, not the framework, not the model, and work backward to the system that supports it.
            </p>
            <p>
              We immerse ourselves in your domain. Each engagement begins with us learning your industry&apos;s vocabulary, your regulatory constraints, and the texture of the work your team actually does. The technology we build reflects what we learn.
            </p>
            <p>
              We charge against outcomes because that&apos;s the contract that aligns us. A percentage of revenue gained or cost saved, transparent measurement, mutual incentive, minimised risk for you.
            </p>
            <p>
              If that&apos;s the shape of partnership you&apos;re looking for, the contact form is two clicks away.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
