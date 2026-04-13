---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, steward]
---

# who/stewards/ — Agent Guide

## What's Here

Community steward profiles — local leaders (pastors, teachers, organizers, health workers) who bridge between technical mentors and community, govern local priorities, and co-teach with youth. Each profile documents the steward's community ties, role type, training progress, and active status.

## Working Rules

- **Naming**: `steward_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: steward`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `community`, `role_type`, `track_progress`, `status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- **Community voice gate**: Steward profiles are sensitive — they represent real community leaders. Content must be reviewed by the steward themselves before publishing (Standing Order #7).
- **Link to community and mentors**: Link to community via `[[communities/community_name]]` and to mentors via `[[mentors/mentor_name]]`

## Load/Skip Decision

**Load this directory when**:
- Matching stewards to mentors or pilot communities
- Tracking steward training progress or readiness
- Planning community engagement or co-teaching schedules
- Looking up local leadership contacts for a community

**Skip when**:
- Working on technical curriculum not tied to steward training
- Working on forge infrastructure or tooling
- Working on partner or council governance matters

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
