---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-13
status: completed
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 1
mission_id: M02
session_estimate: 2
session_actual: 1
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
| O1 | Create context_cc_track_structures.md | Core, Builder, Steward, Elder track definitions with progression paths | **Completed** |
| O2 | Create context_cc_module_template.md | Standard module format, learning objectives, assessment criteria | **Completed** |
| O3 | Create context_cc_competency_milestones.md | Per-track milestone definitions with rubrics | **Completed** |
| O4 | Create context_cc_pedagogy.md | Teaching philosophy, facilitation approaches, intergenerational methods | **Completed** |
| O5 | Create context_cc_assessment_framework.md | Evaluation methods — portfolio, capstone, peer review, community validation | **Completed** |
| O6 | III review all 5 files | Quality scores in frontmatter, cross-references established | **Completed** |

## Acceptance Criteria

- [x] 5 curriculum_framework context files created (~9.2K tokens actual vs ~10K estimated)
- [x] All files pass III review (no axis ≤ 2) — avg composite 4.2, zero floor violations
- [x] Track structures align with program architecture (4 tracks: Core, Builder, Steward, Elder)
- [x] Module template demonstrates self-referentiality (curriculum as context graph)
- [x] Cross-references to program_design, adna_for_communities, and Curriculum Council charter

## Quality Scores Summary

| File | Signal | Action | Coverage | Sources | Coherence | Composite | Freshness |
|------|--------|--------|----------|---------|-----------|-----------|-----------|
| context_cc_pedagogy.md | 4 | 4 | 4 | 4 | 4 | **4.0** | durable |
| context_cc_track_structures.md | 4 | 5 | 4 | 4 | 5 | **4.2** | stable |
| context_cc_module_template.md | 4 | 5 | 4 | 4 | 5 | **4.4** | stable |
| context_cc_competency_milestones.md | 5 | 5 | 4 | 4 | 4 | **4.2** | stable |
| context_cc_assessment_framework.md | 4 | 5 | 4 | 4 | 4 | **4.2** | stable |

Average composite: **4.2** (up from 3.8 in M01). Source diversity improved to 4 across all files by including external academic sources during initial authoring (M01 finding applied). Zero floor violations.

## Token Budget Reconciliation

| File | Estimated | Measured (chars/4) |
|------|----------|--------------------|
| context_cc_pedagogy.md | ~2,000 | ~1,550 |
| context_cc_track_structures.md | ~2,000 | ~1,950 |
| context_cc_module_template.md | ~2,000 | ~1,700 |
| context_cc_competency_milestones.md | ~2,000 | ~2,000 |
| context_cc_assessment_framework.md | ~2,000 | ~2,000 |
| **curriculum_framework total** | **~10,000** | **~9,200** |

Actual vs estimated: 92% of estimate. Closer than M01 (65%) — the chars/4 estimation method is calibrating well.

## Context Loading

1. `what/context/program_design/` (all files — curriculum must align with architecture)
2. `who/governance/governance_curriculum_council_charter.md` (Council mandate shapes curriculum)
3. `what/context/adna_for_communities/` (translational layer for Elder track)

## Notes

- Standing Order #8: the curriculum IS a context graph. Module definitions should model the aDNA standard they teach
- The pedagogy file should address intergenerational teaching dynamics — youth teaching elders is not the same as adults teaching children
- Assessment must include community validation — a capstone isn't complete until the community member it serves confirms it works

## AAR (After Action Review)

**Worked**: Including academic sources during initial authoring (M01 finding) paid off — source diversity is now 4 across all files (up from 3 in M01). The adapted Bloom's taxonomy for agentic literacy (Identify → Build → Deploy) and the Dreyfus skill acquisition model (Developing → Proficient → Exemplary) give the milestones and module template concrete, well-grounded rubric frameworks. Single-session completion held (est. 2, actual 1).

**Didn't work**: Token budget came in at ~9.2K against a ~10K estimate — closer than M01 (92% vs 65%) but still overestimated. The files are information-dense; cutting them would sacrifice signal density. The estimate was reasonable; the content just compressed well into tables.

**Finding**: Actionability scores are consistently high (4-5) when content is structured as tables with specific IDs, dates, criteria, and cross-references rather than prose paragraphs. The milestones file (all tables, all specific) scored 5/5 on both signal density and actionability. The pedagogy file (more prose by nature) scored 4/4. For future context files, lead with tables and use prose only for philosophy and rationale sections.

**Change**: For M03 (Community Engagement), continue the source-first authoring pattern and table-first structure. Community engagement content will be closer to program_design in nature (more relational, less procedural) — expect actionability closer to 4 than 5, which is appropriate for the domain.

**Follow-up**: M03 (Context Ingestion: Community Engagement) is the last foundation mission. After M03, Phase 1 is complete and a phase gate review with the user is required per Standing Order #1.
