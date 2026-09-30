---
name: ESPORA
description: Plataforma territorial construida como un artefacto editorial de papel plegado.
colors:
  paper: "#f1efe5"
  paper-light: "#faf8ef"
  paper-shadow: "#d8d3c2"
  ink: "#20231f"
  ink-muted: "#565a50"
  forest-deep: "#173d2d"
  forest: "#24513a"
  forest-mid: "#376646"
  leaf: "#66835b"
  mint: "#b6d3c1"
  mint-light: "#dce9dd"
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

### Primary
Warm paper (`paper`, `paper-light`) owns most of the surface. Ink black carries all primary typography and hard rules.

### Secondary
Forest greens (`forest-deep`, `forest`, `forest-mid`) identify action, institutions and territorial structure. Mint is the solidarity/care counterpoint.

### Named Rules
- **Paper owns the page.** Large areas stay warm and matte; green appears as material, not decoration.
- **Status remains honest.** Active uses mint/forest; in-development uses straw/umber plus explicit text.
- **Black means structure.** Rules, shadows and typography use ink; avoid generic gray UI chrome.

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
The supplied white Universidad de Aysén / Trabajo Social logo sits on a forest paper strip over the hero artwork.

### Signature artwork
`assets/espora-paper-collage.jpg` is a crop derived from the supplied image. It is the central hero artifact and should not be repeated as a background elsewhere.

## Do's and Don'ts

### Do:
- Translate new components into folds, paper slips, seals or branch geometry.
- Preserve generous paper fields around dense content.
- Keep the observatory labeled as a field-capture tool, never a public results viewer.

### Don't:
- Don't reintroduce rounded cards, soft app-dashboard chrome or decorative gradients.
- Don't place text over the collage.
- Don't invent institutional claims, URLs or data.
