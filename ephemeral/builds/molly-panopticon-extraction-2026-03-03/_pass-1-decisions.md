# Pass 1 Decisions — Structure

**Builder:** Pass 1 (structure skeleton)
**Status:** Complete (agent expired before writing this file; extracted from HTML artifact)

## What Was Built

- 2153-line self-contained HTML page with 5 atmospherically distinct zones
- Full transition table documented in HTML comment (lines 11-47)
- All content from the markdown rendered into the zone architecture
- 960px container width (TC-BRIEF calibration)
- Dark full-bleed header above Zone 1 (institutional gaze inversion)
- Google Fonts loaded: Instrument Serif, Inter, JetBrains Mono

## Zones Created

1. **DATUM POINT** — `#FEF9F5` cream, sparse (64-80px spacing), Instrument Serif display-heavy
2. **SURVEY GRID** — `#FFFFFF` white (drafting table), moderate (48px), bento grid for 8 domains
3. **FIELD NOTES** — `#FAF5ED` earthy tan (worn notebook), dense (32-40px), code-heavy
4. **CONTOUR MAP** — `#1A1A1A` near-black (cave), densest (32-48px variable), philosophical peak
5. **PROJECTION** — `#FEF9F5` cream return, moderate-to-sparse (48-64px), reader becomes surveyor

## Mechanisms Deployed

All 8 mechanisms from package:
- **M01** Zone Background Progression — 5-zone arc: cream→white→tan→bedrock→cream
- **M02** Fractal Self-Similarity — sparse/dense rhythm at page, zone, and component scales
- **M03** Border-Weight Gradient — 4px triangulated boundaries, 3px measured, 1px contour lines
- **M04** Typography Compression/CRESCENDO — tightening from Datum to Contour Map, release at Projection
- **M05** PULSE — bilateral dialectic rhythm (critic narrow/Cantillon full), symptom/solution alternation
- **M06** Density Contrast — warm cream blockquotes in dark Contour Map zone (surveyor's lamp)
- **M07** Three-Register Typography — Instrument Serif (surface), Inter (sediment), JetBrains Mono (bedrock)
- **M08** Dark Full-Bleed Header — institutional gaze with 3px #E83025 border-bottom

## Structural Propositions

- **Proposition 1 (Bento Grid): ADOPTED** — 8-domain taxonomy as `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` with 24px gap. Collapses to 1fr at 768px.
- **Proposition 2 (Bilateral Gaze): NOT ADOPTED** — Standard full-width display heading used instead (lower risk)

## Compositional Questions Explored

- **Q1 (time-horizon encoding):** EXPLORED — domain cards have varying border-weight and padding by time horizon. Daily domains (trades, email) have 4px borders + 20px padding. Weekly (nox, growth, metrics) have 3px + 24px. Quarterly (health, writing, personal) have 1px + 28px. Channels: border-width, padding, bg-color.
- **Q3 (gradual descent):** EXPLORED — contour lines (1px borders) increase in frequency in Field Notes section, spacing compresses progressively, background cools. Channels: border-bottom frequency, padding, bg-color.
- **Q6 (atmospheric code blocks):** EXPLORED — code blocks carry zone-specific atmospheres. Survey Grid: clinical white. Field Notes: earthy tan. Contour Map: dark-gray cave wall. Channels: code bg-color, border-color, text-color.
- **Q7 (bento as singular revelation):** EXPLORED — the bento grid is the ONLY spatial break from vertical editorial flow. Return to vertical after grid creates perceptible "picking the notebook back up." Channels: grid-template-columns, gap, container-width, transition padding.

## Questions NOT Explored (available for Pass 2/3)

- Q2 (projection shift at zone boundaries)
- Q4 (epistemic confidence encoding)
- Q5 (fractal CRESCENDO at 3 scales)

## Soul Compliance

- border-radius: 0 enforced globally via `*, *::before, *::after { border-radius: 0; }`
- box-shadow: none enforced globally
- No gradients, no semi-transparent backgrounds, no external stylesheets
- All colors from locked palette
- Font trinity only (Instrument Serif, Inter, JetBrains Mono)
- 4px spacing scale throughout
- h3 italic with display font
- Visual page ending with footer

## For Pass 2

Pass 2 receives the Enrichment package. Key areas for enrichment:
- Research findings to be applied zone-by-zone
- Case study processes to refine transitions
- Additional detail in component treatments (callouts, tables, code blocks)
- Questions Q2, Q4, Q5 remain available for exploration
