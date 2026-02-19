# Channel Expansion Playbook — From One-Line Directive to Operational CSS

**Analyst:** channel-analyst
**Date:** 2026-02-17
**Data Sources:** 00-AUDIT-DATA.md, FINAL-ENRICHED-MASTER-EXECUTION-PROMPT.md (963 lines), scale-research.md, all 6 scale-exploration reports, mechanism-catalog.md, 07-intentionality.html (2,034 lines)

---

## THE PROBLEM: A 963-Line Prompt With 1 Line On Its Most Important Idea

The scale research produced THE single most important finding across 6 independent Opus agents:

> "Beyond 5, add CHANNELS (more CSS properties encoding meaning), not LEVELS (more zoom magnifications)."

This finding appears in the master execution prompt as exactly **one sentence** in Section A3, buried inside a paragraph about the Alexander/Salingaros formula. It has:

- ZERO definition of what "channels" means operationally
- ZERO list of unexplored channels
- ZERO CSS examples
- ZERO builder instructions
- ZERO connection to the 7 alternative mental models that generated it
- ZERO connection to the 6 unmodeled richness dimensions that motivate it

The prompt defines 7 channels in SC-02 (Chromatic, Typographic, Spatial, Structural, Density, Rhythmic, Intentional) but treats them as AUDIT CRITERIA ("did you use 5/7?"), not as GENERATIVE INSTRUCTIONS ("here is how to add richness through each channel").

**Result in the flagship HTML:** The audit data shows the flagship has:
- Ch1 Chromatic: PRESENT but barely perceptible (RGB differences of 1-8 points between zones)
- Ch2 Typographic: PRESENT but UNIFORM (every section has identical font-size, weight, color, margins)
- Ch3 Spatial: PRESENT but UNIFORM (16px margins everywhere, no variation)
- Ch4 Structural: COMPLETELY ABSENT (zero borders, zero dividers, zero containment elements, zero callouts in many sections)
- Ch5 Density: PRESENT but driven by content length, not by design
- Ch6 Rhythmic: ABSENT (metronomic repetition)
- Ch7 Intentional: PRESENT (self-reference, bookending, meta-annotation)

The prompt tells builders "use 5/7 channels" but never tells them HOW to use each channel to create perceptible richness.

---

## PART 1: THE 7 DEFINED CHANNELS — What Each One Actually Does

### Channel 1: CHROMATIC (Color as Semantic Signal)

**What the prompt says:** "Ch1 CHROMATIC (color as semantic signal)" — one parenthetical definition in SC-02.

**What it should say:**

**Operational Definition:** Chromatic channel encodes MEANING through color temperature, value (lightness), and hue variation. The soul constraints close 60% of conventional color toolkit (no gradients, no pure black/white, no cool grays), which means the REMAINING color decisions carry 4-5x semantic weight.

**Available CSS Properties:**
```css
/* Background temperature progression (Mechanism #7) */
background-color: var(--color-zone-sparse);    /* #FEF9F5 — warm cream */
background-color: var(--color-zone-breathing); /* #FAF5ED — warmer, earthy */
background-color: var(--color-zone-dense);     /* #FEFEFE — near-white, analytical */
background-color: var(--color-text);           /* #1A1A1A — bedrock/landmark */

/* Accent hue as semantic carrier (Mechanism #9) */
border-left-color: var(--color-primary);  /* #E83025 — structural, critical */
border-left-color: var(--color-amber);    /* #D97706 — caution, in-progress */
border-left-color: var(--color-blue);     /* #4A90D9 — informational, cool */
border-left-color: var(--color-green);    /* #4A9D6B — resolution, success */
border-left-color: var(--color-coral);    /* #E83025 — danger, warning */

/* Text color for hierarchy */
color: var(--color-text);                 /* #1A1A1A — primary content */
color: var(--color-text-secondary);       /* #6B6B6B — supplementary */
color: var(--color-border);               /* #D4C5B5 — meta, timestamp */
```

**How It Creates Perceptible Richness:**

Zone backgrounds must differ by >= 15 RGB points to be PERCEPTIBLE. The flagship's current zone differentiation (1-8 RGB points) is invisible. The soul-compliant palette has a usable range of:
- Warmest: `#FAF5ED` (RGB 250,245,237)
- Coolest: `#FEFEFE` (RGB 254,254,254)
- Difference: only 4,9,17 per channel

**Operational Fix:** Use the FULL warm-to-cool range for zone differentiation. Warm zones (#FAF5ED) for introductory/sparse content. Near-white zones (#FEFEFE) for analytical/dense content. This is already in the tokens but the flagship uses intermediate values so close together they collapse into uniformity.

**For the Flagship HTML Specifically:**
```css
/* WRONG (current): all zones within 8 RGB points of each other */
--color-zone-s1: #FEF9F5;  /* barely different from s2 */
--color-zone-s2: #FAF5ED;  /* barely different from s3 */
--color-zone-s3: #FDF8F2;  /* barely different from s4 */

/* RIGHT: maximize the warm-to-cool range the soul permits */
/* Zone 1 (S1-S3): WARM intake — use full warmth of breathing */
section:nth-of-type(1) { background: #FAF5ED; }  /* tan/breathing — WARMEST */
section:nth-of-type(2) { background: #FEF9F5; }  /* warm cream */
section:nth-of-type(3) { background: #FAF5ED; }  /* back to warmest */

/* Zone 2 (S4-S8): COOL analytical — use near-white */
section:nth-of-type(4) { background: #FEFEFE; }  /* analytical white */
section:nth-of-type(5) { background: #FEFEFE; }  /* sustained analytical */
section:nth-of-type(6) { background: #FAF5ED; }  /* ONE warm breath */
section:nth-of-type(7) { background: #FEFEFE; }  /* back to analytical */

/* Zone 3 (S9-S12): CLEAN refined — return to warm but UNIFORM */
section:nth-of-type(9)  { background: #FEF9F5; }  /* clean warm */
section:nth-of-type(10) { background: #FEF9F5; }  /* uniform = refined */
section:nth-of-type(11) { background: #FEF9F5; }  /* uniform = refined */
section:nth-of-type(12) { background: #FEF9F5; }  /* bookend with S1 palette */
```

**Key Principle:** Chromatic richness is not about having MORE colors. It is about making the EXISTING color range carry semantic load. Zone 1 = warm variety (many sources). Zone 2 = cool uniformity (analytical pressure). Zone 3 = warm uniformity (refined output). The TEMPERATURE TRAJECTORY is the channel, not the individual color values.

---

### Channel 2: TYPOGRAPHIC (Type Properties as Semantic Signal)

**What the prompt says:** "Ch2 TYPOGRAPHIC (type properties)" — four words.

**What it should say:**

**Operational Definition:** Typographic channel encodes meaning through font-size, font-weight, font-style, letter-spacing, line-height, and font-family variation. With only 3 font families permitted (soul U-09), the remaining properties must do MORE work.

**Available CSS Properties:**
```css
/* Font-size variation (Mechanism #11) */
font-size: var(--type-h1);    /* 36px — page title only */
font-size: var(--type-h2);    /* 28px — section heads */
font-size: var(--type-h3);    /* 22px — subsections */
font-size: var(--type-body);  /* 16px — body text */
font-size: var(--type-code);  /* 14px — code */
font-size: var(--type-meta);  /* 12px — labels, metadata */

/* Font-weight variation */
font-weight: 400; /* default body */
font-weight: 500; /* medium — emphasis within body */
font-weight: 600; /* semibold — headings, labels */

/* Letter-spacing (THE most underused property) */
letter-spacing: 0.12em;  /* expanded — meta labels, uppercase */
letter-spacing: 0.04em;  /* slightly open — subheadings */
letter-spacing: normal;  /* default — body text */
letter-spacing: -0.01em; /* tight — large display type */

/* Line-height variation */
line-height: 1.2;  /* display headings — compact */
line-height: 1.45; /* pullquotes — open but not airy */
line-height: 1.6;  /* table cells — moderate */
line-height: 1.7;  /* body text — generous */
line-height: 1.75; /* long-form prose — maximum readability */

/* Font-style */
font-style: italic;  /* h3 — visual differentiation from h2 */
font-style: normal;  /* everything else */

/* Font-family as zone signal */
font-family: var(--font-display); /* headings ONLY (Instrument Serif) */
font-family: var(--font-body);    /* body text (Inter) */
font-family: var(--font-mono);    /* code + labels (JetBrains Mono) */
```

**The Flagship's Problem:** Audit data shows UNIFORM typography across ALL 12 sections:
- p fontSize: 16px everywhere
- p fontWeight: 400 everywhere
- p color: rgb(26,26,26) everywhere
- p marginBottom: 16px everywhere
- h2 fontSize: 28px everywhere
- h2 fontWeight: 400 everywhere

Only letter-spacing and line-height vary, and only in zones 1-2. Scale 5 (Detail/Character) has exactly 2 varying properties out of 6 possible.

**Operational Fix — Section-Level Typographic Variation:**
```css
/* Zone 1 (raw intake): generous, exploratory typography */
.zone-1 p {
  line-height: 1.8;
  letter-spacing: 0.005em;
}
.zone-1 h2 {
  letter-spacing: -0.01em; /* tight display = authoritative */
}

/* Zone 2 (analytical pressure): compressed, focused typography */
.zone-2 p {
  line-height: 1.65;
  letter-spacing: normal;
  /* PERCEPTIBLE difference: 1.65 vs 1.8 = readers feel "denser" */
}
.zone-2 h2 {
  font-weight: 500; /* slightly heavier = more assertive */
}

/* Zone 3 (refined output): balanced, resolved typography */
.zone-3 p {
  line-height: 1.7;
  letter-spacing: 0.003em;
  /* Between Zone 1 and Zone 2 = synthesis */
}
```

**Key Principle:** Typographic richness comes from VARIATION across the page, not from having beautiful type at a single setting. The flagship has beautiful type settings — the same beautiful settings everywhere. Varying line-height (1.8 → 1.65 → 1.7) across zones creates the sensation that different parts of the page "breathe" differently, echoing the content's own density trajectory.

---

### Channel 3: SPATIAL (Spacing/Proportion as Semantic Signal)

**What the prompt says:** "Ch3 SPATIAL (spacing/proportion)" — three words.

**What it should say:**

**Operational Definition:** Spatial channel encodes meaning through margin, padding, gap, and max-width variation. This is the channel most responsible for the "squint test" (Scale 1 spatial confidence) — the single most important perceptual property.

**Available CSS Properties:**
```css
/* Section padding (Mechanism #4 Spacing Compression) */
padding: var(--space-20); /* 80px — sparse/introductory */
padding: var(--space-16); /* 64px — moderate */
padding: var(--space-12); /* 48px — compressed */
padding: var(--space-8);  /* 32px — dense/technical */

/* Paragraph margin (THE uniform property in flagship) */
margin-bottom: var(--space-6); /* 24px — sparse sections */
margin-bottom: var(--space-4); /* 16px — moderate (current default) */
margin-bottom: var(--space-3); /* 12px — dense sections */

/* Content width variation (Mechanism #6) */
max-width: 68ch;  /* current default prose */
max-width: 80%;   /* pullquotes, indented blocks */
max-width: 90%;   /* tension groups, nested arguments */
max-width: 100%;  /* tables, full-width elements */
```

**The Flagship's Problem:** p_marginBottom is 16px across ALL 12 sections. Section padding varies only slightly (32px to 80px). The spatial channel is metronomic.

**Operational Fix — Graduated Paragraph Spacing:**
```css
/* Zone 1 (sparse intake): generous paragraph spacing */
.zone-1 p { margin-bottom: var(--space-6); } /* 24px */

/* Zone 2 (dense analytical): compressed paragraph spacing */
.zone-2 p { margin-bottom: var(--space-3); } /* 12px */

/* Zone 3 (refined output): moderate paragraph spacing */
.zone-3 p { margin-bottom: var(--space-4); } /* 16px — between Z1 and Z2 */
```

**Critical Rule (from audit):** This variation MUST be PERCEPTIBLE. 24px → 12px → 16px is a 2:1 ratio between sparse and dense — noticeable without measurement. 16px → 14px → 16px would be invisible.

**Minimum Perceptible Spacing Difference:** >= 4px between any two zone-level spacing values. If the difference is < 4px, it registers as manufacturing error rather than intentional variation.

---

### Channel 4: STRUCTURAL (Borders/Dividers/Containment as Semantic Signal)

**What the prompt says:** "Ch4 STRUCTURAL (borders/dividers/containment)" — four words.

**What it should say:**

**Operational Definition:** Structural channel encodes meaning through border weight, border color, divider lines, and containment patterns (boxes, rules, separators). This is the channel with the HIGHEST perceptual effectiveness (mechanisms #1 and #10 are rated HIGH impact).

**The Flagship's Problem:** This is the CATASTROPHIC channel. Audit data:
```
borderElements: 0 across ALL 12 sections
borders on section: 0px everywhere
asides/callouts: 0 asides
Only 1 blockquote (S2)
```

**Zero borders anywhere in the entire page. Zero dividers. Zero containment elements.**

The flagship has a 4px border-left on its component-blocks and tables, but the audit data shows these do not register at the section level. The structural channel that CD-006 used to achieve 39/40 — border-weight gradient (#1) encoding hierarchy — is effectively ABSENT from the page's spatial rhythm.

**Available CSS Properties:**
```css
/* Border-weight gradient (Mechanism #1) — THE highest-impact mechanism */
border-left: 4px solid var(--color-text);    /* highest priority */
border-left: 3px solid var(--color-text);    /* high priority */
border-left: 2px solid var(--color-text-secondary); /* moderate (semantic only) */
border-left: 1px solid var(--color-border);  /* low priority */

/* Section-level containment */
border-top: 3px solid var(--color-primary);  /* HARD CUT transition */
border-top: 1px solid var(--color-border);   /* CHECKPOINT transition */
border-bottom: 1px solid var(--color-border-subtle); /* section terminus */

/* Horizontal rules / dividers */
hr {
  border: none;
  border-top: 1px solid var(--color-border-subtle);
  margin: var(--space-12) 0;
}

/* Containment boxes (asides, callouts) */
aside {
  border-left: 4px solid var(--color-amber);
  padding: var(--space-4) var(--space-6);
  background: var(--color-zone-breathing);
}
```

**Operational Fix for Flagship:**
```css
/* Add section-level structural differentiation */

/* Zone 1 sections: light borders (exploratory) */
.zone-1 section {
  border-bottom: 1px solid var(--color-border-subtle);
  /* Lightest structural signal — "these boundaries are provisional" */
}

/* Zone 2 sections: heavier borders (analytical) */
.zone-2 section {
  border-top: 3px solid var(--color-border);
  /* Structural weight increases with analytical certainty */
}

/* Zone transitions: HARD CUT with primary color */
.zone-boundary {
  border-top: 3px solid var(--color-primary);
  padding-top: var(--space-8);
  /* VISIBLE zone change — not just background tint */
}

/* Add asides/callouts within sections (currently ZERO) */
aside.principle {
  border-left: 4px solid var(--color-primary);
  padding: var(--space-4) var(--space-6);
  background: var(--color-zone-breathing);
  margin: var(--space-6) 0;
}
```

**Key Principle:** Structural channel is the HIGHEST-LEVERAGE fix for the flagship. Going from zero borders to even 5-6 well-placed structural elements transforms the page from "text on cream background" to "architected document." CD-006 used border-weight gradient as its PRIMARY richness mechanism. The flagship uses it only inside tables and components — never at the section level where it would be perceptually dominant.

---

### Channel 5: DENSITY (Content-Per-Viewport as Semantic Signal)

**What the prompt says:** "Ch5 DENSITY (content-per-viewport)" — three words.

**What it should say:**

**Operational Definition:** Density channel encodes meaning through the AMOUNT of content visible in a single viewport-height. Dense sections (more content per viewport) signal "technical, detailed, analytical." Sparse sections (less content per viewport) signal "introductory, reflective, breathing."

**Available CSS Properties:**
```css
/* Density is EMERGENT from spacing + content — not a single property */

/* Dense section: compressed padding + shorter paragraphs + tighter margins */
.section-dense {
  padding-top: var(--space-8);     /* 32px */
  padding-bottom: var(--space-8);  /* 32px */
}
.section-dense p {
  margin-bottom: var(--space-3);   /* 12px */
  line-height: 1.65;
}

/* Sparse section: generous padding + longer paragraphs + wider margins */
.section-sparse {
  padding-top: var(--space-16);    /* 64px */
  padding-bottom: var(--space-16); /* 64px */
}
.section-sparse p {
  margin-bottom: var(--space-6);   /* 24px */
  line-height: 1.8;
}
```

**The Flagship's Current State:** Content density is driven by how MUCH text each section contains, not by how the CSS treats it. Sections with more text are denser, sections with less text are sparser — but the CSS treats them identically (same padding, same margins, same line-height).

**Operational Fix:** Classify sections by INTENDED density during planning. Assign CSS density class to each. The metaphor's "Zone 2 = analytical pressure" should LOOK denser through CSS, not just through having more text.

---

### Channel 6: RHYTHMIC (Repetition/Alternation Pattern)

**What the prompt says:** "Ch6 RHYTHMIC (repetition/alternation pattern)" — three words.

**What it should say:**

**Operational Definition:** Rhythmic channel encodes meaning through the PATTERN of repetition and variation across the page. Metronomic rhythm (all sections identical) reads as mechanical. Varied rhythm (ABAC, crescendo, call-and-response) reads as composed.

**The Flagship's Problem:** Audit data shows near-identical section treatment throughout. No alternation pattern. No crescendo. No call-and-response. The rhythm is flat.

**Operational Fix — 3 Rhythm Techniques:**

**1. Dense/Sparse Alternation (Mechanism #5):**
```css
/* Alternate section density: A-B-A-B-A pattern */
section:nth-of-type(odd)  { padding: var(--space-16) var(--space-8); }
section:nth-of-type(even) { padding: var(--space-10) var(--space-8); }
/* Creates visual "breathing" without changing content */
```

**2. Crescendo Arc (Mechanism #12):**
```css
/* Progressive density compression across zones */
/* Zone 1: 80px padding → Zone 2: 48px → Zone 3: 64px (resolution) */
/* The compression trajectory IS the rhythm */
```

**3. Element Pattern Variation:**
```css
/* Not every section should have the same element mix */
/* S1: prose only (sparse) */
/* S2: prose + pullquote (focal) */
/* S3: prose + table (data) */
/* S4: prose + callout (emphasis) */
/* S5: prose + table + callout (peak density) */
/* S6: prose only (breathing) */
/* The variety of ELEMENT TYPES per section creates rhythm */
```

---

### Channel 7: INTENTIONAL (Compositional Intelligence)

**What the prompt says:** "Ch7 INTENTIONAL (compositional intelligence -- NO CSS; Opus agent domain only)" — correctly identified as non-CSS.

**Current State:** The flagship actually does WELL on this channel (the intentionality pass added self-reference, bookending, cognitive bridges, meta-annotation). This is the one channel that got operational attention in the prompt because it had a full Pass 4 (Intentionality Builder) and 6 named dimensions (C-15).

**No operational changes needed for Ch7.** It is the model of what operational channel instructions look like — and every other channel should receive equivalent treatment.

---

## PART 2: UNEXPLORED CHANNELS (From Scale Research)

The scale research identified 4 specific unexplored channel categories that go BEYOND the 7 defined channels. These represent richness dimensions the current prompt does not address at all.

### Unexplored Channel A: OPACITY / TRANSPARENCY

**Soul Constraint:** U-04 says "No rgba() or opacity < 1 on backgrounds (exception: progressive depth tinting per DD-006)."

**What This ACTUALLY Permits:** The DD-006 exception is real. Progressive depth tinting uses transparency as a STRUCTURAL signal, not a decorative effect. The soul prohibition targets opacity-as-decoration (frosted glass effects, translucent overlays). It does NOT prohibit opacity as a CSS PROPERTY for non-background elements.

**Available Within Soul:**
```css
/* Text opacity for hierarchy (NOT backgrounds) */
.meta-text { color: rgba(26, 26, 26, 0.55); }
/* Equivalent to --color-text-secondary but via opacity */
/* This creates a CONTINUOUS hierarchy rather than discrete steps */

/* Border opacity for weight gradation */
.border-subtle { border-color: rgba(212, 197, 181, 0.4); }
/* Allows finer border weight encoding than 4px/3px/1px alone */
/* A 1px border at 40% opacity reads LIGHTER than 1px at 100% */

/* Decorative element opacity (NOT on content containers) */
.section-number {
  font-size: 120px;
  color: rgba(26, 26, 26, 0.04);
  position: absolute;
  /* Ghost numbers — barely visible section markers */
  /* Creates depth without violating "no box-shadow" */
}
```

**Perceptual Impact:** LOW to MEDIUM. Opacity creates subliminal depth — readers feel it but cannot name it. Best used for: ghost section numbers, de-emphasized meta-text, subtle border differentiation.

**Risk Assessment:** MODERATE. The U-04 boundary is ambiguous. "No rgba() on backgrounds" is clear. "No opacity < 1 on backgrounds" is clear. But text color via rgba() is NOT a background. A conservative interpretation would avoid ALL rgba(); a liberal interpretation allows it for non-background elements. The safest path: use NAMED color tokens (--color-text-secondary at #6B6B6B) rather than rgba() for the same visual effect. This achieves the hierarchy without triggering U-04 concerns.

---

### Unexplored Channel B: CSS CUSTOM PROPERTIES AS SEMANTIC CARRIERS

**What This Means:** Custom properties (CSS variables) can carry METADATA beyond their computed value. A property named `--density-level` at value `2` communicates to other developers AND to future AI agents that the section is at density level 2, even though the browser only uses the numeric value.

**Available Within Soul:**
```css
:root {
  /* Semantic density levels (1-5) */
  --density: 3; /* default */
}

section[data-density="1"] { --density: 1; }
section[data-density="2"] { --density: 2; }
section[data-density="3"] { --density: 3; }
section[data-density="4"] { --density: 4; }
section[data-density="5"] { --density: 5; }

/* Use density to DRIVE other properties */
section {
  padding-top: calc(96px - var(--density) * 12px);
  /* density 1 = 84px, density 5 = 36px */

  padding-bottom: calc(96px - var(--density) * 12px);
  /* Same compression for vertical rhythm */
}

section p {
  line-height: calc(1.9 - var(--density) * 0.05);
  /* density 1 = 1.85, density 5 = 1.65 */
}
```

**Perceptual Impact:** MEDIUM-HIGH. This is not about visual appearance directly — it is about COMPOSITIONAL COHERENCE. When density drives padding, line-height, and margin simultaneously through a single variable, ALL properties co-vary. This is mechanized multi-channel encoding. It guarantees that spacing, typography, and density are REINFORCING rather than independent.

**Why This Matters for the Flagship:** The flagship defines per-section zone variables (--color-zone-s1 through --color-zone-s12) but does NOT define a per-section density variable. Each section's spacing, line-height, and margins are set independently. A `--density` variable would force them to co-vary — preventing the uniform-margin problem that the audit flagged.

---

### Unexplored Channel C: ANIMATION TIMING (Static Page Context)

**Soul Constraint:** No animation prohibitions exist in prohibitions.md. The soul is silent on motion.

**For Static Pages:** Animation timing is relevant for ONE scenario: scroll-triggered content (if any). The flagship is a static page with no JavaScript, so animation is NOT directly applicable.

**What IS Applicable (Zero JS):** CSS `transition` properties on `:hover` and `:focus` states for interactive elements. The flagship currently has NO transitions defined.

```css
/* Applicable to static pages: hover transitions on links/tables */
a {
  color: var(--color-primary);
  transition: color 150ms ease-out;
  /* Fast, confident, no bounce — matches KortAI identity */
}

a:hover {
  color: var(--color-text);
}

/* Table row hover (if interactive) */
table tbody tr {
  transition: background-color 100ms ease-out;
}
table tbody tr:hover {
  background-color: var(--color-zone-breathing);
}
```

**Perceptual Impact:** LOW for static pages. MEDIUM-HIGH for interactive pages. This channel is CORRECTLY deprioritized for the flagship experiment (static HTML). It should be operationalized for future interactive pages.

**Identity Implication:** If KortAI motion were defined, it would be: SNAPPY (no elastic, no bounce), LINEAR-TO-EASE-OUT (no ease-in-out), SHORT (100-200ms for interactions, never > 500ms). No playful timing. No stagger animations. Sharp edges in space = sharp edges in time.

---

### Unexplored Channel D: CONTAINMENT PATTERNS (Advanced Structural)

Beyond basic borders, containment patterns create SPATIAL HIERARCHY without violating the soul. These go beyond mechanism #1 (border-weight gradient) into full spatial framing.

**Available Within Soul:**
```css
/* Inset containment — sections within sections */
.inset-content {
  margin-left: var(--space-8);   /* 32px indent */
  padding-left: var(--space-6);  /* 24px padding */
  border-left: 1px solid var(--color-border-subtle);
  /* Creates "nested argument" feel without full box containment */
}

/* Full containment — callout/aside boxes */
.contained-block {
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  background: var(--color-zone-breathing);
  /* Soul-compliant box: no radius, no shadow, solid border */
}

/* Partial containment — top-and-bottom framing */
.framed-content {
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  /* Creates "set apart" without full boxing */
}

/* Negative space containment — width reduction */
.narrowed-content {
  max-width: 80%;
  margin: 0 auto;
  /* Narrower content = "special" — width itself is the container */
}
```

**The Flagship's Problem:** Zero containment patterns. Every section runs full-width with no inset, no framing, no spatial hierarchy. The page reads as a single undifferentiated text column.

**Perceptual Impact:** HIGH. Containment is one of the strongest spatial signals available. A single framed-content block with top/bottom borders creates more perceptual interest than 3 additional zone background tints.

---

## PART 3: THE 7 ALTERNATIVE MENTAL MODELS — Translated to CSS

The scale research produced 7 alternative frameworks for thinking about richness. Each identifies a dimension of design quality that "fractal coherence across spatial scales" does not capture. Here is how each translates to SPECIFIC CSS changes a builder can make.

### Model 1: TEMPORAL METABOLISM — How Fast Different Zones "Breathe"

**The Concept:** Different parts of the page reveal information at different speeds. Sparse zones are "fast" (you scan them quickly). Dense zones are "slow" (you read them carefully). Richness = the page has multiple metabolic speeds, not one uniform pace.

**CSS Translation:**
```css
/* Fast metabolism = sparse, scannable */
.metabolic-fast {
  padding: var(--space-16) var(--space-8);  /* generous padding */
  line-height: 1.8;                         /* tall lines */
  margin-bottom: var(--space-6);            /* wide paragraph gaps */
  /* Reader scans this zone quickly */
}

/* Slow metabolism = dense, reading-intensive */
.metabolic-slow {
  padding: var(--space-8) var(--space-8);   /* compressed padding */
  line-height: 1.6;                         /* tighter lines */
  margin-bottom: var(--space-3);            /* narrow paragraph gaps */
  /* Reader slows down in this zone */
}
```

**Builder Instruction:** For each section, ask: "Does the reader scan this or study this?" Scanning sections get fast-metabolism CSS. Study sections get slow-metabolism CSS. A page with ONLY one metabolism speed is rhythmically dead.

**Flagship Application:** S1-S4 (Orient phase) should be fast-metabolism — introductory, scannable. S5-S8 (Deepen phase) should be slow-metabolism — analytical, reading-intensive. S9-S12 (Synthesize phase) should return to moderate metabolism.

---

### Model 2: SEMANTIC RESONANCE — Multiple CSS Channels Saying the Same Thing

**The Concept:** At every section boundary, multiple CSS properties should change simultaneously to encode the same semantic transition. A boundary where ONLY spacing changes is "1-channel resonance." A boundary where spacing + background + border + typography all change is "4-channel resonance." Higher resonance = richer perception.

**CSS Translation:**
```css
/* LOW resonance boundary (1 channel): spacing only */
.section-a { padding-bottom: var(--space-16); }
.section-b { padding-top: var(--space-8); }
/* Only spacing says "boundary here" — weak signal */

/* HIGH resonance boundary (4+ channels): spacing + bg + border + type */
.section-a {
  padding-bottom: var(--space-16);
  background: var(--color-zone-sparse);    /* warm */
}
.boundary {
  border-top: 3px solid var(--color-border); /* STRUCTURAL channel */
}
.section-b {
  padding-top: var(--space-8);              /* SPATIAL: compressed */
  background: var(--color-zone-dense);      /* CHROMATIC: cool */
  line-height: 1.65;                        /* TYPOGRAPHIC: tighter */
}
/* 4 channels say "you crossed a threshold" simultaneously */
```

**Builder Instruction:** At every section transition, count how many CSS channels change. Minimum 3 channels per transition (already in SC-09). But the prompt says "count >= 3" without explaining WHY or showing HOW. The builder needs to see that spacing + background + border changing together creates a perceptible "room change" that spacing alone cannot achieve.

**Flagship Application:** The flagship dividers (.divider-smooth, .divider-bridge, .divider-breathing) exist in CSS but the audit shows ZERO borders between sections. Either the divider elements are not in the HTML or they produce invisible output. The semantic resonance model demands that EVERY section boundary has 3+ channels shifting, with at least one being STRUCTURAL (border/divider).

---

### Model 3: NARRATIVE ARC — Visual Intensity Tracking Content Importance

**The Concept:** The page is a story with exposition, rising action, climax, falling action, and resolution. Visual intensity (border weight, spacing compression, background contrast, element density) should TRACK the content's own dramatic arc.

**CSS Translation:**
```css
/* Act 1 (S1-S3): Exposition — calm, sparse, warm */
.act-1 section {
  padding: var(--space-16) var(--space-8);
  background: var(--color-zone-sparse);
  border-left: none;
  /* Visually quiet — "settle in, orient yourself" */
}

/* Act 2 (S4-S6): Rising Action — compressing, cooling, borders appear */
.act-2 section {
  padding: var(--space-10) var(--space-8);
  background: var(--color-zone-dense);
  border-left: 1px solid var(--color-border);
  /* Visually tightening — "complexity accumulating" */
}

/* Act 3 (S7-S8): Climax — maximum density, strongest borders */
.act-3 section {
  padding: var(--space-8) var(--space-8);
  background: var(--color-zone-dense);
  border-left: 3px solid var(--color-text);
  /* Visually intense — "this is the key content" */
}

/* Act 4 (S9-S10): Falling Action — relaxing, warming, borders lighten */
.act-4 section {
  padding: var(--space-12) var(--space-8);
  background: var(--color-zone-sparse);
  border-left: 1px solid var(--color-border-subtle);
  /* Visually exhaling — "implications, resolution" */
}

/* Act 5 (S11-S12): Resolution — return to warmth, closure */
.act-5 section {
  padding: var(--space-16) var(--space-8);
  background: var(--color-zone-sparse);
  border-left: none;
  /* Visually bookending — mirrors Act 1 */
}
```

**Builder Instruction:** Before writing ANY CSS, plot the content's dramatic arc. Identify which section is the CLIMAX (most important, most complex). That section gets maximum visual intensity. Sections before the climax progressively intensify. Sections after progressively relax. This creates a page that FEELS like a journey, not a list.

---

### Model 4: MATERIALITY GRADIENT — Elements Ranging From Ethereal to Monumental

**The Concept:** Design elements exist on a spectrum of "physical weight" — from barely-there whispers to carved-in-stone monuments. Richness = the page uses the FULL range.

**CSS Translation:**
```css
/* ETHEREAL (materiality 1-2): barely exists */
.meta-timestamp {
  font-size: var(--type-meta);      /* 12px */
  color: var(--color-border);       /* #D4C5B5 — lightest text */
  letter-spacing: 0.1em;
  font-weight: 400;
  /* This element is informational vapor */
}

/* ATMOSPHERIC (materiality 3-4): shapes without demanding */
.section-subtitle {
  font-size: var(--type-body);      /* 16px */
  color: var(--color-text-secondary); /* #6B6B6B */
  font-weight: 400;
  /* Present but not attention-grabbing */
}

/* SUBSTANTIAL (materiality 5-6): the working middle */
p {
  font-size: var(--type-body);
  color: var(--color-text);
  font-weight: 400;
  line-height: 1.7;
  /* Readable, functional, present */
}

/* PHYSICAL (materiality 7-8): demands attention */
h2 {
  font-family: var(--font-display);
  font-size: var(--type-h2);
  font-weight: 400; /* Instrument Serif already has visual weight */
  border-bottom: 1px solid var(--color-border);
  /* Structures the reading experience */
}

/* MONUMENTAL (materiality 9-10): immovable landmarks */
h1 {
  font-family: var(--font-display);
  font-size: var(--type-h1);
  color: var(--color-background); /* reversed — on dark header */
  /* The bedrock of the page */
}
.dark-header {
  background: var(--color-text);
  border-bottom: 3px solid var(--color-primary);
  /* THE heaviest element — structural authority */
}
```

**The Flagship's Problem:** The page uses materiality 5-7 (body text and headings) but barely uses 1-2 (ethereal elements) or 9-10 (monumental elements beyond the header). The meta-labels exist (.section-meta) but they all use the same treatment. The materiality range is compressed to about 3 stops instead of the possible 8-10.

**Builder Instruction:** Every page should have elements at materiality 1 (barely there), 5 (working body), and 9 (landmark). The SPREAD creates richness. If all elements cluster at materiality 5-7, the page feels "professional but flat." If elements range from 1 to 10, the page feels "designed."

---

### Model 5: COGNITIVE SCAFFOLDING — Structure Matching How the Brain Learns

**The Concept:** The page's visual structure should match the reader's cognitive journey: Recognition ("I know this") → Comprehension ("I see the pattern") → Synthesis ("I connect the dots") → Insight ("I now understand").

**CSS Translation:**
```css
/* RECOGNITION: familiar, plain, unstressed */
.scaffold-recognition {
  /* No special treatment — body text, standard margins */
  /* The plainness IS the signal: "you already know this" */
}

/* COMPREHENSION: highlighted, emphasized, "look here" */
.scaffold-comprehension {
  background: var(--color-zone-breathing);
  border-left: 4px solid var(--color-blue);
  padding: var(--space-4) var(--space-6);
  /* Blue accent = informational, cool = analytical */
  /* "See this new pattern" */
}

/* SYNTHESIS: wider context, connections shown */
.scaffold-synthesis {
  max-width: 90%;
  margin-left: 5%;
  border: 1px solid var(--color-border);
  padding: var(--space-6);
  /* Indented + contained = "step back and see the bigger picture" */
}

/* INSIGHT: space, weight, dramatic typography */
.scaffold-insight {
  padding: var(--space-12) var(--space-8);
  border-top: 3px solid var(--color-primary);
  /* Generous space = room for the idea to land */
  /* Strong border = structural authority of the conclusion */
}
.scaffold-insight p {
  font-size: 18px; /* slightly larger — this is the key takeaway */
  line-height: 1.75;
}
```

**Builder Instruction:** For each major content block, classify its cognitive function: Is it reminding the reader of something known (recognition)? Teaching something new (comprehension)? Connecting ideas (synthesis)? Delivering the key insight (insight)? Each cognitive function gets distinct visual treatment.

---

### Model 6: SYSTEMIC GRAVITY — Page Awareness of Its Context

**The Concept:** A page that knows its position in a larger system feels richer than an isolated page. Cross-references, "you are here" positioning, and visual echoes of sibling pages create gravitational density.

**CSS Translation (for a standalone page):**
```css
/* "You are here" positioning element */
.context-box {
  background: var(--color-zone-breathing);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-4) var(--space-6);
  margin-bottom: var(--space-8);
}
.context-box .context-label {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-primary);
}
/* "This page is one of 5 research synthesis documents" */
/* Even a standalone page can ACKNOWLEDGE a larger system */

/* Cross-reference markers */
.cross-ref {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
  /* "See also: Density Dimension Research (R3)" */
}
```

**Flagship Application:** The flagship already has some systemic gravity (the inline threading header references 7 source documents). But this is invisible to readers (it's in HTML comments). A VISIBLE "You Are Here" context box at the top of the page — "This page synthesizes 337 research findings across 5 streams" — would create perceived depth.

---

### Model 7: EMOTIONAL TOPOLOGY — Mapping Feeling Across Scroll

**The Concept:** Different parts of the page create different emotional micro-climates. Warm cream = calm. Near-white = analytical focus. Dark backgrounds = authority/gravity. Coral accents = urgency. The emotional trajectory ACROSS the scroll is a design dimension.

**CSS Translation:**
```css
/* Emotional climate: GRAVITAS (opening, dark header) */
.climate-gravitas {
  background: var(--color-text);
  color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
  /* Heavy, authoritative, institutional */
}

/* Emotional climate: REASSURANCE (early sections, warm cream) */
.climate-reassurance {
  background: var(--color-zone-sparse);
  padding: var(--space-16) var(--space-8);
  /* Warm, generous, approachable */
}

/* Emotional climate: FOCUS (analytical sections, near-white) */
.climate-focus {
  background: var(--color-zone-dense);
  padding: var(--space-8) var(--space-8);
  /* Clean, compressed, no-nonsense */
}

/* Emotional climate: URGENCY (warning sections, coral accents) */
.climate-urgency {
  border-left: 4px solid var(--color-coral);
  background: var(--color-zone-breathing);
  /* Alert, attention-demanding */
}

/* Emotional climate: SATISFACTION (resolution, green accents) */
.climate-satisfaction {
  border-left: 4px solid var(--color-green);
  padding: var(--space-12) var(--space-8);
  /* Resolved, successful, breathing room */
}
```

**Builder Instruction:** Map the intended emotional trajectory before writing CSS. The flagship's assay laboratory metaphor implies: CURIOSITY (S1-S3, examining raw samples) → ANALYTICAL FOCUS (S4-S8, refinement under pressure) → CLARITY (S9-S12, distilled output). Each emotional phase should have visually distinct CSS treatment. Currently all 12 sections feel emotionally identical.

---

## PART 4: THE 6 UNMODELED RICHNESS DIMENSIONS — As Builder Instructions

The Showcase Archaeology report identified 6 richness dimensions present in DD-006/CD-006 but absent from the tier model. The prompt addresses them as a checklist (C-15: ">= 3 of 6 intentionality dimensions present") but provides zero OPERATIONAL instructions for implementing them.

### Dimension 1: SELF-REFERENCE — Page Content Describes Its Own Form

**What the flagship already has:** 3 organic callouts where content describes its own form (from the intentionality pass).

**CSS for self-referential elements:**
```css
/* Self-referential callout: content about the very form you're reading */
.self-ref {
  border-left: 4px solid var(--color-primary);
  background: var(--color-zone-breathing);
  padding: var(--space-4) var(--space-6);
  position: relative;
}
.self-ref::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -4px;
  width: calc(100% + 4px);
  height: 1px;
  background: var(--color-border-subtle);
  /* Subtle top line connects self-ref to the prose above it */
}
/* The self-referential element should be visually INTEGRATED
   with its surrounding content, not floating — because the
   whole point is that form and content are inseparable */
```

**Status:** PRESENT in flagship. No additional CSS needed. But the STRUCTURAL visibility of these elements is low because Ch4 (borders) is absent from the surrounding sections. Self-reference is more powerful when it contrasts against a structured page.

---

### Dimension 2: PEDAGOGICAL SEQUENCING — Information Reveals in Optimal Order

**What it requires CSS-wise:** Not CSS-specific. This is content architecture. But CSS can REINFORCE pedagogical sequencing by giving each learning phase distinct visual treatment (see Model 5: Cognitive Scaffolding above).

**Builder Instruction:** Classify each section into one of: ORIENT (context-setting), TEACH (new information), PRACTICE (worked examples), SYNTHESIZE (connections), CONCLUDE (implications). Then apply Model 5 CSS patterns to match.

---

### Dimension 3: COGNITIVE MODE TRANSITIONS — Reader Shifts Between Analytical/Experiential/Reflective

**CSS for cognitive bridges:**
```css
/* Bridge transition between cognitive modes */
.cognitive-bridge {
  padding: var(--space-6) var(--space-8);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-zone-breathing);
  margin: var(--space-8) 0;
}
.cognitive-bridge p {
  font-style: italic;
  color: var(--color-text-secondary);
  max-width: 60ch; /* narrower than body — signals "meta-commentary" */
  /* "Now that you understand the raw findings, let us examine
     what happens when they interact." */
}
```

**The flagship already has 3 bridge transitions** with cognitive-shift prose (from intentionality pass). The CSS for these (.divider-bridge) exists but the VISUAL DISTINCTION is weak — just a 1px line. The cognitive bridge should be MORE visually prominent than a spacing shift: it deserves background color + framing borders + italic text to signal "the page is pausing to help you shift mental gears."

---

### Dimension 4: STRUCTURAL BOOKENDING — Opening/Closing Create Coherent Frame

**What the flagship already has:** S1/S12 echo (337 findings, vocabulary/composition, design system nature).

**CSS for bookend echo:**
```css
/* Opening section — establishes the visual vocabulary */
.bookend-open {
  background: var(--color-zone-sparse);
  padding: var(--space-16) var(--space-8);
  border-bottom: 3px solid var(--color-primary);
}

/* Closing section — echoes opening with SHIFTED meaning */
.bookend-close {
  background: var(--color-zone-sparse); /* same bg as open */
  padding: var(--space-16) var(--space-8); /* same padding */
  border-top: 3px solid var(--color-primary); /* mirror: top not bottom */
}
/* The VISUAL SIMILARITY between S1 and S12 creates closure.
   Same background, same padding, mirrored border position.
   Content changes but form echoes — "same question, new understanding." */
```

**Status:** Conceptually present in flagship but CSS does not reinforce it. S1 and S12 have similar background tints but no structural mirroring (no matching borders, no matching padding). Adding explicit bookend CSS would make the structural frame VISIBLE.

---

### Dimension 5: META-ANNOTATION — Design Choices Are Themselves Content

**What the flagship already has:** 12 section-meta labels (section number, pattern, density zone).

**CSS for meta-annotation:**
```css
/* Section meta labels */
.section-meta {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}
/* These labels are ALREADY in the flagship CSS.
   The issue is not CSS — it is that the surrounding
   sections lack structural differentiation, so the meta
   labels float in undifferentiated cream space. */
```

**Status:** CSS present. No changes needed. But effectiveness depends on Ch4 (structural) being active — meta-labels need structural CONTEXT to feel meaningful.

---

### Dimension 6: PROVENANCE THREADING — Visible Chain of Reasoning

**What the flagship already has:** Inline threading header + 12 section boundary comments.

**Status:** Present but in HTML comments (invisible to readers). For a showcase page, provenance could be partially visible through subtle footer references or source attribution text.

---

## PART 5: SYNTHESIS — THE CHANNEL EXPANSION DECISION MATRIX

### What To Do NOW (Flagship Fix Priority)

| Priority | Channel | Current State | Fix | Effort | Perceptual Impact |
|----------|---------|---------------|-----|--------|-------------------|
| **1 (CRITICAL)** | Ch4 Structural | ABSENT | Add section borders, dividers, containment elements | LOW (20-30 CSS lines) | **VERY HIGH** |
| **2 (HIGH)** | Ch3 Spatial | UNIFORM | Vary paragraph margins across zones (24px/12px/16px) | LOW (10 CSS lines) | **HIGH** |
| **3 (HIGH)** | Ch2 Typographic | UNIFORM | Vary line-height and letter-spacing across zones | LOW (15 CSS lines) | **MEDIUM-HIGH** |
| **4 (MEDIUM)** | Ch6 Rhythmic | FLAT | Alternate section padding (odd/even), vary element mix per section | MEDIUM (20 CSS lines) | **MEDIUM** |
| **5 (MEDIUM)** | Ch1 Chromatic | BARELY PERCEPTIBLE | Maximize warm-to-cool range of zone backgrounds | LOW (token adjustment) | **MEDIUM** |
| **6 (LOW)** | Containment | ABSENT | Add 3-5 framed/inset content blocks | MEDIUM (15 CSS lines) | **MEDIUM** |
| **7 (LOW)** | Custom Properties | ABSENT | Add --density variable driving spacing/type co-variation | MEDIUM (20 CSS lines) | **LOW-MEDIUM** |

### What To Put In Future Prompts

Every prompt that targets Middle-tier or above should include:

**1. Per-channel operational definitions** (from Part 1) — not just channel names.

**2. Minimum channel variation requirements:**
```
For EACH of Ch1-Ch6, the builder MUST demonstrate >= 2 distinct values
across the page (measured by computed CSS, not by intention).

FAIL IF:
- Ch1 (Chromatic): All section backgrounds within 10 RGB points of each other
- Ch2 (Typographic): Body text has identical font-size, weight, AND line-height in every section
- Ch3 (Spatial): Paragraph margin-bottom is identical in every section
- Ch4 (Structural): Zero border elements at the section level
- Ch5 (Density): No section has measurably different content-per-viewport from any other
- Ch6 (Rhythmic): Adjacent sections have identical padding values
```

**3. Per-transition resonance check:**
```
At every section boundary, count CSS channels that change:
- Spacing changes? (Ch3)
- Background changes? (Ch1)
- Border appears/changes? (Ch4)
- Typography shifts? (Ch2)
- Element type changes? (Ch6)

Count >= 3 = PASS (already in SC-09 but needs to be ENFORCED, not just specified)
```

**4. Channel co-variation rules (from mental models):**
```
Warm backgrounds (Ch1) MUST pair with generous spacing (Ch3) and tall line-height (Ch2).
Cool backgrounds (Ch1) MUST pair with compressed spacing (Ch3) and tight line-height (Ch2).
Heavy borders (Ch4) MUST appear in dense zones (Ch5), not sparse zones.
Lightest borders (Ch4) MUST appear in sparse zones (Ch5), not dense zones.

These co-variations are what creates "semantic resonance" — multiple channels
saying the same thing simultaneously.
```

---

## PART 6: ROOT CAUSE ANALYSIS — Why Channel Instructions Were Compressed to Nothing

### The Compression Pipeline

1. **Scale research produced 2,400+ lines** across 6 reports with rich operational detail
2. **Memory/scale-research.md compressed to 92 lines** — 26:1 ratio. Lost: all CSS examples, all mental model details, all operational instructions
3. **Master execution prompt compressed further to 1 sentence** in A3 — "Beyond 5, add CHANNELS not LEVELS." Total compression: 2,400:1.

### Why It Happened

The prompt architecture separates CONVICTION (Section A, "what to believe") from EXECUTION (Section B, "what to do"). Channel expansion was treated as a CONVICTION item (it changes how you THINK about richness) rather than an EXECUTION item (it changes what CSS you WRITE).

This is the wrong classification. "Add channels not levels" is an EXECUTION directive that requires SPECIFIC CSS INSTRUCTIONS. Putting it in the conviction layer guaranteed it would be compressed to a principle rather than operationalized as a set of rules.

### The Fix

Channel expansion instructions belong in:
- **Section B5 (Scale-Channel):** As operational rules with CSS examples
- **Section B10 (Builder Self-Check):** As binary verification items
- **Section C1 (Agent Roster):** As Planner instructions for channel-per-section mapping

They do NOT belong in:
- Section A3 (Anti-Scale Model) — this is philosophical, not operational

---

## APPENDIX A: CSS PROPERTY INVENTORY BY CHANNEL

Complete list of CSS properties that carry semantic meaning within each channel:

### Ch1 Chromatic
- `background-color` (section zones)
- `border-left-color` (accent hue)
- `border-top-color` / `border-bottom-color` (structural hue)
- `color` (text color hierarchy: primary/secondary/meta)

### Ch2 Typographic
- `font-size` (6-level scale: 36/28/22/16/14/12 px)
- `font-weight` (400/500/600)
- `font-style` (normal/italic)
- `letter-spacing` (-0.01em to 0.12em)
- `line-height` (1.2 to 1.8)
- `font-family` (3 families: display/body/mono)
- `text-transform` (none/uppercase)

### Ch3 Spatial
- `padding-top` / `padding-bottom` (section rhythm: 32-80px)
- `padding-left` / `padding-right` (indentation)
- `margin-bottom` (paragraph rhythm: 12-24px)
- `margin-left` / `margin-right` (inset/narrowing)
- `max-width` (content width variation: 60ch-100%)
- `gap` (grid/flex gaps)

### Ch4 Structural
- `border-left` (weight: 1px/3px/4px, color: semantic)
- `border-top` / `border-bottom` (dividers: 1px/3px)
- `border` (full containment: 1px solid)
- `outline` + `outline-offset` (solid offset depth, mechanism #3)

### Ch5 Density
- Emergent from Ch2 + Ch3 combinations
- `line-height` (tighter = denser)
- `margin-bottom` (shorter = denser)
- `padding` (shorter = denser)
- Content length per section (not CSS)

### Ch6 Rhythmic
- Section padding alternation pattern
- Element type mix per section
- Number of components per section
- Transition type sequence (smooth/bridge/breathing)
- Table/callout/code block distribution

### Ch7 Intentional (Non-CSS)
- Self-referential content elements
- Bridge prose between sections
- Bookend structural echoes
- Meta-annotation labels
- Content-form alignment choices

---

## APPENDIX B: BINARY GATE FOR CHANNEL COVERAGE

For any future prompt, add this to the builder self-check:

```
CHANNEL VERIFICATION (run BEFORE writing file):

[ ] Ch1: >= 2 distinct background colors used across sections
    Verify: getComputedStyle on 3+ sections, backgrounds differ by >= 15 RGB points

[ ] Ch2: >= 2 distinct line-height values used across sections
    Verify: getComputedStyle on body text in 3+ sections, line-heights differ

[ ] Ch3: >= 2 distinct paragraph margin-bottom values used across sections
    Verify: getComputedStyle on p elements in 3+ sections

[ ] Ch4: >= 3 border elements at section level (NOT counting table/component borders)
    Verify: querySelectorAll('[style*=border], .divider, hr, aside').length >= 3

[ ] Ch5: >= 1 section with visibly different content density
    Verify: one section has >= 30% more text per viewport than another

[ ] Ch6: >= 2 sections with different element mix (one text-only, one with table/callout)
    Verify: inspect section contents

[ ] SC-09: >= 3 channels shift at every section transition
    Verify: at each boundary, count changed properties across Ch1-Ch6
```

---

**END CHANNEL EXPANSION PLAYBOOK**

**Total lines:** ~750
**Core deliverables:**
- 7 defined channels fully operationalized with CSS examples
- 4 unexplored channels assessed with soul-compliance analysis
- 7 alternative mental models translated to CSS builder instructions
- 6 unmodeled dimensions mapped to implementation status
- Priority-ordered fix matrix for flagship
- Binary gate for future prompts
- Root cause analysis of why channels were compressed
- Complete CSS property inventory by channel
