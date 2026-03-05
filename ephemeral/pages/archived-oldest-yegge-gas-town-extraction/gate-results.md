# Gate Runner Results — Gas Town Page

## Identity Gates (GR-01 through GR-10)

| Gate | Name | Status | Notes |
|------|------|--------|-------|
| GR-01 | Border Radius Zero | PASS | 0 violations |
| GR-02 | Box Shadow None | PASS | 0 violations |
| GR-03 | Container 940-960px | PASS | 960px, 6 container elements |
| GR-04 | No Gradients | PASS | 0 violations |
| GR-05 | Warm Palette | FAIL | 18 pure black (browser defaults on HTML/HEAD), 98 cold colors (rgb(74,144,217) on role-card__level) |
| GR-06 | Font Trinity | PASS* | All 3 fonts found. 9 "violations" are browser-default `times` on HTML/HEAD/META/TITLE — false positive |
| GR-07 | Header DNA | PASS | Dark bg rgb(26,26,26), red border 2.67px rgb(232,48,37) |
| GR-08 | Border Hierarchy | PASS | 3 distinct weights: 4.0px (26), 2.7px (141), 0.7px (186) |
| GR-09 | Typography | PASS | Line-height 1.70, h3 italic (23 h3s) |
| GR-10 | Accessibility | PASS | Skip link, 11 landmarks, 35 headings, hierarchy OK |

Identity: **9 PASS, 1 FAIL** (GR-05 cold color on role cards)

## Perception Gates (GR-11 through GR-16)

| Gate | Name | Status | Notes |
|------|------|--------|-------|
| GR-11 | BG Delta >= 15 | FAIL | Z1→Z2: 27 PASS, Z2→Z3: 11 FAIL, Z3→Z4: 8 FAIL, Z4→Z5: 29 PASS, Z5→Z6: 16 PASS |
| GR-12 | Letter Spacing | PASS | 0 violations |
| GR-13 | Stacked Gap <= 120px | PASS | Max 112px (Z1→Z2), others 80px |
| GR-14 | Visual Gap <= 150px | FAIL | Z5→Z6: 318px (dark inversion block per D-04 in execution brief) |
| GR-15 | Single Margin <= 96px | PASS | 0 violations |

Perception: **3 PASS, 2 FAIL**

### Background Colors by Zone
- Z1 (intake): rgb(254, 249, 245) — #FEF9F5
- Z2 (floor): rgb(237, 230, 218) — #EDE6DA
- Z3 (tank): rgb(245, 239, 229) — #F5EFE5
- Z4 (control): rgb(250, 245, 237) — #FAF5ED
- Z5 (line): rgb(229, 221, 208) — #E5DDD0
- Z6 (dispatch): rgb(240, 235, 224) — #F0EBE0

## Anti-Pattern Gates

| Gate | Name | Status | Notes |
|------|------|--------|-------|
| GR-17 | Density Stacking | FAIL | 262 violations — table cells at 8px padding |
| GR-18 | Ghost Mechanisms | PASS | 0 ghosts |
| GR-20 | Structural Echo | PASS | maxConsecutive = 1 |

Anti-Pattern: **2 PASS, 1 FAIL**

## Overall Verdict

**REFINE** — 1 identity fail (cold color), 2 perception fails (bg deltas + visual gap)

### Fixes Needed
1. **GR-05**: Replace cold blue `rgb(74,144,217)` on `.role-card__level` with warm color (amber/teal from palette)
2. **GR-11**: Increase Z2→Z3 delta from 11 to >=15 and Z3→Z4 delta from 8 to >=15
3. **GR-14**: The 318px gap between Z5 and Z6 is the dark inversion block (D-04 second-half moment). This is intentional but flagged because the dark block is structurally between zones rather than inside either zone.
4. **GR-17**: Table cell padding at 8px — common for dense data. Consider whether 12px minimum applies to table cells.

### Screenshot Inventory
- 1440px: cold-look + full-page + 22 scroll positions = 24 files
- 1024px: cold-look + full-page + 13 scroll positions = 15 files
- 768px: cold-look + full-page + 14 scroll positions = 16 files
- Total: 55 screenshot files
