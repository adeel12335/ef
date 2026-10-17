import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Contact delivery for the template's enquiry form.
 *
 * The template's contact-form.js posts the serialised form over AJAX and prints
 * whatever text comes back, so this answers in plain text.
 *
 * It reports success ONLY after the mail provider has accepted the message.
 * Unconfigured, rejected or thrown — every other path tells the visitor the
 * message was not sent. It never prints a confirmation for an enquiry that
 * went nowhere.
 *
 * Required environment (see .env.example):
 *   RESEND_API_KEY      server-only, never exposed to the client
 *   CONTACT_TO_EMAIL    where enquiries land
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend
 */

const text = (body: string, status = 200) =>
  new NextResponse(body, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

/** Best-effort throttle: in-memory, so it resets on redeploy and is per-instance. */
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return text(
      "That's a few messages in a short time. Please wait a few minutes and try again.",
      429,
    );
  }

  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return text("Please fill in your name, email and message.", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return text("That email address does not look right.", 400);
  }

  if (message.length < 15) {
    return text(
      "Please add a little more detail — a couple of sentences about the problem is plenty.",
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "[contact] Not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
    );
    return text(
      "This form isn't connected to a mail service yet, so your message was NOT sent. Nothing was delivered — please try again once it's configured.",
      503,
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New enquiry — ${name}`,
      html:
        `<h2 style="font:600 18px system-ui;margin:0 0 16px">New enquiry — emergingfreelancer.com</h2>` +
        `<p style="font:14px system-ui"><strong>Name:</strong> ${esc(name)}<br>` +
        `<strong>Email:</strong> ${esc(email)}</p>` +
        `<h3 style="font:600 14px system-ui;margin:20px 0 6px">Message</h3>` +
        `<p style="font:14px/1.6 system-ui;white-space:pre-wrap">${esc(message)}</p>`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // Resend reports failure in `error` rather than throwing.
    if (error || !data?.id) {
      console.error("[contact] Delivery rejected:", error);
      return text(
        "Your message could not be delivered just now, so nothing was sent. Please try again shortly.",
        502,
      );
    }

    return text("Thanks — your message has been delivered. I'll reply to the address you gave.");
  } catch (err) {
    console.error("[contact] Delivery threw:", err);
    return text(
      "Your message could not be delivered just now, so nothing was sent. Please try again shortly.",
      502,
    );
  }
}
