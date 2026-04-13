---
type: use_case
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [use_case, multilingual, benefits, cross_domain, healthcare, immigration, needs-community-review]
domain: cross_domain
community: community_lausd_venice_beach_la
beneficiary_group: "Non-English-speaking families navigating multiple benefits systems"
complexity: high
---

# Multilingual Benefits Navigator

> **DRAFT** — This use case has not been reviewed by community representatives. Per Standing Order #7, community review is required before this use case drives curriculum or pilot design. `#needs-community-review`

## Overview

An agentic system that helps non-English-speaking families navigate multiple benefits programs simultaneously — CalFresh (SNAP), Medi-Cal (Medicaid), WIC, CHIP, free/reduced school meals, energy assistance, and housing support — conducting all interactions in the family's preferred language. This cross-domain use case bridges healthcare navigation and immigration services, addressing the specific challenge of families who qualify for benefits across multiple systems but cannot access them due to language barriers, bureaucratic complexity, and fear of institutional interaction.

## Problem Statement

- **Domain:** Cross-domain (Healthcare Navigation + Immigration Services)
- **Problem:** Non-English-speaking families in Los Angeles often qualify for multiple benefits programs but face compounding barriers to enrollment: each program has its own application, its own documentation requirements, its own deadlines, and its own language access gaps. A single family may simultaneously need CalFresh (food), Medi-Cal (health), WIC (nutrition), CHIP (children's health), free/reduced lunch (school), and LIHEAP (energy) — six applications across four agencies in a language the system was not designed for. Families who manage one enrollment often miss others because no one told them they qualified.
- **Current state:** Benefits counselors at community-based organizations (overloaded), school-based family resource centers (limited hours), 211 hotlines (phone-only, language barriers). Families often learn about programs from other immigrant families, not from the programs themselves.
- **Impact of inaction:** Eligible families go without food assistance, health coverage, and energy support — not because they don't qualify, but because the application process is a full-time job in a language they don't read. Children attend school hungry. Elders skip medications. Families choose between paying rent and buying food.

## Beneficiary Group

- **Community:** [[who/communities/community_lausd_venice_beach_la]]
- **Beneficiaries:** Non-English-speaking families in the LAUSD community, particularly Spanish-speaking, Korean-speaking, Armenian-speaking, and Tagalog-speaking households; secondarily, refugee families in Grand Rapids navigating Michigan benefits
- **Scale:** ~25M U.S. residents have limited English proficiency; LA County alone has ~2.5M LEP residents. LAUSD provides free/reduced lunch to 80%+ of students, indicating widespread benefits eligibility.

## Proposed Solution

A youth builder creates a context graph encoding the family's household composition (adults, children, ages, immigration status as relevant to eligibility), income, and current benefits enrollment. The agent reads this graph and:

- Conducts an eligibility screening across all available programs based on household composition, income, and location — presenting results in the family's preferred language in a single consolidated view ("Your family may qualify for: CalFresh, Medi-Cal, free lunch, WIC")
- Generates application checklists for each program the family wants to pursue, with required documents and deadlines organized by program
- Tracks concurrent applications across programs — so the family and steward see one calendar, not six
- Produces all materials (checklists, reminders, instructions) in the family's preferred language
- Hands off health-specific enrollment to the healthcare navigation agent and immigration-related eligibility questions to the immigration services agent — maintaining one coordinated experience for the family

The agent operates under community governance: the bilingual steward introduces the system, the family controls all information, and no data is shared with government agencies or any entity outside the community.

## Context Graph Requirements

- **Modules:** Multi-program eligibility screener, cross-program application tracker, multilingual output generator, benefits-specific checklist generator, domain handoff coordinator
- **Datasets:** Benefits eligibility rules by program (NILC, California DPSS, USDA — public), household profile (composition, income, status — community-stored, consent-governed, heightened sensitivity), application deadline calendar, community bilingual resource directory
- **Lattices:** `multilingual_benefits_workflow` — DAG from household profile → eligibility screening → program selection → parallel application assembly → submission tracking → enrollment confirmation. Cross-domain links: healthcare enrollment → `context_cc_healthcare_navigation`; immigration eligibility → `context_cc_immigration_services`.

## Community Governance

- **Steward approval:** Pending — requires bilingual steward with benefits system knowledge; LAUSD family resource center partnership
- **Elder consultation:** Pending — community members who have navigated benefits systems will co-design the workflow from lived experience
- **Data consent:** Pending — heightened sensitivity: household composition, income, and immigration status data requires explicit individual consent with clear explanation (in the family's language) of what is stored, who can see it, and how to delete it. Community data sovereignty is absolute.
- **Ongoing oversight:** Steward reviews agent access quarterly; family can delete all stored data at any time; system logs what was accessed but not what the data contained; no data extraction under any circumstances

## Implementation Notes

- **Complexity:** High — cross-domain (healthcare + immigration + education benefits), extreme language diversity, data sensitivity, trust dynamics. This is one of the most complex capstone projects and may be appropriate for an advanced builder or a builder pair.
- **Dependencies:** Bilingual steward with benefits counseling experience; legal review of eligibility screening scope (to confirm it remains informational, not advisory); partnerships with community-based organizations for referral; Core Track + both healthcare and immigration domain orientation
- **Localization needs:** Los Angeles: Spanish (primary), Korean, Armenian, Tagalog, Mandarin, Vietnamese. Grand Rapids: Swahili, Karen, Arabic, Spanish. Benefits programs are entirely state-specific (California DPSS vs. Michigan DHHS).
- **Timeline:** Builder Track weeks 7-12 (starts later due to cross-domain complexity); prototype by week 10 focusing on eligibility screening; full workflow by week 12

## Related

- [[what/context/use_case_domains/context_cc_healthcare_navigation]] — domain context (health benefits enrollment)
- [[what/context/use_case_domains/context_cc_immigration_services]] — domain context (immigration-related eligibility)
- [[what/use_cases/use_case_elder_medicare_enrollment]] — complementary (Medicare-specific enrollment)
- [[what/use_cases/use_case_immigration_paperwork_navigator]] — complementary (immigration document organization)
- [[what/pilots/pilot_b_los_angeles]] — Pilot B plan
- [[who/communities/community_lausd_venice_beach_la]] — primary community
- [[what/context/program_design/context_cc_thesis]] — circular knowledge economy: multilingual families as both beneficiaries and context holders
