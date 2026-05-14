---
type: campaign_mission
created: 2026-05-14
updated: 2026-05-14
status: planned
last_edited_by: agent_gutenberg
campaign: campaign_civic_press_redesign
phase: 3
mission_id: MCP-7
session_estimate: 1
iii_persona: All 8 personas (rotating sweep)
tags: [mission, civic_press, audit, ship, p3, campaign_close]
---

# Mission MCP-7: Cross-Page Audit + Ship + AAR + Learning-Store Triage

## Goal

Read the site as a single edition. Verify the doctrine landed consistently across all 8 pages. Run a final 8-persona rotation. Ingest any remaining pixel-art placeholders. Deploy to production. Triage the III learning store for graduation candidates. Write the campaign AAR.

This is the **P3 phase** and the **campaign close**.

## Dependencies

- P2 phase gate passed (MCP-4, MCP-5, MCP-6 complete; one-paragraph test passes on every page)
- MCP-2 ingest tail substantially complete (all hero + section plates + role portraits final; pilot use-case icons + lifecycle plates may have a few stragglers)

## Final Audit Checklist

Per the plan's verification section (Workstream B campaign-wide gates) + the directive's §6 + §9.

### Doctrine integrity (every page)

- Four-color palette applied (paper, ink, press-red, civic-blue) — no orphan colors
- FOSS type system (Fraunces + Source Serif 4 + JetBrains Mono OR locked variants) — no system-stack fallback paths visible
- Hairline rules consistent (1px, ink color, never decorative)
- Pixel-art frames consistent (halftone framing, `image-rendering: pixelated`)
- Status chips use mono small-caps + hairline border

### Voice integrity (every page)

- Zero hedges (no "can help", "is valuable", "helps with")
- Zero second-person pep in headers (no "you will learn to...")
- Specific nouns over abstract triples (Mrs. Johnson, Pastor Williams, Mrs. Chen, December 7 deadline, Karen, Swahili, jacaranda)
- One-paragraph test passes on every page for funder + steward + 14-year-old

### Cross-page facts

- Builder count consistent (8–12 GR, 12–16 LA)
- Language lists consistent across home + pilots + curriculum + contact
- Institution names consistent (Peter's Church / LAUSD / UCLA / Venice Beach Book Club)
- Pilot timeline dates consistent

### Footer integrity (every page)

- Two-birds line lands at 4 placements (home hero, About Leaf I close, LA dispatch mentorship, Builder column)
- Michael Brooks dedicatory line in every footer (D-MICHAEL-BROOKS-LINE wording)
- Bilingual posture line in every footer (D-BILINGUAL-LANGUAGES list)
- Colophon block (not sitemap) — Set in [display] and [body]; pixel art hand-drawn

### Technical (per the plan's Workstream B per-mission gates)

- Astro build green
- All Playwright tests pass (332+ baseline maintained or grown)
- Lighthouse CI gates hold on all 8 pages (Perf ≥95, A11y ≥95, BP ≥92, SEO ≥95)
- Visual-inspection harness screenshots reviewed for every page
- No console errors on any of 8 routes

### Accessibility

- Reduced-motion fallbacks on hero diptych composite, cycle diagrams, lifecycle procession, pilot card animated details
- Keyboard nav reaches every interactive element on every page
- Focus trap on mobile menu (Escape closes)
- Alt-text specificity sweep: every pixel-art scene has descriptive alt-text (not "illustration of community"; what is happening in the scene)
- Contrast audit (4.5:1 body, 3:1 large text; press-red reserved for non-essential emphasis or paired with ink underline)

### Pixel-art ingest final

- Verify INGEST_LOG.md — zero `status: placeholder` rows
- Any final-batch Playwright snapshot tests passing

## III Final Sweep

Run all 8 personas in rotation per the registry's Civic Press table. One-pass per persona (lighter than per-mission depth). Each persona produces a finding list; surface high-severity items as P0 before ship.

## Production Deploy

- `vercel --prod` from `site/` directory
- Verify all 8 routes return 200 at `contextcommons.vercel.app`
- Verify byte-for-byte parity with local `dist/`
- Update STATE.md with deploy URL + commit pin

## Learning-Store Triage

- Read `iii/what/context/context_commons_iii_learning_store.jsonl` entries from all 7 prior Civic Press III passes (MCP-0, MCP-1, MCP-3, MCP-4, MCP-5, MCP-6) + this final sweep
- Identify ≥3 traps that are domain-general (not CC-specific)
- For each candidate, draft a graduation rationale: frequency ≥3 across ≥2 sessions, acceptance ≥80%
- Author ADR-003 §3 graduation PR against `III.aDNA/what/context/core_domain_packs/iii_corrections_canonical.jsonl` (separate commit; Stanley sign-off before push to III.aDNA)

## Campaign AAR

Author `how/missions/artifacts/aar_civic_press_redesign.md` per template_aar.md. 5-line lightweight AAR plus:
- Doctrine pillars that survived contact unchanged
- Doctrine pillars that needed adjustment mid-flight (if any)
- Persona findings most useful (which persona surfaced what)
- Trap graduation summary
- Single-session velocity assessment (did the pattern hold? — should hold per the campaign-velocity memory; this is the test datapoint for a doctrine-reset campaign)
- Cross-vault patch close-out: prompt Stanley to commit the 21 sibling-vault rename patches in those repos

## Success Criteria

- All 8 pages doctrine-consistent + voice-consistent + cross-page-fact-consistent
- Production deployed at <https://contextcommons.vercel.app/>
- Lighthouse 100/100/96/100 maintained or improved
- All Playwright tests pass
- Reduced-motion + keyboard nav + alt-text sweep clean
- INGEST_LOG zero placeholders
- ≥3 traps graduated to III.aDNA canonical (separate PR to III.aDNA)
- Campaign AAR landed at `how/missions/artifacts/aar_civic_press_redesign.md`
- M09 + M10 in genesis campaign un-paused (status: paused → planned) with note "Resumes after Civic Press doctrine inheritance verified"
- STATE.md updated with campaign close + production URL

## Post-MCP-7 follow-on

- **M09 unpause**: VideoForge wrapper configured with the locked Civic Press visual system + voice mapping
- **M10 unpause**: PresentationForge wrapper configured similarly
- **Vercel custom domain** (if Stanley wants): point `contextcommons.org` at Vercel

## AAR

(pending campaign close)
