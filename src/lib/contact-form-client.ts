import { siteConfig } from "@/lib/site-config";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function sendViaWeb3Forms(data: ContactPayload) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: data.name,
      email: data.email,
      subject: `[Website Inquiry] ${data.subject}`,
      message: data.message,
    }),
  });

  const result = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (result.success) return true;

  throw new Error(result.message ?? "Unable to send your message.");
}

export async function sendContactForm(data: ContactPayload) {
  if (await sendViaWeb3Forms(data)) return;

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) return;

  const result = (await response.json()) as { error?: string };
  throw new Error(
    result.error ??
      `Unable to send right now. Please email ${siteConfig.email} or contact us on WhatsApp.`
  );
}
