# TC SKILL.md Edit Summary

**Editor:** tc-skill-worker
**Date:** 2026-02-20
**File:** `~/.claude/skills/tension-composition/SKILL.md`
**Region:** Phase 4.5 Output Template (lines ~1499-1615 after edits)

---

## Edits Applied (8 tasks, 8 edits)

### Task 2 (P1-2): Mechanism Pairing — Section 4
**Location:** After "Distribution: >=2 mechanisms per third of page length" line
**Added:** REINFORCING PAIRS subsection requiring 2-4 mechanism pairs in format "#N + #M: Both encode [SEMANTIC] at [BOUNDARY]. Deploy together." These pairs ARE multi-coherence.
**Research basis:** Report 01 (compression analysis) Section 5 identified pairing loss as P1 BLOCKING — flat mechanism lists produce STRUCTURED but not COMPOSED output.

### Task 13 (P3-3): Rejected Mechanisms — Section 4
**Location:** Same edit as Task 2, immediately after REINFORCING PAIRS
**Added:** REJECTED subsection requiring 3+ rejected mechanisms with format "REJECTED: [mechanism] (reason: [why])". Prevents builder from re-introducing mechanisms TC agent excluded.
**Research basis:** Report 01 Section 5, Report 05 FP-3.

### Task 8 (P2-4): Metaphor Quality Grade — Section 1
**Location:** After "Name the metaphor" line
**Added:** QUALITY score line with 6-criterion breakdown format: "QUALITY: [score]/18 (Res:[n] Iso:[n] ResS:[n] Feas:[n] PRisk:[n] PCost:[n])". Maps to verdict levels (STRONG/VIABLE/WEAK). Includes builder calibration notes for low sub-scores.
**Also added:** RISK PROFILE (2-3 lines) after BECAUSE test — perceptual cost score, what to resist, what to amplify.
**Research basis:** Report 05 FP-3 (BUG verdict — metaphor quality grade is high-signal, low-cost). Report 01 Section 4 (metaphor semantic transfer loss).

### Task 7 (P2-3): Perception Thresholds — Section 6
**Location:** Before "Embedded perception checks" line
**Added:** Perception threshold reference table with 6 properties and minimum deltas (>=15 RGB backgrounds, >=2px font-size, >=0.5px letter-spacing, >=24px padding, >=200 font-weight units, <=120px stacked gap). Instruction that every PERCEPTION CHECK line must reference a specific threshold.
**Research basis:** Report 05 FP-2 (threshold confidence flattening). Report 08 Part 1A (DESIGNED requires perceptible CSS).

### Task 9 (P2-5): Recipe Format Conventions — Section 6
**Location:** Replaced "Recipe format" paragraph
**Added:** 4-point mandatory format for every recipe step: (1) action verb, (2) specific CSS property, (3) concrete value, (4) build-sequence ordering (backgrounds->borders->typography->components). Includes WRONG/RIGHT examples.
**Research basis:** Report 01 Section 2 (recipe vs checklist — the proven winner). Report 08 Part 1A (sub-perceptual CSS root cause = abstract directions instead of values).

### Task 10 (P2-6): Mechanism Effectiveness Tags — Section 4
**Location:** After "1-line CSS recipe" line
**Added:** Per-mechanism perceptual effectiveness tag: (HIGH vis), (MED vis), or (LOW vis) from mechanism-catalog. HIGH-vis can anchor boundaries alone; LOW-vis MUST pair with HIGH-vis.
**Research basis:** Report 05 FP-1 (mechanism confidence flattening — PARTIAL BUG verdict). Report 01 Section 5 (pairing intelligence loss).

### Task 12 (P3-2): Pacing Prediction — Section 2
**Location:** Extended "For each zone" line
**Added:** Per-zone pacing annotation [DENSE|BREATHING|TRANSITIONAL] and layout topology [single-column|2-column grid|3-column|bento|golden-ratio]. Added explanation of pacing's role in guiding builder visual investment.
**Research basis:** Report 01 Section 6.4 (pacing prediction lost). Report 03 Boundary 3 (TC brief zone architecture gaps).

### Task 14 (R08-1): Boundary-Keyed CSS Table — Section 6
**Location:** Before "Top 5 mechanism CSS snippets" line
**Added:** Boundary-keyed CSS table format requiring per-boundary specification of 4 CSS channel shifts (Chromatic, Typographic, Spatial, Structural) with exact from/to values and deltas. Minimum 3 channels required per boundary.
**Research basis:** Report 08 #1 ranked improvement (highest P(4/4) impact ~0.25 PA-05 points). Report 03 Boundary 3 (biggest semantic cliff is TC Brief -> Builder).

---

## Net Changes

- **Lines added:** ~45 lines across 8 insertion points
- **Lines modified:** 2 lines (expanded "For each zone" in Section 2, replaced "Recipe format" paragraph in Section 6)
- **Lines removed:** 0
- **Sections affected:** Section 1 (STRUCTURAL METAPHOR), Section 2 (ZONE ARCHITECTURE), Section 4 (SELECTED MECHANISMS), Section 6 (BUILD RECIPE)
- **No structural changes to template format** — all 8 sections preserved, same ordering, same overall brief structure

## Verification

Re-read of lines 1495-1624 confirms:
- All 8 section headers intact (### 1 through ### 8)
- No duplicate content
- No corruption of existing template text
- New additions are additive (extend existing bullet points or add new subsections)
- Brief Length guidance still says "Target 80-120 lines" (unchanged — the TEMPLATE is longer but the BRIEF output remains 80-120 lines)
