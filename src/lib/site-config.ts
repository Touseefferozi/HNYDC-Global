export const siteConfig = {
  name: "HNYDC Global Holdings Inc.",
  shortName: "HNYDC Global",
  established: 2018,
  location: "New York, USA",
  businessAddress: "New York, USA",
  url: "https://hnydcglobal.com",
  description:
    "HNYDC Global Holdings Inc. is a diversified international holding company focused on global trade, real estate development, logistics, supply chain management, agribusiness, and strategic investments across the United States and Ghana.",
  email: "info@hnydcglobal.com",
  phone: "+1 (329) 208-3100",
  phoneTel: "+13292083100",
  whatsapp: "+1 (757) 737-5515",
  whatsappNumber: "17577375515",
  social: {
    linkedin:
      "https://www.linkedin.com/in/hnydc-global-holdings-1b895b419",
  },
  companyProfileUrl: "/company-profile.pdf",
  companyProfileFilename: "HNYDC-Global-Company-Profile.pdf",
  seoKeywords: [
    "Ghana Real Estate",
    "Student Accommodation Ghana",
    "Global Trade",
    "Infrastructure Development",
    "Investment Opportunities",
  ],
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;

export function getWhatsAppUrl(message?: string) {
  const text =
    message ??
    "Hello HNYDC Global Holdings, I would like to discuss a partnership opportunity.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
