---
type: session
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_gutenberg
tags: [session, deploy, vercel, website, m08-r-followup]
session_id: session_stanley_20260512_website_vercel_deploy
user: stanley
started: 2026-05-12T19:55:00Z
status: completed
intent: "Deploy M08-R Context Commons website to Vercel production for early-partner sharing"
files_modified:
  - STATE.md
  - how/sessions/active/session_stanley_20260512_website_vercel_deploy.md (this file)
files_created:
  - how/sessions/active/session_stanley_20260512_website_vercel_deploy.md
completed:
  - Pre-flight: confirmed vercel auth (sciencestanley-5565), linked project `prj_DnieQN3RTMJp0accbMAoYEZ7qGkZ` is "site" on Science Stanley's projects team
  - npm install verified node_modules against lockfile (exit 0)
  - npm run build clean — 9 pages (8 routes + 404) in 930ms, output to dist/ and .vercel/output/static
  - Smoke check on dist/ — index 35412B, about 45842B, curriculum 44086B, contact 24342B; `<main>` present on all spot-checked pages
  - `vercel --prod --yes` succeeded — deployment id `dpl_FEEyyTcXsRQ8PVX5UZS96DyGdnJ9`, status READY in ~22s
  - Live walkthrough — all 8 routes return 200 with byte-for-byte match against local dist/
  - WebFetch sanity on /, /curriculum, /pilots — hero pixel art renders, 4 curriculum tracks present, both pilots present, footer nav complete
  - `contextcommons.org` confirmed NOT yet configured on Vercel (0 custom domains under team scope)
---

## Activity Log

- 19:55 — Session started. Plan approved (production deploy via `vercel --prod`, fast build smoke, live walkthrough).
- 19:55 — Pre-flight: `vercel whoami` → sciencestanley-5565. `vercel project inspect` confirmed linked project = "site" on Science Stanley's projects team. `npm install` exit 0.
- 19:57 — `npm run build` — clean. 9 pages, 930ms. Warnings (`partners`, `team`, `news` empty content collections) are pre-existing placeholder dirs — harmless.
- 19:57 — Smoke check on `dist/` confirms full content sizes; `<main>` present.
- 19:58 — `vercel --prod --yes` — Production deploy succeeded. Deployment URL `https://site-7wrkvx6mg-science-stanleys-projects.vercel.app`. Canonical alias `https://site-nu-lovat.vercel.app`. Inspector at `https://vercel.com/science-stanleys-projects/site/FEEyyTcXsRQ8PVX5UZS96DyGdnJ9`.
- 19:58 — Live walkthrough via curl on all 8 routes — all 200, byte-sizes match local dist/ exactly.
- 19:59 — WebFetch content sanity on /, /curriculum, /pilots — all checks pass.
- 19:59 — Confirmed `contextcommons.org` is NOT pointed at Vercel yet (vercel domains ls shows 0 domains). For partner sharing, use `https://site-nu-lovat.vercel.app`.
- 19:59 — Session closing.

## SITREP

**Completed**:
- Production deploy of M08-R website to Vercel
- Live URL verified end-to-end (8 routes, 200 OK, content renders)
- DNS status surfaced (`contextcommons.org` not configured yet)

**In progress**: none

**Next up**:
- (Optional, user discretion) Configure `contextcommons.org` custom domain on the Vercel "site" project when ready to brand the partner-share URL.
- (Optional) Promote pilot pages off "DRAFT pending community review" once pilot communities have reviewed.
- Per STATE.md: M09 (VideoForge) and M10 (PresentationForge) remain in Phase 3.

**Blockers**: none

**Files touched**:
- `how/sessions/active/session_stanley_20260512_website_vercel_deploy.md` (created → will move to history/2026-05/)
- `STATE.md` (deploy note + last_session update)
- `site/dist/` and `site/.vercel/output/` (regenerated; gitignored)
- `site/package-lock.json` (if any drift; verify on git status)

## Deployment Details

| Field | Value |
|-------|-------|
| **Production URL (share with partners)** | https://site-nu-lovat.vercel.app |
| **Deployment URL (this snapshot)** | https://site-7wrkvx6mg-science-stanleys-projects.vercel.app |
| **Vercel inspector** | https://vercel.com/science-stanleys-projects/site/FEEyyTcXsRQ8PVX5UZS96DyGdnJ9 |
| **Deployment ID** | dpl_FEEyyTcXsRQ8PVX5UZS96DyGdnJ9 |
| **Status** | READY |
| **Build time** | 13s on Vercel; ~22s end-to-end |
| **Local build** | 930ms (9 pages) |
| **Custom domain `contextcommons.org`** | NOT configured (0 domains under team) — out of scope for this session |
| **Walkthrough notes for partner share** | Pilot pages display "DRAFT pending community review" banners — intentional per CC Standing Order #7 (community voice constitutional); partners should be told this is pre-community-validation copy. |

## Findings

1. **The build is reproducible and the prod deploy byte-for-byte matches local dist/.** Every route served at site-nu-lovat.vercel.app has exactly the same byte count as the locally built dist/ (e.g., index 35412B = 35412B). This is the cleanest possible deploy signal.
2. **`@astrojs/vercel` adapter handles everything; no `vercel.json` is needed.** Vercel auto-detected the Astro adapter via `astro.config.mjs` and used the static output target. Build command and output dir from the adapter; framework preset stays "Other" but works.
3. **DNS is a separate operational concern.** The site URL in `astro.config.mjs` is `https://contextcommons.org` (used for sitemap canonical URLs), but Vercel reports zero custom domains. Adding `contextcommons.org` to the Vercel project is a deliberate next step; until then, the canonical Vercel alias is the share URL.

## Next Session Prompt

Production deploy of the M08-R Context Commons website complete on 2026-05-12. Live at `https://site-nu-lovat.vercel.app`. If a future session needs to redeploy: from `site/`, run `npm install && npm run build && vercel --prod --yes`. The Vercel project is linked at `site/.vercel/project.json` (project "site" on Science Stanley's projects team, id `prj_DnieQN3RTMJp0accbMAoYEZ7qGkZ`). Next likely operational task: configure `contextcommons.org` as a Vercel custom domain when partner branding warrants it — `vercel domains add contextcommons.org` then update DNS at the registrar. Phase 3 remaining missions per STATE.md are M09 (VideoForge) and M10 (PresentationForge); those are independent of this deploy session.
