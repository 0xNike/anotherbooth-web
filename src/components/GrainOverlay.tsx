/** Fixed film-grain texture over the whole viewport (~4% opacity).
 *  Purely decorative — hidden from assistive tech. */
export default function GrainOverlay() {
  return <div className="grain" aria-hidden="true" />;
}
