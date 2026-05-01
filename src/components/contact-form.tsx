"use client";

// Contact form — opens the user's mail client with a prefilled message.
// This is a stopgap so the form is actually usable today; once an SMTP /
// transactional-email path is set up (Resend, SES, etc.) swap the submit
// handler for a fetch to that endpoint and keep the toast UX.

import { FormEvent, useRef, useState } from "react";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nukleus.ai";

function buildMailto(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const company = String(data.get("company") ?? "").trim();
  const role = String(data.get("role") ?? "").trim();
  const problem = String(data.get("problem") ?? "").trim();
  const timeline = String(data.get("timeline") ?? "").trim();

  const subject = `Nukleus inquiry — ${name || "new contact"}${
    company ? ` (${company})` : ""
  }`;

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    role && `Role: ${role}`,
    timeline && `Timeline: ${timeline}`,
    "",
    "Problem:",
    problem,
  ].filter(Boolean) as string[];

  const body = lines.join("\n");
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as `+`; mailto bodies expect `%20`.
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${CONTACT_EMAIL}?${query}`;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showToast, setShowToast] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const href = buildMailto(form);
    window.location.href = href;

    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 4000);
  }

  return (
    <>
      <form ref={formRef} className="panel" onSubmit={onSubmit}>
        <div className="field-row">
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required placeholder="Jane Adeyemi" />
          </div>
          <div className="field">
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" required placeholder="jane@company.com" />
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Acme Co." />
          </div>
          <div className="field">
            <label htmlFor="role">Your role</label>
            <input id="role" name="role" type="text" placeholder="Head of Operations" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="problem">What&apos;s the problem?</label>
          <textarea
            id="problem"
            name="problem"
            required
            placeholder="Tell us what's broken or what you'd like to be true. Plain English is fine, we'll figure out whether AI is the right shape for it."
          />
        </div>
        <div className="field">
          <label htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" defaultValue="This quarter">
            <option>Now (there&apos;s a fire)</option>
            <option>This quarter</option>
            <option>Next quarter</option>
            <option>Just exploring</option>
          </select>
        </div>
        <div className="form-actions">
          <span className="form-meta">We reply within two business days.</span>
          <button className="btn btn-primary" type="submit">
            Send <span className="arrow">→</span>
          </button>
        </div>
      </form>
      <div className={`toast${showToast ? " show" : ""}`} role="status" aria-live="polite">
        Opening your email client — hit send to deliver the message.
      </div>
    </>
  );
}
