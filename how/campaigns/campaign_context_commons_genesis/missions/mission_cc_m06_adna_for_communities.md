---
type: campaign_mission
created: 2026-04-12
updated: 2026-04-13
status: completed
last_edited_by: agent_gutenberg
campaign: campaign_context_commons_genesis
phase: 2
mission_id: M06
session_estimate: 1-2
session_actual: 1
tags: [mission, genesis, translation, communities, M06]
---

# Mission M06: aDNA for Communities (Translational Layer)

## Goal

If `adna_for_communities` was seeded in M01, this mission deepens and validates the translational layer — ensuring that aDNA concepts, context graphs, and agentic systems can be explained to people who have never written code and never will. This is the most important content the program produces: if a pastor at Peter's Church or an elder at the Venice Beach Book Club cannot understand what a context graph is and why it matters, the program fails.

## Dependencies

- M02 (curriculum_framework — the translational layer must connect to curriculum)

## Objectives

| # | Objective | Deliverable | Status |
|---|-----------|-------------|--------|
| O1 | Deepen context_adna_simplified.md | Plain-language explanation of aDNA with practice walkthroughs (GR + LA), FAQ, source references (~2.9K tokens) | **Completed** |
| O2 | Deepen context_lattice_for_communities.md | Day-in-the-life narrative, escalation criteria table, federation walkthrough, source references (~2.8K tokens) | **Completed** |
| O3 | Create community explanation toolkit | 5 analogies, 2 steward one-pagers, verbal scripts (2-min + 5-min), cultural adaptation notes (~2.8K tokens) | **Completed** |
| O4 | III review with accessibility focus | All 3 files reviewed for readability, cultural sensitivity, actionability, source diversity — avg score 4.67 | **Completed** |

## Acceptance Criteria

- [x] Translational content passes the "explain to a non-technical community steward" test
- [x] No jargon without definition. Every technical term has a plain-language equivalent.
- [x] Content is usable in three formats: full context file (for agents), one-page summary (for stewards), verbal explanation (for community meetings)
- [x] Tested against both pilot community contexts (Grand Rapids church setting, LA school/book club setting)

## Context Loading

1. `what/context/adna_for_communities/` (seed files from M01)
2. `what/context/curriculum_framework/` (Elder & Community Member track)
3. `who/communities/` (pilot community profiles — real audiences)

## III Review Results

| File | Quality | Signal | Action | Coverage | Sources | Coherence | **Avg** |
|------|---------|--------|--------|----------|---------|-----------|---------|
| context_adna_simplified | 5 | 4 | 5 | 5 | 4 | 5 | **4.67** |
| context_lattice_for_communities | 5 | 4 | 5 | 5 | 4 | 5 | **4.67** |
| context_community_explanation_toolkit | 5 | 5 | 5 | 5 | 3 | 5 | **4.67** |
| **Topic average** | | | | | | | **4.67** |

## Token Budget

| File | Estimated | Actual | Delta |
|------|-----------|--------|-------|
| context_adna_simplified.md | ~2.5-3K | ~2.9K | On target |
| context_lattice_for_communities.md | ~3-3.5K | ~2.8K | Under (good) |
| context_community_explanation_toolkit.md | ~3-3.5K | ~2.8K | Under (good) |
| **Topic total** | ~9-10K | ~8.5K | ~85-94% of estimate |

## AAR (After Action Review)

- **Worked**: Practice walkthrough and day-in-the-life narrative formats produce highly readable, vivid content. Escalation criteria table (pattern from M05) transferred well to non-technical context. Five-analogy structure gives stewards flexible tools for different audiences.
- **Didn't**: Source diversity is the weakest axis (3-4) — translational content naturally has fewer academic citations than technical content. This is acceptable for the audience but means this topic will always score lower on that axis.
- **Finding**: The toolkit file (one-pagers, verbal scripts, cultural adaptation) is the highest-value artifact in this topic — it's directly deployable at community meetings. This format should be considered for other community-facing topics.
- **Change**: Future community-facing content should always include a verbal script variant. If someone can't say it in 2 minutes, the explanation isn't ready.
- **Follow-up**: Multilingual versions planned but not yet created (Spanish, Swahili, Karen, Arabic). This is a Phase 4 deliverable aligned with M12 (Community Onboarding Kit).

## Notes

- This mission is small in file count but critical in impact. The translational layer determines whether communities can self-assess readiness and whether stewards can explain the program to their communities.
- The printing press metaphor is the program's strongest translational asset. Build on it.
- Avoid the trap of "dumbing down." The content should be accessible AND rigorous — respecting the audience's intelligence while not assuming technical vocabulary.
