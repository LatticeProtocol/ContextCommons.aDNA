---
type: context
created: 2026-04-12
updated: 2026-04-12
status: active
last_edited_by: agent_gutenberg
tags: [context, program_design, architecture, curriculum, mentorship]
token_estimate: ~2500
quality_score: 3.8
signal_density: 4
actionability: 4
coverage_uniformity: 4
source_diversity: 3
cross_topic_coherence: 4
freshness_category: stable
last_evaluated: 2026-04-12
---

# Program Architecture

## The Curriculum Council

A standing body composed of:

- **Impact-driven AI developers** from the Lattice Protocol community and allied open-source projects.
- **Community organizers** with deep roots in the pilot communities and experience in participatory program design.
- **Medical and public health experts** specializing in community health, elder care, health equity, and social determinants of health.
- **Educators** with expertise in bilingual education, youth development, digital literacy, and vocational training.
- **Elder and disability advocates** who understand the administrative and access burdens facing vulnerable populations.

**The Council's mandate:**
1. Design and maintain the **verticalized curriculum framework** — modular, adaptable, localizable.
2. Define **competency milestones** for youth participants, community stewards, and mentors.
3. Establish **ethical guardrails** for what community-built agents should and should not do.
4. Evaluate pilot outcomes and iterate rapidly.

## The Verticalized Curriculum

The curriculum is not a fixed syllabus. It is a **context graph itself** — structured in the aDNA standard so that it can be adapted agentically to different communities, languages, reading levels, and domains of need.

### Core Track (all participants)

- What is a context graph? What is an agent? What is the difference between using AI and directing AI?
- The aDNA ontology: WHO (people, roles, communities), WHAT (knowledge, documents, needs), HOW (workflows, missions, governance).
- Privacy, consent, and data sovereignty: your context is yours.
- Hands-on: building your first personal context graph.

### Youth Builder Track

- Setting up and operating an agentic workstation.
- Designing agents for real community needs (identified with elders and stewards).
- Prompt engineering, context engineering, and mission design using the War/Campaign/Mission/Session hierarchy.
- Collaboration: contributing to shared community context graphs while respecting individual privacy boundaries.
- Capstone: deploy a working agent system that addresses a specific community-identified need.

### Steward Track

- Governance: how to oversee, audit, and direct community agent systems.
- Needs assessment: structured methods for identifying administrative, health, and operational gaps.
- Mentorship: how to support youth builders and connect them with elder knowledge-holders.
- Sustainability: maintaining and evolving community systems after the pilot period.

### Elder & Community Member Track

- What agents can do for you — practical demonstrations in the participant's own language and domain.
- How to communicate your needs and context to a youth builder.
- Co-design sessions: elders define problems, youth build solutions, stewards govern the process.
- Ongoing access and support.

### Track Timeline Estimates

| Track | Duration | Hours | Session Format | Prerequisite |
|-------|----------|-------|----------------|-------------|
| **Core** | 4 weeks | ~20 hours | 2× weekly, 2.5 hr sessions | None |
| **Youth Builder** | 12 weeks | ~80 hours | 2× weekly, 3 hr sessions + capstone | Core Track |
| **Steward** | 8 weeks | ~40 hours | Weekly, 2.5 hr sessions + practicum | Core Track |
| **Elder & Community** | 6 weeks | ~15 hours | Weekly, 2.5 hr sessions | None (Core Track recommended) |

> **Note**: These are baseline estimates, subject to pilot validation. Pilot A (Grand Rapids) and Pilot B (Los Angeles) will likely adapt scheduling to community availability — evening sessions for working parents, weekend options for youth with school commitments. The Curriculum Council reviews and approves timeline adjustments per community.

## The Three-Tier Mentorship Network

| Role | Who | Function |
|------|-----|----------|
| **Lattice Mentors** | Developers from the aDNA/Lattice community | Teach stewards technical foundations; provide ongoing technical support to youth builders |
| **Community Stewards** | Local leaders (pastors, teachers, organizers, health workers) | Bridge between technical mentors and community; govern local priorities; co-teach with youth |
| **Youth Builders** | Young people in the community (ages 14-24) | Learn, build, deploy, and maintain agentic systems; teach elders; earn their workstation |

## The Workstation as Printing Press

Each youth builder who completes the program earns a **MacBook Neo** — configured as a personal agentic workstation. This is not a participation trophy. It is a tool of production:

- **Claude Code** installed and configured as the primary agentic development environment — the interface through which builders write instructions for their agents, manage context graphs, and operate agentic systems on their own machine
- **aDNA toolkit** — templates, lattice schemas, context graph tools
- **Personal context graph** — the builder's own knowledge structure, portable and sovereign
- **Community context access** — governed read/write access to their community's shared context graphs

The workstation is the program's central metaphor made physical. Just as Gutenberg's press gave communities the means of knowledge production, the agentic workstation gives a young person the means to build systems that serve their family, their elders, and their neighborhood. It goes home with them. It is theirs.

### Earning the Workstation

The MacBook Neo is earned through demonstrated commitment and capability, not simply attendance:

1. **Core Track completion** — all competency milestones met
2. **Builder Track completion** — including capstone project deployment
3. **Minimum engagement** — 80% session attendance across both tracks
4. **Community steward endorsement** — the builder's steward confirms the participant has engaged with integrity and contributed to the community
5. **Capstone acceptance** — the capstone project passes evaluation (see below)

Builders who complete the program but whose capstone requires additional iteration retain access to shared workstations while they finish. No builder is abandoned — the program provides support until the workstation is earned.

## Capstone Projects

Every youth builder completes a **capstone project** — a working agent system that addresses a specific, community-identified need. Capstones are not hypothetical. They serve real people.

Example capstone domains (drawn from pilot community needs):
- **Healthcare navigation** — agent assists elders with Medicare enrollment, appointment scheduling, medication management
- **Immigration support** — agent helps families organize paperwork, track deadlines, understand requirements (multilingual)
- **Community coordination** — agent matches needs with resources across a congregation or neighborhood
- **Educational access** — agent helps parents navigate school enrollment, IEP processes, scholarship applications

### Capstone Evaluation

Each capstone is reviewed by three evaluators against four criteria:

| Criterion | Evaluator | What It Measures |
|-----------|-----------|-----------------|
| **Technical quality** | Lattice mentor | Does the agent work reliably? Is the context graph well-structured? Are edge cases handled? |
| **Governance compliance** | Community steward | Does the system respect community rules? Is data handled per consent agreements? Does it stay within ethical guardrails? |
| **Community value** | End user (elder/community member) | Does the system actually help? Would the user continue using it? Does it respect their dignity? |
| **Documentation** | All three reviewers | Is the context graph legible? Could another builder maintain it? Is the WHO/WHAT/HOW triad complete? |

A capstone passes when all three evaluators agree on all four criteria. Disagreements are mediated by the community steward. A technically excellent system that the end user does not find useful does not pass.

### Curriculum Versioning

The curriculum is itself a context graph (Standing Order #8). The Curriculum Council maintains the master curriculum graph. Each pilot community forks the master and localizes it — adapting examples, languages, scheduling, and domain emphasis to their context. Improvements flow back upstream through Council review. Version control follows the aDNA standard: semantic versioning in frontmatter, with the Council controlling major version increments and communities controlling localization patches.

## Sources & Influences

- **Lave, J. & Wenger, E. (1991). Situated Learning** — the three-tier mentorship model draws on legitimate peripheral participation: youth builders move from guided learning to full community participation
- **Kafai, Y. & Burke, Q. (2014). Connected Code** — the "curriculum as context graph" approach extends constructionist pedagogy into agentic systems
- **aDNA Context Graph Standard v2.2** — curriculum structure follows the aDNA ontology (WHO/WHAT/HOW triad)
- Community profiles and pilot site needs assessment (Grand Rapids, Los Angeles)

## Related

- [[what/context/program_design/context_cc_thesis]] — the circular knowledge economy
- [[what/context/program_design/context_cc_core_principles]] — what guides these structures
- [[what/context/program_design/context_cc_governance_model]] — partnership terms and dispute resolution
- [[what/context/adna_for_communities/context_adna_simplified]] — aDNA for non-technical participants
- [[who/governance/governance_curriculum_council_charter]] — the body governing curriculum
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A site
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B site

- [[what/context/program_design/context_cc_thesis]] — the circular knowledge economy
- [[what/context/program_design/context_cc_core_principles]] — what guides these structures
- [[who/governance/governance_curriculum_council_charter]] — the body governing curriculum
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A site
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B site
