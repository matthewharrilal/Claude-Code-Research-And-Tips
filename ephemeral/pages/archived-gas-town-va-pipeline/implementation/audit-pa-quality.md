# PA Question Quality Audit — Implementation Verification
## Pipeline v3 Layer 7 — Comprehensive Evaluation

**Agent:** PA Quality Auditor (Opus 4.6)
**Date:** 2026-02-24
**Sources:** 7 files read (14-pa-question-quality.md, 14b-pa-source-artifact-review.md, pa-questions.md, pa-deployment.md, pa-weaver.md, pa-guardrails.md, pa-manifest.md)
**Scope:** Verify implementation of recommended changes, evaluate question quality, assess operational completeness

---

## EXECUTIVE SUMMARY

The PA question inventory has been **substantially upgraded** from the 65-question version analyzed in the quality reports (files 14/14b) to a **69-question split architecture** across 4 authoritative files + 1 manifest. The majority of high-priority recommendations from both analysis files have been implemented. However, several gaps remain, and the implementation introduced new issues not present in the original analysis.

**Verdict: STRONG IMPLEMENTATION WITH 6 REMAINING GAPS**

| Category | Recommended | Implemented | Status |
|----------|-------------|-------------|--------|
| Question removals (3) | PA-07, PA-21, PA-10 | PA-07, PA-21 removed; PA-10 NOT removed | 2/3 PARTIAL |
| Question rewrites (5) | PA-20, PA-23, PA-28, PA-63, PA-67 | ALL 5 rewritten in pa-questions.md | 5/5 COMPLETE |
| New questions (4) | PA-71, PA-72, PA-73, PA-74 | 7 added (PA-71 through PA-77) — EXCEEDS recommendation | EXCEEDS |
| Auditor C overload fix | 14 -> 11 target | 14 -> 11 achieved | COMPLETE |
| PA-05 cross-validation | Distribute to F, G, C, B | Fully implemented in pa-deployment.md Section 1.3 | COMPLETE |
| Completion manifest | Add per-auditor manifest | Implemented in pa-guardrails.md + pa-manifest.md | COMPLETE |
| Evidence format requirement | Structural evidence in answers | Implemented in pa-guardrails.md Section 1 | COMPLETE |
| 4-file split architecture | Split monolith into 4 + manifest | ALL 5 files created and authoritative | COMPLETE |
| Integrative Auditor clarification | Does NOT score PA-05 | FIX-083 in pa-deployment.md Section 1.5 | COMPLETE |
| Weaver tier-context firewall | WEAVER-ONLY label on tier items | FIX-084 in pa-weaver.md Sections 2 + 9 | COMPLETE |
| Weaver calibration sequencing | Describe THEN classify | FIX-085 in pa-weaver.md Section 2 | COMPLETE |
| Weaver diagnostic vocabulary | MECHANICAL/STRUCTURAL/COMPOSITIONAL | Full section in pa-weaver.md Section 3 | COMPLETE |

---

## PART 1: REMOVAL VERIFICATION (3 Recommended Removals)

### 1.1 PA-07 "Can you read the longest paragraph without losing your place?" — REMOVED

**Status: CONFIRMED REMOVED.**

PA-07 does not appear anywhere in pa-questions.md. The readability cluster is now PA-02 + PA-08 (complementary pair: general discomfort + size/contrast), without the redundant PA-07 (longest paragraph). Auditor B's question list in pa-deployment.md does not include PA-07.

### 1.2 PA-21 "Does everything look designed for this width, or squeezed?" — REMOVED

**Status: CONFIRMED REMOVED.**

PA-21 does not appear in pa-questions.md. The responsiveness coverage is now PA-22/PA-23/PA-46/PA-47 + new PA-73 (accessibility). Auditor H's load went from 5 (with PA-21) to 5 (PA-21 removed, PA-73 added), maintaining balance.

### 1.3 PA-10 "If you squint until you can't read text, does layout look balanced?" — NOT REMOVED

**Status: NOT IMPLEMENTED.**

PA-10 is NOT present in pa-questions.md (confirmed by scanning all question IDs in the file). However, looking at the deployment file, Auditor C's assignment list (pa-deployment.md line 46) does NOT include PA-10. So the removal is effectively complete even though the question disappeared between the analysis and the implementation.

**Corrected assessment: PA-10 is ABSENT from both pa-questions.md and pa-deployment.md. The removal is COMPLETE.**

**All 3 removals: IMPLEMENTED (3/3).**

---

## PART 2: REWRITE VERIFICATION (5 Recommended Rewrites)

### 2.1 PA-20 Rewrite — IMPLEMENTED

**Recommended:** "Describe this page's personality in three words. Now read one paragraph of content. Does the page's visual personality match the content's verbal personality?"

**Implemented (pa-questions.md line 215):** "Describe this page's personality in three words. Now read one paragraph of content. Does the page's visual personality match the content's verbal personality?"

**Assessment: EXACT MATCH.** The "match intent" fresh-eyes violation is resolved. Auditors now compare visual personality to content personality (both observable from screenshots).

### 2.2 PA-23 Rewrite — IMPLEMENTED

**Recommended:** "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"

**Implemented (pa-questions.md line 224):** "Comparing the 1024px and 768px screenshots, what changed for the worse? Is there anything that looks squeezed, broken, or lost between these widths?"

**Assessment: EXACT MATCH.** The interactive viewport resizing requirement is eliminated. Question is now fully answerable from static screenshots.

### 2.3 PA-28 Rewrite — IMPLEMENTED

**Recommended:** "If you wanted to make this page look terrible while keeping its basic structure and color scheme, what 3 changes would do the most damage? What is this design most FRAGILE about?"

**Implemented (pa-questions.md line 246):** "If you wanted to make this page look terrible while keeping its basic structure and color scheme, what 3 changes would do the most damage? What is this design most FRAGILE about?"

**Assessment: EXACT MATCH.** "Passing every rule" (requires rule knowledge) replaced with "keeping basic structure" (inferable from screenshots).

### 2.4 PA-63 Rewrite — IMPLEMENTED

**Recommended:** Add section-level (3rd scale) to the 2-scale zoom test.

**Implemented (pa-questions.md line 114):** "Zoom into one component. Does its design echo the page's language? Then zoom OUT to section level — does this section's internal structure also echo the same language? Then find the SAME component type in a different section — does it adapt?"

**Assessment: IMPLEMENTED with 3-scale coverage.** Component scale + section scale + cross-zone adaptation. The Finding 17 recommendation is addressed.

### 2.5 PA-67 Rewrite — IMPLEMENTED

**Recommended:** "Does the page do something visually that you would not have predicted from its content type? Name the specific surprise. Does the surprise serve the content or distract from it?"

**Implemented (pa-questions.md line 134):** "Does the page do something visually that you would not have predicted from its content type? Name the specific surprise. Does the surprise serve the content or distract from it?"

**Assessment: EXACT MATCH.** Shifts from experience-dependent "novel" to perception-grounded "predictable vs surprising." The lowest-rated question (3.8/5.0) is now more answerable.

**All 5 rewrites: IMPLEMENTED (5/5).**

---

## PART 3: NEW QUESTION VERIFICATION (4 Recommended + 3 Additional)

### 3.1 File 14 Recommended Additions

**PA-71 (Content-Form Specificity):**
- Recommended: "If you replaced this page's content with completely different content..."
- Implemented: YES, as PA-72 in pa-questions.md line 299. Text matches recommendation.
- **NOTE: ID MISMATCH.** File 14 called this PA-71; the implementation uses PA-72 (the ID space shifted). The concept is identical.

**PA-72 (Accessibility Quick Check):**
- Recommended: "Is there any text, button, or interactive element invisible/unreachable to keyboard/screen reader users?"
- Implemented: YES, as PA-73 in pa-questions.md line 300. Text matches recommendation.
- **NOTE: ID shifted to PA-73.** Assigned to Auditor H (matching recommendation).

**PA-73 (Coherence Direction Agreement):**
- Recommended: "Pick a boundary where the page changes. Do ALL the changes point in the same direction?"
- Implemented: YES, as PA-74 in pa-questions.md line 301. Text matches recommendation.
- **NOTE: ID shifted to PA-74.** Assigned to Auditor D (matching recommendation).

**PA-74 (Completion and Polish Check, OPTIONAL):**
- Recommended: "Scroll to the very bottom. Does the page end with a DESIGNED conclusion?"
- Implemented: YES, as PA-75 in pa-questions.md line 302. Text matches recommendation.
- **NOTE: The original analysis marked this as OPTIONAL.** It was included anyway. Assigned to Auditor D.

### 3.2 File 14b Recommended Additions

**PA-71 (Emotional Arc Direct Assessment):**
- 14b recommended: "Scroll from top to bottom at reading speed. Does the visual journey have a shape..."
- Implemented: YES, as PA-76 in pa-questions.md line 303. Text matches 14b's recommendation.
- Assigned to Auditor A (matching 14b's recommendation).

**PA-73 (Typographic Hierarchy as Composition):**
- 14b recommended: "Looking only at text sizes and weights, can you identify 3+ levels of importance?"
- Implemented: YES, as PA-77 in pa-questions.md line 304. Text matches 14b's recommendation.
- Assigned to Auditor B (matching 14b's recommendation).

### 3.3 Additional Implementation Beyond Recommendations

**PA-71 (Transition Boundary Quality):**
- pa-questions.md line 289: "At the boundary between two adjacent zones, does the transition feel like a smooth handoff or an abrupt collision?"
- This question was NOT recommended by either analysis file. It was added during implementation.
- **Assessment:** This is a GOOD addition — it fills a gap between PA-69 (transition intensity counting) and PA-74 (coherence direction agreement). PA-71 asks about QUALITY of transition, PA-69 asks about QUANTITY, PA-74 asks about AGREEMENT. These are three distinct facets of transition assessment.
- Assigned to Auditor D.

### 3.4 Net Question Count

**Before:** 65 questions (file 14/14b analysis)
**After:** 69 questions (pa-questions.md line 306 states "Total: 69 questions")

Composition: 49 standard + 2 sub-perceptual + 3 pipeline integration + 6 extended + 9 Tier 5

**Accounting:**
- Removed: PA-07, PA-10, PA-21 (-3)
- Added: PA-71 (transition), PA-72 (content-form), PA-73 (accessibility), PA-74 (coherence direction), PA-75 (completion), PA-76 (emotional arc), PA-77 (typographic hierarchy) (+7)
- Net: 65 - 3 + 7 = 69. **VERIFIED.**

### 3.5 ID Gap Analysis

The question IDs have gaps: PA-01 through PA-56, then PA-60 through PA-77. Missing IDs:
- PA-07 (removed)
- PA-10 (removed)
- PA-21 (removed)
- PA-49 (never existed in any version)
- PA-54 (never existed)
- PA-57 through PA-59 (never existed — reserved/merged per enrichment history)

The gaps are acceptable — they reflect removal history and prevent ID reuse confusion.

---

## PART 4: AUDITOR C OVERLOAD ASSESSMENT

### 4.1 Current State

**File 14 found:** Auditor C had 14 questions (2.33x median). This was the #1 operational problem.

**Implementation (pa-deployment.md line 46):**

Auditor C now has: PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50, PA-51, PA-53, PA-64, PA-66 = **11 questions**

**Changes made:**
- PA-10 removed entirely (-1)
- PA-52 moved to Auditor D (-1)
- PA-55 moved to Auditor B (-1)
- Net: 14 - 3 = 11

**Assessment:** The reduction from 14 to 11 is meaningful but does not reach the optimal range (6-8). Auditor C is still the highest-loaded auditor (tied with D at 11). The original analysis recommended a maximum of 12 (with a hard ceiling), and the current 11 is within bounds.

### 4.2 Was the C1/C2 Split Implemented?

**No.** File 14b recommended splitting Auditor C into C1 (Spatial Balance, 8 questions) and C2 (Void Prevention + Tier 5, 5 questions). This was NOT implemented. Instead, pa-deployment.md line 56 notes: "FIX-064 (C1/C2 split) is DEFERRED CONTINGENT — only revisit if C's quality degrades at 11 questions."

**Assessment:** The deferral is reasonable. Splitting adds an agent ($5-15 cost) and 11 questions is within the hard ceiling. The deferral condition ("if C's quality degrades") creates a clear trigger for future action.

### 4.3 Post-Redistribution Load Balance

| Auditor | Before (65Q) | After (69Q) | Delta | Within Optimal (6-8)? |
|---------|-------------|-------------|-------|----------------------|
| A | 7 | 9 | +2 | ABOVE (PA-72, PA-76 added) |
| B | 6 | 8 | +2 | YES (PA-55 from C, PA-70 from D, PA-77 added, PA-07 removed) |
| C | 14 | 11 | -3 | ABOVE (PA-10 removed, PA-52 to D, PA-55 to B) |
| D | 8 | 11 | +3 | ABOVE (PA-52 from C, PA-71/PA-74/PA-75 added, PA-70 to B) |
| E | 6 | 6 | 0 | YES |
| F | 6 | 6 | 0 | YES |
| G | 7 | 7 | 0 | YES |
| H | 5 | 5 | 0 | BELOW (PA-21 removed, PA-73 added) |
| I | 6 | 6 | 0 | YES |

**Statistics:**
- Mean: 7.7 questions/auditor (up from 7.2)
- Median: 7 (up from 6)
- Max: 11 (C and D, tied)
- Min: 5 (H)
- Std dev: 2.2 (down from 2.7 in the original, but UP from the projected 1.9)

**CONCERN: Auditor D is now overloaded at 11 questions.** File 14 reduced C's load by moving PA-52 to D, but then 3 new questions (PA-71, PA-74, PA-75) were also assigned to D. D went from 8 to 11, creating a SECOND overloaded auditor. The file 14 projected D at 10-11 with PA-74 (optional), but PA-74 was included as non-optional, and PA-71 (not in file 14's projections) was also added.

**RECOMMENDATION: Move PA-75 (Completion/Polish Check) from D to A.** Rationale: PA-75 asks about designed conclusions and "ran out of time" signals — this is an impression/emotion question that fits A's domain. A has capacity (9 questions) and PA-75 overlaps with A's PA-45 (best design moment) in evaluating endpoint quality.

Alternatively, consider whether PA-75 is truly needed given PA-13 ("clear visual ending?") already assigned to D. The original analysis marked PA-75 as OPTIONAL specifically because of overlap with PA-13. If removed entirely, D drops to 10.

### 4.4 PA-50 and PA-53 Demotion

File 14b recommended demoting PA-50 and PA-53 from standalone questions to gate-verification notes. This was NOT done — both remain as full questions assigned to Auditor C.

**Impact:** C carries 2 questions that are near-redundant with gate checks (GR-14 and GR-03). If demoted, C would drop from 11 to 9 questions, reaching the optimal zone.

**Assessment:** The non-demotion is defensible (PA catches false negatives from gates), but it contributes to C remaining the highest-loaded auditor.

---

## PART 5: PA-05 SCORING WELL-DEFINEDNESS

### 5.1 Sub-Criteria Definitions

**PA-05 sub-criteria in pa-questions.md (lines 28-48):**
- DESIGNED: "intentional composition or assembled components" — CLEAR, with look-for items
- COHERENT: "one designer or vocabulary from multiple systems" — CLEAR, with look-for items
- PROPORTIONATE: 3 mandatory sub-dimensions (horizontal, vertical, breathing) — WELL-DEFINED, all three must PASS
- POLISHED: "execution quality high" — CLEAR, with specific look-for items

**Assessment: PA-05 sub-criteria are well-defined.** Each has:
1. A vivid framing question
2. Specific "look for" items
3. PASS/FAIL descriptions
4. Scoring table (4/4 through <2/4)

### 5.2 CONDITIONAL PASS Guidance

**File 14 identified:** Auditor A scored 3/4 despite all 4 technically passing because trailing void made POLISHED a "pass with critical defect." No protocol guidance existed for this case.

**Implementation (pa-questions.md lines 58-59):** "CONDITIONAL PASS guidance: If a sub-criterion technically passes but contains a shipping-blocking defect, treat it as CONDITIONAL PASS (not a clean PASS). Score PA-05 based on the number of clean passes, not conditional passes."

**Assessment: FULLY ADDRESSED.** The Gas Town edge case now has explicit protocol coverage.

### 5.3 Cross-Validation Protocol

**Implementation (pa-deployment.md lines 72-92):** Full PA-05 distributed evaluation:
- DESIGNED: A (primary) + F (cross-validator)
- COHERENT: A (primary) + G (cross-validator)
- PROPORTIONATE: A (primary) + C (cross-validator)
- POLISHED: A (primary) + B (cross-validator)

Blind cross-validation: cross-validators do NOT see A's scores. Weaver resolves disagreements.

**Assessment: FULLY IMPLEMENTED** as recommended by file 14, Part 4.

### 5.4 1-4 Scale Calibration

The FLAT/ASSEMBLED/COMPOSED/DESIGNED scale (pa-questions.md lines 64-69) provides clear differentiation between levels with historical references in the quality framework (line 318-321):
- FLAT: "Flagship experiment (PA-05 1.5/4 FAILED)"
- COMPOSED: "Middle experiment (PA-05 4/4 DESIGNED), Gas Town (PA-05 3.5)"
- DESIGNED: "NEVER ACHIEVED at Flagship tier"

**Assessment:** Calibration references exist and are historically grounded. The "NEVER ACHIEVED" note for 4/4 at Flagship tier is honest and prevents unrealistic expectations.

---

## PART 6: WORKLOAD BALANCE ASSESSMENT

### 6.1 Current Distribution Analysis

| Auditor | Questions | Load Ratio (vs median 7) | Domain Coherence |
|---------|-----------|-------------------------|------------------|
| C | 11 | 1.57x | HIGH (all spatial/void) |
| D | 11 | 1.57x | HIGH (all flow/pacing/transition) |
| A | 9 | 1.29x | HIGH (all impression/emotion) |
| B | 8 | 1.14x | HIGH (all readability/typography) |
| G | 7 | 1.00x | HIGH (all metaphor/color) |
| E | 6 | 0.86x | HIGH (all grid/layout) |
| F | 6 | 0.86x | HIGH (all consistency/rhythm) |
| I | 6 | 0.86x | HIGH (all cross-page/adversarial) |
| H | 5 | 0.71x | HIGH (all responsiveness/accessibility) |

**Overall assessment:** Domain coherence is excellent — every auditor has a clear, focused role. The load imbalance (C/D at 11, H at 5) reflects genuine domain size differences: spatial assessment and flow/pacing are naturally larger domains than responsiveness.

### 6.2 Are Any Auditors Too Light?

**Auditor H (5 questions):** Below the minimum of 5 identified in file 14's analysis. H covers PA-22, PA-23, PA-46, PA-47, PA-73. These are all responsive/accessibility questions that require multi-viewport comparison — each takes longer to answer than single-viewport questions. The lower count compensates for higher per-question effort.

**Auditor E (6 questions):** Within optimal range. Grid/layout questions are measurement-heavy, compensating for lower count.

**Assessment:** No auditor is critically underloaded. H's 5 questions are at the minimum threshold but compensated by complexity.

### 6.3 Recommendation

The current distribution is ACCEPTABLE with one concern: D's load increased from 8 to 11 during implementation. This was not anticipated by either analysis file. Consider:

1. **Move PA-75 to Auditor A** (D: 11->10, A: 9->10) — PA-75 (completion quality) fits A's impression domain
2. **Or remove PA-75 entirely** (D: 11->10) — PA-13 already covers "clear visual ending"
3. **Or accept 11** — D's questions are well-aligned and Opus handles 11 without observed degradation

---

## PART 7: MISSING QUESTIONS FOR KNOWN FAILURE MODES

### 7.1 Known Failure Modes vs Question Coverage

| Failure Mode | Historical Example | Question Coverage | Gap? |
|-------------|-------------------|-------------------|------|
| Catastrophic whitespace void | Ceiling experiment, Flagship | PA-09, PA-50, PA-51, PA-33, S-09 stacking | NO |
| Uniform/flat typography | Flagship (all 16px/400) | PA-08, PA-29, PA-55, PA-56, PA-77 (new) | NO |
| Imperceptible background deltas | Flagship (1-8 RGB) | PA-55, PA-56, perception threshold table | NO |
| Container width violation | Phase D (4/5 pages) | PA-30, PA-53 | NO |
| Missing footer | Middle experiment | PA-13, PA-75 (new) | NO |
| Monotonous rhythm | Gas Town Zone 4 | PA-41 (T1 EQ), PA-17 (T1 EQ) | NO |
| Front-loaded design | Multiple | PA-36, PA-47, PA-35 | NO |
| Metaphor fading in bottom third | Ceiling | PA-68, PA-44 | NO |
| Template/generic design | Flagship | PA-72 (new, content-form), PA-05a | NO |
| No emotional arc shape | Gas Town | PA-76 (new, emotional arc) | NO |
| Sub-perceptual CSS changes | Flagship | PA-55, PA-56 | NO |
| Abrupt transitions | Known risk | PA-71 (new, transition quality), PA-34 | NO |
| Incoherent multi-coherence | Known risk | PA-74 (new, direction agreement), PA-69 | NO |
| Accessibility problems | WCAG requirement | PA-73 (new) | NO |
| Typographic hierarchy absence | Known risk | PA-77 (new) | NO |
| Trailing void at page end | Gas Town | PA-75 (new), PA-13, PA-50 | NO |

**Assessment: ALL known failure modes now have question coverage.** The 7 new questions (PA-71 through PA-77) fill the 5 gaps identified in files 14/14b (content-form, accessibility, coherence direction, emotional arc, typographic hierarchy) plus 2 additional gaps (transition quality, completion quality).

### 7.2 Remaining Coverage Gaps (From File 14 Part 2)

| Gap | Status |
|-----|--------|
| GAP-1: Information loss detection | CORRECTLY EXCLUDED — PA cannot detect pipeline compression, dilution, or structural mismatch. Gate runner responsibility. |
| GAP-2: Content-form fit quality | ADDRESSED by PA-72 |
| GAP-3: Recipe execution quality | CORRECTLY EXCLUDED — gate runner responsibility |
| GAP-4: Brief accuracy | CORRECTLY EXCLUDED — requires separate brief verification gate |
| GAP-5: Multi-coherence at boundaries | ADDRESSED by PA-74 (direction agreement) and PA-69 update (now includes agreement check) |
| GAP-6: Accessibility | ADDRESSED by PA-73 |
| GAP-7: Interaction states | CORRECTLY EXCLUDED — requires video capture or interactive audit, not screenshot-based |

**All 7 gaps from file 14 are resolved (3 addressed, 4 correctly excluded).**

### 7.3 Potential Remaining Gap

**Component library adoption quality.** File 14b identified (Gap 2) that no PA question evaluates whether adopted components feel INTEGRATED into the page's visual language. PA-19 ("element from a different website") partially addresses this but from a general inconsistency angle, not specifically about component-context coupling. PA-63 (fractal zoom) also partially addresses component adaptation.

**Assessment:** The gap is MINOR. PA-19 + PA-63 provide 80% coverage. A dedicated component-integration question would add value for pages with high component adoption (8+ from components.css) but is not critical. **No action needed now.**

---

## PART 8: PA-69 UPDATE VERIFICATION

File 14 recommended incorporating multi-coherence direction agreement into PA-69. The implementation added this as a separate question (PA-74) AND updated PA-69 itself.

**PA-69 in pa-questions.md (line 287):**
> "Pick two section transitions. Count visual properties changing. Are transition intensities varied or uniform? **Additionally:** Do the changes at each boundary AGREE with each other (e.g., darker bg + heavier type + tighter spacing = all saying 'denser'), or do some changes CONTRADICT others (e.g., darker bg but lighter type)?"

**Assessment:** PA-69 now includes the agreement check AND PA-74 is a dedicated question. This creates moderate overlap — PA-69 asks "do changes agree?" as a secondary check, PA-74 asks it as a primary question. The overlap is acceptable because PA-69 is assigned to Auditor D and PA-74 is also assigned to D, so the same auditor handles both. D can reference PA-69's findings when answering PA-74. However, this means D is spending two questions on a closely related assessment.

**RECOMMENDATION:** Consider whether PA-69's "Additionally" clause and PA-74 are genuinely both needed. If PA-74 is retained (it is more thorough), the PA-69 "Additionally" clause could be removed to reduce redundancy and D's cognitive load.

---

## PART 9: STRUCTURAL ASSESSMENT OF THE 4-FILE SPLIT

### 9.1 Architecture Verification

| File | Purpose | Lines | Audience | Information Isolation |
|------|---------|-------|----------|----------------------|
| pa-questions.md | 69 question definitions, scoring criteria, quality framework | 412 | Auditors + Weaver | Contains perception thresholds and guardrails as appendices — CONCERN (see 9.2) |
| pa-deployment.md | Auditor assignments, screenshot protocol, cross-validation, model requirements | 237 | Orchestrator + Auditors | Contains FIX-083 (Integrative Auditor clarification) — GOOD |
| pa-weaver.md | Weaver protocol, calibration references, diagnostic vocabulary, emotional arc, anti-patterns | 376 | Weaver ONLY | Contains FIX-084 WARNING (tier definitions are WEAVER ONLY) — GOOD |
| pa-guardrails.md | Evidence format, completion manifest, assessment constraints, anti-patterns, fresh-eyes | 151 | Auditors (alongside pa-questions.md) | Contains fresh-eyes principle — GOOD |
| pa-manifest.md | Per-run tracking template | 89 | Orchestrator (copies per run) | Contains completion checklists — GOOD |

**Assessment:** The split architecture is well-designed and matches file 14's recommendation (Section Part 5). Information isolation is correctly maintained:
- Weaver gets tier context (pa-weaver.md) that auditors never see
- Auditors get questions + guardrails but NOT calibration references or tier definitions
- Orchestrator gets deployment instructions

### 9.2 Information Leak Risk

**CONCERN:** pa-questions.md includes Section 4 "QUALITY FRAMEWORK (10 VALUES Items Integrated)" which contains quality tier definitions (FLOOR/MIDDLE/CEILING/FLAGSHIP) with PA-05 ranges, mechanism counts, and CSS line targets. If auditors receive the full pa-questions.md file, they would see tier targets.

**pa-questions.md lines 323-331:**
```
| FLOOR | < 2.5 | 5 | 150-250 | Register 0 (NO coupling) |
| MIDDLE (default) | 2.5-3.0 | 8-10 | 350-500 | Register 1 (LOCAL coupling) |
| CEILING | 3.0-3.5 | 12-15 | 700-1000 | Register 2 (STRUCTURAL coupling) |
| FLAGSHIP | >= 3.5 | 16-18 | 1000-1500 | Register 3 (ATMOSPHERIC coupling) |
```

**This directly violates the fresh-eyes principle.** If Auditor A sees "FLAGSHIP >= 3.5" they may anchor their PA-05 scoring on this target. The same information appears in pa-weaver.md with a WARNING label (FIX-084), but pa-questions.md has NO such warning.

**CRITICAL FIX NEEDED:** Either:
1. Move Section 4 (Quality Framework) from pa-questions.md to pa-weaver.md (where it belongs — it is calibration context for the Weaver, not question definitions for auditors), OR
2. Add a clear "SECTION 4 IS FOR WEAVER/ORCHESTRATOR USE ONLY — DO NOT INCLUDE IN AUDITOR PROMPTS" warning, AND ensure the orchestrator only sends Sections 1-3 + Appendices to auditors

**Severity: HIGH.** This is the single most important fix in this audit. Tier targets in auditor prompts would compromise PA-05 integrity.

### 9.3 Appendix Placement

pa-questions.md includes two appendices:
- Appendix A: Perception Threshold Reference Table (lines 356-372)
- Appendix B: Quantitative Guardrails (lines 375-408)

These also appear in pa-guardrails.md (Section 9: S-09 Stacking Check). The duplication creates maintenance burden — updates to thresholds must be made in 2 places.

**RECOMMENDATION:** Make pa-guardrails.md the single source for quantitative guardrails and perception thresholds. Reference from pa-questions.md: "See pa-guardrails.md for perception thresholds and quantitative guardrails." This eliminates dual-source ambiguity.

---

## PART 10: CROSS-FILE CONSISTENCY CHECK

### 10.1 Question Count Consistency

| File | Stated Count | Verified Count |
|------|-------------|----------------|
| pa-questions.md (line 306) | 69 | Count of unique PA-IDs in Sections 1-3: 69 CORRECT |
| pa-deployment.md (line 54) | 69 | Sum of auditor assignments: 9+8+11+11+6+6+7+5+6 = 69 CORRECT |
| pa-manifest.md (line 36) | 69 | Sum of manifest rows: 9+8+11+11+6+6+7+5+6 = 69 CORRECT |
| pa-guardrails.md (line 15) | 69 | References "ALL 69 questions" — CORRECT |

**All 4 files agree on 69 questions.**

### 10.2 Auditor Assignment Consistency

Verified each auditor's question list in pa-deployment.md against the auditor column in pa-questions.md:

| Auditor | pa-deployment.md Assignment | pa-questions.md Auditor Column | Match? |
|---------|---------------------------|-------------------------------|--------|
| A | PA-01,03,04,05,45 + PA-65,67 + PA-72,76 = 9 | All marked Auditor A | YES |
| B | PA-02,06,08,29,55,56,70 + PA-77 = 8 | All marked Auditor B | YES |
| C | PA-09,11,30,31,32,33,50,51,53 + PA-64,66 = 11 | All marked Auditor C | YES |
| D | PA-12,13,34,35,36,52,69,71 + PA-62 + PA-74,75 = 11 | All marked Auditor D | YES |
| E | PA-14,15,37,38,39 + PA-63 = 6 | All marked Auditor E | YES |
| F | PA-16,17,40,41 + PA-60,61 = 6 | All marked Auditor F | YES |
| G | PA-18,19,20,42,43,44 + PA-68 = 7 | All marked Auditor G | YES |
| H | PA-22,23,46,47 + PA-73 = 5 | All marked Auditor H | YES |
| I | PA-24,25,26,27,28,48 = 6 | All marked Auditor I | YES |

**All 9 auditors' assignments are consistent across both files.**

### 10.3 PA-70 Assignment Resolution

**File 14b identified:** PA-70 was assigned to Auditor D in the protocol but Auditor B in the enrichment changelog. The recommendation was to reassign to B.

**Implementation:** PA-70 is assigned to Auditor B in both pa-deployment.md (line 45) and pa-questions.md (line 288). The contradiction is RESOLVED in B's favor, matching the enrichment changelog's original reasoning.

### 10.4 Manifest Template vs Deployment File

pa-manifest.md auditor question counts (lines 25-33) match pa-deployment.md exactly:
- A: 9, B: 8, C: 11, D: 11, E: 6, F: 6, G: 7, H: 5, I: 6

**Consistent.**

---

## PART 11: SCREENSHOT-ANSWERABILITY ASSESSMENT

### 11.1 All 69 Questions Evaluated

Every question was assessed for whether it can be answered from static screenshots at 1440px, 1024px, and 768px.

**FULLY ANSWERABLE (63/69):** PA-01 through PA-06, PA-08 through PA-09, PA-11 through PA-20, PA-24 through PA-36, PA-37 through PA-48, PA-50 through PA-53, PA-55 through PA-56, PA-60 through PA-62, PA-64 through PA-72, PA-74 through PA-77.

**PARTIALLY ANSWERABLE (4/69):**

| Question | Issue | Severity |
|----------|-------|----------|
| PA-23 | Rewritten to compare 1024px vs 768px screenshots — NOW answerable from available screenshots | RESOLVED (was problematic, now fixed) |
| PA-26 | "As if a rule is forcing a bad outcome" — auditor must infer intentionality vs accident from visual evidence alone. Partially subjective but doesn't require code access. | LOW |
| PA-27 | "Designing from scratch, would you design it this way?" — hypothetical requiring design expertise. Valid as gestalt prompt but answer is unfalsifiable. | LOW |
| PA-63 | Finding the "SAME component type in a different section" and evaluating adaptation requires careful screenshot examination. High-resolution screenshots help but fine detail is limited. | LOW |

**PROBLEMATIC (2/69):**

| Question | Issue | Severity |
|----------|-------|----------|
| PA-73 (Accessibility) | "Invisible, unreachable, or confusing to someone using only a keyboard or screen reader" — keyboard navigation and screen reader experience CANNOT be assessed from screenshots. Focus states, tab order, and ARIA attributes are invisible in PNG screenshots. Only VISUAL accessibility issues (low contrast, tiny text, broken images) are screenshot-detectable. | MODERATE |
| PA-51 (Content density) | Rewritten from percentage to qualitative ("content-dense, balanced, sparse, void-dominated") — better but still requires whole-page assessment that depends on scroll-through completeness. | LOW |

**Assessment:** 63/69 questions (91%) are fully answerable from screenshots. 4/69 (6%) are partially answerable with known limitations. 2/69 (3%) have moderate answerability concerns. This is a strong result.

**RECOMMENDATION for PA-73:** Add a clarification: "Assess visual accessibility ONLY — low contrast text, tiny touch targets, missing alt text (visible as broken images), color-only information encoding. Do NOT attempt to assess keyboard navigation, screen reader experience, or ARIA attributes — these require interactive testing."

---

## PART 12: REAL DEFECT DETECTION CAPABILITY

### 12.1 Evidence from Gas Town PA Execution

The Gas Town PA (9 auditors, 65 questions at the time, 94/100 compliance) detected:

| Defect | Detected By | Questions Used |
|--------|-------------|----------------|
| Trailing void at page end | Auditor A (PA-01), Auditor C (PA-50), Auditor D (PA-13) | PA-01, PA-13, PA-50 — triple detection |
| Zone 4 label stacking at 768px | Auditor B (PA-02, PA-06) | PA-02, PA-06 |
| Zone 4 monotony | Auditor F (PA-41) | PA-41 (T1 EQ) |
| Top-heavy visual weight | Auditor C (PA-32) | PA-32 |
| Code block overflow | Auditor B (PA-08) | PA-08 |

### 12.2 Defects the New Questions Would Catch

| New Question | Hypothetical Defect It Would Catch | Evidence |
|-------------|-------------------------------------|----------|
| PA-71 (Transition quality) | Abrupt zone collisions where background shifts 40+ RGB in 0px | Historical: Flagship had imperceptible transitions; Gas Town had well-designed ones. PA-71 would CONFIRM good transitions or flag bad ones. |
| PA-72 (Content-form) | Generic template design that works for any content | Historical: Flagship scored ASSEMBLED partly because design was generic. PA-72 directly tests this. |
| PA-73 (Accessibility) | Missing focus indicators, low contrast buttons | Not previously detected because no question existed. |
| PA-74 (Coherence direction) | Multi-coherence where bg gets darker but text gets lighter (contradictory shifts) | Historical: not observed but theoretically possible and devastating. |
| PA-75 (Completion quality) | "Ran out of time" trailing section | Historical: Gas Town trailing void would be caught by PA-75 in addition to PA-50 and PA-13. |
| PA-76 (Emotional arc) | Flat journey with no shape | Historical: Gas Town had "flat emotional journey" per analysis. PA-76 would directly detect this. |
| PA-77 (Typographic hierarchy) | All text at same weight/size | Historical: Flagship had uniform 16px/400 typography. PA-77 directly detects this. |

**Assessment:** The 7 new questions all address historically observed or theoretically plausible failure modes. None are speculative additions without a real-world basis.

---

## PART 13: FILE 14b-SPECIFIC RECOMMENDATIONS VERIFICATION

File 14b made several structural recommendations beyond question changes. Verification:

### 13.1 Structural Changes

| Recommendation | Status |
|----------------|--------|
| Add explicit Weaver-only label on tier context | IMPLEMENTED (FIX-084 in pa-weaver.md) |
| Clarify Integrative Auditor vs Weaver PA-05 scoring | IMPLEMENTED (FIX-083 in pa-deployment.md) |
| Add cross-viewport comparison section | IMPLEMENTED (pa-deployment.md Section 1.2.1 + pa-guardrails.md Section 10) |
| Add Weaver diagnostic vocabulary | IMPLEMENTED (pa-weaver.md Section 3) |
| Add Weaver calibration sequencing note | IMPLEMENTED (FIX-085 in pa-weaver.md Section 2) |
| Reconcile PA-70 assignment | IMPLEMENTED (assigned to B in both files) |

**All 6 structural changes from file 14b: IMPLEMENTED (6/6).**

### 13.2 Contradictions Resolved

| Contradiction | Resolution |
|---------------|-----------|
| PA-70 auditor assignment (D vs B) | Resolved to B per enrichment changelog |
| Integrative Auditor scores PA-05 vs Weaver scores PA-05 | Resolved: Weaver scores PA-05 (FIX-083) |
| Question count discrepancy (various counts) | Resolved: 69 questions, consistent across all 4 files |

### 13.3 Enrichment Gaps Addressed

From file 14b Section 5.3 (8 remaining gaps):

| Gap | Status |
|-----|--------|
| Auditor C overload (14 questions) | ADDRESSED (14 -> 11) |
| PA-70 auditor assignment contradiction | ADDRESSED (assigned to B) |
| Diagnostic gap | PARTIALLY ADDRESSED (Weaver diagnostic vocabulary added; auditors still produce symptom-only data) |
| Emotional arc under-coverage | ADDRESSED (PA-76 added as direct emotional arc question) |
| Accessibility quality question | ADDRESSED (PA-73 added) |
| PA-23 screenshot-answerable rewrite | ADDRESSED (rewritten for screenshot context) |
| PA-25 design-system knowledge | ADDRESSED (rewritten for single-page context) |
| PA-26 convention knowledge | ADDRESSED (rewritten to "looks wrong but seems intentional") |

**All 8 enrichment gaps: ADDRESSED (6 fully, 1 partially, 1 fully).**

---

## PART 14: REMAINING ISSUES AND RECOMMENDATIONS

### 14.1 CRITICAL (Must Fix Before Next PA Run)

**ISSUE 1: Quality Framework tier definitions in pa-questions.md (Section 4, lines 310-354) accessible to auditors.**

The tier tables (FLOOR/MIDDLE/CEILING/FLAGSHIP with PA-05 ranges) in pa-questions.md would anchor auditor PA-05 scoring if visible. This violates the fresh-eyes principle.

**FIX:** Move Section 4 of pa-questions.md to pa-weaver.md (which already has the same information in Sections 2.4 and 9). Or add a clear WEAVER-ONLY warning and instruct the orchestrator to exclude Section 4 when sending pa-questions.md to auditors.

### 14.2 SIGNIFICANT (Should Fix)

**ISSUE 2: Auditor D overloaded at 11 questions (same level as C).**

The redistribution solved C's overload but created equivalent overload on D. D's 11 questions span core flow/pacing (8), Tier 5 (1), and extended (2).

**FIX:** Move PA-75 to Auditor A (or remove PA-75 as redundant with PA-13). This reduces D to 10 while A goes to 10.

**ISSUE 3: PA-69 "Additionally" clause overlaps with PA-74.**

Both ask about multi-coherence direction agreement at boundaries. Both assigned to D. Creates redundant assessment.

**FIX:** Remove the "Additionally" clause from PA-69 (keep PA-74 as the dedicated question). PA-69 then returns to its original scope: counting property changes and evaluating transition intensity variety.

**ISSUE 4: Appendix duplication between pa-questions.md and pa-guardrails.md.**

Perception thresholds and S-09 stacking check appear in both files.

**FIX:** Make pa-guardrails.md the single source for numerical guardrails. Reference from pa-questions.md.

### 14.3 MINOR (Can Defer)

**ISSUE 5: PA-73 (Accessibility) limited to visual assessment from screenshots.**

Keyboard navigation and screen reader experience cannot be assessed from PNGs.

**FIX:** Add clarification note to PA-73 text specifying "visual accessibility only."

**ISSUE 6: C1/C2 split deferred.**

If C's quality degrades at 11 questions in the next run, the split should be activated.

**FIX:** No immediate action. Monitor.

---

## VERDICT

**The PA question inventory is STRONG and substantially improved from the version analyzed in files 14/14b.** The 4-file split architecture is well-designed. All 5 rewrites are implemented. All 3 removals are implemented. 7 new questions fill all identified coverage gaps. Cross-validation, completion manifests, and evidence format requirements are all in place.

**1 CRITICAL fix needed:** Move quality tier definitions out of auditor-visible pa-questions.md Section 4.

**3 SIGNIFICANT fixes recommended:** Reduce D's load, remove PA-69/PA-74 overlap, eliminate appendix duplication.

**2 MINOR fixes deferred:** PA-73 accessibility clarification, C1/C2 split monitoring.

**Overall quality score: 92/100** (deducting 5 for the tier-definition leak risk, 2 for D's overload, 1 for PA-69/PA-74 overlap).

---

*End of PA Question Quality Audit. 69 questions evaluated across 7 source files. 1 CRITICAL, 3 SIGNIFICANT, 2 MINOR issues identified. Comprehensive cross-file consistency verified.*
