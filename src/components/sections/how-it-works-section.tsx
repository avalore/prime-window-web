import type { CSSProperties } from "react";

import { Card } from "@/components/ui/card";

type Step = {
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    title: "Pick your spots",
    body: "Save the places you care about and keep them ready.",
  },
  {
    title: "Choose what \"good\" means",
    body: "Use presets, then tweak when you want more control.",
  },
  {
    title: "Get alerted when a Prime Window opens",
    body: "You get one clear signal when conditions line up.",
  },
];

function SpotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-accent">
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SliderIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-accent">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9" cy="7" r="2" fill="rgb(var(--color-bg))" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="2" fill="rgb(var(--color-bg))" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="17" r="2" fill="rgb(var(--color-bg))" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 text-accent">
      <path
        d="M12 4a4 4 0 00-4 4v2.4c0 1.2-.4 2.3-1.2 3.2L5.5 15h13l-1.3-1.4a4.7 4.7 0 01-1.2-3.2V8a4 4 0 00-4-4zM9.5 18a2.5 2.5 0 005 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = [SpotIcon, SliderIcon, BellIcon];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-gap container-shell">
      <div className="reveal flex items-end justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-muted">How it works</p>
          <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">A calm way to plan ahead.</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <Card
              key={step.title}
              className="reveal p-5 transition-transform hover:-translate-y-0.5"
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="mb-4 inline-flex rounded-md border border-border/70 bg-bg/35 p-2.5">
                <Icon />
              </div>
              <h3 className="text-lg text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
