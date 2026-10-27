import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
 * Delivery goes over the mailbox's own SMTP rather than a third-party API, so
 * the enquiry never leaves the domain's own mail host.
 *
 * Required environment (see .env.example), all server-only:
 *   SMTP_HOST           e.g. smtp.hostinger.com
 *   SMTP_PORT           465 for implicit TLS, 587 for STARTTLS
 *   SMTP_USER           the full mailbox address
 *   SMTP_PASS           that mailbox's password
 *   CONTACT_TO_EMAIL    where enquiries land
 *   CONTACT_FROM_EMAIL  the sender; most hosts require this to be SMTP_USER
 *   RECAPTCHA_SECRET_KEY          Google reCAPTCHA v2 secret (server only)
 *   NEXT_PUBLIC_RECAPTCHA_SITE_KEY  matching site key, shown in the widget
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

type CaptchaResult = "ok" | "missing" | "fail" | "unconfigured";

/** Checkbox reCAPTCHA. Production refuses mail when the secret is unset. */
async function captchaPasses(token: string, ip: string): Promise<CaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return process.env.NODE_ENV === "production" ? "unconfigured" : "ok";
  }
  if (!token || token.length > 4000) return "missing";

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) return "fail";
    const data = (await res.json()) as { success?: boolean };
    return data.success === true ? "ok" : "fail";
  } catch (err) {
    console.error("[contact] reCAPTCHA verify failed:", err);
    return "fail";
  }
}

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

  const captcha = await captchaPasses(String(form.get("g-recaptcha-response") ?? "").trim(), ip);
  if (captcha === "unconfigured") {
    console.error("[contact] RECAPTCHA_SECRET_KEY is not set.");
    return text(
      "This form's spam check isn't configured yet, so your message was NOT sent.",
      503,
    );
  }
  if (captcha !== "ok") {
    return text("Please confirm you are not a robot, then send the form again.", 400);
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? user;

  if (!host || !user || !pass || !to || !from) {
    console.error(
      "[contact] Not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and CONTACT_TO_EMAIL.",
    );
    return text(
      "This form isn't connected to a mail service yet, so your message was NOT sent. Nothing was delivered — please try again once it's configured.",
      503,
    );
  }

  try {
    // Built per request. A serverless invocation does not outlive the call, so
    // a pooled connection would be thrown away anyway; the timeouts matter
    // more, because a silently hung SMTP socket would otherwise sit there
    // until the function itself is killed and the visitor sees nothing.
    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 is implicit TLS; 587 upgrades with STARTTLS
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });

    const info = await transport.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New enquiry — ${name}`,
      html:
        `<h2 style="font:600 18px system-ui;margin:0 0 16px">New enquiry — emergingfreelancer.com</h2>` +
        `<p style="font:14px system-ui"><strong>Name:</strong> ${esc(name)}<br>` +
        `<strong>Email:</strong> ${esc(email)}</p>` +
        `<h3 style="font:600 14px system-ui;margin:20px 0 6px">Message</h3>` +
        `<p style="font:14px/1.6 system-ui;white-space:pre-wrap">${esc(message)}</p>`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    });

    // An SMTP server can accept the session and still refuse the recipient, so
    // "it did not throw" is not the same as "it was delivered".
    if (!info.accepted?.length || info.rejected?.length) {
      console.error("[contact] Recipient refused:", info.rejected, info.response);
      return text(
        "Your message could not be delivered just now, so nothing was sent. Please try again shortly.",
        502,
      );
    }

    // Confirmation to the person who wrote in. Sent only after the enquiry
    // itself was accepted, and a failure here never turns a delivered enquiry
    // into an error. The body is fixed copy plus their first name: it does not
    // echo the message, so the form cannot be used to send arbitrary text to
    // an address someone else typed in.
    try {
      const first = esc(name.split(/\s+/)[0].slice(0, 40));
      await transport.sendMail({
        from: `Emerging Freelancer <${from}>`,
        to: email,
        replyTo: to,
        subject: "We received your message — Emerging Freelancer",
        html:
          `<div style="font:15px/1.65 system-ui,-apple-system,Segoe UI,sans-serif;color:#252623;max-width:560px">` +
          `<p style="margin:0 0 16px">Hi ${first},</p>` +
          `<p style="margin:0 0 16px">Thanks for getting in touch with Emerging Freelancer. Your message has reached us, and you will get a personal reply within one business day.</p>` +
          `<p style="margin:0 0 16px">If there is anything you would like to add, such as a link, a brief or a deadline, simply reply to this email.</p>` +
          `<p style="margin:0 0 24px">Talk soon,<br><strong>Emerging Freelancer</strong><br>` +
          `<a href="https://www.emergingfreelancer.com" style="color:#252623">emergingfreelancer.com</a> · <a href="mailto:${esc(to)}" style="color:#252623">${esc(to)}</a></p>` +
          `<p style="margin:0;font-size:12px;color:#8a8d85">You are receiving this because this address was entered in the contact form on emergingfreelancer.com. If that was not you, you can ignore this email.</p>` +
          `</div>`,
        text:
          `Hi ${name.split(/\s+/)[0].slice(0, 40)},\n\n` +
          `Thanks for getting in touch with Emerging Freelancer. Your message has reached us, and you will get a personal reply within one business day.\n\n` +
          `If there is anything you would like to add, such as a link, a brief or a deadline, simply reply to this email.\n\n` +
          `Talk soon,\nEmerging Freelancer\nhttps://www.emergingfreelancer.com · ${to}\n\n` +
          `You are receiving this because this address was entered in the contact form on emergingfreelancer.com. If that was not you, you can ignore this email.`,
      });
    } catch (err) {
      console.error("[contact] Confirmation email failed (enquiry was delivered):", err);
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
