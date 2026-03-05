# Pipeline v3 Ideology Analysis: The Belief System Embedded in the Architecture

**Agent:** Ideology Analyst (Opus)
**Date:** 2026-02-25
**Scope:** What does Pipeline v3 ASSUME about how quality happens? Not "what do the documents say" but "what implicit theory of quality production do they encode?"

---

## 1. THE MASTER EQUATION GAP: Quality as Property, Not Process

### The Equation

```
Quality = Agent Capability × Content Affordance × Spec Fidelity
```

This equation is the pipeline's foundational ontological commitment. It appears in MANIFEST.md line 56, artifact-orchestrator.md Section 0 line 25, and is referenced by council-verdict.md as the organizing principle. Every precondition, every gate, every decision tree flows from it.

### What's Present

Three STATIC FACTORS that are determined BEFORE the build begins:
- **Agent Capability** — resolved at Phase 2 model selection (Opus vs Sonnet)
- **Content Affordance** — resolved at Phase 0 content analysis (heterogeneity + metaphor viability)
- **Spec Fidelity** — resolved at Phase 1 brief assembly (recipe format, zero suppressors, 73-line cap)

### What's Absent

**Iteration does not appear in the equation.** There is no term for "number of refinement passes," no coefficient for "feedback incorporation quality," no variable representing "convergence toward target." The equation is a SNAPSHOT formula — it predicts quality at time T=0 (the moment the builder starts) and has NO MODEL of quality change over time.

### The Ideology This Reveals

The pipeline believes quality is a **PROPERTY OF INITIAL CONDITIONS**, not an **EMERGENT RESULT OF ITERATIVE REFINEMENT**. If you get the three inputs right, quality happens. If you get them wrong, no amount of iteration helps. This is a **crystallization theory** of quality — quality crystallizes in one moment from the right ingredients, like a chemical reaction that either works or doesn't.

The alternative theory — that quality CONVERGES through successive approximation, that each pass reveals structure invisible to the previous pass, that the 37th draft reveals what the 36th could not — has no representation in the pipeline's ontology. Not "rejected after testing." Simply **absent from the conceptual vocabulary**.

### Is This Justified?

**Partially.** The N=4 evidence base genuinely does show that the strongest predictor of quality is initial conditions (recipe format vs checklist format, Middle vs Flagship). But the evidence is confounded. CD-006 (39/40, CEILING tier) was multi-pass with Opus. The REFINE cycle on Yegge Gas Town achieved a +1.5 PA-05 jump (2.0 → 3.5) — the largest single-cycle improvement ever recorded. The pipeline's own best results involve iteration. The equation describes the FLOOR of quality (what initial conditions guarantee), not the CEILING (what refinement can achieve).

The equation should be:

```
Quality = f(Agent Capability × Content Affordance × Spec Fidelity, N_passes)
```

Where `f` is a monotonically increasing function that approaches an asymptote. The pipeline has no model of what that asymptote is, when diminishing returns set in, or how many passes are needed to approach it.

---

## 2. THE REVISION PHOBIA: Five Warnings and Zero Encouragements

### The Evidence

pa-weaver.md Section 6.2 "Revision Degradation Warnings" lists five specific ways fix cycles DEGRADE composition:

| # | Degradation Mechanism | Summary |
|---|----------------------|---------|
| 1 | Multi-channel encoding decouples | Fix to one channel breaks alignment with others |
| 2 | Density arcs flatten | Individual zone correction breaks overall arc |
| 3 | Bookending symmetry breaks | Modifying one end breaks header/footer echo |
| 4 | Component-context coupling breaks | CSS changes disconnect components from zones |
| 5 | Restraint coherence degrades | Changing mechanisms shifts what "restraint" means |

These five warnings are presented as **iron laws** — necessary consequences of iteration. The pa-weaver document says: "PA auditors should be aware that fix cycles CAN DEGRADE composition" (emphasis mine on "can," which in context reads as "inevitably do").

### What's Missing

There is **zero corresponding list** of "Revision Enhancement Mechanisms" — ways that iteration IMPROVES composition. No mention of:
- **Discovery through constraint:** A REFINE builder encountering the first builder's choices discovers compositional possibilities neither could see from scratch
- **Error correction as composition:** Fixing a spacing problem reveals that the spacing was compensating for a more fundamental layout issue, leading to a better layout
- **Asymmetric information:** The PA audit reveals 69 questions' worth of perceptual data the original builder didn't have. A second pass WITH that data should produce a fundamentally different (and better) result than a first pass WITHOUT it
- **The "Michelangelo effect":** Sculpture converges by removing what doesn't belong. Each pass of the chisel reveals more of the form hidden in the stone. The second pass is compositional, not mechanical.

### The Self-Fulfilling Prophecy

The five warnings create a **self-fulfilling prophecy** through two mechanisms:

**Mechanism A: Anchoring.** By presenting five degradation risks and zero enhancement opportunities, the pipeline anchors the orchestrator (and the user) on the belief that iteration is net-negative. This makes it RATIONAL to stop after one REFINE — why risk degradation?

**Mechanism B: Design neglect.** Because the pipeline BELIEVES iteration degrades quality, it invests zero architecture in MAKING iteration work well. There are no "iteration-aware" anti-degradation mechanisms. No "before you REFINE, lock these properties." No "REFINE builder should verify these coupling relationships are preserved." The absence of iteration infrastructure CAUSES iteration to be dangerous, which CONFIRMS the belief that iteration is dangerous.

### Is the Belief Justified?

**The five degradation mechanisms are REAL.** Fix cycles (FIX→FIX→FIX) DO degrade composition. The pipeline's historical evidence from the Flagship experiment confirms this. But the pipeline conflates TWO different processes:

1. **FIXING** — mechanical correction of defects by the SAME builder in REPAIR mode. This DOES degrade composition because it shifts the builder from generative to corrective mode (ITEM 29, orchestrator Section 15).

2. **REFINING** — compositional re-engagement by a DIFFERENT builder in COMPOSING mode. The pipeline DESIGNED this protocol specifically to avoid the degradation problems. The REFINE builder gets artistic impressions, not gate scores. It enters COMPOSITIONAL mode, not repair mode. It is a DIFFERENT Opus agent to defeat continuation bias.

**The pipeline correctly diagnosed that FIXING degrades quality. Then it INCORRECTLY generalized this to ALL iteration, including its own REFINE protocol.** The REFINE protocol was specifically designed to be compositional iteration, not mechanical fixing. But the pipeline's own documentation treats it with the same suspicion as mechanical fixing, because the ideology lumps all iteration together.

### The Critical Asymmetry

artifact-orchestrator.md line 566: "You cannot fix your way to Flagship. Only compose your way."

This principle is CORRECT. But the pipeline uses it to justify STOPPING, when it should be used to justify ITERATING COMPOSITIONALLY. If the only path to Flagship is composition, and if a single pass produces a page at 3.5 but not 4.0, then the answer is ANOTHER COMPOSITIONAL PASS, not "accept 3.5 and ship."

The principle says FIX-CYCLES don't work. It does NOT say COMPOSE-CYCLES don't work. But the pipeline reads it as: "iteration doesn't work."

---

## 3. THE FIX-VS-COMPOSE DICHOTOMY: A Useful Distinction That Metastasized

### The Original Insight

The pipeline draws a critical distinction between FIXING (corrective, mechanical, degrades composition) and COMPOSING (generative, holistic, builds composition). This is encoded in:
- Iteration Policy (orchestrator Section 1): "REBUILD Not FIX"
- REFINE protocol (orchestrator Section 7): different agent, artistic language, compositional mode
- Section 15 "Revision Quality and Mode Theory": GENERATIVE vs CORRECTIVE mode shift

This distinction is genuinely insightful. The evidence supports it: mechanical fix cycles (Flagship Remediation 1.5→2.5) produce smaller gains than compositional rebuilds (Yegge Gas Town REFINE 2.0→3.5).

### How It Metastasized

The fix-vs-compose dichotomy was originally a **classification tool** for different types of iteration. But it has metastasized into a **justification for non-iteration**. The reasoning chain:

1. Fixing degrades composition (true, supported by evidence)
2. Therefore, the pipeline should REBUILD not FIX (true, correct response)
3. But REBUILD is expensive (80-105 min, full Phase 2-3 redo — orchestrator line 670)
4. And REFINE is also expensive (60-75 min + PA re-audit — orchestrator line 669)
5. Therefore, limit iterations to "1 REBUILD + 1 REFINE maximum before human review" (orchestrator line 42, 44)
6. Therefore, the pipeline defaults to SINGLE-PASS with at most TWO additional chances

Step 5 is where the reasoning goes wrong. The cap of "1 REBUILD + 1 REFINE maximum" is presented as a **safety mechanism** (prevent runaway iteration) but functions as a **quality ceiling** (prevent convergence). The pipeline never asks: "What if the second REFINE produces a better page than the first?" It ASSUMES diminishing returns without measuring them.

### The REFINE Protocol Is Already Compositional

The REFINE protocol (orchestrator lines 543-548) is specifically designed to be COMPOSING, not FIXING:

1. DIFFERENT Opus builder (defeats continuation bias) ✓
2. Reads conviction + PA artistic impressions ✓
3. NEVER sees gate scores or threshold numbers ✓
4. Enters COMPOSITIONAL mode ✓
5. Returns to Phase 3 for re-audit ✓

This is NOT fixing. It is a second act of composition informed by perceptual feedback. The pipeline designed a beautiful compositional iteration protocol — and then capped it at one use.

---

## 4. THE EXPERIMENT GATE: Iteration as Experimental Rather Than Fundamental

### The Framing

Multi-pass architecture is classified as EXPERIMENTAL and blocked behind "Experiment #21" (orchestrator lines 91, 861, 864). The council verdict (line 140) states: "Every multi-pass proposal is theoretical (N=0). The Compositional Critic that mediates between passes has never existed."

The experiment protocol (experiment-protocol.md Stage 4, GR-39) treats Flagship-tier output as a VALIDATION TARGET for multi-pass, not as a natural consequence of iterative refinement.

### What This Framing Reveals

The pipeline treats iteration as an **OPTIMIZATION TECHNIQUE** to be validated experimentally, not as a **FUNDAMENTAL PROPERTY** of quality production. This is like treating "writing multiple drafts" as an experimental technique — you wouldn't validate whether revision helps writing; revision IS writing.

The ideology behind the experiment gate:
- **Assumption 1:** Single-pass should be SUFFICIENT for quality output
- **Assumption 2:** Multi-pass is an ENHANCEMENT for higher tiers
- **Assumption 3:** The burden of proof is on ITERATION (show me it helps) not on SINGLE-PASS (show me one shot is enough)

### The Inverted Burden of Proof

In virtually every creative discipline — writing, sculpture, music composition, software development, graphic design — iteration is the DEFAULT. First drafts are expected to be rough. The question is never "should we revise?" but "how many revisions are needed?"

The pipeline inverts this. Iteration must PROVE its value through controlled experiments before being admitted into the default workflow. Single-pass must only prove it doesn't crash (experiment Stage 0, GR-36: "Pipeline runs end-to-end and produces a verdict. No ABORT.").

The asymmetry: single-pass needs to produce ANY output to be validated. Multi-pass needs to produce MEASURABLY BETTER output to be validated. The bar for stopping is "did something come out?" The bar for continuing is "is the improvement statistically significant?"

### Is the Caution Justified?

**Partially.** The pipeline's caution about multi-pass comes from two legitimate concerns:

1. **Cost:** Each REFINE adds 60-75 min + $30-150. For a system that already costs $30-150 per page, doubling the cost for uncertain improvement is a real trade-off.

2. **The Compositional Critic problem:** The original 3-pass architecture relied on a "Compositional Critic" agent that has never been built (N=0). The council correctly identified this as a dependency blocker.

But these concerns are about a SPECIFIC implementation of multi-pass (the 3-pass architecture with a Compositional Critic), not about ITERATION ITSELF. The REFINE protocol already exists and has been demonstrated to work (Yegge Gas Town +1.5 PA-05). The pipeline blocks "multi-pass" because the specific 3-pass design hasn't been validated, even though a simpler form of iterative refinement (REFINE → re-audit → optional second REFINE) requires no new architecture whatsoever.

---

## 5. THE CONTINUATION BIAS PARADOX: One Fresh Perspective Is Not Convergence

### What the Pipeline Gets Right

The REFINE protocol spawns a DIFFERENT Opus agent specifically to defeat continuation bias (orchestrator line 544, ITEM 48). This shows the pipeline UNDERSTANDS that the same agent can't improve its own work effectively. The first builder has formed a mental model of the page and cannot see past it.

### What the Pipeline Misses

A single fresh perspective is NOT convergence. It is ONE counter-opinion.

Consider what happens during REFINE:
1. Builder 1 creates a page with certain compositional choices
2. PA audit identifies 21 refinements across 3 categories (MECHANICAL, STRUCTURAL, COMPOSITIONAL)
3. Builder 2 (the REFINE builder) reads artistic impressions of these findings
4. Builder 2 creates a DIFFERENT page, informed by the feedback

But Builder 2 is ALSO subject to continuation bias — now Builder 2's continuation bias, based on Builder 2's compositional instincts. Builder 2 will make different choices than Builder 1, but Builder 2 will ALSO have blind spots. A third builder (Builder 3) reading the PA audit of Builder 2's work would find different problems.

**The pipeline treats "defeat continuation bias" as a BOOLEAN** (same builder = biased; different builder = unbiased). In reality, continuation bias is a GRADIENT. Each fresh perspective reduces bias asymptotically. The second fresh perspective catches things the first fresh perspective missed. The third catches things the second missed. Convergence requires MULTIPLE fresh perspectives, not just one.

### The Evidence Already Exists

The pipeline's own Mode 4 PA audit uses 9 INDEPENDENT auditors specifically because single-auditor reviews miss critical findings. The Mode 4 PA was designed after the Ceiling experiment, where a 2-PA audit missed the catastrophic whitespace void that 9/9 auditors later flagged. The lesson was: "breadth of perspectives is the key value."

This lesson was applied to AUDITING but not to BUILDING. If 9 independent auditors produce a better quality assessment than 1 auditor, why wouldn't 3 independent builders (each informed by the previous PA) produce a better page than 1 builder?

---

## 6. THE COST-QUALITY TRADEOFF: Optimizing for "Good Enough" Under Budget Pressure

### The Explicit Cost Consciousness

The pipeline documents costs prominently:
- Single-pass: ~60-120 min, ~$30-150 per page (orchestrator line 667)
- REFINE iteration: adds ~60-75 min (orchestrator line 669)
- REBUILD iteration: adds ~80-105 min (orchestrator line 670)
- 3-pass experimental: ~125-255 min, ~$120-1,050 per page (orchestrator line 668)

The council verdict mandated "honest cost estimates" throughout (line 17 of orchestrator). The council's evidence taxonomy explicitly grades predictions by evidence level. The pipeline is admirably honest about costs.

### The Implicit Cap

But honest cost accounting creates an implicit optimization target: **minimize cost subject to quality floor.** The pipeline never states this explicitly, but the architecture encodes it:

- **Default = single-pass** (cheapest option)
- **REFINE = optional, capped at 1** (controlled cost increase)
- **REBUILD = optional, capped at 1** (emergency cost increase)
- **3-pass = experimental, blocked** (highest cost, not available)
- **Maximum = 1 REBUILD + 1 REFINE before human review** (hard cost ceiling)

The decision tree is: "What's the MINIMUM intervention to reach an acceptable quality level?" not "What intervention would produce the BEST possible output?"

### The Budget Framing Creates the Stopping Point

orchestrator line 44: "Budget expectation: 25-40% of builds may need REFINE or REBUILD (per council REC-07). Plan for 1 REBUILD + 1 REFINE maximum before human review."

This frames iteration as a COST CENTER to be budgeted for, not as a VALUE CREATOR to be invested in. When you budget for iteration, you set a cap. When you invest in iteration, you measure returns. The framing determines the behavior.

The pipeline never asks: "Is the marginal quality improvement from a second REFINE worth 60-75 additional minutes?" It simply caps iteration at one and reports the result.

### Is the Cost Concern Legitimate?

**Absolutely.** At $30-150 per single-pass build, with potential for 3x cost from REBUILD+REFINE, the pipeline is expensive. Uncapped iteration could lead to $500+ per page with diminishing returns.

But the solution to "iteration might be expensive" is not "cap iteration at one." It's "measure the quality improvement per iteration and stop when the improvement drops below a threshold." This is the standard approach in any optimization problem: iterate until the marginal improvement is below epsilon.

The pipeline has the measurement infrastructure (PA-05 scoring, 69-question audit, fix-type classification). It has the iteration infrastructure (REFINE protocol, fresh builder spawning). What it lacks is the DECISION RULE: "If PA-05 improved by >= 0.3 from the previous pass, iterate again."

---

## 7. SYNTHESIS: The Pipeline's Implicit Theory of Quality

### The Theory (Reconstructed from Architecture)

1. **Quality is determined at birth.** The master equation treats quality as a function of initial conditions. Get the inputs right and quality happens. Get them wrong and no iteration helps.

2. **Iteration is toxic by default.** The five revision degradation warnings present iteration as a risk to manage, not an opportunity to exploit. The pipeline has zero "iteration enhancement" mechanisms.

3. **Composition and correction are binary opposites.** The fix-vs-compose dichotomy prevents the pipeline from recognizing COMPOSITIONAL ITERATION — the practice of composing, evaluating, and composing again with new information.

4. **One fresh perspective is sufficient.** Continuation bias is treated as a boolean (defeated by one different agent) rather than a gradient (reduced asymptotically by multiple perspectives).

5. **Cost is a stronger concern than convergence.** The pipeline caps iteration to control cost, without measuring whether the quality improvement from additional iteration justifies the cost.

6. **Iteration must prove its value; stopping is the default.** The burden of proof is on continuing, not on stopping. The pipeline terminates with 21 known refinements and calls this success.

### The Alternative Theory (Not Present in the Pipeline)

1. **Quality converges through successive approximation.** Each pass reveals structure invisible to the previous pass. The 20th refinement finds what the 19th could not.

2. **Compositional iteration is fundamentally different from mechanical fixing.** The pipeline already KNOWS this (that's why REFINE exists) but doesn't FOLLOW THROUGH (it caps REFINE at one).

3. **The asymptote exists but is unknown.** Quality improvement per iteration follows a curve — steep at first, then flattening. The pipeline should DISCOVER the curve empirically by iterating until improvement drops below threshold, not ASSUME the curve is flat after N=1.

4. **The 69-question PA audit is wasted if it only informs ONE additional pass.** The audit produces ~200+ findings across 69 questions. A single REFINE builder can absorb and act on a fraction of this feedback. Multiple REFINE passes, each addressing a subset of findings, would extract more value from the audit investment.

5. **Cost per page matters less than quality per page for the stated goal.** The pipeline's stated ambition is Flagship (PA-05 >= 3.5, Tier 5 >= 6/8, metaphor STRUCTURAL). If the path to Flagship requires 3 REFINE passes costing $300 total, that's a valid trade-off given the ambition.

---

## 8. ROOT CAUSE ANALYSIS: Why Did This Ideology Form?

### Historical Trauma: The Flagship Failure

The pipeline's revision phobia traces directly to the Flagship experiment (2026-02-17), where:
- A 963-line master prompt with "all 14 suppressors" produced PA-05 1.5/4
- Subsequent "fix cycles" (Flagship Remediation) improved it to only 2.5/4
- The fix cycles consumed 16+ agents and significant time for a +1.0 PA-05 improvement

This experience was traumatic for the pipeline's design. The lesson the pipeline DREW was: "fix cycles don't work, composition must happen in one shot." The lesson it SHOULD HAVE drawn was: "fix cycles don't work, but COMPOSITIONAL REFINEMENT might work if we design a protocol for it."

### The Compositional Critic Vacuum

The original 3-pass architecture envisioned a "Compositional Critic" agent that would mediate between passes, providing the feedback loop needed for convergence. This agent was never built (N=0), and the council correctly flagged it as EXPERIMENTAL with zero evidence. But the absence of the Compositional Critic created a VACUUM — there was no designed mechanism for guiding iterative improvement, so iteration was abandoned rather than redesigned.

The REFINE protocol partially fills this vacuum (the Weaver's artistic impressions serve as feedback), but the pipeline doesn't recognize that it already HAS a feedback mechanism. It treats REFINE as "one last chance" rather than as "the first step in a convergence loop."

### The Evidence Base Problem

N=4 builds, 7 confounded variables, 9/10 assumptions untested (council CF-04). The pipeline CANNOT distinguish between "single-pass is optimal" and "we've only tried single-pass (mostly)" because the evidence is too thin. The council correctly labeled all predictions as hypotheses, but the ARCHITECTURE proceeds as if single-pass optimality were proven.

### The LLM Continuation Bias Insight Applied Too Narrowly

The pipeline discovered that LLM continuation bias makes self-revision ineffective (the same model can't improve its own output because it continues in the same mode). This is a GENUINE insight, and the REFINE protocol's "different agent" design is a GENUINE solution. But the insight was applied to justify ONE different agent when it should have been applied to justify a SEQUENCE of different agents, each building on the last.

---

## 9. PRESCRIPTIVE FINDINGS: What Should Change

### Finding 1: Add Iteration to the Master Equation

```
Quality = f(Agent Capability × Content Affordance × Spec Fidelity, Iterations)
```

Where `f(x, n)` is a saturating function: `f(x, n) = x × (1 - e^(-αn))` for some convergence rate α. This makes iteration a FIRST-CLASS CONCEPT in the pipeline's quality model, not an afterthought.

### Finding 2: Replace the Hard Cap with a Convergence Criterion

Instead of "Maximum 1 REBUILD + 1 REFINE before human review," use:

```
WHILE PA-05 improved by >= 0.3 from previous pass AND total passes < 4:
  REFINE with fresh Opus builder
  Re-audit
```

The 0.3 threshold is based on the observed REFINE improvement (Yegge Gas Town: +1.5 in one pass — suggesting 0.3 is a conservative floor). The cap at 4 passes prevents runaway costs while allowing convergence.

### Finding 3: Design "Iteration-Aware" Anti-Degradation Mechanisms

For each of the 5 revision degradation warnings, design a PRESERVATION mechanism:

1. Multi-channel encoding decouples → **Lock Sheet:** Before REFINE, the Weaver identifies 3-5 coupling relationships that MUST be preserved. The REFINE builder receives these as "do not decouple" constraints.
2. Density arcs flatten → **Arc Snapshot:** Record the current density arc (Z1→Z4 padding progression). REFINE builder must preserve the arc shape even if values change.
3. Bookending symmetry breaks → **Bookend Lock:** If header-footer echo exists, the REFINE builder must verify echo preservation.
4. Component-context coupling breaks → **Zone Coupling Map:** Record which components are zone-specific. REFINE builder must maintain zone specificity.
5. Restraint coherence degrades → **Restraint Register:** Record what is ABSENT and why. REFINE builder must not fill deliberate voids.

### Finding 4: Create an "Iteration Enhancement" List to Complement the Degradation Warnings

The pipeline needs a Section 6.3 "Revision Enhancement Opportunities" in pa-weaver.md to balance the degradation warnings:

1. **Feedback incorporation:** PA audit reveals perceptual reality invisible to builders
2. **Compositional discovery:** Second builder finds relationships first builder couldn't see
3. **Error-as-signal:** Understanding WHY something failed reveals what the page NEEDS
4. **Asymptotic refinement:** Each pass reduces the remaining gap between current and ideal

### Finding 5: Reclassify Multi-Pass from "EXPERIMENTAL" to "UNTESTED DEFAULT"

The burden of proof should shift. Instead of:
- "Prove multi-pass helps before using it" (current)

Use:
- "Use multi-pass by default; measure whether single-pass is sufficient for specific content types" (proposed)

This aligns with the pipeline's own evidence: its best result (Yegge Gas Town 3.5/4) involved REFINE. Its worst results (Flagship 1.5/4) were the ones where iteration was capped at mechanical fixing.

### Finding 6: Unbundle "Experiment #21" into Smaller Validations

Experiment #21 (creative revision cycle) is blocked because it's coupled with the Compositional Critic and the full 3-pass architecture. But a simpler experiment requires no new architecture:

- Run a build through REFINE
- If PA-05 improves, run REFINE again with a THIRD fresh builder
- Measure: does the second REFINE still improve PA-05?
- If yes: convergence exists and multi-REFINE is justified
- If no: one REFINE is the saturation point

This requires zero new architecture — only the DECISION to run the REFINE protocol more than once.

---

## 10. CONCLUSION: The Pipeline's Deepest Assumption

The pipeline's deepest assumption is that **quality is an event, not a process**. A page is either composed well or composed poorly, and the composition happens in a single generative moment. Iteration is an admission of failure, not a strategy for success.

This assumption is embedded at every level:
- The master equation models quality as a static function of inputs
- The revision degradation warnings frame iteration as risk
- The cost accounting frames iteration as cost
- The experiment gate frames iteration as unproven
- The hard iteration cap frames convergence as unnecessary

The irony is that the pipeline ALREADY HAS the infrastructure for convergence — the REFINE protocol, the 69-question PA audit, the fresh-builder spawning. It built the machine but won't let it run more than once. The ideology says "quality is an event" but the architecture says "quality can converge."

The fix is not architectural. It's ideological. The pipeline needs to believe — and operationalize the belief — that the path from 3.5 to 4.0 is not "get lucky on the first pass" but "compose, evaluate, compose again, evaluate again, until the page stops improving."
