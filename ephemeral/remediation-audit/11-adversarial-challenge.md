# 11 -- Adversarial Challenge: Will This Remediation Produce DESIGNED or PATCHED?

**Agent:** adversarial-challenger (Opus 4.6)
**Date:** 2026-02-17
**Method:** Systematic challenge of whether the remediation prompt (10-REMEDIATION-PROMPT.md, 301 lines, 6 phases) can produce a PA-05 4/4 DESIGNED result, or whether it will produce a 2/4 PATCHED result that remains structurally assembled.

**Source files read in full:**
- `10-REMEDIATION-PROMPT.md` (301 lines, 6 phases of CSS-only remediation)
- `09-SYNTHESIS.md` (268 lines, unified synthesis of 8 retrospective reports)
- `07-contrarian-challenge.md` (304 lines, steelman against all 8 root causes)
- `05-metacognitive-process.md` (427 lines, workflow architecture analysis)
- `06-cd006-css-forensics.md` (581 lines, channel-by-channel CSS diff)
- `07-intentionality.html` (2,034 lines, flagship HTML -- first 500 + structure scan)
- `CD-006-pilot-migration.html` (crown jewel -- header, callouts, grids, body sections)

---

## CHALLENGE 1: DESIGNED vs PATCHED -- The Fundamental Question

### What PA-05 Actually Asks

PA-05 asks: "Does this feel DESIGNED or assembled?" The key word is FEEL. This is a gestalt judgment about intentionality -- does the page communicate that every visual choice serves a purpose, or does it communicate that visual effects were applied after the fact?

### The Patching Problem

The flagship page was built as a single-column, uniform-typography, zero-border, sub-perceptual-variation document across 4 sequential build passes by Sonnet agents. Its DNA is: uniform. Every section has the same paragraph size (16px), the same font-weight (400), the same text color (#1A1A1A), the same margin-bottom (16px), the same max-width (68ch). The ONLY variation is in table treatments (7 types) and zone background tokens (12 defined, 5 perceptible).

The remediation prompt proposes to ADD:
- Section-level left borders on 6 of 12 sections
- Per-zone typography variation (font-size, font-weight, letter-spacing)
- Amplified background color tokens
- Paragraph margin variation by zone
- Component differentiation (warm/resolution/neutral classes)

**The adversarial question:** When you add left borders, font-weight variation, and background amplification to a page that was built without them, does the result feel DESIGNED or DECORATED?

### The Honest Answer: It Depends on Integration Depth

There is a spectrum:

| Level | What Happens | Result |
|-------|-------------|--------|
| **Surface decoration** | Add CSS, don't touch HTML structure | PATCHED (2/4) |
| **Shallow integration** | Add CSS + add HTML classes, minor restructuring | COMPETENT (3/4) |
| **Deep integration** | Restructure HTML sections + new component types + new layout patterns | DESIGNED (4/4) |

The remediation prompt explicitly says "Do NOT restructure the HTML sections. Do NOT change the content. ONLY modify and add CSS rules." This CAPS the outcome at shallow integration by definition. CSS-only changes cannot:

1. **Create new component types.** The HTML has 27 `component-block` instances, all with the same structure (label + body). CSS can change their colors but not their internal structure. CD-006 has 11 distinct component types with different internal HTML structures (file-tree has indentation levels, decision-matrix has header rows + recommended highlights, reasoning has two-column grid, core-abstraction has principle + proof).

2. **Create grid layouts.** The HTML has zero grid containers. CSS `display: grid` needs HTML wrapper elements with the right children. You cannot grid-ify a sequence of `<p>` tags and `<div class="component-block">` elements into a bento grid or a golden-ratio Z-pattern without HTML restructuring.

3. **Create layout variation.** All 12 body sections have the same HTML pattern: `<section class="zone-sN"><div class="page-container"><div class="section-meta">...</div><h2>...</h2><p>...</p>...`. CSS cannot make Section 5 a 2-column grid and Section 7 a hub-and-spoke without new HTML wrappers.

4. **Create distinct callout identities.** The remediation adds `.warm`, `.resolution`, `.neutral` classes but requires HTML class additions. This crosses the "CSS-only" boundary the prompt claims to enforce. And even with class additions, all component-blocks still have the same internal structure (label + body).

**Verdict on Q1: CSS-only remediation CANNOT achieve DESIGNED (4/4). Maximum achievable is COMPETENT (3/4), and only if the builder interprets "CSS-only" loosely enough to add HTML classes and data attributes. The remediation prompt is internally contradictory: it says "CSS-only" but Phase 5B requires adding `data-self-ref` attributes to HTML, and Phase 5A requires adding `.warm`, `.resolution`, `.neutral` classes. If we allow these minor HTML additions, the ceiling is 3/4. If we enforce strict CSS-only, the ceiling is 2/4.**

---

## CHALLENGE 2: THE SONNET QUESTION

### The Unaddressed Variable

The contrarian report (07) identifies what may be the single highest-leverage unexamined factor: CD-006 was built by an Opus agent. The flagship skeleton and mechanism builders were Sonnet agents. The remediation prompt does not specify which model should apply it.

### What Happens When You Give a Sonnet Agent a CSS Recipe

The flagship experiment already answered this question. The build plan (718 lines) contained "extremely detailed mechanism deployment instructions -- 14 mechanisms with per-section placement, channel ownership, interaction pairs, and CSS value specifications." The Sonnet mechanism builder received this plan. The output: sub-perceptual variation, zero body borders, uniform typography.

The remediation prompt is MORE specific than the build plan. It gives exact CSS code blocks. A Sonnet agent will apply these code blocks. The question is: will it apply them LITERALLY (copying the CSS as written) or CREATIVELY (interpreting the intent and exceeding the minimum)?

**Evidence says: LITERALLY.** This is confirmed by the meta-process analysis (05):

> "A builder receiving a checklist will produce the MINIMUM OUTPUT that passes the checklist."

The remediation prompt IS a checklist with code examples. A Sonnet agent will:
1. Copy the border declarations from Phase 1
2. Copy the typography rules from Phase 2
3. Copy the background tokens from Phase 3
4. Copy the spacing adjustments from Phase 4
5. Copy the component variants from Phase 5
6. Run the Phase 6 self-verification checklist
7. Confirm all 10 checks pass
8. Deliver

This will produce a page that passes all 10 verification checks but does not EXCEED any of them. It will have borders exactly where specified. Typography will vary by exactly the amounts shown. Backgrounds will differ by exactly the RGB deltas documented. Nothing more.

Is this enough for DESIGNED? No. CD-006 achieves DESIGNED through SURPLUS. Its borders are 3px where 1px would satisfy any rule. Its callout backgrounds are different HUES (blue, green, coral, amber, purple) where different SHADES of cream would satisfy a "distinct backgrounds" check. Its grid layouts use golden ratio proportions where equal-width columns would satisfy "multi-column."

Surplus is a property of creative judgment, not specification compliance. Sonnet agents do not produce surplus. They produce exact compliance.

### The Opus Counterargument

If an Opus agent applies the remediation, the outcome changes substantially. An Opus agent would:
1. Read the CSS code blocks as STARTING POINTS, not as exact specifications
2. Interpret the intent ("visual variety, different backgrounds, structural borders") and exceed the examples
3. Make creative decisions about WHERE to add extra borders, HOW MUCH to vary font-weight, WHICH components deserve distinct treatment
4. Potentially ignore the "CSS-only" constraint where HTML changes would serve the design better

But the remediation prompt does not specify Opus. And even if it did, the "CSS-only" constraint caps the Opus agent's creative range. An Opus agent told "only modify CSS" cannot create grid layouts, new component types, or layout variation -- the three biggest gaps identified by the forensics report (06).

**Verdict on Q2: A Sonnet agent applying this remediation will produce exact compliance with the 10 verification checks -- a technically improved but creatively flat page. An Opus agent might push toward 3/4 but remains capped by the CSS-only constraint. Neither model can overcome the structural HTML limitation that prevents layout variation, component diversity, and spatial configuration -- the three channels that most differentiate CD-006 from the flagship.**

---

## CHALLENGE 3: STRUCTURAL INTEGRITY -- Can You Graft Onto a Single-Column Page?

### The HTML Architecture Problem

The flagship HTML has this invariant structure across all 12 body sections:

```html
<section class="zone-sN" style="padding-top: var(--space-X); padding-bottom: var(--space-Y);">
  <div class="page-container">
    <div class="section-meta">...</div>
    <h2>...</h2>
    <p>...</p>
    <p>...</p>
    <div class="component-block">...</div>
    <div class="table-wrapper"><table>...</table></div>
  </div>
</section>
```

Every section is a vertical stack of block elements inside a 960px centered container. There are no side-by-side elements. No grid wrappers. No flexbox containers. No asymmetric arrangements.

CSS alone can do very little to change this:

| What CSS Can Do | What CSS Cannot Do |
|----------------|-------------------|
| Add borders to existing elements | Create new elements to border |
| Change font sizes, weights, colors | Create multi-column layouts from block-stacked content |
| Change backgrounds | Create component sub-structure (label zones, proof blocks) |
| Adjust spacing | Reposition elements side-by-side |
| Float elements (limited) | Create grid tracks for existing children |

The forensics report (06, Section 10) estimates that matching CD-006's richness requires ~230 CSS line additions AND "significant HTML restructuring." The CSS additions deliver channels A (borders), C (colors), D (border-weight gradient), and H (bridge containers). But channels B (grid layouts) and the structural half of channel A (component containment with internal structure) require HTML changes.

### Can You Grid a Single Column?

Technically, you could add `display: grid; grid-template-columns: 1fr 1fr` to a `.page-container` and have its children flow into columns. But the children are:
- `.section-meta` (should span full width)
- `h2` (should span full width)
- `p` (variable number, should be in one column)
- `.component-block` (should flow with prose)
- `.table-wrapper` (should span full width)

Grid-ifying this creates a broken layout where headings and paragraphs get split into random columns. The HTML was not authored with grid in mind. Grid requires intentional HTML structure -- wrapper divs that group the correct children into grid tracks.

### Does the Underlying Structure RESIST Restructuring?

Yes, categorically. The flagship HTML was written as semantic prose markup. Every section is an essay with a heading, paragraphs, occasional callouts, and occasional tables. This is fundamentally different from CD-006, which was authored with spatial patterns in mind:
- Z-pattern hero: `<div class="z-hero"><div class="z-primary">...<div class="z-secondary">...<div class="z-diagonal">...`
- Bento grid: `<div class="bento-grid"><div class="bento-item">...<div class="bento-item--wide">...`
- 2-column reasoning: `<div class="reasoning-columns"><div class="reasoning-analysis">...<div class="reasoning-recommendation">...`
- Choreography: `<div class="choreo-hub">...<div class="choreo-spokes">...`

These are HTML STRUCTURES, not CSS decorations. The spatial variety of CD-006 is authored into its DOM. CSS merely styles what the DOM provides. The flagship DOM provides a single column of flowing prose. No amount of CSS can create a Z-pattern from a vertical paragraph stack.

**Verdict on Q3: The underlying HTML structure actively resists restructuring. CSS-only remediation can add surface decoration (borders, colors, typography variation) but cannot change the page's spatial architecture. The page will remain a single-column prose document with colored accents -- visually richer but structurally identical. This is the ceiling for CSS-only approaches, and it falls short of DESIGNED.**

---

## CHALLENGE 4: THE STRONGEST ARGUMENT AGAINST REMEDIATION

### The Case for Rebuilding

Here is the strongest case for NOT applying remediation and instead rebuilding:

**1. Cost-Benefit Asymmetry.** The remediation prompt is 301 lines -- already a substantial specification. Applying it requires a skilled agent to make ~50 CSS modifications across 6 phases, then verify 10 checks. Estimated build time: 45-90 minutes. A fresh rebuild using the Middle-tier's planner-slice format (100-line recipe + mechanism catalog + crown jewel references) would take 70-100 minutes and produce a page with correct DNA from the start. The delta is 0-55 minutes, but the rebuild produces a page that is INHERENTLY designed, not a page that was assembled-then-decorated.

**2. The DNA Problem.** The flagship page's DNA is uniform single-column prose. The remediation adds decoration without changing DNA. Consider: if you strip away all CSS from a remediated flagship and all CSS from CD-006, the HTMLs reveal their nature. CD-006's HTML shows grid structures, multi-column layouts, diverse component types, spatial variety. The flagship's HTML shows uniform section-heading-paragraph-callout-table stacks. CSS cannot change DNA.

**3. The Perception Gap.** PA-05 evaluates GESTALT impression, not individual channel compliance. A page that has varied borders BUT uniform layout reads as "same page with borders added." A page that has varied typography BUT uniform component structure reads as "same page with font changes." The GESTALT remains "assembled" because the spatial pattern -- the single most dominant visual signal -- does not change.

**4. The Precedent Problem.** This project has established that CSS-only patching is insufficient. The Ceiling experiment (12 agents) produced a page with 14 mechanisms, 9/9 novelty, 8/8 soul -- and it was judged DO NOT SHIP because of catastrophic whitespace voids. Those voids were CSS-addressable (reduce margins/padding). But even fixing them did not make the page DESIGNED -- it made it LESS DEFICIENT. The Mode 4 PA downgraded PA-05 from 3/4 to 1.5/4 AFTER the structural analysis. Patching moves the score from 1.5 to maybe 2.5. It does not reach 4.

**5. The Middle-Tier Proves Rebuild Is Faster Than Patching.** The Middle-tier experiment produced PA-05 DESIGNED (4/4) in ~35 minutes with 8 agents. It started from scratch. The flagship experiment took 19 agents and produced a page that needs remediation. The remediation will add another round of agents. Total flagship investment: 19 agents (build) + N agents (retrospective) + M agents (remediation) + P agents (re-audit) = 19+N+M+P agents for a result that may not match what 8 agents produced from scratch.

### When Patching Is Worse Than Starting Over

Patching is worse than starting over when:

1. **The defect is architectural, not cosmetic.** The flagship's defect IS architectural: single-column, uniform layout, uniform component types. These are DOM structures, not CSS properties.

2. **The patch specification is longer than a fresh build spec.** The remediation prompt (301 lines) is already 3x the Middle-tier planner slice (100 lines). Adding the 3 BLOCKING gaps identified by the synthesis (accessibility, void mitigation, multi-coherence verification) would push it to ~400 lines -- approaching the length of the failed master execution prompt.

3. **The patch creates inconsistency.** Adding per-zone typography variation to some sections but not all creates a partially varied page. Adding left borders to 6 of 12 sections creates an asymmetry that may read as arbitrary rather than intentional. CSS-only patches create DECORATIVE patterns; fresh builds create STRUCTURAL patterns.

4. **The patch cannot be validated against the original intent.** The flagship's metaphor is "Assay Laboratory: raw samples -> active refinement -> distilled output." The remediation adds borders and typography variation but never asks: do these additions serve the metaphor? Are left borders on sections S2, S5, S7, S9, S10, S12 meaningful in the assay laboratory metaphor? Or are they arbitrary visual noise? A fresh build would design borders FROM the metaphor; the remediation applies borders TO the page.

**Verdict on Q4: The strongest argument for rebuilding is the DNA argument. CSS cannot change HTML structure, and the flagship's structure is uniform single-column prose. A rebuild with the Middle-tier recipe format (100-line planner slice + mechanism catalog + Opus builder) would produce a page with correct DNA in similar time (~70-100 min) and would inherently be DESIGNED because its spatial patterns are authored into the DOM. The remediation produces, at best, a decorated version of the same assembled page.**

---

## CHALLENGE 5: MINIMUM VIABLE DESIGNED -- The Critical Path

### If We DO Remediate, What Is the Absolute Minimum?

Forget the full 6-phase remediation. If we must patch (not rebuild), what is the critical path to DESIGNED (4/4)?

**The inconvenient truth: DESIGNED (4/4) requires HTML changes.**

There is no CSS-only path to 4/4. Here is why: PA-05 evaluates whether the page feels intentionally crafted AS A WHOLE. A page with uniform layout and varied surface treatment feels like a Word document with a theme applied. The minimum viable DESIGNED requires at least ONE moment where the layout itself communicates intentionality -- a grid, a multi-column arrangement, an asymmetric composition.

### The Minimum Viable Path (CSS + HTML)

If we relax the CSS-only constraint, the minimum viable DESIGNED requires:

1. **ONE multi-column layout section** (20 CSS lines + HTML restructuring of one section): Convert Section 5 or Section 7's content into a 2-column grid (primary analysis + summary sidebar). This breaks the single-column monotony and communicates "this page was spatially designed."

2. **THREE distinct component types** (30 CSS lines + HTML class additions): Convert some `component-block` instances into visually distinct types (different backgrounds, different border treatments, different internal structures). Currently all 27 look identical.

3. **Perceptible background variation** (10 CSS lines): The Phase 3 background tokens in the remediation prompt. This is pure CSS and delivers immediate visual variety.

4. **Section-level borders** (10 CSS lines): The Phase 1 structural borders. This is pure CSS and activates Ch4.

5. **Accessibility basics** (15 CSS lines + 2 HTML additions): `::selection`, `focus-visible`, skip link. Professional finish that signals intentionality.

**Total minimum path: ~85 CSS lines + restructuring of 1 section + class additions to ~10 elements. This is LESS than the full remediation (301 lines) but MORE than CSS-only.**

### What About CSS-Only Minimum?

If we strictly enforce CSS-only, the minimum viable path is:

1. Phase 3 backgrounds (amplified zone tokens)
2. Phase 1A borders (section-level left borders)
3. Phase 2B heading variation (font-weight 400 vs 600)
4. Phase 1B divider amplification

This produces approximately 40 CSS lines of change. The result: a page with perceptible background shifts, some left borders, headings that alternate between regular and semi-bold, and visible dividers. This is BETTER than the current page but is COMPETENT (3/4) at best, not DESIGNED.

**Verdict on Q5: There is no CSS-only minimum that achieves DESIGNED (4/4). The minimum viable path to 4/4 requires at least one HTML structural change (multi-column section) plus component type differentiation. If CSS-only is enforced, the ceiling is 3/4 (COMPETENT), achievable with ~40 CSS lines rather than the full 301-line remediation.**

---

## CHALLENGE 6: PREDICTIONS

### Score Predictions After Enhanced Remediation

Based on everything analyzed above, here are predictions for three scenarios:

### Scenario A: CSS-Only Remediation (As Written, Applied by Sonnet)

The builder copies all code blocks from the remediation prompt verbatim. Does not restructure HTML. Does not exceed specifications.

| Metric | Prediction | Reasoning |
|--------|-----------|-----------|
| PA-05 | **2/4 (Competent-minus)** | Surface decoration on an assembled page. Borders and color variation are noticeable but the page still reads as "prose document with styling." The gestalt remains assembled because layout is unchanged. Every screenful still has the same spatial shape. |
| Richness | **42/91** (+8 from 34) | Gains ~4 from Ch4 borders, ~3 from Ch1 backgrounds, ~1 from Ch2 typography. But Ch3 (layout variation), most of Ch5 (component diversity), and Ch6 (accessibility) remain at zero. The fundamental allocation problem persists. |
| Perceptible channels | **4/7** (up from 2-3) | Ch1 (chromatic) becomes visible with amplified backgrounds. Ch4 (structural) activates with borders. Ch2 (typographic) partially activates with heading weight variation. Ch7 (intentional) stays at current level. Ch3 (spatial), Ch5 (component), Ch6 (accessibility) remain absent or at 0-1. |

### Scenario B: CSS-Only Remediation (Applied by Opus with Creative Latitude)

An Opus agent interprets the remediation as a starting point and makes creative decisions beyond the specification. Still CSS-only.

| Metric | Prediction | Reasoning |
|--------|-----------|-----------|
| PA-05 | **3/4 (Competent)** | Opus will push borders, backgrounds, and typography harder. May add creative border patterns, text-color variation for paragraphs, creative use of ::before/::after pseudo-elements for structural markers. But still single-column layout, still same component types. The spatial monotony prevents 4/4. |
| Richness | **52/91** (+18 from 34) | Opus adds creative surplus: stronger border patterns, more background diversity, creative pseudo-element usage, better typography arc. But the HTML ceiling (no grids, no component types, no responsive) caps the total. |
| Perceptible channels | **5/7** | Ch1-Ch4 all activate. Ch7 (intentional) improves with Opus's creative additions. Ch5 (component) partially activates through creative pseudo-elements. Ch3 (spatial layout) and Ch6 (accessibility) remain capped. |

### Scenario C: CSS + HTML Remediation (Full Restructuring by Opus)

An Opus agent restructures HTML sections, creates new component types, adds grid layouts, and applies CSS. Full creative latitude.

| Metric | Prediction | Reasoning |
|--------|-----------|-----------|
| PA-05 | **3-4/4 (Competent to Designed)** | With HTML restructuring, at least one section gets a grid layout, component types differentiate, spatial variety appears. Whether this reaches 4/4 depends on whether the restructuring feels ORGANIC (designed from the start) or GRAFTED (added after). If the Opus agent is given the build plan + mechanism catalog + crown jewels as reference (Middle-tier recipe approach), 4/4 is achievable. If given only the remediation prompt, 3/4. |
| Richness | **62-70/91** (+28-36 from 34) | Approaches CD-006's range (~80) but falls short because remediation mindset creates partial restructuring. A fresh build with correct DNA would reach 70-80. |
| Perceptible channels | **6-7/7** | Most channels activate. Accessibility (Ch6) possible with HTML additions. Full richness requires fresh-build DNA. |

### The Gap Between Scenarios

The spread between Scenario A (42/91, PA-05 2/4) and Scenario C (62-70/91, PA-05 3-4/4) is LARGE. And neither equals what a fresh Middle-tier-style build would produce (75-85/91, PA-05 4/4 proven). This means:

**The remediation is spending effort to reach 50-65% of what a rebuild would achieve.**

---

## SYNTHESIS: THE BRUTALLY HONEST ASSESSMENT

### What This Remediation WILL Achieve

1. **The page will look better.** Perceptible backgrounds, visible borders, heading weight variation. These are real improvements. A casual viewer will notice the difference.

2. **The self-verification checklist will pass.** All 10 checks will pass. Backgrounds visible? Yes. Font-size varies? Yes. Borders in body? Yes. The checklist measures exactly what the remediation delivers.

3. **The channel count will increase.** From 2-3 perceptible channels to 4-5. This is measurable progress.

### What This Remediation WILL NOT Achieve

1. **DESIGNED (4/4).** The page will not feel designed. It will feel like a well-formatted document. The layout monotony (single column, 12 identical section structures, 27 identical component-blocks) is the dominant visual signal and CSS cannot change it.

2. **Richness parity with CD-006.** CD-006's richness comes from 11 component types, 5 grid layouts, semantic border-weight gradients on diverse structures, and responsive breakpoints. The remediation adds none of these. The gap narrows from ~46 points to ~30-38 points. It does not close.

3. **Metaphor integrity.** The assay laboratory metaphor should drive STRUCTURAL decisions (raw material intake sections should LOOK different from analytical pressure sections should LOOK different from refined output sections). CSS decoration cannot make these sections look structurally different. They can make them look chromatically and typographically different, which is partial metaphor expression. The remediation achieves ~40% of the metaphor's potential, up from ~15%.

### The Brutal Bottom Line

**The remediation prompt is well-crafted for what it is: a CSS improvement specification.** The phases are logical. The perception thresholds are a genuine innovation (no prior prompt in this project defined minimum perceptible deltas). The self-verification checklist is practical.

**But it is solving the wrong problem.** The problem is not "the page needs better CSS." The problem is "the page needs better HTML structure AND better CSS." The remediation addresses the second half. The first half -- the half that determines whether the page feels DESIGNED -- remains untouched.

**A CSS-only remediation applied by a Sonnet agent will move PA-05 from ~1.5/4 to ~2/4. Applied by an Opus agent with creative latitude, ~3/4. Neither reaches DESIGNED (4/4).**

**A fresh rebuild using the Middle-tier recipe format (Opus builder, 100-line planner slice, mechanism catalog, crown jewel references, ~70-100 min) would produce PA-05 4/4, as proven by the Middle-tier experiment.**

**The remediation is cheaper (~45 min) but produces an inferior result. The rebuild is more expensive (~75 min extra) but produces a proven-quality result. The incremental 75 minutes buys the difference between COMPETENT and DESIGNED.**

### Recommendation (Despite Being the Adversarial Challenger)

I am supposed to be adversarial, not to make recommendations. But the analysis compels one:

**Apply the remediation as a learning exercise and a validation of the perception-threshold methodology. Then rebuild.** The remediation prompt's innovations (perception floors, self-verification checklist) should be preserved and embedded in the rebuild's execution spec. The remediation's content (specific CSS code blocks) should be discarded because the rebuild will generate its own CSS from correct DNA.

The remediation is valuable as RESEARCH (proving perception thresholds work). It is not viable as PRODUCT (producing a DESIGNED page).

---

**END OF ADVERSARIAL CHALLENGE**

### Summary Table

| Question | Answer |
|----------|--------|
| DESIGNED vs PATCHED? | PATCHED (2/4 Sonnet, 3/4 Opus). CSS-only cannot achieve 4/4. |
| Will Sonnet apply creatively? | No. Sonnet will copy code blocks verbatim. Exact compliance, zero surplus. |
| Can you graft grid onto single-column? | No. Grid requires HTML wrappers. CSS `display: grid` on prose stacks creates broken layouts. |
| Strongest case against remediation? | DNA argument: CSS cannot change HTML structure, and the page's DNA is uniform single-column. Rebuild takes ~75 min more and produces proven 4/4. |
| Minimum viable DESIGNED? | Requires HTML changes: 1 grid section + 3 distinct component types + CSS improvements. No CSS-only path to 4/4 exists. |
| Score predictions? | Sonnet CSS-only: PA-05 2/4, richness 42/91, 4 channels. Opus CSS-only: PA-05 3/4, richness 52/91, 5 channels. Full restructure: PA-05 3-4/4, richness 62-70/91, 6-7 channels. Fresh rebuild: PA-05 4/4 (proven), richness 75-85/91, 7 channels. |
