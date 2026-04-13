---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, partnership]
---

# what/partnerships/ — Agent Guide

## What's Here

Partnership proposals and agreements — formal documents defining the relationship between the Context Commons and technology partners (Apple, Google, Anthropic, etc.) or community partners. Covers resource commitments, governance terms, and non-negotiables (community governance, no data extraction, open standards). One file per partnership.

## Working Rules

- **Naming**: `partnership_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: partnership`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `partner`, `type` (technology/community/academic), `status`, `terms`, `deliverables`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit

## Load/Skip Decision

**Load this directory when**:
Drafting partnership proposals, reviewing agreements, creating partner-facing materials.

**Skip when**:
Working on internal curriculum or community operations.

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
