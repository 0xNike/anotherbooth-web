import { BRAND } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="visit" aria-labelledby="visit-title">
      <p className="section-label reveal">{BRAND.location}</p>
      <h2 className="final-title reveal" id="visit-title">
        Ready to
        <br />
        step inside?
      </h2>
      <p className="final-location reveal">
        {BRAND.address} · Walk in any time
      </p>
      <a
        href={BRAND.instagramUrl}
        className="cta-main reveal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow us on Instagram{" "}
        <span className="cta-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </section>
  );
}
