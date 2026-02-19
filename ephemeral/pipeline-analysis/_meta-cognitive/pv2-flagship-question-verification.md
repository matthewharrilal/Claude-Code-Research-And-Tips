# PV2 Flagship Question Verification

**Author:** question-verifier (Opus 4.6)
**Date:** 2026-02-18
**Task:** For each corpus-driving question, verify whether PV2 Flagship has a concrete operational answer -- not just awareness but an actual recipe step or gate
**Sources Read (ALL fully):**
1. `42-OPERATIONAL-RECIPE.md` (1,746 lines) -- the 9-phase recipe
2. `_meta-cognitive/pipeline-v2-architecture.md` (624 lines) -- unified architecture
3. `_meta-cognitive/pv2-tier-routing.md` (347 lines) -- tier routing matrix
4. `_meta-cognitive/pv2-threshold-map.md` (334 lines) -- threshold integration
5. `_meta-cognitive/pv2-handoff-protocol.md` (709 lines) -- TC-to-builder handoff
6. `08-perception-model-shift.md` (484 lines) -- perception model analysis

---

## SCORING LEGEND

- **YES** -- PV2 Flagship addresses this operationally: a specific recipe step, gate, CSS value, or architectural decision directly answers the question
- **PARTIAL** -- PV2 Flagship is aware of the issue but lacks a concrete operational mechanism (e.g., mentions it in philosophy but no gate enforces it)
- **NO** -- Gap: PV2 Flagship does not address this question

For PARTIAL and NO: a specific fix is proposed.

---

## CATEGORY 1: UNDERSTANDING WHAT FAILED (DIAGNOSIS)

### Q1: "What did the master prompt get WRONG?" (42 failures, 14 BLOCKING)

**Verdict: YES**

PV2 Flagship addresses ALL 14 BLOCKING failures through specific architectural decisions:

| BLOCKING Failure | PV2 Fix | Location |
|-----------------|---------|----------|
| Zero perception thresholds | Perception threshold table embedded in EVERY phase (0-8), plus standalone `perception-thresholds.md` reference file, plus gate-runner.js SC-09 (>= 15 RGB), SC-11 (>= 2px font-size) | Recipe Phases 3/5/8A, Architecture Section 6, Threshold Map Table F |
| Sub-perceptual CSS (23.7%) | Phase 0 DEALLOCATION protocol (Appendix B) deletes CSS below thresholds; Phase 8A perception verification requires per-property delta checks | Recipe Appendix B, Phase 8A |
| S-09 stacking loophole | Stacking arithmetic in Phase 0.6 with 120px content-free max, 192px structural max; divider margins capped at 24px | Recipe Steps 0.6, 4.2; Architecture C3 resolution |
| 75-line builder visibility | Builder receives COMPLETE recipe (~650 lines) + mechanism catalog + tokens + prohibitions + perception thresholds -- self-contained | Architecture Section 5 (Gate 4 compliance) |
| 7.9:1 guardrail-to-playbook ratio | Recipe is 0.32:1 ratio (actions dominate); every phase uses action verbs: "Set", "Write", "Add" | Recipe "How to Read" table, line 20 |
| Zero grid layouts | Phase 0.5 MANDATES >= 2 non-single-column layouts; Phase 4.4 provides grid CSS; Phase 8C checks Scale 3 | Recipe Steps 0.5, 1.5, 4.4 |
| Container width violations | 960px max-width is NON-NEGOTIABLE; Phase 2.3 sets it; Phase 8D soul check verifies it; gate-runner SC-01 checks 940-960px | Recipe Step 2.3, Phase 8D, Architecture SC-01 |
| Zero accessibility | Phase 7 dedicates 15 minutes to WCAG 2.1 AA: skip link, ARIA, focus-visible, reduced motion, print, responsive | Recipe Phase 7 (Steps 7.1-7.3) |
| Missing footer | Phase 1.7 provides footer HTML template; Phase 2.4 provides footer CSS; Phase 8D checks footer existence | Recipe Steps 1.7, 2.4 |
| Component library bypass | Phase 1.4 EXPLICITLY names standard classes (callout, table-compact, section-indicator); Risk 5 warns against custom classes | Recipe Step 1.4, Part 5 Risk 5 |
| Inverted quality routing | Architecture Section 5: builder receives mechanism catalog + tokens + recipe + prohibitions (CSS-rich files routed TO builder, not away) | Architecture Section 5, Handoff Step 2 |
| CCS never computed | CCS replaced by multi-coherence verification (Phase 8E): count CSS properties shifting at each boundary, require >= 3 | Recipe Phase 8E |
| Uniform typography | Phase 5 provides zone-specific typography: Zone 1 (17px/1.85), Zone 2 (15px/1.55), Zone 3 (16px/1.75); each delta exceeds perception threshold | Recipe Phase 5 |
| Single-column monotony | Phase 0.5 mandates >= 2 grid sections; Phase 1.5 provides grid HTML; Phase 4.4 provides grid CSS | Recipe Steps 0.5, 1.5, 4.4 |

**Assessment:** Every BLOCKING failure has a traceable operational fix. The architecture resolves each through recipe steps (builder actions), gates (programmatic checks), or structural decisions (file routing, agent selection).

---

### Q2: "WHY did correct rules produce invisible results?" (Sub-perceptual CSS)

**Verdict: YES**

PV2 Flagship has perception thresholds embedded in EVERY building phase, not just verification:

| Phase | Perception Integration | Specific Values |
|-------|----------------------|-----------------|
| Phase 0 (Content Analysis) | Zone architecture assigns Temperature/Density/Voice/Weight per zone -- these map to SPECIFIC CSS ranges that exceed thresholds | Step 0.4: Zone table with concrete values |
| Phase 3 (Zone Backgrounds) | "adjacent zones MUST differ by >= 10 RGB points" (recipe) / >= 15 RGB (architecture) | Step 3.1: warm palette hex values provided; warm test (R >= G >= B) enforced |
| Phase 4 (Borders) | Border hierarchy uses 1px/2px/3px/4px -- each level >= 1px different | Step 4.1-4.2: exact border widths |
| Phase 5 (Typography) | "Threshold: >= 2px difference from Zone 2" embedded inline with each CSS value | Step 5.1: font-size 17px vs 15px, line-height 1.85 vs 1.55, letter-spacing 0.02em vs -0.01em |
| Phase 8A (Verification) | Full perception threshold table with per-property verification method | 8A table: 9 properties with minimum deltas |
| Appendix B (Deallocation) | Sub-perceptual identification criteria for remediation of existing pages | 8 criteria for identifying invisible CSS |

**Critical design choice:** The recipe EMBEDS thresholds inline with CSS values ("font-size: 17px; /* Threshold: >= 2px difference from Zone 2 */") rather than in a separate checklist. This means the builder encounters the threshold at the MOMENT of writing CSS, not after. This directly addresses the "correct rules produce invisible results" failure: the threshold is co-located with the value.

**Flagship tier-specific enhancement:** Per tier routing (Section C), Flagship has BLOCKING gates for zone differentiation (>= 15 RGB + 6 CSS channels), typography variation (>= 2px font-size), and PA-05 (>= 3/4 COMPOSED via Mode 4 consensus). These are BLOCKING, not WARNING -- the page cannot ship with sub-perceptual CSS.

---

### Q3: "Why did programmatic gates PASS but perceptual audit FAIL?" (Presence without magnitude)

**Verdict: YES**

PV2 Flagship explicitly separates and REQUIRES BOTH verification layers:

**Layer 1: Programmatic (gate-runner.js)** -- 12 binary gates that check MAGNITUDE, not just presence:

| Gate | What It Checks | MAGNITUDE Requirement |
|------|---------------|----------------------|
| SC-09 | Background color minimum delta | >= 15 RGB between adjacent zones (not "are backgrounds different?" but "by HOW MUCH?") |
| SC-10 | Stacked gap | <= 192px structural (not "does a gap exist?" but "how BIG is it?") |
| SC-11 | Font-size zones | >= 2px between zone groups (not "does font-size vary?" but "by HOW MUCH?") |

**Layer 2: Perceptual (PA SKILL.md Mode 4)** -- 9 fresh-eyes Opus auditors with ALL 48 PA questions, receiving screenshots (no build context). This is the layer that catches "looks flat despite passing gates."

Architecture Section 6 states explicitly: "The flagship experiment proved programmatic gates can PASS while perceptual audit FAILS. The builder complied with every binary rule but produced imperceptible differentiation. Programmatic gates catch measurable violations; perceptual audit catches 'does it LOOK designed?'"

**The fix is TWO things:**
1. Programmatic gates now check MAGNITUDE (how much), not just PRESENCE (whether it exists)
2. Perceptual audit remains INDEPENDENT and FRESH-EYES -- it CANNOT be gamed by passing gates

Both layers are BLOCKING at Flagship tier (gate strictness matrix, Section C).

---

### Q4: "Why did the builder produce monotone typography?" (75-line visibility cap)

**Verdict: YES**

PV2 Flagship resolves this through THREE mechanisms:

**Mechanism 1: Full recipe visibility.** Architecture Section 5 states: "For ANY tier, the builder agent's context includes: operational-recipe.md (the complete recipe -- ~650 lines), mechanism-catalog.md (FULL -- not 'first 200 lines'), tokens.css, prohibitions.md, the BUILD PLAN, perception-thresholds.md." The 75-line cap is eliminated -- the builder sees EVERYTHING.

**Mechanism 2: Recipe provides exact typographic CSS values.** Phase 5 gives the builder exact CSS for every zone:
- Zone 1: `font-size: 17px; line-height: 1.85; letter-spacing: 0.02em`
- Zone 2: `font-size: 15px; line-height: 1.55; letter-spacing: -0.01em`
- Zone 3: `font-size: 16px; line-height: 1.75; letter-spacing: 0`

The builder does not need to DERIVE these values from abstract principles. They are given.

**Mechanism 3: Perception checks catch monotone output.** Phase 5 PERCEPTION CHECK: "Compare Zone 1 (S1-S3) and Zone 2 (S5-S8) side by side (or scroll between them). Zone 1 text should look LARGER and more OPEN. Zone 2 headings should look BOLDER and TIGHTER. If you cannot see the difference, your selectors are wrong."

**Mechanism 4 (Flagship-specific): Opus builder.** Tier routing specifies "1 Opus Agent -- Builder" for Flagship (not Sonnet). Opus has demonstrated compositional ability beyond compliance that Sonnet lacks. This is the "Sonnet-for-builders is unexamined" finding addressed.

---

## CATEGORY 2: UNDERSTANDING WHAT CHANGED (PARADIGM SHIFT)

### Q5: "How did the CSS philosophy change?" (Specification to perception)

**Verdict: YES**

PV2 is perception-first by construction. The operational recipe's governing principle (Part 1, "How to Read") states: "Verification: 'did the CSS rule exist?' vs 'can you SEE the difference?'" Every phase ends with a PERCEPTION CHECK, not a compliance check.

Specific evidence:
- Phase 3 check: "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?"
- Phase 5 check: "Zone 1 text should look LARGER and more OPEN"
- Phase 8A: "THE RULE: If a human cannot SEE the difference without a color picker, do NOT write the CSS"
- Phase 8G Gestalt Test: "Does each screenful look DIFFERENT from the previous one?"

The DEALLOCATION protocol (Appendix B) is the strongest evidence of the shift: CSS that PASSES all rules is DELETED if it fails the perception test. This is the opposite of the master prompt's ontology (where existing CSS was always kept).

The gate-runner.js checks MAGNITUDE (SC-09: >= 15 RGB, SC-11: >= 2px) not just PRESENCE. This is the programmatic manifestation of the perception-first philosophy.

---

### Q6: "How did the HTML approach change?" (Builder visibility)

**Verdict: YES**

PV2 Flagship builder receives:
1. **Complete HTML templates** in Phase 1 (Steps 1.1-1.7): document shell, header pattern, section with zone classes + ARIA, component markup (callouts, tables, pullquotes), grid wrappers, footer
2. **Component library class names** in Step 1.4: `callout--info`, `callout--gotcha`, `callout--tip`, `callout--essence`, `table-compact`, `table-featured`, `essence-pullquote`, `section-indicator`
3. **Grid wrapper HTML** in Step 1.5: `content-pair` (two-column), `content-grid` (2x2)
4. **ARIA attributes** in Step 1.6: every semantic element gets its role attribute

The handoff protocol (Part C, Step 2) specifies the builder reads prohibitions -> tokens -> mechanism catalog (for Ceiling+). The builder never reads TC SKILL.md or the analysis corpus -- only building-relevant files.

Phase 1 is ~150 lines of HTML templates. The flagship builder received zero HTML guidance in the original master prompt.

---

### Q7: "How did the process change?" (2,400:1 to 1:1 compression)

**Verdict: PARTIAL**

PV2's compression ratio is DRAMATICALLY better than the flagship's but the exact ratio is not explicitly tracked as a gate.

**What PV2 does:**
- Operational recipe: ~650 lines extracted from File 42's ~1,746 lines (2.7:1 extraction, not compression)
- Builder receives: ~650 recipe + ~174 tokens.css + ~353 prohibitions.md + build plan (~200-600 lines depending on tier) = ~1,400-1,800 lines total
- Builder PRODUCES: one HTML file (~250-800 lines depending on content)
- Compression ratio: ~2:1 to ~5:1 (input:output) -- dramatically better than 2,400:1

**What PV2 does NOT do:**
- There is no explicit "meta-to-output ratio" gate in the gate-runner or recipe
- Architecture Section 8 (Gate 6) flags this: "Current ratio is still high... ~17:1. This architecture document is ITSELF meta. The next step MUST be codification."
- The MEMORY.md finding "Threshold: if meta-output exceeds 20:1, pipeline is feeding on itself" is a known principle but NOT encoded as a PV2 gate

**Fix for PARTIAL -> YES:** Add an explicit meta-output ratio awareness note in the `/build-page` orchestrator skill. NOT as a gate (meta-output ratio is a process metric, not a per-page metric) but as a principle: "Pipeline v2 targets 2-5:1 input:output ratio for builder agents. If the builder is receiving more than 5x its expected output in instructions, the spec is too verbose."

---

### Q8: "Where did the perception model come from?" (Zero in master prompt)

**Verdict: YES**

PV2 has the perception model in EVERY phase. Specifically:

**In the recipe (builder sees this):**
- Phase 0.3: Zone count table (structural perception -- "Two moods: open and resolved")
- Phase 0.6: Stacking arithmetic with 120px target (void perception)
- Phase 3.1: Background color >= 10 RGB threshold (chromatic perception)
- Phase 3 PERCEPTION CHECK: "Can you SEE at least 2 distinct background color shifts WITHOUT a color picker?"
- Phase 5.1: Font-size >= 2px, line-height >= 0.2, letter-spacing >= 0.025em (typographic perception)
- Phase 5 PERCEPTION CHECK: "Zone 1 text should look LARGER and more OPEN"
- Phase 8A: Complete perception threshold table (7 properties with minimum deltas)
- Phase 8B: Void prevention (120px max content-free gap)
- Phase 8G: Gestalt perception test ("Does each screenful look DIFFERENT from the previous one?")
- Appendix A: Full perception thresholds reference (9 properties)
- Appendix B: Deallocation criteria based on perception thresholds

**In the gate runner (automated):**
- SC-09: Background delta >= 15 RGB
- SC-10: Stacked gap <= 192px
- SC-11: Font-size delta >= 2px

**In the PA audit (human judgment):**
- Mode 4: 9 auditors, 48 questions, all perception-based
- PA-05: "Does this feel DESIGNED?" -- the ultimate perception gate

**In the handoff protocol (builder receives before building):**
- Section 7 (Builder Directives): Perception threshold table embedded in handoff document itself

The master prompt had ZERO perception terms (File 08, Section 1: 0 hits for "percep", "threshold", "RGB", "delta", "magnitude"). PV2 Flagship has perception terms in 11+ distinct locations.

---

### Q9: "How did coherence verification change?" (Cascade value tables)

**Verdict: YES**

PV2 Flagship has multi-coherence verification in Phase 8E:

**The operational recipe's Phase 8E states:**
"For the 2-3 major zone transitions (where zone groups change):
1. Count how many CSS properties shift at the boundary.
2. Each major transition MUST have >= 3 properties shifting simultaneously."

It provides a verification table template:
```
| Channel | Zone 1 Value | Zone 2 Value | Changed? |
|---------|-------------|-------------|----------|
| Background | #FEF5EB (warm) | #FAF8F5 (cool) | YES |
| Font-size | 17px | 15px | YES |
| Font-weight (h2) | 400 | 600 | YES |
| Letter-spacing | 0.02em | -0.01em | YES |
| Left border | none | 4px red | YES |
| Paragraph margin | 20px | 12px | YES |
| Total | | | 6 channels. PASS |
```

**Flagship-specific enhancement:** Tier routing (Section C) makes coherence check BLOCKING for Flagship (>= 3 transitions between sections). The gate-runner could be extended to check this programmatically.

**What changed from the master prompt:** The master prompt's MC-01 (CCS >= 0.30) was NEVER COMPUTED (File 08, Section 2). PV2 replaces CCS with a simpler, binary check: "count the shifting channels at each boundary." This is measurable (binary: count >= 3 or not) rather than requiring the abstract "removal test" that CCS demands.

---

## CATEGORY 3: UNDERSTANDING GENERALIZABILITY

### Q10: "Is the remediation content-agnostic?" (46/15/40 split)

**Verdict: YES**

The operational recipe is explicitly designed to be content-agnostic. File 42, Phase 0 header: "This recipe is CONTENT-AGNOSTIC. It works for any content type (tutorial, reference, conceptual guide, API docs, research synthesis, etc.) within the KortAI design system."

**How content-agnosticism is achieved:**

Content-specific decisions are marked with **[CONTENT DECISION]** tags throughout the recipe, with guidance for how to make them:

| Decision Point | How Recipe Handles It |
|---------------|----------------------|
| Zone semantics | Step 0.4: Table of Temperature/Density/Voice/Weight with examples for 2-zone and 3-zone architectures |
| Section boundaries | Step 0.5: Classification by content type (prose/table/mixed/visual) with layout shape options |
| Callout variant selection | Step 1.4: Semantic mapping ("if it says 'avoid this' -> gotcha, 'do this' -> tip, 'this is the core idea' -> essence") |
| Grid layout placement | Step 0.5: "Sections with paired/parallel elements benefit from multi-column" |
| Transition type assignment | Step 0.6: "Zone boundaries get bridge or breathing. Within-zone transitions get smooth" |
| Bridge prose text | Step 1.3: "One sentence justifying the shift" |
| Drop cap usage | Step 6.3: "Prose-heavy openings benefit. Technical/list-heavy openings do not" |

Part 4 (What This Recipe Does Not Cover) explicitly lists 8 content-specific decisions the recipe cannot make and provides decision heuristics for each.

**The CSS values (phases 2-7) are 100% content-agnostic.** The zone STRUCTURE varies by content; the CSS VALUES within zones are fixed. This is the 46/15/40 ratio operationalized: 46% content-agnostic (CSS values), 15% content-dependent (zone architecture decisions), 40% infrastructure (HTML skeleton, soul enforcement).

---

### Q11: "Could we reproduce this?" (60% traceable, 12% judgment)

**Verdict: PARTIAL**

PV2 is substantially more reproducible than the master prompt, but some judgment remains.

**What is judgment-free:**
- All 97 binary rules from the master prompt are preserved (100% compliance expected)
- All 12 gate-runner checks are programmatic (PASS/FAIL, zero judgment)
- All CSS values in the recipe are EXACT (font-size: 17px, not "choose appropriate size")
- Perception thresholds are NUMERIC (>= 15 RGB, not "perceptibly different")
- Stacking arithmetic is CALCULABLE (120px max, formula provided)
- Grid layout minimum is COUNTABLE (>= 2 non-single-column sections)
- Zone count is DETERMINISTIC (word count -> zone count table)

**What still requires judgment:**
1. Zone SEMANTIC assignment (Temperature/Density/Voice/Weight per zone) -- the TABLE of options is fixed, but WHICH option fits THIS content requires judgment
2. Section boundary identification -- "Where does one section end and another begin?"
3. Callout variant selection -- "Is this a warning or a tip?"
4. Bridge prose writing -- "What justifies the shift between zones?"
5. PA-05 scoring -- "Does this feel DESIGNED?" (inherently perceptual)
6. Phase 8G Gestalt Test -- "Does each screenful look DIFFERENT from the previous one?"
7. Metaphor derivation (Ceiling+ only) -- TC Phases 1-3.5

**Estimated judgment-free percentage:** ~80-85% of PV2 Flagship decisions are judgment-free (up from ~60% in the master prompt). The remaining 15-20% are content-specific editorial decisions that CANNOT be made binary without losing design quality.

**Fix for PARTIAL -> YES:** This is inherently a PARTIAL answer because some judgment is required for quality. The fix is not to eliminate judgment but to CONSTRAIN it:
- For items 1-4: The handoff protocol (Part C) provides the builder with pre-computed values from TC. The builder receives zone semantics, section boundaries, callout assignments, and bridge prose IN the build plan. Judgment occurs in TC, not in the builder.
- For items 5-6: These are INTENTIONALLY perceptual. Fresh-eyes auditors provide independent judgment that no programmatic gate can replace.
- For item 7: TC's Phases 1-3.5 are the judgment pipeline; the recipe is judgment-free.

---

## CATEGORY 4: PREVENTING BIAS

### Q12: "The cheapest most informative experiment has NOT been run" (Q20)

**Verdict: PARTIAL**

Q20 identifies the cheapest experiment as: "Add ONLY perception thresholds to the unchanged master prompt and re-run." This would isolate whether thresholds alone (vs. recipe format) are the causal variable.

**What PV2 does:**
- PV2 is designed to be TESTED. Architecture Section 9 (Top 5 Priorities) ends with: "After Priority 5, run the cheapest experiment: build one Middle-tier page using `/build-page` and measure PA-05. Target: >= 3/4."
- PV2 acknowledges uncertainty. Architecture Section 10 lists 6 unresolved decisions requiring user input.
- The tier system (Floor/Middle/Ceiling/Flagship) creates natural A/B testing opportunities: same content at different tiers.

**What PV2 does NOT do:**
- PV2 does NOT isolate the causal variable. It changes format (recipe), specificity (exact values), AND perception (thresholds) simultaneously -- exactly the 3-variable confound from the original analysis.
- PV2 does NOT include a built-in experiment protocol for testing which of its components contribute most.
- The Q20 experiment (perception thresholds ONLY on unchanged master prompt) remains unrun.

**Does PV2 depend on unvalidated assumptions?**
YES, specifically:
1. **Recipe format causes better output** -- Tier 1 as pattern, Tier 3 as causal claim (File 25)
2. **Specific threshold values are correct** -- Tier 2 (File 25 challenges as N=1)
3. **Opus builder outperforms Sonnet builder** -- Tier 3 (never A/B tested)
4. **Single builder outperforms multi-builder** -- Tier 2 (remediation N=1, CD-006 used multi-agent)

**Fix for PARTIAL -> YES:** Add a "VALIDATION EXPERIMENTS" section to the `/build-page` orchestrator that proposes the 3 cheapest experiments:
1. Same content, same prompt, add ONLY perception thresholds -> isolates threshold contribution
2. Same content, recipe format, remove thresholds -> isolates format contribution
3. Same content, Middle tier, Opus vs Sonnet builder -> isolates model contribution

---

## CATEGORY 5: THE 5 BELIEFS

### Q13: "Paradigm over volume" -- Does PV2 Flagship have a paradigm or just more rules?

**Verdict: YES**

PV2 Flagship has a PARADIGM, not just more rules. The paradigm is: **perception-first building with recipe-format execution.**

Evidence of paradigm (not rule accumulation):
1. **Structural inversion:** The master prompt was 97 rules checking EXISTENCE. PV2 is 9 phases checking PERCEPTION. This is not "97 + more rules" -- it is a different organizing principle.
2. **The recipe replaces the checklist:** File 42's "How to Read" table (line 14-20) makes the distinction explicit: Checklist has "97 rules organized by domain" -> Recipe has "9 phases organized by sequence." Different structure, not more of the same.
3. **Constraint:Action ratio inverted:** Master prompt was 3.0:1 (constraints dominate). Recipe is 0.32:1 (actions dominate). This is a paradigm shift in how the builder is instructed.
4. **Deallocation is new:** The master prompt never contemplated REMOVING compliant CSS. The recipe's Appendix B removes CSS that passes all rules but fails perception. This is a new capability, not a new rule.
5. **Gate verification changed:** From "does CSS exist?" (programmatic) to "can a human see it?" (perceptual). Two-layer verification (gate-runner + PA audit) is architecturally different from single-layer (binary rules only).

**Counter-evidence (is this just more rules?):**
- PV2 has 12 gate-runner checks (vs. 97 binary rules) -- fewer rules, not more
- PV2 has ~650 lines of recipe (vs. ~963 lines of master prompt) -- shorter, not longer
- But PV2 ADDS perception-thresholds.md (~80 lines), gate-runner.js (~250 lines), and the handoff protocol (~600 lines) -- total system is larger

**Assessment:** The BUILDER sees less (650 recipe lines vs 963 prompt lines). The SYSTEM is larger (4 new files + 6 edits). But the builder's experience is paradigmatically different: sequential recipe with exact values vs. unordered checklist with abstract constraints. This is paradigm, not volume.

---

### Q14: "N=2 is a limitation" -- Does PV2 acknowledge uncertainty?

**Verdict: YES**

PV2 acknowledges uncertainty in multiple locations:

1. **Architecture Section 10:** Lists 6 UNRESOLVED DECISIONS requiring user input (skill naming, extraction scope, standalone invocation, TC Phase 4 fate, codification timing, content ingestion)
2. **Tier routing expected outcomes (Section D):** "CAVEAT: N=2-3 for most tiers. Expected outcomes are calibrated hypotheses, not proven ranges. The Middle experiment's 4/4 PA-05 may be an outlier."
3. **CLAUDE.md Known Limitations:** "N=2. ALL findings derive from comparing exactly 2 artifacts. File 27 warns: this limits causal claims. Treat everything as hypothesis."
4. **Threshold map confidence ratings:** Every threshold has a Confidence tier (1-4). Example: "Background color >= 15 RGB -- Confidence: Tier 2. The principle (there MUST be a minimum delta) is Tier 1 unanimous. The specific value (15 vs 10) is Tier 2."
5. **Architecture Section 8 (Anti-Reproduction Compliance):** Gate 6 is explicitly "WATCH" (not PASS) -- acknowledging the meta:output ratio is still high.

**PV2 does NOT:**
- Assume the recipe thesis is proven (it states "recipe outperformed checklist in 2/2 experiments" -- not "recipes always outperform")
- Assume specific threshold values are final (marks them as Tier 2 with N=1 caveat)
- Assume the tier model is validated (marks expected outcomes as "calibrated hypotheses")

---

### Q15: "The compression problem is recursive" -- Is PV2 compressing lossily?

**Verdict: PARTIAL**

PV2 is LESS lossy than the master prompt but still compresses. The question is whether the compression crosses the threshold into information loss that degrades output.

**Where PV2 preserves information:**
- The handoff protocol (Part B, "Information Preservation Audit") explicitly traces what dies at each compression level. Example: "What dies at 1-sentence compression of zone architecture: specific density values per zone, voice values per zone, weight values per zone, section-to-zone assignments."
- The recipe provides EXACT CSS values (zero compression from intent to value)
- The handoff protocol is ~3:1 compression (337 findings -> ~100 structured fields) vs. the master prompt's 50:1

**Where PV2 still compresses lossily:**
1. **File 42 -> operational-recipe.md:** ~1,746 lines -> ~650 lines. The analysis (Part 2: team architecture, Part 5: risks, Appendices A-D: evidence) stays in ephemeral. The builder never sees the WHY -- only the WHAT.
2. **41-file corpus -> perception thresholds:** 1.3MB of analysis distilled to a ~80-line threshold table. 99.4% of the corpus is discarded for builder consumption.
3. **TC pipeline -> build plan:** TC Phases 0-3.5 produce extensive analysis; the build plan compresses to ~200-600 lines. The metaphor derivation process is lost; only the result survives.

**Is this lossiness ACCEPTABLE?**
The handoff protocol's anti-patterns (Part E) suggest YES -- but with a caveat:
- Anti-Pattern 1 (Conclusion Without Criteria): The build plan preserves per-mechanism WHERE and WHY, preventing the "sample 2-4" failure
- Anti-Pattern 4 (Rule Without Perception Gate): Every threshold includes a visual test question
- BUT: The builder does not know WHY 15 RGB was chosen (the evidence chain from File 08). If the builder encounters an edge case where 15 RGB is insufficient (warm-on-warm backgrounds), they have no context for adjusting.

**Fix for PARTIAL -> YES:** Add a "COMPRESSION BUDGET" to the handoff protocol:
- For each field: note the compression ratio from source material
- For the build plan overall: track total compression ratio
- Gate: if compression exceeds 10:1 for any single field, flag for human review

---

## SUMMARY TABLE

| # | Question | Verdict | Key PV2 Mechanism |
|---|----------|---------|-------------------|
| 1 | What did the master prompt get WRONG? | **YES** | All 14 BLOCKING failures addressed through recipe steps, gates, or architectural decisions |
| 2 | WHY did correct rules produce invisible results? | **YES** | Perception thresholds embedded inline with CSS values in every phase |
| 3 | Why did programmatic gates PASS but PA FAIL? | **YES** | Two-layer verification: magnitude-checking gates + fresh-eyes PA |
| 4 | Why did the builder produce monotone typography? | **YES** | Full recipe visibility + exact typographic CSS values + Opus builder |
| 5 | How did the CSS philosophy change? | **YES** | Perception-first: every phase ends with perception check, not compliance check |
| 6 | How did the HTML approach change? | **YES** | Builder receives complete HTML templates + component library classes |
| 7 | How did the process change? | **PARTIAL** | Compression improved (~2-5:1 vs 2,400:1) but no explicit meta-output gate |
| 8 | Where did the perception model come from? | **YES** | Perception terms in 11+ locations (zero in master prompt) |
| 9 | How did coherence verification change? | **YES** | CCS replaced by countable multi-coherence check (>= 3 channels at boundary) |
| 10 | Is the remediation content-agnostic? | **YES** | [CONTENT DECISION] tags + decision heuristics for 8 editorial choices |
| 11 | Could we reproduce this? | **PARTIAL** | ~80-85% judgment-free (up from ~60%) but editorial judgment irreducible |
| 12 | Cheapest experiment NOT run? | **PARTIAL** | PV2 designed for testing but does not isolate the 3-variable confound |
| 13 | Paradigm over volume? | **YES** | 9-phase recipe (not 97 rules); 0.32:1 action ratio (not 3.0:1) |
| 14 | N=2 is a limitation? | **YES** | Uncertainty acknowledged in 5+ locations with confidence tiers |
| 15 | Compression problem is recursive? | **PARTIAL** | 3:1 handoff (not 50:1) but builder still doesn't see WHY behind thresholds |

### SCORECARD

| Category | YES | PARTIAL | NO |
|----------|-----|---------|-----|
| Diagnosis (Q1-Q4) | 4 | 0 | 0 |
| Paradigm Shift (Q5-Q9) | 4 | 1 | 0 |
| Generalizability (Q10-Q11) | 1 | 1 | 0 |
| Preventing Bias (Q12) | 0 | 1 | 0 |
| 5 Beliefs (Q13-Q15) | 2 | 1 | 0 |
| **TOTAL** | **11** | **4** | **0** |

**11/15 YES, 4/15 PARTIAL, 0/15 NO.**

### THE 4 PARTIAL GAPS AND THEIR FIXES

| # | Gap | Fix | Effort | Priority |
|---|-----|-----|--------|----------|
| Q7 | No explicit meta-output ratio gate | Add principle note in `/build-page` orchestrator: "Pipeline v2 targets 2-5:1 builder input:output ratio" | ~5 lines | LOW (process metric, not per-page) |
| Q11 | ~15-20% judgment remains irreducible | TC handles editorial judgment; builder receives pre-computed values. This is BY DESIGN, not a bug. Document as intentional. | ~3 lines of documentation | LOW (acknowledged limitation) |
| Q12 | 3-variable confound unresolved | Add VALIDATION EXPERIMENTS section to `/build-page` proposing 3 isolation experiments | ~20 lines | MEDIUM (scientific rigor) |
| Q15 | Builder doesn't know WHY behind thresholds | Add 1-sentence provenance notes to perception-thresholds.md: "15 RGB: derived from flagship failure analysis (backgrounds differed by 1-8 RGB, flagged imperceptible by 7/8 agents)" | ~15 lines | LOW (edge case context) |

---

**END OF QUESTION VERIFICATION**

**Total: ~400 lines. 15 questions verified. 11 YES, 4 PARTIAL, 0 NO. All PARTIAL gaps have proposed fixes with effort estimates. PV2 Flagship operationally addresses every question that drove the 41-file corpus, with 4 areas where awareness exceeds operationalization.**
