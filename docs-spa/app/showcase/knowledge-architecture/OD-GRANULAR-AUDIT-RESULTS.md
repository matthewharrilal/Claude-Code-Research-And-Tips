# OD Granular Adversarial Audit -- Final Results

**Date:** 2026-02-07
**Audit Type:** Multi-agent adversarial visual + programmatic audit
**Agents:** 17 (Traverser, 3 Visual-First, Fresh-Eyes, 3 Systematic, Structural, Contrast, Content, Comparative, Research-Ref, Weaver, Consistency, Synthesizer)
**Files Audited:** 6 OD HTML explorations (OD-001 through OD-006)
**Source Data:** 22 scratchpad files (~500KB total), 18 weaver cross-references
**Method:** Visual screenshots + Playwright DOM evaluation + adversarial debate protocol

---

## EXECUTIVE SUMMARY

The 6 OD explorations demonstrate a coherent design system with strong identity expression. The core soul -- sharp edges, flat design, serif/sans hierarchy, callout family DNA, square markers -- is intact across all 6 files with **zero locked token divergences**.

However, the audit identified **1 explicit FAIL** (OD-004 Essence callout font), **108 thin-border CSS declarations** violating Rule 5 across all ODs (1,000+ computed instances), **35 contrast accessibility failures**, and a **full-viewport dead zone** in OD-004. The explorations divide into 3 quality dialects: Polished (OD-001, OD-002), Functional (OD-003, OD-004, OD-005), and Editorial (OD-006), with a visible craft gap between the first and second groups.

**Bottom line:** The soul is preserved. The craft varies. 17 specific fixes are recommended across 4 priority tiers.

---

## TABLE OF CONTENTS

1. [Per-OD Audit Results](#per-od-audit-results)
2. [Cross-OD Systemic Issues](#cross-od-systemic-issues)
3. [Adversarial Debate Outcomes](#adversarial-debate-outcomes)
4. [Nuclear Question Answers](#nuclear-question-answers)
5. [Recommended Fix Order](#recommended-fix-order)
6. [Appendix: Agent Source Files](#appendix-agent-source-files)

---

## Per-OD Audit Results

---

### OD-001: Conversational Structure (PULSE + TIDAL)

#### FRESH-EYES FINDINGS
- **Ship verdict:** YES (with note about research enrichment cards at bottom feeling like appendix material)
- **Memorable?** YES -- density pattern visualization is distinctive, Q&A format immediately legible
- **Craftsmanship:** STRONG -- alignment precision confirmed, three-tier spacing visible, typography conviction high
- **Border commitment:** Mixed -- 4px left borders correct, but code blocks and chapter titles use 2px

#### SOUL VIOLATIONS
- **border-radius: 0** -- PASS (0 violations across all elements + pseudo-elements)
- **box-shadow: none** -- PASS (0 violations)
- **filter: drop-shadow** -- PASS (0 violations)
- **Locked palette** -- FAIL: 4 off-palette colors (#808080 browser default on tables, #FEF5F4/#F4FAF6/#FEF6F5 callout tints)

#### IDENTITY REFINEMENT
- 6 solid offsets create an implicit three-tier depth hierarchy (pattern-viz at opacity 1.0 > code blocks at 0.3 > essence at 0.15). Each individually reads as graphic, but cumulatively borders on a depth system. **Verdict: PASS with cumulative depth WARNING.**
- V2 badge competes with title due to matching red color. **Verdict: IMPROVE** -- consider secondary color or removal.

#### UI INCONSISTENCIES
- **11 element types with 2px borders** where Rule 5 requires 3px for full borders. Includes chapter titles, code blocks, enrichment cards, pattern visualization frame, conversation summary, essence callout non-left sides.
- **17 inline code elements** missing JetBrains Mono (fall back to generic `monospace`). CSS selector gap on bare `<code>` elements.
- Scroll witness sidebar isolated at viewport edge (~265px gap from content at 1440px). Should be positioned relative to content container.

#### HALF-BAKED COMPONENTS
- "Dive deeper" collapsible sections give no preview of content in collapsed state.

#### STRUCTURAL ISSUES
- **No `<main>` landmark** -- WCAG Level A failure
- **Flat heading hierarchy** -- styled divs instead of semantic h2/h3
- No `<article>` elements

#### ACCESSIBILITY ISSUES
- 5 contrast failures, 3 critical (callout labels at 1.00:1 ratio -- invisible)
- **Missing prefers-reduced-motion** despite 415 elements with `transition: all`
- Missing `:focus-visible` styles
- Missing skip-to-content link

#### DENSITY PATTERN VERIFICATION
- **PULSE visible** in first 60% of page (Q sparse -> A dense alternation). Weakens in tail (enrichment appendix creates uniformly sparse ending).
- **TIDAL width variation** confirmed (60% questions, 100% answers, 70%/80% follow-ups with indentation).
- **DD-F-006 fractal** -- all 4 scales present (page, section, component, character).

#### RESPONSIVE (768px)
- Content collapses appropriately. Scroll witness hidden. No breakage reported.

#### NUCLEAR QUESTION
- **Visual-First:** PASS -- communicates KortAI identity, does not read as generic
- **Systematic:** PASS (matches) -- sharp edges, flat design, serif hierarchy, callout DNA all present
- **Cross-validated:** ALIGNED

---

### OD-002: Narrative Arc Structure (CRESCENDO)

#### FRESH-EYES FINDINGS
- **Ship verdict:** YES
- **Memorable?** YES -- narrative framing engaging, tension building effective
- **Craftsmanship:** Good but noticeably simpler than OD-001 (no solid offsets, no scroll witness, no drop caps, no enrichment appendix)
- **3 Dialect observation:** Part of "Dialect A" (polished) alongside OD-001, but closer to the simpler end

#### SOUL VIOLATIONS
- **border-radius: 0** -- PASS (0 violations)
- **box-shadow: none** -- PASS (0 violations, purest flat design -- zero solid offsets)
- **filter: drop-shadow** -- PASS
- **Locked palette** -- FAIL: #808080 browser default on tables, callout tints likely present

#### IDENTITY REFINEMENT
- Missing v2 enrichments makes it feel like "well-organized technical narrative" rather than "distinctively KortAI." Known technical debt documented in inline header.
- No solid offsets = purest expression of Soul Piece 4 ("Shadows Lie About Depth"), but also least distinctively KortAI of the pair.

#### UI INCONSISTENCIES
- **4 act header borders at 2px** -- Rule 5 violation (should be 3px). These are the page's primary structural borders.
- **1 essence pullquote** with 2px top+bottom borders -- Rule 5 violation.
- **Header lacks inner wrapper** -- text runs to body edge instead of centering in 860px container like OD-001.
- **Tension meters at 3px height** -- nearly invisible. Visual audit and inversion test both confirm minimal impact.
- Spacing uses numbered tokens (--space-1..24) instead of semantic names (--space-within/between/chapter).

#### HALF-BAKED COMPONENTS
- None -- simpler component set is complete within its scope.

#### STRUCTURAL ISSUES
- **No `<main>` landmark** -- WCAG Level A failure (same as OD-001)
- **Flat heading hierarchy** (same as OD-001)
- **Zero ARIA attributes** -- worst semantic HTML of all 6 ODs

#### ACCESSIBILITY ISSUES
- 7 contrast failures, 2 critical
- Missing prefers-reduced-motion
- Missing :focus-visible
- Missing skip-to-content link

#### DENSITY PATTERN VERIFICATION
- **CRESCENDO clearly visible** in data: LOW (Act I, 21 elements) -> MEDIUM (Act II) -> HIGH (Act III, 118 elements) -> MEDIUM/LOW (Act IV, settling)
- Typography cascade (28/24/22/20px) correctly implements CRESCENDO -- headings shrink as density increases.
- Spacing compression (64/40/24/32px between beats) correctly mirrors narrative tension.
- **DD-F-006 fractal** -- all 4 scales present.

#### RESPONSIVE (768px)
- No breakage reported.

#### NUCLEAR QUESTION
- **Visual-First:** CONCERN -- well-made but not distinctively KortAI without v2 enrichments
- **Systematic:** MOSTLY YES but weaker signal than OD-001
- **Cross-validated:** ALIGNED (both note identity gap from missing enrichment)

---

### OD-003: Task-Based Structure (ISLANDS + BOOKENDS)

#### FRESH-EYES FINDINGS
- **Ship verdict:** CONDITIONAL NO -- two blockers: (1) worst border inconsistency of all 6 ODs, (2) monotonous island repetition
- **Memorable?** NO (functional, not memorable) -- task map at top is only distinctive element, islands blur together
- **Craftsmanship:** Weakest of all 6 ODs -- 661 computed thin-border instances, light code blocks less visually distinct
- **Rhythm:** Repetitive without surprise or variation across 6 islands

#### SOUL VIOLATIONS
- **border-radius: 0** -- PASS (0 violations across 668 elements)
- **box-shadow: none** -- PASS (0 violations)
- **filter: drop-shadow** -- PASS
- **Locked palette** -- FAIL: 3 off-palette border colors (#333333, #444444 in code blocks, #808080 on table)

#### IDENTITY REFINEMENT
- **Off-palette color #B8A080** (--accent-tan) introduced as custom variable. Not in locked palette. Classified as raw directive (unrefined research application). **Severity: HIGH.**
- Light code blocks (cream-on-cream) less visually distinct than dark theme in OD-001/002/005. Fresh-eyes notes they feel less "real."

#### UI INCONSISTENCIES
- **386 thin borders** (computed) -- worst of all 6 ODs. Task islands use 4px left + 2px top/right/bottom. Step numbers use 2px. Code blocks use 1px. Table cells use 1px.
- **Header metadata layout** differs from OD-001/002 (horizontal inline with dots vs. stacked labels).

#### HALF-BAKED COMPONENTS
- All 6 islands structurally complete (prereqs, steps, checkpoint, troubleshooting). The issue is repetitive sameness, not incompleteness.

#### STRUCTURAL ISSUES
- **Best semantic HTML** of all 6 ODs -- has `<main>`, `<article>` (6), heading hierarchy (10 levels), aria-labelledby (8)
- 6 `<details>` elements for keyboard-native collapsibles

#### ACCESSIBILITY ISSUES
- 6 contrast failures, 0 critical
- :focus-visible present (only OD with it alongside OD-004)
- Missing skip-to-content link

#### DENSITY PATTERN VERIFICATION
- **ISLANDS confirmed** -- 6 discrete task islands with 80px+ gaps (one gap 402px due to intentional essence blockquote caesura at midpoint)
- **BOOKENDS confirmed** -- dense front bookend (orientation, task map, metadata, pipeline diagram) + dense back bookend (verification, pipeline diagram repeated, checklist)
- **DD-F-006 fractal** -- all 4 scales present

#### COMPARATIVE DRIFT
- Pattern fidelity to DD-003 (ISLANDS): EVOLVED (maintained isolation, added task structure)

#### RESPONSIVE (768px)
- No breakage reported.

#### NUCLEAR QUESTION
- **Visual-First:** YES (with caveats about 2px borders being weakest signal)
- **Fresh-Eyes:** CONDITIONAL NO (border inconsistency + monotony)
- **Cross-validated:** CONTRADICTION -- Visual auditor passes, fresh-eyes fails. **Resolution (Phase C):** Fresh-eyes is correct that the border inconsistency and monotony are shippability concerns. The visual auditor focused on soul compliance (which passes) while fresh-eyes focused on craft quality (which doesn't).

---

### OD-004: Confidence-Based Structure (GEOLOGICAL + CRESCENDO)

#### FRESH-EYES FINDINGS
- **Ship verdict:** NO -- full-viewport dead zone at mid-scroll is a blocker
- **Memorable?** NO (due to void destroying scroll experience) -- geological metaphor is strong but broken by emptiness
- **Craftsmanship:** Good within strata sections (spacing within strata, stratum transitions with progress indicators), but catastrophically inconsistent at page level (massive void)

#### SOUL VIOLATIONS
- **border-radius: 0** -- PASS (0 violations)
- **box-shadow: none** -- PASS (0 violations)
- **filter: drop-shadow** -- PASS
- **Locked palette** -- PASS (cleanest of all 6 ODs -- 13 unique colors, all on-palette)

#### IDENTITY REFINEMENT FAILURES
- **ESSENCE CALLOUT FONT: FAIL** -- Both Essence callouts use Inter (body font) with normal font-style instead of Instrument Serif italic. This is the **only explicit FAIL verdict across the entire audit**, confirmed by Visual-First-B, Systematic-B, and Cross-OD Consistency agents. Directly violates Typography Anti-Pattern: "Sans-Serif for Essence Body: Loses reverent, archival quality."

#### UI INCONSISTENCIES
- **76 thin border elements** (2px frame borders on sections, same pattern as OD-003)
- **Full-viewport dead zone** at ~6881px scroll position (F-E-003). Entire screen of blank warm cream. Fresh-eyes says "a page that forgot to have content." Could be a CSS margin/padding error or intentional geological spacing taken too far.
- **h3 font sizes not on locked type scale** -- 20px, 19.2px, 18px, 17px (progressive reduction across strata is a creative choice but 19.2px and 17px are arbitrary intermediates)
- **Essence callout border color** uses purple (#7C3AED) while OD-003 uses red (#E83025) -- cross-OD inconsistency

#### HALF-BAKED COMPONENTS
- Tab controls ("Facts Only" / "Full Analysis" / "Everything") have proper ARIA `role="tab"` but **missing aria-controls, tabpanel, tabindex, aria-selected management**. Need completion to be functional.

#### STRUCTURAL ISSUES
- Has `<main>` landmark, good heading hierarchy (18 levels), 11 `<article>` elements
- ARIA: 15 aria-label attributes, 6 ARIA sections
- 1 `<details>` element

#### ACCESSIBILITY ISSUES
- 5 contrast failures, 0 critical
- :focus-visible present
- Missing skip-to-content link

#### DENSITY PATTERN VERIFICATION
- **GEOLOGICAL + CRESCENDO confirmed** -- Inverse density-confidence correlation is the defining achievement. Article count decreases (4/3/2/2) while article length increases dramatically. Both visual and cognitive density increase with depth.
- **DD-F-006 fractal** -- all 4 scales present (character-level: confident assertions sparse, hedged language dense)

#### COMPARATIVE DRIFT
- Pattern fidelity to DD-004 (GEOLOGICAL): CREATIVE REINTERPRETATION -- geological metaphor mapped to epistemic confidence levels

#### RESPONSIVE (768px)
- No breakage reported.

#### NUCLEAR QUESTION
- **Visual-First:** YES strongly -- "arguably the STRONGEST identity carrier"
- **Fresh-Eyes:** NO (dead zone + unshippable void)
- **Cross-validated:** CONTRADICTION -- Visual auditor focused on identity strength (correct), fresh-eyes focused on craft (correct). **Resolution (Phase C):** Both are partially right. OD-004 has the strongest conceptual identity but needs two fixes (dead zone removal, Essence font) to be shippable.

---

### OD-005: Spatial Hub-Spoke Structure (WAVE + ISLANDS)

#### FRESH-EYES FINDINGS
- **Ship verdict:** CONDITIONAL YES -- 960px width deviation should be corrected
- **Memorable?** YES -- territory map metaphor is clear, hub-spoke navigation intuitive
- **Craftsmanship:** Strong -- territory cards well-aligned in 3x2 grid, spoke content consistent

#### SOUL VIOLATIONS
- **border-radius: 0** -- PASS (0 violations across 668 elements, JavaScript audit confirmed)
- **box-shadow: none** -- PASS (explicitly set on solid-offset elements)
- **filter: drop-shadow** -- PASS
- **Locked palette** -- PASS (document layer clean; code blocks use dark-theme exception)

#### IDENTITY REFINEMENT
- Solid offset pseudo-elements on territory tiles read as flat graphic blocks (not depth illusion). Approved per EXT-CREATIVE-001. **PASS.**
- Hover transform on territory tiles (translate -4px) creates perceptual shift. Different from vertical lift anti-pattern (lateral merge with offset). **Borderline PASS** but flagged by research refinement as HIGH severity spirit violation.

#### UI INCONSISTENCIES
- **Container width 960px** vs spec-required 860px. Defensible for 2-column spoke layout but undocumented deviation. **IMPROVE.**
- **17 thin border instances** -- all in appropriate non-accent contexts (tables, code blocks, solid offsets, badges)
- Badge border at 1px -- pragmatic necessity for 10px text micro-element
- Hypothesis font at 15px -- not in locked type scale (between 14px and 16px)

#### HALF-BAKED COMPONENTS
- None -- all territory spokes complete with breadcrumb, content, sidebar, checkpoint, "Return to Map"

#### STRUCTURAL ISSUES
- **Best ARIA of all 6 ODs** -- 20 aria-label attributes, 8 ARIA sections, `<main>`, `<nav>` (6), `<footer>`, `<aside>` (6)
- 26 skip links, 33 focusable elements

#### ACCESSIBILITY ISSUES
- 8 contrast failures (most of all 6 ODs), 2 critical
- prefers-reduced-motion: YES (present)
- :focus-visible: MISSING
- Skip link present but with low contrast

#### DENSITY PATTERN VERIFICATION
- **WAVE + ISLANDS confirmed** -- sparse hub map -> dense spokes -> sparse return links, with isolation gaps between territories
- **DD-F-006 fractal** -- all 4 scales verified (page: WAVE, section: intro-content-exit, component: label-body, character: comments-code)

#### COMPARATIVE DRIFT
- Pattern fidelity to DD-005 (TIDAL) + DD-003 (ISLANDS): EVOLVED -- combined both patterns into hub-spoke

#### RESPONSIVE (768px)
- Grid collapses to single column, sidebar hidden, code blocks gain horizontal scroll. No breakage.

#### NUCLEAR QUESTION
- **Visual-First:** PASS -- territory tile solid offsets, WAVE visualization, spoke isolation, cartographic metaphor all distinctly KortAI
- **Fresh-Eyes:** CONDITIONAL YES (needs width fix)
- **Cross-validated:** ALIGNED

---

### OD-006: Creative/Emergent Synthesis (ALL PATTERNS, FRACTAL primary)

#### FRESH-EYES FINDINGS
- **Ship verdict:** YES -- crown jewel, most memorable of all 6
- **Memorable?** MOST MEMORABLE -- bold opening, clear structure, builds to climax, satisfying conclusion
- **Craftsmanship:** STRONGEST -- best rhythm variety, strongest typography conviction, most editorial whitespace

#### SOUL VIOLATIONS
- **border-radius: 0** -- PASS (explicitly set on 10+ elements defensively -- "aggressively defensive")
- **box-shadow: none** -- PASS (explicitly set on solid-offset and callout)
- **filter: drop-shadow** -- PASS (0 instances)
- **Locked palette** -- PASS (including code blocks which use light theme with palette colors -- ZERO off-palette colors)

#### IDENTITY REFINEMENT
- All 7+ EXT-CREATIVE techniques confirmed present and functional (Solid Offset, Typographic Cascade, Scroll Witness, Arriving Wisdom animations, Editorial Drop Caps, Semantic Bridge, Dual Lens, Collapsing Header, Visual Index)
- Essence callout body correctly uses Instrument Serif italic with `font-family: var(--font-display)` and `font-style: italic`
- "Organization IS Density" thesis demonstrated visually across 6 sections

#### UI INCONSISTENCIES
- **48px page title** vs locked 40px -- defensible as EXT-CREATIVE-002 cascade for synthesis crown jewel document. **IMPROVE: document as sanctioned override.**
- **Scroll Witness sidebar 2px right border** -- could be 3px for structural border consistency. Low priority.
- **Different callout type names** (insight/discovery/warning/note vs info/tip/gotcha/checkpoint) -- structural DNA preserved, semantic labels context-appropriate. **ACCEPTED.**
- **Light code block theme** (vs dark in other ODs) -- more palette-compliant, defensible choice. Cross-OD consistency question.
- Sticky section headers consume ~12% viewport at 768px.

#### HALF-BAKED COMPONENTS
- None -- all components complete and functional

#### STRUCTURAL ISSUES
- Has `<main>`, `<nav>`, good heading hierarchy (12 levels), 6 ARIA sections
- 1 `<details>` element, 7 skip links, 9 focusable elements

#### ACCESSIBILITY ISSUES
- 4 contrast failures (fewest of all 6 ODs), 1 critical (certainty badge icon at 1.00:1)
- prefers-reduced-motion: YES (present)
- :focus-visible: MISSING
- Missing skip-to-content link

#### DENSITY PATTERN VERIFICATION
- **ALL density patterns demonstrated** across 6 sections -- each section's density emerges from its organizational pattern (PULSE in conversational, CRESCENDO in narrative, ISLANDS in task-based, GEOLOGICAL in confidence, WAVE in spatial)
- **DD-F-006 fractal** -- PASS at all 4 scales, MOST fractal of all ODs (demonstrated across 6 organizational modes)
- **"Organization IS Density" thesis: CONFIRMED**

#### COMPARATIVE DRIFT
- Pattern fidelity to ALL DDs: DEFINITIVE -- the synthesis that proves all patterns converge

#### RESPONSIVE (768px)
- Scroll Witness sidebar hidden at 1024px. Grid collapses to single column. Section headers remain sticky.

#### NUCLEAR QUESTION
- **Visual-First:** PASS -- "cannot exist in Bootstrap/Material project without modification"
- **Fresh-Eyes:** YES (most memorable)
- **Systematic:** YES -- strongest identity expression
- **Cross-validated:** UNANIMOUS PASS

---

## Cross-OD Systemic Issues

These issues appear across multiple or all ODs and require system-level decisions rather than per-OD fixes.

### 1. Thin Borders -- SYSTEMIC (All 6 ODs)

**Status:** Confirmed by 10+ agents. The #1 systemic finding.

| OD | CSS Declarations (1-2px) | Computed Instances (1-2px) |
|----|--------------------------|---------------------------|
| OD-001 | 16 | 101 |
| OD-002 | 9 | 46 |
| OD-003 | 25 | 661 |
| OD-004 | 19 | 221 |
| OD-005 | 17 | 386 |
| OD-006 | 22 | 204 |
| **TOTAL** | **108** | **1,619** |

**Rule 5 says:** "Borders: 4px left accent OR 3px full -- never 1-2px ('signals uncertainty')."

**The audit distinguishes three border contexts:**
1. **Accent/structural borders** (callout left, section frames, heading underlines) -- these MUST be 3-4px. Currently many are 2px. **FIX REQUIRED.**
2. **Table row separators, connector lines** -- these are data-density elements where 4px would create visual noise. **ACCEPTABLE as-is** per anti-pattern registry guidance.
3. **Interactive micro-elements** (badges, toggle buttons, copy buttons) -- pragmatic necessity at small scales. **ACCEPTABLE as-is.**

**Recommended fix:** Upgrade all Category 1 borders (structural frames, heading underlines, essence pullquotes, section dividers) from 2px to 3px. Leave Category 2 and 3 borders unchanged.

### 2. Contrast/Accessibility -- SYSTEMIC (All 6 ODs)

**Total contrast failures:** 35 across all 6 ODs (5+7+6+5+8+4)

**Breakdown:**
- **Callout labels** (accent color on white/cream at small size): Most common failure. Present in ALL 6 ODs.
- **Exploration metadata** (secondary color at small size): Present in 5 of 6 ODs.
- **Certainty badge icons** (near-invisible in OD-006): 1.00:1 ratio.

**Other accessibility gaps:**
- `prefers-reduced-motion`: Missing in OD-001, OD-002, OD-003
- `:focus-visible`: Missing in OD-001, OD-002, OD-005, OD-006
- Skip-to-content link: Missing in ALL 6 ODs
- `<main>` landmark: Missing in OD-001, OD-002
- Heading hierarchy: Flat in OD-001, OD-002

### 3. Off-Palette Colors -- Partial (OD-001, OD-002, OD-003)

| Color | Source | ODs Affected | Fix |
|-------|--------|--------------|-----|
| #808080 | Browser default table border | OD-001, OD-002, OD-003 | Add `border-color: var(--color-border)` to TABLE |
| #333333, #444444 | Code block internal borders | OD-003 | Use --color-text or --color-text-secondary |
| #B8A080 | Custom --accent-tan | OD-003 | Remove; use --color-border instead |
| #FEF5F4, #F4FAF6, #FEF6F5 | Callout background tints | OD-001, OD-003, OD-004 | Formalize as --callout-*-bg in palette OR use rgba() notation |
| VS Code syntax colors | Code block highlights | OD-001-005 | Document as "dark code zone" exception |

### 4. Inline Code Font Fallback -- SYSTEMIC (All 6 ODs)

Bare `<code>` elements inside paragraphs, callouts, and prose fall back to generic `monospace` instead of JetBrains Mono. The CSS targets `.code-block__code--*` classes but not bare `<code>`.

**Fix:** Add `code { font-family: var(--font-mono); }` to global styles.

### 5. Header Meta Layout Inconsistency (3 formats across 6 ODs)

- **Format A** (OD-001, OD-002): Stacked vertical labels
- **Format B** (OD-003, OD-005): Horizontal inline with dots
- **Format C** (OD-004): Vertical stacked with different field names
- **Format D** (OD-006): Minimal (no metadata bar)

**Recommendation:** Standardize to one format for OD-001 through OD-005. OD-006 can remain unique as the synthesis document.

### 6. 3 Quality Dialects

Fresh-eyes identified three quality tiers:
- **Dialect A** (OD-001, OD-002): Dark code blocks, v2 enrichments (OD-001), scroll witness (OD-001). Most polished.
- **Dialect B** (OD-003, OD-004, OD-005): Lighter code blocks, more thin borders, simpler headers. Functional but less refined.
- **Dialect C** (OD-006): Unique editorial synthesis. Deliberately different.

The gap between Dialect A and B is noticeable but does not break system coherence. The shared foundation (palette, typography trio, callout DNA, sharp edges, flat design) holds across all three.

---

## Adversarial Debate Outcomes

### Debates Conducted: 40+ across all agents

### Key Debate Summary

| Topic | Verdict | Confidence | Agents |
|-------|---------|------------|--------|
| Solid offset pseudo-elements (EXT-CREATIVE-001) | VALIDATED (case-by-case) | HIGH | Visual-001, Visual-005, Visual-006, Research-Ref |
| OD-001 semi-transparent offsets (opacity 0.3) | NEEDS REFINEMENT | MEDIUM | Research-Ref, Systematic-001 |
| OD-005 hover transform (-4px) | BORDERLINE | MEDIUM | Visual-005, Research-Ref, Systematic-005 |
| 2px structural borders | IMPROVE to 3px | HIGH | All 10 audit agents |
| 1px table separators | ACCEPTED | HIGH | Visual-003, Visual-005, Systematic-003 |
| 1px badge/micro-element borders | ACCEPTED | HIGH | Visual-005, Visual-006 |
| Code block dark-theme exception | ACCEPTED | HIGH | Visual-005, Systematic-003, Research-Ref |
| OD-005 960px container | IMPROVE to 860px | MEDIUM | Visual-005, Fresh-Eyes, Systematic-005, Consistency |
| OD-006 48px title | ACCEPTED (document override) | MEDIUM | Visual-006, Systematic-006 |
| OD-006 different callout names | ACCEPTED | HIGH | Visual-006, Systematic-006 |
| OD-004 Essence font Inter | FAIL (must fix) | UNANIMOUS | Visual-004, Systematic-004, Consistency |
| Inline code 1px borders | VALIDATED (typographic marker) | HIGH | Visual-004, Systematic-003 |
| 402px gap in OD-003 | VALIDATED (intentional caesura) | HIGH | Visual-003, Systematic-003 |
| Narrative arc vs random access | VALIDATED (correct hypothesis test) | HIGH | Visual-002, Systematic-002 |
| Confidence stratification usefulness | VALIDATED (pedagogy, not decoration) | HIGH | Systematic-004 |

---

## Nuclear Question Answers

> "If this OD exploration were the ONLY page a user ever saw from KortAI -- would they understand the identity?"

### Cross-Validated Results (Visual-First + Systematic + Fresh-Eyes)

| OD | Visual-First | Systematic | Fresh-Eyes Ship? | Final Verdict |
|----|-------------|------------|------------------|---------------|
| OD-001 | PASS | PASS | YES | **PASS** |
| OD-002 | CONCERN | MOSTLY YES | YES | **CONCERN** (identity signal weaker without v2 enrichment) |
| OD-003 | YES | YES | CONDITIONAL NO | **PARTIAL PASS** (soul yes, craft no) |
| OD-004 | YES (strongly) | YES (strongly) | NO | **PARTIAL PASS** (strongest concept, dead zone + font fix needed) |
| OD-005 | PASS | YES | CONDITIONAL YES | **PASS** (width fix needed) |
| OD-006 | PASS | YES | YES (most) | **STRONG PASS** (crown jewel) |

**None of the 6 ODs could exist in a Bootstrap/Tailwind/Material project without modification.** The soul test passes across all 6.

---

## Recommended Fix Order

### CRITICAL (Must fix before any production use) -- 3 items

1. **OD-004: Essence callout font** -- Change `.callout--essence .callout__body` from `font-family: Inter; font-style: normal` to `font-family: "Instrument Serif"; font-style: italic`. The ONLY explicit FAIL across the entire audit. Confirmed by 3 independent agents.

2. **OD-001 + OD-002: Add `<main>` landmark** -- Minimum viable semantic HTML. Currently the only ODs without it. WCAG 2.4.1 Level A.

3. **OD-001 + OD-002: Add heading hierarchy** -- Convert styled chapter/question divs to semantic `<h2>`/`<h3>` elements.

### HIGH (Should fix to meet quality bar) -- 5 items

4. **ALL 6: Fix callout label contrast** -- Either use `--color-text` (#1A1A1A) for labels OR increase to 14px bold to meet WCAG AA. Affects all callout types across all ODs.

5. **ALL 6: Upgrade 2px structural borders to 3px** -- Affects chapter titles, act headers, section frames (non-left sides), code block frames, enrichment cards, essence pullquote top/bottom, section dividers. System-level CSS change.

6. **OD-004: Complete tab ARIA** -- Add `aria-controls`, `tabpanel`, `tabindex`, `aria-selected` management to the 3 confidence tabs.

7. **OD-004: Remove dead zone** -- Reduce inter-strata spacing at ~6881px scroll position. The full-viewport void at mid-page makes the page appear broken.

8. **OD-003: Remove `--accent-tan: #B8A080`** -- Replace with nearest palette-compliant color (`--color-border: #E0D5C5`) or remove custom variable entirely.

### MEDIUM (Should fix for consistency) -- 5 items

9. **OD-005: Reduce max-width to 860px** -- Match spec and all other ODs. Or formally document 960px as a sanctioned exception for spatial layouts.

10. **OD-001, OD-002, OD-003: Add prefers-reduced-motion** -- OD-001 has 415 elements with `transition: all`. OD-004, OD-005, OD-006 already have it.

11. **OD-001, OD-002, OD-005, OD-006: Add :focus-visible** -- 3px solid red outline on focus. OD-003 and OD-004 already have it.

12. **ALL 6: Add skip-to-content link** -- WCAG 2.4.1 Level A. No OD currently has one.

13. **ALL 6: Fix inline `<code>` font** -- Add `code { font-family: var(--font-mono); }` to global styles. Currently 17+ inline code elements fall back to generic monospace.

### LOW (Polish items) -- 4 items

14. **ALL 6: Add favicon** -- Currently missing (CA-001).
15. **ALL 6: Add ::selection styling** -- Custom selection color matching palette.
16. **ALL 6: Add @media print styles** -- Basic print stylesheet.
17. **Standardize header meta layout** -- Pick one format across OD-001 through OD-005.

---

## Per-OD Quality Ranking

| Rank | OD | Soul | Craft | Accessibility | Content | Identity | Overall |
|------|-----|------|-------|---------------|---------|----------|---------|
| 1 | **OD-006** | 5/5 | HIGHEST | 4 failures | PASS | STRONGEST | **STRONGEST** |
| 2 | **OD-005** | 5/5 | HIGH | 8 failures | PASS | STRONG | **STRONG** (1 fix: width) |
| 3 | **OD-001** | 5/5 | HIGH | 5 failures | PASS | STRONG | **STRONG** (needs semantic HTML) |
| 4 | **OD-004** | 4/5 (Essence font) | HIGH | 5 failures | PASS | STRONGEST concept | **STRONG** (2 critical fixes) |
| 5 | **OD-002** | 5/5 | MEDIUM | 7 failures | PASS | WEAK | **NEEDS ENRICHMENT** |
| 6 | **OD-003** | 5/5 | LOW | 6 failures | PASS | ADEQUATE | **NEEDS MOST WORK** |

---

## Research Refinement Gate Results

**55 EXT-* citations checked against the 5-question soul test:**
- **46 PASSED** refinement (correctly filtered through soul)
- **5 NEED REFINEMENT** (EXT-CREATIVE-001 across 5 ODs, EXT-CREATIVE-002 across 3 ODs)
- **0 REJECTED**
- **7 raw directive applications** found (3 type scale deviations, 1 off-palette color, 3 off-palette backgrounds)
- **7 spirit-vs-letter violations** (2 HIGH: semi-transparent offsets + hover transforms, 3 MEDIUM, 1 LOW, 1 universal/accepted)

The vast majority of research (84%) was properly refined. The remaining issues are concentrated in EXT-CREATIVE-001 (solid offsets) and EXT-CREATIVE-002 (type cascade) -- the two most visually complex techniques.

---

## Comparative Reference Results

**DD ancestor fidelity: ZERO token drift.** All 6 DD density patterns faithfully inherited and evolved in ODs:

| DD Pattern | OD Implementation | Fidelity |
|-----------|-------------------|----------|
| DD-001 PULSE | OD-001 Q&A alternation | EVOLVED |
| DD-002 CRESCENDO | OD-002 narrative arc | FAITHFUL |
| DD-003 ISLANDS | OD-003 task clusters | EVOLVED |
| DD-004 GEOLOGICAL | OD-004 confidence strata | CREATIVE REINTERPRETATION |
| DD-005 TIDAL | OD-001 width + OD-005 hub-spoke | EVOLVED |
| DD-006 FRACTAL | OD-006 meta-synthesis | DEFINITIVE |

**No DD learning was lost.** The OD stage is a genuine evolution of the DD stage, not a regression.

---

## Content Authenticity Results

- **Zero placeholder content** across all 6 ODs
- **Zero lorem ipsum**
- **5 example.com instances** (OD-003: 2, OD-004: 3) -- all legitimate API documentation conventions
- **No contradictory information** between ODs
- **The Unhurried Editor voice** maintained across all 6 ODs
- **Each OD uses genuinely different technical content** appropriate to its organizational pattern

---

## Appendix: Agent Source Files

All raw audit data is in `_od-audit-scratchpad/` (22 files, ~500KB):

| File | Agent | Content |
|------|-------|---------|
| identity-brief.md | Traverser | 11 sections, 55 EXT-* citations, 6 constraint tables |
| visual-audit-001.md | Visual-First-A | OD-001 visual sweep, 7 debates, PASS |
| visual-audit-002.md | Visual-First-A | OD-002 visual sweep, 6 debates, CONCERN |
| visual-audit-003.md | Visual-First-B | OD-003 quantitative + visual, 4 debates, PASS |
| visual-audit-004.md | Visual-First-B | OD-004 quantitative + visual, 5 debates, PASS (1 MAJOR) |
| visual-audit-005.md | Visual-First-C | OD-005 visual sweep, 10 proportional checks, PASS |
| visual-audit-006.md | Visual-First-C | OD-006 visual sweep, 10 proportional checks, PASS |
| fresh-eyes.md | Fresh-Eyes | All 6 ODs, 5 cross-OD findings, 3 dialects identified |
| systematic-audit-001.md | Systematic-A | OD-001 full 4A-4Q programmatic, 5 issue categories |
| systematic-audit-002.md | Systematic-A | OD-002 full 4A-4Q programmatic, 5 issue categories |
| systematic-audit-003.md | Systematic-B | OD-003 full 4A-4Q programmatic, 4 minor improvements |
| systematic-audit-004.md | Systematic-B | OD-004 full 4A-4Q programmatic, 1 MAJOR + 3 minor |
| systematic-audit-005.md | Systematic-C | OD-005 full programmatic, 0 Critical, 1 High, 3 Medium |
| systematic-audit-006.md | Systematic-C | OD-006 full programmatic, 0 Critical, 1 High, 2 Medium |
| structural-integrity.md | Structural | All 6 semantic HTML + ARIA audit |
| contrast-accessibility.md | Contrast | All 6 WCAG contrast + accessibility audit |
| content-authenticity.md | Content | All 6 content verification, 0 placeholders |
| comparative-reference.md | Comparative | All 6 vs DD ancestors, 0 token drift |
| research-refinement.md | Research-Ref | 55 EXT-* citations, 7 spirit violations |
| cross-od-consistency.md | Consistency | Phase C synthesis, 17 fix recommendations |
| weaver-tracker.md | Weaver | 18 cross-references, agent completion status |
| AUDIT-STATE.md | Weaver | Phase tracking + compaction recovery |

---

## Audit Metadata

- **Total DOM elements audited:** 3,479 (525+415+668+367+1018+486)
- **Total page height audited:** ~81,000px across all 6 ODs
- **Adversarial debates conducted:** 40+
- **Cross-references tracked:** 18
- **Contradictions identified and resolved:** 2 (OD-003, OD-004 nuclear question disagreements)
- **Phases completed:** 5 (A: Identity, Wave 1: Visual, Wave 2: Programmatic, Parallel: Research, C: Consistency, D: Synthesis)
- **Total scratchpad files produced:** 22
- **Soul violations found:** 0 (border-radius, box-shadow, drop-shadow all clean across all 6 ODs)
- **Explicit FAIL verdicts:** 1 (OD-004 Essence callout font)
