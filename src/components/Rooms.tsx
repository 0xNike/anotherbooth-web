import RoomsSlider from "@/components/RoomsSlider";

export default function Rooms() {
  return (
    <section id="rooms" aria-labelledby="rooms-title">
      {/* Visually hidden — the slider itself is the section; this keeps the
          heading hierarchy + an accessible name. */}
      <h2 id="rooms-title" className="sr-only">
        The Rooms
      </h2>
      <RoomsSlider />
    </section>
  );
}
