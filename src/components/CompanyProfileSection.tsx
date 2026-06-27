import { siteConfig } from "@/lib/site-config";
import FadeIn from "@/components/ui/FadeIn";

export default function CompanyProfileSection() {
  return (
    <section className="section-py-compact bg-[#050a12] px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#141c2e] to-[#0a111c] px-8 py-12 lg:px-14 lg:py-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                  Company Profile
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-white lg:text-4xl">
                  Discover the HNYDC Global Story
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/65 lg:text-lg">
                  Download our corporate profile for a comprehensive overview of
                  our history since {siteConfig.established}, operating sectors,
                  development pipeline, and partnership framework.
                </p>
              </div>
              <a
                href={siteConfig.companyProfileUrl}
                download={siteConfig.companyProfileFilename}
                className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
              >
                Download Company Profile
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
