---
name: ESPORA
description: Plataforma territorial construida como un artefacto editorial de papel plegado.
colors:
  paper: "#f1efe5"
  paper-light: "#faf8ef"
  paper-shadow: "#d8d3c2"
  ink: "#2b2b27"
  ink-muted: "#56574c"
  olive-ink: "#3b3a2e"
  forest-deep: "#174536"
  forest: "#1f5a48"
  forest-mid: "#2e6a55"
  leaf: "#6b7d4a"
  huemul: "#8a6a4a"
  mint: "#a9d3b5"
  mint-light: "#dcebdf"
  sage-band: "#e3f0e6"
  moss-light: "#e2e5d2"
  line: "#b9b7aa"
  development: "#e6dfbd"
  development-ink: "#604f13"
typography:
  wordmark:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "clamp(6rem, 12vw, 10.5rem)"
    fontWeight: 600
    lineHeight: 0.7
    letterSpacing: "0.055em"
  heading:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  subheading:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  none: "0"
  paper: "2px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(4rem, 9vw, 7rem)"
  wrap: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
    height: "48px"
  filter-active:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.none}"
    height: "44px"
  status-active:
    backgroundColor: "{colors.mint-light}"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
  status-development:
    backgroundColor: "{colors.development}"
    textColor: "{colors.development-ink}"
    rounded: "{rounded.none}"
---

# Design System: ESPORA

## Overview

ESPORA is a living paper artifact: knowledge, solidarity and territory folded into one shared organism. The system is derived from the user-supplied origami poster, not by reproducing it literally but by carrying its material grammar across the site—fibrous paper, ink-black type, cut greens, folds, hanging labels and branch-like paths.

The public surface reads as an unfolded field poster. Its first viewport pairs an editorial masthead with the supplied collage; later sections turn the same vocabulary into paper slips, folded records and geometric wayfinding.

## Colors

Palette aligned with the ESPORA brand board (low-poly folded paper): forest green `#1f5a48`, sage `#a9d3b5`, olive `#6b7d4a`, graphite `#2b2b27`, huemul brown `#8a6a4a` and paper white. The wordmark uses olive-ink `#3b3a2e`.

### Primary
Warm paper (`paper`, `paper-light`) owns most of the surface. Ink black carries all primary typography and hard rules.

### Secondary
Forest greens (`forest-deep`, `forest`, `forest-mid`) identify action, institutions and territorial structure. Mint is the solidarity/care counterpoint.

### Named Rules
- **Paper owns the page.** Large areas stay warm and matte; green appears as material, not decoration.
- **Status remains honest.** Active uses mint/forest; in-development uses straw/umber plus explicit text.
- **Black means structure.** Rules, shadows and typography use graphite ink; avoid generic gray UI chrome.
- **Huemul brown is a pigment, not a signal.** Use it only inside illustrations and spore fragments, never for text or status.

## Typography

Archivo Narrow is the display face because its condensed, printed-poster character matches the supplied visual authority. Atkinson Hyperlegible remains the body face for accessibility.

### Hierarchy
The ESPORA masthead is intentionally monumental. Section headings are condensed uppercase blocks; item headings use the same face at smaller scale. Body copy stays sentence case with a 60–70ch measure.

## Layout

The hero is a 2-column editorial poster and collapses to a vertical artifact on mobile. Main sections use the existing 72rem wrap, with deliberately varied structures: four paper facets, a two-column institutional spread, six folded strips, a stacked project ledger and a four-stage branching path.

Breakpoints remain 1000px, 860px and 640px.

## Elevation & Depth

Depth imitates stacked paper: hard offset shadows (typically 4–8px) plus a restrained ambient shadow only for the main collage. No glossy glass effects.

## Shapes

Default corners are square. `clip-path` creates folds, hexagonal seals, diamonds, branch cuts and torn labels. Pill controls are not part of this world.

## Components

### Buttons
Rectangular uppercase labels with hard ink offset shadows. Primary is forest on paper; secondary is paper with an ink outline.

### Filters and status
Filters resemble small inventory labels. Active filters receive a hard shadow. Status tags are rectangular and pair color with text and a geometric mark.

### Project records
Native `<details>` entries behave like folded field records: ink border, hard paper shadow and a visible top-right fold. The observatory remains featured; in-development records use a dashed edge and straw paper.

### Institutional mark
The supplied white Universidad de Aysén / Trabajo Social logo sits on a forest paper strip in the hero copy column, directly under the "Universidad de Aysén · …" line and above the actions. It never overlaps the diorama: no illustration may be covered or cropped by it.

### Wordmark and concept band
The hero wordmark `ESPORA` is set in olive-ink with a small forest-green spore facet above the final A (`.wm-a`, CSS only; the accessible text stays "ESPORA"). The expanded concept line sits on a light sage paper band (`sage-band`) with a slightly cut edge and a soft hard shadow.

### Brand-board motifs
Raster motifs in `assets/brand/` are cut directly from the brand board v2 (`reference/ESPORA-brand-board-v2.jpg`): flood fill from the crop edges against the board's cream background (tolerance 13 for pieces with white paper, 34 otherwise), keep the largest connected component (all components for leaves and berries), 1px erosion, slight alpha feathering, tight crop, WebP export. They are never upscaled beyond native size (tree ≈ 262 px, icons ≈ 80–145 px). The board's cream background is a photographic backdrop, not a brand colour: never reintroduce it.
- `arbol-bosque.webp`, `arbol-salvia.webp`, `huemul.webp`, `condor.webp` and `icono-organicos.webp` (leaves and berries) — the pieces of the hero diorama (see Signature artwork). Decorative (`alt=""`); the diorama container carries one `role="img"` label.
- `esporas.svg` — scattered diamond/triangle spore fragments (SVG), tiled at very low opacity (≤ .22) behind the hero copy and the participation band. Never behind body text at higher opacity.
- `icono-*.webp` — six paper icons, one per line of the acronym: handshake with nodes (Economía Social), people network (Solidaridad), node cubes (Precios), leaves and berries (Orgánicos), recycling arrows (Residuos), bowl with vegetables (Alimentación). Shown at ≤ 3.25rem with `object-fit: contain`. Decorative (`alt=""`) because the line title carries the meaning.
- `assets/favicon.svg` — the faceted mushroom on paper.
- The hero summary sits on a light-sage paper slip (`--sage-band`, forest left edge, slightly irregular clip) echoing the board's text strips.

Use icons only where they reinforce a line or axis; do not scatter them as decoration.

### Header edge
The header is a sheet of `--paper` laid over the lighter page: no frame, no hard rule, no coloured plate behind the logo. Its lower edge is a torn-paper deckle (inline SVG, 7px, repeat-x) with a faint shadow. The header logo is the olive-ink `ESPORA` wordmark with the same forest spore facet as the hero. Never frame the header or the logo with a box or a border.

### Signature artwork
The hero artwork is a hand-assembled paper diorama (`.diorama`), not a single illustration or a framed picture. Depth order: sage tree at the back, leaves with berries floating above it, forest tree with mushrooms in front overlapping it, huemul in the lower-left foreground stepping past the ground edge, condor perched on the upper-left canopy of the sage tree, clearly separated from the institutional strip in the hero copy column. Everything stands on an irregular sage paper ground (`#cfe6d5` → `--mint-300`) with two faint fold facets. A few spores and faceted cubes are scattered around the scene, some outside its edges, at .35–.85 opacity, suggesting dispersal and regeneration. The pieces get a soft drop shadow (never a hard offset frame). They rise in with a stagger only under `prefers-reduced-motion: no-preference`. Pieces stay at native size or smaller. `assets/espora-paper-collage.jpg` (a crop of the original poster) is no longer shown in the hero; keep it only as source material.

## Do's and Don'ts

### Do:
- Translate new components into folds, paper slips, seals or branch geometry.
- Preserve generous paper fields around dense content.
- Keep the observatory labeled as a field-capture tool, never a public results viewer.

### Don't:
- Don't reintroduce rounded cards, soft app-dashboard chrome or decorative gradients.
- Don't place text over the collage.
- Don't invent institutional claims, URLs or data.
