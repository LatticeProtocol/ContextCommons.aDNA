---
type: context
created: 2026-04-13
updated: 2026-04-13
status: active
last_edited_by: agent_gutenberg
tags: [context, pilot_programs, logistics, hardware, budget, scheduling, infrastructure]
token_estimate: ~2690
quality_score: 4.3
signal_density: 4
actionability: 5
coverage_uniformity: 5
source_diversity: 4
cross_topic_coherence: 5
freshness_category: volatile
last_evaluated: 2026-04-13
---

# Pilot Logistics

## Logistics Philosophy

Hardware, connectivity, physical space, and scheduling are first-class design constraints — not afterthoughts addressed during implementation (Standing Order #12, Pilot Design Principle 3). A pilot that begins without confirmed logistics transfers the burden to community stewards, who are already contributing governance time, relationship capital, and community trust. Every unresolved logistics gap at launch is a broken promise.

Logistics planning is also an equity test. If the budget assumes participants own laptops and have broadband at home, the pilot is designed for the already-privileged. Context Commons pilots design for the margins first: shared workstations, session-time-only connectivity, offline-capable materials, and earned hardware (MacBook Neo) as completion incentive. If the logistics plan works for a church in Grand Rapids without reliable broadband, it works everywhere.

## Hardware Requirements

### Per-Pilot Hardware Inventory

| Item | Quantity per Pilot | Purpose | Procurement | Ownership |
|------|-------------------|---------|-------------|-----------|
| **MacBook Neo** (youth builder) | 8-16 units | Personal agentic workstation — earned through program completion | Partner hardware grant (Apple, corporate sponsor) or program purchase | Builder — unconditional after earning |
| **Shared workstation** | 2-4 units | Session-time development machines for builders before earning personal units; community access post-pilot | Program purchase or partner grant | Community — remains at site permanently |
| **Display/projector** | 1-2 units | Group instruction, capstone demos, community presentations | Program purchase | Community |
| **Wi-Fi access point** | 1-2 units | Session connectivity backup; supplements venue Wi-Fi | Program purchase | Community |
| **Mobile hotspot** | 1-2 units | Backup connectivity for venues with unreliable broadband | Monthly carrier plan | Program (during pilot); community (post-pilot option) |
| **Peripheral kit** | 1 per pilot | External displays, cables, adapters, power strips, extension cords | Program purchase | Community |
| **Accessibility aids** | As needed | Large-font printed materials, screen magnification profiles, hearing loop (if venue supports) | Program purchase | Community |

### Hardware Configuration

Every MacBook Neo and shared workstation is configured as an **agentic workstation** before distribution:

| Component | Configuration |
|-----------|-------------|
| **Claude Code** | Installed and configured; API access through program grant (Anthropic partnership) |
| **aDNA toolkit** | Templates, lattice schemas, context graph tools — standard install |
| **Personal context graph** | Initialized with builder's profile during workstation setup session |
| **Community context access** | Governed read/write access to shared community context graphs per data sovereignty rules |
| **Offline capability** | Local models and reference materials cached for offline use; sync when connected |
| **Security baseline** | FileVault enabled, automatic updates, no admin credentials for program accounts |

### Hardware Budget Estimate

| Item | Unit Cost (est.) | Pilot A (8-12 builders) | Pilot B (12-16 builders) | Notes |
|------|-----------------|------------------------|-------------------------|-------|
| MacBook Neo | ~$1,600 | $12,800-$19,200 | $19,200-$25,600 | Education pricing; partner grant may cover 50-100% |
| Shared workstations | ~$1,600 | $3,200-$6,400 (2-4 units) | $4,800-$6,400 (3-4 units) | Multi-site in LA requires more units |
| Display/projector | ~$500 | $500-$1,000 | $1,000-$1,500 | Multi-site in LA |
| Networking (AP + hotspot) | ~$300 + $50/mo | $600 + $400 (8 mo) | $900 + $800 (8 mo) | More backup needed in LA (3 sites) |
| Peripheral kits | ~$500 | $500 | $500 | |
| **Hardware subtotal** | | **$18,000-$27,500** | **$27,200-$35,800** | Before partner grants |

**Partner offset estimate**: If Anthropic provides API access, Apple provides MacBook Neos at education pricing or as grants, and Google provides cloud credits, the program's out-of-pocket hardware cost could be 30-50% of these figures. See [[context_cc_fundraising_strategy]] for funding strategy.

## Space Requirements

### Space Matrix by Activity Type

| Activity | Capacity | Layout | Equipment | Frequency | Duration |
|----------|---------|--------|-----------|-----------|----------|
| **Builder Track session** | 8-16 + mentor + steward | Tables with power, each builder at a workstation | Shared workstations, display, Wi-Fi | 2×/week | 3 hours |
| **Steward Track session** | 3-8 + mentor | Seminar-style, discussion-oriented | Display, Wi-Fi, printed materials | Weekly | 2.5 hours |
| **Elder & Community session** | 15-30 + facilitator | Accessible seating, large display visible to all | Projector/large display, demo devices | Weekly | 2.5 hours |
| **Co-design workshop** | Mixed (builders + elders + steward) | Workshop tables, sticky notes, demo stations | Workstations for builders, display for demos | 2× during Elder Track | 3 hours |
| **Capstone demonstration** | Full community attendance possible | Presentation-style with demo stations | All workstations, projector, microphone if large space | End of Builder Track | 2-3 hours |
| **Mentor-steward planning** | 2-4 people | Small meeting space | Laptops, Wi-Fi | Weekly | 1 hour |

### Site-Specific Considerations

| Dimension | Grand Rapids (Pilot A) | Los Angeles (Pilot B) |
|-----------|----------------------|----------------------|
| **Primary venue** | Peter's Church hall/classrooms — single site | LAUSD computer lab + Venice Beach Book Club + UCLA facility — 3-site rotation |
| **Scheduling authority** | Church calendar (steward coordinates with pastor/church board) | Multi-institutional: school year (LAUSD), community schedule (Book Club), academic calendar (UCLA) |
| **ADA accessibility** | Verify church facility accessibility for elder participants | Verify all 3 sites; UCLA likely compliant; Book Club and LAUSD sites need assessment |
| **Storage** | Dedicated closet/cabinet for hardware between sessions | Secure storage needed at each site; portable equipment kit for traveling between sites |
| **After-hours access** | Evening sessions possible (church flexibility) | LAUSD limited to school hours; Book Club flexible; UCLA mixed |
| **Parking/transit** | Free parking at church; limited transit in suburban Grand Rapids | Transit-dependent participants; multiple sites require transit planning; parking varies |

## Connectivity Requirements

| Requirement | Minimum | Recommended | Why |
|-------------|---------|-------------|-----|
| **Downstream bandwidth** | 25 Mbps | 50+ Mbps | Claude Code and API calls for 8-16 simultaneous users; large context window requests |
| **Upstream bandwidth** | 10 Mbps | 25+ Mbps | Context graph syncing, code pushing, collaborative work |
| **Latency** | <100ms | <50ms | Interactive agent development requires responsive API round-trips |
| **Reliability** | >95% during session hours | >99% | Session-time outages waste limited community time |
| **Backup plan** | Mobile hotspot on-site | Dual-path (venue + hotspot) | Standing Order #12: connectivity is a design constraint, not a hope |

**Offline capability**: Curriculum includes offline-capable components for participants without home broadband. Reference materials, template files, and documentation are cached locally on workstations. Agent development requiring API access is designed for session-time use. No critical learning objective requires home internet access.

## Scheduling Framework

### Session Cadence

| Track | Sessions/Week | Duration | Total Weeks | Total Sessions |
|-------|--------------|----------|-------------|----------------|
| Core | 2 | 2.5 hours | 4 | 8 |
| Builder | 2 | 3 hours | 12 | 24 |
| Steward | 1 | 2.5 hours | 8 | 8 |
| Elder & Community | 1 | 2.5 hours | 6 | 6 |

**Overlap**: Core Track (weeks 1-4) runs concurrently with early Steward Track. Builder Track (weeks 5-16) overlaps with Elder & Community Track (weeks 8-13) to enable co-design sessions.

### Calendar Integration

| Factor | Grand Rapids | Los Angeles |
|--------|-------------|-------------|
| **School year** | Sessions avoid exam periods; summer option for youth not in school | LAUSD calendar — avoid testing windows, breaks, early-release days |
| **Religious calendar** | No sessions on church service days; accommodate holy days | Multi-faith awareness; no assumptions about availability on any given day |
| **Work schedules** | Evening sessions (6-9 PM) for working parents/stewards | Multiple time slots across sites to accommodate diverse schedules |
| **Weather/seasonal** | Michigan winters — verify venue heating; snow day contingency | Minimal weather disruption; heat waves may affect un-air-conditioned venues |
| **Buffer weeks** | 2 buffer weeks built into 16-week pilot window | 2 buffer weeks; additional buffer for multi-site coordination |

## Per-Pilot Operating Budget Template

| Category | Pilot A (Grand Rapids) | Pilot B (Los Angeles) | Notes |
|----------|----------------------|----------------------|-------|
| **Hardware** | $18,000-$27,500 | $27,200-$35,800 | See hardware budget above; offset by partner grants |
| **Connectivity** | $400-$800 | $800-$1,200 | Hotspot plans, supplemental networking |
| **Space** | $0-$2,000 | $0-$5,000 | Church may donate; LA venues may require rental |
| **Materials** | $500-$1,000 | $1,000-$1,500 | Printed materials, workshop supplies, demo equipment |
| **Mentor stipends** | $3,000-$6,000 | $5,000-$10,000 | 2-3 mentors × $1,500-$2,000 per pilot cycle; partner-employed mentors may volunteer |
| **Steward honoraria** | $1,500-$3,000 | $3,000-$5,000 | 3-5 stewards (GR) / 5-8 stewards (LA) × $500-$750 |
| **Travel** | $2,000-$4,000 | $1,000-$3,000 | Mentor travel to Grand Rapids; LA mentors likely local |
| **Contingency (10%)** | $2,500-$4,500 | $3,800-$6,200 | |
| **Total per pilot** | **$28,000-$49,000** | **$42,000-$68,000** | Before partner grants/offsets |

**Combined Year 1 pilot budget**: $70,000-$117,000. This aligns with the $75K-$150K Year 1 fundraising target in the fundraising strategy.

## Pre-Launch Checklist

Every item must be confirmed before the first session. An unresolved item pauses the launch — it does not become a problem for the steward to solve.

| # | Item | Verified By | Status Template |
|---|------|------------|----------------|
| 1 | Named steward(s) committed and available | Program leadership + community governance body | [ ] Confirmed / [ ] In progress / [ ] Blocked |
| 2 | Community Engagement Agreement signed | Steward(s) + program leadership | [ ] Signed / [ ] Drafting / [ ] Not started |
| 3 | Physical space confirmed for full pilot duration | Steward + venue coordinator | [ ] Confirmed / [ ] Tentative / [ ] Unresolved |
| 4 | Connectivity tested during actual session times | Technical assessment on-site | [ ] Passed / [ ] Backup needed / [ ] Insufficient |
| 5 | Shared workstations procured and configured | Program staff | [ ] Deployed / [ ] Ordered / [ ] Unfunded |
| 6 | MacBook Neo units secured (purchase or partner commitment) | Program leadership + partner contact | [ ] Secured / [ ] Committed / [ ] Unfunded |
| 7 | Mentor(s) recruited and onboarded | Program leadership + Curriculum Council | [ ] Onboarded / [ ] Recruited / [ ] Searching |
| 8 | Youth cohort recruited (minimum viable size) | Steward + community outreach | [ ] Enrolled / [ ] Recruiting / [ ] Below minimum |
| 9 | Curriculum localized for community | Mentor + steward + Curriculum Council | [ ] Approved / [ ] Adapting / [ ] Not started |
| 10 | Evaluation design session completed | Steward + program staff + academic partner | [ ] Complete / [ ] Scheduled / [ ] Not started |
| 11 | IRB approval (if academic partner involved) | Academic partner IRB office | [ ] Approved / [ ] Submitted / [ ] Not started |
| 12 | Budget confirmed and funds available | Program leadership + fiscal sponsor | [ ] Funded / [ ] Partial / [ ] Unfunded |

## Sources

- **Warschauer, M. & Tate, T. (2018). "Digital Divides and Social Inclusion." *F-Learning*, 5(2).** — digital equity in education programs; hardware provisioning as equity mechanism, not luxury
- **Toyama, K. (2015). *Geek Heresy: Rescuing Social Change from the Cult of Technology*.** — technology programs fail when logistics are treated as secondary; "technology amplifies human intent" — logistics determine whether that amplification reaches the intended beneficiaries
- **aDNA Context Graph Standard v2.2** — local-first architecture; offline-capable design; data sovereignty through local storage
- **Context Commons fundraising strategy** — budget alignment and partner offset projections

## Related

- [[what/context/pilot_programs/context_cc_pilot_design_principles]] — Principle 3 (Hardware and Logistics as Design Constraints) operationalized here
- [[what/context/pilot_programs/context_cc_pilot_evaluation_framework]] — hardware telemetry and system uptime metrics
- [[what/context/program_design/context_cc_program_architecture]] — workstation specification, earning criteria, capstone requirements
- [[what/context/community_engagement/context_cc_community_requirements]] — hard gates (space, connectivity, stewards) that logistics must satisfy
- [[what/context/community_engagement/context_cc_partnership_model]] — partner contributions to hardware and compute costs
- [[what/context/fundraising/context_cc_fundraising_strategy]] — budget targets and funding sources
- [[what/pilots/pilot_a_grand_rapids]] — Grand Rapids-specific logistics
- [[what/pilots/pilot_b_los_angeles]] — Los Angeles-specific logistics
