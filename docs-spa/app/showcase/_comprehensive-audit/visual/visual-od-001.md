# Visual Audit: OD-001 Conversational Structure

**URL:** http://localhost:3000/explorations/organizational/OD-001-conversational.html
**Screenshots:** od-001-1440-full.png, od-001-768-full.png
**Body Height:** 9,787px (target: 10,000-14,000px — SLIGHTLY BELOW)

## 13 Binary Gates

| Gate | Check | Result |
|------|-------|--------|
| VA-01 | Page renders | PASS |
| VA-02 | No visual overflow | PASS |
| VA-03 | No misalignment | PASS |
| VA-04 | Typography matches convention | PASS — h1: 40px Instrument Serif, h2: 26px Instrument Serif, body: 16px Inter |
| VA-05 | Colors match convention | PASS — all tokens correct |
| VA-06 | Spacing matches convention | PASS — header padding 64px 32px |
| VA-07 | Border system | MEDIUM — header border-bottom 2.22px (not 3px), callout border-left 3.33px (not 4px), code block border 2.22px (not 3px) |
| VA-08 | Soul compliance | PASS — 0 border-radius, 0 box-shadow, 0 filter across all elements |
| VA-09 | Responsive at 768px | PASS |
| VA-10 | Code blocks | PASS — dark bg #1A1A1A, JetBrains Mono 14px, border-radius 0 |
| VA-11 | Headers | PASS — dark bg #1A1A1A, Instrument Serif, aligned |
| VA-12 | No dead zones | PASS |
| VA-13 | Research compliance | PASS — 13 EXT-* enrichments listed with evidence |

**Gate Summary:** 12 PASS, 1 MEDIUM (VA-07 border widths)

## Soul Compliance Checklist

- [x] border-radius: 0 on every element (0 violations across all DOM elements)
- [x] box-shadow: none on every element (0 violations)
- [x] filter: none on every element (0 violations)
- [x] No 2px borders (0 found)
- [x] Font family correct: Inter body, Instrument Serif display, JetBrains Mono code
- [ ] opacity: 1 on every visual element — **FAIL: 10 rgba() backgrounds found**

## Findings

### VIS-001 — MEDIUM — Border Width Sub-Pixel Rendering
- **Location:** Header border-bottom, all h2 border-bottom, all code-block borders
- **Expected:** 3px solid (Cat 1 structural)
- **Actual:** 2.22222px solid
- **Note:** This appears to be sub-pixel rendering at certain DPI/zoom levels. The CSS likely specifies 3px but computes to 2.22px. Investigate CSS source — may be using `calc()` or relative units.

### VIS-002 — MEDIUM — Callout Border-Left Sub-Pixel
- **Location:** All 7 callouts (info, tip, gotcha, essence, challenge, collapsible)
- **Expected:** 4px solid (convention: callout left-border = 4px)
- **Actual:** 3.33333px solid
- **Note:** Same sub-pixel pattern as VIS-001. CSS may specify 4px but computes differently.

### VIS-003 — HIGH — rgba() Backgrounds (OD-AP-003 Violation)
- **Location:** 10 elements with semi-transparent backgrounds
- **Elements:** callout--info (rgba(74,144,217,0.05)), callout--tip (rgba(74,157,107,0.05)), callout--gotcha (rgba(201,112,101,0.05)), callout--essence (rgba(124,58,237,0.04)), callout--challenge (rgba(217,119,6,0.05)), 3x table cells (rgba(232,48,37,0.04)), 1x collapsible info
- **Expected:** Fully opaque backgrounds only (per OD-AP-003)
- **Actual:** All callout backgrounds use rgba() with alpha 0.04-0.05
- **Research ID:** OD-AP-003 (Semi-Transparent Backgrounds)

### VIS-004 — LOW — Body Height Slightly Below Target
- **Location:** Full page
- **Expected:** 10,000-14,000px
- **Actual:** 9,787px (213px below minimum)
- **Note:** Very close to target. Borderline — may be acceptable.

## Token Verification

| Token | Expected | Actual | Match |
|-------|----------|--------|-------|
| --color-primary | #E83025 | #E83025 | YES |
| --color-background | #FEF9F5 | #FEF9F5 | YES |
| --color-text | #1A1A1A | #1A1A1A | YES |
| --color-text-secondary | #666666 | #666666 | YES |
| --color-border | #E0D5C5 | #E0D5C5 | YES |
| --color-border-subtle | #F0EBE3 | #F0EBE3 | YES |
| --type-page | 2.5rem | 2.5rem | YES |
| --type-section | 1.625rem | 1.625rem | YES |
| --type-subsection | 1.375rem | 1.375rem | YES |
| --type-body | 1rem | 1rem | YES |
| --type-code | 0.875rem | 0.875rem | YES |
| --type-meta | 0.75rem | 0.75rem | YES |
| --border-radius | 0 | 0 | YES |
| --box-shadow | none | none | YES |

## Research Enrichment Verification

13 EXT-* enrichments claimed. All visually present in Research Enrichments Applied section:
EXT-CONV-001, EXT-CONV-003, EXT-CONV-004, EXT-CONV-006, EXT-CONV-007, EXT-CONV-010, EXT-CONV-011, EXT-CREATIVE-001, EXT-CREATIVE-002, EXT-CREATIVE-003, EXT-CREATIVE-004, EXT-CREATIVE-005, R1-028
