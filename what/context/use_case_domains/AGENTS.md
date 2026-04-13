# AGENTS.md — Use Case Domains Context Topic

## Purpose

Domain-level context files describing the problem landscapes, community need mappings, context graph structures, and agent capabilities for the five primary use case domains identified across Context Commons pilot communities. These are *domain* descriptions — they define the problem space and design principles for each domain. Concrete use case specifications for specific communities live in `what/use_cases/`.

## Contents

| File | Description | Status |
|------|-------------|--------|
| `context_cc_healthcare_navigation.md` | Medicare/Medicaid enrollment, appointment scheduling, benefits paperwork, medication management | Draft |
| `context_cc_immigration_services.md` | Form tracking, deadline management, document organization, language access, civic participation | Draft |
| `context_cc_education_access.md` | School enrollment, IEP navigation, scholarship search, parent communication | Draft |
| `context_cc_elder_care.md` | Care coordination — transportation, meals, social connection, caregiver support, volunteer matching | Draft |
| `context_cc_community_governance.md` | Resource matching, volunteer coordination, cross-organizational communication, collective decision-making | Draft |

## Domain Boundaries

| Domain | Addresses | Does NOT Address |
|--------|-----------|-----------------|
| Healthcare Navigation | Systems: insurance, enrollment, benefits paperwork | The person: daily care, social connection |
| Elder Care | The person: transportation, meals, check-ins, caregiver support | Systems: insurance enrollment, benefits applications |
| Immigration Services | Administrative navigation: forms, deadlines, documents | Legal strategy: case evaluation, rights litigation |
| Education Access | Family navigation: enrollment, IEP, school choice | School operations: curriculum, staffing, policy |
| Community Governance | Coordination infrastructure: matching, scheduling, communication | Domain-specific needs (handled by the other 4 domains) |

## Loading Strategy

- **Full topic**: ~10.5K tokens — load all 5 files for comprehensive use case domain work
- **Single domain**: ~2K tokens each — load only the relevant domain file for focused work
- **Cross-domain**: Load healthcare + elder care together (~4.2K) when boundaries need clarification; load governance + any domain (~4.2K) when coordination infrastructure is relevant

## Key Dependencies

- `what/context/program_design/` — thesis and architecture define the capstone domains
- `who/communities/` — community profiles provide the needs that these domains address
- `what/use_cases/` — concrete use case specs that operationalize these domain descriptions
- `what/context/adna_for_communities/` — translational layer ensures domain files are legible to non-technical readers
- `what/context/pilot_programs/` — pilot design principles and logistics constrain domain implementations

## Standing Orders

- **#7**: All files marked DRAFT with `#needs-community-review` — community voices are constitutional
- **#9**: Pilots are sovereign — domain files map needs per pilot, not one-size-fits-all
- **#11**: Steward/elder veto power on community use cases is structural
- **#12**: Hardware and logistics are first-class design constraints for all domain implementations
