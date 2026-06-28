"use client";

import FadeIn from "@/components/ui/FadeIn";
import { siteImages } from "@/lib/site-images";
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
        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl font-serif text-[2.25rem] font-bold leading-[1.12] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
            Building Global Trade, Real Estate &amp; Investment Partnerships
            Between Africa and the World.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-3xl text-sm font-medium uppercase tracking-[0.12em] text-white/85 sm:text-base sm:tracking-[0.15em]">
            International Trade &bull; Real Estate Development &bull;
            Infrastructure &bull; Logistics &bull; Investment Advisory
          </p>
        </FadeIn>

        <FadeIn
          delay={0.3}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light"
          >
            Partner With Us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Request a Consultation
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-7 py-3.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            Explore Our Projects
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
