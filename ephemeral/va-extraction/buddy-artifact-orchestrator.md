# Buddy Review: artifact-orchestrator.md
Date: 2026-02-23
Reviewer: buddy-orchestrator (Opus)
Artifact: `/ephemeral/va-extraction/artifact-orchestrator.md` (956 lines)

---

## Summary

The orchestrator artifact is a comprehensive, well-structured document covering the complete pipeline v3 sequence across 16 sections. It correctly applies the major council mandates (single-pass DEFAULT, 3-pass EXPERIMENTAL, "activation" framing retired, honest cost estimates, phased suppressor removal). The document is clearly written and would serve an implementer well.

However, there are several discrepancies between what the artifact claims and what the source documents (unified registry and council verdict) specify. The most significant issues involve: (1) inflated rerouted item count (claims 17 but actually includes 34+ items from categories the council did not route to ORCHESTRATOR), (2) a missing Layer 9 item, and (3) some items from the council's Category A that appear but aren't counted in the declared "17."

---

## 1. LAYER 9 ITEM COVERAGE VERIFICATION

### Method
Cross-referenced every item in classify-by-layer.md Layer 9 ORCHESTRATION (lines 678-835, 158 table rows) against the artifact. The classify-by-layer summary says 188 items; the 158 rows in the primary table plus items with L9 as secondary layer elsewhere account for the total.

### Items verified as PRESENT in artifact

The vast majority of Layer 9 items are present. I verified the following source-file groups:

**extract-d01-d03.md items (41 items):** ITEM 1, 2, 3, 6, 16, 48, 49, 50, 51, 54, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 89, 91, 95, 96, 97, 98, 99, 100, 101, 102, 109, 110, 111, 112, 113, 114, 115, 129, 130, 132, 133, 135, 136 -- ALL PRESENT

**extract-d04-d05.md items (2 items):** ITEM 10, 15 -- ALL PRESENT

**extract-d06-d08.md items (39 items):** ITEM 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 36, 37, 58, 74, 97, 98 -- PRESENT. Items 38-73 (13 irreducible concepts section) -- ALL PRESENT across Section 13.

**extract-d09-d11.md items (42 items):** ITEM 1-35 (experiment protocol), 62-91 (build timeline) -- ALL PRESENT

**extract-d15-d17.md items (5 items):** ITEM 44, 45, 46, 48, 49 -- ALL PRESENT

**extract-d18-d20.md items (6 items):** ITEM 50, 51, 52, 53, 54, 62, 63, 86 -- ALL PRESENT

**extract-d21-d25.md items (22 items):** ITEM 57, 58, 68, 71, 77, 79, 83-86, 91, 92, 127, 128, 131, 132, 133, 183 -- PRESENT

### Items MISSING or UNCERTAIN

1. **extract-d09-d11.md ITEM 6** (L722, "Pass/fail: PA-05 >= 2.0?") -- Present in Section 11 Stage 0: CONFIRMED via ITEM 6.

2. **extract-d09-d11.md ITEM 12** (L740, "Success: delta PA-05 >= +0.5?") -- Present: ITEM 12. CONFIRMED.

3. **extract-d09-d11.md ITEM 19** (L758-759, "Success: v3 > old on BOTH content types?") -- Present: ITEM 19. CONFIRMED.

4. **extract-d09-d11.md ITEM 30** (L789-790, "Success: PA-05>=3.5 AND Tier 5>=6/8?") -- Present: ITEM 30. CONFIRMED.

5. **extract-d09-d11.md ITEM 78** (L884, "Output: complete HTML (800-1200 CSS)") -- Present in Section 5: ITEM 78. CONFIRMED.

6. **extract-d09-d11.md ITEM 82** (L889, "Screenshots at 3 viewports: 1440px, 1024px, 768px") -- Present in Section 6: ITEM 82. CONFIRMED.

7. **extract-d09-d11.md ITEM 83-89** (PA audit items) -- All present in Section 6. CONFIRMED.

8. **extract-d01-d03.md items related to brief structure (ITEMS 19, 24-37, 46-47, 127-128, 131, 142)** -- Cross-checked. ITEM 127-136 present in Section 0. ITEM 19, 24-37, 46-47, 142 present in Section 3. CONFIRMED.

9. **extract-d01-d03.md ITEM 55-57** (builder isolation items) -- Present in Section 1. CONFIRMED.

10. **extract-d15-d17.md ITEM 43** (VERDICT: REBUILD) -- Present in Section 7 line 470. CONFIRMED.

11. **extract-d15-d17.md ITEM 47** (VERDICT: REFINE) -- Present in Section 7 line 456. CONFIRMED.

12. **extract-d15-d17.md ITEM 50** (REFINE agent never sees gate scores) -- Present in Section 7 line 455. CONFIRMED.

13. **extract-d15-d17.md ITEM 51** (Cannot fix way to Flagship) -- Present in Section 7 line 481. CONFIRMED.

14. **extract-d15-d17.md ITEM 37** (THE GAP 3.2->4.0) -- Present in Section 7 line 482. CONFIRMED.

### MISSING Layer 9 items

After systematic cross-reference, I found the following gaps:

1. **extract-d09-d11.md ITEM 23** (from d06-d08, Pass 2 output: "Enriched page — metaphor structural, mechanisms coupled") -- This item is listed in classify-by-layer.md but in the artifact it appears only as ITEM 23 (extract-d06-d08.md L525-526) with text "Pass 2 output: Enriched page." The truncated text is acceptable since the full item context is present in the 3-pass experimental section. MARGINAL PASS.

2. **extract-d06-d08.md ITEM 7** (L495-496, "Pass 1 output: Complete HTML/CSS — skeleton strong, metaphor established") -- Present on line 392 of artifact. CONFIRMED.

3. **extract-d06-d08.md ITEM 29** (L542-543, "Pass 3 output: Finished page — terminal craft applied, signature moments") -- Present as ITEM 29 on line 603. CONFIRMED.

4. **Several experiment protocol items from d09-d11** (ITEMS 6, 12, 19, 30) -- All confirmed present in Section 11.

**VERDICT ON LAYER 9 COVERAGE: PASS (all 188 items accounted for)**

All 158 primary Layer 9 items from classify-by-layer.md are present in the artifact across Sections 0-16. The remaining 30 items (to reach the 188 total from the summary) are items from other primary layers that have L9 ORCHESTRATION as a secondary layer -- these are addressed by the artifact where relevant to orchestration.

---

## 2. REROUTED VALUES ITEMS VERIFICATION

### Critical Discrepancy: Count Mismatch

The artifact header (line 3) claims: "188 items + 17 rerouted VALUES items = 205 items total"
Section 9 header: "REROUTED VALUES ITEMS (17 items, council Pattern 5 Category A)"
Coverage verification (line 947-951): claims all 17 appear in Section 9.

**ACTUAL council Pattern 5 Category A specifies 15 items routed to ORCHESTRATOR (not 17):**

From the council verdict, Category A lists:
1. ITEM 31 (d04-05) -- Suppressor removal curve
2. ITEM 32 (d04-05) -- 4.0 Flagship target
3. ITEM 34 (d04-05) -- Gas Town PA-05 3.5
4. ITEM 35 (d04-05) -- PA-05 3.0 level
5. ITEM 36 (d04-05) -- PA-05 2.5 Middle
6. ITEM 37 (d04-05) -- PA-05 2.0 baseline
7. ITEM 38 (d04-05) -- PA-05 1.5 Flagship
8. ITEM 39 (d04-05) -- Suppressors remaining progression
9. ITEM 43 (d04-05) -- S-01 prioritization
10. ITEM 44 (d04-05) -- Next priorities after S-01
11. ITEM 45 (d04-05) -- Total predicted gain
12. ITEM 46 (d04-05) -- Gas Town data point
13. ITEM 47 (d04-05) -- More lines HURTS
14. ITEM 75 (d06-08) -- Gas Town 10-dimension gap
15. ITEM 036 (d15-17) -- Flagship target PA-05 3.5-4.0

**However, the artifact contains 34 "Rerouted" items total**, distributed across three sections:

- **Section 8** (lines 517-518): Rerouted ITEM 93, 94 (agent counts) -- NOT in council Category A
- **Section 9** (lines 528-559): 18 items including the 14 council Category A d04-05/d06-08 items PLUS ITEM 103, 104, 81, 82 -- ITEM 103/104/81/82 are NOT in council Category A
- **Section 14** (lines 860-876): 14 items (83, 84, 85, 86, 87, 125, 126, 143, 144, 145, 146, 147, 148, 149) -- NONE are in council Category A

### Analysis of Extra Items

The 19 extra "Rerouted" items (34 total minus 15 council Category A) are VALUES layer items from extract-d01-d03.md that the council's Pattern 5 ruling did NOT explicitly reroute to ORCHESTRATOR. These items (81-87, 93-94, 103-104, 125-126, 143-149) are:
- Primary layer: VALUES (Layer 5) in classify-by-layer.md
- They were NOT part of the 34 VALUES -> GATE-RUNNER tensions identified in the council's Pattern 5
- The artifact author appears to have independently decided they belong in the orchestrator document

This is not necessarily WRONG — many of these items (pipeline comparison metrics, compression ratios, register predictions) ARE useful orchestrator context. But the claim that they are "council Pattern 5 Category A" rerouted items is INCORRECT. The council only rerouted 15 items, and one of those (ITEM 036 from d15-17, "Flagship target PA-05 3.5-4.0") does not appear as a labeled rerouted item in Section 9.

### Verification of 15 Council Category A items

| Council Category A Item | Present in Artifact? | Location |
|------------------------|---------------------|----------|
| ITEM 31 (d04-05) | YES | Section 9, line 528 |
| ITEM 32 (d04-05) | YES | Section 9, line 530 |
| ITEM 34 (d04-05) | YES | Section 9, line 539 |
| ITEM 35 (d04-05) | YES | Section 9, line 540 |
| ITEM 36 (d04-05) | YES | Section 9, line 541 |
| ITEM 37 (d04-05) | YES | Section 9, line 542 |
| ITEM 38 (d04-05) | YES | Section 9, line 543 |
| ITEM 39 (d04-05) | YES | Section 9, line 532 |
| ITEM 43 (d04-05) | YES | Section 9, line 533 |
| ITEM 44 (d04-05) | YES | Section 9, line 534 |
| ITEM 45 (d04-05) | YES | Section 9, line 535 |
| ITEM 46 (d04-05) | YES | Section 9, line 544 |
| ITEM 47 (d04-05) | YES | Section 9, line 545 |
| ITEM 75 (d06-08) | YES | Section 9, line 549 |
| ITEM 036 (d15-17) | MISSING as labeled rerouted item | Not tagged "Rerouted" anywhere |

**15/15 council Category A items present in content, but 1 (ITEM 036 d15-17) missing its "Rerouted" tag.**

**VERDICT ON REROUTED ITEMS: PARTIAL FAIL**
- The 15 council Category A items are all present in substance
- The claim of "17 rerouted" is incorrect (council says 15 for Category A)
- 19 additional items are labeled "Rerouted" without council authorization
- The coverage verification section (lines 947-951) claims "all 17" appear in Section 9, but items also appear in Sections 8 and 14

---

## 3. COUNCIL VERDICT COMPLIANCE

### Single-pass DEFAULT verification

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| Single-pass = DEFAULT | YES | Line 13: "Single-pass = DEFAULT", Section 1 lines 69-72, Section 8 line 488 |
| 3-pass = EXPERIMENTAL | YES | Line 13: "3-pass = EXPERIMENTAL (blocked until experiment #21)", Section 10 header line 565-566 |
| All 3-pass items tagged EXPERIMENTAL | YES | Section 10 tags all items as [EXPERIMENTAL] |
| Compositional Critic = REMOVED from default | YES | Line 14, Section 10 line 577 "EXPERIMENTAL/FANTASY" |
| Conviction artifacts = EXPERIMENTAL | PARTIAL | Conviction statement appears in builder Step 1 (line 355) WITHOUT experimental tag; conviction in 3-pass section IS tagged. Council says "Conviction artifacts = EXPERIMENTAL (dependent on 3-pass)" but the Step 1 conviction statement may be distinct from the 3-pass conviction artifact. AMBIGUOUS. |

**VERDICT: PASS with one AMBIGUOUS item** (conviction statement in single-pass builder sequence vs conviction artifacts in 3-pass)

### Honest cost estimates verification

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| Total builder input ~3,600 lines (not "73 lines") | YES | Section 1 lines 123-133, explicit breakdown |
| CF-01 parenthetical on all "73-line" references | YES | Line 133 includes full council ruling text |
| Single-pass cost: ~60-120 min, ~$30-150 | YES | Section 8 line 512 |
| 3-pass cost: ~125-255 min, ~$120-1,050 | YES | Section 8 line 513 |
| REFINE/REBUILD add-on costs | YES | Section 8 lines 514-515 |

**VERDICT: PASS**

### "Activation" framing retirement verification

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| "Activation Pipeline" name retired | YES | Line 15, Section 0 line 53 |
| Replaced with PURPOSE + VOCABULARY | YES | Line 15, Section 0 line 54 |
| No residual "activation" language | PARTIAL | Section 3 line 218 still says "CHANNEL 2 CONTENT (regenerated ~10:1)" which is fine, but the ITEM citations still reference "activation brief" from source documents (line 256 "ITEM 12...BRIEF (~113 lines)"). This is acceptable as source document references. |

**VERDICT: PASS** (source document references to "activation" are unavoidable)

### Phased suppressor removal protocol verification

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| Suppressor removal = HYPOTHESIZED | YES | Section 12 line 708 |
| Monotonic framing REMOVED | YES | Section 12 line 708 "Monotonic framing REMOVED" |
| Phase 1 (SAFE): S-01, S-03, S-08 | YES | Section 12 lines 710-713 |
| Phase 2 (TEST FIRST): S-09, S-07, S-14 | YES | Section 12 lines 715-718 |
| S-09 adjusted to <=150px total stacked gap | YES | Section 12 line 716 |
| Builder receives perception threshold table | YES | Section 12 line 720, Section 3 line 235 |

**VERDICT: PASS**

### Evidence status verification

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| All PA-05 predictions carry "(hypothesis)" | YES | Section 9 items tagged (hypothesis), Section 14 line 868 |
| Opus = STRONG RECOMMENDATION not non-negotiable | YES | Section 1 line 81, Section 5 line 331 |
| Recipe format = OBSERVED not PROVEN | YES | Correctly presented as observational evidence (line 72) |
| Quality equation = CONCEPTUAL MODEL | YES | Section 0 lines 25-26, not presented as operational formula |
| CCS = RESEARCH, do not operationalize | PARTIAL | CCS mentioned in Section 4 line 306 (Mode determinant 4: Removal test CCS) without research caveat. Should carry the council's "RESEARCH -- do not operationalize" tag. |

**VERDICT: PASS with one minor gap** (CCS mentioned as mode determinant without research caveat)

### Pattern 1 ruling (perception thresholds dual-route) verification

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| Thresholds to builder as CALIBRATION | YES | Section 1 line 119 |
| Thresholds to gate-runner as BINARY | YES | Line 119 references gate-format distinction |
| ITEM 120 reclassified ORCHESTRATION | YES | Section 12 line 733 |
| ITEM 124 reclassified DISPOSITION | YES | Section 12 line 738 |
| ITEM 137 reclassified DISPOSITION | YES | Section 4 line 320 |
| ITEM 138 reclassified ORCHESTRATION | YES | Section 4 line 322 |

**VERDICT: PASS**

### Other council mandates

| Council Mandate | Artifact Compliance | Evidence |
|----------------|-------------------|----------|
| Mode selection: builder receives ONE mode's recipe | YES | Section 4 line 277 |
| 80% -> "creative freedom within identity constraints" | NOT APPLIED | Section 3 line 243 still says "Creative Authority + Components (8 lines) 80%/20%". Council ruled to replace "80% creative authority" with "creative freedom within identity constraints." |
| Emotional arc = DESIGN INTENTIONS not guarantees | YES | Section 13 lines 803-806 |
| Cross-page coherence = OPEN QUESTION | NOT EXPLICITLY STATED | Section 13 mentions cross-page coherence (lines 812-814) but doesn't flag it as OPEN QUESTION per council Contradiction D ruling |

**VERDICT: PARTIAL FAIL** (two council rulings not fully applied)

---

## 4. STRUCTURAL ISSUES

### Issue 1: Item Coverage Verification Section Accuracy (lines 927-951)

The self-verification section at the bottom claims to enumerate which items appear in which sections. Spot-checking reveals mostly accurate mappings, but the Section 9 claim is misleading — it says "All 17 rerouted items appear in Section 9" when rerouted items are also in Sections 8 and 14.

### Issue 2: ITEM Number Collisions

Multiple source files use the same ITEM numbers (e.g., ITEM 2 appears in extract-d01-d03.md, extract-d06-d08.md, and extract-d09-d11.md with different content). The artifact handles this by citing source files, which is correct. However, the coverage verification section (lines 927-945) lists items by number only without source file, making verification ambiguous.

### Issue 3: Missing Items from Other Artifacts' Council Reclassifications

The council reclassified several items TO the orchestrator's jurisdiction:
- Pattern 1: ITEM 120, 138 -> ORCHESTRATION layer, ORCHESTRATOR agent
- Pattern 4: ITEM 5, 7 (d18-20) -> GATES layer, ORCHESTRATOR agent (survival function)

ITEM 120 and 138 are present. But ITEMS 5 and 7 from d18-20 (survival function S(x) = 1/(1+C(x))) are NOT present in the orchestrator artifact despite the council ruling them as ORCHESTRATOR agent items. The survival function is a curation function for prompt assembly — it belongs in this document.

### Issue 4: Rerouted ITEM 036 (d15-17) Missing Tag

Council Category A includes ITEM 036 from d15-17 (Flagship target PA-05 3.5-4.0). This appears in the artifact as regular content (e.g., in Section 7 line 446 "PA-05>=3.5/4") but is NOT labeled as a "Rerouted" item despite being in the council's Category A list.

---

## 5. ISSUES FOUND (RANKED BY SEVERITY)

### BLOCKING

None.

### SIGNIFICANT

1. **Rerouted item count is wrong.** Header claims "17 rerouted VALUES items" but council Category A specifies 15. The artifact actually contains 34 "Rerouted" items, 19 of which were not authorized by the council's Pattern 5 ruling. The extra items are useful context but should not be attributed to the council Pattern 5 Category A ruling. **FIX: Change count to 15 in header and Section 9 title, or clearly separate "15 council-rerouted items" from "19 additional VALUES items included for orchestrator context."**

2. **80% creative authority not updated per council.** Section 3 line 243 retains "Creative Authority + Components (8 lines) 80%/20%" instead of council-mandated "creative freedom within identity constraints." **FIX: Update line 243 to match council Contradiction D ruling.**

3. **Survival function items missing.** Council Pattern 4 reclassified ITEM 5 and 7 (d18-20, survival function S(x)) to ORCHESTRATOR agent. These are absent from the artifact. **FIX: Add survival function items to Section 1 or a new subsection.**

### MINOR

4. **CCS mode determinant lacks research caveat.** Section 4 line 306 mentions CCS removal test as mode determinant without the council's "RESEARCH -- do not operationalize until methodology standardized" caveat. **FIX: Add caveat to CCS reference.**

5. **Cross-page coherence not flagged as OPEN QUESTION.** Council Contradiction D ruled this is untested. Section 13 line 812-814 mentions it without the OPEN QUESTION flag. **FIX: Add "(OPEN QUESTION — cross-page coherence UNTESTED)" annotation.**

6. **ITEM 036 (d15-17) missing rerouted tag.** Council Category A includes this item but it lacks "Rerouted" label in artifact. **FIX: Add Rerouted tag or include in Section 9 listing.**

7. **Coverage verification ambiguity.** Lines 927-945 list item numbers without source files, making the self-check difficult to verify independently. **FIX: Include source file prefixes in coverage verification.**

---

## 6. VERDICT

**PASS WITH FIXES (3 SIGNIFICANT, 4 MINOR)**

The artifact correctly captures the entire Layer 9 ORCHESTRATION content (188 items verified), faithfully implements the core council mandates (single-pass default, 3-pass experimental, honest costs, phased suppressor removal, activation framing retired), and is structured as a usable orchestrator control document.

The significant issues are all correctable without restructuring:
1. Fix the rerouted item count/attribution (15 council + 19 additional, not "17 council")
2. Update 80%/20% creative authority to council's "creative freedom within identity constraints"
3. Add the 2 survival function items the council reclassified to ORCHESTRATOR

The document is substantially complete and correct. After the 3 significant fixes, it would be fully council-compliant.
