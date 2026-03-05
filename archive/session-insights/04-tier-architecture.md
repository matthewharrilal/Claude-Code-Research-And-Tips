# Tier Architecture: Individual → Combination → Multi-Pattern

**Date:** 2026-02-15
**Purpose:** Document the structural distinction between Middle/Ceiling/Flagship tiers based on mechanism ANALYSIS LEVEL, not just mechanism COUNT.
**Agent:** tier-architect
**Key Insight:** Tiers differ in HOW mechanisms are deployed, not just HOW MANY.

---

## EXECUTIVE SUMMARY

**The Core Distinction:**
- **Middle:** Individual mechanism deployment (each serves content independently)
- **Ceiling:** Mechanism COMBINATION deployment (multiple mechanisms encode the SAME semantic dimension = multi-channel coherence)
- **Flagship:** Multi-pattern COMPOSITION (CRESCENDO in Part 1, BENTO in Part 2, typed transitions between patterns)

**Why This Matters:** This distinction is NOT currently documented. The tier model explains Middle as "8-10 mechanisms" and Ceiling as "12-15 mechanisms" but does NOT explain that the actual difference is INDIVIDUAL vs COMBINED deployment. This analysis rectifies that gap.

**Critical Open Question:** Does prescribing "these mechanisms combine well" create a NEW form of template convergence at the combination level? Analysis below.

---

## PART 1: THE TIER ARCHITECTURE FRAMEWORK

### 1.1 Middle Tier: Individual Mechanism Deployment

**Definition:** Each mechanism serves content needs INDEPENDENTLY. Mechanisms may exist on the same page, but they operate on different aspects of the content.

**Concrete Example from Variant B (Phase D):**
```css
/* Individual mechanism #1: Border-left semantic signal */
.callout { border-left: 4px solid var(--color-primary); }

/* Individual mechanism #2: Zone background differentiation */
.section--sparse { background: var(--color-background); }
.section--moderate { background: #FFFFFF; }

/* Individual mechanism #3: Typographic scale jumping */
h1 { font-size: 2.5rem; }    /* Page title */
h2 { font-size: 1.625rem; }  /* Section heading */

/* Individual mechanism #4: 2-zone component DNA */
.component__label {
  font-size: 0.75rem;
  text-transform: uppercase;
}
.component__body {
  font-size: 1rem;
  line-height: 1.7;
}
```

**Key property:** Each mechanism operates on a DIFFERENT semantic dimension:
- Border-left → encodes component TYPE (callout, section, header)
- Zone backgrounds → encodes content DENSITY (sparse vs moderate sections)
- Typographic scale → encodes structural HIERARCHY (page > section)
- 2-zone DNA → encodes component STRUCTURE (label vs content)

**These mechanisms do NOT reinforce each other.** They coexist, but border-left doesn't vary based on zone background. Typography doesn't adjust based on component type. Each is an independent decision.

---

### 1.2 Ceiling Tier: Mechanism COMBINATION Deployment

**Definition:** Multiple mechanisms encode the SAME semantic dimension. When the semantic value changes (e.g., confidence decreases), MULTIPLE mechanisms shift together = multi-channel coherence.

**Concrete Example from OD-004 (Geological Confidence):**
```css
/* COMBINATION: 3 mechanisms encoding CONFIDENCE simultaneously */

/* Stratum 1: ESTABLISHED (highest confidence) */
.stratum--established {
  border-left: 4px solid var(--color-text);        /* Mechanism #1: thick border */
  padding: var(--space-10);                        /* Mechanism #4: sparse (40px) */
  background: var(--color-zone-sparse);            /* Mechanism #7: lightest background */
  line-height: 1.5;                                /* Compressed (terse assertions) */
}

/* Stratum 2: PROBABLE (moderate confidence) */
.stratum--probable {
  border-left: 3px solid var(--color-text);        /* Mechanism #1: medium border */
  padding: var(--space-8);                         /* Mechanism #4: moderate (32px) */
  background: var(--color-zone-moderate);          /* Mechanism #7: medium background */
  line-height: 1.6;                                /* Slightly expanded */
}

/* Stratum 3: SPECULATIVE (low confidence) */
.stratum--speculative {
  border-left: 2px solid var(--color-border);      /* Mechanism #1: thin border */
  padding: var(--space-5);                         /* Mechanism #4: dense (20px) */
  background: var(--color-zone-dense);             /* Mechanism #7: darker background */
  line-height: 1.7;                                /* Expanded (hedged, caveated) */
}

/* Stratum 4: OPEN (lowest confidence) */
.stratum--open {
  border-left: 1px solid var(--color-border);      /* Mechanism #1: thinnest border */
  padding: var(--space-4);                         /* Mechanism #4: densest (16px) */
  background: var(--color-zone-breathing);         /* Mechanism #7: darkest background */
  line-height: 1.8;                                /* Most expanded (many qualifiers) */
}
```

**Key property:** THREE mechanisms vary TOGETHER based on the SAME semantic (confidence):
- Border-weight gradient (4px → 3px → 2px → 1px)
- Spacing compression (40px → 32px → 20px → 16px)
- Zone background differentiation (sparse → moderate → dense → breathing)

**This is MULTI-CHANNEL COHERENCE.** The same semantic value (confidence) is encoded through MULTIPLE perceptual channels simultaneously. A reader sees thick borders + generous spacing + light backgrounds → intuits "high certainty" even without reading labels.

**Contrast with Middle:** If OD-004 were Middle-tier, it would use:
- Border-weight for TYPE (callout vs section)
- Spacing for DENSITY (sparse vs dense sections)
- Backgrounds for ZONES (header vs content vs footer)

All three mechanisms would be present, but encoding DIFFERENT semantics, not the SAME semantic through multiple channels.

---

### 1.3 Flagship Tier: Multi-Pattern COMPOSITION

**Definition:** Multiple density PATTERNS deployed sequentially on the same page, with typed transitions between patterns.

**Concrete Example from CD-006 (Meta-Tutorial):**
```css
/* PART 1: SPIRAL pattern (Section 1 — foundational concepts) */
.section--intro {
  display: flex;
  flex-direction: column;
  align-items: center;           /* Isolated, centered */
  padding: var(--space-20);      /* Most spacious (80px) */
  background: var(--color-zone-sparse);
}

/* TRANSITION 1: BREATHING (Spiral → Z-Pattern) */
.transition--breathing {
  height: 48px;                  /* Vertical space */
  border-bottom: 3px solid var(--color-border);
  margin-bottom: var(--space-12);
}

/* PART 2: Z-PATTERN (Section 2 — Q&A structure) */
.section--qa {
  display: grid;
  grid-template-columns: 1fr 2fr;  /* Asymmetric Z */
  gap: var(--space-8);
  padding: var(--space-12);        /* Moderate spacing (48px) */
}

.question {
  max-width: 90%;
  margin-left: 5%;                 /* Narrow channel */
}
.answer {
  max-width: 100%;                 /* Full pool */
}

/* TRANSITION 2: SMOOTH (Z-Pattern → Bento) */
.transition--smooth {
  /* Shared component bridges the patterns */
  border-left: 4px solid var(--color-primary);
  padding: var(--space-8);
}

/* PART 3: BENTO GRID (Section 3 — reference cards) */
.section--reference {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: var(--space-8);         /* Dense (32px) */
}

.bento-cell--large {
  grid-column: span 2;
  grid-row: span 2;
}
```

**Key property:** THREE distinct patterns (Spiral, Z-Pattern, Bento) on ONE page, with explicit TRANSITIONS between them.

**Why this is Flagship:** CD-006 deploys 5 axis patterns sequentially (Spiral → Z → Bento → F-Pattern → Choreography), each with transition grammar (BREATHING, SMOOTH, BRIDGE). This is multi-pattern COMPOSITION, not just multi-mechanism combination.

**Contrast with Ceiling:** OD-004 uses ONE pattern (geological stratification) with mechanism COMBINATIONS within that pattern. CD-006 uses MULTIPLE patterns (5 axis patterns) with transitions between them.

---

## PART 2: MECHANISM COMBINATION MAP

**Purpose:** Identify which mechanisms NATURALLY REINFORCE each other by encoding the same semantic dimension.

### 2.1 Combination Families (By Shared Semantic)

#### COMBINATION FAMILY A: Hierarchy Encoding
**Shared semantic:** Structural or epistemic importance/certainty/priority

**Mechanism triad:**
1. **Border-Weight Gradient** (#1) — Visual weight through thickness (4px/3px/2px/1px)
2. **Spacing Compression** (#4) — Spatial density through padding (80px → 16px)
3. **Typographic Scale Jumping** (#11) — Size hierarchy through type scale (~1.5x ratio)

**Where found together:**
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

**Why they combine well:** All three encode "importance" through MAGNITUDE (bigger = more important). Perceptual alignment across channels.

---

#### COMBINATION FAMILY B: Zone Differentiation
**Shared semantic:** Spatial sections or content categories

**Mechanism pair:**
1. **Zone Background Differentiation** (#7) — Color progression (sparse → moderate → dense → breathing)
2. **Border-Left Semantic Signal** (#10) — Color-coded borders (blue/green/coral/amber/purple)

**Where found together:**
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

**Why they combine well:** Both use COLOR to encode category. Background = broad zone, border = focused element within zone.

---

#### COMBINATION FAMILY C: Density Rhythm
**Shared semantic:** Content pacing (sparse/breathing vs dense/compact)

**Mechanism triple:**
1. **Dense/Sparse Alternation** (#5) — Section-level rhythm (80px sparse, 32px dense)
2. **Spacing Compression** (#4) — Padding gradient within sections
3. **Zone Background Differentiation** (#7) — Chromatic reinforcement (sparse = light, dense = dark)

**Where found together:**
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

**Why they combine well:** All three encode "breathing space" (sparse) vs "information density" (dense). Padding, margins, and backgrounds shift TOGETHER.

---

#### COMBINATION FAMILY D: Component Structure
**Shared semantic:** Internal component organization (label vs content zones)

**Mechanism pair:**
1. **2-Zone Component DNA** (#2) — Structural split (label + body)
2. **Typographic Scale Jumping** (#11) — Type differentiation (0.75rem label, 1rem body)

**Where found together:**
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

**Why they combine well:** Both differentiate meta-level (label) from content-level (body). Structure + typography reinforce the same semantic split.

---

#### COMBINATION FAMILY E: Depth Encoding
**Shared semantic:** Layering or stratification (surface vs deep)

**Mechanism triple:**
1. **Border-Weight Gradient** (#1) — Visual weight (4px = surface, 1px = deep)
2. **Spacing Compression** (#4) — Spatial compression (sparse surface, dense depth)
3. **Zone Background Differentiation** (#7) — Color darkening (light surface, dark depth)

**Where found together:**
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

**Why they combine well:** All three encode "deeper = more compressed = more consolidated." Geological metaphor maps to perceptual primitives (depth = weight + density + darkness).

---

### 2.2 Mechanism Combination Matrix

**Cross-property combination analysis:** Which mechanisms from DIFFERENT property categories combine well?

| Spatial | Temporal | Material | Behavioral | Relational | Combination Rationale |
|---------|----------|----------|------------|------------|----------------------|
| Border-Weight Gradient (#1) | — | Typographic Scale (#11) | — | — | Both encode hierarchy through MAGNITUDE |
| Spacing Compression (#4) | Dense/Sparse Alternation (#5) | Zone Backgrounds (#7) | — | — | All three encode DENSITY rhythm |
| Border-Weight Gradient (#1) | — | Zone Backgrounds (#7) | — | — | Both encode DEPTH (weight + darkness) |
| 2-Zone DNA (#2) | — | Typographic Scale (#11) | — | — | Both encode STRUCTURE (label vs body) |
| Spacing Compression (#4) | Progressive Disclosure (#12) | — | — | — | Both encode PROGRESSION (gradual compression) |
| Width Variation (#6) | — | Zone Backgrounds (#7) | — | — | Both encode CATEGORY (narrow vs wide + color) |

**Key insight:** Mechanisms from DIFFERENT property categories (Spatial + Material) combine MORE powerfully than mechanisms from the SAME category because they encode the same semantic through DIFFERENT perceptual channels (space + color, weight + size, etc.).

---

### 2.3 Anti-Combinations (Mechanisms That Conflict)

**Mechanisms that should NOT be combined:**

#### CONFLICT TYPE 1: Semantic Overload
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

**Why it fails:** Border-weight can encode ONE semantic dimension per element. Trying to encode both TYPE and PRIORITY simultaneously creates conflict.

**Resolution:** Use border-weight for ONE semantic, use DIFFERENT mechanism for the other (e.g., border-weight = priority, background color = type).

---

#### CONFLICT TYPE 2: Perceptual Contradiction
**Problem:** Two mechanisms encoding OPPOSITE values for the same semantic

**Example:**
```css
/* CONFLICT: Padding says "sparse," background says "dense" */
.section--confused {
  padding: var(--space-20);              /* Sparse (80px) */
  background: var(--color-zone-dense);   /* Dense (darker) */
}
```

**Why it fails:** Generous padding signals "breathing space" (sparse), but dark background signals "compressed" (dense). Perceptual contradiction confuses readers.

**Resolution:** Align mechanisms to encode the SAME value (sparse padding + light background, OR dense padding + dark background).

---

#### CONFLICT TYPE 3: Redundant Encoding
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

**Why it's redundant:** Border-weight ALONE encodes priority (4px = high). Border color ALONE encodes priority (red = high). Using both adds NO perceptual value—it's just louder, not clearer.

**Resolution:** Use ONE mechanism for priority, reserve the OTHER for a DIFFERENT semantic (e.g., border-weight = priority, border-color = type).

---

### 2.4 Combination Catalog (Proven Pairs/Triples)

**Ceiling-tier builders should SAMPLE FROM these proven combinations:**

| Combination Name | Mechanisms | Shared Semantic | Where Proven | Tier |
|------------------|-----------|----------------|--------------|------|
| **Hierarchy Triad** | Border-Weight (#1) + Spacing (#4) + Typography (#11) | Importance/certainty | OD-004, DD-006 | Ceiling |
| **Zone Pair** | Zone Backgrounds (#7) + Border-Color (#9) | Category/section | DD-001, OD-004 | Middle |
| **Density Triple** | Dense/Sparse Alt. (#5) + Spacing (#4) + Backgrounds (#7) | Rhythm/pacing | DD-006, DD-001 | Ceiling |
| **Component Pair** | 2-Zone DNA (#2) + Typography (#11) | Structure (label/body) | ALL case studies | Middle |
| **Depth Triple** | Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) | Layering/depth | OD-004, DD-004 | Ceiling |
| **Emphasis Pair** | Border-Left Signal (#10) + Solid Offset (#3) | Featured content | OD-001, CD-006 | Middle |

**Usage guidance:**
- **Middle tier:** Use proven PAIRS (2 mechanisms encoding same semantic)
- **Ceiling tier:** Use proven TRIPLES (3+ mechanisms encoding same semantic)
- **Flagship tier:** Use multiple TRIPLES across different patterns (e.g., Hierarchy Triple in Part 1 Spiral, Density Triple in Part 2 Bento)

---

## PART 3: MULTI-PATTERN COMPOSITION (FLAGSHIP)

**Definition:** Multi-pattern composition is the deployment of 3-5 distinct DENSITY PATTERNS on one page, with typed TRANSITIONS between patterns.

### 3.1 Pattern Typology

**From AD-F-024 (axis pattern catalog):**

| Pattern | Structure | Best For | Isolation Level |
|---------|-----------|----------|----------------|
| **Spiral** | Concentric circles, center-aligned | Foundational concepts, intros | MOST isolated (hardest transitions) |
| **Z-Pattern** | Asymmetric 2-column grid | Q&A, dialogues, comparisons | Moderate isolation |
| **F-Pattern** | Standard left-aligned flow | Linear reading, narratives | Low isolation (easiest transitions) |
| **Bento Grid** | Multi-column variable spans | Reference cards, galleries | Moderate isolation |
| **Choreography** | Sequential attention flow | Step-by-step procedures | Low isolation |

**Flagship pages deploy 3-5 of these sequentially.**

---

### 3.2 Transition Typology

**From AD-F-025 (transition grammar):**

| Transition Type | CSS Pattern | When to Use | Example (CD-006) |
|----------------|-------------|-------------|------------------|
| **BREATHING** | Vertical space (48px) + 3px rule | Exiting SPIRAL (most isolated) | Spiral → Z-Pattern |
| **SMOOTH** | Shared component bridge | Between compatible patterns | Z-Pattern → Bento |
| **BRIDGE** | Prose paragraph connector | Medium cognitive shift | Bento → F-Pattern |
| **ABRUPT** | Immediate switch (no transition) | Same-family patterns | F-Pattern → Choreography |

**CSS Evidence (CD-006 transitions):**
```css
/* BREATHING transition (Spiral → Z) */
.transition--breathing {
  height: 48px;
  border-bottom: 3px solid var(--color-border);
  margin-bottom: var(--space-12);
}

/* SMOOTH transition (Z → Bento) */
.transition--smooth {
  /* Shared callout component appears at end of Z, start of Bento */
  border-left: 4px solid var(--color-primary);
  padding: var(--space-8);
  margin: var(--space-12) 0;
}

/* BRIDGE transition (Bento → F) */
.transition--bridge {
  /* Prose paragraph with explicit "Now we move to..." language */
  font-size: var(--type-body);
  line-height: 1.8;
  max-width: 65ch;
  margin: var(--space-16) 0;
}
```

---

### 3.3 Multi-Pattern Composition Requirements

**For a page to qualify as Flagship multi-pattern composition:**

1. **3+ distinct patterns deployed** (not just 3 sections with same pattern)
2. **Typed transitions between patterns** (BREATHING/SMOOTH/BRIDGE, not arbitrary spacing)
3. **Each pattern serves different content needs** (not decorative — must map to content structure)
4. **Mechanism combinations WITHIN each pattern** (e.g., Spiral uses Hierarchy Triple, Bento uses Zone Pair)

**Example pattern sequence (CD-006):**
- **Part 1:** Spiral (foundational concepts) — uses Hierarchy Triple (borders + spacing + type)
- **Transition 1:** BREATHING (48px + rule)
- **Part 2:** Z-Pattern (Q&A) — uses Width Variation (#6) + Border-Color (#9)
- **Transition 2:** SMOOTH (shared callout)
- **Part 3:** Bento (reference cards) — uses Zone Pair (backgrounds + borders)
- **Transition 3:** BRIDGE (prose paragraph)
- **Part 4:** F-Pattern (linear narrative) — uses Dense/Sparse Alternation (#5)
- **Transition 4:** ABRUPT (same family)
- **Part 5:** Choreography (step-by-step) — uses Progressive Disclosure (#12)

**Result:** 5 patterns, 4 typed transitions, ~1,800 CSS lines, 16-18 mechanisms deployed.

---

## PART 4: PHASE 4 INSTRUCTIONS PER TIER

**Skill enrichment recommendations for tension-composition/SKILL.md Phase 4:**

### 4.1 Middle Tier Phase 4

**Current instruction (WRONG):**
> "Sample 2-4 mechanisms most relevant to YOUR metaphor."

**Proposed instruction (CORRECT):**
> **Phase 4.0 (Middle Tier): Individual Mechanism Deployment**
>
> Deploy 8-10 mechanisms from the catalog. Each mechanism should serve a DIFFERENT content need independently:
>
> **Minimum per category (1+ each):**
> - Spatial (1+): Border-weight gradient, spacing compression, width variation, zone backgrounds
> - Temporal (1+): Dense/sparse alternation, progressive disclosure
> - Material (1+): Typographic scale, zone backgrounds, border-color encoding
> - Behavioral (1+): Scroll witness, drop cap, solid offset depth
> - Relational (1+): 2-zone DNA, bento grid
>
> **Key principle:** Mechanisms operate INDEPENDENTLY. Border-weight encodes TYPE, spacing encodes DENSITY, backgrounds encode ZONES. Each serves a different semantic.
>
> **Verification question:** Can you remove ONE mechanism without affecting the others? If yes, deployment is independent (Middle). If no, mechanisms are combined (Ceiling).

---

### 4.2 Ceiling Tier Phase 4

**Current instruction (WRONG):**
> "Sample 2-4 mechanisms most relevant to YOUR metaphor."

**Proposed instruction (CORRECT):**
> **Phase 4.0 (Ceiling Tier): Mechanism COMBINATION Deployment**
>
> Deploy 12-15 mechanisms with AT LEAST 2 mechanism COMBINATIONS where multiple mechanisms encode the SAME semantic dimension.
>
> **Combination requirement:**
> - Identify 2+ shared semantics in your content (e.g., "confidence," "depth," "priority")
> - For EACH shared semantic, deploy 2-3 mechanisms that vary TOGETHER
>
> **Example:**
> If your metaphor has "certainty gradient" (high → low):
> - Border-weight: 4px (certain) → 1px (uncertain)
> - Spacing: 40px (certain) → 16px (uncertain)
> - Backgrounds: light (certain) → dark (uncertain)
>
> All three shift TOGETHER as certainty changes = multi-channel coherence.
>
> **Combination Catalog (select 2+ proven combinations):**
> - Hierarchy Triad: Border-Weight (#1) + Spacing (#4) + Typography (#11)
> - Depth Triple: Border-Weight (#1) + Spacing (#4) + Backgrounds (#7)
> - Density Triple: Dense/Sparse Alt. (#5) + Spacing (#4) + Backgrounds (#7)
> - Zone Pair: Backgrounds (#7) + Border-Color (#9)
> - Component Pair: 2-Zone DNA (#2) + Typography (#11)
>
> **Deliverable:** Combination table documenting 2+ combinations:
>
> | Shared Semantic | Mechanism 1 | Mechanism 2 | Mechanism 3 | Where Applied |
> |----------------|------------|------------|------------|---------------|
> | Confidence | Border-weight (4px→1px) | Spacing (40px→16px) | Backgrounds (light→dark) | All strata |
> | Component structure | 2-zone DNA | Typography (0.75rem→1rem) | — | All callouts |
>
> **Verification question:** When the semantic value changes (confidence decreases), do MULTIPLE mechanisms shift together? If yes, combination exists (Ceiling). If no, mechanisms are independent (Middle).

---

### 4.3 Flagship Tier Phase 4

**Current instruction (WRONG):**
> "Sample 2-4 mechanisms most relevant to YOUR metaphor."

**Proposed instruction (CORRECT):**
> **Phase 4.0 (Flagship Tier): Multi-Pattern COMPOSITION**
>
> Deploy 16-18 mechanisms across 3-5 distinct DENSITY PATTERNS with typed transitions.
>
> **Multi-pattern requirement:**
> 1. **Identify 3-5 content sections** with DIFFERENT structural needs
> 2. **Map each section to a density pattern:**
>    - Foundational/intro → SPIRAL
>    - Q&A/dialogue → Z-PATTERN
>    - Reference/cards → BENTO
>    - Linear narrative → F-PATTERN
>    - Step-by-step → CHOREOGRAPHY
> 3. **Select transition types** (BREATHING/SMOOTH/BRIDGE/ABRUPT) based on pattern isolation
> 4. **Deploy mechanism COMBINATIONS within EACH pattern:**
>    - Spiral: Hierarchy Triple (borders + spacing + type)
>    - Z-Pattern: Width Variation + Border-Color
>    - Bento: Zone Pair (backgrounds + borders)
>    - F-Pattern: Dense/Sparse Alternation
>    - Choreography: Progressive Disclosure
>
> **Deliverable:** Pattern sequence table:
>
> | Section | Pattern | Mechanism Combinations | Transition Type | CSS Evidence |
> |---------|---------|------------------------|----------------|--------------|
> | Part 1 (intro) | Spiral | Hierarchy Triple | BREATHING → Part 2 | [CSS] |
> | Part 2 (Q&A) | Z-Pattern | Width Var. + Border-Color | SMOOTH → Part 3 | [CSS] |
> | Part 3 (reference) | Bento | Zone Pair | BRIDGE → Part 4 | [CSS] |
> | Part 4 (narrative) | F-Pattern | Dense/Sparse Alt. | ABRUPT → Part 5 | [CSS] |
> | Part 5 (steps) | Choreography | Progressive Disclosure | — | [CSS] |
>
> **Transition CSS required:**
> - BREATHING: 48px vertical space + 3px rule
> - SMOOTH: Shared component (callout/code block) at boundary
> - BRIDGE: Prose paragraph with "Now we..." language
> - ABRUPT: Immediate switch (no transition CSS)
>
> **Verification question:** Are there 3+ DISTINCT patterns (not just 3 sections with same pattern)? Are transitions TYPED (not arbitrary spacing)? If yes, multi-pattern composition exists (Flagship).

---

## PART 5: CRITICAL ANALYSIS — THE COMBINATION CONVERGENCE RISK

**The Question:** Does prescribing "these mechanisms combine well" create a NEW form of template convergence at the combination level?

### 5.1 The Risk

**Current anti-gravity:** Phase-gated library access prevents METAPHOR convergence (two pages on similar content don't both use "geological strata").

**New risk:** If Ceiling tier prescribes "use Hierarchy Triad for confidence encoding," do all confidence-encoding pages converge to the SAME CSS patterns (thick borders + sparse padding + large type)?

**Evidence suggesting YES (convergence risk is real):**

1. **OD-004 and DD-006 both use Hierarchy Triad** for different semantics (confidence vs scale), but the CSS is structurally identical:
   ```css
   /* OD-004 (confidence) */
   .stratum--established { border-left: 4px; padding: 40px; font-size: 1.625rem; }

   /* DD-006 (scale) */
   .scale--page { border-left: 4px; padding: 80px; font-size: 2.5rem; }
   ```
   The MECHANISM COMBINATION is identical. Only the METAPHOR LABELS differ ("stratum" vs "scale").

2. **If 40-50% of pages are Ceiling tier**, and Ceiling tier means "use 2+ proven combinations," and there are only 6 proven combinations, then by pigeonhole principle, MANY pages will use the SAME combinations.

3. **Combination-level convergence is MORE visible than metaphor-level convergence.** Readers may not notice that two pages use different metaphors ("geological" vs "architectural"), but they WILL notice that both pages have thick borders + sparse padding + large headings for the "important" sections.

---

### 5.2 The Counterargument (Why Convergence May Be Acceptable)

**Evidence suggesting NO (convergence is acceptable or illusory):**

1. **Mechanism combinations are VOCABULARY, not templates.** Using "Hierarchy Triad" is like using the word "run" in English. Many sentences contain "run," but the sentences aren't copies of each other. The combination is a TOOL, not a PATTERN.

2. **Combination-level similarity is DESIGN SYSTEM COHERENCE, not template convergence.** If all KortAI pages use thick borders for important content and thin borders for less important content, that's IDENTITY (family resemblance), not convergence (copies).

3. **The NAME TEST still applies.** Remove the metaphor name from the CSS. Does the combination description still make sense?
   - "Thick borders + sparse padding + large headings encode importance" — YES, makes sense (transferable combination)
   - "Geological strata with bedrock compression" — NO, doesn't make sense (metaphor-specific)

   If the combination passes the Name Test, it's vocabulary (acceptable similarity). If it fails, it's a template (convergence).

4. **Combinations can be CUSTOMIZED within the formula.** "Hierarchy Triad" doesn't prescribe:
   - WHICH border weights (4px/3px/2px/1px vs 4px/2px/1px vs 3px/1px)
   - WHICH padding values (80px → 16px vs 64px → 24px vs 48px → 32px)
   - WHICH type scale (2.5rem → 1rem vs 1.625rem → 1rem)

   Two pages using "Hierarchy Triad" can have DIFFERENT perceptual weight because the VALUES differ, even if the STRUCTURE is the same.

---

### 5.3 The Resolution: Mechanism Combination Anti-Gravity

**Proposed NEW anti-gravity mechanism (M19: Combination Customization Mandate):**

**RULE:** When using a proven combination (Hierarchy Triad, Depth Triple, etc.), you MUST customize AT LEAST ONE of the following:

1. **Which specific mechanisms** (e.g., Hierarchy Triad normally uses Border-Weight + Spacing + Typography, but YOUR version uses Border-Weight + Spacing + Zone Backgrounds)
2. **The value progression** (e.g., 4px→3px→2px→1px vs 4px→2px→1px vs 3px→2px→1px)
3. **The perceptual direction** (e.g., thick = important vs thin = important — ONLY if metaphor justifies inversion)

**Deliverable:** Combination customization justification table:

| Combination | Standard Formula | Your Customization | Why This Customization |
|-------------|------------------|-------------------|----------------------|
| Hierarchy Triad | Border-Weight (#1) + Spacing (#4) + Typography (#11) | Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) | My metaphor uses chromatic depth (light→dark), not type scale |
| Depth Triple | 4px→3px→2px→1px | 4px→2px→1px (skip 3px) | My content has 3 levels (high/medium/low), not 4 |

**Passing criteria:** If 2+ pages use the SAME combination with the SAME mechanisms AND the SAME value progression, convergence is detected. One page must customize or regenerate.

**Why this works:** Combination formulas become STARTING POINTS (grammar), not TEMPLATES (prescribed solutions). Customization mandate enforces divergence at the combination level, just as Phase 3.5 enforces divergence at the metaphor level.

---

### 5.4 Final Verdict

**Is mechanism combination anti-gravity needed?**

**YES, but SCOPED.**

**Scope 1: Ceiling tier ONLY.** Middle tier uses individual mechanisms (no combinations), so no risk. Flagship tier uses multi-pattern composition (combinations are subsumed by pattern variety), so lower risk.

**Scope 2: When 2+ SHARED SEMANTICS use the SAME combination.** If Page A uses Hierarchy Triad for "confidence" and Page B uses Hierarchy Triad for "priority," that's DIFFERENT semantics (acceptable). If both use it for "confidence," customization is required.

**Scope 3: Customization, not regeneration.** Unlike metaphor convergence (which requires regeneration), combination convergence only requires VALUE or MECHANISM customization. Less disruptive.

**Implementation:** Add M19 (Combination Customization Mandate) to compositional-core/validation/anti-gravity-compliance.md, apply ONLY to Ceiling tier Phase 4.

---

## PART 6: MODIFICATION RECOMMENDATIONS

### 6.1 ADOPT (From Rigidity Research)

**Fractal Gate (Phase 3.5F):** Per-category mechanism minimum instead of total count.

**Current:** "Sample 2-4 mechanisms" (total count)
**New (Middle):** "1+ mechanism per category (Spatial/Temporal/Material/Behavioral/Relational)"
**New (Ceiling):** "1+ mechanism per category + 2 combinations"
**New (Flagship):** "1+ mechanism per category + 3 combinations + 3 patterns"

**Why:** Category coverage ensures breadth (all 5 property types represented). Prevents skewing toward Spatial mechanisms only (current failure mode).

---

### 6.2 MODIFY (From Richness Research)

**Mechanism Mandate:** Change "sample 2-4" to per-tier specifications.

**Middle:** 8-10 mechanisms, individual deployment
**Ceiling:** 12-15 mechanisms, 2+ combinations
**Flagship:** 16-18 mechanisms, 3+ combinations, 3+ patterns

**Why:** Mechanism count correlates with richness (confirmed by all 11 research agents), but ONLY when paired with deployment level (individual/combination/composition).

---

**Coherence Check:** Add 3-transition minimum (currently no minimum).

**Current:** "Verify transitions between patterns" (judgment-based)
**New:** "3+ typed transitions required for multi-pattern composition. Document transition type (BREATHING/SMOOTH/BRIDGE/ABRUPT) and CSS implementation."

**Why:** Binary requirement (3 transitions) achieves 100% agent compliance. Judgment-based "verify transitions" achieves ~0% compliance.

---

### 6.3 REJECT (From Richness Research)

**Technique Count Metric:** Richness is NOT linear with technique count.

**Current assumption (WRONG):** "More techniques = richer page"
**Reality:** "Richness = content-mechanism FIT + mechanism deployment depth"

**Why reject:** DD-006 deployed 23/44 techniques and scored 36/40. CD-006 deployed 44/44 techniques and scored 39/40. The difference is 21 techniques but only 3 quality points. Diminishing returns are severe above ~15 mechanisms.

**Implication:** Do NOT mandate "deploy all 18 mechanisms." Instead, mandate deployment LEVEL (individual/combination/composition), not deployment COUNT.

---

## PART 7: MECHANISM COMBINATION MAP (REFERENCE TABLE)

**For Ceiling tier builders: Sample 2+ combinations from this catalog.**

| Combination Name | Mechanisms | Shared Semantic | CSS Example (OD-004) | Tier |
|------------------|-----------|----------------|---------------------|------|
| **Hierarchy Triad** | Border-Weight (#1) + Spacing (#4) + Typography (#11) | Importance/certainty | 4px+40px+1.625rem (high) → 1px+16px+1rem (low) | Ceiling |
| **Depth Triple** | Border-Weight (#1) + Spacing (#4) + Backgrounds (#7) | Layering/depth | 4px+40px+light (surface) → 1px+16px+dark (depth) | Ceiling |
| **Density Triple** | Dense/Sparse Alt. (#5) + Spacing (#4) + Backgrounds (#7) | Rhythm/pacing | Sparse: 80px+light, Dense: 24px+white | Ceiling |
| **Zone Pair** | Backgrounds (#7) + Border-Color (#9) | Category/section | Blue bg + blue border, Green bg + green border | Middle |
| **Component Pair** | 2-Zone DNA (#2) + Typography (#11) | Structure (label/body) | Label: 0.75rem uppercase, Body: 1rem normal | Middle |
| **Emphasis Pair** | Border-Left Signal (#10) + Solid Offset (#3) | Featured content | 4px red border + 4px black ::after offset | Middle |

**Usage:**
- Middle: Select 1-2 PAIRS
- Ceiling: Select 2-3 TRIPLES or 3-4 PAIRS
- Flagship: Select 3+ TRIPLES across different patterns

---

## PART 8: SHOWCASE EXAMPLES (GROUNDED IN ACTUAL CSS)

### Example 1: Middle Tier (Individual Deployment)

**Page:** Hypothetical API reference (not yet built)

**Mechanisms deployed (8 total):**
1. Border-Left Signal (#10) — Encodes HTTP method (GET=blue, POST=green, DELETE=red)
2. Zone Backgrounds (#7) — Encodes section type (endpoint=cream, example=white)
3. Typographic Scale (#11) — Encodes hierarchy (h1=2.5rem, h2=1.625rem, h3=1.375rem)
4. 2-Zone DNA (#2) — Encodes component structure (all callouts)
5. Code Block (#17) — Encodes code examples (dark bg + syntax highlighting)
6. Data Table (#18) — Encodes parameter tables (mono headers + 3px borders)
7. Dark Header (#13) — Page-level header with navigation
8. Spacing Compression (#4) — Encodes density (endpoint sections 32px, example sections 16px)

**Key property:** ALL 8 mechanisms serve DIFFERENT semantics:
- Border-color → HTTP method
- Backgrounds → section type
- Typography → structural hierarchy
- 2-zone DNA → component structure
- Code/table → content type
- Header → navigation
- Spacing → density

**No combinations.** Each mechanism is independent.

---

### Example 2: Ceiling Tier (Combination Deployment)

**Page:** OD-004 (Geological Confidence) — ACTUAL case study

**Mechanisms deployed (13 total):**
1. Border-Weight Gradient (#1) — 4px→3px→2px→1px (confidence)
2. Spacing Compression (#4) — 40px→32px→20px→16px (confidence)
3. Zone Backgrounds (#7) — sparse→moderate→dense→breathing (confidence)
4. Typographic Scale (#11) — 1.625rem→1.375rem→1rem (confidence)
5. Border-Left Signal (#10) — Blue/green/coral accents (callout type)
6. 2-Zone DNA (#2) — Label + body (all callouts)
7. Dark Header (#13) — Geological Survey header
8. Footer Mirror (#14) — Symmetry with header
9. Stratum Boundary Markers — 48px + 3px rule between strata
10. Code Block (#17) — Code examples (dark bg)
11. Confidence Encoding via Color (#9) — Blue (info), Green (success), Coral (warning)
12. Data Table (#18) — Evidence tables (mono headers)
13. Progressive Disclosure (#12) — Confidence filter tabs

**COMBINATIONS (2 triples):**

**Triple 1: Hierarchy/Confidence (4 mechanisms):**
- Border-Weight: 4px (established) → 1px (open)
- Spacing: 40px (established) → 16px (open)
- Backgrounds: light (established) → dark (open)
- Typography: 1.625rem (established) → 1rem (open)

**Triple 2: Component Structure (2 mechanisms):**
- 2-Zone DNA: label + body
- Typography: 0.75rem (label) vs 1rem (body)

**Result:** 13 mechanisms, 2 combinations, multi-channel coherence = Ceiling tier.

---

### Example 3: Flagship Tier (Multi-Pattern Composition)

**Page:** CD-006 (Meta-Tutorial) — ACTUAL case study

**Mechanisms deployed (17 total):**
1-13: Same as OD-004 (all Ceiling mechanisms)
14. Sequential Axis Deployment — 5 patterns (Spiral/Z/Bento/F/Choreography)
15. Transition Grammar — BREATHING/SMOOTH/BRIDGE transitions
16. Fractal Density (5 scales) — Navigation/Page/Section/Component/Character
17. Compound Combination — DD+OD+AD simultaneously

**PATTERN SEQUENCE (5 patterns):**

**Part 1: SPIRAL (Section 1 — tokens/soul)**
- Combination: Hierarchy Triple (borders + spacing + type)
- CSS: Center-aligned, 80px padding, 4px borders
- Transition out: BREATHING (48px + rule)

**Part 2: Z-PATTERN (Section 2 — Q&A)**
- Combination: Width Variation (#6) + Border-Color (#9)
- CSS: 2-column grid, narrow questions (90%), full answers (100%)
- Transition out: SMOOTH (shared callout)

**Part 3: BENTO (Sections 3+6 — reference)**
- Combination: Zone Pair (backgrounds + borders)
- CSS: 2-column grid, variable spans, card-based layout
- Transition out: BRIDGE (prose paragraph)

**Part 4: F-PATTERN (Section 4 — narrative)**
- Combination: Dense/Sparse Alternation (#5)
- CSS: Left-aligned, alternating section padding (64px → 32px)
- Transition out: ABRUPT (same family)

**Part 5: CHOREOGRAPHY (Section 7 — steps)**
- Combination: Progressive Disclosure (#12)
- CSS: Sequential steps with numbered markers, increasing compression
- Transition out: —

**Result:** 17 mechanisms, 4 combinations, 5 patterns, 4 typed transitions = Flagship tier.

---

## CONCLUSION

**Core Findings:**

1. **Tiers differ in mechanism ANALYSIS LEVEL, not just COUNT:**
   - Middle: Individual (each mechanism serves different content need)
   - Ceiling: Combination (2-3 mechanisms encode same semantic)
   - Flagship: Composition (3-5 patterns with typed transitions)

2. **6 proven mechanism combinations exist:**
   - Hierarchy Triad, Depth Triple, Density Triple (Ceiling)
   - Zone Pair, Component Pair, Emphasis Pair (Middle)

3. **Combination-level convergence is a REAL risk** requiring NEW anti-gravity (M19: Combination Customization Mandate).

4. **Multi-pattern composition requires typed transitions** (BREATHING/SMOOTH/BRIDGE/ABRUPT), not arbitrary spacing.

5. **Phase 4 instructions need tier-specific enrichment:**
   - Middle: "Deploy 8-10 mechanisms independently"
   - Ceiling: "Deploy 12-15 mechanisms with 2+ combinations"
   - Flagship: "Deploy 16-18 mechanisms across 3+ patterns with typed transitions"

**Highest-Impact Change:** Add Combination Catalog (Part 7) to compositional-core/grammar/mechanism-catalog.md, with explicit "DO combine" and "DON'T combine" guidance.

**Critical Gap Filled:** This analysis documents the individual→combination→composition distinction that was implicit in case studies but NEVER explicitly stated in tier methodology.

---

**END TIER ARCHITECTURE ANALYSIS**

---

## ADDENDUM: CROSS-REFERENCE WITH EXTRACTION CHAIN ANALYSIS

**Date:** 2026-02-15
**Cross-reference:** ephemeral/session-insights/05-extraction-chain.md
**Purpose:** Identify anti-gravity gaps and information loss risks affecting the mechanism combination map

---

### A.1 Combination-Level Anti-Gravity Gap Confirmation

**Extraction chain finding (Section 4):**
> "Anti-gravity mechanisms (R1-R6) protect against case study copying at the implementation level but DO NOT protect against mechanism combination convergence at the structural level."

**Cross-reference with M19 proposal (Part 5.3):**
My M19 (Combination Customization Mandate) addresses the EXACT gap the extraction chain identified. The chain's R7 proposal (Combination Diversity Mandate) and my M19 proposal are COMPLEMENTARY, not redundant:

**R7 (Extraction Chain):** Prevents concentration in ONE mechanism category (forces sampling from 4 of 5 categories)
- **Protects against:** Deploying OD-004's exact category fingerprint (3 mechanisms from Hierarchy Encoding)
- **Scope:** Category distribution
- **Enforcement:** "If 3+ from one category → justify OR rebalance"

**M19 (This Analysis):** Requires customization when using proven combinations
- **Protects against:** Deploying OD-004's exact COMBINATION (border-weight + spacing + backgrounds)
- **Scope:** Specific combination formulas
- **Enforcement:** "Customize mechanisms OR values OR direction"

**CRITICAL FINDING:** We need BOTH.
- R7 prevents category concentration (macro-level divergence)
- M19 prevents combination copying (micro-level divergence)

**Example scenario:**
- Builder deploys border-weight (#1, Category B), spacing (#4, Category B), zone backgrounds (#7, Category D), typography (#11, Category B)
- **R7 check:** 3 from Category B, 1 from Category D = triggers alert (concentration in Hierarchy Encoding)
- Builder justifies: "My content requires hierarchy encoding"
- **R7 PASSES** (justification accepted)
- **M19 check:** Border-weight + spacing + zone backgrounds = OD-004's Hierarchy Triad combination
- Builder must customize: uses border-weight + spacing + TYPOGRAPHY (not backgrounds) OR uses 4px→2px→1px (not 4px→3px→2px→1px)
- **M19 PASSES** (customization applied)

**Resolution:** Implement BOTH R7 and M19. They protect different convergence vectors.

---

### A.2 Information Loss at Combination Level — CONFIRMED RISK

**Extraction chain finding (Section 2, Stage 2):**
> "The catalog documents 18 INDIVIDUAL mechanisms but does NOT document MECHANISM COMBINATIONS. OD-004 uses border-weight gradient + spacing compression + zone background progression IN COMBINATION to encode confidence. The catalog lists these as separate mechanisms (#1, #4, #7) but doesn't preserve the insight that they were deployed TOGETHER. This combination knowledge was LOST in extraction."

**Cross-reference with Combination Families (Part 2.1):**
My 6 proven combination families (Hierarchy Triad, Depth Triple, Density Triple, Zone Pair, Component Pair, Emphasis Pair) are the EXACT knowledge that was lost in the showcase → catalog extraction.

**Evidence of information loss:**
1. **OD-004 deployed Hierarchy Triad** (border-weight + spacing + zone backgrounds encode confidence)
   - Catalog entry for #1 (border-weight): "Use for ANY hierarchy/priority encoding" ✓
   - Catalog entry for #4 (spacing): "Compression encodes depth/density/intensity" ✓
   - Catalog entry for #7 (zone backgrounds): "Reinforces structural boundaries" ✓
   - **Catalog does NOT say:** "Combine #1 + #4 + #7 to encode shared semantic via multi-channel coherence" ✗

2. **DD-006 deployed Density Triple** (dense/sparse alternation + spacing + backgrounds encode rhythm)
   - Catalog documents all three mechanisms individually ✓
   - **Catalog does NOT say:** "These three mechanisms work together to create rhythmic pacing" ✗

**Impact on builders:**
- Builders receive vocabulary (#1, #4, #7 exist) but not grammar (how to combine coherently)
- Without combination knowledge, builders may deploy 8 mechanisms INDEPENDENTLY rather than 3 COMBINATIONS of 2-3 mechanisms each
- Result: Structural incoherence (mechanisms coexist but don't reinforce shared semantics)

**Validation of Recommendation 2 (Extraction Chain Section 8):**
The extraction chain recommends creating "mechanism combination catalog" — this is EXACTLY what Part 7 (Combination Catalog Reference Table) delivers. The extraction analyst and tier architect independently converged on the SAME solution.

**Fix implemented in this analysis:** Part 7 (Mechanism Combination Map) restores the lost combination knowledge by extracting it FROM case studies and documenting it AS transferable patterns.

---

### A.3 Semantic Grounding Risk — 2 of 6 Combinations at Risk

**Extraction chain concern:**
> "Are any of your 6 proven combinations at risk of losing their semantic grounding through the extraction chain?"

**Analysis of each combination family:**

#### SAFE (4 of 6): Semantic grounding preserved through abstraction

**1. Component Pair (2-Zone DNA + Typography)**
- **Semantic:** Label vs content structure (meta-level vs content-level)
- **Abstraction risk:** LOW
- **Why safe:** The label/content split is UNIVERSAL across all components. The semantic is structural, not metaphor-dependent.

**2. Zone Pair (Backgrounds + Border-Color)**
- **Semantic:** Category/section differentiation
- **Abstraction risk:** LOW
- **Why safe:** Color-coding categories is UNIVERSAL. The semantic is categorical, not metaphor-dependent.

**3. Emphasis Pair (Border-Left Signal + Solid Offset)**
- **Semantic:** Featured content
- **Abstraction risk:** LOW
- **Why safe:** Emphasis is UNIVERSAL. The semantic is attentional, not metaphor-dependent.

**4. Density Triple (Dense/Sparse Alternation + Spacing + Backgrounds)**
- **Semantic:** Rhythm/pacing
- **Abstraction risk:** LOW-MODERATE
- **Why mostly safe:** Rhythmic alternation is WIDESPREAD. The semantic is perceptual, not content-specific.

#### AT RISK (2 of 6): Semantic grounding is metaphor-dependent

**5. Hierarchy Triad (Border-Weight + Spacing + Typography)**
- **Semantic:** Importance/certainty/priority encoding
- **Abstraction risk:** MODERATE-HIGH
- **Why at risk:** WHAT creates importance is metaphor-dependent:
  - OD-004 (geological): Thick = certain (bedrock is thick/solid)
  - DD-006 (fractal): Thick = scale level (page-level thick, character-level thin)
  - **The semantic INVERTS** between metaphors
- **Risk:** Builders may deploy Hierarchy Triad without understanding that DIRECTION (thick = important or unimportant?) is metaphor-determined.
- **Mitigation needed:** Combination catalog must require DIRECTIONAL CHOICE documentation.

**6. Depth Triple (Border-Weight + Spacing + Backgrounds)**
- **Semantic:** Layering/stratification/depth encoding
- **Abstraction risk:** HIGH
- **Why at risk:** "Depth" is HIGHLY metaphor-dependent:
  - OD-004 (geological): Depth = certainty (bedrock deep = certain)
  - DD-004 (atmospheric): Depth = layer type
  - Oceanic: Depth = mystery OR pressure
- **Risk:** Builders may deploy Depth Triple without defining what "depth" MEANS in their metaphor.
- **Mitigation needed:** Require SEMANTIC DEFINITION before deployment.

**CRITICAL FINDING:**
2 of 6 combinations require SEMANTIC GROUNDING VERIFICATION before deployment. The combination STRUCTURE transfers, but the SEMANTIC INTERPRETATION is metaphor-dependent.

**Fix required:**
Add semantic definition template for at-risk combinations:
```
Combination: Hierarchy Triad
Shared semantic: [Your dimension, e.g., "urgency"]
Semantic definition:
- High [urgency] = thick borders (4px) + tight spacing (16px) + large type
- Low [urgency] = thin borders (1px) + generous spacing (40px) + small type
Direction justification: [Why thick = urgent in YOUR metaphor]
```

---

### A.4 The Lookup Ideology Test — Does Combination Map Enable Coherence?

**Extraction chain question:**
> "Vocabulary Deployment ≠ Vocabulary Fluency. Does the combination map solve this?"

**Answer: PARTIALLY.**

**What the Combination Map provides:**
1. Proven combinations (which mechanisms work together)
2. Shared semantics (what dimension they encode)
3. CSS evidence (actual values from case studies)

**What it does NOT provide:**
1. When to use which combination (content-type matching)
2. How many combinations to deploy (Middle says "2+" but not which 2)
3. How to detect conflicts (Hierarchy Triad + Depth Triple both use border-weight)

**Fluency gap example:**
- Builder selects Hierarchy Triad (border-weight + spacing + typography) for "importance"
- Builder selects Depth Triple (border-weight + spacing + backgrounds) for "layering"
- **PROBLEM:** Both use #1 and #4. Can't encode BOTH via same mechanisms.
- **Combination Map doesn't warn about this.**

**Is this gap fillable? YES, with 3 additions:**

**Addition 1: Conflict Matrix**
Document which combinations share mechanisms and therefore conflict.

**Addition 2: Content-Type Matching**
Which combinations fit which content types (hierarchical, layered, rhythmic, categorical).

**Addition 3: Deployment Targets**
- Middle: 2 COMPATIBLE combinations
- Ceiling: 3-4 COMPATIBLE combinations

**Verdict:**
Combination Map is NECESSARY but INSUFFICIENT for fluency. Needs conflict detection + content matching + deployment targets.

---

### A.5 The Middle-Tier Experiment — Revised Hypothesis

**Extraction chain recommendation:**
> "Build ONE Middle-tier page (8-10 mechanisms, no metaphor) to test whether lookup produces coherence or decoration."

**Original hypothesis:**
Lookup produces decoration (mechanisms coexist but don't reinforce shared semantics).

**Revised hypothesis (with Combination Map):**
Lookup CAN produce coherence IF builders have combination knowledge. Without it, lookup = decoration. With it, lookup = multi-channel coherence.

**Revised test protocol:**

**Build 2 Middle-tier pages:**

**Page A (Catalog Only):**
- 8-10 individual mechanisms from catalog
- No combination guidance
- Test: Coherent or arbitrary?

**Page B (Catalog + Combination Map):**
- 2 combinations (5 mechanisms)
- 3-5 independent mechanisms
- Test: MORE coherent than Page A?

**If Page B > Page A:** Combination Map validates lookup ideology
**If Page B ≈ Page A:** Combination knowledge insufficient; iterative discovery still required

**Verdict:**
The Combination Map is CRITICAL to the Middle-tier experiment. Original test (catalog only) would likely fail. Revised test (catalog + combinations) has genuine success chance.

---

### A.6 Cross-Cutting Synthesis — 5 Key Findings

**1. R7 + M19 are complementary, not redundant.**
- R7 prevents category concentration (macro-level)
- M19 prevents combination copying (micro-level)
- **Both needed** for full anti-gravity

**2. Combination knowledge was LOST in showcase → catalog extraction.**
- My 6 proven combinations RESTORE this knowledge
- But 2 of 6 require semantic grounding verification
- **Semantic definition step needed** for at-risk combinations

**3. Combination Map provides vocabulary, not grammar.**
- Proven combinations exist ✓
- Conflict detection missing ✗
- Content-type matching missing ✗
- **Need:** Conflict matrix + content matching + deployment targets

**4. The Middle-tier experiment needs revision.**
- Original: Catalog only (likely fails)
- Revised: Catalog + Combination Map (genuine chance)
- **Test 2 pages** to compare

**5. Lookup ideology is TESTABLE with Combination Map.**
- Without combinations: Decoration
- With combinations: Potential coherence
- **The Combination Map is the missing piece**

---

### A.7 Revised Recommendations

**Additions to Part 6:**

#### Implement BOTH R7 and M19

**R7 (Category Diversity):**
- Enforce sampling from 4 of 5 categories
- Prevent concentration
- Macro-level divergence

**M19 (Combination Customization):**
- Require customization of proven combinations
- Customize mechanisms OR values OR direction
- Micro-level divergence

**Integration:** Phase 4 runs BOTH checks

#### Enrich Part 7 (Combination Catalog) with 3 additions:

**1. Conflict Matrix**
Which combinations share mechanisms (can't deploy both)

**2. Content-Type Matching**
Which combinations fit which content properties

**3. At-Risk Combination Warnings**
Semantic grounding required for Hierarchy Triad and Depth Triple

---

### A.8 Final Verdict

**What extraction chain provided:**
1. Identified combination knowledge LOSS
2. Proposed R7 (category diversity)
3. Questioned lookup ideology
4. Recommended Middle-tier experiment

**What tier architecture (this analysis) provided:**
1. RESTORED combination knowledge (6 families)
2. Proposed M19 (combination customization)
3. Documented combination STRUCTURE
4. Identified at-risk combinations

**Together:**
1. **Complete anti-gravity** (R7 macro + M19 micro)
2. **Complete combination knowledge** (vocabulary + grammar)
3. **Complete lookup validation path** (Combination Map enables coherence)
4. **Complete risk assessment** (2 of 6 need semantic grounding)

**The Combination Map is the missing piece** that makes the extraction chain's recommendations ACTIONABLE. Without it, lookup ideology would fail. With it, lookup-based coherence becomes achievable.

---

**END ADDENDUM**

---

**END TIER ARCHITECTURE ANALYSIS (WITH CROSS-REFERENCE)**
