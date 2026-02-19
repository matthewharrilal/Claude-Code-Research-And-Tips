# Scale-Channel Activation Audit

**Auditor:** Scale-Channel Activation Auditor (Opus 4.6)
**Date:** 2026-02-17
**Sources Read:**
- `ephemeral/flagship-experiment/07-intentionality.html` (2,034 lines)
- `ephemeral/flagship-audit/10-REMEDIATION-PROMPT.md` (301 lines)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (1,219 lines)
- `ephemeral/flagship-retrospective/09-SYNTHESIS.md` (268 lines)
- `ephemeral/flagship-retrospective/06-cd006-css-forensics.md` (581 lines)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (first 150 lines + cross-reference)
- `ephemeral/ceiling-experiment/_scale-exploration/06-adversarial-anti-scale.md` (anti-scale thesis)

---

## EXECUTIVE SUMMARY

**Channel Activation Score (Current): 3/7 perceptibly active** (Ch1 BARELY, Ch2 BARELY, Ch4 TABLES-ONLY)
**Channel Activation Score (Post-Remediation): 5/7 perceptibly active** (Ch1 YES, Ch2 YES, Ch3 PARTIAL, Ch4 YES, Ch7 NO)
**Scale 5 Coverage (Current): 3/5 levels with distinct treatment**
**Scale 5 Coverage (Post-Remediation): 4/5 levels with distinct treatment**

The remediation substantially improves Ch1 (Chromatic), Ch2 (Typographic), and Ch4 (Structural) from sub-perceptual to perceptible. However, it does NOT address Ch5 (Temporal), Ch6 (Behavioral), or Ch7 (Material). Ch5 and Ch6 are the channels that create PRODUCTION QUALITY (accessibility, responsiveness, interactivity). Ch7 is constrained by soul (no shadows, no gradients, no opacity). The remediation takes the page from "technically deployed but invisible" to "perceptibly varied" on 4-5 channels, which is a significant improvement but falls short of CD-006's 7/7.

---

## CHANNEL-BY-CHANNEL ANALYSIS

### Ch1: Typographic (font-size, weight, family variation)

**Current State:**
- Font-size: 9 distinct values defined, but body paragraphs are uniformly 16px across ALL 12 sections
- Font-weight: All paragraph text is 400. All h2 headings are 400. Zero weight variation in body.
- Font-family: 3 families used (Instrument Serif, Inter, JetBrains Mono) -- appropriate but family SWITCHING is limited to headings/labels/code
- Letter-spacing: Varies from -0.003em to 0.01em across zones -- range is 0.013em = 0.208px at 16px. Below the 0.5px perceptual threshold.

**Perceptible?** NO (sub-threshold on size, weight, and letter-spacing variation in body)

**Target State:** Font-size varies >= 2px between zones. Font-weight varies (400 vs 600). Letter-spacing varies >= 0.03em.

**Remediation Gets There?** MOSTLY YES

Remediation Phase 2A specifies:
- Zone 1 body: 17px (vs Zone 2: 15px) = 2px delta. MEETS threshold.
- Zone 1 line-height: 1.85 vs Zone 2: 1.6 = 0.25 difference = ~4px at 16px. MEETS threshold.

Remediation Phase 2B specifies:
- Zone 1 h2: 30px/400 vs Zone 2 h2: 26px/600 = 4px size delta + weight jump. MEETS threshold.
- Zone 3 h2: 28px/400. Creates 3-way differentiation. GOOD.

Remediation Phase 2C specifies:
- Zone 1 letter-spacing: 0.02em vs Zone 2: -0.01em = 0.03em delta = 0.48px at 16px. BORDERLINE. At 16px, this is 0.48px -- technically below the stated 0.5px floor but close enough to be marginally perceptible, especially cumulatively across a paragraph.

**Exact CSS values needed (with perceptual magnitude floors):**
```css
/* Paragraph font-size: >= 2px variation between zones */
.zone-s1 p, .zone-s2 p, .zone-s3 p { font-size: 17px; }  /* +1px vs base */
.zone-s5 p, .zone-s7 p, .zone-s8 p { font-size: 15px; }  /* -1px vs base */
/* Delta: 2px. PASSES. */

/* Heading weight: visible jump 400 vs 600 */
.zone-s5 h2, .zone-s7 h2, .zone-s8 h2 { font-weight: 600; }
/* Delta: 200 weight units. PASSES. */

/* Letter-spacing: >= 0.03em range */
.zone-s1 p { letter-spacing: 0.025em; }  /* 0.4px at 16px */
.zone-s5 p { letter-spacing: -0.01em; }   /* -0.16px at 16px */
/* Delta: 0.035em = 0.56px. PASSES (barely). */
/* RECOMMENDATION: Increase Zone 1 to 0.03em for safer margin. */
```

**Verdict: YES, remediation activates Ch1. Minor adjustment recommended on letter-spacing.**

---

### Ch2: Chromatic (background colors, text colors, border colors)

**Current State:**
- Background colors: 18 zone variables defined, but only 5 are perceptibly distinct (see forensics report 06, Section 3). S1/S3 differ by 1-2 RGB points. S4/S6/S9 differ by 2-6 RGB points from neighbors. The 12-zone per-section background system is TECHNICALLY present but VISUALLY absent.
- Text colors: Body paragraphs uniformly #1A1A1A. Heading color shifts are 1-12 RGB points (#2A2420 vs #1E1B18 vs #221F1A) -- imperceptible without a color picker.
- Border colors: Table header borders vary (#5C4B3A vs #4A3F35) by 18/12/5 RGB -- borderline perceptible.

**Perceptible?** BARELY (dark header/footer provide dramatic contrast; body sections look uniform)

**Target State:** Adjacent section backgrounds differ by >= 10 RGB points. At least 3 perceptibly distinct background groups in body.

**Remediation Gets There?** YES

Remediation Phase 3A replaces zone backgrounds:
- S1: #FEF5EB (warm peach) vs S2: #F5EDE2 (warm tan) = delta R:9, G:8, B:9. BORDERLINE at minimum.
- S2: #F5EDE2 vs S3: #FBF3E8 = delta R:6, G:6, B:6. BELOW threshold. PROBLEM.
- S3: #FBF3E8 vs S4: #F8F6F3 = delta R:3, G:3, B:5. BELOW threshold. PROBLEM.
- S4: #F8F6F3 vs S5: #FFFFFF = delta R:7, G:9, B:12. BORDERLINE.
- S5: #FFFFFF vs S6: #F5F0E8 = delta R:10, G:15, B:23. PASSES.
- S6: #F5F0E8 vs S7: #FAFAFA = delta R:5, G:10, B:18. PARTIAL.
- S7: #FAFAFA vs S8: #F5F5F5 = delta R:5, G:5, B:5. BELOW threshold. PROBLEM.

**Assessment:** The remediation IMPROVES backgrounds significantly -- Zone 1 (warm), Zone 2 (cool), Zone 3 (refined warm) are now distinguishable as GROUPS. But within-zone adjacent sections (S2-S3, S3-S4, S7-S8) still have sub-threshold deltas. The perceptual test is: "Can a reader scrolling at normal speed NOTICE when they move from Section 7 to Section 8?" With S7=#FAFAFA and S8=#F5F5F5, the answer is NO (5 RGB point delta).

**Exact CSS values needed (with >= 15 RGB point minimum between adjacent sections):**

The remediation's values are a substantial improvement but do not consistently meet their own stated >= 10 RGB floor. To achieve >= 15 RGB between adjacent sections, the zone system needs more aggressive differentiation:

```css
/* RECOMMENDED amplification beyond remediation values */
--color-zone-s1: #FEF2E4;  /* warmer peach -- delta from s2: R:9, G:9, B:12 */
--color-zone-s2: #F5E9D8;  /* warm tan -- delta from s3: R:8, G:8, B:10 */
--color-zone-s3: #FDF1E2;  /* honey -- delta from s4: R:5, G:7, B:13 */
/* These are still marginal. The fundamental problem: warm-cream-only palette
   has insufficient gamut for 12 perceptibly distinct sections. */
```

**The deeper issue:** 12 per-section backgrounds within the warm cream palette CANNOT all be perceptibly distinct. The remediation correctly identifies 3 ZONE GROUPS (warm/cool/refined) but does not acknowledge that within-group differentiation will always be sub-perceptual. The fix is to accept 3-4 perceptibly distinct background groups (matching zones) rather than pursuing 12.

**Verdict: YES, remediation activates Ch2 at the zone level. Within-zone section differentiation remains sub-perceptual, which is acceptable if the metaphor arc (warm variety -> cool convergence -> unified warmth) is the goal.**

---

### Ch3: Spatial (margins, paddings, gaps between elements)

**Current State:**
- Section padding: Varies from 32px (Zone 2) to 80px (S2 pullquote). 5 distinct values. This IS perceptible.
- Paragraph margins: Uniformly 16px (`var(--space-4)`) across ALL sections. Zero variation.
- Max-width: 7 distinct values (960px, 68ch, 640px, 90%, 85%, 80%, 60ch). This IS varied.
- Component margins: Zone-specific (space-8 in Zone 1, space-4 in Zone 2). This IS perceptible.

**Perceptible?** PARTIALLY (section-level spacing varies; paragraph-level spacing is uniform)

**Target State:** Paragraph margins vary >= 8px between zones. Max-width varies per zone.

**Remediation Gets There?** PARTIALLY

Remediation Phase 4A specifies:
- Zone 1 paragraph margin: 20px, max-width: 62ch
- Zone 2 paragraph margin: 12px, max-width: 72ch
- Zone 3 paragraph margin: 18px, max-width: 64ch
- Delta Zone 1 vs Zone 2: 8px margin, 10ch width. MEETS threshold.

Remediation Phase 4B specifies asymmetric section padding:
- Zone 1: padding-top 64px, padding-bottom 40px (asymmetric)
- Zone 2: padding-top 32px, padding-bottom 32px (symmetric, compressed)
- Zone 3: padding-top 48px, padding-bottom 40px (slightly asymmetric)

**Gap:** The remediation does NOT address the stacking loophole (RC-14 from synthesis). Adjacent section boundaries can still create 210-276px voids when section-bottom-padding + divider-margin + section-top-padding stack. Synthesis recommends max 120px total gap between content. The remediation reduces divider-breathing margin from --space-20 (80px) to --space-16 (64px), which helps but does not fully resolve:
- Worst case post-remediation: 32px (s8 padding-bottom) + 64px (divider-breathing margin top) + 64px (divider-breathing margin bottom) + 48px (s9 padding-top) = 208px. Still above 120px target.

**Exact CSS values needed:**
```css
/* Paragraph margins: >= 8px variation between zones */
.zone-s1 p { margin-bottom: 20px; max-width: 62ch; }
.zone-s5 p { margin-bottom: 12px; max-width: 72ch; }
/* Delta: 8px margin, 10ch width. PASSES. */

/* Gap stacking fix: cap total transition space */
.divider-breathing { margin: 40px 0; }  /* was 80px, reduced to prevent void */
/* Total worst case: 32px + 40px + 40px + 48px = 160px. Still high. */
/* RECOMMENDATION: Further reduce to margin: 32px 0 for 152px total. */
```

**Verdict: PARTIALLY. Paragraph-level variation is addressed. The stacking loophole is partially addressed but not fully resolved.**

---

### Ch4: Structural (borders, dividers, containment boxes)

**Current State:**
- CRITICAL ABSENCE. Ch4 is completely missing from the page body.
- Tables have borders (14 border contexts total -- see forensics Section 4).
- Component-blocks have 4px LEFT borders only. No containment.
- Zero section-level structural borders.
- Dividers (.divider-smooth, .divider-bridge, .divider-breathing) exist but are nearly invisible: 1px height in border-subtle color.
- CD-006 benchmark: 23 border contexts, 11 components with 3px containment.

**Perceptible?** NO (tables only; body components and sections have no visible borders)

**Target State:** >= 6 elements with visible border in body (not header/footer). Dividers clearly differentiated.

**Remediation Gets There?** YES

Remediation Phase 1A adds section-level left borders to 6 of 12 sections:
- S2: 4px solid var(--color-border) -- neutral structural
- S5: 4px solid var(--color-primary) -- RED, high emphasis
- S7: 3px solid var(--color-border) -- moderate structural
- S9: 3px solid var(--color-text) -- dark, analytical
- S10: 3px solid var(--color-coral) -- warning/coral
- S12: 4px solid var(--color-text) -- dark, bookend weight

This creates alternating presence/absence (rhythm) with 4 distinct border colors and 2 distinct weights (3px/4px). GOOD.

Remediation Phase 1B amplifies dividers:
- .divider-smooth: color upgraded to --color-border (from --color-border-subtle). More visible.
- .divider-bridge: height 2px (from 1px), color upgraded to --color-text. Clearly stronger.
- .divider-breathing: height 4px (from 3px), color upgraded to --color-primary (RED). Maximum impact.

This creates a 3-tier divider hierarchy: 1px/neutral -> 2px/dark -> 4px/red. Each is perceptibly distinct. GOOD.

Remediation Phase 1C adds containment to component blocks:
- border-top: 1px solid var(--color-border)
- background-color: var(--color-zone-breathing)

This transforms component-blocks from "left-border-only" to "contained element with background." GOOD.

**Exact CSS values needed:**
```css
/* Section borders: >= 2px difference between weights */
.zone-s5 .page-container { border-left: 4px solid var(--color-primary); }  /* max weight */
.zone-s7 .page-container { border-left: 3px solid var(--color-border); }   /* moderate */
/* Delta: 1px weight + color difference. PASSES visual differentiation. */

/* Divider hierarchy: 3 clearly distinct levels */
.divider-smooth    { height: 1px; background: var(--color-border); }
.divider-bridge    { height: 2px; background: var(--color-text); }
.divider-breathing { height: 4px; background: var(--color-primary); }
/* All three are visually distinct: neutral/dark/red, 1px/2px/4px. PASSES. */

/* Component containment: visible top border + background */
.component-block { border-top: 1px solid var(--color-border); background: var(--color-zone-breathing); }
```

**Verdict: YES, remediation fully activates Ch4. This is the single highest-impact improvement in the remediation.**

---

### Ch5: Temporal (scroll-triggered animations, transitions, reveals)

**Current State:**
- Zero CSS transitions in the page body.
- Zero scroll-triggered effects.
- Zero opacity animations or reveal sequences.
- The only "temporal" element is the static progressive disclosure (S11 hypothesis tables with increasing spacing), which is spatial, not temporal.

**Perceptible?** NO (completely absent)

**Target State:** At minimum: smooth scroll-behavior, or opacity-based section reveals, or transition on hover states.

**Remediation Gets There?** NO

The remediation prompt (301 lines) contains ZERO mention of transitions, animations, scroll-behavior, opacity, or any temporal CSS property. Ch5 is completely unaddressed.

**What's needed (minimum viable Ch5):**
```css
/* Smooth scrolling (whole page) */
html { scroll-behavior: smooth; }

/* OR: Link hover transitions */
a { transition: color 0.2s ease; }

/* OR: Section opacity reveals (requires IntersectionObserver JS) */
/* Cannot be CSS-only for scroll-triggered. */
```

Note: True Ch5 activation (scroll-triggered reveals) requires JavaScript (IntersectionObserver), which is beyond the CSS-only remediation constraint. The minimum CSS-only Ch5 is `scroll-behavior: smooth` + hover transitions, which is minimal but technically "temporal."

**Verdict: NO. Remediation does not address Ch5. Minimum fix is 2-3 CSS lines (smooth scroll + hover transitions).**

---

### Ch6: Behavioral (hover, focus, selection, reduced-motion, responsive)

**Current State:**
- Zero `:hover` states in body CSS.
- Zero `:focus-visible` styling.
- Zero `::selection` styling.
- Zero `@media (prefers-reduced-motion)`.
- Zero responsive breakpoints (`@media (max-width: ...)`).
- CD-006 benchmark: 5 @media queries (reduced-motion, print, 960px, 768px, 480px) + skip link + focus-visible + ::selection + 17 role="note" + 21 aria-label.

**Perceptible?** NO (completely absent)

**Target State:** At minimum: ::selection, focus-visible, prefers-reduced-motion, and one responsive breakpoint (768px).

**Remediation Gets There?** NO

The remediation prompt contains ZERO mention of hover states, focus-visible, ::selection, @media queries, or any behavioral CSS. The synthesis report (09-SYNTHESIS.md, Part 4) flags this as BLOCKING gap #1: "Zero mention of ::selection, focus-visible, prefers-reduced-motion, skip link, ARIA labels, or responsive breakpoints."

**What's needed (minimum viable Ch6):**
```css
/* Selection styling */
::selection { background: var(--color-primary); color: var(--color-background); }

/* Focus visible */
*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}

/* Responsive -- 768px minimum */
@media (max-width: 768px) {
  .page-header h1 { font-size: 28px; }
  .table-wrapper { overflow-x: auto; }
  .narrow-table-wrapper, .pullquote-wrapper, .tension-group { max-width: 100%; margin-left: 0; }
}

/* Hover on component blocks */
.component-block:hover { border-left-width: 5px; }
table tbody tr:hover td { background-color: var(--color-zone-breathing); }
```

**Estimated lines: ~30 CSS lines. No reason to omit.**

**Verdict: NO. Remediation does not address Ch6. This is the BLOCKING gap identified in synthesis Part 4. ~30 lines of CSS would fully activate it.**

---

### Ch7: Material (shadows, gradients, textures, opacity variation)

**Current State:**
- `box-shadow: none !important` -- soul constraint (U-02)
- `border-radius: 0 !important` -- soul constraint (U-10)
- Zero gradients -- soul constraint (U-01)
- Zero opacity variation -- soul constraint
- The ONLY Ch7 expression possible under soul constraints: outline/outline-offset (used on pullquote -- .master-insight outline: 2px solid), and the solid-offset pseudo-element technique (Mechanism #3).

**Perceptible?** BARELY (pullquote outline-offset creates subtle depth; otherwise absent)

**Target State:** Within soul constraints: solid-offset depth on 1-2 featured elements. Outline treatment on featured components. NO shadows, NO gradients, NO opacity.

**Remediation Gets There?** NO (not addressed at all)

The remediation does not mention solid-offset depth, outline treatments, or any Ch7 CSS. The pullquote's existing outline-offset is the sole Ch7 expression and is untouched.

**What's possible under soul constraints:**
```css
/* Solid offset depth (Mechanism #3) on featured table */
.table-featured { position: relative; }
.table-featured::after {
  content: '';
  position: absolute;
  top: 4px; left: 4px;
  width: 100%; height: 100%;
  background: var(--color-text);
  z-index: -1;
}

/* Outline treatment on code blocks */
.sequence-block { outline: 2px solid var(--color-border); outline-offset: 4px; }
```

**Verdict: NO. Ch7 is soul-constrained. The remediation does not add any Ch7 expression. 2 elements with solid-offset or outline-offset would technically activate it at LOW level.**

---

## CHANNEL SUMMARY TABLE

| Channel | Current State | Perceptible? | Target State | Remediation Gets There? | Gap |
|---------|--------------|-------------|-------------|------------------------|-----|
| Ch1 Typographic | 9 sizes defined, body uniform 16px/400, letter-spacing 0.096px range | NO | Size >=2px variation, weight 400/600, letter-spacing >=0.03em | **YES** (mostly) | Letter-spacing borderline at 0.48px |
| Ch2 Chromatic | 18 zone vars, 5 perceptibly distinct, heading colors 1-12 RGB delta | BARELY | >=10 RGB between adjacent sections, 3+ distinct zone groups | **YES** (zone-level) | Within-zone adjacent sections still sub-perceptual (S2-S3: 6 RGB) |
| Ch3 Spatial | Section padding varies (32-80px), paragraph margins uniform 16px | PARTIALLY | Paragraph margins >=8px variation, asymmetric section padding | **PARTIALLY** | Stacking loophole not fully resolved (208px worst case) |
| Ch4 Structural | ABSENT from body. Tables only. Dividers invisible. | NO | >=6 body elements with visible border, 3-tier divider hierarchy | **YES** | Fully addressed. Highest-impact improvement. |
| Ch5 Temporal | Zero transitions, animations, scroll effects | NO | At minimum: smooth-scroll + hover transitions | **NO** | Completely unaddressed. 2-3 CSS lines needed. |
| Ch6 Behavioral | Zero hover/focus/selection/responsive/@media | NO | ::selection, focus-visible, reduced-motion, 768px breakpoint | **NO** | BLOCKING gap. ~30 CSS lines needed. |
| Ch7 Material | Soul-constrained. Pullquote outline only. | BARELY | 1-2 solid-offset or outline-offset elements | **NO** | Not addressed. ~10 CSS lines possible under soul. |

**Score:**
- Current: 3/7 barely/partially active (Ch2, Ch3, Ch7 at sub-perceptual levels)
- Post-Remediation: 5/7 (Ch1 YES, Ch2 YES, Ch3 PARTIAL, Ch4 YES, Ch5-Ch7 NO)
- With recommended additions (~45 lines): 7/7

---

## SCALE 5 ASSESSMENT

### Scale 5: Five Nested Levels of Detail

The mechanism catalog defines 5 scales:
1. **Navigation (bird's eye)** -- Header, TOC, page-level nav
2. **Page (the scroll)** -- How sections sequence across the full page
3. **Section (one screen)** -- How components arrange within a section
4. **Component (one element)** -- How content organizes inside a single component
5. **Character (inline)** -- Text-level styling: bold, code, emphasis

#### Level 1: Page Level -- DISTINCT TREATMENT EXISTS

**Current:** Dark header (bg: #1A1A1A, 3px red bottom border) + dark footer (matching). 960px container. Clear page frame.

**Post-Remediation:** Unchanged (already the strongest level). The remediation preserves the header/footer bookend structure. The new section-level left borders (6 of 12 sections) will add a scroll-level structural signal.

**Verdict: YES (already good, remediation preserves)**

#### Level 2: Zone Level -- PARTIALLY DISTINCT

**Current:** 3 zones defined (Orient/Deepen/Synthesize) with section padding variation (64px/32px/40px) and zone background tints. But zone backgrounds are sub-perceptual (2-6 RGB delta).

**Post-Remediation:** Zone backgrounds become perceptible (10-20 RGB delta between zone groups). Zone 2 headings gain font-weight: 600 (vs Zone 1/3 at 400). Paragraph margins change per zone (20px/12px/18px). Section-level left borders appear in selected sections, providing structural zone markers.

**Verdict: YES (remediation transforms zone-level from sub-perceptual to perceptible)**

#### Level 3: Section Level -- PARTIALLY DISTINCT

**Current:** 12 sections with per-section zone backgrounds (sub-perceptual), per-section meta labels (.section-meta), and varying section padding. Table variants provide structural variety in sections that have tables. But non-table sections (S1, S2, S6, S12) have minimal internal differentiation.

**Post-Remediation:** Sections gain left borders (6 of 12), amplified dividers between sections, and per-zone paragraph spacing. Component blocks gain containment (top border + background). This makes sections with components visually richer. However, text-only sections (S1, S6, S12) still lack internal structural variety -- they are body paragraphs with headings and nothing else.

**Verdict: PARTIALLY (sections with components/tables improve; text-only sections remain plain)**

#### Level 4: Component Level -- DISTINCT TREATMENT EXISTS

**Current:** Component blocks have 2-zone DNA (mono label + body text) with 4px left border. Table variants have 7 distinct treatments (compact/dense/featured/moderate/warning/light/findings). Sequence blocks have dark background with mono font. These ARE perceptibly distinct from each other.

**Post-Remediation:** Component blocks gain containment (top border + background tint). Callout variants gain differentiated backgrounds (.warm = #FEF9F0 amber, .resolution = #F5FAF5 green). This enhances component-level distinctiveness.

**Gap:** The remediation does NOT create new component TYPES. Flagship still has 3 component shapes (component-block, sequence-block, pullquote) vs CD-006's 11. CSS-only remediation cannot add new component types -- that requires HTML restructuring. This is a structural limitation acknowledged in the synthesis (RC-12).

**Verdict: YES (existing components improve; but structural variety ceiling exists)**

#### Level 5: Element Level (Character/Inline) -- BARELY DISTINCT

**Current:** Drop cap on S1 first paragraph (primary red, serif, 3.5em). Inline code exists but is not styled distinctly (no background, no border). Finding numbers (.findings-num) use mono/red. Table header text uses mono/uppercase/0.08em letter-spacing. These ARE distinct from body text.

**Post-Remediation:** No change at this level. The remediation does not add ::selection, inline code styling, or any element-level CSS.

**Gap:** Element-level (inline) richness requires: ::selection styling, inline code with background+border, strong/em with distinct treatment, link hover states. None of these are in the remediation.

**Verdict: BARELY (drop cap + mono labels exist; inline code, selection, links unstyled)**

### Scale 5 Summary

| Level | Distinct Treatment? | Post-Remediation? | Key Gap |
|-------|--------------------|--------------------|---------|
| 1. Page | YES | YES (preserved) | None |
| 2. Zone | PARTIAL (sub-perceptual) | YES (perceptible) | None -- remediation fixes this |
| 3. Section | PARTIAL | PARTIAL+ | Text-only sections lack structural variety |
| 4. Component | YES | YES (enhanced) | Only 3 component types (vs CD-006's 11) |
| 5. Element | BARELY | BARELY | No ::selection, no inline code styling, no link states |

**Post-remediation Scale 5 coverage: 4 of 5 levels** (Level 5/Element remains under-served)

**To achieve 5/5:** Add ~15 lines of element-level CSS:
```css
/* Inline code styling */
code:not(pre code) {
  background: var(--color-zone-breathing);
  border: 1px solid var(--color-border-subtle);
  padding: 1px 4px;
  font-size: 0.9em;
}

/* Selection */
::selection { background: var(--color-primary); color: var(--color-background); }

/* Link styling (if any links exist) */
a { color: var(--color-primary); text-decoration: underline; }
a:hover { text-decoration: none; }

/* Strong emphasis */
strong { font-weight: 600; color: var(--color-text); }
em { font-style: italic; }
```

---

## BEYOND SCALE 5: CHANNELS, NOT LEVELS

Per the anti-scale research (06-adversarial-anti-scale.md) and the scale exploration findings:

### Key Finding: 5 Scales Is the Mathematical Ceiling

The Alexander/Salingaros formula establishes that beyond 5 scales, adding LEVELS produces diminishing returns. The ceiling experiment confirmed this: 4-scale deployment produced WORSE perceptual quality than 2-scale deployment (Middle experiment), because the additional scales were filled with sub-perceptual micro-modulation rather than meaningful content.

### The Anti-Scale Thesis: Semantic Density, Not Scale Count

The anti-scale research proposes:
```
Richness = semantic density x restraint x spatial confidence
```

The flagship's failure was NOT insufficient scale depth (it had 4-5 scales of micro-typography). The failure was insufficient SEMANTIC DENSITY -- 22% of CSS budget spent on imperceptible letter-spacing shifts. The remediation correctly addresses this by redirecting CSS budget from micro-modulation to visible structural variety.

### What CHANNELS Should Be Added (Not Levels)?

Per the anti-scale model, beyond 5 scales the correct lever is CHANNEL breadth (how many independent visual dimensions carry meaning), not LEVEL depth (how many zoom levels the same meaning appears at).

The flagship currently has strong investment in 2 channels:
1. Zone backgrounds (Ch2 chromatic -- metaphor arc)
2. Typography micro-modulation (Ch1 -- but sub-perceptual)

The remediation adds 2 more channels effectively:
3. Structural borders (Ch4 -- highest impact)
4. Amplified typography (Ch1 -- now perceptible)

**Channels that should be added per anti-scale research:**

| Channel to Add | Mechanism | Lines Needed | Why |
|----------------|-----------|-------------|-----|
| **Behavioral (Ch6)** | ::selection, focus-visible, reduced-motion, responsive | ~30 | Production quality. CD-006 has 5 @media. Every professional page needs this. |
| **Temporal (Ch5)** | smooth-scroll, hover transitions | ~5 | Minimal but activates a dormant channel. |
| **Material (Ch7)** | Solid-offset on 1-2 featured elements | ~10 | Depth without shadows. Mechanism #3. |
| **Component variety** | Differentiated callout backgrounds/borders per type | ~15 | Already partially addressed in Phase 5A. |
| **Layout pattern** | At least 1 grid or flex layout in 1 section | ~15 | Breaks single-column monotony. Requires HTML. |

**Total to achieve 7/7 channels with meaningful activation: ~75 additional CSS lines beyond the current remediation.**

---

## PERCEPTUAL MAGNITUDE FLOOR REFERENCE TABLE

For every CSS property used in channel activation, the minimum perceptible delta:

| Property | Minimum Perceptible Delta | Remediation Achieves? | Notes |
|----------|--------------------------|----------------------|-------|
| Background color (adjacent sections) | >= 15 RGB points between ANY two R/G/B channels | PARTIALLY (zone boundaries yes; within-zone no) | S2-S3 at 6 RGB = sub-perceptual |
| Letter-spacing | >= 0.025em range (= 0.4px at 16px) | BORDERLINE (0.035em range = 0.56px) | Increase Zone 1 to 0.03em recommended |
| Border weight | >= 2px difference between levels | YES (1px/2px/3px/4px hierarchy) | Divider 3-tier + section border 2-tier |
| Font-size | >= 2px variation between zones | YES (15px vs 17px = 2px delta) | Meets floor exactly |
| Font-weight | Visible jump: 400 vs 600+ | YES (Zone 1: 400, Zone 2: 600) | Clear visual distinction |
| Line-height | >= 0.2 unit difference (= ~3.2px at 16px) | YES (1.6 vs 1.85 = 0.25) | Meets threshold |
| Margin-bottom (paragraph) | >= 8px between zones | YES (12px vs 20px = 8px) | Meets floor exactly |
| Max-width (paragraph) | >= 6ch between zones | YES (62ch vs 72ch = 10ch) | Exceeds floor |

---

## CRITICAL FINDINGS

### Finding 1: Remediation achieves 5/7 channels but misses the "production quality" trio (Ch5/Ch6/Ch7)

Ch5, Ch6, Ch7 represent the difference between a PROTOTYPE and a PRODUCTION page. CD-006 scores 8/8 on accessibility precisely because it has all three. The remediation treats them as optional; the synthesis flags Ch6 as BLOCKING. The fix is ~45 CSS lines total across all three channels.

### Finding 2: Scale 5 is achieved at 4/5 levels; Level 5 (Element) needs ~15 lines

Element-level richness (inline code styling, ::selection, link states) is trivially achievable and has outsized perceptual impact -- every text selection, every inline code fragment, every link becomes a micro-moment of design intentionality.

### Finding 3: Within-zone background differentiation hits a fundamental gamut limit

The warm cream palette (R: 240-254, G: 232-252, B: 210-245) has approximately 35 RGB points of total gamut. Dividing this among 12 sections gives ~3 RGB points per section -- always below the 15-point perceptual threshold. The remediation should accept 3-4 zone groups as the maximum perceptible background differentiation and stop pursuing 12-section granularity.

### Finding 4: The stacking loophole is reduced but not eliminated

Post-remediation worst case gap is 208px (S8->S9 transition). The synthesis recommends 120px maximum. The remediation's divider-breathing margin reduction to --space-16 (64px) helps but the margin is still applied as `margin: var(--space-16) 0` which means 64px top + 64px bottom = 128px from divider alone, before adding section padding. The fix requires either (a) asymmetric divider margins or (b) further reduction to 32px.

### Finding 5: Channel BREADTH is more valuable than scale DEPTH for remediation

The anti-scale research's strongest finding applies directly: the flagship already has good scale depth (4-5 levels with SOME treatment). What it lacks is channel breadth (3/7 channels perceptible). The remediation correctly prioritizes breadth (adding Ch4, amplifying Ch1/Ch2) over depth (not adding Scale 6+). The gap is completing the breadth story (Ch5/Ch6/Ch7).

---

## RECOMMENDED ADDITIONS TO REMEDIATION

Priority-ordered list of CSS additions not in the current remediation:

### BLOCKING (required for production quality):

1. **Ch6: Behavioral baseline** (~30 lines)
   ```css
   ::selection { background: var(--color-primary); color: var(--color-background); }
   *:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
   @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
   @media (max-width: 768px) { .page-header h1 { font-size: 28px; } .narrow-table-wrapper, .pullquote-wrapper, .tension-group { max-width: 100%; margin-left: 0; } table { font-size: 14px; } }
   ```

### HIGH (significant perceptual improvement):

2. **Ch5: Minimal temporal** (~5 lines)
   ```css
   html { scroll-behavior: smooth; }
   .component-block { transition: border-left-width 0.2s ease; }
   table tbody tr { transition: background-color 0.15s ease; }
   table tbody tr:hover td { background-color: var(--color-zone-breathing); }
   ```

3. **Scale 5 Level 5: Element-level** (~10 lines)
   ```css
   code:not(pre code) { background: var(--color-zone-breathing); border: 1px solid var(--color-border-subtle); padding: 1px 4px; font-size: 0.9em; }
   strong { font-weight: 600; }
   ```

### MEDIUM (polish):

4. **Ch7: Material depth** (~10 lines)
   ```css
   .table-featured { position: relative; }
   .table-featured::after { content: ''; position: absolute; top: 4px; left: 4px; width: 100%; height: 100%; background: var(--color-text); z-index: -1; }
   ```

5. **Stacking loophole fix** (~3 lines)
   ```css
   .divider-breathing { margin: 32px 0; }  /* reduced from 64px to prevent void */
   ```

**Total additional lines: ~58**
**Combined with remediation: ~360 CSS edits total**
**Channel score post-all-additions: 7/7**
**Scale 5 post-all-additions: 5/5**

---

**END OF SCALE-CHANNEL ACTIVATION AUDIT**
