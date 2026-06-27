"use client";

import { navLinks } from "@/lib/site-config";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/5 bg-[#050a12]/95 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md"
          : "bg-transparent py-5 lg:py-8"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="relative z-50 font-serif text-2xl font-bold tracking-tight lg:text-[1.75rem]"
          onClick={closeMenu}
        >
          <span className="text-white">HNYDC</span>{" "}
          <span className="text-gold">Global</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-medium tracking-wide text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-gold px-6 py-3 text-base font-medium text-gold transition-colors hover:bg-gold/10 sm:inline-flex"
          >
            Partner With Us
          </a>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] bg-black/60 lg:hidden"
              aria-hidden="true"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-[4.5rem] z-[100] px-4 lg:hidden"
            >
              <div className="mx-auto max-w-lg rounded-2xl border border-white/20 bg-[#eef2f7] shadow-2xl">
                <ul className="flex flex-col px-2 py-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block rounded-xl px-4 py-3.5 text-base font-medium text-[#0b1622] transition-colors hover:bg-white hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.04 }}
                    className="p-2 pt-3"
                  >
                    <a
                      href="#contact"
                      onClick={closeMenu}
                      className="flex w-full items-center justify-center rounded-full bg-gold py-3.5 text-base font-semibold text-black"
                    >
                      Partner With Us
                    </a>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
