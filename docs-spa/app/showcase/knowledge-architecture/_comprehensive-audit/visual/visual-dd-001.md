# Visual Audit Report: DD-001 — Density Breathing

**Auditor:** visual-dd-001
**Date:** 2026-02-09
**URL:** http://localhost:3000/explorations/density/DD-001-breathing.html
**Viewports Tested:** 1440x900, 768x900
**Total DOM Elements:** 154
**Screenshots:** 6 (dd-001-1440-full.png, dd-001-1440-vp1-header.png, dd-001-1440-vp2-code.png, dd-001-1440-vp3-table.png, dd-001-768-full.png)

---

## PHASE A — Research Context Applied

- **OD-CONVENTION-SPEC.md**: Read. 468 lines. 7 unified standards, 3-cat border system, dark code theme, full-bleed dark header, 5-level type scale, dual spacing, locked palette, 10k-14k page height target.
- **SOUL-DISCOVERIES.md**: Read. 5 soul pieces: Sharp Edges (border-radius:0), Archivist Serif (Instrument Serif italic for wisdom), Family DNA (2-zone callouts, 4px left border), No Shadows (box-shadow:none), Squares Signal System.
- **Anti-patterns/registry.md**: Read. Geometry (rounded corners, shadows), color (traffic lights, cool grays), layout (callout cacophony, code wall, same density), typography (sans-serif essence, thin callout borders, non-italic h3), interaction (hover reveals, hover lift), component (vertical table borders, same-velocity stacking), OD-specific (2px epidemic, inconsistent scale, semi-transparent backgrounds).

---

## PHASE B — Screenshots Captured

| Screenshot | Description |
|-----------|-------------|
| `dd-001-1440-full.png` | Full page at 1440px — complete layout visible |
| `dd-001-1440-vp1-header.png` | Viewport 1: Header + first exhale section + essence callout |
| `dd-001-1440-vp2-code.png` | Viewport 2: Tip/Gotcha callouts + project structure code block |
| `dd-001-1440-vp3-table.png` | Viewport 3: Strategy comparison table + consideration cards |
| `dd-001-768-full.png` | Full page at 768px — responsive layout |

---

## PHASE C — Research Validation (getComputedStyle)

### C1. CSS Custom Properties (:root)

| Token | Expected | Actual | Status |
|-------|----------|--------|--------|
| `--color-primary` | `#E83025` | `#E83025` | PASS |
| `--color-background` | `#FEF9F5` | `#FEF9F5` | PASS |
| `--color-text` | `#1A1A1A` | `#1A1A1A` | PASS |
| `--color-text-secondary` | `#666666` | `#666666` | PASS |
| `--color-border` | `#E0D5C5` | `#E0D5C5` | PASS |
| `--font-display` | `'Instrument Serif', Georgia, serif` | `'Instrument Serif', Georgia, serif` | PASS |
| `--font-body` | `'Inter', system-ui, sans-serif` | `'Inter', system-ui, sans-serif` | PASS |
| `--font-mono` | `'JetBrains Mono', 'SF Mono', monospace` | `'JetBrains Mono', 'SF Mono', monospace` | PASS |
| `--type-page` | `2.5rem` | _(not set)_ | **FAIL** — token undefined |
| `--type-section` | `1.625rem` | _(not set)_ | **FAIL** — token undefined |
| `--type-body` | `1rem` | _(not set)_ | **FAIL** — token undefined |
| `--border-radius` | `0` | `0` | PASS |
| `--box-shadow` | `none` | `none` | PASS |

**Note:** DD-001 is a Density exploration (pre-OD), so type-scale tokens are hardcoded rather than using CSS custom properties. The computed values still need to match convention expectations.

### C2. Typography Audit

| Element | Property | Expected | Actual | Status |
|---------|----------|----------|--------|--------|
| h1 | fontFamily | Instrument Serif | `"Instrument Serif", Georgia, serif` | PASS |
| h1 | fontSize | 40px (2.5rem) | **32px** | **FAIL** — 20% undersized |
| h1 | fontStyle | italic | italic | PASS |
| h1 | color | #1A1A1A | rgb(26,26,26) = #1A1A1A | PASS |
| h2 | fontFamily | Instrument Serif | `"Instrument Serif", Georgia, serif` | PASS |
| h2 | fontSize | 26px (1.625rem) | **28px** | **MINOR** — 2px oversized |
| h2 | fontStyle | italic | italic | PASS |
| h3 | fontFamily | Instrument Serif | `"Instrument Serif", Georgia, serif` | PASS |
| h3 | fontSize | 22px (1.375rem) | **20px** | **MINOR** — 2px undersized |
| h3 | fontStyle | italic | **normal** | **FAIL** — anti-pattern registry requires italic h3 |
| body (p) | fontFamily | Inter | `Inter, system-ui, sans-serif` | PASS |
| body (p) | fontSize | 16px (1rem) | **14px** | **FAIL** — 12.5% undersized |
| body (p) | color | #1A1A1A | **rgb(102,102,102) = #666** | **FAIL** — using secondary color for body text |
| body (p) | lineHeight | — | 22.4px (1.6 ratio) | ACCEPTABLE |
| Essence body | fontFamily | Instrument Serif | `"Instrument Serif", Georgia, serif` | PASS |
| Essence body | fontStyle | italic | italic | PASS — Soul Piece #2 compliant |
| code content | fontFamily | JetBrains Mono | `"JetBrains Mono", "SF Mono", monospace` | PASS |
| code content | fontSize | 14px (0.875rem) | 13px | **MINOR** — 1px undersized |

### C3. Color Audit

| Element | Property | Expected | Actual | Status |
|---------|----------|----------|--------|--------|
| body | backgroundColor | #FEF9F5 | rgb(254,249,245) = #FEF9F5 | PASS |
| header | backgroundColor | #1A1A1A (dark) | **rgb(255,255,255) = #FFF** | **FAIL** — convention requires full-bleed dark header |
| code-snippet | backgroundColor | #1A1A1A | rgb(30,30,30) = #1E1E1E | **MINOR** — close but not exact (#1E1E1E vs #1A1A1A) |
| code content | color | #FAFAF5 | rgb(245,240,235) = #F5F0EB | **MINOR** — close but not exact |
| callout-essence | borderLeftColor | amber (#D97706) | rgb(217,119,6) = #D97706 | PASS |
| callout-tip | borderLeftColor | green (#4A9D6B) | rgb(74,157,107) = #4A9D6B | PASS |
| callout-gotcha | borderLeftColor | red (#E83025) | rgb(232,48,37) = #E83025 | PASS |
| callout-info | borderLeftColor | blue (#4A90D9) | rgb(74,144,217) = #4A90D9 | PASS |
| meta line | color | #666 (secondary) | **rgb(232,48,37) = #E83025** | NOTE — uses primary red for exploration ID (acceptable stylistic choice for DD exploration) |

### C4. Border System Audit

| Element | Expected | Actual | Status |
|---------|----------|--------|--------|
| header border-bottom | 3px+ (Cat 1) | **2.22px** | **FAIL** — below 3px Cat 1 minimum |
| callout-essence border-left | 4px (convention) | **3.33px** | **FAIL** — below 4px callout minimum |
| callout-tip border-left | 4px | **3.33px** | **FAIL** — below 4px callout minimum |
| callout-gotcha border-left | 4px | **3.33px** | **FAIL** — below 4px callout minimum |
| callout-info border-left | 4px | **3.33px** | **FAIL** — below 4px callout minimum |
| matrix row border-bottom | 1px (Cat 2) | 1.11px | PASS (rounding) |
| copy button border | 1px (Cat 3) | 1.11px | PASS (rounding) |
| 2px borders found | 0 | **0** | PASS — no 2px epidemic |

**Note on fractional pixels:** All borders appear to use fractional values (2.22, 3.33, 1.11) suggesting the page may use a non-standard base font-size or zoom level that creates sub-pixel rendering. The RATIOS are approximately correct (3:4 ratio for callouts vs header), but absolute values fail convention thresholds.

### C5. Soul Compliance Audit

| Check | Status | Detail |
|-------|--------|--------|
| border-radius: 0 everywhere | **PASS** | 0 elements with non-zero border-radius across 154 DOM elements |
| box-shadow: none | **PASS** | 0 elements with box-shadow |
| No filter: drop-shadow() | **PASS** | 0 elements with drop-shadow filter |
| Locked palette | **PASS** | All colors from locked palette |
| Font trio only | **PASS** | Instrument Serif, Inter, JetBrains Mono only |
| No 2px borders | **PASS** | 0 instances of 2px border-width |

### C6. Semi-Transparent Background Audit (OD-AP-003)

| Element | Background | Status |
|---------|-----------|--------|
| `.callout-essence` | `rgba(217, 119, 6, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |
| `.code-snippet__header` | `rgba(255, 255, 255, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |
| `.callout-tip` | `rgba(74, 157, 107, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |
| `.callout-gotcha` | `rgba(232, 48, 37, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |
| `.decision-matrix__header` | `rgba(232, 48, 37, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |
| `.callout-info` | `rgba(74, 144, 217, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |
| `.callout-essence` (2nd) | `rgba(217, 119, 6, 0.05)` | **FAIL** — opacity 0.05, not fully opaque |

**7 instances of semi-transparent backgrounds.** All use `rgba(…, 0.05)`. Per OD-AP-003, opacity must be 1.0 on all visual elements. These should be converted to fully opaque equivalents (e.g., `rgba(217,119,6,0.05)` on #FEF9F5 background ≈ `#FDF6F0`).

### C7. Layout & Spacing Audit

| Metric | Value | Status |
|--------|-------|--------|
| Body height (1440px) | 3618px | **FAIL** — below 10,000-14,000px target (DD exploration, not OD, so this is contextual) |
| Body width (1440px) | **1600px** | **FAIL** — overflows 1440px viewport by 160px |
| Body width (768px) | **853px** | **FAIL** — overflows 768px viewport by 85px |
| Main max-width | 900px | OK for content container |
| Main width (1440px) | 900px | OK |
| Sections (exhale) padding | 92px top/bottom | Good breathing rhythm |
| Sections (inhale) padding | 24px top/bottom | Good density contrast |
| Section margin-bottom | 32px | Consistent |
| Skip link | **Missing** | **FAIL** — convention requires `.skip-link` |

**Overflow cause:** Header (`.exploration-header`) has no max-width and expands to natural width. At 1440px viewport, header width = 1600px. At 768px, main content container (900px max-width) exceeds viewport. Fix: `overflow-x: hidden` on body/html, or constrain header/main widths responsively.

### C8. Page Structure

| Section | Type | Height | Breathing |
|---------|------|--------|-----------|
| Section 1 | EXHALE (sparse) | 505px | 92px+92px padding |
| Section 2 | INHALE (dense) | 908px | 24px+24px padding |
| Section 3 | EXHALE (sparse) | 370px | 92px+92px padding |
| Section 4 | INHALE (dense) | 985px | 24px+24px padding |
| Section 5 | EXHALE (sparse) | 475px | 92px+92px padding |

**Breathing pattern:** EXHALE → INHALE → EXHALE → INHALE → EXHALE. Perfect alternating rhythm. The 4:1 padding ratio (92px vs 24px) creates clear density differentiation. This is the core DD-001 hypothesis demonstrated successfully.

---

## PHASE D — 13 Binary Gates

| Gate | Description | Result | Evidence |
|------|-------------|--------|----------|
| **VA-01** | Page renders | **PASS** | Page loads, title "Density Breathing" visible, all 5 sections render |
| **VA-02** | No overflow | **FAIL** | Body width 1600px at 1440vw (overflow 160px), 853px at 768vw (overflow 85px). Header has no max-width constraint. |
| **VA-03** | No misalignment | **PASS** | Header content, section content, callouts all left-aligned consistently within main container. No visible misalignment in screenshots. |
| **VA-04** | Typography | **FAIL** | H1: 32px not 40px. H3: not italic (anti-pattern). Body text: 14px not 16px, uses #666 secondary instead of #1A1A1A primary. |
| **VA-05** | Colors | **PASS** | Locked palette respected. Body bg #FEF9F5. All accent colors correct. Header is white not dark (convention divergence, but DD exploration predates OD convention). |
| **VA-06** | Spacing | **PASS** | Clear EXHALE/INHALE rhythm. 92px vs 24px padding creates strong breathing. 32px section gaps consistent. |
| **VA-07** | Border system | **FAIL** | Callout left-borders at 3.33px (need 4px). Header bottom at 2.22px (need 3px+). Fractional pixel values suggest scaling issue. |
| **VA-08** | Soul compliance | **PASS** | 0 rounded corners, 0 box-shadows, 0 drop-shadows across 154 elements. Essence callout uses Instrument Serif italic (Soul Piece #2). |
| **VA-09** | Responsive 768px | **FAIL** | Horizontal overflow at 768px (body 853px). Content readable but scrollbar appears. Code blocks and tables don't overflow individually. |
| **VA-10** | Code blocks | **PASS** | Dark theme (#1E1E1E bg, close to #1A1A1A). JetBrains Mono font. Syntax highlighting with correct palette colors. Copy button present. border-radius: 0. |
| **VA-11** | Headers | **FAIL** | Header bg white (#FFF) not dark (#1A1A1A) per convention. H1 undersized (32px vs 40px). Border-bottom fractional (2.22px). |
| **VA-12** | No dead zones | **PASS** | No unexplained gaps. All whitespace is intentional breathing (EXHALE sections). Content flows naturally between sections. |
| **VA-13** | Research compliance | **FAIL** | 7 semi-transparent rgba backgrounds (OD-AP-003 violation). Missing skip link. Missing --type-* CSS custom properties. |

---

## Summary

| Category | PASS | FAIL |
|----------|------|------|
| Gates passed | 6 | 7 |
| Soul violations | 0 | — |
| Semi-transparent bg instances | — | 7 |
| 2px border instances | 0 | — |
| Rounded corners | 0 | — |
| Box shadows | 0 | — |

### Critical Findings (7 FAIL gates)

1. **VA-02 OVERFLOW** (Critical): Body overflows viewport at both 1440px and 768px. Header has no max-width. Fix: Add `overflow-x: hidden` to html/body, or set header `width: 100vw` with proper containment.

2. **VA-04 TYPOGRAPHY** (High):
   - H1 at 32px instead of 40px (--type-page)
   - Body text at 14px instead of 16px (--type-body)
   - Body text color #666 instead of #1A1A1A (secondary used as primary)
   - H3 not italic (anti-pattern registry violation)

3. **VA-07 BORDERS** (Medium): All borders use fractional pixel values (2.22px, 3.33px, 1.11px) suggesting a non-standard zoom or base-size. Callout left-borders need 4px, header bottom needs 3px+.

4. **VA-09 RESPONSIVE** (Medium): Horizontal scroll at 768px from unconstrained main container (900px max-width exceeds 768px viewport without responsive adjustment).

5. **VA-11 HEADER** (Medium): White background instead of convention dark (#1A1A1A). Note: DD-001 predates the OD convention, so this is expected for a density exploration but flagged for convention compliance.

6. **VA-13 RESEARCH** (Medium): 7 semi-transparent `rgba(…, 0.05)` backgrounds violate OD-AP-003. Missing skip link. No --type-* CSS custom property definitions.

### Positive Findings

- **Soul compliance is PERFECT**: 0/154 elements violate border-radius, box-shadow, or drop-shadow rules
- **Breathing pattern works beautifully**: EXHALE/INHALE alternation with 4:1 padding ratio (92px vs 24px) demonstrates the DD-001 hypothesis effectively
- **Callout family DNA intact**: All callouts share 2-zone structure (label + body) with left accent border, differentiated only by color
- **Essence callout Soul Piece #2**: Correctly uses Instrument Serif italic for wisdom voice
- **Font trio enforced**: Only Instrument Serif, Inter, and JetBrains Mono appear
- **Locked palette respected**: All colors from the approved palette
- **No 2px border epidemic**: Zero instances of the #1 OD systemic finding

### Context Note

DD-001 is a **Density Exploration** (DD), not an Organization Exploration (OD). It predates the OD-CONVENTION-SPEC. Many "failures" (white header, non-standard type scale, missing CSS custom properties) are expected for a DD artifact. The most actionable findings are:
1. Horizontal overflow (pure bug, not convention gap)
2. Semi-transparent backgrounds (OD-AP-003 applies universally)
3. H3 italic and body text sizing (anti-pattern registry items)
