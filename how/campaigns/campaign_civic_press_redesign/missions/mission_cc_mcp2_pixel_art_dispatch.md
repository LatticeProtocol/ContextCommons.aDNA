---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 0
mission_id: MCP-2
session_estimate: "1 (kick-off) + N (ingest)"
iii_persona: (none — coordination mission)
tags: [mission, civic_press, pixel_art, herb_dispatch, coordination, p0]
---

# Mission MCP-2: Pixel-Art Prompt Pack + Dispatch to Herb's Agent

## Goal

Author one prompt artifact per pixel-art asset (~30 pieces) so layout work in MCP-3 through MCP-6 can proceed against placeholders, then dispatch the prompt pack to Herb's agent via the cross-machine coordination system. Herb generates; Stanley pulls and ingests in subsequent ingest sessions.

This mission has two phases: a single **kick-off session** (author prompts, place placeholders, dispatch memo, push) and **N ingest sessions** (as Herb's batches return, swap placeholders for finals, verify Playwright snapshot tests).

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

1. **Kick-off session** — author all 37 prompts + index + INGEST_LOG + 37 placeholder PNGs + coordination memo. Single session if velocity holds.
2. **Push to public remote** — Stanley pushes; signals Herb out-of-band that the dispatch is live.
3. **N ingest sessions** — Stanley pulls Herb's PRs / batches; runs the per-asset Playwright snapshot test; merges if green; updates INGEST_LOG.

## Success Criteria

- **Kick-off**: 37 prompt artifacts + 37 placeholders + INGEST_LOG + coordination memo all committed and pushed. Herb signaled.
- **Per ingest session**: ≥1 placeholder → final transition; INGEST_LOG updated; Playwright snapshot passes; commit pushed.
- **At MCP-7**: zero rows with `status: placeholder` in INGEST_LOG.
- (No III pass on this mission — it's coordination, not authoring against a quality target. Persona walkthroughs apply to the rendered pages in MCP-3 onward.)
- Mission AAR appended at kick-off close (separate AARs for each ingest session if useful).

## Not in scope

- Generating the pixel art locally on Stanley's machine. The pipeline is dispatch-and-ingest.
- Applying the assets to specific pages — that happens in MCP-3 (home diptych + role portraits + non-negotiable seals), MCP-4 (track plates), MCP-5 (pilot icons), MCP-6 (resources + contact section plates).
- Animating the pixel art — directive §1 calls for one animated detail per pilot card (lamp flicker, bus rolls past); that's MCP-3 territory.

## AAR

(pending kick-off close)
