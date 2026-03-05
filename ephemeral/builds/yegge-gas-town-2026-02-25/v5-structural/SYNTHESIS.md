# Pipeline v5 Structural Integrity Synthesis

**Date:** 2026-02-26
**Scope:** 9 structural audit reports (276KB total) from specialized Opus agents
**Purpose:** Determine whether the v5 pipeline is structurally sound for production use
**Prior audit reference:** `v5-audit/SYNTHESIS.md` (8 agents, 3,309 lines, Feb 26)

---

## 1. Executive Summary

**Overall Structural Integrity: ADEQUATE (approaching STRONG, contingent on terminology migration)**

The v5 pipeline is structurally well-designed with a sound information flow architecture, correct PA question routing, and comprehensive defense against historical failure modes. However, one issue undermines structural integrity across the entire system: the **incomplete verdict terminology migration** from old terms (SHIP/REFINE/REBUILD) to new terms (RELEASE/IMPROVE/RETHINK). This single issue generates 14 BLOCKING findings across 10 files and creates a runtime failure path where the Weaver issues verdicts the Orchestrator cannot parse.

Excluding the terminology issue, the pipeline achieves 95%+ structural soundness. PA question routing is verified clean (69/69, zero duplicates, zero orphans). Gate coverage is structurally complete (52/56 have executable code). Recipe-to-output traceability maps 97 instructions with 56.7% enforcement or audit coverage. The adversarial replay confirms v5 would have prevented the Flagship failure (100% defect prevention) and improved Gas Town's initial build to 2.5-3.0/4 (vs actual 2.0/4).

**Three actions required before next pipeline run:**
1. Complete verdict terminology migration (14 BLOCKING items, ~200 search-replace operations)
2. Fix 3 BLOCKING cross-reference errors in MANIFEST.md (section number mismatches, GR-65 phantom)
3. Resolve background delta floor contradiction (recipe says 20 RGB, gate enforces 15 RGB)

---

## 2. Source Report Summary

| # | Report | Size | Blocking | Significant | Advisory | Key Finding |
|---|--------|------|----------|-------------|----------|-------------|
| 1 | info-flow-trace.md | 42KB | 0 | 3 | 3 | 10,053 lines govern 11 junctions; 3 single points of failure (Content Map, Brief Tier 3, Weaver Verdict) |
| 2 | crossref-integrity.md | 22KB | 3 | 10 | 0 | 13 broken/stale references; PA and disposition routing verified clean |
| 3 | gate-coverage-audit.md | 27KB | 0 | 4 | 7 | 52/56 gates have code; gates verify COMPLIANCE not QUALITY; 5 trivially gameable gates |
| 4 | builder-input-sim.md | 23KB | 1 | 3 | 3 | Background delta floor contradiction (15 vs 20 RGB); recipe:constraint ratio healthy at 4.4:1 |
| 5 | terminology-audit.md | 25KB | 14 | 8 | 11 | Incomplete verdict rename creates parsing failure risk; IMPROVEMENTS format has 3 incompatible variants |
| 6 | pa-routing-audit.md | 44KB | 0 | 2 | 7 | 69/69 questions verified across 3 files; routing chain is PASS; Mini-PA excludes readability (B) |
| 7 | crack-defense-depth.md | 29KB | 0 | 4 | 0 | D6 WEAK->STRONG, D7 ABSENT->ADEQUATE, D9 WEAK->ADEQUATE, D11 WEAK->ADEQUATE (all with proposed fixes) |
| 8 | recipe-traceability.md | 31KB | 2 | 3 | 2 | 28.9% of recipe instructions are UNVERIFIABLE; IMPROVEMENTS comment is biggest process hole |
| 9 | adversarial-replay.md | 33KB | 0 | 1 | 3 | v5 would prevent 100% of Flagship defects; Gas Town compositional defects partially prevented |
| **TOTAL** | | **276KB** | **20** | **38** | **36** | |

---

## 3. Cross-Cutting Findings

Issues appearing in 3 or more reports, ranked by frequency and severity.

### CC-01: Verdict Terminology Split (7 reports)

**Reports:** terminology-audit, crossref-integrity, crack-defense-depth, builder-input-sim, info-flow-trace, recipe-traceability, adversarial-replay

The pipeline exists in a MIXED terminology state. The Weaver (pa-weaver.md) issues RELEASE/POLISH/IMPROVE/RETHINK. The Orchestrator (sections 5-7), MANIFEST.md, gate-runner-spec.md, d10-observer-protocol.md, EXECUTION-TRACKER-TEMPLATE.md, and pa-manifest.md still use SHIP/SHIP WITH FIXES/REFINE/REBUILD. This creates:
- **Runtime failure path:** Orchestrator receives "IMPROVE" but decision tree checks for "REFINE"
- **Observer confusion:** Observer looks for "REFINE builder" artifacts named "IMPROVE"
- **Tracker mismatch:** Form fields expect old terms, Weaver produces new terms
- **Gate logic mismatch:** GR-64 checks for "SHIP" verdict, Weaver never issues "SHIP"

Additionally, the verdict term "POLISH" collides with "Pass B (POLISH)" the recipe naming for the second build pass, and "Pass 0/1" (convergence iterations) collides with "Pass A/B" (builder passes within a single cycle).

**Fix:** Either complete the migration (14 BLOCKING items, ~200 operations across 10 files) or revert to old terminology. Partial implementation is the worst possible state.

### CC-02: Background Delta Floor Contradiction (5 reports)

**Reports:** builder-input-sim, recipe-traceability, gate-coverage-audit, info-flow-trace, crossref-integrity

The brief template says "15 RGB points" as the perception floor. The compose recipe says "20 RGB = FLOOR for adjacent zones (was 15 -- too close to invisible)." GR-11 enforces >= 15. The builder sees both values in the same context window.

- Brief: 15 RGB (perception physics)
- Recipe: 20 RGB (compositional floor)
- Gate: 15 RGB (enforcement threshold)
- GR-51: 50%+ of deltas >= 25 RGB (distribution)

A builder using 16 RGB deltas passes all gates but violates the recipe's intent. This is both a D2 crack (specification ambiguity) and a D8 crack (threshold mismatch across files).

**Fix:** Standardize: 15 RGB = physical minimum (gate threshold), 20 RGB = compositional floor (recipe target), 25 RGB = compositional target (GR-51). Update brief template to say "20 RGB compositional floor" with a note that "15 RGB is the perceptual minimum enforced by gates."

### CC-03: IMPROVEMENTS Comment Has No Verification (4 reports)

**Reports:** recipe-traceability, builder-input-sim, terminology-audit, gate-coverage-audit

The recipe requires builders to produce `<!-- IMPROVEMENTS: ... -->` comments with 5-10 items including confidence ratings. The rule "3+ HIGH confidence items = orchestrator MUST override SHIP to REFINE" is a critical process decision -- but NO gate reads the IMPROVEMENTS comment. The entire REFINE/RELEASE decision is disconnected from builder self-awareness.

Additionally, the IMPROVEMENTS format has 3 incompatible variants:
- Variant A (compose recipe): `[TAG] Zone -- description | CONFIDENCE`
- Variant B (polish recipe): `N. Category | Zone | Change | Confidence`
- Variant C (MANIFEST): matches Variant B

The orchestrator must parse these but has no specified format expectation.

**Fix:** Standardize on Variant B format. Propose GR-84 (RECOMMENDED tier) to verify IMPROVEMENTS comment exists with >= 5 items and count HIGH keywords.

### CC-04: Hover States Are Completely Unverified (4 reports)

**Reports:** recipe-traceability, gate-coverage-audit, builder-input-sim, adversarial-replay

D-07 (Edge Intentionality) represents an entire disposition (~30 recipe lines) with ZERO gate coverage and ZERO PA question coverage. BV-05 checks hover KEYWORDS in the brief but no gate verifies actual `:hover` CSS rules exist. No PA question asks about hover interaction quality. This is the largest single gap in the verification chain.

**Fix:** Propose GR-85 (RECOMMENDED): count distinct `:hover` CSS selectors >= 4. Consider adding hover assessment to an existing PA question (PA-16 or create PA-82).

### CC-05: Gates Verify Compliance, Not Quality (4 reports)

**Reports:** gate-coverage-audit, adversarial-replay, recipe-traceability, info-flow-trace

The fundamental gate limitation: all 56 gates passed for a PA-05 2.0/4 page. A builder can achieve 100% gate compliance with mechanically minimal responses (container 950px, all backgrounds 16 RGB apart, two borders at 4px/1px, template EXPERIENTIAL-CHECK). Gates catch FLOOR violations but cannot distinguish MIDDLE from CEILING from FLAGSHIP. The gap between gates (compliance) and PA (quality) is bridged only by the Weaver, which is a single convergence agent.

This is by design, but it means quality improvement comes from recipe format (preventing bad builds) and PA assessment (detecting mediocre builds), not from gate additions. More gates improve compliance assurance, not compositional quality.

### CC-06: BV Gates Are D3-Vulnerable (3 reports)

**Reports:** gate-coverage-audit, crack-defense-depth, recipe-traceability

The entire BV gate suite (BV-01 through BV-08, 8 gates) runs OUTSIDE GR-48's enforcement scope. An orchestrator that skips `runBriefVerification()` and `checkBriefOutputDiff()` triggers no FAIL. BV-06 (anti-regression phrase scan) is especially critical -- it prevents pipeline regression -- and has zero backup enforcement.

**Fix:** Propose GR-88 (META tier): verify BV-01 through BV-08 results are present in the gate result set. Auto-fail if any BV gate was skipped.

### CC-07: Pass B Add-Only Constraint Is Unenforceable (3 reports)

**Reports:** recipe-traceability, builder-input-sim, gate-coverage-audit

The polish recipe specifies 8 prohibited modifications for Pass B (no changing backgrounds, layout, font-size, font-weight, etc.). None are verified. BV-08 compares brief vs final HTML but does not compare Pass A output vs Pass B output. A rogue Pass B agent could restructure the entire page with zero detection.

**Fix:** Propose BV-09 (RECOMMENDED BV tier): diff Pass A vs Pass B output; flag changes to backgrounds, font-size, or layout structure.

---

## 4. BLOCKING Issues (Must Fix Before Next Run)

Ordered by severity and cross-report frequency.

### BLOCK-01: Complete Verdict Terminology Migration [CRITICAL]
- **Source:** terminology-audit (14 items), crossref-integrity, crack-defense-depth
- **Files affected:** MANIFEST.md (~70 instances), artifact-orchestrator.md (~50 instances), EXECUTION-TRACKER-TEMPLATE.md (17), d10-observer-protocol.md (22), gate-runner-spec.md (18), pa-manifest.md (3), pa-questions.md (2), artifact-builder-recipe-compose.md (2), artifact-builder-recipe-polish.md (1), experiment-protocol.md (1)
- **Risk:** Weaver issues "IMPROVE" verdict; Orchestrator decision tree checks for "REFINE"; falls to undefined branch; pipeline HALTS or misroutes.
- **Fix:** Scripted search-and-replace across 10 files: SHIP->RELEASE, SHIP WITH FIXES->POLISH, REFINE->IMPROVE, REBUILD->RETHINK. Requires human review of each context (some "REFINE" references are to the builder pass concept, not the verdict).
- **Effort:** ~2 hours with manual review

### BLOCK-02: MANIFEST Section Number Mismatches [HIGH]
- **Source:** crossref-integrity (B-01, B-02)
- **File:** MANIFEST.md lines 360, 363
- **Fix:** Line 360: change "SECTION 4: PHASE 2 -- BUILDING" to "SECTION 5 (Phase 2): TWO-PASS BUILDING". Line 363: change "SECTION 8: REFINE AND REBUILD PROTOCOLS" to "SECTION 7 (Phase 4): VERDICT AND DECISION TREE (iteration subsections)".
- **Effort:** 5 minutes

### BLOCK-03: GR-65 Phantom Gate [HIGH]
- **Source:** crossref-integrity (B-03)
- **Files:** artifact-orchestrator.md lines 352-359, MANIFEST.md lines 511/516, EXECUTION-TRACKER-TEMPLATE.md line 68
- **Issue:** GR-65 (Structure Preservation Verification) is referenced in 3 files but has no entry in gate-manifest.json and no implementation in gate-runner-core.js.
- **Fix:** Either (A) add GR-65 to gate-manifest.json "iteration.procedural" array with a note that it is orchestrator-enforced, or (B) remove all references.
- **Effort:** 15 minutes

### BLOCK-04: Background Delta Floor Contradiction [HIGH]
- **Source:** builder-input-sim (F-04), recipe-traceability (Finding 4)
- **Files:** artifact-builder-recipe-compose.md line 115, artifact-tc-brief-template.md
- **Issue:** Recipe says "20 RGB = FLOOR", brief template says "15 RGB points", gate enforces 15.
- **Fix:** Update brief template to "20 RGB compositional floor" with note "15 RGB is physical minimum." Or update recipe to align with gate at 15. Recommended: keep gate at 15, recipe at 20, brief at 20, add note explaining the two numbers.
- **Effort:** 15 minutes

### BLOCK-05: IMPROVEMENTS Format Inconsistency [MEDIUM]
- **Source:** terminology-audit (BLOCKING-08, BLOCKING-09)
- **Files:** artifact-builder-recipe-compose.md lines 559-563, artifact-builder-recipe-polish.md lines 287-291
- **Issue:** Compose recipe uses `[TAG] Zone -- description | CONFIDENCE` format; polish recipe uses `N. Category | Zone | Change | Confidence` format. Orchestrator must parse both.
- **Fix:** Standardize compose recipe to Variant B format (numbered, pipe-delimited).
- **Effort:** 10 minutes

### BLOCK-06: Pass A/B vs Pass 0/1 Terminology Collision [MEDIUM]
- **Source:** terminology-audit (BLOCKING-10, BLOCKING-11)
- **Files:** MANIFEST.md, artifact-orchestrator.md, pa-weaver.md
- **Issue:** "Pass A/Pass B" = two builder passes within one cycle. "Pass 0/Pass 1" = convergence iterations. pa-weaver.md line 273 says "pass >= 1" which is ambiguous.
- **Fix:** Rename convergence passes to "iteration >= 1" or "convergence_pass >= 1". Add clarifying paragraph to MANIFEST.md.
- **Effort:** 20 minutes

---

## 5. SIGNIFICANT Issues (Should Fix)

Ordered by impact on pipeline reliability.

### SIG-01: IMPROVEMENTS Comment Has No Verification Gate
- **Source:** recipe-traceability (Finding 1), builder-input-sim (F-10)
- **Impact:** REFINE/RELEASE decision disconnected from builder self-awareness. Builder can write zero IMPROVEMENTS and pipeline ships anyway.
- **Fix:** Implement GR-84 (IMPROVEMENTS comment verification). Consider REQUIRED tier given process-logic impact.

### SIG-02: Hover States Completely Unverified
- **Source:** recipe-traceability (Finding 2), gate-coverage-audit (GAP-08)
- **Impact:** Entire D-07 disposition unverifiable. 30 recipe lines of hover instructions with zero enforcement.
- **Fix:** Implement GR-85 (hover state count >= 4 distinct `:hover` selectors).

### SIG-03: BV Gate Suite D3-Vulnerable
- **Source:** gate-coverage-audit (Section 6), crack-defense-depth
- **Impact:** 8 brief verification gates can be skipped without any meta-gate detecting the omission.
- **Fix:** Implement GR-88 (BV coverage enforcement meta-gate).

### SIG-04: Pass B Add-Only Constraint Unenforceable
- **Source:** recipe-traceability (Finding 3), builder-input-sim (F-08)
- **Impact:** Pass B can silently destroy Pass A composition with no detection.
- **Fix:** Implement BV-09 (Pass A/B composition lock diff).

### SIG-05: GR-18 Should Be REQUIRED (Not RECOMMENDED)
- **Source:** gate-coverage-audit (Section 7.1)
- **Impact:** Ghost mechanisms (sub-perceptual CSS) were THE dominant Flagship failure mode. GR-18 detects them but is only RECOMMENDED, meaning 3+ RECOMMENDED failures must occur before action.
- **Fix:** Promote GR-18 from RECOMMENDED to REQUIRED.

### SIG-06: REFINE IMPROVEMENTS Transformation Has No Verification
- **Source:** builder-input-sim (F-10)
- **Impact:** If orchestrator passes raw IMPROVEMENTS (with diagnostic vocabulary) to REFINE builder, isolation is violated. No gate verifies transformation happened.
- **Fix:** Add BV-level check or Observer check (OBS-XX) that scans REFINE builder input for diagnostic vocabulary.

### SIG-07: 9 Stale Line Counts in Redirect Files
- **Source:** crossref-integrity (S-05, S-06)
- **Impact:** artifact-pa-protocol.md and artifact-gate-runner.md redirects have all line counts stale from pre-v4 era.
- **Fix:** Update 9 line count values across 2 redirect files.

### SIG-08: MANIFEST Gate File References Stale
- **Source:** crossref-integrity (S-01, S-08)
- **Impact:** MANIFEST lines 801-803 reference `artifact-gate-runner.md` sections that now live in `gate-runner-spec.md`. Line 308 references Appendix A that is in the MONOLITHIC version.
- **Fix:** Update 4 file path references.

### SIG-09: Mini-PA Excludes Readability Auditor (B)
- **Source:** pa-routing-audit (MINI-01, MINI-02)
- **Impact:** Mini-PA (Mode 2.5) excludes Auditor B (readability), the #1 BLOCKING defect detector. Also excludes both TIER 1 EQUIVALENT questions (PA-17, PA-41).
- **Fix:** Consider adding PA-02 or PA-08 to one of the 3 Mini-PA auditors, or add B as a 4th Mini-PA auditor with 3-5 questions.

### SIG-10: Disposition Instructions in Low-Attention Zone of Recipe
- **Source:** builder-input-sim (F-05)
- **Impact:** D-01 through D-09 CSS technique vocabulary appears in Phase 4 of the recipe (final 20% of instructional text). Builder has mentally committed to an approach by this point.
- **Fix:** Move mechanism-category quick-reference table from Phase 4 into Phase 2 alongside creative decisions, or create a "deployment vocabulary cheat sheet" visible before creative decisions.

### SIG-11: GR-55 (Multi-Coherence) Should Be RECOMMENDED
- **Source:** gate-coverage-audit (Section 7.1)
- **Impact:** Multi-coherence is the strongest quality predictor outside BV-08, but GR-55 is ADVISORY. Sub-perceptual channel differences (font-size differ by 0.5px) count as "channels" in the current logic.
- **Fix:** Promote to RECOMMENDED. Add perceptibility thresholds: font-size diff >= 2px, letter-spacing diff >= 0.5px, padding diff >= 8px.

### SIG-12: APPLIED Mode Has No Explicit Recipe Path
- **Source:** crack-defense-depth (Gap A, Gap B)
- **Impact:** Compose recipe contains COMPOSED mode instructions throughout (concept naming, zone-modulated callouts) with no APPLIED alternative. An APPLIED-mode builder must IGNORE instructions without guidance on what to do instead.
- **Fix:** Add mode-conditional blocks to compose recipe (~15 lines) and polish recipe (~12 lines).

### SIG-13: Mode-Agnostic PA Scoring Penalizes APPLIED Builds
- **Source:** crack-defense-depth (Gap C, Gap D, Gap E)
- **Impact:** PA questions about metaphor/compositional depth (PA-16, PA-17, PA-65-68) will score low for APPLIED builds that correctly implement a non-metaphorical approach.
- **Fix:** Add mode-adjusted scoring to pa-deployment.md: for APPLIED mode, metaphor questions scored N/A, PA-05 ceiling = 3.0/4.

### SIG-14: Orchestrator Section Reference to Wrong Section Number
- **Source:** crossref-integrity (S-09)
- **Impact:** gate-runner-spec.md line 293 references "artifact-orchestrator.md Section 9" for GR-23-28, but Section 9 is "VALUES CONTEXT (Historical)." Actual location is Section 0/Section 7.
- **Fix:** Update reference.

### SIG-15: A-03 Not Listed in Gate Manifest Tiers
- **Source:** crossref-integrity (Section 3.2)
- **Impact:** A-03 (visible content check) counted in total but not listed in any tier's gates array.
- **Fix:** Add A-03 to a "utility" tier in gate-manifest.json.

---

## 6. ADVISORY Items (Grouped by Theme)

### Gate Improvement Proposals

| Source | Proposed Gate | Tier | Purpose |
|--------|--------------|------|---------|
| gate-coverage-audit | GR-84: Total Whitespace Ratio | REQUIRED | Catches the Ceiling experiment's 70-80% blank page |
| gate-coverage-audit | GR-85: Border Count + Distribution | RECOMMENDED | Catches Flagship's zero-border defect directly |
| gate-coverage-audit | GR-86: Typography Differentiation | RECOMMENDED | Catches uniform 16px/400 typography |
| gate-coverage-audit | GR-87: Mechanism Density Proxy | ADVISORY | Proxy for mechanism count |
| recipe-traceability | GR-84: IMPROVEMENTS Comment | REQUIRED | Process logic gap |
| recipe-traceability | GR-85: Hover State Count | RECOMMENDED | D-07 verification |
| recipe-traceability | GR-86: Layout Variety | RECOMMENDED | Layout pattern diversity |
| recipe-traceability | GR-87: Transition Type Variety | RECOMMENDED | Transition monotony prevention |
| recipe-traceability | GR-88: CSS Line Count | ADVISORY | Effort/depth proxy |
| recipe-traceability | GR-89: Reduced Motion Content | ADVISORY | Accessibility edge |
| recipe-traceability | BV-09: Pass B Composition Lock | RECOMMENDED | Add-only enforcement |
| crack-defense-depth | GR-88: BV Coverage Enforcement | META | D3 defense for BV suite |

**Note:** Gate-coverage-audit and recipe-traceability independently propose gates with overlapping IDs (GR-84-88). Reconciliation needed before implementation. Total unique gate proposals: ~10 new gates. This would push the count from 56 to ~66, exceeding the proposed complexity budget ceiling of 60 (crack-defense-depth D7-F1).

### Process Improvements

| Source | Item | Priority |
|--------|------|----------|
| adversarial-replay | Consider "light mode" for Middle-tier content (skip observer, Mini-PA, single-pass) | MEDIUM |
| adversarial-replay | Add luminance distribution gate for dark-zone fatigue prevention | MEDIUM |
| adversarial-replay | Empirically validate two-pass value with same-content A/B test | MEDIUM |
| info-flow-trace | Add J1 cross-validation (second Content Analyst) | LOW |
| info-flow-trace | Add Weaver verdict cross-validation (Integrative Auditor also classifies fix types) | LOW |
| info-flow-trace | Add behavioral audit using Playwright interaction (hover, tab, print) alongside visual screenshots | LOW |
| crack-defense-depth | Create COMPLEXITY-BUDGET.md with gate ceiling (60), sunset criteria, change log | LOW |
| crack-defense-depth | Add font loading gate (GR-61b) before screenshot capture | LOW |
| crack-defense-depth | Add PA report re-reading instruction to Weaver prompt (recency bias) | LOW |

### PA Question Observations

| Source | Item | Priority |
|--------|------|----------|
| pa-routing-audit | PA-47 (scroll fatigue) better fits D (Flow) than H (Responsiveness) | LOW |
| pa-routing-audit | PA-34/PA-71 substantially overlap (transition quality) -- consolidation candidate | LOW |
| pa-routing-audit | PA-44/PA-68 overlap (metaphor persistence) -- consolidation candidate | LOW |
| pa-routing-audit | MANIFEST.md range notation ambiguous (e.g., "PA-30-33") | LOW |
| pa-routing-audit | 9 questions have purely judgment-based scoring (by design, not a defect) | INFO |

---

## 7. Crack Dimension Coverage Matrix

Combined assessment from crack-defense-depth analysis, gate-coverage-audit, and info-flow-trace findings.

| Dimension | v5-Audit Rating | Structural Audit Rating | Change | Key Evidence |
|-----------|----------------|------------------------|--------|-------------|
| **D1** (Threshold Gaming) | ADEQUATE | ADEQUATE | -- | GR-19 detects floor-hugging but is ADVISORY only. GR-55 multi-coherence channels gameable with sub-perceptual differences. |
| **D2** (Compression Loss) | STRONG | STRONG | -- | BV-08 brief-output diff is the strongest defense. 3 single points of failure identified (Content Map, Brief Tier 3, Weaver) but each is mitigated. |
| **D3** (Voluntary Non-Execution) | ADEQUATE | ADEQUATE (with concern) | ~ | 28.9% of recipe instructions UNVERIFIABLE. BV gate suite fully D3-vulnerable (no meta-gate enforcement). |
| **D4** (Self-Reporting Bias) | ADEQUATE | ADEQUATE | -- | GR-63 EXPERIENTIAL-CHECK is trivially gameable (template passes all sub-checks). GR-50 CONVICTION similarly templatable. |
| **D5** (Position Effect) | STRONG | STRONG | -- | Two-pass architecture directly addresses attention decay. Disposition instructions still in low-attention zone (recipe Phase 4). |
| **D6** (Cross-File Reference Rot) | WEAK | **WEAK->STRONG** (with fixes) | UP | 6 new checker functions proposed covering section refs, terminology, dispositions, routing table, thresholds, two-pass file refs. ~200 lines addition. |
| **D7** (Defense Paradox) | ABSENT | **ABSENT->ADEQUATE** (with fixes) | UP | 58.4% of v5 design is quality-facing vs 41.6% defense-about-defense. Design-to-impl ratio 20.9:1 (at threshold). COMPLEXITY-BUDGET.md proposed. |
| **D8** (Spec Ambiguity) | ADEQUATE | **ADEQUATE (degraded)** | ~ | Terminology split is exactly the ambiguity D8 warns about. Background delta contradiction adds a second active ambiguity. |
| **D9** (Environmental Variance) | WEAK | **WEAK->ADEQUATE** (with fixes) | UP | GR-61 DPR defense verified. Font loading gate, PA ordering note, DPR post-check proposed. ~40 lines. |
| **D10** (Process Compliance) | STRONG | STRONG | -- | Observer protocol verified comprehensive. D10-observer-protocol.md is 593 lines, 58 prohibitive terms. |
| **D11** (Mode/Context Sensitivity) | WEAK | **WEAK->ADEQUATE** (with fixes) | UP | 6 gaps identified in APPLIED vs COMPOSED mode paths. ~62 lines of mode-conditional blocks across 5 files. |
| **D12** (Downstream Propagation) | ADEQUATE | ADEQUATE | -- | 3 single points of failure identified. Bifurcation at J6 (screenshots + gates) reunites only at Weaver. Interaction issues (implementation x perception) fall between channels. |
| **D13** (Historical Regression) | STRONG | STRONG | -- | BV-04 suppressor scan + BV-06 anti-regression phrases. Adversarial replay confirms 100% Flagship defect prevention. |
| **D14** (Crack Taxonomy) | STRONG | STRONG | -- | All 14 dimensions analyzed with defense evidence. Proposed fixes for all WEAK/ABSENT dimensions. |

**After proposed fixes:**
- STRONG: D2, D5, D6, D10, D13, D14 (6)
- ADEQUATE: D1, D3, D4, D7, D8, D9, D11, D12 (8)
- WEAK: 0
- ABSENT: 0

---

## 8. Files Modified Table

Pipeline files requiring changes, ordered by priority.

| Priority | File | Change Type | Changes | Est. Effort |
|----------|------|-------------|---------|-------------|
| **P0** | MANIFEST.md | Terminology + refs | ~70 verdict term replacements + 5 section ref fixes + 4 line count updates + A-03 tier | 60 min |
| **P0** | artifact-orchestrator.md | Terminology | ~50 verdict term replacements in Sections 5-7 | 30 min |
| **P0** | d10-observer-protocol.md | Terminology | 22 "REFINE" -> "IMPROVE" + 1 verdict list fix | 15 min |
| **P0** | EXECUTION-TRACKER-TEMPLATE.md | Terminology | 17 verdict term replacements | 10 min |
| **P0** | gate-runner-spec.md | Terminology + ref | 18 verdict term replacements + Section 9 ref fix | 10 min |
| **P0** | artifact-builder-recipe-compose.md | Format + terminology | Standardize IMPROVEMENTS format + 2 "REFINE"->"IMPROVE" + delta floor note | 10 min |
| **P0** | artifact-builder-recipe-polish.md | Terminology | 1 "override SHIP to REFINE" fix | 5 min |
| **P0** | pa-weaver.md | Terminology | "pass >= 1" -> "iteration >= 1", fix "Refine agent" | 5 min |
| **P0** | gate-manifest.json | Structure | Add GR-65 to procedural OR remove from refs; add A-03 to utility tier | 10 min |
| **P0** | pa-manifest.md | Terminology | 3 verdict term replacements | 5 min |
| **P0** | pa-questions.md | Terminology | 2 "SHIP" -> "RELEASE" | 5 min |
| **P0** | experiment-protocol.md | Terminology | 1 verdict list fix | 2 min |
| **P1** | artifact-pa-protocol.md | Line counts | Update 4 stale line counts | 5 min |
| **P1** | artifact-gate-runner.md | Line counts | Update 5 stale line counts | 5 min |
| **P1** | artifact-routing.md | Equation | Update old convergence equation on line 189 | 5 min |
| **P1** | artifact-tc-brief-template.md | Threshold | Update bg delta floor to "20 RGB compositional floor" | 5 min |
| **P2** | check-consistency.js | New checks | 6 new check functions (~200 lines): section refs, terminology, dispositions, routing, thresholds, two-pass refs | 2 hours |
| **P2** | gate-runner-core.js | New gates | GR-84 (IMPROVEMENTS), GR-85 (hover), GR-88 (BV meta) | 3 hours |
| **P2** | pa-deployment.md | Mode scoring | Add mode-adjusted scoring note (~10 lines) | 10 min |
| **P3** | COMPLEXITY-BUDGET.md | New file | Budget tracking (~60 lines) | 20 min |

**Total P0 effort:** ~2.5 hours (primarily terminology migration)
**Total P1 effort:** ~20 minutes
**Total P2 effort:** ~5 hours
**Total P3 effort:** ~20 minutes

---

## 9. Comparison to v5-Audit Synthesis

The previous synthesis (`v5-audit/SYNTHESIS.md`) was produced by 8 agents with 3,309 lines total. This structural audit used 9 agents with approximately 19,000 lines (276KB) -- a 5.7x increase in depth.

### What Has Improved Since v5-Audit

| Item | v5-Audit State | Current State | Source |
|------|---------------|---------------|--------|
| Disposition split (D-01-D-05 vs D-01-D-06+D-09) | CRITICAL -- mismatch found, fixed | VERIFIED CLEAN -- routing verified across 5 files | crossref-integrity, pa-routing-audit |
| Gate count 54->56 | Fixed to 56 | VERIFIED -- 56 in manifest, 52 with executable code, 2 DIAGNOSTIC spec-only, 2 procedural | gate-coverage-audit |
| Tier breakdown consistency | Fixed to 21/14/10/2/8/1 | VERIFIED consistent | crossref-integrity |
| PA question routing | Not deeply audited | VERIFIED -- 69/69 clean, zero duplicates/orphans/phantoms | pa-routing-audit |
| Observer protocol file | Copied to pipeline dir | VERIFIED present (593 lines) | crack-defense-depth |
| IMPROVEMENTS comment in polish recipe | Added Step 5.8 | VERIFIED present but format INCONSISTENT with compose recipe | terminology-audit |
| Recipe constraint-to-playbook ratio | Identified as risk (7.9:1 historical) | VERIFIED healthy at 1:4.4 (95 constraint vs 420 recipe lines) | builder-input-sim |
| Crack dimension coverage | 5 STRONG, 5 ADEQUATE, 3 WEAK, 1 ABSENT | All WEAK/ABSENT have concrete fix proposals; estimated post-fix: 6 STRONG, 8 ADEQUATE, 0 WEAK, 0 ABSENT | crack-defense-depth |

### What Has Regressed or Was Newly Discovered

| Item | v5-Audit State | Current State | Source |
|------|---------------|---------------|--------|
| Verdict terminology | Not flagged as issue | 14 BLOCKING inconsistencies across 10 files | terminology-audit |
| Background delta contradiction | Not identified | BLOCKING -- recipe says 20, gate enforces 15, brief says 15 | builder-input-sim, recipe-traceability |
| IMPROVEMENTS format variants | Not identified (content added post v5-audit) | BLOCKING -- 3 incompatible formats | terminology-audit |
| GR-65 phantom gate | Not identified | BLOCKING -- referenced in 3 files, no manifest entry, no code | crossref-integrity |
| Pass A/B vs Pass 0/1 naming collision | Not identified | BLOCKING -- "pass >= 1" ambiguous in Weaver verdict logic | terminology-audit |
| 28.9% recipe instructions unverifiable | Not quantified | Measured -- 28 of 97 instructions have no gate or PA coverage | recipe-traceability |
| D3 vulnerability of BV suite | Not identified | Identified -- entire BV-01 through BV-08 outside GR-48 enforcement | gate-coverage-audit |
| 5 trivially gameable gates | Not quantified | Identified -- GR-63, GR-43, GR-50, GR-78, GR-83 pass with templates | gate-coverage-audit |
| Pass B add-only constraint unenforceable | Noted as "Pass B CSS specificity exploit" (ADVISORY) | Expanded -- no mechanism at all to detect Pass B modifying Pass A | recipe-traceability |
| Content Map single point of failure | Not identified | Identified -- J1 compression 100:1 with no cross-validation | info-flow-trace |

### Summary of Change

The v5-audit found and fixed MECHANICAL issues (gate counts, line counts, disposition split, missing files). This structural audit reveals ARCHITECTURAL issues that the mechanical audit could not detect:

1. **Terminology coherence** -- a system-wide consistency property that requires reading ALL files, not individual files
2. **Verification coverage** -- the gap between what recipes instruct and what gates/PA verify (28.9% unverifiable)
3. **Information flow integrity** -- the 11-junction compression funnel with 3 single points of failure
4. **Gaming vulnerability** -- 5 gates that pass with boilerplate templates
5. **Mode sensitivity** -- APPLIED vs COMPOSED paths are under-specified
6. **Historical regression defense** -- adversarial replay validates 95%+ prevention of known failures

The pipeline's mechanical integrity is STRONG. Its architectural integrity is ADEQUATE with specific, addressable gaps. The most urgent gap (terminology migration) is purely a consistency issue -- the design is correct, the implementation is incomplete.

---

## 10. Final Assessment

### Pipeline Readiness

| Criterion | Rating | Notes |
|-----------|--------|-------|
| Information flow architecture | STRONG | 11 junctions well-documented; compression ratios understood; isolation boundaries intentional |
| Cross-reference integrity | ADEQUATE | 13 broken/stale refs found; 3 BLOCKING (section numbers, GR-65); PA/disposition routing clean |
| Gate coverage | ADEQUATE | 52/56 have code; gates catch FLOOR violations but not quality; 5 gameable, 7 gaps identified |
| Builder input correctness | ADEQUATE | 1 BLOCKING contradiction (delta floor); context window safe (6-11%); recipe format healthy |
| Terminology consistency | WEAK | 14 BLOCKING inconsistencies from incomplete verdict rename; IMPROVEMENTS format mismatch |
| PA question routing | STRONG | 69/69 verified, 5 EXCELLENT + 4 GOOD auditor fit, cross-validation well-designed |
| Crack dimension defense | ADEQUATE | All WEAK/ABSENT have proposed fixes; post-fix projection: 6 STRONG, 8 ADEQUATE |
| Recipe traceability | ADEQUATE | 56.7% of instructions enforced or audited; 28.9% unverifiable (judgment calls) |
| Historical regression protection | STRONG | 100% Flagship defect prevention; Gas Town initial +0.5-1.0 PA-05 improvement projected |
| **OVERALL** | **ADEQUATE** | **Contingent on terminology migration (BLOCK-01)** |

### The Three-Action Gate

The pipeline is structurally sound and would produce better results than v3/v4 on any content. However, three actions are REQUIRED before the next run:

1. **Complete verdict terminology migration** -- without this, the Weaver-to-Orchestrator handoff may fail at runtime
2. **Fix MANIFEST section number mismatches** -- without this, agents navigating by section reference will land in the wrong place
3. **Resolve background delta floor contradiction** -- without this, builders receive contradictory instructions

After these three actions, the pipeline is ready for its next run with ADEQUATE structural integrity and STRONG protection against all known historical failure modes.

---

*Synthesis produced from exhaustive reading of 9 structural audit reports (276KB, ~19,000 lines) cross-referenced against the previous v5-audit synthesis (94 lines). 20 BLOCKING + 38 SIGNIFICANT + 36 ADVISORY items identified. 7 cross-cutting findings documented. 14 crack dimensions assessed with defense depth evidence.*
