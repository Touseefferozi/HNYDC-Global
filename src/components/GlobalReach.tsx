import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import {
  AfricaFocusIcon,
  PrivateSectorIcon,
  TradeNetworkIcon,
} from "@/components/icons/GlobalReachIcons";
import type { ReactNode } from "react";

type ReachItem = { icon: ReactNode; title: string; description: string };

const reachItems: ReachItem[] = [
  {
    icon: <TradeNetworkIcon className="h-7 w-7" />,
    title: "International Trade Networks",
    description:
      "Expanding global partnerships through disciplined cross border commerce and strategic market positioning.",
  },
  {
    icon: <AfricaFocusIcon className="h-7 w-7" />,
    title: "Africa Development Focus",
    description:
      "Advancing investment and infrastructure opportunities across Ghana and the continent's fastest-growing economies.",
  },
  {
    icon: <PrivateSectorIcon className="h-7 w-7" />,
    title: "Private Sector Collaboration",
    description:
      "Uniting investors, institutions, and enterprises around development initiatives with shared accountability.",
  },
];

export default function GlobalReach() {
  return (
    <section className="section-py bg-[#0b1421] px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Global Reach"
          title="Connecting Businesses Across International Markets"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-16">
          {reachItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <article className="group rounded-2xl border border-white/8 bg-[#101c2e] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-[0_16px_32px_-16px_rgba(196,160,82,0.25)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/35">
                  {item.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
