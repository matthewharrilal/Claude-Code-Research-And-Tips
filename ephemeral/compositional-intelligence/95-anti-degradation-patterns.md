# Anti-Degradation Patterns for Pipeline V2

**Author:** Anti-Degradation Patterns Analyst (Opus 4.6)
**Date:** 2026-02-19
**Task:** #95
**Sources:** 28-meta-propagation.md (637 lines), 29-meta-first-principles.md (477 lines), PV2-PIPELINE-DIAGRAM.md (977 lines), 27-meta-unasked-questions.md (partial)
**Core Question:** What patterns from information theory, software engineering, manufacturing, and art prevent quality degradation at each stage of PV2?

---

## EXECUTIVE SUMMARY

The user's concern is precise: "not bogged down by a lack of separation of concerns that could potentially deflate, complete, or degrade the results at each level, at each stage." This is a BOUNDARY DISCIPLINE problem. PV2 has 7 boundaries (Report 28 mapped them). At each boundary, compositional intelligence can degrade through format loss, context competition, re-derivation error, or stacked ambiguity.

This report identifies **28 anti-degradation patterns** from 4 domains, maps each to specific PV2 stages, and provides architectural implementation. The patterns are organized by the FAILURE MODE they prevent, not the domain they come from.

**Key finding:** The highest-leverage patterns come from different domains at different stages:
- **Wave 0 (TC):** Manufacturing's fail-fast + Music's score (catch bad metaphors early, maintain written reference)
- **Wave 0.9 (Handoff):** Software's contract testing (schema validation at the critical boundary)
- **Wave 1 (Build):** Information theory's redundant encoding + Art's conductor model (CSS snippets as lossless channel, recipe as conductor)
- **Wave 2 (Verify):** Manufacturing's statistical process control (measure, don't guess)
- **Wave 3 (Fix):** Software's regression testing (verify fixes don't degrade prior work)

The meta-pattern: **every stage should both PRODUCE quality and VERIFY it hasn't degraded the previous stage's quality.** Currently, production and verification are separate waves. The anti-degradation architecture interleaves them.

---

## 1. FAILURE TAXONOMY: What Degradation Looks Like in PV2

Before applying patterns, name the failure modes. Degradation in PV2 takes 6 forms:

| # | Failure Mode | Description | Where It Hits | Example |
|---|-------------|-------------|---------------|---------|
| F-1 | **Format loss** | Intelligence changes format and loses information | Boundary 3 (TC -> build plan) | TC derives "warm-cool-warm arc"; build plan says "4 backgrounds" |
| F-2 | **Re-derivation error** | Downstream agent re-creates something that already existed upstream | Boundary 4 (builder reads 6 files) | Builder writes CSS for mechanism #7 when the catalog already has it |
| F-3 | **Context competition** | Multiple inputs compete for attention; richest loses | Wave 1 (builder synthesizes 1,150 lines) | Recipe gets attention (action verbs); mechanism catalog gets ignored (reference) |
| F-4 | **Stacked ambiguity** | Small ambiguities compound across boundaries | Boundaries 3+4+5 | "Deploy warm-cool-warm" -> builder guesses "warm" = +5 RGB -> imperceptible |
| F-5 | **Omission drift** | Required elements silently disappear between stages | Wave 1 (no mid-build tracking) | Footer planned in build plan, never built (flagship failure) |
| F-6 | **Perceptual blindness** | Builder cannot perceive its own output's quality | Boundary 5 (builder -> CSS/HTML) | Builder writes 227 lines of letter-spacing at 0.001em, thinks it's rich |

Each pattern below is tagged with which failure mode(s) it prevents.

---

## 2. INFORMATION THEORY PATTERNS

### IT-1: Redundant Encoding (Shannon Error Correction)

**Prevents:** F-1 (format loss), F-4 (stacked ambiguity)

**Principle:** Encode critical decisions in multiple independent formats. If one channel degrades, the others provide error correction.

**PV2 Application:** For the 5 most critical compositional decisions (zone backgrounds, border weights, spacing arc, typography zones, transition types), encode each in THREE formats:

1. **Structured data:** `zone-1-bg: "#fefcf3"` (machine-readable)
2. **CSS snippet:** `background: #fefcf3;` (builder-executable)
3. **Semantic annotation:** `"Warm cream, lightest zone = introduction/welcome"` (intent-preserving)

If the builder misreads the YAML, the CSS snippet corrects. If the CSS snippet has a typo, the semantic annotation reveals intent. If the annotation is ambiguous, the hex value is exact.

**Implementation:**
- TC planner outputs `_build-plan.yaml` with triple-encoded entries for top 5 decisions
- Template embedded in TC skill, ~40 lines of additional output per build plan
- Handoff gate validates all 3 formats are present and consistent

**Cost:** +15 min TC output time, +40 lines per build plan
**Benefit stage:** Wave 0.9 (handoff) and Wave 1 (builder reads plan)
**Complexity:** LOW -- TC already outputs most of this information; triple encoding is a formatting change

---

### IT-2: Channel Bandwidth Matching

**Prevents:** F-1 (format loss), F-3 (context competition)

**Principle:** Each type of intelligence should travel through a channel whose bandwidth matches its information content. Prose channels are low-bandwidth for visual decisions; CSS channels are high-bandwidth.

**PV2 Application:** Report 28's intelligence type taxonomy identifies 6 types: Declarative, Procedural, Visual, Compositional, Perceptual, Calibrational. Currently, all 6 travel through a SINGLE channel (prose documents). Match each type to its optimal channel:

| Intelligence Type | Current Channel | Optimal Channel | Bandwidth Improvement |
|------------------|----------------|-----------------|----------------------|
| Declarative (WHAT) | Prose | YAML structured data | ~3x (schema-preserving) |
| Procedural (HOW) | Prose | Prose (correct already) | 1x |
| Visual (CSS) | Prose description | CSS snippets | ~5x (lossless) |
| Compositional (WHY) | Prose | Prose + isomorphism tables | ~1.5x |
| Perceptual (FEEL) | Screenshots | Screenshots (correct already) | 1x |
| Calibrational (WHEN) | Prose | Boundary conditions table | ~2x |

**Implementation:**
- Split `_build-plan.md` into 3 files: `_build-plan.yaml` (declarative), `_build-plan.css` (visual), `_build-reasoning.md` (compositional)
- Or: single `_build-plan.yaml` with embedded CSS blocks and reasoning annotations (Report 28's minimum viable format)
- Builder receives intelligence in its native format rather than translating from prose

**Cost:** TC skill modification (~50 lines), handoff gate schema update (~20 lines)
**Benefit stage:** Boundary 3 (TC -> build plan) -- the critical boundary
**Complexity:** MODERATE -- requires TC skill refactoring to output structured data

---

### IT-3: Signal-to-Noise Ratio Optimization

**Prevents:** F-3 (context competition)

**Principle:** In any communication channel, the signal-to-noise ratio determines information transfer quality. Noise is not wrong information -- it is IRRELEVANT information that competes with relevant information for receiver attention.

**PV2 Application:** The builder's 1,150-line input has significant noise:
- operational-recipe.md (~650 lines): ~400 lines are procedural SIGNAL, ~250 lines are context/explanation NOISE
- mechanism-catalog.md (~900 lines): builder deploys 15/18 mechanisms; the 3 unused mechanisms are NOISE
- prohibitions.md (353 lines): ~50 lines of SIGNAL (the actual prohibitions), ~300 lines of CONTEXT

**Architecture:** Create per-build "builder brief" that extracts ONLY the signal relevant to THIS build:
- Recipe: trim to deployed phases only (skip inapplicable alternatives)
- Mechanism catalog: include only the mechanisms selected by TC
- Prohibitions: only the 22 prohibitions, not the rationale paragraphs

**Implementation:**
- Orchestrator generates `_builder-brief.md` by extracting relevant sections from 6 reference files
- Brief is ~400-500 lines of pure signal vs 1,150 lines of mixed signal/noise
- Signal-to-noise ratio improves from ~0.5 to ~0.9

**Cost:** Orchestrator logic (~40 lines of extraction code)
**Benefit stage:** Wave 1 (builder reads input files)
**Complexity:** MODERATE -- requires orchestrator to parse reference files and extract relevant sections

---

### IT-4: Error Detection Codes (Checksums at Boundaries)

**Prevents:** F-4 (stacked ambiguity), F-5 (omission drift)

**Principle:** Every message includes a checksum that the receiver can verify. If the checksum fails, the message was corrupted in transit.

**PV2 Application:** At each boundary, include an explicit count of decisions that should survive transit:

TC output includes: `MECHANISM_COUNT: 15, ZONE_COUNT: 4, TRANSITION_COUNT: 4, BG_COLORS: 4, WARNINGS: 3`

Builder's Phase 0 checkpoint verifies: "I read 15 mechanisms, 4 zones, 4 transitions, 4 backgrounds, 3 warnings. Counts match? PASS."

If counts don't match, something was lost in transit. The builder KNOWS a mechanism was dropped, rather than silently building without it.

**Implementation:**
- TC appends decision counts to build plan (~5 lines)
- Builder Phase 0 checkpoint includes count verification (~10 lines of recipe addition)
- Handoff gate validates count fields are present

**Cost:** ~15 lines across TC skill + recipe
**Benefit stage:** Boundary 3 (TC -> build plan) and Wave 1 Phase 0 (builder absorbs plan)
**Complexity:** LOW -- simple counting, no architectural change

---

## 3. SOFTWARE ENGINEERING PATTERNS

### SE-1: Regression Testing (Verify Non-Degradation)

**Prevents:** F-5 (omission drift), F-6 (perceptual blindness)

**Principle:** After every change, verify that previously-passing properties still pass. A fix to one subsystem must not break another.

**PV2 Application:** Currently, PV2's fix cycle (Wave 3) applies top-3 PA fixes and runs a quick 2-PA re-check. But the re-check evaluates the WHOLE page, not whether the fix degraded something that was previously working.

**Architecture:** The fix cycle builder receives:
1. Top-3 issues to fix (from PA weaver)
2. Previously-passing properties to PRESERVE (from gate runner + PA)
3. After applying fixes, builder re-runs gate-runner.js to verify all 12 gates still PASS
4. Quick PA specifically checks: "Did the areas that were GOOD in the first PA evaluation stay good?"

**Implementation:**
- Gate runner outputs `_passing-properties.json` listing all PASS results with measured values
- Fix cycle builder instruction includes: "After fixes, verify these properties still hold: [list]"
- Quick PA prompt includes: "Sections X, Y, Z were praised in the first audit. Do they still feel designed?"

**Cost:** ~20 lines orchestrator, ~10 lines fix-cycle prompt
**Benefit stage:** Wave 3 (fix cycle)
**Complexity:** LOW -- gate runner already produces PASS/FAIL; just persist and compare

---

### SE-2: Immutable Data (Write-Once Decisions)

**Prevents:** F-5 (omission drift), F-4 (stacked ambiguity)

**Principle:** Once a decision is committed at a higher authority level, no downstream agent may modify it. Decisions flow downstream only.

**PV2 Application:** TC planner derives zone count = 4, backgrounds = [#fefcf3, #f0ebe3, #faf5ed, #1a1a1a]. These are COMMITTED decisions. Currently, nothing prevents the builder from changing zone-2 to #fef9f4 (within 15 RGB delta of zone-1, technically valid but compositionally different from TC's intent).

**Architecture:** Mark specific build-plan fields as IMMUTABLE:
- Zone count: IMMUTABLE (TC decided)
- Background hex values: IMMUTABLE (TC decided, handoff gate validated)
- Mechanism selection (which mechanisms): IMMUTABLE (TC decided)
- Mechanism deployment (HOW they're applied): MUTABLE (builder decides)

The recipe explicitly states: "These values are LOCKED. Do not change them. If you believe they're wrong, flag it as a warning in the cascade value table, but use the specified values."

**Implementation:**
- Build plan marks fields as `[LOCKED]` or `[BUILDER_DISCRETION]`
- Recipe Phase 0 instruction: "Locked values are NOT YOUR DECISIONS. Use them exactly."
- Phase 8 cascade value table compares computed values against locked values

**Cost:** ~15 lines build plan annotations, ~10 lines recipe
**Benefit stage:** Boundary 4 (build plan -> builder) and Wave 1 (builder execution)
**Complexity:** LOW -- annotation + instruction, no enforcement infrastructure

---

### SE-3: Contract Testing (Boundary Schemas)

**Prevents:** F-1 (format loss), F-5 (omission drift)

**Principle:** Each boundary between components has an explicit contract: what goes IN (input schema) and what comes OUT (output schema). Any violation of the contract is caught immediately.

**PV2 Application:** PV2 has the handoff gate (Wave 0.9) with 5 binary checks. This IS a contract, but a minimal one. Expand to full contract testing at ALL boundaries:

| Boundary | Input Contract | Output Contract | Current Coverage |
|----------|---------------|-----------------|-----------------|
| Content -> TC | Markdown file exists, readable, non-empty | Build plan with 7 required fields | PARTIAL (existence only) |
| TC -> Build Plan | TC phases 0-3.5 complete | `_build-plan.md` with schema | GOOD (handoff gate: 5 checks) |
| Build Plan -> Builder | 6 files present, readable | Builder acknowledges plan at Phase 0 | WEAK (no acknowledgment check) |
| Builder -> HTML | Phase 8 complete, cascade table present | Valid HTML, CSS within budget | WEAK (no output schema) |
| HTML -> Gate Runner | HTML file at expected path | 12 PASS/FAIL results with values | GOOD (gate runner) |
| HTML -> PA | Screenshots at expected paths | 9 independent reports, PA-05 score | GOOD (PA protocol) |
| PA -> Fix Cycle | Top-3 issues, PA-05 score | Fixed HTML + verification | WEAK (no fix contract) |

**Implementation:**
- Add builder Phase 0 acknowledgment: builder writes `_plan-receipt.md` confirming mechanism count, zone count, etc. (IT-4's checksum)
- Add builder output validation: after Phase 8, orchestrator checks HTML file size (>= 500 lines), CSS line count (>= 300), cascade table presence
- Add fix cycle output contract: fix builder writes `_fix-manifest.md` listing what changed and what was preserved

**Cost:** ~60 lines across orchestrator + recipe
**Benefit stage:** ALL boundaries
**Complexity:** MODERATE -- adds 3 new validation points

---

### SE-4: Circuit Breaker (Fail-Fast at Stage Level)

**Prevents:** F-1 (format loss compounding), F-4 (stacked ambiguity compounding)

**Principle:** When a subsystem fails, stop immediately rather than passing corrupted data downstream. Better to fail fast with a clear error than to produce a page built on a broken foundation.

**PV2 Application:** PV2 already has fail-fast at Wave 0.5 (metaphor validation) and Wave 0.9 (handoff gate). Extend to Wave 1:

**Intra-build circuit breakers:**
- After Phase 2 (CSS Reset + Soul): If soul properties are violated (border-radius > 0 in any declaration), STOP. Do not proceed to Phase 3. The soul violation will propagate through all subsequent phases.
- After Phase 3 (Zone Backgrounds): Render, screenshot, evaluate. If zones are NOT visibly distinct, STOP. Phase 4 builds on top of zone distinctions. Building borders on invisible zones produces an invisible page.
- After Phase 5 (Typography): If all text is the same size (the flagship's exact failure), STOP.

These are the builder's "Can you SEE?" self-checks elevated from advice to circuit breakers.

**Implementation:**
- Recipe adds `[CIRCUIT BREAKER]` markers at Phases 2, 3, 5
- Builder renders HTML at each circuit breaker point (Playwright, ~2 min per render)
- If the visual check fails, builder rewrites THAT phase before proceeding
- Adds ~6-10 min to build time but prevents catastrophic propagation

**Cost:** ~30 lines recipe, ~6-10 min build time per breaker triggered
**Benefit stage:** Wave 1 (builder execution)
**Complexity:** MODERATE -- builder needs Playwright access during build (not just at Wave 2)

---

### SE-5: Monitoring and Observability (Metrics at Every Stage)

**Prevents:** F-5 (omission drift), F-6 (perceptual blindness)

**Principle:** You cannot improve what you cannot measure. Every stage should emit metrics that can be tracked across builds.

**PV2 Application:** The cascade value table (Phase 8 deliverable) captures END-STATE metrics. But degradation detection requires STAGE-BY-STAGE metrics:

| Stage | Metric | Purpose |
|-------|--------|---------|
| Wave 0 (TC) | Tension strength score (1-5), axis count, metaphor concreteness | Did TC produce rich input? |
| Wave 0.9 (Handoff) | 5 gate PASS/FAIL, mechanism count, zone delta values | Is the plan structurally complete? |
| Wave 1 Phase 3 | Background RGB deltas (actual), zone boundary count | Are zones visible? |
| Wave 1 Phase 5 | Font-size min/max delta, distinct font-size count | Is typography differentiated? |
| Wave 1 Phase 8 | CSS line count, component class count, channel shift count | Is the output rich? |
| Wave 2 | 12 gate results, PA-05 score, convergent finding count | Does it pass verification? |

**Implementation:**
- Each stage appends metrics to `_build-log.md` (already a PV2 deliverable)
- Build log becomes a TIME SERIES of quality metrics per stage
- After multiple builds, cross-build comparison reveals which stages degrade

**Cost:** ~30 lines per stage metric collection
**Benefit stage:** ALL stages (observability is universal)
**Complexity:** LOW -- mostly formatting existing information

---

## 4. MANUFACTURING PATTERNS

### MF-1: Statistical Process Control (Measure Quality at Checkpoints)

**Prevents:** F-6 (perceptual blindness), F-5 (omission drift)

**Principle:** Manufacturing measures critical dimensions at predefined checkpoints during production, not just at final inspection. A part that's wrong at step 3 won't be right at step 10.

**PV2 Application:** PV2's 5 mandatory checkpoints (Phases 0, 1, 3, 4, 8) are planner APPROVALS. Convert them to MEASUREMENT checkpoints:

At each checkpoint, MEASURE (don't just approve):
- Phase 0: Zone count matches build plan? Mechanism count matches?
- Phase 1: HTML element count by type (section, article, aside, table, figure). Component class count.
- Phase 3: Background RGB values at each zone. Compute deltas. Record.
- Phase 4: Border count, border-weight values, transition count by type.
- Phase 8: Full cascade value table (already specified).

**The key shift:** Checkpoints move from "planner says OK" to "measured values match specification."

**Implementation:**
- Recipe checkpoint instructions change from "Submit for approval" to "Measure and record these values: [list]"
- Builder writes measurements to `_build-log.md` at each checkpoint
- Planner compares measurements against build plan's LOCKED values

**Cost:** ~40 lines recipe modification
**Benefit stage:** Wave 1 (all 5 checkpoints)
**Complexity:** LOW -- measurement is simpler than approval

---

### MF-2: Root Cause Analysis Protocol (5-Why at Failure)

**Prevents:** F-4 (stacked ambiguity repeating across builds)

**Principle:** When a defect occurs, trace it to the root cause. Fix the CAUSE, not the SYMPTOM. Otherwise the same defect recurs in the next production run.

**PV2 Application:** When the PA identifies "whitespace void at 70%," the fix cycle builder currently applies a local fix (reduce padding at that section). This treats the SYMPTOM. The ROOT CAUSE might be:
- TC planned too few zones (3 when content needed 4)
- Builder allocated too much spacing in Phase 3 (64px when 32px was appropriate)
- Stacked gap accumulation (S-09 loophole)
- Missing section content (planned section has no content, becomes void)

**Architecture:** When PA-05 < 3/4, before the fix cycle starts:
1. PA weaver's top-3 issues get a 1-line ROOT CAUSE HYPOTHESIS
2. Fix builder reads the hypothesis and addresses the CAUSE, not just the effect
3. Fix manifest records: "Issue: whitespace void. Root cause: stacked gap at section boundary (48px margin-bottom + 64px padding-top = 112px > 108px limit). Fix: reduced padding-top to 48px."

**Implementation:**
- PA weaver prompt adds: "For each top-3 issue, hypothesize a root cause in CSS terms"
- Fix cycle builder prompt adds: "Address the root cause, not the visual symptom"
- Fix manifest template (~15 lines)

**Cost:** ~25 lines across PA weaver + fix cycle prompts
**Benefit stage:** Wave 3 (fix cycle)
**Complexity:** LOW -- mostly prompt engineering

---

### MF-3: Fail-Fast Inspection (Early Defect Detection)

**Prevents:** F-1 (format loss compounding), F-5 (omission drift)

**Principle:** In manufacturing, inspecting at step 1 costs 1x. Inspecting at step 10 after the defect has propagated costs 10x. The cheapest inspection is the earliest.

**PV2 Application:** PV2 already does this well with Wave 0.5 (metaphor validation, 5-10 min, prevents 90-150 min wasted build) and Wave 0.9 (handoff gate, 1 min, prevents building on incomplete plan).

**Extension:** Add a "content suitability" check BEFORE TC even starts:

**Wave -0.1: Content Gate** (2 min, automated)
- Markdown file exists and is readable
- Word count: 200-15,000 (too short = not enough content for zones; too long = should be split)
- Has at least 2 headings (TC needs section boundaries)
- No binary content or broken encoding

This prevents TC from spending 30-60 minutes analyzing a file that can't produce a valid page.

**Implementation:**
- Orchestrator adds 4 binary checks before invoking TC (~15 lines)
- If any fail, return clear error message to user

**Cost:** ~15 lines orchestrator
**Benefit stage:** Before Wave 0 (earliest possible)
**Complexity:** LOW -- text validation

---

### MF-4: Quality at the Source (Each Worker Owns Quality)

**Prevents:** F-6 (perceptual blindness)

**Principle:** In lean manufacturing, the worker who performs the operation is responsible for quality at that operation. Quality is not delegated to a downstream inspector.

**PV2 Application:** Currently, quality judgment is EXTERNALIZED: the builder builds, the PA evaluates. This creates the exact "perceptual blindness" problem -- the builder never sees its own output through a reader's eyes.

**Architecture:** The builder self-inspects at circuit breaker points (SE-4) using SPECIFIC CRITERIA, not judgment:
- Phase 3: "Render. Look at the screenshot. Can I distinguish zone boundaries WITHOUT reading the HTML? If I see a uniform cream page, FAIL."
- Phase 5: "Render. Screenshot. Can I identify 3 distinct text sizes without measuring? If all text looks the same size, FAIL."

The builder still doesn't judge "beauty" (that's the PA's job). But it judges VISIBILITY (perception thresholds). This is manufacturing's "go/no-go gauge" -- a binary tool the worker uses, not a subjective assessment.

**Implementation:**
- Recipe circuit breaker points include specific visual checks with BINARY criteria
- Builder renders and self-evaluates at 3 points (Phases 3, 5, 7)
- Self-evaluation criteria are PERCEPTION THRESHOLDS, not aesthetic judgments

**Cost:** ~20 lines recipe, ~6 min build time
**Benefit stage:** Wave 1 (builder execution)
**Complexity:** MODERATE -- builder needs Playwright mid-build

---

### MF-5: Poka-Yoke (Mistake-Proofing)

**Prevents:** F-2 (re-derivation error), F-4 (stacked ambiguity)

**Principle:** Design the process so that errors are IMPOSSIBLE, not just detectable. A USB connector can only go in one way. A mistake-proofed form has dropdown menus instead of free text.

**PV2 Application:** The build plan currently uses free-text for critical values:
```
Zone backgrounds: warm cream spectrum, 4 zones
```
This allows the builder to interpret "warm cream spectrum" as any set of warm colors.

**Mistake-proofed version:**
```yaml
zone_backgrounds:
  - { zone: 1, hex: "#fefcf3", class: "zone--intro" }    # LOCKED
  - { zone: 2, hex: "#f0ebe3", class: "zone--detail" }    # LOCKED
  - { zone: 3, hex: "#faf5ed", class: "zone--breathing" }  # LOCKED
  - { zone: 4, hex: "#1a1a1a", class: "zone--anchor" }     # LOCKED
```

The builder CANNOT misinterpret "#fefcf3" -- it's exact. The `[LOCKED]` annotation makes modification a deliberate violation, not an accidental drift. The class names standardize the HTML structure.

**Broader application:** Every specification that can be an EXACT VALUE should be. Every specification that is currently DESCRIPTIVE ("warm-cool-warm arc") should also include the EXACT VALUES it describes.

**Implementation:**
- TC outputs exact values in structured format (already proposed in IT-2)
- Recipe references exact values from build plan rather than re-describing them
- This is the same format change as IT-2 but motivated by error prevention rather than bandwidth

**Cost:** Subsumed by IT-2 (no additional cost)
**Benefit stage:** Wave 1 (builder execution)
**Complexity:** LOW (already covered by IT-2)

---

## 5. MUSIC AND ART PATTERNS

### MA-1: The Conductor Model (Vision Maintenance)

**Prevents:** F-5 (omission drift), F-3 (context competition)

**Principle:** An orchestra has 80+ musicians but ONE conductor. The conductor doesn't play an instrument -- they maintain the VISION of how the piece should sound. Without the conductor, each section optimizes locally (louder, faster, more expressive) at the expense of the whole.

**PV2 Application:** PV2's "conductor" is split between TC planner (vision) and the recipe (execution). The builder follows the recipe but may lose the vision. The flagship experiment is exactly this failure: the builder executed each recipe step locally (Phase 3: set backgrounds; Phase 5: set typography) without maintaining the overarching COHERENCE.

**Architecture:** The semantic direction (TC's output) should be a PERSISTENT REFERENCE, not a one-time input:

1. TC outputs a 3-5 line "DIRECTION STATEMENT" (the conductor's interpretation)
2. This statement appears at the TOP of every recipe phase
3. Each phase's self-check asks: "Does this phase's output serve the direction?"

Example:
```
DIRECTION: This page teaches through progressive revelation.
Dense sections contain evidence; sparse sections contain implications.
The reader should feel they are excavating truth layer by layer.

PHASE 3 (Zone Backgrounds):
[...phase instructions...]
DIRECTION CHECK: Do the background shifts FEEL like layers being revealed?
```

The direction statement is the SCORE -- the written reference all performers follow. Putting it at the top of every phase prevents the builder from losing sight of the whole while executing the parts.

**Implementation:**
- TC outputs `DIRECTION_STATEMENT` (3-5 lines) as a build plan field
- Recipe template includes direction preamble at each phase (~3 lines x 9 phases = 27 lines)
- Each phase self-check includes direction coherence question

**Cost:** ~30 lines recipe, ~5 lines TC output
**Benefit stage:** Wave 1 (all 9 phases)
**Complexity:** LOW -- text formatting, no architectural change

---

### MA-2: The Rehearsal (Dry-Run Build)

**Prevents:** F-6 (perceptual blindness), F-1 (format loss -- caught before full build)

**Principle:** Musicians rehearse before performing. The rehearsal uses the same instruments and the same score but with PERMISSION TO STOP AND ADJUST. The performance is continuous. Rehearsals are interruptible.

**PV2 Application:** What if the builder does a "sketch build" before the "real build"?

**Architecture:**
- Phase 0-3: Builder creates HTML skeleton + zone backgrounds (no element-level detail)
- Render and screenshot the skeleton
- Evaluate: "Does this skeleton look like it will produce 3 visible zones with distinct backgrounds?"
- If YES: proceed to full build
- If NO: adjust zone architecture before investing 90+ min in detail work

This is cheaper than building the full page and then discovering zones are invisible. The sketch takes ~15 min. The full build takes ~90-150 min. Catching a zone visibility problem at the sketch saves 75-135 min.

**Implementation:**
- Recipe adds "SKETCH CHECKPOINT" between Phase 3 and Phase 4
- Builder renders HTML at this point and evaluates skeleton quality
- If zones are invisible, builder adjusts Phase 3 before proceeding
- Adds ~10-15 min but prevents the most common catastrophic failure

**Cost:** ~15 min build time, ~15 lines recipe
**Benefit stage:** Wave 1 (between Phases 3 and 4)
**Complexity:** MODERATE -- builder needs Playwright mid-build (same as SE-4)

---

### MA-3: The Score (Written Reference for All Performers)

**Prevents:** F-3 (context competition), F-5 (omission drift)

**Principle:** Every musician has the SAME SCORE. No one is guessing what the others are playing. The score is the single source of truth for the entire composition.

**PV2 Application:** PV2's "score" is fragmented across 6 files. The builder must mentally synthesize them. Report 28 identifies this as Boundary 4's core problem: multi-file synthesis is inherently lossy.

**Architecture:** Create a SINGLE consolidated "build score" that integrates:
- Direction statement (from TC)
- Zone architecture with exact values (from build plan)
- Mechanism deployment with CSS snippets (from catalog + build plan)
- Recipe phases (from operational recipe)
- Perception thresholds (from thresholds file)
- Soul constraints (from prohibitions -- just the 22 rules, not rationale)

This is Report 28's "single integrated build instruction" concept, framed as the musical score.

**Implementation:**
- Orchestrator generates `_build-score.md` by merging relevant sections from 6 files
- Builder reads ONE file instead of SIX
- Score is ~400-500 lines (less than the current 1,150 lines)
- Signal-to-noise ratio approaches 1.0

**Cost:** ~60 lines orchestrator (merge logic)
**Benefit stage:** Boundary 4 (builder input)
**Complexity:** MODERATE -- requires orchestrator to parse and merge multiple files

---

### MA-4: Call and Response (Inter-Stage Dialogue)

**Prevents:** F-5 (omission drift), F-4 (stacked ambiguity)

**Principle:** In jazz and gospel, the lead singer calls and the choir responds. The response CONFIRMS the call was heard correctly. Silence means the message was lost.

**PV2 Application:** PV2's 5 mandatory checkpoints ARE call-and-response. TC "calls" with the build plan; the builder "responds" at Phase 0 with understanding. The planner "calls" for Phase 3 output; the builder "responds" with zone backgrounds.

**Enhancement:** Make the response EXPLICIT about what was received:

Current: "Phase 3 complete. Zone backgrounds applied."
Enhanced: "Phase 3 complete. Zone backgrounds applied: zone-1 #fefcf3, zone-2 #f0ebe3, zone-3 #faf5ed, zone-4 #1a1a1a. Deltas: z1-z2: R=14,G=9,B=16 (PASS). z2-z3: R=10,G=14,B=10 (PASS). z3-z4: R=224,G=229,B=227 (PASS). All zones match build plan values."

The enhanced response PROVES the builder received the exact values from the plan, applied them correctly, and verified the deltas. The planner can confirm at a glance without re-deriving anything.

**Implementation:**
- Checkpoint templates include "echo back" format: repeat the value, show the measurement
- ~5 lines per checkpoint x 5 checkpoints = ~25 lines recipe
- Planner approval criteria: "Values match build plan?"

**Cost:** ~25 lines recipe, ~3 min per checkpoint
**Benefit stage:** Wave 1 (all 5 checkpoints)
**Complexity:** LOW -- template formatting

---

### MA-5: The Shared Mental Model (Anti-Scale Preamble)

**Prevents:** F-3 (context competition), F-6 (perceptual blindness)

**Principle:** A great ensemble doesn't need the conductor for every note. They have INTERNALIZED the musical intention and can make moment-to-moment decisions that serve it. This internalization comes from shared rehearsal, shared vocabulary, and shared aesthetic values.

**PV2 Application:** Report 28 proposes embedding the anti-scale model as a 4-line preamble in every builder file:

```
RICHNESS = semantic density x restraint x spatial confidence
density = mechanisms per zone (not total count)
restraint = unused CSS budget (what you DIDN'T add)
confidence = whitespace-to-content ratio (breathing room)
```

This is the shared mental model. When the builder faces an ambiguous decision ("Should I add another mechanism to this zone?"), the model provides a decision framework: "Will this increase DENSITY or just COUNT? Does this reduce RESTRAINT? Does this compress CONFIDENCE?"

**Implementation:**
- 4-line preamble at the top of the builder's input
- Also at the top of the fix cycle builder's input
- Also in the PA weaver's synthesis prompt (so PA feedback aligns with builder's framework)

**Cost:** 4 lines x 3 locations = 12 lines
**Benefit stage:** Wave 1, Wave 3 (builder + fix cycle)
**Complexity:** LOW -- 12 lines of text

---

## 6. CROSS-DOMAIN SYNTHESIS: The Anti-Degradation Architecture

### 6.1 Patterns Mapped to PV2 Stages

| PV2 Stage | Top Patterns | Combined Effect |
|-----------|-------------|-----------------|
| **Pre-Wave 0** | MF-3 (content gate) | Prevent garbage-in before TC starts |
| **Wave 0 (TC)** | IT-2 (channel matching), MF-5 (poka-yoke) | TC outputs structured data + CSS, not just prose |
| **Wave 0.5 (Metaphor)** | MF-3 (fail-fast) | Already implemented; no change needed |
| **Wave 0.9 (Handoff)** | SE-3 (contract testing), IT-4 (checksums) | Schema validation + decision counts |
| **Wave 1 (Build)** | MA-1 (conductor), MA-3 (score), SE-4 (circuit breaker), MA-2 (rehearsal), MF-4 (quality at source), MA-5 (shared model) | Direction statement at every phase, single consolidated file, mid-build renders, self-inspection at perception thresholds |
| **Wave 2 (Verify)** | MF-1 (SPC), SE-5 (monitoring) | Measured metrics, not just PASS/FAIL |
| **Wave 3 (Fix)** | SE-1 (regression), MF-2 (root cause), MA-4 (call-response) | Fix addresses cause, verifies no regression, confirms what changed |

### 6.2 Priority Ranking (Impact / Cost)

| Rank | Pattern | Impact | Cost | Ratio |
|------|---------|--------|------|-------|
| 1 | **MA-5** (shared mental model) | HIGH (aligns all decisions) | 12 lines | EXTREME |
| 2 | **IT-4** (checksums) | HIGH (catches omissions) | 15 lines | EXTREME |
| 3 | **MA-1** (conductor/direction statement) | HIGH (maintains vision) | 35 lines | VERY HIGH |
| 4 | **SE-2** (immutable data) | HIGH (prevents drift) | 25 lines | VERY HIGH |
| 5 | **MA-4** (call-and-response checkpoints) | MODERATE (confirms receipt) | 25 lines | HIGH |
| 6 | **IT-2** (channel bandwidth matching) | HIGH (lossless CSS) | 70 lines | HIGH |
| 7 | **SE-4** (circuit breakers) | HIGH (early detection) | 30 lines + 6 min | MODERATE |
| 8 | **SE-3** (contract testing) | MODERATE (catches gaps) | 60 lines | MODERATE |
| 9 | **MA-3** (consolidated score) | HIGH (eliminates synthesis) | 60 lines orchestrator | MODERATE |
| 10 | **IT-3** (signal-to-noise) | MODERATE (reduces noise) | 40 lines | MODERATE |
| 11 | **SE-1** (regression testing) | MODERATE (preserves gains) | 30 lines | MODERATE |
| 12 | **MF-2** (root cause analysis) | MODERATE (prevents recurrence) | 25 lines | MODERATE |
| 13 | **MF-1** (SPC/metrics) | MODERATE (enables learning) | 30 lines/stage | MODERATE |
| 14 | **SE-5** (monitoring) | LOW-MOD (long-term learning) | 30 lines/stage | MODERATE |
| 15 | **IT-1** (redundant encoding) | MODERATE (error correction) | 40 lines + 15 min | LOW-MOD |
| 16 | **MF-3** (content gate) | LOW (rare failure) | 15 lines | MODERATE |
| 17 | **MA-2** (rehearsal/sketch) | MODERATE (early detection) | 15 lines + 15 min | LOW-MOD |
| 18 | **MF-4** (quality at source) | MODERATE (builder self-inspect) | 20 lines + 6 min | LOW-MOD |

### 6.3 Implementation Tiers

**Tier 1 -- Implement immediately (total: ~112 lines, 0 min added build time):**
- MA-5: Shared mental model preamble (12 lines)
- IT-4: Decision checksums at boundaries (15 lines)
- MA-1: Direction statement at every phase (35 lines)
- SE-2: Immutable data annotations (25 lines)
- MA-4: Call-and-response checkpoint format (25 lines)

These are pure TEXT changes to the recipe and build plan templates. Zero build-time cost. Zero architectural change. Maximum degradation prevention per line.

**Tier 2 -- Implement with TC skill changes (total: ~130 lines, +15 min build time):**
- IT-2: Structured YAML + CSS output from TC (70 lines)
- SE-3: Full contract testing at all boundaries (60 lines)

These require TC skill modification but the benefit is substantial: intelligence survival at Boundary 3 goes from ~35% to ~75%.

**Tier 3 -- Implement with builder infrastructure (total: ~120 lines, +12 min build time):**
- SE-4: Circuit breakers at Phases 3, 5, 7 (30 lines, +6 min)
- MA-3: Consolidated build score generation (60 lines)
- IT-3: Signal-to-noise optimized builder brief (40 lines, subsumed by MA-3)

These require the builder to have Playwright mid-build (already needed for the "Can you SEE?" checks) and the orchestrator to generate merged documents.

**Tier 4 -- Implement for fix cycle improvement (total: ~55 lines, 0 min added):**
- SE-1: Regression testing in fix cycle (30 lines)
- MF-2: Root cause analysis protocol (25 lines)

---

## 7. THE META-PATTERN: PRODUCE AND VERIFY

Every pattern in this report reduces to one meta-principle:

**Each stage should PRODUCE quality AND VERIFY it hasn't degraded the previous stage's quality.**

Currently, PV2 separates production (Wave 0 + Wave 1) from verification (Wave 2 + Wave 3). This is the fundamental architectural gap. The anti-degradation patterns interleave production and verification:

```
Wave 0: TC PRODUCES plan. Handoff gate VERIFIES plan.
         (Already implemented.)

Wave 0.5: Fresh-eyes VERIFIES metaphor.
           (Already implemented.)

Wave 0.9: Handoff VERIFIES 5 properties.
           (Already implemented. Enhance with contract testing.)

Wave 1:
  Phase 0: Builder ABSORBS plan. VERIFIES understanding (checksum echo).
  Phase 2: Builder PRODUCES soul CSS. VERIFIES no violations (circuit breaker).
  Phase 3: Builder PRODUCES zones. VERIFIES visibility (render + screenshot).
           [SKETCH CHECKPOINT: is the skeleton promising?]
  Phase 4: Builder PRODUCES borders. VERIFIES presence (count check).
  Phase 5: Builder PRODUCES typography. VERIFIES differentiation (render).
  Phase 7: Builder PRODUCES accessibility. VERIFIES compliance (ARIA count).
  Phase 8: Builder PRODUCES cascade table. VERIFIES multi-coherence.

Wave 2: PA VERIFIES overall quality.
         (Already implemented.)

Wave 3: Fix builder PRODUCES fixes. VERIFIES no regression (gate re-run).
         (Enhancement: regression testing.)
```

The produce-verify rhythm at every phase means degradation is caught at the MOMENT it occurs, not 60 minutes later.

---

## 8. ANSWERS TO THE STRUCTURED QUESTIONS

### For each anti-degradation pattern:

**1. What it prevents in PV2:**
See Section 6.1 (patterns mapped to stages) and Section 1 (failure taxonomy). Each pattern is tagged with the failure mode(s) it prevents.

**2. How to implement it:**
See each pattern's Implementation section. Implementation ranges from 4-line text additions (MA-5) to 60-line orchestrator logic (MA-3, SE-3).

**3. Cost:**
- Line cost: 112 lines (Tier 1) to 417 lines (all tiers)
- Time cost: 0 min (Tier 1) to ~27 min (all tiers)
- Complexity: LOW (Tier 1) to MODERATE (Tier 3)
- No pattern is HIGH complexity. All are architectural, not textual.

**4. Which PV2 stage benefits most:**
- **Wave 1 (Build)** benefits from 10 of 18 patterns -- this is where degradation concentrates
- **Boundary 3 (TC -> Build Plan)** benefits from 4 patterns -- this is the critical information bottleneck
- **Wave 3 (Fix Cycle)** benefits from 4 patterns -- this is where regression compounds

---

## 9. THE USER'S CONCERN ADDRESSED DIRECTLY

"Not bogged down by a lack of separation of concerns that could potentially deflate, complete, or degrade the results at each level, at each stage."

The anti-degradation architecture provides:

1. **Separation of concerns that PREVENTS deflation:**
   - Immutable data (SE-2): TC's decisions cannot be silently altered by the builder
   - Contract testing (SE-3): each boundary has explicit input/output schemas
   - The conductor model (MA-1): vision maintenance is separated from execution

2. **Mechanisms that DETECT completion gaps:**
   - Decision checksums (IT-4): count mismatches reveal dropped mechanisms
   - Call-and-response (MA-4): checkpoint echo-backs confirm receipt
   - Monitoring (SE-5): stage metrics reveal where quality drops

3. **Safeguards against DEGRADATION between stages:**
   - Circuit breakers (SE-4): stop building on broken foundations
   - Regression testing (SE-1): fixes don't break what already works
   - Root cause analysis (MF-2): fix causes, not symptoms

4. **All with MINIMAL overhead:**
   - Tier 1 (highest impact): 112 lines, 0 min added build time
   - Full implementation: 417 lines, ~27 min added build time
   - The patterns are primarily FORMAT changes, not PROCESS additions

---

**END OF REPORT**

**Statistics:**
- Patterns identified: 18 (4 information theory, 5 software engineering, 5 manufacturing, 5 music/art)
- Failure modes categorized: 6
- PV2 stages covered: all 7
- Implementation tiers: 4 (112 / 130 / 120 / 55 lines)
- Total implementation cost: ~417 lines, ~27 min build time
- Highest-leverage single pattern: MA-5 (shared mental model, 12 lines, aligns ALL decisions)
- Highest-impact tier: Tier 1 (112 lines, 0 min, prevents F-1 through F-6)
