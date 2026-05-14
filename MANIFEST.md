---
type: manifest
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [manifest, governance]
---

# Context Commons — Project Manifest

## Project Identity

**Context Commons** — Community-driven agentic literacy, enablement, and support program. An intergenerational mentorship network teaching youth to build context-driven AI systems that serve their communities, while empowering elders and stewards to govern and benefit from those systems.

Built on the aDNA Context Graph Standard and the Lattice Protocol. *"Every community deserves its own printing press. We are here to help them build it."*

## Architecture

This project uses the **aDNA (Agentic DNA)** knowledge architecture — a bare triad deployment extended with 12 domain-specific entity types and 3 forge wrappers.

```
ContextCommons.aDNA/
├── what/        # WHAT — Knowledge, context library, curriculum, use cases
├── how/         # HOW — Operations, campaigns, tracks, curriculum modules
├── who/         # WHO — Communities, mentors, stewards, builders, partners
├── siteforge/   # Forge wrapper — Context Commons website
├── videoforge/  # Forge wrapper — educational videos
├── presentationforge/  # Forge wrapper — pitch decks, council presentations
└── site/        # Generated Astro 6 website (SiteForge output)
```

| Layer | Question | Contains |
|-------|----------|----------|
| **what/** | WHAT does this project know? | Context library (5 inherited + 7 CC topics), use cases, pilots, partnerships, decisions, lattice tools |
| **how/** | HOW does this project work? | Campaigns, missions, sessions, tracks, curriculum modules, editorial pipeline, 34 templates, 13 skills |
| **who/** | WHO is involved? | Communities, mentors, stewards, builders, partners, Curriculum Council, governance |

### Extended Ontology (14 base + 12 CC)

| Triad | Extension | Directory | Purpose |
|-------|-----------|-----------|---------|
| WHO | `community` | `who/communities/` | Pilot community profiles |
| WHO | `mentor` | `who/mentors/` | Lattice developer mentors |
| WHO | `steward` | `who/stewards/` | Community stewards (pastors, teachers, organizers) |
| WHO | `builder` | `who/builders/` | Youth builders (ages 14-24) |
| WHO | `partner` | `who/partners/` | Technology & community partner organizations |
| WHO | `council_member` | `who/council/` | Curriculum Council members |
| WHAT | `use_case` | `what/use_cases/` | Community use case specifications |
| WHAT | `pilot` | `what/pilots/` | Pilot program designs and evaluation |
| WHAT | `partnership` | `what/partnerships/` | Partnership proposals and agreements |
| HOW | `track` | `how/tracks/` | Track progression (Builder, Steward, Elder) |
| HOW | `curriculum_module` | `how/curriculum/` | Curriculum module tracking |
| HOW | `editorial` | `how/editorial/` | Content pipeline (Phase 2) |

## Entry Points

| Audience | Start Here | Then |
|----------|-----------|------|
| **Agents** | `CLAUDE.md` (auto-loaded) | `STATE.md` → `how/sessions/active/` → work |
| **Humans** | `README.md` | `MANIFEST.md` → browse triad → `STATE.md` |
| **Curriculum work** | `what/context/program_design/` | → `curriculum_framework/` → `how/curriculum/` |
| **Pilot planning** | `what/context/pilot_programs/` | → `who/communities/` → `what/pilots/` |
| **Website work** | `siteforge/CLAUDE.md` | → load `website_content` recipe → create content |

## Key Components

### Context Library

| Topic | Subtopics | Tokens | Location | Status |
|-------|-----------|--------|----------|--------|
| Prompt Engineering | 7 | ~21K | `what/context/prompt_engineering/` | Inherited |
| aDNA Core | 13 | ~35K | `what/context/adna_core/` | Inherited |
| Claude Code | 4 | ~12K | `what/context/claude_code/` | Inherited |
| Lattice Basics | 2 | ~4.5K | `what/context/lattice_basics/` | Inherited |
| Object Standards | 1 | ~3K | `what/context/object_standards/` | Inherited |
| **Program Design** | 4 | ~9K | `what/context/program_design/` | **Active** (III-reviewed, avg 3.8) |
| **Fundraising** | 6 | ~14K | `what/context/fundraising/` | **Active** |
| **aDNA for Communities** | 2 | ~3.5K | `what/context/adna_for_communities/` | **Seeded** (DRAFT) |
| Curriculum Framework | 5 | ~9.2K | `what/context/curriculum_framework/` | **Active** (III-reviewed, avg 4.2) |
| Community Engagement | 3 | ~9.1K | `what/context/community_engagement/` | **Active** (III-reviewed, avg 4.37) |
| **Pilot Programs** | 3 | ~6.9K | `what/context/pilot_programs/` | **Active** (III-reviewed, avg 4.43) |
| **Use Case Domains** | 5 | ~11.5K | `what/context/use_case_domains/` | **Active** (III-reviewed, avg 4.44) |

Cross-topic recipes: `what/context/context_recipes.md` (6 inherited + 6 CC-specific recipes).

### Forge Federation

| Forge | Wrapper | Source | Version Policy |
|-------|---------|--------|----------------|
| SiteForge | `siteforge/` | `SiteForge.aDNA` | minor |
| VideoForge | `videoforge/` | `~/lattice/lattice-video-forge/` | minor |
| PresentationForge | `presentationforge/` | `lattice-protocol/extensions/canvas/` | minor |

### Templates (34)

22 inherited from aDNA base + 12 CC-specific: community, mentor, steward, builder, partner, council_member, use_case, pilot, partnership, track, curriculum_module, editorial_item.

## Active Builds

| Component | Status | Description |
|-----------|--------|-------------|
| aDNA Standard v2.2 | Inherited | Core specification — triad, ontology, sessions, missions, campaigns |
| Context library (inherited) | Shipped | 5 topics, 27 subtopics, ~75K tokens |
| Context library (CC) | In Progress | 6/7 topics active/seeded (program_design, curriculum_framework, community_engagement, pilot_programs, use_case_domains, fundraising + adna_for_communities seeded), 1 planned |
| Ontology extensions | Shipped | 12 CC-specific entity types scaffolded |
| Forge wrappers | Shipped | SiteForge, VideoForge, PresentationForge shells created |
| **campaign_context_commons_genesis** | **Active** | 4 phases, 15 missions — bootstrap to operational HQ |

See `how/campaigns/campaign_context_commons_genesis/` for campaign details and `STATE.md` for current operational state.
