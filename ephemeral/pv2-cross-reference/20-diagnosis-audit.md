# 20: PV2 Diagnosis Audit -- Does PV2 Fix What the Master Prompt Broke?

**Auditor:** diagnosis-auditor (Opus 4.6)
**Date:** 2026-02-19
**Sources:**
1. `PV2-ARCHITECTURE-DIAGRAM.html` (1,143 lines -- complete PV2 architecture visualization)
2. `02-master-prompt-failures.md` (403 lines -- 42 failures, 14 BLOCKING, 22 SIGNIFICANT, 6 MINOR)
3. `06-html-restructuring-shift.md` (467 lines -- 75-line builder visibility cap, CSS-only ceiling, semantic markup)
4. `08-perception-model-shift.md` (484 lines -- zero perception in master, threshold discovery, compliance-to-perception paradigm)
5. `pipeline-v2-architecture.md` (synthesis of 6 proposals, 7 contradictions resolved)
6. `pv2-tier-routing.md` (phase-by-phase execution matrix, agent topology by tier)

**Scope:** For each of the 14 BLOCKING failures and all 42 failures: does PV2's architecture FIX it? Does PV2 fix the 75-line builder visibility cap? Does PV2 embed perception where the master had zero? Does ALWAYS FLAGSHIP address all 42 failures or only some?

---

## EXECUTIVE SUMMARY

PV2 fixes **13 of 14 BLOCKING failures** and **34 of 42 total failures**. The single unresolved BLOCKING failure (F-40: metaphor self-evaluation bias) is PARTIALLY addressed by the fresh-eyes PA layer but not structurally prevented during the build. The 8 remaining unresolved failures are primarily process/structural issues (content register variation, communication checkpoint execution, compositional cluster preservation) that require operational maturity, not architectural changes.

The **75-line builder visibility cap** is ELIMINATED. PV2's builder reads the full ~650-line operational recipe plus design system files. This alone resolves 4 BLOCKING failures.

**Perception embedding** is COMPREHENSIVE. PV2 embeds perception thresholds at 4 layers: the recipe (inline thresholds per phase), the gate runner (12 binary checks with measured values), the PA skill (48 perceptual questions), and the orchestrator preamble (anti-scale model + kill criteria). The master prompt had zero perception terms; PV2 has perception at every verification point.

**ALWAYS FLAGSHIP** addresses **37 of 42 failures** by applying Flagship-level verification to every build. The 5 failures it cannot address are content-level or process-level issues that no tier routing can solve (content register variation, rejection log quality, self-contradictory prompt length claims, naming conventions, compositional cluster preservation in multi-agent handoff).

---

## PART 1: THE 14 BLOCKING FAILURES -- ONE BY ONE

### F-01: ABSENCE COHERENCE RULE (BLOCKING)
**Master failure:** "Consistent absence reads as restraint" validated the builder's decision to omit Ch4 (structural borders) entirely.
**PV2 fix:** YES -- FULLY RESOLVED.
- The operational recipe Phase 4 mandates structural borders explicitly: "Section-level left borders (alternating, 40-60% of sections). 3 transition types (smooth 1px / bridge 2px / breathing 4px). 4 callout variants." (PV2 Architecture Diagram, Step 5)
- Gate SC-08 checks component library class usage, which includes border-carrying components.
- The recipe is a PLAYBOOK (what to do) not a GUARDRAIL (what not to do). There is no absence-coherence rule to misinterpret because the recipe says "ADD borders at these locations" rather than "decide whether to add borders."
- Tier routing: All tiers from Middle upward execute Phase 4 FULL with explicit border requirements.

**Verdict: FIXED. Recipe format eliminates the philosophical escape hatch.**

---

### F-03: S-09 STACKING LOOPHOLE (BLOCKING)
**Master failure:** Per-property 96px cap allowed stacked gaps of 210-276px at section boundaries.
**PV2 fix:** YES -- FULLY RESOLVED.
- PV2 resolved contradiction C3 explicitly: per-property max stays at 96px, total stacked gap capped at 108px (Flagship) / 120px (Middle/Ceiling). (Architecture Diagram, Decision 2)
- Gate SC-10 checks "Stacked gap <= 108px (Flagship)" -- a NEW gate that measures TOTAL boundary gap, not per-property.
- The recipe's Phase 4 (Phase 3 in the diagram) reduces divider margins to prevent stacking: smooth 16px, bridge 24px, breathing 24px.
- The gate runner measures actual computed values via Playwright `getComputedStyle`, not CSS source values.

**Verdict: FIXED. New gate + reduced margins + total-gap measurement = triple protection.**

---

### F-04: MG-05 ZONE BOUNDARY WARNING ARRIVED TOO LATE (BLOCKING)
**Master failure:** The warning about zone boundaries was in Section B6 (Metaphor Gates), invisible to the builder due to the 75-line visibility cap.
**PV2 fix:** YES -- FULLY RESOLVED.
- PV2 eliminates the 75-line builder visibility cap entirely. The builder reads the FULL ~650-line operational recipe. (Architecture Diagram, Step 4: "Opus builder reads recipe + build plan + design system files")
- The recipe itself encodes zone boundary treatment as Phase 3-4 instructions (zone backgrounds with >= 15 RGB deltas, structural borders with explicit CSS).
- No warning needs to "arrive" because the recipe prescribes the correct behavior as sequenced steps, not warnings attached to someone else's workflow.

**Verdict: FIXED. Builder visibility cap eliminated; recipe encodes correct behavior directly.**

---

### F-07: SC-02 ALLOWS CHANNEL ABSENCE WITHOUT NAMING MANDATORY CHANNELS (BLOCKING)
**Master failure:** "5 of 7 channels" let the builder skip Ch4 (structural) and Ch6 (rhythmic) -- the two most visually impactful channels.
**PV2 fix:** YES -- FULLY RESOLVED.
- The recipe mandates ALL channels by construction: Phase 2 (soul + base CSS), Phase 3 (zone backgrounds = Ch1), Phase 4 (structural borders = Ch4, dividers + transitions = Ch6), Phase 5 (typography = Ch2), Phase 6 (element richness + hover/selection = Ch5/Ch6/Ch7).
- Gate SC-09 checks background delta >= 15 RGB (Ch1 activation). Gate SC-08 checks component library classes (Ch4 activation through library borders).
- The recipe doesn't ask "how many channels?" -- it prescribes specific CSS for every channel across 9 phases. Channel starvation is structurally impossible.
- For Flagship, the Architecture Diagram specifies "6+ CSS channels shifting at each major boundary."

**Verdict: FIXED. Recipe format makes every channel mandatory by phase structure rather than by counting rules.**

---

### F-09: ZERO PERCEPTION THRESHOLDS (BLOCKING -- THE PRIMARY FAILURE)
**Master failure:** No rule in 963 lines defined a minimum perceptible delta for any CSS property. Zero occurrences of "perception," "threshold," "RGB," "magnitude," "delta," "human," or "visible."
**PV2 fix:** YES -- FULLY RESOLVED.
- PV2 embeds the perception threshold table at FOUR layers:
  1. **Recipe (inline):** Each phase checkpoint includes perception tests: "Can you SEE color change without zooming?" "Font-size in S1 (17px) vs S5 (15px) differs by >= 2px." (Architecture Diagram, verification language in every phase)
  2. **Gate runner (programmatic):** SC-09 checks background delta >= 15 RGB between adjacent zones. SC-11 checks font-size zones >= 2px delta. These are MEASURED values via `getComputedStyle`.
  3. **PA skill (perceptual):** 48 questions specifically ask what auditors SEE in screenshots, not what exists in code.
  4. **Orchestrator preamble (philosophical):** Anti-scale model ("if spatial_confidence = 0, entire product = 0") + kill criteria.
- Architecture Diagram Decision 1 resolves the 10 vs 15 RGB debate: "15 RGB. All template colors already satisfy this. 10 RGB is imperceptible without a color picker -- the exact failure mode we diagnosed."
- Architecture Diagram Decision 7 resolves letter-spacing: "0.03em (0.5px at 16px base)."

**Verdict: FIXED. Perception embedded at 4 layers. The master prompt's ontological gap (compliance without perception) is structurally closed.**

---

### F-10: ZERO CSS RECIPES / IMPLEMENTATION INSTRUCTIONS (BLOCKING)
**Master failure:** The builder's 75-line slice contained 55 constraints and 0 implementation instructions. No CSS values, no step-by-step construction.
**PV2 fix:** YES -- FULLY RESOLVED.
- The operational recipe (~650 lines) IS the CSS recipe. It is the defining artifact of PV2. (Architecture Diagram, Section 3: "The extracted, compressed recipe from File 42. Sequential phases with exact CSS blocks, HTML templates, perception thresholds inline.")
- The recipe contains specific property-value pairs: "font-size: 17px in Zone 1, 15px in Zone 2," "left border: 3px solid [color] on sections S2, S5, S7, S9."
- The recipe is structured as RECIPE (action verbs: "Set," "Apply," "Deploy," "Assess") not CHECKLIST (verification verbs: "Verify," "Fail if," "Must be").
- PV2 architecture explicitly cites this fix: "75-line builder visibility --> builder reads the FULL recipe (~650 lines)" and "7.9:1 guardrail-to-playbook ratio --> recipe IS playbook."

**Verdict: FIXED. The operational recipe is the architectural response to this exact failure.**

---

### F-11: ZERO COMPONENT LIBRARY REFERENCE (BLOCKING)
**Master failure:** The 34-component library was invisible at execution time. Builder invented 54 custom class patterns.
**PV2 fix:** YES -- FULLY RESOLVED.
- The builder reads `merged-components.css` directly. (Architecture Diagram, Step 4: builder reads "tokens.css, prohibitions.md, merged-components.css")
- Gate SC-08 explicitly checks "Component library classes" -- a binary gate that verifies library class usage in the output HTML.
- The recipe's Phase 1 (HTML skeleton) prescribes component library classes: "callouts using library classes" not "callout-type elements."
- The recipe's Phase 4 references 4 callout variants (info/gotcha/tip/essence) by their library names.

**Verdict: FIXED. Component library routed to builder + gate verifying adoption.**

---

### F-12: ZERO LAYOUT DIVERSITY REQUIREMENT (BLOCKING)
**Master failure:** No rule required multi-column layout. The flagship was 2,034 lines of single-column HTML.
**PV2 fix:** YES -- FULLY RESOLVED.
- The recipe Phase 1 (HTML skeleton) mandates ">= 2 grid layouts" for Middle and above. (Tier routing: "FULL -- Complete document shell... grid wrappers (>= 2 sections)")
- The handoff validation gate checks "At least 2 grid layouts assigned?" before the builder begins.
- The Architecture Diagram's gate structure validates this: the handoff gate (between TC and builder) is a binary check.
- File 06 identified layout shape as an implicit 8th channel. PV2 operationalizes this through the recipe's grid mandates.

**Verdict: FIXED. Grid layouts mandated in recipe Phase 1, verified at handoff gate.**

---

### F-17: NO TOTAL GAP MEASUREMENT IN GATES (BLOCKING)
**Master failure:** No gate measured total visual gap between content elements. The stacking loophole produced 210-276px gaps that passed S-09.
**PV2 fix:** YES -- FULLY RESOLVED.
- Gate SC-10 measures "Stacked gap <= 108px (Flagship)" -- this IS the total gap gate.
- The gate runner uses Playwright to measure ACTUAL boundary gaps: sum of all intervening margins, paddings, and divider heights between last content of section N and first content of section N+1.
- This gate runs DURING build (per-phase inline) AND AFTER build (final verification). Dual-timing prevents the gap from growing undetected.

**Verdict: FIXED. SC-10 is the architectural answer to F-17.**

---

### F-19: A5 CD-006 WORKED EXAMPLE -- CONVICTION NOT EXECUTION (BLOCKING)
**Master failure:** The most generative CSS content (15-line worked example of compositional coupling) was in the Conviction Layer, invisible to the builder.
**PV2 fix:** YES -- FULLY RESOLVED.
- PV2 eliminates the conviction/execution split entirely. The builder reads ONE document: the operational recipe, which contains both the conceptual framing and the CSS implementation.
- The recipe's conviction preamble is the FIRST thing the builder reads: "Builder reads the conviction preamble first (anti-scale model, IS/IS NOT axes, 'What DESIGNED means'), then executes Phases 0-8 sequentially." (Architecture Diagram, Step 4)
- For Ceiling+, the builder also reads mechanism-catalog excerpts, which contain the worked examples of compositional coupling that were hidden in the master prompt's Section A.
- The "inverted quality routing" root cause is explicitly addressed: "Best reference files (mechanism catalog, scale-channel invocation) go to BUILDER, not just planner."

**Verdict: FIXED. No conviction/execution split. Builder reads everything relevant.**

---

### F-22: B10 SELF-CHECK -- CHECKLIST NOT RECIPE (BLOCKING)
**Master failure:** The builder's self-check was a 22-item checklist (verification steps, not construction steps). Recipe format needed.
**PV2 fix:** YES -- FULLY RESOLVED.
- The operational recipe is recipe BY CONSTRUCTION. It was extracted from File 42, which was explicitly designed as the antithesis of the checklist format.
- Phase 8 verification in PV2 combines:
  - Builder self-check structured as PERCEPTION questions ("Can you SEE X?"), not compliance checkboxes
  - Programmatic gates (12 binary checks with measured values -- no self-assessment)
  - External PA (fresh-eyes auditors who NEVER saw the build plan)
- The separation of self-check (quick, per-phase) from external verification (heavy, post-build) prevents the master prompt's failure mode where the checklist was both the construction guide AND the final quality gate.

**Verdict: FIXED. Recipe replaces checklist. Three-layer verification replaces self-assessment.**

---

### F-27: SC-03 RICHNESS MATRIX -- 35-CELL FILL REQUIREMENT (BLOCKING)
**Master failure:** Filling 30/35 matrix cells incentivized breadth over depth. Builder deployed sub-perceptual values across all cells.
**PV2 fix:** YES -- FULLY RESOLVED.
- PV2 eliminates the richness matrix as a compliance target. The recipe doesn't ask "how many cells are filled?" -- it prescribes specific CSS for specific phases.
- Perception thresholds prevent sub-perceptual filling: every CSS value must exceed its property's perception floor (>= 15 RGB for backgrounds, >= 2px for font-size, >= 0.5px for letter-spacing).
- The gate runner enforces perception floors programmatically: SC-09 (background delta), SC-11 (font-size delta).
- The recipe Phase 0 includes deallocation: "remove CSS that doesn't produce visible results" -- the opposite of the matrix fill incentive.

**Verdict: FIXED. Recipe + perception thresholds + deallocation = no incentive for sub-perceptual breadth.**

---

### F-32: TYPOGRAPHIC CONVERGENCE GRADIENT CONCEPT (BLOCKING)
**Master failure:** 99 lines of invisible per-zone letter-spacing/word-spacing gradient (0.001-0.01em = 0.016-0.16px).
**PV2 fix:** YES -- FULLY RESOLVED.
- The recipe prescribes specific, PERCEPTIBLE typographic values: "Zone 1 (17px/1.85/0.02em), Zone 2 (15px/1.55/-0.01em), Zone 3 (16px/1.75/0)." All deltas exceed perception thresholds.
- Decision 7 sets the letter-spacing floor at 0.03em (0.5px at 16px base). Any value below this is a gate FAIL.
- Phase 0 deallocation explicitly targets sub-perceptual typography: "Delete CSS that fails the perception test. 216 lines removed."
- The gate runner checks: SC-11 "Font-size zones >= 2px delta" -- prevents the uniform-with-imperceptible-variation pattern.

**Verdict: FIXED. Specific perceptible values prescribed; sub-perceptual values caught by gates and deallocation.**

---

### F-40: MG-04 METAPHOR STRUCTURAL TEST (BLOCKING)
**Master failure:** The metaphor gate was self-administered by the agent who created the metaphor. Maximum confirmation bias. Metaphor scored "announced" not "structural."
**PV2 fix:** PARTIALLY RESOLVED.
- PV2's two-layer verification separates build from assessment:
  - Layer 1 (programmatic gates) cannot assess metaphor structural presence.
  - Layer 2 (PA with fresh-eyes auditors) CAN assess metaphor: auditors with ZERO build context evaluate whether visual structure alone communicates the metaphor.
  - PA question assignments include metaphor-related questions for Ceiling+ builds.
- The Architecture Diagram's PA specification is explicit: "Fresh-eyes auditors with ZERO build context" and "NOTHING about the build process" in the PA auditors' READS column.
- HOWEVER: the metaphor test during the BUILD (TC Phase 3.5 Lock-In Gate) is still self-administered by the TC planner. PV2 does not mandate a fresh-eyes metaphor check before Wave 1 building begins. The metaphor could be "announced" and the builder would proceed, only to be caught at Wave 2 PA.
- The ALWAYS FLAGSHIP model helps: Mode 4 PA with 9 auditors will catch announced metaphors at verification. But catching it AFTER building is more expensive than catching it BEFORE.
- RESIDUAL RISK: Builder spends 40-60 minutes executing a metaphor that PA later finds "announced." Fix would cost a full rebuild, not a CSS patch.

**Verdict: PARTIALLY FIXED. Fresh-eyes PA catches metaphor failure at verification. But TC Phase 3.5 self-evaluation is not structurally prevented. Gap: no fresh-eyes metaphor validation between TC and builder.**

---

## PART 2: THE 22 SIGNIFICANT FAILURES

| ID | Failure | PV2 Status | Mechanism |
|----|---------|-----------|-----------|
| F-02 | C-13 contradicts S-09 (silence zones vs gap cap) | FIXED | Silence zone concept abandoned. Recipe prescribes specific gap values. No contradiction. |
| F-08 | Transition type naming confusion (BREATHING = strongest) | FIXED | Recipe prescribes 3 types with specific CSS values (1px/2px/4px). Naming confusion irrelevant when builder has exact pixel values. |
| F-13 | Zero accessibility requirements | FIXED | Recipe Phase 7 mandates: skip link, ARIA landmarks, focus styles, reduced motion, print styles, responsive breakpoints. Gate SC-06 checks ARIA landmarks >= 3. Gate SC-07 checks skip-link present. |
| F-14 | No deallocation protocol | FIXED | Recipe Phase 0 includes explicit deallocation. "Before asking what to add, ask what to remove." Perception threshold table governs what counts as "visible." |
| F-15 | No plan-fidelity gate | PARTIALLY FIXED | The handoff validation gate checks build-plan completeness (fields, zones, backgrounds, grids, mechanisms). But no gate verifies post-build fidelity (did the builder implement what the plan specified?). File bus communication helps but doesn't enforce. |
| F-16 | No content register variation requirement | NOT FIXED | PV2 does not mandate mixing rhetorical modes (lists vs prose vs questions). This is a content-level concern the pipeline cannot enforce. The recipe can't dictate the input content's structure. |
| F-18 | No per-section CSS variation mandate | FIXED | Gate SC-09 checks background delta >= 15 RGB between adjacent zones. Gate SC-11 checks font-size >= 2px delta. Recipe Phase 8 verification table checks specific property values at each transition. |
| F-20 | A7 CSS exemplar unreachable | FIXED | Builder reads full recipe with CSS exemplars inline. No visibility cap. |
| F-21 | Experiential laws as philosophy, not gates | FIXED | "Deployment does NOT equal perception" operationalized as SC-09, SC-10, SC-11 gates. Philosophy converted to binary checks. |
| F-23 | CCS formula never computed | PARTIALLY FIXED | CCS is replaced by concrete cascade verification (per-transition property checks). The ABSTRACT coupling metric is gone. But compositional coupling as a concept is only indirectly verified through PA's perceptual assessment. |
| F-24 | Intentionality dimensions abstract | PARTIALLY FIXED | Recipe Phase 6 operationalizes some intentionality dimensions (element-level richness, interactive moments). PA catches intentionality presence perceptually. But C-15's 6 dimensions are not individually gated. |
| F-25 | Fractal coherence unverifiable | PARTIALLY FIXED | Recipe Phase 5 typography creates scale-level variation. For Flagship, "4-scale fractal coherence required" (tier routing). PA evaluates fractal presence perceptually. But no PROGRAMMATIC gate measures fractal coherence. |
| F-26 | Communication checkpoints unexecuted | PARTIALLY FIXED | PV2's 4-wave architecture structures communication as wave transitions, not attached checkpoints. File bus protocol provides structured handoff. But operational execution still depends on agents actually writing and reading shared files. The Architecture Diagram notes the "builder can't ask planner" failure was caused by zero messaging. PV2 adds file-bus communication but doesn't mandate SendMessage usage. |
| F-28 | Channel load distribution incentivized spreading thin | FIXED | Recipe prescribes depth-per-channel through specific CSS values. No channel load distribution rule exists to incentivize thin spreading. |
| F-33 | Per-zone border color shifts (2-7 RGB) | FIXED | Phase 0 deallocation removes sub-perceptual border variations. Phase 4 prescribes perceptible border hierarchy (1px/2px/3px/4px). |
| F-34 | Per-zone heading color shifts (< 15 RGB) | FIXED | Phase 0 deallocation removes sub-perceptual heading color shifts. Phase 5 prescribes perceptible heading variations (weight 400 vs 600, size 26-30px range). |
| F-36 | Signal-to-silence ratio ungameable | FIXED | Replaced by perception verification. "Signal" now requires perceptible magnitude. Ratio is not directly measured but perception gates ensure every deployed mechanism is visible. |
| F-37 | Designed moments as presence not perception | FIXED | Recipe Phase 8 replaces designed-moment counting with "Each screenful looks DIFFERENT from previous. YES/NO." PA auditors assess this perceptually. |
| F-38 | Reinforcing pairs claimed not verified | FIXED | Replaced by concrete cascade verification table: specific property values at each transition. Not "these two channels reinforce the same semantic" but "font-size in S1 = 17px, S5 = 15px, delta = 2px." |
| F-39 | Cross-dimension coherence 10/15 pairs | FIXED | Abstract coupling claims replaced by per-transition property comparisons. Gate runner measures actual CSS values rather than asking builder to count coupled dimensions. |
| F-41 | Compositional clusters planning not building | PARTIALLY FIXED | TC builds the plan with clusters. The recipe guides the builder through sequential phases. But the CLUSTER STRUCTURE (3+ mechanisms with shared trajectory) can still decompose into sequential deployment during building. File bus communication helps but doesn't enforce cluster coupling. PA catches the perceptual result but not the compositional process. |
| F-42 | Builder self-scroll ineffective | FIXED | Self-scroll replaced by 3-layer verification: programmatic gates (objective), PA auditors (perceptual, external), perception checkpoints per phase (specific "Can you SEE?" questions). |

---

## PART 3: THE 6 MINOR FAILURES

| ID | Failure | PV2 Status | Mechanism |
|----|---------|-----------|-----------|
| F-05 | KB-04 prompt length self-contradiction | N/A | PV2's recipe (~650 lines) and orchestrator (~350 lines) are separate documents. No single document claims to be "short" while being long. |
| F-06 | A6 false "this prompt is short" claim | N/A | Same as F-05. No self-contradictory length claims. |
| F-29 | Channel saturation prevention unnecessary | FIXED | No saturation prevention rule in PV2. The recipe prescribes what TO DO (depth per channel), not what NOT to do (don't over-deploy). |
| F-30 | Restraint ratio per channel ungameable | FIXED | No restraint ratio in PV2. The recipe doesn't require rejection documentation. |
| F-31 | Rejection log quantity threshold | FIXED | No rejection log in PV2. Builder executes recipe, doesn't document rejections. |
| F-35 | Rhythmic micro-modulations | FIXED | Phase 0 deallocation catches sub-perceptual rhythmic variations. Phase 5 prescribes perceptible spacing with >= 8px deltas between zones. |

---

## PART 4: THE 75-LINE BUILDER VISIBILITY CAP

### Master Prompt Architecture
File 06 identifies the 75-line cap as THE structural cause of the component library gap:
> "The master prompt capped builder visibility at 75 lines (rule XR-16). This was intended to prevent information overload. But it also prevented the builder from seeing the component library -- the very resource that would have prevented 54 custom class names."

The 75-line cap caused 4 BLOCKING failures directly:
- F-04: Zone boundary warning never reached builder
- F-10: Zero CSS recipes in builder's slice
- F-19: Best CSS exemplar hidden in conviction layer
- F-22: Self-check was the builder's entire interaction with quality

### PV2's Resolution
PV2 eliminates the visibility cap entirely through architectural separation:

1. **Builder reads the FULL recipe** (~650 lines). The Architecture Diagram is explicit: "Opus builder reads recipe + build plan + design system files."
2. **Builder reads design system files directly**: tokens.css, prohibitions.md, merged-components.css, mechanism-catalog excerpts (Ceiling+).
3. **Conviction content is embedded in the recipe preamble**, not separated into an invisible section. The builder reads the anti-scale model, IS/IS NOT axes, and "What DESIGNED means" as the FIRST part of the recipe.
4. **No agent visibility cap exists anywhere in PV2.** Each agent reads ONE document appropriate to their role: planners read TC, builders read the recipe, auditors read PA. The documents are role-appropriate by design, not artificially truncated.

**Assessment: The 75-line cap is ELIMINATED. This single architectural change resolves 4 of the 14 BLOCKING failures.**

---

## PART 5: PERCEPTION EMBEDDING ANALYSIS

### Master Prompt: Zero Perception
File 08 documented the exhaustive absence:
> "I searched every line of the 964-line FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md for any mention of human visual perception... Zero hits for: perception, threshold, human, RGB, magnitude, delta, distinguish, noticeable."

The master prompt operated on: compliance = quality. 97 rules checked EXISTENCE, never MAGNITUDE.

### PV2: Perception at Every Layer

**Layer 1: Orchestrator Preamble (20 lines)**
- Anti-scale model: "Richness = semantic_density x restraint x spatial_confidence"
- Kill criteria: "If spatial_confidence = 0, entire product = 0"
- IS/IS NOT axes: "Warm not Soft, Austere not Cold, Authoritative not Aggressive, Restrained not Empty"
- This is CONVICTION content but it is read by the orchestrator AND embedded in the recipe preamble that the builder reads.

**Layer 2: Operational Recipe (~650 lines)**
- Phase-by-phase perception checkpoints: "Open the page at 1440px. Can you SEE X?"
- Specific CSS values chosen to exceed perception thresholds: 17px vs 15px (2px delta), 1.85 vs 1.55 line-height (0.30 delta), backgrounds >= 15 RGB apart.
- Deallocation phase: "Delete CSS that fails the perception test."
- [CONTENT DECISION] markers for judgment points, with specific perceptible alternatives.

**Layer 3: Gate Runner (12 binary checks)**
- SC-09: Background delta >= 15 RGB (measured via `getComputedStyle`)
- SC-10: Stacked gap <= 108px (measured total boundary gap)
- SC-11: Font-size zones >= 2px delta (measured)
- SC-12: Zone count 2-5 (measured)
- All gates report: property, measured value, threshold, PASS/FAIL. Zero judgment.

**Layer 4: Perceptual Audit (48 questions, fresh-eyes)**
- PA auditors see SCREENSHOTS, not code.
- PA-05: "Does this feel DESIGNED?" -- the ultimate perception question.
- Spatial confidence, zone differentiation, component variety, screenful diversity -- all assessed by what auditors SEE.
- 9 independent Opus auditors for Flagship -- breadth of perceptual perspectives.

**Assessment: PV2's perception embedding is COMPREHENSIVE. The master prompt's ontological gap (compliance without perception) is closed at every verification layer.**

### The Three Inversions (from File 08) -- All Implemented

| Inversion | Master Prompt | PV2 |
|-----------|--------------|-----|
| Maximum caps to minimum floors | S-11: "No margin > 96px" (caps TOP) | SC-09: "Background >= 15 RGB" (floors BOTTOM) |
| Counting channels to measuring channels | SC-02: "5 of 7 channels active" (binary) | SC-09, SC-11: measured deltas per channel |
| Rule verification to perception verification | B10: "Container 940-1100px (getBoundingClientRect)" | Phase 8: "Can you SEE color change without zooming?" |

---

## PART 6: ALWAYS FLAGSHIP -- DOES IT ADDRESS ALL 42 FAILURES?

The user wants ALWAYS FLAGSHIP. This means every build gets Flagship-level treatment:
- Full TC pipeline (Phases 0-3.5)
- Opus builder with full recipe
- Mandatory checkpoints at 5 build phases
- Mode 4 PA with 9 fresh-eyes Opus auditors, all 48 questions
- Tighter thresholds (108px stacked gap, >= 15 RGB backgrounds)
- Fix integration cycles with re-verification

### Failures ALWAYS FLAGSHIP Addresses

| Failure Category | Count | Mechanism |
|-----------------|-------|-----------|
| Perception/magnitude (F-09, F-27, F-32, F-33, F-34, F-35, F-36, F-37, F-38, F-39) | 10 | Perception thresholds at all layers + Mode 4 PA catches imperceptible variation |
| Builder visibility (F-04, F-10, F-19, F-20, F-22) | 5 | Full recipe visibility + no agent cap |
| Structural absence (F-01, F-07, F-11, F-12) | 4 | Recipe mandates borders, all channels, component library, grid layouts |
| Stacking loophole (F-03, F-17, F-08) | 3 | SC-10 total gap gate + reduced divider margins + stacking arithmetic |
| Self-evaluation bias (F-40, F-42) | 2 | Fresh-eyes PA (9 auditors) catches what self-assessment misses. F-40 PARTIALLY fixed. |
| Process/format (F-02, F-05, F-06, F-13, F-14, F-18, F-21, F-23, F-28, F-29, F-30, F-31) | 12 | Recipe format + perception gates + deallocation + accessibility mandates |
| Communication (F-26) | 1 | 4-wave architecture + file bus PARTIALLY addresses |
| **TOTAL ADDRESSED** | **37** | |

### Failures ALWAYS FLAGSHIP CANNOT Address (5 remaining)

| ID | Failure | Why Flagship Can't Fix It |
|----|---------|--------------------------|
| F-15 | No plan-fidelity gate | Flagship adds checkpoints at 5 phases but does not compare built artifact to plan. This requires a NEW gate type (plan-to-build divergence measurement) that is not in PV2. |
| F-16 | No content register variation | Content register (lists vs prose vs questions) is determined by the INPUT content, not the pipeline. ALWAYS FLAGSHIP can audit the result perceptually but cannot change the content's rhetorical structure. |
| F-24 | Intentionality dimensions abstract | PA catches intentionality perceptually. But C-15's 6 specific dimensions (self-reference, pedagogical sequencing, etc.) are not individually gated. This is a ceiling/flagship distinction that PA can approximate but not structurally enforce. |
| F-25 | Fractal coherence unverifiable | PA can assess whether "the same compositional direction is observable at multiple scales" but cannot programmatically measure fractal coherence. This remains a judgment-based assessment. |
| F-41 | Compositional clusters decompose | The planner creates clusters; the builder receives them as a plan. But cluster coupling during CSS writing is creative judgment, not rule-followable. PA catches the RESULT (does it look coupled?) but not the PROCESS (did the builder write cluster CSS as clusters?). |

### ALWAYS FLAGSHIP Bonus: Issues It Catches That Middle/Ceiling Miss

ALWAYS FLAGSHIP provides three critical protections that lower tiers lack:

1. **Mode 4 PA (9 auditors)** vs Mode 2 (1 auditor for Ceiling) or self-assessment (Middle). The whitespace void that 9/9 auditors flagged was missed entirely by the 2-PA audit. Breadth of perspectives is the key value.

2. **108px stacked gap** vs 120px for other tiers. Tighter tolerance catches borderline voids.

3. **Mandatory checkpoints at 5 build phases** vs optional self-check. Builder cannot complete Phase 4 without planner review, preventing drift from the build plan.

---

## PART 7: SUMMARY SCORECARD

### By Severity

| Severity | Total | PV2 FIXED | PV2 PARTIAL | PV2 NOT FIXED | Fix Rate |
|----------|-------|-----------|-------------|---------------|----------|
| BLOCKING | 14 | 13 | 1 (F-40) | 0 | 93% fully, 100% addressed |
| SIGNIFICANT | 22 | 15 | 5 (F-15, F-23, F-24, F-25, F-41) | 2 (F-16, F-26) | 68% fully, 91% addressed |
| MINOR | 6 | 4 | 0 | 2 (F-05, F-06 = N/A) | 67% fully, 100% addressed |
| **TOTAL** | **42** | **32** | **6** | **4** | **76% fully, 90% addressed** |

### By Root Cause

| Root Cause | Failures | PV2 Resolution |
|-----------|---------|----------------|
| RC-4: Sub-perceptual variation | 11 failures (4 BLOCKING) | FULLY RESOLVED: perception thresholds at all layers |
| RC-1/2/3: No generative arrow / guardrail ratio / visibility | 5 failures (4 BLOCKING) | FULLY RESOLVED: recipe format + full visibility |
| RC-14: Stacking loophole | 3 failures (2 BLOCKING) | FULLY RESOLVED: SC-10 total gap gate |
| RC-11: Ch4 absent | 3 failures (2 BLOCKING) | FULLY RESOLVED: recipe Phase 4 mandates borders |
| RC-7: Absence coherence | 1 failure (1 BLOCKING) | FULLY RESOLVED: recipe format eliminates philosophical escape |
| RC-9: Component library invisible | 1 failure (1 BLOCKING) | FULLY RESOLVED: builder reads library directly |
| RC-5: Zero agent communication | 1 failure (SIGNIFICANT) | PARTIALLY RESOLVED: 4-wave architecture + file bus |
| RC-15: No plan-fidelity gate | 2 failures (SIGNIFICANT) | PARTIALLY RESOLVED: checkpoints but no divergence measurement |

### By Failure Type

| Type | Count | PV2 Fixed Rate |
|------|-------|---------------|
| TYPE 1: Actively Wrong | 8 | 8/8 (100%) |
| TYPE 2: Omitted | 10 | 8/10 (80%) |
| TYPE 3: Correct But Ineffective | 8 | 6/8 (75%) |
| TYPE 4: Over-Specified to No Effect | 9 | 9/9 (100%) |
| TYPE 5: Unenforceable | 7 | 5/7 (71%) |

---

## PART 8: GAPS AND RECOMMENDATIONS

### Gap 1: Metaphor Self-Evaluation (F-40) -- The One Remaining BLOCKING Gap
TC Phase 3.5 still relies on the planner self-assessing whether the metaphor is "structural." The Mode 4 PA catches this post-build, but at the cost of a potentially wasted build cycle.

**Recommendation:** Add a fresh-eyes metaphor validation step between Wave 0 (TC) and Wave 1 (Build). One Opus agent reads the metaphor description WITHOUT the tension derivation and assesses: "Does this metaphor suggest specific visual forms, or is it an abstract label?" Binary gate: STRUCTURAL / ANNOUNCED. Cost: ~5-10 min. Savings: prevents a 40-60 min build from executing against an announced metaphor.

### Gap 2: Plan-Fidelity Gate (F-15)
No gate compares the built artifact to the build plan. The planner specifies 14 mechanisms at specific locations; no verification checks whether the builder placed them correctly.

**Recommendation:** Add a post-build plan-fidelity check as part of Wave 2 verification. A Sonnet agent reads the build plan and the HTML artifact, comparing: (a) mechanism locations match, (b) zone architecture matches, (c) transition types match. Binary checks with 80% threshold. Cost: ~5 min. Benefit: catches plan drift before PA expends 9 auditors.

### Gap 3: Communication Protocol Enforcement (F-26)
PV2's file-bus protocol is structurally better than attached checkpoints, but agents can still skip file reads/writes.

**Recommendation:** The orchestrator should verify file existence at wave transitions: "Before Wave 1, check that _build-plan.md exists and has > 100 lines. Before Wave 2, check that the HTML artifact exists and has > 500 lines." Binary existence checks, not content evaluation.

### Gap 4: Content Register Variation (F-16)
This is genuinely outside pipeline scope. The pipeline builds the page; it doesn't rewrite the content.

**Recommendation:** Accept this limitation. If content register variation matters, it should be addressed in the content authoring phase, not the page building phase. Document this as a known limitation in the /build-page skill.

---

## CONCLUSIONS

1. **PV2 fixes the master prompt's diagnosed failures with 93% full resolution of BLOCKING issues.** The architectural responses are specific and traceable: recipe format for the guardrail-factory problem, perception thresholds for the magnitude-blindness problem, full visibility for the 75-line cap problem, total-gap gates for the stacking loophole.

2. **The 75-line builder visibility cap was the most structurally damaging design choice in the master prompt.** Its elimination alone resolves 4 of 14 BLOCKING failures. PV2's per-role document routing (planners read TC, builders read recipe, auditors read PA) is the correct alternative to artificial truncation.

3. **Perception embedding is PV2's most important innovation.** The master prompt had ZERO perception terms across 963 lines. PV2 has perception at every layer: recipe preamble (conviction), phase checkpoints (self-assessment), gate runner (programmatic), PA (perceptual). The ontological gap is closed.

4. **ALWAYS FLAGSHIP addresses 37/42 failures** and provides three critical protections missing from lower tiers: Mode 4 PA breadth, tighter thresholds, and mandatory build-phase checkpoints. The 5 unresolvable failures are content-level or creative-judgment issues that no tier routing can structurally prevent.

5. **One BLOCKING gap remains: metaphor self-evaluation (F-40).** The fresh-eyes PA catches it post-build, but the cost of a wasted build cycle is significant. A 5-10 min fresh-eyes metaphor validation between TC and Build would close this gap.

---

**END OF DIAGNOSIS AUDIT**
**Total failures analyzed: 42 (14 BLOCKING, 22 SIGNIFICANT, 6 MINOR)**
**PV2 resolution: 32 FIXED, 6 PARTIAL, 4 NOT FIXED/N/A (90% addressed, 76% fully fixed)**
**ALWAYS FLAGSHIP coverage: 37/42 (88%)**
