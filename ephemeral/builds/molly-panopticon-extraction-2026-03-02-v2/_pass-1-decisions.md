# Pass 1 Decisions

## Metaphor Applied
The Self-Directed Observatory — eight survey instruments pointed at eight sectors of the observer's own life. The page is structured as a night at the observatory: arrive at dusk (Zone 1), work the instrument floor (Zone 2), review observation logs (Zone 3), reflect in the observer's study (Zone 4), consult the manual (Zone 5), step outside at dawn (Zone 6). CSS naming uses observatory vocabulary: `--dome-interior`, `--instrument-light`, `--observation-plate`, `--bedrock-dark`.

## Zone Architecture
- **Zone 1 (Threshold):** #FEF9F5 bg, 80px top padding, Instrument Serif display headings, 1.8 line-height — philosopher's voice, sparse
- **Zone 2 (Instrument Floor):** #FFFFFF bg, 48px padding, Inter body + JetBrains Mono code, 1.6 line-height — architect's voice, dense. Contains 4-column bento grid for 8 domains
- **Zone 3 (Observation Log):** #FAF5ED bg, 48px padding, Inter tabular, 1.7 line-height — evidence display, moderate
- **Zone 4 (Observer's Journal):** #FEF9F5 bg, 64px padding, Instrument Serif returns for philosopher, 1.8 line-height — breathing. Contains #1A1A1A dark inversion for Goodhart section
- **Zone 5 (Survey Manual):** #FFFFFF bg, 40px padding, Inter + JetBrains Mono, 1.5 line-height — compressed reference
- **Zone 6 (Night Sky):** #FEF9F5 → #FAF5ED bg, 80px top padding, Instrument Serif final word, 1.8 line-height — release

## Mechanisms Deployed
1. **S2-M01 Fractal Self-Similarity (5 scales):** Zone padding alternation (Scale 2), section intro/detail rhythm (Scale 3), code=tight/blockquote=breathing (Scale 4), font register = density (Scale 5). Backbone of the page.
2. **S2-M02 PULSE Density Rhythm:** Zone pace varies LOW-HIGH-MEDIUM-LOW-HIGH-LOW. Line-height and padding co-vary at each zone.
3. **S2-M03 Border-Weight Gradient:** 4px on instrument panels (established), 3px on observation table headers and code blocks (demonstrated), 1px on philosophical blockquotes and constellation quotes (speculative).
4. **S2-M04 Bento Grid:** 4-column grid for 8-domain instrument floor in Zone 2. Collapses to 2-col at 1024px, 1-col at 768px. Each panel has 4px left border.
5. **S2-M05 Typography Three Voices:** Instrument Serif = philosopher (Z1, Z4, Z6), Inter = architect (Z2, Z3, Z5), JetBrains Mono = practitioner (code blocks in Z2, Z5).
6. **S2-M06 Density Contrast:** "Violent gap" waypoint in Zone 1 (centered serif italic, 56px vertical padding, 1px top/bottom borders). Goodhart inversion in Zone 4 (full #1A1A1A dark background, cream text, wide 64px padding).
7. **S2-M07 CRESCENDO Compression:** h2 margin-bottom compresses 32px → 24px → 24px → 32px (break) → 16px → 32px (release). Zone padding follows parallel arc.

## Questions Explored
- **Q1: Atmospheric signatures in 8-domain panels**
  - Channels affected: padding, line-height, letter-spacing per panel
  - CSS generated: 8 variant classes (e.g. `instrument-panel--trades` with tighter 16px padding/1.4 LH vs `instrument-panel--writing` with generous 24px padding/1.7 LH)
  - Zones touched: Zone 2
  - Carry forward: Pass 2 could deepen by varying internal element gap and testing whether domain character is guessable with labels hidden

- **Q3: Closing constellation — quotes as discrete observations**
  - Channels affected: margin-bottom per quote (48px separation), font-family (Instrument Serif), font-size (1.25rem), border-left (1px delicate signal), category labels in mono uppercase
  - CSS generated: `.constellation-field`, `.constellation-quote`, `.constellation-quote__category` — each quote floats independently with generous spacing, no list formatting
  - Zones touched: Zone 6
  - Carry forward: Pass 2 could vary right margins per quote length for ragged star-field effect

- **Q6: Observatory corridors (partial)**
  - Channels affected: background-color, padding, border, corridor labels
  - CSS generated: 5 corridor dividers with distinct backgrounds (#FAF5ED, #F0EBE3, #FEF9F5) and mono uppercase labels
  - Zones touched: All zone transitions
  - Carry forward: Pass 2 should make corridors more atmospherically distinct — potentially different corridor heights and transitional prose bridges

## CSS Naming Vocabulary
- `--dome-interior` → #FEF9F5 (warm cream background)
- `--instrument-light` → #FFFFFF (clean white for dense zones)
- `--observation-plate` → #FAF5ED (warm earthy reading surface)
- `--bedrock-dark` → #1A1A1A (observatory control room / inversion)
- `.zone--threshold`, `.zone--instruments`, `.zone--observation`, `.zone--journal`, `.zone--manual`, `.zone--nightsky` → 6 observatory zones
- `.instrument-floor`, `.instrument-panel` → 8-domain bento grid
- `.waypoint--violent-gap`, `.waypoint--inversion` → density contrast moments
- `.constellation-field`, `.constellation-quote` → closing quote field
- `.corridor--*` → inter-zone transition spaces

## Responsive Strategy
- Desktop-first at 960px max-width container
- 1024px breakpoint: bento grid 4-col → 2-col, inversion section padding reduced
- 768px breakpoint: bento grid → 1-col, font sizes reduced (h2: 1.5rem), code block padding tightened, blockquote padding reduced, table horizontal scroll enabled
- Body text remains 16px at all breakpoints

## Open Questions for Pass 2
- Q2 (typographic temperature shift) was partially deployed (Instrument Serif returns in Z4 headings and `.voice--philosopher` class) but the BODY TEXT shift from Inter → Instrument Serif for key philosophical passages needs deeper exploration
- Q4 (epistemic gravity gradient) not explored — could extend border-weight encoding into spacing and line-height simultaneously
- Q5 (isolation→correlation→synthesis at 3 scales) not explored — fractal was deployed but the specific narrative arc of "isolation enables correlation enables self-legibility" repeating at zone/panel/code scales needs attention
- The corridor elements (Q6) are structurally present but atmospherically thin — Pass 2 should enrich their transitional character
- Anti-pattern blocks in Zone 5 could benefit from density variation (some are more critical than others)
- The checkpoint components need perceptual differentiation from standard callouts
