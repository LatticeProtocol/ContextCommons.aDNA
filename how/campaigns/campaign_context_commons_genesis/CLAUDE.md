---
type: campaign_governance
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [campaign, genesis, governance]
---

# CLAUDE.md — Campaign: Context Commons Genesis

## Campaign Identity

This is the bootstrap campaign for the Context Commons aDNA vault. The goal is to take the project from raw context dump to fully operational headquarters with a live website, populated context library, and a ready-to-execute plan for Pilot A (Grand Rapids, Q3 2026).

## Context Loading Strategy

### Phase 1 (Foundation) Sessions

Load in order:
1. This file (campaign governance)
2. `campaign_context_commons_genesis.md` (campaign master doc)
3. Active mission file
4. `what/context/program_design/` (the seed topic — ~8K tokens)
5. Relevant inherited context via recipe (e.g., `context_authoring` for writing context files)

### Phase 2+ Sessions

Same as Phase 1, plus:
- Load relevant CC context topics as they become available
- Use CC-specific context recipes from `what/context/context_recipes.md`

## Phase Gate Protocol

Phase gates are human gates (Standing Order #1). At each phase boundary:

1. Report completion status for all missions in the phase
2. List any findings, blockers, or scope changes discovered
3. Present the next phase's missions with updated scope (if changed)
4. **Wait for explicit user approval** before beginning next phase

## Campaign-Specific Rules

1. **Measure token budgets after every context file.** Report actual vs. estimated in session SITREP.
2. **III review every context topic.** Before marking a context ingestion mission complete, run a lightweight III pass (Inspect: accuracy, Introspect: gaps, Improve: fix).
3. **Community content is DRAFT until reviewed.** Any content describing a specific community (Peter's Church, LAUSD, Venice Beach Book Club, UCLA) must be marked DRAFT with `#needs-community-review` tag until a community representative confirms accuracy.
4. **Track planned vs. actual sessions.** Report session count in each mission's AAR. This data informs future campaign planning.

## Mission Index

| Mission | File | Phase | Status |
|---------|------|-------|--------|
| M00 | `missions/mission_cc_m00_campaign_planning.md` | 1 | Completed |
| M01 | `missions/mission_cc_m01_context_program_design.md` | 1 | **Completed** |
| M02 | `missions/mission_cc_m02_context_curriculum_framework.md` | 1 | **Completed** |
| M03 | `missions/mission_cc_m03_context_community_engagement.md` | 1 | **Completed** |
| M04 | `missions/mission_cc_m04_pilot_program_design.md` | 2 | Planned |
| M05 | `missions/mission_cc_m05_use_case_library.md` | 2 | Planned |
| M06 | `missions/mission_cc_m06_adna_for_communities.md` | 2 | Planned |
| M07-M14 | To be created during Phase 1-2 | 3-4 | Planned |
