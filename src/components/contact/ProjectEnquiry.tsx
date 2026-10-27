"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import styles from "./ProjectEnquiry.module.css";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const CAPTCHA_REQUIRED = process.env.NODE_ENV === "production" && !SITE_KEY;

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

export default function ProjectEnquiry() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const ready = useRef<Promise<void> | null>(null);

  useEffect(() => {
    if (!SITE_KEY) return;
    let cancelled = false;
    ready.current = new Promise((resolve) => {
      const done = () => {
        if (!cancelled) window.grecaptcha?.ready(() => resolve());
      };
      if (window.grecaptcha) done();
      else window.addEventListener("ef-recaptcha-ready", done, { once: true });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function spamToken() {
    if (!SITE_KEY) return "";
    const pending = ready.current;
    if (!pending) return "";
    await Promise.race([
      pending,
      new Promise((resolve) => setTimeout(resolve, 8000)),
    ]);
    const captcha = window.grecaptcha;
    if (!captcha) return "";
    try {
      return await captcha.execute(SITE_KEY, { action: "enquiry" });
    } catch {
      return "";
    }
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || CAPTCHA_REQUIRED) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const token = await spamToken();

    if (SITE_KEY && !token) {
      setStatus("error");
      setFeedback("The spam check did not finish. Please try sending again.");
      return;
    }

    if (token) data.set("g-recaptcha-response", token);
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", { method: "POST", body: data });
      const message = await response.text();
      if (!response.ok) {
        setStatus("error");
        setFeedback(response.status >= 500
          ? "Your message couldn’t be sent right now. Your details are still here — please try again later."
          : message);
        return;
      }
      setStatus("success");
      setFeedback("Thanks — your enquiry has been delivered. I’ll reply to the email you shared.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Your message wasn’t sent. Check your connection and try again — your details are still here.");
    }
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="enquiry-title">
      <div className="container">
        <div className={styles.surface}>
          <div className={styles.topline}>
            <span className={styles.label}><span aria-hidden="true" />Contact</span>
            <span className={styles.location}>Based in the US / Working worldwide</span>
          </div>
          <div className={styles.layout}>
            <div className={styles.intro}>
              <h2 id="enquiry-title" className={styles.title}>
                <span>Good ideas.</span>
                <span>Great builds.</span>
                <span className={styles.accent}>Let’s talk.</span>
              </h2>
              <p className={styles.description}>Tell me what you want to build or make easier. I’ll help you find the right next step.</p>
              <div className={styles.details}>
                <div>
                  <p className={styles.detailLabel}><span>01 /</span> Clear from the start</p>
                  <p>Fixed scope. Upfront pricing.</p>
                </div>
                <div>
                  <p className={styles.detailLabel}><span>02 /</span> Direct to me</p>
                  <p>A reply within one business day.</p>
                </div>
              </div>
            </div>
            <form className={styles.form} action="/api/contact" method="POST" onSubmit={submitEnquiry} aria-labelledby="enquiry-form-title" aria-busy={status === "sending"}>
              <h3 id="enquiry-form-title">A little about your project</h3>
              <p className={styles.formIntro}>A rough idea is a great place to start.</p>
              <fieldset disabled={status === "sending"}>
                <legend className={styles.srOnly}>Your contact details and project</legend>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label htmlFor="enquiry-name">Your name</label>
                    <input id="enquiry-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={200} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="enquiry-email">Your email</label>
                    <input id="enquiry-email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={200} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="enquiry-message">What would you like to build?</label>
                  <textarea id="enquiry-message" name="message" placeholder="The idea, the challenge, or the thing taking too much of your time…" required minLength={15} rows={4} aria-describedby="enquiry-brief" />
                </div>
                <p id="enquiry-brief" className={styles.hint}>Have a brief? Add a link in your message.</p>
                {CAPTCHA_REQUIRED ? (
                  <p className={styles.feedback} data-status="error">The spam check is not configured, so this form cannot send yet.</p>
                ) : null}
                <button className={styles.submit} type="submit" disabled={CAPTCHA_REQUIRED}>
                  <span>{status === "sending" ? "Sending enquiry…" : "Send enquiry"}</span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg>
                </button>
              </fieldset>
              <p className={styles.note}>No commitment. Just a conversation.</p>
              <div className={styles.feedback} data-status={status} role="status" aria-live="polite" aria-atomic="true">{feedback}</div>
            </form>
          </div>
        </div>
      </div>
      {SITE_KEY ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="afterInteractive"
          onLoad={() => window.dispatchEvent(new Event("ef-recaptcha-ready"))}
        />
      ) : null}
    </section>
  );
}
