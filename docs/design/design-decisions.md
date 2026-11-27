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
- **Mobile order:** form, status, map with legend, statistics, event list. The user acts first and sees the result of the action right under the button. The long list is last so that it does not push the summary down.
- **Desktop layout:** the form stays in a 360px left column and the results fill the rest. The code must keep the same order (statistics before the event list), so that keyboard focus follows the visual order.
- **Touch and safety:** mobile controls, links and buttons are at least 44px tall. Small map markers are not the only way to pick an event, because the list offers the same choice. The disclaimer sits at the top of every screen.

## Exported frames

| State | Desktop 1440 | Mobile 390 |
|---|---|---|
| Initial form | [PNG](desktop-1-initial.png) | [PNG](mobile-1-initial.png) |
| Validation errors | [PNG](desktop-2-validation-errors.png) | [PNG](mobile-2-validation-errors.png) |
| Loading | [PNG](desktop-3-loading.png) | [PNG](mobile-3-loading.png) |
| Success | [PNG](desktop-4-success.png) | [PNG](mobile-4-success.png) |
| Empty result | [PNG](desktop-5-empty.png) | [PNG](mobile-5-empty.png) |
| Network error | [PNG](desktop-6-network-error.png) | [PNG](mobile-6-network-error.png) |

Event names, dates and values in the frames are made-up sample data, not real earthquakes.
