"use client";

import FadeIn from "@/components/ui/FadeIn";
import { sendContactForm } from "@/lib/contact-form-client";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      await sendContactForm(payload);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050a12]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden sm:h-56 lg:h-64"
        aria-hidden="true"
      >
        <Image
          src="/contact-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/30 via-[#050a12]/70 to-[#050a12]" />
      </div>

      <div className="section-py relative mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="max-w-lg">
          <FadeIn>
            <h2 className="font-serif text-[2.5rem] font-bold leading-[1.15] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              Let&apos;s Build Strategic
              <br />
              Partnerships
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-white lg:text-lg">
              Reach {siteConfig.shortName} to discuss trade corridors, development
              partnerships, and investment structures tailored to your objectives.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-12 space-y-4 text-base text-white lg:text-lg">
              <li>
                <span className="font-semibold text-gold">Email:</span>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-gold">Phone:</span>{" "}
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="font-semibold text-gold">WhatsApp:</span>{" "}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <span className="font-semibold text-gold">Location:</span>{" "}
                {siteConfig.location}
              </li>
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#0d1520]/85 p-8 backdrop-blur-md lg:p-10"
            aria-label="Contact form"
          >
            {status === "success" && (
              <p
                className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200"
                role="status"
              >
                Thank you. Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p
                className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {errorMessage}
              </p>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  disabled={status === "loading"}
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-[#141c2e] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/30 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  disabled={status === "loading"}
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-[#141c2e] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/30 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-xl border border-white/10 bg-[#141c2e] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/30 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  disabled={status === "loading"}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#141c2e] px-4 py-3.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/30 disabled:opacity-60"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
