export const siteConfig = {
  name: "HNYDC Global Holdings Inc.",
  shortName: "HNYDC Global",
  established: 2018,
  location: "New York, USA",
  url: "https://hnydcglobal.com",
  description:
    "HNYDC Global Holdings Inc. connects international investors and enterprises through structured trade, real estate development, and strategic partnerships—with a focused presence in Ghana and emerging markets.",
  email: "info@hnydcglobal.com",
  phone: "+1 (329) 208-3100",
  phoneTel: "+13292083100",
  whatsapp: "+1 (929) 780-2662",
  whatsappNumber: "19297802662",
  social: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  companyProfileUrl: "/company-profile.pdf",
  companyProfileFilename: "HNYDC-Global-Company-Profile.pdf",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
] as const;

export function getWhatsAppUrl(message?: string) {
  const text =
    message ??
    "Hello HNYDC Global Holdings, I would like to discuss a partnership opportunity.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
