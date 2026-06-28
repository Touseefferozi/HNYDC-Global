import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.shortName}`,
  description: `Terms and Conditions for ${siteConfig.name}.`,
};

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      `By accessing ${siteConfig.url} or using any services offered by ${siteConfig.name}, you agree to these Terms & Conditions. If you do not agree, please do not use our website or services.`,
    ],
  },
  {
    title: "Use of Website",
    paragraphs: [
      "This website is provided for general information about our company, projects, and partnership opportunities. Content is subject to change without notice and does not constitute a binding offer or professional advice.",
      "You agree to use this website lawfully and not to misuse, disrupt, or attempt unauthorized access to our systems or content.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      `All content on this website — including text, logos, images, graphics, and design — is owned by or licensed to ${siteConfig.name} and protected by applicable intellectual property laws. You may not copy, reproduce, or distribute any material without prior written consent.`,
    ],
  },
  {
    title: "Business Inquiries & Partnerships",
    paragraphs: [
      "Submitting a contact form or inquiry does not create a client, investor, or partnership relationship. Any engagement with HNYDC Global is subject to separate written agreements, due diligence, and mutual approval.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      `${siteConfig.name} makes reasonable efforts to ensure accurate website content but does not guarantee completeness or suitability for any specific purpose. To the fullest extent permitted by law, we are not liable for any direct or indirect loss arising from use of this website or reliance on its content.`,
    ],
  },
  {
    title: "Governing Law & Contact",
    paragraphs: [
      "These terms are governed by the laws applicable in the jurisdiction of our principal place of business, without regard to conflict-of-law principles.",
      "We may update these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the revised terms.",
      `${siteConfig.name}\n${siteConfig.businessAddress}\nEmail: ${siteConfig.email} | Phone: ${siteConfig.phone}`,
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050a12] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-gold hover:text-gold-light">
          ← Back to Home
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-bold sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Effective date: June 24, 2025
        </p>
        <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">
          These Terms &amp; Conditions govern your use of the {siteConfig.name}{" "}
          website and related communications.
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
