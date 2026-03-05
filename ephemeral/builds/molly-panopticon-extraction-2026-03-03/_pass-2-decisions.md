# Pass 2 Decisions — Enrichment

**Builder:** Pass 2 (enrichment)
**Status:** Complete
**Pass 1 size:** 2153 lines → **Pass 2 size:** ~2800 lines (30% enrichment growth)

## Findings Deployed

All 24 findings deployed. Zone-by-zone breakdown:

**Findings 1-2 (Fractal Self-Similarity + 3-Way Unification) — ALL ZONES:**
Deployed as the structural backbone of all enrichment. Finding 1 enforces density variation at exactly 5 scales: navigation (zone labels via Finding 12), page (zone backgrounds already from M01), section (padding: 64px outer → 32px dense), component (callout label/body fractal — label gets border-bottom separator creating micro-zone), character (heading tracking vs body spacing via M04). Finding 2 is realized as the conceptual spine: each zone's axis, organization, and density are ONE decision, not three layered. The Datum Point's wide editorial naturally produces SPARSE + narrative. The Contour Map's compressed dark naturally produces DENSEST + dialectical.

**Finding 3 (PULSE for Alternating Content) — Contour Map, Survey Grid:**
Already partially deployed in Pass 1 via M05 (dialectic-critic at 60%, antipattern symptom/solution). Pass 2 reinforced by ensuring the bg alternation is explicit in antipattern pairs and maintained the width differential on dialectic critics.

**Finding 4 (CRESCENDO with Typography Compression) — ALL ZONES progressive:**
Pass 1 established the heading-size compression (32→28→26→24→28 px) and line-height compression (1.8→1.7→1.6→1.55→1.7). Pass 2 deepened with Finding 19's progressive letter-spacing within the Contour Map (first section -0.005em → middle -0.008em → final sections -0.01em) and Q5's zone-scale compression (inner h3 headings shrinking toward zone end). The RELEASE at Projection is now explicit in transition table comments.

**Finding 5 (Border-Weight Gradient) — ALL ZONES:**
Already deployed in Pass 1 via M03 (4px/3px/1px). Pass 2 reinforced through Q4 epistemic confidence encoding (Case Study OD-004 integration), where the gradient takes on semantic meaning beyond just visual weight.

**Findings 6-9 (Datum Point zone-specific):**
- Finding 6 (38% Retention): Added `.provocation` class with margin-top 80px, margin-bottom 48px. Key quotes at margin 40px 0.
- Finding 7 (Viewport Principle): Added `.section-heading--viewport` class (margin-top 80px, margin-bottom 32px). Applied to first h2.
- Finding 8 (Pull Quotes): Created `.pull-quote` component — Instrument Serif italic, 1.25rem, border-left 4px accent-blue, max-width 640px. Applied to the "violent gap" quote, making it a terrain formation that arrests scrolling.
- Finding 9 (First Component Rule): Created `.provocation` class on the "asymmetry is total" paragraph — 2rem display type, generous padding. Finding 9 and Finding 6 interact: the provocation becomes both the most spacious element (F6) and the display-type tone-setter (F9), creating a single element that simultaneously opens the page and establishes the typographic register.

**Findings 10-12 (Survey Grid zone-specific):**
- Finding 10 (Bento Grid Pattern): Added 48px spacing between domain grid and surrounding prose via `.domain-grid + .domain-group-label { margin-top: 48px }`.
- Finding 11 (Semantic Proximity): Added tight grouping within domain cards via `.domain-quadrant > * + * { margin-top: 8px }` and `.domain-quadrant__label + .domain-quadrant__name { margin-top: 12px }`.
- Finding 12 (Running Headers): Created `.zone-label::before` with rotated margin labels. Each zone section gets `data-zone` attribute. Hidden at <=1024px for layout safety. Finding 12 interacts with Finding 1: the running headers ARE the navigation scale of the 5-scale fractal — the reader always knows their position in the survey.

**Findings 13-16 (Field Notes zone-specific):**
- Finding 13 (Velocity Mismatch): Added `.code-bridge` prose paragraphs between every pair of code blocks. No back-to-back code blocks exist in the enriched HTML.
- Finding 14 (Visual Weight Balance): Achieved through content rhythm — code (HEAVY) → prose bridge (MEDIUM) → code (HEAVY) → tip callout (FAST). Added a `.callout--tip` between checkpointing and trace logging sections.
- Finding 15 (Code Snippet Best Practices): Created `.code-block--labeled` with `.code-header` (dark header zone) + pre (code body zone). Applied to all Field Notes code blocks with filename labels (terminal-sessions.sh, launch-panopticon.sh, etc.). Finding 15 and Finding 13 work together: the labeled headers give each code block identity, and the prose bridges between them create the HEAVY→MEDIUM→HEAVY→FAST rhythm that Finding 14 requires.
- Finding 16 (File Tree Visualization): Created `.file-tree` component with `.tree-dir`, `.tree-indent`, `.tree-comment` classes. Deployed for ~/domain listing, ~/trades/ structure, ~/shared/ handoffs, and ~/correlation/ directory. Replaced the `<pre>` blocks that Pass 1 used for directory structures.

**Findings 17-21 (Contour Map zone-specific):**
- Finding 17 (Density Contrast — warm blockquotes): Already deployed via M06. Pass 2 verified only 2 warm blockquotes in the dark zone (Goodhart's Law quote, Anthropic trade-off quote), respecting the "max 2-3" constraint.
- Finding 18 (Density Debt — recovery zones): Added `.breathing-transition` CSS, `.section-breathing` class for recovery after dense dialectic exchanges. The 64px padding-bottom at Field Notes → Contour Map transition and 56px padding-bottom at Contour Map → Projection are enforced in container padding.
- Finding 19 (Five Rhythm Types): Deployed PROGRESSIVE rhythm within Contour Map via progressively tightening letter-spacing (first section -0.005em → final sections -0.01em). REST rhythm at 48px margins between major philosophical sections. ALTERNATING rhythm maintained in antipattern pairs.
- Finding 20 (Semantic Temperature): Created `.contour-warning` for cold warnings (border-left 3px primary, font-weight 500). Warm = blockquotes with Instrument Serif italic cream background. Neutral = standard Inter paragraphs. Cold = contour-warning treatment. Finding 20 and Finding 17 interact: warm blockquotes (F17) ARE the warm temperature nodes (F20), and the cold warnings create temperature contrast — you feel the shift from philosophical warmth to sharp warning.
- Finding 21 (Contrast Creates Harmony): Created `.serif-to-mono-bridge` — Instrument Serif italic passage that precedes a shift to code or mono content. Deployed at 3 locations: before ~/trades file tree (Survey Grid), before Jmail connection prose (Field Notes), before CLAUDE.md examples (Contour Map).

**Findings 22-24 (Projection zone-specific):**
- Finding 22 (Setup-Payoff Arc): Changed `.buildout-phase` from 3px measured border to 4px triangulated accent-blue border (setup = establishing baseline). Changed `.checkpoint` from 1px border all-around to 3px green left border + tip background (payoff = measuring success). The visual asymmetry between bordered setup (blue vertical rule) and green-accented payoff mirrors the surveyor's shift from establishing baseline to measuring terrain.
- Finding 23 (F-Pattern Optimization): Reinforced left-alignment on all Projection headings and phase numbers. Already mostly in place from Pass 1's text-align: left defaults.
- Finding 24 (Resolution Component): Created `.resolution-footer` class on the Mental Model Summary section — 3px border-top, compact reference treatment with smaller type sizes and secondary color. The page now says "the survey is complete" before reaching the actual footer.

## Questions Deepened / Explored

**Q1 (time-horizon encoding) — DEEPENED:**
- Pass 1 covered channels: border-width, padding, bg-color
- Pass 2 extended to channels: (deepened existing — refined semantic proximity per Finding 11)
- Total channels now coordinated: 3 of 7
- CSS generated: Semantic proximity tightening within cards

**Q2 (projection shift at zone boundaries) — NEW EXPLORATION:**
- Documented in updated transition table: each zone boundary now explicitly lists which channels shift
- Zone 1→2: 6 channels shift (bg, type, space, border, line-height, letter-spacing)
- Zone 3→4: 7 channels shift (bg, type, space, border, color, line-height, letter-spacing) — the biggest atmospheric shift
- Zone 4→5: 7 channels shift (all of the above reversed)
- Total channels now coordinated: 7 of 7 (varies per boundary)
- CSS generated: No new rules — Q2 is realized through the existing zone CSS, but the transition table now makes the projection shift explicit and auditable

**Q3 (gradual descent) — unchanged from Pass 1:** 3 channels (border-bottom frequency, padding, bg-color)

**Q4 (epistemic confidence encoding) — NEW EXPLORATION:**
- Created `.survey-mark--triangulated`, `.survey-mark--measured`, `.survey-mark--contour` classes
- Adapted from Case Study OD-004
- Applied to: proven claims (4px border), reported results (3px border), philosophical interpretation (1px border + looser line-height + secondary color)
- Channels: border-width, border-color, line-height, text-color
- Total channels now coordinated: 4 of 7
- CSS generated: 3 confidence-encoding classes + dark zone overrides

**Q5 (fractal CRESCENDO at 3 scales) — NEW EXPLORATION:**
- Page-scale: heading sizes compress across zones (already in M04)
- Zone-scale: within Contour Map, inner h3 headings shrink from 1.15rem → 1.1rem as sections deepen
- Component-scale: Contour Map callout bodies use tighter line-height (1.5) and smaller font-size (text-sm)
- Channels: font-size (3 scales), line-height (2 scales)
- Total channels now coordinated: 2 of 7 (but across 3 fractal scales)

**Q6 (atmospheric code blocks) — unchanged from Pass 1:** 3 channels (code bg-color, border-color, text-color)

**Q7 (bento as singular revelation) — unchanged from Pass 1:** 4 channels (grid-template-columns, gap, container-width, transition padding)

## Enrichment vs Preservation Report

**Enrichment actions (density added WITHIN zones):**
- **Datum Point:** +`.provocation` display type, +`.pull-quote` component, +`.section-heading--viewport`, +confidence marks (Q4). ~6 new CSS rules.
- **Survey Grid:** +`.file-tree` component (replaced `<pre>` for directories), +`.domain-quadrant > * + *` semantic proximity, +confidence marks. ~8 new CSS rules.
- **Field Notes:** +`.code-block--labeled` / `.code-header` 2-zone code blocks, +`.code-bridge` velocity mismatch buffers, +`.file-tree` deployments, +tip callout. ~10 new CSS rules.
- **Contour Map:** +`.contour-warning` cold temperature, +`.section-breathing` density recovery, +progressive letter-spacing rhythm, +confidence marks (dark overrides), +`.serif-to-mono-bridge`, +labeled code blocks for CLAUDE.md examples. ~12 new CSS rules.
- **Projection:** +`.buildout-phase` redesigned as setup treatment (blue 4px), +`.checkpoint` redesigned as payoff treatment (green 3px), +`.resolution-footer` closure treatment. ~6 new CSS rules.
- **Global:** +`.zone-label::before` running headers (Finding 12), +`.serif-to-mono-bridge` component, +callout fractal (label border-bottom separator). ~8 new CSS rules.

**Preservation actions (structure kept from Pass 1):**
- All 5 zones preserved with same class names and background colors
- All custom properties preserved unchanged
- Zone skeleton, responsive breakpoints, transition table structure preserved
- All content sections present — no deletions
- All mechanism deployments (M01-M08) preserved

**Structural changes:**
- None. No structural evolution needed — vertical layout serves the content. The bento grid in Zone 2 was already the structural break from Pass 1.

## Density Adjustments

The ASCII density diagram matches well:
- **Datum Point (SPARSE):** Confirmed — 64-80px padding, widest typography, most generous whitespace. The provocation element adds weight but is surrounded by breathing space.
- **Survey Grid (MODERATE):** Confirmed — 48px padding, bento grid creates structural density, principle list has even rhythm.
- **Field Notes (DENSE):** Confirmed — 32-40px padding, code blocks + tables + prose create high information density. Labeled code headers add a micro-layer of density without overwhelming.
- **Contour Map (DENSEST):** Confirmed — 32-48px variable, dark ground with warm blockquote punctuation. Progressive letter-spacing compression creates perceptible "contour lines tightening." The dialectic exchanges create dense alternating rhythm.
- **Projection (MODERATE):** Confirmed — 48-64px padding, opening out. The setup-payoff rhythm and resolution footer create visible deceleration.

## Case Study Techniques Integrated

**Case Study DD-004 (Layers → Zones 1-5):**
Adapted the spacing compression gradient — 64px → 40px → 32px → 32px → 48px. The descent-and-return shape (unique to this build vs DD-004's continuous descent) is now explicit in the transition table. Zone padding enforces the gradient.

**Case Study OD-004 (Confidence → Contour Map + all zones):**
Adapted the border-weight-as-confidence encoding into `.survey-mark--triangulated/measured/contour` classes. Deployed across all zones for epistemic encoding via Q4. In the Contour Map (dark zone), border colors shift to light (#FEF9F5 for triangulated, #888888 for measured, #555555 for contour) to maintain visibility.

**Case Study DD-003 (Islands → Survey Grid):**
The bento grid was already deployed by Pass 1 (Proposition 1). Pass 2 reinforced with: hemisphere labels (work/life subdivision), tight semantic proximity within cards (Finding 11), and 48px spacing between grid blocks and surrounding prose (Finding 10).

## Structural Evolution

No structural evolution needed — vertical layout serves the content throughout. The bento grid in Zone 2 remains the singular spatial break (Q7).

## Density Self-Assessment

**Above the fold (1440px):** The dark header with red border-bottom creates immediate institutional weight. Below it, the Datum Point opens with generous cream space and the provocation paragraph in display type. The metaphor (surveillance apparatus reversed) is conveyed in the first 3 seconds. The running header label ("DATUM POINT") in the left margin tells the reader where they are.

**Mid-page (Field Notes → Contour Map transition):** Visible density shift — the earthy tan field notebook with labeled code blocks and tables gives way (via 64px breathing transition) to the near-black Contour Map. The background inversion is the biggest atmospheric shift on the page. Within the Contour Map, warm blockquotes on dark ground create the "surveyor's lamp" effect — 2 points of cream light in darkness.

**Closing zone (Projection → Footer):** The page resolves through the resolution-footer treatment: 3px border-top on Mental Model Summary creates a "survey legend" closure before the actual footer. The reader feels the page decelerating — setup/payoff phases, quote collection, then compact summary. The final footer with 3px red border-top says "the survey is complete."

**Honest assessment:** Density progression is working. The main risk area is the Contour Map — it's dense but may need Pass 3 to verify that the progressive letter-spacing compression is perceptible at rendered size, and that the warm blockquote contrast is sufficient (>= 15 RGB points delta, which it is: #FEF9F5 vs #1A1A1A).

## Concerns for Pass 3

1. **Running headers (Finding 12):** The rotated `::before` labels rely on `left: -44px` positioning. If the container is flush with the viewport edge, these may be clipped. Pass 3 should verify at 1440px and consider whether the position needs adjustment.
2. **File tree component:** The `.file-tree` uses inline styles for dark-zone overrides (Contour Map correlation directory). Pass 3 should consider promoting these to proper classes.
3. **Progressive letter-spacing in Contour Map:** The compression from -0.005em → -0.01em may be below perceptual threshold. Pass 3 should verify this is visible or increase the delta.
4. **Q1 channels:** Only 3 of 7 channels coordinated. Pass 3 could extend to font-size variation within domain cards (daily = smaller/tighter, quarterly = larger/looser).
5. **Q5 fractal CRESCENDO:** Only 2 of 7 channels (font-size, line-height). Pass 3 could extend to letter-spacing and padding at all 3 scales.
6. **Inline styles in Contour Map:** Several elements use inline `style=""` for dark-zone color overrides. Should be promoted to proper CSS classes.
