# MASTER IMPLEMENTATION CHECKLIST — Sections 3 & 8

**Author:** checklist-could-gaps agent (Opus 4.6)
**Date:** 2026-02-25
**Sources:** audit-05-08.md, audit-18-21.md, audit-01-04.md

---

## SECTION 3: TIER 3 — COULD

Items classified COULD/CONSIDER/MINOR that are NOT in the 8-change plan. Organized by sub-category.

---

### 3A. Gate Severity Restructure (7 items)

#### ME-024: Downgrade GR-07 to RECOMMENDED
- **What:** Downgrade GR-07 (html default color) from REQUIRED to RECOMMENDED. Add visible-text-only filter (`textContent.trim().length > 0 && offsetHeight > 0`). Browser defaults on structural containers should not trigger identity failures.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Invisible browser defaults continue to trigger REQUIRED identity failures. Contributes to false-positive noise.

#### ME-025: Downgrade GR-12 to RECOMMENDED
- **What:** Downgrade GR-12 (letter-spacing >= 0.025em) from REQUIRED to RECOMMENDED. At 16px, 0.025em = 0-0.4px — entirely sub-perceptual.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Sub-perceptual letter-spacing continues to trigger REQUIRED failures. Priority inversion at gate layer persists.

#### ME-026: Downgrade GR-43 to RECOMMENDED
- **What:** Downgrade GR-43 (self-evaluation comment check) from REQUIRED to RECOMMENDED. An invisible HTML comment should not block builds.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Missing `<!-- SELF-EVAL -->` comment blocks entire build. Punishes omission of invisible metadata.

#### ME-027: Downgrade GR-19 to ADVISORY
- **What:** Downgrade GR-19 (threshold gaming detection) from RECOMMENDED to ADVISORY. This gate checks builder INTENT, not visual output.
- **Where:** `gate-runner-core.js`, `gate-manifest.json`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Intent-detection gate weighted at RECOMMENDED tier — same as gates checking actual visual properties.

#### ME-028: Adjust GR-21 Threshold for COMPOSED Mode
- **What:** Adjust GR-21 distinct background threshold from 4 to 6 for COMPOSED mode, OR exclude backgrounds with alpha < 0.1 from count. Low threshold causes false positive in COMPOSED mode.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** GR-21 false positive persists in COMPOSED mode — callout tints counted as "distinct backgrounds."

#### ME-029: Fix GR-17 List Item Threshold
- **What:** Change `li` minimum padding from 12px to 4px (same as `td`/`th`). V3 evidence: 30 violations at 8px is standard design practice.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Standard 8px list padding triggers 30 RECOMMENDED warnings per run. Gate noise.

#### ME-030: Fix GR-48/GR-49 Viewport Namespacing Conflict
- **What:** Add viewport field to gate result objects. Update GR-49 to check `gate + viewport` pairs, not just `gate`. Every multi-viewport run has GR-48 deduplication conflicting with GR-49 integrity check.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Meta-gates contradict on every multi-viewport run. Confusing gate output. **Most regrettable cut in this tier** per audit-18-21 analysis — this is a real bug, not a threshold tweak.
- **Fresh-eyes flag:** None.

---

### 3B. PA Enrichments (6 items)

#### ME-031: False Affordance Scan PA Question
- **What:** Add PA question: "Does every interactive-looking element actually appear interactive?" Route to Auditor E or H.
- **Where:** `pa-questions.md` (requires 5-location update per M-22)
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** False affordances undetected. Type 1 failure (False Affordance) from 6-type taxonomy has no detection mechanism.

#### ME-032: Pipeline-Introspection Markers
- **What:** Mark PA-55, PA-56, PA-69 with `<!-- PIPELINE-INTROSPECTION -->` HTML comment. Weaver weights these differently from experiential findings.
- **Where:** `pa-questions.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Pipeline-introspection questions weighted same as reader-experience questions. Weaver cannot distinguish.
- **Fresh-eyes flag:** YES — audit-05-08 lists ME-032 as suspicious enrichment. Metadata-only, low risk but also low impact.

#### ME-033: Void Question Deduplication Rule
- **What:** If PA-50 flags >= 3 blank viewports, auto-answer PA-09, PA-51, PA-33 from PA-50 findings. Saves ~30% of Auditor C time under catastrophic void conditions.
- **Where:** `pa-questions.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Under catastrophic void, 3 questions produce identical answers. Redundant auditor work.

#### ME-034: Defect-Bypass for H's Cross-Viewport Protocol
- **What:** If defect is identical across all viewports, auditor states once and redirects to viewport-specific differences in non-defective content. Prevents "PUNISHED x3" pattern.
- **Where:** `pa-deployment.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Auditor H says "PUNISHED" 3 times for the identical viewport-independent defect. Wasted analysis bandwidth.

#### ME-035: Footer/Header in PA-02 Scope
- **What:** Add to PA-02 instruction: "(Include header and footer text in your assessment, not just body content.)"
- **Where:** `pa-questions.md`
- **Budget impact:** +1 line / -0 / net +1
- **In 8-plan?** NO
- **Loss if skipped:** Header/footer text excluded from contrast assessment. 1-line fix, virtually free.
- **Restoration case:** STRONG per audit-18-21 — +1 line, near-zero cost.

#### ME-036: Horizontal Scroll Element-Level Check in PA-07
- **What:** Add to PA-07 instruction: "(Check both page-level AND element-level horizontal scroll.)"
- **Where:** `pa-questions.md`
- **Budget impact:** +1 line / -0 / net +1
- **In 8-plan?** NO
- **Loss if skipped:** Element-level `overflow-x: auto` at 768px (e.g., wide tables) goes undetected. 1-line fix.
- **Restoration case:** STRONG per audit-18-21 — +1 line, near-zero cost.

---

### 3C. Builder Recipe Improvements (3 items, excluding ME-039 which is in plan)

#### ME-038: Px-Only Border Width Instruction
- **What:** Add to builder recipe: "All border-width values MUST be integer px. Do NOT use em/rem." Prevents builder from using em/rem for borders, which compute to fractional px and fail GR-09.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Builder uses em/rem for borders, produces fractional px, fails GR-09 on every build. Known preventable pattern.

#### ME-040: Text Overflow Gate GR-62 (RECOMMENDED)
- **What:** Add new gate checking `overflow: hidden` clipping, `text-overflow: ellipsis` truncation, off-screen content. ~60 lines Playwright JS.
- **Where:** `gate-runner-core.js`
- **Budget impact:** +60 lines / -0 / net +60
- **In 8-plan?** NO
- **Loss if skipped:** Clipped/truncated text undetected programmatically. Only caught if PA auditor happens to notice.
- **Fresh-eyes flag:** Adversarial review (ADV-07c) recommends CUTTING this entirely — lowest priority of 3 new gates, 60 lines on zero-budget artifact.

#### ME-041: Trailing Void Prevention in Builder Recipe
- **What:** Add to builder recipe: "Verify page ends within 100px of last content element. Override `min-height: 100vh` if needed."
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Builder creates trailing void, caught only by (now-fixed via ME-007) GR-44. Prevention-at-source principle violated. ME-007 detects; ME-041 prevents.

---

### 3D. Tracking + Documentation (5 items)

#### ME-042: Update MANIFEST Line Counts
- **What:** Update components.css line count from 290 to actual (~1,195). Add pre-flight validation (+/- 20%).
- **Where:** `MANIFEST.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** 4x discrepancy in components.css size persists. Orchestrator flagged it then moved on during V3 run.

#### ME-043: Add Experiential Pass + Screenshot Tracking Fields
- **What:** Add tracking fields to EXECUTION-TRACKER-TEMPLATE for new experiential pass protocol and screenshot validation results.
- **Where:** `EXECUTION-TRACKER-TEMPLATE.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** No tracking for new experiential/screenshot protocols. Implementation not recorded.

#### ME-044: Document Experiential Pass Rationale
- **What:** Document rationale in artifact-pa-protocol.md: gorilla experiment, attentional tunnels, 11% detection rate improving to 78-100% with experiential pre-check.
- **Where:** `artifact-pa-protocol.md`
- **Budget impact:** +15 lines / -0 / net +15
- **In 8-plan?** NO
- **Loss if skipped:** Rationale for experiential pass undocumented. Future pipeline maintainers may remove it without understanding why it exists. Loses the "9 different perceptual realities" evidence (per-auditor chart detection analysis) — the single most communicable evidence for ME-001's necessity.
- **Fresh-eyes flag:** YES — audit-05-08 lists ME-044 as suspicious (documentation, not code). Adversarial review recommends CUTTING entirely.

#### ME-045: Context Budget Awareness
- **What:** Add note that pipeline typically requires 2-3 sessions. Plan boundaries between Phase 2 and Phase 3A. Update time estimates from 80-105 min to 3-6 hours.
- **Where:** `artifact-orchestrator.md`, `MANIFEST.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** MANIFEST time estimates remain 4x wrong (80-105 min actual ~6 hours). New operators will be surprised. Note: HE-014 proposes a MORE AGGRESSIVE version — Pipeline-A/Pipeline-B structural split (P0-P2 vs P3A-P3C in separate contexts). ME-045 is documentation-level; HE-014 is architecture-level.

#### ME-046: Corrected Screenshot Recovery Protocol
- **What:** Define standard recovery protocol: screenshots must cover ENTIRE page at regular intervals (every 900px), not curated regions. When screenshot validation (ME-006) fires, this defines what to do.
- **Where:** `MANIFEST.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** ME-006 (in plan) detects bad screenshots but has no standard recovery procedure. Detection without recovery = incomplete protocol. **Strongest restoration case** per audit-18-21 — ME-006's companion.
- **Restoration case:** STRONG — +5 lines, makes ME-006 complete.

---

### 3E. Reservoir Value-System Corrections (11 items, all CONSIDER tier)

#### ME-047: 3 Perceptually Distinct Background Registers
- **What:** Codify LIGHT/MEDIUM/DARK as 3 background registers. "FEWER distinctions with LARGER deltas." Instead of 6 barely-distinguishable cream shades, use 3 distinct registers.
- **Where:** `artifact-builder-recipe.md` or TC Brief
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Builder continues creating 6 barely-distinguishable cream shades. Perceptual flatness persists.

#### ME-048: One Unique Visual Element Per Zone
- **What:** Add instruction: "If every zone is interchangeable, the design is templated, not composed." Each zone should have at least one distinguishing visual component.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Zones visually identical. Zone 4 monotony (CR-5/CR-15 cross-run pattern) persists. Recurring issue across VA and V3 runs.

#### ME-049: 2-3 Dark Moments Distributed Across Scroll
- **What:** Add instruction: "A page that is entirely light cream creates scroll fatigue. Include 2-3 dark-background moments distributed across the scroll."
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** No dark-background pacing moments. Scroll fatigue from uniform light palette.

#### ME-050: Widen Spacing Compression Range to 3:1
- **What:** Add instruction: "If max padding is 80px, min should be <=27px." Current 2.5:1 ratio barely registers perceptually.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +3 lines / -0 / net +3
- **In 8-plan?** NO
- **Loss if skipped:** Current 2.5:1 spacing compression barely registers. Spatial monotony persists.

#### ME-051: Replace Retired Questions with Experiential Questions
- **What:** After ME-037 retires 4 structural questions, replace with 4 experiential questions: PA-87 (content-form specificity), PA-99 (return desire), NEW-07 (custom vs template), NEW-17 (rule-breaking/sprezzatura).
- **Where:** `pa-questions.md` (requires 5-location update per M-22)
- **Budget impact:** +20 lines / -20 lines (retirements) / net 0
- **In 8-plan?** YES (bundled with ME-037 as atomic operation)
- **Loss if skipped:** N/A — included in plan.

#### ME-052: One-Line Audience Description for PA Auditors
- **What:** Add to PA auditor prompts: "The intended audience for this page is [X]." Ensure no build-intent leaks (M-04 context isolation).
- **Where:** `pa-deployment.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Auditors evaluate without knowing who the page is for. Cannot assess whether design choices serve the audience.

#### ME-053: Container Width Per-Zone Exceptions for Code
- **What:** Code zones may expand to 1200px. Prose stays 960px. Relaxes NON-NEGOTIABLE container width constraint only for code/data.
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +5 lines / -0 / net +5
- **In 8-plan?** NO
- **Loss if skipped:** Code blocks truncated at 960px, harming readability. Documented as conflict with 960px NON-NEGOTIABLE.

#### ME-054: Remove Dead CSS/Unused Tokens
- **What:** Remove unused font-weight 700 (saves 20-50KB), 3 unused custom properties, `.featured-code` class if unused.
- **Where:** `components.css`, `tokens.css`
- **Budget impact:** +0 lines / -13 lines / net -13
- **In 8-plan?** NO
- **Loss if skipped:** Dead code persists, adding to pipeline complexity. This is a pure SUBTRACTION — costs nothing, reduces complexity.
- **Restoration case:** STRONG per audit-18-21 — -13 lines, aligns with "subtract first" principle.

#### ME-055: Anti-Goodhart "What Would You REMOVE?" PA Question
- **What:** Add PA question that inverts PA's additive bias: "What would you REMOVE from this page to improve it?"
- **Where:** `pa-questions.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Every PA question asks "what's missing/wrong." None asks "what's excess." Additive bias persists.

#### ME-056: Codify Best CSS Patterns as Technique Library
- **What:** Document available CSS techniques: zone-adaptive font-size, dark code block inversion, inversion block pattern, font-family trinity, border hierarchy with color-weight pairing. Use world-description framing (M-12).
- **Where:** `artifact-builder-recipe.md`
- **Budget impact:** +20 lines / -0 / net +20
- **In 8-plan?** NO
- **Loss if skipped:** CSS patterns exist only in reference files builder may not see. Builder reinvents techniques each run.

#### ME-057: Weaver Emotional Arc to Fix Mapping
- **What:** After emotional arc analysis, check if any top-5 fix improves the weakest register. Add compositional recommendation as Fix #6 if not.
- **Where:** `pa-weaver.md`
- **Budget impact:** +10 lines / -0 / net +10
- **In 8-plan?** NO
- **Loss if skipped:** Weaver's emotional arc analysis is produced then completely ignored in fix prioritization. High-quality analysis wasted.
- **Fresh-eyes flag:** YES — audit-05-08 lists ME-057 as suspicious enrichment.

---

### 3F. Suspicious/Flagged COULD Items

The fresh-eyes auditor (audit-05-08) flagged these COULD items as potentially suspicious enrichments — items whose cost-benefit ratio may not justify inclusion even in a future wave:

| Item | Concern |
|------|---------|
| ME-018 | Gate perceptibility classification — metadata-only, but adds column to manifest everyone must maintain |
| ME-019 | PA-05 as range — downstream impact on tier system undefined (ADV-05d) |
| ME-020 | Orchestrator self-assessment — adds introspection overhead with uncertain quality improvement |
| ME-032 | Pipeline-introspection markers — metadata-only, low impact |
| ME-044 | Document experiential pass rationale — documentation, not code; adversarial recommends cutting |
| ME-057 | Emotional arc mapping — disconnected from fix loop; uncertain whether Weaver would use it |

---

### 3G. Reservoir STILL-USEFUL Items Not in Any ME (from audit-01-04)

These are STILL-USEFUL items from File 02 (reservoir extraction) that passed the V3 filter but were not elevated to ME-numbered enrichments:

#### Usability Improvements

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| VA-03 | Break Zone 4 monotony (5 identical principle blocks) | HTML structure | SHOULD |
| VA-06 | Fix subtitle low-contrast on dark header | HTML CSS | SHOULD |
| VA-07 | Reduce gap between TOC and Zone 1 | HTML CSS | COULD |
| VA-08 | Zebra-striping for table rows | HTML CSS | COULD |
| VA-09 | Collapsible treatment for long startup script | HTML structure | COULD |
| VA-10 | Visual preview for collapsed accordion items | HTML structure | COULD |
| VA-11 | Differentiate card backgrounds by level | HTML CSS | COULD |
| CSS-07 | Add scroll-margin-top for anchor links | HTML CSS | COULD |
| E01-04 | Responsive drop cap sizing (3.5em too large at 768px) | Builder recipe | COULD |
| E03-03 | Recovery command danger hierarchy (destructive vs safe commands) | Builder recipe | SHOULD (SAFETY) |
| E08-03 | Text measure variation (uniform 960px left-aligned = fatiguing) | Builder recipe | SHOULD |
| E08-05 | Vary heading treatment for emphasis | Builder recipe | COULD |
| E08-06 | Vary callout structure for different types | Builder recipe | COULD |
| E08-07 | Design footer as real destination, not just stop | Builder recipe | COULD |
| E08-10 | Distinguish ASCII diagrams from code blocks | Builder recipe | COULD |
| E06-11 | Deliberate plainness instruction (reader needs rest zones) | TC Brief Template | SHOULD |
| E06-12 | Thematic return instruction (circular narrative) | TC Brief Template | COULD |
| AR-04 | One-line audience description for PA auditors | PA protocol | COULD |

#### Builder Experience Improvements

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| E01-01/E04-01 | Concept-naming for custom properties (--accent-blue = #A07D50 is a bug) | Builder recipe | COULD |
| CSS-03 | Remove unused font-weight 700 from import (20-50KB) | components.css | COULD |
| CSS-04 | Remove dead tokens (3 unused custom properties) | tokens.css | COULD |
| CSS-09 | Remove .featured-code if unused (13 dead CSS lines) | components.css | COULD |
| CSS-10 | Codify zone-adaptive body font-size as technique | Builder recipe | COULD |
| CSS-11 | Codify dark code block inversion as technique | Builder recipe | COULD |
| CSS-12 | Codify inversion block pattern as technique | Builder recipe | COULD |
| CSS-14 | Codify border hierarchy with color-weight pairing as technique | Builder recipe | COULD |

#### Value System Corrections

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| E08-01 | 3 perceptually distinct background registers (LIGHT/MEDIUM/DARK) | Builder recipe / TC Brief | SHOULD |
| E08-02 | One unique visual element per zone | Builder recipe / TC Brief | SHOULD |
| E08-04 | 2-3 dark moments distributed across scroll | Builder recipe / TC Brief | SHOULD |
| E08-08 | Widen spacing compression range to 3:1 | Builder recipe | COULD |
| E08-09 | Editorial-weight-by-importance heading treatment | Builder recipe | COULD |
| E08-11 | Asymmetric spacing for editorial emphasis | Builder recipe | COULD |
| E05-02 | Metaphor persistence in final zones | Builder recipe / TC Brief | SHOULD |
| E06-09 | Emotional arc from inventory to sequence | PA questions | COULD |
| E03-05 | Second interstitial moment for long pages | Builder recipe | COULD |

#### Process Simplifications

| Item ID | Description | Target | Tier |
|---------|-------------|--------|------|
| AR-01 | Container width per-zone exceptions for code-heavy content | MANIFEST / Builder recipe | COULD |
| AR-02 | Palette families instead of warm/cool binary | Builder recipe / Gate runner | COULD |
| AR-10 | Remove mechanism count floor (make ADVISORY) | Gate runner | COULD |
| VA-04 | Semantic color coding for principle borders | Builder recipe | COULD |
| VA-12 | Strengthen metaphor from announced to structural | Builder recipe | SHOULD |
| PF-14 | Auditor conviction statement (single DOMINANT finding per auditor) | PA deployment | COULD |
| PF-15 | Soft boundary for REBUILD/REFINE | MANIFEST | COULD |

#### Experiential PA Questions Pool (24 candidate questions for future ME-051-style swaps)

From File 02 Section B — 24 experiential questions rated STILL-USEFUL. Only 4 were selected for ME-051. The remaining 20 form a backlog:

PA-80, PA-81, PA-84, PA-85, PA-86, PA-88, PA-89, PA-90, PA-91, PA-93, PA-95, PA-96, PA-97, PA-98, NEW-01, NEW-02, NEW-04, NEW-05, NEW-08, NEW-18.

These are available for future question portfolio rebalancing if ME-037+ME-051 swap proves successful.

---

### 3H. COULD Items Unique to Files 07/08 (No ME Number, No Implementation Path)

These items were identified in handoff enrichments (File 07) and pipeline PA enrichments (File 08) but were NOT merged into the master enrichment list and have no ME number:

| Source | Item | Description | Impact |
|--------|------|-------------|--------|
| HE-009 | Reduce PA auditors from 9 to 5 | Dual-route critical questions (PA-02/PA-08 to 2 auditors, PA-05 to 3). Saves $15-20/run. Listed as excluded process question (V3E-006) in master list. | SIGNIFICANT cost + architecture improvement |
| PE-008 | Adversarial question prioritization under catastrophic defects | I's void-resistant questions (PA-28/PA-27/PA-48) become HIGHEST PRIORITY during void events. | MINOR protocol improvement, easy to add |
| PE-010 | Auditor-side hypothetical PA-05 score | Auditor A generates hypothetical score for working content, labeled "(hypothesis)." Companion to ME-019 Weaver-side range. | MINOR nuance |
| PE-014 | Hypothetical cross-validation scores under dominant defects | Cross-validators provide actual + hypothetical scores when dominant defect exists. | MINOR nuance |
| PE-015 | Integrative Auditor inclusion requirement | Always include Integrative Auditor in PA analyses. Currently missing from analysis. | Process note |
| PE-016 | Optimize 9 auditors for diversity under defect conditions | Keep 9 but redirect analysis when void exists. Different from HE-009 (reduce). | Routing nuance |
| File 08 Appendix | PA question for justified vs arbitrary palette deviation | "When you see a visual element that breaks the pattern, does the break SERVE the content?" Addresses purple border disagreement (2 positive, 2 negative, 5 N/A). | Scoring gap |
| HE-012 (lost) | PA-83: "Does the page end cleanly at footer?" | Explicit trailing void PA question lost in merge to ME-007 (which only fixes the gate). | PA coverage gap |
| HE-012 (lost) | Always capture screenshot at scrollHeight - viewportHeight | Absolute bottom-of-page screenshot in every capture run. Lost in merge to ME-007. | Capture protocol gap |
| PE-009 (lost) | Screenshot content matches expected section count from navigation | Check 3 of screenshot validation: structural promise cross-check. Lost in merge to ME-006. | Validation gap |

---

### 3I. COULD Budget Summary

| Sub-Category | Item Count | Total Net Lines |
|-------------|-----------|----------------|
| Gate Severity Restructure (ME-024 to ME-030) | 7 | +50 |
| PA Enrichments (ME-031 to ME-036) | 6 | +38 |
| Builder Recipe (ME-038, ME-040, ME-041) | 3 | +66 |
| Tracking/Docs (ME-042 to ME-046) | 5 | +45 |
| Reservoir Value-System (ME-047 to ME-057) | 11 (10 not in plan + ME-051 in plan) | +62 (excl ME-051) |
| Un-numbered File 07/08 items | 10 | ~+30 est |
| Reservoir STILL-USEFUL (no ME) | ~42 | ~+150 est |
| **TOTAL COULD** | **~84** | **~+441 est** |

**Budget reality:** The 8-change plan uses ~115 of ~240 safe budget lines. ~125 lines remain. The full COULD tier at ~441 lines is 3.5x the remaining budget. Only ~28% of COULD items can fit if budget is respected.

**Highest-ROI COULD items** (from audit-18-21 restoration analysis):
1. ME-054 (dead CSS removal): **-13 lines** — pure subtraction
2. ME-035 + ME-036 (PA question extensions): **+2 lines** — virtually free
3. ME-046 (screenshot recovery): **+5 lines** — completes ME-006
4. ME-038 (px-only borders): **+3 lines** — prevents known GR-09 failures

These 4 items total **-3 net lines** and close the most cost-effective gaps.

---

---

## SECTION 8: GAPS AND UNRESOLVED

Every gap, missing item, unresolved question, and uncaptured finding from the audit corpus.

---

### 8A. ALL 18 MISSING Findings from File 18 Gap Check

Items rated MISSING — findings from Phase 2 reports with ZERO coverage by any enrichment.

#### GAP-01: No Responsive Breakpoint Specification
- **Description:** Builder has no guidance on 768px/480px layout reorganization. No enrichment specifies breakpoint behavior.
- **Source:** step4-pa-epsilon.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-01 — Add responsive breakpoint specification (768px, 480px) to artifact-builder-recipe.md.

#### GAP-02: No Table Responsive Behavior Guidance
- **Description:** Tables do not adapt at narrow viewports. No enrichment addresses table layout at 768px or below.
- **Source:** step4-pa-epsilon.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-01 (combined with GAP-01).

#### GAP-03: Metaphor Structural Embedding Not Enforced
- **Description:** Metaphor announced in language ("gas town," "settlement") but not embedded in layout or typography. No enrichment strengthens metaphor enforcement. This is structurally in TC Brief territory, but the gap means nothing prevents metaphor-as-label-only.
- **Source:** step4-pa-zeta.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** step4-pa-zeta.md has 0% FULL enrichment coverage — the lowest of any Phase 2 report. The metaphor/coherence domain is a structural blind spot.

#### GAP-04: No Builder Feedback/Iteration Loop
- **Description:** Builder never sees gate results or PA feedback. Pipeline is single-pass by design. No enrichment creates a feedback path from gates/PA back to builder.
- **Source:** step-paradigm-analysis.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** ME-017 (Phase 4) partially addresses this by applying fixes within a run, but it was deferred. The paradigm-level question remains: should the pipeline be iterative?

#### GAP-05: No Taste/Judgment Metric
- **Description:** Pipeline has no metric for design taste or aesthetic judgment. ME-055 ("What would you REMOVE?") is one taste signal but not a metric. Pipeline optimizes measurable properties but cannot evaluate gestalt quality.
- **Source:** step-paradigm-analysis.md
- **Tier:** COULD
- **In 8-plan?** NO

#### GAP-06: LLM Vision != Human Vision
- **Description:** Fundamental limitation of LLM-based PA. LLM visual perception differs from human visual perception in unknown ways. No enrichment addresses this gap.
- **Source:** buddy-metacognitive.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** This is arguably unfixable within the current architecture. Would require human-in-the-loop validation (GAP-07).

#### GAP-07: No Human-in-the-Loop Review Step
- **Description:** Pipeline is entirely agent-driven. No enrichment adds human review. The pipeline's consensus mechanism (9 auditors) assumes each auditor is independent, but all share the same LLM vision limitations.
- **Source:** buddy-metacognitive.md
- **Tier:** COULD
- **In 8-plan?** NO

#### GAP-08: Visual Component Completeness Check Missing
- **Description:** No PA question or gate checks whether charts have legends, diagrams have axis labels, or tier counts are consistent between text and diagrams.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-02 — Visual component completeness PA question.

#### GAP-09: Content Accuracy Verification Missing
- **Description:** No mechanism checks text-diagram consistency. Example: Complexity Ladder shows 5 tiers but text describes 6. Content accuracy is outside gate scope and not in any PA question.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-02 (combined with GAP-08).

#### GAP-10: Invisible DOM Content Detection Gate Missing
- **Description:** No gate checks for `opacity: 0`, `visibility: hidden`, or zero-height content-bearing elements. Content can be present in DOM but invisible to users.
- **Source:** gate-usability-audit.md Section 4F
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-03 — GR-65 invisible DOM content detection gate (RECOMMENDED).

#### GAP-11: Scroll-Reveal / Animation-Gated Content Detection Missing
- **Description:** No gate detects JS-gated content that may be invisible at capture time. IntersectionObserver + opacity:0 as default state leaves content invisible until scroll triggers reveal.
- **Source:** gate-usability-audit.md Section 4G
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** ME-006 (screenshot validation) partially addresses by expanding CSS overrides to force visibility, but the gate-level detection is absent.

#### GAP-12: Empty Sections / Missing Content Detection
- **Description:** No gate detects headings with no content below them. Empty sections pass all current gates.
- **Source:** gate-usability-audit.md Section 4H
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-04 — GR-66 empty section detection gate (ADVISORY).

#### GAP-13 (embedded): Metaphor-Typography Weight Mapping
- **Description:** "Gas town" metaphor could be expressed through typography weight = resource weight. Specific creative suggestion with no enrichment path.
- **Source:** step4-pa-zeta.md
- **Tier:** COULD
- **In 8-plan?** NO
- **Note:** Creative suggestion, not a spec change. Belongs in TC Brief guidance, not gate/builder spec.

#### GAP-14 (embedded): Settlement Map Missing Legend
- **Description:** Settlement Map has no legend explaining marker meanings. Visual component incompleteness.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Note:** Content-specific issue. Would be caught by proposed NEW-02 (visual component completeness).

#### GAP-15 (embedded): Complexity Ladder Tier Count Mismatch
- **Description:** Complexity Ladder diagram shows 5 tiers but text describes 6. Content accuracy failure.
- **Source:** inattentional-blindness-audit.md
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Note:** Content-specific issue. Would be caught by proposed NEW-02.

#### GAP-16 (embedded): Content Visibility Gate (expanded scope)
- **Description:** Gate 4F scope: `opacity: 0`, off-screen positioning, `color` matching `background-color`. Broader than GAP-10.
- **Source:** gate-usability-audit.md Section 4F
- **Tier:** SHOULD
- **In 8-plan?** NO
- **Note:** Overlaps with GAP-10 but adds color-matching-background detection.

#### GAP-17 (embedded): Image/SVG Load Verification Gate
- **Description:** GR-63: `naturalWidth > 0`, SVG bounding box > 0, alt text presence. No ME covers this.
- **Source:** gate-usability-audit.md Section 4D
- **Tier:** COULD
- **In 8-plan?** NO
- **Proposed fix:** NEW-07 — GR-63 image/SVG load verification gate (ADVISORY).

#### GAP-18 (embedded): Touch Target Size Gate
- **Description:** GR-64 (WCAG 2.5.5): interactive elements >= 44x44px clickable area. No ME covers this.
- **Source:** gate-usability-audit.md Section 4E
- **Tier:** COULD
- **In 8-plan?** NO

**Total MISSING: 18 items. 0 in the 8-change plan. 5 proposed new enrichments (NEW-01 through NEW-04, NEW-07) address 8 of the 18 gaps.**

---

### 8B. Zone 4 Monotony — NOT CAPTURED

**Finding:** Zone 4 monotony persists across runs. VA had 5 identical principle blocks. V3 has plain prose without components. This is a recurring cross-run pattern (CR-5/CR-15 in File 20).

**Why not captured:** No enrichment addresses zone-level visual monotony. ME-048 ("one unique visual element per zone") partially addresses from the builder side, but:
1. ME-048 is CONSIDER tier, not in plan
2. There is no PA-side detection question that asks "is any zone visually monotonous?"
3. No gate checks for structural variety within zones

**File 20 proposes:** ME-NEW-02 — Extend PA-50 or add new question: "Is any zone visually monotonous? A zone is monotonous if it contains only prose paragraphs with no structural variety (no grids, tables, collapsibles, callouts, or distinct components). Flag any zone with >3 consecutive paragraphs without a visual break."

**Status:** NOT in enrichment list. NOT in 8-change plan. NOT in any proposed new enrichment from File 18. Only appears in File 20 paradigm analysis.

---

### 8C. 7 Cross-Run Items NOT CAPTURED (from File 20)

| CR-ID | Description | Source | Actionable? | Status |
|-------|-------------|--------|-------------|--------|
| CR-3 | Zone transitions at exactly 16 RGB delta (floor-hugging). BV-02 catches <15 but no mechanism for "technically passing but perceptually marginal." | cross-run-comparison | YES — ME-NEW-01 proposed (BV-02 "comfortable margin" advisory: target >=25 not just >=15) | NOT CAPTURED. Proposed enrichment has no ME number. |
| CR-5/CR-15 | Zone 4 monotony persists across runs in different forms. VA = identical blocks, V3 = plain prose. Structural blind spot. | cross-run-comparison | YES — ME-NEW-02 proposed (zone monotony PA question) | NOT CAPTURED. See Section 8B above. |
| CR-6 | Loss of decision flow diagram from VA. V3 has no equivalent. | cross-run-comparison | NO — creative decision, not pipeline defect. Builder chose different components. | Correctly NOT an enrichment. |
| CR-7 | Loss of communication flow diagram from VA. V3 has no equivalent. | cross-run-comparison | NO — creative decision, same as CR-6. | Correctly NOT an enrichment. |
| CR-8 | Loss of code snippet headers (dark header bar) from VA. V3 code blocks lack the distinctive dark header treatment. | cross-run-comparison | NO — creative decision. Could be addressed by ME-056 (technique library) which documents dark code block inversion as an available technique. | Correctly NOT an enrichment, but related to ME-056. |
| CR-9 | Print styles regression. V3 has no print styles. VA had `@media print` rules. | cross-run-comparison | NO — too minor for enrichment. Not detectable by current gates. | NOT CAPTURED. No ME, no proposed enrichment. |
| CR-10 | Loss of drop cap mechanism from VA. V3 has no drop cap. | cross-run-comparison | NO — creative decision. Drop cap is a specific technique, not a requirement. | Correctly NOT an enrichment. |
| CR-16 | Responsive design repeats "scale not reorganize" pattern across ALL runs. Pipeline has no mechanism to evaluate responsive QUALITY — only checks responsive PRESENCE. | cross-run-comparison | YES — ME-NEW-03 proposed (responsive reorganization evaluation as PA-46 extension) | NOT CAPTURED. Proposed enrichment has no ME number. |

**Of 7+1 NOT CAPTURED items: 3 are actionable (CR-3, CR-5/15, CR-16). 4 are creative decisions (correctly not enrichments). 0 are in the 8-change plan. 0 have ME numbers.**

---

### 8D. Proposed ME-NEW Items (from Files 18 and 20)

Items proposed by gap analysis and paradigm analysis that have no ME number and no implementation path.

#### From File 18:

| ID | Description | Source Gap | Target File | Severity |
|----|-------------|-----------|-------------|----------|
| NEW-01 | Responsive breakpoint specification (768px, 480px) | GAP-01, GAP-02 | artifact-builder-recipe.md | MINOR |
| NEW-02 | Visual component completeness check for PA (legends, axes, tier counts) | GAP-08, GAP-09 | pa-questions.md | MINOR |
| NEW-03 | Invisible DOM content detection gate GR-65 (RECOMMENDED) | GAP-10 | gate-runner-core.js | MINOR |
| NEW-04 | Empty section detection gate GR-66 (ADVISORY) | GAP-12 | gate-runner-core.js | CONSIDER |
| NEW-05 | Pipeline philosophy statement ("reader experience is primary value") | P-11 | MANIFEST.md | MINOR |
| NEW-06 | Timestamp tracking in execution tracker | P-01 | EXECUTION-TRACKER-TEMPLATE.md | CONSIDER |
| NEW-07 | Image/SVG load verification gate GR-63 (ADVISORY) | P-12, GAP-17 | gate-runner-core.js | CONSIDER |
| NEW-08 | Prevent-detect principle in MANIFEST | P-07 | MANIFEST.md | CONSIDER |

#### From File 20:

| ID | Description | Source | Severity |
|----|-------------|--------|----------|
| ME-NEW-01 | BV-02 "comfortable margin" advisory (target >=25 RGB, not just >=15) | CR-3 | CONSIDER |
| ME-NEW-02 | Zone monotony detection PA question | CR-5/CR-15 | MINOR |
| ME-NEW-03 | Responsive reorganization evaluation (PA-46 extension) | CR-16 | CONSIDER |
| ME-NEW-04 | Conditional REFINE cycle (re-evaluate E-009 AFTER Tier 1) | paradigm | BLOCKING (conditional) |
| ME-NEW-05 | Specification retirement protocol (net growth <=0, 4,000-line threshold) | paradigm | SIGNIFICANT |
| ME-NEW-06 | Expand exemplar set to 3-5 pages with immersion framing | paradigm | CONSIDER |
| ME-NEW-07 | Timestamp population enforcement in tracker template | paradigm | MINOR |
| ME-NEW-08 | Simplify file naming convention to match actual practice | paradigm | MINOR |
| ME-NEW-09 | COMPOSED-mode brief budget (165-300 lines) | paradigm | MINOR |
| ME-NEW-10 | Extend ME-016 with full accessibility checklist (keyboard, alt text, color, skip-link) | paradigm | SIGNIFICANT |
| ME-NEW-11 | Page length consideration + navigation requirement for >15,000px pages | paradigm | CONSIDER |
| ME-NEW-12 | Weaver corrected screenshots must >= auditor screenshot count (evidence symmetry) | paradigm | MINOR |
| ME-NEW-13 | Accessibility item added to experiential pass (ME-001 extension) | paradigm | MINOR |

**Total proposed: 21 new enrichments. 0 in the 8-change plan. 0 have been formally accepted into the enrichment list.**

---

### 8E. ARIA Regression (-63%) Gap

**Finding:** V3 has 7 ARIA attributes vs VA's 19 — a 63% regression. This is the single biggest measurable accessibility regression across runs.

**Enrichment:** ME-016 targets >=15 ARIA attributes with builder recipe instructions.

**In 8-change plan?** NO. ME-016 is deferred.

**In any proposed new enrichment?** ME-NEW-10 extends ME-016 with full accessibility checklist, also not in plan.

**Status:** The most measurable regression in the entire analysis has no representation in the implementation plan. ME-016 at +8 lines to builder recipe is one of the strongest restoration cases identified by audit-18-21.

---

### 8F. Gorilla Experiment Framing — Flattened

**Finding (from File 19):** ME-001's rationale mentions "attentional tunnels" but the deeper gorilla experiment framing is compressed to a single clause. The key insight — questions don't just GUIDE attention, they CREATE the auditor's perceptual reality — is lost.

Specific nuances flattened:

| ID | What Was Lost |
|----|---------------|
| UI-01 | Per-auditor attentional tunnel analysis: each of 9 auditors SAW the chart AS something different (A=rhythm device, B=text, C=spatial weight, D=pacing beat, E=grid element, F=pattern instance, G=metaphor vehicle, H=responsive object, I=design choice). The most persuasive evidence for ME-001. |
| UI-02 | "Analytical evaluation != experiential evaluation" metacognitive warning not explicitly articulated in any enrichment. |
| UI-03 | Comprehension test concept: "After reading the page, can an agent answer questions ABOUT the content?" Tests whether page communicates information, not just whether text is readable. Distinct failure class with no enrichment. |

**Status:** ME-001 implements the correct fix (experiential pass). The evidence FOR ME-001 is not preserved anywhere implementers would see it. ME-044 (document rationale) would capture this but is COULD tier and not in plan.

---

### 8G. 6-Type Failure Taxonomy Gaps

File 19 identified a 6-type usability failure taxonomy. Coverage:

| Type | Name | Enrichment | In 8-Plan? | Status |
|------|------|------------|-----------|--------|
| Type 1 | False Affordance | ME-031 | NO | GAP — enrichment exists but deferred |
| Type 2 | Communicative Failure | ME-022 | NO | GAP — enrichment exists but deferred |
| Type 3 | Navigation Desert | ME-021 | NO | GAP — enrichment exists but deferred |
| Type 4 | Content-Promise Mismatch | ME-023 | NO | GAP — enrichment exists but deferred |
| Type 5 | Invisible Excess | ME-007 + ME-041 | PARTIAL | ME-007 in plan, ME-041 not |
| Type 6 | Cross-Element Contradiction | **NONE** | NO | **GAP — no enrichment at all** |

**Type 6 (Cross-Element Contradiction)** is the only failure type with zero enrichment coverage. File 19 proposes extending ME-023 to include cross-element contradiction checks, but ME-023 itself is deferred.

**Status:** 5/6 types have enrichments. 1/6 (Type 5, partially) is in the plan. 1/6 (Type 6) has no enrichment at all. The taxonomy as a detection framework is 83% covered by enrichments but only 8% covered by the plan.

---

### 8H. Paradigm-Level Questions with No Spec Fix

These findings from the paradigm analysis (File 20) and metacognitive review (File 19) identify structural limitations that cannot be addressed by spec enrichments:

| Question | Source | Why No Spec Fix |
|----------|--------|-----------------|
| "Is PA-05 valid?" | buddy-metacognitive.md | PA-05 as a metric may not measure what matters. Range scoring (ME-019) improves calibration but doesn't address whether the metric itself is correct. |
| "LLM vision != human vision" | buddy-metacognitive.md | Fundamental architectural limitation. All 9 auditors share same LLM vision model. No spec change fixes this. |
| "More spec = worse output?" (ADV-08a) | adversarial review | Evidence: 100 lines -> PA-05 4/4; 610 lines -> 3.5/4; 3,600 lines -> 3/4; 963 lines -> 1.5/4. Correlation suggests spec volume inversely correlates with quality. Proposed: 4,220 lines. |
| "Opus vs Sonnet builder" (N-20) | cross-reference | Largest unexamined confound. One experiment ($5-15, 1-2 hrs) could render half the enrichment list unnecessary. |
| "Pipeline's 400:1 analysis-to-fix ratio" (N-21) | cross-reference | Complexity disease is self-replicating. Each analysis wave generates more analysis. No spec change addresses this. |
| "Multi-pass approach rejected without evidence" (P-32) | gap-check | CD-006 (CEILING tier) was multi-pass. Pipeline is single-pass by design. No enrichment enables iteration beyond ME-017 (mechanical fixes only, deferred). |
| "Content selection affects quality" (P-34) | gap-check | Content choice (what the page is ABOUT) affects quality but no enrichment addresses content selection methodology. |
| "Should the pipeline be iterative?" (GAP-04) | step-paradigm-analysis.md | Fundamental architecture question. Single-pass pipeline cannot incorporate feedback. |
| "Should auditor count be 5 not 9?" (HE-009) | handoff enrichments | Process question excluded from master list (V3E-006). $15-20 savings per run. Excluded as "process question." |

**Status:** These 9 questions represent the frontier beyond spec enrichments. They require EXPERIMENTS (N-20, HE-009), ARCHITECTURE CHANGES (GAP-04, P-32), or ACCEPTANCE OF LIMITATIONS (LLM vision, PA-05 validity).

---

### 8I. Content Quality Observations Outside Pipeline Scope

Findings that describe content-level issues the pipeline cannot control:

| Observation | Source | Why Outside Scope |
|-------------|--------|-------------------|
| Complexity Ladder diagram shows 5 tiers, text describes 6 | inattentional-blindness-audit.md | Content accuracy. Pipeline builds HTML from brief; brief accuracy is upstream. |
| Settlement Map has no legend | inattentional-blindness-audit.md | Content completeness. Component design decision, not pipeline spec. |
| "Gas town" metaphor not expressed in layout | step4-pa-zeta.md | Creative direction. TC Brief territory, not builder spec. |
| 23 usability issues identified, most content-level | inattentional-blindness-audit.md | 16 of 23 are content decisions (word choice, diagram design, information architecture). |
| Large red "8" numeral conveys no information | PA auditors G, H, I | Decorative element judgment call. Not captured by ME-022 (charts/diagrams, not standalone numerals). |
| Purple "Idea Compiler" border — intentional or arbitrary? | PA auditors A, E (positive), G, I (negative) | No PA question distinguishes intentional from arbitrary rule-breaking. Proposed question in File 08 Appendix has no ME number. |

**Status:** These are legitimate quality observations that live outside the pipeline's control boundary. The pipeline can detect some (via experiential pass) but cannot prevent them (content decisions are made upstream in brief assembly).

---

### 8J. Adversarial Prerequisites NOT in Any Plan

The adversarial review (File 06) identified prerequisites that must be completed before the 8-change plan or any future wave. None are in the 8-change plan and none have ME numbers.

| ID | Prerequisite | Description | Status |
|----|-------------|-------------|--------|
| ADV-07a | Gate-runner subtraction plan | Remove GR-33 through GR-42 + GR-08 spec text (~150 lines) from gate-runner-core.js. THE most important prerequisite for any gate additions. Without it, gate-runner is over capacity. | **NOT IN ANY PLAN.** The 8-change plan adds +25 lines to gate-runner without subtraction. Technically violates net-zero constraint, though +25 on ~1,437 lines is 1.7%. |
| ADV-07b | Builder recipe subtraction | Remove duplicate component pattern descriptions (~20-30 lines) from artifact-builder-recipe.md. Needed before ME-038/039/041/047-056 additions. | **NOT IN ANY PLAN.** |
| ADV-05b | Combined gate budget validation | ME-003 + ME-014 + ME-040 combined = 180 lines on zero-budget artifact. Even after 150-line subtraction = net +30. Must validate combined impact. | **NOT IN ANY PLAN.** All 3 deferred, so moot for now. |
| ADV-05c | MECHANICAL + circuit breaker interaction | ME-005 (MECHANICAL = REFINE) + ME-008 (usability breaker = "Fix #1"). When both coexist, verdict behavior undefined. Combinatorial explosion of verdict states. | **NOT IN ANY PLAN.** ME-008 deferred, so moot for now. But ME-005 IS in plan — the interaction with future ME-008 is undefined. |
| ADV-05d | PA-05 range + tier system mapping | If PA-05 becomes 2.5-3.0 range (ME-019), which tier? Range straddles boundaries. No downstream adaptation documented. | **NOT IN ANY PLAN.** ME-019 deferred, so moot for now. |
| ADV-07e | Brief assembler compression behavior | Multiple enrichments add to TC Brief Template without acknowledging that assembler compresses additions away (79-line map -> ~12 lines historically). | **NOT IN ANY PLAN.** Structural issue affecting all brief-facing enrichments. |

---

### 8K. Nuances Lost in Merge (Master List Deduplication Losses)

When Files 07 and 08 were deduplicated into the 57-item master list, these specific nuances were lost:

| Master Item | Source | What Was Lost |
|-------------|--------|---------------|
| ME-006 | PE-009 Check 3 | Screenshot content should match expected section count from page's own navigation. Structural promise cross-check absent from ME-006. |
| ME-007 | HE-012 | PA question "PA-83: Does the page end cleanly at footer?" + "always capture screenshot at scrollHeight - viewportHeight." Both lost — ME-007 only fixes the gate algorithm, not PA/capture coverage. |
| ME-019 | PE-010 | Hypothetical PA-05 score should be generated by AUDITOR A, not just presented by Weaver. Auditor-side instruction lost. |
| ME-019 | HE-001 | Priming mechanism explanation: Weaver is optimistic because it reads 9 auditor reports before seeing corrected screenshots. Causal explanation absent from ME-019. |
| ME-015 | PE-012 | "Typically A, since they are the impression specialist" — specifies WHICH auditor does First-Auditor Halt. ME-015 mentions protocol but not assignment. |
| ME-018 | HE-008 | Systemic pattern: false positives get narratives ("known limitation"), false negatives get ignored ("not a problem"). Asymmetric treatment meta-observation lost. |
| ME-045 | HE-014 | Pipeline-A/Pipeline-B structural split proposal (P0-P2 vs P3A-P3C in separate contexts). ME-045 has documentation-level change; HE-014 has architecture-level proposal. |

**Status:** These nuances are documented in audit-05-08 Section "Nuances in Merged Items That Master List LOSES" but have no formal preservation path. If/when these ME items are implemented, the nuances should be restored from the source files (07, 08).

---

### 8L. Process Gaps in 8-Change Plan Implementation

From audit-18-21 Section 6 (dependency check), these process gaps exist in how the 8-change plan will be implemented:

| Gap | Description | Source |
|-----|-------------|--------|
| M-04 verification not mentioned | ME-002 (Weaver priority) should verify no gate thresholds leak to auditors. Not in implementation steps. | File 13 requirements vs File 21 steps |
| Result schema preservation not mentioned | ME-007 (GR-44 fix) must maintain `{gate, name, status, measured, threshold}` schema. Not in implementation steps. | File 13 requirements vs File 21 steps |
| 3-location verdict sync not mentioned | ME-005 must update verdict logic in gate-manifest.json L55-59 + MANIFEST L275-285 + gate-runner-core.js verdict summary. Not explicitly in steps. | File 13 requirements vs File 21 steps |
| Builder recipe capacity verification missing | After ME-004 and ME-039 additions, builder recipe should be verified to stay under 1,000 lines. No verification step. | File 13 requirements vs File 21 steps |
| MANIFEST Appendix E template updates | All agent-facing changes (ME-001, ME-002, ME-004, ME-037+ME-051) require MANIFEST Appendix E prompt template updates. If templates not updated, agents never receive changes. | M-09 requirement |
| Question totals in 3+ locations | ME-037+ME-051 must update pa-deployment.md L54, pa-manifest.md L36, MANIFEST L159. Missing any = inconsistency. | M-22 requirement |
| ME-001 without ME-009 | Experiential pass generates 9 unstructured reports. Without aggregation thresholds (>=3/9 = CONFIRMED), Weaver overwhelmed. | audit-18-21 cross-file synthesis |
| ME-006 without ME-046 | Screenshot validation detects bad screenshots. Without recovery protocol, operators don't know what to do when validation fires. | audit-18-21 cross-file synthesis |

---

### 8M. FIX-FAILED Items Not Addressed by Plan

6 of 8 FIX-FAILED items from File 04 are NOT in the 8-change plan:

| FF-ID | Description | Original Fix | Enrichment | In Plan? | Severity |
|-------|-------------|-------------|------------|----------|----------|
| FF-01 | GR-09 tolerance bands NOT functioning. Integer-only checking despite FIX-003 spec. | FIX-003 | ME-013 (V3E-021) | NO | MEDIUM — gate accuracy |
| FF-02 | GR-14 structural false positives EXPANDED. 13 false positives from nested section containers. | FIX-005 | ME-012 (V3E-020) | NO | HIGH — gate credibility, 13 false positives per run |
| FF-03 | GR-17 density stacking MUTATED to list items. 30 li violations at 8px. | FIX-006 | ME-029 (V3E-043) | NO | LOW |
| FF-05 | GR-05 warm palette catches sub-perceptual tints. 4% opacity triggers REQUIRED failures. | FIX-001 | ME-010 (V3E-022) | NO | HIGH — credibility, priority inversion |
| FF-06 | GR-06 font trinity catches never-rendered fallback fonts. 181 violations. | FIX-002 | ME-011 (V3E-023) | NO | HIGH — credibility, 181 false violations |
| FF-08 | Conviction as HTML comment not separate file. | FIX-022 + FIX-079 | None needed | NO | LOW — accept HTML comment as valid |

**Status:** FF-02 (13 false positives), FF-05 (sub-perceptual REQUIRED failures), and FF-06 (181 false font violations) are the most concerning. These create persistent noise in gate output that may obscure the impact of the 8-change plan's improvements. Combined, they represent ~207 false violations per run.

---

### 8N. Adversarial Attacks and Structural Warnings

The adversarial review (File 06) identified 8 attacks with 4 CRITICAL and 4 SIGNIFICANT findings. These are structural warnings about the enrichment approach itself:

| # | Attack | Finding | Severity | Addressed? |
|---|--------|---------|----------|-----------|
| 1 | Complexity ratchet | 42:1 add:remove ratio. "The list reproduces the disease it diagnoses." | CRITICAL | PARTIALLY — 8-change plan is smaller (8 items vs 57), but still 7:1 add:remove. |
| 2 | Capacity budget | 785 vs 240 safe budget lines (3.3x over) for full list. | CRITICAL | YES — 8-change plan at ~115 lines is within budget. |
| 3 | Actionability | 5/9 BLOCKING items fully actionable, 4/9 partial (ME-003, ME-005, ME-006 need discovery work). | SIGNIFICANT | PARTIALLY — ME-005 and ME-006 are in plan but still partial in actionability. |
| 4 | Anti-loss honesty | 3 CAUTION items should be RISK (ME-005, ME-017, ME-010). 4 multi-mechanism interactions unacknowledged. | SIGNIFICANT | PARTIALLY — ME-005 is in plan with CAUTION rating. ME-017 and ME-010 deferred. |
| 5 | Conflict detection | 4 missing conflicts including MECHANICAL vs circuit breaker, PA-05 range vs tier system. | SIGNIFICANT | PARTIALLY — conflicts are moot for deferred items except ME-005. |
| 6 | Priority challenge | Subtractions ranked 36th/54th, should be 1st-5th. | CRITICAL | PARTIALLY — ME-037 (subtraction) is in plan. ME-054 (subtraction) is not. Gate-runner subtraction is not. |
| 7 | Missing items | Gate-runner subtraction plan (THE prerequisite) completely absent. Opus vs Sonnet confound unexamined. | CRITICAL | NO — neither gate-runner subtraction nor Opus experiment are in plan. |
| 8 | Paradigm challenge | More lines correlates with worse PA-05 across N=4 runs. | SIGNIFICANT | ACKNOWLEDGED — 8-change plan is deliberately smaller. But structural warning persists. |

---

### 8O. Complete Gap Statistics

| Category | Count | In 8-Plan | Coverage |
|----------|-------|-----------|----------|
| MISSING findings (File 18) | 18 | 0 | 0% |
| PARTIAL findings (File 18) | 34 | 6 full + 9 partial | 25% |
| Proposed NEW enrichments (File 18) | 8 | 0 | 0% |
| Proposed ME-NEW enrichments (File 20) | 13 | 0 | 0% |
| Zone 4 monotony | 1 | 0 | 0% |
| Cross-run NOT CAPTURED | 7 (3 actionable) | 0 | 0% |
| ARIA regression | 1 | 0 | 0% |
| 6-type taxonomy gaps | 6 types (1 missing enrichment) | 1 partial | 8% |
| Gorilla framing nuances | 4 | 0 | 0% |
| Paradigm questions (no spec fix) | 9 | 0 | 0% |
| Content observations (outside scope) | 6 | 0 | 0% |
| Adversarial prerequisites | 6 | 0 | 0% |
| Merge deduplication losses | 7 | 0 | 0% |
| Process implementation gaps | 8 | 0 | 0% |
| FIX-FAILED items not addressed | 6 | 0 | 0% |
| Un-numbered File 07/08 items | 10 | 0 | 0% |
| **TOTAL** | **~134 distinct items** | **~16 partially** | **~12%** |

---

*Sections 3 and 8 complete. 84 COULD items inventoried across 9 sub-categories. 134 gap/unresolved items inventoried across 15 categories. The 8-change plan at ~115 lines addresses the highest-convergence items but leaves 12% coverage of the full gap landscape. Highest-ROI additions to the plan: ME-054 (-13 lines), ME-035+ME-036 (+2 lines), ME-046 (+5 lines), ME-038 (+3 lines) — totaling -3 net lines.*
