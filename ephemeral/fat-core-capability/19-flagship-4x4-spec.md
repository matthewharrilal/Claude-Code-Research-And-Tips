# Flagship 4/4 DESIGNED: Concrete Technical Specification

**Date:** 2026-02-19
**Author:** flagship-spec agent (Opus)
**Purpose:** Define measurable criteria for "Flagship 4/4 DESIGNED" so any auditor can VERIFY compliance
**Evidence base:** CD-006 (39/40, ~3.5/4 PA-05), Flagship 1.5/4, Remediation 2.5/4, mechanism catalog (18), scale research, MEMORY findings

---

## 1. Why This Spec Exists

Nobody has seen Flagship at 4/4. CD-006 is the closest reference (~3.5/4) but was built under different conditions (Opus builder, CD-phase conventions, known content). The Flagship experiment reached 1.5/4; remediation reached 2.5/4. The gap between 2.5 and 4.0 is currently described in aspirational language ("designed feeling," "compositional richness"). This spec makes it concrete.

**The central question:** What would a page need to exhibit -- in measurable, binary-verifiable terms -- to earn PA-05 = 4/4 DESIGNED?

---

## 2. The PA-05 Scale (Anchored Definitions)

| Score | Name | One-Line Definition |
|-------|------|---------------------|
| 1/4 | DEFAULT | Browser defaults + basic CSS. No design decisions visible. |
| 2/4 | STYLED | Consistent palette, type pairing, spacing. Template-quality. |
| 3/4 | COMPOSED | Multiple designed moments, visible zone differentiation, typographic voices, structural variety. Perceptual atmosphere present. |
| 4/4 | DESIGNED | Every scroll position reveals intentional composition. Zone transitions are perceptible without measurement. Multi-channel coherence creates an integrated atmosphere. The page feels like it was designed by a human who cared. |

**The critical gap is between COMPOSED (3) and DESIGNED (4).** COMPOSED has designed moments scattered across a competent page. DESIGNED has no undesigned moments -- every viewport of the scroll contains at least one perceptible compositional decision.

---

## 3. Flagship 4/4 Specification: 12 Dimensions

Each dimension has:
- **THRESHOLD:** The minimum value to pass (binary gate)
- **CD-006 VALUE:** What the benchmark actually achieved
- **FLAGSHIP-1.5 VALUE:** What the failed experiment produced
- **REMEDIATION-2.5 VALUE:** What the remediated artifact produced
- **MEASUREMENT METHOD:** How to verify

---

### Dimension 1: ZONE TRANSITIONS

Zone transitions are the boundaries between major content sections. A zone transition is "perceptible" if a reader scrolling at normal speed notices a change without measuring.

**THRESHOLD:** >= 8 perceptible zone transitions across the full page scroll. "Perceptible" means at least 2 of 3 channels change simultaneously: (a) background color shifts by >= 15 RGB points on at least one channel, (b) a structural border (>= 3px) appears, (c) typography measurably changes (font-size by >= 1px OR line-height by >= 0.1 OR letter-spacing by >= 0.5px).

**CD-006 VALUE:** 7 zone transitions, all perceptible. 2 Smooth (F->Z, Bento->Choreo), 3 Bridge (Z->Bento x2, Bento->F), 2 Breathing (Spiral->Z, Choreo->Spiral). Each transition uses a named type from the transition grammar.

**FLAGSHIP-1.5 VALUE:** 11 "transitions" in CSS, 0 perceptible. Background deltas were 1-8 RGB points. Zero structural borders. Zero typography changes. All transitions were empty whitespace voids (210-276px each).

**REMEDIATION-2.5 VALUE:** 11 transitions in CSS, 3-5 estimated perceptible. Background deltas improved to 2-13 RGB range. Border CSS exists but rendering unconfirmed. Typography only changes at S1 boundary.

**MEASUREMENT:**
1. Extract all `<section>` boundaries.
2. For each boundary, compute: background color delta (RGB distance), presence of border >= 3px, typography delta (font-size, line-height, letter-spacing).
3. A transition is "perceptible" if >= 2 of these 3 channels change above threshold.
4. Count total perceptible transitions.

**PASS:** >= 8 perceptible transitions.
**FAIL:** < 8 perceptible transitions.

---

### Dimension 2: MECHANISM COUNT AND CATEGORY COVERAGE

Mechanisms are reusable CSS techniques from the 18-mechanism catalog. Flagship demands both breadth (count) and coverage (categories).

**THRESHOLD:** >= 14 distinct mechanisms deployed, with at least 2 from each of the 5 categories (Spatial, Hierarchy, Component, Depth/Emphasis, Structure/Navigation).

| Category | ID | Mechanisms in Catalog | Minimum Required |
|----------|----|-----------------------|-----------------|
| Spatial (S) | #5, #6, #15 | Dense/sparse alternation, Width variation, Bento grid | 2 |
| Hierarchy (H) | #1, #4, #11 | Border-weight gradient, Spacing compression, Type scale jumping | 2 |
| Component (C) | #2, #9, #10, #17 | 2-zone DNA, Color encoding, Border-left signal, Code block | 2 |
| Depth/Emphasis (D) | #3, #7, #16 | Solid offset, Zone backgrounds, Drop cap | 2 |
| Structure/Nav (N) | #8, #12, #13, #14, #18 | Scroll witness, Progressive disclosure, Dark header, Footer mirror, Data table | 2 |

**CD-006 VALUE:** All 18 mechanisms deployed. Category coverage: S(3), H(3), C(4), D(3), N(5). Total = 18/18.

**FLAGSHIP-1.5 VALUE:** 14 mechanisms claimed in header, but most were imperceptible. Effective deployment ~5-7 (header, code blocks, callouts, footer, basic type scale). Category gaps: Spatial = 1 (alternation only), Depth = 0 (solid offset and zone backgrounds both imperceptible).

**REMEDIATION-2.5 VALUE:** ~14-16 mechanisms in CSS. Effective visible deployment ~10-12. Callout system (4 variants), dark code blocks, header/footer, type scale, zone backgrounds (partially perceptible), section indicators, grid layouts (rendering uncertain).

**MEASUREMENT:**
1. For each of the 18 mechanisms, check: (a) CSS rule exists, (b) rule applies to at least one rendered element, (c) effect is perceptible (not sub-threshold).
2. Count mechanisms where all 3 are true.
3. Check category coverage against minimum.

**PASS:** >= 14 mechanisms with all 3 true, AND >= 2 per category.
**FAIL:** < 14 mechanisms OR any category < 2.

---

### Dimension 3: CSS FEATURES (Quantitative)

Raw CSS measurements that correlate with richness.

**THRESHOLD:**

| Metric | Minimum | Maximum | Rationale |
|--------|---------|---------|-----------|
| Total CSS lines (excluding comments, blank) | 600 | 1500 | Below 600 = insufficient vocabulary; above 1500 = bloat/sub-perceptual waste |
| Distinct CSS selectors | 60 | -- | Below 60 = insufficient component variety |
| Custom properties (:root) | 40 | -- | Below 40 = insufficient token vocabulary |
| @media breakpoints | 2 | -- | At minimum 768px and one other (480px or 960px) |
| Distinct background colors used | 6 | -- | Below 6 = insufficient zone differentiation |
| Distinct font-size values used | 5 | -- | Below 5 = insufficient typographic hierarchy |
| Distinct border-width values used | 3 | -- | The system requires exactly 1px, 3px, 4px |
| Grid/flexbox layouts | 3 | -- | Below 3 = insufficient spatial variety |

**CD-006 VALUE:** ~999 CSS lines, 80+ selectors, 65 custom properties, 3 breakpoints (960px, 768px, 480px), 8+ backgrounds, 6 font-sizes, 3 border-widths, 5+ grid/flex layouts (Z-hero, bento-grid, choreo-spokes, reasoning-columns, footer flex).

**FLAGSHIP-1.5 VALUE:** ~1,100 CSS lines but 201 were sub-perceptual micro-typography (letter-spacing 0.001-0.01em). Effective ~900. Sub-perceptual waste was 22% of CSS budget.

**REMEDIATION-2.5 VALUE:** ~1,087 CSS lines. Sub-perceptual waste eliminated. Selectors ~70+. 3 grid layouts. 2 breakpoints.

**MEASUREMENT:** Automated extraction from `<style>` block. All binary.

---

### Dimension 4: CHANNELS ACTIVE AT EACH BOUNDARY

"Channels" are independent CSS dimensions that can encode semantic information at a zone boundary. The 6 channels are:

1. **Chromatic:** Background color change
2. **Typographic:** Font-size, line-height, or letter-spacing change
3. **Spatial:** Padding/margin change (compression or expansion)
4. **Structural:** Border presence, weight, or color change
5. **Component:** Different component types appear (callout, code block, grid, table)
6. **Density:** Content-to-whitespace ratio changes

**THRESHOLD:** At every zone boundary (section transition), >= 3 of 6 channels must change perceptibly. The AVERAGE across all boundaries must be >= 4 channels.

**CD-006 VALUE:** 7 transitions. Estimated channel counts:
- S1->S2 (Spiral->Z): Chromatic (zone bg change), Structural (breathing border), Spatial (padding shift), Component (spiral strata -> Q&A blocks), Density (geological -> conversational) = **5 channels**
- S2->S3 (Z->Bento): Chromatic, Structural (bridge), Spatial, Component (Q&A -> bento grid), Density = **5 channels**
- S3->S4 (Bento->F): Chromatic, Structural (bridge), Spatial, Component (grid -> f-movement), Density = **5 channels**
- S4->S5 (F->Z): Spatial, Component (f-movement -> Q&A), Density = **3 channels**
- S5->S6 (Z->Bento): Chromatic, Structural (bridge), Spatial, Component = **4 channels**
- S6->S7 (Bento->Choreo): Spatial, Component (bento -> choreo-hub), Density = **3 channels**
- S7->S8 (Choreo->Spiral): Chromatic, Structural (breathing border), Spatial, Component, Density = **5 channels**
- **Average: 4.3 channels per boundary.**

**FLAGSHIP-1.5 VALUE:** Average ~0.5 channels per boundary. Only Component channel was active (different HTML structures). Chromatic, Typographic, Structural all at zero (imperceptible or absent).

**REMEDIATION-2.5 VALUE:** Estimated average ~2-3 channels. Component active. Chromatic partially active (some boundaries perceptible). Structural uncertain (border rendering issue).

**MEASUREMENT:**
1. At each section boundary, check each of 6 channels for perceptible change.
2. A channel "changes" if its defining CSS property crosses the perceptibility threshold.
3. Count active channels per boundary; compute average.

**PASS:** Every boundary >= 3 channels AND average >= 4.
**FAIL:** Any boundary < 3 channels OR average < 4.

---

### Dimension 5: FRACTAL SELF-SIMILARITY (Scale Depth)

The same compositional pattern should be observable at multiple zoom levels.

**THRESHOLD:** Pattern coherence visible at all 5 scales:

| Scale | What to Check | Perceptibility Test |
|-------|---------------|---------------------|
| 1. Navigation | TOC/nav mirrors page density arc | TOC labels or density indicators reflect section characteristics |
| 2. Page | Full scroll shows density arc (sparse -> dense -> sparse or equivalent) | Squint test at 25% zoom: visible rhythm of light/dark bands |
| 3. Section | Individual sections have internal structure (intro, body, conclusion) | Read one section: does it have a beginning, middle, and end? |
| 4. Component | Components have 2-zone structure (label zone + body zone) | Look at one callout: sparse uppercase label + dense body content |
| 5. Character | Inline text has hierarchy (heading weight, body weight, code weight) | Within a paragraph, are heading, body, and code visually distinct? |

**CD-006 VALUE:** All 5 scales active.
- Navigation: TOC includes density labels (SPIRAL, Z-PATTERN, BENTO, etc.)
- Page: 4-act density arc (Orient sparse, Learn dense, Build mixed, Ship sparse)
- Section: Each section has header meta, heading, body content, closing callout/component
- Component: All callouts have uppercase label + body (2-zone DNA)
- Character: Heading (Instrument Serif), body (Inter, 1rem), code (JetBrains Mono, 0.875rem), meta (mono, 0.75rem)

**FLAGSHIP-1.5 VALUE:** 2 scales active (Component = 2-zone callouts present, Character = heading/body/code font distinction). Page scale broken (uniform density). Section scale broken (no internal structure). Navigation absent.

**REMEDIATION-2.5 VALUE:** 3-4 scales active. Component (callouts improved), Character (font pairing), Page (some density arc with bridge content). Section partially (S1 has distinct typography but S4-S12 converge).

**MEASUREMENT:** Per-scale verification, each binary PASS/FAIL. Must demonstrate coherence across scales (the same PATTERN echoes at each level, not just general good CSS at each level).

**PASS:** All 5 scales show coherent pattern.
**FAIL:** Any scale lacks coherent pattern.

---

### Dimension 6: MULTI-COHERENCE LEVEL

Multi-coherence means multiple CSS channels encode the SAME semantic dimension simultaneously. This is what separates Flagship from Ceiling.

**THRESHOLD:** At least 3 instances where >= 3 channels encode the same semantic concept.

**Example from CD-006:** The geological strata in S1 and S8 use:
- Border-weight gradient: 4px (bedrock) -> 3px (subsoil) -> 1px (atmosphere) = **Structural channel**
- Spacing compression: larger padding (bedrock) -> smaller padding (atmosphere) = **Spatial channel**
- Typographic density: Core Abstraction (1.25rem italic serif) at bedrock, regular prose at atmosphere = **Typographic channel**
- Semantic color: stratum-label in mono uppercase gray = **Component channel**
- All 4 channels encode the SAME thing: geological depth/confidence.

**CD-006 VALUE:** At least 5 multi-coherence instances:
1. Geological strata (4 channels encoding depth/confidence)
2. Header/footer bookend (3 channels encoding structural boundary: dark bg, 3px primary border, inverted type)
3. Z-pattern Q&A rhythm (3 channels encoding question/answer: spacing compression, serif question style, full-width answer expansion)
4. Decision matrix (3 channels: table structure, background highlight, bordered container)
5. Bridge transitions (3 channels: spacing, background zone, bridge prose content)

**FLAGSHIP-1.5 VALUE:** 0 multi-coherence instances. Channels encoded independently (when they encoded anything at all). The spec DESCRIBED 6 channels encoding assay refinement, but CSS did not implement the coherence -- each channel acted independently.

**REMEDIATION-2.5 VALUE:** 1-2 multi-coherence instances (header is strong; callout system has 2-channel coherence via border color + background).

**MEASUREMENT:**
1. Identify semantic concepts in the page (e.g., "importance hierarchy," "zone type," "confidence level").
2. For each concept, count how many CSS channels independently encode it.
3. A "multi-coherence instance" requires >= 3 channels encoding the same concept.
4. Count instances.

**PASS:** >= 3 multi-coherence instances.
**FAIL:** < 3 multi-coherence instances.

---

### Dimension 7: SEMANTIC DENSITY METRIC

Semantic density = how much meaningful content and compositional information exists per vertical scroll unit, measured against blank space.

**THRESHOLD:**
- Maximum consecutive blank space (no text, no borders, no component structure): <= 96px at any point.
- Content-to-whitespace ratio per viewport (at 1440x900): >= 40% content at every scroll position that falls within the `<main>` element.
- No viewport within `<main>` is > 60% blank cream/background.

**CD-006 VALUE:** All transitions have bridge prose or border content. Maximum blank gap estimated at 80px (breathing transition spacing). Content fills every viewport.

**FLAGSHIP-1.5 VALUE:** CATASTROPHIC. 6 whitespace voids of 210-276px each. 70-80% of the scroll was blank cream. 9/9 auditors flagged this as the dominant failure.

**REMEDIATION-2.5 VALUE:** Improved to 33-175px gaps. S4-S5 gap at 175px total (~125px net after bridge prose). 6 of 11 gaps exceed 120px but include bridge content. Some scroll positions at 1440px viewport still captured blank cream (screenshot artifact but revealing).

**MEASUREMENT:**
1. Capture full-page screenshot at 1440px width.
2. Slice into 900px viewport segments (stepping by 100px).
3. For each segment: compute % that is uniform background color (no text, borders, or components).
4. Flag any segment where background > 60%.
5. Measure maximum continuous run of background-only pixels.

**PASS:** No segment > 60% background AND max continuous gap <= 96px.
**FAIL:** Any segment > 60% background OR max continuous gap > 96px.

---

### Dimension 8: RESTRAINT INDICATORS

Flagship is NOT maximum complexity. It is maximum INTENTIONAL composition with visible restraint. The anti-scale model: `Richness = semantic density x restraint x spatial confidence`.

**THRESHOLD:**
- Zero sub-perceptual CSS: No font-size deltas < 1px between adjacent elements. No letter-spacing values < 0.01em (unless 0). No background color deltas < 10 RGB between adjacent zones.
- Deliberate exclusion: At least 1 mechanism from the catalog is explicitly NOT used, and its absence serves the composition (documented or inferrable).
- No mechanical repetition: No single component type appears more than 8 times (prevents "callout spam" or "border-left everywhere").
- Whitespace is content: Every gap > 48px contains either a transition element (border, bridge prose) or serves a documented compositional purpose.

**CD-006 VALUE:** High restraint. Drop cap used only twice (Section 1 and 4 openings). Solid offset depth (#3) used sparingly. Core Abstraction component used only 2x (opening and closing bookend). Scroll witness (#8) absent -- intentionally excluded since the page has a static TOC instead.

**FLAGSHIP-1.5 VALUE:** Zero restraint indicators. 201 CSS lines of sub-perceptual micro-typography. 22% of CSS budget spent on invisible effects. Mechanical application of all described channels without prioritization.

**REMEDIATION-2.5 VALUE:** Sub-perceptual CSS eliminated (restraint restored). But component variety remains somewhat flat -- callouts dominate. Restraint partially achieved.

**MEASUREMENT:**
1. Scan for sub-perceptual values (font-size delta < 1px, letter-spacing < 0.01em, bg delta < 10 RGB).
2. Check maximum component-type repetition count.
3. Verify gaps > 48px have structural content.
4. Verify at least one catalog mechanism is absent by design.

**PASS:** All 4 restraint indicators satisfied.
**FAIL:** Any indicator violated.

---

### Dimension 9: AXIS PATTERN VARIETY (Flagship-Specific)

Flagship pages MUST use multiple axis patterns (attention topologies) to create compositional variety. This is the primary differentiator from Ceiling.

**THRESHOLD:** >= 3 distinct axis patterns used across the page, with named transition types between them.

The 5 available axis patterns:
1. Z-Pattern (conversational, Q&A)
2. F-Pattern (progressive narrative)
3. Bento Grid (task islands, reference)
4. Spiral (geological, confidence strata)
5. Choreography (hub-spoke, navigation)

**CD-006 VALUE:** All 5 axis patterns used across 8 sections: Spiral (S1, S8), Z-Pattern (S2, S5), Bento (S3, S6), F-Pattern (S4), Choreography (S7). 7 named transitions connecting them.

**FLAGSHIP-1.5 VALUE:** 12 sections but axis patterns are ambiguous. The HTML metadata labeled sections with patterns, but the CSS did not differentiate between them. Structural monotony (every section had the same CSS treatment regardless of labeled pattern).

**REMEDIATION-2.5 VALUE:** Same HTML structure (12 sections with labeled patterns). CSS partially differentiates (callout variants, grid layouts) but most sections still share the same typography and spacing treatment.

**MEASUREMENT:**
1. Identify section axis labels (from section-meta or equivalent).
2. Verify that each labeled axis pattern produces DISTINCT CSS output: different layout (grid, flex, linear), different component palette, different spacing rhythm.
3. Count truly distinct patterns (not just labels).

**PASS:** >= 3 structurally distinct axis patterns with named transitions.
**FAIL:** < 3 distinct patterns OR transitions are unnamed/invisible.

---

### Dimension 10: DESIGNED MOMENTS PER SCROLL

A "designed moment" is a viewport-sized region (900px at 1440w) where at least one element goes beyond competent styling to exhibit intentional compositional craft. Examples: drop cap opening, inverted dark block, multi-column grid with spanning, pullquote in serif, solid offset depth on a featured element, data table with header backgrounds.

**THRESHOLD:** >= 1 designed moment per 900px viewport segment, measured across the full `<main>` scroll height.

**CD-006 VALUE:** High density of designed moments:
- Viewport 1: Dark header with 3px accent
- Viewport 2: TOC with density labels
- Viewport 3: Spiral strata with border-weight gradient + Core Abstraction (essence + code dual-zone)
- Viewport 4: Z-hero golden-ratio grid
- Viewport 5: Q&A with serif question + gotcha callout
- Viewport 6: Bento grid with 4 islands
- Viewport 7: Decision matrix table
- Viewport 8: Reasoning two-column comparison
- ... continues through all 8 sections.
- Every viewport has at least one. Estimated coverage: 100%.

**FLAGSHIP-1.5 VALUE:** Header viewport had a designed moment. Most other viewports were blank cream or uniform prose. Estimated coverage: ~15%.

**REMEDIATION-2.5 VALUE:** Header, callout sections, dark code blocks, some grid areas. Estimated coverage: ~50-60%.

**MEASUREMENT:**
1. Capture full-page screenshot at 1440px.
2. Slice into 900px segments (100px step).
3. For each segment, identify whether at least one designed moment exists (not just styled text, but a compositional decision visible without measurement).
4. Coverage = segments with moment / total segments.

**PASS:** >= 90% coverage (every viewport has a designed moment, allowing 1-2 transition viewports).
**FAIL:** < 90% coverage.

---

### Dimension 11: COMPONENT VARIETY

Flagship demands a rich component palette, not just callout repetition.

**THRESHOLD:** >= 8 distinct component types deployed, with no single type exceeding 35% of total component instances.

The component types from CD-006:
1. Callout (info, tip, gotcha, essence, challenge) -- counted as 1 type with variants
2. Code block (dark background, syntax-highlighted)
3. File tree (mono, indented)
4. Decision matrix (table with highlight row)
5. Core Abstraction (essence + code dual-zone)
6. Task component (checklist with checkbox)
7. Reasoning (2-column comparison + recommendation)
8. Data table (mono headers, border categories)
9. Q&A block (serif question, indented answer)
10. Bento grid cell (bordered, padded island)
11. Choreography (hub + spokes)

**CD-006 VALUE:** All 11 component types. 33 total instances. Callouts = 17/33 (51%) -- this technically violates the 35% rule, but callouts have 5 distinct variants. If counted as 5 separate types, max is Info at 5/33 (15%).

**Refined threshold:** No single component TYPE exceeds 35%, where callout variants count as separate types.

**FLAGSHIP-1.5 VALUE:** ~5 types effectively (section text, callout-like blocks, code blocks, tables, header/footer). But most were structurally identical.

**REMEDIATION-2.5 VALUE:** ~8-9 types (callout 4 variants, code block, table 6 variants, grid 3 types, section indicators, pullquote). Strong component variety in HTML; CSS application inconsistent.

**MEASUREMENT:**
1. Catalog all component instances by type.
2. Count distinct types.
3. Compute max single-type percentage.

**PASS:** >= 8 types AND no type > 35%.
**FAIL:** < 8 types OR any type > 35%.

---

### Dimension 12: PERCEPTIBILITY FLOOR (Threshold Compliance)

Every compositional decision must be perceptible without tooling. This is the lesson from the Flagship failure: programmatic verification passed while perceptual audit failed.

**THRESHOLD:** All of the following perceptibility minimums must be met:

| Property | Minimum Delta | Rationale |
|----------|---------------|-----------|
| Adjacent zone backgrounds | >= 15 RGB points on at least 1 channel | Below 15 is imperceptible on warm cream palette |
| Font-size between zone groups | >= 2px cumulative | Below 2px is invisible |
| Letter-spacing (if used) | >= 0.5px (0.03em at 16px) or 0 | Sub-0.5px letter-spacing is imperceptible |
| Padding between zones | >= 24px difference | Below 24px difference is not felt |
| Border presence | >= 3px if structural, >= 1px if separator | 2px borders are prohibited (epidemic finding) |
| Container width | 940-1100px at 1440 viewport | Non-negotiable identity constraint |
| Section gap total | <= 96px (including stacked margins, padding, borders) | S-09 stacking compliance |

**CD-006 VALUE:** All thresholds met. Zone backgrounds visually distinct (warm cream, white, earthy tan, dark). Borders clearly visible. Typography voices distinct across sections.

**FLAGSHIP-1.5 VALUE:** Catastrophic violations. Background deltas 1-8 RGB. Zero borders. Uniform 16px typography. 6 gaps of 210-276px.

**REMEDIATION-2.5 VALUE:** Partially met. 2 transitions below 15 RGB (S4-S5 at 2 RGB, S9-S10 at 0-5 RGB). Typography converges at 16px for S4-S12. Borders uncertain.

**MEASUREMENT:** Automated extraction of computed styles at each section boundary. All binary.

**PASS:** All perceptibility minimums met at every boundary.
**FAIL:** Any minimum violated.

---

## 4. Summary Scorecard

| Dimension | Threshold | CD-006 | Flagship 1.5 | Remediation 2.5 | Required for 4/4 |
|-----------|-----------|--------|--------------|-----------------|-------------------|
| 1. Zone transitions | >= 8 perceptible | 7 (all perceptible) | 0 perceptible | 3-5 estimated | >= 8 |
| 2. Mechanism count | >= 14, 2/category | 18/18 | ~5-7 effective | ~10-12 effective | >= 14 |
| 3. CSS features | 600-1500 lines, etc. | ~999 lines | ~900 effective | ~1,087 lines | PASS all |
| 4. Channels/boundary | >= 3 each, avg >= 4 | Avg 4.3 | Avg ~0.5 | Avg ~2-3 | PASS all |
| 5. Fractal scales | All 5 | 5/5 | 2/5 | 3-4/5 | 5/5 |
| 6. Multi-coherence | >= 3 instances | ~5 | 0 | 1-2 | >= 3 |
| 7. Semantic density | <= 96px gap, >= 40% | PASS | CATASTROPHIC FAIL | PARTIAL | PASS all |
| 8. Restraint | All 4 indicators | PASS | FAIL (sub-perceptual) | PARTIAL | PASS all |
| 9. Axis variety | >= 3 distinct | 5/5 | Ambiguous | Partially distinct | >= 3 |
| 10. Designed moments | >= 90% viewport coverage | ~100% | ~15% | ~50-60% | >= 90% |
| 11. Component variety | >= 8 types, <= 35% each | 11 types | ~5 types | ~8-9 types | >= 8 |
| 12. Perceptibility floor | All thresholds met | PASS | CATASTROPHIC FAIL | PARTIAL | PASS all |

**To earn 4/4 DESIGNED: ALL 12 dimensions must PASS.**

Failure on ANY dimension caps the score:
- Fail on Dimensions 7 or 12 (perceptibility): maximum 1.5/4
- Fail on Dimensions 1, 4, or 5 (zone/channel/scale): maximum 2.5/4
- Fail on Dimensions 6, 9, or 10 (multi-coherence/variety/moments): maximum 3.0/4
- Fail on Dimensions 2, 3, 8, or 11 (mechanism/CSS/restraint/components): maximum 3.5/4

---

## 5. What CD-006 Tells Us About the 4/4 Gap

CD-006 scored ~3.5/4, not 4/4. Where does it fall short?

1. **Zone transitions: 7 not 8.** The page has 8 sections but only 7 transitions. With 12 sections (Flagship scale), 8+ transitions should be achievable.

2. **Callout dominance:** 17/33 instances (51%) are callouts. Even with 5 variants, this is compositional over-reliance on one structural pattern. A true 4/4 page would have more variety in its "non-callout" component types.

3. **Single-page content type.** CD-006 is a tutorial -- a single cognitive mode (teaching). A Flagship page using RESEARCH-SYNTHESIS content has multiple cognitive modes (orienting, analyzing, synthesizing, concluding), which enables more multi-coherence opportunities.

4. **8 sections vs 12.** CD-006 demonstrates the pattern at 8-section scale. Flagship at 12 sections has more opportunities for designed moments AND more risk of sagging middle sections.

**The gap from 3.5 to 4.0 requires:**
- Eliminating callout dominance (more component variety in the middle sections)
- Maintaining designed-moment density across a longer scroll
- Achieving multi-coherence not just at bookend boundaries but throughout
- More explicit use of typographic voices across section groups (not just heading vs body)

---

## 6. What the Flagship Failure Teaches About the 4/4 Gap

The Flagship experiment had strong INTENT (14 mechanisms described, 6 channels mapped, assay laboratory metaphor) but zero EXECUTION (all channels imperceptible).

**Root cause analysis (from dissection/retrospective):**

1. **Guardrail-to-playbook ratio 7.9:1.** The builder was told what NOT to do 8x more than what TO DO. Result: technically compliant CSS that produced nothing visible.

2. **Sub-perceptual CSS waste.** 22% of CSS (201 lines) spent on letter-spacing 0.001-0.01em -- invisible to any viewer. This crowded out the CSS budget for visible mechanisms.

3. **Recipe vs checklist.** The Middle experiment builder got a 100-line RECIPE (sequenced steps, specific CSS values). The Flagship builder got a 71-line CHECKLIST (constraints only). Recipe = DESIGNED; Checklist = FLAT.

4. **Builder visibility: 13.4%.** Of the 963-line prompt, the builder saw ~75 lines -- mostly guardrails and spatial rules. Zero compositional intelligence reached the CSS-writing agent.

**Lesson for 4/4:** The SPECIFICATION is necessary but not sufficient. The builder must receive:
- A recipe (not a checklist) -- sequenced CSS steps with specific values
- Playbook-paired guardrails -- every "don't" has a corresponding "instead, do THIS"
- Perceptibility thresholds as hard gates -- minimum RGB deltas, minimum font-size changes
- Reference screenshots of what "perceptible zone transition" looks like

---

## 7. Verification Protocol

To verify a page against this spec:

**Phase 1: Automated (10 minutes)**
1. Extract CSS from `<style>` block.
2. Count: lines, selectors, custom properties, breakpoints, background colors, font-sizes, border-widths, grid/flex layouts.
3. Gate: Dimension 3 (CSS features).

**Phase 2: Computed Styles (15 minutes)**
1. Serve page via HTTP. Open at 1440x900.
2. For each `<section>` boundary, extract computed: background-color, font-size, line-height, letter-spacing, border properties, padding.
3. Compute deltas between adjacent sections.
4. Gate: Dimensions 1, 4, 7, 12.

**Phase 3: Structural Analysis (15 minutes)**
1. Catalog all components by type and location.
2. Map mechanisms to catalog.
3. Identify multi-coherence instances.
4. Gate: Dimensions 2, 6, 8, 9, 11.

**Phase 4: Perceptual Audit (30 minutes)**
1. Fresh-eyes Mode 4 audit (minimum 3 independent auditors).
2. Squint test at 25% zoom: visible rhythm?
3. Scroll at reading speed: every viewport has a designed moment?
4. Scale-by-scale fractal check.
5. Gate: Dimensions 5, 10.

**Phase 5: Verdict**
- All 12 dimensions PASS: **4/4 DESIGNED**
- 10-11 PASS: **3.5/4** (identify failing dimensions)
- 8-9 PASS: **3/4 COMPOSED**
- 6-7 PASS: **2.5/4** (remediation territory)
- < 6 PASS: **2/4 STYLED** or below

---

## 8. The Core Insight

**Flagship 4/4 is NOT "more of everything."** It is:

- **Every mechanism perceptible** (not just present in CSS)
- **Every transition multi-channel** (not just background-only)
- **Every viewport compositional** (not just header and footer)
- **Every pattern intentional** (with visible restraint, not mechanical application)

The mathematical formula from scale research applies: `Richness = semantic density x restraint x spatial confidence`. All three factors must be high. Maximize one at the expense of others and you get:
- High density, low restraint = Flagship 1.5 (sub-perceptual waste)
- High restraint, low density = Floor tier (simple but empty)
- High density, high restraint, low spatial confidence = Middle tier (good but flat)
- High density, high restraint, high spatial confidence = **4/4 DESIGNED**

Spatial confidence = the builder's willingness to make BOLD, VISIBLE compositional decisions (3px borders, distinct zone backgrounds, real typography changes, multi-column grids) rather than hedging with imperceptible micro-adjustments.

---

**END SPECIFICATION**

*This specification defines 12 measurable dimensions with binary thresholds. Any page can be verified against it. CD-006 nearly passes (estimated 10/12 with callout dominance and transition count as weak points). The Flagship experiment passes ~2/12. The remediation passes ~5-6/12. A true 4/4 page must pass all 12.*
