# OD Granular Audit — Research Refinement Report

**Agent:** Research-Ref
**Generated:** 2026-02-07
**Method:** EXT-* citation traversal across all 6 OD HTML files, cross-referenced against soul identity, spirit-vs-letter table, and refinement classification lists

---

## PART 1: EXT-* Citation Soul Test Results

For each EXT-* finding, the 5-question soul test:
1. Creates perceptual depth? (Soul Piece 4)
2. Introduces visual complexity = "decoration"?
3. Dilutes limited palette? (Rule 3)
4. Breaks component family DNA? (Soul Piece 3)
5. Passes Bootstrap/Tailwind test? (Could exist in Bootstrap without modification = FAIL)

---

### OD-001 Citations

#### EXT-CONV-001 (Socratic Progressive Narrowing)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (unique conversational narrowing)
- **Pre-classified:** Not in either list (structural/content pattern)
- **Spirit Check:** Pure content architecture — no CSS implications
- **Verdict: PASSED** — Content-level pattern, soul-neutral

#### EXT-CONV-002 (Value Density Front-Loading)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (editorial technique)
- **Pre-classified:** Not in either list (content pattern)
- **Spirit Check:** Writing guidance, not visual
- **Verdict: PASSED** — Content-level pattern, soul-neutral

#### EXT-CONV-003 (Three-Level Gestalt Spacing)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (spacing ratios are identity-specific)
- **Pre-classified:** PASSED (pure spacing, no visual complexity)
- **Spirit Check:** 8px/32px/64px spacing creates the soul's breathing rhythm
- **Verdict: PASSED** — Spacing architecture strengthens soul

#### EXT-CONV-004 (Background Color Differentiation)
- **Soul Test:** 1:No 2:No 3:ASSESS 4:No 5:No (Q/A zone backgrounds)
- **Pre-classified:** PASSED — IF within locked palette
- **Implementation in OD-001:** `--color-question-bg: #FEF9F5` (= `--color-background`), `--color-answer-bg: #FFFFFF` (= white, in palette), `--color-chapter-bg: #FAF5ED` (= `--color-chapter-bg`, in palette)
- **Spirit Check:** All three backgrounds are in the locked palette table. No palette dilution.
- **Verdict: PASSED** — Applied within locked palette

#### EXT-CONV-005 (Responsive TIDAL Choreography)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (responsive width variation)
- **Pre-classified:** Not in either list (layout pattern)
- **Spirit Check:** Desktop Q at 60%, tablet at 75%, mobile at 100% — progressive width collapse. No soul implications.
- **Verdict: PASSED** — Layout-level pattern, soul-neutral

#### EXT-CREATIVE-001 (THE SOLID OFFSET)
- **Soul Test:** 1:YES — creates perceptual depth 2:ASSESS 3:No 4:No 5:No (not in any UI kit)
- **Pre-classified:** NEEDS REFINEMENT — creates fake depth. Strip or convert to flat border.
- **Implementation in OD-001:**
  - `.pattern-visualization::after` — 4px/4px solid #1A1A1A pseudo-element behind the box (line 458-467)
  - `.callout--essence::after` — 3px/3px purple opacity:0.15 pseudo-element (line 779-789)
  - `.code-block::after` — 3px/3px red opacity:0.3 pseudo-element (line 838-848)
  - `.conversation-summary::after` — 4px/4px solid #1A1A1A pseudo-element (line 1098-1107)
  - `.essence-pullquote::after` — bottom bar 3px purple opacity:0.3 (line 1037-1046) — NOTE: This is NOT a solid offset; it's a decorative bottom bar. Different technique.
- **Spirit Check per Spirit-vs-Letter table:** "Solid offset pseudo-element: `box-shadow: none` PASSES | Creates perceptual depth — ASSESS case by case"
- **Assessment:**
  - The pattern-visualization and conversation-summary offsets use OPAQUE #1A1A1A which creates a clear 3D illusion of one rectangle sitting on top of another. This is **perceptual depth** — squint test fails (elements appear to float).
  - The callout--essence and code-block offsets use LOW OPACITY (0.15 and 0.3) which creates a colored shadow effect. This is a **spirit violation** — it's literally a colored shadow rendered via pseudo-element instead of box-shadow.
  - The identity brief (Section 8, item 4 note) acknowledges this was "approved as a creative enrichment" but the audit instruction says to assess SPIRIT.
- **Verdict: NEEDS REFINEMENT**
  - Opaque solid offsets (pattern-visualization, conversation-summary): These create neobrutalist graphic blocks. The depth is geometric, not atmospheric. **BORDERLINE** — could be argued as flat graphic element vs. floating illusion. Mark as needs review.
  - Semi-transparent offsets (essence callout, code block): These create colored glows/shadows. **SPIRIT FAILS** — equivalent to `box-shadow` with color. Recommend: change from `opacity: 0.15/0.3` to `opacity: 1` with a palette color, or remove entirely.
  - Bottom bar (essence-pullquote): This is not really an offset — it's a decorative bar. **PASSES** as border-like element.

#### EXT-CREATIVE-002 (THE TYPOGRAPHIC CASCADE)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (specific scale values)
- **Pre-classified:** NEEDS REFINEMENT — OK IF scale matches locked values, not research's 1.5x
- **Implementation in OD-001:** `--type-page: 2.5rem (40px)`, `--type-section: 1.625rem (26px)`, `--type-question: 1.375rem (22px)`, `--type-body: 1rem (16px)`, `--type-code: 0.875rem (14px)`, `--type-meta: 0.625rem (10px)`
- **Cross-ref with locked type scale:** The locked scale is: xs:12px, sm:14px, base:16px, lg:18px, h4:20px, h3:24px, h2:32px, h1:40px, display:48px
  - `--type-page: 40px` = `--text-h1` MATCHES
  - `--type-section: 26px` — NOT in locked scale (closest: h3=24px, h2=32px). This is a **deviation**.
  - `--type-question: 22px` — NOT in locked scale (closest: h4=20px, h3=24px). This is a **deviation**.
  - `--type-body: 16px` = `--text-base` MATCHES
  - `--type-code: 14px` = `--text-sm` MATCHES
  - `--type-meta: 10px` — NOT in locked scale (closest: xs=12px). This is a **deviation**.
- **Spirit Check:** The cascade uses its own ratio (roughly 1.5x) rather than the locked type scale values. Three of six values deviate from locked tokens.
- **Verdict: NEEDS REFINEMENT** — 3 values (section:26px, question:22px, meta:10px) are not in the locked type scale. The research's 1.5x ratio was applied as a RAW DIRECTIVE rather than being refined through the locked scale. Recommended fix: Map to nearest locked values (section→24px, question→20px, meta→12px) or document why these specific intermediate values are necessary.

#### EXT-CREATIVE-003 (THE SCROLL WITNESS)
- **Soul Test:** 1:No 2:ASSESS 3:No 4:No 5:No (custom progress sidebar)
- **Pre-classified:** NEEDS REFINEMENT — OK if minimally styled, square markers, no rounded
- **Implementation in OD-001:** Fixed sidebar with 3px-wide vertical markers (`.scroll-witness__marker: width:3px, height:24px`), fill bars, and mono labels.
- **Spirit Check:** Markers are rectangular (3x24px). No border-radius. Labels are monospace uppercase. Colors are from palette (border color fills, primary on progress).
- **Verdict: PASSED** — Minimally styled, square markers, no decoration. Applied as REFINED.

#### EXT-CREATIVE-004 (THE ARRIVING WISDOM)
- **Soul Test:** 1:No 2:ASSESS 3:No 4:No 5:No (scroll-triggered animations)
- **Pre-classified:** NEEDS REFINEMENT — animation OK if subtle (no dramatic entrance)
- **Implementation in OD-001:** `opacity: 0 → 1`, `translateY(16px) → 0`, duration 0.5s ease-out, scroll-driven with `animation-timeline: view()`, `animation-range: entry 10% entry 40%`. Respects `prefers-reduced-motion`. Falls back to static for non-Chromium.
- **Spirit Check:** 16px vertical shift is subtle. 0.5s duration is not dramatic. `prefers-reduced-motion` respected. Graceful degradation present.
- **Verdict: PASSED** — Subtle, accessible, progressive enhancement. Applied as REFINED.

#### EXT-CREATIVE-005 (THE EDITORIAL DROP)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (drop caps are editorial, not generic)
- **Pre-classified:** NEEDS REFINEMENT — drop caps in Instrument Serif italic = soul-aligned
- **Implementation in OD-001:** `.answer__lead--dropcap::first-letter` — `font-family: var(--font-display)` (Instrument Serif), `font-size: 3.5em`, `color: var(--color-primary)`, float left.
- **Spirit Check:** Uses Instrument Serif (display font). Color is locked primary. No border-radius, no shadows. Classic editorial technique.
- **Verdict: PASSED** — Soul-aligned implementation. Instrument Serif + primary color = editorial authority.

#### EXT-DENSITY-001 (Gestalt Pure Distance Law)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (spacing ratios)
- **Pre-classified:** PASSED (grouping ratios, no visual changes)
- **Spirit Check:** Defines that grouping fails when gap > 1.5x the within-group spacing. Enforced via the 8px/32px/64px three-level system.
- **Verdict: PASSED** — Information architecture, soul-neutral

#### EXT-DENSITY-002 (NNGroup Progressive Disclosure)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (disclosure levels)
- **Pre-classified:** PASSED (information architecture only)
- **Spirit Check:** Max 2 levels of disclosure. Implemented via collapsible `<details>` callouts.
- **Verdict: PASSED** — Content architecture, soul-neutral

#### EXT-DENSITY-003 (Twilio 20-line rule)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (code block length)
- **Pre-classified:** Not in either list (content guideline)
- **Spirit Check:** Initial code blocks kept under 20 lines. Content constraint only.
- **Verdict: PASSED** — Content-level guideline, soul-neutral

---

### OD-002 Citations

OD-002 was built **without external research enrichment** — only R1 findings and DD sources. No EXT-* citations to audit.

**OD-002 Verdict: N/A — No EXT-* citations present. All research is internal (R1 findings).**

However, notable: OD-002 uses `rgba()` backgrounds for callouts (lines 469-500) — these are standard callout tints seen across all ODs and are within the locked accent palette at very low opacity (0.04-0.05). These are standard practice, not EXT research.

---

### OD-003 Citations

#### EXT-TASK-001 (Task-Oriented Design)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (task-specific structure)
- **Spirit Check:** Each task as discrete island with 4px red left border. Matches soul: 4px border, primary color.
- **Verdict: PASSED** — Aligns with soul's border conventions. Applied as REFINED.

#### EXT-TASK-002 (Progressive Disclosure via Square Markers)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (square markers are soul-aligned)
- **Spirit Check:** Square markers (solid=complete, outline=current, gray=future). Soul Piece 5: Squares Signal System.
- **Verdict: PASSED** — Directly reinforces Soul Piece 5.

#### EXT-TASK-003 (Hierarchical Task Breakdown)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:ASSESS (connector lines)
- **Spirit Check:** Subtasks connected via `1px solid` vertical lines (line 700-708). The 1px width **violates Rule 5** ("1px borders signal uncertainty — FORBIDDEN for accents"). However, this is a connector line, not a border/accent.
- **Verdict: PASSED with note** — 1px connector lines serve a structural purpose (showing hierarchy), not an accent purpose. Rule 5 targets accent borders, not structural connectors. Acceptable.

#### EXT-TASK-004 (Negative Space Typography)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (spacing values)
- **Spirit Check:** 3rem after titles, 6rem between islands. These are spacing decisions aligned with the soul's whitespace-as-design principle (Rule 6).
- **Verdict: PASSED** — Enhances soul's whitespace philosophy.

#### EXT-TASK-006 (Multi-Step Forms / Collapsible Steps)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (progressive disclosure)
- **Spirit Check:** Completed steps collapse via `<details>`. Interactive but content-driven.
- **Verdict: PASSED** — Content architecture, soul-neutral.

#### EXT-TASK-009 (WCAG Accessibility)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (accessibility)
- **Implementation:** Semantic HTML, ARIA landmarks, keyboard focus `3px red outline` (line 983-988).
- **Spirit Check:** Focus outline is 3px, not the soul's standard 4px. Keyboard focus uses `outline-offset: 2px`. This is functional accessibility, not decorative.
- **Verdict: PASSED** — Accessibility requirement overrides aesthetic consistency for functional reasons.

#### EXT-TASK-011 (Verification Checkpoints)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (callout pattern)
- **Spirit Check:** "You should see" prefix in green-bordered callout. Standard callout family DNA with accent-green.
- **Verdict: PASSED** — Uses established callout family DNA.

#### EXT-TASK-012 (Error Recovery Islands)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (callout pattern)
- **Spirit Check:** "If This Fails" in coral-bordered callout. Standard callout family DNA with accent-coral.
- **Verdict: PASSED** — Uses established callout family DNA.

#### OD-003 Spirit-vs-Letter Issues Found:

1. **Off-palette colors:** `#FEF5F4` (prereq callout bg, line 640) and `#F4FAF6` (checkpoint callout bg, line 655) are NOT in the locked palette. These are tinted backgrounds that create new effective colors. **SPIRIT FAILS** per the spirit table: "Creates new effective color not in palette — FAILS."

2. **Off-palette token:** `--accent-tan: #B8A080` (line 204) is NOT in the locked palette table. This is a new color introduced by OD-003. **PALETTE VIOLATION.**

3. **Solid offset variant:** `.task-island--featured` uses `outline: 4px solid var(--color-text); outline-offset: 4px` (lines 534-535) instead of a pseudo-element. This is a different technique than EXT-CREATIVE-001. It doesn't create depth illusion — it's a flat outline with offset. **PASSES spirit** — no perceptual depth.

---

### OD-004 Citations

#### EXT-CONF citations (12 total)
OD-004 uses a different naming convention — `EXT-CONF (Description)` rather than sequential IDs. All 12 are content/architecture patterns:

| Citation | Soul Test | Verdict |
|----------|-----------|---------|
| EXT-CONF (NNG Progressive Disclosure) | All No | **PASSED** — max 4 strata, IA pattern |
| EXT-CONF (Confidence Visualization) | All No | **PASSED** — inverse density-confidence, structural |
| EXT-CONF (Agentic Categorical Labels) | All No | **PASSED** — content labeling |
| EXT-CONF (Gwern Kesselman Vocabulary) | All No | **PASSED** — per-section tags, content |
| EXT-CONF (Appleton Epistemic Disclosure) | All No | **PASSED** — orientation markers |
| EXT-CONF (Diataxis) | All No | **PASSED** — documentation taxonomy |
| EXT-CONF (Layered Architecture) | All No | **PASSED** — bounded interpretation zones |
| EXT-CONF (GitBook Adaptive) | All No | **PASSED** — progressive revelation |
| EXT-CONF (AI Agents Progressive Disclosure) | All No | **PASSED** — geological survey header |
| EXT-CONF (NNG Information Scent) | All No | **PASSED** — boundary markers |
| EXT-CONF (EA Forum Epistemic) | All No | **PASSED** — evidence DNA display |
| EXT-CONF (Stripe Docs) | All No | **PASSED** — confidence-level switcher |

**All 12 EXT-CONF citations are content/architecture patterns with zero CSS soul implications.** Every one is about information structure, not visual treatment.

#### OD-004 also uses inherited creative techniques:
- **EXT-CREATIVE-001 (Solid Offset):** `.geological-survey::after` — full opaque offset (lines 371-379). Same pattern as OD-001. Same verdict: **NEEDS REFINEMENT** (perceptual depth).
- **EXT-CREATIVE-002 (Typographic Cascade):** Same deviation as OD-001 — section/stratum/meta sizes off locked scale.
- **EXT-CREATIVE-004 (Arriving Wisdom):** Same subtle implementation. **PASSED.**

#### OD-004 Spirit-vs-Letter Issues Found:
1. **Off-palette color:** `#F4FAF6` (checkpoint callout bg, line 775) — same as OD-003. Not in locked palette.

---

### OD-005 Citations

#### EXT-SPAT-001 (Hub-and-Spoke ISLANDS)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (CSS Grid layout)
- **Spirit Check:** Square tiles, CSS Grid, generous gaps. Soul Piece 5 honored.
- **Verdict: PASSED**

#### EXT-SPAT-002 (Breadcrumbs as WAVE Trigger)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (navigation pattern)
- **Spirit Check:** Triangle separators (CSS `content: '▸'`), monospace font, current item in Serif.
- **Verdict: PASSED** — Navigation architecture, soul-neutral.

#### EXT-SPAT-003 (7-Column Magazine Grid)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (layout)
- **Implementation:** Content + sidebar layout (3fr 1fr grid). Line 636.
- **Verdict: PASSED** — Layout pattern, soul-neutral.

#### EXT-SPAT-004 (Named Grid Areas)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (CSS Grid)
- **Spirit Check:** Semantic zone naming (doctrine, examples, references). Pure CSS architecture.
- **Verdict: PASSED**

#### EXT-SPAT-005 (Cartographic Hierarchy)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (visual hierarchy system)
- **Spirit Check:** Figure-ground separation, type hierarchy. Aligns with soul's typography-first hierarchy.
- **Verdict: PASSED**

#### EXT-SPAT-008 (Screen Reader Accessibility)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (accessibility)
- **Implementation:** Skip links, ARIA landmarks (line 995).
- **Verdict: PASSED** — Accessibility, soul-neutral.

#### EXT-SPAT-009 (Alternation for Rhythm)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (spacing pattern)
- **Implementation:** 80px+ isolation between spokes (line 577-582).
- **Verdict: PASSED** — Whitespace architecture, strengthens soul.

#### EXT-SPAT-010 (Islands Architecture)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (static/interactive ratio)
- **Spirit Check:** 95% static HTML, 5% interactive. Matches soul's flat, content-first philosophy.
- **Verdict: PASSED**

#### EXT-SPAT-011 (Natural Reading Rhythms)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (paragraph length)
- **Spirit Check:** 40-60 word paragraphs. Content guideline only.
- **Verdict: PASSED**

#### EXT-SPAT-012 (ECS Modular Entities)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (component architecture)
- **Spirit Check:** Each spoke = modular entity. Architectural pattern.
- **Verdict: PASSED**

#### OD-005 Spirit-vs-Letter Issues Found:

1. **Hover lift on territory tiles:** `.territory-tile:hover { transform: translate(calc(var(--offset-x) * -1), calc(var(--offset-y) * -1)); }` (line 508-509). This creates a hover movement where the tile shifts UP and LEFT by 4px, revealing the solid offset behind it. Per the Spirit-vs-Letter table: "`transform: translateY(-Npx)` on hover — No box-shadow — Creates fake lift/depth effect — FAILS." **SPIRIT FAILS** — the hover interaction creates the illusion of the tile being pressed/lifted.

2. **Solid offset on territory tiles:** `.territory-tile::after` (lines 514-524) — full pseudo-element offset. Same opaque technique as OD-001's pattern-visualization. **NEEDS REFINEMENT** — creates perceptual depth.

3. **Callout rgba backgrounds:** Lines 762-792 use `rgba(accent, 0.04-0.06)` for callout tinting. These create new effective colors not explicitly in the palette. However, this is standard practice across ALL ODs and uses locked accent values at near-invisible opacity. **BORDERLINE** — technically creates off-palette colors but the visual impact is minimal and this pattern is universal across the system.

---

### OD-006 Citations

OD-006 is the synthesis and uses the most creative techniques:

#### EXT-CREATIVE-001 (THE SOLID OFFSET) — repeated from OD-001
- **Implementation in OD-006:** `.solid-offset` class with explicit `border-radius: 0; box-shadow: none` (lines 603-621). Territory tiles also use solid offsets (lines 1048-1057).
- **Spirit Check:** Same technique as other ODs. Opaque offsets.
- **Verdict: NEEDS REFINEMENT** — same perceptual depth concern.

#### EXT-CREATIVE-002 (THE TYPOGRAPHIC HIERARCHY CASCADE)
- **Implementation in OD-006:** Same 5-level cascade as OD-001 (line 221-229). Same deviations from locked type scale.
- **Verdict: NEEDS REFINEMENT** — same locked scale deviation.

#### EXT-CREATIVE-003 (THE SCROLL WITNESS)
- **Implementation in OD-006:** TOC sidebar with progress markers (lines 338+). Markers use `border-radius: 0` explicitly (lines 414, 427).
- **Verdict: PASSED** — Minimally styled, square, explicit soul compliance.

#### EXT-CREATIVE-004 (THE ARRIVING WISDOM)
- **Implementation in OD-006:** Same subtle scroll reveal (lines 289-332).
- **Verdict: PASSED** — Subtle and accessible.

#### EXT-CREATIVE-005 (THE EDITORIAL DROP)
- **Implementation in OD-006:** Serif drop caps (line 578+, also HTML line 1539).
- **Verdict: PASSED** — Soul-aligned.

#### EXT-CREATIVE-006 (THE SEMANTIC BRIDGE)
- **Soul Test:** 1:No 2:ASSESS 3:No 4:No 5:No (hover highlighting)
- **Implementation:** Hovering a concept term highlights related code. `.concept-link:hover` triggers `background: rgba(232, 48, 37, 0.05)` on `.highlight-target` (lines 1201-1213).
- **Spirit Check:** The hover creates a very subtle primary-tinted highlight (5% opacity). Uses locked primary color. The interaction links concept to code — it's pedagogical, not decorative.
- **Verdict: PASSED** — Educational interaction, minimal visual impact, uses locked color.

#### EXT-CREATIVE-007 (THE DUAL LENS)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (content toggle)
- **Implementation:** Why/How toggle between serif (explanation) and monospace (implementation). Lines 676-751. All elements use `border-radius: 0` explicitly.
- **Spirit Check:** Toggle respects font-zone rules (serif=wisdom, mono=code). No new visual complexity.
- **Verdict: PASSED** — Reinforces Soul Piece 2 (serif=wisdom, mono=code).

#### EXT-CREATIVE-008 (THE COLLAPSING HEADER)
- **Soul Test:** 1:No 2:ASSESS 3:No 4:No 5:No (sticky shrinking header)
- **Implementation:** Section headers that shrink on scroll (lines 522-574). Uses `border-radius: 0` explicitly.
- **Spirit Check:** Sticky positioning is functional, not decorative. Header scaling creates information density variation (sparse at top → dense when scrolled). No shadows, no rounded corners.
- **Verdict: PASSED** — Functional interaction, no soul violations.

#### EXT-CREATIVE-009 (THE VISUAL INDEX)
- **Soul Test:** 1:No 2:No 3:No 4:No 5:No (specimen grid)
- **Implementation:** Grid overview layout (lines 1130-1150). `border-radius: 0` explicit.
- **Spirit Check:** Specimen-sheet grid is editorial/archival. Square tiles, monospace labels.
- **Verdict: PASSED** — Editorial technique, soul-aligned.

#### OD-006 Spirit-vs-Letter Issues Found:

1. **Hover lift on territory tiles:** `.territory-tile:hover { transform: translate(-2px, -2px); }` (line 1060-1061). Same issue as OD-005 but smaller magnitude (2px vs 4px). **SPIRIT FAILS** — creates depth/lift illusion.

2. **TOC marker opacity:** `.toc__item` uses `opacity: 0.7` (line 450) for inactive items. This doesn't create a new color but does create a perceptual difference that isn't from the locked palette directly. **MINOR** — functional opacity for interactive state, not decorative.

---

## PART 2: Raw Directive vs Refined Application Analysis

### RAW DIRECTIVE Applications Found (research applied without soul filtering):

| # | OD | Finding | CSS Evidence | Issue | Recommended Fix |
|---|-----|---------|-------------|-------|-----------------|
| 1 | OD-001 | EXT-CREATIVE-002 | `--type-section: 1.625rem (26px)` | 26px not in locked type scale | Map to `--text-h3: 24px` |
| 2 | OD-001 | EXT-CREATIVE-002 | `--type-question: 1.375rem (22px)` | 22px not in locked type scale | Map to `--text-h4: 20px` |
| 3 | OD-001 | EXT-CREATIVE-002 | `--type-meta: 0.625rem (10px)` | 10px not in locked type scale | Map to `--text-xs: 12px` or document 10-11px as callout-label exception |
| 4 | OD-003 | Custom addition | `--accent-tan: #B8A080` | Color not in locked palette | Remove or map to nearest locked color (`--color-border: #E0D5C5`) |
| 5 | OD-003 | Custom addition | `background: #FEF5F4` | Off-palette prereq callout bg | Use `rgba(232, 48, 37, 0.04)` or remove bg |
| 6 | OD-003 | Custom addition | `background: #F4FAF6` | Off-palette checkpoint callout bg | Use `rgba(74, 157, 107, 0.04)` or remove bg |
| 7 | OD-004 | Custom addition | `background: #F4FAF6` | Off-palette checkpoint callout bg | Same as OD-003 |

### REFINED Applications (properly filtered through soul):

The vast majority of EXT-* citations were applied as REFINED. Specifically:
- All EXT-CONV-* (5/5): Structural/content patterns, no CSS soul implications
- All EXT-DENSITY-* (3/3): Spacing/disclosure patterns, soul-neutral
- All EXT-TASK-* (8/8): Task architecture patterns, soul-aligned
- All EXT-CONF-* (12/12): Content/epistemic patterns, zero CSS implications
- All EXT-SPAT-* (10/10): Spatial/layout patterns, soul-neutral
- EXT-CREATIVE-003 (Scroll Witness): Square markers, no decoration
- EXT-CREATIVE-004 (Arriving Wisdom): Subtle, accessible animations
- EXT-CREATIVE-005 (Editorial Drop): Instrument Serif + primary color
- EXT-CREATIVE-006 (Semantic Bridge): Educational hover, minimal visual
- EXT-CREATIVE-007 (Dual Lens): Reinforces font-zone rules
- EXT-CREATIVE-008 (Collapsing Header): Functional sticky positioning
- EXT-CREATIVE-009 (Visual Index): Editorial grid, soul-aligned

---

## PART 3: Spirit-vs-Letter Violations Summary

| # | OD | Violation | Spirit-vs-Letter Row | Severity |
|---|-----|-----------|---------------------|----------|
| 1 | OD-001, 003, 004, 005, 006 | Solid offset pseudo-elements creating perceptual depth | Row 1: "ASSESS case by case" | MEDIUM — the identity brief says these were approved, but audit classifies as NEEDS REFINEMENT |
| 2 | OD-001 | Semi-transparent offset pseudo-elements (opacity 0.15, 0.3) | Closer to "Literally a shadow" | HIGH — creates colored glow effect, spirit equivalent of box-shadow |
| 3 | OD-005 | `.territory-tile:hover { transform: translate(-4px, -4px) }` | Row 8: "Creates fake lift/depth effect — FAILS" | HIGH — hover lift creates floating illusion |
| 4 | OD-006 | `.territory-tile:hover { transform: translate(-2px, -2px) }` | Row 8: same | MEDIUM — smaller magnitude but same principle |
| 5 | OD-003 | `--accent-tan: #B8A080` (off-palette color) | Row 4: "Creates new effective color not in palette — FAILS" | HIGH — entirely new color introduced |
| 6 | OD-003, 004 | `#FEF5F4`, `#F4FAF6` callout backgrounds | Row 4: same | MEDIUM — tinted backgrounds not in explicit palette |
| 7 | ALL ODs | `rgba(accent, 0.04-0.06)` callout backgrounds | Row 4: technically new colors | LOW — universal pattern, very low opacity, uses locked accents |

---

## COMPACTION-SAFE SUMMARY
- Agent: Research-Ref
- EXT-* citations checked: 55
- PASSED: 46
- NEEDS REFINEMENT: 5 (EXT-CREATIVE-001 across 5 ODs, EXT-CREATIVE-002 across 3 ODs — counted as unique findings, not per-OD)
- REJECTED: 0
- Raw directive applications found: 7 (3 type scale deviations repeated across ODs, 1 off-palette color, 3 off-palette backgrounds)
- Spirit vs Letter violations: 7 (2 HIGH, 3 MEDIUM, 1 LOW, 1 universal/accepted)
- Status: COMPLETE
