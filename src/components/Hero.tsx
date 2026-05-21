import { BRAND, LOGO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="chrome-line" />
        <div className="chrome-line" />
        <div className="chrome-line" />
      </div>

      <div className="hero-content">
        <p className="hero-tag">{BRAND.tagline}</p>
        <h1 className="hero-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO.lockup}
            alt={`${BRAND.name} — ${BRAND.katakana}`}
            width={743}
            height={245}
            // Hero mark is the LCP element — load it eagerly, no lazy defer.
            fetchPriority="high"
          />
        </h1>
        <div className="hero-cta">
          <a href={BRAND.bookingUrl} className="cta-main">
            Enter the Experience{" "}
            <span className="cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
