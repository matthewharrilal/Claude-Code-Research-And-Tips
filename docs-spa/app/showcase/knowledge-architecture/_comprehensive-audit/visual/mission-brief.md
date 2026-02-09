# Captain-Visual Mission Brief (v2 Respawn)

**Date:** 2026-02-09
**Role:** Captain-Visual — visual-first Playwright audit of all rendered HTML pages
**Team:** comprehensive-audit

## Critical Context
Previous Captain-Visual completed all tasks but wrote ZERO output files and ZERO screenshots to disk. ALL work was lost.

## #1 Priority
Every worker MUST:
1. Write its output .md file to disk using the Write tool
2. Take actual Playwright screenshots saved to disk
3. Captain verifies files exist with Glob BEFORE marking any task complete

## Scope
- 6 OD pages (OD-001 through OD-006)
- 6 DD pages (DD-001 through DD-006)
- Each page audited at 1440px and 768px
- 13 binary gates per page
- Research validation against convention spec + soul discoveries + anti-pattern registry

## Execution Plan
- **Wave A:** 6 OD workers (parallel)
- **Wave B:** 6 DD workers (parallel, after Wave A)
- **Wave C:** 2 cross-comparison workers (after A+B)
- **Compile:** CAPTAIN-VISUAL-REPORT.md after all waves complete

## Internal Gates
- CV-01: >=12 worker report .md files exist in visual/ directory
- CV-02: >=50 screenshot .png files exist in screenshots/ directory
- CV-03: Every OD report has research compliance section

## Output
- 12+ worker reports in visual/
- 50+ screenshots in screenshots/
- 1 compiled CAPTAIN-VISUAL-REPORT.md
