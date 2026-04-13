---
type: use_case
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [use_case, education, school, IEP, enrollment, LAUSD, needs-community-review]
domain: education_access
community: community_lausd_venice_beach_la
beneficiary_group: "Parents/guardians navigating LAUSD enrollment and IEP processes"
complexity: medium-high
---

# School Enrollment & IEP Navigator

> **DRAFT** — This use case has not been reviewed by community representatives. Per Standing Order #7, community review is required before this use case drives curriculum or pilot design. `#needs-community-review`

## Overview

An agentic system that helps parents navigate school enrollment options, assemble application documents, prepare for IEP meetings, and understand their children's educational rights — in the family's preferred language and governed by community stewards. The agent presents information and options; it does not recommend schools or advise on IEP disputes.

## Problem Statement

- **Domain:** Education Access
- **Problem:** LAUSD families face a school system with 1,000+ schools, magnet programs, charter options, open enrollment periods, and a special education process governed by federal law (IDEA). For non-English-speaking families, every interaction with the school system requires translation. For families with children who have disabilities, IEP meetings are legally structured but practically asymmetric — parents walk into a room of professionals without understanding the process, their rights, or what to ask.
- **Current state:** Overloaded school counselors, district websites with buried information, IEP meetings where parents sign documents they don't fully understand, word-of-mouth school recommendations that reinforce inequality.
- **Impact of inaction:** Families placed in default schools without considering alternatives, IEP goals that don't reflect family priorities, missed enrollment deadlines for magnet programs, scholarship opportunities not pursued, children's needs unmet due to parent disempowerment.

## Beneficiary Group

- **Community:** [[who/communities/community_lausd_venice_beach_la]]
- **Beneficiaries:** Parents and guardians of LAUSD students — especially non-English-speaking families, families navigating special education, and families new to the district (including immigrant and refugee families)
- **Scale:** LAUSD serves ~420,000 students; ~7.5M students nationally receive special education services

## Proposed Solution

A youth builder creates a context graph encoding the family's educational context (children's ages, current school, special education status, language preference, neighborhood) and the local educational landscape (available schools, enrollment deadlines, IEP timeline, parent rights). An agent reads this graph and:

- Presents school options with factual comparisons (programs, proximity, language support, special education services, performance data) organized by what matters to the family — without ranking
- Generates an enrollment document checklist (proof of residency, immunization records, prior school records, birth certificate) and tracks what the family has assembled
- Prepares families for IEP meetings: explains the process, parent rights under IDEA, the meaning of each IEP section, questions to consider, and how to request changes or file a dispute
- Tracks application deadlines (magnet lottery, charter applications, FAFSA, scholarship submissions) and sends alerts
- Translates school communications (notices, report cards, automated messages) into the family's preferred language with plain-language explanations of required actions

## Context Graph Requirements

- **Modules:** School option comparator (proximity, programs, services), enrollment checklist generator, IEP meeting prep guide, deadline tracker, school communication translator
- **Datasets:** LAUSD school directory (public), enrollment requirements by school type, IDEA procedural safeguards reference, scholarship/financial aid database, family education profile (community-stored, consent-governed)
- **Lattices:** `school_enrollment_workflow` — DAG from family profile → school option discovery → application assembly → submission → placement confirmation. `iep_preparation_workflow` — DAG from meeting notice → rights review → document review → question preparation → meeting → follow-up.

## Community Governance

- **Steward approval:** Pending — requires LAUSD teacher champion and Venice Beach Book Club community organizer
- **Elder consultation:** Pending — parent representatives will co-design workflows during Steward Track sessions
- **Data consent:** Pending — family consent for student information storage; heightened sensitivity for special education records (FERPA protections)
- **Ongoing oversight:** Steward reviews agent outputs quarterly; family controls all student data; IEP-related information stored with additional consent layer

## Implementation Notes

- **Complexity:** Medium-high — school enrollment is straightforward; IEP navigation adds legal complexity (IDEA, FERPA) and emotional weight. The agent must be accurate about rights without providing legal advice.
- **Dependencies:** LAUSD school data access (public); community steward with school system knowledge; builder completes Core Track + education domain orientation; partnership with parent advocacy organization for escalation referrals
- **Localization needs:** Los Angeles: Spanish (40%+ LAUSD families), Korean, Armenian, Tagalog, Mandarin. Grand Rapids (secondary): English, Swahili, Karen, Arabic. School systems differ entirely between districts.
- **Timeline:** Builder Track weeks 5-12; prototype by week 10 focusing on enrollment workflow; IEP preparation module added weeks 11-12

## Related

- [[what/context/use_case_domains/context_cc_education_access]] — domain context
- [[what/context/use_case_domains/context_cc_immigration_services]] — overlapping populations (immigrant family school enrollment)
- [[what/pilots/pilot_b_los_angeles]] — Pilot B plan
- [[who/communities/community_lausd_venice_beach_la]] — primary community
- [[what/context/program_design/context_cc_program_architecture]] — capstone domain: educational access
