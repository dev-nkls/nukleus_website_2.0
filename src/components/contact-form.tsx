"use client";

import { FormEvent, useRef, useState } from "react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showToast, setShowToast] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowToast(true);
    formRef.current?.reset();
    window.setTimeout(() => setShowToast(false), 3200);
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
      <div className={`toast${showToast ? " show" : ""}`}>
        Thanks, we&apos;ll be in touch within two business days.
      </div>
    </>
  );
}
