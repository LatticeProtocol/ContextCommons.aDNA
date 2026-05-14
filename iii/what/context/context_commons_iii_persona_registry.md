---
type: context
topic: iii_local_extension
subtopic: persona_registry
kind: domain_pack
created: 2026-05-14
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
version: "1.0"
source_campaign: campaign_context_commons_genesis
source_mission: mission_cc_m08r_website_refinement
graduation_eligible: false
graduation_note: >
  Personas are CC-specific (Grand Rapids and LA communities, Pastor Williams's
  church-board meeting test, LAUSD-UCLA institutional context). If a future
  trap or persona graduates to domain-general, ADR-003 §3 ceremony promotes
  it to III.aDNA core.
tags: [iii, personas, civic_press, m08r, dispatch_input]
---

# Context Commons III Persona Registry

Eight personas extracted from the M08-R website-refinement campaign (10 batches, 100 III loops, 2026-04-14 → 2026-04-15). Each persona embodies a distinct review filter: a question set + signature concerns that surface a class of issues no other persona catches.

Personas feed the III **Dispatch** stage — a mission opens by selecting one (or two) personas, and the resulting Inspect / Introspect passes are scoped to what that persona would notice. The Civic Press campaign rotates personas per mission (per the plan's Workstream C §C2). M08-R proved that **the journalist persona catches cross-page fact inconsistencies the others miss**, and **the pastor persona catches every jargon hedge** — selection matters.

## Schema

Each persona block carries:
- **Name** — specific person where possible, abstracted role otherwise
- **Role** — what they do
- **Locality** — which pilot community or institutional setting frames their lens
- **Key questions** — the filter they bring to a page or component (the audit prompts)
- **Signature concerns** — issues they reliably surface that other personas miss
- **M08-R origin batch** — which refinement batch produced them

---

## P-01 — Technical Reviewer

- **Role:** Web developer / front-end engineer
- **Locality:** Lattice mentor pool; not site-specific
- **Key questions:**
  - Is the visual hierarchy consistent across components?
  - Do shadows, hover states, and transitions follow a single token system?
  - Are accent borders, focus rings, and active states aligned to design tokens?
  - Does the component vocabulary collapse repeated patterns into reusable parts?
- **Signature concerns:** Two-tier visual-quality drift between shared components and inline sections. Token sprawl. Untested interactive states. Component duplication.
- **M08-R origin batch:** R1 (Visual System Activation, Loops 1–10)

## P-02 — Pastor Williams

- **Role:** Pastor, Peter's Church
- **Locality:** Grand Rapids, Michigan (Pilot A anchor)
- **Key questions:**
  - Could I read this aloud at a Sunday meeting and have everyone understand it?
  - Does the language assume my congregants already know what a "context graph" is?
  - Is there a name on the page they'd recognize — someone from this community?
  - If a funder asks me what this program does, can I answer in two sentences?
- **Signature concerns:** Corporate/legal/academic hedges. Second-person pep ("you will learn to..."). Jargon clusters ("agentic workstation", "context-driven AI"). Footer + shared-component voice drift that escapes per-page sweeps. Use the **church-meeting test** — if it can't be read aloud in a church board meeting, it isn't ready.
- **M08-R origin batch:** R2 (Voice Alignment, Loops 11–20)

## P-03 — Youth Builder, 16yo

- **Role:** Teenage builder, prospective cohort member
- **Locality:** Grand Rapids (Pilot A) or LA (Pilot B) — uses school devices, may share a laptop
- **Key questions:**
  - Can I actually see what's happening in these diagrams on a 320px screen?
  - Does the homepage make me feel like I belong here, or like I'm being talked down to?
  - When I scroll, does anything obviously break? Do icons look like icons?
  - Is the application path obvious without reading three paragraphs?
- **Signature concerns:** Diagram legibility on mobile (viewBox sizes that render text at 5.5px). Emoji as decoration. Patronizing tone ("you'll learn so much!"). Cognitive load on small screens. Builder-track CTAs that imply gatekeeping.
- **M08-R origin batch:** R3 (Diagrams & Visual Storytelling, Loops 21–30) — and reinforced through R8 (Differentiated CTAs)

## P-04 — Mrs. Johnson

- **Role:** Elder, Peter's Church congregant; on Medicare; manages care for a partner
- **Locality:** Grand Rapids (Pilot A)
- **Key questions:**
  - Can I read the text without squinting? Is the contrast strong enough?
  - Are the icons icons, or are they emoji that look like decoration?
  - Does the site tell me what *I* get out of this, not just what the youth builders do?
  - If I were sitting with a Medicare problem right now, would the example look like mine?
- **Signature concerns:** Emoji-as-icon (replace with semantic SVG). Color contrast below 4.5:1. Care-coordination examples that read as generic. Elder/Community Member track positioned as charity rather than co-design partnership.
- **M08-R origin batch:** R4 (Icon System, Loops 31–40)

## P-05 — LAUSD Administrator / UCLA Researcher

- **Role:** Institutional partner — either a Los Angeles Unified School District administrator or a UCLA education-research faculty member
- **Locality:** Los Angeles (Pilot B); institutional setting, reading on a laptop or tablet
- **Key questions:**
  - Can I scan this table quickly to compare two pilots / two approaches / two tracks?
  - Where's the actual data — student counts, language coverage, timeline?
  - Does the site distinguish *evidence claims* from *aspirations* clearly enough for an IRB or a school board?
  - Does the comparison framing pre-commit me to a conclusion, or let me weigh it?
- **Signature concerns:** Table noise (excessive row borders, missing zebra striping, no scope attributes). Mobile-card stacks that lose the comparison frame. Persuasion tints on neutral comparisons. Missing column headers in screen-reader scope. Cognitive-load spikes from undifferentiated bullet lists.
- **M08-R origin batch:** R5 (Cognitive Load Reduction, Loops 41–50)

## P-06 — Program Officer (Funder / Partner)

- **Role:** Foundation program officer evaluating a grant or sponsorship
- **Locality:** Reads from anywhere; needs to assess in 60 seconds before deciding to schedule a call
- **Key questions:**
  - What changes for the people this program serves? Where are the *outcomes*, not the activities?
  - Is the equity framing specific to who is being left behind, or generic?
  - Does the prospectus exist, and if not, is "in preparation" honest?
  - Is the governance structure named (council members, stewards, veto authority) or implied?
- **Signature concerns:** Activity language ("we teach", "we coordinate") with no outcome line ("Mrs. Johnson sorts her Medicare Part D enrollment before the December 7 deadline"). Equity claims framed as technology claims. Generic "AI for good" prose. Absence of measurable impact targets per pilot. Missing prospectus signal.
- **M08-R origin batch:** R6 (Mission Clarity & Impact, Loops 51–60)

## P-07 — Press / Media — Journalist

- **Role:** Local news / education-beat / civic-tech journalist drafting a feature or news brief
- **Locality:** Reads across all 8 pages in 20 minutes; needs to leave with a story
- **Key questions:**
  - Whose name do I quote? Whose face do I imagine?
  - Do the facts agree across pages — builder counts, language lists, institution names?
  - Is there a lede paragraph anywhere on the site I could lift directly?
  - Does the program take a position, or hedge?
- **Signature concerns:** Cross-page fact drift ("Eight" vs "8–12 builders", language-list mismatches, institution names inconsistently styled). Generic descriptions where a named person belongs. Information without a story arc. Press-kit absence. Quotes that sound corporate.
- **M08-R origin batch:** R7 (Community Warmth & Specificity, Loops 61–70)

## P-08 — Mentor / Developer

- **Role:** Working engineer / scientist from the Lattice network preparing to mentor a youth builder
- **Locality:** Reads on a desktop in a coffee shop; uses keyboard navigation; respects reduced-motion preferences
- **Key questions:**
  - If I tab through this page, can I reach every interactive element?
  - Does the mobile menu trap focus when open? Does Escape close it?
  - What's the Lighthouse score, and does the site honor `prefers-reduced-motion`?
  - As a mentor, can I tell what's expected of me in a single paragraph?
- **Signature concerns:** Keyboard navigation gaps. Missing focus trap on overlays. Untrimmed Lighthouse Best Practices score (console errors from analytics). Pathname-matching bugs on active-nav state. Mentor-role detail buried in marketing copy. Reduced-motion fallbacks missing on animated diagrams.
- **M08-R origin batch:** R8 (Differentiated CTAs, Loops 71–80) + R9 (Header + Hero + Lighthouse + Validation, Loops 81–90)

---

## Rotation guidance (Civic Press campaign)

Per the plan's Workstream C §C2:

| Civic Press mission | Persona(s) | Why |
|---|---|---|
| MCP-0 (Design tokens + style sheet) | P-01 Technical Reviewer | Token system consistency |
| MCP-1 (Shared scaffolding) | P-08 Mentor / Developer | Component a11y + keyboard nav from day 1 |
| MCP-2 (Pixel-art prompt pack + dispatch) | (no III pass — coordination work) | n/a |
| MCP-3 (Home page rebuild) | P-02 Pastor Williams + P-03 Youth Builder | Voice + diagram legibility (two-pass) |
| MCP-4 (About + Curriculum) | P-04 Mrs. Johnson | Elder-track positioning + icon system |
| MCP-5 (Pilots + Get Involved) | P-05 LAUSD-UCLA + P-07 Journalist | Table comparison + cross-page facts |
| MCP-6 (Partners + Resources + Contact) | P-06 Program Officer | Outcomes language + prospectus signal |
| MCP-7 (Cross-page audit + ship) | All 8 personas rotating | Final sweep |

Personas can be combined within a single mission (MCP-3 uses two, MCP-5 uses two) — each persona's pass produces independent findings that the IMPROVE step ranks together.

## See also

- Wrapper governance: `iii/CLAUDE.md`
- Local learning store (Accumulate target): `iii/what/context/context_commons_iii_learning_store.jsonl`
- M08-R mission file (original persona derivation): `how/campaigns/campaign_context_commons_genesis/missions/mission_cc_m08r_website_refinement.md`
- M08-R session history (per-batch persona notes): `how/sessions/history/2026-04/session_stanley_20260414_m08r_batch*.md`
