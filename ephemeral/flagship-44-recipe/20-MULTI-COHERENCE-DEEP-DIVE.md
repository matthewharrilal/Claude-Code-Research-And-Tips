# Multi-Coherence Deep Dive

**Agent:** coherence-tracer (Opus)
**Task:** #35 — How does >=3 channel simultaneous shifting actually work?
**Date:** 2026-02-19
**Sources read:** CD-006-pilot-migration.html (full CSS + HTML sections), 07-intentionality.html (full CSS + HTML sections), mechanism-catalog.md (all 18 mechanisms + scales/channels theory)

---

## 1. What IS Multi-Coherence?

Multi-coherence is the simultaneous shifting of >=3 CSS channels at a single section boundary, where ALL channels encode the SAME semantic direction.

**Single-channel shift (NOT multi-coherence):**
Background changes from `#FEF9F5` to `#F0EBE3` at a boundary. One channel shifts. The reader may or may not notice.

**Multi-channel shift (multi-coherence):**
At the SAME boundary, background darkens AND typography compresses AND spacing tightens AND borders thicken AND content density increases. Five channels shift simultaneously, all saying "deeper / more intense / more analytical." The reader FEELS a zone change without being able to name any single cause.

**The critical word is "same semantic direction."** If background darkens (saying "heavier") while spacing loosens (saying "lighter"), the channels contradict. Multi-coherence requires AGREEMENT.

---

## 2. What "Same Semantic Direction" Means in CSS Terms

A "semantic direction" is a metaphor-derived quality that maps to multiple CSS properties. The direction is NOT arbitrary -- it emerges from the page's governing metaphor and the content's narrative arc.

### Concrete Semantic Directions

**Direction: "DEEPER / MORE ANALYTICAL / UNDER PRESSURE"**

| Channel | CSS Property Shift | Perceptual Effect |
|---------|-------------------|-------------------|
| Ch1 Chromatic | Background warms → cools, or variety → uniformity | Colors settle, less visual variation |
| Ch2 Typographic | font-size shrinks, line-height compresses, letter-spacing tightens | Text becomes denser, more functional |
| Ch3 Spatial | padding shrinks, margin shrinks, gap narrows | Elements pack closer together |
| Ch4 Structural | border-weight increases, borders appear, containment tightens | Structure becomes more rigid and visible |
| Ch5 Density | More components per viewport, smaller whitespace gaps | Information concentration increases |
| Ch6 Rhythmic | Transitions shift from BREATHING to SMOOTH, divider weight increases | Pacing accelerates, less breathing room |

**Direction: "LIGHTER / MORE REFLECTIVE / RESOLVED"**

| Channel | CSS Property Shift | Perceptual Effect |
|---------|-------------------|-------------------|
| Ch1 Chromatic | Background cools → warms back, or uniformity → single clean tone | Colors reach a settled state |
| Ch2 Typographic | font-size returns to standard, line-height opens up | Text becomes readable again, unhurried |
| Ch3 Spatial | padding opens, margins increase | Elements spread back out |
| Ch4 Structural | border-weight decreases, borders thin or disappear | Structure recedes |
| Ch5 Density | Fewer components, more prose, generous whitespace | Information thins out |
| Ch6 Rhythmic | Transitions shift to BREATHING, larger divider gaps | Pacing slows, contemplative |

**Direction: "WARMER / MORE EXPLORATORY / RAW"**

| Channel | CSS Property Shift | Perceptual Effect |
|---------|-------------------|-------------------|
| Ch1 Chromatic | Background varied warm tints, multiple distinct hues | Visual variety signals "many inputs" |
| Ch2 Typographic | font-size slightly larger, line-height generous, tracking open | Text is expansive, inviting |
| Ch3 Spatial | padding generous, ample margins | Lots of breathing room |
| Ch4 Structural | border-weight light, fewer structural containers | Structure is suggestive, not rigid |
| Ch5 Density | Moderate components, mixed types | Content variety without overwhelm |
| Ch6 Rhythmic | Mix of SMOOTH and BRIDGE transitions | Varied pacing, exploratory feel |

### The Key Insight

Semantic direction is not about absolute CSS values. It is about the RELATIVE SHIFT between adjacent zones. Section 4 having 48px padding means nothing in isolation. Section 4 having 48px padding when Section 3 had 64px and Section 5 will have 32px means EVERYTHING -- it positions this section in a compression arc.

---

## 3. How a Builder PLANS Multi-Coherence Before Writing CSS

### The Transition Table Method

Before writing any CSS, the builder creates a transition table that maps every section boundary to its channel shifts.

**Flagship 07-intentionality.html declares this in its CSS comments (but FAILS to execute it):**

```
Zone 1 (S1-S3): Warm, varied -- raw intake area
Zone 2 (S4-S8): Cooler, converging -- active refinement
Zone 3 (S9-S12): Clean, unified -- refined output
```

**What the transition table SHOULD look like (and what CD-006 implicitly achieves):**

| Boundary | Ch1 (Chromatic) | Ch2 (Typographic) | Ch3 (Spatial) | Ch4 (Structural) | Ch5 (Density) | Direction |
|----------|----------------|-------------------|---------------|-------------------|---------------|-----------|
| Header → S1 | Dark → warm cream | Display → body, serif → sans | Tight → generous | 3px red border → no border | Sparse (title only → prose) | OPENING |
| S1 → S2 | Cream → tan/breathing | Body → display serif italic | Standard → extra generous (80px) | No border → outline offset + 4px left | Single para → single pullquote | FOCAL PAUSE |
| S2 → S3 | Tan → warm cream variant | Display → body, generous tracking | Extra generous → moderate (48px) | Outline → no container border | Prose → table + callout | GROUNDING |
| S4 → S5 | Warm cream → near-white | 17px generous → 15px compressed | 48px → 32px | No border → 4px red left on container | Light tables → featured table (peak) | DEEPENING |
| S8 → S9 | Cool analytical → refined cream | 15px compressed → 16px standard | 32px → 48px | Heavy borders → medium borders | Dense tables → findings summary | RESOLVING |
| S11 → S12 | Gentle tan → clean cream | Standard → settled, warm | Moderate → generous | Light borders → 4px dark container | Hypothesis tables → closing prose | CLOSING |

**The conviction card alternative:**

For each major zone transition, the builder writes a 3-sentence conviction:

> "At the S4→S5 boundary, the page enters its analytical core. ALL channels say 'deeper': background shifts from warm cream (#F8F6F3) to near-white (#FAF8F5), typography compresses from 17px/1.85 to 15px/1.55, spacing tightens from 48px to 32px padding, and a 4px primary-red structural border appears on the container. The reader should feel the page becoming more serious and information-dense."

### Why Planning Matters

Without pre-planning, channels drift independently. The builder applies background variation (Ch1) without coordinating typography (Ch2) or spacing (Ch3). The result: channels shift at different boundaries, in different directions, creating perceptual incoherence. The page has "variety" but not "atmosphere."

---

## 4. Can Multi-Coherence Be Verified Programmatically?

**YES -- but with significant caveats.**

### What CAN be verified:

**Gate: At each `<section>` boundary, count how many CSS property groups change.**

```javascript
// Pseudocode for programmatic multi-coherence verification
function checkMultiCoherence(section1, section2) {
  const channels = {
    chromatic: false,   // background-color differs
    typographic: false, // font-size OR line-height OR letter-spacing differs
    spatial: false,     // padding-top OR padding-bottom OR margin differs
    structural: false,  // border-left-width OR border-left-color OR border-top differs
    density: false,     // component count per viewport differs
    rhythmic: false     // transition type before/after differs
  };

  // Compare computed styles of first child in each section
  const s1 = getComputedStyle(section1);
  const s2 = getComputedStyle(section2);

  channels.chromatic = s1.backgroundColor !== s2.backgroundColor;
  channels.typographic = (
    s1.fontSize !== s2.fontSize ||
    s1.lineHeight !== s2.lineHeight ||
    s1.letterSpacing !== s2.letterSpacing
  );
  channels.spatial = (
    s1.paddingTop !== s2.paddingTop ||
    s1.paddingBottom !== s2.paddingBottom
  );
  channels.structural = (
    s1.borderLeftWidth !== s2.borderLeftWidth ||
    s1.borderLeftColor !== s2.borderLeftColor
  );

  const activeChannels = Object.values(channels).filter(Boolean).length;
  return activeChannels >= 3; // PASS if >=3 channels shift
}
```

**This catches the flagship failure case.** Flagship 07-intentionality.html has background shifts of 1-8 RGB points (imperceptible), zero border changes between sections, uniform 16px/400 typography, and near-identical spacing. A programmatic check would report 0-1 channels shifting at most boundaries.

### What CANNOT be verified programmatically:

1. **Semantic direction agreement.** A program can detect that 3 channels shifted, but cannot determine whether they shifted in the SAME semantic direction. Background darkening + spacing loosening = contradiction, not coherence. This requires either human judgment or a structured metadata approach (builder annotates each shift with its intended direction).

2. **Perceptual salience.** A 3-point RGB shift technically changes the chromatic channel but is imperceptible. The >=15 RGB delta threshold from previous research helps here -- any background shift below 15 RGB points should NOT count as a channel shift.

3. **Metaphor alignment.** Whether the shifts serve the governing metaphor (assay laboratory, geological strata, etc.) is a semantic judgment, not a CSS measurement.

### Recommended Verification Protocol:

**Level 1 (Programmatic -- binary gate):**
- At >=3 major section boundaries, >=3 CSS property groups must change
- Background color delta must be >=15 RGB points to count
- Font-size delta must be >=1px to count
- Padding delta must be >=8px to count
- Border-width delta must be >=1px to count

**Level 2 (Builder self-check -- structured annotation):**
- Builder must fill transition table BEFORE coding
- Each row must declare semantic direction
- Post-build, verify CSS matches declared direction

**Level 3 (Perceptual audit -- human judgment):**
- PA auditor views boundaries in isolation
- "Can you tell something changed?" at each boundary
- "Do the changes feel like they're saying the same thing?"

---

## 5. Minimum (3 Channels) vs Ideal (5-6 Channels)

### 3-Channel Minimum (COHERENT)

The simplest multi-coherent boundary shifts:
- **Chromatic** (background color)
- **Spatial** (padding/margin)
- **Typographic** (font-size or line-height)

This is the floor for "designed." The reader feels a zone change. It creates atmosphere. But it can feel mechanical -- like a thermostat adjusting three settings at once.

**Example from the Flagship remediation (post-fix):**

At Zone 1 → Zone 2 boundary:
- Background: warm cream → near-white (chromatic)
- Padding: 64px → 32px (spatial)
- Font-size: 17px → 15px (typographic)

Three channels. The reader notices the page becoming more analytical. It works. But it is the MINIMUM for "designed."

### 5-6 Channel Ideal (COMPOSED)

When 5-6 channels shift together, the effect becomes immersive rather than noticeable. The reader doesn't detect individual changes -- they experience an atmospheric shift. This is what separates "designed" (3-channel, PA-05 3/4) from "composed" (5-6 channel, PA-05 4/4).

**Example from CD-006 at the S1→S2 BREATHING transition (line 1214):**

| Channel | S1 (Spiral/Geological) | S2 (Z-Pattern/Pulse) | Direction |
|---------|----------------------|---------------------|-----------|
| Ch1 Chromatic | `--color-zone-sparse` (#FEF9F5) | Z-hero with `--color-zone-breathing` (#FAF5ED) box | WARMER |
| Ch2 Typographic | Drop-cap serif 3.5em + body Inter 1rem | Italic serif subsection questions + mono code labels | VOICE SHIFT |
| Ch3 Spatial | Strata with 24px gap between, generous | Z-hero 1.618fr grid, tighter internal spacing | GRID SHIFT |
| Ch4 Structural | 4px/3px/1px strata borders (progressive) | 4px callout borders + 3px structural container borders | BORDER RECONFIGURATION |
| Ch5 Density | 3 strata + 3 components (core abstraction, essence, info) | Z-grid + 3 Q&A blocks + code + gotcha + tip (7 components) | DENSIFYING |
| Ch6 Rhythmic | BREATHING transition (80px + 3px border) between sections | PULSE rhythm (question sparse / answer dense) within section | RHYTHM CHANGE |

**Six channels shift simultaneously.** The reader experiences a complete atmospheric change: from the geological strata's vertical descent through confidence layers to the Z-pattern's diagonal conversational energy. Not one thing changed -- EVERYTHING changed, and it all changed coherently.

### The Practical Difference

| Channels | Experience | PA-05 Level | Builder Effort |
|----------|------------|-------------|----------------|
| 0-1 | Flat, monotone | 1/4 (FLAT) | Minimal |
| 2 | Something changed, hard to say what | 2/4 (FUNCTIONAL) | Moderate |
| 3 | Definite zone change, somewhat mechanical | 3/4 (DESIGNED) | Significant |
| 4-5 | Atmospheric shift, immersive but traceable | 3.5-4/4 (COMPOSED) | High |
| 6 | Total transformation, cannot isolate cause | 4/4 (FLAGSHIP) | Very high (requires metaphor) |

---

## 6. What Multi-Coherence Looks Like When ABSENT

### Flagship 07-intentionality.html: The Definitive Failure Case

**The CSS declares multi-coherence. The computed output delivers none.**

**What the CSS comments promise (lines 106-151):**
```
Zone 1 (S1-S3): Warm, varied -- raw intake area
  --color-zone-s1: #FEF5EB (warm peach cream)
  --color-zone-s2: #F5EDE2 (warm tan)
  --color-zone-s3: #FBF3E8 (warm honey)

Zone 2 (S4-S8): Cooler, converging
  --color-zone-s4: #F8F6F3 (cooling cream)
  --color-zone-s5: #FAF8F5 (warm near-white)
  --color-zone-s7: #F8F6F3 (warm neutral)
  --color-zone-s8: #F2EFEA (warm mid-gray)

Zone 3 (S9-S12): Unified warm
  --color-zone-s9: #FEF7F0 (refined cream)
  --color-zone-s12: #FEF5EB (clean cream)
```

**What actually computes at the S4→S5 boundary (the critical ORIENT→DEEPEN transition):**

| Channel | S4 Value | S5 Value | Delta | Perceptible? |
|---------|----------|----------|-------|-------------|
| Ch1 Chromatic | #F8F6F3 | #FAF8F5 | +2R, +2G, +2B | **NO** (6 total RGB, need >=15) |
| Ch2 Typographic | 16px / 400 / 1.75 line-height | 16px / 400 / 1.75 line-height | 0 | **NO** (identical) |
| Ch3 Spatial | `padding: 48px 32px` | `padding: 32px 32px` | -16px top | **MARGINAL** (barely perceptible) |
| Ch4 Structural | None | None | 0 | **NO** (zero borders on either section) |
| Ch5 Density | Table + 2 paragraphs | Table + callout + 3 paragraphs | Slightly more | **MARGINAL** |
| Ch6 Rhythmic | SMOOTH divider (1px, 16px margin) | SMOOTH divider (1px, 16px margin) | 0 | **NO** (identical transition type) |

**Result: 0-1 perceptible channels shift.** The page looks the same in S5 as it does in S4. The "assay laboratory" metaphor that should drive progressive refinement is INERT. The reader scrolls through 12 sections that feel like one continuous, undifferentiated zone.

**The smoking gun CSS (from the remediation, lines 916-999):**

The remediation ADDED what the original lacked:
```css
/* Zone 1: Generous reading */
.zone-s1 p, .zone-s2 p, .zone-s3 p {
  font-size: 17px;        /* +1px from default */
  line-height: 1.85;      /* +0.10 from default */
  letter-spacing: 0.02em; /* open tracking */
  max-width: 62ch;
  color: #2A2520;         /* slightly warmer than --color-text */
}

/* Zone 2: Analytical compression */
.zone-s5 p, .zone-s7 p, .zone-s8 p {
  font-size: 15px;         /* -1px from default */
  line-height: 1.55;       /* -0.20 from default */
  letter-spacing: -0.01em; /* tight tracking */
  max-width: 72ch;
  color: var(--color-text); /* standard dark */
}
```

This is the remediation applying Ch2 (Typographic) variation that was ABSENT in the original. Combined with structural borders (Ch4) and spatial padding variation (Ch3), the remediation achieved PA-05 2.5/4 -- a +1.0 improvement. Still not 4/4, because the background deltas remained below 15 RGB (Ch1 still inert).

---

## 7. What Multi-Coherence Looks Like When PRESENT

### CD-006-pilot-migration.html: The Reference Implementation

CD-006 achieves multi-coherence through a fundamentally different architecture. Where the Flagship uses per-section background variables with imperceptible deltas, CD-006 uses a COMBINATION of mechanisms that create large, visible, coordinated shifts.

**Boundary analysis: S1 (Spiral/Geological) → Breathing Transition → S2 (Z-Pattern/Pulse)**

CD-006 lines 1205-1254 show the transition from geological strata to Z-pattern conversation:

**Ch1 (Chromatic):** S1 uses `--color-zone-sparse` (#FEF9F5) as base with a `--color-zone-breathing` (#FAF5ED) component panel inside. S2 uses the same base but introduces a dark code block (#1A1A1A) and a `--color-zone-breathing` sidebar. The TRANSITION between them is a `transition--breathing` element with 80px margin + 3px structural border in `--color-border` (#E0D5C5). The chromatic shift includes the breathing transition's own visual weight. **Delta: LARGE** (the transition zone itself provides the chromatic punctuation).

**Ch2 (Typographic):** S1 has stratum labels in `--font-mono` 0.75rem uppercase, section heading in `--font-display` 1.625rem, core-abstraction principle in `--font-display` italic 1.25rem. S2 has QA questions in `--font-display` italic 1.375rem, QA answers in `--font-body` 1rem, code blocks in `--font-mono` 0.875rem. The typographic VOICE shifts from geological taxonomy (mono labels classifying strata) to conversational dialogue (italic serif questions, sans-serif answers). **Delta: LARGE** (voice architecture changes entirely).

**Ch3 (Spatial):** S1's `.spiral-strata` uses flex column with `--space-8` (32px) gap between strata. S2's `.z-hero` uses CSS grid with golden-ratio columns (1.618fr / 1fr) and `--space-8` gap. The SHAPE of space changes from linear vertical stack to 2D grid. Plus the breathing transition adds 80px of explicit pause. **Delta: LARGE** (spatial topology changes from 1D to 2D).

**Ch4 (Structural):** S1 has `.stratum--established` (4px border-left), `.stratum--probable` (3px border-left), `.stratum--speculative` (1px border-left) -- a progressive border-weight gradient. S2 has `.qa-question` with `4px solid --color-primary` border-left, plus `.callout` with `4px solid` border-left + `1px` border-top. The structural vocabulary changes from GRADUATED borders (encoding confidence) to CATEGORICAL borders (encoding component type). **Delta: LARGE** (border semantics change from gradient to categorical).

**Ch5 (Density):** S1 has 3 strata containing 3 components (core abstraction, essence callout, info callout + drop-cap paragraph). S2 has Z-grid (4 quadrants) + 3 QA blocks + code block + gotcha callout + tip callout = 7 distinct components in more diverse types. **Delta: MODERATE** (density increases, component variety broadens).

**Ch6 (Rhythmic):** The transition type itself is BREATHING (the most dramatic: 80px + 3px border), which is prescribed by CD convention S18.3 because Spiral→Z-Pattern is a maximum-distance axis change. Within S1, the rhythm is DESCENT (strata stack vertically). Within S2, the rhythm is PULSE (question→answer→question→answer). **Delta: LARGE** (rhythm changes from continuous descent to alternating pulse).

**RESULT: 6 channels shift at this boundary. ALL say "change of mode" -- from taxonomic classification to conversational exploration. The reader FEELS the page shift from analyzing (strata) to discussing (Q&A). Multi-coherence is MAXIMAL.**

---

## 8. The Planning Protocol: How to Build Multi-Coherence Into a Recipe

### Step 1: Declare Zone Architecture (Before Any CSS)

Map the page into 2-4 semantic zones. Each zone has a PURPOSE that drives all channel values.

```
Zone A (Orient, S1-S4): Reader is learning the landscape
  Semantic direction: WARM, GENEROUS, EXPLORATORY

Zone B (Deepen, S5-S8): Reader is applying concepts
  Semantic direction: COOL, COMPRESSED, ANALYTICAL

Zone C (Synthesize, S9-S12): Reader is integrating
  Semantic direction: SETTLED, STANDARD, REFLECTIVE
```

### Step 2: Fill the Transition Table (Before Any CSS)

For each zone boundary, declare what each channel does:

```
Boundary: Zone A → Zone B (S4→S5)
  Ch1 Chromatic:   warm cream → near-white         (>=15 RGB delta)
  Ch2 Typographic: 17px/1.85/+0.02em → 15px/1.55/-0.01em  (2px + 0.3lh + 0.03em)
  Ch3 Spatial:     48px padding → 32px padding       (16px delta)
  Ch4 Structural:  no container border → 4px primary left   (0→4px)
  Ch5 Density:     2 components → 4 components        (doubles)
  Ch6 Rhythmic:    BRIDGE transition type              (heaviest divider)

  Direction: ALL channels say "DEEPER / MORE ANALYTICAL"
  Minimum channels shifting: 5 (all except Ch6 which is the transition itself)
```

### Step 3: Derive CSS Values FROM the Table (Not Vice Versa)

Each row in the transition table generates specific CSS:

```css
/* Zone A typography */
.zone-a p { font-size: 17px; line-height: 1.85; letter-spacing: 0.02em; }

/* Zone B typography — DERIVED from "analytical compression" direction */
.zone-b p { font-size: 15px; line-height: 1.55; letter-spacing: -0.01em; }
```

The CSS values are CONSEQUENCES of the semantic direction, not independent choices.

### Step 4: Verify Coherence Post-Build

Run the programmatic gate (Level 1): >=3 property groups change at each major boundary.
Run the self-check (Level 2): CSS values match declared transition table directions.
Run the PA (Level 3): boundaries feel coherent to fresh eyes.

---

## 9. Why Multi-Coherence is THE Key Differentiator

### Middle Tier: Mechanisms Deployed Independently

In the Middle experiment (PA-05 4/4 DESIGNED but NOT composed), mechanisms were deployed to solve DIFFERENT content problems:
- Border-weight (#1) handled hierarchy
- Zone backgrounds (#7) handled section breaks
- Spacing compression (#4) handled reading rhythm
- Each mechanism independently addressed a content need

**Result:** The page felt "designed" because each mechanism was well-chosen and well-executed. But the mechanisms did not CONVERSE with each other. Border-weight changed without background changing. Spacing shifted without typography shifting.

### Flagship Tier: Mechanisms Deployed in Concert

In a successful Flagship, mechanisms would be deployed to serve THE SAME semantic direction simultaneously:
- At one boundary: border-weight, background, spacing, typography, density ALL shift
- At another boundary: ALL of them shift again, in a NEW coordinated direction
- The mechanisms are not solving different problems -- they are saying the same thing in different CSS languages

**The analogy:** An orchestra where each instrument plays its own melody (Middle) vs an orchestra where all instruments play different parts of the same chord progression (Flagship). The second creates HARMONY. The first creates VARIETY.

### The Operational Consequence

**For the builder recipe, this means:**

1. The builder must plan ZONE TRANSITIONS before mechanism selection
2. The transition table is a MANDATORY deliverable, not an optional planning tool
3. Every mechanism deployment must declare which BOUNDARY it serves and which DIRECTION it encodes
4. Post-build verification must check BOUNDARY-level coherence, not mechanism-level correctness

**Multi-coherence is not an additional requirement on top of mechanism deployment. It IS the organizing principle for how mechanisms get deployed.**

---

## 10. Operational Rules for the Recipe

### R-MC-01: Transition Table is a Required Deliverable
The builder MUST produce a transition table mapping every major boundary (zone changes, not all 12 sections) to >=3 channel shifts BEFORE writing CSS. Binary gate: table exists / table doesn't exist.

### R-MC-02: Minimum 3 Channels Per Major Boundary
At every zone boundary (not every section boundary), >=3 of 6 channels must shift. Section boundaries within a zone can shift 1-2 channels (gradual progression). Zone boundaries MUST shift >=3 (architectural change).

### R-MC-03: Perceptual Thresholds for Channel Counting
A channel shift only "counts" if it meets perceptual thresholds:
- **Chromatic:** >=15 RGB points between adjacent section backgrounds
- **Typographic:** >=1px font-size OR >=0.1 line-height OR >=0.01em letter-spacing
- **Spatial:** >=8px padding/margin delta
- **Structural:** >=1px border-width delta OR border appears/disappears
- **Density:** >=1 component count delta per viewport
- **Rhythmic:** Different transition type (smooth/bridge/breathing)

### R-MC-04: Direction Agreement
At each zone boundary, all shifting channels must encode the SAME semantic direction. The builder MUST declare the direction in the transition table ("DEEPENING", "RESOLVING", "OPENING", etc.). Post-build audit verifies CSS values match declared direction.

### R-MC-05: No Contradiction Across Channels
If background darkens (saying "heavier"), spacing MUST NOT loosen (saying "lighter") at the same boundary. Contradictions at zone boundaries = multi-coherence failure. Within-zone contradictions are acceptable (e.g., one element breathing while others compress = local variation, not zone-level contradiction).

### R-MC-06: Zone Count Constraint
A page with 8-12 sections should have 2-4 major zones, producing 2-4 zone boundaries. Too many zones (every section is its own zone) fragments the coherence. Too few zones (one zone for the whole page) eliminates it. 3 zones with 2 zone boundaries is the sweet spot (Orient / Deepen / Synthesize).

---

## Summary

Multi-coherence is not a decorative feature or a "nice to have." It is the specific CSS behavior that creates the atmospheric quality separating Flagship from Middle. It requires:

1. **Pre-planning** (transition table before CSS)
2. **Coordinated deployment** (>=3 channels per zone boundary)
3. **Semantic agreement** (all channels encode same direction)
4. **Perceptual salience** (deltas above threshold, not imperceptible)
5. **Metaphor coherence** (directions serve the governing metaphor)

The Flagship failed because it had the CSS comments but not the CSS values. CD-006 succeeded because it had the CSS values organized by architectural boundaries rather than individual mechanisms.

**Multi-coherence is the difference between "mechanisms on a page" and "a page WITH atmosphere."**
