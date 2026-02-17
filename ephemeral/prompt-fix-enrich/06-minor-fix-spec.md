# 06: Minor Fix Specification -- TIER 3 Edits (E-17 through E-24) + Source Citation Corrections

**Author:** minor-fix-spec agent (Opus 4.6)
**Date:** 2026-02-17
**Sources:** 13-FINAL-VALIDATION-VERDICT.md (Section 7, TIER 3), 18-conviction-accuracy.md (3 inaccuracies), 19-parameter-verification.md (source citation errors)
**Target File:** `ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

---

## EDIT INDEX

| Edit | Description | Location | Status |
|------|------------|----------|--------|
| E-17 | DD-006 mechanism count fix | A5, line 66 | SPECIFIED |
| E-18 | var() count fix | A7, line 92 | SPECIFIED |
| E-19 | Alexander formula notation fix | A3, line 45 | SPECIFIED |
| E-20 | Parameter table source citations (5 params) | Appendix, lines 457-473 | SPECIFIED |
| E-21 | Remove duplicate MC-08/C-11 anti-metronome | Lines 177, 202 | SPECIFIED |
| E-22 | Add void diagnosis note to P-08 | B7, line 245-246 | SPECIFIED |
| E-23 | Document container width rationale in Appendix | Appendix, line 453 | SPECIFIED |
| E-24 | Additional accuracy corrections | Multiple | SPECIFIED |

---

## E-17: DD-006 Mechanism Count Fix

**Problem:** A5 line 66 states "DD-006 scored 36/40 with 6 mechanisms." The "6" is the case-study extraction count only. Other analyses within the project find 12 (richness comparison) or 16+ (multi-pass audit, HANDOFF.md). Using the lowest estimate without qualification is factually misleading.

**Source:** Report 18 (conviction-accuracy.md), INACCURACY 1. Also CONTRA-06 in verdict report.

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD (line 66):**
```
These interaction types ARE compositional fluency. Vocabulary is knowing the mechanisms; composition is choosing which interaction pattern to deploy. Mechanism count does NOT predict quality. DD-006 scored 36/40 with 6 mechanisms. The Ceiling scored DO NOT SHIP with 14.
```

**NEW:**
```
These interaction types ARE compositional fluency. Vocabulary is knowing the mechanisms; composition is choosing which interaction pattern to deploy. Mechanism count does NOT predict quality. DD-006 scored 36/40 with ~6-12 mechanisms (varies by counting methodology). The Ceiling scored DO NOT SHIP with 14.
```

**Rationale:** The rhetorical point (mechanism count does not predict quality) is valid regardless of whether DD-006 had 6 or 12 mechanisms, since it still outscored the Ceiling's 14. The range "~6-12" covers the case-study extraction (6) and the richness comparison (12) without asserting either as definitive. The 16+ count from multi-pass audit is excluded as it uses a different, broader methodology.

---

## E-18: var() Count Fix

**Problem:** A7 line 92 states "54 `var()` references, near-zero hardcoded values." The "54" is the number of `:root` token DEFINITIONS, not `var()` USAGES throughout the file. Actual `var()` usages in CD-006 = ~270 (confirmed by grep in report 09 and report 18).

**Source:** Report 18 (conviction-accuracy.md), INACCURACY 2. Also flagged by report 09 (crown-jewel-coverage.md lines 130-136). Also CONTRA-07 in verdict report.

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD (line 92):**
```
CD-006 (39/40) uses 3 transition types (Smooth/Bridge/Breathing), each EARNED by content relationship. Every `<section>` has `aria-label`. Every callout has `role="note"`. Every transition has `role="separator"`. Token compliance: 54 `var()` references, near-zero hardcoded values.
```

**NEW:**
```
CD-006 (39/40) uses 3 transition types (Smooth/Bridge/Breathing), each EARNED by content relationship. Every `<section>` has `aria-label`. Every callout has `role="note"`. Every transition has `role="separator"`. Token compliance: 54 token definitions (~270 var() usages), near-zero hardcoded values.
```

**Rationale:** Distinguishes between definitions (54 custom properties in `:root`) and usages (~270 `var()` references throughout the stylesheet). The "near-zero hardcoded values" claim remains accurate (98%+ compliance). This correction was already flagged by validator 09 but was not applied during enrichment.

---

## E-19: Alexander Formula Notation Fix

**Problem:** A3 line 45 writes `ln(1440/12)/ln(e) = 4.8`. Since `ln(e) = 1` by definition, this simplifies to `ln(120) = 4.787`, which gives the correct result ~4.8. However, the SOURCE formula (scale-exploration report 05-cross-domain-theory.md lines 370-377) uses `ln(120)/ln(2.7)` where 2.7 is the Alexander/Salingaros scaling factor (approximately e = 2.718). Dividing by `ln(e)` is a mathematical no-op that obscures the actual reasoning: each adjacent scale differs by a factor of ~2.7x.

**Source:** Report 18 (conviction-accuracy.md), INACCURACY 3. The formula is numerically correct but notation hides the scaling-ratio insight.

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD (line 45):**
```
Five scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(e) = 4.8). Beyond 5, add CHANNELS (more CSS properties encoding meaning), not LEVELS (more zoom magnifications). NEVER target 6+ scales.
```

**NEW:**
```
Five scales is the mathematical ceiling (Alexander/Salingaros: ln(1440/12)/ln(2.7) ≈ 4.8, where 2.7 is the scaling ratio between adjacent scales). Beyond 5, add CHANNELS (more CSS properties encoding meaning), not LEVELS (more zoom magnifications). NEVER target 6+ scales.
```

**Rationale:** Uses the source formula's actual denominator `ln(2.7)` instead of `ln(e)`, preserving the insight that the Alexander/Salingaros model is about adjacent scales differing by a factor of ~2.7x. The `≈` symbol replaces `=` since 4.8 is an approximation (actual value: 4.82). Adds brief parenthetical explaining what the 2.7 represents for builder comprehension.

---

## E-20: Parameter Table Source Citation Corrections (5 Parameters)

**Problem:** Five parameter table entries cite incorrect or imprecise sources. These were identified by report 19 (parameter-verification.md).

**Source:** Report 19, parameters 5, 14, 15, 18, 21.

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

### E-20a: Parameter 5 -- Void threshold (skeleton)

**Problem:** Source column cites "TC-07 graduated" but TC-07 contains 2160px, NOT 1620px. The 1620px value traces to LIVING-STATE.md / soundness audit SC-02.

**OLD (line 457):**
```
| Void threshold (skeleton) | 1620px | Checkpoint gate | TC-07 graduated |
```

**NEW:**
```
| Void threshold (skeleton) | 1620px | Checkpoint gate | S-10 skeleton gate (LIVING-STATE.md); TC-07 provides 2160px final |
```

### E-20b: Parameter 14 -- Transition types required

**Problem:** Source column cites "BT-02" but BT-02 uses completely different type names (HARD CUT / SPACING SHIFT / CHECKPOINT) than the prompt (SMOOTH / BRIDGE / BREATHING). The prompt's naming originates from CD-006 forensics, not BT-02.

**OLD (line 466):**
```
| Transition types required | >= 3 different (SMOOTH/BRIDGE/BREATHING) | FAIL-IF binary | BT-02 |
```

**NEW:**
```
| Transition types required | >= 3 different (SMOOTH/BRIDGE/BREATHING) | FAIL-IF binary | CD-006 forensics; BT-02 (count only, uses different names) |
```

### E-20c: Parameter 15 -- Designed moments

**Problem:** Source column cites "BT-07" but BT-07 only requires ">= 1 moment past 50% scroll depth." The per-quartile requirement (4x stricter) appears to be a synthesizer enhancement from report 04, not BT-07.

**OLD (line 467):**
```
| Designed moments | >= 1 per scroll quartile | FAIL-IF binary | BT-07 |
```

**NEW:**
```
| Designed moments | >= 1 per scroll quartile | FAIL-IF binary | BT-07 (past-50% floor) + Report 04 (per-quartile enhancement) |
```

### E-20d: Parameter 18 -- Scale ceiling

**Problem:** Source column cites "Finding 1" which is ambiguous. Finding 1 from report 01 (beyond-five-scales.md) is about spatial axis exhaustion, not directly about the 5-scale ceiling. The 5-scale value originates from the Alexander/Salingaros formula in scale-exploration report 03.

**OLD (line 470):**
```
| Scale ceiling | 5 maximum (2-3 preferred) | FAIL-IF binary | Finding 1 |
```

**NEW:**
```
| Scale ceiling | 5 maximum (2-3 preferred) | FAIL-IF binary | Alexander/Salingaros formula (A3); scale-exploration report 03 |
```

### E-20e: Parameter 21 -- Restraint ratio

**Problem:** Source column cites "TC-04, Report 04" but TC-04 contains mechanism COUNT targets, NOT restraint ratio. The restraint ratio originates solely from Report 04 (restraint protocol).

**OLD (line 473):**
```
| Restraint ratio | >= 1.5:1 rejected-to-deployed | FAIL-IF binary | TC-04, Report 04 |
```

**NEW:**
```
| Restraint ratio | >= 1.5:1 rejected-to-deployed | FAIL-IF binary | Report 04 (restraint protocol) |
```

---

## E-21: Remove Duplicate MC-08/C-11 Anti-Metronome Rule

**Problem:** Two rules encode the same requirement (section spacing must vary, no metronomic rhythm):
- **C-11 (line 177):** "Section spacing MUST vary: at least 3 distinct spacing values across sections. Metronomic rhythm (all gaps equal) is a design failure."
- **MC-08 (line 202):** "Anti-metronome: >= 3 distinct padding/margin values across section boundaries."

Both require >= 3 distinct spacing values. MC-08 is redundant with C-11. Having the same rule in two sections with different IDs creates confusion about which rule ID to cite in audit findings and gate checks.

**Source:** Report 13, FINAL-VALIDATION-VERDICT.md E-21. Also flagged as duplication concern in soundness audit.

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**Recommended Fix:** Remove MC-08 and keep C-11 (which is in the COMPOSITIONAL section where spacing rules belong). Add a cross-reference note.

**OLD (line 202):**
```
MC-08. Anti-metronome: >= 3 distinct padding/margin values across section boundaries.
```

**NEW:**
```
MC-08. [REMOVED -- consolidated into C-11. Anti-metronome rule lives in Compositional section.]
```

**Alternative (if rule count must stay at 71):** Replace MC-08 with a NEW multi-coherence rule that is currently missing. For example: "MC-08. Cross-scale coherence: >= 1 mechanism that operates identically at 2+ different scales."

**Rationale:** C-11 is the more specific formulation (mentions "metronomic rhythm" as the failure mode, is in the Compositional section where spacing belongs). MC-08 in Multi-Coherence is a category mismatch -- spacing variation is a compositional concern, not a multi-coherence concern.

---

## E-22: Add "Void is CONTENT Problem, Not CSS" to P-08

**Problem:** The enriched prompt addresses void through CSS rules (S-10, S-11, S-12) and spatial gates, but never states the ceiling experiment's most important diagnostic finding: void was a CONTENT problem, not a CSS problem. The ceiling had correct CSS (no margin/padding violations) but catastrophic void because insufficient content was placed in the available space. P-08 (spatial re-check after Pass 2) is the natural location for this insight.

**Source:** Report 05 (ceiling experiment lessons), Coverage domain 8 in verdict report: "GAP: 'Void is CONTENT problem, not CSS' not explicitly stated (MODERATE)."

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD (lines 245-246):**
```
P-08. Spatial re-check after Pass 2: S-01 + S-02 must still pass. If content-to-void degrades
      > 10 percentage points from Pass 1, ROLLBACK Pass 2 and reduce elaboration.
```

**NEW:**
```
P-08. Spatial re-check after Pass 2: S-01 + S-02 must still pass. If content-to-void degrades
      > 10 percentage points from Pass 1, ROLLBACK Pass 2 and reduce elaboration.
      DIAGNOSTIC: Void is a CONTENT placement problem, not a CSS problem. The Ceiling had valid
      CSS (no margin/padding violations) but catastrophic void (70-80% blank). Fix by ADDING
      CONTENT to empty zones, not by adjusting spacing properties.
```

**Rationale:** This is the single most important diagnostic from the ceiling failure analysis. Without it, a builder encountering void at the P-08 check may attempt to fix it by reducing margins/paddings (CSS fix) when the actual solution is redistributing content into empty zones (content fix). The diagnostic costs 3 lines but prevents the #1 failure mode.

---

## E-23: Document Container Width Rationale in Appendix

**Problem:** The Appendix parameter table states container width as "940-1100px (960px default, 1100px proven upper bound from CD-006)" but the soundness audit SC-01 (BLOCKING) recommended "max-width: 960px CSS container." The synthesizer deliberately chose the broader range based on CD-006 evidence but did not document WHY the soundness audit's stricter recommendation was overridden. This creates an apparent contradiction that future agents may flag.

**Source:** Report 19 (parameter-verification.md), Parameter 1 SIGNIFICANT discrepancy. Also CONTRA-04 in verdict report.

**File:** `10-ENRICHED-MASTER-EXECUTION-PROMPT.md`

**OLD (line 449):**
```
All contradictions resolved per soundness audit (Report 19). These are final values.
```

**NEW:**
```
All contradictions resolved per soundness audit. These are final values.

NOTE on container width (940-1100px): Soundness audit SC-01 recommended a strict 960px CSS
container. This prompt adopts the broader 940-1100px range because CD-006 (39/40, crown jewel)
uses max-width: 1100px and DD-006 uses max-width: 1000px -- both within this range. The 960px
default is preserved as the recommended starting point, with 1100px as the proven upper bound.
Builders SHOULD use 960px unless content structure specifically benefits from wider layout.
```

**Rationale:** Documenting the decision rationale prevents future validators from re-flagging this as a contradiction. The note is positioned immediately after the "all contradictions resolved" claim, making the deliberate override transparent. Adds 4 lines to the Appendix.

---

## E-24: Additional Accuracy Corrections from Conviction/Parameter Reports

### E-24a: Appendix Header Accuracy Fix

**Problem:** The Appendix header says "All contradictions resolved per soundness audit (Report 19)." But Report 19 is the parameter verification report, not the soundness audit. The soundness audit was a different input. Also, "Report 19" is ambiguous in context since the validation reports are also numbered.

**OLD (line 449) -- already partially addressed by E-23, combined fix:**

This is folded into E-23's fix above, which removes the "(Report 19)" parenthetical to avoid the ambiguity.

### E-24b: Communication Requirement Source Citation

**Problem:** Parameter 12 (Communication requirement) cites "TC-06" as the source for "File + SendMessage (min 8 messages)." TC-06 covers the dual requirement (file + SendMessage) but does NOT specify the "min 8 messages" number. The 8-message minimum originates from flagship-preparation report 06.

**Source:** Report 19, Parameter 12 MINOR discrepancy.

**OLD (line 464):**
```
| Communication requirement | File + SendMessage (min 8 messages) | FAIL-IF binary | TC-06 |
```

**NEW:**
```
| Communication requirement | File + SendMessage (min 8 messages) | FAIL-IF binary | TC-06 + Report 06 (message minimum) |
```

### E-24c: Mechanism Hard Cap Source Clarification

**Problem:** Parameter 3 (Mechanism hard cap) calls 16 the "hard cap." Soundness audit SC-04 resolved this as "14 hard cap, 16 absolute maximum with justification." While functionally equivalent, the framing differs.

**Source:** Report 19, Parameter 3 MINOR discrepancy.

**Impact:** NEGLIGIBLE -- no edit required. The rule C-02 says "Hard cap: 16 (absolute maximum, requires justification)" which is clear enough. The table's source citation "(S4 rec for 14 considered, not adopted)" is already transparent. NO EDIT.

### E-24d: Master Prompt Length Source Discrepancy

**Problem:** Parameter 10 (Master prompt length) says "<= 250 lines (target 248)" citing TC-05. But TC-05 says 240 lines, not 250. The synthesizer rounded up from the actual 248 to set a 250 soft cap.

**Source:** Report 19, Parameter 10 MINOR discrepancy.

**Impact:** NEGLIGIBLE -- no edit required. The type is "Soft cap" which acknowledges flexibility. The actual prompt is ~248 lines. The discrepancy is a 4% overshoot of the TC-05 target and is already flagged by the (target 248) parenthetical. NO EDIT.

---

## SUMMARY

| Edit | Lines Changed | Effort |
|------|---------------|--------|
| E-17 | 1 line (word replacement) | 1 min |
| E-18 | 1 line (phrase replacement) | 1 min |
| E-19 | 1 line (formula + parenthetical) | 1 min |
| E-20a | 1 line (source column) | 1 min |
| E-20b | 1 line (source column) | 1 min |
| E-20c | 1 line (source column) | 1 min |
| E-20d | 1 line (source column) | 1 min |
| E-20e | 1 line (source column) | 1 min |
| E-21 | 1 line (remove/replace) | 2 min |
| E-22 | +3 lines (diagnostic note) | 2 min |
| E-23 | +4 lines (rationale note) | 3 min |
| E-24b | 1 line (source column) | 1 min |
| **TOTAL** | **~17 lines changed/added** | **~16 min** |

**Edits with NO ACTION (documented above):** E-24a (folded into E-23), E-24c (negligible), E-24d (negligible).

---

**END MINOR FIX SPECIFICATION**
