---
type: decision_artifact
created: 2026-05-14
updated: 2026-05-14
status: locked
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
mission: MCP-0
locks_decisions: [D-FONT-PAIRING-FINAL, D-COLOR-TOKENS]
tags: [style_sheet, civic_press, design_tokens, foss_fonts, mcp0]
---

# The Civic Press — Style Sheet v1.0

*Editorial broadsheet × 16-bit civic pixel art × open-standard quiet authority.*

This is the one-page locked reference for the Civic Press doctrine. Every subsequent campaign mission (MCP-1 scaffolding, MCP-2 pixel-art prompts, MCP-3+ page rebuilds) builds against the values fixed here. If a value must change, run a campaign-scoped ADR; do not edit ad hoc.

## Type system — FOSS only

| Role | Face | Weights installed | License | Use |
|---|---|---|---|---|
| **Display** | **Fraunces** | 400 / 600 / 700 / 900 | SIL OFL 1.1 | H1-H2, mastheads, drop caps, kickers. Anchor at 700; reserve 900 for hero broadsheet headlines. |
| **Body** | **Source Serif 4** | 400 / 400-italic / 600 / 700 | SIL OFL 1.1 | All paragraph text, captions, standfirsts. Italic only for emphasis and pull-quotes. |
| **Functional** | **JetBrains Mono Variable** | wght 100–800 (variable) | SIL OFL 1.1 | Code blocks, dateline strips, status chips, marginalia metadata, any monospaced UI text. |

**Optical-size axis (Fraunces)** — deferred. This @fontsource install ships fixed weights, not the variable file. If the broadsheet hero starts feeling cramped at large sizes, swap to `@fontsource-variable/fraunces` (one-line change in `package.json`).

**Departure Mono (in-scene pixel lettering)** — deferred until MCP-2 pixel-art arrives. We'll evaluate whether real PNG pixel-lettering is enough or whether a runtime web font is needed.

**Self-hosted woff2** at `site/public/fonts/`. Preload via `<link rel="preload">` in `BaseLayout.astro` for `fraunces-700.woff2` (display anchor) + `source-serif-4-400.woff2` (body anchor).

### Size scale (modular, 1.25 ratio — preserved from prior token system)

| Token | Scale | Recommended use |
|---|---|---|
| `--text-xs` | 0.70 → 0.80 rem | dateline strip, footer fine print |
| `--text-sm` | 0.80 → 0.90 rem | meta, captions, status chips |
| `--text-base` | 1.00 → 1.10 rem | body paragraphs |
| `--text-lg` | 1.125 → 1.30 rem | standfirsts, lead paragraphs |
| `--text-xl` | 1.25 → 1.60 rem | H3 section openers |
| `--text-2xl` | 1.50 → 2.00 rem | H2 page sections |
| `--text-3xl` | 1.875 → 2.80 rem | H1 page titles |
| `--text-4xl` | 2.25 → 3.60 rem | landing-page kickers |
| `--text-5xl` | 3.00 → 4.50 rem | broadsheet hero (Fraunces 900) |

### Line height + measure

- Body line-height **1.6** (preserved from prior — works for serif body)
- Heading line-height **1.2** (preserved)
- Letter-spacing **0.01em** on h1-h4 (preserved)
- Prose max-width **65ch** (`--prose-width`), narrow **42rem**, wide **48rem**

## Color tokens — four colors + pixel palette

### The Four

| Color | Hex | Variants | WCAG on paper (#F4EFE6) | Doctrine role |
|---|---|---|---|---|
| **Paper** | `#F4EFE6` | `paper-alt #F8F3EA`, `paper-rule #E5DCC9` | n/a (surface) | Page background. Warm newsprint. |
| **Ink** | `#1A1714` | `ink-depth #15110D`, `ink-soft #3D3530`, `ink-soft-2 #5A4E45` | 16.7:1 base / 9.8:1 soft / 6.2:1 soft-2 | All body text. Deep, slightly warm editorial black. |
| **Press red** | `#C8321C` | `press-red-depth #B83A2B`, `press-red-tint` (8%) | 4.65:1 (AA body / AAA large) | Banner accent, section openers, highlight rules. Use sparingly. |
| **Civic blue** | `#2A4E6E` | `civic-blue-depth #1F3A52`, `civic-blue-tint` (8%) | 8.43:1 (AAA body) | Primary action / link. Quiet authority. |

**AA-safe variants**:
- For body text that needs muting (meta, captions): `--ink-soft #3D3530` (9.8:1)
- For even lighter muting (timestamps, byline fine print): `--ink-soft-2 #5A4E45` (6.2:1)
- For tinted backgrounds: `--press-red-tint` or `--civic-blue-tint` (8% rgba)

### The Pixel Palette (bounded — 12 colors)

For 16-bit civic pixel-art commissions in MCP-2. Use in PNG generation only; CSS exposure of these as `--pixel-*` is for marginalia/decoration support, not bulk styling.

| Token | Hex | Role |
|---|---|---|
| `--pixel-paper` | `#F4EFE6` | highlight / page |
| `--pixel-paper-shadow` | `#E5DCC9` | paper midtone |
| `--pixel-ink` | `#1A1714` | outline / deepest dark |
| `--pixel-ink-mid` | `#4A3D2F` | warm mid-dark |
| `--pixel-press-red` | `#C8321C` | primary accent |
| `--pixel-press-red-deep` | `#8B2418` | accent depth |
| `--pixel-civic-blue` | `#2A4E6E` | primary blue |
| `--pixel-civic-blue-deep` | `#1F3A52` | blue depth |
| `--pixel-sage` | `#7A8B6E` | natural / outdoor cool |
| `--pixel-amber` | `#D4A843` | warm interior / lamp |
| `--pixel-bone` | `#C9BFA8` | off-white midtone |
| `--pixel-rust` | `#A06040` | warm earth / wood |

**Constraint**: every commissioned PNG renders using only these 12 colors. No anti-aliasing outside the palette; halftone where transitions are needed.

## Motion — four rules (per Stanley's directive §1)

1. **Fade + 1.5rem rise on entry** (preserved from `data-animate` system). 600ms cubic-bezier(0.25, 0.1, 0.25, 1).
2. **No parallax, no auto-rotating carousels.** The press doesn't move while you read it.
3. **Hover transitions** are 250ms (`--transition-base`). Press-red and civic-blue backgrounds darken to their `-depth` variant on hover.
4. **`prefers-reduced-motion: reduce`** disables all transitions and entry animations. Already wired in `tokens.css` + `global.css`.

## Spacing rhythm

Preserved from prior token system (4px base):
- `--space-1` through `--space-32` for vertical/horizontal rhythm
- Page sections use `--space-16` or `--space-24` for top/bottom
- Pull-quotes and marginalia use `--space-6` margins

## Hairline rules — the editorial signature

- Section dividers: 1px solid `--paper-rule` (or `--ink` at 20% opacity for higher-contrast frames)
- Drop caps: float left, height = 3 lines, color `--ink`, font `--font-display` weight 900
- Pull-quotes: left border 3px solid `--press-red`, padding-left `--space-6`, italic 1.125rem body
- Marginalia: small (--text-xs), mono (`--font-mono`), color `--ink-soft-2`, right-aligned on desktop, inline on mobile

## Backward-compatibility aliases (transitional, removed at MCP-7)

Old M08-R token names point at new values so existing components don't 404:

| Old name | New target |
|---|---|
| `--brand-primary` | `--civic-blue` |
| `--brand-primary-dark` | `--civic-blue-depth` |
| `--brand-primary-light` | `#4A6F8C` (lightened civic blue) |
| `--brand-accent` | `--press-red` |
| `--brand-accent-light` | `#E66848` |
| `--brand-accent-dark` | `--press-red-depth` |
| `--color-bg` (light) | `--paper` |
| `--color-text` (light) | `--ink` |
| `--color-primary` (light) | `--civic-blue` |
| `--color-accent` (light) | `--press-red` |

MCP-1 onward migrates component classes to semantic names. Aliases retire at MCP-7 cross-page audit.

## See also

- Branding CSS (canonical token implementation): `site/src/styles/branding.css`
- Base tokens (size/space/motion, untouched): `site/src/styles/tokens.css`
- Voice mapping (editorial-voice rules + two-birds-line schedule): `siteforge/what/context/cc_voice_mapping.yaml`
- Campaign master doc: `how/campaigns/campaign_civic_press_redesign/campaign_civic_press_redesign.md`
- Mission file: `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp0_design_tokens.md`
- Plan: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`
