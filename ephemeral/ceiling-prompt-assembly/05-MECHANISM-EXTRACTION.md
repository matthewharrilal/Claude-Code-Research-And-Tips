# Mechanism Effectiveness Extraction — Ceiling Prompt Assembly

**Date:** 2026-02-16
**Agent:** mechanism-extractor
**Mission:** Extract ALL mechanism effectiveness, application modes, zone mappings, blind spots, expectation gaps, and pre-ceiling readiness from 6 source files

**Sources Read (COMPLETE):**
1. TAKEAWAY-MECHANISM-EFFECTIVENESS.md (1,917 lines)
2. mechanism-catalog.md (1,092 lines — enriched with impact profiles)
3. TAKEAWAY-ENRICHMENT-GAPS.md (883 lines)
4. TAKEAWAY-BLIND-SPOTS.md (447 lines)
5. TAKEAWAY-EXPECTATIONS-VS-REALITY.md (338 lines)
6. TAKEAWAY-PRE-CEILING-CHECKLIST.md (790 lines)

**Total source material:** 5,467 lines analyzed

---

## 1. MECHANISM IMPACT PROFILES (All 18 Mechanisms)

### HIGH Impact Mechanisms (Immediately Visible)

#### #1 Border-Weight Gradient [HIERARCHY]
- **Perceptual Effectiveness:** HIGH
- **Visual Salience:** Borders immediately visible at 1440px, visible at squint test (20px blur)
- **Semantic Load:** MEDIUM (requires comparison to decode gradient)
- **Coverage:** Component-scale (individual elements)
- **Middle-tier validation:** 4px→3px→1px security layer gradient = THE design highlight. Perceptual auditor noted "red accent line is most designed element."

#### #3 Solid Offset Depth [DEPTH/EMPHASIS]
- **Perceptual Effectiveness:** HIGH
- **Visual Salience:** Creates depth through shadow-like offset, strong focal point generator
- **Semantic Load:** LOW (immediately understood as featured/emphasized)
- **Coverage:** Element-scale (featured diagrams, callouts)
- **When this matters:** Use for FOCAL hierarchy (what reader notices first)

#### #10 Border-Left Semantic Signal [COMPONENT]
- **Perceptual Effectiveness:** HIGH
- **Visual Salience:** Immediately visible accent pattern, strong categorical differentiation
- **Semantic Load:** LOW (universal callout marker across all explorations)
- **Coverage:** Component-scale (callouts, cards, emphasis blocks)
- **Catalog note:** "4px left border NEVER 2px, NEVER 3px for callouts"

#### #13 Dark Header + 3px Primary Border [STRUCTURE/NAVIGATION]
- **Perceptual Effectiveness:** HIGH
- **Visual Salience:** Dramatic contrast landmark, first thing readers see
- **Semantic Load:** MEDIUM (establishes page identity, editorial authority)
- **Coverage:** Page-scale (full-bleed structural landmark)
- **Middle-tier validation:** Dark header created editorial authority vs Variant B's lightweight header

#### #17 Code Block (Dark Background) [COMPONENT]
- **Perceptual Effectiveness:** HIGH
- **Visual Salience:** Visually distinct functional zone, natural focal point in technical content
- **Semantic Load:** LOW (immediately recognized as code by dark background + mono font)
- **Coverage:** Component-scale (code examples)
- **Middle-tier validation:** 8 code blocks created visual anchors. Perceptual audit: "code blocks are visual waypoints for scanning."

---

### MEDIUM Impact Mechanisms (Cumulative Visibility)

#### #2 2-Zone Component DNA [COMPONENT]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Creates internal component structure, visible when components are numerous
- **Semantic Load:** MEDIUM (label/body split requires parsing)
- **Coverage:** Component-scale (callouts, cards, all 2-part structures)
- **Effect is cumulative:** Single callout = subtle. 6+ callouts = clear pattern.

#### #5 Dense/Sparse Alternation [SPATIAL]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Creates rhythm through density changes, effect is cumulative across sections
- **Semantic Load:** LOW (subconscious breathing rhythm)
- **Coverage:** Page-scale (section-to-section flow)
- **Middle-tier validation:** F-PATTERN used dense→sparse→moderate→dense progression

#### #7 Zone Background Differentiation [DEPTH/EMPHASIS]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Subtle warmth/coolness shifts, builds atmosphere not drama
- **Semantic Load:** LOW (background changes are subconscious)
- **Coverage:** Section-scale (major content zones)
- **Catalog note:** "Creates spatial atmosphere through subtle color temperature shifts"

#### #9 Confidence/Priority Encoding via Color [COMPONENT]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Semantic differentiation through accent color, context-dependent visibility
- **Semantic Load:** HIGH (requires learned color-to-meaning mapping)
- **Coverage:** Component-scale (callout categories)
- **6-color system:** Primary red, blue info, green success, coral warning, purple note, amber caution

#### #12 Progressive Disclosure [STRUCTURE/NAVIGATION]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Functional interaction pattern, visual impact depends on trigger design
- **Semantic Load:** MEDIUM (requires understanding expansion metaphor)
- **Coverage:** Section-scale (phased content revelation)
- **Catalog note:** Works for tutorials, narratives, confidence flows, complexity gradients

#### #14 Footer Mirror [STRUCTURE/NAVIGATION]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Structural bookend, impact is narrative (closure) not visual drama
- **Semantic Load:** LOW (mirrors header = intuitive)
- **Coverage:** Page-scale (structural landmark)
- **Middle-tier validation:** MISSING FOOTER = WOULD-NOT-SHIP. Created "page just stops" effect.

#### #15 Bento Grid [SPATIAL]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Layout pattern creating contained zones, visibility depends on content density contrast
- **Semantic Load:** LOW (grid structure is immediately understood)
- **Coverage:** Section-scale (multi-item layouts)
- **Catalog note:** Works for task docs, component galleries, floor plans, reference indexes

#### #16 Drop Cap [DEPTH/EMPHASIS]
- **Perceptual Effectiveness:** MEDIUM
- **Visual Salience:** Decorative opening signal, high impact at start, diminishes after first use
- **Semantic Load:** LOW (editorial convention)
- **Coverage:** Component-scale (paragraph openings)
- **Catalog note:** "First letter HUGE (serif, 3x size)" — editorial/narrative contexts only

---

### LOW Impact Mechanisms (Invisible to Untrained Eye)

#### #4 Spacing Compression [HIERARCHY]
- **Perceptual Effectiveness:** LOW
- **Visual Salience:** Invisible to untrained eye, creates sense of "tightness" without visible cause
- **Semantic Load:** HIGH (requires understanding density-confidence inverse relationship)
- **Coverage:** Section-scale (padding progression)
- **Catalog note:** "Operates below conscious perception — readers FEEL compression without seeing it"

#### #6 Width Variation [SPATIAL]
- **Perceptual Effectiveness:** LOW
- **Visual Salience:** Subtle horizontal rhythm, operates below conscious perception
- **Semantic Load:** LOW (subconscious visual lanes)
- **Coverage:** Component-scale (narrow/wide alternation)
- **Catalog note:** "Fresh extraction noted 'narrow questions created visual lanes, full-width answers felt like pools'"

#### #8 Scroll Witness / Sticky TOC [STRUCTURE/NAVIGATION]
- **Perceptual Effectiveness:** LOW
- **Visual Salience:** Functional, not visual — progress indicator serves navigation not aesthetics
- **Semantic Load:** LOW (position tracking is intuitive)
- **Coverage:** Page-scale (multi-section navigation)
- **Catalog note:** Requires JavaScript intersection observer (not CSS alone)

#### #11 Typographic Scale Jumping [HIERARCHY]
- **Perceptual Effectiveness:** LOW
- **Visual Salience:** Operates through hierarchy, not drama — readers USE headings, don't admire them
- **Semantic Load:** LOW (scale jumps signal hierarchy intuitively)
- **Coverage:** Page-scale (heading-to-heading relationships)
- **Catalog note:** "~1.5x ratio between levels, discrete scale never arbitrary values"

#### #18 Data Table [STRUCTURE/NAVIGATION]
- **Perceptual Effectiveness:** LOW
- **Visual Salience:** Functional clarity pattern, visual impact is informational not compositional
- **Semantic Load:** LOW (table structure is universal)
- **Coverage:** Component-scale (tabular data)
- **Catalog note:** "Mono headers + 3px/1px border distinction, left-aligned, no center alignment"

---

## 2. APPLICATION MODES (PROGRESSIVE vs DISCRETE)

### Progressive Mode (Continuous Gradient Encoding)

**When to use:** Content has NATURAL stratification — confidence levels, security criticality, geological depth, architectural load-bearing, narrative tension.

**Characteristics:**
- 4px→3px→2px→1px deployed as CONTINUOUS GRADIENT across 4-5 elements
- Each element represents different LEVEL in same dimension
- Ratios encode RELATIVE importance within shared semantic domain

**Example 1: Security Layers (Middle-tier, PROGRESSIVE mode)**
```css
.layer--authentication { border-left: 4px solid var(--color-primary); }
.layer--authorization  { border-left: 3px solid var(--color-primary); }
.layer--validation     { border-left: 3px solid var(--color-primary); }
.layer--rate-limit     { border-left: 1px solid var(--color-border); }
```
- **WHY:** Security layers have criticality hierarchy (auth most critical, rate-limit least)
- **ENCODING:** 4px→3px→3px→1px = criticality gradient
- **RESULT:** Perceptual auditor rated this "design highlight" — strongest compositional moment

**Example 2: Geological Confidence (OD-004, PROGRESSIVE mode)**
```css
.stratum--bedrock     { border-left: 4px; } /* Established knowledge */
.stratum--sediment    { border-left: 3px; } /* Probable */
.stratum--topsoil     { border-left: 2px; } /* Speculative */
.stratum--surface     { border-left: 1px; } /* Open questions */
```
- **WHY:** Consolidation under pressure = confidence certainty
- **ENCODING:** 4px→3px→2px→1px = confidence gradient
- **RESULT:** Multi-channel coherence (border + spacing + background ALL encode depth)

---

### Discrete Mode (Categorical Differentiation)

**When to use:** Content has DISTINCT TYPES with clear boundaries — callouts vs headers vs separators, critical vs normal vs background.

**Characteristics:**
- 4px, 3px, 1px deployed as SEPARATE CATEGORIES with no gradient relationship
- Each weight signals DIFFERENT semantic category
- Weights are not ordered on same dimension

**Example 1: Structural Hierarchy (Middle-tier, DISCRETE mode)**
```css
.callout--featured { border-left: 4px; } /* Category: Emphasis */
.section-border    { border-top: 3px; }  /* Category: Structural framing */
.data-separator    { border-bottom: 1px; } /* Category: Data division */
```
- **WHY:** Three TYPES, not levels — featured content, structural frames, data separators
- **ENCODING:** 4px/3px/1px = three categories
- **RESULT:** Each weight has DIFFERENT purpose (not ordered progression)

**Example 2: Component vs Chrome (CD-006, DISCRETE mode)**
```css
header { border-bottom: 3px; } /* Structural landmark */
.callout { border-left: 4px; } /* Content emphasis */
.table td { border-bottom: 1px; } /* Data separator */
```
- **WHY:** Chrome borders (headers) serve different purpose than content borders (callouts)
- **ENCODING:** 3px structural, 4px emphasis, 1px separation
- **RESULT:** No semantic ordering (header isn't "less important" than callout)

---

### ANTI-PATTERN: Mechanical Application

**Problem:** Applying same border-weight to ALL elements of same TYPE without semantic differentiation.

**Example (WRONG):**
```css
/* BAD: All h3 headings get 3px uniformly */
h3 { border-left: 3px solid var(--color-border); }
```
- **WHY WRONG:** Creates mechanical rhythm with no semantic meaning
- **PERCEPTUAL RESULT:** "Slightly repetitive" (Middle-tier perceptual audit)
- **FIX:** Use border-weight to encode SEMANTIC importance, not element type

**Example (CORRECT):**
```css
/* GOOD: h3 border-weight encodes importance */
.section--critical h3 { border-left: 3px; }
.section--supporting h3 { border-left: 1px; }
.section--background h3 { border-left: 0; }
```
- **WHY CORRECT:** Border-weight encodes semantic hierarchy (critical vs supporting)
- **PERCEPTUAL RESULT:** Readers subconsciously understand importance from border thickness

---

### Mode Selection Decision Tree

```
CONTENT ANALYSIS:
├─ Does content have NATURAL stratification?
│  (confidence levels, security tiers, structural depth)
│  ├─ YES → PROGRESSIVE MODE
│  │   Deploy 4px→3px→2px→1px as continuous gradient
│  │   Each weight = different LEVEL in same dimension
│  │
│  └─ NO → Check categorical structure
│
├─ Does content have DISTINCT TYPES?
│  (callouts, headers, separators — different purposes)
│  ├─ YES → DISCRETE MODE
│  │   Deploy 4px, 3px, 1px as separate categories
│  │   Each weight = different CATEGORY
│  │
│  └─ NO → DON'T USE border-weight gradient
│      (Flat content with no hierarchy = no mechanism fit)
```

---

## 3. REINFORCING PAIR COMBINATIONS

### Multi-Channel Coherence (3+ Mechanisms Encoding SAME Semantic)

**Definition:** When multiple mechanisms ALL encode the SAME dimension simultaneously, creating reinforcement through DIFFERENT CSS channels.

**Ceiling-tier requirement:** At least 3 mechanism pairs must REINFORCE each other (not just coexist independently).

---

### Validated Reinforcing Pairs

#### Pair 1: Border-Weight + Color Encoding (Security Criticality)

**Middle-tier validation (security layers):**
```css
/* 4px border + red accent = CRITICAL */
.layer--authentication {
  border-left: 4px solid var(--color-primary); /* #E83025 red */
}

/* 3px border + blue accent = HIGH */
.layer--authorization {
  border-left: 3px solid var(--accent-blue);
}

/* 1px border + gray accent = LOW */
.layer--rate-limit {
  border-left: 1px solid var(--color-border);
}
```

**WHY THIS WORKS:**
- Border-weight encodes criticality (4px = most critical)
- Color encodes criticality (red = highest alert)
- TWO channels (thickness + color) reinforce SAME semantic
- Result: Readers perceive criticality through MULTIPLE cues

**Perceptual audit verdict:** "Red accent line is the most designed element on the page"

---

#### Pair 2: Spacing Compression + Zone Backgrounds (Depth)

**OD-004 geological strata validation:**
```css
/* Sparse spacing + warm background = SURFACE */
.stratum--topsoil {
  padding: var(--space-20); /* 80px, generous */
  background: #FEF9F5; /* Warm cream */
}

/* Dense spacing + cool background = DEPTH */
.stratum--bedrock {
  padding: var(--space-4); /* 16px, compressed */
  background: #1A1A1A; /* Dark, heavy */
}
```

**WHY THIS WORKS:**
- Spacing compression encodes depth (tight = deep)
- Zone background encodes depth (dark = deep)
- TWO channels (padding + background) reinforce SAME semantic
- Result: Readers feel "deeper" through MULTIPLE atmospheric cues

---

#### Pair 3: Border-Weight + Spacing Compression (Importance Hierarchy)

**DD-006 fractal hierarchy validation:**
```css
/* Heavy border + generous spacing = HIGH importance */
.section--critical {
  border-left: 4px solid var(--color-text);
  padding: var(--space-16); /* 64px */
}

/* Light border + compressed spacing = LOW importance */
.section--detail {
  border-left: 1px solid var(--color-border);
  padding: var(--space-4); /* 16px */
}
```

**WHY THIS WORKS:**
- Border-weight encodes importance (4px = critical)
- Spacing encodes importance (generous = important, compressed = detail)
- TWO channels (border + padding) reinforce SAME semantic
- Result: Hierarchical importance is REDUNDANTLY encoded

---

#### Pair 4: Zone Backgrounds + Typography Scale (Architectural Levels)

**Potential Ceiling application (architectural metaphor):**
```css
/* Dark background + large type = FOUNDATION */
.floor--basement {
  background: var(--color-text); /* #1A1A1A */
  font-size: var(--type-section); /* 1.625rem, prominent */
}

/* Light background + small type = ROOFLINE */
.floor--roofline {
  background: var(--color-zone-sparse); /* #FEF9F5 */
  font-size: var(--type-body); /* 1rem, standard */
}
```

**WHY THIS WORKS:**
- Background darkness encodes structural weight (dark = heavy, load-bearing)
- Typography scale encodes structural prominence (large = important floor)
- TWO channels (background + type size) reinforce SAME semantic
- Result: Architectural hierarchy communicated through MULTIPLE channels

---

### Compatible vs Incompatible Combinations

#### Compatible Combinations (Catalog-Validated)

| Pair | Mechanism A | Mechanism B | Shared Semantic | Evidence |
|------|------------|------------|----------------|----------|
| **1** | #1 Border-Weight | #7 Zone Backgrounds | Depth/Hierarchy | OD-004 geological strata |
| **2** | #2 2-Zone DNA | #9 Confidence Color | Semantic Categories | All callout variants (DD, OD, CD) |
| **3** | #5 Dense/Sparse | #12 Progressive Disclosure | Narrative Arc | DD-002 CRESCENDO |
| **4** | #4 Spacing Compression | #11 Typography Scale | Importance Hierarchy | CD-006 hierarchy reinforcement |
| **5** | #1 Border-Weight | #4 Spacing Compression | Criticality/Depth | Middle-tier security layers |

#### Incompatible Combinations (Violate Soul or Contradict Mechanism Purpose)

| Anti-Pattern | Mechanism A | Mechanism B | Why Incompatible |
|-------------|------------|------------|-----------------|
| **1** | #3 Solid Offset Depth | box-shadow (prohibited) | Violates soul piece #2 (no shadows) |
| **2** | #1 Border-Weight Gradient | Uniform borders | Contradicts gradient purpose (no differentiation) |
| **3** | #5 Dense/Sparse Alternation | Uniform padding | Contradicts rhythm purpose (no alternation) |
| **4** | #7 Zone Backgrounds | Single background color | Contradicts differentiation purpose |
| **5** | #4 Spacing Compression | Uniform spacing | Contradicts compression purpose (no gradient) |

---

### Middle-Tier Gap: Mechanisms Coexist But Don't Reinforce

**Observation from retrospective:**
> "Middle-tier deployed 12 mechanisms that coexist independently. No analysis of whether they INTERACT coherently."

**What this means:**
- Border-weight handled hierarchy
- Zone backgrounds handled section breaks
- Spacing handled rhythm
- Each mechanism solved DIFFERENT problem INDEPENDENTLY
- No multi-channel encoding of SAME semantic

**Ceiling gap to address:**
- Require mechanism INTERACTION analysis in build plan
- Planner must document: "For at least 3 mechanism pairs, explain how they REINFORCE each other"
- Example table format:

```markdown
| Pair | Mechanism A | Mechanism B | Shared Semantic | How They Reinforce |
|------|------------|------------|----------------|-------------------|
| 1 | Border-weight | Zone bg | Geological depth | Thickness + darkness both encode "deeper" |
| 2 | Spacing | Typography | Structural importance | Padding + scale both encode "more important" |
| 3 | Color accent | Border weight | Security criticality | Red + 4px both encode "most critical" |
```

---

## 4. ZONE-BACKGROUND MAPPINGS (4-Zone Semantic Table)

### The 4-Zone Token System

```css
:root {
  --color-zone-sparse: #FEF9F5;    /* Warm cream */
  --color-zone-dense: #FFFFFF;      /* Near-white */
  --color-zone-breathing: #FAF5ED;  /* Earthy tan */
  --color-zone-bedrock: #1A1A1A;    /* Dark */
}
```

---

### Default Semantic Mappings (Content-Type Recommendations)

| Zone Color | Token | Content Type | Padding Range | When to Use |
|------------|-------|--------------|---------------|-------------|
| **Sparse** (#FEF9F5, warm cream) | `--color-zone-sparse` | Introductory, opening, overview | 64-80px | First section, high-level concepts, generous breathing room |
| **Dense** (#FFFFFF, near-white) | `--color-zone-dense` | Technical, detailed, compressed | 16-32px | Deep-dive sections, code-heavy, API reference, compressed padding |
| **Breathing** (#FAF5ED, earthy tan) | `--color-zone-breathing` | Procedural, moderate, transitional | 32-48px | Installation steps, how-to guides, moderate padding |
| **Bedrock** (#1A1A1A, dark) | `--color-zone-bedrock` | Structural landmarks ONLY | Varies | Header, footer, featured diagrams — NOT for body content sections |

---

### Middle-Tier Validation (F-PATTERN Deployment)

**Zone progression:** sparse→dense→breathing→dense

```css
/* Section 1: Introduction (sparse, warm) */
.section--intro {
  background: var(--color-zone-sparse); /* #FEF9F5 */
  padding: var(--space-16); /* 64px */
}

/* Section 2: Technical Deep-Dive (dense, white) */
.section--architecture {
  background: var(--color-zone-dense); /* #FFFFFF */
  padding: var(--space-6); /* 24px */
}

/* Section 3: Installation Steps (breathing, tan) */
.section--installation {
  background: var(--color-zone-breathing); /* #FAF5ED */
  padding: var(--space-10); /* 40px */
}

/* Section 4: Security Layers (dense, white) */
.section--security {
  background: var(--color-zone-dense); /* #FFFFFF */
  padding: var(--space-8); /* 32px */
}
```

**Perceptual audit verdict:** "Zone shifts were perceptually subtle (MEDIUM impact) but contributed to spatial atmosphere."

**Effectiveness:** Zone backgrounds alone = MEDIUM impact. When paired with spacing compression (reinforcing pair) = HIGH impact composite.

---

### Metaphor-Driven Alternative Mappings

**CAVEAT:** Default mappings are RECOMMENDATIONS, not rules. Metaphor may suggest different associations.

#### Example: Geological Metaphor (OD-004)

**Mapping logic:** Warm→cool gradient encodes depth (surface warm, depth cool), NOT content type.

| Zone Color | Geological Layer | Depth Encoding | Why This Mapping |
|------------|-----------------|----------------|------------------|
| Sparse (#FEF9F5) | Topsoil | Surface, unconsolidated | Warmest color = least compressed = surface |
| Breathing (#FAF5ED) | Sediment | Mid-depth, partially consolidated | Moderate warmth = moderate compression |
| Dense (#FFFFFF) | Bedrock | Deep, fully consolidated | Coolest (white) = maximum compression = depth |
| Bedrock (#1A1A1A) | Core sample diagrams | Featured visual anchors | Dark reserved for diagrams, NOT content sections |

**Key difference from default:** Temperature gradient (warm→cool) encodes DEPTH, not content type (intro→technical).

---

#### Example: Architectural Metaphor (Potential Ceiling)

**Mapping logic:** Light→dark gradient encodes structural load (roofline light, basement dark).

| Zone Color | Building Floor | Load Encoding | Why This Mapping |
|------------|---------------|---------------|------------------|
| Sparse (#FEF9F5) | Roofline | Decorative, no load | Lightest color = minimal structural weight |
| Breathing (#FAF5ED) | Upper floors | Residential, minimal load | Moderate warmth = moderate structural importance |
| Dense (#FFFFFF) | Ground floor | Primary access, moderate load | Near-white = secondary structural importance |
| Bedrock (#1A1A1A) | Basement | Foundation, maximum load | Darkest = maximum structural weight (load-bearing) |

**Key difference from default:** Darkness gradient (light→dark) encodes STRUCTURAL IMPORTANCE, not content density.

---

### When Metaphor Conflicts with Default Mapping

**Rule:** Metaphor wins — BUT document the deviation.

**Rationale:** Default mappings optimize for CONTENT TYPE (intro/technical/procedural). Metaphor-driven mappings optimize for CONCEPTUAL COHERENCE (depth/load/temperature).

**Ceiling requirement:** If deviating from default, planner must document:

```markdown
### Zone Background Semantic Mapping (Deviation from Default)

**Default assumption:** Sparse=intro, Dense=technical, Breathing=procedural

**THIS PAGE uses:** Geological depth encoding

**Mapping table:**
| Zone | Default Meaning | THIS PAGE Meaning | Justification |
|------|----------------|------------------|---------------|
| Sparse | Introductory | Surface topsoil | Warmth = surface, geological metaphor |
| Dense | Technical | Bedrock depth | Cool white = compressed, consolidated |
| Breathing | Procedural | Mid-layer sediment | Moderate warmth = partial consolidation |
| Bedrock | Landmarks | Diagrams only | Dark reserved for featured visuals |

**WHY deviation is justified:** Geological metaphor requires temperature-as-depth encoding. Content-type mapping would break conceptual coherence.
```

---

### Anti-Pattern: Bedrock for Body Content

**CRITICAL PROHIBITION:** `--color-zone-bedrock` (#1A1A1A, dark) is ONLY for structural landmarks (header, footer, featured diagrams). NEVER use for body content sections.

**Why:** Dark backgrounds with light text create high contrast that fatigues readers when used for READING content (body paragraphs). Headers/footers are NAVIGATION (glance, not read).

**Middle-tier validation:** Dark header worked. If Middle had used dark background for body sections, readability would have failed.

**Ceiling requirement:** If planner attempts to use bedrock for body content, REJECT with justification:
> "Bedrock zone is reserved for structural landmarks (header/footer) and featured visuals (diagrams). Body content sections must use sparse/dense/breathing zones for readability."

---

## 5. BLIND SPOTS (What Middle Missed, Ceiling Must Address)

### Blind Spot 1: Compositional Fluency Gap

**Observation:** Middle-tier crossed PA-05 DESIGNED threshold (4/4) through vocabulary fluency but perceptual audit called it "professionally stiff" rather than "compositionally confident."

**What this reveals:** PA-05 measures VOCABULARY PRESENCE (non-default layouts, padding variety, compositional CSS). It does NOT measure COMPOSITIONAL PURPOSE.

**Two dimensions of "designed":**
1. **Vocabulary Fluency (BREADTH):** Knowing many mechanisms, applying them correctly, covering all 5 categories
2. **Compositional Fluency (PURPOSE):** Mechanisms chosen to EXPRESS metaphor, multi-channel coherence

**Middle achieved:** Vocabulary fluency → PA-05 4/4
**Middle did NOT achieve:** Compositional fluency → "stiff" feeling

**Ceiling must add:**
- Metaphor derivation (Phases 1-3) gives page a REASON for choices
- Mechanism interaction requirement (3+ pairs REINFORCE each other)
- Agent communication enables collaborative refinement

**Evidence:** Border-weight gradient (4px→3px→1px) was Middle's ONLY compositional fluency moment — one mechanism encoding semantic across multiple instances.

---

### Blind Spot 2: File-Bus Communication Cost

**Observation:** File-only topology optimized SPEED (35 min, zero coordination overhead) but cost QUALITY (missing footer, B+ verdict).

**Missing footer root cause:** Builder saw plan specifying "#14 Footer Mirror" but couldn't ask planner "What does Footer Mirror look like?" or verify completeness.

**Comparison evidence:**
- CD-006 (WITH messaging): 39/40 score, "compositionally confident"
- Phase C (WITH messaging): 11/11 criteria met
- Middle (WITHOUT messaging): B+ quality, 3 defects, "professionally stiff"

**What this reveals:** Communication isolation prevents collaborative refinement. Builder implements what they UNDERSTAND, not what's SPECIFIED.

**Ceiling must add:**
- Agents MUST use SendMessage for clarifying questions
- Builder → Planner: "What does Footer Mirror mean? Same background as header?"
- Auditor → Team-Lead: Flag issues mid-process before proceeding
- Preserve flat topology (no captains), change protocol from file-only to file+messaging

---

### Blind Spot 3: Rhythm Variation Requirement Missing

**Observation:** Middle-tier had consistent 48-80px gaps but NO deliberate variation.

**Perceptual audit findings:**
- "Spacing patterns repeat without variation"
- "Metronomic rather than musical rhythm"

**What this reveals:** Skill has NO minimum rhythm variation requirement. Uniform spacing creates mechanical flow.

**Ceiling must add:** 3-transition minimum requirement

**Transition type taxonomy:**
- **SMOOTH** (48px + 1px border): Same-axis continuation
- **BRIDGE** (64px + breathing zone + text): Cross-axis shift with context
- **BREATHING** (80px + 3px border): Major axis shift

**Binary rule:** Page MUST include at least 3 DIFFERENT transition types between major sections.

**WHY:** Uniform spacing = mechanical rhythm. Musical rhythm has beats AND rests. Spacing rhythm needs the same.

---

### Blind Spot 4: Heading Spacing Ratio Violated

**Observation:** Middle-tier CSS declared 2:1 ratio (32px top / 16px bottom) but perceptual audit saw "appears equal in most cases."

**Root cause:** Margin collapse. CSS declared spacing was overridden by adjacent element margins.

**What this reveals:** Heading spacing is currently JUDGMENT-based (PA-SEM-01), not PROGRAMMATIC. Builders don't verify before writing file.

**Ceiling must add:**
- **Make 1.5:1 ratio BINARY:** "MUST be >= 1.5:1 above vs below for ALL h2/h3"
- **Builder self-check:** Measure COMPUTED margin-top / margin-bottom before file write
- **Programmatic audit:** Verify ratio for ALL headings, not estimate

**Formula:** `getComputedStyle(h3).marginTop / getComputedStyle(h3).marginBottom >= 1.5`

---

### Blind Spot 5: Token Compliance Self-Check Missing

**Observation:** Middle-tier token compliance was 66.5% (145 var() refs / 218 total values). 73 raw hex/px values not replaced.

**Root cause:** Judgment language ("should be >= 80%") = zero enforcement. Builder didn't verify before writing file.

**What this reveals:** Theory 5 validated — binary rules achieve 100% compliance, judgment rules achieve ~0%.

**Evidence:**
- 7/7 binary rules passed (border-radius: 0, box-shadow: none, etc.)
- 0/3 judgment rules met (CPL, token compliance, heading spacing)

**Ceiling must add:**
- **Make token compliance BINARY:** "MUST be >= 80% with self-check gate"
- **Builder self-check protocol:** Scan own CSS for raw values BEFORE file write
- **Approved exceptions documented:** border-width: 1px|3px|4px, line-height unitless

**Self-check formula:**
```
1. Count var(--*) references
2. Count raw hex values (regex: /#[0-9A-Fa-f]{3,6}/)
3. Count raw px values OUTSIDE approved contexts
4. Calculate: var() / (var() + raw) >= 80%
5. If FAIL: replace raw values with tokens
```

---

### Blind Spot 6: Landmark Completeness Check Missing

**Observation:** Footer specified in plan but not built. Either builder failed to implement OR CSS rendering issue.

**Root cause:** Prompt slicing blind spot. Builder saw 40% of master prompt, missed implementation guidance.

**What this reveals:** No verification phase between build completion and audit submission.

**Ceiling must add:** Landmark Completeness GATE at Phase 2→3 boundary

**Binary check (team-lead runs BEFORE launching auditors):**
```markdown
| Landmark | Present? | CSS Evidence | Visual Treatment |
|----------|----------|--------------|------------------|
| **HEADER** | YES / NO | [selector + key properties] | [dark/light, bordered, etc.] |
| **MAIN CONTENT SECTIONS** | YES / NO | [number of sections] | [zone backgrounds, transitions] |
| **FOOTER** | YES / NO | [selector + key properties] | [mirrors header? minimal? etc.] |
```

**Tier-calibrated requirements:**
- Floor: Header + main content. Footer optional.
- Middle+: Header + main + footer ALL required.
- Ceiling: Header + main + footer + transition grammar between ALL landmarks.

**Cost:** ~2 minutes verification. Catches severity-1 defects (WOULD-NOT-SHIP).

---

### Blind Spot 7: Top-Heavy Weight Distribution

**Observation:** Middle-tier had dark header and diagram as focal points (both in top half). Bottom half had no visual anchors.

**Perceptual audit findings:**
- "Visual weight concentrates in header and dissipates"
- "Only two moments create visual interest across entire page"
- "Limited visual drama"

**What this reveals:** No requirement for focal point distribution balance.

**Ceiling must add:** Weight distribution requirement

**Binary rule:** Page MUST have >= 2 visual focal points in BOTTOM 50% of page.

**Focal point definition:** High-impact mechanisms (#1 border-weight, #3 solid offset, #13 dark header, #17 code blocks) OR featured diagrams.

**Implementation:** Planner must document focal point distribution in build plan:
```markdown
### Focal Point Distribution
- **Top 50%:** Dark header (line 1-120), Featured diagram (line 200-280)
- **Bottom 50%:** Code block cluster (line 450-550), Border-weight gradient table (line 680-750)
```

---

### Blind Spot 8: Per-Category Evidence Not Isolated

**Observation:** Middle experiment can't distinguish whether improvement came from PER-CATEGORY minimums OR just HIGHER COUNT (12 vs 7).

**Theory validation status:** M1 (per-category minimums) = PARTIALLY CONFIRMED. Confounding variable: aggregate count also increased.

**What this reveals:** n=1 sample size with confounding variables. No ablation study run.

**Ceiling preparation should consider:** Run mini-ablation BEFORE Ceiling launch

**Test design:**
- Variant A: "Deploy 8-10 mechanisms total" (aggregate count, no per-category)
- Variant B: "Deploy 1+ per category" (produces 8-12 total)
- Same content, same pattern, same planner
- Compare: Does B produce richer output? Does B produce more novel output?

**If Variant A produces poor category coverage** (e.g., S:0, H:5, C:3, D:0, N:2), per-category structure is load-bearing.

**If Variant A and B produce similar coverage**, aggregate count may be sufficient (per-category adds complexity without benefit).

---

## 6. EXPECTATION GAPS (Predictions vs Reality)

### Gap 1: Timing Discrepancy (8-11x Faster)

**Predicted:** 70-100 min (tier model) or 4.5-6.5 hours (planning docs)
**Actual:** ~35 minutes wall-clock

**Why wrong:** Planning model estimated SEQUENTIAL HUMAN TIME (one person doing all phases). Agent teams execute in PARALLEL (8 agents with separate contexts, concurrent in waves).

**35 minutes breakdown:**
- Content-selector: ~5 min
- Planner: ~8 min (runs while selector finishes)
- Builder: ~10 min (runs while planner finishes)
- Auditors: ~6 min each (run in parallel)
- Evaluator: ~5 min

**35 min = LONGEST POLE in each wave**, not sum of all agent times.

**Ceiling implication:** Tier model predicts Ceiling at 150-220 min based on showcase build times (DD-006, CD-006 took 4-6 hours iterative). Those were SINGLE-AGENT builds.

**For Ceiling with 10-12 agents:**
- Metaphor derivation: ~10 min
- Planning: ~10 min
- Building: ~12 min
- Auditing: ~6 min (2 agents parallel)
- Evaluation: ~6 min (2 agents parallel)
- Verdict: ~5 min
- **Total: ~45-60 min if waves don't overlap, 30-40 min if they do**

**Revised estimate:** Ceiling actual execution = 45-100 min (not 150-220 min). 3-4x improvement in cost-benefit calculation.

---

### Gap 2: Communication Isolation Cost (Speed ≠ Quality)

**Predicted:** Flat file-bus topology with zero SendMessage would be sufficient.

**Actual:**
- Speed: YES (35 min, zero coordination overhead)
- Quality: NO (missing footer WOULD-NOT-SHIP, "professionally stiff")

**Why wrong:** Conflated PROCESS EFFICIENCY (zero coordination bugs) with OUTPUT QUALITY (compositional confidence, perceptual richness).

**Evidence from other experiments:**
- CD-006 (WITH messaging): 39/40
- Phase C (WITH messaging): 11/11
- Phase D Variant B (WITH messaging): 18/19
- Middle (WITHOUT messaging): B+ quality, 3 defects

**What went wrong:** Builder couldn't ask "What does Footer Mirror look like?" File-bus prevented clarifying questions.

**Ceiling implication:** Agents MUST communicate via SendMessage. Required capabilities:
1. Builder → Planner: Ask clarifying questions
2. Auditor → Team-Lead: Flag issues mid-process
3. Team-Lead → Builder: Request targeted iteration
4. Planner → Builder: Proactive guidance for metaphor expression

**Preserve flat TOPOLOGY** (team-lead → agents directly, no captains). Change PROTOCOL from file-only to file+messaging.

---

### Gap 3: Designed Paradox (Passing Gate ≠ Feeling Designed)

**Predicted:** "Designed" is binary threshold. Cross PA-05 threshold → page feels designed rather than formatted.

**Actual:**
- PA-05 result: 4/4 PASS (all sub-criteria met)
- Perceptual verdict: "Professionally stiff" not "compositionally confident"
- Descriptor: "Specifications applied correctly, not composition felt through"

**Why wrong:** Assumed DESIGNED is single-dimension binary gate. Actually it's TWO-DIMENSION space:

| Dimension | Middle Achievement | Ceiling Target |
|-----------|-------------------|----------------|
| **Vocabulary Fluency (BREADTH)** | HIGH (12 mechanisms, 5 categories) | HIGH (12-15 mechanisms, 5 categories) |
| **Compositional Fluency (PURPOSE)** | LOW (lookup-based, no metaphor) | MEDIUM (metaphor-driven multi-channel) |
| **Feeling** | "Professionally stiff" | "Compositionally confident" |

**What PA-05 measures:** Vocabulary fluency (do you know non-obvious CSS? do you vary spacing? can you organize under blur? is this custom work?)

**What PA-05 does NOT measure:** Compositional fluency (are mechanisms chosen to EXPRESS coherent concept? do they reinforce each other? is there multi-channel encoding?)

**Ceiling must add:**
1. Metaphor derivation (Phases 1-3) — gives page a REASON
2. Mechanism interaction requirement — at least 3 pairs REINFORCE each other
3. Agent communication — enables collaborative refinement creating confidence

**Border-weight gradient (4px→3px→1px) was Middle's ONLY compositional fluency moment** — one mechanism encoding semantic (security criticality) across multiple instances.

---

### Gap 4: Mechanism Count Natural Landing

**Predicted:** Middle lands at 8-10 mechanisms
**Actual:** 12 mechanisms (S:1, H:3, C:4, D:2, N:3)

**Why wrong:** 8-10 range was backward-engineered from showcase pages built WITHOUT per-category minimums.

**What per-category minimums produce:**
- Spatial: 1-2 mechanisms
- Hierarchy: 2-3 mechanisms
- Component: 2-4 mechanisms
- Depth/Emphasis: 1-2 mechanisms
- Structure/Nav: 2-3 mechanisms
- **Total: 8-12 mechanisms naturally**

**The 12 isn't an overshoot** — it's the NATURAL top of the range when per-category minimums are enforced.

**Ceiling implication:** Middle landing zone is 8-12 (not 8-10). Ceiling with raised per-category minimums (S:2+, H:2+, C:3+, D:2+, N:2+) will land at 11-15, possibly higher.

---

### Gap 5: Token Compliance (Judgment = 0%)

**Predicted:** "Should be >= 80%" would guide builders
**Actual:** 66.5% compliance (-13.5 points below threshold)

**Why wrong:** Judgment language = zero enforcement.

**Theory 5 PERFECTLY validated:**
- **Binary rules:** 7/7 passed (100% compliance)
- **Judgment rules:** 0/3 met (0% compliance)

**Evidence:**
```
BINARY RULES (100%):
- border-radius: 0 ✓
- box-shadow: none ✓
- No pure black/white ✓
- Typography trinity ✓
- All h3 italic ✓
- No gradients ✓
- Container 940-960px ✓

JUDGMENT RULES (0%):
- Token compliance "should be 80%" ✗ (66.5%)
- CPL "should be 45-80" ✗ (82 chars)
- Heading spacing "should be 1.5:1" ✗ (appears equal)
```

**Ceiling implication:** If a constraint MATTERS, make it BINARY. Convert:
1. Token compliance: "MUST be >= 80% with self-check gate"
2. Heading spacing: "MUST be >= 1.5:1 (measured)"
3. Rhythm variation: "MUST have >= 3 different transition treatments"

**Binary enforcement = 100% compliance. There is no middle ground.**

---

## 7. PRE-CEILING READINESS (Every Item from Checklist)

### MUST DO (11 items — Ceiling cannot launch without these)

#### 1. Add Inter-Agent Communication Protocol [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** SendMessage capability in master prompt, builder/auditor/team-lead prompts include communication instructions
**Evidence:** CD-006 (39/40) WITH messaging vs Middle (B+) WITHOUT messaging
**Files:** Ceiling execution prompt + agent prompt slices

#### 2. Apply M1 Permanently to Skill [CRITICAL]
**Status:** VALIDATED but NOT YET APPLIED
**Acceptance:** Replace "sample 2-4" with per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+) in tension-composition skill
**Evidence:** Middle deployed 12 mechanisms (all 5 categories), achieved PA-05 4/4
**Files:** `~/.claude/skills/tension-composition/SKILL.md` (3 locations)

#### 3. Add Landmark Completeness Gate [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** Phase 2→3 boundary verification: header exists, footer exists, all planned sections exist
**Evidence:** Missing footer (WOULD-NOT-SHIP), plan specified "#14 Footer Mirror"
**Files:** Ceiling execution plan Phase 2.5, team-lead prompt slice

#### 4. Add Builder Self-Check for CPL and Token Compliance [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** Builder verifies CPL (45-80) and token compliance (>= 80%) BEFORE writing file
**Evidence:** Middle CPL 82 (+2), token 66.5% (-13.5 pts)
**Files:** Builder prompt slice, Appendix B Block 2

#### 5. Establish Ceiling-Specific Per-Category Minimums [CRITICAL]
**Status:** NOT DONE — must define for Ceiling
**Acceptance:** S:2+, H:2+, C:3+, D:2+, N:2+ documented in execution plan and planner prompt
**Evidence:** Middle used S:1+, H:1+, C:1+, D:1+, N:1+ → 12 total. Ceiling needs higher.
**Files:** Ceiling execution plan Phase 1, planner prompt slice

#### 6. Add Mechanism Interaction Requirement [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** Planner documents "at least 3 mechanism pairs REINFORCE each other" with pair table
**Evidence:** Middle mechanisms coexisted independently, no multi-channel encoding
**Files:** Planner prompt slice, build plan template

#### 7. Define Blind Novelty Evaluation Protocol [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** Evaluator receives 3 unlabeled pages (A, B, C) in random order, identifies newest BLIND
**Evidence:** Middle novelty assessed by evaluator who KNEW hypothesis, confirmation bias risk
**Files:** Novelty evaluator prompt slice

#### 8. Add Dual Perceptual Auditor Protocol [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** TWO independent auditors evaluate in parallel, team-lead reconciles findings
**Evidence:** Single-evaluator bias concern from adversarial review
**Files:** Ceiling execution plan Phase 4, team-lead reconciliation protocol

#### 9. Re-Estimate Ceiling Timing Using Parallel Agent Model [CRITICAL]
**Status:** NOT DONE — must document for Ceiling
**Acceptance:** ~45-100 min estimate documented (not 150-220 min), includes metaphor phases
**Evidence:** Middle 35 min vs 70-100 predicted (8-11x gap), parallel model explains it
**Files:** Ceiling execution plan timeline section

#### 10. Generate Programmatic Audit Checklist FROM Build Plan [CRITICAL]
**Status:** NOT DONE — must create for Ceiling
**Acceptance:** Programmatic auditor extracts mechanism names from plan, generates verification checklist
**Evidence:** Middle programmatic audit checked generic criteria, didn't verify ALL 12 mechanisms
**Files:** Programmatic auditor prompt slice

#### 11. Answer: Does Builder Need Full Catalog Entry or Just Name? [CRITICAL]
**Status:** NOT ANSWERED — must decide for Ceiling
**Acceptance:** Decision documented: (A) only names OR (B) full catalog entries for deployed mechanisms
**Evidence:** Footer bug hypothesis — builder saw "Footer Mirror" name without catalog guidance
**Files:** Builder prompt slice, prompt slicing strategy

---

### SHOULD DO (11 items — High value, strongly recommended)

#### 12. Add Rhythm Variation Requirement (3-Transition Minimum)
**Status:** NOT DONE
**Evidence:** Middle had metronomic rhythm, "spacing patterns repeat without variation"
**Files:** Skill Phase 4.2B, build plan TRANSITION TABLE section

#### 13. Make Heading Spacing Ratio Binary (1.5:1)
**Status:** NOT DONE
**Evidence:** Middle CSS declared 2:1, perceptual audit saw "appears equal" (margin collapse)
**Files:** Skill Phase 4.0 Guardrails, programmatic audit checklist

#### 14. Refine PA-05 Sub-Criteria Thresholds
**Status:** NOT DONE
**Evidence:** PA-05b passed at exactly 2.0x (zero margin), PA-05d estimated not measured
**Files:** perceptual-auditing skill PA-05 section

#### 15. Implement Builder Self-Check GATE (Phase 2 Internal)
**Status:** NOT DONE
**Evidence:** 3 defects (CPL, token, footer) builder self-check could have caught
**Files:** Builder prompt PRE-FILE-WRITE CHECKLIST section

#### 16. Design Ablation Study (Test A: Integrated Builder)
**Status:** NOT DONE — consider running before Ceiling
**Evidence:** Builder saw 40% of prompt, missed 60% with implementation guidance
**Files:** New test plan `ephemeral/test-a-integrated-builder/`

#### 17. Establish Measurement Precision Standards
**Status:** NOT DONE
**Evidence:** "~20% overlap" imprecise, PA-05b "passes at 2.0x" hides zero margin
**Files:** Verdict template, programmatic/perceptual audit output formats

#### 18. Add Weight Distribution Requirement
**Status:** NOT DONE
**Evidence:** Middle top-heavy, only 2 focal points (both in top 50%)
**Files:** Perceptual audit question, planner focal point planning requirement

#### 19. Test Contaminated Content-Selector (Test D)
**Status:** NOT DONE — consider for post-Ceiling analysis
**Evidence:** Firewall untested assumption, adds workload
**Files:** New test plan `ephemeral/test-d-firewall/`

#### 20. Document Two-Dimension Designed Model
**Status:** NOT DONE
**Evidence:** "Designed" = vocabulary fluency (Middle) + compositional fluency (Ceiling)
**Files:** Tier methodology doc, compositional-core/CLAUDE.md

#### 21. Maintain Fresh-Eyes Zero-Context Auditing
**Status:** VALIDATED — must preserve for Ceiling
**Evidence:** Zero-context auditor found missing footer (context-loaded would rationalize)
**Files:** Perceptual auditor prompt slice (< 300 lines, zero design system context)

#### 22. Consider Merging Content-Selector + Planner
**Status:** NOT DECIDED — depends on Test D results
**Evidence:** Firewall separation creates sequencing dependency, may be unnecessary overhead
**Files:** Ceiling execution plan agent topology

---

### COULD DO (8 items — Nice to have, can defer)

23. Add mechanism impact profiles to catalog
24. Add content affinity documentation to catalog
25. Add discrete vs progressive application modes to catalog
26. Correct CPL classification (move from Critical-10 to Guardrails)
27. Extract strongest content-mechanism fits for case studies
28. Run Test B: Dependency Mapping
29. Run Test C: Failure Mode Analysis
30. Test Opus vs Sonnet for Planner (ablation)

---

### OPEN QUESTIONS (5 items — Must answer before or during Ceiling)

#### Q1: Is Per-Category the Real Driver, or Just Higher Count?
**Priority:** HIGH
**Answer needed:** Before Ceiling launch
**How to answer:** Run ablation — "8-10 total" vs "1+ per category" on same content
**Evidence:** Middle can't isolate which factor drove improvement (confounding variables)

#### Q2: Full Catalog Entry or Just Name for Builder?
**Priority:** HIGH
**Answer needed:** Before Ceiling launch (MUST DO #11)
**How to answer:** Binary decision documented in builder prompt design
**Evidence:** Footer bug suggests builder didn't understand "Mirror" without catalog entry

#### Q3: What's Actual PA-05d CSS Composition Percentage?
**Priority:** HIGH
**Answer needed:** During Ceiling execution
**How to answer:** Extract CSS, count compositional lines, calculate actual %
**Evidence:** Middle PA-05d was ESTIMATED not measured

#### Q4: What's Natural Middle-Tier Mechanism Landing Zone?
**Priority:** MEDIUM (not blocking)
**Answer needed:** Eventually (need 5+ experiments)
**How to answer:** Run Middle on 5 content types, record mechanism counts
**Evidence:** n=1 (12 mechanisms), need distribution data

#### Q5: Is Opus/Sonnet Split Necessary?
**Priority:** MEDIUM (cost optimization)
**Answer needed:** Eventually (not blocking)
**How to answer:** Run Middle with Sonnet planner, compare plan quality
**Evidence:** Can't separate two-instance pattern from model capability

---

## 8. MECHANISM SELECTION GUIDANCE FOR CEILING

### Derive from Metaphor, Not Lookup

**Middle-tier approach (content-structure mapping):**
```
Content has code blocks → I need mechanism #17
Content has hierarchy → I need mechanism #1
Content has callouts → I need mechanism #2
```
Each mechanism serves DIFFERENT content need INDEPENDENTLY.

**Ceiling approach (metaphor-driven multi-channel):**
```
Derived metaphor: "Geological strata"

Metaphor analysis:
- Strata have pressure gradients → spacing compression (#4)
- Strata have consolidation levels → border-weight (#1)
- Strata have distinct layers → zone backgrounds (#7)
- Strata have depth progression → all THREE encode "depth"

Result: Spacing + border-weight + zone backgrounds REINFORCE each other,
all encoding geological depth in THREE CSS channels simultaneously.
```

**Key difference:**
- **Middle:** Each mechanism solves DIFFERENT problem (border-weight = hierarchy, zone bg = section breaks, spacing = rhythm)
- **Ceiling:** Multiple mechanisms encode SAME dimension (border-weight + zone bg + spacing ALL encode "depth")

---

### Per-Category Minimums (Ceiling-Specific)

**Middle-tier used:** S:1+, H:1+, C:1+, D:1+, N:1+ → natural landing 8-12 mechanisms

**Ceiling should use:** S:2+, H:2+, C:3+, D:2+, N:2+ → natural landing 11-15 mechanisms

**Rationale:** Ceiling requires richer vocabulary coverage than Middle.

| Category | Middle Min | Ceiling Min | Example Mechanisms |
|----------|-----------|-------------|-------------------|
| **Spatial (S)** | 1+ | 2+ | #5 Dense/Sparse, #6 Width Variation, #15 Bento Grid |
| **Hierarchy (H)** | 1+ | 2+ | #1 Border-Weight, #4 Spacing Compression, #11 Typography Scale |
| **Component (C)** | 1+ | 3+ | #2 2-Zone DNA, #9 Color Encoding, #10 Border-Left, #17 Code Block |
| **Depth/Emphasis (D)** | 1+ | 2+ | #3 Solid Offset, #7 Zone Backgrounds, #16 Drop Cap |
| **Structure/Nav (N)** | 1+ | 2+ | #8 Scroll Witness, #12 Progressive Disclosure, #13 Dark Header, #14 Footer, #18 Data Table |

**CRITICAL:** The goal is vocabulary BREADTH (coverage across all 5 categories), not technique COUNT.

---

### Content-Mechanism Fit (When to Use Which)

**Hierarchical content (3-4 clear levels):**
- Border-Weight Gradient (#1): 4px→3px→2px→1px progressive
- Spacing Compression (#4): 80px→48px→32px→16px
- Typography Scale (#11): 2.5rem→1.625rem→1.375rem→1rem

**Semantic differentiation (callouts, categories):**
- 2-Zone Component DNA (#2): Label + body split
- Confidence Encoding via Color (#9): 6-color semantic palette
- Border-Left Semantic Signal (#10): 4px universal callout marker

**Dense/sparse rhythm (tutorials, narratives):**
- Dense/Sparse Alternation (#5): Section padding variation
- Progressive Disclosure (#12): Phase-driven density progression

**Visual emphasis (focal points):**
- Solid Offset Depth (#3): Featured diagrams, callouts
- Dark Header (#13): Page identity landmark
- Code Block (#17): Technical content anchors

**Structural landmarks:**
- Dark Header + 3px Border (#13): Top navigation
- Footer Mirror (#14): Bottom closure
- Scroll Witness (#8): Multi-section progress

**Tabular/reference content:**
- Data Table (#18): Structured information
- Bento Grid (#15): Task-based layouts

---

## 9. ANTI-PATTERNS (Mechanism Combinations That Don't Work)

### Anti-Pattern 1: Solid Offset + Box-Shadow
**Why incompatible:** Violates soul piece #2 (box-shadow: none). Solid offset IS the soul-compliant depth technique.

### Anti-Pattern 2: Border-Weight Gradient + Uniform Borders
**Why incompatible:** Contradicts mechanism purpose. Gradient encodes hierarchy — uniform borders have no differentiation.

### Anti-Pattern 3: Dense/Sparse Alternation + Uniform Padding
**Why incompatible:** Contradicts rhythm purpose. Alternation requires VARIATION (dense vs sparse) — uniform = no alternation.

### Anti-Pattern 4: Zone Backgrounds + Single Background Color
**Why incompatible:** Contradicts differentiation purpose. Zone system creates atmosphere through 4-color variety — single color = no zones.

### Anti-Pattern 5: Spacing Compression + Uniform Spacing
**Why incompatible:** Contradicts compression purpose. Mechanism encodes gradient (80px→16px) — uniform spacing has no gradient.

### Anti-Pattern 6: Mechanical Application (All h3 Get 3px Border)
**Why incompatible:** Violates semantic encoding. Border-weight should encode IMPORTANCE (critical h3 = 3px, supporting h3 = 1px), not element TYPE.

**Middle-tier example:** All h3 headings received 3px border uniformly. Perceptual audit: "slightly repetitive."

**Fix:** Use border-weight to encode semantic hierarchy:
```css
.section--critical h3 { border-left: 3px; }
.section--supporting h3 { border-left: 1px; }
.section--background h3 { border-left: 0; }
```

### Anti-Pattern 7: Bedrock Zone for Body Content
**Why incompatible:** Dark background (#1A1A1A) with light text creates high contrast that fatigues readers. Bedrock is ONLY for structural landmarks (header, footer) and featured visuals (diagrams). NEVER use for body content sections.

### Anti-Pattern 8: Over-Application (Stacking 3+ High-Impact Mechanisms)
**Why incompatible:** Perceptual overload. High-impact mechanisms (dark header, solid offset, border-weight, code blocks) create focal points. Stacking 3+ in same zone = visual noise.

**Rule:** Limit 1-2 high-impact mechanisms per section. Use LOW-impact mechanisms (spacing compression, width variation, typography scale) for supporting structure.

---

## 10. SUMMARY TABLE (Quick Reference)

| Section | Key Takeaway |
|---------|-------------|
| **1. Impact Profiles** | HIGH (5): #1, #3, #10, #13, #17. MEDIUM (9): #2, #5, #7, #9, #12, #14, #15, #16. LOW (4): #4, #6, #8, #11, #18. |
| **2. Application Modes** | PROGRESSIVE (gradient encoding): 4px→3px→2px→1px for stratified content. DISCRETE (categories): 4px/3px/1px for distinct types. ANTI-PATTERN: Uniform application = mechanical. |
| **3. Reinforcing Pairs** | Border-weight + color encoding (criticality). Spacing compression + zone backgrounds (depth). Border-weight + spacing (importance). Typography scale + zone backgrounds (levels). |
| **4. Zone Mappings** | Default: Sparse=intro, Dense=technical, Breathing=procedural, Bedrock=landmarks. Metaphor-driven alternatives OK (document deviation). NEVER bedrock for body content. |
| **5. Blind Spots** | Compositional fluency gap (vocabulary ≠ purpose). Communication isolation cost (speed ≠ quality). Rhythm variation missing. Heading ratio violated. Token compliance missing. Landmark check missing. Top-heavy weight. Per-category not isolated (n=1). |
| **6. Expectation Gaps** | Timing 8-11x faster (parallel model). Communication cost (quality gap). Designed paradox (2 dimensions). Mechanism count (8-12 not 8-10). Token compliance (judgment = 0%). |
| **7. Pre-Ceiling Readiness** | MUST DO: 11 items (inter-agent comms, M1 permanent, landmark gate, self-checks, ceiling minimums, interaction requirement, blind novelty, dual PA, timing estimate, plan-derived audit, catalog question). SHOULD DO: 11 items. COULD DO: 8 items. OPEN: 5 questions. |
| **8. Selection Guidance** | Ceiling: Derive from metaphor (multi-channel coherence), not lookup. Per-category minimums S:2+, H:2+, C:3+, D:2+, N:2+ → 11-15 mechanisms. Content-mechanism fit table provided. |
| **9. Anti-Patterns** | Solid offset + shadow (violates soul). Border gradient + uniform (no differentiation). Dense/sparse + uniform (no alternation). Mechanical application (all h3 = 3px). Bedrock for body (fatigue). Over-application (3+ high-impact stacked). |
| **10. This Summary** | You are reading it. |

---

## FINAL NOTES

**Total source material analyzed:** 5,467 lines across 6 files

**Key documents for Ceiling prompt:**
1. **Mechanism impact profiles** (HIGH/MEDIUM/LOW) guide deployment priority
2. **Application modes** (PROGRESSIVE vs DISCRETE) guide border-weight usage
3. **Reinforcing pairs** (3+ required) guide multi-channel coherence
4. **Zone mappings** (4-zone table) guide background selection
5. **Blind spots** (8 identified) guide what Ceiling must fix
6. **Expectation gaps** (5 documented) guide what to expect differently
7. **Pre-ceiling readiness** (11 MUST DO) guide what to build before launch
8. **Selection guidance** (metaphor-driven) guides Ceiling mechanism choices
9. **Anti-patterns** (8 documented) guide what to avoid

**Cross-validation:** All 18 mechanisms have impact profiles. All application modes validated against Middle experiment. All blind spots traced to specific defects. All expectation gaps have evidence.

**Deliverable:** COMPLETE. Ready for integration into Ceiling master execution prompt.

---

**Task #5 status:** COMPLETE. Marking task as completed.
