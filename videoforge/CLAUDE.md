---
type: governance
version: "1.0"
token_estimate: ~800
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [videoforge, forge, governance]
---

# CLAUDE.md — VideoForge Wrapper

## Identity

This is the **VideoForge lightweight wrapper** for the Context Commons aDNA vault. It provides CC-specific video content types, voice guidelines, and production parameters for educational and promotional video content.

**This is NOT the VideoForge implementation.** The forge lives at `~/lattice/lattice-video-forge/`:
- CLI and pipeline: `lattice-video-forge/lvf/`
- Configuration: `lattice-video-forge/config/`

Do not copy implementation details here. Reference via federation.

## Federation

```yaml
federation_ref:
  source_vault: lattice-video-forge
  source_package: lvf
  version_policy: minor
  description: "Transcript-driven agentic video pipeline: transcribe → analyze → process → review"
```

## Video Content Types

| Type | Purpose | Audience | Target Length |
|------|---------|----------|---------------|
| Program Introduction | What is the Context Commons? | General public, potential partners | 3-5 min |
| Community Story | Profile of a pilot community | Public, funders, other communities | 5-8 min |
| Curriculum Module Preview | What students will learn | Youth, stewards, parents | 2-3 min |
| Builder Showcase | Youth-built agent system demo | Technical community, partners | 3-5 min |
| Steward Guide | How-to for community stewards | Stewards, community leaders | 5-10 min |
| Elder Testimonial | Elder co-designer experience | Public, community members | 2-4 min |

## Standing Orders

1. **Accessible language.** Videos must be understandable by a 14-year-old and an elder. No jargon without explanation.
2. **Community consent.** All community members appearing in video must provide informed consent. No filming without permission.
3. **Bilingual support.** LA pilot videos should include Spanish subtitles or bilingual production.
4. **Warm, not corporate.** The tone is community storytelling, not corporate marketing. Show real people, real places, real needs.
5. **Federation, not copy.** Never embed VideoForge pipeline here. Reference via `federation_ref:`.
