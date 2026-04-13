---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, pipeline, grant_pipeline, prospect]
---

# Stage 1: Prospect

## Purpose

Identify and document grant opportunities. This is the discovery stage — capture enough information to decide whether the opportunity warrants deeper research in Stage 2.

## Processing Instructions

When a new grant opportunity is identified:

1. Create a file named `grant_{funder_slug}_{program_slug}.md`
2. Add pipeline frontmatter (see pipeline AGENTS.md)
3. Document: funder name, program name, amount range, deadline, eligibility requirements, CC alignment notes
4. Set `stage: prospect` and `priority: 1|2|3`

## Quality Gate (Exit Criteria)

Before advancing to `02_qualify/`:

- [ ] Funder and program identified with official source
- [ ] Amount range documented
- [ ] Deadline confirmed (checked against funder website)
- [ ] Initial CC alignment assessment (1-2 sentences)
- [ ] Eligibility basics noted (501(c)(3) required? fiscal sponsor accepted? geography?)

## Advancement

Move file to `02_qualify/` and update `stage: qualify` when exit criteria are met.
