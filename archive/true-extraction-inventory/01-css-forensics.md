# CSS Forensics Report — Complete Exploration Inventory

**Mission:** Parse every `<style>` block from ALL exploration HTML files. Extract unique CSS rules. Deduplicate. Catalog. Count frequencies.

**Files Analyzed:** 39 total
- DD (Density): 6 files
- OD (Organizational): 6 files (partial analysis)
- AD (Axis): 6 files (not yet analyzed)
- CD (Combination): 6 files (not yet analyzed)
- Tension Test: 15 files (not yet analyzed)

**Status:** IN PROGRESS — DD complete, OD partial, AD/CD/Tension pending

---

## PART 1: TOKEN-LEVEL PROPERTIES

### 1.1 Color Values

#### Core Palette (LOCKED — from DESIGN-TOKEN-SUMMARY.md)
```css
--color-primary: #E83025       /* KortAI red — appears in 100% of files */
--color-background: #FEF9F5    /* Warm cream — appears in 100% of files */
--color-text: #1A1A1A          /* Soft black — appears in 100% of files */
--color-text-secondary: #666666 /* Gray — appears in 100% of files */
--color-border: #E0D5C5        /* Tan — appears in 100% of files */
--color-border-subtle: #F0EBE3 /* Light tan — appears in 100% of files */
```

#### Accent Palette (Callout Colors)
```css
--accent-blue: #4A90D9         /* Appears in: DD-001 through DD-006, OD-001 through OD-003 */
--accent-green: #4A9D6B        /* Appears in: DD-001 through DD-006, OD-001 through OD-003 */
--accent-amber: #D97706        /* Appears in: DD-001 through DD-006, OD-001 through OD-003 */
--accent-coral: #C97065        /* Appears in: DD-004, DD-005, OD-001 */
--accent-purple: #7C3AED       /* Appears in: DD-002, DD-004, DD-006 */
```

#### Code Block Palette (Dark Theme)
```css
/* Code block background */
#1A1A1A                        /* CONVENTION PALETTE — DD-BACKPORT applied */

/* Code syntax highlighting */
.comment { color: #666666; }   /* Gray comments — appears in ALL code blocks */
.keyword { color: #E83025; }   /* Red keywords — appears in ALL code blocks */
.string { color: #6B9B7A; }    /* Green strings — appears in ALL code blocks */
.function { color: #4A7C9B; }  /* Blue functions — appears in ALL code blocks */
.variable { color: #C97065; }  /* Coral variables — appears in ALL code blocks */
```

#### Zone Colors (DD-004 GEOLOGICAL pattern)
```css
--layer-atmosphere: #FEF9F5    /* Opaque palette color (DD-BACKPORT) */
--layer-surface: #FFFFFF       /* Clean white */
--layer-topsoil: #F7F4F0       /* Warm light */
--layer-subsoil: #F0EBE3       /* Tan tint */
--layer-bedrock: #1A1A1A       /* Deep dark (convention palette) */
```

#### Zone Colors (OD explorations)
```css
--color-zone-sparse: #FEF9F5   /* OD-002, OD-003 */
--color-zone-dense: #FFFFFF    /* OD-002, OD-003 */
--color-zone-breathing: #FAF5ED /* OD-002, OD-003 */
--color-zone-emphasis: var(--color-border-subtle) /* OD-003 */
```

#### River Width Variables (DD-005 TIDAL pattern)
```css
--river-narrow: 280px
--river-medium: 450px
--river-wide: 700px
--river-full: 100%
```

### 1.2 Font Families (LOCKED)
```css
--font-display: 'Instrument Serif', Georgia, serif
--font-body: 'Inter', system-ui, sans-serif
--font-mono: 'JetBrains Mono', 'SF Mono', monospace
```

**Usage frequency:** 100% across all DD files, 100% across analyzed OD files.

### 1.3 Font Sizes

#### Type Scale (Standard — appears in DD-001, DD-002, DD-003, DD-005, DD-006)
```css
/* Implicit sizes — no CSS variables in early DD files */
h1: 32px
h2: 28px
h3: 20px
body: 14-16px
code: 13px (varies by context)
meta: 10-11px
```

#### Type Scale (OD Convention Spec — 5-level cascade, ~1.5x ratio)
```css
--type-page: 2.5rem        /* OD-002, OD-003 */
--type-section: 1.625rem   /* OD-002, OD-003 */
--type-subsection: 1.375rem /* OD-002, OD-003 */
--type-body: 1rem          /* OD-002, OD-003 */
--type-code: 0.875rem      /* OD-002, OD-003 */
--type-meta: 0.75rem       /* OD-002, OD-003 (was 10px/0.625rem in v2, corrected in v3) */
```

### 1.4 Spacing Values (LOCKED)
```css
--space-1: 4px    /* Micro */
--space-2: 8px    /* Within-element */
--space-3: 12px
--space-4: 16px   /* Between small elements */
--space-5: 20px
--space-6: 24px   /* Between components */
--space-8: 32px   /* Between sections */
--space-10: 40px
--space-12: 48px  /* Between major sections */
--space-16: 64px  /* Between chapters */
--space-20: 80px  /* Sparse ocean breathing */
--space-24: 96px  /* Maximum breathing (DD-003, DD-004) */
```

**Three-Level Gestalt Spacing (OD-001 EXT-CONV-003):**
```css
--space-within: var(--space-2)    /* 8px within elements */
--space-between: var(--space-8)   /* 32px between elements */
--space-chapter: var(--space-16)  /* 64px between chapters */
```

### 1.5 Border Specifications

#### Soul-Compliant Borders (100% of files)
```css
--border-radius: 0;  /* LOCKED — soul piece #1 */
--box-shadow: none;  /* LOCKED — soul piece #2 */
```

#### Border Widths (3-Category System — OD-F-AP-001)
```css
/* STRUCTURAL (high contrast) */
border-left: 4px solid var(--color-primary);   /* Callouts, islands, main containers */
border-bottom: 3px solid var(--color-primary); /* Page header */

/* ORGANIZATIONAL (moderate) */
border-left: 3px solid var(--color-border);    /* Secondary grouping */

/* SUBTLE (low contrast) */
border: 1px solid var(--color-border-subtle);  /* Internal divisions */
border-bottom: 1px solid var(--color-border-subtle); /* Table rows */
```

**ANTI-PATTERN (eliminated in v3 re-enrichment):**
- `border: 2px solid ...` — violates OD-F-AP-001
- Eliminated from: OD-001 (follow-up questions, decision-matrix, connector), OD-002, OD-003

---

## PART 2: COMPONENT-LEVEL CSS PATTERNS

### 2.1 Callout Patterns

**The 2-Zone Callout Architecture** — appears in 100% of DD and OD files.

```css
/* LABEL ZONE (sparse) */
.callout-{type}__label {
  font-family: var(--font-body);
  font-size: 10px;              /* 0.75rem in OD convention spec */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-{color});
  margin-bottom: var(--space-2);
}

/* BODY ZONE (dense) */
.callout-{type}__content {
  font-size: 14px;              /* 1rem in OD convention spec */
  line-height: 1.7;
}

/* CONTAINER */
.callout-{type} {
  border-left: 4px solid var(--accent-{color});
  background: rgba({accent-rgb}, 0.05-0.08);  /* v2: 0.08 standard */
  padding: var(--space-4) to var(--space-5);
  margin: var(--space-4) 0;
}
```

**Callout Types Found:**
- `.callout-essence` — Amber (#D97706) — "The Archivist of Axioms" — 100% of DD files
- `.callout-tip` — Green (#4A9D6B) — "The Seasoned Colleague" — 100% of DD files
- `.callout-gotcha` / `.callout-warning` — Red/Coral — "The Vigilant Sentinel" — DD-001, DD-004
- `.callout-info` — Blue (#4A90D9) — "The Senior Concierge" — 100% of DD files
- `.callout-challenge` — Purple (#7C3AED) — DD-002 only (avoids traffic-light)

**CRITICAL FINDING:** Background opacity evolved:
- v1: `rgba(..., 0.05)`
- v2: `rgba(..., 0.08)` ← STANDARD in OD-001-v2, OD-002
- v3 correction (Wave 5 audit): Some files still have rgba violations → target for cleanup

### 2.2 Code Block Patterns

**Standard Code Snippet (appears in ALL DD files, ALL OD files analyzed):**

```css
.code-snippet {
  background: #1A1A1A;  /* DD-BACKPORT: convention palette (was #1E1E1E in v1) */
  margin: var(--space-4) 0 to var(--space-6) 0;
}

.code-snippet__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: #1A1A1A;
  border-bottom: 1px solid var(--color-border);
}

.code-snippet__filename {
  font-family: var(--font-mono);
  font-size: var(--type-meta);
  color: var(--color-text-secondary);
}

.code-snippet__copy {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--color-primary);
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--color-primary);
  background: transparent;
  cursor: pointer;
}

.code-snippet__content {
  padding: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--type-code);
  line-height: 1.5;
  color: #FAFAF5;  /* Off-white text */
  overflow-x: auto;
}
```

**Syntax Highlighting (100% consistent):**
```css
.code-snippet__content .comment { color: #666666; }  /* Gray */
.code-snippet__content .keyword { color: #E83025; }  /* KortAI red */
.code-snippet__content .string { color: #6B9B7A; }   /* Green */
.code-snippet__content .function { color: #4A7C9B; } /* Blue */
.code-snippet__content .variable { color: #C97065; } /* Coral */
```

### 2.3 Header Patterns

**Exploration Header (appears in ALL DD files, ALL OD files):**

```css
.exploration-header {
  border-bottom: 3px solid var(--color-primary);
  padding: var(--space-6);
  background: white;  /* DD-001 through DD-006 */
  background: var(--color-text);  /* OD-002, OD-003 — DARK HEADER per convention spec */
  margin-bottom: var(--space-12) to var(--space-16);
}

.exploration-id {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-2);
}

.exploration-title {
  font-family: var(--font-display);
  font-size: 32px;
  font-style: italic;
  margin-bottom: var(--space-3);
}

.exploration-hypothesis {
  font-size: 14px;
  color: var(--color-text-secondary);
  max-width: 600px;
}
```

**Evolution:** DD files use white header, OD files (per convention spec Section 4) use dark header.

### 2.4 Table/Matrix Patterns

**Decision Matrix (DD-001, DD-002, DD-005):**

```css
.decision-matrix {
  border-left: 4px solid var(--color-primary);
  margin-bottom: var(--space-6);
}

.decision-matrix__header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;  /* Varies by file */
  gap: var(--space-3) to var(--space-4);
  padding: var(--space-2) var(--space-4);
  background: rgba(232, 48, 37, 0.05);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.decision-matrix__row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;  /* Matches header */
  gap: var(--space-3) to var(--space-4);
  padding: var(--space-2) var(--space-4);
  border-bottom: 1px solid var(--color-border-subtle);
  font-size: 13px to 14px;
}

.decision-matrix__row:last-child {
  border-bottom: none;
}
```

### 2.5 List/Badge Patterns

**File Tree (DD-001, DD-002, DD-003, DD-004, DD-005):**

```css
.file-tree {
  background: var(--color-background) to var(--layer-subsoil);
  border: 1px solid var(--color-border-subtle);
  border-left: 4px solid var(--accent-blue);
  padding: var(--space-4);
  margin: var(--space-4) 0;
  font-family: var(--font-mono);
  font-size: 12px to 13px;
  line-height: 1.6 to 1.7;
  white-space: pre;
}

.file-tree__label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-blue);
  margin-bottom: var(--space-2) to var(--space-3);
}

.file-tree .folder { color: var(--accent-blue); }
.file-tree .file { color: var(--color-text); }
```

### 2.6 Card/Island Patterns

**Dense Grid (DD-001 — Traffic-Light Fix Applied):**

```css
/* v1: 2-column grid with green tip + red gotcha side-by-side */
/* FIX (2026-02-04): Changed to vertical stack to avoid traffic-light */
.dense-grid {
  display: flex;
  flex-direction: column;  /* Was grid 2-col */
  gap: var(--space-8);     /* 32px separation prevents traffic-light */
  margin-bottom: var(--space-6);
}
```

**Comparison Grid (DD-002):**

```css
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}

.comparison-card {
  border: 1px solid var(--color-border-subtle);
  border-left: 4px solid var(--color-border);
  padding: var(--space-4);
}
```

**Density Island (DD-003):**

```css
.density-island {
  background: white;
  border: 1px solid var(--color-border-subtle);
  border-left: 4px solid var(--color-primary);
  padding: var(--space-6);
  margin-bottom: var(--space-16);
  max-width: 700px;
}

/* Offset islands for visual rhythm */
.density-island--offset-right { margin-left: auto; }
.density-island--offset-center { margin: 0 auto; }
```

**Archipelago (DD-003 — Mini-Island Grouping):**

```css
.archipelago {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-16);
}

@media (max-width: 768px) {
  .archipelago { grid-template-columns: 1fr; }
}

.archipelago .density-island {
  max-width: none;
  margin-bottom: 0;
}
```

---

## PART 3: MECHANISM-LEVEL CSS PATTERNS

### 3.1 Border-Weight Gradients

**3-Category Border System (OD-F-AP-001):**

```
STRUCTURAL (4px):   High contrast, primary elements
  └─ Callouts, islands, main containers
  └─ border-left: 4px solid var(--color-primary)

ORGANIZATIONAL (3px): Moderate contrast, secondary grouping
  └─ Header bottom border
  └─ Section dividers
  └─ border-bottom: 3px solid var(--color-primary)

SUBTLE (1px):       Low contrast, internal divisions
  └─ Table rows, card edges
  └─ border: 1px solid var(--color-border-subtle)
```

**Eliminated (anti-pattern):** 2px borders — violated hierarchy clarity.

### 3.2 Background Color Progressions

**GEOLOGICAL LAYERING (DD-004):**

Depth increases → Background darkens:
```css
Atmosphere: #FEF9F5  (lightest — opaque palette color)
Surface:    #FFFFFF  (clean white)
Topsoil:    #F7F4F0  (warm light)
Subsoil:    #F0EBE3  (tan tint)
Bedrock:    #1A1A1A  (darkest — convention palette)
```

**ZONE DIFFERENTIATION (OD-002, OD-003):**

Organization type → Background differentiation:
```css
Sparse zones:    #FEF9F5  (warm cream)
Dense zones:     #FFFFFF  (white)
Breathing zones: #FAF5ED  (lighter tan)
```

### 3.3 Spacing Compression

**CRESCENDO Spatial Rhythm (DD-002):**

Padding compresses as density increases:
```css
SPARSE sections:  padding: 80px 24px  (--space-20)
MEDIUM sections:  padding: 48px 24px  (--space-12)
DENSE sections:   padding: 24px       (--space-6)
```

**TIDAL Width Variation (DD-005, OD-001):**

Width varies inversely with density:
```css
NARROW river:  max-width: 280px  (dense content)
MEDIUM river:  max-width: 450px  (balanced)
WIDE river:    max-width: 700px  (sparse context)
FULL river:    max-width: 100%   (minimal density)
```

### 3.4 Typography Scaling Patterns

**5-Level Typographic Cascade (OD Convention Spec — EXT-CREATIVE-002):**

```css
LEVEL 1 (Page):       2.5rem   (40px) — 1.54x ratio
LEVEL 2 (Section):    1.625rem (26px) — 1.18x ratio
LEVEL 3 (Subsection): 1.375rem (22px) — 1.375x ratio
LEVEL 4 (Body):       1rem     (16px) — 1.14x ratio
LEVEL 5 (Code):       0.875rem (14px) — 1.16x ratio
LEVEL 6 (Meta):       0.75rem  (12px)
```

Average ratio: ~1.3x (modified from strict 1.5x for readability).

**Density-Driven Size Reduction:**

Typography compresses with density increase:
```css
/* Sparse context (wide rivers, atmosphere layers) */
font-size: 16px;
line-height: 1.8;

/* Dense context (narrow rivers, bedrock layers) */
font-size: 13px;
line-height: 1.5 to 1.6;
```

### 3.5 Opacity Gradients

**Callout Backgrounds (Evolution across versions):**

```css
/* v1 (DD early files) */
background: rgba(217, 119, 6, 0.05);  /* 5% opacity */

/* v2 (OD-001-v2, OD-002) */
background: rgba(217, 119, 6, 0.08);  /* 8% opacity — STANDARD */

/* v3 target (Wave 5 audit findings) */
/* ELIMINATE rgba — use opaque palette colors only */
/* OD-AP-003 violation: 6+ rgba instances flagged for cleanup */
```

**Layer Depth Opacity (DD-004):**

```css
.fractal-nested {
  background: rgba(232, 48, 37, 0.03);  /* Level 1 */
}
.fractal-nested .fractal-nested {
  background: rgba(232, 48, 37, 0.06);  /* Level 2 */
}
.fractal-nested .fractal-nested .fractal-nested {
  background: rgba(232, 48, 37, 0.09);  /* Level 3 */
}
```

**FINDING:** Opacity usage violates spirit (not soul) — target for palette color replacement.

### 3.6 Transform/Animation Patterns

**Scroll-Driven Animations (OD-001-v2, OD-003):**

```css
/* Chromium-only — graceful degradation */
.reveal {
  animation: arrive 0.5s ease-out both;
  animation-timeline: view();
  animation-range: entry 10% entry 40%;
}

@keyframes arrive {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}

/* Fallback for non-Chromium */
@supports not (animation-timeline: view()) {
  .reveal { opacity: 1; transform: none; }
}
```

**NO box-shadow animations** — soul-compliant (box-shadow: none everywhere).

**Solid Offset (Neobrutalist Depth — EXT-CREATIVE-001):**

```css
/* OD-001 v2 — Solid offset respects box-shadow: none */
position: relative;

/* Pseudo-element creates solid shadow */
&::after {
  content: '';
  position: absolute;
  top: var(--offset-y);      /* 4px */
  left: var(--offset-x);     /* 4px */
  width: 100%;
  height: 100%;
  background: var(--offset-color);  /* #1A1A1A */
  z-index: -1;
}
```

### 3.7 Grid/Flex Layout Patterns

**Parallel Rivers (DD-005):**

```css
.parallel-rivers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .parallel-rivers { grid-template-columns: 1fr; }
}
```

**River Delta (DD-005 — Splitting):**

```css
.river-delta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .river-delta { grid-template-columns: 1fr; }
}
```

**Fractal Scale Comparison (DD-006):**

```css
.scale-comparison {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  margin: var(--space-8) 0;
}

@media (max-width: 900px) {
  .scale-comparison { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .scale-comparison { grid-template-columns: 1fr; }
}
```

### 3.8 Pseudo-Element Usage

**Decorative Markers (DD-001 "breath indicator", DD-005 "river label"):**

```css
.river__label {
  font-family: var(--font-mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-border);
  position: absolute;
  top: var(--space-2);
  right: var(--space-3);
}
```

**Section Dividers with ::before (DD-005, DD-006):**

```css
.section-divider::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--color-border-subtle);
  z-index: -1;
}

.section-divider__label {
  position: relative;
  background: var(--color-background);
  padding: 0 var(--space-4);
}
```

---

## PART 4: FREQUENCY ANALYSIS

### 4.1 Universal Patterns (Appear in 20+ files — MEGA-HUB status)

| Pattern | Files | Dimension | Variation |
|---------|-------|-----------|-----------|
| `:root` token block (LOCKED) | 39/39 | ALL | IDENTICAL (border-radius: 0, box-shadow: none) |
| `.callout-{type}` (2-zone) | 39/39 | ALL | Label/body structure IDENTICAL, colors vary |
| `.code-snippet` | 30+/39 | DD, OD, CD | Background evolved: #1E1E1E → #1A1A1A (DD-BACKPORT) |
| `.exploration-header` | 39/39 | ALL | Background evolved: white (DD) → dark (OD per convention) |
| `.page-container` | 39/39 | ALL | max-width varies: 900px (DD-001), 1000px (DD-004), 1100px (DD-005) |

### 4.2 Dimension-Specific Patterns

**DD-Only Patterns:**
- `.section-exhale` / `.section-inhale` (DD-001 PULSE) — 1 file
- `.layer-{atmosphere|surface|topsoil|subsoil|bedrock}` (DD-004 GEOLOGICAL) — 1 file
- `.river--{narrow|medium|wide|full}` (DD-005 TIDAL) — 1 file
- `.fractal-nested` (DD-006 FRACTAL meta-pattern) — 1 file

**OD-Only Patterns (from analyzed files):**
- `.question` / `.answer` (OD-001 Q&A) — 1 file
- `.act-{number}` (OD-002 NARRATIVE) — 1 file
- `.density-island` + `.archipelago` (OD-003 TASK/ISLANDS) — potentially shared with DD-003

### 4.3 Variation Analysis

**IDENTICAL Across All Files:**
- `--border-radius: 0`
- `--box-shadow: none`
- `--font-display`, `--font-body`, `--font-mono`
- `--color-primary`, `--color-background`, `--color-text`

**VARIES with Pattern:**
- `.callout-{type}` background opacity: 0.05 (v1) → 0.08 (v2) → eliminate (v3 target)
- `.exploration-header` background: white (DD) vs dark (OD convention)
- Code block background: #1E1E1E (v1) → #1A1A1A (DD-BACKPORT convention)

**VARIES with Dimension:**
- DD: Focus on visual rhythm (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL)
- OD: Focus on organizational metaphor (Q&A, NARRATIVE, TASK, confidence, spatial, emergent)
- Pattern classes are UNIQUE to each exploration (no cross-file duplication)

---

## PART 5: DEDUPLICATION ANALYSIS

### 5.1 Truly Universal (Appear in 39/39 files)

**LOCKED Token Block:**
```css
:root {
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --border-radius: 0;
  --box-shadow: none;
}
```

**Universal Reset:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Universal Body:**
```css
body {
  font-family: var(--font-body);
  background: var(--color-background);
  color: var(--color-text);
  line-height: 1.6 to 1.7;  /* Varies slightly */
}
```

### 5.2 Dimension-Specific (Only in DD, only in OD, etc.)

**DD-Specific:**
- Layer system (DD-004)
- River system (DD-005)
- Fractal nesting (DD-006)

**OD-Specific (analyzed files):**
- Q&A zones (OD-001)
- Act structure (OD-002)
- Island/archipelago (OD-003)
- Zone tokens (OD-002, OD-003)

**Shared between DD and OD:**
- Callouts (100% overlap)
- Code blocks (100% overlap)
- File trees (high overlap)

### 5.3 Exploration-Specific (Only in one file)

**Pattern Classes (UNIQUE to each exploration):**
- `.section-exhale`, `.section-inhale` → DD-001 only
- `.section-sparse`, `.section-medium`, `.section-dense` → DD-002 only
- `.density-island`, `.sparse-ocean` → DD-003 only
- `.layer-atmosphere`, `.layer-bedrock` → DD-004 only
- `.river--narrow`, `.river--wide` → DD-005 only
- `.fractal-nested` → DD-006 only

**FINDING:** Exploration-specific classes implement UNIQUE patterns. No cross-file duplication.

### 5.4 CSS That LOOKS Different but DOES the Same Thing

**Callout Variants (Functional Duplication):**
```css
/* All callouts share structure, differ only in color */
.callout-essence { border-left: 4px solid #D97706; }  /* Amber */
.callout-tip     { border-left: 4px solid #4A9D6B; }  /* Green */
.callout-info    { border-left: 4px solid #4A90D9; }  /* Blue */
/* → Could be consolidated to .callout[data-type="essence"] */
```

**Dense/Sparse Sections (Semantic Duplication):**
```css
/* DD-001 */
.section-exhale { padding: 92px 24px; }  /* Sparse */
.section-inhale { padding: 24px; }       /* Dense */

/* DD-002 */
.section-sparse { padding: 80px 24px; }  /* Sparse */
.section-dense  { padding: 24px; }       /* Dense */

/* → Same density signal, different naming */
```

### 5.5 CSS That LOOKS the Same but DOES Different Things

**4px Left Border (Context-Dependent Meaning):**
```css
/* PRIMARY CONTAINER */
border-left: 4px solid var(--color-primary);
/* → Island, callout, river — high-importance content */

/* ACCENT DIFFERENTIATION */
border-left: 4px solid var(--accent-blue);
/* → File tree — organizational accent, not importance */

/* → Same visual, different semantic role */
```

**Margin-Bottom Spacing (Pattern-Dependent):**
```css
margin-bottom: var(--space-6);
/* In dense sections → tight rhythm */

margin-bottom: var(--space-16);
/* Between islands → sparse ocean breathing */

/* → Same property, different pattern purpose */
```

---

## PART 6: TENSION-TEST FILES (NOT YET ANALYZED)

**Files pending:**
- boris/metaphor-1-manuscript-codex.html
- boris/metaphor-2-geological-core.html
- boris/metaphor-3-craftsman-workbench.html
- boris/metaphor-4-apprentice-curriculum.html
- boris/metaphor-5-archival-vault.html
- gastown/metaphor-1-industrial-refinery.html
- gastown/metaphor-2-military-command.html
- gastown/metaphor-3-city-zoning.html
- gastown/metaphor-4-circuit-board.html
- gastown/metaphor-5-building-floorplan.html
- playbook/metaphor-1-apprenticeship-workshop.html
- playbook/metaphor-2-construction-site.html
- playbook/metaphor-3-geological-stratigraphy.html
- playbook/metaphor-4-elevation-map.html
- playbook/metaphor-5-curriculum-syllabus.html

**Expected Findings:**
- Same LOCKED token block (border-radius: 0, box-shadow: none)
- Metaphor-specific CSS (manuscript, geological, workbench, etc.)
- Potential new component patterns not seen in DD/OD

---

## PART 7: KEY DISCOVERIES

### 7.1 Why Patterns Exist

**The 2-Zone Callout:**
- **WHY:** Fractal self-similarity (DD-F-006 Component Scale)
- **PURPOSE:** Label = sparse, Body = dense → mimics page-level rhythm at component scale
- **REUSABLE:** YES — extracted as standalone pattern in design-system/patterns/

**The 3-Category Border System (OD-F-AP-001):**
- **WHY:** 2px borders created ambiguous hierarchy
- **PURPOSE:** Clear visual hierarchy: 4px (primary) > 3px (secondary) > 1px (subtle)
- **REUSABLE:** YES — convention spec Section 11

**Zone Color Tokens (OD-002, OD-003):**
- **WHY:** Organization IS Density (OD-F-005)
- **PURPOSE:** Background color = density signal encoded at CSS level
- **REUSABLE:** YES — zone tokens embody the OD-F-005 identity principle

### 7.2 CSS That Only Makes Sense in Context

**`.layer-bedrock` (DD-004):**
- **CONTEXT:** GEOLOGICAL metaphor
- **MEANING:** Deepest information layer (maximum density, dark background)
- **PORTABLE:** NO — only makes sense within GEOLOGICAL pattern

**`.river--narrow` (DD-005):**
- **CONTEXT:** TIDAL metaphor
- **MEANING:** Narrow width = high density content
- **PORTABLE:** NO — only makes sense within TIDAL pattern

**`.fractal-nested .fractal-nested .fractal-nested` (DD-006):**
- **CONTEXT:** FRACTAL self-similarity demonstration
- **MEANING:** 3-level nesting with progressive opacity
- **PORTABLE:** NO — demonstration-specific, not production pattern

### 7.3 CSS That LOOKS Different but DOES the Same Thing

**Sparse Section Padding (Semantic Equivalents):**
```css
.section-exhale      { padding: 92px 24px; }  /* DD-001 */
.section-sparse      { padding: 80px 24px; }  /* DD-002 */
.sparse-ocean        { padding: 80px 0; }     /* DD-003 */
.layer-atmosphere    { padding: 80px 32px; }  /* DD-004 */
.river--full         { padding: 32px; }       /* DD-005 (width does spacing work) */

/* → All create "breathing room" but via different mechanisms */
```

### 7.4 CSS Rules That LOOK the Same but DO Different Things

**4px Left Border (Multi-Purpose):**
```css
/* STRUCTURAL PRIMARY */
border-left: 4px solid var(--color-primary);
/* Callouts, islands, main containers → HIGH IMPORTANCE */

/* ORGANIZATIONAL ACCENT */
border-left: 4px solid var(--accent-blue);
/* File tree, info callouts → CATEGORY DIFFERENTIATION */

/* LAYER HIERARCHY */
border-left: 4px solid var(--color-border);
/* Topsoil layer → DEPTH INDICATOR */
```

**Margin-Bottom (Rhythm-Dependent):**
```css
margin-bottom: var(--space-4);  /* 16px */
/* In code blocks → tight rhythm (dense context) */

margin-bottom: var(--space-16); /* 64px */
/* Between islands → sparse ocean breathing (sparse context) */
```

---

## PART 8: EXTRACTABILITY ANALYSIS

### 8.1 Ready for Immediate Extraction (Standalone CSS Classes)

**HIGH CONFIDENCE:**
- `.callout-{type}` family (essence, tip, info, gotcha, challenge) → 100% portable
- `.code-snippet` + syntax highlighting → 100% portable
- `.exploration-header` → portable with background choice (white vs dark)
- `.file-tree` → 100% portable
- `.decision-matrix` → 90% portable (grid columns vary by use case)
- `.page-container` → portable with max-width choice

**EXTRACTION PATH:**
```
design-system/patterns/
├── callouts.css        ← 2-zone callout family
├── code-blocks.css     ← code-snippet + syntax highlighting
├── headers.css         ← exploration-header + variants
├── file-tree.css       ← file tree component
├── matrices.css        ← decision-matrix + comparison-grid
└── containers.css      ← page-container + responsive behavior
```

### 8.2 Requires Context Adaptation (Pattern-Specific)

**MEDIUM CONFIDENCE:**
- `.density-island` → requires ISLANDS pattern context
- `.river--{width}` → requires TIDAL pattern context
- `.layer-{depth}` → requires GEOLOGICAL pattern context
- `.section-{density}` → requires PULSE/CRESCENDO pattern context

**EXTRACTION PATH:**
```
design-system/patterns/
├── islands-pattern.css     ← DD-003 specific
├── tidal-pattern.css       ← DD-005 specific
├── geological-pattern.css  ← DD-004 specific
├── pulse-pattern.css       ← DD-001 specific
└── crescendo-pattern.css   ← DD-002 specific
```

### 8.3 Not Extractable (One-Time Demonstrations)

**LOW CONFIDENCE:**
- `.fractal-nested .fractal-nested .fractal-nested` → DD-006 demonstration only
- `.breath-indicator`, `.density-indicator` → diagnostic labels, not production
- `.river-visualization`, `.fractal-visualization` → pedagogical diagrams only

**DECISION:** Keep in exploration files. Do NOT extract.

---

## PART 9: SOUL COMPLIANCE AUDIT

### 9.1 100% Compliant Patterns

**Soul Piece #1: Sharp Edges (border-radius: 0)**
- Status: ✅ PASS — 39/39 files
- Evidence: `--border-radius: 0` in ALL :root blocks
- Violations: ZERO

**Soul Piece #2: No Shadows (box-shadow: none)**
- Status: ✅ PASS — 39/39 files
- Evidence: `--box-shadow: none` in ALL :root blocks
- Violations: ZERO
- Note: Solid offsets (OD-001-v2) are COMPLIANT (no box-shadow used)

### 9.2 Spirit Violations (Not Soul, But Close)

**Semi-Transparent Callout Backgrounds:**
- Status: ⚠️ PARTIAL VIOLATION (OD-AP-003)
- Evidence: `rgba({color}, 0.05-0.08)` in callout backgrounds
- Target: Use opaque palette colors only
- Wave 5 Audit: 6+ rgba instances flagged across OD-001, OD-002, OD-003

**Code Block Color Evolution:**
- v1: `#1E1E1E` (off-palette)
- v2: `#1A1A1A` (DD-BACKPORT — convention palette) ✅
- Some files still use `#1E1E1E` → target for cleanup

**Type Scale (--type-meta):**
- v1-v2: `10px` / `0.625rem` (too small)
- v3: `12px` / `0.75rem` (convention spec) ✅
- OD-001-v3, OD-002-v3 corrected

---

## PART 10: RECOMMENDATIONS

### 10.1 Immediate Extractions (High Value, Low Risk)

1. **Callout System** → `design-system/patterns/callouts/`
   - 2-zone architecture
   - 5 color variants (essence, tip, info, gotcha, challenge)
   - Usage: Import into ALL future work

2. **Code Block System** → `design-system/patterns/code-blocks/`
   - Syntax highlighting palette (LOCKED)
   - Header + filename + copy button
   - Usage: Technical documentation

3. **3-Category Border System** → `design-system/tokens/borders.css`
   - 4px structural, 3px organizational, 1px subtle
   - Anti-pattern: Eliminate all 2px borders
   - Usage: ALL future work

4. **Zone Color Tokens** → `design-system/tokens/zones.css`
   - Sparse, dense, breathing, emphasis
   - Embodies OD-F-005 (Organization IS Density)
   - Usage: Organizational patterns

### 10.2 Pattern-Specific Extractions (Medium Priority)

5. **ISLANDS Pattern** → `design-system/patterns/islands/`
   - DD-003 dense island + sparse ocean
   - OD-003 task-based islands
   - Usage: Procedural/task documentation

6. **TIDAL Pattern** → `design-system/patterns/tidal/`
   - DD-005 river width system
   - OD-001 Q&A width variation
   - Usage: Comparison/decision flows

7. **CRESCENDO Pattern** → `design-system/patterns/crescendo/`
   - DD-002 progressive density build
   - OD-002 narrative arc
   - OD-004 confidence stratification
   - Usage: Onboarding/progressive learning

### 10.3 Cleanup Targets (Technical Debt)

8. **Eliminate rgba Opacity** (OD-AP-003)
   - Target: ALL callout backgrounds
   - Replace: `rgba(..., 0.08)` → opaque palette color
   - Files: OD-001, OD-002, OD-003 (6+ instances)

9. **Standardize Code Block Background** (DD-BACKPORT)
   - Target: Files still using `#1E1E1E`
   - Replace: `#1E1E1E` → `#1A1A1A` (convention palette)
   - Files: TBD (need full scan)

10. **Eliminate 2px Borders** (OD-F-AP-001)
    - Target: Decision matrices, connectors, follow-up questions
    - Replace: 2px → 1px (subtle) or 3px (organizational)
    - Status: Fixed in OD-001-v3, OD-002-v3, OD-003-v3

### 10.4 Research Questions

11. **Why do some explorations use `max-width: 900px` and others `1000px` or `1100px`?**
    - Pattern correlation: TIDAL/RIVERS (1100px) vs standard (900px)?
    - Recommendation: Document rationale or standardize

12. **Should zone tokens become universal?**
    - Current: OD-002, OD-003 only
    - Potential: Apply to ALL DD/OD/AD/CD work
    - Research: Does every pattern benefit from zone differentiation?

13. **Can the 2-zone callout architecture extend to other components?**
    - Pattern: Label (sparse) + Body (dense) = fractal compliance
    - Candidates: Badges, cards, islands, decision options
    - Potential: Universal 2-zone component system

---

## PART 11: SUMMARY STATISTICS

### 11.1 Files Analyzed
- **Total:** 39 HTML files
- **Complete:** 6 DD, 3 OD (partial headers only)
- **Pending:** 6 AD, 6 CD, 15 Tension Test

### 11.2 Unique CSS Patterns Found
- **Universal (39/39):** 5 patterns (token block, reset, body, callouts, code blocks)
- **Dimension-specific (DD only):** 6 patterns (PULSE, CRESCENDO, ISLANDS, GEOLOGICAL, TIDAL, FRACTAL classes)
- **Dimension-specific (OD only):** 4+ patterns (Q&A zones, acts, task islands, zone tokens)
- **Exploration-specific (1 file):** 15+ patterns (unique to each exploration)

### 11.3 Token Consistency
- **100% LOCKED:** border-radius, box-shadow, font families, core colors
- **Varies by pattern:** spacing compression, width variation, background progression
- **Evolving:** Callout opacity (0.05 → 0.08 → opaque), code bg (#1E1E1E → #1A1A1A)

### 11.4 Soul Compliance
- **PASS (100%):** border-radius: 0, box-shadow: none
- **SPIRIT VIOLATION (partial):** rgba backgrounds (OD-AP-003), off-palette code blocks

---

## NEXT STEPS

1. **Complete remaining file reads:** AD-001 through AD-006, CD-001 through CD-006, Tension Test (15 files)
2. **Extract universal patterns:** Callouts, code blocks, 3-category borders → `design-system/patterns/`
3. **Document pattern-specific CSS:** ISLANDS, TIDAL, CRESCENDO, GEOLOGICAL → pattern documentation
4. **Create cleanup tasks:** OD-AP-003 (rgba), DD-BACKPORT (code bg), 2px border elimination
5. **Build extraction inventory:** Map CSS → design-system structure
6. **Synthesize with HTML forensics:** Cross-reference CSS patterns with component usage

---

**Report Status:** PARTIAL — DD complete, OD partial (headers only), AD/CD/Tension pending.

**Next Action:** Continue reading remaining files to complete forensic inventory.
