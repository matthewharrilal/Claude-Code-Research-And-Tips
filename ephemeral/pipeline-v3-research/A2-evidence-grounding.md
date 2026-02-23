# A2 -- Evidence Grounding Audit: Claims vs Data Across 18 Synthesis Reports

**Auditor:** evidence-grounding-auditor (Opus 4.6)
**Date:** 2026-02-22
**Task:** Audit the 20 most architecturally important claims across synthesis reports for evidence grounding

**Reports audited (8 priority, cross-referenced against 4 source reports):**
- `46-meta-mechanism.md` (formal S(x) model, survival theory)
- `57-compositional-fluency-deep.md` (CCS values, three-register model)
- `55-flagship-crystallization.md` (Flagship definition, viewport walkthrough)
- `59-suppressor-archaeology.md` (20 suppressors, quality predictions, 73-line hypothesis)
- `44-lost-knowledge.md` (compression ratios, 5 knowledge categories)
- `43-embodiment-chain.md` (6 survival mechanisms, progressive incarnation)
- `58-dispositional-recipe.md` (5 D-instructions, mode-switching, hybrid format)
- `54-cd006-deficit-analysis.md` (14-dimension scoring, CCS ~0.15-0.20)
- Cross-referenced: `38-research-to-prompt-lineage.md`, `39-experiential-gap-analysis.md`, `40-soul-survival-mechanism.md`, `41-opus-native-intelligence.md`

---

## 1. EXECUTIVE SUMMARY

| Classification | Count | % |
|---------------|-------|---|
| GROUNDED (traceable to empirical data or concrete artifacts) | 8 | 40% |
| INFERRED (reasonable extrapolation from grounded evidence) | 7 | 35% |
| ASSERTED (stated as fact without sufficient evidence) | 4 | 20% |
| CONTRADICTED (conflicts with available evidence) | 1 | 5% |

**Overall assessment:** The synthesis reports are built on a genuine empirical foundation (4 experiments: Middle, Ceiling, Flagship, Gas Town) but systematically overstate the precision of conclusions that can be drawn from N=4 experimental data points. The formal models (S(x), CCS, quality curves) dress up qualitative observations in quantitative notation, creating an impression of mathematical rigor that the underlying evidence cannot support.

**The most dangerous pattern:** Claims that START grounded (e.g., "the Flagship failed") get EXTENDED through inference (e.g., "therefore checklist format causes failure") and ARRIVE at assertion (e.g., "recipe format produces 0.5-1.0 quality points improvement") -- with each step presented at the same confidence level as the original observation.

---

## 2. THE 20 MOST IMPORTANT CLAIMS

### Claim 1: "60-70% of output quality comes from Opus's native intelligence"
**Source:** Report 41, line 21; repeated in 46, 59, 58
**Classification:** INFERRED (reasonable but imprecise)
**Evidence:** Report 41 performed a property-by-property attribution of the Gas Town page, categorizing each CSS decision as A (soul constraint), B (research/prompt), C (native Opus), or D (interaction). The 60-70% is an aggregate estimate from this one-page analysis.
**Problems:**
- N=1. One page. The attribution percentages could be wildly different for a different content type.
- The A/B/C/D categories overlap. Is `font-size: 1rem` native Opus (C) or conventions brief compliance (B)? Report 41 acknowledges this ambiguity but still reports a precise percentage range.
- "Quality" is undefined in the attribution. 60-70% of CSS LINES may be native, but those lines may contribute 40% or 90% of PERCEIVED quality.
**Verdict:** The direction is likely correct (Opus contributes majority of baseline editorial quality). The specific 60-70% figure should be treated as +-20% uncertainty, i.e., "more than half but we cannot be precise."

---

### Claim 2: "18/337 findings (5.3%) survive into the output"
**Source:** Report 40, referenced in Report 46 line 89
**Classification:** GROUNDED
**Evidence:** Report 40 performed a detailed trace of 18 specific rules in the output HTML back to their research origins. Report 38 independently documented the compression chain from 337 findings through 5 stages. Both arrive at approximately the same survival count.
**Problems:**
- The definition of "survive" is ambiguous. Does a finding "survive" if it influenced a decision that influenced a value, or only if the final CSS value is directly traceable? Report 40 uses the stricter definition (direct CSS traceability).
- Report 46 notes that 4 of 18 surviving rules came from experiment failures, not from the original R1-R5 research. So the true survival rate from research alone is 14/337 (4.2%).
**Verdict:** Well-grounded. The 18/337 count is traceable and independently validated. The 5.3% figure is defensible under the stated definition.

---

### Claim 3: "S(x) = 1 / (1 + C(x)), survival probability as function of context dependency"
**Source:** Report 46, lines 64-88
**Classification:** ASSERTED (formal model without empirical calibration)
**Evidence:** The formula is presented with illustrative C(x) values (0, 0.5, 2.0, infinity) that map to the four information tiers. However:
- The C(x) values are NOT empirically measured. They are assigned post-hoc to make the model match the observed survival rates.
- The exponential decay formula S_N(x) = S(x)^N assumes independent compression stages. No evidence is provided that stages are independent (they are not -- the same person often does multiple compressions).
- The model "predicts exactly what we observe" (line 89) because it was FIT to what was observed, not independently validated.
**Problems:** The model is a useful METAPHOR for understanding compression, not a predictive tool. It cannot predict the survival rate of a NEW type of information because C(x) has no independent measurement procedure.
**Verdict:** Useful conceptual framework. Should not be cited as "the formal model" or used to derive quantitative predictions. The notation creates false precision.

---

### Claim 4: "Recipe vs checklist format is the primary determinant of output quality"
**Source:** Reports 46 (E2, line 133), 58 (core thesis), 59 (S-01)
**Classification:** INFERRED (plausible but confounded)
**Evidence:** The Middle experiment used a recipe format and scored 4/4. The Flagship used a checklist format and scored 1.5/4. This is the canonical comparison.
**Problems:**
- The Middle and Flagship differed in at LEAST 4 variables simultaneously: format (recipe vs checklist), prompt length (100 vs 963 lines), builder model (mixed vs Sonnet-heavy), and content type. The format variable is confounded with ALL others.
- Report 59 (line 133) acknowledges this: "E2: Recipe vs checklist, same content" -- but the content was NOT the same. The Middle built a simpler page than the Flagship.
- Report 46 states the evidence is "overwhelming" (line 129), but every piece of evidence has the same confound problem.
- The Gas Town page used a ~578-line prompt (not a recipe, not a checklist) and scored well, suggesting format alone is not the determinant.
**Verdict:** Format likely matters, but the claim that it is THE primary determinant cannot be isolated from the confounds. The phrase "same content" in E2 is factually incorrect -- the Middle and Flagship had different content and different prompt lengths. This is the single most important confound in the entire evidence base, acknowledged by the contrarian retrospective but subsequently treated as resolved when it is not.

---

### Claim 5: "CCS (Compositional Coupling Score) for CD-006 = ~0.40" (Report 57) vs "~0.15-0.20" (Report 54)
**Source:** Report 57 line 106; Report 54 line 222
**Classification:** CONTRADICTED (internal inconsistency)
**Evidence:** Both reports analyze the same artifact (CD-006) using the same methodology (removal test) and arrive at dramatically different CCS values.
- Report 57 finds 4 strongly coupled + 3 medium coupled + 9 weak = CCS 0.40
- Report 54 finds 2 moderately coupled + 3 weakly coupled + 13 independent = CCS 0.15-0.20
**Root cause:** Different strictness of the "coupling" definition. Report 57 counts the header-dropcap-footer chain as 3 strongly coupled mechanisms. Report 54 counts the header as "locally coupled to drop cap and footer only" (not globally coupled). Report 57 counts zone backgrounds as "medium coupling" with spacing; Report 54 counts zone backgrounds as "independent -- backgrounds are decorative, not load-bearing."
**Verdict:** CCS is NOT an objective metric. It varies by 2x depending on the analyst's interpretation of "coupling." Both reports present their CCS values as if they are measurements. They are judgments. Any pipeline using CCS as a threshold must specify the interpretation standard, or the metric is meaningless.

---

### Claim 6: "Suppressor removal produces 3.0-3.5/4 quality; adding 73 lines of framework reaches 3.5-4.0/4"
**Source:** Report 59, Part 4, lines 655-684
**Classification:** ASSERTED (untested prediction)
**Evidence:** This is a theoretical prediction based on the attribution model from Report 41 (60-70% native Opus) combined with the suppressor analysis. The crossover curve (Part 5, lines 690-722) is entirely constructed from reasoning, not measurement.
**Problems:**
- The 73-line minimal set has NEVER BEEN TESTED. Report 59 explicitly calls it a "testable hypothesis" (Finding 4, line 833) but presents the quality predictions with decimal-point precision (3.0-3.5, 3.5-4.0).
- The "highest-leverage single interventions" with point values (+0.5-1.0 for S-01 removal, +0.3-0.5 for S-08 removal) are completely ungrounded. No experiment has ever isolated a single suppressor.
- The crossover curve (ASCII chart, lines 690-708) is presented as data but is entirely speculative.
**Verdict:** The directional logic is sound (fewer suppressors = better quality). The specific numbers are fabricated in the sense that no measurement supports them. The 73-line hypothesis is valuable AS A HYPOTHESIS but is being treated across reports as a near-established finding.

---

### Claim 7: "Embodiment is a phase transition that cannot be skipped"
**Source:** Report 46, Part 5; Report 43, full thesis
**Classification:** INFERRED (strong analogy but not demonstrated)
**Evidence:** The claim is supported by examples: "R3-023 said fractal self-similarity. DD-006 EMBODIED this as specific CSS patterns. The CSS patterns are NOT in R3-023. They were INVENTED during embodiment." (Report 46, lines 325-326)
**Problems:**
- The analogy to thermodynamic phase transitions (gas -> liquid -> solid) is rhetorically powerful but scientifically unsupported. Phase transitions in physics are governed by specific equations of state. No such equations exist for information embodiment.
- The claim that "you cannot skip from vapor to solid" is factually wrong even in physics (sublimation/deposition). The analogy undermines itself.
- More importantly: could a sufficiently capable model skip the embodiment stage? If Opus can produce CD-006 (39/40) with minimal specification, the model may have internalized embodied patterns from training data, effectively carrying pre-embodied CSS patterns. The embodiment may have happened during training, not during the pipeline.
**Verdict:** The observation is valid: abstract research findings require concrete implementation to become usable patterns. The "phase transition" framing overstates the necessity -- it is a useful heuristic, not a law.

---

### Claim 8: "The Flagship builder used 238 lines (22%) of CSS on imperceptible properties"
**Source:** Reports 39, 59 (S-04), 44
**Classification:** GROUNDED
**Evidence:** Report 39 directly analyzed the Flagship HTML, counting CSS lines devoted to sub-perceptual letter-spacing (0.001-0.01em) and near-identical backgrounds (1-8 RGB delta). The 238/1086 line count and 22% figure are derived from actual CSS analysis.
**Verdict:** Well-grounded empirical finding. One of the strongest pieces of evidence in the entire corpus.

---

### Claim 9: "Opus treats instructions as floors; Sonnet treats them as ceilings"
**Source:** Reports 28 (A-02), 58 (Section 2), 59 (S-12)
**Classification:** INFERRED (plausible generalization from limited data)
**Evidence:** The Middle experiment (Opus planner + agents, recipe) scored 4/4. The Flagship (Sonnet builders, checklist) scored 1.5/4. CD-006 (Opus builder, minimal spec) scored 39/40.
**Problems:**
- N=1 for each configuration. One Middle experiment does not establish that Opus always treats instructions as floors.
- The Flagship's Sonnet builders received a fundamentally different prompt (963 lines of constraints vs 100 lines of recipe). The model and the prompt changed simultaneously.
- No A/B test exists where the SAME prompt was given to BOTH Opus and Sonnet builders.
- Report 58 acknowledges "n=0 for dispositional" (line 417) but still labels the model-specificity prediction as "MEDIUM" confidence.
**Verdict:** The hypothesis is reasonable and consistent with observed behavior. But "Opus = floor, Sonnet = ceiling" is presented as a discovered property when it is an untested hypothesis about model dispositions.

---

### Claim 10: "The conventions brief is near-optimal at 609 lines"
**Source:** Report 46 (P1, line 548); Report 11 (master synthesis)
**Classification:** INFERRED
**Evidence:** The Gas Town page was built with the 609-line conventions brief and scored well. The 963-line Flagship prompt produced worse results. The Middle's 100-line slice also worked.
**Problems:**
- "Near-optimal" requires knowing the optimum. We know 609 works better than 963, and 100 also works. The optimum could be anywhere from 50 to 700 lines.
- The brief has been modified multiple times (403 -> 609 lines). Each modification was a response to specific failures, creating a brief that is adapted to past failures but not necessarily optimized for future success.
**Verdict:** The brief works well. Calling it "near-optimal" overstates certainty about a function (quality vs. brief length) that has been sampled at approximately 3 points.

---

### Claim 11: "Flagship 4/4 has NEVER been achieved"
**Source:** Report 55, line 21; repeated across multiple reports
**Classification:** GROUNDED
**Evidence:** No artifact in the project has achieved the 14-dimension Flagship definition. CD-006 achieves 10-11/14. Gas Town was not formally evaluated against all 14 dimensions. The Flagship experiment scored 1.5/4 on PA-05.
**Verdict:** Factually correct under the stated definition. Note that the definition itself was retroactively constructed to classify CD-006 as NOT Flagship, so this is somewhat circular.

---

### Claim 12: "CD-006 scores 10-11/14 Flagship dimensions"
**Source:** Report 54, Part 1
**Classification:** GROUNDED (with caveats)
**Evidence:** Report 54 performed a dimension-by-dimension evaluation with specific CSS evidence for each verdict. The analysis is detailed and traceable.
**Problems:**
- The 14-dimension definition was created by agents in the Flagship 4/4 Recipe Team, not derived from external standards. CD-006 scoring 10-11 on a definition designed to classify CD-006 as "not Flagship" is somewhat predetermined.
- Some dimension verdicts involve judgment calls. D-03 (channels per boundary) is scored "MARGINAL PASS" at "avg ~3.5-4.0" but the measurement methodology is not specified rigorously enough to reproduce.
**Verdict:** The detailed CSS analysis is the most rigorous artifact evaluation in the corpus. The dimension definitions themselves are arguable but consistently applied.

---

### Claim 13: "Three registers of compositional fluency (local, structural, atmospheric)"
**Source:** Report 57, Section 6
**Classification:** ASSERTED (useful taxonomy but not empirically derived)
**Evidence:** Report 57 proposes three registers based on analysis of two artifacts (CD-006 and Gas Town). Register 3 (atmospheric) is described as "never been achieved in this project."
**Problems:**
- The three registers are a taxonomy imposed on a continuous spectrum. The boundaries between registers (CCS 0.15-0.35, 0.35-0.55, 0.55-0.80) are completely arbitrary.
- Register 3 has ZERO empirical examples. It is a theoretical construct.
- The claim that "Register 3 has never been achieved" is non-falsifiable because Register 3 is defined as something not yet achieved.
**Verdict:** Useful conceptual framework for thinking about degrees of compositional integration. Should not be treated as a proven taxonomy with firm thresholds.

---

### Claim 14: "The pipeline's primary product is suppression, not instruction"
**Source:** Report 59, Finding 2 (line 816)
**Classification:** INFERRED (strong but one-sided)
**Evidence:** The Flagship experiment produced 1.5/4 output from a 963-line prompt. The Middle produced 4/4 from 100 lines. This suggests the additional 863 lines were net-negative.
**Problems:**
- The claim generalizes from one failed experiment. The Gas Town pipeline (578 lines) was also "the pipeline's product" and it produced good output. The pipeline is not ALWAYS net-negative.
- The claim ignores that the pipeline also produced the conventions brief (609 lines) which IS the successful instruction mechanism. The pipeline produced BOTH the failed 963-line prompt AND the successful conventions brief. Calling the pipeline "primarily suppressive" ignores its successful outputs.
**Verdict:** The 963-line Flagship prompt was net-negative. Generalizing this to "the pipeline is primarily suppressive" is rhetorical overreach. The pipeline also produced its own correction mechanisms.

---

### Claim 15: "45,083 lines of source reduced to 542 lines (1.2% survival)"
**Source:** Report 44, Part 9
**Classification:** GROUNDED (with definition caveats)
**Evidence:** Report 44 provides a detailed table of source corpus sizes and traces what survived into the 542-line prompt. The line counts are specific and traceable.
**Problems:**
- The 45,083 figure includes content from 5 different directories, some of which were never intended to feed into the prompt (e.g., flagship-retrospective is a post-mortem, not a source for forward-looking prompts).
- Counting "survival" as "lines in prompt that trace to lines in source" conflates DIFFERENT TYPES of compression. Some source content was correctly excluded (it was wrong, obsolete, or redundant); some was incorrectly excluded (it was valuable but couldn't survive the format).
**Verdict:** The numbers are accurate but the framing "1.2% survival" implies 98.8% LOSS, which conflates intentional curation with unintentional compression. A library that selects 100 books from 10,000 submissions hasn't "lost" 99% of knowledge.

---

### Claim 16: "The 5 dispositional instructions (D-01 through D-05) would produce measurable quality improvement"
**Source:** Report 58, Section 1
**Classification:** ASSERTED (untested)
**Evidence:** Each instruction is grounded in a specific observed failure mode. D-01 addresses uniform section treatment (observed in Flagship). D-02 addresses imperceptible zone boundaries (observed). D-03 addresses sub-perceptual CSS waste (observed). D-04 addresses second-half monotony (observed). D-05 addresses builder-as-verifier-not-reader (observed).
**Problems:**
- Zero of the 5 instructions have been tested. Report 58 explicitly labels confidence as "n=0 for dispositional" (line 417).
- The claim that each instruction "changes measurable builder behavior" is a prediction, not a finding.
- The "testable" claims for each instruction describe how you WOULD test it, not that it HAS been tested.
**Verdict:** Well-motivated hypotheses grounded in real failure analysis. Should be labeled as hypotheses, not as interventions with known effect sizes.

---

### Claim 17: "Activation, not transmission, is the pipeline's mechanism"
**Source:** Report 46, Part 2; Report 58, Section 7
**Classification:** INFERRED (compelling reframe but not proven)
**Evidence:** The tuning fork analogy (Report 46, line 125) is supported by: (a) Opus produces good editorial design with minimal prompting, (b) more specification can produce worse output, (c) format matters more than content.
**Problems:**
- The activation/transmission distinction is not empirically distinguishable. Both models predict that good prompts produce good output and bad prompts produce bad output. The difference is in the MECHANISM, which is unobservable.
- If activation were the true mechanism, the optimal prompt would be extremely short (just identity constraints). But the conventions brief at 609 lines produces better output than raw soul constraints alone. This suggests some transmission IS occurring alongside activation.
**Verdict:** A useful reframe that corrects the naive "more information = better output" assumption. But it is a METAPHOR for the mechanism, not a proven mechanism. The truth is likely a mixture of both activation and transmission.

---

### Claim 18: "Container width 940-960px is THE #1 historically-violated constraint"
**Source:** Reports 39, 43, 44, 59; conventions brief
**Classification:** GROUNDED
**Evidence:** Report 39 traces this to Phase D validation (4/5 pages violated container width). Multiple subsequent experiments confirmed ongoing violations. The constraint appears 3x in the master execution prompt specifically because of this history.
**Verdict:** One of the most well-documented empirical findings in the corpus. Fully grounded.

---

### Claim 19: "The hybrid 50-line recipe format is architecturally sound"
**Source:** Report 58, Section 3
**Classification:** ASSERTED (logical but untested)
**Evidence:** The format is logically constructed from: Tier 1 (constraints from soul), Tier 2 (build sequence from Middle experiment), Tier 3 (vocabulary from mechanism catalog), Tier 4 (disposition from design education principles).
**Problems:**
- Never tested. Report 58 estimates quality at "Est. 3.5-4.0" with "MEDIUM-HIGH" reliability.
- The claim that "Tier 4 comes LAST" is critical to the design but is justified by reasoning about cognitive processing, not by empirical testing.
**Verdict:** Logical architecture. The ordering principle (constraints -> procedure -> vocabulary -> disposition) is reasonable. Zero empirical validation.

---

### Claim 20: "The Flagship experiment's zones differed by 1-8 RGB and were unanimously perceived as identical by 9 auditors"
**Source:** Reports 39, 59, 44
**Classification:** GROUNDED
**Evidence:** The Mode 4 PA (9 independent Opus auditors) each independently examined the Flagship output. 9/9 flagged the zone boundaries as imperceptible. The CSS values were directly measured.
**Verdict:** Among the best-evidenced findings. The 9-auditor agreement is unusually strong evidence by this project's standards.

---

## 3. SPECULATION MASQUERADING AS FACT

### S1: Quality point values for suppressor removal
Report 59 assigns specific point values to individual suppressor removals: S-01 removal = "+0.5-1.0", S-08 removal = "+0.3-0.5", etc. These values have NO empirical basis. No experiment has ever isolated a single suppressor. The values are the author's estimates presented in a table format that implies measurement.

### S2: CCS threshold values for tier boundaries
Reports 57 and 54 present CCS ranges for tiers (Middle: 0.10-0.15, Ceiling: 0.35-0.55, Flagship: 0.55-0.80). These are constructed from exactly 2 artifacts (CD-006 and Gas Town), with the CCS itself varying by 2x depending on who analyzes it (Claim 5 above). The threshold values are arbitrary assignments, not empirical boundaries.

### S3: The formal survival model's quantitative predictions
Report 46 presents S_N(x) = S(x)^N and derives that Tier 2 information has "87% loss" at N=5. The exponent N=5 (counting compression stages) is arguable, the base S values are post-hoc fitted, and the independence assumption is unsupported. The quantitative predictions are mathematical decoration on qualitative observations.

### S4: "Flagship 4/4 is achievable with 20-30% probability on first attempt"
Report 55 (line 653) estimates probabilities for achieving Flagship quality. These probabilities are pure judgment -- no frequency data exists because zero Flagship attempts under the proposed conditions have been made.

---

## 4. WELL-GROUNDED FOUNDATIONS (Safe for v3 Pipeline)

These findings are traceable to empirical data and safe to build upon:

1. **Soul constraints survive compression perfectly** (Report 40: 8/8, verified by CSS trace). Build on this: encode everything critical as code, not prose.

2. **Sub-perceptual CSS wastes builder effort** (Report 39: 238 lines / 22% of Flagship CSS was invisible). Build on this: enforce perception thresholds as hard gates.

3. **Container width is systematically violated** (Phase D: 4/5 pages, confirmed across 3+ experiments). Build on this: triple-redundant enforcement.

4. **Zone backgrounds below 15 RGB are imperceptible** (Flagship PA: 9/9 auditors confirmed). Build on this: 15 RGB as hard minimum.

5. **The conventions brief's world-description format works better than the 963-line checklist** (Gas Town success vs Flagship failure). Build on this: prefer world-description over constraint enumeration.

6. **Multi-channel shifts at boundaries create perceived "design" quality** (Middle experiment: 3-4 channels, scored 4/4 PA-05). Build on this: require 3+ coordinated channel shifts at boundaries.

7. **CD-006 demonstrates Ceiling-grade quality with vocabulary breadth but not Flagship-grade compositional unity** (Report 54: detailed CSS analysis). Build on this: vocabulary is necessary but not sufficient.

8. **The build-audit-fix loop is the primary quality correction mechanism** (confirmed across all experiments). Build on this: design for iteration, not single-pass perfection.

---

## 5. RECOMMENDATIONS

### R1: Label confidence levels on all quantitative claims
Every claim carrying a specific number (CCS = 0.40, quality = 3.0-3.5/4, survival = 5.3%) should be tagged with one of: MEASURED (from direct artifact analysis), ESTIMATED (from analyst judgment), or HYPOTHESIZED (from theoretical reasoning). Currently all three are presented identically.

### R2: Run the Q20 cheapest experiment before building v3
The 3-variable confound (format x length x model) is the single biggest threat to the entire evidence base. The Q20 experiment (add ONLY perception thresholds to the unchanged 963-line prompt, re-run with the same builder configuration) would isolate one variable for 4-10 hours of effort. This has been recommended since Report 39 and never executed.

### R3: Standardize CCS measurement before using it as a gate
The 2x variance between Report 54 (0.15-0.20) and Report 57 (0.40) on the SAME artifact makes CCS unusable as a programmatic threshold. Either specify the exact removal-test protocol (what counts as "change in perception"), or abandon CCS as a metric.

### R4: Treat the 73-line minimal set as HYPOTHESIS, not FINDING
Multiple reports reference the 73-line minimal set as if it is a validated design. It is an untested prediction. Pipeline v3 should be designed to TEST this hypothesis, not to ASSUME it.

### R5: Acknowledge the N=4 limitation explicitly
The entire evidence base rests on 4 experiments: Middle (1 run), Ceiling (1 run), Flagship (1 run), Gas Town (1 run). Every conclusion drawn from comparing these experiments is drawn from the minimum possible sample size. The synthesis reports regularly cite "evidence from multiple experiments" as if this establishes statistical reliability. It does not. N=4 with 4+ confounded variables per comparison is an exploratory dataset, not a confirmatory one.

### R6: Separate the metaphor from the mechanism
Reports frequently present metaphors (tuning fork, phase transition, smelting, DNA) as if they ARE the mechanism. The activation metaphor is useful; it is not a proven cognitive mechanism. The phase transition metaphor is evocative; it does not establish thermodynamic necessity. Pipeline v3 should be built on the OBSERVATIONS (more text can produce worse output; concrete values survive compression better than prose), not on the metaphors explaining those observations.

---

## 6. PER-REPORT GROUNDING MATRIX

Classification key:
- **G** = GROUNDED (backed by traceable CSS/HTML evidence from real artifacts)
- **I** = INFERRED (logical extrapolation from grounded evidence, direction likely correct)
- **S** = SPECULATIVE (theory/prediction without empirical validation)
- **C** = CIRCULAR (supported only by other reports in this same set)

| Report | Lines | Major Claims | G | I | S | C | %G | %I | %S | %C | Most Important Ungrounded | Most Surprising Grounded |
|--------|-------|-------------|---|---|---|---|----|----|----|----|--------------------------|--------------------------|
| 42 synthesis-alchemy | ~298 | 9 | 4 | 3 | 2 | 0 | 44% | 33% | 22% | 0% | "44:1 compression is optimal" — no evidence this ratio is better than alternatives | 7-phase assembly sequence IS traceable to actual git history of prompt drafts |
| 43 embodiment-chain | ~452 | 11 | 3 | 5 | 2 | 1 | 27% | 45% | 18% | 9% | "Phase transition CANNOT be skipped" — asserted as law from N=4 data | Soul constraints survive 100% through 4+ indirection levels (verified by CSS trace) |
| 44 lost-knowledge | ~365 | 8 | 4 | 2 | 1 | 1 | 50% | 25% | 13% | 13% | "83:1 compression ratio" overstates loss by counting non-source content | 45,083→542 line counts are individually traceable and verifiable |
| 45 beyond-eight-integration | ~372 | 10 | 2 | 4 | 3 | 1 | 20% | 40% | 30% | 10% | "18 STRUCTURAL concepts" taxonomy — category assignments are analyst judgment, not measurement | Mechanism catalog genuinely contains 18 distinct techniques with CSS examples |
| 46 meta-mechanism | ~589 | 14 | 3 | 4 | 5 | 2 | 21% | 29% | 36% | 14% | S(x)=1/(1+C(x)) formal model — post-hoc fitted, not predictive (see Claim 3) | 4 of 18 surviving rules came from EXPERIMENT FAILURES, not original research |
| 47 mechanism-provenance | ~394 | 12 | 8 | 3 | 1 | 0 | 67% | 25% | 8% | 0% | "Mechanisms 14-15 are native Opus with no pipeline ancestry" — attribution is judgment | 13 of 15 Gas Town mechanisms have traceable pipeline lineage (individual CSS→source chains) |
| 48 chromatic-arc-provenance | ~354 | 9 | 6 | 2 | 1 | 0 | 67% | 22% | 11% | 0% | "TC brief FAILURE was net-positive because it forced builder invention" — impossible to verify | Builder override comments (SC-10, SC-13, SC-14) are literally in the output HTML source |
| 49 typography-border-provenance | ~616 | 11 | 7 | 3 | 1 | 0 | 64% | 27% | 9% | 0% | "Builder invented 3-tier hierarchy from constraints + training" — attribution split uncertain | Output type scale values DON'T MATCH tokens.css — directly verifiable discrepancy |
| 50 adversarial-integration-gaps | ~330 | 10 | 5 | 3 | 2 | 0 | 50% | 30% | 20% | 0% | "28 integration gaps" count inflates severity — many are documentation gaps not functional gaps | Gate count inconsistency (21 vs 23 in different sections of same prompt) is a verified error |
| 51 rich-provenance-comparison | ~603 | 12 | 5 | 4 | 2 | 1 | 42% | 33% | 17% | 8% | "Compression intelligence score 3.5/5" — invented metric with no calibration standard | 12-domain coverage matrix with specific line counts for shipped vs available knowledge is traceable |
| 51b beyond-eight-independence | ~609 | 13 | 2 | 5 | 4 | 2 | 15% | 38% | 31% | 15% | "40→7 primitives (5.7:1 reduction)" — the 7 are analyst-selected, not empirically irreducible | Dependency graph structure (which concepts REQUIRE which) matches observable pipeline behavior |
| 52 adversarial-quality-gaps | ~398 | 10 | 5 | 3 | 2 | 0 | 50% | 30% | 20% | 0% | "Gas Town = 3.5/4 CEILING" — tier assignment depends on 14-dim framework (itself unvalidated) | 6/14 Flagship gates FAILED is directly checkable against gate definitions and artifact |
| 53 dimensional-gap-analysis | ~463 | 11 | 3 | 4 | 3 | 1 | 27% | 36% | 27% | 9% | "One-shot is the FUNDAMENTAL limit" — assumes iteration impossible, not proven | Live pipeline architecture (iteration within agent conversation) is a genuinely novel proposal |
| 54 cd006-deficit-analysis | ~517 | 12 | 7 | 3 | 1 | 1 | 58% | 25% | 8% | 8% | "CCS ~0.15-0.20" — contradicts Report 57's CCS ~0.40 for same artifact (see Claim 5) | Dimension-by-dimension CSS analysis of CD-006 is the most rigorous artifact evaluation in corpus |
| 55 flagship-crystallization | ~719 | 15 | 3 | 5 | 6 | 1 | 20% | 33% | 40% | 7% | "Geological survey metaphor" viewport walkthrough — entirely theoretical, zero artifacts | 5 specific CSS properties that distinguish Ceiling from Flagship are concretely testable |
| 56 concept-independence | ~446 | 10 | 1 | 4 | 3 | 2 | 10% | 40% | 30% | 20% | "40→12→7 primitive reduction" is taxonomy, not discovery — different analyst = different 7 | Edge-type classification (MANIFESTS/REQUIRES/ENABLES/SAME) is internally consistent |
| 57 compositional-fluency-deep | ~509 | 12 | 4 | 3 | 4 | 1 | 33% | 25% | 33% | 8% | "Three registers with CCS boundaries" — boundaries arbitrary, Register 3 has zero examples | CSS removal tests on CD-006 produce OBSERVABLE perceptual changes (grounded methodology) |
| 58 dispositional-recipe | ~427 | 11 | 2 | 4 | 4 | 1 | 18% | 36% | 36% | 9% | "D-01 through D-05 would produce measurable improvement" — n=0 for dispositional (see Claim 16) | Each D-instruction traces to a specific, verified failure mode in a real experiment |
| 59 suppressor-archaeology | ~867 | 16 | 5 | 4 | 5 | 2 | 31% | 25% | 31% | 13% | "73-line minimal set produces 3.5-4.0/4" — UNTESTED prediction with decimal precision | 7 suppressor chains with 3 feedback loops — chain STRUCTURE verified against prompt text |

### Aggregate Statistics

| Classification | Total Claims | Percentage |
|---------------|-------------|------------|
| GROUNDED | 79 | 37.3% |
| INFERRED | 68 | 32.1% |
| SPECULATIVE | 52 | 24.5% |
| CIRCULAR | 13 | 6.1% |
| **Total** | **212** | **100%** |

**By report type:**

| Category | Reports | Avg %G | Avg %S | Pattern |
|----------|---------|--------|--------|---------|
| Provenance traces (47, 48, 49) | 3 | 66% | 9% | Strongest evidence — directly trace CSS to sources |
| Empirical analysis (44, 50, 52, 54) | 4 | 52% | 15% | Good — analyze real artifacts with traceable methodology |
| Synthesis/integration (42, 43, 45, 51) | 4 | 33% | 20% | Mixed — start grounded, extend through inference |
| Formal models (46, 51b, 56, 57) | 4 | 20% | 33% | Weakest — dress observations in mathematical notation |
| Forward proposals (53, 55, 58, 59) | 4 | 24% | 34% | Speculative by design — proposals for untested interventions |

### Overall Evidence Base Assessment

The ~8,300 lines decompose as:

- **~3,100 lines (37%)** rest on traceable evidence from real artifacts (CSS measurements, HTML source analysis, git-verifiable prompt evolution, 9-auditor PA consensus)
- **~2,660 lines (32%)** are reasonable inferences from grounded evidence — direction likely correct but not independently verified
- **~2,030 lines (24%)** are speculation presented at the same confidence level as grounded findings — quality predictions with decimal precision, tier boundaries from N=2, formal models fitted post-hoc
- **~510 lines (6%)** are circular — claims supported only by other claims in the same report set

**The evidence base is genuine but inflated.** Roughly 70% of the corpus is grounded-or-inferred (safe to build on directionally). The dangerous 24% is speculative content presented WITHOUT confidence labels, making it indistinguishable from grounded findings to a downstream consumer. The 6% circular content creates an impression of convergent evidence when it is actually the same observation cited through multiple lenses.

**Most critical finding for Pipeline v3:** The provenance traces (Reports 47-49) are BY FAR the most evidence-rich material at 66% grounded. The formal models (Reports 46, 51b, 56, 57) are the least grounded at 20%. Pipeline v3 should weight provenance data heavily and treat formal models as useful heuristics only.

---

**END OF EVIDENCE GROUNDING AUDIT**

*The synthesis reports contain genuine insights grounded in real experimental data, but they systematically overstate the precision of their conclusions. The most reliable findings are concrete and traceable (soul constraint survival, sub-perceptual CSS waste, container width violations, 15 RGB threshold). The least reliable are quantitative predictions presented as measurements (quality point values for suppressor removal, CCS thresholds for tier boundaries, probability estimates for Flagship achievement). Pipeline v3 should be built on the 8 grounded findings in Section 4, should test the key hypotheses identified in Section 3, and should resist treating the formal models as anything more than useful conceptual frameworks.*
