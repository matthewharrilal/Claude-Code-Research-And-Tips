# Fresh Structural Report: All 12 HTML Pages

**Worker:** fresh-structural (Captain-FreshEyes direct execution)
**Method:** Playwright DOM analysis via browser_evaluate, no convention spec read
**Date:** 2026-02-09

---

## Global Observations (Raw DOM Data)

### Element Counts

| Page | Total Elements | Relative Size |
|------|---------------|---------------|
| OD-001 | 553 | Medium |
| OD-002 | 455 | Medium |
| OD-003 | 637 | Large |
| OD-004 | 388 | Medium |
| OD-005 | 1,029 | Very Large |
| OD-006 | 540 | Medium |
| DD-001 | 154 | Small |
| DD-002 | 207 | Small |
| DD-003 | 184 | Small |
| DD-004 | 288 | Medium |
| DD-005 | 256 | Medium |
| DD-006 | 195 | Small |

**FRESH-STR-001:** OD pages average 600 elements. DD pages average 214 elements. OD pages are ~3x more complex structurally. This massive difference is visible in the screenshot analysis (ODs are content-rich; DDs feel sparse).

---

### Border-Radius Consistency

| Page | Non-Zero Border-Radius Values |
|------|-------------------------------|
| ALL 12 PAGES | **ZERO** — borderRadii: [] |

**FRESH-STR-002:** Every single page across all 12 has ZERO non-zero border-radius values. This is EXTREMELY consistent. Whatever design system these pages follow, it enforces sharp corners universally. This is a strong positive finding.

---

### Font Families

| Page | Fonts Used |
|------|------------|
| OD-001 | Times, Inter, JetBrains Mono, Instrument Serif |
| OD-002 | Times, Inter, JetBrains Mono, Instrument Serif |
| OD-003 | Times, Inter, JetBrains Mono, Instrument Serif, monospace |
| OD-004 | Times, Inter, JetBrains Mono, Instrument Serif, monospace |
| OD-005 | Times, Inter, JetBrains Mono, Instrument Serif, monospace |
| OD-006 | Times, Inter, JetBrains Mono, Instrument Serif |
| DD-001 | Times, Inter, JetBrains Mono, Instrument Serif |
| DD-002 | Times, Inter, JetBrains Mono, Instrument Serif |
| DD-003 | Times, Inter, JetBrains Mono, Instrument Serif |
| DD-004 | Times, Inter, JetBrains Mono, Instrument Serif, monospace |
| DD-005 | Times, Inter, JetBrains Mono, Instrument Serif, monospace |
| DD-006 | Times, Inter, JetBrains Mono, Instrument Serif, monospace |

**FRESH-STR-003:** ALL 12 pages share the same 4-5 font family set. "Times" appearing everywhere is suspicious — it's typically a fallback font, which suggests font loading may not complete before computed styles are read. However, the presence of "Instrument Serif" (the actual design serif) confirms the intended font IS loaded. The "monospace" fallback appears on some pages alongside JetBrains Mono, suggesting code blocks have a double fallback. This is a MINOR inconsistency — some pages resolve to JetBrains Mono only, others show the fallback too.

---

### Border Width Consistency

| Page | Border Widths Used |
|------|-------------------|
| OD-001 | 2.22222px, 1.11111px |
| OD-002 | 1.11111px, 2.22222px |
| OD-003 | 2.22222px, 1.11111px |
| OD-004 | 1.11111px, 2.22222px |
| OD-005 | 1.11111px, 2.22222px |
| OD-006 | 1.11111px, 2.22222px |
| DD-001 | 1.11111px |
| DD-002 | 1.11111px |
| DD-003 | 1.11111px |
| DD-004 | 1.11111px |
| DD-005 | 1.11111px |
| DD-006 | 1.11111px |

**FRESH-STR-004:** ALL OD pages use TWO border widths: 1.11111px and 2.22222px. ALL DD pages use only ONE: 1.11111px. The fractional values (1.11111px, 2.22222px) are unusual — these suggest the border widths are computed from a base value via CSS calculations or viewport-relative units, not set as clean integer pixel values. The 2.22222px value is exactly 2x the 1.11111px value, suggesting a 1x/2x hierarchy.

**FRESH-STR-005:** DD pages having only the thinner border while OD pages have both thin and thick suggests the ODs went through an enrichment process that added the thicker border type (for structural emphasis). This is a meaningful difference between the families.

---

### Color Palette Coherence

| Page | Unique BG Colors | Unique Text Colors |
|------|-----------------|-------------------|
| OD-001 | 13 | 11 |
| OD-002 | 13 | 15 |
| OD-003 | 13 | 11 |
| OD-004 | 12 | 11 |
| OD-005 | 12 | 11 |
| OD-006 | 8 | 7 |
| DD-001 | 8 | 15 |
| DD-002 | 10 | 16 |
| DD-003 | 9 | 12 |
| DD-004 | 13 | 16 |
| DD-005 | 8 | 15 |
| DD-006 | 11 | 13 |

**FRESH-STR-006:** OD pages use 8-13 background colors (average ~12). DD pages use 8-13 background colors (average ~10). Text colors are more variable: ODs use 7-15 (average ~11), DDs use 12-16 (average ~14.5). Surprisingly, DD pages use MORE unique text colors despite being visually simpler. This suggests DD pages may have syntax highlighting colors (code blocks) that inflate the unique color count.

**FRESH-STR-007:** OD-006 is an outlier with only 8 bg colors and 7 text colors — the most restrained palette of all 12 pages. This matches the editorial, minimalist visual impression from screenshots.

---

### Font Size Distributions

**FRESH-STR-008:** Most pages use 10-14 unique font sizes. However, several UNUSUAL font sizes appear:

- **9px** (OD-001, OD-003, OD-005, DD-005, DD-006): Very small text, possibly metadata labels
- **8px** (OD-001, DD-006): Extremely small, potentially illegible
- **12.6px** (OD-001, OD-004, OD-006): Non-integer size, likely computed from rem/em
- **10.8px** (OD-002): Non-integer, same
- **14.4px** (OD-001, OD-006): Non-integer, same
- **19.2px** (OD-004): Non-integer, same

The non-integer sizes suggest the type scale uses relative units (rem, em) that compute to fractional pixel values at certain zoom levels.

**FRESH-STR-009:** DD pages and OD pages use DIFFERENT title sizes. OD pages peak at 40px; DD-001/002/003/006 peak at 32px; DD-004 peaks at 36px; DD-005 peaks at 32px. The title size difference (40px OD vs 32px DD) is a visible inconsistency.

---

### Heading Hierarchy

**FRESH-STR-010:** DD-004 has THREE H1 elements ("Density Layers", "Authorization Code Flow", "Token Refresh"). All other pages have exactly 1 H1. This is a semantic HTML error.

**FRESH-STR-011:** OD pages have 5-26 headings (average ~14). DD pages have 3-12 headings (average ~7). OD pages have roughly 2x the heading density, consistent with their richer content.

---

## Summary

| ID | Observation | Impact |
|----|-------------|--------|
| FRESH-STR-001 | OD ~3x more complex than DD | Structural family gap |
| FRESH-STR-002 | Zero border-radius across ALL 12 pages | Strong positive |
| FRESH-STR-003 | "Times" fallback appearing alongside actual fonts | Minor font-load race |
| FRESH-STR-004 | Fractional border widths (1.11px, 2.22px) | Unusual but consistent |
| FRESH-STR-005 | DD uses only thin border; OD uses thin+thick | Family differentiation |
| FRESH-STR-006 | DD has MORE unique text colors than OD | Unexpected — code syntax |
| FRESH-STR-007 | OD-006 most restrained palette (8 bg, 7 text) | Intentional editorial |
| FRESH-STR-008 | 8px font size used on some pages | Potentially illegible |
| FRESH-STR-009 | Title sizes: 40px OD vs 32px DD | Inconsistency |
| FRESH-STR-010 | DD-004: 3 H1 elements | Semantic HTML error |
| FRESH-STR-011 | OD ~2x heading density vs DD | Expected complexity gap |
