import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const aboutItems = [
  {
    heading: "Our Mission",
    description: "Our Long-Term Commitment to Sustainable Development",
  },
  {
    heading: "Our Vision",
    description: "Our Presence in the United States and Ghana",
  },
] as const;

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
            eyebrow="About Us"
            title="International Partnerships Built for Long-Term Growth"
          />

          <FadeIn delay={0.15} className="mt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              Company founded in {siteConfig.established}
            </div>

            <div className="mt-8 space-y-8">
              {aboutItems.map((item) => (
                <div key={item.heading}>
                  <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
