import { NextResponse } from "next/server";

/**
 * The template's contact-form plugin posts the serialized form over AJAX and
 * prints whatever text comes back, so this handler answers in plain text.
 *
 * It only validates and logs the submission — plug an email provider (Resend,
 * SendGrid, Nodemailer, ...) in where the TODO is.
 */
export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return new NextResponse("Please fill in your name, email and message.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new NextResponse("That email address does not look right.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  // TODO: deliver the message (email provider, CRM, database, ...).
  console.log("[contact]", { name, email, message });

  return new NextResponse("Thanks! Your message has been sent.", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
