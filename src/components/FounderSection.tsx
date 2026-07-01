import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section id="leadership" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-auto lg:min-h-[520px]">
              <Image
                src="/founder.jpg"
                alt="HNYDC Global leadership"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1622]/80 via-transparent to-transparent" />
            </div>
          </FadeIn>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Leadership"
              title="Founder &amp; CEO"
            />

            <FadeIn delay={0.15} className="mt-8 space-y-6 text-base leading-relaxed text-white/70">
              <p>
                HNYDC Global Holdings Inc. was founded in 2018 with a vision to
                bridge international capital, enterprise, and opportunity across
                emerging markets. Our leadership brings disciplined execution
                across cross border trade, real estate development, and strategic
                investment with deep operational experience in U.S. institutional
                markets and African economic corridors.
              </p>
              <p>
                We prioritize transparent governance, long term value creation,
                and meaningful partnerships built on aligned incentives and shared
                accountability.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
