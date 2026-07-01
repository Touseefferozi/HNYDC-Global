"use client";

import FadeIn from "@/components/ui/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { label: "Founded", value: siteConfig.established, suffix: "", isYear: true },
  { label: "Core Business Sectors", value: 4, suffix: "" },
  { label: "Active Projects", value: 2, suffix: "" },
  { label: "Countries of Operation", value: 2, suffix: "" },
];

export default function StatsSection() {
  return (
    <section
      className="section-py-compact bg-[#050a12] px-6 lg:px-12"
      aria-label="Company statistics"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <article className="rounded-2xl border border-white/8 bg-[#0d1520] px-6 py-10 text-center transition-all duration-300 hover:border-gold/20">
                <p className="font-serif text-4xl font-bold text-gold lg:text-5xl">
                  {stat.isYear ? (
                    stat.value
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {stat.label}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
