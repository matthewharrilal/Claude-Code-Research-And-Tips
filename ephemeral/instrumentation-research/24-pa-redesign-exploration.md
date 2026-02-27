# PA Redesign Exploration: Fixing Circularity While Keeping PA Integral

---

## 0. Independent Cross-Validation Summary

**[INDEPENDENT CHECK]** A fresh-eyes Opus agent independently evaluated the PA system (2026-02-27, `_truth-check/pa-findings.md`). Key findings that affect this redesign exploration:

1. **[VERIFIED] Deployment protocol is the star.** Independent evaluator rates PA deployment as having "genuinely strong, system-agnostic value." The 9-auditor protocol, experiential pass, screenshot-based evaluation, priority override, and weaver synthesis are all called out as KEEP-AS-IS strengths. This file's redesign should focus on QUESTIONS, not PROTOCOL.

2. **[NUANCED] Question count discrepancy.** This file and file 20 classify ~25-27 questions as universal. The independent evaluator found 34/69 universal (49%). See file 20 Section A.1 for methodology reconciliation. The independent evaluator used a 3-way classification (universal/system-shaped/ambiguous) vs this file's 2-way. The truth is likely ~30-35 genuinely universal questions.

3. **[VERIFIED] Circularity is partial, not fatal.** Independent evaluator: "The circularity lives primarily in Tier 5 and in the specific vocabulary of PA-05a (DESIGNED)." Tiers 1-3 are "~70% universal." This aligns with this file's Section 2 analysis.

4. **[VERIFIED] Tier 5 is the primary problem.** Independent evaluator: "PA-60 through PA-68 are almost entirely system-shaped — they detect THIS system's idea of quality rather than universal design quality."

5. **[OVERLOOKED] CONDITIONAL PASS overuse.** Independent evaluator identified a problem this file does not address: "CONDITIONAL PASS is overused and under-defined. It means different things across auditors and creates scoring ambiguity." Redesign should consider replacing CONDITIONAL with binary PASS/FAIL with mandatory evidence.

6. **[OVERLOOKED] 69 questions may be too many.** Independent evaluator: "Auditors with 10-11 questions produce lower-quality answers on later questions. The completion manifest creates checkbox pressure." Fewer, deeper questions may yield better insights.

7. **[OVERLOOKED] Integrative Auditor role is unclear.** Independent evaluator: "In normal operation, 'gestalt impression with no questions' produces vague output that the weaver struggles to integrate." This file elevates the Integrative Auditor (Section 5) but the independent evaluator suggests the role needs better definition.

---

## 1. THE CIRCULARITY PROBLEM IN PA

The PA system has a specific bias structure:

1. **Soul constraints** were derived from perceptual observations of one reference site (Sanrok), then amplified during soul-locking (e.g., observed 4-6px corners became border-radius: 0)
2. **PA questions** were designed by the same system that produced those soul constraints
3. **Builds** are made under soul constraints, then audited by PA questions designed to detect compliance with those constraints
4. **Results** are cited as evidence that the constraints work

The loop: IMPOSE aesthetic -> BUILD under aesthetic -> AUDIT for aesthetic compliance -> CITE compliance as evidence for aesthetic.

This does not mean PA is broken. It means PA conflates two distinct things:
- **Universal design quality** (readability, spatial balance, visual flow, usability)
- **System-specific aesthetic compliance** (warm palette, sharp edges, no shadows, editorial feel)

---

## 2. WHICH PA QUESTIONS ARE UNIVERSAL VS SYSTEM-SPECIFIC?

### Clearly Universal (Would Apply to Any Design System)

| Questions | Why Universal |
|-----------|--------------|
| PA-01 (first bother), PA-02 (uncomfortable text), PA-08 (squint to read) | Readability is objective -- illegible text fails in ANY system |
| PA-04 (eye direction), PA-12 (smooth flow), PA-13 (clear ending) | Visual flow is a perception property, not a style property |
| PA-14 (column breathing), PA-15 (alignment positions), PA-37 (info overload) | Layout is structural -- overcrowding fails everywhere |
| PA-22, PA-23, PA-46 (responsive) | Responsive quality is system-independent |
| PA-50, PA-51, PA-52, PA-53 (void prevention) | Blank viewports are universally wrong |
| PA-80 (navigation usability), PA-81 (chart comprehension) | Usability is universal |
| PA-73 (accessibility) | Accessibility is universal |
| PA-55, PA-56 (sub-perceptual detection) | Imperceptible CSS wastes effort in ANY system |
| Experiential Pass (Section 0) | "Can you read it?" is the most universal question possible |

**Count: ~25 questions. These are genuinely aesthetic-neutral.**

**[INDEPENDENT CHECK — NUANCED]** The independent evaluator found 34 universal questions (not 25), including PA-01, PA-04, PA-05 sub-criteria (partially), PA-11, PA-12, PA-13, PA-75, PA-77 which this file classified as system-specific or ambiguous. See file 20 Section A.1 for the full reconciliation. The truth is likely ~30-35 genuinely universal questions.

### System-Specific (Measure THIS Design System's Aesthetic)

| Questions | Why System-Specific |
|-----------|-------------------|
| PA-18 (grays same family) | Presupposes a warm palette -- a cool-palette system would fail this |
| PA-19 (element from different website) | "Different" is defined relative to THIS system's look |
| PA-20 (personality match) | "Personality" is trained on this system's editorial aesthetic |
| PA-24 (belongs to a SYSTEM) | Asks about consistency with a specific design system |
| PA-42, PA-43, PA-44 (metaphor ideology) | Metaphor evaluation is deeply tied to the compositional philosophy |
| PA-54 (structural promise) | System-specific: only relevant because this pipeline uses structural promises |

**Count: ~8 questions. These are valid WITHIN the system but not portable.**

**[INDEPENDENT CHECK — VERIFIED]** Independent evaluator confirms these questions are system-specific: PA-18 (warm palette), PA-19 (different website), PA-20 (personality), PA-42/43/44 (metaphor). Count aligns closely with independent's 22 system-shaped.

### Ambiguous (Universal in Principle, System-Biased in Practice)

| Questions | The Ambiguity |
|-----------|--------------|
| PA-03 (one designer or three) | Universal principle, but "one designer" is calibrated to this system's coherence definition |
| PA-05 (would you put your name on it) | Universal question, but sub-criteria (DESIGNED, COHERENT, PROPORTIONATE, POLISHED) are defined through this system's values |
| PA-11 (generous vs anxious margins) | Universal spatial judgment, but "generous" is calibrated to 65-80% viewport width |
| PA-16, PA-17, PA-41 (consistency, rhythm) | Rhythm is universal, but what counts as "purposeful variation" vs "monotony" is system-trained |
| PA-29 (header text styles) | "Fighting for attention" is universal; the threshold (3+) is arbitrary |
| PA-34, PA-35, PA-36 (transitions, pacing) | Universal in asking about pacing; system-specific in what counts as a "designed moment" |
| PA-45 (show someone as good design) | Evaluator's taste is shaped by exposure to this system's aesthetic |
| PA-60-PA-68 (Tier 5) | Compositional depth is a real property, but the questions assume the compositional intelligence framework |
| PA-69, PA-70, PA-71 (pipeline integration) | "Multi-coherence" and "channel shifts" are pipeline-specific vocabulary |

**Count: ~25 questions. The largest and most important category.**

---

## 3. HOW SHOULD PA-05 BE DEFINED TO BE AESTHETIC-NEUTRAL?

### The Problem with Current PA-05

PA-05 ("Would you put your name on this?") is powerful because it is holistic. But its sub-criteria smuggle in system-specific assumptions:

- **DESIGNED:** "multi-scale coherence, rhythm variation, focal points placed deliberately" -- assumes the compositional intelligence framework
- **COHERENT:** "consistent mechanism deployment, no dialect shifts" -- assumes mechanism-based design
- **PROPORTIONATE:** "Content fills 65-80% of viewport width" -- a specific numeric range from this pipeline
- **POLISHED:** "token compliance high" -- references this system's tokens

### Option A: Keep PA-05 as-is, Add Explicit Bias Awareness

**Approach:** The Weaver receives a bias disclosure: "PA-05 was designed within this design system. When scoring, distinguish between 'this fails as design' (universal) and 'this violates our conventions' (system-specific)."

**Pro:** Lowest disruption. PA-05 has empirical track record.
**Con:** Depends on the Weaver recognizing bias in the moment -- the same problem soft rules always have.

### Option B: Split PA-05 into Universal and System-Specific Components

**Approach:** Two scores:
- **PA-05U (Universal):** "Does this feel intentionally designed?" -- no sub-criteria referencing specific thresholds or mechanisms
- **PA-05S (System):** "Does this feel like it belongs to THIS system?" -- explicitly measures system compliance

Ship decision uses PA-05U. PA-05S becomes diagnostic context.

**Pro:** Clean separation. Forces honest accounting of what we are measuring.
**Con:** Adds complexity. PA-05's power is its simplicity -- "would you sign this?" doesn't decompose naturally.

### Option C: Redefine PA-05 Sub-Criteria as Universal

Replace system-specific language:
- **DESIGNED:** "Does every visual choice feel like a decision, not a default?" (remove "multi-scale coherence")
- **COHERENT:** "Does this feel like one mind made it?" (remove "mechanism deployment")
- **PROPORTIONATE:** "Does the spatial layout feel considered?" (remove specific px ranges)
- **POLISHED:** "Is execution quality high?" (remove "token compliance")

Thresholds (65-80% width, 120px gap) move to guardrails that inform but don't define PA-05.

**Pro:** Preserves simplicity while removing system-specific anchoring.
**Con:** Vaguer criteria = more evaluator variance. The specific thresholds existed to reduce subjectivity.

### Recommendation Signal

Option C is the strongest compromise. It preserves PA-05's holistic power while removing the most blatant system-specific anchoring. The numeric thresholds (Appendix B) remain available as GUARDRAILS but do not define what DESIGNED means.

---

## 4. SHOULD THE WEAVER HAVE PIPELINE CONTEXT?

### Current State

The Weaver receives:
- All 10 auditor reports (9 PA + 1 Integrative)
- PA questions + weaver protocol
- Quality tier definitions, calibration scales, anti-pattern catalog, diagnostic vocabulary
- Gate results (programmatic)
- Mode information (APPLIED vs COMPOSED)

This means the Weaver knows what the pipeline EXPECTED. The question: does this bias the verdict?

### Option A: Context-Aware Weaver (Current)

**Pro:** Enables classification (FLOOR/MIDDLE/CEILING/FLAGSHIP), fix-type diagnosis (MECHANICAL/STRUCTURAL/COMPOSITIONAL), and the IMPROVE/RETHINK decision. The Weaver's value is SYNTHESIS -- merging auditor perceptions with pipeline diagnostics.
**Con:** A Weaver who knows "we expected CEILING" may score a MIDDLE page as "falling short" rather than "good for what it is."

### Option B: Context-Starved Weaver (Fresh Eyes All the Way Down)

**Pro:** Maximum honesty. The Weaver reacts to auditor observations without pipeline expectations.
**Con:** Loses the Weaver's primary value: translating perceptual findings into actionable pipeline feedback. A context-free Weaver produces a design review, not a pipeline verdict.

### Option C: Two-Phase Weaver (Recommended Exploration)

Phase 1: Weaver writes verdict from auditor reports ONLY (no gate results, no tier definitions, no mode info). This is the "honest assessment."
Phase 2: Weaver receives pipeline context and writes DIAGNOSTIC appendix (tier classification, fix routing, IMPROVE/RETHINK recommendation).

**Pro:** Clean separation of "what is this" from "what should we do about it."
**Con:** Doubles weaver work. May be unnecessary overhead if Phase 1 and Phase 2 would agree anyway.

---

## 5. WHAT WOULD GENUINELY UNBIASED FRESH-EYES PA LOOK LIKE?

### What the Current System Gets Right

The fresh-eyes principle (Section 3 of deployment) is GENUINELY STRONG:
- Auditors receive only screenshots + questions + guardrails
- No mechanism counts, pattern names, build plans, or tier expectations
- Experiential Pass forces READING before ANALYZING
- Three Laws ensure answers require visual evidence
- Visual verification (not code interpretation) catches real readability failures

This is not theater. The experiential pass has caught real failures (ceiling whitespace void, 9/9 flagged) that analytical-only approaches missed entirely.

### What Would Make It More Unbiased

**1. Remove pipeline vocabulary from auditor-facing questions.**
PA-69 asks about "visual properties changing simultaneously" -- this is multi-coherence theory in disguise. PA-70 asks about "visual treatment RESPONDING to content density" -- this is the density arc theory. Reword to plain language: "At this boundary, what changes? Is the change noticeable?" and "Do busier sections LOOK different from simpler ones?"

**2. Remove numeric thresholds from PA questions.**
PA-53 asks if container uses "65-80% of horizontal space." This is a specific pipeline parameter. Replace with: "Does the content feel like it uses the available space well, or does it feel lost/cramped?"

**3. Rotate auditor question assignments periodically.**
Fixed assignments (A always gets impression, B always gets readability) create specialization bias. Auditor A has seen dozens of pages through the "impression" lens -- they have calibrated to this system's definition of "good impression." Periodic rotation forces fresh perspectives.

**4. Include at least one TRULY external reference.**
Add one question that explicitly breaks system isolation: "If you saw this on a design portfolio website alongside 20 other pages from different designers, would it stand out positively, negatively, or blend in?" This forces the auditor to reference a broader aesthetic baseline.

**5. The Integrative Auditor is the closest thing to unbiased.**
No assigned questions, no structured framework, just "what do you feel?" This role should be preserved and potentially ELEVATED -- its gestalt impression may be more honest than any structured question set.

---

## 6. WHAT IS GENUINELY VALUABLE IN CURRENT PA TO PRESERVE?

### The Five Things That Make PA Work

**1. Experiential Pass (Section 0).** The single most valuable innovation. "Read every word from the pixels" catches failures no analytical question can. This is universal. Preserve unconditionally.

**2. Multi-Auditor Architecture (9 independent evaluators).** Breadth of perspectives is the key value of Mode 4. The ceiling whitespace void was caught 9/9 -- two auditors would have missed it. The architecture is sound; the questions can evolve.

**3. Screenshot-Based Visual Verification.** Auditors judge rendered pixels, not code. This is genuinely aesthetic-neutral -- a pixel is a pixel regardless of which design system produced it.

**4. PA-05's Holistic Framing.** "Would you put your name on this?" is a powerful question precisely BECAUSE it resists decomposition into properties. Keep the question; refine the sub-criteria.

**5. Priority Override (Readability > Everything).** The rule that illegible text trumps all other findings is universally correct. No design system makes illegible text acceptable.

### What Could Be Retired Without Loss

- **Tier 5 questions in current form.** PA-60 through PA-68 are deeply tied to compositional intelligence theory. They detect the specific KIND of quality this system values. Replace with aesthetic-neutral equivalents: "Does this page do something you would not have predicted?" (PA-67 is already close). **[INDEPENDENT CHECK — VERIFIED]** Independent evaluator: "The Tier 5 questions are almost entirely system-shaped."
- **Pipeline Integration questions.** PA-69, PA-70, PA-71 embed pipeline theory (multi-coherence, density arc, zone boundaries). Replace with plain-language equivalents or move to a system-specific addendum.
- **Perception Threshold Table.** Specific RGB deltas and px values are pipeline parameters, not universal standards. Keep as builder/gate reference; remove from PA auditor context.

**[INDEPENDENT CHECK — ADDITIONAL RETIREMENTS TO CONSIDER]**
- **CONDITIONAL PASS scoring.** Independent evaluator: "It means different things across auditors and creates scoring ambiguity. The scale should be binary: PASS or FAIL with mandatory evidence." Consider retiring CONDITIONAL in favor of binary + evidence.
- **Reduce total question count.** Independent evaluator: "69 questions is too many for meaningful attention. Fewer, deeper questions would yield better insights." Consider reducing to ~40 questions (keep all universal + top system-specific, retire redundant or low-signal questions).
- **Clarify Integrative Auditor role.** Independent evaluator: "In normal operation, 'gestalt impression with no questions' produces vague output." Either give the Integrative Auditor structured prompts or clearly define the expected output format.

---

## 7. DESIGN OPTIONS SUMMARY

| Dimension | Conservative | Moderate | Aggressive |
|-----------|-------------|----------|------------|
| PA-05 definition | Add bias disclosure to Weaver (Option A) | Redefine sub-criteria as universal (Option C) | Split into PA-05U / PA-05S (Option B) |
| Weaver context | Keep current (Option A) | Two-phase verdict (Option C) | Context-starved (Option B) |
| Question set | Remove numeric thresholds from questions | Also reword pipeline-theory questions | Also rotate auditor assignments |
| Tier 5 | Keep but label as system-specific | Replace with aesthetic-neutral equivalents | Retire entirely, trust PA-05 + gestalt |
| Fresh-eyes depth | Current (strong) | Add external reference question | Add external reference + auditor rotation |

**The moderate column represents the best tradeoff** -- it fixes the most obvious circularity without disrupting PA's proven strengths. The aggressive column maximizes honesty at the cost of diagnostic power. The conservative column is low-risk but may not meaningfully change the bias.

### Key Tradeoff

Every move toward aesthetic neutrality REDUCES the pipeline's ability to classify output into its tier system (FLOOR/MIDDLE/CEILING/FLAGSHIP). The tier system requires system-specific vocabulary. The question is whether tier classification belongs in PA at all, or whether PA should be purely perceptual and tier classification should be a separate post-PA analysis step.

The cleanest architecture: PA measures PERCEPTION (universal). A separate classification step (gate results + PA scores + pipeline context) determines TIER (system-specific). The Weaver bridges both, but in two clearly separated phases.

---

## 8. INDEPENDENT CROSS-VALIDATION: WHAT CHANGES?

**[INDEPENDENT CHECK]** Based on the three independent evaluations, the redesign priorities should be:

**Priority 1: PRESERVE the deployment protocol.** The independent PA evaluator rates it as having "genuinely strong, system-agnostic value." The experiential pass, 9-auditor parallel evaluation, screenshot-based assessment, priority override, and weaver synthesis are all confirmed valuable. Redesign should NOT touch protocol architecture.

**Priority 2: REDUCE question count to ~40.** Keep all ~34 universal questions. Keep top 6-8 system-specific questions clearly labeled as such. Retire redundant, low-signal, and pipeline-theory questions. This addresses both the bias concern and the independent evaluator's finding that 69 questions degrades answer quality.

**Priority 3: Option C for PA-05 (redefine sub-criteria as universal).** Independent evaluator confirms PA-05 measures "something REAL" but vocabulary is system-specific. Option C preserves the holistic power while removing system-specific anchoring. This is the consensus recommendation from both this file's analysis and the independent evaluation.

**Priority 4: Fix CONDITIONAL PASS.** Replace with binary PASS/FAIL + mandatory evidence. This addresses the independent evaluator's finding about scoring ambiguity.

**Priority 5: Separate Tier 5 into system-specific addendum.** PA-60 through PA-68 have value for THIS system but should be clearly separated from the universal quality assessment. This is confirmed by the independent evaluator's finding that Tier 5 is "almost entirely system-shaped."

**Priority 6: Define Integrative Auditor output format.** The independent evaluator found the role produces "vague output" in normal operation. Either provide structured prompts or specify expected output.

**What should NOT change:** The Two-Phase Weaver proposal (Section 4, Option C) is independently validated — the independent evaluator confirms the weaver's diagnostic value while noting the risk of pipeline-context bias.

---

*24-pa-redesign-exploration.md -- cross-validated 2026-02-27*
