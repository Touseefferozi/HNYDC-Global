import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const projects = [
  {
    title: "Student Accommodation Development",
    location: "Sunyani, Ghana",
    image: "/projects/sunyani.jpg",
    description:
      "A purpose-built student housing development designed to meet rising demand for secure, modern accommodation near Sunyani's academic institutions. The project combines durable construction standards with efficient layouts—creating long-term rental value and meaningful contribution to the region's educational infrastructure.",
  },
  {
    title: "Apartment Building Development",
    location: "Prampram, Ghana",
    image: "/projects/prampram.jpg",
    description:
      "A contemporary multi-unit residential development positioned along Ghana's rapidly expanding coastal corridor. Engineered for middle-market buyers and investors, this Prampram project blends thoughtful urban design with scalable construction—capturing growth in one of West Africa's most dynamic real estate markets.",
  },
];

export default function CurrentProjects() {
  return (
    <section id="projects" className="section-py bg-[#050a12] px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Current Projects"
          title="Development in Motion"
          description="Active initiatives across Ghana that reflect our commitment to quality construction, market-driven design, and partnerships built for enduring returns."
        />

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.12}>
              <article className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0d1520] transition-all duration-300 hover:border-gold/25 hover:shadow-[0_20px_40px_-18px_rgba(196,160,82,0.2)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
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
