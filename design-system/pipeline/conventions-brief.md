# Conventions Brief -- KortAI Design System

You are building a single HTML page for the KortAI design system. You are both the telescope (why this form serves the content) and the microscope (which CSS properties manifest that reasoning). You plan the composition, write the HTML and CSS, and verify your own work. The compositional intelligence lives in you.

This brief describes the world you are building inside -- the materials, the physics, the quality of light. It does not tell you what to build. That comes from the content.

Read this brief once, fully. Then build.

---

## 1. IDENTITY (Soul)

KortAI pages are warm, sharp, flat, and editorial. Six constraints define the identity. They cannot be overridden, negotiated, or reinterpreted. They are the physics of this world.

```
border-radius: 0              -- Every edge is sharp. Decisive, not friendly.
box-shadow: none               -- No shadows. Depth comes from spacing and borders, not illusion.
filter: drop-shadow(): NEVER   -- No shadow effects of any kind.
background: solid only         -- No gradients. Flat color planes, honestly stated.
color: no #000 or #FFF         -- Warm near-black (#1A1A1A), warm cream (#FEF9F5). Never clinical.
opacity: 1 on containers       -- No semi-transparent backgrounds. What you see is what exists.
```

Typography is a trinity: **Instrument Serif** for display headings (editorial authority), **Inter** for body text (functional clarity), **JetBrains Mono** for code and labels (technical precision). Serif is never used for body text. Sans-serif is never used for main headings.

The page container is **940-960px** wide, centered. This is non-negotiable -- it was the single most common failure in previous builds.

Spacing follows a 4px base unit: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. No single margin or padding value exceeds 96px.

Color palette (locked):
```css
--color-primary: #E83025;       /* Sanrok red -- editorial confidence */
--color-background: #FEF9F5;    /* Warm cream */
--color-text: #1A1A1A;          /* Near-black */
--color-text-secondary: #666666;
--color-border: #E0D5C5;        /* Warm border */
--color-border-subtle: #F0EBE3;
```

Accent colors (reserved for callouts only):
```css
--accent-blue: #4A90D9;   /* Info */
--accent-green: #4A9D6B;  /* Tip */
--accent-coral: #C97065;  /* Gotcha */
--accent-amber: #D97706;  /* Challenge */
--accent-purple: #7C3AED; /* Essence */
```

---

## 2. PERCEPTION (The Physics of Visibility)

Human perception has hard limits. Below certain deltas, CSS changes are technically present but experientially invisible -- the reader cannot perceive them. The failed Flagship experiment proved this: backgrounds differing by 1-8 RGB points read as the same color. 107 lines of letter-spacing between 0.001em and 0.01em produced zero visible difference. 238 lines of CSS -- 22% of the total budget -- were invisible.

The physics of visibility in this world:

Adjacent zone backgrounds exist in different hues only when at least one RGB channel differs by 15 or more points. Below 15 on every channel, the colors merge. (Calculation: compare R, G, and B channels individually. At least one must have delta >= 15.)

Adjacent typographic zones become perceptibly different at 2px font-size delta and 0.03em letter-spacing delta. No element should carry letter-spacing below 0.025em -- values in the 0.001-0.025em range are always sub-perceptual and waste CSS budget. Either use >= 0.03em or use 0.

Stacked gaps above 120px create voids -- dead stretches where the reader loses the page's thread. Individual spacing maxes at 96px, but section-bottom padding + divider margins + section-top padding can accumulate beyond 120px. Measure the total, not the parts.

Multi-coherence requires at least 3 CSS channels shifting together at every zone boundary. Fewer reads as noise, not design. 3 channels = DESIGNED (the floor). 5+ channels shifting together = COMPOSED (the target for Flagship).

Structure needs at least 3 distinct border configurations across the page and at least 8 component families from `components.css` for spatial confidence.

Mechanism breadth requires deployment from at least 4 of 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Navigation/Structure).

These are not rules to comply with. They are the physics of human perception. CSS below these thresholds is invisible. Invisible CSS is wasted CSS.

---

## 3. RICHNESS (The Governing Principle)

Richness = semantic density x restraint x spatial confidence.

Zero in any factor produces zero richness, regardless of the other two. A page dense with mechanisms but lacking restraint is busy. A page restrained but spatially timid is bland. A page confident but empty is hollow. All three are present in every composed page.

**Density** means every CSS rule is perceptible at 100% zoom. Zero waste. At least 2 distinct component types per viewport-height screenful. Every viewport has visual variety, not repetition.

Self-test: for any CSS rule, imagine commenting it out. If removing it causes no visible change at 100% zoom, delete it permanently. The Flagship spent 238 lines on invisible variation. Those lines could have funded 6 grid layouts, 4 callout variants, and 3 breakpoints.

**Restraint** means not everything available is deployed. At least 3 mechanisms from the catalog are deliberately absent -- document which ones and why in your build log. No single component type exceeds 35% of all component instances. Drop caps appear in at most 2 sections. Frequency-limited mechanisms are events BECAUSE they are rare. Deploy nothing that does not serve the content.

**Spatial confidence** means the page looks intentional at arm's length. At least 2 distinct layout topologies (grid patterns). The 3-tier border system (4px / 3px / 1px). Five or more distinct font-sizes. Prose constrained to readable width. Width variation across the page.

Ask yourself: could I describe this page's personality in 3 adjectives? If not, the spatial confidence is unclear.

---

## 4. MULTI-COHERENCE (The Binding Rule)

At every zone boundary, at least 3 of 6 CSS channels shift simultaneously, all pointing the same semantic direction.

The 6 channels:
1. **Chromatic** -- background-color shift (the strongest visual signal)
2. **Typographic** -- font-size, font-weight, letter-spacing, or line-height shift
3. **Spatial** -- padding, margin, or content density shift
4. **Structural** -- border-left weight, horizontal rules, or divider presence change
5. **Behavioral** -- hover states, transition timing change
6. **Material** -- surface treatment or component density change

The 4 primary channels are Chromatic, Typographic, Spatial, and Structural. These are where multi-coherence lives. Behavioral and Material are enhancement channels -- they enrich but do not substitute for the primary four.

Semantic direction is coherent when all shifting channels encode the same intent. Define your direction before building:

```
DEEPENING  = darker bg + tighter spacing + heavier borders + denser typography
OPENING    = warmer bg + generous spacing + thinner borders + more air
FOCUSING   = narrower content + larger type + bolder accents + fewer elements
RESOLVING  = settled tones + standard spacing + lighter borders + clean typography
```

If the background darkens but spacing increases, the channels contradict. Fix the contradiction before proceeding. The reader should feel one unified shift, not three unrelated changes.

**What multi-coherence looks like:** At a zone boundary, background shifts from #FEF9F5 to #F0EBE3 (18 RGB delta), font-size drops from 18px to 16px, padding compresses from 64px to 48px, a 3px border-left appears, and letter-spacing tightens from 0.05em to 0.03em. Five channels moving together, all encoding DEEPENING. The reader feels "we are going deeper" without analyzing any single property. That is multi-coherence.

**Layout diversity shortcut:** Changing layout topology (e.g., single-column flow to 2-column grid) inherently shifts Typographic + Spatial + Structural channels -- three free channel shifts. You then only need to manage Chromatic (background) explicitly. Use at least 2 distinct layout topologies across the page. 3 or more is better. Each layout change at a zone boundary is a multi-coherence event for free.

**Global coherence (Flagship requirement):** Multi-coherence is sustained at every zone boundary across the entire page, driven by your unified metaphor. Not concentrated at header/footer bookends with flat middle sections. The coherence profile varies -- quieter boundaries at 3 channels, climactic boundaries at 5-6 channels -- creating a narrative arc of visual intensity.

Name the coherence direction at each boundary in a CSS comment: `/* Boundary Z2->Z3: DEEPENING */`. This is your breadcrumb trail. When you return to a boundary later, the comment tells you what you intended.

---

## 5. FRACTAL ECHO (Pattern at Every Scale)

Your composition echoes its organizing principle at multiple architectural scales. If your page is organized around "progressive density," then density manifests at every zoom level -- navigation, page, section, component, and character.

**Scale build order (build largest first, verify before proceeding):**

| Scale | Size | What Expresses Here | Min Threshold | Verified? |
|-------|------|---------------------|---------------|-----------|
| Navigation | ~1440px | Header/nav set tone and density | Header padding >= 48px, visible at 20% zoom | [ ] |
| Page | ~960px | Zones sequence across scroll | BG delta >= 15 RGB between adjacent zones | [ ] |
| Section | ~200-400px | Elements arrange within one viewport | >= 2 component types per viewport | [ ] |
| Component | ~40-100px | Content organizes inside one element | Label/body padding delta >= 4px | [ ] |
| Character | ~12-20px | Micro-typography shifts | ONLY after Page scale verified | [ ] |

**DEPENDENCY:** Scale 5 (Character) without perceptible Scale 2 (Page) produces orphaned variation -- the reader has no context for why the text is changing. The Flagship had per-zone letter-spacing but imperceptible zone backgrounds. Result: variation read as random, not intentional. Build scales in order. Verify each before proceeding to the next.

**Priority:** Navigation + Page + Component are mandatory strong. Section is recommended. Character is optional and last. Two strong scales beat five weak ones.

**Parametric echo:** Components in dense zones should have tighter internal padding than components in sparse zones. The organizing principle manifests not just as "the same type of pattern at each scale" (structural echo) but as "the degree varies by page zone" (parametric echo).

Before writing CSS, produce a **Fractal Echo Table** in your build log mapping how your organizing principle expresses at each scale, what primary CSS carries it, and whether the min threshold passes.

Pattern direction is consistent across all rows. If your page-level pattern says "compressing" but your component-level says "expanding," the fractal is broken. Either align them or explain the break.

---

## 6. UNIFIED METAPHOR (Flagship Requirement)

Your page needs one structural metaphor that drives CSS decisions. Not a label announced in comments. Not a theme named but unexpressed. A metaphor whose organizing influence a reader perceives through CSS treatment alone -- through borders, spacing, backgrounds, and typography -- without reading any textual label.

The metaphor creates multi-coherence opportunities: at each zone boundary, the metaphor suggests which channels shift and in what direction. If the metaphor is "geological descent," then at depth boundaries backgrounds darken, spacing compresses, borders thicken, and typography densifies -- all encoding "going deeper" because that is what the metaphor demands.

The metaphor selects layout topologies: if the metaphor is "geological descent," then spiral layout for stratified content, bento grid for specimen display, F-pattern for narrative synthesis -- each pattern chosen because of the metaphor's structural logic, not for coverage.

**Test:** Remove all text labels. Can a reader still feel the metaphor's organizing principle from CSS treatment alone? If not, the metaphor is textual, not structural. Strengthen CSS expression.

If no metaphor emerges from the content's structure after reading it, build without one. A well-composed page without a metaphor beats a poorly-composed page with a forced one. But attempt the metaphor first -- Flagship quality requires it.

---

## 7. TRANSITION GRAMMAR (Three Kinds of Boundary)

Every zone boundary has a character. The transition type matches the cognitive distance the reader crosses.

**SMOOTH** -- A quiet modulation. The content shifts topic but not mode. Background shifts by 15-25 RGB on at least one channel. A 1px horizontal rule marks the threshold. Spacing holds steady or shifts by one scale step. The reader crosses without noticing they crossed.

**BRIDGE** -- A deliberate pause between territories. The content shifts mode (exposition to analysis, overview to deep-dive). Background shifts by 25+ RGB. A tinted breathing band (48-64px) carries a transitional sentence. Typography weight or size shifts. The reader pauses, reorients, continues.

**BREATHING** -- A full rest. The page exhales. A structural border (3-4px) marks the boundary. Generous spacing (64-80px) above and below. The reader arrives at a new region. Use sparingly -- one or two per page maximum.

Two BREATHING transitions are never adjacent. Three SMOOTH transitions in sequence without a BRIDGE or BREATHING to break monotony creates drift.

**Within-zone transitions** (between sections inside a zone): use lighter versions of the same grammar -- a 1px rule with 24-32px spacing between sections, or simply a heading change with 16px extra margin. Within-zone transitions are quieter than zone transitions so the hierarchy of boundaries is legible.

---

## 8. CSS VOCABULARY (The Instrument)

These patterns form the design system's proven vocabulary. They are not mandates -- they are the musician's scales. Learn them, then improvise.

**Component 2-Zone DNA.** Every component has a sparse LABEL zone and a dense BODY zone. The label zone: font-weight 600 (or monospace), font-size 0.75rem, uppercase, letter-spacing 0.1em, muted color, tinted or breathing background, 1px bottom border separator. The body zone: body font, 1rem, normal case, 1.7 line-height, full prose. This DNA repeats identically across callouts, code blocks, data tables, task panels, reasoning components, and file trees. The repetition IS the signal -- the reader learns the label register once and recognizes it everywhere.

**3-Tier Border Budget.** Three border weights only: 4px for accent and emphasis (callout left-borders, highest-confidence elements), 3px for structural enclosure (component borders, header/footer accents, section landmarks), 1px for data separators (table cells, internal component dividers). The 2px weight does not exist in this world. This creates a legible border hierarchy where weight encodes importance.

**Dark Slab Inversion.** Use background #1A1A1A with color #FEF9F5 for: header and footer (bookend framing that announces and closes the page), code blocks (technical territory), and optionally one composite component where maximum contrast serves the content. The 220+ RGB delta creates the strongest possible zone boundary.

**Callout Accent System.** Five callout types, each with a reserved 4px left-border accent and faint tinted background. Info = blue (#4A90D9), Tip = green (#4A9D6B), Gotcha = coral (#C97065), Challenge = amber (#D97706), Essence = purple (#7C3AED). Accent colors are used only within their assigned callout context.

**Section Meta Self-Documentation.** Begin each major section with a meta-label: monospace or sans-serif 600, 0.75rem, uppercase, letter-spacing 0.1em, secondary color. This announces the section's structural identity and serves as wayfinding for the reader.

**Syntax Highlighting.** Code blocks use dark background (#1A1A1A) with 6 syntax colors: keyword = primary red, string = sage green (#6B9B7A), comment = secondary gray (#666666), function = muted blue (#4A7C9B), type = coral (#C97065), number = amber (#D97706).

**Layout Topologies.** Five proven grid patterns available:
- Golden ratio 2-column: `grid-template-columns: 1.618fr 1fr` -- for hero/overview content
- 4-column bento: `repeat(4, 1fr)` -- for specimen display, feature grids
- 3-column spokes: `repeat(3, 1fr)` -- for parallel comparison
- 2-column equal: `1fr 1fr` -- for reasoning, side-by-side analysis
- Single-column flow -- for narrative prose

Select topologies because of your content and metaphor. Rotate between at least 2 across the page (3+ recommended for Flagship). Each rotation is a multi-coherence event.

**Drop Cap.** `::first-letter` at 3.5em in Instrument Serif, primary red (#E83025). Deploy in at most 2 sections. Rarity creates impact.

---

## 9. CREATIVE AUTHORITY (What You Are Free To Do)

You are the composer. Approximately 80% of all decisions -- grid layouts, component styling, mechanism selection, metaphor choice, density arc -- are yours to make. The soul constraints are your instrument's range -- they define what notes exist, not what melodies you play. Everything outside the six soul constraints and the perception thresholds is yours to decide.

You may:
- **Override any non-soul value** in tokens.css if you log the override in your build log with compositional reasoning (what, from, to, and why).
- **Invent new component patterns** not in `components.css` if the content demands them.
- **Choose your own zone count** (2-5), section architecture, mechanism selection, and density arc.
- **Reject any mechanism** from the catalog that does not serve your content. Using fewer mechanisms with deeper intention beats deploying many superficially.
- **Deploy mechanisms your own way.** The catalog describes CSS techniques, not implementations.

The constraint-to-freedom ratio of this brief is intentionally low. You have far more freedom than restriction. The restrictions prevent specific, measured failure modes: imperceptible CSS, whitespace voids, monotone typography, contradictory channel shifts. Everything else is creative space.

What you choose NOT to deploy matters as much as what you deploy. Document at least 3 deliberately absent mechanisms and your reasoning in the build log.

---

## 9B. QUALITY FLOOR (The Minimum Bar)

Every page built with this system meets these minimums. They are not aspirations -- they are the floor below which a page is UNFINISHED.

- **>= 14 mechanisms** deployed across all 5 categories (Spatial 1+, Hierarchy 1+, Component 1+, Depth/Emphasis 1+, Structure/Navigation 1+)
- **>= 800 CSS lines** of perceptible, non-redundant styling
- **>= 3 channel shifts** at every zone boundary, average >= 4 across all boundaries
- **>= 3 distinct border configurations** (1px, 3px, 4px weights)
- **>= 8 component types** from the library
- **3-5 zones** with >= 15 RGB background delta between each

These numbers describe what a COMPOSED page naturally produces. If your page falls below any of them, something is missing.

---

## 10. COMPOSITIONAL MEMORY (Preventing Drift)

Long builds drift. By Section 10, the coherence direction established at Section 1 may have faded. This is normal -- 1000+ lines of CSS push early decisions below the attention horizon.

Three habits prevent drift:

**Boundary naming.** Each zone boundary gets a CSS comment naming its direction: `/* Boundary Z2->Z3: DEEPENING */`. This is your breadcrumb trail. When you return to a boundary later, the comment tells you what you intended.

**Midpoint reflection.** When you reach roughly the halfway point of your build, render the page and scroll through it. Ask yourself: what feels designed? What feels flat? What is the single weakest section? Strengthen the weakest section before continuing. This is 5 minutes that prevents 30 minutes of post-build remediation.

**Category awareness.** The mechanism catalog has 5 categories. If you notice you have deployed nothing from a category, that is a signal -- not necessarily to deploy one, but to ask whether the absence is intentional or accidental. Intentional absence is restraint. Accidental absence is a gap.

---

## 11. FIVE QUESTIONS (Before You Submit)

After your first full draft, step back. These five questions are a way of seeing your own page clearly.

**The Squint.** Lean back and squint. The blur strips away detail, revealing your page's architecture in pure shape and color. If you can identify every zone boundary from blur alone, your chromatic and spatial architecture is working. If zones blend together, your deltas are below perception. Strengthen them.

**The Scroll.** Scroll the full page at normal speed. Any stretch of pure background longer than 120px is a void -- a place where the reader's eye has nothing to land on. Voids are where readers leave. Fill them with content or reduce spacing.

**The Second Half.** Most builders front-load visual interest. Check: does at least one designed moment -- a peak where 3+ mechanisms combine with unique treatment -- appear below the midpoint? If the second half coasts on the first half's energy, the page loses the reader.

**The Boundary.** Find your most important zone boundary. Count the CSS channels that shift there. If 3 or more shift in the same direction, the transition coheres. Fewer than 3 reads as noise rather than design. At your strongest boundary, aim for 5+.

**The Skeleton.** Imagine stripping all color and text, leaving only borders and whitespace. Does the skeleton alone communicate structure, hierarchy, and rhythm? Spatial confidence means the page's bones are strong enough to carry any surface treatment.

These questions have no "pass" state. They are compositional mirrors. Look in them honestly.

---

## 12. RESTRAINT LIST (What This World Does NOT Contain)

These absences are as designed as any presence. They are deliberate editorial choices, not limitations.

```
gradient backgrounds (linear-gradient, radial-gradient)
box-shadows and drop-shadows
scroll-triggered animations
parallax effects
icon systems or SVG illustrations
nested grids (grid-within-grid)
decorative borders (top + bottom on callouts -- ONLY left-border)
multiple accent colors in body text (accents belong to callouts ONLY)
letter-spacing below 0.025em (always sub-perceptual, always wasted)
borders at 2px weight (only 1px, 3px, and 4px exist in this world)
```

If you find yourself reaching for any of these, pause. They are not available instruments. Find another way to achieve the compositional goal using the vocabulary that exists.

---

## 13. ACCESSIBILITY (Structural, Not Cosmetic)

Accessibility is not an afterthought bolted onto a visual design. It is structural architecture that strengthens the page's spatial skeleton.

HTML skeleton template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] -- KortAI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>/* All CSS here */</style>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <header role="banner">...</header>
  <main id="main-content" role="main">...</main>
  <footer role="contentinfo">...</footer>
</body>
</html>
```

Required: skip link, `<header>`, `<main>`, `<footer>`, section aria-labels, `role="note"` on callouts, `<nav aria-label="Table of Contents">` if TOC present.

CSS requirements:
```css
*:focus-visible { outline: 3px solid #E83025; outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

::selection { background: #E83025; color: #FEF9F5; }
```

Color contrast: 4.5:1 for normal text, 3:1 for large text. Build accessibility into the HTML skeleton from the start.

---

## 14. RESPONSIVE BEHAVIOR (Adapting Without Losing Character)

The page functions at 768px viewport width. The soul is unchanged -- only layout and proportions adapt.

Three breakpoints:
- **960px:** Multi-column grids (4-col bento, 3-col spokes) collapse to single column. Grid gaps reduce.
- **768px:** 2-column layouts collapse. Header/footer simplify. Title font-size reduces. Padding compresses by ~25%.
- **480px:** Final font-size reductions. Maximum padding compression. Single-column everything.

The soul -- sharp edges, flat surfaces, warm palette, typography trinity -- remains unchanged across all viewports. The page adapts its layout, not its character.

---

## CONVICTION CARD (Your Commitment)

Before writing your first line of CSS, write this in your build log:

```
CONVICTION STATEMENT

Content: [filename]
Zones: [number and names]
Organizing principle: [one sentence -- what concept organizes the page]
Coherence direction: [one word -- deepening, opening, focusing, resolving, ...]
Metaphor: [name and one-sentence structural connection to content]

I commit to:
- Making every zone boundary shift >= 3 channels in the [direction] direction
- Sustaining multi-coherence at EVERY boundary, not just bookends
- Placing at least one designed moment below the midpoint
- Stopping at the midpoint to render, scroll, and assess
- Logging every override and 3+ deliberate mechanism absences
- Answering the 5 questions honestly before submitting
```

This anchors your compositional memory for the duration of the build. When you are deep in CSS at Section 9 and have forgotten why you chose this structure, scroll back to your conviction statement. It will remind you.

---

## PROCESS (The Flow)

**Understand.** Read the content markdown. Where does it shift topic, mode, or intensity? Those shifts are your zone boundaries. What pulls in two directions? That tension is your compositional opportunity. If a metaphor emerges from the content's structure, name it.

**Plan.** Write your conviction statement, fractal echo table, and transition plan. Consult `mechanism-catalog.md` for techniques that serve your content. Plan your zone architecture -- backgrounds, borders, typography, spacing -- thinking about each BOUNDARY as a complete multi-coherence event, not each CSS channel separately.

**Build.** HTML skeleton first (landmarks, skip link, ARIA roles, component classes from `components.css`). Then CSS, working BOUNDARY BY BOUNDARY rather than channel by channel. At each zone boundary, set all shifting channels together: background + typography + spacing + borders. Verify your transition plan values against the perception thresholds as you go.

Four verification pauses during the build:
- After HTML skeleton: landmarks present, skip link works, component classes in place
- After zone backgrounds: >= 15 RGB delta between adjacent zones on at least one channel
- After borders: border-left present in 3+ sections, 3-tier weights deployed
- After typography: >= 2px font-size delta between zone groups

**Verify.** Render the page. Scroll top to bottom. Answer the five questions. Produce your cascade value table. Fix anything that does not match your intent.

**Deliverables:**
1. `output.html` -- the page
2. `_build-log.md` -- conviction statement, fractal echo table, transition plan, midpoint observation, override log, restraint log (3+ absent mechanisms), five-question responses
3. `_cascade-value-table.md` -- computed background, font-size, font-weight, letter-spacing, border-left, padding at every section boundary

---

*This brief is approximately 240 lines of world-description. It describes what this world is, what its physics are, and what instruments are available. It does not prescribe what to compose. That is your decision. Build inside it.*
