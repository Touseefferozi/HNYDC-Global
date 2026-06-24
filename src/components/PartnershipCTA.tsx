import FadeIn from "@/components/ui/FadeIn";

export default function PartnershipCTA() {
  return (
    <section className="section-py-compact relative overflow-hidden bg-[#050a12] px-6 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,160,82,0.12),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#121c2e] via-[#0d1520] to-[#080f1a] p-8 lg:p-0">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent"
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-12 xl:p-14">
              <div className="flex gap-6 lg:gap-8">
                <div
                  className="hidden w-1 shrink-0 rounded-full bg-gradient-to-b from-gold via-gold/50 to-transparent sm:block"
                  aria-hidden="true"
                />
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                    Global Partnerships
                  </p>
                  <h2 className="mt-5 max-w-2xl font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
                    Position Your Business for International Growth
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
                    Speak with our team about cross-border trade, development
                    partnerships, and investment opportunities tailored to your
                    objectives.
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-gold-light hover:shadow-[0_8px_24px_rgba(196,160,82,0.35)]"
              >
                Schedule Consultation
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
