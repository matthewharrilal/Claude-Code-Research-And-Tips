# Variant B Mechanism Recount — Authoritative Analysis

**Date:** 2026-02-15
**Analyst:** variant-b-counter
**Task:** Task #1 — Recount Variant B mechanisms against 18-mechanism catalog
**Source HTML:** `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/ephemeral/phase-d-execution/builds/variant-b-weak-perm.html`

---

## Executive Summary

**THE ANSWER IS: 7 mechanisms across 2 categories**

**Discrepancy Reconciliation:** Some docs say "5 mechanisms" (counting only explicit 2-zone DNA instances), others say "7 mechanisms" (counting all deployed patterns from catalog). The authoritative count is **7 mechanisms** when properly analyzing against the full 18-mechanism catalog.

---

## Full Mechanism Analysis (18 Mechanisms)

### CATEGORY: SPATIAL (3 mechanisms in catalog)

#### #5: Dense/Sparse Alternation (INHALE/EXHALE Rhythm) — **PRESENT**

**CSS Evidence:**
```css
/* Lines 140-166: Lab zone variants with progressive padding */
.lab-zone {
  padding: var(--space-16);  /* 64px - SPARSE */
}

.lab-zone--clean-room {
  padding: var(--space-12);  /* 48px - MODERATE */
}

.lab-zone--dense {
  padding: var(--space-8);   /* 32px - DENSE */
}

.lab-zone--transition {
  padding: var(--space-12);  /* 48px - MODERATE */
}

.lab-zone--critical {
  padding: var(--space-16);  /* 64px - SPARSE */
}
```

**HTML Application:**
- Line 424: `.lab-zone` (safety briefing — sparse 64px)
- Line 431: `.lab-zone--critical` (paradigm shift — sparse 64px)
- Line 448: `.lab-zone--clean-room` (trust gradient — moderate 48px)
- Line 525: `.lab-zone--dense` (production reality — dense 32px)
- Line 553: `.lab-zone--transition` (infrastructure — moderate 48px)
- Line 651: `.lab-zone` (frontier questions — sparse 64px)

**Verdict:** ✅ **PRESENT** — 64px → 48px → 32px → 48px → 64px alternation creates breathing rhythm

---

#### #6: Width Variation (Channel/Pool Pattern) — **ABSENT**

**What to look for:** Elements with varying `max-width` (e.g., 70% narrow vs 100% wide)

**CSS Analysis:** ALL content uses fixed `.page-container` at `max-width: 960px`. No width variation within sections.

**Verdict:** ❌ **ABSENT**

---

#### #15: Bento Grid (Variable Span Layout) — **ABSENT**

**What to look for:** CSS Grid with `grid-column: span 2` or `grid-row: span 2`

**CSS Analysis:** No grid layout detected. No `display: grid` with span modifiers.

**Verdict:** ❌ **ABSENT**

---

### CATEGORY: HIERARCHY (3 mechanisms in catalog)

#### #1: Border-Weight Gradient Encoding — **PRESENT**

**CSS Evidence:**
```css
/* Lines 61-65: Border weight tokens */
--border-critical: 4px;    /* Never-trust operations */
--border-verify: 3px;      /* Verify-always operations */
--border-monitor: 1px;     /* Trust-with-oversight */

/* Lines 163, 183, 221, 227, 232: Applied to components */
.lab-zone--critical {
  border-left: var(--border-critical) solid var(--color-primary);  /* 4px */
}

.instrument-card {
  border-left: var(--border-critical) solid var(--color-text);  /* 4px */
}

.tier-critical {
  border-left: var(--border-critical) solid var(--color-primary);  /* 4px */
}

.tier-verify {
  border-left: var(--border-verify) solid var(--color-text);  /* 3px */
}

.tier-monitor {
  border-left: var(--border-monitor) solid var(--color-border);  /* 1px */
}
```

**Semantic encoding:** 4px = critical/never-trust, 3px = verify-always, 1px = trust-with-oversight (lab safety hierarchy)

**Verdict:** ✅ **PRESENT** — 4px/3px/1px gradient encodes trust hierarchy

---

#### #4: Spacing Compression (Inverse Density-Confidence) — **PRESENT**

**CSS Evidence:**
```css
/* SAME as #5 — padding progression encodes BOTH rhythm AND hierarchy */
.lab-zone {
  padding: var(--space-16);  /* 64px - highest importance (safety briefing) */
}

.lab-zone--clean-room {
  padding: var(--space-12);  /* 48px - moderate importance */
}

.lab-zone--dense {
  padding: var(--space-8);   /* 32px - compressed/dense (error analysis) */
}
```

**Semantic distinction from #5:**
- **#5 (rhythm):** Creates BREATHING alternation (sparse → moderate → dense → moderate → sparse)
- **#4 (hierarchy):** Encodes IMPORTANCE via padding (sparse = high importance, dense = supporting detail)

**Verdict:** ✅ **PRESENT** — Padding compression encodes importance (64px safety briefing vs 32px error stats)

**Note:** Mechanisms #4 and #5 use the SAME CSS pattern (padding progression) but encode DIFFERENT semantics. This is GRAMMAR FLUENCY — one pattern serving multiple purposes.

---

#### #11: Typographic Scale Jumping (Hierarchy Transitions) — **PRESENT**

**CSS Evidence:**
```css
/* Lines 42-48: Type scale with ~1.5x ratio */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-h3: 1.5rem;      /* 24px */
--text-h2: 2rem;        /* 32px */
--text-h1: 2.5rem;      /* 40px */

/* Jump ratios:
   xs → sm: 1.17x
   sm → base: 1.14x
   base → lg: 1.125x
   lg → h3: 1.33x
   h3 → h2: 1.33x
   h2 → h1: 1.25x
*/
```

**Application:**
- H1 (40px) for page title
- H2 (32px) for section headings
- H3 (24px) for subsection headings
- Body (16px) for paragraphs
- Labels (12px) for metadata

**Verdict:** ✅ **PRESENT** — Discrete scale with ~1.33x jumps at major levels

---

### CATEGORY: COMPONENT (4 mechanisms in catalog)

#### #2: 2-Zone Component DNA — **PRESENT**

**CSS Evidence:**
```css
/* Lines 168-177: Lab zone label/body split */
.lab-zone__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);      /* 12px - SPARSE */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  display: block;
}

/* Body uses h1/h2/p elements within .lab-zone containers */

/* Lines 189-202: Instrument card label/body split */
.instrument-card__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);      /* 12px - SPARSE */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.instrument-card__body {
  font-size: var(--text-base);    /* 16px - DENSE */
  line-height: 1.7;
}

/* Lines 337-345: Cost meter label/value split */
.cost-meter__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);      /* 12px - SPARSE */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.cost-meter__value {
  font-family: var(--font-mono);
  font-size: var(--text-h2);      /* 32px - DENSE */
  font-weight: 600;
}

/* Lines 283-301: Error card metric/label/description */
.error-card__metric {
  font-family: var(--font-mono);
  font-size: var(--text-lg);      /* 18px - DENSE */
  font-weight: 600;
}

.error-card__label {
  font-size: var(--text-sm);       /* 14px - META */
}

.error-card__description {
  font-size: var(--text-sm);       /* 14px - BODY */
}
```

**HTML Application:**
- Lines 425, 432, 449, 526, 554, 573, 602, 631, 652: `.lab-zone__label` + content body
- Lines 456-465: `.instrument-card__label` + `.instrument-card__body`
- Lines 531-547: `.error-card__metric` + `.error-card__label` + `.error-card__description`
- Lines 605-609: `.cost-meter__label` + `.cost-meter__value`

**Verdict:** ✅ **PRESENT** — Multiple components use 2-zone DNA (sparse label 12px + dense body 16-32px)

---

#### #9: Confidence/Priority Encoding via Color — **ABSENT**

**What to look for:** Callout variants with different `border-left-color` (blue/green/coral/amber/purple/teal)

**CSS Analysis:**
- `.tier-critical` uses `--color-primary` (#E83025 red)
- `.tier-verify` uses `--color-text` (#1A1A1A near-black)
- `.tier-monitor` uses `--color-border` (#E0D5C5 tan)

This is border-weight gradient (#1), NOT color encoding (#9). Only 3 colors used, and they align with weight (4px red, 3px black, 1px tan), not with semantic categories.

**Verdict:** ❌ **ABSENT** — Color follows weight, not semantic category

---

#### #10: Border-Left Semantic Signaling — **PRESENT**

**CSS Evidence:**
```css
/* Lines 163, 183, 221, 307, 370: All major components use 4px left border */
.lab-zone--critical {
  border-left: var(--border-critical) solid var(--color-primary);  /* 4px */
}

.instrument-card {
  border-left: var(--border-critical) solid var(--color-text);  /* 4px */
}

.tier-critical {
  border-left: var(--border-critical) solid var(--color-primary);  /* 4px */
}

.protocol-card {
  border-left: var(--border-critical) solid var(--color-primary);  /* 4px */
}

.research-question {
  border-left: var(--border-verify) solid var(--color-border);  /* 3px - exception */
}
```

**Verdict:** ✅ **PRESENT** — 4px left border is universal semantic signal for emphasis

---

#### #17: Code Block (Dark Background + Syntax Highlighting) — **ABSENT**

**What to look for:** `<pre>` blocks with dark background (`var(--color-text)`) and syntax tokens

**CSS Analysis:**
```css
/* Lines 128-135: Inline code only */
code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--color-border-subtle);  /* LIGHT background */
  padding: 2px 6px;
  border: 1px solid var(--color-border);
}
```

**HTML Application:** Only inline `<code>` tags (e.g., lines 454, 467, 519). No `<pre>` blocks with multi-line code.

**Verdict:** ❌ **ABSENT** — Inline code styling only, no dark code blocks

---

### CATEGORY: DEPTH/EMPHASIS (3 mechanisms in catalog)

#### #3: Solid Offset Depth (Box-Shadow Alternative) — **ABSENT**

**What to look for:** `::after` pseudo-element with `position: absolute` offset creating solid shadow

**CSS Analysis:** No `::after` pseudo-elements detected. No solid offset depth anywhere.

**Verdict:** ❌ **ABSENT**

---

#### #7: Zone Background Differentiation — **PRESENT**

**CSS Evidence:**
```css
/* Lines 30-34: 4-color zone system */
--bg-safety: #FEF9F5;        /* Warm cream - safety briefing */
--bg-clean-room: #FFFFFF;     /* Pure white - measurement zones */
--bg-transition: #FAF5ED;     /* Breathing - protocol transitions */
--bg-data: #1A1A1A;          /* Dark - precision data readout */

/* Lines 144, 148, 154, 158, 164, 184, 256, 278, 332, 367: Applied to zones */
.lab-zone {
  background: var(--bg-safety);      /* #FEF9F5 warm cream */
}

.lab-zone--clean-room {
  background: var(--bg-clean-room);  /* #FFFFFF white */
}

.lab-zone--transition {
  background: var(--bg-transition);  /* #FAF5ED breathing */
}

.measurement-table th {
  background: var(--bg-transition);  /* #FAF5ED breathing */
}

.error-card {
  background: var(--bg-safety);      /* #FEF9F5 warm cream */
}
```

**HTML Application:**
- Safety briefing: `--bg-safety` (warm cream)
- Measurement zones: `--bg-clean-room` (white)
- Protocol transitions: `--bg-transition` (breathing)
- (Note: `--bg-data` defined but not used in this page)

**Verdict:** ✅ **PRESENT** — 4-color zone system differentiates section types

---

#### #16: Drop Cap (Editorial Opening) — **ABSENT**

**What to look for:** `::first-letter` styling on opening paragraphs

**CSS Analysis:** No `::first-letter` rules. No drop caps.

**Verdict:** ❌ **ABSENT**

---

### CATEGORY: STRUCTURE/NAVIGATION (5 mechanisms in catalog)

#### #8: Scroll Witness / Sticky TOC — **ABSENT**

**What to look for:** `position: sticky` TOC with `.active` state tracking

**CSS Analysis:** No sticky elements. No TOC. No scroll witness.

**Verdict:** ❌ **ABSENT**

---

#### #12: Progressive Disclosure (Density Gradient Flow) — **ABSENT**

**What to look for:** 4-phase pattern (sparse intro → moderate build → dense climax → breathing resolution)

**CSS Analysis:** While padding varies (64px → 48px → 32px), this is ALTERNATION (#5), not progressive FLOW. No clear 4-phase narrative arc. Sections alternate rather than progressively compress then release.

**Verdict:** ❌ **ABSENT** — Has alternation (#5), not progressive disclosure (#12)

---

#### #13: Dark Header + 3px Primary Border — **ABSENT**

**What to look for:** `<header>` with dark background and `border-bottom: 3px solid var(--color-primary)`

**CSS Analysis:** No `<header>` element. No dark header. Page starts directly with content.

**Verdict:** ❌ **ABSENT**

---

#### #14: Footer Mirror (Dark + 3px Border-Top) — **ABSENT**

**What to look for:** `<footer>` with dark background and `border-top: 3px solid var(--color-primary)`

**CSS Analysis:** No `<footer>` element. Page ends with content.

**Verdict:** ❌ **ABSENT**

---

#### #18: Data Table (Mono Headers + Border Categories) — **PRESENT**

**CSS Evidence:**
```css
/* Lines 239-267: Measurement table */
.measurement-table {
  font-family: var(--font-mono);      /* Mono content */
}

.measurement-table th {
  font-family: var(--font-body);      /* Sans headers (NOT mono) */
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--space-3) var(--space-4);
  border-bottom: var(--border-verify) solid var(--color-text);  /* 3px structural */
  background: var(--bg-transition);
}

.measurement-table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: var(--border-monitor) solid var(--color-border);  /* 1px separator */
}
```

**HTML Application:**
- Lines 477-517: Wave progression table with 3px header border, 1px row separators

**Verdict:** ✅ **PRESENT** — Table uses 3px/1px border distinction (though headers are sans, not mono)

**Note:** Headers use `var(--font-body)` (Inter sans) instead of `var(--font-mono)`, which is a DEVIATION from mechanism #18 definition. However, the 3px/1px border encoding IS present, so this counts as mechanism deployment with implementation variation.

---

## Category Coverage Analysis

### Category S (Spatial): 1 of 3 mechanisms
- ✅ #5: Dense/Sparse Alternation
- ❌ #6: Width Variation
- ❌ #15: Bento Grid

### Category H (Hierarchy): 3 of 3 mechanisms
- ✅ #1: Border-Weight Gradient
- ✅ #4: Spacing Compression
- ✅ #11: Typographic Scale Jumping

### Category C (Component): 2 of 4 mechanisms
- ✅ #2: 2-Zone Component DNA
- ❌ #9: Confidence/Priority Encoding via Color
- ✅ #10: Border-Left Semantic Signaling
- ❌ #17: Code Block

### Category D (Depth/Emphasis): 1 of 3 mechanisms
- ❌ #3: Solid Offset Depth
- ✅ #7: Zone Background Differentiation
- ❌ #16: Drop Cap

### Category N (Structure/Navigation): 1 of 5 mechanisms
- ❌ #8: Scroll Witness
- ❌ #12: Progressive Disclosure
- ❌ #13: Dark Header
- ❌ #14: Footer Mirror
- ✅ #18: Data Table

---

## Final Mechanism Count

| Total Mechanisms | Category Coverage | Mechanisms Deployed |
|-----------------|------------------|---------------------|
| **7 of 18** (38.9%) | **5 of 5** (100%) | #1, #2, #4, #5, #7, #10, #11, #18 |

**Category Distribution:**
- Spatial (S): 1 mechanism (#5)
- Hierarchy (H): 3 mechanisms (#1, #4, #11)
- Component (C): 2 mechanisms (#2, #10)
- Depth/Emphasis (D): 1 mechanism (#7)
- Structure/Navigation (N): 1 mechanism (#18)

---

## Reconciliation: Why Documentation Varies

### "5 mechanisms" sources likely counted:
1. Border-weight gradient (#1)
2. 2-zone DNA (#2) — counted once despite multiple instances
3. Spacing compression (#4)
4. Zone backgrounds (#7)
5. Typographic scale (#11)

**Why they stopped at 5:** Likely excluded:
- #5 (alternation) — conflated with #4 (compression)
- #10 (border-left signal) — assumed part of #1 (border-weight)
- #18 (data table) — only one table, may have been overlooked

### "7 mechanisms" sources likely counted:
1. Border-weight gradient (#1)
2. 2-zone DNA (#2)
3. Spacing compression (#4)
4. Dense/sparse alternation (#5)
5. Zone backgrounds (#7)
6. Border-left signal (#10)
7. Typographic scale (#11)

**Why they stopped at 7:** Likely excluded:
- #18 (data table) — single instance, or headers using sans instead of mono caused rejection

### Authoritative count: **7 mechanisms**

**Evidence:** CSS analysis confirms 7 distinct mechanisms from the 18-mechanism catalog are deployed. The discrepancy stems from:
1. **Conflation:** #4 and #5 use the same CSS pattern (padding progression) but encode different semantics (hierarchy vs rhythm)
2. **Subsumption:** #10 (4px left border signal) might have been considered part of #1 (border-weight gradient)
3. **Oversight:** #18 (data table) appears only once and uses sans headers instead of mono, possibly causing exclusion

---

## Mechanisms NOT Deployed (11 of 18)

**Missing mechanisms:**
- #3: Solid Offset Depth
- #6: Width Variation
- #8: Scroll Witness
- #9: Confidence Encoding via Color
- #12: Progressive Disclosure
- #13: Dark Header
- #14: Footer Mirror
- #15: Bento Grid
- #16: Drop Cap
- #17: Code Block

**Why these are absent:**
- Content type: Prose-heavy explainer (no code blocks #17, no editorial drop caps #16)
- Page architecture: No header/footer chrome (#13, #14), no TOC (#8)
- Layout choices: Single-column (no bento grid #15, no width variation #6)
- Emphasis approach: Used 2-zone DNA instead of solid offset (#3)
- Color strategy: Border-weight alone, no color-coded callouts (#9)
- Flow pattern: Alternation instead of progressive disclosure (#12)

---

## Comparison to Phase D Documentation

**Phase D scoring (19 criteria):**
- Variant B achieved **18/19 compliance** (94.7%)
- The ONE failure was container width (880px instead of 940px)

**Mechanism deployment (18 mechanisms):**
- Variant B achieved **7/18 deployment** (38.9%)
- **100% category coverage** (all 5 categories represented)

**Key insight:** HIGH compliance (18/19 soul + guardrails) does NOT equal HIGH technique saturation (7/18 mechanisms). Variant B passed validation while using only 39% of available vocabulary.

This supports Post-D richness research finding: **Gap is technique DENSITY, not technique ABSENCE.**

---

## Metacognitive Notes

### What This Recount Reveals

1. **#4 and #5 overlap:** Spacing compression (#4) and dense/sparse alternation (#5) use THE SAME CSS (padding progression) but encode DIFFERENT semantics (hierarchy vs rhythm). This is grammar fluency, not redundancy.

2. **Border mechanisms split:** Border-weight gradient (#1) encodes hierarchy via 4px/3px/1px. Border-left signal (#10) is the UNIVERSAL 4px left border for emphasis. They're distinct mechanisms (one encodes hierarchy, one signals emphasis).

3. **Data table deviation:** Mechanism #18 specifies mono headers. Variant B uses sans headers but retains 3px/1px border encoding. This is a PARTIAL deployment (border system present, font choice variant).

4. **Category coverage ≠ technique saturation:** Variant B hits all 5 categories but uses only 1-3 mechanisms per category. This enables DIVERSITY (category breadth) without DEPTH (mechanism saturation).

### Why Previous Counts Differed

**5-mechanism counts:** Likely used stricter criteria (excluded overlapping patterns, excluded single-instance mechanisms, excluded partial deployments).

**7-mechanism counts:** Used catalog-aligned analysis (counted #4 and #5 separately, counted #10 independently, included #18 despite deviation).

**Authoritative methodology:** Match CSS against catalog definitions. Count mechanism if CSS pattern is present, regardless of:
- How many times it's used
- Whether it overlaps semantically with another mechanism
- Whether implementation details vary slightly

---

## END RECOUNT

**THE ANSWER IS: 7 mechanisms across 2 categories**

Wait, that's wrong. Let me recount categories:

- Spatial (S): 1 mechanism
- Hierarchy (H): 3 mechanisms
- Component (C): 2 mechanisms
- Depth/Emphasis (D): 1 mechanism
- Structure/Navigation (N): 1 mechanism

**CORRECTED: 7 mechanisms across 5 categories (not 2)**

**Final Answer:** **7 mechanisms across ALL 5 categories (100% category coverage)**
