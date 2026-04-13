---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, use_case]
---

# what/use_cases/ — Agent Guide

## What's Here

Community use case specifications — structured descriptions of how agentic systems can address specific community needs across domains like healthcare navigation, immigration support, education, elder care, and community governance. One file per use_case.

## Working Rules

- **Naming**: `use_case_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: use_case`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `domain`, `community`, `beneficiary_group`, `status`, `complexity`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- Elders and stewards have veto power on community use cases (Standing Order #11)

## Load/Skip Decision

**Load this directory when**:
Developing new use cases, matching communities with potential agent applications, creating curriculum examples.

**Skip when**:
Working on infrastructure, governance, or forge tooling.

## Current Use Cases

| File | Domain | Primary Pilot | Beneficiary | Status |
|------|--------|---------------|-------------|--------|
| `use_case_elder_medicare_enrollment.md` | Healthcare Navigation | GR | Elders (65+) navigating Medicare | Draft |
| `use_case_immigration_paperwork_navigator.md` | Immigration Services | LA | Immigrant families | Draft |
| `use_case_school_enrollment_iep.md` | Education Access | LA | LAUSD parents/guardians | Draft |
| `use_case_congregational_care_coordinator.md` | Elder Care | GR | Peter's Church elders + volunteers | Draft |
| `use_case_community_resource_matching.md` | Community Governance | Both | Community members + volunteers | Draft |
| `use_case_multilingual_benefits_navigator.md` | Cross-domain | LA | Non-English-speaking families | Draft |

**Token cost**: ~500 tokens (this AGENTS.md). Individual records are ~400-600 tokens each.
