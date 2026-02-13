# Component Forensics: Cross-Phase Structural Analysis

**Agent:** component-forensics
**Date:** 2026-02-13
**Methodology:** Programmatic HTML/CSS extraction from 12 exploration files (DD-001, DD-003, DD-006, OD-001, OD-004, OD-006, AD-001, AD-003, AD-006, CD-001, CD-003, CD-006)
**Question:** Are components structurally identical across DD→OD→AD→CD, or did they evolve? If they evolved, what changed — the component itself, or the compositional context around it?

---

## EXECUTIVE SUMMARY

**THE ATOMS DID NOT CHANGE. The molecules barely changed. What changed is what gets built with them.**

Components fall into THREE distinct tiers:

1. **Tier 1 (Atoms)**: Byte-for-byte identical across all 16 explorations. The alphabet is locked.
2. **Tier 2 (Molecules)**: Structurally frozen since DD phase. Progressive enhancement only (accessibility, variant vocabulary). The vocabulary crystallized early and stayed stable.
3. **Tier 3 (Organisms)**: Invented fresh for each exploration's metaphor. NOT extractable — meaning is inseparable from context. The prose varies infinitely from the same alphabet.

The variety across phases comes from **metaphor-driven composition (Tier 3)**, not from changing base components (Tier 1/2). ~95% of visual variety is compositional, ~5% is genuine new Tier 2 vocabulary.

---

## 1. COMPONENT INVENTORY: WHAT EXISTS IN EACH PHASE

### DD Phase (Density Dimensions)

| Component Type | DD-001 | DD-003 | DD-006 | Structural Pattern |
|----------------|--------|--------|--------|-------------------|
| **Callout (essence)** | ✓ | ✓ | ✓ | `.callout-essence` > `.callout-essence__label` + `.callout-essence__content` |
| **Callout (tip)** | ✓ | ✓ | - | `.callout-tip` > `.callout-tip__label` + `.callout-tip__content` |
| **Callout (gotcha)** | ✓ | - | - | `.callout-gotcha` > `.callout-gotcha__label` + `.callout-gotcha__content` |
| **Callout (info)** | ✓ | ✓ | ✓ | `.callout-info` > `.callout-info__label` + `.callout-info__content` |
| **Code block** | ✓ | ✓ | ✓ | `.code-snippet` > `.code-snippet__header` + `.code-snippet__content` |
| **Page header** | ✓ | ✓ | ✓ | `.exploration-header` > `.exploration-id` + `.exploration-title` + `.exploration-hypothesis` |
| **Skip link** | ✓ | ✓ | ✓ | `.skip-link` (accessibility) |
| **File tree** | ✓ | ✓ | - | `.file-tree` > `.file-tree__label` + `.file-tree__content` |
| **Decision matrix** | ✓ | ✓ | - | `.decision-matrix` > `.decision-matrix__header` + `.decision-matrix__row` |
| **Dense grid** | ✓ | - | - | `.dense-grid` > `.dense-card` (DD-001 specific) |
| **Density island** | - | ✓ | - | `.density-island` > `.density-island__label` + `.density-island__title` + `.density-island__content` (DD-003 metaphor) |
| **Fractal nested boxes** | - | - | ✓ | `.fractal-nested` > `.fractal-nested__label` + `.fractal-nested__content` (DD-006 metaphor) |
| **Scale demonstration** | - | - | ✓ | `.scale-demo`, `.page-scale`, `.section-scale`, `.component-scale`, `.character-scale` (DD-006 metaphor) |

### OD Phase (Organizational Dimensions)

| Component Type | OD-001 | OD-004 | OD-006 | Structural Pattern |
|----------------|--------|--------|--------|-------------------|
| **All DD Tier 2 components** | ✓ | ✓ | ✓ | Inherited unchanged |
| **Q&A pair** | ✓ | - | ✓ (section 1) | `.question` + `.answer` (OD-001 metaphor) |
| **Geological strata** | - | ✓ | ✓ (section 4) | `.stratum--established/probable/speculative/open` (OD-004 metaphor) |
| **Confidence badge** | - | ✓ | - | `.confidence-badge` (OD-004 metaphor) |
| **Geological survey header** | - | ✓ | - | `.geological-survey` (OD-004 metaphor) |
| **Scroll witness TOC** | ✓ | - | ✓ | `.scroll-witness` > `.scroll-witness__item` (OD-001 invention, reused in OD-006) |
| **Solid offset** | ✓ | ✓ | ✓ | `::after { background: var(--offset-color); }` (EXT-CREATIVE-001, OD-001 invention) |
| **Drop cap** | - | - | ✓ | `.drop-cap::first-letter` (EXT-CREATIVE-005, OD-006 invention) |
| **Fractal annotations** | - | - | ✓ | `.fractal-annotations` (EXT-CREATIVE-010, OD-006 invention) |
| **Visual index grid** | - | - | ✓ | `.visual-index` (EXT-CREATIVE-009, OD-006 invention) |
| **Dual lens toggle** | - | - | ✓ | `.dual-lens` (EXT-CREATIVE-007, OD-006 invention) |

---

## 2. CROSS-PHASE COMPARISON: SAME COMPONENT, DIFFERENT PHASES

### 2A. Callout Component — THE INVARIANT CORE

**Structure:** Identical 2-zone DNA across ALL 12 files examined.

```html
<div class="callout-{variant}">
  <div class="callout-{variant}__label">{VARIANT}</div>
  <div class="callout-{variant}__content">{content}</div>
</div>
```

**Invariant CSS Properties (ALL phases):**

| Property | DD | OD | AD | CD |
|----------|----|----|----|----|
| `border-left` | `4px solid [accent]` | `4px solid [accent]` | `4px solid [accent]` | `4px solid [accent]` |
| Label `font-size` | `10px` | `10px→12px` (convention fix v3) | `12px` | `12px` |
| Label `font-weight` | `600` | `600` | `600` | `600` |
| Label `text-transform` | `uppercase` | `uppercase` | `uppercase` | `uppercase` |
| Label `letter-spacing` | `0.1em` | `0.1em` | `0.08-0.1em` | `0.1em` |
| Essence `font-family` | `var(--font-display)` | `var(--font-display)` | `var(--font-display)` | `var(--font-display)` |
| Essence `font-style` | `italic` | `italic` | `italic` | `italic` |

**What EVOLVED:**

| Aspect | DD | OD | AD | CD |
|--------|----|----|----|----|
| **Variant count** | ~4 (essence, tip, gotcha, info) | ~7 (adds checkpoint, prereq, warning, insight, discovery) | ~5 (standardized: note, tip, gotcha, caution, essence) | ~6 (adds challenge) |
| **Background** | `rgba()` at 0.05-0.08 opacity | Solid `#F0EBE3` or zone tokens | Solid zone tokens | Solid zone tokens + custom tints (CD-006) |
| **Label font** | `var(--font-body)` | `var(--font-mono)` (OD-003) → `var(--font-body)` (OD-001, convention) | `var(--font-body)` | `var(--font-body)` |

**VERDICT:** The callout DNA (2-zone, 4px left border, uppercase label, essence italic) is FROZEN. The variant vocabulary fluctuated (4→7→5→6). Background evolved from semi-transparent to opaque (comprehensive audit fix). The structure never changed.

### 2B. Code Block Component — PROGRESSIVE SYNTAX ENHANCEMENT

**Structure:** Identical dark-background pattern across ALL phases.

```html
<div class="code-snippet">
  <div class="code-snippet__header">
    <span class="code-snippet__filename">{filename}</span>
    <button class="code-snippet__copy">Copy</button>
  </div>
  <div class="code-snippet__content">
    {code with syntax highlighting}
  </div>
</div>
```

**Invariant CSS Properties:**

| Property | All Phases |
|----------|-----------|
| Background | `#1A1A1A` (dark, per convention spec fix) |
| Font | `var(--font-mono)` |
| Text color | `#FAFAF5` or similar off-white |
| Border-radius | `0` |
| Box-shadow | `none` |

**What EVOLVED:**

| Aspect | DD | OD | AD | CD |
|--------|----|----|----|----|
| **Syntax classes** | None or minimal | Some (`.keyword`, `.string`) | Standard set (5-6 classes) | Full custom (`.kw`, `.fn`, `.st`, `.nu`, `.cm`, `.pu`) |
| **Line numbers** | None | Added in OD-005 | Standard | Standard |
| **Copy button** | Some files | Standard | Standard | Standard |
| **Syntax palette** | Basic | Expanding | Convention-aligned | Convention-aligned + extended |

**Syntax Color Convention (emerged in OD, locked in AD/CD):**

```css
.keyword { color: #E83025; }  /* Primary red */
.string  { color: #6B9B7A; }  /* Muted green */
.function { color: #4A7C9B; } /* Accent blue */
.variable { color: #C97065; } /* Accent coral */
.comment { color: #666666; }  /* Text secondary */
```

**VERDICT:** Core pattern (dark bg, monospace, sharp edges) is IDENTICAL. Syntax highlighting sophistication INCREASED progressively. The base component is reusable; syntax coloring is progressive enhancement.

### 2C. Page Header Component — STRUCTURAL STABILITY, METADATA GROWTH

**Structure:** Identical dark-header-with-red-border across ALL phases.

```html
<header class="exploration-header">
  <div class="exploration-header__inner">
    <div class="exploration-id">{ID}</div>
    <h1 class="exploration-title">{Title}</h1>
    <p class="exploration-hypothesis">{Hypothesis}</p>
    <div class="exploration-meta">{metadata}</div>
  </div>
</header>
```

**Invariant CSS Properties:**

| Property | All Phases |
|----------|-----------|
| Background | `#1A1A1A` (dark, per OD convention spec) |
| Border-bottom | `3px solid var(--color-primary)` |
| Title font | `var(--font-display)` |
| Title font-style | `italic` |
| ID font | `var(--font-mono)` |
| ID color | `var(--color-primary)` or `var(--color-text-secondary)` |

**What EVOLVED:**

| Aspect | DD | OD | AD | CD |
|--------|----|----|----|----|
| **Skip link** | Some files | Most files | All files | All files |
| **ARIA attributes** | Minimal | Moderate | Full (`role`, `tablist`) | Full |
| **Metadata complexity** | Simple (ID + title) | Moderate (adds density pairing, research refs) | Full (density + OD + research + v2/v3 badges) | Full |
| **Inner wrapper** | None | `.exploration-header__inner` for max-width constraint | Standard | Standard |

**VERDICT:** The header DNA (dark bg, 3px red border-bottom, display font title) is IDENTICAL. The metadata/navigation layer EVOLVED in complexity. Accessibility infrastructure accumulated from DD→OD→AD→CD. The visual pattern never changed.

### 2D. Border Width Vocabulary — THE KEY EVOLUTION

**This is where meaningful structural evolution occurs.**

| Width | DD Usage | OD Usage | AD Usage | CD Usage |
|-------|----------|----------|----------|----------|
| **1px** | Cat 2 separators | Cat 2 + Cat 3 micro | Cat 2 separators | Cat 2 separators |
| **2px** | Casual use (pre-convention) | **INTENTIONAL semantic** (OD-004: confidence=2px speculative, per EXT-CONF-013) | **Eliminated** (post-audit) | **Eliminated** (except semantic per Rule 5 inversion) |
| **3px** | Cat 1 structural | Cat 1 structural + footer | Cat 1 structural + stratum transitions | Cat 1 structural + section transitions |
| **4px** | Callout left-accent | Callout + confidence bedrock | Callout + `--border-left-width` variable | Callout + `--border-left-width` variable |

**Evolution Pattern:**

```
DD:  2px casual  → OD:  2px semantic     → AD:  2px eliminated → CD:  2px eliminated
     (epidemic)       (confidence encoding)     (audit cleanup)      (Rule 5 exception only)
```

**VERDICT:** Border width vocabulary EVOLVED. DD is pre-convention (2px casual). OD reclaimed 2px as SEMANTIC tool (confidence gradient: 4px/3px/2px/1px in OD-004). AD/CD eliminated 2px (comprehensive audit "2px epidemic" fix) except where semantically justified. The 4px callout accent and 3px structural border are INVARIANT.

---

## 3. TIER CLASSIFICATION: EXTRACTABLE VS. COMPOSITIONAL

### 3A. Tier 1 (Atoms) — 100% Extractable

**Definition:** Design tokens or constraints that cannot be decomposed further.

**Examples from analysis:**

| Token | DD | OD | AD | CD | Verdict |
|-------|----|----|----|----|---------|
| `--color-primary` | `#E83025` | `#E83025` | `#E83025` | `#E83025` | **IDENTICAL** |
| `--color-background` | `#FEF9F5` | `#FEF9F5` | `#FEF9F5` | `#FEF9F5` | **IDENTICAL** |
| `--color-text` | `#1A1A1A` | `#1A1A1A` | `#1A1A1A` | `#1A1A1A` | **IDENTICAL** |
| `--color-border` | `#E0D5C5` | `#E0D5C5` | `#E0D5C5` | `#E0D5C5` | **IDENTICAL** |
| `--font-display` | `'Instrument Serif', Georgia, serif` | Identical | Identical | Identical | **IDENTICAL** |
| `--font-body` | `'Inter', system-ui, sans-serif` | Identical | Identical | Identical | **IDENTICAL** |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | Identical | Identical | Identical | **IDENTICAL** |
| `--border-radius` | `0` | `0` | `0` | `0` | **LOCKED** |
| `--box-shadow` | `none` | `none` | `none` | `none` | **LOCKED** |
| `--border-left-width` | `4px` | `4px` | `4px` | `4px` | **LOCKED** |

**Extractability:** 100%. Copy the `:root` block. ~80 lines of CSS.

**Compositional logic:** NONE. Pure values.

**Evidence:** Source-comparator agent confirmed byte-for-byte identity across all 16 files (per existing synthesis).

### 3B. Tier 2 (Molecules) — 90%+ Extractable

**Definition:** A styled element with internal structure that maintains identity regardless of context.

**Universal Tier 2 Components (present in ALL phases, structurally identical):**

| Component | Structure | Lines | Best Extraction Source |
|-----------|-----------|-------|------------------------|
| **Callout family** | 2-zone (label + body), 4px left border, uppercase label | ~80 | AD-003 (cleanest BEM) or CD-006 (most variants) |
| **Code block** | Dark bg + syntax highlighting | ~40 | CD-006 (most complete syntax palette) |
| **Page header** | Dark bg + 3px red border + title | ~30 | CD-006 (includes skip-link, ARIA, full metadata) |
| **Page footer** | Dark bg + 3px red border-top | ~20 | CD-006 |
| **Inline code** | Subtle bg + 1px border + mono font | ~10 | Any AD/CD file |
| **Skip link** | Absolute-positioned, focus-reveal | ~15 | Any AD/CD file |
| **Selection styling** | Primary bg + background text | ~5 | Any file |
| **Focus-visible** | 3px solid primary, 2px offset | ~5 | Any AD/CD file |

**Extractability:** HIGH (90%+). Extract the CSS class + HTML structure. Works anywhere.

**Compositional logic:** MINIMAL. A callout has internal layout (label above body, border on left) but NO dependency on surrounding context. Place a callout inside a bento cell, a spoke section, or a standalone page → it looks the same.

**Evidence:** The 2-zone callout DNA, dark code block, dark header — these structural patterns appear unchanged in all 12 files examined.

### 3C. Tier 2.5 (Reusable Patterns) — 70% Extractable

**Definition:** Layout systems that work in many contexts but require judgment to apply correctly.

**Reusable Layout Patterns (cross-phase):**

| Pattern | Invented In | Reused In | CSS Extractability | Judgment Required |
|---------|------------|-----------|-------------------|-------------------|
| **Solid offset depth** | OD-001 (EXT-CREATIVE-001) | OD-004, OD-006, AD-005, AD-006 | HIGH (pseudo-element with offset vars) | When to apply (featured elements only) |
| **Scroll witness TOC** | OD-001 (EXT-CREATIVE-003) | OD-006, AD-006 | MEDIUM (CSS custom properties + scroll timeline) | Section structure must exist |
| **Drop cap** | OD-006 (EXT-CREATIVE-005) | AD-006, CD-006 | HIGH (`::first-letter` with display font) | When to use (section openings only) |
| **Confidence encoding** | OD-004 (geological strata) | OD-006, CD-004, CD-006 | MEDIUM (border-weight gradient) | Meaning of 4px/3px/1px must be documented |
| **Fractal annotations** | OD-006 (EXT-CREATIVE-010) | - | LOW (requires persistent sidebar grid) | Content must demonstrate fractal scales |

**Extractability:** MODERATE (70%). The CSS is portable, but knowing WHEN to use it requires judgment.

**Compositional logic:** MODERATE. A solid offset can be placed anywhere, but the DECISION to make an element "featured" via offset is compositional judgment.

### 3D. Tier 3 (Organisms) — 0-30% Extractable

**Definition:** Visual arrangements deriving meaning from their metaphor and position within a composition.

**Tier 3 Components by Phase:**

| Phase | Metaphor-Specific Components | Why Non-Extractable |
|-------|------------------------------|---------------------|
| **DD-001** | Breathing sections (`.section-exhale`, `.section-inhale`) | Padding values (92px vs 24px) are ARBITRARY outside PULSE metaphor |
| **DD-003** | Density islands (`.density-island`, `.sparse-ocean`, `.archipelago`) | "Island-ness" IS the ocean whitespace. Extract the box, lose the metaphor. |
| **DD-006** | Fractal nested boxes (`.fractal-nested`) | Nesting levels (3-4 deep) only make sense demonstrating self-similarity |
| **OD-001** | Q&A pairs (`.question`, `.answer`) | Width variation (60% vs 100%) encodes TIDAL. Remove context, values are meaningless. |
| **OD-004** | Geological strata (`.stratum--established/probable/speculative/open`) | Border-weight gradient (4px/3px/2px/1px) IS confidence encoding. Extract border, lose meaning. |
| **OD-006** | Visual index grid, dual lens, fractal annotations | Entire section structure demonstrates "organization IS density" thesis |

**Extractability:** ZERO to PARTIAL. You can extract CSS for a bento grid. You CANNOT extract the specific 2x2/2x1/1x1 span pattern that makes a particular bento grid answer a particular organizational question.

**Compositional logic:** TOTAL. The metaphor IS the component.

**Critical Test: The Meaning Test**

> If the component's visual properties carry meaning only because of the metaphor it serves, it is Tier 3 (composition fragment), not Tier 2 (extractable component).

**Practical test:** Can you rename the CSS class to something generic (`.bordered-section`, `.accent-container`) without losing what makes it distinctive?

- YES → Tier 2 (visual properties stand alone)
- NO → Tier 3 (meaning requires metaphor)

Example:
- `.callout-essence` → `.accent-callout` ✓ (Tier 2: the 4px amber border + italic serif body work anywhere)
- `.stratum--established` → `.bordered-section` ✗ (Tier 3: the 4px border only means "high confidence" in geological context)

---

## 4. COMPONENT EVOLUTION: DID COMPONENTS CHANGE OR DID CONTEXT CHANGE?

### 4A. The Sameness Impossibility

**Question:** Are the atoms the same arranged differently, OR have the atoms themselves changed?

**Answer:** THE SAME ATOMS. Arranged differently. The atoms have NOT changed.

**Evidence:**

1. **Tier 1 tokens are byte-for-byte identical** across all 12 files examined (DD-001→CD-006).
2. **Tier 2 structural components are invariant** (callout 2-zone, code dark theme, header dark-bg-with-red-border).
3. **What creates variety is Tier 3 composition** — same atoms arranged into different metaphors.

**The 4px Left Border Proof:**

This single atom (`border-left: 4px solid [color]`) appears in EVERY file with DIFFERENT contextual meaning:

| File | 4px left border meaning |
|------|----------------------|
| DD-003 | Density island container (importance signal) |
| DD-006 | Fractal nesting structural emphasis |
| OD-001 | Question marker (conversational structure) |
| OD-004 | Established stratum (highest confidence) |
| OD-006 | Callout emphasis + confidence encoding |
| AD-003 | Bento cell featured status |
| AD-006 | Discovery log structural emphasis |
| CD-003 | File tree + callout emphasis |
| CD-006 | Pattern card + section emphasis |

**Same atom. Same CSS property. Different meaning in every context.**

The variety comes from **contextual meaning assignment** (Tier 3 composition), not from changing the atom (Tier 1).

### 4B. What Creates Variety Across Pages?

**Answer:** PRIMARILY different questions (tensions) producing different metaphors using the SAME building blocks (~95%). Secondarily, a small number of genuinely new Tier 2 components (~5%).**

**Primary Driver: Different Questions**

Each phase asks a fundamentally different question:

| Phase | Core Question | Metaphors Generated |
|-------|---------------|-------------------|
| DD | "How does information density vary?" | Islands/ocean, geological layers, rivers, fractals |
| OD | "How should content be organized for its reader?" | Conversations, narratives, tasks, confidence, hub-spoke |
| AD | "What axis pattern best serves reading flow?" | Z-pattern, F-pattern, bento, spiral, choreography, compound |
| CD | "How do patterns combine?" | Transition grammar, multi-axis sequencing |

**Component Count Evidence:**

From existing synthesis:
- **Shared across ALL 16 files:** ~7-9 components (Tier 2)
- **Unique to ONE phase:** 32 (DD) + 46 (OD) + 57 (AD) + 2 (CD) = 137 metaphor-dependent components (Tier 3)
- **Ratio:** ~8 shared vs ~137 unique = **~95% of variety is Tier 3 (metaphor-driven), ~5% is Tier 2 (genuine new vocabulary)**

**Secondary Driver: Genuine New Tier 2 Inventions**

Small number of components were invented and propagated:

| Component | Invented In | Propagated To | Status |
|-----------|------------|---------------|--------|
| Solid offset depth | OD-001 (OD-004, OD-006, AD-005, AD-006 | Tier 2 |
| Scroll witness TOC | OD-001 | OD-006, AD-006 | Tier 2 |
| Drop cap | OD-006 | AD-006, CD-006 | Tier 2 |
| Confidence encoding | OD-004 | OD-006, CD-004, CD-006 | Tier 2.5 (requires semantic context) |
| Fractal annotations | OD-006 | - | Tier 2.5/3 (highly metaphor-specific) |

**These are ~6 components out of ~137 total unique components. The vocabulary grew by ~6 words; the prose produced ~137 unique arrangements.**

### 4C. Did the Definition of "Component" Change?

**Answer: YES. There are three distinct meanings operating simultaneously.**

```
DD:  Component = visual container (CSS box with properties)
OD:  Component = behavioral organism (CSS box + semantic encoding + interaction)
AD:  Component = structural system (locked layer + axis layer, system > parts)
CD:  Component = compositional grammar (relationships between existing components)
```

This is NOT a contradiction. Each phase **added a layer of meaning** on top of the previous one:

- A CD component is still a visual container (DD)
- Still has behavioral encoding (OD)
- Still participates in a structural system (AD)
- And now also expresses compositional grammar (CD)

The definition ACCUMULATED, not REPLACED.

---

## 5. EXTRACTION STRATEGY: WHAT TO TAKE, WHAT TO LEAVE

### 5A. Extract Tier 1 (Atoms) — ~80 Lines

**What to extract:**

```css
:root {
  /* Colors — LOCKED */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Typography — LOCKED */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Type Scale — 5-level cascade (~1.5x ratio) */
  --type-page: 2.5rem;
  --type-section: 1.625rem;
  --type-subsection: 1.375rem;
  --type-body: 1rem;
  --type-code: 0.875rem;
  --type-meta: 0.75rem;

  /* Geometry — LOCKED */
  --border-radius: 0;
  --box-shadow: none;

  /* Spacing */
  --space-1: 4px;   --space-8: 32px;
  --space-2: 8px;   --space-10: 40px;
  --space-3: 12px;  --space-12: 48px;
  --space-4: 16px;  --space-16: 64px;
  --space-5: 20px;  --space-20: 80px;
  --space-6: 24px;

  /* Callout Accents */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-amber: #D97706;
  --accent-coral: #C97065;
  --accent-purple: #7C3AED;

  /* Standardized Border */
  --border-left-width: 4px;
}

* { border-radius: 0; box-shadow: none; }
::selection { background: var(--color-primary); color: var(--color-background); }
*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
```

**Source:** Any AD or CD file (identical).

### 5B. Extract Tier 2 (Molecules) — ~175 Lines

**What to extract:**

1. **Callout family** (5-6 variants + essence italic) — ~80 lines
2. **Code block** (dark theme + syntax highlighting) — ~40 lines
3. **Page header** (dark bg + skip link + metadata) — ~30 lines
4. **Inline code** (subtle bg, 1px border, mono font) — ~10 lines
5. **Accessibility** (skip-link, focus-visible, reduced-motion) — ~15 lines

**Best sources:**
- Callouts: AD-003 (cleanest BEM structure)
- Code block: CD-006 (most complete syntax palette)
- Header: CD-006 (full accessibility + metadata)

**Total extractable Tier 1 + Tier 2: ~255 lines. Covers ~60-70% of any file's CSS.**

### 5C. Extract Tier 2.5 (Patterns) — ~145 Lines

**What to extract (with usage guidance):**

1. **Solid offset** (pseudo-element depth) — from OD-001
2. **Scroll witness TOC** (progress tracking) — from OD-006
3. **Drop cap** (`::first-letter`) — from OD-006
4. **Confidence encoding** (border-weight gradient) — from OD-004 (DOCUMENT semantic meaning)
5. **Fractal annotations** (sidebar marginalia) — from OD-006 (HIGHLY context-specific)

**Total extractable Tier 1 + 2 + 2.5: ~400 lines.**

### 5D. Do NOT Extract Tier 3 — Document as Patterns

| Component | Why NOT Extractable |
|-----------|---------------------|
| Density islands (DD-003) | The "ocean whitespace" + offset positioning IS the design. Generic bordered box loses metaphor. |
| Fractal nested boxes (DD-006) | Nesting depth (3-4 levels) only makes sense demonstrating self-similarity at scale. |
| Q&A width variation (OD-001) | Width ratio (60%/100%) encodes TIDAL metaphor. Remove context, values are arbitrary. |
| Geological strata (OD-004) | Border-weight gradient (4px→3px→2px→1px) only means "confidence" in geological context. |
| Bento span patterns (AD-003, CD-005) | The 2x2/2x1/1x1 span configuration encodes information hierarchy. Grid is extractable; decisions are not. |

**For Tier 3: Document as prose patterns, not CSS components.**

Example pattern documentation:

```markdown
## Pattern: Confidence-Based Stratification (Geological)

**When to use:** Content has clear certainty gradients (established → probable → speculative → open).

**Visual encoding:**
- 4px border-left = Established (highest confidence)
- 3px border-left = Probable
- 2px border-left = Speculative (INTENTIONAL semantic use per Rule 5 inversion)
- 1px border-left = Open questions (lowest confidence)

**Density correlation:** Inverse. Certain=sparse (40px padding), uncertain=dense (16px padding).

**Fractal application:** Page (strata), section (intro/detail/evidence), component (label/body).

**DO NOT:** Extract this as a generic "4px border component". The border-weight IS the confidence encoding. Meaning requires geological metaphor.
```

---

## 6. KEY FINDINGS: DID COMPONENTS EVOLVE?

### Finding 1: The Atoms Are Frozen

Tier 1 tokens (colors, fonts, spacing, geometry) are **byte-for-byte identical** across all 12 files examined. The alphabet is locked. No drift, no variation.

### Finding 2: The Molecules Crystallized Early

Tier 2 components (callout, code block, header) **structurally froze in DD phase**. What evolved:
- Variant vocabulary fluctuated (4→7→5→6 callout types)
- Accessibility infrastructure accumulated (skip-links, ARIA)
- Background enforcement matured (rgba → opaque)
- Border semantics refined (2px eliminated post-audit)

**The 2-zone callout DNA, dark code block, dark header — these never changed.**

### Finding 3: Tier 3 IS the Variety

~95% of visual variety across phases comes from **Tier 3 metaphor-driven composition**:
- DD: 32 unique components (islands, layers, rivers, fractals)
- OD: 46 unique components (conversations, narratives, tasks, confidence, hub-spoke, synthesis)
- AD: 57 unique components (axis patterns, bento, spiral, choreography)
- CD: 2 genuine + 5 layout mechanisms

**Same atoms. Different metaphors. Different prose.**

### Finding 4: Composition Bleeds Into Components

Tier 3 components carry **HEAVY compositional logic**:
- A geological stratum's 4px border only means "high confidence" in geological context.
- A bento grid's 2x2 span only means "conceptual anchor" when answering organizational questions.
- A Q&A width ratio (60%/100%) only encodes TIDAL when serving conversational structure.

**The line:** If you can rename the class to something generic without losing distinctiveness → Tier 2. If renaming destroys meaning → Tier 3.

### Finding 5: Organization IS Density (OD-F-005 Proven)

OD-006 demonstrated that **organizational patterns DO NOT "create" density — they ARE density:**
- Conversational Q&A IS PULSE (not "creates" PULSE)
- Narrative arc IS CRESCENDO (not "creates" CRESCENDO)
- Task clusters ARE ISLANDS (not "create" ISLANDS)

The distinction between organization and density is **artificial**. They are the same phenomenon observed from two perspectives.

This explains why ~95% of variety is compositional: the **metaphor shapes the arrangement, which IS the density.**

### Finding 6: The Definition of "Component" Accumulated

```
DD:  Component = visual box (CSS properties)
  ↓
OD:  + semantic encoding (border-weight = confidence)
  ↓
AD:  + structural system (locked layer + axis layer)
  ↓
CD:  + compositional grammar (pattern relationships)
```

Each phase **added meaning**, not replaced it. A CD component is ALL four simultaneously.

### Finding 7: Extraction Strategy is Tier-Dependent

| Tier | Extractability | Method |
|------|----------------|--------|
| Tier 1 (Atoms) | 100% | Copy `:root` block (~80 lines) |
| Tier 2 (Molecules) | 90%+ | Extract CSS class + HTML structure (~175 lines) |
| Tier 2.5 (Patterns) | 70% | Extract CSS + usage guidance (~145 lines) |
| Tier 3 (Organisms) | 0-30% | Document as prose patterns, NOT CSS |

**Total extractable CSS: ~400 lines. Covers 60-70% of any file.**

The remaining 30-40% is **non-extractable Tier 3 composition** — must be composed fresh per page from its own tension, using Tier 1+2 as building blocks.

---

## 7. IMPLICATIONS FOR EXTRACTION

### For Migration Pipeline

**Phase 1 (Extract shared base):**
1. Extract Tier 1 tokens → `tokens.css` (~80 lines)
2. Extract Tier 2 components → `components.css` (~175 lines)
3. Extract Tier 2.5 patterns → `patterns.css` (~145 lines)
4. Document Tier 3 as prose → `pattern-library.md`

**Total: ~400 lines CSS + pattern documentation.**

**Phase 2 (Per-page composition):**
1. Load shared base (Tier 1 + 2)
2. Select relevant Tier 2.5 patterns
3. **Compose Tier 3 fresh** from page's tension
4. Apply DD-F-006 fractal constraint (4 scales)
5. Verify soul compliance (5 pieces)

**The creative act is Tier 3 composition.** This CANNOT be automated. The pipeline must **provide the blocks** (Tier 1+2) and **enable composition** (Tier 2.5 patterns + prose guidance), not attempt to extract the uncomposable.

### For Content Ingestion

**New content entering the system:**

1. **Determine tension:** What question does this content answer? What metaphor serves it?
2. **Select Tier 2.5 patterns:** Does this need conversational? Narrative? Confidence-based?
3. **Compose Tier 3:** Create metaphor-specific arrangements using Tier 1+2 as atoms.
4. **Verify fractal:** Dense/sparse rhythm at all 4 scales (page, section, component, character).
5. **Verify soul:** 5 pieces intact (border-radius: 0, box-shadow: none, serif, earth tones, whitespace).

**The ingestion is NOT template-filling. It is COMPOSITION using a fixed alphabet (Tier 1) and stable vocabulary (Tier 2).**

### For Component Library

**What to include in the library:**

✅ **Include:**
- Tier 1 tokens (complete `:root` block)
- Tier 2 components (callout, code, header, inline code, accessibility)
- Tier 2.5 patterns WITH usage guidance (solid offset, scroll witness, drop cap, confidence encoding)

❌ **Do NOT include:**
- Tier 3 organisms as "components" (they are compositional fragments, not reusable components)
- Bento span patterns as fixed layouts (the grid is extractable, the span decisions are compositional judgment)
- Metaphor-specific classes (`.density-island`, `.stratum--established`) without documenting their semantic context

**DO include pattern documentation** explaining WHEN to compose Tier 3 fresh (e.g., "Use confidence encoding when content has clear certainty gradients").

---

## 8. CONCLUSION

### The Central Finding

**Components did NOT evolve. Context evolved.**

- Tier 1 (atoms): FROZEN since DD-001
- Tier 2 (molecules): CRYSTALLIZED by OD, stable through CD
- Tier 3 (organisms): INVENTED FRESH in every exploration

**The variety across DD/OD/AD/CD is NOT because components changed. It is because different questions produced different metaphors using the SAME components.**

The system is a **language**:
- **Tier 1** = alphabet (26 letters, fixed)
- **Tier 2** = vocabulary (~50 words, slowly growing)
- **Tier 3** = prose (infinite variety from finite vocabulary)

**The design system is a printing press, not a template library.**

### The Extraction Principle

Extract the **atoms** (Tier 1). Extract the **vocabulary** (Tier 2). Document the **grammar** (Tier 2.5). **Compose the prose fresh** (Tier 3) from each page's unique tension.

Do NOT attempt to extract the uncomposable. Tier 3 metaphor-driven composition CANNOT transmit via CSS alone. It requires:
1. Understanding the page's question/tension
2. Selecting the metaphor that serves it
3. Composing Tier 3 arrangements using Tier 1+2 as blocks
4. Verifying fractal self-similarity (DD-F-006)
5. Verifying soul compliance (5 pieces)

**This is the creative act. This is what the pipeline enables, not replaces.**

### The Metaphor Shapes Experience Principle

From skill enrichment root cause:

> "The metaphor shapes experience; the guardrails prevent it from breaking experience."

- **Tier 1+2 are the guardrails** (locked tokens, stable components)
- **Tier 3 is the metaphor** (compositional arrangements that serve content)

The pipeline must **enforce the guardrails** (via locked Tier 1+2) while **enabling metaphor** (via Tier 2.5 patterns + compositional freedom).

**Extract 60-70% (Tier 1+2+2.5). Compose 30-40% fresh (Tier 3). This is the architecture.**

---

## APPENDIX: COMPONENT LINEAGE TABLE

Definitive trace of every Tier 2 component's origin and evolution:

| Component | First Appearance | Structural Changes | Current Canonical Form | Tier |
|-----------|-----------------|-------------------|----------------------|------|
| **Callout (2-zone)** | DD-001 | Variants: 4→7→5→6. Background: rgba→opaque. Label font: mono→body. | AD-003 (cleanest BEM) | T2 |
| **Code block (dark)** | DD-001 | Syntax: none→some→standard→full. Line numbers: added OD-005. Copy button: added. | CD-006 (most complete) | T2 |
| **Page header (dark)** | DD-001 | Metadata: simple→moderate→full. Skip-link: partial→universal. ARIA: added AD. | CD-006 | T2 |
| **Inline code** | DD-001 | None. Always mono + subtle bg + 1px border. | Any AD/CD file | T2 |
| **Skip link** | DD (some) | Coverage: partial→partial→universal. | Any AD/CD file | T2 |
| **Solid offset** | OD-001 | None. 4px right/down, `--offset-color` bg pseudo-element. | OD-001 | T2.5 |
| **Scroll witness TOC** | OD-001 | Progress bars: CSS custom properties + scroll timeline. | OD-006 (most complete) | T2.5 |
| **Drop cap** | OD-006 | None. `::first-letter` 3.5-4.2em, float left, primary color. | OD-006 | T2 |
| **Confidence encoding** | OD-004 | Border-weight: 4px/3px/2px/1px (OD)→4px/3px/1px (AD, 2px eliminated). | OD-004 (semantic context required) | T2.5 |
| **Fractal annotations** | OD-006 | Persistent sidebar, vertical-lr text, rotation. | OD-006 | T2.5/T3 |
| **Density islands** | DD-003 | N/A — metaphor-specific | DD-003 | T3 |
| **Geological strata** | DD-004/OD-004 | Border-weight as confidence. Padding inverse to confidence. | OD-004 | T3 |
| **Q&A pairs** | OD-001 | Width variation 60%/100%. Background differentiation. | OD-001 | T3 |
| **Bento grid** | AD-003 | Span patterns vary per content. Gap: 32px→24px (CD-006). | AD-003 (CSS), per-content (spans) | T2.5 (grid) / T3 (spans) |

---

**END FORENSICS REPORT**
