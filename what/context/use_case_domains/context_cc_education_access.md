---
type: context
topic: use_case_domains
subtopic: education_access
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [context, use_case_domains, education, school, IEP, enrollment, needs-community-review]
token_estimate: ~2200
sources: ["IDEA Act (20 U.S.C. §1400 et seq.)", "LAUSD enrollment data and family resources", "Ishimaru 2019 family engagement research", "aDNA Context Graph Standard v2.2"]
context_version: "1.0"
gaps: [Michigan-specific school choice details, charter school enrollment processes]
quality_score: 4.4
signal_density: 4
actionability: 5
coverage_uniformity: 4
source_diversity: 4
cross_topic_coherence: 5
freshness_category: mixed
last_evaluated: 2026-04-13
---

# Use Case Domain: Education Access

> **DRAFT** — This domain description is based on pilot community needs assessments. It has not been reviewed by community representatives. Per Standing Order #7, community review is required before this content drives curriculum or pilot design. `#needs-community-review`

## Domain Overview

Education access encompasses the administrative and informational barriers families face when navigating school systems — enrollment, school choice, special education (IEP/504 processes), parent communication, scholarship and financial aid applications, and understanding rights and options within complex educational bureaucracies. For immigrant and low-income families, these barriers compound: language, unfamiliarity with the system, and institutional power asymmetries make it difficult to advocate effectively for children's education.

This domain is most acute in the Los Angeles pilot (LAUSD serves ~420K students across 1,000+ schools), but Grand Rapids families also navigate school choice, charter options, and special education processes. The Context Commons treats education access as a domain where community-governed agentic systems can meaningfully reduce the information asymmetry between families and institutions.

## Problem Landscape

| Problem | Who Faces It | Current State Without Agents |
|---------|-------------|------|
| School enrollment | Families entering the district or choosing schools | Online portals (complex), school office visits, word-of-mouth |
| School choice navigation | Families with options (magnet, charter, open enrollment) | District websites, school fairs, inconsistent information across schools |
| IEP/504 processes | Families of children with disabilities | Thick legal framework (IDEA), jargon-heavy meetings, unequal power dynamics |
| Parent-school communication | All families, especially non-English-speaking | Notes sent home in English, parent portal logins, automated phone calls |
| Scholarship/financial aid | High school students and families | Guidance counselor (overloaded), FAFSA, scattered application deadlines |
| Rights and advocacy | Families unfamiliar with educational rights | Legal aid (limited availability), parent advocacy organizations |

**Scale**: LAUSD alone serves ~420K students with 100+ home languages. Nationally, ~7.5M students receive special education services under IDEA. Parent engagement research consistently shows that institutional barriers — not parent interest — are the primary obstacle to family involvement (Ishimaru, 2019).

## Community Need Mapping

| Dimension | Grand Rapids (Pilot A) | Los Angeles (Pilot B) |
|-----------|----------------------|----------------------|
| Primary beneficiaries | Refugee families enrolling children, families navigating special education | LAUSD families across enrollment, IEP, school choice |
| Language needs | English, Swahili, Karen, Arabic, Spanish | English, Spanish (40%+), Korean, Armenian, 100+ |
| School systems | Grand Rapids Public Schools, charter options, GVSU partnerships | LAUSD (1,000+ schools), charter networks, magnet programs |
| Key challenges | Refugee enrollment (transfer credits, age-grade placement), language barriers | Scale (420K students), institutional complexity, school choice overload |
| IEP/504 prevalence | Present but smaller scale | High volume — LAUSD is one of the largest special ed providers in the U.S. |
| Existing support | Refugee resettlement orgs, school social workers | LAUSD family resource centers, legal aid, parent advocacy orgs |

## Context Graph Structure

| Triad | Entities | Examples |
|-------|----------|---------|
| **WHO** | Parent/guardian, student, school counselor, special education coordinator, steward, builder, advocate | Mrs. Ramirez (parent), Alejandro (student), Ms. Park (school counselor), Diego (builder) |
| **WHAT** | Enrollment requirements, school options, IEP documents, 504 plans, student rights, scholarship databases, application deadlines, district policies | LAUSD magnet application deadline; IEP meeting agenda template; FAFSA deadline March 2 |
| **HOW** | Enrollment workflow, IEP meeting preparation process, school comparison method, application assembly, appeal process, rights explanation flow | Step 1: Gather enrollment documents → Step 2: Identify eligible schools → Step 3: Submit applications by deadline → Step 4: Confirm placement |

## Agent Capabilities

An agentic system for education access would:

1. **Compare school options** — present available schools with relevant factors (programs, proximity, performance, language support, special education services) in the family's language, organized by what matters to the family
2. **Generate enrollment document checklists** — for a given school or district, list required documents (proof of residency, immunization records, prior school records, birth certificate), track what the family has, flag what is missing
3. **Prepare families for IEP meetings** — explain the IEP process, parent rights under IDEA, what to expect at each meeting, questions to consider, and how to request changes or dispute decisions
4. **Track application deadlines** — maintain a calendar of enrollment windows, magnet applications, scholarship deadlines, and FAFSA submission dates; alert families and stewards before deadlines
5. **Translate school communications** — render school notices, report cards, and automated messages in the family's preferred language with plain-language explanations of what action is needed
6. **Explain educational rights** — present parents' legal rights (IDEA, FERPA, Title I, Title III, McKinney-Vento) in accessible language so families can advocate from an informed position

**Hard constraint**: The agent does not make educational recommendations (which school is "best," whether to accept an IEP). It provides information, organizes options, and supports the family's decision-making. Educational advocacy requiring legal representation is escalated to qualified advocates.

### Escalation Criteria

| Trigger | Action | Escalate To |
|---------|--------|-------------|
| Family asks "which school is best for my child?" | Present options with factual comparisons; do not rank | Steward for values-based discussion |
| Family disagrees with IEP or 504 decision | Explain rights and procedural safeguards under IDEA; do not advise on whether to dispute | Steward → parent advocacy organization or education attorney |
| Application deadline is <7 days and documents incomplete | Alert family and steward | Steward for in-person document session |
| Family has limited English and school communicates only in English | Flag language access violation (Title III rights) | Steward → school administration or district family resource center |
| Refugee family needs age-grade placement or transfer credit evaluation | Flag specialized enrollment process | Steward → school counselor or refugee resettlement org |
| Family needs immigration paperwork organized for school enrollment | Hand off to immigration services agent | Immigration services domain (see `context_cc_immigration_services.md`) |

## Success Indicators

| Indicator | Measurement | Target |
|-----------|-------------|--------|
| Enrollment completion | Families who complete enrollment on first attempt | ≥85% |
| IEP meeting preparation | Families who report feeling prepared for IEP meetings | ≥80% |
| Deadline compliance | Application and enrollment deadlines met | ≥95% |
| Information accessibility | Interactions conducted in family's preferred language | 100% |
| School option awareness | Families aware of ≥3 school options available to them | ≥90% |
| Family confidence | Self-reported understanding of their child's educational options and rights | ≥4/5 |

## Anti-Patterns

- **Ranking schools** — the agent presents options with factual information; it does not rank schools or recommend "the best" school. Families define "best" based on their own values and circumstances.
- **Replacing parent advocacy** — the agent empowers families to advocate for their children. It does not speak for parents, negotiate with schools on their behalf, or act as a legal representative.
- **Assuming parent disengagement** — parents who appear uninvolved are usually facing barriers (language, work schedules, institutional intimidation), not indifference. The agent addresses barriers, not motivation.
- **One-language-pair design** — education access in LA spans dozens of languages. Designing for English-Spanish only excludes Korean, Armenian, Tagalog, and Mandarin-speaking families who face identical barriers.
- **Ignoring power dynamics** — IEP meetings are legally structured but practically asymmetric. A family walks into a room of professionals. The agent should help level that asymmetry, not perpetuate it.

## Sources

- **IDEA Act (20 U.S.C. §1400 et seq.)** — federal special education law; IEP requirements, parent rights, procedural safeguards; foundational for IEP-related agent capabilities
- **Ishimaru, A.M. (2019). "From Family Engagement to Equitable Collaboration." *Educational Policy*, 33(2).** — reframes family engagement from deficit model to partnership; shaped anti-pattern on parent disengagement
- **LAUSD (2025). Family Resource Centers and Enrollment Information.** — district-specific enrollment requirements, language support services, school choice options
- **aDNA Context Graph Standard v2.2** — WHO/WHAT/HOW triad structure; entity modeling for educational context graphs

## Related

- [[what/context/use_case_domains/context_cc_immigration_services]] — school enrollment is a critical immigration-adjacent need; overlapping beneficiary populations
- [[what/context/use_case_domains/context_cc_community_governance]] — education access connects to community resource matching (tutoring, mentoring)
- [[what/context/program_design/context_cc_program_architecture]] — capstone domain: educational access
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B: LAUSD scale and diversity
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A: refugee family enrollment challenges
