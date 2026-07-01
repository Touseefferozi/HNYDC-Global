import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import {
  AgribusinessIcon,
  GlobeTradeIcon,
  InvestmentIcon,
  RealEstateIcon,
} from "@/components/icons/BusinessIcons";
import type { ReactNode } from "react";

type PipelineItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

const pipelineItems: PipelineItem[] = [
  {
    icon: <RealEstateIcon className="h-7 w-7" />,
    title: "Student Accommodation Expansion",
    description:
      "Scaling successful models across additional educational hubs.",
  },
  {
    icon: <RealEstateIcon className="h-7 w-7" />,
    title: "Apartment Developments",
    description:
      "Expanding residential portfolio in high growth corridors.",
  },
  {
    icon: <GlobeTradeIcon className="h-7 w-7" />,
    title: "Trade and Logistics Expansion",
    description:
      "Enhancing supply chain capabilities and market reach.",
  },
  {
    icon: <AgribusinessIcon className="h-7 w-7" />,
    title: "Agribusiness Supply Networks",
    description: "Building integrated agricultural trade platforms.",
  },
  {
    icon: <InvestmentIcon className="h-7 w-7" />,
    title: "Strategic Investment Partnerships",
    description:
      "Identifying and securing growth opportunities in emerging markets.",
  },
];

export default function FutureDevelopmentPipeline() {
  return (
    <section
      id="pipeline"
      className="section-py relative overflow-hidden bg-section-bg px-6 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,160,82,0.1),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Growth Strategy"
          title="Future Development Pipeline"
          description="HNYDC Global Holdings continues to identify and develop strategic opportunities to strengthen its market position and expand value creation across all operating sectors."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {pipelineItems.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.07}
              className={
                index < 3 ? "lg:col-span-2" : "sm:col-span-1 lg:col-span-3"
              }
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#141c2e] to-[#0a111c] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_40px_-18px_rgba(196,160,82,0.25)] lg:p-8">
                <div
                  className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-gold/80 via-gold to-gold/80 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15 group-hover:ring-gold/40">
                  {item.icon}
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60 lg:text-base">
                  {item.description}
                </p>

                <div className="mt-6 h-0.5 w-8 rounded-full bg-gold/40 transition-all duration-300 group-hover:w-14 group-hover:bg-gold" />
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-r from-[#121c2e] via-[#0d1520] to-[#121c2e] px-8 py-10 lg:mt-16 lg:px-12 lg:py-12">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />
            <p className="relative mx-auto max-w-4xl text-center text-base leading-relaxed text-white/70 lg:text-lg">
              Through disciplined execution and strategic focus, HNYDC Global
              Holdings is positioned to deliver sustained value creation for
              partners, investors, and stakeholders across global markets.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
