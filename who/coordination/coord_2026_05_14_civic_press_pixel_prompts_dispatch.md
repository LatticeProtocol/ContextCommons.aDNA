---
type: coordination
coord_id: coord_2026_05_14_civic_press_pixel_prompts_dispatch
authored_by: agent_stanley
filed_by_persona: gutenberg
created: 2026-05-14
updated: 2026-05-14
last_edited_by: agent_stanley
status: filed
targets: [agent_herb]
opens_campaign: campaign_civic_press_redesign
opens_mission: mission_cc_mcp2_pixel_art_dispatch
phase: A
tags: [coordination, dispatch, pixel_art, herb_dispatch, civic_press, mcp2, prompt_pack_authoring, first_dispatch_to_herb_in_contextcommons]
---

# Cross-Machine Dispatch — Herb · Context Commons Civic Press Pixel-Art Prompt Pack (MCP-2 Phase A)

## TL;DR

Civic Press campaign needs ~37 pixel-art assets for the website rebuild (hero diptychs, section plates, role portraits, track plates, lifecycle plates, pilot icons, three seals). MCP-2 has been reshaped from "Stanley authors prompts; Herb generates images" to **"Herb authors prompts; Stanley reviews; Herb generates images"** so we get a checkpoint after authoring but before image generation commits resources. **This memo dispatches Phase A — prompt-pack authoring — to Herb's agent.** Success is 37 markdown prompt files + INDEX + INGEST_LOG, on a feature branch, with a PR open to `main` and a done-note filed back to this directory.

## Why this dispatch exists

The Civic Press rebuild is a complete visual-doctrine reset. The directive (Stanley's two-part design brief carried in the plan file) is specific about scenes — Peter's Church fellowship hall at dusk, Venice Beach Book Club back room, Mrs. Johnson's kitchen table — and prompt authoring against those specifics is the load-bearing creative judgment in this campaign. Herb's agent specializes in visual + cross-vault work and is the right operator for that judgment.

The reshape gives Stanley a low-cost review checkpoint: if a prompt mis-reads a scene or palette discipline, it costs ~5 min to revise the markdown vs. ~5 min of GPU time per re-generated PNG. Catching authoring drift in markdown is the cheapest place to catch it.

This is also the **first cross-machine dispatch to Herb against `ContextCommons.aDNA`**. The repo was made PUBLIC during Workstream A (2026-05-14) specifically to enable this pattern. Future dispatches (MCP-2 Phase C image generation; any later CC↔Herb work) can use this memo as the precedent.

## Phase A scope

| Deliverable | Path | Count |
|---|---|---:|
| Per-asset prompt files | `what/pixel_prompts/civic_press/<asset_name>.md` | 37 |
| Index | `what/pixel_prompts/civic_press/INDEX.md` | 1 |
| Ingest log | `what/pixel_prompts/civic_press/INGEST_LOG.md` | 1 |

Each prompt file mirrors the **canonical exemplar** at `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md` — same frontmatter keys, same five sections (Scene / Palette tokens / Style notes / Alt-text intent / Acceptance criteria). The 37 asset names and scene gists come from the **mission file** at `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp2_pixel_art_dispatch.md` § "Assets to Generate". Use the structural template at `what/pixel_prompts/civic_press/_template_prompt.md` as a starting skeleton (`cp _template_prompt.md <asset_name>.md`).

The 37-asset roster (verbatim from mission file):

1. **Hero diptych** (2 pieces, full-bleed ~1200×600): `hero_diptych_grand_rapids`, `hero_diptych_los_angeles`
2. **Section plates** (7 pieces, 96×96, halftone-frame): `section_plate_about`, `section_plate_curriculum`, `section_plate_pilots`, `section_plate_get_involved`, `section_plate_partners`, `section_plate_resources`, `section_plate_contact`
3. **Role portraits** (4 pieces, 96×96): `role_portrait_youth_builder`, `role_portrait_steward`, `role_portrait_elder`, `role_portrait_mentor`
4. **Track plates** (4 pieces, 160×120): `track_plate_core`, `track_plate_builder`, `track_plate_steward`, `track_plate_elder`
5. **Lifecycle plates** (5 pieces, 80×80, partner-engagement procession): `lifecycle_plate_discovery`, `lifecycle_plate_scoping`, `lifecycle_plate_onboarding`, `lifecycle_plate_active`, `lifecycle_plate_renewal`
6. **Pilot icons** (12 pieces, 48×48):
   - Grand Rapids set: `pilot_a_icon_medicare_card`, `pilot_a_icon_ssn_envelope`, `pilot_a_icon_phone_tree`, `pilot_a_icon_tape_recorder`, `pilot_a_icon_prescription_bottle`, `pilot_a_icon_prayer_book`
   - Los Angeles set: `pilot_b_icon_tutor_notebook`, `pilot_b_icon_folder_papers`, `pilot_b_icon_school_form`, `pilot_b_icon_jacaranda_branch`, `pilot_b_icon_library_card`, `pilot_b_icon_lunch_tray`
7. **Three seals** (3 pieces, 48×48): `seal_governance_key`, `seal_knowledge_vault`, `seal_open_door`

## Inputs Herb's agent must read

| # | File | Why |
|---|---|---|
| 1 | `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp2_pixel_art_dispatch.md` | Asset roster + scene gists + per-prompt structure spec |
| 2 | `what/decisions/civic_press_style_sheet.md` | **LOCKED** palette (12-color `--pixel-*`); halftone-frame discipline; FOSS type pairing for any text-in-image elements |
| 3 | `how/campaigns/campaign_civic_press_redesign/CLAUDE.md` | Campaign governance + persona register + don'ts |
| 4 | `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md` | **Canonical exemplar** — match this structure exactly |
| 5 | `what/pixel_prompts/civic_press/_template_prompt.md` | Empty skeleton; `cp` and fill |
| 6 | `STATE.md` | Current campaign phase + recent context |

## Output spec per prompt file

Frontmatter:

```yaml
---
type: pixel_art_prompt
asset_id: <asset_name>          # matches filename without .md
status: ready_for_generation    # signals Phase B can review and Phase C can pick up
native_resolution: <WIDTHxHEIGHT>
scaled_variants: [2x, 3x, 4x]
palette_tokens: [<list of --pixel-* tokens used in this asset>]
target_path: site/public/pixel/<asset_name>.png
created: <YYYY-MM-DD>
last_edited_by: agent_herb
campaign: campaign_civic_press_redesign
mission: MCP-2 (Phase A)
tags: [pixel_art, prompt, civic_press, <group_tag>, <asset_specific_tags>]
---
```

Sections (mirror exemplar verbatim):
- **Scene** — 1-2 specific sentences describing what the image shows. Concrete subjects, named places where applicable, lighting, mood.
- **Palette tokens** — list each `--pixel-*` token used with its intended use (e.g., `--pixel-amber: interior lamp glow`). Only tokens from the locked 12-color palette.
- **Style notes** — 16-bit civic pixel art; halftone-frame surround; `image-rendering: pixelated`; no anti-aliasing outside palette; no drop shadows; consistent figure size relative to scene.
- **Alt-text intent** — what a screen reader announces. Specific, not generic. Aim for ≤25 words.
- **Acceptance criteria** — palette discipline (zero non-palette pixels); subject recognizability at 100% scale; halftone consistency with peer assets; mood/scene-read fidelity.

## INDEX.md format

One row per asset: `| asset_id | group | native_resolution | status |`. Six groups (hero/section/role/track/lifecycle/pilot/seal). Status starts as `prompt_authored` (Phase A output) — flips to `image_generated` at Phase C close and `ingested` at Phase D close.

## INGEST_LOG.md format

One row per asset: `| asset_name | status: placeholder \| prompt_authored \| in_review \| image_generated \| ingested | ingested_at | commit_sha |`. At Phase A close, all 37 rows read `prompt_authored`. Placeholders ship from Stanley side (kick-off, 2026-05-14); image generation lands at Phase C; ingest finalizes the row.

## Boundary rules — "Don't break Stanley's work"

Herb's agent MAY:
- Create files under `what/pixel_prompts/civic_press/`
- Create files under `who/coordination/` matching the ack/done note pattern
- Update this coord memo's `status:` and `updated:` fields

Herb's agent MUST NOT touch:
- `site/` (Stanley's domain; placeholders already shipped)
- `iii/` (Stanley's III wrapper + learning store)
- `STATE.md`, `CLAUDE.md`, any campaign master doc, any mission file
- `what/decisions/civic_press_style_sheet.md` (palette is locked)
- The exemplar file `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md` (Stanley-authored canonical pattern)
- Any token CSS or component file
- The structural template `_template_prompt.md` (treat as read-only; copy to new files)

If Herb's agent finds a **genuine quality issue** with the exemplar, asset roster, or palette discipline, surface it in the done-note rather than editing source. Stanley reviews at Phase B and applies fixes.

## Bootstrap protocol (Herb's agent — session-start checklist)

1. `git pull` in `~/lattice/ContextCommons.aDNA/` (if a clone exists; otherwise `git clone https://github.com/LatticeProtocol/ContextCommons.aDNA.git ~/lattice/ContextCommons.aDNA`)
2. `git log --oneline -10` — should show `2624333` (MCP-1) and the dispatch commit at HEAD
3. Read this coord memo
4. **File ack note** at `who/coordination/note_<YYYYMMDD>_herb_civic_press_pixel_prompts_ack.md` (urgency: info, body: "Acknowledged. Starting Phase A prompt-pack authoring.")
5. Flip this memo's `status: filed` → `status: executing` and update `updated:` date; commit
6. Read the 6 inputs listed above
7. Create branch: `git checkout -b pixel-prompts-pack`
8. For each of 37 assets: `cp what/pixel_prompts/civic_press/_template_prompt.md what/pixel_prompts/civic_press/<asset_name>.md`, then fill frontmatter + 5 sections per the exemplar pattern
9. Author `INDEX.md` (37 rows) and `INGEST_LOG.md` (37 rows, status `prompt_authored`)
10. Commit: `civic_press MCP-2 Phase A: pixel-art prompt pack (Herb-authored)`
11. Push branch: `git push -u origin pixel-prompts-pack`
12. Open PR on GitHub against `main`, title `civic_press MCP-2 Phase A: pixel-art prompt pack (Herb-authored)`. Body: one-paragraph summary + list of 37 assets + cross-reference to this coord memo
13. **File done-note** at `who/coordination/note_<YYYYMMDD>_herb_civic_press_pixel_prompts_done.md` (urgency: info, body: "Phase A complete; 37 prompt files at `pixel-prompts-pack`; PR #X; ready for Stanley review.")
14. Flip this memo's `status: executing` → `status: fulfilled`; commit; push

Estimated effort: 1 session for the prompt-pack authoring (37 prompts × ~3-5 min each + index + log + memo updates).

## Signal-back protocol (three signals; redundant by design)

Stanley's next session against `ContextCommons.aDNA` reads `who/coordination/` per Agent Protocol startup step 5 and will see:

1. **PR on GitHub** — Stanley's GitHub notifications surface this; `gh pr list` shows it locally
2. **Done-note file** — `note_<YYYYMMDD>_herb_civic_press_pixel_prompts_done.md` appears in `who/coordination/`
3. **Coord-memo status update** — this memo's `status:` field reads `fulfilled`

Any one of the three is sufficient. The three together mean Stanley cannot miss the handoff regardless of which channel his next session opens with.

## Ack protocol

The ack-note (step 4 above) is a **recommended-but-not-mandatory** acknowledgement. Its purpose is to flip the memo's status to `executing` so Stanley (or any concurrent agent) can see at a glance that Herb's agent is mid-work. If Herb's agent skips the ack and goes straight to authoring, that's acceptable — the done-note alone is a sufficient signal.

## Critical context to carry forward

- **Palette is LOCKED** at D-COLOR-TOKENS (MCP-0, signed 2026-05-14). The 12-color `--pixel-*` palette is non-negotiable. Every prompt's "Palette tokens" section must reference only tokens from this set. See `what/decisions/civic_press_style_sheet.md` § "The Pixel Palette".
- **Halftone-frame discipline** — every commissioned PNG carries a halftone-frame surround per directive §0. This is a style consistency requirement across all 37 assets — single artist, single palette, single style.
- **Single-artist illusion** — figure size relative to scene, line-weight, lighting register, and gesture vocabulary should read as "the same hand made all 37." Prompts must be specific enough that Phase C generation produces consistent output.
- **Don't ship pixel art Stanley hasn't approved** (per campaign CLAUDE.md). Phase A delivers prompts only. Phase B is Stanley's review checkpoint. Phase C image generation happens against the approved prompts, not raw drafts.
- **MCP-1 dependency satisfied** — `SectionOpener.astro` accepts a `plate` slot; `site/public/pixel/<asset_name>.png` placeholder PNGs already ship in this dispatch commit so MCP-3+ layout work isn't blocked while Phase A authoring is in flight.
- **First-dispatch precedent** — this is the first cross-machine handoff in `ContextCommons.aDNA`. Future dispatches (MCP-2 Phase C, any later) can use this memo as the precedent and either append a successor memo or evolve the pattern.

## Status

`status: filed` — ready for Herb's agent to pull and ack.

After ack: `status: executing`. After done-note + PR: `status: fulfilled`.

## Cross-references

- Mission file: `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp2_pixel_art_dispatch.md` (amended in this commit)
- Style sheet: `what/decisions/civic_press_style_sheet.md`
- Campaign CLAUDE.md: `how/campaigns/campaign_civic_press_redesign/CLAUDE.md` § "Pixel-Art Dispatch to Herb"
- Exemplar prompt: `what/pixel_prompts/civic_press/hero_diptych_grand_rapids.md`
- Structural template: `what/pixel_prompts/civic_press/_template_prompt.md`
- Coord-memo format precedent: `~/lattice/lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md`
- Local coordination format: `who/coordination/AGENTS.md`
- Public remote: <https://github.com/LatticeProtocol/ContextCommons.aDNA>
- Plan: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`
- Session: `how/sessions/active/session_stanley_20260514_mcp2_dispatch_kickoff.md` (active during kick-off; moves to `history/2026-05/` at close)
