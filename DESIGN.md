---
name: ESPORA
description: Plataforma pública de la Universidad de Aysén — un territorio patagónico que se lee de frente.
colors:
  fjord-900: "#0b3f52"
  fjord-800: "#0c536b"
  fjord-700: "#0f5d74"
  fjord-600: "#0f7180"
  fjord-500: "#14798a"
  sea-500: "#2d948c"
  sea-300: "#5fb0a2"
  sea-100: "#e5f2ee"
  sea-50: "#eef7f5"
  forest-900: "#123f4c"
  forest-800: "#174f62"
  sun-400: "#f7cb68"
  sun-300: "#fadb91"
  ink-900: "#183346"
  ink-600: "#435c69"
  line: "#d5e1df"
  paper: "#f3f7f4"
  ok-bg: "#e6f4ea"
  ok-fg: "#0f6a2e"
  dev-bg: "#fef3d1"
  dev-fg: "#6d4500"
typography:
  wordmark:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(4rem, 14vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.2vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  subheading:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(4rem, 9vw, 7rem)"
  wrap: "72rem"
components:
  button-sun:
    backgroundColor: "{colors.sun-400}"
    textColor: "{colors.forest-900}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  button-sun-hover:
    backgroundColor: "{colors.sun-300}"
  button-tool:
    backgroundColor: "{colors.forest-900}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-tool-hover:
    backgroundColor: "{colors.fjord-700}"
  filter-chip-active:
    backgroundColor: "{colors.fjord-700}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    height: "44px"
  status-activo:
    backgroundColor: "{colors.ok-bg}"
    textColor: "{colors.ok-fg}"
    rounded: "{rounded.pill}"
  status-desarrollo:
    backgroundColor: "{colors.dev-bg}"
    textColor: "{colors.dev-fg}"
    rounded: "{rounded.pill}"
---

# Design System: ESPORA

## Overview

A Patagonian territory read from across a fjord. The world comes from the supplied reference (`reference/espora-plataforma.source.html`): fjord teal, sea-green ranges, a low sun and a dark forest line. The hero is a full-bleed landscape with contour lines; the rest of the page alternates quiet paper sections with tinted and deep-fjord bands, closing on a forest-dark footer under a mountain ridge.

## Colors

### Primary
Fjord teal (`fjord-800` → `fjord-500`) owns the hero, headings and interactive outlines.

### Secondary
Low sun (`sun-400`) is the single warm accent: primary action, brand badge, step numbers, focus ring on dark grounds. `sun-300` carries the public-site notice band.

### Neutral
Cold paper (`paper`), white content bands, `ink-900` text and `ink-600` secondary text (≥ 5.9:1 on white).

### Named Rules
- **Honest status rule.** Active = green filled dot (`ok-*`); in development = amber hollow dot (`dev-*`) plus dashed card border. Status is never color-only.
- **Sun is scarce.** Sun yellow marks the one thing to do or notice per region, never decoration.

## Typography
Bricolage Grotesque for display (wordmark, headings, letter-marks, project names); Atkinson Hyperlegible for body, chosen for legibility in line with the platform's accessibility commitments.

### Hierarchy
Wordmark (up to 9.5rem) → section heading (clamp 1.9–3rem, 800) → subheading 1.2rem 700 → body 1.0625rem/1.6. Body measure capped around 60–70ch.

## Layout
Single column wrap of 72rem with fluid gutters; sections separated by `spacing.section`. Two-column "split" (5fr/7fr) for FIUT and ethics; six-line acronym ribbon grid (six columns, then three, then one); four-step horizontal protocol that collapses to 2 then 1 column. Breakpoints: 1000px, 860px (nav toggle), 640px.

## Elevation & Depth
Flat bands carry most structure. Only project entries lift: `0 6px 18px -8px rgba(18,63,76,.22)`, deepening on hover.

## Shapes
Pills for actions, filters, tags and status; 14px radius for project entries; 10px for callouts; triangles (ethics bullets) and mountain silhouettes as the world's own marks.

## Components

### Buttons
`btn-sun` (primary on dark), `btn-ghost` (secondary on dark), `btn-outline` (external link on light), `btn-tool` (forest-dark; reserved for the field data-capture tool link). External links carry an arrow-out icon and screen-reader "(se abre en una pestaña nueva)".

### Chips
Filter chips with live counts, `aria-pressed`, 44px min height; hero line tags with a white letter disc.

### Cards / Containers
Project entries are native `<details>`; the observatory entry is featured with a 2px fjord border and a vertical "Iniciativa n" index. No nested cards; "¿Qué es?" uses a ruled definition list, not cards.

### Navigation
Sticky fjord-900 bar, pill links with `aria-current` section highlighting; below 860px a "Menú" toggle opens a stacked panel (Escape closes).

### Tool callout (signature)
Tinted sea-50 box that states the linked site is a field capture tool and not a public results viewer, next to the `btn-tool` action.

## Do's and Don'ts

### Do:
- Label any link to the observatory as a data-capture tool for field use.
- Keep the landscape as the one authored motion moment (layers rise once; disabled under reduced motion).
- Show active vs. in-development with text + shape + color.

### Don't:
- Don't present data, charts or "results" — this site does not publish data.
- Don't add eyebrow labels above headings.
- Don't invent URLs, contacts or institutional claims beyond the supplied source.
