---
type: directory_index
created: 2026-04-12
updated: 2026-04-12
last_edited_by: agent_stanley
tags: [directory_index, pipeline, grant_pipeline, loi]
---

# Stage 3: Letter of Inquiry

## Purpose

Draft and submit a Letter of Inquiry (LOI) — a 2-3 page screening document that introduces CC to the funder. Approximately 30-50% of LOIs advance to full proposal invitations.

## Processing Instructions

1. Load the `grant_application` recipe from `what/context/context_recipes.md`
2. Draft LOI following the components in `context_cc_fundraising_grant_writing.md`:
   - Problem statement (1 paragraph, framed for this funder's priorities)
   - Proposed approach (2-3 paragraphs: mentorship model, tracks, governance)
   - Target population (pilot community demographics)
   - Expected outcomes (quantifiable)
   - Budget range (match funder's typical grant size)
   - Organizational capacity (including fiscal sponsor if applicable)
3. **Human gate**: Present LOI draft to user for review before submission

## Quality Gate (Exit Criteria)

- [ ] LOI follows funder's format requirements (page limit, font, sections)
- [ ] Problem framed using funder's specific priority language
- [ ] Budget range is realistic and matches funder's typical awards
- [ ] Fiscal sponsor named if CC lacks independent 501(c)(3)
- [ ] **User has reviewed and approved** the LOI for submission

## Advancement

- **Invited to apply**: Move file to `04_application/`, update `stage: application`
- **Declined**: Move file to `07_closeout/`, set `stage: loi_declined`, add any funder feedback
- **No response after 8 weeks**: Follow up once, then close if no response
