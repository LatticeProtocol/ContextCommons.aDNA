---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, track]
---

# how/tracks/ — Agent Guide

## What's Here

Track progression tracking — monitors participant progress through the Builder, Steward, or Elder & Community Member curriculum tracks. Tracks module completion, competency milestones, and readiness for advancement. One file per track.

## Working Rules

- **Naming**: `track_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: track`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `track_type` (builder/steward/elder), `modules_completed`, `current_module`, `status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
Assessing participant progress, planning track improvements, preparing competency reports.

**Skip when**:
Working on content that is not participant-specific.

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
