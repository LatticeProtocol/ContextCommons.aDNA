---
type: pixel_art_prompt
asset_id: hero_diptych_grand_rapids
status: ready_for_generation
native_resolution: 1200x600
scaled_variants: [2x, 3x, 4x]
palette_tokens:
  - pixel-paper
  - pixel-paper-shadow
  - pixel-ink
  - pixel-ink-mid
  - pixel-press-red
  - pixel-civic-blue
  - pixel-civic-blue-deep
  - pixel-amber
  - pixel-bone
  - pixel-rust
target_path: site/public/pixel/hero_diptych_grand_rapids.png
created: 2026-05-14
last_edited_by: agent_stanley
campaign: campaign_civic_press_redesign
mission: MCP-2 (Phase A)
tags: [pixel_art, prompt, civic_press, hero_diptych, grand_rapids, pilot_a]
---

# Pixel-art prompt — `hero_diptych_grand_rapids`

Canonical exemplar for the Civic Press prompt pack. Herb's agent should mirror this file's frontmatter and section structure for the remaining 36 assets.

## Scene

Interior of Peter's Church fellowship hall at dusk in Grand Rapids, Michigan. Warm lamp-lit interior with lake-blue dusk visible through one window. **Foreground**: a folding table at three-quarter angle. A teenage **youth builder** (hoodie, headphones around neck) sits beside an **elder woman** (sweater, glasses on a beaded chain, a Medicare booklet on the table). Between them: an open laptop showing a soft amber screen, a cassette tape recorder, and a paper notebook with a ballpoint pen. **Background**: **Pastor Williams** (older man, short-sleeve clergy shirt) stands in a doorway to the left, hand on the doorframe, watching kindly — not interrupting. The far wall shows two folded chairs and a bulletin board with a small press-red posted notice. Lake-blue night sky through a tall window at the right side, dimmer than the interior. Mood reads as "evening community work" — careful, unhurried, intergenerational. Halftone-frame surround (8-12px frame band) per directive §0.

## Palette tokens

Use only these `--pixel-*` tokens from the locked 12-color palette:

| Token | Hex | Intended use in this scene |
|---|---|---|
| `--pixel-paper` | `#F4EFE6` | Wall highlights, paper notebook, page edges, lampshade highlight |
| `--pixel-paper-shadow` | `#E5DCC9` | Wall midtones, table surface, Medicare booklet edge |
| `--pixel-ink` | `#1A1714` | Outlines for figures, table, doorframe, glasses, hairlines |
| `--pixel-ink-mid` | `#4A3D2F` | Mid-dark shading on the back wall, deep shadow under table |
| `--pixel-amber` | `#D4A843` | Lamp glow, laptop screen tint, warm pool of light on the table |
| `--pixel-civic-blue` | `#2A4E6E` | Night sky through window, dusk haze along window edge |
| `--pixel-civic-blue-deep` | `#1F3A52` | Deepest sky band at top of window |
| `--pixel-press-red` | `#C8321C` | Single bulletin-board posted notice (the only press-red in the image; reads as "this matters") |
| `--pixel-rust` | `#A06040` | Wood panelling, folding-chair frames, cassette-recorder body |
| `--pixel-bone` | `#C9BFA8` | Skin midtones for all three figures; sweater texture |

The 8% tints and depth variants (`--pixel-press-red-deep`, etc.) are reserved for the LA companion piece and section plates; do not introduce them here.

## Style notes

- **16-bit civic pixel art** — recognizable lineage from Stardew Valley + Hilda + Octopath Traveler tile style, but plainer/more documentary in mood (no fantasy flourishes, no over-saturation)
- **Halftone-frame surround** at the canvas edges — 8-12px wide frame band using `--pixel-ink` dots over `--pixel-paper`, density gradient (denser at frame outer edge). This frame is consistent across ALL Civic Press pixel art per directive §0
- **`image-rendering: pixelated`** at all display sizes — no smooth scaling
- **No anti-aliasing outside the palette** — every pixel is one of the 12 colors; transitions use halftone dithering, not blends
- **No drop shadows** — depth comes from palette layering and silhouette discipline
- **Figure size** — figures occupy ~0.4× canvas height; faces are readable at 3× scale but not portrait-level detail at 1×
- **Light direction** — single warm light source from a hanging lamp above the table (off-canvas top); secondary cool fill from the window at right. Shadows fall away from the lamp consistently across all objects in scene
- **Gesture vocabulary** — figures are mid-action, not posed: Pastor's hand on doorframe (steady), elder reading from booklet (attentive), youth builder typing (engaged)

## Alt-text intent

> Pixel-art scene of an evening church fellowship hall: a teenager and an elderly woman work together at a folding table with a laptop, tape recorder, and Medicare booklet, while a pastor watches kindly from a doorway. Warm lamp light fills the interior; lake-blue dusk visible through a tall window.

(~40 words, well above the ≤25 target for icon-scale assets but appropriate for a hero diptych — the screen reader announcement should land "intergenerational community work, evening, with care" without ambiguity.)

## Acceptance criteria

- **Palette discipline** — zero non-palette pixels (verify with a color-histogram audit; the PNG should contain ≤12 unique RGB values plus alpha if used)
- **Figure recognizability** — Pastor (older man at door, short-sleeve clergy shirt), elder woman (glasses on beaded chain, Medicare booklet), youth builder (hoodie, headphones around neck) all distinguishable at 100% scale
- **Halftone-frame consistency** — frame band on this image must match the LA companion piece (`hero_diptych_los_angeles`) and all section plates within ±1 pixel of width and same dot-density gradient
- **Mood** — reads as "evening community work" not "office" not "tutorial session" not "support group". Should feel like a real evening in a real fellowship hall, witnessed at a respectful distance
- **No corporate iconography** — no laptop-vendor logos visible, no stylized "AI brain" or "tech sparkle" effects on the laptop screen, no charts or graphs. The laptop screen is a soft amber wash, not a UI
- **Single press-red instance** — only the bulletin-board posted notice. The press-red is the "this matters" accent; using it elsewhere dilutes the signal
- **Lake-blue specificity** — the dusk through the window must read as Lake Michigan dusk in spring/early fall, not generic "night". Slightly more blue-violet than warm; visible horizon band optional
