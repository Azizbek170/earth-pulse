<!--
File: docs/verification-A.md - checks of member A's work (design, markup, CSS, accessibility)
Authors: [fill in names]
Course: PED 379
Midterm 2 Project
-->

# Verification, role A

Checks run by Claude Code on 2026-11-27. The member should repeat the manual items.

**Environment:** Linux, Node.js 22.22.2, Google Chrome 157 (Flatpak) in headless mode, driven over
the DevTools protocol with `puppeteer-core`, Lighthouse 13.6.0. The check tools were temporary and
were kept outside the project; `package.json` did not get new dependencies.

**Scope:** the app with the stub hook. Success, loading, empty, error and validation states were
opened with the temporary `?preview` mode, which uses made-up data. No request to USGS was made.

## Stage 4: layout and CSS

"Hard" checks had to pass before the merge.

| # | Check | Result | How verified |
|---|---|---|---|
| 1 (hard) | `npm run build` passes; `npm run preview` answers 200 | passed | Ran the build; `curl` on `/` and `/?preview` returned 200. |
| 2 | Screens match the design at 360, 768 and 1440 px | passed, with the differences listed below | Full-page screenshots of `/?preview` states, compared by eye with the Figma frames and `docs/design` PNGs (also at 390 and 769 px). One round of fixes: the form column now shrinks between 769 and 1000 px. CSS variables compared by script with the Figma variables: 36 of 36 match. |
| 3 (hard) | Console has no errors or warnings on load and in every state | passed | 7 pages (no preview, success, idle, loading, empty, error, invalid) at 8 widths, plus keyboard and click tests. Dev server: only Vite debug messages and the React DevTools info message. Production preview: no messages. No failed requests. |
| 4 (hard for Accessibility) | Lighthouse Accessibility and Best Practices at least 90, mobile and desktop | passed | Production preview, 6 URLs x 2 profiles = 12 runs. Every run: Accessibility 100, Best Practices 100. |
| 5a (hard) | Every form field has a label with matching `htmlFor` and `id` | passed | Source script and DOM query: 6 controls, 6 labels, each `aria-describedby` points to an element. |
| 5b (hard) | Every `img` has `alt` | passed | Source script and DOM query. The app has no `img` element yet (the map image is added by member C). |
| 5c (hard) | No inline event attributes in HTML | passed | Source script on `index.html` and `dist/index.html`; DOM query found no `on...` attributes. React `onChange`, `onSubmit` and `onClick` are JSX props, not HTML attributes. |
| 5d (hard) | `styles.css` has a media query and holds all styles | passed | Source script: no other style files, no `style` attributes, no `<style>` elements. |
| 5e (hard) | Every source file has a header comment | passed | Source script, 17 files. Not checked: JSON files and fonts or images (no comments possible), the third-party font license, and `AGENTS.md` (instruction file, left unchanged). |
| 5f (hard) | No secrets in the repository | passed | Searched `api_key`, `secret`, `token`, `password`. All hits are the words "secrets" (rule comments) and "design tokens". No key patterns found. |
| 5g (hard) | `.gitignore` works | passed | `git check-ignore` matches `node_modules`, `dist`, `.env`; none is tracked. |
| 6 | Token contrast | passed | Script on the Figma variable values: 15 text pairs are at least 4.5:1 (lowest 5.72). 8 non-text pairs are at least 3:1 (lowest 3.99). Some non-text pairs are below 4.5:1; WCAG asks 3:1 for them. |
| 7 (hard) | No horizontal scroll at 360 px | passed | Phone emulation: `scrollWidth` 360 = `clientWidth` 360 in all 7 states. Also equal at 320, 390, 768, 769, 1000, 1440 and 1920 px. |
| 8 | Keyboard order and visible focus | passed | Pressed Tab through the page at 1440 and 360 px: navigation links, six fields, button, then each event and its link. Each stop has a 3px accent outline and is scrolled into view. Date fields have 4 stops each (month, day, year, calendar button). Enter and Space select an event. |
| 9 | Commits use the member's name and email | passed, see note | `git log` shows `Azizbek170 <azizbrat77@gmail.com>` as author and committer. Note: commits made by Claude Code carry a `Co-Authored-By: Claude` line, so GitHub shows Claude as a co-author. |
| - | Legend circles equal the map markers | passed | Added test circles to the SVG layer: the difference is under 0.1px at every width. |
| - | Reduced motion | passed | With `prefers-reduced-motion: reduce` the spinner and the map label have no animation. |

## Differences from the design

- The map layer is empty, also in `?preview`: member C draws the markers.
- Date fields and drop-down arrows are drawn by the browser.
- The preview success message ends with "(sample data)".
- All preview events have the time 14:05.

## Could not verify

| Check | Why | To do by hand |
|---|---|---|
| Screen reader (NVDA, VoiceOver, Orca) | No screen reader run here | Submit a search and listen for the status and error messages. |
| Real phone and touch | Only Chrome emulation | Open the app on a phone. |
| Firefox and Safari | Only Chrome was tested | Check the legend circle sizes and date fields. |
| Real data, live loading, network off | Needs the hooks of members B and C | Repeat the checks after their work is merged. |
| Focus on map markers | There are no markers yet | Tab to a marker after member C adds them. |
