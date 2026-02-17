# Maximum Multi-Coherence Invocation System

**Author:** multi-coherence-invoker (Opus 4.6)
**Date:** 2026-02-17
**Task:** #30 -- Design maximum multi-coherence invocation system
**Sources Read:**
- `mechanism-catalog.md` (1,218 lines, all 18 mechanisms + transition grammar + restraint protocol)
- `13-compositional-fluency.md` (670 lines, 5 interaction types, CCS, compositional vs vocabulary fluency)
- `DD-006-fractal.html` (CSS, fractal nested structures, 4-scale self-similarity)
- `CD-006-pilot-migration.html` (CSS, 8-section compound axis, all 11 components, 5 fractal scales)
- `14-intentionality-layer-design.md` (6 unmodeled dimensions, binary checks, cross-dimensional integration)
- `00-PROMPT-STRUCTURE-OUTLINE.md` (prompt architecture, layers, success criteria)

---

## 1. MULTI-COHERENCE THEORY

### 1.1 What Multi-Coherence IS

Multi-coherence is the property where multiple design dimensions cohere into a unified perceptual experience rather than coexisting as independent effects. When a page achieves multi-coherence, scrolling from one zone to the next produces a SINGLE atmospheric shift -- not a list of CSS property changes.

**The 6 design dimensions:**
1. **SPATIAL** -- Layout topology, density rhythm, grid structure (mechanisms #5, #6, #15)
2. **TEMPORAL** -- Progressive disclosure, pacing, scroll-linked revelation (mechanisms #8, #12)
3. **CHROMATIC** -- Zone backgrounds, accent color encoding, warmth/coolness gradients (mechanisms #7, #9)
4. **TYPOGRAPHIC** -- Scale jumping, font family shifts, weight modulation (mechanism #11, drop cap #16)
5. **RHYTHMIC** -- Border-weight gradients, spacing compression, dense/sparse alternation (mechanisms #1, #4, #5)
6. **SEMANTIC** -- 2-zone component DNA, border-left signaling, data table structure (mechanisms #2, #10, #17, #18)

### 1.2 The Multi-Coherence Equation

```
Multi-Coherence = (Reinforcing Pairs x Modulating Chains x Fractal Depth) / Independent Mechanisms

Where:
  Reinforcing Pairs = count of mechanism pairs encoding the SAME semantic through different CSS channels
  Modulating Chains = count of mechanisms whose values are DETERMINED by another mechanism's state
  Fractal Depth = count of scales (1-5) at which the compositional logic repeats
  Independent Mechanisms = count of mechanisms serving isolated purposes with no cross-mechanism dependency
```

**Interpretation:**
- Multi-Coherence >> 1: Mechanisms are tightly coupled, atmospheric -- FLAGSHIP
- Multi-Coherence ~ 1: Some coupling, some independence -- CEILING
- Multi-Coherence << 1: Most mechanisms independent -- MIDDLE (vocabulary fluency only)

### 1.3 Why Multi-Coherence Matters

**Evidence from crown jewels:**

CD-006 (39/40): Border-weight gradient (#1) + zone backgrounds (#7) + spacing compression (#4) ALL encode the same density trajectory across the 4-act structure. Removing any ONE changes how the other two are PERCEIVED. The mechanisms are load-bearing. CCS estimated 0.50-0.65.

DD-006 (36/40): Dense/sparse alternation (#5) MODULATES 2-zone component DNA (#2) -- components in dense sections have tighter internal structure than components in sparse sections. The page-scale mechanism PROPAGATES into component-scale mechanisms. Fractal coherence at 4 scales.

Ceiling experiment (DO NOT SHIP): 14 mechanisms deployed, 0 multi-coherence. Each mechanism served an independent purpose. Removing any one left the others unaffected. CCS estimated 0.05-0.10. 70-80% catastrophic whitespace void.

Middle experiment (DESIGNED but not "felt through"): 12 mechanisms, vocabulary fluency achieved, compositional fluency absent. Border-weight encoded security. Zone backgrounds encoded content type. Spacing encoded rhythm. Three separate semantic streams, zero convergence. CCS estimated 0.10-0.15.

**The gap between "designed" and "felt through" IS multi-coherence.**

### 1.4 The Coherence Threshold

Multi-coherence is not binary. There is a perceptual threshold:

| CCS Range | Perception | Tier |
|-----------|-----------|------|
| 0.00-0.15 | "Professionally formatted" | Middle |
| 0.15-0.30 | "Competently designed" | Middle-high |
| 0.30-0.50 | "Atmospheric, mood-shifting" | Ceiling |
| 0.50-0.70 | "Immersive, the page has a personality" | Ceiling-Flagship |
| 0.70-1.00 | "Every pixel serves the whole" | Flagship |

**Flagship target: CCS >= 0.50**

---

## 2. FIVE INTERACTION TYPES -- Full Invocation

### 2.1 REINFORCING (Multi-Channel Encoding)

**Definition:** Two or more mechanisms encode the SAME semantic dimension through DIFFERENT CSS channels. The reader perceives a single atmospheric quality, not multiple CSS property changes.

**Crown jewel evidence -- OD-004 geological confidence:**
```css
/* THREE mechanisms reinforce "depth/confidence" simultaneously */

/* Channel 1: Border thickness encodes depth */
.stratum--established { border-left: 4px solid var(--color-text); }
.stratum--speculative { border-left: 2px solid var(--color-text-secondary); }

/* Channel 2: Background warmth encodes depth */
.stratum--established { background: var(--color-zone-sparse); }  /* warm cream */
.stratum--speculative { background: var(--color-zone-breathing); } /* tan */

/* Channel 3: Padding density encodes depth */
.stratum--established { padding: 40px; }  /* spacious = confident */
.stratum--speculative { padding: 24px; }  /* compressed = uncertain */
```

When the reader scrolls into `.stratum--speculative`, borders thin + backgrounds shift + space compresses = ONE atmospheric change ("the ground is less certain here"), not three CSS property changes.

**Crown jewel evidence -- CD-006 4-act arc:**
The density trajectory across 8 sections deploys spacing compression (#4) + zone backgrounds (#7) + typographic density in coordinated progression. Act 1 (Orient): sparse padding + warm cream + generous type. Act 3 (Build): compressed padding + neutral white + tight type. All three channels track the same CRESCENDO.

**Invocation language for builder prompt:**

```
REINFORCING PAIRS (MANDATORY -- Flagship requires 3+ pairs):

For at least 3 mechanism pairs, the two mechanisms MUST encode the SAME
semantic dimension through DIFFERENT CSS channels.

Format for each pair:
  PAIR [N]: Mechanism #[A] + Mechanism #[B]
  SHARED SEMANTIC: [what they both express -- e.g., "geological depth"]
  CSS CHANNELS: [what CSS property each uses -- e.g., "border-width" + "background-color"]
  CO-VARIATION: [how values change together -- e.g., "deeper = thicker + darker"]
  PERCEPTUAL EFFECT: [what the READER feels -- one atmospheric phrase, NOT a list of CSS changes]

The reader MUST perceive a single atmospheric change, not separate CSS changes.
If you can describe the effect as "borders got thicker AND backgrounds got darker,"
you have vocabulary, not reinforcement. If you describe it as "the page got heavier,"
you have reinforcement.

BINARY CHECK: For each reinforcing pair, remove mechanism A from the CSS.
Does mechanism B's meaning change? If YES = reinforcing. If NO = independent.
```

**Binary verification:**
- R-01: Does the page contain at least 3 documented reinforcing pairs? YES/NO
- R-02: For each pair, do values co-vary in the same direction? YES/NO
- R-03: For each pair, does removing one mechanism change the perceived meaning of the other? YES/NO

---

### 2.2 MODULATING (Mechanism A Controls Mechanism B's Intensity)

**Definition:** One mechanism's value GATES or SCALES another mechanism's expression. The outer mechanism reaches INSIDE the inner mechanism and adjusts its parameters.

**Crown jewel evidence -- DD-006 fractal density:**
```css
/* Dense/sparse alternation (#5) MODULATES 2-zone component DNA (#2) */

/* In DENSE sections: components have tight 2-zone structure */
.section--dense .callout {
  padding: 16px 20px;          /* compressed */
  margin: 12px 0;              /* tight stacking */
}
.section--dense .callout__label {
  font-size: 0.6875rem;        /* small label */
  margin-bottom: 4px;          /* minimal gap */
}

/* In SPARSE sections: components have generous 2-zone structure */
.section--sparse .callout {
  padding: 24px 32px;          /* expanded */
  margin: 24px 0;              /* generous stacking */
}
.section--sparse .callout__label {
  font-size: 0.75rem;          /* slightly larger label */
  margin-bottom: 8px;          /* more breathing room */
}
```

The section-level mechanism (dense/sparse alternation) PROPAGATES its density direction into component-level mechanisms (2-zone DNA). Components in dense sections are themselves denser. This creates fractal coherence: the same density direction appears at multiple zoom levels.

**Crown jewel evidence -- CD-006 section density modulating code blocks:**
Code blocks in Act 3 (Build, peak density) have tighter padding and less margin than code blocks in Act 1 (Orient, sparse). The section's density state modulates the code block's internal spacing.

**Invocation language for builder prompt:**

```
MODULATING CHAINS (MANDATORY -- Flagship requires 2+ chains):

For at least 2 mechanism relationships, the OUTER mechanism (section-level)
MUST adjust the INNER mechanism's (component-level) CSS values.

Format for each chain:
  CHAIN [N]: Mechanism #[outer] modulates Mechanism #[inner]
  OUTER STATE: [what the outer mechanism's current value is]
  INNER ADJUSTMENT: [how the inner mechanism's values change in response]
  FRACTAL EFFECT: [how this creates pattern repetition across scales]

The CRITICAL test: Do components INSIDE dense sections look different from
components INSIDE sparse sections? If the same callout looks identical
regardless of which section contains it, you have ZERO modulation.

Like DD-006: callouts in dense sections have 16px padding, 12px margin.
Callouts in sparse sections have 24px padding, 24px margin. The section's
density REACHES INSIDE the component and adjusts it.

BINARY CHECK: Compare the same component type in two different density zones.
Are the padding, margin, and font-size values DIFFERENT? If YES = modulating.
If NO = independent (the component ignores its container's state).
```

**Binary verification:**
- M-01: Does at least one component type have DIFFERENT CSS values depending on its container section's density? YES/NO
- M-02: Are at least 2 modulating chains documented? YES/NO
- M-03: Does the modulation create visible fractal coherence (same direction at 2+ scales)? YES/NO

---

### 2.3 RESPONDING (Mechanism B Reacts to Mechanism A's Visual Weight)

**Definition:** One mechanism's visual weight creates a perceptual condition that the NEXT mechanism responds to. The response manages the transition between visual registers.

**Crown jewel evidence -- CD-006 header-to-drop-cap sequence:**
```css
/* Mechanism #13 (Dark Header) creates HEAVY visual weight at page top */
header {
  background: var(--color-text);  /* near-black */
  border-bottom: 3px solid var(--color-primary);
  padding: var(--space-16) var(--space-8);
}

/* Mechanism #16 (Drop Cap) RESPONDS to header weight:
   The first section after the dark header uses a dramatic drop cap
   to maintain visual intensity during the header-to-content transition */
.drop-cap::first-letter {
  font-family: var(--font-display);
  font-size: 3.5em;
  color: var(--color-primary);  /* Red -- ECHOES header's 3px red border */
}
```

Without the dark header, the drop cap would be decorative. WITH the header, the drop cap is STRUCTURAL -- it bridges two visual registers (monumental dark header to conversational body text). The drop cap's red color ECHOES the header's red 3px border, creating visual continuity across the weight transition.

**Crown jewel evidence -- DD-006 visualization-to-demonstration sequence:**
The fractal visualization (lines 753-793) creates strong visual weight through nested border-left structures. The first scale demonstration (Level 1: Page Scale) RESPONDS by using a lighter visual treatment with 3-column grid -- stepping DOWN from the visualization's concentrated weight.

**Invocation language for builder prompt:**

```
RESPONDING SEQUENCES (MANDATORY -- Flagship requires 2+ responses):

For at least 2 section boundaries, the mechanism deployed AFTER the boundary
MUST acknowledge and respond to the visual weight created BEFORE the boundary.

Format for each response:
  RESPONSE [N]: Mechanism #[A] (creator) -> Mechanism #[B] (responder)
  WEIGHT CREATED: [what visual weight mechanism A establishes]
  RESPONSE STRATEGY: [how mechanism B manages the transition -- echo, step-down, contrast]
  COLOR/FORM ECHO: [specific CSS property that connects A and B visually]

The CRITICAL distinction: In vocabulary fluency, a drop cap is "a mechanism I
deployed because I covered 5 categories." In compositional fluency, a drop cap
is "the mechanism that ANSWERS the header's visual weight." Every mechanism
after the first section should be justifiable as a RESPONSE to what came before,
not just a deployment from a checklist.

Like CD-006: Dark header creates monumental weight. Drop cap responds with
3.5em serif in --color-primary (echoing header's 3px red border). The drop cap
IS the stepping stone from dark header to body text.

BINARY CHECK: Remove the preceding section entirely. Does the responding
mechanism still feel JUSTIFIED? If YES = independent (no response relationship).
If NO = responding (the mechanism's placement is MOTIVATED by what precedes it).
```

**Binary verification:**
- RS-01: Are at least 2 responding sequences documented? YES/NO
- RS-02: For each response, does the responder share at least one visual property (color, weight, scale) with the creator? YES/NO
- RS-03: For each response, would removing the creator make the responder feel arbitrary? YES/NO

---

### 2.4 CONTRASTING (Deliberate Absence Creates Meaning)

**Definition:** One mechanism's deployment in some zones makes its ABSENCE in other zones semantically meaningful. The rhythm of presence/absence IS the composition.

**Crown jewel evidence -- Restraint Map concept (flagship architecture):**
```css
/* Zone background (#7) deployed ONLY in zones 1 and 3 */
.zone-1 { background: var(--color-zone-sparse); }
.zone-2 { background: transparent; }  /* DELIBERATE absence */
.zone-3 { background: var(--color-zone-dense); }
.zone-4 { background: transparent; }  /* DELIBERATE absence */

/* The ABSENCE of zone background in zones 2 and 4 is meaningful
   BECAUSE zones 1 and 3 have it. The transparent zones become
   "breathing spaces" -- silence defined by surrounding sound. */
```

If ALL zones had backgrounds, none would feel special. If NO zones had backgrounds, there would be no zones. The CONTRAST between presence and absence creates rhythm.

**Crown jewel evidence -- CD-006 drop cap deployment:**
Drop cap (#16) is deployed ONLY in Section 1 (the opening). Its absence in Sections 2-8 is meaningful because the reader has experienced it once. The drop cap marks the beginning, not a recurring decoration. Its single deployment creates an asymmetry that gives Section 1 special status.

**Crown jewel evidence -- DD-006 border-weight selective deployment:**
The 4px primary border appears on the fractal visualization and the Essence callout (opening and closing), but NOT on the intermediate scale demonstrations. This absence in the middle creates a "bookend" effect through deliberate restraint.

**Invocation language for builder prompt:**

```
CONTRASTING DEPLOYMENTS (MANDATORY -- Flagship requires 2+ silences):

For at least 2 mechanisms, document WHERE the mechanism is deployed AND
WHERE it is deliberately ABSENT. The absence must be a COMPOSITIONAL CHOICE,
not an oversight.

Format for each contrast:
  CONTRAST [N]: Mechanism #[X]
  DEPLOYED IN: [which sections/zones]
  ABSENT FROM: [which sections/zones]
  ABSENCE MEANING: [what the absence communicates -- breathing, transition, asymmetry]
  DEPLOYMENT RATIO: [deployed-in / total-sections -- should be < 1.0]

If a mechanism appears in EVERY section, it has no contrast. If it appears
in NO sections, it has no presence. The compositional sweet spot is
SELECTIVE deployment where presence and absence are both intentional.

Like CD-006: Drop cap appears ONLY in Section 1. Its absence in S2-S8
makes S1 feel like a ceremonial opening. Deployment ratio: 1/8 = 0.125.

Like the restraint map: Zone backgrounds in zones 1 and 3, transparent
in zones 2 and 4. The transparent zones BREATHE because the colored
zones ANCHOR. Deployment ratio: 2/4 = 0.5.

BINARY CHECK: For each deliberately absent mechanism, can you write a
1-sentence justification for WHY it is absent from that section? If YES
= deliberate contrast. If you cannot justify = accidental omission.

ANTI-PATTERN: Deploying a mechanism uniformly across all sections
(deployment ratio = 1.0) eliminates contrast and reduces that mechanism
to wallpaper.
```

**Binary verification:**
- C-01: Are at least 2 mechanisms documented with deliberate absence zones? YES/NO
- C-02: For each absent zone, is there a written justification for the absence? YES/NO
- C-03: Is the deployment ratio for each contrasting mechanism < 1.0 (not deployed everywhere)? YES/NO

---

### 2.5 CASCADING (Chain Reaction Across Mechanisms)

**Definition:** A chain of mechanisms where each enables or triggers the next. Mechanism A sets up a condition that mechanism B responds to, which creates a condition that mechanism C responds to. The chain produces a compositional arc that no single mechanism could create.

**Crown jewel evidence -- CD-006 4-act density cascade:**
```css
/* Chain: Progressive Disclosure (#12) -> Zone Backgrounds (#7) ->
   Spacing Compression (#4) -> Border-Weight (#1) */

/* Act 1 (Orient): All mechanisms at LOW intensity */
.act-1 { padding: 64px; }
.act-1 { background: var(--color-zone-sparse); }
.act-1 .section-border { border-left: 1px solid var(--color-border); }

/* Act 2 (Learn): All mechanisms step up TOGETHER */
.act-2 { padding: 48px; }
.act-2 { background: var(--color-zone-breathing); }
.act-2 .section-border { border-left: 3px solid var(--color-text); }

/* Act 3 (Build): Peak intensity across ALL channels */
.act-3 { padding: 32px; }
.act-3 { background: var(--color-zone-dense); }
.act-3 .section-border { border-left: 4px solid var(--color-text); }

/* Act 4 (Ship): Resolution -- returns toward sparse */
.act-4 { padding: 48px; }
.act-4 { background: var(--color-zone-breathing); }
.act-4 .section-border { border-left: 3px solid var(--color-text); }
```

Progressive disclosure (#12) establishes the density trajectory. Zone backgrounds (#7) follow that trajectory. Spacing compression (#4) tightens in parallel. Border-weight (#1) thickens correspondingly. Each mechanism's value at each point is GOVERNED by the overall density trajectory. Change the trajectory and ALL four mechanisms must adjust. This is the deepest form of composition: the mechanisms are not just deployed together -- they are governed by a SHARED COMPOSITIONAL LOGIC.

**Crown jewel evidence -- DD-006 fractal cascade:**
Page-scale dense/sparse alternation (#5) CASCADES into section-scale paragraph density, which CASCADES into component-scale callout internal spacing, which CASCADES into character-scale code/comment alternation. The dense/sparse pattern REPEATS at each zoom level because each scale inherits its density direction from the scale above.

**Invocation language for builder prompt:**

```
CASCADING CHAINS (MANDATORY -- Flagship requires 1+ cascade of 3+ mechanisms):

At least 1 chain of 3 or more mechanisms where each mechanism's state is
DETERMINED by a shared compositional trajectory (density arc, weight gradient,
warmth progression, etc.).

Format:
  CASCADE [N]: [Mechanism A] -> [Mechanism B] -> [Mechanism C] (-> [D]...)
  SHARED TRAJECTORY: [the overarching direction -- e.g., "sparse-to-dense CRESCENDO"]
  VALUE TABLE:
    | Stage    | Mech A Value | Mech B Value | Mech C Value |
    |----------|-------------|-------------|-------------|
    | Opening  | [low]       | [low]       | [low]       |
    | Building | [medium]    | [medium]    | [medium]    |
    | Peak     | [high]      | [high]      | [high]      |
    | Resolve  | [medium]    | [medium]    | [medium]    |

The VALUE TABLE is the acid test. If all mechanisms change in the SAME
direction at each stage, you have a cascade. If they change independently
(A goes up while B stays flat while C goes down), you have vocabulary.

Like CD-006: padding 64->48->32->48, backgrounds sparse->breathing->dense->breathing,
borders 1px->3px->4px->3px. All three track the CRESCENDO trajectory.

BINARY CHECK: Can you write ONE sentence describing the cascade's trajectory
that is NOT a list of mechanism names? If "the page tightens from orient to
build, then releases" = cascade. If "padding decreases, backgrounds shift,
and borders thicken" = vocabulary.
```

**Binary verification:**
- CA-01: Does at least one cascade of 3+ mechanisms exist? YES/NO
- CA-02: Does the value table show all mechanisms changing in the same direction at each stage? YES/NO
- CA-03: Can the cascade be described in one sentence without listing mechanism names? YES/NO

---

## 3. COMPOSITIONAL COUPLING SCORE (CCS)

### 3.1 Formula

```
CCS per mechanism = (mechanisms whose perceived meaning changes when THIS mechanism is removed)
                    / (total deployed mechanisms - 1)

CCS for page = average CCS across all deployed mechanisms
```

### 3.2 Worked Example

**CD-006 estimated CCS (16 mechanisms deployed):**

| Mechanism | Removal Impact | CCS |
|-----------|---------------|-----|
| #1 Border-weight gradient | Removes: depth encoding, zone hierarchy, strata signal. Affects #4, #7, #12 | 3/15 = 0.20 |
| #2 2-Zone DNA | All callouts lose structure. Affects #9, #10 | 2/15 = 0.13 |
| #4 Spacing compression | Density arc collapses. Affects #1, #5, #7, #12 | 4/15 = 0.27 |
| #5 Dense/sparse alternation | Rhythmic backbone lost. Affects #2, #4, #6, #7, #12 | 5/15 = 0.33 |
| #7 Zone backgrounds | Atmospheric progression lost. Affects #1, #4, #5 | 3/15 = 0.20 |
| #12 Progressive disclosure | Density trajectory lost. Affects #1, #4, #5, #7 | 4/15 = 0.27 |
| #13 Dark header | Weight anchor lost. Affects #14, #16 | 2/15 = 0.13 |
| #16 Drop cap | Opening ceremony lost. Affects #13 (response chain) | 1/15 = 0.07 |
| #17 Code block | Functional -- independent | 0/15 = 0.00 |
| #18 Data table | Functional -- independent | 0/15 = 0.00 |

**Page CCS = average across all mechanisms ~ 0.55** (strongly coupled -- Flagship range)

### 3.3 Thresholds

| CCS | Rating | Tier |
|-----|--------|------|
| 0.00-0.15 | Independent (vocabulary) | Middle |
| 0.15-0.30 | Weakly coupled | Ceiling-low |
| 0.30-0.50 | Coupled (compositional) | Ceiling |
| 0.50-0.70 | Strongly coupled | Flagship |
| 0.70-1.00 | Fully composed | Flagship-peak |

### 3.4 Binary Rule for Prompt

```
COMPOSITIONAL COUPLING SCORE (CCS):

After all mechanisms are deployed, the builder MUST perform the REMOVAL TEST
on at least 5 mechanisms:

For each mechanism, ask: "If I delete this mechanism's CSS entirely, does
ANY other mechanism look wrong, misplaced, or pointless?"

Count the YES answers. Divide by (total mechanisms - 1).

FLAGSHIP GATE: Average CCS across tested mechanisms MUST be >= 0.30.

If CCS < 0.30: At least 2 mechanism pairs must be revised to encode a
SHARED semantic dimension. Find mechanisms currently encoding INDEPENDENT
semantics and realign them to encode the SAME semantic through different
CSS channels.

SELF-CHECK (2 minutes): Pick any 3 mechanisms. For each, mentally remove
its CSS. Does the page feel BROKEN without it (load-bearing) or merely
LESS DECORATED (wallpaper)? If all 3 feel like wallpaper: STOP and
restructure compositional clusters before proceeding.
```

---

## 4. FRACTAL COHERENCE PROTOCOL

### 4.1 What Fractal Coherence IS

Fractal coherence means the same compositional logic repeats as you zoom in. If the page uses CRESCENDO (sparse-to-dense) at the Page scale, individual sections should also progress sparse-to-dense internally (Section scale), and individual components should have sparse labels and dense bodies (Component scale).

### 4.2 The 5 Named Scales

| Scale | Zoom Level | What You See | Flagship Requirement |
|-------|-----------|-------------|---------------------|
| 1. Navigation | Bird's eye | Header, TOC, page-level nav | Pattern present |
| 2. Page | The scroll | How sections sequence across full page | Pattern present |
| 3. Section | One screen | How components arrange within a section | Pattern present |
| 4. Component | One element | How content organizes inside a callout/card | Pattern present |
| 5. Character | Inline | Bold weight, code formatting, link color | Pattern present |

### 4.3 Fractal Verification Protocol

**Crown jewel evidence -- DD-006 fractal at 4 scales:**
- **Page scale:** Dense sections (lines 844-860, background: `--color-border-subtle`, border-left-color: `--color-primary`) alternate with sparse sections (background: `white`, border-left-color: `--color-border`)
- **Section scale:** Within each section, paragraphs alternate dense (background: `--color-border-subtle`, padding: 12px, font-size: 13px, line-height: 1.5) and sparse (no background, padding: 0, font-size: 15px, line-height: 1.8)
- **Component scale:** Callouts have dense label zone (mono, 10px, uppercase, 0.1em letter-spacing) and sparse body zone (serif/body, 14-17px, normal case)
- **Character scale:** Code blocks alternate dense logic (syntax-highlighted keywords, functions) with sparse comments (gray, explanatory)

**Crown jewel evidence -- CD-006 fractal at 5 scales:**
- **Navigation scale:** TOC shows density labels per section (SPIRAL, Z-PATTERN, BENTO...), creating a meta-level rhythm
- **Page scale:** 8 sections progress through 4-act density arc (Orient sparse -> Learn building -> Build dense -> Ship breathing)
- **Section scale:** Within each section, components follow the section's density state (dense sections have tighter callouts)
- **Component scale:** All callouts use 2-zone DNA (sparse label + dense body)
- **Character scale:** Code blocks use syntax highlighting (dense colored keywords vs sparse gray comments); inline `code` uses mono+background against body text

**Invocation language for builder prompt:**

```
FRACTAL COHERENCE (MANDATORY -- Flagship requires 5/5 scales):

The page's compositional direction MUST be visible at ALL 5 zoom levels.

For each scale, document:
  SCALE [N]: [Scale Name]
  DIRECTION VISIBLE: [how the compositional logic manifests at this zoom level]
  CSS EVIDENCE: [specific properties that encode the direction]
  RELATIONSHIP TO ADJACENT SCALE: [how this scale echoes the scale above/below]

Example (CRESCENDO pattern):
  SCALE 2 (Page): Sections progress from 80px padding to 32px padding
  SCALE 3 (Section): Components within dense sections have 16px padding vs 24px in sparse
  RELATIONSHIP: Section-level padding echoes page-level trajectory (both compress)

The CRITICAL requirement: the same DIRECTION at every scale. If the page-scale
uses CRESCENDO (sparse->dense), sections must also internally progress from
sparse to dense. Components in dense sections must be internally denser.
Character-level formatting must reflect density (tighter line-height in dense
zones, generous line-height in sparse zones).

BINARY CHECK: At each scale, can you name the compositional direction?
If "sparse-to-dense" at all 5 scales = fractal coherence.
If "sparse-to-dense" at Page but "uniform" at Component = NOT fractal.
```

**Binary verification:**
- FC-01: Is the compositional direction documentable at Navigation scale? YES/NO
- FC-02: Is the compositional direction documentable at Page scale? YES/NO
- FC-03: Is the compositional direction documentable at Section scale? YES/NO
- FC-04: Is the compositional direction documentable at Component scale? YES/NO
- FC-05: Is the compositional direction documentable at Character scale? YES/NO
- FC-06: Is the direction CONSISTENT across all 5 scales (same pattern, not contradictory)? YES/NO

---

## 5. SELF-REFERENCE DETECTION

### 5.1 What Self-Reference IS in Multi-Coherence Context

Self-reference in multi-coherence is the moment where the page's compositional structure DEMONSTRATES the content it teaches. When the form IS the content, multi-coherence achieves its deepest expression: the design dimensions are not just coherent with EACH OTHER -- they are coherent with the MEANING.

### 5.2 Detection Protocol

**Crown jewel evidence -- DD-006:**
The page is ABOUT fractal density (same pattern at multiple scales). The page IS fractally dense (same dense/sparse alternation at page, section, component, character scales). The content describes what the form demonstrates.

**Crown jewel evidence -- CD-006 line 1684-1688:**
A code block contains `.callout { border-left: 4px solid; }` -- the CSS that styles callouts. This code block appears INSIDE a callout whose own `border-left` IS `4px solid`. The CSS being taught is the CSS being rendered.

**Binary verification protocol:**

```
SELF-REFERENCE DETECTION (Flagship requires 1+ instance):

Scan the page for ANY instance where:
  1. Content DESCRIBES a design technique that is VISIBLE in the element containing it
  2. Content DEMONSTRATES the concept it teaches through its own structure
  3. A code example shows CSS/HTML that is USED in the page containing it

For each detected instance:
  SELF-REF [N]:
  CONTENT: [what the text/code says]
  FORM: [what the element's CSS does]
  ALIGNMENT: [how content and form express the same thing]

BINARY CHECK: Does the page contain at least 1 element where the content
describes, demonstrates, or enacts its own form? YES/NO

QUALITY CHECK: Is the self-reference ORGANIC (arising from content-form
alignment) or BOLTED-ON (inserted to satisfy a checklist)?
```

---

## 6. CROSS-DIMENSION COHERENCE MATRIX

### 6.1 The 15 Dimension Pairs

For every pair of the 6 dimensions, what does coherence look like?

| Pair | Coherent State | Verification Question | CSS Evidence |
|------|---------------|----------------------|-------------|
| **Spatial x Chromatic** | Dense zones have warmer/darker backgrounds; sparse zones have lighter backgrounds | "Do zone backgrounds get warmer as spacing compresses?" | `.dense { padding: 16px; background: #FAF5ED; }` `.sparse { padding: 64px; background: #FEF9F5; }` |
| **Spatial x Typographic** | Dense zones have tighter line-height and smaller font-size; sparse zones have generous line-height | "Does type loosen as space opens up?" | `.dense p { line-height: 1.5; font-size: 0.9rem; }` `.sparse p { line-height: 1.8; font-size: 1rem; }` |
| **Spatial x Temporal** | Progressive disclosure deepens as spatial density increases; early sections reveal less | "Do later, denser sections reveal more information?" | Act 1 shows overview, Act 3 shows full detail |
| **Spatial x Rhythmic** | Borders thicken in denser zones; borders thin in sparser zones | "Do borders track the spacing compression?" | `.dense { border-left: 4px; padding: 16px; }` `.sparse { border-left: 1px; padding: 64px; }` |
| **Spatial x Semantic** | Components in dense zones have compressed 2-zone DNA; components in sparse zones have generous 2-zone DNA | "Do callouts breathe more in sparse sections?" | Dense callout: 12px label gap. Sparse callout: 8px label gap. |
| **Chromatic x Typographic** | Dark-background zones use light text with different weight; warm zones use serif for ceremony | "Does font treatment shift with background warmth?" | Dark header: `color: var(--color-background)`. Warm cream: `font-family: var(--font-display)` for Essence. |
| **Chromatic x Temporal** | Color temperature tracks the page's argument arc; opening warm, climax neutral, resolution warm | "Does color warmth map to the pedagogical arc?" | Act 1: `--color-zone-sparse` (warm). Act 3: `--color-zone-dense` (neutral). Act 4: `--color-zone-breathing` (warm). |
| **Chromatic x Rhythmic** | Accent colors on borders match zone background families; blue accents in cool zones, amber in warm | "Do accent colors respect the zone temperature?" | Info callouts (blue accent) in `--color-zone-dense` (cool). Essence callouts (amber/purple) in `--color-zone-breathing` (warm). |
| **Chromatic x Semantic** | Color encoding of confidence/priority is consistent with zone background encoding | "Do high-priority items appear in zones with corresponding visual weight?" | Critical callouts (red accent, 4px border) in dense zones. Info callouts (blue accent, 4px border) in breathing zones. |
| **Typographic x Temporal** | Type scale contracts during dense/climax sections and expands during sparse/resolution | "Does heading size track the density trajectory?" | Act 1 h2: larger effective space. Act 3 h2: compressed effective space. |
| **Typographic x Rhythmic** | Type weight and border weight co-vary; bold text accompanies thick borders | "Do text weight and border weight move in the same direction?" | Heavy border (4px) sections use 600-weight labels. Light border (1px) sections use 400-weight body. |
| **Typographic x Semantic** | 2-zone DNA always uses mono/uppercase/small for labels and body/regular for content | "Is the label/body typographic split consistent across all component types?" | ALL callouts: label = `font-family: var(--font-body); font-weight: 600; font-size: var(--type-meta)`. Body = `font-size: var(--type-body)`. |
| **Temporal x Rhythmic** | Progressive disclosure stages have increasing border weight to signal depth | "Do borders thicken as disclosure progresses?" | Phase 1: 1px borders. Phase 3: 4px borders. Phase 4: 3px borders. |
| **Temporal x Semantic** | Component variety increases during learning stages and decreases during resolution | "Do more component types appear in the learning sections than the resolution?" | Act 2 (Learn): Decision Matrix + Bento Grid + Code Blocks. Act 4 (Ship): Essence callout + simple prose. |
| **Rhythmic x Semantic** | Border-weight gradients on components match the component's semantic priority | "Do more important callouts have thicker accent borders?" | Essence (philosophical): 4px purple. Info (contextual): 4px blue. All use 4px, but the PAGE context (zone position) gives different weight. |

### 6.2 Invocation Language for Cross-Dimension Coherence

```
CROSS-DIMENSION COHERENCE (Flagship aspiration -- verify 10+ of 15 pairs):

For at least 10 of the 15 dimension pairs listed in the matrix, document
how the two dimensions COHERE rather than merely coexist.

The CRITICAL test for each pair: "When dimension A changes value (e.g.,
spacing compresses), does dimension B change in a RELATED direction
(e.g., backgrounds warm)?" If YES = coherent. If B stays constant while
A changes = independent.

You do NOT need to force coherence on all 15 pairs. Some pairs are
naturally independent (typographic x temporal may have weak coupling).
But at least 10 pairs MUST show deliberate coherence.

BINARY CHECK: Count dimension pairs where both dimensions change in
a RELATED direction at the same section boundary. If >= 10 out of 15
= cross-dimension coherence achieved.
```

**Binary verification:**
- XD-01: Are at least 10 of 15 dimension pairs documented with coherence evidence? YES/NO
- XD-02: For each documented pair, do both dimensions change at the same section boundary? YES/NO

---

## 7. RHYTHM COHERENCE -- Anti-Metronome Invocation

### 7.1 What Rhythm Coherence IS

Rhythm coherence is INTENTIONAL VARIATION, not metronomic repetition. A page with equal spacing between every section has no rhythm -- it has uniformity. Rhythm requires DIFFERENCE: longer pauses, shorter bursts, occasional silences.

### 7.2 The Anti-Metronome Principle

**Metronomic (BAD):**
```css
/* Every section has identical spacing -- no rhythm */
section { padding: 48px; margin-bottom: 48px; }
```

**Rhythmic (GOOD):**
```css
/* Spacing VARIES to create rhythm */
.section--opening { padding: 80px; }    /* Long pause -- ceremony */
.section--teaching { padding: 48px; }   /* Standard -- working pace */
.section--climax { padding: 32px; }     /* Compressed -- intensity */
.section--resolution { padding: 64px; } /* Breathing -- release */
```

**Crown jewel evidence -- CD-006 section padding sequence:**
80px (S1 open) -> 48px (S2 soul) -> 32px (S3 tokens) -> 32px (S4 decision) -> 48px (S5 build) -> 48px (S6 audit) -> 64px (S7 deploy) -> 80px (S8 close).

This creates a CONTOUR: wide -> narrowing -> narrow -> narrow -> widening -> widening -> wide -> wide. The contour IS the density arc expressed through spacing alone. Not uniform. Not random. CONTOURED.

**Crown jewel evidence -- DD-006 alternation pattern:**
Dense -> Sparse -> Dense -> Sparse. But the dense sections are NOT identical: the first dense section is a code block (character scale), the second is a component demo (component scale), the third is a paragraph block (section scale). Same rhythm (D-S-D-S), but each iteration VARIES in content type. This is rhythmic variation, not repetition.

### 7.3 Anti-Metronome Invocation

```
RHYTHM COHERENCE -- ANTI-METRONOME (MANDATORY):

The page MUST NOT use uniform spacing between sections. Section padding
MUST vary to create a spacing CONTOUR that maps to the density trajectory.

FORBIDDEN: All sections with identical padding values (metronomic).
FORBIDDEN: Random padding values with no compositional logic (chaotic).
REQUIRED: Padding values that form a CONTOUR matching the page's arc.

Format:
  SPACING CONTOUR:
  S1: [Npx] -- [why this spacing at this point in the arc]
  S2: [Npx] -- [why this spacing at this point in the arc]
  ...
  SN: [Npx] -- [why this spacing at this point in the arc]

The contour should be describable in one phrase: "opening wide, narrowing
to climax, releasing to close" (CD-006's CRESCENDO contour).

BINARY CHECK: List all section padding values. Are there at least 3
DISTINCT values? If YES = rhythmic variation exists. If all values are
identical = metronomic (FAIL).

QUALITY CHECK: Does the spacing contour map to the density trajectory?
(Wide padding = sparse = early/late. Tight padding = dense = middle/climax.)
```

**Binary verification:**
- RH-01: Are there at least 3 distinct section padding values? YES/NO
- RH-02: Does the spacing contour form a coherent shape (not random)? YES/NO
- RH-03: Does the contour map to the density trajectory (wide=sparse, tight=dense)? YES/NO

---

## 8. CONVICTION LAYER TEXT

These lines belong in the prompt's conviction layer to INSPIRE multi-coherence thinking:

```
THE MULTI-COHERENCE THESIS

Multi-coherence is the property that separates "professionally formatted" from
"genuinely excellent." When border-weight, zone backgrounds, and spacing compression
all say "deeper" simultaneously, the reader feels a single atmospheric shift -- not
three CSS changes. This atmospheric quality is what perceptual auditors describe as
"the page has a personality."

CD-006 scored 39/40 because its mechanisms were LOAD-BEARING. Remove the spacing
compression and the zone backgrounds lose their meaning. Remove the zone backgrounds
and the border-weights become arbitrary. Remove the border-weights and the progressive
disclosure has no structural signal. The mechanisms NEED each other. That mutual
dependency IS composition.

DD-006 scored 36/40 because the same dense/sparse rhythm appears at every zoom level.
Squint at the page: you see rhythm. Read a section: you see rhythm. Look at one
callout: the same rhythm. Even the code comments follow it. This is fractal coherence --
the compositional logic is self-similar across scales.

The ceiling experiment deployed 14 mechanisms and scored DO NOT SHIP. 70-80% void.
Zero multi-coherence. Each mechanism served a different purpose. Remove any one and
the rest are unaffected. The mechanisms were WALLPAPER -- present in the CSS but
invisible to the reader. Quantity without coupling produces nothing.

Multi-coherence is not about using MORE mechanisms. It is about making the mechanisms
you use NEED each other. Three coupled mechanisms outperform fourteen independent ones.
The equation: Richness = semantic density x restraint x spatial confidence.
```

---

## 9. EXECUTION SPEC TEXT

Binary rules for the execution layer:

```
MULTI-COHERENCE RULES (Execution Spec -- all binary):

MC-01: At least 3 REINFORCING PAIRS documented (mechanism pairs encoding
       the same semantic through different CSS channels).
       VERIFY: Count documented pairs. >= 3 = PASS.

MC-02: At least 2 MODULATING CHAINS documented (outer mechanism adjusting
       inner mechanism's CSS values).
       VERIFY: Compare same component type in different density zones.
       Different values = PASS.

MC-03: At least 2 RESPONDING SEQUENCES documented (mechanism B responding
       to mechanism A's visual weight).
       VERIFY: Remove mechanism A mentally. Does B feel arbitrary? Yes = PASS.

MC-04: At least 2 CONTRASTING DEPLOYMENTS documented (mechanism deliberately
       absent from some zones).
       VERIFY: Written justification for each absence exists. = PASS.

MC-05: At least 1 CASCADE of 3+ mechanisms governed by a shared trajectory.
       VERIFY: Value table shows all mechanisms changing in same direction
       at each stage. = PASS.

MC-06: CCS >= 0.30 across 5 tested mechanisms (removal test).
       VERIFY: Average CCS from removal test. >= 0.30 = PASS.

MC-07: Fractal coherence at 5/5 scales.
       VERIFY: Compositional direction documentable at each scale. = PASS.

MC-08: At least 3 DISTINCT section padding values (anti-metronome).
       VERIFY: Count distinct padding values. >= 3 = PASS.

MC-09: Cross-dimension coherence documented for 10+ of 15 pairs.
       VERIFY: Count documented pairs with coherence evidence. >= 10 = PASS.

MC-10: At least 1 self-referential element (content describes its own form).
       VERIFY: Element exists where content matches container's CSS. = PASS.
```

---

## 10. COORDINATION SPEC TEXT

### 10.1 Which Agents Ensure Coherence at Which Stages

```
MULTI-COHERENCE AGENT RESPONSIBILITIES:

METAPHOR DERIVER (Opus, Phase 0):
  - Identifies the metaphor's primary semantic dimension (the "shared semantic"
    that reinforcing pairs will encode)
  - Outputs: metaphor name + primary semantic dimension + 3 CSS channels for encoding it
  - Multi-coherence gate: metaphor must support at least 3 CSS channels for
    its primary semantic

CONTENT ARCHITECT (Opus, Phase 0):
  - Plans the density trajectory (CRESCENDO, GEOLOGICAL, PULSE, etc.)
  - Maps which sections are sparse/moderate/dense
  - Identifies bookend structure (first and last sections echo)
  - Multi-coherence gate: density trajectory must be describable in one phrase

PLANNER (Opus, Phase 1):
  - Organizes mechanisms into COMPOSITIONAL CLUSTERS (not individual deployments)
  - Documents reinforcing pairs, modulating chains, responding sequences
  - Creates the VALUE TABLE for the primary cascade
  - Multi-coherence gate: plan must contain at least 3 reinforcing pairs and 1 cascade

SKELETON BUILDER A (Sonnet, Pass 1):
  - Implements spatial structure with density-appropriate padding per section
  - Places transition infrastructure (smooth/bridge/breathing divs)
  - Multi-coherence gate: section padding values must have >= 3 distinct values

SKELETON BUILDER B (Sonnet, Pass 1):
  - Implements zone backgrounds that CO-VARY with spacing
  - Places component markup with density-appropriate internal spacing
  - Multi-coherence gate: zone backgrounds must track spacing direction

MECHANISM BUILDER (Sonnet, Pass 2):
  - Deploys mechanisms per the compositional cluster plan
  - Implements modulating chains (components adjust based on container density)
  - Multi-coherence gate: same component type must have DIFFERENT CSS values
    in different density zones

METAPHOR BUILDER (Opus, Pass 2):
  - Applies metaphor vocabulary to mechanism implementations
  - Ensures contrasting deployments are documented (deliberate absence)
  - Multi-coherence gate: at least 2 mechanisms have documented absence zones

INTENTIONALITY BUILDER (Opus, Pass 3):
  - Adds self-referential content
  - Verifies fractal coherence at all 5 scales
  - Adds bridge transition prose for cognitive mode transitions
  - Multi-coherence gate: compositional direction documentable at 5/5 scales

EMBEDDED AUDITOR (Sonnet, continuous):
  - Runs CCS removal test on 5 mechanisms after Pass 2
  - Verifies cross-dimension coherence matrix (10+ of 15 pairs)
  - Flags mechanisms that are "wallpaper" (CCS = 0 for that mechanism)
  - Multi-coherence gate: page CCS >= 0.30

PERCEPTUAL AUDITORS (9x Sonnet, Pass 4):
  - Each independently evaluates whether the page feels "atmospheric"
    or "formatted"
  - PA-05 question: "Is this page designed or formatted?"
  - If >= 7/9 auditors say "atmospheric" = multi-coherence PASSED
  - If < 7/9 = multi-coherence FAILED, specific mechanisms flagged for
    decoupling investigation
```

### 10.2 Multi-Coherence Checkpoints

```
CHECKPOINT A (after metaphor derivation):
  - Is the primary semantic dimension identified? YES/NO
  - Are 3+ CSS channels identified for encoding it? YES/NO

CHECKPOINT B (after planning):
  - Are 3+ reinforcing pairs documented? YES/NO
  - Is 1+ cascade with value table documented? YES/NO
  - Are 2+ modulating chains documented? YES/NO

CHECKPOINT C (after Pass 1 skeleton):
  - Do section padding values have >= 3 distinct values? YES/NO
  - Do zone backgrounds co-vary with spacing? YES/NO

CHECKPOINT D (after Pass 2 mechanisms):
  - Do components have different CSS in different density zones? YES/NO
  - Are 2+ contrasting deployments documented? YES/NO
  - Does CCS removal test return >= 0.30? YES/NO

CHECKPOINT E (after Pass 3 intentionality):
  - Is fractal coherence documentable at 5/5 scales? YES/NO
  - Does self-referential element exist? YES/NO
  - Are 10+ cross-dimension pairs documented? YES/NO
```

---

## 11. BUILDER CHECKLIST -- Operational Coherence Self-Check

This checklist is for the BUILDER to run BEFORE submitting. 2-minute self-assessment.

```
MULTI-COHERENCE SELF-CHECK (builder, before submitting):

REINFORCEMENT (30 seconds):
  [ ] Pick 2 mechanism pairs. Do they encode the SAME semantic? If not, can you realign them?
  [ ] For your strongest pair: remove mechanism A mentally. Does B feel wrong without it?

MODULATION (30 seconds):
  [ ] Look at one callout in a dense section and one in a sparse section.
      Do they have DIFFERENT padding/margin/font-size? If identical: add modulation.

RESPONSE (20 seconds):
  [ ] Look at the first section after the dark header.
      Does it ACKNOWLEDGE the header's visual weight (drop cap, color echo, scale match)?

CONTRAST (20 seconds):
  [ ] Name one mechanism that is NOT deployed in at least one section.
      Can you explain WHY it is absent? If yes: deliberate contrast.

CASCADE (10 seconds):
  [ ] Do spacing, backgrounds, and borders all change in the SAME DIRECTION
      from section to section? If yes: cascade exists.

FRACTAL (10 seconds):
  [ ] Zoom to one callout. Does its internal structure echo the page's density direction?
      (Dense page zone -> dense callout internals? Sparse zone -> generous callout?)

RHYTHM (10 seconds):
  [ ] Are your section padding values all the same number? If yes: FAIL (metronomic).

ATMOSPHERE TEST (10 seconds):
  [ ] Can you describe the page's feel in ONE WORD that is NOT a mechanism name?
      ("Tightening." "Deepening." "Warming." "Gathering.")
      If you can only say "it uses 14 mechanisms" = vocabulary, not composition.

TOTAL: ~2 minutes. If 6+ checks pass: proceed to audit.
If < 6 pass: restructure compositional clusters before submitting.
```

---

## SUMMARY: MULTI-COHERENCE AT A GLANCE

| Component | Minimum Flagship Requirement | Verification Method |
|-----------|------------------------------|---------------------|
| Reinforcing pairs | 3+ documented | Removal test: remove A, does B change? |
| Modulating chains | 2+ documented | Compare same component in different density zones |
| Responding sequences | 2+ documented | Remove creator: does responder feel arbitrary? |
| Contrasting deployments | 2+ documented | Written justification for each absence |
| Cascading chains | 1+ (3+ mechanisms) | Value table: all change in same direction |
| CCS score | >= 0.30 | Average CCS across 5 tested mechanisms |
| Fractal coherence | 5/5 scales | Direction documentable at each scale |
| Rhythm variation | 3+ distinct padding values | Count distinct values |
| Cross-dimension pairs | 10+ of 15 documented | Both dimensions change at same boundary |
| Self-reference | 1+ instance | Content describes its own form |

**The one-sentence test:** Can you describe the page in one atmospheric phrase that is NOT a list of mechanisms? If yes, multi-coherence exists. If the only description is a mechanism list, revise.

---

**END MULTI-COHERENCE INVOCATION SYSTEM**
