---
type: campaign
created: 2026-04-12
updated: 2026-04-15
status: active
last_edited_by: agent_gutenberg
tags: [campaign, genesis, bootstrap]
phase: 3
phase_status: active
mission_count: 16
session_estimate: 25-33
---

# Campaign: Context Commons Genesis

## Goal

Bootstrap the Context Commons from raw context dump to operational headquarters. When this campaign completes, the project has:

- A customized aDNA vault with full governance and 12 ontology extensions
- A populated context library (~47K new tokens across 6 CC topics + ~75K inherited)
- A live website deployed via SiteForge (8 pages, organization_landing archetype)
- Operational forge wrappers (SiteForge, VideoForge, PresentationForge)
- Initial community and mentor profiles
- A detailed execution plan for Pilot A (Grand Rapids, Q3 2026)

## Victory Conditions

1. All 6 CC context topics created, measured, and III-reviewed
2. Website deployed with 10/10 quality gates passing
3. Community onboarding kit complete and reviewed
4. Pilot A plan approved by user with timeline, logistics, and success metrics
5. Campaign AAR filed with lessons learned

## Phase Structure

### Phase 1: Foundation (M00-M03, ~6-8 sessions)

**Objective**: Establish the knowledge foundation — governance, context library, and campaign structure.

| Mission | Title | Sessions | Status |
|---------|-------|----------|--------|
| M00 | Campaign Planning & Project Buildout | 2-3 (actual: 1) | **Completed** |
| M01 | Context Ingestion: Program Design (deepen seeds) | 2 (actual: 1) | **Completed** |
| M02 | Context Ingestion: Curriculum Framework | 2 (actual: 1) | **Completed** |
| M03 | Context Ingestion: Community Engagement | 1 (actual: 1) | **Completed** |

**Phase gate**: All context files created, measured, III-reviewed. Context recipes validated. Governance files coherent. Token budgets within +/-15%. Community and partner profiles populated. Curriculum Council charter drafted. M01-M06 mission stubs created with acceptance criteria.

### Phase 2: Pilots & Use Cases (M04-M06, ~5-7 sessions)

**Objective**: Design the pilot programs and build the use case library.

| Mission | Title | Sessions | Dependencies |
|---------|-------|----------|-------------|
| M04 | Pilot Program Design | 2 (actual: 1) | **Completed** |
| M05 | Use Case Domain Library | 2-3 (actual: 1) | **Completed** |
| M06 | aDNA for Communities (translational layer) | 1-2 (actual: 1) | **Completed** |

**Phase gate**: Full context library complete (6 CC topics, all III-reviewed). Pilot community profiles enriched with steward input. Use case library with 5+ documented cases. Pilot A and Pilot B designs drafted. User approval on pilot designs before proceeding.

### Phase 3: Infrastructure (M07-M10 + M08-R, ~18-20 sessions)

**Objective**: Build the public-facing infrastructure — website, forge integrations, and visual refinement.

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| M07 | SiteForge Wrapper Setup + Branding | 1 (actual: 1) | M01 | **Completed** |
| M08 | Website Content Generation + Deploy | 3-4 (actual: 1) | M07, Phase 2 | **Completed** |
| M08-R | Website Refinement — 100 III Loops | 10 (actual: 10) | M08 | **Completed** |
| M09 | VideoForge Wrapper Setup | 1 | M01 | Planned |
| M10 | PresentationForge Wrapper Setup | 1 | M01 | Planned |

**Phase gate**: Website deployed to staging with 10/10 quality gates passing. 100 III loops complete with persona walkthroughs validated. All three forge wrappers operational. Branding.json finalized.

**R1 finding**: ~40% of site content lives in inline sections (tables, pilot cards, vignettes) outside shared components. Remaining batches must address this two-tier quality gap. See mission file gap register.

**R2 finding**: Voice alignment removed 14 jargon phrases from HOME/ABOUT/PARTNERS/Footer. Two new components extracted (ValueCard, PartnershipTypeCard). Shared components must be audited in every voice batch. Residual jargon on curriculum/get-involved/resources deferred to R3+.

**R3 finding**: 5 SVG diagram components introduced (EngagementLifecycle, PilotTimeline, KnowledgeEconomyCycle, WhoWhatHowTriad, ThreeRoleLoop). Full-site jargon clearance completed (11 additional instances across curriculum/get-involved/resources). Wide SVGs (>500px viewBox) need mobile-specific layouts. 3 gap register items closed (knowledge economy, pilot timeline, engagement lifecycle).

**R4 finding**: 6 SVG icon components (IconHammer, IconShield, IconBook, IconBooks, IconHandshake, IconCompass) replaced 14 emoji instances across 4 pages + 4 YAML data files. RoleCard/PersonaCard use Astro named slots; TrackCard uses string-to-component mapping for YAML-driven data. Gap register undercounted emoji (7 vs 14) — always grep before batches.

**R5 finding**: 7 tables styled with StyledTable.astro wrapper (card-wrap + zebra + hover + scope="col"). Glossary restyled with border-l accent. Mobile card-stacks for comparison tables. Persuasion tint on App vs. Agent "Community Agent System" column. 8 of 13 original gap register items now closed. 212 Playwright tests passing.

**R7 finding**: 2 new components (PilotCard, PilotGlanceCard) componentized the last inline pilot cards. Journalist persona added human anchors (Mrs. Johnson, Venice Beach Book Club mother, Mrs. Chen/Mr. Davis) across 5 content blocks. Cross-page fact consistency verified — all numbers, names, and dates agree across all pages. 250 Playwright tests passing. 10 of 13 original R1 gap items closed (3 remain: contact boxes R8, detail sections R8, header R9).

**R8 finding**: ContactPathCard.astro + DetailSection.astro + IconEnvelope.astro created. 4 contact path boxes replaced with audience-specific accent borders and icons (green=community, gold=mentor, light green=partner, neutral=general). 4 detail sections wrapped with card treatment and column containment. PersonaCard extended with optional anchor links to detail sections. Voice refinement from context files: mentor card describes concrete responsibilities and peer cohort; partner card names four types; community card includes youth pathfinding note. 298 Playwright tests passing. 12 of 13 original R1 gap items closed (1 remains: header R9).

**Live III audit (2026-04-15)**: Site deployed to Vercel production (`https://site-nu-lovat.vercel.app`). 10-cycle III audit on live site found 2 jargon violations in YAML data files (fixed). Cross-page fact consistency verified. Meta-III of the refinement process identified 8 methodology gaps: no Lighthouse CI, no performance budgets, limited a11y testing, no hero imagery, YAML content blind spot, no cross-page link crawl, uneven persona coverage, no deploy-time validation. R9 expanded to absorb hero image (P0), Lighthouse CI (P1), a11y hardening (P1). R10 expanded for deployment readiness.

**R10 finding**: All 8 persona walkthroughs validated — no regressions, no actionable P0/P1 code fixes. Content completeness sweep: zero jargon, zero placeholders across all file types. Lighthouse maintained 100/100/96/100. 332 Playwright tests, 9/10 quality gates. **M08-R mission complete — 100/100 III loops across 10 batches in 10 sessions.**

### Phase 4: Launch Preparation (M11-M14, ~6-8 sessions)

**Objective**: Create community-facing materials and prepare for Pilot A launch.

| Mission | Title | Sessions | Dependencies |
|---------|-------|----------|-------------|
| M11 | Mentor Recruitment Materials | 2 | M08, M10 |
| M12 | Community Onboarding Kit | 2 | M08, M06 |
| M13 | Pilot A Detailed Plan (Grand Rapids, Q3 2026) | 1-2 | M04, M12 |
| M14 | Campaign Closeout & Handoff | 1 | All |

**Phase gate**: Website production-ready. Mentor and community materials complete. Pilot A plan approved. Campaign AAR filed.

## Timeline

| Phase | Missions | Calendar Target |
|-------|----------|----------------|
| Phase 1: Foundation | M00-M03 | Apr-May 2026 |
| Phase 2: Pilots & Use Cases | M04-M06 | May-Jun 2026 |
| Phase 3: Infrastructure | M07-M10 | Jun-Jul 2026 |
| Phase 4: Launch Preparation | M11-M14 | Jul-Aug 2026 |
| **Pilot A Launch** | — | **Q3 2026** |
| **Pilot B Launch** | — | **Q4 2026** |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Context dump incomplete for some topics | Medium | Flag gaps as `#needs-human`. Create placeholder files with known-gap sections. |
| Community voices unavailable during build | High | All community-facing content marked DRAFT. Standing Order #7 enforces review. |
| Curriculum-as-context-graph confusing for students | Medium | The `adna_for_communities` topic addresses translation. Test with non-technical readers before pilot. |
| Q3 2026 timeline tight for Pilot A | Medium | Phase 4 can be compressed if earlier phases run clean. |
| Partnership conversations delayed | Low | Partnership materials ready for when conversations happen. No hard dependency on signed agreements for pilot launch. |

## Mission Dependency Graph

```
M00 ──→ M01 ──→ M04 ──→ M13
  │       │       │
  │       ├──→ M05 │
  │       │       │
  │       └──→ M07 ──→ M08 ──→ M08-R ──→ M11
  │                                    ──→ M12 ──→ M13
  ├──→ M02 ──→ M06 ────────────────────────→ M12
  │
  ├──→ M03 ──→ M04
  │
  ├──→ M09
  │
  └──→ M10 ──→ M11
                    M14 (depends on all)
```

## Context Loading

For campaign-level work, load the `campaign_design` recipe from `what/context/context_recipes.md` plus this campaign document. For mission-specific work, load only the mission file and its referenced context topics.
