---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, pipeline, grant_pipeline, fundraising]
---

# Grant Pipeline

A 7-stage content-as-code pipeline for tracking grant opportunities from discovery through closeout. Files flow through stages — a grant opportunity's directory location IS its current state.

## Pipeline Flow

```
01_prospect/ → 02_qualify/ → 03_loi/ → 04_application/ → 05_negotiate/ → 06_implement/ → 07_closeout/
(discover)     (assess fit)   (LOI)     (full app)        (award terms)    (deliver+report)  (close+renew)
```

## Stages

| Stage | Directory | Output | Gate |
|-------|-----------|--------|------|
| 1. Prospect | `01_prospect/` | Identified opportunity with alignment notes | Quality: funder researched, deadline confirmed |
| 2. Qualify | `02_qualify/` | Go/no-go decision with rationale | Quality: alignment + eligibility + capacity assessed |
| 3. LOI | `03_loi/` | Drafted Letter of Inquiry | **Human gate**: LOI reviewed and approved before submission |
| 4. Application | `04_application/` | Full application package | **Human gate**: application reviewed before submission |
| 5. Negotiate | `05_negotiate/` | Award negotiation materials | **Human gate**: grant agreement reviewed before signing |
| 6. Implement | `06_implement/` | Active grant with reporting schedule | Quality: compliance infrastructure confirmed |
| 7. Closeout | `07_closeout/` | Final reports and renewal materials | Quality: all reports filed, funds reconciled |

## How to Use

### Starting a New Grant Opportunity

1. Create a markdown file describing the grant opportunity
2. Drop it into `01_prospect/`
3. Follow `01_prospect/AGENTS.md` instructions

### Pipeline Frontmatter

Files in the pipeline carry this frontmatter:

```yaml
---
type: grant_opportunity
pipeline: grant_pipeline
stage: prospect | qualify | loi | application | negotiate | implement | closeout
funder: "Organization Name"
program: "Grant Program Name"
amount_range: "$X-$Y"
deadline: YYYY-MM-DD
fiscal_sponsor: "Sponsor Name" | null
priority: 1 | 2 | 3
source_ref: "path/to/context/file.md"
initiated: YYYY-MM-DD
---
```

### Completing the Pipeline

When a grant reaches closeout:
1. File final reports and reconcile funds
2. Document outcomes for organizational records
3. If renewal: create a new file in `01_prospect/` with `source_ref` linking to the original
4. Move the closed grant file to `07_closeout/` with `stage: closed`
5. Optionally create a partnership entity at `what/partnerships/` for awarded grants

## Context Loading

For grant pipeline work, load the `grant_application` recipe from `what/context/context_recipes.md`:
- Strategy context: `what/context/fundraising/context_cc_fundraising_strategy.md`
- Grant writing guidance: `what/context/fundraising/context_cc_fundraising_grant_writing.md`
- Relevant catalog: `context_cc_fundraising_federal_grants.md` or `context_cc_fundraising_foundation_grants.md`

## Load/Skip Decision

**Load this directory when**:
- Starting or tracking a grant opportunity through its lifecycle
- Reviewing the state of all active grant applications
- Setting up the pipeline for the first time

**Skip when**:
- No active pipeline runs (all stage directories empty)
- Writing context files about fundraising strategy (use `what/context/fundraising/` instead)
- Working on missions, sessions, or other operational workflows

**Token cost**: ~700 tokens (this AGENTS.md). Stage-level AGENTS.md files add ~400-500 tokens each — load only the active stage.

## References

- Stage instructions: `01_prospect/AGENTS.md` through `07_closeout/AGENTS.md`
- Pipeline paradigm: [how/pipelines/AGENTS](../AGENTS.md)
- Fundraising context: [what/context/fundraising/AGENTS](../../../what/context/fundraising/AGENTS.md)
- Grant operations guide: [context_cc_fundraising_grant_operations](../../../what/context/fundraising/context_cc_fundraising_grant_operations.md)
