---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 0
mission_id: MCP-1
session_estimate: 1
iii_persona: P-08 Mentor / Developer
tags: [mission, civic_press, scaffolding, components, p0]
---

# Mission MCP-1: Shared Scaffolding

## Goal

Build the reusable components every page will inherit before any page-level work. The Civic Press directive (§0 Shared scaffolding) lists 7 patterns that must exist once and be applied N times across the site. This mission ships them all with atom-level Playwright tests, so the page rebuilds in MCP-3 through MCP-6 stay focused on content + composition.

## Dependencies

- MCP-0 complete (style sheet locked; tokens + fonts in place)
- Existing Playwright spec harness (15 spec files, 332 tests baseline)

## Components to Build

| Component | Purpose | Directive Reference |
|-----------|---------|---------------------|
| `Masthead.astro` | Three-part newspaper masthead — wordmark + edition strip + nav rule | §0.1 |
| `PageOpener.astro` | Kicker + title + standfirst + hairline rule | §0.2 |
| `ColophonFooter.astro` | Replaces current footer — colophon block (not sitemap) + Michael Brooks line + bilingual posture | §0.7 + §8.3 + §8.4 |
| `PullQuote.astro` | Hairline-rule-bordered pull quote with press-red oversized quote glyph + mono small-caps attribution | §0.4 |
| `Marginalia.astro` | Right-margin sidenote at desktop, inline at mobile; mono small-caps label + hairline + body at 0.85× | §0.5 |
| `StatusChip.astro` | Mono small-caps, hairline-bordered chip (DRAFT, Q3 2026, PILOT A, etc.); press-red variant for DRAFT | §0.6 |
| `SectionOpener.astro` | Two variants: editorial header (kicker above title) + plate header (pixel-art plate left of title) | §0.3 |
| `LibraryCatalogueCard.astro` | Call-number-style card for Resources page — `[A]`/`[B]` press-red label + serif title + paragraph + 3 mono key-value rows + hairline top/bottom | §6.2 |

## Focus Areas

1. **Component file structure.** Each component a single `.astro` file in `site/src/components/`. TypeScript Props interface in frontmatter. Slot-based composition for flexibility (e.g., PageOpener has named slots for kicker / title / standfirst).
2. **Token usage.** Every component consumes the MCP-0 tokens (no inline hex values). Hairline rules via `border-t-[1px] border-[var(--ink)]` consistent across components.
3. **Per-component atom test.** New Playwright spec `tests/components-scaffolding.spec.ts` — renders each component on a test page with sample props, asserts presence + key visual properties (font-family resolves to the FOSS face, color tokens applied, hairline rule renders 1px). Compatible with existing 332-test baseline.
4. **Accessibility from day one.** Masthead nav uses `<nav>` with `aria-label`; PullQuote uses `<blockquote>` + `<cite>`; Marginalia uses `<aside>`; StatusChip carries `aria-label` when DRAFT (signals draft state to screen readers). PageOpener title is `<h1>` with `aria-describedby` linking to the standfirst paragraph id.
5. **Reduced-motion safety.** No animations in this mission (motion lives in MCP-3 onward). Components are static.
6. **III pass before close.** Persona P-08 Mentor/Developer. Inspect: keyboard navigation through Masthead nav; focus rings on every interactive element; component a11y; atom tests cover all components.

## Success Criteria

- 8 new components in `site/src/components/`.
- 1 new Playwright spec file `tests/components-scaffolding.spec.ts` with ≥8 tests (one per component minimum, more for variants).
- All 332 existing tests still pass.
- `npm run build` green; Lighthouse maintained on a test rendering of the components.
- Components documented inline (TypeScript Props comments suffice; no separate docs page).
- III ACCUMULATE wrote ≥1 trap or logged "no new traps".
- Mission AAR appended.

## Not in scope

- Applying the components to existing pages — that's MCP-3 onward (home applies all 8; subpages inherit).
- Pixel-art content for plate-variant SectionOpener — that's MCP-2; SectionOpener accepts a slot for the plate, but the plate itself is a placeholder PNG until MCP-2 lands.
- Three-roles cycle diagram or other Civic-Press diagrams — those are in MCP-3 (home rebuild).

## AAR

(pending mission close)
