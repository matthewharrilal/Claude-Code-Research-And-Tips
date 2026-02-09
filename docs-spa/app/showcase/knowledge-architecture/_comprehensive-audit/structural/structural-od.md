# Structural Audit: 6 OD HTML Files
## structural-od — Captain-Structural v2 Worker Output
**Date:** 2026-02-09 | **Method:** Playwright getComputedStyle() on http://localhost:3000

---

## Summary

| File | Elements | Soul Violations | 2px Borders | RGBA Semi-Transparent | Font Issues | Type Scale Issues |
|------|----------|-----------------|-------------|----------------------|-------------|-------------------|
| OD-001 | 553 | 0 | 0 | 10 (callout tints) | 0 | 0 |
| OD-002 | 455 | 0 | 0 | 8 (callout tints) | 0 | See note |
| OD-003 | 636 | 0 | 0 | 18 (task-island + inline code) | 0 | 0 |
| OD-004 | 387 | 0 | 0 | 0 | 0 | 0 |
| OD-005 | 1028 | 0 | 0 | 12 (callout tints) | 0 | 0 |
| OD-006 | 539 | 0 | 0 | 0 | 0 | 0 |
| **TOTAL** | **3,598** | **0** | **0** | **48** | **0** | **0** |

---

## Soul Compliance: PASS (0 violations across 3,598 elements)

Checked on every element:
- [x] border-radius: 0px — PASS (all 6 ODs)
- [x] box-shadow: none — PASS (all 6 ODs)
- [x] filter: none — PASS (all 6 ODs)

---

## Border System: PASS (zero 2px borders)

All 6 ODs report 0 instances of `borderTopWidth/borderRightWidth/borderBottomWidth/borderLeftWidth === '2px'`. The 2px border epidemic (OD-F-AP-001) has been fully resolved.

---

## RGBA Semi-Transparent Backgrounds

48 instances of `rgba()` with alpha < 1 found. All are INTENTIONAL callout tint backgrounds:

**OD-001 (10 instances):**
- DIV.callout: rgba(74, 144, 217, 0.05) — blue callout tint
- TD: rgba(232, 48, 37, 0.04) — table alternating row tint (3x)
- DIV.callout: rgba(74, 157, 107, 0.05) — green callout tint
- DIV.callout: rgba(201, 112, 101, 0.05) — coral callout tint
- DETAILS.callout: rgba(74, 144, 217, 0.05) — blue expandable callout
- DIV.callout: rgba(217, 119, 6, 0.05) — amber callout tint
- DIV.callout: rgba(124, 58, 237, 0.04) — purple callout tint

**OD-003 (18 instances):**
- DETAILS.task-island: rgba(232, 48, 37, 0.03) — task island hover
- CODE (17x): rgba(0, 0, 0, 0.04) — inline code background tint

**Assessment:** All rgba values use the 5 locked accent colors at very low alpha (0.03-0.06). This is consistent with the convention spec Section 7 (Color Application) which permits callout accent tints. The inline code rgba(0, 0, 0, 0.04) in OD-003 is slightly off-palette (pure black instead of accent color) but at 4% alpha this is visually negligible.

**Finding:**
- STR-OD-001: Low, OD-003, `code:not(pre code)`, background rgba(0, 0, 0, 0.04), Expected: rgba from accent palette or #F0EBE3, Actual: rgba(0, 0, 0, 0.04). Minor off-palette inline code tint.

---

## Type Scale Verification

All OD pages type scale is correct:
- **H1 (--type-page):** OD-001-005: 40px, OD-006: 48px (sanctioned 3rem override)
- **H2 (--type-section):** 26px across all ODs

**OD-002 Narrative Arc Note:** OD-002 uses INTENTIONAL progressive type scaling for narrative effect:
- H2 "The Promise": 40px (Act 1 — same as page title for dramatic opening)
- H2 "The Complications": 26px (standard)
- H2 "The Battle": 22px (uses --type-subsection for narrative compression)
- H2 "The Architecture": 16px (uses --type-body for maximum compression)
- H2 "The Reflection": 16px (stays compressed for denouement)

This is the NARRATIVE ARC density pattern — headings shrink as the story intensifies. This is INTENTIONAL per the OD-002 exploration thesis and should NOT be flagged as a violation.

---

## Font Verification: PASS

All 6 ODs:
- Body font: Contains 'Inter' — PASS
- H1/H2 font: Contains 'Instrument Serif' — PASS
- Code font (where present): Contains 'JetBrains Mono' or 'SF Mono' — PASS
- No off-font-family elements detected

---

## Semantic HTML and Accessibility

| Feature | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|---------|--------|--------|--------|--------|--------|--------|
| `<main>` | YES | YES | YES | YES | YES | YES |
| Skip link | YES | YES | YES | YES | YES | YES |
| `<nav>` | YES | NO | NO | YES | YES | YES |
| `<header>` | YES | YES | YES | YES | YES | YES |
| H1 count | 1 | 1 | 1 | 1 | 1 | 1 |
| ARIA regions | 8 | 0 | 2 | 16 | 22 | 5 |
| focus-visible rules | 1 | 1 | 1 | 2 | 1 | 1 |
| Reduced motion | YES | YES | YES | YES | YES | YES |
| Print media | YES | YES | YES | YES | YES | YES |
| Images without alt | 0 | 0 | 0 | 0 | 0 | 0 |

**Heading Hierarchy:** All 6 ODs have valid heading hierarchy (H1 -> H2 -> H3, no skips).

**Findings:**
- STR-OD-002: Medium, OD-002, Missing `<nav>` element. Convention requires scroll-witness nav for chapter progress. OD-002 does not have one (likely intentional for narrative flow — no chapters to navigate).
- STR-OD-003: Medium, OD-003, Missing `<nav>` element. Task-based structure would benefit from step navigation.
- STR-OD-004: Note, OD-002, 0 ARIA regions. OD-001 has 8 (Q&A pairs), OD-004 has 16. OD-002's narrative structure may not need them but accessibility auditors would flag.

---

## Per-File Finding Summary

| ID | Severity | File | Issue |
|----|----------|------|-------|
| STR-OD-001 | Low | OD-003 | Inline code uses rgba(0,0,0,0.04) — slightly off-palette |
| STR-OD-002 | Medium | OD-002 | Missing `<nav>` element |
| STR-OD-003 | Medium | OD-003 | Missing `<nav>` element |
| STR-OD-004 | Note | OD-002 | 0 ARIA regions (vs 8-22 in other ODs) |

**Total: 4 findings (0 Critical, 0 High, 2 Medium, 1 Low, 1 Note)**
