# Review: Specialist 5 (Protocol Analyst) + Synthesizer (Package Assembler)

**Reviewer:** Fresh-eyes adversarial reviewer (zero context from writers)
**Date:** 2026-03-02

---

## VERDICT: STRONG with 5 issues (2 SIGNIFICANT, 3 MINOR)

Both prompts are well-structured, deeply specific, and show clear understanding of the pipeline architecture. The Synthesizer prompt in particular is the strongest agent prompt in the set -- its deduplication logic, conflict resolution hierarchy, and 3-file split are precisely specified. However, there are cross-compatibility issues between the Synthesizer's output and the builder prompts that could cause runtime problems.

---

## CHECKLIST RESULTS

- [x] S5 file paths match spec (Layer 7+8)
- [x] S5 consumption protocol definition is clear and actionable
- [x] S5 anti-orphaning principle is correctly stated
- [x] S5 Agent-0C pattern analysis is structured (not just "find patterns")
- [x] Synthesizer 3-file split: _package-pass-1.md (Sections 0,1,2,9), _package-pass-2.md (Sections 3,4,5), _package-pass-3.md (Sections 6,7,8) -- matches spec exactly
- [x] Synthesizer section templates: all 10 sections templated
- [x] Synthesizer deduplication logic: clear criteria for when to merge vs keep separate
- [x] Synthesizer conflict resolution: TC brief as tiebreaker clearly stated
- [x] Synthesizer recipe format: sequenced verbs, not checklists
- [x] Synthesizer quality floor: 400-600 total, no file below 100 lines
- [x] Synthesizer references cd-001 and cd-006 as exemplars
- [x] Edge cases for both prompts
- [~] CRITICAL: Does the synthesizer's output format MATCH what the builder prompts expect to receive? -- **PARTIAL MATCH, see Issue #1**

---

## ISSUE #1 [SIGNIFICANT]: Section numbering in synthesizer output vs builder expectations

**Problem:** The Synthesizer places Section 9 (Consumption Protocol) in `_package-pass-1.md`. The Builder Pass 1 prompt says it receives "Section 0: Soul Checklist, Section 1: Build Context, Section 2: Mechanism Selections, Section 9: Consumption Protocol." This match is correct.

However, Section 9 contains the anti-orphaning principle (lines 193-198 of synthesizer prompt). The Builder Pass 1 prompt references "PACKAGE citation comments" (builder-pass-1-prompt.md lines 172-183) but never explicitly mentions the anti-orphaning principle or Section 9 by name. The builder is told to "cite which research package finding drives your decision" but is not told this traces back to Section 9's anti-orphaning framework.

**Risk:** The builder may implement package tracing without understanding it connects to a formal anti-orphaning principle, reducing the quality of `_pass-1-decisions.md` and breaking the traceability chain that the Weaver (Phase 4) depends on for Package Compliance analysis.

**Fix:** In the Builder Pass 1 prompt, add an explicit reference in the "Checkpoint: Package Traceability" section:

```
This traceability follows the anti-orphaning principle from Section 9 of your research
package: every CSS rule must trace to a finding, mechanism, or constraint. Review Section 9
before your first CSS decision.
```

---

## ISSUE #2 [SIGNIFICANT]: Synthesizer Section 2 mechanism count vs builder expectation

**Problem:** The Synthesizer prompt specifies Section 2 should contain "5-8 mechanisms" (line 165). The Builder Pass 1 prompt says "Every mechanism from Package Section 2 is deployed" (line 231) and in the edge case section says "If the research package Section 2 contains fewer than 3 mechanism selections" (line 278).

The issue is that the Synthesizer has no awareness of what the Builder's Edge Case threshold is. If the Synthesizer produces exactly 5 mechanisms (its floor), the builder will deploy all 5. But there's no cross-validation: the Synthesizer doesn't know that the builder's edge case triggers at <3 mechanisms, and the builder doesn't know that the synthesizer's floor is 5. This is fine in the happy path, but if Specialist inputs are thin (Edge Case 1 in the Synthesizer prompt), the Synthesizer may produce fewer mechanisms without knowing the builder expects 5+.

**Risk:** If the Synthesizer drops to 3-4 mechanisms due to thin specialist input and doesn't flag this in its Agent Log, the builder will deploy them without knowing the package is below the synthesizer's own quality floor. The Weaver has no basis to flag this gap either.

**Fix:** Add to the Synthesizer's Edge Case 1 handling: "If you produce fewer than 5 mechanisms in Section 2, note this explicitly at the top of `_package-pass-1.md`: 'NOTE: This package contains N mechanisms (below the standard 5-8). Specialist inputs were thin. Builder should deploy all N with extra depth.'"

---

## ISSUE #3 [MINOR]: S5 output length vs actual task scope

**Problem:** S5's quality floor specifies "60-80 lines" of output (line 162). However, the task requires:
- Consumption protocol: 6-8 steps with rationale (estimate: ~20-30 lines)
- Agent-0C patterns: minimum 5 patterns with description, effectiveness, recommendation (estimate: ~30-40 lines)
- Anti-orphaning principle + traceability format (~10 lines)
- Template recommendation for synthesizer (~10-15 lines)
- Agent log (~8 lines)

That's a realistic minimum of ~80-100 lines. The 60-80 ceiling is tight for the task scope, especially since the exemplar output lines in the prompt (lines 112-148) alone consume 36 lines for just 1 protocol step + 1 pattern.

**Risk:** S5 will either produce thin content (rushing to fit 60-80 lines) or exceed the ceiling and worry about quality compliance.

**Fix:** Raise the output range to 80-120 lines. This is still well within the synthesizer's ability to consume (it handles ~400-580 lines of specialist input total, per spec Section 5.7).

---

## ISSUE #4 [MINOR]: S5 reading strategy assumes skim is sufficient for cd-002 through cd-005

**Problem:** S5 prompt line 42 says "Then skim cd-002 through cd-005 for variation patterns." But the task explicitly asks to find "what SCALED and what stayed CONSTANT" (line 82) and "per-builder customization" patterns (line 82). Skimming is insufficient for identifying what varies between packages -- you need side-by-side structural comparison.

The cd-001 and cd-006 "bookends" strategy is smart (simplest vs most complex), but patterns like "shortest package -- what was cut, what survived" (line 39, about cd-005) require reading cd-005 at least partially in depth.

**Risk:** S5 produces pattern analysis that only reflects cd-001 and cd-006, missing intermediate variation patterns (cd-002 through cd-005 have different component counts, different risk profiles, different density patterns). The synthesis is skewed toward the extremes.

**Fix:** Change "skim cd-002 through cd-005" to "read cd-005 in full (shortest package -- identify what was cut). Then skim cd-002 through cd-004 for variation patterns: component counts, risk levels, density diagram shapes."

---

## ISSUE #5 [MINOR]: Synthesizer Section 7 sourcing is unclear

**Problem:** Section 7 (CSS Examples from Validated Explorations) is sourced from "Specialist 3 (Case Study Analyst) + Specialist 2 (Validation Mapper)" per line 352. But Specialist 3's actual output (`_specialist-3-casestudies.md`) is already consumed by Section 5 (Case Study Processes). The Synthesizer prompt doesn't clarify whether Section 7 should pull from the SAME S3 content as Section 5, or from DIFFERENT parts of S3's output.

Looking at the Section 5 vs Section 7 distinction: Section 5 = "processes used" + "CSS that produced richness"; Section 7 = "SPECIFIC CSS snippets that produced rich output." These overlap substantially. The distinction is process (Section 5) vs code (Section 7), but S3's prompt asks for both processes AND CSS in a single output.

**Risk:** The Synthesizer either (a) duplicates CSS between Sections 5 and 7, or (b) is unsure which CSS goes where and makes an arbitrary split.

**Fix:** Add clarification to the Synthesizer prompt between Sections 5 and 7:

```
Section 5 uses S3's PROCESS extractions (how the case study thought) with supporting CSS.
Section 7 uses S3's CSS PATTERNS divorced from their case study context -- reusable snippets
that work in any metaphor. If S3 provided CSS within a process extraction, it goes in Section 5.
If S3 provided standalone CSS patterns (e.g., "zone transition via border + spacing"), it goes
in Section 7. S2's validated findings may also contribute standalone CSS to Section 7.
```

---

## STRENGTHS

### Specialist 5

1. **Reading strategy is well-sequenced.** Master execution specs first (protocol), then cd-001 and cd-006 (structural bookends), then variation scanning. This prevents the agent from getting lost in 3,892 lines of content.

2. **The 10 pattern candidates are specific and numbered.** Lines 77-86 give the agent 10 concrete things to look for, preventing the generic "find patterns" failure mode. The difference between "find patterns" and "look for template structure, recipe format, ASCII density diagrams, component tables with role/weight/velocity..." is the difference between useful and useless output.

3. **Edge Case 3 (unusual metaphor) correctly separates STRUCTURAL from CONTENT patterns.** This prevents the agent from trying to force-map Agent-0C's geological metaphors onto unrelated content.

4. **Critical Reminder #3 ("Every recommendation must target the synthesizer") correctly frames the audience.** S5 doesn't write for the builder; it writes for ONE downstream consumer.

### Synthesizer

1. **Deduplication logic (Step 3) is the best-specified section across all prompts.** The table with overlap types and resolution rules (lines 43-48) eliminates ambiguity. "Keep S2's version (validated with provenance chain) and add S1's build action" is precise enough to execute deterministically.

2. **Conflict resolution hierarchy (Step 4) is correctly ordered.** TC brief > validated > specific > generic > constraints are non-negotiable. This matches the pipeline's conviction-first philosophy.

3. **The 3-file split with per-file self-containment is well-designed.** Each file includes a soul reminder even if the full checklist is in pass-1 only. The builder pass 2 and pass 3 templates both include "Soul reminder: border-radius: 0, box-shadow: none, no gradients, no rgba alpha < 1.0."

4. **Quality floor is both per-file AND aggregate.** "No file below 100 lines" + "Total 400-600 lines" prevents the Synthesizer from dumping everything into pass-1 and producing thin pass-2/3 files.

5. **Edge Case 5 (metaphor naming) with placeholder syntax `--[metaphor-concept]-[property]`** is a smart convention that bridges the gap between synthesizer output and builder's concept-based naming requirement.

6. **The exemplar references are correctly positioned.** The Synthesizer is told to READ cd-001 and cd-006, study format patterns, then go DEEPER (add CSS examples, mechanism rationale, case study processes). This "floor, not ceiling" framing (line 636: "Agent-0C is the floor, not the ceiling") prevents slavish template copying.

---

## CROSS-COMPATIBILITY VERIFICATION

### Synthesizer output -> Builder Pass 1 expectations

| Synthesizer produces | Builder Pass 1 expects | Match? |
|---------------------|----------------------|--------|
| Section 0: Soul Checklist (~15 lines) | "Section 0: Soul Checklist (non-negotiable constraints)" | YES |
| Section 1: Build Context (~30 lines) | "Section 1: Build Context (metaphor + content map)" | YES |
| Section 2: Mechanism Selections (~100-120 lines) | "Section 2: Mechanism Selections (what to deploy, with CSS examples)" | YES |
| Section 9: Consumption Protocol (~20 lines) | "Section 9: Consumption Protocol (how to sequence your work)" | YES |
| File header: "Research Package -- Pass 1: FOUNDATIONS" | Reading order item 1: "Research Package (_package-pass-1.md)" | YES |

### Synthesizer output -> Builder Pass 2 expectations

| Synthesizer produces | Builder Pass 2 expects | Match? |
|---------------------|----------------------|--------|
| Section 3: Findings -> Build Actions (~80-100 lines) | "Section 3: Findings mapped to build-specific CSS actions" | YES |
| Section 4: Zone Architecture (~50-70 lines) | "Section 4: Zone architecture with ASCII density diagram" | YES |
| Section 5: Case Study Processes (~50-60 lines) | "Section 5: Case study processes and CSS examples from validated explorations" | YES |
| Section 3 table format: #, Finding, Build Action, Zone(s), CSS | Builder expects "finding ID", "relevance rationale", "specific CSS action" | PARTIAL -- builder expects 3 columns, synthesizer template has 5. Builder can handle this but the language doesn't align perfectly |

### Synthesizer output -> Builder Pass 3 expectations

| Synthesizer produces | Builder Pass 3 expects | Match? |
|---------------------|----------------------|--------|
| Section 6: Anti-Patterns risk-profiled (~30-40 lines) | "Section 6: Anti-patterns risk-profiled for THIS content, with CSS mitigations" | YES |
| Section 7: CSS Examples (~40-60 lines) | Not explicitly referenced by name in builder-pass-3 | WEAK -- builder prompt references "Validated CSS from Section 7" (line 126-127) but calls them "Validated CSS examples from prior explorations" rather than matching the exact section title "PROVEN CSS PATTERNS" |
| Section 8: Structural Propositions (~20-30 lines) | "Section 8: Structural propositions -- testable hypotheses about how the metaphor should manifest" | YES |

### Synthesizer output -> Weaver expectations

Per spec Section 7.3: Weaver receives all three package files for compliance checking. The Synthesizer's Agent Log sections at the bottom of each file provide the "what was instructed" side of the comparison report. This chain is complete.

---

## SUMMARY

The Specialist 5 and Synthesizer prompts are strong. S5 is well-targeted with clear reading strategy and structured pattern extraction. The Synthesizer is the most carefully specified agent in the pipeline -- its deduplication, conflict resolution, and 3-file architecture are precisely defined.

The 2 significant issues (anti-orphaning linkage to builder traceability; mechanism count cross-validation on thin input) should be fixed before the pipeline runs. The 3 minor issues (S5 output ceiling too low; skim strategy insufficient for variation analysis; Section 5/7 CSS overlap) are quality improvements that reduce risk but aren't blockers.

**Overall confidence that these prompts will produce good output on first run: 7.5/10.** The primary risk is not in the prompts themselves but in the synthesizer-to-builder handoff -- specifically whether builders will absorb Section 9's consumption protocol deeply enough to follow it.
