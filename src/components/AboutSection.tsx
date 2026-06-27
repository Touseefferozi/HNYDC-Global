import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={siteImages.about.src}
              alt={siteImages.about.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About HNYDC"
            title="International Partnerships Built for Long-Term Growth"
          />

          <FadeIn delay={0.15} className="mt-8 space-y-6 text-base leading-relaxed text-white/70">
            <p>
              Founded in {siteConfig.established} and headquartered in{" "}
              {siteConfig.location}, {siteConfig.name} facilitates international
              trade, strategic investment partnerships, and development
              opportunities across emerging global markets.
            </p>
            <p>
              With a deepening focus on Ghana and broader African economic
              initiatives, we connect enterprises and investors through
              structured partnerships designed for resilience, transparency, and
              enduring impact.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
