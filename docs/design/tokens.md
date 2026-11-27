<!--
File: docs/design/tokens.md - design tokens (Figma variables and CSS names)
Authors: [fill in names]
Course: PED 379
Midterm 2 Project
-->

# Design tokens

Source: variables in the Figma file "Earth Pulse". CSS names are the web code syntax of each variable.

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
| `--color-depth-shallow` | `#F6C445` | Depth 0-70 km, solid outline |
| `--color-depth-medium` | `#E8743B` | Depth 70-300 km, dashed outline |
| `--color-depth-deep` | `#8E6CC9` | Depth over 300 km, dotted outline |

## Typography

Figma uses **Inter**. The CSS uses `Inter, system-ui, sans-serif` and loads no web font,
so a computer without Inter shows its system font.

| CSS variable | Value |
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

| Text style | Weight | Size / line height |
|---|---|---|
| Heading/XL | 700 | 28 / 36 |
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
| `--size-touch` | 44px (minimum touch target) |

## Radius

| CSS variable | Value |
|---|---|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |

## Contrast check (WCAG 2.1 formula)

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
| text | depth-shallow | 10.01:1 | 3.0:1 (non-text) |
| text | depth-medium | 5.43:1 | 3.0:1 (non-text) |
| text | depth-deep | 3.99:1 | 3.0:1 (non-text) |
| text | map | 12.88:1 | 3.0:1 (non-text) |
