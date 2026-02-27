import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";
import { Glow } from "@/components/ui/glow";

export function ShareSection() {
  return (
    <section className="section-gap container-shell grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
      <div className="reveal">
        <p className="text-sm uppercase tracking-[0.14em] text-muted">Sharing</p>
        <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">Share a window. Make a plan.</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          Send a Prime Window to friends in the app, or share a clean link that anyone can open.
        </p>
        <a href="/w/south-bay-dawn" className="mt-4 inline-flex text-sm text-text/90 underline decoration-border">
          Open example share link
        </a>
      </div>

      <Card
        className="reveal relative overflow-hidden p-5"
        style={{ "--reveal-delay": "120ms" } as CSSProperties}
      >
        <Glow className="-right-3 -top-4 h-24 w-24 animate-breath" />
        <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-md border border-border/65 bg-bg/30 p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em] text-muted">
              <span>Prime Window Pass</span>
              <span>Share</span>
            </div>
            <p className="mt-3 text-xl text-text">South Bay</p>
            <p className="mt-1 text-sm text-muted">Sat, 06:40-08:10</p>
            <div className="mt-4 inline-flex rounded-full border border-accent/35 bg-accent/14 px-3 py-1 text-xs text-accent">
              Confidence 82%
            </div>
          </div>
          <div className="rounded-md border border-border/65 bg-[linear-gradient(145deg,rgba(53,81,114,0.28),rgba(18,31,53,0.22))] p-4">
            <p className="text-xs uppercase tracking-[0.1em] text-muted">Map</p>
            <div className="mt-3 h-24 rounded-sm border border-border/65 bg-[radial-gradient(circle_at_30%_40%,rgba(125,152,180,0.25),transparent_58%),radial-gradient(circle_at_70%_65%,rgba(123,168,147,0.22),transparent_60%),rgba(11,17,28,0.66)]" />
          </div>
        </div>
      </Card>
    </section>
  );
}
