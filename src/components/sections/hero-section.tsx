"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { SectionPill } from "@/components/shared/section-pill";
import { heroContent } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 right-8 h-80 w-80 bg-[radial-gradient(circle,rgba(59,130,246,0.13)_0%,transparent_65%)]"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-12 h-96 w-96 bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_65%)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_25%,rgba(59,130,246,0.07)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <Reveal>
          <SectionPill>{heroContent.availability}</SectionPill>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <h1 className="mb-7 font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            <span className="block">{heroContent.titleLineOne}</span>
            <span className="block">{heroContent.titleLineTwo}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mb-11 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {heroContent.description}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={heroContent.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              {heroContent.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {heroContent.stack.map((item) => (
              <li
                key={item.label}
                className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:scale-105 hover:text-white"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-600"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
