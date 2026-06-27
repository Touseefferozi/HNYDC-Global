import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section id="founder" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="/founder.jpg"
              alt="HNYDC Global leadership portrait"
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
            title="Guided by Vision. Grounded in Execution."
            description="Our founder brings a disciplined approach to international partnership—balancing strategic ambition with the operational rigor required to deliver in complex, cross-border markets."
          />

          <FadeIn delay={0.15} className="mt-8 space-y-6 text-base leading-relaxed text-white/70">
            <p>
              Founder biography and professional background will be published
              upon client approval. This section is reserved to introduce the
              leadership behind HNYDC Global Holdings Inc. and the principles
              that shape every partnership we pursue.
            </p>
            <p>
              Until final content is provided, we welcome direct inquiries from
              institutional investors, development partners, and enterprises
              seeking a principled guide into Ghana and broader emerging markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-8 flex gap-3 sm:gap-4">
            <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#141c2e] px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-xs uppercase tracking-wider text-gold">Focus</p>
              <p className="mt-1 text-sm text-white">Trade &amp; Development</p>
            </div>
            <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#141c2e] px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-xs uppercase tracking-wider text-gold">Based</p>
              <p className="mt-1 text-sm text-white">New York, USA</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
