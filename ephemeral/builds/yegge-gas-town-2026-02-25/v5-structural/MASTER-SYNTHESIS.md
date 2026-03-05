# Pipeline v5 Structural Audit — Master Synthesis

**Date:** 2026-02-26
**Synthesizer:** Opus agent (builder-input-sim)
**Input:** 9 audit reports from Tasks #1-#9
**Method:** Read all 9 reports, categorize findings, apply fixes where possible, re-run consistency checker

---

## Overall Structural Integrity Rating: 7/10

**Rationale:** The pipeline's structural skeleton is sound — gate IDs, PA question routing, file existence, and count consistency all pass (153/153 checks). The two critical weaknesses are: (1) a partially-applied terminology migration creating a dual-state that will confuse agents, and (2) gate coverage gaps that allow a programmatically-passing page to score PA-05 2.0/4. The first is fixable via search-and-replace; the second requires new gate implementations.

---

## Fixes Applied in This Session

| # | Fix | File(s) | Severity | Report |
|---|-----|---------|----------|--------|
| 1 | B-01: MANIFEST section table "SECTION 8: REFINE AND REBUILD PROTOCOLS" corrected to "SECTION 7 (Phase 4): VERDICT AND DECISION TREE" | MANIFEST.md L363 | BLOCKING | crossref-integrity |
| 2 | B-02: MANIFEST section table "SECTION 4: PHASE 2 — BUILDING" corrected to "SECTION 5 (Phase 2): TWO-PASS BUILDING" | MANIFEST.md L360 | BLOCKING | crossref-integrity |
| 3 | B-03: GR-65 added to gate-manifest.json as orchestrator-procedural check in iteration section | gate-manifest.json | BLOCKING | crossref-integrity |
| 4 | S-01: MANIFEST gate logic table references changed from artifact-gate-runner.md to gate-runner-spec.md | MANIFEST.md L801-803 | SIGNIFICANT | crossref-integrity |
| 5 | S-02: MANIFEST components.css line count corrected from ~1,195 to ~944 | MANIFEST.md L374 | SIGNIFICANT | crossref-integrity |
| 6 | S-03/S-04: MANIFEST pa-deployment.md (~363 to ~442) and pa-weaver.md (~455 to ~466) line counts corrected | MANIFEST.md L316-317 | SIGNIFICANT | crossref-integrity |
| 7 | S-05: artifact-pa-protocol.md redirect file — all 4 line counts corrected (~412→~431, ~237→~442, ~376→~466, ~151→~113) | artifact-pa-protocol.md | SIGNIFICANT | crossref-integrity |
| 8 | S-06: artifact-gate-runner.md redirect file — all 5 line counts corrected (~960→~2,930, ~80→~83, ~370→~300, ~280→~151, ~140→~344) | artifact-gate-runner.md | SIGNIFICANT | crossref-integrity |
| 9 | S-08: MANIFEST reference to "artifact-gate-runner.md Appendix A" changed to "gate-runner-provenance.md" | MANIFEST.md L308 | SIGNIFICANT | crossref-integrity |
| 10 | S-09: gate-runner-spec.md reference to "orchestrator Section 9" corrected to "Section 0 and Section 7" | gate-runner-spec.md L293 | SIGNIFICANT | crossref-integrity |
| 11 | S-09b: gate-manifest.json note "reclassified to orchestrator Section 9" corrected | gate-manifest.json | SIGNIFICANT | crossref-integrity |
| 12 | F-04: Background delta "FLOOR" terminology harmonized — recipe now says "BUILDER MINIMUM" (20 RGB) vs gate "FLOOR" (15 RGB) | artifact-builder-recipe-compose.md L115 | BLOCKING | builder-input-sim |

**Post-fix consistency check: 153/153 PASS (unchanged from baseline).**

---

## Master Issue List (All 9 Reports)

### CRITICAL — Would Cause Agent Failure During Execution

| # | Issue | Source Report | Status |
|---|-------|-------------|--------|
| C-01 | **Verdict terminology split:** 14 BLOCKING inconsistencies. pa-weaver.md issues RELEASE/POLISH/IMPROVE/RETHINK but orchestrator, tracker, gate-runner-spec, d10-observer all use SHIP/REFINE/REBUILD. ~200 search-and-replace operations across 10 files. | terminology-audit | **NOT FIXED** — requires scripted bulk rename with human review |
| C-02 | MANIFEST section table had 2 wrong orchestrator section references (B-01, B-02) | crossref-integrity | **FIXED** |
| C-03 | GR-65 referenced in 4 files but absent from gate-manifest.json (B-03) | crossref-integrity | **FIXED** |
| C-04 | Background delta floor contradiction: brief says 15, recipe says 20 (F-04) | builder-input-sim | **FIXED** (terminology harmonized) |
| C-05 | IMPROVEMENTS comment has 3 incompatible format variants (compose recipe, polish recipe, MANIFEST Appendix E) | terminology-audit | **NOT FIXED** — needs design decision on canonical format |

### SIGNIFICANT — Misleading But Won't Crash Execution

| # | Issue | Source Report | Status |
|---|-------|-------------|--------|
| S-01 | MANIFEST referenced artifact-gate-runner.md section names (now in gate-runner-spec.md) | crossref-integrity | **FIXED** |
| S-02 | MANIFEST components.css line count wrong (1,195 vs 944) | crossref-integrity | **FIXED** |
| S-03 | MANIFEST pa-deployment.md line count stale (363 vs 442) | crossref-integrity | **FIXED** |
| S-04 | MANIFEST pa-weaver.md line count stale (455 vs 466) | crossref-integrity | **FIXED** |
| S-05 | artifact-pa-protocol.md redirect — all 4 line counts stale | crossref-integrity | **FIXED** |
| S-06 | artifact-gate-runner.md redirect — all 5 line counts stale | crossref-integrity | **FIXED** |
| S-07 | MANIFEST quickstart "Section 4" ambiguous (MANIFEST vs orchestrator numbering) | crossref-integrity | NOT FIXED — cosmetic, add clarifying note |
| S-08 | MANIFEST referenced "artifact-gate-runner.md Appendix A" (now in provenance file) | crossref-integrity | **FIXED** |
| S-09 | gate-runner-spec.md and gate-manifest.json reference "orchestrator Section 9" (should be Section 0/7) | crossref-integrity | **FIXED** |
| S-10 | 28.9% of recipe instructions (28/97) have ZERO verification mechanism | recipe-traceability | NOT FIXED — requires new gates or PA question additions |
| S-11 | 7 gate coverage gaps: whitespace%, border count, typography distinctness, bg perceptibility, content density, mechanism count, emotional arc | gate-coverage-audit | NOT FIXED — requires new gate implementations |
| S-12 | GR-63 (Experiential Marker) is trivially gameable — builder can template a fake self-check | gate-coverage-audit | NOT FIXED — architectural concern, needs redesign |
| S-13 | GR-09 only requires 2 of 3 border weight tiers — page with ONLY 4px borders passes | gate-coverage-audit | NOT FIXED — gate logic change needed |
| S-14 | GR-10 has 9 sub-checks where ALL must pass — single skip-link absence = REBUILD even if page is otherwise excellent | gate-coverage-audit | NOT FIXED — needs sub-check decomposition |
| S-15 | Orchestrator "73-line constraint layer" claim is misleading (actual recipe is 833 lines) | builder-input-sim | NOT FIXED — documentation accuracy issue |
| S-16 | Disposition instructions (D-01 through D-09) are in LOW attention zone (final 20% of recipe) | builder-input-sim | NOT FIXED — structural recipe concern |
| S-17 | artifact-worked-examples.md (182 lines) is ORPHANED — referenced in Content Analyst prompt but not builder prompts | builder-input-sim | NOT FIXED — routing decision needed |
| S-18 | Content Map is single point of failure for all downstream content understanding (100:1 compression) | info-flow-trace | NOT FIXED — architectural concern |
| S-19 | Convergence equation stale in artifact-routing.md (old single-factor, missing convergence term) | terminology-audit | NOT FIXED — needs targeted edit |
| S-20 | check-consistency.js has 6 gap categories it cannot detect (section refs, verdict terms, dispositions, routing, thresholds, two-pass files) | crack-defense-depth | NOT FIXED — requires 6 new check functions |

### ADVISORY — Minor or Cosmetic

| # | Issue | Source Report | Status |
|---|-------|-------------|--------|
| A-01 | GR-33 and GR-34 have no executable code (diagnostic-only, counted in 56 total) | gate-coverage-audit | Acceptable — documented as diagnostic |
| A-02 | SKILL.md pa-weaver.md ~466 vs actual ~468 (within tilde tolerance) | crossref-integrity | Acceptable |
| A-03 | Mechanism catalog reference in recipe says "1,200+ lines" but actual is 751 | builder-input-sim | NOT FIXED — stale reference |
| A-04 | Recipe line count claim (~3,600 total builder input) is a broad range | builder-input-sim | NOT FIXED — estimate |
| A-05 | PA routing: 69/69 questions correctly assigned, zero issues | pa-routing-audit | N/A — clean |
| A-06 | GR-19 (threshold gaming) and GR-55 (multi-coherence) are ADVISORY but should be RECOMMENDED | gate-coverage-audit | NOT FIXED — tier reclassification decision |

---

## Cross-Report Synthesis: Key Themes

### 1. The Terminology Crisis Is the Single Biggest Structural Risk

The verdict rename (SHIP→RELEASE, REFINE→IMPROVE, etc.) was partially applied. 14 BLOCKING inconsistencies remain across 10 files. The Weaver will issue verdicts the orchestrator cannot recognize by string matching. This affects gate-runner-spec.md (GR-64), EXECUTION-TRACKER-TEMPLATE.md, d10-observer-protocol.md, and the orchestrator's own Sections 5-7.

**Recommendation:** Dedicated scripted migration. Create a terminology-migration.js that performs all ~200 replacements with context-aware rules (e.g., don't rename "SHIP" inside historical quotes or provenance notes).

### 2. Gates Measure Compliance, Not Quality

All 9 reports converge on this finding: programmatic gates are structurally sound for catching IDENTITY violations but weak at predicting PERCEPTUAL QUALITY. The Yegge Gas Town initial build passed ALL gates while scoring PA-05 2.0/4. Seven specific coverage gaps exist (GAP-01 through GAP-07), all measuring dimensions that correlate directly with PA-05 scores.

The gate-coverage-audit identifies the 5 highest-correlation gates:
1. BV-08 (Brief-Output Diff) — most predictive of quality
2. GR-51 (Bg Delta Distribution) — forces variation
3. GR-60 (WCAG Contrast) — illegibility is immediate
4. GR-18 (Ghost Mechanisms) — sub-perceptual = wasted
5. GR-09 (Border Weight Hierarchy) — structure perception

And the 5 lowest-correlation gates (pass for bad pages):
1. GR-63 (Experiential Marker) — trivially templatable
2. GR-50 (Conviction Statement) — trivially templatable
3. GR-43 (Self-Evaluation) — trivially templatable
4. GR-46 (Print Stylesheet) — no quality correlation
5. GR-08 (Decorative Elements) — misses pseudo-elements entirely

### 3. Recipe Traceability: 29% Unverifiable

28 of 97 recipe instructions have no gate, no PA question, and no output artifact to verify compliance. The most critical unverifiable instructions involve compositional judgment: metaphor derivation, density arc planning, transition type selection, component adaptation. These are exactly the instructions that differentiate FLOOR from CEILING output.

### 4. The Pipeline Would Have Prevented Historical Failures

The adversarial replay confirms high confidence (95%+) that v5 would have prevented the Flagship failure. All 5 specific defects and all 7 structural root causes are addressed. For the Yegge Gas Town initial build, v5 addresses the dark zone fatigue partially (D-09 quiet zone) and the floor-hugging partially (GR-19 + GR-51). The REFINE cycle success is well-defended.

### 5. Information Flow Compression Is Extreme

The info-flow-trace documents the full pipeline compression:
- Junction 1 (Content → Map): 100-150:1 compression
- Junction 2 (Map → Brief): 2.2-3.7:1 compression
- Junction 3 (Brief → HTML): Expansion (brief + references → output)
- Junction 4-6 (Gate → PA → Verdict): Various

The Content Map is the single point of failure for content understanding. The recipe compression (833 → ~90 lines in the brief) is 9.2:1, meaning detailed CSS examples and worked examples never reach the builder via the brief (but the builder receives reference files directly).

### 6. check-consistency.js Has 6 Blind Spots

The crack-defense-depth report identifies 6 categories the checker cannot detect:
1. Section/anchor reference integrity (28+ cross-references in MANIFEST alone)
2. Verdict terminology consistency (the dual-state problem)
3. Disposition assignment completeness (D-01 through D-09 to Pass A/B)
4. File routing table currency (stale redirect references)
5. Gate threshold cross-validation (15 RGB in gate vs 20 in recipe)
6. Two-pass file reference validation (old monolithic vs split names)

Proposed fix: 6 new check functions (Check 12-17). Priority: Check 13 (terminology) highest.

---

## Highest-Leverage Single Improvement

**Implement the verdict terminology migration (C-01).** This is the only CRITICAL issue that:
- Affects 10+ files and ~200 text locations
- Can be fully fixed via automated search-and-replace
- Has zero ambiguity about the correct outcome (old term → new term)
- Would unblock all other pipeline execution
- Is the most likely cause of an actual runtime failure (Weaver issues "RELEASE", orchestrator looks for "SHIP")

**Second highest:** Promote GR-19 (threshold gaming) and GR-55 (multi-coherence) from ADVISORY to RECOMMENDED tier. These two gates are the best available proxies for perceptual quality, and promoting them means 3+ RECOMMENDED failures trigger REBUILD — which catches the "technically passing, perceptually flat" pattern.

**Third highest:** Add the 6 new check-consistency.js functions (Check 12-17), especially Check 13 (verdict terminology). This would make the terminology migration self-verifying and prevent regression.

---

## Appendix: Report-by-Report Summary

| # | Report | File | Key Finding Count | Top Finding |
|---|--------|------|-------------------|-------------|
| 1 | Info Flow Trace | info-flow-trace.md | 8 junctions traced | Content Map = single point of failure (100:1 compression) |
| 2 | Cross-Reference Integrity | crossref-integrity.md | 3 BLOCKING, 10 SIGNIFICANT, 6 LOW | B-01/B-02 wrong section refs in MANIFEST (FIXED) |
| 3 | Gate Coverage Audit | gate-coverage-audit.md | 7 critical gaps, 4 moderate | Gates measure compliance not quality (all pass at PA-05 2.0/4) |
| 4 | Builder Input Simulation | builder-input-sim.md | 1 BLOCKING, 2 SIGNIFICANT, 7 MINOR | F-04 background delta floor contradiction (FIXED) |
| 5 | Terminology Audit | terminology-audit.md | 14 BLOCKING, 8 SIGNIFICANT, 11 MINOR | Dual verdict terminology state across 10 files |
| 6 | PA Routing Audit | pa-routing-audit.md | 0 issues | 69/69 correctly assigned, zero duplicates, zero orphans |
| 7 | Crack Defense Depth | crack-defense-depth.md | 6 checker gaps | check-consistency.js blind to section refs, verdict terms, dispositions, routing, thresholds, two-pass |
| 8 | Recipe Traceability | recipe-traceability.md | 28 unverifiable (29%) | Compositional judgment instructions have zero enforcement |
| 9 | Adversarial Replay | adversarial-replay.md | 95%+ Flagship prevention | v5 would prevent all 5 Flagship defects and all 7 root causes |
