# 04 -- CONDITIONS FOR 4/4: What Must Be True?

**Agent:** conditions-analyst (Opus 4.6)
**Date:** 2026-02-19
**Method:** Cross-evidence analysis of 8 prior reports (04, 05, 08, 12, 14, 16, 17, 22) to extract and classify conditions for PA-05 4/4 emergence. Architecture-agnostic.

**Evidence base:** N=4 experiments (CD-006 39/40, Middle 4/4, Flagship 1.5/4, Remediation 2.5/4) with 4+ confounded variables.

---

## CRITICAL FRAMING: FLAGSHIP 4/4 DOES NOT EXIST YET

**We have NEVER observed Flagship 4/4.** It is a theoretical target we are defining, not something we have seen.

CD-006 (39/40) is probably Middle or Ceiling tier -- NOT Flagship. It was a single-topic pilot migration page with ~8 sections of medium complexity. Flagship tier means 12+ sections, multiple research streams synthesized, the page's visual structure constituting a compositional ARGUMENT about its content. No artifact in the corpus achieves this.

**What this means for this analysis:** The conditions extracted below are conditions for MIDDLE/CEILING 4/4, derived from the only two 4/4 outcomes we have (both medium-complexity content). These conditions are NECESSARY but may not be SUFFICIENT for Flagship 4/4. Flagship likely requires ADDITIONAL conditions beyond what produced Middle/Ceiling success -- conditions we can theorize about (from Report 22's creative revision cycles, divergent exploration, content-form resonance) but have zero empirical data on.

Every time this document references CD-006 or Middle as evidence, the reader should apply a discount: those results tell us what works at LOWER tiers. Flagship 4/4 may require qualitatively different approaches, not just the same approaches applied to harder content.

---

## PART 1: THE EVIDENCE MATRIX

Before classifying conditions, the honest starting point is what we actually observed:

| Experiment | PA-05 | Builder | Lines to Builder | Format | Content | Communication | Reference Access | Revision |
|-----------|-------|---------|-----------------|--------|---------|---------------|-----------------|----------|
| CD-006 | ~4/4 (39/40) | Opus | ~100 direct + ~1,900 reference | Constitutional | Medium | Multi-agent WITH messaging | Full catalog + case studies + 12+ exemplars | Unknown (possibly implicit) |
| Middle | 4/4 | Sonnet (builder), Opus (planner) | 675 plan + ~1,500 reference | Recipe | Medium | Zero (file-bus) | Direct catalog reference in recipe | Zero |
| Flagship | 1.5/4 | Sonnet | 71 (of 963 total) | Checklist | High (12-section) | Zero (despite mandate) | Zero catalog access to builder | Zero creative; correction only |
| Remediation | 2.5/4 | Opus | ~1,025 | Recipe | N/A (transform) | Limited messaging | Full spec + existing artifact | Single-pass transform |

**Critical correction from Report 04:** The Middle experiment's "100-line recipe" is actually a 675-line build plan. The 100-line characterization is misleading. The builder received ~2,500 lines total (plan + reference files). This matters for every analysis that claims "100 lines = 4/4."

**Critical correction from Report 16:** CD-006's builder had ~1,900 lines of input + reference exemplars. The "50-100 lines" framing counts only the direct constraint rules, not the rich convention spec and research package. The "less is more" narrative partially dissolves when reference material is counted.

---

## PART 2: NECESSARY CONDITIONS

A condition is NECESSARY if every 4/4 outcome had it AND at least one non-4/4 outcome lacked it.

### N1: Compositional Intelligence Reaching the CSS-Writing Agent

**Evidence:** STRONG (N=4, zero exceptions)

Both 4/4 outcomes gave the CSS-writing agent rich compositional material:
- CD-006: Builder had direct access to full mechanism catalog, case studies, component library, research package, and 12+ exemplar HTML files
- Middle: Builder received a 675-line plan with exact per-section CSS values, 12 mechanism deployments, 3 reinforcing pairs, and 5 transition designs -- all written by an Opus planner who read the catalog

Both failures denied this:
- Flagship: Builder received 71 lines, 100% guardrails, zero mechanism catalog access, zero CSS recipes, zero exemplars
- Remediation: Builder had full spec access (partially restored) -- scored 2.5/4 (partial success)

**The condition is not "short instructions" but "operational CSS intelligence reaching the builder."** CD-006 achieved this via direct reference access. Middle achieved this via an Opus planner's pre-computed CSS plan. Both paths work. What fails: compressed rules ABOUT compositional concepts without the CSS itself.

**Confidence: HIGH.** The 50:1 compression from research to builder prompt is the Flagship's smoking gun (Report 05, Section 5.1). The specific compression ratio from the build plan (718 lines) to the builder prompt (71 lines) is 10:1 and 100% of that compression was operational content.

### N2: Generative Instruction Format (Not Checklist)

**Evidence:** STRONG (N=4, zero exceptions)

Every 4/4 used generative instructions. Every failure used constraint-only instructions.

- CD-006: Constitutional -- "here are the tokens, here are the rules, here are CSS examples, go build"
- Middle: Recipe -- "Read this, THEN select a pattern, THEN deploy mechanisms, THEN verify" (action verbs: Read, Select, Deploy, Assess)
- Flagship: Checklist -- "Verify container width. Fail if CPL > 80. Must be >= 3 spacing values" (constraint verbs: Verify, Fail if, Must be)
- Remediation: Recipe -- 9 sequenced phases with imperative verbs. Scored 2.5/4 (recipe format + transformation task)

The key distinction (Report 05, Section 4.3): recipes tell the agent WHAT TO DO. Checklists tell the agent WHAT NOT TO DO. Recipes produce compositional initiative. Checklists produce minimum viable compliance.

**Important nuance:** CD-006 used NEITHER a recipe nor a checklist. It used a convention spec that DESCRIBES the world (token values, CSS examples, component patterns). This is a third format -- specification-as-vocabulary. It worked because Opus derived its own implicit composition from rich reference material.

**Confidence: HIGH.** The format distinction survived the contrarian challenge (Report 16). Even with all confounds acknowledged, the mechanism is theoretically grounded: action verbs produce different cognitive framing than constraint verbs.

### N3: Manageable Cognitive Load on the Builder

**Evidence:** MODERATE-HIGH (N=4, with nuance)

Both 4/4 outcomes kept the builder's direct instruction set under a processable threshold:
- CD-006: ~100 lines of direct constraints + ~1,800 lines of organized reference material (searchable by component type)
- Middle: 675-line plan (the builder's entire world) + reference files

The failure had either too much or too compressed:
- Flagship: 963 lines of competing rules (builder saw 71, but the SYSTEM had 963 interacting constraints creating ambient complexity)
- Remediation: 1,025 lines (but recipe format compensated)

**The critical insight from Report 12:** The variable is not raw line count but INSTRUCTION SALIENCE. At 100 lines, every instruction is salient. At 963 lines, the easiest-to-check rules (binary spatial constraints) dominate attention, and compositional instructions lose salience. CD-006's ~1,900 lines of input worked because the convention spec was ORGANIZED BY COMPONENT TYPE -- the builder could scan to the relevant section. The Flagship's 71 visible lines were unordered constraints with no component-level structure.

**What the threshold actually is:** Not a line count. The threshold is whether the instruction set is NAVIGABLE (organized by component/section, scannable) or COMPETING (flat list of rules that interact in ambiguous ways). A 675-line plan with clear section headers is more processable than a 71-line flat constraint list.

**Confidence: MODERATE.** The mechanism (attention exhaustion under rule competition) is well-grounded in LLM behavior. The specific threshold is fuzzy.

---

## PART 3: SUFFICIENT CONDITIONS

A set is SUFFICIENT if having all conditions in the set has always produced 4/4.

### S1: The CD-006 Configuration (N=1)

```
Opus builder
+ Full design system access (convention spec + catalog + case studies + exemplars)
+ Constitutional/specification tone ("here is what exists")
+ Minimal direct constraints (~100 lines of soul + tokens)
+ Single-agent ownership (one agent builds the full page)
+ Creative latitude (no prescription of how to compose)
+ Multi-agent communication for coordination
```

This produced 39/40. N=1. Unreplicated. The contrarian (Report 16, Challenge 7) correctly notes that the builder had extensive prior work to draw from (12+ exemplar HTML files, Wave 1 identity delta), making the "minimal instruction" characterization misleading.

### S2: The Middle Configuration (N=1)

```
Opus planner (performing all compositional reasoning)
+ Sonnet builder (faithful execution of plan)
+ 675-line recipe with exact per-section CSS values
+ Direct mechanism catalog reference
+ Per-category mechanism minimums (M1 override)
+ Content zone analysis pre-computed
+ Reinforcing pairs documented
+ Transition design specified
+ Binary soul guardrails
```

This produced 4/4. N=1. But with the critical finding from Report 04: the planner did ALL compositional work. The builder added zero creative decisions. The 4/4 is attributable to the Opus planner, not the builder or the recipe format per se.

### Does a Guaranteed-Sufficient Set Exist?

**NO.** With N=2 successes and 4+ confounded variables, we cannot establish a conjunction that GUARANTEES 4/4. Both sufficient sets are N=1. The overlap between them is:

```
OVERLAP OF S1 AND S2:
- Opus performs the compositional reasoning (as builder in S1, as planner in S2)
- Rich compositional vocabulary is accessible (catalog, tokens, exemplars)
- Soul constraints are present and compact
- Content analysis happens BEFORE mechanism selection
```

This overlap is necessary but not demonstrably sufficient. It might produce 3/4 instead of 4/4 on high-complexity content. It has never been tested at Flagship-tier content complexity.

---

## PART 4: HELPFUL CONDITIONS

Conditions that appear to improve odds but were not present in all 4/4 outcomes.

### H1: Opus as the CSS-Writing Agent (Strongest Helpful Condition)

**Evidence position:** Report 12 calls this "the strongest single factor." Report 16 calls it "confounded and unresolvable from our data."

Both are right. Here is the honest assessment:

The Opus correlation is perfect across N=4:
- Opus builder: 39/40, 4/4, 2.5/4
- Sonnet builder: 1.5/4

But the Middle experiment complicates this: Sonnet built the CSS and scored 4/4. The key: Sonnet was executing a 675-line plan written by Opus that contained EXACT CSS values. Sonnet as a "CSS printer" (Report 04's term) can achieve 4/4 when every compositional decision is pre-made by Opus.

**What Opus brings that Sonnet does not** (from Report 08):
1. Creative surplus: Opus deploys 4px borders where 1px suffices, 40 RGB background variation where 15 passes
2. Compositional judgment: Opus chooses WHERE to place grids, WHICH sections get callouts, HOW to vary transitions -- based on content, not minimum compliance
3. Self-correction: Opus catches perceptual problems ("this looks flat") without explicit thresholds
4. Vocabulary fluency: Opus deployed 11 component types, 5 grid layouts, 23 border contexts in CD-006 -- all from training knowledge

**Classification: HELPFUL, trending toward NECESSARY for single-agent architectures.** If the architecture separates planning (Opus) from building (Sonnet), Opus-as-builder is not necessary. If the architecture uses a single agent, Opus is almost certainly necessary because the agent must both compose and execute.

**Confidence: MODERATE-HIGH for the effect; LOW for isolating it from format/volume confounds.**

### H2: Reference Exemplars (Visual Examples of Quality)

CD-006's builder had access to 12+ prior exploration HTML files -- it could SEE what quality looks like. The Middle builder had no exemplars. The Flagship builder had zero exemplars.

CD-006 (39/40, with exemplars) outscored Middle (4/4, without) by approximately 0.75 points on a 4-point scale. This suggests exemplars add value but are not necessary for 4/4.

Report 08 argues exemplars work because Opus abstracts patterns from examples more effectively than from rules: "Teaching painting by showing great paintings vs describing color theory." Plausible but N=1 evidence for the exemplar effect specifically.

**Classification: HELPFUL.** Exemplars may provide the "creative surplus" that separates 4/4 from 39/40, but 4/4 was achieved without them (Middle).

### H3: Inter-Agent Communication

CD-006 had multi-agent messaging and scored 39/40. Middle had zero messaging and scored 4/4 but missed the footer (the smoking gun from the retro-analysis team -- the builder couldn't ask the planner about the footer rendering issue).

**Classification: HELPFUL for catching execution defects, not for compositional quality.** Communication prevents the "missing footer" class of errors but does not drive the "DESIGNED" quality judgment.

### H4: Single Builder Ownership

CD-006: 1 builder. Middle: 1 builder. Flagship: 4 sequential builders. Remediation: 1 builder.

Both 4/4 used single builders. The failure used 4. The mechanism: each handoff between builders causes context degradation. Builder 2 must re-derive Builder 1's compositional logic from the HTML alone.

**Classification: HELPFUL, possibly NECESSARY.** The Flagship's multi-pass fragmentation is a contributor to its failure, but multi-pass is confounded with other variables.

### H5: Perception Thresholds

Neither 4/4 outcome had explicit perception thresholds. Both had agents who implicitly applied perceptible values (CD-006: 40+ RGB background deltas, 4px borders. Middle: planned by Opus who chose 32px vs 64px spacing, 3-zone backgrounds).

The Flagship lacked thresholds AND had Sonnet builders, producing imperceptible CSS (1-8 RGB backgrounds, 0.001em letter-spacing). The Remediation added thresholds AND used Opus, scoring 2.5/4.

**Classification: HELPFUL as a floor-raiser.** Thresholds prevent the sub-perceptual failure mode but do not drive quality. Opus applies perceptible values naturally. Sonnet needs explicit thresholds.

Report 14's assessment: "Perception thresholds are a FLOOR that prevents the Sonnet failure mode but does not produce the Opus success mode. They are necessary for reliability but insufficient for quality."

### H6: Content-Form Resonance / Metaphor

CD-006 exhibits deep content-form resonance: a page about building documentation pages uses the design system's own components as demonstrations. The form argues the content's point.

Middle uses F-PATTERN because the planner recognized the content's information hierarchy matches F-pattern's scan logic. This is content-form fit, though not as deep as CD-006's self-referential resonance.

Report 22 argues this is the difference between 3/4 (COMPOSED) and 4/4 (DESIGNED): "The visual choices do not merely organize information; they constitute a secondary argument that reinforces the primary textual argument."

**Classification: HELPFUL for the ceiling.** Content-form resonance may be what separates COMPOSED (3/4) from DESIGNED (4/4). But it cannot be prescribed (Report 22, Q2) -- only discovered through compositional engagement with the specific content.

### H7: Creative Revision Cycles

Report 22 identifies this as "the single most important insight" and "UNSOLVED" in the pipeline. CD-006's production conditions are unknown, but the builder MAY have revised (we cannot confirm or deny). Middle had zero revision. The Flagship had zero creative revision (only rule-compliance correction).

**Classification: HELPFUL (theoretically strong, empirically untested).** The absence of creative revision from ALL experiments means we have N=0 data on its effect. Report 22's argument is compelling (the 2.5/4 to 4/4 gap is a REVISION gap, not a SPECIFICATION gap) but entirely hypothetical.

---

## PART 5: UNKNOWN CONDITIONS (THE CONFOUNDS)

These are variables we genuinely cannot resolve from N=4 with confounded designs.

### U1: The Model Confound (Opus vs Sonnet)

Between CD-006 (Opus, 39/40) and the Flagship (Sonnet, 1.5/4), FOUR variables change simultaneously:
1. Model (Opus vs Sonnet)
2. Format (Constitutional vs Checklist)
3. Input volume (~100 rules + 1,900 reference vs 71 rules + 0 reference)
4. Content complexity (Medium vs High)

The Middle experiment partially disentangles: Sonnet builder + Opus planner + Recipe format + Medium content = 4/4. This proves Sonnet CAN produce 4/4 when given a complete plan. It does NOT prove Sonnet can produce 4/4 without Opus planning.

**What we cannot determine:**
- Would Opus builder + Checklist format + 71 lines + High content produce 4/4? (Tests model vs format)
- Would Sonnet builder + Recipe format + Full catalog + Medium content produce 4/4? (Tests format + access vs model)
- Would Opus builder + Recipe format + High content produce 4/4? (Tests content complexity ceiling)

Report 16 is correct: "Opus-as-builder" is a HYPOTHESIS with N=4 suggestive correlation, not a demonstrated finding.

### U2: The Content Complexity Confound

Both 4/4 outcomes used medium-complexity content (single-topic, ~6 sections). The only high-complexity test (Flagship, 12 sections) scored 1.5/4. But the Flagship also changed model, format, volume, and architecture simultaneously.

**What we cannot determine:**
- Is Flagship-tier content (12+ sections, multiple themes) INHERENTLY harder to compose for?
- Would the Middle recipe work at Flagship content complexity?
- Does content complexity require additional architectural support (divergent exploration, synthesis) as Report 22 proposes?

The honest answer: we have ZERO data on 4/4 at Flagship content complexity.

### U3: The Iteration Confound

CD-006's production conditions are unknown. Report 22 raises the possibility that CD-006's builder revised its work multiple times within a single session. If true, the "single-pass Opus" model is wrong -- CD-006 may be "iterative-Opus." We cannot resolve this without reconstruction of CD-006's build session.

The Middle experiment was definitively single-pass (the builder wrote the HTML once). It achieved 4/4. This proves single-pass CAN produce 4/4 at Medium tier. It does not prove single-pass suffices at Flagship tier.

### U4: The Reference Material Confound

CD-006 had 12+ exemplar HTML files. Middle had zero exemplars. Both achieved 4/4. This suggests exemplars are not necessary for 4/4.

But CD-006 (39/40) slightly outperformed Middle (4/4 with "professionally stiff" verdict). The 0.75-point gap (on a normalized scale) might be attributable to exemplars, or to Opus vs Sonnet-builder, or to constitutional vs recipe format, or to all three.

---

## PART 6: THE ANTI-CONDITIONS (What Actively Prevents 4/4)

Based on the Flagship failure analysis, these conditions actively prevent 4/4:

### A1: Checklist Format (100% Constraint Verbs)

The Flagship's 71 builder lines were all "Verify/Fail if/Must be." This produces defensive CSS -- minimum viable compliance. Report 05's metaphor: "a food-safety manual instead of a recipe. The result is a food-safe meal with no flavor."

### A2: Inverted Quality Routing

The Flagship routed the mechanism catalog to the planner (who doesn't write CSS) and sent guardrails to the builder (who does write CSS). The richest compositional material went to the wrong agent. This is structurally fixable in any architecture.

### A3: Rule Count > ~20 for the Builder

Report 05 estimates builder attention capacity at ~15-20 simultaneous binary rules. The Flagship had 97. The builder perfectly satisfied the first ~20 (spatial, soul) and violated later ones (multi-coherence, channel deployment). Rule interaction above ~20 creates ambient complexity that degrades all performance.

### A4: Emphasis on Imperceptible Refinement

The Flagship prompt's emphasis on "refinement gradients," "chromatic arcs," and "metaphor channels" directed 22% of the CSS budget toward sub-perceptual micro-typography (letter-spacing 0.001-0.01em, heading color shifts of 1-12 RGB). CD-006 invested those same CSS lines in 11 components, 5 grids, and 3 breakpoints -- all visible.

### A5: Multi-Pass Fragmentation Without Revision Authority

The Flagship's 5 sequential passes could ADD CSS but never RETHINK prior decisions. Pass 2 built on Pass 1's single-column skeleton without authority to restructure it. Each pass optimized locally, producing 34KB of CSS annotations (documentation) and zero additional perceptible mechanisms.

### A6: Absence-as-Restraint Rationalization

The Flagship prompt included "consistent absence reads as restraint" -- providing JUSTIFICATION for not adding borders, grids, or structural variety. A compliant agent reads this and decides not to add visual elements. Report 08: this is an active suppressor of compositional initiative.

---

## PART 7: SYNTHESIS -- THE CONDITION MAP

### Tier 1: NECESSARY (must be true for ANY 4/4)

| ID | Condition | Evidence | Confidence |
|----|-----------|----------|------------|
| **N1** | Compositional intelligence reaches the CSS-writing agent (via direct reference access OR pre-computed plan with exact CSS) | N=4, zero exceptions. CD-006: direct access. Middle: Opus-planned recipe. Flagship: 50:1 compression to builder = 1.5/4. | HIGH |
| **N2** | Instructions are generative (tells what to build), not solely prohibitive (tells what to avoid) | N=4, zero exceptions. Recipe/constitutional = 4/4. Checklist = 1.5/4. | HIGH |
| **N3** | Builder's instruction set is navigable and not attention-exhausting | N=4. Both successes: organized by component/section. Failure: flat constraint list. | MODERATE-HIGH |

### Tier 2: CONDITIONALLY NECESSARY (necessary depending on architecture)

| ID | Condition | When Necessary | Confidence |
|----|-----------|---------------|------------|
| **CN1** | Opus performs the compositional reasoning | Necessary if NO planner pre-computes exact CSS values. Middle proves Sonnet builds 4/4 when Opus PLANS. | MODERATE-HIGH |
| **CN2** | Single-agent file ownership | Necessary if multi-pass architecture is used. Multi-pass with revision authority MIGHT work but is untested. | MODERATE |

### Tier 3: HELPFUL (improve odds but not required)

| ID | Condition | Expected Effect | Confidence |
|----|-----------|----------------|------------|
| **H1** | Opus as builder (not just planner) | +0.5-1.0 on PA-05 scale. Provides creative surplus. | MODERATE-HIGH |
| **H2** | Reference exemplars (crown jewel HTML files) | +0.25-0.5. Opus abstracts quality patterns from examples. | MODERATE |
| **H3** | Inter-agent communication | Prevents execution defects (missing footer class). +0.1-0.2. | MODERATE |
| **H4** | Perception thresholds embedded in instructions | Prevents sub-perceptual CSS. Essential floor for Sonnet; redundant for Opus. | MODERATE |
| **H5** | Content-form resonance discovery | Separates COMPOSED (3/4) from DESIGNED (4/4). Cannot be prescribed. | LOW-MODERATE |
| **H6** | Creative revision cycles (build, critique, revise) | Theoretically highest-ceiling intervention. N=0 data. | LOW (theoretical) |
| **H7** | Divergent exploration (3+ independent builds, select best) | Breaks single-perspective ceiling. N=0 data. Report 22 proposes. | LOW (theoretical) |

### Tier 4: UNKNOWN / CONFOUNDED (cannot determine from evidence)

| ID | Confound | What It Prevents Us From Knowing |
|----|----------|--------------------------------|
| **U1** | Model (Opus vs Sonnet) confounded with format, volume, content | Whether Opus-as-builder is independently necessary |
| **U2** | Content complexity never controlled | Whether any configuration achieves 4/4 at Flagship complexity |
| **U3** | CD-006 iteration history unknown | Whether single-pass is sufficient or implicit iteration drove quality |
| **U4** | Reference material volume confounded with model | Whether exemplars independently contribute or only matter for Opus |

---

## PART 8: THE HONEST ASSESSMENT

### What We Know With Confidence

1. **Compositional intelligence must reach the builder as operational CSS, not compressed rules.** This is the single most robust finding. It survived every challenge across all 8 reports. The mechanism is clear (50:1 compression destroys operational content), the evidence is unambiguous (N=4, zero exceptions), and the fix is structural (route the catalog/plan to the builder).

2. **Generative format beats constraint format.** Recipes and constitutional approaches outperform checklists. The mechanism is grounded in LLM cognitive modes (generative vs defensive). The contrarian's concern that format is confounded with model is valid but the format effect has independent theoretical support.

3. **Excessive rules actively harm output.** 97 rules produced 1.5/4. ~10 rules + rich reference produced 4/4. The attention-exhaustion mechanism is well-understood. The specific threshold (~15-20 simultaneous rules for builders) is approximate.

### What We Think We Know But Haven't Proven

4. **Opus is necessary for compositional reasoning.** The correlation is perfect but confounded. The Middle experiment shows Sonnet can BUILD 4/4 when Opus PLANS. Whether Opus must be the builder or merely the composer is unresolved.

5. **Single-agent ownership beats multi-pass.** Supported by N=4 correlation and a plausible mechanism (context degradation at handoffs). But no controlled experiment has tested multi-pass-with-revision-authority against single-pass.

6. **Creative revision cycles would close the 3/4 to 4/4 gap.** Report 22's strongest argument: revision is the structural equivalent of a design director sending work back with compositional notes. But N=0 experiments. Pure theory.

### What We Don't Know At All

7. **Whether any configuration achieves 4/4 at Flagship content complexity.** N=0 data points. Both 4/4 outcomes used medium content. The content complexity ceiling is completely uncharted.

8. **Whether Opus with minimal constraints and zero pipeline produces 4/4.** The adversarial's "Experiment A" (Report 14) has never been run. If it produces >= 3/4, large portions of the infrastructure are unnecessary.

9. **Whether the design system's research contributes genuine knowledge or just ambient complexity.** CD-006's builder had access to 337 findings' worth of research. Was that essential? Or would Opus with just soul + tokens produce equivalent quality from training knowledge? Unknown.

---

## PART 9: THE MINIMUM CONDITION SET FOR 4/4 (BEST ESTIMATE)

**CAVEAT: These conditions are extrapolated from Middle/Ceiling 4/4 outcomes (the only 4/4 we have). Flagship 4/4 is unobserved and may require conditions beyond this set -- particularly around content-form resonance, creative revision, and multi-perspective synthesis that become critical at Flagship content complexity.**

Given the evidence, the minimum conjunction that I estimate produces Middle/Ceiling 4/4 with >= 60% probability (Flagship 4/4 probability is LOWER -- estimated 35-50%):

```
MINIMUM ESTIMATED CONDITION SET:

1. An Opus agent performs compositional reasoning
   (either as single agent OR as planner for a builder)

2. The CSS-writing agent has DIRECT access to:
   - mechanism-catalog.md (18 mechanisms, full CSS patterns)
   - tokens.css (complete palette/spacing)
   - At least 1 crown jewel exemplar (CD-006 or DD-006)

3. Instructions are GENERATIVE:
   - Action verbs (Read, Analyze, Select, Deploy, Verify)
   - Sequenced steps (content analysis -> pattern selection -> mechanism deployment -> verification)
   - Specific CSS values for key properties (border widths, zone backgrounds, font scale)

4. Soul constraints present but compact:
   - 8-10 binary rules
   - Written as specifications ("border-radius: 0"), not prohibitions ("NEVER use border-radius")

5. Cognitive load managed:
   - <= 20 direct rules for the builder
   - All compositional guidance delivered as navigable reference, not flat rule lists

6. No anti-conditions present:
   - No checklist-only format
   - No inverted quality routing
   - No absence-as-restraint rationalization
   - No emphasis on imperceptible refinement
   - No multi-pass without revision authority
```

**What this set does NOT guarantee:**
- 4/4 at Flagship content complexity (untested -- ZERO data points exist)
- 4/4 without creative revision (may hit 3/4 ceiling)
- 4/4 reliably (may produce 3-4/4 on a distribution, not deterministically)
- That Flagship 4/4 is achievable through ANY specification approach (it may be an emergent property requiring qualitatively different process -- see Report 22)

**What Flagship 4/4 LIKELY requires beyond these conditions (theoretical):**
- The page's visual structure constitutes a compositional ARGUMENT about its content (not just organized presentation). This is the compositional intelligence stack in action: scales, channels, multi-coherence, and the anti-scale model producing semantic density through constraint pressure.
- Content-form resonance that cannot be prescribed -- only discovered through compositional engagement with the specific 12+ section research synthesis
- Creative revision cycles where an agent with aesthetic judgment (not rule compliance) evaluates and rethinks compositional choices
- Possibly divergent exploration (multiple independent builds) to break single-perspective limitations, since Flagship content complexity may exceed what one creative pass can handle

**What would INCREASE confidence toward Flagship 4/4:**
- Add creative revision cycle (build + critique + revise): estimated +0.3-0.5
- Add divergent exploration (3 builders, select best): estimated +0.2-0.4
- Use Opus as builder (not just planner): estimated +0.2-0.5
- Add 2+ exemplar HTML files as quality targets: estimated +0.1-0.3
- Content immersion phase where agent reads content as a READER before composing: estimated effect unknown

---

## PART 10: THE UNCOMFORTABLE CONCLUSIONS

### Conclusion 1: We Cannot Specify 4/4 Into Existence

Report 22's deepest insight: "DESIGNED quality may be a property of the PROCESS, not the ARTIFACT." If this is correct, no specification -- however rich, however well-formatted, however carefully compressed -- can guarantee 4/4. Specification can guarantee a FLOOR (2/4 FUNCTIONAL, maybe 3/4 COMPOSED). The jump to 4/4 DESIGNED requires compositional judgment exercised during building, which is a creative act, not a compliance act.

The evidence supports this: CD-006 (minimal specification, maximal creative latitude) = 39/40. Flagship (maximal specification, minimal creative latitude) = 1.5/4. The correlation between specification richness and output quality is INVERSE.

### Conclusion 2: The Model Question Genuinely Cannot Be Resolved Without Experiments

The contrarian (Report 16) is right: "We cannot isolate the Opus effect from the format effect, content effect, team effect, or volume effect with N=4 and 4 confounded variables." Every analysis that asserts "Opus is key" is expressing a reasonable hypothesis, not a demonstrated finding. The next dollar should buy an experiment, not another analysis report.

### Conclusion 3: Content Complexity Is the Uncharted Variable

Both 4/4 outcomes used medium-complexity content (~6 sections, single topic). The only high-complexity test (Flagship, 12 sections) scored 1.5/4 but changed 4+ variables simultaneously. We genuinely do not know whether Flagship-tier content has a lower ceiling on achievable quality, requires qualitatively different approaches, or would score 4/4 with the Middle recipe configuration and Opus.

### Conclusion 4: The Sufficient Set May Not Exist

Report 14's most provocative point: "CD-006 scored 39/40 without a recipe. It used a constitutional approach. This means recipe format is sufficient but NOT necessary for 4/4. An alternative path to 4/4 exists."

If multiple DIFFERENT configurations can each produce 4/4 (constitutional Opus, recipe-planned Sonnet, possibly others), then 4/4 may not have a single sufficient condition set. Instead, there may be MULTIPLE sufficient paths, each achieving 4/4 through different mechanisms. The necessary conditions (N1-N3) constrain all paths. But the specific configuration within those constraints admits variety.

### Conclusion 5: The Experimental Sequence Is the Answer

Every report -- including the adversarial, including the contrarian, including the metacognitive -- converges on the same recommendation: run experiments. The conditions analysis above is the best pre-experimental estimate we can produce. But with N=4 and 4+ confounds, no further analysis will resolve the unknowns. Only controlled experiments varying one variable at a time can convert hypotheses to findings.

The cheapest informative experiment: give Opus the Middle recipe configuration + Flagship content. If PA-05 >= 3/4, the content complexity confound is partially resolved AND the Middle recipe generalizes upward. If PA-05 < 3/4, content complexity is an independent barrier requiring additional architectural support.

---

**END OF CONDITIONS ANALYSIS**
