---
type: campaign
created: 2026-04-12
updated: 2026-04-12
status: active
last_edited_by: agent_gutenberg
tags: [campaign, genesis, bootstrap]
phase: 1
phase_status: planned
mission_count: 15
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
| M01 | Context Ingestion: Program Design (deepen seeds) | 2 | Planned |
| M02 | Context Ingestion: Curriculum Framework | 2 | Planned |
| M03 | Context Ingestion: Community Engagement | 1 | Planned |

**Phase gate**: All context files created, measured, III-reviewed. Context recipes validated. Governance files coherent. Token budgets within +/-15%. Community and partner profiles populated. Curriculum Council charter drafted. M01-M06 mission stubs created with acceptance criteria.

### Phase 2: Pilots & Use Cases (M04-M06, ~5-7 sessions)

**Objective**: Design the pilot programs and build the use case library.

| Mission | Title | Sessions | Dependencies |
|---------|-------|----------|-------------|
| M04 | Pilot Program Design | 2 | M01, M03 |
| M05 | Use Case Domain Library | 2-3 | M01 |
| M06 | aDNA for Communities (translational layer) | 1-2 | M02 |

**Phase gate**: Full context library complete (6 CC topics, all III-reviewed). Pilot community profiles enriched with steward input. Use case library with 5+ documented cases. Pilot A and Pilot B designs drafted. User approval on pilot designs before proceeding.

### Phase 3: Infrastructure (M07-M10, ~8-10 sessions)

**Objective**: Build the public-facing infrastructure — website and forge integrations.

| Mission | Title | Sessions | Dependencies |
|---------|-------|----------|-------------|
| M07 | SiteForge Wrapper Setup + Branding | 1 | M01 |
| M08 | Website Content Generation + Deploy | 3-4 | M07, Phase 2 complete |
| M09 | VideoForge Wrapper Setup | 1 | M01 |
| M10 | PresentationForge Wrapper Setup | 1 | M01 |

**Phase gate**: Website deployed to staging with 10/10 quality gates. All three forge wrappers operational. Branding.json finalized.

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
  │       └──→ M07 ──→ M08 ──→ M11
  │                           ──→ M12 ──→ M13
  ├──→ M02 ──→ M06 ──────────────→ M12
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
