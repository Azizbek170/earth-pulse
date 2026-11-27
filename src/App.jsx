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

export default function App() {
  const { status, events, stats, message } = useEarthquakes();

  // Temporary form state. Member B replaces it with the real form logic.
  const [values, setValues] = useState(INITIAL_VALUES);
  const errors = {};

  const [selectedId, setSelectedId] = useState(null);

  // Contract: SearchForm passes the native browser event to both handlers.
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO (member B): validate the values, then call search(params).
  }

  return (
    <>
      <header>
        <h1>Earth Pulse</h1>
      </header>

      <main>
        <SearchForm
          values={values}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          disabled={status === 'loading'}
        />
        <StatusView status={status} message={message} count={events.length} />
        <MapView events={events} selectedId={selectedId} onSelect={setSelectedId} />
        <EventList events={events} selectedId={selectedId} onSelect={setSelectedId} />
        <Stats stats={stats} />
      </main>

      <footer>
        <p>Educational tool, not an alert system.</p>
      </footer>
    </>
  );
}
