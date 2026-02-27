import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";
import { ConfidenceTexture } from "@/components/ui/confidence-texture";

const factors = [
  "Model agreement",
  "Gust risk",
  "Precipitation uncertainty",
  "Rapid change windows",
];

export function ConfidenceSection() {
  return (
    <section id="confidence" className="section-gap container-shell grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
      <div className="reveal">
        <p className="text-sm uppercase tracking-[0.14em] text-muted">Confidence</p>
        <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">Confidence you can see.</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          PrimeWindow compares trusted sources and highlights where they agree. You can see when signals line up,
          and when they spread out.
        </p>

        <details className="mt-6 rounded-md border border-border/65 bg-surface/34 p-4 text-sm text-muted">
          <summary className="cursor-pointer list-none text-text">What affects confidence?</summary>
          <ul className="mt-3 space-y-2">
            {factors.map((factor) => (
              <li key={factor} className="rounded-sm bg-bg/26 px-3 py-2">
                {factor}
              </li>
            ))}
          </ul>
        </details>
      </div>

      <Card className="reveal p-6" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
        <p className="text-xs uppercase tracking-[0.12em] text-muted">Window alignment</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="mb-2 text-sm text-muted">High confidence</p>
            <div className="space-y-2 rounded-md border border-border/55 bg-bg/28 p-3">
              <ConfidenceTexture className="w-[84%]" />
              <ConfidenceTexture className="w-[82%]" />
              <ConfidenceTexture className="w-[81%]" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-muted">Lower confidence</p>
            <div className="space-y-2 rounded-md border border-border/55 bg-bg/28 p-3">
              <ConfidenceTexture className="w-[68%]" diffuse />
              <ConfidenceTexture className="w-[49%]" diffuse />
              <ConfidenceTexture className="w-[79%]" diffuse />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
