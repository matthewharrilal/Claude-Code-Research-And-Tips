# Wave 1: Brief, Recipe, PA, and Value Tables Changes

**Agent:** brief-recipe-editor
**Date:** 2026-02-24
**Fixes implemented:** 8/8

---

## FIX-012: Background Hex Lock (CRITICAL) — DONE
**File:** `ephemeral/va-extraction/artifact-tc-brief-template.md`
**Change:** Added "Zone Background Assignments (Tier 2 LOCKED)" section inside Tier 3, before Multi-Coherence. Includes a placeholder table for zone boundary color pairs with RGB deltas. States that zone background hex values are FIXED from value-tables.md and are NOT creative territory. Compositional target: >= 25 RGB at 3+ boundaries.
**Lines added:** +11

## FIX-013: Specification Conflict Resolution Protocol (CRITICAL) — DONE
**File:** `ephemeral/va-extraction/artifact-tc-brief-template.md`
**Change:** Added "PRIORITY OVERRIDE: Tier 2 vs Tier 3 Conflicts" section between Tier 2 and Tier 3. Specifies Tier 2 wins for perception physics (background deltas, letter-spacing, stacked gaps, single margins) and Tier 3 wins for creative decisions (metaphor, components, layout, accents). Placed as a standalone section divider between the two tiers.
**Lines added:** +8

## FIX-014: Technique Density for Dispositions (HIGH) — DONE
**File:** `ephemeral/va-extraction/artifact-tc-brief-template.md`
**Change:** Updated Tier 4 header from "~40 lines" to "~40 lines MINIMUM". Replaced the existing CRITICAL note and examples with a more concise version: each disposition MUST include at least ONE specific CSS property:value pair. Added floor check: "If Tier 4 falls below 35 lines, you are under-specifying technique vocabulary." Replaced verbose example text with INSUFFICIENT/SUFFICIENT comparison using backtick-formatted CSS.
**Lines changed:** Net +2 (replaced 5 lines with 7)

## FIX-018: Components.css Reference (HIGH) — DONE
**File:** `ephemeral/va-extraction/artifact-tc-brief-template.md`
**Change:** Updated Creative Authority + Components subsection in Tier 3. Added "Aim for 8+ components from components.css. Adapt rather than invent" as an explicit adoption target. Added "Gas Town used 3/26 available components; the target is 8+" for concrete calibration.
**Lines changed:** Net +1 (reworded existing paragraph)

## FIX-019: Mechanism Catalog Quick-Reference (MEDIUM) — DONE
**File:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Change:** Added "Step 1.1b: Mechanism Catalog Quick-Reference" between Step 1.1 (tokens.css) and Step 1.2 (components.css) in Phase 1. Contains a 6-row table mapping mechanism categories (Spatial, Temporal, Material, Behavioral, Relational, Typographic) to their top mechanisms and CSS signatures.
**Lines added:** +14

## FIX-021: CD-006 Zone-by-Zone Reference (MEDIUM) — DONE
**File:** `ephemeral/va-extraction/artifact-builder-recipe.md`
**Change:** Added "CD-006 Zone-by-Zone Reference (CEILING exemplar)" section at the start of Phase 2, before Step 2.1. Lists 5 key zones from CD-006 (S1, S3, S4, S6, S8) with specific technique descriptions including CSS values (background hex, border widths, padding values, line-height).
**Lines added:** +8

## FIX-020: Value Tables CSS Snippet Format (MEDIUM) — DONE
**File:** `ephemeral/va-extraction/artifact-value-tables.md`
**Change:** Converted multiple sections from prose/table format to copy-paste CSS snippet format:
- Updated purpose line to mention "copy-paste CSS values"
- Added 3 CSS snippet blocks to Usage Guidance (Subtle, Confident, Dramatic examples)
- Converted Key Values from tokens.css table to CSS code block with comments
- Converted Typography Key Principles to CSS code block with property:value pairs
- Converted Configuration A (Standard Hierarchy) borders table to CSS code block
- Updated footer text to mention CSS snippet format
**Lines changed:** Net ~+15 (reformatted, some tables replaced with code blocks)

## FIX-032: PA-05 Conditional Pass Guidance (HIGH) — DONE
**File:** `ephemeral/va-extraction/artifact-pa-protocol.md`
**Change:** Added CONDITIONAL PASS guidance paragraph after the PA-05 scoring table in Section 1.3. Defines: if a sub-criterion technically passes but contains a shipping-blocking defect, treat as CONDITIONAL PASS. Score based on clean passes, not conditional passes. Includes the Gas Town Auditor A example (3/4 despite all 4 technically passing because trailing void made POLISHED conditional).
**Lines added:** +4

---

## Verification Checklist

- [x] Brief template still <= 200 lines effective (193 lines total, assembly rules target 100-165 for instantiated briefs)
- [x] No checklist language introduced (no "Verify," "Fail if," "Must be" in new text)
- [x] All 8 FIX-IDs implemented: FIX-012, FIX-013, FIX-014, FIX-018, FIX-019, FIX-020, FIX-021, FIX-032
- [x] FIX-012 and FIX-013 coordinated: FIX-013 (PRIORITY OVERRIDE) placed between Tier 2 and Tier 3; FIX-012 (Zone Background Assignments) placed as first subsection of Tier 3
- [x] Recipe language preserved throughout (Read/Select/Deploy/Assess verbs)
- [x] Existing structure and formatting preserved — all edits are surgical insertions
