# Captain-Visual Mission Brief

## Mission
Conduct visual-first Playwright audit of ALL 12 rendered HTML pages (6 OD + 6 DD).
Every page gets screenshot-inspected at 1440px and 768px BEFORE code analysis.
Manage 15 visual workers, compile findings, deliver single report.

## Wave Structure
- **Wave A**: 6 OD workers (parallel) — visual-od-001 through visual-od-006
- **Wave B**: 6 DD workers (parallel) — visual-dd-001 through visual-dd-006
- **Wave C**: 3 cross-comparison workers (after A+B) — visual-cross-od, visual-cross-dd, visual-components

## Internal Gates
- CV-01: All 12+ worker report files exist
- CV-02: Both cross-comparison reports exist
- CV-03: >=200 screenshot files in screenshots/
- CV-04: Every OD report has research compliance section

## Output
- Per-worker reports: visual/visual-{od|dd}-{NNN}.md
- Cross-comparison: visual/visual-cross-{od|dd}.md
- Final: CAPTAIN-VISUAL-REPORT.md

## Status: IN PROGRESS
- Wave A: SPAWNING
- Wave B: PENDING (after Wave A)
- Wave C: PENDING (after A+B)
