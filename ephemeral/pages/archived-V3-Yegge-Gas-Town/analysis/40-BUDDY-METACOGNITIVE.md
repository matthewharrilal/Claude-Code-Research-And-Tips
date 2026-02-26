# 40-BUDDY-METACOGNITIVE: Holistic Analysis of Five-Wave Pipeline Changes

**Date:** 2026-02-25
**Analyst:** buddy-metacognitive (Opus)
**Scope:** Step back from implementation details. Assess whether the combined changes achieve their goals, identify emergent interactions, and surface second-order effects.

---

## 1. DO THE CHANGES ACTUALLY FIX THE THREE ROOT ISSUES?

### 1.1 Root Issue 1: Priority Inversion

**Claim:** The pipeline previously flagged invisible CSS (4% opacity tints, never-rendered fonts) as REQUIRED failures but had no gate for human readability.

**What was added:**
- Builder Q0/Q1 legibility self-check (Step 5.1, 5.2)
- Experiential pass for all 9 auditors (pa-deployment.md Section 2.5)
- Weaver usability priority override (pa-weaver.md Section 5.0)
- Circuit breaker for BLOCKING-USABILITY (MANIFEST.md Phase 3B)
- GR-60 WCAG contrast gate (gate-runner-core.js)

**End-to-end trace — "Illegible chart ships":**

1. **Builder writes illegible chart** (small labels, poor contrast against zone background).
2. **Q0 (Step 5.1):** Builder asks "Can body text be comfortably read at arm's length?" This MIGHT catch it — but "arm's length" is ambiguous on a screen, and chart labels are not "body text." Q1 (Step 5.2) is stronger: "Can you identify what each visual element is communicating within 5 seconds?" This directly targets charts. **BUT** — both Q0 and Q1 are *self-checks*. The builder wrote the chart and knows what it says. Self-assessment of one's own output is inherently weak. The builder will likely answer "yes, I can read it" because they know what it says. **RISK: Q0/Q1 self-checks are necessary but insufficient.** They catch gross errors (text accidentally set to 8px) but miss marginal cases (chart labels at 10px on a complex background).

3. **GR-60 (WCAG contrast):** This is programmatic and unbiased. If chart text has contrast ratio below 4.5:1 (or 3.0:1 for large text), GR-60 catches it. **However**, GR-60 tests the *computed* foreground and background colors. If the chart is an SVG with complex layering, the "effective background" walk-up may not correctly identify the actual visual background behind the text. The gate checks `text` and `tspan` elements (line 697), which is good for SVG. **RISK: GR-60 is strong for CSS-styled text, weaker for complex SVG/canvas charts.** Raster image charts are invisible to it entirely.

4. **Experiential pass (all 9 auditors):** Each auditor reads screenshots and reports illegible, effortful, and skipped text BEFORE answering questions. This is the strongest defense — 9 independent observers reporting what they can't read. **But** they're looking at screenshots (PNGs), not the live page. Screenshot resolution, zoom level, and compression could obscure the issue. Also, auditors are instructed to look for "text" — chart annotations, axis labels, and data labels might not register as "text" to all auditors. PA-81 (Auditor B) specifically asks about charts: "Can you answer 'What is the ONE thing this element wants me to know?' in under 5 seconds?" **This IS the catch-all.** But only Auditor B has PA-81.

5. **ME-009 aggregation (3/9 threshold):** If 3+ auditors flag the same text element, it's CONFIRMED illegibility. If 1-2 flag it, it's POSSIBLE. **For chart labels specifically:** only Auditor B has PA-81 (the chart question). Other auditors might skip chart labels in their experiential pass because they're not "text" in the traditional sense. **RISK: The 3/9 threshold might not trigger for chart-specific illegibility, since only 1 auditor (B) has a chart-specific question.** The experiential pass helps, but chart labels are a specialized concern.

6. **Weaver usability priority override:** "Is there ANY finding from ANY auditor that describes something a reader CANNOT READ?" If Auditor B flags chart illegibility, the weaver makes it Fix #1. **This works — IF Auditor B catches it.** Single-auditor dependency.

7. **Circuit breaker:** Orchestrator scans all 9 reports for BLOCKING-severity findings related to "text legibility, information accessibility, content completeness, or navigation." If ANY auditor flags BLOCKING usability, it's elevated. **This is a safety net, but it requires the auditor to use the word "BLOCKING" or similar severity language.** The experiential pass instruction says "Report THREE things: Illegible text, Effortful text, Skipped text" — it doesn't ask auditors to rate severity. The circuit breaker is looking for something the experiential pass doesn't produce.

**VERDICT ON PRIORITY INVERSION FIX:**
- **Strong for: body text, headings, paragraph text** — multiple overlapping defenses (Q0, GR-60, experiential pass, 9 observers).
- **Adequate for: charts and diagrams** — PA-81 (single auditor B), experiential pass (all 9), GR-60 (for CSS/SVG text only).
- **Weak for: raster image charts** — nothing catches illegible text baked into a PNG/JPG. GR-60 can't inspect it, auditors see it in screenshots but might not flag it unless extremely bad.
- **GAP: The circuit breaker expects BLOCKING-severity language that the experiential pass doesn't generate.** The experiential pass produces descriptive observations ("I could not read the chart labels in the third section"); the circuit breaker expects categorical severity ("BLOCKING: chart labels illegible"). There's a format mismatch between what the experiential pass produces and what the circuit breaker consumes. The weaver bridges this gap by interpreting experiential observations as usability findings — but the circuit breaker is BEFORE the weaver (it's an orchestrator step between PA reports and weaver spawn).

**RECOMMENDATION:** The circuit breaker should scan for experiential pass *content* (keywords like "illegible," "could not read," "skipped text"), not just BLOCKING severity labels. Alternatively, give auditors a severity scale in the experiential pass — but that adds complexity and risks turning the observation exercise into a judgment exercise, defeating its purpose.

---

### 1.2 Root Issue 2: Spec Bloat (401 False Violations)

**Claim:** GR-05 and GR-06 generated ~388 of 401 false violations. The split (GR-05a visible / GR-05b advisory) and the `document.fonts.check()` fix should eliminate them.

**Analysis:**

**GR-05 split (visible cold vs sub-perceptual cold):**
- Old behavior: ANY cold color (blue > red+10, blue > green+10) is FAIL.
- New behavior: `effectiveVisibility = alpha * max(|B-R|, |B-G|)`. If > 20: GR-05a FAIL (REQUIRED). If <= 20: GR-05b FAIL (ADVISORY only).
- This is a clean fix. Sub-perceptual cold tints (alpha 0.02, or delta 3) will no longer trigger REQUIRED failures. The threshold of 20 is reasonable — a fully opaque color with only a 20-point blue skew is barely perceptible.
- **RISK: Threshold 20 might be too generous.** A color with alpha 1.0 and B-R = 15 has effectiveVisibility = 15 < 20 = ADVISORY. That's a visible cold tint being ignored. But the `isCold()` function requires B > R+10 AND B > G+10, so a 15-point difference is marginal. **Acceptable risk.**

**GR-06 rendered font fix:**
- Old behavior: ANY non-trinity font in `fontFamily` computed style = FAIL, even if it's a CSS fallback that never renders.
- New behavior: `document.fonts.check('16px "fontname"')` — only fonts that actually loaded and rendered count as violations.
- The final verification report cites "eliminates 181 false violations from fallback fonts." This is the correct fix.
- **RISK: `document.fonts.check()` may return false negatives.** If a font is in the system font list but not explicitly loaded via @font-face, `document.fonts.check()` might still return true. This is actually correct behavior — system fonts that render ARE violations if they're not in the trinity. The risk is low.

**GR-14 fix (visual gap measurement):**
- Old behavior: Used `body.getBoundingClientRect()` which included scrollbar/padding, producing inflated measurements.
- New behavior: Uses `document.documentElement.scrollHeight` and scoped section selection (`:scope > section` from main/body).
- Also adds structural transition detection: if a gap contains a visually distinct sibling element (background differs by 15+ RGB from both neighbors), it's treated as a structural transition and exempted.
- **This is well-designed.** The structural transition exemption prevents false positives from intentional visual separators.

**Remaining ~13 false violations:**
The final verification estimates 0-5 remaining REQUIRED violations on a typical page. Sources of remaining false positives:
- GR-07 (pure black/white) — now RECOMMENDED, not REQUIRED. Good.
- GR-08 (decorative elements) — still REQUIRED. Heuristic detection of standalone `<hr>`, empty spacer divs, icon-only elements. Could produce false positives on intentional visual separators that aren't wrapped in structural elements. **Low risk.**
- GR-10 (cross-page DNA) — 9 sub-checks, all must pass. h3 italic, body line-height >= 1.6, heading hierarchy, callout border 4px, ::selection red, :focus-visible 3px, skip link, paragraph max-width. These are reasonable checks but any ONE false positive fails the entire gate. **The composite nature of GR-10 is a fragility point — one unexpected sub-check failure blocks the whole gate.**

**VERDICT ON SPEC BLOAT FIX:**
- **Expected reduction: ~388/401 = 97%.** The two dominant false-positive sources (sub-perceptual cold colors, fallback fonts) are directly addressed.
- **Remaining risk: GR-10 composite gate.** If any of its 9 sub-checks produces a surprise false positive, it's a REQUIRED failure. Consider whether GR-10 should be split into individual sub-gates so one failure doesn't cascade.
- **Overall: STRONG FIX.** The verification estimates 0-5 remaining violations, which is a dramatic improvement and within acceptable noise.

---

### 1.3 Root Issue 3: Anti-Loss Not Working

**Claim:** 25 documented anti-loss mechanisms existed but weren't properly applied in spec files.

**What was done:**
- Pre-flight audit (MUST-00) verified all 8 HIGH RISK mechanisms across all 10 spec files
- M-04 (information isolation): Verified gate thresholds absent from auditor-facing files, calibration data absent from pa-questions.md Sections 1-3
- M-06 (result schema): All 35 `results.push()` calls use correct 5-field schema
- M-11 (fresh-eyes): Zero pipeline history, mechanism counts, or tier definitions in auditor sections
- M-12 (warm palette lock): Calibration ranges (not binary thresholds) in builder recipe
- M-13 (binary rules): REQUIRED and RECOMMENDED gate arrays match manifest exactly
- M-19 (propagation): All 6 function signatures present and match documented execution order
- M-20 (observation verbs): Experiential pass uses "Look at", "READ", "Report" — zero compliance verbs
- M-22 (9-auditor deployment): 69 questions, consistent assignments verified across 4 files

**Analysis:**

The verification report (37-FINAL-VERIFICATION.md) is comprehensive — 18/18 checks pass. The anti-loss mechanisms are now verified present and correctly applied.

**But "present and correct" is not "exercised."** The mechanisms protect against specific failure modes. Are those failure modes actually tested?

- **M-04 (information isolation):** The test is negative — "no gate thresholds in auditor files." This is a static property, verifiable once. EXERCISED by every pipeline run (auditors either see thresholds or don't).
- **M-06 (result schema):** Structural — every gate result has the correct shape. EXERCISED by every gate run.
- **M-13 (binary rules):** The REQUIRED_GATES and RECOMMENDED_GATES arrays are correct. EXERCISED by GR-48 (coverage gate).
- **M-20 (observation verbs):** The experiential pass uses observation language. EXERCISED when auditors actually run. **But** — if an auditor's LLM ignores the observation framing and uses compliance language anyway, nothing detects this. The mechanism protects the *input* (instructions use correct language) but not the *output* (auditor response uses correct language).

**VERDICT ON ANTI-LOSS FIX:**
- **Static mechanisms (file structure, content isolation, schema correctness): STRONG.** Verified once, hold indefinitely.
- **Dynamic mechanisms (observation verbs, fresh-eyes): ADEQUATE.** The instructions are correct but agent compliance is not verified at runtime. A future enhancement could add a guardrail that checks auditor output for compliance language.
- **Overall: The pre-flight audit + final verification is rigorous. The mechanisms are correctly placed. The gap is runtime enforcement, not specification correctness.**

---

## 2. EMERGENT PROBLEMS FROM COMBINED CHANGES

### 2.1 ME-005 MECHANICAL Exception + ME-002 Usability Priority Override

**Scenario:** Identity gate GR-01 (border-radius) fails. Gate runner auto-classifies it as MECHANICAL (fix requires 1 CSS line). Simultaneously, Auditor B reports "chart labels are illegible" in the experiential pass. The weaver has ME-002 (usability priority override): "Is there ANY finding a reader CANNOT READ?" = Fix #1.

**What happens:**
1. Gate runner verdict: REFINE (not REBUILD, because failure is MECHANICAL).
2. Weaver receives: gate results (1 MECHANICAL identity failure) + 9 auditor reports (1 usability finding).
3. ME-002 says: usability finding is Fix #1 regardless of gate status.
4. ME-005 says: MECHANICAL identity failure = REFINE, not REBUILD.

**These are COMPATIBLE.** ME-005 affects the REBUILD/REFINE boundary. ME-002 affects fix ORDERING within a REFINE verdict. They don't conflict — the verdict is REFINE (from ME-005), and within that REFINE, the usability fix is #1 (from ME-002).

**HOWEVER:** What if the border-radius fix is trivial (1 line) but the illegibility fix is STRUCTURAL (requires HTML restructuring)? The verdict says REFINE (which implies targeted CSS edits), but the highest-priority fix requires structural work. **The REFINE protocol doesn't account for STRUCTURAL fixes.** Pa-weaver.md Section 3 diagnostic vocabulary defines STRUCTURAL as "reorganize zones, boundaries, or grids" — but SHIP WITH FIXES requires all fixes to be MECHANICAL.

**RISK:** A REFINE verdict with a STRUCTURAL usability fix as Fix #1 creates ambiguity. Is it still REFINE, or should it escalate to REBUILD? The current spec doesn't address this. **Recommendation: Add a rule — if the usability priority override produces a STRUCTURAL or COMPOSITIONAL fix, the verdict escalates to REBUILD regardless of gate classification.**

### 2.2 ME-001 Experiential Pass + ME-009 Aggregation (3/9 Threshold)

**Scenario:** 2 auditors report "I could not read the axis labels on the chart in scroll-05." 7 auditors don't mention it.

**What happens under ME-009:**
- 2/9 = POSSIBLE issue. Weaver investigates but doesn't automatically elevate.

**Is 2/9 correct here?** The 7 who didn't mention it might not have looked at the chart carefully — their experiential pass instruction says "try to READ every piece of text," but chart axis labels are easy to gloss over. The 2 who flagged it might be the only ones who actually tried to read the chart. **The threshold punishes thoroughness** — more careful auditors produce more findings, but if fewer than 3 agree, the finding is downgraded.

**Counter-argument:** If 7 out of 9 observers CAN read the chart labels, then maybe they ARE readable and the 2 dissenters are being overly strict. The 3/9 threshold is designed to filter noise.

**The real issue is content-type sensitivity.** Chart labels are a specialized concern. Most auditors focus on body text, headings, and callouts. Chart labels are a niche within the page. **A 3/9 threshold works for ubiquitous elements (body text) but may be too high for specialized elements (chart annotations, table headers, footnotes).** PA-81 (Auditor B only) is the specific chart question, but the experiential pass is meant to be universal.

**RISK: Moderate.** The weaver has discretion to investigate POSSIBLE findings. The ME-002 priority override says "ANY finding a reader CANNOT READ." If even 1 auditor reports chart illegibility, and the weaver determines it's a genuine readability issue, ME-002 kicks in. The 3/9 threshold is a GUIDE for the weaver, not a hard gate. **The interaction is safe because the weaver retains judgment authority.**

### 2.3 GR-05 Split + GR-60 WCAG

**Can a color pass GR-05a (visible, warm) but fail GR-60 (insufficient contrast)?**

Yes, absolutely. Example:
- Text color: `rgb(180, 160, 140)` (warm brown)
- Background: `rgb(200, 185, 170)` (warm cream)
- GR-05a: Not cold (R > B, so `isCold()` returns false). PASS.
- GR-60: Contrast ratio = `relLum(180,160,140)` vs `relLum(200,185,170)`. Both are mid-range luminance values. The contrast ratio would be approximately 1.3:1 — far below the 4.5:1 WCAG AA requirement. FAIL.

**Is this a problem?** No — this is CORRECT behavior. GR-05a checks warmth (no cold blues), GR-60 checks contrast (readability). A warm color that's too close to its background is warm but illegible. Both gates serve different purposes and their results are meaningful. **This is complementary, not conflicting.**

**The only risk:** A builder who passes GR-05a might not understand why GR-60 fails, since both involve color. The gate names and descriptions are clear enough: "Warm Palette (Visible)" vs "Text Contrast Legibility (WCAG AA)." **No action needed.**

---

## 3. PIPELINE EXECUTION IMPACT

### 3.1 Total Execution Time

**Experiential pass time cost:**
- Each auditor reads all screenshots THEN performs experiential pass THEN answers questions.
- The experiential pass is "look at screenshots as a READER, report illegible/effortful/skipped text."
- Time estimate: 1-2 minutes per auditor for the experiential observation. Since all 9 run in parallel, this adds 1-2 minutes to the wall clock (not 18 minutes).
- **Correction to the briefing question:** "2 minutes per auditor x 9 auditors = 18 minutes" assumes SERIAL execution. Auditors run in PARALLEL (pa-deployment.md Section 1.1 confirms). The experiential pass adds ~2 minutes to each auditor's individual runtime, but since they're parallel, it adds ~2 minutes to wall clock. **Negligible impact on total pipeline time.**

**Gate runner time:**
- GR-60 WCAG contrast gate iterates over text elements and computes contrast ratios. The DOM walk for effective background adds per-element cost. For a typical page with ~200-500 text elements, this is 1-3 seconds in Playwright. **Negligible.**
- GR-05 split adds minimal overhead (the cold color check already existed; the split just partitions results).
- GR-14 fix adds structural transition detection (DOM sibling walk), but only at section boundaries (~5-10 per page). **Negligible.**

**Total execution time impact: +2-3 minutes on a 80-105 minute pipeline.** Approximately 2-3% increase. **No concern.**

### 3.2 Token Budgets

**MECHANICAL exception in verdict logic:** Adds ~15-20 lines of logic to the gate runner's verdict summary section (lines 780-815). This is JavaScript, not LLM tokens. **No token impact.**

**Circuit breaker orchestrator step:** The orchestrator scans 9 auditor reports for BLOCKING-severity findings before spawning the weaver. This is a text-search step, not an LLM invocation. **No token impact.**

**Experiential pass in auditor reports:** Each auditor's report now has an additional "## 0. Experiential Pass" section (~5-10 lines). The weaver receives all 9 reports + integrative report. Total additional content for weaver: ~45-90 lines of experiential observations. The weaver's existing context window needs to accommodate this. Given that the weaver already receives ~69 question answers + gestalt report, adding ~90 lines is a ~15-20% increase in input. **Moderate concern — but within typical Opus context limits.**

### 3.3 First Run Coherence

**Will agents encounter unfamiliar instructions and lose coherence?**

This is the most important execution-impact question.

**Builder:** Sees Q0 and Q1 as new self-evaluation steps (Steps 5.1, 5.2). These are formatted in the same recipe style as existing steps. The renumbering (old 5.1-5.5 = new 5.3-5.7) is clean. **Low risk — the builder follows the recipe sequentially.**

**PA Auditors:** See the experiential pass instruction in their prompt. This is a NEW instruction that doesn't exist in any prior run. Auditors are LLM agents who follow instructions well — but the instruction is qualitatively different from their question-answering task. "Look at screenshots as a READER, not as an evaluator" is a mode shift. Auditors who are primed to be evaluators (by the rest of their prompt) may struggle to switch modes. **Moderate risk — some auditors may produce superficial experiential passes or skip it entirely.**

**Weaver:** Sees new Section 5.0 (usability priority override) and Section 4.5 (experiential pass aggregation). The weaver is already the most complex agent in the pipeline. Adding two new decision rules increases cognitive load. **The weaver needs to: (1) verify manifests, (2) score PA-05 with cross-validation resolution, (3) score Tier 5, (4) aggregate experiential pass results, (5) apply usability priority override, (6) classify fix types, (7) synthesize emotional arc, (8) produce ship decision.** That's 8 distinct analysis tasks. **Risk of task dilution — the weaver may shortchange some tasks to complete within context limits.**

**Orchestrator:** Must now run the circuit breaker scan between PA reports and weaver spawn. This is a new step in the orchestration flow. If the orchestrator is an LLM agent (rather than scripted), it needs to parse 9 reports for BLOCKING-severity findings — a pattern-matching task that LLMs can do but may do imperfectly. **If the orchestrator is scripted code, low risk. If it's an LLM, moderate risk of false negatives (missing a BLOCKING finding) or false positives (flagging non-BLOCKING findings).**

---

## 4. WHAT'S STILL MISSING?

### 4.1 MUST Items NOT in the 8-Change Plan

From the master checklist, Section 1C (MUST-08 through MUST-25) contains 15 items that were NOT in the 8-change implementation plan. Key gaps:

**MUST-08 (SHOULD tier):** Not visible in the implemented changes. Items in the SHOULD tier were deferred.

**MUST-12 (builder signal mechanism):** This WAS implemented — Step 3.4c `<!-- SCROLL-REVEALS: true -->` declaration. Verification confirmed (Item 4 in 37-FINAL-VERIFICATION.md).

**MUST-13 (gate subtraction):** This WAS implemented as Wave 0 — GR-12 removal, consolidation, ~60 lines subtracted.

**MUST-14 (gate naming map):** Status unclear from the files I've read. The gate-manifest.json provides a mapping, but whether a formal GR-XX <-> SC-XX cross-reference was created is not evident. **This is a documentation gap, not a functionality gap.**

**MUST-26 (retire PA-06/09/40):** This WAS implemented as Wave 3. Verified in 37-FINAL-VERIFICATION.md.

**Highest-risk gap from unimplemented MUSTs:**
- **ME-046 (Corrected Screenshot Recovery Protocol):** Referenced in MUST-06 but listed as TIER 2C. When screenshots fail validation, the protocol for re-capture is mentioned but not fully specified in the implemented changes. If screenshots fail the new Section 2.3a validation gate, what exactly happens? The current spec says "re-capture with expanded CSS overrides" but doesn't specify the full recovery protocol. **This is a runtime gap that will surface on the first failed screenshot capture.**

### 4.2 SHOULD Items That Should Be MUST

**From the SHOULD tier (not visible in current implementation):**

The most critical SHOULD item is likely **ME-015 (BLOCKED BY DEFECT scoring option):** Without this, auditors who identify illegibility in the experiential pass must still force YES/NO/CONDITIONAL answers for their questions. If a chart is illegible, Auditor B must still answer PA-81 with YES/NO — but the question presupposes the chart CAN be read. **A "BLOCKED BY DEFECT" answer type would allow auditors to flag that the question cannot be meaningfully answered because of a blocking defect.** Without it, the signal is diluted — "NO" on PA-81 could mean "the chart is communicating the wrong thing" OR "the chart cannot be read at all." These are very different failure modes.

**RISK: Without ME-015, the weaver must infer BLOCKING defects from the content of auditor answers rather than from explicit signals.** The weaver can do this (it's an Opus agent), but explicit signals are always better than inference. This is a meaningful gap but not a showstopper.

---

## 5. SECOND-ORDER EFFECTS

### 5.1 Signal-to-Noise Ratio Improvement

If false violations drop from 401 to ~5, the gate output becomes dramatically more useful. Every FAIL now represents a genuine issue.

**But:** The verdict logic was calibrated against noisy data. Previous runs tolerated many REQUIRED failures because "that's just how the gate works." Now, a single REQUIRED failure is genuinely alarming. **Will the orchestrator and weaver adjust their mental models?**

The spec explicitly handles this through the tier system — REQUIRED gates are binary (PASS/FAIL), and the verdict logic treats them categorically (any REQUIRED FAIL = at minimum REFINE). This was true before and after the changes. **The logic doesn't change; what changes is that REQUIRED FAILs now carry correct signal.** A REQUIRED FAIL used to be noise; now it's a genuine issue. The verdict logic already treated it as a genuine issue. **No adjustment needed — the logic was correct all along, it just produced wrong verdicts because of false inputs.**

**However:** If the first few pipeline runs with the new gates produce 0 REQUIRED failures (because the false positives are gone), there's a risk of complacency. The first genuine REQUIRED failure after a streak of clean runs might be dismissed as "probably another false positive." **This is a human-operator risk, not a pipeline risk.** The pipeline always treats REQUIRED FAIL as REFINE/REBUILD.

### 5.2 Experiential Pass Qualitative Data + Weaver Quantitative Design

The experiential pass generates qualitative data: free-form observations about illegible, effortful, and skipped text. The weaver is designed to consume structured quantitative data: YES/NO/CONDITIONAL answers to specific questions, with screenshot references.

**Format mismatch analysis:**

The weaver receives TWO types of data per auditor:
1. **Section 0: Experiential Pass** — qualitative, free-form ("I could not read the chart labels in scroll-05.png")
2. **Sections 1-N: Question Answers** — structured, YES/NO/CONDITIONAL with evidence

The weaver's aggregation protocol (pa-weaver.md Section 4.5) defines a quantitative rule for experiential data: ">=3/9 flag same text element = CONFIRMED." This requires the weaver to MATCH experiential observations across 9 reports — "same text element" means the weaver must identify when 3 auditors are pointing to the same thing using different words.

**RISK:** Auditor A says "small text in the third chart." Auditor D says "axis labels are hard to read in the data visualization section." Auditor G says "scroll-05.png bottom-right has tiny numbers." These all describe the same element, but keyword matching won't unify them. The weaver (an Opus agent) CAN do semantic matching — but the 3/9 threshold assumes EXACT matching (same text element). **The weaver may under-count agreements if it uses literal matching, or over-count if it uses liberal semantic matching.**

**RECOMMENDATION:** The experiential pass instruction should include a location format: "Report illegible text with screenshot reference and page region (e.g., 'scroll-05.png, middle-right: chart axis labels too small')." This gives the weaver structured location data to match across auditors. **Currently, the instruction says "Report THREE things" but doesn't specify a location format for those reports.** The evidence format requirement (FIX-067) applies to question answers but it's unclear if it applies to the experiential pass.

### 5.3 "Arm's Length" Instruction Clarity

Builder Q0 (Step 5.1) asks: "Can body text be comfortably read at arm's length?"

**What does "arm's length" mean on a screen?** In physical media (print), "arm's length" is approximately 25-30 inches — the distance at which you'd hold a newspaper. On a screen, this is approximately the distance from a laptop screen to the user's eyes (~18-24 inches) or from a desktop monitor (~24-30 inches).

**The instruction is intentionally perceptual, not metric.** It's asking the builder to imagine reading the text at a comfortable distance, not to measure pixels. This is consistent with the "world-description framing" principle (M-12) — calibration, not thresholds.

**But:** The builder is an LLM agent looking at a Playwright screenshot. LLMs don't have physical bodies and don't experience "arm's length" distance. The LLM will interpret this as "is the text a reasonable size for comfortable reading" — which is the intent, but it removes the embodied-perception grounding that makes the instruction useful for humans.

**RISK: Low.** The instruction is effective as a framing device even for LLM agents. The LLM will check whether text is legibly sized, which is the goal. The "arm's length" metaphor is decorative but not misleading. Q1's "within 5 seconds of looking at it" is more directly actionable for an LLM. **No change needed, but the instruction's effectiveness for LLM builders is inherently weaker than for human builders.**

### 5.4 Verdict Logic Calibration Shift

Pre-change: 401 false violations meant most pages triggered REFINE or REBUILD regardless of actual quality. The pipeline was calibrated to expect failures.

Post-change: ~0-5 false violations mean clean pages get PROCEED_TO_PA verdicts. The PA (not the gate runner) becomes the primary quality discriminator.

**This is a fundamental shift in pipeline dynamics.** Before, the gate runner was the bottleneck — most pages failed gates before reaching PA. After, most pages will pass gates and reach PA. **The PA becomes the critical path for the first time.**

**Implications:**
1. PA auditor quality matters MORE now. Before, gate failures pre-empted PA findings. Now, PA findings are the PRIMARY quality signal. If PA auditors produce shallow reports, the pipeline has no fallback.
2. The weaver's job is harder. Before, the weaver could lean on gate results ("15 REQUIRED failures = obviously REBUILD"). Now, with 0-5 gate findings, the weaver must make nuanced PA-05 judgments. **The weaver needs to be Opus — this is confirmed in the spec but worth emphasizing.**
3. The "SHIP WITH FIXES" category becomes viable for the first time. Before, the number of gate violations meant few pages qualified for SHIP WITH FIXES (<=3 MECHANICAL fixes required). Now, a page that passes all gates and has minor PA findings could genuinely earn SHIP WITH FIXES. **This is a positive effect — the category was designed but never usable.**

---

## 6. SUMMARY OF FINDINGS

### Changes That Strongly Achieve Their Goals
1. **GR-05 split** — Correctly partitions visible from sub-perceptual cold colors. Eliminates ~200 false violations.
2. **GR-06 rendered font check** — Correctly filters fallback-only fonts. Eliminates ~181 false violations.
3. **GR-60 WCAG contrast gate** — Adds programmatic legibility checking. Well-implemented with DOM background walk.
4. **GR-14 fix** — Corrects measurement methodology and adds structural transition exemption.
5. **Anti-loss mechanism verification** — Pre-flight audit + final verification is rigorous and comprehensive.
6. **Builder Q0/Q1 self-checks** — Correctly framed in recipe language, world-description style. Good first line of defense.
7. **Experiential pass** — Strongest new defense against priority inversion. 9 independent observers reporting readability issues.

### Changes With Identified Risks
1. **Circuit breaker format mismatch** — Expects BLOCKING-severity language that the experiential pass doesn't produce. (Severity: MEDIUM)
2. **Weaver cognitive load** — 8 distinct analysis tasks may exceed practical limits. (Severity: MEDIUM)
3. **Experiential pass location format** — No structured location format for observations, making 3/9 matching harder. (Severity: LOW-MEDIUM)
4. **REFINE + STRUCTURAL usability fix** — Verdict says REFINE but Fix #1 requires structural work. Escalation rule missing. (Severity: LOW — edge case)
5. **GR-10 composite fragility** — One unexpected sub-check failure blocks the entire gate. (Severity: LOW — pre-existing, not introduced by these changes)

### Items Still Missing
1. **ME-015 (BLOCKED BY DEFECT scoring)** — Auditors can't signal that a question is unanswerable due to a blocking defect. (Impact: MEDIUM)
2. **ME-046 (Screenshot Recovery Protocol)** — Full recovery procedure for failed screenshot validation is under-specified. (Impact: MEDIUM — surfaces on first failure)
3. **Experiential-to-circuit-breaker bridge** — The format gap between experiential observations and circuit breaker expectations. (Impact: MEDIUM)
4. **Raster image chart coverage** — No mechanism catches illegible text baked into raster images. (Impact: LOW — pages typically use HTML/SVG, not raster charts)

### Net Assessment

The five waves of changes represent a well-designed, well-verified intervention. The dominant root issue (priority inversion) is addressed through multiple overlapping defenses — no single point of failure. The spec bloat fix is surgical and effective. The anti-loss verification is rigorous.

The main metacognitive concern is the **calibration shift**: by fixing false positives, the pipeline moves from gate-dominated to PA-dominated quality assessment. This makes the PA's reliability the new critical path. The experiential pass strengthens this, but the weaver's increased complexity and the format mismatch between experiential observations and downstream consumption are worth monitoring in the first few runs.

**Overall verdict: The changes achieve their goals. The identified risks are manageable. The highest-priority follow-up is the experiential-to-circuit-breaker format bridge (ensure the circuit breaker can consume experiential pass output, not just BLOCKING-severity labels).**

---

*End of metacognitive analysis.*
