# Research Threading Assessment: AD Phase

**Agent:** Research Threading Checker
**Date:** 2026-02-11
**Scope:** Trace whether AD's research findings, audit discoveries, and new knowledge made it into formal provenance artifacts.

---

## A. Finding ID Inventory

| Finding Type | Count Found | Where They Live | In Provenance? |
|-------------|-------------|-----------------|---------------|
| AD-F-001 through AD-F-028 (formal) | 28 | `AD-outbound-findings.md`, `AD-SYNTHESIS.md`, `HANDOFF-AD-TO-CD.md`, `ACCUMULATED-IDENTITY-v2.md`, 6 HTML explorations, 6 builder findings files, 3 scribe reports | YES -- fully threaded. 608 total occurrences across 65 files. |
| PA-* (perceptual audit findings) | ~18 across 6 pages (LW-*, CBB-*, MF-*, etc.) | `explorations/axis/_perceptual-audit/AD-*/AUDIT-REPORT.md`, cold-look files, findings files | PARTIAL -- PA findings referenced in `AD-AUDIT-SYNTHESIS.md` only as "Provenance PA-05/PA-09/PA-11" (3 mentions). Vast majority of perceptual findings NOT in formal provenance. |
| Systemic patterns (template bugs, cross-page) | 4 major patterns | `AD-AUDIT-SYNTHESIS.md` "Cross-Page Patterns" section (header padding, dark code contrast, missing nav, medium viewport overflow) | YES -- documented in audit synthesis but NOT assigned formal finding IDs. They exist as FIX-001 through FIX-032 in audit synthesis, not as AD-F-* IDs. |
| Fix decisions (32 actionable items) | 32 | `AD-AUDIT-SYNTHESIS.md` (FIX-001 through FIX-032) + 6 `fix-report.md` files | PARTIAL -- FIX-* numbers exist in audit synthesis but the actual fix execution results (from perceptual audit fix reports) are NOT cross-referenced in provenance. Fix reports live outside provenance in `explorations/axis/_perceptual-audit/AD-*/fix-report.md`. |
| Skill evolution findings | 5 files, ~2,500 lines | `explorations/axis/_perceptual-audit/_skill-evolution/` | NO -- completely absent from formal provenance. Zero references to skill evolution in any provenance file. |
| EXT-AXIS-* (bespoke research) | 33 findings | HTML explorations, builder findings, research packages | YES -- threaded into `AD-outbound-findings.md` (20 mentions), `AD-SYNTHESIS.md` (15 mentions), exploration HTML files (184 mentions). Total: 583 occurrences across 65 files. |

---

## B. Threading Path Analysis

### Path 1: R-4 Research -> AD Explorations -> AD-F Findings -> Formal Provenance

```
R-4 (192 findings) -> R-4-AD-EVALUATION.md -> research-packages -> builder agents
     -> AD explorations (HTML) -> builder findings -> scribe reports
     -> AD-outbound-findings.md -> AD-SYNTHESIS.md -> HANDOFF-AD-TO-CD.md
```

**Status: STRONG.** 169/192 R-4 findings cited in explorations (88%). R4 IDs appear 316 times across 6 HTML exploration files. The chain from research to exploration to formal finding to provenance is intact. However, only 19 R4-* references appear in the formal `AD-outbound-findings.md` -- the intermediate artifacts (research packages, builder findings) carry the detailed citations, but the formal provenance summarizes rather than exhaustively lists R4 references.

**Where it thins:** R4 findings that were evaluated but NOT applied (the remaining 23 = 192-169) are documented in `R-4-AD-EVALUATION.md` in the execution scratchpad, but this evaluation is NOT referenced from formal provenance. A CD agent would not know which R4 findings were deliberately skipped without reading the execution artifacts.

### Path 2: EXT-AXIS-* Bespoke Research -> AD Explorations -> Formal Provenance

```
EXT-AXIS-{Z,F,B,SP,CH,X} -> research packages -> builder agents
     -> AD explorations (HTML) -> AD-outbound-findings.md -> AD-SYNTHESIS.md
```

**Status: STRONG.** All 33 EXT-AXIS-* findings are cited in formal provenance. The EXT-RESEARCH-REGISTRY.md (at provenance root level) includes AD-specific entries. Well-threaded.

### Path 3: Perceptual Audit Findings -> Fix Decisions -> Formal Provenance

```
cold-look files -> findings-{alpha,beta,spatial,etc}.md -> weaver-draft.md
     -> AUDIT-REPORT.md -> FIX-* items in AD-AUDIT-SYNTHESIS.md
     [BREAK]
     fix-report.md (per AD page) -> [NOT THREADED INTO PROVENANCE]
```

**Status: PARTIAL.** The pre-fix audit pipeline threads correctly into `AD-AUDIT-SYNTHESIS.md` (which IS in formal provenance). However:

1. **Fix execution results are NOT in provenance.** The 6 `fix-report.md` files live in `explorations/axis/_perceptual-audit/AD-*/` -- outside the provenance directory entirely. No provenance document references them.
2. **Perceptual finding IDs are informal.** PA-*, LW-*, CBB-*, MF-* IDs are used within audit reports but are NOT registered in `PIPELINE-MANIFEST.md` or any formal finding registry. Only 3 PA-* references appear in all of provenance.
3. **Ship verdicts are undocumented in provenance.** All 6 pages received verdicts (5x "SHIP WITH CONCERNS", 1x conditional "SHIP WITH CONCERNS" after fixes). These verdicts are NOT mentioned in any provenance file.

### Path 4: Skill Evolution Analysis -> Formal Provenance

```
failure-analysis.md -> od-benchmark.md -> skill-redesign.md -> team-structure.md
     -> SYNTHESIS.md -> [DEAD END -- no provenance link]
```

**Status: NOT THREADED.** Zero references to skill evolution in any provenance file. This is a ~2,500-line body of meta-knowledge about perceptual audit methodology that exists entirely outside the provenance chain. Whether this belongs in provenance is debatable (it's process knowledge, not design knowledge), but the gap should be acknowledged.

### Path 5: Build-Phase Knowledge -> Formal Provenance

```
identity-delta-{wave1A,1B,1C}.md -> identity-checkpoint-cumulative.md
     -> ACCUMULATED-IDENTITY-v2.md [IN PROVENANCE]

scribe-reports -> AD-outbound-findings.md [IN PROVENANCE]

AD-BUILD-STATE.md -> [NOT IN PROVENANCE -- execution artifact only]
```

**Status: STRONG for findings, ABSENT for process.** Identity deltas correctly flow into `ACCUMULATED-IDENTITY-v2.md`. Scribe reports correctly flow into `AD-outbound-findings.md`. But execution state tracking (AD-BUILD-STATE.md) stays in the execution scratchpad.

---

## C. OD Threading Comparison

### OD Finding Count
- **17 total OD-F findings** (OD-F-001 through OD-F-013 + OD-F-AP-001 + OD-F-MP-001 + OD-F-PR-001 + OD-F-FL-001)
- **1,353 total OD-F-* occurrences** across 171 files
- OD-F references per finding: ~80 average

### AD Finding Count
- **28 total AD-F findings** (AD-F-001 through AD-F-028)
- **608 total AD-F-* occurrences** across 65 files
- AD-F references per finding: ~22 average

### Ratio Analysis
| Metric | OD | AD | Ratio |
|--------|----|----|-------|
| Formal findings | 17 | 28 | AD has 1.6x more findings |
| Total occurrences | 1,353 | 608 | OD has 2.2x more references |
| References per finding | ~80 | ~22 | OD has 3.6x more threading per finding |
| Files referencing findings | 171 | 65 | OD spans 2.6x more files |

**Interpretation:** AD produced more findings but each one is less densely threaded through the codebase. OD's findings are referenced much more broadly because:
1. OD was re-enriched (43-agent team, 94 EXT-* findings applied), which added many cross-references
2. OD-F findings were consumed by AD (forward flow), creating additional references
3. AD has not been consumed by a successor stage yet (CD pending)
4. OD threading was explicitly remediated in a dedicated 18-agent provenance chain remediation phase

**Key gap:** OD-F findings appear in pattern files (`organizational-patterns.md`, `PATTERN-INDEX.md`), which AD-F findings do NOT yet appear in. If there is an `axis-patterns.md` or equivalent in the patterns directory, AD-F findings should be threaded there.

---

## D. Unthreaded Research

### D.1: Perceptual Audit Fix Reports (6 files)

| Item | Details |
|------|---------|
| **What it is** | 6 fix-report.md files documenting specific CSS changes, rationale, and soul compliance for post-audit fixes |
| **Where it lives** | `explorations/axis/_perceptual-audit/AD-{001-006}/fix-report.md` |
| **Why it matters** | These contain the ACTUAL changes made (width expansion 860->1100px, dead space removal, footer additions, responsive fixes). Without threading, provenance doesn't record WHAT was fixed or WHY. |
| **Where it SHOULD be** | Referenced in `AD-AUDIT-SYNTHESIS.md` Section "Fix Execution Record" or a separate `AD-FIX-REPORT.md` in `stage-4-axis-ad/` |

### D.2: Perceptual Audit Ship Verdicts

| Item | Details |
|------|---------|
| **What it is** | Final quality verdicts for all 6 AD explorations (all SHIP WITH CONCERNS) |
| **Where it lives** | `explorations/axis/_perceptual-audit/AD-*/AUDIT-REPORT.md` (opening lines) |
| **Why it matters** | These are the quality gate decisions. Provenance records the audit findings but NOT the final verdicts. |
| **Where it SHOULD be** | `AD-AUDIT-SYNTHESIS.md` should have a "Ship Verdicts" section, or `STAGE-HEADER.md` should record them |

### D.3: Skill Evolution Analysis (5 files, ~2,500 lines)

| Item | Details |
|------|---------|
| **What it is** | Post-mortem of AD audit pipeline: 7 human interventions identified, 4 agent failure modes, comparison with OD audit, complete skill redesign v3 |
| **Where it lives** | `explorations/axis/_perceptual-audit/_skill-evolution/` |
| **Why it matters** | Contains critical process knowledge: "7 human interventions costing 2-3 hours (25-30% of wall time)." Lessons directly applicable to CD. Binary gate enforcement design. Team topology redesign. |
| **Where it SHOULD be** | Not in stage-4 provenance (it's process, not design). But SHOULD be referenced in `HANDOFF-AD-TO-CD.md` as a "process lessons" pointer, or in a top-level `knowledge-architecture/PROCESS-EVOLUTION.md`. |

### D.4: R-4 Non-Applied Findings (23 of 192)

| Item | Details |
|------|---------|
| **What it is** | 23 R-4 findings that were evaluated but deliberately NOT applied during AD |
| **Where it lives** | `knowledge-architecture/_ad-execution/R-4-AD-EVALUATION.md` |
| **Why it matters** | CD needs to know which R-4 findings remain unapplied and WHY. Currently, CD would have to read the execution scratchpad to find this information. |
| **Where it SHOULD be** | `AD-RESEARCH-GATE.md` (if it exists in provenance) or a "Research Not Applied" section in `AD-SYNTHESIS.md` |

### D.5: R-2 Evaluation for AD (~7 deferred to CD)

| Item | Details |
|------|---------|
| **What it is** | 7 R-2 findings explicitly deferred to CD stage |
| **Where it lives** | `knowledge-architecture/_ad-execution/r2-ad-mapping.md` |
| **Why it matters** | CD's HANDOFF mentions R-5 as primary research but doesn't list the 7 deferred R-2 findings by ID |
| **Where it SHOULD be** | Listed in `HANDOFF-AD-TO-CD.md` under a "Deferred Research" section |

### D.6: Hygiene Audit Raw Findings (~120 raw findings across 12 hygiene files)

| Item | Details |
|------|---------|
| **What it is** | Per-page spacing and overflow audit reports from the AD hygiene audit phase |
| **Where it lives** | `knowledge-architecture/_ad-execution/hygiene-spacing-AD-*.md`, `hygiene-overflow-AD-*.md` |
| **Why it matters** | These contain the detailed per-element measurements that informed FIX-001 through FIX-032. The audit synthesis summarizes but the raw evidence lives only in execution artifacts. |
| **Where it SHOULD be** | Adequately summarized in `AD-AUDIT-SYNTHESIS.md` (currently IS there). Raw files are appropriately in scratchpad. This is ACCEPTABLE as-is. |

---

## E. R-4 Integration Assessment

R-4 (Axis Innovations) has 192 findings. AD's primary research. Sampling 15 specific R-4 IDs to check threading:

| R-4 ID | In Explorations? | In AD-outbound-findings? | In Execution Artifacts? | Threading Quality |
|--------|-------------------|-------------------------|------------------------|-------------------|
| R4-010 | YES (AD-002, AD-006) | NO | YES (research packages, findings-builder-F) | MEDIUM -- in product, not in formal provenance |
| R4-030 | NO | NO | YES (research-package-ad-003, R-4-AD-EVALUATION) | LOW -- only in internal docs |
| R4-038 | YES (5 explorations) | YES | YES | STRONG |
| R4-042 | YES (5 explorations) | YES | YES (8 execution files) | STRONG |
| R4-048 | YES (3 explorations) | YES | YES | STRONG |
| R4-055 | YES (5 explorations) | YES | YES (10 execution files) | STRONG |
| R4-059 | YES (multiple) | YES | YES | STRONG |
| R4-062 | YES (multiple) | YES | YES | STRONG |
| R4-080 | YES (multiple) | YES | YES | STRONG |
| R4-083 | YES (AD-001, AD-006) | YES | YES (6 execution files) | STRONG |
| R4-095 | YES (multiple) | YES | YES | STRONG |
| R4-100 | NO | NO | YES (research-package-ad-003, R-4-AD-EVALUATION) | LOW -- only in internal docs |
| R4-120 | YES (AD-005) | NO | YES (findings-builder-E, research package) | MEDIUM -- in product, not formal provenance |
| R4-150 | YES (AD-004) | NO | YES (research packages) | MEDIUM -- in product, not formal provenance |
| R4-190 | NO | NO | YES (research-package-ad-006, research-auditor-report, RESEARCH-ACTIVE) | LOW -- only in internal docs |

### Summary

| Threading Level | Count | Percentage |
|----------------|-------|------------|
| STRONG (in explorations + formal provenance + execution) | 9/15 | 60% |
| MEDIUM (in explorations + execution, NOT in formal provenance) | 3/15 | 20% |
| LOW (only in execution artifacts, not in explorations or provenance) | 3/15 | 20% |

**Extrapolation:** Of 192 R-4 findings, ~169 were cited in explorations (per AD-SYNTHESIS.md). Of those 169, only a subset (~20-30) are explicitly cited in formal provenance files (AD-outbound-findings.md, AD-SYNTHESIS.md). The remaining ~140 are threaded into the HTML exploration files but NOT into the formal provenance chain. This is architecturally acceptable -- the explorations ARE the product and contain the research citations inline -- but it means formal provenance gives a summary view, not exhaustive traceability.

The 23 uncited R-4 findings exist only in `R-4-AD-EVALUATION.md` (execution scratchpad). Their disposition (why skipped) is documented there but not visible from formal provenance.

---

## F. Summary Assessment

### What Threads Well (GREEN)
1. **AD-F findings -> formal provenance:** All 28 findings fully threaded into AD-outbound-findings.md, AD-SYNTHESIS.md, HANDOFF-AD-TO-CD.md
2. **EXT-AXIS-* bespoke research -> provenance:** All 33 findings cited in formal chain
3. **Identity deltas -> ACCUMULATED-IDENTITY-v2.md:** Clean flow from execution to provenance
4. **R-4 high-impact findings -> provenance:** The ~20-30 most significant R-4 findings appear in formal provenance with citations
5. **Audit findings -> AD-AUDIT-SYNTHESIS.md:** 47 de-duplicated findings documented in provenance

### What Partially Threads (YELLOW)
1. **R-4 medium-impact findings:** ~140 R-4 findings are in exploration HTML but NOT in formal provenance (acceptable -- HTML IS the product)
2. **Perceptual audit findings:** PA-* IDs exist in audit reports but are informal, not registered in PIPELINE-MANIFEST
3. **Fix execution -> provenance:** AD-AUDIT-SYNTHESIS.md lists what SHOULD be fixed (FIX-001 through FIX-032) but does not document what WAS fixed

### What Does NOT Thread (RED)
1. **Skill evolution analysis:** 2,500 lines of process knowledge completely absent from provenance
2. **Perceptual audit fix reports:** 6 files with actual fix details not referenced from provenance
3. **Ship verdicts:** Quality gate decisions not recorded in provenance
4. **R-4 non-applied findings:** 23 deliberately skipped findings documented only in execution scratchpad
5. **R-2 deferred findings:** 7 findings deferred to CD not listed by ID in HANDOFF

### Threading Density: OD vs AD
- OD: ~80 references per finding across 171 files
- AD: ~22 references per finding across 65 files
- AD's per-finding threading is **3.6x thinner** than OD's
- Primary cause: OD received a dedicated 18-agent provenance remediation phase; AD did not
- Secondary cause: OD findings have been consumed by AD (forward flow adds references); AD findings not yet consumed by CD

### Bottom Line
AD's research threading is **functionally adequate but structurally thinner than OD**. The core chain (R-4 -> explorations -> AD-F findings -> provenance) is intact. The gaps are at the edges: fix execution records, ship verdicts, process evolution knowledge, and deferred research. None of these gaps would block CD from starting, but they create invisible knowledge that a future agent would have to discover by reading execution scratchpad files rather than following the provenance chain.

---

*Research threading assessment complete. 2026-02-11.*
