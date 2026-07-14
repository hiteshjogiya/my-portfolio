import type { ReactNode } from "react";

type SectionPillProps = {
  children: ReactNode;
};

export function SectionPill({ children }: SectionPillProps) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-slate-200 backdrop-blur-sm">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}
