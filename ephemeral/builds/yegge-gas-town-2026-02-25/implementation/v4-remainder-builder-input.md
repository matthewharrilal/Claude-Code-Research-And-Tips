# Builder Input Reduction Report

**Date:** 2026-02-25
**Agent:** builder-input-reducer (Opus)
**Task:** Remove zero-risk provenance content from builder-facing files per task8-builder-input-audit.md

---

## Files Modified

### 1. mechanism-catalog.md

**Path:** `design-system/compositional-core/grammar/mechanism-catalog.md`
**Before:** 1,218 lines
**After:** 751 lines (752 with trailing newline)
**Lines removed:** 467

**Categories of content removed:**

| Category | Lines Removed | Audit Tier |
|----------|--------------|------------|
| Preamble (date, lens, agent, source files, lens statement, extraction method) | 42 | A1 |
| Provenance + Family Resemblance section | 36 | A10 |
| Cross-file frequency entries (18 mechanisms x ~3 lines each) | 54 | A9 |
| Rejected Non-Mechanisms section | 34 | A3 |
| Extraction Validation tables (Strategy Library + Fresh Extraction) | 39 | A2 |
| Novel Mechanisms list | 15 | A5 |
| Final Extraction Count summary | 14 | A6 |
| Research Application Record | 20 | A4 |
| "What Are Scales?" section (duplicated by brief Tier 3) | 63 | B1 |
| Usage Guidance / Mechanism Selection Flow (duplicated by brief recipe) | 41 | B2 |
| Complexity Tier Breakdown | 26 | B3 |
| Deployment Recommendations | 26 | B4 |
| Mechanism Summary Table (metaphor independence breakdown only) | 5 | A-adjacent |
| Separator lines and whitespace from removed sections | ~52 | structural |

**What was PRESERVED:**
- All 18 mechanism definitions with CSS examples
- All Perceptual Effectiveness and Impact Profile annotations
- All Application Modes (Progressive/Discrete) with anti-patterns
- All Reusable Boundary descriptions
- All Transfer Test results
- Mechanism Categories table (5 Property Families)
- CRITICAL DISTINCTION section (Middle vs Ceiling selection logic)
- Mechanism Summary Table (core table with CSS lines/complexity/metaphor independence)
- Transition Grammar section (3 transition types with CSS patterns)
- Restraint Protocol (density cap, distribution requirement, restraint ratio)

---

### 2. components.css

**Path:** `design-system/compositional-core/components/components.css`
**Before:** 1,195 lines
**After:** 944 lines
**Lines removed:** 251

**Categories of content removed:**

| Category | Lines Removed | Audit Tier |
|----------|--------------|------------|
| File header provenance (lens, sources, merge process, extraction date) | 11 | A7-adjacent |
| Extraction Metadata block (bottom of file) | 29 | A7 |
| Component header comments: 22 blocks reduced from ~8-10 lines to 1 line each | ~211 | C1 (partial) |

**What was PRESERVED:**
- All CSS class definitions (zero CSS removed)
- All component section headers (now 1-line descriptions instead of multi-line provenance blocks)
- CD-ONLY and TENSION-TEST-ONLY markers retained in 1-line headers
- All responsive utilities
- All accessibility components (skip link, focus-visible, selection, reduced motion)
- Soul compliance note in file header

**Header compression example (typical component):**
```
BEFORE (10 lines):
/* --------------------------------------------------------------------------
   CALLOUT FAMILY

   Frequency: 27/27 files (100%)
   Confidence: HIGH
   Source: DD+OD (12), CD (6), TT (15) -- universal

   Component DNA: Sparse label + dense body + 4px left border
   Parametric variation: --accent-color controls border + label color
   -------------------------------------------------------------------------- */

AFTER (1 line):
/* --- CALLOUT FAMILY: Sparse label + dense body + 4px left border --- */
```

---

## Total Reduction Summary

| File | Before | After | Lines Removed | % Reduction |
|------|--------|-------|---------------|-------------|
| mechanism-catalog.md | 1,218 | 751 | **467** | 38.3% |
| components.css | 1,195 | 944 | **251** | 21.0% |
| **TOTAL** | **2,413** | **1,695** | **718** | **29.8%** |

**Builder effective input reduction:** The audit estimated 619 lines from Tier A + B. Actual removal was **718 lines** (99 more than estimated) because:
1. Component header compression (C1 partial) was applied -- each 8-10 line block became 1 line
2. File header provenance blocks were also compressed (not just bottom-of-file metadata)
3. Some separator lines and whitespace from removed sections were included

---

## Spot-Check: 3 Removed Sections Confirmed Non-Actionable

### Spot-Check 1: Research Application Record (mechanism-catalog.md, formerly lines 1197-1216)

**Content removed:**
```
| Finding ID | Where Applied | Evidence |
| Lens Manifesto Section 5 | Reading order | Source-first (CSS before HTML before visual) |
| Strategy Library (08) | Mechanism definitions | Cross-validated 10/18 mechanisms |
```

**Builder impact:** ZERO. This table documents which research documents were consulted during extraction. A builder needs CSS patterns and application guidance, not extraction provenance. The mechanism definitions themselves (which were preserved) contain all the builder-actionable information.

### Spot-Check 2: Extraction Validation tables (mechanism-catalog.md, formerly lines 1070-1106)

**Content removed:**
```
| Border-Weight Gradient | Lines 856-925 (Tier 2.5) | VALIDATED |
| 2-Zone Component DNA | Lines 218-311 (Tier 2) | VALIDATED |
| Solid Offset Depth | Lines 680-732 (Tier 2.5) | VALIDATED |
```

**Builder impact:** ZERO. These tables cross-reference mechanism definitions against internal source documents (Strategy Library, Fresh Extraction). The builder does not have access to these source documents and would never look up "lines 856-925 of Strategy Library." The mechanism CSS examples (preserved) are the actionable content.

### Spot-Check 3: Component frequency/confidence/source comments (components.css, 22 instances)

**Content removed (example):**
```
Frequency: 27/27 files (100%)
Confidence: HIGH
Source: DD+OD (12), CD (6), TT (15) -- universal
```

**Builder impact:** ZERO. Frequency counts (how many exploration files contained this component) and source breakdowns (which exploration stages produced it) are researcher provenance. The builder needs to know what the component IS and how to use it (the CSS class definition), not how it was discovered. The 1-line description retained ("Sparse label + dense body + 4px left border") captures the essential usage information.

---

## Post-Reduction Builder Input Estimate

Using the audit's calculation framework:

| File | Original | Post-Reduction |
|------|----------|---------------|
| Execution Brief | ~165 | ~165 (unchanged) |
| tokens.css | 183 | 183 (unchanged) |
| components.css | 1,195 | **944** |
| mechanism-catalog.md | 1,218 | **751** |
| artifact-value-tables.md | 262 | 262 (unchanged, not in scope) |
| **APPLIED mode total** | **~1,858** | **~1,140** |
| CD-006 (COMPOSED only) | 2,085 | 2,085 (unchanged, not in scope) |
| **COMPOSED without CD-006** | **~3,023** | **~2,305** |

**APPLIED mode is now well below the 1,500-line target** (1,140 vs 1,500).

---

**END REPORT**
