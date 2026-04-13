---
type: context
created: 2026-04-13
updated: 2026-04-13
status: active
last_edited_by: agent_gutenberg
tags: [context, curriculum_framework, module_template, self_referential]
token_estimate: ~1650
quality_score: 4.4
signal_density: 4
actionability: 5
coverage_uniformity: 4
source_diversity: 4
cross_topic_coherence: 5
freshness_category: stable
last_evaluated: 2026-04-13
---

# Curriculum Framework: Module Template

Standard format for a curriculum module. Every module in every track follows this structure.

> **Self-referentiality notice** (Standing Order #8): This template is itself an aDNA context file. Its WHO/WHAT/HOW structure mirrors the ontology that Core Track participants learn in Week 1. When builders or Council members create new modules, they are practicing context engineering — the template models what it teaches.

## Module Structure: The WHO / WHAT / HOW Triad

Every curriculum module is organized as a context graph with three sections:

### WHO — People and Roles

| Field | Description |
|-------|-------------|
| **Instructor role** | Which mentor tier facilitates this module (Lattice mentor, steward, or co-facilitated) |
| **Participant role** | Which track and week (e.g., "Builder Track, Week 5") |
| **Prerequisites** | Prior modules or milestones required. Links to [[context_cc_competency_milestones]] |
| **Group size** | Recommended participant count (typically 8-15 for interactive modules) |

### WHAT — Knowledge and Objectives

| Field | Description |
|-------|-------------|
| **Learning objectives** | 2-4 observable outcomes using adapted Bloom's taxonomy (see below) |
| **Key concepts** | Terms and ideas introduced or reinforced |
| **Required context** | Context files participants should have loaded / read |
| **Materials** | Physical or digital resources needed |

### HOW — Session Plan and Assessment

| Field | Description |
|-------|-------------|
| **Session plan** | Time-blocked activity sequence (see template below) |
| **Facilitation notes** | Intergenerational dynamics, accessibility adjustments, cultural considerations |
| **Assessment type** | Formative, portfolio artifact, peer review, or capstone component |
| **Assessment criteria** | How learning objectives map to competency milestones |

## Module Frontmatter Schema

```yaml
---
type: curriculum_module
track: core | builder | steward | elder
week: 1-12
session: 1-24
title: "Module title in plain language"
prerequisites: []          # module IDs or milestone IDs
learning_objectives: []    # 2-4 observable outcomes
assessment_type: formative | portfolio | peer_review | capstone
estimated_duration: "2.5h" # or "3h" for Builder sessions
localization_notes: ""     # pilot-specific adaptations
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: draft | active | retired
last_edited_by: agent_{username}
tags: [curriculum_module, {track}]
---
```

## Learning Objectives Standard

Objectives use observable verbs adapted from Bloom's taxonomy for agentic literacy (Bloom, 1956; adapted for constructionist contexts per Kafai & Burke, 2014):

| Level | Traditional Verb | Agentic Literacy Verb | Example |
|-------|-----------------|----------------------|---------|
| Remember | Define | Identify | Identify the three elements of the aDNA triad in a community scenario |
| Understand | Explain | Describe | Describe how a context graph preserves community knowledge |
| Apply | Implement | Build | Build a personal context graph with WHO/WHAT/HOW sections |
| Analyze | Compare | Audit | Audit a context graph for data sovereignty compliance |
| Evaluate | Assess | Validate | Validate that an agent system serves the community member's stated need |
| Create | Design | Deploy | Deploy a working agent system for a community-identified need |

Each objective maps to a specific milestone in [[context_cc_competency_milestones]] and a specific assessment criterion in [[context_cc_assessment_framework]].

## Session Plan Template

Standard time blocks reflecting the experiential learning cycle (Kolb, 1984):

| Block | Duration | Activity | Kolb Phase |
|-------|----------|----------|------------|
| **Opening** | 10 min | Check-in, recap, connect to prior session | Reflective observation |
| **Concept** | 20 min | Introduce new ideas with community-relevant examples | Abstract conceptualization |
| **Guided practice** | 40 min | Instructor-led activity, worked examples | Concrete experience |
| **Independent / collaborative work** | 60 min | Participants apply concepts (pairs or small groups) | Active experimentation |
| **Reflection & preview** | 20 min | What worked? What's confusing? What's next? | Reflective observation |

**Total**: 2.5 hours (Core, Steward, Elder) or 3 hours (Builder — extended independent work block).

Adjust block durations for accessibility needs: extended time for multilingual participants, shorter blocks with more breaks for Elder Track, longer guided practice for early Builder sessions.

## Localization Protocol

The Curriculum Council maintains the master module set. Pilot communities fork and localize:

1. **Language**: Translate community-facing text. Technical terms keep English equivalents in parentheses.
2. **Examples**: Swap for locally relevant scenarios (healthcare navigation in Grand Rapids vs. immigration support in LA).
3. **Scheduling**: Adjust session timing to community availability (evenings, weekends, split sessions).
4. **Accessibility**: Add accommodations specific to the community (voice-first for low-vision elders, large-text handouts).
5. **Domain emphasis**: Weight modules toward community-identified priority domains.

Localizations use semantic versioning: the master controls major/minor versions; communities control patch versions for localization changes. Improvements flow back upstream through Council review.

## Sources

- Bloom, B.S. (1956). *Taxonomy of Educational Objectives*. — learning objectives framework
- Kolb, D.A. (1984). *Experiential Learning*. — session plan reflects the four-phase cycle
- Freire, P. (1970). *Pedagogy of the Oppressed*. — module rejects banking model; participants are co-constructors
- Kafai, Y. & Burke, Q. (2014). *Connected Code*. — constructionist pedagogy adapted for agentic systems

## Related

- [[what/context/curriculum_framework/context_cc_track_structures]] — where modules live in progression
- [[what/context/curriculum_framework/context_cc_competency_milestones]] — what modules assess
- [[what/context/curriculum_framework/context_cc_assessment_framework]] — how assessment works
- [[what/context/curriculum_framework/context_cc_pedagogy]] — teaching philosophy this template enacts
- [[what/context/adna_for_communities/context_adna_simplified]] — WHO/WHAT/HOW triad for non-technical readers
