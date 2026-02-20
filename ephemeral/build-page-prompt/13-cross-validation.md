# 13 -- Cross-Reference Validation Report

**Agent:** cross-validator (Opus 4.6)
**Task:** #31 / #38
**Date:** 2026-02-19
**Sources Checked:**
- 10-CONVENTIONS-BRIEF-DRAFT.md (brief)
- 08-VERIFICATION-SPEC.md (gates)
- 07-INPUT-SPEC.md (input spec)
- PV2-FLAGSHIP-VARIANT.md (PV2)
- tokens.css (actual token values)
- prohibitions.md (actual soul constraints)
- mechanism-catalog.md (actual mechanism count/categories)

---

## EXECUTIVE SUMMARY

**10 cross-checks performed. 8 mismatches found.**

| # | Check | Status | Severity |
|---|-------|--------|----------|
| 1 | Perception thresholds across docs | [MISMATCH] | HIGH |
| 2 | Soul constraints brief vs prohibitions.md | [MISMATCH] | MEDIUM |
| 3 | Token values brief vs tokens.css | PASS | -- |
| 4 | File paths in input spec | [MISMATCH] | HIGH |
| 5 | Line counts in input spec | [MISMATCH] | MEDIUM |
| 6 | Mechanism counts vs catalog | PASS | -- |
| 7 | Gate thresholds verification spec vs PV2 | [MISMATCH] | LOW |
| 8 | Success bar across documents | PASS | -- |
| 9 | Channel definitions across docs | [MISMATCH] | LOW |
| 10 | Scale definitions across docs | PASS | -- |

---

## CHECK 1: PERCEPTION THRESHOLDS

### [MISMATCH] Letter-spacing threshold: 0.03em vs 0.02em

**Three distinct values appear across documents:**

| Document | Field Name | Value | Meaning |
|----------|-----------|-------|---------|
| **Brief (10)** Section 2 | `letter_spacing_delta` | `>= 0.03em between typographic zones` | DELTA between zones |
| **Brief (10)** anti-pattern | letter-spacing | `< 0.02em` (sub-perceptual) | MINIMUM per-element value |
| **Input Spec (07)** Section 9 | `letter_spacing_minimum` | `>= 0.02em (nothing sub-perceptual)` | MINIMUM per-element value |
| **Verification Spec (08)** SC-14 | sub-perceptual prevention | `No letter-spacing < 0.02em` | MINIMUM per-element value |
| **PV2** stack header (L1) | perception threshold | `>= 0.03em spacing` | DELTA between zones |
| **PV2** Section 2 YAML | `letter_spacing_delta` | `>= 0.03em` | DELTA between zones |
| **PV2** SC-14 gate | sub-perceptual prevention | `No letter-spacing < 0.02em` | MINIMUM per-element value |

**Analysis:** There are actually TWO different thresholds being conflated:
1. **SC-14 (sub-perceptual prevention):** No letter-spacing value below 0.02em. This is the MINIMUM any single element can have. Consistent across verification spec, input spec, and PV2 at **0.02em**.
2. **L1 perception threshold:** The DELTA between adjacent typographic zones must be >= 0.03em. Consistent across brief and PV2 L1 stack at **0.03em**.

These are NOT contradictions -- they are two different measurements. But the brief's Section 2 YAML uses `letter_spacing_delta` (0.03em) which is the between-zone delta, while the input spec uses `letter_spacing_minimum` (0.02em) which is the per-element floor. The brief also has an anti-pattern section mentioning 0.02em.

**Recommendation:** Both values are correct but serve different purposes. The brief should clarify both:
- Per-element minimum: >= 0.02em (SC-14 enforcement)
- Between-zone delta: >= 0.03em (perception threshold)

### [MISMATCH] `border_presence` threshold inconsistency

| Document | Value |
|----------|-------|
| **Brief (10)** Section 2 YAML | `>= 1 structural border-left per zone (alternating OK)` |
| **Brief (10)** Section 9 | (no specific count) |
| **Verification Spec (08)** SC-15 (base) | `>= 1 border-left >= 3px OR >= 2 <hr>` |
| **Verification Spec (08)** SC-15 (Flagship elevation) | `>= 3 distinct border configurations` |
| **PV2** SC-15 (base) | `>= 1 border-left >= 3px OR >= 2 <hr>` |
| **PV2** SC-15 (Flagship elevation) | `>= 3 distinct borders` |

**Analysis:** The brief says ">= 1 structural border-left per zone" which is much higher than the base SC-15 (>= 1 total) and different from the Flagship elevation (>= 3 distinct configurations). "Per zone" is more demanding than "per page" but also different from "3 distinct configurations."

**Recommendation:** The brief should use the Flagship-elevated threshold: `>= 3 distinct border configurations across the page`. The "per zone" framing in the brief is arguably MORE demanding but imprecise -- "alternating OK" partially walks it back. Align with verification spec's Flagship threshold.

### Background delta, font-size delta, stacked gap: CONSISTENT

| Threshold | Brief | Verification Spec | PV2 | Status |
|-----------|-------|-------------------|-----|--------|
| Background RGB | >= 15 | >= 15 | >= 15 | MATCH |
| Font-size delta | >= 2px | >= 2px (base), >= 3px (Flagship) | >= 2px (base), >= 3px (Flagship) | MATCH |
| Stacked gap max | <= 108px | <= 108px | <= 108px | MATCH |
| Multi-coherence | >= 3 channels | >= 3 every boundary, avg >= 4 (Flagship) | >= 3 (base), avg >= 4 (Flagship) | MATCH |

---

## CHECK 2: SOUL CONSTRAINTS

### [MISMATCH] Prohibition count: 22 vs 24

| Document | Count | Breakdown |
|----------|-------|-----------|
| **Input Spec (07)** line 66 | "22 rules (8 absolute, 12 conditional, 2 meta)" | 8 + 12 + 2 = 22 |
| **prohibitions.md** Summary (line 391-394) | "8 absolute, **14** conditional, 2 meta = **24** total" | 8 + 14 + 2 = 24 |
| **CLAUDE.md** (compositional-core) | "22 prohibitions (8 absolute + 12 conditional + 2 meta)" | 8 + 12 + 2 = 22 |
| **CLAUDE.md** (root design-system) | "22 prohibitions, 8 absolute + 12 conditional + 2 meta" | 8 + 12 + 2 = 22 |

**Analysis:** The actual prohibitions.md file counts **14 conditional** prohibitions (numbered 9-22, which is actually 14 items), totaling **24 prohibitions**. But every other document says 22 with 12 conditional. Counting the actual conditional prohibition headings in prohibitions.md:
- #9 (2px borders), #10 (accent borders < 4px), #11 (decorative elements), #12 (grid breaking), #13 (vertical table borders), #14 (hover lift), #15 (traffic light), #16 (cool grays), #17 (non-italic h3), #18 (same-density stacking) = 10 conditional
- Then #19 (justify without provenance), #20 (patterns without tension) = 2 meta
- Then #21 (full viewport void), #22 (front-loaded interest) = 2 more

**Wait -- #21 and #22 are under "Meta-Prohibitions" section header but are spatial/layout rules.** The summary says "14 conditional + 2 meta" but the section headers show "Conditional Prohibitions" ending at #18 and "Meta-Prohibitions" starting at #19. So #19-#20 are meta, but then #21-#22 exist below that with full prohibition entries.

**The actual file has prohibitions numbered 1-22, and the summary says 24. This is a file-internal inconsistency.** The summary claims 14 conditional but only 10 are under the "Conditional" heading (#9-#18). The remaining 4 (#19-#22) are under "Meta-Prohibitions" which the summary claims has only 2.

**Recommendation:** The source of truth is prohibitions.md's ACTUAL CONTENT (22 numbered prohibitions). The summary at line 391-394 appears to have a count error (says 14 conditional + 2 meta = 24, but the actual numbered prohibitions are 22). The input spec's "22 rules" matches the actual numbered prohibitions. **Use 22 (8 absolute + 10 conditional + 4 meta/spatial)** or update the prohibitions.md summary to match its own content.

### Soul constraint coverage: Brief vs prohibitions.md

| Brief Section 1 constraint | In prohibitions.md? | Status |
|---------------------------|---------------------|--------|
| `border-radius: 0` | #1 (Absolute) | MATCH |
| `box-shadow: none` | #2 (Absolute) | MATCH |
| `background: solid only` (no gradients) | #5 (Absolute) | MATCH |
| `No #000 or #FFF` | #6 (Absolute) | MATCH |
| `opacity: 1 on containers` | #4 (Absolute) | MATCH |
| Font trinity (Instrument Serif / Inter / JetBrains Mono) | #7 (Absolute) | MATCH |
| Container 940-960px | NOT in prohibitions.md | [NOTE] |

**Note:** Container width 940-960px is stated in the brief but is NOT one of the 8 absolute prohibitions. It IS enforced by gate SC-01. This is acceptable -- not every rule needs to be in prohibitions.md.

### [MISMATCH] Brief omits 3 absolute prohibitions

The brief's Section 1 lists 5 constraints inline + font trinity + container. But prohibitions.md has 8 absolute prohibitions:

| # | Prohibition | In brief Section 1? |
|---|------------|---------------------|
| 1 | border-radius: 0 | YES |
| 2 | box-shadow: none | YES |
| 3 | filter: drop-shadow() | NO -- MISSING |
| 4 | Semi-transparent backgrounds | YES (opacity: 1) |
| 5 | No gradients | YES |
| 6 | No pure #000/#FFF | YES |
| 7 | No serif for body text | YES (font trinity) |
| 8 | No rounded corners for decoration | Redundant with #1 |

**Recommendation:** The brief should explicitly mention "No filter: drop-shadow()" (prohibition #3). This is a common agent error vector. #8 is redundant with #1 and can be omitted.

---

## CHECK 3: TOKEN VALUES

### Brief vs tokens.css: PASS

| Brief value | tokens.css value | Status |
|-------------|-----------------|--------|
| `#1A1A1A` (warm near-black) | `--color-text: #1A1A1A` | MATCH |
| `#FEF9F5` (warm cream) | `--color-background: #FEF9F5` | MATCH |
| Instrument Serif | `--font-display: 'Instrument Serif'` | MATCH |
| Inter | `--font-body: 'Inter'` | MATCH |
| JetBrains Mono | `--font-mono: 'JetBrains Mono'` | MATCH |
| 4px base unit | `--space-1: 4px` | MATCH |
| 8, 16, 24, 32, 48, 64, 80, 96 | space-2 through space-24 | MATCH |
| Max single spacing: 96px | `--space-max-zone: 96px` | MATCH |

**All token values in the brief match tokens.css exactly.**

---

## CHECK 4: FILE PATHS IN INPUT SPEC

### [MISMATCH] merged-components.css does NOT exist

| Input Spec Path | Actual Path | Status |
|----------------|-------------|--------|
| `design-system/compositional-core/vocabulary/tokens.css` | EXISTS | MATCH |
| `design-system/compositional-core/identity/prohibitions.md` | EXISTS | MATCH |
| `design-system/compositional-core/grammar/mechanism-catalog.md` | EXISTS | MATCH |
| `design-system/compositional-core/components/merged-components.css` | **DOES NOT EXIST** | [MISMATCH] |

**The actual file is `components.css`**, not `merged-components.css`. The directory contains:
- `components.css` (1,195 lines)
- `components-dd-od.css`
- `components-cd-tt.css`
- `component-inventory.md`
- `README.md`

**Impact:** The brief (Section 2, 8, 9), input spec (File 6), and PV2 all reference `merged-components.css`. The builder would fail to read this file.

**Recommendation:** Replace all references to `merged-components.css` with `components.css` across ALL documents. This is the actual filename.

---

## CHECK 5: LINE COUNTS IN INPUT SPEC

### [MISMATCH] Multiple line count discrepancies

| File | Input Spec Claims | Actual `wc -l` | Delta | Status |
|------|------------------|----------------|-------|--------|
| tokens.css | 174 lines | **183 lines** | +9 | [MISMATCH] |
| prohibitions.md | 353 lines | **419 lines** | +66 | [MISMATCH] |
| mechanism-catalog.md | ~870 lines | **1,218 lines** | +348 | [MISMATCH] |
| merged-components.css | ~500 lines | **1,195 lines** (as components.css) | +695 | [MISMATCH] |

**Analysis:**
- **tokens.css:** Minor drift (+9 lines, likely comments/blank lines added). Low impact.
- **prohibitions.md:** Moderate drift (+66 lines). Likely the additional prohibitions #21-#22 and extra documentation. Low impact on builder but the "353 lines" claim is stale.
- **mechanism-catalog.md:** Significant drift (+348 lines). The catalog was enriched during the Enrichment Execution Team phase (1,583 to 1,878 lines in the skill; catalog itself grew correspondingly). The "~870 lines" in the input spec reflects the pre-enrichment state. High impact: the builder sees ~1,218 lines of reference material, not ~870.
- **components.css:** Massive discrepancy. The input spec says "~500 lines" but the actual file is 1,195 lines. This changes the total builder input significantly.

**Impact on total input calculation (Input Spec Section 5.1):**

| Input Spec Claim | Actual |
|-----------------|--------|
| Total non-content: ~1,795 lines | ~3,015 lines |
| Reference files: ~1,570 lines | ~2,816 lines |
| Effective instruction volume: ~315 lines | ~315 lines (unchanged -- still just the brief) |

**Recommendation:** Update all line counts. The total input volume is ~68% higher than claimed. This does NOT invalidate the input spec's core argument (effective INSTRUCTION volume is ~225 lines of the brief; reference files are LOOKUP, not instruction). But the numbers must be accurate.

---

## CHECK 6: MECHANISM COUNTS VS CATALOG

### PASS -- 18 mechanisms, 5 categories

| Document | Mechanism Count | Category Count | Categories Named |
|----------|----------------|----------------|-----------------|
| Brief Section 9 | "4 of 5 categories" | 5 | S, H, C, D, N |
| Verification Spec | "4 of 5" | 5 | Spatial, Hierarchy, Component, Depth, Navigation |
| Mechanism Catalog | 18 mechanisms | 5 | Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation |
| Input Spec | "18 mechanisms" | 5 | "5 categories (Spatial, Hierarchy, Component, Depth, Structure/Nav)" |

**Minor naming note:** The brief and verification spec use "Navigation (N)" while the catalog uses "Structure/Navigation (N)". The brief also says "Depth/Emphasis (D)" which matches the catalog exactly. The truncation of "Structure/" is cosmetic, not functional. The mechanism counts and category structure are consistent.

---

## CHECK 7: GATE THRESHOLDS -- VERIFICATION SPEC VS PV2

### [MISMATCH] Flagship elevation for SC-11

| Gate | Verification Spec (08) Flagship | PV2 Flagship Elevation | Status |
|------|-------------------------------|----------------------|--------|
| SC-06 | >= 5 landmarks | >= 5 | MATCH |
| SC-08 | >= 8 component types | >= 8 types | MATCH |
| SC-11 | `>= 3px delta, 3+ distinct typography zones` + `display-body >= 10px delta` | `>= 3px, 3+ zones` | [MISMATCH] |
| SC-12 | 3-5 zones | 3-5 | MATCH |
| SC-13 | >= 3 every boundary, avg >= 4 | avg >= 4/boundary | MATCH |
| SC-15 | >= 3 distinct border configurations | >= 3 distinct borders | MATCH |

**Analysis:** The verification spec adds a `display-body >= 10px delta` requirement to SC-11 that is NOT in PV2. PV2 only says `>= 3px, 3+ zones`. The 10px display-body delta is an additional threshold in the verification spec.

**Recommendation:** PV2 should be updated to include the display-body >= 10px delta, OR the verification spec should note this is a NEW threshold not in PV2. The verification spec is the more detailed document, so it is likely correct. Add to PV2.

---

## CHECK 8: SUCCESS BAR

### PASS -- Consistent across all documents

| Document | PA-05 Threshold | Tier 5 Threshold | Combined |
|----------|----------------|------------------|----------|
| Brief (not explicitly stated) | N/A (brief is for builder, not verifier) | N/A | N/A |
| Verification Spec | >= 3.5/4 | >= 6/8 | MATCH |
| PV2 (line 22, 2193, 2491, 2526) | >= 3.5 | >= 6/8 | MATCH |

**The success bar is consistent everywhere it appears: PA-05 >= 3.5/4 AND Tier 5 >= 6/8.**

---

## CHECK 9: CHANNEL DEFINITIONS

### [MISMATCH] Brief uses different channel names than PV2 stack

| Channel # | Brief Section 4 | PV2 L3 Stack | Catalog | Status |
|-----------|----------------|-------------|---------|--------|
| 1 | Chromatic | Chromatic | N/A (not in catalog by this name) | MATCH |
| 2 | Typographic | Typographic | N/A | MATCH |
| 3 | Spatial | Spatial | Spatial (category) | MATCH |
| 4 | Structural | Structural | N/A | MATCH |
| 5 | Behavioral | Behavioral | N/A | MATCH |
| 6 | Material | Material | N/A | MATCH |

**The 6 channels are consistently named across the brief and PV2.** However:

**Verification Spec SC-13 describes channels differently:**

| Verification Spec (08) Section 6.1 | Brief Section 4 | Match? |
|------------------------------------|----------------|--------|
| 1. Chromatic: background-color RGB delta >= 15 | Chromatic: background-color, accent color, or border color | PARTIAL |
| 2. Typographic: font-size delta >= 2px OR font-weight >= 100 | Typographic: font-size, font-weight, letter-spacing, or line-height | PARTIAL |
| 3. Spatial: padding delta >= 24px | Spatial: padding, margin, or content density | PARTIAL |
| 4. Structural: border configuration change | Structural: border-left weight, horizontal rules, or visual dividers | MATCH |
| 5. Behavioral: interactivity presence change | Behavioral: hover states, transition timing, or interaction depth | MATCH |
| 6. Material: background-image/texture change | Material: surface treatment, texture, or component density | MATCH |

**The verification spec gives PRECISE programmatic thresholds (>= 15 RGB, >= 2px, >= 24px padding delta) while the brief gives BROADER definitions (includes accent color, letter-spacing, margin, line-height as channel components).** This is intentional (gates are narrower than design space), but it means the brief may lead the builder to think a shift in "accent color" counts for chromatic while SC-13 only checks background-color.

**Recommendation:** Acceptable divergence. The brief describes the DESIGN intent (broader), the gates check the MEASURABLE subset (narrower). No change needed, but the prompt assembler should be aware that gate SC-13 checks a SUBSET of what the brief defines as each channel.

---

## CHECK 10: SCALE DEFINITIONS

### PASS -- 5 scales consistently defined

| Scale | Brief Section 5 | Catalog | PV2 L2 Stack | Status |
|-------|-----------------|---------|-------------|--------|
| Navigation | ~1440px (header/nav) | "bird's eye" | Navigation | MATCH |
| Page | ~960px (sections) | N/A | Page | MATCH |
| Section | ~200-400px | N/A | Section | MATCH |
| Component | ~40-100px | "one element" | Component | MATCH |
| Character | ~12-20px | N/A | Character | MATCH |

**Scale definitions are consistent across all documents.**

---

## SUMMARY OF ALL MISMATCHES

| # | Mismatch | Severity | Recommended Fix |
|---|----------|----------|-----------------|
| **M1** | Letter-spacing: brief says 0.03em delta, SC-14 says 0.02em minimum | HIGH | Brief should state BOTH values -- 0.02em minimum per-element, 0.03em delta between zones |
| **M2** | Border presence: brief says "per zone alternating OK", gates say ">= 3 distinct configurations" (Flagship) | MEDIUM | Align brief to Flagship gate: ">= 3 distinct border configurations" |
| **M3** | Prohibition count: input spec says 22 (8+12+2), prohibitions.md says 24 (8+14+2) | MEDIUM | The actual file has 22 numbered prohibitions; the summary in prohibitions.md line 391-394 is wrong. Use 22. |
| **M4** | Brief omits drop-shadow prohibition (#3) | LOW | Add "No filter: drop-shadow()" to brief Section 1 |
| **M5** | `merged-components.css` does NOT exist -- actual file is `components.css` | **CRITICAL** | Replace ALL references to `merged-components.css` with `components.css` in brief, input spec, PV2, and any prompt |
| **M6** | Line counts stale: tokens.css +9, prohibitions.md +66, mechanism-catalog.md +348, components.css +695 | MEDIUM | Update all line counts. Total builder input ~3,015 (was claimed ~1,795) |
| **M7** | SC-11 Flagship: verification spec adds display-body >= 10px delta not in PV2 | LOW | Add to PV2 or note as verification-spec-only threshold |
| **M8** | Channel definitions: verification spec SC-13 checks narrower subset than brief defines | LOW | No fix needed but prompt assembler should note this |

---

## BLOCKING vs NON-BLOCKING

**BLOCKING (must fix before prompt assembly):**
- **M5:** `merged-components.css` path error -- builder CANNOT read a file that doesn't exist
- **M1:** Letter-spacing dual threshold needs clarification to prevent builder confusion

**SHOULD FIX (fix before experiment but not blocking assembly):**
- **M3:** Prohibition count discrepancy (cosmetic but confusing)
- **M6:** Line counts (affects input volume calculations)
- **M2:** Border threshold alignment

**INFORMATIONAL (no fix required):**
- **M4:** Drop-shadow omission (covered by prohibitions.md which builder reads)
- **M7:** SC-11 extra threshold (verification spec is more detailed, acceptable)
- **M8:** Channel definition scope (intentional design -- gates are narrower)

---

**END OF CROSS-VALIDATION REPORT**

**Critical finding: `merged-components.css` does not exist. The actual file is `components.css` (1,195 lines). Every document referencing `merged-components.css` must be corrected.**
