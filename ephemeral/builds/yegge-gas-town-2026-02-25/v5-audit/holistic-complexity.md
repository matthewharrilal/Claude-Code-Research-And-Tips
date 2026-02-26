# Holistic Pipeline Complexity Assessment

**Date:** 2026-02-26
**Scope:** Complete Pipeline v3/v4/v5 system as deployed in `ephemeral/va-extraction/`
**Method:** Full file inventory, line counts, cross-reference analysis, pre/post v5 comparison
**Verdict:** Pipeline is FUNCTIONAL but OVERWEIGHT. v5 increased complexity modestly (+25.7%) while adding genuine value. The real problem is accumulated v3/v4 debt, not v5 specifically.

---

## 1. TOTAL FILE COUNT

### Operational Files (26 files, 14,026 lines)

These files are actively used during a pipeline run:

| File | Lines | Role | Fragility (1-5) |
|------|-------|------|-----------------|
| gate-runner-core.js | 2,808 | Programmatic gate checks (Playwright JS) | 4 |
| MANIFEST.md | 1,388 | Master routing + execution spec | 5 |
| artifact-routing.md | 1,056 | Agent-file routing decisions | 3 |
| check-consistency.js | 839 | Cross-file reference verifier | 2 |
| artifact-builder-recipe-compose.md | 833 | Pass A builder recipe (D-01 to D-05) | 3 |
| artifact-builder-recipe.md | 827 | Base recipe shared by both passes | 3 |
| artifact-orchestrator.md | 744 | Step-by-step orchestrator protocol | 5 |
| pipeline-structural-manifest.md | 679 | Structural health checks (STALE) | 1 |
| verify-pipeline-structure.js | 605 | Automated structure verifier | 2 |
| artifact-identity-perception.md | 556 | Soul constraints + perception thresholds | 3 |
| pa-weaver.md | 468 | Weaver verdict protocol | 3 |
| pa-deployment.md | 442 | PA auditor deployment spec | 3 |
| pa-questions.md | 431 | 69 PA question definitions | 2 |
| gate-manifest.json | 343 | Gate table of contents + tiers | 4 |
| gate-runner-spec.md | 299 | Human-readable gate specs | 2 |
| artifact-builder-recipe-polish.md | 284 | Pass B builder recipe (D-06 to D-09) | 3 |
| artifact-value-tables.md | 262 | CSS value reference tables | 2 |
| artifact-tc-brief-template.md | 235 | TC Brief template for assembler | 3 |
| EXECUTION-TRACKER-TEMPLATE.md | 199 | Per-run state tracker | 2 |
| artifact-worked-examples.md | 182 | Historical PA-05 calibration | 1 |
| gate-runner-provenance.md | 151 | Gate history + change log | 1 |
| pa-guardrails.md | 113 | PA auditor constraints | 2 |
| pa-manifest.md | 89 | Per-run PA tracking template | 1 |
| gate-runner-preconditions.md | 83 | Pre-build checks | 2 |
| pa-guardrails-weaver.md | 59 | Weaver-specific guardrails | 2 |
| experiment-protocol.md | 51 | Next-experiment design | 1 |

### Archived/Reference Files (kept but not operationally used)

| File | Lines | Status |
|------|-------|--------|
| artifact-gate-runner-MONOLITHIC.md | 2,410 | Archived original (pre-split) |
| artifact-pa-protocol-MONOLITHIC.md | 1,141 | Archived original (pre-split) |
| artifact-gate-runner.md | 22 | Pointer to split files |
| artifact-pa-protocol.md | 22 | Pointer to split files |
| _historical/orchestrator-sections-10-16.md | 410 | Archived orchestrator sections |

### Research/Audit Files (non-operational, 17,122 lines)

38 files: extractions (d01-d25), buddy reviews, classifications, council reports, phase 7 audits. These were the raw material from the VA extraction process. They are NOT used at runtime but contain the provenance chain.

### Backup Files (pre-v5 snapshot, 6,325 lines)

10 files in `_backup-pre-implementation/`. Frozen snapshot from before v5 changes.

---

## 2. TOTAL LINE COUNT

| Category | Files | Lines | % of Total |
|----------|-------|-------|------------|
| Operational | 26 | 14,026 | 33.4% |
| Archived (monolithic + pointers + historical) | 5 | 4,005 | 9.5% |
| Research/audit | 38 | 17,122 | 40.8% |
| Backup (pre-v5) | 10 | 6,325 | 15.1% |
| Check/verify scripts (operational but meta) | (included in operational) | 1,444 | — |
| **TOTAL** | **79** | **41,478** | **100%** |

**Effective operational spec** (what an orchestrator reads/uses): **14,026 lines across 26 files.**

---

## 3. AGENT COUNT

### Per Pipeline Run (v5 design)

| Phase | Agents | Model | Notes |
|-------|--------|-------|-------|
| Phase 0: Content Analysis | 1 (Content Analyst) | Opus | |
| Phase 1: Brief Assembly | 1 (Brief Assembler) | Opus | |
| Phase 2A: Pass A Build | 1 (Pass A Builder) | Opus | NEW in v5 (was single builder) |
| Phase 2A-gate: Structural Check | 0 (orchestrator runs gates) | N/A | |
| Phase 2B: Pass B Build | 1 (Pass B Builder, DIFFERENT Opus) | Opus | NEW in v5 (was single builder) |
| Phase 3A: Screenshots | 0 (orchestrator captures) | N/A | |
| Phase 3B: Gate Runner | 0 (orchestrator runs JS) | N/A | |
| Phase 3B: PA Audit | 9 (Auditors A-I) + 1 (Integrative) + 1 (Weaver) | All Opus | |
| Observer | 1 | Opus | NEW in v5 |
| **TOTAL Pass 0** | **16** | | |
| IMPROVE pass (standard) | +1 builder + 9 PA + 1 integrative + 1 weaver | 12 more | IMPROVE is the STANDARD path |
| **TOTAL 2-pass run** | **~28** | | |

### Pre-v5 Agent Count

| Phase | Agents |
|-------|--------|
| Phase 0 + 1 | 2 |
| Phase 2 (single builder) | 1 |
| Phase 3 (gates + 9 PA + integrative + weaver) | 11 |
| IMPROVE cycle | +1 builder + 11 PA |
| **TOTAL 2-pass run** | **~26** |

**v5 NET CHANGE: +2 agents per run** (added Pass B Builder + Observer, no other agent changes). This is a MODEST increase.

---

## 4. GATE COUNT

### Current State: The Gate Count is Self-Contradictory

| Source | Count Claimed |
|--------|--------------|
| gate-manifest.json `_canonical` string | **56** (21 REQ + 14 REC + 10 ADV + 2 DIAG + 8 BV + 1 UTIL) |
| gate-manifest.json tier sums | **58** (21 + 14 + 10 + 8 + 2 + 3 iteration) |
| gate-manifest.json unique gate IDs | **57** (GR-78 appears in both recommended AND iteration) |
| gate-runner-core.js unique GR/BV IDs | **58** (includes GR-05a, GR-12, GR-16 not in manifest) |
| MANIFEST.md (throughout) | **54** (stale from before D2 crack gates) |
| pipeline-structural-manifest.md | **42** (marked STALE but still present) |

**FINDING: There are at least 4 different gate counts circulating. The canonical source (gate-manifest.json) contradicts ITSELF (_canonical says 56, tiers sum to 58). MANIFEST.md says 54. No single number is authoritative.**

### Gate Usefulness Assessment

| Tier | Count | Genuinely Useful | Ceremonial/Low-Value |
|------|-------|-----------------|---------------------|
| REQUIRED | 21 | 18 (~86%) | 3 (GR-48 coverage meta-gate, GR-61/62 DPR/screenshot quality are pre-conditions not quality gates) |
| RECOMMENDED | 14 | 8 (~57%) | 6 (GR-78/80/82/83 are iteration-tracking mechanics, GR-07/GR-17 overlap with REQUIRED) |
| ADVISORY | 10 | 3 (~30%) | 7 (informational only, never affect verdict) |
| BV (Brief Verification) | 8 | 6 (~75%) | 2 (BV-07/08 are edge cases rarely triggered) |
| DIAGNOSTIC | 2 | 0 (0%) | 2 (report mode indicator only) |

**FINDING: Of ~58 gates, roughly 35 are genuinely useful (60%). The remaining ~23 (40%) are ceremonial, meta-tracking, edge-case, or informational-only gates that add cognitive load without preventing real defects.**

---

## 5. INFORMATION FLOW MAP

```
                    RAW CONTENT MARKDOWN
                           |
                    [Content Analyst]  <-- artifact-routing.md
                           |
                      Content Map
                           |
                    [Brief Assembler]  <-- tc-brief-template.md
                           |                identity-perception.md
                      Execution Brief       value-tables.md
                           |
              +-----------+----------+
              |                      |
       [Pass A Builder]        (waits)
       <-- recipe.md               |
       <-- recipe-compose.md       |
       <-- tokens.css              |
       <-- components.css          |
       <-- mechanism-catalog.md    |
              |                    |
         Pass A HTML               |
              |                    |
       [Structural Gate Check]     |
              |                    |
       [Pass B Builder]  <---------+
       <-- recipe-polish.md
       <-- same ref files
              |
         Pass B HTML (FINAL ARTIFACT)
              |
    +---------+---------+
    |                   |
[Gate Runner JS]   [Screenshots]
    |                   |
Gate Results    9x [PA Auditors] <-- pa-questions.md
    |                   |           pa-guardrails.md
    |           9 Auditor Reports
    |                   |
    |          [Integrative Auditor]
    |                   |
    |           Integrative Report
    |                   |
    +--------> [Weaver] <-- pa-weaver.md
                  |
        VERDICT: SHIP / SHIP WITH FIXES / REFINE / REBUILD
                  |
           (if REFINE)
                  |
         [IMPROVE Builder]  --> RETURN TO GATE RUNNER + PA
```

**Key observation:** The pipeline is fundamentally a STRAIGHT LINE with one LOOP (REFINE). The 26-file spec complexity is wildly disproportionate to this simple topology.

---

## 6. REDUNDANCY

### Information Duplicated Across Files

| Information | Files Where Duplicated | Consistency |
|-------------|----------------------|-------------|
| Soul Constraints (SC-01 to SC-10) | 20 files mention | MOSTLY CONSISTENT but some research files have older versions |
| Container width 940-960px | 28 files mention | CONSISTENT |
| Gate count | 6+ files | INCONSISTENT (42/54/56/58 — see Section 4) |
| Agent count (17 per pass) | MANIFEST + orchestrator + routing | CONSISTENT (v5 added observer, manifest says 17) |
| Pass structure | MANIFEST + orchestrator + recipe | CONSISTENT |
| PA-05 scoring rubric | pa-weaver.md + MANIFEST + worked-examples | CONSISTENT |
| Disposition D-01 to D-09 definitions | recipe + routing + identity | CONSISTENT |
| Perception thresholds (15 RGB, 120px gap, etc.) | identity + recipe + gate-runner-spec + MANIFEST | CONSISTENT |

**FINDING: Gate count is the primary inconsistency vector. Everything else is reasonably aligned because the council verdict process enforced consistency on the core specs. Research/audit files retain stale counts but are not operationally referenced.**

### Specific Redundancy Hotspots

1. **MANIFEST.md (1,388 lines) duplicates ~60% of artifact-orchestrator.md (744 lines).** Both describe the phase-by-phase execution flow. MANIFEST is more detailed but the orchestrator is the actual execution authority. An orchestrator agent reading both will get contradictory framings.

2. **Recipe split (recipe.md 827 + compose.md 833 + polish.md 284 = 1,944 lines)** contains significant overlap. The base recipe (827 lines) has content that is superseded by the compose/polish splits. The base file should have been reduced when the splits were created.

3. **Gate documentation exists in 5 places:** gate-manifest.json (canonical IDs), gate-runner-core.js (code), gate-runner-spec.md (human specs), gate-runner-provenance.md (history), MANIFEST.md (routing description). Any gate addition requires 5-file edits.

---

## 7. FRAGILITY INDEX

Rating: 1 (stable, rarely referenced) to 5 (critical, heavily cross-referenced, any stale reference breaks flow)

| Rating | Files | Risk |
|--------|-------|------|
| **5** | MANIFEST.md, artifact-orchestrator.md | Every other file references these. Gate count staleness already present. Any structural change requires cascading updates. |
| **4** | gate-runner-core.js, gate-manifest.json | Gate count is the #1 inconsistency. Adding a gate requires 5 file edits. Forgetting one = discrepancy. |
| **3** | artifact-builder-recipe.md, recipe-compose.md, recipe-polish.md, artifact-routing.md, identity-perception.md, tc-brief-template.md, pa-weaver.md, pa-deployment.md | Moderate cross-referencing. Changes are localized but must match MANIFEST. |
| **2** | pa-questions.md, gate-runner-spec.md, value-tables.md, pa-guardrails.md, verify-pipeline-structure.js, check-consistency.js, EXECUTION-TRACKER-TEMPLATE.md | Mostly self-contained. Changes rarely cascade. |
| **1** | experiment-protocol.md, pa-manifest.md, pa-guardrails-weaver.md, gate-runner-preconditions.md, gate-runner-provenance.md, worked-examples.md, pipeline-structural-manifest.md | Reference material. Can be wrong without breaking anything. |

**FINDING: pipeline-structural-manifest.md is already STALE (says 42 gates, reality is 56-58). It has a staleness warning header but the body is uncorrected. This validates the fragility concern — even meta-verification files go stale.**

---

## 8. META-TO-OUTPUT RATIO

### Calculation

| Measure | Lines |
|---------|-------|
| Pipeline specification (operational files) | 14,026 |
| Actual HTML output (Yegge Gas Town) | 2,931 |
| **Spec-to-output ratio** | **4.8:1** |

| Measure | Lines |
|---------|-------|
| Total va-extraction directory | 41,478 |
| Actual HTML output | 2,931 |
| **Full repo-to-output ratio** | **14.1:1** |

| Measure | Lines |
|---------|-------|
| Build-run artifacts (content map + brief + PA reports + gate results + tracker) | 7,078 |
| Actual HTML output | 2,931 |
| **Per-run artifact-to-output ratio** | **2.4:1** |

### Context

The MEMORY.md threshold is "if meta-output exceeds 20:1, pipeline is feeding on itself." At 4.8:1 for operational spec, the pipeline is within bounds. At 14.1:1 including research, it is approaching concern.

However, these ratios hide a crucial fact: **2,808 of the 14,026 operational lines (20%) are gate-runner-core.js** — executable JavaScript, not spec text. The actual spec-text-to-output ratio is:

- (14,026 - 2,808 - 839 - 605) / 2,931 = **9,774 / 2,931 = 3.3:1** (excluding all JS/automation)

**FINDING: The meta-to-output ratio is reasonable at 3.3:1 for spec text. The total feels bloated because of accumulated research files (17,122 lines) and backups (6,325 lines) that are never operationally used.**

---

## 9. COGNITIVE LOAD

**Could a skilled engineer understand and run this in one sitting?**

**NO.** Here is why:

1. **No single entry point.** A new operator must read MANIFEST.md (1,388 lines) first, then cross-reference with artifact-orchestrator.md (744 lines), then understand which of 26 files to read for each phase. The Quickstart is good (47 lines) but immediately references 6 other files.

2. **26 files is too many to hold in working memory.** A human can track ~7 items. Even excluding non-operational files, the 26 operational files exceed cognitive load by 3.7x.

3. **Gate count confusion would block any new operator.** They would read 42 in one place, 54 in another, 56 in a third, 58 in the code. Which is right? Time wasted resolving this: 30-60 minutes.

4. **The recipe split (3 files, 1,944 lines) is hard to navigate.** Which recipe goes to which builder? The base recipe has content that overlaps with compose/polish. A new operator would not know what to skip.

5. **ESTIMATED RAMP-UP TIME:** 3-4 hours to read all operational files. 6-8 hours to understand them well enough to run the pipeline. 2-3 runs to develop intuition for the IMPROVE loop and verdict interpretation.

**Mitigation:** The Quickstart section in MANIFEST.md (steps 0-11) is well-designed and could serve as a standalone operator guide IF the cross-references were replaced with inline summaries.

---

## 10. SIMPLIFICATION OPPORTUNITIES

### Zero Quality Impact (SAFE TO DO NOW)

| Action | Lines Saved | Risk |
|--------|------------|------|
| **Delete pipeline-structural-manifest.md** (679 lines, already STALE, replaced by check-consistency.js) | 679 | Zero — file is marked stale and unused |
| **Delete research/audit files** (38 files, 17,122 lines — provenance is in gate-runner-provenance.md already) | 17,122 | Zero — these are extraction artifacts, not runtime |
| **Delete backup files** (10 files, 6,325 lines — git history preserves pre-v5 state) | 6,325 | Zero — git has the history |
| **Delete monolithic archives** (2 files, 3,551 lines — originals before split, preserved in git) | 3,551 | Zero — pointer files already document the split |
| **Delete pointer files** (2 files, 44 lines — they point to files that exist alongside them) | 44 | Zero — navigational waste |
| **Delete _historical directory** (1 file, 410 lines — archived orchestrator sections) | 410 | Zero — in git history |
| **TOTAL SAFE DELETION** | **28,131** | **68% of all lines** |

After safe deletion: **79 files -> 26 files, 41,478 lines -> 13,347 lines.**

### Moderate Risk (WOULD IMPROVE BUT NEEDS CARE)

| Action | Lines Saved | Risk |
|--------|------------|------|
| **Merge MANIFEST.md + artifact-orchestrator.md** into one file | ~400 (overlap removal) | MEDIUM — they have different authorities but overlap heavily |
| **Reduce base recipe** (827 lines) by removing content superseded by compose/polish splits | ~300 | MEDIUM — need to verify no pass-through references |
| **Consolidate gate docs** (manifest.json + spec.md + provenance.md -> one file) | ~200 | MEDIUM — violates split architecture intent but reduces 5-file-edit problem |
| **Remove advisory gates** (10 gates, informational only, never affect verdict) | ~200 in JS | LOW — they compute but don't matter |
| **Remove diagnostic gates** (2 gates, mode indicator only) | ~40 in JS | LOW — unused in practice |

### Would Require Redesign

| Action | Impact | Why Not Easy |
|--------|--------|--------------|
| Single-file pipeline spec (~2,000 lines total) | Eliminates 26-file problem | Would require complete rewrite, loss of information isolation |
| Reduce to ~30 gates (REQUIRED + useful RECOMMENDED only) | Faster gate runs, simpler debugging | Need to verify each cut gate has no downstream dependency |
| Single-pass builder (remove Pass A/B split) | Simpler, fewer agents | v5's core value proposition — untested whether it helps |

---

## 11. THE "IS IT WORTH IT?" QUESTION

### Build History (N=6)

| Build | Pipeline | PA-05 | Agents | Notes |
|-------|----------|-------|--------|-------|
| Phase D variants | Pre-v3 | 1.5-2.0 | ~8 | Baseline |
| Middle Experiment | v2 recipe | 4.0/4 | ~8 | 100-line recipe, flat topology |
| Flagship Experiment | Master prompt | 1.5/4 | ~19 | 963-line spec, FAILED |
| CD-006 | Ad-hoc Opus | ~4.8/5 (CEILING) | ~6 | No formal pipeline |
| Flagship Remediation | Remediation spec | 2.5/4 | ~16 | CSS-only fixes |
| Yegge Gas Town | v3/v4 | 3.5/4 | ~40 | 2-pass convergence |

### Analysis

The **Middle Experiment** achieved PA-05 4.0/4 with a 100-line recipe and 8 agents. The **Yegge Gas Town** build achieved PA-05 3.5/4 with 14,026 lines of spec and ~40 agents.

**The 140x more specification produced LOWER quality (3.5 < 4.0).**

However, the Middle Experiment was N=1 on curated content. Yegge Gas Town was on real content with a reproducible pipeline. The comparison is confounded by content, model, and team topology variables.

### What Would a 10x Simpler Pipeline Sacrifice?

A pipeline with ~1,400 lines (10x reduction) would need:
- 1 recipe file (~400 lines, merged compose+polish)
- 1 orchestrator file (~300 lines, quickstart only)
- 1 gate runner (~500 lines, REQUIRED gates only)
- 1 PA protocol (~200 lines, questions + deployment)

**What you LOSE:**
- Formal provenance (who decided what, when, why)
- Brief verification gates (BV-01 to BV-08) — catches bad briefs before expensive builder runs
- Advisory/recommended gate data — useful for trend analysis across builds
- Observer agent — compliance verification
- Detailed routing spec — agents get wrong files sometimes
- Worked examples — calibration data for the weaver

**What you KEEP:**
- Core quality: soul constraints, perception thresholds, builder recipe
- Essential gates: identity, perception, structural checks
- PA audit: 9 auditors + weaver (the pipeline's actual value)
- Two-pass convergence (if v5 proves valuable)

**VERDICT: A 10x simpler pipeline is VIABLE and would likely produce PA-05 3.0-3.5/4 — essentially the same range as the current pipeline.** The marginal value of the extra 12,600 lines is primarily in REPRODUCIBILITY and DEBUGGABILITY, not output quality. Whether that infrastructure is worth it depends on how many builds you plan to run. At N=6 builds to date, the infrastructure investment is not yet justified by output quality gains.

### Break-Even Analysis

- Pipeline infrastructure cost: ~200+ agent-hours across all versions
- Per-build time: ~3 hours (including IMPROVE pass)
- Quality gained from infrastructure vs ad-hoc: ~0 to +0.5 PA-05 points (statistically indistinguishable at N=6)
- **Break-even point:** If infrastructure prevents 1 REBUILD per 5 builds (saving ~2 hours each), break-even is at ~500 builds. This pipeline will never run 500 times.
- **Realistic justification:** The pipeline's value is as a RESEARCH ARTIFACT documenting what works. It is a knowledge base with an executable interface, not an optimized production system.

---

## 12. NET COMPLEXITY CHANGE (v5 specifically)

### Pre-v5 vs Post-v5 (files that existed in backup)

| File | Pre-v5 | Post-v5 | Delta | % Change |
|------|--------|---------|-------|----------|
| MANIFEST.md | 1,192 | 1,388 | +196 | +16.4% |
| artifact-orchestrator.md | 1,058 | 744 | **-314** | **-29.7%** |
| artifact-builder-recipe.md | 934 | 827 | -107 | -11.5% |
| gate-runner-core.js | 1,436 | 2,808 | +1,372 | +95.6% |
| gate-manifest.json | 159 | 343 | +184 | +115.7% |
| gate-runner-spec.md | 188 | 299 | +111 | +59.0% |
| pa-deployment.md | 237 | 442 | +205 | +86.5% |
| pa-questions.md | 418 | 431 | +13 | +3.1% |
| pa-weaver.md | 376 | 468 | +92 | +24.5% |
| EXECUTION-TRACKER-TEMPLATE.md | 327 | 199 | **-128** | **-39.1%** |
| **Subtotal (matched files)** | **6,325** | **7,949** | **+1,624** | **+25.7%** |

### New Files Added by v5 (or concurrent v4/v5 work)

| File | Lines | Why Added |
|------|-------|-----------|
| artifact-builder-recipe-compose.md | 833 | v5: Pass A recipe (D-01 to D-05) |
| artifact-builder-recipe-polish.md | 284 | v5: Pass B recipe (D-06 to D-09) |
| check-consistency.js | 839 | v5: D6 automated consistency checker |
| pa-guardrails.md | 113 | v3.1: Split from monolithic |
| pa-guardrails-weaver.md | 59 | v3.1: Weaver-specific guardrails |
| pa-manifest.md | 89 | v3.1: Per-run PA tracking |
| gate-runner-preconditions.md | 83 | v3.1: Split from monolithic |
| gate-runner-provenance.md | 151 | v3.1: Split from monolithic |
| pipeline-structural-manifest.md | 679 | v3.1: Structural health checks (NOW STALE) |
| verify-pipeline-structure.js | 605 | v3.1: Automated verifier |
| experiment-protocol.md | 51 | v3.1: Next experiment design |
| **Total new files** | **3,786** | |

### Net Complexity Budget

| Category | Lines |
|----------|-------|
| Matched files delta | +1,624 |
| New files added | +3,786 |
| Files deleted | 0 |
| **NET CHANGE** | **+5,410 lines (+85.6% of pre-v5 baseline)** |

**But wait.** Of the +5,410 new lines:
- 839 lines are check-consistency.js (automation, not spec)
- 605 lines are verify-pipeline-structure.js (automation, not spec)
- 679 lines are pipeline-structural-manifest.md (STALE, should be deleted)
- 151 lines are gate-runner-provenance.md (history, not spec)

**Spec-only net change:** +5,410 - 839 - 605 - 679 - 151 = **+3,136 lines of actual specification growth.**

### What v5 Actually Added (Operational Impact)

| v5 Feature | Lines Added | Operational Value |
|------------|------------|-------------------|
| Two-pass builder architecture (Pass A/B recipes + orchestrator changes) | ~1,400 | HIGH — addresses continuation bias, untested at scale |
| Observer agent protocol | ~200 | MEDIUM — 30 binary compliance checks, could catch drift |
| Brief-diff gate (BV-08) + narration protocol | ~300 | MEDIUM — catches compression loss, adds builder traceability |
| Consistency checker (check-consistency.js) | 839 | HIGH — automates the manual cross-reference problem |
| Convergence reframe (ideology changes) | ~400 | MEDIUM — reframes IMPROVE as standard path, better mental model |
| New gates (GR-78 to GR-83, BV-08) | ~1,372 (in JS) | MIXED — some useful (GR-83 narration), some ceremony (GR-82 finding status) |
| Execution tracker simplification | -128 | HIGH — 58 fields vs 375 (84.5% reduction) |

### v5 Verdict

**v5 INCREASED total complexity by +5,410 lines (+85.6%)** but:
1. It reduced the orchestrator (-314 lines, 29.7% smaller)
2. It reduced the execution tracker (-128 lines, 39.1% smaller)
3. It added genuine automation (1,444 lines of JS that replace manual checks)
4. The spec-growth (+3,136 lines) is dominated by the Pass A/B recipe split (1,117 lines) and new gates

**Net assessment: v5 added MODERATE complexity for UNCERTAIN value.** The two-pass architecture and observer are untested. The consistency checker and convergence reframe are genuinely valuable. The new gates are a mix. Overall, v5 is a +25.7% increase on matched files, or +85.6% including new files — a significant but not alarming growth.

---

## EXECUTIVE SUMMARY

### The Numbers

- **26 operational files, 14,026 lines** (26 of which are spec, rest is JS automation)
- **58 gates** (but 4 different counts circulate; 40% are ceremonial)
- **~28 agents per 2-pass run** (+2 from pre-v5)
- **4.8:1 spec-to-output ratio** (reasonable; 3.3:1 excluding automation)
- **Not comprehensible in one sitting** (3-4 hour ramp-up minimum)
- **68% of all lines (28,131) can be safely deleted** (research, backups, archives, stale files)

### The Diagnosis

The pipeline is an **overbuilt research prototype masquerading as a production system.** Its core value — the PA audit with 9 parallel Opus auditors — requires about 1,500 lines of spec. The other 12,500 lines serve provenance, reproducibility, and process documentation. These are valuable for research but are dead weight for execution.

The **gate count inconsistency** (42/54/56/58) is the canary in the coal mine. When your verification infrastructure cannot accurately count its own components, the infrastructure has exceeded the maintainability threshold.

### Recommended Actions (Priority Order)

1. **Delete 28,131 lines of non-operational files** (research, backups, archives, stale manifest). Immediately. Zero risk.
2. **Fix gate count inconsistency.** Pick one number, update all files. The canonical source (gate-manifest.json) should be THE authority AND internally consistent.
3. **Merge MANIFEST.md + artifact-orchestrator.md** into one file. Two execution authorities is one too many.
4. **Reduce recipe to 2 files** (compose + polish), eliminating the base recipe overlap.
5. **Remove advisory + diagnostic gates** (12 gates) that never affect verdicts.
6. **After these changes:** 15 files, ~8,000 lines, ~46 gates. Cognitively manageable.

### The Uncomfortable Truth

The Middle Experiment (100-line recipe, 8 agents, PA-05 4.0/4) outperformed the Yegge Gas Town build (14,026-line pipeline, ~40 agents, PA-05 3.5/4). The pipeline's infrastructure has not yet demonstrated a quality improvement over a simple recipe + good builder. It may never. The pipeline's true value is as a learning artifact — it documents everything that matters about building HTML pages with LLMs. Whether to continue investing in it should be driven by the research value, not the production value.
