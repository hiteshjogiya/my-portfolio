"use client";

import { ArrowUp, Code2, FileText, Link as LinkIcon, Mail, Send } from "lucide-react";
import Link from "next/link";
import type { FormEvent } from "react";

import { Reveal } from "@/components/animations/reveal";
import { contactContent } from "@/data/portfolio";
import type { ContactMethod, FooterLink } from "@/types/portfolio";

const methodIconMap: Record<ContactMethod["icon"], typeof Mail> = {
  mail: Mail,
  linkedin: LinkIcon,
  github: Code2,
};

const footerIconMap: Record<FooterLink["icon"], typeof Mail> = {
  github: Code2,
  linkedin: LinkIcon,
  email: Mail,
  resume: FileText,
};

function toFieldName(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export function ContactSection() {
  const emailHref = contactContent.methods.find((method) => method.icon === "mail")?.href ?? "mailto:";
  const recipient = emailHref.replace(/^mailto:/, "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("your-name") ?? "").trim();
    const email = String(formData.get("email-address") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "Website visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        "",
        "Message:",
        message || "No message provided.",
      ].join("\n"),
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <>
      <section id="contact" className="px-6 py-32" aria-label="Contact">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200">
              {contactContent.sectionLabel}
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
              {contactContent.title}
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-400">{contactContent.subtitle}</p>

            <div className="space-y-2">
              {contactContent.methods.map((method) => {
                const Icon = methodIconMap[method.icon];

                return (
                  <Link
                    key={method.label}
                    href={method.href}
                    className="group flex items-center gap-4 rounded-2xl p-4 transition-all hover:scale-[1.02] hover:bg-white/5"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 transition-transform group-hover:scale-110">
                      <Icon className="h-4 w-4 text-blue-400" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-gray-400">{method.label}</span>
                      <span className="block text-sm text-gray-200">{method.value}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              className="rounded-2xl border border-white/8 bg-white/4 p-6"
              aria-label="Contact form"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                {contactContent.formFields.map((field) => (
                  <label key={field.label} className="block">
                    <span className="mb-2 block text-sm text-gray-300">{field.label}</span>
                    {field.type === "textarea" ? (
                      <textarea
                        rows={5}
                        name={toFieldName(field.label)}
                        placeholder={field.placeholder}
                        required
                        className="w-full rounded-xl border border-white/10 bg-[#0b1226]/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400/40"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={toFieldName(field.label)}
                        placeholder={field.placeholder}
                        required
                        className="w-full rounded-xl border border-white/10 bg-[#0b1226]/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-blue-400/40"
                      />
                    )}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 py-4 font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90"
              >
                {contactContent.submitLabel}
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/8 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-sm font-semibold text-white">
              {contactContent.footer.brandText}
            </span>
            <p className="text-sm text-gray-500">{contactContent.footer.copyright}</p>
          </div>

          <div className="flex items-center gap-4">
            {contactContent.footer.links.map((linkItem) => {
              const Icon = footerIconMap[linkItem.icon];

              if (linkItem.icon === "resume") {
                return (
                  <a
                    key={linkItem.label}
                    href={linkItem.href}
                    download
                    className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {linkItem.label}
                  </a>
                );
              }

              return (
                <Link
                  key={linkItem.label}
                  href={linkItem.href}
                  className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {linkItem.label}
                </Link>
              );
            })}

            <Link
              href="#home"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-500 transition-all hover:scale-110 hover:text-white"
              aria-label={contactContent.footer.backToTopLabel}
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
