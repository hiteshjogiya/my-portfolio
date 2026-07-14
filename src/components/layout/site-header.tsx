"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data/portfolio";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="#home" className="group inline-flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-sm font-semibold text-white">
            HS
          </span>
          <span className="text-sm font-medium text-slate-100 transition-colors group-hover:text-white">
            Hitesh Jogiya
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/Hitesh_Jogiya_Frontend_Developer_Resume.pdf"
            download
            className="rounded-xl border border-blue-400/25 bg-blue-500/15 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-blue-500/25"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="mx-4 rounded-2xl border border-white/10 bg-[#0b1226]/95 p-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/Hitesh_Jogiya_Frontend_Developer_Resume.pdf"
              download
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
