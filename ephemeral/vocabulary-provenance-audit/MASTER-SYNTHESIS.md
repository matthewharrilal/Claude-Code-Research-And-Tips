# MASTER SYNTHESIS: Vocabulary Provenance Audit

**Synthesizer:** synthesizer (Task #25)
**Date:** 2026-03-01
**Input:** 12 audit reports from 12 independent agents (3 CSS readers, 5 provenance tracers, 4 metacognitive/adversarial analysts)
**Method:** Cross-referenced all 12 reports for convergence (3+ agents agree = high confidence), divergence (agents disagree = noted), and gaps (no agent covered = flagged)

---

## 1. WHAT TO KEEP

Items with strong multi-agent consensus as genuine identity. Confidence levels: HIGH (5+ agents confirm), MEDIUM (3-4 agents), LOW (2 agents).

### 1.1 Soul Constraints (HIGH CONFIDENCE -- all 12 agents agree)

| Item | Evidence | Agents Confirming |
|------|----------|-------------------|
| `border-radius: 0` | 18/18 explorations, AD-F-013 proves generative, 24+ audit agents zero violations | dd-reader, od-reader, cd-reader, prohibitions-tracer, soul-tracer, mechanism-tracer, tokens-components-tracer, fresh-extractor |
| `box-shadow: none` | 18/18 explorations, AD-F-020 philosophical grounding, violations caught in audit | All same agents |
| `filter: none` (as COROLLARY of box-shadow, not separate soul constraint) | 18/18 compliance, but soul-tracer proved it's an implementation detail of box-shadow | soul-tracer, prohibitions-tracer, fresh-extractor |

**Recommendation:** Keep border-radius: 0 and box-shadow: none as soul. Merge filter: none INTO box-shadow as "no shadow/depth simulation of any kind (box-shadow, filter: drop-shadow, rgba pseudo-element tricks)." This is 2 soul principles, not 3.

### 1.2 Locked Color Palette (HIGH CONFIDENCE)

| Token | Value | Source | Keep? |
|-------|-------|--------|-------|
| `--color-primary` | `#E83025` | ALL 18 explorations, DD-001 through CD-006 | YES |
| `--color-background` | `#FEF9F5` | ALL 18 explorations | YES |
| `--color-text` | `#1A1A1A` | ALL 18 explorations | YES |
| `--color-text-secondary` | `#666666` | ALL 18 explorations | YES |
| `--color-border` | `#E0D5C5` | ALL 18 explorations | YES |
| `--color-border-subtle` | `#F0EBE3` | ALL 18 explorations | YES |

All 6 primary colors are 100% present across all explorations. Confirmed by all 3 CSS readers + tokens-components-tracer + fresh-extractor (5 agents). These are IMMUTABLE.

### 1.3 Accent Colors (HIGH CONFIDENCE, 4/5)

| Token | Value | Present In | Keep? |
|-------|-------|------------|-------|
| `--accent-blue` | `#4A90D9` | ALL 18 explorations | YES |
| `--accent-green` | `#4A9D6B` | ALL 18 explorations | YES |
| `--accent-amber` | `#D97706` | ALL 18 explorations | YES |
| `--accent-purple` | `#7C3AED` | DD-002+ and all OD/CD | YES |
| `--accent-coral` | `#C97065` | CD-era addition only (tokens-components-tracer) | YES but mark CD-ERA |

### 1.4 Typography Trinity (HIGH CONFIDENCE)

| Token | Value | Agents Confirming |
|-------|-------|-------------------|
| `--font-display` | `'Instrument Serif', Georgia, serif` | All 3 CSS readers, fresh-extractor, tokens-components-tracer |
| `--font-body` | `'Inter', system-ui, sans-serif` | Same |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | Same |

100% locked across all 18 explorations. Zero deviation.

### 1.5 Spacing Scale (HIGH CONFIDENCE)

All `--space-N` tokens from 4px through 80px are genuine across all explorations. `--space-24: 96px` is OD-004+ only. KEEP entire scale.

### 1.6 Border Weight System (HIGH CONFIDENCE)

| Weight | Purpose | Agents Confirming |
|--------|---------|-------------------|
| 4px | Structural accent (callout left-border) | dd-reader, od-reader, cd-reader, mechanism-tracer, prohibitions-tracer |
| 3px | Section/component framing | Same |
| 1px | Subtle separators | Same |
| 2px | BANNED (OD epidemic, 108 declarations, 17-agent audit) except OD-004 confidence encoding | prohibitions-tracer, mechanism-tracer |

### 1.7 Syntax Highlighting Palette (HIGH CONFIDENCE)

All 7 syntax tokens match across explorations with code blocks. Values confirmed by dd-reader, od-reader, cd-reader, tokens-components-tracer.

### 1.8 Genuine Prohibitions (HIGH CONFIDENCE -- prohibitions-tracer + prior audit agree)

| # | Rule | Classification | Keep? |
|---|------|---------------|-------|
| 1 | No border-radius > 0 | GENUINE (strongest evidence of all rules) | YES |
| 2 | No box-shadow | GENUINE | YES |
| 9 | No 2px borders (except OD-004 confidence) | GENUINE (17-agent audit, 108 declarations) | YES |
| 10 | No accent borders < 4px | GENUINE (cross-exploration signature) | YES |
| 13 | No vertical table borders | GENUINE (multi-source: geometry, registry, enablement) | YES |
| 14 | No hover lift effects | GENUINE (AD-F-020 philosophical grounding) | YES |

### 1.9 Genuine Compositional Grammar (HIGH CONFIDENCE -- rules-tracer confirmed)

| Rule | What It Says | Evidence Quality |
|------|-------------|-----------------|
| DNA1-DNA3 | 2-zone callout structure (sparse label + dense body) | STRONGEST (6/6 files, 18/18 explorations) |
| C1 | Sequential patterns, not simultaneous (AD-F-024) | STRONG (tested in AD-006, validated in CD-005) |
| C2 | Transition grammar between patterns (AD-F-025) | STRONG (tested, CD-005 demonstrates) |
| AP1 | No callout stacking (DD-F-014) | STRONG (cross-validated) |
| AP2 | No uniform density | STRONG (all explorations vary density) |
| RC1-RC2 | 768px grid collapse, padding compression | STRONG (universal in explorations) |
| Z1 | Background color changes signal content type | STRONG (zone tokens in CSS) |

### 1.10 Genuine Mechanisms (mechanism-tracer confirmed, with corrected counts)

| # | Mechanism | Usage | Keep? |
|---|-----------|-------|-------|
| 1 | Border-Weight Gradient Encoding | 15/18 explorations | YES |
| 2 | 2-Zone Component DNA | 18/18 (UNIVERSAL) | YES (but reclassify as COMPONENT PATTERN) |
| 3 | Solid Offset Depth | 4-5/18 (OD-origin) | YES |
| 4 | Spacing Compression | 12+/18 | YES |
| 5 | Dense/Sparse Alternation | 18/18 (UNIVERSAL) | YES |
| 7 | Zone Background Differentiation | 12/18 (OD/CD only) | YES |
| 9 | Confidence/Priority Color Encoding | 16+/18 | YES |
| 11 | Typographic Scale Jumping | 18/18 | YES |
| 13 | Dark Header + 3px Border | 12-14/18 | YES (mark identity-locked) |
| 15 | Bento Grid | 10+/18 | YES |
| 16 | Drop Cap | 3/18 | YES (mark RARE) |
| 17 | Code Block (Dark + Syntax) | 12+/18 | YES (mark palette identity-locked) |
| 18 | Data Table (Mono Headers) | 10/18 | YES |

---

## 2. WHAT TO DELETE

Items multiple agents flagged as fabricated, arbitrary, pipeline artifact, or contradicted by explorations.

### 2.1 Pipeline-Invented Tokens (tokens-components-tracer: 11 of 78 tokens have NO exploration source)

| Token | Value | Problem | Agents Flagging |
|-------|-------|---------|-----------------|
| `--bg-page: #FAFAFA` | #FAFAFA | ZERO exploration usage. Cool gray contradicts warm palette. | tokens-components-tracer, fresh-extractor |
| `--bg-info: #F5F8FA` | #F5F8FA | No exploration uses this. Explorations use rgba() | tokens-components-tracer |
| `--bg-tip: #F5FAF5` | #F5FAF5 | Same | tokens-components-tracer |
| `--bg-gotcha: #FEF6F5` | #FEF6F5 | Same | tokens-components-tracer |
| `--bg-summary: #FEF9F0` | #FEF9F0 | No exploration source at all | tokens-components-tracer |
| `--bg-dark: #1E1E1E` | #1E1E1E | Explorations use #1A1A1A (via --color-text) | tokens-components-tracer, fresh-extractor |
| `--text-secondary: #444444` | #444444 | ALL explorations use #666666 | tokens-components-tracer |
| `--text-tertiary: #888888` | #888888 | No exploration source | tokens-components-tracer |
| `--text-muted: #AAAAAA` | #AAAAAA | No exploration source | tokens-components-tracer |
| `--space-max-section: 64px` | 64px | Post-exploration pipeline rule, not a token | tokens-components-tracer |
| `--space-max-zone: 96px` | 96px | Same | tokens-components-tracer |

**DELETE all 11.** These are pipeline inventions that no exploration uses. The constructed gray ramp (#444444/#888888/#AAAAAA) replaces the actual 2-color text hierarchy that explorations use (#1A1A1A primary, #666666 secondary). The --bg-* tokens are pre-computed rgba equivalents that were never validated.

### 2.2 Duplicate/Alias Tokens (tokens-components-tracer: 6 unnecessary)

| Token | Why Redundant | Action |
|-------|--------------|--------|
| `--bg-warm: #FEF9F5` | Alias of `--color-background` | DELETE |
| `--text-primary: #1A1A1A` | Alias of `--color-text` | DELETE |
| `--text-inverse: #FFFFFF` | Loosely used but never tokenized in explorations | DELETE |
| `--border-left-width: 4px` | Alias of `--border-structural` | DELETE (keep one) |
| `--type-body: 1rem` | Duplicate of `--text-base` | DELETE (resolve dual scale) |
| `--type-code: 0.875rem` | Duplicate of `--text-sm` | DELETE |
| `--type-meta: 0.75rem` | Duplicate of `--text-xs` | DELETE |

### 2.3 Redundant Prohibitions (prohibitions-tracer + prior audit agree)

| # | Rule | Reason to Delete | Agents Agreeing |
|---|------|-----------------|-----------------|
| 3 | No filter: drop-shadow | CSS synonym of #2 (both prohibit shadows) | prohibitions-tracer, soul-tracer, prior audit |
| 8 | No rounded decoration | Exact duplicate of #1 (document itself says "redundant") | prohibitions-tracer, prior audit |
| 15 | Traffic-light adjacency | ARBITRARY: No violation ever observed, aesthetic judgment only | prohibitions-tracer, taxonomy-analyst |
| 17 | h3 must be italic | ARBITRARY: Convention from exploration CSS, not identity. DD-001 VIOLATES it. | prohibitions-tracer, fresh-extractor |

### 2.4 Pipeline Process Rules in Identity Files

| # | Rule | Problem | Action |
|---|------|---------|--------|
| 19 | Research provenance required | Process methodology, not visual identity | MOVE to pipeline docs |
| 20 | Tension derivation required | Process rule; cited source (Rigidity-mechanics.md) DOES NOT EXIST | MOVE to pipeline docs or DELETE |

### 2.5 Redundant Mechanisms (mechanism-tracer confirmed)

| # | Mechanism | Problem | Action |
|---|-----------|---------|--------|
| 10 | Border-Left Semantic Signal | Redundant with #1 (border-weight) + #9 (color encoding) | DELETE |
| 12 | Progressive Disclosure | MISNAMED duplicate of #4 (Spacing Compression) | MERGE into #4 |

### 2.6 Tension-Test Components in components.css (tokens-components-tracer)

`.stratum`, `.stratum-boundary`, `.floor`, `.floor-label`, `.room`, `.compression-grid`, `.compression-cell` -- These are metaphor-specific implementations from tension-test experiments. They violate the anti-gravity protocol (builders see prior metaphors). **DELETE from component library.**

### 2.7 Breadcrumb Component (tokens-components-tracer)

`.breadcrumb` -- Not present in ANY exploration HTML file. Pipeline invention. **DELETE.**

### 2.8 Density Indicator Component (tokens-components-tracer)

`.density-indicator`, `.density-bar--sparse/medium/dense` -- META-VISUALIZATION showing pipeline density analysis, not a content component. **DELETE or MOVE to pipeline tooling.**

### 2.9 The Dual Type Scale (tokens-components-tracer)

Two parallel scales (`--text-*` and `--type-*`) with CONFLICTING values for section headings (24px vs 26px). `--type-*` is a CD-006-specific override elevated to system status. **RESOLVE: Keep one scale. The `--text-*` scale has broader exploration support.**

---

## 3. WHAT TO ADD

Missing vocabulary identified by exploration readers and mechanism tracer.

### 3.1 Uncataloged Mechanisms (mechanism-tracer found 14)

At minimum, add these 8 that clearly pass Name + Transfer tests:

| Technique | Explorations Using It | CSS Pattern |
|-----------|----------------------|-------------|
| Inline code styling | CD-006, DD-001+ | `code:not(pre code) { background: var(--color-border-subtle); padding: 2px 6px; border: 1px solid }` |
| File tree indentation | DD-001, CD-006 | `.file-tree-item--l1/l2/l3 { padding-left: 16px/32px/48px }` |
| Reasoning columns | CD-006, CD-002, CD-005 | `display: grid; grid-template-columns: 1fr 1fr` with `::before` list markers |
| Decision matrix with row highlighting | DD-001, CD-006 | `.recommended { background: #F2F9F4; font-weight: 600 }` |
| Task checklist | CD-006, CD-002, CD-005 | `.task-checkbox { width: 16px; height: 16px; border: 1px solid }` |
| Section divider with ::before | DD-006, OD-005 | Horizontal rule with centered label using positioned pseudo-element |
| Stratum boundary markers | OD-004 | 3-component: 48px whitespace + 3px rule + mono label with progress squares |
| Version badge | CD-006 | `.version-badge { font-family: mono; font-size: 0.625rem; padding: 2px 8px; border: 1px solid }` |

### 3.2 CD-006 Hardcoded Callout Background Colors (cd-reader found 5)

These per-accent tinted backgrounds are a CD-006 innovation that should be tokenized:

| Color | Purpose | Current Status |
|-------|---------|---------------|
| `#F5F9FE` | Info callout bg (blue-tinted) | Hardcoded in CD-006 only |
| `#F2F9F4` | Tip callout bg (green-tinted) | Hardcoded in CD-006 only |
| `#FEF6F5` | Gotcha callout bg (coral-tinted) | Hardcoded in CD-006 only |
| `#FFFBF2` | Challenge callout bg (amber-tinted) | Hardcoded in CD-006 only |
| `#F8F5FE` | Core abstraction label bg (purple-tinted) | Hardcoded in CD-006 only |

These are OPAQUE alternatives to the DD-era rgba backgrounds. They solve the semi-transparent background prohibition. **TOKENIZE these as the canonical callout backgrounds.**

### 3.3 Missing Character Statement (reverse-engineer, first-principles)

No file synthesizes the system's character. The dynamic-6f-1 agent had to INFER: "An editorial purist with the temperament of a print architect. It treats the screen as a page, not an app." This should be STATED, not left for agents to discover.

### 3.4 Missing Tension Documentation (reverse-engineer)

The system has internal tensions that no file acknowledges:
- Warmth (cream palette) vs Severity (sharp geometry)
- Solid offset (shadow-like depth effect) vs Anti-shadow philosophy
- Vocabulary ceiling (celebration = green left-border; no playfulness, no visual surprise)
- Scar tissue rules (#21, #22) derived from experiment failures

### 3.5 Missing Vocabulary Limitations (reverse-engineer)

No file documents what the system CANNOT express. The reverse-engineer found: "Celebratory states have almost no expression -- success is just a green left-border." This negative space is critical for builders to understand.

### 3.6 Component Evolution Documentation (fresh-extractor)

The vocabulary files erase the DD -> OD -> CD evolution. Builders should know that:
- Zone tokens, type scale, dark header, border-weight encoding were INVENTED in OD, not present from DD-001
- Transition types, drop cap, bento grid were INVENTED in CD
- This provenance affects token stability (DD-locked tokens are safer than CD-only innovations)

---

## 4. PROPOSED FILE STRUCTURE

Three agents independently proposed similar restructurings. Convergence:

### High Consensus: 2-Layer Architecture

**Layer 1: UNDERSTANDING (for planning, analyzing, deriving)**

```
identity.md          (~120 lines)
  - Character statement (WHO -- 20 lines)
  - Soul constraints (2 principles + palette + typography)
  - Internal tensions (named, acknowledged)
  - Refusals (absolute prohibitions as character, not compliance)
  - Conditional boundaries (one-line summaries)

vocabulary.md        (~80 lines)
  - Design decisions and their reasons
  - Palette rationale (warm, not clinical)
  - Typography rationale (literary documentation feel)
  - Spatial system (4px base, 4 zones, gestalt aliases)
  - Structural signals (3 border weights, why 2px is skipped)
  - Token reference link

mechanisms.md        (~150 lines)
  - Capability inventory (~15 mechanisms, 3 lines each, no CSS)
  - Composition logic (content -> mechanism mapping)
  - Restraint guidance
  - Transition types
  - CSS reference link

grammar.md           (~100 lines)
  - Nesting rules (max depth 2, no callout nesting)
  - Rhythm principles (inhale/exhale, 1:3 compression ratio)
  - Zone rules (background = content type, max changes)
  - Density guidelines (max per viewport, geological inversion)
  - Compound pages (sequential, transitions, max patterns)
  - Anti-patterns (4 items)

components.md        (~40 lines)
  - Component inventory (names, purposes, signals)
  - Universal vs specialized
  - CSS reference link
```

**Layer 2: REFERENCE (for building, auditing, implementing)**

```
tokens.css           (~120 lines, cleaned)
  - Soul constraints (2 lines)
  - Locked palette (6 + 5 accent + 5 callout bg)
  - Typography (3 fonts)
  - Single type scale (~text-* only, remove --type-* duplicates)
  - Spacing (4px-80px, gestalt aliases)
  - Borders (3 weights)
  - Syntax highlighting (7 colors)
  - NO rule comments, NO pipeline inventions

components.css       (~700 lines, cleaned)
  - Remove tension-test components
  - Remove breadcrumb (no exploration source)
  - Remove density indicator (pipeline meta-component)
  - Fix callout backgrounds (opaque CD-006 colors, not rgba)
  - Remove dual header API (.page-header__* invented names)
  - ONE callout API (Generation 2: .callout + .callout--{variant})
```

### Line Budget Comparison

| Current | Lines | Proposed | Lines |
|---------|-------|----------|-------|
| prohibitions.md | 420 | identity.md | ~120 |
| soul-constraints.md | 343 | (merged into identity.md) | 0 |
| tokens.css | 184 | vocabulary.md + tokens.css | ~80 + ~120 |
| mechanism-catalog.md | 752 | mechanisms.md | ~150 |
| components.css | 945 | components.md + components.css | ~40 + ~700 |
| compositional-rules.md | 528 | grammar.md | ~100 |
| **TOTAL** | **3,172** | **TOTAL** | **~1,310** |

**59% reduction.** The reverse-engineer found the dynamic-6f-1 agent used only 175 lines (5.5%) of the current 3,172. The proposed structure concentrates signal.

---

## 5. THE CONTAINER WIDTH QUESTION

### Evidence from all 3 CSS readers:

| Stage | Exploration | Container Width |
|-------|------------|----------------|
| DD | DD-001, DD-002 | 900px |
| DD | DD-003, DD-004, DD-006 | 1000px |
| DD | DD-005 | 1100px |
| OD | ALL 6 | 860px |
| CD | ALL 6 | 1100px |

### Current specification: 940-960px

### Agent consensus (fresh-extractor + all 3 CSS readers):

**NO exploration uses 940-960px.** This value was imposed by the pipeline. The explorations show:
- DD average: ~970px (varied 900-1100)
- OD: locked at 860px
- CD: locked at 1100px

### Recommendation:

**REMOVE the 940-960px hard constraint.** Replace with guidance:

```
Container width: 860-1100px
  - Narrow (860px): Dense technical content, reading-focused
  - Standard (960px): General-purpose (good default)
  - Wide (1100px): Multi-axis layouts, spatial compositions

Rule: Consistent within a single page. Variable across pages.
```

This acknowledges the actual exploration range while providing reasonable guidance. The "standard" 960px is a good DEFAULT but should not be an absolute gate.

---

## 6. THE SOUL QUESTION

### Current state: 3 soul constraints (border-radius, box-shadow, filter)

### Soul-tracer found:

1. **filter:none is an implementation detail of box-shadow:none**, admitted by the document itself ("Same principle as box-shadow"). One principle, two CSS properties.

2. **The warm palette was demoted without documented rationale.** The lens-manifesto lists "primary red (#E83025)" as one of the 3 consensus soul items. soul-constraints.md replaced it with filter:none.

3. **The original SOUL-DISCOVERIES found 5 soul pieces**, narrowed to 3 by selecting only grepable CSS properties:
   - Soul Piece 1: Sharp edges (border-radius: 0) -- KEPT
   - Soul Piece 2: Archivist speaks in serif (Instrument Serif italic) -- DEMOTED
   - Soul Piece 3: Callout family DNA (2-zone + 4px border) -- DEMOTED
   - Soul Piece 4: Shadows lie about depth (box-shadow: none) -- KEPT
   - Soul Piece 5: Squares signal system (squares vs circles) -- DEMOTED

### Recommendation: Redefine soul as 2 PRINCIPLES + 3 SIGNATURES

**2 Soul Principles (philosophical, immutable):**
1. **Angular geometry** -- border-radius: 0, all sharp edges, no softened corners
2. **No shadow/depth simulation** -- box-shadow: none, filter: no drop-shadow, no rgba shadow tricks

**3 Identity Signatures (recognizable, highly stable):**
3. **Warm palette** -- #FEF9F5 cream, #E83025 red, #1A1A1A near-black (the lens-manifesto's original 3rd consensus item)
4. **Typography trinity** -- Instrument Serif for display/essence, Inter for body, JetBrains Mono for code
5. **4px left-border callout system** -- The universal structural accent, 2-zone DNA

This structure:
- Preserves the 2 genuinely immutable CSS constraints
- Elevates the warm palette back to its original consensus position
- Acknowledges typography and callout structure as recognizable signatures
- Removes filter:none as a separate slot (it's covered by principle #2)
- Gives builders a richer understanding of identity beyond "3 CSS properties to grep for"

---

## 7. THE MECHANISM QUESTION

### How many genuine mechanisms?

**Mechanism-tracer counted:** ~15 genuinely distinct mechanisms (not 18). Current inflation:
- #10 (Border-Left Signal) is redundant with #1 + #9
- #12 (Progressive Disclosure) is mislabeled duplicate of #4
- #2 (2-Zone DNA) is a COMPONENT PATTERN, not a mechanism

**Fresh-extractor counted:** 10-12 from cold CSS reading

**Mechanism-tracer also found:** 14 techniques in explorations NOT in the catalog

### Recommendation:

**Target: ~20 mechanisms (15 current genuine + 5 from uncataloged techniques)**

The catalog should:
1. **Remove** #10 (redundant) and #12 (duplicate of #4)
2. **Reclassify** #2 (2-Zone DNA) as a component pattern
3. **Add** 5-8 uncataloged techniques (inline code, file tree indentation, reasoning columns, section dividers, task checklist at minimum)
4. **Add framing language:** "These mechanisms are illustrative, not exhaustive. Additional techniques that pass the Name Test and Transfer Test may be used."
5. **Document usage frequency:** A mechanism used in 18/18 explorations vs 3/18 is material information
6. **Mark stage of origin:** DD-locked, OD-invented, CD-invented
7. **Tag identity-locked implementations:** #13 (dark header), #14 (footer mirror), #17 (code block syntax palette) should be marked "technique transfers, specific colors are identity"

### What the catalog should look like:

```
SPATIAL (4):
  - Dense/Sparse Alternation (18/18, DD-origin)
  - Spacing Compression (12+/18, DD-origin)
  - Width Variation (3-4/18, DD-origin, RARE)
  - Bento Grid (10+/18, DD-003+)

HIERARCHY (2):
  - Border-Weight Gradient Encoding (15/18, OD-004 origin)
  - Typographic Scale Jumping (18/18, universal)

COMPONENT (4):
  - Confidence/Priority Color Encoding (16+/18, universal)
  - Inline Code Styling (common, NEW)
  - Task Checklist (CD-002+, NEW)
  - Version Badge (CD-006, NEW)

DEPTH/EMPHASIS (3):
  - Solid Offset Depth (4-5/18, OD-001 origin)
  - Zone Background Differentiation (12/18, OD+ only)
  - Drop Cap (3/18, OD-001 origin, RARE)

STRUCTURE (5):
  - Dark Header + 3px Border (12-14/18, identity-locked)
  - Footer Mirror (6-8/18, identity-locked)
  - Code Block (12+/18, palette identity-locked)
  - Data Table (10/18)
  - Section Divider with ::before (DD-006+, NEW)
  - Reasoning Columns (CD-002+, NEW)

COMPONENT PATTERNS (separate section):
  - 2-Zone DNA (18/18, UNIVERSAL pattern, not a mechanism)
  - Stratum Boundary Markers (OD-004+, NEW)
  - File Tree Indentation (DD-001+, NEW)
```

---

## 8. READING ORDER

### Convergence from taxonomy-analyst, reverse-engineer, and first-principles:

**For BUILDER agents (the primary use case):**

| Order | File | Why This Order | Time |
|-------|------|---------------|------|
| 1 | tokens.css | Implementation reality -- every CSS property uses these | ~2 min |
| 2 | identity.md | Character + constraints -- know WHO before HOW | ~3 min |
| 3 | mechanisms.md | Compositional tools -- what's available | ~4 min |
| 4 | components.css | Implementation library -- concrete CSS | ~8 min |
| 5 | grammar.md | Combination rules -- only if multi-section pages | ~3 min |
| | vocabulary.md | Optional enrichment -- design decisions and rationale | ~2 min |
| | components.md | Optional inventory -- if need to browse what exists | ~1 min |

**NEVER read soul-constraints.md** (eliminated, merged into identity.md)

**For AUDITOR agents:**
1. identity.md (constraints to verify)
2. tokens.css (values to check)
3. grammar.md (composition rules to audit)
4. mechanisms.md (mechanism deployment to verify)
5. components.css (implementation to check)

**For RESEARCHER agents:**
1. identity.md (character + tensions first)
2. vocabulary.md (design decisions)
3. mechanisms.md (capability landscape)
4. grammar.md (combination rules)
5. tokens.css (implementation details)
6. components.css (full library)

**Key insight (taxonomy-analyst):** Reading order should be ROLE-DEPENDENT, not fixed. The current CLAUDE.md prescribes one order; the system should expose 3 reading paths.

---

## 9. CONTRADICTIONS

Every case where vocabulary files contradict their own source explorations.

### 9.1 Callout Backgrounds: rgba vs Opaque

**The vocabulary files contradict each other AND the explorations:**
- prohibitions.md #4: "NEVER use semi-transparent backgrounds (opacity < 1)"
- components.css: Uses `rgba(232, 48, 37, 0.05)` on callout variants (lines 49-82)
- DD explorations: Use rgba (the original pattern)
- OD/CD explorations: Corrected to opaque `var(--color-zone-sparse)`
- **components.css imported the DD-era rgba pattern, creating a REGRESSION**

**Resolution:** Use CD-006's opaque tinted backgrounds (#F5F9FE, #F2F9F4, etc.) as canonical. Delete rgba from components.css. (Agents: tokens-components-tracer, fresh-extractor, cd-reader)

### 9.2 Pure White Usage

- prohibitions.md #6: "NEVER Use Pure White (#FFFFFF)"
- DD explorations: `background: white` on headers, cards, surfaces (30+ instances across DD files)
- OD explorations: `background: white` on geological survey, comparison columns
- components.css line 181: `background: white` on exploration-header
- **The explorations freely use `white`, the prohibition says never**

**Resolution:** Acknowledge that `white` / `#FFFFFF` is a legitimate component background for surfaces. The prohibition should target LARGE AREA backgrounds (page-level), not component surfaces. (Agents: fresh-extractor, tokens-components-tracer)

### 9.3 Italic h3 Convention

- prohibitions.md #17: "NEVER Use Non-Italic h3 Headings"
- DD-001: h3 has NO `font-style: italic` (confirmed by fresh-extractor)
- **DD-001, the FIRST exploration, violates this rule**

**Resolution:** Remove prohibition #17. Italic h3 is a convention that emerged during OD, not an identity requirement. (Agents: prohibitions-tracer, fresh-extractor)

### 9.4 Container Width

- Vocabulary files: Mandate 940-960px
- DD explorations: 900-1100px (varies per exploration)
- OD explorations: 860px (all 6)
- CD explorations: 1100px (all 6)
- **NO exploration uses the mandated value**

**Resolution:** See Section 5 above. Replace hard constraint with range guidance. (Agents: fresh-extractor, dd-reader, od-reader, cd-reader)

### 9.5 Transition Grammar Naming

- mechanism-catalog.md: HARD CUT / SPACING SHIFT / CHECKPOINT
- compositional-rules.md: SMOOTH / BRIDGE / BREATHING
- **Two naming systems for overlapping concepts in two files**

**Resolution:** Consolidate into grammar.md with ONE naming system. Use CD-006's names (SMOOTH / BRIDGE / BREATHING) since they have exploration provenance. (Agents: taxonomy-analyst)

### 9.6 Density Limits Measure Different Things

- mechanism-catalog.md: "No more than 4 mechanisms per viewport"
- compositional-rules.md: "Max 3-4 components per viewport"
- **Mechanisms ≠ components. A viewport with 3 components each using 2 mechanisms = 3 components (PASS) but 6 mechanisms (FAIL). Interaction undefined.**

**Resolution:** Pick ONE measure. Components are the visible unit; measure by components. Mechanism density is an implementation detail. (Agents: taxonomy-analyst)

### 9.7 Zone Color Attribution

- tokens.css comment: "OD-F-005 zone token naming"
- Reality: `--color-zone-*` tokens ONLY appear in CD explorations
- **Attribution is wrong. OD may have named the concept, but CD implemented it.**

**Resolution:** Fix attribution. (Agent: tokens-components-tracer)

### 9.8 Serif for Body Text Contradiction

- prohibitions.md #7: "NEVER Use Instrument Serif for Body Text"
- anti-patterns registry (lines 172-188): RECOMMENDS Instrument Serif italic for Essence callout body text
- **The prohibition and its own cited evidence contradict each other**

**Resolution:** Reframe: "Instrument Serif is for display headings and Essence callouts, not general body text." The nuance matters. (Agent: prohibitions-tracer)

### 9.9 Type Scale Duplication

- `--text-h3: 1.5rem` (24px) from Scale 1
- `--type-section: 1.625rem` (26px) from Scale 2
- **Two different values for the same conceptual level (section headings)**

**Resolution:** Keep Scale 1 (`--text-*`), remove Scale 2 (`--type-*`). Scale 2 is a single CD-006 override. (Agent: tokens-components-tracer)

---

## 10. ACTION PLAN

Prioritized steps from current state to recommended state.

### Phase 1: Delete the Fabricated (2 hours, zero-risk)

1. **Delete 11 pipeline-invented tokens from tokens.css:** `--bg-page`, `--bg-info`, `--bg-tip`, `--bg-gotcha`, `--bg-summary`, `--bg-dark`, `--text-secondary (#444444)`, `--text-tertiary`, `--text-muted`, `--space-max-section`, `--space-max-zone`

2. **Delete 6 duplicate/alias tokens:** `--bg-warm`, `--text-primary`, `--text-inverse`, `--border-left-width` (keep `--border-structural`), `--type-body`, `--type-code`, `--type-meta`

3. **Delete tension-test components from components.css:** `.stratum`, `.stratum-boundary`, `.floor`, `.floor-label`, `.room`, `.compression-grid`, `.compression-cell`

4. **Delete breadcrumb component** (zero exploration source)

5. **Delete density indicator component** (pipeline meta-tool, not content component)

6. **Delete redundant prohibitions:** #3 (merge into #2), #8 (duplicate of #1), #15 (arbitrary), #17 (contradicted by DD-001)

7. **Move process prohibitions to pipeline docs:** #19, #20

### Phase 2: Fix the Contradictions (3 hours, moderate effort)

1. **Fix callout backgrounds in components.css:** Replace all `rgba(...)` with CD-006's opaque tinted backgrounds. Tokenize the 5 colors.

2. **Fix pure white contradiction:** Reframe prohibition #6 to target page-level backgrounds, not component surfaces. Acknowledge `white` as valid for cards/surfaces.

3. **Fix serif body text contradiction:** Reframe prohibition #7: "Instrument Serif for display and Essence callouts, not general body text."

4. **Resolve dual type scale:** Keep `--text-*`, remove `--type-*` duplicates. Resolve 24px vs 26px discrepancy (use 24px which has broader support).

5. **Fix zone color attribution:** tokens.css comment says OD-F-005, reality is CD implementation.

6. **Consolidate transition naming:** Use SMOOTH/BRIDGE/BREATHING consistently.

7. **Fix container width:** Replace 940-960px hard constraint with 860-1100px range guidance.

### Phase 3: Restructure the Files (1 day, significant effort)

1. **Create identity.md** (~120 lines):
   - Character statement
   - 2 soul principles + 3 identity signatures
   - Internal tensions (named)
   - Absolute refusals (one-line each)
   - Conditional boundaries (one-line summaries)

2. **Merge soul-constraints.md INTO identity.md** (eliminate separate file)

3. **Create vocabulary.md** (~80 lines):
   - Design decisions with rationale
   - References tokens.css for values

4. **Rewrite mechanism catalog** (~150 lines):
   - Remove #10 (redundant), #12 (duplicate)
   - Reclassify #2 as component pattern
   - Add 5+ uncataloged techniques
   - Add usage frequency and stage-of-origin
   - Remove CSS code blocks (reference separate file)

5. **Rewrite compositional rules as grammar.md** (~100 lines):
   - Distill 41 rules to ~25 principles
   - Remove evidence citations
   - Move anti-patterns from compositional-rules to identity.md refusals
   - Present as guidelines, not compliance rules

6. **Create components.md** (~40 lines):
   - Inventory with names, purposes, signals
   - Reference components.css for CSS

7. **Clean components.css** (~700 lines):
   - Remove deleted items from Phase 1
   - Fix backgrounds from Phase 2
   - Remove `.page-header__*` invented API (keep `.exploration-*`)
   - Single callout API

### Phase 4: Add What's Missing (half day)

1. **Add character statement** to identity.md (the dynamic-6f-1 agent's Section 1 is the template)
2. **Add tension documentation** (reverse-engineer's Section 2)
3. **Add vocabulary limitations** ("What the system cannot express")
4. **Add 5-8 uncataloged mechanisms** with usage frequency
5. **Tokenize CD-006's 5 callout background colors**
6. **Add stage-of-origin provenance** to tokens and mechanisms
7. **Add component evolution notes** (DD simple -> OD complex -> CD maximum)
8. **Implement role-dependent reading order** in CLAUDE.md navigation

---

## APPENDIX: Cross-Agent Agreement Matrix

| Topic | Agents Who Agree | Agents Who Disagree | Confidence |
|-------|-----------------|--------------------|----|
| border-radius: 0 is genuine soul | 12/12 | 0 | UNANIMOUS |
| box-shadow: none is genuine soul | 12/12 | 0 | UNANIMOUS |
| filter:none is redundant with box-shadow | 4/12 (soul-tracer, prohibitions-tracer, fresh-extractor, taxonomy-analyst) | 0 (no agent defended separate status) | HIGH |
| Warm palette should be elevated to soul/signature | 3/12 (soul-tracer, fresh-extractor, reverse-engineer) | 0 | MEDIUM |
| 11 tokens are pipeline inventions | 2/12 (tokens-components-tracer, fresh-extractor) | 0 | HIGH (specific evidence) |
| Components.css has rgba regression | 2/12 (tokens-components-tracer, fresh-extractor) | 0 | HIGH (specific evidence) |
| Prohibition #17 contradicted by DD-001 | 3/12 (prohibitions-tracer, fresh-extractor, prohibitions prior audit) | 0 | HIGH |
| Container width 940-960px not in explorations | 4/12 (fresh-extractor + 3 CSS readers) | 0 | UNANIMOUS among readers |
| 2-Zone DNA is strongest pattern | 4/12 (mechanism-tracer, rules-tracer, dd-reader, cd-reader) | 0 | HIGH |
| Mechanism count 18 is inflated | 3/12 (mechanism-tracer, fresh-extractor, taxonomy-analyst) | 0 | HIGH |
| Current files serve pipeline 18%, not builders | 1/12 (taxonomy-analyst) | 0 | MEDIUM (one agent, specific analysis) |
| 2-layer architecture (understanding + reference) | 3/12 (reverse-engineer, first-principles, taxonomy-analyst) | 0 | HIGH |
| soul-constraints.md is 70% redundant | 2/12 (taxonomy-analyst, reverse-engineer) | 0 | HIGH |
| Transition naming is inconsistent across files | 1/12 (taxonomy-analyst) | 0 | MEDIUM |
| Reading order should be role-dependent | 2/12 (taxonomy-analyst, first-principles) | 0 | HIGH |

---

**END MASTER SYNTHESIS**
