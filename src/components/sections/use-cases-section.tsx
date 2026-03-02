import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";

const useCases = [
  ["Paragliders", "Know when your hill is actually on."],
  ["Paramotor pilots", "Catch usable wind windows without constant checking."],
  ["Wind-dependent athletes", "Set your thresholds and get a clear signal."],
] as const;

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-gap container-shell">
      <div className="reveal md:flex md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-muted">Built for wind-dependent sports</p>
          <h2 className="mt-3 max-w-[20ch] font-display text-3xl text-text md:text-4xl">
            Built for people whose plans depend on the wind.
          </h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map(([title, detail], index) => (
          <Card
            key={title}
            className="reveal group p-5 transition-colors hover:border-accent/35"
            style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
          >
            <h3 className="text-lg text-text">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted transition-colors group-hover:text-text/90">
              {detail}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
