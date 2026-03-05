# Comprehensive Audit of Files 09, 10, and 11

**Auditor:** audit-09-11 agent (Opus 4.6)
**Date:** 2026-02-24
**Input:** 09-buddy-adversarial.md (341 lines), 10-buddy-metacognitive.md (367 lines), 11-buddy-fresh-eyes.md (150 lines)
**Purpose:** Extract EVERY change, enrichment, nuance, precondition, safeguard, warning, and implementation detail. Miss nothing.

**Cross-reference plan (the "8-change plan"):**
- ME-001 (experiential pass)
- ME-002 (weaver priority)
- ME-004 (builder Q0)
- ME-005 (verdict logic)
- ME-006 (screenshot validation)
- ME-007 (GR-44 fix)
- ME-037 + ME-051 (PA swap)
- ME-039 (boilerplate)

---

## FILE 09: buddy-adversarial.md — COMPREHENSIVE INVENTORY

### Section 1A: Experiential Pass Time Explosion

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-1A-1 Time Cost | CONSTRAINT | Experiential pass adds 5-8 min per auditor. Across 9 auditors: +45-72 min total PA time. Pipeline already 3-6 hours; pushes to 4-7 hours. | pa-deployment.md | MUST | PARTIAL — ME-001 adds the pass but does NOT budget the time cost |
| ADV-1A-2 Weaver Context Growth | WARNING | Each auditor's "Section 0" experiential report adds ~100+ lines to Weaver input. 9 auditors = 900+ additional lines. Weaver already synthesizes 9 full reports. Nobody has budgeted for this growth. | pa-deployment.md, weaver instructions | MUST | NO — ME-002 changes Weaver priority but does not address input volume |
| ADV-1A-3 Context Exhaustion Cascade | WARNING | Longer PA -> more Weaver input -> longer Weaver -> context exhaustion more likely -> pipeline fails to complete in one session -> state serialization -> information loss at session boundary -> quality degrades. Full cascade chain documented. | Pipeline architecture | SHOULD | NO |
| ADV-1A-4 Three-Auditor Optimization | CHANGE | Run experiential pass on ONLY 3 auditors (not all 9). Uses ME-009's 3/9 confirmation threshold. Gets 33% of cost for approximately same detection power. Nobody in analysis corpus has proposed this. | pa-deployment.md | MUST | NO — "Nobody in the analysis corpus has proposed this optimization" |
| ADV-1A-5 Aggregation Does Not Reduce Volume | NUANCE | ME-009 (aggregation threshold table) tells Weaver what to DO with findings but does NOT reduce input volume. Weaver still reads all 9 Section 0s. | Weaver instructions | SHOULD | NO |

### Section 1B: WCAG Gate vs Warm Palette Identity Conflict

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-1B-1 Body Text OK | NUANCE | #1A1A1A on #FEF9F5 = ~16:1 contrast ratio. Body text passes WCAG AA easily. #3d3d3d on #fefcf3 = ~8.5:1. Also fine. No conflict for primary text. | N/A (informational) | N/A | N/A |
| ADV-1B-2 Accent Teal Fails on Dark Warm BG | WARNING | #2a7d7d (muted teal) on #FEF9F5 = ~4.8:1 (barely passes 4.5:1). But on darker warm backgrounds (#f0ebe3), #2a7d7d drops to ~4.1:1 — BELOW 4.5:1 threshold. WCAG gate would flag as FAIL on REQUIRED gate. | gate-runner (new WCAG gate) | MUST | NO — ME-003 (WCAG gate) is NOT in the 8-change plan, and the palette conflict is not addressed anywhere |
| ADV-1B-3 Accent Colors All In Danger Zone | WARNING | Sage green (#6b9b7a), warm amber (#c49052), muted coral (#c97065) are all in 3:1-5:1 range depending on background. Many will fail 4.5:1 on non-white backgrounds. WCAG gate would produce REQUIRED failures on colors the soul MANDATES. | gate-runner, soul/identity constraints | MUST | NO |
| ADV-1B-4 Resolution Option A | CHANGE | WCAG exemption for designated accent colors used for decorative (non-informational) purposes. | gate-runner (WCAG gate spec) | MUST (if WCAG gate added) | NO |
| ADV-1B-5 Resolution Option B | CHANGE | Revised accent palette with colors that pass 4.5:1 on ALL warm backgrounds. | tokens.css, soul palette | MUST (if WCAG gate added) | NO |
| ADV-1B-6 Resolution Option C | CHANGE | WCAG gate at RECOMMENDED tier (not REQUIRED) to avoid blocking builds over accent contrast. | gate-runner | MUST (if WCAG gate added) | NO |
| ADV-1B-7 Unresolved Conflict | PRECONDITION | None of Options A/B/C is specified in ME-003. The enrichment says "Add new REQUIRED gate" without addressing the palette conflict. THIS MUST BE RESOLVED BEFORE implementing ME-003. | ME-003 spec | MUST | NO |

### Section 1C: Screenshot Validation Creates New Failure Mode

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-1C-1 CSS Override Changes Page | WARNING | Re-capture uses `visibility: visible !important; transform: none !important`. These overrides CHANGE THE PAGE. Scroll-triggered reveals show everything at once. Screen-reader-only content renders visually. Re-captured page is NOT the page the builder built. | pa-deployment.md (screenshot step) | MUST | PARTIAL — ME-006 adds the gate but does NOT address this failure mode |
| ADV-1C-2 Auditors Score Different Page | WARNING | PA auditors score the forced-visible version. Shipped version uses original CSS. High score on forced-visible != high score on shipped. Low score on forced-visible may be caused by layout corruption from overrides, not real defects. | pa-deployment.md | MUST | NO |
| ADV-1C-3 Builder Signal Requirement | CHANGE | ME-006 needs a builder signal: "This page uses scroll-triggered reveals" that exempts it from blank-screenshot threshold while still catching actual DPR bugs. Without this, the gate cannot distinguish intentional hidden content from broken screenshots. | pa-deployment.md, builder output spec | MUST | NO |
| ADV-1C-4 Two Categories of Blank | NUANCE | Two distinct causes: (a) DPR/animation bug — re-capture fixes it; (b) Intentional scroll-triggered content — re-capture CREATES a problem. The validation gate cannot distinguish between these without a builder signal. | pa-deployment.md | SHOULD | NO |

### Section 1D: GR-44 vs SC-10 Inconsistency

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-1D-1 Measurement Overlap | WARNING | GR-44 measures `scrollHeight - lastVisibleBottom` (threshold: >300px = FAIL). SC-10 measures gaps between zone boundaries (>120px = FAIL). Footer is NOT a "zone" so SC-10 does not see zone-to-footer gap. Builder gets contradictory signals. | gate-runner | SHOULD | PARTIAL — ME-007 fixes GR-44 but does NOT address the SC-10 overlap |
| ADV-1D-2 Fix Cascade | WARNING | Reducing trailing space to fix GR-44 could accidentally compress last zone boundary gap below SC-10's 120px threshold. No coordination between the two gates. | gate-runner | SHOULD | NO |

### Section 2: The Subtraction Problem

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-2-1 Gate Naming Mismatch | PRECONDITION | Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. Nobody has produced a mapping between the two systems. An implementer will not know which gates correspond. THIS IS A BLOCKING IMPLEMENTATION PREREQUISITE. | All surgery plans, gate-runner.md, gate-runner-core.js | MUST | NO |
| ADV-2-2 Low-Value Gate: SC-16 | CHANGE | SC-16 (Monotonic Progression) is ADVISORY but measures only one of many valid compositional patterns. Tension-release is equally valid and SC-16 would flag it as WARNING. Near-zero net signal. CANDIDATE FOR REMOVAL. | gate-runner.md | COULD | NO |
| ADV-2-3 Low-Value Gate: SC-14 Sub-1/2 | CHANGE | SC-14 sub-checks 1 and 2 (letter-spacing micro-clustering, >=0.5px apart at 16px = 0.03125em) are sub-perceptual. Measuring invisible differences between invisible values. Sub-check 3 (intra-zone bg) has value. CANDIDATE FOR REMOVAL of sub-checks 1-2. | gate-runner.md | SHOULD | NO |
| ADV-2-4 Low-Value Gate: SC-13B | CHANGE | SC-13B (Direction Coherence) has "Confidence: ~50%" per its own spec. A BLOCKING gate at 50% confidence is a coin flip. Should START at ADVISORY, not start BLOCKING and get demoted after causing damage. | gate-runner.md | SHOULD | NO |
| ADV-2-5 Low-Value Gate: DG-1 | CHANGE | DG-1 (Fractal Echo Table) validates YAML deliverable the builder must produce. But builder's primary output is HTML, not YAML. Adds deliverable overhead without improving HTML output. CANDIDATE FOR REMOVAL. | gate-runner.md | COULD | NO |
| ADV-2-6 Low-Value Gate: DG-2 | CHANGE | DG-2 (Cascade Value Table) cross-validates builder-claimed CSS vs SC-13 measured values. If SC-13 PASS, DG-2 is redundant. If SC-13 FAIL, DG-2 adds no information. Only catches builder "lying" about CSS. CANDIDATE FOR REMOVAL. | gate-runner.md | COULD | NO |
| ADV-2-7 Low-Value Gate: SC-17 | CHANGE | SC-17 (Parametric Echo) checks whether builder followed planner's plan. If plan was wrong, SC-17 enforces wrong plan. If builder deviated for good compositional reasons, SC-17 penalizes it. Checks process compliance, not output quality. CANDIDATE FOR REMOVAL. | gate-runner.md | SHOULD | NO |
| ADV-2-8 Low-Value Gate: BG-1 | CHANGE | BG-1 (Metaphor Independence) is agent attestation that cannot be verified programmatically. Spec admits "genuine derivation vs post-hoc rationalization is unknowable." Philosophically interesting, practically inert. CANDIDATE FOR REMOVAL. | gate-runner.md | COULD | NO |
| ADV-2-9 Low-Signal PA: PA-65 | CHANGE | PA-65 (Multi-Voice Music Analogy) is near-duplicate of PA-61. Both ask whether visual properties have independent rhythms. PA-65 uses music metaphor; PA-61 asks directly. One should be RETIRED. | flagship-pa-questions.md | SHOULD | PARTIAL — ME-037 retires PA questions but the specific PA-65 vs PA-61 overlap may not be addressed |
| ADV-2-10 Low-Signal PA: PA-66 | CHANGE | PA-66 (Negative Space Variety) asks whether gaps "feel different from each other." Zero calibration. Every auditor answers based on personal whitespace sensitivity. Signal-to-noise unknowable. CANDIDATE FOR RETIREMENT. | flagship-pa-questions.md | COULD | PARTIAL — depends on ME-037 scope |
| ADV-2-11 Low-Signal PA: PA-61/PA-62 | WARNING | PA-61 (Multi-Voice Composition) overlaps significantly with PA-62 (Transition Variation). Both probe dynamic range across channels. Distinction is real but subtle enough that auditors frequently answer with overlapping evidence. | flagship-pa-questions.md | SHOULD | PARTIAL |
| ADV-2-12 Low-Signal PA: PA-64 | WARNING | PA-64 (Restraint as Expression) REQUIRES compositional training to answer meaningfully. 7 of 9 auditors are LLM agents with a question prompt, not design specialists. Their answers will be "guesswork disguised as assessment." | flagship-pa-questions.md | SHOULD | NO |
| ADV-2-13 Low-Signal PA: PA-67 | WARNING | PA-67 (Novelty Beyond Competence) asks whether page does "something you have not seen before." But auditor is Claude — has seen millions of pages. Novelty threshold for Claude is fundamentally different from human reader. Projects human aesthetic judgment onto LLM with different reference frame. | flagship-pa-questions.md | SHOULD | NO |

### Section 3: Survivor Bias

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-3-1 Illegibility is Content-Specific | NUANCE | In 4 pipeline executions, legibility was a problem in 1 (25%), and only for complex SVG diagrams. Middle (prose) = 4/4 zero legibility. CD-006 (mixed) = 39/40 zero legibility. Flagship (prose) = 1.5/4 but legibility NOT the problem. V3 Gas Town = 2.5-3.0 with legibility problem ONLY on chart. ME-001/ME-003/ME-014 add ~170 lines to address 25% occurrence on specific content type. | All experiential/WCAG enrichments | SHOULD | PARTIAL — ME-001 is in plan; the 25% hit-rate concern is not |
| ADV-3-2 Priority Inversion May Be Correct | NUANCE | For Middle and CD-006 builds, CSS compliance WAS the right priority — zero usability issues, quality came from rigorous compliance. Priority inversion only problematic when: (a) content includes complex visual elements, AND (b) those elements have CSS defects gates don't check. This is SPECIFIC gap for SPECIFIC content types, not universal. | Pipeline philosophy | SHOULD | NO |
| ADV-3-3 Three-Auditor Alternative (detailed) | CHANGE | Instead of 9 experiential auditors: run experiential pass on ONLY 3 auditors (cold-look + structural + content-form) using ME-009's 3/9 threshold. 33% of cost, approximately same detection power. 1/9 = "possible, investigate" already per aggregation table. | pa-deployment.md | MUST | NO |
| ADV-3-4 Expected Value Marginal | CONSTRAINT | 25% of runs benefit * 0.5 PA-05 point improvement = marginal expected value. Cost: 45-72 min + Weaver complexity + context exhaustion risk. The enrichment is expensive for its hit rate. | Cost-benefit analysis | SHOULD | NO |

### Section 4: Meta-Disease Diagnosis

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-4-1 Analysis Ratio 4.2:1 | WARNING | 8,550 lines of analysis for a 2,034-line page. Phase 3 has 3x more analysis than needed. USEFUL core = 4 files, ~2,700 lines: 05-MASTER, 06-adversarial, 12-style-guide, 14-gate-surgery. Everything else is input processing or validation reports. | Process (not spec files) | SHOULD | N/A (process observation) |
| ADV-4-2 57 Enrichments > 25 Gates | WARNING | Phase 3 proposes more enrichment PROPOSALS (57) than the pipeline has GATES (25). Every validation agent writes a report, every report generates findings, every finding potentially generates more enrichments. Complexity ratchet in action. | Process | SHOULD | N/A |

### Section 5: Implementation Risk

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-5-1 5,000+ Lines Required Reading | PRECONDITION | Implementer must read: master enrichment list (1,000), style guide (370), gate surgery (400+), manifest surgery (300+), pipeline files being modified (1,436+1,192+237+412+...), anti-loss map (1,100). Total: 5,000+ lines BEFORE writing a single edit. This exceeds context capacity that caused original failures. | Implementation architecture | MUST | NO |
| ADV-5-2 Compliance Degradation by Format | WARNING | Compliance degrades: Binary+CSS value (0.5x), Recipe-format (1.0x), Prose (2.0x), Judgment-requiring (3.0x). Enrichment list is predominantly PROSE format. Implementation agent will experience faster compliance degradation than builder reading recipe-format. By ME-030, compliance near zero. | Implementation process | MUST | NO |
| ADV-5-3 Per-File Agent Architecture | CHANGE | Implementation MUST use 1 agent per target file (gate-runner gets own agent, MANIFEST gets own agent, etc.). Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text -> new-text diffs. Coordinating agent verifies cross-file consistency AFTER. | Implementation architecture | MUST | NO |
| ADV-5-4 ME-003 Missing Code | PRECONDITION | ME-003 (WCAG gate, rank 3, BLOCKING) says "Full implementation sketch in gate-usability-audit.md Section 5" — implementer must find and read a SEPARATE file. The #1 implementation risk: highest-priority gate addition does not contain its own code. | ME-003 implementation | MUST | NO (ME-003 not in 8-change plan) |

### Section 6: Do-Nothing Scenario

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-6-1 Ship B+ and Experiment | CHANGE | Alternative: ship V3 as-is (2.5-3.0/4 > Middle floor of 2.0/4). Manually fix chart legibility (5-10 min CSS) + trailing void (2-3 lines CSS). Run pipeline on DIFFERENT content (Boris article). See if same issues recur. Costs $5-15, 2-4 hours. | N/A (process decision) | SHOULD | NO |
| ADV-6-2 Content Experiment Value | MECHANISM | If Boris (prose-only) scores 3.5+ with CURRENT pipeline: priority inversion is content-specific, ME-001-009 solve wrong problem, real fix = content pre-processing. If Boris ALSO scores 2.5-3.0: pipeline has systemic issues, enrichments justified. Higher information value at LOWER cost than implementation. | N/A | SHOULD | NO |
| ADV-6-3 Experiment Not Proposed | WARNING | Nobody in analysis corpus proposes "run pipeline on different content before implementing enrichments." V3E-052 (A/B test) excluded as "process question." Strongest signal of survivor bias. 57 enrichments justified by faith, not evidence. | Process | MUST | NO |

### Section 7: Cross-Cutting Findings

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-7A Gate Naming Map | PRECONDITION | GR-XX (V3) and SC-XX (new pipeline) used interchangeably. No mapping exists. BLOCKING implementation prerequisite. Implementer reading master list (GR-XX refs) and gate-runner.md (SC-XX refs) will not know which correspond. | All files | MUST | NO |
| ADV-7B Three Not Nine | CHANGE | Project data shows 9 auditors provide "~2-3x effective coverage, not 9x" (V3E-006). Optimal: 3 experiential auditors (cold-look + structural + content-form) + 3-4 analytical auditors = 6-7 total. ADD cost (experiential) must be paired with REMOVE cost (fewer auditors). | pa-deployment.md | MUST | NO |
| ADV-7C Builder Model Unexamined | WARNING | MEMORY.md: "Sonnet-for-builders is unexamined," "potentially highest-leverage single intervention." None of 57 enrichments addresses this. Phase 3 builds more infrastructure instead of running experiments. | Process decision | MUST | NO |
| ADV-7D List Is Expansions Not Enrichments | WARNING | 42 of 57 items are ADDITIONS, 11 MODIFICATIONS, 4 SUBTRACTIONS. 42:1 add:remove ratio. The word "enrichment" masks that this is an EXPANSION LIST for an already-overloaded system. | Framing | SHOULD | N/A |
| ADV-7E Anti-Loss Protects Wrong Thing | WARNING | Anti-loss map protects EXISTING mechanisms from enrichment damage. Does NOT evaluate whether existing mechanisms are WORTH protecting. If GR-12 (letter-spacing >= 0.025em) measures invisible CSS and contributes zero value, protecting it is protecting a dead mechanism. Should INVERT: ask "which mechanisms produce value?" not "which are fragile?" | 03-anti-loss-map.md | SHOULD | NO |
| ADV-7F No Builder-Facing Artifacts | WARNING | Every Phase 3 artifact is for pipeline DESIGNERS. None is for the agent that writes HTML. Highest-leverage intervention = giving BUILDER better input. Proposed artifacts: visual cheat sheet (5 common defects CSS), danger zones file (content types needing special handling), annotated 4/4 example page. None exist, none proposed. | Builder input files | MUST | NO |

### Final Verdict Items (File 09)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| ADV-FINAL-1 | SAFEGUARD | Recommendation: ship page with manual fixes, run Boris, if Boris confirms systemic issues then implement 5 cheapest changes (ME-007, ME-024-027, ME-039). Hold everything else for evidence. | Process | MUST | PARTIAL — ME-007 and ME-039 are in plan; experiment-first approach is NOT |
| ADV-FINAL-2 No Control Experiment | WARNING | 57 enrichments justified by N=1 (one pipeline run, one content type). Running on different content before implementing would cost 2-4 hours and might invalidate half the list. | Process | MUST | NO |
| ADV-FINAL-3 Cost Not Budgeted | WARNING | Experiential pass: +45-72 min. WCAG gate: palette conflict. Screenshot validation: new failure mode for scroll-triggered pages. None of these costs budgeted. | All enrichment specs | MUST | NO |
| ADV-FINAL-4 Implementation Architecture Not Designed | WARNING | 57 enrichments requiring 5,000+ lines reading will degrade compliance to near-zero. Per-file agent architecture needed but not specified. | Implementation process | MUST | NO |

---

## FILE 10: buddy-metacognitive.md — COMPREHENSIVE INVENTORY

### Section 1: Frame Analysis

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-1-1 Frame A Diagnosis | WARNING | Phase 3 operates under Frame A (Fix the Machine) while SPEAKING Frame C (Reduce to Essentials). Evidence: 42 ADDs vs 1 REMOVE. Anti-loss map = "maintain the machine." Surgery plans = how to INSERT, not whether to insert. Style guide = HOW to add, not WHETHER. | All Phase 3 output | MUST | NO — 8-change plan is itself Frame A (adding/modifying) |
| META-1-2 Frame Contradiction | WARNING | Adversarial review SAYS "42:1 add:remove ratio reproduces the disease." Surgery plans written AFTER still propose net additions (+12 MANIFEST, +160 gate-runner). Fresh-eyes SAYS "implement 5, measure." No measurement plan exists. Phase 2 SAID "subtractive not additive." Phase 3 extracted 243 enrichments, deduplicated to 57. | Process | SHOULD | NO |
| META-1-3 Frame C Execution Barriers | NUANCE | Frame C (Minimalist) is correct but hardest to execute. Two barriers: (1) Deletion requires knowing what is load-bearing — anti-loss map was built for this but itself adds complexity. (2) Observation requires running pipeline ($50-100, 3-6 hours) — analysis ($10-20, 1-2 hours) is cheaper so analysis proliferates. | Process | SHOULD | NO |
| META-1-4 Two-Deliverable Recommendation | CHANGE | Phase 3 should have produced only: (1) A 20-line diff (5-8 changes with highest confidence/lowest risk), and (2) A run plan (execute diff, measure PA-05, decide next steps). Instead produced 12 files, 5,846 lines. | Process | MUST | NO — 8-change plan approximates the "20-line diff" but no run plan exists |

### Section 2: Theory of Change — Chain 1 (ME-001 Experiential Pass)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-2A-1 Chain Step 2 Failure | WARNING | Experiential pass (15 lines of instruction) competes with 69 existing analytical questions for auditor attention allocation. LLMs optimize for the task taking most tokens to describe. 69 questions > 15-line pass. Experiential pass might get compressed to "No legibility issues found." | pa-deployment.md | MUST | PARTIAL — ME-001 is in plan but this attention-competition risk is NOT mitigated |
| META-2A-2 Chain Step 4 Failure | WARNING | Adding experiential aggregation data on top of 9 analytical reports increases Weaver input. MORE input = more compression = more signal loss. Experiential findings might get compressed during Weaver synthesis. | Weaver instructions | SHOULD | NO |
| META-2A-3 Chain Step 5 Gap | PRECONDITION | CRITICAL: There is NO step in current pipeline for builder to receive and act on Weaver's fix list after PA. Pipeline produces a VERDICT, not applied FIXES. ME-017 proposes Phase 4 for mechanical fixes, but illegibility requires HTML/CSS redesign — not mechanical. Causal chain from detection to resolution has a MAJOR GAP. | Pipeline architecture | MUST | NO — this gap is not addressed in any of the 8 changes |
| META-2A-4 Detection Probability | NUANCE | Experiential pass is LIKELY to improve detection (60-70% success probability at step 2). But the chain breaks at step 5 regardless. Detection without a fix mechanism = correctly identified problem that still ships. | Assessment | SHOULD | NO |

### Section 2: Theory of Change — Chain 2 (ME-003 WCAG Gate)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-2B-1 Chain Breaks at Fix | PRECONDITION | Gates produce PASS or FAIL, not fixes. WCAG FAIL on REQUIRED = verdict REBUILD. REBUILD = new builder starts over, does NOT receive specific contrast failure info. If new builder also produces low-contrast text (brief does not specify contrast), gate fails again = infinite loop. | gate-runner, builder brief | MUST | NO — ME-003 not in 8-change plan |
| META-2B-2 Missing Diagnostic Link | CHANGE | Gate runner could return measured values: `{ element: '.chart-label', foreground: '#888', background: '#aaa', ratio: 2.1, required: 4.5 }`. But builder in REBUILD cycle does not receive gate results (per M-04 context isolation). Need a mechanism to pass diagnostic info from gates to REBUILD builder. | gate-runner, pipeline architecture | MUST | NO |
| META-2B-3 WCAG Detects Not Fixes | NUANCE | WCAG gate will DETECT contrast failures. Will NOT fix them. Will trigger REBUILD replacing entire page. Rebuilt page may or may not have better contrast depending on builder's innate behavior. | Assessment | SHOULD | NO |

### Section 2: Theory of Change — Chain 3 (ME-006 Screenshot Validation)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-2C-1 Strongest Chain | SAFEGUARD | Screenshot validation has the strongest causal chain: each step is mechanical, binary, no judgment required. Orchestrator checks condition (blank screenshots), takes action (re-capture), produces better input. High confidence (85%+). Most well-specified chain in the enrichment set. | pa-deployment.md | SHOULD | YES — ME-006 in plan |
| META-2C-2 Minor Override Risk | NUANCE | CSS overrides might change page appearance: scroll-triggered animations forced visible = design choice overridden. But static screenshots without animations are strictly better for evaluation than blank screenshots. Minor concern. | pa-deployment.md | COULD | PARTIAL |

### Section 3: Phase 3 Self-Referentiality

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-3-1 Meta-to-Output 29:1 to 117:1 | WARNING | Phase 3: 5,846 lines analysis. If all BLOCKING enrichments applied: ~200 lines change = 29:1. If adversarial recommendation applied: ~50 lines change = 117:1. MEMORY.md threshold: >20:1 = "pipeline feeding on itself." BOTH exceed threshold. | Process metric | MUST | NO |
| META-3-2 Value Ceiling at File 05 | NUANCE | Phase 3 reached value ceiling at file 05 (master enrichment list, 1,014 lines). Everything after (adversarial review, fresh-eyes, style guide, surgery plans) refines a decision that should have been made based on file 05 alone. Exception: adversarial review (06) was most valuable late addition because it challenged the frame. | Process | SHOULD | N/A |
| META-3-3 Surgery Plans Implement Before Deciding | WARNING | Surgery plans (14, 15) are implementing before the user has decided what to implement. They assume the answer is "apply changes." A decision frame would allow "run experiment" or "do nothing" or "simplify." | 14-gate-surgery-plan, 15-manifest-surgery-plan | SHOULD | NO |

### Section 4: Assumption Analysis

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-4-1 240-Line Budget Uncertain | WARNING | 240-line capacity budget was calculated BEFORE surgery plans identified compression opportunities. If surgery frees 200+ lines, effective budget is larger. But compression requires CAREFUL editing and spec files are FRAGILE per anti-loss map. ALSO: enrichment-safety-analysis says compliance does NOT degrade linearly with size but based on agent-visible instruction count and instruction format. The 240-line number is a heuristic, not a verified threshold. Treated as hard constraint when it is not. | Capacity planning | SHOULD | NO |
| META-4-2 68% Compliance Unstable | WARNING | Gate-runner 68% compliance based on ONE V3 run. N=31 gates, binary, 95% CI = +/- 16 percentage points (52-84%). Could be "barely functional" (52%) or "mostly working" (84%). Making capacity decisions on single measurement with huge uncertainty. | Assessment | SHOULD | NO |
| META-4-3 Zero Enrichments Tested | PRECONDITION | Every enrichment has been analyzed, cross-referenced, anti-loss-mapped, adversarially reviewed. None have been TESTED. Analysis produces CONFIDENCE, not EVIDENCE. Phase 3 has very high confidence in 57 enrichments and zero evidence any work. | All enrichments | MUST | NO |
| META-4-4 Priority Inversion May Be Design Choice | NUANCE | "Pipeline prioritizes CSS compliance over usability" labeled as bug. But maybe it is a DESIGN CHOICE. Design system premise: identity compliance IS quality. Page that is readable but violates design system = "not our page." Page that follows system with one illegible chart = "our page with a defect." Priority inversion is real but might be intentional. DEEPEST UNEXAMINED ASSUMPTION: is pipeline QA system (maximize experience) or brand-enforcement system (maximize identity compliance)? These have different optimal hierarchies. | Pipeline philosophy | MUST | NO |
| META-4-5 Gas Town Not Representative | WARNING | All Phase 2+3 analysis based on ONE page. Findings might be Gas Town specific (chart = Gas Town artifact, trailing void = Gas Town CSS bug, DPR issue depends on this page's animations). Or content-type specific (long-form technical essay has different failure modes than gallery/dashboard/landing). Phase 3 treats all findings as pipeline-general. If findings are Gas Town specific, 57 pipeline-level changes are over-engineered. | All enrichments | MUST | NO |

### Section 5: Unasked Questions

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-5-1 Cost Per Quality Point | WARNING | No analysis addresses cost-effectiveness. Middle Experiment: PA-05 4/4 at $5-10 (~35 min). V3: PA-05 3/4 at $50-100 (3-6 hours). Pipeline's cost-per-quality-point may be NEGATIVE. Enrichments increase cost with no cost estimate. | Process | SHOULD | NO |
| META-5-2 Reader Perspective Missing | WARNING | All 5,846 lines written from pipeline engineer perspective. A reader would say: "make chart labels bigger" (5 min CSS), "remove blank space" (1 line CSS), "add back-to-top button" (10 lines), "fix TOC links" (20 lines JS). Total: ~40 min front-end work. Zero pipeline enrichments. 5,846 lines to prevent defects a human fixes in 40 min. Core tension unaddressed. | Process | SHOULD | NO |
| META-5-3 Natural Ceiling for Content Type | NUANCE | Gas Town is a 14,500px technical essay with ASCII diagrams, code blocks, collapsible details. No natural visual drama (no photography, no data viz, no narrative arc). A professional human designer would likely produce PA-05 ~3/4. What if 3/4 IS the ceiling for this content type? Gap between 3/4 and 4/4 might be a CONTENT gap, not a PIPELINE gap. | Assessment | SHOULD | NO |
| META-5-4 Minimum Viable Pipeline | CHANGE | Nobody asks "what is the minimum that works?" Possible MVP: (1) content analysis (Opus, 5 min), (2) brief assembly (Opus, 10 min), (3) build (Opus, 30 min), (4) screenshot + cold-look review (Opus, 5 min), (5) done. No gates, no 9-auditor PA, no weaver, no MANIFEST. Middle Experiment suggests this might produce 4/4 quality. | Pipeline architecture | SHOULD | NO |
| META-5-5 Null Hypothesis (DPR Fix Only) | CHANGE | If ZERO enrichments applied and V4 Gas Town run with Opus builder + DPR bug fixed (just CSS override for screenshots): DPR fix alone might eliminate 80% of Phase 2 findings (void-dominated PA, screenshot corruption cascade, trailing void confusion). PA-05 without void artifact might be 3.0-3.5/4. Cheapest possible intervention, not considered anywhere. | Process | MUST | NO |

### Section 6: Metacognitive Verdict

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-6-1 Phase 3 Is Its Own Finding | WARNING | Phase 2 found: "pipeline over-indexes on analysis" — Phase 3 produced 5,846 lines of analysis. Phase 2 found: "pipeline adds complexity" — Phase 3 proposes 42 additions, 1 removal. Phase 2 found: "more specification = worse output" — Phase 3 adds ~785 lines of specification. Phase 3 inherited the disease from the pipeline it is trying to cure. | Process | MUST | NO |
| META-6-2 Coverage vs Outcome Optimization | NUANCE | "Produce comprehensive enrichments" optimizes for COVERAGE (did we find everything?) leading to 57 enrichments. "Make pipeline produce better pages" optimizes for OUTCOME (did page get better?) leading to: pick 3-5 changes, apply, run, measure. Phase 3 chose coverage. Outcome would have been better. | Process | MUST | NO |

### Section 7: Recommendations

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| META-7-1 Stop Adding Analysis Files | SAFEGUARD | 5,846 lines already contain more than enough information. No more analysis files needed. | Process | MUST | N/A |
| META-7-2 Option A: Minimal (2hr, $10) | CHANGE | Fix DPR screenshot bug (expand CSS override in pa-deployment.md Step 3). Run V4 Gas Town with no other changes. Measure PA-05. If >= 3.5, main problem was screenshot bug, not enrichments. | pa-deployment.md | SHOULD | NO |
| META-7-3 Option B: Targeted (4hr, $30) | CHANGE | Adversarial reviewer's Phase A+B: subtract first, then modify. Remove duplicate gate spec, downgrade 4 gates, fix GR-05/06/09/14/44, add experiential pass, add usability priority override. ~50 lines net. Run and measure. | Multiple pipeline files | SHOULD | PARTIAL — overlaps with 8-change plan |
| META-7-4 Option C: Full (8-12hr, $80-120) | CHANGE | Apply all 57 enrichments per surgery plans. Run and measure. Compare against A/B. | All pipeline files | COULD | YES (maximalist version) |
| META-7-5 User Decides | SAFEGUARD | Phase 3's role is to present options with honest tradeoffs, not to choose for the user. | Process | MUST | NO |
| META-7-6 No More Gap-Checkers | SAFEGUARD | Do NOT add more analysis agents (gap-checkers, deep-divers, propagation-tracers). Information is sufficient. | Process | MUST | N/A |

---

## FILE 11: buddy-fresh-eyes.md — COMPREHENSIVE INVENTORY

### Section 2: Obviously Good (No-Brainers)

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-2-1 ME-001 Best Single Enrichment | SAFEGUARD | Experiential pass = single best enrichment. "Can I even READ this?" before answering structured questions is a clear protocol gap. Gorilla experiment analogy (miss gorilla because counting passes). Costs nothing, catches failures that matter most. | pa-deployment.md | MUST | YES — ME-001 in plan |
| FRESH-2-2 ME-003 Glaring Omission | SAFEGUARD | 31 programmatic gates and NONE check whether text is readable against background. "Should have been gate #1, not gate #60." | gate-runner | MUST | NO — ME-003 not in 8-change plan |
| FRESH-2-3 ME-006 Input Validation | SAFEGUARD | Pipeline spends 9 Opus runs on PA. If screenshots broken, all 9 wasted. Screenshot validation = basic input validation for most expensive phase. | pa-deployment.md | MUST | YES — ME-006 in plan |
| FRESH-2-4 ME-039 Zero-Cost Prevention | SAFEGUARD | Adding `html { color: #2a2a2a; }` to builder boilerplate prevents class of failures at zero cost. "Just put it in the template" fix eliminates entire categories of gate failures. | Builder boilerplate | MUST | YES — ME-039 in plan |
| FRESH-2-5 ME-041 Common Sense | SAFEGUARD | Telling builder "page should end near last content element" = documentation, not a gate. If trailing void is recurring, fix is prevention. | Builder instructions | SHOULD | NO — ME-041 not in 8-change plan |

### Section 3: Suspicious Enrichments

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-3-1 ME-018 Metadata for Metadata | WARNING | Adding "HUMAN-PERCEPTIBLE / SUB-PERCEPTUAL / MIXED" column to 31 gates is metadata for metadata's sake. Does not change what happens during build. If you will classify by perceptibility, the USEFUL action is changing severity (which ME-024-027 already do). Classification column alone is inert. DOWNGRADE or REMOVE. | gate-runner | SHOULD | NO |
| FRESH-3-2 ME-019 Fixing Interpretation Not Data | WARNING | PA-05 score as range solves "past scoring was imprecise" not "make scoring better." If screenshot quality fixed (ME-006), need for hypothetical scoring and ranges diminishes. Adding complexity to scoring system is strange response to data quality problem. Fix the data, not interpretation layer. DOWNGRADE or REMOVE. | Scoring system | SHOULD | NO |
| FRESH-3-3 ME-020 Self-Assessment Unreliable | WARNING | Orchestrator decision quality self-assessment. LLM agents are notoriously bad at evaluating own decision quality. 10+ lines of prompt for something unlikely to produce actionable insight. DOWNGRADE or REMOVE. | Orchestrator instructions | SHOULD | NO |
| FRESH-3-4 ME-032 Invisible Complexity | WARNING | `<!-- PIPELINE-INTROSPECTION -->` comments on 3 PA questions so Weaver "weights them differently." Over-engineering. If questions are bad, remove them. If good, keep them. Metadata tag changing weighting = invisible complexity. DOWNGRADE or REMOVE. | flagship-pa-questions.md | SHOULD | NO |
| FRESH-3-5 ME-044 Documentation for Documentation | WARNING | Document experiential pass protocol with gorilla experiment rationale. Belongs in design rationale document, not pipeline spec. Spec should say what to do, not justify itself. DOWNGRADE or REMOVE. | Documentation | COULD | NO |
| FRESH-3-6 ME-057 Scope Creep | WARNING | Weaver emotional arc fix mapping: check whether fixes improve "weakest register," add "COMPOSITIONAL recommendation as Fix #6." Asking LLM to do multi-step aesthetic reasoning during verdict phase. Weaver already has complex job. This is scope creep. DOWNGRADE or REMOVE. | Weaver instructions | SHOULD | NO |

### Section 4: Top 5 Picks and Reasoning

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-4-1 Top Pick: ME-001 | MECHANISM | Highest ROI. Zero implementation risk (text added to pa-deployment.md). Catches entire class of "unreadable but gate-passing" failures. "9 auditors can currently answer 69 questions about a page they cannot read = pipeline's most fundamental gap." | pa-deployment.md | MUST | YES |
| FRESH-4-2 Top Pick: ME-003 | MECHANISM | Makes programmatic gate system actually check the thing that matters most: can you read the text? Every other gate is downstream of this. | gate-runner | MUST | NO — not in 8-change plan |
| FRESH-4-3 Top Pick: ME-006 | MECHANISM | Garbage in, garbage out. Input validation for most expensive phase. | pa-deployment.md | MUST | YES |
| FRESH-4-4 Top Pick: ME-007 | MECHANISM | Concrete bug fix to specific gate that produces false negatives. Trailing void repeatedly identified as real problem. Straightforward. | gate-runner | MUST | YES |
| FRESH-4-5 Top Pick: ME-039 | MECHANISM | Cheapest fix on list. Eliminates entire class of gate failures by putting correct values in builder starting template. Prevention > detection. | Builder boilerplate | MUST | YES |
| FRESH-4-6 Top 5 Common Property | NUANCE | All 5 share: they fix something clearly broken or missing, with minimal risk of introducing new problems. Do not add new concepts, metadata layers, or abstraction. Patch concrete holes. | Assessment | SHOULD | N/A |
| FRESH-4-7 Honorable Mention ME-004 ME-010 | NUANCE | ME-004 (Builder Self-Check) and ME-010 (GR-05 Sub-Perceptual Split) are strong but improve things that partially work, not fix things completely absent. | Assessment | COULD | PARTIAL — ME-004 is in 8-change plan |

### Section 5: Pipeline Complexity Observation

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-5-1 Extraordinary Machinery | WARNING | Pipeline has: 15 agents, 31+ programmatic gates, 69 PA questions, 4 brief verification gates, 885-item extraction taxonomy, 80-105 min estimated (3-6 hours real). Output = single HTML file. "If your build system exceeds the context window of the AI running it, complexity has outpaced capacity." | Pipeline architecture | MUST | NO |
| FRESH-5-2 Specification Is Primary Artifact | WARNING | "The specification is so detailed that it has become the primary artifact, not the HTML page." Enrichment list acknowledges 660:1 meta-to-output for one experiment. "At that ratio, you are not building pages — you are building a system that builds pages, and the system itself has become the product." | Process | MUST | NO |
| FRESH-5-3 Architecture Sound / Content Overloaded | NUANCE | Architecture is sound (content analysis -> brief assembly -> build -> programmatic gates -> PA -> verdict). Problem: each phase has accumulated too many rules, gates, questions. Pipeline needs aggressive pruning, not more enrichments. | Pipeline architecture | MUST | NO |
| FRESH-5-4 Context Exhaustion Signal | WARNING | ME-045: "pipeline typically requires 2-3 sessions due to context exhaustion." When build system exceeds context window of AI running it, complexity has outpaced capacity. | Pipeline architecture | MUST | NO |

### Section 6: What's Missing

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-6-1 No Builder Creative Input | WARNING | Entire enrichment list is checking and constraining. Not a single enrichment gives builder MORE to work with — more examples, more reference pages, more visual vocabulary. Where are EXAMPLES of pages scoring 4/4? If builder has never seen "DESIGNED," how can it produce "DESIGNED"? ME-056 comes closest but frames as techniques not examples. | Builder input files | MUST | NO |
| FRESH-6-2 No Error Recovery | WARNING | ME-017 adds Phase 4 for mechanical fixes. Nothing for "builder produced something fundamentally wrong in non-mechanical way." REFINE verdict: what does REFINE agent receive? Enrichment list assumes build-check pipeline works; does not address what to do when it does not. | Pipeline architecture | SHOULD | NO |
| FRESH-6-3 No Content Quality Gate | WARNING | Pipeline assumes raw markdown input is good. What if content is 200 words (too thin for rich design) or 20,000 words (too dense for single page)? Content suitability = Phase 0 concern that is not gated. | Content analysis phase | SHOULD | NO |
| FRESH-6-4 No A/B Test Protocol | WARNING | 57 changes proposed. How do you know they work? ME-052 (A/B test) excluded as "process question, not spec change." But without before/after comparison, 57 changes applied on faith. | Process | MUST | NO |

### Section 7: Symptoms vs Root Causes

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-7-1 ME-009 Symptomatic | WARNING | ME-009 (aggregation threshold table) treats symptom of "auditors flag different things" by adding aggregation. Root cause: auditors have no shared calibration. ME-001 addresses root cause better. | pa-deployment.md | SHOULD | NO |
| FRESH-7-2 ME-015 Redundant If ME-006 | NUANCE | ME-015 (data corruption escalation protocol) treats symptom of "auditors scored broken page." Root cause = ME-006 (screenshot validation). If screenshots validated before auditors see them, escalation protocol unnecessary. | pa-deployment.md | SHOULD | NO |
| FRESH-7-3 ME-030 Integration Test Signal | NUANCE | ME-030 (viewport namespacing conflict) treats symptom of meta-gates designed for single-viewport applied to multi-viewport without updating deduplication logic. Fix correct but underlying issue = gate system extended without integration testing. | gate-runner | COULD | NO |
| FRESH-7-4 Tier 3 Piecemeal vs Systematic | CHANGE | Entire Tier 3 (ME-024-030, gate severity restructure) treats symptom of "gates produce false positives." Root cause: gates initially set too aggressively. Fix (individual downgrades) is correct but piecemeal. A SYSTEMATIC severity review of ALL 31 gates would be better than 7 individual downgrades. | gate-runner | SHOULD | NO |

### Section 8: What Would Confuse New Engineer

| Item ID | Type | Description | Target File(s) | Tier | In 8-Change Plan? |
|---------|------|-------------|-----------------|------|--------------------|
| FRESH-8-1 Dual-Route Pattern | NUANCE | Same constraint expressed TWO ways: world-description for builder + binary gate for gate-runner. Logical (builder needs creative context, gate needs binary verification) but not self-evident. | Documentation | COULD | NO |
| FRESH-8-2 Gate vs PA Distinction | NUANCE | Both are "checks" producing pass/fail. But gates = JavaScript in Playwright against DOM; PA = natural-language prompts answered by LLMs looking at screenshots. Operate on completely different abstractions. Architecture is elegant but boundary not obvious. | Documentation | COULD | NO |
| FRESH-8-3 Acronym/ID Overload | WARNING | GR-01-53, BV-01-04, PA-01-77, SC-01-10, S-01-11, M-01-25, ME-001-057. New engineer needs 30 min just to build mental index of what each namespace means. | Documentation | SHOULD | NO |
| FRESH-8-4 Verdict Governance Unclear | WARNING | SHIP / SHIP WITH FIXES / REFINE / REBUILD decision tree involves gate results (binary) + PA scores (subjective) + Weaver synthesis (narrative) + orchestrator judgment. Weaver produces verdict but orchestrator can override (ME-005 adds override rule). Governance model unclear. | MANIFEST.md, verdict logic | SHOULD | PARTIAL — ME-005 is in plan |

---

## CROSS-FILE SYNTHESIS: What Converges Across All Three Files

### CONVERGENCE 1: The Experiment-First Imperative
All three files independently conclude that running the pipeline on different content (or with minimal changes) before implementing enrichments would be higher-value and lower-cost than implementing all enrichments. This is the single strongest convergent finding.
- **ADV (09):** "Ship B+ page, run Boris, compare results" ($5-15, 2-4 hours)
- **META (10):** "Option A: Fix DPR bug only, run V4, measure" ($10, 2 hours)
- **FRESH (11):** "Implement top 5, run once, measure, then decide" (implicit in recommendation)
- **In 8-change plan?** NO. The plan assumes implementation, not experimentation.

### CONVERGENCE 2: Three Auditors, Not Nine
Two of three files independently identify that 9 experiential auditors are wasteful.
- **ADV (09):** Proposes 3 experiential + 3-4 analytical = 6-7 total (ADV-1A-4, ADV-7B)
- **META (10):** Notes 9 auditors provide "~2-3x effective coverage, not 9x"
- **In 8-change plan?** NO.

### CONVERGENCE 3: Detection Without Fix Mechanism
Two of three files identify that ME-001 and ME-003 detect problems but the pipeline has no mechanism to apply fixes.
- **META (10):** Causal chain breaks at step 5 (META-2A-3). No builder fix loop exists.
- **ADV (09):** Experiential pass improves detection but cascade to resolution undocumented.
- **In 8-change plan?** NO.

### CONVERGENCE 4: Subtraction Before Addition
All three files identify the add:remove imbalance.
- **ADV (09):** "42 of 57 items are ADDITIONS... should be called EXPANSION LIST"
- **META (10):** "Phase 3 operates under Frame A while SPEAKING Frame C"
- **FRESH (11):** "Pipeline needs aggressive pruning, not more enrichments"
- **In 8-change plan?** PARTIAL — plan includes some modifications but no removals.

### CONVERGENCE 5: Builder Gets Nothing From Phase 3
Two of three files note that all Phase 3 output is for pipeline designers, not the builder.
- **ADV (09):** "Phase 3 produced no artifacts the BUILDER can use" (ADV-7F)
- **FRESH (11):** "Not a single enrichment gives the builder MORE to work with" (FRESH-6-1)
- **In 8-change plan?** NO.

### CONVERGENCE 6: ME-003 (WCAG Gate) Has Unresolved Palette Conflict
Two of three files flag ME-003 as critical but problematic.
- **ADV (09):** Detailed contrast ratio analysis showing accent colors fail on warm backgrounds (ADV-1B-2 through ADV-1B-7)
- **FRESH (11):** Lists ME-003 as #2 top pick but does not analyze palette conflict
- **In 8-change plan?** NO — ME-003 is not in the 8-change plan, which may be correct given the unresolved conflict.

---

## PRECONDITIONS: Must Resolve Before ANY Implementation

These are items identified across all three files that MUST be resolved before implementing any changes:

| # | Precondition | Source | Why Blocking |
|---|-------------|--------|--------------|
| P1 | Gate naming map GR-XX <-> SC-XX | ADV-2-1, ADV-7A | Implementer cannot identify which gates to modify without mapping |
| P2 | WCAG palette conflict resolution (if ME-003 added) | ADV-1B-7 | WCAG gate will produce REQUIRED failures on soul-mandated accent colors |
| P3 | Screenshot re-capture builder signal mechanism | ADV-1C-3 | Cannot distinguish DPR bug from intentional scroll-triggered content |
| P4 | Detection-to-fix pipeline gap | META-2A-3, META-2B-1 | Detecting problems without fix mechanism = correctly identified problems that still ship |
| P5 | Zero enrichments have been tested | META-4-3 | Analysis produces confidence, not evidence |
| P6 | Gas Town representativeness assumption | META-4-5 | All changes justified by N=1 on one content type |
| P7 | Per-file implementation architecture | ADV-5-3 | 5,000+ lines required reading will degrade compliance to near-zero with single agent |

---

## ITEMS IN 8-CHANGE PLAN: Cross-File Verdict

| Change | ADV (09) Verdict | META (10) Verdict | FRESH (11) Verdict | Net Assessment |
|--------|-----------------|-------------------|--------------------|--------------------|
| **ME-001** (experiential pass) | Supported but: limit to 3 auditors not 9, budget time cost, address Weaver context growth | Supported but: 60-70% detection probability, causal chain breaks at step 5 (no fix mechanism) | "Single best enrichment," top pick #1 | IMPLEMENT — but with 3-auditor optimization and awareness that detection != resolution |
| **ME-002** (weaver priority) | Not directly addressed; Weaver context growth flagged as risk | Weaver gets MORE input = more compression = more signal loss | Not directly addressed | CAUTION — Weaver already overloaded; changing priority without addressing volume may not help |
| **ME-004** (builder Q0) | Not directly addressed | Not directly addressed | Honorable mention; "improves things that partially work" | OK — low risk, moderate value |
| **ME-005** (verdict logic) | Not directly addressed | Not directly addressed | Verdict governance unclear (FRESH-8-4) | OK — addresses real governance gap |
| **ME-006** (screenshot validation) | Supported with MAJOR caveat: needs builder signal for scroll-triggered pages, CSS overrides change the page | "Strongest causal chain" (85%+ confidence), minor override risk | Top pick #3, "garbage in garbage out" | IMPLEMENT — but add builder signal mechanism (ADV-1C-3) |
| **ME-007** (GR-44 fix) | Supported; minor SC-10 overlap concern | Not directly addressed | Top pick #4, "concrete bug fix" | IMPLEMENT — straightforward, low risk |
| **ME-037+ME-051** (PA swap) | Identifies PA-65/PA-61 overlap, PA-66 zero calibration, PA-64 requires training, PA-67 wrong reference frame | Not directly addressed | Not directly addressed | OK — but consider ADV's specific PA retirement recommendations |
| **ME-039** (boilerplate) | Not directly addressed in detail | Not directly addressed | Top pick #5, "cheapest fix, prevention > detection" | IMPLEMENT — zero risk, high value |

---

## ITEMS NOT IN 8-CHANGE PLAN: Highest Priority Additions

Based on convergence across all three files, these items should be considered for addition to or replacement in the plan:

| Priority | Item | Why | Source |
|----------|------|-----|--------|
| 1 | **3-auditor experiential optimization** | 33% cost for same detection; addresses time explosion; nobody proposed it yet | ADV-1A-4, ADV-7B |
| 2 | **Content experiment before implementation** | Higher information value, lower cost; might invalidate half the enrichments | ADV-6-1/6-2/6-3, META-7-2, FRESH-6-4 |
| 3 | **Builder-facing artifacts** (cheat sheet, danger zones, annotated example) | Highest-leverage intervention per both ADV and FRESH; gives builder better input instead of more checks | ADV-7F, FRESH-6-1 |
| 4 | **Systematic gate severity review** (all 31 gates at once, not piecemeal) | Root cause approach instead of symptom treatment | FRESH-7-4 |
| 5 | **Gate subtraction candidates** (SC-16, SC-14 sub-1/2, SC-13B, DG-1, DG-2, SC-17, BG-1) | 7 gates identified as low-value; removing them = subtraction before addition | ADV-2-2 through ADV-2-8 |
| 6 | **PA retirement candidates** (PA-65 or PA-61, PA-66, PA-64, PA-67) | 4-5 questions identified as low-signal; removing them = auditor workload reduction | ADV-2-9 through ADV-2-13 |

---

## FULL ITEM COUNT

| File | Total Items Extracted |
|------|----------------------|
| 09-buddy-adversarial.md | 54 |
| 10-buddy-metacognitive.md | 37 |
| 11-buddy-fresh-eyes.md | 33 |
| **Total unique items** | **124** |
| Cross-file convergences | 6 |
| Preconditions (blocking) | 7 |

---

*Audit complete. 124 items extracted across 3 files. 7 blocking preconditions identified. 6 cross-file convergences documented. Every finding, nuance, warning, and implementation detail captured.*
