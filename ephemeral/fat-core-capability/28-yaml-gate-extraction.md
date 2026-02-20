# 28 -- YAML Gate Extraction for Flagship Variant

**Author:** routing-solver (Opus 4.6)
**Date:** 2026-02-19
**Task:** #53 -- Extract YAML gate designs from compositional-intelligence corpus
**Sources:** Report 15 (YAML gate architecture, 823 lines), Report 19 (programmatic enforcement, 1,013 lines), Report 73 (gate runner architecture, 1,313 lines)

---

## EXECUTIVE SUMMARY

Three reports converge on a single architecture: a 3-tier enforcement model with 15 programmatic gates (SC-01 through SC-15), 4 deliverable gates, and 2 behavioral gates. The critical finding for the Flagship variant diagram: **4 gates that were Tier 3 (behavioral self-check) can be promoted to Tier 1/2 (programmatic/deliverable), making them genuinely enforceable.** The highest-leverage single change is structured TC output (`_build-plan.yaml`) which makes the handoff gate fully programmatic.

For Flagship specifically: SC-13 (multi-coherence >= 3 channels per boundary) and SC-14 (sub-perceptual prevention) are the two NEW gates that directly address the flagship's failure modes. The gate runner architecture (~440 lines JS) provides phase-locked enforcement that prevents the builder from proceeding until mechanical checks pass.

---

## (a) WHICH COMPOSITIONAL PROPERTIES CAN BE GATED PROGRAMMATICALLY?

### Tier 1: PROGRAMMATIC (code runs check, blocks pipeline) -- 15 gates

| Gate | Property | Measurement Method | Threshold | Confidence | Flagship Relevance |
|------|----------|-------------------|-----------|------------|-------------------|
| SC-01 | Container width | `getComputedStyle().maxWidth` | 940-960px | 99% | #1 Phase D failure mode |
| SC-02 | Soul properties (radius, shadow) | `getComputedStyle()` on `*` | 0px / none | 99% | Identity enforcement |
| SC-03 | Font trinity | `getComputedStyle().fontFamily` | >= 2 families from trinity | 95% | Flagship had uniform fonts |
| SC-04 | Warm palette | R >= G >= B on all backgrounds | R >= G >= B | 95% | Identity enforcement |
| SC-05 | No pure extremes | No rgb(0,0,0) or rgb(255,255,255) | Exact | 99% | Identity enforcement |
| SC-06 | ARIA landmarks | `querySelectorAll` count | >= 3 | 99% | Structural baseline |
| SC-07 | Skip link | Selector match | exists | 99% | Accessibility |
| SC-08 | Component library | Class name pattern matching | >= 3 classes | 90% | Flagship had minimal components |
| SC-09 | Background delta | RGB channel comparison at zone boundaries | >= 15 RGB max-channel | 95% | **PRIMARY flagship failure** (had 1-8 RGB) |
| SC-10 | Stacked gap | `getBoundingClientRect` gap measurement | <= 108px | 90% | **Flagship had 210-276px voids** |
| SC-11 | Typography zones | `fontSize` comparison across hierarchy | display-body >= 10px, body-detail >= 2px | 95% | **Flagship had ALL text at 16px/400** |
| SC-12 | Zone count | Element count | 2-5 zones | 99% | Structural baseline |
| SC-13 | **Multi-coherence** (NEW) | Property diff count per zone boundary | >= 3 of 6 channels shift | 70% | **Flagship had no coherent channel shifts** |
| SC-14 | **Sub-perceptual prevention** (NEW) | Letter-spacing value range check | No values 0-0.02em; no bg deltas 1-14 RGB within zone | 85% | **Flagship spent 22% CSS on imperceptible micro-typography** |
| SC-15 | **Border presence** (NEW) | `borderWidth > 0` on sections | >= 1 border or >= 2 dividers | 95% | **Flagship had zero borders** |

### What CAN'T be gated programmatically (the 30% gap):

| Property | Why Code Fails | Who Catches It |
|----------|---------------|----------------|
| "Does this feel DESIGNED?" (PA-05) | Holistic gestalt judgment | 9 PA auditors |
| Metaphor structural coherence | CSS-to-metaphor mapping is semantic | Fresh-eyes Opus agent |
| Channel shift DIRECTION | Code counts channels, can't judge alignment | PA-17 through PA-24 |
| Typography proportional beauty | Delta checks pass, aesthetic harmony requires judgment | PA-25 through PA-30 |
| Content-form fit | Is the form serving THIS content? | PA-31 through PA-36 |
| Visual rhythm | Spacing pattern as reading experience | PA-37 through PA-42 |

**The boundary rule:** If a property has a numeric threshold, it goes in gate-runner.js. If it requires "does this FEEL right?", it stays in the PA. SC-13 sits ON the boundary: code checks channel COUNT (necessary), PA checks channel COHERENCE (sufficient).

---

## (b) WHAT YAML SCHEMA WAS PROPOSED?

### Gate Definition Schema (from Report 15)

```yaml
# Gate Definition Schema v1
gate_id: string          # Unique identifier (e.g., "sc_09_background_delta")
stage: enum              # tc_lockin | fractal | landmark | handoff | build_verify
trigger: string          # When this gate fires (e.g., "after_phase_3.5")
enforcement: enum        # programmatic | deliverable | agent_self_check

require:                 # What must be true to PASS
  - check: string        # What to verify
    method: enum         # computed_style | dom_query | file_parse | table_verify
    selector: string     # CSS selector or file path
    threshold:           # Pass/fail boundary
      min: number|null
      max: number|null
      exact: value|null
      contains: string|null
    unit: string         # px | em | rgb_delta | count | boolean

fail_action: enum        # block_and_recipe | block_and_return | block_and_escalate
fail_recipe:             # ONLY if fail_action = block_and_recipe
  instruction: string    # Specific fix instruction
  css_example: string    # Concrete CSS to apply
  reference_file: string # File to consult

metadata:
  provenance: string     # Which report established this gate
  confidence: enum       # very_high | high | moderate | low
  sunset: string|null    # When to re-evaluate (e.g., "after_10_builds")
```

### Key Design Decisions:

1. **YAML-as-Schema, NOT YAML-as-Prompt.** Report 15 is emphatic: "YAML-as-Prompt is theater. YAML-as-Schema is real." An LLM reading YAML processes it identically to prose. The value is only real when CODE parses the YAML and runs checks.

2. **Single `gates.yaml` registry.** All gate definitions in one file (~200 lines). Gate runner reads this file dynamically. Adding a gate = adding a YAML block. Sunsetting = removing a block. No scattered thresholds.

3. **Fix recipe in every gate.** Every Tier 1/2 gate MUST include `fail_recipe` with specific CSS. Transforms "fix it" into "change `.zone-3` background from `#f9f8f0` to `#f0ebe3` because delta is 5 RGB and needs >= 15."

4. **Builder deliverable format (Tier 2).** Builder must output structured YAML alongside HTML:
   - `fractal_table.yaml` -- 5-scale coverage with CSS evidence per scale
   - `cascade_table.yaml` -- computed CSS at every zone boundary
   - `landmark_table.yaml` -- header/main/footer with evidence

5. **Structured TC output (`_build-plan.yaml`)** -- the HIGHEST-LEVERAGE single change:
```yaml
# _build-plan.yaml (TC planner output, machine-parseable)
zone_count: 4
zones:
  - id: intro
    background: "#fefcf3"
    sections: [overview, context]
  - id: build
    background: "#f0ebe3"
    sections: [mechanism-analysis, evidence]
bg_deltas:
  intro_to_build: 17   # >= 15: PASS
mechanisms:
  spatial: [progressive-disclosure]
  temporal: [scroll-reveal]
  material: [paper-texture]
  behavioral: [hover-depth]
  relational: [border-weight-gradient]
grid_layouts: [grid-2col, grid-3col]
transitions: [SMOOTH, BRIDGE, BREATHING]
metaphor:
  name: "Geological Intentionality"
  structural: true
```

This makes the handoff gate fully programmatic: orchestrator parses YAML, validates zone count (2-5), bg deltas (>= 15 RGB), mechanism per-category minimums (5 categories, >= 1 each), transition types (>= 3), grid layouts (>= 2). BEFORE committing 90-150 min of builder time.

---

## (c) WHAT NEW GATES BEYOND SC-01 THROUGH SC-12 WERE DESIGNED?

### Three new programmatic gates:

**SC-13: Multi-Coherence (the composition gate)**

- **What it checks:** At every zone boundary, >= 3 of 6 CSS channels must visibly shift.
- **6 channels measured:** chromatic (background >= 15 RGB delta), typographic (font-size >= 2px or weight >= 100 delta), spatial (padding >= 24px delta), structural (border configuration change), behavioral (interactivity presence change), material (background-image/texture change).
- **Why it matters for Flagship:** The flagship had backgrounds differing by 1-8 RGB (Channel 1 absent), all text at 16px/400 (Channel 2 absent), uniform padding (Channel 3 absent). SC-13 would have caught this: "only 0 channels shifting at zone-1/zone-2 boundary, need >= 3."
- **Honest limitation:** Counts channels but CANNOT assess whether shifts serve the same semantic direction. 3 conflicting shifts pass the gate but may create visual chaos. PA catches direction; SC-13 catches count.
- **Estimated size:** ~60 lines JS.
- **Full pseudocode:** Report 73, Section 6 (lines 388-513).

**SC-14: Sub-Perceptual Prevention (the waste gate)**

- **What it checks:** Three sub-checks:
  1. No letter-spacing values between 0 and 0.02em (sub-perceptual).
  2. No letter-spacing micro-clustering (adjacent values < 0.5px apart).
  3. No intra-zone background deltas between 1-9 RGB (imperceptible child-parent differentiation).
- **Why it matters for Flagship:** Flagship spent 22% of CSS budget (227 lines) on letter-spacing 0.001-0.01em. ALL imperceptible. SC-14 prevents CSS budget misallocation.
- **Provenance:** Report 21 (B-09), flagship dissection finding.
- **Estimated size:** ~50 lines JS.
- **Full pseudocode:** Report 73, Section 7 (lines 517-649).

**SC-15: Border Presence (the structural separation gate)**

- **What it checks:** At least 1 section/zone element has border-left >= 3px, OR at least 2 `<hr>` dividers exist.
- **Why it matters for Flagship:** Flagship had ZERO borders, ZERO dividers. Zero structural separation beyond backgrounds (which were imperceptible). SC-15 enforces at least minimal structural demarcation.
- **Estimated size:** ~20 lines JS.

### Four gates PROMOTED from Tier 3 (behavioral) to Tier 1/2 (programmatic/deliverable):

| Gate | Was | Now | How |
|------|-----|-----|-----|
| Handoff validation | Tier 3 (text-parse `_build-plan.md`) | Tier 1 (parse `_build-plan.yaml`) | Structured TC output |
| Fractal consistency | Tier 3 (agent self-fills table) | Tier 2 (builder outputs `fractal_table.yaml`, code validates) | Structured builder deliverable |
| Landmark completeness | Tier 3 (agent self-checks) | Tier 1 (DOM query for header/main/footer) | Already possible with `querySelectorAll` |
| Cascade value table | Tier 3 (agent self-reports) | Tier 2 (builder outputs `cascade_table.yaml`, code cross-validates) | Structured builder deliverable |

### Two gates REMAIN Tier 3 (cannot be promoted):

| Gate | Why Unpromovable | Mitigation |
|------|-----------------|------------|
| Metaphor independence | "Did the agent derive independently?" is fundamentally subjective | Tier 3 attestation + audit trail |
| Metaphor structural | "Does the metaphor suggest specific CSS?" requires semantic judgment | Fresh-eyes Opus agent (Wave 0.5) |

**Net effect:** Gate coverage expanded from 12 Tier 1 + 0 Tier 2 + 6 Tier 3 = 18 gates, to **15 Tier 1 + 4 Tier 2 + 2 Tier 3 = 21 gates.** The 4 promoted gates plus 3 new gates add genuine enforcement where there was only behavioral honor-system before.

---

## (d) HOW DO THESE HELP ACHIEVE FLAGSHIP 4/4 SPECIFICALLY?

### The Floor-Ceiling Distinction

**Gates raise the FLOOR, not the CEILING.** They prevent 1.5/4 (the flagship failure) but do not produce 4/4 (the CD-006 achievement). Here's what each new/promoted gate contributes:

| Gate | Prevents | Enables | Flagship Score Impact |
|------|----------|---------|----------------------|
| SC-13 (multi-coherence) | Zone boundaries with 0-2 channel shifts | FORCES the builder to differentiate on >= 3 channels per boundary | Prevents the "flat cream page" failure. Raises mechanical richness from 34/91 to estimated 50-55/91 |
| SC-14 (sub-perceptual prevention) | CSS budget waste on imperceptible values | Redirects 22% of CSS effort toward perceptible differentiation | Prevents budget misallocation. Net +5-10% usable CSS lines |
| SC-15 (border presence) | Pages with zero structural borders | FORCES at least minimal structural demarcation | Prevents "no visual separation" failure |
| Handoff gate (promoted) | Builder starting with invalid plan | Catches zone-count errors, insufficient bg deltas, missing mechanism categories BEFORE 90 min build | Saves wasted builds. Raises P(Flagship success) from ~35% to ~55% |
| Fractal consistency (promoted) | Claimed-but-unverified scale coverage | Builder must produce parseable evidence of 5-scale coverage with CSS | Forces the Flagship requirement (5/5 scales) to be machine-verified |
| Cascade value table (promoted) | Self-reported multi-coherence | Builder must produce parseable boundary analysis | Cross-validates SC-13's computed measurements against builder's claimed values |

### The Gate Runner Phase Lock Architecture (from Reports 19 + 73)

The phase lock mechanism is CRITICAL for Flagship. The orchestrator controls builder progression:

```
Phase 1 complete → GATE 1 (SC-06, SC-07, SC-08, SC-12)
                    Checks: landmarks, skip link, >= 3 components, 2-5 zones
                    If FAIL: builder fixes, re-saves, gate re-runs (max 2 retries)

Phase 3 complete → GATE 2 (SC-04, SC-05, SC-09)
                    Checks: warm palette, no extremes, bg delta >= 15 RGB
                    This gate catches THE primary flagship failure BEFORE more build time

Phase 4 complete → GATE 3 (SC-01, SC-02, SC-15)
                    Checks: container width, soul properties, border presence

Phase 5 complete → GATE 4 (SC-03, SC-11)
                    Checks: font trinity, typography hierarchy

Phase 8 complete → FULL RUN (SC-01 through SC-15)
                    ALL must pass before proceeding to PA
                    Max 3 fix cycles with specific CSS recipes per failure
```

**Why this matters for Flagship:** The flagship builder invested full build time before ANY verification. With phase locks, SC-09 catches imperceptible backgrounds after Phase 3 (~20 min in), not after Phase 8 (~90 min in). Fix cost at Phase 3: ~5 min. Fix cost at Phase 8: ~30 min or full rebuild.

### The Fix Recipe Difference

Every gate failure generates a SPECIFIC fix recipe, not a generic instruction:

**Old (prose):** "Background delta between Zone 2 and Zone 3 is insufficient. Increase delta."

**New (structured):**
```
SC-09 FAIL: Zone 1 (rgb(254,252,243)) to Zone 2 (rgb(249,248,240))
Measured: 5 RGB delta (need >= 15)
Fix: Change .zone-2 { background-color: #f0ebe3; }
     Delta from zone-1: 14,17,16 -- PASSES
Alternatives:
  - #ece5da (delta 14,13,13 from zone-1)
  - #e8e0d5 (delta 11,12,14 from zone-1)
Reference: perception-thresholds.md: Chromatic Channel
```

This is the RECIPE format that produced 2.5/4 in remediation vs the CHECKLIST format that produced 1.5/4 in the flagship.

### The Honest Answer for Flagship 4/4

Gates alone produce **a reliable 2.5-3.0/4 floor.** They prevent the catastrophic failures (imperceptible backgrounds, uniform typography, whitespace voids, zero borders, CSS waste). But they do NOT produce:

- Metaphor-driven composition (why certain CSS choices serve the content's thematic arc)
- Multi-channel coherence DIRECTION (shifts aligned to the same semantic gradient)
- Compositional intentionality (the page feels like a DESIGNED artifact, not an assembled collection)

The 3.0-4.0 gap requires what Report 21 (the routing problem) identified: compositional intelligence must reach the builder through NON-TEXT channels -- the 5x6 scale-channel grid, phased CSS exemplars, propose-validate patterns, and self-check questions. Gates provide the floor; compositional routing provides the ceiling.

---

## IMPLEMENTATION SUMMARY

### Total New Infrastructure

| Component | Lines | Purpose |
|-----------|-------|---------|
| `gates.yaml` | ~200 | Gate registry (all 21 gates defined in YAML) |
| `gate-runner.js` | ~440 | Main runner + 15 gate functions + utilities |
| `gate-registry.js` | ~120 | Thresholds constant, selectors constant, phase groupings |
| Builder YAML templates | ~50 | Templates for fractal_table.yaml, cascade_table.yaml |
| TC structured output schema | ~40 | `_build-plan.yaml` template + validation |
| **Total** | **~850** | |

### Build Priority for Flagship Variant

1. **SC-09 (Background Delta)** -- catches THE primary failure. ~40 lines.
2. **SC-11 (Typography Zones)** -- catches uniform typography. ~50 lines.
3. **SC-10 (Stacked Gap)** -- catches whitespace voids. ~45 lines.
4. **SC-13 (Multi-Coherence)** -- catches absent channel shifts. ~60 lines. (NEW)
5. **SC-15 (Border Presence)** -- catches missing structure. ~20 lines. (NEW)
6. **SC-14 (Sub-Perceptual Prevention)** -- catches CSS waste. ~50 lines. (NEW)
7. **SC-01 (Container Width)** -- catches #1 Phase D failure. ~15 lines.
8. **SC-02 (Soul Properties)** -- catches identity violations. ~25 lines.
9. Remaining gates (SC-03 through SC-08, SC-12) -- structural baseline. ~100 lines.

**Gates 1-6 address all flagship-specific failure modes. Gates 7-9 are baseline enforcement.**

### Key Architectural Decisions for Flagship Variant Diagram

1. **Phase lock mechanism:** Orchestrator runs gate subsets between build phases. Builder cannot proceed until gate passes. Max 2 retries per phase gate, max 3 fix cycles on full run.

2. **Single Playwright session:** One browser, sequential gates, ~5-15 seconds total for all 15 gates. Reuses proven pattern from Mode 4 PA screenshot capture.

3. **70/30 programmatic/perceptual split:** 15 gates catch mechanical failures (70%). 48 PA questions from 9 auditors catch compositional quality (30%). Both are necessary. Neither is sufficient alone.

4. **Fix recipes in RECIPE format:** Every failure includes measured values, specific CSS, alternatives, reference file. This is the format that produced 2.5/4 (remediation success) vs the vague format that produced 1.5/4 (flagship failure).

5. **Structured TC output is the highest-leverage single change:** Makes handoff gate fully programmatic, catches bad plans before committing builder time. Report 15 calls this "the single highest-leverage change in the entire YAML gate architecture."

---

**END OF EXTRACTION**

**Statistics:**
- Total gates extracted: 21 (15 Tier 1 + 4 Tier 2 + 2 Tier 3)
- New gates designed: 3 (SC-13, SC-14, SC-15)
- Gates promoted from behavioral to verifiable: 4
- Pseudocode available: 5 critical gates (SC-09, SC-10, SC-11, SC-13, SC-14)
- Total implementation: ~850 lines across 5 files
- Flagship floor prediction with gates: 2.5-3.0/4 (up from 1.5/4 without)
