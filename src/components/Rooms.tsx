import { ROOMS } from "@/lib/constants";

export default function Rooms() {
  return (
    <section className="section" id="rooms" aria-labelledby="rooms-title">
      <div className="reveal">
        <p className="section-label">01 — The Rooms</p>
        <h2 className="section-title" id="rooms-title">
          Four rooms.
          <br />
          One story.
        </h2>
      </div>

      <div className="rooms-grid">
        {ROOMS.map((room) => (
          <article className="room-card reveal" key={room.number} tabIndex={0}>
            <div className="room-card-bg" aria-hidden="true" />
            <span className="room-jp" aria-hidden="true" lang="ja">
              {room.kanji}
            </span>
            <div className="room-card-content">
              <p className="room-number">{room.number}</p>
              <h3 className="room-name">{room.name}</h3>
              <p className="room-desc">{room.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
