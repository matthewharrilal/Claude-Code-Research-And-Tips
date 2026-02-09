<!--
INLINE THREADING HEADER
File: knowledge-architecture/_od-reenrichment/screenshots/before/before-measurements.md

1. WHY THIS EXISTS
Before-state measurements for OD re-enrichment comparison.

5. BUILT ON
| Dependency | Relationship |
|------------|-------------|
| 6 OD HTML files | Measured source |

8. CONSUMED BY
| Consumer | How Used |
|----------|---------|
| synthesizer | Before/after delta |
| verifier-a | Before/after comparison |

END INLINE THREADING HEADER
-->

# Before-Screenshots Measurements

| OD | Body Height (px) | Element Count | Thin Border Count (<3px) |
|----|-------------------|---------------|--------------------------|
| OD-001 | 9820 | 528 | 20 |
| OD-002 | 6478 | 418 | 22 |
| OD-003 | 20100 | 670 | 471 |
| OD-004 | 13837 | 373 | 179 |
| OD-005 | 19327 | 1019 | 251 |
| OD-006 | 15255 | 488 | 115 |

## Summary Statistics

- **Total elements across all ODs:** 3,496
- **Total thin border instances:** 1,058
- **Highest thin border count:** OD-003 (471) -- task-based structure
- **Lowest thin border count:** OD-001 (20) -- conversational structure
- **Largest page:** OD-003 (20,100px body height)
- **Smallest page:** OD-002 (6,478px body height)
- **Most complex DOM:** OD-005 (1,019 elements) -- spatial hub-spoke

## Screenshots Captured

- OD-001-before-1440.png ✓
- OD-001-before-768.png ✓
- OD-002-before-1440.png ✓
- OD-002-before-768.png ✓
- OD-003-before-1440.png ✓
- OD-003-before-768.png ✓
- OD-004-before-1440.png ✓
- OD-004-before-768.png ✓
- OD-005-before-1440.png ✓
- OD-005-before-768.png ✓
- OD-006-before-1440.png ✓
- OD-006-before-768.png ✓

## Measurement Notes

- All measurements taken at 768px viewport width (mobile) for consistency
- Thin border count measures non-table elements with any border side width >0 and <3px
- OD-001 has scroll-driven animations that may affect perceived page height
- OD-003 and OD-005 are the largest/most complex pages -- primary targets for thin border remediation
- OD-004 has interactive tab filtering that may hide/show elements (measured with "Full Analysis" tab active)
