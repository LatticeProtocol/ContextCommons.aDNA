---
type: context
topic: object_standards
subtopic: compliance_dimensions
created: 2026-05-14
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
tags: [compliance, quality, fair, scoring]
---

# Object Compliance Dimensions

Object quality across modules, datasets, and lattices is measured across 10 dimensions, each scored 0-5 (50 max). Previously embedded in the root `CLAUDE.md`; lives here as the canonical reference for any session that runs a compliance audit, lattice publication, or quality gate.

## The ten dimensions

1. **Triad structure** — correct directory placement (`what/` vs `how/` vs `who/`)
2. **Governance** — `CLAUDE.md`, `MANIFEST.md`, `STATE.md` coherence
3. **Frontmatter** — required fields present and valid
4. **FAIR metadata** — keywords, license, identifier, provenance
5. **Type vocabulary** — canonical I/O types on module inputs/outputs
6. **Versioning** — semver in frontmatter, `CHANGELOG` entries
7. **Federation** — `discoverable` flag, `federation:` block
8. **Registration** — lattice registry readiness
9. **Companions** — YAML companion files for non-YAML objects
10. **Reproducibility** — clear inputs, outputs, and execution context

## How to use

- Run `skill_context_quality_audit` to score a topic or file.
- Run `skill_vault_review` to score the vault as a whole.
- A score under 35/50 typically flags the object for revision before registry publication.
- High-scoring dimensions are graduation evidence — see `skill_context_graduation`.
