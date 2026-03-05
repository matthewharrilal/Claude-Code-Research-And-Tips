# Pipeline Fix Tracker — Persistent Cross-Run Record

Check this file at the START of every pipeline run (part of preflight).
Before any new retrospective analysis: verify top 5 proposed fixes from PREVIOUS run are applied.

## Active Fixes

| # | Fix Description | Proposed Date | Proposed In | Status | Applied Date | Verified In |
|---|----------------|---------------|-------------|--------|-------------|------------|
| 1 | Hover template slot (A-01) | 2026-02-15 | Middle retro | APPLIED | 2026-02-25 | Pipeline v4 |
| 2 | Signal declarations (A-02) | 2026-02-15 | Middle retro | APPLIED | 2026-02-25 | Pipeline v4 |
| 3 | GR-48 as verdict precondition (B-01) | 2026-02-16 | Flagship retro | APPLIED | 2026-02-25 | Pipeline v4 |
| 4 | DPR correction before gates (B-07) | 2026-02-17 | Remediation | APPLIED | 2026-02-25 | Pipeline v4 |
| 5 | Tracker reduction to 50 fields (D-01) | 2026-02-25 | Crack analysis | APPLIED | 2026-02-25 | Pipeline v4 |

## How to Use

1. At pipeline start: run `tracker-preflight.sh` which checks this file for unapplied fixes
2. After retrospective: add new rows with Status = PROPOSED
3. After applying a fix: update Status to APPLIED, fill Applied Date and Verified In
4. Status values: PROPOSED / IN-PROGRESS / APPLIED / REJECTED (with rationale in Notes column)
5. Never delete rows — rejected fixes stay for audit trail

## Unapplied Fix Protocol

If preflight finds fixes with Status = PROPOSED or IN-PROGRESS:
- Print WARNING with fix descriptions
- Orchestrator must acknowledge before proceeding
- If fix is >30 days old and still PROPOSED: escalate to REJECTED or APPLIED
