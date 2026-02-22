# PA Questions Changelog -- Task 8: Add PA-68

**Date:** 2026-02-20
**Agent:** pa-questions-surgeon

## Change Summary

Added PA-68 (Metaphor Spatial Coverage) to Tier 5 compositional depth questions. Updated all cross-references across 3 files.

## PA-68 Specification

- **ID:** PA-68
- **Name:** Metaphor Spatial Coverage
- **Stack Layer:** Metaphor Coverage
- **Auditor Assignment:** G (Metaphor+Ideology)
- **Detects:** Whether the page's organizing metaphor persists across all scroll thirds (STRUCTURAL) or fades after introduction (ANNOUNCED)
- **Scoring:** YES = metaphor expression in all three scroll thirds, feels consistent; NO = concentrated in top third, disappears, or feels like afterthought

## Files Modified

### 1. `design-system/pipeline/flagship-pa-questions.md`

| Edit | What Changed |
|------|-------------|
| Header line | "8 questions" -> "9 questions", "56 total" -> "57 total" |
| PA-68 block | Added full question block (question, detects, scoring, auditor assignment) after PA-67 and before Tier 5 Aggregate Scoring |
| Tier 5 Aggregate Scoring table | Updated all thresholds: 7-8/8 -> 8-9/9, 5-6/8 -> 6-7/9, 3-4/8 -> 3-5/9, 0-2/8 -> 0-2/9 |
| Auditor Assignment Summary | Auditor G row: "(none)" -> "PA-68", total 3 -> 4 |
| Total line | "48 standard + 8 Tier 5 = 56" -> "48 standard + 9 Tier 5 = 57" |

### 2. `~/.claude/skills/build-page/SKILL.md`

| Edit | What Changed |
|------|-------------|
| Line 16 (MISSION) | "Tier 5 >= 6/8" -> "Tier 5 >= 7/9" |
| Auditor G assignment row | "PA-42, 43, 44" -> "PA-42, 43, 44, **68**" |
| Weaver Tier 5 count | "PA-60 through PA-67" -> "PA-60 through PA-68" |
| Weaver thresholds | "7-8 COMPOSED / 5-6 APPROACHING / 3-4 STRUCTURED" -> "8-9 COMPOSED / 6-7 APPROACHING / 3-5 STRUCTURED" |
| PA matrix line | "56 questions x 9 auditors" -> "57 questions x 9 auditors" |
| Weaver verdict (SHIP) | "Tier 5 >= 6/8" -> "Tier 5 >= 7/9" |
| Weaver verdict (RESERVATION) | "4-5/8" -> "5-6/9" |
| Cycle 2-3 re-verify | "all 8 Tier 5" -> "all 9 Tier 5" |
| Cycle limits table | "All 56" -> "All 57" |
| Two-Score Verdict table | ">= 6/8" -> ">= 7/9" |
| Full Verdict Matrix | ">= 6/8" -> ">= 7/9", "4-5/8" -> "5-6/9", "0-3/8" -> "0-4/9" |

### 3. `~/.claude/skills/perceptual-auditing/SKILL.md`

| Edit | What Changed |
|------|-------------|
| Line 7 (header) | "56 PA questions" -> "57 PA questions" |
| Tier 5 question table | Added PA-68 row (Metaphor Coverage) |
| Tier 5 scoring text | "PA-60 through PA-67" -> "PA-60 through PA-68" |
| Tier 5 scoring thresholds | 7-8/8 -> 8-9/9, 5-6/8 -> 6-7/9, 3-4/8 -> 3-5/9 |
| Combined verdict matrix | Row ranges updated: 3-4 -> 3-5, 5-6 -> 6-7, 7-8 -> 8-9 |
| Mode 4 team tree | Auditor G: "(PA-42,43,44) [3 Qs]" -> "(PA-42,43,44 + T5: PA-68) [4 Qs]" |
| Mode 4 total | "48 standard + 8 Tier 5 = 56" -> "48 standard + 9 Tier 5 = 57" |
| Mode 4 description | "All 56 questions (48 standard + 8 Tier 5)" -> "All 57 questions (48 standard + 9 Tier 5)" |
| Mode 1 note | "PA-60-67" -> "PA-60-68" |
| Weaver protocol | "0-8/8" -> "0-9/9", "PA-60 through PA-67" -> "PA-60 through PA-68" |
| Final Verdict table | ">= 6/8 SHIP" -> ">= 7/9 SHIP", "4-5/8" -> "5-6/9", "0-3/8" -> "0-4/9" |

## Threshold Scaling Logic

Original thresholds (8 questions):
- COMPOSED: 7-8/8 (87.5-100%)
- APPROACHING: 5-6/8 (62.5-75%)
- STRUCTURED: 3-4/8 (37.5-50%)
- VOCABULARY ONLY: 0-2/8 (0-25%)

New thresholds (9 questions), maintaining proportional bands:
- COMPOSED: 8-9/9 (88.9-100%)
- APPROACHING: 6-7/9 (66.7-77.8%)
- STRUCTURED: 3-5/9 (33.3-55.6%)
- VOCABULARY ONLY: 0-2/9 (0-22.2%)

SHIP threshold scaled: 6/8 (75%) -> 7/9 (77.8%). Slightly higher bar proportionally, but the closest integer threshold that maintains the spirit of "strong majority YES."

## Verification

- [x] PA-68 follows exact format of PA-60 through PA-67
- [x] Question uses perceptual language (what you SEE), not CSS language
- [x] Scoring rubric is binary (YES/NO) with clear thresholds
- [x] No existing PA questions were modified
- [x] Standard 48 questions untouched
- [x] All three files updated consistently
- [x] No stale "56" or "8 Tier 5" references remain in any modified file
