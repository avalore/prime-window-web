"use client";

import { FormEvent, useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const activities = ["Fly", "Surf", "Ride", "Climb", "Sail", "Shoot", "Run", "Explore"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedText = useMemo(() => {
    if (selected.length === 0) {
      return "No activity selected";
    }
    return selected.join(", ");
  }, [selected]);

  const toggleActivity = (activity: string) => {
    setSelected((prev) =>
      prev.includes(activity) ? prev.filter((value) => value !== activity) : [...prev, activity],
    );
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (honeypot.trim().length > 0) {
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 450);
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="mt-7 p-6">
        <p className="text-sm uppercase tracking-[0.1em] text-muted">You are in</p>
        <p className="mt-2 text-lg text-text">Thanks. We will send updates as early access opens.</p>
        <p className="mt-2 text-sm text-muted">Email: {email}</p>
        {selected.length > 0 ? <p className="mt-1 text-sm text-muted">Activities: {selectedText}</p> : null}
        {location.trim() ? <p className="mt-1 text-sm text-muted">Location: {location.trim()}</p> : null}
      </Card>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-7 space-y-5">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-md border border-border/70 bg-surface/42 px-4 py-3 text-text outline-none transition focus:border-accent/55"
          placeholder="name@example.com"
        />
      </div>

      <div>
        <p className="mb-2 text-sm text-muted">Activities (optional)</p>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => {
            const active = selected.includes(activity);
            return (
              <button
                key={activity}
                type="button"
                onClick={() => toggleActivity(activity)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition",
                  active
                    ? "border-accent/50 bg-accent/14 text-text"
                    : "border-border/70 bg-surface/25 text-muted hover:text-text",
                )}
                aria-pressed={active}
              >
                {activity}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="mb-2 block text-sm text-muted">
          Location (optional)
        </label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="w-full rounded-md border border-border/70 bg-surface/42 px-4 py-3 text-text outline-none transition focus:border-accent/55"
          placeholder="City or region"
        />
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {error ? <p className="text-sm text-danger">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md border border-accent/40 bg-accent/16 px-5 py-3 text-sm font-medium text-text transition hover:bg-accent/24 disabled:opacity-65"
      >
        {isSubmitting ? "Sending..." : "Join early access"}
      </button>
    </form>
  );
}
