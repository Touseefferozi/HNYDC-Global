import FadeIn from "@/components/ui/FadeIn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <FadeIn
      className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"}
    >
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl font-bold leading-tight text-white lg:text-5xl ${
          isCenter ? "" : "lg:text-[2.75rem]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-relaxed text-white/70 lg:text-lg ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
