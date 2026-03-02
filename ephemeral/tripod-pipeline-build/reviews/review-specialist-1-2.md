# Review: Specialist 1 + Specialist 2 Prompts

**Reviewer:** Fresh-eyes reviewer (zero prior context)
**Source of Truth:** TRIPOD-PIPELINE-SPECIFICATION.md
**Date:** 2026-03-02

---

## Specialist 1 (Findings Mapper) — VERDICT: PASS

### Checklist

| Check | Result | Notes |
|-------|--------|-------|
| File paths match spec Section 10 | **PASS** | All 7 file paths verified on disk and match spec Layer 1 + Layer 6a inventory exactly. Line counts match spec. |
| Domain boundary (Layer 1 + Layer 6a only) | **PASS** | "WHAT YOU DO NOT DO" section explicitly excludes stage findings (S2), case studies (S3), convention specs (S4), and execution specs (S5). R5-EVALUATION-MATRIX.md is listed under Layer 6a in the spec (Section 10, Layer 6 "Synthesis & Evaluation"), so its inclusion is correct. |
| Common input (content.md + _tc-brief.md) | **PASS** | Steps 1 and 2 clearly reference content.md and _tc-brief.md as the first reads. |
| Quality floor matches spec | **PASS** | Spec Section 5.2 says "Minimum 20 HIGH findings." Prompt Section "QUALITY FLOOR" says "Minimum 20 HIGH findings." Match. Spec says "Recipe format (verbs: apply, deploy, encode)." Prompt says "Recipe verbs: Apply, Deploy, Encode, Set, Map, Configure." Consistent. |
| Recipe format | **PASS** | Steps are sequenced (Step 1 through Step 8). Verbs are recipe-style: "Absorb", "Read", "Rate", "Write." CSS Action examples use "Apply", "Deploy", "Encode", "Set." No checklist verbs found in the instructions. |
| Exemplar depth | **PASS** | Three exemplar blocks (HIGH finding, cross-reference, and axis finding) are specific enough with concrete CSS property values, selectors, and expected visual evidence. An agent can clearly infer the expected format. |
| Edge cases | **PASS** | Four edge cases addressed: thin output (<20 findings), context exhaustion, untranslatable findings, unusual content structure. Each has a specific mitigation. |
| Agent log footer | **PASS** | Step 8 specifies the exact footer format with: files read, total findings assessed, HIGH count, MEDIUM count, decisions made, output size, quality self-assessment. |
| Output file path | **PASS** | "Write your complete output to the file path provided by the orchestrator (typically `_specialist-1-findings.md` in the build directory)." Clear. |
| Output size | **PASS** | Spec says "~100-150 lines." Prompt says "100-150 lines. Minimum 100 lines." Consistent. |

### Minor Observations (Not Revisions)

1. **R5-EVALUATION-MATRIX.md layer classification:** The spec lists this under Layer 6 ("Synthesis & Evaluation") but the prompt header says "Layer 1+6a." The spec Section 5.2 also labels S1's domain as "Layer 1 + Layer 6a." This is internally consistent — R5-EVALUATION-MATRIX is part of S1's "6a" sub-assignment. No issue, but the "6a/6b" sub-layer split is only implicit in the spec (it only says "Layer 6" in Section 10, but splits it between S1 and S2 in Section 5). The spec should arguably make the 6a/6b split explicit in Section 10 — but that's a spec issue, not a prompt issue.

2. **Total line count 4,810 lines:** The prompt says "~4,810 lines across 7 files." Adding the spec's line counts: 584 + 810 + 553 + 990 + 784 + 383 + 706 = 4,810. Exact match.

3. **Finding count 337:** Referenced in the prompt. Spec Section 10 Layer 1 confirms "337 total findings." Match.

---

## Specialist 2 (Validation Mapper) — VERDICT: PASS with 2 REVISE items

### Checklist

| Check | Result | Notes |
|-------|--------|-------|
| File paths match spec Section 10 | **PASS** | All 10 file paths verified on disk. Paths match spec Layer 2 + Layer 5 + Layer 6b inventory. Line counts match. |
| Domain boundary (Layer 2 + Layer 5 + Layer 6b only) | **PASS** | "WHAT YOU DO NOT DO" section explicitly excludes raw research (S1), case studies (S3), convention specs (S4), execution specs (S5). |
| Common input (content.md + _tc-brief.md) | **PASS** | Steps 1 and 2 reference content.md and _tc-brief.md. |
| Quality floor matches spec | **PASS** | Spec Section 5.3 says "Minimum 15 validated findings with provenance chains." Prompt says "Minimum 15 validated findings with provenance chains." Match. |
| Recipe format | **PASS** | Steps 1-11 are sequenced. Verbs: "Absorb", "Read", "Identify", "Write." Build Application examples use recipe verbs ("Deploy", "Apply"). No checklist verbs in instructions. |
| Exemplar depth | **PASS** | Three exemplar blocks (ELEVATED finding, BOUNDED finding, chain summary) are rich with specific provenance chains, CSS values, and build implications. Agent can clearly infer expected format and depth. |
| Edge cases | **PASS** | Five edge cases covered: thin output (<15 findings), context exhaustion, untranslatable findings, contradictions between stages, content without matching axis pattern. |
| Agent log footer | **PASS** | Step 11 specifies format with: files read, total stage findings assessed (84 breakdown), ELEVATED count, BOUNDED count, cross-stage chains, single-stage count, decisions, output size, self-assessment. |
| Output file path | **PASS** | "Write your complete output to the file path provided by the orchestrator (typically `_specialist-2-validated.md` in the build directory)." Clear. |
| Output size | **PASS** | Spec says "~80-120 lines." Prompt says "80-120 lines. Minimum 80 lines." Consistent. |

### REVISE Items

#### REVISE 1: Quality floor item count mismatch — wording could mislead

**Spec says (Section 5.3):** "Minimum 15 validated findings with provenance chains. Each must show: finding ID, stage progression, validation evidence, build-specific application."

**Prompt Quality Floor says:** "Minimum 15 validated findings with provenance chains." — This matches.

However, the prompt Quality Floor has 7 items total, while the spec only specifies the core quality floor in one sentence. The additional items (3 ELEVATED, 2 BOUNDED, chain notation, build-specific applications, chain summary, agent log) are prompt additions — they are GOOD additions that enforce rigor, but item 1 says "15 validated findings with provenance chains" and then items 2 and 3 require "at least 3 ELEVATED" and "at least 2 BOUNDED."

**The potential issue:** 15 total findings + at least 3 ELEVATED + at least 2 BOUNDED means the agent needs 15 findings where at least 3 are ELEVATED and 2 are BOUNDED. This is implied but not stated explicitly. An agent could read this as 15 + 3 + 2 = 20 findings needed.

**Suggested revision:** Add a parenthetical to item 1 to clarify the relationship:

**Current text (line range around Quality Floor item 1):**
```
1. **Minimum 15 validated findings with provenance chains.** Each must show the chain (which stages it passed through), not just the finding in isolation.
```

**Suggested text:**
```
1. **Minimum 15 validated findings with provenance chains (including the ELEVATED and BOUNDED findings below — they count toward this total).** Each must show the chain (which stages it passed through), not just the finding in isolation.
```

**Severity:** LOW. Most agents will figure this out, but clarity prevents edge-case confusion.

#### REVISE 2: Spec quality floor says "build-specific application" for each finding; prompt quality floor item 5 says it differently

**Spec says (Section 5.3):** "Each must show: finding ID, stage progression, validation evidence, build-specific application."

**Prompt Quality Floor item 5 says:** "Build-specific applications. Every finding must include a specific build application — not generic advice but CSS direction anchored to THIS content and THIS metaphor."

These are semantically the same, but the prompt version is much richer. This is fine — the prompt ELABORATES on the spec. **No revision needed.** Noted for completeness.

### Minor Observations (Not Revisions)

1. **Total line count 4,827:** Prompt says "~4,827 lines across 10 files." Adding spec line counts: 196 + 232 + 959 + 680 + 338 + 351 + 447 + 672 + 306 + 646 = 4,827. Exact match.

2. **Finding count 84:** Prompt says "84 (21 COMP-F + 18 DD-F + 17 OD-F + 28 AD-F)." Spec Section 10 Layer 2 confirms: 21 + 18 + 17 + 28 = 84. Match.

3. **Provenance chain explanation section (lines 257-277):** This is an excellent addition that goes beyond the spec. It gives the agent a mental model for HOW chains work. Not in the spec but not contradicting it — genuinely helpful.

4. **Specific elevation examples (Step 6, lines 88-92):** The prompt pre-loads specific known elevation examples (DD-F-012, DD-F-006, OD-F-005, DD-F-001). This is well-targeted guidance that anchors the agent on real patterns. Good practice.

---

## Cross-Consistency Check

| Dimension | S1 | S2 | Consistent? |
|-----------|----|----|-------------|
| Common input reference | Steps 1-2: content.md, _tc-brief.md | Steps 1-2: content.md, _tc-brief.md | **YES** |
| Domain exclusion format | "WHAT YOU DO NOT DO" section, 7 bullets | "WHAT YOU DO NOT DO" section, 7 bullets | **YES** |
| Agent log footer format | Structured list with files read, counts, decisions, output size, self-assessment | Structured list with same pattern, specialized to provenance chain metrics | **YES** |
| Recipe format enforcement | Quality Floor item 2 + exemplars use recipe verbs | Quality Floor items use recipe verbs, exemplars use "Deploy", "Apply" | **YES** |
| Output file delivery | "Write to file path provided by orchestrator" | "Write to file path provided by orchestrator" | **YES** |
| Closing instruction | "Write the output to the file path provided by the orchestrator, then stop." | "Write the output to the file path provided by the orchestrator, then stop." | **YES** (verbatim match) |
| Terminology | "HIGH / MEDIUM / LOW / SKIP" rating system | "ELEVATED / BOUNDED / SINGLE-STAGE" confidence tiers | **YES** — different rating systems appropriate to each domain. No conflicting terminology. |
| Edge case depth | 4 edge cases | 5 edge cases | **YES** — S2 has one more (contradictions between stages) which is appropriate for its chain-following domain. |
| Exemplar count | 3 exemplars | 3 exemplars | **YES** |
| Exemplar depth | 6-8 lines each with CSS values, rationale, expected evidence | 6-8 lines each with chain notation, validation evidence, CSS direction | **YES** |

---

## File Path Verification Summary

**Spot-checked paths (all verified present on disk):**

1. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/research/R1-DOCUMENTATION-PATTERNS.md` — EXISTS
2. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/combination/R5-EVALUATION-MATRIX.md` — EXISTS
3. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-1-components/component-findings.md` — EXISTS
4. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/archive/knowledge-architecture/09-CD-SYNTHESIS-BRIEFING.md` — EXISTS
5. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md` — EXISTS
6. `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/provenance/stage-4-axis-ad/AD-SYNTHESIS.md` — EXISTS

All 6/6 spot-checked paths resolve to real files.

---

## Summary

| Prompt | Verdict | Revise Items |
|--------|---------|-------------|
| Specialist 1 (Findings Mapper) | **PASS** | 0 |
| Specialist 2 (Validation Mapper) | **PASS** | 1 LOW-severity clarification (quality floor item relationship) |

Both prompts are well-constructed, spec-compliant, and ready for use. The recipe format is consistently applied, domain boundaries are clean with no overlap, file paths are accurate, exemplars are rich, and edge cases are thoughtfully addressed. The one suggested revision is low-severity and optional — it prevents a minor ambiguity but most agents would handle it correctly regardless.
