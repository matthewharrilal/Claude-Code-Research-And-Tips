# Captain-Structural Mission Brief (v2 — Respawn)

**Captain:** Captain-Structural (Respawn)
**Date:** 2026-02-09
**Status:** IN PROGRESS

## Context

The previous Captain-Structural completed per task tracker but wrote ZERO output files.
This is a respawn with the #1 priority: ensure ALL worker output and captain report
are WRITTEN TO DISK before marking anything complete.

## Mission

Audit HTML structure, CSS compliance, React component code quality, and design token
adherence across ALL source files. Method: getComputedStyle() — NOT declared CSS.

## Workers (6 total, all parallel)

| Worker | Target | Output File |
|--------|--------|-------------|
| structural-od | 6 OD HTML files | structural-od.md |
| structural-dd | 6 DD HTML files | structural-dd.md |
| structural-css | All CSS in HTML files | structural-css.md |
| structural-tsx | 11 React .tsx components | structural-tsx.md |
| structural-tokens | :root vs computed tokens | structural-tokens.md |
| structural-convention | OD-CONVENTION-SPEC vs 6 ODs | structural-convention.md |

## Key References

- OD files: `docs-spa/app/showcase/explorations/organizational/OD-00{1-6}-*.html`
- DD files: `docs-spa/app/showcase/explorations/density/DD-00{1-6}-*.html`
- TSX: `docs-spa/components/content/*.tsx` (11 files)
- Convention: `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-CONVENTION-SPEC.md`
- Server: http://localhost:3000

## Internal Gates

- CS-01: All 6 worker reports exist on disk — PASS/FAIL
- CS-02: Soul compliance checked (border-radius/box-shadow/filter) — PASS/FAIL
- CS-03: Border system checked (zero 2px) — PASS/FAIL
- CS-04: All 6 ODs checked against convention — PASS/FAIL

## Critical Rule

ALL output files MUST be verified via Glob BEFORE marking any task complete.
