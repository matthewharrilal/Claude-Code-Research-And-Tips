# Experiment Survey: What Was Tried and What Happened

**Date:** 2026-02-22
**Surveyor:** experiments-surveyor (Opus 4.6)
**Scope:** Every experiment run against the design system, from early explorations through the final /build-page pipeline comparison

---

## The Experimental Arc at a Glance

| # | Experiment | Date | Agents | PA-05 Score | Verdict | Key Learning |
|---|-----------|------|--------|-------------|---------|--------------|
| 1 | Tension Pipeline Test | ~Feb 13 | ~15 | N/A (richness metric) | Pipeline predicts RICHNESS not QUALITY | Richness and quality are not the same axis |
| 2 | CD Build + Audit (CD-001 through CD-006) | ~Feb 12 | ~6 builders + auditors | 39/40 (CD-006) | CONDITIONAL PASS (93.3%) | CD-006 is CEILING tier, not Flagship; 59/60 soul compliance |
| 3 | Phase D Validation (5 pages) | Feb 14-15 | 14 agents | N/A (compliance metric) | CONDITIONAL PASS | Container width is THE failure mode (4/5 pages violated); Variant B best at 18/19 |
| 4 | Middle-Tier Experiment | Feb 16 | 8 agents | **4/4 (DESIGNED)** | **SUCCESS** | Recipe > checklist; vocabulary fluency confirmed; flat file-bus topology works |
| 5 | Ceiling Experiment | Feb 16 | 12 agents | 3/4 initially, downgraded to **1.5/4** | SUCCESS WITH CRITICAL DEFECT | Metaphor-driven architecture works, but container violation + catastrophic whitespace void |
| 6 | Flagship Experiment | Feb 17 | 19 agents | **1.5/4** | **FAILED ON RICHNESS** | Guardrail factory (7.9:1 ratio); 75-line builder visibility cap; inverted quality routing |
| 7 | Flagship Remediation | Feb 18 | 16+ agents | **2.5/4** | SHIP WITH FIXES | +1.0 PA-05 improvement; CSS remediation works; projected 3.0/4 after fixes |
| 8 | Gas Town Page A (Master Prompt) | Feb 20 | Fat Core (1 builder) | **2.75/4** | High Middle / Low Ceiling | Higher compositional ambition; 2 catastrophic defects (post-footer void, binary bg) |
| 9 | Gas Town Page B (/build-page) | Feb 20 | Pipeline (multi-agent) | **3.5/4** | **Solid Ceiling** | Zero catastrophic defects; recipe-based pipeline raises floor, may cap ceiling |

---

## Experiment 1: Tension Pipeline Test (~Feb 13)

**Goal:** Test whether the tension-composition pipeline can predict page quality.

**What was tried:** 15 HTML layouts generated from 3 base content pieces x 5 metaphors each (Playbook, Boris, Gas Town content sets). Each layout was built with a different metaphor.

**Inputs:** 3 source content files, 5 metaphor derivations per content.

**Outputs:** 15 HTML layouts in `design-system/tension-test/`.

**Result:** The pipeline accurately predicted RICHNESS (number of mechanisms, visual variety) but did NOT predict QUALITY (perceptual coherence, readability). Top picks per content: Playbook = Elevation Map, Boris = Geological Core, Gas Town = Building Floorplan.

**Key learning:** Richness and quality are orthogonal. A page can have 15 mechanisms and still look flat if those mechanisms are not perceptually coordinated. This is the earliest appearance of the richness-vs-quality tension that dominated all subsequent experiments.

---

## Experiment 2: CD Build + Audit (CD-001 through CD-006, ~Feb 12)

**Goal:** Build 6 combination-dimension explorations that prove multi-pattern interaction.

**What was tried:** 6 HTML pages exploring different combination grammars: CD-001 (reasoning inside code), CD-002 (task containing decision), CD-003 (file tree with callouts), CD-004 (essence as background), CD-005 (multi-axis transition), CD-006 (pilot migration).

**Inputs:** Combination theory from R5 research (39 findings), density/organizational/axis patterns from prior stages.

**Outputs:** 6 HTML files in `design-system/validated-explorations/combination/`. CD-006 scored 39/40 on a custom rubric. Average across all 6: 37.3/40.

**Scorecard (per page):**

| Page | Soul | Research | Density | Combination | Total |
|------|------|----------|---------|-------------|-------|
| CD-001 | 10 | 10 | 10 | 9 | **39** |
| CD-002 | 10 | 10 | 8 | 9 | **37** |
| CD-003 | 10 | 9 | 9 | 10 | **38** |
| CD-004 | 10 | 9 | 9 | 10 | **38** |
| CD-005 | 10 | 8 | 8 | 7 | **33** |
| CD-006 | 10 | 10 | 10 | 9 | **39** |

**Key learning:** CD-006 became the reference standard for quality. Later reclassified as CEILING tier (not Flagship) -- it has 41 mechanisms, 5/5 scales, but no pervading metaphor, only local multi-coherence. Soul compliance 59/60 (one minor opacity violation). CD-005 was the only DO-NOT-SHIP page (bento grid horizontal overflow at 768px).

**Critical context:** CD-006 was built by Opus. This single data point became the basis for the later "Sonnet-for-builders is unexamined" concern.

---

## Experiment 3: Phase D Validation (Feb 14-15)

**Goal:** Validate the compositional-core extraction by building 5 pages from it: 1 Track 1 (assembly from components) and 4 Track 2 variants (compositional derivation with different prompting strategies).

**What was tried:**
- **Track 1 (Assembly):** Build from components.css directly
- **Variant A (Skill-Only):** Tension-composition skill with no special permissions
- **Variant B (Weak Permission):** TC skill with explicit "you may deviate" language
- **Variant C (Anti-Gravity):** TC skill with divergence mandate and anti-gravity mechanisms
- **Variant D (Library-First):** Components loaded before TC skill

14 agents across 3 waves, ~2 hours wall time.

**Inputs:** 6-layer compositional core (43 files), prohibition rules, tokens.css, TC skill.

**Outputs:** 5 HTML pages (randomized as page-A through page-E), 54KB FINAL-REPORT.md in `ephemeral/phase-d-execution/`.

**Results:**
- Track 1: INSTANT FAIL (5 critical violations: pure white header, zero padding, excessive CPL, off-palette colors, wrong spacing)
- Variant A: CONDITIONAL FAIL (excessive CPL)
- **Variant B: Best performer -- 18/19 programmatic, 4/5 novelty**
- Variant C: FAIL (anti-gravity mechanisms failed, 85% convergence to library)
- Variant D: FAIL (container width violation)

**Key learning:** Container width (940-960px) is THE primary failure mode -- 4 of 5 pages violated it. Weak permission framing had ZERO behavioral effect. Anti-gravity mechanisms cannot prevent >60% convergence to library patterns. Prose-only content limited component testing to 22-44% (vs 67% target). The "always-load" protocol failure caused Track 1's instant fail.

---

## Experiment 4: Middle-Tier Experiment (Feb 16) -- SUCCESS

**Goal:** Test whether a simplified prompt with recipe-style instructions (not a checklist) can produce a "DESIGNED" page at Middle tier.

**What was tried:** 8 agents in a flat file-bus topology. Content: selected technical prose. Builder received a ~100-line RECIPE with sequenced steps, specific CSS values, "Read/Select/Deploy/Assess" verbs. No inter-agent messaging (zero SendMessage). Total execution: ~35 minutes.

**Inputs:** Compositional core files, recipe-style build plan, content selection.

**Outputs:** 7 files in `ephemeral/middle-tier-experiment/`: 1 HTML page (28KB), build plan, programmatic audit, perceptual audit, comparison report, novelty assessment, verdict.

**Results:**
- **PA-05: 4/4 (DESIGNED)** -- all four sub-criteria met at both 1440px and 768px
- **Novelty: 3/3 (STRONGLY NOVEL)** -- structural fingerprint, CSS value overlap ~20%, unique mechanism combinations
- Container: 960px (compliant)
- Soul: 7/7 (perfect)
- Mechanisms: 12 deployed across all 5 categories
- Known defects: CPL 82 (marginal, +2 over 80 limit), token compliance 66.5% (vs 80% target), missing footer

**Key learning:** This was the first clean SUCCESS. The recipe format (sequenced steps with specific CSS values) produced dramatically better results than the checklist format used in prior experiments. 12 mechanisms emerged organically -- the "sample 2-4 mechanisms" instruction was removed. The flat file-bus topology with zero inter-agent messaging produced B+ quality. The "recipe vs checklist" insight became the single most important process finding.

---

## Experiment 5: Ceiling Experiment (Feb 16) -- SUCCESS WITH CRITICAL DEFECT

**Goal:** Push quality from Middle to Ceiling tier using metaphor-driven architecture, more mechanisms, and structured composition.

**What was tried:** 12 agents. Content: "Remote Mac Control" system documentation. Metaphor: "Secure Facility / Controlled-Access Building." Builder deployed 14 mechanisms. 5 HTML variant pages generated (page-A through page-Z), then ceiling-page.html selected and refined.

**Inputs:** 1,004-line master execution prompt (assembled by 16-agent team), enriched skills (TC +295 lines, PA +38 lines), 3 new protocols (inter-agent communication, blind novelty, dual PA).

**Outputs:** 8 deliverable files in `ephemeral/ceiling-experiment/`: 5 variant pages, ceiling-page.html (57KB before fixes, 67KB after), 7 verdict/audit documents.

**Results (initial 2-PA audit):**
- PA-05: 3/4 (pass 3 of 4 sub-criteria; proportionate failed due to heavy header)
- Novelty: 9/9 (exceptional -- all signals show original composition)
- Soul: 8/8 (perfect)
- Mechanisms: 14 deployed
- Container: CSS specified 960px but outer container overrode to 2160px (BLOCKING)

**Results (Mode 4 Standalone PA -- 9 auditors, 102 screenshots):**
- PA-05: **DOWNGRADED to 1.5/4** -- Mode 4 PA revealed catastrophic whitespace void that 2-PA audit MISSED
- 9/9 auditors flagged 70-80% of scroll as blank cream
- Container width contradicted (likely 960px, not 2160px -- measurement artifact)
- Metaphor downgraded from "structural" to "announced" (40% of metaphor elements only visible with labels)
- Verdict: **DO NOT SHIP** (downgraded from "ship after fix")

**Key learning:** This experiment produced two paradigm-shifting findings:

1. **Mode 4 (9 independent auditors) catches what 2-PA misses.** The whitespace void was THE dominant failure, flagged by 9/9 Mode 4 auditors, but completely missed by the prior 2-person audit. Breadth of perspectives is the key value of Mode 4.

2. **Programmatic verification does not equal perceptual verification.** Gate 4 confirmed 6 CSS channels with 4+ shifts per boundary. Gate 5 (fresh eyes) found them imperceptible. This led to establishing minimum perceptual deltas: backgrounds >= 15 RGB points, letter-spacing >= 0.5px, padding >= 24px.

---

## Experiment 6: Flagship Experiment (Feb 17) -- FAILED ON RICHNESS

**Goal:** Build the highest-quality page possible using the enriched pipeline, targeting Flagship tier (PA-05 >= 3.5, Tier 5 >= 6/8, zero soul violations, metaphor STRUCTURAL).

**What was tried:** 19 agents across 5 passes and 6 gates. Content: RESEARCH-SYNTHESIS (design system research). Metaphor: "Assay Laboratory" (progressive refinement of 337 findings down to 5 to 1). Builder deployed 14 mechanisms across 12 sections.

**Inputs:** Enriched master execution prompt (530 lines, 71 rule IDs all binary), enriched skills, 9-auditor PA deployment protocol, programmatic gate runner.

**Outputs:** Multiple deliverable files in `ephemeral/flagship-experiment/`: content inventory, adapted content, metaphor derivation, build plan, skeleton variants, mechanism pass, metaphor pass, intentionality pass (07-intentionality.html -- 2,034 lines, 86KB), spatial gate runner, review notes.

**Results:**
- All 6 programmatic gates: PASS
- **PA-05: 1.5/4 -- FAILED**
- Richness score: 34/91 vs CD-006 CEILING reference at 80/91
- Zero borders rendered in final output
- Uniform typography (all 16px/400) across all sections
- Background color deltas: 1-8 RGB points (imperceptible)
- 6 whitespace voids: 210-276px each

**Key learning (from 16-agent dissection + 9-agent retrospective):**

1. **Guardrail factory:** The 963-line master prompt had a 7.9:1 guardrail-to-playbook ratio. Builders were told what NOT to do but almost never what TO DO. 91.2% compression loss from research to prompt.

2. **75-line builder visibility cap:** Builders only saw 13.4% of the prompt -- all guardrails + spatial rules. Zero compositional intelligence reached the CSS-writing agent.

3. **Inverted quality routing:** Best reference files (mechanism catalog, scale-channel invocation) were routed to the PLANNER who does not write CSS. The BUILDER got tokens + prohibitions + a missing file.

4. **Recipe vs Checklist:** Middle builder got a 100-line RECIPE (sequenced steps). Flagship builder got a 71-line CHECKLIST (all constraints). Recipe = DESIGNED; Checklist = FLAT.

5. **CSS budget misallocation:** Flagship spent 22% of CSS (227 lines) on imperceptible micro-typography (letter-spacing 0.001-0.01em). CD-006 spent those lines on 11 components, 5 grids, 3 breakpoints.

6. **S-09 stacking loophole:** Individual spacing values pass the threshold (<=96px) but stacked values at section boundaries create 210-276px voids.

---

## Experiment 7: Flagship Remediation (Feb 18) -- SHIP WITH FIXES

**Goal:** Remediate the failed flagship page using CSS + targeted HTML changes (Approach B from 12-agent remediation audit).

**What was tried:** 16+ agents. Phase 0: deallocation (216 lines of sub-perceptual CSS removed). Phase 1: HTML restructuring (47 changes, component library adoption 3/26 to 10/26, 3 grid layouts, ARIA/accessibility). Phases 2-6: CSS recipe. Phase 7: accessibility (0/8 to 8/8, 180 CSS lines). Phase 8: multi-coherence verification + S-09 stacking fix.

Builder (Opus): 201 lines deleted, 311 added, 57 HTML modifications, 3/3 BLOCKING preflight issues fixed. Mode 4 PA: 36 screenshots, 9 auditors, 48 questions.

**Inputs:** Enhanced remediation spec (1,025 lines, 9 phases), lock sheet, original 07-intentionality.html.

**Outputs:** 24 deliverable files in `ephemeral/flagship-remediation/`: builder changelog, FINAL-VERDICT, review screenshots, wave1 prep, verification reports.

**Results:**
- **PA-05: 2.5/4** (up from 1.5/4 -- +1.0 improvement)
- Soul: 20 PASS, 2 WARNING, 0 FAIL
- Accessibility: full WCAG 2.1 AA (skip link, 12 aria-labels, landmarks, reduced motion)
- 3 BLOCKING fixes remaining: structural border selectors, S9-S12 typography (15px not applying), table class mismatch
- Projected PA-05 after fixes: 3.0-3.2/4 (COMPOSED)

**Comparison to pre-remediation:**

| Dimension | Before (1.5/4) | After (2.5/4) |
|-----------|----------------|----------------|
| Whitespace voids | 210-276px | 33-175px |
| Typography | Uniform 16px/400 everywhere | S1 distinct (17px/1.85); S4-12 still ~uniform |
| Backgrounds | 1-8 RGB deltas | 2-13 RGB range |
| Borders | Zero | 6 CSS rules (rendering unconfirmed) |
| Callout system | Minimal | 9 callouts, 4 variants, colored borders |
| Components | Few | 9 callouts, 9 tables, 3 grids, 12 section indicators |
| Sub-perceptual CSS | 201 pathological lines | All deleted |
| Accessibility | Unknown | Full WCAG 2.1 AA |

**Key learning:** CSS remediation of a failed page is viable and can produce ~1.0 PA-05 improvement, but it cannot overcome fundamental structural problems in the original build plan. The recipe-based remediation spec worked better than the original checklist-based build prompt. Opus as builder produced better results than Sonnet.

---

## Experiment 8: Gas Town Page A -- Master Execution Prompt (Feb 20)

**Goal:** Build the first page using the master execution prompt assembled by 34-agent team (542 lines, Fat Core architecture).

**What was tried:** Single Fat Core builder (Opus) with conventions-brief-only input. Content: Steve Yegge's "Gas Town" essay. Metaphor: not specified in master prompt -- self-derived by builder.

**Inputs:** Master execution prompt (542 lines), conventions brief, content file.

**Outputs:** Files in `ephemeral/pages/yegge-gas-town/`: output.html (68KB), build log, cascade value table, gate results, lock sheet, pipeline audit, 9 PA auditor reports.

**Results:**
- **PA-05: 2.75/4** (High Middle / Low Ceiling boundary)
- Multi-coherence average: 5.3 channels/boundary (higher than Page B)
- 17 distinct border configurations, 10 letter-spacing values, 3 grid layouts
- 5 independent zone voices
- Catastrophic defects: post-footer void (~376px), binary background vocabulary (only 2 actual bg values with 3 RGB delta between them)
- Page height: 15,936px (17.7 viewports) -- excessively tall

**Key learning:** The monolithic 542-line prompt allowed the builder to self-derive ambitious compositional strategies (5-channel shifts, 17 border configs, wide letter-spacing arc) that no recipe specified. But the lack of recipe-level guidance also allowed catastrophic spatial failures. Higher compositional ambition does not equal higher quality when defects are present.

---

## Experiment 9: Gas Town Page B -- /build-page Skill Pipeline (Feb 20)

**Goal:** Build the same content (Steve Yegge "Gas Town") using the new /build-page skill pipeline with TC integration, expanded gate runner, and enriched conventions brief.

**What was tried:** Full pipeline orchestration: TC skill (Phases 0-4), Opus builder with TC brief + conventions brief, 25-gate programmatic verification, Mode 4 PA (9 auditors + Tier 5 questions), fix cycle protocol.

**Inputs:** /build-page skill (408 lines), conventions brief (403 lines), gate runner (992 lines, 25 gates), TC brief with per-boundary CSS specifications, content file.

**Outputs:** Files in `ephemeral/pages/gas-town-steve-yegge/`: output.html (51KB), build log, cascade value table, gate results, lock sheet, 9 PA auditor reports + weaver synthesis.

**Results:**
- **PA-05: 3.5/4** (Solid Ceiling tier -- COMPOSED)
- Multi-coherence average: 4.0 channels/boundary (lower than Page A)
- 9 border configurations, 5 letter-spacing values, 1 grid layout
- Zero catastrophic defects
- Metaphor: "Field Dispatch / Command Post" -- pervading, structural, immediately apparent
- Tier 5 score: 6.5/9 (meets Flagship PA-05 threshold but not Flagship character)
- Page height: 7,751px (8.6 viewports) -- appropriate

---

## The Head-to-Head Comparison (32 Reports, 30+ Agents)

The most thorough experiment analysis was the comparison of Pages A and B, documented in `ephemeral/pages/_comparison-screenshots/`. 32 reports from 30+ agents, ~400,000 words of analysis, synthesized into a master verdict (`21-REVISED-MASTER-SYNTHESIS.md`, 111KB).

### Page B wins on every human-perceived dimension:

| Dimension | Page B Wins |
|-----------|-------------|
| CSS dimensions | 18 of 24 |
| Visual dimensions | 10 of 10 |
| Compositional dimensions | 6 of 6 |
| Process dimensions | 7 of 8 |
| Personality tests | All 7 |
| PA-05 tier | 3.5 vs 2.75 (full tier difference) |

### But Page A wins on raw compositional intelligence:

| Metric | Page A | Page B |
|--------|--------|--------|
| Channels/boundary (avg) | **5.3** | 4.0 |
| Distinct border configs | **17** | 9 |
| Letter-spacing values | **10** | 5 |
| Grid layouts | **3** | 1 |

### The 19 fixes between pipelines, ranked by impact:

| Fix | Estimated PA-05 Impact |
|-----|----------------------|
| Self-challenge fix cycle | +0.30 |
| Boundary CSS table in conventions brief | +0.25 |
| SC-14 sub-perceptual gate (BLOCKING) | +0.15 |
| Expanded gate runner (17 to 25 gates) | +0.10 |
| Threshold confidence tiers | +0.05 |
| **Top 3 account for ~82% of improvement** | |

---

## The Pattern: What the Trajectory Reveals

### 1. The Scoring Arc

```
CD-006 (reference)     39/40 (CEILING, built by Opus, with messaging)
Middle Experiment       4/4 PA-05 (DESIGNED, recipe, no messaging)
Ceiling Experiment      1.5/4 PA-05 (DOWNGRADED, whitespace catastrophe)
Flagship Experiment     1.5/4 PA-05 (FAILED, checklist format, guardrail factory)
Flagship Remediation    2.5/4 PA-05 (CSS fix, Opus builder, recipe spec)
Gas Town Page A         2.75/4 PA-05 (monolithic prompt, high ambition, 2 defects)
Gas Town Page B         3.5/4 PA-05 (pipeline recipe, controlled composition, zero defects)
```

The trajectory is NOT monotonically improving. It oscillates between ambition and control. The highest compositional ambition (Ceiling experiment, Page A) produces the worst scores because ambition without spatial discipline creates catastrophic defects. The highest scores come from controlled composition (Middle experiment, Page B) where recipe-level guidance prevents defects.

### 2. The Three Root Causes of Failure

Every failed experiment shares exactly one of three root causes:

1. **Container/spatial violation:** Container width wrong, whitespace voids, excessive page height. (Phase D: 4/5 pages, Ceiling: whitespace catastrophe, Flagship: 6 voids, Page A: post-footer void)

2. **Imperceptible CSS:** Technically present but below human perception thresholds. (Flagship: 1-8 RGB backgrounds, 0.001em letter-spacing; Page A: 3 RGB delta binary backgrounds)

3. **Information loss from prompt to builder:** Research compressed 50:1 into behavioral constraints, builders see 13.4% of prompt, compositional intelligence never reaches CSS-writing agents. (Flagship: guardrail factory 7.9:1; Phase D: "sample 2-4" instruction)

### 3. The Three Factors That Predict Success

1. **Recipe format** (sequenced steps with specific CSS values) >> Checklist format (constraints to verify). Middle experiment (recipe) = 4/4. Flagship (checklist) = 1.5/4.

2. **Perceptual thresholds enforced programmatically.** SC-14 (sub-perceptual prevention), >= 15 RGB background deltas, >= 0.025em letter-spacing minimums. Page B (thresholds enforced) = 3.5/4. Page A (thresholds not enforced) = 2.75/4 with binary backgrounds.

3. **Defect prevention over compositional ambition.** Zero catastrophic defects (Page B) produces a better page than 17 border configurations with 2 catastrophic defects (Page A). The human test measures what breaks, not what shines.

### 4. The Ceiling Paradox

The recipe-based pipeline demonstrably raises the floor (zero defects, consistent quality) but may cap the ceiling (constrains compositional imagination). Evidence:

- Page A (no recipe) had 5 independent zone voices, 5.3-channel multi-coherence, 17 border configs
- Page B (with recipe) had 4 zones in choir voice, 4.0-channel multi-coherence, 9 border configs
- Page A's compositional intelligence was higher, but its spatial execution was worse
- Neither page reaches Flagship

The implication: Flagship may require a hybrid approach -- recipe for floor requirements (spatial, accessibility, thresholds) and freedom markers for ceiling requirements (multi-coherence patterns, zone voice independence, compositional discovery).

### 5. The N Problem

The entire evidence base rests on extremely small sample sizes:
- N=1 per tier (1 Middle experiment, 1 Ceiling experiment, 1 Flagship experiment)
- N=2 pipeline-built pages total (Pages A and B)
- The content differs between experiments (which confounds the comparison)
- The builder model differs (CD-006 was Opus; Flagship builders were Sonnet; Gas Town builders were both Opus)

The Fat Core Capability Team (25 agents, 29 reports) was explicit: "Fat Core PROBABLY YES for Middle (65-75%), UNKNOWN for Flagship (35-50%). Unanimous: RUN EXPERIMENTS before building more infrastructure."

---

## Experiment Inventory: Full File Locations

| Experiment | Primary Directory | Key Deliverable |
|------------|------------------|-----------------|
| Tension Pipeline Test | `design-system/tension-test/` | 15 HTML layouts |
| CD Build + Audit | `design-system/validated-explorations/combination/` | CD-006-pilot-migration.html |
| Phase D Validation | `ephemeral/phase-d-execution/` | FINAL-REPORT.md (54KB) |
| Middle-Tier Experiment | `ephemeral/middle-tier-experiment/` | 07-VERDICT.md, middle-tier-page.html |
| Ceiling Experiment | `ephemeral/ceiling-experiment/` | ceiling-page.html, 07-VERDICT.md |
| Mode 4 PA (Ceiling) | `ephemeral/ceiling-experiment/_perceptual-audit/` | AUDIT-REPORT.md (102 screenshots) |
| Flagship Experiment | `ephemeral/flagship-experiment/` | 07-intentionality.html (86KB) |
| Flagship Dissection | `ephemeral/flagship-audit/` | 10-REMEDIATION-PROMPT.md |
| Flagship Retrospective | `ephemeral/flagship-retrospective/` | 9 reports |
| Flagship Remediation | `ephemeral/flagship-remediation/` | FINAL-VERDICT.md |
| Gas Town Page A | `ephemeral/pages/yegge-gas-town/` | output.html (68KB) |
| Gas Town Page B | `ephemeral/pages/gas-town-steve-yegge/` | output.html (51KB) |
| Pipeline Comparison | `ephemeral/pages/_comparison-screenshots/` | 21-REVISED-MASTER-SYNTHESIS.md (111KB) |

---

## The Bottom Line

**What works:** Recipe-based pipeline with enforced perceptual thresholds, self-challenge fix cycles, and boundary CSS specifications produces consistent Ceiling-tier output (PA-05 3.5/4) with zero catastrophic defects.

**What does not work:** Monolithic checklist prompts, guardrail-heavy specifications without playbooks, and unconstrained compositional freedom without spatial discipline all produce sub-Middle output regardless of how much research backs them.

**What is unresolved:** Whether Flagship (PA-05 >= 3.5, Tier 5 >= 6/8, pervading structural metaphor, ensemble compositional voice) is achievable through the recipe-based pipeline, or whether it requires a fundamentally different approach that preserves compositional freedom while preventing spatial catastrophe. The contrarian position from the Flagship 4/4 Recipe Team: "Flagship 4/4 may not exist as a discrete register."

**The experimental evidence says:** The pipeline has reached Ceiling. The path from Ceiling to Flagship is unclear and may require more experiments than infrastructure.
