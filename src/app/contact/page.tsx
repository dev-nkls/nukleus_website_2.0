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
          <h1>Start the conversation.</h1>
          <p className="lede">
            Share the business problem you&apos;re working through. We respond to every inquiry within two business days, and where the fit is clear, we&apos;ll arrange a 30-minute consultation to scope the work in detail.
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
