# Auditor 3: Typography & Readability

**Audit scope:** Font families, hierarchy, line-height, zone gradient, table typography, mobile scaling.
**Viewports examined:** 1440px (VP01, VP02, VP03, VP06, VP10, VP11, full-page) + 768px (VP01, VP07, full-page).
**Source confirmed:** `07-intentionality.html`

---

## Findings by Question

### Q1 — Headings in Instrument Serif: warm and authoritative?

**PASS.**

Both the H1 (`What 337 Research Findings Teach About Documentation Design`) and all H2s (e.g., `What the Research Set Out to Find`, `The Choreography of Reading`, `Three Tensions and How to Resolve Them`) render in a clearly serif display face with bracketed terminals and moderate stroke contrast characteristic of Instrument Serif. The headline in the dark hero section reads with genuine authority — the large 36px serif on near-black sits with weight. The cream-background H2s at 28px carry editorial warmth without feeling heavy. The italic variant used in the pull-quote (VP02: "The best documentation showcases treat layout as content, not container.") demonstrates the font's full character: fluid, old-style, warm.

Source confirms: `font-family: 'Instrument Serif', serif` loaded via Google Fonts `@import` at line 48. H1 and H2 both mapped to `--font-display`.

**One caveat:** At 36px the H1 is on the conservative end for a flagship piece at 1440px. It does not feel underpowered given the editorial restrained aesthetic, but it is not commanding. No deduction — intentional design fits the sparse, F-pattern Zone 1 philosophy.

---

### Q2 — Body text in Inter: readable at chosen size?

**PASS with minor note.**

Body text is set in Inter at 16px (`--type-body: 16px`) with `line-height: 1.7` as the base. Paragraphs read cleanly throughout all zones. The Inter rendering on cream (`#FEF9F5`-range backgrounds) produces good contrast — the dark gray text (`color: var(--color-text)`) on warm off-white is easy on the eyes and avoids the harshness of black-on-white.

The 16px floor is acceptable but sits at the minimum comfortable threshold for long-form editorial reading. At 768px (mobile), paragraphs compress to available width and remain readable, though the line measure becomes very long at full-bleed on mobile (768px page width with no visible padding reduction in screenshots — see Defect D1 below).

---

### Q3 — Monospace in JetBrains Mono: visually distinct but harmonious?

**PASS.**

JetBrains Mono is used for three distinct roles:

1. **Section meta labels** (`SECTION 01 · F-PATTERN · SPARSE DENSITY`) — rendered in `--font-mono` at `--type-meta` (12px), uppercase, `letter-spacing: 0.08em`. These labels are clearly distinct from surrounding prose and provide strong scannable signposts.
2. **Table headers** (`HYPOTHESIS`, `WHAT IT TESTS`, `#`, `FINDING`, `WHERE IT APPLIES`) — same mono treatment at 12px, uppercase, `font-weight: 500`. Immediately legible as header vs. body.
3. **Tension/Resolution labels** in VP06 (`TENSION — GRID VS. PRECISION`, `RESOLUTION`) — mono at 12px, colored in the accent red/green. These are visually distinct from the body Inter text and provide semantic clarity.

The mono-serif-sans trio work together without clash. JetBrains Mono's slightly technical character contrasts appropriately with Instrument Serif's warmth, while Inter bridges the two.

**One observation:** At 12px (`--type-meta`), the mono labels are small. On the cream background with moderate contrast, they are legible but not effortless — readers with any visual impairment may find the section meta labels borderline. This is not a defect given the intentional sparse aesthetic, but it is the weakest size in the type scale.

---

### Q4 — Clear heading hierarchy (H1 > H2 > H3)?

**PARTIAL PASS — minor defect.**

The type scale is:
- H1: Instrument Serif, 36px, `line-height: 1.2`
- H2: Instrument Serif, 28px, `line-height: 1.3`
- H3: **Inter** (body sans-serif), 22px, `line-height: 1.4` (inferred from `--type-h3`)

The H1-to-H2 step (36px → 28px, ratio ~1.29x) is visually clear. The H2-to-H3 step (28px → 22px Inter, ratio ~1.27x) is also legible in isolation.

**However:** H3 uses `--font-body` (Inter), not `--font-display` (Instrument Serif). This creates a font-family break in the hierarchy: H1 and H2 are serif, H3 is sans-serif. In VP10, the subsection headings `Density Explorations` and `Axis Explorations` render in what appears to be a **bold italic serif** — visually these look like they belong to the Instrument Serif family, not Inter. The CSS at line 249 specifies `font-family: var(--font-body)` for H3, but the visual evidence in VP10 shows an italic serif style for these sub-headings. Either:
- (a) The CSS is overridden elsewhere for these specific elements, or
- (b) The browser is rendering a synthetic bold-italic on Inter that resembles serif strokes at this size.

Looking more carefully at VP10: the `Density Explorations` and `Axis Explorations` headings clearly show **italic** style with **serif terminals** — this is Instrument Serif italic, not Inter. This suggests H3 elements in the table-area context are picking up `--font-display` from a more specific rule, or they are marked up as H2 rather than H3.

In any case, the hierarchy *reads correctly* visually (three distinct levels are perceptually clear). The font-family inconsistency in the CSS is a minor code concern, not a visual defect.

---

### Q5 — Line-height generous enough for comfortable reading (1.6+)?

**PASS — exemplary.**

The zone gradient system is precisely implemented:

| Zone | Sub-section | Paragraph `line-height` |
|------|-------------|-------------------------|
| Zone 1 | S1 | 1.8 |
| Zone 1 | S3 | 1.75 |
| Zone 2 | S4 | 1.7 |
| Zone 2 | S5, S7, S8 | 1.65 |
| Zone 2 | S6 | 1.7 |
| Zone 3 | S9 | 1.7 |
| Zone 3 | S10, S11 | 1.75 |
| Zone 3 | S12 | 1.8 |

Every value exceeds the 1.6 minimum. Zone 2 at its densest peak (S5/S7/S8) drops to 1.65 — still above threshold. The full gradient (1.8 → 1.65 → 1.75/1.8) is intentional and semantically meaningful: Zone 1 is unhurried, Zone 2 is compressed, Zone 3 releases.

The visual effect is perceptible when scrolling through the full-page screenshots: Zone 1 (VP01-VP03) has noticeably airier paragraph spacing; Zone 2 (VP06) is tighter; Zone 3 (VP10-VP11) breathes again. This is a successful implementation of a sophisticated typographic mechanism.

---

### Q6 — Any text too small, too large, or incorrectly weighted?

**One defect found (minor).**

- **Section meta labels at 12px:** Borderline small. Readable in isolation, but at this size monospace fonts lose some of their inherent crispness. Acceptable for the design intent.
- **One font-size hardcoded at 11px** (line 399 in source): `font-size: 11px` appears for what appears to be a footnote or annotation element. At 11px, this is below comfortable minimum for any extended reading. This is a **minor defect** (D2) if this text contains meaningful content.
- **Body text at 16px:** Correct.
- **H1 at 36px:** Appropriate.
- **H2 at 28px:** Appropriate.
- **Pull-quote at 3.5em (~56px) in the display drop-cap context** (line 276): The `F` drop-cap in VP01 renders at approximately 3.5em relative to surrounding text. This creates a dramatically large initial cap — visually it works as an editorial device, though it is a very large first character relative to the 36px H1 nearby.

The 11px element is the only clear size concern.

---

### Q7 — Typographic gradient across zones (Zone 1 looser → Zone 2 tighter → Zone 3 released)?

**PASS — strongly implemented.**

This is one of the page's strongest typographic achievements.

**Zone 1 (VP01-VP03):** Line-height 1.75-1.8, `letter-spacing: 0.006em`, `word-spacing: 0.02em`. The generous spacing creates an exploratory, open feeling appropriate to introducing the research context. The drop-cap `F` in VP01 amplifies the editorial looseness.

**Zone 2 (VP06):** Line-height 1.65 at peak compression (S5/S7/S8), `letter-spacing: -0.003em`, `word-spacing: -0.01em`. The slightly tightened letter-spacing and word-spacing are subtle but compound to create a perceptibly denser texture. The tension-resolution blockquotes in VP06 with their left-border color coding and uppercase mono labels add typographic intensity.

**Zone 3 (VP10-VP11):** Line-height returns to 1.75-1.8, letter-spacing normalizes to 0. The Zone 3 tables (VP10) use clean mono headers with body Inter in cells — unified and settled. The VP11 invitation section returns to the loose editorial voice of Zone 1, completing the arc.

The gradient is subtle enough that readers won't consciously notice it, yet it produces the intended felt experience: the page breathes, pressures, then releases.

---

### Q8 — Table headers distinct from table body text?

**PASS.**

Table headers use: `font-family: 'JetBrains Mono'`, `font-size: 12px`, `font-weight: 500`, `letter-spacing: 0.08em`, `text-transform: uppercase`.

Table body cells use: `font-family` inherits Inter (body), `font-size: 16px`, `line-height: 1.6`.

The contrast is strong and immediately readable:
- Mono uppercase vs. mixed-case sans-serif
- 12px vs. 16px (33% size difference)
- Tight letter-spacing vs. normal letter-spacing

In VP10, the `HYPOTHESIS` / `WHAT IT TESTS` headers are clearly differentiated from the cell content below. In VP07 at 768px, the `#` / `FINDING` / `WHERE IT APPLIES` three-column table renders with the same clear header-body distinction. The table header row also carries a bottom border (`border-bottom: var(--border-accent) solid var(--color-text)`) that provides a structural separator.

**Progression across table types:** The table treatment varies by zone as designed — `.table-featured` with 4px red left-border (Zone 2 peak), `.table-light` with minimal borders (Zone 3). The header treatment remains consistent across all table variants, which is correct: scanability relies on consistent header formatting even as container styling varies.

---

## Defects

**D1 — Minor: Mobile line measure not controlled.**
At 768px (VP01 768px screenshot), body text paragraphs appear to run near-full width with no mobile max-width reduction visible for body text. The `max-width: 68ch` on `.article-prose` (line 262) should control this, but at 768px a 68ch measure at 16px Inter equals approximately 680px — nearly full viewport width. This produces very long line measures on mobile (potentially 70+ characters per line at the smallest mobile widths). Flagged as a readability concern at 768px. Impact: moderate at 768px, negligible at 1440px where the 68ch constraint operates well within the 960px container.

**D2 — Minor: 11px hardcoded font-size element.**
Line 399 in the source: `font-size: 11px`. This is below the comfortable minimum. If this element contains meaningful content (not purely decorative), it should be 12px minimum. Exact element context unclear from source alone, but flagged as a potential accessibility defect.

**D3 — Cosmetic: H3 font-family ambiguity in CSS vs. visual evidence.**
CSS declares H3 at `--font-body` (Inter), but VP10 sub-headings visually appear as Instrument Serif italic. This suggests either: a more specific CSS rule is overriding the base H3 rule, or the elements are not actually H3 tags. The visual outcome is correct (three-level hierarchy reads clearly), but the CSS specification has an inconsistency that could cause maintenance confusion.

---

## Score: 7/8

| Criterion | Result |
|-----------|--------|
| Q1 — Instrument Serif headings, warm and authoritative | PASS |
| Q2 — Inter body text, readable size | PASS (minor note on mobile measure) |
| Q3 — JetBrains Mono, distinct and harmonious | PASS |
| Q4 — Clear H1 > H2 > H3 hierarchy | PARTIAL PASS (H3 CSS ambiguity, D3) |
| Q5 — Line-height 1.6+ throughout | PASS — exemplary |
| Q6 — No incorrectly sized elements | PARTIAL PASS (11px element, D2) |
| Q7 — Typographic zone gradient | PASS — strongly implemented |
| Q8 — Table header/body distinction | PASS |

**Point deducted:** Q4/Q6 share the half-deduction. H3 font-family inconsistency (D3) and the 11px element (D2) together constitute one defect point.

---

## Verdict

**STRONG TYPOGRAPHY. SHIP WITH MINOR FIXES.**

The typographic system is executed with unusual precision. The three-font trio (Instrument Serif / Inter / JetBrains Mono) works as intended — each occupies a distinct semantic register and the trio is harmonious rather than busy. The zone gradient line-height implementation (1.8 → 1.65 → 1.8) is the most sophisticated typographic mechanism on the page and it is correctly implemented.

The primary concerns are minor: an 11px element that may be too small, a CSS H3 specification that doesn't match visual output, and mobile line measure that runs wide. None of these undermine the overall reading experience.

The typographic system would pass a professional editorial design review. It is measurably better than standard documentation pages and meaningfully better than the middle-tier experiment baseline.
