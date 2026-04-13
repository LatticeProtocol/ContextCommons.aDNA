---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-12
status: planned
last_edited_by: agent_stanley
campaign: campaign_context_commons_genesis
phase: 1
mission_id: M00
session_estimate: 2-3
tags: [mission, genesis, planning, M00]
---

# Mission M00: Campaign Planning & Project Buildout

## Goal

Review, refine, and operationalize the genesis campaign plan. Populate initial community and partner profiles. Create branding assets for SiteForge. Plan subsequent missions (M01-M06) in detail with scope and acceptance criteria.

This is the "plan the plan" mission — it transforms the raw campaign sketch into executable missions with clear objectives, dependencies, and deliverables.

## Dependencies

- None (this is the first mission)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Review and refine genesis campaign plan | Updated `campaign_context_commons_genesis.md` with refined scope, timeline, and acceptance criteria | Planned |
| O2 | Populate initial community profiles | `who/communities/community_peters_church_grand_rapids.md`, `who/communities/community_lausd_venice_beach_la.md` (marked DRAFT, `#needs-community-review`) | Planned |
| O3 | Create initial partner profiles | `who/partners/partner_apple.md`, `who/partners/partner_google.md`, `who/partners/partner_anthropic.md` (prospective) | Planned |
| O4 | Draft Curriculum Council charter | `who/governance/governance_curriculum_council_charter.md` — mandate, composition, decision-making, term structure | Planned |
| O5 | Deepen program_design context files | Expand the 4 seed files with additional detail from the context dump. Run III quality pass. Measure actual token budgets. | Planned |
| O6 | Create `branding.json` for SiteForge | `siteforge/what/context/branding.json` — colors, fonts, tagline, logo references. CC brand identity tokens. | Planned |
| O7 | Plan M01-M06 in detail | Create mission stub files for M01-M06 with scope, objectives, acceptance criteria, and session estimates | Planned |
| O8 | Session closeout + AAR | Session file(s) in `how/sessions/history/`. Lightweight AAR. | Planned |

## Acceptance Criteria

- [ ] Campaign document updated with refined scope and acceptance criteria per phase
- [ ] 2 community profiles created (marked DRAFT with `#needs-community-review`)
- [ ] 3 partner profiles created (marked prospective)
- [ ] Curriculum Council charter drafted
- [ ] Program_design context files deepened with III pass; actual token budgets measured
- [ ] `branding.json` created with CC brand identity
- [ ] M01-M06 mission stubs created with clear scope and objectives
- [ ] Session files and AAR completed

## Context Loading

For this mission, load:
1. Campaign CLAUDE.md (auto-loaded from campaign directory)
2. `campaign_context_commons_genesis.md` (campaign master doc)
3. `what/context/program_design/` (all 4 seed files — ~8K)
4. `context_authoring` recipe for writing context files

## Notes

- Community profiles should draw from the founding context dump (Peter's Church and LAUSD sections) but must be marked DRAFT since no community representative has reviewed them
- Partner profiles are aspirational — document what we would ask and offer, not confirmed agreements
- The Curriculum Council charter should define the body's composition, mandate, and decision-making process based on the governance model context file
- Branding.json should propose colors, fonts, and tagline — user confirms before committing to SiteForge consumption
