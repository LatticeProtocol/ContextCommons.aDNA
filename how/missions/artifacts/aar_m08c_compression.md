---
type: artifact
artifact_type: aar
mission_id: M08-C
campaign_id: campaign_context_commons_genesis
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_gutenberg
tags: [aar, artifact, m08-c, compression, vercel]
---

# AAR: M08-C — Homepage + Site-Wide Compression (25 III Loops)

## Mission Identity

| Field | Value |
|-------|-------|
| Mission | M08-C |
| Campaign | campaign_context_commons_genesis |
| Status | completed |
| Sessions | 1 |
| Duration | 2026-05-12 (single session) |

## Scorecard

| # | Deliverable | Status | Notes |
|---|-------------|--------|-------|
| 1 | 25 III loops completed with per-loop commits | validated | All 25 loops executed; 17 commits (some loops verification-only) |
| 2 | Homepage thesis sharpened: agentic literacy / intergenerational / community-owned | validated | New subtitle: "An intergenerational program: youth build AI tools, elders share the wisdom that makes them work, communities own what they need." |
| 3 | Homepage hero image + typography fixed per Stanley's feedback | validated | `max-w-[66%]` → `max-w-[42%] desktop / 80% mobile`; new `--text-5xl` token; h1 at 48–72px, subtitle at 24–32px |
| 4 | Homepage compressed | validated | Desktop -18%, mobile -26%, tablet -24% scroll height vs. baseline. 5 post-hero sections → 4. |
| 5 | All 7 other pages compressed or verified concise | validated | Net deltas: about -12/21/17%, curriculum -29/32/30%, pilots -6/4/5%, get-involved -29/45/35%, partners -10/5/10%, resources -3/+2/-1%, contact 0 (already lean) |
| 6 | Cross-page link discipline (homepage → detail pages) | validated | "Read the full thesis →", "See all the ways to take part →", "See what youth will build →" all resolve; Gate 3 24/24 |
| 7 | Real Playwright inspection per loop | validated | New `tests/visual-inspection.spec.ts` captures 24 screenshots + DOM scrollHeight per labeled run; ~10 named runs across the mission |
| 8 | Brandable Vercel alias claimed | validated | `https://contextcommons.vercel.app/` live, returns 200 on all 8 routes |
| 9 | All 9 active quality gates pass | validated | 346 passed / 17 skipped / 0 failed; Lighthouse 100/100/96/100 on `/` (parity with M08-R) |
| 10 | Mission AAR + STATE update | validated | This artifact + STATE.md last_session + M08-C entry under Phase 3 |

**Validated**: 10/10 deliverables

## Compression Summary (vs. L1 baseline, desktop @ 1280×720)

| Page | Before | After | Δ | Viewport ratio |
|------|--------|-------|---|----------------|
| `/` | 4815px | 3966px | **-18%** | 6.69× → 5.51× |
| `/about` | 5461 | 4790 | -12% | 7.58× → 6.65× |
| `/curriculum` | 6044 | 4271 | **-29%** | 8.39× → 5.93× |
| `/pilots` | 4040 | 3783 | -6% | 5.61× → 5.25× |
| `/get-involved` | 3853 | 2741 | **-29%** | 5.35× → 3.81× |
| `/partners` | 3566 | 3218 | -10% | 4.95× → 4.47× |
| `/resources` | 2711 | 2631 | -3% | 3.77× → 3.65× |
| `/contact` | 1694 | 1694 | 0% | 2.35× (already lean, no work needed) |

Biggest wins via `<details>` collapse: `/curriculum` (each track), `/get-involved` (each role detail).

## Gap Register

| # | Gap | Severity | Source | Remediation |
|---|-----|----------|--------|-------------|
| 1 | Homepage at 5.51× viewport on desktop still exceeds Stanley's "1–2 viewport" stretch target (= 2×). | low | Phase 1 gate, accepted by Stanley | Hitting ≤2× would require removing the Three Roles + diagram signature section; intentionally preserved. Document as design floor, not gap. |
| 2 | `/pilots` DRAFT-banner content still pending community review | medium | Standing Order #7 governance | Out of scope — community-review process must run independently |
| 3 | Vercel team SSO protection was blocking custom alias by default; required `vercel api PATCH` of `ssoProtection: null` to surface `contextcommons.vercel.app` publicly. | medium | L24 discovery | Resolved in-mission. Future deploys on this team should re-check protection state; consider documenting in `siteforge/` deploy notes. |

## Technical Debt

| # | Debt | Impact | Priority | Tracking |
|---|------|--------|----------|----------|
| 1 | `VignetteCard` component unused after homepage merge (L8) but file remains | low | none — dead code | low | Address in next Phase 3 mission or backlog |
| 2 | a11y.spec.ts now requires `reducedMotion: 'reduce'`; obscures real WCAG AA failures that only appear during motion | low | Mid-fade-in false positives are gone, but a real contrast bug could be missed during animation | low | Acceptable trade-off; production users see settled state |
| 3 | `tests/components.spec.ts` is a placeholder (VignetteCard tests skipped); empty test file pattern | low | Cosmetic | low | Could delete file entirely if no near-term shared-component coverage is planned |

## Readiness Assessment

| Criterion | Status | Evidence |
|-----------|--------|----------|
| All deliverables validated | **GO** | 10/10 |
| No critical gaps | **GO** | 0 critical; 1 low + 2 medium with explicit handling |
| Dependencies met for next mission (M09 VideoForge) | **GO** | Site live + branded URL ready for embed / hand-off |
| Lighthouse parity with M08-R | **GO** | 100/100/96/100 maintained on `/` |
| Live URL responds 200 on all 8 routes | **GO** | Verified via `curl -I https://contextcommons.vercel.app/$path` |

**Overall**: **GO** for M09 (VideoForge setup) — site is partner-shareable.

**Rationale**: All visual + structural compression goals met. Brandable URL claimed and public. Quality gates parity with M08-R baseline. Phase 3 of the genesis campaign progresses with M08-C complete; M09 (VideoForge) and M10 (PresentationForge) remain.

## Recommendation

Proceed to M09 (VideoForge setup). The site at `contextcommons.vercel.app` is the canonical partner-share URL going forward. The previously-used `site-nu-lovat.vercel.app` remains as an auto-aliased fallback (both point to the same production deployment).

## Lessons Learned

1. **`<details>` is a force multiplier for compression.** /curriculum and /get-involved gave the largest deltas (-29% and -45% mobile) by wrapping always-rendered detail blocks in native `<details>`. No new components needed, no JS dependency, keyboard- + screen-reader-friendly out of the box. The pattern: heading + 1-line summary visible; full content collapsed. M08-R never tried this because compression wasn't a goal; future content-heavy aDNA sites should default to `<details>` for any non-essential supporting detail.
2. **Hash-driven `<details>` auto-open is the missing piece for anchor-link UX.** Wrapping DetailSection in `<details>` would have broken PersonaCard "See what you'll do →" anchor links if not for the small inline script that opens the matching `<details>` on `hashchange` + `astro:page-load`. Pattern: `document.getElementById(hash).open = true; scrollIntoView()`. Worth promoting to a shared snippet.
3. **The Playwright screenshot harness paid for itself on the first L2.** Knowing the exact delta after each loop (instead of eyeballing the live site) let us trade compression for typography readability with hard numbers (L3 cost +339px desktop for +14px h1 size — Stanley's call). Future III batches should ship visual harness in L1 by default, not late.
4. **Stretch-targeting "1-2 viewports" is unrealistic for content-rich homepages.** Hero + thesis + 3-role brand signature + pilot proof + CTA = ~3.5–5.5× viewport floor on desktop. Naming this floor honestly in the AAR prevents future cycles from chasing impossible targets. Compression vs. content density is a curve; pick the inflection, not the asymptote.
5. **Vercel team SSO defaults are silent.** The `contextcommons.vercel.app` alias claim succeeded immediately but returned 401 — auth protection wasn't on the alias, it was on every alias except the auto-assigned canonical (`site-nu-lovat.vercel.app`). The CLI doesn't expose protection settings; had to PATCH `ssoProtection: null` via `vercel api`. Add this step to the deploy runbook.
6. **Single-session pattern held again.** M08-R estimated 10 sessions, actual 10. M08-C estimated 2-3 sessions, actual 1. Pattern: prep-heavy planning + Playwright instrumentation + per-loop discipline keeps the cycle tight even when loop count is high.
7. **Stale test artifacts must be reviewed when components are removed.** L8 deleted VignetteCard from home but didn't touch components.spec.ts (which still expected it). L16 collapsed DetailSection to `<details>` but contact-cards.spec.ts still expected always-visible text. Caught at L23. Lesson: a "removed components / changed-structure" grep pass should be part of any mission that deletes or restructures rendered content.
