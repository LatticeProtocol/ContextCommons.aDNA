---
type: context
topic: project_map
created: 2026-05-14
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
tags: [project_map, governance, vault_structure]
---

# Context Commons — Annotated Project Map

Full annotated directory tree for the Context Commons vault. Referenced from `CLAUDE.md` §Project Map. Load this file when you need orientation on where a specific subsystem lives (curriculum vs. partnerships vs. pilot designs, where forge wrappers attach, where session history is filed). For day-to-day execution, the top-level summary in `CLAUDE.md` is enough; the agent shouldn't load this companion unless navigating an unfamiliar corner.

## Directory Tree

```
ContextCommons.aDNA/
├── CLAUDE.md                    # Agent master context (root governance)
├── AGENTS.md                    # Root agent guide
├── MANIFEST.md                  # Project overview, architecture, entry points
├── STATE.md                     # Operational state — current phase, blockers, next steps
├── README.md                    # Human getting-started guide
│
├── what/                        # WHAT — Knowledge, context, curriculum
│   ├── context/                 # Agent context library (inherited + CC topics)
│   │   ├── program_design/      # Thesis, principles, architecture, governance, standing orders, domain knowledge
│   │   ├── fundraising/         # Funding strategy, grant catalogs, operations, fiscal sponsorship
│   │   ├── curriculum_framework/# Track structures, module template
│   │   ├── community_engagement/# Partnership model, community reqs
│   │   ├── pilot_programs/      # Grand Rapids, LA pilot designs
│   │   ├── use_case_domains/    # Healthcare, immigration, education
│   │   ├── adna_for_communities/# aDNA simplified for non-technical audience
│   │   ├── object_standards/    # Module/dataset/lattice standards + compliance dimensions
│   │   └── about_forges.md      # Forge federation reference
│   ├── use_cases/               # Community use case specifications
│   ├── pilots/                  # Pilot program designs and evaluation
│   ├── partnerships/            # Partnership proposals and agreements
│   ├── decisions/               # Architecture Decision Records
│   ├── docs/                    # aDNA specification documents
│   ├── pixel_prompts/           # Image-generation prompt packs (cross-machine dispatch)
│   └── lattices/                # Lattice YAML tools, schema, examples
│
├── how/                         # HOW — Operations
│   ├── campaigns/               # Multi-mission strategic initiatives
│   ├── missions/                # Standalone missions
│   ├── sessions/                # Session tracking (active/ + history/)
│   ├── templates/               # 22 inherited + 12 CC-specific templates
│   ├── skills/                  # Reusable agent recipes
│   ├── tracks/                  # Track progression (Builder, Steward, Elder)
│   ├── curriculum/              # Curriculum module tracking
│   ├── editorial/               # Content pipeline (Phase 2)
│   ├── backlog/                 # Ideas and improvements
│   ├── pipelines/               # Content-as-code workflows
│   └── quests/                  # Community validation experiments
│
├── who/                         # WHO — People, communities, governance
│   ├── communities/             # Pilot community profiles
│   ├── mentors/                 # Lattice developer mentors
│   ├── stewards/                # Community stewards
│   ├── builders/                # Youth builders (14-24)
│   ├── partners/                # Technology & community partners
│   ├── council/                 # Curriculum Council members
│   ├── governance/              # Roles, policies, charter
│   └── coordination/            # Cross-agent / cross-machine notes
│
├── iii/                         # III framework consumer wrapper (federation_ref → III.aDNA)
├── siteforge/                   # Forge wrapper — Context Commons website
├── videoforge/                  # Forge wrapper — educational videos
├── presentationforge/           # Forge wrapper — pitch decks, council presentations
└── site/                        # Generated Astro 6 website (SiteForge output)
```

## Forge Federation

Three forge wrappers (`siteforge/`, `videoforge/`, `presentationforge/`) federate to source forges via `federation_ref:` with `version_policy: minor`. Never copy forge implementation into wrappers. Full reference and per-wrapper detail: `what/context/about_forges.md`.

## III Framework

`iii/` wrapper federates to `III.aDNA` for the Inspect/Introspect/Improve quality loop. See `iii/CLAUDE.md` for packs declared, local extensions (persona registry, local learning store), and the per-mission III cadence used by `campaign_civic_press_redesign`.

## See also

- Workspace-router CLAUDE.md (one level up): `~/lattice/CLAUDE.md`
- Project manifest (also has a simplified tree): `MANIFEST.md`
- Forge federation reference: `what/context/about_forges.md`
- III wrapper: `iii/CLAUDE.md`
