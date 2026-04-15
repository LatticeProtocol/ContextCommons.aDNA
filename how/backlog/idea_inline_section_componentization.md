---
type: backlog_idea
created: 2026-04-14
updated: 2026-04-14
status: active
last_edited_by: agent_gutenberg
priority: medium
effort: multi-session
source: M08-R R1 gap analysis
tags: [backlog, siteforge, components, architecture]
---

# Inline Section Componentization

## Problem

~40% of site visual surface lives in inline sections that are not shared components. These sections received zero visual improvement in R1 because they are one-off `<div>` structures inside page files. As more batches add shadows, hover states, and depth, the gap between componentized and inline sections will become increasingly visible.

## Inline Patterns Identified

| Pattern | Pages | Reuse Count | Component Candidate? |
|---------|-------|-------------|---------------------|
| Pilot card (bordered box with label + title + description) | index, pilots | 4 instances | Yes → `PilotCard.astro` |
| Use-case vignette (title + location + description) | index | 3 instances | Maybe (only 1 page) |
| Partnership type box (bordered, title + subtitle + list) | partners | 4 instances | Yes → `PartnershipCard.astro` |
| Non-negotiable value box (left border accent + title + desc) | partners | 3 instances | ~~Yes → `ValueCard.astro`~~ **Done (R2)** |
| Contact path box (bordered, title + email + description) | contact | 4 instances | Yes → `ContactCard.astro` |
| Knowledge economy diagram (4 boxes + arrows) | curriculum | 1 instance | ~~No (unique, SVG in R3)~~ **Done (R3)** |
| Pilot "at a glance" sidebar (dt/dd definition list) | pilots | 2 instances | Yes → `GlanceCard.astro` |
| Engagement lifecycle (numbered circles + arrows) | partners | 1 instance | ~~No (unique, SVG in R3)~~ **Done (R3)** |

## Proposal

Extract components **during the batch that touches the pattern**, not as a separate extraction pass. This follows R1 Change: "if 2+ pages share a pattern, extract to a component during that batch."

- ~~R2 (Voice): Extract `ValueCard` when touching partners non-negotiables~~ **Done** — `ValueCard.astro` + `PartnershipTypeCard.astro`
- ~~R3 (Diagrams): Knowledge economy and lifecycle become SVG illustrations~~ **Done** — 5 diagram components
- R5 (Cognitive Load): `GlanceCard` when restructuring pilot sidebars
- R6 (Mission Clarity): Use-case vignettes get improved inline (only 1 page)
- R7 (Community Warmth): Extract `PilotCard` when enriching pilot narratives
- R8 (CTAs): Extract `ContactCard` when differentiating contact paths
