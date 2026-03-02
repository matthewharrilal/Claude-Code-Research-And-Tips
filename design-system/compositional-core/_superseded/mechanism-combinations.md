# Mechanism Combination Catalog

**Purpose:** Document proven mechanism combinations for Ceiling+ tier builders.

**Relation to mechanism-catalog.md:** The mechanism catalog documents 18 individual mechanisms (spatial primitives for encoding semantic dimensions). This document shows how MULTIPLE mechanisms can be COMBINED to encode the SAME semantic dimension through multi-channel coherence.

**When to use this:** Ceiling and Flagship tiers only. Middle tier builders should focus on individual mechanism deployment (see mechanism-catalog.md).

---

## What Are Mechanism Combinations?

**Definition:** Multiple mechanisms encoding the SAME semantic dimension. When the semantic value changes, MULTIPLE mechanisms shift TOGETHER = multi-channel coherence.

**Example (OD-004 geological confidence):**

```
Semantic: CONFIDENCE (established → probable → speculative → open)

Mechanism #1 (Border-Weight):  4px → 3px → 2px → 1px
Mechanism #4 (Spacing):        40px → 32px → 20px → 16px
Mechanism #7 (Backgrounds):    sparse → moderate → dense → breathing

All THREE vary together as confidence changes.
```

**Why combinations are powerful:** Encoding the same semantic through DIFFERENT perceptual channels (space + weight + color) creates reinforcement that a single mechanism cannot achieve. The reader perceives the semantic shift through MULTIPLE sensory pathways simultaneously.

**Key distinction:**
- **Independent deployment (Middle tier):** Each mechanism encodes a DIFFERENT semantic
- **Combined deployment (Ceiling tier):** Multiple mechanisms encode the SAME semantic

---

## 6 Proven Combination Families

Each family below has been validated across multiple case studies (OD-004, DD-006, CD-006) with CSS evidence.

### 1. Hierarchy Triad

**Mechanisms:**
- Border-Weight Gradient (#1) — Visual weight through thickness (4px/3px/2px/1px)
- Spacing Compression (#4) — Spatial density through padding (80px → 16px)
- Typographic Scale Jumping (#11) — Size hierarchy through type scale (~1.5x ratio)

**Shared Semantic:** Structural or epistemic importance/certainty/priority

**Where Proven:**
- OD-004 (confidence encoding): thick borders + sparse padding + large headings = high certainty
- DD-006 (fractal scales): border weights + padding compression + type scale all decrease together at deeper scales

**CSS Evidence (OD-004):**

```css
/* All three vary together for CONFIDENCE */
.stratum--established {
  border-left: 4px solid;      /* Thickest */
  padding: var(--space-10);    /* Sparsest (40px) */
  font-size: var(--type-section); /* Largest (1.625rem) */
}

.stratum--open {
  border-left: 1px solid;      /* Thinnest */
  padding: var(--space-4);     /* Densest (16px) */
  font-size: var(--type-body); /* Smallest (1rem) */
}
```

**Why They Combine Well:** All three encode "importance" through MAGNITUDE (bigger = more important). Perceptual alignment across channels — when importance increases, thickness increases, space increases, size increases.

**Minimum Tier:** Ceiling

---

### 2. Depth Triple

**Mechanisms:**
- Border-Weight Gradient (#1) — Visual weight (4px = surface, 1px = deep)
- Spacing Compression (#4) — Spatial compression (sparse surface, dense depth)
- Zone Background Differentiation (#7) — Color darkening/lightening (varies by metaphor)

**Shared Semantic:** Layering or stratification (surface vs deep)

**Where Proven:**
- OD-004 (geological depth): all three encode depth (topsoil → bedrock)
- DD-004 (atmospheric layers): base/interaction/syntax/meta encoded via all three

**CSS Evidence (OD-004):**

```css
/* SURFACE (topsoil — uncertain, exploratory) */
.stratum--topsoil {
  border-left: 1px solid var(--color-border);   /* Thinnest */
  padding: var(--space-4);                      /* Densest (16px) */
  background: var(--color-zone-breathing);      /* Darkest tan */
}

/* DEPTH (bedrock — certain, established) */
.stratum--bedrock {
  border-left: 4px solid var(--color-text);     /* Thickest */
  padding: var(--space-10);                     /* Sparsest (40px) */
  background: var(--color-zone-sparse);         /* Lightest cream */
}
```

**Why They Combine Well:** All three encode "deeper = more consolidated." In OD-004's geological metaphor, depth maps to perceptual primitives: weight (thicker borders), density (tighter spacing), lightness (consolidated bedrock = lighter cream vs unstable topsoil = darker tan).

**Minimum Tier:** Ceiling

---

### 3. Density Triple

**Mechanisms:**
- Dense/Sparse Alternation (#5) — Section-level rhythm (80px sparse, 32px dense)
- Spacing Compression (#4) — Padding gradient within sections
- Zone Background Differentiation (#7) — Chromatic reinforcement (sparse = light, dense = white or darker)

**Shared Semantic:** Content pacing (sparse/breathing vs dense/compact)

**Where Proven:**
- DD-006 (fractal rhythm): all three mechanisms create dense/sparse alternation at 4 scales
- DD-001 (breathing pattern): exhale (sparse padding + light background) vs inhale (dense padding + white background)

**CSS Evidence (DD-006):**

```css
/* SPARSE sections */
.section--sparse {
  padding: var(--space-20);              /* 80px — Mechanism #4 */
  margin-bottom: var(--space-chapter);   /* 92px — Mechanism #5 */
  background: var(--color-zone-sparse);  /* Lightest — Mechanism #7 */
}

/* DENSE sections */
.section--dense {
  padding: var(--space-6);               /* 24px — Mechanism #4 */
  margin-bottom: var(--space-between);   /* 48px — Mechanism #5 */
  background: #FFFFFF;                   /* White — Mechanism #7 */
}
```

**Why They Combine Well:** All three encode "breathing space" (sparse) vs "information density" (dense). Padding, margins, and backgrounds shift TOGETHER to create perceptual rhythm — the reader feels the expansion and contraction through multiple channels.

**Minimum Tier:** Ceiling

---

### 4. Zone Pair

**Mechanisms:**
- Zone Background Differentiation (#7) — Color progression (sparse → moderate → dense → breathing)
- Border-Left Semantic Signal (#10) — Color-coded borders (blue/green/coral/amber/purple)

**Shared Semantic:** Spatial sections or content categories

**Where Proven:**
- OD-004 (geological strata): background color + border color both shift by stratum
- DD-001 (breathing rhythm): background alternation + callout color accents

**CSS Evidence (DD-001):**

```css
/* Zone backgrounds alternate */
.section--exhale { background: var(--color-zone-sparse); }  /* Cream */
.section--inhale { background: #FFFFFF; }                   /* White */

/* Callout borders reinforce section type */
.callout--essence { border-left: 4px solid var(--accent-blue); }    /* Exhale (reflective) */
.callout--gotcha { border-left: 4px solid var(--accent-coral); }    /* Inhale (practical) */
```

**Why They Combine Well:** Both use COLOR to encode category. Background = broad zone (section-level categorization), border = focused element within zone (callout-level categorization). The two mechanisms operate at different scales but reinforce the same semantic.

**Minimum Tier:** Middle

---

### 5. Component Pair

**Mechanisms:**
- 2-Zone Component DNA (#2) — Structural split (label + body)
- Typographic Scale Jumping (#11) — Type differentiation (0.75rem label, 1rem body)

**Shared Semantic:** Internal component organization (label vs content zones)

**Where Proven:**
- ALL callouts across ALL case studies (DD-001 through CD-006)
- Core Abstractions in CD-006 (3-zone: label + principle + proof)

**CSS Evidence (Universal callout pattern):**

```css
/* 2-zone DNA — Mechanism #2 */
.callout__label {
  font-family: var(--font-body);
  font-size: var(--type-meta);           /* 0.75rem — Mechanism #11 */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-within);
  display: block;
}

.callout__body {
  font-family: var(--font-body);
  font-size: var(--type-body);           /* 1rem — Mechanism #11 */
  line-height: 1.7;
}
```

**Why They Combine Well:** Both differentiate meta-level (label) from content-level (body). Structure (2-zone split) + typography (size differentiation) reinforce the same semantic split — the reader perceives the label as distinct from the content through both spatial separation AND typographic contrast.

**Minimum Tier:** Middle

---

### 6. Emphasis Pair

**Mechanisms:**
- Border-Left Semantic Signal (#10) — Color-coded left border (4px solid accent color)
- Solid Offset (#3) — Shadow/offset for floating/elevation

**Shared Semantic:** Featured content or highlighted elements

**Where Proven:**
- OD-001 (featured insights): border-left + subtle shadow on key takeaways
- CD-006 (core abstractions): border-left accent + offset shadow on principle cards

**CSS Evidence (OD-001):**

```css
.insight--featured {
  border-left: 4px solid var(--accent-blue);
  box-shadow: 4px 4px 0 var(--color-shadow);
  padding: var(--space-6);
  background: var(--color-zone-sparse);
}
```

**Why They Combine Well:** Both use SPATIAL ANCHORING to signal "this is important." Border-left = visual weight on left edge, offset shadow = elevation from page. Together they create a "pinned + lifted" effect that draws the eye.

**Minimum Tier:** Middle

---

## Perceptual Alignment Principle

**Why do some mechanisms combine well and others conflict?**

Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels.

**Successful combinations (aligned channels):**

- **Hierarchy Triad:** All encode "importance" through MAGNITUDE
  - Border thickness = magnitude of weight
  - Spacing = magnitude of area
  - Type size = magnitude of scale
  - When importance increases → ALL three increase → perceptual reinforcement

- **Depth Triple:** All encode "consolidation" through weight + density + lightness
  - Thicker borders = more consolidated (heavier)
  - Tighter spacing = more consolidated (denser)
  - Lighter backgrounds = more consolidated (geological metaphor: bedrock lighter than topsoil)
  - When depth increases → ALL three shift together → perceptual coherence

- **Density Triple:** All encode "breathing" vs "packing"
  - Sparse margins = breathing (temporal rhythm)
  - Generous padding = breathing (spatial openness)
  - Light backgrounds = breathing (chromatic openness)
  - When density decreases (more breathing) → ALL three shift together → perceptual flow

**Failed combinations (contradictory channels):**

- Sparse padding (40px = "breathing") + dense dark background (#f0f0f0 → #d0d0d0 = "compact") = perceptual CONTRADICTION
  - Space says "relax," color says "compress" → reader confusion

- Thick border (4px = "important") + small type (0.875rem = "secondary") = perceptual CONTRADICTION
  - Weight says "prioritize," size says "deprioritize" → reader confusion

**The principle:** Channels must ALIGN (reinforce the same semantic) or CONTRADICT (encode different semantics that conflict). Combinations work when alignment exists.

---

## 3 Anti-Combination Conflict Types

These are mechanisms that should NOT be combined because they create perceptual conflicts.

### Conflict Type 1: Semantic Overload

**Problem:** Two mechanisms encoding DIFFERENT semantics on the SAME elements

**Example:**

```css
/* CONFLICT: Border-weight encodes TYPE, but also encodes PRIORITY */
.callout--warning {
  border-left: 4px solid var(--accent-coral);  /* Type = warning */
}

.callout--high-priority {
  border-left: 4px solid var(--color-text);    /* Priority = high */
}

/* What if it's a high-priority warning? */
.callout--warning.callout--high-priority {
  border-left: ???  /* Conflict: can't be 4px coral AND 4px black */
}
```

**Why It Fails:** Border-weight can encode ONE semantic dimension per element. Trying to encode both TYPE (warning/info/success) and PRIORITY (high/medium/low) simultaneously creates conflict — you can't be both 4px (high priority) and 4px coral (warning type).

**Resolution:** Use border-weight for ONE semantic, use DIFFERENT mechanism for the other:
- Border-weight = priority (4px/3px/2px/1px)
- Background color = type (coral/blue/green/amber)

---

### Conflict Type 2: Perceptual Contradiction

**Problem:** Two mechanisms encoding OPPOSITE values for the same semantic

**Example:**

```css
/* CONFLICT: Padding says "sparse," background says "dense" */
.section--confused {
  padding: var(--space-20);              /* Sparse (80px) */
  background: var(--color-zone-dense);   /* Dense (darker) */
}
```

**Why It Fails:** Generous padding (80px) signals "breathing space" (sparse), but dark background signals "compressed" (dense). Perceptual contradiction confuses readers — is this section sparse or dense?

**Resolution:** Align mechanisms to encode the SAME value:
- Sparse: generous padding (80px) + light background (cream #fef9f3)
- Dense: tight padding (24px) + dark background (tan #f0ebe3) or white

---

### Conflict Type 3: Redundant Encoding

**Problem:** Two mechanisms encoding the SAME semantic on the SAME elements with NO added value

**Example:**

```css
/* REDUNDANT: Both border-weight AND border-color encode priority */
.callout--high {
  border-left: 4px solid var(--color-primary);  /* Thick + red = high */
}

.callout--low {
  border-left: 1px solid var(--color-border);   /* Thin + gray = low */
}
```

**Why It's Redundant:** Border-weight ALONE encodes priority (4px = high, 1px = low). Border color ALONE could encode priority (red = high, gray = low). Using BOTH adds NO perceptual value — it's just louder, not clearer. The reader doesn't gain additional information from the color shift because the weight already communicated priority.

**Resolution:** Use ONE mechanism for priority, reserve the OTHER for a DIFFERENT semantic:
- Border-weight = priority (4px/3px/2px/1px)
- Border-color = type (blue/green/coral/amber)

Now the reader perceives TWO semantic dimensions (priority AND type) instead of ONE semantic encoded twice.

---

## Tier Guidance

**Middle Tier (Floor → Middle transition):**
- Use proven PAIRS only (2 mechanisms encoding same semantic)
- Recommended: Zone Pair, Component Pair, Emphasis Pair
- Mechanism count: 8-10 total (per-category minimums)
- Build time: 70-100 minutes

**Ceiling Tier (Middle → Ceiling transition):**
- Use AT LEAST 2 mechanism combinations
- AT LEAST ONE must be a TRIPLE (3 mechanisms)
- Recommended: Hierarchy Triad, Depth Triple, or Density Triple
- Mechanism count: 12-15 total (increased breadth + depth)
- Build time: 150-220 minutes

**Flagship Tier (Ceiling → Flagship transition):**
- Use AT LEAST 3 mechanism combinations across different patterns
- Example: Hierarchy Triad in Part 1 (Spiral), Density Triple in Part 2 (Bento), Zone Pair in Part 3 (Timeline)
- Mechanism count: 16-18 total (maximum fluency)
- Build time: 240-400 minutes

**Key insight:** Middle → Ceiling is NOT about adding MORE mechanisms randomly. It's about adding DEPTH through combinations (encoding the same semantic through multiple channels). Ceiling richness comes from multi-channel coherence, not mechanism count.

---

## Anti-Copying Protocol (Adjustment #2 — BINARY CHECK)

**CRITICAL:** The combination families above are VOCABULARY (proven reinforcement patterns), not TEMPLATES (copy-paste recipes).

**You MUST customize combinations for YOUR content.** Using OD-004's exact values (4px/3px/2px/1px + 40px/32px/20px/16px) without YOUR semantic justification = template copying.

**Binary verification protocol:**

1. **Identify your semantic:** What dimension does your combination encode?
   - Example: "My Hierarchy Triad encodes MATURITY (experimental → validated → production)"

2. **Check case studies _INDEX.md for matches:** Does ANY case study use this semantic?
   - Read: `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/_INDEX.md`
   - Search for your semantic (maturity, confidence, depth, density, etc.)

3. **If match found → choose DIFFERENT semantic or DIFFERENT combination:**
   - Match found: "OD-004 uses Hierarchy Triad for CONFIDENCE"
   - Action: Choose different semantic (MATURITY instead of CONFIDENCE) OR different combination (Depth Triple instead of Hierarchy Triad)

4. **Document verification:**
   ```
   My [Combination Name] encodes [semantic].
   Verified: [semantic] is NOT used in [case study X, Y, Z].
   ```
   - Example: "My Hierarchy Triad encodes MATURITY. Verified: MATURITY is NOT used in OD-004, DD-006, or CD-006."

**Why this matters:** The richness research found that vocabulary rigidity (limited mechanism fluency) outpaces constraint rigidity 4:1. If you copy OD-004's CONFIDENCE → MATURITY semantic without customizing values, you're template-copying, not composing.

**The test:** Can you explain WHY your combination values (border weights, padding values, background colors) specifically encode YOUR semantic in YOUR content?
- YES → legitimate customization
- NO → template copying (copying values without semantic justification)

---

## Summary

**Mechanism combinations = multi-channel coherence.** When multiple mechanisms encode the same semantic through different perceptual channels (space + weight + color), the reader perceives the semantic shift more powerfully than through a single mechanism.

**Proven combination families:**
1. Hierarchy Triad (Border-Weight + Spacing + Typography) — importance/certainty — Ceiling
2. Depth Triple (Border-Weight + Spacing + Backgrounds) — layering/depth — Ceiling
3. Density Triple (Dense/Sparse + Spacing + Backgrounds) — rhythm/pacing — Ceiling
4. Zone Pair (Backgrounds + Border-Color) — category/section — Middle
5. Component Pair (2-Zone DNA + Typography) — structure (label/body) — Middle
6. Emphasis Pair (Border-Left + Solid Offset) — featured content — Middle

**Perceptual alignment principle:** Mechanisms combine well when they encode the SAME semantic through DIFFERENT perceptual channels. They fail when channels contradict or overload.

**Anti-copying protocol:** Customize combinations for YOUR content. Binary verification: (1) identify semantic, (2) check case studies, (3) if match found → choose different, (4) document verification.

**Next steps for Ceiling builders:**
- Read mechanism-catalog.md (individual mechanisms)
- Choose 2+ combinations from this catalog
- Customize values for YOUR content (not copy-paste from case studies)
- Verify: when semantic changes, do multiple mechanisms shift together?
