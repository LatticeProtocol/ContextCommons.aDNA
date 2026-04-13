---
type: context
topic: use_case_domains
subtopic: immigration_services
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [context, use_case_domains, immigration, civic, multilingual, needs-community-review]
token_estimate: ~2300
sources: ["USCIS processing data and form guides", "Migration Policy Institute language access research", "National Immigration Law Center benefits guides", "aDNA Context Graph Standard v2.2"]
context_version: "1.0"
gaps: [specific form-by-form workflow details, state-level immigration service variation]
quality_score: 4.4
signal_density: 4
actionability: 5
coverage_uniformity: 4
source_diversity: 4
cross_topic_coherence: 5
freshness_category: mixed
last_evaluated: 2026-04-13
---

# Use Case Domain: Immigration Services

> **DRAFT** — This domain description is based on pilot community needs assessments. It has not been reviewed by community representatives. Per Standing Order #7, community review is required before this content drives curriculum or pilot design. `#needs-community-review`

## Domain Overview

Immigration services encompasses the administrative, linguistic, and procedural challenges faced by immigrant and refugee families navigating U.S. systems — immigration paperwork, benefits enrollment, school registration, civic participation, and the daily burden of operating in a language and institutional landscape that was not designed for them. This domain is not about immigration law (which requires licensed attorneys). It is about *administrative navigation*: organizing documents, tracking deadlines, finding resources, and reducing the cognitive load of managing life across multiple bureaucratic systems simultaneously.

Both pilot communities serve significant immigrant populations. Grand Rapids has growing Swahili-speaking, Karen, Arabic, and Spanish-speaking refugee and immigrant communities. Los Angeles is one of the most linguistically diverse cities on earth, with 40%+ of LAUSD students speaking Spanish at home and over 100 additional languages represented.

## Problem Landscape

| Problem | Who Faces It | Current State Without Agents |
|---------|-------------|------|
| Form tracking and organization | Families with active immigration cases | Paper folders, informal community advice, missed deadlines |
| Deadline management | Anyone with pending applications or renewals | Manual calendar tracking, reliance on attorney reminders |
| Document assembly | Families preparing applications or renewals | Scattered documents, unclear requirements, costly translation/notarization |
| Language access | Non-English-speaking families | Reliance on bilingual children, community interpreters, or paid translators |
| Benefits enrollment | Eligible immigrants unfamiliar with available programs | Underutilization of CalFresh, WIC, CHIP, Medicaid/Medi-Cal due to awareness gaps or fear |
| Civic participation | Naturalized citizens, lawful permanent residents | Voter registration, school board participation, community meetings in English only |

**Scale**: The U.S. foreign-born population exceeds 47M (MPI, 2024). In Los Angeles County alone, ~3.4M residents are foreign-born. Approximately 25M U.S. residents have limited English proficiency. Administrative burden is a primary driver of benefit underutilization among eligible immigrant populations.

## Community Need Mapping

| Dimension | Grand Rapids (Pilot A) | Los Angeles (Pilot B) |
|-----------|----------------------|----------------------|
| Primary populations | Refugee communities (Congo/Burundi, Myanmar, Middle East), Spanish-speaking immigrants | Spanish-speaking families (40%+), Korean, Armenian, Tagalog, Mandarin communities |
| Language needs | Swahili, Karen, Arabic, Spanish, English | Spanish, Korean, Armenian, Tagalog, Mandarin, Vietnamese, 100+ |
| Key systems | USCIS, Michigan DHHS, school enrollment, healthcare | USCIS, CalFresh, Medi-Cal, LAUSD enrollment, DMV, county services |
| Access pattern | Church-based support, refugee resettlement agencies | Multi-site, LAUSD family centers, community-based organizations |
| Key barrier | Small community size, limited interpreter availability | Scale, language diversity, institutional complexity |
| Existing support | Refugee resettlement orgs, church volunteers | Legal aid organizations, LAUSD family resource centers, UCLA community clinics |

## Context Graph Structure

| Triad | Entities | Examples |
|-------|----------|---------|
| **WHO** | Family members, steward, builder, immigration attorney (referral), translator, case worker | The Garcia family (beneficiaries), Ms. Nguyen (bilingual steward), Carlos (builder) |
| **WHAT** | Form types (I-130, I-485, N-400, etc.), deadlines, supporting documents, translation resources, benefits programs, eligibility rules | I-765 work permit renewal due date; required supporting documents checklist |
| **HOW** | Document checklist workflow, deadline tracking process, translation coordination, benefits screening, escalation to legal aid | Step 1: Identify forms needed → Step 2: Assemble supporting documents → Step 3: Arrange translation/notarization → Step 4: Submit before deadline → Escalate to legal aid if complexity exceeds administrative scope |

## Agent Capabilities

An agentic system for immigration services would:

1. **Organize documents by type and deadline** — maintain a structured inventory of a family's immigration documents, flagging what is current, what is expiring, and what is missing
2. **Track deadlines across concurrent processes** — many families manage multiple applications simultaneously (work permit, green card, citizenship, benefits); the agent tracks all deadlines in one place
3. **Generate document checklists** — for a given form or process, produce a clear list of required supporting documents, what the family has, and what they still need
4. **Locate translation and notarization services** — connect families with community-available language services, including volunteer translators within the congregation or school network
5. **Screen for benefits eligibility** — walk through eligibility criteria for available programs (CalFresh, WIC, CHIP, Medi-Cal, free/reduced lunch) based on family composition and status
6. **Output in the family's preferred language** — all checklists, reminders, and explanations produced in the language the family reads

**Hard constraint**: The agent does not provide legal advice. It organizes administrative information and supports procedural navigation. Any question involving legal strategy, case evaluation, or rights assertion is escalated to a licensed immigration attorney or accredited representative. This is non-negotiable.

### Escalation Criteria

| Trigger | Action | Escalate To |
|---------|--------|-------------|
| Family asks "should I apply for X?" or "what are my chances?" | Reframe as eligibility checklist; do not advise on strategy | Steward → immigration attorney or accredited representative |
| Family asks agent to prepare, certify, or notarize documents | Stop; do not perform legal document preparation | Steward → legal aid organization |
| Deadline is <14 days and required documents incomplete | Alert family, steward, and assigned builder | Steward for in-person document assembly session |
| Family's immigration status is unclear or contested | Do not screen benefits or make assumptions about eligibility | Steward → immigration attorney |
| Family needs health coverage enrollment after eligibility screening | Hand off enrollment support to healthcare navigation agent | Healthcare navigation domain (see `context_cc_healthcare_navigation.md`) |
| Family needs school enrollment support | Hand off to education access agent | Education access domain (see `context_cc_education_access.md`) |

## Success Indicators

| Indicator | Measurement | Target |
|-----------|-------------|--------|
| Deadline compliance | Deadlines tracked that are met on time | ≥95% |
| Document completeness | Applications submitted with all required documents on first attempt | ≥85% |
| Benefits uptake | Eligible families who successfully enroll in available programs | Increase over baseline (measure in pilot) |
| Language accessibility | Interactions conducted in family's preferred language | 100% |
| Escalation appropriateness | Legal referrals that result in successful attorney engagement | ≥80% |
| Family confidence | Self-reported understanding of their own case status | ≥4/5 |

## Anti-Patterns

- **Providing legal advice** — the agent organizes paperwork and tracks deadlines. It does not interpret immigration law, predict case outcomes, or recommend legal strategies. This boundary is absolute.
- **Assuming a single language pair** — immigration services in LA require support for dozens of languages, not just English-Spanish. The system must be designed for multilingual contexts from the start, not retrofitted.
- **Treating immigration as a single process** — families navigate overlapping systems (USCIS, state benefits, school enrollment, healthcare, DMV) simultaneously. Siloed support for one system without awareness of the others increases cognitive burden.
- **Ignoring fear and trust dynamics** — immigrant communities have well-founded reasons to distrust institutional systems. An agent that asks for sensitive information without community governance and steward endorsement will not be used. Trust is a prerequisite, not an outcome.
- **Data extraction risk** — immigration documents contain extremely sensitive personal information. Community data sovereignty (Standing Order #7, exit dignity principle) is especially critical here. No data leaves the community's control.

## Sources

- **USCIS (2025). Forms and Filing Guides.** — authoritative source for form requirements, processing times, and documentation standards
- **Migration Policy Institute (2024). "Language Diversity and English Proficiency in the United States."** — LEP population data, language distribution, institutional language access gaps
- **National Immigration Law Center (2024). Guide to Immigrant Eligibility for Federal Programs.** — benefits eligibility rules by immigration status; essential reference for benefits screening capability
- **aDNA Context Graph Standard v2.2** — WHO/WHAT/HOW triad structure; data sovereignty provisions

## Related

- [[what/context/use_case_domains/context_cc_healthcare_navigation]] — immigrant families face compounded healthcare navigation barriers
- [[what/context/use_case_domains/context_cc_education_access]] — school enrollment is a critical immigration-adjacent need
- [[what/context/use_case_domains/context_cc_community_governance]] — resource matching connects immigrant families with community support
- [[what/context/program_design/context_cc_thesis]] — immigration paperwork navigation as illustrative use case
- [[what/context/adna_for_communities/context_lattice_for_communities]] — immigration example (LAUSD family)
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B: extraordinary linguistic diversity
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A: growing refugee and immigrant communities
