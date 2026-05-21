import { BRAND } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="book" aria-labelledby="book-title">
      <p className="section-label reveal">{BRAND.location}</p>
      <h2 className="final-title reveal" id="book-title">
        Ready to
        <br />
        step inside?
      </h2>
      <p className="final-location reveal">{BRAND.address}</p>
      <a href={BRAND.bookingUrl} className="cta-main reveal">
        Book Your Session{" "}
        <span className="cta-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </section>
  );
}
