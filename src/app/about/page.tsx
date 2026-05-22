import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "About — Another Booth | アナザーブース",
  description:
    "Another Booth is a multi-room immersive photobooth on Level 5 of Orchard Plaza, Singapore. Four themed rooms, one continuous take. Walk in any time.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="page">
      {/* Sub-pages have no hero, so the menu band sits at the top. */}
      <Nav />

      <section className="section">
        <div className="page-body">
          <p className="section-label reveal">About</p>
          <h1 className="section-title reveal">
            Four rooms.
            <br />
            One continuous take.
          </h1>

          <p className="lede reveal">
            Another Booth is a multi-room photobooth on the fifth floor of
            Orchard Plaza — not a single machine in a corner, but a sequence of
            four built sets you move through, two to four of you at a time.
          </p>

          <div className="prose">
            <p className="reveal">
              Each room is its own world: newspaper-plastered walls with markers
              in your hand; the cold glow from inside a fridge; the chain-link
              and fake turf of a batting cage; the warm amber hush of an izakaya
              past midnight.
            </p>
            <p className="reveal">
              You tap, you pose, the flash goes off. At the end you choose your
              frames in the foyer and walk out with physical strips — the kind
              you actually keep.
            </p>
            <p className="reveal">
              No booking, no host, no script. Open 10AM to 3AM, every day. Just
              turn up.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
