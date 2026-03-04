# Wave 4 Retrospective: Evaluation + Orchestration

## 1. Metacognitive Anchor

This wave closes the evaluation loop. If PA and Weaver cannot detect structural variety, Waves 1-3 have no feedback mechanism. My primary worry before reading: E-21/22/23 will detect CSS surface variation (background colors, border weights, typography shifts) rather than actual DOM structural difference -- the exact illusion Source 02 proved. A page with 9 different background colors on 9 vertically-stacked full-width divs could score "DIVERSE" when the skeleton is monotonous. Second worry: DIVERSE/UNIFORM is too binary for the weaver to provide actionable feedback.

## 2. Detection Test Results

**E-21 (layout variety) -- does it detect a grid?** YES, with a caveat. The question asks "does every section have the same layout, or do some have different geometry -- wider, split into columns, arranged as a grid?" The explicit mention of "columns" and "grid" anchors the auditor toward spatial structure, not just color/texture differences. A diligent auditor viewing screenshots WILL notice a grid vs vertical stack. PASSES.

**E-22 (content-form coupling) -- does it surface meaning-layout alignment?** PARTIALLY. The question asks for a section that "SHOWS what it's about, not just tells." This is perceptually strong but ambiguous -- an auditor could interpret a large pull-quote as "showing" emphasis. The pa-auditor-prompt's language guidance helps ("I notice a section where items sit beside each other instead of stacking") but the question itself doesn't distinguish between layout-as-meaning and decoration-as-emphasis. MARGINAL.

**E-23 (reading path) -- does it detect path variety?** YES. The map metaphor ("single road vs intersections and plazas") directly targets reading path topology. An auditor scrolling through a page will notice whether their eye ever moves horizontally. PASSES.

**Weaver structural metrics -- does it count correctly?** The weaver prompt (lines 126-157) specifies: distinct layout types, non-standard section count, content-form coupling instances, self-aware components. These metrics require examining HTML source AND screenshots. The HTML examination should catch DOM-level structure (grid-template-columns, flexbox direction). The DIVERSE/UNIFORM binary is supplemented by sub-metrics (counts), which addresses my binary-is-insufficient worry. PASSES.

**Comparison report -- does it log structural data?** Yes. Lines 679-681 of SKILL.md specify Section 11 proposition adoption counts and weaver structural metrics. PASSES.

## 3. Source 02 Cross-Check: DOM Structure vs CSS Variety

Source 02's core insight: "CSS audit sees 9 zone treatments but structural reality is 1 skeleton." Both pipeline builds had 77-86% of sections using the identical Section Block skeleton.

**Do E-21/22/23 look at DOM or CSS?** They look at SCREENSHOTS -- which means they see the perceptual result of CSS applied to DOM. This is actually the right level. An auditor viewing a screenshot cannot see `display: grid` in CSS, but they CAN see that content sits side-by-side vs stacked vertically. The perceptual test is: does the reading path change? Screenshots answer this faithfully.

**The weaver, however, also reads HTML source** (line 128: "Examine the HTML source and screenshots"). This is where the DOM vs CSS distinction matters. The weaver prompt says "distinct layout types used" -- if the weaver counts CSS variation (different backgrounds, borders, typography) as distinct "layout types," it will overcount. The prompt's examples help ("e.g., 1 = only vertical, 2 = vertical + grid, 3 = vertical + grid + split") by defining layout types as spatial organizations, not CSS texture. ADEQUATE but could be fooled by a weaver that conflates the two. A one-line clarification ("layout type = reading path direction, not visual styling") would harden this.

## 4. Graceful Degradation Assessment

Does the pipeline penalize vertical-only builds when content is truly linear? YES, the design handles this correctly:

- SKILL.md Phase 1: structural observation is "(non-blocking)" -- absent observation does not gate.
- SKILL.md Phase 2: Section 11 "may be a single line ('No structural propositions') for linear content -- this is valid."
- Weaver prompt line 140: CONTENT INAPPROPRIATE is an explicit valid diagnosis for uniform structure. "Content genuinely didn't warrant structural variety" is listed as a legitimate outcome.
- SKILL.md comparison report: "target is 1-2 non-standard sections WHEN CONTENT WARRANTS" (emphasis on conditionality).

No structural invention is forced. Linear content gets the standard vertical pipeline without penalty. PASSES.

## 5. Source 07 Cross-Check

Source 07 recommended these evaluation-layer changes:

| Recommendation | Implemented? | Notes |
|---|---|---|
| Add E-21 (layout geometry) to PA battery | YES | pa-auditor-prompt lines 55-56, SKILL.md line 583 |
| Add E-22 (content-form coupling) to PA battery | YES | pa-auditor-prompt lines 57-58, SKILL.md line 584 |
| Add E-23 (reading path / page topology) to PA battery | YES | pa-auditor-prompt lines 59-61, SKILL.md line 585 |
| Add structural variety metrics to weaver compliance | YES | weaver-prompt lines 126-157 |
| Add distinct layout type count | YES | weaver-prompt line 132 |
| Add non-standard section count | YES | weaver-prompt line 133 |
| Add content-form coupling count | YES | weaver-prompt line 134 |
| Add self-aware component count | YES | weaver-prompt line 135 |
| Structural variety in comparison report | YES | SKILL.md lines 679-681 |
| Diagnose UNIFORM despite propositions | YES | weaver-prompt lines 136-141 |

All Source 07 PA/weaver recommendations are implemented. No omissions detected.

## 6. Course Corrections for Wave 5

Wave 5 is the trace simulation. Based on this review:

1. **E-22 ambiguity risk.** The content-form coupling question could be interpreted as "decorative emphasis" rather than "layout embodies meaning." The trace simulation should test whether a simulated auditor, given a page with a large pull-quote but no structural coupling, reports E-22 as present. If so, the question needs tightening.

2. **Weaver layout-type counting.** The trace should verify the weaver counts SPATIAL layout types (vertical, grid, split) not CSS treatments (different backgrounds, borders). The examples in the weaver prompt guide this, but the trace should confirm.

3. **Auditor 1 and 5 carry 5 questions each** (lines 576, 580) while auditors 2 and 4 carry only 4. The structural questions were appended to auditors who already had 4, creating imbalance. The trace should check whether 5-question auditors produce thinner responses per question.

4. **No weaver access to _pass-1-decisions.md.** The weaver prompt's Section 11 Assessment (line 121) says "Read _pass-1-decisions.md for the Structural Choices section." But SKILL.md line 623 says the weaver does NOT receive builder decisions files. This is a CONFLICT. The weaver cannot assess proposition ADOPT/MODIFY/REJECT without seeing the decisions file. Either grant the weaver access to _pass-1-decisions.md (for Section 11 assessment only) or remove the instruction from the weaver prompt.

## 7. GO/WAIT Assessment

**CONDITIONAL GO for Wave 5** -- with one blocking fix required first.

The weaver prompt instructs reading `_pass-1-decisions.md` for Section 11 assessment, but SKILL.md explicitly excludes this file from the weaver's inputs. This must be reconciled before the trace simulation runs, or the trace will either expose the conflict (useful but wasteful) or paper over it (dangerous). Fix: add `_pass-1-decisions.md` to the weaver's input list in SKILL.md Step 4C, restricted to Section 11 structural choices only. Alternatively, remove the decisions-file instruction from the weaver prompt and have the weaver assess structural adoption purely from HTML evidence.

All other changes are correctly wired. The detection loop closes: TC proposes -> synthesizer packages -> builder decides -> PA perceives -> weaver measures -> comparison reports. The non-blocking design correctly avoids penalizing linear content.
