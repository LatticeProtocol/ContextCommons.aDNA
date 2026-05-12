---
type: campaign_mission
created: 2026-05-12
updated: 2026-05-12
status: in_progress
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 3
mission_id: M08-C
session_estimate: 2-3
tags: [mission, genesis, siteforge, website, compression, III-loops, M08-C]
---

# Mission M08-C: Homepage + Site-Wide Compression — 25 III Loops

## Goal

Compress the Context Commons website to its most concise, scannable form while sharpening the homepage thesis (agentic literacy → community building → intergenerational public service). Add real Playwright visual inspection (per-loop screenshots), claim a brandable Vercel alias for partner sharing, and verify every page is short enough to feel inviting rather than exhausting.

Follow-up to M08-R (which closed at 100/100 loops on 2026-04-16 with visual + voice + a11y polish but no page-length compression).

## Dependencies

- M08 + M08-R complete
- Vercel production deployment live at `site-nu-lovat.vercel.app` (2026-05-12)

## Focus Areas

1. **Homepage hero** — image sizing, typography scale, thesis message
2. **Homepage concision** — 5 sections → 3 maximum, sub-2-viewport target
3. **Cross-page linking** — homepage concepts link out to detail pages
4. **Other-page compression** — `/about` and `/curriculum` are top suspects
5. **Real Playwright inspection** — per-loop screenshot harness, before/after evidence
6. **Brandable URL** — `contextcommons.vercel.app` alias

## Objectives (3 Phases, 25 Loops)

### Phase 1 — Homepage (Loops 1–10) — Pastor Williams persona

| # | Focus | Status |
|---|-------|--------|
| L1 | Playwright screenshot harness + baseline capture | **In progress** |
| L2 | Hero image resize (max-w 66% → 45% desktop / 70% mobile) | Pending |
| L3 | Hero typography (`--text-5xl` token, h1 + subtitle bump) | Pending |
| L4 | Hero message rewrite (agentic literacy thesis) | Pending |
| L5 | Section inventory + keep/demote decisions | Pending |
| L6 | "The Problem" → 2-3 sentences + link to /about | Pending |
| L7 | "Three Roles" → keep diagram, shrink copy, anchor to /get-involved | Pending |
| L8 | Vignettes + Pilots compression with "See more →" patterns | Pending |
| L9 | Cross-page link discipline pass | Pending |
| L10 | **Phase 1 gate** — Playwright scrollHeight check + Lighthouse + AAR. USER REVIEW. | Pending |

### Phase 2 — Other-page compression (Loops 11–22) — Mrs. Johnson persona

| # | Page | Focus | Status |
|---|------|-------|--------|
| L11-L12 | /about | 274 → ~180 lines, 6 sections → 4, FAQ to <details> | Pending |
| L13-L14 | /curriculum | Tables → summary cards + "See full breakdown →" | Pending |
| L15 | /pilots | Light pass, keep DRAFT banners, sharpen pilot cards | Pending |
| L16-L17 | /get-involved | PersonaCards stay, DetailSections to <details> | Pending |
| L18 | /partners | Light pass, de-duplicate vs. home | Pending |
| L19 | /resources | Glossary 2-col or collapsible | Pending |
| L20 | /contact | Skim only, verify response-time copy | Pending |
| L21 | Cross-page link audit | Every homepage outbound link lands correctly | Pending |
| L22 | Cross-page voice + after-shot capture | Pending |

### Phase 3 — Deploy + alias + AAR (Loops 23–25)

| # | Focus | Status |
|---|-------|--------|
| L23 | Full quality-gate run + baseline-vs-after montage | Pending |
| L24 | `vercel --prod` + `vercel alias` (contextcommons → fallback) | Pending |
| L25 | Live walkthrough on aliased URL + mission AAR | Pending |

## Execution Protocol

1. Each loop: Inspect (screenshot/grep) → Introspect (target gap) → Improve (edit) → Validate (build + targeted test) → commit.
2. **Per-loop commits** for granular rollback.
3. Phase boundaries: full Playwright suite + Lighthouse run.
4. **L10 is a hard user gate.** Do not proceed to L11 without explicit user approval.
5. Standing Order #7 honored: pilot DRAFT banners are not removed (Phase 2 governance, not visual compression).
6. M08-R loop discipline carried forward: grep-verify counts, all file types in sweeps, shared-component check at batch start, cross-page content treated as one target.

## Acceptance Criteria

- [ ] 25 III loops completed with per-loop commits + AARs
- [ ] Homepage DOM `scrollHeight` ≤ 2× viewport at 1440×900, ≤ 3× at 412×915
- [ ] All 9 active quality gates pass (Gate 8 manual)
- [ ] Lighthouse maintained at ≥ Perf 95 / A11y 100 / BP 92 / SEO 100 on `/`
- [ ] Other 7 pages all shorter than L1 baseline (line count + scrollHeight)
- [ ] `contextcommons.vercel.app` (or fallback) returns 200 from new prod deploy
- [ ] Before/after screenshot montage included in mission AAR
- [ ] Mission AAR artifact at `how/missions/artifacts/`

## Batch AARs

(Populated at phase boundaries.)
