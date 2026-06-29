import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.shortName}`,
  description: `Privacy Policy for ${siteConfig.name}.`,
};

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      `${siteConfig.name} respects your privacy. This policy explains how we handle information when you visit ${siteConfig.url}, contact us, or engage with our services.`,
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect your name, email, phone number, company details, and messages you send through our contact form. We also collect basic technical data such as IP address and browser type to operate and improve our website.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "Your information is used to respond to inquiries, manage partnerships, communicate about projects, improve our website, and meet legal obligations. We do not sell personal data.",
    ],
  },
  {
    title: "Sharing & Security",
    paragraphs: [
      "We may share information with trusted service providers, professional advisors, or partners involved in a project, and when required by law. Data may be processed in the United States, Ghana, or other countries where we operate.",
      "We take reasonable measures to protect your information, though no online transmission is fully secure.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      `You may request access, correction, or deletion of your personal data where applicable law allows. Contact us at ${siteConfig.email} for any privacy-related requests.`,
    ],
  },
  {
    title: "Updates & Contact",
    paragraphs: [
      "We may update this policy from time to time. Continued use of our website means you accept the revised version.",
      `${siteConfig.name}\n${siteConfig.businessAddress}\nEmail: ${siteConfig.email} | Phone: ${siteConfig.phone}`,
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050a12] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-gold hover:text-gold-light">
          ← Back to Home
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-bold sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Effective date: June 24, 2025
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">
          This Privacy Policy describes how {siteConfig.name} collects, uses,
          and protects personal information in connection with our website and
          business activities.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="whitespace-pre-line text-sm leading-relaxed text-white/60 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
