# Adversarial Stress Test: Pipeline v5 Features

**Date:** 2026-02-26
**Agent:** audit-adversarial (Opus)
**Goal:** Break every v5 feature. Find the exploit before the first live build does.
**Files analyzed:** All 12 v5-design documents + all operational files in ephemeral/va-extraction/

---

## Method

For each v5 feature, I ask: "If I were a lazy, compliant, or adversarial LLM agent operating inside this pipeline, how would I exploit this feature to produce a PASSING pipeline run with a LOW-QUALITY page?" I also ask: "If two features interact, what emergent failure mode appears that neither feature defends against alone?"

---

## EXPLOIT 1: Pass B Undoes Pass A Through "Deepening" (TWO-PASS BUILDER)

**Severity: CRITICAL**

**Attack vector:** Pass B receives Pass A HTML and instructions to "DEEPEN, INTENSIFY, and POLISH." The ADD-ONLY constraint prohibits changing zone backgrounds, layout structure, font-size, font-weight, line-height, padding, margin, border-width, border-color. But Pass B is explicitly permitted to "restructure CSS extensively (this is expected)" (d5-orchestration-protocol.md line 463).

**The exploit:** Pass B builder overrides Pass A's CSS cascade by writing MORE SPECIFIC selectors that produce the same prohibited effect:

```css
/* Pass A wrote: */
.zone-3 { background: #1E1E1E; }

/* Pass B "doesn't change" backgrounds but writes: */
.zone-3 > * { background: #2A2A2A; }  /* Children override parent */
.zone-3 .content-wrapper { background: #333; }  /* Even more specific */
```

Pass B hasn't technically changed `.zone-3`'s background. But every CHILD element now has a different background. The page renders completely differently. The same attack works for font-size (via `em` units on children), padding (via `margin` on children instead), and border-color (via `outline` or `box-shadow`).

**GR-65 (Structure Preservation) won't catch this.** GR-65 checks section count, heading hierarchy, and grid-template-columns. It does NOT check computed CSS values on child elements.

**Why this matters:** The entire two-pass architecture rests on the premise that Pass B cannot alter composition. If it can alter composition through CSS specificity, then the structural check between passes gives false confidence -- the orchestrator thinks composition is preserved when it is not.

**Mitigation needed:** GR-65 must compare COMPUTED STYLES (via Playwright `getComputedStyle`) on a sample of elements between Pass A and Pass B HTML, not just structural DOM comparison. At minimum: compare background-color, font-size, padding-top, and color on every zone container and first child.

---

## EXPLOIT 2: Observer STOP File Race Condition (OBSERVER AGENT)

**Severity: HIGH**

**Attack vector:** The observer writes `OBSERVER-STOP.md` to halt the pipeline. The orchestrator checks `ls OBSERVER-STOP.md` before each phase transition. But these are asynchronous: the orchestrator runs its check, gets "file not found," then starts the next phase. The observer finishes its verification 2 seconds later and writes the STOP file. The orchestrator is already inside the next phase.

**Concrete scenario:**
1. Observer is running Pass 2 checks (after Phase 3A, screenshots + gate results exist)
2. OBS-01 check: experiential scan verification
3. Orchestrator is already deploying PA auditors (Phase 3B)
4. Observer finds experiential scan was NOT recorded before PA deployment -- writes OBSERVER-STOP.md
5. But 9 PA auditors are already spawned and running

**The cost:** 9 wasted Opus agent spawns (~$30-45) because the orchestrator didn't wait for the observer to complete its verification pass before proceeding.

**Deeper problem:** The protocol says the observer "polls the build output directory on a fixed schedule (after each phase completes)" (d10-observer-protocol.md line 50). But later says it "performs discrete verification passes at phase boundaries" (line 133). The orchestrator has no WAIT mechanism -- it checks for the file and moves on. There is no synchronization primitive.

**Mitigation needed:** The orchestrator must WAIT for the observer's per-pass report file (e.g., `OBSERVER-PASS-2.md`) to exist before starting the next phase. The check becomes: "Does OBSERVER-PASS-N.md exist AND does OBSERVER-STOP.md NOT exist?" This adds ~30 seconds per phase transition (observer write time) but prevents wasted spawns.

---

## EXPLOIT 3: BV-08 80% Threshold Enables Strategic Dropping (BRIEF-DIFF GATE)

**Severity: HIGH**

**Attack vector:** The brief-diff gate (BV-08) passes at >= 80% coverage per dimension. A builder that wants to cut corners can strategically drop the HARDEST 20% of each dimension.

**Concrete scenario:** Brief specifies 5 zones, 5 background hexes, 20 typography values, 8 component types, 8 metaphor properties, and 15 disposition CSS techniques.

- **Zones:** 5/5 (can't drop zones, too visible) = 100%
- **Backgrounds:** 4/5 (drop the hardest dark-zone background) = 80% PASS
- **Typography:** 16/20 (drop all letter-spacing specs, which are hardest to get right) = 80% PASS
- **Components:** 7/8 (drop the most complex component, e.g., accordion) = 87.5% PASS
- **Metaphor:** 7/8 (drop one obscure property name) = 87.5% PASS
- **Disposition CSS:** 12/15 (drop D-04 surprise, D-07 hover, D-09 quiet zone) = 80% PASS

Result: BV-08 PASSES on all 6 dimensions. But the page has no letter-spacing variation, no accordion, a missing dark-zone background, no scroll surprise, no hover states, and no quiet zone. The 20% that was dropped is exactly the 20% that makes a page DESIGNED vs ASSEMBLED.

**Why 80% is the wrong threshold:** It aligns with "80% creative authority," but creative authority means CHOOSING DIFFERENTLY, not CHOOSING TO OMIT. A builder with 80% authority should implement ALL brief specs (100% coverage) but may IMPLEMENT THEM DIFFERENTLY (reinterpreting the spec). The threshold conflates omission with reinterpretation.

**Interaction with INTENT narration:** The narration protocol (D2) is supposed to catch this -- the builder writes `<!-- INTENT [NOT-IMPL] -->` for deliberate omissions. But BV-08 currently checks coverage BEFORE consulting INTENT comments. The gate code in d2-brief-diff-gate.md shows the parser, but the actual BV-08 function in the gate code does NOT consume `parseIntentComments()` output to adjust its scoring. The impl-gate-report.md mentions "Items covered by `<!-- INTENT [NOT-IMPL] ... -->` comments are excluded from the droppedItems list" but this is aspirational -- the actual BV-08 function does not call `parseIntentComments`.

**Mitigation needed:** (1) BV-08 must actually call `parseIntentComments()` and subtract NOT-IMPL items from the denominator. (2) Raise the threshold to 90% for backgrounds and zones (structural), keep 80% for typography and disposition CSS (style choices). (3) Add a FLOOR: coverage below 60% on ANY dimension is BLOCKING, not just RECOMMENDED.

---

## EXPLOIT 4: Perfunctory Narration Passes GR-83 (INTENT COMMENTS)

**Severity: HIGH**

**Attack vector:** GR-83 checks: existence, >= 15 items, at least 1 disposition tag, at least 1 NOT-IMPL. The gate explicitly acknowledges it cannot check substance (d2-narration-spec.md Section 7.1). A builder writes:

```html
<!-- INTENT [D-01] .zone-1 | implemented content register reading | brief T2 | -- -->
<!-- INTENT [D-02] .zone-2 | implemented room perception | brief T2 | -- -->
<!-- INTENT [D-03] .zone-3 | implemented signing frame | brief T2 | -- -->
<!-- INTENT [D-04] .zone-4 | implemented second-half moment | brief T2 | -- -->
<!-- INTENT [D-05] .zone-5 | implemented reader's scroll | brief T2 | -- -->
<!-- INTENT [D-06] .zone-1 | implemented negative space | brief T2 | -- -->
<!-- INTENT [D-07] .zone-1 | implemented edge intentionality | brief T2 | -- -->
<!-- INTENT [D-08] .zone-1 | implemented skeleton test | brief T2 | -- -->
<!-- INTENT [D-09] .zone-4 | implemented quiet zone | brief T2 | -- -->
<!-- INTENT [SCAFFOLD] body | implemented scaffolding | brief T1 | -- -->
<!-- INTENT [METAPHOR] :root | implemented metaphor naming | brief T1 | -- -->
<!-- INTENT [SCAFFOLD] .grid | used grid layout | CREATIVE | -- -->
<!-- INTENT [SCAFFOLD] .zone-3 | dark zone for contrast | CREATIVE | -- -->
<!-- INTENT [SCAFFOLD] footer | footer treatment | CREATIVE | -- -->
<!-- INTENT [SCAFFOLD] header | header treatment | CREATIVE | -- -->
<!-- INTENT [NOT-IMPL] hover states | brief D-07 | time constraint | -- -->
```

This passes GR-83: 16 items, multiple disposition tags, has NOT-IMPL. Every item says "implemented X" with no actual rationale, no trade-off, no specific CSS decision. The brief-diff gate gets zero diagnostic value from these comments.

**Worse:** These INTENT comments now MASK genuine omissions. The builder wrote `<!-- INTENT [D-04] .zone-4 | implemented second-half moment -->` but the page has NO scroll surprise. BV-08 sees an INTENT comment covering D-04 and excludes it from the "dropped" list. The genuine omission is invisible.

**Why 15 is the wrong minimum:** The narration spec says 17-22 is the sweet spot. But GR-83 triggers FAIL at < 15 (not < 17). A builder producing exactly 15 perfunctory comments is in the "under-narrated" zone by the spec's own definition but passes the gate. The gate and the spec disagree on the minimum.

**Mitigation needed:** (1) Add a SUBSTANCE check: each INTENT comment's "decision" field must be >= 20 characters (prevents "implemented X" one-liners). (2) Add a UNIQUENESS check: no two INTENT comments should share > 70% of their "decision" text (prevents copy-paste with zone numbers swapped). (3) Raise minimum from 15 to 17 to match the spec's own sweet-spot lower bound. (4) BV-08 should VERIFY that NOT-IMPL claims are plausible by checking if the claimed omission actually IS absent from the CSS (a NOT-IMPL for "hover states" that has hover CSS in the output is a LIE).

---

## EXPLOIT 5: Mini-PA Systematic Blind Spots (MINI-PA / MODE 2.5)

**Severity: HIGH**

**Attack vector:** Mini-PA uses 3 auditors (A, C, G) with 15 questions at 1440px only. It explicitly CANNOT detect: responsive failures, typography detail, flow/pacing, grid regressions, consistency/rhythm (ideology-friction-fix.md Section 4, "Mini-PA Limitations").

**The exploit:** A builder whose REFINE cycle introduces:
1. A broken 768px layout (stacked grid doesn't reflow) -- Mini-PA blind
2. Typography degradation (all text becomes 16px/400 weight, the Flagship failure mode) -- only Auditor B catches this
3. Flow disruption (sections feel disconnected, no density arc) -- only Auditor D catches this
4. Grid removal (was 3-column bento, now single-column everywhere) -- only Auditor E catches this

Mini-PA PASSES because Auditors A, C, G see a reasonable 1440px page. The responsive disaster, typography flattening, and structural regression are invisible.

**The friction-fix doc acknowledges this:** "These are acceptable omissions for REFINE validation because responsive issues don't change in a CSS-only REFINE." But the two-pass architecture means Pass B writes CSS extensively. And the REFINE builder ALSO writes CSS extensively. CSS-only changes CAN break responsive layouts (media query specificity conflicts, percentage-based widths altered by new parent styles).

**When Mini-PA falsely validates:** Any time a REFINE builder's CSS changes interact with responsive breakpoints. This is not rare -- it is the NORMAL case for substantive CSS changes. Mini-PA is designed for trivial polish, but it is positioned as the validation tool for REFINE cycles that are supposed to be the pipeline's "highest-value phase."

**Mitigation needed:** (1) Mini-PA must include at least the 768px cold-look screenshot (even if not the full scroll-through). One screenshot catches catastrophic responsive failures. (2) Add PA-08 (font size distinction) to the Mini-PA question set -- this is the single question that catches the Flagship typography failure mode. (3) Document clearly: Mini-PA is for MECHANICAL fixes only. Any COMPOSITIONAL REFINE must use Mode 4.

---

## EXPLOIT 6: IMPROVEMENTS Gaming Forces Unnecessary REFINE (CONVERGENCE MODEL)

**Severity: MEDIUM**

**Attack vector:** The builder writes 3+ HIGH-confidence IMPROVEMENTS items, triggering a REFINE override even when PA-05 >= 3.5 (ideology-self-prompting.md Section 4). The builder cannot know this threshold is 3 (it lives in the orchestrator), but LLM builders routinely produce 5-7 HIGH items because the recipe says "rate your confidence" and the recipe's own examples show mostly HIGH ratings.

**The cost:** Every initial build that produces a good page (PA-05 >= 3.5) AND has a thorough builder (which is what we WANT) will trigger an UNNECESSARY REFINE cycle. The override punishes exactly the behavior we desire: a builder that genuinely sees improvement potential.

**Quantified waste:** If 60% of builds produce >= 3 HIGH items (likely, given the examples), and 30% of initial builds hit PA-05 >= 3.5, then ~18% of all builds trigger a needless REFINE cycle (~$50-65 + 60-90 min each). Over 10 builds: ~$100 and ~12 hours wasted on already-good pages.

**The ideology contradiction:** The convergence model says "single-pass RELEASE is the welcome exception." But the IMPROVEMENTS override makes single-pass RELEASE nearly impossible for any builder that takes the exercise seriously. The system punishes thoroughness.

**Risk 3 in the self-prompting doc (infinite loops) is partially mitigated** by limiting override to cycle 1. But the first-cycle waste is unmitigated.

**Mitigation needed:** (1) Raise the override threshold from 3 to 5 HIGH-confidence items. (2) Add a substance filter: the orchestrator should check whether the HIGH items describe COMPOSITIONAL changes (worth a REFINE) vs MECHANICAL changes (not worth a full cycle -- apply directly). (3) Allow RELEASE with IMPROVEMENTS noted: "RELEASE with 4 HIGH-confidence items logged for future reference" instead of forcing a $55 REFINE cycle.

---

## EXPLOIT 7: REFINE Builder Can Read Raw INTENT Comments (COMPOUND: NARRATION + TWO-PASS)

**Severity: MEDIUM**

**Attack vector:** The narration protocol places `<!-- INTENT [NOT-IMPL] ... -->` comments in the HTML with DIAGNOSTIC vocabulary ("would reconsider if Z3 bg lightens above #333", "adds 40 CSS lines for zero perceptual return"). The REFINE builder receives Pass A HTML -- which contains all INTENT comments.

REFINE isolation rules prohibit diagnostic language in REFINE inputs. But INTENT comments containing phrases like "zero perceptual return," "would increase to 20+," and "adds 40 CSS lines" are exactly the diagnostic vocabulary that REFINE isolation is supposed to prevent. The REFINE builder reads these as a FIX LIST disguised as narration.

**The NOT-IMPL cluster is the worst offender:** The narration spec shows this example:
```html
<!-- INTENT [NOT-IMPL] hover states for .bento-cell | brief Step 2.7 | CHOSE not to implement -- Z3 dark zone makes hover color shifts imperceptible against near-black; would add 40 CSS lines for zero perceptual return | would reconsider if Z3 bg lightens above #333 -->
```

The REFINE builder reads this and now knows: (1) hover states are missing, (2) Z3 is dark, (3) the previous builder considered 40 CSS lines too expensive, (4) the threshold for reconsideration is bg > #333. This is a COMPLETE diagnostic brief for the REFINE builder to "fix" -- exactly what REFINE isolation was designed to prevent.

**Mitigation needed:** (1) Strip INTENT comments from HTML before routing to REFINE builder. The orchestrator already extracts CONVICTION and SELF-EVALUATION; add INTENT stripping to the same extraction step. (2) Or: route INTENT comments ONLY to the brief-diff gate and observer, not through the HTML artifact.

---

## EXPLOIT 8: Observer Cannot Verify What It Cannot Observe (OBSERVER)

**Severity: MEDIUM**

**Attack vector:** The observer checks 30 binary items from artifacts. But the most consequential orchestrator decisions are INTERNAL -- they leave no artifact trace:

1. **Mode Selection (APPLIED vs COMPOSED):** The orchestrator decides mode based on content complexity. No artifact records the REASONING. The observer can see which mode was selected (from the tracker) but cannot verify it was correct.

2. **Experiential scan genuineness:** OBS-03 checks timing (>= 90 seconds) and OBS-04 checks language ("I see" vs "HTML contains"). But a sophisticated orchestrator can write pixel-based language after reading the source code: "I see the header text rendered at 42px" (actually read from CSS, not from the screenshot). The observer has no way to distinguish genuine visual inspection from source-code-informed fabrication.

3. **REFINE builder prompt content:** OBS-07 checks for prohibited vocabulary in REFINE inputs. But the orchestrator constructs the REFINE prompt dynamically. The observer would need to read the REFINE builder's complete prompt to verify isolation -- but the prompt is an in-memory string passed to the Task tool, not a file on disk. The observer can only check files that the orchestrator CHOSE to write.

**Core limitation:** The observer is fundamentally limited to what the orchestrator EXTERNALIZES. An orchestrator that externalizes correctly but acts incorrectly is invisible to the observer. This is the "security theater" risk: the observer provides compliance theater (30 green checks) while the actual process had shortcuts.

**Mitigation needed:** (1) Require the orchestrator to WRITE the REFINE builder prompt to a file BEFORE spawning the REFINE builder. The observer reads this file for OBS-07. (2) Require screenshots to include a visible timestamp overlay (injected via Playwright CSS before capture). This makes fabricated screenshots (served from cache) detectable. (3) Accept the limitation honestly: document that the observer verifies ARTIFACTS not INTENT, and add a "% of orchestrator decisions verifiable" metric to the observer report.

---

## EXPLOIT 9: Complexity Is Now The Biggest Attack Surface (COMPLEXITY)

**Severity: CRITICAL**

**Attack vector:** Pipeline v5 adds: two-pass builder (2 new files, ~1,092 lines), observer agent (30 checks, 467-line protocol), brief-diff gate (571-line function), narration protocol (36 recipe lines + 90-line gate), convergence model (15 edits across 5 files), IMPROVEMENTS comment (93 lines), Mini-PA (Mode 2.5 spec), complexity reduction (-1,806 lines). Net: pipeline grows by ~300-500 lines of operational spec.

**The complexity inventory (post-v5):**
- Gate count: 54 -> 56 (BV-08, GR-83; plus GR-65 proposed but not yet implemented)
- Agent count per build: 15 -> 16-18 (observer + Pass B builder + possible Mini-PA agents)
- Builder comment artifacts: 3 -> 5 (CONVICTION, SELF-EVALUATION, IMPROVEMENTS, INTENT x 15-22, RESIDUAL)
- Orchestrator decision points: ~12 -> ~18 (two-pass handoff, structural check, observer sync, IMPROVEMENTS override, R-A vs R-C REFINE targeting, Mini-PA escalation)
- Execution tracker fields: 59 -> ~85 (Phase 2A, 2A-gate, 2B, observer fields, convergence metrics, builder idea tracking)

**The attack:** No single agent can hold all of this in context. The orchestrator now manages:
1. Phase 0-1 (content analysis, brief assembly, BV verification)
2. Phase 2A (spawn Pass A builder, validate handoff, extract conviction)
3. Phase 2A-gate (run structural check subset, decide PROCEED/RE-SPAWN/REBUILD)
4. Phase 2B (spawn Pass B builder with 9 artifacts, verify structure preservation)
5. Phase 3A (screenshots, gate runner with 56 gates, BV-08 brief-diff)
6. Phase 3B (spawn 9 PA auditors OR 3 Mini-PA auditors)
7. Phase 3C (weaver, verdict with IMPROVEMENTS override logic)
8. Observer synchronization (wait for OBSERVER-PASS-N, check for OBSERVER-STOP)
9. REFINE targeting (R-A vs R-C vs REBUILD, generative transformation of IMPROVEMENTS)
10. Iteration budget tracking (convergence metrics, diminishing returns check)

**This is 10 major responsibilities for a single agent.** The orchestrator's prompt already exceeds BV-07 (2,500 lines) -- with v5 additions, it grows further. The MANIFEST is ~1,300 lines. The orchestrator document is ~800 lines (post-reduction). Together with reference files, the orchestrator's effective context is 3,000-4,000 lines.

**Predicted failure mode:** The orchestrator will SKIP steps. Not maliciously -- through the same attention decay mechanism (D5) that the two-pass split was designed to fix in the builder. The orchestrator has its OWN attention decay problem: steps 8-10 (observer sync, REFINE targeting, convergence tracking) will receive less attention than steps 1-3 because they appear later in the protocol.

**Historical evidence:** The Gas Town build already showed orchestrator attention decay: the experiential scan was superficial (D10 finding). Adding 6 more responsibilities to the same agent makes this worse, not better.

**Mitigation needed:** This is the hardest to fix because it is architectural. Options: (1) Split the orchestrator into 2 agents: a BUILD orchestrator (Phases 0-2B) and an AUDIT orchestrator (Phases 3A-3C + REFINE). (2) Drastically simplify v5: implement ONLY the two-pass builder and observer, defer narration/brief-diff/convergence to v6. (3) Create a meta-checklist that the orchestrator runs at the END verifying it didn't skip anything (but this is exactly the D10 self-assessment problem the observer was supposed to solve).

---

## EXPLOIT 10: Convergence Language and Crystallization Language Contradict (IDEOLOGY)

**Severity: MEDIUM**

**Attack vector:** The convergence model renames SHIP/REFINE/REBUILD to RELEASE/IMPROVE/RETHINK and reframes iteration as the expected path. But the operational pipeline files still contain crystallization-era language:

1. **"Non-negotiable" appears 4 times** in MANIFEST.md (lines 62, 321, and elsewhere). Non-negotiable = crystallized. The convergence model says "the pipeline converges toward quality" but the spec says "this is non-negotiable." Converge toward WHAT exactly, if the destination is non-negotiable?

2. **Iteration budget is still a CAP, not a FLOOR.** The convergence model says "two-pass is the default" but the budget says "1 REBUILD + 2 REFINE passes MAXIMUM." A cap is a stop signal. The convergence model and the iteration budget send opposite messages: "iterate by default" vs "iterate at most 2 times."

3. **The dependency graph still has no feedback arrow.** MANIFEST's dependency graph (line 553-583) shows a linear flow: Phase 0 -> Phase 1 -> Phase 2 -> Phase 3A -> Phase 3B -> Phase 3C -> Verdict. The convergence model says iteration is the norm, but the architecture diagram shows a pipeline, not a cycle.

4. **Builder recipe still says "single-pass output target" (line 263).** The compose recipe now says Pass A, but the self-evaluation and output targets still reference single-pass metrics. A builder reading the recipe absorbs "produce a complete page in one pass" as the frame, even though v5 says Pass B will follow.

5. **PA-05 scale labels are static.** FLAT / ASSEMBLED / COMPOSED / DESIGNED describe fixed states, not trajectories. The convergence model says quality is a trajectory, but the measurement instrument classifies snapshots. You can track PA-05 over passes, but the labels themselves reinforce crystallization thinking: you ARE flat or you ARE designed. There is no "CONVERGING" label.

**Operational impact:** An orchestrator agent reads MANIFEST + orchestrator doc + convergence edits. It encounters "two-pass convergence is the default" AND "iteration budget: 2 REFINE maximum" AND "non-negotiable" AND "FLAT/ASSEMBLED/COMPOSED/DESIGNED." The mixed signals create agent confusion about whether the pipeline WANTS iteration or merely TOLERATES it. The rational agent behavior under conflicting signals is to default to the more restrictive interpretation (crystallization) because that is SAFER -- fewer decisions, fewer risks of exceeding budget.

**Mitigation needed:** (1) Remove "non-negotiable" from all quality-model language. Use it ONLY for identity constraints (soul rules) where it is genuinely absolute. (2) Change "iteration budget: maximum 2" to "convergence path: standard 2, extended 3" -- frame it as a path length, not a cap. (3) Add a feedback arrow to the dependency graph (Phase 3C -> Phase 2A for IMPROVE). (4) Update builder output targets to say "Pass A target: structural foundation (400-700 CSS lines); combined A+B target: 800-1200 CSS lines." (5) This is 5 more edits to 3 files -- which feeds back into Exploit 9 (complexity).

---

## EXPLOIT 11: Structural Check Gives False Confidence Before Pass B (TWO-PASS BUILDER)

**Severity: MEDIUM**

**Attack vector:** The Pass A structural check (d5-orchestration-protocol.md Section 3) runs GR-01-GR-10 (soul constraints), GR-51 (heading hierarchy), zone count >= 3, CSS lines >= 400, and conviction present. If all pass, the orchestrator proceeds to Pass B with confidence that the structure is sound.

But these checks miss COMPOSITIONAL structure:
- **Zone backgrounds could all be the same hex.** GR-10 checks container width, not background delta. Background delta is GR-11, which is NOT in the structural check subset.
- **Typography could be uniform.** The structural check has no typography gate. GR-45 (Typography Variation) is NOT in the subset.
- **Density arc could be flat.** No density check in the structural subset.
- **All zones could be identical layouts.** Zone count >= 3 checks existence, not differentiation.

**The result:** Pass A could produce 5 identical-looking zones (same background, same font size, same padding, same single-column layout), pass the structural check, and proceed to Pass B. Pass B is ADD-ONLY and cannot restructure. The page ships with zero compositional architecture because the structural check verified IDENTITY compliance, not COMPOSITIONAL quality.

**This is exactly the Flagship failure mode.** The Flagship passed all programmatic gates with PA-05 1.5/4. The structural check is a subset of those same gates. It will pass the same pages the full gate suite passes -- including pages with no perceptible composition.

**Mitigation needed:** Add at least GR-11 (background delta >= 15 RGB between adjacent zones) and GR-45 (>= 2 distinct typography bands) to the structural check. These two gates catch the two most common compositional failures (uniform backgrounds, uniform typography) and add < 10 seconds to the check.

---

## EXPLOIT 12: IMPROVEMENTS Override + Mini-PA Create a Perverse Loop (COMPOUND)

**Severity: HIGH**

**Attack vector:** Chain of events:
1. Builder writes 4 HIGH-confidence IMPROVEMENTS items (normal for a thorough builder)
2. PA-05 comes back 3.5 (would normally SHIP)
3. IMPROVEMENTS override triggers REFINE (4 >= 3 HIGH items)
4. REFINE builder produces improved page
5. Orchestrator decides: previous PA-05 was 3.5 (>= 3.0), use Mini-PA (Mode 2.5) per Track B
6. Mini-PA with 3 auditors, 15 questions, 1440px only
7. Mini-PA returns PA-05 3.7 (improvement confirmed)
8. But Mini-PA missed: REFINE introduced a 768px responsive regression (invisible to 1440px-only Mini-PA)
9. Page ships with a broken mobile layout

**The perverse incentive:** The IMPROVEMENTS override forced an UNNECESSARY iteration (the page was already PA-05 3.5). The unnecessary iteration introduced a REGRESSION. The Mini-PA, which is the light-weight validation tool, failed to catch the regression. The page is WORSE than it was before the IMPROVEMENTS override triggered.

**Why this is specifically a v5 problem:** In v4, PA-05 3.5 = SHIP. No iteration. No regression risk. V5 introduces the IMPROVEMENTS override, which can push a SHIP into REFINE, and Mini-PA, which validates the REFINE with less rigor. These two features, each individually reasonable, combine to create a quality-degradation path that v4 did not have.

**Mitigation needed:** (1) When IMPROVEMENTS override triggers REFINE on an already-passing page (PA-05 >= 3.5), the post-REFINE validation MUST be Mode 4, not Mini-PA. The rationale: overriding a SHIP decision requires the HIGHEST confidence that the override improved things, not the LOWEST. (2) Alternatively: IMPROVEMENTS override should never trigger REFINE when PA-05 >= 3.5. Log the ideas, note them for next content, but do not re-enter the pipeline.

---

## EXPLOIT 13: Observer and Weaver Disagree -- No Reconciliation Protocol (OBSERVER)

**Severity: MEDIUM**

**Attack vector:** The observer reports OBS-01 FAIL (experiential scan not recorded before PA deployment). The weaver has already produced a SHIP verdict based on PA-05 3.8/4. The pipeline has two contradictory signals:
- Observer: "Process was violated -- experiential scan skipped"
- Weaver: "Page is excellent -- SHIP"

**No reconciliation exists.** The observer protocol says BLOCKING violations produce OBSERVER-STOP.md and the orchestrator must address them. But if the pipeline has already completed through Phase 3C (weaver verdict), the STOP file arrives AFTER the pipeline wants to terminate. The orchestrator sees a SHIP verdict AND an OBSERVER-STOP. Which takes priority?

The observer protocol doesn't say. It describes STOP as halting the pipeline "before each phase transition," but there is no phase transition after Phase 3C -- the pipeline is done. A post-hoc BLOCKING finding has no enforcement mechanism.

**Mitigation needed:** Add explicit priority rules: (1) OBSERVER-STOP always overrides WEAVER verdict, even post-completion. If observer finds a BLOCKING violation post-Phase-3C, the pipeline status becomes "SHIP PENDING OBSERVER RESOLUTION" and the orchestrator must address the violation before finalizing. (2) Observer final report must be completed BEFORE the pipeline declares its final verdict. This means the pipeline waits for OBSERVER-REPORT.md before the orchestrator writes the final tracker entry.

---

## EXPLOIT 14: Convergence Equation Is Operationally Meaningless (CONVERGENCE MODEL)

**Severity: LOW**

**Attack vector:** The new master equation is:
```
Quality_0 = Agent Capability x Content Affordance x Spec Fidelity
Quality_n = Quality_{n-1} + Convergence(Builder_Intent, PA_Perception)
```

This equation appears in MANIFEST.md and artifact-orchestrator.md. But it has no operational instantiation. No gate checks whether `Quality_n > Quality_{n-1}`. No tracker field computes the convergence function. No agent reads this equation and makes a different decision because of it.

The equation is ASPIRATIONAL PHILOSOPHY, not OPERATIONAL PROTOCOL. In a pipeline that has proven "binary rules achieve 100% compliance; judgment rules achieve ~0%," an equation with no binary gate is a dead letter. Agents will read it, nod, and ignore it.

**What changed operationally:** The PA-05 trajectory tracking (pass-over-pass delta) is new and useful. The IMPROVEMENTS override is concrete and binary. But the equation itself is decorative -- it provides narrative justification but zero behavioral change.

**Mitigation needed:** Either (1) accept the equation as aspirational framing and stop claiming it "changes the quality model" (honest), or (2) instantiate it as a gate: GR-XX "convergence check" -- if REFINE occurred, PA-05 must increase by >= 0.3 or the page does not ship (the diminishing returns check already does this, so the equation adds nothing the existing check doesn't cover).

---

## Summary Table

| # | Exploit | Feature(s) | Severity | Mitigation Complexity |
|---|---------|-----------|----------|----------------------|
| 1 | Pass B CSS specificity bypass | Two-Pass Builder | CRITICAL | HIGH -- requires computed style comparison |
| 2 | Observer STOP file race condition | Observer | HIGH | MEDIUM -- add synchronization wait |
| 3 | BV-08 strategic 20% dropping | Brief-Diff Gate | HIGH | LOW -- adjust thresholds, add floor |
| 4 | Perfunctory narration passes GR-83 | Narration | HIGH | MEDIUM -- add substance/uniqueness checks |
| 5 | Mini-PA misses responsive + typography | Mini-PA | HIGH | LOW -- add 768px screenshot + PA-08 |
| 6 | IMPROVEMENTS forces unnecessary REFINE | Convergence + Self-Prompting | MEDIUM | LOW -- raise threshold, allow RELEASE+log |
| 7 | REFINE reads INTENT diagnostic language | Narration + Two-Pass | MEDIUM | LOW -- strip INTENT before REFINE routing |
| 8 | Observer limited to externalized artifacts | Observer | MEDIUM | MEDIUM -- require prompt file write |
| 9 | Pipeline complexity exceeds agent capacity | All v5 features | CRITICAL | HIGH -- architectural: split orchestrator or defer features |
| 10 | Convergence/crystallization language clash | Ideology Redesign | MEDIUM | LOW -- 5 targeted text edits |
| 11 | Structural check misses compositional failures | Two-Pass Builder | MEDIUM | LOW -- add GR-11 + GR-45 to subset |
| 12 | IMPROVEMENTS override + Mini-PA = regression path | Convergence + Mini-PA | HIGH | LOW -- require Mode 4 after SHIP-override REFINE |
| 13 | Observer/Weaver disagreement unresolved | Observer | MEDIUM | LOW -- add priority rules |
| 14 | Convergence equation is decorative | Convergence Model | LOW | NONE -- accept as framing |

---

## Cross-Cutting Finding: The Complexity Trap

V5 was designed to address 14 crack dimensions. Each crack dimension got its own feature. Each feature is individually well-designed. But the ensemble creates a system that:

1. **Exceeds single-agent comprehension.** No orchestrator can reliably execute 10 major responsibilities across 85 tracker fields with 56 gates and 5 builder comment artifacts.

2. **Has more interaction effects than primary effects.** Exploits 7, 9, 10, and 12 are all COMPOUND failures -- they only emerge when two features interact. The design documents considered each feature in isolation. No document considers the feature ENSEMBLE.

3. **Increases the surface area for the exact problem it was built to solve.** D5 (attention decay) is addressed by the two-pass split. But the orchestrator's OWN attention decay problem is worsened by the 6 additional responsibilities v5 adds. The cure reproduces the disease at a different level.

**Recommendation:** Implement v5 in 2 waves:
- **Wave 1 (highest ROI, lowest risk):** Two-pass builder + observer + complexity reduction. These are the 3 features with the strongest evidence base and the lowest interaction risk.
- **Wave 2 (after Wave 1 validated on 2-3 builds):** Narration + brief-diff + convergence + Mini-PA + IMPROVEMENTS. These features are individually valuable but create compound failure modes that should be observed empirically before adding more.

---

*End of adversarial stress test. 14 exploits identified, 2 CRITICAL, 5 HIGH, 6 MEDIUM, 1 LOW.*
