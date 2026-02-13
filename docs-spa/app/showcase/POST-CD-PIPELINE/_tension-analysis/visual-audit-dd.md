# Visual Audit: DD-003 through DD-006

**Auditor:** dd-auditor
**Date:** 2026-02-12
**Method:** Playwright snapshot + full HTML source analysis
**Files audited:**
- DD-003-islands.html (882 lines)
- DD-004-layers.html (1,276 lines)
- DD-005-rivers.html (1,252 lines)
- DD-006-fractal.html (1,121 lines)

---

## 1. SHARED DESIGN TOKENS (All 4 Files)

All DD-003 through DD-006 share an identical `:root` token block:

| Token | Value | Verified |
|-------|-------|----------|
| `--color-primary` | `#E83025` | All 4 |
| `--color-background` | `#FEF9F5` | All 4 |
| `--color-text` | `#1A1A1A` | All 4 |
| `--color-text-secondary` | `#666666` | All 4 |
| `--color-border` | `#E0D5C5` | All 4 |
| `--color-border-subtle` | `#F0EBE3` | All 4 |
| `--font-display` | `'Instrument Serif', Georgia, serif` | All 4 |
| `--font-body` | `'Inter', system-ui, sans-serif` | All 4 |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | All 4 |
| `--border-radius` | `0` | All 4 |
| `--box-shadow` | `none` | All 4 |
| `--border-left-width` | `4px` | All 4 |
| `--accent-blue` | `#4A90D9` | All 4 |
| `--accent-green` | `#4A9D6B` | All 4 |
| `--accent-amber` | `#D97706` | All 4 |
| `--accent-purple` | `#7C3AED` | All 4 |

### Soul Compliance: 100% across all 4 files
- `border-radius: 0` -- LOCKED
- `box-shadow: none` -- LOCKED
- No violations detected

---

## 2. SHARED COMPONENTS (Present in All 4 Files)

### 2.1 Exploration Header
Present identically in all 4 files.

| Property | Value |
|----------|-------|
| Class | `.exploration-header` |
| Border | `border-bottom: 3px solid var(--color-primary)` |
| Padding | `var(--space-6)` (24px) |
| Background | `white` |
| Margin-bottom | `var(--space-16)` (64px) |

**Sub-elements:**
- `.exploration-id`: mono 11px, uppercase, letter-spacing 0.1em, color primary red
- `.exploration-title`: display serif 32px, italic
- `.exploration-hypothesis`: body 14px, color secondary, max-width 600px

### 2.2 Page Container

| File | Max-width |
|------|-----------|
| DD-003 | `1000px` |
| DD-004 | `1000px` |
| DD-005 | `1100px` (WIDER -- accommodates parallel rivers) |
| DD-006 | `1000px` |

All use: `margin: 0 auto; padding: 0 var(--space-6);`

### 2.3 Skip Link + Accessibility Block
Identical across all 4 files (DD-BACKPORT):

```css
.skip-link { position: absolute; top: -100%; left: 0; background: var(--color-primary); color: var(--color-background); padding: 8px 16px; z-index: 1000; font-family: var(--font-body); font-size: 14px; text-decoration: none; }
.skip-link:focus { top: 0; }
*:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
::selection { background: var(--color-primary); color: var(--color-background); }
@media (prefers-reduced-motion: reduce) { ... }
```

### 2.4 Typography (h2, h3, p)

| Element | Font | Size | Style | Margin-bottom |
|---------|------|------|-------|---------------|
| `h2` | `--font-display` | `28px` | italic | `var(--space-4)` (16px) |
| `h3` | `--font-display` | `20px` | italic | `var(--space-3)` (12px) |
| `p` | (inherited body) | (inherited) | normal | `var(--space-4)` (16px) |
| `p` max-width | `65ch` | -- | -- | DD-003/005/006 |

**Note:** DD-004 does NOT define global h2/h3/p styles -- it uses layer-specific typography instead.

---

## 3. CALLOUT COMPONENTS

### 3.1 Callout-Essence

| Property | DD-003 | DD-004 | DD-005 | DD-006 |
|----------|--------|--------|--------|--------|
| Border-left | `4px solid --accent-amber` | `4px solid --accent-amber` | `4px solid --accent-amber` | `4px solid --accent-amber` |
| Background | `rgba(217,119,6, 0.05)` | `rgba(217,119,6, 0.08)` | `var(--color-border-subtle)` | `rgba(217,119,6, 0.08)` |
| Padding | `var(--space-6) var(--space-5)` | `var(--space-5)` | `var(--space-4)` | `var(--space-5)` |
| Label font | body 10px 600 uppercase | body 10px 600 uppercase | body 10px 600 uppercase | body 10px 600 uppercase |
| Label color | `--accent-amber` | `--accent-amber` | `--accent-amber` | `--accent-amber` |
| Content font | display 18px italic | display 17px italic | display 16px italic | display 17px italic |
| Max-width | `600px` (inline style) | none (700px inline) | none | none (700px inline) |

**DIVERGENCE:** Background opacity varies: DD-003=0.05, DD-004/006=0.08, DD-005 uses solid `#F0EBE3`. Content font-size varies: 16px-18px.

### 3.2 Callout-Tip

| Property | DD-003 | DD-004 | DD-005 | DD-006 |
|----------|--------|--------|--------|--------|
| Border-left | `4px solid --accent-green` | `4px solid --accent-green` | `4px solid --accent-green` | N/A |
| Background | `var(--color-border-subtle)` | `rgba(74,157,107, 0.08)` | `rgba(74,157,107, 0.08)` | N/A |
| Padding | `var(--space-4)` | `var(--space-4)` | `var(--space-3)` | N/A |
| Label font-size | 10px | 10px | 9px | N/A |
| Content font-size | 14px | 14px | 13px | N/A |

**DIVERGENCE:** DD-003 uses solid background (`#F0EBE3`); DD-004/005 use rgba. DD-005 has tighter padding (12px vs 16px) and smaller label (9px vs 10px).

### 3.3 Callout-Info

| Property | DD-003 | DD-004 | DD-005 | DD-006 |
|----------|--------|--------|--------|--------|
| Border-left | `4px solid --accent-blue` | `4px solid --accent-blue` | `4px solid --accent-blue` | `4px solid --accent-blue` |
| Background | `rgba(74,144,217, 0.05)` | `rgba(74,144,217, 0.08)` | `rgba(74,144,217, 0.08)` | `rgba(74,144,217, 0.08)` |
| Padding | `var(--space-4)` | `var(--space-4)` | `var(--space-4)` | `var(--space-4)` |
| Content font-size | 14px | 14px | 14px | 14px |

**DIVERGENCE:** DD-003 background opacity is 0.05; DD-004/005/006 use 0.08. This aligns with "DD-003 lessons: more visible callout backgrounds" applied in DD-004+.

### 3.4 Callout-Gotcha (DD-004 ONLY)

| Property | Value |
|----------|-------|
| Border-left | `4px solid var(--accent-coral)` |
| Background | `rgba(201,112,101, 0.08)` |
| Padding | `var(--space-4)` |
| Label | body 10px 600 uppercase, color `--accent-coral` |
| Content | 14px |

**UNIQUE to DD-004.** Uses `--accent-coral: #C97065` token (defined only in DD-004 and DD-005).

---

## 4. CODE BLOCKS

### 4.1 Code Snippet Component (DD-003, DD-005)

| Property | DD-003 | DD-005 |
|----------|--------|--------|
| Class | `.code-snippet` | `.code-snippet` |
| Background | `#1A1A1A` | `#1A1A1A` |
| Header bg | `#1A1A1A` | `#1A1A1A` |
| Header border-bottom | `1px solid var(--color-border)` | `1px solid var(--color-border)` |
| Filename font | mono, `var(--type-meta)` | mono, `var(--type-meta)` |
| Copy button | `1px solid --color-primary`, transparent bg, 11px | `1px solid --color-primary`, transparent bg, 10px |
| Content padding | `var(--space-4)` | `var(--space-3)` |
| Content color | `#FAFAF5` | `#FAFAF5` |
| Syntax: comment | `#666666` | `#666666` |
| Syntax: keyword | `#E83025` | `#E83025` |
| Syntax: string | `#6B9B7A` | `#6B9B7A` |
| Syntax: function | `#4A7C9B` | `#4A7C9B` |
| Syntax: variable | `#C97065` | `#C97065` |

**DIVERGENCE:** Copy button font-size (11px vs 10px), content padding (16px vs 12px). DD-005 is tighter -- consistent with narrow river density.

### 4.2 Bedrock Layer (DD-004 Code Block)

| Property | Value |
|----------|-------|
| Class | `.layer-bedrock` |
| Background | `var(--layer-bedrock)` = `#1A1A1A` |
| Border-left | `4px solid var(--color-primary)` |
| Header | flex, space-between, `rgba(255,255,255,0.05)` bg |
| Filename | mono 12px, color `#888` |
| Copy button | 11px, `1px solid --color-primary`, transparent bg |
| Content color | `#FAFAF5` |
| Syntax colors | Same as code-snippet |

**Note:** DD-004's bedrock IS the code block -- fused with the layer system.

### 4.3 Character Scale (DD-006 Code Block)

| Property | Value |
|----------|-------|
| Class | `.character-scale` |
| Background | `#1A1A1A` |
| Font | mono, `var(--type-code)` |
| Line-height | 1.5 |
| Color | `#FAFAF5` |
| Line numbers | `#666666`, `user-select: none`, min-width 24px |
| Comments | `#666666` |
| Syntax colors | Same as code-snippet |

**UNIQUE to DD-006.** Line-by-line display with visible line numbers. No copy button. No header. The code block IS the fractal demonstration.

---

## 5. FILE TREE COMPONENT

| Property | DD-003 | DD-004 |
|----------|--------|--------|
| Border | `1px solid --color-border-subtle` | none |
| Border-left | `4px solid --accent-blue` | `4px solid --accent-blue` |
| Background | none | `var(--layer-subsoil)` = `#F0EBE3` |
| Padding | `var(--space-4)` | `var(--space-4)` |
| Font | mono 12px | mono 12px |
| Line-height | 1.6 | 1.6 |
| White-space | pre | pre |
| `.folder` color | `--accent-blue` | `--accent-blue` |
| `.file` color | `--color-text` | `--color-text` |
| Has label | No | Yes (`.file-tree__label`) |

**DIVERGENCE:** DD-003 has a top/right/bottom border (1px subtle); DD-004 has no outer border but adds background color and a label sub-element. DD-005/006 do not use file-tree.

---

## 6. DECISION MATRIX (DD-003 ONLY)

| Property | Value |
|----------|-------|
| Class | `.decision-matrix` |
| Border-left | `4px solid var(--color-primary)` |
| Font-size | 13px |
| Header | grid 2fr/1fr/1fr, `rgba(232,48,37, 0.05)` bg, 10px uppercase |
| Rows | grid 2fr/1fr/1fr, `1px solid --color-border-subtle` bottom |

**UNIQUE to DD-003.** A compact, grid-based comparison table. Used inside islands for quick decision reference.

---

## 7. PATTERN-SPECIFIC COMPONENTS

### 7.1 DD-003: Islands Pattern

**Density Island Container:**
| Property | Value |
|----------|-------|
| Class | `.density-island` |
| Background | `white` |
| Border | `1px solid var(--color-border-subtle)` |
| Border-left | `4px solid var(--color-primary)` |
| Padding | `var(--space-6)` (24px) |
| Max-width | `700px` |
| Margin-bottom | `var(--space-16)` (64px) |

**Offset variants:**
- `.density-island--offset-right`: `margin-left: auto`
- `.density-island--offset-center`: `margin: auto`

**Island sub-elements:**
- `.density-island__label`: mono 10px uppercase, letter-spacing 0.1em, color primary
- `.density-island__title`: display 22px italic
- `.density-island__content`: 14px

**Sparse Ocean:**
| Property | Value |
|----------|-------|
| Class | `.sparse-ocean` |
| Padding | `var(--space-20) 0` (80px top/bottom) |

**Sparse Separator:**
| Property | Value |
|----------|-------|
| Class | `.sparse-separator` |
| Height | `var(--space-24)` (96px) |
| Display | flex, center |
| Mark | 48px wide, 2px tall, `--color-border` bg |

**Archipelago (2-col grid):**
| Property | Value |
|----------|-------|
| Class | `.archipelago` |
| Display | `grid`, `1fr 1fr` |
| Gap | `var(--space-6)` (24px) |
| Responsive | `1fr` at max-width 768px |

### 7.2 DD-004: Geological Layer System

**Layer-specific tokens (UNIQUE):**
| Token | Value | Purpose |
|-------|-------|---------|
| `--layer-atmosphere` | `#FEF9F5` | Ambient context |
| `--layer-surface` | `#FFFFFF` | Headlines |
| `--layer-topsoil` | `#F7F4F0` | Summaries |
| `--layer-subsoil` | `#F0EBE3` | Details |
| `--layer-bedrock` | `#1A1A1A` | Code/reference |

**Layer Containers:**

| Layer | Background | Border-left | Padding | Typography |
|-------|-----------|-------------|---------|------------|
| `.layer-atmosphere` | `--layer-atmosphere` | none | `--space-20 --space-8` | display 15px italic, secondary color |
| `.layer-surface` | `--layer-surface` | `4px solid --color-primary` | `--space-10 --space-8` | display 36px italic |
| `.layer-topsoil` | `--layer-topsoil` | `4px solid --color-border` | `--space-6` | display 22px italic |
| `.layer-subsoil` | `--layer-subsoil` | `4px solid --color-text-secondary` | `--space-5` | body 14px 600 uppercase |
| `.layer-bedrock` | `--layer-bedrock` | `4px solid --color-primary` | (via content) | mono code |

**Layer Indicator (depth meter):**
| Property | Value |
|----------|-------|
| Class | `.layer-indicator` |
| Font | mono 9px uppercase, letter-spacing 0.15em |
| Display | flex, gap 8px |
| Depth bars | 6px x 12px, `--color-border` (inactive), `--color-primary` (active) |

**Layer Composite:**
| Property | Value |
|----------|-------|
| Class | `.layer-composite` |
| Label bg | `var(--color-background)` |
| Label border | `3px solid --color-primary` left |
| Label font | mono 10px uppercase, letter-spacing 0.15em |

**Depth Transition:**
| Property | Value |
|----------|-------|
| Class | `.depth-transition` |
| Height | `var(--space-6)` (24px) |
| Line | flex-1, 1px, gradient to transparent |
| Label | mono 9px uppercase, `--color-border` |

**Topsoil Keypoints Grid:**
| Property | Value |
|----------|-------|
| Display | grid, 3 columns |
| Gap | `var(--space-4)` |
| Keypoint | `2px solid --color-border` top, mono 10px label, display 18px value |
| Responsive | 1fr at 768px |

**Subsoil Details:**
| Property | Value |
|----------|-------|
| Display | grid, `140px 1fr` |
| Gap | `var(--space-3)` |
| Font-size | 13px |
| Row border | `1px solid --color-border` bottom |

**Stacked Layers Visualization:**
| Layer | Background | Border-left |
|-------|-----------|-------------|
| Atmosphere | `--layer-atmosphere` | `2px solid --color-border-subtle` |
| Surface | `--layer-surface` | `3px solid --color-primary` |
| Topsoil | `--layer-topsoil` | `3px solid --color-border` |
| Subsoil | `--layer-subsoil` | `3px solid --color-text-secondary` |
| Bedrock | `--layer-bedrock` | `3px solid --color-primary` |

### 7.3 DD-005: River System

**River-specific tokens (UNIQUE):**
| Token | Value |
|-------|-------|
| `--river-narrow` | `280px` |
| `--river-medium` | `450px` |
| `--river-wide` | `700px` |
| `--river-full` | `100%` |

**River Containers:**

| River | Max-width | Background | Border-left | Padding | Text size |
|-------|-----------|-----------|-------------|---------|-----------|
| `.river--narrow` | `280px` | `--color-background` | `4px solid --color-primary` | `--space-4` | 13px, line-height 1.6 |
| `.river--medium` | `450px` | `white` | `4px solid --color-border` | `--space-5` | 14-15px |
| `.river--wide` | `700px` | `white` | `4px solid --color-border-subtle` | `--space-6` | 16px, line-height 1.8 |
| `.river--full` | `100%` | `white` | `4px solid --color-border-subtle` | `--space-8` | 16px, max-65ch |
| `.river--confluence` | `100%` | gradient amber→cream | `4px solid --accent-amber` | `--space-6` | default |

**River label:**
| Property | Value |
|----------|-------|
| Font | mono 9px uppercase, letter-spacing 0.15em |
| Color | `--color-border` |
| Position | absolute, top-right |

**Alignment modifiers:**
- `.river--right`: `margin-left: auto`
- `.river--center`: `margin: 0 auto`

**Parallel Rivers:**
| Property | Value |
|----------|-------|
| Display | grid, `1fr 1fr` |
| Gap | `var(--space-6)` |
| Responsive | 1fr at 768px |

**River Delta:**
| Property | Value |
|----------|-------|
| Display | grid, `repeat(3, 1fr)` |
| Gap | `var(--space-4)` |
| Label | full-width spanning (`grid-column: 1/-1`) |
| Responsive | 1fr at 768px |

**Quick Reference (compact key-value):**
| Property | Value |
|----------|-------|
| Font-size | 12px |
| Item display | flex, space-between |
| Item border | `1px solid --color-border-subtle` bottom |
| Key font | mono, secondary color |
| Value font | weight 500 |

**Decision Point (confluence component):**
| Property | Value |
|----------|-------|
| Question | display 20px italic |
| Options grid | `1fr 1fr`, responsive 1fr at 768px |
| Option border | `1px solid --color-border`, `4px solid --color-primary` left |
| Option title | body 14px 600 |
| Option desc | 13px secondary |

**Flow Transition:**
| Property | Value |
|----------|-------|
| Height | `var(--space-8)` (32px) |
| Arrow | mono 20px, `--color-border` color, centered |
| Content | `"downward arrow"` |

**Section Separator:**
| Property | Value |
|----------|-------|
| Margin | `var(--space-12) 0` (48px) |
| Label | mono 10px uppercase, `--color-border` on `--color-background` bg |
| Line | 1px `--color-border-subtle` (via `::before` pseudo) |

### 7.4 DD-006: Fractal Scale System

**Fractal Visualization:**
| Property | Value |
|----------|-------|
| Background | `white` |
| Border-left | `4px solid --color-primary` |
| Padding | `var(--space-6)` |
| Title | mono 10px uppercase |
| Diagram | flex, gap 24px |
| Scale boxes | `--color-border-subtle` bg, `3px solid --color-primary` left |
| Connectors | mono 16px, `--color-border`, content "approximately equal to" |

**Fractal Nested Boxes:**
| Nesting level | Background |
|---------------|-----------|
| Level 1 | `rgba(232,48,37, 0.03)` |
| Level 2 | `rgba(232,48,37, 0.06)` |
| Level 3 | `rgba(232,48,37, 0.09)` |
| All levels | `3px solid --color-primary` left |
| Label | mono 9px uppercase, `--color-primary` |
| Content | 12px |

**Scale Demo (generic wrapper):**
| Property | Value |
|----------|-------|
| Header | flex, gap 12px, `2px solid --color-primary` bottom |
| Level badge | mono 10px uppercase, `rgba(232,48,37, 0.1)` bg, padding 4px 8px |
| Title | display 20px italic |

**Page Scale Grid:**
| Property | Value |
|----------|-------|
| Display | grid, `1fr 1fr 1fr` |
| Gap | `var(--space-4)` |
| Dense section | `--color-border-subtle` bg, `4px --color-primary` left |
| Sparse section | `white` bg, `4px --color-border` left |
| Labels | mono 9px uppercase, secondary color |
| Content | 13px |
| Responsive | 1fr at 768px |

**Section Scale:**
| Property | Value |
|----------|-------|
| Background | `white` |
| Border-left | `4px solid --color-border` |
| Dense para | `--color-border-subtle` bg, `2px solid --color-primary` left, 13px, line-height 1.5 |
| Sparse para | 15px, line-height 1.8, max-width 60ch |
| Para label | mono 8px uppercase |

**Component Scale:**
| Property | Value |
|----------|-------|
| Background | `white` |
| Border-left | `4px solid --accent-blue` |
| Header | flex space-between, `1px --color-border-subtle` bottom |
| Dense zone | `--color-border-subtle` bg, padding 8px, 12px text |
| Sparse zone | padding 8px, 14px text, secondary color |

**Scale Comparison Grid:**
| Property | Value |
|----------|-------|
| Display | grid, `repeat(4, 1fr)` |
| Responsive | 2x2 at 900px, 1fr at 500px |
| Item | `3px solid --color-primary` left, white bg |
| Level label | mono 9px uppercase, primary color |
| Pattern display | mono 12px, secondary color |
| Example text | 11px secondary |

**Fractal Complete (nested demo):**
| Property | Value |
|----------|-------|
| Border | `1px solid --color-border-subtle` |
| Border-left | `4px solid --color-primary` |
| Header bg | `rgba(232,48,37, 0.05)` |
| Title | mono 10px uppercase, primary color |

**Section Divider:**
| Property | Value |
|----------|-------|
| Margin | `var(--space-12) 0` |
| Line | `1px --color-border-subtle` via `::before` |
| Label | mono 10px uppercase, `--color-border` on `--color-background` |

**Intro Block:**
| Property | Value |
|----------|-------|
| Max-width | 700px |
| Margin | `0 auto var(--space-12)` |
| Text-align | center |
| Paragraph | 16px, max-width none |

---

## 8. COMPONENT EVOLUTION ACROSS DD-003 to DD-006

### 8.1 Callout Background Opacity Progression
This is the most visible evolution -- directly driven by the DD-003 lesson chain:

| Component | DD-003 | DD-004 | DD-005 | DD-006 |
|-----------|--------|--------|--------|--------|
| Essence | 0.05 | 0.08 | solid | 0.08 |
| Tip | solid | 0.08 | 0.08 | N/A |
| Info | 0.05 | 0.08 | 0.08 | 0.08 |
| Gotcha | N/A | 0.08 | N/A | N/A |

**Pattern:** DD-003 used 0.05 opacity and solid backgrounds. DD-004+ explicitly applied "more visible callout backgrounds (8% opacity vs 5%)" per the lesson chain.

### 8.2 Unique Components Per File

| DD-003 Only | DD-004 Only | DD-005 Only | DD-006 Only |
|-------------|-------------|-------------|-------------|
| Density Island | Layer system (5 layers) | River system (5 widths) | Fractal nested boxes |
| Sparse Ocean | Layer Indicator (depth meter) | Parallel Rivers | Scale Demo wrapper |
| Sparse Separator | Layer Composite wrapper | River Delta (3-col) | Page/Section/Component/Character scales |
| Archipelago (2-col) | Depth Transition | Confluence (decision) | Scale Comparison (4-col) |
| Decision Matrix | Topsoil Keypoints (3-col) | Quick Reference list | Fractal Complete (nested demo) |
| Island offsets (L/R/C) | Subsoil Details (key-value) | Decision Point | Fractal Visualization |
| | Stacked Layers viz | Flow Transition arrows | Intro (centered) |
| | Callout-Gotcha | Section Separator | Section Divider |

### 8.3 Grid/Layout Pattern Evolution

| File | Primary Layout | Columns | Responsive |
|------|---------------|---------|------------|
| DD-003 | Float-like (offset margins) | 2-col archipelago | 1fr at 768px |
| DD-004 | Vertical stacking (layers) | 3-col keypoints | 1fr at 768px |
| DD-005 | Width-varying rivers | 2-col parallel, 3-col delta | 1fr at 768px |
| DD-006 | Multi-scale nested | 3-col page, 4-col comparison | progressive breakpoints |

### 8.4 Border-Left Semantic Usage

| Border-left color | Meaning (consistent) |
|-------------------|---------------------|
| `--color-primary` (#E83025) | High importance: islands, surface layer, bedrock, narrow rivers, dense sections |
| `--color-border` (#E0D5C5) | Medium importance: topsoil layer, medium rivers, generic sections |
| `--color-border-subtle` (#F0EBE3) | Low importance: wide rivers, full rivers, sparse sections |
| `--color-text-secondary` (#666666) | Detail layer: subsoil only (DD-004) |
| `--accent-amber` (#D97706) | Essence/insight: callout-essence, confluence |
| `--accent-green` (#4A9D6B) | Practical: callout-tip |
| `--accent-blue` (#4A90D9) | Informational: callout-info, file-tree, component-scale |
| `--accent-coral` (#C97065) | Warning: callout-gotcha (DD-004 only) |

### 8.5 Typography Scale Comparison

| Context | DD-003 | DD-004 | DD-005 | DD-006 |
|---------|--------|--------|--------|--------|
| Page title | display 32px italic | display 32px italic | display 32px italic | display 32px italic |
| Section title | display 28px italic | display 36px (surface) | display 28px/32px (wide) | display 28px italic |
| Subsection | display 20px italic | display 22px (topsoil) | display 20px italic | display 20px italic |
| Body text | 14px | 15px (topsoil) / 14px (subsoil) | 13-16px (width-dependent) | 13-15px (density-dependent) |
| Label/meta | mono 10px uppercase | mono 9-10px uppercase | mono 9-10px uppercase | mono 8-10px uppercase |
| Code | mono var(--type-code) | mono var(--type-code) | mono var(--type-code) | mono var(--type-code) |

### 8.6 Background Color Vocabulary

| Background | Usage |
|-----------|-------|
| `#FEF9F5` (warm cream) | Page background, atmosphere layer, narrow rivers |
| `#FFFFFF` (white) | Header, surface layer, medium/wide rivers, exploration header |
| `#F7F4F0` (warm light) | Topsoil layer (DD-004 only) |
| `#F0EBE3` (tan) | Subsoil, file-tree bg, dense sections, callout-tip (DD-003) |
| `#1A1A1A` (near-black) | Code blocks (all files), bedrock layer |
| `rgba(232,48,37, 0.03-0.1)` | Primary-tinted highlights (DD-006 fractal nesting) |
| `rgba(accent, 0.05-0.08)` | Callout backgrounds |

---

## 9. SUMMARY: DD COMPONENT VOCABULARY

### Universal DD Components (shared DNA):
1. **Exploration Header** -- identical across all 4
2. **Skip Link + Accessibility** -- identical across all 4
3. **Callout-Essence** -- present in all 4 (minor opacity/size variations)
4. **Callout-Info** -- present in all 4 (opacity evolution from 0.05 to 0.08)
5. **Code blocks** -- dark background (#1A1A1A), 5-color syntax highlighting, all 4
6. **Locked tokens** -- identical :root block, all 4

### Evolutionary Components (morph across files):
1. **Callout-Tip** -- DD-003/004/005 (tighter in DD-005 rivers)
2. **File-Tree** -- DD-003/004 (gains label + background in DD-004)
3. **Section separators** -- different per pattern (sparse marks, depth transitions, flow arrows, dividers)

### Pattern-Exclusive Components:
1. **DD-003:** Density Island, Sparse Ocean, Archipelago, Decision Matrix
2. **DD-004:** 5-layer system, Layer Indicator, Topsoil Keypoints, Subsoil Details, Stacked Layers viz, Callout-Gotcha
3. **DD-005:** 5-width Rivers, Parallel Rivers, River Delta, Confluence, Decision Point, Quick Reference, Flow Transitions
4. **DD-006:** Fractal Visualization, 4-scale demos, Nested Boxes, Scale Comparison, Fractal Complete

### Component Count by File:
| File | Shared | Evolutionary | Unique | Total |
|------|--------|-------------|--------|-------|
| DD-003 | 6 | 3 | 6 | 15 |
| DD-004 | 6 | 2 | 9 | 17 |
| DD-005 | 6 | 2 | 9 | 17 |
| DD-006 | 6 | 1 | 8 | 15 |

---

## 10. KEY OBSERVATIONS FOR CROSS-STAGE COMPARISON

1. **Border-left is the universal structural signal** -- every container uses it. Width (2-4px) and color encode importance. This is THE DD design language.

2. **The 4px left border + no border-radius + no box-shadow** creates the KortAI soul signature. Every DD component achieves visual containment through border-left alone.

3. **Mono uppercase labels** are ubiquitous -- used for island labels, layer indicators, river width labels, scale level badges, callout labels, and section dividers. Size ranges from 8px to 11px.

4. **Background color gradient** from `#FEF9F5` (lightest) through `#F0EBE3` (medium) to `#1A1A1A` (darkest) provides the full density spectrum. Each file uses a subset of this range.

5. **Typography compresses with density** -- display serif for sparse/headline contexts, body sans for medium, mono for dense/code contexts. Font-size also compresses (32px headline to 9px label).

6. **DD-005 has the widest page-container** (1100px vs 1000px) to accommodate side-by-side river layouts.

7. **Lesson chain is CSS-visible** in callout opacity: DD-003 (0.05) evolves to DD-004+ (0.08) per "stronger inter-element connections, visible callouts."

8. **No file uses border-radius or box-shadow anywhere.** Soul compliance is absolute.
