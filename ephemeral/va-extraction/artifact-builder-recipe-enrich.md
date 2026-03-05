# Builder Recipe: ENRICH PASS (Pass B of 2)
Date: 2026-02-26
Status: AUTHORITATIVE (extends artifact-builder-recipe-compose.md)
Pass: B (ENRICH — adds behavioral CSS, accessibility, self-evaluation)
Dispositions: D-07 (Edge Intentionality) + D-08 (Skeleton Test)
Creative Authority: ADD-ONLY within composition established by Pass A.

---

## How to Use This Document

You received a **COMPLETE HTML page from Pass A.** Your job is to ENRICH it — add hover states, micro-refinements, accessibility features, and thorough self-evaluation. You do NOT restructure, restyle zones, or change the metaphor.

**What you received:**
- Pass A HTML output (complete page with zones, transitions, backgrounds, typography, layout)
- Execution Brief (zone context, metaphor, perception thresholds)
- tokens.css (hover color vocabulary)
- This recipe (~200 lines)

**What you produce:**
- Enriched HTML with behavioral CSS, accessibility layer, and documented self-assessment
- `<!-- EXPERIENTIAL-CHECK: ... -->` comment with readability findings
- `<!-- SELF-EVALUATION: ... -->` comment with full assessment

---

## PHASE 1: ORIENT

### Step 1.1: Read the Pass A HTML

Read the complete HTML from top to bottom. Identify:
- The governing metaphor (from `<!-- CONVICTION: ... -->`)
- The zone structure (how many zones, their backgrounds)
- The density arc (which zones are dense, which are sparse)
- The quiet zone (D-09 — which zone is deliberately plainer)
- INTENT comments (read the builder's per-decision rationale)

### Step 1.2: Re-read tokens.css (183 lines)

Focus on hover-relevant tokens: color values for interactive states.

### Step 1.3: Re-read the Execution Brief

Focus on zone definitions and perception thresholds (for ::selection contrast).

---

## PHASE 2: DEPLOY D-07 — EDGE INTENTIONALITY [EXPERIMENTAL]

**PURPOSE:** Every edge of every element should be intentional. Borders, margins, alignment — each edge is a decision, not a default.

**VOCABULARY (Delight techniques):**
- Hover states revealing hidden content (table row tint, link border)
- Typographic micro-refinement (tabular-nums, text-indent)
- Zone-specific ::selection colors
- Print-specific styling (@media print)
- First/last child edge treatments

**DESIGN INTENTION:** D-07 creates conditions for DELIGHT — small unexpected refinements that reward attention. Distributed throughout, more in high-density zones.

Apply these techniques to the existing page:

### Step 2.1: Hover States
- Table rows: subtle background tint on hover
- Links: border-bottom or color shift on hover
- Callouts: slight border-color shift on hover
- Cards: border-left-width increase on hover

**Quiet zone constraint:** Hover states in the quiet zone (D-09) should be subtle (1px border shift, slight opacity change) rather than dramatic (color change, size increase). Respect the zone's deliberately restrained character.

### Step 2.2: Micro-Typography
- Numbers in tables/lists: `font-variant-numeric: tabular-nums`
- Opening paragraphs: `text-indent: 1.5em` (if compositionally appropriate)
- Zone-specific `::selection` colors (match zone background warmth)

### Step 2.3: Print Styles
- `@media print { ... }` — hide navigation, adjust margins, ensure readability

### Step 2.4: Edge Treatments
- First child of each zone: distinctive top treatment (padding or border)
- Last child of each zone: breathing space before transition
- Even/odd row differentiation in tables (subtle background alternation)

### Step 2.5: Reduced Motion
- `@media (prefers-reduced-motion: reduce) { ... }` — disable any transitions/animations

### Step 2.6: Narrate D-07 decisions

Add INTENT comments for your D-07 decisions:
```html
<!-- INTENT [D-07] hover-states | what you decided | brief ref or CREATIVE | trade-off -->
```

---

## PHASE 3: DEPLOY ACCESSIBILITY

### Step 3.1: Skip Link
Add `<a href="#main" class="skip-link">Skip to main content</a>` as first child of `<body>`.
Style: visually hidden, visible on :focus.

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary, #E83025);
  color: white;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
```

### Step 3.2: ARIA Landmarks
- `<header role="banner">`
- `<main id="main" role="main">`
- `<nav role="navigation">` (if TOC exists)
- `<footer role="contentinfo">`

### Step 3.3: Heading Hierarchy
Verify headings skip no levels. Fix if violated (this is the ONE permitted structural change).

### Step 3.4: Focus-Visible
All interactive elements:
```css
:focus-visible {
  outline: 3px solid var(--color-primary, #E83025);
  outline-offset: 2px;
}
```

### Step 3.5: Color Contrast
Verify text meets WCAG 2.1 AA contrast ratios (4.5:1 for body text, 3:1 for large text). If any text fails, increase contrast.

### Step 3.6: Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## PHASE 4: DEPLOY D-08 — THE SKELETON TEST [EXPERIMENTAL]

**PURPOSE:** Mentally remove all content from your page. Does the skeleton (spacing, borders, backgrounds, typography framework) still have shape? If the skeleton looks like a uniform stack of boxes, the page is APPLIED. If the skeleton has rhythm, proportion, and intentionality, the page is COMPOSED.

Report your finding in the self-evaluation (Phase 5, Step 5.4).

---

## PHASE 5: FULL SELF-EVALUATION

### Step 5.0: Experience your page as a reader (MANDATORY — before any evaluation)

Before assessing anything as a builder, USE your page as a reader would.

**CRITICAL: VISUAL VERIFICATION.** When you take a screenshot to assess your page,
read the text FROM THE RENDERED PIXELS — not from your knowledge of what the HTML
source says. You wrote the HTML; you know what every label says. A reader does not.
If the rendered text is too small, too low-contrast, or too crowded to read visually,
it is illegible — even though you can "read" it by recalling the source code.

**READ:** Scroll through from top to bottom at reading speed. Attempt to read every
piece of text — headings, body paragraphs, labels, captions, chart annotations,
callout text, metadata, footer text. Do not skim. Attempt comprehension.

Report THREE things:
1. **Failed reading:** Every place where text was illegible, too small, too low-contrast,
   or obscured by layout.
2. **Effortful reading:** Every place where you had to slow down, re-read, or squint.
3. **Skipped text:** Every place where you instinctively wanted to skip because the text
   looked too dense, too small, or too low-contrast to bother with.

**EXTRACT:** For every chart, diagram, table, or visual element — attempt to extract
the specific information it communicates. Report where extraction fails: axis labels
too small, legend entries unclear, data series indistinguishable, flow connections
ambiguous.

**NAVIGATE:** Attempt to use the page's navigation structure. Follow the heading
hierarchy. If a TOC exists, trace each entry to its destination. Report breakdowns.

Place your experiential findings in a `<!-- EXPERIENTIAL-CHECK: ... -->` HTML comment
at the top of your file, immediately after the conviction statement.

**Priority rule:** Any comprehension failure found in Step 5.0 OVERRIDES and takes
priority over findings from Steps 5.1-5.7 below. A page with beautiful compositional
intelligence that cannot be read is a failed page.

> Source: Gas Town incident (2026-02-25) — pipeline ranked illegible chart text as Fix #5
> behind 4 imperceptible CSS issues. The builder's experiential self-check is the first
> line of defense. GR-63 verifies this comment exists.

### Step 5.1: Assess text legibility across the page

Read through every zone of your page at normal browser zoom. Assess: Can body text be comfortably read at arm's length? Are all diagram labels, chart annotations, and navigation elements legible? Look at dense zones where text may have been compressed — do captions, footnotes, and secondary text remain readable? If any text feels strained or requires leaning in, increase font-size or line-height for that element.

> Source: ME-004 (builder legibility self-check). Legibility is the foundation — a page that cannot be read cannot communicate.

### Step 5.2: Assess visual component clarity

Scan every chart, diagram, table, and visual element on the page. Assess: Can you identify what each visual element is communicating within 5 seconds of looking at it? Are axis labels, legends, and data annotations large enough to read without zooming? If any visual component requires decoding effort — squinting at small labels, guessing what colors represent, tracing unlabeled connections — increase the relevant text sizes, add labels, or simplify the visual until its message is immediate.

> Source: ME-004 (visual component clarity check). Visual elements that cannot be quickly understood become decoration, not communication.

### Step 5.3: Screenshot and assess vs conviction

Take a Playwright screenshot and compare against the conviction statement from Pass A ("This page is about X. Metaphor Y. Arc Z.").

> This is the builder self-evaluation loop. You SEE your own output (Tier 4 info via EXPERIENCE).

### Step 5.4: Apply the Skeleton Test (D-08)

Mentally strip content. Does the skeleton have shape? Report: COMPOSED (rhythm, proportion, intentionality) or APPLIED (uniform stack of boxes).

### Step 5.5: Apply the Reader's Scroll (D-05)

Scroll through as a reader. Does the journey have pacing?

### Step 5.6: Check mode indicators

Is the page in COMPOSED mode or APPLIED mode? Check:
- Mode determinant 1: Are custom property names concept-based or position-based?
- Mode determinant 2: Do components modulate per zone or stay identical?
- Mode determinant 3: Are layout choices driven by metaphor or by content-type alone?
- Mode determinant 5: Can you articulate the governing logic in one sentence?

### Step 5.7: Assess output targets

Your output should be:
- Complete HTML page (enriched from Pass A)
- Behavioral CSS added (hover states, ::selection, print, reduced-motion)
- Accessible (skip link, ARIA, focus-visible, heading hierarchy, contrast)
- With designed moments (D-07 micro-refinements)
- `<!-- EXPERIENTIAL-CHECK: ... -->` comment documenting readability findings
- `<!-- SELF-EVALUATION: ... -->` comment documenting all findings from Steps 5.0-5.7

Place all findings in:
```html
<!-- EXPERIENTIAL-CHECK: [Step 5.0 findings — failed/effortful/skipped reading] -->
<!-- SELF-EVALUATION: [Steps 5.1-5.7 findings — legibility, clarity, conviction match, skeleton, scroll, mode, targets] -->
```

---

## ADD-ONLY CONSTRAINT

You are ADDING to Pass A's composition. Prohibited modifications:

- **NO** changing zone backgrounds (BV-02 locked)
- **NO** changing layout structure (grid, flexbox, zone ordering)
- **NO** adding or removing zones
- **NO** changing font-size, font-weight, or line-height on any element
- **NO** changing padding or margin on any zone or section
- **NO** changing border-width or border-color on any element
- **NO** moving content between zones
- **NO** changing the governing metaphor or CSS custom property names

**Permitted operations:**
- ADD inline CSS rules for: `:hover`, `:focus-visible`, `::selection`, `@media print`, `@media (prefers-reduced-motion)`, `:first-child`, `:last-child`, `:nth-child`
- ADD ARIA attributes (`role`, `aria-label`, `aria-describedby`)
- ADD skip link element
- ADD `tabindex` attributes for keyboard navigation
- ADD `<figure>` / `<figcaption>` wrappers around images
- ADD HTML comment blocks for self-evaluation
- MODIFY heading hierarchy ONLY if it violates accessibility (e.g., `<h1>` -> `<h2>` -> `<h4>` skip -> fix to `<h3>`)
- MODIFY `font-variant-numeric: tabular-nums` on numeric elements
- MODIFY `text-indent` on paragraphs (D-07 micro-refinement)

**If you discover a compositional flaw during D-08 or Step 5.0:** DOCUMENT it in the self-evaluation comment but do NOT fix it. The PA audit will catch it and the IMPROVE protocol will address it.

```html
<!-- EXPERIENTIAL-CHECK: COMPOSITIONAL-ISSUE: [description of flaw found during assessment] -->
```

### Step 5.8: IMPROVEMENTS Comment

After completing your self-evaluation, add an IMPROVEMENTS comment block listing 5-10 things you would improve if given another pass. This feeds the convergence model for iteration decisions.

```html
<!-- IMPROVEMENTS:
1. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
2. Category | Zone | What I would change | Confidence (LOW/MED/HIGH)
... (5-10 items)
-->
```

**Categories:** Typography, Spacing, Color, Component, Layout, Interaction, Metaphor, Accessibility
**Confidence:** LOW = might help, MED = would probably help, HIGH = definitely needed
**Rule:** If 3+ items are HIGH confidence, the orchestrator MUST override RELEASE to IMPROVE.

---

*End of Pass B (Enrich) recipe. This file is self-contained for the Enrich Builder agent.*
