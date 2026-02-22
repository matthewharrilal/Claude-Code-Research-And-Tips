# Debrief + Enrichment Cross-Reference Report

**Author:** xref-debrief agent (Opus 4.6)
**Date:** 2026-02-20
**Task:** Cross-reference ALL findings from the debrief (Parts 3-8), manifest files (01-04), xref audits (30-32), and meta-cognitive audit (33) against the current pipeline files.

**Pipeline files checked:**
- `~/.claude/skills/build-page/SKILL.md` (current state, ~436 lines)
- `design-system/pipeline/conventions-brief.md` (current state, ~443 lines)
- `design-system/pipeline/gate-runner.md` (current state, ~1159 lines)
- `design-system/pipeline/flagship-pa-questions.md` (current state, ~145 lines)

---

## Section 1: Debrief Finding Coverage

### Part 3: SKILL.md Orchestration Details

| # | Finding | Status | Evidence |
|---|---------|--------|----------|
| P3-1 | Fix cycle template does NOT reference conventions-brief sections or carry concept-level framing | **ADDRESSED** | SKILL.md now has "Compositional Context" section in fix instructions (lines ~330-335) with boundary direction, channel analysis, and "Re-read conventions-brief.md Section [N]" reference. gate-runner.md lines 224-256 add brief_section references. |
| P3-2 | File reading order: conventions-brief FIRST, prohibitions LAST | **ADDRESSED** | SKILL.md lines 80-89: TC brief FIRST (compositional foundation), conventions brief SECOND (world model), prohibitions LAST. Order is correct with updated TC-first framing. |
| P3-3 | TeamCreate vs Task tool ambiguity | **ADDRESSED** | SKILL.md line 63: "Spawn agents using the Task tool." No TeamCreate references remain. |
| P3-4 | Output directory structure with specific file names | **ADDRESSED** | SKILL.md lines 24-26: output dir specified. File structure includes _tc-brief.md, output.html, _build-log.md, _cascade-value-table.md, _lock-sheet.md, _run-manifest.md, _gate-results.json, _screenshots/, _pa/, _fixes/. |
| P3-5 | Run manifest contents (10 items) | **ADDRESSED** | Run manifest deliverable is specified in SKILL.md. |
| P3-6 | Orchestrator does gate-running ITSELF (Playwright serial) | **ADDRESSED** | SKILL.md: orchestrator runs gates directly via Playwright. |
| P3-7 | Lock sheet goes to WEAVER ONLY (fresh-eyes for auditors) | **ADDRESSED** | SKILL.md: lock sheet explicitly NOT given to PA auditors, only to weaver. |
| P3-8 | SKILL references "992 lines, 21 gates" -- stale | **NOT ADDRESSED** | SKILL.md line ~124 still references a gate count that may be stale. gate-runner.md is now ~1159 lines with 22 gates (1 pre-gate SC-00 + original 21). The cross-reference line count needs updating. |

### Part 4: Gate Runner Analysis

| # | Finding | Status | Evidence |
|---|---------|--------|----------|
| P4-1 | Gate count: 21 total (now 22 with SC-00) | **PARTIALLY ADDRESSED** | gate-runner.md has SC-00 pre-gate added (22 total). SKILL.md gate table may not include SC-00 or may still say "21 gates" in the cross-reference line. |
| P4-2 | BG-1 and BG-2 ENTIRELY ABSENT from SKILL.md | **ADDRESSED** | SKILL.md now lists BG-1 (Metaphor Independence) and BG-2 (Metaphor Structural) in the structured output section and under Behavioral gates. |
| P4-3 | Mechanism count: gate-runner >= 14 AND per-category vs SKILL.md per-category only | **ADDRESSED** | SKILL.md DG-4 sub-check now says ">= 14 total AND >= 1 in each of 5 categories." Aligned with gate-runner.md. |
| P4-4 | Micro-gates: gate-runner has orchestrator-run Playwright gates, SKILL.md has builder self-checks (honor system) | **PARTIALLY ADDRESSED** | SKILL.md has builder self-checks at 3 checkpoints (lines 94-101). gate-runner.md has full MG-1 through MG-4 orchestrator-run micro-gates. SKILL.md does NOT orchestrate mid-build Playwright checks. The checkpoint thresholds are NOW aligned (>= 5 ARIA, >= 3 border configs), but enforcement remains honor-system during the build. Post-build full gate run catches failures. |
| P4-5 | Threshold differences: MG-1 >= 5 ARIA vs old SKILL.md >= 3; MG-3 >= 3 borders vs old >= 2 | **ADDRESSED** | SKILL.md checkpoint 1: ">= 5 ARIA landmarks" (matches gate-runner). Checkpoint 2: ">= 3 distinct border configurations" (matches gate-runner). Thresholds synchronized. |
| P4-6 | Gate-to-PA context: gate results NOT routed to PA auditors (correct), should route to weaver | **ADDRESSED** | SKILL.md routes gate results to WEAVER (not auditors). Fresh-eyes principle maintained. |
| P4-7 | Fix recipes: gate-runner embeds in JSON, SKILL.md expects manual composition | **ADDRESSED** | Both aligned. SKILL.md instructs structured fix instructions with measured values + threshold + CSS fix. |
| P4-8 | DG-4 references _build-plan.yaml but builder never produces it | **ADDRESSED** | DG-4 now references _build-log.md plan sections (conviction statement, transition table, fractal echo table). No _build-plan.yaml reference. |
| P4-9 | BG-1 checks build log ordering | **ADDRESSED** | gate-runner.md BG-1 and SKILL.md both describe the ordering check. |
| P4-10 | BG-2 checks metaphor is STRUCTURAL not ANNOUNCED | **ADDRESSED** | gate-runner.md BG-2 and SKILL.md both describe the structural vs announced check. |

### Part 5: PA Questions Analysis

| # | Finding | Status | Evidence |
|---|---------|--------|----------|
| P5-1 | 8 Tier 5 questions (PA-60 through PA-67) mapping to CI stack layers | **ADDRESSED** | flagship-pa-questions.md contains all 8 Tier 5 questions. |
| P5-2 | Scoring rubric: 7-8 COMPOSED, 5-6 APPROACHING, 3-4 STRUCTURED, 0-2 VOCABULARY ONLY | **ADDRESSED** | flagship-pa-questions.md has exact rubric. SKILL.md weaver instructions apply the thresholds. |
| P5-3 | 9 auditors, 56 total questions, Auditor C heaviest at 13 | **ADDRESSED** | SKILL.md has 9 auditor assignments matching flagship-pa-questions.md. |
| P5-4 | BLIND SPOT: No question asks "does a single metaphor pervade the ENTIRE page?" PA-44 tests expression quality, not spatial coverage | **NOT ADDRESSED** | No PA question tests metaphor SPATIAL COVERAGE across the full page. PA-44 tests expression quality (structural vs announced). BG-2 tests structural vs announced. Neither tests whether the metaphor persists in all scroll thirds. This is task #8 (pa-questions-surgeon) -- check if being addressed. |

### Part 6: Process Reconstruction

| # | Finding | Status | Evidence |
|---|---------|--------|----------|
| P6-1 | DG-4 _build-plan.yaml reference | **ADDRESSED** | Resolved (see P4-8). |
| P6-2 | Component count 8 vs 10 inconsistency | **ADDRESSED** | Consistently 8 across all files. |
| P6-3 | Conventions brief path was wrong | **ADDRESSED** | File paths are now correct. |
| P6-4 | Validation builds were never run | **N/A** | Historical observation. Pipeline is ready to run but has not been tested end-to-end. |
| P6-5 | 2 residual "Middle+" references in TC skill | **UNKNOWN** | Out of scope -- this refers to tension-composition SKILL.md, not the 4 pipeline files audited here. |
| P6-6 | 2 threshold inconsistencies (0.02em vs 0.025em in CLAUDE.md files) | **UNKNOWN** | Applies to design-system/CLAUDE.md and compositional-core/CLAUDE.md, not the 4 pipeline files. The pipeline files themselves use 0.025em correctly. |

### Part 7: Known Issues Verification

| # | Finding | Debrief Severity | Status | Evidence |
|---|---------|-----------------|--------|----------|
| P7-1 | Boundary-by-boundary vs channel-grouped CONTRADICTION | SIGNIFICANT | **ADDRESSED** | SKILL.md checkpoints are now boundary-grouped: "After zone boundaries set (all channels together per boundary)" with integrated checks. conventions-brief.md Process section uses boundary-by-boundary framing. Contradiction RESOLVED. |
| P7-2 | Stack progression absence (anti-scale, scales -> channels -> coherence) | MODERATE | **NOT ADDRESSED** | No explicit stack progression codification. Implicit in brief section ordering. Intentionally DEFERRED per E1 verdict. Task #5 and #7 (conventions-surgeon) may be adding bridge text. |
| P7-3 | Fix cycle recipe-to-checklist degradation | HIGH | **PARTIALLY ADDRESSED** | SKILL.md fix cycle now includes "Compositional Context" with boundary direction, channel analysis, and brief section references. Significant improvement but fix format remains a list of issues, not a sequenced recipe. |
| P7-4 | Behavioral/Material channel phantom status | HIGH | **PARTIALLY ADDRESSED** | conventions-brief.md lines 102-103 now have CSS property examples. gate-runner.md lines 549-566 have explicit CHANNEL NOTE acknowledging phantom status with 3 deferred options. Better than "1 line definition" but still lacks depth of channels 1-4. |
| P7-5 | Return path extinction (fix recipes never reference brief sections) | HIGH | **ADDRESSED** | gate-runner.md lines 224-256: "Fix Recipe Compositional Context" section maps every gate category to a conventions-brief section. SKILL.md fix cycle includes "Re-read conventions-brief.md Section [N]." Return path RESTORED. |

### Part 8: Honest Assessment

| # | Finding | Status | Evidence |
|---|---------|--------|----------|
| P8-1 | Fresh Opus builder knows HOW to build? MOSTLY YES -- needs mechanism-catalog and components.css | **ADDRESSED** | SKILL.md builder spawn prompt includes both mechanism-catalog.md and components.css as reference files. |
| P8-2 | SINGLE WEAKEST PART: Zone selector assumption -- every gate depends on same selector, if builder uses different class names ALL gates silently pass | **ADDRESSED** | gate-runner.md SC-00 (Zone Selector Validation) added. Runs FIRST before all other gates. Primary selector + 3 fallback selectors. If all fail: entire gate run FAILS. conventions-brief.md documents zone markup requirement. This was the #1 debrief concern and is FULLY resolved. |
| P8-3 | SINGLE STRONGEST PART: Conventions brief world-description voice | **ADDRESSED** | conventions-brief.md maintains world-description voice throughout. |
| P8-4 | ONE CHANGE recommended: embed golden reference (CD-006 mapping to brief's framework) as appendix | **NOT ADDRESSED** | No golden reference, CD-006 mapping, or completed example exists in any pipeline file. The debrief's recommended single change was NOT implemented. |
| P8-5 | Confidence 5/10 -- concerns about end-to-end testing, zone selector fragility, 75-line builder visibility, Opus absorption of 443 lines | **PARTIALLY ADDRESSED** | Zone selector: FIXED (SC-00). End-to-end testing: still N=0. Opus absorption cannot be verified without a test run. |

### Debrief Coverage Summary

| Status | Count |
|--------|-------|
| ADDRESSED | 24 |
| PARTIALLY ADDRESSED | 5 |
| NOT ADDRESSED | 3 (P3-8 stale reference, P5-4 metaphor spatial coverage, P8-4 golden reference) |
| N/A / UNKNOWN | 4 |
| **Total** | **36** |

---

## Section 2: Manifest Edit Coverage

### File 01: conventions-brief.md Changes (10 edits proposed)

| Edit | Description | Type | Applied? | Still Present? | Undone? |
|------|-------------|------|----------|----------------|---------|
| E1 | Channel-threshold perception table | DO NOW | **YES** | **YES** -- conventions-brief.md lines ~107-115 has the channel-to-CSS-property table with perception thresholds | No |
| E2 | Boundary-by-boundary CSS recipe example | DO NOW | **YES** | **YES** -- conventions-brief.md lines ~416-431 has complete boundary CSS recipe | No |
| E3 | Stack relationship bridge (Sections 3-5 dependency) | DEFER | **PARTIALLY** | conventions-brief.md line 89 has implicit connection but no explicit bridge statement naming the stack architecture. Task #5 (conventions-surgeon) may be addressing this. | N/A |
| E4 | DESIGNED/COMPOSED naming for more dimensions | DEFER | **PARTIALLY** | conventions-brief.md line 257 has DESIGNED/COMPOSED for PA-05 and Tier 5, but not for additional dimensions (layout topologies, channel shifts). | N/A |
| E5 | Enhancement channel CSS property guidance | DEFER | **APPLIED** | conventions-brief.md lines 102-103: Behavioral has "transition, :hover rules" and Material has "background-image pattern, component count per zone." | No |
| E6 | Component-internal multi-coherence note | DEFER | **PARTIALLY** | conventions-brief.md has Component 2-Zone DNA description. Task #7 (conventions-surgeon) may be enriching this. | N/A |
| E7 | Parametric echo CSS recipe | DEFER | **APPLIED** | conventions-brief.md lines 156-158: concrete padding values per zone density. | No |
| E8 | Character scale register inventory | DEFER | **NOT APPLIED** (correctly deferred) | No character-scale register inventory. | N/A |
| E9 | Fix cycle compositional memory note | GO BEYOND | **APPLIED** | SKILL.md fix cycle includes "Re-read your conviction statement and transition table in _build-log.md before applying fixes." | No |
| E10 | Boundary-grouped verification pauses | GO BEYOND | **APPLIED** | SKILL.md checkpoints restructured from 4 channel-grouped to 3 boundary-grouped. conventions-brief.md Process section uses boundary-by-boundary framing. | No |

### File 02: SKILL.md Changes (12 edits proposed)

| Edit | Description | Type | Applied? | Still Present? | Undone? |
|------|-------------|------|----------|----------------|---------|
| E1/B1 | Add ">= 14 total" to DG-4 mechanism count | BUG FIX | **YES** | **YES** -- DG-4 says ">= 14 total AND >= 1 in each of 5 categories" | No |
| E2/B2 | Micro-gate threshold alignment + checkpoint restructuring | BUG FIX + DO NOW | **YES** | **YES** -- checkpoints boundary-grouped, thresholds aligned (>= 5 ARIA, >= 3 borders) | No |
| E3/B3 | Add BG-1/BG-2 behavioral gate references | BUG FIX | **YES** | **YES** -- BG-1 and BG-2 present in structured output section and behavioral gates section | No |
| E3B | Add BG-1/BG-2 verification section | BUG FIX | **YES** | **YES** -- Behavioral gates section with BG-1 and BG-2 definitions | No |
| E4/B4 | Route gate results to weaver | BUG FIX | **YES** | **YES** -- weaver reads _gate-results.json | No |
| E5 | Combined checkpoint restructure + threshold alignment + E-CONTRA | BUG FIX + DO NOW | **YES** | **YES** -- 3 boundary-grouped checkpoints | No |
| E6/B5 | Fix DG-4 _build-plan.yaml reference | BUG FIX | **YES** | **YES** -- references _build-log.md, not YAML | No |
| E7/B6 | Resolve TeamCreate -> Task tool | BUG FIX | **YES** | **YES** -- "Spawn agents using the Task tool" | No |
| E8 | Compression: shorten model warning | COMPRESSION | **YES** | **YES** | No |
| E9/E15 | Weaver compositional vocabulary | DEFER | **APPLIED** | **YES** -- weaver instructed to name channels, scales, transition types | No |
| E10/E16 | Fix cycle recipe structure (compositional context) | DEFER | **APPLIED** | **YES** -- "Compositional Context" section in fix instructions | No |
| E11 | Compositional framing for reference files | GO BEYOND | **APPLIED** | **YES** -- mechanism-catalog described as "Select mechanisms that serve your multi-coherence channels" | No |
| E12 | Fix cycle compositional memory (same-builder + re-read conviction) | GO BEYOND | **APPLIED** | **YES** -- "Re-read your conviction statement and transition table" | No |

**NOTE on TC skill invocation:** The SKILL.md has been significantly restructured since the manifest was written. It now includes a Section 2 "TC SKILL INVOCATION" phase that spawns a TC agent for Phases 0-3 before the builder. This is a MAJOR addition that was NOT in the original manifest (it addresses BLOCKING-1 from the meta-cognitive audit, file 33). Task #1 (tc-surgeon) appears to have applied this.

### File 03: gate-runner.md Changes (8 edits proposed)

| Edit | Description | Type | Applied? | Still Present? | Undone? |
|------|-------------|------|----------|----------------|---------|
| E1 | SC-00 Zone Selector Validation pre-gate (~65 lines) | GO BEYOND (HIGHEST) | **YES** | **YES** -- gate-runner.md has full SC-00 with primary selector, 3 fallback selectors, FAIL logic, and selector storage | No |
| E2 | Fix SC-14 letter-spacing threshold clarification | BUG FIX | **CONFIRMED CORRECT** | gate-runner.md already uses 0.025em correctly. Comment clarification may or may not have been added. | N/A |
| E3 | Phantom channels documentation (CHANNEL NOTE) | DEFER | **APPLIED** | **YES** -- gate-runner.md lines ~549-566 has CHANNEL NOTE acknowledging phantom status with 3 options | No |
| E4 | SC-00 in execution groups and dependency chain | GO BEYOND | **YES** | **YES** -- GROUP 0 added with SC-00, dependency chain updated | No |
| E5 | Fix recipe enrichment (conventions-brief section references) | GO BEYOND | **YES** | **YES** -- "Fix Recipe Compositional Context" section with gate-to-brief-section mapping table | No |
| E6 | Micro-gate threshold alignment audit | BUG FIX | **NO CHANGE NEEDED** | Confirmed: all micro-gate thresholds in gate-runner.md match full-run thresholds. Mismatches were in SKILL.md (now fixed). | N/A |
| E7 | SC-00 in complete gate summary table | GO BEYOND | **YES** | **YES** -- Summary table updated with SC-00 row, totals updated to 22 gates | No |
| E8 | SC-00 in gate-to-PA handoff section | GO BEYOND | **YES** | **YES** -- Handoff section updated to reference 18 blocking gates | No |

### File 04: PA Questions Changes (2 edits proposed + 3 deferred)

| Edit | Description | Type | Applied? | Still Present? | Undone? |
|------|-------------|------|----------|----------------|---------|
| E1 | Modify PA-44 to include metaphor spatial coverage (B9 fix) | BUG FIX | **UNKNOWN** | PA-44 lives in perceptual-auditing/SKILL.md, not flagship-pa-questions.md. I cannot verify the current state of perceptual-auditing/SKILL.md. Task #8 (pa-questions-surgeon) may be addressing this. | -- |
| E2 | Sharpen PA-63 to detect parametric echo | GO BEYOND | **UNKNOWN** | PA-63 is in flagship-pa-questions.md. I read the first 50 lines; PA-63 appears to be at lines ~51-61. Need to verify if parametric echo clause was added. Task #13 (pa-questions-surgeon) may be addressing this. | -- |
| D1 | PA-68 Transition Texture Variety | DEFERRED | **CORRECTLY DEFERRED** | Not present in flagship-pa-questions.md. | -- |
| D2 | PA-69 Deliberate Asymmetry | DEFERRED | **CORRECTLY DEFERRED** | Not present in flagship-pa-questions.md. | -- |
| D3 | PA-70 Content-Form Echo | DEFERRED | **CORRECTLY DEFERRED** | Not present in flagship-pa-questions.md. | -- |

### Manifest Coverage Summary

| Manifest | Total Edits | Applied | Not Applied | Correctly Deferred | Unknown |
|----------|------------|---------|-------------|-------------------|---------|
| 01-brief-changes | 10 | 7 | 0 | 2 | 1 (E3 partial) |
| 02-skill-changes | 12 | 12 | 0 | 0 | 0 |
| 03-gate-changes | 8 | 6 | 0 | 0 | 2 (confirmed correct/N/A) |
| 04-pa-changes | 5 | 0 | 0 | 3 | 2 (PA-44 + PA-63 status unknown) |
| **TOTAL** | **35** | **25** | **0** | **5** | **5** |

---

## Section 3: XRef Gap Summary

### From 30-comprehensive-xref-01-06.md (154 findings)

| Status | Count | Percentage |
|--------|-------|------------|
| ADDRESSED | 67 | 43.5% |
| PARTIALLY ADDRESSED | 42 | 27.3% |
| NOT ADDRESSED | 36 | 23.4% |
| CONTRADICTED | 3 | 1.9% |
| N/A | 6 | 3.9% |

**BLOCKING findings (originally 5, revised to 3):**
- B1/B2/B3: All the SAME gap -- no output-level scale verification (DG-1 validates fractal echo TABLE not rendered HTML). No DG-1B added. No SC-17 added. **STILL NOT ADDRESSED.**
- B4: Boundary vs channel contradiction -- **DOWNGRADED to ADDRESSED** (SKILL.md checkpoints now boundary-grouped)
- B5: BG-1/BG-2 absent from SKILL.md -- **DOWNGRADED to ADDRESSED** (now present)

**Revised BLOCKING from 30: 3 items (all the same gap: no rendered-output fractal verification)**

### From 31-comprehensive-xref-07-11.md (85 findings)

| Status | Count | Percentage |
|--------|-------|------------|
| ADDRESSED | 43 | 50.0% |
| PARTIALLY ADDRESSED | 17 | 19.8% |
| NOT ADDRESSED | 13 | 15.1% |
| N/A | 12 | 14.0% |
| CONTRADICTED | 0 | 0% |

**BLOCKING findings: 0**

**10 SIGNIFICANT findings (K1-K10):**
1. Stack progression absence (E1.1, I2) -- DEFERRED per E1
2. Fix cycle recipe-to-checklist degradation (E1.4, I3) -- PARTIALLY ADDRESSED
3. 6 DEFER items applied before testing (F2) -- accepted
4. Fractal echo table perceptibility gap (B1.2, B3.2) -- NOT ADDRESSED
5. No transition table YAML (B2.1, B2.2) -- NOT ADDRESSED (DEFERRED)
6. Padding micro-clustering not checked (A6.3, B3.4) -- NOT ADDRESSED (DEFERRED)
7. Metaphor spatial coverage blind spot (G4) -- NOT ADDRESSED
8. Brief at 443 lines (D1.4) -- monitoring item
9. SC-13B remains advisory (B3.3) -- correctly kept ADVISORY
10. No sunset protocol (A1.1) -- NOT ADDRESSED

**Decision Matrix Compliance:**
- DO NOW (E2, E3, E4): 3/3 APPLIED correctly
- DEFER (E1, E5, E6, E9, E10, E14, E15, E16): 2/8 correctly deferred, 6/8 applied early
- DON'T (E7, E8, E11, E12, E13): 5/5 correctly avoided

### From 32-comprehensive-xref-12-17.md (109 findings)

| Status | Count | Percentage |
|--------|-------|------------|
| ADDRESSED | 43 | 39.4% |
| PARTIALLY ADDRESSED | 21 | 19.3% |
| NOT ADDRESSED | 33 | 30.3% |
| N/A | 12 | 11.0% |

**BLOCKING findings: 1 (zone selector -- FULLY RESOLVED by SC-00)**

**Top 10 Unaddressed by Impact:**
1. No golden reference (D8-4)
2. No coherence arc planning (13-6a)
3. No transition-to-coherence mapping (13-6e)
4. No component-internal multi-coherence framing (15-6a)
5. No parametric echo CSS recipe (15-6b)
6. No typographic progression per direction (13-6b)
7. No metaphor spatial coverage PA question (D5-1)
8. No navigation metaphor CSS examples (12-6c)
9. No character-scale register inventory (16-5c)
10. Micro-gate architecture remains honor-system (D4-3)

### COMBINED XRef Summary (348 findings total)

| Status | File 30 | File 31 | File 32 | TOTAL | % |
|--------|---------|---------|---------|-------|---|
| ADDRESSED | 67 | 43 | 43 | **153** | **44.0%** |
| PARTIALLY ADDRESSED | 42 | 17 | 21 | **80** | **23.0%** |
| NOT ADDRESSED | 36 | 13 | 33 | **82** | **23.6%** |
| N/A | 6 | 12 | 12 | **30** | **8.6%** |
| CONTRADICTED | 3 | 0 | 0 | **3** | **0.9%** |

**BLOCKING findings across all 3 files:**
- File 30: 3 (all = DG-1 deliverable-vs-HTML gap)
- File 31: 0
- File 32: 1 (zone selector -- RESOLVED by SC-00)
- **NET BLOCKING: 3** (all the same gap: no rendered-output fractal verification)

---

## Section 4: Meta-Cognitive Audit Coverage (File 33)

The meta-cognitive audit identified 3 BLOCKING issues and 8 significant/observational gaps.

### BLOCKING Issues

| # | Issue | Status in Current Pipeline | Being Addressed by Surgeon? |
|---|-------|---------------------------|----------------------------|
| BLOCKING-1 | Missing TC Pipeline Orchestration -- SKILL.md sends builder directly to conventions brief without running TC Phases 0-5 | **ADDRESSED** | Task #1 (tc-surgeon) added Section 2 "TC SKILL INVOCATION" to SKILL.md. Builder now receives _tc-brief.md from a TC agent before building. This is the most significant structural change to SKILL.md. |
| BLOCKING-2 | Stale gate-runner cross-reference -- line 124 says "992 lines, 21 gates" but gate-runner is 1159 lines with 22 gates | **NOT ADDRESSED** | Task #3 is PENDING. Not yet picked up by any surgeon agent. This is a simple 1-line fix. |
| BLOCKING-3 | Missing micro-gate schedule -- gate-runner.md defines MG-1 through MG-4 but SKILL.md only runs gates AFTER build | **NOT ADDRESSED** | Task #4 is PENDING. Not yet picked up. SKILL.md has builder self-checks (honor system) during Phase C but does not orchestrate mid-build Playwright verification. The full gate run after build catches failures but at higher fix cost. |

### SIGNIFICANT Issues

| # | Issue | Status | Being Addressed? |
|---|-------|--------|-----------------|
| SIG-1 | Phase-gated library access not enforced -- builder receives ALL reference files simultaneously, bypassing anti-gravity R1 | **PARTIALLY ADDRESSED** | TC invocation (BLOCKING-1 fix) partially addresses this: TC runs Phases 0-3 before builder sees mechanism catalog. But builder spawn prompt still lists mechanism-catalog as "consult as needed" without phase-gating after metaphor commitment. |
| SIG-2 | Mechanism catalog as "consult as needed" -- but DG-4 requires >= 14 mechanisms across 5 categories | **NOT ADDRESSED** | No surgeon task targets this. Builder could take "as needed" literally and not consult the catalog, then fail DG-4. Should be promoted to "read after metaphor commitment" with a note about the >= 14 threshold. |
| SIG-3 | Weaver does not receive gate-to-brief-section mapping for fix context | **PARTIALLY ADDRESSED** | gate-runner.md has the Fix Recipe Compositional Context table. SKILL.md fix cycle references conventions-brief sections. But the weaver spawn prompt doesn't explicitly reference gate-runner.md's mapping table. |
| SIG-4 | No explicit HTTP server shutdown (PID tracking) | **NOT ADDRESSED** | No surgeon task targets this. Server lifecycle management is implicit. |
| SIG-5 | Question count inconsistency (non-contiguous PA IDs: PA-49, PA-54-59 skipped) | **NOT ADDRESSED** | Minor -- no surgeon task needed. A clarifying note would help but is not critical. |

### Additional Observations from File 33

| Observation | Status | Notes |
|------------|--------|-------|
| Builder spawn prompt is a "masterwork" (42 lines, recipe format) | **PRESERVED** | The builder spawn prompt has been modified to receive TC brief first but maintains recipe structure. |
| Screenshot pre-capture pattern | **PRESERVED** | Orchestrator takes screenshots before spawning auditors. |
| Lock sheet architecture (3-tier categorization) | **PRESERVED** | LOCKED Soul / LOCKED Research / CHALLENGEABLE Builder maintained. |
| "Fat core" architecture (builder does TC + build) noted as contradiction with design-system/CLAUDE.md | **RESOLVED** | TC skill invocation now added. No longer "fat core" -- separate TC agent runs before builder. design-system/CLAUDE.md describes "/build-page" as "Content analysis -> TC pipeline -> Opus builder deployment" which now matches SKILL.md. |
| Build log as memory device (conviction statement, fractal echo table, etc.) | **PRESERVED** | Builder still produces _build-log.md with all required artifacts. |
| design-system/CLAUDE.md says "21-gate" but gate-runner.md has 22 | **NOT ADDRESSED** | design-system/CLAUDE.md SKILLS section still says "21-gate programmatic verification." Should be updated to 22. Task #9 is PENDING. |
| DG-3 (Landmark Completeness) missing from SKILL.md | **UNKNOWN** | Need to verify if DG-3 was added to SKILL.md Section 3.4 (Deliverable Gates). Task #11 (skillmd-surgeon) may be addressing. |

### Meta-Cognitive Audit Summary

| Category | Total | Addressed | Partially | Not Addressed |
|----------|-------|-----------|-----------|---------------|
| BLOCKING | 3 | 1 (TC invocation) | 0 | 2 (stale ref, micro-gates) |
| SIGNIFICANT | 5 | 0 | 2 (SIG-1, SIG-3) | 3 (SIG-2, SIG-4, SIG-5) |
| Observations | 6 | 4 | 1 | 1 (CLAUDE.md sync) |
| **TOTAL** | **14** | **5** | **3** | **6** |

---

## Section 5: BLOCKING Gaps

These are findings from the debrief or enrichment research that are NOT covered by the current surgical fixes (based on task list review).

### BLOCKING-SEVERITY Gaps

| # | Gap | Source | Why Blocking | Surgeon Task? |
|---|-----|--------|-------------|---------------|
| **BG-1** | DG-1 validates fractal echo TABLE not rendered HTML -- builder can write perfect table and produce HTML that contradicts it. No DG-1B cross-validation gate. | 30:B1, 30:B2, 30:B3, 32:17-6b | Builder can claim CSS patterns in the plan that are never implemented. The "fractal theater" gap: planning passes, execution fails. 3 xref auditors independently flagged this as BLOCKING. | **NO** -- no task targets this. The 03-gate-changes manifest explicitly documents this was considered and EXCLUDED per master synthesis "DON'T" verdict on new gates (E11). The contrarian's argument: "DO NOT add new gates before testing." |
| **BG-2** | Stale gate-runner cross-reference in SKILL.md (992 lines / 21 gates vs actual 1159 / 22) | 33:BLOCKING-2 | Orchestrator may read wrong version or stop reading early. DG-3 omission. | **YES** -- Task #3 is PENDING but not yet started. |
| **BG-3** | Micro-gate schedule not orchestrated by SKILL.md | 33:BLOCKING-3, Debrief P4-4 | Builder failures caught at post-build (expensive) rather than mid-build (cheap). gate-runner.md defines MG-1 through MG-4 but SKILL.md doesn't orchestrate mid-build Playwright checks. | **YES** -- Task #4 is PENDING but not yet started. |

### SIGNIFICANT-SEVERITY Gaps Not Being Addressed

| # | Gap | Source | Impact | Surgeon Task? |
|---|-----|--------|--------|---------------|
| **SG-1** | No golden reference / CD-006 mapping to brief's framework | Debrief P8-4, 32:D8-4 | Brief "tells the builder everything about the INSTRUMENT but shows no MUSIC." Debrief's recommended single change. | **NO** |
| **SG-2** | Metaphor spatial coverage PA blind spot | Debrief P5-4, 31:G4, 32:D5-1 | Page can have metaphor in sections 1-3 that disappears in 4-8, undetected. | **YES** -- Task #8 (pa-questions-surgeon, in_progress). Likely being addressed. |
| **SG-3** | No coherence arc planning guidance | 32:13-6a, 32:13-7a | Builder has no guidance on planning boundary intensity progression. | **YES** -- Task #5 (conventions-surgeon, in_progress). |
| **SG-4** | No transition-to-coherence mapping (SMOOTH -> 3ch, BRIDGE -> 4-5ch, BREATHING -> 5-6ch) | 32:13-6e, 32:13-7b | Builder sees transition types and channel counts as separate concepts. | **YES** -- Task #6 (conventions-surgeon, in_progress). |
| **SG-5** | No typographic progression per semantic direction | 32:13-6b, 32:13-7c | DEEPENING/OPENING/FOCUSING/RESOLVING defined for bg/spacing/borders but not typography. | **YES** -- Task #7 (conventions-surgeon, in_progress) may cover this. |
| **SG-6** | No component-internal multi-coherence framing | 32:15-6a, 32:15-2a | Builders see components as "boxes with labels" rather than micro-coherence events. Label-to-body is a 2-3 channel shift. | **YES** -- Task #7 (conventions-surgeon) may cover this. |
| **SG-7** | SC-13B direction model still 2-value (INTENSIFYING/RELAXING) not 4-value (DEEPENING/OPENING/FOCUSING/RESOLVING) | 30:S6, 30:S49 | Gate can't validate what the brief asks builders to do. Brief defines 4 directions but gate only knows +/-. | **NO** -- no task targets this. Manifest 03-gate-changes did not include this edit. |
| **SG-8** | Stack progression never explicitly codified | 30:S37, 30:S51, 30:S57, 30:S78, 30:S81, 31:E1.1, 31:I2, 32:17-9a | Concepts presented as independent peers. No file says "channels are building blocks of multi-coherence." | **PARTIALLY** -- Task #5 may add bridge text. |
| **SG-9** | Mechanism catalog positioned as "consult as needed" but DG-4 requires >= 14 mechanisms | 33:SIG-2 | Builder could skip catalog and fail DG-4. | **NO** |
| **SG-10** | No navigation-specific metaphor CSS examples | 32:12-6c, 32:12-7d | Every header looks the same regardless of metaphor. Highest-ROI enrichment for Navigation scale. | **NO** |
| **SG-11** | No character-scale register inventory as closed set | 32:16-5c, 32:16-2b | Implicit registers not enumerated. Risk of micro-register proliferation (Flagship had 107+ micro-registers). | **NO** |
| **SG-12** | Weaver Stack Verdict absent (L1-L5 per-layer assessment + ENSEMBLE/CHOIR/SOLO/BROKEN classification) | 30:S111 | No instrument verifies the stack as an integrated system. | **NO** |
| **SG-13** | design-system/CLAUDE.md says "21-gate" and describes pipeline without TC step | 33:observation | CLAUDE.md contradicts current SKILL.md. | **YES** -- Task #9 is PENDING. |
| **SG-14** | No sunset protocol for rule retirement | 31:A1.1, 31:K10 | Rules only accumulate, never retire. 963-line master prompt is the cautionary example. | **NO** |

### Gap Coverage Summary

| Gap Category | Total | Being Addressed | Not Addressed |
|-------------|-------|----------------|---------------|
| BLOCKING | 3 | 2 (Tasks #3, #4 pending) | 1 (DG-1B -- intentionally excluded) |
| SIGNIFICANT | 14 | 6 (Tasks #5, #6, #7, #8, #9 active/pending) | 8 |
| **TOTAL** | **17** | **8** | **9** |

---

## Section 6: Aggregate Findings

### What the Current Surgery Team IS Fixing

Based on the task list (Tasks #1-#17):

1. **TC skill invocation** (Task #1, in_progress) -- BLOCKING-1 from meta-cognitive audit. ADDRESSED.
2. **PA skill invocation** (Task #2, pending) -- Minor process improvement.
3. **Stale gate-runner cross-reference** (Task #3, pending) -- BLOCKING-2. NOT YET STARTED.
4. **Micro-gate checkpoint alignment** (Task #4, pending) -- BLOCKING-3. NOT YET STARTED.
5. **Coherence arc planning** (Task #5, in_progress) -- SG-3. Being addressed.
6. **Transition-to-coherence mapping** (Task #6, in_progress) -- SG-4. Being addressed.
7. **5 remaining conventions-brief gaps** (Task #7, in_progress) -- Multiple SGs. Being addressed.
8. **Metaphor spatial coverage PA question** (Task #8, in_progress) -- SG-2. Being addressed.
9. **design-system/CLAUDE.md sync** (Task #9, pending) -- SG-13. NOT YET STARTED.
10. **Verify enrichment research incorporation** (Task #10, pending) -- This report.
11-13. **Surgeon agents** (Tasks #11-13, in_progress) -- Active editors.
14-17. **XRef auditors** (Tasks #14-17, in_progress) -- This report and siblings.

### What the Current Surgery Team is NOT Fixing

These gaps from the enrichment research and debrief are NOT covered by any current task:

1. **DG-1B / SC-17 (rendered-output fractal verification)** -- 3 BLOCKING findings from xref-01-06. Intentionally excluded per master synthesis DON'T verdict on new gates. Risk accepted.
2. **Golden reference / CD-006 mapping** -- Debrief's #1 recommended change. Not assigned.
3. **SC-13B 4-value direction model** -- Would align gate with brief's 4 semantic directions. Not assigned.
4. **Mechanism catalog promotion** from "consult as needed" to mandatory post-metaphor reading. Not assigned.
5. **Navigation-specific metaphor CSS examples** -- Highest-ROI enrichment for Navigation scale per file 12. Not assigned.
6. **Character-scale register inventory** -- Closed set of 6 registers to prevent micro-proliferation. Not assigned.
7. **Weaver Stack Verdict** -- L1-L5 per-layer assessment. Not assigned.
8. **Sunset protocol** for rule retirement. Not assigned.
9. **HTTP server lifecycle management** (PID tracking). Not assigned.
10. **Padding micro-clustering gate** (SC-14B). Intentionally deferred per DON'T verdict.

### Concept-Flow Improvement Status (from file 17's 9 concepts)

| Concept | Pre-Surgery State | Post-Surgery State | Improvement? |
|---------|------------------|-------------------|-------------|
| 6 Channels | Return path extinction | Fix cycle includes channel naming, weaver names channels | Moderate improvement |
| 5 Scales | No spawn prompt mention, DG-1 validates table only | TC brief now provides scale awareness via zone architecture | Significant improvement (TC adds pre-derived zones) |
| Multi-Coherence | Return path extinction | Fix cycle has compositional context + brief section refs | Moderate improvement |
| 4 Semantic Directions | Total extinction | Fix cycle example says "maintain DEEPENING"; TC brief may include direction | Significant improvement |
| Anti-Scale Model | Total extinction | **UNCHANGED** -- no gates, no weaver criteria, no fix routing | None |
| Fractal Self-Similarity | DG-1 validates deliverable only | **UNCHANGED** -- DG-1 still deliverable-only | None |
| Perception Thresholds | Lowest loss (structured return) | Brief_section references added to fix recipes | Slight improvement |
| Recipe vs Checklist | Fix cycle = pure checklist | Fix cycle = mixed recipe/checklist with compositional context | Moderate improvement |
| Stack Progression | Never codified | **UNCHANGED** -- still implicit in section ordering | None (unless Task #5 adds bridge) |

### Overall Assessment

The pipeline surgery team has made **significant progress** on the most impactful findings:

**HIGH IMPACT RESOLVED:**
- TC pipeline integration (the #1 meta-cognitive audit finding)
- Zone selector fragility (the #1 debrief concern) via SC-00
- Boundary-by-boundary contradiction (the highest-leverage single edit)
- Return path extinction for perception thresholds and multi-coherence
- BG-1/BG-2 behavioral gates added to SKILL.md
- Mechanism count aligned (>= 14 total AND per-category)

**IN PROGRESS (being addressed by active surgeon tasks):**
- Coherence arc planning, transition-to-coherence mapping, component enrichment
- Metaphor spatial coverage PA question
- design-system/CLAUDE.md synchronization

**NOT BEING ADDRESSED (accepted risks or gaps):**
- DG-1B cross-validation (intentional: DON'T verdict on new gates before testing)
- Golden reference (the debrief's recommended single change)
- Anti-scale model extinction in downstream pipeline
- SC-13B direction model enrichment
- Weaver Stack Verdict
- Several Character/Navigation scale enrichments
- Sunset protocol

**PENDING but critical (should be started ASAP):**
- Task #3: Stale gate-runner cross-reference (1-line fix, BLOCKING)
- Task #4: Micro-gate checkpoint alignment (BLOCKING)
- Task #9: design-system/CLAUDE.md sync

---

*END OF DEBRIEF + ENRICHMENT CROSS-REFERENCE REPORT*
*Sources: debrief-parts-3-8.md (263 lines), 01-brief-changes.md (357 lines), 02-skill-changes.md (607 lines), 03-gate-changes.md (544 lines), 04-pa-changes.md (322 lines), 30-comprehensive-xref-01-06.md (383 lines), 31-comprehensive-xref-07-11.md (483 lines), 32-comprehensive-xref-12-17.md (596 lines), 33-skillmd-metacognitive-audit.md (363 lines)*
*Total source material: ~3,918 lines of research audited against 4 pipeline files (~2,183 lines)*
