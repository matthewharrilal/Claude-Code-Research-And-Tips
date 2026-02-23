# Council Verdict: Contradiction Resolution
Date: 2026-02-23
Judge: Neutral Council Judge (Opus, independent — NOT either advocate)
Status: AUTHORITATIVE — all subsequent artifacts must conform to these rulings

---

## Executive Summary

Both advocates presented strong, well-argued positions from their respective stances. The adversarial advocate correctly identifies that the VA's evidence base is thin (N=4, 7 confounded variables, 9/10 assumptions untested) and that several core components have zero evidence. The actionability advocate correctly identifies that the goal is to BUILD PAGES, that format improvements (recipe > checklist) are the highest-leverage intervention, and that tested-first sequencing is mandatory.

Where they disagree, the disagreement is almost always about FRAMING rather than SUBSTANCE. Both want single-pass default. Both want honest accounting. Both want binary gates over judgment gates. Both want perception thresholds reaching the builder. The real disagreements are narrow: whether "activation" language has any validity (adversarial says drop it entirely; actionability implicitly accepts parts of it), whether value tables are "transmission" (adversarial: yes; actionability: reference material), and how aggressively to caveat PROVEN findings.

My verdicts follow three principles: (1) evidence over theory -- tested beats untested, (2) simplicity over completeness -- when evidence is equal, simpler wins, (3) pragmatism over purity -- working pipeline beats theoretically perfect one. The goal is to produce a registry that an implementer can use to BUILD PAGES without self-deception about what is known versus what is hoped.

---

## PART 1: THE FOUR CRITICAL FAILURES (CF-01 through CF-04)

### CF-01: The 73-Line Shell Game

**Adversarial says:** The "73-line constraint set" is actually ~3,600 lines of builder input. v3 is LARGER than v2. All "73-line" references must carry honest accounting.

**Actionability says:** CF-01 is valid criticism of MARKETING, not of ARCHITECTURE. The 73-line constraint CAP is a real improvement -- the CONSTRAINT layer is 73 lines even if total input is ~3,600. The Middle experiment proves the constraint:reference ratio matters.

**VERDICT: ACTIONABILITY WINS on architecture, ADVERSARIAL WINS on accounting.**

The actionability advocate makes a crucial distinction: there IS a meaningful difference between 73 lines of constraints in recipe format surrounded by reference materials, versus 963 lines of undifferentiated constraints. The Middle experiment (100-line recipe + reference files = PA-05 4/4) vs Flagship (530+ line checklist + reference files = PA-05 1.5/4) demonstrates that the constraint:reference ratio changes builder behavior. Both experiments had access to similar reference files. The variable was the CONSTRAINT LAYER format, not total input volume. The adversarial advocate's arithmetic is correct -- total input IS ~3,600 lines -- but conflates constraints with reference materials. A builder receiving a 73-line recipe with reference files it can consult operates differently from a builder receiving 963 lines of undifferentiated constraints.

However, claiming "73 lines" without context IS misleading. The pipeline documentation must not claim volume reduction.

**Resolution:**
- The 73-line constraint cap is RETAINED as architectural target
- ALL documentation must state: "73-line constraint layer within ~3,600 total builder input (including reference files shared with v2)"
- The framing is: "FORMAT improvement (recipe vs checklist) and STRUCTURE improvement (layered constraint architecture), not volume reduction"
- Diagram 23 ITEM 092 rewritten to: "Restructure constraint layer to 73 lines in recipe format; total input comparable to v2 but better organized"

---

### CF-02: The Compositional Critic

**Adversarial says:** Pure fantasy (N=0). Pipeline must work without it. Every dependent item must carry UNVALIDATED flag.

**Actionability says:** Agrees. Compositional Critic is Tier 3 REQUIRES EXPERIMENTATION. Single-pass default. 3-pass experiment-gated.

**VERDICT: UNANIMOUS. Both advocates agree. Ratified.**

The Compositional Critic has zero evidence. The adversarial advocate's recommendation to flag all dependent items is correct. The actionability advocate's classification of single-pass-as-default is correct. These are complementary, not contradictory. The adversarial advocate's characterization of it as "FANTASY" is rhetorically harsh but substantively accurate at N=0. I classify it as EXPERIMENTAL/UNVALIDATED -- a slightly more neutral framing that preserves the adversarial finding (zero evidence) while acknowledging the hypothesis may have merit if tested.

**Resolution:**
- Compositional Critic = EXPERIMENTAL/UNVALIDATED in the unified registry
- All dependent items (3-pass architecture, Pass 2, Pass 3, conviction artifacts) tagged EXPERIMENTAL
- Pipeline default = SINGLE-PASS with self-evaluation (has N=1 evidence at PA-05 4/4)
- 3-pass architecture = OPTIONAL ENHANCEMENT, blocked until experiment #21 validates
- Diagram 21 ITEM 038 rewritten: "PA auditor is the primary check; Compositional Critic is experimental pending validation"

---

### CF-03: Suppressor Removal Is Not Monotonically Positive

**Adversarial says:** S-09, S-07, S-14 may be load-bearing. Phased removal required. The N=4 confound makes it impossible to separate variables.

**Actionability says:** Agrees on phasing. Adds critical nuance: the Flagship failure was that the builder lacked KNOWLEDGE of perception thresholds, not that it lacked a numeric cap. Inform (actionability) AND constrain (adversarial).

**VERDICT: ADVERSARIAL WINS on phasing. ACTIONABILITY ADDS a critical nuance I adopt.**

The adversarial review is right that blind removal is dangerous -- 9/9 PA auditors flagged whitespace voids as the dominant Flagship failure, and that was WITH stacking limits in place. But the actionability advocate identifies a root cause the adversarial advocate misses: the builder produced invisible CSS not because the stacking cap was wrong, but because the builder had no concept of perceptibility. The perception threshold table (actionability item #2, 8 lines) addresses this through INFORMATION rather than CONSTRAINT. The ideal resolution is BOTH: inform the builder of perception thresholds AND keep programmatic verification. Belt and suspenders.

**Resolution:**
- Suppressor removal curve relabeled: "HYPOTHESIZED improvement (phased validation required)"
- Phase 1 removals (SAFE): S-01 (mechanism count language), S-03 (judgment language), S-08 (technique counting) -- unanimously identified as harmful
- Phase 2 removals (TEST FIRST): S-09 (stacking gap), S-07 (letter-spacing bounds), S-14 (mechanism minimums) -- keep as PROGRAMMATIC GATES with adjusted thresholds (S-09: <=150px total stacked gap instead of <=96px per-property)
- ALSO: builder receives perception threshold table (actionability item #2, 8 lines) as calibration
- Monotonic framing REMOVED from all documentation

---

### CF-04: N=4 Undermines Every Prediction

**Adversarial says:** Every quantitative prediction is a hypothesis. Add EVIDENCE column.

**Actionability says:** Agrees. N=4, 9/10 untested. Every prediction is a hypothesis.

**VERDICT: UNANIMOUS. Both advocates agree. Ratified with nuance on PROVEN classifications.**

N=4 with 7 confounded variables does not support causal inference. This is mathematics, not opinion. Both advocates are correct. However, I add one nuance: not all "PROVEN" items in Diagram 25 should be downgraded equally. Binary observations are stronger evidence than quality score correlations even with confounds:

- "Container width 940-960px is violated in 60% of builds" = OBSERVED FACT (binary, 3/5 violated)
- "Perception thresholds prevent invisible CSS" = OBSERVED FACT (binary: all builds with thresholds had visible CSS; all without had invisible CSS)
- "'Sample 2-4 mechanisms' is the #1 suppressor" = PROVEN (unanimous identification by 11 independent agents, clear suppression mechanism identified -- this is a structural finding, not a quantitative prediction)
- "Recipe format correlates with higher PA-05" = OBSERVED/CONFOUNDED (N=2, massive effect +2.5 PA-05, but confounded with content type and prompt volume)
- "PA-05 3.5-4.0 predicted for v3" = THEORETICAL (N=0 with the v3 spec)

**Resolution:**
- Unified registry gets an EVIDENCE column with values:
  - **FACT**: Binary observation verifiable in the data
  - **PROVEN**: Structural finding with convergent evidence from multiple independent sources AND clear mechanism
  - **OBSERVED**: Consistent direction across data, variables not isolated
  - **CONFOUNDED**: Direction observed, cannot separate from co-varying factors
  - **THEORETICAL**: N=0, hypothesis only
  - **SPECULATIVE**: Author estimate with no empirical basis
- Diagram 25 "PROVEN" list reclassified per above taxonomy
- All PA-05 predictions carry "(hypothesis)" suffix
- Report 09's probability estimates (60-75%) relabeled SPECULATIVE

---

## PART 2: SUBSTANTIVE CONTRADICTIONS (Cross-Diagram)

### Contradiction A: "Activation Not Transmission" vs Value Tables (SR-03, SR-04)

**Adversarial says:** Deepest architectural contradiction. Value tables are a "stealth checklist." Drop "activation" marketing entirely. v3 is "better-organized transmission."

**Actionability says:** Agrees on keeping value tables. Agrees on honest framing. Does not directly defend "activation" language.

**VERDICT: ADVERSARIAL WINS on framing, but I soften the kill shot.**

The adversarial advocate is correct: you cannot claim "activation not transmission" while transmitting 550 lines of specific CSS values. That is an inescapable contradiction. But I reject the adversarial advocate's most extreme position that "activation" is purely "marketing." There IS a meaningful operational difference between v2 and v3 that the word "activation" imperfectly captures:

- v2: "Use >= 3 distinct spacing values" (compliance target -- builder aims at the number)
- v3: "Each section breathes at its own rhythm" + value table showing Zone 1: padding 48-64px, Zone 3: padding 24-32px (disposition + vocabulary)

The difference is not activation vs transmission -- it is PURPOSE + VOCABULARY vs SPECIFICATION ALONE. The disposition provides compositional purpose; the value table provides CSS vocabulary. Together they are more actionable than either alone.

**Resolution:**
- "Activation not transmission" is RETIRED as a pipeline philosophy
- Replaced with: "PURPOSE + VOCABULARY: dispositional instructions provide compositional intent; value tables provide CSS vocabulary. Builder integrates both."
- Value tables = RETAINED, classified as "structured reference material"
- The tension is acknowledged: "Value tables provide specific CSS ranges, which is intentionally prescriptive. Creative authority lies in HOW the builder combines these values to serve the page's governing logic."
- SR-03 (unfalsifiable): resolved by abandoning the "activation" claim. The operational question becomes "Do dispositional instructions improve output vs value tables alone?" -- this IS falsifiable (experiment #20)

---

### Contradiction B: Single-Pass vs 3-Pass Architecture

**Both advocates agree: single-pass = DEFAULT.**

**VERDICT: UNANIMOUS. Single-pass is the default architecture.**

The Middle experiment achieved PA-05 4/4 in a single pass in 35 minutes. Every successful build in history was single-pass. Every multi-pass proposal is theoretical (N=0). The Compositional Critic that mediates between passes has never existed. Both advocates converge on: prove single-pass works at 3.5+ before adding passes.

**Resolution:**
- Pipeline v3 launches as SINGLE-PASS with builder self-evaluation
- 3-pass architecture = EXPERIMENTAL, blocked until experiment #21
- All 3-pass items tagged EXPERIMENTAL in unified registry
- Conviction artifacts = EXPERIMENTAL (dependent on 3-pass)
- Cost documented: single-pass ~60-120 min total, 3-pass ~125-255 min total

---

### Contradiction C: Emotional Arc -- Emergent vs Specified

**Adversarial says:** Internal contradiction in Diagram 21: "cannot be specified" + D-03/D-04/D-05/D-07 dependency chain = specification of the unspecifiable.

**Actionability says:** Agrees emotional arc is emergent. Remove gate-runner items. PA auditor checks post-build.

**VERDICT: ADVERSARIAL WINS on identifying the logical contradiction. Resolution synthesizes both positions.**

The adversarial advocate correctly identifies a genuine logical contradiction. But I resolve it differently: the disposition-emotion links are not "predictions" or "specifications" -- they are DESIGN INTENTIONS. D-04 does not GUARANTEE surprise; it creates CONDITIONS for surprise. This is the legitimate meaning of "emergent": you cannot specify the outcome, but you can set up conditions. The disposition instructions are the pipeline's best guess about what conditions produce which emotional registers. They are worth including as design hypotheses, not as architectural guarantees.

**Resolution:**
- Emotional arc = EMERGENT (correct, cannot be gate-checked)
- Disposition-emotion links reclassified from ARCHITECTURAL_DEPENDENCY to DESIGN_INTENTION
- Registry framing: "D-04 creates conditions for surprise (not guaranteed)" instead of "D-04 creates SURPRISE"
- PA auditor assesses emotional arc post-build
- Compositional Critic as "primary check" for emotional arc = REMOVED (Critic is experimental)

---

### Contradiction D: 80% Creative Authority vs Design System Consistency (DT-03)

**Adversarial says:** Fantasy assumption (N=0). Cross-page coherence is untested. Add a 2-page consistency experiment.

**Actionability says:** Agrees untested. Simplify to "builder has creative freedom within identity constraints."

**VERDICT: ADVERSARIAL WINS on classification. ACTIONABILITY WINS on framing.**

Nobody has built two v3-style pages and compared them. Cross-page consistency at 80% creative authority is pure hypothesis. The adversarial advocate is correct to flag this and correct to propose a 2-page experiment. The actionability advocate's simplified framing ("creative freedom within identity constraints") is cleaner than "80%" -- the number implies false precision.

**Resolution:**
- "80% creative authority" -> "creative freedom within identity constraints"
- Cross-page consistency = OPEN QUESTION, UNTESTED
- Add experiment: after 3+ pages built with v3, evaluate cross-page coherence
- Shared tokens/soul providing inherent coherence (ITEM 172) = THEORIZED, not assumed

---

### Contradiction E: Opus Builder vs Cost Reality (SR-01, SR-02)

**Adversarial says:** 3-7x more expensive. Opus dependency is single point of failure.

**Actionability says:** Strong recommendation pending experiment #19, not "non-negotiable."

**VERDICT: ACTIONABILITY WINS. Opus is strong recommendation, not non-negotiable.**

The evidence is genuinely confounded: Opus correlates with CD-006 (39/40) but Opus + Remediation scored 2.5/4. Sonnet + Middle scored 4.0/4. The variable has never been isolated. The actionability position (strong recommendation, validate experimentally) is the evidence-respecting choice. The adversarial cost analysis is correct for 3-pass but irrelevant since both advocates agree on single-pass default.

**Resolution:**
- Opus builder = STRONG RECOMMENDATION (not non-negotiable)
- Single-pass cost: ~60-120 min, ~$30-150 per page (honest estimate including all phases)
- 3-pass cost (EXPERIMENTAL): ~125-255 min, ~$120-1,050 per page
- Sonnet fallback paths designed for non-builder roles
- Experiment #19 (Opus vs Sonnet isolation) = HIGH PRIORITY

---

### Contradiction F: Quality Equation Q = Capability x Affordance x Fidelity

**Adversarial says:** Unfalsifiable. No units, no measurement, no verification.

**Actionability says:** Does not defend it.

**VERDICT: ADVERSARIAL WINS (uncontested).**

The quality equation is a conceptual model, not an operational formula. It belongs in research documentation, not in an operational registry.

**Resolution:**
- ITEM 2 reclassified from DECISION to CONCEPTUAL_MODEL
- Moved to DOCUMENTATION, not operational pipeline
- Caveat: "Conceptual framing only. No defined units. Not operational."

---

### Contradiction G: Suppressor Removal Priorities

**Adversarial says:** Phased: PROVEN_HARMFUL first, AMBIGUOUS second with individual testing.

**Actionability says:** Cheapest experiment first. Tier 1 items (#1-9) are all proven suppressor removals.

**VERDICT: SYNTHESIS. Both positions are complementary.**

The adversarial framework (phased by risk) and the actionability framework (phased by cost) produce the same ordering. PROVEN_HARMFUL suppressors (S-01, S-08, S-03) are ALSO the cheapest to remove (they require only text changes to the constraint layer). AMBIGUOUS suppressors (S-09, S-07, S-14) are ALSO the most expensive to validate (each requires a build + PA cycle). The phase ordering is the same either way.

**Resolution:**
- Phase 1: Remove PROVEN_HARMFUL suppressors (mechanism count language, judgment language, technique counting) -- cost ~2 hours, zero risk
- Phase 2: Test AMBIGUOUS suppressors individually (S-09, S-07, S-14) -- each requires a build + PA cycle, ~4-8 hours each

---

### Contradiction H: Recipe vs Checklist Format

**Adversarial says:** N=2 evidence is confounded but direction is consistent. Recipe format should be classified as OBSERVED, not PROVEN.

**Actionability says:** Recipe format is the #1 lever. +2.5 PA-05 effect. Three independent reports converge. Misclassifying as GATES buries it.

**VERDICT: ACTIONABILITY WINS on classification and routing. ADVERSARIAL's downgrade from PROVEN to OBSERVED is correct.**

Recipe format is the builder's PRIMARY OPERATING MODE, not a gate. The actionability advocate's classification correction (ORCHESTRATION, not GATES) is architecturally cleaner. The adversarial evidence downgrade (OBSERVED, not PROVEN) is epistemically correct -- the N=2 comparison confounds recipe format with content type and prompt volume. But "OBSERVED with massive +2.5 effect size, unanimous direction, 3 independent reports converging" is strong enough to build on.

**Resolution:**
- ITEM 138 (recipe format) reclassified from GATES to ORCHESTRATION
- Evidence: OBSERVED (N=2, massive effect +2.5 PA-05, confounded, consistent direction, 3 independent convergences)
- Recipe format is the builder prompt's organizing principle

---

## PART 3: THE 87 LAYER x AGENT TENSIONS

### Pattern 1: GATES -> BUILDER (10 items)

**Adversarial says:** CONTEXTUAL for 7/10 (mode/format/vocabulary), REAL for 3/10 (threshold leak).

**Actionability says:** Perception thresholds MUST reach builder (item #2, breaks Chain A+E). "Builder sees no thresholds" rule caused PA-05 1.5/4.

**VERDICT: ACTIONABILITY WINS on the core principle. The blanket "builder sees no thresholds" rule is wrong for perception thresholds.**

The Flagship builder produced imperceptible CSS because it had no concept of perceptibility. Withholding perception thresholds from the builder is a quality suppressor. The adversarial advocate correctly distinguishes gate-format thresholds (pass/fail) from calibration-format thresholds (information). The actionability advocate correctly insists perception thresholds MUST reach the builder as calibration.

**Resolution for all 10 items:**

| # | Item | Verdict | New Layer | New Agent | Reasoning |
|---|------|---------|-----------|-----------|-----------|
| 1 | ITEM 120 "Builder sees frameworks only" | RECLASSIFY | ORCHESTRATION | ORCHESTRATOR | Routing policy, not a gate |
| 2 | ITEM 124 "Builder optimizes for quality" | RECLASSIFY | DISPOSITION | BUILDER | Builder-facing disposition |
| 3 | ITEM 137 "Builder enters COMPOSING mode" | RECLASSIFY | DISPOSITION | BUILDER | Builder-facing mode instruction |
| 4 | ITEM 138 "Recipe format (not checklist)" | RECLASSIFY | ORCHESTRATION | ORCHESTRATOR | Format spec for prompt assembly |
| 5 | ITEM 57 CSS Custom Properties naming | RECLASSIFY | SCAFFOLDING | BUILDER | Vocabulary exemplar |
| 6 | ITEM 61 Named by CONCEPT | RECLASSIFY | SCAFFOLDING | BUILDER | Vocabulary exemplar |
| 7 | ITEM 66 zone-1 callout padding | RECLASSIFY | SCAFFOLDING | BUILDER | Value table entry |
| 8 | ITEM 67 zone-3 callout padding | RECLASSIFY | SCAFFOLDING | BUILDER | Value table entry |
| 9 | ITEM 68 zone-3 border-left-width | RECLASSIFY | SCAFFOLDING | BUILDER | Value table entry |
| 10 | ITEM 78 Mode determinant 5 | RECLASSIFY | ROUTING | ORCHESTRATOR | Mode selection logic |

**Perception thresholds (background delta, letter-spacing, stacked gap, border weights):**
- DUAL-ROUTE: go to BUILDER as calibration AND to GATE-RUNNER as binary checks
- Builder format: "Backgrounds must differ by at least 15 RGB points to be perceptible"
- Gate-runner format: "FAIL if adjacent zone background delta < 15 RGB"

**Summary: 10/10 RECLASSIFY.** None are gate thresholds. They are routing policies, dispositions, scaffolding vocabulary, or mode selection.

---

### Pattern 2: IDENTITY -> BUILDER (6 items)

**Both advocates agree: DUAL-ROUTE.**

**VERDICT: UNANIMOUS. DUAL-ROUTE ratified.**

Both advocates independently reached the same conclusion. Identity constraints define the design space -- the builder must know them to create within them, and the gate-runner must verify them because they are binary-testable.

| # | Item | Verdict | Routing |
|---|------|---------|---------|
| 1 | ITEM 20 Soul constraints as WORLD-DESCRIPTION | DUAL-ROUTE | BUILDER (world framing) + GATE-RUNNER (binary check) |
| 2 | ITEM 21 "Every surface is sharp" | DUAL-ROUTE | BUILDER (world framing) + GATE-RUNNER (border-radius check) |
| 3 | ITEM 22 border-radius:0, box-shadow:none, 940-960px | DUAL-ROUTE | BUILDER (constraint) + GATE-RUNNER (binary check) |
| 4 | ITEM 23 warm palette, font trinity, no gradients | DUAL-ROUTE | BUILDER (constraint) + GATE-RUNNER (binary check) |
| 5 | ITEM 073 Source: tokens.css + soul + components.css | KEEP AS-IS | All agents (reference material) |
| 6 | ITEM 020 Zero decorative elements | DUAL-ROUTE | BUILDER (constraint) + GATE-RUNNER (binary check) |

**Summary: 5 DUAL-ROUTE, 1 KEEP AS-IS.** No layer reclassification needed. IDENTITY is the correct layer.

---

### Pattern 3: ORCHESTRATION -> BUILDER (35 items)

**Adversarial says:** CONTEXTUAL. Builder's recipe. Must be recipe format, not gate format.

**Actionability says:** CONTEXTUAL. Layer and agent are orthogonal. Items authored by orchestrator, consumed by builder.

**VERDICT: CONTEXTUAL for the pattern. Both advocates agree on the resolution principle. Specific sub-rulings below.**

The 35 items are not real contradictions -- they are items authored by the orchestration layer that correctly route to the builder. Layer = origin, Agent = destination. These are orthogonal dimensions.

**Sub-ruling: 3-pass items (Items 2-3, 14, 18-19, 21-22, 25-26, 28)**
- Single-pass = DEFAULT. 3-pass = EXPERIMENTAL. Both advocates agree.
- These 10 items remain in registry but tagged EXPERIMENTAL/BLOCKED-UNTIL-EXPERIMENT-21.

**Sub-ruling: Opus non-negotiable (Item 100)**
- ACTIONABILITY WINS. Opus = STRONG RECOMMENDATION, not non-negotiable.

**Sub-ruling: Applied vs Composed mode (Items 50-54 from D18-20, Item 63 from D18-20)**
- ACTIONABILITY WINS. Builder receives ONE mode's recipe, not both. Orchestrator selects mode.
- Items 50-54 (D18-20) reclassified: agent changes to ORCHESTRATOR (mode selection logic).
- Item 63 (D18-20, concept names predict CSS) stays BUILDER (vocabulary).

**Sub-ruling: Fresh instances (Items 21, 112)**
- KEEP as low-cost best practice. Both advocates agree theoretical basis is sound.

**Resolution for all 35 items:**

| Items | Count | Verdict | Notes |
|-------|-------|---------|-------|
| Builder inputs (50-51, 54) | 3 | KEEP AS-IS | Orchestrator assembles, builder receives. No tension. |
| 8-step build sequence (59-67) | 9 | KEEP AS-IS | Builder's recipe. Must stay in recipe format. |
| Builder capabilities (98, 102) | 2 | KEEP AS-IS | Builder needs to know its tools. |
| Builder disposition (112, 114) | 2 | KEEP AS-IS | Builder-facing mode instructions. |
| Opus non-negotiable (100) | 1 | MODIFY | Downgrade to "strongly recommended." |
| 3-pass items (2, 3, 5, 14, 18, 19, 21, 22, 25, 26, 28) | 11 | TAG EXPERIMENTAL | Retain but not in default path. |
| Mode distinction (50-54 D18-20) | 5 | RECLASSIFY AGENT | Agent -> ORCHESTRATOR (mode selection). |
| Concept names (63 D18-20) | 1 | RECLASSIFY LAYER | Layer -> SCAFFOLDING (vocabulary). |
| 73-line cap (6) | 1 | MODIFY | Add CF-01 parenthetical. |

**Summary: 16 KEEP AS-IS, 11 TAG EXPERIMENTAL, 6 RECLASSIFY, 2 MODIFY.**

---

### Pattern 4: ROUTING -> GATE-RUNNER (2 items)

**Adversarial says:** CONTEXTUAL. Survival function is a gate policy expressed in routing language. Reclassify to GATES.

**Actionability says:** Meta-rule for prompt assembly. Belongs in orchestrator, not gate-runner.

**VERDICT: ACTIONABILITY WINS on destination, ADVERSARIAL WINS on layer reclassification.**

The survival function S(x) = 1/(1+C(x)) is a CURATION function that runs during prompt assembly (Phase 0-1), not a runtime gate check (Phase 3). The adversarial advocate is right it is not ROUTING (reclassify layer). The actionability advocate is right about WHERE it runs: during assembly, in the orchestrator.

| # | Item | Verdict | New Layer | New Agent |
|---|------|---------|-----------|-----------|
| 1 | ITEM 5 (D18-20) S(x) survival function | RECLASSIFY | GATES | ORCHESTRATOR |
| 2 | ITEM 7 (D18-20) Both branches | RECLASSIFY | GATES | ORCHESTRATOR |

**Summary: 2/2 RECLASSIFY.**

---

### Pattern 5: VALUES -> GATE-RUNNER (34 items)

**Both advocates agree: quality judgments do NOT belong in the gate-runner.**

**VERDICT: UNANIMOUS for the principle. All 34 rerouted. Sub-classification below.**

Both advocates correctly identify that the gate-runner checks BINARY THRESHOLDS ONLY. Quality tier assessments require judgment. I sub-classify the 34 items by appropriate destination:

**Category A: REROUTE to ORCHESTRATOR (planning/calibration) -- 15 items**

| Items | Content |
|-------|---------|
| ITEM 31 (D04-05) | Suppressor removal curve |
| ITEM 32 (D04-05) | 4.0 Flagship target |
| ITEM 34-38 (D04-05) | PA-05 scores at each level |
| ITEM 39 (D04-05) | Suppressors remaining progression |
| ITEM 43-44 (D04-05) | Suppressor prioritization |
| ITEM 45 (D04-05) | Total predicted gain |
| ITEM 46 (D04-05) | Gas Town data point |
| ITEM 47 (D04-05) | More lines HURTS finding |
| ITEM 75 (D06-08) | Gas Town 10-dimension gap |
| ITEM 036 (D15-17) | Flagship target PA-05 3.5-4.0 |

**Category B: REROUTE to PA AUDITOR (quality assessment framework) -- 10 items**

| Items | Content |
|-------|---------|
| ITEM 22 (D18-20) | PA-05 measures perceived quality |
| ITEM 23 (D18-20) | "Does it look DESIGNED?" |
| ITEM 27 (D18-20) | 1-4 scale FLAT/ASSEMBLED/COMPOSED/DESIGNED |
| ITEM 28-30 (D18-20) | CCS definition, interaction question, removal test |
| ITEM 31 (D18-20) | CCS 0.00-1.00 scale |
| ITEM 43-45 (D18-20) | Register 1/2/3 definitions |

**Category C: REROUTE to DOCUMENTATION (historical data, research metadata) -- 9 items**

| Items | Content |
|-------|---------|
| ITEM 32-35 (D18-20) | Page scores (Middle, Gas Town, CD-006, Flagship) |
| ITEM 031 (D15-17) | CCS > 0.35 as mode indicator |
| ITEM 033-035 (D15-17) | PA-05 progression (1.5, 2.5, 3.0-3.2 projected) |
| ITEM 039 (D21-25) | 347 claims, 83.3% consistent |

**CCS note:** CCS measurement varies by +/- 0.15 depending on methodology (5 contradictions documented). CCS CANNOT be gate-checked until methodology is standardized. All CCS items tagged "RESEARCH -- do not operationalize until methodology standardized."

**Summary: 34/34 RECLASSIFY.** 15 to ORCHESTRATOR, 10 to PA_AUDITOR, 9 to DOCUMENTATION.

---

## PART 4: INTER-REPORT CONTRADICTIONS

| Reports | Contradiction | Severity | Ruling |
|---------|---------------|----------|--------|
| 01 vs 02 | Builder input "93-108" vs "73" lines | Medium | RESOLVED: 73 = constraint layer; 93-108 includes disposition. Both correct at different scopes. |
| 01 vs 09 | "Single pass" vs "3 passes" | High | RESOLVED: Single-pass = DEFAULT. 3-pass = EXPERIMENTAL. |
| 01 vs 09 | "12-15 agents" vs "14 Opus alone" | High | RESOLVED: 12-15 for single-pass; 14 Opus only for experimental 3-pass. |
| 02 vs 08 | Builder input "73 lines" vs "~550 lines" | High | RESOLVED: 73 = constraints; ~550 includes value tables. See CF-01. |
| 03 vs 11 | "Never tell builder what CSS" vs 550 lines of CSS | High | RESOLVED: Value tables are CSS VOCABULARY, not commands. Tension is real but resolved by PURPOSE + VOCABULARY framing. |
| 04 vs 01,09 | "Phased removal" vs "all removed" | Medium | RESOLVED: PHASED REMOVAL is correct. Reports 01/09 incorrectly assumed all suppressors removed. |
| 08 vs 11 | "Activate" vs "transmit 550 lines" | High | RESOLVED: "Activation" framing RETIRED. See Contradiction A. |
| 09 vs self | Wall clock estimates inconsistent | Low | RESOLVED: Use sub-estimate sums (more transparent) plus overhead. Single-pass: 60-120 min. 3-pass: 125-255 min. |

---

## PART 5: ITEMS REMOVED, MODIFIED, OR ADDED

### Removed from DEFAULT pipeline (moved to EXPERIMENTAL)

1. **Compositional Critic** (CF-02) -- zero evidence
2. **3-pass iteration as DEFAULT** (CF-02 dependent) -- zero evidence of convergence
3. **Conviction artifacts** (3-pass dependent) -- untested component
4. **"Activation not transmission" framing** (SR-03) -- retired; replaced with PURPOSE + VOCABULARY
5. **Probability estimates from Report 09** (60-75%) -- relabeled SPECULATIVE
6. **Register 3 / atmospheric coupling** (ITEM 178) -- zero evidence AI can achieve this
7. **Flagship 4/4 as discrete register** (ITEM 179) -- may be asymptotic limit, not reachable target

### Retained but MODIFIED

1. "73-line constraint set" -> "73-line constraint layer within ~3,600 total builder input"
2. "Recipe format > checklist (PROVEN)" -> "OBSERVED, N=2, massive +2.5 effect, confounded, consistent direction"
3. "Perception thresholds prevent invisible CSS (PROVEN)" -> RETAINED AS PROVEN (strongest claim, N=3, binary, no counterexamples)
4. "Container 940-960px non-negotiable (PROVEN)" -> RETAINED AS PROVEN (binary, 3/5 violated)
5. "'Sample 2-4 mechanisms' is #1 suppressor (PROVEN)" -> RETAINED AS PROVEN (unanimous, clear mechanism)
6. "Opus builder non-negotiable" -> "STRONG RECOMMENDATION pending experiment #19"
7. Value tables (550 lines) -> "Structured reference material" (not "activation" or "positive scaffolding")
8. Suppressor removal curve -> "HYPOTHESIZED improvement, phased validation required"
9. CCS thresholds -> "RESEARCH CONSTRUCT, do not operationalize until methodology standardized"
10. 80% creative authority -> "Creative freedom within identity constraints (cross-page coherence UNTESTED)"
11. Dispositional instructions D-01-D-08 -> "EXPERIMENTAL, include in smoke test, evaluate via experiment #20"
12. Emotional arc dependencies -> "DESIGN INTENTIONS (create conditions, not guaranteed outcomes)"
13. Quality equation Q=C*A*F -> "CONCEPTUAL MODEL, not operational"

### Added per both advocates' agreement

1. **EVIDENCE column** in unified registry (FACT / PROVEN / OBSERVED / CONFOUNDED / THEORETICAL / SPECULATIVE)
2. **Perception threshold table to builder** (actionability #2, 8 lines) -- DUAL-ROUTE builder + gate-runner
3. **Phased suppressor removal protocol** -- Phase 1 (safe) then Phase 2 (test-gated)
4. **Content-volume-to-zone-count map** (actionability #3, 6 lines) -- ROOT CAUSE prevention
5. **Content-form fit gate** (actionability #4, 5 lines) -- ROOT CAUSE prevention
6. **Mechanism density cap per viewport** (actionability #5, 2 lines)
7. **Semantic value 3-question test** (actionability #6, 8 lines)
8. **Honest cost estimates** in all documentation
9. **2-page cross-consistency experiment** (adversarial Contradiction D)
10. **Smoke test as BLOCKING prerequisite** (both advocates agree)

---

## PART 6: IMPLEMENTATION SEQUENCE

Both advocates converge on the same phased approach. Ratified and formalized:

**Phase 0: PRE-FLIGHT (BLOCKING)**
- Run smoke test (Report 10 Stage 0, ~3 hours)
- If smoke test fails, STOP and diagnose

**Phase 1: SAFE FIXES (2-4 hours)**
- Apply actionability Tier 1 items #1-#9
- Remove Phase 1 suppressors (S-01, S-03, S-08)
- Add perception threshold table to builder prompt
- Convert constraint format to recipe

**Phase 2: CHEAP EXPERIMENTS (4-8 hours each)**
- Experiment #22 (Q20 thresholds-only) -- validates suppressor thesis
- Experiment #20 (disposition-only) -- validates dispositional instructions

**Phase 3: DESIGN WORK (4-8 hours)**
- Actionability Tier 2 items #10-#14
- Zone-level CSS value tables
- Integrative gestalt auditor

**Phase 4: FULL EXPERIMENTS (8-20 hours each)**
- Experiment #19 (Opus vs Sonnet isolation)
- Experiment #18 (73-line constraint set test)
- Experiment #21 (creative revision cycle) -- ONLY IF single-pass fails to reach PA-05 3.0

**Phase 5: ARCHITECTURE (only if experiments validate)**
- 3-pass iteration (only if experiment #21 validates)
- Atmospheric coupling (only if experiments validate)
- Flagship 4/4 pursuit (only if prior phases succeed)

---

## PART 7: SUMMARY TABLE

| Contradiction | Winner | Key Action |
|---------------|--------|------------|
| CF-01 (73-line shell game) | SPLIT: Actionability on arch, Adversarial on accounting | Add total input parenthetical, retain 73-line cap |
| CF-02 (Compositional Critic) | UNANIMOUS | Tag EXPERIMENTAL, single-pass default |
| CF-03 (Suppressor removal) | ADVERSARIAL + actionability nuance | Phased removal, S-09/S-07/S-14 Phase 2, builder gets thresholds |
| CF-04 (N=4 problem) | UNANIMOUS | Add 6-level evidence taxonomy |
| A: Activation vs Transmission | ADVERSARIAL on framing | Retire "activation," adopt PURPOSE + VOCABULARY |
| B: Single vs 3-pass | UNANIMOUS | Single-pass DEFAULT, 3-pass EXPERIMENTAL |
| C: Emotional arc | SYNTHESIS | Design intentions, not guarantees; PA assesses |
| D: Creative authority | ADV on classification, ACT on framing | Cross-page = OPEN QUESTION |
| E: Opus cost | ACTIONABILITY | Strong recommendation, not non-negotiable |
| F: Quality equation | ADVERSARIAL (uncontested) | Move to CONCEPTUAL_MODEL |
| G: Suppressor priorities | SYNTHESIS | Phased by risk AND cost (same ordering) |
| H: Recipe vs checklist | ACTIONABILITY on routing, ADV on evidence | ORCHESTRATION not GATES; OBSERVED not PROVEN |
| GATES->BUILDER (10) | RECLASSIFY all 10 | Layer errors; perception thresholds dual-route |
| IDENTITY->BUILDER (6) | 5 DUAL-ROUTE, 1 KEEP | Builder + gate-runner, different formats |
| ORCH->BUILDER (35) | 16 KEEP, 11 EXPERIMENTAL, 6 RECLASSIFY, 2 MODIFY | Single-pass default; mode selection by orchestrator |
| ROUTING->GATE (2) | RECLASSIFY both | GATES layer, ORCHESTRATOR agent |
| VALUES->GATE (34) | RECLASSIFY all 34 | 15 ORCH, 10 PA, 9 DOCS; gate-runner = binary only |

### Win/Loss Tally (12 substantive contradictions)

| Outcome | Count | Contradictions |
|---------|-------|---------------|
| ADVERSARIAL wins | 3 | CF-03 suppressor phasing, Activation framing, Quality equation |
| ACTIONABILITY wins | 3 | Single/3-pass sequencing, Opus cost, Recipe routing |
| SPLIT (each wins part) | 3 | CF-01 shell game, Creative authority, Recipe evidence |
| SYNTHESIS | 2 | Emotional arc, Suppressor priorities |
| UNANIMOUS | 3 | CF-02 Critic, CF-04 N=4, Single-pass default |

(Note: UNANIMOUS means both advocates agreed before the verdict was rendered, so no "winner" -- both are correct.)

### Layer x Agent Tension Tally (87 items)

| Category | RECLASSIFY | DUAL-ROUTE | KEEP AS-IS | EXPERIMENTAL | MODIFY |
|----------|-----------|------------|------------|--------------|--------|
| GATES->BUILDER (10) | 10 | 0 | 0 | 0 | 0 |
| IDENTITY->BUILDER (6) | 0 | 5 | 1 | 0 | 0 |
| ORCH->BUILDER (35) | 6 | 0 | 16 | 11 | 2 |
| ROUTING->GATE (2) | 2 | 0 | 0 | 0 | 0 |
| VALUES->GATE (34) | 34 | 0 | 0 | 0 | 0 |
| **TOTALS** | **52** | **5** | **17** | **11** | **2** |

---

## Closing Statement

Both advocates served this process well. The adversarial advocate's intellectual honesty about the evidence base is the single most valuable contribution to the VA -- without it, the pipeline would be built on fantasy presented as engineering. The actionability advocate's builder-first pragmatism ensures the pipeline's theoretical improvements actually reach the CSS-writing agent. Neither advocate alone produces a buildable pipeline; together their positions synthesize into one.

The pipeline that emerges from these verdicts is:
- **Honest** about its evidence base (N=4, most predictions are hypotheses)
- **Simple** in its default architecture (single-pass, recipe format, binary gates)
- **Experimentally disciplined** about its aspirations (every EXPERIMENTAL item blocked behind a specific validation experiment)
- **Builder-centric** in its design (perception thresholds reach the builder, recipe format is the organizing principle, mode selection is handled by the orchestrator)

*This verdict is AUTHORITATIVE for all subsequent pipeline artifacts. Where this document conflicts with any other VA document, this document takes precedence. The unified registry must be updated to reflect all rulings before any build artifacts are assembled.*
