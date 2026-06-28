import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
import Image from "next/image";

const projects = [
  {
    title: "Sunyani Student Accommodation Development",
    location: "Sunyani, Ghana",
    image: siteImages.projects.sunyani.src,
    imageAlt: siteImages.projects.sunyani.alt,
    description:
      "A purpose-built student housing initiative designed to address growing demand for secure, modern accommodation near academic institutions in Sunyani, Ghana.",
  },
  {
    title: "Global Trade Expansion",
    location: "International",
    image: siteImages.projects.trade.src,
    imageAlt: siteImages.projects.trade.alt,
    description:
      "Structured trade initiatives connecting enterprises and investors across international markets, with a focus on scalable cross-border commerce.",
  },
  {
    title: "Logistics & Supply Chain",
    location: "Multi-Region",
    image: siteImages.projects.logistics.src,
    imageAlt: siteImages.projects.logistics.alt,
    description:
      "Logistics and supply chain programs supporting efficient movement of goods, materials, and resources across key trade corridors.",
  },
  {
    title: "Property Development",
    location: "Ghana",
    image: siteImages.projects.property.src,
    imageAlt: siteImages.projects.property.alt,
    description:
      "Residential and commercial property development projects positioned to meet rising demand in Ghana's growing urban and coastal markets.",
  },
  {
    title: "Future Mixed-Use & Apartment Projects",
    location: "Ghana",
    image: siteImages.projects.mixedUse.src,
    imageAlt: siteImages.projects.mixedUse.alt,
    description:
      "Pipeline of mixed-use and apartment developments designed for middle-market buyers, investors, and long-term community value.",
  },
];

export default function CurrentProjects() {
  return (
    <section id="projects" className="section-py bg-[#050a12] px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Current Projects"
          title="Development in Motion"
          description="Active and pipeline initiatives across trade, logistics, infrastructure, and real estate—reflecting our commitment to disciplined execution and enduring partnerships."
        />

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-2" : undefined}
            >
              <article className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0d1520] transition-all duration-300 hover:border-gold/25 hover:shadow-[0_20px_40px_-18px_rgba(196,160,82,0.2)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.location}
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/65">
                    {project.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
