# Visual Audit: DD-003 Islands

**URL:** http://localhost:3000/explorations/density/DD-003-islands.html
**Screenshots:** dd-003-1440-full.png, dd-003-768-full.png
**Body Height:** 3,854px

## 13 Binary Gates

| Gate | Check | Result |
|------|-------|--------|
| VA-01 | Page renders | PASS |
| VA-02 | No visual overflow | PASS |
| VA-03 | No misalignment | PASS |
| VA-04 | Typography | MEDIUM — pre-convention |
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

### VIS-DD-006 — HIGH — 10 rgba() Backgrounds
- Highest DD count. callout-essence, code-snippet headers (x2), callout-tip, decision-matrix header, callout-info, callout-tip, callout-gotcha, callout-challenge, callout-essence

## Soul: 0 border-radius, 0 box-shadow, 0 filter
