---
type: campaign_mission
created: 2026-04-13
updated: 2026-04-13
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 3
mission_id: M07
session_estimate: 1
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
| O1 | Validate and refine branding.json | Verified color palette, typography, social links. Accessibility contrast check on primary/accent colors. | Planned |
| O2 | Finalize voice mapping YAML | cc_voice_mapping.yaml with register → page type mappings for all 8 pages | Planned |
| O3 | Verify federation refs | Confirm SiteForge.aDNA lattice versions match wrapper refs. Report any version drift. | Planned |
| O4 | Scaffold Astro 6 project | Initialize site/ with Astro 6 project structure, content collection schemas (Zod 4), and CC branding integration | Planned |
| O5 | III review | Review wrapper configuration for completeness and consistency | Planned |

## Acceptance Criteria

- [ ] branding.json validated with accessible color contrast (WCAG AA)
- [ ] Voice mapping covers all 8 page types
- [ ] Federation refs verified against SiteForge.aDNA current versions
- [ ] Astro 6 project scaffolded in site/ with build succeeding
- [ ] Content collection schemas defined for all page types

## Context Loading

1. `siteforge/CLAUDE.md` (wrapper governance)
2. `siteforge/what/context/branding.json` (existing branding)
3. `what/context/program_design/` (thesis, principles — inform voice)
4. SiteForge.aDNA lattice definitions (federation source)
