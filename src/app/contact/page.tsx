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
    <div className="page-bg-host contact-page">
      <PageBg />

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-intro">
            <span className="eyebrow">Contact</span>
            <h1>Start the conversation.</h1>
            <p className="lede">
              Share the business problem you&apos;re working through. We reply within two business days.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
