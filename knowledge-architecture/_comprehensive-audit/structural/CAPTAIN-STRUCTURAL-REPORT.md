# CAPTAIN-STRUCTURAL-REPORT

**Captain:** Captain-Structural
**Phase:** Comprehensive Audit — Structural Domain
**Date:** 2026-02-09
**Method:** Playwright getComputedStyle() + Static Code Review

---

## Internal Gates

| Gate | Description | Status |
|------|-------------|--------|
| CS-01 | All 6 worker reports exist | **PASS** (7 files: mission-brief + 6 reports) |
| CS-02 | Soul compliance checked (border-radius/box-shadow/filter) | **PASS** (0 violations across 4,876 elements) |
| CS-03 | Border system checked (zero 2px) | **PASS** (0 prohibited 2px borders across 4,876 elements) |
| CS-04 | All 6 ODs checked against convention | **PASS** (298/304 checks PASS, 6 NOTEs, 0 FAILs) |

---

## Executive Summary

### Scope
- 6 OD HTML files (OD-001 through OD-006)
- 6 DD HTML files (DD-001 through DD-006)
- 11 React .tsx content components
- OD-CONVENTION-SPEC.md compliance verification
- CSS property-level sweep across all 12 HTML files

### Key Metrics

| Metric | Value |
|--------|-------|
| Total DOM elements scanned | 4,876 |
| Soul violations (border-radius) | 0 |
| Soul violations (box-shadow) | 0 |
| Soul violations (filter) | 0 |
| Prohibited 2px borders | 0 |
| Convention compliance (OD) | 98% (298/304) |
| TSX soul violations | 0 |

### Verdict: **PASS** — Zero soul violations, zero 2px borders, convention compliance at 98%.

---

## Findings Summary

### Critical (0)
None.

### High (0)
None.

### Medium (7)

| ID | File(s) | Issue | Detail |
|----|---------|-------|--------|
| STR-OD-001 | OD-001, OD-002, OD-005 | Inline code font-size undersized | Computed 10.8-11px instead of convention 14px. CSS cascade issue. |
| STR-DD-001 | ALL DD files | Missing skip-link | No skip-link for keyboard navigation. Pre-convention artifact. |
| STR-DD-002 | ALL DD files | h1 font-size undersized | 32px instead of convention 40px. Pre-convention. |
| STR-DD-003 | ALL DD files | Body font-size undersized | 14px instead of convention 16px. Pre-convention. |
| STR-DD-004 | DD-004/005/006 | Code font fallback | Uses generic monospace instead of JetBrains Mono. |
| STR-TSX-005 | CopyButtonHandler.tsx | `window as any` type cast | Bypasses TypeScript safety for global functions. |
| STR-TSX-007 | CodeBlock.tsx | Copy button missing aria-label | Icon-only button inaccessible to screen readers. |

### Low (7)

| ID | File(s) | Issue | Detail |
|----|---------|-------|--------|
| STR-OD-002 | OD-003 | Body text 15px (vs 16px) | Minor font-size deviation. |
| STR-DD-005 | ALL DD files | --type-page token empty | Pre-convention, tokens not defined. |
| STR-TSX-006 | GotchaBox.tsx | Redundant ternary | `typeof fix === 'string' ? fix : fix` — both branches identical. |
| STR-TSX-008 | FileStructure.tsx | onClick div no keyboard | Tree nodes lack keyboard accessibility. |
| STR-TSX-009 | PathOfTask.tsx | Step numbers lack aria-label | No semantic context for screen readers. |
| STR-TSX-014 | CodeBlock.tsx | Off-palette color #27272A | Filename header uses #27272A vs locked #1A1A1A. |
| STR-TSX-017 | CopyButtonHandler.tsx | Clipboard fallback | No user feedback on clipboard failure. |

### Notes (11)

| ID | Summary |
|----|---------|
| STR-OD-003 | OD-006 h1 48px — correct sanctioned divergence |
| STR-OD-004 | OD-006 first p in Instrument Serif — editorial dialect |
| STR-OD-005 | OD-006 code 14.4px — negligible deviation |
| STR-CSS-001-004 | All soul properties: zero violations across 4,876 elements |
| STR-CSS-005 | Cat 2 border count reads 0 — measurement artifact |
| STR-TOK-001-002 | DD token divergences — pre-convention, expected |
| STR-TSX-010 | GotchaBox + EssenceBox callout family DNA — PASS |
| STR-TSX-011 | CoreAbstraction combines two callout DNAs — consistent |
| STR-TSX-012 | WhatsHard uses 3-zone (intentional) |
| STR-TSX-013 | All colors from locked palette (1 near-miss) |
| STR-TSX-018 | No React.memo needed — acceptable for current usage |

---

## Domain Analysis

### OD Files (6): EXCELLENT
- Soul compliance: 100% (0 violations across 3,598 elements)
- Border compliance: 100% (0 prohibited 2px)
- Token compliance: All :root tokens match convention
- Convention compliance: 98% (6 NOTEs on inline code size cascade)
- Semantic HTML: All have <main>, skip-link, proper heading hierarchy
- Accessibility: focus-visible, reduced-motion, print styles all present

### DD Files (6): ACCEPTABLE (pre-convention)
- Soul compliance: 100% (0 violations across 1,278 elements)
- Border compliance: 100% (0 prohibited 2px)
- Token compliance: DIVERGENT (expected — predates convention)
- Key gaps: No skip-links, smaller type scale, missing JetBrains Mono in 3 files
- These are pre-convention artifacts, not regressions

### TSX Components (11): GOOD
- Soul compliance in code: 100% (all components set borderRadius: 0)
- Type safety: Good (1 `any` cast for window globals)
- Callout family DNA: Consistent across GotchaBox/EssenceBox/CoreAbstraction
- Accessibility: 3 low-severity issues (missing aria-labels, keyboard support)
- Colors: 1 off-palette value (#27272A) — negligible visual impact
- No 2px borders in any component

---

## Recommendations

### For AD Phase (Forward-Looking)
1. **Inline code size cascade**: The `font-size: 0.9em` on inline `<code>` elements compounds with parent reductions to produce undersized text. Fix with explicit `font-size: var(--type-code)` on inline code elements.
2. **TSX accessibility**: Add aria-labels to icon-only buttons and keyboard support to interactive tree nodes before AD migration.
3. **Off-palette #27272A**: Replace with #1A1A1A in CodeBlock.tsx filename header.

### For DD Re-Enrichment (Future)
1. Add skip-links to all DD files
2. Apply convention type scale (40px h1, 16px body)
3. Load JetBrains Mono webfont in DD files
4. Define --type-page and other tokens in DD :root blocks

---

## Worker Reports

| Report | Location | Size |
|--------|----------|------|
| structural-od.md | _comprehensive-audit/structural/ | 5.7KB |
| structural-dd.md | _comprehensive-audit/structural/ | 4.0KB |
| structural-css.md | _comprehensive-audit/structural/ | 3.9KB |
| structural-tsx.md | _comprehensive-audit/structural/ | 6.7KB |
| structural-tokens.md | _comprehensive-audit/structural/ | 4.1KB |
| structural-convention.md | _comprehensive-audit/structural/ | 7.7KB |
