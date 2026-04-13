---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-12
status: completed
last_edited_by: agent_gutenberg
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
| O1 | Review and refine genesis campaign plan | Updated `campaign_context_commons_genesis.md` with refined scope, timeline, and acceptance criteria | **Done** |
| O2 | Populate initial community profiles | `who/communities/community_peters_church_grand_rapids.md`, `who/communities/community_lausd_venice_beach_la.md` (marked DRAFT, `#needs-community-review`) | **Done** |
| O3 | Create initial partner profiles | `who/partners/partner_apple.md`, `who/partners/partner_google.md`, `who/partners/partner_anthropic.md` (prospective) | **Done** |
| O4 | Draft Curriculum Council charter | `who/governance/governance_curriculum_council_charter.md` — mandate, composition, decision-making, term structure | **Done** |
| O5 | Deepen program_design context files | Expanded all 4 seed files with concrete examples, cross-references, pilot site connections. Token budget ~13.7K (up from ~8K). | **Done** |
| O6 | Create `branding.json` for SiteForge | `siteforge/what/context/branding.json` — forest green/gold palette, Libre Baskerville/Source Sans 3, measured_authority voice. | **Done** |
| O7 | Plan M01-M06 in detail | 6 mission stubs created with scope, objectives, acceptance criteria, dependencies, and session estimates | **Done** |
| O8 | Session closeout + AAR | Session file completed, AAR appended. | **Done** |

## Acceptance Criteria

- [x] Campaign document updated with refined scope and acceptance criteria per phase
- [x] 2 community profiles created (marked DRAFT with `#needs-community-review`)
- [x] 3 partner profiles created (marked prospective)
- [x] Curriculum Council charter drafted
- [x] Program_design context files deepened; actual token budgets: ~13.7K (est. was ~8K)
- [x] `branding.json` created with CC brand identity
- [x] M01-M06 mission stubs created with clear scope and objectives
- [x] Session files and AAR completed

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

## Completion Summary

### Deliverables
- Campaign plan refined with stronger phase gate criteria
- 2 community profiles: Peter's Church Grand Rapids (DRAFT), LAUSD/Venice Beach LA (DRAFT)
- 3 partner profiles: Apple, Google, Anthropic (all prospective)
- Curriculum Council charter with mandate, composition, decision-making, meeting cadence
- 4 program_design context files deepened with concrete examples, cross-refs (~13.7K tokens total)
- branding.json: forest green/gold palette, serif+sans typography, organization_landing archetype
- 6 mission stubs (M01-M06) with objectives, dependencies, acceptance criteria
- Campaign CLAUDE.md mission index updated

### Descoped
- Full III quality review cycle deferred to M01 (better suited as dedicated focus)
- Token budget measurement deferred to M01 (requires tool-based word count)

### Key Findings
- Program_design files grew from ~8K to ~13.7K with concrete examples — the examples make the abstractions land
- Two-pilot contrast (concentrated church vs. distributed multi-institution) is a strong structural choice that forces the framework to be genuinely adaptable

### Scope Changes
- None — all 8 objectives completed as planned in 1 session (estimate was 2-3)

## AAR

- **Worked**: Full M00 sprint in one session — all 8 objectives completed. Templates and context files were well-structured enough to populate quickly.
- **Didn't**: Token budget measurement was imprecise (estimates, not tool-measured counts). III review was a light pass, not the structured 6-axis rubric.
- **Finding**: The program_design context files needed concrete examples more than they needed additional theory. The "decision scenario" in governance_model and "principles in practice" in core_principles are the most useful additions.
- **Change**: M01 should lead with III review using the formal rubric (skill_context_quality_audit) rather than informal deepening.
- **Follow-up**: M01 ready to execute — begin with III review of program_design files, then create adna_for_communities topic.
