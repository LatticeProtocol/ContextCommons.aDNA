---
type: use_case
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [use_case, immigration, paperwork, multilingual, needs-community-review]
domain: immigration_services
community: community_lausd_venice_beach_la
beneficiary_group: "Immigrant families navigating paperwork and deadlines"
complexity: high
---

# Immigration Paperwork Navigator

> **DRAFT** — This use case has not been reviewed by community representatives. Per Standing Order #7, community review is required before this use case drives curriculum or pilot design. `#needs-community-review`

## Overview

An agentic system that helps immigrant families organize immigration documents, track deadlines across concurrent applications, generate checklists of required paperwork, and locate translation and notarization services — all in the family's preferred language and under strict community governance. The agent never provides legal advice; it supports administrative organization.

## Problem Statement

- **Domain:** Immigration Services
- **Problem:** Immigrant families simultaneously manage multiple bureaucratic processes (USCIS applications, benefits enrollment, school registration, driver's license, healthcare access) with different forms, deadlines, documentation requirements, and languages. Missing a single deadline can delay proceedings by months or years. Organizing this complexity typically falls on the most English-proficient family member — often a child.
- **Current state:** Paper folders, informal community advice, reliance on bilingual children to interpret official documents, paid immigration consultants (quality varies), legal aid organizations (waitlisted).
- **Impact of inaction:** Missed application deadlines, incomplete submissions returned without processing, benefits underutilization, children burdened with adult administrative responsibilities, families isolated from available support.

## Beneficiary Group

- **Community:** [[who/communities/community_lausd_venice_beach_la]]
- **Beneficiaries:** Immigrant families in the LAUSD community and surrounding Los Angeles neighborhoods; secondarily, refugee and immigrant families in Grand Rapids
- **Scale:** LA County has ~3.4M foreign-born residents; ~25M U.S. residents have limited English proficiency nationally

## Proposed Solution

A youth builder creates a context graph encoding the family's active processes (which forms are pending, what documents have been gathered, what deadlines are approaching) and available community resources (translation services, notarization, legal aid contacts, bilingual stewards). An agent reads this graph and:

- Maintains a structured inventory of the family's immigration documents organized by process (USCIS application, benefits enrollment, school registration)
- Tracks all deadlines across concurrent processes in one consolidated view and sends alerts 30, 14, and 7 days before each deadline
- Generates a document checklist for each active process, showing what is complete, what is missing, and where to obtain missing items
- Connects the family with community translation and notarization resources, including volunteer translators within the congregation or school network
- Screens for benefits eligibility (CalFresh, WIC, CHIP, Medi-Cal, free/reduced lunch) based on family composition and immigration status — then hands off enrollment support to the healthcare navigation agent

All interactions are in the family's preferred language. The system operates entirely under community governance: the steward controls access, the family owns their data, and no information leaves the community.

## Context Graph Requirements

- **Modules:** Document inventory manager, multi-deadline tracker, checklist generator, benefits eligibility screener, translation resource finder
- **Datasets:** USCIS form requirements (public), community resource directory (translation, notarization, legal aid), family document inventory (community-stored, consent-governed), benefits eligibility rules by immigration status (NILC reference)
- **Lattices:** `immigration_document_workflow` — DAG from process identification → document assembly → translation/notarization → submission → confirmation → follow-up. Cross-domain links to healthcare enrollment and school enrollment lattices.

## Community Governance

- **Steward approval:** Pending — requires multi-institutional steward coordination (LAUSD, Venice Beach Book Club, UCLA liaison)
- **Elder consultation:** Pending — immigrant community leaders and family representatives will co-design workflows
- **Data consent:** Pending — individual family consent required for all document storage; heightened sensitivity given immigration context; community data sovereignty is non-negotiable
- **Ongoing oversight:** Steward reviews agent access quarterly; family can withdraw consent and delete all stored data at any time; no data shared outside the community under any circumstances

## Implementation Notes

- **Complexity:** High — multiple concurrent processes, legal sensitivity (agent must never cross into legal advice), extreme language diversity (100+ languages in LAUSD), trust and fear dynamics require careful steward introduction
- **Dependencies:** Community steward identified with multilingual capability; legal aid partnership for escalation referrals; builder completes Core Track + immigration-domain onboarding; family trust established through steward relationship
- **Localization needs:** Los Angeles: Spanish (primary), Korean, Armenian, Tagalog, Mandarin, Vietnamese. Grand Rapids: Swahili, Karen, Arabic, Spanish. Form requirements are federal but benefits programs are state-specific (California vs. Michigan).
- **Timeline:** Builder Track weeks 5-12 (capstone phase); prototype by week 10 with single-family pilot; broader testing during co-design sessions

## Related

- [[what/context/use_case_domains/context_cc_immigration_services]] — domain context
- [[what/context/use_case_domains/context_cc_healthcare_navigation]] — cross-domain (benefits enrollment handoff)
- [[what/context/use_case_domains/context_cc_education_access]] — cross-domain (school enrollment)
- [[what/pilots/pilot_b_los_angeles]] — Pilot B plan
- [[who/communities/community_lausd_venice_beach_la]] — primary community
- [[what/context/adna_for_communities/context_lattice_for_communities]] — immigration example (LAUSD family)
