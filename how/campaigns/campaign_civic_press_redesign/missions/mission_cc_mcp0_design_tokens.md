---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 0
mission_id: MCP-0
session_estimate: 1
iii_persona: P-01 Technical Reviewer
tags: [mission, civic_press, design_tokens, style_sheet, p0]
---

# Mission MCP-0: Design Tokens + Style Sheet

## Goal

Lock the visual doctrine before any layout work. Produce a one-page style sheet that captures D-FONT-PAIRING-FINAL (open-source faces) and D-COLOR-TOKENS (four-color palette + bounded pixel palette + WCAG AA pairs). Install the FOSS fonts via `@fontsource`. Update the CSS token file. Update `siteforge/cc_voice_mapping.yaml` with the new editorial voice rules (plain-spoken authority, strike hedges, strike second-person pep, two-birds-line placement schedule).

## Dependencies

- Workstream A complete (vault renamed, CLAUDE.md trimmed, iii/ wrapper in place, GitHub public)
- Plan locked: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`
- Existing token files in `site/src/styles/`

## Decisions to Lock

| ID | Decision | Approach |
|----|----------|----------|
| D-FONT-PAIRING-FINAL | Display + body + functional FOSS faces | Compare Fraunces vs. similar display (optical-size axis at display); Source Serif 4 vs. Newsreader for body; JetBrains Mono vs. Departure Mono for functional. Render live specimens at headline + standfirst + small caps. Stanley signs the pairing. |
| D-COLOR-TOKENS | Final hex values for paper / ink / press-red / civic-blue + `--pixel-*` palette | Start from directive defaults (paper `#F4EFE6`–`#F8F3EA`, ink `#1A1714`, press-red `#C8321C`, civic-blue `#2A4E6E`). Verify 4.5:1 contrast for body, 3:1 for large text. Document the bounded pixel palette (~12 colors) as a separate token block per the directive's §1 spec. |

## Focus Areas

1. **Type system installation.** `npm i @fontsource/fraunces @fontsource/source-serif-4 @fontsource-variable/jetbrains-mono` (or chosen variants). Copy woff2 to `site/public/fonts/`. Update CSS `@font-face` declarations. Preload the display face.
2. **CSS token refactor.** Replace the existing brand-primary / brand-accent palette with the four-color set. Add a separate `--pixel-*` block for the bounded palette. Keep accessibility-safe variants (`--ink-dark`, etc.) for AA edge cases.
3. **Style sheet artifact.** Author `what/decisions/civic_press_style_sheet.md` as a one-page reference: chosen type pairing with sample sizes/line-heights, the four colors with contrast pairs, the pixel palette, the four motion rules from directive §1 ("Motion"), and the spacing/measure rules.
4. **Voice mapping update.** Edit `siteforge/cc_voice_mapping.yaml`: add editorial-voice rules per directive §8.1 ("Strike the hedges / Strike the second-person pep / One specific noun beats three abstract ones"), plus the two-birds-line placement schedule (4 placements per directive §8.2).
5. **III pass before close.** Persona P-01 Technical Reviewer. Inspect: token consistency, type-fallback chain, contrast pairs, voice-mapping internal consistency.

## Success Criteria

- D-FONT-PAIRING-FINAL signed; specimens in `what/decisions/civic_press_style_sheet.md`.
- D-COLOR-TOKENS signed; hex values + WCAG pairs documented.
- `site/src/styles/tokens.css` (or equivalent) updated.
- `site/package.json` shows the new `@fontsource` packages.
- `site/public/fonts/` contains the woff2 files for the locked pairing.
- `siteforge/cc_voice_mapping.yaml` updated with editorial-voice rules + two-birds-line schedule.
- `npm run build` green inside `site/`; all existing Playwright tests still pass; Lighthouse held.
- III ACCUMULATE wrote ≥1 trap to `iii/what/context/context_commons_iii_learning_store.jsonl` (or explicitly logged "no new traps").
- Mission AAR appended.

## Not in scope

- New components — that's MCP-1.
- Page rewrites — that's MCP-3 onward.
- Pixel-art prompts — that's MCP-2.

## AAR

(pending mission close)
