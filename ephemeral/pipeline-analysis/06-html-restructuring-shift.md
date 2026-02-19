# 06: HTML Restructuring Ideology Shift

**Analyst:** html-restructuring agent (Opus 4.6)
**Date:** 2026-02-18
**Sources Analyzed (all read in full):**
1. `ephemeral/prompt-fix-enrich/FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md` (964 lines)
2. `ephemeral/remediation-audit/12-ENHANCED-REMEDIATION-SPEC.md` (1,026 lines)
3. `ephemeral/remediation-audit/07-structural-html-audit.md` (961 lines)
4. `ephemeral/remediation-audit/02-component-library-gaps.md` (425 lines)
5. `ephemeral/flagship-remediation/builder-changelog.md` (236 lines)
6. `design-system/compositional-core/components/components.css` (1,196 lines)

---

## EXECUTIVE SUMMARY

The master execution prompt and the enhanced remediation spec represent two fundamentally different theories of what HTML is FOR in a design system page. The master prompt treated HTML as an invisible substrate -- a container to be filled with CSS mechanisms. The remediation treated HTML as a semantic scaffold -- a structure that carries meaning independent of styling. This shift was not planned. It emerged from the collision between the master prompt's CSS-first theory and the reality of what 11 remediation auditors found when they tried to fix the flagship page.

**The shift in one sentence:** The master prompt said "build the page with CSS"; the remediation said "build the page with HTML, then express it with CSS."

---

## 1. COMPONENT LIBRARY RELATIONSHIP

### Master Prompt: Library as Ambient Reference

The master prompt mentions the component library in exactly two places:

1. **Section E (Reference Library):** Builder reads `00-components-extract.md` and `00-case-studies-extract.md` -- but these are extracts created by a wrapper process, not the actual `components.css` file. The builder never sees the 1,196-line component library directly.

2. **Section C1 (Builder Visibility Cap):** "Builders receive <= 75 lines of rules (B1+B2+conviction opener+closer). They do NOT see B3-B12, C1-C6, or Section E assignments outside their scope."

The component library is mentioned nowhere in:
- Section B (Execution Spec): Zero rules reference component class names
- Section B10 (Builder Self-Check): Zero items check component library usage
- Gate 1-5 sequence: Zero gates verify component adoption
- Communication Protocol (CP-A through CP-F): Zero messages report component usage

**Root cause of 3/26 family usage:** The master prompt made component library adoption structurally impossible. The builder was capped at 75 lines of rules. The component library was routed through wrapper extracts the builder may never have found (the path said `merged-components.css` but the actual file is `components.css` -- BG-05 fix). Even if found, zero rules mandated using library class names, zero gates checked for them, and zero self-check items measured them.

The library was AMBIENT -- present in the ecosystem, absent from the execution path.

### Remediation: Library as Execution Target

The remediation inverted this relationship. Report 02 (component-library-gaps) created a line-by-line mapping:

| Custom Class | Library Equivalent | Instances | Change Type |
|---|---|---|---|
| `.component-block` | `.callout` family | 9 | HTML restructure |
| `.section-meta` | `.section-indicator` | 12 | Class swap |
| `.master-insight` | `.essence-pullquote` | 1 | HTML restructure |
| `.sequence-block` | `.code-snippet` | 4 | HTML restructure |

The enhanced remediation spec (report 12) then embedded these mappings as PHASE 1 execution steps -- not suggestions, not references, but numbered instructions with before/after HTML. Step 1.5 specifies exactly which callout variant each component block should become. Step 1.6 specifies the class rename for all 12 section indicators.

**The shift:** Library as ambient context -> Library as actionable target. The remediation didn't just mention the library; it mapped every eligible element to its library equivalent and made the mapping an execution phase.

### Bidirectional Mapping

| Philosophy | Specific Changes |
|---|---|
| Library as ambient reference (master prompt) | Builder reads wrapper extracts, not source CSS. Zero rules mandate class names. Zero gates check adoption. Builder invents 54 custom classes. |
| Library as execution target (remediation) | Phase 1 maps 9 callouts + 12 indicators + 1 pullquote. Before/after HTML for each. Verification counts in builder changelog (17 selector checks, all PASS). |

| Specific Change | Philosophical Root |
|---|---|
| `.component-block` -> `.callout callout--gotcha` | Component library is the vocabulary, not an optional reference |
| `.section-meta` -> `.section-indicator` | Design system identity lives in class names, not just visual output |
| 54 custom classes created by builder | Library was invisible at execution time; builder had no vocabulary to use |
| Builder changelog verification (17 selector counts) | Library adoption is measurable and auditable |

---

## 2. CSS-ONLY VS CSS+HTML: THE IDEOLOGY SHIFT

### The Original Position: "Fix With CSS Only"

The original remediation spec (301 lines, 6 phases) was CSS-only. The master prompt's theory: HTML is structurally sound; richness comes from mechanism deployment via CSS channels. This position was internally consistent:

- 89.5% of the HTML body is correct (per report 12)
- The 12-section zone system is architecturally sound
- The dark header/footer bookends work
- The 960px container is compliant

If richness = CSS mechanism count + coupling (the master prompt's theory), then CSS-only remediation should work.

### What Broke the CSS-Only Position

Three audit findings collectively demonstrated that CSS-only was insufficient:

**Finding 1: Layout monotony is an HTML problem (Report 07, Category 3)**

The entire 2,034-line page is single-column. Every section follows identical structure: `<section><div class="page-container"><p><p><p></div></section>`. CSS cannot create multi-column layouts without wrapper divs. The `tension-pair`, `sequence-grid`, and `hypothesis-grid` wrappers proposed by report 07 require HTML elements that don't exist. CSS `grid-template-columns: 1fr 1fr` needs a grid container -- there is no container to apply it to.

This is not an aesthetic preference. 2,034 lines of identical single-column stacking is a structural monotony that no CSS property can address. The layout shape is encoded in HTML, not CSS.

**Finding 2: Component differentiation requires semantic class names (Report 02)**

The builder created 9 callout-type elements using `.component-block`. These look identical -- same 4px left border, same padding, same typography. CSS COULD differentiate them (different border colors per instance), but which instance? Without semantic class names (`.callout--gotcha` vs `.callout--tip`), the CSS has no selector to target. You can't write `.component-block:nth-of-type(3)` and expect maintainability. The HTML needed semantic markers.

Report 02 quantified this: CD-006 (39/40) uses 11+ component families. The flagship uses 3. The difference isn't CSS styling -- it's HTML vocabulary. CD-006 has `role="note"` on callouts, `.essence-pullquote` for the focal quote, `.section-indicator` for section labels. The flagship has generic divs.

**Finding 3: Accessibility is fundamentally an HTML concern (Report 07, Category 1)**

The master prompt contained zero accessibility considerations. The flagship HTML has:
- No skip link
- No `<main>` wrapper
- No `aria-label` on sections
- No `role` attributes on any element
- No `::selection` or `*:focus-visible`

These are HTML attributes, not CSS properties. `role="note"`, `aria-label="Section 7"`, `<main id="main-content">` -- none of these exist in CSS. The remediation added 38 HTML modifications for accessibility alone.

### The Evidence Threshold

Report 11 (adversarial audit) provided the decisive evidence: "CSS-only caps at PA-05 2-3/4." The adversarial agent's reasoning:

1. CSS can change colors, sizes, spacing, borders -- all Ch1-Ch4 properties
2. CSS cannot change layout SHAPE (single-column vs multi-column)
3. CSS cannot add ARIA landmarks or semantic roles
4. CSS cannot create component VARIETY from identical HTML structure
5. Therefore: CSS-only = channel enrichment without structural variety = competent, not designed

This prediction (PA-05 2-3/4 for CSS-only) vs the enhanced spec's prediction (PA-05 3-4/4 with HTML restructuring) provided the economic justification. The remediation spec included this comparison table (Section 7):

| Scenario | PA-05 | Channels |
|---|---|---|
| CSS-only (original) | 2-3/4 | 5/7 |
| CSS + HTML (enhanced) | 3-4/4 | 7/7 |
| Fresh rebuild | 4/4 | 7/7 |

### Bidirectional Mapping

| Philosophy | Specific Changes |
|---|---|
| CSS-only fixes everything | 6-phase CSS recipe: backgrounds, borders, typography, spacing, element-level, responsive. Zero HTML modifications. |
| HTML structure determines CSS ceiling | Phase 0 deallocation (delete 216 invisible CSS lines) + Phase 1 (47 HTML restructuring changes) + Phases 2-7 (CSS applied to new HTML structure) |

| Specific Change | Philosophical Root |
|---|---|
| `tension-pair` grid wrapper (S7) | CSS grid requires an HTML container; layout shape lives in HTML |
| `sequence-grid` wrapper (S8) | Single-column stacking is an HTML constraint, not a CSS limitation |
| `hypothesis-grid` wrapper (S11) | Content arrangement is structural, not decorative |
| Phase 0 deallocation of 216 CSS lines | Sub-perceptual CSS is waste; the problem wasn't insufficient CSS but wrong HTML |
| Original 301-line CSS-only spec | Belief that richness = CSS channels, not structural variety |

---

## 3. SEMANTIC MARKUP: ADDITION OR REVERSAL?

### Master Prompt: Zero Accessibility

The master prompt's 964 lines contain exactly zero references to:
- ARIA attributes
- Semantic landmarks (`<main>`, `<nav>`, `<aside>`)
- Skip links
- Focus management
- Screen reader compatibility
- WCAG compliance

This wasn't an oversight. The master prompt's 97 rule IDs (S:17, U:10, C:21, MC:8, SC:10, MG:5, P:8, CT:8, RP:4, CP:6) cover spatial confidence, soul compliance, compositional quality, multi-coherence, scale-channel richness, metaphor gates, process gates, content transformation, recovery protocols, and communication checkpoints. Accessibility was not in the problem model.

The master prompt's theory of quality: Quality = spatial confidence x compositional coupling x metaphor depth. Accessibility does not appear in this equation.

### Remediation: Accessibility as Professional Finish

The enhanced remediation spec added 7 accessibility features requiring 38 HTML modifications:

1. **Skip link:** `<a href="#main-content" class="skip-link">Skip to main content</a>`
2. **Main wrapper:** `<main id="main-content">`
3. **ARIA labels:** 12 sections with `aria-label="Section N: [title]"`
4. **Role attributes:** `role="note"` on 9 callouts, `role="separator"` on 11 dividers, `role="banner"` on header, `role="contentinfo"` on footer
5. **Focus-visible:** `*:focus-visible { outline: 3px solid var(--color-primary); }`
6. **Selection styling:** `::selection { background: var(--color-primary); }`
7. **Reduced motion:** `@media (prefers-reduced-motion: reduce)`

### Was This an Addition or a Reversal?

This was an ADDITION, not a reversal, because the master prompt had no accessibility position to reverse. But it represents a deeper PHILOSOPHICAL REVERSAL: the master prompt defined quality purely through visual perception (PA-05 = "does it look designed?"). The remediation added a second quality dimension: does it behave correctly for all users?

The component library (`components.css`) makes this tension visible. The library includes skip-link (100% frequency, 27/27 files), focus-visible (100% frequency), and selection styling (81% frequency). These are identity-level components -- as fundamental as border-radius: 0 or the typography trinity. The master prompt's failure to mandate them was a structural gap in its quality model, not a conscious exclusion.

### How Semantic Markup Relates to Visual Quality

The builder changelog reveals an unexpected connection: semantic markup improves visual design quality. The 9 `role="note"` attributes on callouts didn't just add accessibility -- they forced the builder to think about each callout's PURPOSE. A generic `.component-block` could be anything. A `.callout callout--gotcha role="note"` communicates: this is a warning, it's a note, it's a gotcha-type callout. The semantic markers create design intentionality.

Report 07 identified this explicitly: "Self-reference callouts should be `<aside>` elements, not generic `<div>` callouts." The semantic element `<aside>` communicates that this content is tangential -- which is EXACTLY what a self-reference moment is. The HTML element and the design function align.

### Bidirectional Mapping

| Philosophy | Specific Changes |
|---|---|
| Quality = visual perception only | Zero ARIA attributes, zero semantic landmarks, zero accessibility rules in 97 rule IDs |
| Quality = visual perception + professional behavior | 38 HTML modifications, 7 accessibility features, ~180 CSS lines for skip-link/focus/selection/reduced-motion/print/responsive |

| Specific Change | Philosophical Root |
|---|---|
| `role="note"` on 9 callouts | Components have semantic purpose, not just visual appearance |
| `role="separator" aria-hidden="true"` on 11 dividers | Decorative elements should be hidden from assistive technology |
| `<main id="main-content">` wrapper | Page structure is a landmark hierarchy, not just a visual hierarchy |
| `aria-label="Section 7: Three Tensions"` | Sections have identity independent of their visual presentation |
| Zero accessibility in master prompt | Quality model excluded non-visual experience |
| CD-006 has 8/8 accessibility features | The crown jewel (39/40) included everything the master prompt excluded |

---

## 4. CLASS NAMING: SEMANTIC SHIFTS

### The Renames Are Not Renames

Four class name changes in the remediation look like simple renaming but encode fundamentally different design philosophies:

#### `section-meta` -> `section-indicator`

**Old name:** "section-meta" -- metadata ABOUT the section. Implies supplementary information that describes the section from outside. Meta-information is often skippable.

**New name:** "section-indicator" -- an INDICATOR within the section. Implies a wayfinding element that orients the reader. An indicator is functional, not supplementary.

**What the library encodes:** The library's `.section-indicator` (components.css line 456) includes `border-bottom: 1px solid var(--color-border-subtle)` -- a structural underline that the builder's `.section-meta` lacked. This border transforms the element from floating text into a structural anchor. The name change carries the border.

**Design implication:** Section labels are wayfinding devices, not metadata footnotes.

#### `component-block` -> `callout` variants

**Old name:** "component-block" -- a generic BLOCK that is a COMPONENT. Describes what it IS (a block) and what category it belongs to (components). Communicates nothing about purpose, tone, or semantic weight.

**New names:** "callout callout--gotcha", "callout callout--tip", "callout callout--essence" -- a CALLOUT that calls attention. The variant suffix communicates semantic PURPOSE:
- `--gotcha`: danger/warning/friction
- `--tip`: solution/resolution/guidance
- `--essence`: distilled wisdom/core insight

**What the library encodes:** Each callout variant has a distinct border color (gotcha = red/coral, tip = green, essence = amber) and background tint. The 9 `.component-block` elements in the flagship all looked identical -- same border, same background. The callout variants make them visually distinct WITHOUT any CSS customization. The names carry the styling.

**Design implication:** Visual differentiation should be semantic (what the content IS), not positional (where the content sits).

#### `tension-group` -> `tension-pair`

**Old name:** "tension-group" -- a GROUP of tension-related things. Implies an indeterminate collection. Could contain 2, 3, or 5 items. The CSS set `max-width: 90%; margin-left: 5%` -- a generic narrowing with no structural commitment.

**New name:** "tension-pair" -- exactly TWO things in a PAIR relationship. The name implies side-by-side comparison. The CSS delivers: `display: grid; grid-template-columns: 1fr 1fr;` -- tension on the left, resolution on the right.

**What the remediation encodes:** A pair is a relationship type, not just a container type. Tension and resolution are conceptual opposites that belong side-by-side. The old "group" stacked them vertically -- which communicates "these are sequential" (read tension first, then resolution). The new "pair" places them adjacent -- which communicates "these are simultaneous" (tension and resolution coexist).

**Design implication:** Content relationships should be encoded in layout structure, not just proximity.

#### `.hypothesis-group-2` / `.hypothesis-group-3` -> `.hypothesis-grid`

**Old names:** "hypothesis-group-2" and "hypothesis-group-3" -- numbered groups with progressive spacing CSS (4-8px margin deltas). The numbers are arbitrary -- they encode build order, not content relationships.

**New name:** "hypothesis-grid" -- a grid of hypothesis tables. The remediation wraps the first two tables in a 2-column grid and leaves the third full-width. This communicates: the first two are comparable (same scale), the third is synthetic (combines both).

**Design implication:** Build-order numbering is replaced by content-relationship encoding.

### The Pattern Across All Renames

Every rename moves in the same direction:

| Old Name | Old Philosophy | New Name | New Philosophy |
|---|---|---|---|
| section-meta | Describes what it IS | section-indicator | Describes what it DOES |
| component-block | Describes its category | callout--gotcha | Describes its PURPOSE |
| tension-group | Describes its container | tension-pair | Describes its RELATIONSHIP |
| hypothesis-group-2 | Describes its BUILD ORDER | hypothesis-grid | Describes its CONTENT STRUCTURE |

**The direction:** From STRUCTURAL description (what things are) to FUNCTIONAL description (what things do and mean).

### Bidirectional Mapping

| Philosophy | Specific Changes |
|---|---|
| Classes describe structural categories | `.component-block`, `.section-meta`, `.tension-group`, `.hypothesis-group-2` |
| Classes describe semantic function | `.callout--gotcha`, `.section-indicator`, `.tension-pair`, `.hypothesis-grid` |

| Specific Change | Philosophical Root |
|---|---|
| `.component-block.dense` -> `.callout .callout--info` | Components have semantic variants, not density variants |
| `.component-block.resolution` -> `.callout .callout--tip` | Resolution is a content type (tip), not a modifier on a generic block |
| `.section-meta` -> `.section-indicator` (12 instances) | Section labels orient readers, not describe metadata |
| `.tension-group` -> `.tension-pair` (3 instances) | Content relationships are structural, not sequential |

---

## 5. GRID ADOPTION: SOLVING VISUAL PROBLEMS

### The Visual Problem: 2,034 Lines of Identical Shape

The flagship page is 2,034 lines of HTML. Every section follows the same pattern:

```html
<section class="zone-sN" style="padding:...">
  <div class="page-container">
    <div class="section-meta">...</div>
    <h2>...</h2>
    <p>...</p>
    <p>...</p>
    [optional: table or component-block]
    <p>...</p>
  </div>
</section>
```

The visual consequence: every screenful looks the same. Content flows top-to-bottom in a single column. There is no spatial variety -- no moment where the reader's eye path changes. The CSS can change colors, borders, font sizes, and spacing, but the SHAPE of every screen is identical: a centered column of stacked elements.

Report 07 called this "structurally monotone" and identified it as the root cause of RC-12 (single-column monotony). PA auditors experience this as visual fatigue -- the page is technically rich (14 mechanisms deployed) but perceptually flat.

### What the Three Grids Solve

**Grid 1: `tension-pair` (S7) -- Comparison Shape**

S7 contains 3 tension/resolution pairs. Without the grid, they stack: tension block, then resolution block, then next tension block. The reader processes them as a list of 6 items. With the grid (`grid-template-columns: 1fr 1fr`), tension sits LEFT and resolution sits RIGHT. The reader processes them as 3 COMPARISONS. The eye moves horizontally for the first time on the page.

Visual problem solved: introduces horizontal eye movement in a vertically-monotone page.

**Grid 2: `sequence-grid` (S8) -- Density Shape**

S8 contains 4 dark sequence blocks (dark background, light text). Without the grid, they stack vertically -- 4 tall dark boxes in a column, consuming significant vertical space. With the grid (2x2), they form a compact square. This creates what report 07 calls the "dark center" landmark -- a visual anchor that is SHAPEFULLY DIFFERENT from everything above and below.

Visual problem solved: creates a distinct visual landmark mid-page that breaks the cream-background monotony.

**Grid 3: `hypothesis-grid` (S11) -- Hierarchy Shape**

S11 contains 3 hypothesis tables. The first two (density and axis) are comparable in scope. The third (combination) synthesizes both. Without the grid, all three are full-width stacked -- communicating equal importance. With the grid (first two side-by-side, third full-width), the layout communicates: "these two are peers, this one is the synthesis." The visual hierarchy matches the content hierarchy.

Visual problem solved: layout shape communicates content relationships that vertical stacking cannot express.

### Why the Master Prompt Had No Grids

The master prompt's theory of richness operates through CSS CHANNELS (chromatic, typographic, spatial, structural, density, rhythmic, intentional). Channels are properties applied to EXISTING elements. The master prompt's richness model does not include layout shape as a variable.

Rule SC-09 ("minimum 3 channels shift at every section transition") checks whether CSS PROPERTIES change between sections. It does not check whether the LAYOUT SHAPE changes. A section transition from single-column-with-warm-background to single-column-with-cool-background passes SC-09 (background changed = chromatic channel shifted). A section transition from single-column to two-column would also pass SC-09, but the master prompt never conceived of layout change as a channel.

The remediation didn't just add grids; it implicitly expanded the richness model to include LAYOUT VARIETY as a quality dimension. This is the most theoretically significant shift in the HTML restructuring -- it extends the multi-channel model from 7 CSS channels to 7 CSS channels + 1 structural channel (layout shape).

### Bidirectional Mapping

| Philosophy | Specific Changes |
|---|---|
| Richness = CSS channels on fixed HTML structure | SC-09 checks 6 CSS channels (chromatic, typographic, spatial, structural, density, rhythmic). Zero layout shape checks. All content stacked in single column. |
| Richness = CSS channels + layout shape | `.tension-pair` (comparison layout), `.sequence-grid` (density layout), `.hypothesis-grid` (hierarchy layout). 3 of 12 sections now have distinct spatial shape. |

| Specific Change | Philosophical Root |
|---|---|
| `tension-pair { grid-template-columns: 1fr 1fr }` | Content relationships should be spatially expressed, not just sequentially stacked |
| `sequence-grid { grid-template-columns: 1fr 1fr }` | Visual landmarks require shape variation, not just color/typography variation |
| `hypothesis-grid { grid-template-columns: 1fr 1fr }` | Content hierarchy can be encoded in layout structure |
| Zero grids in master prompt | Richness model based on CSS property channels, not layout geometry |
| `@media (max-width: 768px) { grid-template-columns: 1fr }` | Grids are progressive enhancements that gracefully degrade |

---

## 6. UNIFIED ANALYSIS: THE THEORY SHIFT

### Master Prompt Theory: CSS-Mechanism Richness

The master prompt operates on a coherent theory:

1. **HTML is a container.** Its job is to hold content in a semantically reasonable structure. The 12-section zone system is sufficient.
2. **CSS mechanisms create richness.** Border-weight gradients, zone backgrounds, spacing compression, typographic variation -- these are the tools of design.
3. **Quality = mechanism coupling.** CCS (Compositional Coupling Score) measures how much mechanisms NEED each other. CD-006's 39/40 came from high CCS (~0.55), not from HTML innovation.
4. **Channels are CSS properties.** The 7 channels (chromatic, typographic, spatial, structural, density, rhythmic, intentional) are all CSS-expressible (except intentional, which is Opus-agent domain).

This theory produces excellent work when the HTML is already varied (CD-006 has 11+ component families, bento grids, callout variants, and semantic landmarks). It fails when the HTML is monotone.

### Remediation Theory: HTML-First Design

The remediation (reports 02, 07, 12) operates on a different theory:

1. **HTML is a scaffold.** Its structure determines the ceiling of what CSS can express. Monotone HTML = monotone design, regardless of CSS richness.
2. **Component vocabulary creates identity.** Using `.callout--gotcha` instead of `.component-block` isn't just naming -- it's carrying the design system's visual identity in the class names themselves.
3. **Quality = structural variety + CSS richness.** Both are necessary. CSS-only caps at PA-05 2-3/4 (report 11). HTML restructuring raises the ceiling to 3-4/4.
4. **Layout shape is a channel.** The arrangement of content (single-column vs two-column vs grid) is as semantically loaded as background color or font weight.

### What Caused the Shift

The shift was not ideological (nobody argued for HTML-first as a principle). It was empirical:

1. **Builder produced 3/26 component families.** This was measurable. The audit counted it. The gap between 3/26 and CD-006's 11+ was too large to attribute to CSS choices alone.

2. **CSS-only remediation predicted PA-05 2-3/4.** Report 11's adversarial analysis set a credible ceiling. The user's goal was PA-05 >= 3/4 (SHIP threshold). CSS-only couldn't reach it.

3. **47 HTML problems were catalogued.** Report 07 enumerated every structural deficiency: 18 HIGH, 17 MEDIUM, 12 LOW. The sheer volume of HTML problems made CSS-only untenable.

4. **Accessibility was entirely missing.** CD-006 has 8/8 accessibility features. The flagship has 0/8. These require HTML changes. CSS cannot add `role="note"`.

The shift was driven by evidence, not philosophy. The master prompt's CSS-first approach was tested (the flagship experiment produced a DO NOT SHIP verdict) and found insufficient. The remediation responded to what the evidence demanded.

### The Deeper Pattern

The master prompt and the remediation represent two complementary half-truths:

- **Master prompt truth:** CSS mechanisms create perceptual richness. Coupling > counting. This is confirmed by CD-006 (6-12 mechanisms, CCS ~0.55, score 39/40).
- **Remediation truth:** CSS mechanisms require structural variety to express themselves. Identical HTML structure collapses CSS variation into surface decoration. This is confirmed by the flagship (14 mechanisms, CCS ~0.05, verdict DO NOT SHIP).

Neither alone is sufficient. The master prompt was correct about mechanism quality (coupling > counting). The remediation was correct about structural preconditions (HTML variety enables CSS expression). A complete theory would be:

**Quality = HTML structural variety x CSS mechanism coupling x content-form alignment**

If any factor is zero, the product is zero. The flagship had near-zero structural variety. The ceiling experiment had near-zero spatial confidence. Both failed despite excellence in other dimensions.

---

## 7. CROSS-CUTTING FINDINGS

### Finding 1: The Builder Visibility Cap Created the Library Gap

The master prompt capped builder visibility at 75 lines (rule XR-16). This was intended to prevent information overload. But it also prevented the builder from seeing the component library -- the very resource that would have prevented 54 custom class names.

**Implication for future prompts:** Builder visibility caps must INCLUDE a component library brief. The cap should be "75 lines of rules + 25 lines of component vocabulary" not "75 lines total."

### Finding 2: Class Names Are Specifications, Not Labels

Every class rename in the remediation carries visual behavior. `.callout--gotcha` brings a coral border. `.section-indicator` brings a bottom underline. `.tension-pair` brings a 2-column grid. The master prompt treated class names as arbitrary labels the builder could choose. The remediation treated class names as specifications that carry the design system's tested patterns.

**Implication:** A class naming convention is not a style guide nicety -- it's a mechanism delivery system. Using library class names IS using library mechanisms.

### Finding 3: Accessibility Is an HTML Quality Gate, Not a Feature Toggle

The remediation framed accessibility as a "BLOCKING gap" -- not a nice-to-have enhancement. Report 12's comparison table listed accessibility at 0/8 vs CD-006's 8/8. This framing elevated accessibility from "feature" to "gate" -- the same status as container width (940-960px) or soul compliance (10/10).

**Implication for future prompts:** Accessibility should be a FAIL-IF binary rule, not an optional enhancement. Rule suggestion: "A-01. Skip link, `<main>` wrapper, ARIA labels on all `<section>` elements. FAIL IF missing."

### Finding 4: The Deallocation Phase Inverted CSS Philosophy

Phase 0 of the remediation DELETED 216 lines of CSS before adding anything new. This is the opposite of the master prompt's philosophy (deploy mechanisms, measure coupling). The remediation said: "Before asking what to add, ask what to remove." The 216 deleted lines were all sub-perceptual -- letter-spacing deltas of 0.004-0.01em (0.064-0.16px), color shifts of 2-7 RGB points, margins identical to base values.

**Implication:** A perception threshold check should precede mechanism deployment. Every CSS value should answer: "Can a human see this without a color picker?" If no, don't write it.

### Finding 5: The Remediation Created an Implicit 8th Channel

The master prompt defined 7 channels (chromatic, typographic, spatial, structural, density, rhythmic, intentional). The remediation's grid adoption implicitly added an 8th: LAYOUT (the arrangement of elements in 2D space). Layout includes single-column vs multi-column, side-by-side comparison vs vertical stacking, full-width vs paired presentation.

This 8th channel is unique because it cannot be expressed through CSS alone -- it requires HTML wrapper elements. It is the only channel where HTML structure determines CSS capability.

**Implication for scale-channel model:** SC-02 should be updated to "8 channels" with Ch8 LAYOUT (arrangement of elements in 2D space -- requires HTML grid/flex containers, not CSS-only).

---

## 8. QUANTITATIVE EVIDENCE

| Metric | Master Prompt Specification | Remediation Execution | Delta |
|---|---|---|---|
| Component library families used | 3/26 (11.5%) | ~10/26 (38%) | +269% |
| Accessibility features | 0/8 | 7/8 | +7 |
| HTML restructuring changes | 0 | 57 | +57 |
| CSS lines deleted | 0 | ~201 | -201 |
| CSS lines added | ~984 total | ~311 added | net +110 |
| Multi-column layouts | 0 | 3 grids | +3 |
| ARIA attributes | 0 | 45+ (12 aria-label + 9 role="note" + 11 role="separator" + ...) | +45 |
| Custom classes | 54 | ~30 (24 replaced by library) | -24 |
| Semantic element types | 3 (header, section, footer) | 6+ (+ main, nav/skip-link, aside) | +3 |
| Layout shapes | 1 (single-column) | 4 (single-column + 3 grids) | +3 |

---

## 9. CONCLUSION

The HTML restructuring shift is the most theoretically significant transformation in the master-prompt-to-remediation pipeline. It reveals that the master prompt's quality model was INCOMPLETE, not wrong. The master prompt correctly identified mechanism coupling as the key quality driver (CCS ~0.55 = 39/40, CCS ~0.05 = DO NOT SHIP). But it failed to recognize that mechanism coupling requires structural variety to operate.

The remediation didn't reject the master prompt's theory. It COMPLETED it by adding the structural precondition that the master prompt assumed without specifying. The master prompt assumed builders would naturally use the component library, create semantic landmarks, and vary layout shape. They didn't. The remediation made these assumptions explicit through 57 HTML restructuring changes, 7 accessibility features, and 3 grid layouts.

The lesson for future execution prompts: **HTML is not a given. It is a design decision that determines the ceiling of CSS expression.** Any prompt that specifies CSS mechanisms without specifying HTML structure will produce the same failure mode: high mechanism count, low perceived richness, single-column monotony, and missing accessibility. HTML specification is not "outside the scope of CSS composition" -- it IS composition.

---

**END HTML RESTRUCTURING SHIFT ANALYSIS**

**Total: ~460 lines. 9 sections covering 5 analysis dimensions + cross-cutting findings + quantitative evidence + conclusion.**
