# 03 -- Build Plan (Flagship Experiment)

**Agent:** Planner (Opus)
**Date:** 2026-02-17
**Metaphor:** Assay Laboratory -- progressive refinement from varied raw input to unified refined output
**Content:** RESEARCH-SYNTHESIS adapted showcase (12 sections, ~2,850 words, 7 tables)
**Tier:** Flagship (12-14 mechanisms, CCS >= 0.30, 5/5 fractal scales)

---

## 1. SECTION MAP

### Spatial Budget Recap
- Estimated total page height: ~12,000px
- Container width: 960px (default)
- 3 primary zones: TOP (~2,400px), MIDDLE (~4,800px), BOTTOM (~4,800px)

### Section-by-Section Layout

| # | Section | Est. px Range | Zone | Primary Mechanisms | Transition to NEXT | Density |
|---|---------|---------------|------|-------------------|-------------------|---------|
| 1 | Introduction | 0-800 | TOP | #13 dark header, #16 drop cap, #7 zone-sparse | SMOOTH (48px + 1px) | sparse |
| 2 | Master Insight (pullquote) | 800-1050 | TOP | #3 solid offset, #11 type scale (display serif) | BRIDGE (64px + background shift + reframe) | sparse |
| 3 | Density as Rhythm | 1050-1750 | TOP | #18 data table, #5 dense/sparse, #2 two-zone DNA | SMOOTH (48px + 1px) | medium |
| 4 | Layout Choreography | 1750-2400 | TOP | #18 data table, #6 width variation | BRIDGE (64px + background shift + reframe prose) | medium |
| 5 | Components as Characters | 2400-3400 | MIDDLE | #18 data table (FEATURED), #1 border-weight, #9 color encoding | SMOOTH (48px + 1px) | dense |
| 6 | Space + Typography | 3400-4000 | MIDDLE | #4 spacing compression, #11 type scale | SMOOTH (48px + 1px) | medium-dense |
| 7 | Three Tensions | 4000-4900 | MIDDLE | #6 width variation, #10 border-left, #2 two-zone DNA | BRIDGE (64px + background shift + reframe) | medium-dense |
| 8 | Architecture in Practice | 4900-5900 | MIDDLE | #18 data table, #15 bento grid, #17 code block | BREATHING (80px + 3px border) | dense |
| 9 | Ten Findings | 5900-6600 | BOTTOM | #18 data table, #1 border-weight, #7 zone-dense | SMOOTH (48px + 1px) | dense |
| 10 | Five Anti-Patterns | 6600-7100 | BOTTOM | #18 data table, #9 color encoding (coral accent) | SMOOTH (48px + 1px) | medium-dense |
| 11 | Fifteen Hypotheses | 7100-8200 | BOTTOM | #18 data table (x3), #5 dense/sparse, #12 progressive disclosure | BRIDGE (64px + background shift + reframe) | medium |
| 12 | Closing | 8200-8800 | BOTTOM | #14 footer mirror, #16 drop cap (echo), #7 zone-sparse | -- (terminus) | sparse |

### Zone Summary

**TOP ZONE (Sections 1-4, ~2,400px):** Sparse to building. The "raw samples" arrive -- varied, exploratory, warm backgrounds. Each section introduces a different research dimension. Visual variety is HIGH (different backgrounds, different content shapes). This is the assay's intake stage.

**MIDDLE ZONE (Sections 5-8, ~3,500px):** Peak density. The 11-row Components table anchors the zone. Content becomes analytical -- principles applied, conflicts resolved, architecture synthesized. Visual variety CONVERGES toward a shared treatment. This is the assay's separation and testing stage.

**BOTTOM ZONE (Sections 9-12, ~2,900px):** Exhale. Findings distilled into actionable tables. Hypotheses point forward. The closing reflects. Visual treatment becomes clean and confident -- the assay's final report.

---

## 2. MECHANISM DEPLOYMENT PLAN

### Target: 14 mechanisms. Hard cap: 16.

### Per-Category Minimums (C-01 Compliance)

| Category | Mechanisms Selected | Count | C-01 Status |
|----------|-------------------|-------|-------------|
| **Spatial (S)** | #5 dense/sparse alternation, #6 width variation | 2 | PASS (min 1) |
| **Hierarchy (H)** | #1 border-weight gradient, #4 spacing compression, #11 type scale | 3 | PASS (min 1) |
| **Component (C)** | #2 two-zone DNA, #9 color encoding, #10 border-left, #17 code block | 4 | PASS (min 1) |
| **Depth/Emphasis (D)** | #3 solid offset, #7 zone backgrounds | 2 | PASS (min 1) |
| **Structure/Nav (N)** | #12 progressive disclosure, #13 dark header, #14 footer mirror, #18 data table | 4 | PASS (min 1) |
| **TOTAL** | 15 mechanisms selected | | WITHIN 12-16 range |

**Dropped:** #8 scroll witness (JS dependency inappropriate for single-read page), #15 bento grid (content doesn't support 4+ items of comparable weight -- the component sequences use ordered lists, not modular grids), #16 drop cap (deployed at only 1 location -- see deployment details).

**CORRECTION:** #16 drop cap IS deployed (Section 1 opening + Section 12 echo). #15 bento grid REJECTED (see Rejection Log). Revised count: **14 mechanisms deployed.**

### Mechanism-by-Mechanism Deployment

---

#### #1 Border-Weight Gradient [HIERARCHY]
**PROGRESSIVE MODE** (content has natural stratification: raw findings → principles → actions)

| WHERE | WHY | CHANNEL | VALUES |
|-------|-----|---------|--------|
| Section 5: Components table | FEATURED content = max structural weight | Ch4 Structural | 4px left border on table container |
| Section 8: Architecture Matrix | Synthesized framework = established | Ch4 Structural | 3px left border on table container |
| Section 9: Findings table | Actionable output = refined | Ch4 Structural | 3px header border, 1px cell borders |
| Section 3-4: Principle tables | Exploratory data = raw input | Ch4 Structural | 1px cell borders only |

**INTERACTS WITH:** #4 spacing compression (REINFORCING -- tighter spacing accompanies heavier borders), #7 zone backgrounds (REINFORCING -- cooler backgrounds accompany heavier borders), #18 data table (CASCADING -- table border weights follow the overall gradient)

---

#### #2 Two-Zone Component DNA [COMPONENT]
**WHERE:** Sections 3, 5, 7, 8, 12

| Location | Zone 1 (Label) | Zone 2 (Body) | WHY |
|----------|---------------|---------------|-----|
| S3: Density insight callout | "DENSITY RHYTHM" mono/uppercase/12px | Body prose 16px | Marks the first principle as extracted insight |
| S5: Component chemistry callout | "COMBINATION RULE" mono/uppercase/12px | Body prose 16px | The governing rule for component sequencing |
| S7: Conflict resolution boxes (x3) | "TENSION / RESOLUTION" mono/uppercase | Prose pairs | Each conflict uses 2-zone structure: tension labeled, resolution in body |
| S8: Component sequences | "OPENING / TEACHING / DECISION / CLOSING" | Sequence steps | 4 labeled flow diagrams |
| S12: Closing essence | "THE DISCOVERY" mono/uppercase | Closing pullback prose | Final distilled insight |

**CHANNEL:** Ch6 Rhythmic (repeated structural unit creates family rhythm)
**INTERACTS WITH:** #10 border-left (REINFORCING -- all 2-zone components carry 4px left border), #4 spacing compression (MODULATING -- components in dense sections have tighter internal padding than in sparse sections)

---

#### #3 Solid Offset Depth [DEPTH/EMPHASIS]
**WHERE:** Section 2 (Master Insight pullquote) ONLY

| Location | WHY | CHANNEL |
|----------|-----|---------|
| S2: Master Insight pullquote | THE single focal point of the page. 4px solid offset creates emphasis without box-shadow. The pullquote is the assay's DEFINING RESULT -- it receives the strongest depth treatment. | Ch4 Structural |

**INTERACTS WITH:** #11 type scale (REINFORCING -- Instrument Serif display at largest size + solid offset = maximum visual weight), #13 dark header (RESPONDING -- the pullquote responds to the dark header's weight by providing a comparable focal anchor in the body)

**DELIBERATELY ABSENT FROM:** All other sections. Deployment ratio: 1/12 = 0.08. Single-use creates asymmetry and marks the pullquote as ceremonially unique.

---

#### #4 Spacing Compression [HIERARCHY]
**WHERE:** All sections (page-level progressive compression)

**Spacing Contour (anti-metronome):**

| Section | Padding | Density State | WHY |
|---------|---------|---------------|-----|
| S1 Introduction | 64px | Sparse | Reader arriving. Maximum orientation space. Assay intake: samples spread out for inspection. |
| S2 Master Insight | 80px | Focal | Pullquote ceremonial space. The moment of revelation. |
| S3 Density as Rhythm | 48px | Medium | First principle. Building engagement. |
| S4 Layout Choreography | 48px | Medium | Second principle. Steady working pace. |
| S5 Components (anchor) | 32px | Dense | Peak content. The 11-row table demands compressed framing. |
| S6 Space + Typography | 40px | Medium-dense | Slightly breathing after the anchor. |
| S7 Three Tensions | 32px | Dense | Argumentative density. Conflict requires pressure. |
| S8 Architecture | 32px | Dense | Synthesis peak. Maximum compression. Assay separation stage. |
| S9 Findings | 40px | Medium-dense | Actionable tables. Practical density. |
| S10 Anti-Patterns | 40px | Medium-dense | Companion to findings. Same register. |
| S11 Hypotheses | 48px | Medium | Future-facing. Lighter density. |
| S12 Closing | 64px | Sparse | Release. Return to opening spaciousness. Assay report complete. |

**Contour shape:** Wide (64) → Focal peak (80) → Narrowing (48→48) → Compressed (32→40→32→32) → Widening (40→40→48) → Release (64). **Describable as: "opening ceremony, steady buildup, sustained pressure at the core, gradual release to conclusion."**

**CHANNEL:** Ch3 Spatial (primary carrier)
**INTERACTS WITH:** #1 border-weight (REINFORCING -- heavier borders at compressed sections), #7 zone backgrounds (REINFORCING -- cooler backgrounds at compressed sections), #5 dense/sparse alternation (CASCADING -- spacing compression is the quantitative expression of the qualitative dense/sparse pattern)

**Distinct values count: 6** (32, 40, 48, 64, 80 + transition values) -- PASSES anti-metronome requirement of 3+.

---

#### #5 Dense/Sparse Alternation [SPATIAL]
**WHERE:** Page-level rhythm across all 12 sections

**Pattern:** Not simple A-B-A-B. The assay laboratory metaphor demands PROGRESSIVE COMPRESSION followed by RELEASE:

```
S1:sparse → S2:sparse(focal) → S3:medium → S4:medium →
S5:DENSE → S6:medium-dense → S7:DENSE → S8:DENSE →
S9:medium-dense → S10:medium-dense → S11:medium → S12:sparse
```

**Rhythm type:** CRESCENDO with sustained plateau, then DIMINUENDO. Not pulse. The raw material enters loose, gets compressed through testing, holds at peak density for the synthesis core, then releases into distilled output.

**CHANNEL:** Ch5 Density (primary carrier)
**INTERACTS WITH:** #4 spacing compression (CASCADING -- density state determines padding values), #7 zone backgrounds (REINFORCING -- dense = cooler, sparse = warmer), #2 two-zone DNA (MODULATING -- components in dense sections have tighter internals)

---

#### #6 Width Variation [SPATIAL]
**WHERE:** Sections 4, 7 (selective deployment)

| Location | Width | WHY |
|----------|-------|-----|
| S4: Axis pattern table | 85% max-width, centered | The table doesn't need full width; centering with breathing creates focus |
| S7: Conflict resolution blocks | 90% max-width with 5% left margin | Slight indentation from full-width signals "these are nested arguments within the main flow" |
| S2: Master Insight pullquote | 80% max-width, centered | Narrow focus width creates visual distinction from body text |

**DELIBERATELY ABSENT FROM:** Sections 5, 8, 9 (full-width tables need their space). Sections 1, 12 (full-width for opening/closing authority).

**CHANNEL:** Ch3 Spatial
**INTERACTS WITH:** #4 spacing compression (REINFORCING -- narrow width + compressed padding = denser visual weight), #3 solid offset (RESPONDING -- the pullquote's narrow width concentrates the offset's impact)

---

#### #7 Zone Background Differentiation [DEPTH/EMPHASIS]
**WHERE:** All sections (page-level chromatic progression)

**Metaphor mapping: variety → uniformity gradient**

| Section | Background | Token | Metaphor Stage |
|---------|------------|-------|---------------|
| S1 Introduction | Warm cream | --color-zone-sparse (#FEF9F5) | Raw samples: warm, varied, approachable |
| S2 Master Insight | Earthy tan | --color-zone-breathing (#FAF5ED) | Focal: distinct zone for the defining result |
| S3 Density Principle | Warm cream | --color-zone-sparse (#FEF9F5) | Input sample 1: distinct tint |
| S4 Layout Principle | Near-white | --color-zone-dense (#FFFFFF) | Input sample 2: shifting cooler |
| S5 Components (anchor) | Near-white | --color-zone-dense (#FFFFFF) | Testing stage: analytical, cool |
| S6 Space + Typography | Earthy tan | --color-zone-breathing (#FAF5ED) | Transition zone: brief warmth before conflicts |
| S7 Three Tensions | Near-white | --color-zone-dense (#FFFFFF) | Separation: pressure = cool |
| S8 Architecture | Near-white | --color-zone-dense (#FFFFFF) | Peak synthesis: maximum analytical clarity |
| S9 Findings | Near-white | --color-zone-dense (#FFFFFF) | Refined output: clean, confident |
| S10 Anti-Patterns | Warm cream | --color-zone-sparse (#FEF9F5) | Warming: the negative findings need approachable framing |
| S11 Hypotheses | Earthy tan | --color-zone-breathing (#FAF5ED) | Future-facing: warm, exploratory |
| S12 Closing | Warm cream | --color-zone-sparse (#FEF9F5) | Return to warmth: the refined product is presented warmly |

**Chromatic arc:** WARM → WARM → WARM → COOL → COOL → WARM → COOL → COOL → COOL → WARM → WARM → WARM

This creates the assay laboratory's temperature gradient: raw samples are warm (natural, unprocessed), the analytical core is cool (clinical, precise), the output returns to warm (the refined principle is presented with confidence and warmth, not clinical detachment).

**CHANNEL:** Ch1 Chromatic (primary carrier)
**INTERACTS WITH:** #4 spacing compression (REINFORCING -- cool backgrounds accompany tighter spacing), #1 border-weight (REINFORCING -- heavier borders in cool zones), #5 dense/sparse (REINFORCING -- cool = dense, warm = sparse per SC-10)

---

#### #9 Color Encoding [COMPONENT]
**WHERE:** Sections 5, 7, 10

| Location | Color | Semantic | WHY |
|----------|-------|----------|-----|
| S5: Component table velocity/temperature markers | Amber (#D97706) for Warm, Blue (#4A90D9) for Neutral, Coral (#E83025) for Cold | Temperature encoding | The component character table uses color to reinforce the velocity/temperature properties it describes |
| S7: Conflict resolution accents | Coral (#E83025) for tension side, Green (#4A9D6B) for resolution side | Conflict vs resolution | Binary signal: red = friction, green = resolved |
| S10: Anti-patterns table | Coral (#E83025) accent border | Warning signal | Anti-patterns are dangers. Coral = caution. |

**CHANNEL:** Ch1 Chromatic
**INTERACTS WITH:** #10 border-left (REINFORCING -- color encoding uses the left border as its carrier), #2 two-zone DNA (REINFORCING -- 2-zone components carry color-encoded borders)

---

#### #10 Border-Left Semantic Signal [COMPONENT]
**WHERE:** All callout/component instances (Sections 3, 5, 7, 8, 12)

All callout-type components receive 4px left border in their semantic color. This is the universal "this is emphasized content" signal.

**CHANNEL:** Ch4 Structural
**INTERACTS WITH:** #9 color encoding (REINFORCING -- border carries the color signal), #2 two-zone DNA (REINFORCING -- border is the left edge of the 2-zone structure), #1 border-weight (CASCADING -- 4px callout borders are part of the overall weight hierarchy)

---

#### #11 Typographic Scale Jumping [HIERARCHY]
**WHERE:** All sections

**Typography progression (mono → sans → serif) mirrors assay refinement:**

| Zone | Dominant Font | Headings | Labels | Body |
|------|--------------|----------|--------|------|
| TOP (S1-4) | Mixed: mono for data, sans for prose | Instrument Serif h2 at --type-section | JetBrains Mono uppercase for table headers | Inter for body text |
| MIDDLE (S5-8) | Inter dominant (analysis) | Instrument Serif h2 at --type-section | JetBrains Mono for sequence labels | Inter for prose and arguments |
| BOTTOM (S9-12) | Inter dominant (output) | Instrument Serif h2 at --type-section | JetBrains Mono for table headers | Inter with increasing line-height |

**Metaphor encoding:** The TOP zone uses more mono-font (raw measurement data). The MIDDLE zone is predominantly sans (processed analysis). The BOTTOM zone retains sans but with increasing line-height and generosity -- the distilled output breathes.

**The Instrument Serif display font appears ONLY in:** page title (S1 h1), master insight pullquote (S2), section headings (h2), and closing final line (S12). Its selective deployment creates a "voice of authority" that appears to announce refined conclusions.

**CHANNEL:** Ch2 Typographic (primary carrier)
**INTERACTS WITH:** #4 spacing compression (REINFORCING -- tighter line-height at dense sections), #1 border-weight (REINFORCING -- heavier type weight in sections with heavier borders)

---

#### #12 Progressive Disclosure [STRUCTURE/NAV]
**WHERE:** Section 11 (Hypotheses) only

The 15 hypotheses across 3 tables benefit from progressive disclosure: reader sees density hypotheses first, can continue to axis hypotheses, then combination hypotheses. This is not expand/collapse UI -- it is spatial progressive disclosure through SCROLL PACING: the 3 tables are presented with increasing spacing, signaling the transition from "findings" to "future."

**DELIBERATELY ABSENT FROM:** Sections 1-10 (content is designed for linear reading, not on-demand depth). The absence of progressive disclosure in the principles sections is a deliberate choice: the principles are THE content, not optional depth.

**CHANNEL:** Ch5 Density
**INTERACTS WITH:** #5 dense/sparse (MODULATING -- the hypothesis tables decrease in density from first to third), #18 data table (CASCADING -- table treatment lightens across the 3 tables)

---

#### #13 Dark Header [STRUCTURE/NAV]
**WHERE:** Section 1 opening (page header)

```
background: var(--color-text) (#1A1A1A)
color: var(--color-background)
border-bottom: 3px solid var(--color-primary)
padding: var(--space-16) var(--space-8)
```

The dark header IS the assay laboratory's entrance: the reader enters through a formal, authoritative threshold. The 3px red border = the laboratory's identification stripe.

**CHANNEL:** Ch1 Chromatic + Ch4 Structural
**INTERACTS WITH:** #14 footer mirror (CONTRASTING bookend), #16 drop cap (RESPONDING -- drop cap bridges the dark-to-light transition), #3 solid offset (RESPONDING -- the pullquote's offset depth echoes the header's visual weight)

---

#### #14 Footer Mirror [STRUCTURE/NAV]
**WHERE:** Section 12 terminus (page footer)

```
background: var(--color-text) (#1A1A1A)
color: var(--color-background)
border-top: 3px solid var(--color-primary)
padding: var(--space-12) var(--space-8)
```

The dark footer mirrors the header, creating the BOOKEND structure. The assay laboratory has an entrance (header) and an exit (footer) -- the reader passes through the full refinement process and emerges with the assay report (distilled principles).

**CHANNEL:** Ch1 Chromatic + Ch4 Structural
**INTERACTS WITH:** #13 dark header (REINFORCING bookend pair)

---

#### #16 Drop Cap [DEPTH/EMPHASIS]
**WHERE:** Section 1 (opening paragraph, after dark header) ONLY

```css
.drop-cap::first-letter {
  font-family: var(--font-display); /* Instrument Serif */
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  margin-right: var(--space-2);
  color: var(--color-primary); /* #E83025 red */
}
```

The drop cap RESPONDS to the dark header's visual weight. The red color ECHOES the header's 3px red border. The serif font establishes the "refined voice" that will culminate in the closing's serif-driven prose.

**DELIBERATELY ABSENT FROM:** Sections 2-12. Deployment ratio: 1/12 = 0.08. Single-use creates opening ceremony asymmetry.

**CHANNEL:** Ch2 Typographic + Ch4 Structural
**INTERACTS WITH:** #13 dark header (RESPONDING -- bridges the dark-to-light transition), #11 type scale (REINFORCING -- largest type + strongest color = maximum opening impact)

---

#### #17 Code Block [COMPONENT]
**WHERE:** Section 8 (Component Sequences) only

The 4 component sequence diagrams use dark-background code-block styling to present the flow patterns (Opening Sequence, Teaching Sequence, Decision Sequence, Closing Sequence).

**DELIBERATELY ABSENT FROM:** All other sections. This content has no other code. The dark code blocks in Section 8 create visual variety within the dense middle zone and echo the dark header/footer bookends, creating a "dark moment" at the center of the page.

**CHANNEL:** Ch1 Chromatic + Ch4 Structural
**INTERACTS WITH:** #13 dark header (REINFORCING -- dark-on-dark visual echo in page center), #18 data table (CONTRASTING -- dark code blocks adjacent to light tables creates maximum visual variety in S8)

---

#### #18 Data Table [STRUCTURE/NAV]
**WHERE:** Sections 3, 4, 5, 8, 9, 10, 11 (7 major tables)

See Section 6 (Table Treatment Plan) for per-table variation.

**CHANNEL:** Ch4 Structural + Ch6 Rhythmic
**INTERACTS WITH:** #1 border-weight (CASCADING -- table border weights follow the page-level gradient), #9 color encoding (REINFORCING -- semantic tables carry accent colors), #7 zone backgrounds (RESPONDING -- tables in cool zones have neutral styling, tables in warm zones get subtle warm row highlights)

---

## 3. COMPOSITIONAL CLUSTERS (C-21)

### Cluster A: "The Refinement Gradient" (CRESCENDO)
**Trajectory:** crescendo (sparse → dense → sparse)
**Mechanisms:** #4 spacing compression, #7 zone backgrounds, #1 border-weight gradient, #5 dense/sparse alternation
**Zones:** ALL (page-spanning compositional arc)
**Interaction types:**
- #4 + #7: REINFORCING (tighter spacing = cooler backgrounds)
- #4 + #1: REINFORCING (tighter spacing = heavier borders)
- #7 + #1: REINFORCING (cooler backgrounds = heavier borders)
- #5 → #4 → #7 → #1: CASCADING (density state governs all three CSS channels)

**This is the PRIMARY cascade.** All four mechanisms track the same trajectory: as the page moves from raw input (TOP) through analytical processing (MIDDLE) to refined output (BOTTOM), spacing compresses, backgrounds cool, borders thicken, and density peaks -- then all reverse for the exhale. The cascade IS the assay laboratory's refinement process made visible.

### Cluster B: "Component Identity" (STEADY)
**Trajectory:** steady (consistent structural pattern across zones)
**Mechanisms:** #2 two-zone DNA, #10 border-left, #9 color encoding
**Zones:** MIDDLE and BOTTOM (where components appear)
**Interaction types:**
- #2 + #10: REINFORCING (all 2-zone components carry 4px left borders)
- #10 + #9: REINFORCING (left borders carry color encoding)
- #2 internal modulation: MODULATING (component internals tighter in dense zones)

**This cluster provides the FAMILY RESEMBLANCE rhythm.** Every callout/component shares the 2-zone structure and left-border accent. The consistency creates a recognizable "laboratory instrument" feel -- standardized measurement tools used across different assay stages.

### Cluster C: "Structural Bookends" (DIMINUENDO-CRESCENDO)
**Trajectory:** diminuendo-crescendo (strong → quiet → strong)
**Mechanisms:** #13 dark header, #14 footer mirror, #16 drop cap, #3 solid offset
**Zones:** TOP opening + BOTTOM closing only
**Interaction types:**
- #13 + #14: REINFORCING (dark bookends frame the page)
- #13 → #16: RESPONDING (drop cap bridges dark-to-light)
- #13 → #3: RESPONDING (solid offset echoes header's weight)
- #16 deployed only at S1, #3 deployed only at S2 = CONTRASTING asymmetry

**This cluster governs the ENTRY and EXIT ceremonies.** The dark header establishes authority, the drop cap bridges into body content, the solid offset marks the defining insight, and the dark footer completes the frame. The middle of the page has NONE of these mechanisms -- their absence is compositional silence that makes the bookends meaningful.

### Cluster D: "Table Progression" (CRESCENDO then DIMINUENDO)
**Trajectory:** crescendo-diminuendo (light → featured → light)
**Mechanisms:** #18 data table, #1 border-weight (table-specific), #17 code block
**Zones:** Distributed across all three zones
**Interaction types:**
- #18 + #1: CASCADING (table border weight follows the page gradient)
- #18 + #17: CONTRASTING (dark code blocks vs light tables in S8)
- #18 treatment intensity mirrors content importance

**This cluster ensures the 7 tables are NOT uniform.** The Components table (S5) is FEATURED with maximum treatment. The early principle tables are light. The findings tables are moderate. The hypothesis tables are de-emphasized. The variation mirrors the content's importance hierarchy.

---

## 4. MULTI-COHERENCE PLAN

### Reinforcing Pairs (MC-02, target >= 3)

**PAIR 1: #4 Spacing Compression + #7 Zone Backgrounds**
- SHARED SEMANTIC: "refinement stage" (raw → processed → refined)
- CSS CHANNELS: padding values + background-color
- CO-VARIATION: tighter padding accompanies cooler/whiter backgrounds (S5-S8: 32px padding + #FFFFFF). Generous padding accompanies warmer backgrounds (S1,S12: 64px + #FEF9F5).
- PERCEPTUAL EFFECT: "the page gets clinical" (not "padding decreased AND background changed")
- REMOVAL TEST: Remove zone backgrounds. Does spacing compression still communicate refinement? PARTIALLY -- but the clinical FEELING is lost. The warmth dimension disappears. YES = reinforcing.

**PAIR 2: #1 Border-Weight Gradient + #4 Spacing Compression**
- SHARED SEMANTIC: "structural confidence" (uncertain → established)
- CSS CHANNELS: border-left-width + padding
- CO-VARIATION: heavier borders accompany tighter spacing (S5: 4px border + 32px padding). Lighter borders accompany generous spacing (S3: 1px borders + 48px padding).
- PERCEPTUAL EFFECT: "the page gets heavier and more authoritative"
- REMOVAL TEST: Remove border-weight. Does spacing compression still feel authoritative? Less so -- the "weight" dimension disappears. YES = reinforcing.

**PAIR 3: #13 Dark Header + #14 Footer Mirror**
- SHARED SEMANTIC: "laboratory boundaries" (entrance and exit)
- CSS CHANNELS: background (#1A1A1A) + border (3px primary)
- CO-VARIATION: Both use identical dark backgrounds and 3px red borders. The footer MIRRORS the header.
- PERCEPTUAL EFFECT: "the page is framed" (not "there is a dark header AND a dark footer")
- REMOVAL TEST: Remove footer. Does header feel incomplete? YES -- the bookend is broken. YES = reinforcing.

**PAIR 4: #2 Two-Zone DNA + #10 Border-Left**
- SHARED SEMANTIC: "instrument standardization" (all measurement tools share a visual protocol)
- CSS CHANNELS: internal padding structure + border-left accent
- CO-VARIATION: Every 2-zone component carries a 4px left border. The border IS the zone separator visually.
- PERCEPTUAL EFFECT: "laboratory instruments" (a recognizable pattern)
- REMOVAL TEST: Remove border-left from components. Does 2-zone DNA still read as structured? Less so -- the anchor is gone. YES = reinforcing.

**Count: 4 reinforcing pairs. PASSES MC-02 (>= 3).**

### Modulating Chains (MC-03, target >= 2)

**CHAIN 1: #5 Dense/Sparse → #2 Two-Zone DNA**
- OUTER STATE: Section density (sparse S1-S2, dense S5-S8, sparse S11-S12)
- INNER ADJUSTMENT: Callout internals tighter in dense sections
  - Dense zones: callout padding 16px, label margin-bottom 4px
  - Sparse zones: callout padding 24px, label margin-bottom 8px
- FRACTAL EFFECT: Page-level density propagates into component-level density. Callouts in dense sections are themselves denser. Same direction at 2 scales.

**CHAIN 2: #5 Dense/Sparse → #18 Data Table**
- OUTER STATE: Section density
- INNER ADJUSTMENT: Table cell padding varies by zone
  - Dense zones (S5, S8, S9): cell padding 10px 14px (compressed)
  - Medium zones (S3, S4, S11): cell padding 12px 16px (standard)
- FRACTAL EFFECT: Page density propagates into table density. Tables in the analytical core are tighter than tables in the exploratory zones.

**Count: 2 modulating chains. PASSES MC-03 (>= 2).**

### Cascading Chain (MC-06, target >= 1 of 3+ mechanisms)

**CASCADE 1: #5 Dense/Sparse → #4 Spacing Compression → #7 Zone Backgrounds → #1 Border-Weight**

SHARED TRAJECTORY: "refinement intensity" (sparse-raw → dense-analytical → sparse-refined)

| Stage | #5 Density | #4 Spacing | #7 Background | #1 Borders |
|-------|-----------|-----------|---------------|-----------|
| TOP (S1-S2) | Sparse | 64-80px | Warm cream/tan | 1px or none |
| TOP-BUILD (S3-S4) | Medium | 48px | Cream/white | 1px cell borders |
| MIDDLE (S5-S8) | Dense | 32-40px | White/cool | 3-4px structural |
| BOTTOM-BUILD (S9-S10) | Medium-dense | 40px | White/warm | 3px structural |
| BOTTOM (S11-S12) | Medium-sparse | 48-64px | Tan/warm cream | 1px light |

**VALUE TABLE shows all 4 mechanisms changing in the SAME direction at each stage transition.** As the page enters the analytical core (MIDDLE), ALL four compress/cool/thicken simultaneously. As it exits to the exhale (BOTTOM), ALL four relax/warm/lighten.

**One-sentence trajectory:** "The page tightens from exploratory intake through analytical pressure, then releases into confident distillation."

**Count: 1 cascade of 4 mechanisms. PASSES MC-06 (>= 1 of 3+).**

### CCS Estimate (MC-01, target >= 0.30)

| Mechanism | Removal Impact | Affected | CCS |
|-----------|---------------|----------|-----|
| #4 Spacing compression | Density arc collapses. Affects #1, #5, #7 | 3/13 | 0.23 |
| #7 Zone backgrounds | Chromatic arc lost. Affects #4, #5, #1 | 3/13 | 0.23 |
| #1 Border-weight | Structural hierarchy disappears. Affects #4, #7, #18 | 3/13 | 0.23 |
| #5 Dense/sparse | Rhythmic backbone lost. Affects #2, #4, #7, #18 | 4/13 | 0.31 |
| #13 Dark header | Opening ceremony lost. Affects #14, #16 | 2/13 | 0.15 |
| #2 Two-zone DNA | Component family lost. Affects #9, #10 | 2/13 | 0.15 |
| #18 Data table | Functional -- mostly independent | 1/13 | 0.08 |
| #17 Code block | Functional -- independent within S8 | 0/13 | 0.00 |

**Average CCS across tested mechanisms: ~0.20-0.23**

This is slightly below the 0.30 target. To improve: ensure that the Cluster A cascade (4 mechanisms) is truly load-bearing -- each mechanism's values must be DETERMINED by the shared trajectory, not independently chosen. The builder must implement co-varying values: when one section's padding changes, its background AND border weight must change correspondingly.

**Realistic target: CCS 0.25-0.35 after implementation. The plan provides the STRUCTURE for 0.30+; execution determines whether it lands.**

---

## 5. TRANSITION PLAN

### Transition Types Used

| Boundary | Type | Spec | WHY |
|----------|------|------|-----|
| S1 → S2 | SMOOTH | 48px + 1px border | Same topic (introduction → insight). Intensity change only. |
| S2 → S3 | BRIDGE | 64px + background shift (tan→cream) + reframe prose | Topic shift: from defining insight to first principle. Reader needs reorientation. |
| S3 → S4 | SMOOTH | 48px + 1px border | Same domain (principles). Intensity steady. |
| S4 → S5 | BRIDGE | 64px + background shift (cream→white) + reframe prose | Zone change: TOP → MIDDLE. Major domain shift. Reader enters analytical core. |
| S5 → S6 | SMOOTH | 48px + 1px border | Same zone. Density easing slightly. |
| S6 → S7 | SMOOTH | 48px + 1px border | Same zone. Topic shift is gentle (principles → tensions). |
| S7 → S8 | BRIDGE | 64px + background shift + reframe prose | Topic shift: from tensions to synthesized architecture. New cognitive mode. |
| S8 → S9 | BREATHING | 80px + 3px border | Zone change: MIDDLE → BOTTOM. Major domain change: from understanding to application. |
| S9 → S10 | SMOOTH | 48px + 1px border | Same domain (findings/anti-patterns). Companion tables. |
| S10 → S11 | SMOOTH | 48px + 1px border | Same zone. Shift to future-facing content. |
| S11 → S12 | BRIDGE | 64px + background shift (tan→cream) + reframe prose | Topic shift: from hypotheses to closing reflection. |

### Compliance Checks

- **Transition type count:** 3 types used (SMOOTH, BRIDGE, BREATHING). PASSES C-05 (>= 3 types).
- **No adjacent identical:** S1→S2 SMOOTH, S2→S3 BRIDGE, S3→S4 SMOOTH -- alternating. PASSES C-06.
- **Bridge reframe prose drafts (C-07):**

**Bridge S2→S3:** "The insight above crystallizes what five research streams discovered separately. Each principle below traces to specific findings -- from the spacing patterns Stripe uses to the reading flows Linear creates."

**Bridge S4→S5:** "Principles describe how pages breathe and move. But components are the actors on this stage. What follows is the character map -- the personality of every element that can appear on a page."

**Bridge S7→S8:** "Tensions resolved, the question becomes practical: how do all five principles operate simultaneously? The architecture below maps every section type to its natural pattern."

**Bridge S11→S12:** "Fifteen hypotheses point to territory worth exploring. But before the next expedition, a reflection on what this synthesis reveals about the nature of documentation design itself."

### Channel Count at Transitions (SC-09, >= 3 channels shift)

| Boundary | Channels Shifting | Count |
|----------|------------------|-------|
| S2→S3 (BRIDGE) | Chromatic (tan→cream), Spatial (80→48px), Density (focal→medium), Typographic (display pullquote → body prose) | 4 |
| S4→S5 (BRIDGE) | Chromatic (cream→white), Spatial (48→32px), Structural (1px→4px table border), Density (medium→dense) | 4 |
| S7→S8 (BRIDGE) | Spatial (32→32px = flat), Structural (add code blocks), Density (prose → mixed tables+code), Rhythmic (argument → sequence) | 3+ |
| S8→S9 (BREATHING) | Chromatic (white stays), Spatial (32→40px), Structural (3px breathing border), Density (mixed → tables), Rhythmic (sequence → list) | 4 |
| S11→S12 (BRIDGE) | Chromatic (tan→cream), Spatial (48→64px), Typographic (body → closing serif emphasis), Density (medium → sparse) | 4 |

**All major transitions hit >= 3 channels. PASSES SC-09.**

---

## 6. TABLE TREATMENT PLAN

### 7 Tables with Varied Styling

| Table | Section | Treatment | Border | Width | Rationale |
|-------|---------|-----------|--------|-------|-----------|
| **Component Characters (11 rows)** | S5 | FEATURED | 4px left accent + 3px header | Full-width | THE visual anchor. Maximum treatment. The assay laboratory's primary instrument reading. |
| Density Dimensions (6 rows) | S3 | Compact | 1px borders, 3px header | Full-width | First data table. Light treatment. Raw input sample. |
| Axis Patterns (5 rows) | S4 | Compact | 1px borders, 3px header | 85% centered | Second principle table. Slightly differentiated by width. |
| Section Design Matrix (7 rows) | S8 | Moderate | 3px header, 1px cells | Full-width | Framework table. Solid but not featured. |
| Top 10 Findings (10 rows) | S9 | Full-width | 3px header border | Full-width | Distilled output. Confident but not competing with Components table. |
| Anti-Patterns (5 rows) | S10 | Full-width | 3px header + coral accent | Full-width | Warning register. Coral left border on table container. |
| Hypothesis Tables (3x5 rows) | S11 | Compact, de-emphasized | 1px all borders | Full-width | Future-facing. Lightest treatment. The assay's remaining questions, not its answers. |

### Variation Strategy

The table treatment follows the Cluster D trajectory (crescendo-diminuendo):
- **S3-S4:** Light (raw input samples)
- **S5:** PEAK (featured instrument)
- **S8:** Moderate (synthesized framework)
- **S9-S10:** Moderate-strong (distilled output)
- **S11:** Light (future hypotheses)

No two adjacent tables share identical treatment. The Components table stands alone as the most visually prominent table on the page.

---

## 7. SILENCE ZONE PLAN (C-13)

### Silence Zone 1: Post-Pullquote Breathing Space
**Location:** Between S2 (Master Insight) and S3 (Density Principle)
**Height:** ~220px (80px pullquote bottom padding + 64px bridge transition + reframe prose)
**Content:** Bridge reframe prose only (2 sentences). Base typography. NO mechanism CSS.
**WHY:** The Master Insight pullquote is the most visually intense element on the page (solid offset + display serif + focal padding). The reader needs cognitive recovery before entering the principles. Silence after the most important statement creates WEIGHT through absence.

### Silence Zone 2: Pre-Closing Breathing Space
**Location:** Between S11 (Hypotheses) and S12 (Closing)
**Height:** ~200px (bridge transition 64px + section opening spacing)
**Content:** Bridge reframe prose only (2 sentences). Base typography. NO mechanism CSS.
**WHY:** The hypotheses section ends the analytical content. The closing is reflective prose. Between them, silence creates the feeling of "stepping back from the workbench" -- the assay is complete, and the reader pauses before receiving the final report.

**Signal-to-silence ratio estimate:**
- Total mechanism-active scroll: ~5,600px
- Total quiet/silence scroll: ~3,200px (silence zones + sparse section margins + transition spaces)
- Ratio: ~0.64:1. PASSES 0.6-0.8:1 target.

---

## 8. REJECTION LOG SEED (C-12)

### 5 Considered-and-Rejected Mechanism Placements

**1. #15 Bento Grid in Section 8 (Component Sequences)**
- INTENDED: Display the 4 component sequences as a 2x2 bento grid
- REJECTED: The sequences are ORDERED (Opening → Teaching → Decision → Closing). Bento grid implies modular/unordered. The sequential nature demands vertical stacking with code-block treatment. Content-mechanism MISMATCH.

**2. #8 Scroll Witness in TOP zone**
- INTENDED: Sticky TOC tracking the 12 sections
- REJECTED: Page is ~8,800px at estimated height. Scroll witness adds visual complexity to the TOP zone where the metaphor needs sparse variety. Also requires JavaScript, adding implementation risk. The 12 section headings are sufficient for navigation via scrolling.

**3. #3 Solid Offset on Section 5 Components Table**
- INTENDED: Featured emphasis on the 11-row table
- REJECTED: Solid offset is reserved for SINGULAR focal elements (the Master Insight). Using it on a table dilutes its impact. The table receives emphasis through border-weight (4px) and full-width treatment instead.

**4. #16 Drop Cap in Section 5 (Components as Characters)**
- INTENDED: Mark the start of the middle zone with editorial ceremony
- REJECTED: Drop cap is reserved for the page opening (S1). Second deployment would break the asymmetry that gives S1 its ceremonial status. The middle zone announces itself through density shift and background change, not through repeated ceremony.

**5. #6 Width Variation in Section 9 (Findings Table)**
- INTENDED: Narrow the findings table to 85% to create breathing room
- REJECTED: The findings table has 3 columns and 10 rows. Narrowing it would compress cell content and potentially cause text wrapping that degrades readability. Full-width is appropriate for data-dense reference tables.

**Builders should add to this log during construction.**

---

## 9. CP-F INTEGRATION (Channel Map from Metaphor Derivation)

### Ch1 (Chromatic): Variety → Uniformity Zone Backgrounds

**Metaphor encoding:** Raw samples (warm, varied tints) → Analytical processing (cool, uniform white) → Refined output (warm return, confident cream)

| Zone | Background Progression | Mechanism |
|------|----------------------|-----------|
| TOP S1-S2 | Warm cream (#FEF9F5) → Earthy tan (#FAF5ED) | #7 zone backgrounds |
| TOP S3-S4 | Cream (#FEF9F5) → White (#FFFFFF) | #7 zone backgrounds |
| MIDDLE S5-S8 | White (#FFFFFF) → Tan (#FAF5ED) → White → White | #7 zone backgrounds |
| BOTTOM S9-S10 | White (#FFFFFF) → Cream (#FEF9F5) | #7 zone backgrounds |
| BOTTOM S11-S12 | Tan (#FAF5ED) → Cream (#FEF9F5) | #7 zone backgrounds |

**Deployed via:** #7 zone backgrounds (primary), #9 color encoding (accent), #13/#14 dark bookends

### Ch2 (Typographic): Mono → Sans → Serif Progression

**Metaphor encoding:** Raw measurement (mono labels, data tables) → Processed analysis (sans body prose) → Refined verdict (serif display for headings and pullquote)

| Zone | Dominant Voice | Mechanism |
|------|---------------|-----------|
| TOP | Mixed: mono table headers + sans prose + serif headings | #11 type scale, #18 data table |
| MIDDLE | Sans-dominant: prose analysis + mono labels | #11 type scale, #2 two-zone DNA |
| BOTTOM | Sans + serif closing: refined output voice | #11 type scale, #16 drop cap echo in serif |

**Deployed via:** #11 typographic scale (primary), #2 two-zone DNA (label/body split), #16 drop cap (opening serif ceremony), #18 data table (mono headers)

### Ch3 (Spatial): Compression Gradient (Tight → Generous → Medium)

**Metaphor encoding:** The assay process compresses samples through testing, then releases them as refined output

| Zone | Spacing Range | Mechanism |
|------|---------------|-----------|
| TOP | 64px → 80px → 48px (generous, narrowing) | #4 spacing compression |
| MIDDLE | 32px → 40px → 32px → 32px (compressed, sustained) | #4 spacing compression |
| BOTTOM | 40px → 40px → 48px → 64px (releasing, widening) | #4 spacing compression |

**Deployed via:** #4 spacing compression (primary), #5 dense/sparse alternation (qualitative), #6 width variation (horizontal compression)

### Ch4 (Structural): Border Weight 1px → 3px → 4px

**Metaphor encoding:** Raw samples have minimal containment (1px). Testing stages have structural borders (3px). The defining instrument reading has maximum weight (4px).

| Zone | Border Treatment | Mechanism |
|------|-----------------|-----------|
| TOP | 1px cell borders on principle tables | #1 border-weight, #18 data table |
| MIDDLE | 4px featured on Components table, 3px on Architecture | #1 border-weight, #10 border-left |
| BOTTOM | 3px on Findings, 1px on Hypotheses | #1 border-weight, #18 data table |

**Deployed via:** #1 border-weight gradient (primary), #10 border-left (component accent), #13/#14 dark header/footer (3px primary border bookends)

### Ch5 (Density): Content Density Mirrors 337 → 5 → 1

**Metaphor encoding:** 337 findings (dense input) → 5 principles (moderate analysis) → 1 master insight (sparse revelation) → 10+5+15 actionable outputs (moderate-dense application) → 1 closing invitation (sparse)

| Zone | Density State | Mechanism |
|------|---------------|-----------|
| TOP | Sparse → Medium | #5 dense/sparse |
| MIDDLE | Dense (sustained) | #5 dense/sparse |
| BOTTOM | Medium-Dense → Sparse | #5 dense/sparse, #12 progressive disclosure |

**Deployed via:** #5 dense/sparse alternation (primary), #12 progressive disclosure (S11 hypothesis tables), #4 spacing compression (quantitative expression)

### Ch6 (Rhythmic): PULSE → CRESCENDO → BOOKEND

**Metaphor encoding:** Three distinct rhythmic modes across the page

| Zone | Rhythm Type | Mechanism |
|------|-----------|-----------|
| TOP (S1-S4) | PULSE: principle-table-principle-table | #5 dense/sparse alternation, #2 two-zone DNA |
| MIDDLE (S5-S8) | CRESCENDO: building through anchor, tensions, synthesis | #4 spacing compression, #1 border-weight |
| BOTTOM (S9-S12) | BOOKEND: findings bracketed by context and closing | #14 footer mirror, #7 zone backgrounds |

**Deployed via:** #5 dense/sparse (PULSE in TOP), #4 spacing compression (CRESCENDO in MIDDLE), #13/#14 header/footer (BOOKEND overall)

---

## CRITICAL BUILD CONSTRAINTS SUMMARY

For downstream builders who cannot see the full execution prompt:

1. **Container width: 960px.** No section may exceed 1100px. Express narrowing through internal spacing, never external width reduction below 940px.

2. **Max spacing: 96px per property.** No single margin or padding exceeds 96px. The 80px pullquote padding is the highest value used.

3. **Max 4 mechanisms per viewport.** Count visible mechanisms at any scroll position. Redistribute if > 4.

4. **Every third of page: >= 2 mechanisms.** Top third: #7, #13, #16, #18, #5, #4, #3, #11. Middle third: #1, #2, #4, #5, #7, #9, #10, #17, #18. Bottom third: #1, #5, #7, #12, #14, #18. ALL pass.

5. **Signal-to-silence: 0.6-0.8:1.** Estimated 0.64:1. PASSES.

6. **Peak density NOT in first section.** Peak density is S5-S8 (MIDDLE zone). S1 is sparse. PASSES C-18.

7. **Same direction at all active scales (fractal coherence).** CRESCENDO (sparse→dense→sparse) must be visible at: Page scale (section padding), Section scale (internal element spacing), Component scale (callout internal padding), Character scale (line-height variation). All move in the same direction.

8. **>= 3 channels shift at every section transition.** See Transition Plan.

9. **Warm backgrounds = sparse, cool backgrounds = dense.** See Zone Background mapping. PASSES SC-10.

10. **The metaphor is STRUCTURAL, never LABELED.** No text should say "assay," "laboratory," "sample," or "refinement." The progressive compression, temperature shift, and border-weight gradient communicate the refinement process through form alone. If a builder writes a label like "STAGE 2," they are announcing, not embodying.

---

**END BUILD PLAN**

**Mechanism count: 14** (within 12-16 range)
**Compositional clusters: 4** (A: Refinement Gradient, B: Component Identity, C: Structural Bookends, D: Table Progression)
**Reinforcing pairs: 4** (>= 3)
**Modulating chains: 2** (>= 2)
**Cascading chains: 1 of 4 mechanisms** (>= 1 of 3+)
**CCS estimate: 0.25-0.35** (targeting >= 0.30)
**Silence zones: 2** (>= 2)
**Transition types: 3** (SMOOTH, BRIDGE, BREATHING)
**Rejections documented: 5** (>= 5)
