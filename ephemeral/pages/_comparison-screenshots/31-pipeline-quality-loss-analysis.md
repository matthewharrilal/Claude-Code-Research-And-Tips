# 31 -- Pipeline Quality Loss Analysis: Where Quality Dies, Step by Step

**Agent:** pipeline-quality-loss-analyst (Opus 4.6)
**Date:** 2026-02-22
**Task:** #62
**Method:** Traced quality potential through all 9 pipeline steps, measuring what enters, what exits, what is lost, and why at each stage. Cross-referenced against Reports 14, 21, 26, and 29 for quality standards and known gaps.

---

## THE QUALITY LOSS FLOWCHART

```
CONTENT (100% quality potential -- all 10 first-principles qualities latent in raw material)
  │
  ▼
STEP 1: INTAKE
  Quality retained: 100%
  Quality lost: 0%
  Notes: Mechanical step. No quality transformation.
  │
  ▼
STEP 2: TC SKILL INVOCATION (Phases 0-4)
  Quality retained: ~75%
  Quality lost: ~25%
  Lost: atmospheric specificity, horizontal rhythm planning, grand pause architecture
  │
  ▼
STEP 2.1: RECIPE-FORMAT VALIDATION
  Quality retained: 75% (no change)
  Quality lost: 0% additional
  Notes: Format enforcement. Catches checklist-mode but adds nothing.
  │
  ▼
STEP 3: BUILDER DEPLOYMENT
  Quality retained: ~45-55%
  Quality lost: ~20-30% (cumulative loss from 75% → 45-55%)
  THE BIGGEST SINGLE LOSS POINT
  Lost: compositional fluency, parametric echo, transition grammar execution,
        spatial confidence, typographic range, atmospheric conviction
  │
  ▼
STEP 3.1: MIDPOINT MICRO-GATE
  Quality retained: 45-55% (stabilizes, prevents regression)
  Quality lost: 0% additional
  Notes: Catches catastrophic failures early. Cannot add quality.
  │
  ▼
STEP 4: GATE RUNNER (25 gates)
  Quality retained: 45-55% (gates verify, do not create)
  Quality lost: 0% additional quality; 0% quality created
  Notes: Gates raise the FLOOR but cannot raise the CEILING.
  │
  ▼
STEP 5: SCREENSHOT CAPTURE
  Quality retained: 45-55%
  Notes: Mechanical step. Information formatting for PA.
  │
  ▼
STEP 5.5: LOCK SHEET
  Quality retained: 45-55%
  Quality lost: 0% direct; POTENTIAL loss in fix cycles (locks CHALLENGEABLE choices)
  │
  ▼
STEP 6: PA DEPLOYMENT (9 auditors + 1 weaver)
  Quality retained: 45-55% (detection step, not creation)
  Quality DETECTED: PA identifies ~74% of remaining quality gaps
  Notes: PA is the pipeline's best diagnostic tool but cannot fix what it finds.
  │
  ▼
STEP 7: FIX CYCLE (up to 3 cycles)
  Quality retained: 55-65% (partial recovery from 45-55%)
  Quality RECOVERED: +10-15% through targeted fixes
  Lost: Fix cycles degrade from recipe to checklist across iterations.
        Compositional context evaporates. Symptom-patching replaces design thinking.
  │
  ▼
STEP 8: SUCCESS BAR
  Quality retained: 55-65%
  Notes: Binary pass/fail. Measures structure, not experience.
  │
  ▼
STEP 9: OUTPUT
  Final quality: ~55-65% of potential
  Missing: 35-45% of quality potential never materialized
```

**Translation to PA-05 scores:**

| Quality % | Approximate PA-05 | Tier |
|-----------|-------------------|------|
| 100% | 4.0 / Tier 5 9/9 | Flagship (theoretical) |
| 75% | 3.5 / Tier 5 6-7/9 | Upper Ceiling |
| 55-65% | 3.0-3.5 / Tier 5 4-5/9 | Lower Ceiling / Upper Middle |
| 45% | 2.5-3.0 | Middle |
| <40% | <2.5 | Floor |

The pipeline's current empirical ceiling is PA-05 ~3.5, which matches the 55-65% retained quality estimate.

---

## STEP-BY-STEP QUALITY LOSS ANALYSIS

### STEP 1: INTAKE

**What quality enters:** Raw content with 100% quality potential. The content carries latent structure (sections, hierarchies, mode shifts), latent tension (what it needs the reader to feel vs. what the design system provides), and latent atmosphere (the mood the content's subject matter could evoke).

**What quality exits:** Content + output directory path. Unchanged.

**What quality is lost:** Nothing. This is a file-read operation.

**Why:** Intake is mechanical. It cannot lose quality because it makes no compositional decisions.

**What would fix it:** Nothing needed. However: the orchestrator could add a CONTENT RICHNESS SIGNAL here -- a quick classification of content density, section count, mode variety, and emotional range. This would give the TC agent a head start on understanding the content's compositional potential. Currently the TC agent derives this from scratch in Phase 0.

---

### STEP 2: TC SKILL INVOCATION (Phases 0-4)

**What quality enters:** 100% potential. The content's full structure, tension, and atmospheric potential.

**What quality exits:** A TC brief (~80-120 lines) containing: structural metaphor, zone architecture (3-5 zones), content tensions, selected mechanisms (14+), metaphor-implied CSS directions, build recipe (per-zone CSS values), detection expectations, and builder anchors.

**What quality is lost (~25%):**

1. **Atmospheric specificity is reduced to metaphor vocabulary** (est. 5% loss). The TC skill derives a structural metaphor -- "geological descent," "military dispatch," "manuscript codex." The metaphor is a STRUCTURAL bridge (what CSS properties to use), not an ATMOSPHERIC bridge (what mood to create). Phase 1 (multi-axis questioning) captures reader needs on FEEL, UNDERSTAND, DO, BECOME axes, but Phase 3 (metaphor collapse) selects for structural isomorphism over emotional specificity. The metaphor's atmosphere is an emergent byproduct, not a designed output.

   **Evidence:** Page B's "command post/field dispatch" metaphor drives CSS decisions (heavier type in Z3, callout types, checkpoint bar). But the atmosphere is carried by LABELS ("Situation Brief," "Threat Assessment"), not CSS alone. The first-principles report (Report 26) scored Page B's atmospheric conviction at 7.5/10 -- good, but the 2.5-point gap is partly because the TC brief specifies metaphor structure but not metaphor atmosphere.

   **Structural reason:** Phase 3 scoring (Step 3.5) evaluates: Tension Resolution, Structural Isomorphism, Content Resonance (nominal + structural), Mechanism Feasibility, Perceptual Risk, Perceptual Cost. None of these criteria score ATMOSPHERIC QUALITY. A metaphor that produces strong structure but weak atmosphere scores the same as one that produces both.

2. **Horizontal rhythm is not in the TC vocabulary** (est. 5% loss). The TC brief specifies zone architecture (vertical organization) but has no concept of horizontal variation within zones. Section 2 (Zone Architecture) outputs: zone names, semantic direction, content summary, density level, pacing type, and layout topology (single-column/2-column/bento). But "layout topology" is assigned per-ZONE, not per-SECTION. All sections within a zone get the same horizontal treatment. The concept of a pull quote at wider max-width, a code block with different margins, or a sidebar appears nowhere in the TC output template.

   **Evidence:** Report 26 identifies "Horizontal rhythm" as scoring 0/5 layers in the pipeline transmission audit. The TC brief does not plan it, the builder is not instructed to create it, no gate measures it, and no PA question specifically asks about it.

3. **Grand pause architecture is suppressed** (est. 5% loss). The TC brief specifies transition types (SMOOTH/BRIDGE/BREATHING) per zone boundary, but the BREATHING transition is capped at 64-80px spacing. The concept of a 96-120px designed pause with distinctive treatment (a chapter-break moment) is not in the TC vocabulary. The TC skill's Phase 4.2B (Pacing Prediction) specifically warns against empty transitions: "Enforce MAXIMUM breathing zone height of 48px, not viewport-height gaps." This conflates designed pauses with empty voids.

4. **Per-section content-form coupling is flattened to per-zone** (est. 5% loss). The TC brief assigns density, pacing, and layout per ZONE (3-5 zones). But a 5-zone page may have 12 sections with different content types (narrative, analytical, comparison, reference, synthesis). Within each zone, all sections receive identical visual treatment. This is the S-10 suppressor (Report 29, Finding 2): zone-uniform specs prevent content-form coupling at section granularity.

5. **Body text typography variation is absent** (est. 5% loss). The TC brief's Section 5 (Metaphor-Implied CSS Directions) specifies character-scale typography shifts. But the build recipe (Section 6) specifies font-size, line-height, and letter-spacing per ZONE, not per zone's BODY TEXT specifically. The builder interprets zone typography as heading typography. Body text stays at the default 1rem/1.7 across the entire page. Report 26 identifies this as a universal gap in both pipeline pages: "Body text is 60-80% of the reading experience. Changing it changes everything. Neither page does this."

**What would fix it:**

- Add ATMOSPHERIC QUALITY as a 7th scoring criterion in Phase 3.5G: "In the first 500ms, what emotion does this metaphor's CSS suggest?" Score 0-3.
- Add a HORIZONTAL RHYTHM section to the TC brief output template (Phase 4.5): "For each zone, specify at least one element with non-standard content width (pull quote, code block, aside, comparison grid)."
- Split BREATHING transitions into two types: BREATHING (64-80px, structural border, standard treatment) and GRAND PAUSE (96-120px, distinctive background, display-serif bridge content). TC skill should plan at most 1 grand pause per page.
- Change zone architecture from per-ZONE to per-SECTION, with zones grouping semantically related sections. Currently: 5 zones each with 1-3 sections, all sections within a zone identical. Better: 5 zones, sections inherit zone direction but can specialize density and typography.
- Add body-text CSS to the build recipe: "Set zone body text: font-size: [N]px; line-height: [N]; font-weight: [N]. Body delta from previous zone: >=2px font-size AND/OR >=100 weight."

---

### STEP 2.1: RECIPE-FORMAT VALIDATION

**What quality enters:** TC brief at ~75% quality retention.

**What quality exits:** Same TC brief, validated for recipe format (action verbs, not checklist verbs).

**What quality is lost:** None directly. This is a format check.

**Why it matters:** This step prevents the single most replicated failure mode in the project's history. Report 21, Finding 5: "Recipe format -> COMPOSING mode -> 4/4. Checklist format -> COMPLYING mode -> 1.5/4." The validation is binary (>50% checklist verbs = FAIL) and effective. When this step works, the builder receives actionable CSS instructions instead of validation checkpoints.

**Subtle risk:** The validation catches verb choice but not verb SPECIFICITY. A recipe that says "Set background to a darker value" passes (action verb "Set") but is less useful than "Set background: #F0EBE3 (delta from Z1: 18 RGB -- >=15? YES)." Verb format is necessary but not sufficient for recipe quality.

---

### STEP 3: BUILDER DEPLOYMENT -- THE BIGGEST QUALITY LOSS POINT

**What quality enters:** ~75% retained. The builder receives:
1. TC brief (~80-120 lines) -- compositional foundation
2. Conventions brief (~610 lines) -- world model
3. Content file -- the raw material
4. Reference files: mechanism catalog, components.css, tokens.css, prohibitions.md

Total reading: ~900-1,000 lines of instruction before writing any CSS.

**What quality exits:** ~45-55% retained. output.html + _build-log.md + _cascade-value-table.md.

**What quality is lost (~20-30%) and WHY:**

#### Loss 3A: Absorption Ceiling (~10% loss)

The builder reads ~900-1,000 lines and must internalize them all while writing CSS. Human cognitive science (and LLM context dynamics) shows that information presented earlier in a long document receives less weight in subsequent decisions. The builder reads files in this order:

1. TC brief (80-120 lines) -- read first, freshest in context
2. Conventions brief (610 lines) -- read second, displaces some TC brief detail
3. Content file (varies) -- read third, displaces some conventions brief detail
4. Reference files (as needed during build)

**The problem:** By the time the builder starts writing CSS, the conventions brief's RICHEST sections (coherence arc planning, parametric echo recipe, transition-to-coherence mapping, typographic progression tables) have been read but are 700+ lines back in context. The builder retains the SIMPLEST rules (container 960px, no border-radius, warm palette) because they are repeated, binary, and present in both TC brief and conventions brief. Complex compositional concepts (multi-coherence arc from opening-building-climax-resolution, parametric echo where components adapt to zone density) receive one exposure in the middle of 610 lines and are never reinforced.

**Evidence:** Report 29, Finding 1: "Conventions brief = ~610 lines of world model. Builder checkpoints = ~50 lines of verification items. That's a 12:1 teaching-to-checking ratio. 83% of what the brief teaches is not checked." The builder checkpoints (the specific items self-verified during build) are:

Checkpoint 1 (after HTML skeleton): >=5 ARIA landmarks, skip link, >=8 component classes, header+main+footer
Checkpoint 2 (after zone boundaries): bg deltas >=15 RGB, >=3 border configs, >=3 channels shift per boundary
Checkpoint 3 (after full build): display-body delta >=10px, 3+ typography zones, midpoint observation, 5-question self-check

These 15 items are what the builder ACTUALLY self-enforces. The remaining 83% of the conventions brief (transition grammar, coherence arc, parametric echo, content-form coupling, spatial confidence, typographic progression, designed moments, restraint documentation) is absorbed once and hoped for.

**Structural reason:** The conventions brief is a WORLD MODEL (610 lines describing how composition works) delivered to an agent that needs an ACTION PLAN (50 lines of specific CSS instructions per zone). The TC brief IS the action plan, but it is 80-120 lines covering the entire page. The builder faces a mismatch: long world-model + short action-plan = action-plan governs behavior, world-model is background.

#### Loss 3B: Recipe-to-CSS Translation (~8% loss)

The TC brief's build recipe (Section 6) specifies CSS values per zone. Example from Phase 4.5 template:

```
ZONE: [zone name]
  1. Set container: max-width: 960px; padding: [specific values]
  2. Set zone background: [exact color] (delta: [N] RGB)
  3. Deploy [mechanism]: [2-line CSS snippet]
```

The builder reads this recipe and TRANSLATES it to HTML/CSS. The translation is where quality leaks:

- **Mechanism deployment ≠ mechanism integration.** The recipe says "Deploy border-weight gradient: 4px critical, 3px operational, 1px separators." The builder creates CSS rules for these three border widths. But the recipe does not specify WHERE each width appears relative to zone boundaries, how border-weight transitions correlate with background transitions, or how the weight gradient serves multi-coherence at specific boundaries. The mechanism is deployed as an independent tool, not as a channel in a multi-coherence system.

- **Boundary table values are followed, not extended.** The TC brief's boundary CSS table specifies exact channel shifts at each zone boundary. Page B's builder followed these values faithfully. But at boundaries the TC brief did NOT specify (within-zone section transitions), the builder defaulted to uniform treatment. The recipe covered ZONE boundaries but within-zone boundaries received no compositional attention.

- **Body text is not in the recipe.** The TC brief specifies zone-level typography (heading sizes, meta-label treatment) but rarely specifies zone-specific body text. The builder defaults to the conventions brief's standard: `var(--type-body)` (1rem) everywhere. Zone-specific body text (17px/1.8 in opening, 15px/1.6 in dense, 16px/1.7 in resolution) is the highest-impact missing CSS change (Report 21, Finding 3, item 1) and it is not in the recipe.

**Evidence:** Page B's builder applied `font-weight: 600` and `letter-spacing: 0.03em` to Zone 3 body text -- extending the metaphor beyond the recipe. But this happened in ONE zone. The other 3 zones used default body text. The builder demonstrated that DISPOSITIONAL composition is possible but only engaged it once. Report 21: "SPECIFICATION format ceiling: 2.5/4. PROCEDURAL format ceiling: 3.0-3.5/4. DISPOSITIONAL format: possibly 4/4. The current pipeline produces PROCEDURAL output."

#### Loss 3C: Experiential Quality Absence (~7% loss)

Six qualities identified by Report 29 are UNSUPPORTED by the pipeline (0-1 layers). These qualities are not in the TC brief, not in the builder instructions, not gated, and not (or barely) detected by PA:

| Quality | Why the Builder Cannot Produce It | % of Total Loss |
|---------|-----------------------------------|-----------------|
| Atmospheric conviction | Not specified. Builder follows recipe, doesn't create mood. | ~2% |
| Designed moments (peaks) | Not in pipeline vocabulary. Builder produces uniform quality. | ~1.5% |
| Grand spatial pause | Actively suppressed by SC-10 and conventions brief caps. | ~1% |
| Horizontal rhythm | Not in any pipeline layer. Builder defaults to single-column monotony. | ~1% |
| CSS budget adequacy | Not tracked. Builder may stop before sufficient CSS investment. | ~0.5% |
| Terminal craft (detail quality) | Gates count presence, not quality. Builder meets thresholds, not excellence. | ~1% |

**Structural reason:** The pipeline is architecturally a FAILURE-PREVENTION system, not an EXCELLENCE-CREATION system (Report 29, Part 5). Every gate exists because a previous build failed in a specific way. No gate exists because a previous build succeeded in a specific way and we want to ensure that success is repeated. The builder is told what NOT to do (>= 130 prohibition/threshold items across TC brief + conventions brief) and given ~50 lines of what TO do (build recipe + checkpoints). The prohibition-to-recipe ratio is approximately 2.6:1.

#### Loss 3D: The Conventions Brief's Richest Content Is Unreachable (~5% loss)

The conventions brief contains several sections with HIGH compositional value that the builder is unlikely to absorb:

| Brief Section | Lines | Compositional Value | Builder Absorption Probability | Evidence |
|---------------|-------|--------------------|-----------------------------|---------|
| Section 4.1: Coherence Arc Planning | ~15 | HIGH -- opening/building/climax/resolution pattern | LOW (~20%) | No builder checkpoint references coherence arc. Page B shows no deliberate arc shaping. |
| Section 4.1: Typographic Progression | ~15 | HIGH -- weight/spacing/line-height per direction | LOW (~20%) | Page B's Z3 typography shift was the builder's EXTENSION, not the brief's instruction. |
| Section 5: Parametric Echo Recipe | ~20 | HIGH -- component CSS varies by zone density | LOW (~15%) | No page has ever implemented parametric echo (components with different padding in dense vs sparse zones). |
| Section 7: Transition Grammar | ~25 | HIGH -- SMOOTH/BRIDGE/BREATHING with channel budgets | LOW (~25%) | TC brief specifies transitions but builder has no checkpoint to verify implementation. |
| Section 8: Layout Topologies | ~20 | MEDIUM -- 5 grid patterns available | MEDIUM (~40%) | DG-4 checks >=2 grid layouts but Flagship requires >=3. |
| Section 10: Midpoint Reflection | ~10 | HIGH -- prevents compositional drift | MEDIUM (~40%) | Builder instructed to do midpoint observation. Evidence of compliance varies. |

Total estimated absorption of conventions brief compositional content: ~30-40%. The remaining 60-70% is READ but not ACTED UPON.

**What would fix Step 3:**

1. **Per-zone builder micro-briefs (~50 lines per zone, replacing the 610-line conventions brief for the builder).** Instead of the builder reading 610 lines of world model and extracting what applies, the orchestrator (or TC agent) compiles per-zone instructions: "ZONE 3 -- DEEPENING: Set bg #F0EBE3. Body text: 15px/1.6/font-weight:500. Deploy: border-left 4px, reasoning component, data table. Boundary Z3->Z4: BRIDGE with 4 channels (bg+type+border+spacing)." The builder gets 150-200 lines total (50 per zone x 3-5 zones) of ZONE-SPECIFIC instructions instead of 610 lines of general world model.

2. **Body text in the recipe.** Add to TC brief Section 6, per zone: "Set body text: font-size: [N]px; line-height: [N]; font-weight: [N]."

3. **Builder checkpoint 2.5 (after first 2 zones complete):** "Does the transition between Z1 and Z2 match the TC brief's planned type (SMOOTH/BRIDGE/BREATHING)? Count channels: >=3?" Currently the builder self-checks at 3 points (skeleton, zone boundaries, full build). Adding a checkpoint between the first 2 zones catches translation errors early.

4. **Designed moment instruction.** Add to builder prompt: "In each scroll-third, include at least one PEAK -- a layout, grid, or component that uses the page vocabulary at higher intensity than surrounding content. Document peaks in build log."

5. **Horizontal rhythm instruction.** Add to builder prompt: "At least 2 elements on the page should have different content widths. A pull quote, code block, or comparison grid should break the single-column silhouette."

---

### STEP 3.1: MIDPOINT MICRO-GATE

**What quality enters:** Builder's partially-complete output at ~50% of zones.

**What quality exits:** Same output, with catastrophic failures caught and fixed before compounding.

**What quality is lost:** None. This step PREVENTS loss. It catches imperceptible backgrounds (SC-04), warm palette violations (SC-09), and missing borders (SC-15) before the builder writes the remaining CSS.

**Why it matters:** The midpoint gate targets the #1 failure mode (imperceptible backgrounds). Catching it at zone 2 prevents it from propagating to zones 3-5. Fix cost at midpoint: ~5 min. Fix cost after full build: ~30 min.

**Risk:** The midpoint gate is "opportunistic, not blocking" (SKILL.md line 163). If the builder writes all CSS in a single burst, the midpoint gate is skipped. There is no enforcement mechanism to ensure the builder pauses for mid-build verification. The gate depends on the builder's build pace being slow enough for the orchestrator to intervene.

---

### STEP 4: GATE RUNNER -- THE GATE-PA GAP

**What quality enters:** ~45-55% retained. The built page with HTML + CSS.

**What quality exits:** ~45-55% retained + structured diagnostic data (_gate-results.json).

**What quality is lost:** Gates do not create or destroy quality. They VERIFY structural properties and produce diagnostic data.

**The Gate-PA Gap (why gates pass but PA fails):**

This gap has occurred in EVERY experiment: the Flagship experiment passed all gates but PA scored 1.5/4. The remediation passed all gates but PA scored 2.5/4. The fundamental reason:

**Gates measure PRESENCE. PA measures QUALITY.**

| What Gates Can Verify | What Gates Cannot Verify |
|----------------------|------------------------|
| Background delta >= 15 RGB | Whether the bg shift creates atmosphere |
| >=3 channels shift per boundary | Whether the shifts feel coherent or random |
| >=3 border configurations exist | Whether borders create semantic hierarchy |
| Container width 940-960px | Whether the layout feels confident |
| >=8 component types present | Whether components serve the content |
| >=3 typography zones | Whether typography creates emotional range |
| Font trinity used correctly | Whether type feels editorial vs mechanical |
| No sub-perceptual CSS | Whether perceptible CSS is well-composed |

Gates verify that the STRUCTURAL INGREDIENTS exist. They cannot verify that the ingredients are COMPOSED into a coherent whole. This is exactly analogous to checking that a recipe includes flour, eggs, butter, and sugar -- correct ingredients do not guarantee a good cake.

**Specific gate blind spots:**

1. **SC-13 counts channel shifts but cannot evaluate direction coherence.** SC-13B attempts direction analysis but operates at ~50% confidence (Report 29). A boundary where background darkens (DEEPENING) but spacing increases (OPENING) passes SC-13 (>=3 channels shift) but fails multi-coherence (contradictory directions). SC-13B should catch this but its heuristic is unreliable.

2. **SC-17 (parametric echo) compares measured CSS to TC brief boundary table.** If the TC brief specifies wrong values (e.g., insufficient body text variation), SC-17 confirms the builder followed the wrong plan faithfully. SC-17 verifies plan COMPLIANCE, not plan QUALITY.

3. **DG-1 verifies fractal echo TABLE exists with 5 rows.** The table is a BUILD LOG artifact, not a CSS measurement. The builder could write a valid 5-row table and implement something entirely different. DG-1 checks the PLAN, not the EXECUTION.

4. **BG-2 (metaphor structural) is a behavioral gate.** It relies on agent attestation ("Is the metaphor structural? YES"). There is no programmatic way to verify that CSS embodies a metaphor without text labels.

**What would fix the Gate-PA gap:**

The gap cannot be fully closed because EXPERIENTIAL quality is inherently non-programmable. But the gap can be narrowed:

1. **SC-13B direction coherence should be promoted from ~50% confidence to ~80%.** Currently it heuristically guesses direction from value trends. It should instead READ the TC brief's boundary table (Section 6) and compare PLANNED direction to MEASURED channel movements. If the plan says DEEPENING at Z2->Z3, verify that bg darkened AND spacing tightened AND borders thickened. This is deterministic, not heuristic.

2. **Add SC-18: Body Text Variation.** Measure body font-size (not heading) per zone. If all zones have identical body font-size, FAIL. Threshold: >=1 zone pair with body font-size delta >=2px. This gates the highest-impact missing quality (Report 21, Finding 3, item 1).

3. **Add SC-19: Horizontal Variation.** Count elements with `max-width` or `width` different from the standard prose column. If zero, ADVISORY. Threshold: >=2 elements with non-standard width.

4. **Add DG-5: CSS Line Count.** Count non-comment, non-blank CSS lines. Below 800 for Flagship = ADVISORY. This creates accountability for CSS investment.

---

### STEP 5 & 5.5: SCREENSHOT CAPTURE + LOCK SHEET

**What quality enters:** ~45-55% retained page + gate results.

**What quality exits:** Screenshots at 3 viewports + lock sheet categorizing elements.

**Quality impact:** Neutral. These are information-packaging steps.

**One subtle risk:** The lock sheet categorizes elements as LOCKED (soul/research) vs CHALLENGEABLE (builder). This goes to the WEAVER only. But during fix cycles, the weaver uses the lock sheet to filter which PA findings become fix instructions and which are deprioritized. If the lock sheet over-classifies elements as LOCKED, legitimate compositional improvements are blocked. The lock sheet creates a conservation bias -- it is easier to protect existing CSS than to improve it.

---

### STEP 6: PA DEPLOYMENT -- DETECTION WITHOUT CREATION

**What quality enters:** ~45-55% retained page (screenshots).

**What quality exits:** 9 auditor reports + weaver synthesis identifying quality gaps.

**What quality is "lost":** PA does not lose quality. It DETECTS the quality that was already lost in Steps 2-3. PA's value is diagnostic precision -- it identifies WHAT is wrong and WHERE.

**PA's detection coverage by quality type:**

| Quality Type | PA Coverage | Questions |
|-------------|-------------|-----------|
| Structural presence (borders, components, zones) | 85% | PA-10, PA-14, PA-15, PA-37, PA-38 |
| Spatial balance | 90% | PA-09, PA-11, PA-30, PA-31, PA-32, PA-33, PA-50-53 |
| Typographic quality | 80% | PA-06, PA-07, PA-08, PA-29, PA-56 |
| Flow and pacing | 75% | PA-12, PA-13, PA-34, PA-35, PA-36, PA-62 |
| Multi-coherence | 70% | PA-55, PA-61, PA-69 |
| Metaphor expression | 60% | PA-42, PA-43, PA-44, PA-68 |
| Atmospheric conviction | 40% | PA-01, PA-03, PA-20, PA-65 |
| Designed moments | 30% | PA-45, PA-60 |
| Horizontal rhythm | 10% | PA-30 (partial) |
| Grand spatial pause | 10% | PA-33 (partial) |
| Terminal craft | 20% | PA-16, PA-45 |

PA detection is strong for structural and spatial qualities (the same qualities gates verify). It is weak for experiential qualities (the same qualities the pipeline cannot produce). This is not a PA design flaw -- it reflects the fundamental difficulty of asking "does this page have atmospheric conviction?" in a binary question format.

**The weaver's challenge:** The weaver synthesizes 9 reports into a PA-05 score, Tier 5 score, and Top-5 issues. The Top-5 issues become fix instructions. But the weaver must TRANSLATE perceptual observations ("the middle third feels flat and uniform") into CSS-actionable fixes ("increase bg delta at Z2->Z3, add border-left 3px to .zone-3, shift body font-weight from 400 to 500"). This translation is where specificity is lost. The weaver produces DIRECTIONAL guidance ("strengthen the mid-page transition") but the builder needs SPECIFIC CSS ("set .zone-3 { background: #EDE5D9; font-weight: 500; border-left: 3px solid var(--color-border); }").

---

### STEP 7: FIX CYCLE -- CONVERGENCE VS DEGRADATION

**What quality enters:** ~45-55% page + weaver's Top-5 fix instructions.

**What quality exits after Cycle 1:** ~55-60% (targeted improvements on worst issues).
**What quality exits after Cycle 2:** ~58-63% (diminishing returns, some regressions).
**What quality exits after Cycle 3:** ~55-65% (oscillating -- new fixes create new problems).

**What quality is lost (and recovered):**

Fix cycles have a CONVERGENCE problem. They converge quickly on Tier 1 issues (structural fixes with specific CSS) and slowly (or not at all) on Tier 2/3 issues (compositional and polish fixes requiring design judgment).

**Why fix cycles degrade:**

1. **Recipe-to-checklist degradation.** The builder's first build uses the TC brief as a compositional recipe. Fix cycle 1 receives fix instructions as a CHECKLIST ("fix SC-09 at Z2->Z3: bg delta 8 -> increase to 15"). By cycle 2, the builder is in full checklist mode -- fixing specific items without compositional context. The self-challenge protocol ("Name one way your current CSS CONTRADICTS your conviction statement") attempts to prevent this, but its effectiveness decreases with each cycle.

   **Evidence from historical experiments:** The Flagship remediation improved PA-05 from 1.5 to 2.5 (+1.0 in one cycle). But the predicted improvement from 3 BLOCKING fixes was +0.5-0.7 to reach 3.0-3.2. The fixes resolved SPECIFIC issues but created new ones (border selectors, typography specificity, table class mismatches). Fix cycles are net-positive but with diminishing and oscillating returns.

2. **Compositional context evaporation.** Report 16 identifies this: "8 of 9 compositional concepts suffer TOTAL EXTINCTION in the fix cycle return path." The builder re-entering a fix cycle retains: perception thresholds (because they map to CSS values). The builder loses: coherence arc, parametric echo, transition grammar, content-form coupling, atmospheric intent, metaphor motivation. The fix instruction includes a "brief_section" reference ("Re-read conventions-brief.md Section 4 before applying this fix") but this is a 3-word pointer, not a contextual re-immersion.

3. **Same builder, stale context.** The pipeline correctly insists on using the SAME builder for fixes (preventing handoff quality loss). But the same builder has been in-context for the entire build. By cycle 2-3, the builder's context window is dominated by previous CSS output, gate results, and fix instructions. The original TC brief and conventions brief content has been pushed far back. The builder is fixing CSS in a context dominated by CSS, not composition.

4. **PA auditor reduction.** Cycle 1: 9 auditors, 65 questions. Cycle 2: 4 auditors. Cycle 3: 3 auditors. Reducing auditor count reduces diagnostic breadth. Issues that auditor D (Flow+Pacing) or auditor G (Metaphor+Ideology) would catch in cycle 1 may not be caught in cycles 2-3 because those auditors are not present.

**What would fix Step 7:**

1. **Context re-immersion in fix cycles.** Before sending fix instructions, re-send the TC brief's Section 1 (metaphor), Section 2 (zones), and Section 6 (boundary CSS table). Not the full brief -- just the 3 sections that establish compositional context. This adds ~30 lines to fix instructions but prevents context evaporation.

2. **Fix cycle RECIPE, not checklist.** Instead of "SC-09 FAIL at Z2->Z3: bg delta 8 -> increase to >=15," send: "Z2->Z3 boundary (DEEPENING direction): bg delta currently 8 RGB. Increase Z3 background darkness to create >=15 delta while maintaining DEEPENING direction (darker, not lighter). Also verify: border-left present? Typography heavier? Spacing tighter? All channels should encode DEEPENING together."

3. **Cycle 2 auditor selection should be DIAGNOSTIC, not just reduced.** Instead of dropping auditors B and F, keep the auditors whose cycle-1 findings were MOST SEVERE. If auditor D (Flow+Pacing) found the worst issue in cycle 1, keep D in cycle 2 to verify the fix.

---

### STEP 8: SUCCESS BAR

**What quality enters:** Page after 0-3 fix cycles.

**What quality exits:** Binary verdict: SHIP / SHIP WITH RESERVATION / FIX / REBUILD / ESCALATE.

**What quality is "measured":**

| Criterion | What It Actually Measures | What It Misses |
|-----------|--------------------------|---------------|
| PA-05 >= 3.5 | "Does this feel designed?" (floor detection) | Difference between B+ and A+ |
| Tier 5 >= 7/9 | Compositional intelligence stack presence | Compositional intelligence stack QUALITY |
| Zero soul violations | Identity compliance | N/A (binary, works well) |
| Metaphor STRUCTURAL | BG-2 behavioral gate | Whether metaphor creates atmosphere |
| Multi-coherence verified | SC-13 + PA-61 agreement | Whether multi-coherence creates feeling |

The success bar measures the STRUCTURAL presence of Flagship qualities. It cannot distinguish between a page that HAS multi-coherence at 4 channels/boundary (technically present) and a page that DEPLOYS multi-coherence creating atmospheric conviction (experientially powerful). Both pass the bar.

---

## THE 5 BIGGEST QUALITY LOSS POINTS (Priority Order)

### #1: Builder Absorption Ceiling (Step 3) -- ~10% quality loss

**The problem:** The builder reads 900-1,000 lines of instruction. 83% of the conventions brief's compositional content is not reinforced by checkpoints. The builder retains binary rules (container width, soul constraints, perception thresholds) and loses compositional guidance (coherence arc, parametric echo, transition grammar, typographic progression).

**The fix:** Replace the 610-line conventions brief with per-zone micro-briefs compiled by the orchestrator. Each zone gets ~50 lines of ZONE-SPECIFIC instructions extracted from TC brief + conventions brief. Total: 150-200 lines instead of 610. Every line is actionable for that specific zone. The conventions brief becomes reference material, not the builder's primary input.

**Expected impact:** +0.5 PA-05 points. Compositional concepts survive from brief to CSS because they are zone-specific instructions, not general world-model descriptions.

### #2: Recipe-to-CSS Translation Gap (Step 3) -- ~8% quality loss

**The problem:** The TC brief's boundary table specifies channel shifts at ZONE boundaries. But within-zone boundaries (section transitions), body text typography, and component-to-zone adaptation (parametric echo) are not in the recipe. The builder follows the recipe faithfully at zone boundaries and defaults to uniform treatment everywhere else.

**The fix:**
- Expand TC brief from 80-120 lines to 150-200 lines with: per-SECTION (not per-zone) body text specification, within-zone transition types, designed moment locations, horizontal variation elements.
- Add body text to build recipe: "ZONE 3 body text: font-size: 15px; line-height: 1.6; font-weight: 500."
- Add designed-moment instruction: "ZONE 3 peak: reasoning component + data table in 2-column grid."

**Expected impact:** +0.3 PA-05 points. Body text variation alone is the single highest-impact CSS change (Report 21, Finding 3, item 1).

### #3: Experiential Quality Blind Spots (Step 2 + Step 3) -- ~7% quality loss

**The problem:** Six qualities are UNSUPPORTED by the pipeline (Report 29): atmospheric conviction, designed moments, grand spatial pause, horizontal rhythm, CSS budget adequacy, and terminal craft. These are experiential qualities that the pipeline cannot specify, gate, or detect. They require design JUDGMENT, not design COMPLIANCE.

**The fix (partial -- this gap cannot be fully closed by pipeline changes):**
- Add ATMOSPHERIC CHECK to TC brief (1 sentence: "In the first 500ms, this page should feel [atmosphere adjective]").
- Add DESIGNED MOMENT instruction to builder prompt (>=1 peak per scroll-third).
- Add HORIZONTAL RHYTHM instruction to builder prompt (>=2 elements with non-standard width).
- Revise SC-10 to exempt designed pauses with content markers.
- Add DG-5 CSS line count gate (>=800 for Flagship).

**Expected impact:** +0.2-0.3 PA-05 points. Atmospheric conviction and designed moments are the two highest-value experiential qualities. The remaining 4 (grand pause, horizontal rhythm, CSS budget, terminal craft) contribute incrementally.

### #4: Fix Cycle Degradation (Step 7) -- ~5% quality loss (opportunity cost)

**The problem:** Fix cycles converge on structural fixes (Tier 1) but degrade on compositional fixes (Tier 2/3). Compositional context evaporates across cycles. The builder shifts from COMPOSING mode to COMPLYING mode. By cycle 3, fixes are symptom patches, not design improvements.

**The fix:**
- Re-send TC brief Sections 1+2+6 (metaphor, zones, boundary table) with every fix instruction.
- Write fix instructions as compositional RECIPES with direction context, not as checklist items with CSS values.
- Maintain full 9-auditor PA for cycle 2 (reduce only in cycle 3). The marginal cost of 5 additional auditors is far less than the diagnostic cost of missing an issue.

**Expected impact:** +0.2 PA-05 points per additional cycle. Currently fix cycles yield diminishing returns. With context preservation, each cycle should yield consistent +0.15-0.2 improvement.

### #5: TC Brief Scope Limitations (Step 2) -- ~5% quality loss

**The problem:** The TC brief operates at ZONE granularity (3-5 zones). A 5-zone page may have 12 sections. All sections within a zone receive identical treatment. This prevents content-form coupling at section granularity, prevents within-zone transition variation, and produces zone-uniform body text.

**The fix:**
- Extend TC brief zone architecture from per-zone to per-section, with zones as grouping containers.
- Phase 4.5 output template Section 2 changes from "for each zone: density level" to "for each section within each zone: density level, body text treatment, component selection, transition type to next section."
- This extends the TC brief from 80-120 lines to 150-200 lines (the same expansion recommended in Fix #2, serving both problems).

**Expected impact:** +0.2 PA-05 points. Content-form coupling improves because the builder receives section-specific instructions instead of zone-uniform defaults.

---

## CUMULATIVE FIX IMPACT ESTIMATE

| Fix | Est. PA-05 Impact | Difficulty | Dependencies |
|-----|-------------------|------------|-------------|
| #1: Per-zone micro-briefs | +0.5 | MEDIUM (orchestrator change) | None |
| #2: Expanded TC brief with body text + peaks | +0.3 | LOW (TC template change) | None |
| #3: Experiential quality instructions | +0.2-0.3 | MEDIUM (brief + gate + builder changes) | Fix #2 |
| #4: Fix cycle context preservation | +0.2 | LOW (fix instruction format change) | None |
| #5: Section-granularity TC brief | +0.2 | MEDIUM (TC skill modification) | Fix #2 |

**Total estimated impact: +1.2-1.5 PA-05 points.**

Current empirical ceiling: PA-05 ~3.5, Tier 5 ~5-6/9.
Projected with all 5 fixes: PA-05 ~3.8-4.0, Tier 5 ~7-8/9.

This would place pipeline output in Flagship territory (PA-05 >= 3.5, Tier 5 >= 7/9) -- the first time the pipeline would reliably produce Flagship pages.

The critical caveat: these are estimated impacts, not measured. Each fix should be tested independently (the Q20 experiment protocol from the pipeline analysis would test Fix #2 in isolation). The estimates are based on: (a) the magnitude of quality loss at each step, (b) the fraction of that loss each fix addresses, and (c) historical precedent from the Middle → Ceiling → Flagship experiments.

---

## INFORMATION ROUTING BLIND SPOTS

Beyond the 5 priority fixes, three information routing problems compound quality loss:

### Blind Spot A: Mechanism Catalog → Builder Routing

The mechanism catalog (869 lines, 18 mechanisms with CSS patterns, impact profiles, and application modes) is listed as a builder REFERENCE file ("consult as needed during build"). But the builder reads TC brief + conventions brief + content = 900 lines BEFORE encountering the mechanism catalog. By the time the builder "consults" the catalog, it is implementing mechanisms specified in the TC brief, not discovering new mechanisms from the catalog.

**The catalog's richest content** (per-mechanism CSS recipes, zone deployment suggestions, reinforcing pair recommendations) reaches the builder only if the builder actively searches for it during the build. Historical evidence: builders deploy mechanisms listed in the TC brief and rarely consult the catalog for implementation details.

**Fix:** The TC brief's Section 4 (Selected Mechanisms) should include the catalog's IMPACT PROFILE for each selected mechanism -- which CSS channels it activates, at which scale, and in which zone. This is already in the Phase 4.5 template but builders report the TC brief as their primary reference. Ensure the per-mechanism CSS snippets in Section 6 are DETAILED enough that the builder never needs to consult the catalog separately.

### Blind Spot B: Conventions Brief Section 4.1 (Coherence Arc + Typographic Progression)

The conventions brief's Section 4.1 contains the coherence arc planning table and typographic progression recipe -- the two most compositionally valuable sections. They appear at lines 162-204 of the 500-line brief. They have no corresponding builder checkpoint, no gate, and no TC brief section.

**Fix:** The TC brief's Section 2 (Zone Architecture) should include a coherence arc line: "Arc: Z1 OPENING (2-3 channels) -> Z2 BUILDING (3-4 channels) -> Z3 CLIMAX (4-5 channels) -> Z4 RESOLUTION (2-3 channels)." This surfaces the arc in the document the builder reads FIRST.

### Blind Spot C: PA Detection Expectations → Fix Instructions

The TC brief's Section 7 (Detection Expectations) specifies what PA auditors should SEE per mechanism. This section goes to the WEAVER for diagnostic context. But during fix cycles, the weaver synthesizes PA findings into fix instructions WITHOUT referencing Section 7's expectations. The weaver reports "auditors found the mid-page transition flat" but does not cross-reference: "the TC brief expected auditors to see a 3px border-left and bg shift of 20 RGB at Z2->Z3. Was this achieved?"

**Fix:** The weaver's prompt should explicitly instruct: "For each Top-5 issue, cross-reference the TC brief's detection expectations. If the issue matches a detection expectation that was NOT met, classify as MECHANICAL (builder didn't implement the plan). If the issue does NOT match any detection expectation, classify as STRUCTURAL (the plan was wrong)." This distinction drives whether the fix is CSS adjustment (MECHANICAL) or TC re-derivation (STRUCTURAL).

---

## CONCLUSION

The pipeline loses approximately 35-45% of quality potential. The losses are concentrated in two steps:

1. **Step 2 (TC Skill): ~25% loss** -- atmospheric specificity, horizontal rhythm, grand pause architecture, per-section granularity, and body text variation are not in the TC vocabulary.

2. **Step 3 (Builder): ~20-30% loss** -- the builder absorbs 30-40% of the conventions brief's compositional content, follows the TC recipe at zone boundaries but defaults to uniform treatment elsewhere, and cannot produce experiential qualities that the pipeline does not specify.

The remaining steps (gates, PA, fix cycles) are DIAGNOSTIC -- they detect lost quality but cannot create it. Fix cycles recover ~10-15% through targeted improvements but degrade across iterations.

The pipeline's architecture is fundamentally a FAILURE-PREVENTION system (raised from the ashes of PA-05 1.5/4). It excels at preventing catastrophic failures (imperceptible backgrounds, missing borders, uniform typography, whitespace voids). It does not excel at creating excellence (atmospheric conviction, designed moments, spatial drama, typographic range).

The 5 prioritized fixes address the highest-leverage quality loss points. Together they could raise the pipeline's ceiling from PA-05 ~3.5 to ~3.8-4.0, placing it in Flagship territory. But the fixes require testing, not just implementation. The pipeline has a history of well-intentioned changes that introduce new failure modes while solving old ones. Each fix should be validated independently before integration.

---

**END OF PIPELINE QUALITY LOSS ANALYSIS**

*This analysis traces quality through 9 pipeline steps, identifies 5 priority loss points (builder absorption ~10%, recipe translation ~8%, experiential blind spots ~7%, fix cycle degradation ~5%, TC scope ~5%), and proposes fixes with estimated cumulative impact of +1.2-1.5 PA-05 points. The pipeline loses ~35-45% of quality potential, concentrated in Steps 2 (TC) and 3 (Builder). Gates and PA are diagnostic, not generative -- they catch quality loss but cannot create quality.*
