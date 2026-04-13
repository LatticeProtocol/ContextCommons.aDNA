---
type: context
topic: use_case_domains
subtopic: elder_care
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [context, use_case_domains, elder_care, caregiving, coordination, intergenerational, needs-community-review]
token_estimate: ~2300
sources: ["AARP/NAC 2020 Caregiving in the U.S.", "Gaugler et al. 2005 caregiver burden research", "faith-based community care models (Cnaan et al. 2006)", "aDNA Context Graph Standard v2.2"]
context_version: "1.0"
gaps: [specific care coordination software comparison, insurance coverage for respite care]
quality_score: 4.4
signal_density: 4
actionability: 5
coverage_uniformity: 5
source_diversity: 4
cross_topic_coherence: 4
freshness_category: mixed
last_evaluated: 2026-04-13
---

# Use Case Domain: Elder Care Coordination

> **DRAFT** — This domain description is based on pilot community needs assessments. It has not been reviewed by community representatives. Per Standing Order #7, community review is required before this content drives curriculum or pilot design. `#needs-community-review`

## Domain Overview

Elder care coordination encompasses the holistic support ecosystem around an aging person — transportation, meals, medication reminders, social connection, caregiver support, housing maintenance, and the coordination of volunteer and family resources to meet daily needs. This is fundamentally a *people* domain, not a *systems* domain. Where **healthcare navigation** (see `context_cc_healthcare_navigation.md`) addresses the administrative complexity of insurance, benefits, and medical appointments, elder care coordination addresses the web of relationships and logistics that keep an elder safe, connected, and dignified in their community.

The boundary is important: getting Mrs. Johnson enrolled in the right Medicare plan is healthcare navigation. Making sure she has a ride to the doctor, a meal when she gets home, someone to check on her the next day, and a way to tell her granddaughter how the appointment went — that is elder care coordination. The two domains interoperate (healthcare navigation may trigger care coordination needs, and care coordination may surface healthcare navigation gaps), but they serve different purposes and require different context graph structures.

## Problem Landscape

| Problem | Who Faces It | Current State Without Agents |
|---------|-------------|------|
| Transportation to appointments and services | Elders without reliable transportation | Family members taking time off work, church volunteer sign-up sheets, paratransit (limited) |
| Meal coordination | Elders who cannot cook or shop independently | Meals on Wheels (waitlisted), church meal trains (informal), family members |
| Social isolation | Elders living alone or with limited mobility | Phone calls, church visits (inconsistent), senior center programs (requires transportation) |
| Medication reminders | Elders managing multiple prescriptions | Pill organizers, family phone calls, pharmacy auto-refills (impersonal) |
| Caregiver burden | Family members and volunteers providing care | Informal coordination, burnout, guilt, lack of respite |
| Home safety and maintenance | Elders aging in place | Family help, church volunteer projects (seasonal), deferred maintenance |

**Scale**: Over 53M Americans provided unpaid care in 2020 (AARP/NAC). Caregiver burden is the leading cause of elder institutionalization — not the elder's condition, but the caregiver's exhaustion (Gaugler et al., 2005). In faith-based communities like Peter's Church, care coordination is often the most visible expression of congregational life, but it runs on informal systems that break down as needs grow.

## Community Need Mapping

| Dimension | Grand Rapids (Pilot A) | Los Angeles (Pilot B) |
|-----------|----------------------|----------------------|
| Primary setting | Peter's Church congregation — concentrated, single-site | Venice Beach neighborhood — distributed, multi-site |
| Care model | Congregational care (pastoral visits, deacon teams, volunteer networks) | Community-based (neighborhood associations, book club, scattered services) |
| Language needs | English, Spanish, Swahili (elder population primarily English-speaking) | English, Spanish, Korean (Venice/Santa Monica aging population linguistically diverse) |
| Transportation | Church volunteer drivers, limited public transit | Public transit available but challenging for mobility-limited elders |
| Meal programs | Church kitchen + volunteer meal trains | Scattered: Meals on Wheels, restaurant partnerships, family networks |
| Key strength | Existing care culture in congregation; high trust, high willingness | Urban density — more services available, shorter distances |
| Key challenge | Informal systems don't scale; no structured tracking; volunteer burnout | Fragmented services; no single coordinating body; anonymity of urban living |

## Context Graph Structure

| Triad | Entities | Examples |
|-------|----------|---------|
| **WHO** | Elder, caregiver (family), volunteer, steward, builder, pastoral staff, neighbor | Mrs. Chen (elder), her daughter Lisa (caregiver), Mr. Davis (volunteer driver), Deacon Williams (steward) |
| **WHAT** | Needs registry, volunteer availability, transportation routes, meal schedules, medication lists, emergency contacts, home maintenance tasks | Mrs. Chen needs rides on Tuesdays and Thursdays; Mr. Davis drives the east side on Wednesdays |
| **HOW** | Need-to-volunteer matching, weekly schedule coordination, check-in tracking, escalation workflow, caregiver respite scheduling | Step 1: Elder or family reports need → Step 2: Match with available volunteer → Step 3: Confirm and schedule → Step 4: Follow up → Step 5: Flag unmet needs to steward |

## Agent Capabilities

An agentic system for elder care coordination would:

1. **Match needs with available volunteers** — when an elder needs a ride, a meal, or a visit, the agent searches volunteer availability (day, time, location, capability) and suggests matches for steward approval
2. **Coordinate weekly schedules** — maintain a consolidated view of an elder's weekly needs and who is covering each one, preventing gaps and reducing double-booking
3. **Track follow-ups and check-ins** — after a service is provided (ride given, meal delivered, visit made), record completion and flag missed check-ins to the steward
4. **Reduce caregiver burden** — help family caregivers see what community support is available, request help, and share the load without feeling they have failed
5. **Flag unmet needs** — when a need goes unfilled for a defined period, escalate to the steward or pastoral staff so no elder falls through the cracks
6. **Preserve dignity** — all interactions frame the elder as a community member with agency, not a "case" to be managed. The elder's preferences, routines, and relationships are first-class data in the context graph

**Hard constraint**: The agent coordinates logistics and information. It does not provide medical care, make safety assessments, or substitute for professional elder care services. If an elder's needs exceed community volunteer capacity, the agent escalates to professional services through the steward.

### Escalation Criteria

| Trigger | Action | Escalate To |
|---------|--------|-------------|
| Elder reports feeling unwell, pain, or confusion | Stop coordination; do not assess | Steward → family → healthcare provider (call 911 if emergent) |
| Need goes unfilled for >48 hours | Flag unmet need | Steward or pastoral staff for direct intervention |
| Single volunteer handling >3 ongoing commitments | Flag overload risk | Steward to redistribute or recruit additional volunteers |
| Elder's needs exceed volunteer capacity (e.g., daily personal care) | Acknowledge limitation; do not attempt to fill with volunteers | Steward → Area Agency on Aging or professional home care referral |
| Elder declines check-ins or requests privacy | Respect preference; record consent status | Steward for pastoral follow-up (not automated re-contact) |
| Elder needs Medicare enrollment or benefits paperwork help | Hand off to healthcare navigation agent | Healthcare navigation domain (see `context_cc_healthcare_navigation.md`) |

## Success Indicators

| Indicator | Measurement | Target |
|-----------|-------------|--------|
| Need fulfillment rate | Reported needs matched with a volunteer within 48 hours | ≥85% |
| Check-in completion | Scheduled check-ins that are actually completed | ≥90% |
| Caregiver burden | Family caregiver self-reported stress (pre/post) | Measurable reduction |
| Social contact frequency | Elder-reported meaningful social interactions per week | ≥3 |
| Volunteer retention | Volunteers still active after 6 months | ≥70% |
| Elder satisfaction | Self-reported quality of community support | ≥4/5 |
| Unmet need escalation time | Time from unmet need to steward notification | ≤24 hours |

## Anti-Patterns

- **Treating elders as passive recipients** — elders contribute context, wisdom, and governance. Mrs. Chen is not a "case." She is a community member whose needs the community is organized to meet. Many elders are also volunteers for other elders.
- **Over-systematizing care** — care coordination should reduce friction, not replace warmth. If the system makes a volunteer visit feel like a task assignment, it has failed. The agent supports relationships; it does not manage them.
- **Ignoring volunteer burnout** — a system that fills every slot maximally will burn out volunteers. The agent should track volunteer load and flag when someone is overcommitted, not just when slots are empty.
- **Replacing family with volunteers** — the agent helps families coordinate with community volunteers, not hand off responsibility. Family caregivers remain central; the community supplements.
- **Surveillance framing** — check-in tracking serves elder safety, not monitoring. The elder and their family must consent to and control what is tracked. An elder who declines check-ins retains that right.

## Sources

- **AARP/National Alliance for Caregiving (2020). Caregiving in the U.S.** — 53M unpaid caregivers; burden distribution, unmet needs; established the scale and urgency of care coordination
- **Gaugler, J.E. et al. (2005). "Unmet Care Needs and Key Outcomes in Dementia." *JAGS*, 53(12).** — caregiver burden as primary driver of institutionalization; informed the caregiver-focused anti-patterns and success indicators
- **Cnaan, R.A. et al. (2006). *The Other Philadelphia Story: How Local Congregations Support Quality of Life in Urban America*.** — faith-based community care models; empirical data on congregational care coordination patterns at scale
- **aDNA Context Graph Standard v2.2** — WHO/WHAT/HOW triad; entity relationship modeling for care coordination graphs

## Related

- [[what/context/use_case_domains/context_cc_healthcare_navigation]] — navigating healthcare systems (complementary domain; elder care coordinates the person, healthcare navigation navigates the system)
- [[what/context/use_case_domains/context_cc_community_governance]] — resource matching is a shared concern; community governance provides the coordination infrastructure elder care relies on
- [[what/context/program_design/context_cc_thesis]] — circular knowledge economy: elders hold context, youth build systems, stewards govern
- [[what/context/pilot_programs/context_cc_pilot_design_principles]] — intergenerational loop requirement (Principle 5) operationalized here
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A: congregational care coordination is a primary need
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B: Venice Beach aging population
