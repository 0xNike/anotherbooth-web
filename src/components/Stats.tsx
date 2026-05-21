import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <div className="stats-banner">
      {STATS.map((stat) => (
        <div className="stat reveal" key={stat.label}>
          <div className="stat-num">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
