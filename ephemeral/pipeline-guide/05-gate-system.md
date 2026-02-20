# Section 5: The Gate System -- All 15 Gates Explained

## What This Section Covers

The gate system is the programmatic verification layer that sits between the builder and the perceptual auditors. It is a ~400-line JavaScript module called `gate-runner.js` that opens a headless Playwright browser, navigates to the built HTML page, runs `getComputedStyle` and DOM queries against 15 specific checks, and returns a structured result: PASS or FAIL for each gate, plus a concrete CSS fix recipe for every failure.

Gates verify the 70% of quality that can be measured by code. The remaining 30% -- "does this feel designed?" -- belongs to the perceptual audit. Gates are necessary but not sufficient. A page can pass all 15 gates and still feel flat. But a page that fails even one of the soul gates (SC-01, SC-02) is definitionally broken.

Every gate in this system exists because something went wrong in an actual experiment. SC-09 exists because the Flagship's zone backgrounds differed by 1-8 RGB points -- literally invisible to the human eye. SC-10 exists because that same experiment accumulated 210-276 pixels of blank space between sections. SC-14 exists because 22% of the Flagship's CSS budget was spent on letter-spacing values between 0.001 and 0.01em -- effort that produced zero perceptible effect. None of these gates are theoretical. They are scars.

---

## The Three Phase-Locked Gates

Before explaining each individual gate, it helps to understand when and how they run. The gates do not fire all at once at the end of the build. They are phase-locked: subsets run after specific build phases to catch problems early, before the builder invests more time going in the wrong direction.

### G1: After the HTML Skeleton

**When it runs:** After the builder completes the HTML structure -- semantic markup, ARIA landmarks, component library classes, zone architecture.

**What it checks:** SC-06 (ARIA landmarks exist), SC-07 (skip link present), SC-08 (component library classes used), SC-12 (zone count is 2-5).

**Why it exists:** If the page has no landmarks, no skip link, and no zones, everything that follows is built on a broken foundation. Catching these structural omissions costs nothing -- the gate runs in about 2 seconds. Missing them means 90+ minutes of CSS work on a page that will fail accessibility requirements.

**Runtime:** ~2 seconds.

### G2: After Backgrounds and Soul CSS

**When it runs:** After the builder adds zone backgrounds, soul CSS (border-radius: 0, box-shadow: none), and the container constraint.

**What it checks:** SC-01 (container width 940-960px), SC-02 (soul properties), SC-04 (warm palette), SC-05 (no pure black/white), SC-09 (background delta >= 15 RGB), SC-15 (borders exist).

**Why it exists:** This is where the Flagship went wrong. Backgrounds that differ by 3 RGB points, container widths of 2160px, zero borders anywhere. By the time these problems are discovered after a full build, the builder has invested 2+ hours. G2 catches them after 30-40 minutes, when fixes are still cheap.

**Runtime:** ~3 seconds.

### G3: Comprehensive Final Check

**When it runs:** After the builder finishes everything -- element-level richness, accessibility, responsive breakpoints, the cascade value table.

**What it checks:** All 15 gates (SC-01 through SC-15).

**Why it exists:** Later build phases can break earlier compliance. Adding element-level CSS might accidentally introduce border-radius on a callout. Typography work might push backgrounds out of compliance. G3 is a full regression check that confirms the complete page holds together.

**Runtime:** ~5-15 seconds for all 15 gates.

### The Fix Cycle

When a phase gate fails, it does not just say "FAIL." It returns a structured fix recipe with measured values, the threshold that was violated, and specific CSS to write. The builder applies the fix, re-saves the HTML, and the gate re-runs.

- **Per-phase gate:** Maximum 2 re-runs. If still failing after 2 attempts, escalate to the orchestrator.
- **Full gate run (G3):** Maximum 3 fix cycles. Each cycle: builder gets the top-3 failures with recipes, applies fixes, gate runner re-runs.
- **Total maximum gate invocations per build:** 4 phase gates + 1 full run + 3 fix cycles = 8 invocations. At 5-15 seconds each, that is 40-120 seconds of total gate time -- negligible compared to the 90-150 minute build.

---

## The 15 Gates: SC-01 Through SC-15

### SC-01: Container Width

**What it checks:** The `max-width` of the main content container element.

**Technical measurement:** Uses Playwright to select `main, [role="main"], .container, .content-wrapper` and reads `getComputedStyle(el).maxWidth`.

**Pass criteria:** Width is between 940px and 960px.

**Why this matters:** Container width was THE primary failure mode in Phase D validation -- 4 out of 5 pages violated the 940px constraint. The Ceiling experiment produced a page at 2160px (full viewport width). When the container is too wide, text lines become unreadably long. When it is too narrow, the page loses its editorial authority. 940-960px is the sweet spot derived from print editorial design: roughly 65% of a 1440px viewport, matching the proportions of a magazine column.

**What goes wrong without it:** Text stretches edge-to-edge across a wide monitor, or metaphor-driven narrowing crushes the content into a thin column. Either way, the reading experience breaks.

**Fix recipe when it fails:**
```
FIX: "Container max-width is {measured}px. Set to 960px."
CSS: "main { max-width: 960px; margin: 0 auto; }"
```

---

### SC-02: Soul Properties

**What it checks:** `border-radius` and `box-shadow` on every element in the page.

**Technical measurement:** Selects `*` (all elements) and reads `getComputedStyle(el).borderRadius` and `getComputedStyle(el).boxShadow` for each.

**Pass criteria:** Every element has `border-radius: 0px` and `box-shadow: none`.

**Why this matters:** These are the two absolute, non-negotiable soul constraints. Sharp edges (border-radius: 0) define the KortAI identity: decisive, confident, print-heritage editorial design. No shadows (box-shadow: none) enforce the anti-physical principle: depth comes from spacing and backgrounds, not from fake light sources. A single rounded corner or drop shadow breaks the identity. This is not a guideline -- it is a prohibition documented in `prohibitions.md` as items #1 and #2.

**What goes wrong without it:** The page looks like any generic UI kit. The distinctive KortAI angular precision disappears. Rounded corners signal "safe and friendly," which is the opposite of "decisive and confident."

**Fix recipe when it fails:**
```
FIX: "{N} elements have border-radius > 0: {list of elements}. Remove all border-radius."
CSS: "* { border-radius: 0 !important; box-shadow: none !important; }"
Note: !important is acceptable here because the soul constraint is ABSOLUTE.
```

---

### SC-03: Font Trinity

**What it checks:** The font families actually rendered across the page.

**Technical measurement:** Reads `getComputedStyle(el).fontFamily` on headings (h1, h2), body text (p), and detail text (figcaption, small, .meta). Critically, this gate waits for `document.fonts.ready` before measuring -- without this, the browser may report fallback fonts instead of the actual loaded fonts.

**Pass criteria:** Only three allowed font families are present: Instrument Serif (display headings), a system serif like Georgia (body text via Inter's serif fallback or direct), and system-ui sans-serif (detail/UI text). At minimum, 2 distinct font families must be used.

**Why this matters:** The typography trinity -- Instrument Serif for display, Inter for body, JetBrains Mono for code -- is a locked identity element. Using the wrong fonts or only one font family collapses the typographic hierarchy. A page with everything in Inter feels like a document template, not editorial design.

**What goes wrong without it:** The Flagship had uniform typography (all 16px/400 weight, same font family) -- zero visual hierarchy. Readers cannot distinguish headings from body from captions.

**Fix recipe when it fails:**
```
FIX: "Only {N} font families found: {list}. Need >= 2 from the trinity."
CSS: "h1, h2 { font-family: 'Instrument Serif', serif; }
     p { font-family: Georgia, 'Times New Roman', serif; }
     figcaption, .meta { font-family: system-ui, sans-serif; }"
```

---

### SC-04: Warm Palette

**What it checks:** Every background color on the page for warm-tone compliance.

**Technical measurement:** Selects all elements with non-transparent backgrounds and parses the computed `backgroundColor` into RGB channels. Checks that R >= G >= B (the mathematical signature of warm earth tones -- more red than green, more green than blue).

**Pass criteria:** Every computed background color satisfies R >= G >= B.

**Why this matters:** KortAI uses warm earth tones -- cream backgrounds, tan borders, amber accents. Cool-toned colors (blue-shifted grays, clinical whites, steel grays) violate the editorial warmth. The R >= G >= B check is a simple heuristic that catches the most common violation: cool grays like #F5F5F5 (where R = G = B, technically neutral but perceptually cool) slip through as borderline, but anything with G > R or B > G is definitively cold.

**What goes wrong without it:** The page feels sterile and institutional instead of warm and editorial. Cool grays are the #1 most common palette violation because they are the default in most CSS frameworks.

**Fix recipe when it fails:**
```
FIX: "{element} has background rgb({r},{g},{b}) violating R >= G >= B."
CSS: "/* Current: rgb(240, 245, 235) -- G > R. Fix: rgb(245, 240, 235) */"
```

---

### SC-05: No Pure Extremes

**What it checks:** That no element uses pure black (`rgb(0,0,0)`) or pure white (`rgb(255,255,255)`) as background or text color.

**Technical measurement:** Reads `backgroundColor` and `color` on all visible elements, checking for exact matches to the two forbidden extremes.

**Pass criteria:** Zero elements with `rgb(0,0,0)` or `rgb(255,255,255)`.

**Why this matters:** Pure black is harsh and digital. Pure white is sterile and clinical. KortAI uses near-black (`#1A1A1A`) for text and warm cream (`#FEF9F5`) for backgrounds. The difference is subtle on paper but significant in practice: warm near-black and cream create a reading experience that feels like a well-printed book, while pure black on pure white feels like a terminal window.

**What goes wrong without it:** The page loses its warmth. Text becomes visually aggressive. Backgrounds become blank rather than inviting.

**Fix recipe when it fails:**
```
FIX: "{N} elements use pure black or white: {list}."
CSS: "/* Replace #000 with #1A1A1A. Replace #FFF with #FEF9F5. */"
```

---

### SC-06: ARIA Landmarks

**What it checks:** The presence of semantic landmark elements for accessibility.

**Technical measurement:** Counts elements matching `header, main, footer, nav, [role="complementary"], [role="banner"], [role="contentinfo"]`.

**Pass criteria:** At least 3 landmark elements exist (typically header, main, and one of footer/nav/complementary).

**Why this matters:** Screen readers use landmarks to navigate page structure. Without them, assistive technology users experience the page as a flat stream of content with no structural signposts. WCAG 2.1 AA compliance requires landmarks. This gate runs in G1 (after the HTML skeleton) because landmarks must be present before any CSS work begins.

**What goes wrong without it:** The page is inaccessible. Accessibility is non-negotiable -- it is not a nice-to-have that gets added at the end.

**Fix recipe when it fails:**
```
FIX: "Only {N} landmarks found (need >= 3). Add <header>, <main>, and <footer> elements."
```

---

### SC-07: Skip Link

**What it checks:** The presence of a "skip to content" navigation link.

**Technical measurement:** Searches for `a[href="#main"], a[href="#content"], a.skip-link, .skip-link`.

**Pass criteria:** At least one skip link element exists.

**Why this matters:** Skip links let keyboard users jump past the header directly to the main content. Without one, keyboard users must tab through every header element before reaching the page body. This is a basic WCAG requirement and costs exactly one HTML element to implement.

**What goes wrong without it:** Keyboard navigation becomes tedious. Accessibility audit fails.

**Fix recipe when it fails:**
```
FIX: "No skip link found. Add <a href='#main' class='skip-link'>Skip to content</a> as first child of <body>."
CSS: ".skip-link { position: absolute; top: -40px; left: 0; }
     .skip-link:focus { top: 0; }"
```

---

### SC-08: Component Library Usage

**What it checks:** Whether the page uses classes from the design system's component library.

**Technical measurement:** Searches for class names matching known component patterns: `callout`, `data-table`, `pull-quote`, `blockquote`, `grid-2col`, `grid-3col`, `card`, `metric`, `timeline`, `accordion`, `tab-panel`, `stat-block`, `comparison-grid`, `key-point`, `feature-grid`.

**Pass criteria:** At least 3 component library classes are found in the page.

**Why this matters:** The component library (in `merged-components.css`) contains tested, soul-compliant patterns. Using them ensures visual consistency and reduces the chance of introducing soul violations through custom CSS. A page that uses zero library components is reinventing every visual pattern from scratch -- higher effort, higher risk.

**What goes wrong without it:** The builder writes all components from scratch, potentially introducing border-radius, shadows, or other soul violations. Build time increases. Visual consistency with other KortAI pages decreases.

**Fix recipe when it fails:**
```
FIX: "Only {N} component classes found (need >= 3). Consider using: .callout, .data-table, .pull-quote."
```

---

### SC-09: Background Delta

**What it checks:** The RGB color difference between adjacent zone backgrounds.

**Technical measurement:** For each pair of adjacent zones (identified by `[data-zone]` or `main > section`), parses the computed `backgroundColor` into RGB channels and calculates the maximum single-channel delta: `max(|R1-R2|, |G1-G2|, |B1-B2|)`.

**Pass criteria:** Every adjacent zone pair has a max-channel delta of at least 15 RGB points.

**Why this matters:** This is the gate that would have caught the Flagship's most damaging failure. The Flagship had zone backgrounds differing by 1-8 RGB points -- for example, `rgb(254,252,243)` next to `rgb(249,248,240)`, a maximum delta of 5. These differences are literally invisible to the human eye. The zones appeared as one undifferentiated cream surface, destroying the spatial structure entirely. The 15 RGB threshold comes from perceptual research: below 15, differences are sub-perceptual under normal viewing conditions. Above 15, they become visible as deliberate zone transitions.

**What goes wrong without it:** The page looks like a single flat surface with no spatial structure. Zone transitions disappear. The "designed" quality that comes from visible spatial differentiation is absent.

**Fix recipe when it fails:**
```
FIX: "Zones {i} and {i+1} differ by {delta} RGB (need >= 15).
     Zone {i}: rgb(254,252,243). Zone {i+1}: rgb(249,248,240)."
CSS: "/* Darken zone {i+1}: try #f0ebe3 (rgb 240,235,227) -- delta 14,17,16 */
     /* Alternative: #ece5da (warmer), #e8e0d5 (deeper) */"
```

The fix recipe also generates 2-3 alternative hex values that satisfy both the delta threshold AND the warm palette constraint (R >= G >= B).

---

### SC-10: Stacked Gap (Whitespace Void Prevention)

**What it checks:** The total pixel gap between the bottom edge of one zone and the top edge of the next.

**Technical measurement:** Uses `getBoundingClientRect()` on adjacent zone elements to measure the actual rendered gap between them. Also decomposes the gap into its contributing CSS properties: `margin-bottom` of the previous zone, `padding-bottom` of the previous zone, `margin-top` of the next zone, and `padding-top` of the next zone.

**Pass criteria:** The total visual gap between any two adjacent zones is no more than 108 pixels.

**Why this matters:** Individual spacing values can each be reasonable while their stacked total creates a void. The Flagship had margins and paddings that individually complied with the 96px maximum per-property rule, but when stacked at section boundaries they produced 210-276 pixel gaps -- vertical voids that the Mode 4 perceptual audit described as "cavernous emptiness" and "24 consecutive frames of nothing." The S-09 stacking loophole was one of the most damaging findings: rules checked individual properties but nobody checked the sum.

The 108px threshold (slightly above the 96px per-property maximum) accounts for border widths and allows a small margin for normal rendering, while preventing the catastrophic stacking that produces voids.

**What goes wrong without it:** 70-80% of the page scroll becomes blank space. The reading experience feels broken -- as if content failed to load. 9 out of 9 independent auditors flagged this as the dominant failure in the Flagship.

**Fix recipe when it fails:**
```
FIX: "Gap between zones {i} and {i+1} is {gap}px (max 108px).
     The stacked components are: margin-bottom 64px + padding-bottom 48px +
     margin-top 48px + padding-top 64px = 224px."
     Largest contributor: prev margin-bottom (64px). Reduce by at least 116px."
```

This gate also includes a sparse zone warning (non-blocking): if any zone contains fewer than 2 content elements, it flags it as a potential whitespace void even if the gap measurement passes.

---

### SC-11: Typography Zones

**What it checks:** Font-size differentiation across the typographic hierarchy.

**Technical measurement:** After waiting for `document.fonts.ready`, measures the largest heading font-size (h1/h2), the average body text font-size (p), and the smallest detail text font-size (figcaption, small, .meta). Also counts distinct font families.

**Pass criteria:**
- Display-to-body delta: The largest heading must be at least 10px larger than body text.
- Body-to-detail delta: Body text must be at least 2px larger than detail text (if detail text exists).
- Font family variety: At least 2 distinct font families must be used.

**Why this matters:** The Flagship rendered everything at 16px with 400 weight in the same font family. There was zero typographic hierarchy -- headings were indistinguishable from body text, captions looked identical to paragraphs. The 10px display-to-body threshold ensures headings are visually prominent. The 2px body-to-detail threshold ensures captions and metadata are visually subordinate.

**What goes wrong without it:** The page is a wall of same-sized text. Readers cannot scan for structure. The visual hierarchy that guides reading disappears.

**Fix recipe when it fails:**
```
FIX: "Display ({display}px) and body ({body}px) differ by only {delta}px (need >= 10).
     The Flagship had ALL text at 16px."
CSS: "h1 { font-size: 36px; } h2 { font-size: 28px; }
     /* Creates 20px / 12px delta from 16px body */"
```

---

### SC-12: Zone Count

**What it checks:** The number of content zones in the page.

**Technical measurement:** Counts elements matching `[data-zone]` or `main > section`.

**Pass criteria:** Between 2 and 5 zones.

**Why this matters:** Fewer than 2 zones means the page has no spatial structure -- it is a single undifferentiated block. More than 5 zones creates fragmentation (too many small sections that cannot develop meaningful content). The 2-5 range comes from the scale research: the mathematical ceiling for perceptible scales is 5 (Alexander/Salingaros formula). Beyond that, add channels (different types of differentiation) rather than more zones.

**What goes wrong without it:** A single-zone page has no spatial rhythm. A 10-zone page feels like a slide deck, not editorial content.

**Fix recipe when it fails:**
```
FIX: "Found {N} zones (need 2-5). Merge related sections or split monolithic content."
```

---

### SC-13: Multi-Coherence

**What it checks:** How many CSS "channels" shift at each zone boundary.

**Technical measurement:** For each pair of adjacent zones, the gate measures six channels:

1. **Chromatic:** Background color changes (>= 15 RGB delta to count).
2. **Typographic:** Font-size or font-weight changes (>= 2px font-size or >= 100 weight).
3. **Spatial:** Total padding changes (>= 24px difference).
4. **Structural:** Border configuration changes (any border width difference).
5. **Behavioral:** Interactivity presence changes (one zone has links/buttons, the other does not).
6. **Material:** Background pattern/texture changes (background-image differs).

**Pass criteria:** At least 3 of the 6 channels shift at every zone boundary.

**Why this matters:** A zone transition that changes only the background color feels accidental. A transition where background, typography, AND spacing all shift together feels intentional -- it signals "you are entering a different section" through multiple reinforcing cues. Multi-coherence is what separates "designed" from "assembled." The Middle-tier experiment achieved multi-coherence at every boundary and scored DESIGNED (4/4 on PA-05). The Flagship failed multi-coherence at most boundaries and scored 1.5/4.

**What goes wrong without it:** Zone transitions feel thin and unconvincing. The reader senses that sections are different but cannot articulate why. The page feels like colored stripes rather than meaningfully differentiated spaces.

**Honest limitation:** SC-13 is the weakest gate (~70% confidence). It counts how many channels CHANGE but cannot assess whether they change in the same semantic direction. Three channels shifting in contradictory directions (background darkens while spacing increases while borders disappear) passes the gate but may create visual chaos. The perceptual audit catches semantic misalignment; SC-13 catches only the absence of multi-channel shifts.

**Fix recipe when it fails:**
```
FIX: "Boundary zone-{i} to zone-{i+1} has only {n}/6 channels shifting (need >= 3).
     Channels present: [chromatic, spatial]. Channels absent: [typographic, structural, behavioral, material]."
CSS: "/* Add differentiation: change font-size from 16px to 18px (typographic),
     add border-left: 4px (structural), change padding from 48px to 72px (spatial) */"
```

---

### SC-14: Sub-Perceptual Prevention

**What it checks:** CSS values that consume build effort but produce no visible effect.

**Technical measurement:** Three sub-checks:

1. **Letter-spacing:** Flags any element with letter-spacing > 0 but < 0.02em. At 16px body text, 0.02em is 0.32px -- below this, the spacing is invisible.
2. **Letter-spacing clustering:** If multiple distinct letter-spacing values exist but adjacent values differ by less than 0.5px, they create illusory differentiation (the builder thinks 5 different typographic treatments exist, but the reader sees zero difference).
3. **Intra-zone background deltas:** Flags child elements within a zone whose background differs from the zone background by 1-9 RGB points (below the 15-point perception threshold). These should either match exactly (inherit) or differ substantially.

**Pass criteria:** Zero sub-perceptual letter-spacing values, zero micro-clusters, zero intra-zone sub-perceptual backgrounds.

**Why this matters:** The Flagship spent 227 CSS lines (22% of its total CSS budget) on letter-spacing values between 0.001em and 0.01em. Every one was imperceptible. That CSS effort could have gone to visible components, grids, and responsive breakpoints -- things that would have moved the PA-05 score from 1.5 to 3.0. Sub-perceptual CSS is not just harmless waste; it actively crowds out perceptible CSS from the builder's effort budget.

**What goes wrong without it:** The builder's finite effort is channeled into invisible refinements instead of visible design. The page looks flat despite complex CSS because the complexity is sub-perceptual.

**Fix recipe when it fails:**
```
FIX: "{N} elements have letter-spacing between 0 and 0.02em (imperceptible).
     Either remove (set to 0) or increase to >= 0.03em."
CSS: "/* BAD: letter-spacing: 0.005em. GOOD: letter-spacing: 0.05em OR letter-spacing: 0 */"
Provenance: "Flagship spent 22% CSS (227 lines) on 0.001-0.01em letter-spacing. All imperceptible."
```

---

### SC-15: Border Presence

**What it checks:** Whether the page contains any structural borders.

**Technical measurement:** Searches for elements with `border-left-width >= 3px` (structural callout borders) and counts `<hr>` elements and elements with divider/separator classes.

**Pass criteria:** At least 1 element with a border-left of 3px or more, OR at least 2 horizontal dividers.

**Why this matters:** The Flagship had zero borders anywhere in the entire page. No callout borders, no section dividers, no structural rules. Borders serve multiple roles in the design system: the 4px left-border is the signature callout accent, horizontal rules create section transitions, and border-weight gradients encode hierarchy. A page with no borders at all is missing an entire visual channel.

**What goes wrong without it:** The page has no visual anchors. Callouts blend into surrounding content. Section transitions are invisible. The structural skeleton that borders provide is absent.

**Fix recipe when it fails:**
```
FIX: "Zero structural borders found. Add border-left: 4px to at least one callout,
     or add <hr> dividers between major sections."
CSS: ".callout { border-left: 4px solid var(--color-primary); padding-left: 24px; }"
```

---

## Gate Classification

Not all gates are created equal. They fall into three confidence tiers:

### Binary Threshold Gates (10 gates, ~95% confidence)

SC-01, SC-02, SC-04, SC-05, SC-06, SC-07, SC-09, SC-10, SC-11, SC-12.

These check a CSS property against a numeric or exact threshold. The measurement is deterministic and the threshold is binary. If `max-width` is 960px, it is 960px -- there is no interpretation involved. These gates are maximally reliable.

### Structural Presence Gates (3 gates, ~90% confidence)

SC-03, SC-08, SC-15.

These check for the presence of specific patterns: font families, class names, border elements. Slightly lower confidence because matching depends on selector accuracy. A component might use a non-standard class name that the gate does not recognize.

### Compositional Gates (2 gates, ~70% confidence)

SC-13, SC-14.

These attempt to measure compositional properties (multi-channel shifts, sub-perceptual waste). They are the weakest gates because composition is not fully reducible to measurement. SC-13 counts channels but cannot assess whether channel shifts are COHERENT. SC-14 catches known anti-patterns but cannot catch novel ones.

---

## The 70/30 Boundary

The gate system covers approximately 70% of the verification needed for a quality page. The remaining 30% requires human-like perceptual judgment that code cannot provide:

| Code can verify (gates) | Code cannot verify (PA) |
|---|---|
| Container width is 960px | Does the layout feel balanced? |
| border-radius is 0 everywhere | Does the page feel DESIGNED? (PA-05) |
| Background delta >= 15 RGB | Does the metaphor drive CSS choices? |
| Font-size delta >= 10px | Do channel shifts serve the same direction? |
| Total gap <= 108px | Does the visual form fit THIS content? |
| >= 3 channels shift per boundary | Does the spacing create satisfying rhythm? |

The boundary rule is simple: **if a property has a numeric threshold, it belongs in the gate runner. If a property requires "does this feel right?", it belongs in the perceptual audit.**

SC-13 (multi-coherence) sits directly on this boundary. The gate checks channel COUNT (numeric: >= 3). The perceptual audit checks channel COHERENCE (judgment: do they serve the same semantic direction?). Both are needed. The gate is necessary-but-not-sufficient.

---

## How Fix Recipes Work

Every gate failure produces a structured fix recipe, not just a PASS/FAIL verdict. The recipe contains:

1. **What was measured:** The specific values the gate found, with element references.
2. **What the threshold is:** The binary pass/fail criterion.
3. **What CSS to write:** A specific, copy-paste-ready CSS fix.
4. **Why this matters:** A one-sentence rationale citing the actual failure that created this gate.
5. **Alternatives:** For gates like SC-09, multiple alternative values that satisfy the threshold.

Fix recipes are concatenated into a single markdown document that the builder reads:

```
## GATE RUNNER RESULTS -- 13/15 PASSED

### BLOCKING FAILURES (2 gates):

#### SC-09: Background Delta -- FAIL
- Boundary: Zone 1 (rgb(254,252,243)) to Zone 2 (rgb(249,248,240))
- Measured: 5 RGB delta (need >= 15)
- Fix: Darken Zone 2 background. Change `.zone-2 { background-color: #f0ebe3; }`
- Why: The Flagship had zones differing by 1-8 RGB -- literally invisible.

#### SC-11: Typography Zones -- FAIL
- Measured: h1 = 18px, p = 16px, delta = 2px (need >= 10)
- Fix: Set `h1 { font-size: 36px; }` and `h2 { font-size: 28px; }`
- Why: The Flagship had ALL text at 16px/400 -- zero hierarchy.

### PASSING GATES (13 gates):
SC-01 PASS, SC-02 PASS, SC-03 PASS, ...
```

This is the RECIPE format: measured values, specific CSS, specific rationale. Not "fix the typography" (a judgment instruction) but "set h1 to 36px because the display-body delta is 2px and needs to be >= 10" (an action instruction with measurement and threshold). This distinction -- recipe vs. checklist -- was identified in the Flagship retrospective as a primary success factor for the Middle-tier experiment versus the Flagship's failure.

---

## What the Gates Cannot Do

The gates exist to prevent known failure modes. They cannot guarantee quality. A page that passes all 15 gates has:

- Correct container width
- Zero soul violations
- Visible zone backgrounds
- Readable typography hierarchy
- No whitespace voids
- Structural borders
- Accessible landmarks
- Multi-channel zone transitions

But it might still feel flat, mechanical, or assembled rather than designed. The gate-passing page has a floor but not a ceiling. The ceiling -- the difference between "technically correct" and "this feels designed" -- lives in the perceptual audit.

This is intentional. The gate system's job is to raise the floor from 1.5/4 (Flagship) to a minimum of 2.5-3.0/4 (technically sound). The perceptual audit's job is to push from 3.0/4 toward 4.0/4 (genuinely designed). Gates prevent catastrophic failure. The PA drives quality.

---

## Quick Reference Table

| Gate | Name | Category | Threshold | Phase Gate |
|------|------|----------|-----------|------------|
| SC-01 | Container Width | Soul | 940-960px | G2 |
| SC-02 | Soul Properties | Soul | border-radius: 0, box-shadow: none | G2 |
| SC-03 | Font Trinity | Soul | >= 2 font families from trinity | G3 |
| SC-04 | Warm Palette | Soul | R >= G >= B on all backgrounds | G2 |
| SC-05 | No Pure Extremes | Soul | No rgb(0,0,0) or rgb(255,255,255) | G2 |
| SC-06 | ARIA Landmarks | Structure | >= 3 landmarks | G1 |
| SC-07 | Skip Link | Structure | Skip link exists | G1 |
| SC-08 | Component Library | Structure | >= 3 component classes | G1 |
| SC-09 | Background Delta | Perception | >= 15 RGB max-channel delta | G2 |
| SC-10 | Stacked Gap | Perception | <= 108px total gap | G3 |
| SC-11 | Typography Zones | Perception | >= 10px display-body delta | G3 |
| SC-12 | Zone Count | Structure | 2-5 zones | G1 |
| SC-13 | Multi-Coherence | Composition | >= 3/6 channels shift per boundary | G3 |
| SC-14 | Sub-Perceptual Prevention | Hygiene | No letter-spacing < 0.02em | G3 |
| SC-15 | Border Presence | Perception | >= 1 border or >= 2 dividers | G2 |
