---
type: backlog_idea
created: 2026-04-15
updated: 2026-04-15
status: completed
priority: P1
target_batch: R9
completed: 2026-04-15
last_edited_by: agent_gutenberg
tags: [backlog, idea, lighthouse, performance, CWV, validation, R9, P1]
---

# Idea: Lighthouse CI Integration + Performance Budgets

## Problem

Gate 6 (Core Web Vitals) has been SKIPPED for all 8 refinement batches. The acceptance criteria claim "10/10 quality gates passing" but 2 gates (6 and 8) are actually skipped. Without Lighthouse, we have no performance baseline, no CWV data, and no regression detection for performance.

## Proposal

1. Install `@lhci/cli` as dev dependency
2. Create `.lighthouserc.js` with:
   - Performance budgets (JS bundle, CSS, image sizes, FCP, LCP, CLS, TBT)
   - Assertion thresholds (Performance >=90, Accessibility >=95, Best Practices >=95, SEO >=95)
   - All 8 page URLs
3. Enable Gate 6 in `run_gates.sh` — run `npx lhci autorun` against preview server
4. Document baseline scores for all pages
5. Fix any critical findings (likely image optimization, unused CSS)

## Effort

Low — `@lhci/cli` is straightforward. Config is ~30 lines. Main work is fixing findings.

## Origin

Meta-III of the III process (session_stanley_20260415_live_iii_audit). Performance validation has been a blind spot throughout M08-R.
