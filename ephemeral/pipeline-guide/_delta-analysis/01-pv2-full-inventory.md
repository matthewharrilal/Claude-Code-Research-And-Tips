# PV2 Pipeline Diagram -- Exhaustive Inventory

**Source:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/pipeline/PV2-PIPELINE-DIAGRAM.md`
**Source Length:** 1,354 lines
**Last Updated (per diagram):** 2026-02-19
**Evidence Base:** 50+ Opus agents across 6 waves (31 dimensional traces + 17 post-investigation + 8 review/adversarial + master synthesis Report 32)
**Purpose:** Complete inventory of every component, agent, gate, file, feature, and flow specified in the PV2 Pipeline Diagram, for delta analysis against the Implementation Guide.

---

## 1. GOVERNING DIRECTIVES (Lines 1-40)

### 1.1 Top-Level Directives (Line 32)
- **ALWAYS FLAGSHIP** -- No tier routing. No classification. Every page gets maximum intensity.
- **ALWAYS REMEDIATION-STYLE** -- Remediation-style builder instructions (telescope + microscope interlaced).
- **FIRE AND FORGET** -- User's only interaction is `/build-page content.md`. No intermediate approvals.

### 1.2 Key Changes from Previous Version (Lines 9-22)
1. 5-layer compositional intelligence stack made visible at every stage
2. Transition Table + Fractal Echo Table as mandatory new artifacts
3. TC narrowed to ~660 lines (was 1,878) -- planning ONLY, no builder content
4. 15 programmatic gates (was 12) -- SC-13/14/15 added
5. INHERENT vs BOLTED-ON annotations at every feature
6. 4 builder instruction approaches shown (pending experiments) -- including Fat Core
7. Intelligence heatmap showing compression loss across pipeline
8. Fat Core alternative architecture (Reports 31, 94)
9. Builder input cap at 300 lines (Reports 31, 95): SNR optimization
10. Phase 6.5 Observation Pause + inter-phase micro-gates (Reports 84, 67, 104)
11. 2D model: Specificity x Freedom (Report 85) replaces 1D checklist->recipe->convention
12. Cost estimate: ~$20-60/page (Report 31)
13. Self-referential compression warning (Reports 102, 105)

### 1.3 Status (Line 37)
- **EXPERIMENT FIRST** -- 5 experiments before codifying (was 3)

---

## 2. THE COMPOSITIONAL INTELLIGENCE STACK (Lines 42-82)

### 2.1 Five Layers (Lines 46-77)

| Layer | Name | Description | What It Enables | Current Status in Pipeline |
|-------|------|-------------|-----------------|---------------------------|
| L1 | Perception Thresholds (floor) | >= 15 RGB, >= 2px font, >= 0.03em spacing, <= 108px gap | Prevents INVISIBILITY. Prevents 1.5/4 (FLAT). | Encoded as binary gates SC-09 through SC-12 |
| L2 | Scales (5 zoom levels) | Navigation, Page, Section, Component, Character | STAGES where pattern appears. Enables 2/4. | Mentioned in TC. Lost at handoff. |
| L3 | Channels (6 CSS property groups) | Chromatic, Typographic, Spatial, Structural, Behavioral, Material | The INSTRUMENTS. Enables 2.5/4 (STYLED+). | Named in catalog. Partially in recipe. |
| L4 | Multi-Coherence (binding rule) | >= 3 channels shift together at each boundary, in the SAME semantic direction | COORDINATES channels. Enables 3/4 (COMPOSED). | Text in recipe Phase 8. Gate SC-13 NEW. |
| L5 | Anti-Scale Model (governing principle) | Richness = semantic density x restraint x spatial confidence | EVALUATES everything below. Enables 4/4 (DESIGNED). | Absent from pipeline. Text in research only. |

### 2.2 Key Insight (Lines 79-82)
- Each layer DEPENDS on the one below.
- PV2 encodes only L1. Layers 2-5 EVAPORATE at the TC-to-builder boundary.
- Source: Report 83.

---

## 3. INTELLIGENCE HEATMAP (Lines 85-134)

### 3.1 Intelligence Levels by Stage (Lines 91-123)

| Stage | L1 Percep. Thresh. | L2 Scales (5-lvl) | L3 Channels (6 CSS) | L4 Multi-Coher. | L5 Anti-Scale |
|-------|-------|-------|--------|-------|------|
| Content.md | --- | --- | --- | --- | --- |
| TC Planner (Wave 0) | FULL | FULL | HIGH | MODERATE | LOW |
| _build-recipe.md (TC Output) | FULL | LOW | MODERATE | MINIMAL | ABSENT (CRITICAL LOSS POINT) |
| Builder Input (7 files) | FULL | MINIMAL | MODERATE | MINIMAL | ABSENT |
| CSS/HTML Output (Wave 1) | HIGH | UNKNOWN | UNKNOWN | UNKNOWN | ABSENT |
| Gate Runner (15 gates) | FULL | ABSENT* | MINIMAL | NEW SC-13 | ABSENT |
| PA Auditors (9 fresh eyes) | ABSENT+ | MODERATE | MODERATE | HIGH | MODERATE |

### 3.2 Heatmap Legend (Lines 119-123)
- [#####] FULL
- [####.] HIGH
- [###..] MODERATE
- [##...] LOW
- [#....] MINIMAL
- [.....] ABSENT
- [??..] DEPENDS ON BUILDER (no enforcement)
- \* = FIX IDENTIFIED but not yet implemented
- \+ = Correct: PA measures perception, not numbers

### 3.3 Fixes Identified (Lines 130-134)
- Fractal Echo Table makes L2 (scales) cross the boundary -> [MODERATE]
- Transition Table makes L3 (channels) cross the boundary -> [HIGH]
- Multi-coherence binding in transition table makes L4 cross -> [MODERATE]
- Anti-scale model remains ABSENT from operational pipeline (L5 = JUDGMENT)

---

## 4. USER ENTRY POINT (Lines 137-169)

### 4.1 Command
```
/build-page path/to/content.md
```

### 4.2 Properties (Lines 147-165)
- Single slash command. User's ONLY interaction with the pipeline.
- Input = any existing markdown file in the project.
- INHERENT: YES -- pipeline cannot start without content file.
- Intelligence at this stage: None. Orchestrator is a ROUTER.
- Addition Test is the only escape valve (not tier routing).

### 4.3 Orchestrator Actions (Lines 161-164)
1. Reads content.md
2. Invokes enriched /tension-composition (~660 lines)
3. Validates the build plan
4. Spawns an Opus builder
5. Runs 15 gates + 9 PA auditors
6. Fixes up to 3x
7. Deposits output.html + _pa-report.md + _build-log.md

---

## 5. WAVE 0: CONTENT ANALYSIS + COMPOSITIONAL PLANNING (Lines 171-287)

### 5.1 Agent
- **Enriched /tension-composition** (Opus)
- Time: ~30-60 minutes (autonomous)

### 5.2 TC Scope (Lines 176-180)
- Phases 0 -> 3.5 ONLY (was 0 -> 5)
- ~660 lines (was 1,878 -- 66% reduction)
- 68% operational density (was 37%)

### 5.3 TC Phases (Lines 184-229)

| Phase | Name | Details | Changed? |
|-------|------|---------|----------|
| Phase 0 | Content Analysis | No tier routing | CHANGED: removed tier routing |
| Phase 1 | Multi-Axis Questioning | 9+ axes | UNCHANGED (core engine) |
| Phase 2 | Tension Derivation + Addition Test | Binary gate: tension exists or not | UNCHANGED (core engine) |
| Phase 3 | Metaphor Collapse | Only if tension exists | Standard path |
| Phase 3.5 | Lock-In Gate | Locks metaphor | Standard path |
| Phase 4T | Transition Table + Fractal Echo Table Generation | NEW -- generates 3 artifacts | NEW |
| FLAT MODE | Zones + recipe, no metaphor | If Addition Test finds no tension | Alternative path |

### 5.4 Addition Test (Lines 197-202)
- Binary gate at Phase 2
- INHERENT: YES
- Two outcomes: TENSION EXISTS -> Phase 3 | NO TENSION -> FLAT MODE

### 5.5 Three New Output Artifacts (Lines 241-272)

**a. _build-recipe.md (~200-400 lines) -- Line 243**
- Structured build plan with TELESCOPE COMMENTS at every line
- Each mechanism deployment includes WHY (compositional intent) AND WHAT (specific CSS snippet or value)
- Zone map + mechanism deployment + builder warnings
- INCLUDES rejected alternatives (runner-up metaphor, 2-3 rejected tensions with reasons) -- Report 74

**b. Transition Table (YAML) -- Lines 251-261**
- Per-boundary x 6-channel specification
- Contains: exact CSS before/after values (hex colors, px, em), delta measurements (pre-computed), semantic direction labels ("DEEPENING", "RESOLVING"), channel count per boundary (must be >= 3 for zone boundaries), pass/fail pre-computation
- FLOWS UNCHANGED: TC writes #F0EBE3, builder uses #F0EBE3, gate runner reads rgb(240,235,227), PA sees the rendered color
- PRIMARY FIX for compression loss at Boundary 3
- Source: Report 68

**c. Fractal Echo Table -- Lines 262-272**
- 5-row table: Scale | Pattern Expression | Primary CSS | Secondary CSS
- Rows: Navigation, Page, Section, Component, Character
- Pattern Direction must be SAME at all 5 rows
- If inconsistent -> metaphor is not fractal -> FLAT MODE
- MAKES L2 (SCALES) CROSS THE BOUNDARY -- was previously lost
- Source: Report 83

### 5.6 Separation of Concerns (Lines 274-277, Report 93)
- TC answers ONE question: "What visual form does this content need?"
- TC does NOT: write CSS, specify pixel values, verify output, judge quality, or route between tiers.

### 5.7 Intelligence at This Stage (Lines 279-284)
- L1: FULL (thresholds embedded in transition table)
- L2: FULL (fractal echo table)
- L3: HIGH (6-channel transition table)
- L4: MODERATE (channel counts per boundary computed)
- L5: LOW (coherence direction specified, not full anti-scale)

### 5.8 What Changed Summary (Lines 234-240)
1. TC SCOPE NARROWED (Report 69): Phases 0-3.5 + Phase 4T, ALL Phase 4+ builder content REMOVED (624 lines, 32.3%), ALL tier routing REMOVED (145 lines), builder appendices relocated to builder input files. TC is TELESCOPE ONLY -- plans, never builds.
2. THREE NEW OUTPUT ARTIFACTS (Reports 68, 83): see 5.5 above
3. SEPARATION OF CONCERNS (Report 93): see 5.6 above

---

## 6. WAVE 0.5: METAPHOR VALIDATION (Lines 292-311)

### 6.1 Agent
- **Fresh-Eyes Opus** agent
- Time: ~5-10 minutes
- UNCHANGED from original PV2

### 6.2 Gate
- Binary: STRUCTURAL or ANNOUNCED?
- INHERENT: YES (prevents 90-150 min wasted build on doomed metaphor)
- Outcome: PASS or FAIL

---

## 7. WAVE 0.9: ENRICHED HANDOFF GATE (Lines 313-380)

### 7.1 Properties
- 8 binary checks (was 5)
- Time: ~1-2 minutes
- INHERENT: YES (blocks builder)

### 7.2 Checks (Lines 322-341)

**Original 5:**

| Check | What | Threshold |
|-------|------|-----------|
| [1] | Zone count | 2-5 |
| [2] | BG colors | >= 15 RGB delta |
| [3] | Grid layouts | >= 2 |
| [4] | Per-category mechanisms met | S/T/M/B/R: each >= 1 |
| [5] | Transition types | >= 3 |

**New 3 (Reports 83, 68):**

| Check | What | Threshold |
|-------|------|-----------|
| [6] | Fractal Echo Table present | 5 rows + consistent pattern direction |
| [7] | Transition Table valid | >= 3 channels shift at every zone boundary |
| [8] | Channel map complete | All 6 channels have before/after values |

### 7.3 Failure Behavior
- ALL must PASS
- Any FAIL -> return to TC

### 7.4 Intelligence at This Stage (Lines 364-369)
- L1: FULL (bg delta checked)
- L2: NEW -- checked via fractal echo table requirement
- L3: NEW -- checked via transition table completeness
- L4: NEW -- checked via channel count >= 3 per boundary
- L5: ABSENT (not enforceable at gate level -- judgment domain)

### 7.5 What the Builder Receives After Passing (Lines 372-381)
8 files total:
1. _build-recipe.md (TC output, ~200-400 lines)
2. Transition Table (YAML, per-boundary x 6 channels)
3. Fractal Echo Table (5-row scale coverage)
4. operational-recipe-template.md (~300 lines) [NEW - Layer A]
5. tokens.css
6. prohibitions.md
7. merged-components.css
8. mechanism-catalog.md (FULL, 18 mechanisms)

---

## 8. WAVE 1: BUILD EXECUTION (Lines 383-662)

### 8.1 Agent
- **Single Opus Builder**
- Time: ~90-150 minutes (autonomous)
- Reads 8 files (was 6)
- Total input: ~1,300 lines (was 1,150)

### 8.2 Five Experiment Approaches (Lines 392-435)

**A) RECIPE (PV2 as designed, Report 17)**
- 300-line template + 200-400 line TC-generated instance
- 9 sequential phases, specific CSS values
- Builder follows steps IN ORDER
- Ceiling: 3/4 complex content, 4/4 simple (Report 85)
- 2D position: HIGH specificity, LOW freedom

**B) PRINCIPLES BRIEF (Reports 29/30)**
- 100-line constraints document, no sequence
- Builder composes freely within constraints
- Gates + PA verify output
- Ceiling: unknown (no evidence yet)
- 2D position: LOW specificity, HIGH freedom

**C) HYBRID (Reports 17/22, RECOMMENDED by Report 72)**
- Recipe for Phases 0-4 (structural foundation)
- Convention-based freedom for Phases 5-8
- Telescope + microscope at every line
- Ceiling: 3-4/4 (combines structure + creative freedom)
- 2D position: HIGH specificity, HIGH freedom (Phases 5+)

**D) FAT CORE (Reports 31, 94 -- NEW)**
- MERGE TC planner + builder into SINGLE Opus agent
- Agent reads content directly, plans AND builds in 1 pass
- ~100-line conventions brief (WHAT+WHY, not HOW)
- NO handoff = NO Boundary 3 compression
- 3 phase-locked gates (not 15 post-build gates)
- Same PA shell (9 auditors + weaver)
- Fix cycle uses SAME agent (compositional memory)
- Ceiling: 4/4 possible (CD-006 model = convention)
- 2D position: HIGH specificity, MAXIMUM freedom
- RISK: N=0 (never tested). Self-assessment bias.

**E) SINGLE OPUS, NO PIPELINE (Report 31 -- cheapest test)**
- 1 Opus agent + content + soul constraints + thresholds
- 42 lines of instruction. No TC. No recipe. No gates.
- Tests: Is ALL pipeline infrastructure unnecessary?
- If PA-05 >= 3/4 -> entire pipeline is unjustified
- Cost: ~$5, ~2 hours. THE CHEAPEST EXPERIMENT.
- 2D position: LOW specificity, MAXIMUM freedom

### 8.3 The 2D Model (Lines 440-465, Report 85)
- Replaces 1D checklist->recipe->convention
- Two axes: SPECIFICITY (thresholds, exact values, constraints) x FREEDOM (creative authority)
- Four quadrants:
  - HIGH spec, LOW free: A) Recipe (PA-05 3-4/4, Remediation 2.5/4)
  - HIGH spec, HIGH free: C) Hybrid (PA-05 3-4/4 est., Middle 4/4)
  - LOW spec, LOW free: Flagship 1.5/4 (FAILURE -- never repeat)
  - LOW spec, MAX free: E) Single Opus (PA-05 unknown, CD-006 39/40)
  - D) Fat Core = HIGH specificity + MAX freedom (UNTESTED QUADRANT, predicted 3.0-3.5/4 first build)

### 8.4 Experiment Priority Order (Lines 469-503)

| Priority | Experiment | Cost | Time | Decision Gate |
|----------|-----------|------|------|---------------|
| 1 (first) | E: Single Opus, No Pipeline | $5 | ~2 hrs | PA-05 >= 3/4 -> STOP. Pipeline is overhead. |
| 2 | D: Fat Core | $15 | ~3 hrs | PA-05(D) >= 3/4 -> Fat Core is the architecture |
| 3 | A: Opus + Minimal Prompt | 42 lines | - | May be merged with EXP E |
| 4 | B: Opus + Full Recipe | 650 lines + TC | - | Does recipe add value over minimal? |
| 5 | C: Opus + Principles Brief + Gates | 100 lines | - | Do constraints + verification beat recipe? |

Decision Tree (Lines 497-501):
- E >= 3/4? -> Pipeline unnecessary (highest leverage finding)
- D >= 3/4? -> Fat Core architecture wins. Codify that.
- B > A? -> Recipe adds value. Determine how much.
- C >= B? -> Recipe unnecessary. Gates + brief sufficient.
- All < 3/4 -> Investigation missed something fundamental.

All experiments use RESEARCH-SYNTHESIS.md, same Mode 4 PA (9 auditors).

### 8.5 Builder's Integrated Knowledge -- Telescope + Microscope (Lines 506-549, Report 84)
- Builder gets BOTH telescope (WHY) and microscope (HOW) at every line -- INTERLACED, not separate documents.
- Example format: CSS comment with compositional intent ABOVE the actual CSS rule.
- Transition table as bridge: contains BOTH semantic direction (telescope: "DEEPENING") AND exact CSS values (microscope: "background: #F0EBE3").

### 8.6 Builder File Set (Lines 535-547)
8 files, ~1,300 lines total:
1. _build-recipe.md (TC output, ~200-400 lines, telescope+micro)
2. Transition table (YAML, ~80-150 lines per-boundary channels)
3. Fractal echo table (5-row scale coverage)
4. operational-recipe-template.md (~300 lines, Layer A)
5. tokens.css (design tokens)
6. prohibitions.md (soul constraints)
7. merged-components.css (component library)
8. mechanism-catalog.md (FULL 18 mechanisms)

vs. master prompt builder: 75 lines (13.4% visibility)
vs. PV2 builder: ~1,300 lines (100% visibility + compositional)

### 8.7 9-Phase Build (Lines 551-604)

| Phase | Name | Details |
|-------|------|---------|
| Phase 0 | Content Analysis + Zone Architecture | |
| Phase 1 | HTML Skeleton | Components >= 10/26, ARIA >= 3 |
| Phase 2 | CSS Reset + Soul + Base Typography | |
| Phase 3 | Zone Backgrounds | >= 15 RGB delta, use transition table values DIRECTLY (lossless from TC) |
| Phase 4 | Structural Borders + Transitions | 3+ types |
| -- | POSSIBLE FREEDOM BOUNDARY (Hybrid Approach C) | -- |
| Phase 5 | Typography Zones | 3-zone arc, use transition table |
| Phase 6 | Element-Level Richness | Mechanism catalog deploy |
| Phase 6.5 | OBSERVATION PAUSE (NEW, Report 84, F84-3) | Builder renders, scrolls, writes 2-3 observations. "What feels designed? What feels flat? Adjust." Modeled on CD-006's metacognitive loop. ~5-10 min. THE cheapest change with highest expected impact. |
| Phase 7 | Accessibility | WCAG 2.1 AA, ~180 lines CSS |
| Phase 8 | Verification + CASCADE VALUE TABLE (MANDATORY) | NEW: Multi-coherence binding check. NEW: Fractal echo verification (5 scales). NEW: Anti-scale self-test (3 questions). |

### 8.8 Phase 8 Anti-Scale Self-Test Questions (Lines 579-582)
- Q1: "Does every section earn its visual weight?"
- Q2: "Could you remove a CSS rule without losing meaning?"
- Q3: "Does restraint create more impact than addition?"

### 8.9 Inter-Phase Micro-Gates (Lines 584-595, NEW, Reports 67, 104 BLOCKING)

| Micro-Gate | After Phase | Checks |
|------------|-------------|--------|
| MG-1 | Phase 1 (HTML) | DOM: landmarks, skip, component classes, zones |
| MG-2 | Phase 3 (bg) | bg delta >= 15 RGB |
| MG-3 | Phase 4 (border) | border-left present, distinct border values |
| MG-4 | Phase 5 (type) | font-size delta >= 2px |

- Each micro-gate: ~30 seconds, Playwright
- Catches foundation failures at ~30 min (not 90-150 min post-build)
- Total: ~2 min
- Makes phase enforcement INHERENT, not advisory

### 8.10 Creative Authority Clause (Lines 597-604, NEW, Reports 84, 31)
- "You may override ANY non-soul value if you log the override with compositional reasoning. Soul values (border-radius: 0, box-shadow: none, container 960px, font trinity) are LOCKED. Everything else is a SUGGESTION that you can improve upon."
- Without this clause: recipe ceiling = 3/4 (Report 85)
- With this clause: convention ceiling = 4/4+ possible

### 8.11 INHERENT vs BOLTED-ON at Wave 1 (Lines 607-662, Report 87)

**Currently INHERENT:**
- TC invocation (builder needs _build-recipe.md to start)
- Content markdown (entry point requires file)
- Transition table (builder's Phases 3-5 consume table values)

**Currently BOLTED ON:**
- Recipe phases (builder CAN write all CSS in one pass)
- Soul constraints (gate checks after, not during)
- Perception thresholds (text in recipe, gate checks after)
- Checkpoint approvals (planner timeout = builder continues)
- Component library adoption (text instruction + post-hoc gate)
- Cascade value table (deliverable, nothing depends on it)
- Accessibility (Phase 7 = text instruction, page renders without)

**Fix Approaches (Lines 625-628):**
- Template HTML with required slots (unfilled {{VAR}} = no output)
- Phase-locked build (orchestrator withholds Phase N+1 until N done)
- Artifact dependency (gate runner REQUIRES cascade value table)
- Schema-validated YAML (transition table must match schema or fail)

**Honest Assessment (Lines 630-636):**
- Making ALL features inherent is architecturally impossible for LLM-based builders
- Pragmatic approach: make ARTIFACT PRODUCTION inherent, accept PROCESS SEQUENCE is advisory

### 8.12 Recipe Ceiling -- 2D Model (Lines 638-660, Report 85)
- 1D (WRONG): Checklist -> Recipe -> Convention
- 2D (RIGHT): Specificity x Freedom
- Checklist -> 1.5/4 | Recipe -> 3-4/4 | Convention -> 4/4+
- Ceiling is VARIABLE: depends on content complexity, builder model (Opus > Sonnet), whether recipe encodes INTENT (why) or just PROCEDURE (how)
- **The 4 Irreducible Capabilities past recipe (Lines 649-654):**
  1. Content-form resonance: visual decisions emerge FROM content
  2. Proportional intelligence: knowing the right AMOUNT of weight
  3. Creative surprise: unexpected-yet-perfect compositional choices
  4. Emergent coherence: the whole exceeds the sum of its parts
  - Define gap between COMPOSED (3/4) and DESIGNED (4/4)
- **The Ceiling Sentence (Report 31, Lines 656-659):** "Do NOT deviate from the instance values without planner approval" -- this single sentence IS the 3/4 ceiling. REMOVING it (via Creative Authority Clause) is the highest-leverage edit.

### 8.13 Builder Output
- output.html
- cascade value table

---

## 9. WAVE 2: DUAL-LAYER VERIFICATION (Lines 668-748)

### 9.1 Time: ~30-45 minutes

### 9.2 Layer 1: Programmatic Gates (Lines 672-730)
- Playwright + getComputedStyle
- 15 binary checks (was 12). ALL BLOCKING. ANY fail = fix cycle.

### 9.3 Gate Inventory (Lines 678-703)

| Gate | What It Checks | Threshold |
|------|---------------|-----------|
| SC-01 | Container width | 940-960px |
| SC-02 | Soul properties | border-radius: 0, box-shadow: none |
| SC-03 | Font trinity | Only 3 allowed fonts |
| SC-04 | Warm palette | R >= G >= B |
| SC-05 | No pure extremes | No #000 or #FFF |
| SC-06 | ARIA landmarks | >= 3 |
| SC-07 | Skip link | Present |
| SC-08 | Component library | >= 3 classes used |
| SC-09 | Background delta | >= 15 RGB adjacent |
| SC-10 | Stacked gap | <= 108px total |
| SC-11 | Typography zones | >= 2px delta |
| SC-12 | Zone count | 2-5 zones |
| SC-13 | Multi-coherence [NEW] | >= 3 channels shift at every zone boundary |
| SC-14 | Sub-perceptual prevention [NEW] | No letter-spacing < 0.02em; no bg deltas 1-14 within a zone |
| SC-15 | Border presence [NEW] | >= 1 border-left >= 3px OR >= 2 `<hr>` |

### 9.4 New Gates Detail (Lines 705-713)
- **SC-13:** Measures background, font-size, font-weight, letter-spacing, border-left, padding at each zone boundary. If < 3 shift, FAIL. ~70% confidence (can count shifts but not semantic coherence). Source: Report 73.
- **SC-14:** Catches sub-perceptual CSS waste (flagship spent 22% of CSS / 227 lines on letter-spacing 0.001-0.01em). Flags any imperceptible values.
- **SC-15:** Catches the flagship's zero-borders problem.

### 9.5 Intelligence at This Stage (Lines 715-721)
- L1: FULL (SC-01 through SC-12)
- L2: ABSENT* (no gate checks scale coverage yet; SC-13B identified as needed but not designed)
- L3: MINIMAL (SC-09 bg, SC-11 typography)
- L4: NEW -- SC-13 checks channel shift count
- L5: ABSENT (judgment domain -- PA handles this)

### 9.6 The 70/30 Boundary (Lines 723-728, Report 73)
- Programmatic gates catch ~70% of issues cheaply (~2 min)
- Remaining ~30% requires perceptual judgment (PA auditors)
- Gates CANNOT judge: semantic COHERENCE, PROPORTION, SURPRISE

### 9.7 Layer 2: Perceptual Audit (Lines 734-748)
- **Mode 4 -- 9 Fresh-Eyes Opus Auditors**
- UNCHANGED from original PV2
- Process: Screenshot pre-capture -> 9 parallel Opus auditors -> PA weaver
- 48 questions, zero build context, fresh-eyes only
- PA-05 scoring: 1/4 FLAT | 2/4 STYLED | 3/4 COMPOSED | 4/4 DESIGNED

### 9.8 PA Intelligence (Lines 742-747)
- L1: ABSENT (correct -- PA measures perception, not numbers)
- L2: MODERATE (auditors see fractal patterns when present)
- L3: MODERATE (auditors see channel variety when present)
- L4: HIGH (auditors sense DESIGNED as implicit multi-coherence)
- L5: MODERATE (auditors sense density x restraint intuitively)

---

## 10. WAVE 3: FIX INTEGRATION (Lines 752-803)

### 10.1 Time: ~30-60 minutes (max 3 cycles)

### 10.2 Decision Matrix (Lines 757-783)

| Condition | Action |
|-----------|--------|
| ALL PASS + PA-05 >= 3/4 | SHIP |
| GATES PASS + PA-05 < 3/4 | FIX CYCLE: builder applies top-3 fixes -> 2-PA check (not full 9) -> loop if still < 3/4 and cycle <= 3 |
| ANY FAIL AFTER 3 CYCLES | ESCALATE TO USER |

### 10.3 Gate-Generated Fix Recipes (Lines 788-793, Report 73, NEW)
- When a gate fails (e.g., SC-09 "zone 1-2 delta = 8 RGB"), the gate runner outputs a SPECIFIC CSS fix recipe
- Example: "FIX: Change .zone-2 background from #FAF5ED to #F0EBE3 (delta increases from 8 to 19 RGB points)"
- Builder receives EXACT CSS, not generic instructions

### 10.4 Convention Escalation Path (Lines 795-800, Report 85, NEW)
- When PA-05 = exactly 3/4 (COMPOSED, not DESIGNED) and user wants 4/4:
  - Re-engage TC for metaphor-driven adaptation
  - Give builder convention-based creative freedom for a 2nd pass
  - Addresses the recipe ceiling without abandoning the pipeline

### 10.5 Unchanged
- Max 3 cycles
- 2-PA re-check (not full 9)
- ESCALATE to user on 3x fail

---

## 11. OUTPUT (Lines 808-821)

### 11.1 Three Files at Deterministic Paths
1. `path/to/output.html`
2. `path/to/_pa-report.md`
3. `path/to/_build-log.md`

### 11.2 Status
- UNCHANGED from original PV2

---

## 12. COMPLETE FLOW -- BIRD'S EYE VIEW (Lines 824-880)

### 12.1 Sequential Flow Summary

```
/build-page content.md
    |
    v
WAVE 0: Enriched TC (Opus, 30-60 min)
  Phases 0-3.5 + 4T, ~660 lines
  Output: _build-recipe.md + Transition Table (YAML) + Fractal Echo Table
    |
    v
WAVE 0.5: Fresh-Eyes Metaphor Check (5-10 min)
  Binary: STRUCTURAL or ANNOUNCED, UNCHANGED
    |
    v
WAVE 0.9: Enriched Handoff Gate (~1-2 min)
  8 Binary Checks (was 5), NEW: fractal echo, transition table, channel map
  All must PASS -> return to TC on fail
    |
    v
WAVE 1: Opus Builder (90-150 min)
  [EXPERIMENT] Recipe / Brief / Hybrid / Fat Core / Single Opus
  8 input files (~1,300 lines), Telescope + Microscope interlaced
  Output: output.html + cascade table
    |
    v
WAVE 2: Dual Verification (30-45 min)
  Layer 1: Playwright (15 binary gates), SC-13/14/15 enforce L3/L4
  Layer 2: 9 fresh-eyes PA auditors
    |
    v
WAVE 3: Fix Integration (30-60 min, max 3 cycles)
  SPECIFIC CSS fixes (gate-generated), not generic instructions
  Convention escalation path for 4/4
    |
    v
OUTPUT: output.html + _pa-report.md + _build-log.md
```

---

## 13. NEW ARTIFACTS -- WHAT MUST BE WRITTEN (Lines 883-917)

### 13.1 Four New Files (~1,350 lines total)

| File | Location | Lines | Purpose |
|------|----------|-------|---------|
| SKILL.md (orchestrator) | ~/.claude/skills/build-page/SKILL.md | ~205 | Fire-and-forget entry point. Invokes TC -> validates -> spawns builder -> verifies -> fixes. Single path (no tier routing). ALWAYS FLAGSHIP hardcoded. |
| operational-recipe-template.md | design-system/compositional-core/operational-recipe-template.md | ~300 | Layer A -- universal recipe template. 9 phases. Action verbs, inline perception checks, "Can you SEE?" prompts. Extracts builder content FROM TC skill. |
| perception-thresholds.md | design-system/compositional-core/perception-thresholds.md | ~80 | Canonical threshold table + 6-channel definitions. Single source of truth for all perception values. |
| gate-runner.js | design-system/compositional-core/gate-runner.js | ~400 | 15 binary gates (SC-01 through SC-15) via Playwright. getComputedStyle on every element. Gate-generated fix recipes (SPECIFIC CSS changes). 70/30 boundary. |

### 13.2 Edits to Existing Files

| File | Change |
|------|--------|
| TC SKILL.md | 1,933 -> ~660 lines (-66%) |
| PA SKILL.md | Add perception thresholds at 108px |
| CLAUDE.md | Opus builder unconditional, full catalog access |
| semantic-rules.md | S-09 stacking at 108px |
| tokens.css | S-09 stacking at 108px |

### 13.3 Net Impact
- ~1,350 new lines + ~1,270 lines removed from TC = net ~80 lines added

---

## 14. BOUNDARY CROSSINGS (Lines 920-974)

### 14.1 11 Boundaries, 4 Destructive (now with fixes)

| Boundary | Description | Classification | Fix |
|----------|-------------|----------------|-----|
| B1 | Content -> TC Planner | CONSTRUCTIVE | No fix needed |
| B2 | TC internal (Phase 1->2->3->3.5) | CONSTRUCTIVE | Minor fix: preserve runner-up metaphor + rejected tensions (~5 lines) |
| B3 | TC -> _build-recipe.md | CRITICAL FIX (THE highest-leverage fix) | Structured YAML + telescope comments + transition table. Intelligence survival ~35% -> ~75%. |
| B4 | Build plan -> Handoff Gate | NECESSARY (enriched) | 5 -> 8 checks. Makes L2/L3/L4 INHERENT. |
| B5 | Handoff -> Builder | CONSTRUCTIVE (enriched) | 6 -> 8 files, ~1,150 -> ~1,300 lines, telescope+microscope interlaced |
| B6 | Builder -> HTML | CONSTRUCTIVE | No fix needed. "CSS IS compositional intelligence." (Report 28) |
| B7 | HTML -> Gate Runner | NECESSARY (enriched) | 12 -> 15 checks (+multi-coherence, sub-perceptual, borders) |
| B8 | HTML -> PA Auditors | NECESSARY | UNCHANGED. Screenshot pre-capture -> 9 fresh-eyes. Zero context. |
| B9 | PA -> Fix Cycle | CONSTRUCTIVE (fix) | Generic "top-3 issues" prose -> SPECIFIC CSS fix recipes |
| B10 | Fix Cycle -> Builder | CONSTRUCTIVE | No fix needed |
| B11 | Fix Cycle -> Output | NECESSARY | No fix needed |

---

## 15. FAT CORE ALTERNATIVE ARCHITECTURE (Lines 977-1055)

### 15.1 Contrarian Thesis (Report 31, Line 982)
- Builder INPUT VOLUME is the primary bottleneck, NOT handoff compression
- Evidence: Middle (100 lines -> 4/4), Flagship (530 lines -> 1.5/4), Remediation (300 lines -> 2.5/4)
- Pattern: quality INVERSELY correlates with builder input volume, sharp dropoff above ~300 lines

### 15.2 Fat Core Architecture (Report 94, Lines 988-1020)
- "One Artist, Many Critics"
- ORCHESTRATOR (thin, ~250 lines, mechanical routing only)
  - Spawns ONE Opus CORE AGENT (Plans AND builds in 1 pass -- NO Boundary 3)
    - Reads: content.md + 100-line conventions brief + reference files (tokens, prohibitions, catalog)
    - Phase A: Understand content (10-20 min)
    - Phase B: Plan zones + mechanisms (10-20 min)
    - Phase C: Build HTML+CSS (60-120 min)
    - Phase D: Self-verify cascade table (10-15 min)
  - Between phases: runs 3 phase-locked GATES
    - G1: After skeleton (landmarks, components, zones)
    - G2: After CSS (bg delta, palette, typography, soul)
    - G3: Comprehensive (all checks + multi-coherence)
  - After build: Pre-captures screenshots
  - Spawns 9 PA auditors (fresh-eyes, UNCHANGED) + 1 PA weaver
  - If PA-05 < 3/4: routes fixes to SAME core agent (preserves compositional memory)
- OUTPUT: HTML + PA report + build log

### 15.3 Comparison: Linear Pipeline vs Fat Core (Lines 1024-1040)

| Dimension | Linear Pipeline | Fat Core |
|-----------|----------------|----------|
| Agent count | 12-14 | 12 (same PA shell) |
| Boundaries | 11 (4 destructive) | 7 (0 destructive) |
| Builder input | 1,300 lines (8 files) | Content + 100-line brief + ref files |
| Intelligence survival | ~25% end-to-end (Report 74) | ~60-70% (projected) |
| Build time | 160-270 min | 120-210 min |
| Recipe ceiling | 3/4 (recipe) | 4/4 (convention) |
| Failure mode | Compliant but flat | Creative but may skip |
| Failure mitigation | Recipe prevents omit | Gates catch omissions |
| N (evidence) | 3 (Middle, Flagship, Remediation) | 0 (UNTESTED) |
| Cost/page | ~$20-60 | ~$15-40 |

### 15.4 Why Fat Core Might Win (Lines 1042-1048)
- CD-006 (39/40) used ONE agent. Middle (4/4) had tight core.
- Flagship (1.5/4) had the MOST elaborate separation. Worst result.
- "The agent that UNDERSTANDS the content WRITES the CSS" (Report 94)
- Eliminates Boundary 3 entirely (THE critical compression point)
- Fix cycle uses SAME agent (compositional memory preserved)

### 15.5 Why Fat Core Might Fail (Lines 1049-1054)
- Core agent holds 2,500-4,000 lines. Context degradation risk.
- Self-assessment bias (can't catch own bad metaphors)
- No intermediate planning review (planner and builder are same agent)
- Mitigation: Option A (fresh-eyes metaphor validator, +5-10 min)
- N=0. Must EXPERIMENT before adopting.

---

## 16. ANTI-DEGRADATION PATTERNS (Lines 1057-1102)

### 16.1 Six Failure Modes (Lines 1061-1067)

| Code | Name | Description |
|------|------|-------------|
| F-1 | Format loss | Intelligence changes format, loses information |
| F-2 | Re-derivation error | Downstream agent re-creates existing work |
| F-3 | Context competition | Multiple inputs compete for attention |
| F-4 | Stacked ambiguity | Small ambiguities compound across boundaries |
| F-5 | Omission drift | Required elements silently disappear |
| F-6 | Perceptual blindness | Builder cannot perceive own output quality |

### 16.2 Top 5 Anti-Degradation Patterns (Lines 1069-1101, from 28 total, Report 95)

| Code | Name | Mechanism | Prevents | Cost |
|------|------|-----------|----------|------|
| IT-1 | Triple Encoding (Shannon error correction) | Encode top 5 decisions in 3 formats: YAML + CSS + semantic. If one channel degrades, others correct. | F-1, F-4 | +15 min TC, +40 lines/build |
| SE-4 | Circuit Breakers (fail-fast mid-build) | After Phase 3: "Can I SEE zone boundaries?" If no, STOP. After Phase 5: "Can I see 3 text sizes?" If no, STOP. | F-1 compounding, F-6 | +6-10 min |
| MF-5 | Poka-Yoke (mistake-proofing) | Replace "warm cream spectrum" with {hex: "#fefcf3"} LOCKED. Builder CANNOT misinterpret exact values. | F-2, F-4 | Subsumed by transition table |
| MA-1 | Conductor Model (direction statement) | 3-5 line DIRECTION STATEMENT at top of every recipe phase. "This page teaches through progressive revelation." Builder re-reads purpose at each phase. | F-3, F-5 | +30 lines recipe, +5 lines TC |
| IT-3 | SNR Optimization (300-line builder brief) | Current 1,150 lines, SNR ~0.5. Optimized: ~400-500 lines, SNR ~0.9. Or 300-line cap (Report 31). | F-3 (context competition) | ~40 lines orch. |

Full catalog: `ephemeral/compositional-intelligence/95-anti-degradation-patterns.md` (28 patterns from 4 domains)

---

## 17. FOUR-WAY COMPARISON TABLE (Lines 1105-1146)

### 17.1 Master Prompt vs Original PV2 vs Updated PV2 vs Fat Core

| Dimension | Master Prompt | Original PV2 | Updated PV2 | Fat Core (NEW) |
|-----------|--------------|--------------|-------------|----------------|
| Builder input | 75 lines (13.4%) | 1,150 lines (recipe+ref) | 1,300 lines (tele+micro) | ~300 lines (brief+content) |
| Instruction type | Checklist | Recipe | Experiment: Recipe/Brief/Hybrid/FatCore | Convention (~100 lines) |
| Intelligence levels | L1 only (text) | L1 only (gates) | L1-L4 checked (gates+artif.) | L1-L5 possible (one agent) |
| TC scope | Absent | 1,878 lines (plan+build) | ~660 lines (planner only) | MERGED into core agent |
| Key artifact | None | op-recipe | Transition Tbl + Fractal Echo | Conventions Brief (~100 ln) |
| Gates | 0 | 12 | 15 post-build + 4 micro-gate | 3 phase-locked (during build) |
| Boundaries | N/A | 11 (4 destr.) | 11 (4 destr.) | 7 (0 destr.) |
| Builder model | Sonnet | Opus | Opus | Opus |
| PA auditors | 0-2 | 9 | 9 | 9 (unchanged) |
| PA-05 ceiling | 1.5/4 (checklist) | 3/4 (recipe) | 3-4/4 (recipe+WHY) | 4/4 possible (convention) |
| Cost/page | ~$5 | ~$15-30 | ~$20-60 | ~$15-40 |
| Fix recipes | Generic prose | Generic prose | Gate CSS | Same agent (memory kept) |
| N (evidence) | 1 (Flagship) | 2 (Middle, Rem) | 0 (UNTESTED) | 0 (UNTESTED) |

---

## 18. KNOWN RISKS + OPEN QUESTIONS (Lines 1149-1215)

### 18.1 Nine Risks

| Risk | Title | Key Detail | Mitigation |
|------|-------|-----------|------------|
| R1 | Recipe Ceiling at 3/4 (Report 85) | Variable: 3/4 complex, 4/4 simple. 4 irreducible capabilities. | Convention escalation path for 4/4 |
| R2 | Transition Table Complexity | YAML ~80-150 lines/page. TC generation + builder consumption both untested. | Experiment B tests full recipe + transition table |
| R3 | INHERENT vs BOLTED-ON Gap (Report 87) | Most features remain advisory (LLM limitation). Template HTML doesn't prevent creative rewriting. | ARTIFACT dependency over PROCESS enforcement |
| R4 | Content Generalizability (N=2) | All evidence from 1-2 content types. Experiments test RESEARCH-SYNTHESIS.md only. | After experiments, build on 5 content types |
| R5 | L5 (Anti-Scale) Remains Absent | No programmatic gate can enforce it. Only PA can evaluate. Phase 8 self-test is advisory. | Accept L5 as ceiling between COMPOSED and DESIGNED. Requires Opus fluency, not infrastructure. |
| R6 | Cost Blind Spot (Report 31, NEW) | $20-60/page. 20-50 pages = $400-3,000. No report evaluates whether worth it. | Run Experiment E ($5) first. If works, cost drops 4-12x. |
| R7 | Content Dependency (Report 31, NEW) | Simple content may score DESIGNED with minimal infrastructure. Complex content may cap at STYLED regardless. | Test on 5 content types after initial experiments |
| R8 | Temporal Degradation (Report 31, NEW) | LLM behavior changes with model updates. Recipe producing COMPOSED today may produce FLAT after update. | No report addresses versioning or regression testing |
| R9 | Builder Input Volume as PRIMARY Bottleneck (Reports 31, 95, NEW) | Quality inversely correlates with input volume. Middle 100 lines -> 4/4, Flagship 530 lines -> 1.5/4. Every recommendation adding material worsens this. | 300-line cap OR Fat Core (eliminates the problem) |

---

## 19. MASTER SYNTHESIS VERDICT (Lines 1217-1258)

### 19.1 Verdict (Report 32, Lines 1221-1240)
- **FAT CORE ARCHITECTURE**
- One Opus agent that plans AND builds. Thin verification shell.
- Quote: "Intelligence cannot be compressed into documents and survive handoff between agents. Put the intelligence WHERE IT WILL BE USED -- inside one capable agent with minimal constraints and maximum creative authority. Verify the output, not the process. Trust the agent, constrain the soul."

### 19.2 Evidence Trail
- CD-006 (1 Opus, minimal pipeline) -> 39/40
- Middle (8 agents, 100-line input) -> PA-05 4/4 DESIGNED
- Flagship (19 agents, 530-line input) -> PA-05 1.5/4 FLAT
- Remediation (Opus, ~300-line input) -> PA-05 2.5/4 COMPOSED
- Quality INVERSELY correlates with agent count AND input volume.

### 19.3 Codify Immediately (Before Experiments, Lines 1242-1251)
1. **conventions-brief.md** (~100 lines) at `design-system/compositional-core/guidelines/conventions-brief.md`
   - 5 sections: Perception Thresholds | Soul | Spatial Rules | Quality Floor | Creative Authority
2. **experiment-protocol.md** (~80 lines) at `ephemeral/compositional-intelligence/experiment-protocol.md`
   - 3 experiments with exact inputs, success criteria, decision gates

### 19.4 Defer Until Experiments Prove Value (Lines 1253-1258)
- Pipeline v2 orchestrator code
- TC skill narrowing
- Gate runner updates (SC-13 to SC-15)
- Operational recipe (INDEFINITELY unless experiments prove brief insufficient)
- Transition table format (let Core agent create organically)

---

## 20. COST MODEL (Lines 1261-1295)

### 20.1 PV2 Full Pipeline: ~$20-60 per page (4-6 hours Opus compute)

| Wave | Agent | Time | Cost |
|------|-------|------|------|
| Wave 0: TC Planning | Opus | 30-60 min | ~$3-8 |
| Wave 0.5: Metaphor Validation | Opus | 5-10 min | ~$1-2 |
| Wave 0.9: Handoff Gate | Programmatic | ~1-2 min | ~$0 |
| Wave 1: Build Execution | Opus | 90-150 min | ~$8-25 |
| Wave 2: 15 Gates + 9 PA Auditors | Mixed | 30-45 min | ~$5-15 |
| Wave 3: Fix Cycles | Up to 3x | 30-60 min | ~$3-10 |
| **TOTAL** | | **4-6 hours** | **~$20-60** |

### 20.2 At Scale
- 20 pages: $400 - $1,200
- 50 pages: $1,000 - $3,000
- 100 pages: $2,000 - $6,000

### 20.3 Alternative Cost Points
- Fat Core: ~$15-40 per page (3-4 hours)
- Single Opus (Exp A/E): ~$5-10 per page (1-2 hours)

### 20.4 Unresolved Question
- Is compositional richness WORTH $20-60/page? -- user decision, not architectural one (Report 31)

---

## 21. NEXT STEPS -- 3 EXPERIMENTS IN STRICT SEQUENCE (Lines 1298-1353)

### 21.1 Experiment A: The $5 Experiment (RUN FIRST)
- Input: RESEARCH-SYNTHESIS.md + conventions brief (~100 lines) + tokens.css + prohibitions summary
- Single Opus agent. No pipeline. No orchestrator. No verification shell.
- Cost: ~$5-10. Time: ~30 min build + 1 hr PA.
- Decision Gate:
  - PA-05 >= 3.0 -> Pipeline is UNNECESSARY. Just conventions brief.
  - PA-05 2.0-2.9 -> Proceed to Experiment B (Fat Core).
  - PA-05 < 2.0 -> Something wrong with conventions brief.

### 21.2 Experiment B: Fat Core (RUN SECOND, if A < 3.0)
- Input: Same content. Full Fat Core architecture (12 agents).
- Orchestrator + Core Agent (plans + builds) + 9 PA + Weaver.
- Cost: ~$30-50. Time: ~90 min build + 1.5 hr PA.
- Decision Gate:
  - PA-05 improvement >= 0.5 over A -> Shell adds value.
  - PA-05 improvement < 0.5 -> Shell is overhead. Simplify.

### 21.3 Experiment C: Recipe Comparison (THIRD, only if needed)
- Input: Same content. Fat Core + 650-line recipe (not brief).
- Directly tests recipe ceiling hypothesis.
- Cost: ~$30-50. Time: ~90 min.
- Decision Gate:
  - Recipe < Brief -> Ceiling CONFIRMED. Conventions win.
  - Recipe >= Brief -> Ceiling REJECTED. Investigate.

### 21.4 Universal Experiment Parameters
- Content: RESEARCH-SYNTHESIS.md (same as Flagship)
- PA: Mode 4, 9 blind Opus auditors + 1 weaver
- Target: PA-05 >= 3.0/4 | Soul: 0 violations | Container: 960px
- Mechanisms: >= 8 across >= 4 categories

### 21.5 Full Decision Tree
- A >= 3.0 -> STOP. Conventions brief = the pipeline.
- A < 3.0, B >= 3.0 -> Fat Core is the architecture.
- A < 3.0, B < 3.0 -> Investigation missed something fundamental.
- C tests recipe ceiling: Recipe < Brief = confirmed. Optional.
- Then: Codify the winning approach.
- Then: Expand to 5 content types. Track PA-05 per type.

---

## 22. COMPLETE AGENT INVENTORY

### 22.1 Linear Pipeline (Updated PV2) -- All Agents

| Agent | Model | Wave | Role | Time |
|-------|-------|------|------|------|
| Orchestrator | -- | Entry | Router, invokes TC, spawns builder, runs gates, manages fix cycles | Throughout |
| TC Planner | Opus | Wave 0 | Content analysis, tension derivation, metaphor collapse, transition/fractal table generation | 30-60 min |
| Fresh-Eyes Metaphor Validator | Opus | Wave 0.5 | Binary: STRUCTURAL or ANNOUNCED | 5-10 min |
| Handoff Gate | Programmatic | Wave 0.9 | 8 binary checks | 1-2 min |
| Opus Builder | Opus | Wave 1 | 9-phase build from recipe + reference files | 90-150 min |
| Gate Runner | Programmatic (Playwright) | Wave 2 Layer 1 | 15 binary gates (SC-01 through SC-15) | ~2 min |
| PA Auditor 1-9 | Opus | Wave 2 Layer 2 | Fresh-eyes perceptual audit, 48 questions | ~30-45 min total |
| PA Weaver | Opus | Wave 2 Layer 2 | Synthesizes 9 auditor reports into PA-05 score + top-3 issues | Included in Wave 2 |
| Fix-Cycle Builder | Opus (same as builder) | Wave 3 | Applies top-3 fixes per cycle, up to 3 cycles | 30-60 min total |
| Fix-Cycle PA 1-2 | Opus | Wave 3 | 2-PA re-check (not full 9) per fix cycle | Per cycle |

**Total Agent Count (Linear Pipeline): 12-14** (1 orchestrator + 1 TC + 1 metaphor validator + 1 builder + 9 PA auditors + 1 PA weaver + 2 fix-cycle PAs)

### 22.2 Fat Core Architecture -- All Agents

| Agent | Model | Role | Time |
|-------|-------|------|------|
| Orchestrator | -- | Thin (~250 lines), mechanical routing only | Throughout |
| Core Agent | Opus | Plans AND builds in 1 pass (Phases A-D) | 90-175 min |
| PA Auditor 1-9 | Opus | Fresh-eyes, UNCHANGED from linear | ~30-45 min |
| PA Weaver | Opus | Synthesizes 9 reports | Included |
| (Optional) Fresh-Eyes Metaphor Validator | Opus | Mitigation for self-assessment bias | +5-10 min |

**Total Agent Count (Fat Core): 12** (same PA shell)

### 22.3 Experiment E -- Agents

| Agent | Model | Role |
|-------|-------|------|
| Single Opus | Opus | Content + 42 lines instruction. No TC. No recipe. No gates. |
| PA Auditor 1-9 | Opus | Mode 4 PA (shared across all experiments) |
| PA Weaver | Opus | Synthesizes reports |

---

## 23. COMPLETE FILE INVENTORY

### 23.1 Files Referenced in the Pipeline Flow

| File | Role | Created By | Consumed By | Lines |
|------|------|-----------|-------------|-------|
| content.md | User's markdown content | User | TC Planner / Core Agent | Variable |
| _build-recipe.md | TC output: zone map, mechanism deployment, builder warnings, telescope comments, rejected alternatives | TC Planner | Builder, Handoff Gate | ~200-400 |
| Transition Table (YAML) | Per-boundary x 6-channel CSS specification with deltas and semantic directions | TC Planner | Builder (Phases 3-5), Handoff Gate, Gate Runner | ~80-150 |
| Fractal Echo Table | 5-row scale coverage (Nav/Page/Section/Component/Character) | TC Planner | Builder, Handoff Gate | ~20-30 |
| operational-recipe-template.md | Layer A universal recipe template, 9 phases | Pre-written (new file) | Builder | ~300 |
| tokens.css | Design tokens (:root block) | Pre-existing | Builder | ~174 |
| prohibitions.md | Soul constraints (22 prohibitions) | Pre-existing | Builder | ~353 |
| merged-components.css | Component library (31KB) | Pre-existing | Builder | Large |
| mechanism-catalog.md | 18 mechanisms (full) | Pre-existing | Builder | Large |
| output.html | Final HTML page | Builder | Gate Runner, PA Auditors, User | Variable |
| cascade value table | CSS verification artifact | Builder (Phase 8) | Gate Runner (MANDATORY) | Variable |
| _pa-report.md | PA synthesis report | PA Weaver | User | Variable |
| _build-log.md | Build process log | Orchestrator | User | Variable |

### 23.2 New Files to Create (Codification)

| File | Location | Lines | Purpose |
|------|----------|-------|---------|
| SKILL.md (orchestrator) | ~/.claude/skills/build-page/SKILL.md | ~205 | Fire-and-forget entry point |
| operational-recipe-template.md | design-system/compositional-core/operational-recipe-template.md | ~300 | Layer A universal recipe |
| perception-thresholds.md | design-system/compositional-core/perception-thresholds.md | ~80 | Canonical threshold table + 6-channel definitions |
| gate-runner.js | design-system/compositional-core/gate-runner.js | ~400 | 15 gates via Playwright |
| conventions-brief.md | design-system/compositional-core/guidelines/conventions-brief.md | ~100 | 5 sections: Perception Thresholds, Soul, Spatial Rules, Quality Floor, Creative Authority |
| experiment-protocol.md | ephemeral/compositional-intelligence/experiment-protocol.md | ~80 | 3 experiments with exact inputs, success criteria, decision gates |

### 23.3 Files to Edit

| File | Change |
|------|--------|
| ~/.claude/skills/tension-composition/SKILL.md | 1,933 -> ~660 lines (-66%) |
| ~/.claude/skills/perceptual-auditing/SKILL.md | Add perception thresholds at 108px |
| design-system/CLAUDE.md | Opus builder unconditional, full catalog access |
| design-system/compositional-core/guidelines/semantic-rules.md | S-09 stacking at 108px |
| design-system/compositional-core/vocabulary/tokens.css | S-09 stacking at 108px |

### 23.4 Reference Files Mentioned

| File | Context |
|------|---------|
| RESEARCH-SYNTHESIS.md | Content for all experiments |
| CD-006-pilot-migration.html | Evidence: 39/40 score with 1 Opus agent |
| ephemeral/compositional-intelligence/95-anti-degradation-patterns.md | Full catalog of 28 anti-degradation patterns |

---

## 24. COMPLETE GATE INVENTORY

### 24.1 Handoff Gate Checks (Wave 0.9, 8 total)

| # | Check | Threshold | Source |
|---|-------|-----------|--------|
| 1 | Zone count | 2-5 | Original |
| 2 | BG colors delta | >= 15 RGB | Original |
| 3 | Grid layouts | >= 2 | Original |
| 4 | Per-category mechanisms | S/T/M/B/R: each >= 1 | Original |
| 5 | Transition types | >= 3 | Original |
| 6 | Fractal Echo Table present | 5 rows + consistent pattern direction | NEW (Reports 83, 68) |
| 7 | Transition Table valid | >= 3 channels shift at every zone boundary | NEW |
| 8 | Channel map complete | All 6 channels have before/after values | NEW |

### 24.2 Inter-Phase Micro-Gates (Wave 1, 4 total)

| Gate | After Phase | Checks | Time |
|------|-------------|--------|------|
| MG-1 | Phase 1 (HTML) | DOM: landmarks, skip, component classes, zones | ~30 sec |
| MG-2 | Phase 3 (bg) | bg delta >= 15 RGB | ~30 sec |
| MG-3 | Phase 4 (border) | border-left present, distinct border values | ~30 sec |
| MG-4 | Phase 5 (type) | font-size delta >= 2px | ~30 sec |

### 24.3 Programmatic Gates (Wave 2 Layer 1, 15 total)

| Gate | What It Checks | Threshold | Status |
|------|---------------|-----------|--------|
| SC-01 | Container width | 940-960px | Original |
| SC-02 | Soul properties | border-radius: 0, box-shadow: none | Original |
| SC-03 | Font trinity | Only 3 allowed fonts | Original |
| SC-04 | Warm palette | R >= G >= B | Original |
| SC-05 | No pure extremes | No #000 or #FFF | Original |
| SC-06 | ARIA landmarks | >= 3 | Original |
| SC-07 | Skip link | Present | Original |
| SC-08 | Component library | >= 3 classes used | Original |
| SC-09 | Background delta | >= 15 RGB adjacent | Original |
| SC-10 | Stacked gap | <= 108px total | Original |
| SC-11 | Typography zones | >= 2px delta | Original |
| SC-12 | Zone count | 2-5 zones | Original |
| SC-13 | Multi-coherence | >= 3 channels shift at every zone boundary | NEW |
| SC-14 | Sub-perceptual prevention | No letter-spacing < 0.02em; no bg deltas 1-14 within zone | NEW |
| SC-15 | Border presence | >= 1 border-left >= 3px OR >= 2 hr | NEW |

### 24.4 Fat Core Phase-Locked Gates (3 total)

| Gate | After | Checks |
|------|-------|--------|
| G1 | Skeleton | Landmarks, components, zones |
| G2 | CSS | bg delta, palette, typography, soul |
| G3 | Comprehensive | All checks + multi-coherence |

### 24.5 Addition Test Gate (Wave 0, Phase 2)
- Binary: TENSION EXISTS or NO TENSION
- Controls: Phase 3 (metaphor collapse) vs FLAT MODE

### 24.6 Lock-In Gate (Wave 0, Phase 3.5)
- Locks metaphor before library consultation

### 24.7 Metaphor Validation Gate (Wave 0.5)
- Binary: STRUCTURAL or ANNOUNCED
- Controls: proceed to handoff or return to TC

---

## 25. COMPLETE FEATURE INVENTORY

### 25.1 Named Features and Design Patterns

| Feature | Lines | Description | Status |
|---------|-------|-------------|--------|
| ALWAYS FLAGSHIP | 32, 157-158 | No tier routing, no classification. Every page gets maximum intensity. | Directive |
| ALWAYS REMEDIATION-STYLE | 32 | Remediation-style builder instructions (telescope+microscope interlaced) | Directive |
| FIRE AND FORGET | 32, 148-149 | User's only interaction is single command. No intermediate approvals. | Directive |
| Compositional Intelligence Stack (5 layers) | 42-82 | L1-L5 hierarchy governing what PV2 must encode | Framework |
| Intelligence Heatmap | 85-134 | Visualization of compression loss across pipeline stages | Analysis tool |
| Transition Table | 251-261 | YAML per-boundary x 6-channel specification with exact CSS values | NEW artifact |
| Fractal Echo Table | 262-272 | 5-row table showing pattern expression at each scale | NEW artifact |
| Telescope + Microscope | 506-549 | WHY and HOW interlaced at every line (not separate documents) | Builder instruction format |
| Addition Test | 197-202 | Binary gate determining tension exists or flat mode | Core engine gate |
| FLAT MODE | 204-210 | Alternative path when no tension: zones + recipe, no metaphor | Alternative path |
| Phase 6.5 Observation Pause | 564-568 | Builder renders, scrolls, writes 2-3 observations. CD-006 metacognitive loop model. | NEW build phase |
| Inter-Phase Micro-Gates | 584-595 | 4 Playwright gates during build (MG-1 through MG-4) | NEW verification |
| Creative Authority Clause | 597-604 | Override any non-soul value with logged compositional reasoning | NEW builder freedom |
| Gate-Generated Fix Recipes | 788-793 | Gates output SPECIFIC CSS fix recipes, not generic instructions | NEW fix mechanism |
| Convention Escalation Path | 795-800 | For PA-05 = 3/4 wanting 4/4: re-engage TC + convention-based 2nd pass | NEW escalation |
| INHERENT vs BOLTED-ON | 607-636 | Annotation framework for structural vs advisory features | Analysis framework |
| 2D Model (Specificity x Freedom) | 440-465 | Replaces 1D checklist->recipe->convention. Four quadrants. | Framework (Report 85) |
| Fat Core Architecture | 977-1055 | "One Artist, Many Critics" -- merged planner+builder | Alternative architecture |
| Triple Encoding | 1074-1077 | Shannon error correction: top 5 decisions in 3 formats (YAML + CSS + semantic) | Anti-degradation pattern |
| Circuit Breakers | 1079-1082 | Fail-fast mid-build: "Can I SEE zone boundaries?" | Anti-degradation pattern |
| Poka-Yoke | 1084-1087 | Mistake-proofing: exact values instead of prose descriptions | Anti-degradation pattern |
| Conductor Model | 1089-1093 | 3-5 line direction statement at top of every recipe phase | Anti-degradation pattern |
| SNR Optimization | 1095-1099 | 300-line builder brief cap. Current 1,150 lines SNR ~0.5 -> ~400-500 lines SNR ~0.9 | Anti-degradation pattern |
| The Ceiling Sentence | 656-659 | "Do NOT deviate from instance values without planner approval" -- IS the 3/4 ceiling | Key finding |
| 4 Irreducible Capabilities | 649-654 | Content-form resonance, proportional intelligence, creative surprise, emergent coherence | Theoretical ceiling |
| 70/30 Boundary | 723-728 | Programmatic gates catch ~70%, PA catches remaining ~30% | Design principle |
| Mode 4 PA | 735-748 | 9 Fresh-Eyes Opus auditors, 48 questions, screenshot pre-capture | Verification system |
| Phase 8 Anti-Scale Self-Test | 579-582 | 3 questions builder must answer YES to | Self-verification |
| Builder Input Cap | 18, 1094-1098 | 300 lines (Reports 31, 95): SNR optimization | Design constraint |
| Cascade Value Table | 570, 621 | MANDATORY Phase 8 deliverable | Build artifact |
| Screenshot Pre-Capture | 1010, 738 | Take all screenshots before spawning PA auditors | Operational pattern |
| Rejected Alternatives | 248-249 | Build recipe includes runner-up metaphor + 2-3 rejected tensions with reasons | NEW content in recipe |

### 25.2 Specific Named Reports Referenced

| Report | Topic | Key Contribution |
|--------|-------|-----------------|
| Report 17 | Recipe approach | Recipe design (Approach A) |
| Report 22 | Remediation spec | Hybrid approach input + telescope+microscope example |
| Report 28 | CSS as intelligence | "CSS IS compositional intelligence" |
| Report 29/30 | Principles brief | Approach B design |
| Report 31 | Contrarian / Fat Core / Cost | Builder input volume bottleneck, $5 experiment, cost model |
| Report 32 | Master Synthesis | VERDICT: Fat Core architecture |
| Report 67 | Inter-phase micro-gates | MG-1 through MG-4, BLOCKING |
| Report 68 | Transition table | YAML per-boundary specification |
| Report 69 | TC scope narrowing | Phases 0-3.5 + 4T only |
| Report 70 | Experiments | 5 experiments to resolve |
| Report 72 | Hybrid recommendation | Approach C recommended |
| Report 73 | Gates + 70/30 boundary | SC-13/14/15 design, gate-generated fix recipes |
| Report 74 | Boundary crossings | B3 critical fix, intelligence survival |
| Report 83 | 5-layer hierarchy + fractal echo | Compositional intelligence stack, fractal echo table |
| Report 84 | Observation pause + creative authority | Phase 6.5, telescope+microscope, builder knowledge |
| Report 85 | 2D model + recipe ceiling | Specificity x Freedom, 4 irreducible capabilities |
| Report 86 | 5-layer hierarchy | Compositional intelligence stack |
| Report 87 | INHERENT vs BOLTED-ON | Annotation framework |
| Report 93 | Separation of concerns | TC answers ONE question |
| Report 94 | Fat Core architecture | "One Artist, Many Critics" |
| Report 95 | Anti-degradation patterns | 28 patterns, 6 failure modes, SNR optimization |
| Report 96 | Intelligence heatmap | Compression loss visualization (Approach 1) |
| Report 102 | Self-referential compression | Warning |
| Report 104 | Micro-gates BLOCKING | Confirms micro-gates are blocking requirement |
| Report 105 | Self-referential compression | Warning |

---

## 26. PERCEPTION THRESHOLDS (Canonical Values)

| Threshold | Value | Gate(s) |
|-----------|-------|---------|
| Background color delta | >= 15 RGB points (adjacent zones) | SC-09, Handoff [2] |
| Font size delta | >= 2px (between typography zones) | SC-11, MG-4 |
| Letter-spacing minimum | >= 0.03em (to be perceptible) | L1 definition |
| Letter-spacing floor (sub-perceptual) | >= 0.02em (SC-14 enforcement) | SC-14 |
| Stacked gap maximum | <= 108px total | SC-10 |
| Container width | 940-960px | SC-01 |
| Zone count | 2-5 | SC-12, Handoff [1] |
| ARIA landmarks | >= 3 | SC-06 |
| Component library usage | >= 3 classes | SC-08 |
| Multi-coherence channels | >= 3 per zone boundary | SC-13, Handoff [7] |
| Border presence | >= 1 border-left >= 3px OR >= 2 hr | SC-15 |
| Palette warmth | R >= G >= B | SC-04 |
| No pure extremes | No #000 or #FFF | SC-05 |
| Grid layouts | >= 2 | Handoff [3] |
| Per-category mechanisms | S/T/M/B/R: each >= 1 | Handoff [4] |
| Transition types | >= 3 | Handoff [5] |

---

## 27. TIMING SUMMARY

| Wave | Name | Time Estimate | Model |
|------|------|---------------|-------|
| -- | User command | Instant | -- |
| Wave 0 | TC Planning | 30-60 min | Opus |
| Wave 0.5 | Metaphor Validation | 5-10 min | Opus |
| Wave 0.9 | Handoff Gate | 1-2 min | Programmatic |
| Wave 1 | Build Execution | 90-150 min | Opus |
| Wave 1 (micro-gates) | 4 inter-phase checks | ~2 min total | Playwright |
| Wave 2 Layer 1 | 15 Programmatic Gates | ~2 min | Playwright |
| Wave 2 Layer 2 | 9 PA Auditors + Weaver | ~30-45 min | Opus |
| Wave 3 | Fix Cycles (max 3) | 30-60 min | Opus |
| **TOTAL** | | **~4-6 hours** | |

---

## 28. PA-05 SCORING SCALE

| Score | Label | Meaning |
|-------|-------|---------|
| 1/4 | FLAT | No visual differentiation |
| 2/4 | STYLED | Some visual differentiation |
| 2.5/4 | STYLED+ | Channels present but not coordinated |
| 3/4 | COMPOSED | Multi-coherence achieved, channels coordinated |
| 4/4 | DESIGNED | Anti-scale model: semantic density x restraint x spatial confidence |

---

## 29. SIX CSS CHANNELS (L3)

1. Chromatic
2. Typographic
3. Spatial
4. Structural
5. Behavioral
6. Material

---

## 30. FIVE SCALES (L2)

1. Navigation
2. Page
3. Section
4. Component
5. Character

---

## 31. MECHANISM CATEGORIES (Handoff Check [4])

- S (Spatial): >= 1
- T (Temporal): >= 1
- M (Material): >= 1
- B (Behavioral): >= 1
- R (Relational): >= 1

Total mechanisms in catalog: 18

---

## 32. SOUL CONSTRAINTS (Referenced Throughout)

| Constraint | Value | Locked? |
|-----------|-------|---------|
| border-radius | 0 | YES (Creative Authority Clause cannot override) |
| box-shadow | none | YES |
| Container width | 960px (range 940-960px) | YES |
| Font trinity | Instrument Serif / Inter / JetBrains Mono | YES |
| No #000 or #FFF | Warm palette only | YES |
| No gradients | Solid backgrounds | YES (implied by soul) |

---

## 33. FLAT MODE PATH (Lines 204-210)

- Triggered when Addition Test finds NO TENSION
- Produces: zones + recipe, no metaphor
- Bypasses: Phase 3 (Metaphor Collapse), Phase 3.5 (Lock-In Gate)
- Converges with main path at Phase 4T (Transition Table generation)

---

## 34. ITEMS DEFERRED BY MASTER SYNTHESIS (Lines 1253-1258)

These items are specified in the diagram but the Master Synthesis verdict says to DEFER them until experiments prove value:

1. Pipeline v2 orchestrator code
2. TC skill narrowing (1,933 -> ~660 lines)
3. Gate runner updates (SC-13 to SC-15)
4. Operational recipe (INDEFINITELY unless experiments prove brief insufficient)
5. Transition table format (let Core agent create organically)

This creates a significant delta: the diagram specifies a full linear pipeline architecture, but the verdict says to build only the conventions brief + experiment protocol first, and let experiments determine what gets codified.

---

## 35. KEY NUMBERS SUMMARY

| Metric | Value |
|--------|-------|
| Total diagram lines | 1,354 |
| Source reports | 50+ |
| Source agents | 50+ across 6 waves |
| Intelligence layers | 5 (L1-L5) |
| CSS channels | 6 |
| Scales | 5 |
| Handoff gate checks | 8 (was 5) |
| Inter-phase micro-gates | 4 |
| Programmatic gates | 15 (was 12) |
| Fat Core phase-locked gates | 3 |
| Builder input files | 8 (was 6) |
| Builder input lines | ~1,300 (was 1,150) |
| TC scope | ~660 lines (was 1,878) |
| TC reduction | 66% |
| Build phases | 9 (0-8, including 6.5) |
| Pipeline boundaries | 11 (4 destructive) |
| Fat Core boundaries | 7 (0 destructive) |
| Experiments planned | 5 (A-E), 3 in strict sequence |
| PA auditors | 9 (all approaches) |
| PA questions | 48 |
| New files to create | 6 |
| Existing files to edit | 5 |
| Net new lines | ~80 |
| Known risks | 9 |
| Anti-degradation patterns | 28 (5 top, 6 failure modes) |
| Cost per page (full pipeline) | ~$20-60 |
| Cost per page (Fat Core) | ~$15-40 |
| Cost per page (Single Opus) | ~$5-10 |
| Time per page (full pipeline) | 4-6 hours |
| Mechanism categories | 5 (S/T/M/B/R) |
| Total mechanisms in catalog | 18 |
| Maximum fix cycles | 3 |
| Fix cycle PA auditors | 2 (not full 9) |

---

*End of PV2 Full Inventory. Every named component, agent, gate, file, feature, and flow from the 1,354-line diagram has been cataloged above for delta analysis.*
