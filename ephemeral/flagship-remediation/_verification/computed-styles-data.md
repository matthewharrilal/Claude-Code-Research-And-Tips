# Computed Styles Data — Programmatic Extraction
**Viewport:** 1440x900
**Date:** 2026-02-18

## Container Width
- `<main>` width: 1920px (full viewport — correct, it's a wrapper)
- `.page-container` width: **960px** — CORRECT, content is constrained
- First paragraph width: 665px (within 960px container)

## Zone Backgrounds (all RGB, warm palette confirmed)
| Zone | Background RGB | Hex Approx | Warm? |
|------|---------------|------------|-------|
| S1 | rgb(254,245,235) | #FEF5EB | YES |
| S2 | rgb(245,237,226) | #F5EDE2 | YES |
| S3 | rgb(251,243,232) | #FBF3E8 | YES |
| S4 | rgb(248,246,243) | #F8F6F3 | YES |
| S5 | rgb(250,248,245) | #FAF8F5 | YES (was #FAFAFA, fixed) |
| S6 | rgb(245,240,232) | #F5F0E8 | YES |
| S7 | rgb(248,246,243) | #F8F6F3 | YES (was #F8F8F8, fixed) |
| S8 | rgb(242,239,234) | #F2EFEA | YES (was #F0F0F0, fixed) |
| S9 | rgb(254,247,240) | #FEF7F0 | YES |
| S10 | rgb(254,245,235) | #FEF5EB | YES |
| S11 | rgb(248,242,234) | #F8F2EA | YES |
| S12 | rgb(254,245,235) | #FEF5EB | YES |

### RGB Delta Between Adjacent Zones
- S1→S2: R-9, G-8, B-9 (adequate)
- S2→S3: R+6, G+6, B+6 (moderate)
- S3→S4: R-3, G+3, B+11 (borderline)
- S4→S5: R+2, G+2, B+2 (VERY SMALL — may be imperceptible)
- S5→S6: R-5, G-8, B-13 (adequate)
- S6→S7: R+3, G+6, B+11 (adequate)
- S7→S8: R-6, G-7, B-9 (adequate)
- S8→S9: R+12, G+8, B+6 (adequate)
- S9→S10: R±0, G-2, B-5 (VERY SMALL — may be imperceptible)
- S10→S11: R-6, G-3, B-1 (small)
- S11→S12: R+6, G+3, B+1 (small)

**CONCERN:** S4→S5 and S9→S10 deltas are below the ≥10 RGB threshold.

## Typography
| Zone Group | Font Size | Line Height | Letter Spacing | H2 Size |
|-----------|-----------|-------------|----------------|---------|
| S1 (warm) | 17px | 31.45px (1.85) | 0.34px (0.02em) | 30px |
| S4 (cool) | 16px | 27.2px (1.7) | normal | 28px |
| S9 (resolved) | 16px | 28px (1.75) | normal | 28px |
| S12 (resolved) | 16px | 28px (1.75) | normal | 28px |

**CONCERN:** S9 and S12 typography is IDENTICAL to each other and very close to S4. Only S1 has distinct typography. The spec called for S9-S12 to be 15px/1.65 — builder applied 16px/1.75 instead.

## Structural Borders
**FINDING: ZERO structural borders detected on any section or inner div.**
The spec called for 6 zone-specific border-top rules. None are present in computed styles. This may be a CSS selector mismatch or the borders may have been added with selectors that don't match the actual HTML structure.

## Callouts (9 total — CORRECT)
| Variant | Count | Background | Border Left | Role |
|---------|-------|------------|-------------|------|
| callout--info | 2 | rgb(250,248,245) | 4px solid rgb(224,213,197) | note |
| callout--gotcha | 3 | rgb(254,246,245) | 4px solid rgb(232,48,37) | note |
| callout--tip | 3 | rgb(248,247,242) | 4px solid rgb(74,157,107) | note |
| callout--essence | 1 | rgb(250,245,237) | 4px solid rgb(217,119,6) | note |

All callouts have visible left borders with distinct colors. All have role="note".

## Tables
- 9 tables found (class: `.table-compact`, NOT `.data-table`)
- Table borders: 0px none — no visible table borders
- **CONCERN:** Builder CSS targeted `.data-table` but HTML uses `.table-compact`. CSS may not match.

## Section Gaps (between sections, including divider space)
| Between | Gap (px) | Over 120px? |
|---------|----------|-------------|
| S1→S2 | 33 | No |
| S2→S3 | 148 | **YES** |
| S3→S4 | 33 | No |
| S4→S5 | 175 | **YES** |
| S5→S6 | 33 | No |
| S6→S7 | 131 | **YES** |
| S7→S8 | 148 | **YES** |
| S8→S9 | 150 | **YES** |
| S9→S10 | 33 | No |
| S10→S11 | 33 | No |
| S11→S12 | 148 | **YES** |

**6 of 11 gaps exceed 120px.** However, these gaps include the space occupied by divider elements between sections. The actual whitespace voids need to account for divider content. Still, the largest gap (S4→S5: 175px) is concerning.

## Soul Compliance
- border-radius violations: **0**
- box-shadow violations: **0**
- gradient violations: **0**
- Fonts: Instrument Serif + Inter (confirmed)

## Accessibility / Structure
| Feature | Count/Present | Expected | Status |
|---------|--------------|----------|--------|
| Skip link | YES | 1 | PASS |
| `<main>` element | YES | 1 | PASS |
| aria-label sections | 12 | 12 | PASS |
| role="banner" | YES | 1 | PASS |
| role="contentinfo" | YES | 1 | PASS |
| role="separator" | 11 | 11 | PASS |
| .section-indicator | 12 | 12 | PASS |
| .callout (total) | 9 | 9 | PASS |
| .tension-pair | 3 | 3 | PASS |
| .sequence-grid | 1 | 1 | PASS |
| .hypothesis-grid | 1 | 1 | PASS |

## Summary of Issues Found
1. **ZERO structural borders** — spec called for 6, none present (CSS selector mismatch?)
2. **Typography undervariation** — only S1 differs from S4-S12; S9-S12 should be 15px not 16px
3. **Some zone background deltas too small** — S4→S5 (2 RGB) and S9→S10 (≤5 RGB) are below threshold
4. **Table CSS mismatch** — builder targeted `.data-table` but HTML uses `.table-compact`
5. **6 section gaps exceed 120px** — partially due to divider elements, but S4→S5 at 175px is large
