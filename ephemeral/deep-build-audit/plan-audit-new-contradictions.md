# Cross-Document Contradiction Audit: Beyond K01-K08

**Agent:** Opus 4.6 (Spec Contradiction Hunter)
**Date:** 2026-02-28
**Scope:** All 9 source docs (00-08) in `_deterministic-orchestration/`
**Method:** Systematic pair-wise comparison of every quantitative value, type definition, function signature, process step, and threshold across all 36 document pairs.

---

## Summary

The plan identifies 8 contradictions (K01-K08). This audit found **13 additional contradictions** not captured in K01-K08 or the gap registry. The original 8 is NOT the ceiling -- a 9-document, 11,253-line corpus has substantial cross-document drift, especially where docs 02 and 05 independently specify overlapping behavior (PA hardening), and where doc 03 preserves a superseded pipeline model that leaks into specific values.

---

## New Contradictions

### K09: State schema version — `version: 2` vs `schemaVersion: 3`

**BLOCKING**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Line 216 | `version: 2;` |
| 02 | Line 1489 | `version: 2,` (in `initializeState`) |
| 02 | Line 1540 | `if (state.version !== 2)` |
| 08 | Line 33 | `schemaVersion: 3;` |
| 08 | Line 537 | `Is state.schemaVersion compatible?` |
| 08 | Line 610 | `if (existing.schemaVersion !== 3)` |

**Contradiction:** Doc 02 defines the state schema as `version: 2` with a field named `version`. Doc 08 defines it as `schemaVersion: 3` with a different field name. Both the version number AND the field name differ. The `loadState` function in doc 02 checks `state.version !== 2`; the resume algorithm in doc 08 checks `existing.schemaVersion !== 3`. These are incompatible: code implementing doc 02 will write `{ "version": 2 }` and code implementing doc 08 will look for `{ "schemaVersion": 3 }` -- resume will always fail.

**Resolution:** Doc 08 is the deeper specification (it explicitly states it "goes DEEPER" than 02 on state management). **Doc 08 is canonical:** field name `schemaVersion`, value `3`. Doc 02's `version: 2` must be updated.

---

### K10: PA auditor count in Phase B — 3 vs 9

**BLOCKING**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Line 427 | `paPassesPerCycle: number; // Default: 4 (3 auditors + 1 weaver)` |
| 02 | Line 1680 | `Run 3 PA auditors in parallel (each gets different questions)` |
| 02 | Line 1715 | `auditorId: \`auditor-\${String.fromCharCode(65 + i)}\`, // A, B, C` |
| 02 | Line 2269 | `paPassesPerCycle: 4, // 3 auditors + 1 weaver` |
| 00 | Line 217-231 | `9 PA AUDITORS ... PA-A through PA-H (8 parallel) + PA-I (sequential)` |
| 05 | Line 98 | `auditorLetter: 'A' \| 'B' \| 'C' \| 'D' \| 'E' \| 'F' \| 'G' \| 'H' \| 'I'` |
| 05 | Lines 455-540 | Full 9-auditor deployment with question assignments per auditor A-I |

**Contradiction:** Doc 02 consistently says 3 PA auditors throughout its Phase B implementation. Doc 00 and doc 05 consistently say 9 (8 parallel + 1 integrative). K06 already resolves the doc 06 vs docs 00+05 disagreement about "3 vs 9" for cost estimation, declaring 9 canonical. But K06 does NOT address the fact that doc 02's IMPLEMENTATION CODE also uses 3. The `runPAHardening` function in doc 02 (lines 1710-1718) spawns auditors A, B, C only. The data type in doc 05 (line 98) specifies A through I. The doc 02 implementation must be rewritten to spawn 9 auditors, not 3.

**Resolution:** Doc 05 is canonical (9 auditors: A-H parallel, I sequential). Doc 02's `runPAHardening()` function and `paPassesPerCycle` default value must be updated to match.

Note: K06 partially covers this but frames it as a cost estimation issue, not an implementation code issue. The doc 02 code is actively wrong, not just imprecise.

---

### K11: `--output-format` for Phase A passes — `text` vs `json`

**HIGH**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Line 1251 | `--output-format    : 'text' for raw text output` |
| 02 | Line 1267 | `'--output-format', 'text',` |
| 00 | Line 354 | `--output-format json \` |
| 04 | Line 633 | `Use --output-format json --json-schema -- every agent returns structured, validated output` |

**Contradiction:** Doc 02's `invokeClaudeP` function hardcodes `--output-format text` for ALL passes (Phase A corpus integration). Doc 00's invocation model and doc 04's architecture recommendation both say `json`. K04 resolves this at the level of "which format to use" (JSON wins), but doc 02's actual code still uses `text`, AND doc 02's token parsing relies on `stderr` parsing (lines 1306-1320) which is the `text` mode approach. With `json` output, token usage is in the JSON response itself (`usage` field), not stderr.

**Resolution:** Doc 02's `invokeClaudeP` must use `--output-format json` and parse tokens from the JSON response `usage` field, not stderr. K04 already declares JSON canonical but does not flag that the implementation code contradicts this.

---

### K12: Rotation shift formula — `N/5` vs `N/3`

**HIGH**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Line 127 | `shift = Math.floor(files.length * rotationIndex / 3)` (comment) |
| 02 | Line 709-710 | `Rotation B: shift = floor(N * 2/5)` and `Rotation C: shift = floor(N * 4/5)` |
| 02 | Line 145-146 | Hardcoded `shift: 2` for B, `shift: 4` for C in `ROTATION_RHYTHM` |

**Contradiction:** Within doc 02, there are THREE different specifications for the rotation shift:
1. The `RotationSchedule` comment (line 127) says `Math.floor(files.length * rotationIndex / 3)` -- for 5 files, rotation B (index 1) = `floor(5*1/3)` = 1, rotation C (index 2) = `floor(5*2/3)` = 3.
2. The `getShiftForRotation` function (lines 709-710) says `floor(N * 2/5)` for B and `floor(N * 4/5)` for C -- for 5 files: B = 2, C = 4.
3. The `ROTATION_RHYTHM` constant (lines 145-146) hardcodes B = 2, C = 4.

K08 notes the "hardcoded [0,2,4] vs formula" contradiction and resolves it with "use formula." But K08 does not notice that there are TWO different formulas: `N*rotationIndex/3` (line 127) and `N*{2,4}/5` (lines 709-710). These give DIFFERENT results for non-5-file subsets. For a 4-file subset: `N/3` formula gives shifts [0, 1, 2]; `N*{2,4}/5` formula gives shifts [0, 1, 3].

**Resolution:** The `getShiftForRotation` function (lines 709-723) is the most specific and correct implementation. The comment at line 127 is WRONG and must be deleted or corrected. `getShiftForRotation` is canonical.

---

### K13: Subset compositions — doc 02 vs doc 03 (S1 most dramatic)

**HIGH**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Lines 470-482 | S1 = R1, R2, R3, R4, R5 (all 5 research files, theme "Research + Density Direction") |
| 03 | Lines 104-111 | S1 = R3, DD3, DD6, CS-DD3, CS-DD6 (density core) |
| 02 | Lines 488-496 | S2 = Synthesis, DD-003, DD-004, DD-006, DD-Synth (research synthesis + DD cases) |
| 03 | Lines 113-121 | S2 = R1, OD1, OD6, CS-OD1, CS-OD4, CS-OD6 (organization core) |

**Contradiction:** K03 already notes subset composition differences and declares doc 03 canonical. But the divergence is far more extensive than K03 suggests. Doc 02 has COMPLETELY DIFFERENT subsets:
- Doc 02 S1: All 5 research files (R1-R5). Doc 03 S1: Density core (R3, DD3, DD6, case studies).
- Doc 02 S2: Synthesis + DD cases. Doc 03 S2: Organization core (R1, OD1, OD6, case studies).
- Doc 02 S3: OD case studies. Doc 03 S3: Axis+Combination core (R4, R5, AD6, CD6).
- Doc 02 S4: AD spec + CD cases. Doc 03 S4: DD extended (DD1-DD5, CS-DD4).
- Doc 02 S5: Grammar (mechanism catalog, rules, borders). Doc 03 S5: OD+Axis extended.
- Doc 02 S6: Pipeline philosophy + skills. Doc 03 S6: Remaining axis + CD.
- Doc 02 S7: Calibration + crown jewels. Doc 03 S7: Synthesis + connective.

This is not "different details" -- it is a complete redesign. Every file in every subset is different. The token estimates are also completely different (doc 02 S1: 42,036 tokens; doc 03 S1: 3,336 lines / ~2,225 tokens). K03 says "doc 03 is canonical" but does not communicate the SCALE of the divergence -- a developer reading doc 02 first would implement entirely wrong subsets.

**Resolution:** Doc 03 is canonical (filesystem-verified). The ENTIRE Section 3 of doc 02 (lines 465-563, ~100 lines) must be replaced with doc 03's subset definitions. The doc 02 token estimates are also invalid.

---

### K14: Refinement passes per cycle — "6-8" vs "1-6" vs "1-4"

**MEDIUM**

| Doc | Location | Text |
|-----|----------|------|
| 00 | Line 268 | `REFINEMENT PASSES (6-8 per cycle)` |
| 00 | Line 447 | `2-6 PA cycles x 6-8 ref passes = 12-48 PA passes` |
| 05 | Line 26 | `Step 8: REFINEMENT PASSES -- 1-6 claude -p calls (if IMPROVE/RETHINK)` |
| 05 | Line 1377 | `REFINE (IMPROVE): 1-6 passes` |
| 05 | Line 1411 | `const maxRefinementPasses = 4;` (actual implementation) |

**Contradiction:** Doc 00 says 6-8 refinement passes per cycle. Doc 05 says 1-6 in the overview. Doc 05's actual implementation caps at 4 (`maxRefinementPasses = 4`). These three values are incompatible and significantly affect cost estimates and runtime projections.

**Resolution:** Doc 05's implementation is canonical (max 4). Doc 00's "6-8" is aspirational/outdated. Doc 05's own overview text "1-6" is inconsistent with its code "1-4". The Phase B pass count formula should use max 4, not 6-8.

---

### K15: Weaver verdict values — SHIP/REFINE/REBUILD vs RELEASE/POLISH/IMPROVE/RETHINK

**MEDIUM**

| Doc | Location | Text |
|-----|----------|------|
| 00 | Line 247 | `Verdict: SHIP / REFINE / REBUILD` |
| 00 | Line 262 | Three-way routing: `SHIP`, `REFINE`, `REBUILD` |
| 05 | Line 86 | `verdict: 'RELEASE' \| 'POLISH' \| 'IMPROVE' \| 'RETHINK'` |
| 05 | Line 87 | `decision: 'SHIP' \| 'REFINE' \| 'REBUILD' \| 'ABORT'` |
| 05 | Line 123 | `shipDecision: 'RELEASE' \| 'POLISH' \| 'IMPROVE' \| 'RETHINK'` |

**Contradiction:** Doc 00 presents a 3-value verdict model (SHIP/REFINE/REBUILD). Doc 05 has a TWO-LAYER model: the Weaver produces a 4-value verdict (RELEASE/POLISH/IMPROVE/RETHINK), and the routing logic maps this to a 4-value action (SHIP/REFINE/REBUILD/ABORT). Doc 00 conflates these two layers into one, missing POLISH and ABORT entirely. A developer implementing from doc 00 would build a 3-way switch; doc 05 requires a 4-to-4 mapping with additional constraints (minCycles, stall detection, cost cap).

**Resolution:** Doc 05 is canonical (it is the PA integration spec). Doc 00 is a diagram and should be treated as a simplification, not an implementation reference.

---

### K16: PA cycle count range — "2-6" vs "2-6" vs "3-6"

**MEDIUM**

| Doc | Location | Text |
|-----|----------|------|
| 00 | Line 191 | `PA CYCLE (2-6 adaptive)` |
| 00 | Line 447 | `2-6 PA cycles` |
| 02 | Line 429 | `paHardeningCycles: number; // Default: 3-6 (adaptive)` |
| 05 | Line 34 | `minCycles: 2;` |
| 05 | Line 36 | `maxCycles: 6;` |

**Contradiction:** Doc 02 says the default is "3-6" (minimum 3). Docs 00 and 05 say minimum 2. This affects cost: 1 extra mandatory cycle at ~$18/cycle = $18 difference.

**Resolution:** Doc 05 is canonical (it defines the `PAHardeningConfig` interface with `minCycles: 2`). Doc 02's comment should say "2-6."

---

### K17: Total pass count range — "68-80" vs "68-104"

**MEDIUM**

| Doc | Location | Text |
|-----|----------|------|
| 00 | Lines 7, 448-449 | `68-80 passes` |
| 02 | Line 44 | `68-80 TOTAL PASSES` |
| Plan | Line 7 | `68-104 total claude -p calls per page build` |
| 00 | Line 447 | `2-6 PA cycles x 6-8 ref passes = 12-48 PA passes` (implies 68-104) |

**Contradiction:** The header of doc 00 says "68-80" but its own math (line 447) gives 56 + 12-48 = 68-104. Doc 02 also says "68-80." The plan says "68-104." Given K14 (max 4 refinement passes), the correct range should be 56 + (2-6 cycles x ~7-12 calls per cycle) = variable. The "68-80" figure uses 12-24 PA passes, but the actual PA cycle model (9 auditors + 1 integrative + 1 weaver + 1-4 refinement per cycle, times 2-6 cycles) produces far more than 24 calls.

**Resolution:** The total depends on the PA model. With 9 auditors + integrative + weaver + 4 max refinement = 15 calls per cycle. 2 cycles = 30 calls; 6 cycles = 90 calls. So total = 56 + 30-90 = **86-146 calls**. Both "68-80" and "68-104" are underestimates. This must be recalculated.

---

### K18: Screenshot viewports — 2 vs 3 (within doc 05)

**MEDIUM**

| Doc | Location | Text |
|-----|----------|------|
| 05 | Lines 234-236 | `DEFAULT_VIEWPORTS = [1440x900, 1024x768, 768x1024]` (3 viewports) |
| 07 | Lines 412-418 | `two viewport widths (1440px desktop, 768px mobile)` -- only 1440 and 768 |
| 07 | Lines 475-476 | `{SCREENSHOT_PATHS_1440}` and `{SCREENSHOT_PATHS_768}` -- only 2 viewport variables |
| 02 | Line 437 | `// Default: [{width: 1440, height: 900}, {width: 768, height: 1024}]` (2 viewports) |

**Contradiction:** K07 resolves the viewport list to "Three viewports: 1440x900, 768x1024, 375x812." But doc 05 specifies 3 DIFFERENT viewports (1440x900, 1024x768, 768x1024 -- note: 1024x768, NOT 375x812). Doc 07 templates only have placeholders for TWO viewports (1440 and 768). Doc 02's default config only lists 2. Even after K07's resolution, the prompt templates (doc 07) would need a `{SCREENSHOT_PATHS_375}` variable added, and doc 05's 1024x768 contradicts K07's 375x812.

**Resolution:** The K07 resolution (three viewports including 375x812 mobile) is correct for the final product, but doc 05's implementation code uses 1024x768 (tablet landscape) instead of 375x812 (mobile). Doc 07's templates must be updated to support 3 viewport sections. The plan should flag this as needing template changes.

---

### K19: Verifier gets observations on which passes — [3,6] vs [3,6,7]

**LOW**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Line 777 | `if (pass.agentRole === 'builder' && [3, 6].includes(pass.subsetPassNumber))` |
| 02 | Line 956 | Builder instructions handle passes 3 and 6 as "addressing verifier" |
| 00 | Lines 69-98 | Pattern: Build(1), Verify(2), Build(3), Build(4), Verify(5), Build(6), Build(7), Verify(8) |

**Contradiction:** Doc 02's code feeds verifier observations ONLY to passes 3 and 6. But the agent role pattern (from doc 02 line 700: passes 2, 5, 8 are verifier) means pass 7 is a builder pass AFTER verifier pass 5 (rotation C). Pass 7 should also receive the verifier observations from pass 5 (the Rotation B verifier). Currently it would get nothing, meaning the rotation C builder starts cold without any verifier feedback.

**Resolution:** Change `[3, 6]` to `[3, 6, 7]` so that pass 7 (first builder of rotation C) receives verifier observations from pass 5 (last verifier of rotation B). Alternatively, feed verifier observations to ALL non-first builder passes: `subsetPassNumber > 1 && agentRole === 'builder'`.

---

### K20: Cost estimate — $190-228 vs $20-50

**LOW** (informational, but misleading)

| Doc | Location | Text |
|-----|----------|------|
| 06 | Line 42 | `Total: ~$190-$228` |
| 04 | Line 377 | `Total: $20-50` |
| Plan | Line 13 | `Estimated cost per full pipeline run: $190-228` |

**Contradiction:** Doc 04's cost projection table (lines 371-377) estimates $20-50 total for 68-80 calls. Doc 06's adversarial analysis estimates $190-228. The plan uses doc 06's figure. The discrepancy is because doc 04 measured empirical per-call costs ($0.02-0.33) for SMALL test tasks, while doc 06 projected costs for FULL-SIZE passes (40-63K input tokens of corpus per builder pass). Doc 04's numbers are drastically wrong for real pipeline passes -- they extrapolate from "2+2" test calls to 56-pass builds.

**Resolution:** Doc 06 is canonical for cost estimation (it uses realistic per-pass token counts). Doc 04's table is useful for overhead measurement but misleading for total cost projection. The plan already uses doc 06's figure, so this is non-blocking, but doc 04's table should be annotated as "test-call overhead only, not full-pipeline projection."

---

### K21: `--max-turns` for Phase A builder — 1 vs 30

**HIGH**

| Doc | Location | Text |
|-----|----------|------|
| 02 | Line 1252 | `--max-turns 1      : Single turn, no tool use, no conversation` |
| 02 | Line 1268 | `'--max-turns', '1',` |
| 00 | Line 355 | `--max-turns 30 \` |
| 05 | Line 625 | `--max-turns 30              (auditor needs multiple tool calls for screenshots)` |

**Contradiction:** K05 resolves `--max-turns` as "per-role" with builders at 1. But doc 02's `invokeClaudeP` function is used for ALL passes including builder passes that need `--max-turns 1` AND Phase B refinement/PA passes that need higher limits. The function signature takes a generic `PipelineConfig` but has hardcoded `--max-turns 1`. For PA auditors (who need Read tool to view screenshots) and weaver (who needs many tool calls), `--max-turns 1` would make them unable to function.

The deeper issue: doc 02's `invokeClaudeP` is used in both `runCorpusIntegration` (Phase A, max-turns 1 is correct) and `runPAHardening` (Phase B, max-turns 1 is WRONG). The function needs per-pass max-turns parameterization.

**Resolution:** `invokeClaudeP` must accept `maxTurns` as a parameter, not hardcode it. Phase A builder/verifier: 1. PA auditors: 30. Weaver: 20-40. Refinement builder: varies. This is already implied by K05 but the implementation code in doc 02 does not support it.

---

## Why 8 Is Not the Ceiling

The plan's 8 contradictions (K01-K08) cluster around TOP-LEVEL parameters: pipeline model, file counts, flag values, auditor counts for cost, viewport lists, and rotation formulas. They were findable by comparing summary statements at the document level.

The 13 new contradictions fall into three categories the plan missed:

1. **Implementation code vs specification text** (K09, K10, K11, K12, K21): Doc 02 contains executable TypeScript that contradicts both its own specification text AND other documents. Comparing "what the code does" vs "what the docs say" requires reading function implementations, not just section headers.

2. **Scale of previously noted contradictions** (K13, K14): K03 and K08 note subset and rotation contradictions but understate their severity. K13 reveals that EVERY subset in doc 02 is wrong, not just "different details." K14 reveals three incompatible refinement pass counts across three docs.

3. **Cross-layer contradictions** (K15, K16, K17, K18, K19, K20): These involve mismatches between the diagram (doc 00), the architecture (doc 02), and the detailed spec (doc 05) at the level of data type enumerations, formula outputs, and process flow -- layers the plan treats as independent but that must be consistent.

The total of 21 contradictions (8 original + 13 new) across 9 documents is approximately 1 contradiction per 536 lines, or ~2.3 per document. This density is typical for multi-author specification corpora where docs were written in parallel without a single-pass consistency review.

---

## Resolution Priority

| ID | Severity | Affects | Resolution Owner |
|----|----------|---------|-----------------|
| K09 | BLOCKING | Resume will fail | Doc 02 must adopt doc 08's `schemaVersion: 3` |
| K10 | BLOCKING | PA will use wrong auditor count | Doc 02's `runPAHardening` must be rewritten for 9 auditors |
| K11 | HIGH | Token parsing will fail | Doc 02's `invokeClaudeP` must use JSON output format |
| K12 | HIGH | Rotation formula will be wrong | Delete/correct the `N/3` comment in doc 02 line 127 |
| K13 | HIGH | All subsets will be wrong | Replace doc 02 Section 3 entirely with doc 03's definitions |
| K21 | HIGH | PA auditors unable to use tools | Parameterize `maxTurns` in `invokeClaudeP` |
| K14 | MEDIUM | Cost/time estimates wrong | Standardize on max 4 refinement passes (doc 05 code) |
| K15 | MEDIUM | Routing logic wrong | Use doc 05's 4-value model, not doc 00's 3-value |
| K16 | MEDIUM | Cost estimate off by 1 cycle | Standardize on minCycles: 2 (doc 05) |
| K17 | MEDIUM | Total pass count underestimated | Recalculate: 86-146, not 68-80 |
| K18 | MEDIUM | Templates missing viewport | Add 375px to doc 05; add third viewport to doc 07 templates |
| K19 | LOW | Rotation C builder gets no verifier feedback | Add pass 7 to verifier observation recipients |
| K20 | LOW | Misleading cost table | Annotate doc 04 table as test-overhead-only |
