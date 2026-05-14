---
type: session
session_id: session_stanley_20260514_civic_press_workstream_a
created: 2026-05-14
updated: 2026-05-14
status: active
operator: stanley
agent: gutenberg
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign (pending open at B1)
mission: workstream_a (pre-campaign vault hygiene)
tier: 2
tags: [session, civic_press, vault_hygiene, iii_bootstrap, rename]
---

# Session — Civic Press Workstream A (vault hygiene + III bootstrap + remote setup)

## Intent

Execute Workstream A of the plan at `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`:

- **A1** — rename `context_commons.aDNA` → `ContextCommons.aDNA` (workspace + cross-vault live refs + auto-memory dir)
- **A2** — trim CLAUDE.md from 413 → ~280-300 lines (move Forge Federation, Standing Orders 6-12, Domain Knowledge section, etc., to companion files)
- **A3** — bootstrap `iii/` wrapper via `III.aDNA/how/skills/skill_iii_setup.md`
- **A4** — extract 8 M08-R personas into `iii/what/context/context_commons_iii_persona_registry.md`
- **A5** — initialize empty `iii/what/context/context_commons_iii_learning_store.jsonl`
- **A6** — GitHub remote setup (existing repo `LatticeProtocol/context-commons-adna` may need rename to match new convention)
- **A7** — STATE.md tick + pause M09/M10 in genesis campaign

## Scope declaration

Files this session expects to modify:

**Inside CC vault:**
- `CLAUDE.md` (rename patches + aggressive trim)
- `MANIFEST.md` (rename patch)
- `STATE.md` (A7 tick)
- `siteforge/MANIFEST.md` + `presentationforge/MANIFEST.md` + `presentationforge/what/lattices/lattice_cc_presentation.lattice.yaml` + `videoforge/MANIFEST.md` (rename patches)
- `what/context/about_forges.md` (NEW)
- `what/context/program_design/context_cc_standing_orders_program.md` (NEW)
- `what/context/program_design/context_cc_domain_knowledge.md` (NEW)
- `iii/CLAUDE.md` + `iii/what/context/context_commons_iii_persona_registry.md` + `iii/what/context/context_commons_iii_learning_store.jsonl` (NEW)
- `how/campaigns/campaign_context_commons_genesis/missions/mission_cc_m09_videoforge_setup.md` + `_m10_*` (A7 status pause)

**Outside CC vault (edited but NOT committed in those repos):**
- `/Users/stanley/lattice/CLAUDE.md` (workspace router — not tracked in any repo)
- 21 sibling-vault live-reference files across III.aDNA, SiteForge.aDNA, WilhelmAI.aDNA, VideoForge.aDNA. Stanley reviews + commits in those repos when ready.

## Conflict scan

Pre-existing uncommitted change in `videoforge/CLAUDE.md` (8 lines) — NOT mine, will not be touched or included in any commit.

No active sessions in `how/sessions/active/` before this one.

## Progress log

- **2026-05-14 — A1 rename complete.** Vault renamed `context_commons.aDNA` → `ContextCommons.aDNA`. Auto-memory dir migrated. Workspace router patched (5 hits). Internal vault refs patched (6 files, all clean). 21 sibling-vault live references patched (no commits in those repos). 129 remaining hits in historical session/planning files — audit trail, left as-is per plan.

## Next actions

- A2: CLAUDE.md trim
- A3-A5: III bootstrap
- A6: GitHub remote setup (existing repo `context-commons-adna` — likely rename to match `ContextCommons.aDNA`)
- A7: STATE.md tick + M09/M10 pause + commit
