---
type: use_case
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [use_case, healthcare, medicare, elder, needs-community-review]
domain: healthcare_navigation
community: community_peters_church_grand_rapids
beneficiary_group: "Elders (65+) navigating Medicare enrollment"
complexity: medium
---

# Elder Medicare Enrollment Navigator

> **DRAFT** — This use case has not been reviewed by community representatives. Per Standing Order #7, community review is required before this use case drives curriculum or pilot design. `#needs-community-review`

## Overview

An agentic system that walks elders through Medicare enrollment step by step — comparing plans in plain language, tracking deadlines, assembling required documents, and explaining notices — all in the elder's preferred language and under community steward governance. This is the most frequently referenced capstone project example across the Context Commons and serves as the flagship use case for demonstrating how community-governed agentic systems serve real people.

## Problem Statement

- **Domain:** Healthcare Navigation
- **Problem:** Medicare enrollment (especially Part D and Medicare Advantage) requires comparing dozens of plans across premiums, copays, formularies, and provider networks — a cognitively demanding task with strict annual deadlines. Elders who miss the Open Enrollment Period (Oct 15 – Dec 7) or make suboptimal choices face financial and health consequences that persist for a full year.
- **Current state:** Elders rely on family members (often taking time off work), SHIP counselors (waitlisted), or insurance brokers (not always neutral). Many elders accept default coverage without comparing options.
- **Impact of inaction:** Overpayment for coverage, medications not covered by chosen formulary, preferred providers out of network, missed enrollment windows resulting in late enrollment penalties.

## Beneficiary Group

- **Community:** [[who/communities/community_peters_church_grand_rapids]]
- **Beneficiaries:** Elders (65+) in Peter's Church congregation and surrounding Grand Rapids community; secondarily, elders in LA pilot (Venice Beach aging population)
- **Scale:** Peter's Church congregation includes an estimated 30-50 Medicare-eligible members; Grand Rapids metro has ~200K residents 65+

## Proposed Solution

A youth builder creates a context graph encoding the elder's relevant information (current coverage, medications, preferred providers, language preference) and the local Medicare landscape (available plans in Kent County, enrollment deadlines, SHIP counselor contacts). An agent reads this graph and:

- Walks the elder through a step-by-step enrollment review, starting with "What medications do you take?" and "Which doctors do you see?"
- Compares 3-5 relevant plans side by side, highlighting differences in monthly cost, medication coverage, and provider availability — in plain language, not insurance jargon
- Tracks the December 7 enrollment deadline and sends reminders to the elder, their family, and their steward starting 30 days before
- Generates a checklist of required documents and tracks completion
- Explains received notices (EOBs, coverage determination letters) in the elder's language

The system respects community governance: the steward reviews what the agent can access, the elder controls their personal information, and no data leaves the community.

## Context Graph Requirements

- **Modules:** Medicare plan comparison (formulary lookup, provider network check), deadline tracker, document checklist generator, plain-language notice explainer
- **Datasets:** CMS Plan Finder data (Kent County plans, formularies, provider directories), elder profile (medications, providers, language — community-stored, consent-governed), enrollment calendar
- **Lattices:** `healthcare_enrollment_workflow` — DAG from current-coverage review → medication/provider inventory → plan comparison → enrollment → confirmation → follow-up

## Community Governance

- **Steward approval:** Pending — requires Peter's Church pastoral leadership review
- **Elder consultation:** Pending — elders will co-design the enrollment workflow during Elder & Community Track sessions
- **Data consent:** Pending — individual consent required for medication lists, provider preferences, and personal information; community consent for aggregate reporting
- **Ongoing oversight:** Steward reviews agent outputs quarterly; elder can withdraw consent at any time; enrolled data is destroyed after enrollment confirmation unless elder opts to retain

## Implementation Notes

- **Complexity:** Medium — well-defined domain (Medicare), structured data (CMS Plan Finder), clear success criteria. Complexity is in the plain-language translation and multilingual support, not in the underlying logic.
- **Dependencies:** CMS Plan Finder data access (public); community steward identified and onboarded; elder participants recruited; Core Track completion by builder
- **Localization needs:** Grand Rapids: English primary, Spanish/Swahili secondary. Los Angeles: English, Spanish, Korean for Venice Beach elder population. Plan data varies by county — context graph must be localized to Kent County (GR) or Los Angeles County (LA).
- **Timeline:** Builder Track weeks 5-12 (capstone development phase); functional prototype by week 10; elder testing during co-design sessions weeks 11-12

## Related

- [[what/context/use_case_domains/context_cc_healthcare_navigation]] — domain context
- [[what/context/use_case_domains/context_cc_elder_care]] — complementary domain (care coordination)
- [[what/pilots/pilot_a_grand_rapids]] — Pilot A plan
- [[who/communities/community_peters_church_grand_rapids]] — primary community
- [[what/context/program_design/context_cc_program_architecture]] — capstone project structure
- [[what/context/adna_for_communities/context_adna_simplified]] — Medicare enrollment as illustrative aDNA example
