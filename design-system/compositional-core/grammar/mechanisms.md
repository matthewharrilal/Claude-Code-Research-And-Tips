# Mechanisms — Compositional Tools

A mechanism is a CSS technique that works across multiple metaphors, verified by two tests:
- **Name Test:** Remove the metaphor name. Does the description still make sense?
- **Transfer Test:** Does this technique work with a different metaphor?

These mechanisms are **illustrative, not exhaustive.** Additional techniques that pass both tests may be used. What matters is intentional deployment, not catalog completeness.

For CSS implementations, see `components.css` and `tokens.css`.

---

## Spatial (4)

| # | Mechanism | Usage | Origin | Description |
|---|-----------|-------|--------|-------------|
| 5 | Dense/Sparse Alternation | 18/18 | DD | INHALE/EXHALE rhythm through padding changes between sections |
| 4 | Spacing Compression | 12+/18 | DD | Inverse density-confidence: more certain = more space, less certain = compressed |
| 6 | Width Variation | 3-4/18 | DD | Horizontal rhythm through variable max-width (60-100% range). RARE. |
| 15 | Bento Grid | 10+/18 | DD-003 | Variable-span grid where cell size encodes importance. 2x2=anchor, 2x1=secondary, 1x1=tertiary |

## Hierarchy (2)

| # | Mechanism | Usage | Origin | Description |
|---|-----------|-------|--------|-------------|
| 1 | Border-Weight Gradient | 15/18 | OD-004 | 4px/3px/1px encodes hierarchy. PROGRESSIVE mode (gradient across levels) or DISCRETE mode (categorical differentiation) |
| 11 | Typographic Scale Jumping | 18/18 | Universal | ~1.5x ratio between heading levels signals structural hierarchy |

## Component (5)

| # | Mechanism | Usage | Origin | Description |
|---|-----------|-------|--------|-------------|
| 9 | Color Encoding | 16+/18 | Universal | Accent color maps to semantic meaning (blue=info, green=tip, red=warning, purple=essence, amber=challenge) |
| — | Inline Code Styling | Common | DD-001 | Subtle background + 1px border on `code:not(pre code)` elements within prose |
| — | Task Checklist | CD-002+ | CD | 16x16px bordered squares with semantic completion states |
| — | Version Badge | CD-006 | CD | Mono text + 1px border pill for metadata display |
| — | Decision Matrix | DD-001+ | DD | Grid with row highlighting for structured comparisons |

## Depth/Emphasis (3)

| # | Mechanism | Usage | Origin | Description |
|---|-----------|-------|--------|-------------|
| 3 | Solid Offset Depth | 4-5/18 | OD-001 | `::after` pseudo-element at 4px offset creates depth without box-shadow. The ONLY permitted depth technique. |
| 7 | Zone Background Differentiation | 12/18 | OD/CD | 4-color background token system signals content type shifts. Subtle warmth/coolness changes build atmosphere. |
| 16 | Drop Cap | 3/18 | OD-001 | `::first-letter` in display serif at 3.5em. Editorial opening signal. Use once per page maximum. RARE. |

## Structure (7)

| # | Mechanism | Usage | Origin | Description |
|---|-----------|-------|--------|-------------|
| 13 | Dark Header + 3px Border | 12-14/18 | Universal | `#1A1A1A` background + 3px `#E83025` border-bottom. **Identity-locked** — colors are fixed. |
| 14 | Footer Mirror | 6-8/18 | Universal | Dark background + 3px border-top mirrors header. Structural bookend. **Identity-locked.** |
| 17 | Code Block | 12+/18 | Universal | Dark background + syntax highlighting (7 locked colors). **Palette identity-locked.** |
| 18 | Data Table | 10/18 | Universal | Mono uppercase headers + 3px header border + 1px row separators. No vertical borders. |
| — | Section Divider | DD-006+ | DD | Horizontal rule with centered label via `::before` pseudo-element |
| — | Reasoning Columns | CD-002+ | CD | 2-column grid with `::before` list markers for deliberation display |
| — | File Tree Indentation | DD-001+ | DD | Monospace directory structure with progressive padding-left per depth level |
| 8 | Scroll Witness / Sticky TOC | 4-5/18 | OD | Position-sticky navigation that tracks scroll position. **Requires JavaScript.** LOW perceptual effectiveness — subtle navigation aid, not a visual mechanism. |

## Component Patterns (not mechanisms — universal structural patterns)

| Pattern | Usage | Description |
|---------|-------|-------------|
| 2-Zone DNA | 18/18 | Sparse uppercase label (12px, letter-spaced) + dense body content (16px). Universal component internal structure. |
| Stratum Boundary | OD-004+ | 3-component transition: whitespace + structural rule + mono label with progress indicators |

---

## Transition Grammar

Every zone boundary MUST use exactly one of three transition types. Empty space with no signal is NOT a valid transition.

| Type | When | Signal | Spacing |
|------|------|--------|---------|
| **SMOOTH** | Content changes intensity within same domain | Padding shift only, no border or background change | 32-48px |
| **BRIDGE** | Content changes domain | 3px primary border at boundary + optional background shift | 32px + border |
| **BREATHING** | Major phase change | Full background shift + optional horizontal rule or label | 48-96px max |

**Selection rule:** Same domain, different intensity = SMOOTH. Different domain = BRIDGE. Different phase = BREATHING. Spiral exits always use BREATHING (most isolated pattern). Z-Pattern ↔ F-Pattern use SMOOTH. Bento uses BRIDGE at boundaries.

---

## Restraint

Mechanism count is a natural landing zone, not a target. For component density limits, see `grammar.md`.

- **Distribution:** Every page-third (0-33%, 33-66%, 66-100%) must contain at least 2 distinct mechanisms
- **Quality over quantity:** A mechanism present in CSS but imperceptible to readers does not count as deployed
