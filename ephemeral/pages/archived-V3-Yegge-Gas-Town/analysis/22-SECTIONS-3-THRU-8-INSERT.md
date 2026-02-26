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

# SECTION 4: PRE-IMPLEMENTATION REQUIREMENTS

Every item in this section MUST be resolved before ANY implementation wave begins. These are blocking preconditions identified across audit-09-11 (buddy reviews), audit-12-13 (structural intersection), and audit-14-17 (surgery plans).

---

## 4.1 Gate Naming Map (BLOCKING)

**Source:** ADV-2-1, ADV-7A (audit-09-11)

Analysis files reference GR-XX (V3 pipeline gate-runner-core.js) and SC-XX (new pipeline gate-runner.md) interchangeably. No mapping between the two systems exists.

**Why blocking:** An implementer reading the master enrichment list (GR-XX references) and gate-runner.md (SC-XX references) will not know which gates correspond. Every surgery plan assumes this mapping is known.

**Resolution required:** Produce a two-column table mapping every GR-XX to its SC-XX equivalent (or mark as "no equivalent"). Publish in a single reference location.

---

## 4.2 WCAG Palette Conflict Resolution (BLOCKING if ME-003 implemented)

**Source:** ADV-1B-2 through ADV-1B-7 (audit-09-11)

GR-60 (WCAG contrast gate) is REQUIRED tier. Soul-mandated accent colors fail WCAG 4.5:1 on warm backgrounds:
- `#2a7d7d` (muted teal) on `#f0ebe3` = ~4.1:1 -- BELOW 4.5:1 threshold
- `#6b9b7a` (sage green), `#c49052` (warm amber), `#c97065` (muted coral) all in 3:1-5:1 danger zone depending on background

**Why blocking:** WCAG gate will produce REQUIRED failures on colors the soul MANDATES. Infinite REBUILD loop possible.

**Three resolution options (one must be chosen):**

| Option | Description | Trade-off |
|--------|-------------|-----------|
| A | WCAG exemption for designated accent colors used decoratively (non-informational) | Weakens accessibility for accent text |
| B | Revised accent palette with colors passing 4.5:1 on ALL warm backgrounds | Changes visual identity |
| C | WCAG gate at RECOMMENDED tier (not REQUIRED) to avoid blocking builds | Reduces accessibility enforcement |

**Resolution required:** Select Option A, B, or C. Specify exact colors and contrast ratios.

---

## 4.3 Builder Scroll-Reveal Signal Mechanism (BLOCKING for ME-006)

**Source:** ADV-1C-3 (audit-09-11)

ME-006 (screenshot validation) adds a blank-screenshot threshold. Two categories of blank exist:
1. DPR/animation bug -- re-capture fixes it
2. Intentional scroll-triggered content -- re-capture CREATES a problem (forces visibility on hidden content, corrupts layout)

**Why blocking:** Without a builder signal ("This page uses scroll-triggered reveals"), the validation gate cannot distinguish intentional hidden content from broken screenshots.

**Resolution required:** Define a builder signal mechanism (e.g., builder output metadata flag, HTML comment marker, or manifest entry) that exempts pages with scroll-triggered reveals from the blank-screenshot threshold.

---

## 4.4 Detection-to-Fix Gap (BLOCKING for ME-001, ME-003)

**Source:** META-2A-3, META-2B-1 (audit-09-11)

Experiential pass (ME-001) and WCAG gate (ME-003) both DETECT problems but the pipeline has no mechanism to APPLY fixes:
- Gates produce PASS/FAIL, not fixes
- WCAG FAIL on REQUIRED = verdict REBUILD = new builder starts over without receiving specific failure info
- REBUILD builder does not receive gate results (per M-04 context isolation)
- Illegibility requires HTML/CSS redesign, not mechanical fix

**Why blocking:** Detection without a fix mechanism = correctly identified problems that still ship. The causal chain from detection to resolution has a gap at step 5.

**Resolution required:** Either (a) define a mechanism to pass diagnostic info from gates to REBUILD builder, or (b) accept that detection alone has value even without guaranteed fix, and document this explicitly as a known limitation.

---

## 4.5 Zero Tested Enrichments (BLOCKING -- process risk)

**Source:** META-4-3 (audit-09-11)

Every enrichment has been analyzed, cross-referenced, anti-loss-mapped, and adversarially reviewed. None have been TESTED. Analysis produces CONFIDENCE, not EVIDENCE.

**Why blocking:** 57 enrichments justified by N=1 (one pipeline run, one content type). All three buddy reviews independently recommend running the pipeline on different content before implementing enrichments.

**Resolution required:** Accept this risk explicitly OR run a minimal experiment first (DPR fix only, measure PA-05, compare). See ADV-6-1, META-7-2.

---

## 4.6 N=1 Representativeness (BLOCKING -- process risk)

**Source:** META-4-5 (audit-09-11)

All Phase 2+3 analysis is based on ONE page (Gas Town). Findings might be:
- Gas Town-specific (chart = Gas Town artifact, trailing void = Gas Town CSS bug, DPR issue depends on this page's animations)
- Content-type-specific (long-form technical essay has different failure modes than gallery/dashboard/landing)

**Why blocking:** If findings are Gas Town-specific, 57 pipeline-level changes are over-engineered. Phase 3 treats all findings as pipeline-general without evidence.

**Resolution required:** Accept this risk explicitly OR run pipeline on different content type before implementing. Document which enrichments are likely Gas Town-specific vs pipeline-general.

---

## 4.7 Per-File Implementation Architecture (BLOCKING)

**Source:** ADV-5-1, ADV-5-3 (audit-09-11)

Implementer must read 5,000+ lines before writing a single edit: master enrichment list (1,000), style guide (370), gate surgery (400+), manifest surgery (300+), pipeline files being modified (1,436+1,192+237+412+...). This exceeds the context capacity that caused original failures.

**Why blocking:** Compliance degrades by format multiplier. By ME-030, compliance near zero with a single agent.

**Resolution required:** Implementation MUST use 1 agent per target file. Each reads ONLY its surgery plan. Surgery plans must contain EXACT old-text -> new-text diffs. A coordinating agent verifies cross-file consistency AFTER.

---

## 4.8 Wave 0 Subtraction Prerequisite (BLOCKING)

**Source:** SI-BC-01, SI-W0-01 through SI-W0-07 (audit-12-13)

gate-runner-core.js is at 68% compliance with 0 net-addition safe budget. ~170 lines MUST be subtracted before ANY addition:
- GR-33 through GR-35 (Mode Advisory gates) -> move to orchestrator (-45 lines)
- GR-36 through GR-39 (Experiment Tracking gates) -> move to MANIFEST (-40 lines)
- GR-40 through GR-42 (Policy Gates) -> move to MANIFEST (-35 lines)
- GR-08 spec text (no JS implementation exists) -> remove (-30 lines)
- Duplicate component patterns from builder-recipe -> remove (-20 lines)

**Why blocking:** Without freeing ~150 lines from gate-runner-core.js, zero Tier 1 BLOCKING gate additions can proceed. Net-zero is the BINDING constraint.

**Resolution required:** Execute Wave 0 subtraction as the very first implementation step. Verify line count decreased by ~150. Update GR-48 arrays and gate-manifest.json for relocated gates.

---

## 4.9 Capacity Verification for Each Target File (BLOCKING)

**Source:** ISG-HC-01, ISG-CAP-01 through ISG-CAP-09 (audit-12-13)

Total aggregate safe addition capacity across ALL artifacts is ~240 lines. Per-file budgets:

| File | Current Lines | Safe Addition | Compliance | Headroom |
|------|--------------|---------------|------------|----------|
| artifact-tc-brief-template.md | ~224 | +30 | 83.7% | MODERATE |
| artifact-builder-recipe.md | ~934 | +50 | 82% | MODERATE |
| gate-runner-core.js | ~1,437 | **0 net** | 68% | **OVER CAPACITY** |
| artifact-routing.md | ~900 | +40 | 71.4% | MODERATE |
| artifact-orchestrator.md | ~1,058 | +50 | 87% | GOOD |
| artifact-identity-perception.md | ~556 | +20 | 78.8% | LIMITED |
| pa-questions.md + splits | ~1,004 | +30 | 94% | GOOD |
| MANIFEST.md | ~1,193 | +20 | 70.6% | LIMITED |
| artifact-value-tables.md | ~263 | +50 | N/A | GOOD |

**Why blocking:** Each enrichment must be checked against its target file's safe budget before implementation. Exceeding budget degrades compliance.

**Resolution required:** Before each wave, verify running total of net additions per file against capacity table. If over budget, identify lines to subtract first or reroute enrichment to a different file.

---

## 4.10 Brief Bottleneck Constraint (BLOCKING for brief-facing changes)

**Source:** ISG-BTL-01 through ISG-BTL-03 (audit-12-13)

ALL builder-facing enrichments pass through the TC brief (~165 lines). Brief is at the 200-line mode-collapse threshold.

**Why blocking:** Adding builder instructions to the brief template risks crossing the collapse threshold. Builder instructions should go into artifact-builder-recipe.md (934 lines with headroom) instead.

**Resolution required:** Route all builder-facing content to artifact-builder-recipe.md, NOT artifact-tc-brief-template.md. Verify no brief-template changes push past 200-line threshold.

---

## 4.11 Four Cross-File Discrepancies to Resolve (BLOCKING)

**Source:** Cross-file discrepancies section (audit-14-17)

| # | Discrepancy | Resolution |
|---|------------|------------|
| 1 | File 14 proposes GR-05+GR-07 consolidation as ONE merged function; File 17 describes TWO separate functions | File 14 authoritative (single DOM iteration, more line-efficient) |
| 2 | File 15 says 68 total questions (counts PA-07-old retirement); File 16 says 69 (PA-07 doesn't exist) | 3 confirmed retirements only. Net total = 69 if 3 additions applied |
| 3 | File 14 says GR-12 "absorbed into GR-18" (ceases to exist); File 17 says GR-12 downgraded to RECOMMENDED (still executes independently) | Choose one approach. File 14 saves more lines. |
| 4 | File 14 specifies exact final GR-48 arrays; File 17 specifies individual adds/removes per downgrade | File 14's exact arrays are the COORDINATED final state and are authoritative |

**Resolution required:** Confirm all 4 resolutions before implementation begins. Document which file is authoritative for each conflict.

---

## 4.12 Gate Naming Consistency Decisions (BLOCKING)

**Source:** GS-04A-exact1 through GS-04A-exact4 (audit-14-17)

Multiple gate tier changes affect the same arrays. The final coordinated state must be computed once, not applied incrementally:

| Array | Final State After All Changes |
|-------|-------------------------------|
| REQUIRED_GATES (L1332) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10, GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |
| RECOMMENDED_GATES (L1338) | GR-07, GR-17, GR-18, GR-20, GR-43, GR-45, GR-49, GR-51, GR-52 |
| identityGates (L753) | GR-01, GR-02, GR-03, GR-04, GR-05, GR-06, GR-08, GR-09, GR-10 |
| perceptionGates (L756) | GR-11, GR-13, GR-14, GR-15, GR-44, GR-60 |

**Resolution required:** Confirm these exact arrays. Each implementation agent must use these coordinated final states, not apply changes incrementally.

---

---

# SECTION 5: IMPLEMENTATION ORDER

Full dependency-respecting order across all enrichments. Based on 7 binding constraints (audit-12-13), file 14/17 implementation sequences, and file 16 PA phasing.

---

## 5.0 Binding Constraints (7 Total)

These constraints MUST be respected -- they define hard ordering dependencies:

| # | Constraint | Source | Consequence if Violated |
|---|-----------|--------|------------------------|
| BC-1 | Gate-runner net-zero: subtraction MUST precede addition | SI-BC-01 | gate-runner-core.js exceeds capacity, compliance drops below split threshold |
| BC-2 | ME-037 + ME-051 atomic: retirements and replacements in one operation | SI-BC-02 | PA question counts become inconsistent across 5+ locations |
| BC-3 | ME-010 (GR-05 split) before ME-003 (GR-60): split establishes opacity-filtering pattern GR-60 reuses | SI-BC-03 | GR-60 cannot reference opacity thresholds that don't exist yet |
| BC-4 | ME-001 before ME-009: experiential pass must exist before aggregation thresholds | SI-BC-04 | Aggregation thresholds reference a protocol that doesn't exist |
| BC-5 | ME-006 before ME-015: screenshot validation must exist before data corruption escalation | SI-BC-05 | Escalation protocol references a gate that doesn't exist |
| BC-6 | Brief-facing content (ME-047-050) AFTER capacity verified | SI-BC-06 | Builder recipe exceeds 1,000 lines |
| BC-7 | All tier reclassifications (ME-024-027) after GR-48 arrays understood | SI-BC-07 | Meta-gate arrays become inconsistent |

---

## 5.1 Wave 0: SUBTRACTION (-170 lines)

**Prerequisite to ALL other waves. Nothing proceeds until Wave 0 is verified.**

| Step | Operation | Target File | Lines Freed |
|------|-----------|-------------|-------------|
| 0.1 | Remove GR-33 through GR-35 (Mode Advisory gates) -> move to orchestrator | gate-runner-core.js | -45 |
| 0.2 | Remove GR-36 through GR-39 (Experiment Tracking gates) -> move to MANIFEST | gate-runner-core.js | -40 |
| 0.3 | Remove GR-40 through GR-42 (Policy Gates) -> move to MANIFEST | gate-runner-core.js | -35 |
| 0.4 | Remove GR-08 spec text (no JS implementation exists) | gate-runner-core.js | -30 |
| 0.5 | Remove duplicate component patterns | artifact-builder-recipe.md | -20 |
| 0.6 | Update GR-48 REQUIRED_GATES and RECOMMENDED_GATES for relocated gates | gate-runner-core.js | 0 |
| 0.7 | Update gate-manifest.json for relocated gates | gate-manifest.json | 0 |

### Wave 0 Verification Checkpoint

- [ ] gate-runner-core.js line count decreased by ~150
- [ ] artifact-builder-recipe.md line count decreased by ~20
- [ ] GR-48 self-check passes with updated arrays (no relocated gates referenced)
- [ ] gate-manifest.json tier arrays no longer include relocated gates
- [ ] Relocated gate logic preserved in destination files (orchestrator, MANIFEST)
- [ ] **Gate-runner capacity after Wave 0: +150 lines available**
- [ ] **Running total: -170 lines**

---

## 5.2 Wave 1: USABILITY PRIORITY INVERSION (8 enrichments, +134 lines)

**Depends on:** Wave 0 complete.
**Unlocks:** Wave 3 (experiential pass protocol must exist for aggregation thresholds).

### Parallel Group A (Steps 1.1-1.6 -- independent files, can run in parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.1 | ME-001 | Add experiential pass protocol | pa-deployment.md | +22 |
| 1.2 | ME-002 | Add usability priority override in weaver | pa-weaver.md | +14 |
| 1.3 | ME-004 | Add builder usability recipe step (Q0 self-check) | artifact-builder-recipe.md | +12 |
| 1.4 | ME-006 | Add expanded CSS override + screenshot validation gate | pa-deployment.md + orchestrator | +27 |
| 1.5 | ME-008 | Add usability circuit breaker in handoff | MANIFEST.md | +12 |
| 1.6 | ME-009 | Add experiential aggregation thresholds | pa-deployment.md + pa-weaver.md | +15 |

### Sequential Group B (Steps 1.7-1.8 -- gate-runner coordination, must be sequential)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 1.7 | ME-005 | Add MECHANICAL exception to verdict logic | MANIFEST + gate-manifest + gate-runner | +22 |
| 1.8 | ME-007 | Fix GR-44 trailing void measurement | gate-runner-core.js | +10 |

### Wave 1 Verification Checkpoint

- [ ] pa-deployment.md: experiential pass section exists BEFORE question answering
- [ ] pa-deployment.md: screenshot validation gate exists BEFORE auditor deployment
- [ ] pa-weaver.md: usability priority override in weaver-only content (NOT in auditor prompts)
- [ ] artifact-builder-recipe.md: Q0 self-check uses recipe verbs (not checklist verbs)
- [ ] MANIFEST.md: usability circuit breaker present in Phase 3B->3C handoff
- [ ] MANIFEST.md: MECHANICAL exception in verdict logic
- [ ] gate-runner-core.js: GR-44 uses scrollHeight, not body.getBoundingClientRect
- [ ] gate-manifest.json: verdictLogic includes MECHANICAL exception
- [ ] BV-03 check: recipe-to-checklist verb ratio >= 3:1 in modified sections
- [ ] **Running total: -170 + 134 = -36 lines (under budget)**

---

## 5.3 Wave 2: GATE FIXES + GR-60 (12 enrichments, +116 lines)

**Depends on:** Wave 0 complete. Can run in PARALLEL with Wave 1.
**Unlocks:** Wave 5a (gate capacity check after validation build).

### Phase 2A: Existing Gate Fixes (Steps 2.1-2.4 -- independent gates, parallel)

| Step | ME | Operation | Target File | Net Lines |
|------|-----|-----------|-------------|-----------|
| 2.1 | ME-010 | GR-05 split (opacity filter) -- establishes pattern for GR-60 | gate-runner-core.js + gate-manifest | +15 |
| 2.2 | ME-011 | GR-06 rendered font check rewrite | gate-runner-core.js | +2 |
| 2.3 | ME-012 | GR-14 zone-level scoping (structural false positives) | gate-runner-core.js | +3 |
| 2.4 | ME-013 | GR-09 tolerance bands | gate-runner-core.js | +2 |

### Phase 2B: Tier Reclassifications (Steps 2.5-2.8 -- parallel, after GR-48 arrays understood per BC-7)

| Step | ME | Operation | Gate | Old Tier | New Tier |
|------|-----|-----------|------|----------|----------|
| 2.5 | ME-024 | Downgrade GR-07 | GR-07 | REQUIRED | RECOMMENDED |
| 2.6 | ME-025 | Downgrade GR-12 (absorb into GR-18) | GR-12 | REQUIRED | Absorbed/RECOMMENDED |
| 2.7 | ME-026 | Downgrade GR-43 | GR-43 | REQUIRED | RECOMMENDED |
| 2.8 | ME-027 | Downgrade GR-19 | GR-19 | RECOMMENDED | ADVISORY |

### Phase 2C: Threshold Adjustments (Steps 2.9-2.10 -- parallel)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.9 | ME-028 | GR-21 threshold 4->6 + GR-22 skip-link exemption | gate-runner-core.js | +2 |
| 2.10 | ME-029 | GR-17 list item threshold (li from 12px to 4px group) | gate-runner-core.js | 0 |

### Phase 2D: Viewport Namespacing, then GR-60 (sequential -- 2.11 before 2.12 per BC-3)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 2.11 | ME-030 | GR-48/49 viewport namespacing | gate-runner-core.js | +4 |
| 2.12 | ME-003 | **GR-60 WCAG contrast (NEW REQUIRED gate)** -- LAST, largest addition, depends on ME-010 opacity pattern | gate-runner-core.js + 3 satellites | +70 |

### Phase 2E: Coordinated Array Updates (AFTER all Phase 2A-2D changes)

Apply the COORDINATED final state from File 14 (not incremental changes):
- REQUIRED_GATES array -> exact replacement per GS-04A-exact1
- RECOMMENDED_GATES array -> exact replacement per GS-04A-exact2
- identityGates filter -> exact replacement per GS-04A-exact3
- perceptionGates filter -> exact replacement per GS-04A-exact4
- gate-manifest.json -> all tier counts, verdict logic, execution order updated atomically

### Wave 2 Verification Checkpoint

- [ ] gate-runner-core.js net change: -150 (Wave 0) + ~98 (Wave 2) = **-52 net** (NEGATIVE, as required)
- [ ] GR-48 REQUIRED_GATES array has exactly 15 entries (was 18: -GR-07, -GR-12, -GR-43, +GR-60)
- [ ] GR-48 RECOMMENDED_GATES array has exactly 9 entries (+GR-07, +GR-43, -GR-19)
- [ ] gate-manifest.json: REQUIRED count = 16, RECOMMENDED count = 10, ADVISORY count = 8
- [ ] gate-manifest.json: verdictLogic updated for all tier changes + MECHANICAL exception
- [ ] gate-runner-spec.md: GR-60 row added, tier changes reflected, summary counts updated
- [ ] GR-05 split: isCold() utility shared between GR-05a/GR-05b
- [ ] GR-60: targets correct element set (p, span, a, li, h1-h6, td, th, label, figcaption, etc.)
- [ ] GR-60: WCAG AA thresholds correct (4.5:1 normal text, 3.0:1 large text)
- [ ] No orphan "GR-01-10" range notation remaining (search all files)
- [ ] **Running total: -36 + 116 = +80 lines**

---

## VALIDATION BUILD #1 (MANDATORY between Wave 2 and Wave 3)

Run the gate runner against existing V3 Gas Town HTML to verify:
- All modified gates still execute without errors
- GR-60 produces expected results (flag known contrast issues)
- No regression in gates that were not modified
- GR-48 coverage check passes with new arrays

**Do NOT proceed to Wave 3 until validation build passes.**

---

## 5.4 Wave 3: PA ENRICHMENTS (12 enrichments, +81 lines)

**Depends on:** Wave 1 complete (experiential pass must exist per BC-4, BC-5). Wave 2 NOT required.

### Phase 3A: Atomic PA Swap (Step 3.1 -- FIRST AND ALONE per BC-2)

| Step | ME | Operation | Details |
|------|-----|-----------|---------|
| 3.1 | ME-037 + ME-051 | **ATOMIC:** Retire PA-06, PA-09, PA-40 AND add replacement experiential questions | 5-location update per question (pa-questions.md, pa-deployment.md, MANIFEST.md, pa-manifest.md, EXECUTION-TRACKER-TEMPLATE.md) |

**Verify after 3.1:** Auditor B 8->7->8 (retire PA-06, add PA-81). Auditor C 11->10. Auditor F 6->5. Totals consistent across all 5 locations.

### Phase 3B: New Question Additions (Steps 3.2-3.4 -- parallel, independent)

| Step | ME | Operation | Question | Routing | Lines |
|------|-----|-----------|----------|---------|-------|
| 3.2 | ME-021 | Add navigation usability question | PA-80 | Auditor E (6->7) | +3 in pa-questions + 5-location update |
| 3.3 | ME-022 | Add information extraction question | PA-81 | Auditor B (7->8, net neutral after PA-06 retire) | +3 in pa-questions + 5-location update |
| 3.4 | ME-023 | Add content promise vs delivery question | PA-54 | Auditor G (7->8) | +3 in pa-questions + 5-location update |

### Phase 3C: PA Protocol Modifications (Steps 3.5-3.11 -- parallel, independent)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.5 | ME-015 | Data corruption escalation + BLOCKED BY DEFECT + First-Auditor Halt | pa-deployment + pa-questions | +10 |
| 3.6 | ME-031 | False affordance scan question | pa-questions + satellites | +12 |
| 3.7 | ME-032 | Pipeline-introspection annotations on PA-55, PA-56, PA-69 | pa-questions.md | +3 |
| 3.8 | ME-033 | Void question deduplication (Void Collapse Rule) | pa-questions.md Section 3.6 | +4 |
| 3.9 | ME-034 | Defect-bypass for cross-viewport protocol | pa-deployment.md | +3 |
| 3.10 | ME-035 | Footer/header explicit contrast note on PA-02 | pa-questions.md | +0 (in-cell) |
| 3.11 | ME-036 | Horizontal scroll element-level note | pa-questions.md | +1 |

### Phase 3D: Weaver Enhancement (Step 3.12 -- after ME-001 exists)

| Step | ME | Operation | Target | Lines |
|------|-----|-----------|--------|-------|
| 3.12 | ME-019 | PA-05 score as range + hypothetical scoring | pa-weaver.md | +8 (net 0 after compression) |

### Wave 3 Verification Checkpoint

- [ ] Total PA questions = 69 (69 - 3 retired + 3 added = 69, net zero)
- [ ] No auditor exceeds 12 questions
- [ ] Auditor load balance: A=9, B=8, C=10, D=11, E=7, F=5, G=8, H=5, I=6
- [ ] pa-deployment.md assignment table totals match 69
- [ ] pa-manifest.md checklist totals match 69
- [ ] MANIFEST.md L149-157 roster updated with correct question lists per auditor
- [ ] MANIFEST.md L159 total = 69
- [ ] Experiential pass appears BEFORE question answering in pa-deployment.md
- [ ] Screenshot validation gate appears BEFORE auditor deployment
- [ ] BLOCKED BY DEFECT protocol in auditor-visible pa-questions.md Section 1 preamble
- [ ] Priority Override in pa-weaver.md (NOT in auditor prompts -- fresh-eyes preserved)
- [ ] PA-05 range scoring in pa-weaver.md (NOT in auditor prompts)
- [ ] Void Collapse Rule references correct question IDs (PA-50, PA-33, PA-51)
- [ ] Pipeline-introspection annotations on PA-55, PA-56, PA-69 ONLY
- [ ] Orphan check: ME-033 Void Collapse Rule does NOT reference retired PA-09
- [ ] Orphan check: AP-05 anti-pattern mapping updated (PA-40 replaced with PA-69)
- [ ] No content from Section 4 of pa-questions.md leaked into Sections 1-3
- [ ] Fresh-eyes NOT violated: no tier targets, mechanism counts, or build context in auditor-facing files
- [ ] **Running total: +80 + 81 = +161 lines**

---

## 5.5 Wave 4: BUILDER RECIPE + NON-GATE INFRASTRUCTURE (9 enrichments, +66 lines)

**Depends on:** Wave 0 complete (builder recipe subtraction). Independent of Waves 1-3.

### Phase 4A: Builder Recipe Additions (Steps 4.1-4.4 -- parallel, all target same file)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 4.1 | ME-016 | ARIA accessibility recipe step | +8 |
| 4.2 | ME-038 | px-only border width (binary+CSS format) | +3 |
| 4.3 | ME-039 | html color + font stack boilerplate | +8 |
| 4.4 | ME-041 | Trailing void prevention recipe step | +4 |

### Phase 4B: Non-Gate Infrastructure (Steps 4.5-4.9 -- parallel, independent files)

| Step | ME | Operation | Target | Net Lines |
|------|-----|-----------|--------|-----------|
| 4.5 | ME-018 | Gate perceptibility column | gate-manifest.json + gate-runner | +18 |
| 4.6 | ME-020 | Orchestrator self-assessment step | artifact-orchestrator.md | +15 |
| 4.7 | ME-042 | MANIFEST line count updates | MANIFEST.md | 0 |
| 4.8 | ME-043 | Execution tracker fields | EXECUTION-TRACKER-TEMPLATE.md | +5 |
| 4.9 | ME-046 | Screenshot correction protocol | MANIFEST.md | +5 |

### Wave 4 Verification Checkpoint

- [ ] artifact-builder-recipe.md: +23 net (within +50 safe after Wave 0 subtraction of -20)
- [ ] All new builder recipe content uses recipe verbs (Read/Select/Deploy/Assess)
- [ ] No checklist verbs in builder-facing content (no Verify, Fail if, Must be, Ensure, Check that)
- [ ] No gate thresholds or gate-format language in builder-facing content
- [ ] gate-manifest.json perceptibility column does NOT change tier classifications
- [ ] MANIFEST line count values are accurate
- [ ] **Running total: +161 + 66 = +227 lines (within ~240 budget)**

---

## VALIDATION BUILD #2 (MANDATORY between Wave 4 and Wave 5)

Run full pipeline on V3 Gas Town HTML:
- All gates execute without errors
- All PA questions answerable
- Brief assembly produces valid output
- Total line counts verified per file

**Do NOT proceed to Wave 5 until validation build passes.**

---

## 5.6 Wave 5: CONDITIONAL / DEFERRED

**Depends on:** Validation Build #2 results.

### Wave 5a: GR-61 (CONDITIONAL on gate-runner headroom)

| Step | ME | Operation | Condition | Net Lines |
|------|-----|-----------|-----------|-----------|
| 5a.1 | ME-014 | GR-61 min font size (RECOMMENDED) | Only if gate-runner net after Waves 0+2 is <= -50 (50+ lines headroom remaining) | +59 |

### Wave 5b: CONSIDER-Severity Items (implement only if budget allows)

| Step | ME | Operation | Net Lines |
|------|-----|-----------|-----------|
| 5b.1 | ME-047 | 3 background registers (builder recipe) | +4 |
| 5b.2 | ME-048 | Unique element per zone (builder recipe) | +3 |
| 5b.3 | ME-049 | Dark moments (builder recipe) | +3 |
| 5b.4 | ME-050 | Spacing compression range (builder recipe) | +3 |
| 5b.5 | ME-052 | Audience description (pa-deployment) | +3 |
| 5b.6 | ME-054 | Remove dead CSS (components.css / tokens.css) | -13 |

**NOT in Wave 5 (per BC-6 and red lines):**
- ME-053 (container width exceptions) -- contradicts NON-NEGOTIABLE constraint

### Wave 5c: PERMANENTLY DEFERRED (do not implement)

| ME | Reason |
|----|--------|
| ME-017 | Architectural change (Red Line 1 violation) -- requires separate validation cycle |
| ME-040 | GR-62 text overflow -- gate-runner cannot absorb without SECOND subtraction round |
| ME-044 | Low-priority prose documentation (20 effective lines for 10 actual) |
| ME-045 | Low-priority prose documentation (30 effective lines for 15 actual) |
| ME-055 | PA question budget consumed by Wave 3 |
| ME-056 | Requires new file creation -- route to separate reference file if ever needed |

---

## 5.7 Implementation Summary

| Wave | Purpose | Enrichments | Net Lines | Running Total | Validation Required |
|------|---------|-------------|-----------|---------------|---------------------|
| 0 | SUBTRACTION | 7 steps | -170 | -170 | Yes (line count + arrays) |
| 1 | Usability Priority Inversion | 8 ME | +134 | -36 | Yes (protocol + verdict) |
| 2 | Gate Fixes + GR-60 | 12 ME | +116 | +80 | **VALIDATION BUILD #1** |
| 3 | PA Enrichments | 12 ME | +81 | +161 | Yes (question totals) |
| 4 | Builder Recipe + Infrastructure | 9 ME | +66 | +227 | **VALIDATION BUILD #2** |
| 5 | Conditional / Deferred | 7+ ME | variable | variable | Per-item |

**Critical path:** Wave 0 -> (Wave 1 AND Wave 2 in PARALLEL) -> Validation Build #1 -> Wave 3 (depends on Wave 1) -> Wave 4 (independent) -> Validation Build #2 -> Wave 5

**Parallelism opportunities:**
- Waves 1 and 2 run in PARALLEL after Wave 0
- Within Wave 1: Steps 1.1-1.6 parallel, 1.7-1.8 sequential
- Within Wave 2: Steps 2.1-2.4 parallel, 2.5-2.8 parallel, 2.11 before 2.12
- Within Wave 3: Step 3.1 FIRST AND ALONE, 3.2-3.4 parallel, 3.5-3.11 parallel
- Within Wave 4: Steps 4.1-4.4 parallel, 4.5-4.9 parallel
- Wave 4 can run in parallel with Wave 3

**Total: 41 of 57 enrichments in Waves 0-4 (72%). 7 permanently deferred. 9 conditionally deferred.**
**Gate-runner-core.js net: -150 + 10 + 98 = -42 lines (net NEGATIVE, as required).**
**Grand total net: +227 lines (within ~240 budget, 13 lines headroom).**

---

# SECTION 6: GLOBAL FORMATTING RULES

---

## 6.1 Recipe vs Checklist Verbs

### Allowed Verbs (Recipe)

These are the ONLY verbs permitted in builder-facing content (artifact-builder-recipe.md, TC brief, builder prompt):

```
Build | Create | Derive | Map | Read | Select | Deploy | Assess
```

### Prohibited Verbs (Checklist)

These verbs MUST NOT appear in builder-facing content. BV-03 (gate-runner-core.js L93-102) programmatically scans for them:

```
Verify | Fail if | Must be | Ensure | Check that
```

### BV-03 Enforcement (ISG-RCP-09)

- **Mechanism:** BV-03 counts recipe verbs vs checklist verbs in the Brief Assembler output
- **Threshold:** >= 3:1 recipe-to-checklist verb ratio (with Infinity handling when checklist count = 0)
- **Location:** gate-runner-core.js L93-102
- **Recipe verb regex:** `Build|Create|Derive|Map|Read|Select|Deploy|Assess` (L94)
- **Checklist verb regex:** `Verify|Fail if|Must be|Ensure|Check that` (L95)

### ISG-RCP Rules (Complete List)

| Rule | Description | Tier |
|------|-------------|------|
| ISG-RCP-01 | Sequenced steps with Read/Select/Deploy/Assess verbs | MUST |
| ISG-RCP-02 | Each instruction has a concrete CSS example or value reference | MUST |
| ISG-RCP-03 | No checklist verbs: Verify, Fail if, Must be, Ensure, Check that | MUST |
| ISG-RCP-04 | Step format: `### Step N.M: [Action Verb] [What]` then Read/Select/Deploy/Assess blocks | SHOULD |
| ISG-RCP-05 | Anti-pattern: Prose paragraphs without action verbs ("The builder should consider...") | MUST |
| ISG-RCP-06 | Anti-pattern: Gate-format language ("Verify that all backgrounds differ by >= 15 RGB") | MUST |
| ISG-RCP-07 | Anti-pattern: Prohibition framing ("Do NOT use cold colors") -- use world-description instead ("Your palette is warm: R >= G >= B") | MUST |
| ISG-RCP-08 | Anti-pattern: Naked thresholds without calibration ranges ("delta >= 15" without "15 = floor, 25 = confident, 50 = dramatic") | MUST |
| ISG-RCP-09 | BV-03 enforcement: Brief Assembler output checked for 3:1 recipe-to-checklist verb ratio | MUST |

### Anti-Pattern Examples

| BAD (Checklist) | GOOD (Recipe) |
|------------------|---------------|
| "Verify that text is readable at arm's length" | "Assess whether text is readable at arm's length" |
| "Ensure the font stack matches exactly" | "Deploy the font stack as shown" |
| "Must be at least 16px font size" | "Select body font-size starting at 16px" |
| "Fail if backgrounds differ by < 15 RGB" | "Read the value tables and select backgrounds with deltas of 15+ RGB (15 = floor, 25 = confident, 50 = dramatic)" |
| "Check that no cold colors are used" | "Build your palette from warm tones: R >= G >= B" |
| "Do NOT use pure black" | "Your text color is soft dark: deploy #1A1A1A" |

---

## 6.2 Anti-Skimming Formatting

### BV-04 Suppressor Scan (M-06)

BV-04 programmatically scans brief-facing content for 4 suppressor regex patterns (gate-runner-core.js L104-117):

| Pattern | Regex | Catches |
|---------|-------|---------|
| S-01 | `sample\s+\d+-\d+` | "sample 2-4 mechanisms" language that limits vocabulary |
| S-02 | `must\s+not\|shall\s+not\|never\s+use` | Prohibition framing that makes builder cautious |
| S-03 | `verify\s+that\|fail\s+if\|must\s+be` | Gate-format language in builder content |
| S-04 | `>=?\s*\d+\s+channels?` | Channel count thresholds in builder content |

**Rule:** If BV-04 triggers, fix the CONTENT, never weaken the gate.

### BV-01 Tier Budget Enforcement (M-05)

BV-01 (gate-runner-core.js L29-67) enforces minimum line counts per brief tier:

| Tier | Regex | Minimum Lines (80% threshold) |
|------|-------|-------------------------------|
| Tier 1 | `/^#+\s*Tier\s*1/im` | >= 12 |
| Tier 2 | `/^#+\s*Tier\s*2/im` | >= 6 |
| Tier 3 | `/^#+\s*Tier\s*3/im` | >= 40 |
| Tier 4 | `/^#+\s*Tier\s*4/im` | >= 32 |
| Content Map | `/^#+\s*Content\s*Map/im` | >= 24 |

**Risk:** If tier header format changes, regexes fail silently = false PASS on under-specified briefs.

### Visual Break Patterns

- Never more than 3-4 paragraphs without a visual break in prose content
- Section headers in builder-facing content should be action-oriented (`### Step N.M: [Verb] [What]`)
- Every Tier 4 disposition in TC brief MUST have at least 1 concrete CSS property:value pair (ISG-TCB-04)

---

## 6.3 Information Isolation

### M-04: Context Isolation Rules

M-04 is the MOST at-risk mechanism during implementation. Fragility: **CRITICAL**.

**Locations:** MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation), pa-deployment.md L92, L201-221 (fresh-eyes), pa-guardrails.md L119-137, pa-questions.md L312-316 (Section 4 WEAVER USE ONLY), artifact-orchestrator.md L131-143 (builder isolation)

### What CANNOT Leak Between Roles

| FROM | TO Builder | TO PA Auditors | TO Weaver |
|------|-----------|----------------|-----------|
| Gate thresholds (PASS/FAIL format) | BLOCKED | N/A | Allowed |
| Calibration ranges (15=floor, 50=dramatic) | Allowed | BLOCKED | Allowed |
| PA-05 expected scores | BLOCKED | BLOCKED | Allowed (Section 4) |
| Mechanism counts / tier definitions | BLOCKED | BLOCKED | Allowed (Section 4) |
| Build plan details | N/A | BLOCKED | N/A |
| Pipeline failure history | BLOCKED | BLOCKED | BLOCKED |
| Prior experiment results | BLOCKED | BLOCKED | BLOCKED |
| Verdict logic | BLOCKED | BLOCKED | Allowed |
| Screenshot validation results | N/A | BLOCKED | Allowed |
| AP anti-pattern mappings | BLOCKED | BLOCKED | Allowed |

### Dual-Channel Boundaries (M-02)

- **Channel 1 (Lossless Universal):** Identity constraints, soul constraints -- delivered verbatim through MANIFEST routing
- **Channel 2 (Regenerated Content):** TC brief -- compressed through Brief Assembler with BV verification
- Builder sees calibration (15=floor, 25=confident, 50=dramatic), NOT thresholds (>=15 PASS, <15 FAIL)
- Gate runner sees thresholds, NOT calibration

### Fresh-Eyes Protection (M-20)

**Location:** pa-deployment.md L201-221

- Auditor receives ONLY: screenshots + PA questions + nothing else
- pa-questions.md Sections 1-3 are auditor-facing: ZERO calibration data, ZERO mechanism counts, ZERO tier definitions
- pa-questions.md Section 4 is WEAVER USE ONLY -- contains calibration, scoring criteria, anti-pattern mappings
- Adding calibration data to Sections 1-3 is **Red Line 6** (ISG-RL-06)

### Per-Change Isolation Checks

| Change | Isolation Risk | What to Verify |
|--------|---------------|----------------|
| ME-001 | HIGH -- adds content to pa-deployment.md that auditors read | Experiential pass instructions contain NO tier definitions, NO PA-05 scores, NO mechanism counts |
| ME-004 + ME-039 | HIGH -- adds content to builder-facing recipe | No gate thresholds in PASS/FAIL format; world-description framing only |
| ME-006 | MEDIUM -- screenshot validation results | Validation stays in orchestrator files, NOT auditor files |
| ME-037+ME-051 | HIGH -- modifies auditor-facing pa-questions.md | New questions contain ZERO calibration data; use perceptual language |

---

## 6.4 Conviction Language

### World-Description Framing (M-12)

**Principle:** Tell the builder what the WORLD IS, not what they MUST NOT DO.

**Location:** MANIFEST.md L188-190, L198, L863-864; artifact-builder-recipe.md L13; gate-runner-core.js L107 (BV-04 S-02 pattern)

| BAD (Prohibition) | GOOD (World-Description) |
|--------------------|--------------------------|
| "Do NOT use cold colors" | "Your palette IS warm: R >= G >= B" |
| "Never use pure black" | "Your text color is soft dark: #1A1A1A" |
| "Must not exceed 960px container" | "Your container lives at 960px" |
| "Fail if backgrounds differ by < 15 RGB" | "Backgrounds speak in deltas of 15+ RGB points (15 = floor, 25 = confident, 50 = dramatic)" |
| "Must be at least 12 mechanisms" | "Your composition uses 12+ mechanisms from the catalog" |

### Binary Rule Format (M-13)

- All rules output PASS or FAIL -- no partial scores, no "PASS*", no "PARTIAL"
- ISG-GR-05: Anti-pattern -- returning anything other than 'PASS' or 'FAIL' for status
- Gate result schema: `{ gate: 'GR-XX', name: '...', status: 'PASS'|'FAIL', measured: {...}, threshold: {...} }`
- Binary rules achieve 100% agent compliance; judgment rules achieve ~0%

### Auditor Question Language

- Perceptual verbs: "Does...?" "Is there...?" "Can you...?"
- NOT measurement verbs: "Verify that..." "Is count >= N?"
- Evidence format: YES/NO/CONDITIONAL + screenshot reference + description
- No judgment scales ("Rate 1-5") -- binary only (ISG-PA-04)

### Weaver Verdict Language

- Weaver CAN use judgment verbs (weaver IS the judgment agent)
- But binary overrides should be binary: "If text illegibility reported -> REFINE regardless of other scores"
- Verdict logic uses prioritized decision tree format, not subjective language

---

## 6.5 File Splitting Thresholds

### When to Split (ISG-SPL-01 through ISG-SPL-03)

A file needs splitting when ANY of these conditions are met:

| Condition | Threshold | Rule ID |
|-----------|-----------|---------|
| Compliance drops below | 65% | ISG-SPL-01 |
| Single agent must process entire file AND file exceeds | 1,000 lines | ISG-SPL-02 |
| File serves multiple agent roles | N/A | ISG-SPL-03 |

### When NOT to Split (ISG-SPL-04 through ISG-SPL-06)

| Condition | Rule ID |
|-----------|---------|
| Reference document read selectively (e.g., value tables) | ISG-SPL-04 |
| Serves single agent role regardless of length | ISG-SPL-05 |
| Content is structurally independent per section | ISG-SPL-06 |

### Current File Compliance

| File | Lines | Compliance | Safe +Lines | Headroom | Fragility |
|------|-------|-----------|-------------|----------|-----------|
| gate-runner-core.js | ~1,437 | 68% | **0 net** | OVER CAPACITY | CRITICAL |
| artifact-builder-recipe.md | ~934 | 82% | +50 | MODERATE | ROBUST |
| MANIFEST.md | ~1,193 | 70.6% | +20 | LIMITED | FRAGILE (routing) |
| artifact-orchestrator.md | ~1,058 | 87% | +50 | GOOD | ROBUST |
| artifact-routing.md | ~900 | 71.4% | +40 | MODERATE | N/A |
| artifact-identity-perception.md | ~556 | 78.8% | +20 | LIMITED | N/A |
| pa-questions.md | ~418 (~1,004 with splits) | 94% | +30 | GOOD | ROBUST (S1-3) / FRAGILE (S4) |
| artifact-tc-brief-template.md | ~224 | 83.7% | +30 | MODERATE | ROBUST (content) / CRITICAL (headers) |
| artifact-value-tables.md | ~263 | N/A (reference) | +50 | GOOD | ROBUST |
| EXECUTION-TRACKER-TEMPLATE.md | ~328 | N/A | Unlimited | GOOD | ROBUST |
| pa-deployment.md | ~237 | N/A | +30 | PA family | FRAGILE (assignments) |
| gate-manifest.json | ~159 | N/A | +10 | LIMITED | FRAGILE |
| gate-runner-spec.md | ~188 | N/A | +15 | MODERATE | N/A |
| pa-manifest.md | ~89 | N/A | +10 | MODERATE | N/A |

**Alert:** gate-runner-core.js at 68% is 3 points above the 65% split threshold. Adding ME-003+ME-014+ME-040 (+180 lines) without subtraction would push to ~62-64% (below split threshold). The subtraction-before-addition constraint (ISG-HC-04) prevents this.

---

## 6.6 Per-File Formatting Templates

### Template: gate-runner-core.js Changes

```javascript
// GR-XX: [Gate Name]
// [One-line description]
try {
  const result = await page.evaluate(() => {
    // Use window.isRenderedElement() for filtering
    // DOM access logic here
    return { measured: {...}, threshold: {...} };
  });
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: result.measured >= result.threshold ? 'PASS' : 'FAIL',
    measured: result.measured,
    threshold: result.threshold
  });
} catch (err) {
  results.push({
    gate: 'GR-XX',
    name: '[Gate Name]',
    status: 'FAIL',
    measured: 'Error: ' + err.message,
    threshold: '[threshold description]'
  });
}
```

**Coordinated updates required (ISG-GR-09 through ISG-GR-15):**

1. Gate code in correct function (`runGateRunner` / `runAntiPatternGates` / `runWave2Gates`)
2. GR-48 REQUIRED or RECOMMENDED array (L1331-1340)
3. gate-manifest.json L18-52 tier classification
4. gate-manifest.json L62-111 execution order (if new step)
5. gate-runner-spec.md human-readable specification row
6. MANIFEST.md L244-267 Section 3 routing table
7. MANIFEST.md L275-285 verdict logic (if new category)

### Template: MANIFEST.md Changes

**Routing entry (Appendix B):**
```
| [Agent Role] | [File 1] + [File 2] + ... (~[N] lines) |
```

**Exclusion rule (Appendix B negative table):**
```
| [Agent Role] | "[What must NOT be included]" | [Reason] |
```

**Anti-patterns:**
- Adding content to MANIFEST prose sections when it belongs in an artifact file (ISG-MAN-03)
- Modifying Appendix E prompt templates without verifying `{VARIABLE}` placeholders still work (ISG-MAN-04)
- Changing verdict logic in MANIFEST without updating gate-manifest.json (ISG-MAN-05)

### Template: pa-deployment.md Changes

Follow ORCHESTRATOR DECISION TREE format:
```markdown
### Phase [N].[M]: [Step Name]
**Input:** [What this step receives]
**Action:** [What the orchestrator does]
**Output:** [What this step produces]
**Verification:** [How to confirm success]
**If FAIL:** [Recovery path]
```

### Template: artifact-builder-recipe.md Changes

Follow RECIPE FORMAT:
```markdown
### Step N.M: [Action Verb] [What]

**Read:** [What reference to consult]
**Select:** [What to choose from reference]
**Deploy:** [Exact CSS or HTML to write]
**Assess:** [Self-check in world-description framing]
```

**Anti-patterns (ISG-RCP-05 through ISG-RCP-08):**
- Prose paragraphs without action verbs
- Gate-format language
- Prohibition framing
- Naked thresholds without calibration ranges

### Template: pa-questions.md Changes

```markdown
**PA-[NN]: [Question text ending in ?]**
- Evidence: YES / NO / CONDITIONAL
- Viewport: [1440px / 768px / both]
- Assigned to: Auditor [Letter]
```

**Anti-patterns (ISG-PA-03, ISG-PA-04):**
- Adding calibration data or quality tiers to Sections 1-3 (violates fresh-eyes M-20)
- Adding judgment-scale questions ("Rate 1-5") instead of binary YES/NO

**Propagation required (ISG-PA-05 through ISG-PA-08):**
1. pa-deployment.md assignment table
2. MANIFEST.md agent roster
3. pa-manifest.md checklist
4. Question totals (appear in 3+ locations)

### Template: pa-weaver.md Changes

Follow VERDICT PROTOCOL format. Weaver instructions can use judgment verbs. Binary overrides use decision-tree format:
```markdown
**Override [N]: [Condition]**
IF [binary condition] THEN [verdict] regardless of [other criteria].
```

---

## 6.7 Format Multiplier Model

### Multiplier Table (ISG-FMM-01 through ISG-FMM-04)

| Format Type | Multiplier | Impact per Line | Example |
|-------------|-----------|-----------------|---------|
| Binary + CSS value | **0.5x** | Half normal degradation | `background: #FEF9F5; /* delta: 28 RGB */` |
| Recipe-format steps | **1.0x** | Neutral (baseline) | `### Step 2.1: Deploy warm background pair` |
| Prose instructions | **2.0x** | Double degradation | "The builder should consider the relationship between..." |
| Judgment-requiring | **3.0x** | Triple degradation | "If the page feels insufficiently rich, add more mechanisms" |

### Budget Calculation Process (ISG-FMM-05)

Before adding ANY enrichment:

1. **Count** net lines (added minus removed)
2. **Classify** by format type (binary+CSS / recipe / prose / judgment)
3. **Multiply:** `effective_lines = net_lines x format_multiplier`
4. **Compare** against file's safe budget
5. **If over:** subtract first OR route content to a file with more headroom

### Example Calculations

| Enrichment | Net Lines | Format | Multiplier | Effective Lines |
|------------|----------|--------|-----------|-----------------|
| ME-004 (Q0 self-check) | +12 | Recipe | 1.0x | 12 |
| ME-039 (boilerplate CSS) | +8 | Binary+CSS | 0.5x | 4 |
| ME-001 (experiential pass) | +22 | Recipe | 1.0x | 22 |
| ME-017 (Phase 4 prose) | +15 | Prose | 2.0x | 30 |
| ME-045 (context budget) | +15 | Prose | 2.0x | 30 |

**Implication:** Route all enrichments toward binary+CSS format wherever possible. A 10-line CSS snippet costs 5 effective lines; a 10-line prose paragraph costs 20. This is a 4:1 efficiency difference.

### Content Routing Decision Tree (ISG-RTG-01 through ISG-RTG-06)

| Content Type | Route To | Format |
|-------------|----------|--------|
| Specifies CSS property:value pair | artifact-builder-recipe.md (recipe step) | Binary+CSS (0.5x) |
| Perception threshold | artifact-identity-perception.md (calibration) + gate-runner-core.js (binary check) | Binary+CSS (0.5x) |
| Brief structure change | artifact-tc-brief-template.md (template) | Recipe (1.0x) |
| Process/decision change | artifact-orchestrator.md (phase step) | Recipe (1.0x) |
| Reference value | artifact-value-tables.md (value pair) | Binary+CSS (0.5x) |
| None of the above | Reconsider whether the enrichment is needed | N/A |

---

## 6.8 Red Lines (9 Absolute Constraints)

These changes require a separate architectural validation cycle. They CANNOT be implemented as standard enrichments.

| Red Line | Description | Rule ID |
|----------|-------------|---------|
| 1 | NEVER change the number of pipeline phases | ISG-RL-01 |
| 2 | NEVER change the brief line budget totals | ISG-RL-02 |
| 3 | NEVER change BV gate thresholds downward | ISG-RL-03 |
| 4 | NEVER remove any mechanism rated HIGHLY EFFECTIVE | ISG-RL-04 |
| 5 | NEVER change the builder's creative authority band (80%) | ISG-RL-05 |
| 6 | NEVER add calibration data to auditor-visible files | ISG-RL-06 |
| 7 | NEVER modify `isCold()` formula without full palette validation | ISG-RL-07 |
| 8 | NEVER change GR-48 REQUIRED_GATES to a smaller list | ISG-RL-08 |
| 9 | NEVER remove the dual-route pattern for any soul constraint | ISG-RL-09 |

---

## 6.9 Pre-Flight Checklist (Every Enrichment)

Before implementing ANY enrichment, complete ALL 7 preconditions (ISG-PFC-01 through ISG-PFC-07):

- [ ] **PFC-01:** Identify target file(s) and check the capacity table (Section 6.5)
- [ ] **PFC-02:** Identify anti-loss mechanisms in blast radius using the 5 interdependency clusters (Section 7)
- [ ] **PFC-03:** Classify enrichment format (binary+CSS / recipe / prose / judgment) and compute effective lines (Section 6.7)
- [ ] **PFC-04:** Check if net addition exceeds safe budget -- if yes, identify lines to subtract first
- [ ] **PFC-05:** If targeting gate-runner-core.js: identify equal or greater subtraction. Net-zero is MANDATORY.
- [ ] **PFC-06:** If targeting brief-facing content: verify NO checklist verbs, NO suppressor patterns, NO prohibition framing
- [ ] **PFC-07:** If targeting auditor-facing content: verify NO calibration data, NO tier definitions, NO build intent

---

## 6.10 Post-Implementation Verification (Every Enrichment)

After implementing ANY enrichment, complete ALL 7 checks (ISG-PIV-01 through ISG-PIV-07):

- [ ] **PIV-01:** Format check -- does the modified section still use recipe verbs (not checklist verbs)?
- [ ] **PIV-02:** Capacity check -- count net lines added, update running total against 240-line budget
- [ ] **PIV-03:** Cross-reference check -- if changed a threshold, update ALL locations (gate-runner-core.js + gate-runner-spec.md + gate-runner-preconditions.md + MANIFEST quickstart)
- [ ] **PIV-04:** Isolation check -- does any new content leak to an agent that should not see it? (Check MANIFEST Appendix B exclusion table)
- [ ] **PIV-05:** Regex check -- if changed any header format, do BV-01 tier regexes (gate-runner-core.js L35-39) still match?
- [ ] **PIV-06:** GR-48 check -- if added a gate, is it in REQUIRED_GATES or RECOMMENDED_GATES?
- [ ] **PIV-07:** Question count check -- if added PA questions, are totals updated in pa-deployment.md, pa-manifest.md, and MANIFEST?

---

---

# SECTION 7: ANTI-LOSS VERIFICATION CHECKLIST

---

## 7.0 Mechanisms by Risk Level

| Risk Level | Mechanisms | Reason |
|------------|-----------|--------|
| **HIGH RISK** (directly modified by 8-change plan) | M-04, M-06, M-11, M-12, M-13, M-19, M-20, M-22 | Multiple changes touch these mechanisms' enforcement files |
| **MEDIUM RISK** (indirectly affected) | M-02, M-07, M-08, M-09, M-21, M-23, M-25 | Adjacent to changes; cascade effects possible |
| **LOW RISK** (not affected) | M-01, M-03, M-05, M-10, M-14, M-15, M-16, M-17, M-18, M-24 | No changes interact with these |

---

## 7.1 All 25 Mechanisms

### STRUCTURAL MECHANISMS (M-01 through M-06)

---

#### M-01: Artifact Decomposition
- **Location:** MANIFEST.md L91-102 (layer table), L179-342 (routing), L912-958 (file registry); gate-manifest.json L7-15 (files); pa-deployment.md L4-5 (split declaration)
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] Count artifact files in `ephemeral/va-extraction/` -- verify each appears in MANIFEST Section 3 + Appendix D
  - [ ] Verify no changes add/remove/rename artifact files
- **Anti-skimming pattern used:** N/A (structural architecture)
- **Information isolation dependency:** Enables M-04 by keeping files separable
- **Conviction language used:** N/A

---

#### M-02: Dual-Channel Architecture
- **Location:** MANIFEST.md L196-198 (dual-route description), L764, L795-797; artifact-orchestrator.md L233-242 (Channel 1/2 definitions); artifact-builder-recipe.md L62-63 (direct file routes)
- **Fragility:** ROBUST
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-005: verify MANIFEST L196-198 dual-route pattern text is unchanged
  - [ ] Verify builder prompt template still contains calibration context, not gate thresholds
  - [ ] Verify Channel 1 (lossless universal) and Channel 2 (regenerated content) boundaries intact
- **Anti-skimming pattern used:** N/A (architectural pattern)
- **Information isolation dependency:** YES -- dual-route IS how isolation works for thresholds. Builder sees calibration; gate sees binary.
- **Conviction language used:** N/A

---

#### M-03: Direct File Injection
- **Location:** MANIFEST.md L853 (builder receives tokens.css + components.css + mechanism-catalog.md + value tables), L1044-1045, L1083-1089; artifact-builder-recipe.md L23-25, L55-57, L62-63 ("direct file routes"); EXECUTION-TRACKER-TEMPLATE.md L36-38, L118-123
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] Verify artifact-builder-recipe.md L62-63 still says "direct file routes bypassing the brief" after ME-004 and ME-039 edits
  - [ ] Verify no new ME-004/ME-039 content accidentally routes through the brief instead of direct injection
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Direct injection BYPASSES brief compression -- intentional design
- **Conviction language used:** N/A

---

#### M-04: Per-Agent Context Isolation
- **Location:** MANIFEST.md L859-868 (exclusion table), L301-304 (PA isolation); pa-deployment.md L92, L201-221 (fresh-eyes); pa-guardrails.md L119-137; pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); artifact-orchestrator.md L131-143 (builder isolation)
- **Fragility:** **CRITICAL**
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-001: experiential pass instructions contain NO tier definitions, NO PA-05 expected scores, NO mechanism counts
  - [ ] After ME-037+ME-051: retired questions removed cleanly from Sections 1-3; new questions contain NO calibration data
  - [ ] After ME-006: screenshot validation info stays in orchestrator files (pa-deployment.md), NOT auditor files (pa-questions.md)
  - [ ] MANIFEST L859-868 exclusion table is unchanged
  - [ ] No content leaks across role boundaries (builder/auditor/weaver)
- **Anti-skimming pattern used:** N/A (isolation is structural, file-level separation)
- **Information isolation dependency:** THIS IS the information isolation mechanism -- most at-risk during this implementation wave
- **Conviction language used:** N/A

---

#### M-05: Tiered Brief Structure
- **Location:** gate-runner-core.js L29-67 (BV-01 code), L34-40 (tier header patterns: T1>=12, T2>=6, T3>=40, T4>=32, CM>=24 at 80%); MANIFEST.md L28-33, L404-408; gate-runner-preconditions.md L14-19
- **Fragility:** **CRITICAL** (gate-runner-core.js) / ROBUST (markdown)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] gate-runner-core.js L35-39 tier regexes unchanged (`/^#+\s*Tier\s*1/im` etc.)
  - [ ] BV-01 min values unchanged (12, 6, 40, 32, 24)
  - [ ] No tier header format changes in any file
- **Anti-skimming pattern used:** BV-01 IS the anti-skimming mechanism for under-budgeted brief tiers
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A (JavaScript code)

---

#### M-06: Suppressor Management
- **Location:** gate-runner-core.js L104-117 (BV-04 code), L105-109 (4 suppressor regex patterns); artifact-orchestrator.md L42; MANIFEST.md L32; gate-runner-preconditions.md L37-46
- **Fragility:** **CRITICAL** (regex patterns)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-004 and ME-039: scan ALL new text in artifact-builder-recipe.md for BV-04 trigger patterns
  - [ ] No `sample N-N` phrases in new content
  - [ ] No `must not`/`shall not`/`never use` in new content
  - [ ] No `verify that`/`fail if`/`must be` in new content
  - [ ] No `>= N channels` in new content
  - [ ] New content uses recipe verbs: Build/Create/Derive/Map/Read/Select/Deploy/Assess
- **Anti-skimming pattern used:** BV-04 IS the anti-skimming enforcement for suppressor language
- **Information isolation dependency:** Suppressor scan applies ONLY to brief-facing content. ME-002 targets pa-weaver.md (weaver-facing) -- safe from BV-04.
- **Conviction language used:** **CRITICAL** -- ME-004/ME-039 content MUST use recipe verbs, not checklist verbs. "Assess whether text is readable" (recipe) NOT "Verify that text is readable" (suppressor).

---

### ROUTING MECHANISMS (M-07 through M-10)

---

#### M-07: MANIFEST-Driven Routing
- **Location:** MANIFEST.md L849-857 (positive routing), L859-868 (negative routing), L179-342 (Section 3 routing table); EXECUTION-TRACKER-TEMPLATE.md L54-58, L83-91, L117-127, L190-195
- **Fragility:** ROBUST
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-005: MANIFEST Section 3 routing table (L179-342) is completely unchanged
  - [ ] After ME-037+ME-051: auditor question lists in MANIFEST L149-157 updated correctly
  - [ ] After ALL changes: verify MANIFEST Section 3 routing table unchanged
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** M-07 enforces isolation by defining who receives what
- **Conviction language used:** N/A

---

#### M-08: Dual-Route Pattern
- **Location:** gate-runner-core.js L234-277 (GR-05 warm palette code), L246-248 (`isCold()` function); MANIFEST.md L196-198, L795-796; artifact-builder-recipe.md L108-120 (builder calibration)
- **Fragility:** FRAGILE (isCold heuristic)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] `isCold()` at gate-runner-core.js L246-248 is unchanged
  - [ ] artifact-builder-recipe.md L108-120 calibration section is unchanged
  - [ ] Builder still sees CALIBRATION (15=floor, 25=confident, 50=dramatic) not THRESHOLDS (>=15 PASS, <15 FAIL)
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Dual-route ensures builder sees calibration not thresholds
- **Conviction language used:** Builder calibration uses world-description framing

---

#### M-09: Agent Prompt Templates
- **Location:** MANIFEST.md L975-1170 (Appendix E: all templates), L1037-1090 (builder template), L1098-1119 (PA auditor template), L1138-1170 (weaver template); pa-deployment.md L42-52, L100-104, L106-119
- **Fragility:** FRAGILE (templates) / ROBUST (tables)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-037+ME-051: all `{VARIABLE}` placeholders in MANIFEST Appendix E are intact
  - [ ] Question counts in PA auditor templates match pa-deployment.md assignments
  - [ ] After ME-001: experiential pass instructions don't break existing PA auditor template structure
  - [ ] Builder file read order in builder template unchanged
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Templates enforce isolation by defining WHAT each agent receives
- **Conviction language used:** Builder template uses recipe verbs; PA auditor template uses observation verbs

---

#### M-10: Content Map Regeneration
- **Location:** gate-runner-core.js L39 (BV-01 ContentMap tier), MANIFEST.md L377-378, L986-1003; artifact-orchestrator.md L192-194
- **Fragility:** FRAGILE (BV-01 ContentMap regex)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] gate-runner-core.js L39 ContentMap regex and min: 24 unchanged
  - [ ] MANIFEST Content Analyst prompt template unchanged
- **Anti-skimming pattern used:** BV-01 ContentMap tier IS the anti-skimming mechanism for content maps
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A

---

### FORMAT MECHANISMS (M-11 through M-18)

---

#### M-11: Recipe Format
- **Location:** gate-runner-core.js L93-102 (BV-03 code), L94 (recipe verbs), L95 (checklist verbs), L96 (3:1 ratio); artifact-builder-recipe.md L5, L13; MANIFEST.md L31, L234; gate-runner-preconditions.md L30-35
- **Fragility:** **CRITICAL** (verb lists in JS)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-004 and ME-039: count recipe verbs vs checklist verbs in ALL new text
  - [ ] Verify ratio remains >= 3:1 when combined with existing content
  - [ ] Count instances of Build/Create/Derive/Map/Read/Select/Deploy/Assess
  - [ ] Count instances of Verify/Fail if/Must be/Ensure/Check that
  - [ ] BV-03 verb regex at L94-95 unchanged
- **Anti-skimming pattern used:** BV-03 IS the anti-skimming enforcement for recipe format
- **Information isolation dependency:** Format applies to brief-facing content only
- **Conviction language used:** **CRITICAL.** ME-004 Q0 self-check MUST use "Assess" not "Verify." ME-039 boilerplate MUST use "Deploy" not "Ensure."

---

#### M-12: World-Description Framing
- **Location:** MANIFEST.md L188-190, L198, L863-864, L879; artifact-builder-recipe.md L13; artifact-orchestrator.md L131-143; gate-runner-core.js L107 (BV-04 S-02 pattern)
- **Fragility:** FRAGILE (requires discipline)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-004 and ME-039: read every new sentence -- "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?"
  - [ ] Prohibition language -> rewrite as world-description
  - [ ] ME-004 Q0 says "Assess whether text is readable at arm's length" (good) NOT "Verify that no text is illegible" (bad)
  - [ ] ME-039 boilerplate says "Deploy this HTML scaffold" (good) NOT "Ensure your HTML starts with" (bad)
- **Anti-skimming pattern used:** N/A (this is about VOICE, not FORMAT)
- **Information isolation dependency:** M-12 depends on M-04 to keep raw SC tables away from builder
- **Conviction language used:** **CRITICAL.** All new builder-facing content must use world-description verbs, not prohibition verbs.

---

#### M-13: Binary Rules
- **Location:** gate-runner-core.js L1-20 (execution order), L752-778 (verdict summary), L1330-1374 (GR-48 coverage), L1331-1340 (REQUIRED_GATES + RECOMMENDED_GATES arrays); gate-manifest.json L55-59, L18-52, L62-111; gate-runner-spec.md L51-57; MANIFEST.md L275-285
- **Fragility:** **CRITICAL** (gate-runner-core.js) / FRAGILE (gate-manifest.json)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-005: verdict logic consistent across ALL 7 locations:
    1. MANIFEST.md L276
    2. MANIFEST.md L505 (Phase 3C)
    3. MANIFEST.md L646 (failure mode table)
    4. MANIFEST.md L714 (critical path table)
    5. MANIFEST.md L1144 (execution sequence)
    6. gate-manifest.json L56
    7. gate-runner-spec.md L53
    8. artifact-orchestrator.md verdict tree
  - [ ] After ME-007: GR-44 still returns `{ gate: 'GR-44', status: 'PASS'|'FAIL' }` schema
  - [ ] GR-44 still in REQUIRED_GATES array at L1331
- **Anti-skimming pattern used:** N/A (code, not prose)
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A (JavaScript)

---

#### M-14: Perception Calibration Table
- **Location:** gate-runner-core.js L1170-1223 (GR-51), L1193-1214, L69-91 (BV-02); gate-runner-spec.md L132; pa-questions.md L362-377 (Appendix A); artifact-builder-recipe.md L108-124 (builder calibration)
- **Fragility:** **CRITICAL** (GR-51 code)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] GR-51 thresholds unchanged (above25Ratio >= 0.50, stddev >= 8, middleHasHighDelta)
  - [ ] BV-02 minimum delta 15 unchanged at L82
  - [ ] Builder calibration ranges intact (15=floor, 25=confident, 50=dramatic)
- **Anti-skimming pattern used:** GR-51 IS the anti-skimming mechanism for background deltas -- catches "technically compliant" clustering
- **Information isolation dependency:** Builder sees CALIBRATION; gate sees BINARY. Dual-route.
- **Conviction language used:** N/A

---

#### M-15: Value Tables
- **Location:** MANIFEST.md L853, L1044-1045, L1089; artifact-builder-recipe.md L122
- **Fragility:** FRAGILE ("optional" flag is dangerous)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] MANIFEST L1089 still references value-tables.md
  - [ ] artifact-builder-recipe.md L122 still points to value tables
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Value tables bypass the brief via M-03 direct injection
- **Conviction language used:** N/A

---

#### M-16: Conviction Statement
- **Location:** gate-runner-core.js L1136-1168 (GR-50 regex + keywords); MANIFEST.md L423, L1053-1057, L1064-1073; artifact-orchestrator.md L377-379
- **Fragility:** FRAGILE (GR-50 regex + keywords)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] GR-50 regex at L1139 unchanged
  - [ ] Conviction format in builder prompt template unchanged
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Conviction is builder output -> orchestrator extracts -> REBUILD path only
- **Conviction language used:** N/A (gate code)

---

#### M-17: TC Brief Template
- **Location:** MANIFEST.md L20, L209-217, L1006-1032; gate-runner-core.js L29-67 (BV-01), L93-102 (BV-03)
- **Fragility:** ROBUST (template content) / **CRITICAL** (tier header format must match BV-01 regexes)
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] TC Brief Template tier headers match `^#+\s*Tier\s*[1234]` and `^#+\s*Content\s*Map`
  - [ ] No tier header format changes anywhere
- **Anti-skimming pattern used:** TC Brief Template defines the STRUCTURE that BV-01 enforces
- **Information isolation dependency:** N/A
- **Conviction language used:** Template uses recipe format (Read/Select/Deploy/Assess)

---

#### M-18: Worked Examples
- **Location:** MANIFEST.md L905 (glossary), L948 (Appendix D: file path)
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] No changes interact -- minimal verification needed
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A

---

### VERIFICATION MECHANISMS (M-19 through M-25)

---

#### M-19: Programmatic Gate Verification
- **Location:** gate-runner-core.js L1-20 (execution order), L29-120 (BV gates), L128-779 (core gates), L786-1038 (anti-pattern gates), L1045-1323 (Wave 2 gates), L1330-1374 (GR-48), L1377-1416 (GR-49), L1418-1437 (usage); gate-manifest.json (159 lines); gate-runner-spec.md (188 lines)
- **Fragility:** **CRITICAL** (entire gate-runner-core.js)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-007: GR-44 returns correct result schema `{ gate, name, status, measured, threshold }`
  - [ ] GR-44 still in `REQUIRED_GATES` array at L1334
  - [ ] No other gate functions accidentally modified (check function boundary comments)
  - [ ] After ME-005: if verdict summary at L752-778 is modified, verify it matches all 7 cross-file locations
  - [ ] `runGateRunner()` still returns `{ results, summary }` object
  - [ ] All 6 function signatures unchanged
- **Anti-skimming pattern used:** The entire gate system IS programmatic anti-skimming
- **Information isolation dependency:** Gate runner is orchestrator-executed, not agent-visible
- **Conviction language used:** N/A (JavaScript)

---

#### M-20: Fresh-Eyes PA Principle
- **Location:** pa-deployment.md L201-221 (full spec), L217-221; pa-guardrails.md L119-148 (Three Laws); pa-questions.md L312-316 (Section 4 WEAVER USE ONLY); MANIFEST.md L322-323, L866-868
- **Fragility:** ROBUST (structural enforcement via file split)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-001: experiential pass instructions are in pa-deployment.md ONLY, not in pa-questions.md or pa-guardrails.md
  - [ ] After ME-037+ME-051: new replacement questions contain ZERO mechanism counts, pattern names, build plan details, prior experiment results, tier definitions, compositional stack theory
  - [ ] pa-deployment.md L201-221 fresh-eyes spec unchanged
  - [ ] pa-questions.md Sections 1-3 remain calibration-free
- **Anti-skimming pattern used:** N/A (this is about WHAT auditors see, not formatting)
- **Information isolation dependency:** **CRITICAL.** ME-001's experiential pass adds a "first impressions" step. Auditors receive ONLY "Before answering questions, describe your first impression of the page." NOT the rationale for WHY this was added.
- **Conviction language used:** Auditor instructions use observation language ("Describe what you see") not measurement language ("Verify that...")

---

#### M-21: Screenshot Pre-Capture
- **Location:** MANIFEST.md L35, L324; pa-deployment.md L139-196 (Section 2: complete protocol); EXECUTION-TRACKER-TEMPLATE.md L142-152
- **Fragility:** ROBUST
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-006: new screenshot validation does NOT modify the capture sequence itself
  - [ ] Validation is ADDED AFTER capture, not DURING
  - [ ] Validation stays in orchestrator-facing files, not auditor-facing files
  - [ ] Screenshot validation results do NOT reach auditors
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Screenshot validation results should NOT reach auditors (would anchor assessment)
- **Conviction language used:** N/A

---

#### M-22: 9-Auditor Deployment
- **Location:** pa-deployment.md L28-31 (architecture), L42-52 (AUTHORITATIVE assignment table: 69 questions across 9 auditors A-I), L72-92 (PA-05 cross-validation), L106-119 (evidence format); pa-guardrails.md L44-54; pa-manifest.md L22-34, L40-47; MANIFEST.md L149-157 (agent roster)
- **Fragility:** FRAGILE (assignment table is source of truth)
- **Risk classification:** **HIGH**
- **What to check after implementation:**
  - [ ] After ME-037+ME-051 (MUST be atomic):
    - [ ] Retired questions (PA-06, PA-09, PA-40, PA-07 if exists) REMOVED from all 5 locations: pa-questions.md, pa-deployment.md L42-52, MANIFEST.md L149-157, pa-manifest.md L22-34, EXECUTION-TRACKER-TEMPLATE.md
    - [ ] New experiential questions ADDED to all 5 locations
    - [ ] Total counts match across ALL 11 locations: pa-questions.md L306, pa-deployment.md L54, pa-manifest.md L36, pa-weaver.md L18, pa-guardrails.md L15, MANIFEST.md L159+L784
    - [ ] No auditor exceeds 11 questions; Auditor C (currently 11) should not receive new questions without retirement offsetting
    - [ ] PA-05 cross-validation table at L72-92 unchanged
    - [ ] Load balance verified (retiring from B/C/F frees capacity; new questions to lightest auditors E/F/H)
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Assignment table defines what each auditor sees -- incorrect assignments = wrong domain questions
- **Conviction language used:** N/A

---

#### M-23: REBUILD Not FIX
- **Location:** MANIFEST.md L40-42, L275-285 (verdict logic), L519-521 (max iterations), L605 (circuit breaker); gate-manifest.json L55-59; artifact-orchestrator.md L107-115
- **Fragility:** ROBUST (conceptual, not code)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] After ME-005: MECHANICAL exception defined consistently across all 7 verdict logic locations
  - [ ] Definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) -> REFINE; ANY non-MECHANICAL identity failure -> REBUILD"
  - [ ] Circuit breaker at L605 updated if ME-005 adds a new iteration type
  - [ ] Early termination at MANIFEST L474 updated for MECHANICAL exception
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A (verdict logic, not recipe content)

---

#### M-24: Mode Selection by Orchestrator
- **Location:** MANIFEST.md L26, L344, L383-389, L886-887; artifact-orchestrator.md L297-347 (mode selection logic), L301, L313-323; EXECUTION-TRACKER-TEMPLATE.md L67-69
- **Fragility:** ROBUST
- **Risk classification:** LOW
- **What to check after implementation:**
  - [ ] artifact-orchestrator.md Section 4 mode selection logic unchanged
  - [ ] Builder sees ONE mode, implicit in recipe format
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** Builder sees ONE mode, implicit in recipe format
- **Conviction language used:** N/A

---

#### M-25: Honest Complexity Accounting
- **Location:** MANIFEST.md L346-356 (accounting table: ~3,600 lines), L750 (CF-01); artifact-orchestrator.md L147-157; artifact-builder-recipe.md L14-15
- **Fragility:** ROBUST (documentation, not code)
- **Risk classification:** MEDIUM
- **What to check after implementation:**
  - [ ] Optional: update MANIFEST.md L346-356 line counts to reflect new artifact-builder-recipe.md size after ME-004 and ME-039
  - [ ] Not strictly necessary for pipeline function (documentation-only)
- **Anti-skimming pattern used:** N/A
- **Information isolation dependency:** N/A
- **Conviction language used:** N/A

---

## 7.2 The 5 Interdependency Clusters

Changes within a cluster require coordinated updates across all cluster members.

### Cluster 1: Brief Quality Enforcement
- **Members:** M-05 (tiered brief), M-06 (suppressor management), M-11 (recipe format), M-17 (TC brief template)
- **Shared code:** gate-runner-core.js L29-120 (BV-01 through BV-04)
- **Rule:** Any brief format change must be coordinated across all four mechanisms
- **Rule ID:** ISG-CL1-01

### Cluster 2: Builder Information Barrier
- **Members:** M-04 (context isolation), M-08 (dual-route), M-12 (world-description framing)
- **Shared enforcement:** MANIFEST Appendix B exclusion table, BV-04 suppressor scan
- **Rule:** Content reaching the builder must avoid prohibition framing AND gate-format thresholds
- **Rule ID:** ISG-CL2-01

### Cluster 3: Gate Verification System
- **Members:** M-13 (binary rules), M-14 (perception calibration), M-19 (programmatic verification)
- **Shared code:** gate-runner-core.js (entire file), gate-manifest.json (tiers + verdict logic)
- **Rule:** Adding/removing gates requires coordinated updates in 5-7 locations
- **Rule ID:** ISG-CL3-01

### Cluster 4: PA Audit Integrity
- **Members:** M-20 (fresh-eyes), M-21 (screenshots), M-22 (9-auditor deployment)
- **Shared enforcement:** pa-deployment.md (assignment table), pa-guardrails.md (constraints)
- **Rule:** Adding PA questions requires updates in 5+ locations
- **Rule ID:** ISG-CL4-01

### Cluster 5: Routing Accuracy
- **Members:** M-01 (decomposition), M-03 (direct injection), M-07 (MANIFEST routing), M-09 (prompt templates)
- **Shared spec:** MANIFEST.md (Section 3 + Appendix B + Appendix D + Appendix E)
- **Rule:** Adding new files or changing routing requires updates in all four MANIFEST sections
- **Rule ID:** ISG-CL5-01

---

## 7.3 The 3 Most Dangerous Interactions

### DANGER 1: ME-004/ME-039 x M-06/M-11/M-12 -- Wrong Verbs Break BV Gates

**What happens:** New builder recipe content (ME-004 legibility self-check, ME-039 font/color boilerplate) that uses wrong verbs or prohibition framing will be caught by BV-03/BV-04, causing brief FAIL.

**The real danger:** If someone "fixes" the BV gate instead of fixing the content, suppressors enter the pipeline. This leads to: builder receives prohibition framing -> becomes cautious -> suppressor S-02 -> fewer mechanisms -> FLAT output.

**Validation protocol:**
- [ ] Scan ALL new text in artifact-builder-recipe.md for BV-04 trigger patterns (4 regex patterns listed in Section 6.2)
- [ ] Count recipe verbs vs checklist verbs in ALL new text
- [ ] Verify ratio remains >= 3:1
- [ ] Read every new sentence: "Does this tell the builder what the WORLD IS, or what they MUST NOT DO?"
- [ ] If BV-03 or BV-04 triggers: **FIX THE CONTENT, NEVER WEAKEN THE GATE**

**Specific checks:**
- ME-004 Q0 MUST use "Assess whether..." NOT "Verify that..."
- ME-039 boilerplate MUST use "Deploy this HTML scaffold" NOT "Ensure your HTML starts with"
- No `sample N-N`, `must not`, `shall not`, `never use`, `verify that`, `fail if`, `must be`, `>= N channels` anywhere in new content

---

### DANGER 2: ME-005 x M-13 -- 7-Location Verdict Logic Consistency

**What happens:** The MECHANICAL exception modifies when REBUILD vs REFINE triggers. This verdict logic appears in 7+ locations across the codebase. Missing even ONE location creates a contradiction.

**The real danger:** If MANIFEST says "MECHANICAL -> REFINE" but gate-manifest.json still says "ANY identity FAIL -> REBUILD", the pipeline's behavior depends on which file the orchestrator reads first. This creates unpredictable, non-reproducible verdict outcomes.

**All 7+ locations that MUST be updated simultaneously:**

| # | Location | Line Range | What |
|---|----------|-----------|------|
| 1 | MANIFEST.md | L276 | Primary verdict logic |
| 2 | MANIFEST.md | L505 | Phase 3C description |
| 3 | MANIFEST.md | L646 | Failure mode table |
| 4 | MANIFEST.md | L714 | Critical path table |
| 5 | MANIFEST.md | L1144 | Execution sequence |
| 6 | gate-manifest.json | L56 | Verdict registry |
| 7 | gate-runner-spec.md | L53 | Specification docs |
| 8 | artifact-orchestrator.md | Verdict tree | Decision tree |

**Additional locations to check:**
- MANIFEST.md L474 early termination (must add MECHANICAL exception)
- MANIFEST.md L605 circuit breaker (must update if new iteration type)
- pa-weaver.md verdict thresholds (if override references MECHANICAL)

**Rule:** All 7+ locations or none. Never commit a partial update.

**Validation protocol:**
- [ ] Read ALL verdict logic locations BEFORE editing (verify current consistency)
- [ ] After editing: read ALL locations and verify word-for-word consistency of MECHANICAL exception
- [ ] Verify MECHANICAL definition is BINARY: "ALL identity failures are MECHANICAL (<=5 CSS lines, no HTML change, no design decision) -> REFINE"
- [ ] Verify early termination at L474 updated
- [ ] Verify circuit breaker at L605 updated
- [ ] If gate-runner-core.js verdict summary (L752-778) modified: verify it matches all other locations

---

### DANGER 3: ME-037+ME-051 x M-22 -- 11-Location Question Total Consistency

**What happens:** Retiring 4 PA questions and adding 4 experiential replacements requires updating question totals and assignments across 11 locations. If pa-deployment.md says 70 but pa-weaver.md says 69, the weaver may flag incomplete data.

**The real danger:** The weaver uses question totals to detect incomplete audit data. A mismatch between ANY two locations causes the weaver to either (a) flag false incomplete data or (b) silently accept actually incomplete data. Both outcomes corrupt the PA verdict.

**All 11 locations that MUST match:**

| # | File | Specific Location | What |
|---|------|-------------------|------|
| 1 | pa-questions.md | Question entries | Individual question definitions |
| 2 | pa-deployment.md | L42-52 | Auditor assignment table |
| 3 | MANIFEST.md | L149-157 | Agent roster with question lists |
| 4 | pa-manifest.md | L22-34 | Report checklist |
| 5 | EXECUTION-TRACKER | Phase 3B | PA deployment checklist |
| 6 | pa-questions.md | L306 | Total count |
| 7 | pa-deployment.md | L54 | Total count |
| 8 | pa-manifest.md | L36 | Total count |
| 9 | pa-weaver.md | L18 | Total count |
| 10 | pa-guardrails.md | L15 | Total count |
| 11 | MANIFEST.md | L159+L784 | Total count(s) |

**Additional concerns:**
- PA-40 retirement breaks AP-05 mapping in pa-guardrails.md Section 7 and pa-weaver.md Section 6.1 (AP-05 maps to PA-40 + PA-66; without PA-40, AP-05 detection weakens)
- PA-07 may not exist (verify before attempting retirement)
- ME-033 references PA-09; if PA-09 is retired, ME-033's reference becomes orphan

**Rule:** Compute final total ONCE, then search-and-replace across all 11 locations. Retirement and addition MUST be ONE atomic operation -- never commit retirements without additions or vice versa.

**Validation protocol:**
- [ ] Before starting: read pa-questions.md and verify PA-06, PA-09, PA-40 exist; verify PA-07 does/does not exist
- [ ] Before starting: read pa-guardrails.md and identify AP-05 PA-40 reference
- [ ] Before starting: verify all 11 "69 questions" locations currently match
- [ ] Plan load balance: retiring from B(-1), C(-1), F(-1) frees capacity; assign new questions to lightest auditors (E:6, F:5-after-retirement, H:5)
- [ ] After implementation: count total questions in pa-questions.md
- [ ] After implementation: count total per-auditor in pa-deployment.md; verify no auditor exceeds 11
- [ ] After implementation: verify totals match across ALL 11 locations
- [ ] After implementation: verify AP-05 mapping in pa-guardrails.md and pa-weaver.md updated
- [ ] After implementation: verify PA-05 cross-validation table at pa-deployment.md L72-92 unchanged
- [ ] After implementation: verify new questions have YES/NO format, screenshot reference, viewport assignment, auditor assignment
- [ ] After implementation: verify new questions contain ZERO calibration data or mechanism counts
- [ ] **ATOMIC CHECK:** retirement and addition are ONE operation -- never commit retirements without additions

---

## 7.4 Critical Validation Steps (Post-All-Changes)

After ALL 8 changes are complete, perform these global verification checks:

1. [ ] **BV-03 Verb Ratio:** Run BV-03 regex against all new text in artifact-builder-recipe.md. Verify >= 3:1 recipe-to-checklist ratio.
2. [ ] **BV-04 Suppressor Scan:** Run BV-04 regex against all new text. Verify zero suppressor matches.
3. [ ] **Verdict Consistency:** Read ALL 7+ verdict logic locations. Verify exact textual consistency of MECHANICAL exception.
4. [ ] **Gate Runner Integrity:** Verify gate-runner-core.js total line count <= 1,437. Verify GR-44 in REQUIRED_GATES. Verify result schema.
5. [ ] **Question Totals:** Count questions across ALL 11 total-count locations. Verify all match.
6. [ ] **AP-05 Mapping:** Verify AP-05 anti-pattern mapping updated in pa-guardrails.md + pa-weaver.md.
7. [ ] **Routing Table:** Verify MANIFEST.md Section 3 routing table (L179-342) unchanged.
8. [ ] **Exclusion Table:** Verify MANIFEST.md Appendix B exclusion table (L859-868) unchanged.
9. [ ] **GR-48 Consistency:** Verify gate-runner-core.js GR-48 REQUIRED_GATES and RECOMMENDED_GATES arrays at L1331-1340 match gate-manifest.json tier arrays.
10. [ ] **Fresh-Eyes Principle:** Verify pa-deployment.md fresh-eyes principle (L201-221) unchanged.

---

*Sections 6 and 7 complete. 25 mechanisms mapped with location, fragility, risk, and verification checks. 3 most dangerous interactions documented with validation protocols. 9 red lines, 5 clusters, format multiplier model, per-file templates, and global pre-flight/post-implementation checklists included.*

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
