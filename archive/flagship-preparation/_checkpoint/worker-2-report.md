# Enrichment Worker 2 Report: A1 + A2 Applied to mechanism-catalog.md

**Date:** 2026-02-17
**Agent:** enrichment-worker-2
**Target File:** `design-system/compositional-core/grammar/mechanism-catalog.md`

---

## Summary

Both enrichments (A1: Transition Grammar, A2: Restraint Protocol) have been successfully applied to mechanism-catalog.md using the EXACT text from `02-enrichment-specifications.md`.

## Line Count

- **Before:** 1,093 lines
- **After:** 1,218 lines
- **Lines added:** 125 (80 for A1 + 45 for A2, including separator lines)
- **Threshold met:** YES (>= 1,213 required)

## Verification Checklist

| Check | Result | Line Number |
|-------|--------|-------------|
| "Transition Grammar" exists | PASS | 944 |
| "Restraint Protocol" exists | PASS | 1029 |
| "HARD CUT" exists within Transition Grammar | PASS | 956, 1017 |
| "SPACING SHIFT" exists within Transition Grammar | PASS | 973, 1018 |
| "CHECKPOINT" exists within Transition Grammar | PASS | 990, 1019, 1025 |
| "4 distinct mechanisms" within Restraint Protocol | PASS | 1039 |
| A2 follows A1 (correct ordering) | PASS | A1 at 944, A2 at 1029 |
| Both sections between Combination Rules and Extraction Validation | PASS | Combination Rules ends ~941, Extraction Validation at ~1070 |

## Insertion Points

- **A1 (Transition Grammar):** Inserted after line 941 (end of Combination Rules `---` separator), before Extraction Validation section
- **A2 (Restraint Protocol):** Inserted immediately after A1, separated by `---`, before Extraction Validation section

## Issues Encountered

None. Both insertions were clean with no conflicts.

## Level 2 Metacognitive Observations

### 1. Transition Grammar Interaction with Existing Mechanisms

The new Transition Grammar section (A1) provides the CONNECTIVE TISSUE between the 18 individual mechanisms documented above it. Previously, the catalog told builders WHAT mechanisms to use (via the Usage Guidance flowchart) and WHICH mechanisms are compatible (via Combination Rules), but said nothing about HOW zones using different mechanisms should hand off to each other. The 3 transition types (HARD CUT, SPACING SHIFT, CHECKPOINT) map cleanly to the existing vocabulary:

- HARD CUT uses `3px solid var(--color-primary)` -- this is the same border weight/color already documented in Mechanism #13 (Dark Header) and the Combination Rules' validated example (CD-006)
- SPACING SHIFT references `var(--space-8)`, `var(--space-16)`, `var(--space-4)` -- these are exact token references from the existing spacing scale
- CHECKPOINT uses `var(--color-zone-breathing)` and `var(--font-mono)` -- both are existing tokens from Mechanism #7 (Zone Background Differentiation)

The transition types are essentially COMPOSITIONS of existing mechanisms, not new mechanisms. This is a good design choice -- it doesn't expand the vocabulary, it teaches how to USE the existing vocabulary at boundaries.

### 2. Restraint Protocol Consistency with Existing Recommendations

The "4 mechanisms per viewport" cap in A2 has an interesting interaction with the existing Mechanism Deployment Recommendations section (lines 1028-1053 in the original, now shifted down). The existing section recommends deploying 13 mechanisms as "Always Extract" for VERY HIGH metaphor independence. The Restraint Protocol doesn't contradict this -- it says deploy them ACROSS the page, not WITHIN a single viewport. The distinction between DEPLOYED (in CSS) and OPERATING (visible in viewport) is critical and well-drawn.

The tier-based restraint ratios (Middle 8-10, Ceiling 12-15, Flagship 16-18) are consistent with the existing tier model documented in the Scales section (lines 830-867). The Middle tier requiring 2 scales (Page + Component) naturally distributes mechanisms across the page, making the "4 per viewport" cap achievable even with 8-10 total mechanisms.

### 3. A1 + A2 in Practice (Builder Workflow)

A builder would use these two sections together in a specific sequence:

1. **After selecting mechanisms** (Usage Guidance flowchart) and **checking compatibility** (Combination Rules), the builder has a SET of mechanisms to deploy
2. **A1 (Transition Grammar):** For each zone boundary, classify the transition type (HARD CUT / SPACING SHIFT / CHECKPOINT) using the single binary question ("Same domain?")
3. **A2 (Restraint Protocol):** Distribute the selected mechanisms across the page so no viewport has >4 and every third has >=2

This creates a natural ORDER: select (existing) -> connect (A1) -> distribute (A2). The three sections form a complete mechanism deployment workflow.

### 4. Connection to Existing Combination Rules

The A1 Transition Grammar section is a logical EXTENSION of the Combination Rules section. Combination Rules tell you which mechanisms go well TOGETHER within a zone. Transition Grammar tells you how to BRIDGE between zones. They answer different questions:

- Combination Rules: "What mechanisms work WITHIN this zone?"
- Transition Grammar: "How does this zone CONNECT to the next zone?"

The placement (A1 immediately after Combination Rules) makes this relationship clear. A builder reading sequentially will naturally move from "what goes together" to "how they hand off."

### 5. Existing Content Updates Needed

No existing content in the catalog needs updating to reference the new sections. The new sections are additive (they ADD guidance that didn't exist) rather than corrective (they don't CHANGE existing guidance). The Combination Rules section's "Compatible combinations" and "Incompatible combinations" remain valid as-is.

However, if future updates are made to the Usage Guidance flowchart (lines 903-927), it might benefit from a Step 8: "Assign transition types to zone boundaries (see Transition Grammar)" and Step 9: "Check mechanism distribution (see Restraint Protocol)." This is not a required change but would improve the flowchart's completeness.

---

**END WORKER-2 REPORT**
