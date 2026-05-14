---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 2
mission_id: MCP-5
session_estimate: 1
iii_persona: P-05 LAUSD-UCLA + P-07 Press/Media Journalist
tags: [mission, civic_press, pilots, get_involved, p2]
---

# Mission MCP-5: Pilots + Get Involved Rebuild

## Goal

Rebuild Pilots (two field dispatches with sharpened oral-history + bilingual-learning emphasis) and Get Involved (four-quadrant directory + role detail modules + trusted-adult marginalia). Two pages, one mission — the human voice work runs together because the journalist persona checks fact consistency across both pages.

## Dependencies

- P1 phase gate passed
- MCP-4 complete (curriculum context referenced from get-involved roles)
- MCP-2 ingested for: hero diptych panels (already on home), pilot use-case icons (12 pieces), role portraits (4 pieces)

## Pilots — two dispatches (per directive §3)

Both follow identical skeleton.

| Section | Treatment |
|---------|-----------|
| Page opener | `[DISPATCHES · GRAND RAPIDS · LOS ANGELES]` + title + standfirst. Keep DRAFT chip (directive §3.1 — community details pending community review). |
| Pilot A dispatch (Grand Rapids) | Pixel plate (expanded from home diptych left panel) + dateline + lede (use rewritten copy from directive §3.3, expand by one paragraph) + pull quote (placeholder lifted from lede until real quote available) + at-a-glance table (proper editorial table, replace key-value list) + "What gets built" with pixel-art icons + "Why this site, why now" paragraph + "What it is testing" line in display italic. **Lead with elder-care + oral-history**: Medicare + Social Security claims + care coordination + healthcare translation (English/Swahili/Karen/Arabic) + **oral-history archive** as first-class use case. |
| Pilot B dispatch (Los Angeles) | Same skeleton. **Lead with bilingual learning enablement** — agentic tutors meeting students in language of home; family-school bridging (translated assignments, parent-teacher comms, school enrollment in Spanish/Korean/Armenian/Tagalog); immigration paperwork country-specific; benefits navigation in family's language; community mentorship pairing (UCLA + LAUSD + Venice Beach Book Club). Mentorship paragraph carries the **two-birds line placement #3 of 4** (per directive §8.2). |
| Two-models comparison | Two-column ledger replaces current alternating-row table. Hairline center rule, mono headers (GRAND RAPIDS / LOS ANGELES). Add press-red top row: *"What it teaches the standard" — Can one community hold it whole? / Can many institutions hold it together?* |
| Timeline | Rebuild as proper SVG Gantt strip — horizontal axis Q2 2026 → Q1 2027, hairline ticks, two bars (GR top / LA bottom), three-segmented per bar (pre-launch / active / post-pilot) with paper / press-red / civic-blue shading. |
| Closing | *"Want this in your community?"* → `Tell us about it`. |

## Get Involved — four-quadrant front desk (per directive §4)

| Section | Treatment |
|---------|-----------|
| Page opener | `[THE CALL · FOUR WAYS IN]` + title + standfirst per directive §4.1. |
| Four-column directory | Builders / Stewards / Mentors / Partners. Each column carries: pixel plate (top) + salutation (display italic) + paragraph + press-red full-width CTA + mono small-caps `See the full role ↓` secondary. Column tints: school-bus gold (Builders), paper (Stewards), civic-blue 6% (Mentors), press-red 6% (Partners). |
| Role detail modules below | Each role: plate (reused from column, larger) + masthead + standfirst + 3-column editorial spread (What you'll do · What you'll need · What you'll earn) with hairline rules between columns + outcome line in display italic. |
| Builder column "What you'll earn" | Add the two-birds line — **placement #4 of 4** — per directive §4.4. *"...in a labor market where the entry-level rung is being pulled up, you walk out of this program with the apprenticeship that rung used to give you."* |
| Marginalia | Beside Builder column: trusted-adult-under-18 note per directive §4.5. Use new `Marginalia.astro` from MCP-1. |
| Closing | *"Every conversation starts with understanding your community. **Tell us about yours.**"* → Contact |

## Focus Areas

1. **Pilots page** — rewrite `site/src/pages/pilots.astro`. New pilot dispatch component pattern (reuses existing PilotCard structure but with expanded content slots).
2. **SVG Gantt timeline** — new component `site/src/components/diagrams/PilotsGanttTimeline.astro`. Replaces inline `PilotTimeline.astro` with the new doctrine.
3. **Get Involved page** — rewrite `site/src/pages/get-involved.astro`. Four-column directory + four role detail modules.
4. **Cross-page fact reconciliation** (per M08-R Batch 7 lesson) — builder counts, language lists, institution names must agree across home + pilots + get-involved. Journalist persona enforces.
5. **Two-pass III** — Persona P-05 LAUSD-UCLA first (table comparison, cognitive load, evidence-vs-aspirations). Then Persona P-07 Press/Media Journalist (cross-page facts, named people, lede paragraphs).

## Success Criteria

- `site/src/pages/pilots.astro` rewritten with two dispatches in identical skeleton.
- `site/src/pages/get-involved.astro` rewritten with four-quadrant + four detail modules.
- 1 new diagram component (`PilotsGanttTimeline`).
- 12 pilot use-case icons placed (placeholders OK; final at ingest).
- Two-birds line at placements #3 (LA mentorship paragraph) and #4 (Builder column).
- Trusted-adult marginalia present on Get Involved.
- `npm run build` green; tests pass; Lighthouse maintained.
- One-paragraph test ✓ on both pages — LAUSD admin AND journalist find paragraphs in their registers.
- Cross-page fact audit clean (no builder-count drift, no language-list mismatches, no institution-name inconsistencies).
- III ACCUMULATE wrote ≥1 trap per persona.
- Mission AAR appended.

## Not in scope

- Partners, Resources, Contact — MCP-6.
- Pilot plan content revisions beyond presentation — community-steward sign-off required (Standing Order #11).

## AAR

(pending mission close)
