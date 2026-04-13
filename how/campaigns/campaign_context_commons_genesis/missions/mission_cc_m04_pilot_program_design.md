---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-13
status: completed
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 2
mission_id: M04
session_estimate: 2
tags: [mission, genesis, pilots, design, M04]
---

# Mission M04: Pilot Program Design

## Goal

Create the `pilot_programs` context topic (3 files, ~8K tokens) and draft detailed pilot designs for both Grand Rapids (Pilot A) and Los Angeles (Pilot B). This mission transforms community profiles and curriculum frameworks into concrete, executable pilot plans with timelines, logistics, hardware requirements, budget estimates, and success metrics.

## Dependencies

- M01 (program_design at publication quality)
- M03 (community_engagement topic — partnership model, community requirements)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Create context_cc_pilot_design_principles.md | Principles for pilot design — sovereignty, adaptability, evaluation | **Done** (quality 4.5) |
| O2 | Create context_cc_pilot_evaluation_framework.md | Success metrics, data collection, reporting, iteration methodology | **Done** (quality 4.5) |
| O3 | Create context_cc_pilot_logistics.md | Hardware, space, connectivity, scheduling, budget template | **Done** (quality 4.3) |
| O4 | Draft pilot_a_grand_rapids.md | Detailed Pilot A plan in what/pilots/ | **Done** |
| O5 | Draft pilot_b_los_angeles.md | Detailed Pilot B plan in what/pilots/ | **Done** |
| O6 | III review context files | Quality scores, cross-references | **Done** (avg 4.43) |

## Acceptance Criteria

- [x] 3 pilot_programs context files created (~6.9K tokens — 87% of ~8K estimate)
- [x] Pilot A plan includes: timeline, cohort size, hardware list, budget estimate, success metrics, steward requirements
- [x] Pilot B plan includes same, with adaptations for multi-site distributed model
- [x] Both pilot plans marked DRAFT with `#needs-community-review`
- [x] Evaluation framework includes both quantitative metrics and community-defined success criteria
- [x] Hardware and logistics are explicit (Standing Order #12 — first-class design constraints)

## Context Loading

1. `what/context/program_design/` (all files)
2. `what/context/community_engagement/` (all files)
3. `who/communities/` (both pilot community profiles)
4. `what/context/fundraising/context_cc_fundraising_strategy.md` (budget context)

## Notes

- Standing Order #9: pilots are sovereign. Grand Rapids is not LA. The plans must reflect genuinely different approaches, not copy-paste
- Standing Order #12: hardware and logistics are first-class concerns. Budget for MacBook Neos, internet backup, physical space, scheduling around school/church calendars
- Pilot plans should specify what must be true BEFORE launch (stewards identified, space confirmed, hardware procured, mentors assigned)

## After-Action Review (AAR)

**Completed:** 2026-04-13 | **Session:** session_stanley_20260413_m04_pilot_program_design | **Sessions:** 1 (est. 2)

### Worked
- Seven design principles with "in practice" sections give agents and humans a clear test for pilot compliance
- Three-domain evaluation framework (program metrics, community-defined success, research outcomes) separates accountability from sovereignty
- Logistics file with hardware budget, space matrix, pre-launch checklist is directly usable for pilot preparation
- Pilot A and Pilot B plans are genuinely different — concentrated vs. distributed model, not copy-paste
- Pilot B governance section addresses multi-institutional coordination challenge explicitly (steward council, MOU)

### Didn't Work
- Token estimate was ~8K, actual was ~6.9K (87%) — operational content with many tables is more token-efficient than expected when using concise prose between tables. Revise heuristic: table-heavy operational files at ~2.3K per file, not ~2.7K

### Finding
- Pilot B (LA) required ~60% more content than Pilot A (GR) due to distributed governance complexity, multi-site logistics, and the explicit differences table. Multi-institutional pilots require more documentation, not just more coordination. Budget future multi-institutional deliverables accordingly.

### Change
- Revise per-file token heuristic for table-heavy operational content: ~2.3K per file. Multi-institutional variants: multiply by 1.5-1.6x.

### Follow-up
- M05 (Use Case Domain Library) is next — use cases should map to the capstone domains identified in both pilot plans (healthcare navigation, immigration, education, community coordination, elder care)
- Consider creating a `context_cc_pilot_comparison.md` file during Phase 2 closure that formalizes the Pilot A vs. Pilot B contrast as a reusable reference
