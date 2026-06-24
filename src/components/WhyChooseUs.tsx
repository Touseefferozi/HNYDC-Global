import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import {
  EmergingMarketsIcon,
  GlobalPerspectiveIcon,
  GrowthIcon,
  PartnershipIcon,
} from "@/components/icons/WhyIcons";
import type { ReactNode } from "react";

type Reason = { icon: ReactNode; title: string; description: string };

const reasons: Reason[] = [
  {
    icon: <GlobalPerspectiveIcon className="h-7 w-7" />,
    title: "Global Perspective",
    description:
      "A worldview shaped by cross-border operations—not theory. We navigate regulatory, cultural, and commercial complexities with practiced judgment.",
  },
  {
    icon: <PartnershipIcon className="h-7 w-7" />,
    title: "Strategic Partnerships",
    description:
      "Every engagement is relationship-first. We align incentives, communicate with candor, and build structures partners can trust over decades.",
  },
  {
    icon: <GrowthIcon className="h-7 w-7" />,
    title: "Long-Term Growth",
    description:
      "We favor scalable frameworks over short-term wins—investment and development strategies engineered to compound value responsibly.",
  },
  {
    icon: <EmergingMarketsIcon className="h-7 w-7" />,
    title: "Emerging Markets",
    description:
      "Positioned at the intersection of Africa's economic ascent and global capital flows, we help partners access opportunity with measured confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py relative overflow-hidden bg-[#050a12] px-6 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,160,82,0.08),transparent_55%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Global Vision. Strategic Execution."
          description="Institutional partners choose HNYDC for clarity of purpose, depth of market access, and an unwavering commitment to outcomes that endure."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.08}>
              <article className="group flex min-h-[260px] flex-col rounded-2xl border border-white/8 bg-gradient-to-b from-[#121c2c] to-[#0a111c] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_-18px_rgba(196,160,82,0.3)] lg:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-gold/40">
                  {reason.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{reason.description}</p>
                <div className="mt-6 h-0.5 w-8 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
