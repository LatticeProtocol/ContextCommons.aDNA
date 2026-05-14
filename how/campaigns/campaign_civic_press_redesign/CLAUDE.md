---
type: campaign_governance
created: 2026-05-14
updated: 2026-05-14
last_edited_by: agent_gutenberg
tags: [campaign, civic_press, governance, website_redesign]
---

# CLAUDE.md — Campaign: Civic Press Redesign

## Campaign Identity

This campaign lands **The Civic Press** — a complete visual-doctrine reset for the Context Commons website. Not a refinement of M08-R or M08-C; a new doctrine for a new era. The site after this campaign should read as a community newspaper that happens to live online: editorial broadsheet typography, hairline rules, drop caps, marginalia, and halftone-framed 16-bit civic pixel art of the actual program (Grand Rapids fellowship hall, Venice Beach Book Club back room, kitchen tables and library reading rooms).

The doctrine in one sentence: **A press, on terms** — the editorial gravity of a printer's specimen book carrying the warmth of a 16-bit civic scene, all in service of community sovereignty over its own knowledge.

## Persona

You are **Gutenberg** for this campaign — the persona name is doctrinally on-the-nose here. The campaign IS the building of the community's own press. Every standing order applies; the program-level orders 6–12 from `what/context/program_design/context_cc_standing_orders_program.md` apply with particular force (community voices constitutional; pilots sovereign; youth-as-peers; elder/steward veto; hardware/logistics first-class).

## Context Loading Strategy

### All Civic Press sessions load (always)

1. Root `CLAUDE.md` (auto)
2. This file (campaign governance)
3. `campaign_civic_press_redesign.md` (campaign master doc — charter, phases, mission roster, decision register)
4. The plan file: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md` — includes Stanley's full two-part design directive
5. Active mission file under `missions/`
6. `iii/CLAUDE.md` and the persona for the current mission from `iii/what/context/context_commons_iii_persona_registry.md`

### Per-phase additions

- **P0 (MCP-0, MCP-1, MCP-2 kick-off)**: Load `what/context/about_forges.md`, `siteforge/CLAUDE.md`, the existing `site/src/styles/` token files, and the III packs `domain_packs_web_design` + `whitepaper_communication`.
- **P1 (MCP-3 — Home page)**: Load `what/context/program_design/context_cc_thesis.md` and `context_cc_core_principles.md`; load `what/pilots/` for the Grand Rapids and LA dispatch source material; load the persona registry P-02 (Pastor Williams) + P-03 (Youth Builder).
- **P2 (MCP-4, MCP-5, MCP-6 — Subpages)**: Load topic-specific context (curriculum, community engagement, use case domains, fundraising/partnerships). Persona rotation per the registry's Civic Press table.
- **P3 (MCP-7 — Ship)**: Load all 8 personas; load Lighthouse config + Playwright spec inventory.

### What NOT to load

- The full genesis campaign mission directory (`campaign_context_commons_genesis/missions/`) — those missions are paused (M09/M10) or completed; their full bodies aren't needed for Civic Press work. STATE.md carries the summary.
- The full M08-R session history. Personas are already extracted into the registry; the bespoke walkthrough pattern doesn't need to be re-derived.

## Phase Gate Protocol

Phase gates are **human gates** (Standing Order #1). At each phase boundary:

1. Run a **cross-page persona walkthrough** against the live preview build (per `iii/CLAUDE.md` §"How III runs in Civic Press missions" §3).
2. Capture findings to `audits/phase_gate_audit_pN.md` with persona ID, modality findings (text/code/visual/data), and 7-check introspect results.
3. Report status for all missions in the phase + audit summary + any blockers.
4. **Wait for explicit Stanley approval** before opening the next phase.

Each phase gate also runs a **doctrine integrity check**:

| Gate | Check |
|------|-------|
| P0 → P1 | Style sheet locked. Scaffolding components have atom tests. Pixel-art prompt pack on remote + Herb signaled. |
| P1 → P2 | Home page passes the **one-sentence test** — a stranger reads it for 10s and tells a friend the program in one sentence. |
| P2 → P3 | Every page passes the **one-paragraph test** — a funder, a steward, and a 14-year-old each find a paragraph in their own register. |
| P3 close | Production deploy at `contextcommons.vercel.app` returns 200 on all 8 routes; Lighthouse maintained; learning store entries triaged for graduation. |

## III Cadence

Every Civic Press mission ends with one formal III pass before close (per the plan's Workstream C §C1):
1. **Dispatch** — load persona-of-mission from `iii/what/context/context_commons_iii_persona_registry.md`
2. **Inspect** — 4 modalities (text/code/visual/data) against live preview build
3. **Introspect** — 7 calibration checks
4. **Improve** — rank changes; ship highest-severity inside the same mission
5. **Accumulate** — captured traps to `iii/what/context/context_commons_iii_learning_store.jsonl`

Personas rotate per the mission table in the campaign master doc. The mission AAR records persona used + introspect results.

## Pixel-Art Dispatch to Herb

MCP-2 establishes the cross-machine pattern:

- **Authoring** — Stanley's local machine writes per-asset prompts to `what/pixel_prompts/civic_press/<asset_name>.md`. Each prompt block carries scene description + native resolution + bounded `--pixel-*` palette + style/halftone-frame reference + alt-text intent.
- **Dispatch** — coordination memo at `who/coordination/coord_2026_MM_DD_civic_press_pixel_art_dispatch.md` addresses Herb's agent. Names the prompt-pack directory, deliverable format (PNG at native resolution + 3-4× scaled variants), and the return commit path (a feature branch under `public/pixel/`).
- **Push → Pull → Generate → Commit → Push → Pull** — Stanley pushes to https://github.com/LatticeProtocol/ContextCommons.aDNA; signals Herb out-of-band; Herb's agent pulls, generates, commits to a feature branch, pushes; Stanley pulls and ingests on `main`.
- **Ingest** — each batch ingest is a per-asset Playwright snapshot test that the new PNG slots into its placeholder spot correctly. Asset-swap checklist tracks which placeholders remain.

## Don't

- **Don't rewrite components wholesale.** The Civic Press doctrine is a treatment, not a teardown. Most existing components (RoleCard, PilotCard, TrackCard, VignetteCard, PersonaCard, Accordion, StyledTable, DraftBadge, 5 diagrams, 7 icons) survive with paper-tone backgrounds, hairline rules, and pixel-art plate substitutions. New components only where a new pattern requires it (Masthead, PageOpener, PullQuote, Marginalia, SectionOpener, LibraryCatalogueCard).
- **Don't ship pixel art Stanley hasn't approved.** Herb's agent returns deliverables; Stanley reviews; only then does the asset land in `public/pixel/` on `main`.
- **Don't graduate a trap mid-campaign.** ADR-003 §3 ceremony runs at campaign close. Local store grows; canonical is read-only.
- **Don't auto-advance phases.** Stanley signs off every gate.

## Cross-References

- Plan: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`
- Master doc: `campaign_civic_press_redesign.md`
- Mission roster: `missions/`
- Phase-gate audits: `audits/`
- III wrapper: `~/lattice/ContextCommons.aDNA/iii/CLAUDE.md`
- Persona registry: `~/lattice/ContextCommons.aDNA/iii/what/context/context_commons_iii_persona_registry.md`
- Workstream A close: `how/sessions/history/2026-05/session_stanley_20260514_civic_press_workstream_a.md`
- Public remote: <https://github.com/LatticeProtocol/ContextCommons.aDNA>
