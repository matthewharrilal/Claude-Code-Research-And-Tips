# Research: Design System Vocabulary -- What Exists vs What's Missing

**Researcher:** vocabulary-researcher
**Date:** 2026-03-03
**Files Analyzed:** identity.md, vocabulary.md, tokens.css, components.css, components.md, mechanisms.md, grammar.md, semantic-rules.md, responsive-strategy.md, usage-criteria.md, RESEARCH-SYNTHESIS.md, R1-DOCUMENTATION-PATTERNS.md, R2-CREATIVE-LAYOUTS.md, R4-AXIS-INNOVATIONS.md (partial), R5-COMBINATION-THEORY.md (partial), case-studies/README.md, 3 case studies (DD-006, OD-004, CD-006)

---

## Part 1: What Visual Concepts Exist

### 1A. The 7-File Core Vocabulary (1,319 lines)

The design system vocabulary is organized as a 6-layer ontology:

**Layer 1 -- Identity (142 lines, 2 files)**
- 2 soul principles: angular geometry (border-radius: 0), no shadow/depth simulation
- 3 identity signatures: warm palette (#FEF9F5), typography trinity (Instrument Serif / Inter / JetBrains Mono), 4px left-border callout system
- 5 internal tensions documented (warmth vs severity, solid offset vs anti-shadow, vocabulary ceiling)
- Refusals: 8 absolute, 7 conditional
- Design decision rationale for palette, typography, spacing, borders, container width

**Layer 2 -- Tokens (124 lines, 1 file)**
- 65 CSS custom properties in :root
- 8 color values (primary, background, text, text-secondary, border, border-subtle + 5 accents)
- 4 zone backgrounds (sparse, dense, breathing, bedrock)
- 5 callout backgrounds (info, tip, gotcha, challenge, essence)
- Typography: 3 font families, 9 type scale steps (12px to 48px)
- Spacing: 12 values on 4px base unit + 3 gestalt aliases (within/between/chapter)
- 3 border weights (4px structural, 3px accent, 1px micro)
- 7 syntax highlighting colors
- 1 transition duration (0.3s ease)
- Solid offset system (4px x/y at #1A1A1A)

**Layer 3 -- Grammar (237 lines, 2 files)**
- 20+ mechanisms across 5 categories: Spatial (4), Hierarchy (2), Component (5), Depth/Emphasis (3), Structure (7)
- 2 component patterns (2-Zone DNA, Stratum Boundary)
- Transition grammar with 3 types: SMOOTH, BRIDGE, BREATHING
- Compositional rules: nesting (max 2 levels), rhythm (max 3 consecutive dense), zones (max 2-3 changes per viewport), density (max 3-4 components per viewport-height)
- 6 organizational patterns: CONVERSATIONAL, NARRATIVE, TASK-BASED, CONFIDENCE-BASED, SPATIAL, CREATIVE/EMERGENT
- 6 density patterns: PULSE, CRESCENDO, BOOKENDS, GEOLOGICAL, WAVE, ISLANDS, FRACTAL
- Component sequencing: velocity (FAST/MEDIUM/SLOW), temperature (warm/neutral/cold), weight (light/medium/heavy)
- 7 anti-patterns documented

**Layer 4 -- Components (816 lines, 2 files)**
- 13 universal components: callout family (5 semantic types), code block, code snippet, inline code, data table, page header, page footer, stats bar, section indicator, file tree, decision matrix, Q&A pair, skip link
- 7 CD-era components: reasoning container, core abstraction, bento grid, essence pullquote, section zone (5 variants), breathing zone (3 variants), version badge
- CSS: 780 lines of implementation
- Responsive: single 768px breakpoint with grid collapse

**Layer 5 -- Case Studies (9 unique explorations)**
- Anti-prescription format: "NOT A TEMPLATE" warnings, tension narratives, mechanism extraction guidance
- DD case studies: Islands (bento grid), Layers (atmospheric depth), Fractal (self-similarity)
- OD case studies: Conversational (Q&A), Confidence (geological strata), Creative (dual-lens)
- CD case studies: Reasoning Inside Code, Multi-Axis Transition, Pilot Migration

**Layer 6 -- Guidelines (3 files)**
- 7 semantic gap rules (info vs note callouts, inline vs block code, table styling, breathing room triggers, callout differentiation, content density floors, content-form fit)
- Responsive strategy: 768px only, desktop-first
- Usage criteria: component density triggers, grid column selection, footer criteria, nesting vs flattening

### 1B. The Research Layer (337 findings)

- R1: 28 findings on documentation patterns (Stripe, Vercel, Linear, Apple HIG)
- R2: 27 findings on creative layouts (magazine editorial, bento grids, broken grids, Swiss design)
- R3: 51 findings on density dimensions (temporal, depth, semantic, cognitive, interaction, spatial)
- R4: 192 findings on axis innovations (Z/F/Gutenberg patterns, spiral, diagonal)
- R5: 39 findings on combination theory (harmony, tension, sequencing, component character)
- RESEARCH-SYNTHESIS: 5 unified principles (density as rhythm, layout as choreography, components as characters, whitespace as design element, editorial confidence through typography)

---

## Part 2: What's MISSING

### 2A. SPATIAL LAYOUT TYPES -- The Biggest Gap

The vocabulary has mechanisms for WITHIN-section composition (dense/sparse alternation, spacing compression, bento grid) but almost NO vocabulary for WHOLE-PAGE spatial topology. A human designer's vocabulary for page-level layout includes concepts the system completely lacks:

**Missing page topology concepts:**
1. **Split-screen layouts** -- R2 documents these (Section 6.1) but they never made it into the compositional vocabulary. Zero mention in mechanisms.md, grammar.md, or components.css.
2. **Asymmetric column layouts** -- R2 documents golden ratio (61.8%/38.2%) and fractional grids (2fr/1fr/1fr). The system has only bento-grid (1fr 1fr) and 3-column equal grids. No asymmetric column support.
3. **Full-bleed / margin-breaking elements** -- R2 documents pull quotes that "bleed beyond content column" with negative margins. The system has no vocabulary for elements that break the container width. Everything lives within the 860-1100px container.
4. **Sidebar + content layouts** -- R1 documents Stripe's 3-column (nav | content | code) as the gold standard. The system has zero sidebar or multi-pane concepts.
5. **Horizontal scrolling sections** -- R2 mentions these for scrollytelling. No vocabulary exists.
6. **Stacked full-viewport sections** -- Common in modern web design (each section = one viewport height). The system has section-zone variants but no viewport-height concept.
7. **Hero sections** -- R1 and R2 both emphasize hero sections with dramatic typography as critical. The page-header component is a thin metadata bar, not a hero. No hero component exists.
8. **Content + fixed preview (scrollytelling)** -- R2 documents fixed component preview that changes as description scrolls. No vocabulary for sticky-scroll patterns beyond the basic "scroll witness" mechanism (#8, noted as LOW perceptual effectiveness).

**What this means for the pipeline:** The vocabulary can produce variations WITHIN a single-column layout but cannot produce fundamentally different page SHAPES. Every page built from this vocabulary will have the same basic silhouette: header bar, then stacked sections in a centered column, then footer bar. The bento grid provides 2-column moments within sections but not true multi-column page architecture.

### 2B. COMPONENT ARCHETYPES -- Missing Content Containers

**Missing component types a human designer would expect:**
1. **Card component** -- A general-purpose content card. The bento-cell exists but it's always within a bento-grid context. No standalone card for highlighting a single piece of content.
2. **Accordion/disclosure** -- Progressive disclosure is documented in the research (R2 Section 2.3, R1 Finding 7.2 "Collapsible Callout Pattern") but no component exists for it. Grammar.md references "progressive disclosure" as a density technique but there's no CSS implementation.
3. **Tab component** -- R1 documents multi-language tabs on code blocks (Finding 6.1, Stripe pattern). No tab component exists. The system can only show one thing at a time.
4. **Timeline/stepper** -- R1 documents "numbered steps" and R2 mentions "scrollytelling" progression. No timeline or stepped progression component exists.
5. **Badge/tag** -- The version-badge component exists (CD-era) but there's no general-purpose tag for labeling items (e.g., difficulty level, category, status).
6. **Divider/separator** -- Mentioned in mechanisms.md as "Section Divider" but no CSS exists in components.css for it.
7. **Image/figure** -- Zero support. No `<figure>` component, no image captioning, no image grid. The system is entirely text-based. R1 and R2 both emphasize imagery (R2-3.2: "brand imagery throughout", R1-5.4 "strong covers and hero imagery").
8. **Navigation component** -- No persistent navigation, breadcrumbs, or table-of-contents sidebar. R1 (Finding 1.4) documents running headers and section markers. The scroll witness mechanism is noted as low-effectiveness.
9. **Blockquote** -- The essence-pullquote serves this purpose for special "wisdom" content. No general-purpose blockquote for quoting external sources.
10. **Alert/banner** -- No full-width page-level alert or announcement banner. Callouts are inline components, not page-level banners.

### 2C. VISUAL EXPRESSION -- What the System Self-Identifies as Limited

The identity.md file explicitly acknowledges vocabulary limitations:
- No visual vocabulary for playfulness, delight, or whimsy
- Celebration has minimal expression (green left-border only)
- Limited tools for visual surprise (no gradients, shadows, radius variation, or animation)
- Emotional range limited to "authoritative warmth"
- Prefers being mistaken for cold over approachable

**What this means practically:**
- Every page will feel like the same emotional register. The system has ONE mood.
- Success, progress, completion, discovery, warning, danger -- these all reduce to the same visual grammar (left-border color change).
- The callout system carries 80%+ of the semantic differentiation load. Without it, everything looks the same.

### 2D. ANIMATION AND INTERACTION -- Almost Entirely Absent

**What exists:**
- `--transition-standard: 0.3s ease` (single token)
- `prefers-reduced-motion` media query (accessibility)
- Scroll witness / sticky TOC (mechanism #8, noted LOW effectiveness)

**What's missing:**
- Scroll-based animations (R2 documents extensively)
- Page transitions
- Component enter/exit animations
- Loading states
- Hover states beyond color change (hover lift explicitly REFUSED in identity.md)
- Interactive toggles, accordions, tabs
- Scroll progress indicators
- Parallax effects

**The identity file explicitly refuses hover lift effects** (`transform: translateY`), but says nothing about other animation types. The vocabulary has essentially collapsed "no decorative animation" into "no animation at all." This is a self-imposed limitation that goes beyond the soul constraints.

### 2E. GRID SYSTEM -- Primitive

**What exists:**
- Bento grid: 2-column, 24px gap, 3px borders
- 3-column equal grid (DD-006 only, narrow context)
- 4-column weighted grid (decision matrix only: 2fr 1fr 1fr 1fr)
- Responsive collapse: all multi-column -> single column at 768px

**What's missing:**
- Named grid areas (CSS grid-template-areas)
- Auto-placement (grid-auto-flow)
- Nested grids
- Asymmetric column ratios beyond decision matrix
- Grid spanning (components that cross rows/columns dynamically)
- Masonry layout
- Container queries (responsive to parent, not viewport)
- More than one responsive breakpoint (only 768px validated)

**The system cannot produce a dashboard, a magazine spread, or a multi-panel reference page.** The bento grid is the most complex spatial arrangement, and it's just "two equal columns with borders."

### 2F. TYPOGRAPHIC EXPRESSION -- Rich Tokens, Limited Deployment

The typography trinity (Instrument Serif / Inter / JetBrains Mono) is well-defined with 9 scale steps. But the DEPLOYMENT is narrow:

**What exists in practice:**
- Instrument Serif: only for h1/h2 headings and essence callouts
- h3: italic serif (always italic -- explicit rule)
- Inter: all body text
- JetBrains Mono: code and metadata labels
- Drop cap: first-letter in display serif, max 1 per page (RARE)
- Letter-spacing differentiation: tight for headings, wide for labels

**What's missing:**
- Display typography for hero/splash moments (research documents 72-200px display text)
- Typographic size as layout element (R2 Section 5.1: "Typography as Primary Design Element")
- Mixed typographic treatments within a single block (e.g., large number + small label -- the stats bar partially does this but primitively)
- Pull quote typography that breaks the column (R2 Section 1.2: margin bleeds)
- Condensed/extended type variations
- Weight variation beyond the 400/500/600 range used

### 2G. COLOR -- Functionally Complete but Monotonous in Practice

**The palette:**
- 2 background levels (cream #FEF9F5, white #FFFFFF) + breathing (#FAF5ED) + bedrock (#1A1A1A)
- 2 text levels (primary #1A1A1A, secondary #666666)
- 5 semantic accents (blue, green, coral/red, purple, amber)
- 5 callout tinted backgrounds

**What's missing:**
- No gradient vocabulary (explicitly refused, but this means no visual energy in backgrounds)
- No opacity/layering vocabulary (explicitly refused for containers)
- No dark mode (explicitly deferred)
- No "surface" variation beyond the 4 zone backgrounds -- every page has the same color story
- The warm palette constraint means the system cannot produce a "cool" or "neutral" page even when the content would benefit from it

### 2H. INFORMATION DENSITY MANAGEMENT

**What exists:**
- Dense/sparse alternation rhythm
- 6 density patterns (PULSE, CRESCENDO, etc.)
- Max 3-4 components per viewport
- Max 2 callouts per viewport
- Content density floor rules

**What's missing:**
- Progressive disclosure components (accordion, tabs, collapsible sections)
- Information toggling (show/hide, expand/collapse)
- Filter/search patterns for dense reference content
- Zoom/focus patterns (click to expand, modal overlay)
- "More" patterns (truncated content with expand link)
- Responsive density (adapting density to screen size, not just collapsing columns)

---

## Part 3: Does R2 Contain Actual Layout Strategies or Just Decoration?

R2 (Creative Layouts) contains REAL layout strategies that were never operationalized:

**Genuine layout strategies in R2 that the system ignores:**
1. **Broken grid** (R2-1.1): Intentionally letting elements break the grid. CONFLICT with system's container discipline but R2's own "resolution" says "break grid with CONTENT positioning, not DECORATION." This compromise was never implemented.
2. **Pull quotes as structural elements** (R2-1.2): Large type with margin bleeds. Implementation CSS provided. Never became a mechanism or component.
3. **Multi-column text** (R2-1.3): CSS `column-count` for newspaper-style flow. Never mentioned in grammar.md.
4. **Bento grid variations** (R2-4.1): Featured cells (2x2), wide cells (span 2), tall cells (span 2). The implemented bento grid only does uniform 1fr 1fr.
5. **Split screen** (R2-6.1): 50/50 or 60/40 viewport splits. Never became a mechanism.
6. **CSS Grid with fractional units** (R2-4.3): `2fr 1fr 1fr` for asymmetric layouts. Only the decision matrix uses this pattern.
7. **Golden ratio grid** (R2-4.4): 61.8%/38.2% proportion system. Never operationalized.
8. **Scrollytelling** (R2-6.3): Fixed preview + scrolling description. Never became a mechanism.

**The 50:1 compression problem manifests here directly.** R2 produced 27 layout findings. The compositional vocabulary absorbed approximately 2 of them (bento grid, basic whitespace principles). That's 93% information loss from the creative layouts research.

**R2 is NOT "just decoration."** It contains the most actionable layout diversity research in the entire system. The fact that the system can only produce one page shape (centered single column with occasional 2-column bento moments) is directly traceable to R2's findings being compressed away during extraction.

---

## Part 4: Can the Current Vocabulary Produce More Than 1 Look?

**Short answer: It can produce TONAL variations within a single structural template, but not genuinely different layouts.**

### What Varies
The vocabulary supports variation along these dimensions:
- **Organizational pattern:** CONVERSATIONAL vs NARRATIVE vs CONFIDENCE-BASED (etc.) -- these change the content ordering and section structure
- **Density rhythm:** PULSE vs CRESCENDO vs BOOKENDS -- these change the spacing cadence
- **Mechanism selection:** Different combinations of 20+ mechanisms create different textural feels (border-weight gradient vs spacing compression vs bento grid)
- **Metaphor-driven class names:** `.stratum--bedrock` vs `.floor--basement` -- different semantic framing
- **Component mix:** Heavy on callouts vs heavy on code vs heavy on tables -- changes the page's content character
- **Zone background sequencing:** Different ordering of sparse/dense/breathing/bedrock zones

### What Doesn't Vary
These elements are FIXED across all pages:
- **Page silhouette:** Centered column, 860-1100px, header bar top, footer bar bottom
- **Color story:** Warm cream with 5 accent colors. Always the same warmth.
- **Typography:** Instrument Serif headings, Inter body, JetBrains Mono code. Always.
- **Component DNA:** 4px left-border callouts, uppercase mono labels, dense/sparse 2-zone pattern. Every component follows the same structural template.
- **Emotional register:** Authoritative warmth. Always.
- **Border language:** 4px/3px/1px. Always 3 weights.
- **Spatial structure:** Single column with in-column grids. No sidebars, no split screens, no full-bleed moments.

### The "Look" Count

With the existing vocabulary, a skilled builder can produce pages that FEEL different through:
- Different metaphors driving different CSS class naming and spacing values
- Different density rhythms creating different reading cadences
- Different mechanism combinations creating different textural emphasis

But a user scanning thumbnails of 10 pages built from this vocabulary would see: **warm cream pages with sharp black text, red accents, left-bordered callouts, dark code blocks, and the same basic column structure.** They would NOT see 10 genuinely different visual designs.

**Estimate: the vocabulary produces 2-3 visually distinguishable "looks":**
1. **Dense technical** (bento grids, code-heavy, dark zones, compressed spacing)
2. **Editorial/conversational** (Q&A layout, drop caps, breathing zones, generous spacing)
3. **Hybrid** (mixed density, multiple zone backgrounds, varied components)

A human designer's vocabulary for a single design system would typically support 8-15 distinguishable page archetypes (landing page, documentation page, reference page, blog post, dashboard, gallery, profile, settings, error page, etc.).

---

## Part 5: Summary of Critical Gaps

### Tier 1 -- Structural Gaps (Limit What Pages Can BE)
1. **No page-level layout vocabulary** -- can't produce anything but centered single-column
2. **No hero/splash component** -- pages can't have dramatic openings
3. **No progressive disclosure** -- can't manage high-density content without scroll
4. **No sidebar/multi-pane architecture** -- can't do documentation layouts like Stripe
5. **No grid beyond 2-column equal** -- can't create asymmetric or complex spatial arrangements

### Tier 2 -- Expressive Gaps (Limit How Pages Can FEEL)
6. **Single emotional register** -- authoritative warmth only, no variation possible
7. **No animation vocabulary** -- pages are entirely static
8. **No image/figure support** -- text-only design language
9. **R2 creative layout findings not operationalized** -- 93% of layout research lost
10. **No display typography for impact** -- headings max at 48px, research recommends 72-200px for heroes

### Tier 3 -- Completeness Gaps (Missing Standard Components)
11. **No accordion/disclosure component**
12. **No tab component**
13. **No timeline/stepper component**
14. **No standalone card component**
15. **No divider component (CSS missing despite mechanism mention)**
16. **No navigation/breadcrumb component**

---

## Part 6: Implications for the Pipeline

The pipeline (research-compose SKILL.md) asks specialists to analyze visual vocabulary, mechanisms, and spatial patterns. But the vocabulary they're analyzing is structurally limited to one page shape. This means:

1. **Specialists finding "insufficient visual richness" may be correctly diagnosing a vocabulary limitation, not a builder failure.** The vocabulary ceiling documented in identity.md ("playfulness, celebration, visual surprise, emotional range, softness") is real. No amount of mechanism deployment can produce a visually rich page if the available mechanisms all produce the same narrow range of visual outcomes.

2. **The "sample 2-4 mechanisms" mandate identified as the single most limiting specification (by ALL 11 research agents in the richness investigation) sits on top of a vocabulary that itself only produces 2-3 looks.** Even deploying ALL 20 mechanisms might not produce visual diversity if the mechanisms all operate within the same single-column, warm-cream, left-bordered design space.

3. **The entire anti-gravity system (preventing template copying from case studies) is protecting against a problem that may be less important than the problem it creates.** If the vocabulary can only produce 2-3 looks anyway, preventing builders from seeing how those looks are implemented doesn't protect creative diversity -- it just makes it harder for builders to use the limited vocabulary effectively. The real diversity problem is upstream (vocabulary range), not downstream (builder copying).

4. **R2's layout research is the most direct path to vocabulary expansion.** But R2 was treated as "secondary for multiple stages" in the research synthesis, while R4 (192 axis findings, most about eye movement theory) was treated as the primary layout input. This is backwards: R2 has concrete CSS layouts that could become mechanisms, while R4 has reading pattern theory that's already absorbed into organizational patterns.

---

## Appendix: File-by-File What I Read

| File | Path | Lines | Key Takeaway |
|------|------|-------|-------------|
| identity.md | compositional-core/identity/ | 87 | Strong character definition, self-aware about limitations |
| vocabulary.md | compositional-core/identity/ | 55 | Clean rationale linking tokens to design decisions |
| tokens.css | compositional-core/vocabulary/ | 124 | 65 well-organized CSS properties |
| components.css | compositional-core/components/ | 779 | Comprehensive for what's there, but gaps in spatial/layout |
| components.md | compositional-core/components/ | 37 | Good velocity/weight classification system |
| mechanisms.md | compositional-core/grammar/ | 88 | 20+ mechanisms, but all operate within same spatial frame |
| grammar.md | compositional-core/grammar/ | 149 | Rich compositional rules, density patterns well-thought-out |
| semantic-rules.md | compositional-core/guidelines/ | 530 | Thorough gap-filling with HTML evidence |
| responsive-strategy.md | compositional-core/guidelines/ | 272 | Honest about single-breakpoint limitation |
| usage-criteria.md | compositional-core/guidelines/ | 338 | Practical density/grid/nesting criteria |
| RESEARCH-SYNTHESIS.md | research/ | 384 | 5 unified principles, good meta-view |
| R1-DOCUMENTATION-PATTERNS.md | research/ | 585 | 28 findings, strong documentation-specific patterns |
| R2-CREATIVE-LAYOUTS.md | research/ | 811 | 27 findings -- THE MOST UNDERUTILIZED RESEARCH |
| R4-AXIS-INNOVATIONS.md | research/ | 200+ | 192 findings on reading patterns, very theoretical |
| R5-COMBINATION-THEORY.md | research/ | 200+ | 39 findings on component chemistry |
| case-studies/README.md | compositional-core/case-studies/ | 542 | Exhaustive anti-prescription framing |
| DD-006-fractal.md | compositional-core/case-studies/ | 100+ | Strong tension narrative, mechanism extraction clear |
| OD-004-confidence.md | compositional-core/case-studies/ | 100+ | Geological metaphor case study |
| CD-006-pilot-migration.md | compositional-core/case-studies/ | 100+ | Meta-tutorial, highest-scored exploration |
