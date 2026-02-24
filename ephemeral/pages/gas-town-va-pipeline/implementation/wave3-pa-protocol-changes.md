# Wave 3: PA Protocol Editorial Additions — Change Log
**File:** `ephemeral/va-extraction/artifact-pa-protocol.md`
**Agent:** pa-protocol-editor
**Date:** 2026-02-24
**Fixes applied:** 8 / 8

---

## FIX-101: Cross-Viewport Comparison Section
**Location:** New section 4.2.1, inserted after auditor assignment table (after line ~404)
**Type:** ADDITION (~12 lines)
**Content:** Added "Cross-Viewport Comparison Requirements" section specifying:
- PA-22, PA-23, PA-46 as questions requiring multi-viewport evidence
- Table with required viewports and comparison method for each
- 4-step method: review 1440px first, review 768px, compare side-by-side, check 1024px as intermediate

## FIX-102: "SHIP WITH FIXES" Verdict Category
**Location:** Part 10.1 ship thresholds table + new section 10.1.1
**Type:** ADDITION (~8 lines)
**Content:** Added "SHIP WITH FIXES" row to ship threshold table with criteria:
- PA-05 >= 3/4 AND all identity gates PASS AND <= 3 MECHANICAL fixes
- New section 10.1.1 defines the protocol: same builder applies fixes, single spot-check auditor verifies
- Distinguishes from SHIP (no fixes needed) and REFINE (structural/compositional fixes)

## FIX-105: Screenshot Count Specification
**Location:** New section 5.1.1, inserted between 5.1 Protocol and 5.2 Capture Sequence
**Type:** ADDITION (~4 lines)
**Content:** Added expected screenshot counts:
- Minimum: ~24 (3 viewports x [1 cold look + ~7 scroll shots])
- Typical: 30-40 (minimum + detail shots)
- Historical reference: Gas Town = 102 (36 core + 66 detail)

## FIX-106: Opus Requirement Softened to STRONG RECOMMENDATION
**Location:** Part 4.4 Agent Requirements table, Auditors A-I row
**Type:** MODIFICATION (1 line)
**Change:** "All 9 auditors MUST be Opus" -> "All 9 auditors STRONG RECOMMENDATION Opus (perceptual judgment quality degrades with smaller models, but not a hard requirement)"
**Rationale:** Per council language alignment — PA protocol used harder language than builder spec without justification

## FIX-107: Fix-Type Classification as REQUIRED Weaver Output
**Location:** Part 4.6 Weaver output list, new item 5
**Type:** ADDITION (~3 lines)
**Content:** Added "Fix-Type Classification Summary" as REQUIRED output:
- Aggregate count by type (N MECHANICAL, N STRUCTURAL, N COMPOSITIONAL)
- Direct link to Ship Decision: SHIP WITH FIXES requires ALL MECHANICAL and <= 3
- 1-sentence remediation path per fix type

## FIX-108: Emotional Arc Synthesis as REQUIRED Weaver Output
**Location:** Part 4.6 Weaver output list, new item 6
**Type:** ADDITION (~3 lines)
**Content:** Added "Emotional Arc Synthesis" as REQUIRED output:
- Score per register (SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE) on 1-10 scale
- Overall arc shape classification
- Strongest and weakest register with evidence citations
- Note added: items 5 and 6 are now REQUIRED; verdict INCOMPLETE if missing

## FIX-121: Tier 5 Provisional Scoring Note
**Location:** Part 2.3 Tier 5 Scoring, immediately after scoring table
**Type:** ADDITION (~3 lines)
**Content:** Blockquote noting:
- Thresholds are PROVISIONAL with N=1 validation
- Treat as hypotheses until N=3 data points
- Boundary cases should carry "threshold is provisional" caveat
- Weaver should note whether score feels like natural break or arbitrary cutoff

## FIX-122: PA-69 Coherence Direction Check
**Location:** Part 3.8 Pipeline Integration, PA-69 row
**Type:** MODIFICATION (~2 lines appended)
**Change:** Added to PA-69 question text: "**Additionally:** Do the changes at each boundary AGREE with each other (e.g., darker bg + heavier type + tighter spacing = all saying 'denser'), or do some changes CONTRADICT others (e.g., darker bg but lighter type)?"
**Rationale:** Transition intensity alone doesn't capture coherence direction — changes can be varied but incoherent

---

## Numbering Impact

Weaver output items renumbered:
- Old: 0-6 (Manifest, PA-05, Tier 5, Combined Verdict, Top-5 Fixes, Ship Decision, Emotional Arc Assessment)
- New: 0-7 (Manifest, PA-05, Tier 5, Combined Verdict, Top-5 Fixes, **Fix-Type Classification**, **Emotional Arc Synthesis**, Ship Decision)

Ship thresholds table gained one row (SHIP WITH FIXES between SHIP and REFINE).

No other section numbering affected.

## Verification Checklist
- [x] FIX-101 applied — section 4.2.1 exists with table + method
- [x] FIX-102 applied — SHIP WITH FIXES in table + section 10.1.1
- [x] FIX-105 applied — section 5.1.1 with min/typical/historical counts
- [x] FIX-106 applied — "MUST" -> "STRONG RECOMMENDATION" in agent table
- [x] FIX-107 applied — item 5 in weaver output (Fix-Type Classification)
- [x] FIX-108 applied — item 6 in weaver output (Emotional Arc Synthesis)
- [x] FIX-121 applied — provisional note after Tier 5 scoring table
- [x] FIX-122 applied — PA-69 augmented with coherence direction check
- [x] No other files touched (strict file ownership)
