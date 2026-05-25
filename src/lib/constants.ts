/**
 * Another Booth — content & design constants.
 * Source of truth: CLAUDE.md. Edit copy here, not inside components.
 */

export const BRAND = {
  name: "Another Booth",
  katakana: "アナザーブース",
  location: "Orchard Plaza · Level 5 · #05-50",
  address: "150 Orchard Road, Singapore",
  hours: "10AM–3AM daily",
  capacity: "2–4 guests per session",
  tagline: "Singapore's first walk-through photobooth.",
  heroSub: "Four themed rooms, one continuous take — walk out with the strip.",
  // No online booking — the venue is walk-in. Instagram is the only CTA.
  instagramUrl: "#", // TODO: real Instagram profile URL (TBD)
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Orchard+Plaza+150+Orchard+Road+Singapore",
} as const;

/** Site-level metadata. `url` is the canonical origin — TODO: confirm the
 *  production domain before launch (CLAUDE.md: canonical URL is TBD). */
export const SITE = {
  url: "https://anotherbooth.sg",
  title:
    "Another Booth — アナザーブース | Singapore's First Walk-Through Photobooth",
  description:
    "Singapore's first walk-through photobooth — four themed rooms, one continuous take. Walk out with the strip, on Level 5 of Orchard Plaza. Walk in any time.",
} as const;

/** Design palette. Authoritative copy lives in `globals.css` `@theme`;
 *  this mirror is for any JS that needs the raw hex (e.g. OG image, schema). */
export const COLORS = {
  chrome1: "#e8e8e8",
  chrome2: "#b0b0b0",
  chrome3: "#808080",
  chrome4: "#4a4a4a",
  black: "#0a0a0a",
  deepBlack: "#050505",
  white: "#f0f0f0",
} as const;

/** Brand accent palette, lifted from the official logo (the rainbow "booth").
 *  Blue is the primary interactive accent; the rest cycle across enumerated
 *  elements (rooms, steps). Yellow is reserved for the logo + CTA gradient
 *  (it reads harsh as body/UI text on the dark ground). */
export const PALETTE = {
  red: "#EE5C4D",
  orange: "#EA881E",
  yellow: "#FFC60B",
  green: "#6CC17D",
  blue: "#00A6E4",
} as const;

/** Logo assets (cropped, white-on-transparent — for the dark site). The
 *  source 1080² files live in /public/images; these are tight crops. */
export const LOGO = {
  wordmark: "/logo-wordmark-white.svg", // single line — nav
  lockup: "/logo-lockup-white.svg", // wordmark + katakana — hero
} as const;

export type Room = {
  number: string;
  name: string;
  kanji: string;
  description: string;
};

export const ROOMS: Room[] = [
  {
    number: "Room 01",
    name: "Sakura Room",
    kanji: "桜花",
    description:
      "A wall of cherry blossom in permanent bloom. Soft pink light, petals overhead — Tokyo in spring, any night of the year.",
  },
  {
    number: "Room 02",
    name: "Convenience Store",
    kanji: "コンビニ",
    description:
      "The 2AM konbini run. Cold fluorescent light, shelves of snacks and drinks, the hum of the chiller — mundane, and somehow iconic.",
  },
  {
    number: "Room 03",
    name: "Batting Cage",
    kanji: "野球",
    description:
      "Chain-link fence. Fake grass. Jerseys and bats. Paparazzi flash. Editorial energy.",
  },
  {
    number: "Room 04",
    name: "Izakaya",
    kanji: "居酒屋",
    description:
      "Warm amber glow. Wooden table. Fake noodles and bottles. Late-night Tokyo energy.",
  },
];

export type Step = {
  number: string;
  title: string;
  text: string;
};

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Arrive",
    text: "No booking needed. Walk in at Orchard Plaza, Level 5. Drop your bags in the vanity room.",
  },
  {
    number: "02",
    title: "Shoot",
    text: "Move through four themed rooms. Tap, pose, flash. Every room hits different.",
  },
  {
    number: "03",
    title: "Select",
    text: "Browse your shots in the foyer. Pick your favourites for the strip.",
  },
  {
    number: "04",
    title: "Print",
    text: "Walk out with physical photo strips. The kind you actually keep.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "4", label: "Themed Rooms" },
  { value: "2–4", label: "Guests per Session" },
  { value: "10am", label: "to 3am Daily" },
];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" }, // flow section on home
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: BRAND.instagramUrl }, // shares the CTA URL
  { label: "TikTok", href: "#" }, // TODO: real profile URL
  { label: "X", href: "#" }, // TODO: real profile URL
] as const;
