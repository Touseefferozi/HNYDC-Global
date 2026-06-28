import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
import Image from "next/image";

export default function ProjectGallery() {
  return (
    <section id="gallery" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Gallery"
          title="Building Across Sectors &amp; Borders"
          description="Representative imagery across construction, commercial development, infrastructure, trade, logistics, and Ghana-based projects."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {siteImages.gallery.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.06}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 font-medium text-white">
                  {item.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
