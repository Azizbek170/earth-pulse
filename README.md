<!--
File: README.md - project overview and setup instructions
Authors: [fill in names]
Course: PED 379
Midterm 2 Project
-->

# Earth Pulse

## Concept

Earth Pulse is an educational web app. The user picks a city, a radius, a
minimum magnitude and a date range. The app shows the matching earthquakes on a
world map, in a list and in simple statistics.

**Educational tool, not an alert system.**

## Setup

You need Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

> **Approval status:** the use of React and the Vite project structure is
> **pending instructor approval**.

## API

Data comes from the
[USGS Earthquake Catalog API](https://earthquake.usgs.gov/fdsnws/event/1/).
It does not need an API key.

## Features

Planned for this project:

- Search by city, radius, minimum magnitude and date range
- World map with markers (size shows magnitude, color shows depth)
- List of earthquakes
- Simple statistics: count, strongest, closest, average depth
- Loading, success, empty and error states
- Responsive layout for desktop and mobile

## Group members and roles

TODO: add member names and roles.

## AI disclosure

TODO: describe how AI tools were used.

## Design link

[Earth Pulse in Figma](https://www.figma.com/design/doVXWP7Fp5gYIZd0TKlfd0)

Design notes: [tokens](docs/design/tokens.md),
[decisions and exported frames](docs/design/design-decisions.md).
