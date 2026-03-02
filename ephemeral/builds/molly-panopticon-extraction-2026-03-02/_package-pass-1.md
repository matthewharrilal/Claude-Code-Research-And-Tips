# Research Package — Pass 1: FOUNDATIONS
## For Builder Pass 1 (STRUCTURE)

You are building the initial HTML skeleton. This package establishes boundaries,
creative direction, and mechanisms. READ Section 9 (Consumption Protocol) to
understand the optimal absorption sequence.

---

## 0. SOUL CHECKLIST (VERIFY BEFORE AND AFTER BUILD)

```
[ ] border-radius: 0 on ALL elements, pseudo-elements, and inline-code spans
[ ] box-shadow: none on ALL elements (no depth simulation)
[ ] No filter: drop-shadow() anywhere in CSS
[ ] No CSS gradients (linear-gradient, radial-gradient, conic-gradient)
[ ] No rgba() with alpha < 1 on ANY visual element — opacity === 1.0
[ ] No transform: translateY() on hover (no hover-lift effects)
[ ] No CSS animations implying physical object movement (ANTI-PHYSICAL)
[ ] Locked palette only: #E83025, #1A1A1A, #FEF9F5, #E0D5C5, #F0EBE3, #666666 + accents (#4A90D9, #4A9D6B, #C97065, #D97706, #7C3AED)
[ ] Font trinity: Instrument Serif (display headings + Essence body), Inter (body), JetBrains Mono (code)
[ ] Instrument Serif NEVER for body text — display and Essence callout body only
[ ] h3 elements ALWAYS italic
[ ] Callout left-border: 4px solid (Family DNA — not 1px, 2px, or 3px)
[ ] 3-category borders only: 1px (separator), 3px (structural), 4px (semantic accent). ZERO 2px borders.
[ ] Container max-width: 960px
[ ] Spacing from 4px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
[ ] Max 2 callouts per viewport (~800px vertical span)
[ ] No cool grays — warm earth tones only. No pure black #000000 (use #1A1A1A). No pure white for page bg (use #FEF9F5).
[ ] Footer present with 3px border-top
[ ] Full-bleed dark header (#1A1A1A) with Instrument Serif title + 3px border-bottom
[ ] Skip link and prefers-reduced-motion rule included
```

---

## 1. BUILD CONTEXT

**Metaphor:** This page is a cartographic survey station — each life domain is a survey line extending from a central observation point, and the reader traverses from the philosophical cartouche through the survey grid to legend and terra incognita, experiencing the map/territory dialectic that IS the content's core philosophy.

**Emotional Arc:** The energy peaks twice: first at the opening ("the violent gap" thesis, the $2000 subscriptions proof point) and second at the Goodhart's Law warning (Part VI). Between these peaks, energy converts from philosophical momentum into architectural precision through the 8-domain taxonomy, implementation details, and code-heavy configuration. After the second peak, energy resolves through collection (key quotes as legend entries), synthesis (the completed survey), and openness (unanswered questions at the map's blank edge).

**Content to Zone Map:**
1. Part I (Philosophy of Self-Legibility) -> CARTOUCHE — exhilaration, invitation, the $2000 story as proof mark
2. Parts II-V (8-Domain Architecture, Isolation, Implementation, Automations) -> SURVEY GRID — methodical taxonomy descending into dense code/data
3. Parts VI-VII (Goodhart's Law, Flutterwhat Critique) -> MARGINAL ANNOTATIONS — cautionary, adversarial, a different voice on the map
4. Parts VIII-IX (CLAUDE.md Examples, Correlation Engine) -> SURVEY DATA — precise configuration, second density peak
5. Parts X-XII (Anti-Patterns, Extensions, Build Guide) -> FIELD NOTES — diagnostic, speculative, instructional
6. Parts XIII-XIV (Key Quotes, Mental Model Summary) -> LEGEND — distilled, resolved, the symbols decoded
7. Parts XV-XVII (Connections, Unanswered Questions, Tags) -> TERRA INCOGNITA — the map's blank edges

**Spatial Direction:** Depth stratification. Surface zones are sparse and orienting (64-80px padding). Deep survey zones are dense with measurement data (40-48px). Marginal annotations breathe between registers (48-56px). The legend reopens to warmth (48-64px). The reader descends from hilltop overview into the gridded territory, encounters the annotator's challenges, then emerges into the completed map.

**Zone Architecture Overview** (condensed — the Pass 1 builder NEEDS this to create zones correctly):
- Zone count: 5 primary zones (Cartouche, Survey Grid, Annotations, Legend, Terra Incognita) with 2 sub-zones within the grid (Architecture grid + Data grid)
- Background progression: `#FEF9F5` (parchment) -> `#FFFFFF` (drafting-table) -> `#FAF5ED` (fieldwork) -> `#FEF9F5` (return to parchment) -> `#1A1A1A` (bedrock, optional for terra incognita)
- Density progression:
```
CARTOUCHE   ....            SPARSE   64-80px   parchment #FEF9F5
GRID:ARCH   ........####    BUILDING 40-48px   white #FFFFFF
GRID:IMPL   ############    DENSE    40-48px   white #FFFFFF
ANNOTATIONS ......          MODERATE 48-56px   fieldwork #FAF5ED
FIELD NOTES ........####    BUILDING 40-48px   white #FFFFFF
LEGEND      ........        MODERATE 48-64px   parchment #FEF9F5
TERRA INC   ....            SPARSE   64px      bedrock #1A1A1A or parchment
```
- Key transition spacing: 64px minimum between zones, 48px between sections within zones
- The density is NOT monotonically compressing — it WAVES (dense grid -> breathing annotations -> dense data -> resolving legend)

---

## 2. MECHANISM SELECTIONS

### 2.1 Background Arc Progression `[NOVEL]`

**Selected because:** The TC brief prescribes four cartographic materials — parchment (overview), drafting-table (measurement), fieldwork (territory contact), and night camp (synthesis by lantern). This maps the survey's temporal journey: you begin on the map, move to the drafting table, step into the field, and arrive at camp. The 4-background arc IS the content's register shifts made visible.
**Finding basis:** R3-Insight-5 (geological model), R3-Insight-24 (density strata), Validated DD-F-004 (geological encoding), DD-004/OD-004/OD-006 convergence (zone backgrounds as primary mechanism)
**CSS implementation:**
```css
:root {
  --zone-parchment: #FEF9F5;   /* Cartouche, Legend — warm cream, the map's base material */
  --zone-drafting: #FFFFFF;     /* Survey Grid — clean white, focused measurement */
  --zone-fieldwork: #FAF5ED;    /* Annotations — earthy tan, territory contact */
  --zone-bedrock: #1A1A1A;      /* Header, footer, code blocks, optional terra incognita */
}
.zone--cartouche { background: var(--zone-parchment); }
.zone--grid { background: var(--zone-drafting); }
.zone--annotations { background: var(--zone-fieldwork); }
.zone--legend { background: var(--zone-parchment); }
```
**Expected visual evidence:** Four distinct background zones visible on scroll at 1440px. The parchment-to-white shift at Part II feels like stepping from library into workshop. The white-to-tan shift at Part VI feels like stepping into the field.
**Zone deployment:** Every zone gets exactly one background. Zone transitions coincide with content register changes.

### 2.2 Five-Voice Typography System `[NOVEL]`

**Selected because:** The TC brief identifies five voices in three typefaces — the cartographer (serif display), the surveyor (serif section), the field worker (sans body), the instrument (mono), and the annotator (sans reduced). Typography is the ONLY structural mechanism for this mostly-prose content. Remove the typography and the page should still be structurally legible through spacing alone. Add the typography and five distinct voices emerge, encoding "who is speaking" at each moment.
**Finding basis:** R2-5.1 (typography as primary design), R1-5.2 (monospace differentiation), R4-3.1 (alternating rhythm), Validated CRESCENDO through typography compression
**CSS implementation:**
```css
/* Voice 1: Cartographer — the mapmaker's hand signing the work */
.voice-cartographer { font-family: 'Instrument Serif', serif; font-size: 2.5rem; letter-spacing: -0.02em; font-weight: 400; }

/* Voice 2: Surveyor — the survey region labels */
.voice-surveyor { font-family: 'Instrument Serif', serif; font-size: 1.625rem; letter-spacing: -0.01em; font-style: italic; }

/* Voice 3: Field Worker — the steady field notes */
.voice-fieldworker { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.7; }

/* Voice 4: Instrument — the precise coordinates */
.voice-instrument { font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; line-height: 1.5; }

/* Voice 5: Annotator — the marginal commentary */
.voice-annotator { font-family: 'Inter', sans-serif; font-size: 0.9375rem; color: var(--color-text-secondary); line-height: 1.75; }
```
**Expected visual evidence:** Five typographic voices visible at 1440px. The cartographer's serif display opens Parts. The surveyor's serif italic labels sub-sections. The field worker's sans carries body prose. The instrument's mono renders code. The annotator's reduced sans signals Parts VI-VII warnings.
**Zone deployment:** Cartographer in Cartouche + Legend headings. Surveyor in all zones for H3. Field worker everywhere for body. Instrument in Survey Grid + Data code blocks. Annotator in Annotations zone.

### 2.3 Spacing Compression Gradient `[NOVEL]`

**Selected because:** The cartographic survey deepens — the further the surveyor penetrates, the denser the notation. This content's natural density (sparse philosophy -> dense code) maps directly to compressing section padding. The TC brief prescribes 64-80px for the cartouche, 40-48px for the survey grid, 48-56px for annotations. This is NOT monotonic — it WAVES (dense -> breathing -> dense -> resolving), following the content's two energy peaks.
**Finding basis:** R3-Insight-3 (CRESCENDO), Validated CRESCENDO (3 stages, two-level model), DD-004/OD-004 convergence (spacing compression), R5-S2 (density wave sequencing)
**CSS implementation:**
```css
.zone--cartouche { padding: 64px 0; }       /* Hilltop overview — maximum generosity */
.zone--grid { padding: 40px 0; }            /* Measurement intervals — tighter */
.zone--annotations { padding: 48px 0; }     /* Reflective pause — breathing opens */
.zone--field-notes { padding: 40px 0; }     /* Second density peak — tight again */
.zone--legend { padding: 48px 0; }          /* Collecting symbols — moderate */
.zone--terra { padding: 64px 0; }           /* Map's blank edge — spacious return */

/* CRITICAL: Two-level model — inter-zone padding compresses but INTRA-zone
   paragraph spacing stays constant at 24px. Do not compress both levels. */
.zone--grid p { margin-bottom: 24px; }      /* Constant internal rhythm */
.zone--cartouche p { margin-bottom: 24px; } /* Same constant */
```
**Expected visual evidence:** Visible padding compression from Part I through Parts II-V. The page "tightens" as the reader descends into the survey grid, then breathes at the annotations, then tightens again for data, then reopens for the legend.
**Zone deployment:** Every zone. The compression IS the spatial arc.

### 2.4 Border-Weight Gradient (Certainty Encoding) `[NOVEL]`

**Selected because:** The content has a pronounced certainty gradient — the 8-domain architecture and implementation (Parts I-V) are presented with high confidence, the warnings (Parts VI-VII) are dialectical, and the extensions/questions (Parts XI, XVI) are speculative. The TC brief's map/territory dialectic demands that mapped territory carry more visual weight than unmapped territory. Border-weight encodes this as flat 2D property without simulating depth.
**Finding basis:** Validated OD-004 (border-weight encodes epistemic confidence), AD-F-014 (4px/3px/1px hierarchy), DD-004/OD-004 convergence (border-weight gradient)
**CSS implementation:**
```css
/* 4px: Measured territory — the surveyor has been here, data confirmed */
.zone--cartouche, .zone--grid { border-left: 4px solid var(--color-text); }

/* 3px: Demonstrated territory — field-tested but one operator's experience */
.zone--field-notes { border-left: 3px solid var(--color-text); }

/* 3px lighter: Contested territory — the rival surveyor's dissent */
.zone--annotations { border-left: 3px solid #666666; }

/* 1px: Projected territory — beyond measurement, estimation */
.zone--terra { border-left: 1px solid var(--color-border); }
```
**Expected visual evidence:** Progressive lightening of left-border weight from Parts I-V (4px dark) through annotations (3px lighter) to terra incognita (1px subtle). The reader perceives structural confidence declining at the map's edges.
**Zone deployment:** Every zone gets one border weight. The gradient runs from cartouche (heaviest) to terra incognita (lightest).

### 2.5 Density Contrast at Transitions `[NOVEL]`

**Selected because:** The content's most powerful moments rely on CONTRAST: the $2000 story devastates because it follows abstraction. The Flutterwhat critique lands because it follows dense architecture. The TC brief identifies the Part V -> Part VI transition as the CLIMAX — maximum visual contrast coincides with the Goodhart's Law warning. Three critical transitions must produce perceptible density shifts.
**Finding basis:** R3-Insight-29 (density contrast), R5-H2 (contrast creates harmony), R3-Insight-30 (density debt/recovery), R4-3.2 (cinematic wide/close/wide), Validated mode-transition breathing
**CSS implementation:**
```css
/* Transition 1: Cartouche -> Grid (library -> workshop) */
/* Background: #FEF9F5 -> #FFFFFF. Padding: 64px -> 40px. Heading: display -> section. */
.transition--cartouche-to-grid {
  border-top: 3px solid var(--color-primary);
  padding-top: 48px;
  margin-top: 0;
}

/* Transition 2: Grid -> Annotations (workshop -> field) THE CLIMAX */
/* Background: #FFFFFF -> #FAF5ED. Padding: 40px -> 48px. Voice shifts to annotator. */
.transition--grid-to-annotations {
  border-top: 3px solid var(--color-primary);
  padding-top: 56px;  /* Extra breathing — the page exhales before Goodhart's Law */
  margin-top: 32px;   /* Additional gap: density debt payment */
}

/* Transition 3: Annotations -> Legend (field -> completed map) */
/* Background: -> #FEF9F5. Instrument Serif returns for the cartographer's inscription. */
.transition--annotations-to-legend {
  border-top: 1px solid var(--color-border);
  padding-top: 48px;
}
```
**Expected visual evidence:** Three visible "gear shifts" on the page. The Part V -> Part VI transition should produce the strongest visual exhale — the page opens dramatically before the Goodhart warning. The cartouche -> grid transition should feel like stepping into a tighter space. The annotations -> legend transition should feel like returning home.
**Zone deployment:** Between zone boundaries only. Three transitions total.

### 2.6 Pull Quotes as Legend Entries `[STANDARD]`

**Selected because:** The content has 7 key quotes (Part XIII) plus major blockquotes throughout. The TC brief requests that key quotes become "legend entries" — the map's symbol key, with semantic left-border colors encoding what each symbol means (blue for self-legibility, amber for warnings, coral for capability claims).
**Finding basis:** R2-1.2 (pull quotes as structural elements), TC brief Invitation 2 (legend entry color coding)
**CSS implementation:**
```css
blockquote {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.4;
  padding: 24px 32px;
  margin: 40px 0 40px -16px; /* Slight left-bleed beyond content column */
}
/* Legend entry color system — blue for self-legibility, amber for warnings */
.quote--self-legibility { border-left: 4px solid #4A90D9; }
.quote--warning { border-left: 4px solid #D97706; }
.quote--capability { border-left: 4px solid #E83025; }
```
**Expected visual evidence:** Blockquotes visually interrupt page flow. Part XIII quotes each carry a distinct left-border color, creating a legend-like symbol system the reader learns to decode.
**Zone deployment:** Cartouche (the "violent gap" quote), Annotations (Goodhart's Law), Legend (all 7 key quotes with color coding).

### 2.7 Asymmetric Margins for Annotations `[NOVEL]`

**Selected because:** The TC brief explicitly requests that Parts VI-VII (philosophical warnings, Flutterwhat critique) receive asymmetric treatment — wider left margin, standard right margin — marking them as marginal annotations written AFTER the main survey in a different hand. This resolves the Secondary Opposition (Dialectical Holding vs. Verdict-Drive): the main survey ASSERTS, the margins QUESTION.
**Finding basis:** TC brief Invitation 4, R3-Insight-29 (density contrast), Cross-Reference 5 (annotations as structural counterpoint)
**CSS implementation:**
```css
.zone--annotations blockquote {
  margin-left: 48px;   /* Written in the margin — asymmetric */
  margin-right: 0;
  font-size: 0.9375rem; /* Annotator voice — slightly reduced */
  color: #666666;
}
.zone--annotations .critique-attribution {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: #666666;
  /* @flutterwhat, @provisionalidea — another hand on the map */
}
```
**Expected visual evidence:** Blockquotes in Parts VI-VII feel asymmetrically positioned — like handwritten annotations at the map's edge. The Flutterwhat critique should feel visually distinct from the main survey.
**Zone deployment:** Annotations zone only (Parts VI-VII).

### 2.8 Fractal Self-Similarity at 4 Scales `[STANDARD]`

**Selected because:** The content has natural density at 4 levels: page (zone-level rhythm), section (Part-level padding), component (code block vs blockquote internal spacing), and character (heading letter-spacing tightening from H2 to H4). This produces the fractal principle: squinting at the page reveals the same sparse-dense-sparse rhythm that zooming into a single section reveals.
**Finding basis:** R3-Insight-23 (fractal self-similarity), Validated DD-F-006 at 5 scales (ELEVATED + BOUNDED at 5; this build uses 4 of the 5), AD-F-028 (no 6th scale)
**CSS implementation:**
```css
/* Page scale: zone padding varies 40-80px */
/* Section scale: internal paragraph spacing 16-24px */
/* Component scale: code blocks 16px padding, blockquotes 24px padding */
/* Character scale: heading letter-spacing tightens */
h2 { letter-spacing: -0.02em; margin-bottom: 32px; }
h3 { letter-spacing: -0.01em; margin-bottom: 24px; font-style: italic; }
h4 { letter-spacing: -0.005em; margin-bottom: 16px; }
```
**Expected visual evidence:** At 50% zoom, page-level sparse/dense rhythm visible. At 100%, section-level variation within zones visible. At 150%, component-level padding differences visible.
**Zone deployment:** All zones. The fractal principle is universal.

---

## 9. CONSUMPTION PROTOCOL

READ this package in this order. Each step builds on the previous:

1. **READ** Section 0 (Soul Checklist) — Establish hard boundaries. These are physics.
   The cartographic metaphor cannot override these. `border-radius: 0` because maps
   have ruled edges. `box-shadow: none` because maps are flat. Know these BEFORE
   encountering the metaphor to avoid decorative cartographic temptation.

2. **INTERNALIZE** Section 1 (Build Context) — Absorb the survey station metaphor.
   Let it shape perception before you see mechanisms. The 8-domain code blocks are
   survey coordinates, not generic code snippets. That framing changes their CSS
   treatment. Compose FROM conviction (the cartouche opens with parchment spacing
   because a surveyor stands on a hilltop), not FROM tools.

3. **STUDY** Section 2 (Mechanisms) — Each was selected FOR this content. Read the
   rationale. Understand WHY background arc progression serves the survey's temporal
   journey, not just WHAT colors to use.

4. **BUILD** the HTML skeleton: zones first (Cartouche, Grid, Annotations, Field Notes,
   Legend, Terra Incognita), then zone backgrounds, then zone spacing, then headers/footer,
   then content placement into zones.

5. **WRITE** `_pass-1-decisions.md` after building: what zones you created, which mechanisms
   deployed, what spacing values you chose, any departures from the package with rationale.

**Anti-orphaning:** Before writing any CSS rule, identify its source:
- Soul constraint -> Section 0 checklist
- Metaphor/spatial direction -> Section 1 build context
- Mechanism name -> Section 2 (with finding IDs)
- Token value -> tokens.css
If a CSS rule has no identifiable source, question whether it belongs.

---

## Agent Log: Synthesizer (Pass 1)
- Specialist inputs consumed: S1 (225 lines), S2 (150 lines), S3 (416 lines), S4 (378 lines), S5 (151 lines), TC brief (144 lines), content (949 lines)
- Deduplication actions: Merged S1 geological model (R3-Insight-5) with S2 validated DD-F-004 and S3 DD-004 case study into single background arc mechanism. Merged S1 typography findings (R2-5.1, R1-5.2, R4-3.1) with S2 CRESCENDO typography compression into single five-voice mechanism. Merged S1 spacing findings (R5-Q2, R1-1.1) with S2 CRESCENDO two-level model and S3 DD-004 compression gradient into single spacing mechanism.
- Conflict resolutions: S1 rated fractal self-similarity at 5 scales; S3 rejected DD-006 fractal as non-primary for this content. Resolved via TC brief: deployed at 4 scales (excluding navigation TOC, which this content does not demand). S2 identifies PULSE as relevant; S1 does not list it as a mechanism. Resolved: PULSE manifests intrinsically through content alternation (philosophy/code) — no separate mechanism needed; the background arc + spacing compression encode it.
- Output size: 190 lines
