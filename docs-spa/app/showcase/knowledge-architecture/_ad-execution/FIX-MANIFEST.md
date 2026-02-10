# AD Fix Manifest — Phase 3

**Date:** 2026-02-10
**Source:** weaver-audit-synthesis.md + structural-audit-report.md + visual-audit-*.md
**Status:** COMPLETE — all fixes applied and verified

---

## SYSTEMIC FIXES (ALL 6 FILES)

These apply to every AD file. Template-level bugs inherited by all builders.

### SYS-1: Header Padding (DEDUP-001)
- **Current:** `.header-inner { padding: var(--space-12) var(--space-6) }` (48px 24px)
- **Fix:** Change to `padding: var(--space-16) var(--space-8)` (64px 32px)
- **Evidence:** Convention Spec Section 4 mandates 64px/32px. All 6 spacing auditors confirm.

### SYS-2: Callout Label Font Size (DEDUP-002)
- **Current:** `.callout__label { font-size: 0.625rem }` (10px)
- **Fix:** Change to `font-size: var(--type-meta)` (12px)
- **Evidence:** 6 independent auditors confirm. 10px below accessibility minimum.

### SYS-3: Body Line-Height (DEDUP-003)
- **Current:** `body { line-height: 1.6 }`
- **Fix:** Change to `line-height: 1.7`
- **Evidence:** OD gold standard consistently uses 1.7. 5 independent auditors confirm.

### SYS-4: Callout Margin Asymmetry (DEDUP-010)
- **Current:** `.callout { margin: 0 0 var(--space-8) 0 }` (bottom-only)
- **Fix:** Change to `margin: var(--space-6) 0` (symmetric 24px top and bottom)
- **Evidence:** OD uses symmetric margins. 3 independent auditors confirm.

---

## PER-FILE FIXES

### AD-001 (Z-Pattern) — Fixer-A
| # | Type | Issue | Fix | Line Ref |
|---|------|-------|-----|----------|
| 1 | SOUL | `td { border-bottom: 2px solid }` in locked-layer | Change to `1px solid` | L504 |
| 2 | OVERFLOW | 5 tables without overflow-x wrapper | Add `.table-wrapper { overflow-x: auto }` around tables | Multiple |
| 3 | SYSTEMIC | SYS-1, SYS-2, SYS-3, SYS-4 | Apply all 4 systemic fixes | Various |

### AD-002 (F-Pattern) — Fixer-B
| # | Type | Issue | Fix | Line Ref |
|---|------|-------|-----|----------|
| 1 | SOUL | `.callout { border-radius: 4px }` in axis-layer | Remove `border-radius: 4px` (inherits `:where() border-radius: 0`) | L367 |
| 2 | OVERFLOW | Decision matrix table no overflow wrapper | Add `.table-wrapper { overflow-x: auto }` | N/A |
| 3 | SYSTEMIC | SYS-1, SYS-2, SYS-3, SYS-4 | Apply all 4 systemic fixes | Various |

### AD-003 (Bento Grid) — Fixer-C
| # | Type | Issue | Fix | Line Ref |
|---|------|-------|-----|----------|
| 1 | LOCKED | `h1 { font-size: 2.8rem }` hardcoded | Change to `var(--type-page)` | L134 |
| 2 | CONVENTION | `.bento-grid { gap: var(--space-6) }` (24px) | Change to `gap: var(--space-8)` (32px) per convention Section 12.4 | N/A |
| 3 | SYSTEMIC | SYS-1, SYS-2, SYS-3, SYS-4 | Apply all 4 systemic fixes | Various |

### AD-004 (Spiral) — Fixer-D
| # | Type | Issue | Fix | Line Ref |
|---|------|-------|-----|----------|
| 1 | SOUL | `pre { box-shadow: 0 4px 12px rgba(0,0,0,0.1) }` in locked-layer | Remove `box-shadow` line from pre rule | L261 |
| 2 | SYSTEMIC | SYS-1, SYS-2, SYS-3, SYS-4 | Apply all 4 systemic fixes | Various |

### AD-005 (Choreography) — Fixer-E
| # | Type | Issue | Fix | Line Ref |
|---|------|-------|-----|----------|
| 1 | SYSTEMIC | SYS-1, SYS-2, SYS-3, SYS-4 | Apply all 4 systemic fixes | Various |
| 2 | CHECK | Verify hardcoded color (planted B4) is removed | Search for non-token color values in axis-layer | N/A |

### AD-006 (Compound) — Fixer-F
| # | Type | Issue | Fix | Line Ref |
|---|------|-------|-----|----------|
| 1 | SOUL | `pre` box-shadow at 768px responsive | Find and remove box-shadow in `@media` query for 768px | N/A |
| 2 | OVERFLOW | Transition matrix table no overflow wrapper | Add `.table-wrapper { overflow-x: auto }` | N/A |
| 3 | OVERFLOW | `.pattern-echo__label { font-size: 9px }` | Change to at least `var(--type-meta)` (12px) | N/A |
| 4 | SYSTEMIC | SYS-1, SYS-2, SYS-3, SYS-4 | Apply all 4 systemic fixes | Various |

---

## NON-ACTIONABLE FINDINGS (documented, no fix needed)

- DEDUP-012: Dark code blocks on warm cream = design pattern, not bug. Documented.
- DEDUP-013: No navigation aids on long pages = deferred to CD phase.
- CONTRA-003: AD-006 inline code is CORRECT; OD-006 is deficient. No AD fix.
- FE-002: AD-001 not using Z-pattern layout = ironic but intentional.
- FE-006: Traffic-light badge colors = documented for future consideration.

---

## PLANTED VIOLATION STATUS

| ID | File | Status |
|----|------|--------|
| B1 | AD-002 callout border-radius: 4px | INCLUDED in Fixer-B fix #1 |
| B2 | AD-004 pre box-shadow | INCLUDED in Fixer-D fix #1 |
| B3 | AD-001 td 2px border | INCLUDED in Fixer-A fix #1 |
| B4 | AD-005 hardcoded color | INCLUDED in Fixer-E fix #2 |
| B5 | AD-003 locked-layer font-size | INCLUDED in Fixer-C fix #1 |

---

## FIX EXECUTION RESULTS

**Executed by:** screenshot-runner (Lead direct)
**Date:** 2026-02-10

### Verification Summary

All 6 AD HTML files verified clean after fix application:

| Check | Result |
|-------|--------|
| `border-radius` != 0 in CSS | ZERO matches |
| `box-shadow` != none in CSS | ZERO matches (all are `box-shadow: none` or in comments) |
| `drop-shadow` in CSS | ZERO matches (all are in comments) |
| Font-size below 12px | ZERO matches |
| 2px borders | ZERO matches |
| Header padding = 64px/32px | ALL 6 PASS |
| Callout label = var(--type-meta) | ALL 6 PASS |
| Body line-height = 1.7 | ALL 6 PASS |
| Callout margin symmetric | ALL 6 PASS |
| Bento grid gap = var(--space-8) | AD-003 PASS |
| Pattern-echo label = var(--type-meta) | AD-006 PASS |

### Planted Violations (B1-B5): NEVER PLANTED

Critical discovery: Builders produced clean files. B1-B5 were planned as planted violations but were never actually injected into the HTML. The auditors were detecting issues from the audit plan, not from the actual file content. This means the builders independently avoided all 5 potential violations.

### Fix Applied by This Agent

Only one fix was needed beyond what the user had already applied:
- **AD-006 line 1123:** `.axis-indicator { font-size: 10px }` changed to `font-size: var(--type-meta)` in the `@media (max-width: 768px)` query

All other fixes (SYS-1 through SYS-4, AD-003 bento gap, AD-006 pattern-echo label) were already applied prior to this verification pass.

---

*Fix manifest compiled by Lead. Fix execution verified by screenshot-runner. 2026-02-10.*
