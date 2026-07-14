import { Calendar, Check, ChevronDown, MapPin } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { experienceContent } from "@/data/portfolio";

const accentStyles = {
  blue: {
    border: "border-blue-500/25",
    dotBorder: "border-blue-500",
    dotFill: "bg-blue-500",
    rolePill: "bg-blue-500/10 text-blue-300",
    tag: "bg-white/6 text-gray-400",
  },
  violet: {
    border: "border-white/8",
    dotBorder: "border-violet-500",
    dotFill: "bg-violet-500",
    rolePill: "bg-violet-500/10 text-violet-300",
    tag: "bg-white/6 text-gray-400",
  },
} as const;

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-32" aria-label="Work experience">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
            {experienceContent.sectionLabel}
          </span>
          <h2 className="mb-5 font-display text-4xl font-bold text-white md:text-5xl">
            {experienceContent.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            {experienceContent.subtitle}
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-4 left-8 top-4 w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent" />

          <div className="space-y-5">
            {experienceContent.items.map((item, index) => {
              const accent = accentStyles[item.accent];

              return (
                <Reveal key={item.company} delay={0.06 * index}>
                  <article className="relative pl-16">
                    <div
                      className={[
                        "absolute left-[26px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-[#050816]",
                        accent.dotBorder,
                      ].join(" ")}
                    >
                      <span className={["h-2 w-2 rounded-full", accent.dotFill].join(" ")} />
                    </div>

                    <div
                      className={[
                        "cursor-pointer rounded-2xl border bg-white/4 p-7 transition-all duration-300 hover:scale-[1.01]",
                        accent.border,
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-white">{item.company}</h3>
                            <span
                              className={[
                                "rounded-lg px-2.5 py-0.5 text-xs font-medium",
                                accent.rolePill,
                              ].join(" ")}
                            >
                              {item.role}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                              {item.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:text-gray-300"
                          aria-label={`Toggle ${item.company} details`}
                        >
                          <ChevronDown
                            className={[
                              "h-4 w-4 transition-transform",
                              item.expandedByDefault ? "rotate-180" : "rotate-0",
                            ].join(" ")}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.summary}</p>

                      {item.expandedByDefault ? (
                        <div className="mt-6 overflow-hidden border-t border-white/8 pt-6">
                          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                            Key Achievements
                          </h4>
                          <ul className="mb-6 space-y-2.5">
                            {item.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-2.5 text-sm text-gray-300">
                                <Check className="mt-0.5 h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((technology) => (
                              <span
                                key={technology}
                                className={["rounded-lg px-3 py-1 text-xs", accent.tag].join(" ")}
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
