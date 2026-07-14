import {
  Code2,
  Database,
  Layers,
  Palette,
  Server,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { skillsContent } from "@/data/portfolio";
import type { SkillCategory } from "@/types/portfolio";

const iconMap: Record<SkillCategory["icon"], typeof Code2> = {
  code: Code2,
  layers: Layers,
  workflow: Workflow,
  palette: Palette,
  server: Server,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
};

const accentMap: Record<SkillCategory["accent"], { iconWrap: string; iconText: string; barFill: string }> = {
  blue: {
    iconWrap: "border-blue-500/20 bg-blue-500/10",
    iconText: "text-blue-400",
    barFill: "bg-blue-500",
  },
  violet: {
    iconWrap: "border-violet-500/20 bg-violet-500/10",
    iconText: "text-violet-400",
    barFill: "bg-violet-500",
  },
  cyan: {
    iconWrap: "border-cyan-500/20 bg-cyan-500/10",
    iconText: "text-cyan-400",
    barFill: "bg-cyan-500",
  },
  amber: {
    iconWrap: "border-amber-500/20 bg-amber-500/10",
    iconText: "text-amber-400",
    barFill: "bg-amber-500",
  },
  emerald: {
    iconWrap: "border-emerald-500/20 bg-emerald-500/10",
    iconText: "text-emerald-400",
    barFill: "bg-emerald-500",
  },
  red: {
    iconWrap: "border-red-500/20 bg-red-500/10",
    iconText: "text-red-400",
    barFill: "bg-red-500",
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-32" aria-label="Skills and technologies">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
            {skillsContent.sectionLabel}
          </span>
          <h2 className="mb-5 font-display text-4xl font-bold text-white md:text-5xl">
            {skillsContent.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            {skillsContent.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillsContent.categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            const accent = accentMap[category.accent];

            return (
              <Reveal key={category.title} delay={0.04 * index}>
                <article className="group relative h-full rounded-2xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.025]">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={[
                          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border",
                          accent.iconWrap,
                        ].join(" ")}
                      >
                        <Icon className={["h-4 w-4", accent.iconText].join(" ")} aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{category.title}</h3>
                    </div>

                    <div>
                      {category.items.map((item) => (
                        <div key={item.name} className="mb-3.5 last:mb-0">
                          <div className="mb-1.5 flex justify-between text-xs">
                            <span className="text-gray-300">{item.name}</span>
                            <span className="text-gray-500">{item.percent}</span>
                          </div>
                          <div className="h-1 rounded-full bg-white/10">
                            <div
                              className={[
                                "h-full rounded-full",
                                accent.barFill,
                                item.widthClass,
                              ].join(" ")}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
