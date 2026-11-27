/*
 * File: src/App.jsx - page layout that connects the components
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */
import { useState } from 'react';
import EventList from './components/EventList.jsx';
import MapView from './components/MapView.jsx';
import SearchForm from './components/SearchForm.jsx';
import Stats from './components/Stats.jsx';
import StatusView from './components/StatusView.jsx';
import useEarthquakes from './hooks/useEarthquakes.js';

// All form values are strings because the inputs are controlled.
const INITIAL_VALUES = {
  cityName: '',
  radiusKm: '500',
  minMagnitude: '2.5',
  startDate: '',
  endDate: '',
  limit: '100',
};

// TODO: remove the preview code (from here to getPreview) after members B and C finish.
// Open /?preview, or /?preview=idle|loading|empty|error|invalid, to see made-up data.
function sampleEvent(letter, magnitude, depthKm, distanceKm, day) {
  return {
    id: `sample-${letter}`,
    magnitude,
    place: `Sample place ${letter}`,
    time: new Date(2026, 10, day, 14, 5).getTime(),
    depthKm,
    lat: 43.2,
    lon: 76.9,
    url: 'https://earthquake.usgs.gov/',
    distanceKm,
  };
}

const SAMPLE_EVENTS = [
  sampleEvent('A', 5.4, 12, 61, 24),
  sampleEvent('B', 4.6, 95, 410, 21),
  sampleEvent('C', 4.1, 18, 230, 17),
  sampleEvent('D', 3.3, 8, 74, 9),
  sampleEvent('E', 4.8, 357, 620, 2),
];

const SAMPLE_VALUES = {
  ...INITIAL_VALUES,
  cityName: 'Almaty',
  radiusKm: '1000',
  startDate: '2026-10-28',
  endDate: '2026-11-27',
};

const SAMPLE_ERRORS = {
  cityName: 'Choose a city from the list.',
  radiusKm: 'Enter a radius from 50 to 5000 km.',
  minMagnitude: 'Enter a magnitude from 0 to 10.',
  startDate: 'Choose a start date.',
  endDate: 'End date cannot be in the future.',
};

function getPreview(name) {
  const base = { status: 'idle', events: [], stats: null, message: '', values: SAMPLE_VALUES, errors: {} };

  if (name === 'idle') return { ...base, values: INITIAL_VALUES };
  if (name === 'invalid') {
    const values = { ...INITIAL_VALUES, radiusKm: '20', minMagnitude: '12', endDate: '2027-01-15' };
    return { ...base, values, errors: SAMPLE_ERRORS };
  }
  if (name === 'loading' || name === 'empty' || name === 'error') return { ...base, status: name };

  return {
    ...base,
    status: 'success',
    events: SAMPLE_EVENTS,
    stats: { count: 5, strongest: SAMPLE_EVENTS[0], closest: SAMPLE_EVENTS[0], avgDepthKm: 98 },
    message: 'Found 5 earthquakes near Almaty (sample data).',
  };
}

export default function App() {
  const search = useEarthquakes();

  // TODO: remove preview. It is null when the URL has no ?preview.
  const previewName = new URLSearchParams(window.location.search).get('preview');
  const preview = previewName === null ? null : getPreview(previewName);
  const { status, events, stats, message } = preview ?? search;

  // Temporary form state. Member B replaces it with the real form logic.
  const [values, setValues] = useState(preview?.values ?? INITIAL_VALUES);
  const errors = preview?.errors ?? {};

  const [selectedId, setSelectedId] = useState(preview?.events[0]?.id ?? null);

  // Contract: SearchForm passes the native browser event to both handlers.
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO (member B): validate the values, then call search.search(params).
  }

  return (
    <>
      <a className="skip-link" href="#search">
        Skip to search form
      </a>

      <header className="site-header">
        <div className="site-header__top">
          <div>
            <h1>Earth Pulse</h1>
            <p className="tagline">Explore recent earthquakes near a city</p>
          </div>
          <nav aria-label="Page sections">
            <ul>
              <li>
                <a href="#search">Search</a>
              </li>
              <li>
                <a href="#map">Map</a>
              </li>
              <li>
                <a href="#stats">Statistics</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="disclaimer">
          <span aria-hidden="true">⚠ </span>
          Educational tool, not an alert system.
        </p>
      </header>

      <main>
        <SearchForm
          values={values}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          disabled={status === 'loading'}
        />
        {/* The order here is also the visual order and the Tab order. */}
        <div className="results">
          <StatusView status={status} message={message} count={events.length} />
          <MapView events={events} selectedId={selectedId} onSelect={setSelectedId} />
          <Stats stats={stats} />
          <EventList events={events} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </main>

      <footer className="site-footer">
        <p>Data: USGS Earthquake Catalog API. Map: Natural Earth. PED 379, Midterm 2 Project.</p>
      </footer>
    </>
  );
}
