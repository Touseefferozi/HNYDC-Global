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
  const hasWeb3Forms = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

  if (hasWeb3Forms) {
    try {
      if (await sendViaWeb3Forms(data)) return;
    } catch (error) {
      if (error instanceof Error) throw error;
    }
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) return;

  const result = (await response.json()) as {
    error?: string;
    useFallback?: boolean;
  };

  if (response.status === 503 && result.useFallback && !hasWeb3Forms) {
    throw new Error(
      process.env.NODE_ENV === "development"
        ? "Form not set up locally. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (same key as Vercel), then restart npm run dev."
        : `Unable to send right now. Please email ${siteConfig.email} or contact us on WhatsApp.`
    );
  }

  throw new Error(
    result.error ??
      `Unable to send right now. Please email ${siteConfig.email} or contact us on WhatsApp.`
  );
}
