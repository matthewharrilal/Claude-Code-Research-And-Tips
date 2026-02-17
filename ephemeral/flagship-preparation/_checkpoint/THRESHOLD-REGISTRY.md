# THRESHOLD REGISTRY -- Flagship Pre-Flight

> Single source of truth for ALL numerical values. When a value is resolved, it goes HERE and ONLY here is authoritative.

---

## Resolved Thresholds (from Gap Analysis Section 6 + Pre-Flight Checklist)

| ID | Threshold | Value | Source | Status |
|----|-----------|-------|--------|--------|
| TC-01 | Content-to-void ratio | Graduated: 60% pre-build skeleton, 50% skeleton phase, 70% post-mechanism | Gap analysis §6 | RESOLVED |
| TC-02 | Header proportion gate | 20% warning gate, 25% hard abort | Gap analysis §6 | RESOLVED |
| TC-03 | Review passes | 5 passes | Gap analysis §6 | RESOLVED |
| TC-04 | Mechanism count | Target 12-14, hard cap 16 | Gap analysis §6 | RESOLVED |
| TC-05 | Prompt length | 240 lines total, builder sees 55-80 lines | Gap analysis §6 | RESOLVED |
| TC-06 | Communication mandates | Both deliverable file + SendMessage required | Gap analysis §6 | RESOLVED |
| TC-07 | Max void | 2160px (1.5 viewports at 1440px) | Gap analysis §6 | RESOLVED |
| TC-08 | Constraint pressure experiment | HIGH priority, NOT BLOCKING | Gap analysis §6 | RESOLVED |

## Design System Thresholds (Binary -- from enrichments)

| ID | Threshold | Value | Target File | Status |
|----|-----------|-------|-------------|--------|
| BT-01 | Max contentless space | 30% content coverage per viewport-height increment, 2+ consecutive below = FAIL | prohibitions.md (Prohibition #21) | PENDING -- Phase 1 |
| BT-02 | Transition types | 3 types: HARD CUT / SPACING SHIFT / CHECKPOINT. "No transition" is NOT valid | mechanism-catalog.md | PENDING -- Phase 1 |
| BT-03 | Mechanism density cap | 4 mechanisms max per viewport, every third viewport >= 2 mechanisms | mechanism-catalog.md | PENDING -- Phase 1 |
| BT-04 | Content density floor | Dedicated zone: 3+ paragraphs OR 2+ components. Zone count ceiling by word count | semantic-rules.md | PENDING -- Phase 1 |
| BT-05 | Content-form fit | Form-to-content-volume table. "Enough Content?" gate. "Simplest form" inverse test | semantic-rules.md | PENDING -- Phase 1 |
| BT-06 | Max spacing tokens | --space-max-section: 64px, --space-max-zone: 96px | tokens.css | PENDING -- Phase 1 |
| BT-07 | Front-loaded weight | >= 1 designed moment past 50% scroll depth | prohibitions.md (Prohibition #22) | PENDING -- Phase 1 |

## Skill Thresholds

| ID | Threshold | Value | Target File | Status |
|----|-----------|-------|-------------|--------|
| BT-08 | Void guardrail PAs | PA-50 through PA-53 | PA SKILL.md | PENDING -- Phase 2 |
| BT-09 | Metaphor scoring rubric | Rubric addition to tension-composition SKILL.md | tension-composition SKILL.md | PENDING -- Phase 2 |
| BT-10 | PA-09 severity + PA-05c | Calibration + expansion | PA SKILL.md | PENDING -- Phase 2 |
| BT-11 | PA-17/PA-41 tier elevation | Elevate to Ceiling+ tier | PA SKILL.md | PENDING -- Phase 2 |

## Attention Budget

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Builder prompt lines | 55-80 | N/A | Phase 5 |
| Builder attention units | <= 37 | N/A | Phase 5 |
| Total prompt lines | <= 240 | N/A | Phase 5 |
| Binary rule cost | ~0.75 units each | N/A | Phase 5 |
| Judgment rule cost | ~4 units each | N/A | Phase 5 |
| MAY/SHOULD/CONSIDER count | 0 | N/A | Phase 5 |

---
