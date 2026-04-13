---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, curriculum_module]
---

# how/curriculum/ — Agent Guide

## What's Here

Curriculum module tracking — individual modules within the Builder, Steward, or Elder tracks. Each module is both a curriculum unit AND an aDNA context file (Standing Order #8: the curriculum IS a context graph). Modules define competencies, prerequisites, hands-on exercises, and assessment criteria. One file per curriculum_module.

## Working Rules

- **Naming**: `curriculum_module_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: curriculum_module`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `track` (core/builder/steward/elder), `sequence`, `prerequisites`, `competencies`, `status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- The curriculum teaches people to build context graphs using aDNA — and the curriculum itself IS a context graph built with aDNA. This self-referentiality is intentional and pedagogically valuable.

## Load/Skip Decision

**Load this directory when**:
Creating or reviewing curriculum content, planning track structure, adapting modules for a specific community.

**Skip when**:
Working on non-curriculum content.

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
