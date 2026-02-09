# Structural Audit: Token Verification
## structural-tokens — Captain-Structural v2 Worker Output
**Date:** 2026-02-09 | **Method:** Playwright getComputedStyle(document.documentElement).getPropertyValue()

---

## Summary

All 6 OD files checked against 28 expected :root token values from OD-CONVENTION-SPEC.md Section 10.

| OD File | Matches | Mismatches | Missing |
|---------|---------|------------|---------|
| OD-001 | 28/28 | 0 | 0 |
| OD-002 | 28/28 | 0 | 0 |
| OD-003 | 28/28 | 0 | 0 |
| OD-004 | 28/28 | 0 | 0 |
| OD-005 | 28/28 | 0 | 0 |
| OD-006 | 27/28 | 1 (sanctioned) | 0 |

**RESULT: PASS — 100% token compliance across all 6 ODs**

---

## Tokens Verified (28 total)

### Colors (6 tokens) — ALL MATCH
| Token | Expected | OD-001 | OD-002 | OD-003 | OD-004 | OD-005 | OD-006 |
|-------|----------|--------|--------|--------|--------|--------|--------|
| --color-primary | #E83025 | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH |
| --color-background | #FEF9F5 | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH |
| --color-text | #1A1A1A | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH |
| --color-text-secondary | #666666 | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH |
| --color-border | #E0D5C5 | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH |
| --color-border-subtle | #F0EBE3 | MATCH | MATCH | MATCH | MATCH | MATCH | MATCH |

### Typography (6 tokens) — ALL MATCH
| Token | Expected | All ODs |
|-------|----------|---------|
| --font-display | 'Instrument Serif', Georgia, serif | MATCH |
| --font-body | 'Inter', system-ui, sans-serif | MATCH |
| --font-mono | 'JetBrains Mono', 'SF Mono', monospace | MATCH |
| --type-section | 1.625rem | MATCH |
| --type-subsection | 1.375rem | MATCH |
| --type-body | 1rem | MATCH |
| --type-code | 0.875rem | MATCH |
| --type-meta | 0.75rem | MATCH |

### --type-page (Sanctioned Divergence)
| Token | Expected | OD-001-005 | OD-006 |
|-------|----------|------------|--------|
| --type-page | 2.5rem | 2.5rem MATCH | **3rem** |

OD-006 declares `--type-page: 3rem` (48px). This is the ONLY sanctioned divergence per OD-CONVENTION-SPEC Section 9: "OD-006 may use a LARGER title (--type-page at 3rem) as its editorial dialect intentionally demands stronger typographic presence."

**VERDICT: Not a violation. Sanctioned override confirmed.**

### Geometry (2 tokens) — ALL MATCH
| Token | Expected | All ODs |
|-------|----------|---------|
| --border-radius | 0 | MATCH |
| --box-shadow | none | MATCH |

### Spacing (5 tokens) — ALL MATCH
| Token | Expected | All ODs |
|-------|----------|---------|
| --space-1 | 4px | MATCH |
| --space-2 | 8px | MATCH |
| --space-4 | 16px | MATCH |
| --space-8 | 32px | MATCH |
| --space-16 | 64px | MATCH |

### Accent Colors (5 tokens) — ALL MATCH
| Token | Expected | All ODs |
|-------|----------|---------|
| --accent-blue | #4A90D9 | MATCH |
| --accent-green | #4A9D6B | MATCH |
| --accent-coral | #C97065 | MATCH |
| --accent-amber | #D97706 | MATCH |
| --accent-purple | #7C3AED | MATCH |

---

## Findings

**Total: 0 findings.** All tokens are compliant. The single OD-006 divergence is explicitly sanctioned.
