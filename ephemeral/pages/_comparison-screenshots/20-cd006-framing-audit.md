# CD-006 Framing Audit: Systematic Inventory of Flagship Misattribution

**Auditor:** framing-auditor (Opus)
**Date:** 2026-02-22
**Scope:** All 19 comparison reports in `ephemeral/pages/_comparison-screenshots/`
**Deliverable:** Comprehensive inventory of every instance where CD-006 is treated as the Flagship 4/4 standard rather than correctly classified as CEILING tier

---

## THE ERROR

CD-006 is **CEILING tier, not Flagship**. Flagship 4/4 was developed AFTER CD-006 through extensive research:
- 23 flagship-44-recipe reports defining the 14-dimension Flagship standard
- A flagship experiment that FAILED (PA-05 1.5/4)
- 9 retrospective reports analyzing that failure
- Flagship dissection, remediation audit, and remediation execution

CD-006 fails on 3-4 Flagship dimensions:
1. **No unified pervading metaphor** (D-13 FAIL) -- uses multiple LOCAL metaphors, not one global metaphor
2. **Multi-coherence is LOCAL, not GLOBAL** (D-04 PARTIAL) -- concentrated at bookends, absent in middle sections
3. **Channel coordination is INCIDENTAL, not DESIGNED** (D-03 partially) -- emerged from accumulated craft, not deliberate planning
4. **Built under unreproducible conditions** -- Opus builder with full 4-stage pipeline context, no single prompt produced it

**Correct framing:** CD-006 is a CEILING artifact -- the best before Flagship was defined, a DATA POINT in the tier model, not the destination. Flagship 4/4 has NEVER been achieved.

---

## SEVERITY SCALE

- **CRITICAL:** CD-006 explicitly named as "the benchmark," "crown jewel," or "gold standard" for quality; pages scored as fractions of CD-006's score; CD-006's 39/40 treated as the target to reach
- **HIGH:** CD-006 used as the primary comparison point against which both pages are measured; "what both lack vs CD-006" framing that implies CD-006 is the ceiling
- **MEDIUM:** CD-006 referenced as source of extracted patterns or validation point, with framing that implies its practices ARE the standard rather than A data point
- **LOW:** CD-006 mentioned factually as an exploration artifact or provenance source without benchmark framing
- **CORRECT:** CD-006 explicitly classified as CEILING tier, distinguished from Flagship

---

## PER-REPORT INVENTORY

### Report 01: Visual-Perceptual Comparison (01-visual-perceptual.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Focuses entirely on Page A vs Page B visual comparison. Does not reference CD-006 at all.

---

### Report 02: CSS Richness (02-css-richness.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Quantitative CSS comparison between the two pages. No CD-006 benchmarking.

---

### Report 03: Compositional Foundation (03-composition.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Compares compositional dimensions (metaphor, zone architecture, tension, etc.) without CD-006 reference.

---

### Report 04: Build Process Quality (04-build-process.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Compares build process artifacts (conviction statements, override logs, fix cycles) without CD-006 reference.

---

### Report 05: Gate Comparison (05-gate-comparison.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Compares programmatic gate results between the two pages.

---

### Report 06: PA Comparison (06-pa-comparison.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Compares PA-05 scores and Tier 5 questions. Classifies Page A as "MIDDLE-to-CEILING" and Page B as "CEILING" -- uses correct tier vocabulary without treating CD-006 as destination.

---

### Report 07: Provenance / Pipeline (07-provenance.md)

**CD-006 references:** None found directly as benchmark.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Traces pipeline lineage and fix impact without benchmarking against CD-006.

---

### Report 08: MASTER SYNTHESIS (08-MASTER-SYNTHESIS.md)

**CD-006 references:** Indirect but significant.

**Instance 1 (line 42):**
> "Neither page reaches Flagship. Page B's Tier 5 score is 6.5/9 (Flagship requires >= 6/8 on the 8-question Tier 5 battery plus PA-05 >= 3.5, which B meets, but the qualitative character is CHOIR not ENSEMBLE..."

**Severity:** LOW -- This correctly acknowledges neither page reaches Flagship and uses the correct vocabulary (CHOIR vs ENSEMBLE). No CD-006 benchmarking here.

**Instance 2 (line 161-171, "Uncomfortable Truth 5: The Recipe Caps Quality at CEILING"):**
> "If Finding 1 (higher compositional intelligence in Page A) and Finding 4 (recipe replaces communication) are both true, then the recipe-based pipeline has a quality ceiling."

**Severity:** MEDIUM -- The word "CEILING" here is used as a general concept (the pipeline's quality ceiling), not specifically as the tier name. But the section does not clarify that CEILING tier is itself below Flagship. The implication is that "reliable Ceiling" is the best achievable, which is accurate but fails to frame CEILING as a waypoint, not the destination.

**Instance 3 (line 298-308, "The Deepest Question"):**
> "The design system defines Flagship as: PA-05 >= 3.5, Tier 5 >= 6/8, zero soul violations, metaphor STRUCTURAL, 16+ mechanisms."

**Severity:** CORRECT -- Uses the actual Flagship definition without conflating it with CD-006. This section correctly frames the question.

**Overall Report 08 Assessment:** MOSTLY CLEAN. No direct CD-006-as-benchmark framing. Uses correct Flagship definition. Minor issue: does not explicitly state that CD-006 is CEILING, not Flagship, which would provide helpful context.

---

### Report 09: Richness Philosophy (09-richness-philosophy.md)

**THIS IS THE MOST PROBLEMATIC REPORT.** Contains the most egregious CD-006-as-benchmark framing.

**Instance 1 (line 37):**
> "In CD-006: 4px = structural importance (primary section). The weight carries ARCHITECTURE."

**Severity:** LOW -- Factual reference to how CD-006 uses a mechanism. Appropriate as data point.

**Instance 2 (line 87):**
> "Research chain: R5-COMBINATION-THEORY.md (component chemistry) -> CD-006 validation (solid offset as crown jewel divergence)"

**Severity:** MEDIUM -- Uses "crown jewel divergence" phrase, treating CD-006 as the crown jewel standard.

**Instance 3 (lines 203-248, entire Section 5 "CROWN JEWEL COMPARISON"):**

The SECTION TITLE itself is problematic: "CROWN JEWEL COMPARISON."

> Line 207: "CD-006 scored 39/40. Reading its CSS (2,085 lines), several properties stand out:"

> Line 221-223: "**Page A vs CD-006:** Page A achieves approximately 60% of CD-006's qualities"

> Line 230-232: "**Page B vs CD-006:** Page B achieves approximately 75% of CD-006's qualities"

> Line 239: "**What both lack vs CD-006:**"

**Severity:** CRITICAL. This section treats CD-006 as THE benchmark against which quality is measured. Scoring pages as percentages of CD-006 (60%, 75%) explicitly frames CD-006 as 100% -- the destination. The "what both lack vs CD-006" framing asks "how far are you from CD-006?" when it should ask "how far are you from Flagship 4/4?" CD-006 is not the ceiling of quality. CD-006 is a CEILING-tier artifact. The actual target (Flagship 4/4) has never been achieved and would exceed CD-006 on 3-4 dimensions.

**Correct framing:** "How do both pages compare to the CEILING tier (as exemplified by CD-006)? And how does CEILING itself compare to the Flagship 4/4 target?" Pages should be scored against the tier model, not against a specific artifact.

**Instance 4 (line 414):**
> "CD-006 scored 39/40 not because it deployed the most mechanisms (though it deployed many). It scored 39/40 because its content is RECURSIVELY self-referential -- the page demonstrates the very system it describes."

**Severity:** HIGH. This treats 39/40 as the quality apex. The analysis is factually interesting (self-referential content creates tautological binding) but frames it as explaining why CD-006 reached the PEAK, not why CD-006 reached CEILING. The implicit message: CD-006 is as good as it gets, and the best you can do with non-self-referential content is 36-37/40.

**Instance 5 (line 454, Appendix table):**
> "| CD-006's recursive self-reference is the ceiling | Content IS metaphor = maximum possible binding |"

**Severity:** HIGH. "Maximum possible binding" frames CD-006 as the theoretical maximum. But CD-006 lacks a unified pervading metaphor (D-13) -- a Flagship page with a structural pervading metaphor applied to non-self-referential content could achieve DIFFERENT and potentially DEEPER binding through deliberate multi-coherence planning.

**Impact on Report 09 conclusions:** SIGNIFICANT. The report's central argument ("richness = pipeline fluency") is sound, but the CD-006 benchmarking creates a false ceiling. If 75% of CD-006 is the aspiration, then the target is implicitly CEILING, not Flagship. This suppresses ambition and misframes what "success" looks like.

---

### Report 10: Pipeline Interpolation (10-pipeline-interpolation.md)

**Instance 1 (line 300):**
> "The mechanism catalog contains 18 mechanisms extracted from validated explorations (DD-001 through CD-006)."

**Severity:** LOW -- Factual provenance reference. CD-006 mentioned as an exploration in the extraction chain, not as a benchmark. This is correct usage.

**Overall Report 10 Assessment:** CLEAN. No CD-006 benchmarking.

---

### Report 11: Metacognitive Quality Philosophy (11-metacognitive-quality.md)

**THIS IS THE SECOND MOST PROBLEMATIC REPORT.**

**Instance 1 (line 78, Section 4 opening):**
> "CD-006, the pilot migration page (39/40), is the benchmark."

**Severity:** CRITICAL. The word "benchmark" is stated as a flat fact. CD-006 IS NOT the benchmark. The benchmark is the 14-dimension Flagship definition. CD-006 is a DATA POINT at CEILING tier.

**Instance 2 (lines 80-96, "What CD-006 has" + "What both Gas Town pages lack compared to CD-006"):**

Lists CD-006's properties (fractal density at 5 scales, all 11 component types, all 5 axis patterns, 7 transitions, etc.) and then measures what both pages LACK COMPARED TO CD-006.

**Severity:** CRITICAL. The framing is "CD-006 has X; you lack X." This treats CD-006 as the complete standard. But CD-006 itself LACKS 3-4 Flagship dimensions (unified metaphor, global multi-coherence, designed channel coordination). Measuring gaps against CD-006 without acknowledging CD-006's own gaps is misleading.

**Instance 3 (lines 108-112):**
> "CD-006 is approximately a **39/40** (its scored benchmark)"
> "Page A is approximately a **26-28/40**"
> "Page B is approximately a **31-34/40**"
> "The ceiling for Gas Town content is probably 36-37/40"

**Severity:** CRITICAL. Scoring pages as fractions of CD-006's 39/40. This places CD-006 at 97.5% of maximum (39/40) and treats 40/40 as only marginally above CD-006. But the ENTIRE Flagship research program exists because CD-006 is NOT the ceiling of quality. A true Flagship 4/4 page would have qualities CD-006 lacks (unified pervading metaphor, global multi-coherence, designed channel coordination). The gap between CEILING (CD-006) and Flagship is a QUALITATIVE leap, not a marginal 1-2 points.

**Instance 4 (line 242):**
> "The gap to CD-006 (39/40) remains significant for both pages, but Page B closes more of it."

**Severity:** HIGH. Treats "closing the gap to CD-006" as the goal. The actual goal is reaching Flagship 4/4, which CD-006 itself does not achieve.

**Impact on Report 11 conclusions:** SIGNIFICANT. The report's philosophical analysis is strong (Pirsig on Quality, visitor test, content honor, restraint vs richness). But Section 4 anchors the entire analysis to CD-006 as the standard. This creates a false framing: "how close are we to CD-006?" when it should be "how close are we to Flagship 4/4, and where is CD-006 on that same scale?"

---

### Report 12: Comparative Judgment (12-comparative-judgment.md)

**CD-006 references:** None found.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Meta-analysis of judgment process with 15-dimension framework. Does not reference CD-006.

---

### Report 13: Design Intelligence Traceability (13-design-traceability.md)

**Instance 1 (line 16):**
> "Validated in OD-006 (editorial sections), CD-006 (crown jewel divergence)"

**Severity:** MEDIUM. Uses "crown jewel" as a label for CD-006. While this is a historical name from the project, using it uncritically reinforces the framing of CD-006 as THE pinnacle.

**Instance 2 (lines 24, 31, 39, 48, 63, 65, 125, 168):**
Multiple references to CD-006 as a validation source in provenance chains, e.g.:
> "Originated in AD-003, reused in CD-005/CD-006"
> "Validated in OD-004, CD-006, Boris-2, Gastown-5"
> "This mechanism was EXTRACTED from exploration CSS (OD-004... Boris-2; CD-006)"

**Severity:** LOW. These are factual provenance references -- CD-006 is cited as one exploration among many where mechanisms were validated/extracted. This is CORRECT usage: CD-006 as a data source, not as a benchmark.

**Instance 3 (line 134):**
> "CD-006 validation: '3px primary border hard cuts between major content modes (39/40 audit score).'"

**Severity:** MEDIUM. Uses CD-006's 39/40 score as validation evidence for a specific CSS decision. The parenthetical "39/40 audit score" implicitly argues "this works because CD-006 used it and CD-006 scored 39/40." This is a subtle form of CD-006-as-authority-source.

**Impact on Report 13 conclusions:** LOW. The report's central argument (provenance depth correlates with failure prevention) is independent of CD-006 framing. The CD-006 references are mostly correct provenance citations.

---

### Report 14: Flagship Definition (14-flagship-definition.md)

**THIS REPORT CORRECTLY FRAMES CD-006 AS CEILING.**

**Key quotes demonstrating correct framing:**

> Line 16: "CD-006: 39/40 score, 18 mechanisms, ~999 CSS, 5 fractal scales. Best existing artifact. CEILING tier, NOT Flagship."

> Line 279-281: Section titled "CEILING vs FLAGSHIP: What CD-006 Lacks" -- "CD-006 (39/40) is the best existing artifact. It passes ~10-11 of the 14 Flagship dimensions. But it is CEILING tier, not Flagship."

> Lines 300-306: Four specific gaps enumerated (no unified metaphor, local not global multi-coherence, incidental not designed channel coordination, unreproducible conditions)

> Line 310: "CD-006 achieves vocabulary fluency (every mechanism deployed correctly, independently). Flagship requires compositional fluency."

> Line 575: "CD-006 | 10/10 [Middle Dims] | ~10-11/14 [Flagship Dims] | Ceiling"

> Line 623: Even includes the contrarian challenge: "C3: CD-006 reclassification may be rhetorical."

**Severity:** CORRECT. This is the REFERENCE STANDARD for how CD-006 should be framed in all other reports.

CD-006 is used extensively in this report as a reference artifact -- its properties are measured against the 14-dimension framework, its mechanisms cited as evidence for dimension thresholds. But every usage explicitly classifies it as CEILING, acknowledges its Flagship gaps, and positions it as a waypoint, not the destination.

---

### Report 15: Flagship Evaluation (15-flagship-evaluation.md)

**THIS REPORT ALSO CORRECTLY FRAMES CD-006.**

**Key quotes:**

> Line 8: "**Reference:** CD-006 pilot migration (39/40 score, ~999 CSS lines, CEILING tier)"

> Line 20: "**CD-006:** CEILING tier (PA-05 ~4/4 Ceiling register, estimated 10-11/14 Flagship dimensions passing). Achieves ~72% of Flagship standard."

> Line 23: "The gap from the best existing artifact (CD-006, CEILING) to Flagship 4/4 requires qualitative leaps..."

> Line 478: "| CD-006 | **CEILING** (top of range) | HIGH | Maximum vocabulary; local multi-coherence; 5/5 scales; but no unified metaphor |"

**Severity:** CORRECT. CD-006 is consistently classified as CEILING tier. Used as a reference point WITH explicit tier classification.

**Notable positive framing (line 145):**
> "This is the closest to Flagship multi-coherence in our entire corpus (including CD-006, which concentrates multi-coherence in S1 and bookends)."

This correctly positions CD-006 as BELOW the Flagship standard on specific dimensions, even when Page B approaches or exceeds it.

---

### Report 16: Compression Analysis (16-compression-analysis.md)

**CD-006 references:** None found as benchmark.
**Severity:** N/A -- NO FRAMING ISSUES
**Notes:** Analyzes compression of 9 compositional intelligence concepts through the pipeline. Does not benchmark against CD-006.

---

### Report 17: Soul Resonance (17-soul-resonance.md)

**NOTE:** This report was created after my original task assignment but exists in the directory. Including for completeness.

**Instance 1 (line 13):**
> "Page B is a page that FEELS like it was born from the same mind that produced CD-006."

**Severity:** MEDIUM. Uses CD-006 as the aspirational standard for "soul." Implies that resembling CD-006 is the goal.

**Instance 2 (lines 297-334, "CD-006 Comparison" section):**
> Line 299: "CD-006 (39/40, crown jewel) characteristics:"
> Line 313-321: "Page A vs CD-006:" -- detailed comparison
> Line 323-334: "Page B vs CD-006:" -- detailed comparison

**Severity:** HIGH. Entire section compares both pages against CD-006 as the standard. Uses "crown jewel" label. Measures whether pages share CD-006's "compositional vocabulary at a deeper level."

**Instance 3 (line 334):**
> "FEEL: Page B feels like CD-006's contemporary -- built from the same vocabulary, at the same level of compositional intention."

**Severity:** HIGH. Frames "being CD-006's contemporary" as the highest praise. But CD-006 is CEILING, not Flagship. Being CD-006's contemporary means being at CEILING tier -- which is good, but is presented as if it's the pinnacle.

**Instance 4 (lines 359-363):**
> "If I place CD-006 and Page A side by side: [different family]"
> "If I place CD-006 and Page B side by side: [same family]"

**Severity:** MEDIUM. "Same family as CD-006" used as the ultimate quality judgment. But the question should include: "and how does this family compare to the Flagship standard?"

**Instance 5 (line 442):**
> "| Crown jewel resonance | 7/10 (CD-006 younger sibling) | 9/10 (CD-006 contemporary) | +2.0 Page B |"

**Severity:** HIGH. "Crown jewel resonance" as a scoring dimension explicitly treats CD-006 as the benchmark. 9/10 for being CD-006's contemporary treats CEILING-level quality as near-maximum.

**Impact on Report 17 conclusions:** SIGNIFICANT. The report's central question ("which page embodies the design system's identity?") is valid, but anchoring it to CD-006 specifically rather than to the design system's SOUL and PRINCIPLES conflates "resembles our best existing artifact" with "embodies our aspirations." The design system's aspirations are Flagship 4/4, which CD-006 does not represent.

---

### Report 18: Granular Soul Audit (18-granular-soul-audit.md)

**Instance 1 (line 15):**
> "CD-006-pilot-migration.html (crown jewel benchmark, 39/40)"

**Severity:** MEDIUM. Labels CD-006 as "crown jewel benchmark" in the reference artifacts list.

**Instance 2 (line 77):**
> "CD-006 uses similar zone differentiation with custom values."

**Severity:** LOW. Factual comparison of zone differentiation approaches. Appropriate.

**Instances 3-7 (lines 126, 133, 134, 315-332, 445, 467):**
Multiple references to CD-006 as the comparison standard for specific CSS decisions:
> "CD-006 line 191-194: h3 { font-size... }"
> "--type-section: 2rem (32px) -- tokens.css has two conventions: 1.625rem (CD-006) and 2rem (standard)"

**Severity:** LOW-MEDIUM. Uses CD-006 as a CSS reference for "what the design system does in practice." This is closer to appropriate usage (CD-006 as a data point for conventions) but the "crown jewel benchmark" label in the header taints the framing.

**Impact on Report 18 conclusions:** LOW-MEDIUM. The granular soul audit's method (comparing per-element CSS decisions against tokens.css and components.css) is sound. CD-006 is used as a practical reference for how conventions manifest, not as the quality target. But the "crown jewel benchmark" label should be "CEILING-tier reference artifact."

---

### Report 19: Design System Personality Test (19-personality-test.md)

**Instance 1 (line 50):**
> "Look at CD-006 and DD-006. These are the design system's children. Which Gas Town page looks like it belongs in the same FAMILY?"

**Severity:** HIGH. Frames quality as "belonging in CD-006's family." This treats CD-006 as the family patriarch -- the standard by which kinship is measured.

**Instance 2 (line 54):**
> "CD-006 (the 39/40 crown jewel) has a specific visual personality:"

**Severity:** MEDIUM. Uses "crown jewel" label uncritically.

**Instance 3 (lines 72-88):**
Detailed comparison of both pages to CD-006's visual personality:
> "Page A shares the surface DNA: dark header with 3px red border..."
> "the solid offset depth mechanism... is DIRECTLY from the mechanism catalog (#3) and is used in CD-006 and OD-004. Page A doesn't use solid offset depth at all. This is like recognizing a family member by their gestures."

**Severity:** MEDIUM. The "family member" metaphor treats CD-006 as the parent/reference. While this is valid for soul compliance (does the page look like it belongs to the design system?), it conflates "matches CD-006's practices" with "achieves quality."

**Instance 4 (lines 215):**
> "CD-006 uses transitions sparingly -- 7 transitions in a much longer page, each at a genuine content boundary."

**Severity:** LOW. Factual comparison of transition usage. Appropriate as data point.

**Instance 5 (line 341):**
> "| 2. Family Photo | 6.5/10 | 8.0/10 | **B** | Visual kinship with crown jewels |"

**Severity:** HIGH. "Visual kinship with crown jewels" as a scoring dimension. Treats resembling CD-006 as a quality metric.

**Impact on Report 19 conclusions:** MEDIUM. The "personality test" concept is valid for soul compliance assessment. But framing it as "which page is more like CD-006" rather than "which page better embodies the design system's identity principles" makes CD-006 the definition of the design system, rather than one (CEILING-tier) expression of it.

---

## SUMMARY TABLE

| Report | # | Severity | CD-006 as Benchmark | Key Issue |
|--------|---|----------|---------------------|-----------|
| 01 Visual-Perceptual | 0 | N/A | NO | Clean |
| 02 CSS Richness | 0 | N/A | NO | Clean |
| 03 Composition | 0 | N/A | NO | Clean |
| 04 Build Process | 0 | N/A | NO | Clean |
| 05 Gate Comparison | 0 | N/A | NO | Clean |
| 06 PA Comparison | 0 | N/A | NO | Clean |
| 07 Provenance | 0 | N/A | NO | Clean |
| 08 Master Synthesis | 3 | LOW-MEDIUM | Implicit | Uses correct Flagship definition; minor CEILING-as-cap framing |
| **09 Richness Philosophy** | **5** | **CRITICAL** | **YES -- worst offender** | **Section 5 "Crown Jewel Comparison" scores pages as %s of CD-006; 39/40 as quality apex** |
| 10 Pipeline Interpolation | 1 | LOW | NO | Factual provenance reference |
| **11 Metacognitive Quality** | **4** | **CRITICAL** | **YES -- second worst** | **"CD-006 is the benchmark"; pages scored as fractions of 39/40; 36-37/40 declared ceiling** |
| 12 Comparative Judgment | 0 | N/A | NO | Clean |
| 13 Design Traceability | 3 | LOW-MEDIUM | Minor | Provenance refs; "crown jewel divergence"; 39/40 as validation |
| **14 Flagship Definition** | **25+** | **CORRECT** | **NO -- CORRECTLY frames as CEILING** | **The reference standard for CD-006 framing** |
| **15 Flagship Evaluation** | **15+** | **CORRECT** | **NO -- CORRECTLY frames as CEILING** | **Consistently classifies CD-006 as CEILING tier** |
| 16 Compression Analysis | 0 | N/A | NO | Clean |
| **17 Soul Resonance** | **5** | **HIGH** | **YES** | **"Crown jewel resonance" as scoring dim; CD-006 contemporary = highest praise** |
| 18 Granular Soul Audit | 6 | LOW-MEDIUM | Minor | "Crown jewel benchmark" label; CD-006 as CSS reference |
| **19 Personality Test** | **5** | **HIGH** | **YES** | **"Family photo" with crown jewels; CD-006 family kinship as quality metric** |

---

## REPORTS REQUIRING REVISION

### Priority 1: CRITICAL (must revise before synthesis is trustworthy)

1. **Report 09 (Richness Philosophy)** -- Section 5 "Crown Jewel Comparison" must be reframed. Pages should not be scored as percentages of CD-006. The correct framing: "How do both pages compare to CEILING tier? How far is CEILING itself from Flagship 4/4?" CD-006 should be presented as one CEILING-tier data point, not as 100%.

2. **Report 11 (Metacognitive Quality)** -- Section 4 "The Crown Jewel Gap" must be reframed. "CD-006 is the benchmark" must be replaced with "CD-006 is the best existing CEILING-tier artifact." Scoring pages as fractions of 39/40 must be replaced with scoring against the tier model. The "36-37/40 ceiling for Gas Town content" claim should be examined: if Flagship 4/4 requires qualities CD-006 LACKS, then the ceiling for Gas Town content is NOT defined by CD-006's score.

### Priority 2: HIGH (should revise for analytical integrity)

3. **Report 17 (Soul Resonance)** -- "Crown jewel resonance" scoring dimension should be renamed. "CD-006 contemporary" as highest praise should be contextualized: being CD-006's contemporary means being at CEILING tier, which is a genuine achievement but not the pipeline's aspiration. The CD-006 Comparison section should note CD-006's Flagship gaps.

4. **Report 19 (Personality Test)** -- "Family photo" with crown jewels should be reframed as "family photo" with design system PRINCIPLES. The test should measure kinship with the design system's identity, not with a specific artifact. CD-006 can be one reference point alongside the soul constraints and token vocabulary.

### Priority 3: MEDIUM (cosmetic fixes, no analytical impact)

5. **Report 13 (Design Traceability)** -- Replace "crown jewel divergence" with "CD-006 divergence" or "CEILING-tier exploration divergence." Replace "(39/40 audit score)" parenthetical with "(CEILING-tier artifact)" where used as quality validation.

6. **Report 18 (Granular Soul Audit)** -- Replace "crown jewel benchmark" label with "CEILING-tier reference artifact."

7. **Report 08 (Master Synthesis)** -- Add explicit note that CEILING tier is below Flagship 4/4 when discussing the recipe's quality cap.

---

## CROSS-CUTTING FINDINGS

### Finding 1: The Framing Error Is Concentrated in Philosophy/Meta Reports

Reports 01-07 (quantitative, dimension-specific) have ZERO CD-006 framing issues. Reports 09 and 11 (philosophical, metacognitive) have the WORST issues. This pattern makes sense: quantitative reports measure what they measure. Philosophical reports need a STANDARD to reason against, and they reach for CD-006 because it's the most concrete quality reference point in the project's history.

**Implication:** The fix is not just correcting individual reports. It is providing philosophy/meta analysts with the CORRECT standard to reason against -- the 14-dimension Flagship definition (Report 14) should be the reference document, not CD-006's raw score.

### Finding 2: Reports 14 and 15 Already Contain the Correct Framing

These reports explicitly classify CD-006 as CEILING and define Flagship 4/4 as the actual target. The framing error in other reports is not a knowledge gap -- the correct information exists in the same directory. It is a SALIENCE problem: CD-006's 39/40 is a concrete, memorable number. The 14-dimension Flagship definition is abstract and never-achieved. Analysts default to the concrete over the abstract.

**Implication:** Future analysis should reference Reports 14/15 as the framing foundation, not CD-006 directly.

### Finding 3: "Crown Jewel" Language Is a Vector for the Framing Error

The phrase "crown jewel" appears in Reports 09, 13, 17, 18, and 19. Every usage reinforces the framing of CD-006 as THE quality standard. The label itself is the problem -- "crown jewel" implies "the best, the pinnacle, the destination." The correct label is "best existing CEILING-tier artifact" or simply "CD-006."

**Recommendation:** Stop using "crown jewel" to refer to CD-006. Use "CEILING reference artifact" or just "CD-006."

### Finding 4: The Scoring-as-Fraction Pattern Is the Most Dangerous Framing

Reports 09 and 11 both score pages as fractions of CD-006:
- "60% of CD-006's qualities" / "75% of CD-006's qualities" (Report 09)
- "26-28/40" / "31-34/40" (Report 11)

This normalizes CD-006 as 100%. But CD-006 is approximately 72% of Flagship 4/4 (per Report 15, line 394). Scoring against CD-006 instead of against Flagship compresses the quality scale and makes Flagship invisible.

**Correct scoring:** If you must use fractions, score against the TIER MODEL:
- Floor: 0-25%
- Middle: 25-50%
- Ceiling: 50-80%
- Flagship: 80-100%
- CD-006 ≈ 72% on this scale

### Finding 5: The Error Creates a Self-Fulfilling Quality Ceiling

If analysts benchmark against CD-006, the implicit message to builders is: "try to be like CD-006." But CD-006 LACKS unified metaphor, global multi-coherence, and designed channel coordination. Aspiring to CD-006 means aspiring to CEILING tier -- which means never attempting the qualitative leap to Flagship.

Report 15 line 145 already shows that Page B's multi-coherence may EXCEED CD-006's on some dimensions (global vs local). If Page B's analysts had been told "your standard is CD-006," they might have stopped at CD-006-level local multi-coherence instead of pushing toward global multi-coherence. The framing error is not just analytical -- it is PRESCRIPTIVE.

---

## RECOMMENDATIONS

1. **Revise Reports 09 and 11** (Priority 1 -- blocks trustworthy synthesis)
2. **Revise Reports 17 and 19** (Priority 2 -- blocks correct quality framing)
3. **Retire "crown jewel" language** across all reports
4. **Add Flagship 4/4 framing note** to Report 08 master synthesis
5. **Use Report 14 as framing reference** for all future philosophical/meta analysis
6. **Replace percentage-of-CD-006 scoring** with tier model scoring everywhere

---

**END AUDIT**

*This audit covers all 19 reports in `ephemeral/pages/_comparison-screenshots/`. Reports 14 and 15 demonstrate correct framing. Reports 09 and 11 contain CRITICAL framing errors. Reports 17 and 19 contain HIGH-severity errors. The remaining reports are clean or have only minor provenance-reference issues.*
