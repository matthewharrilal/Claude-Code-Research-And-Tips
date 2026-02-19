# Contradictions and Tensions Map
# ═══════════════════════════════════════════════════════════════
# Pipeline Analysis Corpus -- Discussion Guide
# Source: 10 adversarial/meta files (14, 15, 20, 24, 25, 26, 28, 32, 38, 41)
# ═══════════════════════════════════════════════════════════════

## How to Use This Document

This is NOT a summary. It is a map of WHERE the corpus disagrees with itself,
ranked by how much each disagreement matters for future pipeline design. Every
tension is sourced to specific files. Every contradiction includes exact quotes
or precise claims from both sides.

**Reading order:**
1. Skim the Productive Tensions (Section 1) to find the 2-3 that matter most
   to your current decision
2. Check whether those tensions have Unresolved Contradictions (Section 2)
   with harder evidence
3. Read the Big 5 Open Questions (Section 3) for the experiments that would
   actually resolve them
4. Use Consensus Findings (Section 4) as anchoring -- these are what the
   corpus does NOT disagree about

**Warning:** Several tensions are entangled. The three-variable conflation
(T-03) affects the interpretation of at least 6 other tensions. Read T-03
before drawing conclusions from T-01, T-02, T-06, T-08, T-12, or T-14.


# ═══════════════════════════════════════════════════════════════
# SECTION 1: PRODUCTIVE TENSIONS (18 total, ranked by discussion value)
# ═══════════════════════════════════════════════════════════════

## T-01: Recipe Format as Causal vs Correlational
**Rank: 1 (highest discussion value)**

**The tension:** The corpus's dominant finding -- that "recipe format" caused
the remediation's improvement over the master prompt -- is challenged as
potentially correlational. The recipe format was never the only variable
that changed.

**Side A (Causal):**
- Files 02, 04, 05, 18, 24, 41
- The master prompt used declarative/constitutional format; the remediation
  used sequenced imperative steps. The builder's behavior changed dramatically.
  File 04 documents the builder following the recipe phase-by-phase. File 24
  frames this as "Specification vs Procedure" -- two fundamentally different
  cognitive instruments.

**Side B (Correlational):**
- Files 20, 25, 26, 32
- File 20 directly states the recipe thesis is "OVERSTATED" and that the real
  distinction is concrete-vs-abstract, not recipe-vs-checklist. File 25 notes
  the recipe thesis is "under-tested." File 26 identifies this as the #1 most
  dangerous bias: "recipe as causal not correlational." File 32 documents this
  as contradiction C1.

**Evidence strength:** Side A has more files (6 vs 4) but Side B's challenge
is structurally stronger -- it identifies a confound that Side A never
addresses. Side A shows correlation with extensive documentation; Side B
shows the correlation proves nothing about causation.

**Why it matters:** If recipe format is merely correlational, then the entire
operational recommendation to "use recipe format" (file 42) is unsupported.
The pipeline would need a different explanation for why remediation improved.

**Discussion prompt:** "If we gave the flagship builder the exact same
remediation content but in constitutional/declarative format, what would
happen? Would PA-05 still reach 2.5/4?"

**Missing experiment:** The cheapest informative experiment: take the
remediation's CONTENT (specific CSS values, perception thresholds, Phase 0
deallocation) and present it in constitutional format. If the artifact
improves anyway, format was correlational. If it stays flat, format was
causal. File 20 proposes this exact experiment. No one has run it.

---

## T-02: Specificity vs Format vs Perception Thresholds (Three-Variable Conflation)
**Rank: 2**

**The tension:** Three variables changed simultaneously between the master
prompt and remediation. The corpus attributes success to format, but it
could equally be specificity or perception thresholds.

**Side A (Format is primary):**
- Files 02, 04, 18, 24
- The shift from "Verify X" to "Do X then check Y" changed builder behavior.
  File 24's "Specification vs Procedure" analysis treats format as the
  architectural difference.

**Side B (Specificity or thresholds are primary):**
- Files 20, 25, 26, 32
- File 32 (meta-finding MF-03) explicitly names this: "FORMAT, SPECIFICITY,
  and PERCEPTION THRESHOLDS changed simultaneously." File 20 argues the real
  driver is concrete values (">= 15 RGB points") not sequenced steps. File 25
  notes that "analysts found what they expected."

**Evidence strength:** WEAK on both sides. This is definitionally
unresolvable from N=2 data where all three variables co-vary. File 32 rates
this as the highest-priority meta-finding.

**Why it matters:** The operational implications differ radically:
- If FORMAT: restructure all prompts as recipes
- If SPECIFICITY: add concrete values to any format
- If THRESHOLDS: add perception minimums to any format
These are three different engineering tasks.

**Discussion prompt:** "Which of the three changes would you test first if
you could only run one experiment?"

**Missing experiment:** Three variants: (A) recipe format + abstract values,
(B) constitution format + specific values + thresholds, (C) recipe format +
specific values + thresholds. Compare PA-05 across all three.

---

## T-03: Is 100% Agreement a Signal of Convergence or Groupthink?
**Rank: 3**

**The tension:** File 28 reports 100% cross-agent agreement on all 10 major
findings (0 disagreements across 71 agent-finding pairs). This is either
remarkably strong evidence or a smoking gun for groupthink.

**Side A (Genuine convergence):**
- File 28
- 87.6% overall consistency, 100% on major findings. The findings are
  objectively verifiable in many cases (e.g., the CSS lines ARE sub-perceptual;
  the stacking gaps ARE 210-276px). Convergence on objective facts is expected.

**Side B (Groupthink signal):**
- Files 25, 26, 14, 38
- File 25 explicitly warns that "analysts find what they expect." File 26
  identifies "N=2 treated as N=large" as a dangerous bias. File 14 documents
  11 shared blind spots -- beliefs held by ALL analysts that none challenge.
  File 38 notes that compression will preserve the thesis and lose the
  self-corrections. All 50+ agents are Claude instances with similar priors
  (file 14, blind spot #11).

**Evidence strength:** Side B is stronger on structural grounds. 100%
agreement among agents with identical architecture, training data, and priors
is NOT the same as 100% agreement among independent observers. File 28 itself
acknowledges this but frames it as strength rather than limitation.

**Why it matters:** If groupthink, then the "consensus findings" in this very
document (Section 4) and in file 41 are unreliable. The entire corpus could
be a 1.7MB echo chamber.

**Discussion prompt:** "What would a human CSS expert with no knowledge of
this design system say about the flagship artifact? Would they identify the
same root causes?"

**Missing experiment:** Give the flagship HTML to 3-5 human designers with
no context about the design system. Ask them to identify why it "feels flat."
Compare their root causes to the corpus's root causes.

---

## T-04: CD-006 as Benchmark -- Examined or Assumed?
**Rank: 4**

**The tension:** CD-006 (39/40) is treated as the gold standard throughout
the corpus, but its production conditions are never analyzed with the same
rigor applied to the flagship's failures.

**Side A (Valid benchmark):**
- Files 01, 05, 24, 41
- CD-006 scored 39/40 on evaluation. Its CSS, HTML, and compositional
  techniques are documented. It demonstrates that the design system CAN
  produce high-quality output.

**Side B (Unexamined benchmark):**
- Files 20, 25, 26, 14
- File 25 identifies "CD-006 as unexamined benchmark" as one of 5 cross-report
  findings. File 20 asks whether CD-006's Opus builder, different content,
  different team topology, and different prompt explain its success -- variables
  uncontrolled. File 14 lists "remediation superiority assumed" as blind
  spot #1. CD-006 was built by Opus; the flagship was built by Sonnet. This
  single variable is never isolated.

**Evidence strength:** Side B is structurally devastating. The corpus
benchmarks everything against CD-006 but never asks why CD-006 succeeded.
Was it the prompt? The builder model? The content? The team lead's skill?
The iteration count? Unknown.

**Why it matters:** If CD-006's success was primarily due to Opus-as-builder
(file 41 notes this as unexamined), then no amount of prompt engineering will
close the gap when using Sonnet builders.

**Discussion prompt:** "What if we gave Sonnet the exact prompt and content
that produced CD-006? Would it reach 39/40?"

**Missing experiment:** Rebuild CD-006 with a Sonnet builder, same prompt,
same content, same team topology. If PA-05 drops, the model IS the variable.

---

## T-05: Sub-Perceptual CSS -- Zero Value or Unmeasured Value?
**Rank: 5**

**The tension:** The corpus unanimously treats the flagship's 233 lines of
sub-perceptual CSS as waste. But no file examines whether sub-perceptual
properties have AGGREGATE or GESTALT effects that single-property measurement
misses.

**Side A (Zero value):**
- Files 02, 05, 08, 24, 41, 42
- 23.7% of the flagship's CSS produced no visible change. Letter-spacing of
  0.001em is below any monitor's rendering capability. Removing these lines
  (Phase 0 deallocation) was the remediation's first move.

**Side B (Unmeasured value):**
- File 25 (alone, weakly)
- File 25 notes that "sub-perceptual = zero value" is unexamined. No file
  tests whether removing sub-perceptual CSS changes the OVERALL feel. Gestalt
  psychology suggests many sub-threshold stimuli can produce supra-threshold
  aggregate effects. The corpus measures property-by-property, never holistically.

**Evidence strength:** Side A has volume (6+ files); Side B has theoretical
plausibility but zero empirical evidence. This tension is notable precisely
because it is so one-sided -- a BLIND SPOT rather than a debate.

**Why it matters:** If sub-perceptual CSS has aggregate value, Phase 0
deallocation is destructive. The remediation's improvement came DESPITE
removing it, not because of it.

**Discussion prompt:** "Take the remediated HTML. Add back the 233 lines of
sub-perceptual CSS. Does the page look different in a blind comparison?"

**Missing experiment:** A/B test: remediated HTML with and without sub-
perceptual CSS. 10 human evaluators, blind comparison. If no one can tell
the difference, the zero-value claim is validated.

---

## T-06: Binary Rules -- Compliance Machine or Quality Machine?
**Rank: 6**

**The tension:** Binary rules achieve ~100% agent compliance. But compliance
is not quality. The flagship PASSED all programmatic gates while scoring
PA-05 1.5/4.

**Side A (Binary rules are the solution):**
- Files 02, 21, 41
- Judgment rules achieve ~0% compliance. Binary rules achieve ~100%. Therefore,
  convert all judgment rules to binary rules. This is described as "THE most
  important architectural principle" in file 41.

**Side B (Binary rules are necessary but insufficient):**
- Files 13, 20, 25, 26, 38
- File 20 argues that the flagship's failure proves binary rules are
  insufficient -- it passed ALL binary gates and still failed perceptually.
  File 25 notes that ">= 3 distinct spacing values" is satisfied by
  48px/49px/50px -- technically compliant, semantically empty. File 38
  observes that the corpus diagnoses this problem (binary compliance without
  quality) but doesn't solve it.

**Evidence strength:** Both sides are strong. The disagreement is not about
WHETHER binary rules achieve compliance (they do) but about WHETHER
compliance entails quality (it doesn't). The corpus acknowledges this
paradox but offers no resolution beyond "add perceptual thresholds" --
which is itself a binary rule.

**Why it matters:** The design system's entire enforcement architecture is
built on binary rules. If binary rules can't guarantee quality, the
architecture has a fundamental gap.

**Discussion prompt:** "Is there a third category between binary rules
(100% compliance, variable quality) and judgment rules (0% compliance)?
What would 'semantic rules' look like?"

**Missing experiment:** Design 5 rules that are binary (unambiguous pass/fail)
but ALSO semantically meaningful (passing actually produces good output).
Test whether agents can comply AND produce quality.

---

## T-07: Conviction Language -- Catalyst or Noise?
**Rank: 7**

**The tension:** The remediation uses "conviction sandwich" structure with
strong belief language. Some files see this as crucial for agent motivation;
others see it as irrelevant token waste.

**Side A (Conviction helps):**
- Files 22, 24, 41
- File 24 frames conviction as part of the "Procedure" paradigm -- builders
  need to know WHY they're doing something to do it well. File 22 analyzes
  structural placement of conviction statements. File 41 includes conviction
  sandwich as an operational principle.

**Side B (Conviction is noise):**
- Files 18, 21, 26
- File 26 challenges whether conviction language affects Sonnet/Opus behavior
  at all. File 18 notes the prompt craftsmanship shift included conviction
  but doesn't isolate its effect. File 21's verbiage analysis shows conviction
  adds tokens without measurable behavioral change.

**Evidence strength:** WEAK on both sides. No file tests conviction language
in isolation. It always co-varies with other changes.

**Why it matters:** Conviction language consumes tokens. If it's noise, those
tokens could hold additional specific CSS values or examples.

**Discussion prompt:** "Strip all conviction language from the remediation
prompt. Does the builder produce different CSS?"

**Missing experiment:** Two prompt variants: remediation with conviction,
remediation without conviction (replaced by additional CSS examples using
same token count). Compare builder output.

---

## T-08: Perception Thresholds -- Science or Assertion?
**Rank: 8**

**The tension:** The corpus treats specific perception thresholds (background
>= 10 RGB, font-size >= 2px, letter-spacing >= 0.025em) as established
minimums. These values come from a SINGLE agent's analysis, not from
perceptual science.

**Side A (Thresholds are operationally useful):**
- Files 08, 24, 42, 41
- File 08 derives specific thresholds from analysis of the flagship's
  imperceptible properties. File 42 operationalizes them as gate criteria.
  File 41 includes them in the irreducible core (Section 6).

**Side B (Thresholds are asserted, not validated):**
- Files 15, 25, 14
- File 15 discovers that S-03 (backgrounds >= 15 RGB) is a HALLUCINATION --
  the analyses invented a rule that doesn't exist in any source document. The
  actual S-03 is about header proportions. File 25 questions the threshold
  values. File 14 notes that "statistical power" is a gap -- no perceptual
  testing was done.

**Evidence strength:** Side B has a devastating point: the S-03 hallucination
(file 15) proves that at least one "threshold" was fabricated by the analysis
process itself. If the corpus can hallucinate a rule and then treat it as
established, other threshold values may be similarly groundless.

**Why it matters:** If the thresholds are wrong, the remediation's
programmatic gates are measuring the wrong things. Over-strict thresholds
would reject valid designs; under-strict would pass flat ones.

**Discussion prompt:** "The corpus hallucinated rule S-03 (>= 15 RGB
backgrounds). Which other threshold values should we distrust?"

**Missing experiment:** Empirical threshold validation: create CSS property
variations at different delta values, present to 20+ evaluators, determine
actual just-noticeable-difference (JND) for each property.

---

## T-09: Single-Agent vs Multi-Agent for Novel Builds
**Rank: 9**

**The tension:** The remediation succeeded with a simpler team topology.
Some files argue this means multi-agent is unnecessary; others argue the
remediation was brownfield (fixing existing HTML) while novel builds
are greenfield.

**Side A (Multi-agent for novel builds):**
- Files 07, 22, 24
- File 07 documents the process topology shift. File 24 argues that
  novel builds require the "telescope" (master prompt's broad specification)
  while remediation requires the "microscope" (focused procedure). File 22
  notes structural advantages of multi-agent for complex layouts.

**Side B (Simpler topology is better):**
- Files 05, 20, 26
- File 20 argues the remediation's simpler topology proves complexity was the
  problem. File 26 challenges whether multi-agent findings generalize beyond
  this specific remediation case. File 05 notes CSS philosophy shifts that
  favor single-builder clarity.

**Evidence strength:** Both sides are confounded by brownfield vs greenfield.
The remediation modified existing HTML; it didn't create from scratch. Every
file comparing topologies is comparing apples (greenfield flagship) to
oranges (brownfield remediation).

**Why it matters:** Team topology is one of the highest-cost decisions in
pipeline design. Getting it wrong wastes 3-10x agent-hours.

**Discussion prompt:** "For a brand-new page with new content, would you
use the flagship's team topology or the remediation's?"

**Missing experiment:** Same content, same prompt format, two topology
variants: (A) multi-agent with planner/builder/reviewer, (B) single
Opus builder with recipe prompt. Compare PA-05.

---

## T-10: Remediation as "Success" -- 2.5/4 vs Shipping Threshold
**Rank: 10**

**The tension:** The corpus frames the remediation as a success (PA-05 rose
from 1.5/4 to 2.5/4). But the shipping threshold is 3.0/4. By the project's
own standards, the remediation failed.

**Side A (Success -- meaningful improvement):**
- Files 00, 03, 04, 23, 41
- PA-05 improved by 1.0 full points. The remediation demonstrated that the
  design system CAN be improved through targeted CSS/HTML changes. Accessibility
  went from 0/8 to 8/8. Soul constraints: 20 PASS, 2 WARNING, 0 FAIL.

**Side B (Failure -- below shipping threshold):**
- Files 20, 26, 32
- File 20 questions whether 2.5/4 is "success" when 3.0/4 was the target.
  File 26 identifies "asymmetric credit" as a bias -- improvements get
  celebrated while the remaining gap gets minimized. File 32 documents this
  as contradiction C4.

**Evidence strength:** Both sides are factually correct. The tension is about
framing, not facts. 2.5/4 is simultaneously a 67% improvement AND a 17%
shortfall. Which frame you adopt determines whether you trust the pipeline.

**Why it matters:** If "success," the pipeline needs minor tuning. If
"failure," the pipeline needs architectural rethinking.

**Discussion prompt:** "If 2.5/4 is success, what is failure? Where is the
line between 'needs tuning' and 'fundamentally broken'?"

**Missing experiment:** Complete the remaining 5 fixes identified in the
remediation PA. Measure whether they close the gap to 3.0/4. If yes, the
remediation was 90% complete. If no, the remaining issues are architectural.

---

## T-11: Channel Taxonomy Disagreement
**Rank: 11**

**The tension:** The master prompt and remediation use different channel
numbering systems. The corpus itself is inconsistent about how many channels
exist and which number maps to which property.

**Side A (6 channels):**
- File 08, master prompt analysis
- Background, typography, spacing, borders, shadows, transforms

**Side B (8+ channels):**
- File 24, remediation analysis
- Adds opacity and color-accent as distinct channels. Some files count
  "borders" and "box-shadow" separately; others merge them.

**Evidence strength:** LOW. This is a terminological disagreement, not a
substantive one. But file 28 flags it as a medium-risk consistency drift
because it affects programmatic gate design.

**Why it matters:** Gate runners that check "6 channels with 4+ shifts per
boundary" will produce different results than "8 channels with 3+ shifts."

**Discussion prompt:** "Should the channel taxonomy be standardized before
the next experiment?"

**Missing experiment:** Enumerate all CSS properties that can vary between
sections. Group by perceptual similarity. Define channels empirically.

---

## T-12: Content Agnosticism -- How Much Does Content Matter?
**Rank: 12**

**The tension:** The design system claims content-agnosticism (any content
works). But the flagship used research synthesis content while CD-006 used
different content. The content variable is uncontrolled.

**Side A (Content-agnostic):**
- Files 09, 41
- File 09 analyzes the content-agnosticism principle. File 41 includes it
  as an operational principle. The design system's vocabulary and mechanisms
  should work regardless of content.

**Side B (Content matters significantly):**
- Files 14, 20, 24
- File 14 identifies "content dependency" as coverage gap #4. File 20 lists
  "content quality unexamined" as blind spot #6. File 24 notes content
  influences zone architecture, section count, and mechanism selection.

**Evidence strength:** Side B is structurally stronger. Content was never
controlled across experiments. The claim of content-agnosticism is
aspirational, not tested.

**Why it matters:** If content matters, then the flagship's failure might be
partially due to content choice, not prompt engineering.

**Discussion prompt:** "Would the remediation recipe produce the same PA-05
with completely different content (e.g., a product page instead of research
synthesis)?"

**Missing experiment:** Same prompt, same team, two different content types.
Compare PA-05.

---

## T-13: S-03 Hallucination -- Isolated Error or Systemic Risk?
**Rank: 13**

**The tension:** File 15 discovered that the analysis corpus fabricated rule
S-03 (backgrounds must differ by >= 15 RGB). The actual S-03 is about header
proportions. Is this a one-time error or evidence of systemic hallucination?

**Side A (Isolated error):**
- File 15 (the discoverer itself)
- File 15 found 94% accuracy overall. The S-03 hallucination is 0.5% of the
  total findings. The rest of the analysis is reliable.

**Side B (Systemic risk):**
- Files 25, 14, 38
- File 25 warns about "analysts finding what they expect." File 14 documents
  11 shared blind spots. File 38 predicts that compression will preserve the
  thesis and lose corrections -- meaning the S-03 hallucination might propagate
  into future prompts as an "established rule."

**Evidence strength:** The hallucination IS documented (file 15 found it).
The systemic risk is theoretical. But the fact that 50+ agents referenced
background deltas without anyone noticing the rule doesn't exist is concerning.

**Why it matters:** If the corpus can hallucinate rules, then any rule cited
as "from the design system" needs verification against primary sources.

**Discussion prompt:** "How many other 'rules' in the corpus's analysis
are actually analyst inventions?"

**Missing experiment:** Trace every specific rule cited in files 01-13 back
to its primary source document. Flag any rule that cannot be found. File 15
did this partially (94% accuracy) but only for reconstructed documents.

---

## T-14: Specification vs Procedure -- Complementary or Competing?
**Rank: 14**

**The tension:** File 24 argues the master prompt and remediation are
different cognitive instruments (telescope vs microscope) for different
phases. But the corpus generally treats remediation as BETTER, not DIFFERENT.

**Side A (Complementary -- both needed):**
- File 24
- "Specification" (master prompt) is for discovery and planning.
  "Procedure" (remediation) is for execution and building. Neither replaces
  the other. The pipeline should use specification prompts for novel design
  and procedure prompts for building.

**Side B (Procedure is superior):**
- Files 02, 04, 18, 42
- The remediation's procedure format produced better results. File 42's
  operational recipe is entirely procedure-format. The master prompt's
  specification format is treated as a failure mode.

**Evidence strength:** File 24 has the more nuanced position. But it's a
single file against the corpus's prevailing narrative. The tension is between
"different tools for different jobs" and "one tool failed, the other worked."

**Why it matters:** If complementary, the pipeline needs BOTH formats at
different stages. If procedure is superior, specification prompts should be
converted entirely.

**Discussion prompt:** "Could you write a specification-format prompt that
scores PA-05 3.0+? Or is the format inherently limited?"

**Missing experiment:** Use a specification-format prompt with the
remediation's specific values and thresholds. Isolate format from content.

---

## T-15: The 75-Line Builder Visibility Cap
**Rank: 15**

**The tension:** The flagship builder saw only 75 lines of a 963-line prompt
(13.4%). The corpus identifies this as a root cause of failure. But is the
solution to show the builder MORE of the prompt, or to make the 75 lines
BETTER?

**Side A (Show more):**
- Files 01, 02, 11
- The builder missed compositional intelligence, mechanism catalog references,
  and scale-channel invocation details. File 11 documents the propagation
  failure from research to builder.

**Side B (Make the 75 lines better):**
- Files 20, 24, 42
- File 20 argues the 75-line cap might be optimal -- builders don't need
  theory, they need instructions. File 24's telescope/microscope metaphor
  implies builders should see FOCUSED information. File 42's recipe format
  is designed to fit in fewer lines with higher density.

**Evidence strength:** Side B has operational precedent: the remediation
succeeded with a builder prompt that was ALSO short but MORE specific. The
problem wasn't cap size but cap content.

**Why it matters:** "Show more" means architectural change to agent memory
and prompt routing. "Make it better" means content compression -- much
cheaper.

**Discussion prompt:** "If you could show the builder only 100 lines, what
would you put in them?"

**Missing experiment:** Two variants: (A) builder sees 200 lines of the
existing prompt, (B) builder sees 75 lines rewritten as a high-density
recipe. Compare output quality.

---

## T-16: Opus vs Sonnet as Builder
**Rank: 16**

**The tension:** CD-006 was built by Opus. The flagship was built by Sonnet.
This variable is mentioned repeatedly but never isolated.

**Side A (Model matters enormously):**
- Files 20, 25, 26, 41
- File 20's steel-man for the master prompt: "maybe Opus would have
  succeeded with the same prompt." File 41 lists Opus-for-builders as an
  unexamined high-leverage intervention. File 26 calls this the #5 most
  dangerous bias: "Sonnet-for-builders unexamined."

**Side B (Model matters less than prompt):**
- Files 04, 18, 42
- The remediation used (presumably) Sonnet and improved from 1.5 to 2.5.
  File 04 documents the builder's behavior changing due to prompt format,
  not model change. File 42's recipe is designed to work with any model.

**Evidence strength:** UNKNOWN. This variable has literally never been tested.
The corpus acknowledges this gap repeatedly but never resolves it.

**Why it matters:** If Opus-as-builder is the primary lever, then all the
prompt engineering findings are secondary. The cheapest intervention would be
swapping the builder model, not redesigning the prompt.

**Discussion prompt:** "What is the cost difference between Opus and Sonnet
for a typical build? Is the quality difference worth the cost?"

**Missing experiment:** Same remediation prompt, same content: (A) Sonnet
builder, (B) Opus builder. Compare PA-05.

---

## T-17: Meta-to-Output Ratio -- Investment or Pathology?
**Rank: 17**

**The tension:** The overall project has a 2.6:1 meta-to-output ratio. The
flagship inflated to 660:1. At what point does analysis become pathological?

**Side A (Investment in understanding):**
- Files 41, 12, 33
- Deep analysis prevents repeating mistakes. The 41-file corpus exists
  because shallow analysis produced the flagship failure. Understanding
  root causes requires depth.

**Side B (Self-feeding complexity):**
- Files 20, 38, 14
- File 20 notes that at 660:1, the pipeline is "feeding on itself." File 38
  observes that the corpus diagnoses problems it then exemplifies. File 14
  asks whether the analysis complexity is justified by outcomes.

**Evidence strength:** Both sides are correct at different scales. The corpus
IS valuable (it identified real root causes). It's also 1.7MB analyzing a
2,034-line HTML file. The ROI is defensible if findings transfer to future
builds; pathological if they don't.

**Why it matters:** The 20:1 threshold suggested by file 41 would mean this
corpus itself is 85x over budget.

**Discussion prompt:** "If you could keep only 50K tokens of this corpus,
which files would you keep?"

**Missing experiment:** Take the corpus's operational recipe (file 42) and
use it for a fresh build WITHOUT reading the rest of the corpus. If the
build succeeds, the other 40 files were unnecessary.

---

## T-18: Deallocation as First Move vs Additive Improvement
**Rank: 18**

**The tension:** The remediation's Phase 0 REMOVED 216 lines of CSS before
adding anything. This "deallocation" principle is treated as a key insight.
But is removal always the right first step?

**Side A (Deallocate first):**
- Files 03, 05, 42
- Remove the invisible before adding the visible. Sub-perceptual CSS consumes
  the builder's cognitive budget without producing results. Phase 0 freed
  up "room" for meaningful CSS.

**Side B (Additive might work too):**
- Files 14, 25
- File 14 asks whether Phase 0 was necessary or just satisfying. If the
  builder had simply ADDED the new CSS on top of the existing sub-perceptual
  CSS, would the result be worse? The sub-perceptual lines don't interfere
  with perceptual ones -- they're invisible.

**Evidence strength:** Side A has operational evidence (remediation improved
after deallocation). Side B has logical plausibility (invisible CSS can't
hurt visible CSS). Neither side isolates deallocation from other changes.

**Why it matters:** Deallocation requires identifying and removing existing
code, which is more complex than adding new code. If additive works equally
well, the simpler approach is preferable.

**Discussion prompt:** "Would the remediation have scored the same PA-05
if Phase 0 were skipped entirely?"

**Missing experiment:** Remediation with Phase 0 skipped. All other phases
applied. Compare PA-05.


# ═══════════════════════════════════════════════════════════════
# SECTION 2: UNRESOLVED CONTRADICTIONS (with source evidence)
# ═══════════════════════════════════════════════════════════════

## UC-01: S-03 Rule -- Fabricated vs Established

**File 15 claim:** "The analysis corpus invented rule S-03 (backgrounds must
differ by >= 15 RGB). The actual S-03 in the source documents concerns header
proportion constraints." (File 15, Phase 2 comparison)

**Files 02, 08, 24, 41 claim:** Background deltas >= 10-15 RGB are treated as
established perception thresholds throughout the corpus.

**Status:** UNRESOLVED. The specific number varies (10 in some files, 15 in
others), and the provenance is uncertain. The threshold may be empirically
reasonable even if the rule number is fabricated.

---

## UC-02: Gap Threshold -- 96px vs 120px

**File 02 claim:** S-09 mandates no single spacing value > 96px.

**File 08 claim (per file 32, contradiction C3):** Suggests 120px as the
threshold in certain contexts.

**Status:** UNRESOLVED. File 32 documents this as contradiction C3 but offers
no resolution. The discrepancy is 25%, which matters for programmatic gates.

---

## UC-03: Content Transformation -- Rewrite vs Preserve

**Master prompt approach (per file 09):** Content should be transformed to
serve the design.

**Remediation approach (per file 32, contradiction C6):** CT-01 was REVERSED
-- content should be preserved and the design should serve the content.

**Status:** UNRESOLVED. This represents a fundamental philosophical shift.
File 09 analyzes the content-agnosticism principle but doesn't reconcile
the reversal. Neither approach has been tested against the other.

---

## UC-04: Component Philosophy -- Invent vs Adopt Standard

**File 32, contradiction C5:** The master prompt encourages inventing custom
components to match the design system's identity. The remediation advocates
adopting established component patterns (standard grids, standard cards).

**Status:** UNRESOLVED. Both approaches have merits. Custom components
maintain design identity but are harder for builders to implement correctly.
Standard components are reliable but may feel generic.

---

## UC-05: Master Prompt Visibility -- 13.4% vs 54% vs 64%

**File 02 claim:** The builder sees only 75 lines of 963 (13.4%).

**Files 22/23 claim (per file 26, cross-contradiction #4):** The builder sees
54% of the prompt.

**Alternate claim (per file 26):** 64% visibility in some contexts.

**Status:** UNRESOLVED. File 26 identifies this as "metric shopping" -- the
percentage depends on what you count as "the prompt" and what you count as
"visible." The disagreement is definitional but affects the narrative: 13.4%
sounds catastrophic; 64% sounds adequate.

---

## UC-06: CCS (Compositional Coupling Score) -- Mandated but Nonexistent

**Files 41, 42 claim:** CCS is an operationalized metric for measuring
compositional richness.

**File 28 claim:** CCS has never been computed in any experiment. Five
different files propose five different operationalizations. The "metric"
exists only as a concept.

**Status:** UNRESOLVED. CCS is cited as if it were an established measurement
tool, but no one has ever calculated it for any artifact.


# ═══════════════════════════════════════════════════════════════
# SECTION 3: THE BIG 5 OPEN QUESTIONS
# ═══════════════════════════════════════════════════════════════

## Q-01: What Is the Actual Causal Variable?

**The question:** Format, specificity, or perception thresholds -- which one
caused the remediation's improvement?

**Evidence for FORMAT:** Files 02, 04, 18, 24 document behavioral changes
correlated with format shift. Builder followed recipe steps in order.

**Evidence for SPECIFICITY:** File 20 argues concrete values (not format)
drove the change. Files 14, 25 note that specificity always co-varies.

**Evidence for THRESHOLDS:** File 08 documents perception thresholds as THE
missing layer. Without thresholds, binary gates pass imperceptible CSS.

**Resolution experiment:** Three-variant test isolating each variable.
Estimated cost: 3 pipeline runs. HIGHEST PRIORITY experiment in the corpus.

---

## Q-02: Does the Builder Model Matter More Than the Prompt?

**The question:** Opus built CD-006 (39/40). Sonnet built the flagship
(1.5/4). Is the model the dominant variable?

**Evidence for YES:** Files 20, 25, 26, 41 all flag this as unexamined.
Opus "creates beyond constraints" while Sonnet "complies meticulously."

**Evidence for NO:** The remediation improved PA-05 from 1.5 to 2.5 without
changing the builder model. Prompt changes DO matter.

**Evidence for INTERACTION:** The prompt and model may interact -- Opus might
succeed with a specification prompt where Sonnet needs a recipe prompt.

**Resolution experiment:** 2x2 design: {Opus, Sonnet} x {specification,
recipe}. Four builds. Compare PA-05. Estimated cost: 4 pipeline runs.

---

## Q-03: Is 100% Agent Agreement Reliable or Artifactual?

**The question:** 71 agent-finding pairs with 0 disagreements. Is this
convergence or Claude-model groupthink?

**Evidence for RELIABLE:** File 28's detailed consistency analysis. Many
findings are objectively verifiable (CSS measurements, line counts).

**Evidence for ARTIFACTUAL:** Files 25, 26, 14 document shared blind spots.
All agents share architecture, training data, and prompting context.
File 38 predicts compression will amplify consensus and lose dissent.

**Resolution experiment:** Give the same analytical task to GPT-4, Gemini,
and Claude. Compare root cause identification. If all three agree, the
consensus is robust. If they diverge, Claude-specific priors are dominant.

---

## Q-04: Are the Perception Thresholds Correct?

**The question:** Background >= 10 RGB, font-size >= 2px, letter-spacing >=
0.025em. Are these real just-noticeable-differences or analyst guesses?

**Evidence for APPROXIMATELY CORRECT:** They produce visibly different results
when applied (remediation is visually distinguishable from flagship).

**Evidence for UNRELIABLE:** File 15's S-03 hallucination. Single-agent
derivation. No perceptual science cited. Values vary across files (10 vs 15
RGB for backgrounds).

**Resolution experiment:** Perceptual science study with human evaluators.
Create CSS variations at different deltas. Establish actual JND per property.
Estimated cost: 2-3 hours of human testing.

---

## Q-05: Does the Pipeline Transfer to Novel Content Types?

**The question:** All experiments used research/analysis content. Would the
pipeline produce DESIGNED output for a product page, a portfolio, or a
dashboard?

**Evidence for YES (transfer):** The design system claims content-agnosticism.
Mechanisms and tokens are content-independent by design.

**Evidence for NO (content-dependent):** File 14 identifies content dependency
as an unexamined gap. Zone architecture (warm/cool/resolved) may not apply
to non-narrative content. Mechanism selection is content-influenced.

**Resolution experiment:** Same prompt, three content types: (A) research
synthesis, (B) product landing page, (C) data dashboard. Compare PA-05.
Estimated cost: 3 pipeline runs.


# ═══════════════════════════════════════════════════════════════
# SECTION 4: CONSENSUS FINDINGS (10 items)
# ═══════════════════════════════════════════════════════════════

These are findings where the corpus DOES NOT disagree. Listed with agreement
count (how many files reference the finding) and adversarial challenge status.

## CF-01: Sub-Perceptual CSS Exists in Large Quantities
**Agreement:** 10+ files | **Challenge:** File 25 questions "zero value" but
NOT the existence | **Status:** UNCHALLENGED
23.7% of flagship CSS (233 lines) is below measurable perception thresholds.
This is an empirical measurement, not an interpretation.

## CF-02: S-09 Stacking Produces 210-276px Voids
**Agreement:** 8+ files | **Challenge:** NONE | **Status:** UNCHALLENGED
Individual per-property spacing values pass S-09 (<=96px) but stack at section
boundaries to create total gaps of 210-276px. File 32 lists this as the only
contradiction with zero dissent.

## CF-03: Container Width 940-960px is Non-Negotiable
**Agreement:** 10+ files | **Challenge:** NONE | **Status:** UNCHALLENGED
THE primary Phase D failure mode. Every file that mentions container width
agrees on 940-960px.

## CF-04: Binary Rules Achieve ~100% Agent Compliance
**Agreement:** 8+ files | **Challenge:** File 25 adds "compliance != quality"
but agrees on the compliance rate | **Status:** UNCHALLENGED on compliance,
CHALLENGED on sufficiency (see T-06)

## CF-05: Judgment Rules Achieve ~0% Agent Compliance
**Agreement:** 8+ files | **Challenge:** NONE on the observation |
**Status:** UNCHALLENGED
Subjective assessment rules are functionally unenforceable with current agents.

## CF-06: The Flagship Passed All Programmatic Gates
**Agreement:** 6+ files | **Challenge:** NONE | **Status:** UNCHALLENGED
Gate 4 confirmed 6 CSS channels with 4+ shifts per boundary. All binary
rules passed. The artifact still scored PA-05 1.5/4.

## CF-07: The Remediation Improved PA-05 from 1.5 to 2.5
**Agreement:** ALL files that reference it | **Challenge:** File 20, 26
question whether 2.5 = "success" (see T-10) but agree on the number |
**Status:** UNCHALLENGED on measurement, CHALLENGED on interpretation

## CF-08: The 963-Line Prompt Had 7.9:1 Guardrail-to-Playbook Ratio
**Agreement:** 5+ files | **Challenge:** NONE | **Status:** UNCHALLENGED
The prompt told builders what NOT to do 7.9x more than what TO do.

## CF-09: Zero Inter-Agent Messaging in Flagship Execution
**Agreement:** 6+ files | **Challenge:** NONE | **Status:** UNCHALLENGED
The flagship team used file-bus communication only. No SendMessage calls.

## CF-10: The Analysis Corpus Has N=2 Limitation
**Agreement:** ALL adversarial files | **Challenge:** N/A (this IS the
challenge) | **Status:** SELF-ACKNOWLEDGED
Every conclusion in this corpus derives from comparing exactly 2 artifacts.
Generalization is unsupported.


# ═══════════════════════════════════════════════════════════════
# APPENDIX A: TENSION INTERACTION MAP
# ═══════════════════════════════════════════════════════════════

Tensions are not independent. This map shows which tensions affect which:

```
T-02 (Three-Variable Conflation)
 ├── affects T-01 (Recipe as Causal)
 ├── affects T-06 (Binary Rules)
 ├── affects T-07 (Conviction Language)
 ├── affects T-08 (Perception Thresholds)
 ├── affects T-12 (Content Agnosticism)
 └── affects T-14 (Specification vs Procedure)

T-03 (Groupthink vs Convergence)
 ├── affects T-05 (Sub-Perceptual CSS)
 ├── affects ALL Consensus Findings (Section 4)
 └── affects T-13 (S-03 Hallucination)

T-04 (CD-006 Benchmark)
 ├── affects T-16 (Opus vs Sonnet)
 ├── affects T-10 (Remediation "Success")
 └── affects T-12 (Content Agnosticism)

T-16 (Opus vs Sonnet)
 ├── affects T-01 (Recipe as Causal)
 ├── affects T-09 (Single vs Multi-Agent)
 └── affects T-15 (75-Line Builder Cap)
```

# ═══════════════════════════════════════════════════════════════
# APPENDIX B: EXPERIMENT PRIORITY RANKING
# ═══════════════════════════════════════════════════════════════

Experiments ranked by (information gained) / (cost to run):

| Rank | Experiment | Resolves | Est. Cost |
|------|-----------|----------|-----------|
| 1 | Three-variant format/specificity/threshold test | T-01, T-02, Q-01 | 3 runs |
| 2 | Opus vs Sonnet builder comparison | T-16, T-04, Q-02 | 2 runs |
| 3 | Remediation recipe in specification format | T-01, T-14 | 1 run |
| 4 | Human designer evaluation (no context) | T-03, Q-03 | 2-3 hours |
| 5 | Three content types with same prompt | T-12, Q-05 | 3 runs |
| 6 | Conviction language ablation | T-07 | 1 run |
| 7 | Perception threshold JND validation | T-08, Q-04 | 2-3 hours |
| 8 | Phase 0 skip test | T-18, T-05 | 1 run |
| 9 | 75 vs 200 line builder prompt | T-15 | 2 runs |
| 10 | Cross-model analysis (GPT/Gemini/Claude) | T-03, Q-03 | 3 runs |

**Cheapest most informative experiment:** Rank 3 (1 pipeline run, resolves
2 tensions). This is the experiment File 20 proposes and that no one has
run.

# ═══════════════════════════════════════════════════════════════
# APPENDIX C: FILE CITATION INDEX
# ═══════════════════════════════════════════════════════════════

Every file referenced in this document, with where it appears:

| File | Referenced in |
|------|--------------|
| 00 | T-10 |
| 01 | T-04, T-15, CF-08 |
| 02 | T-01, T-02, T-06, T-15, UC-01, UC-02, CF-06, CF-08, Q-01 |
| 03 | T-10, T-18 |
| 04 | T-01, T-02, T-10, T-16, Q-01 |
| 05 | T-04, T-09, T-18, UC-01, CF-01 |
| 07 | T-09 |
| 08 | T-08, T-11, UC-01, UC-02, Q-01 |
| 09 | T-12, UC-03 |
| 10 | -- (referenced via file 41) |
| 11 | T-15 |
| 12 | T-17 |
| 13 | T-06, T-08 |
| 14 | T-03, T-04, T-05, T-08, T-12, T-13, T-17, T-18, Q-03, Q-05 |
| 15 | T-08, T-13, UC-01, Q-04 |
| 18 | T-01, T-02, T-07, T-16, Q-01 |
| 20 | T-01, T-02, T-03, T-04, T-05, T-06, T-09, T-10, T-14, T-15, T-16, T-17, Q-02 |
| 21 | T-06, T-07 |
| 22 | T-02, T-07, T-09 |
| 23 | T-10 |
| 24 | T-01, T-02, T-04, T-07, T-08, T-09, T-11, T-14, T-16, UC-01, UC-03, Q-01 |
| 25 | T-01, T-03, T-04, T-05, T-06, T-08, T-13, T-16, UC-01, Q-02, Q-04 |
| 26 | T-01, T-02, T-03, T-04, T-07, T-09, T-10, T-16, Q-02 |
| 27 | -- (referenced in CLAUDE.md routing) |
| 28 | T-03, T-11, UC-06, Q-03 |
| 32 | T-01, T-02, T-10, T-11, UC-02, UC-03, UC-04, CF-02 |
| 33 | T-17 |
| 38 | T-03, T-06, T-13, T-17 |
| 41 | T-01, T-04, T-06, T-07, T-08, T-10, T-12, T-16, UC-01, UC-06, Q-02 |
| 42 | T-05, T-08, T-14, T-16, T-18, UC-06 |

**Most-cited file:** File 20 (adversarial-journey-review) -- 13 tensions
**Second most-cited:** File 24 (fundamental-differences) -- 10 tensions
**Least-cited assigned files:** File 28 (3 tensions), File 38 (4 tensions)

---

*Document: 554 lines | 18 tensions | 6 contradictions | 5 open questions |
10 consensus findings | 10 prioritized experiments | Full citation index*
*Source: 10 adversarial/meta files from the pipeline-analysis corpus*
