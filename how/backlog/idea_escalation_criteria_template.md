---
type: backlog_idea
created: 2026-04-13
updated: 2026-04-13
status: active
last_edited_by: agent_gutenberg
tags: [backlog, template, context, escalation, upstream]
origin: M05 AAR
prefix: idea_upstream_
---

# Add Escalation Criteria Section to Context Template

## Idea

Add an optional **Escalation Criteria** section to `how/templates/template_context.md` for domain-type context files. This section would be a table with columns: Trigger | Action | Escalate To.

## Evidence

During M05 (Use Case Domain Library), the initial III review scored 4.04 — below the 4.3 target. After adding escalation criteria tables to all 5 domain files, actionability rose from 4 to 5 across all files, pushing the average to 4.44. The tables make cross-domain handoffs explicit (e.g., "immigrant family needs health coverage → hand off to healthcare navigation agent") and define clear failure-case boundaries (e.g., "family asks for legal advice → escalate to attorney").

## Scope

- Add an optional `### Escalation Criteria` subsection to `template_context.md` after the Examples/Snippets section
- Document when to include it (domain files, use case domain files) vs. when to skip (pure reference files, core definitions)
- This is a framework-level improvement — consider upstream contribution to `adna/` base template

## Priority

Low — not blocking. The pattern is already established in M05 files and can be replicated manually. Template change would make it discoverable for future missions and other aDNA projects.
