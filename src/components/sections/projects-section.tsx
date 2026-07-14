import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { projectsContent } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32" aria-label="Projects">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
            {projectsContent.sectionLabel}
          </span>
          <h2 className="mb-5 font-display text-4xl font-bold text-white md:text-5xl">
            {projectsContent.title}
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-400">
            {projectsContent.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsContent.items.map((project, index) => (
            <Reveal key={project.title} delay={0.04 * index}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.025]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>

                  <ul className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-3">
                    <Link
                      href={project.liveUrl}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-500 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:opacity-85"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.codeUrl}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-semibold text-gray-400 transition-all hover:bg-white/8 hover:text-white"
                    >
                      <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Code
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
