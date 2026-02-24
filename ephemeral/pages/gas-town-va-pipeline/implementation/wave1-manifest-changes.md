# Wave 1 MANIFEST.md Changes Summary

**Target file:** `ephemeral/va-extraction/MANIFEST.md`
**Date:** 2026-02-24
**Agent:** manifest-editor

---

## FIX-011: Brief Assembler Feedback Loop — DONE

**Priority:** CRITICAL
**Locations edited:** 2 (Quickstart step 4a + Section 4 Phase 1 step 6)

**Changes:**
- **Quickstart (line 26-31):** Added step 4a after Brief Assembler spawn. Orchestrator runs BV-01 through BV-04 (tier structure, recipe format, zone background hex with >= 15 RGB delta, D-01-D-08 presence). Max 2 revision cycles. ~5 min added.
- **Section 4, Phase 1 (line 382-388):** Added step 6 with identical BV-01 through BV-04 verification loop after Brief Assembler output.
- **Decision Gate (line 394):** Updated to include "AND BV-01 through BV-04" with abort condition after 2 failed revision cycles.
- **Output line (line 390):** Updated to note "(BV-verified)".

**Net impact:** +12 lines (Quickstart) + +8 lines (Section 4) = +20 lines total

---

## FIX-015: OM-15 Builder Self-Evaluation as Required Output — DONE

**Priority:** CRITICAL
**Location:** Appendix E, Builder Prompt (Phase 5)

**Changes:**
- Replaced 1-line Phase 5 ("SELF-EVALUATE: Every zone transition = different room? 3+ transition types? Skeleton has shape?") with multi-line self-evaluation block.
- 4 questions from FIX-015: zone transitions per boundary, distinct transition types count (3+), skeleton shape test, scroll surprise in second half.
- Format specified as `<!-- SELF-EVALUATION: ... -->` HTML comment block, REQUIRED OUTPUT.
- Marked as pipeline-enforced: "the pipeline will reject files missing this block."

**Net impact:** +8 / -1 lines

---

## FIX-016: OM-16 Merge Phase 6 into Phase 5 Self-Evaluation — DONE

**Priority:** HIGH
**Location:** Appendix E, Builder Prompt (Phase 5-6)

**Changes:**
- Removed separate "PHASE 6 - TEMPORAL COMPOSITION" line entirely.
- Added 3 temporal questions (5-7) to the Phase 5 self-evaluation block:
  - Section heights: 3+ different heights?
  - Density arc: increase then resolve? (5 words)
  - Ending: final viewport feel earned?
- Total self-eval: 7 questions (4 from FIX-015 + 3 from FIX-016).
- Also updated Section 4 Phase 2 narrative description to reflect merged self-evaluation (removed "Temporal Composition" bullet, updated "Self-Evaluate" bullet to list all 7 question topics).

**Net impact:** +3 / -1 lines (prompt) + minor narrative adjustments

---

## FIX-022: Conviction Statement Template — DONE

**Priority:** MEDIUM
**Location:** Appendix E, Builder Prompt (before recipe sequence)

**Changes:**
- Added structured 3-sentence conviction template:
  1. "The governing metaphor is ___."
  2. "The emotional arc goes from ___ to ___."
  3. "The compositional strategy is ___."
- Format specified as `<!-- CONVICTION: [your 3 sentences] -->` at TOP of HTML output.
- Replaced old generic "Write a CONVICTION STATEMENT (2-5 sentences) as an HTML comment at the top."
- Also updated Section 4 Phase 2 step 3 to reference structured conviction (3 sentences: metaphor, emotional arc, compositional strategy).

**Net impact:** +4 / -1 lines

---

## FIX-030: Value Tables Routing Strengthening — DONE

**Priority:** MEDIUM
**Location:** Appendix E, Builder Prompt (file reading instruction #5)

**Changes:**
- Changed: `Value Tables (artifact-value-tables.md) — CSS reference values (use as REFERENCE, not constraints)`
- To: `Value Tables (artifact-value-tables.md) — BACKGROUND COLOR PAIRS are Tier 2 LOCKED (see brief; do NOT modify zone background hex values). For all OTHER values: use as REFERENCE — your creative judgment applies, but pre-computed values are perceptually validated.`
- Differentiates locked background colors from creative-authority reference values.

**Net impact:** +2 / -1 lines

---

## Verification Checklist

- [x] Quickstart still flows 1-11 with 4a inserted logically
- [x] Section 4 Phase 1 has BV verification loop with max 2 cycles
- [x] Builder Prompt has all 7 self-eval questions in single Phase 5
- [x] Phase 6 removed from Builder Prompt
- [x] Conviction template structured (3 sentences, specific fields)
- [x] Value tables differentiated (background LOCKED, others REFERENCE)
- [x] No broken references (Phase 5/6 refs in Section 3 routing table point to artifact-builder-recipe.md phases, not prompt template — correct as-is)
- [x] Section 4 Phase 2 narrative updated to match prompt changes

## Fix Status Summary

| Fix ID | Priority | Status | Lines Changed |
|--------|----------|--------|---------------|
| FIX-011 | CRITICAL | DONE | +20 net |
| FIX-015 | CRITICAL | DONE | +7 net |
| FIX-016 | HIGH | DONE | +2 net |
| FIX-022 | MEDIUM | DONE | +3 net |
| FIX-030 | MEDIUM | DONE | +1 net |

**Total net line change:** ~+33 lines (MANIFEST was 1,092 lines, now ~1,125 lines)
