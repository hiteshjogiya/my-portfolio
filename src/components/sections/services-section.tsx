import {
  Braces,
  ChartNoAxesCombined,
  Component,
  Gauge,
  PenTool,
  Rocket,
} from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { servicesContent } from "@/data/portfolio";
import type { ServiceItem } from "@/types/portfolio";

const iconMap: Record<ServiceItem["icon"], typeof Braces> = {
  braces: Braces,
  component: Component,
  rocket: Rocket,
  chart: ChartNoAxesCombined,
  figma: PenTool,
  gauge: Gauge,
};

const accentMap: Record<
  ServiceItem["accent"],
  {
    iconWrap: string;
    iconColor: string;
    glow: string;
  }
> = {
  blue: {
    iconWrap: "border-blue-500/20 bg-blue-500/10",
    iconColor: "text-blue-400",
    glow: "from-blue-500/18",
  },
  violet: {
    iconWrap: "border-violet-500/20 bg-violet-500/10",
    iconColor: "text-violet-400",
    glow: "from-violet-500/18",
  },
  cyan: {
    iconWrap: "border-cyan-500/20 bg-cyan-500/10",
    iconColor: "text-cyan-400",
    glow: "from-cyan-500/18",
  },
  amber: {
    iconWrap: "border-amber-500/20 bg-amber-500/10",
    iconColor: "text-amber-400",
    glow: "from-amber-500/18",
  },
  emerald: {
    iconWrap: "border-emerald-500/20 bg-emerald-500/10",
    iconColor: "text-emerald-400",
    glow: "from-emerald-500/18",
  },
  red: {
    iconWrap: "border-red-500/20 bg-red-500/10",
    iconColor: "text-red-400",
    glow: "from-red-500/18",
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-32" aria-label="Services and capabilities">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
            {servicesContent.sectionLabel}
          </span>
          <h2 className="mb-5 font-display text-4xl font-bold text-white md:text-5xl">
            {servicesContent.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            {servicesContent.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            const accent = accentMap[service.accent];

            return (
              <Reveal key={service.title} delay={0.04 * index}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.035]">
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      accent.glow,
                    ].join(" ")}
                  />

                  <div
                    className={[
                      "relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110",
                      accent.iconWrap,
                    ].join(" ")}
                  >
                    <Icon className={["h-5 w-5", accent.iconColor].join(" ")} aria-hidden="true" />
                  </div>

                  <h3 className="relative mb-3 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="relative text-sm leading-relaxed text-gray-400">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
