# WEAVER -> FIX CYCLE Handoff Boundary Analysis

**Author:** handoff-research-agent
**Date:** 2026-02-20
**Scope:** Whether the weaver's diagnostic output prevents builders from repeating failure patterns across fix cycles
**Sources:** build-page/SKILL.md (Sections 6.3, 7), perceptual-auditing/SKILL.md (weaver protocol, fix-type classification), conventions-brief.md (Section 10: Fix cycle memory), pipeline-instrumentation/05-weaver-compression-analysis.md (enriched protocol), flagship-remediation/FINAL-VERDICT.md (empirical evidence)

---

## 0. EXECUTIVE SUMMARY

The weaver-fix cycle handoff has a **well-designed information architecture** (three-tier issue ranking, agreement heatmaps, cross-cycle delta tracking) that was developed in the pipeline instrumentation phase. However, the /build-page SKILL.md -- the AUTHORITATIVE spec that agents actually execute -- contains a SIMPLER version that is missing most of these enrichments. The gap between what was designed and what is specified is the primary risk.

Beyond the spec gap, three structural problems threaten fix cycle convergence:

1. **TYPE A/B/C classification is underspecified** -- the weaver lacks the evidence to reliably distinguish MECHANICAL from STRUCTURAL failures (P1)
2. **"Re-read your brief" is a no-op against continuation bias** -- the same LLM instance re-reading its own conviction statement will re-affirm it, not revise it (P2)
3. **2-auditor coverage in Cycles 2-3 creates blind spots** that allow regressions to go undetected in 5 of 7 perceptual dimensions (P2)

Estimated fix cycle convergence rate to PA-05 >= 3.5: **40-55%** with current spec. With the enrichments from pipeline-instrumentation/05 actually codified: **60-70%**. Reaching 4/4 within 3 cycles: **15-25%** even with enrichments.

---

## 1. TYPE A/B/C CLASSIFICATION ACCURACY

### What the spec says

The perceptual-auditing SKILL.md (lines 671-678) defines three fix types:

- **MECHANICAL (Type A):** CSS value wrong. Builder fixes directly.
- **STRUCTURAL (Type B):** Zone organization or boundary design issue. Builder re-reads TC brief Sections 2+4.
- **COMPOSITIONAL (Type C):** Metaphor not expressed visually. Requires TC re-invocation.

The metaphor failure root-cause diagnosis (lines 741-747) adds a finer breakdown: IMPLEMENTATION vs STRUCTURAL vs COVERAGE failure, each routed to a different fix cycle type.

### What evidence the weaver actually has

The weaver reads:
1. Nine auditor reports (perceptual language only -- no CSS vocabulary)
2. Gate results JSON (measured values vs thresholds)
3. Lock sheet (LOCKED vs CHALLENGEABLE elements)

**The weaver does NOT read:**
- The builder's CSS source code
- The builder's _build-log.md (conviction statement, override log, fractal echo table)
- The _cascade-value-table.md (computed values at boundaries)

### The classification problem

**MECHANICAL vs STRUCTURAL is the critical distinction**, and the weaver often cannot make it.

Consider this empirical case from the flagship remediation (FINAL-VERDICT.md, Issue #1): "6 CSS border-left rules exist at lines 784-812 targeting `.zone-sN .page-container`, but computed style extraction found zero borders." Is this:

- **MECHANICAL?** The CSS values are wrong (selector typo, specificity conflict). Fix: correct the selector.
- **STRUCTURAL?** The HTML zone architecture doesn't match the CSS zone architecture. The builder needs to re-read the TC brief to understand zone boundaries.

The weaver reported it as BLOCKING with a hypothesis ("likely a selector matching issue") but could not definitively classify it. The gate runner measured zero borders (SC-15 data), and auditors said "I see no vertical lines dividing sections" (perceptual). Neither data source tells the weaver WHETHER the builder wrote the right CSS with the wrong selector (MECHANICAL) or conceptualized zones incorrectly (STRUCTURAL).

**The same ambiguity exists for typography uniformity.** Issue #2: "Only S1 has distinct typography. S4-S12 are all 16px." Is this MECHANICAL (the builder wrote 15px rules but specificity overrode them) or STRUCTURAL (the builder's zone architecture only has 1 typographic zone instead of 3)? The weaver hypothesized "CSS specificity conflict or declared intent did not match final output" -- two completely different root causes requiring different fixes.

### Verdict: The classification is OFTEN WRONG

The weaver can reliably classify:
- **Obvious MECHANICAL failures:** Gate SC-09 fails with measured delta = 8 RGB. Fix: increase the background value. Clear.
- **Obvious COMPOSITIONAL failures:** PA-44 AND PA-68 both fail, auditors report "I cannot sense any organizing principle." Clear.

The weaver CANNOT reliably classify:
- **The middle zone** where most real failures live: CSS exists but doesn't render, zones are defined but not perceptually distinct, typography varies in code but not in output. These could be MECHANICAL (wrong selector) or STRUCTURAL (wrong zone model) and the weaver has no way to tell.

**Default-to-IMPLEMENTATION** (line 747: "If the weaver cannot determine root cause, default to IMPLEMENTATION") is a reasonable heuristic but means STRUCTURAL problems get MECHANICAL fixes, which wastes a cycle.

### Priority: **P1 (BLOCKING for 4/4)**

Without accurate classification, fix instructions point the builder at the wrong layer. A STRUCTURAL problem treated as MECHANICAL results in the builder patching CSS values on a flawed zone architecture -- the same values will be wrong again because the architecture is wrong. This is the textbook "repeating the same failure pattern" scenario.

### Recommended fix

The weaver should receive READ access to `_cascade-value-table.md` and `_build-log.md` (conviction statement and transition table sections ONLY -- not the full log, to avoid context contamination). This gives the weaver:
- **Declared intent** (conviction statement: "3-zone typography at 17px/16px/15px")
- **Actual output** (cascade table: S9-S12 computed font-size = 16px, not 15px)
- **Delta between intent and reality** = MECHANICAL. The builder intended the right thing but CSS didn't execute it.
- **Or: declared intent matches actual output** = STRUCTURAL. The builder intended the wrong thing. Re-reading the TC brief is necessary.

This is a ~15-line change to the weaver spawn prompt in build-page/SKILL.md Section 6.3.

---

## 2. DIAGNOSTIC RICHNESS

### What the Top-5 includes (build-page/SKILL.md lines 327-334)

Each issue must include:
1. Auditor source (which auditor letter)
2. Question ID (PA-XX)
3. Severity rating (WOULD-SHIP / WOULD-NOT-SHIP / CONDITIONAL)
4. Exact auditor quote
5. Scroll position
6. Actionable CSS-level feedback (what to change)
7. Multi-coherence channel name
8. Fractal scale
9. Transition type at boundary

### Is this enough for the builder to understand WHY something failed?

**Partially.** The diagnostic richness is strong for WHAT failed and WHERE. It is weak for WHY and HOW TO FIX.

**Strong:**
- Auditor quotes give the perceptual reality ("I cannot tell where one section ends and another begins")
- Question IDs link to specific evaluation criteria
- Scroll position localizes the problem
- Channel + scale + transition type give compositional context

**Weak:**
- "Actionable CSS-level feedback" is generated by the weaver who does NOT see the CSS. The weaver can say "increase background delta" but cannot say "your `.zone-3` background is #FAF8F5 and your `.zone-4` background is #FAF6F3 -- change `.zone-4` to #F0EBE3." The gate runner CAN provide measured values, and the fix instructions spec (Section 7.1, lines 369-395) does paste gate failure data with measured values. But this only covers GATE failures, not PA findings. PA findings get "directional, not prescriptive" guidance.
- The spec says PA issues should include "DIRECTION: [what to change -- not what CSS to write]" (line 392). This is deliberately vague to avoid the weaver writing CSS it hasn't seen. But it means the builder receives "make typography more distinct across zones" without knowing that the specific problem is a CSS specificity conflict where `.zone-sN h2` is overridden by a more specific `main h2` rule.

### The information architecture gap

The pipeline-instrumentation/05-weaver-compression-analysis.md designed a MUCH richer format:
- Three-tier ranking (not just Top-5)
- Agreement heatmap with domain-primary auditor weighting
- Fix type classification (CSS-PATCH / HTML-EDIT / STRUCTURAL-REBUILD)
- Estimated effort per fix
- Expected PA-05 impact per fix
- Protected elements list
- Cross-cycle delta matrix with convergence assessment
- Regression detection protocol

**This enriched format is NOT in build-page/SKILL.md.** The authoritative spec still uses the simpler format. If the pipeline-instrumentation enrichments were codified, diagnostic richness would be substantially improved.

### Verdict: Adequate for Cycle 1, insufficient for Cycles 2-3

In Cycle 1, the builder has full context from the initial build and the fix instructions add incremental information. But in Cycles 2-3, the builder has lost context from the original build (attention horizon in 1000+ line CSS) and needs MORE diagnostic precision, not less. The current spec provides LESS in later cycles (2 auditors instead of 9) with the same diagnostic format.

### Priority: **P2 (IMPORTANT for 4/4)**

The information exists in the pipeline-instrumentation research. The gap is codification. This is a documentation debt, not a design problem.

---

## 3. FIX INSTRUCTION FRAMING AND CONTINUATION BIAS

### What the spec says (build-page/SKILL.md line 401)

> "Re-read _tc-brief.md (your metaphor, zones, tensions) AND your conviction statement and transition table in _build-log.md before applying fixes. Each fix must maintain your planned coherence directions and serve the structural metaphor."

### Does re-reading actually change builder behavior?

**No, not meaningfully.** This is the most important finding of this analysis.

The conventions-brief.md Section 10 (Fix cycle memory, lines 365-378) correctly identifies the problem: "Fix cycles degrade from recipe to checklist when the builder operates at symptom level without compositional context. The conviction statement is your memory anchor."

But the prescribed solution -- re-reading your own conviction statement -- collides with a well-documented LLM property: **continuation bias**. The project's own research identifies this (ephemeral/ceiling-preparation/PROMPT-SLICING-STRATEGY.md lines 48, 66, 123, 428):

> "Continuation bias prevents self-revision... an instance that writes 'this will be X' has strong bias toward implementing X."

The builder who wrote "I commit to: making every zone boundary shift >= 3 channels in the DEEPENING direction" will re-read this commitment and... continue to believe it was the right commitment. If the actual problem is that "DEEPENING" was the wrong coherence direction for zones 3-4 (the content there is reflective, not analytical), re-reading the conviction statement REINFORCES the wrong direction rather than correcting it.

### The same-builder constraint amplifies this

Build-page/SKILL.md line 399: "CRITICAL: Use the SAME Opus builder agent that produced the original page."

This is architecturally sound for preserving CSS context (the builder knows what it wrote and why). But it means the agent that made the original compositional decisions is also the agent evaluating whether those decisions were wrong. Continuation bias means it will:

1. Read fix instructions saying "typography is too uniform across zones"
2. Re-read its conviction statement saying "3-zone typography at 17px/16px/15px"
3. Conclude "my plan was right, the execution had a bug" (MECHANICAL frame)
4. Fix the specificity conflict without questioning whether 3 zones is enough or whether the zone boundaries are in the right places (STRUCTURAL frame)

This is exactly what happened in the flagship remediation. The builder's changelog shows Phase 4 implementing "3-zone typography" exactly as planned, but the PA found S4-S12 all at 16px -- the builder's plan executed imperfectly, and the builder attributed the failure to execution (MECHANICAL) rather than design (STRUCTURAL). In fact, the 3-zone model with 17px/16px/15px has only 1px delta at two boundaries -- below the 2px perceptual threshold. The PLAN was wrong, but the builder never questioned it.

### What would work instead

Two approaches, ranked by effectiveness:

**Approach A (Higher impact, higher cost):** Spawn a FRESH Opus agent for Cycle 2+ fixes with:
- The original TC brief
- The current output.html
- The fix instructions (with enriched diagnostics)
- The cascade-value-table (measured reality)
- NO access to the original build log

This eliminates continuation bias entirely. The fresh agent reads the TC brief and the current page, sees the gap between intent and reality, and fixes from fresh compositional judgment rather than defending prior decisions. Cost: one additional Opus agent per fix cycle (~$2-5).

**Approach B (Lower impact, zero cost):** Add a mandatory "SELF-CHALLENGE" step to fix instructions:

```
Before applying fixes, answer these 3 questions IN WRITING in your build log:
1. If I were seeing this page for the first time, would I make the same zone decisions?
2. Is my conviction statement's coherence direction still correct for ALL zones, or does the content shift direction somewhere I didn't plan for?
3. Do my planned typography/spacing deltas EXCEED the perception thresholds, or did I plan values that are technically different but perceptually identical?
```

This forces the builder to evaluate its own assumptions before reinforcing them. It does not eliminate continuation bias but creates a structured moment where the builder must articulate its reasoning, making implicit assumptions explicit and therefore challengeable.

### Priority: **P2 (IMPORTANT for 4/4)**

Continuation bias is the mechanism by which builders repeat failure patterns. The current spec does not address it -- it inadvertently reinforces it. Approach A is the more reliable fix but Approach B is trivially implementable.

---

## 4. CYCLE 2-3 COVERAGE GAP

### What the spec says (build-page/SKILL.md lines 408-417)

| Cycle | PA Auditors | Questions |
|-------|-------------|-----------|
| 1 (initial) | 9 Opus | All 65 |
| 2 (targeted) | 2 Opus (A + C) | Focused + Tier 5 |
| 3 (final) | 2 Opus (A + C) | Focused + Tier 5 |

### Coverage analysis

The 9 auditors cover 7 perceptual dimensions:

| Auditor | Dimension | Cycle 2-3? |
|---------|-----------|------------|
| A | Impression+Emotion | YES |
| B | Readability+Typography | NO |
| C | Spatial+Proportion | YES |
| D | Flow+Pacing | NO |
| E | Grid+Layout | NO |
| F | Consistency+Rhythm | NO |
| G | Metaphor+Ideology | NO |
| H | Responsive | NO |
| I | Adversarial | NO |

**5 of 7 dimensions are unmonitored in Cycles 2-3.**

### What this misses

The two retained auditors (A: Impression+Emotion, C: Spatial+Proportion) are the RIGHT two for detecting the most common failure modes:
- A catches overall quality regression (PA-01, PA-05) and compositional voice (PA-65, PA-67)
- C catches spatial voids (PA-50-53), sub-perceptual CSS (PA-55), restraint (PA-64), and negative space (PA-66)

But the DROPPED auditors cover critical regression risks:

1. **Auditor B (Readability+Typography):** If the builder fixes background deltas by darkening zones, text contrast may drop below readable thresholds. PA-02 ("Is any text uncomfortable to read?"), PA-06 (word stacking), PA-07 (reading comfort), PA-56 (sub-perceptual typography) are all unmonitored. Typography was the #2 issue in the flagship remediation.

2. **Auditor F (Consistency+Rhythm):** PA-17 ("Is there a visual rhythm or random?") and PA-41 ("repetition monotony") are Tier 1 equivalent -- failing them caps the verdict at "YES WITH RESERVATIONS." If the builder introduces new visual treatments to fix uniformity, rhythm may break. Unmonitored.

3. **Auditor E (Grid+Layout):** If the builder restructures HTML to fix zone boundaries, grid layouts may break. PA-14 (column breathing room), PA-15 (alignment), PA-63 (fractal zoom coherence) are unmonitored.

4. **Auditor G (Metaphor+Ideology):** PA-44 (metaphor structural survival) is the trigger for TC re-invocation. If PA-44 is not evaluated in Cycles 2-3, the system cannot detect that the metaphor has degraded, and the TC re-invocation trigger (which requires PA-44 AND PA-68 failing across 2+ cycles) can never fire because PA-44 is only measured in Cycle 1.

This last point is particularly severe: **the TC re-invocation trigger is effectively disabled in the current spec** because one of its two required signals (PA-44) is not measured after Cycle 1.

### The Tier 5 coverage

The spec says Cycles 2-3 include "all 9 Tier 5" questions. But Tier 5 questions are assigned to specific auditors:

| Tier 5 Question | Assigned Auditor | Covered in Cycle 2-3? |
|-----------------|-----------------|----------------------|
| PA-60 (Design moments) | F | NO |
| PA-61 (Multi-voice) | F | NO |
| PA-62 (Transition variation) | D | NO |
| PA-63 (Fractal zoom) | E | NO |
| PA-64 (Restraint) | C | YES |
| PA-65 (Compositional voice) | A | YES |
| PA-66 (Negative space) | C | YES |
| PA-67 (Novelty) | A | YES |
| PA-68 (Metaphor coverage) | G | NO |

**5 of 9 Tier 5 questions are unmonitored in Cycles 2-3.** The spec says "all 9 Tier 5" but only 2 auditors are deployed. Either the 2 auditors must also answer the other 5 Tier 5 questions (not in their normal assignment), or 5/9 Tier 5 scores are frozen from Cycle 1 and never re-evaluated.

### Verdict: Coverage gap is real but partially mitigable

The 2-auditor model saves ~$15-20 per cycle (7 fewer Opus agents). But it creates blind spots for regression detection in typography, rhythm, grid, and metaphor -- the exact dimensions most likely to regress when fixes are applied.

### Priority: **P2 (IMPORTANT for 4/4)**

The coverage gap does not prevent reaching 3.5/4 (the FIX threshold) because A+C cover the highest-impact dimensions. But reaching 4/4 requires all dimensions performing well, and 5 unmonitored dimensions is a substantial regression risk.

### Recommended fix

Expand to 4 auditors in Cycle 2 (A, B, C, F) and 3 in Cycle 3 (A, C, G). This costs ~$5-10 more per cycle but:
- B catches typography regressions (the #2 historical failure mode)
- F catches rhythm/consistency regressions (Tier 1 equivalent)
- G in Cycle 3 catches metaphor degradation, enabling the TC re-invocation trigger

Alternatively, require A and C to answer PA-44 and PA-68 in Cycles 2-3 (in addition to their normal questions), even though these are not their primary domain. This provides at least surface coverage of the TC re-invocation trigger at zero additional cost.

---

## 5. TC RE-INVOCATION TRIGGER

### What the spec says (build-page/SKILL.md line 421)

> "If PA-44 (metaphor structural survival) AND PA-68 (metaphor spatial coverage) BOTH fail across 2+ cycles, the problem is the METAPHOR, not the implementation."

### Is this the right trigger?

The dual requirement (PA-44 AND PA-68, across 2+ cycles) is appropriately conservative. TC re-invocation is expensive (restarts the entire pipeline) and should only fire when there is strong evidence that the metaphor itself is the problem, not just the builder's execution of it.

**However, the trigger has three issues:**

**Issue 1: PA-44 and PA-68 are not measured after Cycle 1** (see Section 4 above). PA-44 is assigned to Auditor G, PA-68 is assigned to Auditor G. Neither G nor any substitute evaluates these questions in Cycles 2-3. The trigger cannot fire.

**Issue 2: The trigger assumes metaphor failure is binary (works/doesn't), but the reality is a spectrum.** A metaphor can be:
- STRUCTURAL everywhere (4/4 -- no trigger needed)
- STRUCTURAL in top half, ANNOUNCED in bottom half (partial failure -- trigger fires on PA-68 but not PA-44)
- ANNOUNCED everywhere (full failure -- trigger fires on PA-44)
- Not detectable (catastrophic -- trigger fires on both)

The dual-AND requirement means partial metaphor failure (common) does not trigger re-invocation. The weaver's root-cause diagnosis (IMPLEMENTATION vs STRUCTURAL vs COVERAGE) already handles partial failure by routing to STRUCTURAL fix cycle. But if the builder cannot FIX coverage failure after 2 cycles of STRUCTURAL fixes, the system has no escalation path short of full TC re-invocation.

**Issue 3: The builder might be unable to execute a good metaphor.** The spec assumes that if PA-44 and PA-68 both fail, the metaphor is wrong. But what if the metaphor is perfect and the builder simply cannot translate it into CSS? This was arguably the case in the flagship: the metaphor ("intentionality as geological stratification") was rich and structural, but the builder expressed it through sub-perceptual micro-typography instead of through visible spatial architecture. Re-invoking TC would produce a different metaphor that the same builder would also fail to express structurally.

### Verdict: Trigger is sound in design, broken in implementation

The conceptual design is correct: persistent metaphor failure across cycles should trigger re-derivation. The implementation is broken because the required signals are not measured in the cycles where they need to fire. And the trigger does not distinguish "bad metaphor" from "good metaphor, bad builder" -- a distinction that matters for whether TC re-invocation will help.

### Priority: **P2 (IMPORTANT for 4/4)**

The trigger will never fire in the current spec (PA-44/PA-68 unmeasured after Cycle 1). This means metaphor failures that should cause re-invocation instead exhaust all 3 cycles and escalate to the user without the system ever attempting the most appropriate intervention.

### Recommended fix

1. Require PA-44 and PA-68 evaluation in Cycle 2 (assign to Auditor A or C as secondary questions, or add Auditor G to Cycle 2).
2. Add a parallel trigger: if the weaver classifies ANY Top-5 issue as TYPE C (COMPOSITIONAL) in Cycle 1, AND that issue remains unresolved in Cycle 2, trigger TC re-invocation immediately without waiting for the formal PA-44/PA-68 dual-fail signal.
3. For the "good metaphor, bad builder" case: if TC re-invocation produces a metaphor that the weaver rates as equivalently strong (both have clear CSS implications), the problem is the builder, not the metaphor. In this case, escalate to user with the diagnosis "builder cannot execute structural metaphor -- consider spawning a different builder agent."

---

## 6. ESCALATION TO USER

### What the spec says

After 3 cycles: "ESCALATE to user. Do NOT loop beyond 3 cycles." (line 419)

The run manifest (Section 9, line 453) includes: run timestamp, content file path, builder model, gate pass/fail count, PA-05 score with sub-criterion breakdown, Tier 5 score, fix cycles used, total agents spawned, overall verdict, and list of all produced files.

### What information does the user get?

The run manifest provides WHAT happened but not WHY or WHAT TO DO NEXT.

**The user receives:**
- A PA-05 score (e.g., 2.8/4)
- A Tier 5 score (e.g., 5/9)
- Gate pass/fail counts
- A list of files

**The user does NOT receive:**
- The Top-5 unresolved issues and their classifications
- The convergence trajectory (improving? stalled? oscillating?)
- A root-cause hypothesis (is it the metaphor? the builder? the spec?)
- Recommended next action (re-run with different content? re-derive metaphor? manual CSS intervention?)
- The weaver's final synthesis report path (the user would have to know to look in `_pa/_pa-report.md`)

### What the user needs to make a decision

The user's decision space after escalation is:
1. **Accept the page as-is** (lower quality threshold)
2. **Re-run the pipeline** (with same or different content/metaphor)
3. **Manually fix CSS** (user intervenes directly)
4. **Abandon the content** (this content is not suitable for the design system)

To choose between these, the user needs:
- The gap from target (how far is 2.8 from 3.5?)
- The nature of the gap (mechanical defects? structural? compositional?)
- The convergence history (was it improving? have we plateaued?)
- The estimated effort to close the gap (is it 30 minutes of CSS or a full rebuild?)

### The pipeline-instrumentation enrichment

The enriched weaver spec (pipeline-instrumentation/05, Section 5.4) designed a "Post-Run Retrospective Packet" that includes exactly this information: complete finding inventory with fix types, unresolved findings, pipeline findings, and convergence history. **This is not in build-page/SKILL.md.**

### Priority: **P3 (NICE TO HAVE)**

Escalation is the failure case. Improving the escalation report does not increase P(success within 3 cycles) -- it only improves the user's ability to decide what to do after failure. Still worth doing because the user's time is the most expensive resource in the pipeline.

### Recommended fix

Add to the escalation protocol (Section 7.4 of build-page/SKILL.md):

```
When escalating to user, report:
1. VERDICT: [ESCALATE after N/3 cycles]
2. FINAL SCORES: PA-05 [X.X], Tier 5 [X/9]
3. GAP TO TARGET: [specific sub-criteria failing and by how much]
4. CONVERGENCE: [improving/stalled/oscillating] -- Cycle 1: X.X, Cycle 2: X.X, Cycle 3: X.X
5. UNRESOLVED TOP ISSUES: [paste Top-3 unresolved with fix type classification]
6. ROOT CAUSE HYPOTHESIS: [metaphor/builder/spec/content complexity]
7. RECOMMENDED ACTION: [re-run with different metaphor / manual CSS fix / accept as-is / abandon]
8. FILE PATHS: [weaver report, gate results, screenshots for user review]
```

---

## 7. THE SPEC-ENRICHMENT GAP (Cross-Cutting Finding)

The most important finding of this analysis is not any single deficiency but a **systemic gap between the enriched protocols designed in pipeline-instrumentation/05-weaver-compression-analysis.md and what is actually codified in build-page/SKILL.md.**

### What was designed (pipeline-instrumentation/05):
- Three-tier issue ranking (Tier 1/2/3 instead of flat Top-5)
- Agreement heatmap with domain-primary weighting
- Fix type classification (CSS-PATCH / HTML-EDIT / STRUCTURAL-REBUILD)
- Estimated effort and PA-05 impact per fix
- Protected elements list (DO NOT REGRESS)
- Cross-cycle delta matrix with convergence verdicts
- Regression detection protocol
- Builder information gating (what builder sees per cycle)
- Tier 2 promotion rules
- Cycle 3 raw-report access exception
- Post-run retrospective packet

### What is codified (build-page/SKILL.md):
- Top-5 issues with auditor source, question ID, severity, quote, scroll position, CSS feedback
- Multi-coherence channel / fractal scale / transition type per issue
- Question matrix (per-question YES/NO/PARTIALLY across auditors)
- PA-05 sub-criterion scoring
- Tier 5 scoring
- Compositional criteria (6 binary checks)
- Protected elements (via lock sheet, separate from weaver output)
- Disagreement flagging (calibration targets)

### What is missing from the codified spec:
- Three-tier issue ranking (replaced with flat Top-5)
- Agreement heatmap (weaver must internally prioritize without a structured format)
- Fix type classification per issue (TYPE A/B/C exists in PA skill but not in weaver output format)
- Estimated effort per fix
- PA-05 impact estimation per fix
- Cross-cycle delta matrix (no structured regression tracking)
- Convergence assessment (no CONVERGING/STALLED/OSCILLATING/DIVERGING verdict)
- Cycle-specific builder visibility rules
- Post-run retrospective packet
- Cycle 3 raw-report access exception

### Priority: **P1 (BLOCKING for 4/4)**

The enriched protocol was designed BECAUSE the simpler protocol failed (the flagship remediation revealed its limitations). Without codifying the enrichments, the pipeline will repeat the same compression and information-loss patterns that contributed to the flagship's failure trajectory.

---

## 8. SUMMARY SCORING TABLE

| Issue | Description | Priority | Effort to Fix | Impact |
|-------|-------------|----------|---------------|--------|
| 7 | Spec-enrichment gap (pipeline-instrumentation not codified) | **P1** | 3-4 hours (integrate enriched weaver format into SKILL.md) | Eliminates compression, enables regression tracking |
| 1 | TYPE A/B/C classification accuracy (weaver lacks evidence) | **P1** | 30 min (add cascade-table + conviction-statement access to weaver) | Prevents misrouted fixes |
| 3 | Continuation bias in re-read instruction | **P2** | 15 min (add self-challenge questions) or 0 extra cost (Approach B) | Breaks failure pattern repetition |
| 4 | Cycle 2-3 coverage gap (5/7 dimensions unmonitored) | **P2** | $5-10/cycle (add 2 auditors) or 0 (assign PA-44/68 to A/C) | Catches regressions, enables TC trigger |
| 5 | TC re-invocation trigger disabled (PA-44/68 unmeasured) | **P2** | 0 (covered by Issue 4 fix) | Enables the system's own metaphor-correction mechanism |
| 2 | Diagnostic richness (adequate but improvable) | **P2** | Covered by Issue 7 fix | Better fix instructions |
| 6 | Escalation information insufficient | **P3** | 30 min (add escalation report format) | Better user decisions after failure |

---

## 9. WILL THE BUILDER REPEAT THE SAME FAILURE? (Direct Answer)

**Yes, with high probability.** Three mechanisms conspire:

1. **Classification error routes STRUCTURAL problems to MECHANICAL fixes.** The builder patches CSS values on a flawed zone architecture. Next cycle, different symptoms of the same structural problem surface. The weaver classifies the new symptoms as new MECHANICAL problems. The builder patches again. Three cycles consumed, root cause untouched.

2. **Continuation bias causes the builder to defend its original plan.** The instruction to "re-read your conviction statement" reinforces rather than challenges the original compositional decisions. The builder's self-assessment in fix cycles will consistently attribute failures to execution rather than design, because the builder wrote the design and has bias toward its validity.

3. **Coverage gaps allow regressions to hide.** The builder fixes 3 issues and introduces 2 regressions in unmonitored dimensions (typography, rhythm). Cycle 2 evaluates the 3 fixes (which pass) and misses the 2 regressions. PA-05 stalls or drops. Cycle 3 catches the regressions but now has to fix them too, running out of cycles.

**The net effect:** Fix cycles converge on the MEASURED dimensions (spatial, impression) while regressing or stalling on UNMEASURED dimensions (typography, rhythm, grid, metaphor). The final PA-05 is higher than the initial but lower than if all dimensions were monitored.

**This matches the empirical evidence.** The flagship remediation went from 1.5/4 to 2.5/4 -- a genuine +1.0 improvement. But it stalled at 2.5 with 3 BLOCKING issues remaining, all of which were classification-ambiguous (borders: MECHANICAL or STRUCTURAL? typography: specificity conflict or wrong plan? table classes: HTML-EDIT or STRUCTURAL?). The system could not determine which layer to fix, so it reported all three as "probably MECHANICAL" and the builder would have continued to patch CSS without questioning zone architecture.

**To break this pattern:** Codify the pipeline-instrumentation enrichments, give the weaver access to the cascade-value-table, add self-challenge questions to fix instructions, and expand Cycle 2 auditor coverage to at least 4 agents covering the critical regression dimensions.
