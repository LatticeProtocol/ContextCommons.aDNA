---
type: pixel_art_prompt
asset_id: <asset_name_here>            # matches filename without .md; e.g., section_plate_about
status: ready_for_generation
native_resolution: <WIDTHxHEIGHT>      # per mission file asset roster
scaled_variants: [2x, 3x, 4x]
palette_tokens:
  - pixel-paper                        # list every --pixel-* token used in this asset
  - pixel-ink                          # palette is LOCKED at 12 colors; see civic_press_style_sheet.md
  # ...
target_path: site/public/pixel/<asset_name_here>.png
created: <YYYY-MM-DD>
last_edited_by: agent_herb
campaign: campaign_civic_press_redesign
mission: MCP-2 (Phase A)
tags: [pixel_art, prompt, civic_press, <group_tag>, <asset_specific_tags>]
---

# Pixel-art prompt — `<asset_name_here>`

(One-line context: what page/component this asset serves, and why it exists.)

## Scene

(1-2 specific sentences describing the image. Concrete subjects, named places where applicable, lighting register, mood. Avoid abstractions. Example pattern from the exemplar: "Interior of Peter's Church fellowship hall at dusk in Grand Rapids, Michigan. Warm lamp-lit interior with lake-blue dusk visible through one window. ..." Aim for the level of specificity a single artist would need to paint the same scene twice with consistent results.)

## Palette tokens

(Table — token | hex | intended use in this scene. Reference only from the locked 12-color palette in `what/decisions/civic_press_style_sheet.md` § "The Pixel Palette". Do NOT introduce off-palette colors. Even white must come from `--pixel-paper`; even black must come from `--pixel-ink`.)

| Token | Hex | Intended use in this scene |
|---|---|---|
| `--pixel-...` | `#......` | ... |

## Style notes

- 16-bit civic pixel art (Stardew Valley / Hilda / Octopath Traveler lineage, plainer mood)
- Halftone-frame surround at canvas edges (8-12px frame band, `--pixel-ink` dots on `--pixel-paper`, density gradient)
- `image-rendering: pixelated` at all display sizes
- No anti-aliasing outside the palette — every pixel is one of the 12 colors; transitions use halftone dithering
- No drop shadows — depth via palette layering and silhouette
- Figure size (if figures present): figures occupy ~0.4× canvas height
- Light direction: (specify primary + any fill)
- (Asset-specific style notes here: e.g., for seals — "circular composition centered on canvas, 4px padding from frame")

## Alt-text intent

> (Specific, not generic. ≤25 words for icon-scale assets; up to ~40 words for hero pieces. Describes what a screen reader announces. Aim for: subject + setting + mood signal, no jargon.)

## Acceptance criteria

- **Palette discipline** — zero non-palette pixels
- **Subject recognizability** — (asset-specific: what must be readable at 100% scale)
- **Halftone-frame consistency** — frame band matches peer assets in same group
- **Mood** — (asset-specific: what the image must NOT read as)
- (Any other asset-specific criteria, e.g., "single press-red instance only", "circular silhouette", "no corporate iconography")
