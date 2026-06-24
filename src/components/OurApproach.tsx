import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import {
  ExecutionIcon,
  MarketAnalysisIcon,
  StrategicPartnershipsIcon,
} from "@/components/icons/ApproachIcons";
import type { ReactNode } from "react";

type ApproachStep = { icon: ReactNode; title: string; description: string };

const steps: ApproachStep[] = [
  {
    icon: <MarketAnalysisIcon className="h-7 w-7" />,
    title: "Market Analysis",
    description:
      "Rigorous evaluation of emerging opportunities—grounded in data, local intelligence, and long-horizon growth potential.",
  },
  {
    icon: <StrategicPartnershipsIcon className="h-7 w-7" />,
    title: "Strategic Partnerships",
    description:
      "Curating alliances between investors, institutions, and development stakeholders with aligned objectives and clear governance.",
  },
  {
    icon: <ExecutionIcon className="h-7 w-7" />,
    title: "Structured Execution",
    description:
      "Coordinating scalable frameworks that translate strategy into measurable outcomes—on schedule and to specification.",
  },
];

export default function OurApproach() {
  return (
    <section className="section-py bg-[#0a111f] px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Approach" title="How We Structure Opportunities" />
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-16">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.1}>
              <article className="group rounded-2xl border border-white/8 bg-[#101c2e] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-gold/35">
                  {step.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{step.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
