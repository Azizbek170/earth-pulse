/*
 * File: src/components/EventList.jsx - list of earthquakes
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

// TODO (member C): may move this to src/lib/geo.js and reuse it for the markers.
function getDepthBand(depthKm) {
  if (depthKm < 70) return { name: 'Shallow', className: 'depth-shallow' };
  if (depthKm < 300) return { name: 'Medium', className: 'depth-medium' };
  return { name: 'Deep', className: 'depth-deep' };
}

// USGS can send an event without a magnitude.
function formatMagnitude(magnitude) {
  return Number.isFinite(magnitude) ? magnitude.toFixed(1) : '?';
}

function EventItem({ event, selected, onSelect }) {
  const depth = getDepthBand(event.depthKm);
  const title = `M ${formatMagnitude(event.magnitude)} · ${event.place}`;

  return (
    <li className={selected ? 'event event--selected' : 'event'}>
      <svg className="depth-mark" viewBox="0 0 24 24" aria-hidden="true">
        <circle className={depth.className} cx="12" cy="12" r="10" />
      </svg>

      <div className="event__body">
        <button
          type="button"
          className="event__select"
          aria-pressed={selected}
          onClick={() => onSelect(event.id)}
        >
          {/* Screen readers already say "pressed", so this text is only visual. */}
          {selected && (
            <span className="event__selected" aria-hidden="true">
              ✓ Selected
            </span>
          )}
          <span className="event__title">{title}</span>
          <span className="event__meta">
            {dateFormat.format(new Date(event.time))} · Depth {Math.round(event.depthKm)} km (
            {depth.name}) · {Math.round(event.distanceKm)} km from the city
          </span>
        </button>

        <a className="event__link" href={event.url} target="_blank" rel="noreferrer">
          USGS details <span aria-hidden="true">↗</span>
          <span className="visually-hidden"> for {title} (opens in a new tab)</span>
        </a>
      </div>
    </li>
  );
}

// Props contract. onSelect receives the id of the chosen event.
export default function EventList({ events, selectedId, onSelect }) {
  return (
    <section id="events" aria-labelledby="events-title">
      <h2 id="events-title">Events</h2>

      {events.length === 0 ? (
        <p className="placeholder">No events to show.</p>
      ) : (
        <ul className="event-list">
          {events.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              selected={event.id === selectedId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
