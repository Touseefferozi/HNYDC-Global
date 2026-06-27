"use client";

import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-14 pt-28 lg:px-12 lg:pb-20 lg:pt-40">
        <FadeIn>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Global Trade &amp; Investment Partnerships
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-[34rem] font-serif text-[2.5rem] font-bold leading-[1.15] text-white sm:text-[3.25rem]">
            Building Enduring Partnerships Across Borders
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">
            {siteConfig.name} structures international trade, real estate
            development, and strategic investment opportunities—with disciplined
            execution from New York to Ghana and beyond.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
          >
            View Our Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Our Story
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
