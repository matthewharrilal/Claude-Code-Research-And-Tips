# Review: Specialist 3 (Case Study Analyst) + Specialist 4 (Constraints Compiler)

**Reviewer:** Fresh-eyes reviewer (zero context from writers)
**Date:** 2026-03-02
**Verdict:** BOTH PROMPTS ARE STRONG. A few issues, mostly path-related, plus one meaningful content gap in S4.

---

## SPECIALIST 3: Case Study Analyst

### Checklist Results

- [x] **File paths match spec Section 10:** YES. All 14 files match Layer 3 in Section 10. Same file names, same directory (`compositional-core/case-studies/`). Line counts match. Spot-checked DD-003-islands.md on disk -- exists at `design-system/compositional-core/case-studies/DD-003-islands.md`.
- [x] **Domain boundaries respected:** YES. S3 touches ONLY case study files (Layer 3). No convention specs, no identity files, no anti-patterns. Clean boundary.
- [x] **Structural affinity defined:** YES, and thoroughly. Three axes defined (content-shape, tension-resolution, mechanism-deployment). Positive examples AND negative examples ("What Structural Affinity is NOT"). The "How to Assess" heuristic is a good one-liner test. This is one of the strongest sections of either prompt.
- [x] **Anti-prescription format explained:** YES. Step 2 explicitly says "extracting the decision-making SEQUENCE, not the output." The exemplar shows process-level extraction (tensions faced, candidates considered and rejected, selection rationale, mechanism deployment sequencing). The "WHAT YOU ARE NOT" section reinforces this with three explicit anti-patterns.
- [x] **Quality floors match spec:** YES. Spec says "3-5 case studies with structural affinity identified. Each must include: affinity rationale, process extraction, at least 10 lines of actual CSS." Prompt says the same at lines 249-256. Total output 100-150 lines matches spec.
- [x] **Recipe format throughout:** YES. "Use sequencing verbs (FACED -> CONSIDERED -> REJECTED -> SELECTED -> DEPLOYED). Not checklist format."
- [x] **Exemplar depth:** YES. The OD-004 exemplar (lines 112-155) is excellent -- shows the expected format, reasoning depth, AND adapted CSS. Two CSS blocks showing different techniques.
- [x] **Edge cases covered:** YES. Four edge cases: no affinity, CSS too exploration-specific, multiple same-affinity, metaphor too similar. Each has a concrete resolution procedure. Edge Case 1's fallback (mechanism-level extraction at 50 lines minimum) is smart.
- [x] **Agent log format specified:** YES. Lines 238-243. Includes all required fields.
- [x] **Output path clear:** YES. `_specialist-3-casestudies.md` (line 207).

### Issues Found

#### ISSUE S3-1: Relative paths -- no `design-system/` prefix (MEDIUM)

The file table (lines 21-36) uses paths like `compositional-core/case-studies/` and `design-system/compositional-core/case-studies/` is the actual disk path. The spec (Section 10) says "All paths relative to `design-system/`" -- so these are CORRECTLY spec-relative.

BUT: The agent will be given Read tool access and must construct absolute paths. The prompt never states the base path prefix. If the orchestrator doesn't inject the base path, the agent will fail to Read any files.

**Recommendation:** Either (a) add a note "All paths below are relative to `design-system/`" with explicit instructions to prepend the build workspace root, or (b) use full absolute paths in the table. This is a runtime failure risk, not a prompt quality issue -- the orchestrator may handle it, but the prompt shouldn't rely on that assumption.

#### ISSUE S3-2: "12 case studies" count inconsistency (LOW)

Edge Case 1 (line 172) says "after reading all 12 case studies" and Edge Case 3 (line 189) says "3+ case studies." But the file table lists 14 files, not 12. This is because 2 of the 14 are meta-files (ANTI-PRESCRIPTION-TEMPLATE.md and README.md), not case studies themselves. The case study count is actually 12 (6 DD + 3 OD + 3 CD), which is correct.

However, the prompt never clarifies that the ANTI-PRESCRIPTION-TEMPLATE.md and README.md are reference materials, not case studies to assess for affinity. An agent might try to find "structural affinity" with a template file.

**Recommendation:** Add a brief note after the file table: "12 case studies (DD-003 through CD-006) are assessed for structural affinity. The ANTI-PRESCRIPTION-TEMPLATE.md and README.md are reference materials that explain the case study FORMAT -- read them for context, but do not assess them for affinity."

#### ISSUE S3-3: No guidance on case study visual files (LOW)

The file list includes 3 `-visual.md` files (dd-003-islands-visual.md, dd-004-layers-visual.md, dd-006-fractal-visual.md). The prompt never explains what these are or how they differ from the main case study files. Are they supplementary? Do they contain CSS? Should the agent treat them as separate case studies or as appendices to their parent files?

**Recommendation:** Add a one-line note: "The `-visual.md` files are visual analysis supplements to their parent case studies (DD-003, DD-004, DD-006). Read them as part of those case studies, not as standalone entries."

---

## SPECIALIST 4: Constraints Compiler

### Checklist Results

- [x] **File paths match spec Section 10:** MOSTLY. 9 of 11 files match Layers 4, 9, and 11 exactly. Two path issues flagged below.
- [x] **Domain boundaries respected:** YES. S4 touches convention specs (Layer 4), identity/tokens/anti-patterns (Layer 9), and research gates (Layer 11). No case studies, no research findings, no handoffs. Clean boundary from S3.
- [x] **Constraint categories defined:** YES. All 4 types clearly defined with source files, what belongs, and HOW to compile each. The distinction between categories is sharp: soul = binary, convention = rules + reasoning, anti-pattern = risk-profiled, creative territory = freedom mapping.
- [x] **Convention REASONING:** YES. This is a highlight. The exemplar (lines 80-100) shows the "2px Border Ban" with rule, reasoning (traced to OD audit finding), evidence, AND content-specific application. The prompt explicitly requires "WHY it exists" for every convention.
- [x] **Quality floors match spec:** YES. Spec says "Soul checklist (all non-negotiables listed). Minimum 6 anti-patterns risk-profiled." Prompt quality floor (lines 349-356): soul checklist (10-12 items), 8+ conventions with reasoning, 6+ risk-profiled anti-patterns, 5+ creative territory areas, 60-80 lines total.
- [x] **Recipe format throughout:** PARTIAL. The prompt uses procedural steps (Step 1 through Step 4), and the exemplars use narrative reasoning. But the prompt doesn't explicitly say "recipe format" or use sequencing verbs the way S3 does. The overall task structure is sequential, which is good. See issue below.
- [x] **Exemplar depth:** YES. Two exemplars: one for convention reasoning (2px border ban, lines 80-100) and two for anti-patterns (callout cacophony + uniform density, lines 117-177). These are excellent -- they show the expected format, reasoning depth, content-specific application, AND CSS mitigation.
- [x] **Edge cases covered:** YES. Five edge cases: convention spec contradictions, sparse anti-patterns for content type, narrow creative territory, accumulated identity extras, research gate filtered findings. Each has a clear resolution. Edge Case 1 (AD wins over OD) is essential.
- [x] **Agent log format specified:** YES. Lines 334-341.
- [x] **Output path clear:** YES. `_specialist-4-constraints.md` (line 289).

### Issues Found

#### ISSUE S4-1: ACCUMULATED-IDENTITY-v2.md path is WRONG (HIGH)

The file table (line 30) lists: `ACCUMULATED-IDENTITY-v2.md | archive/knowledge-architecture/core/ | 519`

The spec (Section 10, Layer 9) lists: `archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md (519 lines)`

On disk, this file exists at: `<repo-root>/archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md`

It does NOT exist at: `<repo-root>/design-system/archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md`

The spec says "All paths relative to `design-system/`" but this file is NOT inside the `design-system/` directory. This is a spec-level inconsistency that propagated to the prompt. If the agent tries to read `design-system/archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md`, it will get a file-not-found error.

**Recommendation:** Fix the path in the prompt to the actual location: `archive/knowledge-architecture/core/ACCUMULATED-IDENTITY-v2.md` (relative to repo root, NOT to `design-system/`). Also flag this as a spec errata -- the spec's Section 10 Layer 9 entry is wrong for this file.

#### ISSUE S4-2: BACKBONE.md path uses different prefix than other files (MEDIUM)

The file table (line 31) lists: `BACKBONE.md | design-system/specification/ | 542`

This is the only file in the S4 table that includes `design-system/` in the path column, while all others use paths relative to `design-system/`. This inconsistency will confuse path resolution.

On disk: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/specification/BACKBONE.md` EXISTS. So the path is correct if interpreted as relative to repo root. But if the agent applies a `design-system/` prefix (following the spec convention), it would try `design-system/design-system/specification/BACKBONE.md` which doesn't exist.

**Recommendation:** Normalize the path column. Either all paths are relative to `design-system/` (use `specification/` for BACKBONE.md) or all paths are absolute from repo root (prefix `design-system/` to all others). Currently it's mixed.

#### ISSUE S4-3: No explicit "recipe format" requirement (MEDIUM)

S3 explicitly states: "Recipe format: Use sequencing verbs (FACED -> CONSIDERED -> REJECTED -> SELECTED -> DEPLOYED). Not checklist format." S4 has no equivalent statement. The spec's Section 17 Principle 3 says "Recipe format, not checklist format" as a pipeline-wide principle.

S4's output is inherently more checklist-like (soul constraints ARE a checklist, anti-patterns ARE a risk table), so this is less of a concern than for other specialists. But the convention section (Category 2) should use reasoning-forward narrative, not bare rule listings.

**Recommendation:** Add a brief note in the quality floor section: "Convention entries must be reasoning-forward (WHY before WHAT), not bare rule listings. Anti-pattern entries use narrative risk assessment, not compliance checklists."

#### ISSUE S4-4: Quality floor says 60-80 lines but content demands suggest more (LOW)

The quality floor specifies 60-80 lines total. But the output template suggests:
- Soul checklist: 10-12 items (~12 lines)
- 8-15 conventions with Rule + Reasoning + Application (~3-5 lines each = 24-75 lines)
- 6+ anti-patterns with Risk + Mitigation CSS + Detection (~5-8 lines each = 30-48 lines)
- 5-8 creative territory areas (~3-4 lines each = 15-32 lines)
- Agent log: ~8 lines

That's 89-175 lines minimum. 60-80 is undersized for the specified content.

However, the spec (Section 5.5) says "~60-80 lines" -- so this matches. This may be intentional (force extreme density) or a spec miscalculation.

**Recommendation:** Consider raising to 80-120 lines to match realistic content requirements, OR add a note: "60-80 lines means EXTREME density. Every line must carry information. Use compressed formatting (rule + reasoning on same line, abbreviated CSS)."

#### ISSUE S4-5: Soul checklist in output template includes items NOT in soul constraints (LOW)

The output format template (lines 296-309) includes example soul checklist items:
```
[ ] Max 2 callouts per viewport section
[ ] DD-F-006 fractal self-similarity at 5 scales
```

"Max 2 callouts per viewport" is a CONVENTION, not a soul constraint (it's from AD-PA-CONVENTIONS, not identity.md). "DD-F-006 fractal self-similarity" is a validated FINDING, not a soul constraint. Including these in the soul checklist template may lead the agent to miscategorize.

**Recommendation:** Remove these two items from the soul checklist example. Replace with actual soul constraints: `[ ] No filter: drop-shadow()`, `[ ] Container max-width 940-960px`. Or add a note: "The soul checklist contains ONLY constraints from identity.md and tokens.css. Convention-derived rules go in Category 2."

---

## CROSS-PROMPT REVIEW: S3 vs S4

### Domain Overlap Check: CLEAN

- S3: Case study files only (Layer 3)
- S4: Convention specs (Layer 4) + Identity/Tokens/Anti-patterns (Layer 9) + Research gates (Layer 11)
- Zero file overlap between S3 and S4

S3 does not touch convention specs. S4 does not touch case studies. Boundaries are clean.

### Consistency Check

| Aspect | S3 | S4 | Consistent? |
|--------|----|----|-------------|
| Input format (3 items) | YES | YES | YES |
| Output file naming | `_specialist-3-casestudies.md` | `_specialist-4-constraints.md` | YES |
| Agent log format | 5-field format | 6-field format | MINOR DIFF -- S4 has "Conventions assessed" and "Anti-patterns profiled" instead of S3's "Case studies assessed" and "Decisions made". Appropriate per-domain variation. |
| Quality floor specificity | Very specific (3-5 studies, 10+ CSS lines each, recipe verbs) | Very specific (all soul, 8+ conventions, 6+ anti-patterns, 5+ territories) | YES |
| Exemplar depth | 1 long exemplar (~45 lines) | 2 medium exemplars (~70 lines total) | YES -- appropriate |
| Edge case coverage | 4 edge cases | 5 edge cases | YES |
| "WHAT YOU ARE NOT" section | 3 anti-patterns | 3 anti-patterns | YES |
| Structural affinity definition | Thorough (3 axes + negatives + heuristic) | N/A (not S4's concept) | N/A |
| Constraint categories | N/A (not S3's concept) | Thorough (4 categories with source files, what belongs, how to compile) | N/A |

### Overall Assessment

**S3 is READY.** Three low-severity issues (path prefix ambiguity, 12 vs 14 count, visual file guidance). None would cause the agent to fail -- they'd cause mild confusion at worst.

**S4 is READY WITH FIXES NEEDED.** One high-severity issue (ACCUMULATED-IDENTITY-v2.md wrong path will cause a runtime file-not-found error) and one medium issue (BACKBONE.md path inconsistency). The path issue MUST be fixed before the agent runs or it will fail to read a 519-line file that's 10% of its total input.

---

## SUMMARY OF ISSUES

| ID | Prompt | Severity | Issue | Action Required |
|----|--------|----------|-------|----------------|
| S3-1 | S3 | MEDIUM | No explicit base path prefix for file resolution | Add "relative to `design-system/`" note |
| S3-2 | S3 | LOW | "12 case studies" count vs 14 files in table | Clarify which 2 are reference materials |
| S3-3 | S3 | LOW | Visual supplement files unexplained | Add one-line guidance |
| S4-1 | S4 | **HIGH** | ACCUMULATED-IDENTITY-v2.md path wrong (file not inside `design-system/`) | Fix path to `archive/knowledge-architecture/core/` (repo root). Flag spec errata. |
| S4-2 | S4 | MEDIUM | BACKBONE.md path has `design-system/` prefix while others don't | Normalize path column |
| S4-3 | S4 | MEDIUM | No explicit recipe format requirement | Add reasoning-forward note |
| S4-4 | S4 | LOW | 60-80 line ceiling undersized for content demands | Consider 80-120 or add density note |
| S4-5 | S4 | LOW | Soul checklist template includes non-soul items | Fix template examples |

**Blocking issues:** 1 (S4-1 -- wrong file path will cause runtime failure)
**Should-fix before run:** 2 (S4-2, S3-1 -- path ambiguity)
**Nice-to-fix:** 5 (all others)
