---
type: use_case
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [use_case, elder_care, coordination, volunteers, church, needs-community-review]
domain: elder_care
community: community_peters_church_grand_rapids
beneficiary_group: "Peter's Church elders and caregiving volunteers"
complexity: medium
---

# Congregational Care Coordinator

> **DRAFT** — This use case has not been reviewed by community representatives. Per Standing Order #7, community review is required before this use case drives curriculum or pilot design. `#needs-community-review`

## Overview

An agentic system that coordinates volunteer care for Peter's Church elders — matching needs (rides, meals, visits, errands) with available volunteers, managing weekly schedules, tracking follow-ups, and flagging unmet needs to pastoral staff. The system reduces the administrative burden on the 2-3 church members who currently manage care coordination informally, while preserving the warmth and personal relationships that define congregational care.

## Problem Statement

- **Domain:** Elder Care Coordination
- **Problem:** Peter's Church has a strong culture of congregational care — members drive elders to appointments, deliver meals, make home visits, and run errands. But this care runs on the memory and energy of a small number of coordinators (typically a deacon or two and the pastor's spouse). When coordinators are unavailable, needs are missed. When they burn out, the system breaks. There is no structured way to track who needs what, who is available to help, what has been done, and what has fallen through the cracks.
- **Current state:** Phone trees, Sunday bulletin announcements, text message chains, hand-written notes. One coordinator holds most of the state in their head. Volunteers sign up informally and sometimes forget. Elders are reluctant to ask repeatedly.
- **Impact of inaction:** Elders miss appointments (no ride), eat poorly (no meal delivery), become isolated (no visits), and eventually lose independence — not because the community doesn't care, but because care coordination at scale requires structured support.

## Beneficiary Group

- **Community:** [[who/communities/community_peters_church_grand_rapids]]
- **Beneficiaries:** Elders in Peter's Church congregation (30-50 members 65+); caregiving volunteers (15-25 active); informal family caregivers burdened by coordination
- **Scale:** Congregation-level (200-400 members); care coordination serves a rotating subset of 10-20 elders with active needs at any given time

## Proposed Solution

A youth builder creates a context graph encoding the congregation's care ecosystem: which elders have recurring needs (Mrs. Chen needs rides Tuesdays and Thursdays, Mr. Thompson needs meal delivery Mondays), which volunteers are available (Mr. Davis drives east side Wednesdays, Mrs. Park can deliver meals weekdays), and what the weekly schedule looks like. An agent reads this graph and:

- Receives reported needs (from the elder, a family member, or the steward) and categorizes them by type, urgency, and timing
- Searches volunteer availability and suggests matches — presenting options to the steward for approval rather than assigning automatically
- Coordinates scheduling between elder and volunteer once the steward approves a match
- Records completed services and sends a brief follow-up check to ensure the need was met
- Flags unmet needs (no volunteer available within 48 hours) to the steward or pastoral staff
- Tracks volunteer load to prevent burnout — alerts when a volunteer is handling more than 3 ongoing commitments

The system preserves the congregational care culture. Volunteers are not "assigned tasks" — they are matched with neighbors they know. The steward (deacon or pastoral staff) retains all decision-making authority. The agent is a coordination tool, not a care manager.

## Context Graph Requirements

- **Modules:** Need intake and categorizer, volunteer availability matcher, schedule coordinator, follow-up tracker, volunteer load monitor, unmet need alerter
- **Datasets:** Elder needs registry (recurring and one-time needs, consent-governed), volunteer directory (availability, capabilities, geographic zone, load), weekly schedule, service completion log
- **Lattices:** `congregational_care_workflow` — DAG from need report → categorization → volunteer search → steward approval → scheduling → service delivery → follow-up → satisfaction check. Loop: unmet needs → steward escalation.

## Community Governance

- **Steward approval:** Pending — requires Peter's Church pastoral leadership (deacon team) endorsement
- **Elder consultation:** Pending — elders will define what "good care coordination" means to them during Elder & Community Track sessions
- **Data consent:** Pending — individual elder consent for needs tracking; volunteer consent for availability sharing; aggregate reporting only (never individual elder data shared outside the care team)
- **Ongoing oversight:** Deacon team reviews system monthly; elders can withdraw from tracking at any time; volunteer participation is always voluntary

## Implementation Notes

- **Complexity:** Medium — domain is well-understood (congregational care is an ancient pattern); data is relatively simple (needs, availability, schedules). Complexity is in preserving relational warmth while adding structure, and in preventing the system from feeling transactional.
- **Dependencies:** Deacon team buy-in; initial needs survey of congregation elders; volunteer willingness to share availability; Core Track completion by builder
- **Localization needs:** Grand Rapids: English primary, Spanish secondary. The relational dynamics and church governance patterns are site-specific — this use case is not directly portable to LA's distributed multi-institutional model.
- **Timeline:** Builder Track weeks 5-12; prototype by week 8 (simpler domain than healthcare or immigration); elder testing in co-design sessions weeks 9-12

## Related

- [[what/context/use_case_domains/context_cc_elder_care]] — domain context
- [[what/context/use_case_domains/context_cc_community_governance]] — coordination infrastructure shared with broader community governance
- [[what/use_cases/use_case_elder_medicare_enrollment]] — complementary use case (healthcare navigation for the same elders)
- [[what/pilots/pilot_a_grand_rapids]] — Pilot A plan
- [[who/communities/community_peters_church_grand_rapids]] — primary community
- [[what/context/pilot_programs/context_cc_pilot_design_principles]] — Principle 5 (intergenerational loop) operationalized
