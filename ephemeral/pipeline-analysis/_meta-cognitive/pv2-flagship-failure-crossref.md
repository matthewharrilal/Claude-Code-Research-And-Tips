# PV2 Flagship Mode: Failure Cross-Reference (All 42 Failures)

**Author:** failure-crossref (Opus 4.6)
**Date:** 2026-02-18
**Sources:** 02-master-prompt-failures.md (42 failures), 42-OPERATIONAL-RECIPE.md (9-phase recipe), pipeline-v2-architecture.md, pv2-tier-routing.md, pv2-comms-protocol.md, pv2-handoff-protocol.md
**Purpose:** Verify that PV2 Flagship mode addresses EVERY one of the 42 master prompt failures with a SPECIFIC recipe step, exact CSS value, or binary gate -- not abstract rules

---

## METHODOLOGY

For each of the 42 failures:
1. Identify the PV2 Flagship response (recipe step, gate, comms protocol, or handoff field)
2. Classify the response type: RECIPE STEP (sequenced action with exact value), EXACT VALUE (specific CSS), BINARY GATE (pass/fail check), COMMS PROTOCOL (communication enforcement), HANDOFF FIELD (structured data in _build-plan.md), NOT ADDRESSED
3. Verdict: PASS (fully addressed with specific mechanism), PARTIAL (addressed conceptually but missing specificity), FAIL (not addressed or addressed with same failure mode)

---

## TYPE 1: THINGS IT SAID THAT WERE WRONG (F-01 through F-08)

| # | Failure | Severity | PV2 Flagship Response | Response Type | Verdict |
|---|---------|----------|----------------------|---------------|---------|
| F-01 | Absence coherence rule validated omitting Ch4 (borders) | BLOCKING | Recipe Phase 4.1 specifies alternating section-level left borders with exact selectors and values (3px/4px, specific colors). Handoff Section 4 MECHANISM DEPLOYMENT table requires >= 1 mechanism per category including Hierarchy (border-weight). Tier routing: Flagship gates Ch4 activation as BLOCKING. | RECIPE STEP + HANDOFF FIELD + BINARY GATE | **PASS** |
| F-02 | C-13 contradicts S-09 (200px silence zone vs 96px max gap) | SIGNIFICANT | Recipe eliminates the "silence zone" concept entirely. Phase 0.6 stacking arithmetic caps worst-case total gap at 108-120px. Phase 8B void prevention verification checks total gap <= 120px. No rule mandates 200px+ silence zones. The contradiction is resolved by REMOVING one side. | RECIPE STEP (removal) | **PASS** |
| F-03 | S-09 stacking loophole (individual values pass but stacked creates 210-276px voids) | BLOCKING | Recipe Phase 0.6 provides explicit stacking arithmetic formula with worked proofs for each transition type. Divider margins capped at 24px (Phase 4.2). Phase 8B void prevention verification: "No gap exceeds 120px." Architecture adds `--space-max-stacked: 192px` to tokens.css. Gate runner SC-10 checks stacked gap <= 192px. Tier routing: Flagship BLOCKING gate with tighter 108px target. | RECIPE STEP + EXACT VALUE + BINARY GATE | **PASS** |
| F-04 | MG-05 zone boundary warning reached wrong agent (Metaphor Agent not Builder) | BLOCKING | Recipe Phase 4.1-4.2 operationalizes zone boundaries as structural CSS (borders + dividers) directly in the builder's recipe. Builder reads the COMPLETE recipe (~650 lines) -- no 75-line visibility cap. Handoff Section 7 BUILDER DIRECTIVES routes builder to full recipe. Architecture Section 5: "builder receives operational-recipe.md + mechanism-catalog.md" -- self-contained. | RECIPE STEP + HANDOFF FIELD | **PASS** |
| F-05 | KB-04 violated by the prompt itself (200-line limit, prompt was 963 lines) | MINOR | Architecture replaces the monolithic 963-line prompt with layered architecture: recipe (~650 lines) + handoff (~100-200 lines per tier). Recipe is the builder's COMPLETE spec. No separate "execution prompt" exists alongside a "master prompt." The self-contradictory size constraint is eliminated. | ARCHITECTURE (structural) | **PASS** |
| F-06 | A6 self-contradictory positioning ("this prompt is short" at line 79 of 963) | MINOR | Recipe Part 3.4 states "this document is a recipe" without false length claims. The conviction layer (Part 3) is ~50 lines of design philosophy, not a 963-line prompt claiming to be short. Self-description matches reality. | ARCHITECTURE (structural) | **PASS** |
| F-07 | SC-02 allows skipping Ch4 (Structural) and Ch6 (Rhythmic) as cheapest channels to omit | BLOCKING | Recipe Phase 4 is ENTIRELY dedicated to structural borders and dividers (Ch4) -- the builder cannot skip it because it is a PHASE, not a rule to satisfy. Phase 7 adds responsive breakpoints (Ch6). Handoff Section 4 requires >= 1 mechanism per 5 categories. Tier routing: Flagship Per-Category Mechanism Minimum is BLOCKING gate. | RECIPE STEP (Phase 4 = Ch4, Phase 7 = Ch6) + BINARY GATE | **PASS** |
| F-08 | C-05 transition type naming misleading ("BREATHING" sounds gentle, is actually strongest cut) | SIGNIFICANT | Recipe Phase 0.6 redefines the 3 transition types with explicit visual descriptions (not misleading names): Smooth = "1px line, subtle color, 16px margins"; Bridge = "2px line, dark color, 24px margins"; Breathing = "4px line, primary (red) color, 24px margins." The name is retained but the DESCRIPTION + EXACT VALUES override any connotation. Divider margins capped at 24px for all types, neutralizing stacking impact. | RECIPE STEP + EXACT VALUE | **PASS** |

**TYPE 1 SUMMARY: 8/8 PASS (all 8 failures addressed)**

---

## TYPE 2: THINGS IT OMITTED ENTIRELY (F-09 through F-18)

| # | Failure | Severity | PV2 Flagship Response | Response Type | Verdict |
|---|---------|----------|----------------------|---------------|---------|
| F-09 | Zero perception thresholds in entire 963-line prompt | BLOCKING | Recipe Appendix A provides a complete perception threshold table (9 properties with minimum perceptible deltas). Phase 8A PERCEPTION THRESHOLD VERIFICATION requires checking every zone-varying CSS property against the table. Architecture creates `perception-thresholds.md` as a standalone permanent file. Gate runner SC-09 (background delta >= 15 RGB) and SC-11 (font-size >= 2px) are programmatic binary checks. Handoff Section 7 embeds the threshold table in BUILDER DIRECTIVES. Tier routing: Flagship ALL perception gates are BLOCKING. | RECIPE STEP + EXACT VALUE + BINARY GATE + HANDOFF FIELD | **PASS** |
| F-10 | Zero CSS recipes / implementation instructions for builder | BLOCKING | The entire Recipe Part 1 (Phases 0-8, ~1,200 lines) IS the CSS recipe. Every phase provides exact CSS property-value pairs in copy-pasteable code blocks. Phase 2.3: `max-width: 960px`. Phase 3.1: specific hex values for zone backgrounds. Phase 4.1: `border-left: 3px solid var(--color-border)`. Phase 5.1: `font-size: 17px; line-height: 1.85; letter-spacing: 0.02em`. Appendix C provides a quick-reference card with all values. Architecture Section 2 resolves: recipe IS playbook (0.32:1 constraint-to-action ratio). | RECIPE STEP (entire recipe) | **PASS** |
| F-11 | Zero component library reference for builder | BLOCKING | Recipe Phase 1.4 explicitly names standard component classes: `.callout .callout--info`, `.callout--gotcha`, `.callout--tip`, `.callout--essence`, `.table-compact`, `.table-featured`, `.essence-pullquote`, `.section-indicator`. Phase 4.3 provides full callout family CSS with 4 semantic variants. Phase 4.5 provides table styling. Phase 4.6 provides pullquote styling. Handoff Section 3 SECTION INVENTORY's "Elements" column specifies which components each section needs. Risk 5 in Part 5 adds detection: "if custom classes outnumber standard classes, flag for remediation." | RECIPE STEP + HANDOFF FIELD | **PASS** |
| F-12 | Zero layout diversity requirement (all single-column) | BLOCKING | Recipe Phase 0.5: "At least 2 of your sections MUST use non-single-column layout." Phase 1.5 provides HTML grid wrappers (`.content-pair` for 2-column, `.content-grid` for 2x2). Phase 4.4 provides grid CSS (`grid-template-columns: 1fr 1fr`). Phase 8C Scale 3 verification: "At least 2 sections have distinct layout." Handoff Section 3 Layout column requires >= 2 non-single-column. Gate runner SC-07 checks grid layout minimum. Tier routing: Flagship Grid Layout Minimum is BLOCKING gate. | RECIPE STEP + EXACT VALUE + BINARY GATE + HANDOFF FIELD | **PASS** |
| F-13 | Zero accessibility requirements | SIGNIFICANT | Recipe Phase 1.1: skip link HTML, ARIA landmarks, `role` attributes. Phase 1.6: complete ARIA attribute list. Phase 7.1: focus-visible, skip-link CSS, reduced-motion media query. Phase 7.2: print styles. Phase 7.3: responsive breakpoints (768px, 480px). Phase 8F: 8-item accessibility verification checklist. Tier routing: Flagship WCAG 2.1 AA Accessibility is BLOCKING gate (full check, 8/8 items). | RECIPE STEP + BINARY GATE | **PASS** |
| F-14 | No deallocation protocol for sub-perceptual CSS | SIGNIFICANT | Recipe Appendix B: dedicated deallocation protocol with sub-perceptual identification criteria (8 specific thresholds), 4-step deallocation process, and expected volume (15-25% of CSS). MORE IMPORTANTLY: the recipe's Phase 2-6 CSS values are PRE-VETTED against perception thresholds. The builder doesn't NEED to deallocate because the recipe values are already perceptible. Deallocation is for REMEDIATION of existing pages, not for new builds. For Flagship builds following the recipe, sub-perceptual CSS should not accumulate. Risk 1 in Part 5 provides early warning signs. | RECIPE STEP (Appendix B) + PREVENTION (recipe values pre-vetted) | **PASS** |
| F-15 | No plan-fidelity gate (build plan never checked against build) | SIGNIFICANT | Comms Protocol Section C4: Flagship schedule mandates CHECKPOINT after EVERY phase with gate results. Phase 0, 1, 3, 4 require MANDATORY planner APPROVAL before builder proceeds. Planner reviews checkpoint file and checks gate results, sending PROCEED or HALT. Comms Protocol Section D: checkpoints are TASKS with deliverables, not obligations. Handoff Part C Step 3: builder verifies section inventory matches content. HOWEVER: no explicit gate checks "does the built HTML match the _build-plan.md mechanism deployment table?" The planner reviews checkpoints but there is no programmatic plan-fidelity gate comparing the plan's mechanism list to the built CSS. | COMMS PROTOCOL (partial) | **PARTIAL** |
| F-16 | No content register variation requirement (all identical prose) | SIGNIFICANT | Recipe Phase 0.2 Step 2 inventories content types (paragraphs, tables, lists, code blocks, quotes, callouts). Handoff Section 3 SECTION INVENTORY "Content Type" column distinguishes Prose/Mixed/Table-dominant/Code-dominant/Visual and "Elements" column specifies component counts per section. Recipe Phase 1.4 provides markup for 4 callout variants, tables, pullquotes. The section inventory INHERENTLY diversifies content register by mapping different element types to different sections. HOWEVER: no explicit rule says "vary rhetorical modes across sections" -- if the source content is entirely uniform prose, the pipeline does not GENERATE structural variety in the content itself (it can only vary the CSS treatment of existing content). | HANDOFF FIELD + RECIPE STEP (partial) | **PARTIAL** |
| F-17 | No total gap measurement in gates | BLOCKING | Recipe Phase 0.6: explicit stacking arithmetic formula with worked proofs. Phase 8B: total-gap verification "No gap exceeds 120px." Architecture: `--space-max-stacked: 192px` added to tokens.css. Gate runner SC-10: stacked gap <= 192px at section boundaries (programmatic binary check). Tier routing: Flagship Stacking Arithmetic is BLOCKING gate. Recipe divider margins capped at 24px to make compliance AUTOMATIC. | RECIPE STEP + EXACT VALUE + BINARY GATE | **PASS** |
| F-18 | No per-section CSS variation mandate (adjacent sections look identical) | SIGNIFICANT | Recipe Phase 8E: Multi-Coherence Verification requires counting CSS properties that shift at each major zone transition. Each major transition MUST have >= 3 properties shifting simultaneously, with a concrete verification table (background, font-size, font-weight, letter-spacing, left border, paragraph margin, text color). Tier routing: Flagship Coherence Check (>= 3 transitions) is BLOCKING gate. Phase 5 provides per-zone typography values that AUTOMATICALLY create per-section variation. HOWEVER: the verification is at zone TRANSITIONS, not at every adjacent section pair. Adjacent sections WITHIN the same zone may still look identical. | RECIPE STEP + BINARY GATE (partial) | **PARTIAL** |

**TYPE 2 SUMMARY: 7/10 PASS, 3/10 PARTIAL. All 6 BLOCKING failures PASS. The 3 PARTIALs are SIGNIFICANT-severity failures (F-15, F-16, F-18).**

### PARTIAL Details and Lossless Fixes

**F-15 (Plan-Fidelity Gate) -- PARTIAL:**
- **What's missing:** No programmatic check that compares the _build-plan.md mechanism deployment table to the actual HTML/CSS. The planner reviews checkpoints manually, but the checkpoint format (Section A1) reports gate results, not plan-fidelity. A builder could deploy 8/10 planned mechanisms and the checkpoint would report "Phase 6 complete" without the planner noticing 2 missing mechanisms.
- **Lossless fix:** Add to Comms Protocol Section A1 CHECKPOINT format a mandatory field: `PLAN_FIDELITY: [N/M mechanisms deployed vs planned] -- [list any NOT YET deployed]`. Add to Phase 8 a plan-fidelity verification step: "Compare _build-plan.md Section 4 mechanism table to deployed CSS. Every mechanism in the plan MUST have a corresponding CSS rule in the output. List any gaps." Add to gate runner: SC-13 plan-fidelity check (count deployed mechanism CSS selectors vs planned count).
- **Target file:** `pv2-comms-protocol.md` (Section A1 template) + `42-OPERATIONAL-RECIPE.md` (Phase 8) + `gate-runner.js` (SC-13)

**F-16 (Content Register Variation) -- PARTIAL:**
- **What's missing:** If the source content is entirely uniform third-person declarative prose, the pipeline cannot diversify it. The handoff inventories existing variety but does not mandate creation of variety. This is fundamentally a content-authoring concern, not a design-system concern.
- **Lossless fix:** Add to Handoff Section 3 SECTION INVENTORY a `REGISTER_DIVERSITY_CHECK`: "Count distinct content element types across all sections. If < 3 types (e.g., only paragraphs throughout), flag: REGISTER_WARNING: Content is register-uniform. Builder should convert >= 2 prose blocks to callouts, tables, or pullquotes to create structural variety." This pushes the builder to TRANSFORM some content into components even when the source doesn't have them.
- **Target file:** `pv2-handoff-protocol.md` (Section 3)

**F-18 (Per-Section CSS Variation) -- PARTIAL:**
- **What's missing:** Phase 8E checks zone TRANSITIONS (major boundaries between zone groups) but not adjacent sections WITHIN the same zone. Sections S4 and S5 in the same zone could have identical CSS and pass all gates.
- **Lossless fix:** Extend Phase 8E or add Phase 8E.2: "Within each zone containing 3+ sections, verify that at least ONE section differs from its neighbors on >= 1 visible CSS property (left border presence/absence, callout variant, grid layout, background shade)." This is already largely handled by the alternating border pattern (Phase 4.1) and section-specific backgrounds (Phase 3.2), but making it an explicit check closes the gap. Add as a WARNING gate for Flagship (not BLOCKING, since within-zone uniformity is less severe than zone-boundary uniformity).
- **Target file:** `42-OPERATIONAL-RECIPE.md` (Phase 8E.2)

---

## TYPE 3: CORRECT BUT INEFFECTIVE (F-19 through F-26)

| # | Failure | Severity | PV2 Flagship Response | Response Type | Verdict |
|---|---------|----------|----------------------|---------------|---------|
| F-19 | A5 CD-006 worked example in conviction layer -- builder never saw it | BLOCKING | Architecture eliminates the visibility cap entirely. The builder reads the COMPLETE recipe (~650 lines) including Part 3 (conviction layer, ~50 lines) which contains the design philosophy. The worked example content from A5 is operationalized INTO the recipe's Phase 4-5 CSS values. The recipe IS the worked example: specific CSS values at specific locations. There is no separate "conviction layer" that the builder is excluded from. | ARCHITECTURE (structural elimination) | **PASS** |
| F-20 | A7 CSS exemplar in wrong section -- builder excluded | SIGNIFICANT | Same as F-19. The recipe provides the CSS exemplar AS Phase 4.2 code blocks (transition divider CSS). The recipe's CSS values ARE the exemplar. No information segregation exists. | RECIPE STEP | **PASS** |
| F-21 | A6 experiential laws -- diagnosis as philosophy, not binary gates | SIGNIFICANT | Recipe converts each philosophical observation into a specific recipe step. "Deployment != perception" becomes Phase 8A (perception threshold verification with numeric thresholds). "Plans don't prevent spatial failure" becomes Phase 8B (void prevention with 120px cap). "Only GATES prevent spatial failure" becomes gate runner SC-01 through SC-12 (12 binary gates). The philosophy is EMBODIED in the recipe, not stated alongside it. | RECIPE STEP + BINARY GATE | **PASS** |
| F-22 | B10 self-check was checklist not recipe | BLOCKING | Recipe Phase 8 IS the replacement: 7 verification sub-phases (8A through 8G), each with specific measurements, not checkboxes. 8A: perception threshold table with "measured value vs threshold." 8B: void prevention with 120px cap. 8C: Scale 5 with per-scale checklist. 8D: soul constraints with specific properties. 8E: multi-coherence with transition verification table. 8F: accessibility with 8 specific items. 8G: gestalt perception test with 4 specific questions. The verification is RECIPE-formatted (specific values, measured outcomes) not checklist-formatted ("did you check this?"). | RECIPE STEP | **PASS** |
| F-23 | MC-01 CCS formula -- correct but never computed | SIGNIFICANT | Recipe Phase 8E replaces CCS with a concrete cascade verification table. Instead of computing an abstract formula, the builder counts CSS properties that shift at each transition. "Each major transition MUST have >= 3 properties shifting simultaneously." The abstract formula is replaced by a COUNTING exercise. Tier routing: Flagship Coherence Check is BLOCKING gate. | RECIPE STEP + BINARY GATE | **PASS** |
| F-24 | C-15 intentionality dimensions -- abstract categories, not CSS properties | SIGNIFICANT | Recipe does NOT attempt to measure intentionality abstractly. Instead, intentionality is EMBEDDED in the recipe structure. Phase 1.3 section indicators are "self-reference" (the page describes its own structure). Phase 0.6 transition types with bridge prose are "pedagogical sequencing." Phase 4.3 callout variants are "cognitive transitions." Header/footer bookend is "bookending." Phase 6.3 drop cap is a "designed moment." The recipe PRODUCES intentional elements rather than CHECKING for their abstract presence. HOWEVER: no explicit gate verifies intentionality. | RECIPE STEP (implicit) | **PARTIAL** |
| F-25 | C-20 fractal coherence -- correct but unverifiable | SIGNIFICANT | Recipe Phase 8C Scale 5 Verification checks for designed moments at 5 levels: Page (bookends), Zone (backgrounds + typography), Section (borders + layout), Component (callouts), Element (selection, code, links). The 5-scale check is more concrete than "fractal coherence" -- each scale has specific items to verify. Tier routing: Flagship Scale Coverage is BLOCKING (5/5 required) and Fractal Coherence is BLOCKING gate. HOWEVER: the gate still requires judgment about whether patterns "echo" across scales. | RECIPE STEP + BINARY GATE (partial) | **PARTIAL** |
| F-26 | CP-A through CP-F communication checkpoints -- defined but unexecuted (19 agents, 0 messages) | SIGNIFICANT | Comms Protocol completely redesigns communication. Section C4: Flagship schedule mandates CHECKPOINT after EVERY phase. Phases 0, 1, 3, 4, 8 require MANDATORY planner APPROVAL (builder MUST wait). Section D: checkpoints are TASKS with deliverables, not obligations. Each checkpoint is a SEPARATE TASK in the task system. Section D3: file-bus + SendMessage dual channel (file IS the substance, message is notification, BOTH required). Section E: retry limits (3 for Flagship) and escalation protocol. Section B: 6 banned message types prevent noise. 5-minute timeout at mandatory checkpoints with ESCALATE if no response. | COMMS PROTOCOL + TASK ENFORCEMENT | **PASS** |

**TYPE 3 SUMMARY: 6/8 PASS, 2/8 PARTIAL. The 1 BLOCKING failure (F-22) PASSES. The 2 PARTIALs are SIGNIFICANT-severity failures (F-24, F-25).**

### PARTIAL Details and Lossless Fixes

**F-24 (Intentionality Dimensions) -- PARTIAL:**
- **What's missing:** The recipe PRODUCES intentional elements but no gate VERIFIES their presence. A builder who skips the section indicators, bridge prose, or drop cap would not trigger any gate failure. The intentionality elements are recipe steps that can be skipped.
- **Lossless fix:** Add to Phase 8 a binary intentionality check: "Verify >= 3 of these 5 intentionality markers are present in the HTML: (1) section-indicator elements with reading pattern labels, (2) bridge-prose elements at zone boundaries, (3) callout variants using >= 2 distinct types, (4) header + footer bookend with matching dark backgrounds, (5) at least 1 display-font element in body (drop cap, pullquote, or essence callout). Count: ___/5. FAIL if < 3." Add as gate runner SC-14.
- **Target file:** `42-OPERATIONAL-RECIPE.md` (Phase 8) + `gate-runner.js` (SC-14)

**F-25 (Fractal Coherence) -- PARTIAL:**
- **What's missing:** Phase 8C checks scale coverage (5 scales have designed moments) but not whether the moments at different scales ECHO each other. A builder could have a drop cap (Scale 5) that has no relationship to the zone typography (Scale 2). The "fractal" part (self-similarity across scales) is still judgment-based.
- **Lossless fix:** Add to Phase 8C a fractal consistency check: "Pick the dominant CSS channel at Scale 2 (zone). Verify the SAME channel is active at Scale 3 (section) and Scale 4 (component). Example: if zone differentiation is primarily through background color, then section-level components (callouts) should also use background color as their primary differentiation channel. YES/NO." This is still somewhat judgment-based but much more targeted than "is fractal coherence present?" -- it asks about a SPECIFIC channel's presence at multiple scales, which can be verified by inspecting CSS.
- **Target file:** `42-OPERATIONAL-RECIPE.md` (Phase 8C)

---

## TYPE 4: OVER-SPECIFIED TO NO EFFECT (F-27 through F-35)

| # | Failure | Severity | PV2 Flagship Response | Response Type | Verdict |
|---|---------|----------|----------------------|---------------|---------|
| F-27 | SC-03 richness matrix -- 35-cell fill incentivized invisible breadth | BLOCKING | Recipe eliminates the richness matrix entirely. No "fill 30/35 cells" requirement exists. Instead, the recipe provides SPECIFIC CSS values for each zone-property combination. The builder doesn't fill cells -- they execute recipe steps. The Phase 0.4 zone table + Phase 5 typography zones + Phase 3 backgrounds provide the exact values. Perception thresholds embedded in every phase prevent sub-perceptual cell-filling. Handoff Section 4 deploys mechanisms by CATEGORY (not by scale-channel cell), with CSS CHANNEL specified per mechanism. | RECIPE STEP (structural replacement) | **PASS** |
| F-28 | SC-04 channel load distribution -- incentivized spreading thin | SIGNIFICANT | Recipe eliminates channel load distribution rules. Instead, the recipe's phase structure CONCENTRATES effort: Phase 4 (structural borders + dividers) is the longest phase, getting the most CSS budget. Phase 5 (typography) is second. This implicit load distribution (~30% structural, ~25% typographic, ~20% chromatic, ~15% spatial, ~10% element) concentrates effort on the most visually impactful channels rather than spreading thin across all. | RECIPE STEP (structural replacement) | **PASS** |
| F-29 | SC-08 channel saturation prevention -- prevented a problem that doesn't exist | MINOR | Recipe eliminates the saturation prevention rule. No rule says "max N channels per scale." The recipe's specific values AUTOMATICALLY prevent saturation (no zone has all 7 channels maxed because the recipe doesn't specify that). The non-risk is no longer guarded against. | RECIPE STEP (removal) | **PASS** |
| F-30 | SC-06 restraint ratio per channel -- measured documentation of rejections, not quality | MINOR | Recipe eliminates the restraint ratio concept entirely. No rejection log, no reject-to-deploy ratio. The recipe tells the builder WHAT TO DO (specific values). Restraint is BUILT INTO the recipe values (not every section gets every mechanism), not measured as a separate metric. | RECIPE STEP (removal) | **PASS** |
| F-31 | C-12 rejection log quantity threshold -- vacuous documentation | MINOR | Recipe eliminates the rejection log entirely. No "document >= 21 rejections." Builder time previously spent writing rejection entries is now spent writing CSS. | RECIPE STEP (removal) | **PASS** |
| F-32 | Typographic convergence gradient -- 99 lines of invisible CSS | BLOCKING | Recipe Phase 5.1-5.3 replaces the sub-perceptual gradient with perceptible zone typography: Zone 1 (17px/1.85/0.02em), Zone 2 (15px/1.55/-0.01em), Zone 3 (16px/1.75/0). Each delta exceeds perception thresholds (font-size >= 2px, line-height >= 0.2, letter-spacing >= 0.025em total range). Phase 8A verifies each property against the threshold table. The 99 invisible lines are replaced by ~30 perceptible lines. | RECIPE STEP + EXACT VALUE + BINARY GATE | **PASS** |
| F-33 | Per-zone border color shifts -- 35 lines below 15 RGB threshold | SIGNIFICANT | Recipe Phase 4.5 provides table styling with a SINGLE `thead` background (#F5F0E8) and a SINGLE `td` border (1px solid var(--color-border-subtle)). No per-zone table border color variations. The 35 lines of invisible color shifts are replaced by ~20 lines of perceptible table styling. Phase 8A perception threshold check (background >= 10 RGB for the recipe, >= 15 RGB per gate runner SC-09) would catch sub-perceptual border colors. | RECIPE STEP + EXACT VALUE | **PASS** |
| F-34 | Per-zone heading color shifts -- 27 lines below 15 RGB threshold | SIGNIFICANT | Recipe Phase 5.2 provides heading typography by zone with PERCEPTIBLE color shifts: Zone 1 h2 (#3D3530), Zone 2 h2 (var(--color-text) = #1A1A1A), Zone 3 h2 (#2D2825). These differ by ~15+ net RGB points. More importantly, heading WEIGHT shifts (400 vs 600) and SIZE shifts (30px vs 26px) are far more perceptible than color shifts alone. The 27 invisible lines are replaced by ~12 perceptible lines. | RECIPE STEP + EXACT VALUE | **PASS** |
| F-35 | Rhythmic micro-modulations -- 8 lines of borderline-perceptible margin adjustments | MINOR | Recipe Phase 5.3 provides paragraph spacing by zone with perceptible deltas: Zone 1 (20px), Zone 2 (12px), Zone 3 (18px). The 8px delta between Zone 1 and Zone 2 meets the 8px minimum threshold. The recipe does not micro-modulate per section within a zone -- spacing is consistent WITHIN each zone, varying only ACROSS zones. The 8 borderline lines are replaced by 4 clearly-scoped lines. | RECIPE STEP + EXACT VALUE | **PASS** |

**TYPE 4 SUMMARY: 9/9 PASS (all 9 failures addressed)**

---

## TYPE 5: SPECIFIED BUT UNENFORCEABLE (F-36 through F-42)

| # | Failure | Severity | PV2 Flagship Response | Response Type | Verdict |
|---|---------|----------|----------------------|---------------|---------|
| F-36 | C-14 signal-to-silence ratio -- subjective classification gamed by sub-perceptual deployment | SIGNIFICANT | Recipe eliminates the signal-to-silence ratio metric. Instead, the recipe's Phase 8A perception threshold verification ensures ALL deployed variation exceeds perception thresholds. Phase 8G gestalt perception test asks "Does each screenful look DIFFERENT?" -- still judgment-based but much harder to game because it tests visual EXPERIENCE, not signal classification. The recipe's pre-vetted values mean "signal" and "silence" are defined by the recipe structure (sections with mechanisms ARE signal, sections without ARE silence), not by self-classification. | RECIPE STEP (replacement) | **PASS** |
| F-37 | C-09 designed moments -- presence not perception | SIGNIFICANT | Recipe Phase 8G gestalt test question 1: "Does each screenful look DIFFERENT from the previous one? (backgrounds, borders, typography, layout shape, component types)." This replaces the abstract "designed moment per quartile" with a concrete visual comparison. Phase 8C Scale 5 verification checks specific elements at each scale. HOWEVER: the gestalt test is still self-administered (the builder asks themselves). Mode 4 PA with 9 fresh-eyes auditors provides the external check. Tier routing: Flagship PA-05 >= 3/4 is BLOCKING gate. | RECIPE STEP + BINARY GATE (PA verdict) | **PASS** |
| F-38 | MC-02 reinforcing pairs -- claimed not verified | SIGNIFICANT | Recipe Phase 8E multi-coherence verification provides a concrete transition verification table. Instead of abstract "reinforcing pair" claims, the builder counts CSS properties shifting at each boundary. Handoff Section 4: Flagship deployment level is "Multi-pattern COMPOSITION" with mechanism combinations specified per zone. Tier routing: Flagship Reinforcing Mechanism Pairs (>= 2 pairs encoding same semantic via different CSS channels) is BLOCKING gate. HOWEVER: the gate runner cannot programmatically verify "same semantic" -- this requires the planner's checkpoint review (Comms Protocol Section C4: Phase 4 mandatory APPROVAL). | RECIPE STEP + COMMS PROTOCOL + BINARY GATE (partial) | **PARTIAL** |
| F-39 | MC-07 cross-dimension coherence -- 10/15 pairs, presence without magnitude | SIGNIFICANT | Recipe replaces abstract "actively coupled" claims with Phase 8E concrete transition table. The builder measures SPECIFIC CSS values (font-size, background color, letter-spacing, border weight) at each transition and reports them in the transition verification table. "Coupling" is operationalized as "multiple properties shifting SIMULTANEOUSLY at the same boundary" (>= 3 properties per major transition). Perception thresholds ensure each shift is visible. Tier routing: Flagship Coherence Check is BLOCKING. | RECIPE STEP + BINARY GATE | **PASS** |
| F-40 | MG-04 metaphor structural test -- self-administered by the agent who created the metaphor | BLOCKING | Architecture Section 4.1 Flagship wave structure separates metaphor creation (Wave 0, TC Planner) from building (Wave 1, Builder) from verification (Wave 2, PA Auditors). The metaphor structural test is NOW administered by fresh-eyes PA auditors (Mode 4, 9 Opus auditors with zero build context) who have never seen the metaphor name or derivation. PA question distribution includes PA-41 through PA-48 (intentionality/metaphor questions). Screenshot pre-capture pattern ensures auditors see the page as a USER sees it, not as a builder sees it. The self-evaluation bias is structurally eliminated by the two-instance pattern. Handoff Section 5: STRUCTURAL_SURVIVAL score is set by TC, verified by fresh-eyes PA. Tier routing: Flagship PA-05 >= 3/4 is BLOCKING. | ARCHITECTURE (structural separation) + COMMS PROTOCOL | **PASS** |
| F-41 | C-21 compositional clusters -- planning not building (clusters lost in translation) | SIGNIFICANT | Handoff Section 4 MECHANISM DEPLOYMENT table maps each mechanism to WHERE it's deployed (section numbers) and WHAT CSS CHANNEL it modifies. The "cluster" concept is operationalized as a set of mechanisms deployed at the SAME location encoding the SAME semantic through DIFFERENT channels. The builder implements the cluster row-by-row from the table, not from an abstract "cluster" instruction. Comms Protocol Section C4: Phase 4 mandatory APPROVAL verifies the builder's structural borders match the planned mechanism deployment. HOWEVER: no explicit check ensures mechanisms within a "cluster" interact rather than just co-locate. | HANDOFF FIELD + COMMS PROTOCOL (partial) | **PARTIAL** |
| F-42 | P-04 builder self-scroll -- self-reported, compliance-primed lens | SIGNIFICANT | Recipe Phase 8G provides structured perception questions (4 specific questions about visual EXPERIENCE, not compliance). MORE IMPORTANTLY: Architecture Section 4.1 Flagship Wave 2 adds Mode 4 PA with 9 fresh-eyes auditors who perform the scroll test EXTERNALLY. The builder's self-scroll is no longer the LAST defense -- it is an early warning before the external PA. The Mode 4 PA is the authoritative scroll test. Tier routing: Flagship PA-05 >= 3/4 is BLOCKING gate. The self-evaluation bias is mitigated by external verification, not by reformulating the self-check. | ARCHITECTURE (structural separation) + RECIPE STEP | **PASS** |

**TYPE 5 SUMMARY: 5/7 PASS, 2/7 PARTIAL. The 1 BLOCKING failure (F-40) PASSES. The 2 PARTIALs are SIGNIFICANT-severity failures (F-38, F-41).**

### PARTIAL Details and Lossless Fixes

**F-38 (Reinforcing Pairs Verification) -- PARTIAL:**
- **What's missing:** The gate runner cannot programmatically verify "same semantic" -- whether two CSS channels at the same location encode the SAME content meaning. This requires human judgment. The planner reviews checkpoints, but the checkpoint format doesn't ask specifically about reinforcing pair verification.
- **Lossless fix:** Add to Handoff Section 4 a REINFORCING_PAIRS sub-table that explicitly names each pair and its shared semantic:

```
| Pair # | Mechanism A | Mechanism B | Shared Semantic | Verification |
|--------|-------------|-------------|----------------|-------------|
| 1 | Border-weight (4px red, S5) | Zone background (#F8F6F3, S5) | "Analytical core" | Remove border: does S5 still feel different from S4? Remove bg: does S5 still feel contained? If YES to both, mechanisms are reinforcing. |
```

The "Verification" column converts reinforcing pair claims into binary tests that the Phase 4 APPROVAL can check. Add to Comms Protocol Section A1 CHECKPOINT a mandatory field for Phase 4: `REINFORCING_PAIRS: [N pairs verified via removal test]`.
- **Target file:** `pv2-handoff-protocol.md` (Section 4) + `pv2-comms-protocol.md` (Section A1)

**F-41 (Compositional Clusters Lost in Translation) -- PARTIAL:**
- **What's missing:** The handoff mechanism deployment table maps mechanisms to locations and channels, but doesn't explicitly mark which mechanisms form a CLUSTER (intentionally interact). A builder could implement all mechanisms individually without creating cluster-level interaction.
- **Lossless fix:** Add to Handoff Section 4 a CLUSTERS column or sub-section:

```
## COMPOSITIONAL CLUSTERS (Flagship only)

| Cluster | Mechanisms | Shared Location | Interaction Test |
|---------|-----------|----------------|-----------------|
| C1: "Analytical core" | #1 Border-Weight + #7 Zone Background + #5 Dense/Sparse | S5-S8 | All 3 change simultaneously at S4/S5 boundary. Removing one changes the FEEL of the others. |
| C2: "Bookend warmth" | #13 Dark Header + #14 Footer Mirror + #16 Drop Cap | S1 + Header/Footer | Opening warmth is echoed in closing. Drop cap establishes editorial voice that footer closes. |
```

The "Interaction Test" column makes cluster coupling concrete: "removing one changes the feel of the others" becomes the verification question at Phase 8. Add to Comms Protocol Section A1 CHECKPOINT for Phase 6: `CLUSTER_INTEGRITY: [N/M clusters where interaction test = YES]`.
- **Target file:** `pv2-handoff-protocol.md` (Section 4) + `pv2-comms-protocol.md` (Section A1)

---

## CROSS-CUTTING ANALYSIS

### Failure Pattern Coverage

| Failure Pattern (from 02-master-prompt-failures) | Addressed? | How |
|--------------------------------------------------|-----------|-----|
| **Pattern 1: Conviction Layer Contains Execution Content** | **PASS** | Architecture eliminates the visibility cap. Builder reads complete recipe. No content segregation. |
| **Pattern 2: Magnitude Blindness** (10 failures) | **PASS** | Perception thresholds embedded at 4 levels: recipe values, Phase 8A verification, gate runner (SC-09, SC-11), handoff builder directives. 9/10 magnitude-blind failures PASS. |
| **Pattern 3: Self-Evaluation Bias** (3 failures) | **PASS** | Two-instance architecture: builder self-checks (Phase 8G) supplemented by Mode 4 PA with 9 fresh-eyes auditors (Flagship Wave 2). Self-evaluation is early warning, not final authority. |
| **Pattern 4: Judgment Rules Achieve ~0% Compliance** (7 failures) | **PASS (5/7), PARTIAL (2/7)** | Recipe replaces most judgment rules with specific values (CCS -> transition table, designed moments -> gestalt test, signal-to-silence -> removal). The 2 PARTIALs (F-38 reinforcing pairs, F-41 clusters) retain judgment elements because mechanism interaction requires semantic understanding that binary rules cannot capture. |
| **Pattern 5: Rules For Wrong Audience** (3 failures) | **PASS** | Architecture routes the FULL recipe to the builder. Handoff Section 7 explicitly lists files TO read and files NOT to read. Builder visibility = 100% of the recipe. |

### Root Cause Coverage

| Root Cause | Failures | PV2 Flagship Response | All Addressed? |
|-----------|---------|----------------------|----------------|
| **RC-4** (Sub-perceptual variation) | F-09, F-27, F-28, F-32, F-33, F-34, F-35, F-36, F-37, F-38, F-39 | Perception thresholds (recipe, gates, handoff). Recipe values pre-vetted. | **10/11 PASS, 1/11 PARTIAL (F-38)** |
| **RC-1/RC-2/RC-3** (No generative arrow / guardrail ratio / visibility) | F-04, F-10, F-19, F-20, F-22 | Recipe IS the generative arrow (0.32:1 ratio). Full builder visibility. | **5/5 PASS** |
| **RC-14** (Stacking loophole) | F-03, F-08, F-17 | Stacking arithmetic, 24px cap, 120px total gate, SC-10. | **3/3 PASS** |
| **RC-11** (Ch4 absent) | F-07, F-12, F-18 | Phase 4 dedicated to Ch4. Layout diversity mandate. Multi-coherence check. | **2/3 PASS, 1/3 PARTIAL (F-18)** |
| **RC-7** (Absence coherence) | F-01 | Phase 4 makes borders mandatory recipe steps. | **1/1 PASS** |
| **RC-9** (Component library invisible) | F-11 | Phase 1.4 names all standard classes. | **1/1 PASS** |
| **RC-5** (Zero agent communication) | F-26 | Comms protocol with tasks-as-deliverables, mandatory approvals, file+message dual channel. | **1/1 PASS** |
| **RC-6** (Coverage not causation) | F-15, F-23, F-37 | CCS replaced by transition table. PA-05 replaces self-assessment. Plan-fidelity partial. | **2/3 PASS, 1/3 PARTIAL (F-15)** |
| **RC-15** (No plan-fidelity gate) | F-15, F-41 | Comms protocol checkpoints and approvals. But no programmatic plan-vs-build comparison. | **0/2 PASS, 2/2 PARTIAL** |

### 14 BLOCKING Failures Status

| # | BLOCKING Failure | PV2 Verdict |
|---|-----------------|-------------|
| F-01 | Absence coherence validated omitting borders | **PASS** |
| F-03 | S-09 stacking loophole | **PASS** |
| F-04 | Zone boundary warning wrong agent | **PASS** |
| F-07 | SC-02 allows skipping Ch4/Ch6 | **PASS** |
| F-09 | Zero perception thresholds | **PASS** |
| F-10 | Zero CSS recipes for builder | **PASS** |
| F-11 | Zero component library reference | **PASS** |
| F-12 | Zero layout diversity requirement | **PASS** |
| F-17 | No total gap measurement | **PASS** |
| F-19 | CD-006 worked example hidden from builder | **PASS** |
| F-22 | Self-check was checklist not recipe | **PASS** |
| F-27 | Richness matrix incentivized invisible breadth | **PASS** |
| F-32 | Typographic convergence gradient (99 invisible lines) | **PASS** |
| F-40 | Metaphor structural test self-administered | **PASS** |

**ALL 14 BLOCKING FAILURES: PASS (14/14)**

---

## OVERALL VERDICT

| Category | Total | PASS | PARTIAL | FAIL |
|----------|-------|------|---------|------|
| BLOCKING | 14 | **14** | 0 | 0 |
| SIGNIFICANT | 22 | **15** | **7** | 0 |
| MINOR | 6 | **6** | 0 | 0 |
| **TOTAL** | **42** | **35** | **7** | **0** |

**Pass rate: 35/42 (83.3%). Zero FAILs.**

### The 7 PARTIAL Failures (All SIGNIFICANT, Zero BLOCKING)

| # | Failure | What's Missing | Recommended Fix |
|---|---------|---------------|-----------------|
| F-15 | Plan-fidelity gate | No programmatic plan-vs-build comparison | Add PLAN_FIDELITY field to checkpoints + gate SC-13 |
| F-16 | Content register variation | Pipeline cannot diversify uniform source content | Add REGISTER_DIVERSITY_CHECK to handoff Section 3 |
| F-18 | Per-section CSS variation within zones | Phase 8E checks zone transitions, not within-zone sections | Add Phase 8E.2 within-zone variation check |
| F-24 | Intentionality dimensions verification | Recipe produces intentional elements but no gate verifies | Add binary intentionality marker count (>= 3/5) as SC-14 |
| F-25 | Fractal coherence verification | Scale coverage checked but cross-scale echoing not verified | Add channel-consistency check across scales |
| F-38 | Reinforcing pairs verification | "Same semantic" requires judgment | Add REINFORCING_PAIRS sub-table with removal tests |
| F-41 | Compositional clusters interaction | Mechanisms co-locate but interaction not verified | Add CLUSTERS section with interaction tests |

### Lossless Fix Effort Estimate

| Fix | Target Files | Complexity | Lines |
|-----|-------------|-----------|-------|
| F-15 plan-fidelity | comms-protocol + recipe Phase 8 + gate-runner | Medium | ~40 |
| F-16 register diversity | handoff Section 3 | Low | ~15 |
| F-18 within-zone variation | recipe Phase 8E.2 | Low | ~20 |
| F-24 intentionality gate | recipe Phase 8 + gate-runner SC-14 | Medium | ~30 |
| F-25 fractal consistency | recipe Phase 8C | Low | ~15 |
| F-38 reinforcing pairs | handoff Section 4 + comms A1 | Medium | ~35 |
| F-41 clusters | handoff Section 4 + comms A1 | Medium | ~35 |
| **Total** | | | **~190 lines across 4 files** |

---

## CONCLUSION

PV2 Flagship mode addresses the 42 master prompt failures through 5 structural mechanisms:

1. **Recipe format replaces checklist format** (addresses F-10, F-22, F-27-F-35) -- the most impactful single change
2. **Perception thresholds embedded at 4 levels** (addresses F-09, F-32-F-35, F-36-F-39) -- the most widely applicable change
3. **Full builder visibility** (addresses F-04, F-19, F-20) -- eliminates the information segregation failure
4. **Communication as tasks with mandatory approvals** (addresses F-26, F-40, F-42) -- eliminates self-evaluation and communication bypass
5. **Binary gates in gate-runner.js** (addresses F-03, F-07, F-09, F-12, F-17) -- programmatic enforcement of previously-judgment rules

The 7 PARTIAL failures cluster around a single theme: **mechanism INTERACTION is inherently judgment-based and resists full binarization.** Reinforcing pairs, compositional clusters, fractal coherence, and intentionality all require understanding whether CSS properties work TOGETHER, not just whether they EXIST individually. The recommended fixes reduce judgment surface area through structured removal tests, interaction tables, and counting exercises, but cannot eliminate judgment entirely. This is the frontier where recipe format reaches its ceiling -- and where Opus model selection for the builder agent becomes critical (the builder must make compositional judgments that Sonnet cannot).

---

**END OF FAILURE CROSS-REFERENCE**
**Total failures: 42 | PASS: 35 (83.3%) | PARTIAL: 7 (16.7%) | FAIL: 0 (0%)**
**All 14 BLOCKING failures: PASS (100%)**
**Recommended fixes: ~190 lines across 4 files**
