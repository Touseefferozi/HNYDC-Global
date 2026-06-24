import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    foundingDate: String(siteConfig.established),
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressCountry: "US",
    },
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
