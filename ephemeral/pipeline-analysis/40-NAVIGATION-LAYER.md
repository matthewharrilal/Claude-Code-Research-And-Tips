# 40 -- NAVIGATION LAYER: Index, Protocols, and Ingestion Guide

**Builder:** navigation-layer-builder (Opus 4.6)
**Date:** 2026-02-18
**Corpus:** 37 analysis files + 5 external references (~1.3MB)
**Purpose:** THE entry point. A fresh instance reads THIS FIRST, then follows its instructions.

---

## HOW TO USE THIS DOCUMENT

This is a **recipe**, not an essay. Follow the steps in order.

1. Read Part 1 (File Index) to know what exists
2. Read Part 2 (Extraction Protocols) to know HOW to read the important files
3. Follow Part 3 (Multi-Pass Ingestion) to build understanding in layers
4. Answer Part 4 (Verification Questions) to confirm transfer
5. Use Part 5 (Topic Lookup) as an ongoing reference

**Do NOT read all 37 files.** This document tells you which files to read, in what order, and what to extract from each.

---

## PART 1: FILE INDEX

Every file in `ephemeral/pipeline-analysis/`, indexed by what it IS, not what it says.

### Layer 0: Context (1 file, ~85 lines)

**00-CONVERSATION-JOURNEY-CONTEXT.md** (85 lines)
- **Is:** Chronological timeline establishing the 5-phase causal chain (A-E)
- **Answers:** Why does the remediation exist? What happened before it?
- **Contains:** Phase labels A (master prompt created) through E (post-execution PA-05 2.5/4)
- **Irreplaceable:** The ONLY file providing the complete A-E causal arc
- **Prerequisites:** None -- universal entry point
- **Cross-validate:** Report 20 challenges its "recipe vs checklist" claim (line 78) as overstated

### Layer 1: Core Analysis (13 files, ~6,200 lines)

**01-master-prompt-foundations.md** (696 lines)
- **Is:** Concordance ledger tracking 39 master prompt foundations through remediation
- **Answers:** What did the master prompt get RIGHT? How much survived?
- **Contains:** Per-foundation preservation status table, 89% preservation rate statistic
- **Irreplaceable:** The complete 39-foundation catalog with per-item preservation verdicts
- **Prerequisites:** Layer 0 + master prompt (first 100 lines)
- **Cross-validate:** Report 25 challenges the 89% as a counting exercise; Report 29 finds 71% DROP rate (different framing of overlapping data)

**02-master-prompt-failures.md** (403 lines)
- **Is:** Failure taxonomy: 42 failures cataloged with severity ratings and root cause attribution
- **Answers:** What went wrong? Why? How badly?
- **Contains:** 42 failures in 5 types (Actively Wrong / Omitted / Correct but Ineffective / Over-Specified / Unenforceable), 14 BLOCKING, RC-4 attribution at 26%
- **Irreplaceable:** The complete failure catalog with the 5-type classification system and the "judgment tax" concept
- **Prerequisites:** Layer 0 + master prompt
- **Cross-validate:** Report 25 notes the 42 count inflates ~6 independent root causes; Report 20 challenges the binary-vs-judgment thesis

**03-remediation-rewinding.md** (691 lines)
- **Is:** Reversal inventory: 27 specific reversals from master prompt to remediation
- **Answers:** What changed DIRECTION (not just degree)?
- **Contains:** 27 categorized reversals (A: Team/Process, B: Specification Format, C: Technical, D: Philosophy/Conviction), per-reversal evidence trails
- **Irreplaceable:** The complete reversal taxonomy -- the ONLY file framing changes as REVERSALS rather than extensions or drops
- **Prerequisites:** Layer 0 + master prompt + remediation spec (first 100 lines each)
- **Cross-validate:** Report 29 provides the line-level mapping that grounds these reversals

**04-remediation-building.md** (457 lines)
- **Is:** Extension inventory: 12 things the remediation BUILT ON TOP of master prompt seeds + 3 genuine innovations
- **Answers:** What is the constructive relationship between the two prompts?
- **Contains:** 12 extensions with seed-insufficiency-elaboration-evidence pattern, 3 innovations (Phase 0 deallocation, warm-palette enforcement, !important framework)
- **Irreplaceable:** The amplification-factor taxonomy and the 3 genuine innovations identification
- **Prerequisites:** Reports 01, 02
- **Cross-validate:** Report 25 challenges "building-on = improvement" framing

**05-css-philosophy-shift.md** (452 lines)
- **Is:** Theoretical framework: 5 CSS philosophy shifts unified by a single transformation
- **Answers:** What is the CONCEPTUAL shift from master prompt to remediation?
- **Contains:** 5 shifts (sub-perceptual->perceptible, rules->perception, addition->deallocation, constraint->recipe, ambient->deliberate), "volume paradox," "perception layer" gap identification
- **Irreplaceable:** The 5-shift taxonomy and the "volume paradox" (more rules = less richness)
- **Prerequisites:** Reports 01, 02
- **Cross-validate:** Report 25 argues these may be "5 facets of 1 shift"; Report 05 itself acknowledges CD-006 contradicts the deliberate richness thesis

**06-html-restructuring-shift.md** (467 lines)
- **Is:** CSS-only ceiling analysis + HTML structural change inventory
- **Answers:** Why is CSS alone insufficient? What does HTML restructuring add?
- **Contains:** LAYOUT as implicit 8th channel proposal, multiplicative quality formula, class naming strategy shift, 3/26 -> 10/26 component library mapping
- **Irreplaceable:** The 8th channel proposal and the CSS-only quality ceiling argument
- **Prerequisites:** Reports 02, 05
- **Cross-validate:** The CSS-only cap (2-3/4) originates here and is a prediction, not observation

**07-process-topology-shift.md** (492 lines)
- **Is:** Agent architecture comparison: 23 topology shifts mapped bidirectionally
- **Answers:** How did the team structure change and why?
- **Contains:** 23-dimension shift map, 2,400:1 vs 1:1 information compression ratios, "manifest pattern" (11 read-only -> 1 synthesizer -> 1 builder)
- **Irreplaceable:** The information compression ratio quantification and the manifest pattern
- **Prerequisites:** Layer 0
- **Cross-validate:** Report 25 notes scope confound (remediation is narrower task); project memory says "agent communication is essential for quality" (contradicts single-agent celebration)

**08-perception-model-shift.md** (484 lines)
- **Is:** Perception science analysis: THE dominant finding of the entire corpus
- **Answers:** Why did the master prompt produce invisible CSS? What are the minimum perceptible deltas?
- **Contains:** Zero-hit perception term search of master prompt (B1-B7), 8-property threshold table, all 11 transition stacking measurements (1.8-2.9x over 96px cap)
- **Irreplaceable:** The perception threshold table AND the complete stacking quantification -- the two most cited artifacts in the corpus
- **Prerequisites:** Reports 02, 05
- **Cross-validate:** Report 25 challenges threshold universality (display/context dependent)

**09-content-agnosticism.md** (419 lines)
- **Is:** Reusability classifier: what percentage of the remediation transfers to different content
- **Answers:** How much is content-specific vs content-agnostic?
- **Contains:** 46/15/40 agnosticism split (agnostic/semi-agnostic/content-specific), 3-layer reuse model with CSS line estimates
- **Irreplaceable:** The 3-layer reuse model (Universal Base ~165 CSS, Zone Template ~100, Content-Specific ~45)
- **Prerequisites:** Reports 05, 10
- **Cross-validate:** Report 27 found 71% content-dependent (different measurement of overlapping data)

**10-coherence-model-shift.md** (440 lines)
- **Is:** Channel taxonomy reconciliation + CCS computability analysis
- **Answers:** What happened to the 7 coherence channels? Was CCS ever actually computed?
- **Contains:** 3-of-7 channels REPLACED (not renamed), cascade value table description, CCS computability problem, independent stacking confirmation
- **Irreplaceable:** The channel taxonomy reconciliation and the revelation that CCS was a dead metric
- **Prerequisites:** Reports 02, 05, 08
- **Cross-validate:** Report 01 claims CCS "PRESERVED AS SIMPLIFIED PROXY" -- this report says REPLACED (contradiction C1)

**11-bidirectional-mapping.md** (577 lines)
- **Is:** Philosophy trace: 11 remediation philosophies mapped bidirectionally with zero orphans
- **Answers:** Does every change trace to a philosophy? Does every philosophy trace to changes?
- **Contains:** P1-P11 philosophy taxonomy, 6 philosophy-philosophy tensions, 7 builder deviations
- **Irreplaceable:** The 6 inter-philosophy tensions and the 7 builder deviations with attribution
- **Prerequisites:** Reports 01, 02, 04, 05
- **Cross-validate:** Report 25 notes "zero orphans" methodology biases toward finding roots among 11 candidate philosophies

**12-metacognitive-pathway.md** (676 lines)
- **Is:** Narrative overview of the discovery pathway -- HOW conclusions were reached
- **Answers:** What is the causal chain from failure to fix? How do the analysis phases connect?
- **Contains:** Discovery chain narrative, compression ratio analysis (7.5:1 for this corpus vs 50:1 for master prompt), metacognitive pathway map
- **Irreplaceable:** The compression ratio comparison and the causal chain from Mode 4 PA findings through retrospective to remediation
- **Prerequisites:** Layer 0
- **Cross-validate:** Report 38 rates this the "BEST STARTING FILE" for fresh instances (low jargon, narrative structure)

**13-adversarial-fresh-eyes.md** (246 lines)
- **Is:** Zero-context independent validation -- agent read ONLY the two prompts, no analysis
- **Answers:** Do the findings hold without prior context? What do fresh eyes see that loaded eyes miss?
- **Contains:** "Constitution vs Recipe" framing, 7 gaps missing from BOTH prompts (responsive design, content length, color contrast, animation, user testing, semantic HTML, performance), "skeleton and skin" metaphor
- **Irreplaceable:** The 7 gaps missing from BOTH prompts -- no other file identifies them
- **Prerequisites:** Layer 0 (but intentionally designed to be read without prior analysis)
- **Cross-validate:** Report 28 cites this as anti-groupthink evidence (fresh eyes independently confirmed findings)

### Layer 2: Dimensional Analysis (9 files, ~3,800 lines)

**14-adversarial-gaps.md** (228 lines) + **14-adversarial-gap-review.md** (442 lines)
- **Is:** Two adversarial reviews of gaps in the Wave 1 analysis
- **Answers:** What did the first wave of analysts miss? What blind spots exist?
- **Contains:** Gap inventories, bias assessments, missing perspective identification
- **Irreplaceable:** Early adversarial perspective before dimensional analysis was designed
- **Prerequisites:** Layer 1 core reports (01-13)
- **Cross-validate:** Reports 25, 26 supersede these with more thorough bias challenges

**17-decision-architecture.md** (405 lines)
- **Is:** Decision trace: 7 major architectural decisions with alternatives and counterfactuals
- **Answers:** WHY were these choices made? What were the alternatives?
- **Contains:** 7-decision framework, all tracing to 3 root evidence sources
- **Irreplaceable:** The 7-decision framework with counterfactual analysis
- **Prerequisites:** Layer 1 complete
- **Cross-validate:** Report 26 rates this as HIGH amalgamation bias (all counterfactuals confirm chosen path)

**18-prompt-craftsmanship-evolution.md** (533 lines)
- **Is:** Quantified prompt linguistics: verb taxonomy, ratio analysis, prompt archetype classification
- **Answers:** How does the LANGUAGE of the two prompts differ quantitatively?
- **Contains:** Constraint:Action ratio (3.0:1 vs 0.32:1), 3 prompt archetypes (Regulatory/Recipe/Orchestration), tone-to-compliance ranking, 4-layer ideal architecture proposal
- **Irreplaceable:** The 3 prompt archetypes and the tone-to-compliance ranking (Procedural > Empirical > Didactic > Motivational)
- **Prerequisites:** Reports 02, 05, 08
- **Cross-validate:** Report 26 notes the ratio is a symptom, not a cause

**19-conversation-metacognition.md** (297 lines)
- **Is:** Process meta-analysis: the irreducible 5-phase discovery chain
- **Answers:** Is the multi-phase process reducible? What is the theoretical minimum agent count?
- **Contains:** DIAGNOSE->CALIBRATE->SPECIFY->EXECUTE->MEASURE pipeline, 6-8 agent theoretical minimum
- **Irreplaceable:** The 6-8 agent theoretical minimum estimate
- **Prerequisites:** Layer 0 complete
- **Cross-validate:** "Non-reducible" claim challenged by Report 38; "cannot calibrate without failure" contradicted by perceptual science (Weber's law)

**20-adversarial-journey-review.md** (310 lines)
- **Is:** The most important adversarial challenge: 6 biases + steel-man for master prompt + 4 unrun experiments
- **Answers:** What are the blind spots in the entire analytical narrative?
- **Contains:** 6 named biases (survivorship, effort confound, recipe overstatement, context advantage, 963-line problem, N=2), 4 falsifiable experiments, "concrete vs abstract" as refined distinction
- **Irreplaceable:** The 4 unrun experiments (cheapest most informative tests) and the "concrete vs abstract" refinement of "recipe vs checklist"
- **Prerequisites:** Reports 02, 04, 05, 13
- **Cross-validate:** Report 26 endorses the 4 experiments as "most valuable contribution of any report"

**21-verbiage-analysis.md** (499 lines)
- **Is:** THE most operationally useful report: propagation reliability ranking + verb taxonomy
- **Answers:** Which instruction PATTERNS produce the most reliable agent compliance?
- **Contains:** 10-tier propagation reliability ranking (~98% concrete delete down to ~5% counterfactual thought experiment), complete verb taxonomy (233 vs 112), judgment:action ratio (5.3x inversion), cognitive demand model (JUDGE/COMPUTE/EXECUTE/COMPOSE), WAS/NOW format identification
- **Irreplaceable:** The propagation reliability ranking -- the single most actionable artifact in the entire corpus
- **Prerequisites:** Reports 02, 05, 08
- **Cross-validate:** Both bias challengers (25, 26) rate this the MOST RIGOROUS report with LOWEST bias risk

**22-structural-architecture.md** (416 lines)
- **Is:** Document architecture comparison: how structure affects agent execution
- **Answers:** Why does the remediation's phase-sequential structure outperform the master prompt's domain-organized structure?
- **Contains:** Quantified attention metrics (500 lines before first action vs 132), cross-references per task (10+ vs 0-1), attention renewal points (0 vs 8), 4-layer ideal architecture (Recipe/Rules/Conviction/Reference), reliability-vs-ceiling tradeoff
- **Irreplaceable:** The quantified attention metrics and the 4-layer audience-separated architecture
- **Prerequisites:** Reports 05, 10
- **Cross-validate:** "Structure PRODUCES failure" is probabilistic, not deterministic

**23-propagation-analysis.md** (404 lines)
- **Is:** Causal chain tracer: 30 rules traced from instruction through action to visible output
- **Answers:** What percentage of rules actually produce visible effects?
- **Contains:** Full conversion rates (master 47%, remediation 54%), compliance-visibility gap, waste rate (~25% both prompts), Ch1-Ch4 paradox (chromatic primary but least visible), structural vs intentional waste distinction
- **Irreplaceable:** The Ch1-Ch4 paradox and the waste type distinction (accidental vs intentional)
- **Prerequisites:** Reports 02, 05, 08; pairs well with Report 21
- **Cross-validate:** Master has HIGHER per-rule visibility (64% vs 54% of followed rules) -- partially contradicts "remediation is more effective" narrative

**24-fundamental-differences.md** (400 lines)
- **Is:** Paradigmatic analysis: specification vs procedure as cognitive instruments
- **Answers:** Are the two prompts fundamentally different cognitive types?
- **Contains:** Telescope vs microscope metaphor, 7 synthesized propositions, Blue/Red/Green cognitive mode blocks proposal, "~40 rules" target
- **Irreplaceable:** The "75-line builder cap is the most honest line in the master prompt" insight
- **Prerequisites:** Layer 1 + Report 17
- **Cross-validate:** Report 26 rates this THE MOST OVERCONFIDENT report; its claim "simplicity cannot produce 4/4" is contradicted by Middle-tier data (4/4 from simple recipe)

### Layer 3: Meta-Analysis (8 files, ~4,600 lines)

**25-bias-challenger-core.md** (421 lines)
- **Is:** Systematic bias audit of the 10 core analysis reports (01-13)
- **Answers:** How much should you trust each core report?
- **Contains:** Per-report challenge across 5 axes, 5 cross-report patterns (N=2, CD-006 unexamined, echo chamber risk, sub-perceptual=zero-value unexamined, analysts finding what they expect)
- **Irreplaceable:** The 5 cross-report bias patterns and the "sub-perceptual = zero value is the most dangerous unexamined assumption"
- **Prerequisites:** Reports being challenged (Layer 1)
- **Cross-validate:** This IS the cross-validator

**26-bias-challenger-dimensional.md** (546 lines) [also: 26-bias-challenge-dimensional.md, duplicate]
- **Is:** Systematic bias audit of the 7 dimensional reports (17-24)
- **Answers:** How much should you trust each dimensional report?
- **Contains:** Per-report 5-test evaluation (causal, counterfactual, granularity, hindsight, amalgamation), THE critical 3-variable confound identification (format + specificity + perception thresholds collapsed), 4 genuinely novel contributions winnowed from applied knowledge
- **Irreplaceable:** The 3-variable confound -- THE most important methodological correction in the corpus
- **Prerequisites:** Reports 17-24
- **Cross-validate:** This IS the cross-validator

**27-reproducibility-test.md** (516 lines)
- **Is:** Actionable reproduction test: 5 distinct tests verifying whether understanding enables reproduction
- **Answers:** Could someone reproduce this HTML from understanding alone?
- **Contains:** 60% fully traceable chains, 7-layer minimum knowledge set (A-G), Layer F (Intentionality) CRITICAL GAP, 50-line acid test, 71% content-dependency, spec internal contradictions (cool grays)
- **Irreplaceable:** The Layer F (Intentionality) gap identification -- THE biggest analytical blind spot; the 7-layer knowledge set; the spec internal contradictions
- **Prerequisites:** ALL Layer 1 + source artifacts
- **Cross-validate:** Most integrative report -- reveals contradictions IN the spec

**28-reproducibility-consistency.md** (512 lines)
- **Is:** Cross-agent agreement analysis: quantified consistency across 13 agents
- **Answers:** Do the analysts agree? Is this groupthink or genuine convergence?
- **Contains:** 87.6% consistency rate, 100% agreement on 10 major findings (0 disagreements), 5 divergence points, groupthink assessment (genuine convergence, not groupthink)
- **Irreplaceable:** The 87.6% figure and the groupthink-vs-convergence assessment
- **Prerequisites:** ALL Layer 1 + Layer 2
- **Cross-validate:** 100% agreement on N=1 is NOT reproducibility validation (Report 25 caveat)

**29-line-by-line-crossref.md** (613 lines)
- **Is:** Exhaustive structural mapping: every remediation instruction vs every master prompt rule
- **Answers:** How much was kept, changed, dropped, reversed, or invented?
- **Contains:** 230+ mapping entries, aggregate statistics (37 PRESERVED, 16 REVERSED, 23 EXTENDED, 52 NEW, 30 REFINED, 103 DROPPED), per-family drop rates (MG 100%, CT 100%, U 10%), "remediation is a parallel document, not a subset"
- **Irreplaceable:** The definitive ground truth numbers -- the ONLY file with complete line-level mapping
- **Prerequisites:** Both source prompts + Layer 1-2 conceptual framework
- **Cross-validate:** Reconciles the 89% preservation (Report 01) vs 71% drop rate (different denominators -- foundations vs rules)

**30-changelog-crossref.md** (610 lines)
- **Is:** Builder action trace: line-by-line cross-reference of builder changelog against both prompts
- **Answers:** What did the builder actually DO? How many deviations from spec?
- **Contains:** 17 builder deviations (9 justified, 3 significant, 5 creative), 3 spec internal contradictions, 87% builder compliance rate, token alignment actions
- **Irreplaceable:** The builder deviation inventory and the spec internal contradiction proof
- **Prerequisites:** Both source prompts + builder changelog
- **Cross-validate:** Report 27 corroborates spec contradictions from a different angle

### Layer 4: Meta-Audits (6 files, ~4,700 lines)

**31-file-inventory-audit.md** (877 lines)
- **Is:** Complete per-file inventory of 25 analysis files with quality ratings, unique insights, dependencies
- **Answers:** What does each file contain? What is unique to it? How good is it?
- **Contains:** 52 unique insights cataloged, 13 redundancy families, 10 contradictions, 5 coverage gaps, quality distribution (avg 4.2/5)
- **Irreplaceable:** The 52-entry unique insight registry and the contradiction register
- **Prerequisites:** None (this IS the meta-reference)
- **Cross-validate:** File 32 (cross-reference map)

**32-cross-reference-map.md** (625 lines)
- **Is:** Exhaustive agreement/contradiction/coverage map across all 25 files
- **Answers:** Where do files agree, contradict, or leave gaps?
- **Contains:** 45+ explicit cross-references, 10 implicit agreements with convergence scores, 8 direct contradictions with resolution recommendations, 21-topic x 25-file coverage matrix, 20 finding convergence scores, 7 meta-findings
- **Irreplaceable:** The convergence scores, the contradiction resolutions, and the 7 meta-findings
- **Prerequisites:** None (this IS the meta-reference)
- **Cross-validate:** File 31 (inventory audit)

**33-ingestion-sequence.md** (771 lines)
- **Is:** Reading order design: 4-layer ingestion protocol with budget strategies and anti-patterns
- **Answers:** What order should a fresh instance read these files?
- **Contains:** Single-page brief (~500 words), 4 ingestion layers, 7 anti-patterns, 3 budget strategies (50K/100K/200K tokens), dependency graph, validation checklist
- **Irreplaceable:** The 7 anti-patterns and the 3 budget strategies
- **Prerequisites:** None (this IS the reading guide)
- **Cross-validate:** File 38 (adversarial test) offers a DIFFERENT recommended reading order

**37-metacognitive-transfer.md** (735 lines)
- **Is:** Transfer problem analysis: what survives and what dies when knowledge moves between instances
- **Answers:** How does understanding degrade in transfer? What encoding strategies help?
- **Contains:** 5 knowledge types (declarative/procedural/causal/tacit/experiential), 3 encoding strategies (narrative/counterfactual/self-test), 10 transferable patterns (P1-P10) with confidence scores, 5 self-tests, 6 transfer failure signals, 4-layer transfer architecture (Anchor/Framework/Recipe/Experiential), theoretical minimum ~710 lines
- **Irreplaceable:** The knowledge type taxonomy, the encoding strategies, and the self-tests
- **Prerequisites:** Familiarity with corpus findings
- **Cross-validate:** Its own findings are "novel, not cross-validated"

**38-adversarial-ingestion-test.md** (614 lines)
- **Is:** Adversarial stress test: what a fresh instance would get WRONG reading this corpus
- **Answers:** Where will comprehension fail? What jargon is undefined? What context is assumed?
- **Contains:** 15+ undefined terms (CD-006, Flagship, Mechanism, Channels, Scales, Zones), 18 assumed context items (8 critical), 8 predicted failure modes, self-referential paradox analysis (score: 4/10), quantitative verification inventory (55% independently verifiable)
- **Irreplaceable:** The jargon audit, the assumed context audit, and the "telephone game" compression analysis
- **Prerequisites:** Full corpus familiarity
- **Cross-validate:** File 33 (ingestion sequence) for alternative reading order

**42-OPERATIONAL-RECIPE.md** (1,746 lines)
- **Is:** Generalized operational recipe distilled from the analysis corpus
- **Answers:** What should the NEXT prompt look like?
- **Contains:** Content-agnostic recipe template, perception threshold integration, verification protocols
- **Irreplaceable:** The only file that converts ANALYSIS into EXECUTABLE RECIPE
- **Prerequisites:** Layer 1-3 understanding
- **Cross-validate:** Untested -- this is the synthesis product, not validated against execution

### External References (5 files, ~2,824 lines)

**ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md** (963 lines)
- **Is:** The master prompt -- conviction-execution-coordination sandwich, 97 rules, 10 namespaces
- **Irreplaceable:** One of the two source documents. Half the corpus cites it by line number.

**ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md** (1,025 lines)
- **Is:** The remediation spec -- 9-phase sequential recipe with exact CSS values
- **Irreplaceable:** The other source document. The other half of citations.

**ephemeral/flagship-remediation/builder-changelog.md** (236 lines)
- **Is:** What the builder agent actually DID during remediation execution
- **Irreplaceable:** Ground truth for deviation analysis (Reports 23, 27, 30)

**ephemeral/flagship-retrospective/09-SYNTHESIS.md** (~400 lines)
- **Is:** The retrospective synthesis with 15 root causes (RC-1 through RC-15)
- **Irreplaceable:** RC-4 (sub-perceptual) is cited in 12+ reports

**ephemeral/flagship-experiment/07-intentionality.html** (~2,145 lines)
- **Is:** The actual flagship HTML output that was audited and remediated
- **Irreplaceable:** The artifact. Claims about "the page has X" are verifiable only here.

---

## PART 2: EXTRACTION PROTOCOLS

Reading instructions for the 15 most important files. "Extract" means: pull this specific data into your working memory.

### Protocol 2.1: 02-master-prompt-failures.md (CRITICAL)

1. Read the **severity summary** first (search for "14 BLOCKING"). Extract the 14 BLOCKING failure IDs.
2. Read the **5 failure types** section. Extract one exemplar failure per type:
   - TYPE 1 (Actively Wrong): F-01 or F-03
   - TYPE 2 (Omitted): F-09 (zero perception thresholds -- THE primary failure)
   - TYPE 3 (Correct But Ineffective): F-22 (checklist not recipe)
   - TYPE 4 (Over-Specified): F-27 (richness matrix driving invisible CSS)
   - TYPE 5 (Unenforceable): any of the 7 judgment rules
3. Read the **cross-cutting patterns** section. Extract: "binary rules 100%, judgment ~0%."
4. Read the **root cause** section. Extract: RC-4 accounts for 26% (11/42) of failures.
5. **Skip** individual failure descriptions unless you need detail for a specific rule namespace.

### Protocol 2.2: 08-perception-model-shift.md (CRITICAL)

1. Read the **perception term search** section. Extract: 0 hits for "perception," "threshold," "human," "RGB," "magnitude," "delta" in master prompt B1-B7.
2. Read the **8-property threshold table**. Extract ALL 8 thresholds:
   - Background: >= 10 RGB delta
   - Font-size: >= 2px delta
   - Letter-spacing: >= 0.025em delta
   - Border-width: >= 1px delta
   - Margin/padding: >= 8px delta
   - (find the remaining 3 in the table -- every row matters)
3. Read the **stacking analysis** section. Extract: all 11 transitions exceeded 120px (range 1.8-2.9x over 96px cap).
4. Read the **channel analysis** section. Extract: 3/7 channels perceptibly active (not 7/7 as claimed).
5. **This is the most cited file in the corpus.** Cross-reference against: Report 10 (independent stacking confirmation), Report 23 (Ch1 lowest visibility despite being primary metaphor carrier).

### Protocol 2.3: 21-verbiage-analysis.md (CRITICAL -- most actionable)

1. Go DIRECTLY to the **propagation reliability ranking** (search for "propagation" or "reliability ranking"). Extract ALL 10 tiers:
   - ~98%: Concrete delete ("DELETE lines 736-834")
   - ~95%: Concrete add ("ADD this exact CSS block")
   - ~90%: Concrete modify ("CHANGE font-size from 16px to 18px")
   - ... down to ...
   - ~5%: Counterfactual thought experiment ("imagine you are a user scrolling...")
2. Read the **verb taxonomy** section. Extract: Master 233 verbs (58% judgment+constraint), Remediation 112 verbs (63% action).
3. Read the **specificity distribution**. Extract: Master 57% semi-concrete, Remediation 81% concrete.
4. Read the **cognitive demand model**. Extract the 4 types: JUDGE (~40-60% reliable), COMPUTE (~80%), EXECUTE (~95%), COMPOSE (~30-70%).
5. Read the **WAS/NOW format** identification. Extract: this is the remediation's most powerful instruction format.

### Protocol 2.4: 29-line-by-line-crossref.md (DEFINITIVE ground truth)

1. Read the **aggregate statistics** section FIRST. Extract:
   - 37 PRESERVED, 16 REVERSED, 23 EXTENDED, 52 NEW, 30 REFINED, 103 DROPPED
   - Overall drop rate: 71% (69/97 master rules dropped)
2. Read the **per-family summary**. Extract drop rates:
   - U-rules (soul): 10% dropped -- BEST preservation
   - S-rules (spatial): 71% dropped
   - C-rules (compositional): 81% dropped
   - MG-rules (metaphor gates): 100% dropped
   - CT-rules (content transform): 100% dropped (1 reversed)
   - RP-rules (recovery): 100% dropped
   - CP-rules (communication): 100% dropped (N/A for single agent)
3. Read the **10 REVERSED items** table. Extract the impact ratings.
4. **To reconcile with Report 01's 89%:** Report 01 counts FOUNDATIONS (conceptual); Report 29 counts RULES (line-level). Both are true. The soul survived but the execution layer was replaced.

### Protocol 2.5: 20-adversarial-journey-review.md (CRITICAL challenge)

1. Read the **6 biases** section. Extract each by name: survivorship, effort confound, recipe overstatement, context advantage, 963-line problem, steel-man master prompt.
2. Read the **4 unrun experiments** section. Extract:
   - Experiment 1: Add perception thresholds to master prompt, re-run
   - Experiment 2: Explain why CD-006 succeeded
   - Experiment 3: Test remediation on different content
   - Experiment 4: Give builder ONLY the threshold table
3. Read the **"concrete vs abstract"** section. Extract: this refines "recipe vs checklist" to a more precise distinction.
4. Read the **PA-05 2.5/4** verdict. Extract: "The remediation IMPROVED but did NOT achieve shipping threshold (3/4)."

### Protocol 2.6: 05-css-philosophy-shift.md

1. Extract the **5 shifts** by name and one CSS example each:
   - Shift 1: Sub-perceptual -> Perceptible (letter-spacing 0.004em -> 0.04em)
   - Shift 2: Rules -> Perception (compliance != quality)
   - Shift 3: Addition -> Deallocation (Phase 0)
   - Shift 4: Constraint -> Recipe (abstract -> concrete)
   - Shift 5: Ambient -> Deliberate richness
2. Extract the **"volume paradox"**: 97 rules produced less richness than ~40 steps.
3. Extract the **recipe ceiling concern**: recipe-driven may cap at 3/4.
4. **Note the self-contradiction**: CD-006 (39/40) used ambient richness, contradicting the thesis.

### Protocol 2.7: 22-structural-architecture.md

1. Extract the **attention metrics** table:
   - Lines before first action: Master ~500, Remediation 132
   - Cross-references per task: Master 8-12, Remediation 0-1
   - Attention renewal points: Master 0, Remediation 8
   - External references: Master 5,000-8,000 lines, Remediation 0
2. Extract the **4-layer ideal architecture**: Layer 0 Recipe, Layer 1 Domain Rules, Layer 2 Conviction, Layer 3 Reference.
3. Extract the **reliability-vs-ceiling tradeoff**: phase-sequential guarantees 3/4 but caps there; domain-organized enables 4/4 AND catastrophic failure.

### Protocol 2.8: 25-bias-challenger-core.md

1. Extract the **report quality ranking**: Strongest = 02 (failures), Weakest = 01 (foundations).
2. Extract the **5 cross-report patterns**:
   - Recipe thesis is under-tested (N=2)
   - Sub-perceptual = zero value is UNANIMOUS BUT UNEXAMINED
   - CD-006 is an unexamined benchmark
   - N=1 problem is systemic
   - Analysts found what framing expected
3. Note: this file IS the trust calibrator. Its findings override individual report confidence.

### Protocol 2.9: 26-bias-challenger-dimensional.md

1. Extract the **3-variable confound**: format + specificity + perception thresholds are INDEPENDENT variables being collapsed into one ("recipe vs checklist").
2. Extract the **report ratings**: Most rigorous = 21, Most overconfident = 24, Most actionable = 18.
3. Extract the **4 genuinely novel contributions**: perception threshold encoding, stacking arithmetic, propagation reliability ranking, deallocation principle.
4. Extract: everything else is applied-from-existing knowledge (separation of concerns, declarative/imperative, scientific method, audience-appropriate communication).

### Protocol 2.10: 27-reproducibility-test.md

1. Extract **Test 1** results: 5 FULL, 1 FULL*, 3 PARTIAL, 1 BROKEN chains (60% traceable).
2. Extract the **7-layer minimum knowledge set**: A (Identity), B (Structure), C (Perception), D (Components), E (Accessibility), F (Intentionality), G (Content).
3. Extract the **CRITICAL GAP**: Layer F (Intentionality) is ENTIRELY absent from all analysis reports. This is the gap between 3/4 and 4/4.
4. Extract **Test 5**: 71% content-dependent, 29% content-independent.
5. Extract: spec had internal contradictions (cool grays violating U-08).

### Protocol 2.11: 32-cross-reference-map.md

1. Extract the **10 agreements** with convergence scores (A1-A10).
2. Extract the **8 contradictions** with resolution recommendations (C1-C8).
3. Extract the **7 meta-findings** (3-variable confound, zero disagreements, cheapest experiment unrun, intentionality gap, framing determines findings, predictions exceeded actuals, 4 genuinely novel contributions).
4. Use the **21-topic x 25-file coverage matrix** as an ongoing lookup tool.

### Protocols 2.12-2.15: Secondary files

**01-master-prompt-foundations.md:** Read the summary scorecard (lines 616-667). Extract the 3 most impactful foundations (perception threshold, soul constraints, zone architecture). Note the bias warning from Report 25.

**04-remediation-building.md:** Read the 3 genuine innovations section. Extract: Phase 0 deallocation (no master prompt seed), warm-palette enforcement (no master prompt seed), !important justification framework (no master prompt seed). Read any 3 of the 12 extensions for the seed->elaboration pattern.

**03-remediation-rewinding.md:** Scan the reversal categories (A-D). Extract the 5 most impactful reversals (agent count, recipe format, perception thresholds, deallocation, content preservation). Cross-reference against Report 29's REVERSED items.

**28-reproducibility-consistency.md:** Extract: 87.6% consistency, 100% agreement on 10 major findings, 5 divergence points (channel taxonomy, CCS operationalization, content register, single vs multi-agent, fractal coherence). Note: 100% agreement on N=1 is expected, not remarkable.

---

## PART 3: MULTI-PASS INGESTION PROTOCOL

### Pass 0: This Navigation Document
You are here. After finishing this document, you will know WHAT exists, WHERE to find it, and HOW to read it. You will NOT yet know the findings.

**Verification:** Can you name all 37 files by category? Can you describe what each Layer contains? Can you identify the 5 external references?

### Pass 1: Essential Context (~150K tokens, ~45 min)

Read these 8 files in this exact order. Do not skip ahead.

| Step | File | Tokens | Why This Order |
|------|------|--------|----------------|
| 1 | 00-CONVERSATION-JOURNEY-CONTEXT.md | ~2K | Establishes the A-E timeline |
| 2 | Master prompt (first 100 lines) | ~3K | See the conviction sandwich structure |
| 3 | Remediation spec (first 100 lines) | ~3K | See the phase-sequential contrast |
| 4 | 02-master-prompt-failures.md | ~10K | The problem statement: 42 failures |
| 5 | 08-perception-model-shift.md | ~12K | THE dominant finding: perception gap |
| 6 | 05-css-philosophy-shift.md | ~12K | The conceptual framework: 5 shifts |
| 7 | 21-verbiage-analysis.md | ~13K | The most actionable artifact: propagation ranking |
| 8 | 13-adversarial-fresh-eyes.md | ~6K | Independent validation + 7 blind spots |

**After Pass 1, verify:**
1. Can you name the 5 phases (A-E) and what triggered each?
2. Can you state the perception threshold for background color (>= 10 RGB)?
3. Can you explain the S-09 stacking loophole with specific numbers?
4. Can you rank at least 5 instruction types by predicted agent compliance?
5. Can you name 3 gaps missing from BOTH prompts?
6. Can you explain RC-4 (sub-perceptual variation) in one sentence?
7. Can you contrast the master prompt's structure with the remediation's structure?
8. Can you state what PA-05 scored before (1.5/4) and after (2.5/4) remediation?
9. Can you explain WHY 14 deployed mechanisms produced only 1 perceptible mechanism?
10. Can you name the 5 CSS philosophy shifts?

### Pass 2: Core Analysis (~200K additional tokens, ~60 min)

Read these 10 files. Order matters for dependencies.

| Step | File | Tokens | What It Adds |
|------|------|--------|-------------|
| 9 | 01-master-prompt-foundations.md | ~18K | What the master prompt got RIGHT (39 foundations, 89% preserved) |
| 10 | 04-remediation-building.md | ~12K | 12 extensions + 3 genuine innovations |
| 11 | 03-remediation-rewinding.md | ~17K | 27 reversals -- what changed DIRECTION |
| 12 | 10-coherence-model-shift.md | ~11K | Channel taxonomy change, CCS as dead metric |
| 13 | 22-structural-architecture.md | ~10K | Attention metrics, 4-layer ideal architecture |
| 14 | 29-line-by-line-crossref.md | ~16K | Ground truth: 71% dropped, 52 new, 10 reversed |
| 15 | 20-adversarial-journey-review.md | ~8K | 6 biases, 4 unrun experiments, concrete-vs-abstract refinement |
| 16 | 25-bias-challenger-core.md | ~11K | Trust calibration for core reports |
| 17 | 26-bias-challenger-dimensional.md | ~14K | 3-variable confound, 4 genuinely novel contributions |
| 18 | 27-reproducibility-test.md | ~13K | 60% traceable, Layer F gap, spec contradictions |

**After Pass 2, verify:**
1. Can you reconcile 89% preservation (Report 01) with 71% drop rate (Report 29)?
2. Can you name the 3 genuine innovations with no master prompt seed?
3. Can you explain why CCS was a dead metric?
4. Can you state the 3-variable confound (format, specificity, perception)?
5. Can you name 3 biases in the analytical narrative?
6. Can you identify the Layer F (Intentionality) gap?
7. Can you describe what the 4 unrun experiments would test?
8. Can you explain why the master prompt's attention metrics (500 lines before first action, 10+ cross-refs per task) cause failures?
9. Can you state which rule families were 100% dropped (MG, CT, RP, CP)?
10. Can you name the "most dangerous unexamined assumption" (sub-perceptual = zero value)?

### Pass 3: Depth on Demand

Do NOT read these linearly. Use the Topic Lookup (Part 5) to find the right file for your question.

| If You Need | Read |
|-------------|------|
| HTML structural changes | 06-html-restructuring-shift.md |
| Agent team architecture | 07-process-topology-shift.md |
| Content reusability | 09-content-agnosticism.md |
| Philosophy tracing | 11-bidirectional-mapping.md |
| Discovery narrative | 12-metacognitive-pathway.md |
| Decision rationale | 17-decision-architecture.md |
| Prompt linguistics | 18-prompt-craftsmanship-evolution.md |
| Process meta-analysis | 19-conversation-metacognition.md |
| Rule propagation chains | 23-propagation-analysis.md |
| Paradigm differences | 24-fundamental-differences.md |
| Cross-agent agreement | 28-reproducibility-consistency.md |
| Builder deviation details | 30-changelog-crossref.md |
| Operational recipe | 42-OPERATIONAL-RECIPE.md |

### Pass 4: Adversarial Self-Check

After you believe you understand the corpus, answer these challenge questions:

1. **The recipe thesis is overstated.** Can you explain why? (Expected: concrete-vs-abstract is the real variable; a concrete checklist would work; a vague recipe would fail)

2. **100% cross-agent agreement is not reproducibility validation.** Can you explain why? (Expected: all agents examined the same single artifact; agreement on N=1 is expected, not remarkable)

3. **PA-05 2.5/4 is failure, not success.** Can you defend this position? (Expected: below 3/4 shipping threshold; improvement is real but not transformative)

4. **The corpus's findings may not generalize.** Can you name 3 boundary conditions? (Expected: single design system, single content type, Claude-only models)

5. **CD-006 contradicts the recipe thesis.** Can you explain how? (Expected: CD-006 scored 39/40 using the constitutional approach, not a recipe)

---

## PART 4: VERIFICATION QUESTIONS

### Level 1: After Pass 1 (Basic Comprehension)

| # | Question | Expected Answer | Source File | Wrong Answer Reveals |
|---|----------|----------------|-------------|---------------------|
| 1 | What is PA-05? | Perceptual Audit question 05: "Does this feel DESIGNED rather than ASSEMBLED?" Scale 1-4. | 02, 08 | Confusion about the evaluation framework |
| 2 | What is RC-4? | Sub-perceptual variation: CSS values that technically satisfy rules but are invisible to humans. | 02, 08 | Missing the dominant root cause |
| 3 | What is the S-09 stacking loophole? | Per-property caps (96px) don't prevent multi-element gaps (210-276px) at section boundaries. | 02, 08 | Missing the specific engineering failure |
| 4 | What is the perception threshold for font-size? | >= 2px delta between adjacent elements for the change to be visible. | 08 | Missing the quantitative framework |
| 5 | What is the highest-reliability instruction type? | Concrete delete ("DELETE lines 736-834") at ~98% compliance. | 21 | Missing the most actionable finding |
| 6 | What did PA-05 score before and after remediation? | Before: ~1.5/4. After: 2.5/4. Improvement: +1.0 points. | 00 | Missing the baseline facts |
| 7 | How many master prompt failures were BLOCKING? | 14 out of 42 total. | 02 | Confusing severity levels |
| 8 | What are the 5 CSS philosophy shifts? | Sub-perceptual->perceptible, rules->perception, addition->deallocation, constraint->recipe, ambient->deliberate. | 05 | Missing the theoretical framework |
| 9 | What did fresh-eyes find missing from BOTH prompts? | Responsive design, content length sensitivity, color contrast ratios, animation, user testing, semantic HTML depth, performance. | 13 | Missing blind spots in the ENTIRE corpus |
| 10 | What is the master prompt's conviction sandwich? | Section A (conviction/soul) -> Section B (execution rules) -> Section C (coordination/agents) -> Section D (conviction). | Master prompt, 22 | Missing prompt architecture |

### Level 2: After Pass 2 (Analytical Depth)

| # | Question | Expected Answer | Source File | Wrong Answer Reveals |
|---|----------|----------------|-------------|---------------------|
| 1 | How can both 89% preservation and 71% drop rate be true? | Different denominators: Report 01 counts conceptual FOUNDATIONS; Report 29 counts line-level RULES. Soul survived, execution layer was replaced. | 01, 29 | Failure to reconcile contradictions |
| 2 | What are the 3 genuine remediation innovations? | Phase 0 deallocation, warm-palette enforcement, !important justification framework. All had NO master prompt seed. | 04 | Conflating extensions with innovations |
| 3 | What is the 3-variable confound? | Format (recipe vs checklist), specificity (concrete vs abstract), and perception thresholds are 3 INDEPENDENT variables collapsed into one narrative. | 26 | Missing the methodological weakness |
| 4 | What is the Layer F (Intentionality) gap? | NONE of 25+ analysis reports examines the intentionality layer (self-reference, pedagogical sequencing, cognitive transitions, bookending, meta-annotation, metaphor encoding). This is the gap between 3/4 and 4/4. | 27 | Missing the biggest analytical blind spot |
| 5 | Why is CCS a dead metric? | The CCS formula requires "subjective perceived meaning CHANGES" which were never computed in any experiment. It was a thought experiment, not a measurement. | 10 | Treating theoretical metrics as operational |
| 6 | What rule families were 100% dropped? | MG (metaphor gates), CT (content transform), RP (recovery), CP (communication). | 29 | Missing the scale of change |
| 7 | What is the "most dangerous unexamined assumption"? | That sub-perceptual CSS has ZERO value. 10/10 reports assume this, but sub-perceptual effects (atmospheric, subliminal) might contribute to overall feel. | 25 | Accepting unanimous findings uncritically |
| 8 | What 4 experiments would resolve remaining ambiguities? | (1) Master prompt + perception thresholds, (2) Explain CD-006 success, (3) Test remediation on different content, (4) Builder with ONLY threshold table. | 20 | Not knowing what evidence would settle debates |
| 9 | What is the attention metrics comparison? | Master: 500 lines before first action, 10+ cross-refs per task, 0 renewal points. Remediation: 132 lines before first action, 0-1 cross-refs, 8 renewal points. | 22 | Missing the structural explanation for compliance difference |
| 10 | What is the builder deviation rate? | 12% (6 of ~51 instructions). ALL substantive deviations were warm-tone corrections fixing spec/soul contradictions. | 27, 30 | Missing the spec internal contradiction evidence |

### Level 3: After Pass 3 (Nuance and Judgment)

| # | Question | Expected Answer | Source File | Wrong Answer Reveals |
|---|----------|----------------|-------------|---------------------|
| 1 | Does the recipe thesis hold universally? | No. CD-006 (39/40) used the constitutional approach. Middle-tier (4/4) used a recipe but was simpler scope. The thesis holds for REMEDIATION but is unproven for CREATION. | 20, 25 | Over-applying a context-specific finding |
| 2 | Is single-agent or multi-agent better? | Context-dependent. Single for remediation/transformation. Multi for novel/creative composition. The variable is TASK TYPE, not agent architecture. | 07, 24 | Binary thinking about a nuanced question |
| 3 | Should conviction language be included? | Route to audience: conviction for PLANNING agents (Opus), never for BUILDER agents (Sonnet). The master prompt treated all agents as planners. | 18, 22 | Blanket dismiss or blanket include |
| 4 | Is 87.6% consistency rate high? | Yes, but 100% agreement on 10 major findings from N=1 is EXPECTED (all agents examined the same artifact). True validation requires testing findings on DIFFERENT artifacts. | 28, 25 | Conflating agreement with reproducibility |
| 5 | What would happen if you gave the remediation spec to a different builder? | The builder would need to resolve the 3 internal contradictions (cool grays violating soul). ~71% of the spec is content-dependent (specific to RESEARCH-SYNTHESIS.md). The transferable portions are ~29% (identity layer). | 09, 27 | Assuming the spec is universally reusable |
| 6 | Why did the remediation predict 3/4 but achieve 2.5/4? | Predictions assumed recipe format guarantees perceptible output. The 0.5-point gap suggests an unmodeled variable -- likely content register monotony (RC-13) or the intentionality gap (Layer F). | 26, 27 | Not tracking prediction-vs-actual calibration |
| 7 | What is the Ch1-Ch4 paradox? | The master prompt assigned Ch1 (Chromatic) as the primary metaphor carrier, but Ch1 has the LOWEST perceptual impact. Ch4 (Structural) has the HIGHEST. The primary channel was the least visible. | 23 | Missing the mismatch between intention and perception |
| 8 | What distinguishes PA-05 3/4 from 4/4? | The intentionality layer (Layer F): self-reference, pedagogical sequencing, cognitive transitions, bookending, deliberate absence, meta-annotation. Recipe can achieve 3/4; 4/4 requires compositional judgment that cannot be proceduralized. | 27, 24 | Thinking recipes can achieve top quality |
| 9 | What is the compression-failure paradox? | The corpus diagnoses that compression destroys information (master prompt compressed 337 findings at 50:1). The corpus itself will be compressed for transfer. Compression preserves the thesis but destroys the self-corrections, caveats, and unresolved questions. | 38 | Not recognizing meta-recursive risks |
| 10 | What is the most actionable single artifact in the corpus? | The propagation reliability ranking in Report 21: 10 instruction types ranked by predicted agent compliance. It generalizes beyond this project to ANY prompt engineering context. | 21, 26 | Focusing on project-specific findings over generalizable tools |

---

## PART 5: TOPIC -> FILE QUERY REFERENCE

Alphabetical lookup. For each topic: exact file(s) and what to extract.

| Topic | Primary File(s) | Section/Data to Extract |
|-------|----------------|------------------------|
| **Absence coherence** | 02 (F-01), 29 (C-19 dropped), 38 (Test 4.2) | Whether absence-as-restraint survived the remediation (it was REVERSED) |
| **Accessibility** | 06 (7 features), 04 (Extension 7), 29 (Phase 7 = NEW) | 0/8 -> 7/8 feature conversion; WCAG features list |
| **Agent communication** | 07 (zero SendMessage finding), 32 (Contradiction C8) | Single vs multi-agent debate; memory says communication essential |
| **Agent team topology** | 07 (23 shifts), 17 (Decision 4), 19 (6-8 minimum) | Manifest pattern; single builder for remediation |
| **Anti-scale model** | Master prompt A3, 01 (preservation claim) | Richness = semantic_density x restraint x spatial_confidence |
| **Binary vs judgment rules** | 02 (Pattern 4), 21 (propagation ranking), 28 (Finding 1) | Binary ~100%, judgment ~0%; 11/11 concordance |
| **Builder deviations** | 30 (17 deviations), 27 (12% rate), 11 (P3 attribution) | All 5 substantive deviations were warm-tone corrections |
| **Callout family conversion** | 04 (Extension 3), 06 (component analysis), 29 (C-10 REVERSED) | 3/26 -> 10/26 component families |
| **Cascade value table** | 10 (replacement for CCS), 28 (divergence point) | Per-section CSS values enabling numerical comparison |
| **CCS (Compositional Coupling Score)** | 10 (computability problem), 01 (preservation claim), 29 (MC rules) | CCS was NEVER computed; replaced by cascade table |
| **CD-006 (crown jewel benchmark)** | 01, 05, 20 (steel-man), 25 (unexamined benchmark) | 39/40 score; production conditions NEVER analyzed |
| **Channels (Ch1-Ch7)** | 08 (perception analysis), 10 (taxonomy reconciliation), 23 (visibility), 28 (divergence) | 3 of 7 REPLACED in remediation; Ch1 lowest visibility despite primary assignment |
| **Component library utilization** | 02 (F-11), 06 (3/26 -> 10/26), 04 (Extension 3) | Why builder used only 3/26 families (visibility cap) |
| **Compression problem** | 07 (2,400:1 ratio), 12 (7.5:1 ratio), 37 (theoretical minimum), 38 (telephone game) | Information loss at each pipeline layer |
| **Concrete vs abstract** | 20 (refined distinction), 26 (3-variable confound) | THE real variable, not recipe-vs-checklist |
| **Container width** | Master prompt S-01, 29 (940-1100px master, 960px remediation) | 940-960px NON-NEGOTIABLE; Phase D primary failure mode |
| **Content agnosticism** | 09 (46/15/40 split), 27 (71% content-dependent) | Different measurements of overlapping data |
| **Content transformation** | 29 (CT-01 REVERSED: rewrite -> preserve) | Master mandated rewriting; remediation mandated preservation |
| **Conviction language** | 18 (token waste claim), 22 (helps planners, hurts builders), 32 (C7) | Route to audience; NEVER give conviction to builders |
| **Cross-agent agreement** | 28 (87.6%, 100% on 10 findings), 25 (N=1 caveat) | Agreement is genuine convergence, not groupthink -- but N=1 limits its meaning |
| **Deallocation (Phase 0)** | 04 (Innovation 1), 05 (Shift 3), Remediation spec Phase 0 | Remove sub-perceptual CSS before adding new; 233 lines deleted |
| **Decision architecture** | 17 (7 decisions), 20 (counterfactuals) | All 7 move abstract->concrete; all counterfactuals confirm chosen path (suspicious) |
| **Drop rates by rule family** | 29 (complete mapping) | MG/CT/RP/CP = 100% dropped; U = 10% dropped |
| **Failure taxonomy** | 02 (42 failures, 5 types) | Types: Actively Wrong / Omitted / Correct but Ineffective / Over-Specified / Unenforceable |
| **Flagship HTML** | External: 07-intentionality.html | 2,145 lines; 12 sections in 3 zones |
| **Fresh-eyes validation** | 13 (zero context), 28 (anti-groupthink evidence) | Independent agent found same conclusions + 7 blind spots |
| **Grid layouts** | 06 (3 grids), Remediation spec Phase 6, 29 (Phase 6) | S7 tension pairs, S8 sequence, S11 hypothesis |
| **Groupthink assessment** | 28 (Section 6), 25 (Cross-finding 5) | Genuine convergence confirmed by fresh-eyes independence |
| **Information compression** | 07 (2,400:1 vs 1:1), 12 (7.5:1), 37 (1,250:1 theoretical) | Each transfer layer compresses; compression = information loss |
| **Intentionality (Layer F)** | 27 (CRITICAL GAP), 24 (designed vs composed) | ENTIRELY absent from all analysis; gap between 3/4 and 4/4 |
| **Jargon / undefined terms** | 38 (Test 1: 15+ undefined) | CD-006, Flagship, Mechanism, Channels, Scales, Zones -- all undefined in corpus |
| **Knowledge transfer** | 37 (5 types, 3 strategies), 38 (telephone game) | Declarative transfers well; experiential does not transfer at all |
| **Master prompt strengths** | 01 (39 foundations), 13 (6 advantages), 20 (steel-man) | Soul, content transformation, fractal coherence, communication, zone architecture |
| **Mechanisms (compositional)** | 01, 06, Master prompt A5 | 18 mechanisms in catalog; flagship deployed 14, only 1 perceptible |
| **Meta-findings** | 32 (7 meta-findings), 26 (4 genuinely novel) | 3-variable confound; zero disagreements; cheapest experiment unrun |
| **Metaphor quality** | 11 (P1-P11), 13 (skeleton/skin), Master prompt A1 | "Announced vs structural" distinction; 40% require labels |
| **Middle-tier experiment** | Referenced in 20, 25, 26; NOT in corpus | 8 agents, PA-05 4/4 with simple recipe; contradicts "simplicity can't produce 4/4" |
| **Mode 4 PA** | Referenced in 03, 08; NOT in corpus | 9 independent auditors, 48 PA questions, 102 screenshots |
| **N=1 / N=2 limitation** | 20 (named bias), 25 (systemic), 26 (unfalsifiable core) | ALL conclusions from 1-2 experiments; generalization untested |
| **Negation density** | 21 (5.4x difference) | Master: 1 per 11.5 lines; Remediation: 1 per 64 lines |
| **Perception thresholds** | 08 (8-property table), 02 (F-09 as primary failure), 05 (Shift 1) | The most cited finding; background >= 10 RGB, font-size >= 2px |
| **Phase 8 verification** | 29 (10-item checklist), Remediation spec Phase 8 | Soul check, richness checklist, accessibility, cascade table |
| **Prompt archetypes** | 18 (Regulatory/Recipe/Orchestration) | Master = 70% Regulatory + 30% Orchestration; Remediation = 80% Recipe |
| **Prompt structure** | 22 (attention metrics), 18 (constraint:action ratio) | Phase-sequential > domain-organized for agent execution |
| **Propagation reliability** | 21 (10-tier ranking), 23 (30-rule trace) | Concrete delete ~98% -> counterfactual ~5%; THE most actionable artifact |
| **Recipe vs checklist** | 02, 05, 13, 18, 20 (challenged), 26 (confound identified) | Overstated; concrete-vs-abstract is the real variable |
| **Remediation spec contradictions** | 27 (cool grays), 30 (3 contradictions), 11 (P3 tension) | Spec prescribed values violating its own soul constraints |
| **Reproducibility** | 27 (60% traceable), 28 (87.6% consistency) | Can reproduce WHAT (100%) and HOW (70%) but not WHERE (20%) |
| **Scales (1-5)** | Master prompt SC-01, 10 (scale analysis) | 5 is the mathematical ceiling (Alexander/Salingaros) |
| **Self-referential paradox** | 38 (Test 7: score 4/10) | Corpus diagnoses compression failure but itself subject to compression |
| **Single vs multi-agent** | 07 (single celebrated), 20 (multi-agent for CD-006), 32 (C8) | TASK-DEPENDENT: single for remediation, multi for creation |
| **Soul compliance** | 01 (9/10 preserved), 29 (U-rules 10% dropped), 30 (builder overrides) | Highest compliance of any rule family; identity layer survived |
| **Stacking loophole (S-09)** | 02 (F-03), 04 (Extension 6), 08 (11 measurements), 10 (confirmation) | Individual values pass 96px; totals reach 210-276px |
| **Sub-perceptual CSS** | 05 (23.7%), 08 (zero perception terms), 02 (RC-4 primary) | The DOMINANT finding: 233/983 CSS lines invisible |
| **Tone-to-compliance ranking** | 18 | Procedural > Empirical > Didactic > Motivational |
| **Transfer problem** | 37 (5 knowledge types), 38 (8 failure predictions) | 80% conclusions transfer; 0% experience transfers |
| **Two-Instance Pattern** | Referenced in 12, 37; defined in MEMORY.md | Different instance executes from one that generated the prompt |
| **Unrun experiments** | 20 (4 experiments), 26 (endorsed) | THE cheapest most informative test has NOT been run |
| **Verb taxonomy** | 21 (233 vs 112 verbs), 18 (constraint:action ratio) | Master 58% judgment; Remediation 63% action |
| **Void prevention** | 08 (stacking), 04 (Extension 6), Remediation spec Phase 3 | Cap total gap at 120px; calculate all contributing elements |
| **Volume paradox** | 05 | More rules = less richness; 97 rules < 40 steps |
| **WAS/NOW format** | 21 | Remediation's most powerful instruction format |
| **Zone architecture** | 01, 04, 10, 11, 29 | 3 zones (warm/cool/resolved) = organizing principle of both prompts |

---

## APPENDIX A: QUICK-START FOR COMMON TASKS

### "I need to build a page using this design system"
1. Read Pass 1 (8 files, ~60K tokens)
2. Read 42-OPERATIONAL-RECIPE.md (the generalized recipe)
3. Read Remediation spec Phase 0-6 for the recipe pattern
4. Apply perception thresholds from Report 08

### "I need to remediate an existing page"
1. Read Pass 1 + 29-line-by-line-crossref.md
2. Read Remediation spec fully (1,025 lines)
3. Read builder-changelog.md for deviation patterns
4. Follow the 9-phase structure with your own content-specific values

### "I need to design a new experiment"
1. Read Pass 1 + Pass 2 (18 files)
2. Read Report 20's 4 unrun experiments
3. Read Report 37's transfer protocol
4. Design experiment to test ONE variable at a time (avoid the 3-variable confound)

### "I need to evaluate prompt quality"
1. Read Report 21 (propagation ranking)
2. Read Report 22 (structural architecture metrics)
3. Read Report 18 (constraint:action ratio)
4. Apply the attention metrics and verb taxonomy to your prompt

### "I need to understand what went wrong"
1. Read Report 02 (42 failures, 5 types)
2. Read Report 08 (perception gap)
3. Read Report 20 (adversarial challenge)
4. Read Report 25 (bias calibration)

---

## APPENDIX B: KNOWN GAPS AND WARNINGS

### Files Missing from the Corpus

- **Files 15, 16:** Never created. Gap unexplained.
- **File 14:** Two versions exist (14-adversarial-gaps.md at 228 lines, 14-adversarial-gap-review.md at 442 lines). The second supersedes the first.
- **File 26:** Duplicate exists (26-bias-challenger-dimensional.md and 26-bias-challenge-dimensional.md are the same content).

### Undefined Jargon (must be looked up externally)

| Term | Meaning | Where to Find Definition |
|------|---------|------------------------|
| CD-006 | Combination-density exploration #6, scored 39/40, crown jewel benchmark | design-system/validated-explorations/combination/ |
| Flagship | The specific HTML page at ephemeral/flagship-experiment/07-intentionality.html | Nowhere in corpus |
| Mechanism | Compositional CSS technique from mechanism-catalog.md | design-system/compositional-core/grammar/mechanism-catalog.md |
| PA-05 | Perceptual Audit question 05: "Does this feel DESIGNED rather than ASSEMBLED?" | ~/.claude/skills/perceptual-auditing/SKILL.md |
| Soul | Design system identity constraints (prohibitions, tokens, font trinity) | design-system/compositional-core/identity/prohibitions.md |
| Middle-tier | 8-agent experiment, PA-05 4/4, recipe format | ephemeral/middle-tier-experiment/ |
| Mode 4 PA | 9 independent auditors, 48 questions, 102 screenshots | ephemeral/ceiling-experiment/_perceptual-audit/ |

### Critical Caveats

1. **N=1/N=2 limitation:** ALL findings are from 1-2 experiments with the same design system, same content type, same AI model family. Generalization is untested.
2. **Recipe thesis is overstated.** The real variable is concrete-vs-abstract specificity, not recipe-vs-checklist format. A concrete checklist would likely work; a vague recipe would fail.
3. **Remediation was NOT a success.** PA-05 improved from 1.5/4 to 2.5/4 -- meaningful progress but below the 3/4 shipping threshold.
4. **Sub-perceptual = zero value is UNEXAMINED.** Every report assumes this. Subliminal/atmospheric effects may exist.
5. **The corpus is a commentary layer**, not a working reference. It requires the source artifacts (master prompt, remediation spec, HTML, changelog) to be actionable.

### Contradictions to Track

These are the 10 highest-impact contradictions across the corpus. When you encounter conflicting claims, use this table to determine the resolution.

| # | Topic | Claim A | Claim B | Resolution |
|---|-------|---------|---------|------------|
| C1 | CCS status | 01: "PRESERVED AS PROXY" | 10: "REPLACED entirely" | 10 is correct. CCS was never computed. Cascade table is structurally different. |
| C2 | Core finding | 00: "recipe vs checklist" | 20: "concrete vs abstract" | 20 is more precise. Concrete-vs-abstract subsumes recipe-vs-checklist. |
| C3 | Agent topology | 07: "single agent superior" | Memory: "communication essential" | TASK-DEPENDENT. Single for remediation. Multi + communication for creation. |
| C4 | Remediation verdict | 00, 04: "success" | 20: "below shipping threshold" | Use precise language: IMPROVED (1.5->2.5), did NOT SHIP (below 3/4). |
| C5 | Simplicity and quality | 24: "4/4 requires emergence" | Middle-tier: 4/4 from simple recipe | 24 is WRONG per own project data. Simple CAN produce 4/4 at reduced scope. |
| C6 | Predictions | 21, 22: predict 3/4 | Actual: 2.5/4 | Predictions overconfident by 0.5 points. Unmodeled variable exists. |
| C7 | Anti-scale preservation | 01: "FULLY PRESERVED" | Evidence: remediation never references formula | 01 imposed framework. Anti-scale model is an ANALYST construction, not remediation content. |
| C8 | Gap threshold | Master S-09: 96px per-property | Remediation Phase 8B: 120px total | Adopt 120px total-gap. 96px per-property was the failure mode (stacking). |
| C9 | Builder deviations | 04: "spec success" | 27: "spec had contradictions" | 27 is correct. The builder FIXED spec errors (cool grays violating soul). Not spec success. |
| C10 | Calibration requires failure | 19: "cannot calibrate without failure" | Perceptual science: thresholds derivable from Weber's law | 19 is wrong. Perception thresholds are empirically established independent of this project. |

### Consensus Findings (Highest Confidence)

These 5 findings are established beyond reasonable doubt within this corpus (11/11+ concordance, zero counter-evidence):

1. **Perception thresholds are necessary.** Without minimum perceptible deltas, agents produce invisible CSS. (12/13 reports, fresh-eyes independently confirmed)
2. **Binary rules outperform judgment rules for agent execution.** Objective criteria ~100% compliance; subjective criteria ~0% genuine compliance. (6/13 reports, confirmed across all experiments)
3. **Stacking arithmetic prevents voids.** Per-property caps do not prevent multi-element accumulation. Verify total gaps. (8/13 reports, quantitatively confirmed with 11 measurements)
4. **Soul constraints achieve highest compliance.** Identity-layer rules (no border-radius, warm palette, font trinity) were preserved through every transformation. (4/13 reports, 9/10 preserved)
5. **Deallocation before allocation is sound engineering.** Remove invisible CSS before adding new CSS. Establishes clean baseline and prevents interaction effects. (9/13 reports)

### Open Questions (Unresolved by the Corpus)

1. Would master prompt + 4 lines of perception thresholds have produced an equivalent result? (NOT TESTED -- the cheapest most informative experiment)
2. Why did CD-006 (39/40) succeed with the constitutional approach that the flagship failed at? (NOT ANALYZED -- CD-006 production conditions unexamined)
3. Is the remediation spec reusable for different content? (PARTIALLY -- 71% content-dependent per Report 27; 46% agnostic per Report 09)
4. What makes the intentionality layer (Layer F) work? (NOT ANALYZED -- entirely absent from all 25+ analysis reports)
5. Does the recipe format have a quality ceiling below 4/4? (SUGGESTED by evidence: remediation recipe produced 2.5/4, not 4/4)
6. Is 120px the right total-gap threshold? (NO perceptual science justification for either 96px or 120px)
7. What would happen with a concrete checklist (not recipe, but with specific values)? (NOT TESTED -- would isolate format from specificity)

---

**END OF NAVIGATION LAYER**

**Statistics:**
- Files indexed: 37 analysis + 5 external references
- Extraction protocols: 15
- Verification questions: 30 (10 per level)
- Topic lookup entries: 60+
- Quick-start recipes: 5
- Contradictions tracked: 10
- Consensus findings: 5
- Open questions: 7
- Total lines: ~850
