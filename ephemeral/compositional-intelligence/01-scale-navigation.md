# Navigation Scale Trace — Where Page-Level Chrome Gets Lost in PV2

**Agent:** Navigation Scale Tracer (Opus)
**Date:** 2026-02-19
**Sources Read:**
- `design-system/pipeline/PV2-PIPELINE-DIAGRAM.md` (977 lines, complete)
- `~/.claude/skills/tension-composition/SKILL.md` (1,933 lines, complete)
- `design-system/compositional-core/grammar/mechanism-catalog.md` (899 lines, complete)
- `memory/scale-research.md` (92 lines, complete)
- `ephemeral/pipeline-analysis/42-OPERATIONAL-RECIPE.md` (header/footer sections)

---

## What Is the Navigation Scale?

The navigation scale is the **bird's-eye zoom level** — what you see before engaging with content. It encompasses:

- **Header** (dark background, title, subtitle, metadata)
- **Table of Contents / Sticky TOC** (section navigation)
- **Footer** (closure bookend, related links, metadata echo)
- **Page-level chrome** (skip links, ARIA landmarks, breadcrumbs)
- **Section indicators** (zone labels, reading pattern markers)

The navigation scale answers: **"What is this page, where am I, and where can I go?"** before the reader engages with content.

In the scale hierarchy: Navigation (1440px) > Page (960px) > Section (~200-400px) > Component (~40-100px) > Character (~12-20px).

---

## Wave-by-Wave Trace

### Wave 0: TC Planner (Phases 0-3.5)

**What TC does for navigation-scale:**

1. **Phase 0 (Content Assessment):** TC reads the markdown and determines zone count (2-5 zones). It maps sections to zones. This produces a **section inventory** — the raw material for a table of contents. But TC does NOT explicitly design the TOC. It determines the CONTENT structure, not the NAVIGATION structure.

2. **Phase 0D (Tier Classification):** Routes to Middle/Ceiling/Flagship. This determines how many scales get fractal coherence. Middle = 2 scales (Page + Component). Ceiling = 4 scales (Navigation + Page + Section + Component). **This is the FIRST explicit mention of navigation-scale in the pipeline.** But it's a REQUIREMENT ("4 scales minimum"), not a RECIPE ("here's how to express the pattern at navigation scale").

3. **Phase 0D-CEILING:** Says "4-scale fractal coherence: Pattern visible at Navigation + Page + Section + Component scales." Again, a REQUIREMENT not a recipe.

4. **Phase 1 (Multi-Axis Questioning):** The NAVIGATE axis ("How does the reader need to move THROUGH this content?") directly addresses navigation-scale concerns. But this is a CONTENT question — it produces reader needs, not navigation-scale CSS specifications.

5. **Phase 2 (Tension Derivation):** Tensions are derived at the content-emotion level. Navigation-scale coherence is not part of tension derivation.

6. **Phase 3 (Metaphor Collapse):** The metaphor may or may not have navigation-level implications. "Geological strata" suggests a TOC that works like a depth gauge. "Floor plan" suggests room-based navigation. But the mapping from metaphor to navigation-scale CSS is NOT specified.

7. **Phase 3.5 (Lock-In Gate):** Checks per-category mechanism minimums (S:1+, T:1+, M:1+, B:1+, R:1+). The Structure/Navigation category (N) includes mechanisms #8 (Scroll Witness), #12 (Progressive Disclosure), #13 (Dark Header), #14 (Footer Mirror), #18 (Data Table). **The gate checks that at least 1 Structure/Navigation mechanism is PLANNED.** But it doesn't check that the navigation-scale PATTERN is coherent with the metaphor.

**TC Output (_build-plan.md) for navigation-scale:**

The build plan includes:
- Zone count and section inventory (implicit TOC material)
- Mechanism deployment including N-category selections
- Background colors per zone (which could inform header/footer colors)
- Isomorphism table (metaphor element -> CSS form) — MAY include navigation elements

**What's MISSING from TC output:**
- No explicit navigation-scale pattern specification
- No header/footer design that echoes the metaphor
- No TOC structure that embodies the content's density pattern
- No fractal coherence verification at the navigation level
- The isomorphism table MAY include navigation elements but this is not REQUIRED

**VERDICT: TC produces the RAW MATERIAL for navigation-scale design but does NOT specify it. The planner thinks about content structure, not page chrome.**

---

### Wave 0.5: Metaphor Validation (Fresh-Eyes Opus)

**What this does for navigation-scale:** Nothing directly. The fresh-eyes agent reads ONLY the metaphor description and asks "Does this tell me what CSS to write?" It does not evaluate whether the metaphor has navigation-scale implications.

**VERDICT: Navigation-scale is invisible at this wave.**

---

### Wave 0.9: Handoff Validation Gate

**The 5 binary checks:**
1. Zone count 2-5?
2. BG colors >= 15 RGB delta between zones?
3. >= 2 grid layouts?
4. Per-category mechs met? (S/T/M/B/R:1+)
5. >= 3 transition types planned?

**What this checks for navigation-scale:**

Check #4 (per-category minimums) ensures at least 1 Structure/Navigation mechanism is planned. This is the ONLY navigation-relevant check.

**What's MISSING:**
- No check that the navigation-scale pattern echoes the overall compositional direction
- No check that header/footer are specified in the plan
- No check that a TOC or section navigation exists for content with 4+ sections
- No check that the dark bookend pattern is planned (or an alternative)
- No check that ARIA landmarks are planned at the navigation level

**VERDICT: Wave 0.9 checks EXISTENCE of a navigation mechanism but not COHERENCE of navigation-scale design.**

---

### Wave 1: Build Execution (9-Phase Recipe)

This is where the rubber meets the road. Let me trace navigation-scale through each recipe phase:

**Phase 0 (Content Analysis + Zone Architecture):** Builder absorbs the plan. Creates zone-to-section mapping. No navigation-scale CSS yet.

**Phase 1 (HTML Skeleton):** The recipe specifies:
- `<nav>`, `<main>`, `<article>`, `<section>` semantic markup
- ARIA landmarks (>= 3)
- Skip link
- Component library classes (>= 10/26)

**This is where the navigation HTML structure is created.** The recipe mentions `<nav>` as a required element. But:
- There is NO specification for what goes IN the nav element
- There is NO connection between the nav element and the TC-derived content structure
- There is NO instruction to create a TOC that echoes the metaphor's navigation pattern
- Skip link is mandated but its destination is not connected to the page's compositional logic

**Phase 2 (CSS Reset + Soul + Base Typography):** Establishes container 960px, base typography, warm palette. No navigation-specific CSS.

**Phase 3 (Zone Backgrounds):** Applies background colors per zone from build plan. The header and footer zones may receive backgrounds here, but:
- The recipe says "Apply background colors per zone from build plan"
- It does NOT distinguish navigation zones from content zones
- There is no specific instruction to make the header background different from content zones
- There is no "bookend pattern" instruction at this phase

**Phase 4 (Structural Borders + Dividers + Transitions):** Border-left on callouts, horizontal rules, 3+ transition types. No navigation-specific borders or transitions.

**Phase 5 (Typography Zones):** 3-zone typography arc (display/body/detail). This applies to ALL text, including navigation text. But:
- No specification for header title typography vs content heading typography
- No specification for TOC link typography vs body link typography
- No specification for footer typography echoing header typography

**Phase 6 (Element-Level Richness):** Hover states, selection styling, link treatments. Could include navigation hover states but no explicit specification.

**Phase 7 (Accessibility):** Skip link, ARIA landmarks >= 3 (main, nav, complementary), focus styles. **This is the SECOND explicit place navigation-scale elements are mandated.** But it's an accessibility mandate, not a compositional one.

**Phase 8 (Verification + Cascade Value Table):**
- Self-check A: "Can I SEE zone boundaries?" — may catch missing header/footer distinction
- Self-check B: "Is typography visibly different?" — does not specifically address navigation typography
- Self-check C: "Do borders exist?" — does not specifically address navigation borders
- Self-check D: Soul constraint checklist — container width check applies
- Self-check E: Cascade Value Table — records computed CSS at EVERY section boundary. This SHOULD capture header-to-content and content-to-footer transitions, but:
  - The instruction says "section boundary" which may be interpreted as content section boundaries only
  - No explicit requirement to include header and footer in the cascade value table
  - No verification that header/footer CSS echoes the overall compositional pattern

**CRITICAL FINDING — The Operational Recipe (File 42) vs the PV2 Diagram:**

The operational recipe (File 42) DOES specify the navigation-scale in detail:
- **Step 2.4** specifies the "Bookend Pattern" — dark warm header + footer with exact CSS values
- The header gets `.page-header` with background `#1E1B18`, border-top 4px solid primary, Instrument Serif h1
- The footer gets `.page-footer` mirroring the header
- This is concrete, recipe-format, with perception checks

BUT the PV2 Pipeline Diagram does NOT reference Step 2.4 or the bookend pattern in its builder phases. The 9-phase recipe in the PV2 diagram (Phases 0-8) is a DIFFERENT structure from the 9-phase recipe in File 42 (Steps 0-8). They overlap but are not identical.

**This is a potential coherence gap:** The PV2 diagram's Phase 1 (HTML Skeleton) mentions `<nav>` and `<header>` as semantic elements, and Phase 7 (Accessibility) mentions ARIA landmarks. But neither phase specifies the BOOKEND PATTERN or connects navigation-scale CSS to the metaphor/pattern.

**VERDICT: Wave 1 has navigation-scale elements scattered across Phases 1, 7, and (in File 42's recipe) Step 2.4. But the 9-phase sequence in the PV2 diagram does not have a dedicated navigation-scale moment. Navigation elements are treated as ACCESSIBILITY requirements, not COMPOSITIONAL elements.**

---

### Wave 2: Dual-Layer Verification

**Layer 1 (Programmatic Gates):**

12 binary checks. Navigation-relevant:
- **SC-01:** Container width 940-960px — applies to header/footer inner containers
- **SC-06:** ARIA landmarks >= 3 — checks navigation structure exists
- **SC-07:** Skip link present — checks accessibility
- **SC-12:** Zone count 2-5 — could include header/footer as zones

**What's NOT checked:**
- No gate verifies that header/footer have distinct visual treatment from content zones
- No gate verifies that navigation typography echoes the page pattern
- No gate verifies that the TOC (if present) reflects the compositional structure
- No gate verifies the bookend pattern (dark header + dark footer)
- No gate verifies that navigation-scale pattern echoes the page-level pattern (fractal coherence at navigation level)

**Layer 2 (Perceptual Audit — 9 Fresh-Eyes Opus Auditors):**

The PA skill has 48 questions. Navigation-relevant questions from the full PA skill:
- PA-13: "Is there a clear visual ending, or does the page just stop?" — checks footer existence
- PA questions about visual hierarchy would catch missing header/footer distinction

But auditors see SCREENSHOTS, not code. They evaluate the PERCEPTION of navigation elements. If the header looks distinct and the footer provides closure, PA catches it. If they don't, PA flags it.

**VERDICT: Wave 2 checks EXISTENCE of navigation elements (ARIA, skip link) but not COMPOSITIONAL COHERENCE of navigation-scale design. The PA auditors MAY catch navigation-scale issues perceptually, but they're not given navigation-specific questions.**

---

### Wave 3: Fix Integration

**Can fixes address navigation-scale issues?**

If the PA weaver identifies navigation-scale problems (e.g., "no visual distinction between header and content," "page just stops without footer"), these would appear in the top-3 blocking issues. The builder can then apply navigation-scale CSS fixes.

BUT: navigation-scale issues compete with all other issues for the top-3 slots. If backgrounds, typography, and borders all need fixing, navigation-scale might not make the cut.

**VERDICT: Wave 3 CAN fix navigation-scale issues but only if they rank in the top-3 blocking findings. No guaranteed navigation-scale attention.**

---

## Where Navigation-Scale Coherence Gets Lost

### Loss Point 1: TC Does Not Specify Navigation-Scale Pattern (Wave 0)

TC's Phase 4.7 (Fractal Consistency Gate) REQUIRES a scale coverage table including the Navigation row:

```
| Scale      | Pattern Expression                     | CSS Evidence   |
|------------|----------------------------------------|----------------|
| Navigation | [How TOC/header reflects pattern]       | [Specific CSS] |
```

This is a MANDATORY deliverable for Ceiling-tier+. But:
- TC is the PLANNER, not the BUILDER. TC fills this table with PLANNED expressions, not actual CSS.
- The table asks "How TOC/header reflects pattern" but provides no RECIPE for HOW to echo a pattern at navigation scale.
- The planner may write "header uses dark background echoing geological bedrock" but the BUILDER never receives a recipe for translating this into specific CSS.

**The gap:** The fractal consistency gate ASKS about navigation-scale but doesn't SPECIFY how to achieve it. It's a CHECK, not a RECIPE.

### Loss Point 2: Handoff Gate Has No Navigation-Specific Checks (Wave 0.9)

The 5 handoff checks verify zone count, background deltas, grid layouts, per-category mechanisms, and transition types. None of these specifically validates:
- Header/footer design
- TOC structure
- Navigation-scale pattern coherence

A plan could pass all 5 checks with zero navigation-scale design.

### Loss Point 3: Builder Recipe Has No Navigation Phase (Wave 1)

The 9-phase recipe in PV2 treats navigation as:
- Phase 1: HTML semantic elements (`<nav>`, `<header>`)
- Phase 7: ARIA landmarks and skip links

Neither phase connects navigation elements to the COMPOSITIONAL PATTERN. The builder knows to create a `<nav>` element and add ARIA landmarks. The builder does NOT receive instructions to:
- Style the header in a way that echoes the page's density pattern
- Create a TOC that reflects the metaphor's navigation logic
- Design footer content that mirrors or bookends the header
- Apply the same CSS channel shifts at navigation scale as at page/section scale

**The File 42 recipe DOES have this** (Step 2.4 Bookend Pattern), but the PV2 diagram's 9-phase structure doesn't incorporate it as a named phase. It's buried in Phase 2 (CSS Reset + Soul + Base Typography) or Phase 3 (Zone Backgrounds) without explicit callout.

### Loss Point 4: No Programmatic Gate for Navigation Coherence (Wave 2)

SC-06 checks ARIA landmarks >= 3. SC-07 checks skip link. But no gate checks:
- Background color delta between header and first content zone
- Typography differentiation between navigation text and body text
- Structural border between header and content (the 3px primary border)
- Footer existence with visual treatment

### Loss Point 5: Fractal Coherence Is a Gate, Not a Recipe (TC Phase 4.7)

The fractal consistency gate REQUIRES documenting navigation-scale pattern expression. But it's a VERIFICATION step, not a GENERATION step. The builder must fill in the table AFTER building, not BEFORE building. By the time the builder gets to Phase 4.7 verification, the navigation elements are already built (or not built) in Phases 1-6.

---

## What the Pipeline DOES Specify for Navigation Scale

Despite the losses, PV2 is not completely silent on navigation scale:

### 1. Structure/Navigation Mechanisms (Mechanism Catalog)

5 mechanisms explicitly serve the Structure/Navigation category:
- **#8 Scroll Witness / Sticky TOC** — Functional navigation element with position: sticky and active state tracking
- **#12 Progressive Disclosure** — Density gradient flow (CRESCENDO pattern)
- **#13 Dark Header + 3px Primary Border** — The proven header pattern (dark bg, red border, Instrument Serif)
- **#14 Footer Mirror** — Dark footer mirroring header (bookend pattern)
- **#18 Data Table** — Mono headers with border categories

Of these, #13 and #14 are the core navigation-scale mechanisms. They are HIGH and MEDIUM perceptual effectiveness respectively. They are documented as "VERY HIGH" metaphor independence — meaning they work across ALL metaphors.

### 2. Per-Category Minimum (TC Phase 3.5 / Handoff Gate)

The per-category minimum requires at least 1 Structure/Navigation mechanism. This guarantees the builder PLANS to use at least one of mechanisms #8/#12/#13/#14/#18.

### 3. Landmark Completeness Gate (TC Phase 4.7B)

The TC skill has a MANDATORY landmark verification:
```
| Landmark              | Present? | CSS Evidence | Visual Treatment |
|----------------------|----------|--------------|-----------------|
| HEADER               | YES / NO | [selector]   | [dark/light]    |
| MAIN CONTENT SECTIONS | YES / NO | [count]      | [zones]         |
| FOOTER               | YES / NO | [selector]   | [mirrors header?] |
```

Middle+ tier requires ALL THREE. This is a BINARY CHECK. But it checks EXISTENCE, not PATTERN COHERENCE.

### 4. Operational Recipe Step 2.4 (File 42)

File 42 has the most detailed navigation-scale specification:
- Exact CSS for `.page-header` (bg #1E1B18, border-top 4px solid primary, Instrument Serif h1 at 42px)
- Exact CSS for `.page-footer` (mirrors header, border-bottom 4px solid primary)
- Header height constraint (<= 20% of first viewport at 1440px = 288px)
- "Why dark bookends: unanimously praised by all 9 PA auditors"

**This is the RECIPE FORMAT that navigation-scale needs.** But it lives in File 42, not in the PV2 diagram's 9-phase structure.

---

## The Core Problem: Navigation-Scale Is Checked But Not Composed

The pipeline treats navigation-scale as:
1. An ACCESSIBILITY requirement (ARIA landmarks, skip link)
2. A MECHANISM to deploy (pick >= 1 from category N)
3. A LANDMARK to verify (header/main/footer present?)

But the pipeline does NOT treat navigation-scale as:
4. A COMPOSITIONAL element that must echo the page's design direction
5. A FRACTAL coherence point where the pattern repeats at the widest zoom level

The critical distinction:

| Treatment | What the builder does | Result |
|-----------|----------------------|--------|
| Accessibility | Add ARIA, skip link | Functional but not designed |
| Mechanism | Deploy dark header (#13) | Visually distinct but not coherent |
| Landmark | Ensure header + footer exist | Present but not composed |
| **Compositional** | **Header/footer/TOC embody the metaphor at navigation scale** | **DESIGNED** |

The pipeline ensures the first three. It does not ensure the fourth.

---

## What CSS Properties Enforce Navigation-Scale Pattern?

If navigation-scale pattern coherence were specified, these CSS properties would enforce it:

### Header Pattern Echoing

```css
/* If page pattern is CRESCENDO (sparse-to-dense): */
/* Header should be the SPARSEST zone — generous padding, light density */
header {
  padding: var(--space-16) var(--space-8);  /* generous = sparse */
  background: #1E1B18;  /* dark = structural landmark */
  border-top: 4px solid var(--color-primary);  /* heavy = structural weight */
}

/* The SAME density direction should echo in header content: */
header h1 { font-size: 42px; }  /* large = sparse (wide strokes) */
header .subtitle { font-size: 20px; }  /* medium */
header .meta { font-size: 0.75rem; }  /* small = beginning of density increase */
```

### TOC Pattern Echoing

```css
/* If page uses zones with background differentiation: */
/* TOC items should echo zone backgrounds or densities */
nav.toc a[data-zone="sparse"] { padding-left: 16px; }
nav.toc a[data-zone="dense"] { padding-left: 32px; }
/* OR: TOC density echoes content density */
```

### Footer Pattern Mirroring

```css
/* Footer should CLOSE the pattern loop: */
/* If CRESCENDO opened sparse, footer returns to sparse */
footer {
  padding: var(--space-16) var(--space-8);  /* returns to header's spacing */
  background: #1E1B18;  /* mirrors header */
  border-bottom: 4px solid var(--color-primary);  /* mirrors header border */
}
```

### Fractal Verification

The cascade value table SHOULD include header and footer transitions:
```
| Boundary          | bg-color | font-size | font-weight | letter-spacing | border | padding |
|-------------------|----------|-----------|-------------|----------------|--------|---------|
| header → zone-s1  | #1E1B18 → #FEF9F5 | 42px → 26px | 400 → 400 | 0.08em → 0em | 4px → 0 | 64px → 80px |
| zone-sN → footer  | #FEF5EB → #1E1B18 | 17px → 24px | 400 → 400 | 0em → 0.08em | 1px → 4px | 48px → 64px |
```

This would make navigation-scale transitions VERIFIABLE — you could check that >= 3 channels shift at the header→content and content→footer boundaries.

---

## Recommendations

### 1. Add Navigation-Scale Pattern to TC Output

TC's _build-plan.md should REQUIRE a navigation-scale specification:
```
NAVIGATION SCALE:
  Header: [design direction echo — e.g., "sparse opening matching CRESCENDO pattern"]
  TOC: [structure — e.g., "section links mirror zone progression"]
  Footer: [closure type — e.g., "dark bookend mirroring header, sparse"]
  Pattern echo: [how navigation echoes page-level pattern in >= 2 CSS channels]
```

### 2. Add Navigation Gate to Handoff (Wave 0.9)

Add a 6th binary check:
```
[ ] Header + footer specified with distinct visual treatment from content zones?
```

### 3. Add Navigation Phase to Builder Recipe

Instead of scattering navigation across Phases 1 and 7, create a dedicated navigation moment — either as a sub-phase of Phase 1 (HTML Skeleton) or as a dedicated Phase 1.5:

```
Phase 1.5: Navigation Chrome
  - Apply dark bookend pattern (header + footer) from mechanism #13/#14
  - If Ceiling+: Style header/footer to echo metaphor at navigation level
  - If content has 4+ sections: Create sticky TOC (mechanism #8)
  - "Can you SEE header and footer as structural landmarks from 50% zoom?"
```

### 4. Add Navigation Gate to Programmatic Verification (Wave 2)

Add SC-13 and SC-14:
```
SC-13: Header background != first content zone background (delta >= 15 RGB)
SC-14: Footer exists AND has visual treatment (background != transparent/inherit)
```

### 5. Include Header/Footer in Cascade Value Table

Phase 8's cascade value table instruction should explicitly say:
```
Record computed CSS at EVERY section boundary INCLUDING header→first-section
and last-section→footer.
```

### 6. Make Fractal Gate GENERATIVE, Not Just Verificational

Instead of asking the builder to fill in the navigation row AFTER building, give the builder a RECIPE for navigation-scale pattern expression:

```
NAVIGATION-SCALE RECIPE (for Ceiling+):
1. Read your metaphor's primary CSS direction (e.g., sparse→dense for CRESCENDO)
2. Header: Apply the OPENING state of that direction
   - CRESCENDO: sparse padding, large typography, open breathing
   - F-PATTERN: strong left spine, hierarchical labels
   - PULSE: neutral breathing zone (between rhythmic peaks)
3. Footer: Apply the CLOSING state
   - CRESCENDO: return to sparse (bookend)
   - F-PATTERN: summary spine (condensed hierarchy)
   - PULSE: breathing pause (resting state)
4. Verify: Does header share >= 2 CSS channel values with the sparsest content zone?
```

---

## Summary: The Navigation Scale Loss Map

```
Wave 0 (TC):
  [PARTIAL] TC Phase 4.7 REQUIRES navigation-scale row in fractal table
  [MISSING] TC does not SPECIFY how to express pattern at navigation scale
  [MISSING] TC output (_build-plan.md) has no navigation-scale specification field

Wave 0.5 (Metaphor Validation):
  [MISSING] No navigation-scale evaluation

Wave 0.9 (Handoff Gate):
  [PARTIAL] Per-category minimum ensures 1 N-mechanism planned
  [MISSING] No gate for header/footer design or navigation-pattern coherence

Wave 1 (Build):
  [PRESENT] Phase 1 mandates <nav>, <header>, <footer> HTML
  [PRESENT] Phase 7 mandates ARIA landmarks, skip link
  [PRESENT] File 42 Step 2.4 specifies bookend pattern with exact CSS
  [MISSING] PV2 diagram's 9-phase recipe has no dedicated navigation phase
  [MISSING] No recipe connecting navigation CSS to metaphor/pattern
  [MISSING] No "Can you SEE?" check for navigation-scale landmarks

Wave 2 (Verification):
  [PRESENT] SC-06 checks ARIA landmarks >= 3
  [PRESENT] SC-07 checks skip link
  [PRESENT] PA auditors may catch missing navigation coherence perceptually
  [MISSING] No programmatic gate for header/footer visual distinction
  [MISSING] No gate for navigation-scale pattern coherence
  [MISSING] Cascade value table doesn't explicitly include header/footer transitions

Wave 3 (Fix):
  [PARTIAL] Can fix navigation issues if they make top-3 blocking
  [MISSING] No guaranteed navigation-scale attention
```

**Bottom line:** PV2 ensures navigation-scale elements EXIST (HTML, ARIA, at least 1 N-mechanism) but does not ensure they are COMPOSED (echoing the page's design pattern at the widest zoom level). The critical gap is between EXISTENCE and COHERENCE. The operational recipe (File 42) has detailed bookend CSS that partially fills this gap, but this CSS is content-agnostic (always dark header + dark footer) rather than metaphor-responsive. The fractal consistency gate asks about navigation-scale coherence but provides no recipe for achieving it.

The navigation scale is where the "recipe vs checklist" problem manifests at the architectural level: the pipeline CHECKS for navigation elements (checklist behavior) rather than SPECIFYING how to compose them (recipe behavior).
