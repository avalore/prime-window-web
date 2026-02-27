"use client";

import Script from "next/script";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

const activities = ["Fly", "Surf", "Ride", "Climb", "Sail", "Shoot", "Run", "Explore"] as const;
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const turnstileWidgetId = "primewindow-turnstile";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

declare global {
  interface Window {
    primewindowTurnstileCallback?: (token: string) => void;
    primewindowTurnstileExpiredCallback?: () => void;
    turnstile?: {
      reset: (widget?: string | HTMLElement) => void;
    };
  }
}

export function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!turnstileSiteKey || typeof window === "undefined") {
      return;
    }

    window.primewindowTurnstileCallback = (token: string) => {
      setTurnstileToken(token);
      setError("");
    };

    window.primewindowTurnstileExpiredCallback = () => {
      setTurnstileToken("");
    };

    return () => {
      delete window.primewindowTurnstileCallback;
      delete window.primewindowTurnstileExpiredCallback;
    };
  }, []);

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

  const resetTurnstile = () => {
    if (!turnstileSiteKey || typeof window === "undefined" || !window.turnstile) {
      return;
    }

    const widget = document.getElementById(turnstileWidgetId);
    if (widget) {
      window.turnstile.reset(widget);
      setTurnstileToken("");
    }
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

    if (turnstileSiteKey && turnstileToken.length === 0) {
      setError("Please complete the anti-spam check.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      const page = typeof window !== "undefined" ? window.location.pathname : "/";
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          activities: selected,
          location,
          company: honeypot,
          turnstileToken,
          page,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        resetTurnstile();
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError("Could not submit right now. Please try again.");
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
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

      {turnstileSiteKey ? (
        <div className="space-y-2">
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
          <div
            id={turnstileWidgetId}
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="dark"
            data-callback="primewindowTurnstileCallback"
            data-expired-callback="primewindowTurnstileExpiredCallback"
            data-error-callback="primewindowTurnstileExpiredCallback"
          />
        </div>
      ) : null}

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
