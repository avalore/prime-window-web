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
- `src/app/open-letter/page.tsx` - long-form open letter / build narrative page
- `src/app/w/[id]/page.tsx` - share URL page (mobile-first weather and planning view)
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
- `src/app/open-letter/page.tsx`
- `src/data/shared-windows.ts` (for share URL content)

## Edit colours and visual tokens

Change design tokens in `src/styles/tokens.ts`.

Tailwind maps these tokens through CSS variables in `tailwind.config.ts`, so section styles update consistently.

## Analytics placeholder

Plausible hook is wired in `src/app/layout.tsx` and activates only when env vars are set:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_SCRIPT` (optional, defaults to `https://plausible.io/js/script.js`)

Without those vars, a no-op analytics object is added as a placeholder.

## Early access form state

The early access form is currently frontend-only (email validation, activity chips, honeypot field, success state).

To wire to a real provider later:

1. Add an API endpoint (Next.js route handler or external service webhook).
2. Replace the submit handler in `src/components/sections/early-access-form.tsx` with a `fetch` call.
3. Map payload fields (`email`, `activities`, `location`) to your provider.
4. Keep honeypot and add server-side rate limiting/abuse checks.

Typical provider paths:

- Mailchimp audience API
- Tally/Typeform webhook endpoint
- ConvertKit form endpoint
