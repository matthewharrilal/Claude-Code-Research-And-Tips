# Convention Auditor Report
## 16 Binary Checks on AD-CONVENTION-SPEC.md and AD-SOUL-TEMPLATE.html

**Auditor:** Convention Auditor (information-barrier agent)
**Date:** 2026-02-09
**Files Audited:**
1. `AD-CONVENTION-SPEC.md` (822 lines)
2. `AD-SOUL-TEMPLATE.html` (471 lines)

**Reference Files Used:**
- `OD-CONVENTION-SPEC.md` (468 lines)
- `SOUL-DISCOVERIES.md` (300 lines)
- `tokens/colors.md`, `tokens/typography.md`, `tokens/spacing.md`, `tokens/geometry.md`

---

## AUDIT RESULTS

| Check | Result | Evidence |
|-------|--------|----------|
| CA-01 | **PASS** | AD-CONVENTION-SPEC.md exists and has 822 lines (>= 500 threshold) |
| CA-02 | **PASS** | All 16 sections present: 1 (Soul Compliance), 2 (Border System), 3 (Code Block Theme), 4 (Header Layout), 5 (Type Scale), 6 (Spacing Tokens), 7 (Color Application), 8 (Page Length Target), 9 (AD-006 Intentional Divergences), 10 (Unified :root Block), 11 (Required Base Styles) = INHERITED; 12 (CSS Grid Patterns), 13 (Flexbox Configurations), 14 (Axis Zone Tokens), 15 (Soul-Compliant Axis Transitions), 16 (Axis Accessibility Requirements) = AD-SPECIFIC |
| CA-03 | **PASS** | Every INHERITED section (1-11) has "INHERITED FROM: OD-CONV Section N" label. Verified: Section 1 -> "INHERITED FROM: OD-CONV Section 1", Section 2 -> "OD-CONV Section 2", Section 3 -> "OD-CONV Section 7", Section 4 -> "OD-CONV Section 4", Section 5 -> "OD-CONV Section 5", Section 6 -> "OD-CONV Section 6", Section 7 -> "OD-CONV Section 7", Section 8 -> "OD-CONV Section 8", Section 9 -> "OD-CONV Section 9", Section 10 -> "OD-CONV Section 10", Section 11 -> "OD-CONV Section 12" |
| CA-04 | **PASS** | Every AD-SPECIFIC section (12-16) has "AD-SPECIFIC" label. Verified: Section 12 -> "### AD-SPECIFIC" (line 437), Section 13 -> "### AD-SPECIFIC" (line 527), Section 14 -> "### AD-SPECIFIC" (line 570), Section 15 -> "### AD-SPECIFIC" (line 617), Section 16 -> "### AD-SPECIFIC" (line 677) |
| CA-05 | **PASS** | Every value has T1/T2 label. Spot-checked: Soul checklist items (lines 33-60) all have T1 or T2 labels. Border system (line 79) has T2 label. Code block (line 108) has T1+T2. Syntax highlighting (lines 111-117) all have T1. CSS Grid (line 459) has T2. Axis Zone (line 593) has T2. Transitions (line 633) has T2. Accessibility (line 690) has T2. No unlabeled values found. |
| CA-06 | **PASS** | Spot-checked 5 random T1 labels: (1) line 33 "T1 (COMP-F-001, geometry.md)" -- COMP-F-001 is a known component finding for border-radius: 0, geometry.md confirms --border-radius: 0. (2) line 44 "T1 (colors.md)" -- colors.md confirms locked palette values. (3) line 47 "T1 (typography.md)" -- typography.md confirms font trio. (4) line 112 "T1 (colors.md)" -- #6B9B7A confirmed in colors.md as accent-green (sage green equivalent). (5) line 186 "T1 (typography.md)" -- typography.md confirms font families and type scale. All 5 cite real sources with verifiable content. |
| CA-07 | **PASS** | Every value has INHERITED or AD-SPECIFIC label. Sections 1-11 values all carry "INHERITED". Sections 12-16 values all carry "AD-SPECIFIC". Exception within Section 4 (line 167): AD meta line format has "AD-SPECIFIC" label correctly, even within an inherited section. Section 8 (line 278): AD-006 exception has "AD-SPECIFIC" label. Section 14 (line 582): Inherited zone tokens are labeled "INHERITED | FROZEN" while extensions are "AD-SPECIFIC | DRAFT". |
| CA-08 | **PASS** | Every value has FROZEN or DRAFT label. All INHERITED values carry "FROZEN". All AD-SPECIFIC values carry "DRAFT". Verified systematically: Section 1 lines 33-60 all "FROZEN", Section 12 lines 459-522 all "DRAFT", Section 16 lines 690-755 all "DRAFT". |
| CA-09 | **PASS** | All AD-SPECIFIC values (sections 12-16) are labeled DRAFT. Verified: Section 12 sub-values (lines 459, 475, 487, 507, 522) all "DRAFT". Section 13 (lines 543, 558, 566) all "DRAFT". Section 14 (lines 593, 604, 612) all "DRAFT". Section 15 (lines 633, 648, 661, 672) all "DRAFT". Section 16 (lines 690, 702, 720, 742, 755) all "DRAFT". |
| CA-10 | **PASS** | All INHERITED values are labeled FROZEN. Verified: Section 1 (lines 33-60) all "FROZEN". Section 2 (lines 79, 85) "FROZEN". Section 3 (lines 108, 111-117, 130) all "FROZEN". Section 4 (line 163) "FROZEN". Section 5 (lines 186, 191) "FROZEN". Section 6 (line 222) "FROZEN". Section 7 (lines 245, 257, 260) "FROZEN". Section 8 (lines 268, 273) "FROZEN". Section 9 (line 294) "FROZEN". Section 10 (line 372) "FROZEN". Section 11 (line 432) "FROZEN". |
| CA-11 | **PASS** | AD-SOUL-TEMPLATE.html has `<style id="locked-layer">` block at line 19. |
| CA-12 | **PASS** | AD-SOUL-TEMPLATE.html has `<style id="axis-layer">` block at line 437. |
| CA-13 | **PASS** | Locked layer contains `/* DO NOT MODIFY */` comment at line 20: `/* DO NOT MODIFY -- programmatic diff verification */` |
| CA-14 | **FAIL** | Token value mismatch found. See FAILURE DETAIL below. |
| CA-15 | **PASS** | Template has: skip-link (line 444: `<a href="#main-content" class="skip-link">Skip to content</a>`), header with .header-inner (line 448: `<div class="header-inner">`), main#main-content (line 462: `<main id="main-content">`), version badge "v1 enriched" (line 451: `<span class="version-badge">v1 enriched</span>`). |
| CA-16 | **PASS** | Section 16 (Axis Accessibility) contains all 5 binary rules: (1) 16.1 "Source Order = Logical Reading Order" (line 681), (2) 16.2 "CSS `order` Property BANNED" (line 692), (3) 16.3 "Every Axis Zone = Section with aria-label" (line 704), (4) 16.4 "scroll-snap-type Requires aria-flowto" (line 722), (5) 16.5 "Focus Order Follows Reading Axis" (line 746). |

---

## FAILURE DETAIL

### CA-14: FAIL -- Token value mismatch in locked-layer

**Location:** AD-SOUL-TEMPLATE.html, line 27, inside `<style id="locked-layer">`

**Expected (from tokens/colors.md):**
```
--color-primary: #E83025;
```

**Found:**
```
--color-primary: #E83026;
```

**The discrepancy:** The last hex digit differs: `5` vs `6`. The token file (colors.md) specifies `#E83025`. The AD-CONVENTION-SPEC.md also specifies `#E83025` (line 309). But the AD-SOUL-TEMPLATE.html locked-layer uses `#E83026`.

**All other checked tokens MATCH:**
- `--color-background: #FEF9F5` -- MATCH (colors.md, template line 28)
- `--color-text: #1A1A1A` -- MATCH (colors.md, template line 29)
- `--font-display: 'Instrument Serif', Georgia, serif` -- MATCH (typography.md, template line 40)
- `--font-body: 'Inter', system-ui, sans-serif` -- MATCH (typography.md, template line 41)
- `--font-mono: 'JetBrains Mono', 'SF Mono', monospace` -- MATCH (typography.md, template line 42)
- `--border-radius: 0` -- MATCH (geometry.md, template line 53)
- `--box-shadow: none` -- MATCH (geometry.md, template line 54)
- All spacing tokens -- MATCH (spacing.md, template lines 57-67)
- All accent colors -- MATCH (colors.md, template lines 75-79)

**Severity:** CRITICAL

**Rationale:** `--color-primary` is the single most visible token in the system (Sanrok red). A 1-digit hex deviation from `#E83025` to `#E83026` is visually imperceptible but represents a soul violation. The locked-layer is explicitly labeled "DO NOT MODIFY -- programmatic diff verification" and must exactly match tokens/colors.md. Any mismatch defeats the verification purpose.

**Fix required:** Change line 27 of AD-SOUL-TEMPLATE.html from `#E83026` to `#E83025`.

---

## OD-CONV SECTION CROSS-REFERENCE

The AD spec references specific OD-CONVENTION-SPEC.md section numbers. Here is the cross-reference verification:

| AD Section | Claims "INHERITED FROM" | Actual OD Section | Match? |
|------------|------------------------|-------------------|--------|
| 1. Soul Compliance | OD-CONV Section 1 | OD Section 1: "Soul Compliance Checklist" | MATCH |
| 2. Border System | OD-CONV Section 2 | OD Section 2: "Border System (3 Categories)" | MATCH |
| 3. Code Block Theme | OD-CONV Section 7 | OD Section 3: "Code Block Theme" | **MISMATCH** |
| 4. Header Layout | OD-CONV Section 4 | OD Section 4: "Header Layout" | MATCH |
| 5. Type Scale | OD-CONV Section 5 | OD Section 5: "Type Scale" | MATCH |
| 6. Spacing Tokens | OD-CONV Section 6 | OD Section 6: "Spacing Tokens" | MATCH |
| 7. Color Application | OD-CONV Section 7 | OD Section 7: "Color Application" | MATCH |
| 8. Page Length Target | OD-CONV Section 8 | OD Section 8: "Page Length Target" | MATCH |
| 9. AD-006 Divergences | OD-CONV Section 9 | OD Section 9: "OD-006 Intentional Divergences" | MATCH |
| 10. Unified :root Block | OD-CONV Section 10 | OD Section 10: "Unified :root Block" | MATCH |
| 11. Required Base Styles | OD-CONV Section 12 | OD Section 12: "Required Base Styles (All ODs)" | MATCH |

### MISMATCH DETAIL

**AD Section 3 (Code Block Theme)** claims `INHERITED FROM: OD-CONV Section 7`, but the actual OD section for Code Block Theme is **Section 3**, not Section 7. OD Section 7 is "Color Application".

This appears to be a copy error. The content IS correctly inherited (the code block theme content in AD Section 3 matches OD Section 3's content). Only the reference number is wrong.

**Severity:** MEDIUM

**Note:** AD Section 7 (Color Application) also claims `INHERITED FROM: OD-CONV Section 7`, which IS correct. So there are two AD sections both claiming OD-CONV Section 7, when one of them (AD Section 3) should claim OD-CONV Section 3.

---

## ADDITIONAL OBSERVATIONS

### Content Changes Between OD and AD (within INHERITED sections)

1. **Section 1, Item 10:** OD says "fractal self-similarity at 4 scales (page, section, component, character)". AD says "fractal self-similarity at 5 scales (navigation, page, section, component, character)". This is a content change within an INHERITED section. The AD version adds the navigation scale and cites "elevated to 5 scales in OD-006 v3". This is a legitimate evolution documented with provenance, but technically the value is not verbatim-inherited.

2. **Section 2:** AD adds "axis zone frames" to Cat 1 examples and adds an "Orthogonal encoding note" paragraph about stratum LEFT borders vs content-block TOP borders from ACCUMULATED-IDENTITY-v1.1. This is additive content within an INHERITED section.

3. **Section 4:** AD changes header meta line from "OD-NNN" to "AD-NNN" and "DENSITY: PATTERN" to "AXIS: PATTERN". This change is explicitly documented as AD-SPECIFIC within the section.

4. **Section 5:** AD adds "axis zones" to the --type-subsection comment. Minor wording change within inherited content.

These are all documented and labeled appropriately. None break the inheritance model.

---

## SUMMARY

| Category | Count |
|----------|-------|
| **PASS** | 15 |
| **FAIL** | 1 |
| **Total Checks** | 16 |

### Failures

| # | Check | Severity | Issue |
|---|-------|----------|-------|
| 1 | CA-14 | CRITICAL | `--color-primary: #E83026` in template locked-layer should be `#E83025` per tokens/colors.md |

### Cross-Reference Issues

| # | Severity | Issue |
|---|----------|-------|
| 1 | MEDIUM | AD Section 3 claims "INHERITED FROM: OD-CONV Section 7" but should be "OD-CONV Section 3" (Code Block Theme) |

### Overall Assessment

The AD-CONVENTION-SPEC.md is a well-structured 822-line document that correctly extends OD conventions with 5 AD-specific sections. The labeling system (T1/T2, INHERITED/AD-SPECIFIC, FROZEN/DRAFT) is consistently applied throughout. The AD-SOUL-TEMPLATE.html is properly structured with locked-layer and axis-layer separation, all required structural elements, and comprehensive base styles.

The single CRITICAL failure (1-digit hex deviation in --color-primary) must be fixed before the template can be used for building. The MEDIUM cross-reference error (Section 3 claiming OD-CONV Section 7 instead of Section 3) should be corrected for provenance accuracy.
