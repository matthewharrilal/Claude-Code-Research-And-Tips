# SKILL.md Correctness Audit
**Date:** 2026-02-26
**Auditor:** Opus 4.6 (single-pass)
**Target:** `~/.claude/skills/build-page/SKILL.md` (110 lines)
**Cross-referenced against:** MANIFEST.md, gate-manifest.json, gate-runner-core.js, pa-questions.md, pa-weaver.md, artifact-orchestrator.md, artifact-tc-brief-template.md, all split files

---

## Summary

**10 dimensions checked. 3 findings are NEEDED (incorrect/misleading). 2 findings are OPTIONAL (enhancements). 5 dimensions are CORRECT as-is.**

---

## Dimension 1: Version Label

**SKILL.md says:** "Pipeline v3" (line 4 frontmatter, line 25 "Pipeline v3 execution manifest")
**Actual state:** MANIFEST.md title is still "Pipeline v3 Visual Architecture -- Execution Manifest" (line 1). gate-manifest.json version is "4.2.0". The pipeline has received v4 changes (B-series fixes, GR-55/66/67, BV-05) and D2 crack gates. HOWEVER, the MANIFEST itself still calls itself "Pipeline v3" and explicitly says `Use "Pipeline v3" only` (line 57).

**Verdict: CORRECT.** The SKILL.md mirrors the MANIFEST's own self-designation. The "v4" label exists only in gate-manifest.json's version field and in the MEMORY.md project history. The MANIFEST -- which the SKILL.md points to as the authoritative source -- calls itself Pipeline v3. No change needed.

---

## Dimension 2: File Table Accuracy

All files verified with `wc -l`:

| File | SKILL.md claim | Actual | Match? |
|------|---------------|--------|--------|
| `artifact-builder-recipe-compose.md` | ~833 lines | 833 | YES |
| `artifact-builder-recipe-polish.md` | ~298 lines | 300 | YES (~) |
| `gate-runner-core.js` | ~2,900 lines | 2,929 | YES (~) |
| `gate-runner-spec.md` | ~300 lines | 299 | YES (~) |
| `gate-runner-preconditions.md` | 83 lines | 83 | YES |
| `gate-runner-provenance.md` | 151 lines | 151 | YES |
| `gate-manifest.json` | ~343 lines | 343 | YES |
| `pa-questions.md` | ~431 lines | 431 | YES |
| `pa-deployment.md` | ~442 lines | 442 | YES |
| `pa-weaver.md` | ~466 lines | 468 | YES (~) |
| `pa-guardrails.md` | ~113 lines | 113 | YES |
| `pa-guardrails-weaver.md` | ~59 lines | 59 | YES |
| `pa-manifest.md` | 89 lines | 89 | YES |
| All 9 artifact files | exist | exist | YES |
| `EXECUTION-TRACKER-TEMPLATE.md` | exists | 199 lines | YES |
| `experiment-protocol.md` | exists | 51 lines | YES |
| `council-verdict.md` | exists | exists | YES |

**Verdict: CORRECT.** All files exist, all approximate line counts are within normal drift tolerance.

---

## Dimension 3: Artifact Count

**SKILL.md says:** "9 artifact files" (line 5 frontmatter, line 29 table)
**Actual state:** MANIFEST.md still says "9 artifact files" (line 5). The 9 are: identity-perception, builder-recipe, gate-runner, pa-protocol, routing, orchestrator, tc-brief-template, worked-examples, value-tables. All exist.

**Verdict: CORRECT.** The 9-artifact count is still the MANIFEST's own designation. Split files (recipe-compose/polish, gate splits, PA splits) are sub-files of artifacts 2/3/4, not new top-level artifacts.

---

## Dimension 4: Gate Counts

**SKILL.md says:** "56 gates" with tier breakdown "21 REQUIRED + 14 RECOMMENDED + 10 ADVISORY + 2 DIAGNOSTIC + 8 BV + 1 UTILITY = 56"
**gate-manifest.json says:** `"_canonical": "Total: 56 gates (21 REQ + 14 REC + 10 ADV + 2 DIAG + 8 BV + 1 UTIL)"` and `"grandTotal": 56`

Verified tier arrays:
- required: 21 gates listed (GR-01 through GR-79)
- recommended: 14 gates listed (GR-07 through GR-83)
- advisory: 10 gates listed (GR-05b through GR-81)
- briefVerification: 8 gates listed (BV-01 through BV-08)
- diagnosticOnly: 2 gates listed (GR-33, GR-34)
- utility: 1 gate (A-03)

**Verdict: CORRECT.** Perfect match.

---

## Dimension 5: Function Count

**SKILL.md says:** "26 executable Playwright JS functions"
**Actual:** `grep -c '^function \|^async function ' gate-runner-core.js` = **26**

Listed functions:
1. runBriefVerification
2. checkAntiRegressionLanguage
3. runGateRunner
4. runAntiPatternGates
5. runWave2Gates
6. runGateCoverage
7. checkGateResultIntegrity
8. checkDPR
9. checkScreenshotQuality
10. checkUsabilityPriority
11. checkPredictionSuppression
12. checkFindingStatusMap
13. checkBuilderInputVolume
14. parseIntentComments
15. verifyIntentComments
16. checkBriefOutputDiff
17. checkResidualArtifact
18. checkRefineCompletion
19. checkIterationLogAutoFill
20. checkVisibleContent
21. elementLevelScreenshotFallback
22. runPhase3Gates
23. runPostWeaverGates
24. runMetaGates
25. runAllGates
26. captureScreenshots

**Verdict: CORRECT.** Exact match.

---

## Dimension 6: PA Question Count

**SKILL.md says:** "69 PA question definitions (PA-01--PA-81)"
**pa-questions.md header says:** "Contains question definitions ONLY (PA-01 through PA-81, 69 questions)"
**Line count:** 431 lines (matches SKILL.md's "~431 lines")

**Verdict: CORRECT.**

---

## Dimension 7: Execution Rules Accuracy

Checked each bullet:

1. **Two-pass build** -- "Phase 2 uses TWO builder passes. Pass A (structure, D-01--D-06, D-09: 7 dispositions) then Pass A structural check, then Pass B (refinement, D-07, D-08: 2 dispositions)." -- CONFIRMED by MANIFEST Section 4 and artifact-orchestrator.md SECTION 5.

2. **Observer agent** -- "Spawn the Observer FIRST... 30 binary checks. See artifact-orchestrator.md Section 1." -- CONFIRMED. Observer is in SECTION 1 of artifact-orchestrator.md.

3. **Execution tracker** -- "Copy EXECUTION-TRACKER-TEMPLATE.md to your output directory" -- CONFIRMED by MANIFEST step 0.

4. **Agent prompts** -- "Appendix E has copy-paste-ready prompts" -- CONFIRMED by MANIFEST (Appendix E referenced at line 1089+).

5. **Model mandate** -- "ALL agents MUST be Opus. No exceptions. (Manifest Appendix F)" -- CONFIRMED.

6. **Orchestration** -- "Use TeamCreate." -- CONFIRMED.

7. **Gate Runner** -- "26 functions, 56 gates" -- CONFIRMED (see dimensions 4-5).

8. **DPR + Screenshots** -- captureScreenshots and GR-62 references correct.

9. **Experiential scan** -- CONFIRMED by artifact-orchestrator.md Phase 3A+ (line 383).

10. **Usability priority gate** -- GR-64 reference correct.

11. **Output directory** -- `ephemeral/pages/{CONTENT_SLUG}/` -- **PARTIALLY STALE.** The actual convention used in the live run was `ephemeral/builds/{SLUG}-{DATE}/`. MANIFEST step 0 says `ephemeral/builds/{SLUG}-{DATE}/`. This is a discrepancy.

12. **Background hex lock (D-09)** -- CONFIRMED.

**Finding 7A: Output directory path is WRONG.**

- **SKILL.md says (line 88):** `ephemeral/pages/{CONTENT_SLUG}/`
- **MANIFEST says (line 23):** `ephemeral/builds/{SLUG}-{DATE}/`
- **Change type:** NEEDED (incorrect -- would cause an agent to create output in the wrong directory)
- **Edit:** Change line 88 from `ephemeral/pages/{CONTENT_SLUG}/` to `ephemeral/builds/{SLUG}-{DATE}/`

---

## Dimension 8: Iteration Support (Verdict Terminology)

**SKILL.md says (lines 93-99):**
> "If the Weaver verdict is REFINE, execute the REFINE protocol in artifact-orchestrator.md Section 7. Iteration budget: 1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3 between passes (diminishing returns). The pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES. REFINE uses a DIFFERENT Opus builder (defeats continuation bias). REFINE builder receives artistic impressions, NOT gate scores or fix lists. All REFINE artifacts use `-refine` suffix."

**Actual state across files:**
- **MANIFEST quickstart (line 43-47):** Uses "SHIP / SHIP WITH FIXES / REFINE / REBUILD" at Weaver output, then "REFINE/IMPROVE" and "IMPROVE protocol" in step 11, then "2 IMPROVE passes" in convergence budget.
- **artifact-orchestrator.md:** Uses "REFINE" in decision tree (lines 497-528 "REFINE Targeting", "REFINE Protocol") but "IMPROVE" in the architecture section (lines 44, 46, 74-78, 93).
- **pa-weaver.md Section 5:** Uses RELEASE / IMPROVE / POLISH / RETHINK exclusively (lines 273-276). Never uses SHIP or REFINE in the decision table.

The terminology is in a TRANSITIONAL STATE. The old terms (SHIP/REFINE/REBUILD) and new terms (RELEASE/IMPROVE/RETHINK + POLISH) coexist across files. The MANIFEST itself is inconsistent (step 10 says "REFINE", step 11 says "IMPROVE").

**Finding 8A: Iteration budget uses stale terminology.**

- **SKILL.md says:** "1 REBUILD + 2 REFINE passes maximum"
- **MANIFEST says (line 47):** "1 REBUILD + 2 IMPROVE passes maximum"
- **Change type:** NEEDED (the MANIFEST -- which SKILL.md points to as authoritative -- explicitly uses IMPROVE, not REFINE, for the iteration budget)
- **Edit:** Change "2 REFINE passes" to "2 IMPROVE passes" on line 94. Change "REFINE" to "IMPROVE" throughout the iteration support section (lines 93-99) to match the MANIFEST's own terminology. Also change "SHIP or SHIP WITH FIXES" to "SHIP or SHIP WITH FIXES" (this one is actually still correct per MANIFEST step 43).

**Finding 8B: `-refine` suffix claim.**

- **SKILL.md says (line 99):** "All REFINE artifacts use `-refine` suffix"
- **MANIFEST says (line 47):** No mention of `-refine` suffix in the quickstart. The IMPROVE pass concept doesn't use `-refine`.
- **artifact-orchestrator.md:** Uses `-refine` suffix in REFINE File Completion check context.
- **Change type:** This is borderline. The orchestrator still uses `-refine` in GR-79 (checkRefineCompletion), so the suffix IS still used even if the higher-level label is "IMPROVE". Leave as-is or update to match. I'd say OPTIONAL -- the suffix is a technical detail that still exists in the code.

---

## Dimension 9: Non-Negotiables

All 7 checked:

1. **Container: 940-960px** -- CONFIRMED (universal constraint)
2. **Warm palette: R >= G >= B** -- CONFIRMED
3. **Perceptible CSS thresholds** -- ">= 15 RGB background delta, >= 0.025em letter-spacing, <= 120px stacked gap, <= 96px single margin" -- CONFIRMED by artifact-identity-perception.md and value tables
4. **Builder model: Opus always** -- CONFIRMED
5. **PA auditors are fresh-eyes** -- CONFIRMED
6. **Two-pass build** -- CONFIRMED
7. **Observer: spawned FIRST, 30 binary compliance checks** -- CONFIRMED

**Verdict: CORRECT.** All 7 non-negotiables are accurate.

---

## Dimension 10: TC Brief Template Line Count

**SKILL.md says (line 39):** "~223-line TC brief template"
**MANIFEST says (line 20):** "~223 lines"
**Actual:** 235 lines

**Verdict: CORRECT (borderline).** Both SKILL.md and MANIFEST say ~223. The actual file is 235 lines, a 5.4% drift. Since SKILL.md mirrors the MANIFEST's own claim and both use "~", this is within tolerance. If anything, the MANIFEST should be updated, not SKILL.md.

---

## Dimension 11: Missing Information

Checked each item:

1. **d10-observer-protocol.md** -- Exists (593 lines). Status: "DESIGN COMPLETE -- Research Only". The SKILL.md already references the Observer via artifact-orchestrator.md Section 1 (which in turn references d10-observer-protocol.md for the copy-paste prompt). The SKILL.md does NOT need to directly reference this research file.

2. **captureScreenshots function** -- Already referenced in SKILL.md line 85. CORRECT.

3. **IMPROVEMENTS comment format** -- Already referenced in SKILL.md execution rules ("Pass B ... IMPROVEMENTS"). Wait -- actually, the SKILL.md does NOT mention IMPROVEMENTS comments. Let me check... Line 98 says "REFINE builder receives artistic impressions, NOT gate scores or fix lists." The MANIFEST step 11a says `<!-- IMPROVEMENT-IDEAS -->` and `<!-- IMPROVEMENTS: ... -->` comments are critical. However, the SKILL.md defers all detail to the MANIFEST, and these are execution details that live there. NOT missing -- the SKILL.md intentionally points to the MANIFEST for procedure details.

4. **Low-Friction Iteration Protocol** -- Referenced in MANIFEST line 47 ("up to 3 intermediate gate-only cycles within a single IMPROVE pass"). The SKILL.md doesn't mention this. It is an optimization path for experienced orchestrators. NOT essential for SKILL.md -- it's a MANIFEST-level detail.

5. **Mini-PA Mode 2.5** -- Referenced in pa-deployment.md Section 6. The SKILL.md doesn't mention it. The pa-deployment.md is already listed in the SKILL.md's PA split table (line 62) with "Mini-PA Mode 2.5" in the description. ALREADY REFERENCED.

**Finding 11A: Output directory discrepancy (already captured in Finding 7A).**

No additional missing information findings that rise to the level of NEEDED.

---

## NEEDED Changes (3 findings)

### Finding 7A: Output Directory Path is Wrong

**Line 88 currently reads:**
```
- **Output directory:** `ephemeral/pages/{CONTENT_SLUG}/` — derive slug from content filename.
```

**Should read:**
```
- **Output directory:** `ephemeral/builds/{SLUG}-{DATE}/` — derive slug from content filename, DATE is YYYY-MM-DD.
```

**Evidence:** MANIFEST.md line 23: `Create output directory at ephemeral/builds/{SLUG}-{DATE}/`

### Finding 8A: Iteration Budget Terminology (REFINE -> IMPROVE)

**Lines 93-98 currently read:**
```
The pipeline supports iteration. If the Weaver verdict is REFINE, execute the REFINE protocol
in artifact-orchestrator.md Section 7. Iteration budget: 1 REBUILD + 2 REFINE passes maximum.
Stop when PA-05 delta < 0.3 between passes (diminishing returns).
The pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES.
REFINE uses a DIFFERENT Opus builder (defeats continuation bias).
REFINE builder receives artistic impressions, NOT gate scores or fix lists.
```

**Should read:**
```
The pipeline supports iteration. If the Weaver verdict is IMPROVE, execute the IMPROVE protocol
in artifact-orchestrator.md Section 7. Iteration budget: 1 REBUILD + 2 IMPROVE passes maximum.
Stop when PA-05 delta < 0.3 between passes (diminishing returns).
The pipeline is NOT complete until verdict is SHIP or SHIP WITH FIXES.
IMPROVE uses a DIFFERENT Opus builder (defeats continuation bias).
IMPROVE builder receives artistic impressions, NOT gate scores or fix lists.
```

**Evidence:** MANIFEST.md line 47: `1 REBUILD + 2 IMPROVE passes maximum`. MANIFEST line 44: `execute IMPROVE protocol`. artifact-orchestrator.md line 44: `The IMPROVE pass is the pipeline's highest-value phase`. The MANIFEST -- which SKILL.md designates as authoritative -- uses IMPROVE, not REFINE, for iteration passes.

### Finding 8A-supplement: REFINE suffix line

**Line 99 currently reads:**
```
All REFINE artifacts use `-refine` suffix (e.g., `p3b-pa-auditor-A-refine.md`).
```

**Should read:**
```
All IMPROVE artifacts use `-refine` suffix (e.g., `p3b-pa-auditor-A-refine.md`).
```

**Evidence:** The file suffix is still `-refine` in the code (GR-79 checkRefineCompletion), but the pass name is now IMPROVE. This prevents confusion about what "REFINE" means.

---

## OPTIONAL Changes (2 findings)

### Finding 10A: TC Brief Template Line Count Drift

**Line 39 says:** "~223-line TC brief template"
**Actual:** 235 lines (5.4% drift)
**Recommendation:** Could update to "~235-line" but since it mirrors the MANIFEST's own claim and both use "~", this is not misleading.

### Finding 8B: `-refine` Suffix Terminology

The `-refine` suffix in file naming could be updated to `-improve` for consistency with the new verdict label, but since the actual gate code (GR-79 checkRefineCompletion) still uses `-refine`, changing the SKILL.md without changing the code would create a DIFFERENT inconsistency. Better left alone until a coordinated rename.

---

## Audit Complete

**3 NEEDED changes:**
1. Output directory: `ephemeral/pages/{CONTENT_SLUG}/` -> `ephemeral/builds/{SLUG}-{DATE}/`
2. Iteration terminology: REFINE -> IMPROVE (5 instances across lines 93-99)
3. Line 99 label: "REFINE artifacts" -> "IMPROVE artifacts"

**2 OPTIONAL changes (not recommended):**
1. TC brief template line count ~223 -> ~235
2. `-refine` suffix rename (blocked by code dependency)

**5 dimensions CORRECT as-is:**
1. Version label (Pipeline v3)
2. File table accuracy (all files exist, all counts match)
3. Artifact count (9)
4. Gate counts (56 = 21+14+10+2+8+1)
5. Function count (26)
6. PA question count (69)
7. Non-negotiables (all 7 accurate)
