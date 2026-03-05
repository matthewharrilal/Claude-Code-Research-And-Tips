# Enrichment Changelog — Pipeline v3 Artifact Updates

**Date:** 2026-02-23
**Agent:** enricher (Opus)
**Source:** Master Retrospective (`11-MASTER-RETROSPECTIVE.md`) — 8 BLOCKING (Wave 1) + 10 SIGNIFICANT (Waves 2+3)
**Report sources:** `07-context-gap.md` (prompt templates, gate runner JS), `10-fresh-eyes-review.md` (usability gaps), `03-phase-2-analysis.md` (builder defects), `06-score-drivers.md` (deduction inventory)

---

## Summary

**18 total enrichments** applied across 7 files (3 new, 4 modified). Covers all BLOCKING prerequisites plus the highest-impact SIGNIFICANT enrichments that prevent the 5 most-frequent Gas Town defects.

| # | Enrichment | File | Action | Status |
|---|-----------|------|--------|--------|
| 1 | TC Brief Template | `artifact-tc-brief-template.md` | CREATED (164 lines) | DONE |
| 2 | Agent Prompt Templates | `MANIFEST.md` Appendix E | ADDED (~140 lines) | DONE |
| 3 | Gate Runner JavaScript | `artifact-gate-runner.md` | APPENDED (~600 lines) | DONE |
| 4 | Worked Examples | `artifact-worked-examples.md` | CREATED (182 lines) | DONE |
| 5 | Model Mandate | `MANIFEST.md` Appendix F | ADDED (~25 lines) | DONE |
| 6 | Stacked Gap Clarification | `artifact-gate-runner.md` | APPENDED (~30 lines) | DONE |
| 7 | Glossary Expansion | `MANIFEST.md` Appendix C | EXPANDED (+11 terms) | DONE |
| 8 | Value Tables | `artifact-value-tables.md` | CREATED (225 lines) | DONE |

---

## Detailed Changes

### Enrichment #1: TC Brief Template (NEW FILE)

**File:** `ephemeral/va-extraction/artifact-tc-brief-template.md` (164 lines)
**Source:** Report 07 Section 4.2 (Brief Assembler Prompt), Report 10 (identified as #1 blocker)

Contents:
- Tier 1 IDENTITY: 10 soul world-descriptions (VERBATIM template text)
- Tier 2 PERCEPTION: 5 perception thresholds as natural law + calibration (VERBATIM template text)
- Tier 3 COMPOSITIONAL: Multi-coherence (6 channels, boundary-by-boundary), Structural Metaphor, Density Arc, Content-Form Coupling, Creative Authority + Components, CSS Value Table reference (~50 lines of synthesis instructions)
- Tier 4 DISPOSITION: D-01 through D-08 with PURPOSE and content-specific observation guidance (~40 lines)
- Content Map Appendix: Instructions to append verbatim from Phase 0
- 10 Assembly Rules including recipe format preservation and line budget (100-165 lines)

### Enrichment #2: Agent Prompt Templates (MANIFEST ADDITION)

**File:** `ephemeral/va-extraction/MANIFEST.md` — new Appendix E (~140 lines)
**Source:** Report 07 Section 4 (all agent prompts)

Added copy-paste-ready prompts for:
- Content Analyst (Phase 0) — 7 operations including content tensions
- Brief Assembler (Phase 1) — with TC Brief Template reference and critical rules
- Builder (Phase 2) — 6-phase recipe sequence with output spec
- Gate Runner (Phase 3A) — pointer to executable JS in artifact-gate-runner.md
- PA Auditors (Phase 3B) — universal pattern + pointer to full per-auditor prompts in Report 07
- Integrative Auditor — gestalt + PA-05 synthesis + Tier 5 scoring
- Weaver — verdict logic + two-output spec (diagnostic + artistic impression) + calibration tables

### Enrichment #3: Gate Runner JavaScript (ARTIFACT APPEND)

**File:** `ephemeral/va-extraction/artifact-gate-runner.md` — appended ~600 lines (763 -> 1,364 lines)
**Source:** Report 07 Section 4.4

Added:
- `runGateRunner(page)` function: GR-01 through GR-16 (10 identity + 6 perception gates)
  - GR-01: Border Radius Zero (querySelectorAll, computed borderRadius)
  - GR-02: Box Shadow None
  - GR-03: Container Width 940-960px (multi-selector candidate search)
  - GR-04: No Gradients (backgroundImage check)
  - GR-05: Warm Palette (pure black/white/cold detection with creative authority exception)
  - GR-06: Font Trinity (primary font extraction, 3-of-3 presence check)
  - GR-07: Header DNA (dark bg check via RGB sum < 200, ~3px red border)
  - GR-08: Border Weight Hierarchy (distinct weight counting, +/-0.5px tolerance)
  - GR-09: Typography Foundations (line-height, p max-width, h3 italic)
  - GR-10: Accessibility (skip link, ARIA, heading hierarchy)
  - GR-11: Background Delta >= 15 RGB (adjacent section bounding-rect method)
  - GR-12: Letter Spacing >= 0.025em (px-to-em conversion)
  - GR-13: Stacked Gap <= 120px (CSS property sum)
  - GR-14: Total Stacked Gap <= 150px (visual bounding-rect)
  - GR-15: Single Margin <= 96px
  - GR-16: All CSS Perceptible (meta-gate aggregation)
- `runAntiPatternGates(page)` function: GR-17, GR-18, GR-20
  - GR-17: Density Stacking (consecutive dense zones detection)
  - GR-18: Ghost Mechanisms (sub-perceptual CSS values)
  - GR-20: Structural Echo (zone-to-zone CSS similarity)
- Usage instructions: HTTP serve, Playwright open, font wait, execute, resize for responsive, collect JSON

### Enrichment #4: Worked Examples (NEW FILE)

**File:** `ephemeral/va-extraction/artifact-worked-examples.md` (182 lines)
**Source:** Gas Town pipeline execution outputs (`_content-map.md`, `_execution-brief.md`, `_gate-results.md`), Report 07 PA excerpts

Contains 4 worked examples:
1. **Content Map (Phase 0):** Full Gas Town content map (66 lines) with annotations on quality indicators (mode justification, novel analysis like content tensions, risk-rated metaphor seeds, axis positions in reader profile) and improvement areas
2. **Execution Brief (Phase 1):** Reference to Gas Town brief with key characteristics (165 lines, 4-tier structure, mode COMPOSED, multi-coherence boundary descriptions)
3. **Gate Runner Results (Phase 3A):** Full Gas Town gate results with annotations (15/42 gates run, 10 PASS / 0 FAIL / 4 MANUAL, Z4-Z5 boundary at 17 RGB, Z3 pure white deviation)
4. **PA Auditor Excerpt (Phase 3B):** Auditor C (Multi-Coherence) excerpt showing perceptual language, zone-specific observations, and dominant defect identification (Z4-Z5 boundary flagged by 5/9 auditors)

### Enrichment #5: Model Mandate (MANIFEST ADDITION)

**File:** `ephemeral/va-extraction/MANIFEST.md` — new Appendix F (~25 lines)

Added:
- NON-NEGOTIABLE Opus mandate for all production builds
- Rationale: Sonnet complies, Opus creates beyond constraints
- Exception: Sonnet for cost-constrained testing ONLY, marked `[SONNET-TEST]`
- Per-role model table with strength descriptions

### Enrichment #6: Stacked Gap Clarification (ARTIFACT APPEND)

**File:** `ephemeral/va-extraction/artifact-gate-runner.md` — appended ~30 lines

Added section: "Stacked Gap Threshold Clarification — GR-13 vs GR-14"
- GR-13 (120px ceiling) = CSS PROPERTY SUM: margin-bottom + padding-bottom + margin-top + padding-top
- GR-14 (150px ceiling) = VISUAL MEASUREMENT: getBoundingClientRect gap between zone bounding boxes
- These are COMPLEMENTARY, not conflicting — both must pass
- Concrete example showing how individual values can pass GR-13 while visual gap can independently fail or pass GR-14

### Enrichment #7: Glossary Expansion (MANIFEST EDIT)

**File:** `ephemeral/va-extraction/MANIFEST.md` — Appendix C expanded (+11 terms)

New terms added:
- **TC (Tension-Composition):** Core methodology, brief naming convention
- **Register:** NARRATIVE / REFERENCE / CODE — section character determining CSS treatment
- **Boundary:** Zone transition point, multi-coherence measurement location
- **Multi-Coherence:** Principle of simultaneous channel shifts at boundaries
- **PA-05 Scale Labels:** FLAT / ASSEMBLED / COMPOSED / DESIGNED with descriptions
- **Content Tension:** Opposing poles with dominance analysis
- **Stacked Gap:** Dual measurement (CSS property sum + visual bounding-rect)
- **Conviction Statement:** Builder's design intent declaration
- **Recipe vs Checklist:** Most important formatting distinction (PROVEN)
- **Worked Examples:** Pointer to artifact-worked-examples.md
- Updated **Value Tables** entry to point to artifact-value-tables.md

### Enrichment #8: Value Tables (NEW FILE)

**File:** `ephemeral/va-extraction/artifact-value-tables.md` (225 lines)
**Source:** Gas Town output.html CSS, tokens.css, CD-006-pilot-migration.html

Contains 5 value table sections:
1. **Background Color Pairs (20 pairs):** Organized by intensity — Subtle (15-25 RGB delta, 5 pairs), Confident (25-40, 7 pairs including 1 WARNING below threshold), Dramatic (40-70+, 8 pairs including inversions). Usage guidance per mode.
2. **Spacing Scales (3 progressions):** Crescendo (sparse->dense->release, 6 zones with all values), Plateau (uniform moderate), Wave (alternating compression/expansion). Key tokens.css values table.
3. **Typography Combinations (3 specs):** Research-Synthesis (Gas Town pattern, per-zone specs), Tutorial/Guide, Dense Reference. Key principles (display-body delta, zone variation, letter-spacing, h3 italic, code zones).
4. **Border Weight Trios (5 configs):** Standard (Gas Town), Zone-Modulated, Emphasis Gradient, Minimal (APPLIED), Maximum (FLAGSHIP). Each with weight/usage/color/context.
5. **Component Library Classes:** Minimum viable (8 classes for COMPOSED) and Extended (12+ for FLAGSHIP).

---

## Additional MANIFEST Changes

Beyond the 8 enrichments, these housekeeping edits were made:

1. **Execution Brief line budget:** Updated all references from "~93-113 lines" to "~100-165 lines" (reflects actual effective range from Gas Town execution)
2. **TC Brief Template path:** Updated Quickstart prerequisites from "TBD -- must be authored" to actual file path
3. **External Dependencies:** Updated TC Brief Template and Value Tables from "TBD" to "EXISTS (created 2026-02-23)" with actual paths
4. **Pipeline Artifacts table:** Added 3 new artifact files (tc-brief-template, worked-examples, value-tables)
5. **Known Limitations:** Removed items #1 ("No worked examples") and #2 ("Agent prompt templates not included") — both are now resolved

---

## Verification

All 8 enrichments correspond to the BLOCKING items in `11-MASTER-RETROSPECTIVE.md` Appendix B, Phase 1:

| Master Retro Item | Enrichment # | Status |
|-------------------|-------------|--------|
| "Create TC Brief Template" | #1 | DONE |
| "Add agent prompt templates to MANIFEST" | #2 | DONE |
| "Add executable gate runner JavaScript" | #3 | DONE |
| "Create worked examples" | #4 | DONE |
| "Add model mandate" | #5 | DONE |
| "Resolve stacked gap threshold" | #6 | DONE |
| "Add glossary" | #7 | DONE |
| "Create value tables" | #8 | DONE |

**Estimated self-containedness after BLOCKING enrichments: 4.0/5** (up from 2.5/5 per Report 07). Remaining 1.0 gap: full per-auditor PA question text still lives in Report 07 rather than in an artifact file. This is a LOW priority — the universal pattern in Appendix E plus the pointer to Report 07 Section 4.5 is sufficient.

---

## Wave 2 + Wave 3 Enrichments (SIGNIFICANT Priority)

Applied additionally for comprehensive coverage. These address the highest-impact score drivers and protocol gaps from Master Retrospective Sections 3 and 7.

### S-01: Raised Adjacent Zone Background Delta Target

**File:** `artifact-builder-recipe.md` — Step 2.1 expanded
**Source:** Reports 03, 06, 09 (adversarial compromise)

Added to Step 2.1 "Select zone background strategy":
- 20 RGB delta = FLOOR (was 15 — Gas Town's Z4-Z5 at 17 was the dominant defect)
- 25 RGB delta = COMPOSITIONAL TARGET (aim for this at 3+ boundaries)
- 50+ RGB delta = DRAMATIC (1-2 per page)
- Prohibition: Never #FFFFFF — lightest acceptable #FAFAF8
- Prohibition: No cold blues (#4A90D9) or cold purples (#7C3AED) — warm alternatives listed
- Cross-reference to `artifact-value-tables.md` for 20 pre-computed warm color pairs

### S-03: Spatial Layout Variety Requirement

**File:** `artifact-builder-recipe.md` — Phase 3 header expanded
**Source:** Reports 03, 06

Added requirements at Phase 3 header:
- At least 2 distinct layout patterns across the page
- Single-column stack <= 60% of zones
- Gas Town context: scored 19/25 spatial composition due to single-column dominance

### S-04: Typographic Spectacle Moment

**File:** `artifact-builder-recipe.md` — Phase 4 header expanded
**Source:** Reports 03, 06

Added before D-01:
- At least 1 typographic moment exceeding normal hierarchy (specific examples: 28-32px pull quote, 36-48px display numerals, small-caps, oversized drop cap)
- Zone-inflect H2s: at least 1 differentiating property between zones
- Gas Town context: identical H2s across 5 zones was the typography gap

### S-05: Post-Footer Void Prevention

**File:** `artifact-builder-recipe.md` — Phase 3 header expanded
**Source:** Reports 03, 06

Added: `html { background: var(--color-text); }` or match footer zone. No trailing white space.

### S-06: Component Library Adoption

**File:** `artifact-builder-recipe.md` — Phase 3 header expanded
**Source:** Reports 02, 03

Added: Check `components.css` for matching classes BEFORE writing custom CSS. Adopt and extend, never reinvent. ~200 lines of CSS duplication identified in Gas Town. Aim 8+ component classes.

### S-07: Tier 4 Technique Vocabulary Requirement

**File:** `artifact-tc-brief-template.md` — Tier 4 section expanded
**Source:** Reports 02, 09

Added CRITICAL note: Each disposition MUST include technique vocabulary — specific CSS properties and values, not just purposes. Good/bad examples provided. Gas Town Tier 4 was only 25 lines vs 40-line budget; missing 15 lines were technique specifics.

### S-08 + B-06: Content Tensions + Content Map Template

**File:** `artifact-routing.md` — Phase 0 expanded with Operation #7 + Output Template
**Source:** Reports 01, 07

Added:
- Operation 7: Content Tension Identification (2-4 tensions, pole dominance, metaphor-shaping identification)
- "No significant tensions" escape for APPLIED mode
- Full Content Map Output Template with 7 sections, table format specifications, and reference to worked examples

### S-09: Transition Weight Mapping

**File:** `artifact-tc-brief-template.md` — Multi-Coherence section expanded
**Source:** Reports 01, 02

Added: Boundary-specific transition mapping instruction. "Map light/medium/heavy transitions to specific zone boundaries. The builder must receive WHICH transition at WHICH boundary, not just the vocabulary." Example provided.

### S-10: Gate Categorization

**File:** `artifact-gate-runner.md` — New section added after Purpose
**Source:** Report 07

Added Gate Categorization table:
- REQUIRED (16 gates, GR-01 through GR-16) — blocks verdict
- RECOMMENDED (6 gates, GR-17 through GR-22) — 3+ FAIL = REBUILD
- ADVISORY (20 gates, GR-23 through GR-42) — informational only

Practical guidance noting Gas Town ran only 15/42 gates and the executable JS covers all REQUIRED + 3 RECOMMENDED.

---

## Final Totals

| Category | Count | Files Affected |
|----------|-------|---------------|
| BLOCKING enrichments (Wave 1) | 8 | 5 files (3 new, 2 modified) |
| SIGNIFICANT enrichments (Waves 2+3) | 10 | 3 files (all modifications) |
| **Total enrichments** | **18** | **5 files** |

**Files modified in Wave 2+3:**
- `artifact-builder-recipe.md`: +4 enrichments (S-01, S-03/05/06, S-04)
- `artifact-routing.md`: +1 enrichment (S-08 + B-06 content map template)
- `artifact-tc-brief-template.md`: +2 enrichments (S-07, S-09)
- `artifact-gate-runner.md`: +1 enrichment (S-10)

**Estimated self-containedness after ALL enrichments: 4.2/5** (up from 4.0/5 after BLOCKING only). The recipe enrichments should directly prevent the 5 highest-frequency defects identified in the Gas Town execution (zone background blending, pure white, single-column monotony, H2 uniformity, post-footer void).
