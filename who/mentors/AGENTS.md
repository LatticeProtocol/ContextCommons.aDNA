---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, mentor]
---

# who/mentors/ — Agent Guide

## What's Here

Lattice developer mentor profiles — technical mentors from the aDNA/Lattice community who teach stewards and support youth builders. Each profile documents the mentor's expertise, availability, assigned communities, and engagement history.

## Working Rules

- **Naming**: `mentor_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: mentor`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `expertise`, `availability`, `assigned_community`, `status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- **Link to assigned communities**: Link to assigned communities via `[[communities/community_name]]`
- **Availability tracking**: Keep `availability` current — mentors cycle in and out. Stale availability wastes steward and builder time.

## Load/Skip Decision

**Load this directory when**:
- Assigning mentors to new communities or pilot cohorts
- Matching mentor expertise to community needs
- Reviewing mentor capacity or engagement status
- Onboarding a new mentor

**Skip when**:
- Working on curriculum content or learning materials
- Working on community profiles without mentor assignment changes
- Working on governance or council decisions

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
