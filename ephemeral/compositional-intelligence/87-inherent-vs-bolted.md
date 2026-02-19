# INHERENT vs BOLTED ON: Architectural Pattern Analysis for PV2

**Author:** Architectural Patterns Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #87 -- Analyze which PV2 features are INHERENT vs BOLTED ON, and design patterns for making compositional intelligence inherent
**Sources:** PV2-PIPELINE-DIAGRAM.md (977 lines), 15-design-yaml-gates.md (822 lines), 19-design-programmatic-enforcement.md (1,013 lines), 29-meta-first-principles.md (477 lines)

---

## 0. THE DEFINING DISTINCTION

**INHERENT:** The system CANNOT produce output without invoking the feature. Removing it breaks the pipeline structurally. It is load-bearing.

**BOLTED ON:** The system CAN produce output without the feature. Removing it degrades quality but doesn't break anything. It is advisory.

The user's demand is precise: compositional intelligence must be INHERENT to PV2, not BOLTED ON. This means the pipeline must be architecturally incapable of producing a page without the compositional stack being invoked, consumed, and verified. Not "encouraged." Not "checked after the fact." STRUCTURALLY REQUIRED.

---

## 1. SOFTWARE ENGINEERING PATTERNS: INHERENT vs BOLTED ON

### Inherent Patterns (structure makes skipping impossible)

| Pattern | How It Works | Why Skipping Is Impossible |
|---------|-------------|--------------------------|
| **Type systems** | Code must match declared types at every interface | Compiler rejects type mismatches before execution begins |
| **Database schemas** | Data must match column types, NOT NULL, foreign keys | INSERT fails if payload doesn't match schema |
| **API contracts** | Request rejected if payload doesn't match OpenAPI spec | Server returns 400 before any business logic runs |
| **Compilation dependency** | Module A imports Module B; B must exist and compile | Linker fails if dependency is missing |
| **Template engines** | Output can't render unless all `{{variables}}` are filled | Template throws on undefined variable |
| **Pipeline stages with typed handoffs** | Stage N produces artifact X; Stage N+1's function signature requires X as input | Stage N+1 literally cannot execute without X |
| **Middleware chains** | HTTP request must pass through auth middleware before reaching handler | Framework enforces ordering; handler never fires without middleware approval |
| **Build systems (Make/Bazel)** | Target A depends on Target B; B is built first automatically | Dependency graph is resolved by tool, not by convention |
| **State machines** | Transition from State A to State C requires passing through State B | Invalid transitions are rejected by the machine |

**Common property:** The SYSTEM enforces the constraint. A developer (or agent) who wants to skip it CANNOT, because the code/tool/framework prevents execution.

### Bolted On Patterns (can be skipped without breaking)

| Pattern | How It Works | Why Skipping Is Easy |
|---------|-------------|---------------------|
| **Code comments** | Explain intent inline | Code runs identically without them |
| **Linting rules** | Flag style violations | Can be disabled with `// eslint-disable` or `--no-verify` |
| **Style guides** | Document conventions | Advisory; no enforcement mechanism |
| **Code review** | Human reviews before merge | Can be bypassed (force push, admin merge) |
| **Documentation** | Explain system behavior | System works without it |
| **Test suites** (when not in CI) | Verify behavior | Tests can be skipped; code deploys anyway |
| **Logging** | Record system behavior | System functions without logs |
| **README files** | Explain project setup | Project builds without them |
| **Git hooks** | Run checks on commit | Can be skipped with `--no-verify` |

**Common property:** The constraint is ADVISORY. A developer who wants to skip it CAN, because nothing in the system prevents execution without it.

### The Critical Insight

The difference between inherent and bolted-on is NOT about importance. Logging is often MORE important than type checking for production debugging. But logging is bolted on (system runs without it) while type checking is inherent (system won't compile without it).

**For PV2, the question is not "Is compositional intelligence important?" (obviously yes) but "Can the pipeline produce output WITHOUT it?" If yes, it's bolted on regardless of how many documents say it's mandatory.**

---

## 2. PV2 CURRENT STATE: INHERENT vs BOLTED ON CLASSIFICATION

### What Is Currently INHERENT

| Feature | Why It's Inherent | Mechanism |
|---------|------------------|-----------|
| **TC planner invocation** | Orchestrator's first action is spawning TC. Without TC, there is no `_build-plan.md`. Without `_build-plan.md`, the builder has no zone map, no mechanism deployment, no background colors. Builder LITERALLY CANNOT START. | **Artifact dependency:** Builder's input files include `_build-plan.md` which only TC produces |
| **Content markdown as input** | `/build-page content.md` requires the file to exist. Without it, the orchestrator has nothing to analyze. | **Function parameter:** The entry point takes a file path; no file = no execution |
| **Soul constraints (partially)** | `prohibitions.md` is one of the builder's 6 input files. If it doesn't exist, the builder's recipe references a missing file. | **Input dependency:** Builder is told to "read prohibitions.md." But reading =/= following. Enforcement is via gates (bolted on until gates run). |

**That's it.** Only 2-3 features are structurally inherent in the current design. Everything else is advisory or post-hoc.

### What Is Currently BOLTED ON

| Feature | Why It's Bolted On | Evidence |
|---------|-------------------|---------|
| **Perception thresholds** | Text in the recipe tells the builder ">= 15 RGB delta." Gate SC-09 checks AFTER the build is complete. The builder CAN produce a page with 3 RGB deltas. The gate catches it after 90-150 min of work. | Builder follows text instructions; gate is post-hoc verification |
| **Recipe phases (9-phase sequence)** | The recipe says "Phase 0, then Phase 1, then Phase 2..." but nothing prevents the builder from writing all CSS in one pass. The "mandatory checkpoints" are text instructions the orchestrator sends, but the builder could ignore them (write output.html in one shot, skip intermediate saves). | Text instructions with no structural enforcement |
| **Soul constraints (enforcement)** | `prohibitions.md` is read, but compliance is verified by gates AFTER building. The builder CAN write `border-radius: 8px`. Gate SC-02 catches it. But the build happened. The CSS was written. The violation was only detected post-hoc. | Post-hoc gate verification |
| **Metaphor validation (Wave 0.5)** | A fresh-eyes agent evaluates the metaphor. But if the orchestrator has a bug or the agent is unavailable, the pipeline continues to Wave 1. The metaphor validation is a QUALITY CHECK, not a DEPENDENCY. The builder doesn't consume a "metaphor_validated: true" token. | Quality gate, not structural dependency |
| **Handoff validation (Wave 0.9)** | 5 binary checks on `_build-plan.md`. If any fail, TC is re-invoked. But if the orchestrator skips this step (bug, timeout, race condition), the builder still receives the plan and builds. Nothing in the builder's execution REQUIRES a handoff validation token. | Quality gate, not structural dependency |
| **Multi-coherence (>= 3 channels)** | Gate SC-14 checks after building. The builder CAN produce a page where only background changes between zones. The gate catches it. But 90-150 min of work happened first. | Post-hoc gate verification |
| **Component library adoption (>= 10/26)** | Recipe tells builder to use >= 10 library classes. Gate SC-08 checks after. Builder CAN use 0 library classes and write custom CSS for everything. | Text instruction + post-hoc check |
| **Accessibility (WCAG 2.1 AA)** | Phase 7 in the recipe says "add accessibility." Gates SC-06, SC-07 check landmarks and skip link. But if the builder skips Phase 7, the page renders. Accessibility is a quality attribute, not a structural requirement for HTML output. | Text instruction + post-hoc check |
| **Cascade value table** | Phase 8 says "produce a cascade value table." But if the builder doesn't produce it, the page still exists. The table is a DELIVERABLE, not a DEPENDENCY for anything downstream. (The gate runner doesn't consume it as input.) | Optional deliverable, nothing depends on it |
| **Fix cycle (Wave 3)** | If PA-05 < 3/4, the fix cycle runs. But if the orchestrator decides to skip Wave 3 (e.g., due to timeout), the page still exists. It just hasn't been fixed. | Quality improvement loop, not structural requirement |
| **Inter-agent communication (5 checkpoints)** | The recipe specifies 5 "planner approval checkpoints." But the planner is a different agent. If the planner doesn't respond (timeout, crash), the builder continues building. Nothing blocks the builder's CSS output except text instructions. | Communication protocol, not structural dependency |

### The Brutal Summary

**PV2's compositional stack is almost entirely bolted on.** The ONLY inherent feature is TC invocation (because the builder needs `_build-plan.md`). Everything else -- perception thresholds, recipe phases, soul enforcement, metaphor validation, multi-coherence, accessibility, component adoption -- is either:

1. **Text instructions** the builder is told to follow (and may not)
2. **Post-hoc gates** that check after 90-150 min of work (expensive failure)
3. **Communication protocols** that can be skipped without breaking output

This is the architectural equivalent of a building where the fire code compliance is checked by an inspector after construction is complete, rather than being enforced by the structural design (fire doors that physically cannot be propped open, sprinklers that activate automatically).

---

## 3. PATTERNS FOR MAKING COMPOSITIONAL INTELLIGENCE INHERENT

### Pattern 1: Template HTML with Required Slots

**Software analogy:** Template engines (Mustache, Jinja, Handlebars) that throw on undefined variables.

**Application to PV2:**

Instead of giving the builder a blank canvas and saying "write HTML," give the builder a TEMPLATE HTML file with required slots:

```html
<!-- template.html — builder MUST fill all {{SLOT}} placeholders -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{PAGE_TITLE}}</title>
  <style>
    /* === SOUL (pre-filled, immutable) === */
    * { border-radius: 0; box-shadow: none; }
    main { max-width: 960px; margin: 0 auto; }

    /* === ZONE BACKGROUNDS (builder fills) === */
    [data-zone="1"] { background: {{ZONE_1_BG}}; }
    [data-zone="2"] { background: {{ZONE_2_BG}}; }
    /* ... (one per zone from build plan) */

    /* === TYPOGRAPHY (builder fills) === */
    .display { font-size: {{DISPLAY_SIZE}}; font-family: {{DISPLAY_FONT}}; }
    .body { font-size: {{BODY_SIZE}}; font-family: {{BODY_FONT}}; }
    .detail { font-size: {{DETAIL_SIZE}}; font-family: {{DETAIL_FONT}}; }

    /* === BUILDER CSS (free zone) === */
    {{BUILDER_CSS}}
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <header>{{HEADER_CONTENT}}</header>
  <main id="main" role="main">
    <section data-zone="1" aria-label="{{ZONE_1_LABEL}}">
      {{ZONE_1_CONTENT}}
    </section>
    <section data-zone="2" aria-label="{{ZONE_2_LABEL}}">
      {{ZONE_2_CONTENT}}
    </section>
    <!-- ... (one per zone from build plan) -->
  </main>
  <footer>{{FOOTER_CONTENT}}</footer>

  <!-- === CASCADE VALUE TABLE (required slot) === -->
  <!-- {{CASCADE_TABLE}} -->
</body>
</html>
```

**Why this is INHERENT:**
- Soul CSS is PRE-FILLED and IMMUTABLE. The builder can't remove `border-radius: 0` because it's in the template, not in the builder's CSS section.
- Zone structure is PRE-DETERMINED by TC's build plan. The builder fills content into zones, not creates zones.
- Skip link, ARIA landmarks, header/footer are IN THE TEMPLATE. The builder can't forget them because they're already there.
- The template has REQUIRED SLOTS (`{{ZONE_1_BG}}`, `{{DISPLAY_SIZE}}`, etc.). If the builder doesn't fill them, the HTML is literally broken (undefined placeholders render as text).
- The cascade value table is a REQUIRED SLOT, not an optional deliverable.

**What this pattern makes inherent:** Soul constraints, zone structure, accessibility landmarks, typography slots, cascade table.

**What this pattern CANNOT make inherent:** The QUALITY of the builder's CSS in the free zone. Whether `{{ZONE_1_BG}}` is perceptually different from `{{ZONE_2_BG}}`. Whether typography choices serve the content. These still require gates.

**Effort:** The orchestrator must generate the template from TC's build plan. This is ~50-80 lines of template generation code. The builder receives a partially-filled HTML file instead of a blank canvas.

---

### Pattern 2: Phase-Locked Build (Orchestrator Withholds Instructions)

**Software analogy:** State machines where transitions require guard conditions.

**Application to PV2:**

The orchestrator does NOT give the builder all 9 phases at once. It gives Phase N, waits for the builder to save, runs Gate N, and ONLY THEN provides Phase N+1 instructions.

```
ORCHESTRATOR STATE MACHINE:

  [INIT] --TC_complete--> [PHASE_0_1]

  [PHASE_0_1] --builder_saves--> [GATE_1]

  [GATE_1] --PASS--> [PHASE_2_3]
  [GATE_1] --FAIL--> [FIX_1] --builder_fixes--> [GATE_1]  (max 3)
  [GATE_1] --FAIL_3x--> [ESCALATE]

  [PHASE_2_3] --builder_saves--> [GATE_2]

  [GATE_2] --PASS--> [PHASE_4]
  [GATE_2] --FAIL--> [FIX_2] --builder_fixes--> [GATE_2]
  ...

  [PHASE_8] --builder_saves--> [GATE_5]
  [GATE_5] --PASS--> [PA_AUDIT]
  [GATE_5] --FAIL--> [FIX_5] --builder_fixes--> [GATE_5]

  [PA_AUDIT] --PA_05_gte_3--> [SHIP]
  [PA_AUDIT] --PA_05_lt_3--> [FIX_CYCLE] (max 3)
```

**Why this is INHERENT:**
- The builder NEVER SEES Phase 4 instructions until Gate 2 passes. It's not that the builder is "told" to do phases in order -- the builder PHYSICALLY CANNOT ACCESS later phase instructions until earlier gates pass.
- This is the same pattern as compilation: you can't link until you compile. The orchestrator is the build system.
- Fix cycles are INLINE, not deferred. A failing gate at Phase 3 gets fixed at Phase 3, not discovered at Phase 8.

**What this pattern makes inherent:** Phase ordering, mid-build verification, early failure detection.

**What this pattern CANNOT make inherent:** The quality of work within each phase. The builder still receives text instructions for each phase. Within a phase, the builder has full freedom (and full ability to produce mediocre CSS).

**Effort:** The orchestrator must implement a state machine instead of a linear script. This is ~100-150 lines of state management code. Report 19 (programmatic enforcement) already designs this pattern in Section 5 with the ORCHESTRATOR-BUILDER sequence diagram.

---

### Pattern 3: Structured Handoff Artifacts (Schema-Validated)

**Software analogy:** API contracts (OpenAPI/Swagger) where requests are validated against a schema before processing.

**Application to PV2:**

TC's output is not prose markdown but structured YAML. The handoff gate is not a text-parsing approximation but a schema validation:

```yaml
# _build-plan.yaml (TC outputs this)
# Schema: build-plan-schema.yaml
zone_count: 4
zones:
  - id: intro
    background: "#fefcf3"
    sections: [overview, context]
    aria_label: "Introduction"
  - id: build
    background: "#f0ebe3"
    sections: [mechanism-analysis, evidence]
    aria_label: "Core Analysis"
  # ...

bg_deltas:
  intro_to_build: 17    # >= 15: PASS
  build_to_peak: 22     # >= 15: PASS

mechanisms:
  spatial: [progressive-disclosure]
  temporal: [scroll-reveal]
  material: [paper-texture]
  behavioral: [hover-depth]
  relational: [border-weight-gradient]

transitions:
  - type: SMOOTH
    between: [intro, build]
  - type: BRIDGE
    between: [build, peak]
  - type: BREATHING
    between: [peak, resolution]

metaphor:
  name: "Geological Strata"
  structural_validated: true
  isomorphism:
    strata: "layered backgrounds with depth progression"
    pressure: "typography weight increases in dense sections"
    erosion: "spacing contracts toward resolution"
```

The orchestrator validates this against a JSON Schema BEFORE passing it to the builder:

```json
{
  "required": ["zone_count", "zones", "bg_deltas", "mechanisms", "transitions"],
  "properties": {
    "zone_count": { "type": "integer", "minimum": 2, "maximum": 5 },
    "zones": {
      "type": "array",
      "minItems": 2,
      "maxItems": 5,
      "items": {
        "required": ["id", "background", "sections", "aria_label"],
        "properties": {
          "background": { "type": "string", "pattern": "^#[0-9a-fA-F]{6}$" }
        }
      }
    },
    "mechanisms": {
      "required": ["spatial", "temporal", "material", "behavioral", "relational"],
      "properties": {
        "spatial": { "type": "array", "minItems": 1 },
        "temporal": { "type": "array", "minItems": 1 },
        "material": { "type": "array", "minItems": 1 },
        "behavioral": { "type": "array", "minItems": 1 },
        "relational": { "type": "array", "minItems": 1 }
      }
    },
    "transitions": { "type": "array", "minItems": 3 }
  }
}
```

**Why this is INHERENT:**
- TC CANNOT pass the handoff gate without producing a valid YAML file. Invalid YAML = schema validation failure = pipeline blocked.
- Per-category mechanism minimums (S/T/M/B/R >= 1) are SCHEMA CONSTRAINTS, not text instructions. TC's output is rejected if any category has zero mechanisms.
- Background colors are PARSED, not read. The delta check runs on parsed hex values, not on text that says "use warm colors."
- The builder receives structured data, not prose. Zone backgrounds are hex values, not descriptions.

**What this pattern makes inherent:** Per-category mechanism minimums, zone count bounds, background color specification, transition count minimum, ARIA labels for every zone.

**What this pattern CANNOT make inherent:** Whether the mechanisms are APPROPRIATE for the content (TC can output any mechanism from the catalog; schema can't judge fit). Whether the metaphor is structural (still requires fresh-eyes agent). Whether the background color CHOICES express the right mood.

**Effort:** Report 15 (YAML gates) already designs this in full detail, including the schema, the TC output format, and the validation code. Estimated: ~200 lines of schema + ~50 lines of validation code.

---

### Pattern 4: Immutable Preamble (Pre-Baked Constraints)

**Software analogy:** HTTP security headers set at the reverse proxy level (the application can't remove them).

**Application to PV2:**

The orchestrator WRITES the first ~50 lines of the HTML file before the builder ever touches it. These lines contain soul constraints, accessibility infrastructure, and structural scaffolding that the builder CANNOT MODIFY because the builder's instructions say "append to this file, do not modify lines 1-50."

But "do not modify" is a text instruction (bolted on!). To make it truly inherent:

**The orchestrator uses TWO files:**
1. `preamble.html` -- immutable, written by orchestrator
2. `builder-content.html` -- written by builder

The final `output.html` is ASSEMBLED by the orchestrator concatenating preamble + builder content. The builder never sees or touches the preamble.

```
ORCHESTRATOR generates preamble.html:
  - <!DOCTYPE html>, <html>, <head>
  - Soul CSS reset (border-radius: 0, box-shadow: none, max-width: 960px)
  - Skip link HTML
  - <main> open tag
  - Zone <section> shells with data-zone attributes and aria-labels

BUILDER writes builder-content.html:
  - Zone content (fills section shells)
  - Typography CSS
  - Mechanism CSS (backgrounds, borders, transitions, richness)
  - Component HTML within zone shells

ORCHESTRATOR assembles output.html:
  - Concatenates preamble + builder CSS + builder HTML
  - Validates soul constraints survive (gates)
  - The preamble's CSS comes FIRST in cascade; builder can override
    individual properties but cannot remove the soul rules
```

**Why this is INHERENT:**
- The builder NEVER WRITES the soul CSS. It's pre-baked. The builder's CSS is injected AFTER the soul, so it can add but not subtract (CSS cascade: later rules override, but `!important` in the preamble prevents override).
- Skip link, ARIA landmarks, zone structure are in the preamble. The builder doesn't need to remember them.
- The builder works in a SANDBOX: their CSS and HTML get injected into a pre-existing structure.

**What this pattern makes inherent:** Soul CSS (border-radius: 0, box-shadow: none, container width), skip link, zone structure, ARIA landmarks.

**What this pattern CANNOT make inherent:** The quality of the builder's CSS. The builder still makes all creative decisions within the sandbox.

**Effort:** ~80-100 lines of preamble generation code. The builder's instructions change from "write a full HTML page" to "write CSS and content that fills these zone shells."

---

### Pattern 5: Consumption Verification (Prove You Read It)

**Software analogy:** Digital signatures on read receipts; cryptographic proof of data access.

**Application to PV2:**

The orchestrator embeds UNIQUE TOKENS in each reference file. The builder must include these tokens in its output as proof that it read and consumed each file.

```
mechanism-catalog.md contains at line 1:
  <!-- BUILD_TOKEN: MC-7f3a -->

tokens.css contains at line 1:
  /* BUILD_TOKEN: TC-9b2d */

perception-thresholds.md contains at line 1:
  <!-- BUILD_TOKEN: PT-4e1c -->
```

The builder's output.html must contain ALL tokens in an HTML comment:

```html
<!-- BUILD_CONSUMED: MC-7f3a, TC-9b2d, PT-4e1c, PR-8d5f, CC-2a7b, BP-6c3e -->
```

The gate runner verifies ALL 6 tokens are present. Missing token = FAIL.

**Why this is INHERENT (weakly):**
- The builder MUST reference each file to extract the token. This forces the file to be opened. Opening a file doesn't guarantee reading, but it eliminates the failure mode of "didn't load the file at all."
- The tokens change per build (generated by orchestrator), so the builder can't memorize them.

**Why this is only WEAKLY inherent:**
- The builder could extract the token from line 1 without reading the rest of the file. This is the "I signed the terms of service without reading them" problem.
- This pattern catches NEGLIGENCE (forgot to load file) but not SUPERFICIAL READING (loaded file, skimmed it).

**Better variant: Content-dependent tokens:**

Instead of a static token at line 1, the token is DERIVED from the file's content:

```
The builder must report:
  - From mechanism-catalog.md: the NAME of the 12th mechanism listed
  - From tokens.css: the HEX VALUE of --color-bg-secondary
  - From perception-thresholds.md: the EXACT NUMBER for stacked-gap maximum
```

This forces the builder to actually READ specific parts of each file.

**Effort:** ~30 lines of token generation + ~20 lines of token verification. Content-dependent variant requires ~50 lines of question generation.

---

### Pattern 6: Required Artifact Chain (Downstream Consumption)

**Software analogy:** Unix pipes where each stage's stdout is the next stage's stdin.

**Application to PV2:**

Every intermediate artifact is CONSUMED by a downstream stage, not just PRODUCED and checked:

```
TC outputs _build-plan.yaml
  |
  v
TEMPLATE GENERATOR consumes _build-plan.yaml
  -> generates template.html with zone shells
  -> generates builder-brief.md with zone-specific instructions
  |
  v
BUILDER consumes template.html + builder-brief.md
  -> fills zones, writes CSS
  -> MUST output cascade_table.yaml
  |
  v
GATE RUNNER consumes cascade_table.yaml + output.html
  -> cross-validates cascade table against computed styles
  -> if they MATCH: builder was honest
  -> if they DIVERGE: builder fabricated the table
  |
  v
PA WEAVER consumes gate_results.yaml
  -> knows which gates passed/failed
  -> can weight PA questions toward known weak areas
```

**Why this is INHERENT:**
- The cascade value table is not just a deliverable -- it's CONSUMED by the gate runner for cross-validation. If the builder doesn't produce it, the gate runner has nothing to cross-validate against, and that gate FAILS.
- The template is not optional -- it's the INPUT to the builder. Without it, the builder has no zone structure to fill.
- The PA weaver doesn't just read screenshots -- it reads gate results. This means the PA is INFORMED by the programmatic layer, creating a verification chain.

**What this pattern makes inherent:** Cascade value table production, template consumption, gate-PA information flow.

**Effort:** ~50 lines of cross-validation code in the gate runner.

---

## 4. THE CLASSIFICATION MATRIX

For each layer of PV2's compositional stack, here is the current state and the pattern(s) that would make it inherent:

| Layer | Current State | Pattern to Apply | Post-Pattern State | Confidence |
|-------|-------------|-----------------|-------------------|------------|
| **TC invocation** | INHERENT (builder needs _build-plan) | None needed | INHERENT | 99% |
| **Content input** | INHERENT (entry point requires file) | None needed | INHERENT | 99% |
| **Soul CSS** | BOLTED ON (text + post-hoc gate) | Pattern 4 (immutable preamble) | INHERENT | 95% |
| **Zone structure** | BOLTED ON (text instruction) | Pattern 1 (template) + Pattern 3 (schema) | INHERENT | 90% |
| **Perception thresholds** | BOLTED ON (text + post-hoc gate) | Pattern 2 (phase-locked) + gate at Phase 3 | INHERENT (at phase level) | 85% |
| **Per-category mechanisms** | BOLTED ON (text instruction) | Pattern 3 (schema-validated TC output) | INHERENT (at planning level) | 90% |
| **Phase ordering** | BOLTED ON (text instruction) | Pattern 2 (phase-locked build) | INHERENT | 90% |
| **Accessibility** | BOLTED ON (Phase 7 text instruction) | Pattern 4 (preamble has skip link, ARIA) | INHERENT (structural) | 85% |
| **Component library adoption** | BOLTED ON (text instruction + gate) | Pattern 1 (template includes library classes) | PARTIALLY INHERENT | 70% |
| **Cascade value table** | BOLTED ON (optional deliverable) | Pattern 6 (gate runner consumes it) | INHERENT | 85% |
| **Multi-coherence** | BOLTED ON (post-hoc gate) | Pattern 2 (phase-locked) checks at Phase 4 | INHERENT (at phase level) | 75% |
| **Metaphor validation** | BOLTED ON (quality gate) | Pattern 3 (schema requires `structural_validated: true` from fresh-eyes agent before template generation) | INHERENT | 80% |
| **Inter-agent communication** | BOLTED ON (protocol) | Pattern 2 (orchestrator mediates) | PARTIALLY INHERENT | 65% |
| **Fix cycle** | BOLTED ON (quality loop) | Already inherent IF gates are inherent | INHERENT (conditional) | 80% |
| **Compositional quality** | BOLTED ON (PA assessment) | **CANNOT BE MADE INHERENT** | BOLTED ON (irreducibly) | N/A |

### The Irreducible Residual

**Compositional quality (PA-05 score) CANNOT be made structurally inherent.** No template, schema, state machine, or artifact chain can guarantee that a page FEELS designed. The 70/30 split from Report 19 applies:

- **70% of failures are mechanically preventable** (inherent patterns catch them)
- **30% of quality is perceptual/compositional** (irreducibly requires judgment)

This 30% is where the PA audit lives. It is NECESSARILY bolted on because quality judgment is not structurally encodable. The goal is not to make EVERYTHING inherent -- it's to make everything MECHANICALLY VERIFIABLE inherent, so the PA audit only needs to evaluate the 30% that requires judgment.

---

## 5. THE INHERENT PV2 ARCHITECTURE

Combining all 6 patterns into a single architecture:

```
USER: /build-page content.md
  |
  v
ORCHESTRATOR reads content.md
  |
  v
[TC PLANNER] (Opus, Phases 0-3.5)
  -> Outputs: _build-plan.yaml (SCHEMA-VALIDATED)         [Pattern 3]
  -> Schema validates: zone_count, bg_deltas, mechanisms,
     transitions, ARIA labels
  -> FAIL = TC re-invoked with specific schema errors
  |
  v
[FRESH-EYES AGENT] validates metaphor
  -> Outputs: metaphor_validation.yaml
     { structural: true/false }
  -> If false: TC re-invoked OR flat mode
  -> _build-plan.yaml updated: structural_validated: true   [Pattern 3]
  |
  v
[TEMPLATE GENERATOR] (code, not agent)
  -> Consumes: _build-plan.yaml                             [Pattern 6]
  -> Produces: template.html with:
     - Soul CSS (immutable, !important)                     [Pattern 4]
     - Zone <section> shells from plan                      [Pattern 1]
     - Skip link, ARIA landmarks (pre-baked)                [Pattern 4]
     - Required slots: {{ZONE_N_BG}}, {{DISPLAY_SIZE}},
       {{BUILDER_CSS}}, {{ZONE_N_CONTENT}}                  [Pattern 1]
     - Build tokens from each reference file                [Pattern 5]
  -> Produces: builder-brief.md (~100 lines)
     - Semantic direction from TC
     - Perception thresholds (extracted from plan)
     - Reference file list with consumption tokens
  |
  v
[PHASE-LOCKED BUILD] (Single Opus Builder)                  [Pattern 2]
  |
  |-- ORCHESTRATOR sends: "Fill template Phases 0-1."
  |   BUILDER saves intermediate.html
  |   GATE 1 runs (structural checks)
  |   GATE 1 PASS -> proceed
  |   GATE 1 FAIL -> fix instructions sent, re-run (max 3)
  |
  |-- ORCHESTRATOR sends: "Execute Phases 2-3."
  |   BUILDER saves intermediate.html
  |   GATE 2 runs (perception checks: bg deltas, warm palette)
  |   GATE 2 PASS -> proceed
  |   GATE 2 FAIL -> fix recipe with measured values
  |
  |-- ORCHESTRATOR sends: "Execute Phase 4."
  |   BUILDER saves intermediate.html
  |   GATE 3 runs (borders, container width, multi-coherence)
  |   ...
  |
  |-- ORCHESTRATOR sends: "Execute Phase 5."
  |   GATE 4 (typography zones, soul re-check)
  |   ...
  |
  |-- ORCHESTRATOR sends: "Execute Phases 6-7-8. Produce cascade_table.yaml."
  |   BUILDER saves output.html + cascade_table.yaml        [Pattern 6]
  |   GATE 5 runs ALL checks:
  |     - Regression of Gates 1-4
  |     - Cascade table cross-validation (table vs computed)
  |     - Build token verification (all 6 present)          [Pattern 5]
  |     - Accessibility (focus styles, reduced motion, print)
  |
  v
[PA AUDIT] (9 fresh-eyes Opus auditors)
  -> Consumes: screenshots (pre-captured by lead)
  -> Consumes: gate_results.yaml (knows what passed/failed) [Pattern 6]
  -> Produces: PA-05 score + top-3 issues
  |
  v
[FIX CYCLE] (max 3 iterations)
  -> Builder receives specific PA findings + gate fix recipes
  -> Quick 2-PA re-check
  -> Until PA-05 >= 3/4 or escalate
  |
  v
OUTPUT: output.html + _pa-report.md + _build-log.md
```

### What Is Now INHERENT (that wasn't before)

| Feature | Was | Now | How |
|---------|-----|-----|-----|
| Soul CSS | Bolted on | INHERENT | Immutable preamble with !important |
| Zone structure | Bolted on | INHERENT | Template generated from schema-validated plan |
| Perception thresholds | Bolted on | INHERENT at phase level | Phase-locked gates block progress on violation |
| Per-category mechanisms | Bolted on | INHERENT at planning | Schema rejects plan without S/T/M/B/R >= 1 |
| Phase ordering | Bolted on | INHERENT | State machine; builder can't access Phase N+1 without Gate N pass |
| Accessibility (structural) | Bolted on | INHERENT | Pre-baked in template (skip link, ARIA, landmarks) |
| Cascade value table | Bolted on | INHERENT | Gate runner consumes it; missing = FAIL |
| Metaphor validation | Bolted on | INHERENT | Template generation requires `structural_validated: true` in plan |
| Reference file consumption | Bolted on | WEAKLY INHERENT | Build tokens prove file access |

### What Remains BOLTED ON (irreducibly)

| Feature | Why It Can't Be Inherent |
|---------|------------------------|
| Compositional quality (PA-05) | Requires perceptual judgment; no structure can encode "feels designed" |
| Metaphor-CSS fit | Whether the metaphor ACTUALLY drives CSS is subjective |
| Content-mechanism appropriateness | Whether spatial-progressive-disclosure FITS this content is judgment |
| Typography aesthetic rightness | Whether 28px display + 16px body LOOKS right is perceptual |
| Transition grammar fitness | Whether SMOOTH fits this content boundary is subjective |
| Channel coherence direction | Whether 3 changing channels move in the SAME semantic direction is judgment |

These are the irreducible 30%. They are WHERE THE PA AUDIT LIVES. The PA's job is narrowed from "check everything" to "check the things that structure cannot encode."

---

## 6. COST-BENEFIT ANALYSIS

### Implementation Cost

| Pattern | Lines of Code | Complexity | Risk |
|---------|-------------|-----------|------|
| 1. Template with slots | ~80-100 (template gen) | Low | Template may constrain unexpected content structures |
| 2. Phase-locked build | ~100-150 (state machine) | Medium | Orchestrator complexity increases; timeout handling needed |
| 3. Schema-validated handoff | ~200 (schema) + ~50 (validator) | Medium | TC must output YAML (moderate change to TC skill) |
| 4. Immutable preamble | ~80-100 (preamble gen) | Low | !important CSS may conflict with builder's creative CSS |
| 5. Build tokens | ~50-80 (token gen + verify) | Low | Tokens prove access, not comprehension |
| 6. Artifact chain | ~50 (cross-validation) | Low | Requires cascade_table.yaml schema |

**Total: ~610-730 lines of enforcement code.**

This is ON TOP of PV2's planned ~1,605 lines. But much of it REPLACES existing code (the gate runner grows by ~150 lines, the orchestrator skill gets ~250 lines of state machine instead of ~205 lines of linear script, and the preamble/template generation replaces some of the recipe).

### Net Benefit

| Metric | Current PV2 | Inherent PV2 | Change |
|--------|------------|-------------|--------|
| Features that are INHERENT | 2-3 | 12-14 | +10-11 |
| Features that are BOLTED ON | 12-14 | 5-6 (irreducible) | -7-8 |
| Failure detection point | After 90-150 min (post-hoc gates) | After 10-30 min (phase gates) | 3-5x earlier |
| Builder can bypass soul | Yes (override CSS) | No (immutable preamble) | Structural guarantee |
| Builder can skip phases | Yes (text instruction) | No (state machine) | Structural guarantee |
| TC can omit mechanism categories | Yes (text instruction) | No (schema validation) | Structural guarantee |
| Cascade table is optional | Yes | No (gate requires it) | Structural guarantee |

---

## 7. RECOMMENDATIONS

### R-01: ADOPT Pattern 3 (Schema-Validated Handoff) FIRST
This is the highest-leverage change. It makes per-category mechanisms, zone count, background deltas, and transition count STRUCTURALLY REQUIRED. The TC planner CANNOT pass the handoff gate without them. Report 15 already designs this in detail.

### R-02: ADOPT Pattern 4 (Immutable Preamble) SECOND
This is the cheapest change with the most visible guarantee. Soul constraints become impossible to violate. Skip link and ARIA landmarks are pre-baked. The builder works in a sandbox.

### R-03: ADOPT Pattern 2 (Phase-Locked Build) THIRD
This makes phase ordering inherent and enables early failure detection. Instead of discovering background delta violations after 90-150 min, they're caught at the Phase 3 gate (~30 min in).

### R-04: ADOPT Pattern 1 (Template with Slots) alongside Pattern 4
The template provides zone structure from the validated plan. Combined with the immutable preamble, the builder receives a partially-built page rather than a blank canvas.

### R-05: ADOPT Pattern 6 (Artifact Chain) for cascade value table
Making the cascade table a consumed artifact (not just a deliverable) ensures it's produced AND honest (cross-validated against computed styles).

### R-06: CONSIDER Pattern 5 (Build Tokens) as optional enhancement
This is the weakest pattern (proves file access, not comprehension). Implement only if evidence shows builders are not loading reference files.

### R-07: ACCEPT that compositional quality CANNOT be made inherent
The 30% residual is real. The PA audit is NECESSARILY bolted on because quality judgment is not structurally encodable. The goal is to make the PA's job as narrow as possible by handling the 70% with inherent patterns.

---

## 8. THE ANALOGY THAT CAPTURES IT

Current PV2 is a highway with speed limit SIGNS and speed cameras. The signs say "60 mph." The cameras catch violators. But a driver CAN go 90 mph until a camera catches them.

Inherent PV2 is a highway with SPEED BUMPS and PHYSICAL BARRIERS. The speed bumps enforce 60 mph. The barriers prevent wrong-way driving. A driver CANNOT go 90 mph because the road structure prevents it. The cameras still exist for the things barriers can't enforce (reckless driving style, attention to conditions) -- but the mechanical failures are prevented by structure.

**Build the road, not just the signs.**

---

**END OF REPORT**

**Statistics:**
- Inherent patterns analyzed: 9 (software engineering) + 6 (PV2-specific)
- Bolted-on patterns analyzed: 9 (software engineering)
- Current PV2 features classified: 16 (2-3 inherent, 12-14 bolted on)
- Post-pattern features: 12-14 inherent, 5-6 irreducibly bolted on
- Patterns designed: 6 (template, phase-lock, schema, preamble, tokens, artifact chain)
- Implementation cost: ~610-730 lines of enforcement code
- Irreducible residual: ~30% of quality (compositional judgment) CANNOT be made inherent
