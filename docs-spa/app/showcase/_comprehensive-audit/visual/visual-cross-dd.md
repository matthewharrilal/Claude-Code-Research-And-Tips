# Cross-DD Visual Consistency Report

## Architecture Note

DD pages are Stage 2 artifacts built BEFORE the OD-CONVENTION-SPEC. They share a common design language but with pre-convention styling. The convention was created for Stage 3 (ODs) and has not been backported to DDs.

## Component-Level Comparison (6 DDs)

### Page Header
| Property | DD-001 | DD-002 | DD-003 | DD-004 | DD-005 | DD-006 | Consistency |
|----------|--------|--------|--------|--------|--------|--------|-------------|
| bg | #FFFFFF | #FFFFFF | #FFFFFF | #FFFFFF | #FFFFFF | #FFFFFF | CONSISTENT (white, not dark) |
| border-bottom-width | 2.22px | 2.22px | 2.22px | 2.22px | 2.22px | 2.22px | CONSISTENT |
| padding | 24px | 24px | 24px | 24px | 24px | 24px | CONSISTENT |
| h1 size | 32px | 32px | 32px | 32px | 32px | 32px | CONSISTENT |
| h1 color | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | #1A1A1A | CONSISTENT |

**Assessment:** DD headers are internally consistent with white backgrounds and 32px titles. This is the pre-convention DD style.

### Section Headers (h2)
| DD | h2 size | Consistent? |
|----|---------|-------------|
| DD-001 | 28px | Standard DD |
| DD-002 | 28px | Standard DD |
| DD-003 | 28px | Standard DD |
| DD-004 | 22px | DIFFERENT |
| DD-005 | 32px | DIFFERENT |
| DD-006 | 28px | Standard DD |

### XVIS-DD-001 — HIGH — H2 Size Inconsistency
- **DDs Affected:** DD-004 (22px), DD-005 (32px)
- **Standard:** DD-001/002/003/006 use 28px
- **Note:** DD-004 uses smaller subsection-level h2; DD-005 uses a size equal to h1. Both deviate from the DD internal standard of 28px.

### Type Scale Tokens
| DD | --type-page | --type-section | --type-body | --type-meta |
|----|------------|---------------|------------|------------|
| ALL | EMPTY | EMPTY | EMPTY | EMPTY |

**XVIS-DD-002 — NOTE — No Type Tokens**
DD pages do not use CSS custom property type tokens. Type sizes are set via direct CSS values. This is expected for pre-convention artifacts.

### Callout Backgrounds (rgba count)
| DD | rgba Count | Assessment |
|----|-----------|------------|
| DD-001 | 7 | OD-AP-003 |
| DD-002 | 8 | OD-AP-003 |
| DD-003 | 10 | OD-AP-003 (worst) |
| DD-004 | 10 | OD-AP-003 + layer opacity |
| DD-005 | 9 | OD-AP-003 |
| DD-006 | 10 | OD-AP-003 + fractal demo |

### XVIS-DD-003 — HIGH — Universal rgba() Background Usage
- **All 6 DDs** use rgba() callout backgrounds
- **Total:** ~54 rgba() background instances across all DDs
- **Special cases:** DD-004 has layer-atmosphere at 0.95 opacity; DD-006 has fractal-nested at increasing opacity (0.03->0.06->0.09)

### Body Height
| DD | Height |
|----|--------|
| DD-001 | 3,618px |
| DD-002 | 3,682px |
| DD-003 | 3,854px |
| DD-004 | 4,539px |
| DD-005 | 3,988px |
| DD-006 | 3,172px |

**XVIS-DD-004 — NOTE — DD Pages Are Substantially Shorter Than ODs**
- DD range: 3,172-4,539px (avg ~3,809px)
- OD range: 6,532-18,473px (avg ~11,612px)
- DDs are ~3x shorter. This is expected — DDs demonstrate density patterns, ODs demonstrate organizational patterns with full content.

### Soul Compliance Summary
| DD | border-radius | box-shadow | filter |
|----|--------------|-----------|--------|
| DD-001 | 0 | 0 | 0 |
| DD-002 | 0 | 0 | 0 |
| DD-003 | 0 | 0 | 0 |
| DD-004 | 0 | 0 | 0 |
| DD-005 | 0 | 0 | 0 |
| DD-006 | 0 | 0 | 0 |

**ALL DDs pass core soul compliance (border-radius, box-shadow, filter).**
**ALL DDs FAIL opacity compliance (rgba backgrounds).**
