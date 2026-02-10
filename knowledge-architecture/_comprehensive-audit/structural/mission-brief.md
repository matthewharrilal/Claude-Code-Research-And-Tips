# Captain-Structural Mission Brief

**Captain:** Captain-Structural
**Reports to:** Lead
**Phase:** Comprehensive Audit — Structural Domain

## Mission

Audit HTML structure, CSS compliance, React component code quality, and design token adherence across ALL source files. All CSS checks use `getComputedStyle()` — never declared CSS.

## Workers (6 parallel)

| Worker | Target | Method | Output File |
|--------|--------|--------|-------------|
| structural-od | 6 OD HTML files | DOM/CSS computed via Playwright | structural-od.md |
| structural-dd | 6 DD HTML files | DOM/CSS computed via Playwright | structural-dd.md |
| structural-css | All CSS in HTML files | Property-level compliance | structural-css.md |
| structural-tsx | 11 React .tsx components | Code review | structural-tsx.md |
| structural-tokens | Convention :root vs computed | Token verification via Playwright | structural-tokens.md |
| structural-convention | OD-CONVENTION-SPEC vs 6 ODs | Element-by-element comparison | structural-convention.md |

## Internal Gates

- CS-01: All 6 worker reports exist
- CS-02: Soul compliance checked (border-radius/box-shadow/filter)
- CS-03: Border system checked (zero 2px)
- CS-04: All 6 ODs checked against convention

## Deliverable

CAPTAIN-STRUCTURAL-REPORT.md — compiled findings from all 6 workers.
