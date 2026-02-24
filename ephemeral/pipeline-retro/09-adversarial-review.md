# Adversarial Review: 8 Pipeline Retrospective Reports

**Reviewer:** Adversarial Reviewer (Opus)
**Date:** 2026-02-23
**Scope:** All 8 primary analysis reports + 8 buddy reviews
**Method:** Stress-test assumptions, find contradictions, identify blind spots, evaluate recommendations

---

## 1. CHALLENGED ASSUMPTIONS

### A1: "72% Recipe Gap, 20% Builder Competence" Is Unfalsifiable

Report 06 (Score Drivers) classifies every lost point as either Recipe Gap, Builder Competence, or Brief Gap. The classification is presented as objective but is actually a POST-HOC rationalization that cannot be verified.

The fundamental problem: ANY defect can be attributed to a recipe gap by saying "the recipe should have told the builder not to do X." This makes "recipe gap" an infinitely expandable category. Under this logic:

- Builder uses pure white? Recipe gap (should have prohibited it).
- Builder uses cold blue accent? Recipe gap (should have specified warm alternatives).
- Builder makes the density arc too gentle? Recipe gap (should have specified compression magnitude).
- Builder creates uniform H2s? Recipe gap (should have required zone-inflected headings).

**The counterfactual test:** If you gave the SAME recipe to a different builder (Opus in composing mode with strong compositional instincts), would the defects persist? If NO -- the defects would vanish because a better builder would independently make better choices -- then these are BUILDER defects, not recipe defects.

The classification matters because it drives the recommendation engine. If 72% of problems are recipe gaps, the fix is "add more rules to the recipe." If 50% are builder competence, the fix is "use a better builder or provide better creative examples." Reports 01-08 unanimously recommend recipe enrichment. Almost no report seriously considers the possibility that the recipe is already good enough and the BUILDER (or the model powering it) is the bottleneck.

**Verdict: QUESTIONABLE.** The 72/20/8 split should be reframed as "72% of defects COULD be prevented by recipe additions" rather than "72% of defects WERE CAUSED BY recipe gaps." These are different claims.

---

### A2: "Sonnet vs Opus" Is Treated as Self-Evident

Reports 01, 02, and 05 all recommend Opus over Sonnet for various roles. Report 02 estimates a +2.0 quality delta for the Brief Assembler. But the buddy review for Report 02 correctly identifies that the Opus quality estimates are **fabricated** -- there are zero Opus brief assembly data points to compare against.

More importantly, every report assumes that Opus is uniformly better. But the project's own history includes a critical data point that NO report examines: **the Flagship experiment used Opus builders and FAILED catastrophically** (PA-05: 1.5/4). The Middle-Tier experiment used a simpler pipeline and SUCCEEDED (PA-05: 4/4, DESIGNED). The current Gas Town build used Opus builder and achieved 3/4 COMPOSED -- better than Flagship but worse than Middle-Tier.

The actual evidence from the project's history:

| Experiment | Builder Model | PA-05 | Pipeline Complexity |
|-----------|--------------|-------|-------------------|
| Middle-Tier | Sonnet | 4/4 DESIGNED | Simple (recipe-driven) |
| Flagship | Opus | 1.5/4 FLAT | Complex (master prompt) |
| Ceiling (CD-006) | Opus | N/A (39/40 PA) | Manual (no pipeline) |
| Gas Town | Opus | 3/4 COMPOSED | Pipeline v3 |

This table suggests that **pipeline complexity, not model choice, is the dominant variable**. The Middle-Tier experiment succeeded with a SIMPLER pipeline and Sonnet builder. The Flagship failed with a MORE COMPLEX pipeline and Opus builder. The Gas Town build falls in between on both axes.

None of the 8 reports examines this pattern. They all assume "use Opus" is a free improvement. But Opus has known failure modes: it over-interprets constraints, spends CSS budget on imperceptible micro-refinements (the Flagship's 22% on sub-perceptual letter-spacing), and can produce "sophisticated but perceptually flat" output. Sonnet's "compliance mode" may actually be a FEATURE for recipe-driven pipelines -- it faithfully executes what it is told without creative self-sabotage.

**Verdict: QUESTIONABLE.** The "always Opus" recommendation needs a controlled experiment (same content, same pipeline, Opus builder vs Sonnet builder) before it can be adopted. The N=4 historical data is confounded by pipeline complexity.

---

### A3: "Fresh-Eyes Violation" May Not Actually Be a Problem

Report 05 (Phase 3B) flags with alarm that 9/9 auditors received source code access, calling it "the single most important protocol failure." But then the report itself acknowledges: "the reports are genuinely perceptual in character -- auditors describe what they SEE and FEEL, not just what the CSS says."

This creates a paradox: the violation is labeled CRITICAL but the impact is assessed as MODERATE. The report wants both -- the rhetorical force of "critical protocol failure" and the analytical honesty of "but it didn't actually hurt."

The stronger question is: **Would screenshot-only auditors produce BETTER reports?** Consider:

1. Auditor C's multi-coherence channel matrix (the best analysis in the set) requires measuring which CSS properties shift at each boundary. This CANNOT be done from screenshots alone -- you need source code to distinguish "background changed by 17 RGB" from "background changed by 50 RGB."

2. Auditor G's 36-treatment typography inventory requires identifying font families, sizes, weights, and spacing. Screenshots at typical resolution cannot distinguish 15px from 16px body text or 0.03em from 0.05em letter-spacing.

3. Auditor F's accessibility audit (skip link, ARIA labels, heading hierarchy) is IMPOSSIBLE from screenshots alone.

The fresh-eyes principle was designed for a different context: preventing auditors from knowing the BUILD INTENT so they judge the OUTPUT. Source code access does not reveal build intent -- it reveals implementation details. The distinction matters. An auditor who reads CSS can measure "this background is #EDE6DA" (implementation detail) without knowing "the metaphor is industrial factory" (build intent).

**The real protocol violation would be: auditors receiving the execution brief, the content map, or other auditors' reports.** These reveal intent. CSS reveals implementation. The 8 reports conflate these.

**Verdict: WRONG (as stated).** The fresh-eyes principle should be reframed: auditors MUST NOT receive the execution brief, content map, gate results, mechanism counts, or other auditors' reports. They SHOULD receive the HTML source file (for measurement precision) but NOT the brief or planning artifacts.

---

### A4: "The Pipeline Produced 175/200 and 3/4 COMPOSED" Is Treated as Success

All 8 reports use 175/200 as the baseline and analyze "why not 200/200" or "why not 4/4." But none asks: **Is 175/200 actually a good score for this much infrastructure?**

The pipeline involves:
- 6 artifacts (~5,000 lines)
- 1 manifest (~883 lines)
- 14+ agent interactions
- ~$40-80 in API costs (estimated from project history)
- ~2-4 hours of orchestrator time

The Middle-Tier experiment (from project memory) produced PA-05 4/4 DESIGNED with a SIMPLER pipeline, fewer agents, and likely lower cost. If a simpler process produces a better result, the complex process may be an overengineered liability, not an asset.

The question none of the 8 reports asks: **What is the minimum viable pipeline that produces PA-05 3/4 COMPOSED?** Could you achieve 175/200 with just: (1) content extraction, (2) a good recipe, (3) an Opus builder, (4) PA audit? That would eliminate Phases 0, 1, and the entire artifact system.

**Verdict: BLIND SPOT.** The reports optimize the existing pipeline without questioning whether the pipeline itself is the right approach.

---

### A5: "9 PA Auditors" Is Assumed to Be the Right Scale

Report 05 recommends 8 specialized + 1 compositional + 1 integrative + 1 weaver = 11 agents. No report asks whether FEWER auditors with BETTER prompts would produce equivalent insight.

The evidence from the reports themselves:
- 5/9 auditors independently flagged Z4->Z5 as the weakest boundary. By auditor #3 flagging this, the information gain from auditors 4 and 5 is zero.
- Auditor A duplicated gate-runner work (Report 05 correctly flags this).
- Auditor I (Integrative) "added minimal unique insight" (Report 05's own words).
- 20+ protocol questions were never asked by any auditor.

The breadth argument ("9 perspectives catch cross-cutting issues") is valid but has diminishing returns. The MEMORY.md notes that "Mode 4 vs lighter audits: 9 independent auditors catch what 2 PAs miss." But this comparison is between 2 and 9. Nobody has tested 5 vs 9.

A focused alternative: 5 auditors (Perception, Coherence, Content-Form, Typography, Integrative) with better-scoped questions would cover the same ground at lower cost and with higher signal-to-noise ratio.

**Verdict: QUESTIONABLE.** The optimal auditor count has never been experimentally determined. The default of 9 may be tradition rather than necessity.

---

## 2. CONTRADICTIONS BETWEEN REPORTS

### C1: Brief Line Budget

| Source | Claimed Budget |
|--------|---------------|
| Report 02, Section 3 | 93-113 lines (Tiers 1-4) + 30-50 lines (appendix) = 123-163 total |
| Report 07, Section 2 | 93-113 lines (manifest) |
| Report 08, Section 2 | 93-113 vs 143-163 vs 165 actual -- flags as contradiction |
| Actual brief | 165 lines |

Report 02 says the 164-line brief is "at the upper edge of the specified range" and "within acceptable range." Report 08 says it exceeds the spec and flags the discrepancy. Report 07 uses the manifest's 93-113 figure and says the brief is "significantly exceeds" it.

**Who is right?** Report 08. The manifest says 93-113 for the constraint layer, the routing artifact sums to 143-163 total, and the actual output is 165. These are three different numbers in three documents, and only Report 08 cleanly identifies this as a contradiction that needs resolution.

### C2: Gate Coverage Assessment

| Source | Assessment |
|--------|-----------|
| Report 04 | 10 of 42 gates run (23.8%) -- "critical gap" |
| Report 07 | 15 gates run -- different count |
| Report 08 | Notes 42 gate descriptions with zero code |

Reports 04 and 07 disagree on how many gates were actually run (10 vs 15). The discrepancy appears to be counting methodology: Report 04 counts 10 distinct gate TYPES (border-radius, box-shadow, container width, etc.), while Report 07 appears to count individual check instances including sub-checks.

### C3: Sonnet Brief Quality

| Source | Assessment |
|--------|-----------|
| Report 01 | Sonnet Phase 0 produced "~80% of what Opus would have" |
| Report 02 | Sonnet brief scores 6.3/10 overall, Opus estimated 8.3/10 |
| Report 02 buddy review | "These numbers are entirely fabricated" |
| Report 07 | Tier 1 voice quality "suspiciously good for Sonnet" |
| Report 07 buddy review | The world-description text exists in the artifact already |

The buddy review for Report 02 is devastating: the Opus quality estimates have N=0 data points. And the buddy review for Report 07 resolves the "suspiciously good" mystery -- the Tier 1 voice comes from pre-written world-description fields in artifact-identity-perception.md, not from Sonnet creativity or orchestrator coaching.

**This means the Sonnet brief quality is HIGHER than Report 02 estimates.** If Sonnet faithfully extracted pre-written voice (Tier 1: 9/10) and competently structured the brief (Tiers 2-3: 7/10), the under-investment in Tier 4 (5/10) is the only real weakness. That gives an overall of ~7/10, not 6.3/10.

### C4: What Prevents DESIGNED?

| Source | Primary Barrier |
|--------|---------------|
| Report 03 | Zone background blending (5/9 auditors) + single-column monotony |
| Report 06 | Recipe gaps (72% of lost points) -- add rules |
| Report 05 | Fresh-eyes violation + missing Tier 5 questions |
| Report 02 | Tier 4 under-investment in brief |

Each report identifies a different "primary barrier." This is expected from specialized analyses but the reports do not reconcile their different answers. Are all four equally important? Is one dominant? Report 11 (synthesis) would need to resolve this, but the 8 primary reports leave it open.

---

## 3. BLIND SPOTS -- What ALL 8 Analysts Missed

### B1: The Content Selection Problem

All 8 reports analyze how well the pipeline processed the Gas Town content. NONE asks: **Is Gas Town content an easy or hard test case for the pipeline?**

Gas Town has:
- A native structural metaphor (factory) -- the pipeline's COMPOSED mode is designed for exactly this
- High structural heterogeneity (7+ element types) -- textbook COMPOSED territory
- Expert readers -- allows dense, sophisticated design
- Rich emotional register -- gives the builder material to work with

This is arguably the EASIEST possible content for Pipeline v3. Every pipeline feature (metaphor routing, zone architecture, multi-coherence, density arc) has natural content to work with. The 175/200 score may reflect content affordance more than pipeline quality.

A harder test: What happens with pure prose content (a philosophy essay with no code, no tables, no diagrams)? Or pure reference content (an API documentation page)? Or content with NO natural metaphor? Pipeline v3 routes these to APPLIED mode, but the reports only analyze COMPOSED mode performance.

**If the pipeline scores 175/200 on its BEST content type, the actual quality floor may be much lower on average content.**

### B2: Prompt Template Reusability

Report 07 provides copy-paste-ready prompt templates for all agent roles -- the most operationally valuable output in the entire retrospective. But no report asks: **Will these templates produce the same quality when used by a fresh instance?**

The templates encode the DECISIONS made by the experienced orchestrator (e.g., which voice to use in Tier 1, what calibration to include in Tier 2, what dispositions to emphasize). A fresh instance using these templates would produce output SHAPED by the orchestrator's implicit preferences. This is a form of context crystallization -- turning accumulated judgment into static instructions.

The risk: the templates freeze the pipeline at its current quality level. They prevent future builders from discovering BETTER approaches that the template does not anticipate. A future content piece might benefit from a different Tier 1 voice or a different Tier 4 emphasis, but the template locks in the current pattern.

**No report addresses the tension between template rigidity and creative discovery.**

### B3: The Scoring System Itself

The 175/200 score aggregates 9 auditors who each score 5 questions on a 5-point scale (8 auditors x 5 questions x 5 points = 200, plus Auditor I's 4-point PA-05). But no report examines whether:

1. **The 5-point scale is well-calibrated.** What is the difference between 3/5 and 4/5? Report 05 notes that auditors use different standards, but no report proposes calibration.

2. **The dimensions are equally weighted.** A 1-point loss on Soul (Auditor A) counts the same as a 1-point loss on Spatial (Auditor H). But a soul violation (identity break) should arguably be weighted heavier than a spatial nuance.

3. **The score is reproducible.** If you ran the SAME 9 auditors on the SAME page tomorrow, would you get 175/200 again? Or 170? Or 180? The scoring variance is unknown.

4. **175/200 means anything absolute.** Is this "good"? "Adequate"? "Excellent"? Without calibration against other pages, 175/200 is a relative number with no absolute meaning.

### B4: Cost-Benefit of Enrichments

Reports 01-08 collectively propose approximately 60-80 enrichment recommendations across BLOCKING, SIGNIFICANT, and MINOR tiers. No report asks: **What is the marginal return on each enrichment?**

The memory file notes: "Complexity ratchet: rules only accumulate, never retire -- needs sunset protocol." The 8 reports are about to add 60+ new rules to a system that already has ~885 items across 6 artifacts. The current pipeline already has a 7.9:1 guardrail-to-playbook ratio (from prior research). Adding more rules will make this worse, not better.

The enrichment recommendations assume that MORE SPECIFICATION = BETTER OUTPUT. But the project's own history contradicts this: the Flagship experiment had the most rules and the worst output. The Middle-Tier experiment had fewer rules and the best output.

**No report applies the project's own "recipe vs checklist" finding to its own recommendations.** The reports are writing CHECKLISTS ("add this rule, add that rule") when the pipeline research says RECIPES work better.

### B5: The Orchestrator as Hidden Variable

Report 07 (Context Gap) is the only report that seriously examines orchestrator context leakage. But even Report 07 treats leakage as a PROBLEM to be fixed (by adding templates that encode the leaked context). No report considers that the orchestrator's judgment IS the quality engine and that the artifacts are documentation of that judgment, not replacements for it.

The pipeline's quality may be a function of: `Q = f(orchestrator_skill) * g(artifacts) * h(builder_model)`. If `f(orchestrator_skill)` dominates, then improving `g(artifacts)` has diminishing returns. A masterful orchestrator with mediocre artifacts produces better output than a fresh instance with perfect artifacts. This is the "jazz musician vs sheet music" problem -- the sheet music helps but the musician's ears matter more.

---

## 4. TESTING THE RECOMMENDATIONS

### R1: "Add Content Tensions to Routing Artifact" (Reports 01, 07)

**Will it work?** Probably yes. Content tensions emerged organically from the Gas Town content analyst and propagated successfully through the brief. Codifying them as Operation #7 is low-risk.

**Could it backfire?** If content has no natural tensions (e.g., a straightforward API reference), the content analyst would be forced to invent artificial tensions to satisfy the protocol. This could waste tokens and introduce spurious structure.

**Verdict: STRONG** -- but add a clause: "If no tensions are present, state 'No significant tensions identified' and proceed."

### R2: "Enforce Tier 4 Budget Allocation" (Report 02)

**Will it work?** Possibly. The 25-line Tier 4 lost technique vocabulary. But the 40-line budget recommendation assumes that MORE DISPOSITION TEXT = BETTER BUILDER BEHAVIOR. This is unproven. The builder may benefit more from 3 vivid examples than from 8 adequate descriptions.

**Could it backfire?** If enforced mechanically, the brief assembler might pad Tier 4 with generic technique lists to hit the line count. "Write 35+ lines of Tier 4" could produce 35 lines of filler rather than 25 lines of essence.

**Verdict: QUESTIONABLE** -- budget as MINIMUM is reasonable, but the metric should be "all 8 dispositions have technique vocabulary," not "35+ lines total."

### R3: "Add Executable Gate Runner JavaScript" (Reports 04, 07, 08)

**Will it work?** YES. This is the single most unambiguously correct recommendation across all 8 reports. The gate runner has descriptions without code. Adding code eliminates the "written from memory" problem entirely.

**Could it backfire?** Only if the JavaScript implementations contain bugs that cause false positives/negatives. Report 04 provides proposed code for 12 gates -- this code should be tested against the actual Gas Town output before being codified.

**Verdict: STRONG** -- the clearest, most defensible recommendation in the entire retrospective.

### R4: "Use Opus for Brief Assembler" (Reports 01, 02)

**Will it work?** Unknown. N=0 data points for Opus brief assembly. The estimated +2.0 quality delta is fabricated (as the buddy review correctly flags).

**Could it backfire?** Yes. Opus is more expensive (~5x). Opus may over-elaborate, producing a 250-line brief that overwhelms the builder. Opus may add "creative" embellishments that the routing artifact does not sanction. The Sonnet brief was actually functional -- it produced COMPOSED output.

**Verdict: QUESTIONABLE** -- needs experimental validation before adoption. The safer move is to improve the TEMPLATE that Sonnet receives, not to replace Sonnet with Opus.

### R5: "Enforce Fresh-Eyes Principle" (Report 05)

**Will it work?** It would reduce auditor precision. As argued in A3 above, screenshot-only auditors cannot perform the measurements that produced the best analysis (multi-coherence matrix, typography inventory, accessibility audit).

**Could it backfire?** Yes. The most actionable auditor reports (C and G, both TIER 1 quality per Report 05's own ranking) relied on source code access. Enforcing screenshot-only would degrade these reports to TIER 2-3 quality.

**Verdict: WRONG (as stated).** The principle should be reframed: no access to brief/content-map/gate-results/other-reports. Source code access should be PERMITTED for measurement auditors (B, C, G) and PROHIBITED for impression auditors (A, I).

### R6: "Add Tier 5 Questions" (Report 05)

**Will it work?** Probably yes for detection. The 9 Tier 5 questions (PA-60 through PA-68) are well-designed for distinguishing COMPOSED from DESIGNED. They were skipped entirely in this execution.

**Could it backfire?** Adding 9 more questions requires either adding an auditor (Report 05's "Auditor J: Compositional Depth") or increasing existing auditor question loads. Report 05 already identifies question load imbalance as a problem. Adding Auditor J is reasonable if wall-clock time is not a constraint (parallel execution).

**Verdict: STRONG** -- but only if an additional auditor is spawned. Do not redistribute to existing auditors.

### R7: "Raise Background Delta Target from 15 to 25 RGB" (Reports 03, 06)

**Will it work?** YES for preventing the Z4->Z5 problem. 25 RGB is perceptibly distinct; 15 is barely visible.

**Could it backfire?** In a warm cream palette with 6 zones, requiring 25 RGB between EVERY adjacent pair constrains the color space severely. With 6 zones, that is 5 boundaries, each needing 25+ RGB delta. The total range from lightest to darkest would need to be at least 125 RGB across one channel. For warm creams (R: 220-255, G: 210-255, B: 200-255), 125 RGB range on a single channel means the darkest zone would be very dark (B: 130) -- no longer "warm cream." The builder would be forced out of the warm-cream family.

**A better target: 20 RGB.** This prevents the Z4->Z5 problem (17 was the failure point) while keeping 6 zones feasible within the warm palette.

**Verdict: QUESTIONABLE as stated (25 too aggressive for 6-zone warm palettes).** Recommend 20 RGB floor with 25 as compositional target, matching the calibration table format.

### R8: "60+ Enrichment Recommendations Across 8 Reports"

The collective enrichment list is enormous. Approximate counts:

- Report 01: 2 BLOCKING, 6 SIGNIFICANT, 3 MINOR = 11
- Report 02: 3 BLOCKING, 5 SIGNIFICANT, 3 MINOR = 11
- Report 03: 8 ranked enrichments = 8
- Report 04: 3 CRITICAL, 4 HIGH, 5 MODERATE, 3 LOW = 15
- Report 05: 3 BLOCKING, 4 SIGNIFICANT, 3 NICE-TO-HAVE = 10
- Report 06: 12 recipe enrichments = 12
- Report 07: 4 BLOCKING, 5 HIGH, 5 MEDIUM = 14
- Report 08: 2 BLOCKING, 8 HIGH, 7 MEDIUM, 3 LOW = 20

**Total: ~100 enrichment recommendations.**

If all 100 were applied, the artifact set would grow from ~5,000 lines to ~7,000-8,000 lines. The meta-to-output ratio (already 2.6:1 per MEMORY.md) would increase further. The pipeline's own research warns that "complexity ratchet: rules only accumulate, never retire."

**No report proposes REMOVING anything.** This is the clearest blind spot. For every rule added, what existing rule can be retired? The 8 reports are pure accretion.

---

## 5. QUESTIONING THE 3/4 SCORE

### Is COMPOSED Actually Correct?

**Arguments for HIGHER (3.5/4):**
- 17-18 mechanisms is strong (Middle-Tier at DESIGNED had 12)
- Factory metaphor is genuinely structural (border hierarchy maps to org chart)
- Multi-coherence averages 4.64 channels per boundary (Auditor C)
- The inversion block is a legitimate D-04 surprise
- Concept-based CSS naming throughout

**Arguments for LOWER (2.5/4):**
- Zone backgrounds blur (3 of 6 zones look similar at scanning speed per Auditor I)
- Single-column layout throughout except one grid
- H2 uniformity across 5 zones
- Density arc is "gentle" not "dramatic"
- Post-footer void is a craft defect

**My assessment: 3/4 is correct.** The page is clearly above ASSEMBLED (there is genuine compositional thinking) but clearly below DESIGNED (too many uniformities and one persistent weakness). The Z4->Z5 boundary is a SINGLE defect that cascades across 6 auditor deductions -- fixing it alone would lift the score to approximately 3.25/4 but would not reach DESIGNED without spatial variety and typographic enrichment.

---

## 6. MODEL CHOICE CRITIQUE

### The "Always Opus" Trap

Reports 01, 02, 05, and 07 all recommend Opus for various roles. Let me map the actual recommendation landscape:

| Role | Current Model | Recommendation | Evidence Base |
|------|--------------|---------------|--------------|
| Content Analyst | Sonnet | Opus (Report 01) | N=1, estimated 80% quality |
| Brief Assembler | Sonnet* | Opus (Report 02) | N=0, entirely speculative |
| Builder | Opus | Keep Opus (all reports) | N=1 at COMPOSED |
| PA Auditors | Mixed | Not discussed | N/A |
| Gate Runner | Orchestrator | Not an LLM task | N/A |
| Weaver | Not run | Opus (implied) | N/A |

*Note: Reports 01 and 02 assume the Brief Assembler was Sonnet, but I see no definitive evidence of this in the artifacts themselves. The MANIFEST recommends Opus for the Brief Assembler (line 112). If the Brief Assembler WAS Opus and produced the 165-line brief, then the "Sonnet limitation" narrative collapses entirely -- an Opus brief assembler under-invested in Tier 4, which is a PROMPT QUALITY issue, not a model quality issue.

**The hidden cost of Opus everywhere:**
- ~5x token cost per agent
- Potentially slower (longer generation times)
- Opus's creative elaboration can HURT when compliance is needed (the Flagship failure)
- No evidence that Opus content analyst would produce materially different zone architecture
- The Tier 1 voice quality came from pre-written text in the artifacts, not from model creativity

**My recommendation: Use Sonnet for extraction roles (Content Analyst, Gate Runner, PA Auditors A/B/F) and Opus for composition roles (Brief Assembler, Builder, PA Auditors C/G/I).** This targets Opus spending at the roles where compositional thinking adds value and saves cost on roles where compliance is sufficient.

---

## 7. OVERENGINEERING RISKS

### O1: The 100-Enrichment Avalanche

As noted in Section 4, the 8 reports propose ~100 enrichments. Applying all of them would:
- Add ~2,000-3,000 lines to artifacts
- Increase the orchestrator's reading burden by ~40-60%
- Create more opportunities for contradictions between artifacts
- Make the pipeline HARDER to execute for a fresh instance (more to read = more to miss)

**The paradox: Report 07 identifies "execution specificity" as the critical gap (1.5/5), then proposes adding MORE specification.** But the specification already exists -- 5,000 lines of it. The problem is not AMOUNT of specification but FORM of specification (prose descriptions vs executable templates). Adding 3,000 more lines of prose does not fix a form problem.

### O2: The Prompt Template Trap

Report 07's prompt templates are the most valuable deliverable but also the most dangerous. They freeze the orchestrator's implicit decisions into explicit instructions. Once codified, these templates become the "canonical" way to prompt each agent. Future orchestrators will use them verbatim instead of adapting to the specific content.

**The better approach:** Provide prompt templates as EXAMPLES, not as SPECIFICATIONS. Label them: "Example prompt for Gas Town content. Adapt for your content's specific needs." This preserves the value (a fresh instance has a starting point) without the rigidity (it knows to adapt).

### O3: The 11-Auditor Recommendation

Report 05 proposes 8 specialized + 1 compositional + 1 integrative + 1 weaver = 11 agents. The current 9+1+1 already has load imbalance (Auditor C: 14 questions, Auditor H: 5 questions). Adding auditors without reducing per-auditor question count will create MORE reports to synthesize, MORE potential contradictions, and MORE cost.

**The simpler fix:** Keep 9 auditors. Fix the question assignments. Ensure all Tier 5 questions are asked. The 9-auditor architecture is not broken -- the question DISTRIBUTION is broken.

---

## 8. THE FRESH-INSTANCE PROBLEM

### Will the Proposed Templates Actually Work?

Report 07 provides complete prompt templates for all agent roles. The critical question: will a fresh Opus instance, reading ONLY these templates and the artifacts, produce output comparable to the experienced orchestrator?

**Predicted failures:**

1. **Phase 0: Content analyst will produce a different content map.** The template specifies 7 operations but the quality of execution depends on the analyst's "reading" of the content. Two different Opus instances reading the same Gas Town extraction will identify different tensions, different metaphor candidates, and potentially different zone architectures. The template standardizes FORMAT but not JUDGMENT.

2. **Phase 1: Brief assembler will under-invest in Tier 3 compositional detail.** The template says "describe what shifts at each zone boundary" but a fresh instance has no model for what "good boundary description" looks like. The worked example (Gas Town brief) helps but is one data point.

3. **Phase 3A: Gate runner JavaScript may produce false results.** Report 04 provides proposed JavaScript for 12 gates. This code has NOT been tested against the actual Gas Town HTML. Zone selectors (`.zone-intake`, `.zone-floor`) are hard-coded -- a builder using different class names would silently return empty results.

4. **Phase 3B: PA auditors will still deviate from question assignments.** Report 05 documents that 0/9 auditors followed exact protocol assignments. The proposed template adds each question as a mandatory section heading, but auditors may still reorganize, skip, or substitute questions based on what they observe. The template addresses FORMAT compliance but not CONTENT compliance.

**The fundamental issue:** Templates reduce variance in the MEDIAN case but cannot prevent failure in edge cases. A fresh instance will produce output within 1 standard deviation of the experienced orchestrator's output on average, but will occasionally fail in ways the templates do not anticipate.

---

## 9. VERDICT: RECOMMENDATION CLASSIFICATION

### STRONG (Should Definitely Apply)

1. **Add executable gate runner JavaScript to artifact-gate-runner.md** (Reports 04, 07, 08). Unanimous, unambiguous, zero downside risk. The single highest-ROI enrichment.

2. **Add content tension identification as Operation #7** (Reports 01, 07). Low-risk codification of an emergent practice that demonstrably helped.

3. **Standardize density arc notation** (Report 01). Minor effort, eliminates format ambiguity.

4. **Create the TC Brief Template** (Reports 07, 08). A BLOCKING prerequisite that both reports independently flag. Cannot run the pipeline without it.

5. **Add Tier 5 questions to PA audit** (Report 05). The DESIGNED-detection battery was entirely missing. Essential for distinguishing 3/4 from 4/4.

6. **Add per-question scoring rubric for PA auditors** (Report 05). Currently "4/5" means different things to different auditors. Binary criteria per question would reduce scoring variance.

7. **Resolve stacked gap threshold contradiction** (Report 08). Three documents say three different numbers (120px, 150px, and implicit). Pick one and update all references.

8. **Reference Gas Town outputs as worked examples** (Report 08). Zero-effort (files already exist), high value for fresh instances.

9. **Fix Z4->Z5 boundary in recipe** (Reports 03, 06). Add "target 20+ RGB delta between adjacent zones" to Phase 2. The single most impactful recipe change.

### QUESTIONABLE (Need More Evidence)

10. **"Always use Opus" for Brief Assembler and Content Analyst** (Reports 01, 02). N=0 experimental data. Improve the template first; test model swap second.

11. **Enforce Tier 4 budget to 35+ lines** (Report 02). Budget enforcement could produce filler. Better: require all 8 dispositions to have technique vocabulary, regardless of line count.

12. **Raise background delta floor from 15 to 25 RGB** (Reports 03, 06). 25 is too aggressive for 6-zone warm palettes. Recommend 20 as floor, 25 as compositional target.

13. **Add 11 auditors** (Report 05). The question distribution is broken, not the auditor count. Fix assignments first; add auditors only if gaps remain.

14. **Add prompt templates as SPECIFICATIONS** (Report 07). Add them as EXAMPLES with adaptation guidance instead. Prevents the template rigidity trap.

15. **Add component-to-zone mapping table** (Report 03, 08). Good in theory but content-dependent. A mapping table for Gas Town does not help a future philosophy essay page.

### WRONG (Should Not Apply)

16. **"Enforce fresh-eyes by removing source code access"** (Report 05). Source code enables the best auditor reports (C and G). Remove brief/content-map/gate-results instead. Allow source code for measurement auditors.

17. **Reclassify 72% of defects as recipe gaps** (Report 06). This classification drives over-specification. Many "recipe gaps" are actually "builder decisions that a better template or builder would handle." Do not add 12 new rules to compensate for one builder's specific choices.

18. **Merge Auditor A into gate runner entirely** (Report 05). Auditor A found cold accent colors -- a genuinely perceptual finding that no gate runner can detect. Repurpose as a first-impression auditor, do not eliminate.

---

## 10. META-OBSERVATION: The Reports Reproduce the Pipeline's Own Failure Mode

The 8 retrospective reports collectively exhibit the exact pattern they diagnose in the pipeline: **over-specification without proportionate actionability.** The reports contain ~8,000 lines of analysis producing ~100 enrichment recommendations. The enrichment-to-implementation ratio will likely follow the same compression pattern the pipeline research already documented: 50:1 compression from analysis to behavioral constraint, 99.8% information loss.

If the synthesis team (Task #11) applies the reports' own "recipe vs checklist" finding, they will produce a SHORT, SEQUENCED list of 10-15 changes rather than a 100-item enrichment catalog. The adversarial recommendation is: **treat the 8 reports as research, not as a to-do list.** Extract the 10 changes with highest expected value, apply them, and run the pipeline again. Let the NEXT retrospective determine whether the remaining 90 enrichments are still needed.

---

*End of adversarial review. 18 recommendations classified: 9 STRONG, 6 QUESTIONABLE, 3 WRONG. Key blind spots: content selection bias, cost-benefit of enrichments, the orchestrator as hidden variable, and the 100-enrichment avalanche. The pipeline's own research predicts that applying all 100 enrichments will hurt more than help.*
