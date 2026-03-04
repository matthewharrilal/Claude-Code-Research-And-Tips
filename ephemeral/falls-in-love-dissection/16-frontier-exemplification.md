# Frontier Technique Exemplification: Complete CSS+HTML Examples

**Date:** 2026-03-03
**Task:** Build 4 complete, copy-paste-ready CSS+HTML examples demonstrating frontier techniques beyond AD-006
**Evidence base:** `10-beyond-ad006-frontier.md` (992 lines), `11-synthesis.md` (Section 2.5), `07-invention-archaeology.md` (invention taxonomy)

---

## Why These Examples Exist

The synthesis (Section 2.5) identified a critical gap: the builder who reaches Phase 3+ engagement and wants to reach for a temporal or container-aware spatial form has NO CONCRETE REFERENCE. The mechanism catalog names techniques. The frontier map describes possibilities. But neither provides the complete, working CSS that a builder can study, internalize, and adapt.

These examples are not templates to copy. They are vocabulary entries -- complete implementations that demonstrate how frontier CSS capabilities serve content meaning, so a builder encountering similar content demands can recognize the structural opportunity and execute it.

Each example includes:
1. The content scenario (WHY this technique is content-driven)
2. Complete, working CSS with fallbacks
3. Minimal HTML structure
4. Why it goes beyond AD-006 specifically
5. Browser support notes
6. Responsive degradation strategy

---

## Example 1: Container Queries -- The Spatially Self-Aware Component

### Content Scenario

You are building a page about the evolution of a scientific theory. The theory begins as a marginal hypothesis (mentioned briefly in a narrow sidebar annotation), grows into a contested idea (appearing inline as a standard callout within body text), and eventually becomes the dominant paradigm (commanding a full-width hero treatment). The SAME "theory card" component appears at all three stages. Its visual form must reflect where it lives -- the component must know its own spatial context and render accordingly.

This is content-driven because the component's three presentations are not responsive breakpoints (the viewport width does not change). They are SEMANTIC states: the theory's importance determines the container it lives in, and the container width determines how the component renders. The spatial context IS the content meaning.

### Why It Goes Beyond AD-006

AD-006 uses `@media (max-width: 768px)` for responsive collapse -- all components collapse at the same viewport width regardless of their position on the page. A callout in the narrow annotation column renders identically to one in the wide main column until the entire viewport shrinks. Container queries make components spatially self-aware: the same component renders differently based on WHERE it is, not just how wide the browser window is. This is the difference between "the page responds to the viewport" and "each component responds to its own spatial context."

### Browser Support

- Chrome 105+, Edge 105+, Firefox 110+, Safari 16+
- Global support: ~95%. Production-ready.
- Fallback: Components render in their "medium" (default) state in unsupported browsers.

### Complete CSS + HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Container Queries: Spatially Self-Aware Components</title>
<style>
  /* ============================================
     TOKENS
     ============================================ */
  :root {
    --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Menlo', monospace;
    --color-bg: #fafafa;
    --color-text: #171717;
    --color-text-secondary: #6b6b6b;
    --color-text-tertiary: #a1a1a1;
    --color-accent: #3b82f6;
    --color-accent-muted: #dbeafe;
    --color-surface: #ffffff;
    --color-border: #e5e5e5;
    --color-border-accent: #93c5fd;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
    --space-8: 32px;
    --space-12: 48px;
    --space-16: 64px;
  }

  body {
    font-family: var(--font-body);
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.7;
    margin: 0;
    padding: var(--space-12) var(--space-6);
  }

  .page-layout {
    max-width: 960px;
    margin: 0 auto;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.01em;
    margin: var(--space-16) 0 var(--space-6);
    color: var(--color-text);
  }

  p {
    margin: 0 0 var(--space-4);
    font-size: 15px;
  }

  /* ============================================
     THE THREE CONTAINERS
     Each establishes a named container context.
     The theory card inside will respond to
     its container's width, NOT the viewport.
     ============================================ */

  /* Narrow context: sidebar annotation column */
  .context-narrow {
    container-type: inline-size;
    container-name: theory-zone;
    width: 220px;
    padding: var(--space-3);
    border-left: 1px solid var(--color-border);
    margin-left: auto;
    float: right;
    margin-bottom: var(--space-4);
    margin-left: var(--space-6);
  }

  /* Medium context: inline within body text */
  .context-medium {
    container-type: inline-size;
    container-name: theory-zone;
    max-width: 580px;
    margin: var(--space-8) 0;
  }

  /* Wide context: full-width hero treatment */
  .context-wide {
    container-type: inline-size;
    container-name: theory-zone;
    width: 100%;
    margin: var(--space-12) 0;
  }

  /* ============================================
     THE THEORY CARD
     Default (medium) state first.
     Container queries modify for narrow and wide.
     ============================================ */

  .theory-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-left: 3px solid var(--color-accent);
    border-radius: 6px;
    padding: var(--space-6);
    transition: border-color 150ms ease;
  }

  .theory-card .card-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-text-tertiary);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: var(--space-2);
  }

  .theory-card .card-title {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.01em;
    margin-bottom: var(--space-3);
    color: var(--color-text);
  }

  .theory-card .card-body {
    font-size: 15px;
    line-height: 1.7;
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4);
  }

  .theory-card .card-evidence {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--color-text-secondary);
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg);
    border-radius: 4px;
    border: 1px solid var(--color-border);
  }

  .theory-card .card-meta {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-4);
    font-size: 13px;
    color: var(--color-text-tertiary);
  }

  .theory-card .card-meta .tag {
    padding: 2px 10px;
    border-radius: 9999px;
    background: var(--color-accent-muted);
    color: var(--color-accent);
    font-size: 12px;
    font-weight: 500;
  }

  /* ============================================
     NARROW CONTAINER: Compact seed-form
     When the theory card lives in a container
     narrower than 280px, it collapses to a
     minimal reference -- just label + title.
     The theory is a footnote here.
     ============================================ */

  @container theory-zone (max-width: 280px) {
    .theory-card {
      padding: var(--space-3);
      border-left-width: 2px;
      border-radius: 4px;
    }

    .theory-card .card-label {
      font-size: 10px;
      margin-bottom: 4px;
    }

    .theory-card .card-title {
      font-size: 14px;
      font-weight: 400;
      font-family: var(--font-mono);
      letter-spacing: 0;
      margin-bottom: 0;
    }

    /* Body, evidence, and meta are hidden in narrow context.
       The theory hasn't earned space yet. */
    .theory-card .card-body,
    .theory-card .card-evidence,
    .theory-card .card-meta {
      display: none;
    }
  }

  /* ============================================
     WIDE CONTAINER: Full hero exposition
     When the theory card lives in a container
     wider than 700px, it expands into a
     commanding, horizontal hero layout.
     The theory IS the section.
     ============================================ */

  @container theory-zone (min-width: 700px) {
    .theory-card {
      display: grid;
      grid-template-columns: 1fr 1.618fr;
      grid-template-rows: auto auto 1fr auto;
      gap: 0 var(--space-8);
      padding: var(--space-8) var(--space-12);
      border-left-width: 4px;
      border-radius: 8px;
      min-height: 200px;
    }

    .theory-card .card-label {
      grid-column: 1;
      grid-row: 1;
      font-size: 12px;
      margin-bottom: var(--space-3);
    }

    .theory-card .card-title {
      grid-column: 1;
      grid-row: 2;
      font-size: 24px;
      letter-spacing: -0.02em;
      line-height: 1.3;
      margin-bottom: var(--space-4);
    }

    .theory-card .card-meta {
      grid-column: 1;
      grid-row: 3;
      align-self: end;
    }

    .theory-card .card-body {
      grid-column: 2;
      grid-row: 1 / 3;
      font-size: 16px;
      line-height: 1.8;
      border-left: 1px solid var(--color-border);
      padding-left: var(--space-8);
    }

    .theory-card .card-evidence {
      grid-column: 2;
      grid-row: 3 / 5;
      align-self: end;
      margin-top: var(--space-4);
    }
  }

  /* ============================================
     VIEWPORT RESPONSIVE (fallback + mobile)
     This handles the VIEWPORT, not the container.
     On mobile, the containers themselves shrink,
     which triggers the container queries above.
     ============================================ */

  @media (max-width: 768px) {
    .context-narrow {
      float: none;
      width: 100%;
      margin-left: 0;
      margin-bottom: var(--space-6);
    }

    .page-layout {
      padding: 0 var(--space-4);
    }
  }

  /* ============================================
     DEMO LAYOUT: Three zones side by side
     to show the same component in 3 contexts
     ============================================ */
  .demo-row {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: var(--space-8);
    align-items: start;
    margin: var(--space-8) 0;
    padding: var(--space-8);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .demo-row .demo-label {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding-top: var(--space-2);
  }

  .demo-row .demo-label strong {
    display: block;
    font-size: 14px;
    color: var(--color-text);
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    .demo-row {
      grid-template-columns: 1fr;
    }
  }
</style>
</head>
<body>
  <div class="page-layout">
    <h2>Container Queries: The Same Component in Three Spatial Contexts</h2>

    <p>The same <code>.theory-card</code> component appears in three containers of different widths.
    No media queries control the card's layout -- only <code>@container</code> rules. The card
    adapts to WHERE it lives, not how wide the viewport is.</p>

    <!-- NARROW CONTEXT: Sidebar annotation -->
    <div class="demo-row">
      <div class="demo-label">
        <strong>Narrow context</strong>
        Container width: 220px<br>
        The theory is a marginal note.
      </div>
      <div>
        <div class="context-narrow">
          <div class="theory-card">
            <div class="card-label">Hypothesis</div>
            <div class="card-title">Tectonic Feedback Loops</div>
            <div class="card-body">The interaction between mantle convection and crustal deformation creates self-reinforcing cycles that amplify initial perturbations beyond what linear models predict.</div>
            <div class="card-evidence">Evidence: 3 studies (1987-1991), n=12 field observations</div>
            <div class="card-meta">
              <span class="tag">Marginal</span>
              <span>Confidence: Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MEDIUM CONTEXT: Inline callout -->
    <div class="demo-row">
      <div class="demo-label">
        <strong>Medium context</strong>
        Container width: 580px<br>
        The theory is a contested idea.
      </div>
      <div>
        <div class="context-medium">
          <div class="theory-card">
            <div class="card-label">Emerging Theory</div>
            <div class="card-title">Tectonic Feedback Loops</div>
            <div class="card-body">The interaction between mantle convection and crustal deformation creates self-reinforcing cycles that amplify initial perturbations beyond what linear models predict. Three independent labs have now replicated the core finding.</div>
            <div class="card-evidence">Evidence: 14 studies (1987-2003), n=847 observations, p&lt;0.01 in 11/14</div>
            <div class="card-meta">
              <span class="tag">Contested</span>
              <span>Confidence: Medium</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WIDE CONTEXT: Hero treatment -->
    <div class="demo-row" style="grid-template-columns: 1fr;">
      <div class="demo-label">
        <strong>Wide context</strong>
        Container width: 100% (full row)<br>
        The theory is the dominant paradigm. It commands the space.
      </div>
      <div>
        <div class="context-wide">
          <div class="theory-card">
            <div class="card-label">Established Paradigm</div>
            <div class="card-title">Tectonic Feedback Loops</div>
            <div class="card-body">The interaction between mantle convection and crustal deformation creates self-reinforcing cycles that amplify initial perturbations beyond what linear models predict. What began as a marginal hypothesis in three small studies has become the organizing principle for an entire subdiscipline. The feedback model now explains observed crustal thickness anomalies, volcanic periodicity, and subduction zone asymmetries that previous frameworks left unexplained.</div>
            <div class="card-evidence">Evidence: 142 studies (1987-2024), n=23,000+ observations, 4 independent meta-analyses confirming r>0.8</div>
            <div class="card-meta">
              <span class="tag">Consensus</span>
              <span>Confidence: High</span>
              <span>Citations: 4,200+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

### Responsive Degradation Strategy

**Unsupported browsers** (pre-Chrome 105, pre-Firefox 110, pre-Safari 16): The `@container` rules are ignored. The card renders in its default (medium) state everywhere. This is acceptable because the medium state is the most complete presentation -- it shows all fields. The narrow and wide states are enhancements.

**Mobile viewports**: On narrow screens, the containers themselves shrink. The `context-narrow` sidebar drops `float` and goes full-width via `@media`. The container queries still fire based on the container's actual width, so the card may switch to narrow presentation even in the inline context on very small screens. This is correct behavior: a narrow container IS a narrow container regardless of whether it was designed as a sidebar or collapsed by the viewport.

**Print**: Container queries work in print contexts. The print width determines the container width, which determines the card's presentation. No special handling needed.

---

## Example 2: Scroll-Driven Animations -- The Convergence Funnel

### Content Scenario

You are building a page about a research process that begins with broad, divergent exploration and progressively narrows toward a single conclusion. The early sections survey the field (wide, spacious, many directions). The middle sections compare and eliminate options (narrowing, increasing density). The final section presents the conclusion (focused, compressed, high conviction).

The spatial form must PHYSICALLY CONVERGE as the reader scrolls. Margins narrow. Background darkens. Borders thicken. Typography tightens. The page is not a metaphor for a funnel -- the page IS a funnel. The spatial evolution tracks the argumentative evolution. A reader who scrolls quickly should FEEL the narrowing even peripherally, before reading a word.

### Why It Goes Beyond AD-006

AD-006 uses one scroll-driven element: a 3px JavaScript progress bar at the top. Every section has a FIXED layout. The margins at the top of the page are identical to the margins at the bottom. The idea that layout properties should change as the reader scrolls -- that the page is a TEMPORAL spatial experience, not a static document -- is the paradigm shift. AD-006 answers "what layout does this section have?" Scroll-driven animations answer "how does this page's spatial form evolve as the reader moves through it?"

### Browser Support

- Chrome 115+, Edge 115+: Full support for `animation-timeline: scroll()` and `animation-timeline: view()`
- Firefox 110+: Behind `layout.css.scroll-driven-animations.enabled` flag (expected stable soon)
- Safari: Not yet supported (as of early 2026)
- **Progressive enhancement is essential.** The fallback is a static page with fixed margins. The page works without scroll-driven animations; they add a layer of spatial meaning for supporting browsers.

### Complete CSS + HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scroll-Driven Animations: The Convergence Funnel</title>
<style>
  /* ============================================
     TOKENS
     ============================================ */
  :root {
    --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Menlo', monospace;
    --color-bg-surface: #fafafa;
    --color-bg-deep: #171717;
    --color-text-light: #171717;
    --color-text-on-dark: #ededed;
    --color-text-secondary: #6b6b6b;
    --color-accent: #3b82f6;
    --color-border: #e5e5e5;
    --color-border-strong: #171717;
  }

  body {
    font-family: var(--font-body);
    background: var(--color-bg-surface);
    color: var(--color-text-light);
    line-height: 1.7;
    margin: 0;
    padding: 0;
  }

  /* ============================================
     GLOBAL SCROLL-DRIVEN CONVERGENCE
     The entire page narrows as you scroll.
     animation-timeline: scroll() ties the
     animation to the root scroller's position.
     ============================================ */

  .convergence-page {
    /* Fallback: static padding for non-supporting browsers */
    padding-left: 120px;
    padding-right: 120px;

    /* Scroll-driven animation overrides the fallback */
    animation: converge-margins linear both;
    animation-timeline: scroll();
    animation-range: 0% 100%;
  }

  @keyframes converge-margins {
    0% {
      padding-left: 160px;
      padding-right: 160px;
    }
    60% {
      padding-left: 48px;
      padding-right: 48px;
    }
    100% {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  /* ============================================
     PER-SECTION: VIEW-DRIVEN ANIMATIONS
     Each section animates as it enters and
     traverses the viewport. animation-timeline:
     view() ties to the element's own visibility.
     ============================================ */

  .funnel-section {
    padding: 64px 0;
    border-bottom: 1px solid var(--color-border);
    position: relative;
  }

  .funnel-section h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.01em;
    margin: 0 0 24px;
  }

  .funnel-section p {
    font-size: 15px;
    margin: 0 0 16px;
    max-width: 720px;
  }

  /* --- Stage 1: Survey (wide, light, sparse) --- */

  .stage-survey {
    /* Fallback */
    background: var(--color-bg-surface);
    border-left: 1px solid var(--color-border);
    padding-left: 24px;
    letter-spacing: 0.01em;
    line-height: 1.8;

    /* View-driven: background and border deepen as you scroll through */
    animation: deepen-survey linear both;
    animation-timeline: view();
    animation-range: entry 0% exit 100%;
  }

  @keyframes deepen-survey {
    0% {
      background-color: #fafafa;
      border-left-width: 1px;
      border-left-color: #e5e5e5;
      letter-spacing: 0.01em;
      line-height: 1.85;
    }
    100% {
      background-color: #f4f4f5;
      border-left-width: 2px;
      border-left-color: #d4d4d4;
      letter-spacing: 0.005em;
      line-height: 1.75;
    }
  }

  /* --- Stage 2: Comparison (narrowing, medium density) --- */

  .stage-compare {
    background: #f4f4f5;
    border-left: 2px solid #a1a1a1;
    padding-left: 20px;
    line-height: 1.65;

    animation: deepen-compare linear both;
    animation-timeline: view();
    animation-range: entry 0% exit 100%;
  }

  @keyframes deepen-compare {
    0% {
      background-color: #f4f4f5;
      border-left-width: 2px;
      border-left-color: #a1a1a1;
      letter-spacing: 0.005em;
      line-height: 1.7;
    }
    100% {
      background-color: #e8e8ea;
      border-left-width: 3px;
      border-left-color: #6b6b6b;
      letter-spacing: 0em;
      line-height: 1.6;
    }
  }

  /* --- Stage 3: Elimination (compressed, darkening) --- */

  .stage-eliminate {
    background: #e0e0e3;
    border-left: 3px solid #6b6b6b;
    padding-left: 16px;
    line-height: 1.55;

    animation: deepen-eliminate linear both;
    animation-timeline: view();
    animation-range: entry 0% exit 100%;
  }

  @keyframes deepen-eliminate {
    0% {
      background-color: #e0e0e3;
      border-left-width: 3px;
      border-left-color: #6b6b6b;
      letter-spacing: 0em;
      line-height: 1.6;
    }
    100% {
      background-color: #3d3d3d;
      border-left-width: 4px;
      border-left-color: #ededed;
      letter-spacing: -0.005em;
      line-height: 1.5;
      color: #ededed;
    }
  }

  /* --- Stage 4: Conclusion (compressed, dark, maximum conviction) --- */

  .stage-conclusion {
    background: var(--color-bg-deep);
    color: var(--color-text-on-dark);
    border-left: 4px solid var(--color-accent);
    padding-left: 16px;
    line-height: 1.45;
    letter-spacing: -0.01em;

    animation: deepen-conclusion linear both;
    animation-timeline: view();
    animation-range: entry 0% exit 100%;
  }

  @keyframes deepen-conclusion {
    0% {
      background-color: #3d3d3d;
      border-left-width: 4px;
      border-left-color: #60a5fa;
      letter-spacing: -0.005em;
    }
    100% {
      background-color: #0a0a0a;
      border-left-width: 6px;
      border-left-color: #3b82f6;
      letter-spacing: -0.015em;
    }
  }

  .stage-conclusion h2 {
    color: #ededed;
  }

  .stage-conclusion p {
    color: #d4d4d4;
  }

  /* ============================================
     SCROLL PROGRESS INDICATOR
     A bar at the top that fills as you scroll.
     Pure CSS, no JavaScript.
     ============================================ */

  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: transparent;
    z-index: 1000;
  }

  .scroll-progress::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-accent);
    transform-origin: left;
    transform: scaleX(0);

    animation: progress-fill linear both;
    animation-timeline: scroll();
  }

  @keyframes progress-fill {
    0% { transform: scaleX(0); }
    100% { transform: scaleX(1); }
  }

  /* ============================================
     CONVERGENCE INDICATOR
     A visual marker in the left margin that
     shows the current "width" of the funnel.
     ============================================ */

  .convergence-indicator {
    position: fixed;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 120px;
    background: var(--color-border);
    border-radius: 2px;
    z-index: 100;

    animation: indicator-narrow linear both;
    animation-timeline: scroll();
  }

  @keyframes indicator-narrow {
    0% {
      height: 120px;
      background: #e5e5e5;
    }
    100% {
      height: 24px;
      background: var(--color-accent);
    }
  }

  /* ============================================
     RESPONSIVE DEGRADATION
     On mobile, reduce the margin convergence
     range (less room to converge).
     ============================================ */

  @media (max-width: 768px) {
    .convergence-page {
      padding-left: 24px;
      padding-right: 24px;
    }

    @keyframes converge-margins {
      0% {
        padding-left: 40px;
        padding-right: 40px;
      }
      100% {
        padding-left: 12px;
        padding-right: 12px;
      }
    }

    .convergence-indicator {
      display: none;
    }
  }

  /* ============================================
     FALLBACK: @supports check
     Browsers that don't support scroll-driven
     animations get static stages instead.
     ============================================ */

  @supports not (animation-timeline: scroll()) {
    .stage-eliminate {
      background: #3d3d3d;
      color: #ededed;
      border-left-color: #ededed;
    }

    .stage-eliminate h2 {
      color: #ededed;
    }

    .stage-eliminate p {
      color: #d4d4d4;
    }

    .convergence-indicator {
      display: none;
    }

    .scroll-progress {
      display: none;
    }
  }
</style>
</head>
<body>
  <div class="scroll-progress"></div>
  <div class="convergence-indicator"></div>

  <div class="convergence-page">

    <!-- STAGE 1: Survey (wide, light, exploratory) -->
    <section class="funnel-section stage-survey">
      <h2>The Survey: Seven Competing Frameworks</h2>
      <p>The field in 1997 was a landscape of competing explanations. No fewer than seven distinct frameworks claimed to account for the observed anomalies in crustal deformation patterns. Each had its partisans, its conferences, its journal special issues. The terrain was wide open.</p>
      <p>Framework A emphasized thermal gradients. Framework B pointed to compositional heterogeneity. Framework C invoked mantle plume dynamics. Frameworks D through G proposed various hybrid models, each combining elements of the first three with additional mechanisms drawn from seismological, petrological, or geodetic evidence.</p>
      <p>At this stage, the question was not which framework was correct. The question was whether the seven frameworks were describing seven different phenomena or one phenomenon from seven angles. This distinction -- seven objects versus seven perspectives -- would prove decisive.</p>
    </section>

    <!-- STAGE 2: Comparison (narrowing, contested) -->
    <section class="funnel-section stage-compare">
      <h2>The Comparison: Three Survivors</h2>
      <p>By 2004, the field had narrowed. Four frameworks had been empirically eliminated: D and E by new seismic tomography data, F by a critical reanalysis of its foundational dataset, G by internal theoretical contradiction exposed during the 2003 Kyoto symposium.</p>
      <p>Three remained: thermal gradients (A), compositional heterogeneity (B), and the feedback loop model (C). These three were not merely surviving -- they were SHARPENING. Each incorporated the critiques that had eliminated the others. Framework A now included compositional correction terms. Framework B acknowledged thermal boundary effects. Framework C claimed to subsume both.</p>
    </section>

    <!-- STAGE 3: Elimination (compressed, darkening) -->
    <section class="funnel-section stage-eliminate">
      <h2>The Elimination: Two, Then One</h2>
      <p>The 2011 deep drilling campaign in the Mariana forearc produced data that Framework A could not accommodate without ad hoc modifications. Its thermal gradient predictions diverged from observed values by factors of 3-7x in the subduction interface zone. Framework A did not die -- it retreated to a specialized niche (mid-ocean ridge dynamics) where its predictions still held.</p>
      <p>Framework B survived another three years before the 2014 global tomographic inversion revealed that compositional heterogeneity, while real, was an EFFECT of the feedback process, not a cause. The heterogeneity patterns matched the predictions of Framework C's feedback model with r=0.89.</p>
    </section>

    <!-- STAGE 4: Conclusion (compressed, dark, high conviction) -->
    <section class="funnel-section stage-conclusion">
      <h2>The Conclusion: Feedback Loops</h2>
      <p>Framework C -- tectonic feedback loops -- is not merely the last framework standing. It is the framework that EXPLAINS why the others failed and where they partially succeeded. The thermal gradients of Framework A are the energy source for feedback initialization. The compositional heterogeneity of Framework B is the material signature of feedback cycling. The hybrid models D-G were early, incomplete attempts to describe the same feedback topology.</p>
      <p>The convergence was not a process of elimination. It was a process of integration. The funnel did not discard six frameworks. It revealed that seven perspectives had always been describing one mechanism.</p>
    </section>

  </div>
</body>
</html>
```

### Responsive Degradation Strategy

**Unsupported browsers** (no `animation-timeline: scroll()`): The `@supports not` block applies static styles. The elimination stage gets its dark background immediately (no scroll-driven transition). The margin convergence does not occur -- the page has fixed padding. The scroll progress bar and convergence indicator are hidden. The page is still readable; it simply lacks the temporal spatial evolution. The content remains fully accessible.

**Mobile viewports**: The margin convergence range is reduced (40px to 12px instead of 160px to 24px) because narrow screens cannot afford 160px of padding. The fixed convergence indicator is hidden to avoid occluding content. The per-section deepening animations still fire (they respond to the element's visibility in the viewport, which is viewport-independent).

**Reduced motion**: For users who prefer reduced motion, add `@media (prefers-reduced-motion: reduce) { .convergence-page, .funnel-section, .scroll-progress::before, .convergence-indicator { animation: none; } }` to disable all scroll-driven animations. The static fallback styles apply.

---

## Example 3: CSS Subgrid -- Cross-Section Structural Alignment

### Content Scenario

You are building a page that compares three approaches to the same problem. Each approach has four components: a thesis statement, the methodology, the key evidence, and the limitations. In a naive layout, each approach section defines its own grid, and the four components align WITHIN each section but not ACROSS sections. The thesis of Approach A might be 3 lines long while the thesis of Approach B is 1 line, so the methodology rows start at different vertical positions.

With subgrid, all three approach sections inherit the parent grid's row tracks. The thesis rows align across all three approaches. The methodology rows align. The evidence rows align. The reader can SCAN HORIZONTALLY across corresponding components without vertical displacement. The grid alignment IS the comparison -- it makes structural equivalence visible.

### Why It Goes Beyond AD-006

AD-006 uses nested grids extensively, but each grid defines its own independent tracks. The "golden ratio" grid (`1fr 1.618fr`) in one section has no relationship to the grid in the next section. If Section 3's sidebar happens to align with Section 7's sidebar, it is coincidental. Subgrid creates INTENTIONAL cross-boundary alignment: nested elements participate in a parent grid's spatial system. This is the difference between "each section is a sovereign spatial territory" and "sections are members of a unified spatial structure."

### Browser Support

- Chrome 117+, Edge 117+, Firefox 71+, Safari 16+
- Global support: ~97%. Production-ready.
- Fallback: Nested elements define their own grid tracks (independent alignment). The content is still readable; it just loses cross-section alignment.

### Complete CSS + HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Subgrid: Cross-Section Structural Alignment</title>
<style>
  /* ============================================
     TOKENS
     ============================================ */
  :root {
    --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Menlo', monospace;
    --color-bg: #fafafa;
    --color-text: #171717;
    --color-text-secondary: #6b6b6b;
    --color-text-tertiary: #a1a1a1;
    --color-surface: #ffffff;
    --color-border: #e5e5e5;
    --color-accent-a: #3b82f6;
    --color-accent-b: #22c55e;
    --color-accent-c: #f59e0b;
  }

  body {
    font-family: var(--font-body);
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.7;
    margin: 0;
    padding: 48px 24px;
  }

  .page {
    max-width: 960px;
    margin: 0 auto;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin: 0 0 16px;
  }

  .subtitle {
    font-size: 15px;
    color: var(--color-text-secondary);
    margin: 0 0 48px;
    max-width: 600px;
  }

  /* ============================================
     THE PARENT GRID
     Defines the row structure that ALL three
     approach columns will inherit via subgrid.

     4 content rows:
       1. Thesis     (auto-sized, content-driven)
       2. Methodology (auto-sized)
       3. Evidence    (auto-sized)
       4. Limitations (auto-sized)

     The key: the TALLEST content in any column's
     row determines the row height for ALL columns.
     A 5-line thesis in Column B stretches the
     thesis row for Columns A and C too.
     ============================================ */

  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto auto auto; /* label + 4 content rows */
    gap: 0 24px;
    margin: 48px 0;
  }

  /* ============================================
     EACH APPROACH COLUMN
     Spans all 5 rows of the parent grid.
     Uses subgrid to inherit the parent's ROW
     tracks, so all columns share row heights.
     ============================================ */

  .approach {
    display: grid;
    grid-row: 1 / 6; /* span all 5 parent rows */
    grid-template-rows: subgrid; /* INHERIT parent row tracks */
    gap: 0;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    overflow: hidden;
    background: var(--color-surface);
  }

  /* Column header: approach label */
  .approach-header {
    padding: 16px 20px;
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid var(--color-border);
  }

  .approach-a .approach-header { border-bottom-color: var(--color-accent-a); color: var(--color-accent-a); }
  .approach-b .approach-header { border-bottom-color: var(--color-accent-b); color: var(--color-accent-b); }
  .approach-c .approach-header { border-bottom-color: var(--color-accent-c); color: var(--color-accent-c); }

  /* ============================================
     COMPONENT CELLS
     Each cell sits in one row of the subgrid.
     Because the rows are shared via subgrid,
     "Thesis" in Column A aligns perfectly with
     "Thesis" in Columns B and C -- even if
     their content heights differ.
     ============================================ */

  .component {
    padding: 20px;
    border-bottom: 1px solid var(--color-border);
  }

  .component:last-child {
    border-bottom: none;
  }

  .component-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-text-tertiary);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .component-content {
    font-size: 14px;
    line-height: 1.65;
    color: var(--color-text-secondary);
  }

  .component-content strong {
    color: var(--color-text);
    font-weight: 500;
  }

  /* ============================================
     ROW LABELS (outside the columns)
     Optional: persistent labels on the left
     that name each row of the comparison.
     ============================================ */

  .row-labels {
    display: none; /* shown on wide viewports */
  }

  @media (min-width: 1100px) {
    .comparison-wrapper {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 24px;
      align-items: start;
    }

    .row-labels {
      display: grid;
      grid-template-rows: subgrid;
      grid-row: 1 / 6;
      gap: 0;
      padding-top: 0;
    }

    .comparison-wrapper {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 24px;
    }

    .row-labels {
      display: flex;
      flex-direction: column;
      padding-top: 52px; /* align with content below headers */
    }

    .row-label {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--color-text-tertiary);
      writing-mode: horizontal-tb;
      padding: 20px 0;
      border-bottom: 1px solid transparent;
      display: flex;
      align-items: flex-start;
      min-height: 80px;
    }
  }

  /* ============================================
     ALIGNMENT GUIDES
     Subtle horizontal lines that cross all
     three columns, making the shared row
     boundaries visible. These are the visual
     proof that subgrid is working.
     ============================================ */

  .comparison-grid::before {
    display: none; /* alignment is shown by the cell borders */
  }

  /* ============================================
     RESPONSIVE: Stack on mobile
     ============================================ */

  @media (max-width: 768px) {
    .comparison-grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto; /* abandon subgrid alignment */
      gap: 24px;
    }

    .approach {
      grid-row: auto;
      grid-template-rows: auto; /* independent rows per column */
    }
  }

  /* ============================================
     FALLBACK: @supports for subgrid
     Without subgrid, each column defines its
     own rows independently. Content still
     displays; alignment is lost.
     ============================================ */

  @supports not (grid-template-rows: subgrid) {
    .approach {
      grid-template-rows: auto auto auto auto auto;
      grid-row: auto;
    }

    .comparison-grid {
      grid-template-rows: auto;
      align-items: start;
    }
  }
</style>
</head>
<body>
  <div class="page">
    <h1>Three Approaches to Crustal Feedback Modeling</h1>
    <p class="subtitle">Each approach addresses the same four questions: what is the thesis, what methodology does it use, what evidence supports it, and what are its known limitations? Subgrid ensures these components align across all three columns.</p>

    <div class="comparison-grid">

      <!-- APPROACH A: Thermal Gradient Model -->
      <div class="approach approach-a">
        <div class="approach-header">Approach A: Thermal</div>

        <div class="component">
          <div class="component-label">Thesis</div>
          <div class="component-content">
            <strong>Crustal deformation is driven primarily by lateral thermal gradients</strong> generated at the lithosphere-asthenosphere boundary. Temperature differentials of 200-400K over 50-100km horizontal distances create viscosity contrasts sufficient to drive observable surface deformation.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Methodology</div>
          <div class="component-content">
            Finite element modeling of coupled thermal-mechanical systems. 2D cross-sections at 5km resolution. Temperature fields derived from surface heat flow measurements extrapolated to depth using steady-state conduction models.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Evidence</div>
          <div class="component-content">
            Strong correlation (r=0.82) between surface heat flow anomalies and GPS-measured horizontal velocities across 14 continental rift zones. Thermal models predict observed strain rates within a factor of 2 for 11 of 14 sites.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Limitations</div>
          <div class="component-content">
            Cannot explain deformation in thermally homogeneous regions (e.g., cratonic interiors with uniform heat flow but measurable strain). Assumes steady-state thermal fields, which may not hold near subduction zones where thermal transients operate on 1-10 Myr timescales.
          </div>
        </div>
      </div>

      <!-- APPROACH B: Compositional Model -->
      <div class="approach approach-b">
        <div class="approach-header">Approach B: Compositional</div>

        <div class="component">
          <div class="component-label">Thesis</div>
          <div class="component-content">
            <strong>Lateral variations in mantle composition</strong> -- specifically in water content, iron number, and modal mineralogy -- create rheological heterogeneities that localize deformation independently of thermal structure.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Methodology</div>
          <div class="component-content">
            Petrological analysis of mantle xenoliths combined with seismic velocity inversions. Compositional maps derived from joint inversion of Vs, Vp, and Vp/Vs ratios using laboratory-calibrated mineral physics databases. 3D models at 25km lateral resolution.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Evidence</div>
          <div class="component-content">
            Xenolith suites from 8 kimberlite provinces show systematic correlation between water content (50-500 ppm H/Si) and estimated viscosity (10^19 to 10^21 Pa·s). Seismic low-velocity zones coincide with regions of elevated surface strain rate in 6 of 8 study areas.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Limitations</div>
          <div class="component-content">
            Xenolith sampling is spatially biased (only available where kimberlites erupt). Seismic-to-composition mapping is non-unique: temperature and composition trade off in velocity space. The 2014 global tomographic inversion suggests compositional patterns may be effects of feedback processes rather than independent causes.
          </div>
        </div>
      </div>

      <!-- APPROACH C: Feedback Loop Model -->
      <div class="approach approach-c">
        <div class="approach-header">Approach C: Feedback</div>

        <div class="component">
          <div class="component-label">Thesis</div>
          <div class="component-content">
            <strong>Crustal deformation arises from self-reinforcing feedback loops</strong> between mantle convection, crustal thickening, erosion, and isostatic adjustment. Small initial perturbations are amplified through positive feedback cycles operating on 10-100 Myr timescales. Thermal and compositional variations are both products of this feedback, not independent drivers.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Methodology</div>
          <div class="component-content">
            Coupled thermo-mechanical-erosional models with free surface evolution. Full 3D at 2km resolution, run for 200 Myr of model time. Models include phase transitions, partial melting, strain-dependent rheology, and surface process coupling (fluvial erosion, sedimentation). Validated against 23 independent observational constraints per model run.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Evidence</div>
          <div class="component-content">
            Feedback models reproduce observed crustal thickness profiles across 4 orogens (Himalayas, Andes, Alps, Zagros) with RMS misfit < 3 km. They predict the existence of compositional heterogeneity patterns that match the tomographic data cited by Approach B (r=0.89). They explain why Approach A's thermal models work at rifts but fail at cratons: thermal gradients drive feedback initialization but not feedback maintenance.
          </div>
        </div>

        <div class="component">
          <div class="component-label">Limitations</div>
          <div class="component-content">
            Computationally expensive: each model run requires 10,000+ CPU-hours. Parameter sensitivity is high (12 free parameters, non-linear interactions). Observational validation is limited to the present-day snapshot; the 200 Myr temporal predictions cannot be directly tested. The claim that Approaches A and B are "subsumed" may be overreach -- some thermal and compositional effects may operate independently of feedback.
          </div>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
```

### Responsive Degradation Strategy

**Unsupported browsers** (no subgrid support): The `@supports not` block makes each `.approach` column use independent `auto` row heights. The columns still display side-by-side in a 3-column grid, but their internal rows no longer align across columns. The Thesis row in Column A may be taller than in Column B without Column B stretching to match. This is the pre-subgrid behavior -- functional but visually disconnected.

**Mobile viewports** (below 768px): The 3-column grid collapses to a single column. Each approach stacks vertically. Subgrid alignment is no longer relevant because the approaches are not side-by-side. Each approach becomes a standalone card.

**Wide viewports** (above 1100px): Optional row labels appear on the left side, naming each row (Thesis, Methodology, Evidence, Limitations). This provides additional orientation for readers scanning the comparison horizontally.

---

## Example 4: Clip-Path Compositions -- Content-Shaped Section Boundaries

### Content Scenario

You are building a page about a process that moves through three phases: divergence (exploring many possibilities), convergence (narrowing to a few), and synthesis (combining into one). The section boundaries should ENCODE these phases. The divergence section widens from top to bottom (the boundary opens outward). The convergence section narrows (the boundary closes inward). The synthesis section is rectangular (the process has resolved into a stable form).

The clip-paths are not decorative borders. They are the process made spatial. A reader who scrolls past the section edges -- even without reading the text -- should perceive the structural pattern: opening, closing, resolving. The boundary shapes ARE the argument.

### Why It Goes Beyond AD-006

Every section in AD-006, OD-005, OD-006, and CD-006 is a rectangle. Full-width, straight-edged, orthogonal. The frontier catalog identified this as a paradigm assumption: "section = full-width rectangle." `clip-path` breaks this assumption with straight diagonal lines (maintaining the angular, anti-physical identity) rather than curves. The section boundaries become content-expressive rather than structurally invisible.

### Browser Support

- `clip-path: polygon()`: Chrome 55+, Firefox 54+, Safari 9.1+, Edge 79+
- Global support: ~97%. Production-ready.
- Fallback: Sections render as standard rectangles (the clip-path is purely additive).

### Complete CSS + HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Clip-Path Compositions: Content-Shaped Boundaries</title>
<style>
  /* ============================================
     TOKENS
     ============================================ */
  :root {
    --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Menlo', monospace;
    --color-bg: #fafafa;
    --color-text: #171717;
    --color-text-secondary: #6b6b6b;
    --color-text-tertiary: #a1a1a1;
    --color-surface: #ffffff;
    --color-border: #e5e5e5;
    --color-accent: #3b82f6;
    --color-zone-open: #f8fafc;
    --color-zone-middle: #f0f4f8;
    --color-zone-dense: #e2e8f0;
    --color-zone-resolved: #171717;
  }

  body {
    font-family: var(--font-body);
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.7;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* clip-path can extend beyond viewport */
  }

  /* ============================================
     PAGE HEADER (before the shaped sections)
     ============================================ */

  .page-header {
    max-width: 720px;
    margin: 0 auto;
    padding: 64px 24px 48px;
  }

  .page-header h1 {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin: 0 0 16px;
  }

  .page-header p {
    font-size: 15px;
    color: var(--color-text-secondary);
    margin: 0;
    max-width: 600px;
  }

  /* ============================================
     SHAPED SECTIONS
     Each section uses clip-path: polygon() to
     create non-rectangular boundaries. The
     polygon points are in percentage coordinates:
     (x%, y%) where 0,0 is top-left and
     100,100 is bottom-right.

     All angles use STRAIGHT LINES (no curves).
     This maintains the angular identity of the
     design system while breaking the rectangle
     assumption.
     ============================================ */

  .shaped-section {
    position: relative;
    padding: 80px 24px;
  }

  .shaped-section .section-inner {
    max-width: 720px;
    margin: 0 auto;
  }

  .shaped-section h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.01em;
    margin: 0 0 24px;
  }

  .shaped-section p {
    font-size: 15px;
    margin: 0 0 16px;
  }

  .phase-label {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--color-text-tertiary);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: block;
  }

  /* ============================================
     PHASE 1: DIVERGENCE
     The section widens from top to bottom.
     Top edge is narrower (indented 8% on each
     side), bottom edge is full width.

     The shape OPENS as you read down -- the
     visual space expands with the conceptual
     exploration.

     Polygon:
       Top-left:     8%, 0%
       Top-right:   92%, 0%
       Bottom-right: 100%, 100%
       Bottom-left:  0%, 100%
     ============================================ */

  .phase-diverge {
    background: var(--color-zone-open);
    clip-path: polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%);
    padding-top: 100px; /* extra top padding to compensate for clipped corners */
    margin-top: -20px; /* overlap slightly with header area */
  }

  /* ============================================
     PHASE 2: CONVERGENCE
     The section narrows from top to bottom.
     Top edge is full width, bottom edge is
     narrower (indented 12% on each side).

     The shape CLOSES as you read down -- the
     visual space contracts with the analytical
     narrowing.

     Polygon:
       Top-left:     0%, 0%
       Top-right:   100%, 0%
       Bottom-right: 88%, 100%
       Bottom-left:  12%, 100%
     ============================================ */

  .phase-converge {
    background: var(--color-zone-middle);
    clip-path: polygon(0% 0%, 100% 0%, 88% 100%, 12% 100%);
    margin-top: -40px; /* overlap with divergence section's bottom */
    padding-top: 100px;
    padding-bottom: 100px;
  }

  /* ============================================
     TRANSITION THRESHOLD
     A narrow band between convergence and
     synthesis. Shaped as an hourglass pinch
     point -- the moment where many becomes one.

     Polygon (hourglass):
       Top-left:     12%, 0%
       Top-right:    88%, 0%
       Pinch-right:  70%, 50%
       Bottom-right: 88%, 100%
       Bottom-left:  12%, 100%
       Pinch-left:   30%, 50%
     ============================================ */

  .phase-threshold {
    background: var(--color-zone-dense);
    clip-path: polygon(12% 0%, 88% 0%, 70% 50%, 88% 100%, 12% 100%, 30% 50%);
    height: 120px;
    margin-top: -30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .phase-threshold .threshold-text {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--color-text-secondary);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ============================================
     PHASE 3: SYNTHESIS
     The section is a clean rectangle -- the
     process has resolved. No more angular
     tension in the boundaries. But the
     background is dark, signaling that what
     emerged from the funnel is dense, settled,
     and final.

     No clip-path needed -- rectangle IS the
     resolved form.
     ============================================ */

  .phase-synthesis {
    background: var(--color-zone-resolved);
    color: #ededed;
    margin-top: -30px;
    padding: 80px 24px;
    position: relative;
  }

  .phase-synthesis h2 {
    color: #ededed;
  }

  .phase-synthesis p {
    color: #d4d4d4;
  }

  .phase-synthesis .phase-label {
    color: #888888;
  }

  .phase-synthesis .synthesis-highlight {
    border-left: 3px solid var(--color-accent);
    padding-left: 20px;
    margin: 24px 0;
    color: #ededed;
    font-size: 16px;
    line-height: 1.7;
  }

  /* ============================================
     SHAPE ANNOTATIONS
     Small labels positioned at the clip-path
     edges that name the structural meaning
     of the boundary shape.
     ============================================ */

  .shape-annotation {
    position: absolute;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-text-tertiary);
    letter-spacing: 0.03em;
    pointer-events: none;
  }

  .phase-diverge .shape-annotation {
    top: 24px;
    right: 12%;
    transform: rotate(8deg);
  }

  .phase-converge .shape-annotation {
    bottom: 40px;
    right: 16%;
    transform: rotate(-6deg);
  }

  /* ============================================
     RESPONSIVE DEGRADATION
     On mobile, reduce the clip-path angles
     because extreme diagonal clips waste too
     much screen space on narrow viewports.
     On very narrow screens, fall back to
     rectangles entirely.
     ============================================ */

  @media (max-width: 960px) {
    .phase-diverge {
      clip-path: polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%);
    }

    .phase-converge {
      clip-path: polygon(0% 0%, 100% 0%, 94% 100%, 6% 100%);
    }

    .phase-threshold {
      clip-path: polygon(6% 0%, 94% 0%, 80% 50%, 94% 100%, 6% 100%, 20% 50%);
    }

    .shape-annotation {
      display: none;
    }
  }

  @media (max-width: 540px) {
    /* On very narrow screens, clip-paths waste too much space.
       Fall back to borders that suggest the shape without clipping. */
    .phase-diverge {
      clip-path: none;
      border-top: 3px solid var(--color-border);
      border-left: 3px solid var(--color-border);
      border-right: 3px solid var(--color-border);
    }

    .phase-converge {
      clip-path: none;
      border-bottom: 3px solid var(--color-zone-dense);
    }

    .phase-threshold {
      clip-path: none;
      height: auto;
      padding: 16px;
      border-top: 2px solid var(--color-text-tertiary);
      border-bottom: 2px solid var(--color-text-tertiary);
    }
  }

  /* ============================================
     FALLBACK: @supports for clip-path
     ============================================ */

  @supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)) {
    .phase-diverge,
    .phase-converge {
      clip-path: none;
    }

    .phase-threshold {
      clip-path: none;
      border-top: 2px solid var(--color-border);
      border-bottom: 2px solid var(--color-border);
    }
  }

  /* ============================================
     PRINT STYLES
     Clip-paths render in print but diagonal
     edges waste paper. Use rectangles for print.
     ============================================ */

  @media print {
    .phase-diverge,
    .phase-converge,
    .phase-threshold {
      clip-path: none;
    }

    .phase-synthesis {
      background: #f4f4f5;
      color: var(--color-text);
    }

    .phase-synthesis h2,
    .phase-synthesis p,
    .phase-synthesis .synthesis-highlight {
      color: var(--color-text);
    }
  }
</style>
</head>
<body>
  <div class="page-header">
    <h1>The Structure of Discovery</h1>
    <p>A process that begins with wide exploration, narrows through analysis, and resolves into synthesis. The section shapes encode each phase: opening boundaries for divergence, closing boundaries for convergence, and resolved rectangles for synthesis.</p>
  </div>

  <!-- PHASE 1: DIVERGENCE (widening shape) -->
  <section class="shaped-section phase-diverge">
    <span class="shape-annotation">boundary widens &#8599;</span>
    <div class="section-inner">
      <span class="phase-label">Phase 1: Divergence</span>
      <h2>Mapping the Possibility Space</h2>
      <p>The investigation begins by asking: what could the answer be? Not what IS the answer -- what COULD it be? This is the generative phase, where the goal is to populate the space of possibilities as broadly as possible before any filtering.</p>
      <p>Seven initial hypotheses emerge from the literature review. Three are conventional (extensions of existing models). Two are heterodox (drawing on adjacent disciplines). Two are speculative (untested but structurally interesting). All seven are treated as equally plausible at this stage.</p>
      <p>The spatial form of this section widens as you read because the conceptual space is opening. The boundary itself is the argument: investigation starts narrow (a single question) and expands into a wide field of possibilities.</p>
    </div>
  </section>

  <!-- PHASE 2: CONVERGENCE (narrowing shape) -->
  <section class="shaped-section phase-converge">
    <span class="shape-annotation">boundary narrows &#8600;</span>
    <div class="section-inner">
      <span class="phase-label">Phase 2: Convergence</span>
      <h2>Testing Against Evidence</h2>
      <p>Each hypothesis is tested against three constraints: internal consistency (does it contradict itself?), empirical adequacy (does it match the data?), and predictive power (does it tell us something we did not already know?).</p>
      <p>Four hypotheses fail the empirical adequacy test: their predictions diverge from observed values by margins too large to attribute to measurement error. One fails internal consistency: a key assumption required for its mechanism contradicts a well-established physical law. Two survive.</p>
      <p>The spatial form narrows because the possibility space is contracting. Each eliminated hypothesis removes a region of the field. The section's closing boundaries make this contraction visible: what was wide is now becoming focused.</p>
    </div>
  </section>

  <!-- THRESHOLD: The pinch point -->
  <div class="phase-threshold">
    <span class="threshold-text">Many becomes one</span>
  </div>

  <!-- PHASE 3: SYNTHESIS (resolved rectangle) -->
  <section class="phase-synthesis">
    <div class="section-inner" style="max-width: 720px; margin: 0 auto;">
      <span class="phase-label">Phase 3: Synthesis</span>
      <h2>The Unified Model</h2>
      <p>The two surviving hypotheses are not competitors. They are complementary descriptions of the same mechanism operating at different scales. Hypothesis A describes the thermal initialization of the process. Hypothesis B describes the compositional feedback that sustains it. Together, they form a single model with two phases.</p>
      <div class="synthesis-highlight">
        The synthesis is not a compromise between the two survivors. It is a recognition that they were always describing the same thing from different vantage points. The divergent investigation did not find the answer -- it revealed that the question had a structure it did not initially appear to have.
      </div>
      <p>The section is a rectangle because the process has resolved. No more angular tension in the boundaries, no more widening or narrowing. The dark background signals density and finality: what emerged from the funnel is settled.</p>
    </div>
  </section>
</body>
</html>
```

### Responsive Degradation Strategy

**Three tiers of degradation:**

1. **Wide screens (960px+):** Full clip-path angles. Divergence widens 8% on each side. Convergence narrows 12%. Hourglass threshold pinches to 30%/70%. Shape annotations are visible, labeling the boundary meanings.

2. **Medium screens (540-960px):** Reduced clip-path angles. Divergence widens only 4%. Convergence narrows only 6%. The shapes are still visible but less aggressive, preventing the diagonal edges from eating too much content space. Shape annotations hidden.

3. **Narrow screens (below 540px):** Clip-paths removed entirely. Sections become rectangles with border styling that SUGGESTS the shape without clipping content. Divergence gets top/side borders (framing the opening). Convergence gets a bottom border (marking the closing). Threshold becomes a simple horizontal band with top/bottom borders. The structural narrative is preserved through border semantics rather than clip-path geometry.

**Print:** Clip-paths removed. The synthesis section's dark background lightens to avoid wasting ink. All text renders in standard dark-on-light.

**Unsupported browsers:** The `@supports not` block removes clip-paths and adds border-based alternatives. Since `clip-path: polygon()` has 97%+ support, this is primarily a safety net.

---

## Cross-Cutting Observations

### What These Examples Share

1. **Content-driven reasoning.** None of these techniques are applied for visual novelty. Each example starts with a content scenario that DEMANDS the technique. Container queries because the same component must exist at different levels of prominence. Scroll-driven animations because the argument structure is temporal. Subgrid because the content IS a comparison. Clip-paths because the process has spatial geometry.

2. **Graceful degradation.** Every example works without the frontier technique. The page is readable, the content is accessible, and the layout is functional. The frontier technique adds a layer of spatial meaning -- it does not hold the page together. This is the principle: frontier CSS is enrichment, not infrastructure.

3. **Diagnostic specificity.** A builder who encounters a content scenario with similar structural demands should recognize the opportunity. "I have the same component appearing in different spatial contexts" → container queries. "My argument structure evolves through the page" → scroll-driven animations. "I'm comparing parallel structures" → subgrid. "My sections have inherent geometric shape" → clip-path.

4. **No curves.** All examples use straight lines and angular geometry. This maintains compatibility with the design system's anti-physical identity. Clip-path polygons use straight edges. Subgrid uses orthogonal alignment. The frontier is not about visual softness -- it is about structural expressiveness within the angular vocabulary.

### What These Examples Do NOT Do

- They do not combine multiple frontier techniques in one page. A builder in the "falls in love" state might naturally reach for container queries AND scroll-driven animations AND subgrid in a single build. These examples are vocabulary entries, not compositions.
- They do not demonstrate interaction with the existing exploration mechanisms (golden ratio grids, fractal annotations, pattern echo grids). Integration with the known ceiling is a builder-level decision that depends on the specific content.
- They do not prescribe when to use these techniques. The synthesis (Section 2.5) is clear: vocabulary must be AVAILABLE, not MANDATED. A builder who reaches Phase 3+ will naturally reach for the technique that fits. Mandating frontier techniques produces the same compliance-without-meaning as mandating mechanism counts.
