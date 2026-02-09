# Captain-Fix Mission Brief

**Captain:** Captain-Fix
**Mission:** Execute ALL Critical/High fixes from MASTER-AUDIT-REPORT.md
**Constraint:** ZERO new soul violations
**Date:** 2026-02-09

## Phase A — 7 Fixers (parallel)

| Worker | Files | Fix IDs |
|--------|-------|---------|
| fixer-od-001-003 | OD-001, OD-002, OD-003 | Fix 2, 6, 7, 8 |
| fixer-od-004-006 | OD-004, OD-005, OD-006 | Fix 2 (verify), Fix 7 (OD-005) |
| fixer-dd-001-003 | DD-001, DD-002, DD-003 | Fix 4, Fix 5 |
| fixer-dd-004-006 | DD-004, DD-005, DD-006 | Fix 4, Fix 5 |
| fixer-tsx | 11 .tsx files | STR-TSX-002 |
| fixer-provenance | Chain docs | Fix 1, 3, 9, 10 |
| fixer-archival | Triage actions | Move 97, delete 1 |

## Phase B — 3 Scribes (after fixers)
| Worker | Responsibility |
|--------|---------------|
| scribe-headers | Update inline threading headers |
| scribe-chain | Update formal chain docs |
| scribe-tracking | Update research tracking |

## Phase C — 2 Verifiers (after scribes)
| Worker | Method |
|--------|--------|
| verifier-visual | Playwright screenshots |
| verifier-structural | Programmatic DOM/CSS |

## Internal Gates
- CF-01: All Critical fixed
- CF-02: All High fixed
- CF-03: Playwright verification screenshots exist
- CF-04: Soul compliance: 0 violations
- CF-05: No NEW soul violations
- CF-06: Fix count documented
- CF-07: All 3 scribe reports exist
- CF-08: scribe-headers updated ALL modified files

## Status: EXECUTING Phase A
