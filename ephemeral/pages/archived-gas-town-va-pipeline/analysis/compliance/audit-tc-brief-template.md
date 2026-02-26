# Compliance Audit: TC Brief Template vs Execution Brief

**Template:** `ephemeral/va-extraction/artifact-tc-brief-template.md` (169 lines)
**Output:** `ephemeral/pages/yegge-gas-town-extraction/execution-brief.md` (174 lines)
**Auditor:** audit-brief-template
**Date:** 2026-02-23

---

## SUMMARY

| Metric | Value |
|--------|-------|
| Total template requirements | 42 |
| YES (fully compliant) | 33 |
| PARTIAL | 6 |
| NO (missing) | 3 |
| Overall compliance | 78.6% (33/42) |
| Fill quality | 30 SPECIFIC / 3 VAGUE / 6 PARTIAL / 3 MISSING |

**Verdict:** STRONG COMPLIANCE with notable gaps in Tier 2 (missing PT-05 threshold) and Tier 4 (technique density below budget).

---

## TIER 1: IDENTITY (~15 lines)

### Template requirement: "For each of the 10 soul constraints SC-01 through SC-10, write the WORLD-DESCRIPTION text ONLY."
- **Filled?** YES
- **Quality:** SPECIFIC
- All 10 soul constraints present verbatim.

### Template requirement: "Do NOT include 'Gate check' or 'CSS rule' fields. Frame as 'this world IS' not 'you must not.'"
- **Filled?** YES
- **Quality:** SPECIFIC
- Zero gate-check or CSS-rule language. Pure world-description framing.

### Template requirement: "Use verbatim template text (10 soul world-descriptions)"
- **Filled?** YES
- **Quality:** SPECIFIC
- Character-level match confirmed for all 10 paragraphs (lines 9-27 of execution brief match lines 17-35 of template exactly).

### Assembly Rule 3: "Tier 1 is VERBATIM from the template text above"
- **Filled?** YES
- **Quality:** SPECIFIC

**Tier 1 Score: 4/4 = 100%**

---

## TIER 2: PERCEPTION PHYSICS (~8 lines)

### Template requirement: "For each of the 6 perception thresholds PT-01 through PT-06"
- **Filled?** PARTIAL
- **Quality:** PARTIAL
- PT-01 (background RGB delta >= 15): YES, line 33. Verbatim with calibration range.
- PT-02 (letter-spacing >= 0.025em): YES, line 35. Verbatim with compositional range.
- PT-03 (stacked gap <= 120px): YES, line 37. Verbatim with compositional range.
- PT-04 (single margin/padding <= 96px): YES, line 39. Verbatim.
- PT-05 (container width 940-960px): YES, line 41. Verbatim.
- PT-06: **NO — MISSING.** The template lists 6 thresholds but only provides text for 5 (PT-01 through PT-05). The execution brief reproduces exactly what the template provides (5 thresholds). If PT-06 exists in `artifact-identity-perception.md`, it was not captured in the template itself, so the brief cannot be faulted for omitting it. However, the template header says "PT-01 through PT-06" — this is a template self-contradiction.

### Template requirement: "Explicitly state: 'Use the FULL RANGE.'"
- **Filled?** YES
- **Quality:** SPECIFIC
- "Use the full range" appears on line 33 (PT-01). The phrase is present but only on the first threshold rather than as a standalone statement covering all thresholds.

### Template requirement: "Include the full calibration range"
- **Filled?** YES
- **Quality:** SPECIFIC
- PT-01 calibration: "15 = subtle, 25 = confident, 50 = dramatic" present.
- PT-02 calibration: "0.03-0.05em" present.
- PT-03 calibration: "60-90px" present.

### Assembly Rule 4: "Tier 2 is VERBATIM from the template text above (adapt calibration only if thresholds change)"
- **Filled?** YES
- **Quality:** SPECIFIC
- All 5 provided threshold texts are verbatim matches.

**Tier 2 Score: 4/5 = 80%** (PT-06 ambiguity — template itself only provides 5 threshold texts despite claiming 6)

---

## TIER 3: COMPOSITIONAL FRAMEWORKS (~50 lines)

### 3.1 Multi-Coherence (6 channels, boundary-by-boundary)

#### Template: "Describe the 6 coherence channels"
- **Filled?** YES
- **Quality:** SPECIFIC
- All 6 channels named on line 49: "background color, typography, spacing, borders, color accents, and component density."

#### Template: "For each zone boundary from the Content Map, describe what shifts"
- **Filled?** YES
- **Quality:** SPECIFIC
- 5 boundary transitions described (Z1->Z2, Z2->Z3, Z3->Z4, Z4->Z5, Z5->Z6) with per-channel detail:
  - Z1->Z2: 6 channels described (background delta 27, typography 18->16px, spacing 48->32, 3px border, component density jump, accent shift implied). SPECIFIC.
  - Z2->Z3: 5 channels (background delta 16, typography 15px, spacing 32px, border 3px->1px, component shift). SPECIFIC.
  - Z3->Z4: 4 channels (background delta 16, typography heading change, 1px border + 48px gap, spacing hold). SPECIFIC.
  - Z4->Z5: 6 channels (background delta 29, JetBrains Mono, spacing 24px, 4px borders, code blocks/checklists, accent shift). SPECIFIC.
  - Z5->Z6: 5 channels (background delta 19, typography 16px, spacing expand, 4px border quotes, 1px table framing). SPECIFIC.

#### Template: "Each boundary should shift at least 3 of 6 channels, average 4+"
- **Filled?** YES
- **Quality:** SPECIFIC
- Stated explicitly on line 49. Channel counts per boundary: Z1->Z2 = 6, Z2->Z3 = 5, Z3->Z4 = 4, Z4->Z5 = 6, Z5->Z6 = 5. Average = 5.2. Exceeds 4+ requirement.

#### Template: "Specify at least 3 distinct transition types"
- **Filled?** YES
- **Quality:** SPECIFIC
- Lines 62-64: light (1px border + 48px gap = legato), medium (3px border + 80px gap), heavy (background shift + border weight + spacing compression).

#### Template: "MAP transition types to specific zone boundaries"
- **Filled?** YES
- **Quality:** SPECIFIC
- Lines 62-64: Z3->Z4 = light, Z2->Z3 and Z5->Z6 = medium, Z1->Z2 and Z4->Z5 = heavy. Explicit boundary-to-transition mapping.

### 3.2 Structural Metaphor

#### Template: "Map the recommended metaphor seed to page structure"
- **Filled?** YES
- **Quality:** SPECIFIC
- "The Refinery" metaphor on lines 66-77. Maps to zone groups, explains structural logic.

#### Template: "Name CSS custom properties by CONCEPT not by position"
- **Filled?** YES
- **Quality:** SPECIFIC
- 9 concept-named properties: `--refinery-intake`, `--refinery-floor`, `--refinery-tank`, `--refinery-control`, `--refinery-line`, `--refinery-dispatch`, `--pipeline-connector`, `--pressure-indicator`, `--gauge-reading`. Zero positional names (no `--bg-z1`).

#### Template: "Explain how the metaphor maps to zone groups"
- **Filled?** YES
- **Quality:** SPECIFIC
- Lines 70-76: Each zone mapped to a refinery stage. Lines 77: Extended to structural elements with rationale.

### 3.3 Density Arc

#### Template: "ASCII density arc from Content Map"
- **Filled?** YES
- **Quality:** SPECIFIC
- ASCII chart on lines 81-91. WAVE pattern with 6 zones labeled.

#### Template: "Per-zone height estimates"
- **Filled?** YES
- **Quality:** SPECIFIC
- Lines 95-100: All 6 zones with pixel estimates and density labels (Z1: 700px SPARSE, Z2: 1800px DENSE, Z3: 1200px MODERATE, Z4: 900px MODERATE, Z5: 2000px DENSE, Z6: 1100px MODERATE).

#### Template: "PATTERN_NAME from Content Map"
- **Filled?** YES
- **Quality:** SPECIFIC
- "WAVE" on line 79.

### 3.4 Content-Form Coupling

#### Template: "For each zone, specify the content register (NARRATIVE/REFERENCE/CODE) and its CSS implications"
- **Filled?** YES
- **Quality:** SPECIFIC
- Lines 106-111: All 6 zones mapped to registers with CSS implications:
  - Z1: NARRATIVE (18px, line-height 1.8, breathing)
  - Z2: REFERENCE (tight, grid, monospace)
  - Z3: REFERENCE + NARRATIVE (hybrid — diagrammatic + wider measure)
  - Z4: REFERENCE (bordered containers, consistent rhythm)
  - Z5: CODE + REFERENCE (JetBrains Mono, dark code blocks, tight spacing)
  - Z6: NARRATIVE + REFERENCE (tables, pull-quotes, opened spacing)

### 3.5 Creative Authority + Components

#### Template: "80% creative authority"
- **Filled?** YES
- **Quality:** SPECIFIC
- Line 115: "You have 80% creative authority within identity constraints." Verbatim match of template language.

#### Template: "Soul (Tier 1) and physics (Tier 2) are non-negotiable"
- **Filled?** YES
- **Quality:** SPECIFIC
- Line 115.

#### Template: "Use components from components.css... Aim for 8+ component library classes"
- **Filled?** YES
- **Quality:** SPECIFIC
- Lines 118-126: 8 specific components listed (`.callout`, `.code-block`, `.table-wrapper`, `.pull-quote`, `.section-header`, `.grid--2col`, `.collapsible`, `.toc`) with zone assignments. Target raised to "10+ component library classes" (line 126) — exceeds template's 8+. Modulation example provided (padding varies by zone).

#### Template: "Adapt them to zone context: callouts should modulate per zone"
- **Filled?** YES
- **Quality:** SPECIFIC
- Line 126: "Modulate callouts per zone: generous padding (20px 24px) in Z1, compressed (12px 16px) with heavier border (5px left) in Z5." Concrete CSS values.

### 3.6 CSS Value Table

#### Template: "Reference tokens.css... Key vocabulary... Build with 800-1200 CSS lines total"
- **Filled?** YES
- **Quality:** SPECIFIC
- Line 130: spacing scale, border weights, type scale, color palette all referenced. "800-1200 CSS lines total" present. Added: "At least 2 distinct layout patterns (single-column must not exceed 60% of zones)."

**Tier 3 Score: 17/17 = 100%**

---

## TIER 4: DISPOSITION (D-01 through D-08)

### Template: "All 8 dispositions D-01 through D-08 present"
- **Filled?** YES
- **Quality:** SPECIFIC
- All 8 present: D-01 (line 137), D-02 (line 140), D-03 (line 143), D-04 (line 146), D-05 (line 149), D-06 (line 152), D-07 (line 155), D-08 (line 158).

### Template: "Each disposition MUST include technique vocabulary -- specific CSS properties and values, not just purposes"

| Disposition | Has PURPOSE | Has TECHNIQUE VOCABULARY | CSS Values Present | Quality |
|-------------|-------------|--------------------------|-------------------|---------|
| D-01 | YES | YES | 18px, 16px, 15px, line-height 1.8/1.6/1.5, max-width 38em, grid layout | SPECIFIC |
| D-02 | YES | YES | "background shift + typography shift + spacing shift + border weight shift", 4+ channels at Z1->Z2, 2-3 at Z3->Z4 | SPECIFIC |
| D-03 | YES | YES | "4px for primary callouts, 3px for zone dividers, 1px for table cells", "dark background, 3px red bottom border, tight 12px padding" | SPECIFIC |
| D-04 | YES | YES | "background: var(--color-text), color: var(--refinery-intake)", "32-36px pull quote", "3-column" grid | SPECIFIC |
| D-05 | YES | YES | Per-zone px heights (700, 1800, 1200, 900, 2000, 1100), "80-120px breathing space" | SPECIFIC |
| D-06 | YES | YES | "80px top" Z1, "32px" Z2, "24px" Z5, "16px tight" items, padding-top arc: 80->64->48->48->32->48, boundary range 80-112px | SPECIFIC |
| D-07 | YES | YES | "rgba(232,48,37,0.05)" hover tint, tabular-nums, ::selection colors, "4px top border" first-child | SPECIFIC |
| D-08 | YES | PARTIAL | Describes skeleton shape but gives zero CSS property values. Should include specific bg colors, spacing values, or border widths for skeleton. | VAGUE on technique |

- **D-08 quality assessment:** The template example of GOOD includes "dark inversion block (background: var(--color-text)..." — i.e., CSS property + value. D-08 describes what the skeleton LOOKS like ("dark header bar, generous light opening...") but gives zero CSS. This is the PURPOSE-only pattern the template explicitly warns against.

### Template: "Tag each as [EXPERIMENTAL]"
- **Filled?** YES
- **Quality:** SPECIFIC
- All 8 dispositions tagged [EXPERIMENTAL].

### Template: "Include 1-2 content-specific observations per disposition"
- **Filled?** PARTIAL
- **Quality:** PARTIAL

| Disposition | Content-specific observations | Count | Quality |
|-------------|-------------------------------|-------|---------|
| D-01 | "Z1 is philosophical prose... Z2 is architectural reference... Z5 is procedural tutorial" | 3 | SPECIFIC |
| D-02 | "intake (airy, philosophical), factory floor (dense, structured)..." refinery room mapping | 6 | SPECIFIC |
| D-03 | "Yegge's voice, explicit gatekeeping, precise technical specs" + "If you have any doubt" energy | 2 | SPECIFIC |
| D-04 | "Nature prefers colonies" quote, Z6 comparison as layout rupture | 2 | SPECIFIC |
| D-05 | Per-zone heights, "sources list and comparison table resolve the journey" | 2 | SPECIFIC |
| D-06 | Per-zone spacing rationale ("factory floor is crowded", "principles like pressure gauges") | 5 | SPECIFIC |
| D-07 | Role cards hover, cost model tabular-nums, warm red vs cooler teal selection | 3 | SPECIFIC |
| D-08 | Skeleton shape description ("dark header bar, generous light opening...") | 1 | VAGUE — describes shape without CSS technique |

### Template: "~40 lines" for Tier 4
- **Filled?** PARTIAL
- **Quality:** PARTIAL
- Execution brief Tier 4 spans lines 134-158 = 25 lines of content (excluding blank lines and headers). Template budget is ~40 lines. The brief is at 62.5% of budget. The template itself notes "Gas Town's Tier 4 received only 25 lines vs the 40-line budget; the missing 15 lines were technique specifics." This means the execution brief reproduced the EXACT under-budgeting the template warned about.

**CRITICAL FINDING:** The template's own CRITICAL warning (line 118) says "Gas Town's Tier 4 received only 25 lines vs the 40-line budget; the missing 15 lines were technique specifics." The execution brief lands at exactly ~25 lines — the precise failure mode the template was written to prevent. This suggests the brief assembler did not heed the template's meta-instruction to expand technique density.

**Tier 4 Score: 5/8 = 62.5%**

---

## CONTENT MAP APPENDIX

### Template: "Append the full Content Map including: Zone architecture table, Content tensions, Metaphor seeds with recommendation, Density arc, Reader profile"

| Element | Present | Quality |
|---------|---------|---------|
| Zone architecture table | YES | SPECIFIC — 6 zones with Name, Density, Sections, Direction |
| Content tensions | YES | SPECIFIC — 4 tensions named |
| Metaphor seeds with recommendation | PARTIAL | Names "The Refinery" and maps 6 stages but does not show OTHER seeds that were considered and rejected |
| Density arc | YES | "WAVE -- two peaks (Z2, Z5) with valleys" |
| Reader profile | YES | SPECIFIC — "Advanced developer (Stage 7+)" with 5 metrics |

### Template: "Content Map Appendix is APPENDED verbatim from Phase 0 output"
- **Filled?** PARTIAL
- **Quality:** PARTIAL
- The appendix (lines 162-173) is a compressed summary (~12 lines) rather than a full verbatim Content Map. The template says "~30-50 lines" for this appendix; the execution brief provides ~12 lines. Missing elements: full metaphor seed alternatives, detailed per-section breakdowns.

**Content Map Appendix Score: 3/5 = 60%**

---

## ASSEMBLY RULES COMPLIANCE

| Rule | Template Text | Compliant? | Evidence |
|------|--------------|------------|---------|
| 1 | "~100-165 lines. Err toward more compositional detail" | YES | 174 lines — slightly over budget but errs toward detail as instructed |
| 2 | "PRESERVE RECIPE FORMAT: Build, Create, Derive, Map — NOT Verify, Fail if, Must be" | YES | Recipe verbs throughout: "Map," "Build," "Create," "Use," "Adopt." Zero pass/fail language. |
| 3 | "Tier 1 is VERBATIM" | YES | Verbatim match confirmed |
| 4 | "Tier 2 is VERBATIM" | YES | Verbatim match for all 5 provided thresholds |
| 5 | "Tier 3 is SYNTHESIZED from Content Map + reference artifacts" | YES | Original synthesis — boundary maps, metaphor extension, content-form coupling all show creative judgment |
| 6 | "Tier 4 is ADAPTED per content" | PARTIAL | All 8 adapted with content-specific observations, but D-08 lacks technique vocabulary and overall line count is 25 vs 40 budget |
| 7 | "Content Map Appendix is APPENDED verbatim from Phase 0" | NO | Compressed summary, not verbatim append. ~12 lines vs ~30-50 budget |
| 8 | "Do NOT include gate thresholds in pass/fail format" | YES | Zero pass/fail gates anywhere |
| 9 | "Do NOT include count-gates ('>=3 channels')" | YES | "at least 3 channels, averaging 4+" on line 49 — this IS a count-gate phrasing. However, it appears in a descriptive context rather than a pass/fail gate, so borderline. |
| 10 | "For COMPOSED mode: multi-coherence boundary descriptions are ESSENTIAL" | YES | 5 boundary descriptions, each with per-channel specifics |

**Assembly Rules Score: 8/10 = 80%**

---

## SPECIFIC CHECK RESULTS

### Are all 4 tiers present?
**YES.** Tier 1 (lines 7-27), Tier 2 (lines 31-41), Tier 3 (lines 45-131), Tier 4 (lines 134-158).

### Is the multi-coherence boundary map complete (all zone transitions)?
**YES.** All 5 boundaries described (Z1->Z2, Z2->Z3, Z3->Z4, Z4->Z5, Z5->Z6) with per-channel detail. Transition types mapped to specific boundaries.

### Are all 8 dispositions (D-01 through D-08) present?
**YES.** All 8 present with [EXPERIMENTAL] tags. D-01 through D-07 include technique vocabulary. D-08 is purpose-only.

### Is the CSS value table complete?
**YES.** Line 130 references tokens.css, lists key vocabulary categories, specifies 800-1200 CSS line budget, adds layout pattern requirement.

### Are component recommendations specific?
**YES.** 8 components listed by class name with zone assignments and modulation examples. Target set at 10+.

### Is the quality floor specified?
**NO.** The template does not explicitly include a "quality floor" section, and the execution brief does not define one. However, implicit quality floors exist via Tier 2 thresholds and the 800-1200 CSS line target.

### Is creative authority framed correctly (80%)?
**YES.** Line 115: "You have 80% creative authority within identity constraints." Matches template exactly.

---

## TOP FINDINGS

### 1. CRITICAL: Tier 4 Line Budget Violation (Ironic Self-Fulfilling Failure)
The template explicitly warns (line 118): "Gas Town's Tier 4 received only 25 lines vs the 40-line budget; the missing 15 lines were technique specifics." The execution brief reproduces this EXACT failure at ~25 lines. The template was written to prevent this; the assembler ignored the prevention instruction. D-08 is the clearest casualty — purpose-only, zero CSS values.

### 2. SIGNIFICANT: Content Map Appendix Under-Delivered
Template specifies "~30-50 lines" verbatim from Phase 0 output. Execution brief provides ~12 lines of compressed summary. Missing: metaphor seed alternatives (what was considered and rejected), detailed per-section breakdowns, full density arc with commentary.

### 3. MINOR: PT-06 Template Self-Contradiction
Template header says "PT-01 through PT-06" but only provides text for 5 thresholds. Either PT-06 exists in `artifact-identity-perception.md` and was missed in the template, or the template header is wrong. The execution brief cannot be faulted.

### 4. MINOR: Count-Gate Language in Tier 3
Line 49: "at least 3 channels, averaging 4+" — this is technically count-gate language that Assembly Rule 9 prohibits. The brief uses it descriptively rather than as a pass/fail gate, so impact is low, but a stricter reading would flag it.

### 5. POSITIVE: Tier 3 is Exceptional
The multi-coherence boundary map is the strongest section. Every boundary has specific RGB deltas, typography values, spacing values, border weights, and component shifts. Transition types are mapped to specific boundaries. This is exactly what "COMPOSED mode" requires.

---

## FINAL ASSESSMENT

| Tier | Score | Quality |
|------|-------|---------|
| Tier 1: Identity | 4/4 (100%) | Verbatim, perfect |
| Tier 2: Perception | 4/5 (80%) | 5/5 thresholds verbatim; PT-06 template issue |
| Tier 3: Compositional | 17/17 (100%) | Exceptional — every subsection filled with specific values |
| Tier 4: Disposition | 5/8 (62.5%) | All 8 present, 7/8 have technique vocabulary, 25/40 line budget |
| Content Map Appendix | 3/5 (60%) | Compressed, not verbatim |
| Assembly Rules | 8/10 (80%) | 2 violations (appendix verbatim, count-gate phrasing) |

**Overall: 41/49 requirements met = 83.7% compliance.**

The execution brief's strength is Tier 3 (compositional frameworks) — the multi-coherence boundary map, metaphor mapping, and content-form coupling are all at COMPOSED level with specific CSS values. The weakness is Tier 4 at 25 lines vs 40-line budget, which is the exact failure the template was designed to prevent. The Content Map Appendix was compressed rather than appended verbatim.
