# B1 -- Temporal Composition: Scroll Rhythm, Anticipation, and Memory in Static CSS

**Author:** temporal-investigator (Opus 4.6)
**Date:** 2026-02-22
**Task:** #32 -- Deep investigation of what temporal composition means in CSS terms, where it exists (and is absent) in Gas Town and CD-006, and whether it can be specified in a pipeline.

**Source material:**
- `51-beyond-eight-independence-analysis.md` (610 lines -- identifies M-01 Temporal Composition as missing)
- `53-dimensional-gap-analysis.md` (464 lines -- narrative pacing as partial blind spot)
- `55-flagship-crystallization.md` (720 lines -- viewport-by-viewport scroll walkthrough)
- `57-compositional-fluency-deep.md` (510 lines -- three registers of fluency, CCS analysis)
- `ephemeral/pages/gas-town-steve-yegge/output.html` (1,509 lines -- live CSS + section structure)
- `design-system/validated-explorations/combination/CD-006-pilot-migration.html` (CSS analysis, 1,500+ lines)

---

## 0. WHY "TEMPORAL" FOR A STATIC MEDIUM?

A static HTML page has no animation, no video, no temporal dimension in the literal sense. Yet every reader experiences a page TEMPORALLY: they scroll. The scroll creates a sequence. The sequence creates an experience that unfolds over time -- measured not in seconds but in viewport-heights.

Temporal composition is the design of this sequential experience. It answers: **what does the reader encounter, in what order, at what rhythm, and how do earlier encounters shape the perception of later ones?**

This is distinct from SPATIAL composition (how elements relate to each other within a single viewport) and from ATMOSPHERIC composition (how CSS channels co-vary across zone boundaries). Temporal composition concerns the ORDERING and PACING of experiences as the reader moves through the page's full scroll height.

The source material identifies temporal composition (M-01) as one of six missing concepts in the beyond-eight framework. Report 51 notes: "The 40 concepts are all SPATIAL -- they concern what the page looks like at any moment. But pages are experienced TEMPORALLY." Report 53 classifies narrative pacing as PARTIALLY ADDRESSED, noting that the architectural framework exists (transition grammar, coherence arc) but the specificity of content-form coupling is weak.

This investigation goes deeper than either report. It asks: what IS scroll rhythm concretely, in CSS property terms?

---

## 1. WHAT IS SCROLL RHYTHM IN CSS TERMS?

### 1.1 Definition

Scroll rhythm is the **pattern of visual density variation across the page's scroll height**. It is the sequence of experiences the reader encounters viewport-by-viewport. A page with good scroll rhythm feels like music -- it has measures, phrases, dynamics. A page with poor scroll rhythm feels like a wall of text or a series of disconnected slides.

### 1.2 The CSS Properties That Create Scroll Rhythm

Scroll rhythm is NOT a single CSS property. It emerges from the INTERACTION of multiple properties across scroll distance. The properties that contribute:

**A. Section height variation (the "measure length")**

Section height = content volume + padding + component height. The VARIATION in section height across the page creates the basic rhythmic structure. A page where every section is 800px tall has a metronomic rhythm. A page where sections alternate between 400px and 1200px has a waltz rhythm.

In CSS terms:
```css
/* Metronomic (no rhythm) */
section { padding: 64px 80px; }  /* every section same padding */

/* Rhythmic */
.zone-1 { padding: 64px 80px; }  /* OPENING: generous -- ~600px total */
.zone-2 { padding: 40px 80px; }  /* DEEPENING: tighter -- ~1400px total (more content) */
.zone-3 { padding: 32px 64px; }  /* DEEPENING: densest -- ~2200px total (most content) */
.zone-4 { padding: 32px 80px 48px; }  /* RESOLVING: release -- ~800px total */
```

Gas Town demonstrates this: Zone 1 (~600px), Zone 2 (~1800px), Zone 3 (~2400px), Zone 4 (~1200px). The scroll rhythm is SHORT-LONG-LONGEST-MODERATE, which creates an experience of deepening engagement followed by resolution. This is a valid temporal pattern.

CD-006 has a different structure: 8 sections of ROUGHLY SIMILAR height (each ~800-1200px), separated by transition elements. This creates a more REGULAR rhythm -- like steady 4/4 time. Each section is a self-contained movement, and the transitions act as breath marks between them.

**B. Visual density variation (the "dynamics")**

Visual density = the amount of visual information per viewport. A viewport showing a single pull-quote in large serif italic has LOW density. A viewport showing a bento grid with 4 data cells, a code block, and a callout has HIGH density. The alternation between high-density and low-density viewports creates dynamics -- the scroll equivalent of loud and quiet.

In CSS terms, density is controlled by:
- Component count per section (more components = denser)
- Component complexity (bento grid > paragraph > blockquote)
- Spacing between elements (`margin-bottom`, `gap`)
- Background differentiation (colored backgrounds create visual weight)
- Typography weight (`font-weight: 600` reads denser than `400`)

Gas Town's density arc: Zone 1 is SPARSE (paragraphs + one blockquote + source meta). Zone 2 is MODERATE (data table + file tree + bento grid of role cards). Zone 3 is DENSE (multiple callouts + inline code + tables + subsections). Zone 4 is MODERATE (extension cards + code block + mental model box). The arc is: sparse -> moderate -> dense -> moderate. This is a CRESCENDO-THEN-RELEASE pattern.

CD-006's density arc: Section 1 (spiral strata + core abstraction + callouts), Section 2 (Z-pattern grid + Q&A blocks + code blocks + callouts), Section 3 (bento grid with 4 cells containing code blocks and callouts), Section 4 (F-pattern + decision matrix + core abstraction), Section 5 (Z-hero + reasoning component + task component), Section 6 (bento grid with task lists), Section 7 (choreography + spokes), Section 8 (spiral + essence callout). The arc is: medium -> high -> high -> very-high -> high -> medium -> medium -> low. This is a PLATEAU pattern with mild taper -- dense through the middle, releasing at the ends.

**C. Transition weight variation (the "articulation")**

Transitions between sections create rhythmic articulation -- the equivalent of staccato vs legato. A smooth transition (1px border + 48px gap) creates legato flow. A breathing transition (3px border + 80px gap) creates a full rest. A bridge transition (colored background + text) creates a narrative breath.

CD-006 uses three transition types:
```css
.transition--smooth   { margin: 48px 0; border-top: 1px; }        /* legato */
.transition--bridge   { margin: 64px 0; background: #FAF5ED; }    /* breath */
.transition--breathing { margin: 80px 0; border-top: 3px; }       /* full rest */
```

The sequence in CD-006: BREATHING (S1->S2), BRIDGE (S2->S3), BRIDGE (S3->S4), SMOOTH (S4->S5), BREATHING (S5->S6), SMOOTH (S6->S7), SMOOTH (S7->S8). This creates a temporal pattern of: rest -> breath -> breath -> flow -> rest -> flow -> flow. The heavier transitions at the S1/S2 boundary and S5/S6 boundary divide the page into three ACTS.

Gas Town uses a different approach: hard cuts (3px primary border between zones) and one checkpoint bar. The sequence: HEADER->Z1 (breathing space), Z1->Z2 (3px primary hard cut), Z2->Z3 (spacing compression only -- no explicit transition), Z3->Z4 (checkpoint bar). Gas Town's temporal articulation is ABRUPT -- zone boundaries are hard cuts, not gradual transitions. This serves its military-dispatch metaphor: no time for gentle transitions in a field dispatch.

**D. Background temperature variation (the "tonal key")**

Background color shifts across the scroll create a tonal underpinning -- the equivalent of key changes in music. Warm backgrounds feel open and inviting. Cool backgrounds feel focused and serious. Dark backgrounds feel climactic or authoritative.

Gas Town's background sequence:
```
Header:  #1A1A1A (dark)
Zone 1:  #FEF9F5 (warm cream)       -- OPENING
Zone 2:  #F0EBE3 (warm gray-beige)  -- DEEPENING (delta 18 from Z1)
Zone 3:  #E8E0D4 (deep earthy)      -- DEEPENING (delta 15 from Z2)
Zone 4:  #F5F0E8 (lighter return)   -- RESOLVING (delta 20 from Z3)
Footer:  #1A1A1A (dark)             -- BOOKEND
```

This is a temperature arc: dark -> warm -> cooling -> coolest -> warming -> dark. The reader experiences a continuous shift in tonal environment. The backgrounds ALONE, without any content, tell a story of descent and return.

CD-006's background sequence:
```
Header:    #1A1A1A (dark)
TOC:       #FAF5ED (breathing)
Sections:  #FEF9F5 (uniform cream) -- with occasional zone-breathing and zone-dense
Footer:    #1A1A1A (dark)
```

CD-006's backgrounds are MOSTLY UNIFORM across sections. The dark header and footer create bookends, but the middle is a continuous warm cream. This means CD-006's temporal tonal key is STATIC -- the reader is in the same tonal environment for the entire middle of the page. Temperature does not participate in scroll rhythm.

---

## 2. HOW DOES A STATIC PAGE CREATE ANTICIPATION?

### 2.1 What Anticipation Means

Anticipation is the reader's sense that something is ABOUT to change. It is the temporal equivalent of foreshadowing. In music, anticipation is created by harmonic tension (a dominant chord that wants to resolve to the tonic). In a static page, anticipation is created by VISUAL TENSION that implies upcoming resolution.

### 2.2 Three Mechanisms of Anticipation in CSS

**A. Progressive escalation (density ramp)**

When visual density increases steadily across viewports, the reader anticipates a peak. Gas Town creates this: Zone 1 is sparse, Zone 2 adds structure (table, grid), Zone 3 packs in callouts and dense text. The reader's unconscious expectation: "something important is coming -- the page is building toward it."

The CSS mechanism:
```css
.zone-1 { padding: 64px 80px; }                          /* generous */
.zone-2 { padding: 40px 80px; }                          /* tightening */
.zone-3 { padding: 32px 64px 20px; letter-spacing: 0.03em; font-weight: 600; }  /* compressed */
```

Three channels (padding, letter-spacing, font-weight) all compress simultaneously. The convergence of compression signals creates anticipation: the reader FEELS that the page is building pressure.

**B. Visual foreshadowing (motif introduction)**

When a visual element appears briefly in an early section and then returns prominently in a later section, the early appearance creates anticipation for the return. This is the equivalent of a musical motif.

CD-006 does this with the spiral stratum pattern: the border-weight gradient (4px/3px/1px) appears in Section 1 as a local compositional device. When the page ends with Section 8 (also a spiral), the reader recognizes the pattern returning. The first spiral SETS UP the second. However, this is accidental in CD-006 -- the builder chose spiral for both sections because the content suited it, not because of temporal design.

Gas Town does this with the `--color-primary` (#E83025) red accent: it appears as the header's bottom border, then as the drop cap color, then as the Zone 2 top border, then in the checkpoint bar (though that is `--color-border`, not primary), then as the footer's top border. The red traces a PATH through the page -- it marks structural boundaries. The reader learns "red means boundary" from the header, and then anticipates boundaries when they see red approaching.

**C. Transition elements as previews**

CD-006's bridge transitions contain prose that PREVIEWS the next section: "Now that you understand the why, let us set up the how." This is explicit anticipation -- the transition tells the reader what is coming. But more subtly, the bridge transition's breathing-zone background (#FAF5ED) creates a visual rest that signals "the next section will be different." The rest IS the anticipation.

Gas Town's checkpoint bar ("Field Intel Complete / Proceed to Deployment") does the same more dramatically. It is a NAMED transition -- it tells the reader exactly what the page's trajectory is. The military metaphor turns a section divider into a checkpoint in a mission briefing. Anticipation is not just visual but NARRATIVE.

### 2.3 What Neither Page Does

Neither page creates anticipation through PROGRESSIVE VISUAL REVEAL of a motif. A true anticipation mechanism would introduce fragments of a visual pattern that accumulates across scroll:

- Zone 1 header: a single red line (the page's primary color)
- Zone 2: two red accents (the line is growing)
- Zone 3: red appears in three locations (saturating)
- Zone 4: red dominates the structural elements (the motif is fully present)

This kind of progressive visual accumulation would create genuine anticipation -- each new appearance of red would signal "the pattern is growing" and the reader would anticipate its full expression. Neither Gas Town nor CD-006 does this. Red appears at boundaries in Gas Town but does not ACCUMULATE. The strata border-weights descend in CD-006's Section 1 but do not GROW across sections.

---

## 3. HOW DOES A PAGE CREATE MEMORY?

### 3.1 What Memory Means

Memory is the reader's sense that the page REMEMBERS its own earlier content. It is the temporal equivalent of a callback or leitmotif. When a visual element from the header reappears in section 5, the reader feels continuity -- the page is not a sequence of disconnected sections but a unified composition.

### 3.2 Three Mechanisms of Memory in CSS

**A. Bookending (header-footer echo)**

Both pages use this. Gas Town's footer echoes the header: both use `background: var(--color-text)` + `border: var(--border-medium) solid var(--color-primary)` + mono uppercase meta + display serif italic title. The footer's echo tells the reader "you have returned to where you started." This is the simplest and strongest form of visual memory.

Report 57 analyzed this at CCS-level: removing the header makes the footer meaningless as an echo. The coupling is genuine -- the footer's visual weight depends on the header's weight for its meaning.

**B. Color callbacks (palette continuity)**

Gas Town maintains its warm palette throughout, but the KEY callback is the primary red (#E83025). It appears in:
1. Header `border-bottom` (line 192)
2. Drop cap color (line 295)
3. Zone 2 `border-top` (line 374)
4. `.stage-current` table highlight (line 439)
5. Footer `border-top` (line 925)
6. Various callout label colors throughout

The red acts as a THREAD stitching the page together temporally. At any scroll position, the reader has seen red within the last ~2 viewport-heights. The recurrence is not random -- red always marks structural emphasis or boundaries. The reader's visual memory of "red = important boundary" persists across the full scroll.

CD-006 uses red similarly but more sparingly: header bottom border, drop cap, QA-question border-left, footer rule. The spacing between red appearances is LONGER in CD-006 because the page is longer (8 sections vs 4 zones). Red might disappear for 3-4 viewport-heights in CD-006's middle sections (bento grid + F-pattern sections have green and blue accents instead). The reader's red-memory may fade by Section 4.

**C. Structural rhyme (pattern repetition across distance)**

CD-006 has the strongest structural memory: the spiral pattern appears in Section 1 AND Section 8. The bento grid appears in Section 3 AND Section 6. This creates a palindromic structure: SPIRAL - Z - BENTO - F - Z - BENTO - CHOREO - SPIRAL. The reader who recognized the spiral in Section 1 will recognize its return in Section 8 as an intentional compositional choice.

The section-meta labels reinforce this: "Section 01 - Spiral - Geological Density" and "Section 08 - Spiral - Atmospheric Density" are visible in the page. The reader who noticed the axis labels in the TOC already anticipates the return of spiral. This is EXPLICIT memory -- the page tells the reader it will remember.

Gas Town has NO structural repetition across zones. Each zone has a unique structure (paragraphs + blockquote, table + bento grid, callouts + tables, extension cards + code block). The zones are temporally distinct -- they do not echo each other's structure. Gas Town's memory relies entirely on color callbacks and bookending, not on structural rhyme.

### 3.3 What Neither Page Does Well

**Deep visual callbacks across long scroll distance.** Neither page uses a visual element from the first viewport that subtly echoes in the 7th or 8th viewport in a way that rewards close reading. For example: if the header's "3px primary border-bottom" appeared as a "3px primary border-top on a key callout" 6000px later, the reader who noticed the border weight would feel rewarded. This level of craft -- where the page rewards re-reading and close attention -- is terminal craft territory and has not been observed.

**Fractal memory.** If the page's overall density arc (sparse -> dense -> sparse) were echoed WITHIN individual sections (each section also moves from sparse to dense to sparse), the reader would perceive a fractal rhythm that creates temporal memory at multiple scales simultaneously. CD-006 comes closest with its 2-zone component DNA (label-sparse / content-dense) repeating at the component scale, but this does not modulate across the page -- every callout has the same internal rhythm regardless of where it appears.

---

## 4. CSS PROPERTIES THAT CONTROL TEMPORAL COMPOSITION

Based on the analysis above, temporal composition is controlled by these CSS properties, organized by their temporal role:

### 4.1 Rhythm Properties (control the pace of change)

| Property | Temporal Role | Gas Town | CD-006 |
|----------|---------------|----------|--------|
| `section padding` (top/bottom) | Measure length | Varies: 64/40/32/32px | Uniform: 64px |
| `margin-bottom` on sections | Rest between measures | Via zone stacking | Via transition classes |
| `min-height` on sections | Minimum viewport occupation | Not used | Not used |
| `gap` in grid layouts | Internal section rhythm | 24px uniform | 24-32px |
| `line-height` per zone | Reading pace per zone | 1.7 uniform | 1.7 uniform |

**Key finding: Neither page varies `line-height` by zone.** This is an untapped temporal property. Tighter line-height (1.5) in dense zones would make the reader scroll faster. Looser line-height (1.9) in sparse zones would make them scroll slower. The reading PACE would vary with the density arc, creating a direct temporal experience.

### 4.2 Anticipation Properties (create expectation of change)

| Property | Anticipation Mechanism | Gas Town | CD-006 |
|----------|----------------------|----------|--------|
| `font-weight` progression | Building pressure | 400 -> 500 -> 600 -> 400 | Uniform 400 |
| `letter-spacing` progression | Tightening/loosening | 0 -> 0 -> 0.03em -> 0 | Uniform |
| `padding` compression | Squeezing toward peak | 64 -> 40 -> 32 -> 32 | Uniform |
| `border-weight` escalation | Structural strengthening | Varies at boundaries | Local only (spiral) |
| `background` temperature | Tonal trajectory | Warm -> cool -> coolest -> warm | Uniform cream |

**Key finding: Gas Town has STRONG anticipation properties because 4+ channels escalate in the same direction.** CD-006 has WEAK anticipation because sections are uniformly styled. The reader cannot anticipate change in CD-006 based on visual trends -- each section arrives as a fresh composition.

### 4.3 Memory Properties (create callbacks across scroll distance)

| Property | Memory Mechanism | Gas Town | CD-006 |
|----------|-----------------|----------|--------|
| `background-color` bookends | Header/footer echo | Strong (#1A1A1A) | Strong (#1A1A1A) |
| `border-color` thread | Recurring accent | Red at 5+ locations | Red at 4 locations |
| `border-weight` echo | Structural rhyme | None | Spiral S1/S8 |
| `font-family` callback | Voice return | Serif in quotes only | Serif in essence/core |
| Grid pattern repetition | Layout memory | None | Spiral and bento repeat |

**Key finding: CD-006 has STRONGER memory through structural rhyme (pattern repetition).** Gas Town has STRONGER memory through color continuity (red thread). Neither has deep visual callbacks that reward close reading.

---

## 5. CONCRETE EXAMPLES: WHERE TEMPORAL COMPOSITION EXISTS AND IS ABSENT

### 5.1 Gas Town: Temporal Composition PRESENT

**The density pressure gradient (Zones 1-3)**

The strongest temporal composition in either page. Four CSS channels compress simultaneously across three zones:

```
Zone 1 -> Zone 2 -> Zone 3:
  padding:        64px -> 40px -> 32px      (spatial compression)
  background:     #FEF9F5 -> #F0EBE3 -> #E8E0D4  (chromatic cooling, delta 18/15)
  font-weight:    400 -> 500 -> 600         (typographic heaviness)
  letter-spacing: 0 -> 0 -> 0.03em         (tracking opening under pressure)
```

This creates a temporal experience of increasing pressure. The reader FEELS the page tightening as they scroll. Each new zone is measurably denser, darker, heavier. By Zone 3, the reader has spent 4000+ pixels in progressively compressed space. The release in Zone 4 (font-weight back to 400, background lightens to #F5F0E8, padding re-expands) is palpable.

This is temporal composition because the SEQUENCE matters. Zone 3 feels dense PARTLY because Zone 1 was sparse. The contrast creates the rhythm. If the page opened at Zone 3 density, the reader would not feel compression -- they would feel "a dense page." The TEMPORAL TRAJECTORY (sparse -> dense) creates meaning that the spatial properties alone cannot.

**The checkpoint bar (Z3 -> Z4 boundary)**

```html
<div class="checkpoint-bar" role="separator">
  Field Intel Complete / Proceed to Deployment
</div>
```

This is a pure temporal device. It has no spatial function (it occupies ~40px vertically). Its entire purpose is temporal: it marks a MOMENT in the scroll sequence where the page shifts from intelligence-gathering to deployment. It creates temporal memory ("we have completed the intel phase") and temporal anticipation ("deployment is coming").

The CSS is minimal:
```css
.checkpoint-bar {
  border-top: 3px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 8px 24px;
  background: var(--color-border-subtle);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
}
```

But its temporal impact is disproportionate to its visual size. It is the PAGE'S PIVOT POINT -- the moment where descent becomes ascent.

### 5.2 Gas Town: Temporal Composition ABSENT

**Within-zone rhythm is FLAT.** Each zone has uniform styling throughout its internal content. Zone 3 (the densest, longest zone) uses the same `font-weight: 600`, the same `letter-spacing: 0.03em`, the same `background: #E8E0D4` for its ENTIRE ~2400px scroll length. There is no internal rhythm -- no breathing moments within the dense zone.

This is the "monotonous climax" problem identified in Report 51: "If Z3 is 50% of scroll height, the 'climax' lasts too long and becomes monotonous." Zone 3 has subsection dividers (`.intel-divider { border-top: 1px }`) and multiple callout types (doctrine, advantage, threat, caution), which create CONTENT variety. But the CSS-LEVEL temporal properties (background, padding, font-weight) are STATIC within the zone.

A temporally composed Zone 3 would vary density WITHIN the zone:
```css
/* HYPOTHETICAL: Within-zone temporal variation */
.zone-3 .subsection-1 { padding: 32px 64px; }        /* standard density */
.zone-3 .subsection-2 { padding: 24px 64px; }        /* tighter */
.zone-3 .subsection-3 { padding: 32px 64px; }        /* breathing space */
.zone-3 .subsection-4 { padding: 20px 64px; }        /* densest */
```

This would create a SECONDARY rhythm within Zone 3 -- a rhythm within the rhythm. Currently absent.

**No deceleration before release.** Zone 3 transitions to Zone 4 via the checkpoint bar. But there is no DECELERATION within Zone 3 that prepares the reader for the release. The dense zone ends abruptly. A temporally composed approach would have Zone 3's last subsection slightly LOOSEN its CSS (padding increases from 32px to 40px, font-weight drops from 600 to 500) in the final 400px before the checkpoint bar. This would create a RITARDANDO -- a musical slowing that signals the phrase is ending.

### 5.3 CD-006: Temporal Composition PRESENT

**The transition grammar sequence**

CD-006's most sophisticated temporal device is its three-type transition system. The SEQUENCE of transition types creates temporal articulation:

```
S1 -> [BREATHING: 80px + 3px border]
S2 -> [BRIDGE: 64px + breathing background + prose]
S3 -> [BRIDGE: 64px + breathing background + prose]
S4 -> [SMOOTH: 48px + 1px border]
S5 -> [BREATHING: 80px + 3px border]
S6 -> [SMOOTH: 48px + 1px border]
S7 -> [SMOOTH: 48px + 1px border]
S8
```

This creates a temporal pattern that is not arbitrary. The BREATHING transitions mark MAJOR domain shifts (Spiral->Z-pattern and Z-pattern->Bento, which are the most dramatic axis changes per AD-F-025). The BRIDGE transitions mark MODERATE shifts (with preview prose). The SMOOTH transitions mark MINOR shifts (within the same conceptual domain).

The reader experiences this as: BIG REST - medium rest - medium rest - flow - BIG REST - flow - flow. This divides the page into three temporal ACTS:
- Act 1 (S1-S2): Philosophical foundation (spiral + Z-pattern)
- Act 2 (S3-S5): Practical construction (bento + F-pattern + Z-pattern)
- Act 3 (S6-S8): Deployment and conclusion (bento + choreography + spiral)

The acts are separated by BREATHING transitions. Within acts, the flow accelerates (fewer/lighter transitions). This is temporal composition through transition weight sequencing.

**The drop cap placement**

CD-006 uses drop caps in exactly two locations: Section 1 (`.drop-cap` in the spiral's atmosphere stratum) and Section 4 (`.drop-cap` in the F-pattern's first movement). The placement is not arbitrary -- these are the moments "where content shifts from procedural to philosophical" (per the original CD-006 spec).

The reader encounters the first drop cap at scroll position ~800px (early in the page). They do not encounter the second until scroll position ~5000px. The gap between drop caps is ~4200px (~5 viewport-heights). When the second drop cap appears, it creates a MEMORY ECHO -- "I saw this before, at the beginning." The reader's sense is that the page has returned to a philosophical register after an extended procedural middle.

### 5.4 CD-006: Temporal Composition ABSENT

**No density arc.** CD-006's sections are uniformly padded (all use `var(--space-16)` = 64px) with uniform font-weight (body text is always 400). The page has no progressive compression or release. Each section arrives at the same visual intensity. The reader cannot predict what is coming based on density trends because there ARE no density trends.

Report 57 documented this explicitly:
```
CD-006 section padding: All use var(--space-16) = 64px (uniform)
CD-006 font-weight:     All body text is 400 (uniform)
```

This means CD-006 has structural memory (pattern repetition) and transitional rhythm (three transition types) but NO density-based anticipation. The page is temporally FLAT in its tonal arc, even though it is structurally RICH in its section-level composition.

**No within-section variation.** Like Gas Town, CD-006's sections are internally uniform. A section styled at one density level maintains that density for its entire scroll length. Components (callouts, code blocks) create LOCAL variation, but the section-level CSS envelope is constant.

---

## 6. CAN TEMPORAL COMPOSITION BE SPECIFIED IN A PIPELINE?

This is the central practical question. The answer is layered.

### 6.1 What CAN Be Specified

**A. The zone-level density arc (VALUE TABLES)**

Report 57's analysis of value tables applies directly. A pipeline can specify:

```
| Zone | Background | Padding | Font-weight | Letter-spacing |
|------|-----------|---------|-------------|----------------|
| Z1   | #FEF9F5   | 64px    | 400         | 0              |
| Z2   | #F0EBE3   | 40px    | 500         | 0              |
| Z3   | #E8E0D4   | 32px    | 600         | 0.03em         |
| Z4   | #F5F0E8   | 48px    | 400         | 0              |
```

This table IS temporal composition in specification form. Every row is a temporal moment. The column progressions encode the density arc. The builder who implements this table WILL produce scroll rhythm because the values DEFINE the rhythm.

Gas Town's builder received exactly this kind of zone-level value table in its TC brief, and the result has the strongest temporal composition of any page in the project.

**B. Transition type sequencing**

A pipeline can specify which transition type to use between each zone:

```
Header -> Z1:  BREATHING (first content zone = major entry)
Z1 -> Z2:     HARD CUT  (3px primary border -- dramatic shift)
Z2 -> Z3:     SMOOTH    (density shift does the work, no extra transition)
Z3 -> Z4:     CHECKPOINT (named transition element -- narrative pivot)
Z4 -> Footer:  BREATHING (final content zone = major exit)
```

This is specifiable because it is a SEQUENCE of discrete choices, not a continuous gradient. The TC pipeline already produces zone assignments and boundary types. Adding transition type specification to the TC brief is straightforward.

**C. Section height ratios**

A pipeline can specify RELATIVE section heights as proportions:

```
Z1: 10%   (short opening)
Z2: 30%   (substantial middle)
Z3: 40%   (longest = densest)
Z4: 20%   (moderate resolution)
```

These ratios interact with content volume (which the TC pipeline already assesses in Phase 0B) and padding (which the value table specifies). The pipeline cannot control CONTENT volume per section, but it can flag sections where content volume does not match the intended temporal proportion.

### 6.2 What CANNOT Be Specified

**A. Within-zone temporal variation**

Specifying that a zone should INTERNALLY vary its density (e.g., "Zone 3 should have a breathing moment at 60% of its scroll height") requires the builder to make compositional decisions about WHERE within the zone to create variation. This is a creative judgment that depends on reading the content, identifying natural pause points, and choosing to insert breathing space.

A pipeline could SUGGEST it: "For zones exceeding 2000px scroll height, insert at least one breathing element (64px+ gap with visual divider)." But this produces a CHECKLIST item, not temporal composition. The breathing element must be placed WHERE IT SERVES THE CONTENT, not at arbitrary scroll positions.

**B. Anticipation through visual accumulation**

The progressive introduction of a motif (red appears once in viewport 1, twice in viewport 3, three times in viewport 5) requires cross-section awareness that the current pipeline's one-shot builder cannot easily manage. The builder would need to track where it has used a motif and plan where to use it next. This is compositional judgment across the FULL page, not per-section specification.

**C. Emotional rhythm (distinct from density rhythm)**

Density rhythm (sparse -> dense -> sparse) is specifiable. Emotional rhythm (curiosity -> surprise -> deepening -> climax -> resolution) is NOT, because emotion depends on the INTERACTION between content meaning and visual treatment. A "surprise" moment requires the builder to do something UNEXPECTED -- which by definition cannot be pre-specified.

### 6.3 The Specification Paradox Applied to Temporal Composition

Report 53 identifies the fundamental tension: "The pipeline exists to SPECIFY, but specification suppresses the creative capacity that produces quality." This applies directly to temporal composition.

Specifying the zone-level density arc (value tables) produces RELIABLE temporal rhythm -- Gas Town proves this. But specifying within-zone variation, visual accumulation, and emotional rhythm risks producing MECHANICAL temporal composition -- the equivalent of a metronome vs a musician.

The resolution: **Specify the ENVELOPE, not the CONTENT of temporal composition.**

- SPECIFY: The density arc (value table), transition types (sequence), section proportions (ratios)
- LEAVE OPEN: Within-zone variation, motif placement, breathing point location, surprise moments
- INSTRUCT DISPOSITIONALLY: "The page should feel like it builds toward something and then resolves. Each zone should have at least one moment the reader does not expect."

This maps to the procedural-vs-dispositional recipe distinction. The value table is procedural (specific CSS values at zone boundaries). The within-zone composition is dispositional (a builder in COMPOSING mode making temporal choices).

---

## 7. WHAT WOULD A "TEMPORAL COMPOSITION RECIPE" LOOK LIKE?

Based on the analysis above, a temporal composition recipe for the pipeline would have three layers:

### Layer 1: The Temporal Envelope (SPECIFIED -- value table)

```markdown
## TEMPORAL ENVELOPE

Zone proportions: 15% / 30% / 35% / 20%
Density arc: OPENING -> DEEPENING -> DEEPENING -> RESOLVING

| Zone | Background | Padding | Font-weight | Letter-spacing | Line-height |
|------|-----------|---------|-------------|----------------|-------------|
| Z1   | #FEF9F5   | 64px    | 400         | 0              | 1.75        |
| Z2   | #F0EBE3   | 40px    | 500         | 0              | 1.65        |
| Z3   | #E8E0D4   | 32px    | 600         | 0.03em         | 1.55        |
| Z4   | #F5F0E8   | 48px    | 400         | 0              | 1.70        |

Transitions:
  Header -> Z1:  BREATHING (80px gap)
  Z1 -> Z2:      HARD CUT (3px primary border, no gap)
  Z2 -> Z3:      SMOOTH (density shift, 48px gap, 1px border)
  Z3 -> Z4:      CHECKPOINT (named bar, labeled transition)
  Z4 -> Footer:  BREATHING (80px gap)
```

This is fully specifiable and reliably produces temporal rhythm (as demonstrated by Gas Town).

### Layer 2: The Temporal Texture (GUIDED -- heuristics)

```markdown
## TEMPORAL TEXTURE GUIDELINES

1. Zones exceeding 2000px scroll height should contain at least ONE breathing
   element: a visual divider, a pull-quote, or a designed component that
   interrupts the prevailing density. Place it where the content naturally
   pauses (topic shifts, conclusion of an argument, transition between examples).

2. The page's primary accent color (#E83025) should appear at least once
   every 3 viewport-heights (2700px). If a stretch of 3+ viewports has
   no red accent, add a structural border or callout variant that
   introduces it.

3. Transition elements should PREVIEW the next zone's character. Bridge
   transitions include prose that names the shift. Checkpoint transitions
   include a label that identifies the narrative pivot. Smooth transitions
   use only visual properties.

4. The climax zone (highest density) should contain at least one component
   NOT found in earlier zones. This creates temporal novelty at the peak --
   the reader encounters something new at the moment of highest engagement.
```

These are heuristics, not specifications. They guide without constraining. They are specifiable as guidelines but require builder judgment for placement.

### Layer 3: The Temporal Disposition (DISPOSITIONAL -- composing mode)

```markdown
## TEMPORAL DISPOSITION

Build as if the reader is on a journey. Each viewport is a step in that
journey. The reader should never feel:
- That they have been in the same place for too long (monotonous climax)
- That the page changed mood without warning (abrupt shift)
- That the page forgot its own earlier sections (disconnected composition)
- That the ending was not earned by what came before (unresolved arc)

When you finish Zone 2, SCROLL BACK to Zone 1 in your mind. Does Zone 2
feel like a natural continuation? When you finish Zone 4, does it resolve
what Zone 1 set up?
```

This is pure dispositional recipe -- it describes HOW TO BE while building, not WHAT TO BUILD.

---

## 8. TEMPORAL COMPOSITION AND EMOTIONAL ARC

Report 51 asks: "How does temporal composition relate to emotional arc (a separate missing concept)?"

### 8.1 They Are Overlapping But Distinct

Temporal composition is the MECHANISM. Emotional arc is the EFFECT.

Temporal composition = how CSS properties vary across scroll distance (the rhythm, anticipation, and memory mechanisms described above).

Emotional arc = how the reader FEELS at different scroll positions (curiosity, engagement, surprise, climax, resolution).

The relationship is causal: temporal composition CREATES emotional arc. A well-composed temporal envelope (sparse opening, escalating density, climactic peak, resolved conclusion) produces the emotional arc (curiosity -> engagement -> tension -> satisfaction). But the relationship is not 1:1 -- bad content can sabotage a well-composed temporal envelope, and excellent content can partially compensate for flat temporal composition.

### 8.2 Where They Diverge

Temporal composition can exist without emotional arc. A page with technically correct density variation (padding and backgrounds that change at zone boundaries) but UNIFORM content tone (every section is analytical prose at the same level of abstraction) will have temporal rhythm but no emotional arc. The reader will perceive visual variety without FEELING progression.

Emotional arc can partially exist without temporal composition. A page with flat CSS styling (uniform padding, backgrounds, typography) but COMPELLING content (the content itself has a narrative arc: problem -> investigation -> discovery -> resolution) will produce an emotional arc through content alone. But the emotional arc will be weaker because the visual treatment does not amplify it.

### 8.3 The Ideal: Temporal Composition Amplifies Content's Emotional Arc

The ideal is what the Flagship Crystallization (Report 55) describes: the CSS temporal envelope maps to the CONTENT'S emotional arc. Established findings (confident, authoritative) get warm backgrounds and generous spacing. Speculative findings (uncertain, tentative) get cool backgrounds and compressed spacing. Open questions (vast, unknown) get dark backgrounds and the most spacious padding. The CSS temporal composition AMPLIFIES the emotional journey that the content already encodes.

This is the "content-form resonance" dimension through a temporal lens. The temporal envelope should not be imposed on the content -- it should emerge FROM the content's emotional structure. The TC pipeline's Phase 0/1 (content assessment, multi-axis questioning) already identifies the content's emotional trajectory. The temporal envelope specification should translate that trajectory into CSS values.

---

## 9. SYNTHESIS: THE FIVE LAWS OF TEMPORAL COMPOSITION

From the analysis above, five principles emerge:

### Law 1: TEMPORAL COMPOSITION = MULTI-CHANNEL VARIATION ACROSS SCROLL

Temporal composition requires at least 3 CSS channels to vary simultaneously across zone boundaries. A single channel varying (only background changes) is atmosphere. Two channels varying (background + padding) is density arc. Three or more channels varying in the same direction is temporal composition.

Gas Town achieves 4-channel temporal composition (background + padding + font-weight + letter-spacing). CD-006 achieves 1-channel temporal composition (transition types only -- section-level properties are uniform). The gap is large.

### Law 2: ANTICIPATION REQUIRES PROGRESSIVE ESCALATION

For the reader to anticipate change, they must PERCEIVE a trend. A trend requires at least 3 data points in the same direction. Two zones is a contrast. Three zones is a trend. This means temporal anticipation requires at least 3 zones with progressively escalating (or decelerating) CSS values before the climax/release.

Gas Town achieves this: Z1 -> Z2 -> Z3 is a 3-point escalation in 4 channels. CD-006 does not -- its sections do not escalate.

### Law 3: MEMORY REQUIRES ECHO ACROSS >= 5 VIEWPORT-HEIGHTS

For a visual callback to register as MEMORY (not just repetition), it must span at least 5 viewport-heights (~4500px) of scroll distance. Closer echoes feel like repetition. Distant echoes feel like callbacks.

CD-006 achieves this with its spiral bookending (Section 1 at ~800px, Section 8 at ~5000px+). Gas Town achieves this with its header/footer bookending (top to bottom, maximum scroll distance). Neither achieves deep mid-page callbacks.

### Law 4: THE LONGEST ZONE NEEDS INTERNAL RHYTHM

Any zone that exceeds 2000px (>2 viewport-heights) of scroll without internal visual variation creates the "monotonous climax" problem. The fix: within-zone variation (breathing elements, subsection dividers, component type changes) that creates a secondary rhythm. Gas Town's Zone 3 (~2400px) demonstrates the problem: uniform CSS properties for its full length despite content variety through callouts.

### Law 5: THE TEMPORAL ENVELOPE IS SPECIFIABLE; TEMPORAL TEXTURE IS NOT

The zone-level density arc (value tables, transition types, section proportions) can be reliably specified in a pipeline and will produce temporal rhythm when implemented. Within-zone variation, motif accumulation, and emotional surprise cannot be specified without destroying their spontaneity. The pipeline should specify the envelope and guide the texture through dispositional instructions.

---

## 10. RECOMMENDATIONS FOR PIPELINE V3

### 10.1 Add Temporal Envelope to TC Brief Output

The TC pipeline (Phase 2) already produces a metaphor and mechanism selection. It should also produce a temporal envelope specification:

```
TEMPORAL ENVELOPE:
  Zone count: 4
  Zone proportions: 15/30/35/20
  Density direction: OPENING -> DEEPENING -> DEEPENING -> RESOLVING
  Value table: [background, padding, font-weight, letter-spacing, line-height per zone]
  Transition sequence: [BREATHING, HARD-CUT, SMOOTH, CHECKPOINT, BREATHING]
  Climax zone: Z3
  Climax component: [a component type NOT used in Z1 or Z2]
```

### 10.2 Add Temporal Gate to Gate Runner

A new programmatic gate checking:

```
TEMPORAL GATE:
  1. Zone backgrounds must have >= 15 RGB delta between adjacent zones (already exists)
  2. Zone padding must vary by >= 8px between at least 2 adjacent zones
  3. At least one CSS property (font-weight, letter-spacing, or line-height) must
     vary between the densest zone and the sparsest zone
  4. The page must contain at least 2 transition types (of the 4: breathing, bridge,
     smooth, checkpoint)
  5. No zone may exceed 3000px scroll height without an internal divider element
```

### 10.3 Add Temporal PA Questions

Two new perceptual audit questions:

```
PA-70: Scroll through the page at reading speed from top to bottom.
       Does the visual density CHANGE as you scroll? Describe the arc
       (e.g., "starts sparse, gets denser, then releases").
       If the density is UNIFORM throughout, the page lacks temporal rhythm.

PA-71: After scrolling to the bottom, do you remember a visual element
       from the first viewport that REAPPEARED later? Name it.
       If nothing echoes across scroll distance, the page lacks temporal memory.
```

### 10.4 Add Line-Height to Value Tables

Currently no page varies `line-height` by zone. This is a missed opportunity: `line-height` directly controls READING SPEED. Adding it to value tables:

```css
.zone-opening    { line-height: 1.75; }  /* slow -- inviting */
.zone-deepening  { line-height: 1.65; }  /* moderate -- engaging */
.zone-densest    { line-height: 1.55; }  /* fast -- urgent */
.zone-resolving  { line-height: 1.70; }  /* returning -- reflective */
```

This creates a READING PACE arc that amplifies the density arc. The reader physically scrolls faster through dense zones (tighter line-height = more content per viewport) and slower through sparse zones. The temporal experience is shaped by the reading mechanics themselves.

---

## SUMMARY

Temporal composition is the design of the reader's SEQUENTIAL experience across scroll distance. It is controlled by CSS properties that vary across zone boundaries (backgrounds, padding, font-weight, letter-spacing, line-height) and by transition elements that articulate the rhythm between zones.

**Gas Town** has the strongest temporal composition of any page in the project: 4-channel density arc, progressive escalation across 3 zones, checkpoint pivot, and bookended echo. Its weakness is within-zone monotony (Zone 3's ~2400px at uniform density).

**CD-006** has stronger temporal memory (structural rhyme through pattern repetition, palindromic section architecture) and sophisticated transitional rhythm (3 transition types creating 3-act structure). Its weakness is absent density arc (all sections uniformly styled at the section level).

**The ideal** combines Gas Town's density arc with CD-006's structural memory and transition grammar. This has never been achieved.

Temporal composition CAN be partially specified through value tables (zone-level CSS values), transition type sequences, and section proportion ratios. Within-zone variation and emotional rhythm require dispositional recipe -- builder judgment in COMPOSING mode. The pipeline should specify the temporal ENVELOPE and guide the temporal TEXTURE.

**The five laws:** multi-channel variation across scroll, progressive escalation for anticipation, echo across >= 5 viewport-heights for memory, internal rhythm in zones exceeding 2000px, and envelope-specifiable/texture-dispositional.

---

*Temporal composition is the missing 9th concept: the SEQUENTIAL dimension of compositional intelligence. It is the reason a page can pass all spatial quality checks and still feel flat -- because flatness is a TEMPORAL property (uniformity across scroll distance), not a spatial one (uniformity within a viewport). Gas Town proves it is specifiable at the envelope level. CD-006 proves structural memory works across long scroll distances. Neither achieves both. The pipeline that does will produce pages with a reading experience that no single-viewport analysis can predict.*
