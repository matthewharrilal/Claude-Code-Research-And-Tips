# Conventions Brief Edit Summary -- Task 19 (R05)

**Date:** 2026-02-20
**File modified:** `design-system/pipeline/conventions-brief.md`
**Research basis:** `ephemeral/handoff-research/05-epistemic-certainty.md` (FP-2: Perception Threshold Confidence Flattening)

---

## What Was Changed

### Edit 1: New "Threshold Confidence Tiers" subsection in Section 2 (PERCEPTION)

**Location:** Lines 69-92 (after mechanism breadth paragraph, before closing "physics" paragraph)

**Added:**
- 3-tier definition table: CONFIRMED (N>=3), PROVISIONAL (N=1-2), THEORETICAL (untested)
- 8-row threshold tier assignment table mapping each threshold to its tier and evidence basis
- Framing paragraph making clear that compliance behavior is identical regardless of tier
- Closing paragraph reinforcing that PROVISIONAL thresholds are still hard floors

**Rationale:** The conventions brief previously presented all perception thresholds with identical implied authority ("the physics of human perception"). In reality, background color delta (>=15 RGB) has 11/25 corpus file validation, while font-size delta (>=2px) and padding delta (>=24px) come from a single flagship failure analysis. The tiers make this transparent without weakening compliance requirements.

### Edit 2: Added "Tier" column to Section 4 (MULTI-COHERENCE) threshold table

**Location:** Lines 134-139 (the per-channel perception threshold reference table)

**Added:** A 5th column ("Tier") to the existing 4-column table, tagging each row as CONFIRMED or PROVISIONAL.

**Rationale:** This is the table builders reference most directly during builds. Adding the tier column here means the confidence signal is visible at point-of-use, not just in the Section 2 definition.

---

## Tier Assignments

| Threshold | Assigned Tier | Reasoning |
|-----------|---------------|-----------|
| Background color >= 15 RGB | CONFIRMED | 11/25 corpus files + flagship failure validation |
| Font-size >= 2px | PROVISIONAL | Single data point (flagship failure analysis) |
| Letter-spacing >= 0.03em | PROVISIONAL | Single data point (flagship: 0.001-0.01em invisible) |
| Padding >= 24px | PROVISIONAL | Single data point (flagship failure analysis) |
| Stacked gap <= 120px | PROVISIONAL | Single data point (flagship: 210-276px voids) |
| Multi-coherence >= 3 channels | CONFIRMED | Validated across middle-tier + ceiling + flagship (3 experiments) |
| Component families >= 8 | PROVISIONAL | Derived from CD-006 analysis only |
| Border configurations >= 3 | PROVISIONAL | Derived from CD-006 analysis only |
| Border-left vocabulary (1/3/4px) | CONFIRMED | Corpus-wide validation of 3-tier border system |

---

## What Was NOT Changed

- No threshold VALUES were modified (all floors remain identical)
- No compliance language was weakened (thresholds remain "hard floors")
- The "physics of human perception" framing was preserved -- the tiers ADD context, they do not replace the framing
- No changes to Sections 3-14 beyond the Section 4 table column addition
- The THEORETICAL tier was defined but no current thresholds are assigned to it (included for future use when research-derived values are added before experimental validation)

---

## Net Impact

- +25 lines in Section 2 (new subsection)
- +1 column (5 cells) in Section 4 table
- Total file growth: ~25 lines
- Zero behavioral change for builders (all floors identical)
- Epistemic transparency added at exactly the points identified in FP-2
