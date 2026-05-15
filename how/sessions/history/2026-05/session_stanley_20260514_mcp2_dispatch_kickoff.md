---
type: session
created: 2026-05-14
updated: 2026-05-14
last_edited_by: agent_gutenberg
tags: [session, civic_press, mcp2, pixel_art, herb_dispatch, kickoff]
session_id: session_stanley_20260514_mcp2_dispatch_kickoff
user: stanley
started: 2026-05-14
ended: 2026-05-14
status: completed
intent: "MCP-2 Phase A kick-off — dispatch pixel-art prompt-pack authoring to Herb's agent. Ship: coord memo + exemplar prompt + structural template + 37 placeholder PNGs + amended MCP-2 mission (Phase A/B/C/D) + STATE.md tick + commit + push. Out-of-band signal to Herb after push."
plan: "~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md"
mission: "MCP-2 Phase A (campaign_civic_press_redesign)"
persona_for_mission: "(none — coordination work; Herb's agent receives the dispatch)"
scope_declaration: "who/coordination/coord_2026_05_14_civic_press_pixel_prompts_dispatch.md (new); what/pixel_prompts/civic_press/{hero_diptych_grand_rapids.md, _template_prompt.md} (new); site/public/pixel/*.png (37 placeholders, new); how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp2_pixel_art_dispatch.md (amend); STATE.md (tick)."
files_created:
  - who/coordination/coord_2026_05_14_civic_press_pixel_prompts_dispatch.md
  - what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md
  - what/pixel_prompts/civic_press/_template_prompt.md
  - site/public/pixel/hero_diptych_grand_rapids.png
  - site/public/pixel/hero_diptych_los_angeles.png
  - site/public/pixel/section_plate_about.png
  - site/public/pixel/section_plate_curriculum.png
  - site/public/pixel/section_plate_pilots.png
  - site/public/pixel/section_plate_get_involved.png
  - site/public/pixel/section_plate_partners.png
  - site/public/pixel/section_plate_resources.png
  - site/public/pixel/section_plate_contact.png
  - site/public/pixel/role_portrait_youth_builder.png
  - site/public/pixel/role_portrait_steward.png
  - site/public/pixel/role_portrait_elder.png
  - site/public/pixel/role_portrait_mentor.png
  - site/public/pixel/track_plate_core.png
  - site/public/pixel/track_plate_builder.png
  - site/public/pixel/track_plate_steward.png
  - site/public/pixel/track_plate_elder.png
  - site/public/pixel/lifecycle_plate_discovery.png
  - site/public/pixel/lifecycle_plate_scoping.png
  - site/public/pixel/lifecycle_plate_onboarding.png
  - site/public/pixel/lifecycle_plate_active.png
  - site/public/pixel/lifecycle_plate_renewal.png
  - site/public/pixel/pilot_a_icon_medicare_card.png
  - site/public/pixel/pilot_a_icon_ssn_envelope.png
  - site/public/pixel/pilot_a_icon_phone_tree.png
  - site/public/pixel/pilot_a_icon_tape_recorder.png
  - site/public/pixel/pilot_a_icon_prescription_bottle.png
  - site/public/pixel/pilot_a_icon_prayer_book.png
  - site/public/pixel/pilot_b_icon_tutor_notebook.png
  - site/public/pixel/pilot_b_icon_folder_papers.png
  - site/public/pixel/pilot_b_icon_school_form.png
  - site/public/pixel/pilot_b_icon_jacaranda_branch.png
  - site/public/pixel/pilot_b_icon_library_card.png
  - site/public/pixel/pilot_b_icon_lunch_tray.png
  - site/public/pixel/seal_governance_key.png
  - site/public/pixel/seal_knowledge_vault.png
  - site/public/pixel/seal_open_door.png
files_modified:
  - STATE.md
  - how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp2_pixel_art_dispatch.md
notes:
  - "Pre-existing unstaged change videoforge/CLAUDE.md (not mine) — left untouched."
  - "Placeholder PNG generation script (_gen_placeholders.mjs, one-off sharp-based) ran from site/, then deleted. Not committed."
  - "Placeholder text on 96×96 section plates slightly truncates (label is wider than 96px at chosen font-size). Informational only; doesn't affect MCP-3 layout work. Could be tightened in a follow-up if visual quality of placeholders matters."
---

# MCP-2 Phase A: Dispatch Kick-off — session

## Goal

Open the cross-machine dispatch to Herb's agent for pixel-art prompt-pack authoring. Ship everything Herb needs to pull, read, and execute Phase A self-sufficiently: coord memo + canonical exemplar + structural template + scaffolding directory + amended mission file. Also ship 37 placeholder PNGs so MCP-3 layout work isn't blocked while Phase A runs.

## Completed

- **Coord memo** at `who/coordination/coord_2026_05_14_civic_press_pixel_prompts_dispatch.md` addressed to `agent_herb`. Mirrors lattice-labs precedent at `coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md` (frontmatter shape + TL;DR + Why + Phase A Scope + Inputs + Output spec + Boundary rules + Bootstrap protocol + Signal-back protocol (3 redundant signals) + Ack protocol + Critical context + Cross-references). Phase frontmatter key `phase: A` added (non-standard vs. precedent but useful for the 4-phase MCP-2 structure).
- **Canonical exemplar prompt** at `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md` (170 lines). Full instantiation of the 5-section structure: Scene (specific scene description with named place + named characters + props + lighting + mood), Palette tokens (10 tokens from the locked 12-color set with intended-use mappings), Style notes (16-bit lineage + halftone-frame discipline + pixelated rendering + figure-size + light-direction + gesture vocabulary), Alt-text intent (~40 words), Acceptance criteria (6 criteria including palette discipline + figure recognizability + halftone consistency + mood + no-corporate-iconography + single-press-red-instance + lake-blue specificity).
- **Structural template** at `what/pixel_prompts/civic_press/_template_prompt.md` (60 lines). Empty skeleton mirroring the exemplar's frontmatter + 5-section structure with placeholder text and inline guidance. Herb's agent runs `cp _template_prompt.md <asset_name>.md` per asset.
- **Amended MCP-2 mission file** with 4-phase structure (A authoring / B review / C generation / D ingest). Status `planned → phase_a_dispatched`. AAR section opened with Phase A kick-off entry; B/C/D close entries flagged pending.
- **37 placeholder PNGs** in `site/public/pixel/` at native resolutions: 2× hero diptych (1200×600), 7× section plates (96×96), 4× role portraits (96×96), 4× track plates (160×120), 5× lifecycle plates (80×80), 12× pilot icons (48×48), 3× seals (48×48). Total: 37. Solid `--paper` fill + 1px `--ink` hairline + asset-name label in JetBrains Mono. Generated via one-off `_gen_placeholders.mjs` (sharp-based), deleted post-run.
- **Build smoke** green — `npm run build` produces 10 pages + ships all 37 placeholders to `dist/pixel/` (903ms).
- **STATE.md ticked** — `last_session` → this session; Current Phase paragraph reflects "MCP-2 Phase A dispatched; awaiting Herb"; Active Campaigns table P0 status updated; Mission Status table MCP-2 row `Planned → Phase A dispatched (Herb)`; Next Steps reordered (await Herb's return, then Phase B review, then Phase C dispatch).

## Phase-gate outcome

**P0 phase-gate closed at this kick-off** per campaign master doc ("P0 — Scaffolding & decisions: MCP-0, MCP-1, MCP-2 (kick-off)"). Doctrine-integrity check pieces all in place:
- Style sheet locked (MCP-0 ✓)
- Scaffolding components have atom tests (MCP-1 ✓)
- Pixel-art prompt pack dispatched + placeholders on disk (MCP-2 kick-off ✓)

P1 phase-gate (one-sentence test on home page) remains pending until MCP-3 close. MCP-2 Phase A/B/C/D continue in parallel.

## In Progress

None — session closing.

## Next

1. **Out-of-band signal to Herb** — Stanley signals via preferred channel that the dispatch is live and ready to pull. Repo: <https://github.com/LatticeProtocol/ContextCommons.aDNA>; coord memo: `who/coordination/coord_2026_05_14_civic_press_pixel_prompts_dispatch.md`.
2. **Herb's agent executes Phase A** — pulls origin, reads coord memo + 5 input files, files ack-note (optional), authors 37 prompt files mirroring the exemplar, commits to `pixel-prompts-pack`, pushes branch, opens PR, files done-note, flips memo status to `fulfilled`.
3. **Stanley's Phase B review** — next CC session reads `who/coordination/` per Agent Protocol startup step 5, sees Herb's done-note + open PR. Spot-checks 3-5 prompts; merges or requests revisions.
4. **Stanley authors Phase C dispatch** — after Phase B merge, new coord memo for image-generation work.
5. **MCP-3 (home page rebuild)** — can proceed in parallel with Phase A/B/C since placeholders are on disk. Lean: do MCP-3 now while Herb works on prompts.

## Blockers

None.

## Files touched

See `files_created` and `files_modified` frontmatter blocks above (3 markdown deliverables + 37 placeholder PNGs + 2 governance amendments + 1 session file = 43 files).

## Next Session Prompt

Continue `campaign_civic_press_redesign` after MCP-2 Phase A dispatch. On session-start: `git pull` then read `who/coordination/` per Agent Protocol step 5. If Herb's done-note (`note_<YYYYMMDD>_herb_civic_press_pixel_prompts_done.md`) is present + coord memo `status: fulfilled`, run **Phase B review**: `gh pr list` to find the open PR titled `civic_press MCP-2 Phase A: pixel-art prompt pack (Herb-authored)`; `gh pr checkout <num>`; spot-check 3-5 prompts (recommended: 1 hero, 1 section plate, 1 role portrait, 1 pilot icon, 1 seal) against the exemplar `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md` and the style sheet `what/decisions/civic_press_style_sheet.md` (palette tokens are locked at 12 colors; halftone-frame discipline across all; alt-text register ≤25 words for icons, ~40 for heroes); merge to `main` if green, OR comment on the PR with revision requests + update coord memo `status: filed` to signal Herb to revise. After merge, author the **Phase C dispatch** at `who/coordination/coord_2026_05_XX_civic_press_pixel_generation_dispatch.md` referencing the merged prompt pack and specifying return format (PNG at native + 3-4× variants on feature branches `pixel-art-batch-N`). If Herb's done-note is NOT yet present, **MCP-3 home page rebuild** is the parallel-track work — see `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp3_home_page.md` (personas P-02 Pastor Williams + P-03 Youth Builder, two-pass); 37 placeholder PNGs are already on disk at `site/public/pixel/` for Masthead + hero diptych + role portraits + non-negotiable seals slots; D-MICHAEL-BROOKS-LINE + D-BILINGUAL-LANGUAGES resolve formally in MCP-3.

## SITREP

| Field | Value |
|---|---|
| Mission | MCP-2 Phase A (campaign_civic_press_redesign) |
| Persona | (none — coordination work) |
| Status | **Phase A dispatched** |
| Sessions | 1 (kick-off) of 1 estimated |
| Deliverables shipped | coord memo + exemplar prompt + structural template + 37 placeholder PNGs + amended mission file + STATE tick |
| Phase-gate | **P0 closed**; P1 pending (gates at MCP-3 close) |
| Next mission | Phase B review (when Herb signals) OR MCP-3 (parallel) |
| Out-of-band signal pending | **Yes** — Stanley signals Herb after push |
