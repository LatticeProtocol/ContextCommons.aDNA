---
type: governance
version: "1.0"
token_estimate: ~1500
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [siteforge, forge, governance]
---

# CLAUDE.md — SiteForge Wrapper

## Identity

This is the **SiteForge lightweight wrapper** for the Context Commons aDNA vault. It provides CC-specific context, voice register mappings, and lattice definitions that customize the shared SiteForge infrastructure for Context Commons website generation.

**This is NOT the SiteForge implementation.** The forge lives at `~/lattice/SiteForge.aDNA/`:
- Lattice graphs: `SiteForge.aDNA/what/lattices/`
- Archetypes: `SiteForge.aDNA/what/archetypes/` (CC extends `organization_landing`)
- Astro web context: `SiteForge.aDNA/what/context/astro_web/`

Do not copy implementation details here. Reference via federation.

## Federation

```yaml
federation_ref:
  source_vault: SiteForge.aDNA
  source_lattice: what/lattices/lattice_partner_website_scaffold.lattice.yaml
  version: "3.0.0"
  version_policy: minor
  lattice_type: workflow
  description: "11-node scaffold generator: branding → classify → scaffold → schemas → content → gates → III → deploy"

federation_ref_content:
  source_vault: SiteForge.aDNA
  source_lattice: what/lattices/lattice_website_builder.lattice.yaml
  version: "2.0.0"
  version_policy: minor
  lattice_type: workflow
  description: "6-stage content pipeline: topic → context → architecture → compose → critique → assemble"
```

When SiteForge.aDNA bumps a minor version, review CC customizations for compatibility. Major version bumps require re-validation.

## Context Loading

For SiteForge work, load in this order:

1. **This file** (auto-loaded when working in `siteforge/`)
2. **CC program context** via `website_content` recipe from `what/context/context_recipes.md`:
   - program_design (thesis, principles, architecture, governance model) ~8K
   - community_engagement (when available) ~6K
   - pilot_programs (when available) ~8K
   - Standard load: ~18K tokens
3. **Voice mapping**: `what/context/cc_voice_mapping.yaml` (register → page type)

## Standing Orders

1. **Astro 6 only.** All generated code targets Astro 6. Verify APIs exist before using them.
2. **Anti-slop doctrine.** No generic AI aesthetics. Every piece must reflect the Context Commons voice — warm, accessible, community-centered, never corporate. Avoid: "revolutionizing", "cutting-edge", "synergy", "leverage", "empower" (overused). Pass the "would a community steward say this?" test.
3. **Playwright validates before review.** No site output reaches a human reviewer without Playwright validation passing first. 10 quality gates are mandatory.
4. **Community voice is constitutional.** Content about specific communities must be reviewed by community representatives before publishing (Standing Order #7).
5. **Accessible first.** WCAG 2.1 AA minimum. The website must work for elders with limited digital literacy and youth on school devices. Plain language. Clear navigation. Large tap targets.
6. **Federation, not copy.** Never embed SiteForge lattice implementation here. Reference via `federation_ref:`. Forge version bumps trigger CC lattice review.

## Page Types

The Context Commons website uses the Organization Landing archetype:

| Page | Primary Voice | Secondary | Notes |
|------|--------------|-----------|-------|
| Home | Declarative + Inviting | Visionary | Mission statement, printing press thesis, call to action |
| About | Explanatory + Accessible | Warm | What is Context Commons? Program architecture. |
| Curriculum | Educational + Rigorous | Encouraging | Track overview, module previews, competency milestones |
| Pilots | Storytelling + Concrete | Community-centered | Grand Rapids and LA pilot details, community profiles |
| Get Involved | Action-oriented | Persona-based | CTAs: "I'm a young person", "I'm a steward", "I'm a partner" |
| Partners | Professional + Transparent | Honest | Partner directory, partnership model, non-negotiables |
| Resources | Reference | Practical | Docs, curriculum materials, community toolkit |
| Contact | Functional | Welcoming | Application forms for communities, mentors, partners |

## Quality Gates (10)

All must pass before any content reaches review:

1. Build succeeds (zero errors, zero warnings)
2. All pages render at 4 breakpoints (320, 768, 1024, 1440px)
3. No broken links
4. No missing images
5. WCAG 2.1 AA accessibility
6. Core Web Vitals (LCP, FID, CLS)
7. SEO elements present (title, meta description, OG tags)
8. Community voice compliance (warm, accessible, not corporate)
9. Content collection schemas validate (Zod 4)
10. No console errors
