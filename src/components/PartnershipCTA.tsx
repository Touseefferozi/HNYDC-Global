import FadeIn from "@/components/ui/FadeIn";

const ctaLinks = [
  { label: "Become an Investor", href: "#contact" },
  { label: "Partner With Us", href: "#contact" },
  { label: "Start Your Project", href: "#contact" },
  { label: "Contact Our Team", href: "#contact" },
];

export default function PartnershipCTA() {
  return (
    <section className="section-py-compact relative overflow-hidden bg-[#050a12] px-6 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,160,82,0.12),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#121c2e] via-[#0d1520] to-[#080f1a] p-8 lg:p-12 xl:p-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold/60 via-gold/20 to-transparent"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                Take the Next Step
                <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
              </p>
              <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
                Ready to Build Something Enduring?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
                Whether you are exploring investment opportunities, seeking a
                development partner, or launching a new initiative. We welcome
                the conversation.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                {ctaLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-gold/40 px-6 py-3.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
