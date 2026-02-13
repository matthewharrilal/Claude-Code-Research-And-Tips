# Component Evolution Synthesis: The Definitive Answer

**Agent:** synthesizer
**Date:** 2026-02-12
**Sources:** 5 audit reports (DD, OD, AD, CD visual audits + source-level comparison) + tension protocol synthesis
**Scope:** DD-003 through DD-006, OD-003 through OD-006, AD-003 through AD-006, CD-003 through CD-006 (16 explorations)
**Total evidence analyzed:** ~3,300 lines across 5 audit reports + ~5,700 lines in tension protocol synthesis

---

## The Short Answer

The atoms did not change. The molecules barely changed. What changed is what gets built with them.

Across all 16 exploration files spanning 4 phases (DD, OD, AD, CD), the foundational design tokens (Tier 1) are **byte-for-byte identical**. The reusable components (Tier 2) crystallized by the OD phase and remain structurally frozen through AD and CD. What proliferates is the Tier 3 layer -- metaphor-dependent compositions that are invented fresh for each exploration and cannot be extracted.

The system is not a component library that grew. It is a language whose alphabet was fixed early, whose vocabulary stabilized by mid-project, and whose prose became increasingly sophisticated.

---

## Question 1: Are the base building blocks (atoms / Tier 1) the same across DD -> OD -> AD -> CD?

**Answer: YES. Identical. Zero drift across all 16 files.**

The Tier 1 atoms -- the soul constraints and locked design tokens -- are byte-for-byte identical across every phase:

| Atom | Value | DD (4 files) | OD (4 files) | AD (4 files) | CD (4 files) |
|------|-------|-------------|-------------|-------------|-------------|
| `border-radius` | `0` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `box-shadow` | `none` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--color-primary` | `#E83025` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--color-background` | `#FEF9F5` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--color-text` | `#1A1A1A` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--color-border` | `#E0D5C5` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--color-border-subtle` | `#F0EBE3` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--font-display` | `'Instrument Serif', Georgia, serif` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--font-body` | `'Inter', system-ui, sans-serif` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| 5 accent colors | `#4A90D9`, `#4A9D6B`, `#D97706`, `#C97065`, `#7C3AED` | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |

**Evidence:** The source-comparator agent performed a systematic grep across all 16 files. Every `:root` block declares the same token values. The font assignment to structural roles (display for headings, body for text, mono for code/labels) is consistent across all phases. No hex value drift, no fallback stack variation, no accent color substitution.

**What DID evolve: the enforcement mechanism.** DD files use per-element `border-radius: 0` declarations. OD-006 has 30+ individual selectors each with `border-radius: 0`. AD/CD files use a simpler global `*:where(:not(input, button, select)) { border-radius: 0; }` reset. The result is identical; the method matured.

**One exception: `--type-page` in crown jewels.** OD-006 and CD-006 override `--type-page` from `2.5rem` to `3rem`. This is documented as a deliberate "crown jewel override" -- these are the synthesis/capstone pages of their respective phases. It is not drift; it is a permitted exception that proves the rule.

---

## Question 2: Are the reusable components (molecules / Tier 2) the same or have they evolved?

**Answer: STRUCTURALLY IDENTICAL, with progressive enhancement. The core DNA is frozen; the variant vocabulary and accessibility infrastructure grew.**

### The Invariant Core (unchanged across all 16 files)

| Component | Structure | Invariant Properties |
|-----------|-----------|---------------------|
| **Callout** | 2-zone (label + body), `border-left: 4px solid [accent]` | Label: 10px, 600 weight, uppercase, ~0.1em spacing. Essence body: Instrument Serif italic. |
| **Code Block** | Dark background (`#1A1A1A`), monospace font | Syntax palette: keyword=#E83025, string=#6B9B7A, comment=#666666, function=#4A7C9B, type=#C97065 |
| **Page Header** | Dark background (`#1A1A1A`), `border-bottom: 3px solid #E83025` | Display font title, metadata line |
| **Tables** | No vertical borders, horizontal separators only | `border-bottom: 3px solid` (header, Cat 1), `1px solid` (rows, Cat 2) |
| **Skip Link** | Absolute-positioned, hidden until focus | Background: primary red, reveals on focus |
| **Focus-visible** | `outline: 3px solid var(--color-primary); outline-offset: 2px` | Consistent WCAG treatment |
| **Selection** | `background: var(--color-primary); color: var(--color-background)` | Branded selection |

These components are structurally identical across DD, OD, AD, and CD. You could extract the callout CSS from DD-003 and it would work in CD-006.

### What Evolved: Progressive Enhancement

**Callout variant vocabulary accumulated then contracted:**

| Phase | Variants | Pattern |
|-------|----------|---------|
| DD | ~4 (essence, info, tip, gotcha) | Foundation |
| OD | ~7 (adds checkpoint, prereq, warning, insight, discovery) | Broad exploration |
| AD | ~5 (standardized to note, tip, gotcha, caution, essence) | Consolidation |
| CD | ~6 (adds challenge) | Stable with minor growth |

The structural DNA (2-zone, 4px border-left, uppercase label, essence italic) never changed. Only the variant vocabulary fluctuated.

**Code block sophistication increased:**

| Phase | Features |
|-------|----------|
| DD | Dark bg, basic syntax spans |
| OD | Adds line numbers (OD-005), copy button, `.code-block__header` |
| AD | Standardized dark theme, consistent syntax classes |
| CD | Most complete: custom `.kw`, `.fn`, `.st`, `.nu`, `.cm`, `.pu` token classes |

**Accessibility infrastructure accumulated:**

| Phase | Skip Link | ARIA | Reduced Motion | Focus-visible |
|-------|-----------|------|----------------|---------------|
| DD | Some files | Minimal | Some files | Some files |
| OD | Most files | Moderate | Most files | Most files |
| AD | All files | Full (role, tablist) | All files | All files |
| CD | All files | Full | All files | All files |

AD is the phase where accessibility became mandatory infrastructure. This is an ADDITION, not a change to existing components.

**Border width vocabulary was refined:**

| Width | DD | OD | AD | CD |
|-------|----|----|----|----|
| 1px | Cat 2 separators | Cat 2 + Cat 3 | Cat 2 separators | Cat 2 separators |
| 2px | Casual use (pre-convention) | Intentional semantic (OD-004 confidence) | **Eliminated** | **Eliminated** |
| 3px | Cat 1 structural | Cat 1 structural | Cat 1 structural | Cat 1 structural |
| 4px | Callout accent | Callout + confidence bedrock | Callout + `--border-left-width` var | Callout + `--border-left-width` var |

DD used 2px casually. OD reclaimed 2px as semantic (confidence gradient). The comprehensive audit identified the "2px epidemic" and AD/CD eliminated it (except where semantically justified). The vocabulary contracted from 4 widths to 3.

**Callout background evolution:**

| Mechanism | DD | OD | AD | CD |
|-----------|----|----|----|----|
| Background | `rgba()` at 0.05-0.08 opacity | Solid `#F0EBE3` | Solid zone tokens | Solid zone tokens (CD-006: custom tinted backgrounds) |

DD used semi-transparent rgba backgrounds. The comprehensive audit identified the "rgba epidemic" and AD/CD replaced them with fully opaque semantic backgrounds. CD-006 introduced custom tinted backgrounds per callout type as a crown jewel divergence.

### Tier 2 Summary

The reusable components crystallized by OD and remained structurally frozen through AD and CD. Changes are:
1. **Additive:** More callout variants, more syntax highlighting classes, more accessibility features
2. **Subtractive:** 2px borders eliminated, rgba backgrounds replaced with opaque
3. **Refinement:** Enforcement method improved (per-element to global reset)
4. **Never structural:** The 2-zone callout, the dark code block, the dark header -- these never changed

---

## Question 3: Where do Tier 3 (metaphor-dependent, non-extractable) components appear?

**Answer: Every phase has them. AD has the most (57), OD second (46), DD third (32), CD fewest (2 genuine + 5 layout mechanisms).**

### Tier 3 Component Counts by File

| File | Shared (Tier 2) | Unique (Tier 3) | Total | Tier 3 % |
|------|-----------------|-----------------|-------|----------|
| DD-003 Islands | 6 | 6 (density island, sparse ocean, archipelago, decision matrix, sparse separator, offsets) | 12 | 50% |
| DD-004 Layers | 6 | 9 (5 geological layers, layer indicator, depth transition, topsoil keypoints, subsoil details) | 15 | 60% |
| DD-005 Rivers | 6 | 9 (5 river widths, parallel rivers, river delta, confluence, flow transition) | 15 | 60% |
| DD-006 Fractal | 6 | 8 (fractal nested boxes, 4 scale demos, scale comparison, fractal complete, fractal viz) | 14 | 57% |
| **DD Total** | | **32** | | |
| OD-003 Task | ~8 | 6 (archipelago map, task islands, task steps, bookend front/back, sparse sea) | 14 | 43% |
| OD-004 Confidence | ~8 | 9 (geological column, geological survey, confidence switcher, 4 strata, stratum boundary, evidence DNA, crux block) | 17 | 53% |
| OD-005 Spatial | ~8 | 12 (wave viz, territory grid/tiles, spoke grid, breadcrumb, sidebar panel, decision table, flowchart, return link, wave indicator, spoke divider) | 20 | 60% |
| OD-006 Synthesis | ~8 | 19 (scroll witness, fractal annotations, page layout, section headers, editorial drop cap, dual lens, Q&A pairs, act markers, simplified task islands, simplified confidence strata, hub grid, synthesis grid, visual index, section dividers, pull quote, semantic bridge, solid offset) | 27 | 70% |
| **OD Total** | | **46** | | |
| AD-003 Bento | 12 | 14 (bento grid, bento cell, complexity badge, collapsible details, step list, split layout, category group, bookend front/back, verify list, breathing zone, cell callout, page end, duration badge, RAR block) | 26 | 54% |
| AD-004 Spiral | 12 | 11 (spiral map, strata, stratum transition, confidence badge, pull quote, metadata panel, content grid, comparison grid, open questions, page footer, RAR block) | 23 | 48% |
| AD-005 Choreo | 12 | 14 (hub grid, territory tile, solid offset, diagonal transition, progress bar, breadcrumb, spoke content, breathing zone, axis interstitial, page closing, scroll reveal, code explanation, spoke section, RAR) | 26 | 54% |
| AD-006 Compound | 12 | 18 (scroll witness, axis indicator, drop cap, Z-layout, pattern echo grid, F-layout, triple column, bento grid variant, spiral layout variant, choreo layout variant, decision matrix, transition grammar, discovery log, fractal annotation, collapsible details variant, zone utilities, section meta, scroll-reveal protection) | 30 | 60% |
| **AD Total** | | **57** | | |
| CD-003 File Tree | ~9 | 1 layout mechanism (smooth transition) | 10 | 10% |
| CD-004 Essence | ~9 | 2 (breathing transition, essence at 60% width -- variant, not new) | 11 | 18% |
| CD-005 Multi-Axis | ~9 | 2 layout mechanisms (smooth, bridge transitions) | 11 | 18% |
| CD-006 Crown Jewel | ~9 | 2 new components + 3 layout mechanisms (TOC, drop cap, smooth/bridge/breathing) | 14 | 36% |
| **CD Total** | | **2 genuine + 5 layout** | | |

### The Pattern

- **DD:** ~50-60% Tier 3 (exploring density concepts, inventing from scratch)
- **OD:** ~43-70% Tier 3 (peak invention rate at OD-006 which synthesizes all prior patterns)
- **AD:** ~48-60% Tier 3 (axis patterns as structural systems, growing shared locked layer)
- **CD:** ~10-36% Tier 3 (combining existing components, minimal new invention)

**CD's dramatically lower Tier 3 percentage is the most important structural fact.** CD's entire purpose was to demonstrate that existing components compose -- and they do. CD's contribution is compositional grammar, not new components. This low Tier 3 count is also what the Tension Protocol identifies as the cause of CD feeling "correct but not loved" -- system-facing questions produce assembly, not composition.

### Crown Jewels

Each phase's final exploration (XX-006) has the highest Tier 3 count because it synthesizes the entire phase's discoveries:
- OD-006: 19 unique components (highest single file)
- AD-006: 18 unique components
- DD-006: 8 unique components
- CD-006: 2 genuine + 3 layout mechanisms

---

## Question 4: When we extract components for migration, what exactly are we extracting?

**Answer: ~255 lines of shared CSS covering ~60-70% of any file, plus ~10 reusable layout patterns. The remaining 30-40% is non-extractable metaphor-specific CSS.**

### What to Extract

**Universal Tier 1 (from any AD or CD file -- they are identical):**

| Component | Lines | Source |
|-----------|-------|--------|
| `:root` token block (colors, fonts, spacing, geometry) | ~50 | Any AD/CD file |
| Global soul reset (`border-radius: 0`, `box-shadow: none`, selection, focus-visible, reduced-motion) | ~30 | Any AD/CD file |

**Universal Tier 2 (extract from AD-003 or CD-006 for cleanest implementation):**

| Component | Lines | Best Source |
|-----------|-------|------------|
| Callout family (5-6 variants + essence italic) | ~80 | AD-003 (cleanest BEM) |
| Code block (dark theme + syntax highlighting) | ~40 | CD-006 (most complete) |
| Page header (dark bg + skip link + metadata) | ~30 | CD-006 (includes accessibility) |
| Page footer (dark bg + 3px red border-top) | ~20 | CD-006 |
| Table/decision matrix (no vertical borders) | ~25 | AD-006 or CD-005 |
| Inline code (subtle bg, 1px border, mono font) | ~10 | Any AD/CD file |
| **Total shared base** | **~255** | |

**Reusable Tier 2.5 (from specific phases, usable across contexts):**

| Pattern | Canonical Source | Also Used In |
|---------|-----------------|-------------|
| Bento grid (multi-col with span variants) | AD-003 | CD-003, CD-005, CD-006 |
| Hub-spoke layout (territory tiles + spoke sections) | AD-005 | OD-005, AD-006, CD-006 |
| Confidence gradient (4px/3px/1px border-left encoding) | AD-004 | OD-004, CD-004, CD-006 |
| File tree (mono font, indentation, folder/file styling) | CD-003 | DD-003, DD-004 |
| Task component (checkbox items with label) | OD-003 | AD, CD-004, CD-005, CD-006 |
| Reasoning component (2-column compare with summary) | AD | CD-003, CD-005, CD-006 |
| Core abstraction (label + principle + code proof) | AD | CD-003, CD-005, CD-006 |
| Bookend front/back (orientation + decompression) | OD-003 | AD-003 |
| Solid offset depth (pseudo-element editorial shadow) | OD-004 | OD-005, AD-005, AD-006 |
| Transition grammar (smooth/bridge/breathing) | CD-006 | CD-003, CD-004, CD-005 |

**Estimated total including Tier 2.5: ~400 lines of CSS**

### What NOT to Extract (Tier 3, metaphor-specific)

Every Tier 3 component is non-extractable because its meaning is inseparable from its metaphor:

- DD-003 density islands (meaningless outside density-island metaphor)
- DD-004 geological layers (meaningless outside geological-depth metaphor)
- DD-005 river widths (meaningless outside river-flow metaphor)
- DD-006 fractal nesting (meaningless outside fractal self-similarity metaphor)
- OD-004 stratum boundaries with progress squares (meaningless outside geological confidence metaphor)
- OD-005 wave density indicator (meaningless outside hub-spoke spatial metaphor)
- OD-006 fractal annotations, scroll witness with CSS scroll-driven progress (meaningless outside emergent synthesis metaphor)
- AD-005 diagonal clip-path transitions (meaningless outside choreography metaphor)
- AD-006 pattern echo grid (meaningless outside compound axis metaphor)

These components exist because a specific content demanded a specific metaphor that demanded their invention. They are the prose, not the vocabulary.

### Which Phase to Extract From

| Component Category | Best Source Phase | Why |
|-------------------|-------------------|-----|
| Soul tokens | AD or CD | Cleanest enforcement (global reset) |
| Callout family | AD-003 | Standardized 5-variant set, cleanest BEM |
| Code block | CD-006 | Most complete syntax highlighting |
| Page header/footer | CD-006 | Most complete (skip link, ARIA, metadata) |
| Tables | AD-006 or CD-005 | No vertical borders, clean horizontal separation |
| Bento grid | AD-003 | Canonical implementation |
| Hub-spoke | AD-005 | Most complete (hover, solid offset, territory tile) |
| Confidence encoding | AD-004 | Canonical border-weight gradient |
| Transition grammar | CD-006 | All 3 types (smooth/bridge/breathing) |

---

## Question 5: Does the definition of "component" change across evolutions?

**Answer: YES. There are three distinct meanings of "component" operating simultaneously, and they are conflated at great peril.**

### The Three Tiers of "Component"

**Tier 1: Atoms (Rules)**
- Definition: A design token or constraint that cannot be decomposed further
- Examples: `border-radius: 0`, `--color-primary: #E83025`, `--font-display: 'Instrument Serif'`
- Extractability: 100%. Copy the `:root` block.
- Compositional logic baked in: NONE. These are pure values.

**Tier 2: Molecules (Reusable Components)**
- Definition: A styled element with internal structure that maintains its identity regardless of context
- Examples: Callout (label + body + 4px left border), Code block (dark bg + syntax highlighting), Page header (dark bg + 3px red border + title)
- Extractability: HIGH. Extract the CSS class. It works anywhere.
- Compositional logic baked in: MINIMAL. A callout has internal layout (label above body, border on left) but no dependency on surrounding context. Place a callout inside a bento cell, a spoke section, or a standalone page and it looks the same.

**Tier 3: Organisms (Compositional Fragments)**
- Definition: A visual arrangement that derives its meaning from its metaphor and its position within a composition
- Examples: Geological strata (border-width encodes confidence), Island container (whitespace IS the design), Bento grid with specific span patterns (the grid IS the organizational metaphor)
- Extractability: PARTIAL TO ZERO. You can extract the CSS for a bento grid. You CANNOT extract the specific 2x2/2x1/1x2 span pattern that makes a particular bento grid answer a particular organizational question.
- **Compositional logic baked in: YES -- this is the critical insight.**

### The User's Specific Concern: "Are there compositional layouts inherently baked into the components?"

**YES, at Tier 3. And this is where the extraction problem lives.**

Consider the bento grid in CD-005. The CSS for `.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }` is extractable. But the specific span configuration -- which cell is `--large` (2x2), which is `--wide` (2x1), which is default (1x1) -- is compositional logic. It encodes a decision about information hierarchy: the 2x2 cell is the conceptual anchor, the 2x1 cells are supporting details, the 1x1 cells are peripheral. Remove that specific span pattern and you have a generic grid. The "component" only becomes meaningful when it carries the compositional decision.

Similarly, AD-004's spiral strata use border-weight as a semantic signal. The CSS for `.stratum--established { border-left: 4px solid var(--color-text); }` is extractable. But the meaning -- 4px = highest confidence, 3px = probable, 1px = speculative -- is compositional logic baked into the border-weight values. Extract the stratum component into a different context and the border-weight gradient means nothing.

**The line falls here:**
- If you can rearrange a component's position on the page without loss of meaning, it is Tier 2 (extractable).
- If rearranging it breaks the metaphor, it is Tier 3 (compositional fragment, not truly extractable).

A callout can go anywhere. A geological stratum cannot.

### The Definition Shift Across Phases

```
DD: Component = visual container (CSS box with properties)
OD: Component = behavioral organism (CSS box + semantic encoding + interaction)
AD: Component = structural system (locked layer + axis layer, system > parts)
CD: Component = compositional grammar (relationships between existing components)
```

This is not a contradiction. Each phase added a layer of meaning on top of the previous one. A CD component is still a visual container (DD), still has behavioral encoding (OD), still participates in a structural system (AD), and now also expresses compositional grammar (CD).

---

## Question 6: Is it the same atoms arranged differently by different tensions, OR have the atoms themselves changed?

**Answer: THE SAME ATOMS. Arranged differently. The atoms have NOT changed. This is THE central finding of the entire audit.**

### Evidence

**1. Tier 1 tokens are byte-for-byte identical across all 16 files.**
The source-comparator agent confirmed: same hex values, same font stacks, same spacing scale, same border-radius: 0, same box-shadow: none. No atom changed.

**2. Tier 2 structural components are invariant.**
The callout's 2-zone DNA, the code block's dark theme, the header's dark-bg-with-red-border -- all frozen since DD. The enforcement mechanism matured (per-element to global reset), the variant vocabulary fluctuated (4 to 7 to 5 to 6 callout types), and accessibility was layered on. But the structural skeleton is the same.

**3. What creates the visual variety is Tier 3 composition.**
The DD phase arranges atoms into density metaphors (islands, layers, rivers, fractals). The OD phase arranges the SAME atoms into organizational metaphors (tasks, confidence, spatial, editorial). The AD phase arranges the SAME atoms into axis metaphors (bento, spiral, choreography, compound). The CD phase combines the SAME atoms using the SAME metaphors with compositional grammar.

**4. Specific proof -- the 4px left border:**
This single atom (`border-left: 4px solid [color]`) appears in every single file with different contextual meaning:

| File | 4px left border meaning |
|------|----------------------|
| DD-003 | Density island container (importance signal) |
| DD-004 | Bedrock + surface layer (deepest geological layer) |
| DD-005 | Narrow river (highest density channel) |
| DD-006 | Fractal nesting + scale demos (structural emphasis) |
| OD-003 | Task island (procedural signal) |
| OD-004 | Established stratum (highest confidence) |
| OD-005 | Wave visualization (density diagram) |
| OD-006 | Pull quote + callout (editorial emphasis) |
| AD-003 | Bookend front, featured bento cells (orientation signal) |
| AD-004 | Established stratum, pull quote (confidence + editorial) |
| AD-005 | Featured territory tile (primary hub) |
| AD-006 | Featured bento item, discovery log (axis emphasis) |
| CD-003 through CD-006 | Callouts, strata, file tree, Core Abstraction (inherited semantic) |

Same atom. Same CSS property. Different meaning in every context. The variety comes from contextual meaning assignment, not from changing the atom.

### The Analogy

The design system is a language. The atoms are its alphabet (fixed). The Tier 2 components are its vocabulary (relatively stable). The Tier 3 compositions are its prose (infinite variety from finite vocabulary). The variety across DD/OD/AD/CD is not because the alphabet changed. It is because different questions produced different prose using the same alphabet.

---

## Question 7: What creates the variety across pages?

**Answer: PRIMARILY different questions (tensions) producing different metaphors using the SAME building blocks (~95%). Secondarily, a small number of genuinely new Tier 2 components were invented in OD and AD (~5%).**

### The Primary Driver: Different Questions

Each phase asks a fundamentally different question of the same content:

| Phase | Core Question | Metaphors Generated |
|-------|---------------|-------------------|
| DD | "How does information density vary within a topic?" | Islands/ocean, geological layers, rivers, fractals |
| OD | "How should this content be organized for its reader?" | Task sequences, confidence levels, spatial hubs, editorial narrative |
| AD | "What axis pattern best serves this content's reading flow?" | Z-pattern, F-pattern, bento grid, spiral, choreography, compound |
| CD | "How do multiple patterns combine on one page?" | Transition grammar (smooth/bridge/breathing), multi-axis sequencing |

The SAME content processed through different questions produces radically different page compositions. The building blocks are constant; the organizational metaphor creates the visual variety.

**Evidence from component counts:**
- Shared across ALL 16 files: ~7-9 components (header, callouts, code blocks, skip link, tables, accessibility infrastructure)
- Unique to ONE phase: 32 (DD) + 46 (OD) + 57 (AD) + 2 (CD) = 137 metaphor-dependent components
- Ratio: ~8 shared vs ~137 unique = **~95% of component variety comes from metaphor-driven invention, not from changing the base components**

### The Secondary Driver: Genuine New Tier 2 Inventions

A small number of components were genuinely invented and then propagated across phases:

| Component | Invented In | Propagated To | Status |
|-----------|------------|---------------|--------|
| Solid offset depth (pseudo-element shadow) | OD-004 | OD-005, AD-005, AD-006 | Became reusable Tier 2 |
| Breadcrumb navigation | OD-005 | AD-005 | Became reusable Tier 2 |
| Drop cap (first-letter) | OD-006 | AD-006, CD-006 | Became reusable Tier 2 |
| Pull quote | OD-006 | AD-004 | Became reusable Tier 2 |
| Progress bar | AD-005 | (no propagation yet) | Candidate for Tier 2 |
| Scroll witness (progress bar TOC) | OD-006 | AD-006 | Debatable -- may be Tier 3 |

These are genuine additions to the Tier 2 vocabulary. But they are ~6 components out of ~137 total unique components. **The vocabulary grew by ~6 words; the prose produced ~137 unique arrangements.**

### Connection to the Tension Protocol

The Tension Protocol synthesis confirms this finding. OD-004's geological strata metaphor was not born from new components -- it was born from the tension between "the reader needs graduated trust signals" and "the system only provides sharp edges, flat surfaces, and border weights." The 4px/3px/2px/1px border-weight gradient was invented using EXISTING atoms (border-left with different widths) to resolve a SPECIFIC tension. The atoms were not new. The arrangement was.

CD explorations asked system-facing questions ("Do patterns compose?") and produced assembly -- correct recombination of existing components with minimal new invention. OD explorations asked reader-facing questions ("How should a reader navigate uncertain evidence?") and produced composition -- creative arrangements that required metaphor-dependent Tier 3 invention. Same atoms, different questions, radically different results.

---

## Question 8: The Component Extraction Problem

### What Tiers Exist?

Three tiers, each with different extraction characteristics:

```
TIER 1: ATOMS (Rules/Tokens)
  Extractability: 100%
  Method: Copy :root block + global reset
  Size: ~80 lines of CSS
  Dependencies: None
  Context-sensitivity: None

TIER 2: MOLECULES (Reusable Components)
  Extractability: 90%+
  Method: Extract CSS class + HTML structure
  Size: ~175 lines of CSS (callouts, code blocks, headers, tables, inline code)
  Dependencies: Tier 1 tokens (var() references)
  Context-sensitivity: Minimal (a callout works anywhere)

TIER 2.5: REUSABLE PATTERNS (Layout Systems)
  Extractability: 70%
  Method: Extract CSS grid/flex system + HTML structure
  Size: ~145 lines of CSS (bento grid, hub-spoke, confidence encoding, transitions)
  Dependencies: Tier 1 + Tier 2 + understanding of when to apply
  Context-sensitivity: Moderate (a bento grid works in many contexts,
    but WHICH content goes in WHICH cell is compositional judgment)

TIER 3: ORGANISMS (Compositional Fragments)
  Extractability: 0-30%
  Method: Cannot extract the meaning, only the CSS
  Size: 30-40% of any given file's CSS
  Dependencies: Tier 1 + Tier 2 + the metaphor they serve
  Context-sensitivity: TOTAL (the metaphor IS the component)
```

### What's Extractable vs. What Carries Compositional Logic?

**Extractable (Tier 1 + Tier 2): ~255 lines, covers ~60-70% of any file's CSS**

| What | Why It's Extractable |
|------|---------------------|
| Token system (`:root` block) | Pure values, no context dependency |
| Global reset | Universal enforcement, no context dependency |
| Callout family (5-6 variants) | Self-contained -- works in any container |
| Code block | Self-contained -- works in any container |
| Page header | Self-contained -- always at top of page |
| Table/matrix | Self-contained -- works in any container |
| Inline code | Self-contained -- works in any text |
| Skip link + accessibility | Universal utility |

**Carries Compositional Logic (Tier 3): varies, ~30-40% of file CSS**

| What | Why It Carries Compositional Logic |
|------|-----------------------------------|
| Bento grid span patterns | The specific 2x2/2x1/1x1 arrangement encodes information hierarchy. The grid CSS is extractable; the span decisions are not. |
| Confidence border gradients | The 4px/3px/1px mapping to established/probable/speculative is arbitrary and metaphor-dependent. Extract the CSS and you get three border widths with no inherent meaning. |
| Island/river/layer containers | These ARE their metaphors. An "island" is a bordered box with surrounding whitespace. Extract it and you have a generic bordered box -- the "island-ness" (the ocean whitespace, the offset positioning, the archipelago grid) is compositional. |
| Transition grammar | The specific spacing values (48px/64px/80px) and the breathing-zone backgrounds encode transition intensity. Extractable as utility classes but their selection for a specific composition requires judgment. |
| Section sequencing | The ORDER in which sections appear (Z-pattern flow, then F-pattern, then bento grid) is compositional. No CSS to extract -- it's document structure. |

### Does "Component" Mean Different Things at Different Tiers?

**Yes. Precisely:**

- **Tier 1 "component"** = a value. A color, a font, a number. Fully portable.
- **Tier 2 "component"** = a styled element with internal structure. Portable across contexts. A callout is a callout is a callout.
- **Tier 2.5 "component"** = a layout system. The CSS is portable; knowing when to use it requires judgment. A bento grid can be placed anywhere, but knowing that bento is right for "multiple semi-independent topics at comparable depth" is not extractable.
- **Tier 3 "component"** = a compositional fragment whose meaning is inseparable from its metaphorical context. NOT truly portable. A geological stratum outside a confidence-based page is just a bordered div.

### Where Does the Line Fall?

**The line between "component I can extract" and "composition fragment that can't exist outside its context" is the MEANING TEST:**

> **If the component's visual properties carry meaning only because of the metaphor it serves, it is a composition fragment (Tier 3), not an extractable component (Tier 2).**

Practical test: Can you rename the component's CSS class to something generic (`.bordered-section`, `.accent-container`, `.sidebar-panel`) without losing what makes it distinctive? If yes, it's Tier 2 -- the visual properties stand on their own. If no -- if `.geological-stratum` MUST be called that because its border-weight gradient only makes sense as a confidence encoding -- it's Tier 3.

### The Extraction Strategy

```
1. Extract Tier 1 (tokens) as a shared base.                     ~80 lines
2. Extract Tier 2 (components) as a component library.            ~175 lines
3. Extract Tier 2.5 (patterns) as layout utilities.               ~145 lines
4. Document Tier 3 (compositions) as PATTERNS, not components.    Prose, not CSS
5. For each migration page, compose Tier 3 fresh from the         Per-page creative work
   page's own tension/question, using Tier 1+2+2.5 as blocks.
```

This is exactly what the Tension Protocol predicts: Tier 1 and Tier 2 propagate through the pipeline (they are the "rules" and "vocabulary" of the design language). Tier 3 does NOT propagate -- it must be composed fresh each time, because it IS the creative act of answering a specific question with a specific metaphor.

---

## The Definitive Model: Three Tiers, Four Phases

```
TIER 1: SOUL (atoms)
  Status: FROZEN since DD-001
  Count: ~25 tokens (12 colors, 3 fonts, 3 borders, ~7 spacing/geometry)
  Extractable: YES -- ~80 lines of :root CSS
  Propagation: 100% -- identical across all 16 files

TIER 2: VOCABULARY (molecules)
  Status: CRYSTALLIZED by OD, REFINED in AD, STABLE in CD
  Count: ~8 universal components + ~8 reusable patterns
  Extractable: YES -- ~255-400 lines of CSS
  Propagation: 95%+ -- structurally identical, progressively enhanced

TIER 3: PROSE (compositions)
  Status: INVENTED FRESH in every exploration
  Count: 6-19 per file, ~137 total across 16 files
  Extractable: NO -- metaphor-dependent, context-bound
  Propagation: 0% -- principles propagate, implementations do not

TIER 3.5: GRAMMAR (CD-specific)
  Status: DISCOVERED in CD phase
  Count: 3 transition types (smooth/bridge/breathing) + compositional rules
  Extractable: PARTIALLY -- transition mechanics yes, compositional judgment no
  Propagation: Moderate -- the mechanics transmit, the judgment does not
```

### Phase Contributions

| Phase | Tier 1 | Tier 2 | Tier 3 | Tier 3.5 |
|-------|--------|--------|--------|----------|
| DD | **Locked** the soul | Invented initial components (informal) | 32 density metaphor components | -- |
| OD | Maintained | **Crystallized** the vocabulary (formalized callouts, code blocks, headers) | 46 organizational metaphor components | -- |
| AD | Maintained | **Refined** (added accessibility, eliminated 2px, standardized locked layer) | 57 axis metaphor components | -- |
| CD | Maintained | Maintained | 2 genuine new + 5 layout mechanisms | **Discovered** compositional grammar |

---

## Summary: The Six Definitive Answers

1. **Tier 1 atoms are IDENTICAL across all 16 files.** Zero drift. The alphabet is fixed.

2. **Tier 2 components are structurally identical with progressive enhancement.** The callout DNA, code block DNA, and header DNA are frozen. Variant vocabulary and accessibility grew. ~6 genuinely new Tier 2 components were invented across all phases (solid offset, breadcrumb, drop cap, pull quote, progress bar, scroll witness).

3. **Tier 3 components appear in EVERY phase.** AD has the most (57), OD second (46), DD third (32), CD fewest (2 genuine + 5 layout mechanisms). 95% of visual variety is Tier 3.

4. **Extract ~255-400 lines of shared CSS (Tier 1 + Tier 2 + Tier 2.5).** This covers 60-70% of any file. Document Tier 3 as patterns/compositions, not extractable components. Compose Tier 3 fresh per page from its own tension.

5. **"Component" means three different things at three tiers.** Tier 2 components carry minimal compositional logic (a callout works anywhere). Tier 3 components carry HEAVY compositional logic (a geological stratum is meaningless outside a confidence-based page). The line is the meaning test: can you rename the class to something generic without losing distinctiveness?

6. **THE SAME ATOMS arranged differently.** The atoms have NOT changed. The variety comes from different questions producing different metaphors -- different prose written with the same alphabet. ~95% of variety is from metaphor-driven composition, ~5% from genuine new Tier 2 vocabulary.

**The single-sentence answer:** The design system is a language with a fixed alphabet (Tier 1), a slowly-growing vocabulary (Tier 2), and infinite compositional capacity (Tier 3) -- and the variety across DD/OD/AD/CD is almost entirely prose, not vocabulary.

---

## Appendix: Component Lineage Table

A definitive trace of every Tier 2 component's origin and evolution:

| Component | First Appearance | Structural Changes | Current Canonical Form |
|-----------|-----------------|-------------------|----------------------|
| **Callout (2-zone)** | DD-003 | Variants: DD=4, OD=7, AD=5, CD=6. Background: DD=rgba, AD/CD=opaque. Label font: OD=mono, AD/CD=body. | AD-003 (cleanest BEM) |
| **Code block (dark)** | DD-003 | Syntax classes: DD=none, OD=some, AD=standard, CD=full. Line numbers: added OD-005. Copy button: added OD-005. | CD-006 (most complete) |
| **Page header (dark)** | DD-003 | Metadata complexity: DD=simple, OD=moderate, AD/CD=full with skip-link and ARIA. | CD-006 |
| **Page footer (dark)** | OD-003 | Minor. Border-top: `3px solid primary`. Rule element in some. | CD-006 |
| **Tables** | DD-003 | None. Always: no vertical borders, 3px header, 1px rows. | AD-006 |
| **Inline code** | DD-003 | None. Always: mono, subtle bg, 1px border. | Any AD/CD file |
| **Skip link** | DD (some) | Coverage: DD=partial, OD=partial, AD/CD=universal. | Any AD/CD file |
| **Selection styling** | DD-003 | None. Always: primary bg, background-color text. | Any file |
| **Focus-visible** | DD-003 | None. Always: `3px solid primary, offset 2px`. | Any AD/CD file |
| **Reduced motion** | DD (some) | Coverage: DD=partial, OD=partial, AD/CD=universal. | Any AD/CD file |
| **Bento grid** | AD-003 | Gap: AD-003=32px, CD-006=24px. Columns: typically 3-4. | AD-003 |
| **Territory tile** | OD-005 | Hover: flat border-color transition, no transform. Solid offset in featured. | AD-005 |
| **Confidence encoding** | OD-004 | Border-weight: 4px/3px/2px/1px (OD), 4px/3px/1px (AD/CD -- 2px eliminated). | AD-004 |
| **Bookend front/back** | OD-003 | Front=red accent, Back=green accent. Refined in AD-003. | AD-003 |
| **Task component** | OD-003 | Checkbox: generated via `::before` pseudo-element. | CD-005 |
| **Reasoning component** | AD | 2-column with summary. | CD-005 |
| **Core abstraction** | AD | Label + principle + code. | CD-006 |
| **Solid offset depth** | OD-004 | Pseudo-element, 4px right/down, #1A1A1A bg. | AD-005 |
| **Pull quote** | OD-006 | Instrument Serif italic, border-left: 4px primary. | AD-004 |
| **Breadcrumb** | OD-005 | Triangle separator, mono uppercase. | AD-005 |
| **Drop cap** | OD-006 | 3.5-4.2em, float left, primary color. | CD-006 |
| **Transition grammar** | CD-003 | Smooth (48px/1px), Bridge (64px/breathing), Breathing (80px/3px). | CD-006 |

---

*Synthesis complete. 5 audit reports analyzed (~3,300 lines of evidence). Tension protocol synthesis cross-referenced (~5,700 lines). All 8 questions answered with specific evidence from 16 exploration files. The atoms are frozen. The vocabulary is crystallized. The prose is endlessly inventive.*
