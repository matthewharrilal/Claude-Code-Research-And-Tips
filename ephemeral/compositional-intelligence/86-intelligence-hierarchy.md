# Intelligence Hierarchy Map: What Sits ABOVE Perception Thresholds

**Agent:** Intelligence Hierarchy Mapper (Opus 4.6)
**Task:** #86
**Date:** 2026-02-19
**Sources:** memory/scale-research.md, mechanism-catalog.md, traces 01-14 (scale/channel/stack), PV2 architecture, TC SKILL, flagship + remediation + middle-tier experiment evidence

---

## THE 5 LEVELS

The user identifies a clear hierarchy above raw perception thresholds:

| Level | Name | What It Governs | PA-05 Correspondence |
|-------|------|----------------|---------------------|
| **L1** | Perception Thresholds | Can you SEE the differences? | Prevents 1.5/4 (FLAT) |
| **L2** | Scales (5 zoom levels) | Is the pattern visible at each zoom? | Enables 2/4 (STYLED) |
| **L3** | Channels (6 CSS groups) | Is the pattern expressed through multiple properties? | Enables 2.5/4 (STYLED+) |
| **L4** | Multi-Coherence (>=3 channels shifting together) | Do channels reinforce the same semantic direction? | Enables 3/4 (COMPOSED) |
| **L5** | Anti-Scale Model (density x restraint x confidence) | Does every decision serve the governing principle? | Enables 4/4 (DESIGNED) |

Each level INCLUDES all levels below it. You cannot have multi-coherence without channels, cannot have channels without scales, cannot have scales without perceptible differences. The hierarchy is strictly cumulative.

---

## LEVEL 1: PERCEPTION THRESHOLDS

### What It Is

The floor of visibility. CSS differences exist AND are perceptible to a human viewer. Without this, the page is technically differentiated but visually flat.

### What It ADDS to CSS Output

Nothing above raw CSS. L1 is about MINIMUM DELTAS:

```css
/* L1 MINIMUM: differences you can SEE */
.zone-1 { background: #FEF9F5; }  /* warm cream */
.zone-2 { background: #FAF5ED; }  /* earthy tan -- differs by >= 15 RGB */

h2 { font-size: 26px; }  /* differs from body by >= 2px */
p  { font-size: 16px; }

.section-a { padding: 64px 0; }
.section-b { padding: 48px 0; }  /* differs by >= 16px */

.callout { border-left: 4px solid #E83025; }  /* border EXISTS (1px minimum) */
```

### What a Page AT This Level Looks Like

The page has visible zones with distinct backgrounds. Headings are clearly larger than body text. Sections have different spacing. Borders exist on emphasized elements. But there is no pattern connecting these differences -- backgrounds might warm in one place and cool in another with no direction. Typography varies but doesn't encode hierarchy consistently. The page is NOT FLAT, but it is ARBITRARY.

**Perceptual impression:** "Someone applied a color palette and sizing scale. The differences are there but don't tell me anything."

### PA-05 Score: Prevents 1.5/4 (FLAT), achieves approximately 1.5-2.0/4

The flagship experiment BEFORE remediation scored 1.5/4 because it failed L1 -- backgrounds differed by 1-8 RGB points (invisible), typography was uniformly 16px/400. L1 thresholds would have caught this.

### Programmatic Enforcement

**FULLY ENFORCEABLE.** This is PV2's strongest layer.

| Gate | What It Checks | Binary? |
|------|---------------|---------|
| SC-09 | Adjacent zone bg >= 15 RGB delta | YES |
| SC-11 | Font-size zones >= 2px delta | YES |
| SC-10 | Stacked gap <= 108px | YES |
| SC-01 | Container 940-960px | YES |
| SC-02 | Soul constraints (border-radius: 0, box-shadow: none) | YES |
| SC-04 | R >= G >= B warm palette | YES |

**Cost:** ~40 lines in gate-runner.js. Already specified in PV2.

### Structural Enforcement

Thresholds are embedded as numeric values in the gate runner, the operational recipe, and the perception-thresholds file. They survive compression because they are NUMBERS, not concepts. A number cannot be paraphrased into oblivion.

---

## LEVEL 2: SCALES (5 Zoom Levels)

### What It Is

The pattern (whatever it is) is visible at MULTIPLE ZOOM LEVELS, not just at one. When you squint at the full page, you see rhythm. When you look at one section, you see structure. When you examine one component, you see the same logic. This is fractal self-similarity.

**The 5 scales:** Navigation (1440px) > Page (960px) > Section (~200-400px) > Component (~40-100px) > Character (~12-20px)

### What It ADDS to CSS Output (Beyond L1)

L1 ensures differences are visible. L2 ensures the SAME KIND of difference operates at multiple zoom levels. The concrete CSS addition is REPETITION OF PATTERN DIRECTION across scale-specific selectors:

```css
/* L1 ONLY: Visible differences, no cross-scale pattern */
header { background: #1A1A1A; padding: 64px; }
.zone-1 { background: #FEF9F5; padding: 48px; }
.callout { padding: 24px; border-left: 4px solid; }
p { font-size: 16px; }

/* L2 ADDS: Same direction (sparse-to-dense) at Page AND Component scales */

/* PAGE scale: sections get progressively denser */
.zone-intro { padding: 64px 0; background: #FEF9F5; }     /* sparse */
.zone-core  { padding: 48px 0; background: #FAF5ED; }     /* moderate */
.zone-deep  { padding: 32px 0; background: #F0EBE3; }     /* dense */

/* COMPONENT scale: components ALSO show sparse-to-dense internally */
.callout-label {
  font-size: 0.75rem;       /* sparse: small, open */
  letter-spacing: 0.1em;    /* sparse: tracked out */
  padding-bottom: 8px;      /* sparse zone */
}
.callout-body {
  font-size: 1rem;           /* dense: larger, tighter */
  letter-spacing: 0;         /* dense: no tracking */
  line-height: 1.7;          /* dense: packed */
}
```

**The CSS DIFFERENCE between L1 and L2:** L2 adds ~30-50 lines of component-level CSS that echoes the page-level direction. Without L2, components have arbitrary internal structure. With L2, component internals mirror the page's compositional direction.

### What a Page AT This Level Looks Like (vs L1)

**L1 page:** Zones have different backgrounds and spacing. Components have structure. But zoom into a component and the internal structure has no relationship to the page structure. The callout's padding doesn't echo the section's padding direction. The drop cap has no relationship to the heading hierarchy.

**L2 page:** Zoom into a component and you see the SAME logic operating. The page goes sparse-to-dense as you scroll? Components also go sparse (label) to dense (body). The page has heavier borders on important sections? Components have heavier borders on important elements within them. The page feels like ONE IDEA expressed at multiple scales.

**Perceptual impression:** "This was designed with a system. Even the small elements follow the same rules as the big elements."

### PA-05 Score: Approximately 2/4 (STYLED)

The Middle-tier experiment achieved 2 scales (Page + Component) and scored PA-05 4/4 -- but this was exceptional due to Opus builder fluency and metaphor strength. A more typical 2-scale result (without strong metaphor) would score 2/4 STYLED. The tier-to-scale mapping:

| Tier | Required Scales | Typical PA-05 |
|------|----------------|--------------|
| Floor | Exempt | 1-1.5/4 |
| Middle | 2 (Page + Component) | 2-3/4 |
| Ceiling | 4 (Nav + Page + Section + Component) | 2.5-3/4 |
| Flagship | 5 (all) | 3-4/4 |

### Programmatic Enforcement

**PARTIALLY ENFORCEABLE.** Scale presence can be measured; scale PATTERN COHERENCE is harder.

**What CAN be measured programmatically:**

```javascript
// SC-13: Scale Coverage
// Count how many scales have CSS differentiation:
// 1. Navigation: header bg != first zone bg? (already SC-01 adjacent)
// 2. Page: >= 2 zone backgrounds with >= 15 RGB delta? (already SC-09)
// 3. Section: internal padding variation within >= 1 section? (NEW)
// 4. Component: callout label/body have different font-size? (NEW)
// 5. Character: ::first-letter or inline code styled differently? (NEW)
// PASS if scale count >= tier requirement (Middle=2, Ceiling=4, Flagship=5)
```

**What CANNOT be measured programmatically:** Whether the scales express the SAME pattern direction. A page could have variation at 5 scales but each scale's variation is RANDOM relative to the others. This cross-scale directional coherence requires either human judgment (PA audit) or the fractal echo table (see L4).

**Structured enforcement:** The Fractal Echo Table (from trace 14-stack-fractal.md) solves this:

```markdown
## FRACTAL ECHO TABLE (in _build-plan.md)

| Scale | Pattern Direction | Primary CSS | Secondary CSS |
|-------|------------------|------------|--------------|
| Navigation | sparse-opening | dark bg, generous padding | light nav text |
| Page | sparse-to-dense | zone bgs warm progressively | padding compresses |
| Section | same direction | internal padding shrinks | border-weight increases |
| Component | same direction | 2-zone: sparse label, dense body | accent intensifies |
| Character | same direction | serif = weight, mono = precision | letter-spacing tightens |
```

This table is a TC DELIVERABLE (planner produces it) and a BUILDER REFERENCE (each recipe phase checks its row). Cost: ~30 lines in build plan, 9 cross-reference lines in recipe.

### Cost

- **CSS lines:** +30-50 (component-level pattern echoing)
- **Build time:** +15-20 minutes (fractal echo planning + per-phase cross-checks)
- **Pipeline complexity:** +30 lines in build plan, +9 lines in recipe, +30 lines in gate runner

---

## LEVEL 3: CHANNELS (6 CSS Groups)

### What It Is

The pattern is expressed through MULTIPLE INDEPENDENT CSS PROPERTY GROUPS, not just one. Where L2 asks "does the pattern repeat at multiple zoom levels?", L3 asks "does the pattern speak through multiple CSS voices?"

**The 6 channels:** Chromatic (backgrounds, colors), Typographic (fonts, sizes, weights), Spatial (padding, margins, gaps), Structural (borders, grids, containers), Behavioral (hover, transition, focus), Material (texture, depth, surface quality)

### What It ADDS to CSS Output (Beyond L2)

L2 ensures the pattern repeats across scales. L3 ensures the pattern is expressed through multiple INDEPENDENT CSS channels at each scale. The concrete CSS addition is PARALLEL ENCODING of the same semantic through different property groups:

```css
/* L2 ONLY: Pattern repeats at Page + Component scales, but only through ONE channel (spatial/padding) */
.zone-intro { padding: 64px 0; }   /* sparse */
.zone-core  { padding: 32px 0; }   /* dense */
.callout-label { padding: 8px; }   /* sparse echo */
.callout-body  { padding: 16px; }  /* dense echo */

/* L3 ADDS: Same pattern expressed through MULTIPLE channels simultaneously */

/* CHROMATIC channel: backgrounds track density */
.zone-intro { background: #FEF9F5; }   /* lightest = sparsest */
.zone-core  { background: #FAF5ED; }   /* warmer = denser */
.zone-deep  { background: #F0EBE3; }   /* warmest = densest */

/* TYPOGRAPHIC channel: typography tracks density */
.zone-intro p { font-size: 18px; letter-spacing: 0.01em; }  /* open */
.zone-core p  { font-size: 16px; letter-spacing: 0; }       /* standard */
.zone-deep p  { font-size: 15px; line-height: 1.6; }        /* compressed */

/* STRUCTURAL channel: borders track density */
.zone-intro .callout { border-left: 1px solid #E0D5C5; }    /* subtle */
.zone-core .callout  { border-left: 3px solid #E83025; }    /* prominent */
.zone-deep .callout  { border-left: 4px solid #1A1A1A; }    /* heavy */

/* SPATIAL channel: (already had this from L2) */
.zone-intro { padding: 64px 0; }
.zone-core  { padding: 48px 0; }
.zone-deep  { padding: 32px 0; }

/* BEHAVIORAL channel: transitions track density */
.zone-intro a:hover { transition: 0.4s ease; }    /* slow, relaxed */
.zone-core a:hover  { transition: 0.25s ease; }   /* moderate */
.zone-deep a:hover  { transition: 0.15s ease; }   /* quick, precise */
```

**The CSS DIFFERENCE between L2 and L3:** L3 adds ~60-100 lines of per-channel CSS that encodes the same semantic through different properties. Without L3, backgrounds might say "sparse" while borders say "heavy" -- the channels disagree. With L3, every channel says the same thing.

### What a Page AT This Level Looks Like (vs L2)

**L2 page:** The page has clear scale-level pattern. You see rhythm at page level and component level. But the rhythm operates through ONE dominant channel (usually spatial -- padding differences). Backgrounds are nice but don't track the spatial rhythm. Borders exist but don't reinforce the spatial story. The page feels "organized" but not "atmospheric."

**L3 page:** When you scroll from the intro to the core, EVERYTHING shifts subtly: the background warms, the text tightens, the borders thicken, the padding compresses, the transitions speed up. No single shift is dramatic. The ENSEMBLE is unmistakable. You feel a change of ATMOSPHERE, not just a change of background color.

**Perceptual impression:** "This page has atmosphere. Something shifts as I scroll but I can't pinpoint what. It feels like the page is getting denser/deeper/more serious."

### PA-05 Score: Approximately 2.5/4 (STYLED+)

The remediation experiment achieved this level -- visible channel shifts at zone boundaries, multiple CSS channels operating. PA-05 scored 2.5/4. The channels were present but not fully coherent (borders did not fully track background direction, typography was partially uniform). L3 without L4 (multi-coherence) produces visible multi-channel variation that is not yet semantically unified.

### Programmatic Enforcement

**PARTIALLY ENFORCEABLE.** Channel presence is measurable; channel SEMANTIC ALIGNMENT is not.

```javascript
// SC-14: Channel Coverage
// At each major section boundary, count how many channels shifted:
// 1. Chromatic: bg-color changed? (from SC-09)
// 2. Typographic: font-size OR letter-spacing OR font-weight changed?
// 3. Spatial: padding OR margin OR gap changed?
// 4. Structural: border-width OR border-color changed?
// 5. Behavioral: transition-duration changed? (hard to measure statically)
// 6. Material: combination of bg-warmth + border-weight + font-family shift?
//
// PASS if >= 3 channels shifted at EACH major boundary (Middle)
// PASS if >= 4 channels shifted (Ceiling+)
```

**The gap:** This measures whether channels CHANGED, not whether they changed in the SAME DIRECTION. Backgrounds warming while borders LIGHTEN is two channels shifting but in OPPOSITE semantic directions. Enforcing directional coherence requires L4.

**Structured enforcement:** The build plan should name which channels will express the pattern. TC already selects mechanisms per category; extending this to specify channels per boundary is the semantic binding table (from trace 12-stack-multi-coherence.md).

### Cost

- **CSS lines:** +60-100 (multi-channel encoding at zone boundaries)
- **Build time:** +20-30 minutes (per-channel CSS, cross-channel consistency checking)
- **Pipeline complexity:** +20 lines in build plan (channel assignments), +15 lines in gate runner

---

## LEVEL 4: MULTI-COHERENCE (>=3 Channels Shifting Together)

### What It Is

At each section boundary, >= 3 channels shift SIMULTANEOUSLY in the SAME SEMANTIC DIRECTION. This is the defining property of pages that feel COMPOSED. It is the bridge from "channels exist and vary" to "channels work together as an ensemble."

### What It ADDS to CSS Output (Beyond L3)

L3 ensures multiple channels are active. L4 ensures they are DIRECTIONALLY COORDINATED. The concrete CSS addition is not more properties but more INTENTIONAL RELATIONSHIPS between properties:

```css
/* L3 ONLY: Multiple channels active, but direction may be arbitrary */
.zone-intro { background: #FEF9F5; padding: 64px; }           /* light, sparse */
.zone-core  { background: #F0EBE3; padding: 48px; }           /* warm, moderate -- OK */
.zone-deep  { background: #FAF5ED; padding: 32px; }           /* WAIT: bg LIGHTENED but padding COMPRESSED */
                                                                /* Chromatic says "resolving" but Spatial says "intensifying" */
                                                                /* Channels DISAGREE -- L3 passes (both shifted), L4 FAILS */

/* L4 ADDS: Directional binding -- all channels say "DEEPENING" together */

/* Boundary: Intro -> Core (SEMANTIC DIRECTION: DEEPENING) */
.zone-intro {
  background: #FEF9F5;       /* lightest (chromatic: surface) */
  padding: 64px 0;           /* widest (spatial: open) */
  border-bottom: none;       /* no border (structural: no weight) */
}
.zone-core {
  background: #FAF5ED;       /* warmer (chromatic: deeper) */
  padding: 48px 0;           /* tighter (spatial: compressed) */
  border-top: 1px solid #E0D5C5; /* border appears (structural: gaining weight) */
}
/* 3 channels shifted: chromatic (warmer), spatial (tighter), structural (border appeared) */
/* ALL 3 say "DEEPENING" -- directionally coherent */

/* Boundary: Core -> Deep (SEMANTIC DIRECTION: INTENSIFYING) */
.zone-core {
  /* (values above) */
}
.zone-deep {
  background: #F0EBE3;       /* warmest body zone (chromatic: deepest) */
  padding: 32px 0;           /* tightest (spatial: most compressed) */
  border-top: 3px solid #E83025; /* heavy border (structural: heavy weight) */
}
/* 3 channels shifted: chromatic (warmer still), spatial (tighter still), structural (border thickened) */
/* ALL 3 say "INTENSIFYING" -- directionally coherent */

/* Boundary: Deep -> Resolution (SEMANTIC DIRECTION: RESOLVING) */
.zone-deep {
  /* (values above) */
}
.zone-resolve {
  background: #FEF9F5;       /* returns to light (chromatic: surfacing) */
  padding: 56px 0;           /* loosens (spatial: opening) */
  border-top: 1px solid #E0D5C5; /* border thins (structural: lighter weight) */
}
/* 3 channels shifted: chromatic (cooler), spatial (wider), structural (border thinned) */
/* ALL 3 say "RESOLVING" -- directionally coherent */
```

**The CSS DIFFERENCE between L3 and L4:** The actual CSS lines are similar in COUNT. The difference is in VALUE RELATIONSHIPS. L4 CSS has backgrounds, padding, and borders that all move in the same semantic direction at each boundary. L3 CSS has the same properties but their values may move in contradictory directions.

**The key new artifact:** The SEMANTIC BINDING TABLE, produced collaboratively by TC planner (skeleton) and builder (completion):

```markdown
## Semantic Binding Table (in _build-plan.md)

### Boundary: Zone 1 -> Zone 2
SEMANTIC DIRECTION: DEEPENING
| Channel | Zone 1 Value | Zone 2 Value | Shift | Direction |
|---------|-------------|-------------|-------|-----------|
| Chromatic | bg #FEF9F5 | bg #FAF5ED | -12R, -4G, -8B | WARMER (deeper) |
| Spatial | padding 64px | padding 48px | -16px | TIGHTER (deeper) |
| Structural | no border | 1px border | +1px appearance | HEAVIER (deeper) |
| Typographic | 18px body | 16px body | -2px | DENSER (deeper) |
| CHANNELS SHIFTING: 4 (>= 3 PASS) | DIRECTION: ALL DEEPENING (COHERENT) |
```

### What a Page AT This Level Looks Like (vs L3)

**L3 page:** Multiple channels vary. As you scroll, backgrounds shift AND borders change AND spacing adjusts. But the shifts feel INCIDENTAL -- "yes, things are changing" without a unified direction. The background warmed but the typography got BIGGER (contradicting the "getting denser" message). The border appeared but the spacing OPENED UP (contradicting "getting more contained").

**L4 page:** As you scroll from intro to core, EVERYTHING says "we are going deeper" simultaneously. Background warms (deeper). Padding compresses (deeper). Borders thicken (heavier). Typography tightens (more precise). The reader feels a GRADIENT OF INTENSITY increasing smoothly, carried by the reinforcing ensemble of all channels. No single channel dominates -- the atmosphere shifts holistically.

**Perceptual impression:** "This page knows what it's doing. The transitions between sections feel purposeful. Each section isn't just different -- it's different in the SAME WAY as every other channel."

### PA-05 Score: Approximately 3/4 (COMPOSED)

The master synthesis (trace 12) identifies multi-coherence as THE property separating COMPOSED (3/4) from STYLED (2-2.5/4). CD-006 achieved this through an Opus builder's implicit multi-channel coordination. The Middle-tier experiment achieved it partially (strong spatial + chromatic coherence, weaker structural + behavioral). The flagship FAILED it entirely (channels shifted independently with no directional binding).

### Programmatic Enforcement

**PARTIALLY ENFORCEABLE.** Channel co-shifting is measurable; directional semantic coherence requires the binding table.

```javascript
// SC-15: Multi-Coherence Gate
// For each pair of adjacent sections:
// 1. Measure: bg-color, font-size, padding-top, border-left-width, letter-spacing
// 2. Count channels that changed (delta above perceptual threshold)
// 3. FAIL if any boundary has < 3 channels shifting
//
// DIRECTIONAL CHECK (harder but feasible):
// 4. For each channel that shifted, classify direction:
//    - bg RGB sum decreased = "WARMING" (deeper)
//    - font-size decreased = "COMPRESSING" (denser)
//    - padding decreased = "TIGHTENING" (denser)
//    - border-width increased = "HEAVIER" (weightier)
// 5. Classify each direction as INTENSIFYING (+) or RELAXING (-)
// 6. FAIL if boundary has mixed directions (some + some -)
//    unless boundary is explicitly a RESOLUTION transition
```

**The limitation:** This programmatic check catches CONTRADICTORY directions but cannot verify that the direction is SEMANTICALLY APPROPRIATE for the content. A page where every boundary intensifies (all channels get heavier throughout) passes the direction check but may be semantically wrong (if the content resolves at the end, the last boundary should relax, not intensify). Semantic appropriateness requires the binding table.

**Structured enforcement:** The Semantic Binding Table is the primary structural mechanism. It is:
1. Produced by TC planner (semantic directions + channel assignments)
2. Completed by builder in recipe Phase 3.5 (specific CSS values)
3. Verified by gate runner SC-15 (computed styles match planned directions)
4. Audited by PA (perceptual coherence)

### Cost

- **CSS lines:** +0-20 (values may change but line count is similar to L3; the change is in value RELATIONSHIPS)
- **Build time:** +15-20 minutes (binding table planning + Phase 3.5 commitment)
- **Pipeline complexity:** +50 lines in build plan (binding table skeleton), +20 lines in recipe (Phase 3.5), +30 lines in gate runner (SC-15)

---

## LEVEL 5: ANTI-SCALE MODEL (Density x Restraint x Confidence)

### What It Is

The governing principle that determines whether a page feels DESIGNED rather than just COMPOSED. It is the EVALUATIVE FRAMEWORK that makes L1-L4 serve the content rather than serve the pipeline.

```
Richness = (semantic density per decision) x (restraint ratio) x (spatial confidence)
```

- **Semantic density:** How much MEANING each CSS choice carries. NOT "more properties" but "more meaning per property."
- **Restraint:** The ratio of plausible additions REJECTED to additions ACCEPTED. NOT "fewer mechanisms" but "every mechanism JUSTIFIED."
- **Spatial confidence:** The squint test. Does the page's macro proportion communicate intentional design? NOT "correct spacing" but "confident spacing."

**MULTIPLICATIVE:** Zero on any factor = zero richness. You cannot compensate for low spatial confidence with high semantic density.

### What It ADDS to CSS Output (Beyond L4)

L5 does NOT add CSS lines. It REMOVES them. Or more precisely: it ensures that every remaining CSS line carries maximum meaning and that no CSS line is unjustified. The concrete output is FEWER lines that do MORE:

```css
/* L4 ONLY: Multi-coherent channel shifts, but CSS may include unjustified properties */

/* These 227 lines of sub-perceptual micro-typography from the flagship: */
.zone-intro p { letter-spacing: 0.008em; }     /* imperceptible */
.zone-core p  { letter-spacing: 0.005em; }     /* imperceptible */
.zone-deep p  { letter-spacing: 0.003em; }     /* imperceptible */
.zone-resolve p { letter-spacing: 0.001em; }   /* imperceptible */
/* Direction is coherent (tightening), but NO HUMAN CAN SEE THIS. */
/* Semantic density: 0 (no meaning per decision -- invisible) */
/* Restraint: 0 (these should have been REJECTED) */

/* L5 REPLACES with fewer lines carrying actual meaning: */
.zone-intro p {
  letter-spacing: 0.03em;    /* VISIBLE opening -- reader sees tracked text */
  /* WHY: introductory text should feel open and welcoming */
}
.zone-core p {
  letter-spacing: 0;          /* DEFAULT -- no tracking = standard density */
  /* WHY: core content should not draw attention to typography */
}
.zone-deep p {
  letter-spacing: -0.01em;    /* VISIBLE tightening -- reader feels compression */
  /* WHY: deep technical content should feel dense and precise */
}
/* 3 lines instead of 4. But each carries meaning. Delta is >= 0.03em (perceptible). */
/* Semantic density: HIGH (each value encodes a content relationship) */
/* Restraint: HIGH (values below perception threshold were rejected) */
```

**The CSS DIFFERENCE between L4 and L5:** L5 pages have FEWER CSS lines with LARGER, more deliberate deltas. The flagship wrote 800+ lines of CSS with many sub-perceptual values. CD-006 wrote ~500 lines where every line was perceptible and justified. L5 is about CSS ECONOMY, not CSS VOLUME.

### What a Page AT This Level Looks Like (vs L4)

**L4 page:** Multi-coherent channel shifts. Atmosphere changes between zones. The page feels COMPOSED -- professionally assembled with coordinated transitions. But on close examination, some choices feel ARBITRARY (why is this border 3px instead of 4px? why is this background #FAF5ED instead of #F5EDE3?). The composition is sound but the CONVICTION is absent. Each choice was made to satisfy a rule, not to express a meaning.

**L5 page:** Every visible choice has a REASON rooted in the content. The 4px border on Section 2 is there because Section 2 is the FOUNDATION of the argument (heaviest semantic weight). The warm background is there because this section is INVITING the reader into the core idea. The compressed padding is there because the content is DENSE and demands attention. The reader may not articulate WHY the page feels right, but they feel that nothing is accidental and nothing is excess.

**Perceptual impression:** "This doesn't just look designed. It feels like the designer UNDERSTOOD the content. The visual choices aren't just aesthetic -- they're MEANINGFUL."

### PA-05 Score: 4/4 (DESIGNED)

The anti-scale model directly predicts the DESIGNED rating. DD-006 and CD-006 -- the crown jewels scoring 36/40 and 39/40 respectively -- both exhibit high semantic density (every mechanism serves content), high restraint (mechanisms rejected as well as deployed), and high spatial confidence (confident proportions at squint level).

The smoking gun: Middle-tier experiment (2 scales, high restraint, strong spatial confidence) scored PA-05 4/4 DESIGNED. Ceiling experiment (4 scales, low restraint, failed spatial confidence) scored PA-05 1.5/4 FLAT. MORE SCALES AND CHANNELS produced WORSE results because L5's governing principle was violated: restraint was zero (227 lines of invisible CSS) and spatial confidence was zero (70-80% whitespace void).

### Programmatic Enforcement

**PARTIALLY ENFORCEABLE through operational proxies.** The anti-scale model itself is evaluative (judgment-based). But its three components can each be approximated by binary mechanisms:

**Proxy 1: Semantic Density -> Isomorphism Consultation**

Binary self-test at every recipe phase:
> "For each CSS property I just set, can I name the content relationship it encodes? If I cannot name it, the property is DECORATION -- remove it."

Programmatic approximation: Verify that the builder's cascade value table includes a "Content Relationship" column for every entry. If any entry has no content relationship, FLAG.

**Proxy 2: Restraint -> Mechanism Rejection Log**

Binary deliverable:
> "List 3+ mechanisms from the catalog that you chose NOT to deploy, with content-specific reasons."

Programmatic approximation (SC-16): Does the builder's output include a rejection log with >= 3 entries, each containing a mechanism name + content-specific justification?

**Proxy 3: Spatial Confidence -> Mass Distribution Check**

Binary check at Phase 1:
> "Map each zone's content mass as percentage of zone area. Any zone below 30% fill without a deliberate spatial element = SPATIAL FAILURE."

Programmatic approximation (SC-17): Measure each zone's content-bearing elements vs total zone height. If ratio < 0.30 and no structural element (hr, centered heading, full-width border) exists, FAIL.

```javascript
// SC-16: Restraint Log Completeness
// Check builder output for rejection log artifact
// PASS if >= 3 mechanisms named with content-specific justification
// FAIL if log absent or entries lack content reasoning

// SC-17: Spatial Confidence
// For each zone, compute: content_height / zone_total_height
// If ratio < 0.30 AND no structural element found in zone:
//   FAIL("Zone N has < 30% content fill with no spatial signal")
```

### Structured Enforcement

The anti-scale model cannot be encoded as a single gate. It requires THREE structural mechanisms working together:

1. **Isomorphism table in build plan** (semantic density): TC produces content-to-CSS mapping; builder CONSULTS it for every CSS decision
2. **Rejection log as mandatory deliverable** (restraint): Builder documents what was NOT done and why
3. **Mass distribution check at Phase 1** (spatial confidence): Builder verifies proportion BEFORE writing CSS

Plus a **STOP CHECK** after Recipe Phase 6:
> "Review all CSS written in Phases 3-6. For each property: Can you name the content relationship? Is this the minimum CSS needed? Would the page feel less designed without this? Remove anything that fails all three."

### Cost

- **CSS lines:** NET NEGATIVE (L5 removes unjustified CSS; typical reduction 10-30%)
- **Build time:** +10-15 minutes (rejection log + mass distribution check + stop check)
- **Pipeline complexity:** +20 lines in build plan (isomorphism table requirement), +15 lines in recipe (stop check + rejection log instruction), +20 lines in gate runner (SC-16 + SC-17)

---

## THE HIERARCHY AS AN ARCHITECTURAL STACK

### Cumulative Nature

Each level INCLUDES all levels below:

```
L5: Anti-Scale Model
    REQUIRES L4 (coherent channels to be restrained/justified)
    REQUIRES L3 (multiple channels to coordinate)
    REQUIRES L2 (scales where channels operate)
    REQUIRES L1 (perception thresholds as the visibility floor)

L4: Multi-Coherence
    REQUIRES L3 (channels to shift together)
    REQUIRES L2 (scales where shifts occur)
    REQUIRES L1 (shifts must be perceptible)

L3: Channels
    REQUIRES L2 (scales where channels manifest)
    REQUIRES L1 (channel deltas must be perceptible)

L2: Scales
    REQUIRES L1 (scale-level differences must be perceptible)

L1: Thresholds
    REQUIRES nothing (it IS the floor)
```

### Where Each Level Lives in PV2 Architecture

| Level | Planning (TC) | Execution (Recipe) | Verification (Gates) | Evaluation (PA) |
|-------|--------------|-------------------|---------------------|----------------|
| **L1** | Token values in build plan | Phase 2 (CSS Reset), Phase 3 (Backgrounds) | SC-09, SC-10, SC-11 (STRONG) | PA catches missed thresholds |
| **L2** | Fractal echo table (PROPOSED) | Phase cross-references (PROPOSED) | SC-13 scale coverage (PROPOSED) | PA evaluates cross-scale coherence |
| **L3** | Channel assignments per boundary (PROPOSED) | Phases 3-5 (channel-by-channel) | SC-14 channel coverage (PROPOSED) | PA evaluates multi-channel presence |
| **L4** | Semantic binding table (PROPOSED) | Phase 3.5 binding (PROPOSED) | SC-15 multi-coherence (PROPOSED) | PA evaluates directional coherence |
| **L5** | Isomorphism table + rejection log targets (PROPOSED) | Stop check + rejection log (PROPOSED) | SC-16, SC-17 (PROPOSED) | PA evaluates DESIGNED quality |

### The Current State: L1 is STRONG, L2-L5 are ABSENT

PV2's current architecture fully operationalizes L1 (perception thresholds) and does NOT operationalize L2-L5. The traces (01-14) confirm this:

- **L1:** SC-09, SC-10, SC-11 exist and work. The remediation proved these gates prevent the flagship's catastrophic failure mode.
- **L2:** TC Step 4.7 REQUIRES a fractal table but it DIES at the handoff boundary (trace 14). Zero recipe phases reference it. Zero gates measure it.
- **L3:** The 6-channel taxonomy exists (master synthesis) but no gate verifies multi-channel presence at boundaries. Channels are a NAMING CONVENTION, not an OPERATIONAL REQUIREMENT.
- **L4:** The mechanism catalog describes multi-coherence beautifully (lines 75-85) but it is DESCRIPTIVE, not PRESCRIPTIVE. The recipe splits channels across Phases 3-5 (trace 12). No binding table exists.
- **L5:** The anti-scale model exists in MEMORY.md and NOWHERE else in operational artifacts (trace 13). Infinity:1 compression.

### The Codification Path

To make L1-L5 inherent (not bolted on), each level needs ONE artifact per pipeline stage:

| Level | Planning Artifact | Execution Artifact | Verification Artifact |
|-------|------------------|-------------------|---------------------|
| **L1** | Token values (EXISTS) | Phase 2 recipe (EXISTS) | SC-09/10/11 (EXISTS) |
| **L2** | Fractal echo table (30 lines in build plan) | 9 cross-reference lines in recipe | SC-13 (30 lines in gate runner) |
| **L3** | Channel assignment (20 lines in build plan) | Phase 3-5 channel awareness (15 lines) | SC-14 (15 lines in gate runner) |
| **L4** | Semantic binding table (50 lines in build plan) | Phase 3.5 (20 lines in recipe) | SC-15 (30 lines in gate runner) |
| **L5** | Isomorphism + rejection targets (20 lines) | Stop check + rejection log (15 lines) | SC-16/17 (20 lines in gate runner) |

**TOTAL CODIFICATION COST:**

| Stage | New Lines | Files Modified |
|-------|----------|---------------|
| Build plan format | +120 lines | _build-plan.md template |
| Recipe | +60 lines | operational-recipe.md |
| Gate runner | +95 lines | gate-runner.js |
| TC Skill | +30 lines | SKILL.md (fractal echo table requirement) |
| **TOTAL** | **~305 lines across 4 files** | |

---

## CONCRETE SIDE-BY-SIDE: L1-ONLY vs L1-L5

To make the hierarchy tangible, here is the SAME page boundary (Introduction -> Core Analysis) at each level:

### L1 ONLY (Thresholds Satisfied)

```css
.intro { background: #FEF9F5; padding: 48px 0; }
.core  { background: #FAF5ED; padding: 48px 0; }
/* Backgrounds differ by >= 15 RGB: PASS SC-09 */
/* Padding identical: no spatial signal */
/* No border: no structural signal */
/* Typography: 16px/400 everywhere */
```
**Result:** Two zones with different backgrounds. Everything else identical. VISIBLE but MEANINGLESS.

### L1 + L2 (Scales Active)

```css
/* Page scale: zones differ */
.intro { background: #FEF9F5; padding: 64px 0; }
.core  { background: #FAF5ED; padding: 48px 0; }

/* Component scale: callouts echo the same direction */
.intro .callout { padding: 24px; border-left: 1px solid #E0D5C5; }
.core .callout  { padding: 16px; border-left: 3px solid #E83025; }
```
**Result:** Pattern visible at 2 scales (page + component). But only spatial + structural channels. PATTERNED but ONE-DIMENSIONAL.

### L1 + L2 + L3 (Multiple Channels)

```css
/* Chromatic channel */
.intro { background: #FEF9F5; }
.core  { background: #FAF5ED; }

/* Spatial channel */
.intro { padding: 64px 0; }
.core  { padding: 48px 0; }

/* Typographic channel */
.intro p { font-size: 18px; letter-spacing: 0.02em; }
.core p  { font-size: 16px; letter-spacing: 0; }

/* Structural channel */
.intro + .core { border-top: 1px solid #E0D5C5; }

/* Component echoes at each channel */
.intro .callout-label { font-size: 0.75rem; letter-spacing: 0.1em; }
.core .callout-body   { font-size: 1rem; line-height: 1.7; }
```
**Result:** 4 channels active. But backgrounds might warm while typography OPENS (contradictory). MULTI-VOICED but POTENTIALLY INCOHERENT.

### L1 + L2 + L3 + L4 (Multi-Coherent)

```css
/* BOUNDARY: Intro -> Core
   SEMANTIC DIRECTION: DEEPENING (all channels say "going deeper") */

/* Chromatic: WARMER (deeper) */
.intro { background: #FEF9F5; }
.core  { background: #FAF5ED; }

/* Spatial: TIGHTER (deeper) */
.intro { padding: 64px 0; }
.core  { padding: 48px 0; }

/* Typographic: DENSER (deeper) */
.intro p { font-size: 18px; letter-spacing: 0.02em; }
.core p  { font-size: 16px; letter-spacing: 0; }

/* Structural: HEAVIER (deeper) */
.intro + .core { border-top: 3px solid #E83025; }

/* ALL 4 CHANNELS SAY "DEEPENING" */
```
**Result:** All channels move in same direction. Ensemble creates atmospheric shift. COMPOSED.

### L1 + L2 + L3 + L4 + L5 (Anti-Scale: Designed)

```css
/* BOUNDARY: Intro -> Core
   SEMANTIC DIRECTION: DEEPENING
   CONTENT RELATIONSHIP: Overview -> Foundation of argument
   RESTRAINT: letter-spacing micro-gradients REJECTED (imperceptible)
   SPATIAL CONFIDENCE: Intro zone 55% fill (confident), Core zone 80% fill (confident) */

/* Chromatic: Intro is overview (light, welcoming) -> Core is foundation (warm, grounded) */
.intro { background: #FEF9F5; }
.core  { background: #FAF5ED; }

/* Spatial: Overview breathes (generous) -> Foundation is substantive (moderate) */
.intro { padding: 64px 0; }
.core  { padding: 48px 0; }

/* Typographic: Overview is orienting (slightly larger) -> Foundation is precise (standard) */
.intro p { font-size: 18px; }
.core p  { font-size: 16px; }

/* Structural: Overview has no border (open) -> Foundation has weight (grounded) */
.intro + .core { border-top: 3px solid #E83025; }

/* REJECTION LOG:
   - Rejected letter-spacing gradient (0.02em -> 0em per zone): below perception threshold
   - Rejected bento grid in intro: content is prose, not multi-column
   - Rejected drop cap in core: content is analytical, not editorial */
```
**Result:** Same CSS as L4 in this case -- L5 did NOT add lines. It JUSTIFIED every line and REMOVED what would have been unjustified additions. The result is fewer total CSS lines across the whole page, each carrying maximum meaning. DESIGNED.

---

## SUMMARY TABLE

| Level | What It Adds | CSS Impact | Build Time | PA-05 Score | Enforcement |
|-------|-------------|-----------|-----------|------------|-------------|
| **L1: Thresholds** | Visibility floor | ~20 lines (token values) | 0 min (baseline) | Prevents 1.5/4 | FULLY programmatic (SC-09/10/11) |
| **L2: Scales** | Cross-scale pattern | +30-50 lines | +15-20 min | ~2/4 STYLED | Partially programmatic (SC-13) + fractal echo table |
| **L3: Channels** | Multi-channel encoding | +60-100 lines | +20-30 min | ~2.5/4 STYLED+ | Partially programmatic (SC-14) + channel assignments |
| **L4: Multi-Coherence** | Directional binding | +0-20 lines (value changes) | +15-20 min | ~3/4 COMPOSED | Partially programmatic (SC-15) + semantic binding table |
| **L5: Anti-Scale** | Justification + restraint | NET NEGATIVE (removes unjustified) | +10-15 min | 4/4 DESIGNED | Proxies (SC-16/17) + rejection log + stop check |
| **TOTAL** | Full compositional intelligence | ~400-500 lines (net) | ~60-85 min total | 4/4 DESIGNED | 7 new gates + 3 new artifacts |

The critical insight: **L5 costs the LEAST to add (fewest lines, least time) and delivers the MOST value (DESIGNED quality).** But L5 REQUIRES L1-L4 as its foundation. You cannot have restraint without channels to restrain, scales to deploy at, and thresholds to ensure visibility. The hierarchy is irreducibly cumulative.

---

**END OF INTELLIGENCE HIERARCHY MAP**

**Statistics:**
- Sources consulted: 14 trace files + mechanism catalog + scale research + 4 experiment result sets
- Levels mapped: 5
- Per-level analysis: CSS examples, perceptual descriptions, PA-05 correspondence, programmatic enforcement, structured enforcement, cost
- Total new pipeline artifacts identified: 7 new gates (SC-13 through SC-17 + 2 proxies) + 3 new structured artifacts (fractal echo table, semantic binding table, rejection log)
- Total codification cost: ~305 lines across 4 files
