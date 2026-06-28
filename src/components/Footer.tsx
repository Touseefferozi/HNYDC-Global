import { LinkedInIcon } from "@/components/icons/SocialIcons";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#03070f]">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <a href="#" className="inline-block font-serif text-2xl font-bold text-white">
              HNYDC <span className="text-gold">Global</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-white/40">
              Est. {siteConfig.established}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>
                <span className="font-medium text-white/80">Business Address:</span>
                <br />
                {siteConfig.businessAddress}
              </li>
              <li>
                <span className="font-medium text-white/80">Email:</span>
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-white/80">Phone:</span>
                <br />
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-white/80">WhatsApp:</span>
                <br />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Follow HNYDC Global on LinkedIn for updates on projects,
              partnerships, and market insights.
            </p>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.companyProfileUrl}
              download={siteConfig.companyProfileFilename}
              className="mt-6 block text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              Download Company Profile →
            </a>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-white/50">
              <li>
                <a href="/privacy" className="transition-colors hover:text-gold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="transition-colors hover:text-gold">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
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
