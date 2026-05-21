import type { Metadata } from "next";
import { Outfit, Space_Mono, Noto_Sans_JP } from "next/font/google";
import "@/styles/globals.css";
import { BRAND, SITE } from "@/lib/constants";

/* Brand typefaces, self-hosted at build time by next/font (no external
   request, no layout shift). Each exposes a CSS variable consumed by the
   @theme font tokens in globals.css. */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

// Japanese glyphs ship as many unicode-range chunks; preloading them all
// would bloat the critical path, so load on demand (preload: false).
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: SITE.url,
    siteName: BRAND.name,
    title: SITE.title,
    description: SITE.description,
    // og-image is generated at build by src/app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

/** Schema.org LocalBusiness for the Orchard Plaza venue. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND.name,
  alternateName: BRAND.katakana,
  description: SITE.description,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "150 Orchard Road, #05-50 Orchard Plaza",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "03:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceMono.variable} ${notoSansJP.variable}`}
    >
      <head>
        {/* No-JS fallback: reveals start hidden for the scroll animation, so
            surface them when scripts are unavailable. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1;transform:none;}",
            }}
          />
        </noscript>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
