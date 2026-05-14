---
type: session
session_id: session_stanley_20260514_civic_press_workstream_b
created: 2026-05-14
updated: 2026-05-14
status: completed
operator: stanley
agent: gutenberg
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
mission: workstream_b (campaign open + scaffolding)
tier: 2
predecessor_session: session_stanley_20260514_civic_press_workstream_a
tags: [session, civic_press, campaign_open, mission_stubs, workstream_b]
---

# Session — Civic Press Workstream B (campaign open + 8 mission stubs)

## Intent

Execute Workstream B of the plan at `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`:

- **B1** — open `campaign_civic_press_redesign/` with campaign governance CLAUDE.md, master doc, missions/ + audits/ directories, what/pixel_prompts/ directory
- **B2** — author 8 mission stub files (MCP-0 through MCP-7)
- **B3** — session close + STATE.md tick + commit + push

Ran in same Claude conversation as Workstream A, but logically a separate session per CC's one-session-per-mission convention.

## Scope declaration

**New files inside CC vault:**
- `how/campaigns/campaign_civic_press_redesign/CLAUDE.md` (campaign governance)
- `how/campaigns/campaign_civic_press_redesign/campaign_civic_press_redesign.md` (master doc: charter, phases, mission roster, decision register)
- `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp{0,1,2,3,4,5,6,7}_*.md` (8 mission stubs)
- `how/campaigns/campaign_civic_press_redesign/audits/.gitkeep` (phase-gate audit landing)
- `what/pixel_prompts/.gitkeep` (MCP-2 prompt pack landing)
- `how/sessions/history/2026-05/session_stanley_20260514_civic_press_workstream_b.md` (this file)

**Modified files inside CC vault:**
- `STATE.md` (Workstream B close tick)

## Conflict scan

No active sessions (workstream_a was closed and moved to history before B opened).

## Progress log

- **2026-05-14 — B1 complete.** Campaign directory scaffolded. `CLAUDE.md` authored (campaign-scoped governance including context-loading strategy per-phase, phase-gate protocol with doctrine integrity checks, III cadence wiring, pixel-art dispatch pattern documentation, explicit don'ts). `campaign_civic_press_redesign.md` master doc authored with charter, victory conditions, 4-phase structure, 8-mission roster table with persona assignments, decision register listing 6 locked decisions (from plan sign-off) + 2 open in P0 + 3 open in P1/P2, OODA log opening row, out-of-scope list. `missions/`, `audits/`, and top-level `what/pixel_prompts/` directories created.
- **2026-05-14 — B2 complete.** All 8 mission stub files authored: MCP-0 (design tokens + style sheet, P-01 persona), MCP-1 (shared scaffolding 8 components, P-08), MCP-2 (pixel-art prompt pack + dispatch to Herb, no III persona), MCP-3 (home page rebuild with one-sentence test as P1 gate, P-02 + P-03 two-pass), MCP-4 (about 5-leaves + curriculum catalogue, P-04), MCP-5 (pilots dispatches + get-involved four-quadrant, P-05 + P-07 two-pass), MCP-6 (partners terms-of-engagement + resources library + contact front desk, P-06), MCP-7 (cross-page audit + ship + AAR + trap graduation, all 8 personas final sweep). Each stub carries: frontmatter (persona, phase, session_estimate), goal, dependencies, focus areas, success criteria, what's in scope vs. not, pending-AAR placeholder. Two-birds-line placements explicitly tracked across MCP-3 (placement #1 hero hinge), MCP-4 (placement #2 About Leaf I close), MCP-5 (placements #3 LA mentorship paragraph + #4 Builder column "What you'll earn").

## Workstream B SITREP

**Completed (B1-B3):**
- Campaign directory + governance + master doc
- 8 mission stubs (MCP-0..MCP-7)
- 2 new top-level directories (`what/pixel_prompts/` + `campaign/audits/`)
- This session file
- STATE.md tick (next)
- Commit + push (next)

**Files touched:**
- 1 campaign CLAUDE.md (new)
- 1 campaign master doc (new)
- 8 mission stub files (new)
- 2 .gitkeep files (new)
- 1 session file (new — this file)
- 1 STATE.md (modified)
- Total: 12 new files + 1 modified

**Blockers:** None.

**Next up:** Workstream B closes here. Workstream C (III cadence) is **interleaved** with the missions — not a standalone workstream session. **MCP-0 (design tokens + style sheet)** is the next mission to open in a fresh session.

## Next Session Prompt

> **Open Civic Press MCP-0 — Design Tokens + Style Sheet.** Pre-reads (in order): root `CLAUDE.md`, campaign governance at `how/campaigns/campaign_civic_press_redesign/CLAUDE.md`, campaign master doc, mission file `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp0_design_tokens.md`, the plan at `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md` (full design-directive context), `iii/CLAUDE.md`, persona P-01 (Technical Reviewer) from `iii/what/context/context_commons_iii_persona_registry.md`. Goal: lock D-FONT-PAIRING-FINAL with live FOSS specimens (Fraunces vs. similar display + Source Serif 4 vs. Newsreader + JetBrains Mono vs. Departure Mono), lock D-COLOR-TOKENS (paper #F4EFE6, ink #1A1714, press-red #C8321C, civic-blue #2A4E6E + bounded `--pixel-*` palette, WCAG AA contrast pairs), install `@fontsource` packages, update `site/src/styles/tokens.css`, ship `what/decisions/civic_press_style_sheet.md`, update `siteforge/cc_voice_mapping.yaml` with editorial-voice rules + two-birds-line placement schedule. Close with III pass (P-01) + AAR + commit + push.
