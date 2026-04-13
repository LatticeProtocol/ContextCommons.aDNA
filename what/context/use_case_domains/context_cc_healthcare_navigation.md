---
type: context
topic: use_case_domains
subtopic: healthcare_navigation
created: 2026-04-13
updated: 2026-04-13
status: draft
last_edited_by: agent_gutenberg
tags: [context, use_case_domains, healthcare, medicare, medicaid, benefits, needs-community-review]
token_estimate: ~2400
sources: ["CMS.gov Medicare enrollment data", "Kutner et al. 2006 Health Literacy in America", "AHRQ Health Literacy Universal Precautions Toolkit", "aDNA Context Graph Standard v2.2"]
context_version: "1.0"
gaps: [specific formulary comparison logic, state-by-state Medicaid variation details]
quality_score: 4.4
signal_density: 4
actionability: 5
coverage_uniformity: 4
source_diversity: 4
cross_topic_coherence: 5
freshness_category: mixed
last_evaluated: 2026-04-13
---

# Use Case Domain: Healthcare Navigation

> **DRAFT** — This domain description is based on pilot community needs assessments. It has not been reviewed by community representatives. Per Standing Order #7, community review is required before this content drives curriculum or pilot design. `#needs-community-review`

## Domain Overview

Healthcare navigation encompasses the administrative burden of interacting with healthcare systems — enrolling in coverage, comparing plans, scheduling appointments, managing medications, filing claims, and tracking benefits. In the United States, these tasks are structurally complex: multiple overlapping systems (Medicare, Medicaid, employer insurance, marketplace plans), strict deadlines, dense paperwork, and language barriers create a landscape where the people who most need care are least equipped to navigate the systems that provide it.

This domain is distinct from **elder care coordination** (see `context_cc_elder_care.md`), which addresses the holistic care ecosystem around a person — transportation, meals, social connection, caregiver support. Healthcare navigation is about *systems*; elder care is about *people*. An agent that helps with Medicare Part D enrollment is a healthcare navigation agent. An agent that coordinates Mrs. Chen's weekly schedule of rides, meals, and check-in calls is an elder care agent. They overlap at the boundary (e.g., scheduling a doctor's appointment is navigation; getting a ride to the appointment is care coordination) and should interoperate.

## Problem Landscape

| Problem | Who Faces It | Current State Without Agents |
|---------|-------------|------|
| Medicare enrollment complexity | Elders (65+), disabled adults | Paper forms, phone hold queues, informal family help, SHIP counselor waitlists |
| Plan comparison | Anyone choosing coverage | medicare.gov Plan Finder (complex UI), insurance broker (may not be neutral) |
| Medicaid/CHIP application | Low-income families, immigrants | Multi-page applications, documentation requirements, long processing times |
| Appointment scheduling | Elders, caregivers | Phone-based, often requires navigating automated systems in English |
| Medication management | Elders with multiple prescriptions | Paper lists, pill organizers, pharmacist consultations at pickup |
| Benefits paperwork | All beneficiaries | Annual notices, explanation of benefits (EOBs), appeal processes |

**Scale**: Medicare alone serves ~67M Americans. Approximately 36% of U.S. adults have basic or below-basic health literacy (Kutner et al., 2006). In pilot communities, immigrant and refugee families face compounded barriers: language, unfamiliarity with U.S. systems, and fear of institutional interaction.

## Community Need Mapping

| Dimension | Grand Rapids (Pilot A) | Los Angeles (Pilot B) |
|-----------|----------------------|----------------------|
| Primary beneficiaries | Peter's Church elders (65+) | Venice Beach aging population, immigrant families |
| Language needs | English, Spanish, Swahili, Karen, Arabic | English, Spanish, Korean, Armenian, Tagalog, 100+ |
| Insurance systems | Medicare, Medicaid (Michigan), employer | Medicare, Medi-Cal, Covered California, employer |
| Access pattern | Single-site (church), in-person steward support | Multi-site, mixed in-person and remote |
| Key barrier | Health literacy, digital literacy | Language diversity, system complexity, scale |
| Existing support | Church volunteers, GVSU health programs | UCLA health equity programs, community health workers |

## Context Graph Structure

| Triad | Entities | Examples |
|-------|----------|---------|
| **WHO** | Beneficiary, caregiver, steward, builder, provider, insurance counselor | Mrs. Johnson (beneficiary), Maria (builder), Pastor Williams (steward) |
| **WHAT** | Insurance plans, formularies, enrollment deadlines, eligibility rules, provider directories, EOBs, appeal forms | Medicare Part D plans in Kent County; December 7 enrollment deadline |
| **HOW** | Enrollment workflow, plan comparison process, appointment scheduling flow, medication review checklist, escalation path | Step 1: Review current coverage → Step 2: Compare plans → Step 3: Enroll by deadline → Escalate to SHIP counselor if stuck |

## Agent Capabilities

An agentic system for healthcare navigation would:

1. **Walk through enrollment step by step** — break complex enrollment processes into manageable steps with clear instructions in the beneficiary's preferred language
2. **Compare plans in plain language** — translate plan details (premiums, copays, formulary coverage, provider networks) into terms the beneficiary understands, highlighting differences that matter to their specific situation
3. **Track deadlines and send alerts** — maintain a calendar of enrollment windows, renewal dates, and appeal deadlines; flag approaching deadlines to steward and beneficiary
4. **Assemble required documents** — generate checklists of needed paperwork, track what has been gathered, identify what is missing
5. **Explain received notices** — translate EOBs, coverage determination letters, and denial notices into plain language
6. **Escalate appropriately** — route to human help (SHIP counselor, steward, family member) when the task exceeds agent capability or requires human judgment

**Hard constraint**: The agent does not make healthcare decisions. It organizes information, explains options, and supports the process. Medical advice, coverage recommendations, and legal guidance require human professionals.

### Escalation Criteria

| Trigger | Action | Escalate To |
|---------|--------|-------------|
| Beneficiary asks "which plan should I choose?" | Reframe as comparison; do not recommend | Steward or SHIP counselor |
| Beneficiary reports a medical symptom or concern | Stop; do not interpret | Steward → primary care provider |
| Deadline is <7 days and enrollment incomplete | Alert beneficiary, caregiver, and steward | Steward for in-person session |
| Beneficiary cannot read materials in any available language | Flag language gap | Steward → bilingual community member or interpreter |
| Denial or appeal notice received | Explain the notice; do not advise on appeal strategy | Steward → benefits counselor or legal aid |
| Immigrant family needs health coverage eligibility screening | Hand off benefits screening to immigration services agent | Immigration services domain (see `context_cc_immigration_services.md`) |

## Success Indicators

| Indicator | Measurement | Target |
|-----------|-------------|--------|
| Enrollment completion | Beneficiaries who successfully enroll during open enrollment | ≥80% of assisted beneficiaries |
| Time to enrollment | Average time from first interaction to completed enrollment | ≤3 sessions |
| Comprehension | Beneficiary can explain their coverage choice in their own words | Verified in steward check-in |
| Missed deadlines | Enrollment or renewal deadlines missed | Zero |
| Escalation appropriateness | Escalations that result in successful human resolution | ≥90% |
| Beneficiary satisfaction | Self-reported usefulness (elder/community survey) | ≥4/5 |

## Anti-Patterns

- **Automating medical judgment** — the agent organizes and explains; it does not recommend treatments, diagnose conditions, or advise on coverage adequacy. This is a hard boundary.
- **Assuming English literacy** — all outputs must be available in the beneficiary's preferred language. A monolingual system is not a healthcare navigation system.
- **Replacing human relationships** — the agent supports the steward-beneficiary relationship; it does not replace the steward, the family, or the community. If Mrs. Johnson's granddaughter helps her with Medicare, the agent helps the granddaughter help Mrs. Johnson.
- **One-size-fits-all flows** — Michigan Medicaid ≠ California Medi-Cal. Medicare Advantage plans vary by county. The context graph must be localized to the specific systems the community interacts with.
- **Deficit framing** — beneficiaries are not "unable to navigate healthcare." The systems are unnecessarily complex. The agent addresses system complexity, not personal deficiency.

## Sources

- **CMS.gov (2025). Medicare & You Handbook.** — enrollment periods, plan types, coverage rules; authoritative source for Medicare program structure
- **Kutner, M. et al. (2006). The Health Literacy of America's Adults. NCES 2006-483.** — 36% of U.S. adults have basic/below-basic health literacy; establishes the scale of the navigation burden
- **AHRQ (2020). Health Literacy Universal Precautions Toolkit, 3rd Ed.** — design principles for health information systems serving low-literacy populations; informed agent capability design
- **aDNA Context Graph Standard v2.2** — WHO/WHAT/HOW triad structure for context graphs; technical foundation for entity modeling

## Related

- [[what/context/use_case_domains/context_cc_elder_care]] — care coordination around the person (complementary domain)
- [[what/context/use_case_domains/context_cc_immigration_services]] — immigrant families face compounded healthcare navigation barriers
- [[what/context/program_design/context_cc_program_architecture]] — capstone domain: healthcare navigation
- [[what/context/adna_for_communities/context_adna_simplified]] — Medicare enrollment used as illustrative example
- [[who/communities/community_peters_church_grand_rapids]] — Pilot A: elder healthcare navigation is a primary need
- [[who/communities/community_lausd_venice_beach_la]] — Pilot B: elder health + immigrant family navigation
