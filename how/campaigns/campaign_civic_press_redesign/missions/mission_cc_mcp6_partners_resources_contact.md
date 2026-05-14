---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 2
mission_id: MCP-6
session_estimate: 1
iii_persona: P-06 Program Officer / Funder
tags: [mission, civic_press, partners, resources, contact, p2]
---

# Mission MCP-6: Partners + Resources + Contact Rebuild

## Goal

Three pages, one mission. Partners becomes a terms-of-engagement document. Resources becomes a library catalogue. Contact becomes a front desk. The unifying voice is **quiet institutional authority** — these pages are where the program is judged by funders, academic co-PIs, journalists, and serious partners.

## Dependencies

- P1 phase gate passed
- MCP-5 complete (cross-page fact consistency baseline)
- MCP-2 ingested for: 5 lifecycle plates, section plate for resources (book on reading stand) + contact (typewriter/mailbox), 3 seals (key/vault/door — reused from home + about)

## Decisions to Lock

| ID | Decision | Approach |
|----|----------|----------|
| D-PHYSICAL-ADDRESS | Contact page — include or omit at launch? | Default omit per directive §7.3 ("If a physical address is not appropriate for launch, omit"). Surface to Stanley if a real address is available. |

## Partners — terms of engagement (per directive §5)

| Section | Treatment |
|---------|-----------|
| Page opener | `[TERMS OF ENGAGEMENT]` + title *"Partnership on terms."* + standfirst per directive §5.1. |
| Three non-negotiables — PROMOTED to lead | Three seals (reused from home + about) — Key/Vault/Door — with full editorial paragraphs per seal. Close with display italic centered: *"These are written into every partnership before a single line of code is shipped."* |
| Partnership types — four-quadrant grid | Technology / Academic / Community / Fiscal. Mono headers, hairline rules dividing four cells, no card chrome. Reads as a contract page. |
| Engagement lifecycle procession | Horizontal procession of five circular plates (~80px) with the lifecycle pixel art from MCP-2 (Discovery / Scoping / Onboarding / Active / Renewal). Hairline civic-blue arrows between. Mono small-caps labels under each + mono datelines above (`~2 WEEKS`, `~4 WEEKS`, `~8 WEEKS`, `16 WEEKS`, `QUARTERLY`). End with display italic: *"Exit is dignified, not failure."* |
| Common questions | Q&A column treatment (same as About Leaf V). All visible, no accordion. |
| Prospectus link | Mono small-caps link `DOWNLOAD THE PARTNERSHIP PROSPECTUS (PDF) →` (or `IN PREPARATION — REQUEST A COPY →` if the PDF doesn't exist yet — both are honest; absence of any signal is the problem). |
| Closing | *"Interested in partnering? Tell us what you would like to contribute."* → Contact |

## Resources — library catalogue (per directive §6)

| Section | Treatment |
|---------|-----------|
| Page opener | `[THE READING ROOM]` + title *"Everything you need, organized by role."* + standfirst. |
| Library catalogue cards | Each resource entry becomes a `LibraryCatalogueCard.astro` (from MCP-1) with: press-red call-number label `[A]`/`[B]` + serif title + editorial paragraph + three mono key-value rows (CATEGORY / AUDIENCE / FORMAT) + hairline rule top/bottom. |
| Sectioning | Four sections (Builders / Stewards / Partners / Everyone) — each gets a section-opener plate (workbench / pulpit / roundtable / open book). |
| Glossary — promoted | End-of-pamphlet glossary. Two-column at desktop, single column at mobile. Term in display serif small caps, press-red, hairline rule below. Definition in editorial body. Cross-references inline using mono small caps (`see: CONTEXT GRAPH`). |
| Add what's missing | New cards (with `IN PREPARATION` markers if not ready): Curriculum Syllabus PDF, Steward Handbook PDF, Builder Onboarding Guide PDF, Pilot reports (quarterly dispatches once pilots begin), Press kit. |

## Contact — front desk (per directive §7)

| Section | Treatment |
|---------|-----------|
| Page opener | `[THE FRONT DESK]` + title *"We respond to every message within one week."* + standfirst per directive §7.1. |
| Four-quadrant inquiry | Reuse plates from Get Involved (community / mentor / partner / general inquiry). Each quadrant: salutation (display serif italic) + paragraph + **visible email template preview** (mono small-caps `TEMPLATE` header above a hairline-bordered preview block) + press-red `Send →` button (mailto). |
| Direct path | One line below the four quadrants: *"Prefer to write to a real address? **Lattice Protocol · 1234 Venice Blvd · Los Angeles, CA 90291**"* — or omit per D-PHYSICAL-ADDRESS. |
| Response-time commitment block | Display-typeset centered with hairline rules above and below: *"We read every message ourselves. We reply within one week. If we cannot help, we say so plainly and point you to someone who can."* |

## Focus Areas

1. **Partners page** — rewrite `site/src/pages/partners.astro`. Promote the three non-negotiables to lead. Build the four-quadrant grid (no card chrome — looks like a contract). New lifecycle-procession component.
2. **Resources page** — rewrite `site/src/pages/resources.astro`. Apply LibraryCatalogueCard from MCP-1 to every entry. Promote the glossary. Add the missing-resource cards with `IN PREPARATION` markers.
3. **Contact page** — rewrite `site/src/pages/contact.astro`. Four-quadrant + visible email templates + response-time block.
4. **Lifecycle procession component** — new diagram `site/src/components/diagrams/PartnersLifecycleProcession.astro`. Five plates + civic-blue arrows. Animated on viewport entry.
5. **Program officer persona pass** — III before close. Inspect: outcome language vs. activity language on Partners; specific equity claims; prospectus signal present (even if "in preparation"); council names visible.

## Success Criteria

- 3 pages rewritten: partners.astro, resources.astro, contact.astro.
- 1 new diagram component (`PartnersLifecycleProcession`).
- LibraryCatalogueCard applied to all Resources entries.
- D-PHYSICAL-ADDRESS locked (default omit; or include if real address provided).
- `npm run build` green; tests pass; Lighthouse maintained.
- One-paragraph test ✓ on all 3 pages — Program Officer finds outcome language + non-negotiables + prospectus signal.
- III ACCUMULATE wrote ≥1 trap.
- Mission AAR appended.

## Not in scope

- Final cross-page audit + ship — MCP-7.
- Authoring the actual partnership prospectus PDF (separate workstream; site link can mark IN PREPARATION).

## AAR

(pending mission close)
