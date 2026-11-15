import snapshot from "@/content/activity.json";
export function Activity() {
  const days = snapshot.days as {
    date: string;
    count: number;
    level: number;
  }[];
  if (!days.length)
    return (
      <div className="activity-content">
        <p>
          Contribution data is unavailable.{" "}
          <a className="inline-link" href="https://github.com/Amitdwivedi22">
            View on GitHub →
          </a>
        </p>
      </div>
    );
  const padding = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const cells = [...Array.from({ length: padding }, () => null), ...days];
  const weeks = Array.from({ length: Math.ceil(cells.length / 7) }, (_, i) =>
    cells.slice(i * 7, (i + 1) * 7),
  );
  let month = "";
  const labels = weeks.map((week) => {
    const first = week.find((day) => day !== null);
    const key = first?.date.slice(0, 7) ?? "";
    const label =
      first && key !== month
        ? new Date(first.date + "T00:00:00Z").toLocaleString("en-US", {
            month: "short",
            timeZone: "UTC",
          })
        : "";
    month = key;
    return label;
  });
  return (
    <div className="activity-content">
      <div
        className="activity-scroll"
        tabIndex={0}
        role="region"
        aria-label="GitHub contribution calendar; scroll horizontally for all dates"
      >
        <div className="activity-months" aria-hidden="true">
          {labels.map((label, i) => (
            <span key={i}>{label}</span>
          ))}
        </div>
        <div
          className="activity-grid"
          role="img"
          aria-label={`${snapshot.total} GitHub contributions from ${days[0].date} to ${days.at(-1)?.date}. Snapshot retrieved ${snapshot.retrievedAt.slice(0, 10)}.`}
        >
          {weeks.map((week, i) => (
            <div className="activity-week" key={i}>
              {week.map((day, j) => (
                <span
                  className="activity-cell"
                  key={j}
                  title={
                    day
                      ? `${day.count} contributions on ${day.date}`
                      : undefined
                  }
                  style={{
                    background: day
                      ? `var(--heat-${day.level})`
                      : "transparent",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="activity-caption">
        <span>
          <strong>{snapshot.total.toLocaleString("en-US")}</strong>{" "}
          contributions in this snapshot
        </span>
        <span className="activity-legend" aria-hidden="true">
          Less{" "}
          {[0, 1, 2, 3, 4].map((level) => (
            <span
              className="activity-cell"
              key={level}
              style={{ background: `var(--heat-${level})` }}
            />
          ))}{" "}
          More
        </span>
      </div>
      <p className="snapshot-date">
        Snapshot {snapshot.retrievedAt.slice(0, 10)} ·{" "}
        <a href="https://github.com/Amitdwivedi22">View GitHub activity ↗</a>
      </p>
    </div>
  );
}
