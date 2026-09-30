# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Public visitors** — community members, social organizations, local authorities, researchers, teachers and students in the Aysén Region (and beyond) who want to discover what ESPORA is, which initiatives it groups, and how participation works.
- **Field team (secondary, indirect)** — people who already use the separate observatory data-capture tool in the field. This site only links to that tool; it does not serve their task.

## Product Purpose

ESPORA (Economía Social, Solidaridad, Precios, Orgánicos, Residuos y Alimentación) is a public container/landing site that gives visibility to the ESPORA platform and the initiatives it groups. Success: a first-time visitor understands what ESPORA is, its six lines, which initiatives are active vs. in development, and how participation and ethics work — without mistaking any linked tool for a public results viewer.

## Positioning

Per the supplied source copy: ESPORA is a Universidad de Aysén platform that aggregates research, teaching and territorial-innovation initiatives that "observe the territory to transform it", anchored to the university's Plan de Desarrollo de Capacidades en Investigación (Incentivo FIUT). Institutional affiliations, the FIUT anchoring, the FAO Chile collaboration and the cited references (Bioaqua/GORE Aysén 2026, SUBDERE 2024, SINIM 2025, MMA 2021) are **supplied content** from `reference/espora-plataforma.source.html` and need independent institutional verification before being treated as confirmed claims.

## Operating Context

- Public, static website (this repository, `estebancofre-coy/espora-plataforma`).
- The embedded initiative **"Observatorio Territorial de Economía Social y Alimentación"** lives in a separate repository (`estebancofre-coy/observatorio-espora`) deployed at `https://estebancofre-coy.github.io/observatorio-espora/`. That site is currently an **in-field data-capture tool**, not a public results viewer. This project must never edit that repository, its data, backend or Sheets.
- Language: Spanish (Chile).

## Capabilities and Constraints

- Static HTML/CSS/JS, no build step, no backend, no data publication.
- Link to the observatory must be labeled unambiguously as a data-capture tool for field use (e.g. "Abrir herramienta de captura — uso en terreno").
- Do not imply a public data dashboard or published results exist.
- Only external links present in the source are allowed: the observatory URL and `https://visibilizaresintervenir.kimi.page/`. No URLs are fabricated for other initiatives.
- Public contact: `esteban.cofre@uaysen.cl` (confirmed by the user).
- **Open decision:** publication (GitHub Pages) requires explicit user approval.

## Brand Commitments

- Outer platform name: **ESPORA** — Economía Social, Solidaridad, Precios, Orgánicos, Residuos y Alimentación.
- Embedded initiative display name: **Observatorio Territorial de Economía Social y Alimentación**.
- Platform author: **Dr. Esteban Cofré-Morales**, Académico del Departamento de Ciencias Sociales y Humanidades (confirmed by the user).
- Universidad de Aysén / Trabajo Social white logo supplied by the user and displayed on the ESPORA hero.
- Keep the supplied copy of `reference/espora-plataforma.source.html`; only small clarity/safety edits allowed (public platform vs. internal capture tool).
- Supplied visual reference: Patagonian teal/sea-green palette with a mountain/forest/sun landscape motif and letter-mark cards.

## Evidence on Hand

- `reference/espora-plataforma.source.html` — original content and design reference (hero, what-is, FIUT anchoring, lines, project catalog, participation protocol, ethics).
- `assets/uaysen-trabajo-social-blanco.png` — transparent white university / Trabajo Social logo supplied in the conversation.
- No photos, logos, testimonials or metrics were supplied. Do not fabricate any.

## Product Principles

1. Visibility, not data publication: describe initiatives; never present results.
2. Honest status: active vs. in development is always explicit.
3. Consent first: nothing about organizations is public without their validation.
4. Territory at the center: Aysén and the Universidad de Aysén are the anchor.
5. Human responsibility for interpretation; AI is assistive with delimited roles.

## Accessibility & Inclusion

The source commits to WCAG 2.1 AA criteria for field content; the public site targets WCAG 2.1 AA (contrast, keyboard navigation, focus states, reduced motion, semantic structure).
