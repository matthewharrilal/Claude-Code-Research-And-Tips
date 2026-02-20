# 19 — The 6 Channels Deep Dive

**Agent:** channel-tracer (Opus)
**Task:** #34 — STACK: 6 Channels — how does each channel encode semantic direction in CSS?
**Date:** 2026-02-19
**Sources read:** mechanism-catalog.md (1,218 lines), CD-006-pilot-migration.html (lines 1-2000), 07-intentionality.html (lines 1-2034)

---

## What Are Channels?

Channels are **CSS property groups** that encode **semantic direction** — the reader's sense of moving through the document's conceptual space. Where mechanisms are individual tools (border-weight gradient, zone backgrounds), channels are the PROPERTY FAMILIES those mechanisms operate through.

A mechanism like "spacing compression" operates through the **Spatial channel**. A mechanism like "zone background differentiation" operates through the **Chromatic channel**. The channel concept matters because **multi-coherence** requires 3+ channels to shift simultaneously at a section boundary. You cannot achieve multi-coherence by deploying 5 mechanisms that all operate through the same channel.

**Critical distinction:**
- **Mechanism** = a reusable CSS technique (e.g., #7 Zone Background Differentiation)
- **Channel** = the CSS property family the mechanism operates through (e.g., Chromatic)
- **Multi-coherence** = 3+ channels shifting together at a boundary

---

## The 6 Channels — Full Specification

### Channel 1: CHROMATIC

**CSS properties:** `background-color`, `border-color`, `color` (text), accent colors on borders/labels

**What "encoding semantic direction" means:**
Chromatic shifts signal **conceptual temperature and domain change**. A warm-to-cool background progression encodes "moving from exploratory/raw to analytical/refined." A shift from cream (#FEF9F5) to near-white (#FEFEFE) signals "we have entered a different cognitive territory." The reader does not consciously register the 8-point RGB change, but the cumulative effect across multiple sections creates atmospheric progression.

**Semantic directions available:**
| Direction | CSS Pattern | Reader Perceives |
|-----------|------------|-----------------|
| Warm → Cool | `#FEF5EB` → `#F8F6F3` → `#FEFEFE` | Exploratory → Analytical |
| Light → Dark | cream bg → dark code block → cream bg | Content → Code → Content |
| Neutral → Accented | `--color-border` → `--color-primary` | Structural → Emphatic |
| Varied → Uniform | 3 distinct warm tints → 1 clean tone | Many sources → One conclusion |

**How to deploy at a section boundary:**
```css
/* Section A: warm exploratory */
.section-explore {
  background-color: #FEF5EB;  /* warm peach cream */
}

/* Section B: cool analytical */
.section-analyze {
  background-color: #F8F6F3;  /* cooling cream */
}
```
The boundary itself needs NO extra element — the background color change IS the chromatic signal. Pair with a transition element (divider, bridge prose) only when other channels also shift.

**Perceptual threshold:** Background differences must be >= 15 RGB points apart to be perceptible. The Flagship experiment failed this: Zone 1-3 backgrounds differed by 1-8 RGB points (imperceptible). CD-006 ALSO used subtle tints, but paired them with structural borders that made the zone change visible through other channels.

**Mechanisms that operate through Chromatic:**
- #7 Zone Background Differentiation (primary carrier)
- #9 Confidence/Priority Encoding via Color (accent carrier)
- #13 Dark Header (contrast landmark)
- #14 Footer Mirror (contrast landmark)
- #17 Code Block dark background (embedded contrast)

---

### Channel 2: TYPOGRAPHIC

**CSS properties:** `font-size`, `font-weight`, `font-family`, `letter-spacing`, `line-height`, `font-style`, `text-transform`

**What "encoding semantic direction" means:**
Typographic shifts signal **cognitive mode and information density**. Larger, lighter type with generous letter-spacing encodes "open, exploratory reading — take your time." Smaller, heavier type with tight letter-spacing encodes "dense, analytical content — pay close attention." A shift to monospace signals "this is precise, technical, machine-readable." A shift to serif italic signals "this is philosophical, reflective, human."

**Semantic directions available:**
| Direction | CSS Pattern | Reader Perceives |
|-----------|------------|-----------------|
| Open → Compressed | `font-size: 17px; line-height: 1.85; letter-spacing: 0.02em` → `15px; 1.55; -0.01em` | Generous reading → Dense analysis |
| Light → Heavy | `font-weight: 400` → `font-weight: 600` | Exploratory → Established |
| Body → Display | `--font-body` → `--font-display` | Information → Wisdom |
| Standard → Compressed | normal case → `text-transform: uppercase; letter-spacing: 0.1em` | Content → Label/Meta |

**How to deploy at a section boundary:**
```css
/* Zone 1: Generous reading */
.zone-1 p {
  font-size: 17px;
  line-height: 1.85;
  letter-spacing: 0.02em;
  max-width: 62ch;
}

/* Zone 2: Analytical compression */
.zone-2 p {
  font-size: 15px;
  line-height: 1.55;
  letter-spacing: -0.01em;
  max-width: 72ch;
}

/* Zone 1 headings: warm, light */
.zone-1 h2 {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #3D3530;
}

/* Zone 2 headings: tight, heavy */
.zone-2 h2 {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
}
```

**Perceptual threshold:** Font-size changes < 1px are imperceptible. Letter-spacing changes < 0.5px (at 16px base = ~0.03em) are imperceptible. The Flagship experiment had ALL body text at 16px/400 — zero typographic channel encoding across its 12 sections. The remediated version attempted zone-based variation (17px/15px/16px) but specificity issues prevented the 15px values from applying in Zone 2.

**Mechanisms that operate through Typographic:**
- #11 Typographic Scale Jumping (size hierarchy)
- #16 Drop Cap (focal opening)
- #2 Two-Zone Component DNA (label=meta type vs body=body type)
- #18 Data Table (mono headers + uppercase)

---

### Channel 3: SPATIAL

**CSS properties:** `padding`, `margin`, `gap`, `max-width`, `margin-left/right` (indentation)

**What "encoding semantic direction" means:**
Spatial shifts signal **cognitive pace and information rhythm**. Generous padding (64-80px) encodes "slow down, absorb this." Compressed padding (24-32px) encodes "this is dense, scan efficiently." Alternating dense/sparse creates rhythm. Width variation (full-width vs 80% vs 70%) creates horizontal breathing.

**Semantic directions available:**
| Direction | CSS Pattern | Reader Perceives |
|-----------|------------|-----------------|
| Sparse → Dense | `padding: 64px` → `padding: 32px` | Spacious → Compressed |
| Full → Narrow | `max-width: 100%` → `max-width: 85%` | Expansive → Focused |
| Centered → Indented | `margin-left: 0` → `margin-left: 5%` | Primary flow → Nested argument |
| Even → Asymmetric | equal top/bottom → `padding-top: 64px; padding-bottom: 40px` | Steady → Directional |

**How to deploy at a section boundary:**
```css
/* Sparse zone (introduction) */
.section-intro {
  padding-top: 64px;
  padding-bottom: 40px;
}

/* Dense zone (analysis) */
.section-analysis {
  padding-top: 32px;
  padding-bottom: 32px;
}

/* Within-section spatial variation */
.section-analysis p {
  margin-bottom: 12px;  /* compressed paragraph spacing */
}
.section-intro p {
  margin-bottom: 20px;  /* generous paragraph spacing */
}
```

**Perceptual threshold:** Padding differences < 24px between adjacent sections are not perceptible as intentional change. The Flagship experiment used inline styles with different padding per section but the differences (64px vs 48px vs 32px) were present in the CSS. The catastrophic void issue arose from stacked spacings (section padding + divider margin + bridge margin) accumulating to 210-276px — not from individual values but from their sum.

**Mechanisms that operate through Spatial:**
- #4 Spacing Compression (progressive padding)
- #5 Dense/Sparse Alternation (rhythm)
- #6 Width Variation (horizontal breathing)
- #12 Progressive Disclosure (density gradient flow)
- #15 Bento Grid (layout topology)

---

### Channel 4: STRUCTURAL

**CSS properties:** `border-width`, `border-style`, `border-color`, `display` (grid/flex), `grid-template-columns`, column count, outline

**What "encoding semantic direction" means:**
Structural shifts signal **authority and containment**. A 4px primary-colored border says "this is THE most important structural element." A 1px subtle border says "this is a soft separator." Grid layout changes (single-column → 2-column → bento) signal "the content topology has changed." Structural channel is the most immediately visible — readers always notice when borders appear/disappear or layouts shift.

**Semantic directions available:**
| Direction | CSS Pattern | Reader Perceives |
|-----------|------------|-----------------|
| Light → Heavy | `border: 1px solid #E0D5C5` → `border: 4px solid #E83025` | Subtle → Emphatic |
| Absent → Present | no border → `border-left: 3px solid` | Open → Contained |
| Single → Multi-column | `display: block` → `grid-template-columns: 1fr 1fr` | Linear → Comparative |
| Uniform → Varied | all sections bordered → alternating bordered/unbounded | Steady → Rhythmic |

**How to deploy at a section boundary:**
```css
/* Section without structural containment */
.section-open .page-container {
  /* no border-left, just content */
}

/* Section WITH structural containment */
.section-contained .page-container {
  border-left: 3px solid var(--color-text);
  padding-left: 29px;
}

/* Peak structural emphasis */
.section-anchor .page-container {
  border-left: 4px solid var(--color-primary);
  padding-left: 28px;
}
```

**Perceptual threshold:** Border appearance/disappearance is ALWAYS perceptible. Border width differences (1px vs 3px vs 4px) are perceptible. This is the most reliable channel for marking boundaries. The Flagship experiment had ZERO visible borders in its sections (all borders were present only on table headers and divider elements). The remediated version added section-level border-left on 6 of 12 sections — the alternating presence/absence created rhythm.

**Mechanisms that operate through Structural:**
- #1 Border-Weight Gradient Encoding (weight progression)
- #3 Solid Offset Depth (pseudo-element depth)
- #10 Border-Left Semantic Signaling (component identity)
- #13 Dark Header + 3px Border (entrance landmark)
- #14 Footer Mirror (exit landmark)
- #15 Bento Grid (layout structure)
- #18 Data Table (header/separator borders)

---

### Channel 5: BEHAVIORAL

**CSS properties:** `transition`, `animation`, `hover` states, `cursor`, interactive affordances

**What "encoding semantic direction" means:**
Behavioral shifts signal **interactivity and engagement expectation**. Hover effects on table rows signal "this data is scannable, move your cursor." Link transitions signal "these are actionable." Component hover effects (subtle border thickening) signal "this element responds to attention." The behavioral channel is unique in that it requires user action to manifest — it is latent until triggered.

**Semantic directions available:**
| Direction | CSS Pattern | Reader Perceives |
|-----------|------------|-----------------|
| Static → Interactive | no hover → `tr:hover { background: ... }` | Reading → Scanning |
| Immediate → Transitional | instant change → `transition: 0.15s ease` | Mechanical → Fluid |
| Passive → Actionable | display-only → click/hover/expand affordances | Consuming → Acting |

**How to deploy at a section boundary:**
```css
/* Static reading zone — no hover effects on body content */
.zone-reading p { /* no transitions */ }

/* Interactive reference zone — table rows respond to hover */
.zone-reference table tbody tr {
  transition: background-color 0.1s ease;
}
.zone-reference table tbody tr:hover {
  background-color: var(--color-zone-breathing);
}

/* Actionable zone — links transition, components respond */
.zone-action a {
  transition: color 0.15s ease;
}
```

**Perceptual threshold:** Behavioral channel operates on interaction, not passive viewing. It reinforces other channels but cannot carry zone changes alone. It is the WEAKEST channel for encoding semantic direction because it only activates on user input.

**Mechanisms that operate through Behavioral:**
- #8 Scroll Witness / Sticky TOC (scroll-based state change)
- Hover transitions on table rows, links, components (enhancement)

---

### Channel 6: MATERIAL

**CSS properties:** `opacity`, `backdrop-filter`, `background-image` (texture), `filter` (carefully — no drop-shadow per soul)

**What "encoding semantic direction" means:**
Material shifts signal **substance and physical quality**. Under the KortAI soul constraints, this channel is EXTREMELY limited — no gradients, no backdrop-filter, no drop-shadow. The available material expressions are: opacity variation on non-container elements, and the **texture** of repeated patterns like alternating-row striping on tables.

**Semantic directions available:**
| Direction | CSS Pattern | Reader Perceives |
|-----------|------------|-----------------|
| Clean → Textured | plain background → alternating row colors | Simple → Detailed |
| Opaque → Translucent | `opacity: 1` → lower opacity (non-containers only) | Solid → Ambient |

**How to deploy at a section boundary:**
```css
/* Clean zone — tables have no row alternation */
.zone-clean table tbody tr:nth-child(even) td {
  background-color: transparent;
}

/* Textured zone — tables get striped rows */
.zone-textured table tbody tr:nth-child(even) td {
  background-color: var(--color-zone-breathing);
}
```

**Perceptual threshold:** Material channel under soul constraints has the lowest expressive range. It primarily serves as REINFORCEMENT for other channels, not as a primary carrier. CD-006 uses material sparingly (alternating table rows in dense zones). The Flagship experiment had essentially zero material channel encoding.

**Mechanisms that operate through Material:**
- Table row striping (subtle texture)
- Inline code background tinting (micro-texture)

---

## How 3+ Channels Shift Together at One Boundary

This is the multi-coherence requirement (SC-09): at zone-level boundaries (not every section boundary, but MAJOR shifts like Orient→Deepen, Deepen→Synthesize), 3+ channels must shift simultaneously.

### Example: CD-006 Remediated, S4→S5 Boundary (Orient→Deepen)

This is the most dramatic boundary on the page. Here is what shifts:

| Channel | S4 Value | S5 Value | Delta |
|---------|----------|----------|-------|
| **Chromatic** | `#F8F6F3` (cooling cream) | `#FAF8F5` (warm near-white) | Background tint change (~10 RGB points) |
| **Typographic** | `font-size: 16px; line-height: 1.7; letter-spacing: 0` | `font-size: 15px; line-height: 1.55; letter-spacing: -0.01em` | Compression: smaller type, tighter spacing |
| **Spatial** | `padding-top: 48px; padding-bottom: 40px` | `padding-top: 32px; padding-bottom: 32px` | Compression: 88px total → 64px total |
| **Structural** | No section border-left | `border-left: 4px solid var(--color-primary)` | Border APPEARS — containment begins |
| **Behavioral** | No table hover | Table rows get hover transitions | Interactive scanning enabled |

**5 channels shift simultaneously.** The reader perceives: "I have entered a different zone. The content is denser, more contained, more analytical. The generous reading space is gone; I am now in the working heart of the document."

### Example: CD-006 Remediated, S8→S9 Boundary (Deepen→Synthesize)

Marked by the BREATHING divider (heaviest transition element: 4px primary-color bar):

| Channel | S8 Value | S9 Value | Delta |
|---------|----------|----------|-------|
| **Chromatic** | `#F2EFEA` (warm mid-gray) | `#FEF7F0` (refined cream) | Warming: return to cream palette |
| **Typographic** | `font-size: 15px; font-weight: 600 (headings)` | `font-size: 16px; font-weight: 400 (headings)` | Relaxation: larger, lighter |
| **Spatial** | `padding: 32px` (compressed) | `padding: 48px; padding-bottom: 40px` | Expansion: breathing returns |
| **Structural** | `border-left: 3px solid var(--color-text)` (S7) | `border-left: 3px solid #5C4B3A` (S9) | Color shift: stark → warm brown |

**4 channels shift.** Plus the breathing divider itself adds behavioral weight (heaviest visual marker on the page). The reader perceives: "The analytical pressure is releasing. Conclusions are arriving. The document is settling."

---

## CD-006 Channel Shift Count (Per Boundary)

CD-006 has 8 sections with 7 section boundaries, plus header-to-content and content-to-footer boundaries. Here I trace channels across the original CD-006 HTML (not remediated), counting from the CSS I read:

### Boundary Analysis

**Header → S1 (Why Build from Tokens):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Dark (#1A1A1A) → Cream (#FEF9F5) |
| Typographic | YES | White display serif → body Inter |
| Spatial | YES | Header padding → section padding |
| Structural | YES | Dark bg + 3px red border-bottom → open section |
| Behavioral | NO | No interactive change |
| Material | NO | No material change |
**Count: 4 channels**

**S1 → S2 (BREATHING transition: Spiral → Z-Pattern):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Sparse zone → Pulse zone (callout backgrounds appear) |
| Typographic | YES | Spiral strata labels (mono/meta) → Z-hero headings + Q&A serif italic |
| Spatial | YES | Spiral stacking (flex column) → Z-hero grid (golden ratio 1.618fr/1fr) |
| Structural | YES | Stratum borders (4px/3px/1px left) → Z-grid 3px borders + Q&A 4px left |
| Behavioral | NO | No interactive change |
| Material | NO | No material change |
**Count: 4 channels**

**S2 → S3 (BRIDGE transition: Z-Pattern → Bento Grid):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Section bg → breathing zone bg (bridge element) → new section bg |
| Typographic | YES | Q&A serif italic → Bento cell headings, code blocks |
| Spatial | YES | Q&A alternating blocks → 4-column bento grid + nested 2-col sub-grid |
| Structural | YES | Q&A left-borders → Bento 3px bordered cells |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S3 → S4 (BRIDGE transition: Bento → F-Pattern):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Bento cell backgrounds → section bg, decision matrix bg |
| Typographic | YES | Bento code blocks → F-movement serif italic h3 + decision matrix |
| Spatial | YES | 4-column grid → single-column F-pattern flow |
| Structural | YES | Bento 3px cell borders → Decision matrix 3px border + table |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S4 → S5 (SMOOTH transition: F-Pattern continues):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Section bg shift (transparent → zone-breathing bg) |
| Typographic | PARTIAL | Same F-pattern style continues |
| Spatial | YES | Dense section padding change, narrower content |
| Structural | YES | Core abstraction has 3px border + code proof block |
| Behavioral | NO | |
| Material | NO | |
**Count: 3 channels**

**S5 → S6 (SMOOTH transition):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | PARTIAL | Subtle bg shift |
| Typographic | PARTIAL | Continues F-pattern |
| Spatial | YES | Denser section (Bento grid audit checklist) |
| Structural | YES | Audit checklist structural borders |
| Behavioral | NO | |
| Material | NO | |
**Count: 2-3 channels** (weaker boundary — within-mode shift)

**S6 → S7 (SMOOTH transition: Bento → Choreography):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | PARTIAL | Subtle bg |
| Typographic | YES | Bento cells → Choreography hub centered serif |
| Spatial | YES | Bento 4-col → Choreo hub+3-col spokes |
| Structural | YES | Bento cell borders → Choreo hub 3px border + spoke borders |
| Behavioral | NO | |
| Material | NO | |
**Count: 3 channels**

**S7 → S8 (SMOOTH transition: Choreography → Spiral):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | PARTIAL | Subtle bg |
| Typographic | YES | Choreo headings → Spiral strata labels + essence callout serif |
| Spatial | YES | Choreo hub-spoke → Spiral flex column |
| Structural | YES | Choreo bordered cells → Spiral border-weight gradient (4px/3px/1px) |
| Behavioral | NO | |
| Material | NO | |
**Count: 3 channels**

**S8 → Footer:**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Content cream → Dark (#1A1A1A) |
| Typographic | YES | Body → mono/uppercase footer labels |
| Spatial | YES | Section padding → footer padding |
| Structural | YES | Content borders → 3px red border-top |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

### CD-006 Summary

| Boundary | Channels Shifting | SC-09 Pass (>=3)? |
|----------|------------------|-------------------|
| Header → S1 | 4 | YES |
| S1 → S2 (BREATHING) | 4 | YES |
| S2 → S3 (BRIDGE) | 4 | YES |
| S3 → S4 (BRIDGE) | 4 | YES |
| S4 → S5 (SMOOTH) | 3 | YES |
| S5 → S6 (SMOOTH) | 2-3 | BORDERLINE |
| S6 → S7 (SMOOTH) | 3 | YES |
| S7 → S8 (SMOOTH) | 3 | YES |
| S8 → Footer | 4 | YES |

**Average: 3.4 channels per boundary. 8/9 boundaries pass SC-09 (>=3 channels).**

Key observation: CD-006 achieves high channel counts because it uses DIFFERENT AXIS PATTERNS per section (Spiral, Z-Pattern, Bento, F-Pattern, Choreography). Each axis pattern change INHERENTLY shifts Typographic (different heading styles), Spatial (different layout topology), and Structural (different border patterns) — guaranteeing 3+ channel shifts at every major boundary. This is the LAYOUT DIVERSITY advantage.

---

## Flagship (07-intentionality.html) Channel Shift Count

The Flagship has 12 sections with 11 boundaries. All sections use F-Pattern layout (single-column flow). This fundamentally limits channel diversity.

### Boundary Analysis

**Header → S1:**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Dark → `#FEF5EB` (warm cream) |
| Typographic | YES | Header serif → body Inter with drop-cap |
| Spatial | YES | Header padding → `padding: 64px` |
| Structural | YES | Dark bg + 3px red → open section, no borders |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S1 → S2 (SMOOTH: 1px divider):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#FEF5EB` → `#F5EDE2` (warm tan) |
| Typographic | PARTIAL | Same body style → pullquote display serif (localized) |
| Spatial | YES | `padding: 64px` → `padding: 80px` with 80% width pullquote |
| Structural | YES | Open → pullquote with 4px primary border + outline offset |
| Behavioral | NO | |
| Material | NO | |
**Count: 3-4 channels**

**S2 → S3 (BRIDGE: 2px divider + prose):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#F5EDE2` (tan) → `#FBF3E8` (warm honey) — different warm |
| Typographic | YES | Pullquote serif → body text + callout labels |
| Spatial | YES | 80% centered pullquote → full-width section with table |
| Structural | YES | Pullquote borders → table borders + callout 4px border |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S3 → S4 (SMOOTH: 1px divider):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#FBF3E8` → `#F8F6F3` (cooling cream — Zone 1→transitional) |
| Typographic | PARTIAL | Body at 17px → 16px (transitional) |
| Spatial | YES | `padding: 48px` → `padding: 48px` (SAME — no change) |
| Structural | PARTIAL | Similar table structures |
| Behavioral | NO | |
| Material | NO | |
**Count: 2 channels** (WEAK — minimal real change)

**S4 → S5 (BRIDGE: 2px divider + prose) — ZONE CHANGE: Orient→Deepen:**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#F8F6F3` → `#FAF8F5` (near-white) + section border-left adds color |
| Typographic | YES | `16px/1.7` → `15px/1.55` (compression) + heading weight 400→600 |
| Spatial | YES | `padding: 48px` → `padding: 32px` (compression) + paragraph margin 16px→12px |
| Structural | YES | No border-left → `border-left: 4px solid var(--color-primary)` |
| Behavioral | YES | Table hover transitions activate |
| Material | YES | Featured table gets alternating row striping |
**Count: 6 channels** (STRONGEST BOUNDARY — zone change)

**S5 → S6 (SMOOTH: 1px divider):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#FAF8F5` → `#F5F0E8` |
| Typographic | YES | `15px/1.55` → `16px/1.7` (relaxation) |
| Spatial | YES | `padding: 32px` → `padding: 40px` |
| Structural | YES | Section border-left disappears |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S6 → S7 (SMOOTH + bridge prose):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#F5F0E8` → `#F8F6F3` |
| Typographic | YES | `16px/1.7` → `15px/1.55` (re-compression) + heading heavy |
| Spatial | YES | `padding: 40px` → `padding: 32px` + tension-pair grid (2-col) + 90% width |
| Structural | YES | Section border-left: `3px solid var(--color-text)` appears |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S7 → S8 (BRIDGE: 2px divider + prose):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#F8F6F3` → `#F2EFEA` (warm mid-gray) |
| Typographic | PARTIAL | Same dense zone typography continues |
| Spatial | YES | Tension pairs → table + sequence grid (2x2 dark blocks) |
| Structural | YES | Tension callout borders → table moderate border + 4 dark code blocks |
| Behavioral | NO | |
| Material | YES | Dark code blocks create embedded material contrast |
**Count: 4 channels**

**S8 → S9 (BREATHING: 4px divider + prose) — ZONE CHANGE: Deepen→Synthesize:**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#F2EFEA` → `#FEF7F0` (refined cream — warming) |
| Typographic | YES | `15px/1.55; weight: 600` → `16px/1.75; weight: 400` (relaxation) |
| Spatial | YES | `padding: 32px` → `padding: 40px` (expansion) + margin 12px→18px |
| Structural | YES | `border-left: 3px var(--color-text)` → `3px #5C4B3A` (warm brown) |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

**S9 → S10 (SMOOTH: 1px):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#FEF7F0` → `#FEF5EB` (echo S1 warm) |
| Typographic | PARTIAL | Same zone 3 typography + heading weight shift (400→500) |
| Spatial | PARTIAL | Same zone 3 padding + max-width 64ch→60ch |
| Structural | YES | Findings table (3px header) → Warning table (3px coral) + coral border-left |
| Behavioral | NO | |
| Material | NO | |
**Count: 2-3 channels** (same-zone shift, subtle)

**S10 → S11 (SMOOTH: 1px):**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | `#FEF5EB` → `#F8F2EA` |
| Typographic | PARTIAL | Same zone typography |
| Spatial | YES | `padding: 40px` → `padding: 48px` + hypothesis-grid (2-col) |
| Structural | YES | Coral warning table → 3x light tables (1px borders only) |
| Behavioral | NO | |
| Material | NO | |
**Count: 3 channels**

**S11 → S12:**
(Would need to read S12 but based on CSS: same-zone typography, padding return, structural bookend echo.)
**Estimated: 2-3 channels**

**S12 → Footer:**
| Channel | Shifts? | Evidence |
|---------|---------|---------|
| Chromatic | YES | Cream → Dark (#1A1A1A) |
| Typographic | YES | Body → mono/uppercase labels + serif italic closing |
| Spatial | YES | Section padding → footer padding |
| Structural | YES | Content → 3px red border-top |
| Behavioral | NO | |
| Material | NO | |
**Count: 4 channels**

### Flagship Summary

| Boundary | Channels Shifting | SC-09 Pass (>=3)? |
|----------|------------------|-------------------|
| Header → S1 | 4 | YES |
| S1 → S2 (SMOOTH) | 3-4 | YES |
| S2 → S3 (BRIDGE) | 4 | YES |
| S3 → S4 (SMOOTH) | 2 | NO |
| S4 → S5 (BRIDGE, zone change) | 6 | YES |
| S5 → S6 (SMOOTH) | 4 | YES |
| S6 → S7 (SMOOTH+prose) | 4 | YES |
| S7 → S8 (BRIDGE) | 4 | YES |
| S8 → S9 (BREATHING, zone change) | 4 | YES |
| S9 → S10 (SMOOTH) | 2-3 | BORDERLINE |
| S10 → S11 (SMOOTH) | 3 | YES |
| S11 → S12 (est.) | 2-3 | BORDERLINE |
| S12 → Footer | 4 | YES |

**Average: 3.4 channels per boundary. 9-10/13 boundaries pass SC-09.**

---

## Comparative Analysis: CD-006 vs Flagship

### Channel Deployment Width

| Channel | CD-006 Shifts (out of 9) | Flagship Shifts (out of 13) |
|---------|--------------------------|---------------------------|
| Chromatic | 9 (100%) | 13 (100%) |
| Typographic | 8 (89%) | 8-10 (62-77%) |
| Spatial | 9 (100%) | 12 (92%) |
| Structural | 9 (100%) | 12 (92%) |
| Behavioral | 0 (0%) | 1 (8%) |
| Material | 0 (0%) | 2 (15%) |

**Key finding:** Both pages rely on the same 4 primary channels (Chromatic, Typographic, Spatial, Structural). Behavioral and Material are essentially unused in both. The difference is not channel WIDTH but channel DEPTH — how much each channel shifts.

### Channel Depth (Magnitude of Shifts)

**Chromatic depth:**
- CD-006: Uses 3 standard zone tokens (`sparse`, `dense`, `breathing`). Backgrounds shift by ~10-20 RGB across zones. Limited but consistent.
- Flagship: Uses 12 UNIQUE per-section backgrounds (S1 through S12). More variety but each shift is only ~5-12 RGB points. The VARIETY is higher but the PERCEIVABILITY is lower.

**Typographic depth:**
- CD-006: Uses consistent type scale across all sections (no zone-based variation). Typographic shifts come from COMPONENT diversity (serif italic in essence callouts, mono in code blocks, display in headings) rather than body text variation.
- Flagship: Uses EXPLICIT zone-based typography (17px/15px/16px body, 30px/26px/28px headings, varying weight and letter-spacing). The typographic channel carries MORE of the semantic direction, but this was not fully perceptible due to CSS specificity issues.

**Spatial depth:**
- CD-006: Section-level padding varies with content density. Transitions have 3 explicit types (Smooth: 48px+1px, Bridge: 64px+breathing, Breathing: 80px+3px). Clean spatial vocabulary.
- Flagship: Inline per-section padding with !important overrides. More granular control but the divider+bridge+section stacking created void accumulation.

**Structural depth:**
- CD-006: MASSIVE structural diversity from axis pattern rotation. Z-grid, Bento 4-col, Choreo hub-spoke, Spiral strata — each with distinct border patterns. 11 distinct component types deployed across 8 sections.
- Flagship: 12 sections of single-column F-pattern. Structural variation comes entirely from TABLE TREATMENT progression and section border-left alternation. Less variety but more CONSISTENT progression.

### The Core Finding

**CD-006 achieves multi-coherence through LAYOUT DIVERSITY.** By rotating axis patterns (Spiral → Z → Bento → F → Z → Bento → Choreo → Spiral), it guarantees that Typographic, Spatial, and Structural channels all shift at every major boundary — because different layouts REQUIRE different typography, spacing, and borders.

**Flagship achieves multi-coherence through PROPERTY MODULATION.** By keeping a consistent layout (F-pattern throughout) and varying CSS properties per zone (font-size, padding, border-left, background), it creates a more subtle progression but requires MORE explicit control of each channel.

**The layout diversity approach is inherently more robust.** If you change layout topology, you get 3 free channel shifts. If you keep layout constant, you must explicitly manage every channel shift — and if any channel fails to shift perceptibly (as happened with Flagship's typography specificity issues), the multi-coherence breaks.

### Implication for the Recipe

The recipe should **prioritize layout diversity** (2-3 different axis patterns across the page) rather than relying solely on property modulation within a single layout. This does NOT mean every section needs a unique axis pattern — CD-006's 5-pattern rotation is ceiling-tier. But at MINIMUM, the page should use 2 distinct layout topologies:

1. **Primary flow** (F-pattern or Z-pattern) for most sections
2. **Grid/comparative layout** (Bento, 2-column, or hub-spoke) for at least 2-3 sections

This structural diversity GUARANTEES multi-channel shifting at the layout-change boundaries, and the builder only needs to manage Chromatic channel (background progression) and Behavioral/Material (enhancement) explicitly.

---

## Channel-to-Mechanism Routing Table

For the builder's reference — which mechanisms carry which channels:

| Mechanism | Ch1 Chrom | Ch2 Typo | Ch3 Spatial | Ch4 Struct | Ch5 Behav | Ch6 Material |
|-----------|:---------:|:--------:|:-----------:|:----------:|:---------:|:------------:|
| #1 Border-Weight | | | | PRIMARY | | |
| #2 Two-Zone DNA | | minor | minor | PRIMARY | | |
| #3 Solid Offset | | | | PRIMARY | | |
| #4 Spacing Compression | | | PRIMARY | | | |
| #5 Dense/Sparse Alt | | | PRIMARY | | | |
| #6 Width Variation | | | PRIMARY | | | |
| #7 Zone Backgrounds | PRIMARY | | | | | |
| #8 Scroll Witness | | | | minor | PRIMARY | |
| #9 Color Encoding | PRIMARY | | | minor | | |
| #10 Border-Left | PRIMARY | | | PRIMARY | | |
| #11 Type Scale | | PRIMARY | | | | |
| #12 Progressive Disclosure | | | PRIMARY | | | |
| #13 Dark Header | PRIMARY | minor | minor | PRIMARY | | |
| #14 Footer Mirror | PRIMARY | minor | minor | PRIMARY | | |
| #15 Bento Grid | | | PRIMARY | PRIMARY | | |
| #16 Drop Cap | | PRIMARY | | | | |
| #17 Code Block | PRIMARY | PRIMARY | | PRIMARY | | minor |
| #18 Data Table | | PRIMARY | | PRIMARY | | minor |

**Pattern:** Most mechanisms operate through 1-2 channels. Structural (Ch4) is the most-served channel (10 mechanisms). Behavioral (Ch5) is the least-served (1 mechanism). This means multi-coherence at a boundary requires deploying mechanisms from DIFFERENT channel families — not just deploying more mechanisms from the same family.

---

## Summary: What the Recipe Must Specify

1. **Channel awareness is mandatory.** The builder must know which channel each mechanism operates through. Deploying 5 Structural-channel mechanisms does not create multi-coherence.

2. **4 channels are the real vocabulary.** Chromatic + Typographic + Spatial + Structural carry all semantic direction. Behavioral and Material are enhancement-only.

3. **Multi-coherence requires 3 of these 4 at every zone boundary.** The recipe should specify: "At each BRIDGE or BREATHING transition, verify that Chromatic (background shifts), Typographic (body text parameters shift), Spatial (padding shifts), and Structural (border treatment shifts) are all changing. 3 of 4 minimum."

4. **Layout diversity is the easiest path to multi-coherence.** Changing axis pattern (e.g., F-pattern section → 2-column grid section) inherently shifts Typographic, Spatial, and Structural channels. The builder then only needs to manage Chromatic (background) explicitly.

5. **Perceptual thresholds per channel:**
   - Chromatic: >= 15 RGB points between adjacent zone backgrounds
   - Typographic: >= 1px font-size difference, >= 0.03em letter-spacing difference
   - Spatial: >= 24px padding difference between zone types
   - Structural: border presence/absence is always perceptible; border weight changes 1px→3px→4px are perceptible

6. **Channel shifts must be MEASURED, not assumed.** The Flagship CSS specified zone-based typography but specificity issues prevented the values from applying. The recipe must require computed-style verification at each zone boundary.

---

**END 19-CHANNELS-DEEP-DIVE.md**
