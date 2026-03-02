import type { CSSProperties } from "react";

import { EarlyAccessForm } from "@/components/sections/early-access-form";

export function EarlyAccessSection() {
  return (
    <section id="early-access" className="section-gap container-shell pb-16">
      <div className="reveal max-w-2xl">
        <p className="text-sm uppercase tracking-[0.14em] text-muted">Early access</p>
        <h2 className="mt-3 font-display text-3xl text-text md:text-4xl">Join the waitlist</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          PrimeWindow is pre-launch for iPhone. Leave your email to get early access when testing opens.
        </p>
      </div>
      <div className="reveal" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
        <EarlyAccessForm />
      </div>
    </section>
  );
}
