# Causal Chain Traceability in the /build-page Pipeline

**Date:** 2026-02-20
**Scope:** 5 research findings traced through every pipeline stage
**Method:** Read each pipeline file, searched for each finding's presence, evaluated transformation fidelity

---

## Executive Summary

The /build-page pipeline has a **fragmented traceability landscape**. Some findings (perception thresholds, container width) have triple or quadruple redundancy -- they appear in research, enrichments, TC skill, conventions brief, builder constraints, programmatic gates, AND PA questions. Others (fractal self-similarity, metaphor structural survival) have single-point-of-verification or depend entirely on one agent's judgment with no programmatic backstop.

**The core asymmetry:** Identity constraints and perception physics have 4-6 independent verification layers. Compositional quality properties have 1-2 at most. This means the pipeline is excellent at preventing BROKEN pages but has limited ability to ensure COMPOSED ones.

---

## Methodology

For each of the 5 chains, I traced the finding through these 8 pipeline stages:

```
1. RESEARCH        → RESEARCH-SYNTHESIS.md or R1-R5 source
2. EXTRACTION      → mechanism-catalog.md, prohibitions.md, or enrichment
3. TC SKILL        → tension-composition/SKILL.md (Phases 0-4)
4. CONVENTIONS     → conventions-brief.md (builder's world-model)
5. BUILD-PAGE      → build-page/SKILL.md (orchestrator instructions)
6. BUILDER CSS     → What the builder agent actually produces
7. GATE RUNNER     → gate-runner.md (programmatic verification)
8. PA DETECTION    → perceptual-auditing/SKILL.md (human-perception audit)
```

Each link is rated: INTACT / WEAKENED / BROKEN / REDUNDANT / CONTRADICTORY.

---

## Chain 1: R3-023 (Fractal Self-Similarity) -- Research to CSS

### The Finding
R3-023 from R3-DENSITY-DIMENSIONS.md: "Fractal self-similarity -- the same dense/sparse rhythm repeating at multiple architectural scales." This became DD-F-006 (the fractal finding) and eventually the concept of "scales" in the mechanism catalog and "fractal echo" in the conventions brief.

### Trace

| Stage | Present? | Form | Rating |
|-------|----------|------|--------|
| 1. RESEARCH | YES | R3-023: named finding with structural description | INTACT |
| 2. EXTRACTION | WEAKENED | mechanism-catalog.md "What Are Scales?" section (lines 804-867). R3-023 is not cited by ID. The concept is present as "5 Named Scales" and "Fractal Coherence" but the finding number is lost. The link from R3-023 to DD-F-006 to "scales" is reconstructable only by reading the CLAUDE.md memory. | WEAKENED |
| 3. TC SKILL | WEAKENED | TC skill references "5-scale fractal coherence" in Universal Compositional Requirements (line 92) and the fractal echo table (Phase 4 output). But the TC agent is told to produce fractal coherence -- it is not told WHY (R3-023's research basis). The finding has been compressed into a binary rule. | WEAKENED |
| 4. CONVENTIONS | INTACT | conventions-brief.md Section 5 "FRACTAL ECHO" (lines 182-232). Detailed explanation with scale build order, parametric echo CSS recipe, character-scale register. This is the strongest expression of R3-023 in the pipeline -- richer than the research finding itself. | INTACT |
| 5. BUILD-PAGE | INTACT | build-page/SKILL.md requires DG-1 (Fractal Echo Table, 5 rows) as a blocking deliverable gate. Builder spawn prompt references "fractal echo table" explicitly. | INTACT |
| 6. BUILDER CSS | UNCERTAIN | Depends on builder reading conventions brief Section 5 and producing the fractal echo table. The builder is told to produce the table BEFORE building CSS. If they do, fractal echo drives CSS. If they skip it, fractal coherence is accidental. | UNCERTAIN |
| 7. GATE RUNNER | WEAKENED | DG-1 validates the fractal echo TABLE exists with 5 rows and CSS evidence. But it validates the DOCUMENT, not the CSS output. A builder could write a fractal echo table that says "Page scale: bg #FEF9F5" but then produce CSS with no bg variation. DG-1 checks the plan, not the execution. SC-13 (multi-coherence) partially catches execution -- if channels shift at boundaries, some fractal echo is happening -- but SC-13 cannot verify that the SAME pattern repeats at multiple scales. | WEAKENED |
| 8. PA DETECTION | INTACT | PA-63 (Fractal Zoom Coherence, Auditor E): "Squint at 50%, 100%, and 200% zoom. Does the same organizing principle appear at each zoom level?" This directly tests R3-023's core claim. Also PA-60 (Design Moment Density) indirectly catches scale coverage. | INTACT |

### Chain Verdict: WEAKENED AT EXTRACTION, PARTIALLY RECOVERED

The finding survives from research to PA, but the causal link is broken at extraction (R3-023 ID lost) and weakened at gate verification (DG-1 checks document not CSS, SC-13 checks channels not scales). PA-63 is the primary safety net. Without PA-63, a builder could claim fractal coherence in their build log while producing flat CSS, and gates would not catch it.

**Redundancy:** 2 independent checks (DG-1 plan + PA-63 perception). DG-1 is weak (document-only). Effective redundancy: 1.5.

---

## Chain 2: Container Width 940-960px -- Research to CSS

### The Finding
Not a research finding per se -- this emerged from Phase D validation (2026-02-15) where 4/5 pages violated the 940-960px container. It was elevated to THE #1 failure mode and encoded as a non-negotiable constraint.

### Trace

| Stage | Present? | Form | Rating |
|-------|----------|------|--------|
| 1. RESEARCH | N/A | Not in R1-R5. Emerged from Phase D experiments. | N/A |
| 2. EXTRACTION | INTACT | prohibitions.md does not list container width as a prohibition (it is not an identity refusal). However, tokens.css contains the max-width value. The constraint lives in CLAUDE.md memory and conventions brief, not in the extraction layer per se. | WEAKENED |
| 3. TC SKILL | INTACT | TC skill line 93: "Container width 940-960px is NON-NEGOTIABLE: Metaphor NEVER overrides this. Express narrowing through INTERNAL padding only." Also lines 908-952 with concrete CSS showing how to achieve narrowing metaphors within 960px. | INTACT |
| 4. CONVENTIONS | INTACT | conventions-brief.md Section 1: "The page container is 940-960px wide, centered. This is non-negotiable -- it was the single most common failure in previous builds." Also restated in Section 9B quality floor and the final non-negotiables (Section 11, item 1). | REDUNDANT |
| 5. BUILD-PAGE | INTACT | build-page/SKILL.md Section 0: "Three non-negotiables: container 940-960px..." and Section 11 item 1: "Container: 940-960px. Every page. No exceptions." | REDUNDANT |
| 6. BUILDER CSS | HIGH CONFIDENCE | Builder receives this constraint from at least 3 independent sources (TC brief, conventions brief, build-page instructions). Binary rule with specific CSS value makes compliance near-certain. | INTACT |
| 7. GATE RUNNER | INTACT | SC-01 (Container Width): "940px <= max-width <= 960px". Programmatic blocking gate with JS that checks `getComputedStyle(container).maxWidth`. Fix recipe provides exact CSS. Tier A composition-critical. | INTACT |
| 8. PA DETECTION | INTACT | PA-53: "At the widest viewport (1440px), does the content container use 65-80% of the available horizontal space?" This catches width violations perceptually. Also visible in any full-page screenshot. | REDUNDANT |

### Chain Verdict: MAXIMUM REDUNDANCY (4+ independent checks)

Container width has the highest redundancy in the entire pipeline:
1. TC skill states it as non-negotiable
2. Conventions brief states it twice (Section 1 + Section 11)
3. Build-page skill states it twice (Section 0 + Section 11)
4. SC-01 gate programmatically blocks if violated
5. PA-53 catches it perceptually

This is a finding where the pipeline learned from failure (Phase D) and over-corrected -- which is exactly right for THE #1 failure mode. The only gap: prohibitions.md does not list it as a formal prohibition (it is an identity-adjacent constraint, not an identity refusal). This is a classification gap, not a functional one.

**Redundancy:** 5 independent checks. Effective redundancy: 5. This is the pipeline's gold standard.

---

## Chain 3: S-09 Stacking Loophole -- Research to CSS

### The Finding
Discovered during Flagship experiment (2026-02-17): individual spacing values pass per-property checks (each <= 96px per S-09) but STACKED values at section boundaries create 210-276px voids. The problem was not individual spacing but the SUM of section-bottom padding + divider margins + next-section-top padding.

### Trace

| Stage | Present? | Form | Rating |
|-------|----------|------|--------|
| 1. RESEARCH | N/A | Not in R1-R5. Discovered during Flagship experiment failure analysis. | N/A |
| 2. EXTRACTION | INTACT | mechanism-catalog.md Transition Grammar section (lines 1023-1025): "No transition may exceed var(--space-max-zone) (96px) in total vertical space consumed." Also Restraint Protocol. But note: 96px is the per-value cap; 120px is the stacked cap. These are different numbers at different levels. | WEAKENED |
| 3. TC SKILL | INTACT | TC skill lines 876-884: Detailed S-09 STACKING CHECK with specific arithmetic. "MANDATORY at every section boundary." Includes PASS and FAIL examples with exact pixel sums. "Measure TOTAL gap, not per-property." | INTACT |
| 4. CONVENTIONS | INTACT | conventions-brief.md Section 2 (Perception): "Stacked gaps above 120px create voids -- dead stretches where the reader loses the page's thread. Individual spacing maxes at 96px, but section-bottom padding + divider margins + section-top padding can accumulate beyond 120px. Measure the total, not the parts." | INTACT |
| 5. BUILD-PAGE | INTACT | build-page/SKILL.md gate table: "SC-10: Stacked gap <= 120px total at section boundaries. Sum margin+padding+border at boundaries." And Section 11 item 3: "No stacked gaps above 120px." | INTACT |
| 6. BUILDER CSS | MODERATE CONFIDENCE | Builder is warned about stacking in multiple sources. But the arithmetic is complex (summing 4-6 different margin/padding values). Builders may still produce stacked gaps unintentionally, especially during fix cycles when adding padding to one side without checking the sum. | WEAKENED |
| 7. GATE RUNNER | INTACT | SC-10 (Stacked Gap): Programmatic blocking gate. JS measures `rect2.top - rect1.bottom` between zone last-child and next-zone first-child. If gap > 120px, FAIL. Fix recipe provides specific CSS. Provenance explicitly cites "S-09 stacking loophole." | INTACT |
| 8. PA DETECTION | INTACT | PA-50: "Count full viewport-height scroll positions where less than 30% of the screen contains actual content." PA-51: "What percentage of total page scroll height contains meaningful content versus empty/near-empty space?" PA-52: visual weight distribution. All catch void patterns. | REDUNDANT |

### Chain Verdict: STRONG WITH ONE WEAK LINK (builder arithmetic)

The stacking loophole is well-covered:
1. TC skill provides mandatory stacking check with arithmetic examples
2. Conventions brief explains the physics
3. SC-10 gate catches it programmatically
4. PA-50/51/52 catch it perceptually

The one weakness: the builder must do arithmetic to prevent stacking BEFORE the gate catches it. If the builder adds 64px padding-bottom and 64px padding-top at a boundary (each individually legal), the sum is 128px (illegal). The micro-gate MG-2 runs during build and should catch this early, but only if zone backgrounds are already set. If backgrounds are not yet applied, SC-10 may not fire correctly because zone selectors may not resolve.

**Redundancy:** 4 independent checks (TC rule + SC-10 gate + PA-50/51/52 + conventions brief). Effective redundancy: 3.5.

**Contradiction found:** mechanism-catalog says "No transition may exceed 96px" but conventions brief and gates say "120px." The 96px is per-value max; 120px is stacked total. This distinction is stated in conventions brief but the mechanism catalog's 96px reference could confuse a builder reading only the catalog.

---

## Chain 4: Perception Thresholds (>=15 RGB) -- Research to CSS

### The Finding
Discovered during Flagship experiment (2026-02-17): backgrounds differing by 1-8 RGB points were imperceptible. Codified as the >=15 RGB minimum delta between adjacent zone backgrounds. Extended to other channels: font-size >=2px, letter-spacing >=0.03em, padding >=24px.

### Trace

| Stage | Present? | Form | Rating |
|-------|----------|------|--------|
| 1. RESEARCH | N/A | Not in R1-R5. Discovered from Flagship failure (backgrounds differed by 1-8 RGB). | N/A |
| 2. EXTRACTION | PARTIAL | mechanism-catalog.md Zone Background Differentiation (mechanism #7, lines 357-399): provides 4-color token system but does NOT state the 15 RGB threshold explicitly. The delta is implicit in the chosen token values (which are >=15 apart). | WEAKENED |
| 3. TC SKILL | INTACT | TC skill lines 864-884: "PERCEPTION THRESHOLDS (cross-reference: R-MC-03)" with full table: Background >=15 RGB, Font-size >=2px, Letter-spacing >=0.03em, Stacked gap <=120px. Also lines 1377-1386: "R-MC-03: Perceptual Thresholds for Channel Counting" with warm palette note: ">=20 RGB" for warm-palette systems. | INTACT |
| 4. CONVENTIONS | INTACT | conventions-brief.md Section 2 (Perception): Full perception physics table with thresholds per channel. Section 4 (Multi-Coherence): "Perception thresholds by channel" table. Concrete 4-zone example with RGB delta calculations. | REDUNDANT |
| 5. BUILD-PAGE | INTACT | build-page/SKILL.md Section 0: "every CSS value perceptible to a human eye." Builder checkpoint 2: "All adjacent zone bg deltas >= 15 RGB?" Section 11 item 3: ">= 15 RGB background delta." | REDUNDANT |
| 6. BUILDER CSS | HIGH CONFIDENCE | Builder receives threshold in TC skill, conventions brief (twice), build-page instructions. Builder checkpoint 2 forces mid-build verification. Self-check during Phase C of build. | INTACT |
| 7. GATE RUNNER | INTACT | SC-09 (Background Delta): >=15 RGB at EVERY adjacent zone boundary. SC-14 (Sub-Perceptual Prevention): No intra-zone bg deltas between 1-14 RGB, no letter-spacing <0.025em. Both are Tier A blocking gates. SC-09 provenance: "THE primary Flagship failure." SC-14 provenance: "22% of CSS budget on imperceptible micro-typography." | REDUNDANT |
| 8. PA DETECTION | INTACT | PA-55: "Can you describe how adjacent sections DIFFER visually without inspecting code?" PA-56: "Can you FEEL the tracking difference between sections?" Both directly test perceptibility. | REDUNDANT |

### Chain Verdict: HIGHEST-FIDELITY CHAIN IN THE PIPELINE

Perception thresholds have the strongest causal chain of any finding:
1. TC skill provides R-MC-03 with exact numbers and warm-palette adjustment
2. Conventions brief explains the physics AND provides concrete example with calculations
3. Build-page skill reinforces in 3 locations
4. Builder has mid-build checkpoint (Phase C, checkpoint 2)
5. SC-09 and SC-14 gates catch it programmatically (2 separate gates!)
6. PA-55 and PA-56 catch it perceptually

**Redundancy:** 6+ independent checks across 4 pipeline stages. Effective redundancy: 6.

**Why this chain works:** Perception thresholds are NUMBERS. They translate directly from finding to CSS to gate. There is no semantic interpretation required -- >=15 RGB is >=15 RGB at every stage. This is the advantage of physics-based constraints: they survive compression without transformation.

**The one weakness:** The mechanism-catalog (the builder's reference for CSS patterns) does NOT state the 15 RGB threshold. Zone background differentiation (mechanism #7) shows 4 color values but does not say "these must differ by >=15 RGB." A builder reading only the mechanism catalog would not know the threshold. This is compensated by the conventions brief, but it is a gap in the extraction layer.

---

## Chain 5: Metaphor Structural Survival -- Research to CSS

### The Finding
Discovered during Ceiling experiment (2026-02-16): the metaphor was only visible with labels (40% structural survival). Codified as the requirement that metaphor must be STRUCTURAL (CSS-embodied), not ANNOUNCED (label-only). The PA-44 question and BG-2 gate test this.

### Trace

| Stage | Present? | Form | Rating |
|-------|----------|------|--------|
| 1. RESEARCH | N/A | Not in R1-R5. Emerged from Ceiling experiment PA audit. | N/A |
| 2. EXTRACTION | ABSENT | Neither mechanism-catalog.md nor prohibitions.md addresses metaphor structural survival. Mechanism catalog explicitly REJECTS "Fractal Self-Similar Labels" as a non-mechanism (lines 782-785) but this rejection is about class names, not about the metaphor-structural distinction. | BROKEN |
| 3. TC SKILL | INTACT | TC skill Phase 3.5 rubric (lines 620-668): Full scoring rubric for Structural Survival (dimension 3 of 5). Score 0: "Remove all labels: metaphor undetectable." Score 3: "Remove labels: metaphor is fully embodied in visual structure alone." Risk flag R2: "Does the metaphor require visible text labels to communicate?" Also lines 561: "The best layouts have IMPLICIT metaphors (graduated backgrounds, spatial hierarchy) not EXPLICIT ones (labeled connectors, announced transitions)." | INTACT |
| 4. CONVENTIONS | INTACT | conventions-brief.md Section 6 (Unified Metaphor): "Not a label announced in comments. Not a theme named but unexpressed. A metaphor whose organizing influence a reader perceives through CSS treatment alone." Test: "Remove all text labels. Can a reader still feel the metaphor's organizing principle from CSS treatment alone?" W-OVERLABEL warning: "Use structural gradients... NOT text labels." | INTACT |
| 5. BUILD-PAGE | WEAKENED | build-page/SKILL.md mentions BG-2 (Metaphor Structural) as a behavioral gate and references PA-44/PA-68 in the TC re-invocation trigger (Section 7.4). But the builder spawn prompt does NOT explicitly tell the builder to ensure structural survival. The builder is told to "Read TC brief" and "Read conventions brief" -- survival is indirect via those documents. | WEAKENED |
| 6. BUILDER CSS | LOW CONFIDENCE | Whether the metaphor is structural or announced depends entirely on the BUILDER'S compositional skill. No CSS rule can enforce this -- it is a holistic quality of the design. The builder might produce CSS that happens to embody the metaphor, or might produce CSS with labels announcing it. | UNCERTAIN |
| 7. GATE RUNNER | BROKEN | BG-2 (Metaphor Structural) is a Tier C behavioral gate -- it requires a "Fresh-eyes Opus agent" to read the build plan and judge STRUCTURAL vs ANNOUNCED. This is NOT a programmatic gate. It runs as an agent attestation, meaning it depends on subjective judgment. No JavaScript check can verify metaphor structural survival. SC-13 (multi-coherence) catches WHETHER channels shift but cannot judge WHETHER those shifts embody a metaphor. | BROKEN |
| 8. PA DETECTION | INTACT | PA-44: "If you removed all labels, headings, and text annotations, could you still sense the metaphor or organizing concept from the visual structure alone? Does the metaphor persist across the ENTIRE page, or does it fade or disappear in some sections?" PA-68: "Does the page's organizing metaphor manifest visually in 80%+ of sections?" Both directly test structural survival. The weaver diagnosis protocol (lines 741-768) provides root cause analysis when PA-44 or PA-68 fail. | INTACT |

### Chain Verdict: DEPENDENT ON PA -- NO PROGRAMMATIC SAFETY NET

This is the most fragile chain in the pipeline:
1. TC skill has excellent rubric for scoring structural survival during metaphor selection
2. Conventions brief clearly states the requirement
3. But: no programmatic gate can verify it (BG-2 is behavioral/subjective)
4. The ONLY reliable verification is PA-44 and PA-68

If PA is skipped or auditors miss the distinction (possible with less experienced auditors), a page with an announced metaphor passes all programmatic gates. The pipeline has no backstop between the TC skill's rubric and the PA auditor's eyes.

**Redundancy:** 1 effective check (PA-44/PA-68). BG-2 is nominally a second check but is behavioral, not programmatic. Effective redundancy: 1.5.

**Comparison with Chain 2 (container width):** Container width has 5 independent checks including a programmatic gate. Metaphor structural survival has 1.5 checks, none programmatic. Yet metaphor quality is arguably MORE important for PA-05 scores than container width. The pipeline invests maximum verification in what is mechanically measurable and minimum verification in what matters most for compositional quality.

---

## Redundancy Landscape Map

### TRIPLE+ REDUNDANCY (3+ independent verification layers)

| Finding | TC Skill | Conventions Brief | Gates | PA | Total |
|---------|----------|-------------------|-------|-----|-------|
| Container width 940-960px | 1 | 2 | SC-01 | PA-53 | **5** |
| Perception thresholds >=15 RGB | R-MC-03 | Section 2 + 4 | SC-09 + SC-14 | PA-55/56 | **6** |
| Stacked gap <=120px | S-09 check | Section 2 | SC-10 | PA-50/51/52 | **4** |
| Soul constraints (radius, shadow) | Side B constraints | Section 1 | SC-02 | PA auditors | **4** |
| Font trinity | Side B constraints | Section 1 | SC-03 | PA auditors | **4** |
| Warm palette R>=G>=B | -- | Section 1 | SC-04 | PA auditors | **3** |
| No pure black/white | -- | Section 1 | SC-05 | PA auditors | **3** |

### DOUBLE REDUNDANCY (2 independent layers)

| Finding | Verification 1 | Verification 2 | Gap |
|---------|----------------|-----------------|-----|
| Fractal self-similarity | DG-1 (table exists) | PA-63 (zoom coherence) | DG-1 checks document, not CSS |
| Multi-coherence >=3 channels | SC-13 (channel count) | PA-61 (multi-voice) | SC-13 cannot judge DIRECTION |
| Typography hierarchy | SC-11 (font-size zones) | PA-06/07/08 | SC-11 is quantitative, PA is qualitative |
| Border presence | SC-15 (3+ configs) | PA auditors | SC-15 counts configs, not placement quality |
| Component variety | SC-08 (>=8 types) | PA auditors | SC-08 counts types, not appropriateness |

### SINGLE REDUNDANCY (1 effective layer)

| Finding | Only Verification | Why Single | Risk |
|---------|-------------------|------------|------|
| Metaphor structural survival | PA-44 + PA-68 | BG-2 is behavioral, not programmatic | HIGH -- metaphor quality is core to PA-05 |
| Metaphor interpretive distance | TC Phase 3.5 rubric | No gate, no PA question for distance | MEDIUM -- low distance = literal/boring |
| Transition grammar quality | Conventions brief Section 7 | No gate for SMOOTH/BRIDGE/BREATHING type | MEDIUM -- transitions default to void |
| Coherence direction consistency | SC-13B ADVISORY | Advisory only, does not block | HIGH -- contradictory channels pass SC-13 |
| Restraint (mechanism rejection) | Build log documentation | No gate verifies restraint ratio | LOW -- over-deployment caught by PA |
| Content-form coupling | Conventions brief Section 9B | No gate for section-specific treatment | HIGH -- identical treatment = flat |

### ZERO REDUNDANCY (no verification)

| Finding | Where It Exists | Why Zero | Risk |
|---------|-----------------|----------|------|
| Parametric echo (zone-adapted component padding) | Conventions brief Section 5 | No gate, no PA question, builder-only | MEDIUM |
| Monotonic progression | SC-16 ADVISORY | Advisory only, not all compositions are monotonic | LOW |
| Mid-build reflection quality | Conventions brief Section 10 | Builder self-check, no verification | MEDIUM |
| Conviction statement quality | Build-page process | DG-4 checks structure, not quality | LOW |
| Recipe vs checklist (builder framing) | Memory finding | Encoded in prompt structure, not verifiable | HIGH -- the most important process finding |

---

## Cross-Cutting Findings

### Finding 1: The Quantitative-Qualitative Cliff

The pipeline has near-perfect traceability for QUANTITATIVE findings (numbers that translate to CSS values) and near-zero traceability for QUALITATIVE findings (compositional properties that require judgment).

```
QUANTITATIVE (high traceability):
  Research finding → Number → CSS threshold → Gate check → PA confirms
  Example: ">=15 RGB" → SC-09 → PA-55

QUALITATIVE (low traceability):
  Research finding → Principle → Brief description → Builder judgment → PA hopes to catch
  Example: "Metaphor structural" → TC rubric → Brief Section 6 → ??? → PA-44
```

This cliff exists because programmatic gates can only check what JavaScript can measure. Multi-coherence channel COUNT is measurable; multi-coherence DIRECTION is not (SC-13B is advisory). Fractal echo TABLE existence is measurable; fractal echo CSS QUALITY is not. The pipeline compensates with PA, but PA is the most expensive and least deterministic verification layer.

### Finding 2: The Extraction Gap

The mechanism-catalog.md (Layer 3 of the compositional core) is the primary builder reference for CSS patterns. But several critical findings are ABSENT from the catalog:

- **Perception thresholds** -- present in TC skill and conventions brief, absent from mechanism catalog
- **Container width** -- present everywhere else, absent from mechanism catalog
- **Transition grammar types** -- present in mechanism catalog (added as enrichment) but without the SMOOTH/BRIDGE/BREATHING vocabulary from conventions brief
- **S-09 stacking arithmetic** -- present in TC skill, absent from mechanism catalog

A builder who reads mechanism-catalog.md as their primary CSS reference gets mechanism PATTERNS but not mechanism CONSTRAINTS. The constraints live in conventions-brief.md, which the builder also reads, but the separation means the pattern reference and the constraint reference are in different files. A builder looking up "zone backgrounds" in the catalog sees the 4-color system but not the 15 RGB threshold.

### Finding 3: TC-to-Builder Compression

The TC skill produces a 80-120 line brief. The conventions brief is ~580 lines. Combined, the builder receives ~700 lines of guidance. But the RESEARCH basis for these rules spans thousands of lines across R1-R5, 337 findings, 18 exploration files, and 50+ analysis reports.

The compression ratio is roughly 100:1 from total research to builder-visible content. This is by design (the builder should not read 70,000 lines), but it means the builder has no way to understand WHY a rule exists. When a rule conflicts with their compositional judgment, they have no basis for deciding whether to override. The conventions brief's creative authority section (Section 9) tells builders they can override non-soul values, but does not tell them WHICH non-soul values are backed by hard evidence and which are heuristic.

### Finding 4: The Gate-PA Handoff Is One-Way

Gates filter; PA judges. Gate results are passed to the weaver as context, but PA findings are NEVER fed back to gates. This means:

- If PA-44 finds the metaphor is announced (not structural), no gate re-runs
- If PA-55 finds zones are imperceptible despite SC-09 passing, no gate adjusts
- If PA-61 finds multi-coherence directions contradict despite SC-13 passing, no recalibration

The one-way handoff is architecturally clean but creates a closed loop: gates will keep passing pages that PA keeps failing, because gates never learn from PA findings. Calibration happens only through human intervention (adjusting gate thresholds in gate-runner.md based on PA results).

### Finding 5: The "Recipe vs Checklist" Finding Has No Pipeline Encoding

The single most important process finding from the pipeline analysis -- "Recipe beats checklist. Builders receiving sequenced steps with CSS values (RECIPE) produce DESIGNED output. Builders receiving constraint lists with thresholds (CHECKLIST) produce FLAT output." -- exists only as a MEMORY.md finding and as an architectural principle encoded in the conventions-brief structure.

The conventions brief IS a recipe (world-model description with concrete CSS, not a constraint checklist). The build-page skill IS recipe-shaped (sequenced phases, not parallel requirements). But no verification layer checks whether the TC brief or fix instructions are recipe-shaped or checklist-shaped. If a TC agent produces a checklist-style brief ("ensure >= 15 RGB, ensure >= 3 channels, ensure..."), no gate catches it. The finding is encoded in prompt design but not in verification.

---

## Recommendations

### 1. Add perception thresholds to mechanism-catalog.md

Each mechanism that involves zone boundaries should include its perception threshold. Mechanism #7 (Zone Background Differentiation) should state ">=15 RGB delta between adjacent zones." This closes the extraction gap for the builder's primary CSS reference.

### 2. Promote SC-13B from ADVISORY to BLOCKING

Direction coherence is currently advisory. A page where background darkens but spacing increases (contradictory) passes SC-13 but fails compositional quality. Making SC-13B blocking would catch the highest-risk qualitative failure that currently depends entirely on PA-61.

### 3. Add a gate for content-form coupling

Currently no gate checks whether different sections receive different visual treatment. A gate could measure CSS property variance across zones: if all zones have identical font-size, identical padding, identical border-left, the page is FLAT regardless of how many mechanisms are deployed. This would catch the "metronomic" failure mode.

### 4. Create a PA-to-gate feedback loop

After each /build-page run, compare PA scores with gate results. If PA-55 fails (imperceptible zones) but SC-09 passes (>=15 RGB), flag the threshold for review. Over time, this would calibrate gates to match human perception rather than theoretical minimums.

### 5. Encode "recipe vs checklist" as a structural gate on TC output

DG-4 validates the build log's plan sections. Extend it to validate the TC brief's STRUCTURE: does it contain sequenced deployment steps (recipe) or parallel requirements (checklist)? This is crude but catches the most common TC failure mode.

---

## Summary Table: All 5 Chains

| Chain | Finding | Weakest Link | Effective Redundancy | Risk |
|-------|---------|--------------|---------------------|------|
| 1 | R3-023 Fractal Self-Similarity | Gate (DG-1 checks document not CSS) | 1.5 | MEDIUM |
| 2 | Container Width 940-960px | None (gold standard) | 5.0 | VERY LOW |
| 3 | S-09 Stacking Loophole | Builder arithmetic during build | 3.5 | LOW |
| 4 | Perception Thresholds >=15 RGB | Mechanism catalog omission | 6.0 | VERY LOW |
| 5 | Metaphor Structural Survival | No programmatic gate possible | 1.5 | HIGH |

**The pipeline's traceability is BIMODAL:** quantitative findings have world-class redundancy (4-6 layers); qualitative findings depend almost entirely on PA (1-1.5 layers). The most important compositional properties (metaphor quality, content-form coupling, coherence direction, recipe-shaped guidance) are the least verifiable. This is not a fixable architecture flaw -- it reflects the fundamental difficulty of programmatically measuring compositional quality. But the gap between 6-layer and 1.5-layer redundancy is wider than it needs to be. Promoting SC-13B and adding a content-form coupling gate would narrow it to 4-layer vs 2.5-layer, which is more proportionate.

---

**END CAUSAL CHAIN TRACEABILITY REPORT**
