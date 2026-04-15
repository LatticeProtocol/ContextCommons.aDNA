---
type: backlog_idea
created: 2026-04-14
updated: 2026-04-14
status: active
last_edited_by: agent_gutenberg
priority: high
effort: session
source: M08-R R1 gap analysis
tags: [backlog, siteforge, visual, components]
---

# Table Styling System

## Problem

7 tables across 3 pages (about ×2, curriculum ×4, pilots ×1) have only basic border-bottom styling. No row hover, no zebra-striping, no visual hierarchy between header and body, no responsive behavior at narrow viewports. These tables are a primary source of cognitive overload — identified as the #1 visual gap after R1.

## Tables Inventory

1. `about.astro` — WHO/WHAT/HOW triad table
2. `about.astro` — App vs. Community Agent comparison table
3. `curriculum.astro` — Core Track week-by-week table
4. `curriculum.astro` — Builder Track phase table
5. `curriculum.astro` — Steward Track phase table
6. `curriculum.astro` — Elder Track focus areas table
7. `pilots.astro` — Two Models comparison table

## Proposal

Option A: CSS-only approach — add a `.cc-table` utility class in `branding.css` that applies consistent styling (header accent, row hover, zebra, responsive overflow).

Option B: Component approach — create a `<StyledTable>` Astro component that wraps table content with consistent visual treatment.

Option A preferred (lighter, no component overhead for static content).

## Target Batch

**R5 (Cognitive Load Reduction)** — this is the batch specifically focused on converting dense tables to scannable patterns. Some tables may become progressive disclosure or card-based layouts instead of remaining as tables.
