/*
 * File: src/components/MapView.jsx - world map with a marker layer and a legend
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */

// Magnitudes shown in the size legend. Their CSS sizes follow the map width.
const LEGEND_SIZES = [2, 4, 6];

// Depth classes are defined in styles.css.
const LEGEND_DEPTHS = [
  { className: 'depth-shallow', label: 'Shallow, under 70 km (solid)' },
  { className: 'depth-medium', label: 'Medium, 70 to under 300 km (dashed)' },
  { className: 'depth-deep', label: 'Deep, 300 km or more (dotted)' },
];

// Props contract. Member C uses events, selectedId and onSelect for the markers.
export default function MapView({ events, selectedId, onSelect }) {
  return (
    <section id="map" aria-labelledby="map-title">
      <h2 id="map-title">Map</h2>

      <div className="map">
        <div className="map-frame" role="group" aria-label="World map of earthquakes">
          {/* TODO (member C): replace this text with the Natural Earth image
              (class "map-image", with a descriptive alt). */}
          <p className="map-placeholder">Map image placeholder</p>

          {/* TODO (member C): draw the markers here. Units: 1000 x 500.
              Radius: 4 + 2 * Math.max(0, magnitude). Call onSelect(event.id). */}
          <svg className="map-layer" viewBox="0 0 1000 500" />
        </div>

        <div className="legend">
          <h3>Size = magnitude</h3>
          <ul className="legend__list legend__list--sizes">
            {LEGEND_SIZES.map((magnitude) => (
              <li key={magnitude}>
                <span
                  className={`legend__circle legend__circle--m${magnitude}`}
                  aria-hidden="true"
                />
                M {magnitude}
              </li>
            ))}
          </ul>

          <h3>Color and outline = depth</h3>
          <ul className="legend__list">
            {LEGEND_DEPTHS.map((depth) => (
              <li key={depth.className}>
                <svg className="depth-mark" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className={depth.className} cx="12" cy="12" r="10" />
                </svg>
                {depth.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
