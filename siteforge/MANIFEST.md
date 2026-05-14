---
type: manifest
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [siteforge, forge, manifest]
---

# SiteForge Wrapper — Manifest

## Identity

| Field | Value |
|-------|-------|
| **Name** | SiteForge (Context Commons) |
| **Type** | Lightweight forge wrapper |
| **Version** | 1.0.0 |
| **Parent Vault** | ContextCommons.aDNA |
| **Source Lattice** | `lattice_website_builder.lattice.yaml` v2.0 |
| **Archetype** | `organization_landing` |
| **Output** | Astro 6 website (Context Commons program site) |

## Dependencies

| Dependency | Version | Purpose |
|-----------|---------|---------|
| Astro | 6.x | Static site generator |
| Zod | 4.x | Content collection schema validation |
| Playwright | latest | Quality gate validation |
| lattice_website_builder | 2.0.0 | Source lattice (federation ref, minor policy) |

## Structure

```
siteforge/
├── CLAUDE.md              # This wrapper's governance
├── MANIFEST.md            # This file
├── STATE.md               # Operational state
├── what/
│   └── context/           # CC-specific SiteForge context
│       ├── AGENTS.md      # Context index
│       └── cc_voice_mapping.yaml  # Voice register → page type mapping
└── how/
    └── backlog/           # SiteForge development backlog
        └── AGENTS.md      # Backlog index
```

## Entry Points

| Audience | Start Here |
|----------|-----------|
| Agent building CC website content | `CLAUDE.md` → load `website_content` recipe → create content |
| Agent reviewing SiteForge compatibility | `CLAUDE.md` → check federation ref version |
| Agent updating voice mappings | `what/context/cc_voice_mapping.yaml` |
