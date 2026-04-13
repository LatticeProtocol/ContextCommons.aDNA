---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-12
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 1
mission_id: M01
session_estimate: 2
tags: [mission, genesis, context, program_design, M01]
---

# Mission M01: Context Ingestion — Program Design (Deepen Seeds)

## Goal

Take the 4 seeded program_design context files from their current state (~13.7K tokens) to publication quality through structured III (Inspect-Introspect-Improve) review cycles. Create the `adna_for_communities` context topic (2 files, ~5K tokens) — the translational layer that explains aDNA in plain language for non-technical community members.

## Dependencies

- M00 (completed — provides community profiles, partner profiles, and council charter as reference material)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | III review: context_cc_thesis.md | Reviewed file with quality scores in frontmatter | Planned |
| O2 | III review: context_cc_core_principles.md | Reviewed file with quality scores | Planned |
| O3 | III review: context_cc_program_architecture.md | Reviewed file with quality scores | Planned |
| O4 | III review: context_cc_governance_model.md | Reviewed file with quality scores | Planned |
| O5 | Create adna_for_communities topic | 2 files: context_adna_simplified.md, context_lattice_for_communities.md | Planned |
| O6 | Measure actual token budgets | Token counts per file, update AGENTS.md and context_recipes.md | Planned |

## Acceptance Criteria

- [ ] All 4 program_design files pass III review (no axis ≤ 2 on quality rubric)
- [ ] adna_for_communities topic created with 2 files (~5K tokens)
- [ ] Token budgets measured and recorded in topic AGENTS.md files
- [ ] Cross-references between program_design and adna_for_communities established

## Context Loading

1. `what/context/program_design/` (all files)
2. `how/skills/skill_context_quality_audit.md` (III review rubric)
3. Community profiles from `who/communities/` (reference for accessibility check)

## Notes

- The III review should test each file against the "would a community steward understand this?" bar
- adna_for_communities is the critical translational layer — if this doesn't work for non-technical readers, the program cannot onboard communities
- Token budgets matter for context loading strategy — report actual vs. estimated
