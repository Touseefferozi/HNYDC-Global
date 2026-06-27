import { siteConfig } from "@/lib/site-config";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export type ContactEmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const CONTACT_TO = siteConfig.email;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(data: ContactEmailData) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;
}

function buildText(data: ContactEmailData) {
  return [
    "New Contact Form Submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

async function sendWithResend(data: ContactEmailData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "HNYDC Global Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: CONTACT_TO,
    replyTo: data.email,
    subject: `[Website Inquiry] ${data.subject}`,
    html: buildHtml(data),
    text: buildText(data),
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error("Failed to send email via Resend.");
  }

  return true;
}

async function sendWithSmtp(data: ContactEmailData) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return false;

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"HNYDC Global Website" <${user}>`,
    to: CONTACT_TO,
    replyTo: data.email,
    subject: `[Website Inquiry] ${data.subject}`,
    text: buildText(data),
    html: buildHtml(data),
  });

  return true;
}

export async function sendContactEmail(data: ContactEmailData) {
  if (await sendWithResend(data)) return;
  if (await sendWithSmtp(data)) return;

  throw new Error("EMAIL_NOT_CONFIGURED");
}

export function isEmailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY ||
      (process.env.SMTP_HOST &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS)
  );
}
