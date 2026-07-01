import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const overviewParagraphs = [
  `${siteConfig.name} is a diversified international holding company focused on global trade, real estate development, logistics, supply chain management, agribusiness, and strategic investments. The company develops and manages opportunities across emerging and established markets, with a strong focus on the United States and Ghana.`,
  "Through strategic partnerships, disciplined execution, and long term value creation, HNYDC Global Holdings connects investors, businesses, suppliers, and development opportunities across multiple sectors.",
] as const;

const missionText =
  "To create sustainable economic value through international trade, real estate development, logistics, agribusiness, and strategic investment partnerships that support growth across global markets.";

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
            title="Company Overview"
          />

          <FadeIn delay={0.15} className="mt-8 space-y-6">
            {overviewParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-white/70"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                {missionText}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
