import { BRAND, LOGO, NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  return (
    <nav aria-label="Primary">
      <a className="logo" href="#main" aria-label={`${BRAND.name} — home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO.wordmark}
          alt={`${BRAND.name} — ${BRAND.katakana}`}
          width={743}
          height={101}
        />
      </a>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a className="book-btn" href={BRAND.bookingUrl}>
        <span>Book Now</span>
      </a>
    </nav>
  );
}
