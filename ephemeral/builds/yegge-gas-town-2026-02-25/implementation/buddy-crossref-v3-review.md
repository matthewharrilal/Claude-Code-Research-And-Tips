# Cross-Reference Integrity Verification

> **Auditor:** Opus cross-reference verifier (buddy-crossref)
> **Date:** 2026-02-25
> **Scope:** 14 pipeline files in `ephemeral/va-extraction/`
> **Verdict:** **SIGNIFICANT DRIFT** — 7 gates added in convergence reframe were NOT propagated to 3+ downstream files; Section 9 reference error appears in 3 files

---

## Files Audited

| # | File | Lines Read | Status |
|---|------|-----------|--------|
| 1 | `SKILL.md` | 100 (full) | STALE counts |
| 2 | `MANIFEST.md` | ~999 (full, 2 chunks) | STALE counts |
| 3 | `artifact-orchestrator.md` | ~999 (full, 2 chunks) | CONSISTENT (is the target of stale refs) |
| 4 | `gate-manifest.json` | 326 (full) | CANONICAL — contains stale internal note |
| 5 | `gate-runner-core.js` | ~2225 (grepped) | CONSISTENT with gate-manifest.json |
| 6 | `gate-runner-spec.md` | 266 (full) | STALE counts + missing gates in table |
| 7 | `gate-runner-preconditions.md` | 84 (full) | Stale section reference |
| 8 | `EXECUTION-TRACKER-TEMPLATE.md` | 163 (full) | STALE BV count |
| 9 | `pa-weaver.md` | 467 (full) | CONSISTENT |
| 10 | `pa-deployment.md` | 377 (full) | CONSISTENT |
| 11 | `pa-questions.md` | 431 (first 500) | CONSISTENT |
| 12 | `artifact-builder-recipe.md` | 200 (first 200) | CONSISTENT |
| 13 | `artifact-routing.md` | 200 (first 200) | CONSISTENT |
| 14 | `artifact-identity-perception.md` | 200 (first 200) | CONSISTENT |

---

## 1. Gate ID Audit

### 1A. Canonical Gate Inventory (gate-manifest.json)

gate-manifest.json version 4.1.1 (2026-02-25) declares itself canonical via the `_canonical` field:

| Tier | Count | Gate IDs |
|------|-------|----------|
| REQUIRED | 21 | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-48, GR-60, GR-61, GR-62, GR-63, GR-64, GR-79 |
| RECOMMENDED | 13 | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52, GR-67, GR-78, GR-80, GR-82 |
| ADVISORY | 10 | GR-05b, GR-19, GR-21, GR-22, GR-46, GR-50, GR-53, GR-55, GR-66, GR-81 |
| DIAGNOSTIC | 2 | GR-33, GR-34 |
| BRIEF VERIFICATION | 7 | BV-01, BV-02, BV-03, BV-04, BV-05, BV-06, BV-07 |
| UTILITY | 1 | A-03 |
| **TOTAL** | **54** | |

### 1B. Gate IDs in gate-runner-core.js

All 54 gate IDs from gate-manifest.json were searched in gate-runner-core.js:

- **FOUND (52/54):** All gates EXCEPT GR-33 and GR-34
- **GR-33, GR-34 status:** Documented in core.js header comment as "report-only, no code in this file." These are DIAGNOSTIC tier gates that produce reports but have no automated check. This is INTENTIONAL and CONSISTENT with gate-manifest.json classifying them as "diagnostic."
- **No orphan gate IDs:** No gate IDs exist in core.js that are absent from gate-manifest.json.

**Gate ID Integrity: PASS** (52/52 executable gates present; 2 diagnostic gates intentionally excluded from code)

### 1C. Gate Count Propagation Failure (SIGNIFICANT)

The convergence reframe added 7 gates that exist in gate-manifest.json and gate-runner-core.js but were NOT propagated to downstream files:

| Added Gate | Tier | Present in manifest | Present in core.js | Propagated to SKILL.md | Propagated to MANIFEST.md | Propagated to spec.md |
|-----------|------|--------------------|--------------------|----------------------|--------------------------|---------------------|
| GR-78 | REC | YES | YES | NO | NO | NO |
| GR-79 | REQ | YES | YES | NO | NO | NO |
| GR-80 | REC | YES | YES | NO | NO | NO |
| GR-81 | ADV | YES | YES | NO | NO | NO |
| GR-82 | REC | YES | YES | NO | NO | NO |
| BV-06 | BV | YES | YES | NO | NO | NO |
| BV-07 | BV | YES | YES | NO | NO | NO |

**Files with stale gate counts:**

| File | Location | Says | Should Say |
|------|----------|------|-----------|
| SKILL.md | Line 46 | "47 gates" | "54 gates" |
| SKILL.md | Line 50 | "20 REQ + 10 REC + 9 ADV + 2 DIAG + 5 BV + 1 UTIL = 47" | "21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL = 54" |
| SKILL.md | Line 76 | "47 gates" | "54 gates" |
| MANIFEST.md | Line 142 | "47 gate-runner gates" | "54 gate-runner gates" |
| MANIFEST.md | Line 248 | "47 gates" | "54 gates" |
| MANIFEST.md | Line 468 | "47 gates" | "54 gates" |
| MANIFEST.md | Section 3 | "(20 REQ + 10 REC + 9 ADV + 2 DIAG + 5 BV + 1 UTIL)" | "(21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL)" |
| gate-runner-spec.md | Line 18 | "20 REQUIRED" | "21 REQUIRED" |
| gate-runner-spec.md | Line 18 | "10 RECOMMENDED" | "13 RECOMMENDED" |
| gate-runner-spec.md | Line 18 | "9 ADVISORY" | "10 ADVISORY" |
| gate-runner-spec.md | Line 18 | "5 BRIEF" | "7 BRIEF" |
| gate-runner-spec.md | Line 257 | "Total executable gates: 47" | "Total executable gates: 54" |
| gate-runner-spec.md | Gate Summary Table | Missing GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 | Add 7 rows |

**Severity: SIGNIFICANT** — Any orchestrator reading SKILL.md or MANIFEST.md will expect 47 gates and may not run the 7 convergence reframe gates. The gate-manifest.json `_canonical` note says "If counts differ elsewhere, THIS FILE wins" — but agents reading SKILL.md first may never consult gate-manifest.json.

---

## 2. Cross-File Reference Audit

### 2A. Section References

| Source File | Reference | Target File | Target Section | Status |
|------------|-----------|-------------|---------------|--------|
| SKILL.md | "artifact-orchestrator.md Section 7" (REFINE protocol) | artifact-orchestrator.md | SECTION 7: Phase 4 — Verdict and Decision Tree | **VALID** |
| MANIFEST.md | "artifact-orchestrator.md Section 7" (REFINE/REBUILD) | artifact-orchestrator.md | SECTION 7 | **VALID** |
| gate-manifest.json | "Section 9 (FIX-094)" (GR-23-28 reclassification note) | artifact-orchestrator.md | Section 9 = "REROUTED VALUES ITEMS" | **INVALID** — GR-23-28 decision rules are in Section 7 |
| gate-runner-spec.md | "artifact-orchestrator.md Section 9" (GR-23-28) | artifact-orchestrator.md | Section 9 | **INVALID** — same error |
| gate-runner-preconditions.md | "artifact-orchestrator.md Section 9" (GR-23-28) | artifact-orchestrator.md | Section 9 | **INVALID** — same error |
| pa-deployment.md | "pa-weaver.md Section 5.5" (Finding Status Map) | pa-weaver.md | Section 5.5 | **VALID** |
| pa-weaver.md | References GR-82 (Finding Status Map) | gate-manifest.json / core.js | GR-82 exists | **VALID** |
| pa-weaver.md | References GR-81 (Prediction Suppression) | gate-manifest.json / core.js | GR-81 exists | **VALID** |
| MANIFEST.md | "gate-runner-core.js" file reference | gate-runner-core.js | File exists | **VALID** |
| MANIFEST.md | "pa-questions.md" | pa-questions.md | File exists | **VALID** |
| MANIFEST.md | "pa-deployment.md" | pa-deployment.md | File exists | **VALID** |
| MANIFEST.md | "pa-weaver.md" | pa-weaver.md | File exists | **VALID** |

### 2B. Section 9 Reference Error (SIGNIFICANT)

Three files claim GR-23 through GR-28 were reclassified to "artifact-orchestrator.md **Section 9**":

1. **gate-manifest.json** `_canonical.notes` field: `"GR-23-28 reclassified to orchestrator Section 9 (FIX-094)"`
2. **gate-runner-spec.md** line ~30: references Section 9 for GR-23-28 reclassification
3. **gate-runner-preconditions.md** line ~10: `"Their operational home is artifact-orchestrator.md Section 9."`

**Actual location:** The GR-23-28 "Orchestrator Decision Rules" live in **artifact-orchestrator.md Section 7** (found at approximately line 658, within the Phase 4 Verdict subsection). Section 9 of artifact-orchestrator.md is titled "REROUTED VALUES ITEMS" and contains rerouted value-table content — NOT gate decision rules.

**Impact:** An orchestrator searching for GR-23-28 in Section 9 will find the wrong content. The rules ARE accessible (they're in Section 7) but the reference is wrong.

**Severity: SIGNIFICANT** — Misdirects agents looking for the 6 decision rules. All 3 references should say "Section 7" not "Section 9."

---

## 3. Numeric Consistency

### 3A. PA Question Counts

| File | Claim | Actual | Status |
|------|-------|--------|--------|
| pa-questions.md | 69 questions (PA-01 through PA-81 with gaps) | 69 | **CONSISTENT** |
| pa-deployment.md | 69 questions across 9 auditors | 69 | **CONSISTENT** |
| pa-deployment.md auditor breakdown | A=9, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6 | Sum = 69 | **CONSISTENT** |
| pa-weaver.md | PA-05 scoring, Tier 5 questions PA-60-PA-77 | References match pa-questions.md | **CONSISTENT** |

### 3B. Gate Counts (Discrepancies)

| File | Claims | gate-manifest.json (canonical) | Delta | Status |
|------|--------|-------------------------------|-------|--------|
| gate-manifest.json | 54 total (21+13+10+2+7+1) | N/A (is canonical) | 0 | CANONICAL |
| gate-runner-core.js header | 50 in-file executable (42 GR + 7 BV + 1 A-03) | 52 executable + 2 diagnostic = 54 | See note | **CONSISTENT** (header counts "in-file" code, excluding 2 diagnostic + 2 procedural iteration gates) |
| SKILL.md | 47 total (20+10+9+2+5+1) | 54 | -7 | **STALE** |
| MANIFEST.md | 47 total (20+10+9+2+5+1) | 54 | -7 | **STALE** |
| gate-runner-spec.md | 47 total (20+10+9+5) | 54 | -7 | **STALE** |

### 3C. Line Count Cross-References

| File | Claims about | Says | Status |
|------|-------------|------|--------|
| MANIFEST.md Appendix D | gate-runner-core.js | "~1,626 lines" | **MINOR** — approximate, acceptable |
| SKILL.md | gate-runner-core.js | "~1,654 lines" | **MINOR** — different approximate; both are estimates |

Line counts are explicitly marked as approximate (~), so the ~28 line discrepancy is non-blocking.

### 3D. BV Gate Count in Execution Tracker

| File | Location | Says | Should Say | Status |
|------|----------|------|-----------|--------|
| EXECUTION-TRACKER-TEMPLATE.md | Phase 1, line 30 | "BV gates: ___/4 PASS" | "BV gates: ___/7 PASS" (or ___/5 if only counting BV-01-BV-05 which are brief-specific) | **STALE** |

The tracker template predates BV-06 (Build-Phase Input Volume Check) and BV-07 (Build-Phase Residual Artifact Check). Since these run during build phase (not brief verification), the correct denominator depends on interpretation: /5 for brief-only BV gates, or /7 for all BV-prefixed gates.

---

## 4. Naming Convention Consistency

### 4A. REFINE Suffix Convention

| File | Convention Used | Status |
|------|----------------|--------|
| SKILL.md | `-refine` suffix | **CONSISTENT** |
| artifact-orchestrator.md Section 7 | `-refine` suffix | **CONSISTENT** |
| gate-runner-core.js (GR-79) | Checks for refine completion | **CONSISTENT** |
| EXECUTION-TRACKER-TEMPLATE.md | "REFINE Phase" section, `-refine` PA reports | **CONSISTENT** |

**REFINE naming: CONSISTENT across all files.**

### 4B. Gate Tier Names

| Tier Name | gate-manifest.json | SKILL.md | MANIFEST.md | gate-runner-spec.md | Status |
|-----------|-------------------|----------|-------------|--------------------|----|
| REQUIRED | YES | YES | YES | YES | **CONSISTENT** |
| RECOMMENDED | YES | YES | YES | YES | **CONSISTENT** |
| ADVISORY | YES | YES | YES | YES | **CONSISTENT** |
| DIAGNOSTIC | YES | YES | YES | YES | **CONSISTENT** |
| BRIEF VERIFICATION / BV | YES | "BRIEF" | "BV" | "BRIEF" | **MINOR** — abbreviated forms used inconsistently but all understandable |
| UTILITY | YES | YES | YES | YES | **CONSISTENT** |

### 4C. Soul Constraint IDs

artifact-identity-perception.md defines SC-01 through SC-10 (10 soul constraints). Cross-checked against references in pa-questions.md and artifact-builder-recipe.md — all consistent.

---

## 5. Dead References

### 5A. From Convergence Changes

The convergence reframe added iteration/convergence gates (GR-78 through GR-82, BV-06, BV-07). These are:

- **Present in:** gate-manifest.json, gate-runner-core.js, pa-weaver.md (GR-81, GR-82)
- **Absent from (as entries):** SKILL.md tier breakdown, MANIFEST.md tier breakdown, gate-runner-spec.md Gate Summary Table
- **Not dead references per se** — no file POINTS to these gates and finds them missing. Rather, these files have STALE TOTALS that don't account for the new gates. The gates themselves exist and function correctly.

### 5B. GR-23 through GR-28 Reclassification Trail

These 6 gates were reclassified from gate-runner to orchestrator decision rules in Wave 3. The reclassification is correctly reflected:

- gate-manifest.json: Lists GR-23-28 under `iteration_gates.procedural_only` (not in executable tiers)
- gate-runner-core.js: Does NOT contain GR-23-28 code (correct — they're orchestrator rules now)
- gate-runner-preconditions.md: Documents the reclassification
- artifact-orchestrator.md: Contains the 6 decision rules in Section 7

**However:** The section reference is wrong (says Section 9, rules are in Section 7). See Section 2B above.

### 5C. File Path References

All inter-file references (`artifact-orchestrator.md`, `pa-weaver.md`, `pa-deployment.md`, `pa-questions.md`, `gate-runner-core.js`, `gate-manifest.json`, etc.) point to files that exist in `ephemeral/va-extraction/`. No dead file paths found.

---

## 6. Summary of All Findings

### SIGNIFICANT (requires fix before pipeline execution)

| # | Finding | Files Affected | Fix |
|---|---------|---------------|-----|
| S1 | Gate count says 47, should be 54 | SKILL.md (3 locations), MANIFEST.md (4 locations), gate-runner-spec.md (5 locations) | Update all to "54 gates (21 REQ + 13 REC + 10 ADV + 2 DIAG + 7 BV + 1 UTIL)" |
| S2 | GR-23-28 reference says "Section 9" but rules are in Section 7 | gate-manifest.json (1 note), gate-runner-spec.md (1 ref), gate-runner-preconditions.md (1 ref) | Change "Section 9" to "Section 7" in all 3 files |
| S3 | gate-runner-spec.md Gate Summary Table missing 7 convergence gates | gate-runner-spec.md | Add rows for GR-78, GR-79, GR-80, GR-81, GR-82, BV-06, BV-07 |

### MINOR (non-blocking but should be cleaned up)

| # | Finding | Files Affected | Fix |
|---|---------|---------------|-----|
| M1 | Execution tracker BV denominator says /4, should be /7 (or /5 for brief-only) | EXECUTION-TRACKER-TEMPLATE.md line 30 | Update to /7 or /5 with clarifying note |
| M2 | Line count approximations differ (~1,626 vs ~1,654) for gate-runner-core.js | MANIFEST.md Appendix D, SKILL.md | Standardize or remove approximate line counts |
| M3 | "BRIEF VERIFICATION" vs "BRIEF" vs "BV" tier name inconsistency | SKILL.md, MANIFEST.md, gate-runner-spec.md | Standardize to one form (recommend "BV" as shortest) |

---

## 7. Verdict

### **SIGNIFICANT DRIFT**

The pipeline has **two systemic propagation failures**:

1. **Gate count drift (47 vs 54):** The convergence reframe added 7 gates to gate-manifest.json and gate-runner-core.js but did NOT update SKILL.md, MANIFEST.md, or gate-runner-spec.md. Any orchestrator reading the entry-point files will expect 47 gates. The gate-manifest.json `_canonical` field correctly declares itself authoritative ("If counts differ elsewhere, THIS FILE wins"), but agents that read SKILL.md first — which is the normal entry path — will operate with stale information.

2. **Section reference error (Section 9 vs Section 7):** Three files claim GR-23-28 decision rules live in "artifact-orchestrator.md Section 9" when they actually reside in Section 7. This misdirects any agent looking for those rules.

**Neither issue prevents the pipeline from executing** — the gates exist and will run correctly from gate-runner-core.js regardless of what SKILL.md says. The risk is **orchestrator confusion**: an agent reading stale counts may incorrectly conclude that missing gates are a bug, or may skip convergence verification steps that it doesn't know exist.

### Recommended Fix Priority

1. **FIX FIRST:** S1 (gate counts in SKILL.md, MANIFEST.md, gate-runner-spec.md) — 12 edits across 3 files
2. **FIX SECOND:** S2 (Section 9 → Section 7 in gate-manifest.json, gate-runner-spec.md, gate-runner-preconditions.md) — 3 edits across 3 files
3. **FIX THIRD:** S3 (add 7 gate rows to gate-runner-spec.md Gate Summary Table) — 1 table addition
4. **FIX IF TIME:** M1 (tracker BV denominator), M2 (line counts), M3 (tier name standardization)

### What IS Consistent

- All 52 executable gate IDs in core.js match gate-manifest.json exactly (zero orphans, zero missing)
- PA question counts are perfectly consistent across pa-questions.md, pa-deployment.md, and pa-weaver.md (69/69)
- REFINE suffix convention is consistent across all files
- Soul constraint IDs (SC-01 through SC-10) are consistent
- All inter-file path references point to existing files
- Section 7 references for REFINE protocol are correct
- PA auditor-to-weaver handoff references are correct
- Gate tier names are consistent (with minor abbreviation variance)

---

*Cross-reference verification complete. 14 files audited, 54 gate IDs checked, 12 section references validated, 6 numeric claims verified.*
