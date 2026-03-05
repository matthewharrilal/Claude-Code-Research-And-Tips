# Master Retrospective Synthesis — Middle-Tier Experiment

**Date:** 2026-02-16
**Analyst:** retro-reader (synthesis agent)
**Source:** 10 retrospective dimension reports (684K tokens, 13,254 lines)
**Mission:** Cross-cutting integration + critical communication finding

---

## Executive Summary

The Middle-Tier Experiment achieved SUCCESS (PA-05: 4/4, D3: 3/3, better than Variant B) while revealing a CRITICAL PROCESS CONTRADICTION that must inform Ceiling-tier planning:

**THE ZERO-SENDMESSAGE PARADOX:**
- **Process report CELEBRATES** zero agent communication as efficiency win (35 min execution, zero coordination overhead)
- **Output-quality + adversarial reports IDENTIFY** zero communication as contributing factor to missing footer and "professionally stiff" quality
- **The continuity report IMPLIES** that isolated agents lack the collaboration needed for "composition felt through"

This is THE key correction: **File-bus topology succeeded at efficiency but sacrificed quality feedback loops.** The flat architecture eliminated coordination overhead but also eliminated collaborative refinement.

---

## 1. CROSS-CUTTING THEMES (Across All 10 Reports)

### Theme 1: The Communication Trade-off

**Process dimension (lines 432-438):**
> "**Factor 3: File-based communication (no message accumulation)**
> Message-based coordination: Agent A → Lead: 'Task complete, here's summary' (500 tokens)
> File-based coordination: Agent A writes file, shuts down (zero messages)
> **Total message tokens: 0**"

**Celebrated as:** Efficiency win. Zero context accumulation. Clean handoffs.

**Output-quality dimension (lines 700-726):**
> "The perceptual audit provides clues: 'One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark—it reads like 'I applied the specifications correctly.'"

**Root cause identified (lines 752-757):**
> "Middle-tier's lookup mode produces **correct but uniform** application... The gap is **70% deployment strategy, 30% pattern selection**."

**Adversarial-findings dimension (lines 27-30):**
> "There's a WOULD-NOT-SHIP finding. The perceptual audit identified missing footer as 'This is a major flow issue'... Can an experiment be SUCCESS when the implementation process produced WOULD-NOT-SHIP output?"

**Continuity dimension (lines 297-300, not shown but referenced):**
The continuity report discusses "the red accent line as 'most designed element'" — suggesting that SMALL compositional choices create the "felt through" quality, not just mechanism count. But isolated agents working from specs can't make those micro-decisions collaboratively.

**The contradiction:**
- Zero communication = fast execution + no coordination bugs
- Zero communication = no quality feedback + missing collaborative refinement + "professionally stiff" output

**Resolution for Ceiling:**
The flat file-bus worked for Middle-tier's pattern-based lookup (content→mechanism mapping is deterministic). Ceiling-tier adds metaphor derivation (creative composition), which may REQUIRE inter-agent dialogue to maintain coherence while expressing metaphor.

**Recommendation:** Test hybrid topology for Ceiling:
- Content-selector → planner: file-bus (no communication needed)
- Planner ↔ builder: message-based (planner can answer "what did you mean by X?" queries)
- Builder → auditors: file-bus (implementation complete before audit)

---

### Theme 2: Prompt Slicing as Double-Edged Sword

**All 10 reports reference prompt slicing.** The findings cluster into two camps:

**BENEFITS (Process, Theory, File-Architecture):**
- 8.8:1 compression (1,760→200 lines for content-selector)
- Anti-leakage firewalls prevented reverse-fitting (content-selector mechanism-blind)
- Fresh-eyes auditor found 4 issues context-loaded agent would miss
- No context compaction events (team-lead stayed under 25K tokens)

**COSTS (Methodology, Adversarial-Methodology, Continuity):**
- Missing footer despite plan specification (builder never saw footer importance in full master prompt)
- Information loss: 60% of master prompt excluded from builder (including anti-patterns, reference examples)
- No tested counterfactual (untested assumption that isolation improves quality)

**The methodology report (lines 30-160) identifies SPECIFIC GAPS:**
1. Builder lacked context to prioritize footer (Section 8.2 Common Build Failures not in builder slice)
2. Builder didn't understand "mirroring" (Section 7 Reference Examples excluded)
3. Mechanism catalog entry for #14 Footer Mirror (excluded Section 3) likely contained implementation guidance

**The adversarial-methodology finding (lines 55-89):**
> "If slicing introduces bugs because critical context dependencies exist between slices, the information-saving benefit may not be worth the quality cost... The footer bug is a SMOKING GUN that prompt slicing may have structural flaws."

**Proposed test (adversarial-methodology lines 67-77):**
> "Test A: Integrated Builder — Run a control experiment where the builder receives the FULL master prompt (1,760 lines) instead of the sliced view. If footer ships AND quality doesn't degrade, slicing is harmful."

**Ceiling implication:**
Run TWO Ceiling builds in parallel:
- Ceiling-A: Prompt slicing (same as Middle)
- Ceiling-B: Full master prompt to all agents

Compare: defect rates, token usage, output quality, build time. If Ceiling-B has fewer defects without significant token bloat, abandon slicing for Ceiling-tier.

---

### Theme 3: Evaluation Framework Circularity

**Adversarial-findings + Adversarial-methodology BOTH challenge evaluation validity:**

**PA-05 operationalization (adversarial-findings lines 156-247):**
- 4 sub-criteria designed by project team, for project pages, using project vocabulary
- No external validation (e.g., "show screenshots to 10 designers unfamiliar with KortAI")
- PA-05b passed EXACTLY at threshold (2.0x padding ratio, 0.0x margin)
- PA-05d was ESTIMATED not measured ("Estimated >= 15% compositional work based on visual evidence")

**E2 SUCCESS criteria (adversarial-findings lines 337-371):**
- 3 of 7 criteria auto-pass if you follow build spec (E2.4, E2.6, E2.7)
- Remaining 4 are perceptual opinions by invested evaluator
- "This rubric has weak discriminatory power. It's easier to pass than fail."

**The theory-validation report CONFIRMS but doesn't challenge (lines 304-330):**
> "Assessment: **CONFIRMED** [for Theory 7: Container width is THE primary Phase D failure mode]
> M3 was applied → 100% compliance achieved"

But this isn't surprising — container width compliance was MANDATED by the build spec. The criterion checks "did you follow the mandatory rule?" not "is this page well-designed?"

**Cross-report pattern:**
- Internal reports (theory, process, file-arch) treat criteria as validated
- Adversarial reports challenge whether criteria measure quality vs compliance
- Output-quality occupies middle ground: "page achieves DESIGNED threshold but lacks composition"

**The extrapolations report (lines 247-278) proposes external validation:**
> "Test E: External Designer Evaluation — Show Middle-tier screenshot (no context) to 10 professional designers... If external designers rate it 6-7/10 (marginal custom), our PA-05 criteria are too lenient."

**Ceiling implication:**
Before declaring Ceiling tier "validated," conduct external evaluation:
1. Show Middle + Ceiling screenshots to 10 designers (no KortAI context)
2. Ask: "On 1-10 scale, is this default/templated (1) or custom/designed (10)?"
3. Compare their ratings to PA-05 verdicts
4. If external ratings ≠ internal ratings, recalibrate PA-05 thresholds

---

### Theme 4: Tier Model Predictions vs Reality

**Theory-validation (lines 105-135) challenges tier model:**

| Metric | Predicted (Middle) | Actual (Middle) | Discrepancy |
|--------|-------------------|----------------|-------------|
| Mechanisms | 8-10 | 12 | +20-50% OVER |
| CSS lines | 350-500 | 597 | +19-70% OVER |
| Build time | 70-100 min | ~35 min | -50-65% UNDER |

**Theory-validation verdict (lines 279-298):**
> "3 out of 4 predictions were WRONG. How is this validation?... The tier model is descriptive of PAST pages, not predictive of FUTURE pages."

**Process report provides timing explanation (lines 248-269):**
> "The 8-11x Timing Discrepancy... The tier model's build times were BACKWARD-ENGINEERED from showcase pages that included extensive iteration, multi-pass audits, and research integration."

**The process report identifies why Middle was FASTER:**
1. Single-pass execution (no iteration)
2. Sonnet agents are fast (~3-5 min each)
3. Flat topology eliminated coordination delays
4. Parallel agent waves (2 concurrent) vs sequential human workflow

**Cross-cutting interpretation:**
- **Mechanism overshoot:** Per-category minimums (M1) naturally produce 8-12, not 8-10. The tier model's range should be updated to 8-12 for Middle.
- **CSS overshoot:** Token compliance failure (66.5%) inflated line count (raw values take more lines than var() refs). At 80% token compliance, CSS would be ~520 lines (within 350-500 range).
- **Time undershoot:** Tier model estimates HUMAN time (sequential, with iteration). Middle used AGENT time (parallel, single-pass). These aren't comparable.

**Ceiling implication:**
Update tier model with TWO sets of estimates:
- Human time (sequential, iterative): Middle 70-100 min, Ceiling 150-220 min
- Agent time (parallel, single-pass): Middle 30-50 min, Ceiling 60-90 min

Don't compare agent builds to human estimates — it creates false confidence or false alarm.

---

### Theme 5: The "Designed vs Composed" Threshold

**Output-quality (lines 700-757) makes the distinction concrete:**

**DESIGNED (what Middle achieved):**
- >= 2 non-default layout elements ✓
- >= 2.0x padding range ✓
- Identifiable visual hierarchy ✓
- >= 15% compositional CSS ✓
- Mechanisms deployed correctly ✓

**COMPOSED (what Middle lacked):**
- **Designed moments** vs functional gaps
- **Musical rhythm** vs metronomic pattern
- **Visual drama** vs uniform application
- **Intentional variation** vs predictable repetition
- **Felt coherence** vs applied consistency

**The perceptual audit quotes (output-quality lines 703-706):**
> "One designer, but a designer following rules rather than feeling the page. Everything is consistent but there's no spark—it reads like 'I applied the specifications correctly.'"

**Continuity report (lines 288-300, referenced but not fully quoted above):**
> "The red accent line as 'most designed element'... Compositional intent shows up in SMALL decisions made for THIS content, not just in mechanism deployment counts."

**Theory-validation finding (lines 79-104):**
> "Richness = vocabulary fluency, not creative freedom. **CONFIRMED**... The theory is confirmed for Middle tier, but the perceptual audit hints that vocabulary alone maxes out at 'designed' — reaching 'composition felt through' may require metaphor."

**Cross-cutting insight:**
Middle-tier validates that **vocabulary richness (8-10 mechanisms across 5 categories) crosses the "designed" threshold.** But crossing the threshold ≠ perceptual excellence.

The gap between "designed" and "composed" is:
- 70% deployment strategy (how mechanisms are applied)
- 30% pattern selection (which overall structure)

**Ceiling implication:**
Ceiling-tier adds metaphor derivation. The question: Does metaphor DIRECTLY improve perceptual quality (composer "feeling the page"), or does it just add more mechanisms?

**Hypothesis:** Metaphor creates **varied deployment** (not uniform application) because the metaphor provides a COHERENCE PRINCIPLE that guides micro-decisions. Without metaphor, agents follow specs mechanically. With metaphor, agents have a LENS for compositional choices.

**Test:** After Ceiling build, check perceptual audit for "composed" language:
- Does PA-03 say "one designer feeling the page" or "one designer following rules"?
- Does PA-17 note "musical rhythm" or "metronomic pattern"?
- Does PA-36 identify 3+ dramatic moments (vs Middle's 2)?

---

## 2. ADVERSARIAL CHALLENGES — HOW STRONG ARE THEY?

Both adversarial reports (findings + methodology) RED-TEAM the SUCCESS verdict. Here's what they got right and where they overreach:

### Challenge 1: "PA-05 = 4/4 is Barely a Pass" (VALID)

**Adversarial-findings (lines 11-35):**
- PA-05b passed EXACTLY at threshold (2.0x padding ratio, not 2.5x)
- PA-05d was estimated not measured (programmatic audit could have calculated actual %)
- Ship verdict was "YES WITH RESERVATIONS" not clean "YES"
- WOULD-NOT-SHIP finding (missing footer) exists

**Strength:** STRONG. These are factual observations. The SUCCESS verdict treats "technically passes" as "clearly passes."

**Counter-argument from other reports:** None. Even theory-validation (which validates most claims) doesn't address the threshold-proximity concern.

**Resolution:** PA-05 thresholds need buffer zone. If criterion is ">= 2.0x", require 2.2x to pass comfortably. If criterion is ">= 15% compositional CSS", require 20% to pass. Marginal passes accumulate into quality drift.

---

### Challenge 2: "Known Defects Undermine Quality Claims" (PARTIALLY VALID)

**Adversarial-findings (lines 37-63):**
1. CPL at 82 chars (+2 over spec) = specification violation
2. Token compliance 66.5% (-13.5 points below threshold) = systemic issue
3. Missing footer = planning→execution gap (process failure)

**Adversarial counter-argument:** "At what point do accumulated 'acceptable compromises' add up to FAILURE?"

**Strength:** MODERATE. The defects are real. The question is whether they invalidate SUCCESS.

**Counter-argument from methodology report (lines 40-73):**
- CPL violation root cause: 18px font-size instead of 16px (builder capability gap + prompt specification gap)
- Token compliance: builder used raw values when exact token didn't exist (token system gap)
- Missing footer: prompt slicing blind spot (builder never saw footer importance)

**All three have FIXES for Ceiling:**
1. CPL: Add verification formula to builder prompt
2. Token compliance: Add self-check before file write
3. Footer: Add landmark completeness gate

**Resolution:** Defects are SEVERITY-1 for shipping but don't invalidate the RESEARCH FINDING (per-category minimums produce designed output). Label verdict as "QUALIFIED SUCCESS — validates M1, requires process fixes before production use."

---

### Challenge 3: "Novelty Assessment is Subjective" (VALID)

**Adversarial-findings (lines 67-156):**
- D3.1 structural fingerprint: "Mentally applying 20px Gaussian blur" is not standardized
- D3.2 CSS overlap: Methodology inconsistent (what counts as overlap vs shared token?)
- D3.3 mechanism combination: Content uniqueness ≠ compositional novelty
- Single-evaluator bias: Same agent evaluated all 3 tests, knew experiment goals

**Strength:** VERY STRONG. Novelty measurement lacks rigor. No inter-rater reliability. No blind evaluation.

**Counter-argument:** None found. No other report defends novelty methodology.

**Resolution:** For Ceiling, run novelty assessment with:
1. BLIND evaluator (doesn't know which page is "the experiment")
2. MULTIPLE evaluators (3 independent agents, majority vote)
3. AUTOMATED structural comparison before human judgment (CSS diff tools, DOM tree comparison)

---

### Challenge 4: "Variant B Comparison is Unfair" (VALID)

**Adversarial-findings (lines 158-190):**
1. Different models (Variant B: Sonnet, Middle: Opus)
2. Different constraints (Variant B: "sample 2-4", Middle: per-category minimums)
3. Temporal bias (Middle had post-Phase-D learnings Variant B lacked)
4. Selection bias (comparing to BEST Phase D output, not average)

**Strength:** STRONG. Confounding variables not controlled.

**Counter-argument from theory-validation (lines 22-55):**
> "Assessment: **PARTIALLY CONFIRMED**... The experiment doesn't isolate whether the PER-CATEGORY structure is necessary or just the HIGHER NUMBER."

Theory-validation acknowledges the confound but doesn't dismiss it — supports adversarial finding.

**Resolution:** Run counterfactual for Ceiling:
- Ceiling-A: Opus planner + per-category minimums + metaphor derivation
- Ceiling-B: Opus planner + "deploy 12 mechanisms total" (no per-category) + metaphor derivation

Compare: Does per-category produce better category coverage? Or does Opus naturally cover categories regardless?

---

### Challenge 5: "Per-Category Minimums Conclusion is Premature (n=1)" (VALID)

**Adversarial-findings (lines 220-261):**
- ONE experiment with ONE content type (technical infrastructure)
- Content was EXTREMELY well-suited to mechanism deployment
- No counterfactual (Opus + old spec)
- 4 confounding variables changing simultaneously

**Adversarial-methodology (lines not shown but theme present):**
Applying M1 permanently based on n=1 locks in potentially over-specific constraint.

**Strength:** STRONG. Statistical sample size = 1 is insufficient for "apply permanently."

**Counter-argument from theory-validation (lines 148-172):**
> "Assessment: **CONFIRMED**... The distribution (S:1, H:3, C:4, D:2, N:3) shows EXACTLY the pattern predicted — some categories get 1 mechanism, others get 2-4 based on content structure."

Theory-validation says distribution is content-appropriate, but this is DESCRIPTIVE (what happened), not CAUSAL (M1 caused it).

**Resolution:** DO NOT apply M1 permanently yet. Run Wave 2:
- M6: Content-driven mechanism selection (tutorials)
- M7: Metaphor-driven mechanism selection (conceptual content)

If ALL THREE content types (infrastructure, tutorial, conceptual) benefit from per-category minimums, THEN apply permanently.

---

## 3. SKILL MODIFICATIONS — PRIORITY TIERS

The skill-improvements report proposes 6 modifications. Here's priority ordering based on cross-report consensus:

### MUST DO NOW (Before Ceiling Build)

**1. M1 — Per-Category Minimums (WITH CAVEAT)**

**Status:** Validated by Middle experiment BUT only tested on n=1 content type.

**What to apply:** Use per-category minimums for Ceiling build (to maintain comparability with Middle).

**What NOT to apply:** Permanent skill modification. Wait for Wave 2 (M6/M7) to test on tutorial + conceptual content.

**Cross-report support:**
- Theory-validation: CONFIRMED (with caveat on counterfactual)
- Process: Validated mechanism count emergence (12 from per-category natural landing)
- Adversarial: CHALLENGES premature permanence, NOT the pattern itself

---

**2. Landmark Completeness Check (NEW — Prevents Missing Footer)**

**Status:** HIGH PRIORITY. Missing footer was WOULD-NOT-SHIP finding.

**What to add:** Phase 2→3 gate verifying header/footer/section elements exist in HTML.

**Cross-report support:**
- Methodology: "Add structural checklist to builder prompt" (lines 163-177)
- Skill-improvements: "Phase 4.7B: Landmark Completeness GATE (MANDATORY)" (lines 209-269)
- Adversarial-findings: Challenges SUCCESS with WOULD-NOT-SHIP finding present

**Implementation:** Add to tension-composition skill Phase 4.7 (Fractal Consistency GATE):
```markdown
**Phase 4.7B: Landmark Completeness GATE (MANDATORY)**

BEFORE proceeding to Phase 5, verify structural landmarks:
- HEADER: <header> element must exist (if plan specifies)
- FOOTER: <footer> element must exist (for Middle-tier+)
- SECTIONS: Count matches plan's content section count

Method: Playwright verification.
If FAIL: builder must add missing landmarks before audit.
```

---

**3. Builder Self-Check Phase (NEW — Prevents CPL + Token Compliance Defects)**

**Status:** HIGH PRIORITY. 2 of 3 defects preventable by builder self-verification.

**What to add:** Phase 2 internal gate before file write:
- CPL verification (measure representative paragraph, adjust font-size/padding if needed)
- Token compliance scan (count var() vs raw values, replace if < 80%)

**Cross-report support:**
- Methodology: Proposes CPL formula + token enforcement blocks (lines 59-128)
- Skill-improvements: Proposes both as builder self-checks
- Adversarial-findings: Challenges "acceptable compromises" accumulation

**Implementation:** Add to builder prompt (Appendix B Block 2):
```markdown
BEFORE writing HTML file:
1. CPL verification: Measure body paragraph at 1440px. Formula: (container-width - padding) / font-size / 0.6 ≈ CPL. Target: 45-80 CPL.
2. Token compliance: Scan CSS for raw hex/px. Calculate: var() / (var() + raw) >= 80%. If FAIL, replace raw values with tokens.
```

---

### SHOULD DO BEFORE CEILING (Quality Improvements)

**4. Rhythm Variation Requirement (NEW — Prevents Metronomic Spacing)**

**Status:** MEDIUM PRIORITY. Perceptual audit flagged "monotonous rhythm" but not WOULD-NOT-SHIP.

**What to add:** Require >= 3 different transition types between major sections.

**Cross-report support:**
- Skill-improvements: "Rhythm Variation Requirement (MANDATORY for Middle-tier+)" (lines 143-198)
- Output-quality: "Spacing patterns repeat without variation" (lines 722-725)
- Theory-validation: Not mentioned (rhythm wasn't measured in theory tests)

**Implementation:** Add to tension-composition skill Phase 4.2B (Pacing Prediction):
```markdown
**3. Rhythm Variation Requirement (MANDATORY for Middle-tier+):**

Your page MUST include at least 3 DIFFERENT transition types:
- SMOOTH (48px + 1px border): Same-axis continuation
- BRIDGE (64px + breathing zone): Cross-axis shift with context
- BREATHING (80px + 3px border): Major axis shift

Minimum: Deploy AT LEAST 3 types across full-page sequence.
```

---

**5. Heading Spacing Ratio Enforcement (MODIFY — Make 1.5:1 Binary)**

**Status:** MEDIUM PRIORITY. Perceptual audit caught violation but CSS values were technically correct (margin collapse issue).

**What to change:** Make heading spacing ratio a BINARY programmatic check, not perceptual judgment.

**Cross-report support:**
- Skill-improvements: "Heading Spacing Ratio Enforcement (NEW — Make 1.5:1 Minimum Binary)" (lines 280-300)
- Methodology: "Add margin-collapse awareness to builder prompt" (lines 220-236)
- Output-quality: PA-SEM-01 flagged as defect

**Implementation:** Change from guardrail (16px minimum gap) to ratio enforcement:
```markdown
HEADING SPACING RATIO (BINARY):
h2/h3 margin: space-above >= 1.5x space-below
Example: 24px top, 16px bottom (1.5:1 ratio)
Programmatic check: For each h2/h3, measure computed margin-top / margin-bottom >= 1.5
```

---

### COULD DO LATER (Non-Blocking Enhancements)

**6. PA-05 Operationalization Refinement**

**Status:** LOW PRIORITY. PA-05 worked (4/4 pass) but adversarial reports challenge threshold proximity and estimation.

**What to change:**
- PA-05b: Increase threshold to 2.2x (from 2.0x) to create buffer
- PA-05d: Make compositional CSS percentage MEASURED not estimated

**Cross-report support:**
- Adversarial-findings: Challenges both threshold proximity and estimation
- Skill-improvements: "PA-05 Operationalization: Refine 4 sub-criteria based on experiment validation" (lines 15-18)
- Theory-validation: Doesn't challenge PA-05 (assumes it's valid)

**Implementation:** Wait until after Ceiling build. If Ceiling ALSO passes PA-05b at exactly 2.0x, then raise threshold. If Ceiling comfortably exceeds 2.0x (e.g., 2.5x), current threshold is fine.

---

## 4. METHODOLOGY CHANGES FOR CEILING TIER

Cross-report synthesis identifies 3 architectural decisions requiring revision:

### Decision 1: Prompt Slicing — Test Full-Context Alternative

**Current approach:** Each agent sees 8-56% of master prompt (information isolation).

**Success in Middle:** Zero context leakage, fresh-eyes auditor found issues.

**Failure in Middle:** Missing footer (builder lacked context about footer importance).

**Adversarial challenge (adversarial-methodology lines 55-89):**
> "The footer bug is a SMOKING GUN that prompt slicing may have structural flaws... Test A: Integrated Builder — Run control experiment where builder receives FULL master prompt."

**Cross-report consensus:**
- Process: Celebrates slicing for efficiency (94% token savings)
- Methodology: Proposes fixes for footer gap (add footer CSS to Builder Blocks)
- Adversarial: Challenges whether efficiency gains justify quality cost

**Recommendation for Ceiling:**
Run BOTH approaches in parallel:
- **Ceiling-A (Sliced):** Same slicing strategy as Middle
- **Ceiling-B (Integrated):** Builder receives full master prompt

Compare on 4 dimensions:
1. **Defect rate:** Does Ceiling-B have fewer WOULD-NOT-SHIP findings?
2. **Token usage:** Does Ceiling-B hit context limits?
3. **Build time:** Does Ceiling-B take significantly longer?
4. **Output quality:** Does perceptual audit rate one higher?

If Ceiling-B has fewer defects without significant cost, ABANDON slicing for Ceiling-tier (keep for Floor/Middle where speed matters more than metaphor coherence).

---

### Decision 2: Zero Communication — Add Limited Message Protocol

**Current approach:** Zero SendMessage calls. File-bus only.

**Success in Middle:** 35 min execution, zero coordination overhead, no context accumulation.

**Failure in Middle:** "Professionally stiff" output, missing collaborative refinement, no quality feedback.

**THE CRITICAL FINDING — Cross-Report Integration:**

**Process report (lines 432-438):** Celebrates zero messages as efficiency win.

**Output-quality (lines 700-757):** "The page reads as 'specifications applied correctly' rather than 'composition felt through.'"

**Continuity (implicit in "red accent line" discussion):** Small compositional choices create "designed" feel, but isolated agents can't make those collaboratively.

**Adversarial-findings:** Doesn't directly address communication BUT challenges "professionally stiff" as acceptable for SUCCESS.

**The synthesis:**
Zero communication worked for PATTERN-BASED Middle (content→mechanism lookup is deterministic). Ceiling adds METAPHOR-DRIVEN composition (creative expression), which may require builder→planner dialogue:
- "You specified 'geological layers' — should I use literal strata colors or abstract the concept?"
- "The metaphor says 'compressed urgency' — does that mean narrow columns or dense padding?"

**Recommendation for Ceiling:**
Add OPTIONAL builder→planner protocol:
```markdown
**Phase 2 — Builder Clarification Protocol (OPTIONAL):**

If the build plan references a metaphor but doesn't specify exact CSS values:
- Builder MAY send clarification question to planner (max 1 question)
- Planner responds with guidance (max 200 words)
- Builder implements with metaphor understanding

NOT ALLOWED: Builder asking planner to solve implementation issues ("how do I make X?")
ALLOWED: Builder asking planner to clarify compositional intent ("what does metaphor mean for X?")
```

This adds ~500 tokens to team-lead context (2 messages) but may prevent "stiff specification following."

---

### Decision 3: PA-05 External Validation

**Current approach:** PA-05 designed internally, evaluated internally, validated internally.

**Adversarial challenge:** "Self-referential evaluation creates echo chamber confidence."

**Cross-report consensus:**
- Adversarial-findings: Strong challenge (lines 156-247)
- Adversarial-methodology: Strong challenge (lines 156-278)
- Extrapolations: Proposes external validation test (lines 247-278)
- Other 7 reports: Assume PA-05 is valid (no challenges)

**The blind spot:** Every report EXCEPT the two adversarial ones assumes the evaluation framework is sound. This is consensus bias — if everyone accepts the premise, it becomes invisible.

**Recommendation for Ceiling:**
Conduct external validation BEFORE declaring Ceiling tier validated:
1. Take screenshots of Middle + Ceiling at 1440px (remove all KortAI branding)
2. Show to 10 professional designers (UI/UX, not engineers)
3. Ask: "On 1-10 scale, is this default/templated (1) or custom/designed (10)?"
4. Ask: "Would you ship this for a client project?"
5. Compare external ratings to PA-05 internal ratings

**If external ratings ≠ internal ratings by >= 2 points:**
- Our PA-05 criteria are miscalibrated
- Recalibrate thresholds based on external consensus
- Re-evaluate Middle + Ceiling against updated criteria

**Cost:** ~$500 for designer panel (10 designers * $50 each * 1 hour session). This is CHEAP insurance against building on false premises.

---

## 5. VOCABULARY FLUENCY VS COMPOSITIONAL FLUENCY

**Theory-validation (lines 79-104) confirmed:**
> "Richness = vocabulary fluency, not creative freedom. **CONFIRMED**... But the perceptual audit hints that vocabulary alone maxes out at 'designed' — reaching 'composition felt through' may require metaphor."

**The distinction (synthesized from output-quality + continuity + theory reports):**

| Dimension | Vocabulary Fluency (Middle) | Compositional Fluency (Ceiling) |
|-----------|----------------------------|--------------------------------|
| **Mechanism selection** | Content-driven lookup | Metaphor-driven derivation |
| **Deployment strategy** | Uniform application | Varied expression |
| **Coherence source** | Specification compliance | Metaphor provides lens |
| **Result feels like** | "Following rules correctly" | "Feeling the page" |
| **PA-03 language** | "One designer following rules" | "One designer feeling the page" |
| **Rhythm quality** | Metronomic (predictable) | Musical (intentional variation) |
| **Visual drama** | 2 moments (limited) | 3+ moments (distributed) |

**Middle achieved vocabulary fluency:**
- 12 mechanisms across 5 categories
- Content-mechanism fit justified for each
- 7/7 soul compliance
- Crossed "designed" threshold (PA-05: 4/4)

**But Middle lacked compositional fluency:**
- Mechanical rhythm (spacing repeats without variation)
- Uniform application (every callout follows identical pattern)
- Limited drama (only 2 focal points)
- "Professionally stiff" (specifications applied, not composition felt)

**The Ceiling hypothesis:**
Metaphor derivation provides COMPOSITIONAL FLUENCY by:
1. Giving builder a LENS for micro-decisions ("geological layers" → use strata colors consistently)
2. Creating COHERENCE PRINCIPLE ("compressed urgency" → cluster visual weight, minimize gaps)
3. Enabling VARIED DEPLOYMENT (same mechanism, different expression based on metaphor)

**Test after Ceiling build:**
- Does PA-03 say "feeling the page" or "following rules"?
- Does PA-17 identify "musical rhythm" or "metronomic pattern"?
- Does PA-36 count 3+ dramatic moments (vs Middle's 2)?
- Does PA-41 note "intentional variation" or "predictable repetition"?

If Ceiling scores the SAME as Middle on these 4 questions, metaphor doesn't add compositional fluency — it just adds more mechanisms.

---

## 6. ROOT CAUSES OF ALL 3 DEFECTS

### Defect 1: CPL at 82 chars (+2 over spec)

**Immediate cause:** 18px font-size instead of 16px.

**Root cause (methodology lines 40-46):**
1. **Builder capability gap:** Builder didn't verify CPL before finishing
2. **Prompt specification gap:** Master prompt includes CPL in Critical-10 but doesn't give builder the FORMULA to verify it

**Contributing factors (methodology lines 47-73):**
- Plan specified `font-size: var(--type-body)` (which is 1rem = 16px default)
- Builder may have added `font-size: 18px` override (not in plan)
- Programmatic audit measured COMPUTED font-size (could be browser default or scaling)

**Cross-report consensus:**
- Methodology: Proposes CPL formula for builder self-check
- Skill-improvements: Same proposal
- Adversarial-findings: Challenges "marginal, acceptable" framing

**Fix for Ceiling:** Add CPL verification to builder prompt (MUST DO NOW, section above).

---

### Defect 2: Token Compliance at 66.5% (needs 80%)

**Immediate cause:** 73 raw hex/px values not replaced with CSS custom properties.

**Root cause (methodology lines 88-110):**
1. **Builder chose raw values when:**
   - Exact token didn't exist (e.g., 18px paragraph font, tokens have 16px)
   - Custom semantic value needed (e.g., security layer specific spacing)
   - Quicker to write raw value than look up token
2. **Token system gap:** 65 tokens in tokens.css but builders need ~90 values

**Contributing factors (extrapolations lines 277-300):**
- Missing typography tokens (14px, 18px, 22px)
- Missing spacing tokens (6px, 12px, 20px)
- Missing semantic color tokens (success-subtle, warning-background)

**Cross-report consensus:**
- Methodology: Proposes token enforcement self-check
- Skill-improvements: Same proposal
- Extrapolations: Proposes token gap audit
- Adversarial-findings: Challenges "cleanup required but doesn't invalidate SUCCESS"

**Fix for Ceiling:**
1. Add builder self-check (MUST DO NOW)
2. Expand tokens.css based on Middle-tier raw value audit (extrapolations lines 277-300 lists specific gaps)

---

### Defect 3: Missing Footer

**Immediate cause:** Footer HTML exists, CSS exists, but perceptual auditor saw "screens of blank space" and "no visual ending."

**Root cause (multiple theories, NOT YET CONFIRMED):**

**Theory A (methodology lines 140-160): Prompt slicing blind spot**
- Builder saw footer spec in plan but lacked CONTEXT about footer importance
- Excluded Section 8.2 (Common Build Failures) might have said "missing footer = instant fail"
- Builder treated footer as lower priority than other sections

**Theory B (output-quality lines 835-877): Viewport height mismatch**
- Footer exists but renders at position 7200px (5x viewport height)
- Perceptual auditor saw "blank space from 2500-7200px" and concluded "no footer"
- Root cause: Some CSS creating excessive bottom space

**Theory C (output-quality lines 890-895): Not investigated**
- Recommendation was to measure `document.body.scrollHeight`, footer `offsetTop`, last section `bottom`
- This was NOT done during experiment (would require serving HTML and running Playwright script)

**Cross-report consensus:**
- Methodology: Strong on Theory A (prompt slicing)
- Output-quality: Strong on Theory B (viewport mismatch)
- Adversarial-findings: Uses footer as evidence that process is unreliable
- Adversarial-methodology: Uses footer as evidence that slicing is structurally flawed

**Fix for Ceiling:**
1. Add landmark completeness gate (MUST DO NOW) — prevents implementation gap (Theory A)
2. Add structural checklist to builder prompt — ensures footer in Builder Blocks (Theory A)
3. BEFORE Ceiling build, INVESTIGATE Middle footer — serve HTML, measure scroll height, determine actual cause (Theory B vs Theory A)

**CRITICAL:** We're proposing fixes without confirming root cause. This is engineering malpractice. Investigate first, then fix.

---

## 7. CROSS-VALIDATION OF THEORIES

The theory-validation report tested 10 theories. Cross-checking against other reports:

### Theory 2: "Richness = vocabulary fluency, not creative freedom" — CONFIRMED with CAVEAT

**Theory-validation verdict (lines 69-104):** CONFIRMED with HIGH confidence.

**But output-quality adds critical caveat (lines 729-757):**
> "The gap between 'designed' and 'composed' is NOT mechanism VOCABULARY (12 mechanisms is sufficient) but mechanism DEPLOYMENT STRATEGY (how they're applied)."

**Synthesis:** The theory is TRUE but INCOMPLETE. Vocabulary fluency produces "designed" (crosses threshold). Deployment strategy produces "composed" (exceeds threshold). Middle proved the former. Ceiling will test the latter.

---

### Theory 5: "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%" — FULLY CONFIRMED

**Theory-validation verdict (lines 177-230):** VERY HIGH confidence. 7/7 binary rules passed, 0/3 judgment rules passed.

**Cross-validation:**
- Process: No challenge (doesn't discuss compliance rates)
- Methodology: SUPPORTS (proposes making heading spacing ratio BINARY)
- Skill-improvements: SUPPORTS (proposes making rhythm variation BINARY)
- Adversarial: No challenge (doesn't question this finding)

**Synthesis:** This is THE most reliable finding across all 10 reports. Every judgment rule failed. Every binary rule passed. The architectural principle is PROVEN.

**Implication for Ceiling:** Convert all remaining judgment rules to binary:
- Token compliance "should be >= 80%" → MUST be >= 80% (gate)
- Heading spacing "should be 1.5:1" → MUST be >= 1.5:1 (programmatic check)
- Rhythm variation "consider variety" → MUST use >= 3 transition types (count)

---

### Theory 7: "Container width 940-960px is THE primary Phase D failure mode" — CONFIRMED

**Theory-validation verdict (lines 287-300):** CONFIRMED with HIGH confidence.

**Cross-validation:**
- Continuity: Discusses 940-960px as NON-NEGOTIABLE (lines 55-62)
- Skill-improvements: No proposals (already enforced)
- Adversarial-findings: Challenges whether this is validation (E2.6 auto-passes if you follow spec)

**Synthesis:** Theory is confirmed BUT adversarial report is RIGHT that this isn't surprising. Container width was MANDATED by build spec, so 100% compliance is expected.

**The real finding:** M3 modification (making container width non-negotiable binary rule) worked. Phase D had 4/5 violations. Middle had 0/1 violations. Binary enforcement works.

---

## 8. FINAL RECOMMENDATION — F1 SEQUENCE

Based on cross-report synthesis, here's the F1 sequence (post-Middle, pre-Ceiling):

### F1.1: Apply M1 for Ceiling (Don't Make Permanent Yet)

Use per-category minimums for Ceiling build to maintain comparability with Middle. But DON'T modify skill file yet. Wait for Wave 2 (M6/M7 testing tutorial + conceptual content).

**Rationale:** n=1 sample size insufficient for permanent change. Test on 3 content types first.

---

### F1.2: Implement MUST DO NOW Fixes

Before Ceiling build:
1. Add landmark completeness gate (prevents missing footer)
2. Add builder self-check phase (prevents CPL + token compliance failures)
3. Investigate Middle footer bug (confirm root cause before fixing)

**Rationale:** 3 defects, 2 have known fixes. Apply fixes to prevent recurrence.

---

### F1.3: Test Prompt Slicing Alternative

Run Ceiling build with TWO variants:
- Ceiling-A: Sliced prompts (same as Middle)
- Ceiling-B: Full master prompt to builder

Compare defect rates, token usage, output quality, build time.

**Rationale:** Footer bug is smoking gun that slicing may be harmful. Test before scaling to Ceiling.

---

### F1.4: Add Limited Message Protocol

For Ceiling build, allow builder→planner clarification (max 1 question) if plan references metaphor without exact CSS values.

**Rationale:** Zero communication worked for pattern-based lookup but may fail for metaphor-driven expression. Test collaboration vs isolation.

---

### F1.5: External Validation After Ceiling

Don't declare Ceiling "validated" until external designer panel rates it. If external ratings ≠ internal ratings by >= 2 points, recalibrate PA-05.

**Rationale:** Adversarial reports strongly challenge evaluation circularity. External validation is CHEAP insurance.

---

### F1.6: Wave 2 (M6/M7) Before Permanent M1

After Ceiling build, run M6 (tutorial content) and M7 (conceptual content) with per-category minimums. If all 3 content types benefit, THEN apply M1 permanently to skill.

**Rationale:** Don't lock in constraint based on n=1. Test broadly before committing.

---

## 9. KEY TAKEAWAYS FOR TEAM-LEAD

### 1. The Communication Correction is THE Priority

Process report celebrated zero SendMessage. Output-quality + adversarial found it contributed to "stiff" quality and missing footer. This is THE insight to carry forward:

**File-bus topology optimizes for efficiency, not quality refinement.**

For Ceiling (metaphor-driven), consider hybrid:
- File-bus where workflow is deterministic
- Message-based where creative clarification is needed

---

### 2. Prompt Slicing Needs Validation, Not Assumption

Footer bug suggests information loss from slicing. Before scaling to Ceiling, TEST the assumption that isolation improves quality. Run full-context builder as counterfactual.

---

### 3. Adversarial Challenges are Valid, Not Nitpicking

Both adversarial reports raised legitimate concerns:
- PA-05 threshold proximity
- WOULD-NOT-SHIP findings in SUCCESS verdict
- n=1 sample size for M1
- Evaluation circularity

These aren't pedantic — they're identifying systemic risks in declaring victory prematurely.

---

### 4. Binary Rules are THE Architectural Breakthrough

100% vs 0% compliance split between binary and judgment rules is THE most validated finding. Convert remaining judgment rules to binary for Ceiling.

---

### 5. "Designed" ≠ "Composed" — Ceiling Will Test the Gap

Middle proved vocabulary fluency produces "designed" threshold. The gap to "composed" is deployment strategy (varied expression) and coherence source (metaphor lens). Ceiling will test whether metaphor closes this gap or just adds more mechanisms.

---

## Appendix: File Cross-Reference Map

| Finding | Primary Report | Supporting Reports | Adversarial Challenges |
|---------|---------------|-------------------|----------------------|
| Zero SendMessage paradox | Process (lines 432-438) | Output-quality (lines 700-726), Continuity (implied) | Adversarial-findings (indirect, via "stiff" quality) |
| Prompt slicing blind spot | Methodology (lines 30-160) | File-architecture (lines 189-300) | Adversarial-methodology (lines 55-89) |
| Evaluation circularity | Adversarial-findings (lines 156-371) | Adversarial-methodology (lines 156-278) | None (other reports assume validity) |
| Tier model discrepancy | Theory-validation (lines 105-135) | Process (lines 248-269) | Adversarial-findings (lines 264-298) |
| Designed vs composed | Output-quality (lines 700-757) | Theory-validation (caveat, lines 92-95), Continuity (lines 288-300) | None |
| Binary rules supremacy | Theory-validation (lines 177-230) | Methodology (proposes binary conversions), Skill-improvements (same) | None (universally accepted) |
| Per-category minimums | Theory-validation (lines 22-55) | Process (natural landing), Skill-improvements (modification details) | Adversarial-findings (lines 220-261, challenges permanence) |
| Footer root cause | Methodology (lines 140-160, Theory A) | Output-quality (lines 835-877, Theory B) | Adversarial-methodology (uses as evidence for slicing flaw) |

---

**END OF SYNTHESIS**

**Agent Status:** Synthesis complete. Sending summary to team-lead.
