/*
 * File: src/components/StatusView.jsx - message about the current request state
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */

// Text used when the hook does not send its own message.
const DEFAULT_MESSAGES = {
  idle: 'Choose a city, then press Search earthquakes.',
  loading: 'Loading earthquakes from USGS…',
  empty: 'No earthquakes found. Try a larger radius, a lower magnitude or a longer date range.',
  error: 'Error: Could not reach USGS. Check your connection, then search again.',
};

// A different symbol for each state, so color is not the only signal.
const ICONS = { idle: 'i', success: '✓', empty: '0', error: '!' };

// Props contract: status is idle | loading | success | empty | error.
export default function StatusView({ status, message, count }) {
  const successText = `Found ${count} ${count === 1 ? 'earthquake' : 'earthquakes'}.`;
  const text = message || (status === 'success' ? successText : DEFAULT_MESSAGES[status]);

  const box = (
    <div className={`status status--${status}`}>
      {status === 'loading' ? (
        <span className="status__spinner" aria-hidden="true" />
      ) : (
        <span className="status__icon" aria-hidden="true">
          {ICONS[status]}
        </span>
      )}
      <p>{text}</p>
    </div>
  );

  // Both live regions always exist. Only their content changes,
  // which screen readers announce more reliably.
  return (
    <section aria-label="Search status">
      <div role="status">{status !== 'error' && box}</div>
      <div role="alert">{status === 'error' && box}</div>
    </section>
  );
}
