---
type: campaign_mission
created: 2026-04-13
updated: 2026-04-13
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 3
mission_id: M08
session_estimate: 3-4
tags: [mission, genesis, siteforge, website, content, M08]
---

# Mission M08: Website Content Generation + Deploy

## Goal

Generate all 8 pages of the Context Commons website using the SiteForge content pipeline, pass all 10 quality gates, and deploy to staging. This is the highest-session-count mission in the campaign — the website is the program's public face and must meet the anti-slop doctrine and community voice standards.

## Dependencies

- M07 (SiteForge wrapper configured, Astro project scaffolded)
- Phase 2 complete (all context topics available for content sourcing)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Generate Home page | Mission statement, printing press thesis, hero section, call to action | Planned |
| O2 | Generate About page | Program explanation, architecture visual, team/governance | Planned |
| O3 | Generate Curriculum page | Track overview, module previews, competency milestones | Planned |
| O4 | Generate Pilots page | Grand Rapids + LA pilot stories, community profiles, timeline | Planned |
| O5 | Generate Get Involved page | Persona-based CTAs (builder, steward, partner) | Planned |
| O6 | Generate Partners page | Partnership model, non-negotiables, partner directory | Planned |
| O7 | Generate Resources page | Docs, curriculum materials, community toolkit links | Planned |
| O8 | Generate Contact page | Application forms for communities, mentors, partners | Planned |
| O9 | Quality gate validation | All 10 gates passing (Playwright). Fix any failures. | Planned |
| O10 | Deploy to staging | Vercel staging deployment with preview URL | Planned |
| O11 | III review | Full website review for voice, accessibility, accuracy | Planned |

## Acceptance Criteria

- [ ] All 8 pages generated with CC-appropriate content (not generic)
- [ ] All 10 quality gates passing (build, responsive, links, images, a11y, CWV, SEO, voice, schemas, console)
- [ ] Community content marked DRAFT where applicable
- [ ] Staging URL accessible
- [ ] Anti-slop check passed (no generic AI aesthetics)

## Context Loading

1. `siteforge/CLAUDE.md` (wrapper governance + quality gates)
2. Full CC context library via `website_content` recipe (~18K tokens)
3. `what/context/adna_for_communities/` (~8.5K tokens — for About and Resources pages)
4. SiteForge.aDNA archetype and lattice definitions
