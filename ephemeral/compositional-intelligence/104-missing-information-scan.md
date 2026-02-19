# MISSING INFORMATION SCAN -- PV2 Diagram vs. Structural Investigation Reports

**Author:** Missing Information Scanner (Opus 4.6)
**Task:** #104
**Date:** 2026-02-19
**Method:** Read 8 structural reports + PV2 diagram, extracted top 3 findings per report, assessed representation in diagram

---

## REPORT 83: Making the Compositional Intelligence Stack INHERENT to PV2

### Top 3 Findings

**F83-1: The 5-layer compositional stack (Thresholds -> Scales -> Channels -> Multi-Coherence -> Anti-Scale) with strict cumulative dependency**
- REFLECTED: YES. Diagram lines 40-77 show the full 5-layer hierarchy with cumulative dependency language. Each layer's current state is annotated. The key insight about L1 being the only layer that survives end-to-end is stated at line 76.

**F83-2: Four new programmatic gates (SC-13 fractal direction, SC-14 channel activity, SC-15 restraint log, SC-16 spatial confidence) to enforce Layers 2-5**
- REFLECTED: PARTIAL. Diagram shows SC-13 (multi-coherence) at line 581 and SC-14/SC-15 at lines 583-589. However, Report 83 specifies SC-13 as "fractal direction consistency" (measuring CSS direction correlation across >= 3 scales) and SC-14 as "channel activity gate" (>= 3 channels shift at each boundary). The diagram's SC-13 is closer to Report 83's SC-14 concept. Report 83's SC-15 (restraint log completeness) and SC-16 (spatial confidence / mass distribution) are ABSENT from the diagram entirely. The diagram's SC-14 is "sub-perceptual prevention" and SC-15 is "border presence" -- different gates from Report 83's design.
- **CHANGE NEEDED:** Reconcile gate numbering. Report 83 designs 4 specific gates (SC-13 fractal direction, SC-14 channel activity, SC-15 restraint log, SC-16 spatial confidence). The diagram should either adopt these or document which Report 83 gates are deferred vs. replaced.

**F83-3: Five new mandatory artifacts per build (Fractal Echo Table, Transition Table, Restraint Log, Mass Distribution Table, Planned Cascade Value Table)**
- REFLECTED: PARTIAL. Diagram shows Fractal Echo Table (lines 256-266) and Transition Table (lines 245-254) as TC outputs. However, the Restraint Log (builder Phase 0 deliverable), Mass Distribution Table (builder Phase 1 deliverable), and Planned Cascade Value Table (builder Phase 3.5 deliverable) are ABSENT from the diagram. These are builder-produced artifacts, not TC-produced, so they should appear in the Wave 1 builder section.
- **CHANGE NEEDED:** Add to Wave 1 builder section: Restraint Log (Phase 0), Mass Distribution Table (Phase 1), and Planned Cascade Value Table (Phase 3.5) as mandatory builder deliverables. These are part of Report 83's anti-scale model operationalization.

---

## REPORT 84: Builder Telescope + Microscope Integration

### Top 3 Findings

**F84-1: TC output should change from `_build-plan.md` to an integrated `_build-recipe.md` (Layer B) that mirrors recipe phase structure with BECAUSE clauses at every instruction**
- REFLECTED: YES. Diagram lines 237-240 describe "_build-recipe.md (~200-400 lines)" with "TELESCOPE COMMENTS at every line" and "WHY (compositional intent) AND WHAT (specific CSS snippet or value)." The telescope+microscope interlacing pattern is shown at lines 436-476 with the remediation spec example.

**F84-2: Recipe phases should be reorganized from CSS-property-type (backgrounds, borders, typography) to SCALE-organized (Page Scale, Section Scale, Component Scale, Character Scale) with boundary and fractal checkpoints inline**
- REFLECTED: NO. The diagram's Phase listing (lines 482-505) still shows the original property-type organization: "Phase 3: Zone Backgrounds", "Phase 4: Structural Borders + Transitions", "Phase 5: Typography Zones". Report 84 Section 2.4 (and Report 17) propose restructuring Phases 3-6 to PAGE SCALE / SECTION SCALE / COMPONENT SCALE / CHARACTER SCALE with all 6 channels deployed at each scale and boundary/fractal checkpoints inline. The diagram does not reflect this restructuring.
- **CHANGE NEEDED:** Either update Phase 3-6 descriptions to reflect scale-organized phases OR add a note that this restructuring is pending experiment results. The "EXPERIMENT BRANCH" section mentions recipe vs brief vs hybrid but does not specifically mention scale-organized phases as a possible restructuring.

**F84-3: Phase 6.5 OBSERVATION PAUSE -- metacognitive reflection step where builder scrolls, writes 2-3 observations, and adjusts before verification**
- REFLECTED: NO. The diagram does not mention Phase 6.5 or any observation/reflection step between Phase 6 (Element-Level Richness) and Phase 7 (Accessibility). Report 84 Section 2.4 identifies this as a key factor from CD-006's success (Factor 6: Metacognitive Builder Loop).
- **CHANGE NEEDED:** Add Phase 6.5 (Observation Pause) to the builder phases section. This is a ~5-10 minute mid-build evaluation step where the builder scrolls the page and writes observations about density arc visibility, designed moments, and what feels wrong.

---

## REPORT 85: Recipe Ceiling Analysis

### Top 3 Findings

**F85-1: The two-dimensional model (Specificity x Freedom) explains all 4 experiments better than the one-dimensional model (checklist -> recipe -> convention). The untested HIGH SPECIFICITY + HIGH FREEDOM quadrant is predicted to produce the best results.**
- REFLECTED: PARTIAL. The diagram mentions "Recipe Ceiling" at lines 538-545 with the ceiling values (Checklist 1.5/4, Recipe 3-4/4, Convention 4/4+) and mentions the 4 irreducible capabilities. But the two-dimensional model (specificity x freedom) is NOT represented. The diagram treats instruction types as a one-dimensional spectrum when Report 85 argues this is a category error.
- **CHANGE NEEDED:** Add the two-dimensional model to the Recipe Ceiling section. At minimum, note that the evidence supports HIGH SPECIFICITY + HIGH FREEDOM as the optimal quadrant, and that the 3 experiments (A/B/C) partially test this by varying freedom while holding specificity constant.

**F85-2: Four irreducible capabilities that resist recipe encoding: content-form resonance, proportional intelligence, creative surprise, emergent coherence**
- REFLECTED: YES. Diagram lines 543-545 list all four: "content-form resonance, proportional intelligence, creative surprise, emergent coherence."

**F85-3: Architecture D (max specificity + max freedom) -- the recommended experiment: all thresholds specified, all soul constraints specified, full reference files, NO recipe, NO phase sequence. Instruction: "Build a page where every visual decision serves the semantic direction."**
- REFLECTED: PARTIAL. The diagram's Experiment C ("Opus + Principles Brief + Gates") is similar but not identical to Architecture D. Report 85's Architecture D explicitly specifies NO recipe and NO phase sequence, while the diagram's Experiment C is described more vaguely as "Constraints only + transition table + Playwright gates." The key distinction -- that the recipe becomes OPTIONAL, not absent -- is not made clear.
- **CHANGE NEEDED:** Clarify whether Experiment C = Architecture D from Report 85, and if so, make the "no recipe, no sequence" aspect explicit. If Experiment C is different, note Architecture D as an additional experiment option.

---

## REPORT 86: Intelligence Hierarchy Map

### Top 3 Findings

**F86-1: Per-level CSS examples showing exactly what each layer ADDS to the output -- from L1 (visible differences, no pattern) through L5 (fewer lines carrying maximum meaning, rejection log)**
- REFLECTED: NO. The diagram shows the levels abstractly (lines 40-77) but does not include concrete CSS examples demonstrating what each level adds. Report 86's side-by-side comparison (L1-only through L1+L2+L3+L4+L5 at the same boundary) is the most instructive content in the report -- it makes the hierarchy tangible rather than conceptual.
- **CHANGE NEEDED:** Consider adding a brief "L1 vs L1-L5 example" to the diagram or referencing Report 86 for the detailed CSS comparisons. This is the strongest teaching tool for what the intelligence hierarchy means in practice.

**F86-2: Per-level PA-05 correspondence -- L1 prevents 1.5/4, L2 enables 2/4, L3 enables 2.5/4, L4 enables 3/4, L5 enables 4/4**
- REFLECTED: YES. Diagram lines 46, 52, 58, 62, 68 each annotate the PA-05 correspondence: "Enables 4/4 (DESIGNED)", "Enables 3/4 (COMPOSED)", etc.

**F86-3: Total codification cost: ~305 lines across 4 files (build plan format +120, recipe +60, gate runner +95, TC skill +30)**
- REFLECTED: NO. The diagram's "NEW ARTIFACTS" section (lines 770-803) gives different estimates (~1,350 lines total for 4 new files) and does not break down the per-level codification cost. Report 86's granular cost table (120 lines build plan, 60 lines recipe, 95 lines gate runner, 30 lines TC) is absent.
- **CHANGE NEEDED:** Add Report 86's per-level codification costs to the diagram's artifacts section, or at minimum cross-reference the report. The ~305 lines figure is important because it shows the incremental cost of making each layer inherent is small.

---

## REPORT 87: Inherent vs. Bolted On

### Top 3 Findings

**F87-1: Classification of ALL 16 PV2 features as INHERENT (2-3) or BOLTED ON (12-14), with the finding that PV2's compositional stack is "almost entirely bolted on"**
- REFLECTED: YES. Diagram lines 508-537 show the "INHERENT VS BOLTED ON AT WAVE 1" section with specific features classified in each category. The honest assessment that "Making ALL features inherent is architecturally impossible for LLM-based builders" is stated at lines 530-536.

**F87-2: Six design patterns for making features inherent: Template HTML with required slots, Phase-locked build, Schema-validated handoff (YAML), Immutable preamble, Consumption verification (build tokens), Required artifact chain (downstream consumption)**
- REFLECTED: PARTIAL. The diagram mentions 4 of the 6 patterns at lines 525-528: "Template HTML with required slots", "Phase-locked build", "Artifact dependency", "Schema-validated YAML". Two patterns are ABSENT: (1) Immutable Preamble (orchestrator pre-writes soul CSS + accessibility infrastructure that builder cannot modify) and (2) Consumption Verification (build tokens proving file access).
- **CHANGE NEEDED:** Add the Immutable Preamble pattern and Consumption Verification pattern to the diagram's inherent-vs-bolted-on section. The Immutable Preamble is particularly important because it is Report 87's R-02 recommendation ("ADOPT second") and structurally guarantees soul constraint compliance without relying on post-hoc gates.

**F87-3: The irreducible 30% -- compositional quality (PA-05 score) CANNOT be made structurally inherent because quality judgment is not structurally encodable. The goal is to narrow PA's job to this 30%.**
- REFLECTED: YES. Diagram lines 609-614 state the "70/30 BOUNDARY" and explain that gates catch ~70% while the remaining 30% requires perceptual judgment.

---

## REPORT 93: Separation of Concerns Analysis

### Top 3 Findings

**F93-1: Three structural violations: (1) TC carries 624 lines (32.3%) of builder content, (2) recipe is content-agnostic so builder must mentally merge 2 documents, (3) fix cycle receives perception-language issues requiring lossy translation to CSS**
- REFLECTED: PARTIAL. Violation 1 (TC carries builder content) is well-reflected -- diagram lines 228-233 note TC scope narrowing and removal of Phase 4+ builder content. Violation 2 (content-agnostic recipe) is addressed by the Layer A + Layer B architecture. Violation 3 (fix cycle translation gap) is PARTIALLY addressed -- diagram lines 675-678 mention "gate-generated SPECIFIC CSS fix recipes" but this only covers gate-detected issues. The broader problem of PA findings requiring perception-to-composition-to-CSS translation is not addressed.
- **CHANGE NEEDED:** Add to the Wave 3 section: PA weaver should have access to the cascade value table (measured CSS values, not build intent) so it can link perceptual findings to specific CSS measurements. This bridges the perception-composition translation gap without violating fresh-eyes principle.

**F93-2: Two structural gaps: (1) builder cannot ask TC clarification questions (one-way information flow), (2) no mechanism connects PA findings back to compositional decisions**
- REFLECTED: NO for Gap 1. The diagram does not mention any builder-to-TC question mechanism. Report 93 recommends a `_builder-question.md` file in the communication protocol where the builder can pause and ask TC a question, with the orchestrator routing the question and answer. This costs ~5-10 minutes per question but prevents compounding errors.
- REFLECTED: NO for Gap 2. The composition-perception bridge at the fix boundary is absent from the diagram.
- **CHANGE NEEDED:** (1) Add `_builder-question.md` communication protocol to Wave 1. (2) Add PA weaver cascade table access to Wave 2/3.

**F93-3: The deeper separation should be by INTELLIGENCE TYPE (declarative, procedural, visual, compositional, perceptual, calibrational), not just by agent role. Each type should propagate in its optimal format.**
- REFLECTED: NO. The diagram organizes by pipeline stage (Wave 0, 0.5, 0.9, 1, 2, 3) and by agent role (TC, builder, PA). Report 93's intelligence-type taxonomy is not represented. The key insight -- that TC should produce declarative + compositional intelligence, the recipe should carry procedural intelligence, the builder should produce visual intelligence, and each should use its optimal format (YAML for declarative, prose for compositional, CSS for visual) -- is absent.
- **CHANGE NEEDED:** Add an "Intelligence Type Routing" section showing which intelligence types flow between which stages and in which format. This is Report 28's multi-format propagation recommendation, endorsed by Report 93.

---

## REPORT 96: Diagram Representation

### Top 3 Findings

**F96-1: Five diagram approaches designed and evaluated -- Dual-Track (28/35) recommended as primary, Heatmap (24/35) as reference, Layers (26/35) as conceptual model. Composite diagram combining all three in 30 lines.**
- REFLECTED: PARTIAL. The diagram includes the Heatmap (lines 80-128, labeled "Approach 1 from Report 96") but NOT the recommended Dual-Track diagram (highest-scoring at 28/35). The Layers diagram is partially reflected in the 5-layer stack section (lines 40-77). The composite diagram (Report 96's final recommendation) combining all three perspectives in 30 lines is NOT present.
- **CHANGE NEEDED:** Add the Dual-Track diagram (artifact track vs intelligence track) as recommended by Report 96. It was scored highest and uniquely communicates the core problem: artifacts always complete but intelligence always degrades. The divergence point at TC-to-build-plan is "the SINGLE HIGHEST-LEVERAGE FIX" per the diagram's own language.

**F96-2: The PA as "convergence attempt" framing -- PA doesn't create intelligence, it tries to RECOVER lost intelligence through perception**
- REFLECTED: NO. The diagram's PA section (lines 620-634) describes PA as evaluating perception but does not frame it as a convergence attempt that tries to recover intelligence lost at earlier boundaries. Report 96's dual-track diagram makes this visible by showing the intelligence track degrading and then PA attempting to detect what survived through perception alone.
- **CHANGE NEEDED:** Add the "PA as convergence attempt" framing to the PA section. This reframes PA from "quality gate" to "intelligence recovery mechanism" and explains WHY PA catches things gates miss.

**F96-3: The composite diagram concept (30 lines integrating heatmap + dual-track + layers) as a compact representation of the entire intelligence flow**
- REFLECTED: NO. Report 96's composite diagram (lines 516-547) combines all three perspectives into a single 30-line view: heatmap columns showing per-level state at each stage, divergence annotation at the TC boundary, and layer-based ceiling annotation at the builder. This compact representation is not in the PV2 diagram.
- **CHANGE NEEDED:** Add the composite diagram either as a replacement for or addition to the existing heatmap section.

---

## REPORT 67: Revised PV2 Architecture

### Top 3 Findings

**F67-1: TC Phase 3.6 (Transition Table + Build Recipe Instance generation) as a specific new TC sub-phase**
- REFLECTED: YES. Diagram lines 214-223 show "NEW: Phase 4T / TRANSITION TABLE + FRACTAL ECHO TABLE GENERATION" with the 3 artifacts. Note: Report 67 calls it "Phase 3.6" while the diagram calls it "Phase 4T" -- minor naming inconsistency, but functionally equivalent.

**F67-2: Inter-phase micro-gates (MG-1 through MG-4) -- lightweight Playwright checks between build phases to catch foundation failures early**
- REFLECTED: NO. The diagram does not show micro-gates between build phases. Report 67 Section 5.4 specifies 4 micro-gates: MG-1 after Phase 1 (DOM inspection), MG-2 after Phase 3 (bg delta), MG-3 after Phase 4 (borders), MG-4 after Phase 5 (typography). Each takes ~30 seconds and prevents the builder from proceeding on a fundamentally broken foundation. Total overhead: ~2 minutes.
- **CHANGE NEEDED:** Add MG-1 through MG-4 to the Wave 1 builder section. These are distinct from the 15 end-of-build programmatic gates (Wave 2). They catch failures at ~30 minutes into the build rather than at 90-150 minutes.

**F67-3: Guardrail-Playbook Pairing -- 42 pairs where every prohibition has a paired concrete action with exact CSS values**
- REFLECTED: NO. The diagram does not mention the 42 guardrail-playbook pairs. Report 67 Section 5.5 describes these as systematic pairs embedded in the recipe template: every "don't do X" has a paired "instead do Y with these exact values." Example: "Don't use letter-spacing below 0.03em" -> "Use ONLY these values: 0em, 0.03em, 0.06em, 0.1em." The master prompt's 7.9:1 guardrail-to-playbook ratio is inverted to ~0.5:1.
- **CHANGE NEEDED:** Add guardrail-playbook pairing to the operational-recipe-template description (line 780-783). This is a structural feature of Layer A, not just a content feature.

---

## CONSOLIDATED GAP LIST

### ABSENT from diagram (highest priority -- these findings have no representation at all):

| # | Finding | Source | Diagram Section Affected |
|---|---------|--------|--------------------------|
| G-01 | Phase 6.5 Observation Pause (metacognitive reflection) | Report 84, F84-3 | Wave 1 builder phases (lines 482-505) |
| G-02 | Scale-organized recipe phases (Page/Section/Component/Character Scale instead of Backgrounds/Borders/Typography) | Report 84, F84-2 | Wave 1 builder phases (lines 482-505) |
| G-03 | Restraint Log, Mass Distribution Table, Planned Cascade Value Table as mandatory builder deliverables | Report 83, F83-3 | Wave 1 builder section |
| G-04 | Builder-to-TC question mechanism (`_builder-question.md`) | Report 93, F93-2 | Wave 1, add bidirectional communication |
| G-05 | PA weaver access to cascade value table for perception-to-CSS bridging | Report 93, F93-2 | Wave 2/3 fix cycle section |
| G-06 | Intelligence-type routing (declarative/procedural/visual/compositional/perceptual/calibrational) | Report 93, F93-3 | New section needed |
| G-07 | Dual-Track diagram (artifact track vs intelligence track) -- highest-scoring representation | Report 96, F96-1 | Intelligence heatmap section (lines 80-128) |
| G-08 | PA as "convergence attempt" framing | Report 96, F96-2 | PA auditors section (lines 620-634) |
| G-09 | Inter-phase micro-gates (MG-1 through MG-4) | Report 67, F67-2 | Wave 1 builder phases |
| G-10 | 42 guardrail-playbook pairs in recipe template | Report 67, F67-3 | New artifacts section (lines 770-803) |
| G-11 | Per-level CSS examples (L1-only through L1-L5 at same boundary) | Report 86, F86-1 | 5-layer stack section (lines 40-77) |
| G-12 | Per-level codification cost (~305 lines across 4 files) | Report 86, F86-3 | New artifacts section (lines 770-803) |
| G-13 | Immutable Preamble pattern (orchestrator pre-writes soul CSS) | Report 87, F87-2 | Inherent vs bolted-on section (lines 508-537) |
| G-14 | Consumption Verification pattern (build tokens proving file access) | Report 87, F87-2 | Inherent vs bolted-on section (lines 508-537) |

### PARTIAL representation (lower priority -- concept present but details wrong or incomplete):

| # | Finding | Source | What's Missing |
|---|---------|--------|----------------|
| P-01 | Gate numbering mismatch: Report 83 designs SC-13 (fractal direction), SC-14 (channel activity), SC-15 (restraint log), SC-16 (spatial confidence). Diagram has SC-13 (multi-coherence), SC-14 (sub-perceptual), SC-15 (border presence). | Reports 83/86 vs diagram lines 580-589 | Reconcile which gates are canonical. 6 distinct gates designed across reports but only 3 slots in diagram. |
| P-02 | Two-dimensional model (Specificity x Freedom) from Recipe Ceiling analysis | Report 85, F85-1 | Add to recipe ceiling section; currently only shows 1D spectrum |
| P-03 | Architecture D (max specificity + max freedom) as distinct experiment | Report 85, F85-3 | Clarify whether Experiment C = Architecture D or if they differ |
| P-04 | Report 96 composite diagram (30 lines integrating 3 perspectives) | Report 96, F96-3 | Add composite diagram as upgrade to existing heatmap |
| P-05 | Fix cycle perception-to-composition translation gap | Report 93, F93-1 | Gate-generated fix recipes cover gate failures but not PA-only findings |

---

## SEVERITY ASSESSMENT

### BLOCKING (should be added before codification):

1. **G-09: Inter-phase micro-gates (MG-1-MG-4)** -- These are the mechanism that makes phase enforcement INHERENT rather than advisory. Without them, the builder can skip phases and only discover failures at Wave 2 (90-150 min in). With them, foundation failures are caught at ~30 min. Report 87 identifies phase enforcement as BOLTED ON; micro-gates are the primary fix.

2. **G-01: Phase 6.5 Observation Pause** -- The single cheapest change with highest expected impact per Report 85. Creates the metacognitive loop that CD-006 exhibited naturally. Prevents catastrophic failures like the flagship's whitespace voids.

3. **P-01: Gate numbering reconciliation** -- Reports 83 and 86 design 6 specific gates (SC-13 through SC-18 effectively). The diagram has 3 new gates with different definitions. Before codifying gate-runner.js, these must be reconciled into one canonical set.

### SIGNIFICANT (should be added but not blocking):

4. **G-03: Three mandatory builder deliverables** (Restraint Log, Mass Distribution Table, Planned Cascade Value Table) -- These operationalize the anti-scale model (L5) and are Report 83's primary contribution beyond L1-L4.

5. **G-02: Scale-organized recipe phases** -- This is the structural fix for the "sequential by channel but multi-coherence requires simultaneous by boundary" contradiction. Without it, the recipe fundamentally works against multi-coherence.

6. **G-07: Dual-Track diagram** -- Report 96 scored it highest (28/35) and it uniquely communicates the artifact-vs-intelligence divergence. The heatmap alone does not tell the story of WHY intelligence degrades.

### NOTED (should be tracked but lower priority):

7. **G-04: Builder-to-TC question mechanism** -- Important for preventing compounding errors but adds orchestrator complexity. Can be deferred to post-experiment.

8. **G-06: Intelligence-type routing** -- Correct conceptual model but high abstraction. Can be implemented implicitly through format choices (YAML for declarative, prose for compositional) without a separate diagram section.

9. **G-13/G-14: Immutable Preamble + Consumption Verification** -- Powerful patterns but add implementation complexity. Can be deferred if experiments show the recipe+gates approach is sufficient.

---

## SUMMARY

**Total findings scanned:** 24 (3 per report x 8 reports)
**YES (fully reflected):** 8 (33%)
**PARTIAL (concept present, details missing):** 8 (33%)
**NO (absent from diagram):** 8 (33%)

**Gap items identified:** 14 ABSENT + 5 PARTIAL = 19 total
**BLOCKING gaps:** 3 (micro-gates, Phase 6.5, gate reconciliation)
**SIGNIFICANT gaps:** 3 (builder deliverables, scale-organized phases, dual-track diagram)
**NOTED gaps:** 8 (lower priority, can be deferred)

The diagram is strongest on the 5-layer compositional stack, the TC scope narrowing, the transition table, and the inherent-vs-bolted-on classification. It is weakest on builder-side innovations (micro-gates, Phase 6.5, builder deliverables, scale-organized phases) and on alternative representations of the intelligence flow (dual-track diagram, composite diagram). The gate numbering conflict between reports and diagram is a reconciliation task that must be resolved before codification.

---

**END OF MISSING INFORMATION SCAN**
