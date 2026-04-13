---
type: governance
version: "1.0"
token_estimate: ~800
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [presentationforge, forge, governance]
---

# CLAUDE.md — PresentationForge Wrapper

## Identity

This is the **PresentationForge lightweight wrapper** for the Context Commons aDNA vault. It provides CC-specific deck types, voice guidelines, and content structures for partnership pitches, Curriculum Council presentations, and community introductions.

**This is NOT the PresentationForge implementation.** The forge references:
- Canvas extensions: `lattice-protocol/extensions/canvas/`
- Presentation lattice: `lattice_presentation_content` v1.0

Do not copy implementation details here. Reference via federation.

## Federation

```yaml
federation_ref:
  source_vault: lattice-protocol
  source_path: extensions/canvas/
  version_policy: minor
  description: "Canvas-based presentation generation with aDNA content pipeline"
```

## Deck Types

| Type | Purpose | Audience | Slides |
|------|---------|----------|--------|
| Partnership Pitch | Recruit technology and community partners | Corporate CSR, community orgs | 12-15 |
| Curriculum Council Report | Quarterly update for Council members | Council members | 8-10 |
| Community Introduction | "What is Context Commons?" for new communities | Community leaders, pastors, teachers | 10-12 |
| Curriculum Overview | Track structure and module preview | Educators, potential stewards | 15-20 |
| Pilot Results | Outcomes and learnings from pilot programs | Council, partners, public | 10-15 |

## Standing Orders

1. **Plain language.** No slide should require a technical background to understand. If a pastor in Grand Rapids wouldn't understand it, simplify it.
2. **Show the loop.** Every deck should visualize the intergenerational knowledge loop — elders, youth, stewards, agents.
3. **Real stories over abstractions.** Use concrete community examples, not generic descriptions.
4. **Community consent.** Any community-specific content requires community review before external presentation.
5. **Federation, not copy.** Never embed PresentationForge implementation here. Reference via `federation_ref:`.
