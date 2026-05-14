---
type: session
session_id: session_stanley_20260514_civic_press_workstream_a
created: 2026-05-14
updated: 2026-05-14
status: completed
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

- **2026-05-14 — A1 rename complete.** Vault renamed `context_commons.aDNA` → `ContextCommons.aDNA`. Auto-memory dir migrated. Workspace router patched (5 hits). Internal vault refs patched (6 files, all clean). 21 sibling-vault live references patched (no commits in those repos). 129 remaining hits in historical session/planning files — audit trail, left as-is per plan. **Commit `a7dbbd2`.**
- **2026-05-14 — A2 CLAUDE.md trim complete.** 413 → 284 lines (31% reduction, beat 28% target). v6.0 → v7.0. 4 companion context files created. All 13 operational rule sections preserved intact. **Commit `6068924`.**
- **2026-05-14 — A3-A5 III bootstrap complete.** `iii/CLAUDE.md` wrapper authored; federation_ref pinned to III.aDNA v0.2.0 / commit `5cd210e`; 6 packs + 2 local_extensions declared. `context_commons_iii_persona_registry.md` with 8 personas (P-01..P-08) + Civic Press rotation table. Empty `context_commons_iii_learning_store.jsonl`. **Commit `fb3df49`.**
- **2026-05-14 — A6 GitHub remote setup complete.** Renamed repo `LatticeProtocol/context-commons-adna` → `LatticeProtocol/ContextCommons.aDNA` via `gh repo rename`. Local origin URL updated. 3 new commits pushed (a7dbbd2, 6068924, fb3df49). Visibility flipped PRIVATE → PUBLIC per locked plan decision. Remote now at https://github.com/LatticeProtocol/ContextCommons.aDNA.
- **2026-05-14 — A7 STATE.md tick complete.** Current Phase rewritten; Active Campaigns table now lists both genesis (Suspended) and civic_press (Active). Mission Status table expanded with MCP-0..MCP-7. M09 + M10 frontmatter updated `status: planned` → `status: paused` with explicit resume condition. Next Steps reframed around Workstream B.

## Workstream A SITREP

**Completed (A1-A7):**
- Vault rename + cross-vault sweep (21 sibling-vault edits left uncommitted in those repos)
- CLAUDE.md aggressive trim 413 → 284 lines + 4 companion files
- iii/ wrapper bootstrap (federation_ref + 6 packs + 2 local_extensions)
- 8-persona registry extracted from M08-R + Civic Press rotation table
- Empty learning store JSONL initialized
- GitHub repo rename + visibility flip to PUBLIC + 3 commits pushed
- STATE.md ticked + M09/M10 paused

**Files touched (CC vault, committed):** CLAUDE.md, MANIFEST.md, STATE.md, siteforge/MANIFEST.md, presentationforge/MANIFEST.md + lattice yaml, videoforge/MANIFEST.md, M09/M10 mission frontmatter, this session file, 4 new companion context files, 3 new iii/ files.

**Files touched (sibling vaults, uncommitted in those repos for Stanley's batch review):** III.aDNA/STATE.md; SiteForge.aDNA MANIFEST/CLAUDE/STATE/iii/CLAUDE + 2 artifact files; WilhelmAI.aDNA MANIFEST/CLAUDE + voice mapping + coord memo + ADR-000 + 2 partner pages; VideoForge.aDNA CLAUDE/MANIFEST/STATE + airlock + skill + 2 campaign CLAUDE.md.

**Files touched (workspace, untracked):** /Users/stanley/lattice/CLAUDE.md (workspace router; 5 hits patched).

**Blockers:** None.

**Next up:** Workstream B — open `campaign_civic_press_redesign` at `how/campaigns/campaign_civic_press_redesign/`. Author charter + 8-mission roster + decision register. Then MCP-0 (design tokens + style sheet).

## Next Session Prompt

> Civic Press Workstream B — open the new campaign. Author `how/campaigns/campaign_civic_press_redesign/campaign_civic_press_redesign.md` with: charter, four-phase structure (P0 scaffolding / P1 home / P2 subpages / P3 ship), 8-mission roster (MCP-0..MCP-7) seeded from the plan at `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`, and decision register with three locked decisions (FOSS fonts only / Herb-dispatch pixel art / new-campaign frame) and five open ones (D-FONT-PAIRING-FINAL, D-COLOR-TOKENS, D-MICHAEL-BROOKS-LINE, D-BILINGUAL-LANGUAGES, D-PHYSICAL-ADDRESS). Workstream A is on the public remote at https://github.com/LatticeProtocol/ContextCommons.aDNA; pull before starting. The Civic Press doctrine briefs (home page + system-wide) are in the plan-file context section. Workstream A SITREP lives at `how/sessions/history/2026-05/session_stanley_20260514_civic_press_workstream_a.md` after this session closes.
