---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-12
status: planned
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
| O1 | Create context_cc_pilot_design_principles.md | Principles for pilot design — sovereignty, adaptability, evaluation | Planned |
| O2 | Create context_cc_pilot_evaluation_framework.md | Success metrics, data collection, reporting, iteration methodology | Planned |
| O3 | Create context_cc_pilot_logistics.md | Hardware, space, connectivity, scheduling, budget template | Planned |
| O4 | Draft pilot_a_grand_rapids.md | Detailed Pilot A plan in what/pilots/ | Planned |
| O5 | Draft pilot_b_los_angeles.md | Detailed Pilot B plan in what/pilots/ | Planned |
| O6 | III review context files | Quality scores, cross-references | Planned |

## Acceptance Criteria

- [ ] 3 pilot_programs context files created (~8K tokens total)
- [ ] Pilot A plan includes: timeline, cohort size, hardware list, budget estimate, success metrics, steward requirements
- [ ] Pilot B plan includes same, with adaptations for multi-site distributed model
- [ ] Both pilot plans marked DRAFT with `#needs-community-review`
- [ ] Evaluation framework includes both quantitative metrics and community-defined success criteria
- [ ] Hardware and logistics are explicit (Standing Order #12 — first-class design constraints)

## Context Loading

1. `what/context/program_design/` (all files)
2. `what/context/community_engagement/` (all files)
3. `who/communities/` (both pilot community profiles)
4. `what/context/fundraising/context_cc_fundraising_strategy.md` (budget context)

## Notes

- Standing Order #9: pilots are sovereign. Grand Rapids is not LA. The plans must reflect genuinely different approaches, not copy-paste
- Standing Order #12: hardware and logistics are first-class concerns. Budget for MacBook Neos, internet backup, physical space, scheduling around school/church calendars
- Pilot plans should specify what must be true BEFORE launch (stewards identified, space confirmed, hardware procured, mentors assigned)
