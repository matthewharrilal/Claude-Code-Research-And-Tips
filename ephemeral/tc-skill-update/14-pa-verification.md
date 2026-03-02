# PA Skill Verification Report

**Verifier:** pa-verifier (Opus)
**Date:** 2026-02-27
**Source:** `~/.claude/skills/perceptual-auditing/SKILL.md` (517 lines, rewritten)
**References:** 06-pa-audit.md, 07-pa-pipeline-import.md, 08-pa-design-spec.md, 11-adversarial-review.md

---

## Criterion 1: QUESTION COUNT AND QUALITY

**Verdict: PASS**

The rewrite contains 20 core experiential questions (E-01 through E-20) plus 3 responsive supplement questions (E-R1 through E-R3), for a total of 23. This falls within the ~15-25 target range.

**Three Laws compliance (every question checked):**

| Question | Requires screenshot? | Plain language? | Non-designer can validate? | Verdict |
|----------|---------------------|----------------|---------------------------|---------|
| E-01 | YES (first visual impression) | YES | YES | PASS |
| E-02 | YES (scroll experience) | YES | YES | PASS |
| E-03 | YES (personality attribution) | YES | YES | PASS |
| E-04 | YES (find empty space) | YES | YES ("pause or stopped talking") | PASS |
| E-05 | YES (find dense area) | YES ("breathe") | YES | PASS |
| E-06 | YES (viewport width) | YES | YES | PASS |
| E-07 | YES (adjacent sections) | YES | YES | PASS |
| E-08 | YES (scroll thirds) | YES | YES | PASS |
| E-09 | YES (visual+content shift) | YES | YES | PASS |
| E-10 | YES (comparison to plain) | YES | YES | PASS |
| E-11 | YES (design fighting content) | YES | YES | PASS |
| E-12 | YES (shapes without text) | YES | YES | PASS |
| E-13 | YES (complex section) | YES | YES | PASS |
| E-14 | YES (rhythm) | YES | YES | PASS |
| E-15 | YES (dramatic peak) | YES | YES | PASS |
| E-16 | YES (element comparison) | YES | YES | PASS |
| E-17 | YES (music analogy) | YES | YES | PASS |
| E-18 | YES (best moment) | YES | YES | PASS |
| E-19 | YES (near-miss) | YES | YES | PASS |
| E-20 | YES (one change) | YES | YES | PASS |
| E-R1 | YES (narrow viewport) | YES | YES | PASS |
| E-R2 | YES (narrow viewport) | YES | YES | PASS |
| E-R3 | YES (narrow viewport) | YES | YES | PASS |

**Answerable with number or yes/no check:** Zero questions are answerable with a number. Zero questions are answerable with a simple yes/no. Every question requires descriptive prose. This is a clean sweep.

**Note:** The design spec (08-pa-design-spec.md) proposed 22 questions (E-01 through E-22). The rewrite has 20 (E-01 through E-20). The two dropped questions are E-21 ("The Surprise You Almost Had" -- near-miss surprise) and E-22 ("What Would You Show Someone?" -- curated peaks/valleys). These were both from the design spec's Tier 5 ("What's Almost There"). The loss is minor because E-19 ("the one thing that's ALMOST working") covers near-miss territory, and E-18 + E-20 together cover the show-someone / skip-past territory. The reduction from 22 to 20 is acceptable.

---

## Criterion 2: GENERATIVE FRAME ALIGNMENT

**Verdict: PASS**

Every question uses experiential language. The question structure consistently follows the pattern identified in 06-pa-audit.md Finding 4 (the strongest questions share: direct the gaze, ask for experience, offer a metaphor):

**Strong generative framing examples:**
- E-04 (line 119): "pause in a conversation, or like the other person stopped talking?" -- metaphor-driven perception
- E-06 (line 127): "owns the viewport, or like it's been placed in the middle and told to stay there?" -- anthropomorphic, experiential
- E-14 (line 171): "a beat you can feel? Or does it feel more like a series of unrelated events?" -- kinesthetic, not analytical
- E-17 (line 183): "A single instrument playing one melody? A choir singing the same note? An ensemble playing different parts?" -- full music analogy

**Anti-pattern check ("Count how many..."):** Zero instances of "count" as an instruction to the auditor. The word "count" does not appear in any question. The closest is E-08 ("Divide the page into thirds") which asks for a perception ("did someone get tired?"), not a measurement. PASS.

**Compliance-checking residue:** None detected. No question asks the auditor to verify a threshold, check a specification, or confirm a property value. The entire question set is experiential.

---

## Criterion 3: KEPT ELEMENTS

**Verdict: PASS**

| Required Element | Present? | Location | Quality |
|-----------------|----------|----------|---------|
| Fresh-eyes principle | YES | Lines 13-18 | EXCELLENT -- "context-starved" principle, explicit prohibition list, contamination reasoning |
| Section 0 experiential pass | YES | Lines 42-88 | EXCELLENT -- Cold Look + Scroll-Through + Visual Verification + Priority Override + Contamination Check, all preserved |
| The One Rule | YES | Lines 22-26 | VERBATIM -- "React to what you see before you check what you know." |
| Three Laws | YES | Lines 29-34 | VERBATIM -- all three laws preserved with exact wording |
| Cold Look Protocol | YES | Lines 46-60 | PRESERVED -- 5-second protocol, 4-response format (gut reaction, worst thing, best thing, ship it?), LOCK instruction |

All five required elements are present, well-positioned (before the questions, establishing the frame), and faithfully preserved from the original.

---

## Criterion 4: REMOVED ELEMENTS

**Verdict: PASS**

| Required Removal | Removed? | Evidence |
|-----------------|----------|---------|
| PA-05 sub-scores (DESIGNED/COHERENT/PROPORTIONATE/POLISHED) | YES | No PA-05 sub-criteria appear anywhere. The signing-frame concept survives as E-04 ("Would you send this to someone whose taste you respect?") but without the 4 sub-dimensions and their PASS/FAIL thresholds. |
| CONDITIONAL PASS verdicts | YES | The word "CONDITIONAL" does not appear in the file. |
| Numerical scoring rubrics | YES | No scoring rubrics, no PA-05 1-4 scale, no Tier 5 0-9 count, no verdict matrices. |
| Threshold tables | YES | No perception threshold tables (no ">=15 RGB", no ">=0.5px letter-spacing", no content-width ranges). The only numbers in the file are viewport widths for screenshot capture (1440px, 1024px, 768px) and the 80% scroll-step, which are operational infrastructure, not quality thresholds. |
| Compliance questions | YES | All 69 numbered PA questions (PA-01 through PA-70+) are gone. Replaced by 20 experiential questions (E-01 through E-20). |

**Additional removals verified:**
- Quantitative guardrails section: GONE
- Multi-coherence counting protocol: GONE
- Tier 1 equivalent enforcement: GONE
- Void guardrail specifications (viewport-height counting): GONE
- S-09 stacking check: GONE
- Anti-pattern taxonomy (AP-02 through AP-13): GONE
- PA-05 cross-validation protocol: GONE
- Quality tier definitions (FLOOR/MIDDLE/CEILING/FLAGSHIP): GONE
- Combined verdict matrix: GONE

Clean removal of all compliance infrastructure.

---

## Criterion 5: PIPELINE IMPORTS

**Verdict: PARTIAL**

| Required Import | Present? | Location | Notes |
|----------------|----------|----------|-------|
| Experiential-first ordering | YES | Lines 42-88 | Section 0 is positioned BEFORE questions ("Before you read any question, before you think about what you're evaluating -- inhabit the page"). |
| Fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) | **NO** | Not present | The words MECHANICAL, STRUCTURAL, and COMPOSITIONAL do not appear in the rewrite. The 07-pa-pipeline-import.md recommended importing this trichotomy (lines 260-273) and the 06-pa-audit.md audit noted the Weaver's fix-type classification as valuable (line 284). The rewrite omits it entirely. |
| Priority override (readability > everything) | YES | Lines 81-83 | "Comprehension failures ALWAYS outrank aesthetic observations. If text is illegible, if a chart is unreadable, if navigation is invisible -- that is your first finding." Preserved verbatim from pipeline. |
| Screenshot-only protocol | YES | Lines 256-285 | Full screenshot pre-capture protocol preserved: HTTP serving, viewport widths, fonts.ready, animation disable, DPR-safe capture, cold-look + scroll-through naming. |
| Feedback language protocol | PARTIALLY | Lines 289-308 | The language constraint (CSS vocabulary hard block) and severity language (WOULD-NOT-SHIP / LOOKS-WRONG / COULD-BE-BETTER) are present. However, the pipeline's explicit feedback translation examples ("NOT: SC-09 FAILED... YES: The middle sags...") from pa-weaver.md lines 307-313 are not included. The constraint achieves the same end via prohibition rather than example. |
| Emotional arc framework (SURPRISE/DELIGHT/AUTHORITY/CLOSURE) | **NO** | Not present | The 4 emotional registers recommended for import as reflection vocabulary (07-pa-pipeline-import.md lines 290-304) do not appear in the rewrite. |

**FAIL items:**
1. Fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) is absent. This was recommended by both the audit (06) and the pipeline import (07) as useful scale-of-change framing. The Weaver section (lines 311-415) produces creative direction but lacks vocabulary for distinguishing "change a CSS value" from "reorganize the page" from "rethink the compositional logic." The refinement builder would benefit from knowing the SCALE of change the Weaver envisions.

2. Emotional arc vocabulary is absent. This is lower-priority -- the 4 registers (SURPRISE/DELIGHT/AUTHORITY/EARNED CLOSURE) were marked "ADAPT" not "IMPORT" in the pipeline import audit, meaning transformation was expected. But zero trace of them exists. The Weaver's Experience Portrait (lines 323-355) describes emotional arc in prose but without this structured vocabulary as scaffolding.

**Assessment:** The two missing imports are both Weaver-facing, not auditor-facing. Their absence weakens the Weaver's synthesis toolkit but does not compromise the auditor experience. The core pipeline imports (experiential-first ordering, priority override, screenshot protocol) are fully present and well-integrated.

---

## Criterion 6: WEAVER

**Verdict: PASS**

The Weaver section (lines 311-416) produces the required outputs:

| Required Output | Present? | Location | Quality |
|----------------|----------|----------|---------|
| Experience Portrait | YES | Lines 323-355 | Well-structured: tempo/rhythm/emotional arc + successes + struggles + personality + one-sentence summary. Example provided (lines 338-355). |
| Creative Direction (AMPLIFY/RELEASE/DEEPEN) | YES | Lines 357-388 | Full structure: AMPLIFY (best moment), RELEASE (held tension), DEEPEN (near-miss), THE GAP (personality vs. best self). Example provided (lines 372-388). |
| One-word verdict (SHIP/REFINE/RETHINK) | YES | Lines 390-404 | Three verdicts with clear meanings and routing consequences. "No numerical scores" explicitly stated (line 400). One-sentence reason required for REFINE and RETHINK. |

**Removed outputs verified:**
- PA-05 numerical score: ABSENT (correct)
- Tier 5 numerical score: ABSENT (correct)
- Top-5 fix list with severity: ABSENT (correct)
- Multi-coherence scale: ABSENT (correct)
- Combined verdict matrix: ABSENT (correct)

**Additional Weaver quality checks:**
- The Weaver's experiential anchor is preserved (line 317: "Before reading any auditor report, scroll through every screenshot as a reader. Write a 3-sentence first impression.").
- The anchor has permanent priority (line 317: "if your anchor found something that no auditor caught, your anchor takes precedence").
- Convergence/divergence synthesis is present (lines 319-320).
- Gate runner separation is explicit (lines 406-415): clear table distinguishing Gate Runner (binary pass/fail, programmatic language, orchestrator audience) from Weaver (experiential reports, creative direction, refinement builder audience).

---

## Criterion 7: BRIDGING QUESTIONS

**Verdict: PASS**

**Writing Prompts (6-dimension reflection):**

| Dimension | Present? | Location | Quality |
|-----------|----------|----------|---------|
| (a) Conviction | YES | Lines 423-428 | Primary + follow-up. Asks for specific emotional register and whether page achieves it. |
| (b) Alternatives | YES | Lines 430-433 | Primary + follow-up. "Two roads not taken" + "break ONE rule" framing. |
| (c) Surprises | YES | Lines 435-440 | Primary + follow-up. Emergent CSS results, content-structure discoveries. |
| (d) Impulses | YES | Lines 442-445 | Primary + follow-up. Suppressed creative energy, missing components. |
| (e) Experience | YES | Lines 447-451 | Primary + follow-up. Self-scroll, experiential self-assessment. |
| (f) Unresolved | YES | Lines 453-457 | Primary + follow-up. Genuine aesthetic tension, competing good options. |

All 6 dimensions present with primary and follow-up prompts.

**Receiving Prompts (next-window orientation):**

| Prompt | Present? | Location | Content |
|--------|----------|----------|---------|
| R-01 | YES | Line 465 | Read conviction first, picture the page before seeing it |
| R-02 | YES | Line 467 | Look at artifact, find where vision shows through |
| R-03 | YES | Line 469 | Read alternatives/impulses, find resonance |
| R-04 | YES | Line 471 | Read surprises, find direction to push |
| R-05 | YES | Line 473 | Read experience, compare to own experience |
| R-06 | YES | Line 475 | Read unresolved, aesthetic tension as gift |
| R-07 | YES | Line 477 | State ONE thing to do, single creative act |

All 7 receiving prompts present. The sequence progresses from own-eyes-first (R-01 references conviction, R-02 references artifact) through comparative evaluation (R-05) to creative synthesis (R-07). The design spec's receiving prompts (08-pa-design-spec.md, R-01 through R-05) called for 5 prompts; the rewrite includes 7 (R-01 through R-07), providing more granular orientation. This exceeds the spec.

**Note on receiving prompt design:** The rewrite's R-01 says "Read the conviction dimension first" rather than the design spec's RECEIVING-01 which says "Before reading the reflection, before reading the Weaver's notes -- scroll through the artifact at reading speed." The design spec wanted the new builder to form their OWN impression before reading anyone else's account. The rewrite's R-01 directs the builder to read conviction first, which could contaminate their fresh-eyes encounter. However, R-02 says "Now look at the artifact" -- implying the artifact viewing comes second. This is a minor deviation from the design spec's "own eyes first" principle. The design spec's RECEIVING-01 approach (scroll artifact cold, then read reflection) is arguably stronger. Not a FAIL, but worth noting.

---

## Criterion 8: ADVERSARIAL CONCERNS

### Attack 3: PA Coverage Gaps / Whitespace Void Detection

**Verdict: PARTIAL**

The adversarial review (11-adversarial-review.md, Attack 3) raised the project's most critical concern: would 5 generalist auditors with the new questions catch a whitespace void -- the project's #1 historical failure mode (9/9 auditors flagged 70-80% blank cream scroll in Mode 4 PA)?

**Relevant questions in the rewrite:**
- E-02 (line 105): "Where did you speed up? Where did you slow down? Where did you stop?" -- An auditor scrolling past a void would SPEED UP through it. This catches voids experientially IF the auditor is attentive to the speed-up.
- E-04 (line 119): "Find the most generous area of empty space. Does it feel like a pause in a conversation, or like the other person stopped talking?" -- Directly targets empty space quality. "Stopped talking" is the void signal. Assigned to Auditor D.
- E-07 (line 131): "Pick any two adjacent sections. What changes between them?" -- Could surface void between sections, but only if the auditor picks sections with a void between them.
- E-08 (line 135): "Divide the page into thirds. Does each third feel like it got the same amount of attention?" -- If one third is mostly void, this catches it. Assigned to Auditor D.

**The adversary's specific concern:** E-04 and E-08 are BOTH assigned to Auditor D (line 236). If Auditor D has a blind spot, the void detection depends on whether E-02 (Auditor B) catches it via scroll-speed variation.

**Is there a dedicated spatial void question?** No. The adversary recommended (line 277): "Add one SPATIAL VOID question back. Something like: 'Scroll through the page at speed. Is there a moment where the page seems to disappear -- where you're scrolling through emptiness?'" This specific recommendation was NOT implemented. E-04 asks about the "most generous area" but frames it as quality-of-space, not detection-of-void. A catastrophic void (70-80% blank) would likely be caught by E-04's "stopped talking" framing, but a moderate void (2-3 viewport-heights of sparse content) might not trigger the question because the auditor goes looking for the MOST generous space and finds the right one, while the void lurks elsewhere.

**Mitigating factors:**
1. The Cold Look Protocol (lines 46-60) gives EVERY auditor (5/5) a first impression that includes "Worst thing: [one element or area -- fix this first?]". A catastrophic void would likely surface here for multiple auditors.
2. The Scroll-Through (lines 64-70) has EVERY auditor report "Where did you speed up?" -- a void is a speed-up zone.
3. Section 0 has permanent priority (line 70): "if your anchor found something that no question surfaces later, report it anyway."

**Assessment:** Moderate confidence that a catastrophic void (70%+ blank) would be caught via Section 0 (cold look + scroll-through, all 5 auditors). Lower confidence that a moderate void (2-3 viewport-heights) would be caught, because no question explicitly asks "is there a stretch where you're scrolling through emptiness?" The adversary's recommendation to add one dedicated void question was not followed.

### Attack 5: Gate/PA Separation

**Verdict: PASS**

The rewrite achieves clean separation:

1. **Auditors never see gate results.** Line 252: "They do NOT receive: Build context, gate results, conviction brief, TC brief, or mechanism counts." Gate results are explicitly listed in the prohibition.

2. **The Weaver and Gate Runner are explicitly separated.** Lines 406-415: A full comparison table distinguishes their inputs, outputs, language, and audiences. The Weaver reads "5 auditor experiential reports" -- NOT gate results. The Gate Runner's audience is "Orchestrator (for routing decisions)" while the Weaver's audience is "Refinement builder (for creative direction)."

3. **The Weaver does NOT reference gate output.** The Weaver's process (lines 316-321) receives "all 5 auditor reports and the scroll-through screenshots." No mention of gate results as Weaver input.

4. **The adversary's specific concern about the orchestrator combining them:** The rewrite's "Weaver and Gate Runner: Different Jobs" section (lines 406-415) separates them but does not specify how the orchestrator combines their outputs. This is an orchestrator-level concern outside the PA skill's scope. Within the skill itself, the separation is clean.

### Attack 8: Reflection Dimensions Optional When Genuine Content Is Absent

**Verdict: FAIL**

The adversary's Attack 8 (lines 181-198) raised the concern that dimensions like SURPRISES and IMPULSES will be systematically empty in well-briefed builds, leading to confabulated reflections. The recommendation was to make dimensions optional ("write only if genuinely surprised").

The rewrite's bridging questions (lines 419-457) present ALL 6 dimensions as mandatory. There is no language indicating any dimension is optional or context-dependent. Specifically:

- Dimension (c) Surprises (line 435): "Was there a moment where you wrote CSS and the result was better than what you planned?" -- No escape hatch for "no, the brief was accurate."
- Dimension (d) Impulses (line 442): "What did you WANT to do that the vocabulary wouldn't let you?" -- No escape hatch for "nothing, the vocabulary was sufficient."
- Dimension (f) Unresolved (line 453): "Name a tension in this page that you couldn't fully resolve" -- No escape hatch for "no genuine tension remained."

The protocol demands 6 dimensions with primary + follow-up prompts for each. A builder who genuinely experienced no surprises, had no suppressed impulses, and resolved all tensions will either: (a) confabulate to fill the dimensions, or (b) write "none" and the protocol's creative tissue is thinner. Neither outcome is ideal.

**Recommendation from adversarial review:** "Make dimensions optional: 'write only if genuinely surprised.'" This recommendation was NOT implemented.

---

## Criterion 9: RESIDUAL COMPLIANCE

**Verdict: PASS**

**Numeric thresholds in questions:** Zero. No question contains a numeric threshold, percentage, or measurement target.

**Counting questions:** Zero. No question asks the auditor to count anything. The closest is E-08 ("Divide the page into thirds") which is a spatial division instruction, not a counting task, and the question asks "did someone get tired?" not "how many sections are in each third?"

**Compliance-oriented language in questions:** Zero instances. No question uses "verify," "check," "confirm," "must be," "should be," "at least," "no more than," or similar compliance vocabulary.

**Numbers in the file that are NOT compliance thresholds:**
- 1440px, 1024px, 768px (viewport widths for screenshot capture -- operational infrastructure)
- 80% viewport-height steps (scroll capture interval -- operational infrastructure)
- "5 seconds per viewport" (cold look duration -- protocol instruction)
- "2-3 sentence account" (scroll-through length guidance)
- "3-sentence first impression" (Weaver anchor length)
- "5 Auditors" (deployment count)
- "4 questions" per auditor (distribution)

All of these are operational parameters, not quality thresholds.

**One residual item worth noting:** Line 412 contains "GR-18 FAIL: background delta 8 RGB < 15 threshold" as an EXAMPLE of what gate-runner language looks like, contrasted with the Weaver's experiential language. This is illustrative, not prescriptive -- it appears in the "Different Jobs" comparison table to show what the gate runner says vs. what the Weaver says. The auditor would not encounter this as an instruction. Acceptable.

---

## Summary Table

| # | Criterion | Verdict | Key Issue |
|---|-----------|---------|-----------|
| 1 | Question count and quality | **PASS** | 23 questions (20 core + 3 responsive), all pass Three Laws, none answerable with number/yes-no |
| 2 | Generative frame alignment | **PASS** | Every question uses experiential language, zero counting instructions, zero compliance checks |
| 3 | Kept elements | **PASS** | Fresh-eyes, Section 0, One Rule, Three Laws, Cold Look -- all preserved faithfully |
| 4 | Removed elements | **PASS** | PA-05 sub-scores, CONDITIONAL PASS, scoring rubrics, threshold tables, compliance questions -- all removed |
| 5 | Pipeline imports | **PARTIAL** | Experiential-first ordering, priority override, screenshot protocol present. Fix-type classification (MECHANICAL/STRUCTURAL/COMPOSITIONAL) and emotional arc vocabulary (SURPRISE/DELIGHT/AUTHORITY/CLOSURE) absent. |
| 6 | Weaver | **PASS** | Experience Portrait + AMPLIFY/RELEASE/DEEPEN + SHIP/REFINE/RETHINK verdict. No scores, no conditional passes. |
| 7 | Bridging questions | **PASS** | All 6 writing dimensions + 7 receiving prompts present. Minor: R-01 reads conviction before artifact (design spec wanted own-eyes-first). |
| 8a | Attack 3: Whitespace void | **PARTIAL** | E-04 + E-08 (Auditor D) + Section 0 (all auditors) provide coverage. But no dedicated void question. Moderate void (2-3 VH) could slip through. |
| 8b | Attack 5: Gate/PA separation | **PASS** | Auditors explicitly prohibited from seeing gate results. Weaver and Gate Runner separated in dedicated comparison table. |
| 8c | Attack 8: Optional reflections | **FAIL** | All 6 reflection dimensions presented as mandatory. No "write only if genuine" escape hatch. Adversary's recommendation not implemented. |
| 9 | Residual compliance | **PASS** | Zero numeric thresholds, counting questions, or compliance language in any question |

---

## Overall Assessment

**7 PASS, 2 PARTIAL, 1 FAIL**

The rewrite is a strong execution of the design spec. The core transformation -- from 69 compliance questions to 20 experiential questions -- is clean and thorough. The philosophical infrastructure (Fresh-eyes, One Rule, Three Laws, Cold Look, Language Constraint) is preserved intact. The Weaver redesign successfully replaces scores with creative direction. The bridging questions create genuine tissue between context windows.

**Three items require attention:**

1. **[PARTIAL - Criterion 5] Fix-type classification missing.** Add MECHANICAL/STRUCTURAL/COMPOSITIONAL vocabulary to the Weaver section. This is a 5-10 line addition that gives the Weaver and refinement builder shared vocabulary for scale-of-change. The diagnostic decision tree from the pipeline (pa-weaver.md lines 166-169) could be adapted as: "Can the issue be addressed by changing one CSS value? (MECHANICAL) By reorganizing existing elements? (STRUCTURAL) By rethinking the compositional logic? (COMPOSITIONAL)"

2. **[PARTIAL - Criterion 8a] Whitespace void coverage.** The adversary's recommendation to add one dedicated spatial void question was not implemented. Consider adding to Tier 2 (Spatial Experience), something like: "E-XX: Scroll through the page at speed. Is there a moment where the page seems to DISAPPEAR -- where you're moving through emptiness without content pulling you back? How long does that emptiness last?" This preserves experiential framing while directly targeting the project's #1 historical failure mode. Alternatively, distribute E-04 (empty space) and E-08 (thirds energy) across different auditors so void detection has redundancy.

3. **[FAIL - Criterion 8c] Reflection dimensions not optional.** Add escape language to dimensions (c), (d), and (f). For example, dimension (c) Surprises could add: "If the brief accurately predicted the outcome and nothing surprised you, say so honestly -- 'no genuine surprises' is valid data. Only describe surprises that actually occurred." This prevents confabulation while preserving the dimension for builds where genuine surprises arise.

---

*End of PA skill verification report.*
