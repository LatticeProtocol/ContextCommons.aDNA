---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, partner]
---

# who/partners/ — Agent Guide

## What's Here

Technology and community partner organization profiles — companies, universities, nonprofits, and community organizations contributing resources, expertise, or infrastructure to the Context Commons. Each profile documents the partner's type, contribution, contact information, and engagement status.

## Working Rules

- **Naming**: `partner_{descriptive_name}.md` (underscores, lowercase)
- **Required frontmatter**: `type: partner`, `created`, `updated`, `status`, `last_edited_by`, `tags`, `partner_type` (technology/community/academic/government), `contribution_type`, `contact`, `status`
- **Check before overwriting**: Read `updated` field — if edited today by someone else, confirm with user
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit
- **Link to partnership agreements**: Link to partnership agreements via `[[partnerships/partnership_name]]`
- **Sensitivity**: Partner contact details and contribution terms may be confidential. Do not expose financial terms or private contacts in public-facing outputs without explicit permission.

## Load/Skip Decision

**Load this directory when**:
- Evaluating potential partnerships or resource contributions
- Looking up partner contacts or contribution details
- Planning partnership renewals or expansions
- Matching partner resources to community needs

**Skip when**:
- Working on curriculum or learning content
- Working on individual builder, steward, or mentor profiles
- Working on internal governance without partner implications

**Token cost**: ~300 tokens (this AGENTS.md). Individual records are ~200-400 tokens each.
