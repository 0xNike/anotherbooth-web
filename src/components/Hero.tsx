import { BRAND } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="chrome-line" />
        <div className="chrome-line" />
        <div className="chrome-line" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow" lang="ja">
          {BRAND.katakana}
        </p>
        <h1 className="hero-title">{BRAND.tagline}</h1>
        <p className="hero-sub">{BRAND.heroSub}</p>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
