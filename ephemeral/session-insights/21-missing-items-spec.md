# Missing Checklist Items Specification

**Date:** 2026-02-15
**Designer:** missing-items-designer (checklist-hardening team)
**Purpose:** Design 9 new checklist items identified by traceability and completeness audits

**Context:**
- 3 CRITICAL items from traceability audit (B2.5, C3.5, A1.0)
- 6 Tier-1 completeness items (B10.1, B10.5, B10.7, B10.9, B10.12, B10.14)

All items follow the existing checklist format:
| ID | Check | Pass Condition | Fail Condition | Why This Matters |

---

## CRITICAL MISSING ITEMS (from Traceability Audit)

### B2.5: Container Width Priority Order

**Source:** 14-master-execution-prompt.md lines 457-464 (M3 modification)

**Gap Analysis:** The current checklist verifies container width compliance (B2.1-B2.4) and mentions the internal padding escape hatch (B2.4), but does NOT verify that the builder understands the priority order when metaphor conflicts with container width. This was THE primary Phase D failure mode (4/5 pages violated width).

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B2.5** | **Container width priority order documented** | Builder documentation explicitly states: "Container width 940-960px is HIGHEST priority (never compromise). If metaphor or aesthetic demands narrowing, express via internal padding (e.g., max-width: 960px + padding: 0 120px = 720px content width), NOT external width reduction." | No priority order documented, or priority order states metaphor/aesthetic can override container width, or escape hatch strategy not documented | Container width 940-960px is NON-NEGOTIABLE per M3. The escape hatch (internal padding) is the CORRECT way to satisfy narrow aesthetics without violating the width floor. Without explicit documentation, builders may reduce container width thinking it's acceptable if "metaphor demands it." Phase D showed this was the #1 failure mode. |

**Placement:** Insert after B2.4 in Section B2 (Container Width)

**Verification Method:** Check builder documentation for explicit priority order statement. Search for keywords: "priority", "NEVER compromise", "internal padding", "escape hatch".

---

### C3.5: Audit Protocol Compliance

**Source:** HANDOFF.md Section 13 "UI Audit Protocol" + MEMORY.md "UI Audit Protocol"

**Gap Analysis:** Current item C3.4 requires "Audit performed via Playwright MCP or equivalent" and mentions "Computed styles measured from rendered page." Items B9.7-B9.8 check rendering at both viewports. BUT the checklist does NOT require the specific protocol steps that prevent audit gaps: disabling scroll animations, using document.fonts.ready, checking computed styles (not CSS source), verifying alignment issues and border shorthand order.

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **C3.5** | **Audit protocol compliance** | Audit documentation shows: (1) Scroll animations disabled via `animation: none !important; opacity: 1 !important` before measurement, (2) `document.fonts.ready` used before font property checks, (3) Computed styles measured (not CSS source), (4) Header-content alignment, Q/A text alignment, and border shorthand order verified | Audit based only on CSS source code, or animations not disabled during measurement, or font checks before fonts.ready, or alignment issues not checked | Phase D audit found "CSS shorthand overrides catch bugs that source reading misses." Scroll animations create false positives in computed style measurements. Font checks before fonts.ready return wrong values (fonts may not be loaded yet). This protocol prevents these audit gaps. Computed styles are ground truth; CSS source can lie. |

**Placement:** Insert after C3.4 in Section C3 (Programmatic Audit)

**Verification Method:** Check audit documentation for evidence of all 4 protocol steps. For Playwright audits, verify code includes `animation: none !important` injection, `document.fonts.ready` await, `getComputedStyle()` calls, and alignment/border checks.

---

### A1.0: M1 Current Status Verification

**Source:** HANDOFF.md Section 5 lines 169-174, 17-conversation-clarifications.md C2 lines 36-43

**Gap Analysis:** The skill currently (post-Wave 1) STILL contains "sample 2-4 mechanisms" because M1 was assigned to Wave 2. Items A1.1-A1.5 document the 3 M1 timing options but do NOT verify the current state of the skill or which option is actually selected. This creates a CRITICAL CONTRADICTION: the checklist treats M1 timing as a future decision, but sources state M1 is NOT APPLIED (decided in Wave assignment).

**IMPORTANT NOTE:** Based on the team-lead message, M1 was JUST APPLIED to SKILL.md by a previous agent. So this item should verify the NEW state: the skill NOW has per-category minimums, and option (a) "M1 applied to skill before build" is the current reality.

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **A1.0** | **M1 current status verified** | Document states: "Checked SKILL.md lines 905-930 (or equivalent mechanism selection section). Current text says: [quote actual text showing per-category minimum protocol]. Based on this, M1 has been applied (option a is the current state)." | No verification of current skill state, or quote shows "sample 2-4 mechanisms" (old state), or option selection not documented based on actual skill content | M1 was originally Wave 2, not Wave 1. The skill was JUST updated to include per-category minimums. If the builder doesn't verify this, they may incorrectly assume the old "sample 2-4" instruction is still active. This item confirms that option (a) "M1 applied to skill before build" is the reality, not a hypothetical. The actual skill content determines which A1 option applies. |

**Placement:** Insert BEFORE A1.1 as the first item in Section A1 (M1 Timing Decision). Renumber A1.1-A1.5 to A1.1-A1.5 (keep their IDs since A1.0 comes before them).

**Verification Method:** Read SKILL.md mechanism selection section (likely around lines 905-930 based on source docs). Verify text says "per-category minimum" or similar, NOT "sample 2-4 mechanisms". Document must quote the actual text found.

---

## TIER-1 COMPLETENESS ITEMS (High-Priority Additions)

### B10.1: Semantic HTML Landmarks

**Source:** Completeness audit dimension #1 (Semantic HTML Quality)

**Rationale:** Mechanisms #13 (Dark Header) and #14 (Footer Mirror) assume semantic `<header>` and `<footer>` elements. Semantic landmarks enable screen reader navigation and signal structural intent. Without semantic HTML, these mechanisms lose their semantic signal.

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B10.1** | **Page uses semantic HTML landmarks** | At least 3 of: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` present in HTML structure | All content wrapped in `<div>` elements with no semantic landmarks | Semantic landmarks enable screen reader navigation and signal structural intent. Mechanism #13 (Dark Header) and #14 (Footer Mirror) assume semantic `<header>` and `<footer>` elements. Using `<div class="header">` loses the semantic signal. Zone differentiation (mechanism #7) is reinforced when HTML structure matches visual structure. |

**Placement:** Insert as first item in new Section B10 (Additional Build Quality Checks) after B9

**Verification Method:** Parse HTML for semantic elements. Count occurrences of `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`. Pass if >= 3 present.

---

### B10.5: Zone Backgrounds Follow Density Pattern

**Source:** Completeness audit dimension #4 (Color Usage Depth)

**Rationale:** Mechanism #7 (Zone Background Differentiation) is a Depth/Emphasis mechanism. If zone background colors contradict the density pattern direction, the page sends conflicting perceptual signals (visual weight vs structural flow).

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B10.5** | **Zone background colors follow density pattern direction** | If pattern is CRESCENDO: background progression moves from lighter (sparse intro) to darker/warmer (dense peak). If F-PATTERN: dense left zone has darker background than sparse right. Background color sequence is consistent with pattern direction documented in B6.2. | Zone backgrounds are random, or reverse the pattern direction (e.g., CRESCENDO page has densest section with lightest background) | Mechanism #7 (Zone Background Differentiation) is a Depth/Emphasis mechanism. If zone colors contradict the density pattern, the page sends conflicting perceptual signals: spatial structure flows one direction (sparse to dense) but visual weight flows the opposite direction. This breaks fractal coherence between color and density channels. |

**Placement:** Insert in Section B10 after B10.1

**Verification Method:** Identify zones (sections with distinct background colors). Map zone sequence to density pattern direction from B6.2. Check if background color values progress consistently (lighter → darker for CRESCENDO, etc.). Measure lightness values or visual inspection.

---

### B10.7: Code Blocks Use Mechanism #17 Styling

**Source:** Completeness audit dimension #12 (Code Block Quality)

**Rationale:** Mechanism #17 (Code Block) is a Component-category mechanism with specific CSS requirements: dark background (#1A1A1A), 3px solid border, JetBrains Mono font, overflow-x: auto. If a builder deploys mechanism #17 but doesn't implement it correctly, the Component category is nominally covered but visually broken.

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B10.7** | **Code blocks use mechanism #17 styling (if deployed)** | If mechanism #17 deployed: code blocks have (a) dark background (--bg-dark / #1A1A1A or similar), (b) 3px solid border, (c) JetBrains Mono font family, (d) overflow-x: auto for long lines. If mechanism #17 NOT deployed: N/A (PASS). | Mechanism #17 listed as deployed but code blocks use default browser styling, light background, wrong font, or have horizontal overflow without scroll | Mechanism #17 is the Component-category code block standard documented in the catalog. Incorrect implementation means the Component category is nominally covered but visually broken. Dark background distinguishes code zones from body text zones. 3px border provides structural boundary per border-weight grammar. JetBrains Mono is typography trinity requirement for code. Overflow handling prevents layout breaks. |

**Placement:** Insert in Section B10 after B10.5

**Verification Method:** IF mechanism #17 is listed in C2.3: Check computed styles for `<pre>` or `<code>` elements. Verify background-color is dark (~#1A1A1A), border is 3px solid, font-family is JetBrains Mono, overflow-x is auto or scroll. IF #17 not deployed: automatic PASS.

---

### B10.9: WCAG AA Contrast Ratio

**Source:** Completeness audit dimension #13 (Accessibility Depth)

**Rationale:** Color contrast ratio is a WCAG requirement that can be measured programmatically. The warm palette should naturally pass WCAG AA, but edge cases (muted text colors on light backgrounds, inverse text on dark backgrounds) may fail. This is the most measurable accessibility metric not currently checked.

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B10.9** | **Primary text-background contrast ratio >= 4.5:1 (WCAG AA)** | Main body text color on main background color meets WCAG AA (4.5:1 minimum). Heading text on their backgrounds meets AA. If inverse text used (light on dark zones): contrast ratio >= 4.5:1. All primary text-background combinations pass. | Any primary text-background combination fails WCAG AA contrast ratio (< 4.5:1) | WCAG 2.1 Level AA requires 4.5:1 contrast for normal text, 3:1 for large text. KortAI's warm palette (#1A1A1A text on #FEF9F5 background) should naturally pass AA. However, muted text colors (--text-secondary #444444, --text-tertiary #888888) on light backgrounds, or inverse text on dark code blocks, could fail. A programmatic contrast check catches these accessibility violations before deployment. |

**Placement:** Insert in Section B10 after B10.7

**Verification Method:** Extract primary text color (body text) and primary background color from computed styles. Calculate contrast ratio using WCAG formula: (L1 + 0.05) / (L2 + 0.05) where L1/L2 are relative luminance values. Repeat for headings, inverse text zones. Pass if all ratios >= 4.5:1.

---

### B10.12: Border Weights Follow 3-Category System

**Source:** Completeness audit gap #1 (SKILL.md Coherence Checking Rule C-4)

**Rationale:** The border grammar (3-category system from Layer 3) is a core vocabulary element documented in the skill's coherence checking rules. Violating it means the builder is not using the grammar correctly. Prohibition #9 specifically targets the "2px border epidemic."

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B10.12** | **Border weights follow 3-category system** | All borders use one of: (a) 3-4px structural (section boundaries, header/footer borders, callout accent borders), (b) 1px separator (table cell borders, subtle dividers), (c) Zero 2px borders (unless documented exception with specific justification) | 2px borders used without documented exception, or structural boundaries use 1px (weak encoding), or separators use 3-4px (over-emphasis) | The border-weight grammar is a 3-category system documented in mechanism-catalog.md and skill coherence Rule C-4: 3-4px = structural containment, 1px = separation/subdivision, NEVER 2px. Prohibition #9 specifically targets the "2px border epidemic" (compromise value that lacks intentionality). Violating this grammar means the builder is not using the vocabulary correctly — borders carry no weight-based meaning. |

**Placement:** Insert in Section B10 after B10.9

**Verification Method:** Extract all border/border-width declarations from CSS. Categorize each as 0px, 1px, 2px, 3px, 4px, or other. Count 2px occurrences. Check context of 3-4px usage (structural?) and 1px usage (separator?). Fail if any 2px found without documented justification, or if weight-to-purpose mapping is inverted.

---

### B10.14: Single Self-Contained HTML File

**Source:** Completeness audit gap #2 (Single-File Constraint)

**Rationale:** KortAI pages are single-file artifacts established by all validated explorations (DD through CD). External dependencies break portability and violate the production format. The skill's Phase 5 output specifies: "A complete, self-contained HTML file that includes `<style>` block with all CSS inline (single-file, no external dependencies)."

**Designed Item:**

| ID | Check | Pass Condition | Fail Condition | Why This Matters |
|----|-------|---------------|----------------|------------------|
| **B10.14** | **Output is a single self-contained HTML file** | One `.html` file with all CSS in `<style>` block within `<head>`, all fonts loaded via CDN links (Google Fonts or similar), no external CSS files required, no external JS files required (except font CDN) | Multiple files (separate .css or .js), external stylesheet `<link>` tags (other than fonts), or local file dependencies | KortAI pages are single-file artifacts for portability and simplicity. Every validated exploration (DD-006, CD-006, OD-004, etc.) is a single HTML file with inline CSS. External CSS files or local dependencies break the established production format. Font CDN links (Google Fonts) are acceptable since fonts are external by nature. The single-file constraint makes pages self-contained and easy to share/archive. |

**Placement:** Insert in Section B10 after B10.12

**Verification Method:** Check that output is exactly 1 .html file. Parse HTML for external `<link rel="stylesheet">` tags (fail if found, except font CDN links). Check for `<script src="">` tags (fail if found). Verify `<style>` block exists in `<head>`. All CSS should be inline.

---

## SUMMARY OF DESIGNED ITEMS

### Critical Items (from Traceability Audit)

| ID | Section | Check | Primary Concern |
|----|---------|-------|----------------|
| A1.0 | Pre-Build | M1 current status verified | M1 status contradiction resolution |
| B2.5 | Build | Container width priority order documented | #1 Phase D failure mode prevention |
| C3.5 | Measurement | Audit protocol compliance | Computed styles vs CSS source gap |

### Tier-1 Completeness Items

| ID | Section | Check | Primary Concern |
|----|---------|-------|----------------|
| B10.1 | Build | Semantic HTML landmarks | Screen reader navigation + mechanism correctness |
| B10.5 | Build | Zone backgrounds follow density pattern | Fractal coherence (color-density alignment) |
| B10.7 | Build | Code blocks use mechanism #17 styling | Component category deployment correctness |
| B10.9 | Build | WCAG AA contrast ratio | Accessibility compliance |
| B10.12 | Build | Border weights follow 3-category system | Vocabulary grammar compliance |
| B10.14 | Build | Single self-contained HTML file | Production format compliance |

### Item Placement in Checklist

**Section A1 (M1 Timing Decision):**
- INSERT A1.0 BEFORE existing A1.1 (new first item)

**Section B2 (Container Width):**
- INSERT B2.5 AFTER existing B2.4 (new last item in section)

**Section B10 (NEW SECTION - Additional Build Quality Checks):**
- CREATE new section B10 after B9
- INSERT B10.1, B10.5, B10.7, B10.9, B10.12, B10.14 in order

**Section C3 (Programmatic Audit):**
- INSERT C3.5 AFTER existing C3.4 (new last item in section)

### Updated Checklist Statistics

| Before | After | Change |
|--------|-------|--------|
| 129 items + 4 tables | 138 items + 4 tables | +9 items (+7.0%) |
| Sections A-H | Sections A-H | +1 new section (B10) |
| 7 critical items | 10 critical items | +3 (A1.0, B2.5, C3.5) |

### Critical Path Items (Failure = Experiment Fails)

Original 7 + new 3 = **10 critical items**:
1. B2.1 -- Container width 940-960px (THE #1 Phase D failure mode)
2. **B2.5** -- Container width priority order (NEW - prevents 940-960px violations)
3. B3.6 -- All 5 mechanism categories represented (THE core Middle-tier differentiator)
4. B7.1 -- border-radius: 0 (soul constraint, instant-fail)
5. B7.2 -- box-shadow: none (soul constraint, instant-fail)
6. B1.2 -- Phases 1-3 skipped (defines Middle-tier experiment validity)
7. E1.1 -- Clear verdict stated (the experiment's purpose is to produce a verdict)
8. B8.2 -- Always-load protocol completed (Track 1's Phase D failure cause)
9. **A1.0** -- M1 current status verified (NEW - resolves M1 contradiction)
10. **C3.5** -- Audit protocol compliance (NEW - prevents computed style audit gaps)

---

**END SPECIFICATION**

**Next Steps:**
1. Review specification with team-lead
2. Integrate 9 items into 18-middle-tier-checklist.md
3. Update Section H completeness cross-check tables to reflect new coverage
4. Re-run traceability audit to verify gaps are closed

**Files Referenced:**
- 20-checklist-traceability-audit.md (CRITICAL MISSING COVERAGE section, lines 311-700)
- 20-checklist-completeness-audit.md (High-Priority Additions section, lines 389-398)
- 18-middle-tier-checklist.md (current 129-item checklist)
- 14-master-execution-prompt.md (M3 priority order, lines 457-464)
- HANDOFF.md (UI Audit Protocol, Section 13)
- MEMORY.md (UI Audit Protocol)
- tension-composition/SKILL.md (coherence Rule C-4, Phase 5 single-file output)
