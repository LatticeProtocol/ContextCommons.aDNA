---
type: context
topic: forge_federation
created: 2026-05-14
updated: 2026-05-14
status: active
last_edited_by: agent_gutenberg
tags: [forges, federation, siteforge, videoforge, presentationforge]
---

# Forge Federation — Context Commons Content Generation

Content generation for Context Commons is powered by **three lightweight forge wrappers** inside this vault, each referencing shared implementations via federation. Wrappers stay light; forge logic lives in the source vaults and is pulled in via `federation_ref:` blocks with `version_policy: minor`.

## Wrappers

| Forge | Wrapper | Source Implementation | Purpose |
|-------|---------|----------------------|---------|
| SiteForge | `siteforge/` | `SiteForge.aDNA` + `lattice_website_builder` v2.0 | Context Commons website (organization_landing archetype) |
| VideoForge | `videoforge/` | `VideoForge.aDNA/videoforge/` (single-repo per ADR 000 Amendment 1, 2026-05-12) | Educational videos, community stories, curriculum previews |
| PresentationForge | `presentationforge/` | `lattice-protocol/extensions/canvas/` + `lattice_presentation_content` v1.0 | Partnership pitches, Curriculum Council decks |

## Rules

- Each wrapper has `CLAUDE.md` + `MANIFEST.md` + `STATE.md` + local context.
- CC-specific lattice YAML files use `federation_ref:` with `version_policy: minor` so wrapper updates auto-track non-breaking forge updates.
- **Never** copy forge implementation into the wrappers. The wrapper is the thin layer; the forge owns the canonical lattice.
- Cross-forge composition stays in-vault — a page might pull a SiteForge layout, a VideoForge embed, and a PresentationForge deck preview, but the forges themselves don't coordinate; the consumer vault integrates.

## When forge versions change

- **Patch / minor bump** in a forge — the federation_ref auto-resolves. Re-run the wrapper's lattice on next content pass.
- **Major bump** — review the forge's CHANGELOG before pinning. Open a session in the affected wrapper directory; check `STATE.md` for upgrade notes.
