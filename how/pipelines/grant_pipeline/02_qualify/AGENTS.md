---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, pipeline, grant_pipeline, qualify]
---

# Stage 2: Qualify

## Purpose

Assess whether CC should invest time in a full application. This is the go/no-go decision stage.

## Processing Instructions

For each opportunity in this stage:

1. **Alignment check**: Does the funder's stated mission overlap with CC's design? (Use funder priority positioning table in `context_cc_fundraising_grant_writing.md`)
2. **Eligibility check**: Can CC apply? (501(c)(3) status, fiscal sponsor accepted, geography match, organizational age requirements)
3. **Capacity check**: Can CC deliver a competitive application by the deadline? (Staff time, partnership letters needed, data requirements)
4. **Fit assessment**: Has this funder funded similar programs before? What is the typical award size relative to CC's budget?

## Quality Gate (Exit Criteria)

Before advancing to `03_loi/`:

- [ ] Alignment scored (strong / moderate / weak) with rationale
- [ ] Eligibility confirmed (all requirements met or achievable)
- [ ] Capacity confirmed (team can deliver application by deadline)
- [ ] Go/no-go decision documented with reasoning
- [ ] If GO: identified which CC component this grant would fund

## Advancement

- **GO**: Move file to `03_loi/`, update `stage: loi`
- **NO-GO**: Move file to `07_closeout/`, set `stage: declined_to_apply`, add rationale
