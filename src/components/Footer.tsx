import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import type { ReactNode } from "react";

const socialLinks: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: <LinkedInIcon className="h-[18px] w-[18px]" />,
  },
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: <FacebookIcon className="h-[18px] w-[18px]" />,
  },
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    icon: <InstagramIcon className="h-[18px] w-[18px]" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#03070f]">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <a href="#" className="inline-block font-serif text-2xl font-bold text-white">
              HNYDC <span className="text-gold">Global</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-white/40">
              Est. {siteConfig.established} · {siteConfig.location}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/65">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Follow HNYDC Global for updates on projects, partnerships, and
              market insights.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href={siteConfig.companyProfileUrl}
              download={siteConfig.companyProfileFilename}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              Download Company Profile
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/8 pt-8 text-center text-sm text-white/45">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
