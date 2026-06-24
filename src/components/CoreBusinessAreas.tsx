import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import {
  GlobeTradeIcon,
  InvestmentIcon,
  RealEstateIcon,
} from "@/components/icons/BusinessIcons";
import type { ReactNode } from "react";

type BusinessArea = {
  icon: ReactNode;
  title: string;
  description: string;
};

const businessAreas: BusinessArea[] = [
  {
    icon: <GlobeTradeIcon className="h-8 w-8" />,
    title: "Global Trade",
    description:
      "We architect cross-border commerce frameworks—aligning suppliers, distributors, and institutional buyers through disciplined logistics and market-entry strategy.",
  },
  {
    icon: <RealEstateIcon className="h-8 w-8" />,
    title: "Real Estate Development",
    description:
      "From residential towers to purpose-built accommodations, we partner on developments engineered for durability, regulatory compliance, and long-horizon asset value.",
  },
  {
    icon: <InvestmentIcon className="h-8 w-8" />,
    title: "Strategic Investments",
    description:
      "Our investment structures are built for patient capital—prioritizing sustainable returns, transparent governance, and measurable economic impact in target markets.",
  },
];

export default function CoreBusinessAreas() {
  return (
    <section id="services" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Do"
          title="Core Business Areas"
          description="Three integrated disciplines form the foundation of every HNYDC engagement—each executed with the precision institutional partners expect."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-3 lg:mt-16">
          {businessAreas.map((area, index) => (
            <FadeIn key={area.title} delay={index * 0.1}>
              <article className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a2236] to-[#121a2b] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_24px_48px_-20px_rgba(196,160,82,0.25)] lg:min-h-[340px] lg:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/25 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15 group-hover:ring-gold/45">
                  {area.icon}
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold text-white">
                  {area.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-white/65">
                  {area.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
