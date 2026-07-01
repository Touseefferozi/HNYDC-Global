import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import {
  AgribusinessIcon,
  GlobeTradeIcon,
  InvestmentIcon,
  RealEstateIcon,
} from "@/components/icons/BusinessIcons";
import type { ReactNode } from "react";

type BusinessSector = {
  icon: ReactNode;
  title: string;
  items: readonly string[];
};

const businessSectors: BusinessSector[] = [
  {
    icon: <GlobeTradeIcon className="h-8 w-8" />,
    title: "Global Trade and Supply Chain Management",
    items: [
      "International trade facilitation",
      "Import and export operations",
      "Supply chain management",
      "Procurement and sourcing",
      "Distribution and logistics solutions",
    ],
  },
  {
    icon: <RealEstateIcon className="h-8 w-8" />,
    title: "Real Estate Development",
    items: [
      "Residential developments",
      "Student accommodation projects",
      "Apartment developments",
      "Mixed use real estate projects",
      "Property investment opportunities",
    ],
  },
  {
    icon: <AgribusinessIcon className="h-8 w-8" />,
    title: "Agribusiness",
    items: [
      "Agricultural commodity trading",
      "Supply chain solutions for agricultural products",
      "Strategic agricultural partnerships",
      "Market access and distribution",
    ],
  },
  {
    icon: <InvestmentIcon className="h-8 w-8" />,
    title: "Strategic Investments",
    items: [
      "Project development",
      "Business partnerships",
      "Joint ventures",
      "Infrastructure and growth opportunities",
      "Emerging market investments",
    ],
  },
];

export default function CoreBusinessAreas() {
  return (
    <section id="services" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Do"
          title="Core Business Sectors"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-16">
          {businessSectors.map((sector, index) => (
            <FadeIn key={sector.title} delay={index * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a2236] to-[#121a2b] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_24px_48px_-20px_rgba(196,160,82,0.25)] lg:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/25 transition-all duration-300 group-hover:scale-105 group-hover:bg-gold/15 group-hover:ring-gold/45">
                  {sector.icon}
                </div>
                <h3 className="mt-8 font-serif text-xl font-semibold text-white lg:text-2xl">
                  {sector.title}
                </h3>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {sector.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-white/65"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
