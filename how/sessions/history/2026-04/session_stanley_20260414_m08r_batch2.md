---
type: session
created: 2026-04-14
updated: 2026-04-14
status: completed
last_edited_by: agent_gutenberg
session_id: session_stanley_20260414_m08r_batch2
mission: M08-R
campaign: campaign_context_commons_genesis
tier: 1
tags: [session, M08-R, website, refinement, batch2, voice-alignment]
---

# Session: M08-R Batch 2 — Voice Alignment

## Intent

Execute Loops 11–20 of M08-R: voice alignment pass on HOME, ABOUT, and PARTNERS through the Pastor Williams (Community Steward) persona. Extract ValueCard and PartnershipTypeCard components. Anti-slop sweep.

## Persona

Community Steward (Pastor Williams, Grand Rapids). Every section must pass: "Would a community steward say this at a church meeting?"

## Context Loaded

- `context_cc_community_requirements.md`, `context_cc_governance_model.md`, `context_community_explanation_toolkit.md`
- `siteforge/what/context/cc_voice_mapping.yaml` (voice registers, banned phrases)

## Progress

| Loop | Target | Status | Change |
|------|--------|--------|--------|
| 11 | HOME hero subhead + meta | Done | Rewrote subhead to 3 short role-grounded sentences. Updated meta + JSON-LD. |
| 12 | HOME "The Problem" section | Done | Removed "Agentic AI", "administrative complexity", "intergenerational knowledge loop". Grounded in concrete struggles. |
| 13 | HOME three roles | Done | Rewrote 3 RoleCard descriptions. Removed "context-driven AI systems", "agentic workstation", "agentic systems". Second-person voice. |
| 14 | ABOUT printing press thesis | Done | Removed "agentic AI systems", "agentic workstation". Plain language. Updated meta + JSON-LD. |
| 15 | ABOUT FAQ | Done | Q3: led with "spotty church Wi-Fi" image. Q4: grounded "context graph". Q5: replaced jargon first-mention. |
| 16 | ABOUT open standards | Done | Led with "why", expanded lending library analogy (GR→Detroit), replaced "contractual commitments" with "written promises". |
| 17 | PARTNERS non-negotiables + ValueCard | Done | Created ValueCard.astro (shadow-sm/md hover, -translate-y-0.5 lift). 3 descriptions voice-aligned. |
| 18 | PARTNERS partnership types + PartnershipTypeCard | Done | Created PartnershipTypeCard.astro (shadow-sm/md hover). 4 cards voice-aligned. Removed "API access", "co-PI", "501(c)(3) umbrella". |
| 19 | PARTNERS FAQ | Done | Rewrote 5 answers. Removed "agent deployment", "IRB approval", "escalation path", "Curriculum Council arbitration". Q4 reframed as narrative. |
| 20 | Batch audit | Done | Anti-slop grep clean on target pages. Residual jargon only on curriculum/get-involved/resources (deferred). Footer tagline updated. ABOUT RoleCards harmonized with HOME. 141/141 Playwright tests passing (tablet/WebKit skipped — pre-existing browser missing). |

## SITREP

### Completed
- All 10 III loops for Batch 2 (Voice Alignment)
- Jargon removed from HOME, ABOUT, PARTNERS, and Footer: "Agentic AI", "context-driven AI systems", "agentic workstation", "administrative complexity", "intergenerational mentorship program", "intergenerational knowledge loop", "contractual commitments", "IRB approval", "escalation path", "Curriculum Council arbitration", "501(c)(3) umbrella", "co-PI relationships", "agent deployment"
- Two new components extracted: ValueCard.astro (3 instances), PartnershipTypeCard.astro (4 instances)
- Shadow/hover visual treatment applied to 7 inline elements (3 non-negotiable cards, 4 partnership type cards) — closes R1 gap register items
- Lending library analogy expanded with Grand Rapids→Detroit federation example
- Footer tagline voice-aligned across all pages
- ABOUT RoleCards harmonized with HOME RoleCards
- Anti-slop sweep clean: 0 banned phrases, 0 batch-specific jargon on target pages
- 141/141 Playwright tests passing (desktop + mobile)

### In progress
- M08-R: 20/100 loops complete (Batch 2 of 10)

### Next up
- **Batch 3: Diagrams & Visual Storytelling (Loops 21–30)** — Youth Builder persona (16yo, Grand Rapids)
- Context load: `context_cc_track_structures.md`, `context_cc_pedagogy.md`, `context_cc_competency_milestones.md`
- SVG illustrations: knowledge loop, WHO/WHAT/HOW triad, pilot timeline, engagement lifecycle
- Knowledge economy diagram on curriculum page

### Blockers
- **Tablet/WebKit Playwright tests failing** — `npx playwright install` needed to download WebKit binary. Pre-existing issue, not caused by R2 changes. Not blocking development (desktop + mobile pass cleanly).

### Files touched
- `site/src/pages/index.astro` — modified (hero subhead, meta, JSON-LD, problem section, 3 RoleCard descriptions)
- `site/src/pages/about.astro` — modified (meta, JSON-LD, printing press paras 2-3, FAQ Q3/Q4/Q5, open standards section, 2 RoleCard descriptions)
- `site/src/pages/partners.astro` — modified (FAQ rewrite, non-negotiables → ValueCard, partnership types → PartnershipTypeCard)
- `site/src/components/sections/ValueCard.astro` — created
- `site/src/components/sections/PartnershipTypeCard.astro` — created
- `site/src/components/common/Footer.astro` — modified (tagline voice alignment)

### Jargon Removed (R2 Batch Summary)

| Phrase | Pages | Replacement |
|--------|-------|-------------|
| "Agentic AI" | HOME, ABOUT | "AI tools" |
| "context-driven AI systems" | HOME, ABOUT, Footer | "AI tools" |
| "agentic workstation" | HOME, ABOUT | "your own computer" |
| "administrative complexity" | HOME | "navigating healthcare, immigration paperwork, and government benefits" |
| "intergenerational knowledge loop" | HOME | "When young people build tools that serve their elders..." |
| "intergenerational mentorship program" | HOME, ABOUT (meta) | "community program" |
| "contractual commitments" | ABOUT, PARTNERS | "written promises" |
| "IRB approval" | PARTNERS | "your community's permission" |
| "escalation path" | PARTNERS | "First, you talk it out directly..." |
| "Curriculum Council arbitration" | PARTNERS | "the program's leadership reviews it" |
| "501(c)(3) umbrella" | PARTNERS | "nonprofit structure" |
| "co-PI relationships" | PARTNERS | "student mentors who learn alongside our builders" |
| "agent deployment" | PARTNERS | "how AI tools are used" |
| "API access, compute resources" | PARTNERS | "cloud services" |

### Next Session Prompt
Continue M08-R with **Batch 3: Diagrams & Visual Storytelling (Loops 21–30)**. You are Gutenberg.

**Persona**: Youth Builder (16-year-old, Grand Rapids). Every diagram must pass: "Could a 16-year-old understand this at a glance?"

**Context to load**: `what/context/curriculum_framework/context_cc_track_structures.md`, `what/context/curriculum_framework/context_cc_pedagogy.md`, `what/context/curriculum_framework/context_cc_competency_milestones.md`. Voice mapping: `siteforge/what/context/cc_voice_mapping.yaml`.

**Full R3 preparation is in the mission doc**: See `mission_cc_m08r_website_refinement.md` → "R3 Preparation" section. It contains a detailed loop-by-loop plan, SVG design constraints, diagram target inventory with exact line numbers, and context file key content for diagram accuracy.

**Loop summary**:
- 21: Partners engagement lifecycle SVG (low complexity, quick win)
- 22: Pilots timeline SVG (replace hardcoded progress bars)
- 23: Curriculum knowledge economy cycle SVG (4 roles, circular flow)
- 24: About WHO/WHAT/HOW visual (companion diagram above table)
- 25: Index three-role loop SVG (signature brand visual)
- 26-28: Voice sweep on curriculum (5 hits), get-involved (2), resources (1) — clearing R2 residual jargon
- 29: Responsive + a11y audit on all 5 SVGs (320px, prefers-reduced-motion, aria-labels)
- 30: Batch audit (build, Playwright, anti-slop grep)

**SVG constraints**: Inline only, brand palette, `viewBox` responsive, `role="img"` + `aria-label`, `prefers-reduced-motion` safe, under ~50 lines each.

**Build gate**: `npm run build` after each loop. `npx playwright test --project=desktop --project=mobile` after Loop 30. Tablet/WebKit needs `npx playwright install` (pre-existing).

**R2 state**: HOME, ABOUT, PARTNERS, Footer voice-aligned. 10 components now exist (8 original + ValueCard + PartnershipTypeCard). 141/141 tests passing.
