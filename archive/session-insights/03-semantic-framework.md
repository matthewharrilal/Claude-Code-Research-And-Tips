# Semantic Value Validation Framework

**Date:** 2026-02-15
**Agent:** semantic-analyst
**Team:** session-enrichment
**Status:** COMPLETE

---

## Executive Summary

**The Core Question:** "How do you KNOW if your CSS values have semantic reasons?"

**The Core Answer:** For any varying CSS value, ask: **"Why this value and not the adjacent values on the token scale?"** If the answer references **CONTENT STRUCTURE or METAPHOR LOGIC** → semantic. If it references only **TOKEN SCALE or VISUAL AESTHETICS** → arbitrary.

**Critical Discovery:** Semantic-vs-arbitrary is NOT a binary. It's a **4-tier spectrum** from arbitrary lookup to multi-layered metaphor logic. The tier determines the DEPTH of semantic justification required, not its presence/absence.

---

## Table of Contents

1. [The Semantic Test (Core Protocol)](#the-semantic-test-core-protocol)
2. [The 4-Tier Spectrum](#the-4-tier-spectrum)
3. [Per-Value Justification Framework](#per-value-justification-framework)
4. [Vocabulary-vs-Library Connection](#vocabulary-vs-library-connection)
5. [Semantic vs Arbitrary: 5 Before/After Examples](#semantic-vs-arbitrary-5-beforeafter-examples)
6. [Audit Checklist (Builder + Auditor)](#audit-checklist-builder-auditor)
7. [Perceptual Audit Integration](#perceptual-audit-integration)

---

## The Semantic Test (Core Protocol)

### The Binary Question

For ANY CSS value that varies across elements (padding, margin, font-size, border-width, etc.):

**"Why this value and not the adjacent values on the token scale?"**

### Decision Tree

```
DOES THE ANSWER REFERENCE:
├─ Content structure (hierarchical depth, section importance, reader journey phase)?
│  └─ YES → SEMANTIC (content-driven)
│
├─ Metaphor logic (geological depth, confidence certainty, fractal rhythm)?
│  └─ YES → SEMANTIC (metaphor-driven)
│
├─ Pattern logic (CRESCENDO peaks here, EXHALE section, dense stratum)?
│  └─ YES → SEMANTIC (pattern-driven)
│
└─ Token scale alone ("because 32px is on the scale") OR visual aesthetics ("looked good")?
   └─ YES → ARBITRARY (non-semantic)
```

### Core Examples

**SEMANTIC (content structure):**
```css
.page-title { padding: var(--space-20); } /* 80px */
/* WHY 80px not 64px? Because this is the FIRST CONTACT point
   with the entire page. Generous space signals "slow down,
   orient yourself" before dense content begins. */
```

**SEMANTIC (metaphor logic — OD-004 geological):**
```css
.stratum--established { padding: var(--space-10); } /* 40px */
.stratum--speculative { padding: var(--space-4); } /* 16px */
/* WHY 40px for established, 16px for speculative?
   Geological metaphor: established knowledge is SETTLED
   (like bedrock, sparse, breathing room). Speculative
   knowledge is COMPRESSED (like topsoil, dense, tightly packed).
   40px = 2.5x denser than speculative. This ratio encodes
   inverse density-confidence correlation (R1-001). */
```

**ARBITRARY (token scale alone):**
```css
.section { padding: var(--space-8); } /* 32px */
/* WHY 32px not 24px or 40px? "Because 32px is on the token scale."
   NO CONTENT REASON. Could be 24px or 40px with equal validity. */
```

**ARBITRARY (visual aesthetics alone):**
```css
.callout { padding: var(--space-6); } /* 24px */
/* WHY 24px? "Looked good visually."
   NO STRUCTURAL JUSTIFICATION. Aesthetic judgment, not semantic. */
```

---

## The 4-Tier Spectrum

Semantic-vs-arbitrary is NOT binary. It's a **4-tier spectrum** from Floor (no semantic reasoning expected) to Flagship (multi-layered metaphor logic).

### Tier 1: Floor (5 mechanisms, no metaphor)

**Expected semantic depth:** NONE (lookup-only)

**Value selection:**
- Direct token lookup: "Use --space-8 for section padding" (32px)
- Component match: "This is a callout, use --space-6" (24px)
- NO justification required beyond "this component type uses this token"

**Why semantically valid:** Floor tier builds with EXISTING COMPONENTS. Components already encode semantic decisions. Builder applies decisions, doesn't derive them.

**Example (Floor callout):**
```css
.callout-essence {
  padding: var(--space-6); /* 24px */
  border-left: 4px solid var(--accent-amber);
}
/* Justification: "Callout components use --space-6 per
   component inventory. This is a callout." ← SUFFICIENT */
```

---

### Tier 2: Middle (8-10 mechanisms, no metaphor)

**Expected semantic depth:** PATTERN LOGIC (mechanism deployment reasoning)

**Value selection:**
- Pattern-driven: "CRESCENDO peaks at Section 3, so padding tightens from 64px → 32px → 16px"
- Mechanism encoding: "Border-weight gradient: 4px for primary, 3px for secondary, 1px for tertiary"
- Justification references PATTERN NAME and STRUCTURAL POSITION

**The critical distinction:** Middle tier has NO metaphor but DOES have semantic reasoning. Values vary based on STRUCTURAL ROLE (where in the pattern), not arbitrary aesthetics.

**Example (Middle CRESCENDO):**
```css
.section--intro { padding: var(--space-16); } /* 64px */
.section--build { padding: var(--space-8); }  /* 32px */
.section--peak { padding: var(--space-4); }   /* 16px */

/* Justification: "CRESCENDO pattern. Content complexity
   increases intro → build → peak. Padding compresses inversely
   to signal increasing density. 64px → 32px → 16px = 4:2:1 ratio.
   Peak uses minimum padding (16px) because content is densest."
   ← SEMANTIC (pattern logic) */
```

**NOT semantic at Middle tier:**
```css
.section--intro { padding: var(--space-12); } /* 48px */
.section--build { padding: var(--space-10); } /* 40px */
.section--peak { padding: var(--space-8); }   /* 32px */

/* Justification: "Padding decreases as sections progress."
   WHY THESE SPECIFIC VALUES? "They're on the token scale."
   ← ARBITRARY. Pattern logic exists (decreasing padding) but
   VALUE SELECTION has no structural reason. Could be 64→32→16
   with equal validity. */
```

---

### Tier 3: Ceiling (12-15 mechanisms, metaphor)

**Expected semantic depth:** METAPHOR LOGIC (metaphor-driven value selection)

**Value selection:**
- Metaphor encoding: "Geological strata: bedrock (80px sparse) → topsoil (16px dense)"
- Metaphor-structural mapping: "Confident assertions = established bedrock = sparse spacing"
- Justification references METAPHOR DOMAIN and STRUCTURAL ISOMORPHISM

**The critical leap:** Ceiling tier values encode METAPHOR SEMANTICS. The metaphor DETERMINES value relationships, not just patterns.

**Example (Ceiling geological metaphor — OD-004):**
```css
.stratum--bedrock {
  padding: var(--space-10); /* 40px */
  background: var(--color-zone-sparse);
  border-left: 4px solid var(--color-text);
}
.stratum--topsoil {
  padding: var(--space-4); /* 16px */
  background: var(--color-zone-dense);
  border-left: 1px solid var(--color-border);
}

/* Justification: "Geological metaphor maps confidence to depth.
   BEDROCK = established knowledge = settled, consolidated = SPARSE.
   TOPSOIL = speculative knowledge = loose, unconsolidated = DENSE.

   40px bedrock padding: Geological bedrock forms under pressure
   over millennia. Metaphorically: established knowledge has been
   'compressed' by repeated validation, leaving SPACE between facts
   (sparse). Reader can BREATHE in certainty.

   16px topsoil padding: Topsoil is loose, uncompacted. Speculative
   ideas haven't been pressure-tested. They're PACKED TIGHTLY (dense)
   because they're unstable — reader must move carefully through
   uncertain terrain.

   4px vs 1px borders: Bedrock has WEIGHT (4px). Topsoil is fragile (1px).
   Border weight encodes structural certainty."
   ← SEMANTIC (metaphor logic) */
```

**What makes this semantic vs Middle tier?**
- Middle tier: "Padding decreases because pattern logic"
- Ceiling tier: "Padding decreases because bedrock-to-topsoil geological consolidation maps to certainty-to-speculation epistemic structure"

The metaphor provides SEMANTIC GROUNDING for WHY this value progression and not another.

---

### Tier 4: Flagship (16-18 mechanisms, multi-layered metaphor + audit)

**Expected semantic depth:** MULTI-LAYERED METAPHOR LOGIC (multiple semantic dimensions encoded simultaneously)

**Value selection:**
- Multi-dimensional encoding: Value encodes 2+ semantic dimensions simultaneously
- Cross-pattern reinforcement: Same semantic encoded via multiple mechanisms
- Justification references SEMANTIC OVERLAP across dimensions

**Example (Flagship multi-dimensional — hypothetical):**
```css
.section--speculative-early {
  padding: var(--space-5); /* 20px */
  border-left: 2px solid var(--accent-coral);
  margin-bottom: var(--space-6); /* 24px */
}

/* Multi-dimensional justification:

   DIMENSION 1 (Confidence): Speculative = uncertain = dense
   → Padding tightens to 20px (vs 40px established)

   DIMENSION 2 (Journey): Early in document = reader unfamiliar
   → Border thins to 2px (vs 4px for familiar concepts)

   DIMENSION 3 (Attention): Speculation + early = high cognitive load
   → Margin increases to 24px (recovery breathing between sections)

   The SAME 20px padding encodes:
   - Low confidence (geological compression)
   - High complexity (CRESCENDO building)
   - Reader fatigue risk (breathing rhythm)

   Value selection MUST balance 3 constraints simultaneously.
   Not arbitrary — it's the OVERLAP ZONE where all 3 dimensions
   align."
   ← SEMANTIC (multi-layered) */
```

**The Flagship distinction:** Values exist at SEMANTIC INTERSECTIONS. Can't change one dimension without breaking others.

---

## Per-Value Justification Framework

### The 3-Question Test

For EVERY varying CSS value (padding, margin, font-size, border-width), answer:

**Q1: WHAT varies?**
- Identify the property and its range (e.g., "padding varies from 16px to 80px")

**Q2: WHY does it vary?**
- Content structure? Metaphor logic? Pattern deployment? Token lookup?

**Q3: WHY THESE SPECIFIC VALUES and not adjacent ones?**
- Why 40px not 48px? Why 16px not 12px?
- If answer is "token availability" → ARBITRARY
- If answer references structure/metaphor → SEMANTIC

---

### Tier-Specific Justification Requirements

| Tier | Q1: What varies? | Q2: Why vary? | Q3: Why these values? | Depth |
|------|-----------------|---------------|----------------------|-------|
| **Floor** | "Padding on callouts" | "Component type" | "Callout inventory spec" | ✓ LOOKUP |
| **Middle** | "Padding across sections" | "CRESCENDO pattern" | "64→32→16 = peak compression" | ✓✓ PATTERN |
| **Ceiling** | "Padding + borders across strata" | "Geological metaphor" | "Bedrock sparse, topsoil dense" | ✓✓✓ METAPHOR |
| **Flagship** | "Padding + borders + margins" | "Confidence × Journey × Attention" | "20px = overlap zone of 3 dimensions" | ✓✓✓✓ MULTI-LAYER |

---

### Semantic Spectrum (NOT Binary)

```
ARBITRARY ←─────────────────────────────────────────────→ SEMANTIC
    │                │              │                  │
  Floor            Middle         Ceiling           Flagship
(lookup)        (pattern)      (metaphor)      (multi-layer)
    │                │              │                  │
No semantic     1-dimensional  2-dimensional   3+ dimensional
reasoning       semantic       semantic         semantic
required        (structure)    (metaphor)      (intersection)
```

**Key insight:** Floor is NOT "bad" or "non-semantic." It's APPROPRIATELY semantic for its tier. Lookup-based decisions ARE semantic when the lookup table encodes prior semantic work (components carry semantic decisions).

---

## Vocabulary-vs-Library Connection

### The Vocabulary Problem (Pre-Extraction)

**Before compositional-core/ existed:**
- 18 mechanisms scattered across 30+ HTML files
- No single catalog of "border-weight gradient" or "2-zone DNA"
- Builders had to DISCOVER patterns by reading full explorations
- 99% of CSS was metaphor-specific (`.stratum--bedrock`), 1% was extractable mechanism

**Result:** Builders couldn't distinguish mechanism (reusable) from metaphor (specific). Led to template-matching instead of vocabulary deployment.

---

### The Extraction Solution

**compositional-core/grammar/mechanism-catalog.md extracts 18 mechanisms:**

**Name Test:** "Remove the metaphor name. Does it still make sense?"
- ❌ "Bedrock gets 40px padding" → metaphor-specific
- ✓ "Established certainty gets sparse padding" → mechanism

**Transfer Test:** "Does this work with a different metaphor?"
- ❌ "Geological strata use 4→3→2→1px borders" → geological-only
- ✓ "Certainty gradient uses 4→3→2→1px borders" → transferable

**Mechanism catalog documents:**
1. **The CSS pattern** (border-weight gradient: 4px/3px/2px/1px)
2. **What varies** (border thickness)
3. **What it encodes** (hierarchy, importance, confidence — SEMANTIC DOMAIN)
4. **What values it uses** (token scale subset)

**The vocabulary-vs-library split:**
- **Vocabulary (grammar/):** "Border-weight gradient encodes hierarchy using 4→3→2→1px from token scale"
- **Library (case-studies/):** "Geological metaphor uses 4px bedrock, 3px sediment, 2px topsoil, 1px surface"

---

### How This Relates to Semantic Validation

**Vocabulary (mechanism catalog) defines SEMANTIC DOMAINS:**
```
Mechanism: Border-Weight Gradient
Encodes: Hierarchy / Importance / Confidence (ABSTRACT)
Values: 4px/3px/2px/1px (CONCRETE)
```

**Library (case studies) shows SEMANTIC APPLICATIONS:**
```
Case Study: OD-004 Geological
Encodes: Confidence (SPECIFIC semantic domain)
Mapping: Established=4px, Probable=3px, Speculative=2px, Open=1px
Justification: "Geological consolidation under pressure →
border weight = structural certainty"
```

**For semantic validation:**
1. **Vocabulary test:** Does this value use a MECHANISM from the catalog?
2. **Semantic test:** Does the mechanism encoding match CONTENT STRUCTURE?
3. **Justification test:** Can you explain WHY this value for THIS content?

**Example flow:**

```
Builder applies border-left: 3px to a section.

Q: What mechanism is this?
A: Border-weight gradient (Mechanism #1 in catalog)

Q: What does 3px encode in the 4→3→2→1 scale?
A: Second-tier importance (from mechanism definition)

Q: Why is THIS section second-tier?
A: [SEMANTIC JUSTIFICATION REQUIRED]
   ✓ "This section covers probable approaches (vs established=4px)"
   ✗ "Because 3px looked good"
   ✗ "Because the token scale has 3px"

The mechanism gives you the VOCABULARY (4→3→2→1 encodes hierarchy).
The content gives you the SEMANTIC MAPPING (probable = 3px).
The justification connects them.
```

---

## Semantic vs Arbitrary: 5 Before/After Examples

Each example shows:
1. **Arbitrary implementation** (no semantic justification)
2. **Semantic implementation** (with justification)
3. **The key difference** (what makes it semantic)

---

### Example 1: Callout Padding (Mechanism: 2-Zone DNA)

**ARBITRARY:**
```css
.callout-essence {
  padding: 24px 28px; /* Why 24px? "Looked balanced." */
}

.callout-essence__label {
  margin-bottom: 10px; /* Why 10px? "Visual spacing." */
}
```

**Justification:** "Padding and spacing chosen visually."

**SEMANTIC (Ceiling — metaphor-driven):**
```css
.callout-essence {
  padding: var(--space-6); /* 24px */
  /* Justification: 2-zone DNA mechanism. Callouts use 24px
     standard padding (Component inventory). "Essence" semantic:
     distilled wisdom requires CLARITY (not cramped). 24px gives
     breathing room around concentrated content. */
}

.callout-essence__label {
  margin-bottom: var(--space-2); /* 8px */
  /* Justification: 2-zone DNA sparse label + dense body pattern.
     Label is SIGNPOST (meta-level). Body is CONTENT (object-level).
     8px separates levels without creating void. Label recedes;
     body dominates. */
}
```

**The key difference:**
- Arbitrary: Values chosen aesthetically ("looked balanced")
- Semantic: Values encode STRUCTURAL RELATIONSHIP (meta-level label vs object-level body, 2-zone DNA pattern)

---

### Example 2: Section Padding Progression (Mechanism: Progressive Disclosure)

**ARBITRARY:**
```css
.section--intro { padding: 48px 24px; }
.section--detail { padding: 40px 24px; }
.section--summary { padding: 32px 24px; }
```

**Justification:** "Padding decreases slightly as page progresses."

**WHY ARBITRARY:** Pattern exists (decreasing padding) but VALUE SELECTION has no structural reason. Why 48→40→32 and not 64→32→16? "Because they're on the token scale."

**SEMANTIC (Middle — pattern logic):**
```css
.section--intro {
  padding: var(--space-16) var(--space-6); /* 64px 24px */
  /* Justification: Progressive disclosure (Mechanism #12).
     INTRO = first contact, unfamiliar territory. Reader needs
     ORIENTATION space. 64px top/bottom: "slow down, this is
     the beginning." Horizontal 24px standard (container padding). */
}

.section--detail {
  padding: var(--space-8) var(--space-6); /* 32px 24px */
  /* Justification: DETAIL = building phase. Reader is oriented,
     now absorbing information. Padding compresses to 32px (50% of intro).
     Content density increases as familiarity increases. */
}

.section--summary {
  padding: var(--space-4) var(--space-6); /* 16px 24px */
  /* Justification: SUMMARY = synthesis phase. Reader has full context.
     Minimum padding (16px) signals DENSEST section. Information is
     compressed because reader can process quickly. 64→32→16 = 4:2:1
     compression ratio. */
}
```

**The key difference:**
- Arbitrary: "Padding decreases" (pattern exists) but values arbitrary
- Semantic: "Padding decreases 4:2:1 because familiarity enables compression" (value ratios encode cognitive journey)

---

### Example 3: Border Weights (Mechanism: Border-Weight Gradient)

**ARBITRARY:**
```css
.heading--page { border-left: 4px solid var(--color-primary); }
.heading--section { border-left: 3px solid var(--color-primary); }
.heading--subsection { border-left: 2px solid var(--color-primary); }
```

**Justification:** "Borders get thinner for lower hierarchy levels."

**WHY ARBITRARY:** Uses border-weight gradient mechanism BUT doesn't justify WHY these hierarchical levels need visual differentiation or WHY border weight is the appropriate encoding.

**SEMANTIC (Middle — pattern logic):**
```css
.heading--page {
  border-left: 4px solid var(--color-primary);
  /* Justification: Border-weight gradient (Mechanism #1).
     PAGE-LEVEL heading = highest structural importance.
     4px = maximum weight = "this organizes everything below."
     Reader orientation: "You are at the TOP of the hierarchy." */
}

.heading--section {
  border-left: 3px solid var(--color-primary);
  /* Justification: SECTION-LEVEL heading = secondary structural importance.
     3px = second-tier weight = "this organizes a major subdivision."
     75% of page-level weight (3/4) signals subordinate but still major. */
}

.heading--subsection {
  border-left: 2px solid var(--color-primary);
  /* Justification: SUBSECTION-LEVEL heading = tertiary structural importance.
     2px = third-tier weight = "this organizes a detail cluster."
     50% of page-level weight (2/4) signals two levels of subordination.
     CRITICAL: 2px is ONLY used for semantic hierarchy (per prohibitions.md).
     NOT decorative. */
}
```

**The key difference:**
- Arbitrary: Uses mechanism correctly but doesn't justify hierarchical structure
- Semantic: Justifies WHY hierarchy exists (structural organization) and WHY border weight encodes it (visual subordination)

---

### Example 4: Geological Strata Spacing (Mechanism: Spacing Compression — OD-004)

**ARBITRARY:**
```css
.stratum--established { padding: 40px 24px; background: #FEF9F5; }
.stratum--probable { padding: 32px 24px; background: #FFFFFF; }
.stratum--speculative { padding: 24px 24px; background: #FAF5ED; }
```

**Justification:** "Padding decreases for lower-confidence sections. Backgrounds alternate."

**WHY ARBITRARY:**
1. Padding progression exists BUT ratio is arbitrary (40→32→24 = no clear relationship)
2. Background colors have no semantic mapping (why #FEF9F5 for established?)
3. No connection to GEOLOGICAL metaphor (just "decreasing padding")

**SEMANTIC (Ceiling — metaphor logic):**
```css
.stratum--established {
  padding: var(--space-10) var(--space-6); /* 40px 24px */
  background: var(--color-zone-sparse);
  border-left: 4px solid var(--color-text);
  /* Justification: GEOLOGICAL metaphor (OD-004).
     ESTABLISHED = bedrock layer = consolidated under pressure.

     40px padding: Geological bedrock forms through compression over
     millennia. Metaphor: established knowledge is SETTLED — facts
     have SPACE between them (sparse). Reader can breathe in certainty.

     --color-zone-sparse (#FEF9F5): Warmest background. Established
     knowledge is COMFORTABLE, familiar. Sparse = generous.

     4px border: Maximum structural weight. Bedrock SUPPORTS everything
     above it. Visual weight = epistemic weight. */
}

.stratum--probable {
  padding: var(--space-8) var(--space-6); /* 32px 24px */
  background: var(--color-zone-moderate);
  border-left: 3px solid var(--color-text);
  /* Justification: PROBABLE = sediment layer = partially consolidated.

     32px padding: Sediment is MORE compressed than bedrock (20% reduction).
     Probable knowledge has SOME pressure-testing but not fully settled.

     --color-zone-moderate (#FFFFFF): Neutral. Neither warm (established)
     nor dense (speculative). Visual neutrality = epistemic neutrality.

     3px border: Secondary structural weight. Sediment is stable but not
     foundational. 75% of bedrock weight. */
}

.stratum--speculative {
  padding: var(--space-4) var(--space-6); /* 16px 24px */
  background: var(--color-zone-dense);
  border-left: 2px solid var(--color-text-secondary);
  /* Justification: SPECULATIVE = topsoil layer = unconsolidated.

     16px padding: Topsoil is LOOSELY PACKED, dense. Speculative ideas
     haven't been pressure-tested. Content is COMPRESSED (60% less than
     established). Reader moves carefully through uncertain terrain.

     --color-zone-dense (#FAF5ED): Slightly warmer than moderate but
     VISUALLY DENSER (less contrast). Signals: "caution, unstable ground."

     2px border: Tertiary weight. Topsoil is FRAGILE. 50% of bedrock weight.
     CRITICAL: 2px is SEMANTIC (hierarchy encoding) not decorative. */
}
```

**Padding progression semantic justification:**
```
40px (established) → 32px (probable) → 16px (speculative)
= 40 → 32 → 16
= 2.5:2:1 ratio

WHY THIS RATIO?
- Established-to-probable: 20% compression (minimal change)
  → Probable is CLOSE to established (high confidence still)

- Probable-to-speculative: 50% compression (major shift)
  → Speculative is SIGNIFICANTLY less certain
  → The GULF between probable and speculative is LARGE

The ratio encodes EPISTEMIC DISTANCE, not arbitrary aesthetics.
```

**The key difference:**
- Arbitrary: Uses decreasing padding but no metaphor grounding
- Semantic: Every value (padding, background, border) encodes GEOLOGICAL CONSOLIDATION metaphor with explicit structural reasoning

---

### Example 5: Fractal Rhythm (Mechanism: Dense/Sparse Alternation — DD-006)

**ARBITRARY:**
```css
.page-section:nth-child(odd) { padding: 64px 24px; }
.page-section:nth-child(even) { padding: 32px 24px; }

.section-content p:nth-child(odd) { margin-bottom: 16px; }
.section-content p:nth-child(even) { margin-bottom: 8px; }
```

**Justification:** "Alternating padding creates visual rhythm."

**WHY ARBITRARY:**
1. Alternation exists BUT no structural reason (why odd vs even?)
2. Page-level (64→32) and character-level (16→8) rhythms are UNRELATED
3. No fractal self-similarity (different ratios, no semantic connection)

**SEMANTIC (Ceiling — fractal metaphor logic, DD-006):**
```css
/* PAGE SCALE: Dense/sparse alternation */
.section--exhale {
  padding: var(--space-20) var(--space-6); /* 80px 24px */
  margin-bottom: var(--space-16); /* 64px */
  /* Justification: FRACTAL rhythm (DD-F-006 + Mechanism #5).
     EXHALE sections = sparse, breathing. Reader pauses, reflects.
     80px vertical padding = MAXIMUM space. "Exhale here."
     64px bottom margin = chapter-level separation. */
}

.section--inhale {
  padding: var(--space-6); /* 24px */
  margin-bottom: var(--space-8); /* 32px */
  /* Justification: INHALE sections = dense, absorbing information.
     24px vertical padding = 70% compression vs EXHALE.
     32px bottom margin = section-level separation (50% of EXHALE).
     Reader "breathes in" dense content then EXHALES into next section. */
}

/* SECTION SCALE: Same rhythm within sections */
.section--exhale .intro-paragraph {
  margin-bottom: var(--space-10); /* 40px — sparse */
}
.section--exhale .detail-paragraph {
  margin-bottom: var(--space-4); /* 16px — dense */
}

/* COMPONENT SCALE: Same rhythm in callouts */
.callout__label {
  margin-bottom: var(--space-2); /* 8px — sparse (meta-level) */
  font-size: var(--type-meta); /* 12px */
}
.callout__body {
  line-height: 1.7; /* dense (content-level) */
  font-size: var(--type-body); /* 16px */
}

/* CHARACTER SCALE: Same rhythm in text */
.section--exhale .intro-paragraph {
  line-height: 1.9; /* sparse */
  letter-spacing: 0.02em; /* breathing */
}
.section--inhale .detail-paragraph {
  line-height: 1.6; /* dense */
  letter-spacing: 0; /* compressed */
}
```

**Fractal justification:**
```
The SAME dense/sparse rhythm appears at ALL 4 scales:

PAGE SCALE:
  EXHALE (80px) → INHALE (24px) = 3.3:1 ratio

SECTION SCALE:
  Intro (40px margin) → Detail (16px margin) = 2.5:1 ratio

COMPONENT SCALE:
  Label (8px margin, 12px font) → Body (1.7 line-height, 16px font)
  = Sparse meta-level vs dense content-level

CHARACTER SCALE:
  EXHALE text (1.9 line-height, 0.02em letter-spacing)
  → INHALE text (1.6 line-height, 0em letter-spacing)
  = Breathing vs compressed

WHY SEMANTIC:
The rhythm is SELF-SIMILAR (fractal). Not arbitrary alternation.
The SAME breathing pattern encoded at page/section/component/character.
Reader experiences CONSISTENT rhythm at every scale — this is
DD-F-006 (fractal self-similarity), the meta-pattern.
```

**The key difference:**
- Arbitrary: Alternation exists but no self-similarity or semantic grounding
- Semantic: FRACTAL self-similarity (same rhythm at 4 scales) encodes consistent cognitive experience

---

## Audit Checklist (Builder + Auditor)

### For Builders (Before Marking Complete)

**Pre-Build (Tier Classification):**
- [ ] Classify page tier (Floor / Middle / Ceiling / Flagship)
- [ ] Understand expected semantic depth for tier
- [ ] Load appropriate vocabulary (mechanisms for Middle+, metaphor for Ceiling+)

**During Build (Value Selection):**

For EVERY varying CSS value (padding, margin, font-size, border-width):

- [ ] **Q1: WHAT varies?** Document property and range
- [ ] **Q2: WHY does it vary?** Identify semantic driver (structure/pattern/metaphor)
- [ ] **Q3: WHY THESE SPECIFIC VALUES?** Justify against adjacent token values

**Value Justification Template:**
```
Property: [padding / margin / font-size / border-width]
Varies from: [min value] to [max value]
Semantic driver: [content structure / pattern / metaphor]
Specific justification:
  - [Element A] uses [value X] because: [structural reason]
  - [Element B] uses [value Y] because: [structural reason]
  - Why X not [adjacent token]? [content-based reason]
```

**Post-Build (Semantic Verification):**

- [ ] **Tier-appropriate depth check:**
  - Floor: All values from component inventory? ✓
  - Middle: All variations justify via pattern logic? ✓
  - Ceiling: All variations justify via metaphor logic? ✓
  - Flagship: All variations encode 2+ dimensions? ✓

- [ ] **Vocabulary-vs-library check:**
  - Used mechanisms from catalog (not metaphor-specific CSS)? ✓
  - Applied mechanisms to YOUR content (not copied showcase values)? ✓

- [ ] **Arbitrary test (reverse validation):**
  - Find 3 varying values
  - Try to justify with "looked good" or "token availability"
  - If justification succeeds → VALUE IS ARBITRARY, revise

**Documentation:**
- [ ] Comment complex value selections in CSS
- [ ] Document metaphor mappings (Ceiling+)
- [ ] Note multi-dimensional overlaps (Flagship)

---

### For Auditors (Post-Build Review)

**Tier Verification:**
- [ ] Page classified correctly (Floor/Middle/Ceiling/Flagship)?
- [ ] Semantic depth matches tier expectations?

**Semantic Depth Audit:**

For Middle tier (8-10 mechanisms):
- [ ] Pattern identified (CRESCENDO / GEOLOGICAL / FRACTAL / etc.)?
- [ ] Value progression justifies via pattern logic?
- [ ] Can builder explain WHY these values not adjacent ones?

For Ceiling tier (12-15 mechanisms + metaphor):
- [ ] Metaphor identified (geological / botanical / manuscript / etc.)?
- [ ] Values encode metaphor semantics (not just pattern)?
- [ ] Metaphor-to-structure mapping explicit?
- [ ] Can builder explain metaphor WITHOUT library reference?

For Flagship tier (16-18 mechanisms + multi-layer):
- [ ] 2+ semantic dimensions identified?
- [ ] Values exist at dimensional OVERLAPS?
- [ ] Can builder explain intersection logic?

**Arbitrary Detection (Red Flags):**

❌ **RED FLAG: Visual aesthetics justification**
```
"I used 32px because it looked balanced."
→ ASK: "Why 32px not 24px or 40px structurally?"
→ If no structural answer: ARBITRARY
```

❌ **RED FLAG: Token availability justification**
```
"I used --space-8 because it's on the token scale."
→ ASK: "Why --space-8 not --space-6 or --space-10?"
→ If no content reason: ARBITRARY
```

❌ **RED FLAG: Copied showcase values**
```
"I used 40px for established sections like OD-004."
→ ASK: "Does YOUR content have the same structure as OD-004?"
→ If no: TEMPLATE-MATCHING, not semantic
```

❌ **RED FLAG: Inconsistent ratios**
```
Section A: 64px, Section B: 56px, Section C: 48px
→ ASK: "Why 64→56→48 not 64→32→16?"
→ If answer is "gradual decrease": ARBITRARY (no structural ratio)
```

**Vocabulary-vs-Library Audit:**
- [ ] Mechanisms used (border-weight, 2-zone DNA, spacing compression)?
- [ ] Mechanisms applied to builder's content (not showcase content)?
- [ ] Metaphor vocabulary is builder's (not `.stratum` or `.fossil`)?

**Passing Criteria:**
- Floor: 100% values from inventory ✓
- Middle: 80%+ values justify via pattern ✓
- Ceiling: 90%+ values justify via metaphor ✓
- Flagship: 95%+ values encode multi-dimensional overlaps ✓

**Failing Criteria (any of):**
- 3+ values justified only aesthetically
- 3+ values copied from showcase without structural mapping
- Metaphor claimed but values don't encode it
- Pattern claimed but ratios arbitrary

---

## Perceptual Audit Integration

### New Perceptual Audit Questions (Add to Skill)

**Tier 2 (Middle — Pattern Logic):**

**PA-SEMANTIC-01:** "For the 3 most prominent spacing variations (padding/margin), can you justify each value against adjacent token values using pattern logic?"
- PASS: All 3 justify via pattern (CRESCENDO / GEOLOGICAL / FRACTAL)
- FAIL: Any value justified aesthetically or by token availability alone

**PA-SEMANTIC-02:** "Do spacing progressions use clear ratios (2:1, 3:1, 4:2:1) or are they arbitrary gradations?"
- PASS: Clear ratios (64→32→16, 40→32→24→16)
- FAIL: Arbitrary gradations (64→56→48, 32→28→24)

**PA-SEMANTIC-03:** "Can you explain WHY this pattern (CRESCENDO/GEOLOGICAL/etc.) fits this content without referencing the mechanism catalog?"
- PASS: Content-driven justification ("complexity increases → density increases")
- FAIL: Pattern-driven justification ("I used CRESCENDO because it's in the catalog")

---

**Tier 3 (Ceiling — Metaphor Logic):**

**PA-SEMANTIC-04:** "For the primary metaphor (geological/botanical/manuscript/etc.), can you map 3 content structures to 3 metaphor structures with value justifications?"
- PASS: Explicit mappings (established=bedrock=40px because consolidation)
- FAIL: Vague mappings ("geological structure" but no value justification)

**PA-SEMANTIC-05:** "Do metaphor-driven values encode metaphor semantics or just use metaphor vocabulary?"
- PASS: Values encode semantics (sparse=established, dense=speculative)
- FAIL: Metaphor vocabulary (`.bedrock`) but arbitrary values

**PA-SEMANTIC-06:** "Can you justify the metaphor choice for THIS content without referencing showcase pages?"
- PASS: Content-driven ("API stability has layered certainty like geology")
- FAIL: Pattern-driven ("OD-004 used geological so I did too")

---

**Tier 4 (Flagship — Multi-Layer):**

**PA-SEMANTIC-07:** "Identify 2 values that encode 2+ semantic dimensions simultaneously. Explain the overlap."
- PASS: "20px padding encodes: low confidence (compression) + early journey (unfamiliarity) + high attention (recovery breathing)"
- FAIL: Can't identify overlaps or overlaps are coincidental

**PA-SEMANTIC-08:** "Are multi-dimensional values at NECESSARY overlaps (can't change one dimension without breaking others) or COINCIDENTAL overlaps?"
- PASS: Changing confidence dimension would break journey dimension
- FAIL: Dimensions are independent (could change one without affecting other)

---

### Integration with Existing PA Questions

**Existing Tier 1 (Soul Check) — NO CHANGES:**
- PA-01 through PA-05: border-radius, box-shadow, fonts, colors, borders
- These remain BINARY (pass/fail, no semantic depth)

**Existing Tier 2 (Standard Fifteen) — ADD SEMANTIC QUESTIONS:**
- PA-06 through PA-20: existing questions
- **NEW:** PA-SEMANTIC-01, PA-SEMANTIC-02, PA-SEMANTIC-03 (Middle tier)

**Existing Tier 3 (Comprehensive) — ADD METAPHOR + FLAGSHIP:**
- PA-21 through PA-48: existing questions
- **NEW:** PA-SEMANTIC-04, PA-SEMANTIC-05, PA-SEMANTIC-06 (Ceiling tier)
- **NEW:** PA-SEMANTIC-07, PA-SEMANTIC-08 (Flagship tier)

---

### Updated Perceptual Audit Tiers

| Tier | Questions | Includes Semantic |
|------|-----------|-------------------|
| **Tier 1 (Mandatory Five)** | PA-01 to PA-05 | NO (soul only) |
| **Tier 2 (Standard Fifteen)** | PA-06 to PA-20 + PA-SEM-01 to PA-SEM-03 | YES (pattern logic) |
| **Tier 3 (Comprehensive)** | PA-21 to PA-48 + PA-SEM-04 to PA-SEM-08 | YES (metaphor + multi-layer) |

**Passing criteria:**
- Middle tier: MUST pass PA-SEMANTIC-01, 02, 03 (pattern justification)
- Ceiling tier: MUST pass PA-SEMANTIC-04, 05, 06 (metaphor justification)
- Flagship tier: MUST pass PA-SEMANTIC-07, 08 (multi-dimensional overlap)

---

## Summary & Key Takeaways

### The Core Insight

**Semantic-vs-arbitrary is a SPECTRUM, not a binary.**

- **Floor (lookup):** No semantic reasoning expected. Values from component inventory.
- **Middle (pattern):** 1-dimensional semantic (pattern logic justifies value selection).
- **Ceiling (metaphor):** 2-dimensional semantic (metaphor logic encodes structure).
- **Flagship (multi-layer):** 3+ dimensional semantic (values at dimensional overlaps).

### The Critical Test

**"Why this value and not the adjacent values on the token scale?"**

- If answer = "content structure" or "metaphor logic" → **SEMANTIC**
- If answer = "token availability" or "looked good" → **ARBITRARY**

### Tier-Specific Expectations

| Tier | Semantic Depth | Justification Requirement | Example |
|------|---------------|--------------------------|---------|
| **Floor** | None (lookup) | "Component inventory spec" | "Callouts use --space-6" |
| **Middle** | Pattern logic | "Pattern position" | "CRESCENDO peak uses 16px (densest)" |
| **Ceiling** | Metaphor logic | "Metaphor mapping" | "Bedrock=established=40px (consolidated)" |
| **Flagship** | Multi-layer | "Dimensional overlap" | "20px = confidence × journey × attention" |

### Vocabulary-vs-Library Connection

- **Vocabulary (mechanisms):** Define WHAT values can encode (hierarchy, rhythm, density)
- **Library (case studies):** Show HOW values encoded specific content (geological, botanical)
- **Semantic test:** Ensures values encode YOUR content, not copied from library

### For Builders

1. **Classify tier** → Know expected semantic depth
2. **For every varying value** → Answer 3 questions (what/why/why-these)
3. **Document justifications** → Comment complex selections
4. **Reverse test** → Try to justify arbitrarily. If it works → revise.

### For Auditors

1. **Verify tier classification** → Matches page complexity
2. **Spot-check 5-10 varying values** → Can builder justify semantically?
3. **Red flag detection** → "Looked good" / "token availability" / copied values
4. **Passing threshold** → 80%+ (Middle), 90%+ (Ceiling), 95%+ (Flagship) semantic

### Integration Points

**Design System:**
- `compositional-core/guidelines/semantic-rules.md` ← Add this framework
- `compositional-core/grammar/mechanism-catalog.md` ← Reference semantic domains per mechanism

**Skills:**
- `~/.claude/skills/tension-composition/SKILL.md` ← Add semantic justification requirement at Phase 4
- `~/.claude/skills/perceptual-auditing/SKILL.md` ← Add 8 new PA-SEMANTIC questions

**Documentation:**
- `ephemeral/doc-enrichment/02-tier-methodology.md` ← Add tier-specific semantic expectations
- `ephemeral/continuity-docs/HANDOFF.md` ← Reference semantic framework as validation tool

---

**END SEMANTIC VALUE VALIDATION FRAMEWORK**

**Status:** COMPLETE — ready for skill enrichment and documentation integration.
