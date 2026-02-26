# Adversarial Review of v3 Convergence Reframe Implementation

**Date:** 2026-02-25
**Reviewer:** Opus adversarial agent
**Scope:** All convergence reframe changes across 8 files: artifact-orchestrator.md, gate-runner-core.js, gate-manifest.json, EXECUTION-TRACKER-TEMPLATE.md, MANIFEST.md, pa-weaver.md, pa-deployment.md, build-page SKILL.md

---

## BLOCKING Issues (must fix)

### B-1. GR-79 MISSING from GR-48 REQUIRED_GATES array — will never be verified for coverage

**Location:** `gate-runner-core.js` line 1634-1639
**Problem:** The gate-manifest.json lists GR-79 as REQUIRED (tiers.required.gates includes "GR-79"). The file header comment (line 21) lists GR-79 in the REQUIRED tier. But the `REQUIRED_GATES` array inside `runGateCoverage()` (GR-48) at line 1634 does NOT include GR-79. This means GR-48 will never detect if GR-79 is missing from a gate run. For a gate classified as REQUIRED — whose FAIL means "REFINE iteration is INCOMPLETE" — this is a coverage hole.

**Current array (19 gates):** GR-01–GR-06, GR-08–GR-10, GR-11, GR-13–GR-15, GR-44, GR-60, GR-61, GR-62, GR-63, GR-64
**Missing:** GR-79

**Fix:** Add `'GR-79'` to the REQUIRED_GATES array. Update the comment from "19 REQUIRED gates" to "20 REQUIRED gates."

### B-2. GR-78, GR-80, GR-82 MISSING from GR-48 RECOMMENDED_GATES array — will never be verified for coverage

**Location:** `gate-runner-core.js` line 1642-1646
**Problem:** The gate-manifest.json lists GR-78, GR-80, and GR-82 as RECOMMENDED (tiers.recommended.gates). The file header (line 22) lists them in the RECOMMENDED tier. But the `RECOMMENDED_GATES` array inside `runGateCoverage()` at line 1642 only has 10 gates — GR-78, GR-80, and GR-82 are absent.

**Current array (10 gates):** GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-67
**Missing:** GR-78, GR-80, GR-82

**Fix:** Add `'GR-78', 'GR-80', 'GR-82'` to the RECOMMENDED_GATES array. Update the comment from "10 RECOMMENDED gates" to "13 RECOMMENDED gates."

### B-3. runPostWeaverGates() does NOT call GR-81 — gate-manifest.json claims it does

**Location:** `gate-runner-core.js` line 2215-2217 vs `gate-manifest.json` line 211
**Problem:** The gate-manifest.json execution order step 5.5 says `runPostWeaverGates` should run gates `["GR-64", "GR-81"]`. But the actual implementation at line 2215 only calls `checkUsabilityPriority` (GR-64):

```javascript
function runPostWeaverGates(auditorReports, weaverReport) {
  return [checkUsabilityPriority(auditorReports, weaverReport)];
}
```

GR-81 (Prediction Suppression / `checkPredictionSuppression`) is implemented as a standalone function (line 1889) but is NEVER called from any wrapper function. The orchestrator would have to know to call it separately, which defeats the purpose of the unified wrapper.

**Fix:** Add `checkPredictionSuppression(weaverReport)` to the `runPostWeaverGates` return array:
```javascript
function runPostWeaverGates(auditorReports, weaverReport) {
  return [
    checkUsabilityPriority(auditorReports, weaverReport),
    checkPredictionSuppression(weaverReport)
  ];
}
```

### B-4. EXECUTION-TRACKER-TEMPLATE.md REFINE isolation field CONTRADICTS REFINE protocol

**Location:** `EXECUTION-TRACKER-TEMPLATE.md` line 87
**Problem:** The tracker says:
> `REFINE isolation verified: ___ (manual: YES/NO — builder saw ONLY fix list + HTML)`

But the REFINE protocol in artifact-orchestrator.md (lines 565, 580-583) and MANIFEST.md (lines 1249-1277) explicitly state the REFINE builder receives:
1. Conviction artifact
2. Artistic impression from Weaver
3. RESIDUAL artifact
4. Original Execution Brief
5. Pass 1 HTML

And the REFINE builder does **NOT** receive fix lists. The tracker field describes the exact opposite of the intended isolation — it describes a "fix list + HTML" model which is the anti-pattern the convergence reframe was designed to prevent.

**Fix:** Change line 87 to:
```
- REFINE isolation verified: ___ (manual: YES/NO — builder saw ONLY conviction + artistic impression + RESIDUAL + brief + Pass 1 HTML — NO gate scores, thresholds, or fix lists)
```

---

## SIGNIFICANT Issues (should fix)

### S-1. Gate count contradiction: header says "51 gates," manifest says "54 gates"

**Location:** `gate-runner-core.js` line 20 vs `gate-manifest.json` line 297-306
**Problem:** The file header says "Total: 51 gates" and lists counts as 21+13+10+7=51. The gate-manifest.json says "grandTotal: 54" with breakdown 21+13+10+2+7+1=54. The header is missing the 2 diagnostic gates (GR-33, GR-34) and 1 utility gate (A-03) that the manifest counts. While the header's inline count of "In-file executable: 42 GR + 7 BV + 1 utility (A-03) = 50" is also inconsistent (50 vs 51).

**Impact:** An orchestrator reading the header will think 51 is canonical; reading the manifest will think 54. The header itself says "see gate-manifest.json for canonical counts" — but then states a different number, which is confusing.

**Fix:** Either align the header to say "Total: 54 gates" matching the manifest, or clarify the header counts with explicit breakdown matching the manifest's 54.

### S-2. GR-79 uses `require('fs')` and `require('path')` — Playwright browser context incompatibility

**Location:** `gate-runner-core.js` lines 2035-2036
**Problem:** GR-79 (`checkRefineCompletion`) uses `require('fs')` and `require('path')` to check file existence with `fs.existsSync`. All other gate functions in this file either: (a) operate on in-memory text strings, or (b) use Playwright `page.evaluate()` for DOM inspection. The `require('fs')` call implies this function runs in Node.js, not in the browser context. But the file is described as "Executable Playwright JavaScript" and the orchestrator executes gate code within Playwright sessions.

If the orchestrator runs this function in a Playwright `page.evaluate()` context, it will fail because `require` is not available in browser context. If the orchestrator runs it outside Playwright (in Node.js), it will work — but this is an implicit assumption not documented anywhere.

**Impact:** Runtime failure for GR-79 if called from the wrong execution context.

**Fix:** Either (a) document explicitly that GR-79 must run in Node.js context (not `page.evaluate`), or (b) restructure to accept a file list as input (like BV-07 accepts `builderInputFiles`) so the orchestrator provides the existence data.

### S-3. GR-80 returns PASS with status "no-row-to-fill" when row is missing — silent data loss

**Location:** `gate-runner-core.js` lines 2108-2120
**Problem:** When GR-80 cannot find a row for the current cycle in the tracker table, it returns `status: 'PASS'` with `action: 'no-row-to-fill'`. This means the iteration log just silently fails to record the data. A gate that is supposed to "auto-fill" should not PASS when it cannot perform its core function.

For cycle 2 or 3, if the tracker template row was malformed or doesn't match the regex `| 2 |`, the orchestrator gets a PASS result and never knows the data wasn't recorded.

**Fix:** Return `status: 'WARNING'` instead of `PASS` when no row is found, and add a note suggesting the orchestrator append a row manually.

### S-4. Iteration decision function inconsistency: orchestrator says "cycle <= 3" but MANIFEST says "2 REFINE passes maximum"

**Location:** `artifact-orchestrator.md` line 619 vs `MANIFEST.md` line 42
**Problem:** The iteration decision function checks `cycle <= 3`, which allows cycles 1, 2, 3 (i.e., initial + 2 REFINE passes). The MANIFEST says "2 REFINE passes maximum." These are consistent in meaning — cycle 1 = initial, cycle 2 = REFINE-1, cycle 3 = REFINE-2. But the decision function uses `cycle` as an opaque number without documenting that cycle 1 = initial pass. For cycle counting, does cycle start at 1 or 0?

The tracker template (line 103) shows:
```
| 1 (initial) | ___ | ...
| 2 (REFINE-1) | ___ | ...
| 3 (REFINE-2) | ___ | ...
```

So cycle 1 = initial. The decision function condition `cycle <= 3` would allow a 3rd REFINE only if cycle numbering started at 0. Since it starts at 1, the check `cycle <= 3` correctly bounds to 2 REFINE passes (cycles 2 and 3). This is fine — but confusing without an explicit comment.

**Fix:** Add a comment to the decision function: `// cycle 1 = initial build, cycle 2 = REFINE-1, cycle 3 = REFINE-2. Budget: 2 REFINE passes max.`

### S-5. BV-06 is not included in the `runAllGates` wrapper or any wrapper function

**Location:** `gate-runner-core.js` line 209 vs lines 2225-2247
**Problem:** BV-06 (`checkAntiRegressionLanguage`) is defined as a standalone function (line 209) that takes `manifestText` and `orchestratorText` as arguments. It is NOT called from `runBriefVerification` (which only runs BV-01 through BV-05) and NOT called from `runAllGates`. The gate-manifest.json execution order places BV-06 at step 0 (pre-Phase 0), separate from BV-01-05 at step 1.

This means:
- The orchestrator must know to call BV-06 separately before any other gate
- It won't appear in the `runAllGates` output
- GR-48 coverage check doesn't verify BV gates at all (only GR-* gates), so its absence is undetectable

**Impact:** BV-06 is silently skippable. If the orchestrator forgets to call it, no safety net catches the omission.

**Fix:** Either (a) document prominently in USAGE INSTRUCTIONS that BV-06 must be called separately at pipeline startup, or (b) add BV-06 to a startup wrapper function and mention it in the phased usage example.

### S-6. BV-07 is also not wired into any wrapper function

**Location:** `gate-runner-core.js` line 1947 vs execution flow
**Problem:** Same issue as S-5. BV-07 (`checkBuilderInputVolume`) is a standalone function at line 1947, placed at execution step 1.5 in the manifest. It is not called from any wrapper. The orchestrator must know to call it between brief assembly and builder spawn.

**Fix:** Add to usage instructions alongside BV-06.

---

## MINOR Issues (nice to fix)

### M-1. Header comment says "BV-01 through BV-06" in SECTION 1 but BV-06 is in SECTION 1B

**Location:** `gate-runner-core.js` line 7 vs lines 30-35, 203
**Problem:** The architecture comment at line 7 says `runBriefVerification(briefText) — Phase 1: Text parsing (BV-01 through BV-06)`. But the actual `runBriefVerification` function only contains BV-01 through BV-05. BV-06 is in a separate section (SECTION 1B, line 203) with a different function signature. The comment misleads about what `runBriefVerification` actually covers.

**Fix:** Change line 7 to: `runBriefVerification(briefText) — Phase 1: Text parsing (BV-01 through BV-05)`

### M-2. GR-82 REGRESSION detection only notes in `note` field but does not change status

**Location:** `gate-runner-core.js` lines 1930, 1941-1942
**Problem:** When GR-82 detects a REGRESSION keyword, it adds a WARNING to the note but the gate still returns PASS (as long as the table and status keywords exist). The pa-weaver.md spec (line 322) says: "If ANY finding is REGRESSION: flag as BLOCKING and recommend HALT." The gate implementation does not escalate to FAIL or even WARNING status on REGRESSION detection.

**Fix:** Either change the status to 'WARNING' when REGRESSION is detected, or add a separate `regressionDetected` flag to the result that the orchestrator can act on.

### M-3. GR-78 section pattern matching may be too loose

**Location:** `gate-runner-core.js` lines 1993-1998
**Problem:** The patterns used to detect RESIDUAL sections are quite broad:
- `/preserv|kept/i` — would match "the server preserved" or "I kept going"
- `/chang|modifi/i` — would match "the changelog" or "modified by CSS"
- `/next|would|future/i` — would match almost any English sentence with "would"
- `/trade|sacrific|compromis/i` — would match "trade" in any context

A RESIDUAL comment like `<!-- RESIDUAL: I would change the next version to trade on future modifications -->` would match all 4 patterns (3/4 required) despite being a single nonsensical sentence.

**Impact:** Low — builders are unlikely to game RESIDUAL comments. But a legitimate RESIDUAL that happens to use these words coincidentally could pass without actually documenting the 4 required sections.

**Fix:** Consider requiring section headers like `Preserved:`, `Changed:`, `Next:`, `Trade-offs:` for more robust detection.

### M-4. GR-81 returns `status: 'WARNING'` but is classified as ADVISORY

**Location:** `gate-runner-core.js` line 1901
**Problem:** GR-81 returns `status: 'WARNING'` on detection, while other ADVISORY gates return `status: 'FAIL'` (e.g., GR-05b at line 423). The inconsistency in status semantics between ADVISORY-tier gates could confuse downstream processing.

**Impact:** Low — ADVISORY gates don't affect verdict. But the inconsistency means status-based filtering (e.g., counting FAILs) will miss GR-81 predictions.

### M-5. Tracker template Phase field count may be wrong

**Location:** `EXECUTION-TRACKER-TEMPLATE.md` lines 155-162
**Problem:** The "Derived Phase Completion" table says Phase 3B has 22 fields and the total is 59. With the iteration fields added (Iteration State + Iteration Log table = ~3 fields), the total should be higher. But this is a template — minor arithmetic on field counts.

---

## Verification Passed

1. **Iteration budget consistency:** MANIFEST (line 42), orchestrator (line 609), and SKILL.md (line 87) all agree: "1 REBUILD + 2 REFINE passes maximum. Stop when PA-05 delta < 0.3."

2. **REFINE protocol in MANIFEST matches orchestrator:** The REFINE builder prompt template (MANIFEST lines 1246-1278) aligns with the REFINE protocol in orchestrator (lines 561-592): different Opus agent, reads conviction + artistic impression + RESIDUAL, generative verbs, COMPOSITIONAL mode.

3. **Gate IDs match between code and manifest for new gates:** GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 all have matching IDs in both gate-runner-core.js and gate-manifest.json.

4. **Gate tier classification consistent:** GR-79 = REQUIRED in manifest (line 46) and code (line 2025, tier: 'REQUIRED'). GR-78 = RECOMMENDED in manifest (line 55) and code (line 1982, tier: 'RECOMMENDED'). GR-80 = RECOMMENDED in manifest (line 56) and code (line 2076, tier: 'RECOMMENDED'). GR-81 = ADVISORY in manifest (line 65) and code (line 23). GR-82 = RECOMMENDED in manifest (line 56) and code header (line 22).

5. **REFINE naming convention consistent:** Orchestrator (line 576-577), GR-79 code (line 2039), and tracker template (line 97) all agree: cycle 2 = `-refine`, cycle 3 = `-refine-2`.

6. **pa-weaver.md Finding Status Map (Section 5.5) matches GR-82 implementation:** Both specify the table format (Finding | Status | Evidence), both use FIXED/IMPROVED/UNCHANGED/REGRESSION keywords, both are cycle >= 2 only.

7. **pa-deployment.md iteration notes (Section 5) are consistent with orchestrator:** Section 5.1 describes REFINE as compositional discovery, Section 5.2 references pa-weaver.md Section 5.5 for Finding Status Map.

8. **SKILL.md iteration awareness (lines 83-91) matches orchestrator protocol:** Different Opus builder, artistic impressions (not gate scores), `-refine` suffix, pipeline NOT complete until SHIP/SHIP WITH FIXES.

9. **BV-06 forbidden phrases are reasonable:** All 7 patterns target language that would reintroduce single-pass framing. No false positive risk against legitimate spec content.

10. **GR-79 expected file list is complete:** 9 PA auditor reports + integrative + 2 weaver outputs + gate results = 13 files. Matches the full Phase 3 output set.

11. **Soft language check:** The orchestrator changes use appropriately binary language. The two "should" instances found (line 456 — readability context, line 754 — rerouted item note) are in descriptive/contextual text, not in executable rules. No "consider", "ideally", or "aim to" in new convergence reframe code.

12. **No new crack dimension regressions detected:** The changes add iteration infrastructure without removing any existing verification. BV-06 actively guards against regression. RESIDUAL artifact requirement adds provenance. Finding Status Map adds convergence tracking.

---

## Verdict

**PASS WITH FIXES**

4 BLOCKING issues must be resolved before the next pipeline run:
- B-1 and B-2 are simple array additions (GR-48 coverage will be blind to new gates otherwise)
- B-3 is a one-line wrapper fix (GR-81 is dead code otherwise)
- B-4 is a text correction (tracker instructs wrong isolation model)

The 6 SIGNIFICANT issues are real but non-catastrophic — the most impactful is S-2 (GR-79 Node.js dependency) which could cause a runtime failure, and S-5/S-6 (unwired BV gates) which create silent skip risk. These should be addressed before the first iteration-aware pipeline run.

The implementation is otherwise well-structured: gate IDs align, tier classifications match, iteration budget is consistent across files, and the REFINE protocol is correctly encoded in all relevant artifacts.
