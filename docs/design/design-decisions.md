<!--
File: docs/design/design-decisions.md - why the design looks this way
Authors: [fill in names]
Course: PED 379
Midterm 2 Project
-->

# Design decisions

Figma file: https://www.figma.com/design/doVXWP7Fp5gYIZd0TKlfd0

- **Colors:** a light, neutral page with one blue accent keeps attention on the data. All text pairs pass 4.5:1 (see `tokens.md`). Depth uses yellow, orange and purple, which differ in lightness as well as hue.
- **Color is never the only signal:** each depth also has its own outline (solid, dashed, dotted) and a text label. Errors have a warning sign, text and a thicker border. The selected event shows the word "Selected".
- **Mobile order:** form, status, map with legend, statistics, event list. The user acts first and sees the result of the action right under the button. The long list is last so that it does not push the summary down. The code uses the same order, so keyboard focus follows the visual order.
- **Legend matches the map:** marker radius is `4 + 2 * magnitude` map units, and the legend circles scale with the map width. On a phone both are small, so the event list is the easy way to pick an event. Its controls are at least 44px tall, and the disclaimer sits at the top of every screen.
- **Typography:** Inter in two weights (400 and 600) is stored in the repository, so the page looks like the design without calling a font service. The fallback is `system-ui, sans-serif`.

## Sample data

**All data in the frames and PNG files is made up.** The event names ("Sample place A"), dates,
magnitudes, depths, distances, statistics and marker positions are not real earthquakes.
The same sample data appears in the temporary `?preview` mode of the app. The map is a
placeholder rectangle.

## Differences between the app and the frames

- Date fields use the browser date picker, so the date format and the picker icon follow the browser language.
- Drop-down arrows are drawn by the browser.
- A "Skip to search form" link appears at the top left when it gets keyboard focus.
- Map markers are drawn later by member C. Until then the map layer is empty, also in `?preview`.

## Exported frames

| State | Desktop 1440 | Mobile 390 |
|---|---|---|
| Initial form | [PNG](desktop-1-initial.png) | [PNG](mobile-1-initial.png) |
| Validation errors | [PNG](desktop-2-validation-errors.png) | [PNG](mobile-2-validation-errors.png) |
| Loading | [PNG](desktop-3-loading.png) | [PNG](mobile-3-loading.png) |
| Success | [PNG](desktop-4-success.png) | [PNG](mobile-4-success.png) |
| Empty result | [PNG](desktop-5-empty.png) | [PNG](mobile-5-empty.png) |
| Network error | [PNG](desktop-6-network-error.png) | [PNG](mobile-6-network-error.png) |
