# Editorial Design Principles: Concrete Guardrails for Proportion and Spacing

**Research Date:** 2026-02-13
**Purpose:** Establish non-negotiable numerical guardrails for metaphor-driven HTML layouts to prevent uncomfortable proportions and ensure magazine-quality perceptual standards.
**Researchers:** Two independent agents — results merged and cross-validated.

---

## 1. Sources Consulted

### Books & Foundational References
- **Robert Bringhurst, *The Elements of Typographic Style*** (4th ed., 2012) — the canonical typography reference
- Applied to web via [Inkwell Typography](https://www.inkwell.ie/typography/bringhurst.html)
- [The Elements of Typographic Style (PDF)](https://readings.design/PDF/the_elements_of_typographic_style.pdf)
- [The Element Selectors of Typographic Style](https://medium.com/@carolynmcneillie/the-element-selectors-of-typographic-style-2ef34ff16320)

### Content Width & Layout Standards
- [Ultimate Guide to Standard Website Dimensions for 2025](https://thewhitelabelagency.com/standard-website-dimensions-guide/)
- [Website Dimensions & Typography in 2026](https://www.samiharaketi.com/post/website-dimensions-typography-in-2026-a-practical-guide-for-web-designers)
- [Alliance Interactive — Website Dimensions 2025](https://www.allianceinteractive.com/blog/website-dimensions/)
- [Max-Content Width & Other Ways to Improve the UX](https://www.newtarget.com/web-insights-blog/max-content-width/)
- [The Best Web Page Width](https://www.untitledsite.co/squarespace-tutorials/best-web-page-width)
- [Ithy — Optimal Max-Width Settings](https://ithy.com/article/optimal-max-width-settings-g1ckvjnv)

### Typography & Reading Standards
- [Learn UI Design — Font Size Guidelines (2024)](https://www.learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)
- [Pimp my Type — Font Size](https://pimpmytype.com/font-size/)
- [design.dev — Typography Web Design Complete Guide](https://design.dev/guides/typography-web-design/)
- [UI/UX Principle #46: Text Box Width Should Help Users Read](https://www.freshconsulting.com/insights/blog/uiux-principle-46-text-box-width-should-help-users-read/)
- [Readability: The Optimal Line Length – Baymard](https://baymard.com/blog/line-length-readability)
- [Choose a comfortable measure | Bringhurst Applied to the Web](http://webtypography.net/2.1.2)

### Vertical Rhythm & Spacing Systems
- [designsystems.com — Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)
- [Atlassian Design — Spacing Overview](https://atlassian.design/foundations/spacing/)
- [Red Hat Design System — Spacing](https://ux.redhat.com/foundations/spacing/)
- [Designary — Spacing Systems & Scales](https://blog.designary.com/p/spacing-systems-and-scales-ui-design)
- [Material Design 3 — Layout Spacing](https://m3.material.io/foundations/layout/understanding-layout/spacing)
- [EightShapes — Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
- [Why is Vertical Rhythm an Important Typography Practice?](https://zellwk.com/blog/why-vertical-rhythms/)
- [Rhythm in Web Typography | Better Web Type](https://betterwebtype.com/rhythm-in-web-typography/)

### Golden Ratio & Proportions
- [Figma — Golden Ratio](https://www.figma.com/resource-library/golden-ratio/)
- [NN/g — Golden Ratio and UI Design](https://www.nngroup.com/articles/golden-ratio-ui-design/)
- [Creative Bloq — Designer's Guide to the Golden Ratio](https://www.creativebloq.com/design/designers-guide-golden-ratio-12121546)

### Editorial Grid Systems
- [How To Build A Magazine Layout With CSS Grid Areas](https://www.smashingmagazine.com/2023/02/build-magazine-layout-css-grid-areas/)
- [Editorial Design Patterns With CSS Grid](https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/)

### Magazine-Quality Standards
- [Monocle: design notes 2007-2008 – City of Sound](https://cityofsound.com/2008/04/14/monocle-design/comment-page-2/)
- [Structure, System, & Form: Analyzing Monocle](https://gkupfers.medium.com/structure-system-form-dabdffcb0480)
- [Magazine Design and the Beauty of White Space](https://www.picantecreative.com/magazine-design-blog/magazine-design/magazine-design-and-the-beauty-of-white-space/)
- [Good Magazine Page Layout Design Tips: White Space](https://flip180media.com/tips-for-periodical-publishers/magazine-layout-design-mistakes-white-space/)
- [Magazine Design Elements Visual Guide](https://flip180media.com/tips-for-periodical-publishers/magazine-design-elements-visual-guide-to-margins-grids-gutters-and-more/)
- [Publitas — Magazine Layout Structure & Hierarchy](https://www.publitas.com/blog/how-to-design-a-magazine-layout/)
- [Basics of Magazine Layout Design](https://people.wou.edu/~visuanod/magazine_layout/columns.html)
- [Design Magazine Layout Like an Art Director](http://tirsogamboa.com/how-to-design-a-magazine-layout-like-a-true-editorial-designer/)

### Accessibility
- [WCAG 2.2 — Understanding Text Spacing (SC 1.4.12)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- [Deque University — WCAG 2.1 Text Spacing](https://dequeuniversity.com/resources/wcag2.1/1.4.12-text-spacing)
- [The A11Y Collective — Text Spacing Best Practices](https://www.a11y-collective.com/blog/text-spacing-wcag/)

### Information Density & Negative Space
- [NN/g — Information Density](https://www.nngroup.com/topic/information-density/)
- [LogRocket — Balancing Information Density](https://blog.logrocket.com/balancing-information-density-in-web-development/)
- [Negative Space in Design — Codener](https://codener.com/how-to-use-negative-space-like-a-pro-designer/)
- [Negative Space — Layers Magazine](https://layersmagazine.com/negative-space.html)
- [What is Negative Space? | IxDF](https://www.interaction-design.org/literature/topics/negative-space)

---

## 2. Content Proportion Principles (with Numbers)

### 2.1 Content-to-Viewport Width Ratio at 1440px

**Overall Content Container:**

| Viewport Width | Content Max-Width | Ratio | Source/Rationale |
|---|---|---|---|
| 1440px | 1140px | **79%** | Industry standard container (White Label Agency, Alliance Interactive) |
| 1440px | 1200px | **83%** | Common for complex/rich layouts (Ithy) |
| 1440px | 1280px | **89%** | Upper bound for full-featured layouts |
| 1440px | 960px | **67%** | Golden-ratio-derived (1440 / 1.5) |
| 1440px | 893px | **62%** | Pure golden ratio: 62% content, 38% margins |

**Editorial/Text-Heavy Content:**
- **Blog article optimal width:** 640-760px (44-53% of viewport)
- **Medium.com standard:** 700px (49% of viewport)
- **Maximum for extended reading:** 960px (67% of viewport)

**Guardrail Derivation:**

- **Minimum content width at 1440px: 55%** (792px). Below this, content feels like a narrow strip lost in a sea of margins. Even the most generous editorial layouts (Monocle, NYT Mag) don't drop below ~55%.
- **Maximum content width at 1440px: 88%** (1267px). Above this, the layout feels edge-to-edge and loses its "magazine" quality.
- **Sweet spot: 67-83%** (960-1200px). This is where professional editorial lives.

### 2.2 Horizontal Margin/Padding Minimums

| Context | Minimum Padding | Comfortable Padding | Source |
|---|---|---|---|
| Outer page margin (1440px) | 80px per side (5.5%) | 120-160px per side (8-11%) | Standard 1440→1140 = 150px each side |
| Outer page margin (mobile) | 16px per side | 20-24px per side | Material Design, Atlassian |
| Section internal padding | 24px | 32-48px | Design system tokens |
| Card/component internal | 12px | 16-24px | Design system tokens |

**Guardrail: Minimum outer horizontal padding at 1440px = 80px per side (160px total).** Anything less fails the magazine test — content touching or nearly touching viewport edges screams "amateur."

### 2.3 Line Length (Characters per Line)

| Quality | Characters per Line | Source |
|---|---|---|
| Optimal | **66 characters** | Bringhurst |
| Acceptable range | **45-75 characters** | Bringhurst, Learn UI Design, design.dev |
| WCAG maximum | **80 characters** | WCAG (non-CJK) |
| Absolute minimum | **40 characters** | Below this, excessive ragging |
| Multi-column layouts | **40-50 characters** | Narrower for multi-col |

At 16px body text, 66 characters is approximately **530-600px**. At 18px, approximately **590-660px**.

**Pixel-to-Character Conversion:** 66 characters typically equals ~700-760px in modern web fonts.

**Guardrail: Body text containers must produce 45-75 characters per line at the rendered font size.** This is the single most validated typography rule in existence.

---

## 3. Typographic Spacing Principles (with Numbers)

### 3.1 The Typographic Spacing Hierarchy

Different levels of content hierarchy require different amounts of vertical space. This is the Gestalt "law of proximity" — closer items are perceived as related.

| Spacing Level | Purpose | Minimum px | Typical px | Source |
|---|---|---|---|---|
| **Micro** | Icon-to-text, inline elements | 4px | 4-8px | 4px baseline grid |
| **Intra-component** | Elements within a single component | 8px | 8-12px | Design system tokens |
| **Label-to-heading** | Meta/label text above a heading | 8px | 12-16px | Red Hat DS, Material |
| **Heading-to-body** | Heading to its body text | 12px | 16-24px | design.dev: 0.5em-1em below heading |
| **Paragraph-to-paragraph** | Between body text paragraphs | 16px | 16-24px | Bringhurst: 1em-1.5em |
| **Component-to-component** | Between distinct content blocks | 24px | 24-32px | Atlassian, Red Hat |
| **Section-to-section** | Between major page sections | 48px | 48-80px | Multiple design systems |
| **Region-to-region** | Between top-level page regions | 64px | 64-96px | designsystems.com |

### 3.2 The Label-to-Heading Gap (Critical for Metaphor Layouts)

This is the specific gap our layouts get wrong most often: a small mono/caps label ("CATEGORY" or "Section 03") sitting above a large serif heading.

**The problem:** When two radically different typographic voices are adjacent (e.g., 11px mono caps above a 28px serif heading), insufficient space creates visual collision. The eye needs MORE space between dissimilar type families than between similar ones.

**Rules derived from Bringhurst + modern design systems:**

| Relationship | Minimum Gap | Recommended Gap | Rationale |
|---|---|---|---|
| Same family, same size | 4px | 8px | Tight coupling is fine |
| Same family, different size | 8px | 12-16px | Size shift needs buffer |
| Different family, similar size | 8px | 12-16px | Family shift needs buffer |
| **Different family AND different size** | **12px** | **16-24px** | **Double shift = double buffer** |
| **Different family, different size, AND different case** | **16px** | **20-28px** | **Triple shift = generous buffer** |

**Guardrail: Minimum label-to-heading gap = 12px. Recommended = 16-24px.** This applies whenever a small meta/label element (mono, caps, small) sits above a larger heading element (serif, mixed-case, large).

### 3.3 Heading-to-Body Gap

| Heading Level | Min Below | Recommended Below | Recommended Above | Source |
|---|---|---|---|---|
| H1 (display) | 16px | 24-32px | 32-48px | design.dev: 0.5-1em below, 1.5-2em above |
| H2 | 12px | 16-24px | 24-32px | design.dev |
| H3 | 8px | 12-16px | 16-24px | design.dev |
| H4-H6 | 8px | 8-12px | 12-16px | design.dev |

**Asymmetric Heading Spacing Rule:** Space above heading = **1.5-2x** space below heading. This is the universal editorial standard. Example: 36px above, 24px below. Or: 48px above, 32px below.

**Guardrail: Heading bottom margin minimum = 0.5em of the heading's own font size.** A 32px H1 needs at least 16px below it. A 24px H2 needs at least 12px.

### 3.4 Line Height by Context

| Text Type | Minimum Line Height | Recommended | Source |
|---|---|---|---|
| Body text (16-18px) | **1.5** | 1.5-1.6 | WCAG, Bringhurst, design.dev |
| Large body (20px+) | 1.4 | 1.4-1.5 | design.dev |
| Small text (12-14px) | 1.5 | 1.6-1.8 | design.dev, WCAG |
| Large headings (32px+) | 1.1 | 1.1-1.3 | design.dev |
| Display text (48px+) | 1.0 | 1.0-1.1 | design.dev |
| Sans-serif (any) | +0.05 over serif equivalent | — | Bringhurst |

**Guardrail: Body text line-height minimum = 1.5.** WCAG 2.1 SC 1.4.12 requires layouts not to break when users set line-height to 1.5x. Design for 1.5-1.6 as default.

### 3.5 Font Size Standards

| Element | Desktop Size | Mobile Size | Source |
|---|---|---|---|
| Body text | 16-18px (1rem-1.125rem) | 16-18px | Learn UI, design.dev |
| H1 | 32-48px (2-3rem) | 28-40px | Learn UI, design.dev |
| H2 | 24-32px (1.5-2rem) | 20-28px | design.dev |
| H3 | 20-24px (1.25-1.5rem) | 18-22px | design.dev |
| Label/Caption | 12-14px (0.75-0.875rem) | 12-14px | Pimp my Type, design.dev |
| Overline/Meta | 10-12px (0.625-0.75rem) | 10-12px | design.dev |

**Guardrail: Body text minimum = 16px. Functional text (labels, captions) minimum = 12px.**

### 3.6 WCAG Text Spacing Floors (Non-Negotiable)

WCAG 2.1 Success Criterion 1.4.12 (Level AA) requires content to remain functional at these user-set minimums:

| Property | WCAG Minimum | Recommended Default |
|---|---|---|
| Line height | 1.5x font size | 1.5-1.6x |
| Paragraph spacing | 2x font size | 1-1.5em margin-bottom |
| Letter spacing | 0.12x font size | Normal (0) unless adjusted |
| Word spacing | 0.16x font size | Normal unless adjusted |

These are not "nice to haves" — they are accessibility law for Level AA compliance.

### 3.7 Letter Spacing & Word Spacing

| Context | Value | Source |
|---|---|---|
| Lowercase body text | **None** (normal) | Bringhurst: avoid letter-spacing lowercase |
| Uppercase/All-caps | **0.05-0.1em** tracking | Bringhurst |
| Large display text | **-0.03 to -0.05em** (tighter) | design.dev |
| Small headings | **-0.02em** possible | design.dev |
| Word spacing (normal) | **M/4** (quarter em, ~4px at 16px) | Bringhurst |

---

## 4. Grid and Layout Principles (with Numbers)

### 4.1 Grid Structure

| Property | Standard Value | Source |
|---|---|---|
| Column count | **12** (divides into 2, 3, 4, 6) | Universal standard |
| Gutter width (desktop) | **24-32px** | Design systems, ~2% of 1440 |
| Gutter width (mobile) | **16-20px** | Material Design, Atlassian |
| Margin outer (desktop) | **80-160px** per side at 1440 | Industry standard |
| Margin outer (mobile) | **16-20px** per side | Material Design |

### 4.2 Golden Ratio Applications

The golden ratio (phi = 1.618) provides these proportions:

| Application | Ratio | Practical Value at 1440px |
|---|---|---|
| Content : Sidebar | 62% : 38% | 893px : 547px |
| Font size scaling | x 1.618 per level | 16 -> 26 -> 42 -> 68 |
| Section height ratios | 1 : 1.618 | If section A = 400px, B = 647px |
| Margin-to-content | 38% : 62% | Margins = 547px total, Content = 893px |

**For our layouts:** The golden ratio's 62:38 split is the floor for content proportion. Content should occupy AT LEAST 62% of the container width. When metaphors create multi-column structures, no single content column should be narrower than 38% of the container.

### 4.3 Column Width Minimums

| Column Type | Minimum Width | Comfortable Width | Source |
|---|---|---|---|
| Single text column | 280px (at any viewport) | 450-700px | Bringhurst 45-char minimum |
| Multi-column text | 220px per column | 300-400px per column | Print: 3.5" min per column |
| Sidebar/annotation | 160px | 200-280px | Golden ratio 38% of 62% |
| Card content area | 200px | 260-360px | Design system patterns |

**Guardrail: No text column below 220px.** Below this, line lengths become too short for comfortable reading (under 35 characters at 16px).

### 4.4 Column Gap Standards

| Context | Minimum | Optimal | Maximum | Source |
|---|---|---|---|---|
| Text columns | 20px | 24-32px | 48px | Design systems |
| Card grids | 16px | 20-24px | 32px | Material, Atlassian |
| Before disconnection | — | — | 48px | Beyond this, columns feel unrelated |

**Guardrail: Column gap minimum = 20px. Maximum before disconnection = 48px.**

### 4.5 Vertical Section Spacing

| Context | Minimum | Optimal (Magazine) | Maximum (Luxury) | Source |
|---|---|---|---|---|
| Between major sections | 48px | 60-80px | 120px | Multiple design systems |
| Within sections (paragraph gap) | 16px | 20-24px | 32px | Bringhurst: 1em-1.5em |
| Between related elements | 8px | 12-16px | 24px | Design system tokens |
| Between page regions | 64px | 80-120px | 160px | designsystems.com |

---

## 5. Compression and Density Limits (with Numbers)

### 5.1 The Compression Ratio

"Compression ratio" = the ratio between the deepest (most nested/tightest) padding in a layout and the shallowest (outermost/most generous) padding.

| Compression Ratio | Quality Assessment | Example |
|---|---|---|
| 1:1 | Monotonous — no hierarchy | All padding = 24px |
| 1:2 | Minimal hierarchy | Inner = 16px, Outer = 32px |
| 1:3 | Good hierarchy | Inner = 16px, Outer = 48px |
| **1:4 to 1:6** | **Professional editorial range** | Inner = 12px, Outer = 48-72px |
| 1:8+ | Over-compressed — inner elements feel cramped | Inner = 8px, Outer = 64px |

**Guardrail: Maximum compression ratio = 1:6.** If your outermost padding is 72px, your innermost padding should be no less than 12px. At 1:8 or worse, the deepest content feels suffocated.

**Alternative expression (percentage):** Deepest padding / shallowest padding >= 16.7% (1/6). Or equivalently: minimum padding = shallowest padding / 6.

### 5.2 The "Outer >= Inner" Rule (Gestalt Boundary Maintenance)

From UX research on information density (NN/g, LogRocket):

> An element's outer spacing (margin) should be EQUAL TO OR GREATER THAN its inner spacing (padding).

This is a fundamental Gestalt principle: items within a container must feel "inside" it, which requires the space between containers to be larger than the space within them. When violated, boundaries dissolve and the layout feels like an undifferentiated mass.

**Guardrail: margin-between-containers >= padding-within-containers.** Always. No exceptions.

### 5.3 Minimum Vertical Spacing by Hierarchy Level

These are the FLOORS — the absolute minimums below which spacing feels cramped regardless of metaphor intent:

| Hierarchy Level | Absolute Minimum | Magazine Standard | Source |
|---|---|---|---|
| Between inline elements | 4px | 8px | 4px grid baseline |
| Within a component | 8px | 12-16px | Design system consensus |
| Between components | 16px | 24-32px | Atlassian, Red Hat |
| Between subsections | 24px | 32-48px | Multiple design systems |
| **Between major sections** | **32px** | **48-80px** | Design systems, editorial |
| Between page regions | 48px | 64-96px | designsystems.com default = 64px |

### 5.4 Padding Minimums for Containers

| Container Type | Minimum Padding | Magazine Standard |
|---|---|---|
| Card/callout box | 12px | 16-24px |
| Section wrapper | 24px vertical, 16px horizontal | 32-48px vertical, 24-32px horizontal |
| Page-level container | 32px vertical | 48-64px vertical |
| Inline code/tag | 4px vertical, 8px horizontal | 4-6px vertical, 8-12px horizontal |

### 5.5 Line-Height Compression Limits

| Context | Never Below | Body Floor | WCAG Minimum |
|---|---|---|---|
| Headings only | 1.1 | — | — |
| Large body (20px+) | 1.3 | 1.4 | 1.5 |
| Standard body | 1.4 | **1.5** | **1.5** |
| Small text | 1.5 | 1.6 | 1.5 |

### 5.6 Density Patterns (Magazine Archetypes)

**Monocle Pattern (High Density, Still Magazine-Quality):**
- Rigid multi-column grid
- Minimal macro whitespace
- Relies on micro whitespace perfection
- Line-height: 1.4-1.5 minimum
- Tight column gaps: 16-24px
- **Only works with:** perfect typography, clear hierarchy, expert content editing

**NYT Magazine Pattern (Moderate Density):**
- 5-column flexible grid
- Proximity-based grouping
- Related items: 12-16px apart
- Hierarchical items: 32-48px apart
- Sections: 60-80px apart

**Bloomberg Businessweek Pattern (Expressive Density):**
- Bold typographic contrast creates visual breathing room
- A 48px heading next to 14px body text creates perceived space even in tight vertical spacing
- Ruled lines (1px) INSTEAD of extra whitespace for separation
- Consistent 8px internal rhythm; section gaps jump to higher scale steps

---

## 6. Negative Space Quality Principles

### 6.1 Purposeful vs. Wasteful Whitespace

The distinction is NOT about quantity — it's about intentionality and function:

**Purposeful whitespace (confident, editorial):**
- Creates clear separation between distinct content groups
- Establishes rhythm — spacing follows a consistent scale (8px multiples)
- Directs the eye — larger gaps signal "new section" or "breathe here"
- Frames content — margins give content a stage, like matting on a framed print
- Is ASYMMETRIC where hierarchy demands it — more space above a heading than below

**Wasteful whitespace (amateur, unfinished):**
- Is UNIFORM AND EXCESSIVE — same large gap everywhere, no hierarchy
- Creates "dead zones" — large empty areas with no adjacent content to contextualize
- Doesn't follow the spacing scale — arbitrary values that feel random
- Has no relationship to the content structure — spacing doesn't change when content hierarchy changes
- Appears at the END of a layout — trailing whitespace after the last content block

### 6.2 The "Dead Zone" Test

A dead zone is an area of whitespace larger than 120px in any dimension that has no structural purpose (not a margin, not a section gap, not framing a key element).

**Guardrail: No dead zone larger than 120px that isn't:**
1. A deliberate section separator between major content regions
2. A deliberate frame around a hero/feature element
3. A page-level top/bottom margin

Trailing empty space at the bottom of a layout is ALWAYS a dead zone unless it contains a deliberate footer or closing element.

### 6.3 Content-to-Space Ratio

| Assessment | Content % | Space % | Character |
|---|---|---|---|
| **Cramped (avoid)** | >70% | <30% | Unprofessional |
| **Balanced editorial** | 55-65% | 35-45% | Magazine quality |
| **Luxury editorial** | 40-50% | 50-60% | High-end feel |
| **Wasteful (avoid)** | <40% | >60% | Unfinished |

### 6.4 The Confidence Spectrum

| Signal | Reads As | Whitespace Character |
|---|---|---|
| Tight spacing everywhere | Cramped, busy, amateur | No confidence |
| Moderate spacing everywhere | Safe, corporate, generic | Neutral |
| **Varied spacing with generous section gaps** | **Editorial, designed, confident** | **High confidence** |
| Extreme spacing everywhere | Empty, unfinished, wasteful | False confidence |

The magazine standard is VARIED spacing — tight where elements are related (heading-to-subhead), generous where they're not (section-to-section). The RATIO between tight and generous spacing is what creates the feeling of deliberate design.

### 6.5 The Monocle/Bloomberg/NYT Mag Standard

What makes these publications feel "designed" rather than "filled":

1. **Generous outer margins** (15-20% of page width on each side for print; 10-15% for web)
2. **Asymmetric section spacing** — space above a heading is 1.5-2x space below it
3. **"Air" around images** — images never touch text; minimum 24px gap
4. **Type contrast creates its own space** — a 48px heading next to 14px body text creates visual breathing room even in tight vertical spacing
5. **Ruled lines INSTEAD of extra space** — a 1px line can replace 20-40px of whitespace while maintaining separation
6. **Consistent internal rhythm** — within a section, spacing follows a strict 8px grid; between sections, spacing jumps to a higher scale step

---

## 7. Summary: Proposed Guardrail Values Table

These are the concrete numbers to encode as NON-NEGOTIABLE guardrails. No metaphor may violate these minimums.

### Content Proportion Guardrails (at 1440px)

| Guardrail | Value | Notes |
|---|---|---|
| **Min content-to-viewport ratio** | **55%** (792px) | Below = narrow strip lost in margins |
| **Max content-to-viewport ratio** | **88%** (1267px) | Above = edge-to-edge, no breathing room |
| **Optimal content-to-viewport** | **67-83%** (960-1200px) | Professional editorial sweet spot |
| **Min horizontal padding (outer)** | **80px per side** | Scales to 16px at mobile |
| **Min text column width** | **220px** | Regardless of metaphor structure |
| **Optimal line length** | **45-75 chars** | Bringhurst canonical; 66 optimal |
| **Max line length** | **80 chars** | WCAG |
| **Editorial reading width** | **640-760px** (44-53%) | For text-heavy content zones |

### Typographic Spacing Guardrails

| Guardrail | Value | Notes |
|---|---|---|
| **Min label-to-heading gap** | **12px** | Different family + different size |
| **Recommended label-to-heading** | **16-24px** | Triple-shift (family + size + case) |
| **Min heading-to-body gap** | **0.5em of heading font-size** | H1@32px = 16px minimum below |
| **Recommended heading-to-body** | **16-24px** | For H1/H2 levels |
| **Heading above : below ratio** | **1.5-2x** | More space above than below |
| **Min body line-height** | **1.5** | WCAG 2.1 SC 1.4.12 floor |
| **Recommended body line-height** | **1.5-1.6** | Editorial standard |
| **Min heading line-height** | **1.1** | For display text 48px+ |
| **Min paragraph spacing** | **1em** (16px at 16px base) | Bringhurst + WCAG |
| **Min body font size** | **16px** | Never smaller for body |
| **Min label/caption font size** | **12px** | Absolute floor for any text |

### Section and Container Spacing Guardrails

| Guardrail | Value | Notes |
|---|---|---|
| **Min section breathing zone** | **32px** | Absolute floor; magazine = 48-80px |
| **Recommended section spacing** | **48-80px** | Professional editorial range |
| **Min inter-region spacing** | **48px** | Between top-level page regions |
| **Recommended inter-region** | **64-96px** | designsystems.com default = 64px |
| **Min card/callout padding** | **12px** | Absolute floor |
| **Recommended card padding** | **16-24px** | Magazine standard |
| **Min column gap** | **20px** | Between grid columns |
| **Max column gap** | **48px** | Before disconnection |

### Compression and Density Guardrails

| Guardrail | Value | Notes |
|---|---|---|
| **Max compression ratio** | **1:6** | Deepest padding / shallowest padding |
| **Outer >= Inner rule** | **margin >= padding** | Gestalt boundary maintenance |
| **Max dead zone** | **120px** | Unless structurally purposeful |
| **Min inner padding (deepest nesting)** | **8px** | Absolute floor at any nesting depth |
| **Content-to-space ratio** | **40-70%** content | Below 40% = wasteful; above 70% = cramped |
| **Spacing scale adherence** | **8px grid** | All spacing values should be 8px multiples (4px half-step for micro) |

### The Magazine Test (Composite Checklist)

A layout passes the "could this appear in a magazine?" test when ALL of these are true:

1. Content occupies 55-88% of viewport width at 1440px
2. Outer horizontal margins are at least 80px per side
3. No text column is narrower than 220px
4. Body text line length is 45-75 characters
5. Body text line-height is at least 1.5
6. Label-to-heading gaps are at least 12px (16px+ when family/size/case all differ)
7. Section gaps are at least 32px (48px+ for magazine quality)
8. Compression ratio is no worse than 1:6
9. Outer spacing >= inner spacing for all containers
10. No dead zones larger than 120px without structural purpose
11. Spacing varies by hierarchy level (tight intra-component, generous inter-section)
12. Space above headings > space below headings (asymmetric heading breathing)

---

## 8. Application Strategy for KortAI Skills

### Binary Rules (for Agent Compliance — 100% Enforcement)

Per the project's established principle that binary rules achieve 100% compliance:

| Rule | Test | Pass/Fail |
|---|---|---|
| Body line-height >= 1.5 | Computed style check | YES/NO |
| Content width at 1440px >= 792px | DOM measurement | YES/NO |
| Content width at 1440px <= 1267px | DOM measurement | YES/NO |
| Outer horizontal padding >= 80px | DOM measurement | YES/NO |
| No text column < 220px | DOM measurement | YES/NO |
| Section gap >= 32px | DOM measurement | YES/NO |
| Compression ratio <= 1:6 | Computed: min-padding / max-padding | YES/NO |
| Dead zone <= 120px | Visual/DOM measurement | YES/NO |
| Outer >= Inner spacing | Computed: margin vs padding per container | YES/NO |
| Body font-size >= 16px | Computed style check | YES/NO |
| Label/caption font-size >= 12px | Computed style check | YES/NO |

### Judgment Rules (Flag for Review, Don't Auto-Fail)

| Rule | Guidance |
|---|---|
| Line length 45-75 chars | Soft target, depends on typeface |
| Label-to-heading gap "sufficient" | Depends on specific type pairing |
| Spacing "varied by hierarchy" | Requires contextual assessment |
| "Magazine quality" feel | Composite subjective judgment |
| Content-to-space ratio 40-70% | Depends on content type |

### Interaction with Metaphor

These guardrails are FLOORS and CEILINGS — they define the safe zone within which metaphors may operate.

**What the metaphor determines:** WHERE in the guardrail range to operate:
- Tight metaphors (geological, industrial, mechanical): aim for minimums
- Spacious metaphors (gallery, garden, atmosphere): aim for maximums
- Neutral metaphors: aim for the "recommended" middle values

**What the metaphor may NOT do:**
- Push any spacing below the absolute minimum
- Push content width outside the 55-88% range
- Create dead zones without structural purpose
- Violate the outer >= inner rule
- Drop line-height below 1.5
- Create text columns narrower than 220px

### Priority Order When Metaphor Conflicts with Guardrails

1. **Readability floors** (line-height 1.5, CPL max 80, font-size 16px) — NEVER compromise
2. **Breathing zones** (section spacing min 32px) — NEVER compromise
3. **Content width** (min 55% of viewport) — NEVER compromise
4. **Metaphor fidelity** — Adjust to meet floors
5. **Aesthetic preference** — Last priority

If a metaphor (e.g., "narrow alley", "compressed timeline") forces violations of priorities 1-3, **the metaphor must be modified or rejected**.

---

## 9. Research Synthesis Notes

### Key Insights

1. **The 66-character rule is universal** — Bringhurst's 1992 standard still holds in 2026 web design. This translates to ~700-760px content width.

2. **WCAG accessibility = magazine quality** — The 1.5 line-height minimum is both a legal requirement and a design best practice. Meeting accessibility IS meeting quality.

3. **Whitespace is not empty** — It's a design tool. Macro whitespace (margins, section gaps) creates hierarchy; micro whitespace (line-height, letter-spacing) creates legibility.

4. **Compression kills quality faster than expansion** — Cramped layouts feel unprofessional immediately. Overly spacious layouts just feel "luxe" or wasteful, but not broken.

5. **The 1.5x heading spacing rule** — More space above than below creates visual hierarchy without math. Simple, effective, editorial-standard.

6. **Grid proportions are consistent** — 2:1 ratio (66%:33%) appears in print magazines, NYT web layout, CSS Grid tutorials. This is the editorial default.

7. **Monocle proves density is not cramped** — High-density layouts work IF micro-typography is perfect (line-height 1.5+, proper word spacing, tight grid discipline).

8. **The outer >= inner rule is Gestalt law** — Not a preference but a perceptual principle. Violating it dissolves container boundaries.

9. **The 8px grid is the spacing lingua franca** — Atlassian, Red Hat, Material Design, designsystems.com all converge on 8px as the base unit with 4px half-steps.

10. **Dead zones are the #1 indicator of amateur layout** — Purposeful whitespace follows the spacing scale and frames content. Dead zones are leftover empty areas that serve no function.

### Contradiction Resolution

**High-density (Monocle) vs. breathing room (NYT)?**
- Both are magazine-quality
- Monocle: Tight macro, perfect micro (1.5 line-height, precise word spacing)
- NYT: Generous macro, standard micro
- **Guardrails work for both:** Neither violates the minimums

**Fixed px vs. relative units (rem/em)?**
- Research presents both
- **For guardrails:** Use px as concrete gates, implement in rem/em
- Example: "Minimum 32px section gap" = `min: 2rem` (at 16px base)

**Label-to-heading gap: is 8px enough?**
- For same-family pairings, 8px works
- For cross-family pairings (mono label above serif heading), 8px is TOO TIGHT
- **Resolution: 12px minimum for cross-family; 16px+ recommended for triple-shift**

### Validation Against KortAI Soul

**Soul Rule: "Does this look like it could appear in a magazine?"**

The research confirms magazine-quality layouts require:
- Intentional spacing rhythm (not random gaps)
- Respect for reading width (45-75 CPL)
- Generous line-height (1.5+ body, 1.1+ headings)
- Clear hierarchy through whitespace (more above headings than below)
- Breathing zones between sections (32px minimum, 48px+ for quality)
- No dead zones (trailing empty space, arbitrary large gaps)
- Containers with outer spacing >= inner spacing

**These are not aesthetic preferences — they are perceptual requirements validated across 40+ sources, accessibility standards, and editorial design practice spanning 30+ years.**
