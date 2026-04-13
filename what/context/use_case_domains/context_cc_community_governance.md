---
type: context
topic: use_case_domains
subtopic: community_governance
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [context, use_case_domains, community_governance, coordination, resource_matching, volunteers, needs-community-review]
token_estimate: ~2300
sources: ["Ostrom 1990 Governing the Commons", "Spade 2020 Mutual Aid", "Sampson 2012 collective efficacy research", "aDNA Context Graph Standard v2.2"]
context_version: "1.0"
gaps: [specific matching algorithm design, multi-organizational data sharing agreements]
quality_score: 4.6
signal_density: 4
actionability: 5
coverage_uniformity: 5
source_diversity: 4
cross_topic_coherence: 5
freshness_category: mixed
last_evaluated: 2026-04-13
---

# Use Case Domain: Community Governance & Coordination

> **DRAFT** — This domain description is based on pilot community needs assessments. It has not been reviewed by community representatives. Per Standing Order #7, community review is required before this content drives curriculum or pilot design. `#needs-community-review`

## Domain Overview

Community governance and coordination encompasses the infrastructure that enables communities to organize themselves — matching needs with resources, coordinating volunteers, managing events, communicating across organizations, and making collective decisions. This is the *infrastructure domain*: while healthcare navigation, immigration services, education access, and elder care each address specific need areas, community governance provides the organizational layer that connects people across all of those domains.

Every community has coordination needs. A church schedules volunteers. A neighborhood association tracks requests. A school coordinates parent volunteers. A mutual aid network matches offers with needs. Today, this coordination runs on group texts, spreadsheets, sign-up sheets, and the memory of a few overloaded organizers. The result is invisible labor, dropped balls, and burnout among the people who hold communities together.

## Problem Landscape

| Problem | Who Faces It | Current State Without Agents |
|---------|-------------|------|
| Resource matching | Community members with needs and those with resources to offer | Word of mouth, Facebook groups, church bulletin announcements |
| Volunteer coordination | Organizers managing volunteer schedules | Google Sheets, SignUpGenius, group texts, manual tracking |
| Event management | Community organizations | Email chains, bulletin boards, calendar conflicts across organizations |
| Cross-organizational communication | Multiple orgs serving the same community | Meetings (infrequent), informal contacts, duplicated effort |
| Institutional knowledge | Organizers, stewards | Held in one person's head; lost when they step back or burn out |
| Collective decision-making | Governance bodies, community groups | In-person meetings (access barriers), informal consensus, documented inconsistently |

**Scale**: Volunteer coordination alone costs the average faith community ~10-15 hours/week in administrative overhead (estimated from Cnaan et al., 2006). In multi-organizational settings like Los Angeles, duplication of effort between organizations serving the same population is endemic. Elinor Ostrom's foundational research on commons governance demonstrates that successful community coordination requires clear boundaries, collective-choice arrangements, monitoring, and graduated sanctions — structures that ad hoc coordination cannot sustain.

## Community Need Mapping

| Dimension | Grand Rapids (Pilot A) | Los Angeles (Pilot B) |
|-----------|----------------------|----------------------|
| Coordination model | Congregational (single org, hierarchical, pastor-led) | Multi-institutional (LAUSD + Venice Beach Book Club + UCLA, distributed governance) |
| Primary coordinator | Pastor/deacon team, church office | Multiple coordinators across institutions, no single authority |
| Volunteer base | Congregation members (known, trusted, ongoing) | Mixed: students (UCLA), parents (LAUSD), community members (Venice Beach) |
| Communication channels | Sunday announcements, church email, phone tree | Email lists, Slack, school portals, social media — fragmented |
| Key challenge | Scaling informal systems; reducing dependency on 2-3 key organizers | Coordinating across institutions with different cultures, calendars, and authority structures |
| Key strength | High trust, shared values, single governance structure | Diverse skills and resources across institutions |

## Context Graph Structure

| Triad | Entities | Examples |
|-------|----------|---------|
| **WHO** | Requestors, providers, stewards, organizations, volunteers, coordinators | Mr. Thompson (requestor, needs tutoring for grandson), Sarah (provider, UCLA student tutor), Deacon Williams (steward) |
| **WHAT** | Need categories, resource inventory, availability windows, geographic constraints, skill requirements, event calendar | Tutoring needed M/W 4-6pm, east side GR; community dinner prep needs 4 volunteers Saturday |
| **HOW** | Request intake workflow, matching process, confirmation and scheduling, feedback loop, capacity tracking, escalation for unmet needs | Step 1: Need submitted → Step 2: Match against resource inventory → Step 3: Steward approves match → Step 4: Confirm with both parties → Step 5: Track fulfillment → Step 6: Collect feedback |

## Agent Capabilities

An agentic system for community governance and coordination would:

1. **Intake and categorize needs** — accept requests from community members (in person via steward, by phone, or directly) and categorize by type, urgency, location, and language
2. **Search resource inventory** — match submitted needs against available resources (volunteers, services, equipment, skills) based on type, availability, location, and capacity
3. **Suggest matches for steward approval** — present potential matches to the steward for review; the steward approves, modifies, or rejects. The agent suggests; the community decides
4. **Coordinate scheduling** — once a match is approved, coordinate timing between the requestor and provider, handling conflicts and rescheduling
5. **Track fulfillment and follow-up** — record whether the need was met, collect brief feedback from both parties, flag patterns (e.g., recurring needs that suggest a structural gap)
6. **Maintain institutional knowledge** — capture coordination patterns, volunteer preferences, seasonal rhythms, and organizational contacts so that knowledge survives organizer transitions
7. **Surface coordination across organizations** — in multi-org settings (LA), identify when two organizations are serving the same need or when a gap exists between organizational scopes

**Hard constraint**: The agent supports coordination; it does not govern. Matching decisions require steward approval. The agent never unilaterally assigns a volunteer to a task, commits an organization to a request, or overrides a coordinator's decision.

### Escalation Criteria

| Trigger | Action | Escalate To |
|---------|--------|-------------|
| Need goes unmatched for >72 hours | Flag unmet need with category and urgency | Steward for direct outreach or external referral |
| Two organizations claim overlapping responsibility for a need | Surface overlap; do not arbitrate | Stewards from both organizations for joint decision |
| Volunteer declines or cancels a confirmed commitment | Re-search resource inventory; suggest alternative | Steward if no alternative found within 24 hours |
| Requestor reports dissatisfaction or harm | Pause matching for that pairing; record feedback | Steward for investigation and resolution |
| Request involves sensitive personal information (health, immigration, legal) | Flag domain; do not store details in general coordination graph | Steward → domain-specific agent (healthcare, immigration, etc.) |
| Coordinator turnover — primary organizer stepping down | Trigger knowledge transfer workflow | Steward + incoming coordinator for onboarding session |

## Success Indicators

| Indicator | Measurement | Target |
|-----------|-------------|--------|
| Need fulfillment rate | Submitted needs matched and fulfilled | ≥80% |
| Match time | Time from need submission to confirmed match | ≤72 hours (non-urgent) |
| Volunteer satisfaction | Volunteer-reported experience with coordination process | ≥4/5 |
| Coordinator burden | Hours/week spent on manual coordination | Measurable reduction |
| Cross-org awareness | Instances where coordination prevented duplication or filled a gap | Track and report |
| Knowledge continuity | New coordinator onboarding time | Reduction vs. baseline |
| Community participation | Number of unique requestors and providers per quarter | Growth over time |

## Anti-Patterns

- **Algorithmic matching without governance** — the agent suggests; the steward decides. Automated matching without human review risks inappropriate pairings, overloaded volunteers, and loss of community trust.
- **Replacing organizers** — the agent reduces administrative burden on coordinators. It does not replace the coordinators' judgment, relationships, or pastoral sensitivity. A spreadsheet replacement that loses the human touch has failed.
- **Extracting volunteer labor data** — volunteer availability, reliability patterns, and personal constraints are sensitive coordination data. They belong to the community, not to a platform. No data leaves community control.
- **Optimizing for throughput** — community coordination is not a logistics problem to be optimized. Matching Mrs. Chen with a volunteer driver is not the same as dispatching a rideshare. The relationship matters as much as the ride.
- **Ignoring multi-org politics** — in distributed settings (LA), organizations have their own identities, priorities, and politics. An agent that treats LAUSD, Venice Beach Book Club, and UCLA as interchangeable resource pools will alienate all three. Each organization's steward controls its own participation.
- **Technology solutionism** — many coordination problems are governance problems, not information problems. If two organizations don't coordinate because they don't trust each other, an agent won't fix that. The agent supports coordination when the will to coordinate already exists.

## Sources

- **Ostrom, E. (1990). *Governing the Commons*.** — foundational research on community self-governance; design principles for successful commons management (clear boundaries, collective choice, monitoring, graduated sanctions); shaped the governance-first approach
- **Spade, D. (2020). *Mutual Aid: Building Solidarity During This Crisis (and the Next)*.** — contemporary mutual aid coordination patterns; needs-to-resources matching as community practice; informed the request intake and matching capabilities
- **Sampson, R.J. (2012). *Great American City: Chicago and the Enduring Neighborhood Effect*.** — collective efficacy research; organizational density and coordination as determinants of community well-being; shaped the cross-org coordination capability
- **aDNA Context Graph Standard v2.2** — WHO/WHAT/HOW triad; federation model for multi-organizational coordination

## Related

- [[what/context/use_case_domains/context_cc_elder_care]] — elder care coordination is the most care-intensive use of community governance infrastructure
- [[what/context/use_case_domains/context_cc_healthcare_navigation]] — healthcare navigation triggers resource requests (rides to appointments, help with paperwork)
- [[what/context/use_case_domains/context_cc_immigration_services]] — immigrant families are both requestors and providers in community networks
- [[what/context/use_case_domains/context_cc_education_access]] — education access connects to tutoring, mentoring, and parent volunteer coordination
- [[what/context/program_design/context_cc_governance_model]] — program-level governance model that pilot communities adapt
- [[what/context/pilot_programs/context_cc_pilot_design_principles]] — Principle 2 (community governance over operations); Principle 1 (pilot sovereignty)
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A: concentrated congregational coordination
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B: distributed multi-institutional coordination
