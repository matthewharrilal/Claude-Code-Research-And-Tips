# 12: What Configuration ACTUALLY Produces 4/4?

**Agent:** config-finder (Opus 4.6)
**Date:** 2026-02-19
**Method:** Architecture-agnostic empirical analysis of ALL experiment outcomes

---

## PART 1: THE EVIDENCE TABLE

Four experiments. Same design system. Same mechanism catalog. Same soul constraints. Same crown jewel references. Different configurations. Wildly different outcomes.

| Experiment | PA-05 | Agents | Instruction Length | Instruction Format | Builder Model | Communication | Builder Context | Content Complexity |
|------------|-------|--------|-------------------|-------------------|--------------|---------------|----------------|-------------------|
| **CD-006** | 39/40 (~4/4) | Multi-agent | ~50-100 lines (soul + prohibitions + tokens + semantic-rules) | Constitutional (constraints + creative freedom) | **Opus** | **Multi-agent WITH messaging** | Full mechanism catalog + case studies | Medium (combination/pilot) |
| **Middle** | 4/4 DESIGNED | 8 | 100-line planner slice | **RECIPE** (sequenced steps, specific CSS values, action verbs) | **Opus** | Zero messaging (file-bus only) | Direct catalog reference ("Read mechanism-catalog.md") | Medium (single topic) |
| **Flagship** | 1.5/4 DO NOT SHIP | 19 | 963-line prompt (71 lines to builder) | CHECKLIST (97 rules, constraint verbs) | **Sonnet** | Zero messaging (despite mandate) | 13.4% of prompt, 100% constraints, zero CSS recipes | High (12-section research synthesis) |
| **Remediation** | 2.5/4 SHIP WITH FIXES | 16+ | 1,025-line spec | **RECIPE** (9 phases, exact CSS blocks, imperative verbs) | **Opus** | File-bus + SendMessage for blocking findings | Full spec + existing artifact | N/A (transforming existing) |

---

## PART 2: COMMON FACTORS IN 4/4 OUTCOMES

CD-006 (39/40) and Middle (4/4 DESIGNED) share these properties:

### Factor 1: Opus Builder
Both used Opus for the CSS-writing agent.

Evidence chain across ALL 4 experiments:
- CD-006: Opus builder -> 39/40
- Middle: Opus builder -> PA-05 4/4 DESIGNED
- Flagship: Sonnet builders -> PA-05 1.5/4 DO NOT SHIP
- Remediation: Opus builder -> PA-05 2.5/4 SHIP WITH FIXES

**Every successful build used Opus. Every failed build used Sonnet for creative roles.** N=4. Zero exceptions.

The contrarian report (07-contrarian-challenge.md) calls this "the unexamined factor" and "potentially the highest-leverage single intervention." The retrospective synthesis (09-SYNTHESIS.md) confirms: "CD-006 did not score 39/40 because it followed rules. It scored 39/40 because an Opus-level agent made hundreds of judgment calls about borders, spacing, typography, density, and composition -- and those judgment calls were GOOD."

The difference: Sonnet complies meticulously. Opus complies AND creates beyond constraints. Sonnet given 55 prohibitions produces the minimum viable CSS that satisfies all rules. Opus given the same prohibitions produces CSS with SURPLUS -- 4px borders where 1px would suffice, 40 RGB points of background variation where 15 would pass. Surplus is not compliance. Surplus is design judgment.

**Confidence: HIGH (N=4, zero exceptions, Tier 1 pattern)**

### Factor 2: Builder Had Rich Context (Low Information Compression)
Both successful builders had direct access to the design system's compositional vocabulary.

- **CD-006:** Full mechanism catalog + case studies + research findings. Builder could cross-reference patterns and make informed creative decisions. Information compression was LOW -- the builder saw rich, CSS-laden reference material.
- **Middle:** Planner slice said "Read mechanism-catalog.md" as Step 3 of 10. The builder saw the catalog DIRECTLY -- 18 mechanisms with impact profiles, application modes, zone mappings, and CSS patterns. Not compressed rules ABOUT the catalog. The actual catalog.

In contrast:
- **Flagship:** Builder received 71 lines of compressed constraints. The mechanism catalog was routed to the PLANNER (who doesn't write CSS), not the BUILDER (who does). The best reference files went to the wrong agent. Builder visibility: 13.4% of the master prompt, 100% guardrails, zero CSS recipes.

From the contrarian analysis: "The 7.9:1 ratio may not be THE problem. CD-006 was also built under a constraint-heavy regime but with creative latitude. The deeper issue is CD-006's builder was an Opus agent with creative latitude, while the flagship skeleton builder was a Sonnet agent told to hit spatial targets."

**Confidence: HIGH (N=4, confirmed by CSS forensics showing CSS budget misallocation)**

### Factor 3: Recipe Format (Sequenced Steps With Specific Values)
Both 4/4 outcomes involved builder inputs that told the agent WHAT TO DO in sequence.

- **Middle planner slice (100 lines):** 8 soul constraints -> typography trinity -> border widths (4px/3px/1px with semantic meaning) -> M1 override listing 18 mechanisms by category -> 10-step build workflow ("Read prohibitions FIRST, THEN read content, THEN read catalog, THEN select pattern, THEN deploy"). Action verbs: "Read," "Select," "Deploy," "Assess."

- **CD-006:** Constitutional approach (constraints + creative freedom). Not an explicit recipe in the formal sense, but the builder had SEQUENCED PHASES of work (plan, then build, then verify) with rich context at each phase. The constraints were few enough (~50-100 lines) that the Opus agent derived its own implicit recipe.

In contrast:
- **Flagship (71 lines to builder):** All constraints, no steps. "Verify," "Fail if," "Must be." Zero sequence. Zero "do X then Y." Only "verify that X is true about your output."

The metacognitive analysis (05-metacognitive-process.md) identifies this as THE critical structural difference: "The Middle builder was told WHAT TO DO. The Flagship builder was told WHAT NOT TO DO. This is the difference between a generative document and a descriptive document."

**Critical nuance from the contrarian:** CD-006 was NOT built with a recipe. It was built with a constitutional approach (few constraints + creative freedom). This suggests that recipe format is ONE path to 4/4 but not the ONLY path. The deeper variable is whether the builder has GENERATIVE CAPACITY -- either through explicit recipe steps OR through creative latitude + rich context.

**Confidence: MODERATE-HIGH (2/2 for recipe correlation, but CD-006 complicates the thesis)**

### Factor 4: Manageable Cognitive Load (<= ~100 Lines of Core Instructions)
Both 4/4 builders had instruction sets that a single agent could hold in working memory.

- **CD-006:** ~50-100 lines of soul constraints + creative freedom. Few enough to hold simultaneously.
- **Middle:** 100-line planner slice. Every instruction salient.

In contrast:
- **Flagship:** 963-line master prompt. Even with the 75-line builder cap, the SYSTEM had 964 lines of competing constraints that created ambient complexity through rule interaction.

From the fundamental-differences analysis (24-fundamental-differences.md): "An LLM can satisfy any 5 constraints easily. Any 15, reliably. Any 50, with effort. 97 constraints simultaneously? The probability of satisfying ALL of them on a single pass approaches zero."

The Middle succeeded at 100 lines. The Flagship failed at 963 lines (71 visible). The sweet spot for cognitive load appears to be ~40-150 lines of core builder instruction. Beyond that, constraint interaction creates ambient complexity that degrades agent performance.

**Confidence: MODERATE (N=2 direct, supported by theoretical analysis)**

---

## PART 3: COMMON FACTORS IN FAILURES

### The Flagship (1.5/4) had ALL of these:
1. **Sonnet builders** (compliance-only, no creative surplus)
2. **Compressed instructions** (71 lines, 100% constraints, zero CSS recipes)
3. **Inverted quality routing** (CSS-rich files to planner, guardrails to builder)
4. **Zero perception thresholds** (no rule defined minimum perceptible delta)
5. **Checklist format** (constraint verbs, no sequence, no action steps)
6. **Zero inter-agent communication** (despite explicit mandate)
7. **No intermediate perceptual verification** (PA deferred to final gate)
8. **CSS budget misallocation** (22% on imperceptible micro-typography directed by "refinement gradients" emphasis in prompt)

### The Remediation (2.5/4 -- improved but below 4/4) had SOME fixes:
- Opus builder (Factor 1 fixed)
- Recipe format with exact CSS blocks (Factor 3 fixed)
- Full spec access (Factor 2 partially fixed)
- Perception thresholds embedded (new)
- But: TRANSFORMING existing artifact, not generating from scratch
- But: No multi-agent communication (file-bus only)
- But: The artifact it transformed was already structurally deficient

**Key insight:** The remediation fixed 3 of 4 common success factors and achieved 2.5/4 -- an improvement but not 4/4. This suggests that TRANSFORMATION (applying CSS fixes to an existing artifact) has a lower ceiling than GENERATION (creating from scratch). The remediation spec's explicit simplicity guarantees ~3/4 quality but cannot produce emergent quality that requires creative generation.

---

## PART 4: IS IT (a) THROUGH (g)? ANSWERING THE QUESTION DIRECTLY

### (a) Agent count: NO
- CD-006: Multi-agent -> 39/40
- Middle: 8 agents -> 4/4
- Flagship: 19 agents -> 1.5/4
- Remediation: 16+ agents -> 2.5/4

More agents does NOT produce better outcomes. The Middle (8 agents) matched CD-006's quality level. The Flagship (19 agents) failed. Agent count is UNCORRELATED with quality. What matters is what each agent DOES and what they can SEE.

### (b) Instruction length: WEAKLY CORRELATED (INVERSE)
- CD-006: ~50-100 lines -> 39/40
- Middle: 100 lines -> 4/4
- Flagship: 963 lines (71 to builder) -> 1.5/4
- Remediation: 1,025 lines -> 2.5/4

Shorter instructions correlated with better outcomes for GENERATION tasks. But the remediation (1,025 lines) outperformed the flagship (963 lines), so raw length isn't the variable. The variable is what those lines CONTAIN.

### (c) Instruction format: YES -- STRONG FACTOR
Recipe format (sequenced steps, action verbs, specific values) outperformed checklist format (constraints, verify/fail-if verbs) in every comparison. But CD-006 used neither format -- it used a constitutional approach. So format is A factor, not THE factor.

### (d) Opus vs Sonnet: YES -- STRONGEST SINGLE FACTOR
Perfect correlation across N=4:
- Opus builder: 39/40, 4/4, 2.5/4 (all successes or improvements)
- Sonnet builder: 1.5/4 (the only failure)

This is the highest-leverage variable with the cleanest signal. The contrarian thesis -- that "an Opus agent with creative latitude, soul constraints, and a few concrete examples would outperform any amount of prompt enrichment given to Sonnet" -- is supported by all available evidence.

### (e) Compositional intelligence in input: YES -- MODERATE FACTOR
Both 4/4 outcomes gave the builder direct access to the mechanism catalog (the compositional vocabulary). The failure routed compositional intelligence to the wrong agent. But CD-006 scored 39/40 without the 963-line prompt's elaborate compositional intelligence apparatus -- it had the raw catalog, not a compressed version of it.

This suggests: **direct access to compositional vocabulary > compressed rules about compositional principles.** Give the builder the catalog, not rules derived from the catalog.

### (f) Creative freedom: YES -- MODERATE-HIGH FACTOR
CD-006 had maximal creative freedom (constraints + latitude). Middle had moderate freedom (recipe with steps but builder chose pattern). Flagship had minimal freedom (71 lines of constraints, zero creative latitude). The gradient correlates with quality.

But creative freedom alone is insufficient. An Opus agent with creative freedom and no constraints would violate soul rules. The formula is: **constraints + freedom**, not freedom alone.

### (g) Something else: YES -- PERCEPTION THRESHOLDS
Neither CD-006 nor Middle had explicit perception thresholds. But both had Opus builders who IMPLICITLY applied perceptual judgment (writing 4px borders and 40-RGB-point background variation because those values "look right"). The Flagship had Sonnet builders who satisfied abstract rules with sub-perceptual values (0.001em letter-spacing, 3-RGB-point backgrounds) because Sonnet optimizes for compliance, not perception.

Perception thresholds are a FLOOR that prevents the Sonnet failure mode but does not produce the Opus success mode. They are necessary for reliability but insufficient for quality.

---

## PART 5: THE MINIMUM VIABLE CONFIGURATION FOR 4/4

Based on the empirical evidence, here is the minimum configuration that has produced 4/4 outcomes:

### ESSENTIAL (all 4/4 outcomes had these)

| Factor | Minimum Viable Spec | Evidence |
|--------|-------------------|----------|
| **Builder model** | Opus (not Sonnet) | N=4, zero exceptions |
| **Builder context** | Direct access to mechanism catalog + case studies + tokens.css | CD-006 and Middle both read catalog directly |
| **Instruction volume** | <= 150 lines of core builder instruction | CD-006 ~50-100, Middle 100 |
| **Instruction character** | GENERATIVE (tells what to build, not just what to avoid) | Recipe or constitutional approach |
| **Soul constraints** | Present but compact (8-10 binary rules) | Both experiments had soul compliance |

### STRONGLY RECOMMENDED (present in highest outcomes)

| Factor | Spec | Evidence |
|--------|------|----------|
| **Inter-agent communication** | At least file-bus; ideally messaging for blocking issues | CD-006 (39/40) had messaging; Middle (4/4) had file-bus but missed footer |
| **Perception thresholds** | Background >= 15 RGB, font-size >= 2px, letter-spacing >= 0.025em | Prevents sub-perceptual CSS; both successes had Opus who did this implicitly |
| **Intermediate perceptual checks** | Visual verification after each major build phase | CD-006 had this; Middle didn't (but Opus compensated) |
| **Single builder ownership** | One agent writes the HTML file, not multiple sequential builders | Middle: 1 builder -> 4/4; Flagship: 4 sequential builders -> 1.5/4 |

### COUNTERPRODUCTIVE (present only in failure)

| Factor | Why It Hurts | Evidence |
|--------|-------------|----------|
| 97+ rules | Ambient complexity from rule interaction degrades agent performance | Flagship had 97 rules, scored 1.5/4 |
| Checklist format | "Verify/Fail-if" verbs produce minimum viable compliance, not quality surplus | Flagship's 71 lines were 100% constraints |
| Compressed compositional intelligence | Rules ABOUT the catalog are lossy; the catalog ITSELF is generative | 50:1 compression lost all operational content |
| Emphasis on "refinement gradients" | Directs CSS budget toward imperceptible micro-typography | 227 lines (22%) of flagship CSS invisible to human eye |
| Inverted quality routing | CSS-rich files to planner (doesn't write CSS), constraints to builder (writes CSS) | Flagship's mechanism catalog went to planner |
| Multiple sequential builders | Information degrades at each handoff; each builder re-derives context | Flagship: 4 builders, each seeing fragments |

---

## PART 6: THE MINIMUM VIABLE CONFIGURATION -- CONCRETE

```
1 OPUS AGENT
+ Soul constraints (8-10 binary rules, ~15 lines)
+ mechanism-catalog.md (read directly, not compressed)
+ tokens.css (full palette and spacing)
+ 1-2 crown jewel references (CD-006 HTML, DD-006 HTML)
+ A 50-100 line RECIPE with:
    - Sequenced build steps (Phase 0: analyze, Phase 1: skeleton, Phase 2: CSS...)
    - Specific CSS values for key properties (border widths, zone backgrounds, font sizes)
    - Action verbs ("Set," "Add," "Deploy," not "Verify," "Fail if")
    - Per-category mechanism minimums (Spatial: 1+, Material: 1+, etc.)
    - Perception thresholds embedded IN the values (not as separate rules)
+ Content to build with
+ Perceptual self-check after each phase ("Can I SEE the difference?")
```

**Estimated instruction volume:** ~100-150 lines (recipe) + ~400 lines (mechanism catalog, read not compressed) + ~170 lines (tokens.css)

**What this configuration does NOT need:**
- 97 rules (the soul constraints + recipe values embed compliance automatically)
- A separate planner agent (the Opus builder plans and builds)
- 963 lines of master prompt (the recipe + direct catalog reference replaces it)
- Multi-agent orchestration for Middle-tier pages (1 agent suffices)
- Conviction layers or philosophical framing (Opus doesn't need motivation)
- Analytical validation phases (replaced by embedded perceptual checks)

---

## PART 7: WHY THIS CONFIGURATION WORKS (THEORETICAL GROUNDING)

### The Opus Advantage
The fundamental-differences analysis (File 24) identifies the key LLM cognitive asymmetry: "LLMs are better at application than derivation, but the gap is context-dependent." Opus bridges this gap because it can DERIVE good CSS from abstract principles AND APPLY specific values from recipes. Sonnet can only apply. When the recipe provides specific values, both succeed. When the recipe provides principles, only Opus derives correct implementations.

CD-006 proves that Opus with few constraints + rich context achieves 39/40. The constraints prevent bad choices (soul violations). The quality comes from good choices -- hundreds of judgment calls about where to place borders, how much background variation to use, which component types to deploy. These judgment calls are not extractable into rules.

### The Recipe Advantage
The metacognitive analysis (File 05) identifies recipe vs checklist as the critical format distinction:
- Recipe: "Read mechanism-catalog.md, then select a pattern based on content structure, then deploy mechanisms per category." The builder knows WHAT TO DO.
- Checklist: "Verify that >= 3 distinct border weights exist." The builder knows WHAT TO AVOID.

But the DEEPER distinction is: recipes carry OPERATIONAL INTELLIGENCE (specific values, sequenced actions). Checklists carry CONSTRAINT INTELLIGENCE (binary pass/fail thresholds). Operational intelligence generates richness. Constraint intelligence prevents errors. You need both, but the recipe must DOMINATE.

### The Direct-Catalog Advantage
The 50:1 compression from research to rules is the pipeline's information loss. But when the builder reads the mechanism catalog DIRECTLY, compression is zero. The catalog contains CSS patterns with application modes, impact profiles, and zone mappings. An Opus agent reading this catalog will deploy mechanisms with specific CSS values because it can see what the mechanisms look like. An agent reading "deploy >= 2 mechanisms per category" will deploy the minimum.

### The Cognitive Load Advantage
At 100 lines, every instruction is salient. At 963 lines, instructions compete for attention. The most SALIENT rules in a long prompt are the EASIEST TO CHECK -- prohibitions and count gates, not operational instructions. This is why the flagship's builder produced perfect soul compliance (easy binary checks) and zero compositional quality (requires holding the full design intent).

---

## PART 8: CAVEATS AND LIMITATIONS

### Caveat 1: N=4
All findings derive from exactly 4 experiments with different configurations, content types, and contexts. Correlation is suggestive, not causal proof. The cheapest experiment to strengthen the evidence: re-run the flagship content with Opus builder + Middle planner-slice format + direct catalog access. If PA-05 >= 3/4, the configuration thesis is strongly supported.

### Caveat 2: The 3-Variable Confound
Between the flagship (1.5/4) and remediation (2.5/4), three variables changed simultaneously: format (checklist to recipe), specificity (abstract to exact values), AND perception (no thresholds to embedded thresholds). The causal variable is unresolved. A controlled experiment changing ONLY one variable at a time would isolate the mechanism.

### Caveat 3: CD-006 Contradicts the Recipe Thesis
CD-006 scored 39/40 without a recipe. It used a constitutional approach (few constraints + creative freedom + Opus builder). This means recipe format is sufficient but NOT necessary for 4/4. An alternative path to 4/4 exists: Opus + few constraints + rich context + creative latitude. The recipe is a more RELIABLE path because it works with less variance, but the constitutional path achieves HIGHER CEILINGS.

### Caveat 4: Content Complexity
The Middle experiment built a single-topic page. The Flagship built a 12-section research synthesis. Content complexity may independently affect quality. A "minimum viable configuration" that works for medium-complexity content might fail for high-complexity content.

### Caveat 5: Transformation vs Generation
The remediation (2.5/4) achieved its score by TRANSFORMING an existing artifact, not generating from scratch. Transformation has higher floors but lower ceilings. The minimum viable configuration for GENERATION (what this analysis describes) may differ from the minimum for transformation.

---

## PART 9: SYNTHESIS -- THE ANSWER

**What configuration actually produces 4/4?**

**The answer is a CONJUNCTION of 4 factors, not any single variable:**

```
4/4 DESIGNED = Opus builder
            + direct access to compositional vocabulary (catalog, not compressed rules)
            + generative instructions (recipe or constitutional, not checklist)
            + manageable cognitive load (<= 150 lines of core instructions)
```

Remove ANY one factor and quality degrades:
- Remove Opus -> Sonnet produces 1.5/4 (compliance without judgment)
- Remove direct catalog -> Builder invents from scratch or follows minimum viable compliance
- Remove generative format -> Builder checks constraints instead of building
- Remove cognitive load management -> Builder drowns in competing rules

**The single highest-leverage intervention is Opus for the builder.** N=4, zero exceptions, clean signal. If you could change only ONE thing about the flagship experiment, changing the builder from Sonnet to Opus has the highest expected impact.

**The second highest-leverage intervention is giving the builder the mechanism catalog directly** instead of compressed rules about it. This is free -- it requires no new analysis, no new rules, no new phases. Just route the file to the right agent.

**The third is recipe format** -- sequenced steps with specific values. This is the Middle experiment's proven template (100 lines, 10 steps, specific CSS values, action verbs).

**The fourth is cognitive load management** -- keeping the builder's core instructions under ~150 lines. Compliance comes from embedded values, not from separate rules.

**What this means for architecture:** Whether Fat Core, thin orchestrator, or monolithic prompt -- the architecture doesn't matter as much as these 4 factors. Any architecture that delivers Opus + catalog + recipe + manageable load will produce 4/4. Any architecture that fails on any factor will degrade proportionally.

---

**END OF ANALYSIS**
