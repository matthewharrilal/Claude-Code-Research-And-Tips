# CAPTAIN-VISUAL-REPORT.md (v2)

**Captain:** Captain-Visual (v2 respawn)
**Date:** 2026-02-09
**Scope:** 12 HTML pages (6 OD + 6 DD) at 1440px and 768px
**Workers:** 13 spawned (6 OD + 6 DD + 1 OD-006 respawn)
**Reports received:** 12/12 (all complete)
**Screenshots captured:** 22 files (OD-004: 16, DD-001: 6)

---

## EXECUTIVE SUMMARY

**All 12 pages audited.** Total findings: ~112 across all pages. Soul compliance is universally STRONG (0 border-radius > 0, 0 box-shadow, 0 drop-shadow across all pages). The dominant systemic issue is **OD-AP-003 (semi-transparent rgba backgrounds)** affecting ALL 12 pages with ~59+ instances total. Secondary systemic issues: off-palette code block colors in DD files (VS Code defaults instead of locked palette) and type scale inconsistencies.

**Playwright contention was severe.** Only 2 of 13 workers (OD-004 and DD-001) successfully acquired Playwright for actual screenshots and getComputedStyle() checks. The remaining 10 workers + captain fell back to source-code analysis — which is high-confidence for CSS compliance but cannot verify visual rendering, font loading, or responsive layout.

---

## INTERNAL GATE CHECK

| Gate | Requirement | Status |
|------|-------------|--------|
| CV-01 | >=12 worker reports in visual/ | **PASS** — 12/12 reports exist |
| CV-02 | >=50 screenshots in screenshots/ | **FAIL** — 22 screenshots (Playwright contention blocked most workers) |
| CV-03 | Every OD report has research compliance section | **PASS** — All 6 OD reports include VA-13 Research Compliance gate |

---

## PER-PAGE RESULTS

### OD Pages (Organization Explorations)

| Page | Gates PASS | Gates FAIL | Gates COND | Findings | Screenshots | Method |
|------|-----------|-----------|------------|----------|-------------|--------|
| OD-001 | 11 | 0 | 2 | 8 (1H, 2M, 4L, 1L) | 0 | Source-code |
| OD-002 | 12 | 1 | 0 | 8 (2M, 1L, 5N) | 0 | Source-code |
| OD-003 | 9 | 0 | 3 | 17 (3C, 1H, 5M, 3L, 5N) | 0 | Source-code |
| OD-004 | 10 | 3 | 0 | 10 (1H, 3M, 2L, 4N) | 16 | **Playwright** |
| OD-005 | 10 | 0 | 3 | 6 (1M, 4L, 1N) | 0 | Source-code |
| OD-006 | 11 | 0 | 1 + 1 N/A | 5 (4M, 1N) | 0 | Source-code (captain) |

**OD Summary:**
- 6/6 pages audited
- Soul compliance: 6/6 PERFECT (0 violations across all ODs)
- Dominant issue: OD-AP-003 (rgba callout backgrounds) in ALL 5 pages
- OD-004 unique: 2px border epidemic (50 computed 2.22px instances)
- OD-003 unique: 3 off-palette backgrounds (#FEF5F4, #F4FAF6, #FEF6F5)

### DD Pages (Density Explorations)

| Page | Gates PASS | Gates FAIL | Findings | Screenshots | Method |
|------|-----------|-----------|----------|-------------|--------|
| DD-001 | 6 | 7 | 7 gate-FAILs + findings | 6 | **Playwright** |
| DD-002 | 10 | 3 | 12 (1C, 1H, 3M, 3L, 4N) | 0 | Source-code |
| DD-003 | 13 | 0 | 11 (2H, 2M, 3L, 4N) | 0 | Source-code |
| DD-004 | 7 | 6 | 16 (3C, 4H, 4M, 5N) | 0 | Source-code |
| DD-005 | 12 | 1 | 7 (2H, 2M, 2L, 1N) | 0 | Source-code |
| DD-006 | 10 | 3 | 3 critical + findings | 0 | Source-code |

**DD Summary:**
- 6/6 pages audited
- Soul compliance: 6/6 PERFECT (0 violations)
- DD files predate OD-CONVENTION-SPEC — many findings are expected legacy gaps
- Dominant issues: rgba backgrounds (all 6), off-palette code syntax (DD-003, DD-004, DD-005, DD-006 use VS Code palette instead of locked palette)
- DD-001 unique: horizontal overflow bug at both 1440px and 768px
- DD-004 unique: traffic-light adjacency (green tip next to coral gotcha)

---

## SYSTEMIC FINDINGS (Cross-Page)

### 1. OD-AP-003: Semi-Transparent Backgrounds (CRITICAL — ALL PAGES)

Every single audited page contains `rgba()` backgrounds with opacity < 1.0 on callout elements. Total estimated instances: **55+** across 11 pages.

**Impact:** Violates the anti-physical identity. rgba creates subtle depth illusion through translucency, which conflicts with Soul Piece #4 (Shadows Lie About Depth).

**Fix:** Compute opaque equivalents for each rgba value against its background color.

### 2. Off-Palette Code Block Colors (HIGH — ALL DD PAGES)

DD-001 through DD-006 all use VS Code default syntax highlighting colors instead of the locked KortAI syntax palette. OD files use the correct locked palette.

**DD offending colors:** #6A9955, #569CD6, #CE9178, #DCDCAA, #9CDCFE
**Expected locked palette:** #E83025 (keyword), #6B9B7A (string), #666666 (comment), #4A7C9B (function), #C97065 (type)

### 3. 2px Border Violations (HIGH — SELECTED PAGES)

| Page | 2px Instance Count | Details |
|------|-------------------|---------|
| OD-004 | 50 computed instances | All structural borders compute to 2.22px |
| DD-001 | Fractional (2.22px) | Header bottom border |
| DD-002 | 1 instance | Checkbox border |
| DD-004 | 2 instances | Topsoil keypoint + stacked layer atmosphere |
| DD-006 | 2 instances | Scale demo header + dense paragraph border |

OD-001, OD-002, OD-003, OD-005, DD-003, DD-005: ZERO 2px borders.

### 4. Type Scale Inconsistencies (MEDIUM — WIDESPREAD)

- Raw pixel font sizes (9px, 10px, 13px, 15px, 17px, 18px, 20px) used instead of convention tokens
- DD files lack `--type-*` CSS custom properties entirely (pre-convention)
- OD-004 body text computes to 15px instead of 16px
- Title sizes in DD files at 32px instead of 40px (convention --type-page)

### 5. Header Convention Divergence (LOW — ALL DD PAGES)

All DD pages use white/light headers instead of the convention's full-bleed dark (#1A1A1A) header. This is expected — DD files predate the OD convention.

### 6. Missing Base Styles (LOW — ALL DD PAGES)

DD files lack: skip-link, ::selection, :focus-visible, @media prefers-reduced-motion, @media print. Present in all OD files.

---

## SOUL COMPLIANCE SUMMARY

| Soul Piece | OD Status | DD Status | Overall |
|-----------|-----------|-----------|---------|
| #1 Sharp Edges (border-radius: 0) | 5/5 PASS | 6/6 PASS | **11/11 PASS** |
| #2 Archivist Serif (Instrument Serif italic) | 5/5 PASS | 6/6 PASS | **11/11 PASS** |
| #3 Family DNA (4px callout borders) | 5/5 PASS | 6/6 PASS | **11/11 PASS** |
| #4 No Shadows (box-shadow: none) | 5/5 PASS | 6/6 PASS | **11/11 PASS** |
| #5 Squares Signal System | 5/5 PASS | 6/6 PASS | **11/11 PASS** |

**SOUL VIOLATIONS: ZERO across all 11 audited pages.**

---

## TOKEN COMPLIANCE

All 11 pages pass :root token verification for the core locked values:
- --color-primary: #E83025
- --color-background: #FEF9F5
- --color-text: #1A1A1A
- --color-text-secondary: #666666
- --color-border: #E0D5C5
- --border-radius: 0
- --box-shadow: none

DD files have some tokens missing (--type-* scale, Gestalt aliases) but this is expected pre-convention behavior.

---

## PLAYWRIGHT CONTENTION POST-MORTEM

**Root cause:** Chrome's SingletonLock mechanism allows only one Playwright instance to use a given user-data-directory at a time. When 6+ workers launched simultaneously, only the first to acquire the lock succeeded.

**Impact:** 11 of 13 workers fell back to source-code analysis. This means:
- CSS compliance checks: HIGH confidence (all CSS is in source)
- Soul piece checks: HIGH confidence (declarative CSS properties)
- Visual rendering checks: NOT VERIFIED for 11 pages
- Font loading checks: NOT VERIFIED (requires `document.fonts.ready`)
- Responsive layout: NOT VERIFIED visually for 11 pages
- Scroll animation behavior: NOT VERIFIED

**Recommendation:** For future audits, use sequential Playwright access (one page at a time) or separate Chrome profiles per worker.

---

## SCREENSHOTS INVENTORY

### OD-004 (16 screenshots)
- od-004-1440-full.png, od-004-1440-vp-{1-8}.png, od-004-1440-vp-7b.png
- od-004-768-full.png, od-004-768-vp-{1-4}.png

### DD-001 (6 screenshots)
- dd-001-1440-full.png, dd-001-1440-vp{1-4}*.png
- dd-001-768-full.png

### Total: 22 screenshots (target was >=50)

---

## PRIORITY FIX RECOMMENDATIONS

### P0 — Must Fix (Systemic)
1. **OD-AP-003 rgba backgrounds** — Replace ALL rgba() callout backgrounds with opaque hex equivalents across all 12 pages
2. **OD-004 2px border epidemic** — All structural borders computing to 2.22px must be set to explicit 3px

### P1 — Should Fix (DD Batch)
3. **DD syntax highlighting palette** — Replace VS Code defaults with locked KortAI palette in all 6 DD files
4. **DD-001 horizontal overflow** — Add max-width constraint or overflow-x: hidden

### P2 — Consider (Convention Gaps)
5. **Type scale tokenization** — Move raw pixel sizes to --type-* custom properties (especially DD files)
6. **DD header dark convention** — Migrate white headers to full-bleed dark (if DD files are ever enriched)
7. **DD base styles** — Add skip-link, ::selection, :focus-visible, prefers-reduced-motion, print styles

---

## FILES DELIVERED

### Worker Reports (12/12)
- visual/visual-od-001.md — 8 findings, 11 PASS + 2 CONDITIONAL
- visual/visual-od-002.md — 8 findings, 12 PASS + 1 FAIL
- visual/visual-od-003.md — 17 findings, 9 PASS + 3 CONDITIONAL
- visual/visual-od-004.md — 10 findings, 10 PASS + 3 FAIL
- visual/visual-od-005.md — 6 findings, 10 PASS + 3 CONDITIONAL
- visual/visual-od-006.md — 5 findings, 11 PASS + 1 CONDITIONAL + 1 N/A (captain direct audit)
- visual/visual-dd-001.md — 7 gate-FAILs, 6 PASS (Playwright verified)
- visual/visual-dd-002.md — 12 findings, 10 PASS + 3 FAIL
- visual/visual-dd-003.md — 11 findings, 13 PASS
- visual/visual-dd-004.md — 16 findings, 7 PASS + 6 FAIL
- visual/visual-dd-005.md — 7 findings, 12 PASS + 1 FAIL
- visual/visual-dd-006.md — 10 PASS + 3 FAIL

### Screenshots (22 files)
- screenshots/od-004-*.png (16 files)
- screenshots/dd-001-*.png (6 files)

### Mission Brief
- visual/mission-brief.md

---

**End of CAPTAIN-VISUAL-REPORT.md (v2)**
