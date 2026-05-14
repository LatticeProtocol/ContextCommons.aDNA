---
type: context
topic: program_design
subtopic: domain_knowledge
created: 2026-05-14
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
tags: [ontology, lattice_types, compute_tiers, convergence, domain_knowledge]
---

# Context Commons — Domain Knowledge Reference

Reference tables for ontology, context library, program structure, lattice types, execution modes, compute tiers, and the convergence model. These were previously embedded in the root `CLAUDE.md`; they belong here because they are reference content, not session-by-session operating rules.

Load this file when a session needs to navigate the ontology, pick a lattice type, reason about compute placement, or describe the decomposition hierarchy.

## Ontology (14 base + 12 CC extensions)

| Triad Leg | Base Entities | CC Extensions |
|-----------|---------------|---------------|
| **WHO** (3+6) | `governance`, `team`, `coordination` | `communities/` (pilot communities), `mentors/` (Lattice dev mentors), `stewards/` (community stewards), `builders/` (youth 14-24), `partners/` (tech & community orgs), `council/` (Curriculum Council) |
| **WHAT** (4+3) | `context`, `decisions`, `modules`, `lattices` | `use_cases/` (community use case specs), `pilots/` (pilot program designs), `partnerships/` (proposals & agreements) |
| **HOW** (7+3) | `campaigns`, `missions`, `sessions`, `templates`, `skills`, `pipelines`, `backlog` | `tracks/` (Builder/Steward/Elder progression), `curriculum/` (module tracking), `editorial/` (content pipeline, Phase 2) |

## Context Library (CC Topics)

| Topic | Status | Subtopics | Est. Tokens | Purpose |
|-------|--------|-----------|-------------|---------|
| `program_design/` | **Active** (III-reviewed, avg 3.8) | 4 | ~9K | Thesis, principles, architecture, governance model |
| `curriculum_framework/` | **Active** (III-reviewed, avg 4.2) | 5 | ~9.2K | Track structures, module template, pedagogy |
| `community_engagement/` | **Active** (III-reviewed, avg 4.37) | 3 | ~9.1K | Partnership model, community reqs, mentor roles |
| `pilot_programs/` | **Active** (III-reviewed, avg 4.43) | 3 | ~6.9K | Grand Rapids, LA pilot designs, evaluation |
| `use_case_domains/` | **Active** (III-reviewed, avg 4.44) | 5 | ~11.5K | Healthcare, immigration, education, elder care, community gov |
| `adna_for_communities/` | **Active** (III-reviewed, avg 4.67) | 3 | ~8.5K | aDNA simplified, lattice for communities, explanation toolkit |
| `fundraising/` | Active | 6 | ~14K | Funding strategy, grant catalogs, operations, fiscal sponsorship |

Plus 5 inherited topics (~75K tokens): `prompt_engineering`, `adna_core`, `claude_code`, `lattice_basics`, `object_standards`.

## Program Structure

**Three-tier mentorship model:**

| Role | Who | Function |
|------|-----|----------|
| **Lattice Mentors** | Developers from aDNA/Lattice community | Teach stewards technical foundations; support youth builders |
| **Community Stewards** | Local leaders (pastors, teachers, organizers) | Bridge between mentors and community; govern local priorities |
| **Youth Builders** | Young people (ages 14-24) | Learn, build, deploy, maintain agentic systems; teach elders |

**Four curriculum tracks:** Core (all participants), Builder (youth, technical), Steward (community leaders), Elder & Community Member (beneficiaries, co-designers).

**Two pilot programs:**
- **Pilot A**: Peter's Church, Grand Rapids, MI — target Q3 2026
- **Pilot B**: LAUSD / Venice Beach Book Club / UCLA, Los Angeles, CA — target Q4 2026

## Lattice Types

| Type | Description | Execution Mode |
|------|-------------|---------------|
| `pipeline` | Deterministic DAG of modules | `workflow` |
| `agent` | LLM-driven reasoning | `reasoning` |
| `context_graph` | Knowledge structure | varies |
| `workflow` | Operational process | `workflow` |
| `infrastructure` | Physical/network topology (nodes, edges, services) | varies |
| `context_set` | Disease/domain-specific overlay inheriting from a base lattice | varies |
| `skill` | Claude Skill promoted to lattice registry | varies |

## Execution Modes

| Mode | Description |
|------|-------------|
| `workflow` | Deterministic DAG — fixed sequence of steps |
| `reasoning` | LLM-driven — model decides next steps |
| `hybrid` | Mixed — workflow structure with reasoning at decision points |

## Object Standards (quick reference)

Three core object types have type-standard docs, YAML schemas, and FAIR metadata requirements. Targets are a dataset subtype (`dataset_class: target`). Full reference: `what/context/object_standards/`.

| Object | Context Reference | Schema |
|--------|------------------|--------|
| Module | `what/context/object_standards/` | — |
| Dataset | `what/context/object_standards/` | — |
| Lattice | `what/context/object_standards/` | `what/lattices/lattice_yaml_schema.json` |

## Compute Tiers

| Tier | Scope | Example |
|------|-------|---------|
| **L0** (Local) | Knowledge architecture only — Obsidian + Claude Code, no compute services | Fresh `~/lattice/` workspace |
| **L1** (Edge) | Local/edge compute, lightweight inference — JupyterHub + Lattice network | Laptop GPU, edge device |
| **L2** (Regional) | Institutional clusters, moderate training | University cluster, on-prem HPC |
| **L3** (Cloud/HPC) | Large-scale data centers, heavy training | Cloud GPU fleet |

## Convergence Model

The execution hierarchy (Campaign → Mission → Objective) is a convergent decomposition: each level narrows context, reducing token count while increasing signal density.

| Level | Structural Parallel (informal) | Effect |
|-------|-------------------------------|--------|
| **Vault** | Finite collection | Total knowledge — full token count |
| **Campaign** | Subset selection | Strategic initiative — hundreds of files → tens |
| **Mission** | Narrower subset selection | Decomposed task — tens of files → handful |
| **Objective** | Exact file selection | Session work — the exact files needed |
