---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: phase_a_dispatched
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 0
mission_id: MCP-2
session_estimate: "1 (Phase A dispatch) + 1 (Phase B review) + 1 (Phase C dispatch) + N (Phase D ingest)"
iii_persona: (none — coordination mission)
tags: [mission, civic_press, pixel_art, herb_dispatch, coordination, p0]
---

# Mission MCP-2: Pixel-Art Prompt Pack + Generation + Ingest (cross-machine, Herb-authored)

## Goal

Ship 37 pixel-art pieces — hero diptychs, section plates, role portraits, track plates, lifecycle plates, pilot icons, three seals — under a single-artist / single-palette / single-style discipline, ingested into `site/public/pixel/` and wired into pages at MCP-3..MCP-6. The work is **dispatched cross-machine to Herb's agent** in two stages — prompt authoring first (Phase A), image generation second (Phase C) — with Stanley review checkpoints between.

**Reshape note (2026-05-14)**: this mission was originally scoped as "Stanley authors prompts; Herb generates images" — reshaped to "Herb authors prompts; Stanley reviews; Herb generates images" at Stanley's request. The reshape gives Stanley a cheap text-level checkpoint before image generation commits resources, and leverages Herb's specialization in visual + cross-vault judgment.

## Phases

| Phase | Owner | Outcome | Dispatch artifact |
|---|---|---|---|
| **A — Prompt-pack authoring** | Herb's agent | 37 prompt files at `what/pixel_prompts/civic_press/<asset_name>.md` + `INDEX.md` + `INGEST_LOG.md`; PR open to `main`; done-note filed | `who/coordination/coord_2026_05_14_civic_press_pixel_prompts_dispatch.md` (dispatched at kick-off 2026-05-14) |
| **B — Stanley reviews + merges** | Stanley | Pull PR; spot-check 3-5 prompts against the exemplar + style sheet for palette/structure/alt-text adherence; merge OR request revisions via a coord-memo update | (in-vault review; no new dispatch artifact) |
| **C — Image generation** | Herb's agent | 37 PNGs at native resolution + 3-4× scaled variants; batched feature branches `pixel-art-batch-N`; PR per batch | New coord memo authored at Phase B close: `who/coordination/coord_2026_05_XX_civic_press_pixel_generation_dispatch.md` |
| **D — Stanley ingests + ships** | Stanley | Per-batch Playwright snapshot test; `INGEST_LOG.md` updated `placeholder` → `ingested`; placeholders → finals wired into MCP-3..MCP-6 components | (in-vault ingest sessions; one per batch) |

**Phase A dispatched 2026-05-14** at this kick-off; mission status `phase_a_dispatched` until Herb's PR lands.

This mission does NOT move to `status: completed` until Phase D finishes — that is, until all 37 placeholder rows in `INGEST_LOG.md` flip to `ingested`. P0 → P1 phase-gate closes at MCP-2 **kick-off** complete (per campaign master doc); the ongoing phases B/C/D run in parallel with P1+ work.

## Dependencies

- MCP-0 complete (bounded `--pixel-*` palette locked; D-COLOR-TOKENS signed — Herb generates against the locked palette)
- MCP-1 complete (SectionOpener accepts a plate slot; placeholder PNG stubs slot into `public/pixel/`)
- GitHub remote public at <https://github.com/LatticeProtocol/ContextCommons.aDNA> (Workstream A close)

## Assets to Generate (~30 pieces)

Per directive §10 + §11. Single artist, single palette, single style.

**Hero diptych (2 pieces, full-bleed)**:
1. `hero_diptych_grand_rapids.png` — Peter's Church fellowship hall at dusk, warm interior light, youth builder + elder at folding table with laptop + tape recorder, Pastor Williams in doorway. Lake-blue accent.
2. `hero_diptych_los_angeles.png` — Venice Beach Book Club back room, late afternoon, mother with folder, LAUSD student at laptop translating, UCLA mentor at whiteboard, jacaranda through window. Jacaranda-purple accent.

**Section plates (7 pieces, 96×96 native, halftone-frame)**:
3. `section_plate_about.png` — hand-pulled printing press
4. `section_plate_curriculum.png` — stack of bound books with a quill
5. `section_plate_pilots.png` — two pennants crossed (one per pilot)
6. `section_plate_get_involved.png` — open doorway with light spilling out
7. `section_plate_partners.png` — handshake across a table
8. `section_plate_resources.png` — open book on reading stand
9. `section_plate_contact.png` — typewriter / mailbox

**Role portraits (4 pieces, 96×96 native)**:
10. `role_portrait_youth_builder.png` — teenager at laptop with headphones around neck, sketchbook beside
11. `role_portrait_steward.png` — pastor/teacher/organizer with clipboard, mid-conversation
12. `role_portrait_elder.png` — elder at kitchen table, hands on mug, phone + Medicare booklet
13. `role_portrait_mentor.png` — engineer sketching on notepad

**Track plates (4 pieces, 160×120 native)**:
14. `track_plate_core.png` — mixed-age classroom around a table
15. `track_plate_builder.png` — teenager at laptop with notes
16. `track_plate_steward.png` — pastor with clipboard at a meeting
17. `track_plate_elder.png` — elder at kitchen table with youth builder taking notes

**Lifecycle plates (5 pieces, 80×80 native, partner-engagement procession)**:
18. `lifecycle_plate_discovery.png` — a doorway
19. `lifecycle_plate_scoping.png` — an unrolled contract
20. `lifecycle_plate_onboarding.png` — a handshake
21. `lifecycle_plate_active.png` — a workbench with tools
22. `lifecycle_plate_renewal.png` — a doorway, mirrored

**Pilot use-case icons (12 pieces, 48×48 native)** — Grand Rapids set:
23. `pilot_a_icon_medicare_card.png`
24. `pilot_a_icon_ssn_envelope.png`
25. `pilot_a_icon_phone_tree.png`
26. `pilot_a_icon_tape_recorder.png`
27. `pilot_a_icon_prescription_bottle.png`
28. `pilot_a_icon_prayer_book.png`

29-34. Los Angeles set: `pilot_b_icon_tutor_notebook.png`, `pilot_b_icon_folder_papers.png`, `pilot_b_icon_school_form.png`, `pilot_b_icon_jacaranda_branch.png`, `pilot_b_icon_library_card.png`, `pilot_b_icon_lunch_tray.png`.

**Three seals (3 pieces, 48×48 native)**:
35. `seal_governance_key.png` — a key (community governance)
36. `seal_knowledge_vault.png` — a vault (no data extraction)
37. `seal_open_door.png` — an open door (open standards)

**Total: 37 pieces** (slightly more than the ~30 in the plan because the use-case icon sets came in at 6 + 6 = 12).

## Prompt-Pack Structure

One markdown file per asset at `what/pixel_prompts/civic_press/<asset_name>.md`. Each carries:
- Asset name + intended path (`public/pixel/<asset_name>.png`)
- Native resolution + display-scale variants (3-4×)
- Scene description (1-2 specific sentences)
- Required palette references (which `--pixel-*` tokens; bounded palette of ~12 colors)
- Style notes (halftone-frame; `image-rendering: pixelated`; no soft edges; no drop shadows; consistent figure style across all pieces)
- Alt-text intent (what a screen reader announces; specific, not generic)
- Acceptance criteria (consistent figure size relative to scene; warm interior light where applicable; recognizable subjects from the directive)

Plus an index file `what/pixel_prompts/civic_press/INDEX.md` listing all 37 with status.

## Coordination Memo

Author at `who/coordination/coord_2026_MM_DD_civic_press_pixel_art_dispatch.md` (use actual dispatch date). Memo carries:
- Addressee: Herb's agent
- Source vault + commit pin: `LatticeProtocol/ContextCommons.aDNA` at <Stanley's push HEAD>
- Prompt-pack directory: `what/pixel_prompts/civic_press/`
- Deliverable format: PNG at native resolution + 3-4× scaled variants
- Return commit path: `public/pixel/` on a feature branch `pixel-art-batch-N`; PR to `main`; Stanley reviews + merges
- Acceptance criteria: bounded palette discipline; halftone-frame consistency; subjects recognizable per the directive scenes
- Batch cadence: Herb-discretion; Stanley pulls each batch and ingests in an MCP-2 ingest session

## Placeholder PNGs

For each asset, ship a placeholder PNG at `site/public/pixel/<asset_name>.png` at native resolution. Placeholder content: solid `--paper` fill with `--ink` hairline border and the asset name in mono. Size on disk: tiny. This lets MCP-3..MCP-6 layout proceed; the asset-swap checklist tracks which placeholders remain.

## Asset-Swap Checklist

Author `what/pixel_prompts/civic_press/INGEST_LOG.md` — checklist with one row per asset (`asset_name`, `status: placeholder | in_review | final`, `ingested_at`, `commit_sha`). MCP-7 verifies no placeholders remain at ship.

## Focus Areas

1. **Phase A kick-off (Stanley side, 2026-05-14)** — author coord memo addressed to Herb's agent + canonical exemplar prompt (`hero_diptych_grand_rapids.md`) + structural template (`_template_prompt.md`) + 37 placeholder PNGs at native resolutions + amended mission file (this document) + STATE.md tick + push to remote. Signal Herb out-of-band.
2. **Phase A execution (Herb side)** — Herb's agent pulls origin, reads coord memo + inputs, authors 37 prompt files mirroring the exemplar, commits to feature branch `pixel-prompts-pack`, opens PR to `main`, files done-note in `who/coordination/`, flips coord-memo `status: filed → fulfilled`.
3. **Phase B (Stanley side)** — pull PR, spot-check 3-5 prompts (palette discipline, structure adherence, alt-text register), merge OR request revisions via coord-memo update.
4. **Phase C dispatch (Stanley side, after Phase B merge)** — author new coord memo for image generation; reference the merged prompt pack; specify return format (PNG at native + 3-4× scaled variants on feature branches `pixel-art-batch-N`).
5. **Phase C execution (Herb side)** — Herb's agent generates images batch-wise; commits to feature branches; opens PR per batch.
6. **Phase D ingest sessions (Stanley side, N sessions)** — per batch: pull, run per-asset Playwright snapshot test, merge if green, update `INGEST_LOG.md` row `placeholder` → `ingested`.

## Success Criteria

- **Phase A kick-off**: coord memo + exemplar prompt + structural template + 37 placeholder PNGs + amended mission file + STATE tick all committed and pushed. Herb signaled out-of-band.
- **Phase A close (Herb)**: 37 prompt files + INDEX + INGEST_LOG on `pixel-prompts-pack` branch; PR open; done-note filed.
- **Phase B close (Stanley)**: PR merged to `main` (or revisions cycle closed).
- **Phase C close (Herb, per batch)**: PNG batch on feature branch with passing palette-discipline check.
- **Phase D close (per ingest session)**: ≥1 row in INGEST_LOG flips to `ingested`; snapshot test passes; commit pushed.
- **At MCP-7**: zero rows with `status: placeholder` or `status: prompt_authored` in INGEST_LOG — every row reads `ingested`.
- (No III pass on this mission — it's coordination, not authoring against a quality target. Persona walkthroughs apply to the rendered pages in MCP-3 onward.)
- Mission AAR appended at each Phase close.

## Not in scope

- Generating the pixel art locally on Stanley's machine. The pipeline is dispatch-and-ingest.
- Applying the assets to specific pages — that happens in MCP-3 (home diptych + role portraits + non-negotiable seals), MCP-4 (track plates), MCP-5 (pilot icons), MCP-6 (resources + contact section plates).
- Animating the pixel art — directive §1 calls for one animated detail per pilot card (lamp flicker, bus rolls past); that's MCP-3 territory.

## AAR

### Phase A kick-off (2026-05-14)

- **Worked:** Cross-machine dispatch wired end-to-end on first attempt. Coord memo at `who/coordination/coord_2026_05_14_civic_press_pixel_prompts_dispatch.md` mirrors the lattice-labs precedent (frontmatter + TL;DR + Why + Scope + Inputs + Output spec + Boundary rules + Bootstrap protocol + 3-signal Signal-back + Ack + Critical context). Canonical exemplar at `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md` instantiates every section Herb's agent must mirror. Structural template `_template_prompt.md` lets Herb `cp` and fill. 37 placeholder PNGs ship in `site/public/pixel/` so MCP-3+ layout work isn't blocked while Phase A runs.
- **Didn't:** Phase C image-generation dispatch not authored — deferred to a new coord memo after Phase B merge (correct ordering — the prompt pack must land + be reviewed first).
- **Finding:** The "phase: A" frontmatter key on the coord memo is non-standard vs. the lattice-labs precedent (which omits the field). Adopted here because MCP-2 has 4 phases and a single coord memo addresses only one. If multiple agents need this convention, propose it for canonical coord-memo schema in a future III pack or skill.
- **Change:** Mission scope reshaped from "Stanley authors prompts; Herb generates" to "Herb authors prompts; Stanley reviews; Herb generates". Added Phase B review checkpoint between authoring and generation — cheap revision cycle at the markdown layer beats expensive re-generation at the PNG layer.
- **Follow-up:** (a) Out-of-band signal to Herb after push — Stanley signals via preferred channel. (b) Stanley's next session against this vault reads `who/coordination/` in startup checklist step 5; Herb's done-note will surface naturally. (c) After Phase B merge, author the Phase C coord memo referencing the merged prompt pack.

### Phase A close (Herb)

(pending Herb's PR + done-note)

### Phase B close (Stanley review + merge)

(pending Phase A close)

### Phase C close + Phase D ingest sessions

(pending Phase B close)
