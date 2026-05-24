import { ROOMS } from "@/lib/constants";

export default function Rooms() {
  return (
    <section id="rooms" aria-labelledby="rooms-title">
      <div className="section reveal">
        <p className="section-label">01 — The Rooms</p>
        <h2 className="section-title" id="rooms-title">
          Four rooms.
          <br />
          One story.
        </h2>
      </div>

      {/* Each room is its own full-viewport panel, stacked vertically. */}
      <div className="room-panels">
        {ROOMS.map((room) => (
          <article className="room-panel" key={room.number}>
            <div className="room-panel-bg" aria-hidden="true" />
            <span className="room-jp" aria-hidden="true" lang="ja">
              {room.kanji}
            </span>
            <div className="room-panel-content reveal">
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
