---
type: campaign_mission
created: 2026-04-13
updated: 2026-04-13
status: completed
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 3
mission_id: M07
session_estimate: 1
session_actual: 1
tags: [mission, genesis, siteforge, branding, M07]
---

# Mission M07: SiteForge Wrapper Setup + Branding

## Goal

Configure the SiteForge wrapper for the Context Commons website. Validate branding.json, finalize voice mappings, verify federation refs against current SiteForge.aDNA lattice versions, and ensure the wrapper is ready for content generation in M08.

## Dependencies

- M01 (program_design context — provides thesis, principles, architecture for branding decisions)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Validate and refine branding.json | Verified color palette (WCAG AA pass), added accent_dark (#8B6914, 5.09:1), contrast_notes field. Typography confirmed. | **Complete** |
| O2 | Finalize voice mapping YAML | cc_voice_mapping.yaml: 8 pages mapped with primary/secondary voice, tone notes, key messages, content sources, 14 anti-slop terms, 5 substitution rules | **Complete** |
| O3 | Verify federation refs | scaffold 3.0.0 and builder 2.0.0 confirmed matching SiteForge.aDNA. No version drift. | **Complete** |
| O4 | Scaffold Astro 6 project | site/ initialized: Astro 6 + Tailwind v4 + Vercel adapter + MDX + sitemap. 9 pages (8 content + 404). 5 content collections (Zod 4). CC branding CSS. Build succeeds (642ms). | **Complete** |
| O5 | III review | Inspect: all configs accurate. Introspect: no favicon/images yet (M08). Improve: light-mode-first, serif heading tweaks. | **Complete** |

## Acceptance Criteria

- [x] branding.json validated with accessible color contrast (WCAG AA)
- [x] Voice mapping covers all 8 page types
- [x] Federation refs verified against SiteForge.aDNA current versions
- [x] Astro 6 project scaffolded in site/ with build succeeding
- [x] Content collection schemas defined for all page types

## Context Loading

1. `siteforge/CLAUDE.md` (wrapper governance)
2. `siteforge/what/context/branding.json` (existing branding)
3. `what/context/program_design/` (thesis, principles — inform voice)
4. SiteForge.aDNA lattice definitions (federation source)

## AAR (After Action Review)

| Field | Notes |
|-------|-------|
| **Worked** | WGA reference site provided clear, proven patterns for Astro 6 + Tailwind v4 + Vercel. Branding overlay pattern (tokens → branding → global CSS) is clean and composable. |
| **Didn't** | Font files require manual copy from node_modules to public/fonts/; fontsource import via CSS @import would be cleaner but @font-face with self-hosted woff2 is better for CWV. |
| **Finding** | Accent gold (#D4A843) fails WCAG AA on white even for large text (2.21:1). Added accent_dark (#8B6914, 5.09:1) as AA-safe text variant. All primary greens pass easily. |
| **Change** | Light-mode first (not dark-mode like WGA) — CC is community-facing; elders and youth on school devices expect light default. |
| **Follow-up** | M08 needs: favicon, OG image, community-specific content (marked DRAFT), Playwright test suite, all 10 quality gates passing. |
