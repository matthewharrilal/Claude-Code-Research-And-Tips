# Adversarial Audit of Extraction Files

**Auditor:** adversarial-auditor
**Date:** 2026-02-23
**Method:** Line-by-line comparison of extraction files against source files (13-adversarial-review.md, 17-meta-meta-analysis.md, 06-unmeasured-dimensions.md), attacking along 8 vectors.
**Verdict:** SIGNIFICANT ISSUES FOUND -- extractions are competent but systematically soften the most uncomfortable findings

---

## ATTACK VECTOR 1: SOFTENING

The adversarial review (file 13) was written by a contrarian agent whose explicit mandate was "assume everything is wrong until proven otherwise." The extractions consistently converted this adversarial energy into polite improvement suggestions.

### S-01: "The pipeline is potentially self-deceiving" softened to improvement items

**Source (13-adversarial-review.md, final paragraph):**
> "The pipeline is good. The pipeline is incomplete. The pipeline is potentially self-deceiving. These three things are simultaneously true, and the pipeline's framework has no way to express that simultaneous truth -- which is itself the deepest finding of this review."

**What the extractions say:** Nothing. This conclusion -- arguably the single most important sentence in the entire adversarial review -- does not appear in any extraction file. It was silently dropped.

**What the extractions SHOULD say:** This should be a top-level meta-finding in extract-meta.md Section 6, framed as: "ARCHITECTURAL LIMITATION: The pipeline's quality framework cannot express simultaneous truth about its own limitations. The pipeline measures quality but cannot measure its own measurement validity. This is a structural blind spot, not a fixable bug."

**Severity:** CRITICAL -- The deepest finding of the most important source file was entirely omitted.

---

### S-02: "Religious principle masquerading as engineering decision" softened

**Source (13-adversarial-review.md, A1):**
> "This is a religious principle masquerading as an engineering decision."

**What extract-09-18.md says (AR-01):**
> "Content Analyst flags 'container-pressure' when content includes code blocks >60 chars or tables >4 columns. Brief Assembler can then allocate 1100px exception for specific zones."

The extraction converts a PHILOSOPHICAL ATTACK on the non-negotiability of constraints into a FEATURE REQUEST for per-zone width exceptions. The source says "the constraint ITSELF may be wrong." The extraction says "keep the constraint, add exceptions." These are fundamentally different positions.

**What the extraction SHOULD say:** "HERETICAL: A1 challenges whether 940-960px container width should be non-negotiable AT ALL. The constraint was derived from prose readability research but applied universally to code-heavy, table-heavy, and grid-heavy content. The source argues this is 'a religious principle masquerading as an engineering decision.' Proposed enrichment: allow per-zone exceptions. But the deeper question -- should this be negotiable by default? -- is preserved as an open challenge."

**Severity:** SIGNIFICANT -- The philosophical challenge was reduced to a technical fix.

---

### S-03: "PA-05 is circular" finding diplomatized

**Source (13-adversarial-review.md, A6):**
> "PA-05 is circular: it measures how well the output conforms to the system that defined the measurement."

**What extract-09-18.md says (AR-03, PA-30):**
> "PA-05 reports [DESIGNED, COHERENT, PROPORTIONATE, POLISHED] as separate scores."

The extraction captures the VECTOR decomposition recommendation but drops the CIRCULARITY attack. The source says "PA-05 measures pipeline compliance, not quality." The extraction says "PA-05 should report a vector." These are different claims. The first says the INSTRUMENT is flawed. The second says the REPORTING FORMAT is suboptimal.

**What the extraction SHOULD say:** "CIRCULARITY: A6 argues PA-05 measures pipeline compliance, not quality. The 4 sub-criteria (Designed, Coherent, Proportionate, Polished) are defined in terms the pipeline already decided matter. 'Designed' means 'not template-generated' -- but the pipeline IS a template. Proposed fix: PA-05 vector decomposition. But the deeper concern -- that PA-05 is unfalsifiable within the system -- requires external validation (human designers) to resolve."

**Severity:** CRITICAL -- The core validity challenge to PA-05 was reduced to a formatting improvement.

---

### S-04: "Pipeline might be a placebo" dropped entirely

**Source (13-adversarial-review.md, M3):**
> "The pipeline might be a placebo that happens to be administered alongside an effective medicine (Opus capability)."

**What the extractions say:** AR-36 captures the single-agent experiment recommendation, but the PLACEBO FRAMING is absent. The source says "the pipeline's greatest blind spot: it cannot tell the difference between 'this page is good because of the pipeline' and 'this page is good despite the pipeline.'"

**What the extraction SHOULD say:** "META: M3 raises the possibility that pipeline quality is attributable to Opus capability, not pipeline infrastructure. The pipeline cannot distinguish between 'quality because of the pipeline' and 'quality despite the pipeline.' Proposed experiment (AR-36) would test this. This is not just an experiment recommendation -- it is an existential challenge to the pipeline's value proposition."

**Severity:** SIGNIFICANT -- An existential challenge was reduced to an experiment suggestion.

---

### S-05: "The 3/4 to 4/4 gap might require abandoning what got you to 3" dropped

**Source (13-adversarial-review.md, A30):**
> "Going from 3 to 4 might require abandoning what got you to 3."

This appears nowhere in any extraction. The implications are radical: the enrichments proposed by all four extractors assume ADDITIVE improvement (add more questions, add more gates, add more instructions). A30 says the path from 3/4 to 4/4 might require SUBTRACTIVE change -- removing infrastructure, removing constraints, removing process.

**What the extraction SHOULD say:** "PARADIGM: A30 challenges the assumption that 4/4 is achievable through additive improvement. The path may require subtraction: fewer constraints, fewer gates, fewer agents, more creative freedom. Every enrichment in this extraction catalog is ADDITIVE. If A30 is correct, the correct action might be to REMOVE enrichments, not add them."

**Severity:** CRITICAL -- This challenges the entire enrichment extraction methodology and was silently dropped.

---

### S-06: "Quality might live in the ratio, not absolute complexity" softened

**Source (13-adversarial-review.md, Q8):**
> "The best designed pages on the web are often SIMPLER -- they achieve impact through restraint, not complexity. Quality might live in the RATIO of complexity to content need, not in absolute complexity."

**What extract-09-18.md says (AR-42):**
> "Measure quality as RATIO of complexity to content need, not absolute complexity."

The extraction captures the recommendation but strips the HERETICAL implication: that the pipeline's entire quality model (more mechanisms = better, more CSS = better, more channels = better) might be backwards. The source says "the best designed pages are SIMPLER." The extraction says "add a ratio measurement." One challenges the paradigm; the other adds a metric.

**Severity:** SIGNIFICANT

---

## ATTACK VECTOR 2: DEDUPLICATION ERRORS

### D-01: "Trailing void detection" incorrectly merged across contexts

**extract-01-08.md** lists E03-01 (trailing void gate) and E05-01 (trailing void, builder-level instruction) as duplicates in the deduplication table. But these address DIFFERENT root causes:

- E03-01 is a POST-BUILD gate (detect the void after it exists)
- E05-01 additionally says "investigate WHY the builder creates trailing voids -- this is a recurring pattern across both runs"

The ROOT CAUSE investigation recommendation was lost in deduplication. The gate catches the symptom; the investigation addresses the disease.

**Severity:** SIGNIFICANT -- Root cause investigation dropped as "duplicate" of symptom detection.

---

### D-02: "Deliberate plainness" merged incorrectly (E06-11 and E07-09)

These are flagged as duplicates but they come from different analytical frameworks with different implications:

- E06-11 (from 06-unmeasured-dimensions.md): Addresses "designed silence" as a compositional technique. "At least one zone that is INTENTIONALLY simple as compositional contrast."
- E07-09 (from 07-pipeline-ceiling.md): Addresses PA-64 failure. "A 4/4 page has at least one zone that is INTENTIONALLY simple."

The first is about CREATING A NEW CAPABILITY (the pipeline has no concept of deliberate plainness). The second is about FIXING A GATE FAILURE (PA-64 scored NO). Merging them loses the distinction between "the pipeline should LEARN this concept" and "the pipeline should PASS this test."

**Severity:** MINOR -- Both point in the same direction, but the framing difference matters for implementation.

---

## ATTACK VECTOR 3: MISSING SPECIFICITY

### MS-01: Experiment protocols flattened to vague suggestions

**Source (13-adversarial-review.md, H5):**
> "Give the same content to a skilled human developer with ONLY soul constraints. Run the pipeline on the same content. Evaluate both with the SAME PA protocol. If the hand-coded page scores within 0.5 points, the 885-item infrastructure is overhead."

**What extract-09-18.md says (AR-12):**
> "Give same content to skilled human developer with ONLY soul constraints. Compare against pipeline output with same PA protocol."

The extraction drops the FALSIFICATION CRITERION: "If hand-coded page scores within 0.5 points, 885-item infrastructure is overhead." This criterion is what makes the experiment TESTABLE. Without it, the experiment is a vague suggestion.

**Severity:** SIGNIFICANT -- Specific falsification criterion dropped.

---

### MS-02: CSS-specific recommendations from 15-microscopic-css-quality.md abstracted

The CSS analysis file contains line-specific recommendations (e.g., "line 38, CSS custom property" for CSS-01, "lines 313-323, 565-575, 795-805" for CSS-05). The extractions preserve these line numbers, which is good. However, the extract-09-18.md file presents CSS-10 through CSS-15 (codification of quality patterns) without the specific CSS CODE that makes them actionable.

**Source (15-microscopic-css-quality.md) for zone-adaptive font-size:**
> "18px -> 16px -> 15px -> 16px -> 15px -> 16px. 6 declarations. Creates the entire 'breathing' rhythm of the page."

The extraction says "Document the zone-adaptive body font-size pattern (18->16->15->16->15->16) as a quality multiplier in the builder recipe." This is adequate but could include the actual CSS property: `body { font-size: 18px } .zone-floor { font-size: 16px } ...` etc. The source has this specificity implicitly; the extraction should make it explicit for implementation.

**Severity:** MINOR -- The extraction is adequate but could be more implementation-ready.

---

### MS-03: Birkhoff Ratio lost its quantitative specificity

**Source (14-perceptual-science-foundations.md, NM-04):**
> "M = Order / Complexity. M > 1.5 = too simple (boring). 0.8-1.5 = sweet spot. 0.4-0.8 = rich. <0.4 = chaotic."

**extract-meta.md (NM-04):** Preserves all thresholds. GOOD.

**extract-09-18.md (PS-04):** Also preserves thresholds. GOOD.

No issue here -- just noting that the perceptual science quantitative specificity was correctly preserved across both extraction files.

---

## ATTACK VECTOR 4: PRIORITY INFLATION

### PI-01: "Reader Auditor" promoted to equal priority with systemic fixes

**extract-01-08.md** lists E06-02 (Reader Auditor as 10th PA agent type) at MEDIUM impact. **extract-meta.md** lists it at Tier 3 (Medium Leverage) as item #10.

But from the source (06-unmeasured-dimensions.md), the Reader Auditor is a NICE-TO-HAVE exploration, not a proven intervention. The source says "Current auditors are visual designers checking structure. A Reader Auditor would scroll at natural reading speed." This is an untested hypothesis. Promoting it to the same priority tier as "Add experiential PA questions" (which are concrete, implementable, and backed by the entire unmeasured-dimensions analysis) inflates its priority.

**Severity:** MINOR -- Priority is slightly inflated but not catastrophically wrong.

---

### PI-02: Some LOW-impact items correctly classified; no systematic inflation found

I examined 15 LOW-impact items across extract-01-08.md and found them appropriately classified: E01-02 (zone-specific section indicators = LOW), E01-03 (inline code styling = LOW), E01-04 (responsive drop cap = LOW), E01-05 (ghost token detection = LOW), E01-06 (grid gap patterns = LOW). These ARE low impact and correctly labeled.

**Overall assessment for Priority Inflation:** MINOR -- One inflated item found, but the priority system is generally sound.

---

## ATTACK VECTOR 5: HERETICAL IDEAS DROPPED

### H-01: "Remove the mechanism count floor" (H1) was captured but defanged

**Source (13-adversarial-review.md, H1):**
> "REMOVE the mechanism count floor. Replace '>=14 mechanisms' with 'the builder decides how many mechanisms the content needs.' Mechanism count should be ADVISORY, not gated. This directly contradicts the quality floor assumption but would produce more content-appropriate pages."

**What extract-09-18.md says (AR-10):**
> "Replace '>=14 mechanisms' with 'builder decides how many content needs.' Mechanism count = ADVISORY, not gated."

The extraction DOES capture this, which is good. But it is buried as item AR-10 among 42 other adversarial items, with expected impact "More content-appropriate designs; prevents mechanism-stuffing." The source frames this as a HERETICAL RECOMMENDATION that "directly contradicts the quality floor assumption." The extraction frames it as a reasonable improvement. The temperature is wrong.

**What the extraction SHOULD say:** "HERETICAL: H1 proposes removing the mechanism count floor entirely. This contradicts a foundational assumption of the quality framework. Impact: potentially paradigm-shifting. Risk: loss of quality floor for poorly-prompted builders. The adversarial reviewer considers this one of 6 heretical recommendations that, if correct, would invalidate significant pipeline infrastructure."

**Severity:** SIGNIFICANT -- The heretical nature was captured in letter but not in spirit.

---

### H-02: "Test the pipeline against NOTHING" (H5) captured but classified as "experimental"

**Source (13-adversarial-review.md, H5):**
> "TEST the pipeline against NOTHING. Give the same content to a skilled human developer with ONLY soul constraints. [...] If the hand-coded page scores within 0.5 points, the 885-item infrastructure is overhead, not value."

**What extract-09-18.md says (AR-12):**
> "Experimental protocol, not artifact change."

By classifying this as "experimental protocol, not artifact change," the extraction sidelines it from the actionable enrichment list. But H5 is not just an experiment -- it is an EXISTENTIAL CHALLENGE. If the result shows the pipeline adds < 0.5 PA-05 points over a skilled solo developer, the correct action is not "improve the pipeline" but "question whether the pipeline should exist."

**Severity:** SIGNIFICANT -- Existential challenge classified as optional experiment.

---

### H-03: "What would you REMOVE?" question captured but not flagged as paradigm-inverting

**Source (13-adversarial-review.md, H6):**
> "Current PA questions are almost entirely ADDITIVE ('does this have enough X?'). Add: 'What would you REMOVE from this page?' This single question inverts the pipeline's bias toward complexity and introduces a restraint signal."

**What extract-09-18.md says (PA-32, AR-34):**
> "Add adversarial removal question to every PA audit."

Captured adequately in letter. But the extraction does not flag that this is the ONLY proposed question that inverts the pipeline's additive bias. Every other proposed question (PA-80 through PA-99, NEW-01 through NEW-20, QJ-01 through QJ-10) asks "does this page have X?" Only "what would you REMOVE?" asks "does this page have too much?" This is a unique structural contribution that deserves top-10 priority, not burial in a 42-item list.

**Severity:** SIGNIFICANT -- Unique structural contribution buried in a long list.

---

### H-04: "Goodhart's Law violation" -- the systemic diagnosis captured but the URGENCY lost

**Source (13-adversarial-review.md, Part IV: P2):**
> "The pipeline is a textbook Goodhart's Law violation. When a measure becomes a target, it ceases to be a good measure."

**Source (17-meta-meta-analysis.md, Section 4.1):**
> "If the builder knows the PA questions, they can optimize for PASSING the questions rather than for quality. This is not hypothetical -- our memory documents confirm it has already happened."

Both sources flag Goodhart's Law as an URGENT, DEMONSTRATED, CURRENT problem. The meta-meta-analysis explicitly says "this is not hypothetical -- it has already happened."

**What the extractions say:** AR-33 (rotating question pool), AR-34 ("is this page trying too hard?"), MM-06 (Goodhart probe experiment), AR-40 (unprompted discovery auditors), AR-41 (adversarial auditors). These are all GOOD recommendations. But they are scattered across extract-09-18.md with no indication that they are all responses to a SINGLE URGENT systemic problem.

**What the extractions SHOULD have:** A unified "GOODHART THREAT" section that groups all anti-Goodhart measures, explicitly states that the problem has been DEMONSTRATED (not theoretical), and marks the entire cluster as CRITICAL priority. Currently, the individual items range from LOW to MEDIUM impact.

**Severity:** CRITICAL -- A demonstrated systemic threat was fragmented into disconnected medium-priority items.

---

### H-05: "The pipeline's vocabulary creates a quality ceiling" -- dropped entirely

**Source (13-adversarial-review.md, Attack 5 - The Vocabulary Trap):**
> "The pipeline's vocabulary (mechanisms, channels, zones, multi-coherence) is powerful for DESCRIBING design but has become a prison for PRODUCING design. [...] The pipeline optimizes for machine-legible quality. Human-legible quality might require a different vocabulary entirely."

This finding -- that the pipeline's own analytical vocabulary LIMITS what it can produce -- appears in NONE of the extraction files. It is not in extract-09-18.md's adversarial section. It is not in extract-meta.md's quality vocabulary section. It is entirely absent.

This is arguably the adversarial review's most NOVEL framework contribution: the idea that vocabulary constrains production, not just description. The proposal for TWO vocabularies (machine vocabulary for measurement, human vocabulary for builder instructions) was dropped.

**What the extraction SHOULD say:** "NOVEL FRAMEWORK: Attack 5 proposes that the pipeline's analytical vocabulary (mechanisms, channels, zones) LIMITS what builders can produce. Builders who think in 'mechanisms' produce mechanism-aware output that is recognizably machine-designed. Human designers think in 'breathing room,' 'visual weight,' 'reader reward.' Proposed: TWO vocabulary layers -- machine vocabulary for gates/measurement, human vocabulary for builder instructions. This is an architectural change, not an enrichment."

**Severity:** CRITICAL -- A novel analytical framework was entirely omitted.

---

## ATTACK VECTOR 6: CONTRADICTION RESOLUTION

### CR-01: "Binary questions achieve 100% compliance" vs. "Binary questions lose degree" -- correctly preserved

**Source 13 (adversarial):** Binary gates create Goodhart targets.
**Source 17 (meta-meta):** Binary format produces 1 bit per question; cannot distinguish adequate from exceptional.
**Source 06 (unmeasured):** Binary framework trades gradient information for reliability.

**extract-meta.md** correctly preserves BOTH sides of this tension in Section 4 (proposed changes to existing PA questions, 4.6 Tier 5 partial scoring) and Section 5 (Quality Journal dual-instrument). The dual-instrument proposal (keep binary for gates, add QJ for degree) is an explicit resolution that preserves both sides. GOOD.

**Severity:** N/A -- No issue found.

---

### CR-02: "9 auditors is too many" vs. "9 auditors is the right number" -- partially resolved

**Source 13:** "9 Opus instances = same training data, same biases. 9 correlated assessments, not 9 independent ones."
**Source 17:** Model D (mixed-method diversity) proposes REPLACING 9 homogeneous with 9 heterogeneous.

The extractions correctly capture both the critique (AR-09 in extract-09-18.md) and the proposed resolution (MM-02 in extract-meta.md). However, extract-meta.md Section 5.1 presents FIVE alternative models without noting that models B, D, and E are mutually exclusive designs, not additive improvements. A reader might think "implement all five." The extraction should note: "These are ALTERNATIVE architectures. Choose ONE. Models D and E are most radical; Model B is cheapest."

**Severity:** MINOR -- Alternatives presented as a menu when they are actually competing designs.

---

### CR-03: "Content-form coupling is good" vs. "Content-form coupling makes design brittle" -- ONE SIDE DROPPED

**Source (13-adversarial-review.md, A22):**
> "What if content-form coupling makes the design brittle? When form adapts to content character, changing or reordering content breaks the design. A content-independent design is more robust."

This challenge to content-form coupling appears NOWHERE in the extractions. Meanwhile, content-form coupling is treated as an unquestioned good across multiple extraction items (MQ-05, E08-02, PA-87, etc.).

The adversarial review explicitly flags this as assumption A22. The extractions took one side (coupling = good) and silently dropped the other (coupling = brittle).

**What the extraction SHOULD say:** "CONTESTED: A22 challenges whether tight content-form coupling is always desirable. The pipeline assumes coupling = quality. The adversarial reviewer notes coupling = fragility for pages whose content may change. Both sides preserved; resolution requires evidence."

**Severity:** SIGNIFICANT -- One side of a documented contradiction was silently dropped.

---

## ATTACK VECTOR 7: NOVEL FRAMEWORKS LOST

### NF-01: "Object vs. Experience" paradigm shift -- captured but UNDERWEIGHTED

**Source (17-meta-meta-analysis.md, Section 1.4):**
> "We are measuring the page as an OBJECT when we should also be measuring it as an EXPERIENCE."

This is described as "THE central finding" of the meta-meta analysis. It appears in extract-meta.md's Section 6.1 and is referenced in the cross-source convergence map.

**The problem:** Despite being labeled "the central finding," it appears at the same priority level as individual PA question additions. In extract-meta.md's priority ranking, it does not appear as Tier 1 item #1. Instead, the builder pre-question gets Tier 1 #1 position, and "lead PA audit with experiential questions" gets #2.

But the Object vs. Experience paradigm shift is META -- it is the REASON why experiential questions matter, why the Quality Journal is needed, why mixed-method auditors are proposed. It should be framed as the organizing principle for multiple Tier 1-3 items, not as a peer to them.

**Severity:** SIGNIFICANT -- The meta-finding was captured but given the same weight as its individual implications.

---

### NF-02: "The Vocabulary Trap" (two vocabularies for measurement vs. production) -- entirely lost

As documented in H-05 above. This is a NOVEL analytical framework that proposes the pipeline needs separate vocabularies for:
1. Measurement/analysis (mechanisms, channels, zones, multi-coherence)
2. Builder instruction (breathing room, visual weight, reader reward)

The framework is that DESCRIBING quality and PRODUCING quality require different languages. This appears in no extraction file.

**Severity:** CRITICAL -- Repeated from H-05 for emphasis.

---

### NF-03: "Four types of void" framework partially captured

**Source (13-adversarial-review.md, P8):**
> "The pipeline treats all empty space as defect. A designer treats empty space as a tool."

Four void types: STRUCTURAL (bug), RHYTHMIC (breathing room), DRAMATIC (deliberate pause), COMPOSITIONAL (restraint).

**extract-09-18.md (AR-32):** Captures the 4-type classification. GOOD.
**extract-meta.md (Section 2, Void Classification Gate):** Captures it as a gate proposal but with only 3 types (STRUCTURAL, RHYTHMIC, DRAMATIC). COMPOSITIONAL void is dropped.

**Severity:** MINOR -- Three of four types preserved; the most subtle one (compositional) was dropped from one extraction.

---

### NF-04: Birkhoff's Aesthetic Measure correctly captured

**Source (14-perceptual-science-foundations.md):** M = Order / Complexity with specific thresholds.
**extract-meta.md (Section 6.7):** Fully captured with thresholds.
**extract-09-18.md (PS-04):** Fully captured.

**Severity:** N/A -- No issue.

---

### NF-05: "Five Macroscopic Quality Tests" from 16-macroscopic-quality.md -- captured but not connected to pipeline action

**Source (16-macroscopic-quality.md):** Share Test, Memory Test, Return Test, Emotion Test, Authority Test. Plus "Five Qualities of World-Class Design" (medium participates in message, unprecedented visual invention, emotional modulation, content-form isomorphism, signature visual element).

**extract-meta.md (Section 6.5, 6.6):** Both are captured. GOOD.

But the extraction does not connect these to specific pipeline changes. The source's most actionable finding -- "THE DESIGN IS SLIGHTLY TOO POLITE FOR THE CONTENT. THE CONTENT IS PUNK; THE DESIGN IS BUSINESS CASUAL" -- is captured in MQ-02 but its ENERGY is lost. The source uses ALL CAPS and provocative language to emphasize that this is not a minor critique but a fundamental tonal mismatch. The extraction normalizes it to a recommendation.

**Severity:** MINOR -- Content preserved, temperature lost.

---

## ATTACK VECTOR 8: EXPERIMENTS FLATTENED

### EF-01: Experiment E3 (Adversarial Goodhart Probe) partially preserved

**Source (17-meta-meta-analysis.md, Experiment 3):** Full experimental protocol with hypothesis, method (5 steps), predicted outcomes, and strategic value assessment ("HIGHEST strategic value -- it directly tests the integrity of our measurement system").

**extract-meta.md (MM-06):** Captures hypothesis, method summary, and expected impact. GOOD.

**extract-09-18.md does NOT list this experiment.** This is a gap -- the experiment appears only in extract-meta.md, meaning an enrichment implementer reading only extract-09-18.md would miss the highest-strategic-value experiment.

**Severity:** SIGNIFICANT -- Highest-strategic-value experiment only appears in one of two relevant extraction files.

---

### EF-02: "World-description framing" experiment (A17) captured but not with testable hypothesis

**Source (13-adversarial-review.md, A17):**
> "Test whether 'world-description' framing actually changes builder behavior vs direct prohibition framing."

**extract-09-18.md (AR-35):**
> "Test whether 'world-description' framing actually changes builder behavior vs direct prohibition framing."

Captured verbatim. GOOD. But the source provides a TESTABLE HYPOTHESIS: "The reframing is a psychological trick that MIGHT work on humans but is unlikely to change how an LLM processes constraints." The extraction drops the hypothesis and the theoretical basis for expecting FAILURE. The experiment is presented neutrally when the source PREDICTS it will fail.

**Severity:** MINOR -- Experiment captured, predicted outcome dropped.

---

### EF-03: The three 17-meta-meta-analysis experiments correctly captured with full protocols

Experiments E1 (Architecture Effect), E2 (Dual-Instrument), E3 (Goodhart Probe) are all well-preserved in extract-meta.md Section 7 with hypotheses, methods, costs, and strategic value. GOOD work.

**Severity:** N/A -- No issue.

---

## SUMMARY OF FINDINGS

### By Severity

| Severity | Count | Description |
|----------|-------|-------------|
| CRITICAL | 5 | Deepest finding omitted (S-01), PA-05 circularity dropped (S-03), additive-vs-subtractive paradigm dropped (S-05), Vocabulary Trap lost (H-05/NF-02), Goodhart urgency fragmented (H-04) |
| SIGNIFICANT | 8 | Religious principle softened (S-02), placebo challenge reduced (S-04), ratio heresy softened (S-06), mechanism floor defanged (H-01), pipeline-vs-nothing sidelined (H-02), removal question buried (H-03), content-form coupling contradiction dropped (CR-03), Object-vs-Experience underweighted (NF-01) |
| MINOR | 6 | Dedup error (D-01), dedup framing (D-02), CSS specificity (MS-02), Reader Auditor inflation (PI-01), alternative models not exclusived (CR-02), four void types (NF-03) |

### By Attack Vector

| Vector | Issues Found | Assessment |
|--------|-------------|------------|
| **1. SOFTENING** | 6 issues (3 CRITICAL, 2 SIGNIFICANT, 1 SIGNIFICANT) | SYSTEMATIC. The extractors consistently converted adversarial attacks into improvement suggestions. The adversarial review's temperature was reduced by approximately 3 notches. |
| **2. DEDUPLICATION ERRORS** | 2 issues (1 SIGNIFICANT, 1 MINOR) | MODERATE. Most deduplication was correct. Two items lost distinct framing. |
| **3. MISSING SPECIFICITY** | 2 issues (1 SIGNIFICANT, 1 MINOR) | MINOR. Most specificity preserved. Falsification criteria occasionally dropped. |
| **4. PRIORITY INFLATION** | 1 issue (MINOR) | MINIMAL. Priority assignments were generally sound. |
| **5. HERETICAL IDEAS DROPPED** | 5 issues (2 CRITICAL, 3 SIGNIFICANT) | SYSTEMATIC. The extractors were more comfortable with heretical ideas that propose ADDING things than with heretical ideas that propose REMOVING things or QUESTIONING the pipeline's existence. |
| **6. CONTRADICTION RESOLUTION** | 2 issues (1 SIGNIFICANT, 1 MINOR) | MODERATE. One side of a documented contradiction (content-form coupling) was silently dropped. |
| **7. NOVEL FRAMEWORKS LOST** | 3 issues (1 CRITICAL, 1 SIGNIFICANT, 1 MINOR) | MODERATE. The Vocabulary Trap (two-vocabulary proposal) was entirely lost. Object-vs-Experience was captured but underweighted. |
| **8. EXPERIMENTS FLATTENED** | 2 issues (1 SIGNIFICANT, 1 MINOR) | MINOR. Most experiments preserved with protocols. One appeared in only one extraction file. |

---

## META-FINDING: THE EXTRACTION BIAS

The extractions have a consistent bias: they are better at capturing WHAT TO ADD than WHAT TO QUESTION. This mirrors the pipeline's own bias (additive over subtractive). The extractors:

1. **Faithfully captured** ~95% of specific technical recommendations (new gates, new questions, CSS fixes, threshold adjustments)
2. **Partially captured** ~60% of paradigm-level challenges (Object vs. Experience, Goodhart threat)
3. **Silently dropped** ~80% of existential challenges (pipeline as placebo, quality through subtraction, vocabulary as prison, circularity of PA-05)

This pattern is not surprising -- extractors are OPTIMIZED for converting analysis into actionable enrichments. Existential questions are not "enrichments" in the traditional sense. They are attacks on the enrichment paradigm itself. But they are THE MOST IMPORTANT findings in the source material, because they determine whether the enrichments should be applied at all.

**The highest-priority action is not implementing any enrichment.** It is running Experiment E3 (Goodhart probe) and AR-36 (single-agent baseline) to determine whether the pipeline's enrichment model is the right paradigm. If the pipeline is a placebo, enriching it further is wasted effort.

---

## RECOMMENDED CORRECTIONS

### CRITICAL (must fix before deduplication proceeds)

1. **Add to extract-meta.md Section 6:** The pipeline's "self-deception" conclusion from 13-adversarial-review.md. Verbatim quote required.
2. **Add to extract-meta.md Section 6:** "The Vocabulary Trap" framework (two vocabularies for measurement vs. production) from 13-adversarial-review.md Attack 5.
3. **Add to extract-09-18.md:** PA-05 circularity attack (A6) as a separate finding from the vector decomposition recommendation (AR-03).
4. **Add unified GOODHART THREAT section** to extract-meta.md that groups AR-33, AR-34, AR-40, AR-41, MM-06 as responses to a single demonstrated problem, with CRITICAL priority.
5. **Add to extract-meta.md Section 9:** "A30: Going from 3/4 to 4/4 might require SUBTRACTION, not addition. Every enrichment in this catalog is additive. The adversarial review challenges this assumption."

### SIGNIFICANT (should fix)

6. **Upgrade AR-01 framing** in extract-09-18.md to preserve the "religious principle" challenge alongside the per-zone exception recommendation.
7. **Add content-form coupling counter-argument** (A22) wherever content-form coupling is recommended as an uncontested good.
8. **Promote "What would you REMOVE?" question** (AR-34 / PA-32 / H6) to top-10 priority as the ONLY proposed question that inverts the pipeline's additive bias.
9. **Add pipeline-as-placebo framing** to AR-36 in extract-09-18.md.
10. **Ensure Experiment E3 (Goodhart probe)** appears in BOTH extract-09-18.md and extract-meta.md.

---

*End of adversarial audit. 19 issues found: 5 CRITICAL, 8 SIGNIFICANT, 6 MINOR. The extractions are technically competent but systematically soften the most uncomfortable findings. The extractors captured WHAT to build. They missed WHY we should question whether to build it.*
