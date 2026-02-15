# Tier Specifications: Concrete Definitions Grounded in Code Analysis

**Author:** tier-architect
**Date:** 2026-02-15
**Source Analysis:** Variant B (694 lines), OD-004 (1,978 lines), CD-006 (2,085 lines), mechanism-catalog.md (868 lines), compositional-rules.md (528 lines), border-system.md (659 lines), tension-composition SKILL.md (1,402 lines), richness-anatomy (01) + implications-landscape (03)

---

## Methodology: What This Report Is (and Is Not)

This report defines tiers by working BACKWARD from actual code. Instead of idealizing what each tier "should" look like, I examined:

1. **Variant B** (Phase D output, best-scoring tension-skill page) as the empirical baseline
2. **DD-006** through **CD-006** as the empirical showcase progression
3. **The mechanism catalog** (18 mechanisms) as the quantifiable technique inventory
4. **The richness anatomy** (01-richness-anatomy.md) which counts CSS techniques per stage

Every tier definition below is grounded in specific CSS properties, specific mechanism counts, and specific build-time evidence.

---

## THE FOUR TIERS

---

## TIER 1: FLOOR

**Target:** All pages (100%). The minimum that makes a page "KortAI" rather than generic HTML.

### What It Looks Like (Concrete CSS)

The Floor tier is a page that uses the design system's **token layer** and **basic component inventory** but has NO metaphor, NO grid/flex layouts beyond defaults, and NO pseudo-elements. It is block-level stacking with correct design tokens.

**Required CSS properties:**

```css
/* Soul enforcement (ABSOLUTE) */
:root {
  --border-radius: 0;
  --box-shadow: none;
}

/* Token architecture (from tokens.css, 65 properties) */
--color-primary: #E83025;
--color-background: #FEF9F5;
--color-text: #1A1A1A;
--color-text-secondary: #666666;
--color-border: #E0D5C5;
--color-border-subtle: #F0EBE3;
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
/* Full spacing scale: 4px through 80px */

/* Typography trinity deployed */
h1, h2, h3 { font-family: var(--font-display); }
body { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; }
code { font-family: var(--font-mono); }

/* Page container */
.page-container { max-width: 960px; margin: 0 auto; padding: 0 32px; }

/* 1 responsive breakpoint */
@media (max-width: 768px) { /* padding + font-size adjustments */ }
```

**Required mechanisms (from catalog):** 5 of 18

| # | Mechanism | How Deployed | CSS Lines |
|---|-----------|-------------|-----------|
| 2 | 2-Zone Component DNA | Callout components (label + body) | ~50 |
| 9 | Confidence Encoding via Color | Callout border colors (blue/green/coral/amber/purple) | ~10 |
| 10 | Border-Left Semantic Signal | 4px left border on all callouts | ~5 |
| 11 | Typographic Scale Jumping | 6-level type scale (~1.5x ratio) | ~10 |
| 17 | Code Block (dark bg + syntax) | Dark code blocks with highlighting | ~40 |

**What the agent does NOT need:**
- No metaphor derivation (no tension-composition pipeline)
- No grid or flex layouts (block stacking only)
- No pseudo-elements (::before, ::after)
- No positioned elements (absolute, relative)
- No animations or transitions
- No scroll-driven effects
- No custom zone background tokens
- No dark header convention (optional)

**Quantitative profile:**
- Custom properties: ~40-50 (token layer only)
- @media queries: 1 (768px)
- CSS class selectors: ~30-45
- Unique component types: 5-8
- Total CSS lines: ~150-250
- Total HTML lines: ~300-500

**Reference artifact:** Variant B is SLIGHTLY above Floor because it invented novel component vocabulary (instrument cards, cost meters, error cards). A pure Floor page would use only standard callouts, code blocks, and prose -- no novel components.

### Pipeline Steps Required

1. **Load prohibitions.md + tokens.css** (~5 min)
2. **Identify content sections** (heading structure) (~5 min)
3. **Apply tokens** to markup (~10-15 min)
4. **Add callout components** where content has tips/warnings/info (~5 min)
5. **Add code blocks** where content has code (~5 min)
6. **Verify soul compliance** (border-radius: 0, box-shadow: none, correct palette) (~5 min)

**Total estimated time: 30-45 minutes**
(Phase D builders completed in ~15 min, but they had pre-prepared content)

### Reproducibility Assessment

**Reproducibility: VERY HIGH (95%+)**

Floor tier is almost entirely mechanical. Two agents given the same content and the same tokens.css will produce pages that differ only in:
- Section ordering (if ambiguous)
- Callout placement (which paragraphs get emphasized)
- Minor padding choices within the spacing scale

**Why:** Floor uses NO creative derivation. Every decision is a lookup: heading → font-display, body → font-body, emphasis → callout with accent color. The token layer IS the specification.

### Quality Variance

**Variance: LOW**

Floor pages will look similar to each other. The visual "fingerprint" is the token layer, and every Floor page shares the same fingerprint. Differences are limited to content density and section count.

**Risk:** Low variance means Floor pages can feel samey. This is the cost of high reproducibility.

---

## TIER 2: MIDDLE

**Target:** ~40-50% of pages. Pages with light rhythmic variation, spatial variety, and basic layout techniques -- but no deep metaphor.

### What It Looks Like (Concrete CSS)

Middle adds **layout techniques** (grid, flex), **pseudo-elements**, **zone backgrounds**, and **rhythmic variation** to the Floor baseline. The key differentiator: Middle pages have SPATIAL VARIETY (not just vertical stacking) and DENSITY RHYTHM (not uniform padding).

**Required CSS properties (in addition to Floor):**

```css
/* Layout */
display: flex;  /* At least 1 flex layout */
display: grid;  /* At least 1 grid layout (e.g., 2-column comparison) */
grid-template-columns: 1fr 1fr; /* Or repeat(auto-fit, minmax(280px, 1fr)) */

/* Pseudo-elements (at least 1) */
.featured::after { /* Solid offset OR decorative line */ }
::selection { background: var(--color-primary); color: var(--color-background); }

/* Position (at least 1) */
position: relative; /* For pseudo-element parent */

/* Zone backgrounds (3-token system) */
--color-zone-sparse: #FEF9F5;
--color-zone-dense: #FFFFFF;
--color-zone-breathing: #FAF5ED;

/* Semantic spacing aliases */
--space-within: var(--space-2);   /* 8px */
--space-between: var(--space-8);  /* 32px */
--space-chapter: var(--space-16); /* 64px */

/* Accessibility */
.skip-link { position: absolute; /* ... */ }
*:focus-visible { outline: 3px solid var(--color-primary); }
@media (prefers-reduced-motion: reduce) { /* ... */ }

/* Multiple responsive breakpoints */
@media (max-width: 768px) { /* layout collapse + padding compression */ }
/* Optionally: @media (max-width: 480px) */
```

**Required mechanisms (from catalog):** 8-10 of 18

| # | Mechanism | How Deployed | CSS Lines |
|---|-----------|-------------|-----------|
| 2 | 2-Zone Component DNA | All callouts | ~50 |
| 4 | Spacing Compression | Section padding varies by importance | ~20 |
| 5 | Dense/Sparse Alternation | Sections alternate dense/sparse | ~15 |
| 7 | Zone Background Differentiation | 3-color zone system | ~25 |
| 9 | Confidence Encoding via Color | Callout borders | ~10 |
| 10 | Border-Left Semantic Signal | 4px callout borders | ~5 |
| 11 | Typographic Scale Jumping | 6-level type scale | ~10 |
| 13 | Dark Header + 3px Border | Full-bleed dark header | ~20 |
| 17 | Code Block | Dark code blocks | ~40 |
| 18 | Data Table | Mono headers + border categories | ~20 |

**Optional mechanisms (choose 1-2 based on content):**
- #1 Border-Weight Gradient (if content has hierarchy)
- #3 Solid Offset Depth (for 1-2 featured elements)
- #6 Width Variation (if content has Q&A pairs)
- #15 Bento Grid (if content has independent modules)

**Quantitative profile:**
- Custom properties: ~80-120
- @media queries: 2-3
- CSS class selectors: ~60-90
- Unique component types: 10-14
- Total CSS lines: ~350-500
- Total HTML lines: ~600-900
- Pseudo-elements: 1-3
- Grid/flex layouts: 2-4

### What Makes Middle Different From Floor

The critical jump is **spatial variety + rhythmic variation**:

1. **Layout techniques** -- At least 1 grid and 1 flex usage. This breaks the monotony of block stacking. A 2-column comparison grid, a flex metadata row, or a simple bento grid.

2. **Zone backgrounds** -- The 3-color zone system (sparse/dense/breathing) creates visual sections. Sections have DIFFERENT backgrounds. The reader sees zones, not a single-color page.

3. **Dense/sparse alternation** -- Section padding varies. Introduction sections get more padding (64px), dense sections get less (32px), breathing zones between chapters. The page has RHYTHM.

4. **Dark header** -- Full-bleed dark header with 3px primary border. This is the single most impactful visual upgrade from Floor -- it immediately signals "designed" rather than "formatted."

5. **Accessibility baseline** -- Skip-link, focus-visible, prefers-reduced-motion. These are non-visual but mandatory at Middle tier.

### Pipeline Steps Required

1. **Load prohibitions.md + tokens.css** (~5 min)
2. **Content analysis** -- Identify sections, classify density needs (~10 min)
3. **Select layout patterns** -- Which sections need grid? Which need comparison? (~5 min)
4. **Apply tokens + layouts** -- Build markup with grid/flex where needed (~20-30 min)
5. **Add zone backgrounds** -- Assign sparse/dense/breathing to sections (~5 min)
6. **Add dark header + footer** (~10 min)
7. **Add accessibility features** (~5 min)
8. **Verify soul + guardrails** (940px container, 32px padding floor, etc.) (~10 min)

**Total estimated time: 70-100 minutes**

### Reproducibility Assessment

**Reproducibility: HIGH (80-90%)**

Middle tier has MORE creative decisions than Floor but they are CONSTRAINED decisions:
- Which sections get grid layout? (Guided by content structure)
- Which zone backgrounds go where? (Guided by density rhythm rules)
- Where does spacing compress? (Guided by compositional-rules.md)

Two agents will produce pages that share the same visual structure but differ in:
- Specific grid column ratios
- Zone background assignment per section
- Callout placement and variant selection
- Header content layout

**Why high but not very high:** The 3 zone backgrounds, the spacing aliases, and the layout patterns are lookup-based. But WHERE to deploy them requires judgment.

### Quality Variance

**Variance: MODERATE**

Middle pages will differ more than Floor pages. The grid layouts, zone backgrounds, and density rhythms create visual fingerprints that vary by content structure. But the technique palette is constrained enough that pages still feel cohesive.

**The key differentiator:** Dark header + zone backgrounds + grid layout. These three together produce the threshold effect described in 03-implications-landscape.md Section 1.3: "At threshold -- content feels 'designed' rather than 'formatted.'"

---

## TIER 3: CEILING

**Target:** ~20-30% of pages. Pages with full tension-composition pipeline, metaphor-driven spatial organization, and deep mechanism deployment.

### What It Looks Like (Concrete CSS)

Ceiling is where the **tension-composition skill** gets invoked. The page has a METAPHOR that drives CSS decisions. The metaphor is NOT just labels -- it GENERATES CSS values. Backgrounds darken or warm based on metaphor logic. Padding compresses based on metaphor structure. Border weights encode metaphor semantics.

**Required CSS properties (in addition to Middle):**

```css
/* Metaphor-derived tokens (examples from OD-004 geological) */
--stratum-established-padding: var(--space-10); /* 40px */
--stratum-probable-padding: var(--space-8);     /* 32px */
--stratum-speculative-padding: var(--space-5);  /* 20px */
--stratum-open-padding: var(--space-4);         /* 16px */

/* Solid offset depth (pseudo-element) */
.featured-element::after {
  content: '';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: var(--color-text);
  z-index: -1;
}

/* Scroll-driven or conventional animation */
@keyframes arrive { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; } }
.reveal { animation: arrive 0.5s ease-out both; animation-timeline: view(); }

/* Transition grammar (3 types) */
.transition--smooth { margin: 48px 0; border-top: 1px solid var(--color-border); }
.transition--bridge { margin: 64px 0; background: var(--color-zone-breathing); padding: 32px; }
.transition--breathing { margin: 80px 0; border-top: 3px solid var(--color-border); }

/* Multiple responsive breakpoints with layout changes */
@media (max-width: 768px) { /* Grid collapse, padding compression */ }
@media (max-width: 480px) { /* Further mobile adjustments */ }
```

**Required mechanisms (from catalog):** 12-15 of 18

All 10 Middle mechanisms PLUS:

| # | Mechanism | How Deployed | CSS Lines |
|---|-----------|-------------|-----------|
| 1 | Border-Weight Gradient | Encode hierarchy/confidence via 4px/3px/1px | ~20 |
| 3 | Solid Offset Depth | ::after pseudo-element on 1-3 featured elements | ~15 |
| 6 | Width Variation | Narrow/wide sections for rhythm | ~10 |
| 12 | Progressive Disclosure | 3-4 phase density gradient across page | ~30 |
| 14 | Footer Mirror | Dark footer mirroring header | ~20 |

**Optional mechanisms (choose 2-3):**
- #8 Scroll Witness/Sticky TOC (for long pages)
- #15 Bento Grid with span variants (for modular content)
- #16 Drop Cap (for editorial openings)

**Quantitative profile (based on OD-004 as reference):**
- Custom properties: ~200-450
- @media queries: 3-5
- CSS class selectors: ~100-140
- Unique component types: 14-18
- Total CSS lines: ~700-1,000
- Total HTML lines: ~1,200-1,800
- Pseudo-elements: 3-6
- Grid/flex layouts: 4-8
- Positioned elements: 3-5
- Animations/transitions: 5-15

### What Makes Ceiling Different From Middle

The critical jump is **metaphor-driven CSS generation + deep mechanism deployment:**

1. **Metaphor generates CSS values** -- The metaphor doesn't just name zones ("lab zone", "safety briefing"). It DERIVES token values. OD-004's geological metaphor generates: border weights (4px/3px/2px/1px = confidence levels), padding amounts (40px→32px→20px→16px = density inverse of confidence), line heights (1.8→1.7→1.65→1.6), font sizes (15px→15px→14px→14px), and max-widths (720px for confident strata). The metaphor IS the specification.

2. **Transition grammar** -- Sections don't just follow each other. The transitions between sections are TYPED: smooth (same-axis, 48px + 1px), bridge (cross-axis, 64px + breathing zone), breathing (major shift, 80px + 3px). This creates intentional pacing.

3. **Solid offset depth** -- Featured elements get the ::after pseudo-element offset (4px x/y, #1A1A1A background, z-index: -1). This is the ONLY depth technique available (box-shadow: none). It signals editorial emphasis.

4. **Scroll-driven animation** -- Content reveals on scroll via animation-timeline: view(). Chromium-only with @supports fallback. Creates the "arriving wisdom" effect.

5. **Multi-variant callout system** -- 6 callout variants (essence, tip, checkpoint, warning, gotcha, note) deployed strategically. Max 2 per viewport.

6. **Metaphor-specific components** -- The metaphor may invent 2-5 new component classes that don't exist in the standard library. OD-004 invented: stratum boundaries, evidence DNA markers, confidence switcher, geological minimap, comparison grid. These are Tier 3 (compositional) components.

### Pipeline Steps Required (Full Tension-Composition Pipeline)

**Phase 0: Load + Content Assessment** (~10 min)
- Read prohibitions.md + tokens.css
- Classify content type (prose/mixed/visual)
- Scope assessment (word count, section count)

**Phase 1: Multi-Axis Questioning** (~15-20 min)
- Run FEEL/UNDERSTAND/DO/BECOME core four
- Run extended five (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE)
- Scan for structural trigger axes
- Produce axis yield table

**Phase 2: Tension Derivation** (~15-20 min)
- Map reader needs (Side A) against system constraints (Side B)
- Apply Addition Test (genuine vs cosmetic)
- Score richness (Opposition x Overlap x Width)
- Pass tension threshold gate

**Phase 3: Metaphor Collapse** (~20-30 min)
- Extract structural properties from both sides
- Find structural overlap
- Generate search query
- Score candidates (resolution, isomorphism, resonance, feasibility, perceptual risk, perceptual cost)
- Select winning metaphor

**Phase 3.5: Commitment Gate** (~5 min)
- Lock metaphor in writing
- Document justification
- Verify divergence from library

**Phase 4: Compositional Layout** (~30-60 min)
- Extract metaphor properties (5-category taxonomy)
- Translate via grammar lookup table
- Build HTML + CSS
- Coherence checking (5 rules)
- Fractal consistency (4 scales)

**Phase 5: Verification** (~15-20 min)
- Run perceptual audit (48 questions)
- Check guardrails (940px, 16px, 32px, 40%)
- Soul compliance

**Total estimated time: 110-165 minutes (first pass)**
**With audit/fix cycle: 150-220 minutes**

### Reproducibility Assessment

**Reproducibility: MODERATE (50-70%)**

This is where reproducibility drops significantly. The tension-composition pipeline has an **irreducible creative step** (Phase 3.4: metaphor recognition). Two agents given the same content will:

- **CONVERGE on:** Token values, soul compliance, accessibility, responsive breakpoints, component DNA
- **DIVERGE on:** Metaphor domain (geological vs architectural vs cartographic), component vocabulary (strata vs layers vs zones), specific CSS values generated by metaphor, transition placement, animation choices

**Evidence from Phase D:** Variants A-D given the same content produced 4 different metaphors: "lab environment" (B), geological (C), and library-based (D). The divergence is BY DESIGN (anti-gravity mechanisms R1, R5, R6).

**The reproducibility trade:** Ceiling CANNOT be highly reproducible without losing what makes it Ceiling. The metaphor-driven CSS generation is the source of both richness AND variance. To make it reproducible, you'd have to prescribe the metaphor -- which makes it Middle tier (template application, not creative derivation).

### Quality Variance

**Variance: HIGH**

Ceiling pages will look VERY different from each other. OD-004 (geological strata) looks nothing like a hypothetical cartographic page using the same token layer. This is the point -- each page is a "place" with unique spatial character.

**Risk:** High variance means quality control is harder. Phase D showed that even with the same skill, one agent (Variant B) produced 18/19 programmatic checks while another (Variant C) violated container width. The metaphor's conceptual logic can push agents toward perceptual violations (narrow containers for geological cores, excessive dead zones for floor plans).

**Mitigation:** Perceptual guardrails (Phase 4.0 in the skill) serve as non-negotiable floors: 940px container, 32px padding, 40% compression ratio, 45-80 CPL. These constrain the metaphor without killing it.

---

## TIER 4: FLAGSHIP

**Target:** ~5-10% of pages. Crown jewel showcase pages with maximum mechanism deployment, multi-pattern composition, and editorial flourishes.

### What It Looks Like (Concrete CSS)

Flagship is CD-006 level. It combines ALL prior techniques AND introduces editorial flourishes, multi-pattern composition, and composite components. The page deploys 5+ axis patterns, has explicit transition grammar, and operates at 5 fractal scales.

**Required CSS properties (in addition to Ceiling):**

```css
/* Drop caps */
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
  color: var(--color-primary);
}

/* Multiple axis patterns in one page */
.z-hero { display: grid; grid-template-columns: 1.618fr 1fr; }
.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.choreo-hub { text-align: center; border: 3px solid var(--color-border); }
.choreo-spokes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

/* Composite components (3-zone: label + principle + proof) */
.core-abstraction { border: 3px solid var(--color-border); }
.core-abstraction-label { /* meta zone */ }
.core-abstraction-principle { font-family: var(--font-display); font-style: italic; }
.core-abstraction-proof { background: var(--color-text); /* dark code block */ }

/* Reasoning component (2-column comparison + recommendation) */
.reasoning-columns { display: grid; grid-template-columns: 1fr 1fr; }
.reasoning-recommendation { border-top: 3px solid var(--accent-green); }

/* Task component with checkboxes */
.task-checkbox { width: 16px; height: 16px; border: 1px solid var(--color-border); }

/* File tree component */
.file-tree { font-family: var(--font-mono); line-height: 1.8; }
.file-tree-item--l1 { padding-left: var(--space-4); }
.file-tree-item--l2 { padding-left: var(--space-8); }

/* QA block */
.qa-question { font-family: var(--font-display); font-style: italic; border-left: 4px solid var(--color-primary); }

/* TOC with density annotations */
.toc-density { font-family: var(--font-mono); font-size: var(--type-meta); }

/* Footer mirroring header */
.page-footer { background: var(--color-text); border-top: 3px solid var(--color-primary); }

/* Syntax highlighting (7 token colors) */
--syntax-keyword: #E83025;
--syntax-string: #6B9B7A;
--syntax-comment: #666666;
--syntax-function: #4A7C9B;
--syntax-type: #C97065;
--syntax-number: #D97706;
--syntax-punctuation: #E0D5C5;

/* Print styles */
@media print { /* color overrides */ }
```

**Required mechanisms (from catalog):** 16-18 of 18 (nearly all)

All 12-15 Ceiling mechanisms PLUS:

| # | Mechanism | How Deployed | CSS Lines |
|---|-----------|-------------|-----------|
| 8 | Scroll Witness / Sticky TOC | TOC with active state tracking | ~35 |
| 15 | Bento Grid with span variants | Grid with --wide, --large modifiers | ~25 |
| 16 | Drop Cap | Editorial opening flourish | ~10 |

**PLUS multi-pattern composition:**
- 3-5 axis patterns deployed sequentially across sections
- Explicit transition grammar (smooth/bridge/breathing) between all section boundaries
- Composite components (3-zone: label + content + proof/code)
- 5-scale fractal self-similarity (navigation, page, section, component, character)

**Quantitative profile (based on CD-006 as reference):**
- Custom properties: ~450-650
- @media queries: 5+
- CSS class selectors: ~130-160
- Unique component types: 20-25
- Total CSS lines: ~1,000-1,500
- Total HTML lines: ~1,800-2,500
- Pseudo-elements: 4-8
- Grid/flex layouts: 8-15
- Positioned elements: 4-8
- Animations/transitions: 10-30
- Axis patterns deployed: 3-5
- Transition grammar instances: 5-8

### What Makes Flagship Different From Ceiling

1. **Multi-pattern composition** -- Ceiling deploys 1 metaphor across 1-2 axis patterns. Flagship deploys 1 metaphor across 3-5 axis patterns (Z-pattern hero, F-pattern content, Bento reference, Spiral strata, Choreography hub-spoke). Each section commits to ONE pattern (Rule C1), with typed transitions between them.

2. **Composite components** -- Beyond 2-zone DNA (label + body), Flagship invents 3-zone composites (label + principle + proof) like CD-006's Core Abstraction. These are page-specific inventions.

3. **Editorial flourishes** -- Drop caps, density-annotated TOC, version badges, page closing marks. These are the details that distinguish "professionally designed" from "well-formatted."

4. **Full fractal compliance at 5 scales** -- Navigation scale (TOC structure), page scale (section rhythm), section scale (component rhythm), component scale (label/body DNA), character scale (code comments/logic). All 5 must demonstrate the same rhythm.

5. **Complete accessibility + print** -- Skip-link, focus-visible, reduced-motion, SR-only utility, print styles. The full accessibility stack.

6. **Crown jewel divergences** -- Flagship pages may override 1-2 convention values with DOCUMENTED justification (e.g., CD-006 overrides --type-page from 2.5rem to 3rem, documented as "S9 crown jewel divergence"). This freedom is earned, not assumed.

### Pipeline Steps Required

Same as Ceiling (full tension-composition pipeline) PLUS:

**Additional Phase 4 work:** (~30-60 min extra)
- Design multi-pattern section composition
- Plan transition grammar for all section boundaries
- Invent composite components (if content demands them)
- Implement editorial flourishes
- Verify fractal at 5 scales (not just 4)
- Add print styles

**Additional Phase 5 work:** (~15-30 min extra)
- Multi-pass audit (build → audit → fix → re-audit)
- Cross-axis coherence check
- Transition grammar verification

**Total estimated time: 180-300 minutes (3-5 hours)**
**With multi-pass audit/fix: 240-400 minutes**

### Reproducibility Assessment

**Reproducibility: LOW (30-50%)**

Flagship is the tier where creative divergence is MAXIMIZED. Two agents will produce dramatically different pages because:

- Different metaphor selection (Phase 3 irreducible creativity)
- Different axis pattern sequencing (which of 5 patterns goes where)
- Different composite component inventions (page-specific)
- Different editorial flourishes
- Different crown jewel divergences

**Evidence:** CD-006 is a unique artifact. No other page in the design system looks like it. It was built with the full accumulated vocabulary of 4 prior pipeline stages (DD→OD→AD→CD), each of which contributed novel CSS techniques. Reproducing this level of synthesis requires an agent that has internalized (or read) the entire technique history.

**The key constraint:** Flagship pages require content with GENUINE deep tension (richness >= 18, ideally 27). Not all content qualifies. Flagship is reserved for content that naturally generates multi-axis compound tension -- philosophy + technique, paradigm-shift narratives, pilot demonstrations.

### Quality Variance

**Variance: VERY HIGH**

Every Flagship page is a unique composition. This is the explicit design goal. The anti-gravity mechanisms (R1, R5, R6) ensure that even similar content produces divergent metaphors.

**Risk:** Very high variance means some Flagship pages will fail. Phase D showed that even the best builder agents produce pages with perceptual violations (container width, dead zones) that require recovery agents. Budget for 1-3 audit/fix cycles.

---

## TIER TRANSITION ANALYSIS

### Floor → Middle: The Engagement Threshold

**What changes:**
| Dimension | Floor | Middle | Delta |
|-----------|-------|--------|-------|
| Layout | Block stacking | Grid + flex | +2-4 layout techniques |
| Visual depth | Flat | 1-3 pseudo-elements | +::after, ::selection |
| Zone backgrounds | Single color | 3-color system | +2 background tokens |
| Spacing | Uniform | Semantic aliases (within/between/chapter) | +density rhythm |
| Header | Optional | Dark header + 3px red border | +page identity |
| Accessibility | Minimal | Full (skip-link, focus, reduced-motion) | +WCAG compliance |
| Mechanisms | 5 | 8-10 | +3-5 mechanisms |

**Effort delta:** +40-55 minutes (+100% effort vs Floor)
**Richness gain:** The LARGEST relative gain. This is the threshold where content goes from "formatted" to "designed." The 03-implications-landscape calls this the point where "reader's eyes no longer drift off."

**Cost-benefit:** HIGHEST ROI tier transition. For ~45 extra minutes, you get spatial variety, density rhythm, visual identity, and accessibility. Every page should at least be Middle.

### Middle → Ceiling: The Metaphor Threshold

**What changes:**
| Dimension | Middle | Ceiling | Delta |
|-----------|--------|---------|-------|
| Metaphor | None | 1 metaphor drives CSS values | +creative derivation |
| CSS values | From tokens | From metaphor + tokens | +metaphor-derived properties |
| Transitions | Spacing only | 3-type grammar (smooth/bridge/breathing) | +typed transitions |
| Animation | None | Scroll-driven reveals | +animation-timeline |
| Solid offset | None | ::after depth on featured elements | +neobrutalist depth |
| Novel components | 0 | 2-5 Tier 3 components | +page-specific vocabulary |
| Mechanisms | 8-10 | 12-15 | +4-5 mechanisms |

**Effort delta:** +50-120 minutes (+70-120% effort vs Middle)
**Richness gain:** MODERATE relative gain. The metaphor adds atmosphere and memorability, but the structural richness (grid, flex, zones) was already established at Middle. The metaphor adds the "place" quality -- "I want to spend time here."

**Cost-benefit:** Moderate ROI. The metaphor adds the FEEL dimension (warmth, immersion, exploration) but requires the full tension-composition pipeline. Content without genuine tension gets marginal benefit.

### Ceiling → Flagship: The Synthesis Threshold

**What changes:**
| Dimension | Ceiling | Flagship | Delta |
|-----------|---------|----------|-------|
| Axis patterns | 1-2 | 3-5 per page | +multi-pattern composition |
| Components | Standard + 2-5 custom | Standard + 5-10 custom + composites | +3-zone composites |
| Editorial | Basic | Drop caps, density TOC, version badges | +editorial flourishes |
| Fractal | 4 scales | 5 scales (adds navigation) | +1 fractal scale |
| Print | None | Full print styles | +@media print |
| Transitions | 3-type | 3-type with explicit grammar per boundary | +typed per transition |
| Mechanisms | 12-15 | 16-18 | +2-4 mechanisms |

**Effort delta:** +70-180 minutes (+50-100% effort vs Ceiling)
**Richness gain:** MODERATE absolute gain but LOW marginal gain. Each additional mechanism and pattern adds less perceptual impact than the ones before it. The difference between a 14-mechanism Ceiling page and an 18-mechanism Flagship page is smaller than the difference between a 5-mechanism Floor and a 10-mechanism Middle.

**Cost-benefit:** LOWEST ROI tier transition. Flagship requires the most effort for the least marginal richness gain. Reserve for content that DEMANDS full synthesis (crown jewels, pilot demonstrations, philosophical anchors).

---

## COST-BENEFIT SUMMARY

| Tier | Mechanisms | CSS Lines | Build Time | Richness | Reproducibility | Marginal ROI |
|------|-----------|-----------|------------|----------|-----------------|-------------|
| Floor | 5 | 150-250 | 30-45 min | Baseline | 95%+ | N/A |
| Middle | 8-10 | 350-500 | 70-100 min | **3-4x Floor** | 80-90% | **HIGHEST** |
| Ceiling | 12-15 | 700-1,000 | 150-220 min | **5-6x Floor** | 50-70% | Moderate |
| Flagship | 16-18 | 1,000-1,500 | 240-400 min | **7-8x Floor** | 30-50% | Lowest |

### The Rigidity-Richness Curve

```
RICHNESS
    |
8x  |                                    *  Flagship
    |
6x  |                        *
    |                   Ceiling
4x  |            *
    |       Middle
2x  |
    |
1x  | * Floor
    |_________________________________
       0%   50%   70%   80%   95%  100%
                REPRODUCIBILITY
```

This is NOT a linear trade-off. The curve has a clear inflection point at **Middle tier** -- the point where you get the largest richness gain with the smallest reproducibility cost. Below Middle, you're paying almost nothing but getting almost nothing. Above Middle, each unit of richness costs exponentially more reproducibility.

---

## RIGIDITY IMPLICATIONS PER TIER

### Floor: Maximum Rigidity, Minimum Richness
- The token layer IS the rigidity. 65 locked tokens, 22 prohibitions, 3 soul constraints.
- Rigidity serves Floor perfectly: every agent produces compliant output because there's nothing to be creative about.
- **Rigidity cost:** Zero. Rigidity IS the value at this tier.

### Middle: High Rigidity + Guided Choice
- The mechanism catalog + compositional rules provide HIGH guidance but allow WHICH mechanisms to deploy.
- 11 compositional rules + 18 mechanisms create a menu, not a recipe. The agent chooses 8-10 from the menu.
- **Rigidity cost:** Low. The mechanism selection is constrained by content structure (data content → tables, hierarchical → border-weight). The rules HELP, not hinder.

### Ceiling: Moderate Rigidity + Creative Freedom
- The tension-composition pipeline provides PROCESS rigidity (6 phases, sequential gates, binary rules) but CREATIVE freedom (metaphor selection is irreducible).
- Anti-gravity mechanisms (R1, R5, R6) add rigidity AT THE PROCESS LEVEL to prevent pattern-matching, but they INCREASE creative variance.
- **Rigidity cost:** The pipeline's library prohibition (R1) means agents can't learn from prior examples during derivation. This makes each Ceiling page a fresh creative act, which increases time and reduces consistency. The perceptual guardrails (Phase 4.0) constrain the metaphor's CSS expression, preventing the worst violations but also capping some metaphorical extremes.

### Flagship: Process Rigidity + Maximum Creative Freedom
- Same pipeline rigidity as Ceiling but with MORE creative decisions (multi-pattern sequencing, composite component invention, editorial flourishes).
- Crown jewel divergences allow overriding conventions -- the ONLY tier where convention overrides are permitted.
- **Rigidity cost:** The pipeline's sequential gates add overhead but prevent runaway creative divergence. Without them, Flagship pages would be unconstrained -- some would be brilliant, most would fail. The gates are LOAD-BEARING rigidity: removing them would collapse quality, not improve it.

---

## RECOMMENDATIONS

### 1. Middle Should Be the Universal Floor

The data strongly suggests that **every page should be at least Middle tier**. The Floor→Middle transition has the highest ROI and crosses the engagement threshold. A page without grid layouts, zone backgrounds, or density rhythm fails to achieve the "designed" feeling regardless of token compliance.

**Implication for rigidity:** Making Middle the floor means encoding the Middle requirements into the always-load protocol. Agents building ANY page would be required to deploy at least 8 mechanisms, 3 zone backgrounds, 1 grid layout, and the dark header.

### 2. Ceiling Should Be the Target for Content with Tension

Content that passes the Addition Test (genuine tension exists) should default to Ceiling, not Middle. The metaphor is what transforms "designed" into "memorable." But content without tension should stay at Middle -- forcing metaphor onto API references produces worse output than competent assembly.

### 3. Flagship Should Be Intentionally Rare

The marginal richness gain of Flagship over Ceiling does not justify doubling the build time for most content. Reserve Flagship for:
- Anchor content (the page readers encounter first)
- Content that demonstrates the design system itself
- Content with deep multi-axis compound tension (RECONCILE + IDENTIFY, NAVIGATE + COMPARE)
- Crown jewels where quality > speed

### 4. Rigidity Is Load-Bearing at Every Tier

The data shows that rigidity at each tier serves a DIFFERENT function:
- **Floor:** Rigidity IS the output (token compliance)
- **Middle:** Rigidity GUIDES choice (mechanism selection from menu)
- **Ceiling:** Rigidity CONSTRAINS process (pipeline gates prevent pattern-matching)
- **Flagship:** Rigidity CATCHES failure (guardrails prevent metaphor-driven violations)

Removing rigidity at any tier collapses that tier's function. The question is not "should we have less rigidity?" but "is each tier's rigidity serving its intended function?"

---

## OPEN QUESTIONS

1. **Can Middle be templated?** If Middle is the universal floor, could there be 3-4 Middle templates (tutorial-layout, essay-layout, reference-layout, comparison-layout) that agents select and populate? This would push Middle reproducibility from 80-90% to 95%+ while preserving spatial variety.

2. **Is there a Tier 1.5?** Some content benefits from more than Floor but less than Middle. A page with correct tokens, dark header, and zone backgrounds but no grid layouts -- is this worth codifying? Or does grid/flex come so cheaply that it should always be included?

3. **How does content classification map to tiers?** The 03-implications-landscape proposes: API refs → Floor, tutorials → Middle, essays → Ceiling, philosophical anchors → Flagship. Is this correct? Or do some tutorials warrant Ceiling (metaphor-driven tutorials)?

4. **What happens to the anti-gravity mandate at Middle?** Middle has no metaphor to diverge. Does Middle need its own anti-sameness mechanism, or is the content structure naturally diverse enough?

---

**END TIER SPECIFICATIONS**
