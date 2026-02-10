# Weaver Audit Cross-Reference Synthesis

**Weaver:** Audit Weaver
**Date:** 2026-02-10
**Reports Synthesized:** 23 (6 spacing, 6 overflow, 6 fresh-eyes, 3 visual, 1 structural, 1 provenance)

---

## 1. De-Duplicated Findings (Same Issue Found by Multiple Auditors)

### DEDUP-001: Header Padding Convention Violation (ALL 6 AD files)
- **Spacing-A (AD-001):** F6/F7 CRAMPED -- `.header-inner` uses `var(--space-12) var(--space-6)` (48px 24px) vs convention's `var(--space-16) var(--space-8)` (64px 32px)
- **Spacing-A (AD-002):** F1 CRAMPED -- same header padding deviation
- **Spacing-A (AD-003):** Finding 9.1 BROKEN -- same header padding deviation
- **Spacing-A (AD-004):** Finding #1 BROKEN -- same header padding deviation
- **Spacing-A (AD-005):** Finding 6 INCONSISTENT -- header padding 48px/24px vs convention 64px/32px
- **Spacing-A (AD-006):** Dimension 1 CRAMPED -- header padding 48px/24px vs convention 64px/32px
- **Overflow-B (AD-002):** B-006 IMBALANCED -- header padding less generous than OD
- **Overflow-B (AD-006):** B-008 IMBALANCED -- bento grid at medium viewports
- **Structural:** CHECK 1 -- all files compared against template
- **CONFIDENCE:** VERY HIGH (6/6 independent spacing auditors + overflow auditors confirm)
- **VERDICT:** SYSTEMIC -- Convention Spec Section 4 mandates 64px/32px. All 6 AD files use 48px/24px. This is a template-level bug inherited by all builders.

### DEDUP-002: Callout Label Font Size 10px vs 12px (ALL 6 AD files)
- **Spacing-A (AD-005):** Finding 9 CRAMPED -- `.callout__label` uses `0.625rem` (10px) vs `--type-meta` token (12px)
- **Overflow-B (AD-001):** IMBALANCED -- callout labels 10px vs OD 12px
- **Overflow-B (AD-002):** B-001 IMBALANCED -- callout label 10px, 20% smaller than OD 12px
- **Overflow-B (AD-003):** Finding 11.2 IMBALANCED -- 10px below 12px accessibility minimum
- **Overflow-B (AD-005):** Finding 11.2 OVERFLOW -- 10px below OD 12px, not using `--type-meta`
- **Overflow-B (AD-006):** B-021 BROKEN -- callout label 10px, should be 12px `var(--type-meta)`
- **CONFIDENCE:** VERY HIGH (6 independent auditors confirm across all files)
- **VERDICT:** SYSTEMIC -- All 6 files use hardcoded `0.625rem` (10px) instead of `var(--type-meta)` (12px). Template-level bug.

### DEDUP-003: Body Line-Height 1.6 vs OD 1.7 (ALL 6 AD files)
- **Spacing-A (AD-002):** F5 ACCEPTABLE -- line-height 1.6 vs OD 1.7
- **Spacing-A (AD-003):** Finding 3.2 INCONSISTENT -- line-height 1.6 vs OD 1.7
- **Spacing-A (AD-004):** Finding #2 CRAMPED -- line-height 1.6 vs OD 1.7
- **Spacing-A (AD-005):** Dimension 7 ACCEPTABLE -- line-height 1.6 vs OD 1.7
- **Spacing-A (AD-006):** Dimension 7 INCONSISTENT -- line-height 1.6 vs OD 1.7
- **CONFIDENCE:** HIGH (5 independent auditors confirm)
- **VERDICT:** SYSTEMIC -- Convention spec is silent on body line-height, but OD gold standard consistently uses 1.7. Template uses 1.6.

### DEDUP-004: AD-002 Callout border-radius: 4px Soul Violation
- **Spacing-A (AD-002):** Finding F3 INCONSISTENT -- `.callout { border-radius: 4px }` overrides `:where()` reset
- **Overflow-B (AD-002):** B-021 BROKEN -- Soul Piece #1 violation, `.callout` at line 367
- **Visual-1 (AD-002):** FAIL -- 6 callout elements with border-radius: 4px at both viewports
- **Structural:** CHECK 5 FAIL -- `border-radius: 4px` on `.callout` at L367
- **CONFIDENCE:** DEFINITIVE (4 independent auditors, including programmatic DOM check)
- **VERDICT:** CONFIRMED SOUL VIOLATION -- AD-002 only. Fix: remove `border-radius: 4px` from `.callout`.

### DEDUP-005: AD-004 box-shadow on pre Elements
- **Visual-2 (AD-004):** FAIL -- 5 `<pre>` elements with `box-shadow: rgba(0,0,0,0.1) 0px 4px 12px 0px` at both viewports
- **Structural:** CHECK 1 FAIL + CHECK 6 FAIL -- `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` on `pre` at L261
- **CONFIDENCE:** DEFINITIVE (2 independent auditors, programmatic DOM verification)
- **VERDICT:** CONFIRMED SOUL VIOLATION -- AD-004 only. Fix: remove box-shadow from `pre` rule.

### DEDUP-006: AD-006 box-shadow on pre at 768px Only
- **Visual-3 (AD-006):** FAIL -- 5 `<pre>` elements with box-shadow at 768px only (passes at 1440px)
- **CONFIDENCE:** HIGH (single auditor but programmatic DOM check)
- **VERDICT:** CONFIRMED SOUL VIOLATION -- AD-006 at 768px only. Responsive-specific bug.

### DEDUP-007: AD-001 td 2px Border (Locked-Layer Deviation)
- **Overflow-B (AD-001):** BROKEN -- `td { border-bottom: 2px solid }` violates OD-F-AP-001
- **Structural:** CHECK 1 FAIL + CHECK 8 FAIL -- 2px border in locked-layer td
- **CONFIDENCE:** DEFINITIVE (2 independent auditors)
- **VERDICT:** CONFIRMED -- AD-001 locked-layer deviation. Template says 1px, AD-001 uses 2px.

### DEDUP-008: AD-003 h1 Hardcoded Font-Size (Locked-Layer Deviation)
- **Structural:** CHECK 1 FAIL -- `h1 { font-size: 2.8rem }` instead of `var(--type-page)`
- **CONFIDENCE:** HIGH (structural auditor verified against template)
- **VERDICT:** CONFIRMED -- AD-003 locked-layer uses hardcoded value instead of token.

### DEDUP-009: Tables Lack overflow-x: auto Wrapper (AD-001, AD-002, AD-006)
- **Overflow-B (AD-001):** OVERFLOW -- 5 tables without overflow wrapper
- **Overflow-B (AD-002):** B-008 OVERFLOW -- decision matrix table no overflow wrapper
- **Overflow-B (AD-006):** B-009 OVERFLOW -- transition matrix table no overflow wrapper
- **CONFIDENCE:** HIGH (3 independent auditors across 3 files)
- **VERDICT:** CONFIRMED -- Multiple AD files lack table overflow wrappers that OD files have.

### DEDUP-010: Callout Margin Asymmetry (AD-001, AD-004, AD-005)
- **Spacing-A (AD-001):** F5 INCONSISTENT -- callout margin-bottom: 32px only vs OD symmetric margin: 24px 0
- **Spacing-A (AD-004):** Finding #5 INCONSISTENT -- callout 0 top / 32px bottom vs OD 24px/24px
- **Spacing-A (AD-005):** Finding 7 INCONSISTENT -- same pattern
- **CONFIDENCE:** HIGH (3 independent auditors)
- **VERDICT:** SYSTEMIC template pattern -- all AD callouts use bottom-only margin.

### DEDUP-011: Missing RAR Sections (AD-001, AD-003, AD-005, AD-006)
- **Structural:** CHECK 3 FAIL -- 4 of 6 files missing "RESEARCH APPLICATION RECORD"
- **CONFIDENCE:** HIGH (structural grep verification)
- **VERDICT:** CONFIRMED -- Only AD-002 and AD-004 have RAR sections.

### DEDUP-012: Dark Code Blocks Create Visual Holes
- **Fresh-C (AD-001):** F-C3 CONCERN -- code blocks create harsh contrast jumps
- **Fresh-C (AD-002):** Finding 3 CONCERN -- dark code block creates visual "hole"
- **Fresh-C (AD-003):** Finding 2 NITPICK -- dark code blocks fragment page flow
- **Fresh-C (AD-004):** F-C-004-1 MEDIUM -- code blocks visually overpower conceptual content
- **Fresh-C (AD-005):** F1 MEDIUM -- 3-4 consecutive code blocks create gray wall
- **Fresh-C (AD-006):** F1 HIGH -- dark block breaks page color language
- **CONFIDENCE:** VERY HIGH (all 6 fresh-eyes auditors independently flagged this)
- **VERDICT:** SYSTEMIC DESIGN PATTERN -- dark code blocks on warm cream background. Not a soul violation (dark backgrounds are convention-compliant), but a universal UX concern.

### DEDUP-013: No Navigation Aids on Long Pages
- **Fresh-C (AD-001):** F-C1 REJECT -- no TOC, scroll indicator, or back-to-top on ~12,000px page
- **Fresh-C (AD-006):** F2 HIGH -- ~14,500px page without visual wayfinding
- **CONFIDENCE:** HIGH (2 independent fresh-eyes auditors on the longest pages)
- **VERDICT:** DESIGN CONCERN -- applicable to all 6 AD files.

---

## 2. Contradiction Reconciliation

### CONTRA-001: AD-002 Callout Padding -- CRAMPED vs MORE GENEROUS?
- **Spacing-A (AD-002):** Initially said CRAMPED, then REVISED to INCONSISTENT -- "AD callouts have MORE vertical padding (24px vs OD 16px). This is not cramped; it's more generous."
- **Spacing-A (AD-001):** F3 -- AD callouts have MORE vertical padding (24px) than OD (16px)
- **RESOLUTION:** Both auditors agree: AD callouts are MORE generous than OD, not less. The initial "CRAMPED" label was self-corrected. Callout vertical padding is an INCONSISTENCY where AD exceeds OD, not a deficit.

### CONTRA-002: AD-003 Bento Grid Gap -- Is 24px Acceptable?
- **Spacing-A (AD-003):** Finding 4.1 BROKEN -- convention says `--space-8` (32px), AD uses `--space-6` (24px)
- **Spacing-A (AD-005):** Finding 5 ACCEPTABLE -- both AD and OD use 24px grid gap
- **RESOLUTION:** Context-dependent. AD-003's bento grid gap (24px) violates Convention Spec Section 12.4 which explicitly defines `.bento-grid { gap: var(--space-8) }`. AD-005's territory grid gap (24px) matches OD-005 exactly. The convention spec is specific to bento grids; other grids may use 24px legitimately.

### CONTRA-003: AD-006 Inline Code -- BROKEN or CORRECT?
- **Spacing-A (AD-006):** Dimension 12 BROKEN -- cross-document inconsistency (OD-006 lacks proper inline code styling)
- **NOTE:** Spacing-A explicitly states "AD-006 is correct here. OD-006 is deficient. AD should NOT change."
- **RESOLUTION:** Not a true AD-006 deficiency. OD-006 is the deficient file. AD-006 follows convention spec correctly for inline code. Remove from AD-006 fix list.

### CONTRA-004: Section-to-Section Spacing Approaches
- **Spacing-A auditors:** Mixed verdicts on whether AD section spacing is CRAMPED, INCONSISTENT, or ACCEPTABLE depending on the file.
- **RESOLUTION:** AD files use diverse inter-section mechanisms (padding vs margins vs explicit breathing zones). Some match OD, some diverge. The key finding is that AD-003 (64px via `--space-chapter`) is tighter than OD-003's ISLANDS pattern (80px+ sparse-sea), while AD-006 (128px combined section padding) is MORE generous than OD-006 (64-80px). No single standard applies.

---

## 3. Cross-Auditor Confirmations (HIGH Confidence)

| ID | Finding | Confirmed By | Confidence |
|----|---------|-------------|------------|
| CONF-001 | Header padding 48/24 vs convention 64/32 | All 6 Spacing-A, 3 Overflow-B, Structural | DEFINITIVE |
| CONF-002 | Callout label 10px vs standard 12px | 6 independent auditors | DEFINITIVE |
| CONF-003 | AD-002 border-radius: 4px soul violation | Spacing-A, Overflow-B, Visual-1, Structural | DEFINITIVE |
| CONF-004 | AD-004 box-shadow soul violation | Visual-2, Structural | DEFINITIVE |
| CONF-005 | Body line-height 1.6 vs OD 1.7 | 5 Spacing-A auditors | DEFINITIVE |
| CONF-006 | AD-001 td 2px border violation | Overflow-B, Structural | DEFINITIVE |
| CONF-007 | Dark code blocks as UX concern | All 6 Fresh-Eyes auditors | DEFINITIVE |
| CONF-008 | Tables lack overflow wrappers | 3 Overflow-B auditors | HIGH |
| CONF-009 | Callout margin asymmetry | 3 Spacing-A auditors | HIGH |
| CONF-010 | AD-003 bento grid gap 24px vs 32px | Spacing-A AD-003 | HIGH |
| CONF-011 | AD-006 box-shadow at 768px | Visual-3 | HIGH |
| CONF-012 | 4 files missing RAR sections | Structural | HIGH |
| CONF-013 | AD-003 h1 hardcoded font-size | Structural | HIGH |
| CONF-014 | AD-002 tension meter inversion | Overflow-B AD-002 | HIGH |

---

## 4. Per-Page Summary

### AD-001 (Z-Pattern)
| Auditor | Findings | Severity Distribution |
|---------|----------|----------------------|
| Spacing-A | 7 | 0 BROKEN, 2 CRAMPED, 3 INCONSISTENT, 2 ACCEPTABLE |
| Overflow-B | 27 | 2 BROKEN, 2 OVERFLOW, 1 IMBALANCED, 22 ACCEPTABLE |
| Fresh-C | 13 | 1 REJECT, 7 CONCERN, 5 NITPICK |
| Visual-1 | 12/12 PASS | CLEAN |
| Structural | 9/12 PASS | 3 FAIL (locked-layer td 2px, RAR missing, 2px border) |
**Total unique actionable findings:** 8 (2 BROKEN, 2 OVERFLOW, 1 REJECT, 3 CRAMPED/INCONSISTENT)

### AD-002 (F-Pattern)
| Auditor | Findings | Severity Distribution |
|---------|----------|----------------------|
| Spacing-A | 5 | 0 BROKEN, 1 CRAMPED, 3 INCONSISTENT, 1 ACCEPTABLE |
| Overflow-B | 26 | 2 BROKEN, 1 OVERFLOW, 5 IMBALANCED, 18 ACCEPTABLE |
| Fresh-C | 5 | 0 REJECT, 4 CONCERN, 1 NITPICK |
| Visual-1 | 10/12 PASS | 1 FINDING (border-radius 4px on 6 callouts) |
| Structural | 10/12 PASS | 1 FAIL (border-radius) + 1 CONDITIONAL |
**Total unique actionable findings:** 7 (2 BROKEN soul violations, 1 OVERFLOW, 1 CRAMPED, 3 INCONSISTENT)

### AD-003 (Bento Grid)
| Auditor | Findings | Severity Distribution |
|---------|----------|----------------------|
| Spacing-A | 12 | 2 BROKEN, 3 CRAMPED, 4 INCONSISTENT, 3 ACCEPTABLE |
| Overflow-B | 18 | 1 BROKEN, 3 OVERFLOW, 7 IMBALANCED, 7 ACCEPTABLE |
| Fresh-C | 7 | 0 REJECT, 4 CONCERN, 3 NITPICK |
| Visual-2 | 12/12 PASS | CLEAN |
| Structural | 10/12 PASS | 2 FAIL (locked-layer h1 hardcode, RAR missing) |
**Total unique actionable findings:** 10 (3 BROKEN, 3 OVERFLOW, 3 CRAMPED, 4 INCONSISTENT)

### AD-004 (Spiral)
| Auditor | Findings | Severity Distribution |
|---------|----------|----------------------|
| Spacing-A | 12 | 2 BROKEN, 3 CRAMPED, 5 INCONSISTENT, 2 ACCEPTABLE |
| Overflow-B | 14 | 0 BROKEN, 2 OVERFLOW, 4 IMBALANCED, 8 ACCEPTABLE |
| Fresh-C | 5 | 0 REJECT, 0 CONCERN (all Medium/Low) |
| Visual-2 | 10/12 PASS | 1 FINDING (box-shadow on 5 pre elements) |
| Structural | 9/12 PASS | 2 FAIL (box-shadow, locked-layer deviation) |
**Total unique actionable findings:** 7 (1 BROKEN soul violation, 2 OVERFLOW, 2 CRAMPED, 5 INCONSISTENT)

### AD-005 (Choreography)
| Auditor | Findings | Severity Distribution |
|---------|----------|----------------------|
| Spacing-A | 9 | 0 BROKEN, 1 CRAMPED, 3 INCONSISTENT, 5 ACCEPTABLE |
| Overflow-B | 12 | 0 BROKEN, 3 OVERFLOW, 2 IMBALANCED, 7 ACCEPTABLE |
| Fresh-C | 5 | 0 REJECT, 0 CONCERN (all Medium) |
| Visual-3 | 14/14 PASS | CLEAN |
| Structural | 10/12 PASS | 1 FAIL (RAR missing) + 1 CONDITIONAL |
**Total unique actionable findings:** 5 (0 BROKEN, 3 OVERFLOW, 1 CRAMPED, 3 INCONSISTENT)

### AD-006 (Compound)
| Auditor | Findings | Severity Distribution |
|---------|----------|----------------------|
| Spacing-A | 12 | 1 BROKEN, 3 CRAMPED, 5 INCONSISTENT, 3 ACCEPTABLE |
| Overflow-B | 19 | 2 BROKEN, 5 OVERFLOW, 7 IMBALANCED, 5 ACCEPTABLE |
| Fresh-C | 6 | 0 REJECT, 2 HIGH, 2 MEDIUM, 2 LOW |
| Visual-3 | 13/14 PASS | 1 FINDING (box-shadow on pre at 768px) |
| Structural | 11/12 PASS | 1 FAIL (RAR missing) |
**Total unique actionable findings:** 12 (3 BROKEN, 5 OVERFLOW, 3 CRAMPED, 5 INCONSISTENT)

---

## 5. PLANTED VIOLATIONS Detected

### Soul Violations Found
| Type | File | Evidence | Detected By |
|------|------|----------|-------------|
| border-radius != 0 | AD-002 | `.callout { border-radius: 4px }` at axis-layer L367 | Spacing-A, Overflow-B, Visual-1, Structural |
| box-shadow != none | AD-004 | `pre { box-shadow: 0 4px 12px rgba(0,0,0,0.1) }` at locked-layer L261 | Visual-2, Structural |
| box-shadow != none | AD-006 | `pre` elements get box-shadow at 768px only | Visual-3 |
| 2px border | AD-001 | `td { border-bottom: 2px solid }` at locked-layer L504 | Overflow-B, Structural |

### Hardcoded Values (Token Violations)
| Type | File | Evidence | Detected By |
|------|------|----------|-------------|
| Wrong font-size | AD-003 | `h1 { font-size: 2.8rem }` instead of `var(--type-page)` | Structural |
| Below-minimum font | ALL 6 | `.callout__label { font-size: 0.625rem }` (10px) vs `--type-meta` (12px) | Multiple auditors |
| Below-minimum font | AD-006 | `.pattern-echo__label { font-size: 9px }` | Overflow-B AD-006 |

### Wrong Finding IDs / Bad Citations
- **None detected.** All 28 finding IDs (AD-F-001 through AD-F-028) are in correct ranges per Structural CHECK 10.
- All EXT-AXIS-* citations verified as genuine per Provenance PA-06, PA-07.
- All R4-NNN citations spot-checked as real per Provenance PA-08.

### Broken References
- **None detected.** All BUILT-ON backward references verified as existing files per Provenance PA-09.
- Provenance PA-02 confirms all threading header references point to real files.

### Metadata Discrepancies (Non-Blocking)
| Issue | File | Details |
|-------|------|---------|
| YAML total_findings: 29 | AD-outbound-findings.md | Should be 28 (off-by-one) |
| Status: PENDING | STAGE-HEADER.md | Should reflect build completion |
| Sections 12-16: DRAFT | AD-CONVENTION-SPEC.md | Should be FROZEN post-build |
| PIPELINE-MANIFEST stale | PIPELINE-MANIFEST.md | Still says "AD not yet started" |

---

## 6. Provenance Chain Summary

| Check | Result |
|-------|--------|
| PA-01: STAGE-HEADER exists | PASS |
| PA-02: BUILT-ON references valid | PASS |
| PA-03: MUST-HONOR soul pieces | PASS |
| PA-04: Finding IDs correct ranges | PASS |
| PA-05: No IDs outside range | PASS |
| PA-06: Citations reference real findings | PASS |
| PA-07: Anti-citation-theater (EXT-AXIS) | PASS |
| PA-08: Anti-citation-theater (R4-NNN) | PASS |
| PA-09: Backward traversal valid | PASS |
| PA-10: Density pairings match HANDOFF | PASS |
| PA-11: Convention spec FROZEN label | FAIL (Sections 12-16 still DRAFT) |
| PA-12: DD-F-012 consumption documented | FAIL (implicit but not explicit) |

**Provenance: 10/12 PASS. Both failures are documentation label issues, not chain breaks.**

---

## 7. Visual Soul Compliance Summary

| Page | border-radius | box-shadow | drop-shadow | 2px border | rgba opacity | fonts | Overall |
|------|--------------|------------|-------------|------------|-------------|-------|---------|
| AD-001 | PASS | PASS | PASS | PASS | PASS | PASS | CLEAN |
| AD-002 | **FAIL (6)** | PASS | PASS | PASS | PASS | PASS | 1 VIOLATION |
| AD-003 | PASS | PASS | PASS | PASS | PASS | PASS | CLEAN |
| AD-004 | PASS | **FAIL (5)** | PASS | PASS | PASS | PASS | 1 VIOLATION |
| AD-005 | PASS | PASS | PASS | PASS | PASS | PASS | CLEAN |
| AD-006 (1440) | PASS | PASS | PASS | PASS | PASS | PASS | CLEAN |
| AD-006 (768) | PASS | **FAIL (5)** | PASS | PASS | PASS | PASS | 1 VIOLATION |

**3 soul violations across 3 files. AD-001, AD-003, AD-005 are fully clean.**

---

## 8. Fresh-Eyes Unique Contributions

Findings ONLY caught by fresh-eyes auditors (not by technical Spacing-A or Overflow-B):

| ID | Finding | AD File | Severity |
|----|---------|---------|----------|
| FE-001 | No navigation aids on long pages | AD-001, AD-006 | REJECT/HIGH |
| FE-002 | Z-pattern page doesn't use Z-pattern layout (structural irony) | AD-001 | CONCERN |
| FE-003 | Visual variety regression vs OD (tables dominate) | AD-001, AD-002 | CONCERN |
| FE-004 | Internal process documentation exposed to readers (RAR, verification) | AD-003 | CONCERN |
| FE-005 | Code block visual weight creates hierarchy inversion | AD-004 | MEDIUM |
| FE-006 | Traffic-light badge color semantics may conflict with anti-physical soul | AD-004 | HIGH |
| FE-007 | Section heading hierarchy flattens mid-page | AD-002, AD-005 | CONCERN/MEDIUM |
| FE-008 | Responsive breathing room degradation at 768px | AD-006 | MEDIUM |
| FE-009 | Mixed metaphorical/technical naming register | AD-005 | MEDIUM |
| FE-010 | Irregular callout rhythm across pages | AD-006 | LOW |

**Fresh-eyes produced 10 unique findings not caught by technical auditors. The most impactful are FE-001 (navigation aids) and FE-006 (traffic-light badge semantics).**

---

*Weaver audit synthesis complete. 2026-02-10.*
