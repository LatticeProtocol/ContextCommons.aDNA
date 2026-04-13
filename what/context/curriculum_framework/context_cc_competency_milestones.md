---
type: context
created: 2026-04-13
updated: 2026-04-13
status: active
last_edited_by: agent_gutenberg
tags: [context, curriculum_framework, competency_milestones, assessment]
token_estimate: ~1950
quality_score: 4.2
signal_density: 5
actionability: 5
coverage_uniformity: 4
source_diversity: 4
cross_topic_coherence: 4
freshness_category: stable
last_evaluated: 2026-04-13
---

# Curriculum Framework: Competency Milestones

Measurable milestones for each track with progression rubrics. Milestones define what participants must demonstrate to advance — they measure capability, not attendance.

## Milestone Design Principles

1. **Capability over attendance.** Showing up is necessary but not sufficient. Milestones require demonstrated competence through artifacts and actions.
2. **Transparency.** Rubrics are shared with participants on day one. No hidden criteria. No surprises.
3. **Community validation.** Technical competence alone is insufficient. Builder milestones include community value assessment. Steward milestones include governance demonstration.
4. **Dignity-first assessment.** Elder Track milestones recognize participation and contribution without subjecting elders to testing. Youth builders are assessed as peers, not students (Standing Order #10).
5. **Localizability.** Milestone *criteria* are universal. Milestone *evidence* is context-dependent — a healthcare navigation agent in Grand Rapids and an immigration support agent in LA both satisfy "deploy a working agent for a community need."

## Core Track Milestones (3 milestones, 4 weeks)

| ID | Week | Milestone | Evidence | Assessment |
|----|------|-----------|----------|------------|
| C1 | 2 | Articulate the WHO/WHAT/HOW triad | Identify triad elements in a real community scenario (discussion) | Formative — facilitator observation |
| C2 | 3 | Build a basic personal context graph | Personal context graph with at least 3 WHO, 3 WHAT, 3 HOW entries | Formative — peer share + facilitator review |
| C3 | 4 | Explain data sovereignty principles | Articulate why community data belongs to the community; identify one real consent scenario | Formative — group discussion |

**Gate**: Core completion unlocks Builder and Steward tracks. Assessment is pass/discuss — if a participant hasn't met C1-C3, the facilitator has a conversation, not a grade.

## Builder Track Milestones (4 milestones, 12 weeks)

| ID | Week | Milestone | Evidence | Assessed By |
|----|------|-----------|----------|-------------|
| B1 | 4 | Workstation operational; first agent deployed (guided) | Working Claude Code environment; agent responds to basic prompts using a provided context graph | Lattice mentor |
| B2 | 8 | Independent context graph for a real community need | Context graph built from steward-validated community need; agent operates on it correctly | Lattice mentor + steward |
| B3 | 10 | Capstone scoped and design approved | Written scope document with community need, proposed approach, steward endorsement | Steward (primary) + mentor |
| B4 | 12 | Capstone deployed and passes 4-criterion evaluation | Working agent system; evaluation by 3 reviewers | Mentor, steward, end user |

### Builder Rubric (B2 and B4)

Three performance levels following the Dreyfus skill acquisition model (Dreyfus & Dreyfus, 1986):

| Criterion | Developing | Proficient | Exemplary |
|-----------|-----------|-----------|-----------|
| **Technical quality** | Agent works for happy path; context graph has structural gaps | Agent handles common cases; graph is well-structured with clear WHO/WHAT/HOW | Agent handles edge cases gracefully; graph is clean, efficient, and maintainable |
| **Governance compliance** | Data handling mostly correct; minor consent gaps | Full compliance with community data rules; consent agreements followed | Proactive governance — builder identifies and resolves governance edge cases |
| **Community value** | End user can use the system with help | End user finds the system independently useful | End user actively requests the system; recommends it to others |
| **Documentation** | Context graph exists but is hard to follow | Context graph is legible; another builder could maintain it | Context graph is a model for others; complete triad, clear annotations |

**B4 gate**: All three evaluators must rate "Proficient" or above on all four criteria. A technically exemplary system that the end user does not find useful does not pass. Disagreements are mediated by the steward.

## Steward Track Milestones (3 milestones, 8 weeks)

| ID | Week | Milestone | Evidence | Assessed By |
|----|------|-----------|----------|-------------|
| S1 | 4 | Needs assessment completed; governance principles articulated | Written needs assessment for their community; can explain the three non-negotiables | Lattice mentor |
| S2 | 6 | Co-facilitated one Builder Track session | Observation by Lattice mentor; participant feedback | Lattice mentor + builder participants |
| S3 | 8 | Practicum complete; sustainability plan drafted | Sustainability plan covering maintenance, governance, and succession; mentorship relationship with at least one builder demonstrated | Lattice mentor + community peer |

**Assessment**: Portfolio-based. Stewards compile needs assessment, co-facilitation reflection, and sustainability plan. Evaluated by Lattice mentor and a community peer (another steward or elder).

## Elder & Community Member Track Milestones (2 milestones, 6 weeks)

| ID | Week | Milestone | Evidence | Assessment |
|----|------|-----------|----------|------------|
| E1 | 3 | Can describe what an agent does for them; has participated in one co-design session | Verbal description (no written requirement); attendance at co-design session | Self-assessment + steward confirmation |
| E2 | 6 | Has contributed use case requirements to at least one builder's capstone | Builder's capstone scope document references the elder's input | Steward confirmation |

**Assessment**: Participation-based with dignity. No rubric, no grading, no testing. Elders are not students — they are co-designers and beneficiaries. Their contribution is validated through the artifacts they help create, not through performance measurement.

## Cross-Track Gate: Workstation Earning

The MacBook Neo agentic workstation is the culminating cross-track milestone:

| Requirement | Verified By |
|-------------|------------|
| Core Track completed (C1-C3) | Facilitator records |
| Builder Track completed (B1-B4) | Milestone portfolio |
| 80% session attendance (Core + Builder) | Attendance records |
| Community steward endorsement | Written endorsement |
| Capstone accepted (B4 at Proficient+) | Evaluation records |

All five requirements must be met. Builders who complete the program but whose capstone requires additional iteration retain access to shared workstations while they finish.

## Sources

- Dreyfus, H.L. & Dreyfus, S.E. (1986). *Mind over Machine*. — skill acquisition model (novice → expert); the developing/proficient/exemplary levels derive from this framework
- Lave, J. & Wenger, E. (1991). *Situated Learning*. — milestones assess movement from peripheral to full community participation
- Wiggins, G. & McTighe, J. (2005). *Understanding by Design*. — backward design: milestones define evidence, which drives module design
- Bloom, B.S. (1956). *Taxonomy of Educational Objectives*. — milestone levels align with ascending cognitive complexity (identify → build → deploy)

## Related

- [[what/context/curriculum_framework/context_cc_track_structures]] — track progressions these milestones gate
- [[what/context/curriculum_framework/context_cc_assessment_framework]] — evaluation methods that measure these milestones
- [[what/context/curriculum_framework/context_cc_module_template]] — modules designed to reach these milestones
- [[what/context/program_design/context_cc_program_architecture]] — capstone rubric and workstation criteria (source of truth)
