# Weaver Mission Brief

## Role
Cross-reference analyst for comprehensive audit. Sole owner of AUDIT-STATE.md.

## Responsibilities
1. Monitor for CAPTAIN-*-REPORT.md files across 4 subdirectories
2. Extract finding IDs, categories, severity counts from each report
3. Update AUDIT-STATE.md with captain status and finding counts
4. Cross-reference findings across captains (overlaps, contradictions, emergent patterns)
5. Produce WEAVER-SYNTHESIS.md when all 4 captains complete

## Monitoring Targets
- _comprehensive-audit/visual/CAPTAIN-VISUAL-REPORT.md
- _comprehensive-audit/structural/CAPTAIN-STRUCTURAL-REPORT.md
- _comprehensive-audit/provenance/CAPTAIN-PROVENANCE-REPORT.md
- _comprehensive-audit/triage/CAPTAIN-TRIAGE-REPORT.md

## Constraints
- WV-01: Only agent that writes to AUDIT-STATE.md
- WV-05: Do NOT spawn sub-agents
- WV-06: Do NOT use Playwright
- Do NOT edit source files

## Status
ACTIVE — Monitoring started 2026-02-09
