/*
 * File: src/components/Stats.jsx - simple statistics about the results
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */

// Props contract: stats is { count, strongest, closest, avgDepthKm } or null.
// strongest and closest are Event objects.
export default function Stats({ stats }) {
  const hasResults = Boolean(stats && stats.count > 0);

  const tiles = hasResults
    ? [
        { label: 'Events', value: stats.count },
        {
          label: 'Strongest',
          value: Number.isFinite(stats.strongest.magnitude)
            ? `M ${stats.strongest.magnitude.toFixed(1)}`
            : 'M ?',
        },
        { label: 'Closest', value: `${Math.round(stats.closest.distanceKm)} km` },
        { label: 'Average depth', value: `${Math.round(stats.avgDepthKm)} km` },
      ]
    : [];

  return (
    <section id="stats" aria-labelledby="stats-title">
      <h2 id="stats-title">Statistics</h2>

      {hasResults ? (
        <dl className="stats">
          {tiles.map((tile) => (
            <div key={tile.label} className="stats__tile">
              <dt>{tile.label}</dt>
              <dd>{tile.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="placeholder">Statistics appear after a search finds earthquakes.</p>
      )}
    </section>
  );
}
