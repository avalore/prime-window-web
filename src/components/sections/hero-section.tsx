import type { CSSProperties } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { ConfidenceTexture } from "@/components/ui/confidence-texture";
import { Glow } from "@/components/ui/glow";

export function HeroSection() {
  const atAGlance = ["Define your conditions once.", "PrimeWindow watches your spots.", "Get notified when a window opens."];

  return (
    <section className="container-shell relative pt-14 md:pt-20">
      <Glow className="left-[10%] top-10 h-44 w-44 animate-breath" />
      <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <h1 className="reveal w-full font-display text-4xl leading-tight text-text sm:text-5xl md:col-span-2 md:text-6xl">
          Weather apps show forecasts. PrimeWindow shows opportunities.
        </h1>
        <div className="reveal space-y-6" style={{ "--reveal-delay": "70ms" } as CSSProperties}>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Set the wind conditions you actually care about. PrimeWindow tracks your spots and sends a notification
            when a usable window appears.
          </p>
          <p className="text-sm text-muted">
            <span className="text-text">Not another weather app.</span> Built for clear calls, not more chart checking.
          </p>
          <div className="max-w-xl space-y-3 rounded-md border border-border/65 bg-surface/30 px-4 py-4 shadow-soft">
            <ul className="space-y-2 text-sm text-text/90">
              {atAGlance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">No more refreshing forecasts all day to catch a two-hour window.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#early-access"
              className="rounded-md border border-accent/35 bg-accent/16 px-5 py-3 text-sm font-medium text-text transition hover:bg-accent/24"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-md border border-border/70 bg-surface/40 px-5 py-3 text-sm text-muted transition hover:text-text"
            >
              See how it works
            </a>
          </div>
          <Link
            href="/the-problem-with-weather-apps"
            className="inline-flex text-sm text-muted transition-colors hover:text-text"
          >
            Read: The problem with weather apps
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
                    Go • 82%
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

                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                  <div className="rounded-md border border-accent/35 bg-accent/10 p-2 text-accent">Go</div>
                  <div className="rounded-md border border-amber/40 bg-amber/10 p-2 text-amber">Marginal</div>
                  <div className="rounded-md border border-danger/35 bg-danger/10 p-2 text-danger">No-go</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
