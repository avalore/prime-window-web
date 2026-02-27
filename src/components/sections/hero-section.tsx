import type { CSSProperties } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { ConfidenceTexture } from "@/components/ui/confidence-texture";
import { Glow } from "@/components/ui/glow";

export function HeroSection() {
  const atAGlance = [
    "Pick your spots and activities.",
    "Set the conditions that feel good to you.",
    "Get alerts when a Prime Window is coming.",
  ];

  return (
    <section className="container-shell relative pt-14 md:pt-20">
      <Glow className="left-[10%] top-10 h-44 w-44 animate-breath" />
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div className="reveal space-y-7">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
            <span className="rounded-full border border-border/80 bg-surface/45 px-3 py-1">iOS app</span>
            <span className="rounded-full border border-border/80 bg-surface/45 px-3 py-1">Push alerts</span>
            <span className="rounded-full border border-border/80 bg-surface/45 px-3 py-1">Prime Windows</span>
          </div>
          <h1 className="max-w-[13ch] font-display text-4xl leading-tight text-text md:text-6xl">
            Some days are just perfect. PrimeWindow tells you when.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Tell PrimeWindow where you go and what conditions count as good. It tracks your spots and alerts you
            before a Prime Window opens.
          </p>
          <div className="max-w-xl space-y-3 rounded-md border border-border/65 bg-surface/30 px-4 py-4">
            <ul className="space-y-2 text-sm text-text/90">
              {atAGlance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">No more checking three weather apps ten times a day.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#early-access"
              className="rounded-md border border-accent/35 bg-accent/16 px-5 py-3 text-sm font-medium text-text transition hover:bg-accent/24"
            >
              Join early access
            </a>
            <a
              href="#how-it-works"
              className="rounded-md border border-border/70 bg-surface/40 px-5 py-3 text-sm text-muted transition hover:text-text"
            >
              See how it works
            </a>
          </div>
          <Link href="/open-letter" className="inline-flex text-sm text-muted transition-colors hover:text-text">
            Read why I am building PrimeWindow
          </Link>
        </div>

        <Card
          className="reveal relative overflow-hidden p-5 md:p-6"
          style={{ "--reveal-delay": "130ms" } as CSSProperties}
        >
          <Glow className="-right-5 top-3 h-28 w-28 animate-breath" />
          <div className="relative mx-auto max-w-[20rem]">
            <div className="notification-toast absolute left-1/2 top-3 z-20 w-[92%] -translate-x-1/2 rounded-md border border-accent/35 bg-surface/92 p-3 shadow-soft backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.12em] text-muted">PrimeWindow alert</p>
              <p className="mt-1 text-sm text-text">New Prime Window</p>
              <p className="mt-0.5 text-xs text-muted">Low winds at South Bay in 2 days.</p>
            </div>

            <div className="relative rounded-[2rem] border border-border/70 bg-[linear-gradient(170deg,rgba(27,38,61,0.8),rgba(10,15,27,0.98))] p-2.5 shadow-card">
              <div className="mx-auto mb-2 h-5 w-28 rounded-full border border-border/80 bg-bg/75" />
              <div className="overflow-hidden rounded-[1.6rem] border border-border/65 bg-bg/55 p-4 pt-6">
                <p className="text-xs uppercase tracking-[0.12em] text-muted">Prime Window</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium text-text">06:40-08:10</p>
                    <p className="text-sm text-muted">South Bay</p>
                  </div>
                  <div className="rounded-full border border-accent/35 bg-accent/14 px-2.5 py-1 text-xs text-accent">
                    82%
                  </div>
                </div>

                <div className="mt-4 rounded-md border border-border/65 bg-bg/20 p-3">
                  <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.1em] text-muted">
                    <span>Window timeline</span>
                    <span>iPhone</span>
                  </div>
                  <div className="space-y-2">
                    <ConfidenceTexture className="w-[74%]" />
                    <ConfidenceTexture className="w-[57%]" diffuse />
                    <ConfidenceTexture className="w-[65%]" />
                    <ConfidenceTexture className="w-[43%]" diffuse />
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-muted">
                  <div className="rounded-md border border-border/60 bg-bg/25 p-2">Wind holding</div>
                  <div className="rounded-md border border-border/60 bg-bg/25 p-2">Rain low</div>
                  <div className="rounded-md border border-border/60 bg-bg/25 p-2">Light stable</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
