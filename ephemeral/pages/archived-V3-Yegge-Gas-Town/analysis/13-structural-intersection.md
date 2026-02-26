# Structural Intersection Analysis: 57 Enrichments vs Pipeline Capacity & Anti-Loss Architecture

**Analyst:** structural-analyst (Opus 4.6)
**Date:** 2026-02-24
**Sources:**
1. `05-MASTER-ENRICHMENT-LIST.md` -- 57 enrichments (ME-001 through ME-057)
2. `06-enrichment-safety-analysis.md` -- per-artifact capacity thresholds, ~240 line budget
3. `03-anti-loss-map.md` -- 25 mechanisms mapped to files with fragility ratings
4. `12-implementation-style-guide.md` -- formatting patterns and regression prevention
5. `08-anti-loss-catalog.md` -- 25-mechanism catalog with effectiveness ratings

---

## PART 1: LINE BUDGET ANALYSIS

### Methodology

For each enrichment:
- **Lines ADDED** estimated from the "Exact proposed change" field in the master list
- **Lines REMOVED** estimated from REPLACE-type changes and explicit retirement instructions
- **Format multiplier** applied per the capacity model: binary+CSS = 0.5x, recipe = 1.0x, prose = 2.0x, judgment = 3.0x
- **Effective lines** = net lines x format multiplier (used for compliance impact assessment)

### Per-Enrichment Line Budget

#### TIER 1: Priority Inversion Fixes (ME-001 through ME-009)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-001 | pa-deployment.md | +22 | 0 | +22 | recipe | 22 |
| ME-002 | pa-weaver.md | +14 | 0 | +14 | recipe | 14 |
| ME-003 | gate-runner-core.js (+3 satellite) | +70 (code) +5 (manifest) +3 (spec) +5 (pa-questions) | 0 | +83 | binary+JS | 42 |
| ME-004 | artifact-builder-recipe.md | +12 | 0 | +12 | recipe | 12 |
| ME-005 | MANIFEST.md + gate-manifest.json + gate-runner-core.js | +10 +5 +15 | -8 (existing verdict text) | +22 | binary | 11 |
| ME-006 | pa-deployment.md + artifact-orchestrator.md | +25 +5 | -3 (CSS override replacement) | +27 | recipe | 27 |
| ME-007 | gate-runner-core.js | +15 | -5 (existing GR-44 logic replaced) | +10 | binary+JS | 5 |
| ME-008 | MANIFEST.md | +12 | 0 | +12 | recipe | 12 |
| ME-009 | pa-deployment.md + pa-weaver.md | +10 +5 | 0 | +15 | binary | 8 |

**Tier 1 subtotal:** +217 added, -16 removed, **+201 net**, 153 effective

#### TIER 2: Infrastructure Fixes (ME-010 through ME-023)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-010 | gate-runner-core.js + gate-manifest.json | +20 | -5 (split existing) | +15 | binary+JS | 8 |
| ME-011 | gate-runner-core.js | +10 | -8 (replace existing) | +2 | binary+JS | 1 |
| ME-012 | gate-runner-core.js | +8 | -5 (replace existing) | +3 | binary+JS | 2 |
| ME-013 | gate-runner-core.js | +5 | -3 (replace threshold) | +2 | binary+JS | 1 |
| ME-014 | gate-runner-core.js (+3 satellite) | +50 +3 +3 +3 | 0 | +59 | binary+JS | 30 |
| ME-015 | pa-deployment.md + pa-questions.md | +12 +8 | 0 | +20 | recipe | 20 |
| ME-016 | artifact-builder-recipe.md | +8 | 0 | +8 | recipe | 8 |
| ME-017 | MANIFEST.md | +15 | 0 | +15 | prose | 30 |
| ME-018 | artifact-gate-runner.md + gate-manifest.json | +8 +10 | 0 | +18 | binary | 9 |
| ME-019 | pa-weaver.md | +12 | 0 | +12 | recipe | 12 |
| ME-020 | artifact-orchestrator.md | +15 | 0 | +15 | recipe | 15 |
| ME-021 | pa-questions.md (+4 satellite) | +5 +2 +2 +2 +1 | 0 | +12 | binary | 6 |
| ME-022 | pa-questions.md (+4 satellite) | +5 +2 +2 +2 +1 | 0 | +12 | binary | 6 |
| ME-023 | pa-questions.md (+4 satellite) | +5 +2 +2 +2 +1 | 0 | +12 | binary | 6 |

**Tier 2 subtotal:** +205 added, -21 removed, **+184 net**, 154 effective

#### TIER 3: Gate Severity Restructure (ME-024 through ME-030)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-024 | gate-runner-core.js + gate-manifest.json | +3 | -3 (tier move) | 0 | binary | 0 |
| ME-025 | gate-runner-core.js + gate-manifest.json | +3 | -3 (tier move) | 0 | binary | 0 |
| ME-026 | gate-runner-core.js + gate-manifest.json | +3 | -3 (tier move) | 0 | binary | 0 |
| ME-027 | gate-runner-core.js + gate-manifest.json | +3 | -3 (tier move) | 0 | binary | 0 |
| ME-028 | gate-runner-core.js | +5 | -3 (threshold change) | +2 | binary+JS | 1 |
| ME-029 | gate-runner-core.js | +2 | -2 (threshold change) | 0 | binary+JS | 0 |
| ME-030 | gate-runner-core.js | +8 | -4 (schema addition) | +4 | binary+JS | 2 |

**Tier 3 subtotal:** +27 added, -21 removed, **+6 net**, 3 effective

#### TIER 4: PA Enrichments (ME-031 through ME-037)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-031 | pa-questions.md (+4 satellite) | +5 +2 +2 +2 +1 | 0 | +12 | binary | 6 |
| ME-032 | pa-questions.md | +3 | 0 | +3 | binary | 2 |
| ME-033 | pa-questions.md | +5 | 0 | +5 | recipe | 5 |
| ME-034 | pa-deployment.md | +3 | 0 | +3 | recipe | 3 |
| ME-035 | pa-questions.md | +1 | 0 | +1 | binary | 1 |
| ME-036 | pa-questions.md | +1 | 0 | +1 | binary | 1 |
| ME-037 | pa-questions.md (+4 satellite) | 0 | -20 (4 questions retired) | -20 | N/A | -10 |

**Tier 4 subtotal:** +18 added, -20 removed, **-2 net**, 8 effective (retirements count as negative)

#### TIER 5: Builder Recipe Improvements (ME-038 through ME-041)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-038 | artifact-builder-recipe.md | +3 | 0 | +3 | binary+CSS | 2 |
| ME-039 | artifact-builder-recipe.md | +8 | 0 | +8 | binary+CSS | 4 |
| ME-040 | gate-runner-core.js (+3 satellite) | +60 +3 +3 +3 | 0 | +69 | binary+JS | 35 |
| ME-041 | artifact-builder-recipe.md | +4 | 0 | +4 | recipe | 4 |

**Tier 5 subtotal:** +84 added, 0 removed, **+84 net**, 45 effective

#### TIER 6: Tracking + Documentation (ME-042 through ME-046)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-042 | MANIFEST.md | +3 | -3 (line count updates) | 0 | binary | 0 |
| ME-043 | EXECUTION-TRACKER-TEMPLATE.md | +5 | 0 | +5 | binary | 3 |
| ME-044 | artifact-pa-protocol.md | +10 | 0 | +10 | prose | 20 |
| ME-045 | artifact-orchestrator.md + MANIFEST.md | +10 +5 | 0 | +15 | prose | 30 |
| ME-046 | MANIFEST.md | +5 | 0 | +5 | recipe | 5 |

**Tier 6 subtotal:** +38 added, -3 removed, **+35 net**, 58 effective

#### TIER 7: Reservoir Value-System Corrections (ME-047 through ME-057)

| ID | Target File | Lines Added | Lines Removed | Net | Format | Effective |
|----|------------|-------------|---------------|-----|--------|-----------|
| ME-047 | artifact-builder-recipe.md | +4 | 0 | +4 | recipe | 4 |
| ME-048 | artifact-builder-recipe.md | +3 | 0 | +3 | recipe | 3 |
| ME-049 | artifact-builder-recipe.md | +3 | 0 | +3 | recipe | 3 |
| ME-050 | artifact-builder-recipe.md | +3 | 0 | +3 | recipe | 3 |
| ME-051 | pa-questions.md (+4 satellite) | +20 | -20 (4 retired, from ME-037) | 0 | binary | 0 |
| ME-052 | pa-deployment.md | +3 | 0 | +3 | recipe | 3 |
| ME-053 | artifact-builder-recipe.md | +4 | 0 | +4 | recipe | 4 |
| ME-054 | components.css / tokens.css | 0 | -13 (dead CSS) | -13 | N/A | -7 |
| ME-055 | pa-questions.md (+4 satellite) | +5 +2+2+2+1 | 0 | +12 | binary | 6 |
| ME-056 | artifact-builder-recipe.md | +20 | 0 | +20 | recipe | 20 |
| ME-057 | pa-weaver.md | +5 | 0 | +5 | recipe | 5 |

**Tier 7 subtotal:** +70 added, -33 removed, **+37 net (without ME-051 double-count)**, 44 effective

---

### File-Level Aggregation

| File | Current Lines | Safe Addition | Proposed Addition | Proposed Removal | Net Change | Status |
|------|--------------|---------------|-------------------|------------------|------------|--------|
| **gate-runner-core.js** | ~1,437 | **0 (net-zero mandatory)** | +259 | -44 | **+215** | **CRITICALLY OVER BUDGET** |
| **MANIFEST.md** | ~1,193 | +20 | +55 | -11 | **+44** | **OVER BUDGET by +24** |
| **artifact-builder-recipe.md** | ~934 | +50 | +72 | 0 | **+72** | **OVER BUDGET by +22** |
| **pa-deployment.md** | ~237 | +30 (PA protocol family) | +75 | -3 | **+72** | **OVER BUDGET by +42** |
| **pa-questions.md** | ~418 | +30 (PA protocol family) | +55 | -20 | **+35** | **OVER BUDGET by +5** |
| **artifact-orchestrator.md** | ~1,058 | +50 | +30 | 0 | **+30** | WITHIN BUDGET |
| **pa-weaver.md** | (split file) | +20 (estimated) | +36 | 0 | **+36** | **OVER BUDGET by +16** |
| **gate-manifest.json** | ~159 | +10 (estimated) | +24 | -12 | **+12** | **OVER BUDGET by +2** |
| **gate-runner-spec.md** | ~188 | +15 (estimated) | +12 | 0 | **+12** | WITHIN BUDGET |
| **EXECUTION-TRACKER-TEMPLATE.md** | ~328 | unlimited | +5 | 0 | **+5** | WITHIN BUDGET |
| **artifact-pa-protocol.md** | ~100 (estimated) | +15 (estimated) | +10 | 0 | **+10** | WITHIN BUDGET |
| **artifact-identity-perception.md** | ~556 | +20 | 0 | 0 | **0** | WITHIN BUDGET |
| **gate-runner-preconditions.md** | ~83 | +10 (estimated) | +6 | 0 | **+6** | WITHIN BUDGET |
| **pa-manifest.md** | ~89 | +10 (estimated) | +6 | 0 | **+6** | WITHIN BUDGET |
| **pa-guardrails.md** | ~151 | +10 (estimated) | 0 | 0 | **0** | WITHIN BUDGET |
| **components.css / tokens.css** | N/A | N/A | 0 | -13 | **-13** | SAFE (subtraction) |

### GRAND TOTAL: +659 added, -103 removed, **+556 net lines**

**Safe aggregate budget: ~240 lines. Proposed: +556 net. OVERSHOOT: +316 lines (2.3x over budget).**

---

### DEFER LIST: Enrichments That Must Wait

To bring the total within the ~240 line budget, the following enrichments must be DEFERRED until existing content is retired or the pipeline is restructured:

**MANDATORY DEFERRALS (gate-runner-core.js requires net-zero):**

| ID | Net Lines to gate-runner | Reason for Deferral |
|----|--------------------------|---------------------|
| ME-003 (GR-60 WCAG contrast) | +70 | New gate. Requires -70 subtraction first. Defer until gate consolidation (see Part 4). |
| ME-014 (GR-61 font size) | +50 | New gate. Requires -50 subtraction first. |
| ME-040 (GR-62 text overflow) | +60 | New gate. Requires -60 subtraction first. |

These 3 new gates account for +180 lines to gate-runner-core.js. **The gate runner MUST lose ~180+ lines before these can be added.** Per the safety analysis, subtraction candidates are GR-33 through GR-42 (~120 lines) + GR-08 (~30 lines) = ~150 lines. This creates capacity for only ONE of the three new gates after consolidation.

**Deferral recommendation:** Implement ME-003 (WCAG contrast) FIRST after subtraction -- it is BLOCKING severity and the single most impactful usability gate. ME-014 and ME-040 wait for a second round of consolidation.

**CAPACITY DEFERRALS (over budget for target file):**

| ID | Target File | Net | Reason |
|----|------------|-----|--------|
| ME-017 (Phase 4 fix application) | MANIFEST.md | +15 | MANIFEST at +44 vs +20 budget. Architectural change. |
| ME-044 (document experiential pass) | artifact-pa-protocol.md | +10 | Low priority (documentation). Effective lines = 20 (prose). |
| ME-045 (context budget awareness) | artifact-orchestrator.md + MANIFEST.md | +15 | Low priority (documentation). Effective lines = 30 (prose). |
| ME-056 (codify CSS patterns) | artifact-builder-recipe.md | +20 | Recipe at +72 vs +50 budget. Move to a NEW reference file instead. |
| ME-055 (anti-Goodhart question) | pa-questions.md | +12 | PA questions at +35 vs +30 budget. Defer until more retirements. |

**Deferrals remove ~72 net lines. Remaining: +556 - 72 = +484. Still over budget.**

**RECOMMENDED DEFERRALS (CONSIDER-severity, lowest leverage):**

| ID | Net | Rationale |
|----|-----|-----------|
| ME-047 through ME-050 (builder recipe guidance) | +13 | CONSIDER severity. Low individual impact. |
| ME-052 (audience description) | +3 | CONSIDER. Nice to have. |
| ME-053 (container exceptions) | +4 | CONSIDER. Contradicts NON-NEGOTIABLE constraint. |
| ME-057 (weaver emotional arc) | +5 | CONSIDER. Low impact. |

**Additional deferrals remove ~25 lines. Remaining: +484 - 25 = +459. STILL over budget.**

### THE UNCOMFORTABLE MATH

Even after deferring 11 enrichments, the remaining 46 enrichments propose +459 net lines against a ~240-line budget. This confirms the safety analysis finding: **at most 15-18 enrichments can be applied before a validation build.** The full 57-enrichment list requires at minimum 3 implementation waves with validation builds between them.

**The net-zero gate runner constraint is the binding constraint.** It alone prevents Tier 1's highest-impact items (ME-003, ME-007) and Tier 2's infrastructure fixes (ME-010 through ME-014) from being applied until subtraction happens.

---

## PART 2: ANTI-LOSS MECHANISM INTERACTION MATRIX

### Enrichments Rated CAUTION (19 total)

| ME-ID | Interacting Mechanisms | Interaction Type | Mitigation Assessment |
|-------|----------------------|-----------------|----------------------|
| **ME-002** | M-23 (REBUILD Not FIX), M-04 (context isolation) | MODIFYING -- changes existing priority hierarchy in pa-weaver.md | **ADEQUATE.** pa-weaver.md is ROBUST per anti-loss map. Change is the intended correction (the existing hierarchy IS the diagnosed problem). M-04 risk: verify no gate thresholds leak. Mitigation plan addresses this. |
| **ME-003** | M-19 (programmatic gates), M-13 (binary rules), M-08 (dual-route) | ADDITIVE to gate code, but in CRITICAL fragility file | **PARTIALLY ADEQUATE.** 6-location update checklist is correct but OMITS one critical step: verifying the new gate's result schema matches `{ gate, name, status, measured, threshold }`. Mitigation should add schema validation. |
| **ME-005** | M-23 (REBUILD Not FIX), M-13 (binary rules) | MODIFYING -- adds MECHANICAL exception to "any identity FAIL = REBUILD" | **ADEQUATE.** Auto-classification is binary (<=5 CSS lines AND no HTML AND no design decision). Gate runner classifies, not orchestrator. Removes discretion. Must verify verdict logic stays synchronized across 3 locations (gate-manifest.json L55-59, MANIFEST L275-285, gate-runner-core.js L752-778). |
| **ME-007** | M-19 (programmatic gates), M-14 (perception calibration) | MODIFYING -- changes existing GR-44 implementation | **ADEQUATE.** Preserving existing sub-check A and adding sub-check B is sound. Both measurements reported. Maintains result schema. |
| **ME-010** | M-08 (dual-route GR-05), M-06 (suppressor management) | MODIFYING -- splits GR-05 into GR-05a/GR-05b | **ADEQUATE.** isCold() unchanged. Opacity pre-filter BEFORE isCold check preserves existing behavior for visible elements. GR-05a stays REQUIRED. |
| **ME-011** | M-08 (dual-route GR-05/06 agreement), M-19 (gate verification) | MODIFYING -- replaces GR-06 string check with rendered font check | **PARTIALLY ADEQUATE.** `document.fonts.ready` dependency is correctly identified, but mitigation doesn't address: what if the browser doesn't have the font installed at all? `document.fonts.check()` returns false for uninstalled fonts, which would make ALL text fail. Must add fallback logic. |
| **ME-012** | M-19 (gate verification), M-14 (perception calibration) | MODIFYING -- restricts GR-14 scope to zone-level siblings | **ADEQUATE.** Parent-level scoping filter is the right approach. Must test against V3 HTML. |
| **ME-013** | M-19 (gate verification) | MODIFYING -- adjusts GR-09 tolerance bands | **ADEQUATE.** Audit of full code path with tolerance-first logic is correct. |
| **ME-014** | M-19 (programmatic gates), M-13 (binary rules) | ADDITIVE -- new gate in CRITICAL file | **PARTIALLY ADEQUATE.** Same 6-location pattern as ME-003. Same schema validation gap. Additionally, the SVG text check (`<text>` and `<tspan>`) needs special handling -- SVG elements have different sizing APIs than HTML elements. |
| **ME-017** | M-23 (REBUILD Not FIX) circuit breaker | MODIFYING -- adds third iteration type (Phase 4) | **INADEQUATE.** The mitigation says "update circuit breaker" but doesn't specify WHERE. MANIFEST L605 is one location. But circuit breaker is also referenced at MANIFEST L519-521 ("Maximum iterations: 1 REBUILD + 1 REFINE before requiring human review"). Both must be updated. More critically, this is an ARCHITECTURAL CHANGE that the red-line list (style guide Section 3) says requires a separate validation cycle. |
| **ME-021** | M-22 (9-auditor deployment), M-20 (fresh-eyes) | ADDITIVE -- new PA question requiring 5-location update | **ADEQUATE.** Load balance check correct (Auditor E at 6, can absorb 1). 5-location update checklist matches M-22 edit guidance. |
| **ME-022** | M-22 (9-auditor deployment), M-20 (fresh-eyes) | ADDITIVE -- new PA question | **ADEQUATE.** Same 5-location pattern. |
| **ME-023** | M-22 (9-auditor deployment), M-20 (fresh-eyes) | ADDITIVE -- new PA question | **ADEQUATE.** Same 5-location pattern. |
| **ME-024** | M-13 (binary rules) -- tier reclassification | MODIFYING -- reduces REQUIRED gate count | **ADEQUATE.** GR-07 checks invisible browser defaults. Downgrade preserves the check at RECOMMENDED tier. |
| **ME-025** | M-13 (binary rules) -- tier reclassification | MODIFYING -- reduces REQUIRED gate count | **ADEQUATE.** GR-12 monitors sub-perceptual range. GR-18 provides backstop. |
| **ME-030** | M-19 (gate verification), M-13 (meta-gates GR-48/GR-49) | MODIFYING -- changes result object schema | **PARTIALLY ADEQUATE.** Adding `viewport` as optional field preserves backwards compatibility. But GR-49 integrity check at L1377-1416 may hard-code expected fields. Must audit GR-49 code to verify it doesn't reject results with unexpected fields. |
| **ME-031** | M-22 (9-auditor deployment) | ADDITIVE -- new PA question | **ADEQUATE.** Same 5-location pattern. |
| **ME-037** | M-22 (9-auditor deployment), M-20 (fresh-eyes) | REMOVING -- retires 4 PA questions | **ADEQUATE but requires CAUTION.** Must verify retired questions are not referenced by: other PA questions (cross-references), pa-deployment.md assignments, pa-guardrails.md scoring rules, MANIFEST agent roster, pa-manifest.md checklist. Reverse 5-location checklist. |
| **ME-051** | M-22 (9-auditor deployment), M-20 (fresh-eyes) | REPLACING -- swaps 4 structural for 4 experiential | **ADEQUATE but DEPENDENT on ME-037.** Must be applied atomically with ME-037. The 5-location update is a swap (retire + add), not two independent operations. |

### Interaction Summary

| Interaction Type | Count | Risk Level |
|-----------------|-------|-----------|
| ADDITIVE (safe, new content) | 7 | LOW |
| MODIFYING (existing mechanisms changed) | 10 | MEDIUM |
| REMOVING (mechanisms reduced) | 1 | MEDIUM |
| REPLACING (swap old for new) | 1 | MEDIUM (must be atomic) |

### Mitigation Adequacy

| Rating | Count | Details |
|--------|-------|---------|
| ADEQUATE | 12 | Mitigation plan sufficient as-is |
| PARTIALLY ADEQUATE | 4 | ME-003 (schema gap), ME-011 (font install), ME-014 (SVG sizing), ME-030 (GR-49 field audit) |
| INADEQUATE | 1 | ME-017 (architectural change disguised as enrichment, circuit breaker location incomplete) |

**Recommendation for PARTIALLY ADEQUATE:** Add these specific mitigations:
- ME-003 and ME-014: Add `assert(result.gate && result.name && result.status && result.measured !== undefined && result.threshold)` validation comment to implementation
- ME-011: Add `if (!document.fonts.check('16px "Instrument Serif"')) { /* font not installed, use fallback logic */ }`
- ME-030: Audit GR-49 field expectations before implementation

**Recommendation for INADEQUATE:**
- ME-017: Reclassify as ARCHITECTURAL CHANGE. Do NOT implement as a standard enrichment. Requires its own validation cycle per style guide red-line #1.

---

## PART 3: STRUCTURAL CHANGE REQUIREMENTS

### Enrichments Requiring New Files

| ME-ID | New File Needed | Rationale | Impact |
|-------|----------------|-----------|--------|
| None | -- | All 57 enrichments target existing files | No new files required |

**Note:** ME-056 (codify CSS patterns) SHOULD be routed to a new reference file (e.g., `artifact-css-pattern-library.md`) to avoid overloading artifact-builder-recipe.md. This would require:
- New file creation: ~20 lines
- MANIFEST Section 3 routing table update: +1 row
- MANIFEST Appendix B positive routing: +1 row
- MANIFEST Appendix D file registry: +1 row
- MANIFEST Appendix E builder prompt template: +1 reference file insertion

### Enrichments Requiring File Splits

| ME-ID | Split Needed | Rationale |
|-------|-------------|-----------|
| None immediately | -- | No file exceeds the splitting threshold (compliance < 65%) due to enrichments alone |

**Warning:** gate-runner-core.js is already at 68% compliance. Adding ME-003 + ME-014 + ME-040 (+180 lines) without subtraction would push it toward ~62-64%, triggering the split threshold. The subtraction-before-addition constraint prevents this.

### Enrichments Requiring New Gate Functions (JS Code)

| ME-ID | Gate ID | Lines of JS | Function Location | Satellite Updates |
|-------|---------|-------------|-------------------|-------------------|
| ME-003 | GR-60 (WCAG contrast) | ~70 | `runWave2Gates()` or new `runUsabilityGates()` | GR-48 REQUIRED_GATES, gate-manifest.json, gate-runner-spec.md, MANIFEST |
| ME-005 | Modify verdict summary | ~15 | `runGateRunner()` L752-778 | gate-manifest.json L55-59, MANIFEST L275-285 |
| ME-007 | Modify GR-44 | ~15 (net +10) | Existing GR-44 in `runWave2Gates()` | None (same gate, modified logic) |
| ME-010 | Split GR-05 → GR-05a/GR-05b | ~20 | Existing GR-05 in `runGateRunner()` | GR-48 arrays (add GR-05b to ADVISORY), gate-manifest.json |
| ME-011 | Modify GR-06 | ~10 (net +2) | Existing GR-06 in `runGateRunner()` | None (same gate, modified logic) |
| ME-012 | Modify GR-14 | ~8 (net +3) | Existing GR-14 in `runAntiPatternGates()` | None |
| ME-013 | Modify GR-09 | ~5 (net +2) | Existing GR-09 in `runGateRunner()` | None |
| ME-014 | GR-61 (min font size) | ~50 | `runUsabilityGates()` or `runWave2Gates()` | GR-48 RECOMMENDED_GATES, gate-manifest.json, gate-runner-spec.md, MANIFEST |
| ME-028 | Modify GR-21 + GR-22 | ~5 (net +2) | Existing in `runAntiPatternGates()` | None |
| ME-029 | Modify GR-17 | ~2 (net 0) | Existing GR-17 | None |
| ME-030 | Modify GR-48 + GR-49 | ~8 (net +4) | Meta-gates in `runGateCoverage()` + `checkGateResultIntegrity()` | Result schema documentation |
| ME-040 | GR-62 (text overflow) | ~60 | `runUsabilityGates()` or `runWave2Gates()` | GR-48 RECOMMENDED_GATES, gate-manifest.json, gate-runner-spec.md, MANIFEST |

**Total JS changes:** 12 enrichments touch gate-runner-core.js. 3 are new gates, 8 modify existing gates, 1 modifies meta-gates.

### Enrichments Requiring PA Routing Changes

| ME-ID | Routing Change | Locations to Update |
|-------|---------------|---------------------|
| ME-001 | Add experiential pass section + U-01 question to ALL auditors | pa-deployment.md Section 2 (new section), question totals (all locations) |
| ME-021 | Add PA-80 to Auditor E | pa-questions.md, pa-deployment.md L42-52, MANIFEST L149-157, pa-manifest.md, question totals |
| ME-022 | Add PA-81 (route TBD -- multiple auditors or experiential pass) | Same 5 locations. Routing decision needed. |
| ME-023 | Add PA-54 to Auditor G | Same 5 locations |
| ME-031 | Add false affordance scan to Auditor E or H | Same 5 locations |
| ME-037 | Retire PA-06, PA-07(old), PA-09, PA-40 | Reverse 5-location update for each |
| ME-051 | Add PA-87, PA-99, NEW-07, NEW-17 | Same 5 locations; coordinate with ME-037 retirements |
| ME-055 | Add anti-Goodhart question | Same 5 locations |

**Total PA routing changes:** 8 enrichments require PA routing updates. ME-037 + ME-051 MUST be atomic (same operation). Total: 7 independent routing operations.

### Enrichments Requiring MANIFEST Routing Table Updates

| ME-ID | MANIFEST Section | Change |
|-------|-----------------|--------|
| ME-003 | Section 3 gate listing | Add GR-60 |
| ME-005 | L275-285 verdict logic | Add MECHANICAL exception |
| ME-008 | Phase 3B->3C handoff | Add usability circuit breaker |
| ME-014 | Section 3 gate listing | Add GR-61 |
| ME-017 | Phase structure | Add Phase 4 (if not deferred) |
| ME-040 | Section 3 gate listing | Add GR-62 |
| ME-042 | Line counts | Update components.css count |
| ME-046 | Screenshot protocol | Add correction protocol |

---

## PART 4: IMPLEMENTATION ORDER

### Binding Constraints

1. **Gate-runner-core.js is net-zero:** Subtraction MUST precede any gate addition
2. **ME-037 + ME-051 are atomic:** PA retirements and replacements in one operation
3. **ME-010 (GR-05 split) before ME-003 (GR-60):** Split establishes opacity-filtering pattern that GR-60 reuses
4. **ME-001 before ME-009:** Experiential pass protocol must exist before aggregation thresholds
5. **ME-006 before ME-015:** Screenshot validation must exist before data corruption escalation
6. **Brief-facing content (ME-047-050) AFTER capacity verified:** Builder recipe must stay under 1,000 lines
7. **All tier reclassifications (ME-024-027) after GR-48 array is understood:** Tier moves affect meta-gate

### Implementation Waves

#### WAVE 0: SUBTRACTION (Prerequisite -- Must Complete Before Any Addition)
**Purpose:** Create capacity in gate-runner-core.js and builder recipe

| Step | Action | Lines Freed | Cumulative |
|------|--------|-------------|------------|
| 0.1 | Remove GR-33 through GR-35 (Mode Advisory gates) from gate-runner-core.js → move content to artifact-orchestrator.md | -45 JS | -45 |
| 0.2 | Remove GR-36 through GR-39 (Experiment Tracking gates) from gate-runner-core.js → move to MANIFEST.md | -40 JS | -85 |
| 0.3 | Remove GR-40 through GR-42 (Policy Gates) from gate-runner-core.js → move to MANIFEST.md | -35 JS | -120 |
| 0.4 | Remove GR-08 spec text (no JS implementation exists) from gate-runner-core.js | -30 JS | -150 |
| 0.5 | Remove duplicate component patterns from artifact-builder-recipe.md | -20 md | -170 total |
| 0.6 | Update GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays to remove relocated gates | net 0 | -170 |
| 0.7 | Update gate-manifest.json to remove relocated gates from tiers/execution order | net 0 | -170 |

**Verification checkpoint:** gate-runner-core.js line count decreased by ~150. Builder recipe decreased by ~20. GR-48 passes self-check with updated arrays.

**Gate-runner capacity after Wave 0: +150 lines available (but net-zero goal means use ~150 for new content).**

---

#### WAVE 1: USABILITY PRIORITY INVERSION (Tier 1 BLOCKING -- non-gate enrichments)
**Purpose:** Fix the pipeline's value hierarchy at every stage
**Estimated net addition:** +92 lines across non-gate files
**Dependencies:** None (these don't touch gate-runner-core.js except ME-005, ME-007)

| Step | ME-ID | Target | Net Lines | Cluster(s) |
|------|-------|--------|-----------|------------|
| 1.1 | ME-001 | pa-deployment.md | +22 | Cluster 4 (PA Audit) |
| 1.2 | ME-002 | pa-weaver.md | +14 | None (ROBUST file) |
| 1.3 | ME-004 | artifact-builder-recipe.md | +12 | None (ROBUST file) |
| 1.4 | ME-006 | pa-deployment.md + orchestrator | +27 | Cluster 4 + 5 |
| 1.5 | ME-008 | MANIFEST.md | +12 | Cluster 5 (Routing) |
| 1.6 | ME-009 | pa-deployment.md + pa-weaver.md | +15 | Cluster 4 |
| 1.7 | ME-005 | MANIFEST + gate-manifest + gate-runner | +22 | Cluster 3 (Gate System) |
| 1.8 | ME-007 | gate-runner-core.js | +10 | Cluster 3 |

**Steps 1.1-1.6 can run in parallel** (independent files). **Steps 1.7-1.8 must be sequential** (gate-runner changes require coordinated satellite updates).

**Verification checkpoint:**
- pa-deployment.md: experiential pass section exists, screenshot validation gate exists
- pa-weaver.md: usability priority override present, aggregation thresholds present
- MANIFEST.md: usability circuit breaker present, verdict logic updated
- gate-runner-core.js: GR-44 trailing void fixed, verdict summary updated for MECHANICAL exception
- Run BV-03 mental check: all new brief-facing content uses recipe verbs

**Running total after Wave 1:** -170 (Wave 0) + 134 (Wave 1) = **-36 net lines** (under budget, good)

---

#### WAVE 2: GATE FIXES + USABILITY GATE (Tier 1-2 gate changes)
**Purpose:** Fix false positives, add WCAG contrast gate
**Estimated net addition:** +97 lines to gate-runner-core.js (stays within the -150 subtraction budget)
**Dependencies:** Wave 0 subtraction must be complete

| Step | ME-ID | Gate | Net to gate-runner | Type |
|------|-------|------|--------------------|------|
| 2.1 | ME-010 | GR-05 split (opacity filter) | +15 | MODIFY existing |
| 2.2 | ME-011 | GR-06 rendered font check | +2 | MODIFY existing |
| 2.3 | ME-012 | GR-14 zone-level scoping | +3 | MODIFY existing |
| 2.4 | ME-013 | GR-09 tolerance bands | +2 | MODIFY existing |
| 2.5 | ME-024 | GR-07 → RECOMMENDED | 0 | TIER MOVE |
| 2.6 | ME-025 | GR-12 → RECOMMENDED | 0 | TIER MOVE |
| 2.7 | ME-026 | GR-43 → RECOMMENDED | 0 | TIER MOVE |
| 2.8 | ME-027 | GR-19 → ADVISORY | 0 | TIER MOVE |
| 2.9 | ME-028 | GR-21/22 threshold adjust | +2 | MODIFY existing |
| 2.10 | ME-029 | GR-17 list item threshold | 0 | MODIFY existing |
| 2.11 | ME-030 | GR-48/49 viewport namespacing | +4 | MODIFY meta-gates |
| 2.12 | ME-003 | **GR-60 WCAG contrast (NEW)** | +70 | NEW GATE |

**Steps 2.1-2.4 can run in parallel** (modify independent existing gates). **Steps 2.5-2.8 in parallel** (tier moves). **Step 2.11 before 2.12** (meta-gate must handle new viewport field before new gate). **Step 2.12 last** (largest addition, depends on capacity from prior modifications).

**Verification checkpoint:**
- gate-runner-core.js net change: -150 (Wave 0) + 98 (Wave 2) = **-52 net** (WITHIN net-zero target, with buffer)
- GR-48 arrays: updated for tier moves (GR-07, GR-12, GR-43 moved out of REQUIRED; GR-19 to ADVISORY; GR-60 added to REQUIRED)
- gate-manifest.json: all tier classifications consistent with GR-48 arrays
- gate-runner-spec.md: GR-60 specification row added
- Run GR-48 mental check: REQUIRED count decreased by 3 (moved), increased by 1 (GR-60) = net -2

**Running total after Wave 2:** -36 (after Wave 1) + 98 (gate-runner additions) + 18 (satellite files) = **+80 net lines**

---

#### WAVE 3: PA ENRICHMENTS (Tier 2-4 PA changes)
**Purpose:** Improve what the PA measures, retire low-value questions
**Estimated net addition:** +48 lines across PA files
**Dependencies:** ME-001 (experiential pass) from Wave 1 must be complete

| Step | ME-ID | Action | Net |
|------|-------|--------|-----|
| 3.1 | ME-037 + ME-051 | **ATOMIC:** Retire 4 questions, add 4 experiential replacements | 0 (swap) |
| 3.2 | ME-021 | Add PA-80 (navigation usability) to Auditor E | +12 |
| 3.3 | ME-022 | Add PA-81 (information extraction) | +12 |
| 3.4 | ME-023 | Add PA-54 (content promise vs delivery) | +12 |
| 3.5 | ME-015 | Add data corruption escalation protocol | +20 |
| 3.6 | ME-031 | Add false affordance scan | +12 |
| 3.7 | ME-032 | Mark pipeline-introspection questions | +3 |
| 3.8 | ME-033 | Add void question deduplication | +5 |
| 3.9 | ME-034 | Add defect-bypass for cross-viewport | +3 |
| 3.10 | ME-035 | Footer/header contrast note on PA-02 | +1 |
| 3.11 | ME-036 | Horizontal scroll element-level note | +1 |
| 3.12 | ME-019 | PA-05 score as range | +12 |

**Step 3.1 FIRST and ALONE** (atomic swap affects auditor load balance, must verify before adding more). **Steps 3.2-3.4 in parallel** (new questions, independent auditors). **Steps 3.5-3.11 in parallel** (modifications to existing questions/protocols, independent).

**Verification checkpoint:**
- Total PA question count: 65 - 4 (retired) + 4 (replacements) + 3 (new) + 1 (affordance) = **69** questions
- Auditor load balance: verify no auditor exceeds 12 questions
- pa-deployment.md assignment table: all new questions assigned
- pa-manifest.md: checklist updated
- MANIFEST L149-157: agent roster updated
- Question count totals consistent across ALL 3+ locations

**Running total after Wave 3:** +80 + 81 = **+161 net lines**

---

#### WAVE 4: BUILDER RECIPE + NON-GATE INFRASTRUCTURE (Tiers 2, 5, 6)
**Purpose:** Improve builder instructions and tracking
**Estimated net addition:** +65 lines
**Dependencies:** None strict (independent of Waves 2-3)

| Step | ME-ID | Target | Net |
|------|-------|--------|-----|
| 4.1 | ME-016 | ARIA accessibility (builder recipe) | +8 |
| 4.2 | ME-038 | px-only border width (builder recipe) | +3 |
| 4.3 | ME-039 | html color + font stack boilerplate (builder recipe) | +8 |
| 4.4 | ME-041 | Trailing void prevention (builder recipe) | +4 |
| 4.5 | ME-018 | Gate perceptibility column (gate-manifest.json) | +18 |
| 4.6 | ME-020 | Orchestrator self-assessment (artifact-orchestrator.md) | +15 |
| 4.7 | ME-042 | MANIFEST line count updates | 0 |
| 4.8 | ME-043 | Execution tracker fields | +5 |
| 4.9 | ME-046 | Screenshot correction protocol (MANIFEST) | +5 |

**Steps 4.1-4.4 in parallel** (all builder recipe additions). **Steps 4.5-4.9 in parallel** (independent files).

**Verification checkpoint:**
- artifact-builder-recipe.md line count: +23 net (within +50 safe budget after Wave 0 subtraction)
- All new recipe content uses recipe verbs (Build/Create/Deploy/Assess)
- No gate thresholds in builder-facing content
- gate-manifest.json: perceptibility column does not change tier classifications

**Running total after Wave 4:** +161 + 66 = **+227 net lines** (approaching ~240 budget)

---

#### WAVE 5: DEFERRED / CONDITIONAL (Only if Validation Build Succeeds)
**Purpose:** Apply remaining enrichments after proving Waves 1-4 didn't break anything
**Prerequisite:** Run a full pipeline validation build and verify compliance holds

**Wave 5a: Second gate addition (if gate-runner has remaining capacity)**

| Step | ME-ID | Gate | Net |
|------|-------|------|-----|
| 5a.1 | ME-014 | GR-61 (minimum font size) | +59 |

**Only if:** gate-runner-core.js net change after Waves 0+2 is still <= -50 (i.e., at least 50 lines of headroom remain).

**Wave 5b: Remaining CONSIDER items**

| Step | ME-ID | Target | Net |
|------|-------|--------|-----|
| 5b.1 | ME-047 | 3 background registers (builder recipe) | +4 |
| 5b.2 | ME-048 | Unique element per zone (builder recipe) | +3 |
| 5b.3 | ME-049 | Dark moments (builder recipe) | +3 |
| 5b.4 | ME-050 | Spacing compression range (builder recipe) | +3 |
| 5b.5 | ME-052 | Audience description (pa-deployment) | +3 |
| 5b.6 | ME-053 | Container width exceptions (builder recipe) | +4 |
| 5b.7 | ME-054 | Remove dead CSS (components/tokens) | -13 |

**Wave 5c: Permanently deferred**

| ME-ID | Reason |
|-------|--------|
| ME-017 (Phase 4) | Architectural change. Requires separate validation cycle. |
| ME-040 (GR-62 text overflow) | Third new gate. Gate runner cannot absorb without SECOND round of subtraction. |
| ME-044 (document experiential) | Low-priority prose documentation. High effective-line cost. |
| ME-045 (context budget awareness) | Low-priority prose documentation. |
| ME-055 (anti-Goodhart question) | PA question budget fully consumed by Waves 3. |
| ME-056 (CSS pattern library) | Requires new file creation. Route to separate reference file. |
| ME-057 (weaver emotional arc) | Low impact CONSIDER item. |

---

### Implementation Order Summary

```
Wave 0: SUBTRACT              (prerequisite, -170 lines)
Wave 1: USABILITY INVERSION   (8 enrichments, +134 lines, Tier 1 BLOCKING)
Wave 2: GATE FIXES + GR-60    (12 enrichments, +116 lines, Tiers 1-3)
  --- VALIDATION BUILD ---
Wave 3: PA ENRICHMENTS         (12 enrichments, +81 lines, Tiers 2-4)
Wave 4: BUILDER RECIPE + DOCS  (9 enrichments, +66 lines, Tiers 2-6)
  --- VALIDATION BUILD ---
Wave 5: CONDITIONAL/DEFERRED   (8+ enrichments, conditional on results)
```

**Total enrichments in Waves 0-4:** 41 of 57 (72%)
**Total deferred:** 7 permanently, 9 conditionally
**Total net lines Waves 0-4:** -170 + 134 + 116 + 81 + 66 = **+227 lines** (within ~240 budget)
**Gate-runner-core.js net:** -150 + 10 + 98 = **-42 lines** (net NEGATIVE, as required)

---

### Critical Path

```
Wave 0 (subtraction) ─┬─> Wave 1 (non-gate BLOCKING) ──> Wave 3 (PA changes)
                       │                                         │
                       └─> Wave 2 (gate fixes + GR-60) ─────────┤
                                                                  │
                                                        Wave 4 (recipe + docs)
                                                                  │
                                                     VALIDATION BUILD
                                                                  │
                                                     Wave 5 (conditional)
```

**Waves 1 and 2 can run in PARALLEL after Wave 0.** Wave 3 depends on Wave 1 (experiential pass must exist). Wave 4 is independent. Validation build gates entry to Wave 5.

---

*Analysis complete. 57 enrichments analyzed across 4 dimensions: line budget (Part 1), anti-loss interaction (Part 2), structural requirements (Part 3), and implementation ordering (Part 4). Key findings: total proposal is 2.3x over budget; gate-runner subtraction is the binding constraint; 41/57 enrichments fit in Waves 0-4 within budget; 7 are permanently deferred (architectural changes or budget exhaustion); ME-017 is misclassified as enrichment (it is an architectural change).*
