# 29 -- Pipeline Transmission Audit: Which Flagship Qualities Survive the Pipeline

**Agent:** pipeline-transmission-auditor (Opus)
**Date:** 2026-02-22
**Task:** #56
**Method:** For every quality that contributes to Flagship 4/4, trace whether the pipeline TEACHES it, INSTRUCTS it, VERIFIES it, and DETECTS it across 5 layers.

---

## Pipeline Architecture (5 Layers)

| Layer | File | Role |
|-------|------|------|
| 1. **Conventions Brief** | `design-system/pipeline/conventions-brief.md` (~610 lines) | World model -- teaches the builder what this world IS |
| 2. **TC Brief** | Output of `tension-composition/SKILL.md` Phase 4.5 (~80-120 lines) | Content-specific composition plan |
| 3. **Builder Instructions** | `build-page/SKILL.md` (~579 lines) | What the builder agent is told to DO |
| 4. **Gate Runner** | `design-system/pipeline/gate-runner.md` (~1,340 lines, 25 gates) | Programmatic verification |
| 5. **PA Audit** | `perceptual-auditing/SKILL.md` (65 questions) | Perceptual verification |

**Transmission levels:**
- **FULL:** Quality is TAUGHT + INSTRUCTED + VERIFIED + DETECTED (4-5 layers)
- **PARTIAL:** Quality present in 2-3 layers
- **UNSUPPORTED:** Quality present in 0-1 layers (pipeline BLIND SPOT)

---

## PART 1: THE TRANSMISSION MATRIX

### Sources for Flagship qualities:
- **D-01 through D-14:** 14 dimensions from `01-DEFINITION.md`
- **S-01 through S-14:** 14 anti-conditions from `05-ANTI-CONDITIONS.md`
- **Q-01 through Q-10:** 10 first-principles qualities from `26-perceptual-gap-from-first-principles.md`
- **8 Core Concepts:** From conventions brief (multi-coherence, fractal echo, unified metaphor, transition grammar, spatial confidence, restraint, perception thresholds, content-form coupling)

I have identified **32 distinct Flagship qualities** after de-duplicating across sources. Some map 1:1 across documents; others are unique to one source.

---

### TRANSMISSION MATRIX

| # | Quality | Brief? | TC Brief? | Builder? | Gate? | PA? | Status |
|---|---------|--------|-----------|----------|-------|-----|--------|
| 1 | **Multi-coherence (>=3 channels/boundary)** | YES (Section 4, 40 lines) | YES (Section 6 boundary CSS table) | YES (checkpoint 2 in Phase C) | YES (SC-13, SC-13B) | YES (PA-61, PA-62, PA-69) | **FULL** |
| 2 | **Perception thresholds (>=15 RGB, >=2px, etc.)** | YES (Section 2, 40 lines) | YES (PERCEPTION CHECK lines in Section 6) | YES (checkpoint 2) | YES (SC-09, SC-14) | YES (PA-55, PA-56) | **FULL** |
| 3 | **Container width (940-960px)** | YES (Section 1) | NO (not TC's concern) | YES (non-negotiable #1) | YES (SC-01) | YES (PA-53) | **FULL** |
| 4 | **Soul constraints (border-radius:0, box-shadow:none, etc.)** | YES (Section 1) | NO | YES (non-negotiable) | YES (SC-02, SC-03, SC-04, SC-05) | YES (PA-25) | **FULL** |
| 5 | **Warm palette (R>=G>=B)** | YES (Section 1) | NO | YES (non-negotiable #2) | YES (SC-04) | YES (PA-18) | **FULL** |
| 6 | **Zone count (3-5)** | YES (Section 5) | YES (Section 2 zone architecture) | YES (checkpoint 2) | YES (SC-12) | YES (PA-55) | **FULL** |
| 7 | **Background delta (>=15 RGB)** | YES (Section 2) | YES (PERCEPTION CHECK per zone) | YES (checkpoint 2) | YES (SC-09, SC-14) | YES (PA-55) | **FULL** |
| 8 | **Stacked gap prevention (<=120px)** | YES (Section 2) | NO (not typical in TC brief) | NO (not explicit) | YES (SC-10) | YES (PA-50, PA-51) | **PARTIAL** |
| 9 | **Skip link + ARIA landmarks** | YES (Section 13) | NO | YES (checkpoint 1) | YES (SC-06, SC-07, DG-3) | NO (not perceptual) | **PARTIAL** |
| 10 | **Typography hierarchy (display-body delta >=10px)** | YES (Section 5, Section 8) | YES (Section 5 per-scale CSS) | YES (checkpoint 3) | YES (SC-11) | YES (PA-29, PA-06) | **FULL** |
| 11 | **Font trinity (Instrument Serif, Inter, JetBrains Mono)** | YES (Section 1) | NO | YES (reference file 6) | YES (SC-03) | NO (not perceptual) | **PARTIAL** |
| 12 | **Component variety (>=8 types)** | YES (Section 8) | YES (Section 4 selected mechanisms) | YES (checkpoint 1: >=8 component classes) | YES (SC-08) | YES (PA-37, PA-38) | **FULL** |
| 13 | **Border configurations (>=3 distinct)** | YES (Section 8: 3-tier budget) | YES (Section 4 mechanisms include borders) | YES (checkpoint 2) | YES (SC-15) | YES (PA-10) | **FULL** |
| 14 | **Fractal echo (5 scales)** | YES (Section 5, 30 lines) | YES (Section 5 per-scale CSS directions) | YES (fractal echo table in build log) | YES (DG-1) | YES (PA-63) | **FULL** |
| 15 | **Unified/pervading metaphor** | YES (Section 6, 20 lines) | YES (Section 1 structural metaphor) | YES (Phase A: internalize metaphor) | YES (BG-2 behavioral) | YES (PA-44, PA-68) | **FULL** |
| 16 | **Transition grammar (SMOOTH/BRIDGE/BREATHING)** | YES (Section 7, 25 lines) | YES (Section 2 zone sequence with transitions) | NO (not explicitly instructed) | NO (no gate checks transition types) | YES (PA-34, PA-62) | **PARTIAL** |
| 17 | **Coherence arc (opening-building-climax-resolution)** | YES (Section 4.1 coherence arc planning) | YES (Section 2 zone sequence) | NO (not explicitly instructed) | YES (SC-16 advisory only) | YES (PA-35, PA-62) | **PARTIAL** |
| 18 | **Parametric echo (components adapt to zone)** | YES (Section 5, 8 lines + CSS recipe) | YES (Section 5 component-scale CSS) | NO (not explicitly instructed) | YES (SC-17) | YES (PA-63) | **PARTIAL** |
| 19 | **Mechanism count (>=14, 2/category)** | YES (Section 9B quality floor) | YES (Section 4: >=14 mechanisms) | NO (not in builder checkpoints) | YES (DG-4 sub-check 3) | NO (not directly asked) | **PARTIAL** |
| 20 | **Restraint (deliberate absences documented)** | YES (Section 3, Section 9) | YES (Section 4 REJECTED list) | YES (build log: 3+ absent mechanisms) | NO (no gate checks restraint) | YES (PA-64) | **PARTIAL** |
| 21 | **Content-form coupling** | YES (Section 9B implied) | YES (Sections 2+3: tensions drive zones) | YES (CONTENT-FORM COUPLING paragraph) | NO (no gate) | YES (PA-70) | **PARTIAL** |
| 22 | **Conviction statement (compositional intent)** | YES (Section: CONVICTION CARD) | NO (TC brief is the conviction) | YES (Phase B: write conviction) | YES (DG-4) | NO | **PARTIAL** |
| 23 | **Midpoint reflection** | YES (Section 10) | NO | YES (Phase C checkpoint: midpoint) | YES (MG-5 midpoint micro-gate) | NO | **PARTIAL** |
| 24 | **CSS lines (>=800, zero sub-perceptual waste)** | YES (Section 9B: >=800 CSS lines) | NO | NO (not in builder checkpoints) | NO (no gate counts CSS lines) | NO | **UNSUPPORTED** |
| 25 | **Axis pattern variety (>=3 of 5 patterns)** | YES (Section 8: 5 layout topologies) | YES (Section 2: layout topology per zone) | NO (not instructed) | YES (DG-4 sub-check 5: >=2 grid layouts) | YES (PA-14, PA-15) | **PARTIAL** |
| 26 | **Designed moments (>=90% viewport coverage)** | NO (not in brief) | NO | NO | NO (no gate) | YES (PA-45, PA-60) | **UNSUPPORTED** |
| 27 | **Atmospheric conviction (content-specific mood)** | NO (brief describes default atmosphere) | YES (Section 1: metaphor + Section 5: CSS directions) | NO (not instructed) | NO (no gate) | YES (PA-01, PA-03, PA-20, PA-65) | **UNSUPPORTED** |
| 28 | **Typographic range (body text varies by zone)** | YES (Section 4.1 typographic progression) | YES (Section 5: character-scale CSS) | NO (not in checkpoints) | YES (SC-11 partial) | YES (PA-56, PA-70) | **PARTIAL** |
| 29 | **Spatial confidence (bold visible decisions)** | YES (Section 3: spatial confidence defined) | YES (Section 6: specific CSS values) | NO (not explicitly instructed) | NO (no gate measures "boldness") | YES (PA-10, PA-11, PA-30, PA-31) | **PARTIAL** |
| 30 | **Grand spatial pause (dramatic breathing moment)** | NO (brief caps gaps at 120px) | NO | NO | NO (SC-10 PENALIZES large gaps) | YES (PA-33, PA-66) | **UNSUPPORTED** |
| 31 | **Horizontal rhythm (width variation)** | NO (brief mentions but doesn't teach) | NO | NO | NO | YES (PA-30, PA-53) | **UNSUPPORTED** |
| 32 | **Terminal craft (detail quality at edges)** | YES (Section 8: CSS vocabulary) | NO | NO | NO (gates count presence, not quality) | YES (PA-16, PA-45) | **UNSUPPORTED** |

---

## PART 2: CATEGORY SUMMARY

### FULLY SUPPORTED (12 qualities -- present in 4-5 layers)

These qualities are likely to appear in pipeline output because they are taught, instructed, verified, AND detected:

| # | Quality | Layers |
|---|---------|--------|
| 1 | Multi-coherence (>=3 channels/boundary) | 5/5 |
| 2 | Perception thresholds (>=15 RGB, etc.) | 5/5 |
| 3 | Container width (940-960px) | 4/5 |
| 4 | Soul constraints | 4/5 |
| 5 | Warm palette | 4/5 |
| 6 | Zone count (3-5) | 5/5 |
| 7 | Background delta (>=15 RGB) | 5/5 |
| 10 | Typography hierarchy | 5/5 |
| 12 | Component variety (>=8 types) | 5/5 |
| 13 | Border configurations (>=3) | 5/5 |
| 14 | Fractal echo (5 scales) | 5/5 |
| 15 | Unified metaphor | 5/5 |

**Pattern:** All STRUCTURAL and IDENTITY qualities are fully supported. The pipeline excels at ensuring the page HAS the right structural pieces.

### PARTIALLY SUPPORTED (14 qualities -- present in 2-3 layers)

These qualities may or may not appear -- they are taught but not consistently instructed or verified:

| # | Quality | Layers | Gap |
|---|---------|--------|-----|
| 8 | Stacked gap prevention | 3/5 | Not in builder instructions or TC brief |
| 9 | Skip link + ARIA | 3/5 | Not in PA (not perceptual) |
| 11 | Font trinity | 3/5 | Not in TC brief or PA |
| 16 | Transition grammar | 3/5 | Not instructed, not gated |
| 17 | Coherence arc | 3/5 | Not instructed; SC-16 is ADVISORY only |
| 18 | Parametric echo | 3/5 | Not explicitly instructed to builder |
| 19 | Mechanism count (>=14) | 3/5 | Not in builder checkpoints, not in PA |
| 20 | Restraint | 3/5 | No gate checks restraint |
| 21 | Content-form coupling | 3/5 | No gate |
| 22 | Conviction statement | 3/5 | Not in TC brief, not in PA |
| 23 | Midpoint reflection | 3/5 | Not in TC brief, not in PA |
| 25 | Axis pattern variety | 3/5 | Not instructed; DG-4 only checks >=2 |
| 28 | Typographic range | 3/5 | Not in builder checkpoints |
| 29 | Spatial confidence | 3/5 | No gate measures "boldness" |

**Pattern:** COMPOSITIONAL qualities (how structural pieces work TOGETHER) are partially supported. The conventions brief TEACHES them but the builder is not explicitly INSTRUCTED to implement them, and gates don't always VERIFY them.

### UNSUPPORTED (6 qualities -- present in 0-1 layers)

These are BLIND SPOTS -- the pipeline cannot reliably produce them:

| # | Quality | Layers Present | What's Missing |
|---|---------|---------------|----------------|
| 24 | CSS budget (>=800 lines, zero waste) | 1/5 (brief mentions) | No instruction, no gate, no PA question |
| 26 | Designed moments (>=90% coverage) | 1/5 (PA-60 only) | Not taught, not instructed, not gated |
| 27 | Atmospheric conviction | 1/5 (PA only) | Brief teaches DEFAULT atmosphere, not content-specific mood; no gate |
| 30 | Grand spatial pause | 0/5 | Brief CAPS gaps at 120px; SC-10 PENALIZES large gaps; actively SUPPRESSED |
| 31 | Horizontal rhythm | 0/5 | Not taught, not instructed, not gated, not detected |
| 32 | Terminal craft (detail quality) | 1/5 (PA only) | Brief teaches CSS patterns but no quality gate; gates count PRESENCE not QUALITY |

**Pattern:** All EXPERIENTIAL qualities are unsupported. The pipeline measures whether structural pieces EXIST but cannot measure whether they create an extraordinary EXPERIENCE.

---

## PART 3: THE 8 CORE CONCEPTS -- DETAILED GAP ANALYSIS

### Concept 1: Multi-Coherence -- FULLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 4: 40 lines defining 6 channels, perception thresholds, coherence arc planning, typographic progression |
| TC Brief | YES | Section 6 boundary CSS table with per-boundary channel specifications |
| Builder | YES | Checkpoint 2: ">=3 channels shift in same semantic direction at each boundary" |
| Gate | YES | SC-13 (channel count), SC-13B (direction coherence) |
| PA | YES | PA-61 (multi-voice), PA-62 (transition variation), PA-69 (dynamic range) |

**Verdict: FULL.** Multi-coherence is the pipeline's best-supported quality. It is TAUGHT (what channels are, how they shift), INSTRUCTED (builder checkpoint), VERIFIED (two gates), and DETECTED (three PA questions). No gap.

**BUT:** SC-13 counts channels mechanically; it cannot judge if shifts create atmosphere. SC-13B attempts direction coherence but at ~50% confidence. The QUALITATIVE dimension of multi-coherence (does it feel like atmosphere?) relies entirely on PA.

### Concept 2: Fractal Echo -- FULLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 5: 30 lines, 5-scale table, parametric echo recipe, dependency rule |
| TC Brief | YES | Section 5: per-scale CSS directions |
| Builder | YES | Build log requires fractal echo table |
| Gate | YES | DG-1 (5 rows, CSS evidence, pattern direction) |
| PA | YES | PA-63 (fractal zoom coherence) |

**Verdict: FULL.** Well-supported structurally. DG-1 validates the TABLE exists; PA-63 validates the PERCEPTION.

**BUT:** DG-1 checks the plan (does the fractal echo table have 5 rows?), not the execution (does the CSS actually express the same pattern at 5 scales?). The builder could write a valid table and implement something different. SC-17 partially bridges this gap by comparing TC brief boundary values to computed CSS.

### Concept 3: Unified Metaphor -- FULLY SUPPORTED (with caveats)

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 6: 20 lines, structural test, navigation manifestation, Flagship requirement |
| TC Brief | YES | Section 1: structural metaphor name, quality score, CSS directions, BECAUSE test, risk profile |
| Builder | YES | Phase A: "internalize the metaphor" |
| Gate | YES (behavioral) | BG-2: fresh-eyes structural check |
| PA | YES | PA-44 (implicit vs explicit), PA-68 (spatial coverage) |

**Verdict: FULL on paper, PARTIAL in practice.** BG-2 is a behavioral gate (agent attestation, not programmatic). There is no PROGRAMMATIC way to verify metaphor is structural. The pipeline depends entirely on: (a) the TC skill deriving a good metaphor, (b) the builder internalizing it, and (c) PA auditors detecting it. Steps (a) and (c) are strong; step (b) is the weakness -- "internalize the metaphor" is a 4-word instruction with no verification mechanism between TC output and builder execution.

### Concept 4: Transition Grammar -- PARTIALLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 7: 25 lines, 3 transition types (SMOOTH/BRIDGE/BREATHING), channel budgets |
| TC Brief | YES | Section 2 specifies transition type at each boundary |
| Builder | NO | No checkpoint references transition types |
| Gate | NO | No gate verifies transition type matching; SC-16 (monotonic) is ADVISORY only |
| PA | YES | PA-34 (designed transitions), PA-62 (transition variation) |

**Verdict: PARTIAL.** The brief TEACHES three distinct transition types with specific channel budgets. The TC brief SPECIFIES them per boundary. But the builder is never INSTRUCTED to implement specific transition types, and no gate VERIFIES that the planned SMOOTH boundary actually has 1-2 channel shifts while the planned BREATHING boundary has 4-5. The quality falls through the gap between planning and execution.

**What's needed:** SC-13 already measures channel shifts per boundary. A simple extension could compare shift counts to TC brief transition types: SMOOTH=1-2, BRIDGE=3-4, BREATHING=4-5. This would close the gap with ~10 lines of JS.

### Concept 5: Spatial Confidence -- PARTIALLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 3: defined as component of Richness formula; Section 8: layout topologies; Section 9B: quality floor |
| TC Brief | YES | Section 6: specific CSS values that express spatial confidence |
| Builder | NO | No checkpoint tests for "bold visible decisions" |
| Gate | NO | Gates test PRESENCE of elements but not BOLDNESS of choices (SC-15 counts distinct borders but cannot tell if borders are bold or timid) |
| PA | YES | PA-10 (squint balance), PA-11 (margin confidence), PA-30 (desktop utilization), PA-31 (negative space quality) |

**Verdict: PARTIAL.** Spatial confidence is the hardest quality to gate because it is qualitative. The brief DEFINES it well. The TC brief provides specific CSS values that should express it. But neither the builder instructions nor gates enforce it. The ENTIRE burden falls on PA, which can only catch it AFTER the page is built. There is no mid-build mechanism to prevent timid spatial decisions.

**What's needed:** A builder checkpoint that asks: "Are your boldest border weights >=3px? Do your zone backgrounds differ by >=20 RGB (not just >=15)? Do you have >=2 grid layouts?" These are proxy measurements for spatial confidence.

### Concept 6: Restraint -- PARTIALLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 3: restraint defined, "at least 3 mechanisms deliberately absent" |
| TC Brief | YES | Section 4 REJECTED list (3+ mechanisms with reasons) |
| Builder | YES | Build log must document 3+ absent mechanisms |
| Gate | NO | No gate checks restraint indicators |
| PA | YES | PA-64 (restraint as expression) |

**Verdict: PARTIAL.** Restraint is TAUGHT and the TC brief + builder both document it. But no gate verifies the restraint is genuine (not just listing 3 obscure mechanisms). PA-64 asks about it but only in experiential terms. The gap: a builder could document "REJECTED: mechanism X, Y, Z" as a formality while deploying every available technique. No gate catches "restraint theater."

### Concept 7: Perception Thresholds -- FULLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES | Section 2: 40 lines, threshold table with tiers |
| TC Brief | YES | PERCEPTION CHECK lines after each zone block |
| Builder | YES | Checkpoint 2: "All adjacent zone bg deltas >= 15 RGB?" |
| Gate | YES | SC-09 (bg delta), SC-14 (sub-perceptual prevention), SC-11 (typography) |
| PA | YES | PA-55 (sub-perceptual CSS), PA-56 (micro-typography) |

**Verdict: FULL.** The pipeline's strongest area. Perception thresholds are reinforced at every layer. This is the direct result of the Flagship 1.5/4 failure analysis.

### Concept 8: Content-Form Coupling -- PARTIALLY SUPPORTED

| Layer | Present? | Evidence |
|-------|----------|----------|
| Brief | YES (implicit) | Section 9B quality floor implies it; Section 9 creative authority supports it |
| TC Brief | YES | Sections 2+3: tensions and zone architecture derived from content |
| Builder | YES | "Each section's visual density, component selection, and spacing must respond to what the content IS ABOUT" |
| Gate | NO | No gate measures content-form coupling |
| PA | YES | PA-70 (content-form coupling) |

**Verdict: PARTIAL.** The builder instruction is ONE PARAGRAPH that says content-form coupling matters. But the TC brief specifies per-ZONE treatment, and the conventions brief doesn't provide a mechanism for per-SECTION decisions. The builder is told to couple form to content but given zone-level CSS specifications, not section-level. This is the exact S-10 suppressor from the anti-conditions analysis -- zone-uniform specs prevent content-form coupling.

---

## PART 4: THE 6 UNSUPPORTED QUALITIES -- ANALYSIS

### Why Are They Unsupported?

The 6 unsupported qualities share a common characteristic: **they are EXPERIENTIAL, not STRUCTURAL.** The pipeline was designed to prevent STRUCTURAL failures (imperceptible CSS, missing borders, wrong container width). It was not designed to create EXPERIENTIAL qualities (mood, rhythm variation, dramatic pauses, horizontal variety, craft quality, peak moments).

| Unsupported Quality | Why the Pipeline Can't Produce It | What Would Need to Change |
|--------------------|---------------------------------|--------------------------|
| **CSS budget (>=800 lines)** | No gate counts CSS lines. The brief mentions it in the quality floor but the builder has no instruction to track CSS output volume. | Add a deliverable gate (DG-5?) that counts non-comment, non-blank CSS lines. Threshold: >=800 for Flagship. |
| **Designed moments (>=90% coverage)** | The concept of "peak moments distributed across the page" does not exist in the conventions brief. The brief teaches UNIFORM quality (multi-coherence at EVERY boundary) rather than PEAK quality (some boundaries more dramatic). PA-60 detects it but only after the fact. | Add a brief section on "designed moments" and a builder checkpoint: "Does every scroll-third have a unique visual treatment?" Add DG-4 sub-check for "peak moment per zone." |
| **Atmospheric conviction** | The brief teaches the design system's DEFAULT atmosphere (warm, sharp, flat, editorial) but does not teach how to create a CONTENT-SPECIFIC atmosphere. The TC brief derives a metaphor, but the builder instruction "internalize the metaphor" does not teach atmosphere creation. | The conventions brief needs a section on atmospheric conviction -- how CSS decisions (beyond palette) create mood. The builder needs a checkpoint: "Can a visitor perceive the atmosphere in the first 500ms before reading text?" |
| **Grand spatial pause** | ACTIVELY SUPPRESSED. The brief caps individual values at 96px (Section 1) and stacked gaps at 120px (Section 2). SC-10 FAILS pages with gaps >120px. A grand pause (96-120px single-purpose breathing space with distinctive treatment) would trigger SC-10 scrutiny. The pipeline PREVENTS the very thing that creates spatial drama. | SC-10 needs an exception for DESIGNED breathing spaces (elements with explicit `data-breathing` or similar markers that contain bridge content). The brief needs to distinguish between "void" (empty gap with no purpose) and "pause" (intentional breathing space with content). Currently they are treated identically. |
| **Horizontal rhythm** | Completely absent from the pipeline. The conventions brief mentions 5 layout topologies but only in terms of VERTICAL section organization. There is no teaching about width variation within sections (pull quotes at wider width, code blocks at different margins, secondary columns). No gate measures horizontal variety. No PA question specifically asks about horizontal rhythm. | Add a brief section on horizontal rhythm. Add a builder checkpoint: "Do at least 2 elements have different content widths?" PA-30 partially covers this but asks about overall width utilization, not element-level width variation. |
| **Terminal craft** | The brief teaches CSS patterns (syntax highlighting, 3-tier borders, 2-zone DNA) but no gate measures the QUALITY of their implementation. SC-15 counts distinct border configurations but doesn't distinguish between "3 border configs all at 1px" and "3 configs at 1px/3px/4px creating semantic hierarchy." | Gates need quality dimensions, not just quantity dimensions. SC-15 should verify the 3 configs include the SPECIFIC 1px/3px/4px hierarchy, not just 3 different strings. Add PA question about detail quality: "Zoom to a single component -- does the internal spacing feel considered?" |

---

## PART 5: THE STRUCTURAL PATTERN

### The Pipeline's Design DNA: Prevent Failure, Don't Create Excellence

The transmission matrix reveals a clear architectural pattern:

**FAILURE PREVENTION (12/12 fully supported):**
- Container width wrong? Gate catches it.
- Soul violated? Gate catches it.
- Backgrounds imperceptible? Gate catches it.
- Borders missing? Gate catches it.
- Typography uniform? Gate catches it.
- Components insufficient? Gate catches it.

**EXCELLENCE CREATION (0/6 fully supported):**
- Atmospheric conviction? Not taught, not gated, relies on TC + PA.
- Designed moments? Not in pipeline vocabulary.
- Grand spatial pause? Actively suppressed by SC-10.
- Horizontal rhythm? Completely absent.
- Terminal craft quality? Not measurable by gates.
- CSS budget adequacy? Not tracked.

This is the "guardrail factory" problem identified in the retrospective (S-14). The pipeline evolved through FAILURE ANALYSIS: each time something went wrong, a gate was added. Gates prevent the SPECIFIC FAILURE but do not create the QUALITY that failure's absence enables.

### The Quantitative-Qualitative Cliff

| Quality Type | Pipeline Coverage | Example |
|-------------|-------------------|---------|
| Binary structural (does X exist?) | 12/12 FULL | "Are there >=3 border configs?" |
| Quantitative threshold (is X >= Y?) | 12/12 FULL | "Is bg delta >= 15 RGB?" |
| Compositional relationship (do X and Y work together?) | 8/14 PARTIAL | "Do channels encode the same direction?" |
| Experiential quality (does X create feeling Y?) | 0/6 UNSUPPORTED | "Does the page have atmospheric conviction?" |

The pipeline has a cliff at the COMPOSITIONAL level. Everything below the cliff (structural presence, quantitative thresholds) is fully gated. Everything above the cliff (compositional relationships, experiential qualities) depends on PA auditors detecting problems AFTER the page is built, with no mid-build feedback.

---

## PART 6: CRITICAL FINDINGS

### Finding 1: The Conventions Brief Teaches More Than the Builder Implements

The conventions brief covers 30 of 32 Flagship qualities (only missing "designed moments" as a concept and "horizontal rhythm"). But the builder instructions reference only ~12 of these in their checkpoints. The builder is told to READ the brief but given 3 checkpoints with ~15 specific items. The brief's richest sections (coherence arc planning, parametric echo recipe, transition-to-coherence mapping) have no corresponding builder checkpoint.

**Quantified:** Conventions brief = ~610 lines of world model. Builder checkpoints = ~50 lines of verification items. That's an 12:1 teaching-to-checking ratio. 83% of what the brief teaches is not checked.

### Finding 2: The TC Brief Is the Pipeline's Strongest Transmission Link

The TC brief (Phases 0-4) is the only layer that converts TAUGHT qualities into SPECIFIC instructions. It translates the conventions brief's general world model into content-specific CSS directions, boundary tables, and mechanism selections. Without the TC brief, the builder would receive the conventions brief (general) plus the content (raw material) with no bridge between them.

**But the TC brief has a weakness:** It specifies per-ZONE treatment, not per-SECTION treatment. A 5-zone page might have 12 sections, and the TC brief treats all sections within a zone identically. This is the S-10 suppressor -- zone-uniform specs prevent content-form coupling.

### Finding 3: SC-10 Actively Suppresses Spatial Drama

This is the most important finding. SC-10 (stacked gap <= 120px) exists to prevent the catastrophic whitespace voids that ruined the Flagship experiment (210-276px empty gaps). But it also prevents INTENTIONAL spatial drama -- a 120px breathing space with a bridge sentence in display serif that creates a "chapter break" moment.

The gate cannot distinguish between:
- **VOID:** 200px of empty cream background between sections (BAD)
- **PAUSE:** 120px of distinctive background with a single bridge sentence in display serif (GOOD)

Both trigger SC-10. The pipeline treats all large gaps as failures. This is why the first-principles analysis found "grand spatial pause" in ZERO layers -- the pipeline actively prevents it.

**Recommended fix:** SC-10 should exempt elements with explicit pause markers (e.g., `class="breathing-zone"` or `data-pause`) that contain at least one text element. Empty gaps > 120px = FAIL. Designed pauses > 120px with content = ADVISORY.

### Finding 4: The Experiential Gap Is Structural, Not Accidental

The 6 unsupported qualities are not accidental omissions. They represent a category of quality that the pipeline's architecture CANNOT express:

- Gates measure BINARY properties (present/absent, above/below threshold)
- Experiential qualities are GRADIENT properties (atmosphere is more/less convincing, craft is higher/lower quality)

No amount of gate addition can measure "atmospheric conviction" because conviction is not binary. The pipeline would need a fundamentally different verification mechanism -- something like a "mini-PA" checkpoint during the build that asks a fresh-eyes agent "does this zone have atmosphere?" after every 2 zones.

### Finding 5: The Builder Instructions Are the Weakest Link

| Layer | Lines | Flagship Quality Coverage |
|-------|-------|--------------------------|
| Conventions Brief | ~610 | 30/32 (94%) |
| TC Brief (template) | ~160 | 25/32 (78%) |
| Builder Instructions | ~579 (but only ~50 in checkpoints) | 12/32 (38%) |
| Gate Runner | ~1,340 | 20/32 (63%) |
| PA Audit | ~994 | 24/32 (75%) |

The builder instructions reference the conventions brief as "YOUR PROCESS GUIDANCE" and list it as the second file to read. But the builder's actual checkpoints (the specific items verified during the build) cover only 38% of Flagship qualities. The builder is expected to absorb 610 lines of world model and self-enforce everything not in the checkpoints. This is the 12:1 teaching-to-checking ratio: the pipeline TEACHES well but VERIFIES poorly at the builder level.

---

## PART 7: RECOMMENDATIONS

### Priority 1: Close the Grand Spatial Pause Suppression

SC-10 needs a content-aware exception. Currently the gate that prevents the Flagship's worst failure (whitespace voids) also prevents one of the Flagship's most needed qualities (spatial drama). Add a marker-based exemption: elements with `class*="breathing"` or `data-pause` that contain at least one child text element are exempt from SC-10 but flagged as ADVISORY for PA review.

### Priority 2: Add Builder Checkpoints for Partially Supported Qualities

The conventions brief teaches 30/32 qualities but the builder only self-checks 12/32. Add checkpoints for:
- Transition grammar: "At each boundary, verify transition type matches your plan (SMOOTH=1-2 shifts, BRIDGE=3-4, BREATHING=4-5)"
- Parametric echo: "Do components in dense zones have tighter padding than the same components in sparse zones?"
- Content-form coupling: "Does each section's visual density match its content density?"
- Restraint: "Are >=3 mechanisms deliberately absent with documented reasoning?"
- Typographic range: "Does body text vary in at least 1 property (size, weight, line-height) across zones?"

### Priority 3: Add "Designed Moments" to the Pipeline Vocabulary

The concept does not exist in the conventions brief. Add a section between Section 3 (Richness) and Section 4 (Multi-Coherence):

> **Designed moments** are places where the visual treatment reaches a peak -- a combination of color, weight, spacing, or layout that appears nowhere else on the page. Flagship pages have at least 3 designed moments distributed across all scroll thirds, with at least 1 in the bottom third. A designed moment uses the page's existing vocabulary at higher intensity, not a new vocabulary. It says "the designer was HERE."

Add DG-4 sub-check 6: ">=3 designed moments documented in build log, distributed across scroll thirds."

### Priority 4: Add Horizontal Rhythm to the Brief

The conventions brief's layout topologies section (Section 8) covers 5 grid patterns but all describe section-level organization. Add:

> **Width variation** within sections creates horizontal rhythm. Pull quotes, featured statements, or bridge sentences can use a wider column (85% of container instead of body-text width). Code blocks can claim slightly more horizontal space than prose. At least 2 elements per page should have different content widths, creating a varied silhouette in thumbnail view.

### Priority 5: Convert Atmospheric Conviction from PA-Only to TC+Builder

Currently atmospheric conviction relies entirely on the TC brief's metaphor derivation and PA's post-hoc detection. The TC brief should include a REQUIRED section:

> **ATMOSPHERIC CHECK:** After naming the metaphor, describe the atmosphere it creates in 1 sentence using only perceptual terms (warm, urgent, contemplative, industrial, etc.). The builder uses this atmosphere sentence as a 500ms test: "In the first 500ms, does the page FEEL [atmosphere]?"

This converts atmosphere from an emergent property (hope the metaphor creates it) to a planned property (test for it during build).

---

## PART 8: SUMMARY SCORECARD

| Category | Count | % of 32 |
|----------|-------|---------|
| FULLY SUPPORTED | 12 | 37.5% |
| PARTIALLY SUPPORTED | 14 | 43.8% |
| UNSUPPORTED | 6 | 18.8% |

**Only 37.5% of Flagship qualities are fully supported by the pipeline.**

The 12 fully supported qualities are enough to produce a competent, structurally sound page that avoids the catastrophic failures of the Flagship 1.5/4 experiment. They are NOT enough to produce a Flagship 4/4 page with atmospheric conviction, spatial drama, experiential peaks, and horizontal variety.

The 14 partially supported qualities could be elevated to FULL with relatively modest changes: adding builder checkpoints, extending existing gates, and strengthening the TC-to-builder handoff.

The 6 unsupported qualities require architectural additions: new brief sections, new gate types (content-aware SC-10), new pipeline concepts (designed moments, horizontal rhythm), and a fundamental shift from failure-prevention to excellence-creation.

**The pipeline's current ceiling is approximately PA-05 3.0-3.5 / Tier 5 5-7/9.** This is COMPOSED territory -- structurally sound, with some compositional intelligence visible. Reaching Flagship (PA-05 >= 3.5, Tier 5 >= 7/9) requires the experiential qualities that are currently unsupported.

---

**END OF PIPELINE TRANSMISSION AUDIT**

*This audit identifies 32 Flagship qualities across 3 source documents, traces each through 5 pipeline layers, and finds that 37.5% are fully supported, 43.8% partially supported, and 18.8% unsupported. The unsupported qualities are all EXPERIENTIAL -- the pipeline excels at structural verification but cannot create or verify atmospheric, rhythmic, or craft-level excellence. The most critical finding is that SC-10 actively suppresses spatial drama, and the builder checkpoints cover only 38% of qualities the conventions brief teaches.*
