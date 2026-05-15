---
type: state
created: 2026-04-12
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
last_session: session_stanley_20260514_civic_press_trim_v71_plus_mcp0
tags: [state, governance, civic_press]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Civic Press P0 active. Workstreams A + B + MCP-0 complete 2026-05-14. MCP-1 (shared scaffolding) is the next mission. CLAUDE.md v7.1 also shipped (227 lines, conservative second-pass trim — Project Map moved to `what/context/cc_project_map.md`).**

Genesis campaign Phase 2 gate passed (2026-04-13). Phase 3 partially complete — M07, M08, M08-R, M08-C all closed; M09 (VideoForge) and M10 (PresentationForge) **paused 2026-05-14** so the Civic Press redesign can land a new visual doctrine before forge-wrapper configuration commits to it. New campaign `campaign_civic_press_redesign` opened with full scaffolding: governance CLAUDE.md, master doc (charter + 4 phases + 8-mission roster + decision register), 8 mission stub files (MCP-0..MCP-7), audits/ + what/pixel_prompts/ directories. Plan: `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`.

**GitHub remote**: https://github.com/LatticeProtocol/ContextCommons.aDNA (PUBLIC, renamed from `context-commons-adna` 2026-05-14). Cross-machine dispatch pattern (Stanley pushes → Herb's agent pulls + generates → Herb commits + pushes → Stanley pulls) wired for MCP-2 pixel-art generation.

## What's Working

- aDNA triad deployed (what/how/who, 5 governance files, 14 base + 12 CC entity types)
- Gutenberg persona configured with 12 standing orders (6 base + 6 CC-specific)
- 12 ontology extensions scaffolded (directories + AGENTS.md + templates)
- 3 forge wrappers created (SiteForge, VideoForge, PresentationForge)
- `program_design/` context topic **III-reviewed** (4 files, ~9K tokens, avg quality 3.8)
- `curriculum_framework/` context topic **III-reviewed** (5 files, ~9.2K tokens, avg quality 4.2)
- `community_engagement/` context topic **III-reviewed** (3 files, ~9.1K tokens, avg quality 4.37)
- `pilot_programs/` context topic **III-reviewed** (3 files, ~6.9K tokens, avg quality 4.43)
- `use_case_domains/` context topic **III-reviewed** (5 files, ~11.5K tokens, avg quality 4.44)
- `adna_for_communities/` context topic **III-reviewed** (3 files, ~8.5K tokens, avg quality 4.67)
- 6 use case specs created in `what/use_cases/` (2 GR-primary, 3 LA-primary, 1 shared)
- `fundraising/` context topic active (6 files, ~14K tokens)
- 5 CC-specific context recipes defined
- Pilot A (Grand Rapids) and Pilot B (Los Angeles) plans drafted in `what/pilots/`
- Genesis campaign active (4 phases, 15 missions, ~25-33 sessions)
- **M00 completed** — campaign planning, community profiles, partner profiles, council charter, mission stubs
- **M01 completed** — III reviews, adna_for_communities seeded, token budgets measured
- **M02 completed** — curriculum framework authored and III-reviewed (5 files, avg 4.2)
- **M03 completed** — community engagement authored and III-reviewed (3 files, avg 4.37)
- **M04 completed** — pilot program design authored and III-reviewed (3 context files avg 4.43 + 2 pilot plans)
- **M05 completed** — use case domain library authored and III-reviewed (5 context files avg 4.44 + 6 use case specs)
- **M06 completed** — adna_for_communities translational layer deepened and III-reviewed (3 files avg 4.67 + explanation toolkit)
- **M07 completed** — SiteForge wrapper configured (branding validated, voice mapping finalized, federation verified, Astro 6 project scaffolded with build passing)
- **M08 completed** — Website content generated (8 pages, 8 components, 6 YAML data files, 7 Playwright test suites, self-hosted fonts, favicon). 8/10 quality gates passing. Deployed to Vercel staging.
- **M08-R Batch 1 completed** — Visual System Activation (Loops 1–10). Shadows, hover states, transitions, and accent borders activated across all 8 shared components + HOME hero. 143/143 Playwright tests passing.
- **M08-R Batch 2 completed** — Voice Alignment (Loops 11–20). Pastor Williams persona. HOME, ABOUT, PARTNERS, Footer voice-aligned. 14 jargon phrases removed. 2 new components extracted (ValueCard, PartnershipTypeCard). 141/141 Playwright tests passing (desktop + mobile).
- **M08-R Batch 3 completed** — Diagrams & Visual Storytelling (Loops 21–30). Youth Builder persona. 5 SVG diagram components created (EngagementLifecycle, PilotTimeline, KnowledgeEconomyCycle, WhoWhatHowTriad, ThreeRoleLoop). Voice swept curriculum, get-involved, resources (11 jargon instances removed — full site now clean). 143/143 Playwright tests passing.
- **M08-R Batch 4 completed** — Icon System (Loops 31–40). Mrs. Johnson persona. 6 SVG icon components created (IconHammer, IconShield, IconBook, IconBooks, IconHandshake, IconCompass). 14 emoji instances replaced across 4 pages + 4 YAML data files. RoleCard/PersonaCard use named slots; TrackCard uses name-to-component mapping. 211/211 Playwright tests passing (8 flaky — pre-existing Vercel analytics).
- **M08-R Batch 5 completed** — Cognitive Load Reduction (Loops 41–50). LAUSD Admin / UCLA Researcher persona. 7 tables styled with card-wrap + zebra striping + hover + scope="col". Glossary restyled with border-l accent per term. StyledTable.astro component extracted (thin slot-based wrapper). Mobile card-stacks added for comparison tables (App vs. Agent, pilot comparison). Persuasion tint on "Community Agent System" column. 212/212 Playwright tests passing (7 flaky — pre-existing Vercel analytics).
- **M08-R Batch 6 completed** — Mission Clarity & Impact (Loops 51–60). Partner/Funder (program officer) persona. VignetteCard.astro component created with outcome prop (measurable impact statements). 3 inline vignette divs replaced on index page. Problem section reframed with equity/urgency language. CTA refined for funders. Pilot cards sharpened with outcome-specific text. 231 total Playwright tests (19 new), 223 passed (8 flaky — pre-existing Vercel analytics).
- **M08-R Batch 7 completed** — Community Warmth & Specificity (Loops 61–70). Press/Media (journalist) persona. PilotCard.astro and PilotGlanceCard.astro components created. 4 inline pilot card divs replaced (2 on index, 2 sidebars on pilots). Human anchors added to 5 content blocks (Mrs. Johnson, Venice Beach Book Club mother, Mrs. Chen/Mr. Davis). Cross-page fact consistency verified. 250 total Playwright tests (27 new), 250 passed (8 flaky — pre-existing Vercel analytics).
- **M08-R Batch 8 completed** — Differentiated CTAs (Loops 71–80). Youth Builder + Mentor/Developer persona. ContactPathCard.astro and DetailSection.astro components created. IconEnvelope.astro added. 4 contact path boxes replaced with audience-specific accent borders and icons. 4 detail sections wrapped with card treatment and column containment. PersonaCard extended with anchor links to detail sections. Voice refinement from mentor/partnership context files. 298 total Playwright tests (48 new), 297 passed (9 flaky — pre-existing Vercel analytics).
- **M08-R Batch 9 completed** — Header + Hero Image + Lighthouse + Validation Hardening (Loops 81–90). Mentor/Developer persona. Header refined (scroll shadow, active underline, focus trap, Escape close). Lighthouse CI installed + Gate 6 enabled (all pages: Perf 100, A11y 100, BP 96, SEO 100). Hero image integrated (pixel art, responsive `<picture>`, WebP variants 30-96KB). Motion layer (IntersectionObserver + data-animate, reduced-motion safe). A11y hardening (heading hierarchy, skip-to-content, focus-visible, cross-page nav). 332 total Playwright tests (34 new in 4 spec files), 9/10 quality gates passing. 13/13 original R1 gap register items closed.
- **M08-R Batch 10 completed** — Final Persona Sweep + Deployment Readiness (Loops 91–100). All 8 personas validated. Mobile audit clean (393px). Content completeness sweep: zero jargon, zero placeholders across all file types. Lighthouse maintained 100/100/96/100. 332 Playwright tests, 9/10 quality gates. **M08-R mission complete — 100/100 III loops.**
- **Production deploy completed 2026-05-12** — `vercel --prod` deploy of M08-R website. Live at **https://site-nu-lovat.vercel.app** (deployment id `dpl_FEEyyTcXsRQ8PVX5UZS96DyGdnJ9`). All 8 routes return 200 with byte-for-byte parity vs. local `dist/`. `contextcommons.org` not yet pointed at Vercel (0 custom domains under team scope) — separate task when partner branding warrants. Session: `session_stanley_20260512_website_vercel_deploy`.
- **M08-C completed 2026-05-12** — 25 III loops of homepage + site-wide compression. Hero refactored (image 42% desktop / 80% mobile; new `--text-5xl` token; thesis rewritten as "intergenerational program: youth build / elders teach / community owns"). Site-wide compression: home -18% desktop / -26% mobile, curriculum -29% / -32% (via `<details>` collapse), get-involved -29% / -45% (DetailSection → `<details>`), about -12% / -21%. New Playwright visual-inspection harness captures 24 screenshots + DOM scrollHeight per labeled run. Brandable URL **https://contextcommons.vercel.app/** claimed and public. 346 tests passing / 17 skipped / 0 failed. Lighthouse on `/` 100/100/96/100 (parity). AAR: `how/missions/artifacts/aar_m08c_compression.md`.
- **Civic Press Workstream A completed 2026-05-14** — vault rename `context_commons.aDNA` → `ContextCommons.aDNA` (commit `a7dbbd2`; workspace router + 21 sibling-vault live refs + auto-memory dir all migrated; sibling-vault edits left uncommitted in those repos for Stanley to batch-review). CLAUDE.md aggressive trim 413 → 284 lines (commit `6068924`; v6.0 → v7.0; 4 companion context files created: `about_forges.md`, `context_cc_standing_orders_program.md`, `context_cc_domain_knowledge.md`, `context_object_standards_compliance.md`). `iii/` consumer wrapper bootstrapped (commit `fb3df49`; federation_ref pinned to III.aDNA v0.2.0 / commit `5cd210e`; 6 packs declared incl. `whitepaper_communication` for editorial copy; 8-persona registry extracted from M08-R batches; empty learning store JSONL initialized). GitHub repo renamed `context-commons-adna` → `ContextCommons.aDNA` and visibility flipped PRIVATE → PUBLIC. M09 + M10 status `planned` → `paused` with resume condition "after MCP-7 ships."
- **Civic Press Workstream B completed 2026-05-14** — campaign `campaign_civic_press_redesign` fully scaffolded. Authored campaign-scoped CLAUDE.md (governance + context-loading per phase + phase-gate doctrine integrity checks + III cadence wiring + pixel-art dispatch pattern + explicit don'ts), master doc with charter + 4-phase structure + 8-mission roster + decision register (6 locked, 5 open), 8 mission stub files (MCP-0..MCP-7) with persona assignments + success criteria + scope boundaries, audits/ directory for phase-gate audit artifacts, what/pixel_prompts/ landing for MCP-2 prompt pack. Two-birds-line placements tracked: #1 home hero (MCP-3) / #2 About Leaf I (MCP-4) / #3 LA mentorship paragraph + #4 Builder column (MCP-5). Workstream B closed same Claude conversation as A — single-session pattern held for both infrastructure workstreams.
- **CLAUDE.md v7.1 completed 2026-05-14** — conservative second-pass trim 284 → 227 lines (-57, ~20% additional reduction; v7.0 was already a 31% aggressive trim from 413). Project Map H2 (full annotated tree + Forge federation + III framework paragraphs) moved to new `what/context/cc_project_map.md` companion; CLAUDE.md keeps a 4-line summary + pointers. All 9 H2 sections preserved (Identity, First-Run, Project Map, Safety, Standing Orders, Git Coordination, Agent Protocol, Domain Knowledge, Working with Content). token_estimate 3200 → 2600. Commit `d2f5cbc`.
- **MCP-0 completed 2026-05-14** — Civic Press design tokens + style sheet locked. **D-FONT-PAIRING-FINAL** signed: Fraunces (display) + Source Serif 4 (body) + JetBrains Mono Variable (functional), all FOSS via `@fontsource`; specimen comparison deferred per Stanley's plan-mode choice. **D-COLOR-TOKENS** signed: paper #F4EFE6 / ink #1A1714 / press-red #C8321C / civic-blue #2A4E6E + AA-safe ink-soft variants + 12-color bounded pixel palette. WCAG verified 4.65:1–16.7:1 across documented pairs. Deliverables: `site/src/styles/branding.css` rewritten (94 → 219 lines with retirement-gate inline comment), `site/src/layouts/BaseLayout.astro` preload links updated, 9 new woff2 in `site/public/fonts/`, package.json adds 3 @fontsource deps, `what/decisions/civic_press_style_sheet.md` NEW one-page locked reference (138 lines), `siteforge/what/context/cc_voice_mapping.yaml` appended with `editorial_voice:` + `two_birds_line_schedule:` (canonical line locked + 4 placements mapped to MCP-3/4/5). III pass (Persona P-01 Technical Reviewer) captured 2 traps to local learning store: **CC-MCP0-001** (alias retirement gate must be inline in source, not just in docs — fix shipped in-mission) and **CC-MCP0-002** (token alias semantic-pair break — old palette had gold/dark-green button pair at 7.5:1; aliasing rotated to press-red/civic-blue-depth at 2.2:1 fail; surgical fixes to CTABanner.astro brand variant + index.astro hero CTA `style=color` → `--paper` resolved all 4 axe-core violations; high graduation candidacy for III canonical web-design pack). Gates: `npm run build` green / 22 Playwright non-visual tests pass (3 pre-existing Vercel-analytics flakes) / 8/8 a11y tests pass post-fix / Lighthouse deferred to MCP-7 deploy (font payload reset expected at MCP-1 subsetting).

## Active Campaigns

| Campaign | Phase | Status | Priority |
|----------|-------|--------|----------|
| `campaign_context_commons_genesis` | Phase 3 (M09/M10 paused) | **Suspended** | Resumes after Civic Press |
| `campaign_civic_press_redesign` | Workstream A ✓ + B ✓ → P0 (MCP-0 next) | **Active** | Primary |

## Mission Status

| Mission | Campaign | Phase | Status | Sessions |
|---------|----------|-------|--------|----------|
| M00 | genesis | 1 | **Completed** | 1 (est. 2-3) |
| M01 | genesis | 1 | **Completed** | 1 (est. 2) |
| M02 | genesis | 1 | **Completed** | 1 (est. 2) |
| M03 | genesis | 1 | **Completed** | 1 (est. 1) |
| M04 | genesis | 2 | **Completed** | 1 (est. 2) |
| M05 | genesis | 2 | **Completed** | 1 (est. 2-3) |
| M06 | genesis | 2 | **Completed** | 1 (est. 1-2) |
| M07 | genesis | 3 | **Completed** | 1 (est. 1) |
| M08 | genesis | 3 | **Completed** | 1 (est. 3-4) |
| M08-R | genesis | 3 | **Completed** | 10/10 (R1-R10 complete) |
| M08-C | genesis | 3 | **Completed** | 1 (25 III compression loops) |
| M09 | genesis | 3 | **Paused** | (resumes after MCP-7) |
| M10 | genesis | 3 | **Paused** | (resumes after MCP-7) |
| Workstream A | civic_press | pre-B | **Completed** | 1 (2026-05-14) |
| Workstream B | civic_press | pre-P0 | **Completed** | 1 (2026-05-14, same conv. as A) |
| CLAUDE.md v7.1 trim | civic_press | A2-follow-up | **Completed** | 1 (2026-05-14, same conv. as MCP-0) |
| MCP-0 | civic_press | P0 | **Completed** | 1 (2026-05-14) |
| MCP-1 | civic_press | P0 | Planned | 1 |
| MCP-2 | civic_press | P0 | Planned | 1 + N ingest |
| MCP-3 | civic_press | P1 | Planned | 1 |
| MCP-4 | civic_press | P2 | Planned | 1 |
| MCP-5 | civic_press | P2 | Planned | 1 |
| MCP-6 | civic_press | P2 | Planned | 1 |
| MCP-7 | civic_press | P3 | Planned | 1 |

## Timeline

| Milestone | Target | Status |
|-----------|--------|--------|
| Project scaffold complete | 2026-04-12 | Done |
| M00: Campaign Planning | 2026-04-12 | **Done** |
| M01: Context Program Design | 2026-04-12 | **Done** |
| M02: Context Curriculum Framework | 2026-04-13 | **Done** |
| M03: Context Community Engagement | 2026-04-13 | **Done** |
| **Phase 1 Gate Review** | 2026-04-13 | **Passed** |
| M04: Pilot Program Design | 2026-04-13 | **Done** |
| M05: Use Case Domain Library | 2026-04-13 | **Done** |
| M06: aDNA for Communities | 2026-04-13 | **Done** |
| **Phase 2 Gate Review** | 2026-04-13 | **Passed** |
| M08: Website Content + Deploy | 2026-04-13 | **Done** |
| M08-R: Website Refinement (R10/10) | 2026-04-15 | **Done** |
| Phase 3: Infrastructure (M08-R R7-R10, M09-M10 remain) | Jun-Jul 2026 | In progress |
| Phase 4: Launch Preparation (M11-M14) | Jul-Aug 2026 | Planned |
| **Pilot A Launch (Grand Rapids)** | **Q3 2026** | Planned |
| **Pilot B Launch (Los Angeles)** | **Q4 2026** | Planned |

## Active Blockers

None.

## Key Findings from M08

1. **Vercel preview adapter crashes on missing static assets instead of returning 404.** Font files referenced in CSS but not present in public/ caused the preview server to crash entirely. This is a hard blocker for Playwright testing — all public asset references must be resolvable.
2. **Tailwind v4 arbitrary value type ambiguity with CSS vars.** `text-[var(--brand-primary-dark)]` (color) and `text-[var(--text-lg)]` (font-size) both use the `text-` prefix. Tailwind cannot infer the type from CSS vars. Fix: use `text-[length:var(...)]` for font sizes or explicit `style=` for colors when both are needed.
3. **axe-core catches real issues.** Color contrast on the hero CTA and link-in-text-block on the contact page were genuine WCAG AA violations that would have shipped unchecked without automated testing.
4. **@fontsource is the reliable way to self-host Google Fonts.** Direct CDN URL construction is fragile and undocumented. Installing @fontsource packages and copying woff2 files from node_modules is deterministic.
5. **Single-session pattern holds.** M08 (est 3-4, actual 1). Total across 9 missions: 9 sessions vs. 16-22 estimated (~50% of estimate). Even the largest mission in the campaign completed in one session.
6. **Footer and anchor link gaps only surfaced in III review, not in automated tests.** The missing Resources/Contact footer links and the broken `#how-its-different` anchor were invisible to Playwright since tests focused on per-page content, not cross-page navigation completeness. Consider adding a cross-page link audit test.

## Key Findings from M07

1. **Accent gold (#D4A843) fails WCAG AA on white even for large text (2.21:1).** Added accent_dark (#8B6914, 5.09:1) as AA-safe text variant. Primary greens pass easily (9.25:1). Always check contrast before assuming a warm gold works for text.
2. **Light-mode first is correct for community-facing sites.** WGA defaults to dark mode (research audience), but CC targets elders and youth on school devices — light default with dark mode opt-in.
3. **Self-hosted fonts via @font-face > fontsource CSS imports for CWV.** Copying woff2 files to public/fonts/ gives full control over preload and display behavior.
4. **Voice mapping as YAML with content source references is a powerful M08 input.** Each page knows exactly which context files to draw from, what voice to use, and what language to avoid. This should become a SiteForge pattern.
5. **Single-session pattern continues.** M07 (est 1, actual 1). Total across 8 missions: 8 sessions vs. 13-18 estimated (~50% of estimate).

## Key Findings from M06

1. **Practice walkthrough and day-in-the-life narrative formats are highly effective for translational content.** Concrete scenes grounded in specific pilot communities (Pastor Williams, Mrs. Johnson, Maria, Sofia) make abstract concepts tangible. This format should be standard for any community-facing documentation.
2. **The explanation toolkit is the highest-value artifact in the topic.** One-pagers, verbal scripts (2-min and 5-min), and cultural adaptation notes are directly deployable at community meetings. Future community-facing content should always include a verbal script variant.
3. **Escalation criteria tables transfer well from technical to translational context.** The pattern that drove M05 actionability to 5 (domain escalation tables) also works in plain-language community guides — adapted as "What Happens If Something Goes Wrong?" with situation/action/handler columns.
4. **Source diversity is structurally lower in translational content (3-4 vs. 4+ for technical).** This is acceptable — academic citations are less appropriate for 8th-grade reading level content. The sources that are included (Ostrom, Freire, Putnam) are explained in plain language.
5. **Quality trend continues upward.** M01 avg 3.8 → M02 avg 4.2 → M03 avg 4.37 → M04 avg 4.43 → M05 avg 4.44 → M06 avg 4.67.
6. **Single-session pattern holds.** M06 (est 1-2, actual 1). Total across 7 missions: 7 sessions vs. 12-16 estimated (~50% of estimate).
7. **Verbal explanation test: "If you can't say it in 2 minutes, the explanation isn't ready."** The 2-minute script forced clarity on what the core message actually is. This constraint should be applied to future community-facing content as a quality gate.

## Key Findings from Live III Audit (2026-04-15)

1. **YAML data files are a blind spot for content sweeps.** R3 jargon clearance only targeted `.astro` files, leaving "agentic workstation" in `builder.yaml` and "context-driven AI" in `steward.yaml`. Fixed. Any future content sweep must grep across all content file types (`.astro`, `.yaml`, `.md`, `.json`).
2. **WebFetch produces false positives for visual elements.** HTML→markdown conversion strips SVGs, CSS classes, and visual styling. Reports of "missing SVG diagrams" were false. Live-site III audits should use tools that preserve HTML structure, or supplement with `curl | grep` verification.
3. **Gate 6 (Core Web Vitals) has been skipped for all 8 batches.** No Lighthouse CI, no performance budgets, no CWV baseline. Cannot claim "10/10 quality gates" while 2 gates are skipped. Lighthouse CI integration planned for R9.
4. **The site has zero photography or illustration.** SVG diagrams are effective for concepts but the homepage lacks an emotional anchor image. AI-generated hero image (intergenerational learning scene) is P0 for R9.
5. **axe-core catches ~30% of real a11y issues.** Missing: keyboard navigation, focus trap in mobile menu, `prefers-reduced-motion` validation, heading hierarchy tests. A11y hardening planned for R9.
6. **Meta-III of the III process identified 8 methodology gaps and 8 planned improvements.** R9 and R10 expanded to absorb hero image, Lighthouse, a11y hardening, and deployment readiness.

## Key Findings from M08-R Batch 8

1. **Column cards inside DetailSection work at 320px without excessive nesting.** bg-alt inside bg-surface inside bg-alt creates natural depth layering. At 320px the innermost content area is ~240px — sufficient for bullet lists. The concern about visual noise was unfounded; the 50% opacity border keeps column cards subtle.
2. **PersonaCard's optional `detailHref` prop enables a two-step conversion path.** Primary CTA ("Apply as a Builder") goes to /contact. Secondary link ("See what you'll do ↓") scrolls to the detail section. This pattern — action + exploration — addresses both the ready-to-commit visitor and the still-researching visitor. Consider this for future card components.
3. **Youth builder pathfinding on /contact requires a text note, not a structural change.** There is no youth-specific contact path by design — youth join through community leaders. The clarifying sentence ("If you are a young person interested in joining, ask a trusted adult in your community to reach out") solves the persona walkthrough friction without changing the information architecture.
4. **Test selectors for SVG icons need specificity.** `.grid` matched the mobile menu grid, not the contact card grid. Always target via semantic elements (headings → parent traversal) rather than generic class selectors when the page has multiple grids. Same principle as R4's grep-before-batch lesson applied to test writing.
5. **Single-session pattern holds for R8.** Batch 8 (10 loops, est 1 session, actual 1). Campaign total: 17 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 7

1. **The journalist persona catches cross-page fact inconsistencies that previous personas missed.** Builder ranges ("Eight" vs "8–12"), language lists, and institution names must agree across every page. A fact reconciliation audit should be a standard loop in any batch that edits narrative content on multiple pages.
2. **Human anchors transform content blocks from informational to compelling.** Mrs. Johnson (Medicare), the mother at Venice Beach Book Club (immigration), Mrs. Chen and Mr. Davis (care coordination) — each named or described person gives a journalist a lede and gives a funder a story. The pattern: one specific person + one specific problem + one specific place.
3. **PilotCard and PilotGlanceCard follow the established thin-wrapper pattern.** PilotCard (~30 lines) is VignetteCard's structural cousin: label/title/description/outcome/link. PilotGlanceCard (~22 lines) renders a `<dl>` fact sidebar. Both use shadow/hover/transition from the R1 visual system. The component library now has 14 section components, 5 diagrams, and 6 icons.
4. **Props-based components are the right pattern for narrative content; YAML stays for structured data.** The YAML pilot data files exist but were deliberately NOT imported — their flat descriptions lack journalistic warmth. The page owns the words; the component owns the layout. YAML stays available for future programmatic uses.
5. **Single-session pattern holds for R7.** Batch 7 (10 loops, est 1 session, actual 1). Campaign total: 16 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 6

1. **The `outcome` prop pattern fills a funder-visible gap.** Previous vignettes described what the tool does but not what changes. Adding a measurable outcome statement (logic model framing: Inputs → Activities → Outputs → Outcomes) gives program officers the "so what?" they need within 60 seconds. This pattern should be applied to other content blocks that describe program activities.
2. **Equity framing is more compelling than technology framing for funders.** "Communities being left behind by technological change" (equity) resonates more than "understanding transformer architectures" (technology). The Problem section rewrite follows the fundraising strategy's framing principle #1.
3. **VignetteCard differentiates from RoleCard via accent color.** RoleCard uses `border-t-[var(--brand-primary)]` (green = "who participates"). VignetteCard uses `border-t-[var(--brand-accent)]` (gold = "what gets built"). This semantic color distinction is implicit but effective — the visual system now encodes meaning.
4. **Single-session pattern holds for R6.** Batch 6 (10 loops, est 1 session, actual 1). Campaign total: 15 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 5

1. **Thin wrapper components are the right abstraction for repeated structural patterns.** StyledTable.astro is 10 lines: a slot-based `<div>` with the card-wrap classes. All 7 tables use it with `class` passthrough for layout variants (mb, hidden, max-w). No data props, no column definitions, no row iteration — the tables' varied content stays inline. This granularity avoids over-abstraction while eliminating the duplicated 5-class wrapper string.
2. **Mobile card-stack (dual-render) is worth the markup duplication for comparison tables.** The App vs. Agent table (6 rows, 3 cols) and pilot comparison table become stacked cards on mobile — each row shows the dimension label with both options beneath. Same dual-render pattern as EngagementLifecycle SVG. The tradeoff (doubled HTML for 2 tables) is acceptable for a static site.
3. **Persuasion tint on a single column is subtle and effective.** `bg-[var(--brand-primary)]/[0.04]` on the "Community Agent System" column cells provides just enough visual signal to guide the reader without being heavy-handed. Applied only to the advocacy table (App vs. Agent), not the neutral comparison (pilot comparison).
4. **Zebra striping replaces row borders cleanly.** Removing all `border-b` classes from rows and replacing with `[&>tr:nth-child(even)]:bg-[var(--color-bg-alt)]` on `<tbody>` reduced visual noise while maintaining scanability. The card wrapper's border provides the outer frame.
5. **Single-session pattern holds for R5.** Batch 5 (10 loops, est 1 session, actual 1). Campaign total: 14 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 3

1. **SVG viewBox sizing must start at 320px mobile.** The initial EngagementLifecycle at 760px viewBox rendered text at ~5.5px on 320px screens — illegible. Restructured with dual desktop/mobile SVGs. Rule: keep viewBox under 500px wide, or provide a mobile-specific layout.
2. **Component extraction for diagrams is the right pattern.** The `diagrams/` directory with one Astro component per diagram kept pages clean and made the Loop 29 audit straightforward. Each diagram ~50-65 lines including the wrapper.
3. **ThreeRoleLoop (the brand signature) was easier than expected.** Flagged as hardest diagram and allocated 2 loops. Completed in 1 because Loops 21-23 established the SVG pattern (markers, arrows, node layout). Front-loading simple diagrams to establish patterns is effective.
4. **Full-site jargon clearance completed.** R2 cleared HOME/ABOUT/PARTNERS/Footer. R3 cleared curriculum (3 phrases), get-involved (5 instances), resources (3 instances). Anti-slop grep now returns 0 hits for all target phrases across all pages. The R2 AAR undercounted get-involved (said 2, was 5) and resources (said 1, was 3) — always verify with grep, don't trust manual counts.
5. **Single-session pattern holds for R3.** Batch 3 (10 loops, est 1 session, actual 1). Campaign total: 12 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 2

1. **Pastor Williams persona is an effective jargon filter.** The "church meeting" test caught every instance of corporate/legal/academic language. Personas should be specific people with specific settings (e.g., "church board meeting"), not abstract audience categories.
2. **Shared components carry voice across all pages.** The Footer tagline contained "context-driven AI systems" which appeared on every page. Voice alignment batches must audit shared components, not just target pages.
3. **Same content on multiple pages must be treated as one voice target.** The ABOUT RoleCards conflicted with rewritten HOME RoleCards. When conceptual content (role descriptions, non-negotiable summaries) appears on N pages, all instances must be scoped together.
4. **Component extraction during voice work is efficient.** ValueCard and PartnershipTypeCard were extracted in the same loops that aligned their voice. Doing structural + voice in one pass avoids revisiting the same sections.
5. **Lending library analogy is powerful for federation.** The Grand Rapids→Detroit example makes "open standards" tangible for a Michigan pastor. Community-specific examples outperform abstract explanations.
6. **Single-session pattern holds for R2.** Batch 2 (10 loops, est 1 session, actual 1). Campaign total: 11 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 1

1. **Shared components carry ~60% of visual surface; ~40% is inline sections.** RoleCard, TrackCard, CTABanner, PersonaCard, Accordion, ResourceLink, PageHeader, Footer all received visual treatment. But pilot cards (index, pilots), comparison tables (about ×2, curriculum ×4, pilots), use-case vignettes (index), partnership boxes (partners), contact path cards (contact), and the knowledge economy diagram (curriculum) are all inline and untouched. This creates a two-tier visual quality problem that must be addressed in R2–R9.
2. **Shadow hierarchy is clean and reusable.** sm (rest) → md (hover) → lg (hero CTA). Consistent across all components. This pattern should be applied to inline sections as they're componentized.
3. **TypeScript type annotations fail in Astro template expressions.** `Record<string, string>` in a `.map()` inside an Astro template causes an esbuild parse error. Move typed declarations to frontmatter. Minor but avoidable.
4. **Component extraction should happen during the batch that touches the pattern.** Deferring extraction to a later batch creates debt. If R2 touches partner voice and finds 3 partner type boxes without a component, extract the component in R2, not later.
5. **Single-session pattern holds for M08-R batches.** R1 (10 loops, est 1 session, actual 1). Campaign total: 10 sessions actual vs. 16-22 estimated.

## Key Findings from M08-R Batch 9

1. **Lighthouse baseline was exceptional before any optimization.** All 8 pages scored 100/100/96/100 (Perf/A11y/BP/SEO). The Astro static site + Tailwind v4 + self-hosted fonts + no third-party JS is inherently fast. Best Practices docked 4 points for Vercel analytics console errors — not actionable. Lesson: measure before optimizing.
2. **Gemini image generation is blocked on current API key.** Imagen requires a paid plan. Gemini Flash Image exhausted free-tier quota. User-provided pixel art image was the effective fallback. The backlog item for image generation should track API key upgrade.
3. **IntersectionObserver + Astro view transitions require dual event listeners.** `DOMContentLoaded` fires on initial load but client-side navigation triggers `astro:page-load`. Both must be registered for animations to work across navigations.
4. **Playwright iPad emulation doesn't reliably support keyboard Tab testing.** The `isMobile: true` flag changes keyboard behavior. Focus trap and keyboard tests should only run on desktop and phone-sized viewports, not tablet. Tests use viewport width guards (skip if 500-1024px).
5. **Pathname matching in Astro requires trailing-slash normalization.** `Astro.url.pathname` may return `/about/` while nav items use `/about`. The comparison must strip trailing slashes, or active states won't match. This was a pre-existing bug that only surfaced when the active underline made it visible.
6. **Single-session pattern holds for R9.** Batch 9 (10 loops, est 1 session, actual 1). Campaign total: 18 sessions actual vs. 16-22 estimated.

## Next Steps

1. **MCP-1 (Shared scaffolding)** — 8 components (Masthead, PageOpener, PullQuote, Marginalia, StatusChip, SectionOpener, LibraryCatalogueCard, ColophonFooter) + atom tests. Persona P-08 Mentor/Developer. Will also retire backward-compat token aliases AND clean up old woff2 files (libre-baskerville, source-sans-3) AND optimize font subsetting. Full mission file at `how/campaigns/campaign_civic_press_redesign/missions/mission_cc_mcp1_shared_scaffolding.md`.
3. **MCP-2 (Pixel-art prompt pack + dispatch)** — ~37 per-asset prompts at `what/pixel_prompts/civic_press/`; coordination memo to Herb's agent; placeholder PNGs in `public/pixel/`. Push to public remote; Stanley signals Herb. Then N ingest sessions as batches return.
4. **MCP-3 (Home page rebuild)** — P1 phase gate. One-sentence test. Personas P-02 + P-03 two-pass.
5. **MCP-4 → MCP-6** — subpage rebuilds with formal III pass per mission.
6. **MCP-7** — cross-page audit + production deploy + AAR + graduation review of accumulated III traps.
7. **After MCP-7 ships**: unpause genesis M09 (VideoForge) and M10 (PresentationForge) — both inherit the locked visual system without retrofit.

## Civic Press P0 design directives

Stanley's two-part directive (home page + system-wide) lives in plan context. Key doctrine pillars:
- **The Civic Press** — editorial broadsheet × 16-bit civic pixel art × open-standard quiet authority
- Four-color palette: paper (#F4EFE6-#F8F3EA) / ink (#1A1714-#15110D) / press-red (#C8321C-#B83A2B) / civic-blue (#2A4E6E-#1F3A52)
- FOSS-only type: Fraunces (display) + Source Serif 4 or Newsreader (body) + JetBrains Mono or Departure Mono (functional)
- Reverse-Big-Brother promotion to home page (community governance + no data extraction + open standards as written promises)
- Two-birds line propagated to 4 placements; Michael Brooks dedicatory line + bilingual posture in every footer
- Pilot copy sharpened: GR oral-history archive + Social Security; LA bilingual learning enablement leads
