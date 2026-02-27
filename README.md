# PrimeWindow landing site

Single-page marketing site for the iOS app **PrimeWindow**, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run start` - serve production build
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks

## Project structure

- `src/app/page.tsx` - landing page assembly
- `src/components/sections/*` - section components (nav, hero, use cases, confidence, share, early access, footer)
- `src/components/ui/*` - reusable primitives (`Card`, `Glow`, `ConfidenceTexture`)
- `src/components/reveal-observer.tsx` - restrained scroll-in reveal behaviour
- `src/styles/tokens.ts` - design tokens + exported CSS variable map
- `src/app/privacy/page.tsx` - privacy page
- `src/app/the-problem-with-weather-apps/page.tsx` - long-form open letter / build narrative page
- `src/app/w/[id]/page.tsx` - share URL page (mobile-first weather and planning view)
- `src/app/api/signup/route.ts` - signup endpoint (Loops integration + anti-spam checks)
- `src/app/terms/page.tsx` - terms page
- `src/data/shared-windows.ts` - local dummy shared window data source
- `src/app/layout.tsx` - global metadata, SEO, analytics hook placeholder

## Edit copy

Update section text in:

- `src/components/sections/hero-section.tsx`
- `src/components/sections/insight-section.tsx`
- `src/components/sections/how-it-works-section.tsx`
- `src/components/sections/use-cases-section.tsx`
- `src/components/sections/confidence-section.tsx`
- `src/components/sections/share-section.tsx`
- `src/components/sections/early-access-section.tsx`
- `src/app/the-problem-with-weather-apps/page.tsx`
- `src/data/shared-windows.ts` (for share URL content)

## Edit colours and visual tokens

Change design tokens in `src/styles/tokens.ts`.

Tailwind maps these tokens through CSS variables in `tailwind.config.ts`, so section styles update consistently.

## Analytics placeholder

Plausible hook is wired in `src/app/layout.tsx` and activates only when env vars are set:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_SCRIPT` (optional, defaults to `https://plausible.io/js/script.js`)

Without those vars, a no-op analytics object is added as a placeholder.

## Early access form (Loops + Turnstile)

The form submits to `src/app/api/signup/route.ts`.

Current behaviour:

- server-side email validation
- honeypot spam trap (`company`)
- in-memory IP rate limiting
- optional Cloudflare Turnstile server verification
- Loops contact upsert + signup event

### Required environment variables

- `LOOPS_API_KEY` (required)

### Optional environment variables

- `LOOPS_SIGNUP_SOURCE` (defaults to `PrimeWindow early access form`)
- `LOOPS_SIGNUP_EVENT_NAME` (defaults to `earlyAccessSignup`)
- `LOOPS_ACTIVITIES_PROPERTY_KEY` (defaults to `activities`)
- `LOOPS_LOCATION_PROPERTY_KEY` (defaults to `location`)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (enables Turnstile widget in the form)
- `TURNSTILE_SECRET_KEY` (enables Turnstile verification in API route)

If you set `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, also set `TURNSTILE_SECRET_KEY` so server-side checks are enforced.

Notes for Loops custom fields:

- `activities` and `location` are sent both as contact properties and event properties.
- If your Loops workspace uses different custom field API names, set `LOOPS_ACTIVITIES_PROPERTY_KEY` and `LOOPS_LOCATION_PROPERTY_KEY` to match those names.
