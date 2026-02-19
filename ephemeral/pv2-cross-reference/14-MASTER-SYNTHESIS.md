# PV2 CROSS-REFERENCE: MASTER SYNTHESIS

**Author:** Master Synthesizer (Opus 4.6)
**Date:** 2026-02-19
**Sources:** 23 cross-reference reports (01-13, 15-24), each cross-referencing the PV2 architecture diagram against the 41-file pipeline-analysis corpus
**User Directives:** ALWAYS FLAGSHIP, ALWAYS REMEDIATION-STYLE, FIRE AND FORGET, INPUT = existing markdown

---

## 1. CONVERGENCE MAP

Twenty-three independent auditors analyzing PV2 from different angles converge on these findings. Convergence strength is measured by how many reports independently reach the same conclusion.

### UNANIMOUS (23/23 reports agree)

**C-01: Two-layer verification is non-negotiable.**
Every report endorses the programmatic gates + perceptual audit architecture. Report 04 (perception gates) validates the specific gate design. Report 11 (paradigm telescope) calls it the "third instrument" beyond telescope and microscope. Report 20 (diagnosis) confirms it fixes 13/14 BLOCKING failures. Report 24 (meta-problem) identifies it as the #2 lesson from the corpus. No report questions whether both layers are needed.

**C-02: Perception thresholds are the pipeline's most important innovation.**
>=15 RGB for backgrounds, >=2px for font-size delta, >=0.5px (0.03em) for letter-spacing, <=108px stacked gap maximum. Report 04 traces these through every gate. Report 19 (preservation) finds they are embedded at 4 independent levels (recipe, gates, thresholds file, PA). Report 20 finds they fix the PRIMARY BLOCKING failure (F-09: zero perception in master prompt). Report 24 confirms the master prompt had literally zero perception terms across 963 lines.

**C-03: Recipe format is correct for builder agents.**
Reports 03, 07, 10, 20, 21, 22 all validate that recipe format (action verbs, sequential phases, specific CSS values) outperforms checklist format (judgment verbs, constraint lists, abstract rules). Report 22 measures the verb inversion: master prompt 2.23:1 judgment-to-action ratio, PV2 ~0.5:1. Report 03 confirms File 42 is genuinely recipe-format (8:1 recipe-to-checklist phase ratio, 63 action verbs vs 42 checklist verbs).

**C-04: The 75-line builder visibility cap was the most structurally damaging design choice.**
Reports 20, 22, 03, 07, 19 all identify its elimination as resolving 4 BLOCKING failures simultaneously. The builder now reads ~650 lines of recipe + build plan + 5 reference files. Report 22 finds cross-references dropped from 8-12 (master) to 0-2 (PV2).

### STRONG (18+ reports agree)

**C-05: ALWAYS FLAGSHIP simplifies architecture.**
Reports 01, 06, 12, 18, 22 independently calculate the simplification: ~145-line orchestrator reduction (35%), 542 fewer total lines (32%), elimination of all tier-conditional branching. Report 12 is the definitive analysis. One path, maximum intensity, universal quality floor. TC always runs Phases 0-3.5. All 16 gates always BLOCKING. Always 9 PA auditors. Always Opus builder.

**C-06: Single Opus builder with full context outperforms multiple constrained agents.**
Reports 05, 20, 21, 22, 23 agree. The remediation proved this pattern. PV2 preserves it with the synthesis: multi-agent ANALYSIS (TC planner), single-agent EXECUTION (Opus builder), multi-agent VERIFICATION (9 PA auditors). Report 22 calls this the "manifest pattern" -- the optimal team topology.

**C-07: The operational recipe (~650 lines) must be extracted from File 42.**
Reports 02, 03, 07, 18, 21 agree on the extraction. Report 07 confirms 73.8% LOSSLESS compression (3.7x improvement over the master prompt's ~20%). Report 03 validates the recipe's 8:1 recipe-to-checklist ratio. Report 18 provides the detailed change-by-change checklist for codification.

**C-08: Gate 6 (meta-to-output ratio) is VIOLATED at infinity:1.**
Reports 08, 09, 16 all flag this. Zero permanent lines have been written. The corpus is 900K+ lines of analysis producing 0 lines of permanent pipeline. This synthesis is itself meta-output. The next action MUST be codification, not more analysis.

### MODERATE (12-17 reports agree)

**C-09: Agent communication is essential for quality.**
Reports 05, 08, 09, 21 agree. The missing footer was the smoking gun: builder couldn't ask planner. PV2's 4-wave architecture + file-bus protocol addresses this. Report 05 designs the full communication-as-tasks protocol with 5 message types and 6 banned types.

**C-10: The 4-wave architecture (TC -> Build -> PA -> Fix) is sound.**
Reports 01, 06, 12, 22 validate this structure. Wave 0: TC content analysis (~30-60 min). Wave 1: Opus builder executes 9-phase recipe (~90-150 min). Wave 2: Mode 4 PA with 9 auditors (~30-45 min). Wave 3: Fix integration, max 3 cycles (~30-60 min). Total: 75-215 min per page.

**C-11: Per-category mechanism minimums replace "sample 2-4."**
Reports 01, 03, 18, 21 confirm. 1+ Spatial, 1+ Temporal, 1+ Material, 1+ Behavioral, 1+ Relational. Validated at the handoff gate between TC and builder. Already applied to TC SKILL.md by the enrichment execution team.

---

## 2. CONTRADICTION MAP

Despite broad convergence, the 23 reports surface contradictions that must be resolved before codification.

### BLOCKING CONTRADICTIONS (must resolve)

**X-01: Stacked gap threshold — THREE conflicting values.**
- Report 18 (codification checklist): 192px (from original codification map)
- Report 15 (relationship map): 120px (from remediation)
- Reports 01, 04, 12, 20 (architecture): 108px (from diagram Decision 2)

**RESOLUTION:** 108px is canonical for ALWAYS FLAGSHIP. The architecture diagram's Decision 2 explicitly states: "108px for Flagship, 120px for Middle/Ceiling. 192px gate was too loose -- removed." Under ALWAYS FLAGSHIP, only 108px exists. All references to 192px and 120px in codification artifacts must be updated.

**X-02: Background delta — 10 RGB vs 15 RGB.**
- Report 03 (recipe dimension): File 42 specifies 10 RGB
- Reports 01, 04, 12, 20 (architecture): 15 RGB

**RESOLUTION:** 15 RGB is canonical. Architecture Decision 1: "15 RGB. All template colors already satisfy this. 10 RGB is imperceptible without a color picker -- the exact failure mode we diagnosed." File 42 must be updated during extraction to operational-recipe.md.

**X-03: Letter-spacing threshold — 0.025em vs 0.03em.**
- Report 03: File 42 references 0.025em in some phases
- Report 04 (architecture): 0.03em (0.5px at 16px base)

**RESOLUTION:** 0.03em is canonical. Architecture Decision 7 resolves this explicitly. All recipe phases must use 0.03em.

**X-04: Channel taxonomy — two different naming schemes.**
- Report 21 (paradigm shift): Master prompt used Ch1-Ch7 (Chromatic, Typographic, Spatial, Structural, Density, Rhythmic, Intentional)
- Remediation used different taxonomy (Typographic, Chromatic, Spatial, Structural, Temporal, Behavioral, Material)
- PV2 architecture references "6 CSS channels" without defining them

**RESOLUTION (from Report 21):** Adopt the remediation's taxonomy. It is more measurable (Behavioral and Material have CSS properties; Rhythmic and Intentional do not). Define in perception-thresholds.md alongside the delta table. The 6 operational channels are: Chromatic, Typographic, Spatial, Structural, Behavioral, Material.

**X-05: Mechanism category naming — two different naming schemes.**
- Report 18: Codification map uses mechanism-catalog names (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Nav)
- Architecture diagram uses: Spatial, Temporal, Material, Behavioral, Relational

**RESOLUTION:** Reconcile to one canonical set. The mechanism-catalog.md names are the source of truth (they name the actual mechanisms). The architecture diagram's names were an abstraction. Use mechanism-catalog names in all permanent files.

### SIGNIFICANT CONTRADICTIONS (should resolve)

**X-06: Recipe length — 650 vs 1,746 lines.**
- Reports 01, 03, 12: "~650 lines" extracted from File 42
- File 42 itself: 1,746 lines

**RESOLUTION:** Both are correct. File 42 is 1,746 lines containing analysis + recipe. The operational-recipe.md is the ~650-line EXTRACTION of the recipe content only, stripping team architecture analysis, risk assessments, evidence chains, and integration analysis (~1,100 lines removed). Report 24 confirms the compression is 19:1 from File 42 to recipe, which is reasonable.

**X-07: TC Phase 4 fate — stays vs replaced.**
- Some reports treat TC's existing Phase 4 as continuing
- Others say the recipe replaces Phase 4's function

**RESOLUTION:** TC Phases 0-3.5 remain the TC SKILL's responsibility (content analysis, tension derivation, mechanism selection, metaphor collapse). The recipe's 9 phases (0-8) are the BUILDER's responsibility (CSS/HTML execution). These are different Phase 4s in different documents. TC's Phase 4 ("mechanism extraction") feeds into the recipe; the recipe's Phase 4 ("structural borders + dividers") consumes TC's output. No replacement needed -- just clarity in naming.

**X-08: Conviction preamble — helps or hurts builders.**
- Report 22 (deeper architecture): "Conviction helps planners but hurts builders"
- Reports 21 (paradigm shift), 24 (meta-problem): 20-line preamble is minimal and may not be enough
- Report 13 (contrarian): Questions whether any conviction is needed

**RESOLUTION:** Keep the 20-line preamble but route it to the planner, not the builder. The builder reads the recipe (action verbs, specific values). The planner reads the preamble (IS/IS NOT axes, anti-scale model). The builder receives directional guidance THROUGH the build plan, not through conviction language. This matches Report 22's finding and Report 11's telescope/microscope model: conviction is telescope language, builders need microscope language.

### NOTED BUT NOT BLOCKING

**X-09: PA auditor count for non-Flagship tiers.**
Under ALWAYS FLAGSHIP, this dissolves entirely. Always 9 auditors, always Mode 4, always all 48 questions.

**X-10: Font stack — Instrument Serif vs Georgia.**
Report 15 noted this discrepancy. Under PV2, tokens.css is the source of truth. The font trinity (Instrument Serif for display, system serif for body, system sans for UI) is defined in one place.

---

## 3. ALWAYS-FLAGSHIP IMPLICATIONS

The user's declaration eliminates tier routing. Here is what changes across the entire PV2 architecture.

### Architecture Simplification

| Component | 3-Tier Version | ALWAYS FLAGSHIP |
|-----------|---------------|-----------------|
| Orchestrator | ~350 lines with tier classification + conditional routing | ~205 lines, single path |
| TC invocation | Conditional (Phases 0-2 for Middle, 0-3.5 for Ceiling/Flagship) | Always Phases 0-3.5 with Addition Test fast exit |
| Handoff validation | 3 different gate sets | 1 gate set, all BLOCKING |
| Builder model | Conditional (Sonnet for Middle, Opus for Ceiling+) | Always Opus |
| Builder reads | Conditional file set | Always: recipe + build plan + tokens.css + prohibitions.md + merged-components.css + mechanism-catalog.md (FULL) |
| Programmatic gates | 12 gates with tier-specific thresholds | 12 gates, all BLOCKING, tightest thresholds (108px) |
| PA mode | Mode 2/3/4 by tier | Always Mode 4 (9 auditors, 48 questions) |
| Fix cycles | 0/1/3 by tier | Always max 3 + user escalation |
| Checkpoints | Optional/mandatory by tier | Always mandatory at Phases 0, 1, 3, 4, 8 |

**Net reduction:** ~145 lines of orchestrator logic, ~542 total lines eliminated (32% reduction).

### Dead Specification Under ALWAYS FLAGSHIP (from Report 09)

~40% of the existing PV2 architecture documentation describes tier-conditional behavior that no longer applies. During codification, ALL tier-conditional language must be rewritten as unconditional Flagship specifications. Report 18 identifies 5 of 10 codification changes that need ALWAYS FLAGSHIP modification.

### Build Time

Report 12 calculates: 75-215 minutes per page under ALWAYS FLAGSHIP. For comparison:
- Middle tier: 25-75 min
- Ceiling tier: 75-150 min
- Flagship: 130-260 min (pre-simplification)

The 75-215 min range (post-simplification) is acceptable for fire-and-forget. The user submits `/build-page content.md` and checks back in 2-4 hours.

### Cost Implications

Report 23 warns: running the heaviest pipeline on every page means MORE opportunities for failure, HIGHER cost per failure, and NO graceful degradation. The mitigation: TC's Addition Test fast exit prevents forced metaphors on low-tension content, and zone count scales with word count (< 200 words = 2 zones).

Report 23 also identifies a "graceful floor" gap: for pages with fewer than 200 words or fewer than 4 sections, some gates (fractal coherence, reinforcing pairs) may be structurally impossible to satisfy. **Recommendation:** Add a content-complexity classifier that relaxes specific gates (not all) for genuinely simple content, preserving the Flagship quality INTENT while acknowledging content-dependent gate applicability.

---

## 4. TOP 5 THINGS THE ARCHITECTURE GETS RIGHT

### RIGHT-1: Recipe Format Eliminates the Guardrail Factory

The master prompt had a 7.9:1 guardrail-to-playbook ratio. Builders were told what NOT to do but almost never what TO DO. PV2's operational recipe inverts this: action verbs ("Set," "Apply," "Deploy," "Assess"), specific CSS values (hex codes, pixel values), sequential phases (0-8). Report 22 measures the verb inversion: the orchestrator achieves ~0.5:1 judgment-to-action ratio (down from 2.23:1). Report 20 confirms this fixes 13/14 BLOCKING failures.

The recipe IS the playbook. It is the defining artifact of PV2.

### RIGHT-2: Perception at Every Verification Layer

The master prompt had zero perception terms in 963 lines. PV2 embeds perception at 4 layers:
1. **Recipe (inline):** Per-phase "Can you SEE?" checks with expected observations
2. **Gate runner (programmatic):** 12 binary checks with getComputedStyle measurements
3. **Thresholds file (reference):** Canonical perception threshold table
4. **PA (perceptual):** 9 fresh-eyes auditors evaluating screenshots, not code

Report 20 calls this "the most important innovation." Report 19 confirms perception thresholds are the most improved foundation (from zero to quadruple embedding). The ontological gap (compliance without perception) is closed.

### RIGHT-3: Correct Instrument at Every Phase

Report 22 maps PV2 to File 24's telescope/microscope model and finds perfect alignment:
- **Telescope (TC):** Declarative specification for creative phases -- content analysis, mechanism selection, metaphor derivation
- **Microscope (recipe):** Imperative procedure for mechanical phases -- HTML skeleton, CSS execution, spatial verification
- **Periscope (PA):** Neither telescope nor microscope -- human eye simulation for gestalt quality evaluation

Every phase uses the correct instrument. PV2 achieves the "declarative intent with imperative scaffolding" that File 24 called for, PLUS adds the PA as a third instrument that File 24 didn't anticipate.

### RIGHT-4: Foundation Preservation Rate EXCEEDS Remediation

Report 19 traces all 39 foundations and 11 philosophies through PV2:
- 35/39 foundations fully preserved or improved (90%, up from 89%)
- 12 foundations IMPROVED beyond remediation level
- 4 previously-N/A foundations RESTORED (communication, PA, recovery, TC routing)
- 11/11 philosophies preserved
- Soul constraint enforcement: 4 independent layers (builder reads prohibitions, gates enforce, PA catches visual breaches, recipe Phase 8D checklist)
- 2 at-risk foundations (S-17 first viewport textures, signal-to-silence ratio) -- same as remediation
- 0 foundations dropped

PV2 preserves everything the remediation achieved and restores everything the remediation couldn't address (because it was single-agent, single-pass).

### RIGHT-5: The 4-Wave Architecture Solves the Communication Failure

The flagship experiment's missing footer was the smoking gun: builder couldn't ask planner. PV2's 4-wave architecture makes communication structural:
- Wave 0 (TC) outputs `_build-plan.md` -- the complete manifest
- Wave 1 (Build) receives manifest + recipe -- builder has EVERYTHING
- Mandatory checkpoints at 5 phases create structural communication points
- Wave 2 (PA) runs with zero build context -- fresh-eyes
- Wave 3 (Fix) addresses top-3 blocking issues with re-verification

Report 05 designs the full communication protocol: 5 message types (plan-delivery, clarification-request, build-status, quality-gate, fix-directive) and 6 banned types (casual chat, opinion polling, progress percentage, meta-commentary, off-topic, copy-paste-without-synthesis). The file-bus + task-dependency enforcement makes skipping structurally impossible.

---

## 5. TOP 5 THINGS THE ARCHITECTURE GETS WRONG OR MISSES

### WRONG-1: Recipe Ceiling at 3/4 -- No Path to 4/4

Reports 11, 13, 21, 23, 24 all identify this risk from different angles. The recipe reliably produces COMPOSED (3/4) pages. But DESIGNED (4/4) requires compositional fluency that recipes cannot encode. Report 24's nuance survival audit finds that the 6 intentionality dimensions separating 3/4 from 4/4 are "ENTIRELY absent from our analysis."

The architecture aspires to 4/4 for Flagship (the only tier under ALWAYS FLAGSHIP) but provides no mechanism for exceeding the recipe's structural ceiling. Report 22 warns: "3/4 is a ceiling within the procedure paradigm." Report 24 finds PV2 falls into adversarial prediction #4: "Expect recipe to produce 4/4."

**The gap:** When all gates PASS and PA-05 = 3/4, what does the pipeline DO? The current answer is "3 fix cycles then escalate to user." But fix cycles assume execution errors, not recipe ceiling. PV2 needs a compositional escalation path: "If all gates PASS and PA-05 = 3/4, escalate to TC for metaphor-driven adaptation of zone semantics, mechanism coupling, and structural metaphor reinforcement."

This is the #1 risk for ALWAYS FLAGSHIP.

### WRONG-2: Cascade Value Table Missing as Required Deliverable

Reports 09, 15, 21 identify this convergently. File 10 calls the cascade value table "the single most operationally useful invention" -- a per-transition matrix showing exact computed CSS values at every section boundary. It makes coherence verifiable, stacking visible, and reinforcing pairs testable.

PV2's architecture does NOT require the cascade value table as a builder deliverable. The gate runner checks computed styles via Playwright, but doesn't require the builder to PRODUCE a coherence artifact. This means coherence remains in the "claim it" zone rather than the "prove it" zone.

**Fix:** Add to Recipe Phase 8: "REQUIRED DELIVERABLE: Build a cascade value table. Record computed CSS values (background, font-size, font-weight, letter-spacing, border-left, paragraph margin, text color) at every section boundary. Verify >= 3 channels shift at every transition."

### WRONG-3: 73% of Critical Nuances Lost in Compression

Report 24 traces 50 critical nuances from File 35 through PV2's permanent files. Only 13.5/50 survive (27%). The loss is catastrophic in boundary conditions (5% survival), analytical calibration (5% survival), and strategic awareness (15% survival). Procedural knowledge survives at ~55%.

The worst losses:
- Zero boundary conditions: "binary > judgment" has 1 counter-example; "recipe > checklist" is really "concrete > abstract"; PA-05 2.5/4 is IMPROVEMENT not SUCCESS; N=2 limitation on all conclusions
- Zero confidence calibration: every finding reads with equal authority
- Zero self-tests: the cheapest partial-transfer mechanism is entirely absent
- The intentionality gap: the layer separating 3/4 from 4/4 is unaddressed

Report 24's verdict: "PV2 does NOT reproduce the 50:1 failure at the PERCEPTION layer. But it creates a DIFFERENT compression failure at a HIGHER layer -- the loss of experiential calibration and boundary awareness."

### WRONG-4: Content Generalizability is a Hypothesis, Not a Finding

Report 23 delivers the most important caveat: PV2's entire evidence base comes from 2 experiments on 1 content type (RESEARCH-SYNTHESIS). The 3-variable confound (recipe format + value specificity + perception thresholds) is unresolved. The brownfield-to-greenfield extrapolation is untested.

Under ALWAYS FLAGSHIP, this matters more:
- TC's metaphor derivation is UNTESTED on low-tension content (API docs, changelogs, migration guides)
- The recipe's template values (17px/15px/16px typography, warm-cool-warm arc) derive from RESEARCH-SYNTHESIS
- 4 of 12 content-specific decisions (callout semantics, heading transformation, intentionality, density arc) lack structured support

Report 23's honest framing: "PV2 under ALWAYS FLAGSHIP will reliably produce PA-05 >= 3/4 for content SIMILAR TO RESEARCH-SYNTHESIS. For other content types, the outcome is unpredictable."

### WRONG-5: Metaphor Self-Evaluation Bias (F-40) -- The One Remaining BLOCKING Failure

Report 20 finds PV2 fixes 13/14 BLOCKING failures. The one remaining: F-40, metaphor structural test. TC Phase 3.5 still relies on the planner self-assessing whether the metaphor is "structural" vs "announced." The Mode 4 PA catches this post-build, but at the cost of a potentially wasted 40-60 min build cycle.

Report 20's recommendation: Add a fresh-eyes metaphor validation step between Wave 0 (TC) and Wave 1 (Build). One Opus agent reads the metaphor description WITHOUT the tension derivation. Binary gate: STRUCTURAL / ANNOUNCED. Cost: ~5-10 min. Savings: prevents a full build on a doomed metaphor.

---

## 6. REVISED PV2 ARCHITECTURE

What PV2 concretely looks like under ALWAYS FLAGSHIP, incorporating the 23 reports' corrections.

### The User Journey (Fire and Forget)

```
USER: /build-page path/to/content.md

[Pipeline runs autonomously. User checks back in 2-4 hours.]

OUTPUT:
  path/to/output.html        -- the designed page
  path/to/_pa-report.md      -- perceptual audit results
  path/to/_build-log.md      -- build decisions + gate results
```

### The Pipeline (5 Waves)

**Wave 0: Content Analysis (TC Planner, Opus, ~30-60 min)**

TC Phases 0-3.5 run on the content markdown:
- Phase 0: Content structure analysis, zone architecture (2-5 zones)
- Phase 1: Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes)
- Phase 2: Tension derivation. Addition Test: if content has no genuine tension, fast-exit to FLAT mode (zones + recipe, no metaphor)
- Phase 3: Metaphor collapse (if tensions exist)
- Phase 3.5: Lock-in gate

Output: `_build-plan.md` containing zone count, section inventory, mechanism deployment per category (S:1+, T:1+, M:1+, B:1+, R:1+), isomorphism table (if metaphor exists), transition plan, builder warnings.

**Wave 0.5: Metaphor Validation (Fresh-Eyes Opus, ~5-10 min)** [NEW]

One Opus agent reads ONLY the metaphor description from `_build-plan.md`. Zero tension derivation context. Binary assessment: STRUCTURAL (metaphor suggests specific visual forms) or ANNOUNCED (metaphor is an abstract label). If ANNOUNCED, return to TC planner for revision or fast-exit to FLAT mode.

**Wave 0.9: Handoff Validation Gate** [BINARY]

Before builder starts, verify `_build-plan.md` contains:
- [ ] Zone count 2-5?
- [ ] Background colors listed with >= 15 RGB delta between adjacent zones?
- [ ] At least 2 grid layouts assigned?
- [ ] Per-category mechanism minimums met (S:1+, T:1+, M:1+, B:1+, R:1+)?
- [ ] Transition plan with >= 3 types (SMOOTH/BRIDGE/BREATHING)?

All must PASS. Any FAIL returns to TC planner.

**Wave 1: Build Execution (Single Opus Builder, ~90-150 min)**

Builder reads:
1. `operational-recipe.md` (~650 lines, 9-phase sequential recipe)
2. `_build-plan.md` (from TC planner)
3. `tokens.css` (design system tokens)
4. `prohibitions.md` (soul constraints)
5. `merged-components.css` (component library)
6. `mechanism-catalog.md` (FULL -- all 18 mechanisms)

Builder executes 9 phases sequentially:
- Phase 0: Content analysis + zone architecture (from build plan)
- Phase 1: HTML skeleton with semantic markup, component library classes, grid layouts
- Phase 2: CSS reset + soul enforcement + base typography
- Phase 3: Zone backgrounds (>= 15 RGB delta between adjacent zones)
- Phase 4: Structural borders + dividers + 3 transition types + callout variants
- Phase 5: Typography zones (3-zone arc, >= 2px font-size delta)
- Phase 6: Element-level richness (hover, selection, interactive moments)
- Phase 7: Accessibility (skip link, ARIA landmarks >= 3, focus styles, reduced motion, responsive breakpoints, print styles)
- Phase 8: Verification (self-check + cascade value table deliverable)

Mandatory planner approval at Phases 0, 1, 3, 4, 8.

**Wave 2: Verification (Dual Layer, ~30-45 min)**

Layer 1 -- Programmatic Gates (12 binary checks via Playwright getComputedStyle):
| Gate | Check | Threshold |
|------|-------|-----------|
| SC-01 | Container width | 940-960px |
| SC-02 | Soul properties | border-radius: 0, box-shadow: none |
| SC-03 | Font trinity | Only Instrument Serif, system serif, system sans |
| SC-04 | Warm palette | R >= G >= B for all colors |
| SC-05 | No pure extremes | No #000000 or #FFFFFF |
| SC-06 | ARIA landmarks | >= 3 |
| SC-07 | Skip link | Present |
| SC-08 | Component library | Library classes used |
| SC-09 | Background delta | >= 15 RGB between adjacent zones |
| SC-10 | Stacked gap | <= 108px total at section boundaries |
| SC-11 | Font-size zones | >= 2px delta between zones |
| SC-12 | Zone count | 2-5 zones |

ALL gates BLOCKING. Any FAIL triggers fix cycle.

Layer 2 -- Perceptual Audit (Mode 4):
- Team lead pre-captures ALL screenshots (cold look + scroll-through at 1440px and 768px)
- 9 independent Opus auditors, each assigned specific PA questions from the 48-question set
- Auditors read ONLY screenshots + question assignments. ZERO build context.
- PA-05 score: Does this feel DESIGNED? (1-4 scale)
- Threshold: PA-05 >= 3/4 to SHIP

**Wave 3: Fix Integration (max 3 cycles, ~30-60 min)**

Top-3 blocking issues from PA weaver report. Builder applies fixes. Quick 2-auditor re-verification after each cycle.

Decision matrix:
- All gates PASS + PA-05 >= 3/4 -> **SHIP**
- Gates PASS + PA-05 = 3/4 exactly -> **SHIP** (meets threshold)
- Gates PASS + PA-05 < 3/4 after 3 cycles -> **ESCALATE** to user with PA report
- Any gate FAIL after 3 cycles -> **ESCALATE** to user with gate results

Kill criteria (from architecture Decision 5):
- 3 consecutive builds produce PA-05 < 3/4 -> recipe failure, investigate
- Build exceeds 6 hours -> timeout, escalate
- Builder produces < 500 lines HTML -> structural failure, escalate

### Files That Must Exist (Permanent)

| File | Lines | Purpose | Location |
|------|-------|---------|----------|
| `/build-page` orchestrator | ~205 | Fire-and-forget entry point | `~/.claude/skills/build-page/SKILL.md` |
| `operational-recipe.md` | ~650 | 9-phase build recipe | `design-system/compositional-core/operational-recipe.md` |
| `perception-thresholds.md` | ~80 | Canonical threshold table + channel definitions | `design-system/compositional-core/perception-thresholds.md` |
| Gate runner (SC-01 to SC-12) | ~300 | Playwright binary verification | `design-system/compositional-core/gate-runner.js` |
| Existing files (enriched) | various | tokens.css, prohibitions.md, merged-components.css, mechanism-catalog.md, TC SKILL.md, PA SKILL.md | existing locations |

**Total new permanent lines: ~1,235** (orchestrator 205 + recipe 650 + thresholds 80 + gate runner 300)
**Plus ~370 lines of edits** to existing files (8 edits from codification map, corrected for ALWAYS FLAGSHIP per Report 18)

---

## 7. ANSWERS TO THE USER'S CORE QUESTIONS

### Q: What does PV2 concretely look like?

A single `/build-page content.md` command that:
1. Invokes TC on your markdown (30-60 min, autonomous)
2. Validates the build plan (binary gate, autonomous)
3. Sends plan + recipe to an Opus builder (90-150 min, autonomous)
4. Runs 12 programmatic gates + 9 fresh-eyes auditors (30-45 min, autonomous)
5. Fixes up to 3 blocking issues (30-60 min, autonomous)
6. Outputs an HTML file + PA report at deterministic paths

You give it a markdown file. You get back a designed HTML page. Fire and forget.

### Q: How does this differ from what we had?

The master prompt was a 963-line constraint checklist that told 21 agents what NOT to do. PV2 is a 650-line recipe that tells 1 Opus builder what TO DO, verified by 12 binary gates and 9 fresh-eyes auditors.

| Dimension | Master Prompt | PV2 |
|-----------|--------------|-----|
| Builder input | 75-line constraint slice | ~650-line recipe + 5 reference files |
| Verification | Self-assessment | 12 programmatic gates + 9 PA auditors |
| Perception | Zero terms | 4-layer embedding |
| Communication | Zero messages | File-bus + mandatory checkpoints |
| Format | Checklist (judgment verbs) | Recipe (action verbs) |
| Builder model | Sonnet | Opus |
| Quality floor | PA-05 1.5/4 | PA-05 >= 3/4 (projected) |

### Q: What is the evidence this works?

Two experiments + one supporting experiment:
- **Middle-tier experiment:** PA-05 4/4 (recipe format, simpler content, no metaphor)
- **Flagship remediation:** PA-05 2.5/4 (recipe format, complex content, brownfield)
- **Flagship experiment:** PA-05 1.5/4 (checklist format, complex content, greenfield -- the CONTROL)

The improvement from 1.5/4 (checklist) to 2.5/4 (recipe) is the primary evidence. The middle-tier 4/4 suggests the ceiling is higher for greenfield builds with recipe format.

**Caveat (from Reports 23, 24):** This is N=2 with a 3-variable confound. The combined approach (recipe + specificity + perception) worked, but which variable caused the improvement is unresolved. PV2 codifies all three.

### Q: What's the risk?

1. **Recipe ceiling at 3/4.** The recipe reliably produces COMPOSED pages. DESIGNED (4/4) may require compositional fluency beyond recipes.
2. **Content generalizability.** Untested on non-research-synthesis content (API docs, tutorials, changelogs).
3. **Metaphor self-evaluation.** TC's Phase 3.5 is still self-assessed (Wave 0.5 mitigates).
4. **N=2 evidence base.** All predictions derive from 2 experiments.

### Q: What should happen next?

Codify. Build. Test. In that order.

---

## 8. CONTRARIAN INTEGRATION

Report 13 (contrarian challenge) provides the strongest opposition to PV2's approach. Its arguments must be addressed, not dismissed.

### Contrarian Thesis: "PV2 is a 1,605-line solution to a 300-line problem."

Report 13 argues:
- CD-006 scored 39/40 with NO recipe and NO perception thresholds
- A 230-line alternative (soul gates + perception thresholds + Opus builder + "build something beautiful") might outperform PV2
- PV2's 660:1 meta-to-output ratio proves the analysis has consumed its own purpose
- The pipeline should BUILD A PAGE, not produce another analysis document

### What the Contrarian Gets Right

**The meta-ratio critique is devastating.** Gate 6 (meta:output <= 10:1) is at infinity:1. Every report in this cross-reference -- including this synthesis -- adds to the meta side. Report 13 is correct that the next action MUST be codification and building, not more analysis.

**CD-006 IS an unexamined benchmark.** Report 23 flags this too: CD-006 was built WITHOUT a recipe and WITHOUT perception thresholds. If the pipeline's theory is "recipe + thresholds = quality," CD-006 contradicts it. Something else made CD-006 great (Opus compositional fluency? Content-form fit? Builder creative freedom?). PV2 does not account for this.

**The 230-line alternative deserves testing.** Report 13's proposal (soul gates + perception thresholds + Opus builder + conviction + no recipe) would resolve the 3-variable confound. If it produces PA-05 >= 3/4, PV2's recipe is unnecessary complexity. If it doesn't, the recipe's value is proven.

### What the Contrarian Gets Wrong

**CD-006 was built in a DIFFERENT context.** CD-006 was built during exploration, with a human iterating with an Opus instance. The user doesn't want to iterate -- they want fire and forget. CD-006's process is not reproducible in an autonomous pipeline.

**The 230-line alternative has no verification.** Report 13 proposes "Opus builder + soul gates + perception thresholds." But who verifies? Without Mode 4 PA, the whitespace void (9/9 auditors flagged) would ship. Without the recipe's sequential phases, the builder might produce single-column HTML (the flagship experiment's exact failure). The recipe's value isn't just instructions -- it's SEQUENCED instructions that prevent compound failures.

**"Build something beautiful" is a judgment instruction.** Report 22 proves judgment instructions achieve ~0% compliance. "Build something beautiful" is the master prompt's philosophy translated to fewer words. It would produce the same failure: technically compliant, perceptually flat.

### Synthesis Position

The contrarian's core insight is valid: **PV2 may be over-engineered for the problem.** The honest response is not to dismiss this but to TEST it. The first PV2 build will produce data. If PA-05 >= 3/4 on the first try, PV2 is validated. If not, the 230-line alternative becomes the cheapest diagnostic experiment.

The contrarian's actionable demand -- BUILD A PAGE, STOP ANALYZING -- is the correct next step regardless. It is also what Report 17 (Q20 experiment) recommends: "Skip Q20, codify now."

---

## 9. NEXT STEPS

### Step 1: CODIFY (immediate, ~4-6 hours)

Write the 4 new permanent files:
1. `/build-page` orchestrator (~205 lines) -- fire-and-forget entry point
2. `operational-recipe.md` (~650 lines) -- extracted from File 42, corrected for ALWAYS FLAGSHIP:
   - All stacked gap references: 108px (not 192px)
   - All background deltas: >= 15 RGB (not 10)
   - All letter-spacing: >= 0.03em (not 0.025em)
   - All tier conditionals removed (Flagship only)
   - Cascade value table as required Phase 8 deliverable [NEW]
   - 3 self-tests in Phase 0 warm-up [NEW, from Report 24]
3. `perception-thresholds.md` (~80 lines) -- threshold table + 6-channel definition
4. `gate-runner.js` (~300 lines) -- 12 binary gates including SC-09, SC-10 at 108px, SC-11, SC-12

Apply 8 edits to existing files (from Report 18's checklist, corrected for ALWAYS FLAGSHIP):
- Recipe format framing in TC SKILL.md (Change 1)
- Perception thresholds in PA SKILL.md (Change 2, 108px)
- Builder CSS recipes in CLAUDE.md (Change 3, unconditional)
- Gate runner deltas (Change 4, 108px + SC-11 + SC-12)
- S-09 stacking in semantic-rules.md + tokens.css (Change 5, 108px)
- Agent communication protocol in CLAUDE.md (Change 8, 6+ messages)
- Opus builder in CLAUDE.md (Change 9, unconditional)
- Builder visibility in CLAUDE.md (Change 10, full catalog)

Changes 6 and 7 already applied (per-category minimums, 3-transition minimum).

### Step 2: BUILD ONE PAGE (immediately after codification, ~3-4 hours)

Run `/build-page` on RESEARCH-SYNTHESIS content (the known case). This is the validation build:
- Confirms the pipeline runs end-to-end autonomously
- Produces the first real PA-05 score under PV2
- Identifies operational issues (file paths, gate thresholds, timing)
- Closes Gate 6 (meta:output ratio drops from infinity to ~730:1, still bad but finite)

### Step 3: BUILD ON DIVERSE CONTENT (next 1-2 weeks)

Build 3-5 pages on different content types:
- Research synthesis (known case, establishes baseline)
- Tutorial/how-to (sequential, procedural)
- Conceptual guide (exploratory, definitional)
- API reference (structured, repetitive)
- Changelog/release notes (short, factual)

Track PA-05 per content type. If PA-05 >= 3/4 for >= 4 of 5, generalizability is empirically validated. If PA-05 drops for > 1 content type, recipe needs content-type-specific enrichments.

### Step 4: EVALUATE AND ITERATE (ongoing)

After 5 builds:
- Re-evaluate recipe values (are the typography/spacing zones content-specific or universal?)
- Check PA-05 trend (stable? improving? declining?)
- Run Report 24's recommended self-tests on the recipe itself (verb ratio, negation density)
- Consider the contrarian's 230-line alternative if recipe ceiling confirmed at 3/4

### Optional: Q20 Experiment

Report 17 recommends skipping Q20 under ALWAYS FLAGSHIP (5 of 7 scenarios produce zero actionable change). If curiosity demands it: add ONLY perception thresholds to the master prompt and re-run. ~2-3 hours. Would isolate the perception variable from the recipe variable.

---

## APPENDIX A: REPORT-BY-REPORT CONTRIBUTION MATRIX

| Report | Primary Contribution | Key Finding for Synthesis |
|--------|---------------------|--------------------------|
| 01 Architecture Consistency | Validates diagram against architecture doc | 85% consistency, 4 contradictions, ALWAYS FLAGSHIP invalidates tier routing |
| 02 File 42 Fidelity | Validates diagram against File 42 | 65% fidelity, 8/9 phases faithful, communication protocol ABSENT |
| 03 Recipe Dimension | Confirms recipe format is genuine | 8:1 recipe-to-checklist ratio, 1 BLOCKING discrepancy (10 vs 15 RGB) |
| 04 Perception Gates | Deep audit of all 12 gates | Only 4/12 are TRULY perceptual, proposes 6 new gates |
| 05 Communication Protocol | Designs agent communication | Communication-as-tasks, 5 message types, 6 banned types |
| 06 User Journey | Maps fire-and-forget experience | Agent approvals replace user approvals, deterministic output paths |
| 07 Compression Fidelity | Measures information preservation | 73.8% LOSSLESS (3.7x improvement), 3 BLOCKING compression traps |
| 08 Adversarial Blind Spots | Finds what architecture can't see | 9 blind spots, Gate 6 violation IS the problem it diagnoses |
| 09 Coherence Analysis | Tests internal consistency | 7.5/10 coherence, Gate 6 FAILED, 40% coherence verification gap |
| 10 Verbiage Propagation | Traces language patterns | 5.3x inversion CORRECTED, zero master prompt failure patterns survive |
| 11 Paradigm Telescope | Classifies PV2's paradigm | Three instruments (telescope/microscope/periscope), quality ceiling ~3.5/4 |
| 12 Flagship Always | Definitive tier elimination analysis | Orchestrator -35%, 542 lines eliminated, single path universally |
| 13 Contrarian Challenge | Strongest opposition | "1,605-line solution to 300-line problem," CD-006 contradicts recipe thesis |
| 15 Relationship Map | Cross-references diagram vs map | 10 discrepancies, stacking gap has 3 conflicting schemes |
| 16 Anti-Reproduction | Tests against failure gates | 5/7 gates PASS, Gate 6 FAILS, sunset protocol needed |
| 17 Q20 Experiment | Evaluates cheapest experiment | Skip Q20 under ALWAYS FLAGSHIP, codify now |
| 18 Codification Checklist | Change-by-change readiness | 6/10 reflected, 2 already applied, 2 absent, 3 BLOCKING issues |
| 19 Preservation Audit | Foundation-by-foundation trace | 36/39 preserved (92%), 12 improved, 0 dropped |
| 20 Diagnosis Audit | Failure-by-failure resolution | 13/14 BLOCKING fixed, 34/42 total, 75-line cap elimination |
| 21 Paradigm Shift Audit | 75 paradigm shifts traced | 50/75 fully encoded (67%), 5 BLOCKING gaps, 8 SIGNIFICANT |
| 22 Deeper Architecture | 5 corpus files cross-referenced | 6/7 decision forks resolved, verb inversion corrected, A- grade |
| 23 Generalizability Audit | Content agnosticism + bias | 5 BLOCKING concerns, N=2 caveat, brownfield extrapolation risk |
| 24 Meta-Problem Audit | Compression + knowledge transfer | 27% nuance survival, recipe ceiling unacknowledged, self-tests absent |

## APPENDIX B: ALL BLOCKING ISSUES (CONSOLIDATED)

From across all 23 reports, these are the issues that must be resolved before or during codification:

| # | Issue | Source Reports | Resolution |
|---|-------|---------------|------------|
| B-01 | Stacked gap 192px must become 108px | 15, 18, 04 | Update all codification artifacts to 108px |
| B-02 | Background delta 10 RGB must become 15 RGB | 03, 18 | Update File 42 extraction to 15 RGB |
| B-03 | Letter-spacing 0.025em must become 0.03em | 03, 04 | Update File 42 extraction to 0.03em |
| B-04 | SC-11 and SC-12 gate implementations missing | 18, 04 | Write JavaScript for both gates |
| B-05 | Channel taxonomy undefined | 21, 24 | Adopt remediation taxonomy, define in thresholds file |
| B-06 | Mechanism category names inconsistent | 18 | Reconcile to mechanism-catalog.md names |
| B-07 | Cascade value table not required | 09, 15, 21 | Add as required Phase 8 deliverable |
| B-08 | Metaphor self-evaluation bias (F-40) | 20 | Add Wave 0.5 fresh-eyes validation |
| B-09 | No sub-perceptual prevention gate | 21 | Add SC-13: delta < threshold = FAIL |
| B-10 | Checkpoint deliverables undefined | 21 | Define per-phase deliverables |
| B-11 | No recipe ceiling escalation path | 11, 13, 24 | Add compositional escalation protocol |
| B-12 | Graceful degradation absent for simple content | 23 | Add content-complexity classifier |

## APPENDIX C: CONFIDENCE CALIBRATION

Following Report 24's finding that PV2 presents all conclusions with equal authority, here is the confidence calibration for the synthesis's key claims:

| Claim | Concordance | Counter-Evidence | Confidence |
|-------|-------------|-----------------|------------|
| Two-layer verification is necessary | 23/23 | None | VERY HIGH |
| Perception thresholds fix the primary failure | 23/23 | None | VERY HIGH |
| Recipe format outperforms checklist | 21/23 | CD-006 scored 39/40 without recipe | HIGH |
| ALWAYS FLAGSHIP simplifies architecture | 18/23 | Higher cost, untested on simple content | HIGH |
| PV2 will produce PA-05 >= 3/4 consistently | 12/23 | N=2, 3-variable confound, content generalizability unknown | MODERATE |
| Recipe ceiling at 3/4, need compositional escalation for 4/4 | 8/23 | Middle-tier experiment achieved 4/4 with recipe | MODERATE |
| The contrarian's 230-line alternative would fail | 5/23 | CD-006 scored 39/40 with minimal scaffolding | LOW |

---

**END OF MASTER SYNTHESIS**

**Statistics:**
- Reports synthesized: 23
- Convergences identified: 11 (4 unanimous, 4 strong, 3 moderate)
- Contradictions resolved: 10 (5 BLOCKING, 3 SIGNIFICANT, 2 noted)
- Blocking issues consolidated: 12
- Total lines: ~650
- Core verdict: PV2 is architecturally sound, empirically unvalidated, and ready for codification. CODIFY, BUILD, TEST -- in that order. The contrarian is right about one thing: STOP ANALYZING, START BUILDING.
