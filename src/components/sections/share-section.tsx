import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";
import { Glow } from "@/components/ui/glow";

export function ShareSection() {
  return (
    <section className="section-gap container-shell grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
      <div className="reveal">
        <p className="text-sm uppercase tracking-[0.14em] text-muted">Built for iPhone</p>
        <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">On your phone. Right when it matters.</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          PrimeWindow is mobile-first and notification-led. While you are at work, travelling, or doing normal life,
          it keeps watch and only interrupts when your window appears.
        </p>
        <p className="mt-3 text-sm text-muted">No need to refresh forecasts all day.</p>
      </div>

      <Card
        className="reveal relative overflow-hidden p-5"
        style={{ "--reveal-delay": "120ms" } as CSSProperties}
      >
        <Glow className="-right-3 -top-4 h-24 w-24 animate-breath" />
        <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-md border border-border/65 bg-bg/30 p-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.1em] text-muted">
              <span>PrimeWindow alert</span>
              <span>iPhone</span>
            </div>
            <p className="mt-3 text-xl text-text">Mam Tor</p>
            <p className="mt-1 text-sm text-muted">Tue, 14:00-17:00</p>
            <div className="mt-4 inline-flex rounded-full border border-accent/35 bg-accent/14 px-3 py-1 text-xs text-accent">
              Green • Go
            </div>
            <p className="mt-3 text-xs text-muted">Light NW · low gusts · no rain</p>
          </div>
          <div className="rounded-md border border-border/65 bg-[linear-gradient(145deg,rgba(53,81,114,0.28),rgba(18,31,53,0.22))] p-4">
            <p className="text-xs uppercase tracking-[0.1em] text-muted">State</p>
            <div className="mt-3 h-24 rounded-sm border border-border/65 bg-[radial-gradient(circle_at_30%_40%,rgba(125,152,180,0.25),transparent_58%),radial-gradient(circle_at_70%_65%,rgba(123,168,147,0.22),transparent_60%),rgba(11,17,28,0.66)]" />
            <div className="mt-3 space-y-1 text-[11px]">
              <p className="rounded-sm border border-accent/35 bg-accent/10 px-2 py-1 text-accent">Green = Go</p>
              <p className="rounded-sm border border-amber/40 bg-amber/10 px-2 py-1 text-amber">Orange = Marginal</p>
              <p className="rounded-sm border border-danger/35 bg-danger/10 px-2 py-1 text-danger">Red = No-go</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
