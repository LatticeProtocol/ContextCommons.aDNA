---
type: context
created: 2026-04-12
updated: 2026-04-12
status: active
last_edited_by: agent_gutenberg
tags: [context, program_design, governance, partnerships]
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

# Governance Model

## Community Governance Is Non-Negotiable

Every system built through the Context Commons is locally governed by community stewards. Technology partners contribute resources — hardware, API access, mentorship hours — not direction. The Curriculum Council and community stewards set priorities, not corporate strategy teams.

## Partnership Terms

### What We Ask of Technology Partners

- **Hardware grants:** MacBook Neos for youth graduates and workstations for community stewards, funded through corporate education and community impact programs.
- **API access and compute grants:** Subsidized or donated access to AI APIs and cloud compute for community-operated agent systems.
- **Technical mentorship:** Volunteer hours from company engineers and researchers to support Lattice mentors and contribute to curriculum development.
- **Distribution and visibility:** Amplification of the program through corporate channels, conferences, and education initiatives.

### What We Offer

- **Authentic community impact stories** demonstrating that their technology is being used for genuine good by real communities.
- **A model for responsible AI adoption** that they can point to, learn from, and replicate.
- **Feedback from the edges:** Community-built systems surface real user needs, failure modes, and design insights.
- **Alignment with stated values:** A concrete, auditable, governed mechanism for delivering on published commitments to equitable access.

### Three Non-Negotiables

1. **Community governance is non-negotiable.** Technology partners contribute resources, not direction.
2. **No data extraction.** Community context graphs belong to communities. Technology partners do not acquire rights to community-generated context, training data, or usage patterns.
3. **Open standards.** The aDNA ontology and Lattice Protocol remain open. No partner acquires exclusive rights to the infrastructure.

## Community Partner Requirements

We seek communities that have:

- **Existing intergenerational infrastructure** — churches, community centers, cultural organizations, mutual aid networks — where trust and relationships already exist.
- **Identified administrative and operational pain points** that agentic systems could address.
- **Willing stewards** — leaders who are curious, committed, and trusted by their community.
- **Youth populations** who are underserved by existing technology education but hungry for capability and agency.

We do not parachute in. We partner with communities that want this and are ready to govern it.

## Governance in Practice: A Decision Scenario

A technology partner proposes donating 50 tablets pre-loaded with a "community health assistant" app. The app uses a proprietary AI model and stores conversation data on the partner's cloud. Here is how the governance model handles this:

1. **Stewards evaluate** — Community stewards at the pilot site review the offer against the three non-negotiables. The app stores data on external servers (violates #2: no data extraction) and uses a closed model (violates #3: open standards).

2. **Council advises** — The Curriculum Council reviews the technical implications and confirms: the app cannot be adapted to serve community-specific context graphs, and the data governance terms are incompatible.

3. **Community decides** — The stewards decline the tablets. Instead, they work with the program to propose a counter-offer: the partner donates the hardware (tablets), and the youth builders create a community-governed health navigation agent using the aDNA standard, Claude API, and community-owned context graphs. The partner gets credit for the hardware donation and an authentic impact story. The community keeps its sovereignty.

This is what "contribute resources, not direction" means in practice.

### Scenario 2: Mentor-Steward Disagreement

A Lattice mentor believes a youth builder's capstone project should use a more sophisticated agent architecture. The community steward at Peter's Church disagrees — the elders it serves need a simpler system they can understand and trust.

1. **Direct conversation** — Mentor and steward discuss the trade-offs. The mentor explains the technical benefits; the steward explains the community's comfort level.
2. **Domain applies** — This is a community governance question, not a technical safety question. The steward's judgment prevails per Standing Order #11.
3. **If unresolved** — Either party can bring the disagreement to the Curriculum Council for mediation. The Council may suggest a compromise (e.g., build the simple version first, iterate to the complex version if the community is ready).
4. **The youth builder is not caught in the middle** — the program treats them as a peer, not a pawn in adult disagreements.

### Scenario 3: Data Privacy Incident

A youth builder discovers that an elder's context graph at the Venice Beach Book Club contains sensitive health information that was shared in a co-design session but was not intended for the shared graph.

1. **Immediate flag** — The youth builder notifies their community steward immediately. The builder does not modify or delete the data unilaterally.
2. **Steward reviews with elder** — The steward contacts the elder, explains what happened, and asks how they want the data handled: removed entirely, moved to a private graph, or access-restricted.
3. **Elder decides** — The elder's wishes are binding. The data is handled per their direction within 24 hours.
4. **Incident documented** — The steward records the incident (anonymized) for Curriculum Council review. The Council assesses whether curriculum or tooling changes are needed to prevent recurrence.
5. **No blame** — The youth builder acted correctly by flagging the issue. The incident is treated as a learning opportunity, not a failure.

## Dispute Resolution

When disagreements arise among mentors, stewards, and builders, resolution follows a three-step escalation:

| Step | Method | Who | Outcome |
|------|--------|-----|---------|
| 1 | **Direct conversation** | The parties involved | Most disagreements resolve here |
| 2 | **Steward mediation** | Community steward facilitates | Steward authority applies to community governance questions |
| 3 | **Council arbitration** | Curriculum Council reviews | Council mediates cross-domain disputes (technical + governance) |

**Community vetoes are final.** Per Standing Orders #7 and #11, community stewards and elders retain veto power over use cases and deployments within their community. This is not subject to appeal by mentors, partners, or the Council. A community may reconsider a veto at its own initiative, but no external party may force reconsideration.

## Partner Violation Protocol

If a technology partner violates the three non-negotiables after a partnership is established:

1. **Informal conversation** — Program leadership raises the concern directly with the partner contact.
2. **Formal notice** — Written notice specifying the violation and requesting corrective action within 30 days.
3. **Council review** — The Curriculum Council reviews the violation and its impact on communities.
4. **Suspension** — If unresolved, the partnership is suspended pending correction. Community stewards are informed.
5. **Termination** — If the partner cannot or will not correct the violation, the partnership ends. Community-built systems are migrated off any partner-dependent infrastructure.

## Fiscal Sponsorship Path

The Context Commons program operates under a fiscal sponsor until it achieves 501(c)(3) status. This enables:

- **Grant eligibility** — most foundation and government grants require a 501(c)(3) or fiscal sponsor
- **Tax-deductible donations** — individual donors can contribute
- **Financial oversight** — professional accounting and compliance
- **Reduced administrative burden** — the program team focuses on curriculum and community, not paperwork

Recommended path: Start with a **Model C (Pre-Approved Grant)** fiscal sponsor — the program maintains operational autonomy while the sponsor provides the legal and financial infrastructure. Transition to independent 501(c)(3) when annual revenue exceeds $250K and the program has demonstrated sustainability.

See [[what/context/fundraising/context_cc_fundraising_fiscal_sponsorship]] for detailed sponsor options.

## Sources & Influences

- **Ostrom, E. (1990). Governing the Commons** — the community governance model draws on Ostrom's principles for managing shared resources: clear boundaries, collective-choice arrangements, graduated sanctions, and conflict resolution mechanisms
- **Zuckerman, E. (2020). "What is Digital Public Infrastructure?"** — the open-standards non-negotiable reflects the digital public infrastructure framework: shared standards, community governance, no single-vendor lock-in
- **aDNA Context Graph Standard v2.2** — data sovereignty and federation principles
- Community governance patterns observed in faith-based organizations, mutual aid networks, and cooperative movements

## Related

- [[what/context/program_design/context_cc_thesis]] — the problem this governance protects against
- [[what/context/program_design/context_cc_core_principles]] — the principles behind the non-negotiables
- [[what/context/program_design/context_cc_program_architecture]] — capstone evaluation and curriculum governance
- [[what/context/adna_for_communities/context_adna_simplified]] — governance concepts for non-technical readers
- [[who/governance/governance_curriculum_council_charter]] — the Council's charter and decision-making process
- [[who/partners/partner_apple]] — hardware partnership model
- [[who/partners/partner_google]] — funding and compute partnership model
- [[who/partners/partner_anthropic]] — technical partnership model
