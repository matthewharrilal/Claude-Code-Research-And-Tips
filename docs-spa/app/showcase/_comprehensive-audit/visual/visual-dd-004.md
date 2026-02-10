# Visual Audit: DD-004 Layers

**URL:** http://localhost:3000/explorations/density/DD-004-layers.html
**Screenshots:** dd-004-1440-full.png, dd-004-768-full.png
**Body Height:** 4,539px

## 13 Binary Gates

| Gate | Check | Result |
|------|-------|--------|
| VA-01 | Page renders | PASS |
| VA-02 | No visual overflow | PASS |
| VA-03 | No misalignment | PASS |
| VA-04 | Typography | MEDIUM — pre-convention (h2: 22px) |
| VA-05 | Colors | PASS |
| VA-06 | Spacing | MEDIUM — header padding 24px |
| VA-07 | Border system | MEDIUM — 2.22px |
| VA-08 | Soul compliance | PASS — 0/0/0 |
| VA-09 | Responsive 768px | PASS |
| VA-10 | Code blocks | N/A |
| VA-11 | Headers | FAIL — white bg |
| VA-12 | No dead zones | PASS |
| VA-13 | Research compliance | PASS |

**Gate Summary:** 8 PASS, 3 MEDIUM, 1 FAIL, 1 N/A

## Findings

### VIS-DD-007 — CRITICAL — Semi-Transparent Layer Backgrounds (Opacity < 1)
- **Location:** stacked-layer (rgba(254,249,245,0.95)), layer-atmosphere (rgba(254,249,245,0.95))
- **Note:** These are density-layer visualization elements using opacity 0.95. While potentially intentional for the "layers" density demonstration, this is a clear opacity < 1 violation per anti-pattern OD-AP-003.

### VIS-DD-008 — HIGH — 10 rgba() Backgrounds Total
- Includes layer elements + callout backgrounds (rgba at 0.08 alpha)

## Soul: 0 border-radius, 0 box-shadow, 0 filter
