---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, pipeline, grant_pipeline, application]
---

# Stage 4: Full Application

## Purpose

Draft and submit a complete grant application. This is the most labor-intensive stage — budget 3-6 weeks for foundation applications, 6-8 weeks for federal.

## Processing Instructions

1. Load the `grant_application` recipe (full tier for federal, standard for foundation)
2. Draft application sections per `context_cc_fundraising_grant_writing.md`:
   - Need statement (data-backed, local community statistics)
   - Program design (Curriculum Council, four tracks, three-tier mentorship, timeline)
   - Evaluation plan (pre/post assessment, attendance, outcome metrics)
   - Organizational capacity (team bios, fiscal sponsor track record)
   - Budget and budget narrative (hardware, stipends, API costs, travel, sponsor fees)
   - Sustainability plan (diversification model, earned revenue, other funders)
   - Logic model diagram
3. Collect supporting documents: letters of support, resumes, financial statements
4. **Human gate**: Present complete application to user for review before submission

## Quality Gate (Exit Criteria)

- [ ] All required sections complete per funder guidelines
- [ ] Budget totals match narrative commitments
- [ ] Letters of support collected from partner organizations
- [ ] Logic model diagram included
- [ ] For federal: compliance with 2 CFR Part 200 requirements
- [ ] **User has reviewed and approved** the application for submission

## Advancement

- **Awarded**: Move file to `05_negotiate/`, update `stage: negotiate`
- **Declined**: Move file to `07_closeout/`, set `stage: application_declined`, document feedback
- **Revise and resubmit**: Update file in place, resubmit
