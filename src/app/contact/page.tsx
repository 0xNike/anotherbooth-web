import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Another Booth | アナザーブース",
  description:
    "Find Another Booth on Level 5 of Orchard Plaza, #05-50, 150 Orchard Road, Singapore. Open 10AM–3AM daily — walk in any time.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main" className="page">
      <Nav />

      <section className="section">
        <div className="page-body">
          <p className="section-label reveal">Contact</p>
          <h1 className="section-title reveal">Come find us.</h1>

          <p className="lede reveal">
            No booking, no front desk. Just turn up — we&rsquo;re open late.
          </p>

          <dl className="contact-list">
            <div className="contact-row reveal">
              <dt>Where</dt>
              <dd>
                Orchard Plaza, Level 5
                <br />
                #05-50, 150 Orchard Road, Singapore
              </dd>
            </div>
            <div className="contact-row reveal">
              <dt>Hours</dt>
              <dd>10AM&ndash;3AM, daily &middot; Walk in any time</dd>
            </div>
            <div className="contact-row reveal">
              <dt>Say hi</dt>
              <dd>Questions? DM us on Instagram.</dd>
            </div>
          </dl>

          <div className="contact-actions reveal">
            <a
              className="cta-main"
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions{" "}
              <span className="cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="cta-main"
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Instagram{" "}
              <span className="cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
