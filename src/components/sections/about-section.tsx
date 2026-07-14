import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { aboutContent } from "@/data/portfolio";

export function AboutSection() {
  const titleHighlight = "people love";

  return (
    <section id="about" className="px-6 py-32" aria-label="About">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4">
                <Image
                  src={aboutContent.profile.image.src}
                  alt={aboutContent.profile.image.alt}
                  width={aboutContent.profile.image.width}
                  height={aboutContent.profile.image.height}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/55 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-base font-semibold text-white">{aboutContent.profile.name}</p>
                  <p className="text-sm text-slate-300">{aboutContent.profile.role}</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 rounded-2xl border border-blue-500/30 bg-[#0a0e1e]/90 p-5">
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="mt-0.5 text-xs text-gray-400">Years of Code</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
              {aboutContent.sectionLabel}
            </span>

            <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
              {aboutContent.title.replace(titleHighlight, "")}
              <span className="bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-slate-400">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {aboutContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="cursor-default rounded-2xl border border-white/10 bg-white/4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  <p className="mb-1 bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-2xl font-bold text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-white">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-gray-600">{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
