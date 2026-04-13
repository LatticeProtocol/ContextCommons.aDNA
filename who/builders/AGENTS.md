---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, builder]
---

# who/builders/ — Agent Guide

## What's Here

Youth builder profiles — young people (ages 14-24) learning to build, deploy, and maintain agentic systems for their communities. Each profile documents the builder's community, progress through learning tracks, capstone project, and hardware status.

Youth builders are peers, not students (Standing Order #10). Profiles should reflect their capabilities and contributions, not just enrollment status.

## Working Rules

- **Naming**: `builder_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: builder`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `community`, `age`, `track_progress`, `capstone_project`, `hardware_status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- **Community voice gate**: Builder profiles describe real young people — handle with care. Content must be reviewed by the builder and/or their steward before publishing (Standing Order #7).
- **Link to community and capstone**: Link to community via `[[communities/community_name]]` and capstone use cases via `[[use_cases/use_case_name]]`
- **Peer framing**: Use language that centers agency and contribution. Avoid deficit framing or language that positions builders as passive recipients.

## Load/Skip Decision

**Load this directory when**:
- Tracking cohort progress through learning tracks
- Matching builders to capstone projects or use cases
- Reviewing hardware distribution or readiness
- Celebrating builder milestones or contributions

**Skip when**:
- Working on curriculum design (use curriculum/ instead)
- Working on mentor or steward assignments without builder context
- Working on governance or partnership matters

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
