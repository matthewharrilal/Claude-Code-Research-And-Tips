# Research Package -- Pass 1: FOUNDATIONS
## For Builder Pass 1 (STRUCTURE)

You are building the initial HTML skeleton for Molly Cantillon's Personal Panopticon. This package establishes boundaries, creative direction, mechanisms, and compositional questions. READ Section 9 (Consumption Protocol) to understand the optimal absorption sequence.

---

## 0. SOUL CHECKLIST (VERIFY BEFORE AND AFTER BUILD)

```
[ ] border-radius: 0 on ALL elements -- no domain card, no code block, no grid cell, no pseudo-element
[ ] box-shadow: none on ALL elements -- no card lift, no domain shadows, no floating elements
[ ] No filter: drop-shadow() anywhere
[ ] No CSS gradients (linear-gradient, radial-gradient) -- solid zone backgrounds only
[ ] No semi-transparent backgrounds -- opacity === 1.0 on ALL visual elements (rgba with alpha < 1 is the MOST COMMON violation)
[ ] No fake depth, blur effects, or parallax -- the cartographic survey station is FLAT, like a map table
[ ] Locked palette: #E83025 (primary), #1A1A1A (text/bedrock), #FEF9F5 (cream bg), #E0D5C5 (border), #F0EBE3 (subtle), #666666 (secondary text), plus 5 accents (#4A90D9, #4A9D6B, #C97065, #D97706, #7C3AED)
[ ] Font trinity ONLY: Instrument Serif (display headings, Essence callout body), Inter (all body text, labels, UI), JetBrains Mono (code blocks, directory paths, bash scripts)
[ ] Spacing from 4px base scale: 4/8/12/16/20/24/32/40/48/64/80px -- no off-scale values
[ ] 3-category borders ONLY: 1px (separator/data), 3px (structural), 4px (semantic accent). ZERO 2px.
[ ] Max 2 callouts per viewport section (~800px vertical)
[ ] h3 always italic: font-family: var(--font-display); font-style: italic
[ ] No hover lift effects (transform: translateY) -- content is editorial, not interactive
[ ] No CSS animation implying object movement
[ ] Visual page ending REQUIRED -- footer with 3px border-top, page must NOT trail off into empty cream
[ ] No dead space > 300px vertical between content sections
```

---

## 1. BUILD CONTEXT

**Metaphor:** The page is a cartographic survey station -- the reader maps their own territory using angular instruments on flat surfaces, dividing life into measurable quadrants while knowing the map will never be the territory.

**Emotional Arc:** The reader arrives exposed ("They can see you. You cannot see yourself.") and descends through structured measurement into dark philosophical terrain where contour lines tighten around Goodhart's Law, the prison objection, and the Flutterwhat critique. At ~65% scroll depth, the terrain is most difficult. Then the reader emerges into light, takes the instruments themselves, and begins mapping their own territory. The arc is provocation --> structure --> compression --> philosophical density --> opening invitation.

**Content --> Zone Map:**
1. Part I (Philosophy of Self-Legibility) --> **THE DATUM POINT** (opening) -- sparse, provocation, the benchmark
2. Parts II-III (8-Domain Architecture, Isolation Principles) --> **THE SURVEY GRID** (architecture) -- moderate, structured
3. Parts IV-V (Implementation, What She Built) --> **THE FIELD NOTES** (implementation) -- dense, technical, code-heavy
4. Parts VI-X (Philosophy, Warnings, Critique, CLAUDE.md, Correlation, Anti-Patterns) --> **THE CONTOUR MAP** (philosophy + debate) -- densest, dark background, dialectical tension
5. Parts XI-XVII (Extensions, Tutorial, Quotes, Summary, Synthesis) --> **THE PROJECTION** (resolution + action) -- moderate-to-sparse, reader becomes surveyor

**Spatial Direction:** Vertical editorial descent through 5 atmospherically distinct zones. One non-standard spatial section: the 8-domain taxonomy as a bento grid (Survey Grid zone). All other sections follow vertical editorial flow with register shifts.

**Zone Architecture Overview** (condensed -- the Pass 1 builder NEEDS this to create zones correctly):
- Zone count: 5 zones
- Density progression: SPARSE --> MODERATE --> DENSE --> DENSE-WITH-VARIATION --> MODERATE-TO-SPARSE
- Background arc: #FEF9F5 cream --> #FFFFFF white --> #FAF5ED earthy tan --> #1A1A1A near-black --> #FEF9F5 cream
- Semantic direction: ESTABLISHING --> GRIDDING --> RECORDING --> INTERPRETING --> PROJECTING

```
DATUM POINT:   ····                    [SPARSE -- wide-open benchmark, generous spacing]
SURVEY GRID:   ············            [MODERATE -- structured grid, measured precision]
FIELD NOTES:   ··················####  [DENSE -- packed notebook, code-heavy]
CONTOUR MAP:   ######################  [DENSEST -- philosophical peak, dark terrain]
PROJECTION:    ··········             [MODERATE -- opening out, reader takes instruments]
```

- Key spacing: Datum 64-80px | Grid 40-48px | Notes 32-40px | Contour 32-48px variable | Projection 48-64px
- Transition types: Datum-->Grid = BRIDGE | Grid-->Notes = SMOOTH | Notes-->Contour = BREATHING (biggest shift) | Contour-->Projection = BRIDGE

---

## 2. MECHANISM SELECTIONS

### 2.1 Zone Background Progression `[NOVEL]`

**Selected because:** The survey station descends through geological strata -- open field to bedrock cave. The 5-zone arc IS the spatial logic made visual. Validated across 4+ case studies (DD-004, DD-006, OD-004, DD-003).
**Finding basis:** R3-024, R3-005, DD-F-004, S2 Tier 1 3-way unification.
**CSS:**
```css
/* PACKAGE S2-M01: Zone Background Progression -- descent-and-return */
.zone--datum-point { background: var(--color-bg); }          /* #FEF9F5 cream -- open field */
.zone--survey-grid { background: #FFFFFF; }                   /* White -- drafting table */
.zone--field-notes { background: #FAF5ED; }                   /* Earthy tan -- worn notebook */
.zone--contour-map { background: var(--color-text); color: var(--color-bg); } /* #1A1A1A -- cave */
.zone--projection  { background: var(--color-bg); }           /* Return to cream */
```
**Evidence:** Scrolling produces atmospheric descent -- cream to white to tan to near-black to cream. Dark zone at ~65% feels like entering a cave.
**Zones:** All 5. This IS the zone system.

### 2.2 Fractal Self-Similarity at 5 Scales `[NOVEL]`

**Selected because:** Same sparse-dense patterns at map scale and contour-line scale. The CRESCENDO arc repeats at smaller scales within each zone. Highest-confidence finding in the system.
**Finding basis:** DD-F-006 (36/40), S2 ELEVATED (4 stages). Bounded at exactly 5 scales (AD-F-028).
**CSS:**
```css
/* PACKAGE S2-M02: Fractal Self-Similarity at 5 scales */
.zone--datum-point .section { padding: 64px 0; }  /* Page scale: sparse */
.zone--field-notes .section { padding: 32px 0; }  /* Page scale: dense */
.callout__label { padding: 8px 16px; }             /* Component scale: sparse */
.callout__body  { padding: 16px; }                 /* Component scale: dense */
.zone-heading { letter-spacing: -0.025em; }        /* Character scale: tight */
.zone-body    { letter-spacing: 0; line-height: 1.7; } /* Character scale: open */
```
**Evidence:** At 50% zoom: sparse-dense-sparse across zones. At 100%: same rhythm within zones. At 150%: same within components. Do NOT attempt a 6th scale.
**Zones:** All 5 -- the fractal rhythm is global.

### 2.3 Border-Weight Gradient as Cartographic Encoding `[NOVEL]`

**Selected because:** Survey maps use major grid lines (thick) and minor grid lines (thin). The 3-category border system maps to cartographic precision: 4px = triangulated (maximum confidence), 3px = measured framing, 1px = extrapolated contour lines. 2px BANNED.
**Finding basis:** DD-F-004 --> AD-F-014 (3 stages BOUNDED). OD-F-AP-001 (2px epidemic avoided).
**CSS:**
```css
/* PACKAGE S2-M03: Border-Weight Gradient -- survey precision */
.zone-boundary      { border-top: 4px solid var(--color-text); }   /* Triangulated */
.domain-card        { border-left: 3px solid var(--color-text); }   /* Measured */
.table-row          { border-bottom: 1px solid var(--color-border); } /* Contour line */
.footer             { border-top: 3px solid var(--color-primary); }  /* Structural */
```
**Evidence:** Heavy marks at zone boundaries (4px/3px), fine lines within zones (1px). In the Contour Map, 1px borders increase in frequency -- contour lines compressing on steep terrain.
**Zones:** All -- weight descends: Datum (4px) --> Grid (3px) --> Notes (1px) --> Contour (1px frequent) --> Projection (3px return).

### 2.4 Typography Compression / CRESCENDO `[NOVEL]`

**Selected because:** This content has a clear climax at the Contour Map (~65% scroll). Typography compresses toward the peak: headings shrink, line-height tightens, letter-spacing compresses -- then RELEASES in the Projection. The notebook tightens its handwriting as measurements get more precise.
**Finding basis:** DD-F-002 (35/40), AD-F-006. S2 Chain 5, BOUNDED -- must have definite peak and release.
**CSS:**
```css
/* PACKAGE S2-M04: Typography Compression -- CRESCENDO */
.zone--datum-point  { font-size: 16px; line-height: 1.8; letter-spacing: 0; }
.zone--survey-grid  { font-size: 16px; line-height: 1.7; letter-spacing: -0.003em; }
.zone--field-notes  { font-size: 15px; line-height: 1.6; letter-spacing: -0.005em; }
.zone--contour-map  { font-size: 15px; line-height: 1.55; letter-spacing: -0.008em; } /* PEAK */
.zone--projection   { font-size: 16px; line-height: 1.7; letter-spacing: 0; }        /* RELEASE */
.zone--datum-point h2 { font-size: 32px; } .zone--contour-map h2 { font-size: 24px; }
```
**Evidence:** Text gradually tightens from Datum to Contour Map. Maximum compression at the dark zone. Projection opens back up. Felt, not consciously noticed.
**Zones:** All 5 in sequence -- this mechanism IS the CRESCENDO.

### 2.5 PULSE for Alternating Content `[NOVEL]`

**Selected because:** Multiple alternating structures naturally generate PULSE: dialectical exchanges (Cantillon vs. critics), anti-pattern symptom/solution pairs, domain pairs. Width differential (60%/100%) is the validated spatial PULSE mechanism.
**Finding basis:** DD-F-001 (33/40), OD-F-003, AD-F-002. S2 ELEVATED (3 stages).
**CSS:**
```css
/* PACKAGE S2-M05: PULSE -- bilateral rhythm */
.dialectic-critic    { max-width: 60%; padding: 16px 20px; background: var(--color-border-subtle); }
.dialectic-cantillon { max-width: 100%; padding: 0; }
.antipattern-symptom  { border-left: 3px solid var(--color-warning); }
.antipattern-solution { background: var(--color-border-subtle); border-left: 3px solid var(--color-success); }
```
**Evidence:** Critique-response exchanges alternate narrow/full-width. The alternation IS PULSE.
**Zones:** Contour Map (dialectical), Survey Grid (domain pairs), Projection (anti-patterns).

### 2.6 Density Contrast -- Warm Element in Dark Zone `[NOVEL]`

**Selected because:** TC brief experimental question: "What if the Contour Map contains a SINGLE warm element?" Cantillon's quotes ARE the terrain. In the dark zone, a cream-background blockquote creates maximum contrast -- the surveyor's lamp in a dark cave.
**Finding basis:** R3-029, TC-BRIEF S5 experimental question, R2-001. S1 + TC converge.
**CSS:**
```css
/* PACKAGE S2-M06: Density Contrast -- surveyor's lamp */
.zone--contour-map blockquote {
  background: var(--color-bg); color: var(--color-text); /* Cream on dark */
  padding: 24px 28px; border-left: 4px solid var(--color-primary);
  font-family: var(--font-display); font-style: italic;
  font-size: 1.15rem; line-height: 1.5; margin: 40px 0;
}
blockquote { /* Light zones: standard treatment */
  border-left: 4px solid var(--color-accent-blue); padding-left: 24px;
  font-family: var(--font-display); font-style: italic;
  font-size: 1.15rem; line-height: 1.5; margin: 40px 0;
}
```
**Evidence:** Dark-zone blockquotes glow as warm cream islands against near-black -- single points of light that arrest scrolling.
**Zones:** Contour Map (warm lamp), all light zones (standard blockquote).

### 2.7 Three-Register Typography `[STANDARD]`

**Selected because:** Three natural information strata: Surface (philosophy in Instrument Serif), Sediment (architecture in Inter), Bedrock (bash/cron in JetBrains Mono). The three registers shift in PROPORTION across zones -- Datum Point is serif-heavy, Field Notes is mono-heavy.
**Finding basis:** R3-005, R1-005, COMP-F-002, OD-F-010.
**CSS:**
```css
/* PACKAGE S2-M07: Three-Register Typography */
.zone-heading, blockquote { font-family: var(--font-display); font-weight: 500; } /* Surface */
body, p, .callout__body   { font-family: var(--font-body); font-weight: 400; }    /* Sediment */
code, pre, .domain-path   { font-family: var(--font-mono); font-size: 0.875rem; } /* Bedrock */
```
**Evidence:** Three distinct registers visible. Cover borders and color -- page structure still legible from typography alone.
**Zones:** All -- register proportions shift per zone.

### 2.8 Dark Full-Bleed Header `[STANDARD]`

**Selected because:** Validated "universal amplifier" across all 18 explorations. Dark header = institutional gaze ("They can see you"); warm cream Datum Point = personal survey. The inversion IS the central argument.
**Finding basis:** AD-PA-CONVENTIONS C-04, OD Discovery 2.
**CSS:**
```css
/* PACKAGE S2-M08: Dark Header -- institutional gaze */
.page-header {
  background: var(--color-text); color: var(--color-bg);
  padding: 64px 0; border-bottom: 3px solid var(--color-primary);
}
.page-header h1 { font-family: var(--font-display); font-size: 2.5rem; font-weight: 500; letter-spacing: -0.025em; }
```
**Evidence:** Dark header signals editorial authority. 3px border-bottom marks the institutional-to-personal inversion.
**Zones:** Page header only (ABOVE Zone 1). The dark header is NOT the Datum Point.

---

## 9. CONSUMPTION PROTOCOL

READ this package in this order. Each step builds on the previous:

1. **READ** Section 0 (Soul Checklist) -- Establish what is IMPOSSIBLE. Soul constraints are physics: border-radius: 0, box-shadow: none, the typography trinity, the 3-category border system. Internalize the boundary conditions before encountering creative invitations.
2. **INTERNALIZE** Section 1 (Build Context) -- Absorb the cartographic survey station metaphor BEFORE reading mechanism selections. The surveyor's grid, contour lines, datum points, and projection shifts are the creative vocabulary. Build FROM conviction, not FROM tools.
3. **STUDY** Section 2 (Mechanisms) -- Each mechanism was selected FOR this content's cartographic metaphor and 5-zone architecture. Read the rationale. Understand WHY each was chosen -- they are reasoned responses to the content's tensions (recursive self-observation, bilateral symmetry, parallel isolation, empowerment-plus-warning).
4. **EXPLORE** Section 10 (Compositional Questions) -- Select 2-3 to explore during build. These invitations generate multi-channel CSS decisions you would not make from mechanisms alone.
5. **EVALUATE** Section 11 (Structural Propositions) -- Decide ADOPT / MODIFY / REJECT for each. If adopted, follow the Standard/Structural build path.
6. **BUILD** the HTML skeleton: zones first, then mechanisms, then responsive.
7. As you build, let questions from Section 10 INFORM your CSS decisions across multiple channels simultaneously.
8. After Pass 1, write `_pass-1-decisions.md`: what you built, which mechanisms deployed, which questions explored, which channels affected.

**Anti-orphaning:** Before writing any CSS rule, identify its source:
- `/* PACKAGE S2-M[NN]: ... */` -- Mechanism from Section 2
- `/* FINDING [ID]: ... */` -- Research finding from Section 3 (Pass 2)
- `/* CASE-STUDY [ID]: ... */` -- Case study technique from Section 5 (Pass 2)
- `/* SOUL: ... */` -- Soul constraint from Section 0 / tokens.css
- `/* TC-BRIEF: ... */` -- Conviction brief direction from Section 1
- `/* QUESTION Q[N]: ... */` -- Compositional question from Section 10
- `/* STRUCTURAL: [content-logic] -- [spatial form] */` -- Structural invention from Section 11

If a CSS rule has no identifiable source, question whether it belongs.

---

## 10. COMPOSITIONAL QUESTIONS

These questions are INVITATIONS, not requirements. Each one, if explored, can generate multi-channel CSS decisions you would not make from mechanisms alone. EXPLORE 2-3 during your build. Do not attempt all.

### From Your Content's Metaphor (TC Brief -- preserved verbatim)

**Q1.** What if the visual weight of each domain in the 8-domain grid encoded its time horizon -- daily domains (trades, email) with heavier borders and tighter spacing than quarterly domains (health, writing), so the reader FEELS temporal urgency varying across the grid before reading any description?
   --> Invocation: when building the bento grid, vary border-weight and padding per card
   --> Channels: border-width, padding, bg-color temperature, font-size, grid-template-columns

**Q2.** What if every zone boundary performed a cartographic projection shift -- typography size, spacing, and border weight all shifting in synchronized ratios, so each zone feels like zooming into a different map resolution?
   --> Invocation: at each zone boundary, test whether font-size, padding, border-width, line-height, and letter-spacing ALL shift proportionally
   --> Channels: font-size, padding, margin, border-width, line-height, letter-spacing

**Q3.** What if the transition into the dark contour-map zone was not a clean break but a gradual tightening -- contour lines (1px borders) appearing with increasing frequency, spacing compressing, backgrounds cooling degree by degree -- so the reader does not notice the descent until they are already deep?
   --> Invocation: in Field Notes, progressively increase border-bottom frequency, cool background, compress padding
   --> Channels: border-bottom frequency, padding compression, bg-color cooling, font-size, line-height

### Adapted from Proven Question Families (Knowledge Base)

**Q4.** [Adapted from OD-004 Certainty Encoding]: What if visual weight encoded epistemic confidence -- proven architecture (8 domains) with 4px borders, reported results ($2,000 subscriptions) with 3px, philosophical interpretation (panopticon inversion) with 1px and wider line-height -- so the reader distinguishes bedrock from speculation visually?
   --> Invocation: test 4px/3px/1px gradient on border-left across content sections
   --> Channels: border-left width, padding, line-height, font-weight

**Q5.** [Adapted from DD-006 Fractal]: What if the CRESCENDO arc repeated at 3 scales -- page (5 zones), zone (subsections within each zone), and component (callout label/body) -- so squinting reveals the same breathing rhythm at every level?
   --> Invocation: test whether subsection spacing also follows sparse-entry --> dense-body --> sparse-exit
   --> Channels: padding ratios, font-size ratios, paragraph spacing, callout proportions

**Q6.** [Adapted from DD-004 Atmospheric Signature]: What if each zone's code blocks carried a different atmospheric signature -- Survey Grid on clinical white (drafting table), Field Notes on earthy tan (worn notebook), Contour Map on dark-gray (cave wall) -- so the same monospace text FEELS different because context has changed?
   --> Invocation: vary code block background and border-color per zone
   --> Channels: code bg-color, border-color, text-color, padding, border-weight

### Cross-Specialist Synthesis (Emergent)

**Q7.** [Derived from S1 + S3 + S4 intersection]: What if the 8-domain bento grid served as the page's ONLY structural highlight -- a single moment of spatial revelation surrounded by editorial flow -- so the grid feels like the surveyor stepping back to see all quadrants, and the return to vertical feels like picking the notebook back up?
   --> Invocation: test whether transition back to vertical after grid creates perceptible "return to reading"
   --> Channels: grid-template-columns, gap, container width, transition padding, border treatment

---

## 11. STRUCTURAL PROPOSITIONS (INVITATIONS, NOT REQUIREMENTS)

The builder decides ADOPT / MODIFY / REJECT for each proposition. Every proposition is optional. Standard vertical is always valid.

### Proposition 1: 8-Domain Taxonomy as Survey Grid (Bento Layout)

**Content logic:** 8 independent, isolated domains run simultaneously with a clean 4+4 subdivision (work vs. life). Listing vertically imposes a false hierarchy. The reader MUST see them as a FIELD.
**Spatial question:** How can 8 domains be perceived as a simultaneous field -- scannable before reading individual details?
**Precedent:** DD-003 (Islands, HIGH affinity). S1 convergence (5 findings: R4-001, R2-006, R2-004, R5-G1, TC Q1). S2: AD-F-009, AD-F-024.
**Blueprint CSS:**
```css
/* STRUCTURAL: 8 parallel domains -- bento grid */
.survey-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px; max-width: 960px; margin: 0 auto; padding: 32px 0; }
.domain-quadrant { background: #FFFFFF; border-left: 4px solid var(--color-text); padding: 24px; }
.domain-quadrant__label { font-family: var(--font-mono); font-size: 13px;
  text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-secondary); }
@media (max-width: 768px) { .survey-grid { grid-template-columns: 1fr; } }
```
**Risk:** LOW -- DD-003 validates. **Alternative:** Vertical card sequence with 32px spacing.

### Proposition 2: Bilateral Gaze in Datum Point (Asymmetric Visual Weight)

**Content logic:** The opening provocation ("They can see you. You cannot see yourself.") IS bilateral tension. Make the ASYMMETRY visible: one side dense (institutional apparatus), the other open (personal blindness).
**Spatial question:** Can the reader perceive power asymmetry before reading -- institutional heaviness on one margin, personal openness on the other?
**Precedent:** No direct precedent. Derived from TC S5 Invitation 1 + S2 Q5. Novel territory.
**Blueprint CSS:**
```css
/* STRUCTURAL: Bilateral gaze -- asymmetric weight */
.bilateral-provocation { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; padding: 48px 0; }
.bilateral--institutional { border-left: 4px solid var(--color-text); padding-left: 24px; font-weight: 500; }
.bilateral--personal { border: none; color: var(--color-text-secondary); }
@media (max-width: 768px) { .bilateral-provocation { grid-template-columns: 1fr; } }
```
**Risk:** HIGH -- no precedent. **Alternative:** Single full-width Instrument Serif display heading with 80px spacing.

---

## Agent Log: Synthesizer (Pass 1)
- Specialist inputs consumed: S1 (307 lines), S2 (179 lines), S3 (391 lines), S4 (259 lines), S5 (177 lines), TC brief (396 lines), Content (950 lines), Exemplar (341 lines)
- Deduplication actions: Merged S1 R3-024 (density strata) with S2 DD-F-004 (layers chain) into M01. Merged S1 R3-023 (fractal) with S2 DD-F-006 (fractal chain, ELEVATED) into M02. Merged S1 R3-005 (geological model) with S3 OD-004 (confidence) into border-weight gradient M03. Merged S1 density rhythm findings (R3-003, R1-001) with S2 CRESCENDO chain into M04.
- Conflict resolutions: S1 rates R2-005 (overlapping z-index) MEDIUM. S4 identifies ANTI-PHYSICAL identity constraint (no depth). Resolution: EXCLUDED overlapping z-index per S4 soul constraint. S4 convention proposes dark header; TC brief assigns warm cream to Datum Point. Resolution: dark header sits ABOVE Datum Point zone (institutional gaze), Datum Point opens in warm cream (personal survey).
- TC questions preserved: 3 verbatim (Q1-Q3), 1 experimental question folded into M06 mechanism
- Structural propositions assembled: 2 (bento grid from TC S7 + S3 DD-003 + S1 convergence; bilateral gaze from TC S5 invitation 1)
- KB questions adapted: 3 from Certainty Encoding (Q4), Fractal Self-Similarity (Q5), Atmospheric Signature (Q6)
- Cross-specialist question: 1 (Q7) -- derived from S1 density contrast + S3 archipelago + S4 structural overload constraint intersection
- Output size: ~340 lines
