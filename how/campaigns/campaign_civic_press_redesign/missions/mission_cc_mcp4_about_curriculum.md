---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 2
mission_id: MCP-4
session_estimate: 1
iii_persona: P-04 Mrs. Johnson
tags: [mission, civic_press, about, curriculum, p2]
---

# Mission MCP-4: About + Curriculum Rebuild

## Goal

Land the Civic Press doctrine on the two largest content-pages: About (the thesis page) and Curriculum (the syllabus page). About becomes a 5-leaf pamphlet; Curriculum becomes a small-press course catalogue. Both are inherit-the-pattern moves — they reuse the scaffolding from MCP-1 and follow the doctrine locked at MCP-3.

## Dependencies

- P1 phase gate passed (MCP-3 home page landed; one-sentence test ✓)
- MCP-1 scaffolding components available
- MCP-2 pixel-art batch ingested for: `section_plate_about.png`, `section_plate_curriculum.png`, `role_portrait_youth_builder.png` (already in MCP-3), 4 track plates

## About — 5 leaves (per directive §1)

Treat as a printed pamphlet with five numbered leaves. Each leaf gets a `LEAF I — THE PRESS` style kicker.

| Leaf | Title | Source Treatment |
|------|-------|------------------|
| I | The Press | Single column, ~62ch, drop cap. Tighten existing "printing press for the AI age" copy by 30%. Close with the two-birds line — **placement #2 of 4**. Plate: hand-pulled press in right margin. |
| II | The Graph | Rebuild WHO/WHAT/HOW diagram as proper SVG triangular schematic (pixel-art badges at nodes, hairline civic-blue connecting lines, press-red centroid labeled `YOUR COMMUNITY'S CONTEXT GRAPH`). Keep the example table — typeset as editorial three-column with hairline rules. |
| III | The Difference | Two-column ledger (typical app vs. community agent). Hairline center rule, mono small-caps headers. Add the press-red row "Where the surveillance arrow points" — *at you / at the tools*. |
| IV | The Terms | Promote from single paragraph to full leaf. Three pixel-art seals (key / vault / open door — same as home page non-negotiables). One editorial paragraph per seal. End with display italic centered: *"Written promises, not good intentions."* |
| V | The Questions | Restyle Q&A as proper column. No accordion. Question in display serif italic with press-red `Q.` glyph; answer in editorial body with small-caps `A.` glyph. All visible. |

Page closes with `Read what we teach. → Explore the Curriculum`.

## Curriculum — course catalogue (per directive §2)

| Section | Treatment |
|---------|-----------|
| Page opener | `[THE COURSE OF STUDY · FOUR TRACKS]` kicker + title + standfirst. |
| Track selector index | Catalogue-style table replaces current four-card grid. Columns: TRACK / FOR / WEEKS / HOURS / GOTO (anchor link). Hover row: full-width press-red underline + faint tint. |
| Track detail modules × 4 | Core / Builder / Steward / Elder. Each: track plate (pixel art from MCP-2) + masthead + standfirst + schedule table + numbered milestones with press-red codes (`B1`, `B2`, etc.) + outcome line in display italic. |
| Builder Track standfirst | Rewrite per directive §2.4 — include pilot-specific specificity (Medicare-and-Social-Security in Karen/Swahili; bilingual tutor in Korean). |
| Elder & Community Track standfirst | Rewrite per directive §2.4 — include oral-history dimension. |
| "How the tracks connect" | Rebuild loop diagram as proper SVG. Four nodes (Elders / Builders / Stewards / Mentors) in a square; civic-blue directional arrows labeled `CONTEXT & USE CASES`, `CAPABILITY`, `GOVERNANCE`, `TECHNICAL SUPPORT`; press-red dot center labeled `THE COMMONS`. Animated on viewport entry. |
| Closing call | Two CTAs side by side: `Find your role` → Get Involved · `See where this happens` → Pilots. |

## Focus Areas

1. **About page** — rewrite `site/src/pages/about.astro`. Reuse PageOpener, SectionOpener (plate variant for Leaf I, editorial variant for II–V), PullQuote (for "Written promises" close of Leaf IV), and existing components (RoleCard adapted for Leaf I plate context, StyledTable for Leaf II).
2. **Triangular schematic** — new diagram component `site/src/components/diagrams/AboutTriadSchematic.astro`. Pixel-art badges from MCP-2 role portraits. Civic-blue rules. Press-red centroid.
3. **Curriculum page** — rewrite `site/src/pages/curriculum.astro`. New track-index table. Promote inline TrackCard sections to full editorial modules. Reuse the four-tracks loop diagram approach but as a new component `site/src/components/diagrams/CurriculumTracksLoop.astro`.
4. **Voice tightening** — strike hedges, strike second-person pep, propagate the two-birds line to placement #2 (Leaf I close).
5. **Mrs. Johnson persona pass** — III before close. Inspect: large readable text, icon clarity, elder-track positioned as co-design (not charity), care-coordination examples specific (not generic).

## Success Criteria

- `site/src/pages/about.astro` rewritten with 5 leaves.
- `site/src/pages/curriculum.astro` rewritten with catalogue index + 4 detail modules.
- 2 new diagram components (`AboutTriadSchematic`, `CurriculumTracksLoop`).
- Two-birds line at placement #2 (About Leaf I close).
- `npm run build` green; all tests pass; Lighthouse maintained.
- One-paragraph test ✓ on both pages — Mrs. Johnson finds a paragraph in her register.
- III ACCUMULATE wrote ≥1 trap.
- Mission AAR appended.

## Not in scope

- Pilots, Get Involved — MCP-5.
- Partners, Resources, Contact — MCP-6.

## AAR

(pending mission close)
