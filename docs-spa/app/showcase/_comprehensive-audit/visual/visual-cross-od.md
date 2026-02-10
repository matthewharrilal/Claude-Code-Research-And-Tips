# Cross-OD Visual Consistency Report

## Component-Level Comparison (6 ODs)

### Page Header
| Property | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 | Consistency |
|----------|--------|--------|--------|--------|--------|--------|-------------|
| bg | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | CONSISTENT |
| border-bottom-width | 2.22px | 2.22px | 2.22px | 2.22px | 2.22px | 2.22px | CONSISTENT (but all wrong — should be 3px) |
| border-bottom-color | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | CONSISTENT |
| padding | 64px 32px | 64px 32px | 64px 32px | 64px 32px | 64px 32px | 64px 32px | CONSISTENT |
| h1 font | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | CONSISTENT |
| h1 size | 40px | 40px | 40px | 40px | 40px | 48px | INTENTIONAL (OD-006 = 3rem) |
| h1 color | #FAFAF5 | #FAFAF5 | #FEF9F5 | #FAFAF5 | #FAFAF5 | #FAFAF5 | INCONSISTENT — OD-003 uses #FEF9F5 |

### XVIS-001 — MEDIUM — OD-003 Header Title Color Divergence
- **ODs Affected:** OD-003
- **Expected:** rgb(250, 250, 245) = #FAFAF5
- **Actual OD-003:** rgb(254, 249, 245) = #FEF9F5 (the page background color!)
- **Note:** OD-003's h1 uses the page background color instead of the standard light text color. Visually imperceptible on dark bg but technically wrong.

### Section Headers (h2)
| Property | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 | Consistency |
|----------|--------|--------|--------|--------|--------|--------|-------------|
| font | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | Instrument Serif | CONSISTENT |
| size | 26px | VARIES (40/26/22/16) | 26/22px | 26/22px | 26px | 26px | INCONSISTENT — OD-002 uses narrative cascade |
| border-bottom | 2.22px | 2.22px | 0px | 0px | mixed | 0px | INCONSISTENT |

### XVIS-002 — HIGH — H2 Border-Bottom Inconsistency Across ODs
- **ODs Affected:** OD-001, OD-002 have h2 borders; OD-003, OD-004, OD-006 have none; OD-005 has mixed
- **Assessment:** Convention doesn't explicitly specify h2 border-bottom. The structural border (Cat 1 = 3px+) is for section dividers, but whether h2 elements themselves get a bottom border varies by organizational pattern. May be intentional per-pattern variation.

### XVIS-003 — CRITICAL — OD-002 Typography Cascade
- **ODs Affected:** OD-002
- **Description:** H2 sizes decrease through the page (40px -> 26px -> 22px -> 16px -> 16px) as a narrative arc device. The last two h2s at 16px are body-text size and lose their heading function.
- **Assessment:** Likely intentional creative device but undocumented. Should be documented as intentional divergence like OD-006's divergences.

### Callout Backgrounds
| OD | rgba() Count | Opaque? | Assessment |
|----|-------------|---------|------------|
| OD-001 | 10 | NO | OD-AP-003 violation |
| OD-002 | 8 | NO | OD-AP-003 violation |
| OD-003 | 18 | NO | WORST — OD-AP-003 violation |
| OD-004 | 0 | YES | REFERENCE implementation |
| OD-005 | 12 | NO | OD-AP-003 violation |
| OD-006 | 0 | YES | Correct (transparent = no bg tint) |

### XVIS-004 — HIGH — Systemic rgba() Background Split
- **ODs Affected:** OD-001, OD-002, OD-003, OD-005 (4 of 6)
- **ODs Clean:** OD-004, OD-006 (2 of 6)
- **Assessment:** Two different callout background implementations coexist. OD-004 uses opaque #F0EBE3; others use rgba(accent, 0.04-0.05). OD-004's approach is the correct one per OD-AP-003.

### Code Blocks
| OD | bg | border-width | border-radius | Assessment |
|----|---|----|----|----|
| OD-001 | #1A1A1A | 2.22px | 0px | Sub-pixel border |
| OD-002 | #1A1A1A | 2.22px | 0px | Sub-pixel border |
| OD-003 | #1A1A1A | 2.22px | 0px | Sub-pixel border |
| OD-004 | #1A1A1A | 2.22px | 0px | Sub-pixel border |
| OD-005 | #1A1A1A | 2.22px | 0px | Sub-pixel border |
| OD-006 | #F0EBE3 | 0px | 0px | INTENTIONAL light bg |

### XVIS-005 — MEDIUM — Systemic 2.22px Border Rendering
- **All 6 ODs** render 3px CSS borders as 2.22px computed.
- **Likely cause:** Browser rendering at non-integer device pixel ratios or CSS using a calc() that produces fractional values.
- **Recommendation:** Investigate CSS source. If using `calc(3px / 1.35)` or similar, replace with explicit `3px`.

### Body Height
| OD | Height | Target | Status |
|----|--------|--------|--------|
| OD-001 | 9,787px | 10,000-14,000 | SLIGHTLY BELOW |
| OD-002 | 7,743px | 10,000-14,000 | BELOW |
| OD-003 | 6,532px | 10,000-14,000 | SIGNIFICANTLY BELOW |
| OD-004 | 13,141px | 10,000-14,000 | WITHIN TARGET |
| OD-005 | 18,473px | 10,000-14,000 | ABOVE |
| OD-006 | 13,796px | 12,000-15,000 | WITHIN TARGET |

### XVIS-006 — HIGH — Page Height Variance
- Only 2 of 6 ODs meet their height targets
- Range: 6,532px to 18,473px (2.83x difference)
- OD-003 is 52% of the minimum target; OD-005 is 32% above maximum

## Token Consistency

All 6 ODs declare identical :root tokens (confirmed via computed styles). The only difference is OD-006's --type-page: 3rem (intentional).
