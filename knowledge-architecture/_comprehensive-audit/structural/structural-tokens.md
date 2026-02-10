# Structural Audit: Convention :root vs Computed Token Verification

**Worker:** structural-tokens
**Captain:** Captain-Structural
**Method:** Playwright getComputedStyle() on :root + element-level verification
**Date:** 2026-02-09

---

## OD Token Compliance (Convention Spec Section 10)

### :root Token Values

| Token | Convention Value | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 | Status |
|-------|-----------------|--------|--------|--------|--------|--------|--------|--------|
| --color-primary | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | #E83025 | PASS |
| --color-background | #FEF9F5 | #FEF9F5 | (verified) | (verified) | (verified) | (verified) | (verified) | PASS |
| --color-text | #1A1A1A | #1A1A1A | (verified) | (verified) | (verified) | (verified) | (verified) | PASS |
| --type-page | 2.5rem | 2.5rem | 2.5rem | 2.5rem | 2.5rem | 2.5rem | **3rem** | PASS* |
| --type-section | 1.625rem | 1.625rem | (verified) | (verified) | (verified) | (verified) | (verified) | PASS |
| --type-body | 1rem | 1rem | (verified) | (verified) | (verified) | (verified) | (verified) | PASS |
| --font-display | 'Instrument Serif'... | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH | PASS |
| --font-body | 'Inter'... | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH | PASS |
| --font-mono | 'JetBrains Mono'... | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH | PASS |
| --border-radius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | PASS |
| --box-shadow | none | none | none | none | none | none | none | PASS |

*OD-006 uses --type-page: 3rem per sanctioned divergence (Convention Spec Section 9).

### Element-Level Font Verification

| Element | Convention Font | Convention Size | Actual Font (computed) | Actual Size | Status |
|---------|----------------|-----------------|----------------------|-------------|--------|
| h1 (OD-001-005) | Instrument Serif | 40px (2.5rem) | Instrument Serif | 40px | PASS |
| h1 (OD-006) | Instrument Serif | 48px (3rem) | Instrument Serif | 48px | PASS |
| h2 | Instrument Serif | 26px (1.625rem) | Instrument Serif | 26px | PASS |
| p body | Inter | 16px (1rem) | Inter | 16px | PASS |
| code inline | JetBrains Mono | 14px (0.875rem) | JetBrains Mono | 11-14px* | NOTE |

*Inline code size varies: OD-003/004 report 14px (correct), OD-001/002/005 report 10.8-11px (undersized). This is likely the computed result of `font-size: 0.9em` on inline code inside a context where the parent font-size is already reduced. The :root token is correctly set to 0.875rem, but inherited cascading produces smaller computed values.

---

## DD Token Compliance

### :root Token Values

| Token | Convention Value | DD-001-006 | Status |
|-------|-----------------|------------|--------|
| --color-primary | #E83025 | #E83025 | PASS |
| --type-page | 2.5rem | **(empty)** | **FAIL** |
| --border-radius | 0 | 0 | PASS |

**STR-TOK-001** | Medium | ALL DD files | --type-page token is not defined in DD :root blocks. DD files use inline font-sizes (32px for h1, 14px for body) instead of the convention token system. This is a pre-convention artifact.

### Element-Level Font Verification (DD)

| Element | Convention | DD Computed | Status |
|---------|-----------|-------------|--------|
| h1 | 40px Instrument Serif | 32px Instrument Serif | **DIVERGENT** |
| p body | 16px Inter | 14px Inter | **DIVERGENT** |
| code | 14px JetBrains Mono | 11-14px monospace | **DIVERGENT** |

**STR-TOK-002** | Medium | ALL DD files | DD type scale does not match convention. h1 is 32px (vs 40px), body is 14px (vs 16px), code uses generic monospace (vs JetBrains Mono).

---

## Summary

| Domain | Token Match | Element Match | Overall |
|--------|-----------|---------------|---------|
| OD files | 11/11 PASS | Font/size mostly PASS (inline code undersized in 3 files) | **PASS with notes** |
| DD files | 2/3 PASS, 1 FAIL | h1/body/code all divergent from convention | **EXPECTED divergence** (pre-convention) |

The OD files are convention-compliant at the :root token level. The DD files predate the convention and have known divergences that should be addressed during DD re-enrichment.
