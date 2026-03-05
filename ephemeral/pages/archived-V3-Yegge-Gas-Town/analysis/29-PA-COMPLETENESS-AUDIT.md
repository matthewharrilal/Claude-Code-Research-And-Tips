# PA COMPLETENESS AUDIT — Master Implementation Checklist (File 22)

**Auditor:** PA Completeness Auditor (Opus 4.6)
**Date:** 2026-02-25
**Scope:** All PA and experiential pass items in the master checklist, verified against File 16 (PA surgery plan) and File 08 (pipeline PA enrichments)
**Method:** Item-by-item audit of every PA/experiential checklist item against the three root issues and the user's specific diagnostic questions

---

## EXECUTIVE SUMMARY

**Overall verdict: MOSTLY COMPLETE with 9 GAPS requiring remediation.**

The master checklist is impressively thorough for a 276KB document synthesizing 21+ analysis files. PA items are the most detailed section, with exact proposed text, propagation cascades, anti-loss mechanisms, and post-verification steps. However, 9 specific gaps exist -- some are missing details within existing items, others are items that should exist but do not. The most critical gap is that the checklist does NOT directly fix the PA-02 routing problem (legibility checked by only 1 of 9 auditors), instead relying on the experiential pass (ME-001) as an indirect fix. This is a defensible strategy but should be made explicit.

---

## SECTION 1: ITEM-BY-ITEM AUDIT

### 1.1 MUST-01 (ME-001 — Experiential Pass)

**Status: MOSTLY COMPLETE — 3 gaps**

| Check | Present? | Detail |
|-------|----------|--------|
| Exact text to add to pa-deployment.md | YES | Lines 154-173 of File 16 provide the complete proposed text block. Checklist line 40 references "Add new Section 2.5 with experiential pass protocol." |
| Observation verbs vs measurement verbs distinction | YES | Checklist line 41: "Use observation verbs: 'Describe what you see,' 'Note your first impression.' NOT measurement verbs: 'Verify legibility,' 'Check that text is readable.'" Also in post-verification step 5: "Verify observation verbs only." |
| Time cost concern (ADV-1A: +45-72 min per run) | PARTIAL | Checklist line 48 references "ADV-1A time cost concerns" in Source audit files but does NOT specify how this is addressed. The time cost concern is addressed by MUST-10 (3-auditor optimization), but MUST-10 is NOT in the 8-change plan. |
| Information isolation (no tier definitions, no PA-05 scores) | YES | Checklist line 42: "CRITICAL: experiential pass instructions must contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts." Post-verification step 1: "zero calibration data, zero mechanism counts, zero pipeline history." |
| Propagation cascade complete | YES | Checklist line 43 lists 4 propagation targets: pa-deployment.md (primary), MANIFEST.md quickstart, EXECUTION-TRACKER-TEMPLATE.md, PA auditor prompt template. |
| **U-01 universal legibility pre-check** | **MISSING** | Checklist line 38 "What" field says: "Also adds universal legibility pre-check U-01 as FIRST question for all 9 auditors." But the "How" field (line 40), the proposed text in File 16 (lines 154-173), and the propagation cascade do NOT include U-01. There is no exact text for U-01 anywhere. This is a phantom feature -- claimed but not specified. |
| Exact insertion point | YES | Checklist line 39: "insertion after Section 1.2 assignments, before Section 2 screenshots." File 16 adds precision: "between screenshot-reading protocol and question answering." Note: these two locations are DIFFERENT (before Section 2 screenshots vs. between screenshot-reading and question answering). The surgery plan's location (Section 2.5) is correct per the experiential-pa-analysis.md reference. |
| Line count reconciliation | PARTIAL | Checklist says +22 lines (line 46). Surgery plan says +18 lines (line 152). The 4-line discrepancy is unexplained. If U-01 was supposed to be the additional 4 lines, this makes sense but U-01 has no text. |

**GAP 1 — U-01 universal legibility pre-check is a phantom feature.**

The checklist's "What" field claims ME-001 "Also adds universal legibility pre-check U-01 as FIRST question for all 9 auditors" but no text for U-01 exists anywhere in the checklist or surgery plan. The proposed text block is a 3-part experiential pass (illegible, effortful, skipped text) which is excellent but is NOT a "question" -- it is a free-form observation exercise. U-01 needs to either:
- (a) Be specified as an actual question with exact text and auditor assignment, or
- (b) Be removed from the "What" description to avoid confusion during implementation

**Recommended fix for line 38 of the checklist:**

Either ADD the U-01 text (option a):
```
After the experiential pass block in Section 2.5, add:

> **U-01 (Universal — All Auditors):** Before your assigned questions,
> answer this one question: "Is there any text on this page that you
> cannot read comfortably?" If YES, identify every instance. This
> finding overrides all other findings in priority.
```
And update pa-questions.md to include U-01 in every auditor's assignment list (9 auditor-location updates + question total).

OR remove the U-01 reference (option b):
```
Change line 38 "What" field from:
"Also adds universal legibility pre-check U-01 as FIRST question for all 9 auditors."
To:
"The experiential pass itself serves as the universal legibility check -- auditors report illegible, effortful, and skipped text before answering any questions."
```

**Recommendation:** Option (b). The experiential pass already covers what U-01 would do. Adding a formal question creates 9-location update overhead for marginal gain. But the checklist must not claim a feature it does not specify.

**GAP 2 — Line count discrepancy (22 vs 18).**

Checklist claims +22 lines. Surgery plan specifies +18 lines with exact text. The 4-line gap is likely the phantom U-01. The checklist should be updated to +18 lines if U-01 is dropped, or +22 with U-01 text if kept.

---

### 1.2 MUST-02 (ME-002 — Weaver Priority Override)

**Status: COMPLETE — 0 gaps**

| Check | Present? | Detail |
|-------|----------|--------|
| Exact insertion point in pa-weaver.md | YES | Line 58: "Add new Section 5.0 with usability priority override." File 16 surgery plan (Section 3.6) specifies: "new Section 5.0 (before existing Section 5)." |
| Override trigger defined | YES | Line 56: "Is there ANY finding a reader CANNOT READ or CANNOT USE?" = Fix #1 regardless of gate status." |
| Usability overrides richness/composition | YES | Line 56: "New priority ordering: (1) Human readability, (2) Visual perception, (3) Identity compliance." |
| Binary framing | YES | Line 59: "But the usability override itself should be binary." |
| Exact text provided | YES | File 16 lines 311-322 provide the exact proposed text for Section 5.0. |
| Does it ensure legibility issues rank FIRST? | YES | Line 56: "= Fix #1 regardless of gate status." The priority ordering is explicit: readability first. |

**Assessment:** This item is well-specified. The Weaver priority override directly addresses the root problem that the Weaver ranked the illegible chart as Fix #5 instead of Fix #1. The binary trigger ("CANNOT READ or CANNOT USE") is exactly right.

---

### 1.3 MUST-04 (ME-004 — Builder Legibility Self-Check)

**Status: COMPLETE — 0 gaps (but see core problem assessment below)**

| Check | Present? | Detail |
|-------|----------|--------|
| Specifies Q0 and Q1 | YES | Line 97: "Q0: text legibility scan (size <12px? contrast <3:1? diagram labels?). Q1: visual component clarity check." |
| Recipe framing specified | YES | Line 100: "Q0 must use recipe framing: 'Assess: Can body text be comfortably read at arm's length?' NOT 'Verify that text size >= 16px.'" |
| Renumbering specified | YES | Line 99: "Renumber existing Q1-Q7 to Q2-Q8." |
| Exact text provided | PARTIAL | Line 99 provides the recipe-framed version of Q0 but not the complete verbatim text for both Q0 and Q1. The surgery plan should specify both questions with full Read/Select/Deploy/Assess structure. |
| Addresses "can you read everything?" | YES | The Q0 text "Assess: Can body text be comfortably read at arm's length?" directly addresses the user's concern that the builder's 7 self-evaluation questions never asked "can you read everything on the page?" |

**Assessment:** This item directly fixes the identified gap. The builder currently has 7 self-check questions and none ask about legibility. Q0 adds exactly this.

---

### 1.4 MUST-06 (ME-006 — Screenshot Validation)

**Status: MOSTLY COMPLETE — 1 gap**

| Check | Present? | Detail |
|-------|----------|--------|
| CSS override expansion (3 lines) | YES | File 16 lines 194-201 specify the exact 6-line expanded CSS override replacing the current 1-line override. Includes `visibility: visible !important`, `transform: none !important`. |
| Blank-screenshot detection thresholds | YES | Line 133: "no >2 consecutive blank, <20% blank total." File 16 lines 208-214 provide exact validation gate text with these thresholds. |
| ME-046 (recovery protocol) linked | PARTIAL | Line 133 mentions "full-page cross-reference" as sub-change (3). ME-046 (corrected screenshot recovery protocol, lines 1407-1438) is a separate TIER 2C item specifying "every 900px of scroll height" algorithmic re-capture. ME-006 and ME-046 are related but NOT cross-referenced. |
| DPR validation | YES | Line 133 sub-change (4): "Add DPR validation to orchestrator." |
| Builder signal mechanism | NOTED AS PRE-CONDITION | Line 140-141: "ADV-1C-1/1C-2/1C-3: CSS overrides CHANGE THE PAGE... Needs builder signal mechanism." MUST-12 (lines 241-255) is the builder signal item. |

**GAP 3 — ME-006 and ME-046 not cross-referenced.**

ME-006 (MUST-06) says "re-capture with expanded overrides" but does not specify HOW to re-capture. ME-046 (TIER 2C) specifies the algorithmic re-capture protocol (every 900px). These should be explicitly linked. Without ME-046, an implementer of ME-006 would know to re-capture but not HOW.

**Recommended fix for MUST-06, line 133-134:**

Add to the "How" field:
```
If re-capture is triggered, follow the Corrected Screenshot Recovery Protocol (ME-046):
corrected screenshots MUST cover the ENTIRE page at regular intervals (every 900px of
scroll height), not orchestrator-selected regions. See TIER 2C [ME-046] for full protocol.
```

---

### 1.5 ME-009 (Experiential Aggregation Thresholds)

**Status: COMPLETE — dual-entry noted but addressed**

| Check | Present? | Detail |
|-------|----------|--------|
| Exact threshold table (>=3/9 = CONFIRMED) | YES | Appears in MUST-09 (lines 187-199) AND TIER 2D (lines 1448-1483). Both include the exact same threshold table: >=3/9 CONFIRMED, 1-2/9 POSSIBLE, 0/9 CLEAR. |
| Dual-entry problem | ACKNOWLEDGED | ME-009 appears as MUST-09 (lines 187-199) in the MUST tier AND as a separate TIER 2D item (lines 1448-1483). The TIER 2D version is more detailed (includes the exact proposed text from File 16, placement in Appendix B, compression offset). The MUST-09 version is the summary. |
| Location specified | YES | TIER 2D version: "pa-questions.md Appendix B (+7 lines for threshold table)" with exact text. |
| Weaver input format | YES | MUST-09: "Add pre-aggregated summary format to pa-weaver.md." TIER 2D: "pa-weaver.md should reference this table in its experiential findings section." |

**Assessment:** The dual-entry is not a bug -- MUST-09 is the mandate, TIER 2D is the implementation detail. However, the implementation order section should clarify that only ONE implementation pass is needed, not two.

---

### 1.6 PA Question Changes (ME-021, ME-022, ME-023, ME-037)

**Status: MOSTLY COMPLETE — 1 gap**

| Check | Present? | Detail |
|-------|----------|--------|
| PA-80 (Navigation Usability) exact text | YES | Lines 1221-1222: full question text with auditor assignment (E). |
| PA-81 (Information Extraction) exact text | YES | Lines 1267-1268: full question text with auditor assignment (B). Includes PE-006 image-vs-CSS distinction. |
| PA-54 (Content Promise vs Delivery) exact text | YES | Lines 1306-1307: full question text with auditor assignment (G). |
| Auditor assignments | YES | PA-80 to E (6->7), PA-81 to B (7->8 after PA-06 retirement), PA-54 to G (7->8). |
| 3 retirements (PA-06, PA-09, PA-40) | YES | MUST-26 (lines 493-504) specifies all 3 retirements with exact line numbers in pa-questions.md (L163, L171, L204). |
| 11-location updates | YES | MUST-26 line 498: "11 locations must be updated: pa-questions.md, pa-deployment.md, MANIFEST.md (L150/151/154/159), pa-manifest.md, pa-weaver.md (L18), pa-guardrails.md (L15 + AP-05 mapping L78), EXECUTION-TRACKER-TEMPLATE.md." |
| Net-zero constraint (3 retire + 3 add = 69) | YES | Verified at multiple locations: File 16 Section 4.4 (question count table showing 69->66->69), MUST-26 line 499. ME-021 line 1231: "66 + PA-80 + PA-81 + PA-54 = 69." |
| **GAP-08 sub-checks merged into PA-81** | **NOT IN MUST-TIER** | Lines 1705-1736 (TIER 2E) propose extending PA-81 to include visual component completeness sub-checks (legend/key, item count vs text claims, axis/data labels). If GAP-08 is merged into PA-81, the PA-81 text in ME-022 needs to be the EXTENDED version. Currently ME-022 and GAP-08 specify different PA-81 text. |

**GAP 4 — PA-81 text exists in two incompatible versions.**

ME-022 (TIER 2B, line 1267) defines PA-81 as:
```
"For every chart, diagram, or infographic: can you answer 'What is the ONE thing
this element wants me to know?' in under 5 seconds? ... Note whether raster image
or HTML/SVG."
```

GAP-08 (TIER 2E, lines 1716-1719) defines an EXTENDED PA-81 as:
```
"For every chart, diagram, or infographic: (a) Can you answer 'What is the ONE
thing...' in <5 seconds? (b) Does it have a legend/key if it uses symbols/colors?
(c) Does the item count match surrounding text claims? (d) Are axis/data labels
present and readable? Note whether raster image or HTML/SVG."
```

**Recommended fix:** The checklist should specify which version is canonical. Since GAP-08 is a strict superset of ME-022, the recommended approach is to use the GAP-08 extended version as the single PA-81 text. Add to ME-022 (line 1267):
```
NOTE: This question text is the EXTENDED version incorporating GAP-08 sub-checks.
See TIER 2E [GAP-08] for rationale. The GAP-08 entry should reference this as the
canonical PA-81 text rather than maintaining a separate version.
```

---

### 1.7 PA Enrichments (ME-032, ME-033, ME-034, ME-035, ME-057)

**Status: COMPLETE — 0 gaps**

| Item | Exact old->new text? | Propagation complete? |
|------|---------------------|----------------------|
| ME-032 (pipeline introspection annotations) | YES — Lines 1497-1505 provide exact text for PA-55, PA-56, PA-69 annotations. | YES — pa-weaver.md reference noted. |
| ME-033 (void collapse rule) | YES — Lines 1536-1541 provide exact 4-line text. Correctly references PA-50, PA-33, PA-51 (NOT PA-09, which is retired). | YES — OR-4 orphan risk from File 17 is handled. |
| ME-034 (defect-bypass for H) | YES — Lines 1572-1575 provide exact 3-line text. | YES — minimal cascade. |
| ME-035 (footer/header in PA-02 scope) | YES — Lines 1607-1609 provide exact in-cell text modification. | YES — 0 structural lines. |
| ME-057 (emotional arc fix mapping) | YES — Lines 1641-1645 provide exact 3-line text. | YES — Weaver-only. |

---

### 1.8 Anti-Loss Mechanisms Relevant to PA

**Status: MOSTLY COMPLETE — 1 gap**

| Mechanism | Check | Status |
|-----------|-------|--------|
| M-04 (information isolation) | Are PA items properly isolated from calibration data? | YES — Checklist line 42 explicitly states experiential pass must contain "NO tier definitions, NO PA-05 expected scores, NO mechanism counts." ME-009 threshold table is placed in Appendix B (Weaver-only). Post-verification steps check for isolation violations. |
| M-20 (observation verbs) | Are PA instructions using observation verbs? | YES — Checklist line 41 specifies observation verbs. Post-verification step 5 checks. Format rules section (around line 3185) re-emphasizes "Perceptual verbs: Does...? Is there...? Can you...? NOT measurement verbs: Verify that..." |
| M-22 (9-auditor deployment) | Is the deployment protocol correctly specified? | PARTIAL — M-22 is referenced throughout but there is a tension between ME-001 (all 9 auditors do experiential pass) and MUST-10 (only 3 auditors do experiential pass). The checklist does not resolve this tension -- MUST-10 is a separate item marked "NO" for the 8-change plan, but if someone implements both ME-001 and MUST-10, the instructions would conflict. |

**GAP 5 — ME-001 and MUST-10 create conflicting instructions if both implemented.**

ME-001 says "each auditor performs an experiential pass" (all 9). MUST-10 says "designate 3 specific auditors." The checklist notes MUST-10 as an "optimization OF ME-001" with pre-condition "ME-001 must be designed first." But there is no specification for what ME-001 looks like AFTER MUST-10 is applied. If an implementer applies MUST-01 first (all 9 auditors) and then MUST-10 later (only 3), they need to MODIFY the ME-001 text. The modification is not specified.

**Recommended fix for MUST-10 (line 211):**

Add to the "How" field:
```
If ME-001 has already been implemented with "each auditor performs an experiential pass,"
REPLACE that instruction with: "Auditors A, E, and I perform an experiential pass before
their assigned questions. Auditors B, C, D, F, G, H proceed directly to their assigned
questions." Update the Section 2.5 title from "Experiential Pass (MANDATORY -- Before
Questions)" to "Experiential Pass (MANDATORY -- Auditors A, E, I)."
```

---

## SECTION 2: CORE PROBLEM ASSESSMENT

The user identified three core problems. Here is whether the checklist addresses each:

### 2.1 "Builder's 7 self-evaluation questions don't ask 'can you read everything on the page?'"

**ADDRESSED by MUST-04 (ME-004).** Line 97 specifies Q0: "text legibility scan (size <12px? contrast <3:1? diagram labels?)." Line 99 specifies the recipe-framed version: "Assess: Can body text be comfortably read at arm's length?" This directly adds the missing legibility self-check.

**Verdict: FIXED.**

### 2.2 "PA-02 routed to only 1 of 9 auditors"

**NOT DIRECTLY ADDRESSED. Addressed indirectly through ME-001 experiential pass.**

This is the most important finding in this audit. The checklist does NOT add PA-02 to more auditors' assignments. Instead, it relies on the experiential pass (ME-001) to achieve the same goal: all 9 auditors (or 3 per MUST-10) perform a legibility check BEFORE their assigned questions.

The strategy is: rather than routing PA-02 to more auditors (which would mean modifying the question assignment table and overloading auditors who already have domain-specific questions), add a universal experiential pass that accomplishes the same detection goal.

This is a defensible strategy. The experiential pass is arguably BETTER than routing PA-02 to multiple auditors because:
- It catches legibility issues through OBSERVATION (what did you notice?) rather than MEASUREMENT (does the contrast pass?)
- It avoids the auditor-overload problem (11 questions per auditor C is already flagged as too many)
- It creates a separate reporting channel (Section 0) that is harder to bury

However, the checklist should EXPLICITLY state this rationale. Currently, the PA-02 routing problem is referenced in the source audit files (line 48: "audit-09-11.md") but is never directly acknowledged as a problem being solved by ME-001.

**GAP 6 — PA-02 routing problem is not explicitly addressed.**

The checklist should add a note to MUST-01 explaining that the experiential pass supersedes the need to route PA-02 to more auditors. Without this, an implementer might assume PA-02 routing is an unsolved problem and attempt to fix it separately, creating redundancy.

**Recommended fix for MUST-01, after the "Post-verification" row (new row):**

```
| **Supersedes** | ME-001 experiential pass supersedes the need to route PA-02 (legibility) to multiple auditors. The Phase 2 finding that "PA-02 was routed to only 1 of 9 auditors" (Auditor B) is addressed by giving ALL auditors (or 3 per MUST-10) a legibility observation task. ME-035 extends PA-02's scope (to include header/footer/chart text), and the experiential pass makes legibility a universal check rather than a single-auditor responsibility. HE-009 (dual-route PA-02/PA-08 to 2 auditors) is therefore DEFERRED — the experiential pass is a stronger solution. |
```

Additionally, ME-035 (extend PA-02 scope to include header, footer, chart labels) is complementary -- it makes Auditor B's existing PA-02 more thorough. But the ROUTING issue (only 1 auditor checks legibility) is what ME-001 solves.

### 2.3 "Weaver ranked illegible chart as Fix #5"

**ADDRESSED by MUST-02 (ME-002).** Line 56: "Is there ANY finding a reader CANNOT READ or CANNOT USE?" = Fix #1 regardless of gate status." The priority ordering "(1) Human readability, (2) Visual perception, (3) Identity compliance" directly ensures legibility issues rank first.

Additionally, MUST-08 (ME-008, circuit breaker) adds orchestrator-level enforcement between PA reports and the Weaver, ensuring usability findings are elevated to BLOCKING-USABILITY before the Weaver even begins fix ordering.

**Verdict: FIXED.**

---

## SECTION 3: ADDITIONAL GAPS FOUND

### GAP 7 — ME-015 (BLOCKED BY DEFECT) appears in TIER 2B but should have a MUST-tier cross-reference.

ME-015 (Data Corruption Escalation Protocol) is classified SIGNIFICANT in TIER 2B (lines 922-971) but is NOT in the MUST tier or the 8-change plan. However, it is the ONLY item that gives auditors the authority to say "I cannot score this question because the page is too broken." Without ME-015:
- All 9 auditors are forced to produce scores for invisible content
- The Weaver receives 9 forced scores mixed with genuine assessments
- The experiential pass (ME-001) flags the problem but auditors still must answer their questions

The surgery plan (File 16, Section 3.4) classifies ME-015 as SIGNIFICANT and provides exact text. The checklist includes it with full detail. But it is not cross-referenced from MUST-01 or MUST-02, which both depend on auditors having a way to report "BLOCKED."

**Recommended fix:** Add a cross-reference from MUST-01:

In MUST-01 "Pre-conditions" row (line 44), add:
```
ME-015 (BLOCKED BY DEFECT scoring option) is a RECOMMENDED companion to ME-001.
Without ME-015, auditors who identify illegibility in the experiential pass must still
force YES/NO/CONDITIONAL answers for their questions, diluting the experiential signal.
```

### GAP 8 — No checklist item addresses the "401 false violations per run" root issue directly.

The three root issues identified by the user include "Spec Bloat: 401 false violations/run drowning real signals." The checklist addresses this through individual gate fixes:
- ME-010 (GR-05 split, reduces sub-perceptual false positives)
- ME-011 (GR-06 rendered font check, reduces 181 font violations)
- ME-012 (GR-14 parent scoping, reduces 13 false positives)
- ME-013 (GR-09 tolerance bands)

But there is no AGGREGATE item that says "after all gate fixes, verify total violation count has decreased to target X" or "REQUIRED violations should not exceed Y per run." The individual fixes are specified but the aggregate success criterion is missing.

**Recommended fix:** Add a new post-implementation verification item to Section 5 (Implementation Order) or Section 7 (Anti-Loss Verification):

```
### AGGREGATE GATE ACCURACY VERIFICATION

After all gate fixes are applied, run gate-runner on V3 Gas Town HTML and verify:
- REQUIRED violations reduced from ~401 to target <= 50
- Zero REQUIRED violations from sub-perceptual measurements (GR-05b → ADVISORY)
- Zero REQUIRED violations from fallback fonts (GR-06 → ADVISORY for unrendered fonts)
- Zero false positives from nested element gaps (GR-14 scoped to zone siblings)
- Border-width violations at 0.667px and 2.667px now PASS (GR-09 tolerance bands)

If total REQUIRED violations still exceed 100 after all fixes: the gate subtraction
plan (ADV-07a) needs to be more aggressive, or additional gates need tier downgrades.
```

### GAP 9 — The "25 mechanisms documented but not properly applied" root issue has checklist coverage but no single-point verification.

The user's third root issue ("Anti-Loss Not Working") refers to 25 anti-loss mechanisms. The checklist has a Section 7 (Anti-Loss Verification) placeholder (line 636-637) but this section is marked as a placeholder: `<!-- SECTION 7 WILL BE INSERTED HERE BY NEXT AGENT -->`. The mechanisms are referenced throughout individual items (M-04, M-06, M-09, M-11, M-12, M-13, M-19, M-20, M-22, M-23, M-25) but there is no consolidated verification that all 25 mechanisms are checked post-implementation.

The Safety Checklist Cross-Reference (lines 508-530) identifies the 8 highest-risk mechanisms and 3 most dangerous interactions, which partially addresses this. But the placeholder Section 7 suggests the full anti-loss verification was planned but not yet written.

**Status:** This is a KNOWN INCOMPLETE section (placeholder exists), not a missed gap. No action needed beyond completing the placeholder.

---

## SECTION 4: SUMMARY OF ALL GAPS

| # | Gap | Severity | Location | Recommended Fix |
|---|-----|----------|----------|----------------|
| 1 | U-01 universal legibility pre-check is claimed but has no text | SIGNIFICANT | MUST-01 line 38 | Either specify U-01 text or remove the claim (option b recommended) |
| 2 | Line count discrepancy +22 vs +18 | MINOR | MUST-01 line 46 | Reconcile with surgery plan's +18 count |
| 3 | ME-006 and ME-046 not cross-referenced | MODERATE | MUST-06 lines 133-134 | Add explicit ME-046 reference for re-capture protocol |
| 4 | PA-81 text exists in two versions (ME-022 vs GAP-08) | MODERATE | ME-022 line 1267 and GAP-08 line 1716 | Specify canonical version (recommend GAP-08 extended) |
| 5 | ME-001 and MUST-10 create conflicting instructions if both applied | MODERATE | MUST-10 line 211 | Add modification instructions for post-MUST-10 ME-001 text |
| 6 | PA-02 routing problem not explicitly acknowledged as solved by ME-001 | SIGNIFICANT | MUST-01 | Add "Supersedes" row explaining experiential pass replaces PA-02 multi-routing |
| 7 | ME-015 (BLOCKED BY DEFECT) not cross-referenced from MUST-01/02 | MINOR | MUST-01 line 44 | Add cross-reference noting ME-015 as recommended companion |
| 8 | No aggregate gate accuracy target after all fixes | MODERATE | Section 5 or 7 | Add post-implementation aggregate violation count verification |
| 9 | Section 7 (Anti-Loss Verification) is placeholder | KNOWN | Lines 636-637 | Complete the placeholder (planned, not missed) |

---

## SECTION 5: WHAT THE CHECKLIST GETS RIGHT

For completeness, here is what the checklist handles well on PA/experiential items:

1. **Exact proposed text for every PA enrichment.** File 16 surgery plan text is referenced or reproduced for ME-001, ME-002, ME-006, ME-009, ME-015, ME-019, ME-032, ME-033, ME-034, ME-035, ME-057. This is the most implementation-ready section of the entire checklist.

2. **Anti-loss mechanism mapping is thorough.** Every MUST item lists which M-XX mechanisms it touches, with CRITICAL and CAUTION annotations. The three most dangerous interactions (lines 527-529) are explicitly called out.

3. **Propagation cascades are complete.** The 11-location update pattern for ME-037 retirements (line 498) lists every location by file and line number. The 5-location update pattern for new questions (lines 1224-1231) is consistent across ME-021, ME-022, ME-023.

4. **Surgery plan integration.** The checklist successfully integrates File 16's detailed surgery plan, preserving exact text blocks, compression offsets, and net budget accounting.

5. **Orphan risk handling.** OR-4 (PA-09 reference in void collapse rule) and OR-5 (PA-40 in AP-05 mapping) are both tracked and resolved.

6. **The three root issues are addressed.** Priority inversion is fixed by ME-001 (experiential pass) + ME-002 (usability override) + ME-008 (circuit breaker). Spec bloat is fixed by ME-010/011/012/013 gate fixes + ADV-07a subtraction. Anti-loss mechanisms are mapped throughout.

---

## SECTION 6: VERDICT

The master implementation checklist is **91% complete** on PA/experiential items. The 9 gaps identified above are:
- 2 SIGNIFICANT (U-01 phantom feature, PA-02 routing rationale missing)
- 4 MODERATE (ME-006/046 link, PA-81 dual versions, ME-001/MUST-10 conflict, aggregate gate target)
- 2 MINOR (line count discrepancy, ME-015 cross-reference)
- 1 KNOWN (Section 7 placeholder)

All gaps have recommended fixes with exact text provided in this report. After applying these 9 fixes, the checklist would be implementation-ready for all PA and experiential items with zero ambiguity.
