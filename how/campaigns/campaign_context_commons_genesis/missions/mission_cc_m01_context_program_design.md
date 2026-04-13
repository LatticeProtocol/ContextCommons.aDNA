---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-12
status: completed
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 1
mission_id: M01
session_estimate: 2
session_actual: 1
tags: [mission, genesis, context, program_design, M01]
---

# Mission M01: Context Ingestion — Program Design (Deepen Seeds)

## Goal

Take the 4 seeded program_design context files from their current state to publication quality through structured III (Inspect-Introspect-Improve) review cycles. Create the `adna_for_communities` context topic (2 files) — the translational layer that explains aDNA in plain language for non-technical community members.

## Dependencies

- M00 (completed — provides community profiles, partner profiles, and council charter as reference material)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | III review: context_cc_thesis.md | Reviewed file with quality scores (3.8) | **Completed** |
| O2 | III review: context_cc_core_principles.md | Reviewed file with quality scores (3.8) | **Completed** |
| O3 | III review: context_cc_program_architecture.md | Reviewed file with quality scores (3.8) | **Completed** |
| O4 | III review: context_cc_governance_model.md | Reviewed file with quality scores (3.8) | **Completed** |
| O5 | Create adna_for_communities topic | 2 files + AGENTS.md created (~3.5K tokens, DRAFT) | **Completed** |
| O6 | Measure actual token budgets | Budgets measured, cascaded through 7 files | **Completed** |

## Acceptance Criteria

- [x] All 4 program_design files pass III review (no axis ≤ 2 on quality rubric) — all at 3.8 composite, floor rule passes
- [x] adna_for_communities topic created with 2 files (~3.5K tokens actual vs ~5K estimated)
- [x] Token budgets measured and recorded in topic AGENTS.md files
- [x] Cross-references between program_design and adna_for_communities established

## Quality Scores Summary

| File | Signal | Action | Coverage | Sources | Coherence | Composite | Freshness |
|------|--------|--------|----------|---------|-----------|-----------|-----------|
| context_cc_thesis.md | 4 | 3 | 4 | 3 | 5 | **3.8** | durable |
| context_cc_core_principles.md | 4 | 4 | 4 | 3 | 4 | **3.8** | durable |
| context_cc_program_architecture.md | 4 | 4 | 4 | 3 | 4 | **3.8** | stable |
| context_cc_governance_model.md | 4 | 4 | 4 | 3 | 4 | **3.8** | stable |

Source diversity (3) is the weakest axis across all files — inherent to original program design content. External references added (Freire, Costanza-Chock, Lave & Wenger, Kafai & Burke, Ostrom, Eubanks, Couldry & Mejias, Zuckerman) provide academic grounding.

## Token Budget Reconciliation

| File | Previous Estimate | Measured (chars/4) |
|------|------------------|--------------------|
| context_cc_thesis.md | ~3,200 | ~2,000 |
| context_cc_core_principles.md | ~3,500 | ~2,000 |
| context_cc_program_architecture.md | ~4,000 | ~2,500 |
| context_cc_governance_model.md | ~3,000 | ~2,500 |
| **program_design total** | **~13,700** | **~9,000** |
| context_adna_simplified.md | — (new) | ~1,500 |
| context_lattice_for_communities.md | — (new) | ~2,000 |
| **adna_for_communities total** | **~5,000 (est)** | **~3,500** |

Key finding: Previous estimates were inflated ~50%. The chars/4 method (counting actual file characters divided by 4) is more reliable than word-count-based estimation for markdown content with YAML frontmatter.

## AAR (After Action Review)

**Worked**: The III review process with the 6-axis rubric is effective — it identified real gaps (missing enforcement mechanisms, absent dispute resolution, incomplete accessibility coverage) and the floor rule on source diversity forced meaningful improvement (adding academic citations). Single-session completion again (est. 2, actual 1).

**Didn't work**: Token estimates from M00 were significantly inflated (~13.7K claimed vs ~9K actual for program_design). The estimation method matters — word count × 1.3 significantly underestimates compared to chars/4 for markdown content.

**Finding**: Source diversity is the systemic weak axis for original program design content (all files scored 2 pre-improvement, 3 post-improvement). This will likely repeat in M02-M03. External academic references are available and genuinely strengthen the files — they should be incorporated during initial authoring, not only during review.

**Change**: For M02-M06, include external source references during initial file creation rather than waiting for III review to flag the gap. Adopt chars/4 as the standard token estimation method.

**Follow-up**: adna_for_communities files are DRAFT and need community review per Standing Order #7. M06 will deepen these files — the seeds from M01 are solid structurally but need non-technical reader validation.
