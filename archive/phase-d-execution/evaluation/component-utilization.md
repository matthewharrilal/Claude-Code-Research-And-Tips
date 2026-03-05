# Component Utilization Analysis

**Date:** 2026-02-14
**Auditor:** integration-auditor
**Source:** HTML source code analysis + component-inventory.md cross-reference
**Builds Analyzed:** 5 (Track 1, Variants A/B/C/D)

---

## METHODOLOGY

For each of 34 components in component-inventory.md:
1. Check if component used in ANY of 5 builds (used/unused flag)
2. Validate confidence level via usage pattern
3. Count override instances (context-specific modifications)
4. Classify utilization: VALIDATED / UNDERUTILIZED / UNTESTED

---

## COMPONENT FAMILY 1: CALLOUTS (7 variants)

### Callout Base (2-Zone DNA)

**Inventory Classification:** HIGH confidence (27/27 files, 100%)
**Used in builds:**
- Track 1: ✅ (7 variants: essence, tip, info, gotcha, warning, challenge, caution)
- Variant A: ✅ (custom 2-zone DNA, NOT library class)
- Variant B: ✅ (custom instrument-card, NOT library class)
- Variant C: ✅ (4 variants: essence, tip, gotcha, info)
- Variant D: ✅ (4 variants)

**Override count:**
- Track 1: 0 (uses library defaults)
- Variant C: 0 (uses library defaults within geological-section)
- Variant D: 0 (uses library defaults within geological-section)

**Validation:**
- Confidence level: ✅ CONFIRMED (used in 3/3 library builds)
- Buildability: ✅ VALIDATED (works as-is, no modifications needed)
- Parametric variation: ✅ VALIDATED (--accent-color controls border/label)

**Utilization:** VALIDATED (100% library builds use it)

---

### Callout--essence

**Inventory:** HIGH confidence
**Used:** Track 1 ✅, Variant C ✅, Variant D ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

### Callout--tip

**Inventory:** HIGH confidence
**Used:** Track 1 ✅, Variant C ✅, Variant D ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

### Callout--info/note

**Inventory:** HIGH confidence
**Used:** Track 1 ✅, Variant C ✅, Variant D ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

### Callout--gotcha/warning

**Inventory:** HIGH confidence
**Used:** Track 1 ✅, Variant C ✅, Variant D ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

### Callout--challenge/caution

**Inventory:** HIGH confidence
**Used:** Track 1 ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

## COMPONENT FAMILY 2: CODE BLOCKS

### Pre/Code (Dark Background)

**Inventory:** HIGH confidence (25/27 files, 92%)
**Used in builds:**
- Track 1: ✅ (7 code blocks with syntax highlighting)
- Variant A: ❌
- Variant B: ❌
- Variant C: ❌
- Variant D: ❌

**Override count:** 0

**Validation:**
- Confidence level: ✅ CONFIRMED (Track 1 used successfully)
- Content-driven gap: ALL Track 2 builds had 0% code content (prose-only)

**Utilization:** UNDERUTILIZED (only 1/5 builds, due to content selection)

---

### Inline Code

**Inventory:** HIGH confidence (implicit in all files)
**Used:** Track 1 ✅ (within prose), Variants ❌ (prose lacks code references)
**Validation:** ✅ VALIDATED
**Utilization:** UNDERUTILIZED (content-driven)

---

### Code Snippet Component (with header)

**Inventory:** MEDIUM confidence (DD/OD specific structure)
**Used:** ❌ (none)
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

**Recommendation:** Phase D-V2 should test with filename header pattern

---

## COMPONENT FAMILY 3: TABLES

### Data Table (Mono Headers)

**Inventory:** MEDIUM-HIGH confidence (19/27 files, 70%)
**Used in builds:**
- Track 1: ✅ (6 tables: approach comparison, context mgmt, error handling, task decomp, communication, cost-benefit)
- Variant A: ❌
- Variant B: ✅ (1 measurement-table with custom mono styling)
- Variant C: ❌
- Variant D: ❌

**Override count:**
- Track 1: 0 (library defaults)
- Variant B: FULL CUSTOM (not library class)

**Validation:**
- Confidence level: ✅ CONFIRMED (Track 1 success)
- Buildability: ✅ VALIDATED

**Utilization:** UNDERUTILIZED (1/5 library usage, content-driven gap)

---

## COMPONENT FAMILY 4: HEADERS

### Page Header (Exploration Header)

**Inventory:** HIGH confidence (27/27 files, 100%)
**Used in builds:**
- Track 1: ✅ (exploration-header pattern: ID + title + subtitle)
- Variant A: ✅ (custom blueprint-header)
- Variant B: ✅ (custom lab-zone header)
- Variant C: ✅ (custom geological header implicit)
- Variant D: ✅ (page-header with dark theme CUSTOM)

**Library class usage:**
- Track 1: ✅ (.page-header)
- Variant D: ✅ (.page-header with --dark variant CUSTOM)
- Others: ❌ (custom headers)

**Override count:**
- Variant D: FULL CUSTOM (dark theme not in library)

**Validation:**
- Confidence level: ✅ CONFIRMED
- Gap identified: Dark header variant MISSING from library (see GAP-009)

**Utilization:** VALIDATED (but dark variant missing)

---

## COMPONENT FAMILY 5: FOOTERS

### Page Footer (Provenance Metadata)

**Inventory:** MEDIUM confidence (18/27 files, 66%)
**Used in builds:**
- Track 1: ✅ (3-section footer: component coverage, source provenance, library utilization)
- Variant A: ❌
- Variant B: ❌
- Variant C: ✅ (minimal footer)
- Variant D: ❌

**Library class usage:**
- Track 1: ✅ (.page-footer)

**Validation:**
- Confidence level: ✅ CONFIRMED (Track 1 success)

**Utilization:** UNDERUTILIZED (only 1/5 library usage)

---

## COMPONENT FAMILY 6: SECTION INDICATORS

### Section Indicator (Meta Line)

**Inventory:** MEDIUM confidence (18/27 files, 66%)
**Used in builds:**
- Track 1: ✅ (10 section indicators: "APPROACH 1", "APPROACH 2", etc.)
- Variant A: ✅ (custom .phase-label)
- Variant B: ✅ (custom .lab-zone__label)
- Variant C: ✅ (custom .layer-indicator)
- Variant D: ✅ (custom .layer-indicator)

**Library class usage:**
- Track 1: ✅ (.section-indicator)
- Others: ❌ (custom labels)

**Validation:**
- Confidence level: ✅ CONFIRMED
- Pattern validated: Mono font, uppercase, 10-12px, secondary color, border-bottom

**Utilization:** VALIDATED (1/5 library, but pattern replicated in 4/5 custom)

---

## COMPONENT FAMILY 7: DECISION MATRIX

### Decision Matrix (Comparison Grid)

**Inventory:** MEDIUM confidence (4/27 files, 14%)
**Used in builds:**
- Track 1: ✅ (1 instance: approach comparison with 2fr 1fr 1fr 1fr grid)
- Others: ❌

**Override count:** 0

**Validation:**
- Confidence level: ✅ CONFIRMED (Track 1 success)
- Buildability: ✅ VALIDATED

**Utilization:** VALIDATED (but only 1/5 builds, content-driven)

---

## COMPONENT FAMILY 8: FILE TREE

### File Tree (Directory Structure)

**Inventory:** MEDIUM confidence (5/27 files, 18%)
**Used in builds:**
- Track 1: ✅ (2 instances: ralph-project/ structure, Gas Town architecture)
- Others: ❌

**Override count:** 0

**Validation:**
- Confidence level: ✅ CONFIRMED
- Buildability: ✅ VALIDATED

**Utilization:** VALIDATED (but only 1/5 builds, content-driven)

---

## COMPONENT FAMILY 9: STATS BAR / METADATA GRID

### Stats Bar (Flex Segments)

**Inventory:** MEDIUM confidence (17/27 files, 63%)
**Used in builds:** ❌ (none)

**Note:** Track 1 content annotated as "stats-bar" but implemented as TABLE (comparison matrix, not metrics display). This is CORRECT usage — stats-bar is for METRICS (5 numbers), table is for COMPARISONS (12×4 grid).

**Validation:** ⚠️ UNTESTED (actual stats-bar component not used)

**Utilization:** UNTESTED

**Recommendation:** Phase D-V2 should test with metadata display (e.g., "Lines: 1234, Files: 56, Coverage: 89%")

---

### Stat Item (Vertical Label/Value)

**Inventory:** MEDIUM confidence (CD pattern)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

## CD-ONLY COMPONENTS

### Reasoning Component

**Inventory:** MEDIUM confidence (6/6 CD files, 100% within CD)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED (content didn't require framed deliberation)

---

### Core Abstraction (2-Zone Composite)

**Inventory:** MEDIUM confidence (5/6 CD files, 83% within CD)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

### Bento Grid

**Inventory:** MEDIUM confidence (6/6 CD files, 100% within CD)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED (content didn't require grid isolation)

**Note:** Variant A used custom grid (.construction-phases) but NOT library .bento-grid

---

### Essence Pullquote

**Inventory:** MEDIUM confidence (5/6 CD files, 83% within CD)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

### Density Meter

**Inventory:** MEDIUM confidence (6/6 CD files, 100% within CD)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

### Section Zones / Breathing Zones

**Inventory:** MEDIUM confidence (6/6 CD files, 100% within CD)
**Used:** Custom equivalents (Variant A: .view-plan/elevation/section, Variant B: .lab-zone, Variant C/D: .geological-section)
**Library class usage:** ❌
**Validation:** ⚠️ PATTERN VALIDATED (4/5 builds created zone systems), COMPONENT UNTESTED
**Utilization:** UNTESTED (library class), VALIDATED (pattern)

---

### Version Badge

**Inventory:** MEDIUM confidence (6/6 CD files, 100% within CD)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

## TENSION-TEST-ONLY COMPONENTS (LOW CONFIDENCE)

### Stratum / Layer Boundaries

**Inventory:** LOW confidence (3/15 TT files, 20%)
**Used:** Variant C ✅ (.isograd), Variant D ✅ (.stratum-boundary)
**Library class usage:** ❌ (custom implementations)
**Validation:** ⚠️ PATTERN VALIDATED, COMPONENT UNTESTED
**Utilization:** UNTESTED (library class)

---

### Building Floor Structure

**Inventory:** LOW confidence (1/15 TT files, 6%)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

### Compression Grid

**Inventory:** LOW confidence (1/15 TT files, 6%)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

### Density Indicator

**Inventory:** LOW confidence (3/27 files, 11%)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

### Q&A Pair (Conversational)

**Inventory:** LOW confidence (2/27 files, 7%)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

**Recommendation:** Phase D-V2 should test with conversational content (Q&A tutorial format)

---

### Breadcrumb Navigation

**Inventory:** LOW confidence (3/27 files, 11%)
**Used:** ❌
**Validation:** ⚠️ UNTESTED
**Utilization:** UNTESTED

---

## ACCESSIBILITY COMPONENTS

### Skip Link

**Inventory:** HIGH confidence (27/27 files, 100%)
**Used:** Track 1 ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

### Focus-Visible

**Inventory:** HIGH confidence (27/27 files, 100%)
**Used:** Track 1 ✅ (universal rule)
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

### Selection Styling

**Inventory:** HIGH confidence (22/27 files, 81%)
**Used:** Track 1 ✅
**Validation:** ✅ VALIDATED
**Utilization:** VALIDATED

---

## SUMMARY BY CONFIDENCE LEVEL

### HIGH Confidence (10 components)

**VALIDATED (used successfully):** 9/10
- Callout family (7 variants) ✅
- Code blocks ✅
- Page header ✅
- Skip link ✅
- Focus-visible ✅
- Selection ✅

**UNDERUTILIZED (content-driven gap):** 1/10
- Code blocks (prose-only content)

**UNTESTED:** 0/10

**Validation Rate:** 100% (all HIGH confidence components validated when content allows)

---

### MEDIUM Confidence (18 components)

**VALIDATED:** 5/18
- Data tables ✅
- Page footer ✅
- Section indicator ✅
- Decision matrix ✅
- File tree ✅

**UNDERUTILIZED:** 0/18

**UNTESTED:** 13/18
- Code snippet component
- Stats bar (flex segments)
- Stat item (vertical)
- Reasoning component
- Core abstraction
- Bento grid
- Essence pullquote
- Density meter
- Section zones (pattern validated, class untested)
- Breathing zones
- Version badge
- Stratum/layer boundaries (pattern validated, class untested)

**Validation Rate:** 28% (5/18 validated)

**Root Cause:** Content selection was prose-heavy (85%), lacking code examples, metrics, grid layouts, multi-zone architectures

---

### LOW Confidence (6 components)

**VALIDATED:** 0/6

**UNDERUTILIZED:** 0/6

**UNTESTED:** 6/6
- Building floor structure
- Compression grid
- Density indicator
- Q&A pair
- Breadcrumb

**Validation Rate:** 0% (none tested)

**Root Cause:** Content selection didn't require specialized patterns (conversational Q&A, hierarchical navigation, visual density markers)

---

## OVERALL COMPONENT UTILIZATION

**Total components:** 34
**VALIDATED:** 14 (41%)
**UNDERUTILIZED:** 1 (3%)
**UNTESTED:** 19 (56%)

**By frequency tier:**
- HIGH (10): 90% validated
- MEDIUM (18): 28% validated
- LOW (6): 0% validated

**Implication:** Library is SUFFICIENT for high-frequency patterns, but 56% of inventory remains UNTESTED due to content selection.

---

## OVERRIDE ANALYSIS

**Total override instances:** 1 (Variant D dark header)

**Override pattern:**
- Variant C/D: Used library callouts within custom zones WITHOUT custom property overrides (missed bridging opportunity — see GAP-004)

**Conclusion:** Builders prefer CUSTOM components over BRIDGED library components in Tier 3 contexts. This may indicate:
1. Custom property bridging pattern is UNCLEAR
2. Building from scratch is EASIER than learning bridging syntax
3. Library components don't provide enough HOOKS for zone-based variation

---

## CONTENT-DRIVEN GAPS

**Components untested due to content type:**

**Prose-only content (85%) limited:**
- Code blocks (no code examples)
- Code snippet component (no filename headers)
- File trees (no directory structures)
- Stats bars (no metrics to display)
- Decision matrices (comparison needed, but table used instead)
- Bento grid (no modular isolation needed)
- Q&A pair (no conversational structure)

**Recommendation:** Phase D-V2 must use MIXED content:
- 50% prose (narrative sections)
- 25% code (3-4 code blocks with headers)
- 15% data (2-3 tables, 1 stats bar, 1 decision matrix)
- 10% structure (1 file tree, 1 bento grid, 1 breadcrumb)

This will exercise 25-28/34 components (74-82% coverage) vs current 14/34 (41%).

---

## RECOMMENDATIONS

### Immediate (Phase D-V2)

1. **Create mixed content template** that exercises:
   - Code snippet component (with filename header)
   - Stats bar (metadata display)
   - Bento grid (modular sections)
   - Q&A pair (conversational tutorial)
   - Breadcrumb (multi-level navigation)

2. **Document custom property bridging** (see GAP-004):
   - Add tier-3-bridging.md to guidelines/
   - Provide 3-5 worked examples
   - Show anti-pattern (direct selectors vs custom properties)

3. **Add dark header variant** to components.css (see GAP-009)

### Secondary (Phase E Migration)

4. **Reclassify MEDIUM confidence components**:
   - Section zones: Upgrade to HIGH (pattern validated in 4/5 builds)
   - Stats bar: Keep MEDIUM (awaiting usage test)
   - Bento grid: Keep MEDIUM (awaiting usage test)

5. **Test LOW confidence components** with specialized content:
   - Q&A pair → conversational tutorial
   - Breadcrumb → multi-page navigation
   - Density indicator → visual density markers

6. **Document stats-bar vs table usage** (see GAP-011):
   - Stats-bar: Metrics display (5 numbers in a row)
   - Table: Comparison matrix (N×M grid)
   - Decision-matrix: Structured comparison (2fr 1fr 1fr 1fr)

---

**END COMPONENT UTILIZATION ANALYSIS**
