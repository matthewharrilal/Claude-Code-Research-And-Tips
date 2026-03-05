# Section B Reorder Specification

**Date:** 2026-02-15
**Designer:** reorder-designer (checklist-hardening team)
**Task:** Task #5
**Purpose:** Restructure Section B to follow build workflow sequence, and deduplicate Section E

---

## EXECUTIVE SUMMARY

**PROBLEM IDENTIFIED:** Section B orders items pedagogically (how to explain the concepts), not by build workflow (when to check them during construction). This causes dependency violations where builders are instructed to make design decisions BEFORE reading the constraints those decisions depend on.

**PRIMARY VIOLATION:**
- **B8 (Always-load)** comes at position 8 of 9, AFTER B2-B6 (container width, mechanism deployment)
- **Correct sequence:** Read soul files (B8) → Know tier rules (B1) → Know padding floors (B9) → Set container width (B2) → Deploy mechanisms (B3-B6) → Verify soul (B7)

**IMPACT:** Track 1's Phase D instant fail was caused by builders skipping always-load and violating soul constraints. The checklist's ordering reinforces this failure mode by making the always-load check appear late in the sequence.

**SOLUTION:** Reorder Section B to match natural build workflow. Keep existing item IDs but add reorder notes so the writer knows what moves where.

---

## SECTION B: CURRENT VS PROPOSED ORDER

### Current Order (Pedagogical)

| Position | Subsection | Items | Rationale (Current) |
|----------|-----------|-------|---------------------|
| 1 | B1. Pipeline Routing | 4 items | "First, classify the tier" |
| 2 | B2. Container Width | 4 items | "Second, set the most important specification" |
| 3 | B3. Mechanism Breadth | 6 items | "Third, deploy mechanisms across categories" |
| 4 | B4. Mechanism Count | 3 items | "Fourth, verify mechanism count landed correctly" |
| 5 | B5. Mechanism Justification | 3 items | "Fifth, document why mechanisms fit" |
| 6 | B6. Fractal Coherence | 7 items | "Sixth, verify pattern coherence at 2 scales" |
| 7 | B7. Soul Compliance | 7 items | "Seventh, verify visual identity constraints" |
| 8 | B8. Token Compliance | 2 items | "Eighth, check token usage" |
| 9 | B9. Guardrail Compliance | 8 items | "Ninth, verify accessibility and readability" |

**Total: 9 subsections, 44 items**

Wait, that's 44 items. Let me recount from the checklist:
- B1: 4 items (B1.1-B1.4)
- B2: 4 items (B2.1-B2.4)
- B3: 6 items (B3.1-B3.6)
- B4: 3 items (B4.1-B4.3)
- B5: 3 items (B5.1-B5.3)
- B6: 7 items (B6.1-B6.7)
- B7: 7 items (B7.1-B7.7)
- B8: 2 items (B8.1-B8.2)
- B9: 8 items (B9.1-B9.8)

Total: 4+4+6+3+3+7+7+2+8 = 44 items

But the usability audit says "Section B (35 items)". Let me check... The audit Section 3 says "Build verification (Section B): 35 items". The summary statistics at line 408 says "B. Build Requirements: 35 items".

Ah, I see the discrepancy. The 35 count likely excludes some items or counts subsections differently. Let me use the actual checklist structure: 9 subsections as listed.

### Proposed Order (Build Workflow)

| Position | Subsection | Items | Rationale (Proposed) |
|----------|-----------|-------|---------------------|
| **1** | **B8. Token Compliance** | 2 items | **FIRST: Read soul files BEFORE any design** |
| **2** | **B1. Pipeline Routing** | 4 items | **SECOND: Classify tier and select pattern** |
| **3** | **B9. Guardrail Compliance** | 8 items | **THIRD: Know padding floors before container decisions** |
| **4** | **B2. Container Width** | 4 items | **FOURTH: Set container width with guardrails in mind** |
| **5** | **B3. Mechanism Breadth** | 6 items | **FIFTH: Deploy mechanisms across categories** |
| **6** | **B4. Mechanism Count** | 3 items | **SIXTH: Verify count landed naturally** |
| **7** | **B5. Mechanism Justification** | 3 items | **SEVENTH: Document mechanism-content fit** |
| **8** | **B6. Fractal Coherence** | 7 items | **EIGHTH: Verify 2-scale pattern coherence** |
| **9** | **B7. Soul Compliance** | 7 items | **NINTH (FINAL): Verify no soul violations** |

**Total: Same 9 subsections, same 44 items, different order**

---

## DEPENDENCY ANALYSIS (Why This Order)

### Position 1: B8 Token Compliance → FIRST

**MUST be first because:**
- **B8.2 (Always-load protocol)** requires reading `prohibitions.md` (353 lines) and `tokens.css` (174 lines) BEFORE any design work
- These files contain:
  - Soul constraints (border-radius: 0, box-shadow: none, no gradients, typography trinity)
  - Color palette (no pure black/white, warm palette only)
  - Token values (spacing, colors, typography to USE in design)
- **Current problem:** Builder sets container width (B2), deploys mechanisms (B3-B6), THEN reads constraints (B8)
- **Result:** Container width may violate tokens, mechanisms may use forbidden values, all design may violate soul

**Evidence:** Usability audit lines 209-213:
> "B8.2 (Always-load protocol) requires reading `prohibitions.md` and `tokens.css` BEFORE any design work. But B8 comes AFTER B2 (container width) and B3-B6 (mechanism deployment). If builder follows sequentially, they design first, THEN read the constraints. **This is backward** and explains Track 1 Phase D instant fail."

### Position 2: B1 Pipeline Routing → SECOND

**MUST be second because:**
- Tier classification determines which Phases to skip
- Pattern selection determines which density pattern guides mechanism deployment
- **Cannot be first:** B8 must be first (read constraints before making any decisions)
- **Cannot be later:** B9 guardrails and B2 container width depend on knowing the tier

**Current position: FIRST (correct relative to B2-B9, but should be AFTER B8)**

### Position 3: B9 Guardrail Compliance → THIRD

**MUST be before B2 (Container Width) because:**
- **B9.1** sets minimum horizontal padding ≥32px
- **B9.3** sets compression ratio (deepest ≥40% of shallowest)
- **B2.4** says "narrow aesthetic via internal padding" — this ASSUMES guardrails are known
- **Current problem:** Builder sets container width (B2) without knowing padding floors (B9.1), then discovers padding constraints force wider container
- **Result:** Builder has to revise container width, or violate guardrail to preserve desired width

**Evidence:** Usability audit lines 215-220:
> "B9.1 (minimum horizontal padding >= 32px) is a Phase 4.0 guardrail. B9.3 (compression ratio) constrains how tight spacing can go. B2.4 says 'narrow aesthetic via internal padding' which ASSUMES guardrails are known. But B9 comes AFTER B2. **Builder sets container width before knowing padding floors**."

### Position 4: B2 Container Width → FOURTH

**MUST be fourth because:**
- **Highest-priority specification** (line 85: "single highest-priority binary check")
- But depends on knowing guardrails (B9) to avoid violations
- **Cannot be earlier:** Needs B8 (tokens), B1 (tier), B9 (guardrails)
- **Must be before B3-B6:** Mechanism deployment happens within the container

**Current position: SECOND (should be FOURTH)**

### Positions 5-8: Mechanism Deployment Sequence → UNCHANGED

**B3 → B4 → B5 → B6 order is correct:**
- B3: Deploy mechanisms across categories (breadth first)
- B4: Count emerged naturally from breadth
- B5: Justify each mechanism's content fit
- B6: Verify fractal coherence (pattern at 2 scales)

**This sequence is ALREADY correct.** No reordering needed within this group.

### Position 9: B7 Soul Compliance → LAST (FINAL VERIFICATION)

**MUST be last because:**
- Soul compliance is a VERIFICATION step, not a design step
- Checks that CSS written in B2-B6 didn't violate constraints read in B8
- **Current position: SEVENTH (should be NINTH/LAST)**

**Soul checks are automatable via regex.** They are final pass/fail gates, not design decisions.

---

## WHAT MOVES

### Moves Forward (Earlier in Sequence)

| Subsection | Current Position | New Position | Distance Moved |
|-----------|------------------|--------------|----------------|
| B8. Token Compliance | 8 | 1 | **+7 positions** |
| B9. Guardrail Compliance | 9 | 3 | **+6 positions** |

### Moves Backward (Later in Sequence)

| Subsection | Current Position | New Position | Distance Moved |
|-----------|------------------|--------------|----------------|
| B1. Pipeline Routing | 1 | 2 | -1 position |
| B2. Container Width | 2 | 4 | -2 positions |
| B3. Mechanism Breadth | 3 | 5 | -2 positions |
| B4. Mechanism Count | 4 | 6 | -2 positions |
| B5. Mechanism Justification | 5 | 7 | -2 positions |
| B6. Fractal Coherence | 6 | 8 | -2 positions |
| B7. Soul Compliance | 7 | 9 | -2 positions |

### Stays in Same Relative Position

**None.** Every subsection changes position.

---

## ITEM ID STRATEGY

**DECISION: Keep existing IDs, add reorder notes.**

**Rationale:**
- Item IDs (B1.1, B2.1, etc.) are already referenced in Sections E, F, G, H
- Changing IDs would require updating ~20 references across the checklist
- Reordering subsections does NOT break ID-based references
- The subsection headers make the new order clear

**Example:**
```markdown
### B8. Token Compliance (READ FIRST — BEFORE ANY DESIGN)

**REORDER NOTE:** This subsection has been moved from position 8 to position 1.
B8 MUST be completed BEFORE B1-B7 and B9.

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| B8.1 | Token compliance >= 80% | ... | ... | ... |
| B8.2 | Always-load protocol completed | ... | ... | ... |
```

**Alternative considered:** Renumber all items (B8 becomes B1, B1 becomes B2, etc.). **REJECTED** because:
1. High revision cost (update all cross-references)
2. Loss of continuity with existing documents that reference current IDs
3. No semantic benefit (subsection headers convey order, not IDs)

---

## SECTION E DEDUPLICATION

### Current E2 (SUCCESS Criteria) — Lines 258-269

| ID | Check | Pass Condition | Issue |
|----|-------|---------------|-------|
| E2.1 | PA-05 at 1440px = YES | Page feels "designed" not "formatted" | **UNIQUE** — not checked elsewhere |
| E2.2 | Better than Variant B = YES | Clear improvement, not marginal | **UNIQUE** — not checked elsewhere |
| E2.3 | Spatial atmosphere = YES/SOMEWHAT | "Want to spend time here" | **UNIQUE** — not checked elsewhere |
| **E2.4** | **5-category coverage = PASS** | **All 5 categories represented** | **DUPLICATE of B3.6** |
| E2.5 | Novelty signals >= 2 of 3 | D3.1/D3.2/D3.3 novelty checks | **UNIQUE** — compound of D3 items |
| **E2.6** | **Container width = 940-960px** | **NON-NEGOTIABLE compliance** | **DUPLICATE of B2.1** |
| **E2.7** | **Soul compliance = 7/7** | **Zero soul violations** | **DUPLICATE of C3.1** |

### Problem

**E2.4, E2.6, E2.7 are exact duplicates of checks performed in Sections B and C.**

**Maintenance risk:** If B2.1 pass condition changes, E2.6 must also change. This violates DRY (Don't Repeat Yourself).

**Identified in:** Usability audit lines 236-251

### Proposed Solution: Convert Duplicates to References

**E2.4, E2.6, E2.7 become REFERENCES, not re-checks.**

**Revised E2 table:**

```markdown
### E2. SUCCESS Criteria (ALL must be true)

| ID | Check | Pass Condition | Why This Matters |
|----|-------|---------------|------------------|
| E2.1 | PA-05 at 1440px = YES | C4.5 answered YES | Core engagement threshold. |
| E2.2 | Better than Variant B = YES (not MARGINAL) | D2.2 = YES (clear improvement) | If only marginally better than Variant B, modifications didn't justify effort. |
| E2.3 | Spatial atmosphere = YES/SOMEWHAT | D2.3 = YES or SOMEWHAT | The user's motivation: pages as "places." |
| E2.4 | 5-category mechanism coverage = PASS | **→ See B3.6** | The per-category minimum must work in practice. |
| E2.5 | Novelty signals >= 2 of 3 | D3.1/D3.2/D3.3: at least 2 = NOVEL | Novel + designed = vocabulary fluency confirmed. |
| E2.6 | Container width = 940-960px | **→ See B2.1** | If container width fails, the page fails regardless of other quality. |
| E2.7 | Soul compliance = 7/7 | **→ See C3.1** | Soul violations are instant-fail criteria. |
```

**Explanation column updated:**
- E2.4: "The per-category minimum must work in practice." (unchanged)
- E2.6: "If container width fails, the page fails regardless of other quality." (unchanged)
- E2.7: "Soul violations are instant-fail criteria." (unchanged)

**Pass Condition column updated:**
- E2.4: **"→ See B3.6"** (was: "All 5 categories represented")
- E2.6: **"→ See B2.1"** (was: "NON-NEGOTIABLE compliance")
- E2.7: **"→ See C3.1"** (was: "Zero soul violations")

### E3 PARTIAL Criteria — Lines 271-278

**Current structure:**
```markdown
| ID | Check | Interpretation |
|----|-------|---------------|
| E3.1 | PA-05 = YES but spatial atmosphere = NO | Page is "designed"... |
| E3.2 | PA-05 = YES but novelty signals < 2 of 3 | Page is "designed" but derivative... |
| E3.3 | PA-05 = MARGINAL at both viewports | Engagement is ambiguous... |
| E3.4 | Better than Variant B = MARGINAL | Improvement exists but subtle... |
```

**Problem identified:** Usability audit lines 295-312

> "E3 items are not independently checkable. They are INTERPRETIVE characterizations of why the verdict is PARTIAL, not binary checks. [...] E3 items should be REMOVED from the 129 count because they are not items to check -- they are verdict characterizations."

### Proposed Solution: Reclassify E3 as Scenario Descriptions

**Current header:**
```markdown
### E3. PARTIAL Criteria (at least 1 true, none of E4)
```

**Proposed header:**
```markdown
### E3. PARTIAL Verdict Scenarios

A PARTIAL verdict occurs when ALL E2 SUCCESS criteria are not met, but NONE of the E4 FAILURE criteria are triggered. The specific PARTIAL type is characterized by which SUCCESS criterion failed:
```

**Revised E3 table:**

```markdown
| Scenario | Pattern | Interpretation |
|----------|---------|---------------|
| Designed but not atmospheric | PA-05 = YES (C4.5) but spatial atmosphere = NO (D2.3) | Page is "designed" (intentional decisions visible) but doesn't create a "place" feeling. The lookup-based approach achieves structure but not atmosphere. |
| Designed but derivative | PA-05 = YES (C4.5) but novelty signals < 2 of 3 (D3.x) | Page is "designed" but derivative of showcase pages. Content-mechanism fit is good but selection logic converges with showcases. |
| Ambiguous engagement | PA-05 = MARGINAL at both viewports (C4.5, C4.10) | Engagement is ambiguous -- neither clearly "designed" nor clearly "formatted." The threshold is in the gray zone. |
| Marginal improvement | Better than Variant B = MARGINAL (D2.2) | Improvement exists but is subtle. Unclear if mechanisms made the difference or if content quality drove the improvement. |
```

**Key changes:**
1. No longer numbered as "check items" (E3.1, E3.2, etc.)
2. Labeled as "scenarios" not "criteria"
3. References to source checks added (e.g., "PA-05 = YES (C4.5)")
4. Removed from item count (129 → 125 actual check items)

**This addresses the audit finding:** E3 is now clearly a characterization framework, not a checklist section.

---

## NET IMPACT ON ITEM COUNT

### Before Deduplication
- 129 items total
- E2.4, E2.6, E2.7 counted as independent checks (duplicates)
- E3.1-E3.4 counted as check items (but are scenario descriptions)

### After Deduplication
- **E2.4, E2.6, E2.7 converted to references:** -3 items (but still exist in table, just with "→ See X" pass conditions)
- **E3.1-E3.4 reclassified as scenarios:** -4 items (removed from count)
- **Net reduction:** 129 → 125 items (if E3 items are fully removed)

**BUT:** The usability audit recommendation (line 270) suggests keeping E2 items as references, not removing them entirely. This means:
- **Item count unchanged:** 129 items
- **Duplication eliminated:** E2.4/E2.6/E2.7 no longer re-check, they reference
- **Scenario reclassification:** E3 items remain in table but are not counted as check items

**Recommendation for writer:**
- Keep E2.4, E2.6, E2.7 in the table with updated "Pass Condition" column
- Restructure E3 header and table as shown above
- Update summary statistics (line 408) to note: "125 binary check items + 4 E3 scenario descriptions + 4 H coverage tables"

---

## SECTION HEADERS TO UPDATE

### Section B Header (Line 70)

**Current:**
```markdown
## B. BUILD REQUIREMENTS
```

**Proposed:**
```markdown
## B. BUILD REQUIREMENTS (Reordered by Build Workflow)

**REORDER NOTE:** This section has been restructured to follow the natural build sequence.
Items are checked in the order they should be verified during construction, not pedagogical order.

**Build sequence:** Read constraints (B8) → Classify tier (B1) → Know guardrails (B9) → Set container (B2) → Deploy mechanisms (B3-B6) → Verify soul (B7)
```

### Individual Subsection Headers

Each subsection gets a position indicator:

**B8 (Position 1):**
```markdown
### B8. Token Compliance (STEP 1: READ FIRST — BEFORE ANY DESIGN)

**REORDER NOTE:** This subsection has been moved from position 8 to position 1.
B8.2 (Always-load protocol) MUST be completed BEFORE any design decisions in B1-B7 or B9.
```

**B1 (Position 2):**
```markdown
### B1. Pipeline Routing (STEP 2: CLASSIFY TIER AND PATTERN)

**REORDER NOTE:** This subsection has been moved from position 1 to position 2.
Complete B8 (read soul files) BEFORE tier classification.
```

**B9 (Position 3):**
```markdown
### B9. Guardrail Compliance (STEP 3: KNOW PADDING FLOORS)

**REORDER NOTE:** This subsection has been moved from position 9 to position 3.
Complete B9 BEFORE B2 (container width decisions) to avoid constraint violations.
```

**B2 (Position 4):**
```markdown
### B2. Container Width (STEP 4: SET CONTAINER WITH GUARDRAILS IN MIND)

**REORDER NOTE:** This subsection has been moved from position 2 to position 4.
Complete B8 (tokens), B1 (tier), B9 (guardrails) BEFORE setting container width.
```

**B3-B6 (Positions 5-8):**
```markdown
### B3. Mechanism Deployment Breadth (STEP 5: DEPLOY ACROSS CATEGORIES)

[No reorder note needed — relative position within mechanism deployment sequence unchanged]
```

(Same for B4, B5, B6 — just note new position numbers)

**B7 (Position 9):**
```markdown
### B7. Soul Compliance (STEP 9: FINAL VERIFICATION)

**REORDER NOTE:** This subsection has been moved from position 7 to position 9.
Soul compliance is a final verification step after all design work (B2-B6) is complete.
```

---

## CROSS-REFERENCE UPDATES NEEDED

### Section E References (Lines 258-269)

**E2.4, E2.6, E2.7 updated as shown above.**

### Section G Meta-Checks (Lines 325-339)

**No changes needed.** Section G references clarification documents, not Section B items.

### Section H Completeness (Lines 341-400)

**No changes needed.** Section H maps source documents to checklist sections, not individual item IDs. The mapping tables remain valid regardless of Section B internal ordering.

### Summary Statistics (Lines 403-427)

**Current (lines 403-416):**
```markdown
| Section | Total Items | Type |
|---------|-------------|------|
| A. Pre-Build Decisions | 22 items | Planning verification |
| B. Build Requirements | 35 items | Build-time checks |
...
| **TOTAL** | **129 binary items + 4 coverage tables** | |
```

**Proposed update:**
```markdown
| Section | Total Items | Type | Notes |
|---------|-------------|------|-------|
| A. Pre-Build Decisions | 22 items | Planning verification | |
| B. Build Requirements | 35 items | Build-time checks | **Reordered by build workflow (B8→B1→B9→B2→B3-B6→B7)** |
| C. Measurement & Metrics | 21 items | Post-build measurement | |
| D. Evaluation Criteria | 12 items | Comparative analysis | |
| E. The Verdict | 16 items | Decision framework | **E2 deduplicated (3 items now references), E3 reclassified as scenarios** |
| F. Post-Experiment Decisions | 15 items | Next-step routing | |
| G. Meta-Checks | 8 items | Clarification compliance | |
| H. Completeness Cross-Check | 4 coverage tables | Self-verification | |
| **TOTAL** | **129 binary items + 4 coverage tables** | | **125 actual checks + 4 E3 scenarios** |
```

**Critical items list (lines 419-427):**

**Add reorder note:**
```markdown
**The 7 most critical items** (failure on ANY ONE = experiment fails):
1. **B2.1** -- Container width 940-960px (THE #1 Phase D failure mode) [**Now at Step 4**]
2. **B3.6** -- All 5 mechanism categories represented (THE core Middle-tier differentiator) [**Now at Step 5**]
3. **B7.1** -- border-radius: 0 (soul constraint, instant-fail) [**Now at Step 9**]
4. **B7.2** -- box-shadow: none (soul constraint, instant-fail) [**Now at Step 9**]
5. **B1.2** -- Phases 1-3 skipped (defines Middle-tier experiment validity) [**Now at Step 2**]
6. **E1.1** -- Clear verdict stated (the experiment's purpose is to produce a verdict) [**Unchanged**]
7. **B8.2** -- Always-load protocol completed (Track 1's Phase D failure cause) [**Now at Step 1 — FIRST CHECK**]
```

---

## WRITER IMPLEMENTATION CHECKLIST

For the checklist-writer agent (Task #6), the implementation steps are:

### Step 1: Reorder Section B Subsections

1. Copy entire Section B (lines 70-160) to scratchpad
2. Reorder subsections in new sequence:
   - B8 (lines 143-147) → position 1
   - B1 (lines 73-80) → position 2
   - B9 (lines 150-160) → position 3
   - B2 (lines 82-89) → position 4
   - B3 (lines 91-100) → position 5
   - B4 (lines 102-108) → position 6
   - B5 (lines 110-116) → position 7
   - B6 (lines 118-128) → position 8
   - B7 (lines 130-141) → position 9
3. Add section header note (as specified above)
4. Add subsection header notes for B8, B1, B9, B2, B7 (as specified above)
5. Renumber subsection headers in markdown (### becomes B8 first, B1 second, etc.)

### Step 2: Update E2 Pass Condition Column

1. Locate E2 table (lines 258-269)
2. Replace E2.4 pass condition: "All 5 categories represented" → **"→ See B3.6"**
3. Replace E2.6 pass condition: "NON-NEGOTIABLE compliance" → **"→ See B2.1"**
4. Replace E2.7 pass condition: "Zero soul violations" → **"→ See C3.1"**
5. Keep "Why This Matters" column unchanged for all 3 items

### Step 3: Restructure E3 Section

1. Locate E3 section (lines 271-278)
2. Replace header: "### E3. PARTIAL Criteria (at least 1 true, none of E4)" → "### E3. PARTIAL Verdict Scenarios"
3. Add explanatory paragraph (as specified above)
4. Replace table:
   - Remove ID column (E3.1, E3.2, E3.3, E3.4)
   - Add "Scenario" column (short name)
   - Keep "Pattern" column (was "Check")
   - Keep "Interpretation" column
5. Remove item numbering from rows

### Step 4: Update Summary Statistics

1. Locate summary statistics table (lines 403-416)
2. Add "Notes" column
3. Add note to Section B row: "Reordered by build workflow (B8→B1→B9→B2→B3-B6→B7)"
4. Add note to Section E row: "E2 deduplicated (3 items now references), E3 reclassified as scenarios"
5. Add footnote to TOTAL row: "125 actual checks + 4 E3 scenarios"

### Step 5: Update Critical Items List

1. Locate critical items list (lines 419-427)
2. Add position notes to each item as specified above

### Step 6: Verify No Broken References

1. Search checklist for all instances of "B2.1", "B3.6", "B7.1", "B7.2", "B8.2", "B9.1"
2. Confirm all references still resolve correctly after reordering
3. Section E, F, G, H should be unchanged (they reference by ID, not position)

---

## VALIDATION CRITERIA

The restructured checklist is correct if:

1. **Section B subsections appear in order:** B8 → B1 → B9 → B2 → B3 → B4 → B5 → B6 → B7
2. **All item IDs unchanged:** B1.1-B1.4, B2.1-B2.4, etc. still exist with same content
3. **Reorder notes present** on subsections B8, B1, B9, B2, B7
4. **E2.4, E2.6, E2.7** pass conditions updated to "→ See X.X"
5. **E3** restructured as scenarios, not check items
6. **Summary statistics** updated with notes and footnote
7. **Critical items list** updated with position notes
8. **No broken references:** All "B2.1" etc. references in E/F/G/H still resolve

---

## RATIONALE RECAP

**Why reorder Section B?**
- Eliminates dependency violations (B8 must be before B2-B6)
- Matches natural build workflow (read constraints → classify → design → verify)
- Prevents Track 1 Phase D failure mode (always-load skipped)
- Makes checklist usable AS A BUILD GUIDE, not just evaluation rubric

**Why deduplicate Section E?**
- Eliminates DRY violation (single source of truth for each check)
- Reduces maintenance burden (change B2.1, E2.6 updates automatically)
- Clarifies that E2 is a COMPOUND gate, not a re-check
- Reclassifies E3 correctly as scenarios, not check items

**Net result:** Same item coverage, better workflow alignment, lower maintenance cost.

---

**END SPECIFICATION**

*This specification is ready for implementation by the checklist-writer agent (Task #6).*
