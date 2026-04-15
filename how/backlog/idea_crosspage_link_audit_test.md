---
type: backlog_idea
created: 2026-04-14
updated: 2026-04-14
status: active
last_edited_by: agent_gutenberg
priority: medium
effort: quick
source: M08 AAR finding #6 + M08-R R1
tags: [backlog, testing, playwright, siteforge]
---

# Cross-Page Link Audit Test

## Problem

Playwright tests validate per-page content but not cross-page navigation completeness. The footer link gap (missing Resources/Contact) and broken `#how-its-different` anchor from M08 were caught only by manual III review, not automated tests. As M08-R adds more internal links and anchor targets, this gap grows.

## Proposal

Add a Playwright spec (`tests/cross-links.spec.ts`) that:
1. Crawls every internal link on every page
2. Verifies each resolves to a 200 (not 404)
3. Validates anchor targets (`#section-id`) exist as `id` attributes on the destination page
4. Validates footer links match the expected navigation set (all 7 pages)

## Target

Create during M08-R R10 (Final Persona Sweep) when full-site coherence is the focus. Alternatively, create during any batch where broken cross-page links are discovered.

## Effort

~30 minutes. One new spec file, no architectural changes.
