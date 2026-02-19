# YAML/Structured Gate Architecture: Design Report

**Author:** YAML Gate Architect (Opus 4.6)
**Date:** 2026-02-19
**Task:** #15 -- DESIGN: YAML/Structured Gate Architecture
**Sources:** PV2 Pipeline Diagram, TC SKILL.md (gates at lines 457, 799, 1416, 1466), compositional-core/CLAUDE.md (phase-gating), 14-MASTER-SYNTHESIS.md (gate architecture validation)

---

## 0. THE HONEST FRAMING FIRST

The user's core insight is: "If it's text-based, they're just as good as any other words." Text instructions get skimmed by LLMs. YAML gates could provide structural enforcement that resists compression.

**The honest answer before the design:** YAML read by an LLM is still text. The structure only MATTERS if something PARSES it programmatically. There are exactly two enforcement models, and they have radically different properties:

| Model | How Gates Enforce | Skimmable? | Requires Code? |
|-------|-------------------|------------|----------------|
| **A: YAML-as-Prompt** | LLM reads YAML, follows instructions | YES (LLM treats YAML as fancy prose) | No |
| **B: YAML-as-Schema** | Code parses YAML, runs checks, blocks pipeline | NO (code doesn't skim) | Yes (~300-500 lines JS) |

**Model A is theater.** An LLM reading `require: {channels_shifting: {min: 3}}` processes it identically to reading "Verify that >= 3 channels shift." The YAML structure provides zero additional compliance over well-formatted markdown. The visual nesting of YAML might slightly increase salience, but it doesn't create enforcement.

**Model B is real.** Code that parses a gate definition and runs `getComputedStyle` checks against it creates genuine enforcement. The pipeline physically cannot proceed until the gate passes.

**This report designs for Model B** -- structured gates as machine-readable specifications consumed by a programmatic gate runner -- while being honest about where Model A (LLM-read gates) can still provide marginal value.

---

## 1. THE CURRENT GATE LANDSCAPE

PV2 currently has gates at 5 pipeline stages, expressed as prose in markdown:

### Stage 1: TC Lock-In Gate (Phase 3.5 in TC SKILL.md, line 799)
```
Current form: Prose questions
  "Did I derive independently?"
  "Can I justify without library?"
  "Does this appear in case-studies/_INDEX.md?"
Enforcement: Agent self-assessment (behavioral)
Failure mode: Agent says "yes" to all three without genuine reflection
```

### Stage 2: Fractal Consistency Gate (Phase 4.7 in TC SKILL.md, line 1416)
```
Current form: Markdown table template
  Scale coverage table with 5 rows (Navigation/Page/Section/Component/Character)
  Tier-calibrated requirements (Floor: exempt, Middle: 2, Ceiling: 4, Flagship: 5)
Enforcement: Agent fills table, self-validates
Failure mode: Agent fills table with plausible-sounding but unverifiable CSS evidence
```

### Stage 3: Landmark Completeness Gate (Phase 4.7B in TC SKILL.md, line 1466)
```
Current form: Markdown table
  3 landmarks: HEADER / MAIN CONTENT SECTIONS / FOOTER
  Binary YES/NO + CSS evidence
Enforcement: Agent fills table, self-validates
Failure mode: Agent writes "YES" without actually implementing landmarks
```

### Stage 4: Handoff Validation Gate (Wave 0.9 in PV2 diagram)
```
Current form: 5-item checklist
  Zone count 2-5? BG >= 15 RGB? >= 2 grids? Per-category mechs? >= 3 transitions?
Enforcement: Orchestrator text-parses _build-plan.md
Failure mode: Orchestrator can't reliably parse unstructured plan
```

### Stage 5: Programmatic Gates (Wave 2 in PV2 diagram)
```
Current form: 12 binary gates (SC-01 through SC-12)
  Playwright + getComputedStyle
Enforcement: GENUINE programmatic enforcement (Model B)
Failure mode: Limited -- code either passes or doesn't
```

**Key observation:** Only Stage 5 has genuine enforcement. Stages 1-4 are all behavioral (agent self-assessment) or semi-structured (text parsing). This is where YAML-as-Schema can add real value.

---

## 2. THE YAML GATE ARCHITECTURE

### 2.1 Gate Definition Schema

Every gate in the pipeline is defined as a YAML document with this schema:

```yaml
# Gate Definition Schema v1
gate_id: string          # Unique identifier (e.g., "handoff_zone_count")
stage: enum              # tc_lockin | fractal | landmark | handoff | build_verify
trigger: string          # When this gate fires (e.g., "after_phase_3.5")
enforcement: enum        # programmatic | deliverable | agent_self_check

require:                 # What must be true to PASS
  - check: string        # What to verify
    method: enum         # computed_style | dom_query | file_parse | table_verify
    selector: string     # CSS selector or file path (for programmatic checks)
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
  provenance: string     # Which report/experiment established this gate
  confidence: enum       # very_high | high | moderate | low
  sunset: string|null    # When to re-evaluate (e.g., "after_10_builds")
```

### 2.2 The Three Enforcement Tiers

The schema above supports three enforcement levels, and the critical design decision is which tier each gate belongs to:

**Tier 1: PROGRAMMATIC (code parses YAML, runs check, blocks pipeline)**
```yaml
gate_id: sc_09_background_delta
stage: build_verify
trigger: after_wave_1_build
enforcement: programmatic

require:
  - check: adjacent_zone_background_delta
    method: computed_style
    selector: "[data-zone]"
    threshold:
      min: 15
    unit: rgb_delta

fail_action: block_and_recipe
fail_recipe:
  instruction: "Increase background color difference between adjacent zones"
  css_example: |
    /* Zone 1 */ .zone-intro { background: #fefcf3; }
    /* Zone 2 */ .zone-build { background: #f0ebe3; }  /* >= 15 RGB delta */
  reference_file: perception-thresholds.md
```

**How this executes:** `gate-runner.js` reads this YAML, generates a Playwright script that queries `getComputedStyle` on all `[data-zone]` elements, computes pairwise RGB deltas, and returns PASS/FAIL. On FAIL, it generates the fix recipe from `fail_recipe` and sends it to the builder.

**Tier 2: DELIVERABLE (agent must produce structured output that code validates)**
```yaml
gate_id: fractal_consistency
stage: fractal
trigger: after_phase_4.7
enforcement: deliverable

require:
  - check: scale_coverage_table
    method: table_verify
    selector: "fractal_table.yaml"  # Builder must output this file
    threshold:
      min: 5  # Under ALWAYS FLAGSHIP: all 5 scales required
    unit: count
  - check: direction_consistency
    method: table_verify
    selector: "fractal_table.yaml"
    threshold:
      exact: true  # All scales must have same direction
    unit: boolean

fail_action: block_and_return
```

**How this executes:** The builder outputs `fractal_table.yaml` (structured, not prose). The gate runner parses it, counts filled rows, checks direction consistency. This is intermediate -- the builder still fills it in, but the FORMAT is machine-parseable and the VALIDATION is programmatic.

**The builder's deliverable format:**
```yaml
# fractal_table.yaml (builder produces this)
pattern: "sparse-to-dense"
scales:
  navigation:
    expression: "TOC items progress from sparse to dense"
    css: "nav li:first-child { padding: 12px } nav li:last-child { padding: 4px }"
    direction: sparse_to_dense
  page:
    expression: "Section sequence: intro sparse, peak dense, outro sparse"
    css: "section.intro { padding: 64px 24px } section.peak { padding: 16px 24px }"
    direction: sparse_to_dense
  # ... (section, component, character)
```

**Tier 3: AGENT SELF-CHECK (YAML provides structure but enforcement is behavioral)**
```yaml
gate_id: metaphor_independence
stage: tc_lockin
trigger: after_phase_3.5
enforcement: agent_self_check

require:
  - check: derived_without_library
    method: agent_attestation
    threshold:
      exact: true
    unit: boolean
  - check: justifiable_without_library
    method: agent_attestation
    threshold:
      exact: true
    unit: boolean

fail_action: block_and_return
```

**How this executes:** The agent reads the YAML gate, performs self-checks, and outputs a YAML attestation. The orchestrator parses the attestation for `pass: true/false`. This is the WEAKEST tier -- the agent could lie. But the structured output format at least makes the self-check explicit and auditable (vs. the current invisible self-assessment).

**Honest assessment of Tier 3:** This is Model A (YAML-as-prompt). The marginal value over prose is:
1. The output format is parseable (orchestrator can detect missing attestations)
2. The checks are enumerated (agent can't "forget" one)
3. The attestation is auditable in the build log
But an agent that wants to skip will still skip. Tier 3 catches negligence, not malice.

---

## 3. THE COMPLETE GATE REGISTRY

Here is every gate in PV2, classified by enforcement tier:

### Tier 1: PROGRAMMATIC (12 gates -- the current SC-01 through SC-12, PLUS new gates)

```yaml
# === WAVE 2 PROGRAMMATIC GATES (existing) ===

- gate_id: sc_01_container_width
  stage: build_verify
  enforcement: programmatic
  require:
    - check: container_max_width
      method: computed_style
      selector: "main, .container, [role='main']"
      threshold: { min: 940, max: 960 }
      unit: px
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Set container max-width to 960px"
    css_example: "main { max-width: 960px; margin: 0 auto; }"

- gate_id: sc_02_soul_properties
  stage: build_verify
  enforcement: programmatic
  require:
    - check: border_radius_zero
      method: computed_style
      selector: "*"
      threshold: { exact: 0 }
      unit: px
    - check: box_shadow_none
      method: computed_style
      selector: "*"
      threshold: { exact: "none" }
      unit: string
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Remove border-radius and box-shadow from all elements"
    css_example: "* { border-radius: 0 !important; box-shadow: none !important; }"

- gate_id: sc_09_background_delta
  stage: build_verify
  enforcement: programmatic
  require:
    - check: adjacent_zone_bg_delta
      method: computed_style
      selector: "[data-zone]"
      threshold: { min: 15 }
      unit: rgb_delta
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Increase background delta to >= 15 RGB between adjacent zones"
    css_example: "/* Zone N: #fefcf3, Zone N+1: #f0ebe3 (delta=14,14,16 -- PASSES) */"
    reference_file: "perception-thresholds.md"

- gate_id: sc_10_stacked_gap
  stage: build_verify
  enforcement: programmatic
  require:
    - check: total_gap_at_boundaries
      method: computed_style
      selector: "section + section, [data-zone] + [data-zone]"
      threshold: { max: 108 }
      unit: px
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Reduce total stacked whitespace to <= 108px at section boundaries"
    css_example: "/* margin-bottom + padding-top + gap must sum to <= 108px */"

- gate_id: sc_11_font_size_zones
  stage: build_verify
  enforcement: programmatic
  require:
    - check: typographic_zone_delta
      method: computed_style
      selector: "h1, h2, p, .detail, caption, .meta"
      threshold: { min: 2 }
      unit: px
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Create visible typography hierarchy with >= 2px between zones"
    css_example: "/* Display: 28-36px, Body: 16-18px, Detail: 13-14px */"

- gate_id: sc_12_zone_count
  stage: build_verify
  enforcement: programmatic
  require:
    - check: zone_element_count
      method: dom_query
      selector: "[data-zone]"
      threshold: { min: 2, max: 5 }
      unit: count
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Ensure page has 2-5 distinct content zones"

# === NEW PROGRAMMATIC GATES (from synthesis recommendations) ===

- gate_id: sc_13_sub_perceptual_prevention
  stage: build_verify
  enforcement: programmatic
  require:
    - check: letter_spacing_delta
      method: computed_style
      selector: "h1, h2, p"
      threshold: { min: 0.03 }
      unit: em
    - check: no_micro_deltas
      method: computed_style
      selector: "*"
      threshold: { min: 0.02 }  # Any letter-spacing < 0.02em is sub-perceptual
      unit: em
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Remove sub-perceptual letter-spacing (< 0.02em). Use >= 0.03em or 0."
    css_example: "/* BAD: letter-spacing: 0.005em  GOOD: letter-spacing: 0.05em or 0 */"
  metadata:
    provenance: "Report 21 (B-09), flagship spent 22% CSS on imperceptible micro-typography"

- gate_id: sc_14_multi_coherence
  stage: build_verify
  enforcement: programmatic
  require:
    - check: channels_shifting_per_boundary
      method: computed_style
      selector: "[data-zone] + [data-zone]"
      threshold: { min: 3 }
      unit: count
      # Channels: chromatic (background), typographic (font-size/weight),
      # spatial (padding/margin), structural (border), behavioral (hover),
      # material (texture/pattern)
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "At each zone boundary, >= 3 CSS channels must visibly change"
    css_example: |
      /* Boundary between Zone 1 and Zone 2 must shift:
         Channel 1 (chromatic): background #fefcf3 -> #f0ebe3
         Channel 2 (typographic): font-size 18px -> 16px
         Channel 3 (spatial): padding 64px -> 48px
         = 3 channels shifting. PASSES. */
    reference_file: "perception-thresholds.md"
  metadata:
    provenance: "Multi-coherence requirement from 8+ reports"
```

**Note on SC-03 through SC-08:** These follow the same pattern (computed_style or dom_query, exact thresholds, specific fail recipes). Full definitions omitted for brevity but follow the identical schema.

### Tier 2: DELIVERABLE (4 gates -- builder produces structured output, code validates)

```yaml
- gate_id: fractal_consistency
  stage: fractal
  enforcement: deliverable
  trigger: after_phase_4.7
  require:
    - check: scale_count
      method: table_verify
      selector: "fractal_table.yaml"
      threshold: { min: 5 }  # ALWAYS FLAGSHIP = all 5 scales
      unit: count
    - check: direction_uniform
      method: table_verify
      selector: "fractal_table.yaml"
      threshold: { exact: true }
      unit: boolean
    - check: css_evidence_present
      method: table_verify
      selector: "fractal_table.yaml"
      threshold: { exact: true }
      unit: boolean
  fail_action: block_and_return

- gate_id: landmark_completeness
  stage: landmark
  enforcement: deliverable
  trigger: after_phase_4.7b
  require:
    - check: header_present
      method: dom_query
      selector: "header"
      threshold: { min: 1 }
      unit: count
    - check: footer_present
      method: dom_query
      selector: "footer"
      threshold: { min: 1 }
      unit: count
    - check: main_sections
      method: dom_query
      selector: "main section, main [data-zone]"
      threshold: { min: 2 }
      unit: count
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Add missing structural landmarks (header/main/footer)"

- gate_id: cascade_value_table
  stage: build_verify
  enforcement: deliverable
  trigger: after_phase_8
  require:
    - check: table_complete
      method: table_verify
      selector: "cascade_table.yaml"
      threshold: { exact: true }
      unit: boolean
    - check: multi_coherence_verified
      method: table_verify
      selector: "cascade_table.yaml"
      threshold: { min: 3 }  # >= 3 channels shift at every boundary
      unit: count
  fail_action: block_and_recipe
  fail_recipe:
    instruction: "Complete the cascade value table showing computed CSS at every boundary"

- gate_id: handoff_validation
  stage: handoff
  enforcement: deliverable
  trigger: after_wave_0.9
  require:
    - check: zone_count_valid
      method: file_parse
      selector: "_build-plan.md"
      threshold: { min: 2, max: 5 }
      unit: count
    - check: bg_colors_specified
      method: file_parse
      selector: "_build-plan.md"
      threshold: { min: 15 }
      unit: rgb_delta
    - check: grid_layouts_assigned
      method: file_parse
      selector: "_build-plan.md"
      threshold: { min: 2 }
      unit: count
    - check: per_category_mechs
      method: file_parse
      selector: "_build-plan.md"
      threshold: { min: 5 }  # S:1 + T:1 + M:1 + B:1 + R:1
      unit: count
    - check: transition_types
      method: file_parse
      selector: "_build-plan.md"
      threshold: { min: 3 }
      unit: count
  fail_action: block_and_return
```

**Key insight for Tier 2:** The handoff gate is currently semi-structured (orchestrator text-parses _build-plan.md). Under YAML-as-Schema, the TC planner outputs a structured `_build-plan.yaml` instead of `_build-plan.md`, making the handoff gate fully programmatic:

```yaml
# _build-plan.yaml (TC planner output format)
zone_count: 4
zones:
  - id: intro
    background: "#fefcf3"
    sections: [overview, context]
  - id: build
    background: "#f0ebe3"
    sections: [mechanism-analysis, evidence]
  - id: peak
    background: "#e8e0d5"
    sections: [synthesis, recommendations]
  - id: resolution
    background: "#fefcf3"
    sections: [next-steps, references]

bg_deltas:
  intro_to_build: 17   # >= 15: PASS
  build_to_peak: 11     # >= 15: FAIL -- needs adjustment
  peak_to_resolution: 17 # >= 15: PASS

mechanisms:
  spatial: [progressive-disclosure]
  temporal: [scroll-reveal]
  material: [paper-texture, warm-cool-warm-arc]
  behavioral: [hover-depth]
  relational: [border-weight-gradient]

grid_layouts: [grid-2col, grid-3col]
transitions: [SMOOTH, BRIDGE, BREATHING]

metaphor:
  name: "Geological Intentionality"
  structural: true  # Fresh-eyes validated
  isomorphism:
    strata: "layered backgrounds"
    pressure: "typography weight"
    erosion: "spacing compression"
```

This is the highest-leverage change in the entire YAML gate architecture: **make TC output structured data, not prose.** The handoff gate becomes Tier 1 (fully programmatic). The builder receives the same information but the ORCHESTRATOR can validate it before committing 90-150 minutes of Opus build time.

### Tier 3: AGENT SELF-CHECK (2 gates -- behavioral, structured attestation)

```yaml
- gate_id: metaphor_independence
  stage: tc_lockin
  enforcement: agent_self_check
  trigger: after_phase_3.5
  require:
    - check: derived_without_library
      method: agent_attestation
    - check: justifiable_without_library
      method: agent_attestation
    - check: not_in_library
      method: agent_attestation
  fail_action: block_and_return

- gate_id: metaphor_structural
  stage: metaphor_validation
  enforcement: agent_self_check  # Fresh-eyes agent, not self-assessment
  trigger: wave_0.5
  require:
    - check: suggests_specific_css
      method: agent_attestation
    - check: not_just_label
      method: agent_attestation
  fail_action: block_and_return
```

**Note:** The metaphor_structural gate (Wave 0.5) uses a DIFFERENT agent (fresh-eyes Opus) to attestate, which makes it stronger than typical Tier 3. It's still behavioral (an agent decides), but it's not self-assessment. This is the best we can do for subjective evaluation.

---

## 4. GATE CASCADING: HOW GATES REFERENCE EACH OTHER

A critical design feature: later gates can reference earlier gate outputs. This creates a verification chain where each stage builds on proven foundations.

```yaml
# Gate cascade chain
cascade:
  wave_0:
    handoff_validation:
      outputs:
        - _build-plan.yaml   # Structured TC output
      consumed_by:
        - sc_09_background_delta  # Wave 2 verifies bg deltas that handoff approved
        - sc_12_zone_count        # Wave 2 re-verifies zone count with actual DOM

  wave_1:
    landmark_completeness:
      outputs:
        - landmark_table.yaml
      consumed_by:
        - sc_06_aria_landmarks    # Wave 2 programmatically confirms ARIA
        - sc_07_skip_link         # Wave 2 programmatically confirms skip link

    fractal_consistency:
      outputs:
        - fractal_table.yaml
      consumed_by:
        - sc_14_multi_coherence   # Multi-coherence gate checks the SAME boundaries
                                   # that fractal table claims pattern at

  wave_2:
    sc_01_through_sc_14:
      outputs:
        - gate_results.yaml       # All 14 PASS/FAIL with measured values
      consumed_by:
        - pa_auditors             # PA weaver receives gate results for context
        - fix_cycle               # Builder receives failed gates with recipes

    cascade_value_table:
      outputs:
        - cascade_table.yaml
      consumed_by:
        - sc_14_multi_coherence   # Cross-validates builder's table vs computed
```

**The cascade principle:** Each stage PROVES something that the next stage can ASSUME. The handoff gate proves zone count is valid; the build stage doesn't need to re-derive it. The fractal gate proves pattern consistency; the PA auditors evaluate perceptual impact, not structural compliance.

**Cross-validation:** Some checks appear at multiple stages. Zone count is checked at handoff (from plan) AND at build_verify (from DOM). Background deltas are checked at handoff (from plan colors) AND at build_verify (from computed styles). This redundancy is intentional: the plan can be correct but the implementation wrong.

---

## 5. RECIPE GENERATION FROM FAILED GATES

The most operationally valuable feature: when a gate FAILS, it generates a targeted fix recipe. This is where YAML-as-Schema dramatically outperforms prose gates.

### Current failure mode (prose gate):
```
Gate SC-09 FAILED: Background delta between Zone 2 and Zone 3 is 8 RGB.
Fix: Increase delta to >= 15 RGB.
```
The builder receives this text and must figure out WHAT to change and HOW.

### YAML gate failure mode:
```yaml
# Automatically generated from gate_id: sc_09_background_delta
failure_report:
  gate: sc_09_background_delta
  status: FAIL
  measured:
    - boundary: "zone-2 to zone-3"
      zone_2_bg: "rgb(254, 252, 243)"  # #fefcf3
      zone_3_bg: "rgb(249, 248, 240)"  # #f9f8f0
      delta: { r: 5, g: 4, b: 3, max: 5 }
      threshold: { min: 15 }
      verdict: FAIL
    - boundary: "zone-1 to zone-2"
      zone_1_bg: "rgb(240, 235, 227)"  # #f0ebe3
      zone_2_bg: "rgb(254, 252, 243)"  # #fefcf3
      delta: { r: 14, g: 17, b: 16, max: 17 }
      threshold: { min: 15 }
      verdict: PASS

  fix_recipe:
    instruction: "Zone 3 background is too close to Zone 2. Increase delta."
    current_value: "#f9f8f0"
    suggested_values:
      - "#f0ebe3"  # delta=14,14,16 from Zone 2 -- matches Zone 1
      - "#ece5da"  # delta=8,7,9 from Zone 1 -- creates gradient
      - "#e8e0d5"  # delta=11,12,14 from Zone 1 -- warmer option
    css_fix: |
      .zone-3 { background-color: #f0ebe3; }  /* delta from zone-2: 14,14,16 */
    reference: "perception-thresholds.md, Section: Chromatic Channel"
```

**The builder receives:** Not "increase the delta" (vague) but "change `.zone-3` background from `#f9f8f0` to `#f0ebe3` because the current delta is 5 RGB and needs to be >= 15" (precise, actionable, with alternatives).

### Recipe Generation Protocol

```yaml
# When a gate fails, the gate runner:
recipe_generation:
  step_1: "Record all measured values that contributed to failure"
  step_2: "Look up fail_recipe from gate definition"
  step_3: "Substitute measured values into recipe template"
  step_4: "If gate has suggested_values, compute them from thresholds"
  step_5: "Output structured fix_recipe.yaml for builder consumption"
  step_6: "Append to _build-log.md for audit trail"
```

This eliminates the "generic fix it" instruction problem. Every failure produces a specific, CSS-ready recipe.

---

## 6. THE EXECUTION MODEL

### How does the gate runner work?

```
gate-runner.js (~400-500 lines)
  |
  |-- Reads: gates.yaml (all gate definitions)
  |-- Reads: output.html (the built page)
  |-- Reads: _build-plan.yaml (TC structured output)
  |-- Reads: fractal_table.yaml (builder deliverable)
  |-- Reads: cascade_table.yaml (builder deliverable)
  |
  |-- For each Tier 1 gate:
  |     |-- Launch Playwright
  |     |-- Run getComputedStyle queries per gate selector
  |     |-- Compare measured values to gate thresholds
  |     |-- Record PASS/FAIL + measured values
  |
  |-- For each Tier 2 gate:
  |     |-- Parse the deliverable YAML file
  |     |-- Validate structure against gate requirements
  |     |-- Compare parsed values to gate thresholds
  |     |-- Record PASS/FAIL + parsed values
  |
  |-- For each Tier 3 gate:
  |     |-- Parse the attestation YAML
  |     |-- Verify all required attestations present
  |     |-- Record PASS/FAIL (no threshold validation possible)
  |
  |-- Output: gate_results.yaml
  |     |-- Per-gate: PASS/FAIL, measured values, fix recipes
  |     |-- Summary: X/Y gates passed, blocking issues
  |
  |-- If ANY Tier 1 or Tier 2 gate FAILS:
  |     |-- Generate fix_recipe.yaml with specific fixes
  |     |-- Block pipeline from proceeding to PA
  |
  |-- If ALL gates PASS:
        |-- Proceed to PA (Wave 2, Layer 2)
```

### The gates.yaml file

All gate definitions live in a single file: `design-system/compositional-core/gates.yaml` (~200 lines). This is the canonical registry. The gate runner reads this file and executes every gate marked as `enforcement: programmatic` or `enforcement: deliverable`.

Benefits of a single registry:
1. **One place to add/modify/sunset gates** (vs. scattered prose in 5 files)
2. **Programmatic enumeration** -- gate runner doesn't need to know gate names in advance
3. **Version tracking** -- git diff shows exactly what changed
4. **Sunset protocol** -- gates with `metadata.sunset` get automatically flagged after N builds

---

## 7. CONTRAST WITH CURRENT APPROACH

### What YAML-as-Schema buys that prose doesn't:

| Property | Prose Gates | YAML-as-Schema |
|----------|-------------|----------------|
| Parseable by code | No (regex at best) | Yes (standard YAML parser) |
| Threshold values centralized | Scattered across 5 files | Single gates.yaml |
| Fix recipes generated | Generic "fix it" text | Specific CSS with measured values |
| Gate cascade possible | No (each gate is independent) | Yes (later gates reference earlier outputs) |
| Sunset tracking | Manual memory | Automated via metadata.sunset |
| Contradiction detection | Requires human reading all files | Code compares thresholds across gates |
| Builder deliverable format | Unstructured markdown tables | Structured YAML (machine-validatable) |
| New gate addition | Edit prose in the right file, hope runner handles it | Add YAML block to gates.yaml, runner picks it up |

### What YAML-as-Schema does NOT buy:

| Property | Prose Gates | YAML-as-Schema |
|----------|-------------|----------------|
| Agent compliance on self-checks | ~Same | ~Same (Tier 3 is still behavioral) |
| Metaphor quality evaluation | Subjective | Still subjective (no machine metric for "structural") |
| Compositional fluency | Not encodable | Still not encodable |
| PA-05 prediction | Not possible | Not possible |

**The honest boundary:** YAML-as-Schema makes MECHANICAL verification rigorous (Tier 1 + Tier 2) but cannot improve PERCEPTUAL evaluation (still requires human-like agents). The 3/4 to 4/4 gap is not addressable by structured gates -- it requires compositional intelligence that resists formalization.

---

## 8. IMPLEMENTATION COST AND COMPLEXITY

### Files to write:

| File | Lines | Purpose |
|------|-------|---------|
| `gates.yaml` | ~200 | Gate registry (all 18 gates defined) |
| `gate-runner.js` update | +150 | YAML parser + Tier 2 validation (currently ~300 -> ~450) |
| Builder output templates | ~50 | YAML templates for deliverable gates (fractal, cascade, etc.) |

**Total: ~400 lines of new/modified code.**

### Dependencies:
- `js-yaml` npm package for YAML parsing in gate-runner.js
- Builder agents must output structured YAML files alongside HTML (incremental change)
- TC planner must output `_build-plan.yaml` instead of `_build-plan.md` (moderate change)

### Risk:
- **Builder YAML output quality:** If the builder produces malformed YAML, Tier 2 gates fail on parsing, not on content. Mitigation: provide YAML templates in the recipe.
- **TC YAML transition:** Moving TC output from prose to structured YAML may reduce the planner's creative freedom. Mitigation: allow a `notes` field in the YAML for unstructured observations.
- **Over-formalization:** Adding too many Tier 2 gates could make the pipeline feel like filling out forms. Mitigation: keep Tier 2 to 4 gates (the current design); everything else is Tier 1 (invisible to the builder) or Tier 3 (lightweight attestation).

---

## 9. RECOMMENDATIONS

### R-01: ADOPT the 3-tier enforcement model
Tier 1 (programmatic) for all mechanical checks. Tier 2 (deliverable) for structured builder outputs. Tier 3 (agent self-check) only for genuinely subjective evaluation. Never use Tier 3 where Tier 1 or 2 is possible.

### R-02: ADOPT structured TC output (_build-plan.yaml)
This is the single highest-leverage change. It makes the handoff gate fully programmatic (Tier 1) and eliminates text-parsing ambiguity. The orchestrator can validate zone count, background deltas, mechanism counts, and transition types before committing builder time.

### R-03: ADOPT fix recipe generation from gate failures
Every Tier 1 and Tier 2 gate MUST have a `fail_recipe` with specific CSS. This transforms "gate failed, fix it" into "gate SC-09 failed at zone-2/zone-3 boundary, current delta is 5, change .zone-3 background to #f0ebe3 for delta 14."

### R-04: ADOPT cascade value table as required YAML deliverable
Move from Report B-07's recommendation to reality: the builder outputs `cascade_table.yaml` as a structured deliverable that the gate runner cross-validates against computed styles.

### R-05: REJECT YAML-as-Prompt for LLM-read gates
Do not express gates as YAML "for the LLM to follow." An LLM reading YAML is reading text. If a gate cannot be programmatically verified, express it as clear prose (which the LLM processes equally well) and classify it as Tier 3.

### R-06: ADOPT single gates.yaml registry
All gate definitions in one file. Gate runner reads this file. Adding a new gate = adding a YAML block. Sunsetting a gate = removing a YAML block. No more scattered threshold values across 5 files.

### R-07: ADOPT structured builder deliverables for Tier 2 gates
The builder must output `fractal_table.yaml`, `cascade_table.yaml`, and `landmark_table.yaml` as structured files alongside the HTML. The gate runner validates these programmatically. This is the key lever for making fractal consistency and landmark completeness genuinely enforceable (currently they are behavioral self-checks).

---

## 10. THE UNCOMFORTABLE TRUTH

The user's original insight -- "if it's text-based, they're just as good as any other words" -- is **exactly correct** for Tier 3 gates and **does not apply** to Tier 1 gates.

The PV2 pipeline already has the right instinct: Wave 2's 12 programmatic gates (SC-01 through SC-12) are Tier 1. They work because code runs them. The problem is that the other 6 gates (metaphor lock-in, fractal consistency, landmark completeness, handoff validation, cascade value table, metaphor structural validation) are Tier 3 behavioral self-checks disguised as mandatory gates.

The YAML architecture's real contribution is promoting 4 of those 6 gates from Tier 3 to Tier 1 or Tier 2:
- **Handoff validation:** Tier 3 -> Tier 1 (via structured TC output)
- **Fractal consistency:** Tier 3 -> Tier 2 (via structured builder deliverable)
- **Landmark completeness:** Tier 3 -> Tier 1 (via DOM query -- already possible!)
- **Cascade value table:** Tier 3 -> Tier 2 (via structured builder deliverable)

Two gates remain Tier 3 and cannot be promoted:
- **Metaphor independence:** Fundamentally subjective (did the agent truly derive independently?)
- **Metaphor structural:** Fundamentally subjective (does the metaphor suggest CSS?)

For those two, the honest answer is: **fresh-eyes agents are the enforcement mechanism, not structure.** Wave 0.5 (fresh-eyes metaphor validation) is the right approach. You cannot YAML your way to metaphor quality. You can only verify it with a second pair of eyes.

**The pipeline's quality ceiling is determined by what CAN'T be formalized (compositional fluency, metaphor quality, intentionality). The YAML gates maximize the quality FLOOR by formalizing everything that CAN be checked mechanically. The gap between floor and ceiling is where art lives.**

---

**END OF REPORT**

**Statistics:**
- Gates designed: 18 (14 Tier 1, 4 Tier 2, 2 Tier 3 -- up from 12 Tier 1, 0 Tier 2, 6 Tier 3)
- New programmatic gates: SC-13 (sub-perceptual prevention), SC-14 (multi-coherence)
- Gates promoted from behavioral to verifiable: 4 (handoff, fractal, landmark, cascade)
- Key architectural change: Structured TC output (_build-plan.yaml) makes handoff gate programmatic
- Honest limitation: 2 gates (metaphor independence, metaphor structural) remain subjective
- Total implementation cost: ~400 lines new/modified code + builder YAML output templates
