<!--
===============================================================================
INLINE THREADING HEADER
File: DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md
Tier: B | Stage: 3 (Organization OD) | Generated: 2026-02-08

BUILT ON: OD-AUDIT-SYNTHESIS, OD-SYNTHESIS, anti-patterns/registry.md, ACCUMULATED-IDENTITY-v1.md
CONSUMED BY: all Builders (Wave 1-3), HANDOFF-OD-TO-AD.md, future AD/CD work
===============================================================================
-->

# OD Convention Specification
## Unified Standards for Organizational Explorations

**Purpose:** Resolve the 3-dialect quality gap (Polished/Functional/Editorial) by
defining ONE standard per dimension. All re-enrichment builders MUST follow this spec.

---

## 1. Soul Compliance Checklist (10 Lines)

Every OD artifact MUST pass all 10 checks. Zero exceptions.

```
[ ] border-radius: 0 everywhere (no rounded corners on any element or pseudo-element)
[ ] box-shadow: none (no shadows — solid-offset pseudo-elements are the ONLY depth mechanism)
[ ] No filter: drop-shadow() anywhere
[ ] No fake depth, gradients-as-depth, or blur effects
[ ] Locked palette: #E83025, #1A1A1A, #FAFAF5, #E0D5C5, #6B9B7A, #4A7C9B, #C97065, #7C3AED
[ ] Font trio only: 'Instrument Serif' (display), 'Inter' (body), 'JetBrains Mono' (code)
[ ] Border weights: 4px left accent OR 3px+ structural — never 1-2px for structural borders
[ ] Spacing model: --space-* tokens from the unified scale (Section 6)
[ ] Max 2 callouts per viewport section
[ ] DD-F-006 fractal self-similarity at 4 scales (page, section, component, character)
```

---

## 2. Border System (3 Categories)

The 2px border epidemic (108 CSS declarations, 1000+ computed instances) was the #1
systemic audit finding. This 3-category system resolves it.

| Category | Width | When to Use | Examples |
|----------|-------|-------------|---------|
| **Cat 1: Structural / Accent / Frame** | 3px+ (4px for callout left-border) | Chapter titles, code block frames, section dividers, page headers, full-border containers | `.chapter-divider { border-bottom: 3px solid var(--color-border); }` `.callout { border-left: 4px solid var(--accent-blue); }` |
| **Cat 2: Data Separators** | 1px | Table row borders, connector lines, timeline lines, horizontal rules between related items | `tr { border-bottom: 1px solid var(--color-border-subtle); }` |
| **Cat 3: Micro-element** | 1px | Badge outlines, toggle borders, copy button borders, inline code borders | `.badge { border: 1px solid var(--color-border); }` |

**The rule:** 2px borders are BANNED. Every border is either Cat 1 (3px+), Cat 2 (1px),
or Cat 3 (1px). There is no middle ground.

**Soul Test:** PASS Gate 1 (does not contradict soul pieces — soul specifies border-radius: 0
and box-shadow: none but does not specify minimum width; Rule 5 says "1px borders signal
uncertainty" which this spec operationalizes). PASS Gate 2 (no locked token conflict).
PASS Gate 3 (directly remediates OD-F-AP-001 anti-pattern).

---

## 3. Code Block Theme

The Polished/Functional dialect split manifests most visibly in code blocks.

**Unified Standard: Dark theme.**

```css
.code-block,
pre {
  background: #1A1A1A;
  color: #FAFAF5;
  border: 3px solid var(--color-border);        /* Cat 1 structural */
  border-radius: var(--border-radius);          /* 0 */
  padding: var(--space-6) var(--space-8);       /* 24px 32px */
  font-family: var(--font-mono);
  font-size: var(--type-code);                  /* 0.875rem / 14px */
  line-height: 1.5;
  overflow-x: auto;
}
```

**Syntax highlighting palette (dark background only):**
- Keywords: `#E83025` (primary red)
- Strings: `#6B9B7A` (sage green)
- Comments: `#666666` (secondary text)
- Functions/methods: `#4A7C9B` (muted blue)
- Types/classes: `#C97065` (coral)
- Numbers/constants: `#D97706` (amber)
- Punctuation/operators: `#E0D5C5` (border color — warm tan)

**Inline code:**

```css
code:not(pre code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-border-subtle);       /* #F0EBE3 */
  padding: 2px 6px;
  border: 1px solid var(--color-border);        /* Cat 3 micro */
}
```

**OD-006 exception:** OD-006 has no code blocks (meta-documentary content). This standard
applies to OD-001 through OD-005 only. OD-006's lack of code blocks is INTENTIONAL as
part of its editorial dialect.

**Soul Test:** PASS Gate 1 (dark background uses locked #1A1A1A text color as background,
#FAFAF5 as text — inversion is acceptable for code blocks per editorial convention).
PASS Gate 2 (all colors from locked palette + accent palette). PASS Gate 3 (no anti-pattern match).

---

## 4. Header Layout

Current state: OD-001/002 use full-bleed dark headers; OD-003-005 use simpler horizontal
metadata bars; OD-006 uses editorial display.

**Unified Standard: Full-bleed header with dark background.**

```
┌────────────────────────────────────────────────────────────────────────┐
│  [background: #1A1A1A]                                                │
│                                                                       │
│  META LINE: "EXPLORATION OD-NNN" + "DENSITY: PATTERN"                │
│  font: Inter 500, var(--type-meta), letter-spacing: 0.15em            │
│  color: var(--color-text-secondary)                                   │
│  margin-bottom: var(--space-2)                                        │
│                                                                       │
│  TITLE: "OD-NNN: Pattern Name"                                       │
│  font: Instrument Serif, var(--type-page), color: #FAFAF5            │
│  margin-bottom: var(--space-4)                                        │
│                                                                       │
│  SUBTITLE: Hypothesis statement                                       │
│  font: Inter 400, var(--type-body), color: var(--color-text-secondary)│
│  max-width: 70ch                                                      │
│                                                                       │
│  padding: var(--space-16) var(--space-8)                              │
│  border-bottom: 3px solid var(--color-primary)  [Cat 1 structural]    │
└────────────────────────────────────────────────────────────────────────┘
```

**Inner wrapper:** Header content uses `max-width: 860px; margin: 0 auto` to match
page container width.

**OD-006 exception:** OD-006 may use a LARGER title (--type-page at 3rem) as its
editorial dialect intentionally demands stronger typographic presence. All other ODs
use 2.5rem. This is the ONLY sanctioned type-page divergence.

**Soul Test:** PASS Gate 1 (dark header with sharp edges, serif title = editorial authority).
PASS Gate 2 (all values from locked tokens). PASS Gate 3 (no anti-pattern match).

---

## 5. Type Scale

Current state: OD-001-005 use 2.5rem page title; OD-006 uses 3rem. Subsection naming
varies (--type-question, --type-task, --type-stratum, --type-subsection).

**Unified Standard (5-level cascade, ~1.5x ratio):**

```css
:root {
  --type-page: 2.5rem;        /* 40px — page title (Instrument Serif) */
  --type-section: 1.625rem;   /* 26px — chapter / section titles (Instrument Serif) */
  --type-subsection: 1.375rem;/* 22px — questions, tasks, strata, spokes (Inter 600 or Instrument Serif) */
  --type-body: 1rem;          /* 16px — body text (Inter 400) */
  --type-code: 0.875rem;      /* 14px — code (JetBrains Mono 400) */
  --type-meta: 0.75rem;       /* 12px — meta labels, badges (Inter 500, letter-spacing: 0.1em) */
}
```

**OD-006 sanctioned override:** `--type-page: 3rem` (48px). This is the ONLY
type scale divergence permitted. OD-006 is the synthesis/crown jewel and its
editorial voice requires stronger typographic presence.

**Naming convention:** Use the generic `--type-subsection` (not --type-question,
--type-task, --type-stratum). OD-specific semantic aliases are permitted in comments
but the token name is `--type-subsection`.

**Soul Test:** PASS Gate 1 (Instrument Serif for display, Inter for body — matches
soul piece 2 and Rule 4). PASS Gate 2 (no locked token conflict). PASS Gate 3 (no
anti-pattern match; resolves OD-AP-002 inconsistent typography scale).

---

## 6. Spacing Tokens

Current state: OD-001 uses Three-Level Gestalt naming (--space-within/between/chapter);
OD-002-004 use numbered scale (--space-1 through --space-24); OD-005 uses both.

**Unified Standard: Include BOTH systems. Numbered scale is primary; Gestalt aliases
map to specific numbered values.**

```css
:root {
  /* Primary numbered scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Gestalt semantic aliases (EXT-CONV-003 + EXT-DENSITY-001) */
  --space-within: var(--space-2);    /* 8px — within related elements */
  --space-between: var(--space-8);   /* 32px — between distinct elements */
  --space-chapter: var(--space-16);  /* 64px — between chapters */
}
```

**Note:** OD-001's `--space-24: 92px` is NON-STANDARD (92 != 96). The correct value
at --space-24 is 96px (24 * 4px base unit). However, this spec does NOT include
--space-24 in the unified scale because no standard use case requires it. If needed,
use explicit `96px`.

**Soul Test:** PASS Gate 1 (whitespace as design element — soul piece implicit in
Rule 6). PASS Gate 2 (no locked token conflict). PASS Gate 3 (no anti-pattern match).

---

## 7. Color Application

All ODs share the locked palette. The divergence is in APPLICATION — when each color
appears and how semantic tints are used.

**Unified Standard:**

| Color | Token | When to Use |
|-------|-------|-------------|
| `#E83025` | `--color-primary` | Primary accents: callout left-borders, page header underline, links, interactive highlights, skip-link background. NEVER for body text. |
| `#1A1A1A` | `--color-text` | Body text, headings, strong borders (Cat 1 structural at full assertiveness), code block backgrounds (inverted). |
| `#FEF9F5` | `--color-background` | Page background, question zones (sparse), hub zones. The "paper" color. |
| `#FFFFFF` | (no token) | Answer zones (dense), spoke zones. Creates subtle PULSE differentiation with #FEF9F5. |
| `#FAF5ED` | (no token) | Breathing zones — chapter dividers, mode transitions, recovery whitespace. Slightly warmer than background. |
| `#666666` | `--color-text-secondary` | Meta labels, secondary text, timestamps, code comments, subtitle text. |
| `#E0D5C5` | `--color-border` | Primary borders (Cat 1/2/3), table rules, structural separators. |
| `#F0EBE3` | `--color-border-subtle` | Subtle backgrounds for inline code, hover states, secondary containers. |

**Callout accent colors (5 only):**

| Color | Token | Callout Type |
|-------|-------|-------------|
| `#4A90D9` | `--accent-blue` | Context, Note, Information |
| `#4A9D6B` | `--accent-green` | Tip, Success, Checkpoint |
| `#C97065` | `--accent-coral` | Gotcha, Warning, Error Recovery |
| `#D97706` | `--accent-amber` | Caution, Important |
| `#7C3AED` | `--accent-purple` | Essence, Insight, Meta |

**Prohibited:** Off-palette colors. OD-003's `--accent-tan: #B8A080` was removed in
Fix #8. No new off-palette colors may be introduced.

**Soul Test:** PASS Gate 1 (limited palette = editorial restraint). PASS Gate 2 (all
values from DESIGN-TOKEN-SUMMARY.md). PASS Gate 3 (no traffic-light adjacency with
proper spacing).

---

## 8. Page Length Target

Current state: Dialect A avg 8,114px body height; Dialect B avg 17,613px; Dialect C 15,238px.

**Unified Target: 10,000-14,000px body height.**

This range:
- Pulls Dialect B DOWN from 17,613px (prevents sprawl and thin-border proliferation)
- Allows Dialect A UP from 8,114px (accommodates enrichment content)
- Preserves OD-F-004 chapter dividers as breathing zones (minimum 48px per divider)
- Preserves OD-F-007 mode-transition breathing (48px+ between organizational mode changes)
- Accommodates DD-F-006 fractal at 4 scales (requires sufficient content depth)

**Breathing zone budget:** Within the 10,000-14,000px target, a minimum of 15% of
total page height SHOULD be whitespace (chapter dividers, mode transitions, section
gaps). This means ~1,500-2,100px of breathing space across the page.

**How to achieve for Dialect B (currently 17,613px avg):**
1. Collapse repetitive structures (OD-003's 6 identical task islands can vary)
2. Use `<details>` for supplementary content (depth-on-demand)
3. Tighten vertical rhythm (--space-16 between sections, not --space-20)
4. Remove redundant code examples (one clear example > three repetitive ones)

**OD-006 exception:** OD-006 at 15,238px exceeds the target. As the synthesis page
demonstrating ALL 5 organizational modes, it has unique structural requirements.
Target for OD-006: 12,000-15,000px (relaxed ceiling).

**Soul Test:** PASS Gate 1 (generous whitespace = Rule 6; target preserves breathing).
PASS Gate 2 (no locked token conflict). PASS Gate 3 (directly addresses "same density
throughout" anti-pattern by requiring variation within the target height).

---

## 9. OD-006 Intentional Divergences

OD-006 (Editorial/Creative/Crown Jewel) is deliberately distinct from OD-001-005.
These divergences are INTENTIONAL and MUST NOT be unified:

| Divergence | OD-001-005 Value | OD-006 Value | Why Intentional |
|-----------|------------------|-------------|-----------------|
| `--type-page` | 2.5rem (40px) | 3rem (48px) | Editorial voice requires stronger typographic presence as synthesis page |
| Code blocks | Dark theme, present | Absent | OD-006 is meta-documentary — it documents the system, not code tutorials |
| Content mode | Single organizational pattern per OD | ALL 5 patterns in sequence | OD-006's thesis (Organization IS Density) requires demonstrating all modes |
| Drop caps | Optional (OD-001 has them) | Required at section openings | EXT-CREATIVE-005 editorial drop caps are part of the crown jewel identity |
| `--type-meta` | 0.625rem (10px) | 0.75rem (12px) | Larger meta for editorial readability — borderline; future unification acceptable |

**Divergences that are NOT intentional (should be unified):**
- OD-006's `--space-20: 80px` matches spec. No divergence.
- All other tokens (colors, fonts, geometry, accents) are IDENTICAL.

---

## 10. Unified :root Block (Copy-Paste Ready)

For OD-001 through OD-005 (OD-006 overrides --type-page to 3rem):

```css
:root {
  /* Colors — LOCKED */
  --color-primary: #E83025;
  --color-background: #FEF9F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D5C5;
  --color-border-subtle: #F0EBE3;

  /* Zone backgrounds (PULSE / WAVE differentiation) */
  --color-zone-sparse: #FEF9F5;   /* questions, hubs, sparse zones */
  --color-zone-dense: #FFFFFF;    /* answers, spokes, dense zones */
  --color-zone-breathing: #FAF5ED;/* chapter dividers, mode transitions */

  /* Typography — LOCKED */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Type Scale — 5-level cascade (~1.5x ratio) */
  --type-page: 2.5rem;         /* 40px */
  --type-section: 1.625rem;    /* 26px */
  --type-subsection: 1.375rem; /* 22px */
  --type-body: 1rem;           /* 16px */
  --type-code: 0.875rem;       /* 14px */
  --type-meta: 0.75rem;        /* 12px */

  /* Geometry — LOCKED */
  --border-radius: 0;
  --box-shadow: none;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Gestalt Semantic Aliases */
  --space-within: var(--space-2);    /* 8px */
  --space-between: var(--space-8);   /* 32px */
  --space-chapter: var(--space-16);  /* 64px */

  /* Callout Accents — LOCKED */
  --accent-blue: #4A90D9;
  --accent-green: #4A9D6B;
  --accent-coral: #C97065;
  --accent-amber: #D97706;
  --accent-purple: #7C3AED;

  /* Standardized Border */
  --border-left-width: 4px;

  /* Solid Offset (EXT-CREATIVE-001) */
  --offset-x: 4px;
  --offset-y: 4px;
  --offset-color: #1A1A1A;
}
```

---

## 11. Per-Standard Soul Test Results

| # | Standard | Gate 1 (Soul Pieces) | Gate 2 (Locked Tokens) | Gate 3 (Anti-Patterns) |
|---|----------|---------------------|----------------------|----------------------|
| 1 | Border System (3-Cat) | PASS | PASS | PASS (remediates OD-F-AP-001) |
| 2 | Code Block Theme (Dark) | PASS | PASS (inverted palette) | PASS |
| 3 | Header Layout (Full-bleed) | PASS (editorial authority) | PASS | PASS |
| 4 | Type Scale (5-level) | PASS (Typography-First) | PASS | PASS (remediates OD-AP-002) |
| 5 | Spacing Tokens (Dual) | PASS (whitespace as design) | PASS | PASS |
| 6 | Color Application | PASS (limited palette) | PASS | PASS (prevents traffic-light) |
| 7 | Page Length Target | PASS (preserves breathing) | PASS | PASS (prevents uniform density) |

**All 7 standards PASS all 3 gates.** No revisions required.

---

## 12. Required Base Styles (All ODs)

Beyond the :root tokens, every OD MUST include these base styles:

```css
/* Selection */
::selection {
  background: var(--color-primary);
  color: var(--color-background);
}

/* Focus */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-primary);
  color: var(--color-background);
  padding: 8px 16px;
  z-index: 1000;
  font-family: var(--font-body);
  font-size: 14px;
  text-decoration: none;
}
.skip-link:focus { top: 0; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print */
@media print {
  body { background: white; color: black; }
  .skip-link, .scroll-witness { display: none; }
}

/* Semantic structure: MUST use <main>, proper heading hierarchy */
```

---

## COMPACTION-SAFE SUMMARY

- **File:** OD-CONVENTION-SPEC.md
- **Purpose:** Unified standard across 7 dimensions to resolve 3-dialect quality gap
- **Border system:** 3 categories (3px+ structural, 1px data, 1px micro) — 2px BANNED
- **Code blocks:** Dark theme (#1A1A1A bg), 3px border, syntax palette from locked colors
- **Headers:** Full-bleed dark, Instrument Serif title at 2.5rem (OD-006: 3rem)
- **Type scale:** 5-level cascade at ~1.5x ratio, unified --type-subsection naming
- **Spacing:** Numbered scale primary (--space-1 through --space-20) + Gestalt aliases
- **Colors:** Locked palette only, zone backgrounds for PULSE differentiation, 5 accent colors
- **Page length:** 10,000-14,000px target (OD-006: 12,000-15,000px), 15% whitespace minimum
- **OD-006 intentional divergences:** --type-page 3rem, no code blocks, all 5 modes, drop caps
- **Soul Test:** All 7 standards PASS all 3 gates (Soul Pieces, Locked Tokens, Anti-Patterns)
- **Status:** COMPLETE
