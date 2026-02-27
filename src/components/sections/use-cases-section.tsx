import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";

const useCases = [
  ["Fly", "Wind and timing, simplified."],
  ["Surf", "Spot checks that fit your day."],
  ["Ride", "Know when conditions settle."],
  ["Climb", "Plan around weather shifts."],
  ["Sail", "See windows that are worth it."],
  ["Shoot", "Light and weather at a glance."],
  ["Run", "Choose steady hours."],
  ["Explore", "Pick the right moment to go."],
] as const;

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-gap container-shell">
      <div className="reveal md:flex md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-muted">Use cases</p>
          <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">Made for real routines.</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
