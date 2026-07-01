import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const divisions = [
  {
    title: "HNYDC Property Group Ltd",
    description:
      "HNYDC Property Group Ltd serves as the Ghana-based sister company and strategic project partner for HNYDC Global Holdings' real estate initiatives in Ghana. The company provides local market expertise, project development support, and operational execution for residential and commercial developments.",
    tag: "Real Estate · Ghana",
  },
  {
    title: "All Nations Trade",
    description:
      "All Nations Trade operates as the trade, logistics, supply chain, and agribusiness division of HNYDC Global Holdings. The division supports international commerce through sourcing, procurement, logistics coordination, and cross border trade solutions.",
    tag: "Trade · Logistics · Agribusiness",
  },
];

export default function BusinessSectors() {
  return (
    <section id="sectors" className="section-py bg-section-bg px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Operating Divisions"
          title="Specialized Divisions. Unified Vision."
        />

        <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {divisions.map((division, index) => (
            <FadeIn key={division.title} delay={index * 0.1}>
              <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#141c2e] to-[#0d1520] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_40px_-18px_rgba(196,160,82,0.25)] lg:p-10">
                <span className="inline-flex w-fit rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
                  {division.tag}
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-white lg:text-3xl">
                  {division.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-white/65">
                  {division.description}
                </p>
                <div className="mt-8 h-0.5 w-10 rounded-full bg-gold/50 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
