# PA WEAVER — Synthesis + Verdict Protocol
## Pipeline v3 Layer 7 — Weaver Reference
Date: 2026-02-24
Status: AUTHORITATIVE — split from artifact-pa-protocol-MONOLITHIC.md
Split: Contains weaver protocol ONLY. How the weaver synthesizes reports, verdict categories, fix-type classification, emotional arc synthesis, diagnostic vocabulary. INFORMATION ISOLATION: this content should NOT be visible to auditors.

---

## 1. WEAVER ROLE

> Source: ITEM 76 (extract-d01-d03.md, VA L191-192) — "reads 10 auditor reports -> VERDICT"
> Source: ITEM 87 (extract-d09-d11.md, VA L897) — "Phase 3: Weaver"
> Source: ITEM 88 (extract-d09-d11.md, VA L898) — "Agent 15 (Weaver) = 15 total agents"
> Source: ITEM 89 (extract-d09-d11.md, VA L899) — "Weaver must be Opus"

The Weaver reads ALL 10 auditor reports (9 PA auditors + 1 Integrative) and produces:

0. **Manifest Verification** — FIRST ACTION: verify all 9 auditor completion manifests total 69 answered questions. Any missing = INCOMPLETE.
1. **PA-05 Score** (1-4 scale with sub-criteria breakdown). Includes cross-validation resolution: for each sub-criterion, compare Auditor A's primary score with the cross-validator's secondary score. If they disagree, explain and resolve.
2. **Tier 5 Score** (0-9 YES count with per-question results)
3. **Combined Verdict** (from the PA-05 x Tier 5 matrix)
4. **Top-5 Fixes** (classified as MECHANICAL / STRUCTURAL / COMPOSITIONAL — see Section 3 for diagnostic vocabulary)
5. **Fix-Type Classification Summary** (REQUIRED) — aggregate count of fixes by type: N MECHANICAL, N STRUCTURAL, N COMPOSITIONAL. This classification directly determines the Ship Decision: SHIP WITH FIXES requires ALL fixes to be MECHANICAL and <= 3 total. Any STRUCTURAL or COMPOSITIONAL fix disqualifies SHIP WITH FIXES and requires REFINE or REBUILD respectively. Include a 1-sentence remediation path per fix type present.
6. **Emotional Arc Synthesis** (REQUIRED) — using the 4-register framework (Section 4), synthesize across all auditor reports to produce: (a) a score for each register (SURPRISE, DELIGHT, AUTHORITY, EARNED CLOSURE) on a 1-10 scale, (b) the overall arc shape ("building-peaking-resolving" vs "flat" vs "front-loaded"), and (c) the single strongest and weakest emotional register with evidence citations from auditor reports.
7. **Ship Decision** (SHIP / SHIP WITH FIXES / REFINE / REBUILD)

> **Note:** Items 5 and 6 were previously implicit in weaver output but are now REQUIRED sections. The Weaver's verdict is INCOMPLETE if either is missing.

---

## 2. WEAVER CALIBRATION REFERENCES

> **WARNING (FIX-084): WEAVER USE ONLY.** The tier definitions, quality tier tables, and calibration data in this section are for the WEAVER's classification use ONLY. They MUST NOT be included in PA Auditor A-I prompts. The fresh-eyes principle prohibits tier context for individual auditors. Including tier targets in auditor prompts would anchor their assessments on expected outcomes rather than genuine perception.

> **SEQUENCING (FIX-085):** Calibration references are CLASSIFICATION tools, not evaluation rubrics. The Weaver must FIRST describe observations in own words, THEN classify using the reference scales below. Reading scales before describing evidence risks anchoring on categories rather than perceiving what is actually there.

### 2.1 Multi-Coherence Scale

| Simultaneous Shifts at Boundary | Quality Level |
|--------------------------------|---------------|
| 0-1 | FLAT |
| 2 | FUNCTIONAL |
| 3 | DESIGNED |
| 4-5 | COMPOSED |
| 6 | FLAGSHIP |

### 2.2 Severity Scale

| Dead Space | Severity |
|------------|----------|
| 1-2 viewport-heights | LOOKS-WRONG |
| 3-5 viewport-heights | WOULD-NOT-SHIP |
| 6+ viewport-heights | CATASTROPHIC |

### 2.3 Metaphor Expression Spectrum

| Level | Expression | Quality |
|-------|-----------|---------|
| STRUCTURAL | Spatial organization, color progression, visual weight | HIGHEST |
| ATMOSPHERIC | Palette, typography, vocabulary choices | HIGH |
| LABELED | Explicit text labels on structural elements | MEDIUM |
| ANNOUNCED | Section titles explain the metaphor | LOW |

### 2.4 Quality Tiers (Discrete Registers)

| Tier | PA-05 Range | Mechanisms | CSS Lines | Coupling Register |
|------|-------------|------------|-----------|-------------------|
| FLOOR | < 2.5 | 5 | 150-250 | Register 0 (NO coupling) |
| MIDDLE (default) | 2.5-3.0 | 8-10 | 350-500 | Register 1 (LOCAL coupling) |
| CEILING | 3.0-3.5 | 12-15 | 700-1000 | Register 2 (STRUCTURAL coupling) |
| FLAGSHIP | >= 3.5 | 16-18 | 1000-1500 | Register 3 (ATMOSPHERIC coupling) |

### 2.5 PA-05 x Tier 5 Combined Verdict Matrix

| | PA-05 < 3/4 | PA-05 = 3/4 | PA-05 = 4/4 |
|---|---|---|---|
| **Tier 5: 0-2** | NOT SHIP-READY | STYLED (template) | VOCABULARY ONLY |
| **Tier 5: 3-5** | NOT SHIP-READY | STRUCTURED | STRUCTURED |
| **Tier 5: 6-7** | (unlikely) | APPROACHING | APPROACHING |
| **Tier 5: 8-9** | (impossible in practice) | (unlikely) | **COMPOSED** (target) |

---

## 3. WEAVER DIAGNOSTIC VOCABULARY

> Source: FIX-086 — Currently the Weaver must infer diagnostic categories without guidance.

When classifying fixes in the Top-5 list, the Weaver uses these diagnostic categories with their evidence signatures:

| Category | Definition | Evidence Pattern | Remediation |
|----------|-----------|-----------------|-------------|
| **MECHANICAL** | Fix by changing a CSS value | Auditors cite SPECIFIC elements with SPECIFIC visual problems (e.g., "the gap between S3 and S4 is too large") | Builder changes the value directly |
| **STRUCTURAL** | Reorganize zones, boundaries, or grids | Auditors cite SPATIAL RELATIONSHIP problems (e.g., "sections feel disconnected," "no visual hierarchy between zones") | Builder re-reads TC brief Sections 2+4, reorganizes zone structure |
| **COMPOSITIONAL** | Re-invoke tension-composition | Auditors cite ABSENCE of unifying logic or metaphor (e.g., "elements feel random," "no governing idea visible," "competent but soulless") | Requires TC re-invocation (TYPE C fix cycle — new conviction, new TC brief) |

### 3.1 Diagnostic Decision Tree

1. Can the problem be fixed by changing ONE CSS property? --> MECHANICAL
2. Can the problem be fixed by reorganizing existing elements? --> STRUCTURAL
3. Does the problem require rethinking the page's compositional logic? --> COMPOSITIONAL

---

## 4. EMOTIONAL ARC FRAMEWORK (4 Registers)

### 4.1 Council Ruling: PA Auditor Is Primary

> Source: council-verdict.md, CF-02 — "PA auditor is the primary check; Compositional Critic is an experimental alternative pending validation"
> Source: council-verdict.md, Contradiction C — "PA auditor assesses emotional arc post-build (not gate-runner, not Compositional Critic)"
> Source: ITEM 037 (extract-d21-d25.md, VA L1664) — "PA auditor can assess emotional arc AFTER build"
> Source: ITEM 032 (extract-d21-d25.md, VA L1656-1657) — "Emotional arc is EMERGENT, not SPECIFIED. Cannot be gate-checked"

**CRITICAL:** The Compositional Critic was previously listed as the "primary emotional arc check" (ITEM 038, extract-d21-d25.md, VA L1665). Per council ruling CF-02, this is OVERRIDDEN. The Compositional Critic has zero evidence (N=0) and is classified as EXPERIMENTAL. The PA auditor is the primary quality check.

### 4.2 Four Emotional Registers

> Source: ITEM 001 (extract-d21-d25.md, VA L1572-1574) — "4 emotional registers distinct from density arc"

Emotional arc has 4 registers, each with CSS signatures and assessment criteria:

**1. SURPRISE** — moment page does something unexpected
> Source: ITEM 002 (extract-d21-d25.md, VA L1579-1580)
- CSS signatures: scale break (headline 2.5x body), color inversion (dark zone mid-page), layout rupture (grid after 4+ single-column viewports), structural inversion (border-RIGHT in border-LEFT page)
> Source: ITEM 003 through ITEM 006 (extract-d21-d25.md, VA L1583-1586)
- Expected: 1-2 moments only, in SECOND HALF (D-04)
> Source: ITEM 029 (extract-d21-d25.md, VA L1644-1645)
- Gas Town: ZERO surprise moments
> Source: ITEM 007 (extract-d21-d25.md, VA L1588-1590)
- Disposition link: D-04 'Second-half moment' creates CONDITIONS for surprise (not guaranteed)
> Source: ITEM 034 (extract-d21-d25.md, VA L1660)

**2. DELIGHT** — small unexpected refinements that reward attention
> Source: ITEM 009 (extract-d21-d25.md, VA L1597-1598)
- CSS signatures: hover states revealing hidden content, typographic micro-refinement (tabular-nums, text-indent), zone-specific ::selection colors, print-specific styling, first/last child edge treatments
> Source: ITEM 010 through ITEM 014 (extract-d21-d25.md, VA L1601-1605)
- Expected: distributed throughout, more in high-density zones
> Source: ITEM 030 (extract-d21-d25.md, VA L1647-1648)
- Gas Town: 2/10 delight score, missing 6 techniques
> Source: ITEM 015 (extract-d21-d25.md, VA L1607-1609)
- Disposition link: D-07 'Edge intentionality' creates conditions for delight
> Source: ITEM 036 (extract-d21-d25.md, VA L1662)

**3. AUTHORITY** — page knows what it is, every element expresses certainty
> Source: ITEM 016 (extract-d21-d25.md, VA L1611-1612)
- CSS signatures: consistent border-weight hierarchy (4px ALWAYS = primary), restraint (knowing what NOT to use), dense purposeful header (dark bg, tight spacing), zero decorative elements
> Source: ITEM 017 through ITEM 020 (extract-d21-d25.md, VA L1615-1618)
- Expected: should be HIGH throughout (soul ensures)
> Source: ITEM 028 (extract-d21-d25.md, VA L1641-1642)
- Gas Town: 7/10 authority, loses for uniform component styling
> Source: ITEM 021 (extract-d21-d25.md, VA L1620-1622)
- Disposition link: D-03 'Would you sign this?' creates conditions for authority
> Source: ITEM 033 (extract-d21-d25.md, VA L1659)

**4. EARNED CLOSURE** — ending feels earned by the journey
> Source: ITEM 022 (extract-d21-d25.md, VA L1624-1625)
- CSS signatures: footer echoes header (bookending), density arc resolves (Z4 releases what Z3 compressed), final drop cap or typographic moment, breathing space before footer (80-120px gap)
> Source: ITEM 023 through ITEM 026 (extract-d21-d25.md, VA L1628-1631)
- Expected: only in final 2-3 viewports, must be EARNED
> Source: ITEM 031 (extract-d21-d25.md, VA L1650-1651)
- Gas Town: 5/10 closure, Z4 too similar to Z2, no final moment
> Source: ITEM 027 (extract-d21-d25.md, VA L1633-1635)
- Disposition link: D-05 'Scroll as reader' creates conditions for closure
> Source: ITEM 035 (extract-d21-d25.md, VA L1661)

### 4.3 How PA Questions Map to Emotional Registers

Emotional arc is EMERGENT — it cannot be specified or gate-checked. The PA auditor assesses it post-build through:

1. **PA-35** (scroll at reading speed — interest peaks/valleys/fades) detects overall arc shape
2. **PA-36** (dramatic visual moment — position and impact) detects SURPRISE placement
3. **PA-13** (clear visual ending?) detects CLOSURE
4. **PA-45** (single moment to show someone as good design) detects DELIGHT
5. **PA-05** sub-criterion DESIGNED detects AUTHORITY
6. **PA-47** (anything surprising in second half) detects late-page SURPRISE

The Weaver synthesizes these into an emotional arc assessment using the 4-register framework.

### 4.4 Disposition-Emotion Links (DESIGN INTENTIONS, Not Guarantees)

> Source: council-verdict.md, Contradiction C — "DESIGN INTENTIONS, not guaranteed causal links"

| Disposition | Creates Conditions For | Evidence |
|-------------|----------------------|----------|
| D-03 'Would you sign this?' | AUTHORITY | DESIGN INTENTION (not guaranteed) |
| D-04 'Second-half moment' | SURPRISE | DESIGN INTENTION (not guaranteed) |
| D-05 'Scroll as reader' | CLOSURE | DESIGN INTENTION (not guaranteed) |
| D-07 'Edge intentionality' | DELIGHT | DESIGN INTENTION (not guaranteed) |

---

## 5. SHIP DECISION AND FEEDBACK LOOP

### 5.1 Ship Thresholds

> Source: ITEM 77 (extract-d01-d03.md, VA L201-204)

| Condition | Decision |
|-----------|----------|
| PA-05 >= 3.5/4 AND zero soul violations | **SHIP** |
| PA-05 >= 3/4 AND all identity gates PASS AND <= 3 MECHANICAL fixes needed | **SHIP WITH FIXES** (see 5.1.1) |
| PA-05 2.5-3.5 | **REFINE** (see 5.2) |
| PA-05 < 2.5 | **REBUILD** (see 5.3) |

#### 5.1.1 SHIP WITH FIXES Protocol

**SHIP WITH FIXES** is distinct from both SHIP and REFINE. It means: the page is compositionally sound and meets quality threshold, but has a small number of identifiable mechanical defects. Criteria:
- PA-05 >= 3/4 (COMPOSED or higher)
- All identity gates (soul, prohibitions) PASS
- <= 3 fixes needed, ALL classified as MECHANICAL (not STRUCTURAL or COMPOSITIONAL)
- Fixes are applied by the SAME builder (no fresh agent needed), then verified by a single spot-check auditor

### 5.2 REFINE Protocol

> Source: ITEM 78 (extract-d01-d03.md, VA L206-210) — "DIFFERENT Opus agent, reads conviction"

- DIFFERENT Opus agent (defeats continuation bias)
- Reads conviction artifact + PA artistic impressions
- Refine agent NEVER sees gate scores or threshold numbers
> Source: ITEM 050 (extract-d15-d17.md, VA L1259)

### 5.3 REBUILD Protocol

> Source: ITEM 79 (extract-d01-d03.md, VA L212-215) — "FRESH builder in COMPOSING mode"

- FRESH Opus builder
- In COMPOSING mode (not REPAIR mode)
- Reads previous conviction artifact (not fix list)
- Generative language, not diagnostic
> Source: ITEM 044-046 (extract-d15-d17.md, VA L1252-1254)

### 5.4 Feedback Language

> Source: ITEM 80 (extract-d01-d03.md, VA L219-220) — "Returns to Phase 2 with PA verdict as CONTEXT (generative language)"

PA verdict goes back to Phase 2 as CONTEXT in generative language. NOT: "SC-09 FAILED: stacked gap 210px exceeds 120px." YES: "The middle sags — energy dissipates by S5."

> Source: ITEM 14, ITEM 15 (extract-d06-d08.md, VA L509-514)

---

## 6. PA-ASSESSED ANTI-PATTERNS (Weaver Context)

### 6.1 Anti-Patterns Requiring Perceptual Judgment

> Source: ITEM 023 (extract-d15-d17.md, VA L1188) — "4 require PERCEPTUAL AUDIT (PA-05 questions)"
> Source: ITEM 026 (extract-d15-d17.md, VA L1192) — "Phase 3 PA adds anti-pattern-aware questions"

The Weaver should watch for these anti-patterns in auditor reports:

| AP | Anti-Pattern | What It Detects | PA Questions That Catch It |
|----|-------------|-----------------|---------------------------|
| AP-02 | COLOR ZONE CONFLICT | Hierarchy DISAGREEMENT between color zones | PA-18, PA-55 |
| AP-03 | TRANSITION MONOTONY | All zones use identical dividers | PA-17, PA-69, PA-62 |
| AP-05 | SPACING FLAT-LINE | Density arc compresses uniformly | PA-40, PA-66 |
| AP-06 | CHANNEL ISOLATION | 6 channels shift not at same boundaries | PA-69, PA-61 |
| AP-07 | METAPHOR BLEED | Vocabulary leaks across zone boundaries | PA-44, PA-68 |
| AP-08 | COMPONENT ORPHAN | Component styled for wrong zone | PA-63, PA-19 |
| AP-12 | RESTRAINT EROSION | Additions erode deliberate absences | PA-64 |
| AP-13 | BOOKEND ASYMMETRY | Header/footer echo breaks in revision | PA-13, PA-24 |

### 6.2 Revision Degradation Warnings

> Source: ITEM 028 (extract-d15-d17.md, VA L1199) — "REVISION QUALITY — WHY FIX CYCLES DEGRADE COMPOSITION"

PA auditors should be aware that fix cycles can DEGRADE composition. Watch for:

| Warning | What Degrades | Source |
|---------|--------------|--------|
| Multi-channel encoding decouples | Fix to one channel breaks alignment with others | ITEM 038 (extract-d15-d17.md, VA L1237-1238) |
| Density arcs flatten | Individual zone correction breaks overall arc | ITEM 039 (extract-d15-d17.md, VA L1239-1240) |
| Bookending symmetry breaks | Modifying one end breaks header/footer echo | ITEM 040 (extract-d15-d17.md, VA L1241-1242) |
| Component-context coupling breaks | CSS changes disconnect components from zones | ITEM 041 (extract-d15-d17.md, VA L1243-1244) |
| Restraint coherence degrades | Changing mechanisms shifts what "restraint" means | ITEM 042 (extract-d15-d17.md, VA L1245-1246) |

These inform the Weaver's fix-type classification. COMPOSITIONAL fixes should not be attempted through MECHANICAL means.

---

## 7. MODE DETERMINANTS (Applied vs Composed Detection)

### 7.1 PA-Relevant Mode Indicators

The Weaver can detect whether a page was built in APPLIED or COMPOSED mode through auditor observations:

| Determinant | APPLIED Mode | COMPOSED Mode | Source |
|-------------|-------------|---------------|--------|
| Layout choice driver | Content-type driven | Metaphor driven | ITEM 76 (extract-d18-d20.md, VA L1552) |
| Governing logic | Absent (no articulable in 1 sentence) | Present | ITEM 78 (extract-d18-d20.md, VA L1554) |
| Component adaptation | Callouts identical across zones | Callouts adapt to zone context | ITEM 64-65 (extract-d18-d20.md, VA L1520-1526) |
| Removal impact | Remove A, B unchanged | Remove A, B's meaning shifts | ITEM 55-56 (extract-d18-d20.md, VA L1498-1499) |

### 7.2 PA Questions That Detect Mode

- **PA-03** ("one designer or three") — COMPOSED mode reads as "one designer"
- **PA-05a** ("intentional composition or assembled") — COMPOSED = intentional, APPLIED = assembled
- **PA-63** (fractal zoom / component adaptation) — directly detects zone-responsive components
- **PA-65** (music analogy) — "ensemble" = COMPOSED, "choir in unison" = APPLIED
- **PA-70** (content-form coupling) — COMPOSED mode shows visual density matching content density

---

## 8. CROSS-PAGE COHERENCE (Family DNA — Weaver Context)

> Source: ITEM 052 (extract-d15-d17.md, VA L1268) — "CROSS-PAGE COHERENCE — FAMILY DNA"
> Source: ITEM 053 (extract-d15-d17.md, VA L1273) — "~30 CSS properties IDENTICAL between independently-built pages"

The Weaver assesses cross-page coherence through auditor reports on:
- **PA-24:** Does this feel like it belongs to a SYSTEM, or is it one-off custom work?
- **PA-25:** Does the identity persist throughout, or only in the header?

The shared DNA (~30 identical properties) comes from tokens.css + soul constraints + components.css. No additional cross-page gate is needed — the DNA is INHERENT.

---

## 9. 12 VALUES ITEMS — WEAVER CLASSIFICATION CONTEXT

> **WARNING (FIX-084): WEAVER USE ONLY.** The tier definitions, quality tier tables, and calibration data in this section are for the WEAVER's classification use ONLY. They MUST NOT be included in PA Auditor A-I prompts.

### 9.1 The 12 Rerouted Items

> Source: council-verdict.md, Part 2, Pattern 5, Category B — "REROUTE to PA AUDITOR (quality assessment) — 12 items"

The gate-runner checks BINARY constraints only. Quality tier assessments require judgment and belong with the PA auditor (specifically, the WEAVER who synthesizes all auditor reports).

| # | Item ID | Source | VA Line | Text |
|---|---------|--------|---------|------|
| 1 | ITEM 36 | extract-d09-d11.md | L813-815 | Quality tiers are DISCRETE REGISTERS not continuous spectrum |
| 2 | ITEM 37 | extract-d09-d11.md | L818 | Tiers measured: PA-05, CCS, Mechanisms, CSS Lines, Build Time |
| 3 | ITEM 38 | extract-d09-d11.md | L821 | FLAGSHIP (highest tier) |
| 4 | ITEM 39 | extract-d09-d11.md | L822 | Flagship: PA-05 >=3.5 (hypothesis), CCS 0.55-0.80 |
| 5 | ITEM 40 | extract-d09-d11.md | L823 | Register 3 (ATMOSPHERIC coupling) |
| 6 | ITEM 41 | extract-d09-d11.md | L824 | Flagship: 16-18 mechanisms, 1000-1500 CSS lines |
| 7 | ITEM 43 | extract-d09-d11.md | L826 | Unified pervading metaphor throughout |
| 8 | ITEM 44 | extract-d09-d11.md | L827 | Content-form INDISTINGUISHABLE |
| 9 | ITEM 45 | extract-d09-d11.md | L830 | CEILING (second tier) |
| 10 | ITEM 46 | extract-d09-d11.md | L831 | Ceiling: PA-05 3.0-3.5, CCS 0.35-0.55 |
| 11 | ITEM 47 | extract-d09-d11.md | L832 | Register 2 (STRUCTURAL coupling) |
| 12 | ITEM 48 | extract-d09-d11.md | L833 | Ceiling: 12-15 mechanisms, 700-1000 CSS lines |

### 9.2 Additional Tier Definitions (Full Context)

| # | Item ID | Source | VA Line | Text |
|---|---------|--------|---------|------|
| 13 | ITEM 49 | extract-d09-d11.md | L834 | CD-006 (39/40), Gas Town (3.5/4) reference exemplars |
| 14 | ITEM 50 | extract-d09-d11.md | L835 | Multi-coherence LOCAL not GLOBAL |
| 15 | ITEM 51 | extract-d09-d11.md | L838 | MIDDLE (Default Floor) |
| 16 | ITEM 52 | extract-d09-d11.md | L839 | Middle: PA-05 2.5-3.0, CCS 0.15-0.35 |
| 17 | ITEM 53 | extract-d09-d11.md | L840 | Register 1 (LOCAL coupling) |
| 18 | ITEM 54 | extract-d09-d11.md | L841 | Middle: 8-10 mechanisms, 350-500 CSS lines |
| 19 | ITEM 55 | extract-d09-d11.md | L842 | Middle experiment (PA-05 4/4 DESIGNED) |
| 20 | ITEM 56 | extract-d09-d11.md | L843 | Highest ROI tier |
| 21 | ITEM 57 | extract-d09-d11.md | L846 | FLOOR (lowest tier) |
| 22 | ITEM 58 | extract-d09-d11.md | L847 | Floor: PA-05 <2.5, CCS <0.15 |
| 23 | ITEM 59 | extract-d09-d11.md | L848 | Register 0 (NO coupling) |
| 24 | ITEM 60 | extract-d09-d11.md | L849 | Floor: 5 mechanisms, 150-250 CSS lines |
| 25 | ITEM 61 | extract-d09-d11.md | L850 | Flagship experiment (PA-05 1.5/4 FAILED) |

### 9.3 CCS Items — RESEARCH CONSTRUCT Warning

> Source: council-verdict.md, Part 2, Pattern 5 — "CCS thresholds CANNOT be gate-checked until methodology is standardized"

The following items reference CCS. The Weaver may use them for qualitative context but must NOT use CCS as a numeric pass/fail criterion:

| Item ID | Source | Text | CCS Reference |
|---------|--------|------|---------------|
| ITEM 22 (extract-d18-d20.md) | VA L1406 | PA-05 measures perceived quality | CCS is separate |
| ITEM 28 (extract-d18-d20.md) | VA L1415 | CCS measures MECHANISM INTERDEPENDENCE | Definition only |
| ITEM 31 (extract-d18-d20.md) | VA L1420 | CCS 0.00-1.00 scale | Scale definition |
| ITEM 43-45 (extract-d18-d20.md) | VA L1463-1473 | Register 1/2/3 definitions with CCS ranges | Context only |
| ITEM 32-35 (extract-d18-d20.md) | VA L1426-1443 | Page scores (Middle, Gas Town, CD-006, Flagship) | Historical data |

**Status:** CCS measurement varies by +/- 0.15 depending on methodology. Tag all CCS items: "RESEARCH — do not operationalize until methodology standardized."

---

*End of PA Weaver artifact. Split from artifact-pa-protocol-MONOLITHIC.md. INFORMATION ISOLATION: auditors should NOT receive this file.*
