// ==========================
// src/components/SectionHeading.tsx
// ==========================
import React from "react";
import { Info } from "lucide-react";

export function SectionHeading({
  id,
  title,
  eyebrow,
  description,
  icon,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  icon?: React.ReactNode;
}) {
  return (
    <header id={id} className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">
        {icon ?? <Info className="h-3.5 w-3.5" aria-hidden />}
        <span>{eyebrow ?? "Section"}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-white/80">{description}</p>
      )}
    </header>
  );
}