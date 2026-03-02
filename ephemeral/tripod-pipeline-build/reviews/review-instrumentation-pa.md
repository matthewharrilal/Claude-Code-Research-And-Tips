# Review: Instrumentation Layer + PA Integration Specs

**Reviewer:** Fresh-eyes reviewer (zero prior context)
**Files reviewed:**
- `assembly/instrumentation-spec.md` (317 lines)
- `assembly/pa-integration-spec.md` (384 lines)
- `TRIPOD-PIPELINE-SPECIFICATION.md` (Sections 7, 8, 9 + full context)
- `~/.claude/skills/compose/SKILL.md` (Phase 3 / PA protocol)
- `assembly/SKILL-skeleton.md` (Phase 4, 5 sections)

---

## Checklist Results

### [PASS] Layer A (Agent Logging): 15-line cap, context bloat risk

The template is concise. 7 fields, capped at 15 lines. The spec explicitly addresses context pressure in the Edge Case section: ~200 tokens per agent, ~3,000 tokens across 14-15 agents. This is negligible.

One good detail: if the agent is near its output ceiling, the spec says to truncate decisions to top 3 but never omit the log entirely. This is the right call.

**Minor note:** The "Time" field was removed from the template (spec says "No time estimates. Agents cannot accurately estimate their own execution time. Omit this field.") but the pipeline spec Section 9 Layer A template still has `- Time: [estimated from context]`. This is a SPEC-TO-SPEC INCONSISTENCY -- the instrumentation spec correctly removed it but the pipeline spec still has it. The instrumentation spec wins (it explicitly justifies the removal), but this should be reconciled.

### [PASS] Layer B (Phase Checkpoints): _pipeline-log.md practicality

The template is practical. Append-only file, one section per phase, explicit decision gate (PROCEED / RE-RUN / ABORT). The orchestrator writes it immediately after validation and before the next phase -- this is a good sequencing decision.

The checkpoint table mapping phases to validation criteria is clear. Phase 4 checkpoint correctly references "SHIP/REFINE/RETHINK" (not "REBUILD" -- but see inconsistency below under RETHINK vs REBUILD).

**Concern:** The spec says "the orchestrator reads the checkpoint it just wrote and acts on the decision field." This is somewhat ceremonial -- the orchestrator just decided what to write, so reading it back is redundant. The real value of the checkpoint is for CONTEXT RECOVERY after compression. The spec should clarify this: the checkpoint is for future-self reading, not immediate-self reading. (Low severity.)

### [PASS] Layer C (Comparison Report): Section mapping and Section 9 skip

The section-by-section format covers all 10 package sections (0-8) and explicitly explains why Section 9 is skipped (consumption protocol is process-oriented, leaves no output trace). This is well-reasoned.

The assessability table (Section: what source to examine it from, what limitations exist) is a strong addition. It gives the Weaver clear guidance on which sections need HTML source vs screenshots.

### [PASS] Cost tracking: Ranges, cumulative upper bound, $50 pause

Cost estimates use ranges. Cumulative upper bound is tracked. $50 pause threshold uses the upper bound. The Edge Case section acknowledges inaccuracy and says the purpose is to catch GROSS overruns ($80+), not measure within $5 accuracy. Pragmatic and correct.

The per-phase ranges in the instrumentation spec match Section 15 of the pipeline spec:
- Phase 1: $3-5 (matches)
- Phase 2: $8-15 (matches: $5-10 specialists + $3-5 synthesizer)
- Phase 3: $12-18 (matches)
- Phase 4: $5-10 (matches)
- Phase 5: $0-8 (matches)

### [PASS] PA auditors: Confirmed unchanged from /compose

The PA integration spec's Section 1 explicitly states: "The 5 PA auditors operate IDENTICALLY to the existing `/compose` skill. No modifications." The question assignments match the /compose skill exactly:
- Auditor 1: E-01, E-05, E-11, E-17
- Auditor 2: E-02, E-08, E-14, E-18
- Auditor 3: E-03, E-07, E-12, E-19
- Auditor 4: E-04, E-06, E-13, E-20
- Auditor 5: E-09, E-10, E-15, E-16

What auditors receive/don't receive matches /compose. Fresh-eyes isolation preserved.

### [PASS] Weaver enhancement: Receives package files but NOT conviction brief

Correctly specified. The Weaver gets:
- Same as /compose: screenshots, 5 auditor reports, weaver protocol
- NEW: `_package-pass-1.md`, `_package-pass-2.md`, `_package-pass-3.md`

Still does NOT get:
- `_tc-brief.md` (conviction brief)
- Builder reflection or decisions files
- Specialist outputs
- Vocabulary files

The rationale is well-articulated in Section 2 of the PA integration spec: "The package is operational (HOW to build). The brief is conceptual (WHAT to build). The Weaver assesses operational compliance, not conceptual fidelity." Clean separation.

### [PASS] Output 4 format: Section-by-section with 3 ratings

The format has section-by-section assessment with 4 fields per section (Instructed, Evidence, Compliance, Gap) and a per-gap diagnosis of BUILDER DIVERGED / PACKAGE UNCLEAR / BOTH. The summary includes counts and the single highest-impact gap.

The three diagnosis categories are well-defined with clear criteria and distinct fix-cycle actions for each.

### [PASS with caveat] Fix cycle routing: Gap location -> package file

The routing table in the PA integration spec (Section 5):
- Section 0, 1, 2 gaps -> `_package-pass-1.md`
- Section 3, 4, 5 gaps -> `_package-pass-2.md`
- Section 6, 7, 8 gaps -> `_package-pass-3.md`

This correctly maps to the package file structure from the pipeline spec (Section 5.7):
- Pass 1 = Sections 0, 1, 2, 9
- Pass 2 = Sections 3, 4, 5
- Pass 3 = Sections 6, 7, 8

The SKILL skeleton (lines 673-676) has a slightly different framing -- it uses issue category names rather than section numbers ("Zone architecture issues", "Anti-pattern issues", "Foundation/mechanism issues"). Both are consistent in substance but use different vocabulary. Recommend aligning the language: the PA integration spec's section-number routing is more precise and should be canonical.

### [PASS] Edge case: High compliance + weak perceptual result

Addressed in PA integration spec Section 7, Edge Case 1. Three possible diagnoses:
1. Package instructions don't produce richness (research leg weak)
2. Builder followed literally but not creatively (compliance without creative investment)
3. Content-mechanism fit failure

The Weaver writes a diagnostic note. Fix cycle action: Weaver's Creative Direction takes precedence over package instructions. This is the right call -- perceptual reality outranks compliance.

### [PASS] Edge case: Low compliance + strong perceptual result

Addressed in PA integration spec Section 7, Edge Case 4. The builder exercised creative authority and it worked. Weaver writes a diagnostic note. Fix cycle action: do NOT direct the fix builder to increase compliance. If verdict is SHIP, no action. If REFINE for other reasons, follow Weaver's creative direction, not compliance gaps.

This respects the builder's 80% creative authority from the pipeline spec.

---

## CRITICAL FINDING: `_comparison-report.md` vs Output 4 Inconsistency

This is the single most significant issue across both specs. There are **three competing specifications** for the comparison/compliance report:

### Source 1: Pipeline Spec (Section 9, Layer C)
> Written to: `_comparison-report.md`

Specifies it as a **standalone file**, separate from synthesis.md. Also listed in the Output Manifest (Section 16) as a separate file: `_comparison-report.md ........... Package vs build gap analysis`

### Source 2: PA Integration Spec (Section 8)
> "In this implementation, that document IS Output 4 of the Weaver's synthesis. There is no separate `_comparison-report.md` file."

Explicitly says Output 4 lives INSIDE `_pa/synthesis.md`. No standalone file.

### Source 3: SKILL Skeleton (Step 4D, line 602-625)
> "After the Weaver completes, read... Write a comparison report to `{OUTPUT_DIR}/_comparison-report.md`"

Creates a **standalone `_comparison-report.md`** written by the **orchestrator** (not the Weaver), AFTER the Weaver produces Output 4 inside synthesis.md. This is a THIRD option: Output 4 is in synthesis.md AND a separate comparison report is extracted by the orchestrator.

### Impact
- The PA integration spec says no separate file exists.
- The SKILL skeleton creates a separate file (written by the orchestrator, not the Weaver).
- The pipeline spec's Output Manifest lists both `synthesis.md` and `_comparison-report.md` as separate entries.
- The SKILL skeleton's Quick Reference table (line 26) lists `_comparison-report.md` as a Phase 4 output.

**The SKILL skeleton's approach (Output 4 in synthesis.md + orchestrator-extracted standalone report) is actually the best of all three**, but it contradicts the PA integration spec's "There is no separate `_comparison-report.md` file." The PA integration spec should be updated to acknowledge the orchestrator extraction step, OR the SKILL skeleton should remove Step 4D. They cannot both be correct as written.

**Recommendation:** Align on the SKILL skeleton's approach. Update PA integration spec Section 8 to say: "Output 4 is produced by the Weaver as part of `_pa/synthesis.md`. The orchestrator then extracts a standalone `_comparison-report.md` for the pipeline log and fix cycle routing. This extraction is part of the live pipeline flow (Step 4D), not optional post-processing."

---

## Additional Findings

### FINDING: RETHINK vs REBUILD terminology inconsistency

Three different verdict terms are used across documents:
- Pipeline spec Section 7.3: "SHIP / REFINE / REBUILD" (Section header says REBUILD)
- PA integration spec Section 3: "SHIP / REFINE / RETHINK" (Output 3 uses RETHINK)
- SKILL skeleton line 597: "SHIP / REFINE / REBUILD"
- Instrumentation spec Layer B table: "SHIP / REFINE / RETHINK"
- /compose skill: Uses "SHIP / REFINE / REBUILD"

The PA integration spec and instrumentation spec use RETHINK. The pipeline spec, SKILL skeleton, and /compose use REBUILD. These mean the same thing but inconsistent naming will confuse agents.

**Recommendation:** Standardize on one term. RETHINK is better (it's less dramatic and more accurate -- the TC derivation is being rethought, not the entire build being demolished). But /compose uses REBUILD, so changing to RETHINK means the Weaver protocol from the PA skill will say REBUILD while the pipeline expects RETHINK. Standardize on REBUILD for consistency with /compose unless the PA skill is also being updated.

### FINDING: Fix cycle count inconsistency

- Pipeline spec Section 8: "Max 2 fix cycles"
- /compose skill Phase 4: "Maximum 3 fix cycles. Track by counting fix-N-feedback.md files. If fix-3-feedback.md exists, stop."
- Pipeline spec Section 12 (Proven Patterns): "Maximum 3 fix cycles"
- SKILL skeleton line 653: "Maximum 2 fix cycles"
- Instrumentation spec: Not explicitly stated (references "maximum 1 re-run per phase" for quality floors, which is different)

Is it 2 or 3? The pipeline spec says 2 (Section 8) but also says 3 (Section 12, copied from /compose patterns). The SKILL skeleton says 2. The /compose skill says 3.

**Recommendation:** This is a deliberate design decision, not a copy error. The Tripod pipeline costs more per cycle (~$10-15 for re-screenshot + full re-PA), so 2 is probably correct. But the contradiction with Section 12 ("Proven Patterns from /compose") will confuse the orchestrator. Add a note to Section 12: "In Tripod, maximum is reduced to 2 fix cycles due to higher per-cycle cost."

### FINDING: Instrumentation spec Layer A says "Time" field omitted, but _pass-N-decisions.md files don't have Layer A logs

The instrumentation spec's "Which Agents Write Layer A Logs" table assigns logs to:
- Builder Pass 1 -> `_pass-1-decisions.md`
- Builder Pass 2 -> `_pass-2-decisions.md`
- Builder Pass 3 -> `_builder-reflection.md`

But the builder decisions files are 20-30 line summaries of what was built. Appending a 15-line log footer to a 20-30 line file makes the log almost half the document. For the builder reflection (30-50 lines), the log would be 25-33% of the content.

**This is not a blocking issue** -- 15 lines added to 20-50 lines is tolerable. But consider whether the builder's 6-dimension reflection (conviction fidelity, alternatives, surprises, impulses, experience, unresolved) already serves as a richer version of the Layer A log. The reflection IS the builder's self-assessment. Having both a structured 15-line log AND a 30-50 line reflection on the same file is redundant.

**Recommendation:** For Pass 3 only, let the builder reflection serve as the Layer A log equivalent. Add a note: "Builder Pass 3 writes _builder-reflection.md, which serves as both the reflection and the Layer A log. The 6-dimension reflection format supersedes the standard log template for this agent."

### FINDING: Weaver receives HTML source -- not explicitly in /compose, is new

The PA integration spec Section 7, Edge Case 2 says: "The Weaver receives the HTML source file in addition to screenshots." The assessability table confirms the Weaver checks HTML source for soul checklist, anti-patterns, CSS examples.

In /compose, the Weaver receives ONLY screenshots + auditor reports + Weaver protocol. No HTML source.

This is a meaningful change from /compose that isn't flagged as new. It gives the Weaver more power (can check CSS values directly) but also risks contaminating the experiential assessment -- if the Weaver reads CSS before writing the Experience Portrait, they may see the builder's naming conventions and infer the metaphor.

The PA integration spec's process ordering (Step 3 before Step 4) mitigates this: "Complete your Experience Portrait, Creative Direction, and Verdict before beginning the Package Compliance assessment." But the Weaver is a single agent in a single context. If it reads the HTML source at any point, it HAS that information for all outputs.

**Recommendation:** Explicitly instruct the Weaver: "Do NOT read the HTML source until after you have completed Outputs 1-3. Read it only for Output 4 (Package Compliance). If you read the HTML before completing your experiential assessment, your perceptual judgments will be contaminated by implementation details." Add this to the Weaver prompt section.

### FINDING: Missing quality floor for Weaver's Output 4

Every other agent has explicit quality floors. The Weaver's Output 4 (Package Compliance) has no stated minimum. What if the Weaver writes a 5-line compliance section that says "Mostly followed" without the section-by-section breakdown?

The template is detailed, but the Weaver could compress it. Add a quality floor: "Output 4 must assess all 9 sections (0-8, skipping 9) individually. Each section assessment must include all 4 fields (Instructed, Evidence, Compliance, Gap). The summary must include counts and highest-impact gap."

### FINDING: Re-run protocol says "Maximum 1 re-run per phase" but fix cycles get 2

The instrumentation spec's re-run protocol (Layer B) allows 1 re-run per phase if an agent fails quality floor. But Phase 5 allows 2 fix cycles. These are different mechanisms -- re-runs are quality floor failures within a phase, fix cycles are verdict-driven iterations of the entire evaluate-refine loop. The distinction is clear on careful reading, but could confuse an orchestrator under context pressure.

**Recommendation:** Add a one-liner to the re-run protocol: "Re-runs are for quality floor failures within a phase. Fix cycles (Phase 5) are a separate mechanism governed by the verdict."

---

## Summary

| Check | Result | Notes |
|-------|--------|-------|
| Layer A: 15-line cap, no bloat | PASS | Template concise, edge case handled |
| Layer B: Practical _pipeline-log.md | PASS | Append-only, clear decision gate |
| Layer C: Section mapping, Section 9 skip | PASS | Well-reasoned, assessability table strong |
| Cost tracking | PASS | Ranges, upper bound, $50 threshold |
| PA auditors unchanged | PASS | Identical to /compose, fresh-eyes preserved |
| Weaver: package but no brief | PASS | Clean operational/conceptual separation |
| Output 4 format | PASS | 3 diagnosis ratings, clear criteria |
| Fix cycle routing | PASS with caveat | Consistent in substance, vocabulary differs |
| High compliance + weak result | PASS | Three diagnoses, creative direction takes precedence |
| Low compliance + strong result | PASS | Builder's creative authority respected |
| _comparison-report.md consistency | **FAIL** | 3 competing specs, must reconcile |

**Blocking issues:** 1 (comparison report inconsistency)
**Non-blocking issues:** 6 (RETHINK/REBUILD terminology, fix cycle count, Time field in pipeline spec, builder log redundancy, Weaver HTML source contamination risk, Output 4 quality floor)

**Overall assessment:** Both specs are well-crafted and thorough. The PA integration spec in particular handles edge cases with sophistication -- the "high compliance + weak result" and "low compliance + strong result" scenarios are exactly the diagnostic outcomes that make the Tripod experiment informative. The single blocking issue (comparison report file identity) is a reconciliation task, not a design flaw. The SKILL skeleton already has the best answer; the other docs just need to align with it.
