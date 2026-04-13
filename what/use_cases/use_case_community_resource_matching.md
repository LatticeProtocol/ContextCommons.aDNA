---
type: use_case
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [use_case, community_governance, resource_matching, volunteers, coordination, needs-community-review]
domain: community_governance
community: both
beneficiary_group: "Community members with unmet needs and community members with resources to offer"
complexity: medium
---

# Community Resource Matching

> **DRAFT** — This use case has not been reviewed by community representatives. Per Standing Order #7, community review is required before this use case drives curriculum or pilot design. `#needs-community-review`

## Overview

An agentic system that connects community members who need help with community members who can provide it — across tutoring, translation, transportation, home repair, technology assistance, and other resource categories. The system intakes needs, searches a community resource inventory, suggests matches for steward approval, coordinates confirmation, and tracks fulfillment. It operates across both pilot communities, adapting to Grand Rapids' concentrated congregational model and Los Angeles' distributed multi-institutional model.

## Problem Statement

- **Domain:** Community Governance & Coordination
- **Problem:** Every community has people who need help and people who can help, but connecting them is manually intensive and fragile. In Grand Rapids, the church bulletin reaches Sunday attendees but misses weekday needs. In Los Angeles, three institutions (LAUSD, Venice Beach Book Club, UCLA) serve overlapping populations without knowing what each other offers. The coordination labor falls on a few overloaded organizers, and when they step back, institutional knowledge disappears with them.
- **Current state:** Facebook groups, church bulletins, sign-up sheets, text chains, and the memory of community organizers. No structured way to record what resources are available, what needs exist, or whether matches were successful.
- **Impact of inaction:** Needs go unmet despite available resources, volunteers burn out from uncoordinated demands, duplicate efforts waste community energy, new organizers start from scratch, and the most isolated community members — who most need connection — are hardest to reach.

## Beneficiary Group

- **Community:** Both — [[who/communities/community_peters_church_grand_rapids]] and [[who/communities/community_lausd_venice_beach_la]]
- **Beneficiaries:** Community members with unmet needs (elders needing help, families needing services, youth seeking mentoring); community members with resources to offer (volunteers, professionals, organizations)
- **Scale:** Peter's Church congregation (200-400 members), LA multi-institutional network (thousands of potential participants across LAUSD, Venice Beach, UCLA communities)

## Proposed Solution

A youth builder creates a context graph encoding the community's resource ecosystem: what categories of help are available (tutoring, translation, transportation, home repair, technology assistance, meal preparation), who offers each type and when, what needs are currently open, and what the coordination process looks like. An agent reads this graph and:

- Accepts need requests from community members (through a steward, a builder, or directly) with category, timing, location, and language preference
- Searches the resource inventory for matching offers, filtering by availability, geographic proximity, language, and current volunteer load
- Presents the top matches to the steward for review and approval — the agent never assigns unilaterally
- Coordinates confirmation and scheduling between requestor and provider once approved
- Records fulfillment status and collects brief feedback from both parties
- Surfaces patterns: recurring unmet needs (signal for new programs), overloaded volunteers (signal for recruitment), cross-organizational gaps (signal for partnership coordination)

In the multi-institutional LA setting, the system also surfaces when LAUSD and Venice Beach Book Club are both trying to serve the same need, or when a gap exists between organizations' scopes — enabling stewards from each institution to coordinate rather than duplicate.

## Context Graph Requirements

- **Modules:** Need intake and categorizer, resource inventory searcher, match suggester, schedule coordinator, fulfillment tracker, pattern detector
- **Datasets:** Need registry (categorized, time-stamped, location-tagged), resource inventory (volunteers, services, availability, capacity, skills, language), coordination history (matches, fulfillment, feedback), organizational directory (LA: LAUSD programs, Venice Beach Book Club services, UCLA resources)
- **Lattices:** `community_resource_matching_workflow` — DAG from need intake → categorization → resource search → steward-approved matching → scheduling → fulfillment → feedback → pattern reporting. In LA: additional cross-org coordination loop.

## Community Governance

- **Steward approval:** Pending — Grand Rapids: deacon team; Los Angeles: requires steward from each participating institution
- **Elder consultation:** Pending — community members will define need categories and matching preferences during co-design sessions
- **Data consent:** Pending — individual consent for needs and offers; aggregate pattern data shared with stewards only; no individual data shared across organizations without explicit consent
- **Ongoing oversight:** Steward reviews matches and patterns monthly; organizations control their own resource inventory; individuals can withdraw from the system at any time

## Implementation Notes

- **Complexity:** Medium — the matching logic is straightforward (category + availability + location); the complexity is in multi-organizational governance (LA) and in preserving relational quality while adding structure
- **Dependencies:** At least one steward per organization; initial resource inventory survey; community trust in the matching process; Core Track + governance domain orientation by builder
- **Localization needs:** Grand Rapids: English primary, single-org governance. Los Angeles: Spanish/English primary, Korean/Armenian secondary; multi-org governance requires inter-institutional steward coordination protocol.
- **Timeline:** Builder Track weeks 5-12; prototype by week 8 (start with single-org GR model); multi-org extension for LA weeks 10-12

## Related

- [[what/context/use_case_domains/context_cc_community_governance]] — domain context
- [[what/use_cases/use_case_congregational_care_coordinator]] — specialized instance for elder care at Peter's Church
- [[what/context/use_case_domains/context_cc_elder_care]] — care coordination is the most care-intensive use of resource matching
- [[what/pilots/pilot_a_grand_rapids]] — Pilot A: concentrated model
- [[what/pilots/pilot_b_los_angeles]] — Pilot B: distributed model
- [[what/context/pilot_programs/context_cc_pilot_design_principles]] — Principle 1 (sovereignty) and Principle 2 (community governance)
