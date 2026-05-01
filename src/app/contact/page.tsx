import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageBg } from "@/components/page-bg";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to figure out. We'll reply within two business days.",
};

export default function ContactPage() {
  return (
    <div className="page-bg-host">
      <PageBg />

      <section className="center-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Tell us what you&apos;re trying to figure out.</h1>
          <p className="lede">
            We read every note. If your problem looks like a fit, we&apos;ll set up a 30-minute call within two business days.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
