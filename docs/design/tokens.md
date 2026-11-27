<!--
File: docs/design/tokens.md - design tokens (Figma variables and CSS names)
Authors: [fill in names]
Course: PED 379
Midterm 2 Project
-->

# Design tokens

Generated from the variables of the Figma file "Earth Pulse". CSS names are the web code syntax of each variable.
The same names are defined in `styles.css`.

## Colors

| CSS variable | Value | Use |
|---|---|---|
| `--color-background` | `#F4F6F8` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, header, footer, form controls |
| `--color-text` | `#17212B` | Main text and marker outlines |
| `--color-text-muted` | `#4A5866` | Secondary text, disabled button |
| `--color-accent` | `#0B5CAD` | Button, links, focus and selected state |
| `--color-on-accent` | `#FFFFFF` | Text on accent or disabled button |
| `--color-error` | `#B3261E` | Error text and error borders |
| `--color-error-surface` | `#FDECEA` | Error status background |
| `--color-notice-surface` | `#FFF4D6` | Disclaimer banner |
| `--color-border` | `#6B7785` | Borders of controls and cards |
| `--color-map` | `#DCE6EE` | Map placeholder |
| `--color-depth-shallow` | `#F6C445` | Depth under 70 km, solid outline |
| `--color-depth-medium` | `#E8743B` | Depth 70 to under 300 km, dashed outline |
| `--color-depth-deep` | `#8E6CC9` | Depth 300 km or more, dotted outline |

## Typography

Font: **Inter**, weights 400 and 600, loaded from `assets/fonts` (SIL Open Font License).
CSS stack: `Inter, system-ui, sans-serif`.

| CSS variable | Value in Figma |
|---|---|
| `--font-family` | Inter |
| `--font-size-sm` | 14px |
| `--line-height-sm` | 20px |
| `--font-size-md` | 16px |
| `--line-height-md` | 24px |
| `--font-size-lg` | 20px |
| `--line-height-lg` | 28px |
| `--font-size-xl` | 28px |
| `--line-height-xl` | 36px |

In CSS the sizes are written in `rem` (16px = 1rem), so they follow the browser font setting.

| Text style | Weight | Size / line height |
|---|---|---|
| Heading/XL | 600 | 28 / 36 |
| Heading/L | 600 | 20 / 28 |
| Body/Regular | 400 | 16 / 24 |
| Body/Strong | 600 | 16 / 24 |
| Small/Regular | 400 | 14 / 20 |
| Small/Strong | 600 | 14 / 20 |

## Spacing and size

| CSS variable | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--size-touch` | 44px |

## Radius

| CSS variable | Value |
|---|---|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |

## Marker and legend size

The map is drawn in SVG units (`viewBox="0 0 1000 500"`). A marker has the radius
`r = 4 + 2 * Math.max(0, magnitude)`. So its size on screen is `diameter x map width / 1000`,
and the legend circles use the same rule. Magnitude is already a logarithmic scale,
so a linear radius is enough. In CSS the variable holds the diameter in map units and the
legend circle is `diameter x 0.1cqw` wide (plus the 2px outline).

| CSS variable | CSS value (map units) | Figma desktop, map 992px | Figma mobile, map 358px |
|---|---|---|---|
| `--marker-m2` | 16 | 15.87px | 5.73px |
| `--marker-m4` | 24 | 23.81px | 8.59px |
| `--marker-m6` | 32 | 31.74px | 11.46px |

## Contrast check (WCAG 2.1 formula)

Text needs 4.5:1. Borders, outlines and other non-text parts need 3:1.

| Foreground | Background | Ratio | Minimum |
|---|---|---|---|
| text | background | 15.04:1 | 4.5:1 (text) |
| text | surface | 16.29:1 | 4.5:1 (text) |
| text | notice-surface | 14.87:1 | 4.5:1 (text) |
| text | error-surface | 14.25:1 | 4.5:1 (text) |
| text | map | 12.88:1 | 4.5:1 (text) |
| text-muted | background | 6.73:1 | 4.5:1 (text) |
| text-muted | surface | 7.29:1 | 4.5:1 (text) |
| text-muted | map | 5.76:1 | 4.5:1 (text) |
| accent | surface | 6.67:1 | 4.5:1 (text) |
| accent | background | 6.16:1 | 4.5:1 (text) |
| on-accent | accent | 6.67:1 | 4.5:1 (text) |
| on-accent | text-muted | 7.29:1 | 4.5:1 (text) |
| error | surface | 6.54:1 | 4.5:1 (text) |
| error | error-surface | 5.72:1 | 4.5:1 (text) |
| error | background | 6.03:1 | 4.5:1 (text) |
| border | surface | 4.56:1 | 3.0:1 (non-text) |
| border | background | 4.21:1 | 3.0:1 (non-text) |
| accent | background | 6.16:1 | 3.0:1 (non-text) |
| accent | surface | 6.67:1 | 3.0:1 (non-text) |
| text | depth-shallow | 10.01:1 | 3.0:1 (non-text) |
| text | depth-medium | 5.43:1 | 3.0:1 (non-text) |
| text | depth-deep | 3.99:1 | 3.0:1 (non-text) |
| text | map | 12.88:1 | 3.0:1 (non-text) |
