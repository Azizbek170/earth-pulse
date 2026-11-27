/*
 * File: src/components/SearchForm.jsx - earthquake search form (markup)
 * Authors: [fill in names]
 * Course: PED 379
 * Midterm 2 Project
 */

// TODO (member B): move the city list to src/lib and add lat and lon for each city.
const CITY_NAMES = [
  'Almaty',
  'Astana',
  'Shymkent',
  'Bishkek',
  'Tashkent',
  'Istanbul',
  'Tokyo',
  'Santiago',
  'San Francisco',
];

// The error text under one field. It stays in the page, even when it is empty,
// so that screen readers notice when a message appears.
function FieldError({ id, message }) {
  return (
    <p id={id} className="field__error" aria-live="polite">
      {message}
    </p>
  );
}

// Props contract: onChange and onSubmit receive the native browser event.
export default function SearchForm({ values, errors, onChange, onSubmit, disabled }) {
  return (
    <section id="search" className="search" aria-labelledby="search-title">
      <h2 id="search-title">Search earthquakes</h2>

      {/* noValidate: our own error messages replace the browser pop-ups. */}
      <form className="search__form" onSubmit={onSubmit} noValidate>
        <fieldset>
          <legend>Area</legend>

          <div className="field">
            <label htmlFor="cityName">City</label>
            <select
              id="cityName"
              name="cityName"
              value={values.cityName}
              onChange={onChange}
              required
              aria-invalid={Boolean(errors.cityName)}
              aria-describedby="cityName-error"
            >
              <option value="">Choose a city</option>
              {CITY_NAMES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <FieldError id="cityName-error" message={errors.cityName} />
          </div>

          <div className="field">
            <label htmlFor="radiusKm">Radius (km, 50–5000)</label>
            <input
              id="radiusKm"
              name="radiusKm"
              type="number"
              min="50"
              max="5000"
              value={values.radiusKm}
              onChange={onChange}
              required
              aria-invalid={Boolean(errors.radiusKm)}
              aria-describedby="radiusKm-error"
            />
            <FieldError id="radiusKm-error" message={errors.radiusKm} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Filters</legend>

          <div className="field">
            <label htmlFor="minMagnitude">Minimum magnitude (0–10)</label>
            <input
              id="minMagnitude"
              name="minMagnitude"
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={values.minMagnitude}
              onChange={onChange}
              required
              aria-invalid={Boolean(errors.minMagnitude)}
              aria-describedby="minMagnitude-error"
            />
            <FieldError id="minMagnitude-error" message={errors.minMagnitude} />
          </div>

          <div className="field">
            <label htmlFor="startDate">Start date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={values.startDate}
              onChange={onChange}
              required
              aria-invalid={Boolean(errors.startDate)}
              aria-describedby="startDate-error"
            />
            <FieldError id="startDate-error" message={errors.startDate} />
          </div>

          <div className="field">
            <label htmlFor="endDate">End date</label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={values.endDate}
              onChange={onChange}
              required
              aria-invalid={Boolean(errors.endDate)}
              aria-describedby="endDate-error"
            />
            <FieldError id="endDate-error" message={errors.endDate} />
          </div>

          <div className="field">
            <label htmlFor="limit">Maximum events</label>
            <select
              id="limit"
              name="limit"
              value={values.limit}
              onChange={onChange}
              aria-invalid={Boolean(errors.limit)}
              aria-describedby="limit-error"
            >
              <option value="100">100</option>
              <option value="250">250</option>
              <option value="500">500</option>
            </select>
            <FieldError id="limit-error" message={errors.limit} />
          </div>
        </fieldset>

        <button type="submit" className="button" disabled={disabled}>
          {disabled ? 'Searching…' : 'Search earthquakes'}
        </button>
      </form>
    </section>
  );
}
