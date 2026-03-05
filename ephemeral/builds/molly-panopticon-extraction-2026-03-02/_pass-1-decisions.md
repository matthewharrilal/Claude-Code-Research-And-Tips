# Pass 1 Decisions

## Metaphor Applied
Cartographic survey station. The page is a map being read: the reader descends from a philosophical cartouche (hilltop overview) through a survey grid (measured territory) into marginal annotations (critical fieldwork notes), then resolves through a legend (symbols decoded) and terra incognita (the map's blank edges). The metaphor drives naming (survey-container, zone-cartouche, survey-parchment, etc.) and encodes the content's own logic — Cantillon's Panopticon IS a cartographic act (mapping yourself).

## Zone Architecture
1. **HEADER** — Full-bleed dark (#1A1A1A), Instrument Serif title, 3px primary border-bottom. Survey metadata (source, engagement, depth, date).
2. **CARTOUCHE** (Part I) — Parchment #FEF9F5, 80px padding, cartographer voice (serif display). Philosophy of self-legibility. Purple accent for quotes. Amber proof-mark for the $2000 story.
3. **SURVEY GRID** (Parts II-V) — Drafting-table #FFFFFF, 48px→40px compression. Surveyor/instrument voices. Domain grid cards (2-col), principle blocks with 3px left-border, file trees with 4px blue border. Tables for production automations.
4. **ANNOTATIONS** (Parts VI-VII) — Fieldwork #FAF5ED, 56px breathing, asymmetric left margin (80px left, 24px right). Annotator voice (15px). Amber callouts for Goodhart warnings. Red rival-annotation block for Flutterwhat critique.
5. **SURVEY DATA** (Parts VIII-XII) — Drafting-table #FFFFFF return, 48px. Config examples with green labels, red anti-pattern blocks with 4px left-border, ASCII diagrams, green checkpoint blocks with 4px left-border. Build guide with file trees.
6. **LEGEND** (Parts XIII-XIV) — Parchment #FEF9F5 return, 64px. Color-coded legend entries: purple (self-legibility), blue (capability), amber (warnings), green (humanity), coral (trade-off). Mental model summary as survey-summary subsection.
7. **TERRA INCOGNITA** (Parts XV-XVII) — Bedrock #1A1A1A dark zone, 64px. Inverted typography (light on dark). 1px projected borders only — uncertain survey lines. Tags as mono tag-cloud with 1px borders.

## Mechanisms Deployed
1. **Background Arc Progression (S2-M01)** — 4 zone backgrounds: parchment→drafting→fieldwork→parchment→bedrock. Density encoded in color.
2. **Five-Voice Typography (S2-M02)** — Cartographer (Instrument Serif display), Surveyor (Instrument Serif section), Field Worker (Inter body 16px), Instrument (JetBrains Mono code), Annotator (Inter 15px reduced).
3. **Spacing Compression WAVE (S2-M03)** — Sparse 80px (cartouche) → Tight 48px → Dense 40px → Breathing 56px → Tight 48px → Moderate 64px → Sparse 64px. Not monotonic.
4. **Border-Weight Gradient (S2-M04)** — 4px = measured certainty (callout accents, domain cards). 3px = structural boundaries (zone borders, code blocks). 1px = projected uncertainty (terra incognita separators, inline code).
5. **Density Contrast at 3 Transitions (S2-M05)** — Cartouche→Grid (sparse→tight, parchment→white, serif→mono). Grid→Annotations (tight→breathing, white→fieldwork, instrument→annotator). Annotations→Data (breathing→tight, fieldwork→white, annotator→instrument).
6. **Pull Quotes as Legend Entries (S2-M06)** — Part XIII quotes are color-coded by semantic category with 4px left-borders. Purple=legibility, Blue=capability, Amber=warnings, Green=humanity, Coral=trade-off.
7. **Asymmetric Margins (S2-M07)** — Annotations zone has 80px left padding vs 24px right. The annotator writes in the margin.
8. **Fractal Self-Similarity (S2-M08)** — Mono uppercase section-indicator labels recur at every zone. Domain cards repeat the sparse-label→dense-body pattern. Checkpoint blocks repeat it. Legend entries repeat it.

## CSS Naming Vocabulary
- `--survey-parchment/drafting/fieldwork/bedrock` — zone backgrounds named by survey metaphor
- `--survey-sparse/moderate/breathing/tight/dense` — spacing scale named by survey density
- `--border-measured/structural/projected` — border weights named by certainty
- `.zone-cartouche`, `.zone-survey-grid`, `.zone-annotations`, `.zone-survey-data`, `.zone-legend`, `.zone-terra-incognita` — zone classes
- `.proof-mark`, `.rival-annotation`, `.legend-entry`, `.checkpoint` — semantic element classes

## Responsive Strategy
Desktop-first with two breakpoints: 1024px (collapse domain grid, reduce annotation asymmetry) and 768px (single-column, reduced padding, smaller headings, remove annotation asymmetry entirely). No horizontal overflow at any breakpoint. Code blocks get reduced font size on mobile.

## Open Questions for Pass 2
- The annotations zone asymmetric margin (80px left) may need per-viewport tuning at mid-widths
- Terra incognita dark zone could benefit from more interior contrast — currently relies heavily on the bedrock inversion for impact
- The density wave pattern (sparse→tight→dense→breathing→tight→moderate→sparse) should be verified perceptually — the breathing zone may need slight tightening or the grid dense zone may need to feel even tighter to make the contrast land
- Checkpoint blocks in the build guide (Part XII) could become more visually distinct progress markers to reinforce the fractal self-similarity mechanism
- Consider whether legend entries need more vertical breathing between them — currently at 24px margin-bottom
