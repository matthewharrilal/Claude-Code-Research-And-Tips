# Adversarial Review — Convergence Autopsy Assumptions

**Reviewer:** Opus adversarial analyst
**Date:** 2026-02-25
**Sources:** 7 convergence autopsy reports (01-07), master fix checklist (08), crack taxonomy (01), root cause synthesis (06)
**Method:** Steel-man each challenge, evaluate evidence both ways, deliver honest verdict

---

## Challenge 1: Root Cause Validity

### The Strongest Version of the Challenge

The convergence autopsy diagnoses the root cause as "the orchestrator stops when it shouldn't" and proposes iteration as the fix. But what if stopping is a SYMPTOM, not the disease? The crack taxonomy shows initial build quality is flat at PA-05 ~2.0-3.0 across all v3 runs. If the initial build is mediocre, then iteration means "iterate more on a mediocre foundation." The real question: **why is the initial build only PA-05 2.0-3.0 when the Middle-tier experiment hit PA-05 4/4 with 100 lines of spec?**

The root cause synthesis (06-ROOT-CAUSE-SYNTHESIS.md, Part 1) actually ACKNOWLEDGES this: "The Middle-tier experiment achieved PA-05 4/4 with 100 lines of spec, 0 gates, 8 agents, and 35 minutes. The current pipeline achieves PA-05 2.0/4 initial with 10,061 lines of spec, 42 gates, 30 agents, and 200 minutes." But instead of making THIS the root cause, the synthesis pivots to "specification exceeds attention budget" and proposes fixes that increase specification.

If you could get initial builds to PA-05 3.5+ consistently, you wouldn't NEED iteration. The entire convergence autopsy becomes irrelevant.

### Evidence FOR the Challenge

1. **The Middle-tier precedent.** PA-05 4/4, 100 lines of spec. Zero iteration needed. This is the strongest counter-evidence to "iteration is the fix."

2. **Initial quality is flat.** The crack taxonomy documents PA-05 ~2.0 (Yegge) and ~3.0 (Molly) initial. The root cause synthesis confirms this pattern. If initial build quality isn't improving across runs, the problem isn't iteration -- it's that the pipeline's specification/routing/compression pipeline fails before the builder even starts.

3. **REFINE is a workaround, not a solution.** REFINE adds +1.5 PA-05 not because iteration is inherently valuable, but because the REFINE builder receives LESS spec (artistic impression only, ~33 lines) than the initial builder (5,108 lines). The REFINE builder succeeds because it is freed from the specification overload that hobbled the initial builder. This is the root cause synthesis's OWN finding (Part 1, Manifestation 1).

4. **The 14 crack dimensions are mostly initial-build failures.** Of 14 crack dimensions: Template Slot Absence (initial), Compression Loss (initial), Voluntary Non-Execution (initial), Position Effect (initial), Cross-File Reference Rot (initial), Spec Ambiguity (initial). Only Feedback Loop Absence is purely an iteration problem. Fixing iteration doesn't close 12/14 cracks.

5. **The 28 convergence fixes add specification.** FIX-08 restructures REFINE from 6 to 30 lines. FIX-17 adds an Iteration Log. FIX-13 adds an 18-line decision function. Total: ~135 minutes of changes adding ~250+ net lines to pipeline artifacts. If specification overload is the disease, adding specification is the wrong medicine.

### Evidence AGAINST the Challenge

1. **REFINE demonstrably works.** Yegge: +1.5 PA-05 in one cycle. This is not theoretical -- it is measured, replicated-ish (N=1 for full REFINE with re-audit). The fix is not "iteration in principle" but "iteration as measured."

2. **Initial build quality MAY be structurally capped.** The crack taxonomy's 14 dimensions suggest the pipeline has so many information loss junctions that initial build quality cannot exceed ~3.0 without fixing ALL 14 dimensions. Iteration is the cheapest way to recover what the pipeline drops.

3. **The Middle-tier comparison is confounded.** Middle-tier had: different content (selected for amenability), different agent (Opus throughout), different spec format (recipe not checklist), different scope (simpler page). Attributing PA-05 4/4 to "100 lines of spec" ignores at least 4 confounders.

4. **"Fix the initial build" is harder than "fix iteration."** Improving initial build quality requires redesigning the entire spec pipeline (recipe, value tables, brief template, routing, compression). Enabling iteration requires changing ~28 text passages. The convergence fixes are dramatically cheaper.

### Honest Assessment: PARTIALLY VALID

The challenge is RIGHT that initial build quality is the deeper problem, and that iteration is a workaround for specification overload. The root cause synthesis even acknowledges this. But the challenge is WRONG that fixing initial build quality is the better path forward RIGHT NOW. The convergence fixes are cheap (~135 minutes), proven (REFINE works), and unblock the pipeline from its current stuck state. Fixing initial build quality is a larger, slower, higher-risk intervention.

**What should change:** The convergence autopsy should explicitly frame iteration as a BRIDGE, not an endpoint. The real goal is improving initial build quality so iteration becomes optional (like the Middle-tier). But until that larger redesign happens, iteration is the highest-ROI intervention available. FIX-00 (not in the checklist): add a sentence to the opening that says "These fixes make iteration work. The longer-term goal is making iteration unnecessary by improving initial build quality."

---

## Challenge 2: Evidence Base

### The Strongest Version of the Challenge

The 40:1 ratio (Report 01, verdict) is derived from counting textual phrases: 40 stop signals vs 1 iteration instruction. This is PHRASE COUNTING IN A DOCUMENT, not a behavioral measurement. What if the orchestrator stopped because:

- The context window was exhausted (3 session continuations, Report 04 Section 1)
- The orchestrator literally ran out of compute budget
- The user didn't ask for re-audit
- The Molly Panopticon page was genuinely good enough at PA-05 3.0 post-REFINE

The convergence autopsy counts 11 explicit stop signals, 14 implicit stop signals, 8 absent loops, and 7 incentive misalignments and says "therefore, the stop signals caused the stopping." This is post-hoc rationalization. With N=2, the two runs could have stopped for COMPLETELY DIFFERENT REASONS that have nothing to do with textual phrasing.

### Evidence FOR the Challenge

1. **N=2 is dangerously small.** One run (Yegge) DID iterate. One run (Molly) didn't. With N=2, the ONLY valid conclusion is "we observed variable behavior." Everything else is speculation.

2. **Phrase counting is not behavioral measurement.** The 40:1 ratio assumes that the number of phrases correlates with behavioral influence. This is an untested assumption. It could be that ONE phrase in the right location (the REFINE protocol step 5 itself) matters more than 40 phrases in wrong locations. Frequency is not impact.

3. **The two runs had DIFFERENT initial PA-05 scores.** Yegge: 2.0/4. Molly: 3.0/4. Report 06 itself identifies this as the PRIMARY cause (Score-Urgency Effect). This is a CONFOUND -- the stopping behavior may be entirely explained by initial quality score, not by stop signal count.

4. **Context exhaustion is underdetermined.** Report 04 acknowledges the orchestrator was 3 session continuations deep. The step-5 skip could be entirely explained by context window pressure, not by textual phrasing. The autopsy cannot distinguish "stop signals caused stopping" from "context exhaustion caused stopping" because both were present.

5. **The Yegge run DID iterate despite the same stop signals.** If the 40 stop signals were causal, Yegge should also have stopped. The fact that Yegge iterated despite identical textual content proves the stop signals are NOT sufficient causes. Something ELSE differentiated the runs (initial PA-05 score, session timing, orchestrator randomness).

### Evidence AGAINST the Challenge

1. **The stop signals are STRUCTURAL, not just textual.** The challenge focuses on phrase counting, but Report 01 identifies 8 ABSENT LOOPS (no Phase 4, no tracker section, no prompt template, no file naming, no decision function, no convergence criterion, no re-entry point, no state management). These are architectural absences, not phrases. You can't dismiss them as "counting words."

2. **Report 04's self-analysis provides causal evidence.** The Molly orchestrator executed REFINE steps 1-4 correctly and skipped step 5. Report 04 reconstructs the causal chain: context compression -> step 5 invisible -> gate verification substitute -> completion ritual. This is a mechanistic explanation, not just correlation.

3. **Multiple independent investigators converged.** 7 different reports (from 7 different analytical lenses) independently identified the same root cause. This is not phrase counting -- it is cross-validated analysis.

4. **The "different initial scores" confound supports the autopsy.** Report 06 identifies score-urgency inversion as the PRIMARY cause of the Molly stop. This is CONSISTENT with the autopsy's thesis: the pipeline's architecture fails to motivate re-audit when the initial score is decent. The confound doesn't undermine the diagnosis -- it refines it.

### Honest Assessment: PARTIALLY VALID

The 40:1 ratio is rhetorical, not scientific. N=2 is genuinely too small for confident causal inference. The challenge is RIGHT that phrase counting conflates textual frequency with behavioral impact. But the challenge OVERREACHES by dismissing the entire analysis. The structural absences (8 absent loops) are not phrase counts -- they are architectural facts. The causal reconstruction in Report 04 is not post-hoc rationalization -- it is mechanism identification. The 40:1 ratio should be presented as "illustrative" not "causal," and the N=2 limitation should be prominently acknowledged.

**What should change:** The master checklist should add a caveat: "This analysis is based on N=2 runs. The stop signal trace (40:1) is an illustrative count, not a causal proof. The architectural absences (8 absent loops) and the mechanistic reconstruction (Report 04) provide stronger evidence than the phrase count. The recommended validation is: run 3-5 builds with the convergence fixes applied and measure whether REFINE re-audit compliance improves from 50% (1/2) to 80%+."

---

## Challenge 3: Composition vs Iteration

### The Strongest Version of the Challenge

PA-05 initial quality is flat at ~2.0-3.0. REFINE adds +1.5. Ceiling is therefore ~3.5-4.5. But the user wants Flagship (PA-05 4.0+, Tier 5 >= 6/8, metaphor STRUCTURAL). The convergence autopsy proposes allowing up to 2 REFINE passes. If pass 1 adds +1.5 and pass 2 adds diminishing returns (+0.5 at best, per the autopsy's own convergence criterion of delta >= 0.3), the maximum achievable is:

- Initial: 2.0-3.0
- After REFINE 1: 3.5-4.0 (estimated)
- After REFINE 2: 3.8-4.2 (estimated, diminishing returns)

This MIGHT reach Flagship for some content. But it relies on two assumptions:
1. Each REFINE pass adds positive quality (not guaranteed -- pa-weaver.md Section 6.2 documents 5 degradation mechanisms)
2. Compositional quality is additive (it may not be -- a page designed-by-committee through 3 different builders may lack coherent vision)

The fundamental question: **can iteration produce compositional unity, or does it produce compositional averaging?**

### Evidence FOR the Challenge

1. **Compositional coherence may require single authorship.** CD-006 (CEILING tier, 39/40) was built by a single Opus builder in one pass. The Middle-tier (PA-05 4/4) was built by a single Opus builder in one pass. BOTH top results were single-author, single-pass. Multi-author iteration has N=0 evidence at Flagship tier.

2. **Each builder introduces its own aesthetic.** Builder 1 creates a coherent compositional vision. Builder 2 (REFINE) introduces a DIFFERENT vision informed by the PA. Builder 3 (REFINE 2) introduces a THIRD vision. The result may be an averaging of 3 visions -- compositionally competent but lacking the singular intentionality that Flagship requires.

3. **The 5 degradation mechanisms are real.** Multi-channel encoding decouples, density arcs flatten, bookending symmetry breaks, component-context coupling breaks, restraint coherence degrades. These are documented from actual observations, not theoretical.

4. **The REFINE builder doesn't know what it's preserving.** The REFINE builder receives artistic impressions but not the builder's rationale for specific choices. It may "fix" things that were deliberate compositional choices (the anti-loss audit, Report 07, Section 3.1 confirms this gap).

5. **3.5 may be the iteration ceiling.** Yegge went 2.0->3.5 with REFINE. If this is the measured ceiling, then iteration reaches SHIP WITH FIXES (3.5) but not Flagship (4.0+). The convergence fixes enable reliably reaching 3.5 -- which is valuable -- but may not enable reaching 4.0+.

### Evidence AGAINST the Challenge

1. **The 3.5 ceiling is measured from N=1.** One REFINE cycle does not establish the ceiling. A second REFINE with a third builder (reading the second builder's residual + a fresh PA) might reach 4.0. The autopsy acknowledges this is untested (Report 02, Finding 6).

2. **REFINE is compositional, not mechanical.** The protocol specifically designs against compositional averaging: different builder (fresh vision), artistic language (not diagnostic), compositional mode (not corrective). The REFINE builder doesn't "average" -- it RECOMPOSES with new information.

3. **The degradation mechanisms are for FIX cycles, not COMPOSE cycles.** Report 02, Section 3 makes this distinction explicit. The pipeline's own data confirms: mechanical fix cycles (Flagship Remediation) added +1.0. Compositional REFINE (Yegge) added +1.5. The compose cycle outperforms the fix cycle.

4. **Single-authorship evidence is confounded.** CD-006 was Opus (more capable model). Middle-tier had ideal content. The single-pass success may reflect content affordance and model capability, not single authorship.

5. **The residual artifact (FIX-14) addresses the knowledge loss.** If implemented, the REFINE builder would receive the previous builder's "what I would change next" -- reducing compositional drift between builders.

### Honest Assessment: VALID

This is the most important challenge. The convergence autopsy implicitly assumes that iteration produces monotonically improving quality. But compositional quality may have a DIFFERENT quality curve than the autopsy models:

- Fix cycles: monotonically degrading (confirmed)
- Compose cycles: improving for 1-2 iterations, then plateau or decline (hypothesized)
- Single authorship: potentially highest ceiling for Flagship (uncertain)

The autopsy's proposed convergence criterion (delta >= 0.3) partially addresses this -- it detects stalling. But it cannot detect "the page is getting more technically proficient while losing compositional soul" because PA-05 doesn't measure soul directly (it measures DESIGNED, COHERENT, PROPORTIONATE, POLISHED -- all of which can technically improve while the page becomes an averaged committee product).

**What should change:**
1. FIX-24 (GR-70 Non-Regression) should check not just PA-05 but also the Tier 5 metaphor question: "Is the metaphor STRUCTURAL, or does it feel like different builders' visions stitched together?" If Tier 5 metaphor score DROPS while PA-05 rises, that is a degradation signal.
2. The iteration budget should cap at 2 REFINE passes (the checklist already says this) with a NOTE: "If PA-05 reaches 3.5 but not 4.0 after 2 REFINE passes, the path to Flagship is likely through improving initial build quality, not through more iteration."
3. The REFINE builder prompt template (FIX-06) should explicitly say: "You are RECOMPOSING within the original builder's metaphor. You are not introducing a new metaphor. Honor the conviction artifact's metaphor choice."

---

## Challenge 4: Protocol Complexity

### The Strongest Version of the Challenge

FIX-08 restructures REFINE from 6 lines to ~30 lines. The root cause synthesis found orchestrator compliance at ~72%. Report 02 confirms: "Binary rules achieve 100% compliance; judgment rules achieve ~0%." At 72% line-by-line compliance on a 30-line protocol, the probability of following ALL 30 lines is:

0.72^30 = 0.0003 (0.03%)

Even with generous assumptions (80% compliance, only 15 critical lines):
0.80^15 = 0.035 (3.5%)

More protocol is statistically WORSE, not better. The convergence autopsy identifies 8 P0-BLOCKING fixes that collectively add ~150 lines to pipeline artifacts. At 72% compliance, ~42 of those 150 lines will be ignored. Those 42 ignored lines become 42 new crack opportunities.

### Evidence FOR the Challenge

1. **The math is real.** 72% per-line compliance across 30 lines = near-zero probability of full compliance. This is the crack taxonomy's Dimension 7 (Defense Paradox) in action: "adding more tracking creates more things that can be missed."

2. **The pipeline already demonstrates this.** GR-48 (the meta-gate) was added to catch missing gates. GR-48 was itself never executed. Adding protocol to enforce protocol is recursive failure.

3. **The execution tracker demonstrates this.** 375 items at 67% fill = 98 unfilled. Adding iteration fields makes it 395+ items. If fill rate holds, 130+ items unfilled. MORE tracking, MORE gaps.

4. **The Middle-tier succeeded with LESS protocol.** 100 lines of spec, zero gates, PA-05 4/4. If 100 lines achieves 4/4 and 10,061 lines achieves 2.0/4, the relationship between protocol volume and quality is INVERSE, not positive.

### Evidence AGAINST the Challenge

1. **The 72% applies to JUDGMENT rules, not binary rules.** Binary rules achieve ~100% compliance. FIX-08's BEFORE/DURING/AFTER structure is not 30 judgment rules -- it is 3 binary decision points (BEFORE: did you re-read? DURING: is it a different builder? AFTER: did you re-audit?) with supporting context. The compliance rate for the 3 binary checks would be ~100%, even if the supporting prose is partially ignored.

2. **The compliance math assumes independent line failures.** In practice, protocol steps are correlated -- if the orchestrator enters the AFTER section at all, it will likely follow the instructions within it. The bottleneck is entering the section, not following each line.

3. **Structural enforcement bypasses compliance entirely.** FIX-19 (post-REFINE completion gate in tracker) and FIX-24 (GR-70) are not "protocol to follow" -- they are gates that the pipeline checks automatically. No compliance required. The convergence fixes are a MIX of protocol (variable compliance) and structural enforcement (100% compliance).

4. **6 lines that don't work is worse than 30 lines where the critical 3 work.** The current 6-line REFINE protocol produced 0% compliance on step 5 in the Molly run. The 30-line version with visual emphasis (>>>) and BEFORE/DURING/AFTER headings is designed so that even partial reading surfaces the critical instruction. Partial compliance on a well-designed 30-line protocol may outperform full non-compliance on a poorly-positioned 6-line one.

### Honest Assessment: PARTIALLY VALID

The challenge correctly identifies the compliance paradox. More protocol CAN be worse. But it incorrectly applies the 72% per-line multiplication, which assumes every line is an independent judgment call. The convergence fixes are designed with STRUCTURAL enforcement (gates, completion checks) alongside protocol text. The structural elements bypass the compliance problem entirely.

**What should change:**
1. For every fix in the checklist, tag it as STRUCTURAL (gate, automated check, template slot) or TEXTUAL (protocol prose, warning text). Count the split.
2. Prioritize STRUCTURAL fixes over TEXTUAL ones. FIX-19 (completion gate) > FIX-11 (warning text). FIX-24 (GR-70) > FIX-12 (evidence section).
3. For TEXTUAL fixes, apply the "binary decision point" test: can this be reduced to a yes/no check? If not, it will fail.
4. Consider: does the 30-line REFINE protocol NEED to be 30 lines? Could the binary essence be captured in 10 lines with the supporting context in a REFERENCE section that the orchestrator reads IF it chooses to?

The current split in the checklist: approximately 3 STRUCTURAL enforcement items (FIX-19, FIX-24, FIX-25, FIX-26) and 24 TEXTUAL items. That ratio (4:24 = 1:6) should be inverted. More enforcement, less exhortation.

---

## Challenge 5: Gate Inflation

### The Strongest Version of the Challenge

The crack taxonomy documents: gate count 31->31->42, coverage 74%->74%->71%. Coverage DOWN 3% as count UP 35%. The convergence autopsy proposes adding GR-70, GR-75, GR-78 -- bringing the total to 45+. If the coverage trend continues:

- 42 gates at 71% coverage = 30 executed, 12 skipped
- 45 gates at 70% coverage = 31.5 executed, 13.5 skipped
- 50 gates at 68% coverage = 34 executed, 16 skipped

Each new gate INCREASES the absolute number of skipped gates. And GR-48 (the meta-gate that catches skipped gates) has NEVER been executed in ANY run. Adding gates without fixing the meta-gate is pouring water into a leaky bucket.

The convergence autopsy explicitly acknowledges this problem but then proposes... more gates (FIX-24, FIX-25, FIX-26). The crack taxonomy's own conclusion (Section "Meta-Pattern: The 80/20 Split") warns: "The solution cannot be 'more specification.'"

### Evidence FOR the Challenge

1. **The coverage trend is real and measured.** 74%->74%->71%. Each additional gate reduces the per-gate execution probability.

2. **GR-48 has never executed.** The meta-gate designed to catch unexecuted gates is itself unexecuted. This is a PROVEN recursive failure. Adding GR-70/75/78 without fixing GR-48 means the new gates are just as vulnerable to being skipped.

3. **The root cause synthesis recommends against this.** Part 3, "NOT Recommended": "Adding more gates before fixing coverage." The master checklist IGNORES its own root cause synthesis's recommendation.

4. **Gate inflation compounds Dimension 14 (Complexity-Induced Invisibility).** At 42 gates, a missing gate is "a rounding error." At 50 gates, it's an even smaller rounding error. The system becomes too large to audit by gestalt.

### Evidence AGAINST the Challenge

1. **The proposed gates are DIFFERENT in kind.** GR-70, GR-75, GR-78 are not CSS measurement gates. They are PROCEDURAL checks the orchestrator performs on its own outputs. GR-75 (iteration counter) is a 1-line check: "is cycle <= 3?" GR-70 is a 1-line check: "is PA-05(N) >= PA-05(N-1)?" These are structurally different from GR-11 (background delta, requires Playwright DOM inspection). The skip probability is different.

2. **The root cause synthesis's recommendation has a conditional.** It says "Adding more gates BEFORE FIXING COVERAGE." The proposed GR-48 enforcement (making it a verdict precondition, FIX-24 in the original root cause synthesis) IS fixing coverage. The convergence autopsy's Wave D assumes Waves A-C (which include GR-48 enforcement framing) are already complete.

3. **Some gates are PROCEDURAL, not PROGRAMMATIC.** GR-70 is the orchestrator comparing two numbers it already has. GR-75 is the orchestrator counting to 3. These don't require the gate runner infrastructure. They require the orchestrator to do arithmetic it's already doing. The "execution overhead" argument doesn't apply.

### Honest Assessment: PARTIALLY VALID

Gate inflation IS a real problem, and the trend data is concerning. But the challenge conflates two different types of gates: programmatic (run code, measure DOM) and procedural (compare two numbers the orchestrator already has). The procedural gates (GR-70, GR-75) have near-zero skip probability because they are embedded in the decision function (FIX-13) that the orchestrator executes at the verdict point -- the one point where the orchestrator is ALREADY making a decision.

**What should change:**
1. The master checklist should explicitly mark GR-70, GR-75, GR-78 as PROCEDURAL gates embedded in the decision function, not as additions to the gate runner's programmatic gate suite. This distinction matters because procedural gates don't increase the gate runner's execution burden.
2. FIX-24 (GR-70) should be implemented AS PART OF FIX-13 (iteration decision function), not as a separate gate runner addition. The decision function already checks PA-05 delta -- making this a "gate" is just labeling, not additional infrastructure.
3. The net gate count increase should be ZERO programmatic gates (don't add GR-70/75/78 to gate-manifest.json) and 3 procedural checks embedded in the decision function. This preserves gate architecture while adding iteration safety.

---

## Challenge 6: Missing Dimension (Builder Input Volume)

### The Strongest Version of the Challenge

The crack taxonomy documents builder input at 5,108 lines. The root cause synthesis identifies "specification exceeds attention budget" as the root cause with THREE manifestations. The convergence autopsy's 28 fixes collectively address ITERATION (making the pipeline loop) but NOT the builder's initial input volume. If the builder receives 5,108 lines and produces PA-05 2.0, and the REFINE builder receives ~33 lines and produces PA-05 3.5, then:

**The input volume IS the quality signal.** Less input = higher quality. More input = lower quality.

The convergence autopsy fixes iteration. But iteration on a builder that receives 5,108 lines produces PA-05 2.0 each time. The REFINE builder succeeds not because iteration is magic, but because it receives 99.4% LESS input. This is the root cause synthesis's own finding: "every additional spec line has NEGATIVE marginal value past a threshold the pipeline crossed somewhere between 100 and 530 lines."

Fixing iteration while ignoring builder input volume means: reliably running the REFINE loop (good), on an initial build that is reliably mediocre (unchanged). The convergence fixes make mediocrity RECOVERABLE, not preventable.

### Evidence FOR the Challenge

1. **The inverse correlation is measured.** 100 lines -> PA-05 4/4 (Middle). 530 lines -> PA-05 3.5 (projected). 5,108 lines -> PA-05 2.0 (Yegge initial). This is a 50x input increase producing a 2x quality decrease. The relationship is STRONGLY inverse.

2. **The root cause synthesis identifies this as a root cause.** Part 4, "Root Causes With NO Corresponding Checklist Item, #1": "No checklist item proposes REDUCING spec volume." The autopsy's own synthesis says this is the missing fix.

3. **The convergence fixes ADD spec volume.** 28 fixes adding ~250+ lines. If spec overload is the disease, the prescription is more spec. The root cause synthesis warns: "an auxiliary prompt that says 'check these 35 things' will be processed with the same attention budget that already drops 28% of the orchestrator's 4,650-line input."

4. **The REFINE builder's success mechanism is documented.** Report 04, Section 2: "The REFINE builder receives ONLY the artistic impression, which describes feelings ('the middle sags')." The REFINE builder succeeds because it is FREED from specification. If you want the initial builder to succeed, FREE IT from specification too.

### Evidence AGAINST the Challenge

1. **Reducing builder input is a DIFFERENT (larger) intervention.** The convergence autopsy is scoped to "making iteration work." Builder input reduction requires redesigning the brief template, compression algorithm, routing table, and value table format -- a multi-week project vs a ~2-hour fix.

2. **The convergence fixes don't increase BUILDER input.** The 250+ lines are added to the orchestrator, tracker, weaver, and gate specifications. The builder's 5,108 lines are unchanged. The orchestrator's 4,650 lines increase by ~150, which is a 3.2% increase -- meaningful but not catastrophic at the orchestrator's ~72% compliance rate.

3. **Iteration and input reduction are complementary.** Reducing builder input from 5,108 to 1,500 lines might raise initial PA-05 from 2.0 to 3.0. Adding iteration might raise post-REFINE from 3.0 to 4.0. Both are needed. The convergence autopsy handles one; the other should be a separate project.

4. **The inverse correlation has confounders.** Middle-tier had ideal content (selected for amenability), an Opus builder, and a recipe-format brief. The current pipeline has arbitrary content, mixed models, and a compressed brief. Input volume is correlated with quality but may not be the sole cause.

### Honest Assessment: VALID

This is the challenge the convergence autopsy most clearly fails to address. The root cause synthesis IDENTIFIES spec volume as a root cause and then the master checklist IGNORES it. Not a single one of the 28 fixes reduces builder input. Not a single fix reduces orchestrator input. The fixes make the pipeline better at RECOVERING from initial mediocrity without addressing WHY the initial build is mediocre.

**What should change:**
1. Add FIX-29 (P0-BLOCKING): "Before applying any convergence fixes, audit builder input volume. Target: <= 1,500 lines total builder-facing spec (currently 5,108). Identify 3,600+ lines to remove or compress. This is the single highest-leverage intervention for initial build quality."
2. The master checklist should have a "Scope" section that says: "These fixes address ITERATION (making the loop work). They do NOT address INITIAL BUILD QUALITY (making the loop unnecessary). Both are needed. Builder input reduction is the complementary project."
3. Wave A should include not just language surgery but INPUT AUDIT: what does the builder actually receive, and can 50%+ of it be eliminated?

---

## Challenge 7: Cross-Cutting Tension

### The Strongest Version of the Challenge

The convergence autopsy proposes:
- MORE spec (30-line REFINE protocol, 18-line decision function, iteration log, file naming convention, builder residual, finding status map, 3 new gates)
- MORE enforcement (GR-70, GR-75, GR-78, post-REFINE completion gate)
- MORE tracking (iteration log, orchestrator observations, quality state snapshot)

Meanwhile, the crack taxonomy finds:
- Attention decay (Dimension 5): items later in documents are systematically ignored
- Defense paradox (Dimension 7): more tracking = more things to miss
- Complexity-induced invisibility (Dimension 14): 42 gates -> 12 skipped; 375 tracker items -> 98 unfilled
- Spec ambiguity (Dimension 8): more soft language = more opt-out paths

These are CONTRADICTORY prescriptions. The convergence fixes push toward MORE complexity. The crack taxonomy's own conclusions push toward LESS complexity. Implementing both simultaneously would mean: adding iteration infrastructure (more complex) while trying to reduce spec volume (less complex). The net effect is uncertain. It could be net-positive (iteration enables recovery from complexity). Or net-negative (additional complexity further overloads an already-overloaded system).

### Evidence FOR the Challenge

1. **The contradiction is explicit in the root cause synthesis.** Part 4, Item 1: "No checklist item proposes REDUCING spec volume. Every item ADDS lines." Part 5: "Adding another document of judgment rules will achieve the same compliance rate."

2. **The crack taxonomy's 80/20 meta-pattern predicts failure.** "The pipeline's defenses cover the first 80% well and the last 20% not at all." Adding iteration infrastructure adds to the "first 80%" but the quality gap lives in the "last 20%." The convergence fixes are well-covered by existing patterns; they just don't address the gap where quality lives.

3. **The Defense Paradox (Dimension 7) is self-reinforcing.** Adding 3 gates + 1 completion check + iteration log + finding status map + orchestrator observations = ~8 new trackable items. At current miss rates (~30%), 2-3 of these will be missed. The ones that get missed will be the least salient ones -- which are likely the most important ones for iteration quality.

4. **Practical constraint: the orchestrator has a finite context window.** Adding 150 lines to the orchestrator's input means 150 lines of something else get compressed out. At 72% compliance on 4,650 lines, 72% compliance on 4,800 lines means the absolute number of followed instructions stays roughly constant while the total increases. Net: the new instructions displace old instructions.

### Evidence AGAINST the Challenge

1. **The convergence fixes are concentrated, not distributed.** They add infrastructure in ONE location (the iteration boundary) for ONE purpose (making the loop work). They don't spray complexity across the entire pipeline. The attention cost is localized to one decision point.

2. **STRUCTURAL fixes bypass the attention problem.** FIX-19 (completion gate) requires zero attention -- it is checked automatically. FIX-24 (GR-70) is a number comparison the orchestrator already performs. The attention-intensive fixes (FIX-08, FIX-13, FIX-14) are concentrated at the verdict point where the orchestrator is already reading and deciding.

3. **The alternative (doing nothing) is worse.** The pipeline currently stops 50% of the time (1/2 runs). The convergence fixes may bring this to 20%. Even with the complexity cost, 80% REFINE compliance is better than 50%.

4. **The tension can be resolved by sequencing.** Phase 1: Apply convergence fixes (more complexity, but targeted). Phase 2: Reduce builder input (less complexity, broad improvement). The net effect of both phases is: less initial-build complexity + more iteration infrastructure = better.

### Honest Assessment: PARTIALLY VALID

The tension is real but manageable. The challenge correctly identifies that "add more spec to a spec-overloaded system" is paradoxical. But it OVERREACHES by claiming the contradiction is irreconcilable. The convergence fixes are concentrated at a single decision point (post-verdict), not distributed across the pipeline. The structural enforcement (gates, completion checks) bypasses the attention problem. And the two initiatives (more iteration infrastructure + less builder input) can be sequenced.

**What should change:**
1. The master checklist should include a NET COMPLEXITY BUDGET. For every line added, identify a line to remove. Target: net-zero or net-negative line count change.
2. Explicitly sequence the convergence fixes (Phase 1) with builder input reduction (Phase 2). Make it clear that Phase 1 adds targeted complexity and Phase 2 removes broad complexity.
3. Apply a "would removing this fix break the loop?" test to each fix. If removing it doesn't break the loop, it's P2 or lower. This separates ESSENTIAL iteration infrastructure from NICE-TO-HAVE protocol improvements.

---

## Summary Table

| # | Challenge | Verdict | Severity | Impact on Implementation |
|---|-----------|---------|----------|--------------------------|
| 1 | Root cause: initial quality, not iteration | PARTIALLY VALID | HIGH | Frame iteration as bridge, not endpoint |
| 2 | Evidence base: N=2, phrase counting | PARTIALLY VALID | MEDIUM | Add caveats, validate with 3-5 more runs |
| 3 | Composition vs iteration ceiling | VALID | HIGH | Cap at 2 REFINE, add metaphor regression check |
| 4 | Protocol complexity vs compliance | PARTIALLY VALID | MEDIUM | Maximize structural enforcement, minimize text |
| 5 | Gate inflation vs coverage | PARTIALLY VALID | LOW | Embed as procedural checks, not manifest gates |
| 6 | Missing: builder input volume | VALID | CRITICAL | Add FIX-29: builder input audit as P0 |
| 7 | Complexity contradiction | PARTIALLY VALID | MEDIUM | Add complexity budget, sequence with reduction |

---

## The Adversary's Counter-Diagnosis

If I were designing the fix from scratch with the crack taxonomy AND the convergence autopsy as inputs, I would:

**1. Start with builder input reduction, not iteration.**
The root cause synthesis's own data: 100 lines -> PA-05 4/4. 5,108 lines -> PA-05 2.0. Halving builder input from 5,108 to 2,500 lines is likely worth +0.5 to +1.0 PA-05 on initial builds -- comparable to REFINE's +1.5, with ZERO additional runtime cost.

**2. Enable iteration as a BRIDGE while input reduction is underway.**
The convergence fixes are cheap and proven. Apply the structural ones: FIX-19 (completion gate), FIX-24 (GR-70 as part of decision function), FIX-08 (REFINE protocol restructure). Skip the textual exhortation fixes (FIX-10, FIX-16, FIX-20) which are low-compliance and add lines without structural enforcement.

**3. Apply a 10-fix budget, not 28.**
The root cause synthesis's Tier 1 fixes total ~100 lines. The master checklist's 28 fixes total ~250+ lines. The delta (150 lines) is protocol prose that follows the exact pattern the pipeline has proven doesn't work (soft language, judgment rules, optional text). Pick the 10 fixes that are STRUCTURAL (gates, template slots, decision functions) and skip the 18 that are TEXTUAL (warnings, evidence sections, framing changes).

**4. Measure before scaling.**
Apply the 10 structural fixes. Run 3 builds. Measure: (a) Did REFINE re-audit happen without user intervention? (b) What was PA-05 initial vs post-REFINE? (c) Did the new gates execute? Then decide whether the remaining 18 textual fixes are needed.

### My Recommended Cut

From the 28 fixes, keep these 10:

| Fix | Why Keep |
|-----|----------|
| FIX-01 | Step 11 rewrite -- removes the primary kill switch (structural: changes the procedure) |
| FIX-05 | "OUTPUT LABELS" -> "ACTION TRIGGERS" -- removes the noun/verb confusion (structural: changes the vocabulary) |
| FIX-08 | REFINE protocol BEFORE/DURING/AFTER -- the core fix (structural: restructures the protocol) |
| FIX-13 | Iteration decision function -- makes the decision explicit (structural: adds decision tree) |
| FIX-14 | RESIDUAL artifact -- captures builder knowledge (structural: new output type) |
| FIX-17 | Iteration Log in tracker -- creates convergence tracking (structural: new tracker section) |
| FIX-19 | Post-REFINE completion gate -- makes step-5 skip detectable (structural: enforcement) |
| FIX-23 | SKILL.md iteration awareness -- ensures entry point mentions iteration (structural: entry point) |
| FIX-24 | GR-70 embedded in decision function -- prevents quality regression (structural: gate) |
| FIX-NEW | Builder input audit -- reduce 5,108 to <=2,500 lines (structural: input reduction) |

The 18 cuts: FIX-02 (convergence criterion -- nice but soft language), FIX-03 (overview rewrite -- redundant with FIX-09), FIX-04 (dependency graph -- visual, not structural), FIX-06 (prompt template -- can be improvised), FIX-07 (file naming -- nice but not enforced), FIX-09 (remove single-pass labels -- redundant with FIX-01/05), FIX-10 (cost framing -- soft language), FIX-11 (gate warning -- soft language), FIX-12 (known outcomes -- informational), FIX-15 (move protocol -- organizational), FIX-16 (reframe fix-vs-compose -- soft language), FIX-18 (circuit breaker field -- minor), FIX-20 (enhancement opportunities -- informational), FIX-21 (remove predictions -- may harm weaver quality), FIX-22 (finding status map -- complex, P2), FIX-25 (GR-75 -- circuit breaker already exists as prose), FIX-26 (GR-78 -- nice but RECOMMENDED not REQUIRED), FIX-27 (weaver routing -- complex), FIX-28 (reclassify REFINE -- informational).

10 fixes. ~80 lines changed/added. ~45 minutes to implement. The remaining 18 can be evaluated after measuring the impact of the structural 10.

---

*Adversarial review complete. 7 challenges evaluated: 2 VALID, 5 PARTIALLY VALID, 0 REFUTED. Central finding: the convergence autopsy correctly identifies the iteration problem but incorrectly scopes the fix by ignoring builder input volume (the deeper cause) and over-prescribing textual fixes that follow the pipeline's proven failure pattern of soft-language non-compliance.*
