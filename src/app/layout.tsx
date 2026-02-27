import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

import { cssVariables } from "@/styles/tokens";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://primewindow.app";
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleScript = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT ?? "https://plausible.io/js/script.js";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PrimeWindow",
    template: "%s | PrimeWindow",
  },
  description:
    "PrimeWindow watches conditions across your favourite spots and alerts you when a Prime Window opens.",
  applicationName: "PrimeWindow",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    title: "PrimeWindow",
    description:
      "PrimeWindow watches conditions across your favourite spots and alerts you when a Prime Window opens.",
    siteName: "PrimeWindow",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "PrimeWindow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeWindow",
    description:
      "PrimeWindow watches conditions across your favourite spots and alerts you when a Prime Window opens.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body style={cssVariables as CSSProperties}>
        <div className="noise" />
        {children}
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src={plausibleScript} />
        ) : (
          <Script id="analytics-hook" strategy="afterInteractive">
            {`window.primewindowAnalytics = window.primewindowAnalytics || { event: function () {} };`}
          </Script>
        )}
      </body>
    </html>
  );
}
