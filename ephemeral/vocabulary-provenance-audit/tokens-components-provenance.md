# Tokens.css & Components.css — Provenance Trace

**Author:** tokens-components-tracer
**Date:** 2026-03-01
**Method:** Cross-referenced tokens.css (184 lines) and components.css (945 lines) against actual exploration HTML files (DD-001 through DD-006, OD-001 through OD-006, CD-001 through CD-006), tokens-mutability.md (425 lines), implementation/component-system/css/ files, and prior audit (ephemeral/tc-skill-audit/14-tokens-components-audit.md).

---

## PART 1: TOKENS.CSS PROVENANCE

### Token-by-Token Source Trace

#### IMMUTABLE SOUL CONSTRAINTS (lines 18-20)

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| `--border-radius: 0` | 0 | DD-006 line 149, OD-001 line ~170, CD-006 line 102. ALL 18 explorations. Zero exceptions. | GENUINE -- 100% exploration coverage |
| `--box-shadow: none` | none | DD-006 line 150, CD-006 line 103. ALL 18 explorations. | GENUINE -- 100% exploration coverage |

#### PRIMARY COLORS (lines 27-32)

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| `--color-primary: #E83025` | #E83025 | DD-006 line 136, OD-001 line 196, CD-006 line 75. ALL 18 explorations. | GENUINE -- 100% |
| `--color-background: #FEF9F5` | #FEF9F5 | DD-006 line 137, OD-001 line 197, CD-006 line 76. ALL 18. | GENUINE -- 100% |
| `--color-text: #1A1A1A` | #1A1A1A | DD-006 line 138, CD-006 line 77. ALL 18. | GENUINE -- 100% |
| `--color-text-secondary: #666666` | #666666 | DD-006 line 139, CD-006 line 78. ALL 18. | GENUINE -- 100% |
| `--color-border: #E0D5C5` | #E0D5C5 | DD-006 line 140, CD-006 line 79. ALL 18. | GENUINE -- 100% |
| `--color-border-subtle: #F0EBE3` | #F0EBE3 | DD-006 line 141, CD-006 line 80. ALL 18. | GENUINE -- 100% |

#### ACCENT COLORS (lines 35-39)

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| `--accent-blue: #4A90D9` | #4A90D9 | DD-006 line 166, CD-006 line 124. Present in ALL explorations with callouts. | GENUINE |
| `--accent-green: #4A9D6B` | #4A9D6B | DD-006 line 167, CD-006 line 125. | GENUINE |
| `--accent-coral: #C97065` | #C97065 | CD-006 line 126. NOT in DD explorations. First appears in CD phase. | CD-ERA ADDITION -- absent from DD/early OD |
| `--accent-amber: #D97706` | #D97706 | DD-006 line 168, CD-006 line 127. | GENUINE |
| `--accent-purple: #7C3AED` | #7C3AED | DD-006 line 169, CD-006 line 128. | GENUINE |

#### BACKGROUND COLORS (lines 42-49) -- KEY PROVENANCE QUESTION

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| **`--bg-page: #FAFAFA`** | #FAFAFA | **ZERO exploration usage.** grep of all 18 explorations for `#FAFAFA` or `#fafafa` returns NO MATCHES. Not in DD-006, not in OD-001, not in CD-006, not in ANY exploration. | **PIPELINE INVENTION -- no exploration source** |
| `--bg-card: #FFFFFF` | #FFFFFF | Explorations use `background: white` extensively (DD-006: 8 instances, OD-001: 4 instances, DD-001, DD-003, DD-005, OD-004, OD-005, CD-001, CD-003, CD-005). But they use the literal `white`, not `#FFFFFF` or a token reference. | GENUINE VALUE but never tokenized in explorations |
| `--bg-warm: #FEF9F5` | #FEF9F5 | Same as `--color-background`. Duplicates an immutable token under a different name. | ALIAS -- genuine value, unnecessary duplication |
| `--bg-dark: #1E1E1E` | #1E1E1E | **CONTRADICTED by CD-006.** CD-006 uses `#1A1A1A` for dark code blocks (same as `--color-text`). DD-006 and OD-001 also use `#1A1A1A` (via `background: var(--color-text)`). The `#1E1E1E` value appears in tokens-mutability.md line 238 with the note "CD-006 uses #1A1A1A... both are valid" but `#1E1E1E` has no exploration source. | **PIPELINE INVENTION -- explorations use #1A1A1A** |
| `--bg-info: #F5F8FA` | #F5F8FA | No exploration uses this hex value. DD explorations use `rgba(74, 144, 217, 0.05)` for info callout backgrounds. | **PIPELINE INVENTION -- explorations use rgba** |
| `--bg-tip: #F5FAF5` | #F5FAF5 | No exploration uses this hex value. DD explorations use `rgba(74, 157, 107, 0.05)`. | **PIPELINE INVENTION -- explorations use rgba** |
| `--bg-gotcha: #FEF6F5` | #FEF6F5 | No exploration uses this hex value. DD explorations use `rgba(232, 48, 37, 0.05)`. | **PIPELINE INVENTION -- explorations use rgba** |
| `--bg-summary: #FEF9F0` | #FEF9F0 | No exploration uses this hex value. | **PIPELINE INVENTION -- no exploration source** |

**Critical finding: 6 of 8 background tokens have NO exploration source.** The `--bg-info/tip/gotcha` values appear to be pre-computed opaque equivalents of the rgba values explorations actually use, but this translation was never validated. `--bg-page: #FAFAFA` and `--bg-summary: #FEF9F0` have no exploration source at all.

#### ZONE COLORS (lines 52-54)

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| `--color-zone-sparse: #FEF9F5` | #FEF9F5 | CD-006 line 83, CD-003 line 107, CD-001 line 99. ONLY in CD explorations. NOT in any DD or OD exploration. | CD-ERA INVENTION -- absent from DD/OD |
| `--color-zone-dense: #FFFFFF` | #FFFFFF | CD-006 line 84, CD-003 line 108, CD-001 line 100. ONLY in CD explorations. | CD-ERA INVENTION -- absent from DD/OD |
| `--color-zone-breathing: #FAF5ED` | #FAF5ED | CD-006 line 85, CD-003 line 109, CD-001 line 101. ONLY in CD explorations. | CD-ERA INVENTION -- absent from DD/OD |

These zone tokens are attributed to "OD-F-005 zone token naming" in the comment (line 51), but they only appear in CD explorations. The DD and OD explorations use raw hex values or `background: white` / `background: var(--color-background)` instead.

#### TEXT HIERARCHY (lines 57-61)

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| `--text-primary: #1A1A1A` | #1A1A1A | Alias of `--color-text`. Not separately tokenized in any exploration. | ALIAS -- genuine value, unnecessary duplication |
| `--text-secondary: #444444` | #444444 | **NO exploration uses #444444.** All explorations use `#666666` for secondary text (via `--color-text-secondary`). | **PIPELINE INVENTION -- explorations use #666666** |
| `--text-tertiary: #888888` | #888888 | **NO exploration uses #888888.** | **PIPELINE INVENTION -- no exploration source** |
| `--text-muted: #AAAAAA` | #AAAAAA | **NO exploration uses #AAAAAA.** | **PIPELINE INVENTION -- no exploration source** |
| `--text-inverse: #FFFFFF` | #FFFFFF | Explorations use inline `color: white` or `color: #FAFAF5` in dark code sections. Not tokenized. | LOOSELY GENUINE -- value used but never tokenized |

**Critical finding: 3 of 5 text hierarchy tokens have no exploration source.** The `#444444 / #888888 / #AAAAAA` values are a constructed gray ramp that does not appear in any of the 18 explorations. Explorations use only two text colors: `#1A1A1A` (primary) and `#666666` (secondary).

#### TYPE SCALE -- Dual Scale Problem (lines 73-89)

**Scale 1 (`--text-*`, lines 73-81):**

| Token | Value | Verdict |
|-------|-------|---------|
| `--text-xs: 0.75rem` (12px) | Explorations use 10px-12px for meta labels. 12px is in variables.css. | GENUINE ballpark |
| `--text-sm: 0.875rem` (14px) | Common body size in explorations. | GENUINE |
| `--text-base: 1rem` (16px) | Standard body size. | GENUINE |
| `--text-lg: 1.125rem` (18px) | Used for callout essence content. | GENUINE |
| `--text-h4: 1.25rem` (20px) | Rarely used in explorations. | LOW EVIDENCE |
| `--text-h3: 1.5rem` (24px) | Section headings in explorations. | GENUINE |
| `--text-h2: 2rem` (32px) | Major headings (DD-006 `.exploration-title` is 32px). | GENUINE |
| `--text-h1: 2.5rem` (40px) | Rarely used -- most explorations use 32px for titles. | LOW EVIDENCE |
| `--text-display: 3rem` (48px) | CD-006 uses 3rem for page titles. | GENUINE (CD-only) |

**Scale 2 (`--type-*`, lines 84-89):**

| Token | Value | Verdict |
|-------|-------|---------|
| `--type-page: 3rem` | CD-006 line 94. ONLY CD-006. | CD-006 SPECIFIC |
| `--type-section: 1.625rem` (26px) | CD-006 specific. Not 1.5rem (24px) like `--text-h3`. **Different value.** | CD-006 SPECIFIC -- conflicts with Scale 1 |
| `--type-subsection: 1.375rem` (22px) | CD-006 specific. No equivalent in Scale 1. | CD-006 SPECIFIC |
| `--type-body: 1rem` | Same as `--text-base`. | DUPLICATE |
| `--type-code: 0.875rem` | Same as `--text-sm`. | DUPLICATE |
| `--type-meta: 0.75rem` | Same as `--text-xs`. | DUPLICATE |

**Verdict: Scale 2 is a CD-006-specific type scale that was elevated to token status.** It contradicts Scale 1 on section headings (26px vs 24px). Having two parallel scales with different values for the same concept creates builder confusion. Scale 1 has broader exploration support; Scale 2 is one exploration's override.

#### SPACING (lines 96-107)

ALL spacing tokens (4px through 96px) have strong provenance in explorations. DD-006 :root defines space-1 through space-20. CD-006 adds `--space-24: 96px`. **GENUINE across all 18 explorations.**

#### GESTALT ALIASES (lines 110-112)

| Token | Value | Source | Verdict |
|-------|-------|--------|---------|
| `--space-within: var(--space-2)` | 8px | CD-006 line 119. Referenced as EXT-CONV-003. | CD-ERA -- attributed to external research, not explorations |
| `--space-between: var(--space-8)` | 32px | CD-006 line 120. | CD-ERA |
| `--space-chapter: var(--space-16)` | 64px | CD-006 line 121. | CD-ERA |

#### SPACING MAXIMUMS (lines 114-122)

| Token | Value | Source | Verdict |
|-------|-------|--------|---------|
| `--space-max-section: 64px` | 64px | **Not in any exploration.** Added as a pipeline rule after the ceiling experiment. | **POST-EXPLORATION PIPELINE RULE** |
| `--space-max-zone: 96px` | 96px | **Not in any exploration.** Same origin. | **POST-EXPLORATION PIPELINE RULE** |

The inline comment (lines 117-122) is a RULE about stacking behavior, not a token definition. This is a gate-runner constraint embedded in a token file.

#### SYNTAX HIGHLIGHTING (lines 141-147)

| Token | Value | Exploration Evidence | Verdict |
|-------|-------|---------------------|---------|
| `--syntax-keyword: #E83025` | #E83025 | CD-006 line 139. Present in explorations with code blocks. | GENUINE |
| `--syntax-string: #6B9B7A` | #6B9B7A | CD-006 line 140. | GENUINE |
| `--syntax-comment: #666666` | #666666 | CD-006 line 141. | GENUINE |
| `--syntax-function: #4A7C9B` | #4A7C9B | CD-006 line 142. | GENUINE |
| `--syntax-type: #C97065` | #C97065 | CD-006 line 143. | GENUINE |
| `--syntax-number: #D97706` | #D97706 | CD-006 line 144. | GENUINE |
| `--syntax-punctuation: #E0D5C5` | #E0D5C5 | CD-006 line 145. | GENUINE |

All syntax tokens match CD-006. Earlier explorations (DD) use inline color values for syntax highlighting but with the same palette.

#### OTHER TOKENS

| Token | Value | Verdict |
|-------|-------|---------|
| `--border-structural: 4px` | 4px | GENUINE -- 4px left borders on callouts throughout all explorations |
| `--border-accent: 3px` | 3px | GENUINE -- 3px borders on headers/section dividers in explorations |
| `--border-micro: 1px` | 1px | GENUINE -- 1px table borders, subtle dividers across explorations |
| `--border-left-width: 4px` | 4px | ALIAS of `--border-structural`. Redundant. |
| `--grid-gap: 24px` | 24px | GENUINE -- consistent across explorations with grids |
| `--offset-x/y: 4px` | 4px | OD-001 SPECIFIC (EXT-CREATIVE-001). Only in OD-001 v2. | OD-ERA ADDITION |
| `--offset-color: #1A1A1A` | #1A1A1A | OD-001 SPECIFIC | OD-ERA ADDITION |
| `--transition-standard: 0.3s ease` | 0.3s ease | CD-006 line 148. Only CD phase. | CD-ERA ADDITION |

---

### TOKENS.CSS PROVENANCE SUMMARY

| Category | Total | Genuine | CD-Only | Pipeline Invention | Duplicate/Alias |
|----------|-------|---------|---------|-------------------|-----------------|
| Soul constraints | 2 | 2 | 0 | 0 | 0 |
| Primary colors | 6 | 6 | 0 | 0 | 0 |
| Accent colors | 5 | 4 | 1 (coral) | 0 | 0 |
| Background colors | 8 | 1 (card) | 0 | **6** | 1 (warm=bg) |
| Zone colors | 3 | 0 | 3 | 0 | 0 |
| Text hierarchy | 5 | 1 | 0 | **3** | 1 |
| Type scale (--text-*) | 9 | 7 | 1 (display) | 0 | 0 (but 2 LOW EVIDENCE) |
| Type scale (--type-*) | 6 | 0 | 3 unique | 0 | 3 (duplicates of --text-*) |
| Spacing core | 13 | 13 | 0 | 0 | 0 |
| Spacing semantic | 3 | 0 | 3 | 0 | 0 |
| Spacing maximums | 2 | 0 | 0 | **2** | 0 |
| Borders | 4 | 3 | 0 | 0 | 1 |
| Grid | 1 | 1 | 0 | 0 | 0 |
| Syntax | 7 | 7 | 0 | 0 | 0 |
| Offset | 3 | 0 | 0 | 0 | 0 (OD-era) |
| Transition | 1 | 0 | 1 | 0 | 0 |
| **TOTALS** | **78** | **45** | **12** | **11** | **6** |

**Of 78 token entries: 45 (58%) have genuine multi-exploration provenance, 12 (15%) are CD-only, 11 (14%) are pipeline inventions with no exploration source, 6 (8%) are unnecessary duplicates/aliases, 4 (5%) are OD-era or low-evidence.**

---

## PART 2: COMPONENTS.CSS PROVENANCE

### Which Components Appear in Actual Explorations?

#### CALLOUT SYSTEM (lines 14-83)

**Callout API in explorations -- THREE distinct generations:**

**Generation 1 (DD explorations): `.callout-{type}` pattern**
- DD-001: `.callout-essence`, `.callout-tip`, `.callout-gotcha`, `.callout-info`
- DD-002: `.callout-essence`, `.callout-info`, `.callout-tip`, `.callout-challenge`
- DD-003: `.callout-tip`, `.callout-info`, `.callout-essence`
- DD-006: `.callout-essence`, `.callout-info`
- Pattern: Flat class names, no BEM. `__label` and `__content` sub-elements.
- Backgrounds: `rgba(accent-color, 0.05)` -- semi-transparent.

**Generation 2 (OD/CD explorations): `.callout` + `.callout--{variant}` pattern**
- OD-001: `.callout`, `.callout--info`, `.callout--tip`, `.callout--gotcha`, `.callout--essence`, `.callout--challenge`, `.callout--collapsible`
- OD-003: `.callout`, `.callout--essence`
- OD-006: `.callout`, `.callout--insight`, `.callout--discovery`, `.callout--warning`, `.callout--note`, `.callout--essence`
- CD-001: `.callout`, `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--essence`
- CD-003: `.callout`, `.callout--note`, `.callout--tip`, `.callout--gotcha`, `.callout--caution`, `.callout--challenge`, `.callout--essence`
- Pattern: BEM modifier pattern. `__label` and `__body` sub-elements.
- Backgrounds: OD-001 uses `background: var(--color-zone-sparse)` (OPAQUE). CD explorations use `background: var(--color-zone-sparse)` (OPAQUE).

**Generation 3 (implementation/callouts.css): Separate type classes**
- `.gotcha-box`, `.essence-box`, `.info-callout`, `.tip-callout`, `.challenge-box`, `.reasoning-box`
- Backgrounds: `transparent`

**Components.css (the merged file) uses Generation 2 class names but Generation 1 backgrounds (rgba).** This is the worst combination -- it takes the modern API from OD/CD but the prohibited semi-transparent backgrounds from DD.

**Provenance verdict for callout backgrounds:**
- DD explorations: rgba backgrounds (semi-transparent) -- THIS IS WHAT THEY ACTUALLY USE
- OD-001 v3: `var(--color-zone-sparse)` (opaque) -- CORRECTED in re-enrichment
- CD explorations: `var(--color-zone-sparse)` (opaque) -- CORRECTED from the start
- components.css merged file: `rgba(...)` -- **REGRESSION: imported the DD pattern instead of the corrected OD/CD pattern**
- implementation/callouts.css: `transparent` -- A THIRD option

**Answer to key question: "Do explorations use rgba backgrounds or opaque?"**
- DD explorations: rgba (original sin)
- OD/CD explorations: opaque (corrected)
- The components.css merged file chose wrong -- it imported the DD-era rgba pattern

#### CODE BLOCKS (lines 88-165)

The `pre` element styling (lines 88-99) and `.code-snippet` component (lines 124-165) both exist in explorations:
- `pre` styling: Present across all explorations (background dark, mono font, light text)
- `.code-snippet` with `__header/__filename/__copy/__content`: DD-specific structure. Not present in CD explorations which use plain `pre`.

**Verdict: `pre` is GENUINE. `.code-snippet` is DD-SPECIFIC.**

#### PAGE HEADER (lines 176-208)

Two parallel sets of class names:
- `.exploration-header`, `.exploration-id`, `.exploration-title`, `.exploration-hypothesis`: Used in ALL DD and OD explorations
- `.page-header`, `.page-header__id`, `.page-header__title`, `.page-header__subtitle`: PIPELINE GENERALIZATION -- not used in any exploration

**Verdict: `.exploration-*` classes are GENUINE. `.page-header__*` classes are a PIPELINE RENAME that no exploration uses.**

`background: white` on `.exploration-header` (line 181): GENUINE -- DD-006 line 194, DD-001 line 171, OD-001 line 513, etc. But violates the prohibition against pure white.

#### PAGE FOOTER (lines 212-230)

`.page-footer` with `__section` and `__label`: Not present in DD explorations (they have no footer). Introduced in OD and CD phases.

**Verdict: OD/CD-ERA component.**

#### TABLES (lines 235-265)

Table styling is present across explorations with tables (OD-003, OD-004, CD-006). The specific styling (uppercase th, 3px bottom border) matches explorations.

**Verdict: GENUINE.**

#### STATS BAR (lines 308-358)

Two patterns exist:
- `.stats-bar` + `.stats-bar__segment` (DD/OD pattern): Present in DD and OD explorations
- `.stat-item` + `.stat-label` + `.stat-value` (CD pattern): Present in CD explorations

**Verdict: Both are GENUINE but from different eras. Having both in one file is a pipeline merge artifact.**

#### SECTION INDICATOR / META LINE (lines 362-387)

`.section-indicator`: Used in DD and OD explorations for section labels.
`.meta-line`: CD-era refinement of the same concept.

**Verdict: GENUINE across eras.**

#### FILE TREE (lines 392-419)

`.file-tree` with `__label`, `__content`, `.folder`, `.file`, `.comment`: Present in CD-003 (File Tree with Callouts) and other CD explorations.

**Verdict: CD-ERA -- genuine in CD explorations.**

#### DECISION MATRIX (lines 424-453)

`.decision-matrix`: Present in OD-001 and other explorations with comparison grids. Hardcoded 4-column grid.

**Verdict: GENUINE but rigid.**

#### DENSITY INDICATOR (lines 458-477)

`.density-indicator`, `.density-bar--sparse/medium/dense`: These are META-VISUALIZATIONS showing pipeline density analysis. They are NOT content components.

**Verdict: PIPELINE META-COMPONENT -- not a content component.**

#### Q&A PAIR (lines 482-524)

`.question`, `.question__marker`, `.question__text`, `.answer`, `.answer__lead`, `.answer__lead--dropcap`: OD-001 conversational pattern. Very specific to OD-001.

**Verdict: OD-001-SPECIFIC component elevated to universal status.**

#### BREADCRUMB (lines 529-547)

`.breadcrumb`: Not present in ANY exploration HTML file.

**Verdict: PIPELINE INVENTION -- zero exploration source.**

#### CD-SPECIFIC COMPONENTS (lines 553-821)

All correctly marked "CD-ONLY":
- `.reasoning`: CD-001 specific
- `.core-abstraction`: CD-006 and implementation/core-abstraction.css (but different styling)
- `.bento-grid`: CD explorations
- `.essence-pullquote`: CD explorations
- `.density-meter`: CD-era meta-visualization
- `.version-badge`: CD-only
- `.section-zone--*`: CD-specific arc encoding (CRESCENDO)
- `.breathing-zone`: CD-specific

**Verdict: Appropriately marked CD-ONLY. Their presence in the merged file is debatable but documented.**

#### TENSION-TEST-ONLY COMPONENTS (lines 828-895)

- `.stratum`, `.stratum-boundary`: Boris geological metaphor from tension-test
- `.floor`, `.floor-label`, `.room`: Gas Town building metaphor from tension-test
- `.compression-grid`, `.compression-cell`: Tension-test specific

**Verdict: METAPHOR-SPECIFIC IMPLEMENTATIONS that should NOT be in a component library.** Their presence contradicts the anti-gravity protocol. A builder seeing `.floor` and `.room` classes is seeing prior metaphor implementations.

---

## PART 3: KEY QUESTIONS ANSWERED

### Q1: Is #FAFAFA (cool gray) used in any exploration?

**NO.** grep across all 18 exploration HTML files returns zero matches for `#FAFAFA` or `#fafafa`. The `--bg-page: #FAFAFA` token in tokens.css line 42 has NO exploration source. It is a pipeline invention. All explorations use `#FEF9F5` (warm cream) for page backgrounds. The prior audit (14-tokens-components-audit.md) flagged this as potentially contradicting prohibition #16 ("NEVER use cool-toned grays"). That concern is confirmed: `#FAFAFA` is indeed a cool neutral with no warm undertone, and no exploration ever used it.

### Q2: Do explorations use rgba backgrounds or opaque?

**DD explorations use rgba. OD/CD explorations use opaque.** This is an evolution:

| Stage | Callout Background | Pattern |
|-------|-------------------|---------|
| DD-001 through DD-006 | `rgba(accent-color, 0.05)` | Semi-transparent tinting |
| OD-001 v3 | `var(--color-zone-sparse)` (#FEF9F5) | Opaque palette color |
| OD-003, OD-006 | No explicit bg / `var(--color-zone-sparse)` | Opaque or none |
| CD-001 through CD-006 | `var(--color-zone-sparse)` (#FEF9F5) | Opaque palette color |

The OD re-enrichment (v3) explicitly fixed this: "Semi-transparent offset pseudo-elements (opacity 0.15/0.3 -> opacity 1 with palette color)" is documented in OD-001's header (line 61).

**The components.css merged file chose the WRONG generation.** It uses DD-era `rgba(...)` instead of the corrected OD/CD-era opaque backgrounds.

### Q3: Which callout API do explorations actually use?

**Three APIs evolved across stages:**

1. **DD API** (DD-001 through DD-006): `.callout-{type}` + `.__label` + `.__content`. Flat class names, rgba backgrounds.
2. **OD/CD API** (OD-001+, CD-001+): `.callout` + `.callout--{variant}` + `.__label` + `.__body`. BEM modifier pattern, opaque backgrounds.
3. **Implementation API** (callouts.css): `.gotcha-box`, `.essence-box`, etc. Separate component types, transparent backgrounds.

The components.css merged file uses API #2 (the OD/CD BEM modifier pattern), which is the right choice. But it uses `.__content` AND `.__body` as body class names (line 31-32: `.callout__content, .callout__body`), bridging APIs #1 and #2.

### Q4: What diverges between implementation/component-system/css/ and compositional-core?

| Dimension | compositional-core | implementation/component-system | Winner |
|-----------|-------------------|---------------------------------|--------|
| **Callout API** | `.callout--{variant}` (parameterized) | `.gotcha-box`, `.essence-box` (separate types) | compositional-core (more composable) |
| **Callout backgrounds** | `rgba(...)` (prohibited) | `transparent` (correct) | **implementation** |
| **Border weights** | 4px/3px/1px (3 levels) | 1px/2px/3px/4px/6px (5 levels, includes prohibited 2px) | Neither (both have issues) |
| **Core abstraction border** | `var(--color-primary)` (#E83025) | `var(--color-text)` (#1A1A1A) | implementation (matches CD-006 source) |
| **Letter-spacing tokens** | Not tokenized | 5 named values (`--tracking-*`) | **implementation** (richer vocabulary) |
| **Line-height tokens** | Not tokenized | 6 named values (`--leading-*`) | **implementation** (richer vocabulary) |
| **Global soul reset** | Token declaration only | `* { border-radius: 0; box-shadow: none; }` | **implementation** (stronger enforcement) |
| **Responsive tokens** | None | Reduces at 768px/480px | **implementation** |
| **Soul compliance** | 13 violations (rgba, white, off-grid) | 3 violations (2px border, `color: white`) | **implementation** (fewer violations) |

**The implementation/component-system/ is actually MORE soul-compliant than the compositional-core merged file.** The implementation's callouts use transparent backgrounds (not rgba), its core-abstraction uses `var(--color-text)` (matching CD-006), and its global reset enforces soul constraints on all elements. Its weaknesses are the prohibited 2px border weight and the separate-type callout API (less composable).

---

## PART 4: CROSS-CUTTING FINDINGS

### Finding 1: 14% of tokens are pipeline inventions

11 tokens have no exploration source: `--bg-page` (#FAFAFA), `--bg-info/tip/gotcha/summary` (4 tokens), `--bg-dark` (#1E1E1E), `--text-secondary` (#444444), `--text-tertiary` (#888888), `--text-muted` (#AAAAAA), `--space-max-section`, `--space-max-zone`. These were either constructed during the Phase C extraction or added later from pipeline rules.

### Finding 2: The DD-to-OD callout evolution was lost in the merge

DD explorations used rgba backgrounds. OD/CD explorations corrected this to opaque. The merged components.css imported the DD-era rgba pattern, creating 5 prohibition violations. This is a regression -- the system evolved AWAY from rgba, and the merge brought it back.

### Finding 3: The type scale duplication creates real confusion

Two parallel scales (`--text-*` and `--type-*`) with DIFFERENT values for the same concept (section heading: 24px vs 26px) means builders must choose between two authorities. Scale 2 (`--type-*`) is a single exploration's override (CD-006) that was elevated to system-level vocabulary.

### Finding 4: `background: white` is the most common prohibition violation in explorations

30+ instances of `background: white` across exploration HTML files. DD-006 alone has 8 instances. This was never corrected in the explorations and was imported verbatim into components.css (line 181).

### Finding 5: Tension-test components in merged file undermine anti-gravity

`.stratum`, `.floor`, `.room`, `.compression-grid` are metaphor-specific implementations from tension-test experiments. Their presence in the component library means builders reading components.css see prior metaphor implementations, exactly what the anti-gravity protocol is designed to prevent.

### Finding 6: The zone color attribution is wrong

Tokens.css line 51 says "OD-F-005 zone token naming" but the `--color-zone-*` tokens first appear in CD explorations (CD-001, CD-003, CD-006), not in any OD exploration. The finding OD-F-005 may describe the concept, but the tokens were implemented in the CD phase.

### Finding 7: The implementation/component-system/ is an undervalued asset

Despite being labeled "TRANSITIONAL" and "Phase 3.5", the implementation's callouts.css has:
- Transparent backgrounds (correct per prohibition)
- Soul questions documenting WHY each component rejects its generic equivalent
- Data attributes for Playwright testing
- Responsive breakpoints
- Richer typography tokens (letter-spacing, line-height)

It is MORE compliant than the compositional-core merged file that nominally supersedes it.

---

## PART 5: PROVENANCE QUALITY GRADES

| File | Grade | Rationale |
|------|-------|-----------|
| tokens.css -- soul constraints | A | 100% exploration coverage, genuine |
| tokens.css -- primary colors | A | 100% exploration coverage, genuine |
| tokens.css -- spacing | A | 100% exploration coverage, genuine |
| tokens.css -- accent colors | A- | 4/5 genuine, coral is CD-era addition |
| tokens.css -- typography fonts | A | 100% exploration coverage |
| tokens.css -- syntax colors | B+ | Genuine but only in explorations with code |
| tokens.css -- type scale (--text-*) | B | 7/9 genuine, 2 low evidence |
| tokens.css -- type scale (--type-*) | D | CD-006-specific override elevated to system |
| tokens.css -- background colors | F | 6/8 are pipeline inventions |
| tokens.css -- text hierarchy | D | 3/5 are pipeline inventions |
| tokens.css -- zone colors | C | CD-only, wrongly attributed to OD |
| tokens.css -- spacing maximums | D | Pipeline rules disguised as tokens |
| components.css -- callout family | B- | Right API but wrong backgrounds (rgba regression) |
| components.css -- code blocks | B+ | `pre` genuine; `.code-snippet` DD-specific |
| components.css -- page header | C | `.exploration-*` genuine; `.page-header__*` invented |
| components.css -- tables | A- | Genuine across explorations |
| components.css -- stats bar | B | Genuine but two conflicting APIs merged |
| components.css -- CD-ONLY section | B | Correctly marked, genuine CD provenance |
| components.css -- TENSION-TEST-ONLY | F | Metaphor-specific, undermines anti-gravity |

---

**END PROVENANCE TRACE**
