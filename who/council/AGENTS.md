---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, council_member]
---

# who/council/ — Agent Guide

## What's Here

Curriculum Council member profiles — the standing body that designs curriculum, defines competency milestones, establishes ethical guardrails, and evaluates pilot outcomes. Members span AI development, community organizing, public health, education, and elder/disability advocacy. Each profile documents the member's expertise domain, affiliation, term, and active status.

## Working Rules

- **Naming**: `council_member_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: council_member`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `expertise_domain`, `affiliation`, `term`, `status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- **Link to governance documents**: Link to governance documents via `[[governance/governance_doc]]`
- **Term tracking**: Council members serve defined terms. Check `term` field before assuming a member is active — expired terms should be flagged for renewal or rotation.

## Load/Skip Decision

**Load this directory when**:
- Preparing for or documenting council decisions
- Reviewing curriculum governance or ethical guardrails
- Checking council composition for expertise gaps
- Onboarding new council members or rotating terms

**Skip when**:
- Working on day-to-day community, builder, or mentor operations
- Working on technical infrastructure or forge tooling
- Working on partner relationships without governance implications

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
