# 02 -- Guide Inventory: What the Implementation Guide Actually Describes

**Source:** `PIPELINE-V2-IMPLEMENTATION-GUIDE.html` (1,997 lines)
**Purpose:** Exhaustive extraction of every agent, gate, file, boundary, experiment, and checklist step the guide specifies. Includes direct quotes with line references for delta analysis.

---

## A. Fat Core Architecture (Section 2, lines 900-999)

### A.1 Every Agent

| # | Role | Model | Input | Output |
|---|------|-------|-------|--------|
| 1 | **Orchestrator** | Sonnet | content.md | Routes files, runs gates, captures screenshots. ~250 lines of routing logic. Does NOT interpret content. |
| 2 | **Core Agent** | Opus (non-negotiable) | ~230 lines total: conventions brief (~100 lines) + tokens.css + prohibitions.md + content.md | Plans AND builds in one continuous session. Outputs: output.html + cascade value table |
| 3-11 | **PA Auditors** (9x) | Opus/Sonnet | Pre-captured screenshots ONLY (1440px + 768px). Zero build context. | Each answers 5-6 of the 48 PA questions independently |
| 12 | **Weaver** | Opus | All 9 PA reports | Synthesized verdict: SHIP / SHIP WITH FIXES / DO NOT SHIP |

**Total agents: 12** (only 1 creative agent -- the Core Agent)

> **Direct quote (lines 926-928):** "Put the intelligence where it will be used. One Opus agent that both plans AND builds, surrounded by automated verification and human-caliber perceptual evaluation. The creative work happens inside one mind. The verification happens outside it."

> **Direct quote (line 928):** "This is the architecture of a studio, not a factory. One artist. Many critics."

### A.2 Every Gate

The guide describes **15 programmatic gates (SC-01 through SC-15)** organized into **3 phase-locked groups (G1, G2, G3)**.

#### Gate Group G1 -- After Skeleton (4 checks, ~2 sec)

| Gate | Name | Category | Threshold |
|------|------|----------|-----------|
| SC-06 | ARIA Landmarks | Structure | >= 3 landmarks |
| SC-07 | Skip Link | Structure | Skip link exists |
| SC-08 | Component Library | Structure | >= 3 component classes |
| SC-12 | Zone Count | Structure | 2-5 zones |

#### Gate Group G2 -- After Styling (8 checks, ~3 sec)

| Gate | Name | Category | Threshold |
|------|------|----------|-----------|
| SC-01 | Container Width | Soul | 940-960px |
| SC-02 | Soul Properties | Soul | border-radius: 0, box-shadow: none |
| SC-03 | Font Trinity | Soul | >= 2 font families from trinity |
| SC-04 | Warm Palette | Soul | R >= G >= B on all backgrounds |
| SC-05 | No Pure Extremes | Soul | No #000000 or #FFFFFF |
| SC-09 | Background Delta | Perception | >= 15 RGB max-channel delta |
| SC-11 | Typography Zones | Perception | display-body >= 10px delta, body-detail >= 2px |
| SC-15 | Border Presence | Perception | >= 1 border or >= 2 dividers |

#### Gate Group G3 -- Comprehensive Final (ALL 15 gates, ~5-15 sec)

Runs all of G1 + G2 plus 3 additional:

| Gate | Name | Category | Threshold |
|------|------|----------|-----------|
| SC-10 | Stacked Gap | Perception | <= 108px total gap |
| SC-13 | Multi-Coherence | Composition | >= 3/6 channels shift per boundary (~70% confidence) |
| SC-14 | Sub-Perceptual Prevention | Hygiene | No letter-spacing < 0.02em |

#### Gate Confidence Tiers (from Section 5 checkpoint, line 1337)
- Binary threshold gates: ~95% confidence
- Structural presence gates: ~90% confidence
- Compositional gates (SC-13): ~70% confidence

### A.3 Fat Core's 3 Phase-Locked Gates (Section 2, lines 954-960)

The guide distinguishes Fat Core's gate model from the full PV2 gate model:

| Gate | When | What It Checks |
|------|------|----------------|
| G1 | After skeleton | Container width, landmarks, skip link, zones, component classes |
| G2 | After styling | Soul properties, bg delta >= 15 RGB, typography, borders, warm palette |
| G3 | Final | All 15 gates including multi-coherence, sub-perceptual prevention, stacked gaps |

> **Direct quote (line 773, comparison table):** Fat Core gates = "3 phase-locked (during build)" vs Updated PV2's "15 post-build + 4 micro-gate"

### A.4 Every Boundary Crossing

The guide specifies **7 boundary crossings, 0 destructive** (compared to Flagship's 11, 4 destructive):

| # | Boundary | Intelligence Loss | Type |
|---|----------|-------------------|------|
| B1 | Content -> Core agent | LOW | Constructive |
| B2 | Core plan -> Core build | ZERO | Internal (same agent) |
| B3 | Core output -> Gate runner | ZERO | Measurement |
| B4 | Core output -> Screenshots | TOTAL (intentional) | Necessary |
| B5 | 9 PA reports -> Weaver | LOW | Constructive |
| B6 | PA report -> Core fixes | LOW | Constructive |
| B7 | Fix cycle -> Final output | ZERO | Revision |

**Critical difference from Flagship:** Boundary 3 (TC planner -> builder, 65% intelligence loss) is ELIMINATED because same agent plans AND builds.

> **Direct quote (line 1441):** "The Flagship's critical Boundary 3 (TC planner -> builder, 65% intelligence loss) is eliminated. Same agent plans AND builds."

### A.5 The Build Sequence (Section 6, lines 1342-1448)

1. User types `/build-page content.md`
2. **Orchestrator** reads content, determines Track 1 (data-heavy) or Track 2 (prose-heavy), assembles input package
3. **Core agent** spawned, reads content directly
4. Phase A: Content understanding, tension discovery (10-20 min)
5. Phase B: Metaphor derivation, layout planning (10-20 min)
6. Phase C: HTML skeleton (20-30 min)
7. **G1** runs (structure checks) -- FAIL returns to core agent with fix recipe
8. Phase C continued: CSS styling (40-90 min)
9. **G2** runs (styling checks) -- FAIL returns to core agent with fix recipe
10. Phase D: Refinement + cascade table (10-15 min)
11. **G3** runs (all 15 gates) -- FAIL max 3 cycles
12. **Orchestrator** pre-captures screenshots at 1440px + 768px (cold look + full scroll-through)
13. **9 PA auditors** spawned in parallel -- screenshots + assigned PA questions, zero context
14. **Weaver** reads all 9 PA reports, synthesizes verdict
15. If PA-05 >= 3/4: **SHIP**
16. If PA-05 < 3/4: **Fix Cycle** -- route fixes to the SAME core agent (max 3 rounds, 2-PA re-check per cycle)
17. If 3 cycles fail: **ESCALATE TO USER**

**Outputs:** output.html + _pa-report.md + _build-log.md

#### Timing Breakdown

| Time | Stage | Agents Active |
|------|-------|---------------|
| 0:00 | Orchestrator reads content | 1 |
| 0:01 | Core agent spawned | 2 |
| 0:01-0:20 | Phase A: Content understanding | 2 |
| 0:20-0:40 | Phase B: Zone + mechanism plan | 2 |
| 0:40 | G1 (structure) | 2 |
| 0:50-1:30 | Phase C: HTML + CSS | 2 |
| 1:30 | G2 (styling) | 2 |
| 1:30-2:00 | Phase C continues (richness) | 2 |
| 2:00-2:05 | Phase D + G3 | 2 |
| 2:05-2:10 | Screenshot capture | 2 |
| 2:10-2:30 | PA auditors + weaver | 11-12 |
| 2:30-2:35 | Verdict | 3 |

**Typical total: 150-180 min (2.5-3 hours). Total agents: 12-13.**

### A.6 What Files the Core Agent Reads

The guide states the core agent receives ~230 lines total:
1. **conventions-brief.md** (~100 lines) -- the ONLY spec document
2. **tokens.css** (existing, 80 design tokens)
3. **prohibitions.md** (existing, 22 identity rules)
4. **content.md** (the page content itself)

> **Direct quote (line 738):** Fat Core builder input = "~300 lines (brief+content)"
> **Direct quote (line 941):** "Receives ~230 lines: conventions brief + tokens + prohibitions."
> **Direct quote (line 1040):** "The ONLY document the core builder reads (besides content, tokens, and prohibitions)."

### A.7 The Fix Recipe System

Every gate failure produces a specific CSS fix recipe containing:
- What was measured
- What the threshold is
- Exact CSS to fix it
- 2-3 alternatives

> **Direct quote (line 1079):** "Not 'fix the backgrounds' but 'Zone 2 bg is rgb(249,248,240), delta from Zone 1 is 5 RGB. Need >= 15. Change to `#f0ebe3` (delta becomes 17).'"

---

## B. The Visual Overview Flow Diagram (lines 450-570)

The Visual Overview at lines 461-568 depicts the "complete build flow" which includes elements from BOTH the Updated PV2 AND Fat Core. Critically, it shows a flow that does NOT appear in the Fat Core description in Section 2:

### B.1 Wave Structure (from the flow diagram only)

| Wave | Name | Agent | Details |
|------|------|-------|---------|
| Wave 0 | Compositional Planning | Enriched /tension-composition (Opus) | "Phases 0-3.5 + Phase 4T. ~660 lines (was ~1,930). 30-60 min." Outputs: **_build-recipe.md** + **Transition Table** (YAML) + **Fractal Echo Table** |
| Wave 0.5 | Verification | Fresh-Eyes Metaphor Check (Opus) | "Binary: STRUCTURAL or ANNOUNCED? 5-10 min." FAIL returns to TC. |
| Wave 0.9 | Enriched Handoff Gate | 8 Binary Checks (was 5) | "Zone count, BG delta >= 15 RGB, grid layouts, per-category mechs, transition types, fractal echo table, transition table, channel map. All must PASS. Any FAIL returns to TC. ~1-2 min." |
| Wave 1 | Build Execution | Opus Builder (single agent) | "Reads 8 files (~1,300 lines). 9-phase build with telescope+microscope interlaced. Inter-phase micro-gates: MG-1 (HTML), MG-2 (bg), MG-3 (border), MG-4 (type). Phase 6.5: Observation Pause (CD-006 metacognitive loop). 90-150 min." Outputs: **output.html** + cascade value table |
| Wave 2 Layer 1 | Verification | 15 Programmatic Gates | "Playwright + getComputedStyle. SC-01 to SC-15. +3 new: multi-coherence, sub-perceptual, borders. ~2 min. Catches 70% of issues." |
| Wave 2 Layer 2 | Verification | 9 PA Auditors (Mode 4) | "Fresh-eyes Opus. Screenshot pre-capture. 48 questions, zero build context. PA-05 verdict." |
| Wave 3 | Fix Integration | (varies) | Three outcomes: SHIP (all pass + PA-05 >= 3/4), Fix Cycle (gates pass + PA-05 < 3/4, max 3x, gate-generated CSS fix recipes, 2-PA re-check per cycle), ESCALATE TO USER (3 cycles failed) |

**OUTPUT:** output.html + _pa-report.md + _build-log.md (line 566)

### B.2 Updated PV2 Components NOT in Fat Core Section 2

The flow diagram includes these components that Section 2's Fat Core description does NOT include:

1. **Wave 0: Separate TC planner agent** -- Fat Core merges planning INTO the core agent ("Merged into core agent" -- line 759). The flow diagram shows a separate TC Opus agent running Phases 0-3.5 + 4T.
2. **Wave 0.5: Fresh-Eyes Metaphor Check** -- A separate Opus agent that verifies STRUCTURAL vs ANNOUNCED metaphor. Not mentioned in Fat Core's 12-agent list.
3. **Wave 0.9: Enriched Handoff Gate** -- An 8-check binary gate BEFORE the builder starts. Fat Core has no pre-build handoff gate because there is no handoff (same agent).
4. **_build-recipe.md** -- TC outputs a build recipe that the builder reads. Fat Core replaces this with the conventions brief.
5. **Transition Table (YAML)** and **Fractal Echo Table** -- TC output artifacts. Not mentioned as Fat Core outputs.
6. **4 Inter-phase micro-gates (MG-1 through MG-4)** -- Run during the build (HTML, bg, border, type). Fat Core has 3 phase-locked gates (G1, G2, G3) but NOT separate micro-gates.
7. **Phase 6.5: Observation Pause** -- "CD-006 metacognitive loop" during the build. Not explicitly listed in Fat Core's Phase A-D sequence.
8. **Telescope+microscope interlaced build** -- Described for the flow diagram builder, not for Fat Core.
9. **Builder reads 8 files (~1,300 lines)** -- Fat Core builder reads ~230 lines from ~4 files.

> **CRITICAL:** The flow diagram appears to depict the "Updated PV2" architecture (middle column in the comparison table, line 728), NOT Fat Core. The comparison table confirms: Updated PV2 has "15 post-build + 4 micro-gate" (line 772) and "1,300 lines (tele+micro)" builder input (line 737). Fat Core has "3 phase-locked (during build)" and "~300 lines (brief+content)."

### B.3 The Diagram's Introductory Framing

> **Direct quote (lines 453-455):** "Pipeline v2 flows through 4 waves: TC plans, builder builds, gates verify, PAs audit. Fat Core merges planning and building into one agent. Perception thresholds prevent invisible CSS."

> **Direct quote (line 455):** "Every box, arrow, and layer below is drawn directly from the canonical PV2 diagram produced by 50+ Opus research agents."

This means the Visual Overview flow diagram represents the CANONICAL PV2 architecture (which is Updated PV2), with Fat Core described as a SIMPLIFICATION of it.

---

## C. The FULL PV2 Pipeline (Updated PV2 Column in Comparison Table)

### C.1 Architecture Comparison Table (lines 717-826)

| Dimension | Master Prompt | Original PV2 | Updated PV2 | Fat Core (NEW) |
|-----------|--------------|---------------|-------------|----------------|
| Builder input | 75 lines (13.4%) | 1,150 lines | **1,300 lines (tele+micro)** | ~300 lines |
| Instruction type | Checklist | Recipe | **Experiment: Recipe/Brief/Hybrid/FatCore** | Convention (~100 ln) |
| Intelligence levels | L1 only (text) | L1 only (gates) | **L1-L4 checked (gates+artifacts)** | L1-L5 possible |
| TC scope | Absent | 1,878 lines | **~660 lines (planner only)** | Merged into core |
| Key artifact | None | op-recipe | **Transition Tbl + Fractal Echo** | Conventions Brief |
| Gates | 0 | 12 | **15 post-build + 4 micro-gate** | 3 phase-locked |
| Boundaries | N/A | 11 (4 destructive) | **11 (4 destructive)** | 7 (0 destructive) |
| Builder model | Sonnet | Opus | Opus | Opus |
| PA auditors | 0-2 | 9 | 9 | 9 |
| PA-05 ceiling | 1.5/4 | 3/4 | **3-4/4** | 4/4 possible |
| Cost/page | ~$5 | ~$15-30 | **~$20-60** | ~$15-40 |
| Fix recipes | Generic prose | Generic prose | **Gate CSS** | Same agent (memory kept) |
| N (evidence) | 1 (Flagship) | 2 (Middle, Rem) | **0 (UNTESTED)** | 0 (UNTESTED) |

### C.2 Updated PV2 Components (from comparison table + flow diagram)

The "Updated PV2" is distinct from Fat Core and includes:
- **Separate TC planner** (~660 lines, Phases 0-3.5 + 4T)
- **Transition Table + Fractal Echo Table** as key artifacts
- **15 post-build gates + 4 inter-phase micro-gates** (19 gate checks total)
- **Builder reads 8 files at 1,300 lines** (telescope+microscope interlaced)
- **11 boundary crossings, 4 destructive**
- **Fresh-Eyes Metaphor Check** (Wave 0.5)
- **Enriched Handoff Gate** (Wave 0.9, 8 binary checks)
- **Observation Pause** (Phase 6.5)
- Same 9 PA auditors + weaver as Fat Core

### C.3 Key Quote on Updated PV2 vs Fat Core Status

> **Direct quote (line 744):** Updated PV2 instruction type = "Experiment: Recipe/Brief/Hybrid/FatCore" -- meaning Updated PV2 treats the format as an open question to be resolved by experiments.

> **Direct quote (lines 821-823):** Both Updated PV2 and Fat Core have N=0 evidence: "0 (UNTESTED)"

---

## D. Experiment B: The $5 Conventions Test (Section 7, lines 1513-1516)

### D.1 What Exactly Does Experiment B Test?

> **Direct quote (line 1515):** "Tests the most radical question: does any pipeline infrastructure help at all, or is the conventions brief enough?"

### D.2 What Does It Require?

1. 1 Opus agent (single agent, no orchestrator)
2. conventions-brief.md (File 2)
3. tokens.css (existing)
4. prohibitions.md (existing)
5. RESEARCH-SYNTHESIS.md (the content)
6. Mode 4 PA for evaluation (9 blind Opus auditors + 1 weaver)

> **Direct quote (line 1514):** "A single Opus agent receives: conventions brief + tokens.css + prohibitions + RESEARCH-SYNTHESIS.md. No pipeline. No orchestrator. No gates. Plans and builds in one pass. Mode 4 PA evaluation."

### D.3 What Infrastructure Does It NOT Require?

Experiment B explicitly does NOT need:
- build-page SKILL.md (the orchestrator)
- gate-runner.js
- gate-registry.js
- perception-thresholds.md (as a separate file -- the thresholds ARE in the conventions brief)
- experiment-protocol.md
- Any multi-agent coordination
- Any phase-locked gates
- Any fix cycles

**Only needs:** Foundation edits (Step 1) + conventions-brief.md (Step 2). This is Steps 1-2 only.

### D.4 Cost and Decision Gate

- **Cost:** ~$5-10
- **Time:** ~2 hours (build) + PA evaluation
- **Decision gate (line 1653):**
  - PA-05 >= 3.0 --> SKIP to Step 7 (fast path). Pipeline is unnecessary. 4-8 hours total.
  - PA-05 2.0-2.9 --> Continue to Step 4 (gate infrastructure)
  - PA-05 < 2.0 --> Revise conventions brief

> **Direct quote (lines 1671-1672):** "If Experiment B passes (PA-05 >= 3.0): Steps 1 + 2 + 3 + 7 = 4-8 hours total. No orchestrator. No gate runner. Just one Opus agent, one 100-line document, and one verification pass. The conventions brief IS the pipeline."

---

## E. Experiment C: Fat Core Full Test (Section 7, lines 1518-1521)

### E.1 What Exactly Does Experiment C Test?

> **Direct quote (line 1520):** "Tests: Does the verification shell (gates + PA + fix cycle) add measurable value over a naked single agent?"

### E.2 What Agents Does It Use?

> **Direct quote (line 1481):** "12 agents: orchestrator + core + 3 gates + 9 PA + weaver"

Breaking this down:
1. Orchestrator (Sonnet) -- routes, runs gates, captures screenshots
2. Core Agent (Opus) -- plans AND builds
3. 3 Phase-locked gate groups (G1, G2, G3) -- run by orchestrator/gate-runner, not separate agents
4. 9 PA Auditors (Opus/Sonnet) -- fresh-eyes, parallel, 5-6 questions each
5. Weaver (Opus) -- synthesizes verdict

### E.3 What Infrastructure Does It Require?

Experiment C requires ALL of the following to exist:
- conventions-brief.md (File 2, Step 2)
- perception-thresholds.md (File 3, Step 5.5)
- gate-runner.js (File 4, Step 4)
- gate-registry.js (File 5, Step 4)
- build-page SKILL.md (File 1, Step 5)
- All foundation edits (Step 1)

**This is the full pipeline.** Experiment C is the end-to-end test of the complete Fat Core architecture.

### E.4 How Is It Scored?

- **Evaluation:** Mode 4 PA -- 9 blind Opus auditors, pre-captured screenshots at 1440px + 768px, 48 questions
- **Content:** RESEARCH-SYNTHESIS.md (~384 lines)
- **Builder model:** claude-opus-4-6
- **Success threshold:** PA-05 >= 3.0/4 (COMPOSED or DESIGNED)
- **Decision gate (line 1852):** C >= B + 0.5 --> ship Fat Core. C ~= B --> simplify. C < B --> debug.

### E.5 What is NOT in Experiment C

The guide's description of Experiment C (Fat Core) does NOT include:
- Separate TC planner agent (Wave 0)
- Fresh-Eyes Metaphor Check (Wave 0.5)
- Enriched Handoff Gate (Wave 0.9)
- Transition Table or Fractal Echo Table
- 4 inter-phase micro-gates (MG-1 through MG-4)
- Phase 6.5 Observation Pause
- Telescope+microscope interlaced build
- 8-file / 1,300-line builder input
- _build-recipe.md as an artifact

These are all Updated PV2 components shown in the flow diagram but explicitly replaced in the Fat Core architecture.

---

## F. All 5 Experiments (Section 7 complete)

| Experiment | Guide Label | PV2 Diagram Label | Cost | Time | Builder Input | Agents | Infrastructure Required |
|-----------|-------------|-------------------|------|------|---------------|--------|------------------------|
| **A** | The Naked Test | EXP A | ~$5 | ~1 hour | 42-line minimal prompt | 1 Opus + PA | None (only content + basic identity) |
| **B** | The $5 Conventions Test | EXP E | ~$5-10 | ~2 hours | conventions brief + tokens + prohibitions | 1 Opus + PA | Steps 1-2 only |
| **C** | Fat Core Full Test | EXP D | ~$30-50 | ~4 hours | conventions brief (via orchestrator) | 12 (orch + core + 9 PA + weaver) | Steps 1-5.5 (FULL pipeline) |
| **D** | Full Recipe Test | EXP B | ~$30-50 | ~4 hours | 650-line recipe (same architecture as C) | 12 | Steps 1-5.5 + recipe file |
| **E** | Head-to-Head | EXP C | ~$40-80 | ~6 hours | Brief vs recipe, same content | 12 x2 | Steps 1-5.5 + recipe |

**Total for all 5: ~$110-195, ~2 days**

### Shared Protocol (all experiments)
- Content: RESEARCH-SYNTHESIS.md (~384 lines)
- Builder model: claude-opus-4-6 (non-negotiable)
- PA evaluation: Mode 4 (9 blind Opus auditors, pre-captured screenshots at 1440px + 768px)
- Success threshold: PA-05 >= 3.0/4 (COMPOSED or DESIGNED)

### Decision Tree (after all 5 results)

> **Direct quotes (lines 1495-1504):**
> - "A >= 3.0? --> Pipeline is UNNECESSARY. Huge finding."
> - "B >= 3.0? --> Conventions brief alone = the pipeline. No orchestrator needed."
> - "C >= 3.0? --> Fat Core is the architecture. Build it."
> - "D > C? --> Recipe adds value. Use recipe format."
> - "D <= C? --> Recipe ceiling confirmed. Brief is sufficient."
> - "E settles --> Head-to-head removes ambiguity."
> - "ALL < 3.0 --> Investigation missed something fundamental."
> - "RESULTS DETERMINE: topology, builder format, codification scope. We build WHATEVER WINS. No pre-commitment."

### Label Mismatch Between Guide and PV2 Diagram

**NOTE: The guide explicitly calls out a label mismatch (lines 1467, 1476-1489):**
- Guide Exp A = Diagram "EXP A" (match)
- Guide Exp B = Diagram "EXP E"
- Guide Exp C = Diagram "EXP D"
- Guide Exp D = Diagram "EXP B"
- Guide Exp E = Diagram "EXP C"

> **Direct quote (line 1467):** "PV2 Diagram labels in parentheses for cross-reference"

---

## G. The 15 Gates from Section 5 (lines 1200-1338)

### G.1 Complete Gate Table

| Gate ID | Name | Category | Threshold | Phase Group | Fix Recipe Example |
|---------|------|----------|-----------|-------------|-------------------|
| SC-01 | Container Width | Soul | 940-960px | G2 | `main { max-width: 960px; margin: 0 auto; }` |
| SC-02 | Soul Properties | Soul | border-radius: 0, box-shadow: none | G2 | `* { border-radius: 0 !important; box-shadow: none !important; }` |
| SC-03 | Font Trinity | Soul | >= 2 font families from trinity (Instrument Serif, Inter/Georgia, system-ui) | G2 | (uses `document.fonts.ready`) |
| SC-04 | Warm Palette | Soul | R >= G >= B on all backgrounds | G2 | Cool grays borderline; G > R is definitively cold |
| SC-05 | No Pure Extremes | Soul | No #000000 or #FFFFFF | G2 | Use #1A1A1A for text, #FEF9F5 for backgrounds |
| SC-06 | ARIA Landmarks | Structure | >= 3 landmarks (header, main, footer, nav, [role="complementary"]) | G1 | Add missing landmark elements |
| SC-07 | Skip Link | Structure | Skip link exists (a[href="#main"], a.skip-link) | G1 | Add one HTML element |
| SC-08 | Component Library | Structure | >= 3 component classes (callout, data-table, pull-quote, grid-2col, etc.) | G1 | Use known class names |
| SC-09 | Background Delta | Perception | >= 15 RGB max-channel delta between adjacent zones | G2 | "Zone 2 bg is rgb(249,248,240)... Change to #f0ebe3 (delta becomes 17)" |
| SC-10 | Stacked Gap | Perception | <= 108px total gap (uses getBoundingClientRect) | G3 | Reduce padding, insert checkpoint content, merge zones |
| SC-11 | Typography Zones | Perception | display-body >= 10px, body-detail >= 2px, >= 2 font families | G2 | Flagship had everything at 16px/400 |
| SC-12 | Zone Count | Structure | 2-5 zones ([data-zone] or main > section) | G1 | Mathematical ceiling for perceptible scales is 5 |
| SC-13 | Multi-Coherence | Composition | >= 3/6 channels shift per boundary (~70% confidence) | G3 | Measures chromatic, typographic, spatial, structural, behavioral, material |
| SC-14 | Sub-Perceptual Prevention | Hygiene | No letter-spacing > 0 but < 0.02em; no intra-zone bg deltas 1-9 RGB | G3 | Flagship spent 22% of CSS on imperceptible micro-typography |
| SC-15 | Border Presence | Perception | >= 1 border-left >= 3px or >= 2 horizontal dividers | G2 | Flagship had zero borders anywhere |

### G.2 The 70/30 Boundary

| Code Can Verify (Gates, ~70%) | Code Cannot Verify (PA, ~30%) |
|-------------------------------|-------------------------------|
| Container width is 960px | Does the layout feel balanced? |
| border-radius is 0 everywhere | Does the page feel DESIGNED? (PA-05) |
| Background delta >= 15 RGB | Does the metaphor drive CSS choices? |
| Font-size delta >= 10px | Do channel shifts serve the same direction? |
| Total gap <= 108px | Does spacing create satisfying rhythm? |

> **Direct quote (line 1208):** "The gate system verifies ~70% of quality that can be measured by code. The remaining ~30% -- 'does this feel designed?' -- belongs to the perceptual audit. Gates are necessary but not sufficient."

> **Direct quote (line 1210):** "Every gate exists because something went wrong in an actual experiment. They are scars."

---

## H. References to Specific Features

### H.1 Inter-Agent Messaging

The guide references inter-agent messaging in 3 contexts:

1. **CD-006 (line 882):** "Built by a single Opus agent with inter-agent communication." -- describing the crown jewel that had messaging.

2. **Edit 5C (line 1184):** "Agent Communication Protocol. Inserts new section before Anti-Gravity Rules. Binary rule: agents MUST use SendMessage for coordination. Evidence: zero messaging = B+ quality; messaging = A quality. Minimum message counts per tier." -- this is an EDIT to compositional-core/CLAUDE.md, listed in Step 7.

3. **Failure 6 (line 1723):** "19 agents. Zero SendMessage calls. Builder couldn't ask planner about ambiguities." -- describing the Flagship failure.

> **CRITICAL NOTE:** Inter-agent messaging is prescribed as an edit (Step 7, Edit 5C) but is NOT part of the Fat Core architecture itself. Fat Core eliminates the need for messaging by merging planner and builder into one agent. The messaging protocol edit is for the general compositional-core/CLAUDE.md, which governs ALL builds (including non-Fat-Core builds).

### H.2 Blind Novelty Protocol

**NOT MENTIONED.** The guide contains zero references to "blind novelty protocol," "CP-08," or any equivalent. This was a ceiling/flagship-era protocol that does not appear in the PV2 Implementation Guide.

### H.3 Dual PA

**NOT MENTIONED.** The guide contains zero references to "dual PA" or "CP-09." The only PA model described is Mode 4 (9 fresh-eyes auditors). The fix cycle uses "2-PA re-check per cycle" (line 553), which is a lighter re-check, not a dual PA protocol.

### H.4 Orchestrator

The orchestrator is described in two forms:

1. **Fat Core orchestrator (lines 933-935):** "AGENT 1: ORCHESTRATOR (Sonnet). Traffic cop. Routes files, runs gates, captures screenshots. Does NOT interpret content. Deliberately thin (~250 lines)."

2. **build-page SKILL.md (lines 1023-1036):** File 1, ~350-500 lines. The conductor. Reads content, classifies tier, selects architecture, routes files, runs gates, pre-captures screenshots, spawns PA auditors, manages fix cycles.

> **Key distinction:** The orchestrator is only needed if Experiment B < 3.0. If B >= 3.0, no orchestrator is built (fast path).

### H.5 Telescope+Microscope / Observation Pause

Referenced ONLY in the Visual Overview flow diagram (line 519): "9-phase build with telescope+microscope interlaced... Phase 6.5: Observation Pause (CD-006 metacognitive loop)."

**NOT mentioned in Fat Core's Section 2 description.** These are Updated PV2 builder features.

### H.6 Transition Table and Fractal Echo Table

Referenced in:
- Flow diagram Wave 0 output (line 474): TC outputs "_build-recipe.md + Transition Table (YAML) + Fractal Echo Table"
- Comparison table (line 765): Updated PV2 key artifact = "Transition Tbl + Fractal Echo"
- Intelligence heatmap analysis (line 711): "Fractal Echo Table makes L2 cross the boundary. Transition Table makes L3 cross."

**NOT mentioned as Fat Core artifacts.** Fat Core's key artifact is the "Conventions Brief (~100 ln)" (line 766).

### H.7 Fresh-Eyes Metaphor Check

Referenced ONLY in flow diagram Wave 0.5 (lines 480-504): "Fresh-Eyes Metaphor Check (Opus). Binary: STRUCTURAL or ANNOUNCED? 5-10 min."

**NOT part of Fat Core's 12-agent architecture.** Fat Core has no separate metaphor validation step because the core agent itself discovers and implements the metaphor.

---

## I. The 6 New Files (Section 3, lines 1002-1131)

| # | File | Location | Size | Purpose | Needed for Exp B? | Needed for Exp C? |
|---|------|----------|------|---------|-------------------|-------------------|
| 1 | build-page SKILL.md | `~/.claude/skills/build-page/SKILL.md` | ~350-500 lines | The conductor -- `/build-page` entry point | NO | YES |
| 2 | conventions-brief.md | `design-system/compositional-core/guidelines/` | ~100 lines | The ONLY doc the builder reads | YES | YES |
| 3 | perception-thresholds.md | `design-system/compositional-core/guidelines/` | ~80 lines | Minimum CSS differences humans can see | NO (embedded in brief) | YES |
| 4 | gate-runner.js | `design-system/compositional-core/validation/` | ~400 lines | Automated quality checker via Playwright | NO | YES |
| 5 | gate-registry.js | `design-system/compositional-core/validation/` | ~120 lines | Central config for all 15 gate thresholds | NO | YES |
| 6 | experiment-protocol.md | `ephemeral/compositional-intelligence/` | ~80 lines | The 5 experiments before commitment | NO | NO (documentation) |

**Total new code: ~1,130 lines.**

> **Direct quote (line 1020):** "Total new code: ~1,130 lines. Compare to the 47,944 lines that produced the Flagship's 1.5/4."

### File Details

**File 1 -- build-page SKILL.md (~350-500 lines):**
- Entry point for `/build-page my-content.md`
- Reads content, classifies tier (Floor/Middle/Ceiling/Flagship)
- Selects agent architecture per tier
- Routes files to builder
- Runs phase-locked gates (G1, G2, G3)
- Pre-captures screenshots
- Spawns 9 PA auditors
- Manages fix cycles (max 3, same core agent)
- Delivers output: output.html + _pa-report.md + _build-log.md
- Design: thin routing logic (~350 lines), not compressed intelligence (~963 lines)
- Floor pages skip TC. Middle pages skip metaphor.

> **Direct quote (lines 1029-1033):** "Thin, not thick. ~350 lines of routing logic, not 963 lines of compressed intelligence."

**File 2 -- conventions-brief.md (~100 lines):**
- The ONLY document the core builder reads
- 5 sections, each ~20 lines:
  1. Perception Thresholds -- minimum CSS differences humans can see
  2. Soul Constraints -- the 8 absolute prohibitions
  3. Spatial Rules -- attention topology, disclosure, compression
  4. Quality Floor -- mechanism minimums, multi-coherence, component variety
  5. Creative Authority -- "Your judgment supersedes this document on all non-soul matters"

> **Direct quote (lines 1049-1051):** "Quality degrades as builder input volume increases. CD-006 (~50 lines input) scored 39/40. Flagship (~530 lines) scored 1.5/4. The conventions brief targets the sweet spot: ~100 lines of WHAT constraints, not HOW recipes."

**File 3 -- perception-thresholds.md (~80 lines):**
- Lookup table mapping CSS properties to minimum perceptible deltas:
  - Background color: >= 15 RGB points
  - Font size: >= 2px between sections
  - Letter-spacing: >= 0.5px (0.03em at 16px)
  - Line-height: >= 0.15 difference
  - Padding/margins: >= 24px between zones
  - Font weight: >= 200 units
  - Total boundary gap: <= 108px stacked max

> **Direct quote (lines 1068-1070):** "The Flagship's 963-line master prompt contained ZERO perception-related terms. Not 'threshold.' Not 'delta.' Not 'RGB.' The builder produced 227 lines of letter-spacing between 0.001em and 0.01em -- every one imperceptible."

**File 4 -- gate-runner.js (~400 lines):**
- JavaScript module launching headless Playwright
- Navigates to built page, inspects computed styles
- Returns pass/fail for 15 quality checks
- Every failure produces specific CSS fix recipes (not generic prose)
- Runtime: 5-15 seconds
- Uses `getComputedStyle`, `getBoundingClientRect`, `document.fonts.ready`

**File 5 -- gate-registry.js (~120 lines):**
- Central configuration for all 15 gate thresholds
- All thresholds, selectors, and phase-gate groups in one place
- gate-runner.js reads this file
- Single source of truth for threshold changes

**File 6 -- experiment-protocol.md (~80 lines):**
- Defines 5 experiments in strict sequence
- Located in ephemeral/ (not permanent)
- Documentation only -- not infrastructure

### File Dependency Diagram (from guide, lines 1100-1129)

```
/build-page content.md
          |
          v
[1] build-page SKILL.md
      reads content, classifies tier
      spawns core agent with:
          |
          +--> [2] conventions-brief.md (100 lines)
          |         references:
          |              +--> [3] perception-thresholds.md
          |
          +--> tokens.css + prohibitions.md (existing)
          |
          v
      Core agent builds HTML
          |
          v
[4] gate-runner.js
      reads thresholds from:
          +--> [5] gate-registry.js
      checks the HTML against:
          +--> [3] perception-thresholds.md (as code)
          |
          v
      PA auditors verify (existing PA skill)
          |
          v
      Output: designed HTML page
```

---

## J. The 6 Existing File Edits (Section 4, lines 1133-1195)

| # | File | What Changes | Lines Added | Problem Solved |
|---|------|-------------|-------------|----------------|
| 1 | tokens.css | Add `--space-max-stacked: 108px` | ~5 | S-09 stacking loophole |
| 2 | semantic-rules.md | S-09 stacking rule + arithmetic proof | ~25 | No calculation for whitespace voids |
| 3 | perceptual-auditing/SKILL.md | Perception delta threshold table | ~25 | Gates counted invisible differences |
| 4 | tension-composition/SKILL.md | Recipe header for Phase 4 | ~15 | Checklist framing --> flat output |
| 5A-D | compositional-core/CLAUDE.md | Builder recipe, routing, comms, model | ~46 | 13.4% visibility, no CSS recipes |
| 6A-B | design-system/CLAUDE.md | Status update, build routing | ~3 | Stale status, wrong routing |

**Total: ~119 lines of edits across 6 files**

### Edit Details

**Edit 1 -- tokens.css (~5 lines):** Add `--space-max-stacked: 108px;` to Spacing Maximums. Arithmetic proof: worst case BREATHING transition = 32 + 24 + 4 + 24 + 24 = 108px.

**Edit 2 -- semantic-rules.md (~25 lines):** Binary test: `padding-bottom + MAX(margin-bottom, margin-top) + padding-top <= 108px`. Provenance: Flagship 210-276px voids, 9/9 auditors flagged.

**Edit 3 -- PA SKILL.md (~25 lines):** "Minimum Perceptual Delta Thresholds" section. Background >= 15 RGB, letter-spacing >= 0.5px, font-size >= 2px, font-weight >= 200 units.

**Edit 4 -- TC SKILL.md (~15 lines):** Recipe header with 7 sequenced steps before Phase 4.0: READ guardrails, READ catalog, SELECT mechanisms per category, MAP to CSS values, ASSESS pacing, CHECK coherence, VERIFY fractal consistency.

**Edit 5A -- compositional-core/CLAUDE.md (~15 lines):** Replace 3 constraint lines with explicit file routing list + model selection guidance + 7-step builder recipe with CSS values.

**Edit 5B -- compositional-core/CLAUDE.md (~9 lines):** Remove "first 200 lines" restriction on mechanism catalog. Builder needs FULL catalog.

**Edit 5C -- compositional-core/CLAUDE.md (~20 lines):** Agent Communication Protocol. Binary rule: agents MUST use SendMessage. Minimum message counts per tier.

**Edit 5D -- compositional-core/CLAUDE.md (~2 lines):** Update conditional-load to "FULL file" for mechanism catalog.

**Edit 6A -- design-system/CLAUDE.md:** Status update to "Pipeline v2 CODIFICATION IN PROGRESS."

**Edit 6B -- design-system/CLAUDE.md:** Build routing to CLAUDE.md, add Opus recommendation for Ceiling/Flagship.

---

## K. The Build Flow from Section 6 -- Every Step and Agent (lines 1342-1448)

### K.1 Complete Step Sequence

```
/build-page content.md
       |
       v
 ORCHESTRATOR (thin, ~250 lines)                      AGENT: Orchestrator (Sonnet)
       |-- Reads content.md
       |-- Determines: Track 1 (data-heavy) or Track 2 (prose-heavy)
       |-- Assembles input package for core agent
       |
       v
 CORE AGENT (single Opus, plans AND builds)            AGENT: Core Agent (Opus)
       |-- Phase A: Read content, discover tensions     (10-20 min)
       |-- Phase B: Derive metaphor, plan layout        (10-20 min)
       |-- Phase C: Write HTML skeleton                 (20-30 min)
       |
       |-- >>> G1: structure checks <<<                 GATE GROUP: G1 (4 checks)
       |       |-- FAIL? Fix recipe -> core agent fixes -> re-check
       |       |-- PASS? Continue
       |
       |-- Phase C (cont): Apply CSS styling            (40-90 min)
       |
       |-- >>> G2: styling checks <<<                   GATE GROUP: G2 (8 checks)
       |       |-- FAIL? Fix recipe -> core agent fixes -> re-check
       |       |-- PASS? Continue
       |
       |-- Phase D: Refinement + cascade table          (10-15 min)
       |
       |-- >>> G3: ALL 15 gates <<<                     GATE GROUP: G3 (15 checks)
       |       |-- FAIL? Fix recipe -> max 3 cycles
       |       |-- PASS? Continue
       |
       v
 SCREENSHOT CAPTURE (orchestrator, not core agent)      AGENT: Orchestrator
       |-- 1440px + 768px viewports
       |-- Cold look + full scroll-through
       |
       v
 PERCEPTUAL AUDIT (9 fresh-eyes Opus agents, parallel)  AGENTS: 9 PA Auditors
       |-- Each: screenshots + 5-6 assigned PA questions
       |-- ZERO context about content, plan, or build
       |
       v
 WEAVER (1 Opus agent)                                  AGENT: Weaver (Opus)
       |-- Synthesizes verdict: SHIP / SHIP WITH FIXES / DO NOT SHIP
       |
       v
 FIX CYCLE (if needed, max 3 rounds)                    AGENT: Same Core Agent
       |-- SAME core agent receives fix list
       |-- Full compositional memory preserved
       |-- 2-PA re-check per cycle (lighter than full Mode 4)
       |
       v
 OUTPUT
       |-- output.html (the designed page)
       |-- _pa-report.md (verdict + all 9 reports)
       |-- _build-log.md (gate results, fix history, timing)
```

### K.2 Agents by Phase

| Phase | Agent(s) | Count |
|-------|----------|-------|
| Content reading + routing | Orchestrator (Sonnet) | 1 |
| Planning + Building (Phases A-D) | Core Agent (Opus) | 1 |
| Gates (G1, G2, G3) | Gate runner (code, not agent) | 0 (code) |
| Screenshot capture | Orchestrator | 0 (reuse) |
| Perceptual Audit | 9 PA Auditors (Opus/Sonnet) | 9 |
| Verdict synthesis | Weaver (Opus) | 1 |
| Fix cycle | Same Core Agent | 0 (reuse) |
| **TOTAL** | | **12 unique** |

---

## L. The Master Checklist (lines 1780-1865)

### Step-by-Step with What Each Builds and Experiment Requirements

| Step | What It Builds | Time | Needed for Exp B? | Needed for Exp C? |
|------|---------------|------|-------------------|-------------------|
| **Step 1** | Foundation Edits | 30-45 min | YES | YES |
| -- 1A | Perception delta thresholds in PA SKILL.md (~30 lines) | -- | YES | YES |
| -- 1B | S-09 stacking rule in semantic-rules.md (~25 lines) | -- | YES | YES |
| -- 1C | `--space-max-stacked: 108px` in tokens.css (~5 lines) | -- | YES | YES |
| **Step 2** | conventions-brief.md (~100 lines) | 1-2 hours | YES | YES |
| -- 2.1 | Section 1: Perception Thresholds (~20 lines) | -- | YES | YES |
| -- 2.2 | Section 2: Soul Constraints (~20 lines) | -- | YES | YES |
| -- 2.3 | Section 3: Spatial Rules (~20 lines) | -- | YES | YES |
| -- 2.4 | Section 4: Quality Floor (~20 lines) | -- | YES | YES |
| -- 2.5 | Section 5: Creative Authority (~20 lines) | -- | YES | YES |
| **Step 3** | Run Experiment B | 2-3 hours | IS Exp B | NO |
| -- 3.1 | Spawn 1 Opus with content + brief + tokens + prohibitions | -- | -- | -- |
| -- 3.2 | Agent plans + builds in one pass | -- | -- | -- |
| -- 3.3 | Run Mode 4 PA (9 Opus + 1 weaver) | -- | -- | -- |
| -- 3.4 | Score PA-05 and document | -- | -- | -- |
| -- 3.5 | **DECISION GATE** | -- | -- | -- |
| **Step 4** | Gate Infrastructure (only if Exp B < 3.0) | 3-5 hours | NO | YES |
| -- 4.1 | gate-registry.js (~120 lines) | -- | NO | YES |
| -- 4.2 | gate-runner.js (~400 lines) | -- | NO | YES |
| -- 4.2a | Soul gates: SC-01 through SC-05 | -- | NO | YES |
| -- 4.2b | Structure gates: SC-06, SC-07, SC-08, SC-12 | -- | NO | YES |
| -- 4.2c | Perception gates: SC-09, SC-10, SC-11, SC-13, SC-14, SC-15 | -- | NO | YES |
| -- 4.2d | Fix recipe system | -- | NO | YES |
| -- 4.2e | Phase-locked gate groups (G1, G2, G3) | -- | NO | YES |
| **Step 5** | Orchestrator Skill (only if Exp B < 3.0) | 4-6 hours | NO | YES |
| -- 5.1 | build-page SKILL.md (~350-500 lines) | -- | NO | YES |
| -- 5.1a | Content reading + tier classification | -- | NO | YES |
| -- 5.1b | Core agent spawning with brief + tokens + prohibitions | -- | NO | YES |
| -- 5.1c | Phase-locked gate invocation | -- | NO | YES |
| -- 5.1d | Screenshot pre-capture at 1440px + 768px | -- | NO | YES |
| -- 5.1e | 9 PA auditor spawning (parallel, fresh-eyes, blind) | -- | NO | YES |
| -- 5.1f | Weaver spawning | -- | NO | YES |
| -- 5.1g | Fix cycle routing to SAME core agent (max 3) | -- | NO | YES |
| -- 5.1h | Output: output.html + _pa-report.md + _build-log.md | -- | NO | YES |
| **Step 5.5** | Supporting Files (included in Step 5) | -- | NO | YES |
| -- 5.5a | perception-thresholds.md (~80 lines) | -- | NO | YES |
| -- 5.5b | experiment-protocol.md (~80 lines) | -- | NO | NO (documentation) |
| **Step 6** | Run Experiment C (only if Exp B < 3.0) | 3-4 hours | NO | IS Exp C |
| -- 6.1 | `/build-page RESEARCH-SYNTHESIS.md` | -- | -- | -- |
| -- 6.2 | Full pipeline: orch + core + gates + 9 PA + weaver | -- | -- | -- |
| -- 6.3 | Score PA-05 and compare to Exp B | -- | -- | -- |
| -- 6.4 | **DECISION GATE** | -- | -- | -- |
| **Step 7** | Polish | 1-2 hours | YES (fast path) | YES |
| -- 7.1 | Edit 4: Recipe header Phase 4 in TC SKILL.md (~15 lines) | -- | YES | YES |
| -- 7.2 | Edit 5A: Replace Phase 6 in compositional-core/CLAUDE.md (~15 lines) | -- | YES | YES |
| -- 7.3 | Edit 5B: Remove 200-line restriction on mechanism catalog (~9 lines) | -- | YES | YES |
| -- 7.4 | Edit 5C: Agent Communication Protocol section (~20 lines) | -- | YES | YES |
| -- 7.5 | Edit 5D: Update conditional-load to FULL file (~2 lines) | -- | YES | YES |
| -- 7.6 | Edit 6A: Update status in design-system/CLAUDE.md | -- | YES | YES |
| -- 7.7 | Edit 6B: Update build routing + Opus recommendation | -- | YES | YES |
| -- 7.8 | Document experiment results | -- | YES | YES |

### The Fast Path (if Exp B >= 3.0)

Steps 1 + 2 + 3 + 7 = **4-8 hours total**. Skips Steps 4, 5, 5.5, 6 entirely.
No orchestrator. No gate runner. Just one Opus agent, one 100-line document, and Mode 4 PA.

### The Full Path (if Exp B < 3.0)

Steps 1 through 7 = **14.5-22.75 hours total**.

---

## M. Cost Estimates for Each Experiment

| Experiment | Cost | Time | Notes |
|-----------|------|------|-------|
| A (Naked Test) | ~$5 | ~1 hour | Cheapest. 1 Opus + PA only. |
| B ($5 Conventions Test) | ~$5-10 | ~2 hours | Second cheapest. No infrastructure. |
| C (Fat Core Full Test) | ~$30-50 | ~4 hours | Requires full pipeline build first (Steps 1-5.5). |
| D (Full Recipe Test) | ~$30-50 | ~4 hours | Same as C but with 650-line recipe. |
| E (Head-to-Head) | ~$40-80 | ~6 hours | Two full builds, same content, blind comparison. |
| **TOTAL** | **~$110-195** | **~2 days** | |

### Per-Page Cost Estimates (Production, post-experiment)

| Architecture | Cost/page |
|-------------|-----------|
| Master Prompt (old) | ~$5 |
| Original PV2 | ~$15-30 |
| Updated PV2 | ~$20-60 |
| Fat Core | ~$15-40 |

---

## N. The 5-Layer Intelligence Stack (Visual Overview, lines 574-714)

| Layer | Name | Function | What It Enables | Status in Pipeline |
|-------|------|----------|-----------------|-------------------|
| L5 | Anti-Scale Model | Governing Principle: Richness = semantic density x restraint x spatial confidence | 4/4 DESIGNED | ABSENT -- text in research only |
| L4 | Multi-Coherence | Binding Rule: >= 3 channels shift together at each boundary, same semantic direction | 3/4 COMPOSED | Text in recipe Phase 8. Gate SC-13 NEW |
| L3 | 6 CSS Channels | Instruments: Chromatic, Typographic, Spatial, Structural, Behavioral, Material | 2.5/4 STYLED+ | Named in catalog. Partially in recipe |
| L2 | 5 Scales (Zoom Levels) | Stages: Navigation, Page, Section, Component, Character | 2/4 STYLED | Mentioned in TC. Lost at handoff |
| L1 | Perception Thresholds | Floor: >= 15 RGB, >= 2px font, >= 0.03em spacing, <= 108px gap | Prevents 1.5/4 FLAT | Encoded as binary gates SC-09 through SC-12 |

> **Direct quote (line 623):** "Each layer DEPENDS on the one below. Multi-coherence requires channels. Channels require scales. Scales require perceptible thresholds. PV2 currently encodes only L1. Layers 2-5 evaporate at the TC-to-builder boundary. The transition table and fractal echo table are the primary fixes."

> **Direct quote (line 711):** "Intelligence ENTERS at TC (row 2) as full-spectrum, then DRAINS through the build-plan handoff (row 3). By the time the builder writes CSS, only L1 (thresholds) survives reliably."

### Fat Core's Intelligence Advantage

> **Direct quote (line 752):** Fat Core intelligence levels = "L1-L5 possible (one agent)" vs Updated PV2's "L1-L4 checked (gates+artifacts)"

Fat Core can theoretically access L5 because the SAME agent that understands the anti-scale model ALSO writes the CSS. No boundary crossing destroys it.

---

## O. What Comes After (Section 13, lines 1914-1972)

The guide outlines 6 phases after PV2 ships:
- **Hardening:** 3-5 builds on diverse content types, tune thresholds
- **Phase E:** Migration Playbook v2 (Track 1: 30-40 data pages at ~45-90 min each, Track 2: 35-45 prose pages at ~3-5 hrs each)
- **Phase F:** Pilot Migration (3-5 pages per track)
- **Phase G:** Playbook Refinement (last iteration before freeze)
- **FREEZE LINE** -- no more changes without formal governance
- **Phase H:** Track 1 Migration (2-4 weeks, parallel)
- **Phase I:** Track 2 Migration (4-8 weeks, sequential)
- **Phase J:** Content Ingestion (ongoing)

**Total timeline: ~3-5 months from now to all pages migrated.**

---

## P. Key Quotes: What Is "In" vs "Out" of Each Variant

### P.1 What is IN Fat Core

> **Line 369:** "The leading candidate is the Fat Core architecture (one Opus agent that plans AND builds, surrounded by automated gates and fresh-eyes evaluation)."

> **Line 773:** Fat Core gates = "3 phase-locked (during build)"

> **Line 780:** Fat Core boundaries = "7 (0 destructive)"

> **Line 941:** Core agent "Receives ~230 lines: conventions brief + tokens + prohibitions."

> **Line 997:** "One Opus agent plans AND builds. The orchestrator routes, not interprets. 9 fresh-eyes auditors verify the output. 3 phase-locked gates catch mechanical errors. The same agent handles fix cycles with full compositional memory. Total: 12 agents, 7 non-destructive boundaries."

### P.2 What is OUT of Fat Core (but IN Updated PV2)

> **Line 759:** TC scope in Fat Core = "Merged into core agent" (vs Updated PV2's "~660 lines (planner only)")

> **Line 766:** Fat Core key artifact = "Conventions Brief (~100 ln)" (vs Updated PV2's "Transition Tbl + Fractal Echo")

> **Line 773:** Fat Core gates = "3 phase-locked" (vs Updated PV2's "15 post-build + 4 micro-gate")

The flow diagram (lines 461-568) shows Wave 0 (TC planner), Wave 0.5 (metaphor check), Wave 0.9 (handoff gate), and 4 micro-gates -- ALL of which are Updated PV2 features, NOT Fat Core.

### P.3 What is IN Experiment B (and NOT Experiment C)

> **Line 1514:** "No pipeline. No orchestrator. No gates."

> **Lines 1671-1672:** "No orchestrator. No gate runner. Just one Opus agent, one 100-line document, and one verification pass."

### P.4 What is IN Experiment C (and NOT Experiment B)

> **Line 1481:** "12 agents: orchestrator + core + 3 gates + 9 PA + weaver"

> **Line 1519:** "Full 12-agent architecture: orchestrator + core agent (plans AND builds) + 3 phase-locked gates + 9 PA auditors + weaver + fix cycle."

### P.5 The "experiments first" principle

> **Line 904:** "Fat Core is the recommended architecture based on all evidence. But it has not been validated by experiments yet. The PV2 diagram's status is 'EXPERIMENT FIRST.'"

> **Lines 378-379:** "Committing to an architecture without experiments IS a compromise. The experiments cost ~$150 and take ~2 days. The pipeline implementation costs ~$500+ and takes ~2 weeks."

> **Lines 1503-1504:** "RESULTS DETERMINE: topology, builder format, codification scope. We build WHATEVER WINS. No pre-commitment."

---

## Q. Summary Statistics

| Metric | Value |
|--------|-------|
| Guide total lines | 1,997 |
| Sections | 9 + visual overview + master checklist + appendix + what comes after |
| New files described | 6 (~1,130 lines total) |
| Existing file edits | 6 files (~119 lines added) |
| Agents in Fat Core | 12 (1 creative) |
| Programmatic gates | 15 in 3 groups |
| Boundary crossings (Fat Core) | 7 (0 destructive) |
| Experiments defined | 5 |
| Experiment cost | ~$110-195 total |
| Implementation time (fast path) | 4-8 hours |
| Implementation time (full path) | 14.5-22.75 hours |
| Decision gates | 2 (after Exp B, after Exp C) |
| Features NOT in guide | Blind novelty protocol, dual PA, CP-02/CP-08/CP-09 |
| Features in Updated PV2 only (not Fat Core) | TC planner, metaphor check, handoff gate, transition table, fractal echo table, 4 micro-gates, observation pause, telescope+microscope |
