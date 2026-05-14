---
type: campaign
created: 2026-05-14
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
tags: [campaign, civic_press, website_redesign, doctrine_reset]
phase: 0
phase_status: pending_mcp0
mission_count: 8
session_estimate: 8-10
charter_authority: stanley
charter_signed_at: 2026-05-14
plan_reference: ~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md
---

# Campaign: Civic Press Redesign

## Charter

Land **The Civic Press** — a complete visual-doctrine reset of the Context Commons website. Editorial broadsheet × 16-bit civic pixel art × open-standard quiet authority. The site after this campaign should make a stranger close the tab and tell a friend, in one sentence, what the program does, who it's for, and why now.

This campaign is a peer to `campaign_context_commons_genesis` (not a sub-mission). It opens after Workstream A close (2026-05-14) and runs in 4 phases across 8 missions. M09 (VideoForge wrapper) and M10 (PresentationForge wrapper) inside the genesis campaign are paused until MCP-7 ships so those wrappers inherit the locked doctrine without retrofit.

## Why now

The current site (M08-C closed 2026-05-12 at https://contextcommons.vercel.app/) is technically clean — 332 Playwright tests, Lighthouse 100/100/96/100, 9/10 quality gates passing — but the visual doctrine is generic-indie-nonprofit rather than the editorial gravity the program deserves. Stanley's two-part design directive (home page brief + system-wide brief, both in the plan file's context) calls for:

- Four-color palette: paper / ink / press-red / civic-blue
- FOSS-only type: Fraunces (display) + Source Serif 4 or Newsreader (body) + JetBrains Mono or Departure Mono (functional)
- ~30 pixel-art pieces — halftone-framed, bounded palette, hand-crafted
- Page-by-page rewrites: editorial leaves on About; catalogue index on Curriculum; two field dispatches on Pilots; four-quadrant front desk on Get Involved / Contact; library-catalogue cards on Resources; terms-of-engagement framing on Partners
- Voice tightening: strike hedges, strike second-person pep, propagate the two-birds line to 4 placements, propagate the Michael Brooks dedicatory line and bilingual posture into every footer

Doctrine pillars from the directive:
- **The press serves the people.** AI is the tool; community sovereignty is the purpose.
- **A press, on terms.** Three written promises: community governance, no data extraction, open standards.
- **One specific noun beats three abstract ones.** Mrs. Johnson sorting her Medicare Part D before the December 7 deadline beats "helps with healthcare access."

## Victory Conditions

1. **The one-sentence test** — a stranger reads the home page for 10 seconds and tells a friend the program in one sentence (per directive §7).
2. **The one-paragraph test** — every page contains a paragraph that speaks to each of three readers (a funder, a steward, a 14-year-old) in their own register (per directive §10).
3. **Visual doctrine consistency** — every page applies the four-color palette, FOSS type system, and pixel-art treatment without exception.
4. **Voice consistency** — zero hedges; zero second-person pep in headers; two-birds line in 4 placements; Michael Brooks line + bilingual posture in every footer.
5. **Performance maintained** — Lighthouse 100/100/96/100 on all 8 pages; all Playwright tests passing.
6. **III learning store grew** — ≥10 captured traps; ≥3 graduate to canonical upstream via ADR-003 §3 ceremony.
7. **Pixel art ingested** — ~30 finished pixel-art pieces in `public/pixel/`; zero placeholder PNGs at ship.

## Phases

| Phase | Missions | Outcome | Stanley gate |
|-------|----------|---------|--------------|
| **P0 — Scaffolding & decisions** | MCP-0, MCP-1, MCP-2 (kick-off) | Style sheet locked; new components have atom tests; pixel-art prompt pack dispatched to Herb | Doctrine integrity: D-FONT-PAIRING-FINAL + D-COLOR-TOKENS signed |
| **P1 — Home page lands the doctrine** | MCP-3 | Home rebuilt: masthead + hero diptych + thesis + 3-roles cycle diagram + non-negotiables + segmented CTA + colophon footer | One-sentence test passes |
| **P2 — Subpages inherit the pattern** | MCP-4, MCP-5, MCP-6 | About (5 leaves), Curriculum (catalogue), Pilots (2 dispatches), Get Involved (4-quadrant), Partners (terms), Resources (library), Contact (front desk) | One-paragraph test passes on every page |
| **P3 — Ship** | MCP-7 | Production deploy + Lighthouse + alt-text sweep + final pixel-art ingest + III learning-store triage + AAR | Lighthouse + tests green; learning store triaged |

## Mission Roster

| ID | Mission | Persona (III) | Phase | Sessions |
|----|---------|---------------|-------|---------:|
| MCP-0 | Design tokens + style sheet (lock D-FONT-PAIRING-FINAL + D-COLOR-TOKENS) | P-01 Technical Reviewer | P0 | 1 |
| MCP-1 | Shared scaffolding (Masthead, PageOpener, PullQuote, Marginalia, StatusChip, SectionOpener, LibraryCatalogueCard, ColophonFooter) | P-08 Mentor / Developer | P0 | 1 |
| MCP-2 | Pixel-art prompt pack + coordination memo + placeholder assets + dispatch to Herb | (no III; coordination work) | P0 | 1 + N ingest |
| MCP-3 | Home page rebuild (lock D-MICHAEL-BROOKS-LINE + D-BILINGUAL-LANGUAGES) | P-02 Pastor Williams + P-03 Youth Builder | P1 | 1 |
| MCP-4 | About + Curriculum rebuild | P-04 Mrs. Johnson | P2 | 1 |
| MCP-5 | Pilots + Get Involved rebuild | P-05 LAUSD-UCLA + P-07 Journalist | P2 | 1 |
| MCP-6 | Partners + Resources + Contact rebuild (lock D-PHYSICAL-ADDRESS) | P-06 Program Officer | P2 | 1 |
| MCP-7 | Cross-page audit + final ingest + ship + learning-store triage + AAR | All 8 personas (rotation) | P3 | 1 |

**Estimated total**: 8-10 sessions including N pixel-art ingest sessions in MCP-2's tail.

## Decision Register

### Locked at plan sign-off 2026-05-14

| ID | Decision | Choice |
|----|----------|--------|
| D-CAMPAIGN-FRAME | Civic Press as own campaign vs. M11 inside genesis | New campaign `campaign_civic_press_redesign` |
| D-VAULT-RENAME | Vault rename strategy | `context_commons.aDNA` → `ContextCommons.aDNA` (executed Workstream A) |
| D-PIXEL-ART-PIPELINE | How to produce ~30 pixel-art pieces | Dispatch to Herb's agent via cross-machine coordination + public GitHub remote |
| D-FONT-POSTURE | Licensed vs. FOSS-only display fonts | Open-source only |
| D-CLAUDE-MD-TRIM | Trim aggressiveness | Aggressive — target ~280–300 lines (executed Workstream A, landed at 284) |
| D-REPO-VISIBILITY | GitHub repo private vs. public | Public (flipped Workstream A) |

### Open — resolves in P0

| ID | Decision | Resolves at | Default lean |
|----|----------|-------------|--------------|
| D-FONT-PAIRING-FINAL | Pick display + body + functional FOSS faces with live specimens | MCP-0 | Fraunces (display, optical-size axis dialed to display) + Source Serif 4 (body) + JetBrains Mono (functional) |
| D-COLOR-TOKENS | Final hex values for paper / ink / press-red / civic-blue + bounded `--pixel-*` palette + WCAG AA contrast pairs | MCP-0 | Per directive §1: paper `#F4EFE6`, ink `#1A1714`, press-red `#C8321C`, civic-blue `#2A4E6E`. Tighten in MCP-0. |

### Open — resolves in P1/P2

| ID | Decision | Resolves at | Notes |
|----|----------|-------------|-------|
| D-MICHAEL-BROOKS-LINE | Final wording for footer dedicatory line | MCP-3 | Directive §8.3 draft: *"In memory of Michael Brooks, who taught us that a community has the right to be diagnosed by its own people."* |
| D-BILINGUAL-LANGUAGES | Final language list for footer signal | MCP-3 | Directive §8.4 draft: ESPAÑOL · 中文 · 한국어 · TAGALOG · հայերեն · SWAHILI · KAREN · ARABIC — TRANSLATIONS IN PREPARATION |
| D-PHYSICAL-ADDRESS | Contact page — include physical address at launch? | MCP-6 | Directive §7.3 raises the question. Honest "omit" is fine for launch. |

## OODA Log

| Date | Level | Observe | Orient | Decide | Act |
|------|-------|---------|--------|--------|-----|
| 2026-05-14 | Campaign | Workstream A closed cleanly in 1 session (vault rename + CLAUDE.md trim + iii bootstrap + GitHub public). Plan-mode sign-off locked 5 decisions; charter authored same day. Genesis M09/M10 paused. | Campaign-velocity memory pattern holds for infrastructure work, not just content. Plan decomposition was the key — granular sub-steps fit in single session. | Open Workstream B in same session. | B1: campaign directory + charter + governance authored. B2: 8 mission stubs queued. |

## Out of Scope

- **Vercel custom domain.** `contextcommons.vercel.app` is the launch URL; `contextcommons.org` not yet pointed at Vercel. Folding into MCP-7 is Stanley-discretion; otherwise out of scope.
- **VideoForge / PresentationForge wrapper configuration.** Genesis M09 and M10 are paused; they resume after MCP-7 ships.
- **Curriculum content overhaul.** The four-track curriculum framework is already III-reviewed at 4.2 avg quality. The redesign re-skins the presentation (catalogue-style index in MCP-4); curriculum body content stays.
- **Pilot plan revisions.** Pilot A (Grand Rapids) and Pilot B (Los Angeles) plans are drafted in `what/pilots/`. MCP-5 sharpens the *presentation* of those pilots (oral history archive emphasis for GR; bilingual-learning emphasis for LA) — but does NOT rewrite the underlying plans without community-steward sign-off (Standing Order #11).

## Cross-References

- Campaign governance + context-loading strategy: `CLAUDE.md` (this directory)
- Plan: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`
- Workstream A close: `how/sessions/history/2026-05/session_stanley_20260514_civic_press_workstream_a.md`
- III wrapper + cadence: `iii/CLAUDE.md`
- Persona registry: `iii/what/context/context_commons_iii_persona_registry.md`
- Public remote: <https://github.com/LatticeProtocol/ContextCommons.aDNA>
- Current site: <https://contextcommons.vercel.app/>
