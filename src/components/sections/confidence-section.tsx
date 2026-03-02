import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";
import { ConfidenceTexture } from "@/components/ui/confidence-texture";

const outcomes = [
  "Less time spent refreshing forecasts.",
  "More confidence about when it is worth going.",
  "Fewer missed short windows.",
  "Clearer calls with less second-guessing.",
];

export function ConfidenceSection() {
  return (
    <section id="confidence" className="section-gap container-shell grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
      <div className="reveal">
        <p className="text-sm uppercase tracking-[0.14em] text-muted">Why it matters</p>
        <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">More clarity. Less checking.</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          PrimeWindow does not try to remove uncertainty. It helps you spend less time interpreting charts and more
          time acting when a real opportunity appears.
        </p>
        <ul className="mt-6 space-y-2.5 text-sm text-text/90">
          {outcomes.map((outcome) => (
            <li key={outcome} className="rounded-md border border-border/65 bg-surface/34 px-3 py-2.5">
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <Card className="reveal p-6" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
        <p className="text-xs uppercase tracking-[0.12em] text-muted">Decision view</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="mb-2 text-sm text-muted">Before</p>
            <div className="space-y-2 rounded-md border border-border/55 bg-bg/28 p-3">
              <div className="rounded-sm border border-border/60 bg-bg/30 px-3 py-2 text-xs text-muted">
                Check app 1
              </div>
              <div className="rounded-sm border border-border/60 bg-bg/30 px-3 py-2 text-xs text-muted">
                Check app 2
              </div>
              <div className="rounded-sm border border-border/60 bg-bg/30 px-3 py-2 text-xs text-muted">
                Compare models again
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-muted">After</p>
            <div className="space-y-2 rounded-md border border-border/55 bg-bg/28 p-3">
              <div className="rounded-sm border border-accent/35 bg-accent/10 px-3 py-2 text-xs text-accent">
                PrimeWindow alert: Go window found
              </div>
              <ConfidenceTexture className="w-[78%]" />
              <ConfidenceTexture className="w-[58%]" diffuse />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
