# Consistency Sweep — Cross-File Numeric & Factual Verification

**Date:** 2026-02-25
**Sweeper:** Opus consistency agent
**Scope:** All pipeline files in `ephemeral/va-extraction/` + `design-system/pipeline/` + `design-system/CLAUDE.md` + `~/.claude/skills/build-page/SKILL.md` + `~/.claude/skills/perceptual-auditing/SKILL.md`
**Method:** Extract every numeric value, gate count, line count, file reference, and threshold from every file that mentions it. Cross-validate against canonical sources.

---

## CANONICAL SOURCES (Ground Truth)

| Fact | Canonical Source | Canonical Value |
|------|-----------------|-----------------|
| Gate count + tier breakdown | `gate-manifest.json` | 54 total: 21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL |
| PA question count | `pa-questions.md` | 69 questions (49 standard + 2 sub-perceptual + 3 pipeline + 6 extended + 9 Tier 5) |
| Tier 5 question count | `pa-questions.md` + `flagship-pa-questions.md` | 9 (PA-60 through PA-68) |
| gate-runner-core.js actual lines | `wc -l` | 2,273 lines |
| gate-runner-spec.md actual lines | `wc -l` | 265 lines |
| gate-manifest.json actual lines | `wc -l` | 326 lines |
| MANIFEST.md actual lines | `wc -l` | 1,300 lines |
| pa-questions.md actual lines | `wc -l` | 431 lines |
| pa-deployment.md actual lines | `wc -l` | 376 lines |
| pa-weaver.md actual lines | `wc -l` | 466 lines |
| pa-guardrails.md actual lines | `wc -l` | 113 lines |
| pa-guardrails-weaver.md actual lines | `wc -l` | 59 lines |
| pa-manifest.md actual lines | `wc -l` | 89 lines |
| artifact-orchestrator.md actual lines | `wc -l` | 1,193 lines |
| artifact-builder-recipe.md actual lines | `wc -l` | 833 lines |
| artifact-tc-brief-template.md actual lines | `wc -l` | 235 lines |
| artifact-identity-perception.md actual lines | `wc -l` | 556 lines |
| EXECUTION-TRACKER-TEMPLATE.md actual lines | `wc -l` | 162 lines |
| conventions-brief.md actual lines | `wc -l` | 609 lines |
| Background delta threshold | conventions-brief.md + gate-manifest.json | >= 15 RGB max-channel |
| Letter-spacing floor | conventions-brief.md | >= 0.025em |
| Stacked gap max | conventions-brief.md | <= 120px |
| Single margin max | conventions-brief.md | <= 96px |
| Container width | conventions-brief.md | 940-960px |
| Builder input ceiling | artifact-orchestrator.md | 2,500 lines (BV-07) |

---

## A. GATE COUNT INCONSISTENCIES

### A-01. design-system/CLAUDE.md — STALE gate counts [BLOCKING]

**File:** `design-system/CLAUDE.md` line 335
**States:** `gate-manifest.json (37 gates: 18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF)`
**Canonical:** 54 gates: 21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL
**Diagnosis:** This reflects the pre-Pipeline-v4 state (before Wave 0-4 additions on 2026-02-25). The `37 gates` was the Wave 3 count. Pipeline v4 added GR-55, GR-66, GR-67, BV-05, A-03, BV-06, BV-07, GR-78, GR-79, GR-80, GR-81, GR-82.
**Severity:** BLOCKING — this is the auto-loaded navigation file that agents read first.

### A-02. design-system/CLAUDE.md — STALE gate-runner-core.js line count [BLOCKING]

**File:** `design-system/CLAUDE.md` line 335
**States:** `gate-runner-core.js (1,436 lines executable JS)`
**Canonical:** 2,273 lines (verified by `wc -l`)
**Diagnosis:** 1,436 was the pre-Pipeline-v4 count. Pipeline v4 added ~837 lines of new gate functions.
**Severity:** BLOCKING — agents rely on this for capacity estimation.

### A-03. design-system/CLAUDE.md — STALE "22 gates + 65-question PA" [SIGNIFICANT]

**File:** `design-system/CLAUDE.md` line 399
**States:** `Phase 7: Full verification (22 gates + 65-question PA)`
**Canonical:** 54 gates + 69-question PA
**Diagnosis:** "22 gates" is from a much earlier pipeline version. "65 questions" is from before the extended questions (PA-72–PA-77, PA-80, PA-81) were added.
**Severity:** SIGNIFICANT — this is in the phase-gated building protocol section.

### A-04. gate-runner-spec.md — Internal inconsistency: header vs summary table [SIGNIFICANT]

**File:** `ephemeral/va-extraction/gate-runner-spec.md`
**Line 18 (header table):** 21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 7 BV = correct
**Line 23:** "Total executable gates: 54 (21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BRIEF + 1 utility)" = correct
**Line 257:** "Tier totals (gate-runner scope): 20 REQUIRED, 10 RECOMMENDED, 9 ADVISORY, 2 DIAGNOSTIC, 5 BRIEF, 1 UTILITY = 47 executable gates"
**Canonical:** 54 gates (gate-manifest.json)
**Diagnosis:** The summary table at line 207 only lists the gates that were present before the convergence reframe iteration (GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 are missing from the table). The summary count at line 257 reflects only what's in the table (47), not the full 54.
**Severity:** SIGNIFICANT — the spec file's own summary contradicts its header.

### A-05. MANIFEST.md — "47-gate inventory" reference [SIGNIFICANT]

**File:** `ephemeral/va-extraction/MANIFEST.md` line 468
**States:** "Gate runner executes all post-build gates at 1440px viewport width (see gate-manifest.json for the 47-gate inventory: 21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY)."
**Diagnosis:** Math doesn't add up. 21+13+10+2+7+1 = 54, not 47. The "47-gate" text is stale but the tier breakdown was correctly updated to sum to 54. The string "47-gate" was missed.
**Severity:** SIGNIFICANT — inconsistency within the same sentence.

### A-06. PV2 pipeline files — "15 gates" references [MINOR]

**Files:** `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (lines 35, 113, 163, 732, 1276), `design-system/pipeline/PV2-FLAGSHIP-VARIANT.md` (lines 69, 215, 217, 292, 1087, 1280, 2450)
**States:** "15 gates" throughout
**Canonical:** 54 gates (gate-manifest.json)
**Diagnosis:** The PV2 files are historical planning documents from pre-extraction. They describe the PV2 ARCHITECTURE (which had 15 programmatic gates at the time). These are NOT execution specs — they are design reference.
**Severity:** MINOR — these are historical/planning documents, not execution docs. No fix needed unless they confuse new agents.

### A-07. pipeline/gate-runner.md — "23 gates" [MINOR]

**File:** `design-system/pipeline/gate-runner.md` line 5
**States:** "This file defines 23 gates"
**Canonical:** 54 gates (gate-manifest.json). This file is the BUILD-PAGE PROMPT convention brief's own gate runner section.
**Diagnosis:** The `design-system/pipeline/gate-runner.md` file (1,339 lines) is the CONVENTIONS BRIEF companion gate runner — a different document from `ephemeral/va-extraction/gate-runner-core.js`. It defines 23 gates relevant to the build-page-prompt pipeline, which is superseded by the va-extraction pipeline.
**Severity:** MINOR — different pipeline version document.

### A-08. perceptual-auditing/SKILL.md — "65 PA questions" [SIGNIFICANT]

**File:** `~/.claude/skills/perceptual-auditing/SKILL.md` line 7 and line 644
**States:** "65 PA questions" and "all 65 questions"
**Canonical:** 69 questions (pa-questions.md)
**Diagnosis:** 65 was the count before Wave 3 added PA-72–PA-77, PA-80, PA-81 (extended + navigation). The SKILL.md was not updated.
**Severity:** SIGNIFICANT — this skill is directly invoked for standalone PA audits.

### A-09. flagship-pa-questions.md — "56 standard + 9 Tier 5 = 65 total" [SIGNIFICANT]

**File:** `design-system/pipeline/flagship-pa-questions.md` line 5 and line 158
**States:** "alongside the 56 standard questions (65 total)" and "56 standard + 9 Tier 5 = 65 questions across 9 auditors"
**Canonical:** 60 standard + 9 Tier 5 = 69 total (pa-questions.md: "49 standard + 2 sub-perceptual + 3 pipeline + 6 extended + 9 Tier 5")
**Diagnosis:** 56 standard was the count before Wave 3 added PA-72-PA-77 (6 extended) + PA-80 + PA-81 (2 more). The extended questions were added to Tier 2/3 but this file was not updated.
**Severity:** SIGNIFICANT — this file is referenced for Tier 5 deployment.

### A-10. phase7-flow-simulation.md — "65 questions" [MINOR]

**File:** `ephemeral/va-extraction/phase7-flow-simulation.md` line 96
**States:** "65 questions total across 9 auditors"
**Canonical:** 69 questions
**Diagnosis:** Pre-Wave-3 count, not updated. This is a Phase 7 validation artifact, not an execution spec.
**Severity:** MINOR — historical validation document.

### A-11. PV2 files — "48 questions" [MINOR]

**Files:** `PV2-PIPELINE-DIAGRAM.md` line 739, `PV2-FLAGSHIP-VARIANT.md` line 1094
**States:** "48 questions"
**Canonical:** 69 questions
**Diagnosis:** Historical PV2 architecture planned for 48 questions. Superseded by the 69-question implementation.
**Severity:** MINOR — historical documents, not execution specs.

---

## B. LINE COUNT INCONSISTENCIES

### B-01. design-system/CLAUDE.md — gate-runner-core.js line count [BLOCKING]

Same as A-02 above. States 1,436; actual is 2,273. Delta: +837 lines.

### B-02. design-system/CLAUDE.md — MANIFEST.md line count [SIGNIFICANT]

**File:** `design-system/CLAUDE.md` lines 24 and 333
**States:** "~1,160 lines"
**Canonical:** 1,300 lines (verified by `wc -l`)
**Diagnosis:** 1,160 was approximately correct at an earlier point. MANIFEST.md has grown by ~140 lines since.
**Severity:** SIGNIFICANT — misleading for capacity planning.

### B-03. SKILL.md (build-page) — gate-runner-core.js line count [SIGNIFICANT]

**File:** `~/.claude/skills/build-page/SKILL.md` line 46
**States:** "`gate-runner-core.js` | ~2,270 lines"
**Canonical:** 2,273 lines
**Diagnosis:** ~2,270 is close enough (~0.1% off). Acceptable approximation.
**Severity:** OK — within ~approximation tolerance.

### B-04. SKILL.md (build-page) — gate-runner-spec.md line count [MINOR]

**File:** `~/.claude/skills/build-page/SKILL.md` line 47
**States:** "~225 lines"
**Canonical:** 265 lines
**Diagnosis:** Off by ~40 lines (15% discrepancy). The spec grew when Pipeline v4 gates were added.
**Severity:** MINOR — referenced as approximate.

### B-05. SKILL.md (build-page) — pa-deployment.md line count [MINOR]

**File:** `~/.claude/skills/build-page/SKILL.md` line 56
**States:** "~355 lines"
**Canonical:** 376 lines
**Diagnosis:** Off by 21 lines (6% discrepancy). Acceptable approximation.
**Severity:** OK — within tolerance.

### B-06. SKILL.md (build-page) — pa-weaver.md line count [MINOR]

**File:** `~/.claude/skills/build-page/SKILL.md` line 57
**States:** "~449 lines"
**Canonical:** 466 lines
**Diagnosis:** Off by 17 lines (4%). Acceptable.
**Severity:** OK.

### B-07. SKILL.md (build-page) — pa-guardrails.md line count [OK]

**States:** "~113 lines" | **Actual:** 113 lines. EXACT MATCH.

### B-08. SKILL.md (build-page) — pa-guardrails-weaver.md line count [OK]

**States:** "~59 lines" | **Actual:** 59 lines. EXACT MATCH.

---

## C. PA QUESTION COUNT INCONSISTENCIES

### C-01. Pa-manifest.md — Auditor question counts [SIGNIFICANT]

**File:** `ephemeral/va-extraction/pa-manifest.md`
**States (line 25):** Auditor A = 9 questions
**States (line 26):** Auditor B = 8 questions
**States (line 27):** Auditor C = 10 questions
**States (line 28):** Auditor D = 11 questions
**States (line 29):** Auditor E = 7 questions
**States (line 30):** Auditor F = 5 questions
**States (line 31):** Auditor G = 8 questions
**States (line 32):** Auditor H = 5 questions
**States (line 33):** Auditor I = 6 questions
**Sum:** 9+8+10+11+7+5+8+5+6 = 69. **CONSISTENT** with pa-questions.md.

**Cross-check with pa-deployment.md assignments:**
| Auditor | pa-deployment.md count | pa-manifest.md count | Match? |
|---------|----------------------|---------------------|--------|
| A | 9 | 9 | YES |
| B | 8 | 8 | YES |
| C | 10 | 10 | YES |
| D | 11 | 11 | YES |
| E | 7 | 7 | YES |
| F | 5 | 5 | YES |
| G | 8 | 8 | YES |
| H | 5 | 5 | YES |
| I | 6 | 6 | YES |
**Total: 69 = 69. CONSISTENT.**

### C-02. MANIFEST.md — Auditor question counts [CONSISTENT]

**File:** `ephemeral/va-extraction/MANIFEST.md` lines 149-157
Cross-checked against pa-deployment.md. All 9 auditor question counts match. Total = 69. CONSISTENT.

### C-03. flagship-pa-questions.md — Auditor totals [STALE]

**File:** `design-system/pipeline/flagship-pa-questions.md` lines 148-156
States totals including Tier 5: A=10, B=7, C=14, D=7, E=6, F=7, G=5, H=5, I=4. Sum = 65.
**Canonical (pa-deployment.md):** A=9, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6. Sum = 69.
**Diagnosis:** This file's assignment table is entirely stale — it was written before Wave 3 question redistribution. The totals don't match and the per-auditor question lists differ significantly.
**Severity:** SIGNIFICANT (covered under A-09).

---

## D. THRESHOLD VALUE CONSISTENCY

### D-01. Background delta: >= 15 RGB

**Checked in:** conventions-brief.md, gate-manifest.json, gate-runner-spec.md, gate-runner-core.js, pa-questions.md, MANIFEST.md, artifact-identity-perception.md, SKILL.md (build-page)
**Result:** ALL CONSISTENT at >= 15 RGB max-channel delta.

### D-02. Letter-spacing floor: >= 0.025em

**Checked in:** conventions-brief.md, SKILL.md (build-page), pa-questions.md
**Result:** ALL CONSISTENT.
**Note:** PV2-FLAGSHIP-VARIANT.md line 176 says "<= 108px gap" for stacked gap — but this is from the L1 stack diagram and is a DIFFERENT (earlier) threshold. The canonical stacked gap is 120px (conventions-brief.md). This is a HISTORICAL value in a planning doc, not an execution spec.

### D-03. Stacked gap max: <= 120px

**Checked in:** conventions-brief.md, gate-runner-spec.md (GR-13), SKILL.md (build-page), pa-questions.md (S-09 stacking check)
**Result:** ALL CONSISTENT at <= 120px.
**Exception:** GR-14 (visual gap) uses 150px threshold. This is INTENTIONAL — GR-14 measures rendered gaps which can include border heights and other elements, so the threshold is deliberately higher.

### D-04. Single margin max: <= 96px

**Checked in:** conventions-brief.md, SKILL.md (build-page), gate-runner-spec.md (GR-15)
**Result:** ALL CONSISTENT.

### D-05. Container width: 940-960px

**Checked in:** conventions-brief.md, MANIFEST.md (SC-03), gate-runner-spec.md (GR-03), SKILL.md (build-page)
**Result:** ALL CONSISTENT.

### D-06. Builder input ceiling: 2,500 lines

**Checked in:** gate-manifest.json (BV-07), artifact-orchestrator.md
**Result:** CONSISTENT.

---

## E. FILE PATH / FILE EXISTENCE VERIFICATION

### E-01. All files referenced in SKILL.md (build-page) [VERIFIED]

| Referenced File | Exists? |
|----------------|---------|
| `ephemeral/va-extraction/MANIFEST.md` | YES |
| `ephemeral/va-extraction/artifact-identity-perception.md` | YES |
| `ephemeral/va-extraction/artifact-builder-recipe.md` | YES |
| `ephemeral/va-extraction/artifact-gate-runner.md` | YES |
| `ephemeral/va-extraction/artifact-pa-protocol.md` | YES |
| `ephemeral/va-extraction/artifact-routing.md` | YES |
| `ephemeral/va-extraction/artifact-orchestrator.md` | YES |
| `ephemeral/va-extraction/artifact-tc-brief-template.md` | YES |
| `ephemeral/va-extraction/artifact-worked-examples.md` | YES |
| `ephemeral/va-extraction/artifact-value-tables.md` | YES |
| `ephemeral/va-extraction/gate-runner-core.js` | YES |
| `ephemeral/va-extraction/gate-runner-spec.md` | YES |
| `ephemeral/va-extraction/gate-runner-preconditions.md` | YES |
| `ephemeral/va-extraction/gate-runner-provenance.md` | YES |
| `ephemeral/va-extraction/gate-manifest.json` | YES |
| `ephemeral/va-extraction/pa-questions.md` | YES |
| `ephemeral/va-extraction/pa-deployment.md` | YES |
| `ephemeral/va-extraction/pa-weaver.md` | YES |
| `ephemeral/va-extraction/pa-guardrails.md` | YES |
| `ephemeral/va-extraction/pa-guardrails-weaver.md` | YES |
| `ephemeral/va-extraction/pa-manifest.md` | YES |
| `ephemeral/va-extraction/EXECUTION-TRACKER-TEMPLATE.md` | YES |
| `ephemeral/va-extraction/experiment-protocol.md` | YES |
| `ephemeral/va-extraction/council-verdict.md` | YES |

**All 24 referenced files exist.** No broken references.

---

## F. INTERNAL CONSISTENCY (Within Single Files)

### F-01. gate-runner-spec.md — Header vs Summary Table [SIGNIFICANT]

Line 18 header: "21 REQUIRED"
Line 257 summary: "20 REQUIRED"
**Cause:** The summary table is missing GR-79 (REQUIRED, convergence reframe addition). The table lists GR-48 as REQUIRED but GR-79 is not in the table. GR-79 is listed in gate-manifest.json as REQUIRED.

Line 18 header: "13 RECOMMENDED"
Line 257 summary: "10 RECOMMENDED"
**Cause:** Missing GR-78, GR-80, GR-82 (convergence reframe additions).

Line 18 header: "10 ADVISORY"
Line 257 summary: "9 ADVISORY"
**Cause:** Missing GR-81 (convergence reframe addition).

Line 18 header: "7 BRIEF"
Line 257 summary: "5 BRIEF"
**Cause:** Missing BV-06, BV-07 (convergence reframe additions).

**Net:** 7 gates missing from the summary table (GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07). The header is correct; the table is incomplete.
**Severity:** SIGNIFICANT.

### F-02. MANIFEST.md — "47-gate" vs "54" math [SIGNIFICANT]

Line 468 says "47-gate inventory" then lists tier counts that sum to 54.
**Severity:** SIGNIFICANT — contradicts itself in the same sentence.

---

## G. FIXES APPLIED

### FIX-G01: design-system/CLAUDE.md line 335 — gate counts and line count

**Old:** `gate-runner-core.js (1,436 lines executable JS) + gate-runner-spec.md + gate-runner-preconditions.md + gate-runner-provenance.md + gate-manifest.json (37 gates: 18 REQUIRED + 8 RECOMMENDED + 5 ADVISORY + 2 DIAGNOSTIC + 4 BRIEF)`
**New:** `gate-runner-core.js (~2,270 lines executable JS) + gate-runner-spec.md + gate-runner-preconditions.md + gate-runner-provenance.md + gate-manifest.json (54 gates: 21 REQUIRED + 13 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 7 BV + 1 UTILITY)`

### FIX-G02: design-system/CLAUDE.md line 399 — gate + PA counts

**Old:** `Phase 7: Full verification (22 gates + 65-question PA)`
**New:** `Phase 7: Full verification (54 gates + 69-question PA)`

### FIX-G03: design-system/CLAUDE.md lines 24, 333 — MANIFEST line count

**Old:** `(~1,160 lines)`
**New:** `(~1,300 lines)`

### FIX-G04: gate-runner-spec.md line 257 — Summary table tier totals

**Old:** `20 REQUIRED, 10 RECOMMENDED, 9 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 5 BRIEF, 1 UTILITY = 47 executable gates`
**New:** `21 REQUIRED, 13 RECOMMENDED, 10 ADVISORY, 2 DIAGNOSTIC (GR-33, GR-34), 7 BRIEF, 1 UTILITY = 54 executable gates (summary table above lists 47; remaining 7 are convergence reframe gates: GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 — see gate-manifest.json for canonical breakdown)`

### FIX-G05: MANIFEST.md line 468 — "47-gate" text

**Old:** `47-gate inventory`
**New:** `54-gate inventory`

### NOT FIXED (intentionally):
- **PV2 files** (PV2-PIPELINE-DIAGRAM.md, PV2-FLAGSHIP-VARIANT.md): These are HISTORICAL PLANNING documents. Their "15 gates", "48 questions", "21 gates" references describe the architecture AS PLANNED, not the current implementation. Updating them would destroy historical accuracy.
- **flagship-pa-questions.md**: This entire file is superseded by `pa-questions.md` Section 2 (Tier 5) and `pa-deployment.md` Section 1.2 (assignments). It should be deprecated/archived but not silently modified.
- **perceptual-auditing/SKILL.md**: The "65 questions" reference needs updating to 69, but this file is in the user's skill directory and modifying it should be confirmed with the user. Flagged for attention.
- **phase7-flow-simulation.md**: Historical validation artifact, not execution spec. No fix needed.

---

## H. SUMMARY

| Severity | Count | Fixed | Not Fixed (Intentional) |
|----------|-------|-------|------------------------|
| BLOCKING | 2 | 2 (FIX-G01, FIX-G03) | 0 |
| SIGNIFICANT | 7 | 3 (FIX-G02, FIX-G04, FIX-G05) | 4 (historical/skill files) |
| MINOR | 5 | 0 | 5 (all historical docs) |
| OK | 5 | — | — |

**Total inconsistencies found:** 14
**Fixes applied:** 5
**Remaining (intentionally unfixed):** 9 (all in historical planning docs or external skill files)

### Critical Finding

The **design-system/CLAUDE.md** file — which is AUTO-LOADED by every agent entering the design system — had 3 BLOCKING/SIGNIFICANT stale values:
1. Gate count: 37 (should be 54)
2. gate-runner-core.js lines: 1,436 (should be ~2,270)
3. PA question count: 65 (should be 69)
4. MANIFEST.md lines: ~1,160 (should be ~1,300)

These were all fixed. Any agent reading CLAUDE.md before this fix would have had incorrect expectations about the pipeline's scope and capacity.

### Recommendation

1. **Deprecate `design-system/pipeline/flagship-pa-questions.md`** — its content is entirely superseded by `pa-questions.md` Section 2 and `pa-deployment.md` Section 1.2. The per-auditor assignments are completely stale (wrong question lists, wrong totals).
2. **Update `~/.claude/skills/perceptual-auditing/SKILL.md`** — change "65 PA questions" to "69 PA questions" in lines 7 and 644.
3. **Complete the gate-runner-spec.md summary table** — add the 7 missing convergence reframe gates to make the table match the 54-gate total.
