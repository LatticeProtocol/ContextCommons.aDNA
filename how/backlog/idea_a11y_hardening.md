---
type: backlog_idea
created: 2026-04-15
updated: 2026-04-15
status: completed
priority: P1
target_batch: R9
completed: 2026-04-15
last_edited_by: agent_gutenberg
tags: [backlog, idea, accessibility, a11y, testing, R9, P1]
---

# Idea: Accessibility Testing Hardening

## Problem

Current a11y testing is axe-core only (automated WCAG 2.1 AA scan), which catches ~30% of real accessibility issues. Missing:

1. **Keyboard navigation** — Tab order across pages, focus visibility
2. **Mobile menu focus trap** — Menu opens but focus can escape to content behind it
3. **Escape key close** — Mobile menu has no keyboard dismiss
4. **`prefers-reduced-motion`** — R9 will add CSS animations but no test validates they respect the media query
5. **Cross-page link audit** — Per-page link tests exist but no test crawls the full site navigation graph
6. **Screen reader flow** — No validation of heading hierarchy or ARIA landmark usage beyond axe-core

## Proposal

1. Add Playwright tests for keyboard navigation (Tab through nav, Enter to activate, Escape to close mobile menu)
2. Add focus trap to mobile menu component (trap Tab inside menu when open)
3. Add `prefers-reduced-motion` test using Playwright's `emulateMedia` — verify no CSS animations when preference is set
4. Graduate `idea_crosspage_link_audit_test.md` — implement cross-page link crawl test
5. Add heading hierarchy test (no skipped levels, one h1 per page)

## Effort

Medium — 5-6 new test cases + mobile menu component changes (focus trap, Escape handler).

## Origin

Meta-III of the III process (session_stanley_20260415_live_iii_audit). axe-core is necessary but not sufficient for accessibility claims.
