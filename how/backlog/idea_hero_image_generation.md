---
type: backlog_idea
created: 2026-04-15
updated: 2026-04-15
status: completed
priority: P0
target_batch: R9
completed: 2026-04-15
last_edited_by: agent_gutenberg
tags: [backlog, idea, hero-image, homepage, visual, R9, P0]
---

# Idea: AI-Generated Hero Image for Homepage

## Problem

The Context Commons website has zero photography or illustration. SVG diagrams are effective for concepts, but the homepage hero section lacks an emotional anchor image showing real people in the intergenerational learning loop. The site reads as technically competent but visually sterile — a community program should feel warm and human.

## Proposal

Generate an AI hero image depicting the intergenerational learning loop in action:

- **Scene**: Community space (church hall / community center aesthetic — not corporate)
- **People**: Youth builder (14-24) at a laptop, elder receiving help, community steward facilitating, mentor observing
- **Technology**: Laptop screens visible but not dominant — people and conversation are the focus
- **Tone**: Warm, collaborative, diverse, hopeful
- **Style options**: (a) Photorealistic, (b) Illustrated/artistic matching brand warmth, (c) Watercolor/sketch

## Technical Requirements

- Format: WebP with JPEG fallback, optimized (~200KB max)
- Sizes: Hero desktop (1440x600), tablet (768x400), mobile (375x300) — responsive `<picture>` element
- `loading="eager"`, preload via `<link rel="preload">`
- Alt text descriptive and specific to scene content
- Directory: `public/images/`

## Generation Approach

- ComfyForge.aDNA workflows (if available), or external AI tool (Midjourney, DALL-E, Flux)
- Generate multiple options for user review
- Run through optimization pipeline before deployment
- Verify LCP impact with Lighthouse after integration

## Origin

Meta-III of the III process (session_stanley_20260415_live_iii_audit). The homepage lacks emotional resonance — every persona walkthrough noted the absence of human imagery. User explicitly requested this as a priority.
