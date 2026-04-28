import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us the problem. A 30-minute call, no slide deck. We'll write back within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero" style={{ paddingTop: 80, paddingBottom: 48 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Contact</span>
          <h1 style={{ marginTop: 18, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            Tell us the problem.
          </h1>
          <p className="lede" style={{ marginLeft: "auto", marginRight: "auto" }}>
            A 30-minute call, no slide deck. We&apos;ll write back within two business days.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
