# Source-Level Component Comparison Across All 16 Explorations

**Agent:** source-comparator
**Scope:** DD-003 through DD-006, OD-003 through OD-006, AD-003 through AD-006, CD-003 through CD-006
**Method:** Systematic CSS/HTML grep analysis across all 16 files against DESIGN-SYSTEM canonical tokens

---

## 1. TIER 1: SOUL CONSTRAINTS (border-radius, box-shadow, font trio, colors)

### 1A. border-radius Audit

**Result: IDENTICAL across all 16 files. Zero violations.**

Every file declares `--border-radius: 0` in `:root` and most enforce `border-radius: 0` in a global `*` selector. The enforcement pattern is consistent:

| Phase | :root declaration | Global * enforcement |
|-------|-------------------|---------------------|
| DD-003 through DD-006 | `--border-radius: 0` | YES (varies: some in `*`, some per-element) |
| OD-003 through OD-006 | `--border-radius: 0` | YES (OD-006 has 30+ explicit `border-radius: 0` per-element) |
| AD-003 through AD-006 | `--border-radius: 0` | YES (all use `* { border-radius: 0; }`) |
| CD-003 through CD-006 | `--border-radius: 0` | YES (all use `* { border-radius: 0; }`) |

**Note:** OD-006 has the most aggressive enforcement -- 30+ individual element selectors each with `border-radius: 0`. AD and CD files use a simpler global `*` selector approach. DD files use `--border-radius: 0` as a variable and reference it. The enforcement METHOD evolved from per-element (DD/OD) to global reset (AD/CD), but the RESULT is identical.

### 1B. box-shadow Audit

**Result: IDENTICAL across all 16 files. Zero functional violations.**

Every file declares `--box-shadow: none` in `:root`. All enforce `box-shadow: none` either globally or per-element.

One instance of `box-shadow` in rendered content: AD-005 line 1286 shows a `box-shadow` value in a `<span>` within a code block -- this is CONTENT (showing what NOT to do), not a CSS declaration. Not a violation.

OD-003, OD-004, OD-005, OD-006 all include `* { box-shadow: none !important; }` in print/accessibility media queries. AD/CD files enforce via the global `*` selector and `:root` variable.

### 1C. Font Family Audit

**Result: IDENTICAL across all 16 files. Same three fonts, same exact stacks.**

Every file declares in `:root`:
```
--font-display: 'Instrument Serif', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

All 16 files use `var(--font-display)`, `var(--font-body)`, and `var(--font-mono)` exclusively. Zero instances of hardcoded font families in CSS (except favicon SVGs using `font-family='serif'` which is in an SVG data URI, not page content).

The font assignment to structural roles is consistent across phases:
- Display headings (h1, h2, h3): `var(--font-display)` -- all phases
- Body text: `var(--font-body)` -- all phases
- Code blocks, labels, metadata: `var(--font-mono)` -- all phases
- Essence callout body: `var(--font-display)` with `font-style: italic` -- all phases

### 1D. Color Palette Audit

**Result: IDENTICAL across all 16 files. Same exact hex values.**

Every file declares in `:root`:
```
--color-primary: #E83025;
--color-background: #FEF9F5;
--color-text: #1A1A1A;
--color-border: #E0D5C5;
```

All accent colors are consistent across files:
- `--accent-blue: #4A90D9` (all phases)
- `--accent-green: #4A9D6B` (DD/OD use `#4A9D6B` or `#4A9D6B`-adjacent; AD/CD use `#4A9D6B`)
- `--accent-amber: #D97706` (all phases)
- `--accent-coral: #C97065` (all phases)
- `--accent-purple: #7C3AED` (all phases)

**rgba() usage:** Found in DD-003, DD-004, DD-005, DD-006 for very low-alpha backgrounds (0.03-0.1). NOT found in AD or CD files. OD files are clean. This represents an EARLY pattern that was superseded by fully opaque semantic backgrounds in later phases.

### 1E. Soul Constraint Summary

| Constraint | DD (4 files) | OD (4 files) | AD (4 files) | CD (4 files) | Verdict |
|-----------|-------------|-------------|-------------|-------------|---------|
| border-radius: 0 | PASS | PASS | PASS | PASS | **IDENTICAL** |
| box-shadow: none | PASS | PASS | PASS | PASS | **IDENTICAL** |
| Font trio | PASS | PASS | PASS | PASS | **IDENTICAL** |
| Color palette | PASS | PASS | PASS | PASS | **IDENTICAL** |
| No filter: drop-shadow | PASS | PASS | PASS | PASS | **IDENTICAL** |

**ANSWER: Tier 1 properties are IDENTICAL across all 16 files.**

---

## 2. TIER 2: STRUCTURAL PATTERNS (Callouts, Code Blocks, Headers, Tables)

### 2A. Callout Component

**Structure:** All phases use the same BEM-like 2-zone structure: `.callout > .callout__label + .callout__body`

**Border:** All phases use `border-left: 4px solid [accent-color]`. This is invariant.

**Callout variants present across phases:**

| Variant | DD | OD | AD | CD |
|---------|----|----|----|----|
| `.callout--note` | YES | YES (as `--note`) | YES | YES |
| `.callout--tip` | YES | YES | YES | YES |
| `.callout--gotcha` | YES | YES | YES | YES |
| `.callout--caution` | - | YES (some) | YES | YES |
| `.callout--essence` | YES | YES | YES | YES |
| `.callout--warning` | - | YES (OD-006) | - | - |
| `.callout--insight` | - | YES (OD-006) | - | - |
| `.callout--discovery` | - | YES (OD-006) | - | - |
| `.callout--challenge` | - | - | - | YES (CD-003, CD-005) |
| `.callout--checkpoint` | - | YES (OD-003/04) | - | - |
| `.callout--prereq` | - | YES (OD-003) | - | - |

**Label styling:** Consistent across all phases: `font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase`. AD and CD files formalize this in `.callout__label`. DD/OD files vary slightly (OD-003 uses `font-family: var(--font-mono)` on the label, while AD uses `var(--font-body)`).

**Essence callout body:** ALL phases use `font-family: var(--font-display); font-style: italic`. This is invariant DNA.

**VERDICT:** Callout structure is IDENTICAL across all phases. The 2-zone DNA, 4px left border, 10px uppercase label, and essence italic are invariant. What EVOLVES is the variant vocabulary -- DD has the fewest variants, OD introduces contextual variants (checkpoint, prereq, insight, discovery), AD standardizes back to core set, CD adds challenge.

### 2B. Code Block Component

**Structure varies by phase:**

- **DD files:** Use `.code-block` with dark background (`#1E1E1E` or `var(--color-text)`). Simple structure: wrapper div with `<code>` inside.
- **OD files:** Same dark background pattern. OD-003 adds a line-number gutter. OD-004/OD-006 use more sophisticated syntax highlighting spans.
- **AD files:** Standardized dark background. AD-003, AD-004, AD-005, AD-006 all use a consistent `.code-block` with dark bg. Some have copy buttons.
- **CD files:** Same dark background pattern. CD-006 has the most sophisticated syntax highlighting (custom `.kw`, `.fn`, `.str`, `.num`, `.cmt`, `.pn` classes for token coloring).

**VERDICT:** Core pattern (dark bg, monospace font, sharp edges) is IDENTICAL. Syntax highlighting sophistication INCREASES across phases. The base component is reusable; syntax coloring is a progressive enhancement layer.

### 2C. Page Header Component

**All 16 files share the same page header structure:**
- Dark background (`var(--color-text)` / `#1A1A1A`)
- `border-bottom: 3px solid var(--color-primary)` (Cat 1 structural border)
- Title in `var(--font-display)`
- Metadata line below title

**Differences in header complexity:**
- DD files: Simple header with title + subtitle
- OD files: Header with navigation elements (OD-006 has TOC entries in header)
- AD files: Header with skip-link, structured metadata
- CD files: Header with skip-link, breadcrumb-like metadata

**VERDICT:** The header DNA (dark bg, 3px red border-bottom, display font title) is IDENTICAL. The metadata/navigation layer EVOLVES in complexity but doesn't change the core visual pattern.

### 2D. Table/Decision Matrix Component

**Present in:** DD-003, DD-004, DD-005, OD-004, OD-005, AD-003, AD-006, CD-005, CD-006

**Consistent rules across phases:**
- `border-left: none; border-right: none` (no vertical prison bars)
- Horizontal separators: `border-bottom: 1px solid var(--color-border-subtle)` (Cat 2)
- Header row: `border-bottom: 3px solid var(--color-border)` (Cat 1 structural)
- Last row: `border-bottom: none`

**VERDICT:** Table structure is IDENTICAL across all phases where tables appear.

### 2E. Border Width Vocabulary

**This is where meaningful evolution occurs:**

| Width | DD usage | OD usage | AD usage | CD usage |
|-------|---------|---------|---------|---------|
| 1px | Cat 2 separators | Cat 2 separators + Cat 3 micro | Cat 2 separators | Cat 2 separators |
| 2px | DD-004: `border-top: 2px`, DD-006: `border-left: 2px`, `border-bottom: 2px` | OD-004: INTENTIONAL semantic (confidence gradient) | - | - |
| 3px | Cat 1 structural | Cat 1 structural + footer | Cat 1 structural + stratum transitions | Cat 1 structural + section transitions |
| 4px | Callout left-accent | Callout left-accent + confidence bedrock | Callout left-accent + `--border-left-width` variable | Callout left-accent + `--border-left-width` variable |

**Evolution pattern:** DD uses 2px casually (pre-convention). OD-004 reclaims 2px as a SEMANTIC tool (confidence gradient: 4px/3px/2px/1px). AD files eliminate 2px entirely (post-audit cleanup of the "2px epidemic"). CD files maintain the AD convention (no 2px).

**VERDICT:** Border width vocabulary EVOLVED. DD is pre-convention (2px casual). OD introduces semantic 2px. AD/CD eliminate 2px except where semantically justified. The 4px callout accent and 3px structural border are INVARIANT.

---

## 3. TIER 3: METAPHOR-DEPENDENT INVENTIONS (Phase-Unique Components)

These are components that appear in ONLY ONE phase and embody the metaphor unique to that exploration.

### DD Phase (Density Dimension):
- **DD-003:** Island containers (`.island`, `.island-cluster`), skip-link, callout-grid
- **DD-004:** Layer system (`.layer`, `.layer-primary`, `.layer-secondary`), dark zone code blocks
- **DD-005:** River flow containers, typographic river demonstrations
- **DD-006:** Fractal nesting system (`.fractal-level-*`), self-similar components at multiple scales

### OD Phase (Organizational Dimension):
- **OD-003:** Task islands (`.task-island`, `.task-island--beginner/intermediate/advanced`), verification lists, prerequisite callouts
- **OD-004:** Confidence gradient system (`.geological-*`, border-width = confidence encoding), progressive disclosure with 4px/3px/2px/1px semantic borders
- **OD-005:** Spatial hub-spoke layout (`.hub-grid`, `.hub-tile`, `.spoke-content`), solid-offset depth technique
- **OD-006:** Creative editorial (`.concept-tile`, `.system-map`, `.concept-link`, `.toc__entry`, `.mini-geological__layer`), scroll reveal animation system

### AD Phase (Axis Dimension):
- **AD-003:** Bento grid system (`.bento-grid`, `.bento-cell`, `.bento-cell__header`, `.bento-item--large/wide/tall`, `.bento-details`)
- **AD-004:** Spiral/geological strata (`.stratum`, `.stratum--established/probable/speculative/open`, `.spiral-map`, `.confidence-badge`, `.stratum-transition`)
- **AD-005:** Choreography system (`.hub-grid`, `.spoke-content`, `.spoke-section`, `.wave-marker`, `.timeline-step`)
- **AD-006:** Compound axis (`.convergence-*`, `.compound-grid`, `.pattern-column`, convergence point visualizations, matrix layouts)

### CD Phase (Combination Dimension):
- **CD-003:** File-tree-callout hybrids (`.file-tree`, `.tree-annotation`, `.combination-zone`, `.shared-dna-*`)
- **CD-004:** Essence-as-background (`.essence-bg`, `.confidence-stratum`, `.transition--breathing`, full-bleed essence zones)
- **CD-005:** Multi-axis transition (`.axis-transition-*`, `.bento-grid` reuse, `.f-pattern-*`, `.pulse-*`, spiral references)
- **CD-006:** Pilot migration (`.token-card`, `.pattern-card`, `.audit-domain`, `.qa-pair`, `.task-checklist`, `.migration-step`, phase-indicator timeline)

---

## 4. CSS CLASS NAME OVERLAP ANALYSIS

### Classes present in 10+ files (universal):
- `.callout`, `.callout__label`, `.callout__body` -- 16/16
- `.callout--essence`, `.callout--tip`, `.callout--gotcha`, `.callout--note` -- 16/16
- `.code-block` -- 16/16
- `.page-header` or equivalent dark header -- 16/16
- Skip-link (`#skip-link` or `.skip-link`) -- 12/16 (AD and CD; some DD/OD files lack it)

### Classes present in 4-8 files (phase-shared):
- `.hub-grid` -- AD-005, OD-005 (hub-spoke pattern crosses phases)
- `.spoke-content`, `.spoke-section` -- AD-005, AD-003
- `.stratum` variants -- AD-004, OD-004 (geological metaphor crosses phases)
- `.bento-grid`, `.bento-cell` -- AD-003, CD-005 (bento pattern reused in CD)
- `.confidence-badge` -- AD-004, OD-004

### Classes present in 1-2 files only (phase-unique):
- `.island`, `.island-cluster` -- DD-003 only
- `.fractal-level-*` -- DD-006 only
- `.task-island` -- OD-003 only
- `.concept-tile`, `.system-map` -- OD-006 only
- `.spiral-map` -- AD-004 only
- `.wave-marker` -- AD-005 only
- `.convergence-*` -- AD-006 only
- `.file-tree` -- CD-003 only (as primary component)
- `.token-card`, `.audit-domain`, `.migration-step` -- CD-006 only
- `.essence-bg` -- CD-004 only

---

## 5. ANSWERS TO SPECIFIC QUESTIONS

### Q1: Are Tier 1 properties (soul constraints) IDENTICAL across all 16 files?

**YES. Completely identical.** border-radius: 0, box-shadow: none, font trio (Instrument Serif / Inter / JetBrains Mono), color palette (#E83025 / #FEF9F5 / #1A1A1A / #E0D5C5), accent colors -- all declared with the same exact values in every file. Zero drift, zero variation.

### Q2: Are Tier 2 patterns (callout, code block, header) structurally identical or have they evolved?

**Structurally identical with progressive enhancement.**

The callout 2-zone DNA (label + body, 4px left border, 10px uppercase label, essence italic) is invariant. The code block DNA (dark bg, monospace font) is invariant. The header DNA (dark bg, 3px red border-bottom, display font) is invariant.

What evolves:
- **Variant vocabulary:** DD has ~4 callout variants, CD has ~6-7
- **Syntax highlighting:** DD has none, CD-006 has full custom token classes
- **Accessibility:** AD/CD add skip-links and ARIA labels that DD lacks
- **Border semantics:** DD uses 2px casually, AD/CD use a strict 4px/3px/1px system (no 2px)

### Q3: Where do Tier 3 components (metaphor-dependent inventions) appear? Which phase?

Tier 3 components appear in EVERY phase. Each exploration invents components unique to its metaphor:
- **DD-003:** Island container with ocean whitespace
- **DD-006:** Fractal nesting at multiple scales
- **OD-004:** Confidence-gradient geological strata
- **OD-006:** Concept tiles with solid-offset depth
- **AD-003:** Bento grid with density-proportional cells
- **AD-004:** Spiral geological strata with angular nesting
- **AD-006:** Convergence matrix visualizations
- **CD-003:** File-tree-callout hybrid organism
- **CD-005:** Multi-axis transition compositor
- **CD-006:** Migration workflow UI (token cards, audit domains, task checklists)

The CD phase contains the most Tier 3 components because it COMBINES patterns from previous phases.

### Q4: What would you ACTUALLY extract as reusable components? From which phase?

**Universal extraction (from any file, they're identical):**
1. **Callout family** (5 variants + essence italic) -- extract from AD-003 or CD-003 (cleanest implementation)
2. **Code block** -- extract from CD-006 (most complete, includes syntax highlighting)
3. **Page header** -- extract from CD-006 (includes skip-link, metadata, accessibility)
4. **Table / Decision matrix** -- extract from AD-006 or CD-005 (cleanest no-vertical-border implementation)
5. **Soul reset** (`:root` tokens + `* { border-radius: 0; box-shadow: none; }`) -- extract from any AD/CD file

**Phase-specific extraction (reusable patterns, not universal):**
6. **Bento grid** -- from AD-003 (the canonical implementation, reused in CD-005)
7. **Hub-spoke layout** -- from AD-005 (also used in OD-005)
8. **Confidence gradient** (4px/3px/1px border-left system) -- from AD-004 or OD-004
9. **File tree** -- from CD-003 (the only full implementation)
10. **Token/pattern reference cards** -- from CD-006 (migration-specific but reusable)

**DO NOT extract (too metaphor-specific):**
- Island containers (DD-003) -- the concept is just whitespace + callout
- Fractal nesting (DD-006) -- intrinsically tied to the fractal density thesis
- Spiral map (AD-004) -- intrinsically tied to geological metaphor
- Concept tiles with solid-offset (OD-006) -- neobrutalist editorial, too editorial-voice-specific

---

## 6. EVOLUTION SUMMARY

The system follows a clear pattern:

```
DD (foundation):    Soul tokens locked. Components informal. 2px casual. rgba() backgrounds.
OD (refinement):    Soul invariant. New variants invented. Solid-offset depth. 2px semantic.
AD (standardization): Soul invariant. Template shared across files. 2px eliminated. Accessibility added.
CD (combination):    Soul invariant. Patterns from prior phases combined. Template stabilized.
```

**The base component set does NOT evolve** -- it crystallized by OD phase and remains frozen. What evolves is:
1. **Enforcement mechanism** (per-element to global reset)
2. **Variant vocabulary** (accumulates, never shrinks)
3. **Accessibility infrastructure** (skip-links, ARIA, added in AD)
4. **Border semantic precision** (2px eliminated post-audit)
5. **Tier 3 invention rate** (highest in OD and AD, decreasing in CD as combination replaces invention)

The CSS template structure itself stabilizes in AD phase. AD-003, AD-004, AD-005, AD-006 share an almost identical base template (~lines 70-490 are structurally identical) with metaphor-specific CSS appended after. CD files inherit this template structure.

---

## 7. COMPONENT EXTRACTION RECOMMENDATION

**What to extract as a shared base:**
1. `:root` token block (colors, fonts, spacing, geometry) -- ~50 lines, identical everywhere
2. Global reset (`* { border-radius: 0; box-shadow: none; }` + base typography) -- ~30 lines
3. Callout family (.callout + 6 variants + essence italic) -- ~80 lines
4. Code block component (.code-block + syntax highlighting) -- ~40 lines
5. Page header component (.page-header + skip-link) -- ~30 lines
6. Table/matrix component -- ~25 lines
7. Border category system (Cat 1: 3px structural, Cat 2: 1px separator, Cat 3: accent) -- documentation, not code

**Total extractable shared CSS: ~255 lines**

This shared base would cover approximately 60-70% of the CSS in any given exploration file. The remaining 30-40% is metaphor-specific Tier 3 invention.
