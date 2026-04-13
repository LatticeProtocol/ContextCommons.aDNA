---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-12
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 1
mission_id: M02
session_estimate: 2
tags: [mission, genesis, context, curriculum, M02]
---

# Mission M02: Context Ingestion — Curriculum Framework

## Goal

Create the `curriculum_framework` context topic (5 files, ~10K tokens) — the detailed curriculum structure that defines track progressions, module sequences, competency milestones, and assessment approaches. This is the intellectual backbone of the program — the curriculum IS a context graph (Standing Order #8).

## Dependencies

- M01 (program_design files at publication quality; adna_for_communities exists)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Create context_cc_track_structures.md | Core, Builder, Steward, Elder track definitions with progression paths | Planned |
| O2 | Create context_cc_module_template.md | Standard module format, learning objectives, assessment criteria | Planned |
| O3 | Create context_cc_competency_milestones.md | Per-track milestone definitions with rubrics | Planned |
| O4 | Create context_cc_pedagogy.md | Teaching philosophy, facilitation approaches, intergenerational methods | Planned |
| O5 | Create context_cc_assessment_framework.md | Evaluation methods — portfolio, capstone, peer review, community validation | Planned |
| O6 | III review all 5 files | Quality scores in frontmatter, cross-references established | Planned |

## Acceptance Criteria

- [ ] 5 curriculum_framework context files created (~10K tokens total)
- [ ] All files pass III review (no axis ≤ 2)
- [ ] Track structures align with program architecture (4 tracks: Core, Builder, Steward, Elder)
- [ ] Module template demonstrates self-referentiality (curriculum as context graph)
- [ ] Cross-references to program_design, adna_for_communities, and Curriculum Council charter

## Context Loading

1. `what/context/program_design/` (all files — curriculum must align with architecture)
2. `who/governance/governance_curriculum_council_charter.md` (Council mandate shapes curriculum)
3. `what/context/adna_for_communities/` (translational layer for Elder track)

## Notes

- Standing Order #8: the curriculum IS a context graph. Module definitions should model the aDNA standard they teach
- The pedagogy file should address intergenerational teaching dynamics — youth teaching elders is not the same as adults teaching children
- Assessment must include community validation — a capstone isn't complete until the community member it serves confirms it works
