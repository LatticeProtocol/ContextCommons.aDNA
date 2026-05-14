---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 1
mission_id: MCP-3
session_estimate: 1
iii_persona: P-02 Pastor Williams + P-03 Youth Builder
tags: [mission, civic_press, home_page, p1, doctrine_landing]
---

# Mission MCP-3: Home Page Rebuild — Doctrine Landing

## Goal

Land the Civic Press doctrine on the home page. This is the **P1 phase gate** — when MCP-3 closes, a stranger should be able to read the home page for 10 seconds and tell a friend, in one sentence, what the program does (per directive §7 the one-sentence test).

The current home page communicates Context Commons but doesn't *land the thesis in one breath*. After MCP-3 it must do four jobs in one screen (per directive §3.2): what it is, why now, what is different, what to do next.

## Dependencies

- MCP-0 complete (tokens + type system locked)
- MCP-1 complete (8 scaffolding components in place)
- MCP-2 kick-off complete (placeholder PNGs in `public/pixel/`; finals arrive via ingest sessions)

## Decisions to Lock

| ID | Decision | Approach |
|----|----------|----------|
| D-MICHAEL-BROOKS-LINE | Final wording for footer dedicatory line | Default per directive §8.3: *"In memory of Michael Brooks, who taught us that a community has the right to be diagnosed by its own people."* Surface to Stanley for sign-off during mission. |
| D-BILINGUAL-LANGUAGES | Final language list for footer signal | Default per directive §8.4: `ESPAÑOL · 中文 · 한국어 · TAGALOG · հայերեն · SWAHILI · KAREN · ARABIC — TRANSLATIONS IN PREPARATION`. Surface to Stanley. |

## Page Sections to Build

Per directive §3 (home-page brief). All seven sections in order:

1. **Masthead** (§3.1) — use the new `Masthead.astro` from MCP-1. Edition line: *"A community press for the AI age · Vol. I · 2026"*.
2. **Hero diptych** (§3.2) — two-panel pixel-art diptych (Grand Rapids left, Los Angeles right), divided by a hairline rule. Dateline strip above: `EST. 2026 · TWO PILOTS · GRAND RAPIDS · LOS ANGELES · OPEN STANDARD`. Headline: *"Every community deserves its own printing press."* Sub-headline (two short sentences) + hinge line in press-red (the two-birds line, placement #1 of 4 per directive §8.2). Primary CTA `Join the Commons →` + two text-link secondaries.
3. **The thesis** (§3.3) — three short paragraphs as a single editorial column, ~62ch wide, press-red drop cap. Three paragraphs: the displacement; the inversion; the model. End with `READ THE FULL THESIS →` linking to About.
4. **Three roles, one loop** (§3.4) — new SVG cycle diagram (three nodes Elders/Builders/Stewards + central pivot Lattice Mentors). Each role card gets a pixel-art portrait (from MCP-2). Fourth card for Lattice Mentors, smaller, set apart.
5. **Where we're working** (§3.5) — two pilot cards, each with new copy. Grand Rapids: depth + Medicare/Social Security/care coordination/oral-history archive. Los Angeles: breadth + bilingual learning enablement leading. Pixel-art scenes + meta strips. Per-card hover delight: one animated detail.
6. **A press, on terms — the non-negotiables** (§3.6) — NEW section. Three cards with the three seals from MCP-2 (key/vault/door). End with `WRITTEN PROMISES — NOT GOOD INTENTIONS.`
7. **Closing call** (§3.7) — four-column segmented CTA (builders / stewards / mentors / funders). End with press-red rule + final line *"Every community deserves its own printing press. Help us hand out the type."*

Plus the colophon footer (§3.8) from MCP-1's `ColophonFooter.astro`, populated with the locked D-MICHAEL-BROOKS-LINE + D-BILINGUAL-LANGUAGES values.

## Focus Areas

1. **SVG cycle diagram** — new component `site/src/components/diagrams/CivicPressRolesLoop.astro`. Three labeled directional arrows in civic-blue + central press-red pivot. Animate the arrows on first viewport entry (clip-path wipe, not fade). Respect `prefers-reduced-motion`.
2. **Hero diptych composite** — pixel-art layered composite. Two panels separated by hairline rule. Page-load reveal: masthead rule draws → headline fades up → dateline resolves → hero composites in 3–4 layers (sky → building → figures → foreground props), each on 80–120ms offset. Reduced-motion alternative: instant composite.
3. **Drop cap** — first letter of the thesis block in press-red, display serif, scaled to ~3 lines height.
4. **Two-birds-line propagation** — placement #1 (hero hinge line). Tracker bullet in AAR — placement #2 lands in MCP-4 (About Leaf I close); #3 in MCP-5 (LA dispatch mentorship paragraph); #4 in MCP-5 (Builder column "What you'll earn").
5. **Pilot card animated detail** — one per card. Grand Rapids: lamp flickers in the doorway. Los Angeles: a bus rolls past the window. Single-frame loop, reduced-motion safe.
6. **III pass before close (two-pass)** — Persona P-02 Pastor Williams first (jargon, voice, church-meeting test) → Persona P-03 Youth Builder (mobile legibility, diagram clarity, condescension check). Each persona produces independent findings; IMPROVE step ranks together.

## Success Criteria

- `site/src/pages/index.astro` rewritten with the seven Civic Press sections.
- New `CivicPressRolesLoop.astro` diagram component.
- Hero diptych composite working with reduced-motion fallback.
- D-MICHAEL-BROOKS-LINE + D-BILINGUAL-LANGUAGES locked in colophon footer.
- Two-birds line lands at placement #1 (hero hinge).
- Pilot card animated details work (1 each).
- `npm run build` green; all Playwright tests pass; Lighthouse maintained.
- **One-sentence test passes** — Stanley confirms a stranger could close the tab after 10s and describe the program in one sentence.
- III ACCUMULATE wrote ≥1 trap per persona (2 traps minimum, more typical).
- Mission AAR appended.

## Not in scope

- About, Curriculum, Pilots, Get Involved, Partners, Resources, Contact rewrites — those are MCP-4..MCP-6.
- Final pixel art (most pieces still placeholder at MCP-3 close; ingested in MCP-2 tail sessions).
- Three-roles cycle diagram for the curriculum page (different diagram, MCP-4).

## AAR

(pending mission close)
