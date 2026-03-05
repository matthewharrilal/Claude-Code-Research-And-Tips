# Auditor 3 Report: A3 + D3 Enrichments in semantic-rules.md + C3 Cross-File Dependency

**Auditor:** enrichment-auditor-3
**Date:** 2026-02-17
**Files Audited:**
- `/design-system/compositional-core/guidelines/semantic-rules.md` (526 lines)
- `/design-system/compositional-core/vocabulary/tokens.css` (183 lines)
- `/ephemeral/flagship-preparation/02-enrichment-specifications.md` (659 lines)

---

## Verification Checklist

### Gap 6: Content Density Floors Per Zone (A3)

| Item | Status | Evidence |
|------|--------|----------|
| Gap 6 exists with correct title | PASS | Line 252: "## Gap 6: Content Density Floors Per Zone" |
| Minimum content per zone type table | PASS | Lines 282-286: dedicated (3+ paragraphs OR 2+ components), breathing (1-3 sentences), bedrock (1 featured element + context) |
| Zone count ceiling by word count table | PASS | Lines 301-306: 4-row table (<1,500 words = 2 zones through 5,000+ = 5 zones) |
| "Zones exist to SERVE content" principle | PASS | Lines 293 and 314: exact phrase present in both Rule 2 and Boundary Rule |
| Binary rules (PASS/FAIL) | PASS | Lines 287, 295, 308, 316: all contain explicit "Binary test:" labels with FAIL conditions |
| Evidence Analysis with 3 sources | PASS | Lines 258-273: Ceiling experiment, Failure analysis root cause, OD-004 validated exploration |

### Gap 7: Content-Form Fit (D3)

| Item | Status | Evidence |
|------|--------|----------|
| Gap 7 exists with correct title | PASS | Line 320: "## Gap 7: Content-Form Fit -- Minimum Content for Form Decisions" |
| Form-to-content-volume table | PASS | Lines 348-355: 6-row table (zone, bento, progressive disclosure, drop cap, bedrock, breathing) |
| "Enough Content?" gate | PASS | Lines 357-366: Binary gate with YES/NO paths and (a)/(b) options |
| "Simplest form" inverse test | PASS | Lines 368-377: "The 'Form Matches Content' Test" with 3 concrete examples |
| Binary rules | PASS | Line 366: "This is a GATE (binary pass/fail), not a guideline (judgment call)" and line 394: explicit "Binary test:" |
| Evidence Analysis with 3 sources | PASS | Lines 326-339: Ceiling experiment, Failure 5 analysis, CD-006 validated |

### Structural Checks

| Item | Status | Evidence |
|------|--------|----------|
| Gap numbering sequential (1-7) | PASS | Gaps 1 (line 9), 2 (line 56), 3 (line 99), 4 (line 146), 5 (line 195), 6 (line 252), 7 (line 320) |
| Tone matches existing gaps | PASS | Same structure: Question header, Evidence Analysis with Sources, Selection Criteria/Rules, Boundary Rule |
| No contradictions with gaps 1-5 | PASS | Gap 4 breathing zone definition ("<=3 sentences", ">=48px") consistent with Gap 6 Rule 1 and Gap 7 breathing zone row |
| Line count >= 485 | PASS | 526 lines (41 above minimum) |
| Cross-references between A3 and D3 | PARTIAL | Thresholds consistent (both use "3+ paragraphs OR 2+ components" for dedicated zones) but NO explicit cross-reference by name. D3 does not say "see Gap 6" or "per Content Density Floors." |

### C3 Cross-File Dependency (tokens.css)

| Item | Status | Evidence |
|------|--------|----------|
| `--space-max-zone` exists in tokens.css | PASS | Line 116: `--space-max-zone: var(--space-24); /* 96px */` |
| A3 references `--space-max-zone` | **FAIL** | Zero instances of `--space-max-zone` anywhere in semantic-rules.md. Gap 6 discusses zone spacing but never links to the token that caps it. |

### Spec-to-Actual Deviation Check

| Section | Deviation? | Notes |
|---------|-----------|-------|
| A3 title | None | Verbatim match |
| A3 Question | None | Verbatim match |
| A3 Evidence Analysis (3 sources) | None | All source numbers and text match |
| A3 Rules 1-3 | None | Tables, thresholds, evidence paragraphs all verbatim |
| A3 Boundary Rule | None | Exact match |
| D3 title | None | Verbatim match |
| D3 Question | None | Verbatim match |
| D3 Evidence Analysis (3 sources) | None | All source numbers and text match |
| D3 Selection Criteria table | None | All 6 rows match |
| D3 Gates and tests | None | "Enough Content?" and "Form Matches Content" both verbatim |
| D3 Boundary Rule | None | Exact match |

**Total deviations from spec: 0.** Both enrichments were applied verbatim.

---

## Level 2 Independent Observations

### 1. A3 and D3 Complementarity vs Conflict

A3 and D3 are genuinely complementary -- A3 asks "is there enough content for this ZONE?" while D3 asks "is there enough content for this FORM?" They address different decisions in the build process (zone creation vs form selection). However, there is one potential conflict point:

**The breathing zone definition appears in THREE places:**
- Gap 4 (line 146): "1-2 sentences max", ">=48px padding"
- Gap 6 Rule 1 (line 284): "1-3 sentences of transition text ONLY"
- Gap 7 table (line 354): "1-3 sentences ONLY"

Gap 4 says "1-2 sentences max" while Gaps 6 and 7 say "1-3 sentences." This is a minor inconsistency (not a contradiction -- a builder using 3 sentences would pass Gap 6/7 but would feel uncertain reading Gap 4). A builder could resolve this by using 1-2 sentences (satisfies all three), but the inconsistency could cause confusion.

### 2. Zone Count Ceiling Achievability for Flagship

The zone count ceiling table (Gap 6 Rule 3) allows maximum 5 zones for 5,000+ words. A flagship page (per tier model: 240-400 min build time, 1000-1500 CSS lines) would likely have 3,000-6,000 words. At 5,000 words, 5 zones is allowed -- with the constraint that each zone needs at least 1,000 words to meet the even-distribution implication.

This is achievable but tight. A flagship page with a 5-zone metaphor would need substantial content in every zone. The ceiling experiment had ~6,500 words across 4 zones but failed because of uneven distribution. The rule correctly catches this -- a builder would need to verify per-zone word counts, not just total.

**Assessment:** Achievable for flagship, but builders should plan zone allocation during content assessment (Phase 0), not during implementation (Phase 6).

### 3. Weakest Point in Content Density Floors

**Rule 2 (30% content coverage per viewport)** is the weakest rule. The 30% threshold is defined but the MEASUREMENT method is subjective:

- "Estimate content coverage percentage" -- estimation, not measurement
- What counts as "content" is listed but borderline cases exist (does a horizontal rule count? does a breathing zone label count? does a checkpoint element count?)
- A zone with a single large diagram and one paragraph might register as 35% at one viewport position and 25% at the adjacent position, depending on where the viewport boundary falls

The rule would be strengthened by defining "content" more precisely (e.g., "any element with `innerText.length > 0` or `tagName === 'IMG'`") or by specifying a programmatic measurement method.

### 4. Gaming Potential

A creative builder could satisfy the LETTER of these rules while violating the SPIRIT in several ways:

**a) Padding content:** Adding boilerplate paragraphs to meet the 3-paragraph minimum for a dedicated zone. The content technically exists but adds no value.

**b) Zone merging to bypass:** Merging two thin zones into one "dedicated zone" that technically has 3+ paragraphs but covers two unrelated topics.

**c) Component counting tricks:** Using 2 callouts in a zone to meet the "2+ components" minimum, where both callouts say nearly the same thing.

**d) Word count inflation:** Expanding content with verbose phrasing to reach higher word-count thresholds for more zones.

**Mitigation:** D3's "simplest form" inverse test partially addresses this (if a simpler form works, use it). But the inverse test is explicitly marked as "FLAG for review, not automatic fail" (per spec line 604), making it the weakest enforcement point.

### 5. Missing Validation Status Update

The Research Citations section (lines 398-425) includes validation status for Gaps 1-5 (lines 414-418) but does NOT include validation status for Gaps 6-7. This is a minor omission -- the section should include:
```
- Gap 6 (Content Density): VALIDATED (ceiling experiment failure + OD-004 contrast)
- Gap 7 (Content-Form Fit): VALIDATED (ceiling experiment + CD-006 contrast)
```

### 6. Missing `--space-max-zone` Cross-Reference

The most significant finding: Gap 6 discusses zone spacing and whitespace accumulation but never references `--space-max-zone` (96px) from tokens.css. This token was added specifically to prevent the same failure that Gap 6 addresses. A builder reading Gap 6 would not know that a token-level cap exists to enforce the principle. The two rules (A3 content density + C3 spacing maximum) should cross-reference each other for the constraint to be fully effective.

**Recommended fix:** Add to Gap 6 Rule 2 or Boundary Rule: "See also `--space-max-zone` in tokens.css (96px maximum per-property spacing value) which provides token-level enforcement of this principle."

---

## Summary Verdict

| Category | Verdict |
|----------|---------|
| A3 (Gap 6) content present | PASS |
| D3 (Gap 7) content present | PASS |
| Gap numbering | PASS |
| Tone consistency | PASS |
| No contradictions | PASS |
| Binary rules present | PASS |
| Line count | PASS (526) |
| Spec-to-actual fidelity | PASS (0 deviations) |
| A3-D3 cross-reference | PARTIAL (consistent thresholds but no explicit link) |
| C3 cross-file reference | **FAIL** (no `--space-max-zone` reference in semantic-rules.md) |
| Validation status update | FAIL (Gaps 6-7 not added to validation status section) |
| Breathing zone consistency | FLAG (Gap 4 says "1-2", Gaps 6/7 say "1-3") |

### OVERALL VERDICT: **CONDITIONAL PASS**

Both enrichments (A3 and D3) are present, correctly numbered, structurally sound, tonally consistent, applied verbatim from spec, and contain binary rules. The content is substantively correct and addresses the ceiling experiment failures.

Two issues prevent FULL PASS:
1. **Missing `--space-max-zone` cross-reference** (C3 dependency gap -- the most important issue)
2. **Missing validation status entries** for Gaps 6-7 (minor housekeeping)

One item flagged for awareness:
- Breathing zone sentence count inconsistency between Gap 4 (1-2) and Gaps 6/7 (1-3)

Neither blocking issue requires re-application of the enrichments. Both can be fixed with small additions to the existing file.

---

**END AUDITOR 3 REPORT**
