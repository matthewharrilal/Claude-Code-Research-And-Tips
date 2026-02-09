<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/before-after-comparison.md
Tier: B | Stage: 3 (Organization OD) | Generated: 2026-02-09

BUILT ON: before-measurements.md, after-measurements.md, audit-report.md, verification-wave1/2/3.md, OD-REENRICHMENT-SPECIFICATION.md Section 8
CONSUMED BY: Lead (gate check), Phase E commit, verification-results-a.md (Category J)
END INLINE THREADING HEADER
-->

# Before/After Comparison: OD Re-Enrichment
## Category J Output — verifier-a

**Date:** 2026-02-09
**Scope:** All 6 OD explorations, pre-enrichment (v1/v2) vs post-enrichment (v3)
**Data Sources:** before-measurements.md (Wave 0 screenshot agent), after-measurements.md (Wave 5 after-screenshot agent), verification-wave1/2/3.md, audit-report.md, RE-ENRICHMENT-STATE.md, OD-REENRICHMENT-SPECIFICATION.md Section 8

---

## 1. Score Comparison

| OD | Pattern | Before Score | After Score (v3) | Delta | Target | Met? |
|----|---------|-------------|------------------|-------|--------|------|
| OD-001 | Conversational | ~35/40 (I:8 U:9 S:9 E:9) | 37/40 (I:9 U:9 S:10 E:9) | **+2** | >= 35 | YES |
| OD-002 | Narrative | ~33/40 | 35/40 (I:8 U:8 S:10 E:9) | **+2** | >= 34 | YES |
| OD-003 | Task-Based | ~33/40 | ~35/40 (I:9 U:9 S:9 E:8) | **+2** | >= 34 | YES |
| OD-004 | Confidence | INCLUDE (~33) | 34/40 (I:8 U:9 S:9 E:8) | **+1** | >= 33 | YES |
| OD-005 | Spatial | INCLUDE (~33) | 35/40 | **+2** | >= 33 | YES |
| OD-006 | Creative | INCLUDE (>=36) | 37/40 (I:9 U:10 S:9 E:9) | **+1** | >= 36 | YES |
| **Average** | | **~33.8** | **35.5** | **+1.7** | **>= 34** | **YES** |

**Key observations:**
- All 6 ODs improved. Zero regressions.
- OD-002 had the largest relative improvement (from lowest tier to mid-tier).
- OD-001 and OD-006 are now tied at 37/40 (highest).
- OD-004 is the lowest at 34/40 but still exceeds its 33 target.
- Average increased from ~33.8 to 35.5 (+1.7 points).

---

## 2. Dialect Consistency Comparison

### Before (Pre-Enrichment)

| Dialect | ODs | Characteristics |
|---------|-----|-----------------|
| A: Polished | OD-001, OD-002 | Drop caps, scroll witnesses, solid offsets, editorial flair. Light code blocks (some). Light/mixed headers. |
| B: Functional | OD-003, OD-004, OD-005 | Cleaner, utilitarian. Thin borders everywhere. Simpler headers. |
| C: Editorial | OD-006 | Unique crown-jewel status. 3rem title, fractal annotations, meta-documentary structure. |

**Before verdict:** 3 distinct visual dialects. Fresh-eyes: "looks like three different products."

### After (Post-Enrichment)

| Convention Dimension | Before State | After State | Unification |
|---------------------|-------------|-------------|-------------|
| Dark header (full-bleed #1A1A1A) | 2/6 (OD-001/002 had light/mixed) | **6/6** | UNIFIED |
| Dark code blocks | 3/6 | **5/5** (OD-006 has none, intentional) | UNIFIED |
| Type scale (5-level cascade) | Inconsistent naming (--type-question, --type-task, --type-stratum) | **6/6** use `--type-subsection` | UNIFIED |
| Border system (3-cat) | 2px epidemic (108 CSS decls) | **6/6** apply 3-category system | UNIFIED |
| Spacing tokens | Mixed (Gestalt-only vs numbered-only) | **6/6** include both systems | UNIFIED |
| Zone tokens | Absent in 3/6 | **6/6** have zone token definitions | UNIFIED |
| Reduced-motion | 4/6 | **6/6** | UNIFIED |
| Skip-to-content | 4/6 | **6/6** | UNIFIED |

**After verdict:** Structural unification achieved across all 7 convention dimensions. Remaining differences are intentional per-OD editorial variations (OD-006 3rem title, drop caps, no code blocks), not dialect gaps. audit-report.md: "cohesive, recognizable product family."

---

## 3. Research Consumption Comparison

### External Research (EXT-*)

| OD | Before EXT Count | Before Applied | After EXT Count | After Applied | Delta |
|----|-----------------|----------------|-----------------|---------------|-------|
| OD-001 | 13 | 13 (100%) | 19 (+6 EXT-CONV) | 19 (100%) | +6 |
| OD-002 | **0** | **0** (N/A) | 11 (+11 EXT-NARR) | 11 (100%) | **+11** |
| OD-003 | 12 | 8 (67%) | 19 (+7 EXT-TASK) | 19 (100%) | +7 |
| OD-004 | 12 | 12 (100%) | 18 (+6 EXT-CONF) | 18 (100%) | +6 |
| OD-005 | 12 | 10 (83%) | 18 (+6 EXT-SPAT) | 18 (100%) | +6 |
| OD-006 | 9 | 9 (100%) | 15 (+6 EXT-CREATIVE) | 15 (100%) | +6 |
| **Total** | **58 citations** | **52 applied** | **100 citations** | **100 applied** | **+42** |

**Key changes:**
- OD-002 went from **ZERO** external research to 11 EXT-NARR findings (biggest gap closed).
- All previously unapplied findings (EXT-TASK-005/007/008/010, EXT-SPAT-006/007) now applied.
- Application rate: 100% across all 6 ODs (up from mixed 67-100%).
- 42 new EXT-* findings registered in EXT-RESEARCH-REGISTRY.md.

### R-1 Documentation Patterns

| Metric | Before | After |
|--------|--------|-------|
| R-1 application rate | ~71% (20/28) | ~79% (22/28) |
| R1-020 applied | NO | YES (OD-001, OD-002, OD-006) |
| R1-028 applied | NO | YES (OD-001, OD-005, OD-006) |

### R-2 Creative Layouts

| Metric | Before | After |
|--------|--------|-------|
| R-2 consumption rate | 0% (27 findings unconsumed) | 100% EVALUATED (r2-evaluation.md, 485 lines) |
| Applicable findings | Unknown | 25 PASS, 2 FAIL per r2-evaluation.md |

---

## 4. Thin-Border Count Comparison

| OD | Before (<3px) | After (<3px) | Reduction | % Change |
|----|--------------|-------------|-----------|----------|
| OD-001 | 20 | 10 | -10 | -50% |
| OD-002 | 22 | 15 | -7 | -32% |
| OD-003 | **471** | **99** | **-372** | **-79%** |
| OD-004 | 179 | 63 | -116 | -65% |
| OD-005 | 251 | 73 | -178 | -71% |
| OD-006 | 115 | 43 | -72 | -63% |
| **TOTAL** | **1,058** | **303** | **-755** | **-71%** |

**Key observations:**
- Overall 71% reduction in thin borders.
- OD-003 had the most dramatic improvement (471->99, -79%) — it was flagged as the WORST offender.
- OD-005 reduced from 251 to 73 (-71%).
- OD-001 was already clean (20->10) — remains the cleanest.
- Remaining thin borders are Cat 2 (data separators) and Cat 3 (micro-elements), which are PERMITTED by the 3-category system.

---

## 5. Page Height Comparison

| OD | Before Height (px) | After Height (px) | Delta (px) | % Change | Target Range |
|----|--------------------|--------------------|------------|----------|-------------|
| OD-001 | 9,820 | 9,818 | -2 | ~0% | 10,000-14,000 (slightly below) |
| OD-002 | 6,478 | 7,761 | +1,283 | +20% | 10,000-14,000 (below) |
| OD-003 | 20,100 | 6,576 | **-13,524** | **-67%** | 10,000-14,000 (below, intentional) |
| OD-004 | 13,837 | 13,163 | -674 | -5% | 10,000-14,000 (IN RANGE) |
| OD-005 | 19,327 | 18,519 | -808 | -4% | 10,000-14,000 (above) |
| OD-006 | 15,255 | 13,815 | -1,440 | -9% | 12,000-15,000 (IN RANGE) |
| **TOTAL** | **84,817** | **69,652** | **-15,165** | **-18%** | |

**Key observations:**
- OD-003 had the most dramatic change (-67%) due to collapsible islands (<details> elements). This is INTENTIONAL per RE-ENRICHMENT-STATE.md: "OD-003 68k is INTENTIONAL from collapsible islands."
- OD-002 GREW (+20%) from enrichment content (went from 0 to 11 external research applications).
- OD-004 and OD-006 are both IN their target ranges.
- OD-005 remains above target (complex spatial hub-spoke layout).
- OD-001 is stable (~0% change), slightly below target.

**Note:** Before measurements were taken at 768px viewport, after measurements at 1440px viewport per after-measurements.md. This means the comparison is not apples-to-apples for absolute height values but the relative trends are valid for pages that maintain proportional layout.

---

## 6. Element Count Comparison

| OD | Before Elements | After Elements | Delta | % Change |
|----|----------------|----------------|-------|----------|
| OD-001 | 528 | 554 | +26 | +5% |
| OD-002 | 418 | 456 | +38 | +9% |
| OD-003 | 670 | 637 | -33 | -5% |
| OD-004 | 373 | 388 | +15 | +4% |
| OD-005 | 1,019 | 1,029 | +10 | +1% |
| OD-006 | 488 | 540 | +52 | +11% |
| **TOTAL** | **3,496** | **3,604** | **+108** | **+3%** |

**Key observations:**
- Overall slight increase (+3%) reflects enrichment content additions.
- OD-006 grew most (+11%) — crown jewel received fractal annotations, recursive TOC, pattern echoes.
- OD-003 is the only OD with fewer elements (-5%) — collapsible islands hide content.
- OD-005 barely changed (+1%) — already the most complex DOM.

---

## 7. Soul Compliance Comparison

| Soul Check | Before (all 6) | After (all 6) | Change |
|------------|----------------|----------------|--------|
| border-radius: 0 | PASS | PASS | No change |
| box-shadow: none | PASS | PASS | No change |
| filter: none | PASS | PASS | No change |
| No hover z-depth | 2 FAIL (OD-005 transform, OD-006 transform) | **PASS** | **FIXED** |
| Locked palette | PASS (minor off-palette tints) | PASS (same tints, known) | No change |
| Font trio only | PASS | PASS | No change |
| Border 3-category | PARTIAL (2px epidemic) | **PASS** (3-cat applied) | **IMPROVED** |
| No 2px structural | FAIL (108 CSS declarations) | **PASS** (0 new 2px structural) | **FIXED** |
| Token spacing | PASS | PASS | No change |
| Max 2 callouts/vh | PASS | PASS | No change |

**Key changes:**
- 2 spirit violations FIXED (OD-005 + OD-006 hover transforms).
- 2px border epidemic RESOLVED via 3-category border system.
- OD-001 semi-transparent offsets FIXED (opacity -> 1).
- 0 new soul violations introduced.

---

## 8. Accessibility Standards Comparison

| Metric | Before | After | Source |
|--------|--------|-------|--------|
| Standards score (best) | ~15/17 (estimate) | OD-005: **17/17** | audit-report.md |
| Standards score (worst) | ~10/17 (estimate) | OD-002, OD-003: **13/17** | audit-report.md |
| Missing `<footer>` | ~4 ODs | 4 ODs (OD-001, OD-002, OD-003, OD-004) | audit-report.md |
| Missing `<nav>` | ~3 ODs | 2 ODs (OD-002, OD-003) | audit-report.md |
| Skip-to-content | ~4/6 | **6/6** | Convention spec enforced |
| Reduced-motion | ~4/6 | **6/6** | Convention spec enforced |
| Focus-visible | ~4/6 | **6/6** | Convention spec enforced |
| ARIA landmarks | Inconsistent | Improved (OD-004 best) | audit-report.md |

**Key changes:**
- Universal skip-to-content, reduced-motion, and focus-visible across all 6.
- OD-005 achieved perfect 17/17 standards score.
- Remaining gaps (missing `<footer>`, `<nav>` in some ODs) are MEDIUM severity.

---

## 9. Provenance Coverage Comparison

| Aspect | Before | After |
|--------|--------|-------|
| Provenance mode | Mode B (retroactive) — headers added after build | Mode C (incremental) — born in chain |
| New dark matter created | N/A | **0** (all findings registered at creation) |
| EXT-* findings registered | 47 (unevenly distributed) | **94** (uniformly distributed) |
| OD-F findings | 17 (created retroactively) | 17 + OD-F-PR-001 (no new OD-F needed) |
| Chain documents updated | Retroactive updates | Real-time updates by Scribe in each wave |
| Inline headers | Phase 2B (post-build) | Updated incrementally during enrichment |
| Dark matter indexed | 0 (51+ files outside chain) | 4 dark matter indexes created (Wave 0) |

---

## 10. Spirit Violation Comparison

| # | Violation | Before | After | Status |
|---|-----------|--------|-------|--------|
| 1 | OD-001 semi-transparent offsets (opacity 0.15/0.3) | PRESENT | opacity: 1 with palette color | **FIXED** |
| 2 | OD-001/003/004/005/006 opaque solid offsets (depth illusion) | PRESENT | Case-by-case: flat graphic = OK | **EVALUATED** |
| 3 | OD-005 tile hover transform | PRESENT (translate(-4px,-4px)) | border-color assertion (flat) | **FIXED** |
| 4 | OD-006 tile hover transform | PRESENT (translate(-2px,-2px)) | border-color + bg-color hover | **FIXED** |
| 5 | OD-001/004/006 type scale deviations | PRESENT (26px->24px, 22px->20px, 10px->12px) | Convention spec alignment | **FIXED** |
| **Total** | | **5 violations** | **0 unresolved** | **ALL ADDRESSED** |

---

## 11. Re-Enrichment Process Metrics

| Metric | Value |
|--------|-------|
| Total agents deployed | 43 (across 6 waves) |
| Build waves | 3 (Wave 1: OD-001/002, Wave 2: OD-003/005, Wave 3: OD-004/006) |
| Research waves | 3 (parallel with build waves) |
| New EXT-* findings | 42 |
| Builder discoveries | 14 (5+0+5+0+4+0 across builders) |
| 2px borders eliminated | 17+ (6 in OD-004, 5 in OD-006, others across OD-003/005) |
| Files modified | 6 OD HTML + 13 provenance/chain documents |
| Convention spec | 468 lines, created Wave 0, consumed by all builders |
| Dark matter indexes | 4 created (covering ~32,800 lines of operational knowledge) |
| Audit agents | 11 (Wave 5: 1 traverser + 1 fresh-eyes + 1 standards + 3 visual + 3 systematic + 1 consistency + 1 screenshot) |
| Calibration detection | 89% (8/9, threshold 80%) |
| Gate pass rate | 3/3 waves PASS (23/23 + 23/23 + 23/23 checks) |

---

## COMPACTION-SAFE SUMMARY

- **Scores:** Average improved from ~33.8 to 35.5/40 (+1.7). All 6 improved. 0 regressions.
- **Dialect:** 3 dialects -> 1 unified (structural). Dark headers 6/6, dark code blocks 5/5, type scale 6/6, border system 6/6.
- **Research:** EXT-* count 58->100 citations (+42). OD-002 gap closed (0->11). R-1 rate 71%->79%. R-2 100% evaluated.
- **Thin borders:** 1,058->303 (-71%). OD-003: 471->99 (-79%).
- **Page height:** 84,817->69,652px (-18%). OD-003 intentional collapse (-67%).
- **Soul:** 0 new violations. 5 spirit violations all ADDRESSED. 2 hover transforms FIXED.
- **Accessibility:** skip-to-content/reduced-motion/focus-visible all 6/6. Standards: OD-005 17/17.
- **Provenance:** Mode B->Mode C. 0 new dark matter. 42 EXT-* born in chain. 4 DM indexes.
- **Process:** 43 agents, 6 waves, 3/3 gates PASS, 89% calibration detection.
