import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  "Established in 2018 with proven market expertise",
  "New York based international company with global reach",
  "Active presence in the United States and Ghana",
  "Diversified operations across multiple complementary sectors",
  "Focus on long term partnerships and sustainable growth",
  "Commitment to professionalism, transparency, and execution",
] as const;

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-py relative overflow-hidden bg-[#050a12] px-6 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,160,82,0.08),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why HNYDC Global Holdings"
        />

        <FadeIn delay={0.1}>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-5">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex gap-4 rounded-2xl border border-white/8 bg-gradient-to-b from-[#121c2c] to-[#0a111c] p-6 lg:p-7"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-white/75">
                  {reason}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
