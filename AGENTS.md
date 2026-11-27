# AGENTS.md - Earth Pulse (PED 379, Midterm 2)

Instructions for any AI assistant (Claude Code) that works in this repository.

## Project

Earth Pulse is an educational web app. The user picks a city, a radius, a minimum magnitude and a date range. The app requests earthquakes from the USGS Earthquake Catalog API and shows them on a world map (SVG markers), in a list and in simple statistics.
It is a learning tool, not an alert system. Keep this disclaimer visible in the UI.

Group: [Member A], [Member B], [Member C]. Course: PED 379, section [section].

## Stack (strict)

- React + Vite, plain JavaScript (.jsx). Runtime dependencies: react and react-dom only.
- Status: React and the Vite structure need instructor approval. Do not remove this line until the approval is in the README.
- One stylesheet: styles.css in the repository root. No Tailwind, Bootstrap, jQuery, CSS-in-JS, UI kits, map libraries or chart libraries.
- Data: USGS Earthquake Catalog API (no key). Map image: Natural Earth raster in assets/images/ (equirectangular).
- Add no dependency without asking the member first.

## Structure

- index.html
- styles.css
- src/main.jsx, src/App.jsx
- src/components/ (SearchForm, StatusView, MapView, EventList, Stats)
- src/hooks/useEarthquakes.js
- src/lib/ (validators.js, geo.js, usgs.js) - plain JS, no React inside
- assets/images/
- README.md, AGENTS.md

## Assignment rules (all are graded)

- Semantic HTML: header, nav, main, section, footer.
- Every meaningful image has a descriptive alt. Every form control has a label (htmlFor + id).
- Layout with Flexbox or Grid. At least one media query for mobile.
- No inline JavaScript event attributes in HTML. Ask the member before using any other event pattern.
- API calls: fetch(), async/await, JSON parsing, try/catch.
- Four UI states: loading, success, empty, error. Show them on screen, never with alert().
- No syntax errors and no unhandled console errors.
- No secrets or keys in the repository. Keep .gitignore.
- Every file starts with a header comment: file purpose, authors, course, "Midterm 2 Project".

## Domain rules

- USGS time is in milliseconds. Use new Date(feature.properties.time).
- Coordinates order is [longitude, latitude, depth].
- HTTP 204 has no body. Check response.status === 204 before response.json().
- fetch does not reject on HTTP errors. Check response.ok.
- limit must be 1-20000. This app allows only 100, 250 or 500.
- Cancel the previous request with AbortController (cleanup in useEffect).
- Projection: x = (lon + 180) / 360 * W, y = (90 - lat) / 180 * H.
- Distance to the city: haversine formula.

## Validation

- City: required, chosen from the list (has lat and lon).
- Radius: number, 50-5000 km.
- Minimum magnitude: number, 0-10, one decimal.
- From / To: required, From <= To, not in the future, range <= 365 days.
- Max events: 100, 250 or 500.
- Show each error next to its field. Do not send the request while the form is invalid.

## How to work

1. Use plan mode first for any task bigger than one function. Show the plan and wait.
2. Work only on the task the member gives. Keep changes small (about 100 lines or fewer per commit).
3. After each change, explain every new fragment in simple words and give 2 questions an instructor could ask about it. The member must understand the code before committing.
4. Do not generate the whole project at once. Do not rewrite files the member did not mention.
5. Commit only when the member asks. Commits use the member's own git identity. Never change git user.name or user.email, never use --author, never commit for another member, never rewrite or squash history.
6. Branch name: feature/<member>-<topic>. Commit message: imperative, 72 characters or fewer.
7. After code changes, give a short manual test checklist (including network off and an empty result).
8. At the end of each task print "AI contribution:" with 1-3 lines. The member pastes it into the pull request. These lines are the source for the AI disclosure in README.md.
