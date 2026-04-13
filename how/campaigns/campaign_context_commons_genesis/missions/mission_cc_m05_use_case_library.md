---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-13
status: completed
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 2
mission_id: M05
session_estimate: 2-3
tags: [mission, genesis, use_cases, domains, M05]
---

# Mission M05: Use Case Domain Library

## Goal

Create the `use_case_domains` context topic (5 files, ~10K tokens) and populate the use case library (`what/use_cases/`) with 5+ documented community use cases. These use cases are the concrete bridge between community needs and agentic systems — each one specifies a real problem, a target population, a context graph structure, and what an agent system would actually do.

## Dependencies

- M01 (program_design at publication quality)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Create context_cc_healthcare_navigation.md | Healthcare/elder care use case domain context | **Done** |
| O2 | Create context_cc_immigration_services.md | Immigration support use case domain context | **Done** |
| O3 | Create context_cc_education_access.md | Education navigation use case domain context | **Done** |
| O4 | Create context_cc_elder_care.md | Elder care coordination use case domain context | **Done** |
| O5 | Create context_cc_community_governance.md | Community governance/coordination use case domain context | **Done** |
| O6 | Create 6 use case specs in what/use_cases/ | Concrete use case documents using template_use_case.md | **Done** |
| O7 | III review context files | Quality scores, cross-references, escalation tables | **Done** |

## Acceptance Criteria

- [x] 5 use_case_domains context files created (~11.5K tokens total)
- [x] 6 use case specifications created in what/use_cases/
- [x] Each use case specifies: community need, target population, context graph structure, agent capabilities, success criteria
- [x] Use cases map to pilot community needs (Peter's Church → healthcare, elder care; LAUSD → education, immigration)
- [x] All use cases marked DRAFT with `#needs-community-review` (Standing Order #7)

## Context Loading

1. `what/context/program_design/context_cc_thesis.md` (circular knowledge economy)
2. `what/context/program_design/context_cc_program_architecture.md` (capstone project domains)
3. `who/communities/` (pilot community needs sections)
4. `what/context/adna_for_communities/` (translational layer — use cases must be legible to non-technical stewards)

## Notes

- Standing Order #7: community voices are constitutional. Use cases describe what we believe communities need based on initial context. They require community validation before they drive curriculum or pilot design.
- Standing Order #11: stewards and elders have veto power. A technically elegant use case that the community doesn't endorse doesn't ship.
- Use cases should be concrete enough to serve as capstone project prompts for youth builders

## AAR (After Action Review)

**Worked:**
- Healthcare/elder care domain boundary (systems vs. people) produced genuinely distinct context files with clear interoperation points. The escalation criteria tables made cross-domain handoffs explicit and raised actionability to 5 across all files.
- 6 use case specs cover both pilots comprehensively: 2 GR-primary (Medicare enrollment, congregational care), 3 LA-primary (immigration, school enrollment, multilingual benefits), 1 shared (community resource matching). Each spec is concrete enough for capstone project scoping.

**Didn't work:**
- Initial III review scored 4.04 (below 4.3 target). Escalation criteria tables were not in the original template — they had to be added as a post-review improvement to raise actionability from 4 to 5.

**Finding:**
- Domain context files benefit from explicit **escalation criteria tables** — structured decision points showing what triggers escalation, what action to take, and where to hand off. This pattern should be considered for the context file template or documented as a domain-file best practice.

**Change:**
- Future domain context files should include escalation criteria tables from initial authoring, not as a review-phase addition.

**Follow-up:**
- Backlog idea: add escalation criteria section to `template_context.md` for domain-type context files.
- M06 (aDNA for Communities) is next — deepen the 2 seeded DRAFT files and create a community explanation toolkit.

**Session count:** 1 session (estimated 2-3). Cumulative: 6 missions in 6 sessions vs. 10-14 estimated (~50% of estimate).
