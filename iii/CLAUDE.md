---
type: federation_wrapper
wrapper_for: III.aDNA
created: 2026-05-14
updated: 2026-05-14
last_edited_by: agent_gutenberg
mission_origin: ContextCommons campaign_civic_press_redesign workstream_a (A3)
status: active
tags: [federation, iii, consumer_wrapper, context_commons, civic_press]
---

# Context Commons `iii/` — III.aDNA Consumer Wrapper

This is the Context Commons federation wrapper for **III.aDNA** (Inspect / Introspect / Improve framework, persona Argus Panoptes). It declares which III capabilities Context Commons consumes, pins the upstream version at `v0.2.0`, and routes ACCUMULATE writes to a CC-local learning store instead of the canonical upstream store.

Per **ADR-002** (consumer federation contract) and **ADR-003** (learning store ownership), this wrapper is lightweight: a `federation_ref` block + `local_extensions`. III canonical content (modules, packs, lattice, canonical corrections.jsonl) is **never** copied here — only referenced.

## Background — wrapper-less era ends

Context Commons ran 100 III loops during M08-R (Website Refinement, 2026-04-14 → 2026-04-15) before this wrapper existed. Those loops used a bespoke persona-walkthrough pattern that produced 8 distinct personas, 332 Playwright tests, and Lighthouse 100/100/96/100 — but without formal `federation_ref` pinning, learning-store growth, or canonical-trap graduation eligibility. This wrapper, authored at workstream A of `campaign_civic_press_redesign`, makes the III dependency formal so the Civic Press campaign can:

- run a per-mission III pass (Dispatch → Inspect 4 modalities → Introspect 7 checks → Improve → Accumulate)
- write captured traps to a CC-local JSONL store
- graduate domain-general traps upstream to `III.aDNA` canonical at campaign close

## federation_ref

```yaml
federation_ref:
  source_vault: III.aDNA
  source_path: ~/lattice/III.aDNA
  source_skill: how/skills/skill_iii_review.md
  version: "0.2.0"
  version_policy: minor
  pinned_at_commit: "5cd210e"          # v0.2.0 tag
  pinned_at: 2026-05-14
  packs_used:
    - context_iii_inspect_procedures
    - context_iii_introspect_checks
    - context_iii_learning_store
    - context_iii_domain_packs_web_design
    - context_iii_vault_maintenance
    - context_iii_whitepaper_communication
  modules_used:
    - module_iii_dispatch
    - module_iii_inspect_text
    - module_iii_inspect_code
    - module_iii_inspect_visual
    - module_iii_inspect_data
    - module_iii_introspect
    - module_iii_improve
    - module_iii_accumulate
  lattice: ~/lattice/III.aDNA/what/lattices/lattice_iii_verification_oracle.lattice.yaml
  lattice_version: "1.2.0"
  local_extensions:
    - kind: domain_pack
      path: ~/lattice/ContextCommons.aDNA/iii/what/context/context_commons_iii_persona_registry.md
      rationale: >
        8 personas extracted from M08-R's 10-batch persona-walkthrough campaign
        (Pastor Williams / Mrs. Johnson / Youth Builder GR / LAUSD-UCLA /
        Funder-Partner / Press-Journalist / Mentor-Developer / Technical Reviewer).
        Provides per-persona key-questions filter for Dispatch persona selection
        in Civic Press redesign missions. Personas are CC-specific (church-board
        meeting test, Grand Rapids and LA communities) — not universally portable.
        If a future trap or persona graduates to domain-general, ADR-003 ceremony
        promotes it to III.aDNA core.
    - kind: learning_store_local
      path: ~/lattice/ContextCommons.aDNA/iii/what/context/context_commons_iii_learning_store.jsonl
      rationale: Per ADR-003 §2; ACCUMULATE writes target this file, never the canonical upstream.
```

### Packs in scope vs out of scope

**In scope (6):**
- `context_iii_inspect_procedures` — 5-trap library (visual hierarchy, template voice, accessibility theater, cognitive overhead, interactive patterns)
- `context_iii_introspect_checks` — 7 calibration checks (systematic vs. isolated, modality mismatch, intent–execution gap, etc.)
- `context_iii_learning_store` — trap schema + graduation ceremony procedure
- `context_iii_domain_packs_web_design` — web-specific traps (CC's primary output)
- `context_iii_vault_maintenance` — periodic governance audits
- `context_iii_whitepaper_communication` — editorial copy rules; activated for Civic Press because the redesign is editorial-broadsheet (drop caps, marginalia, pull quotes, ledger tables) and the voice tightening (strike hedges, plain-spoken authority) is whitepaper-adjacent

**Out of scope (intentionally):**
- `context_iii_canvas_visual` — CC's `presentationforge/` wrapper would consume canvas review separately if commissioned; not active at this campaign

## How III runs in Civic Press missions

Per the plan at `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md` (Workstream C, MCP-0 through MCP-7):

1. **Mission startup** — load wrapper, declare persona for the mission (rotation: Technical Reviewer / Mentor-Dev / Pastor Williams + Youth Builder / Mrs. Johnson / LAUSD-UCLA + Press / Funder-Partner / all-eight final sweep).
2. **Per-mission III pass before close** — Dispatch + Inspect (4 modalities) + Introspect (7 checks) + Improve + Accumulate.
3. **Phase gates** — cross-page persona walkthrough against live preview before promoting to next phase; capture as `phase_gate_audit_pN.md` under campaign directory.
4. **Campaign close** — review accumulated traps; graduate ≥3 high-frequency traps to III.aDNA canonical via ADR-003 §3 ceremony if domain-general.

## Routing notes

1. **ACCUMULATE always writes local.** Never edit `iii_corrections_canonical.jsonl` from this side. Use the ADR-003 graduation PR process for upstream changes.
2. **Pack precedence on conflict** (per ADR-003 §2): if a local-extension pack and a canonical pack name the same trap, **local wins** (consumer knows its domain better). Mark such overrides in the persona registry's frontmatter for graduation review.
3. **Version-policy bump.** When III.aDNA bumps minor (0.2 → 0.3), this wrapper agent reviews the upstream CHANGELOG diff before updating `version:`. Patch bumps apply transparently.
4. **Cross-vault request surface.** Pinned at v0.2.0 — CC can act as either originator (request canvas work from CanvasForge, video work from VideoForge) or receiver per the airlock standard spec §4.
5. **Skill invocation.** CC missions load this CLAUDE.md first → follow `federation_ref.source_skill` to the canonical III skill → III skill orchestrates pack loading from `packs_used` + `local_extensions`.

## Cross-References

- Upstream identity + protocol: `~/lattice/III.aDNA/CLAUDE.md`
- Upstream skill: `~/lattice/III.aDNA/how/skills/skill_iii_review.md`
- ADR-002 (consumer federation contract): `~/lattice/III.aDNA/what/decisions/adr_002_consumer_federation_contract.md`
- ADR-003 (learning store ownership): `~/lattice/III.aDNA/what/decisions/adr_003_learning_store_ownership.md`
- CC persona registry: `iii/what/context/context_commons_iii_persona_registry.md`
- CC local learning store: `iii/what/context/context_commons_iii_learning_store.jsonl`
- Civic Press plan (Workstream C cadence): `~/.claude/plans/please-read-the-claude-md-glittery-waterfall.md`
- M08-R origin missions (persona derivation): `how/campaigns/campaign_context_commons_genesis/missions/mission_cc_m08r_website_refinement.md`
