# Gate Runner Provenance — History, Traceability, and Change Log
Date: 2026-02-24
Extracted from: artifact-gate-runner-MONOLITHIC.md
Authority: Council Verdict (2026-02-23)

---

## Document Lineage

1. **Original:** `artifact-gate-runner.md` created during VA extraction (2026-02-23)
2. **Wave 1:** Brief verification gates (BV-01-04) added, GR-43 (self-eval) and GR-44 (trailing void) added. 13 gates removed (GR-16 absorbed, GR-29-32 to orchestrator, GR-35 to PA, GR-36-39 to experiments, GR-40-42 to orchestrator).
3. **Wave 2:** 8 new gates added (GR-45, GR-46, GR-48, GR-49, GR-50, GR-51, GR-52, GR-53). Executable code written for 2 existing gates (GR-21, GR-22). Stacked gap threshold clarification added.
4. **Wave 3 (2026-02-24):** MONOLITHIC file split into 5 operational files (FIX-090). GR-23-28 reclassified to orchestrator (FIX-094). Gate manifest created (FIX-116). Execution manifest template added (FIX-100).

---

## Council Rulings Applied

- **Gate-runner checks BINARY ONLY** -- no quality judgments
- **34 VALUES items rerouted** AWAY from gate-runner (see Appendix A in MONOLITHIC)
- **S-09 adjusted:** <=150px TOTAL stacked gap (was <=96px per-property)
- **CCS is NOT gate-checkable** (research construct, methodology unstandardized)
- **Perception thresholds are DUAL-ROUTE:** builder receives as calibration, gate-runner verifies as binary
- **10 GATES->BUILDER items reclassified** per council Pattern 1
- **GR-47 intentionally skipped** (Brief Line Budget covered by BV-01 per CONFLICT-007)
- **GR-51 renumbered** from source GR-43 to avoid collision with Self-Evaluation gate

---

## Wave Change Log

### Wave 1 Changes (2026-02-23)
- **ADDED:** BV-01 (Tier Line Budget), BV-02 (Background Delta), BV-03 (Recipe Format), BV-04 (Suppressor Scan)
- **ADDED:** GR-43 (Self-Evaluation Comment), GR-44 (Trailing Void)
- **REMOVED:** GR-16 (absorbed into verdict logic)
- **REMOVED:** GR-29-32 (moved to orchestrator verdict logic)
- **REMOVED:** GR-35 (moved to PA -- not automatable)
- **REMOVED:** GR-36-39 (moved to experiment protocol)
- **REMOVED:** GR-40-42 (moved to orchestrator process checks)
- **Net change:** +6 added, -13 removed

### Wave 2 Changes (2026-02-23)
- **ADDED:** GR-45 (Typography Variation), GR-46 (Print Stylesheet), GR-48 (Gate Coverage), GR-49 (Result File Integrity), GR-50 (Conviction Statement), GR-51 (Background Delta Distribution), GR-52 (Section Height Variation), GR-53 (Density Arc Direction)
- **CODE ADDED:** GR-21 (Cognitive Overload proxy), GR-22 (Color Zone Conflict proxy)
- **CLARIFIED:** Stacked gap threshold (GR-13 vs GR-14 complementary relationship)
- **Net change:** +8 added, 0 removed

### Wave 3 Changes (2026-02-24) — FIX-090, FIX-094, FIX-098, FIX-100, FIX-116
- **FIX-090:** Monolithic file split into 5 operational files
  - `gate-runner-core.js` -- all executable JavaScript
  - `gate-runner-preconditions.md` -- text-based pre-build checks
  - `gate-runner-spec.md` -- human-readable specifications
  - `gate-runner-provenance.md` -- this file (history/traceability)
  - `gate-manifest.json` -- JSON table of contents
- **FIX-094:** GR-23 through GR-28 reclassified as orchestrator decision rules, moved to `artifact-orchestrator.md` Section 9
- **FIX-098:** Section 9 added to orchestrator for reclassified gates
- **FIX-100:** Gate execution manifest template created
- **FIX-116:** `gate-manifest.json` created as orchestrator's primary reference
- **Net change:** 0 gates added/removed. 6 gates reclassified (GR-23-28 to orchestrator).
- **Original preserved:** `artifact-gate-runner-MONOLITHIC.md`

---

## Gate Reclassification History

### Removed Gates (13 total, Wave 1)
| Gate | Original Location | New Location | Reason |
|------|------------------|-------------|--------|
| GR-16 | Gate Runner | Verdict logic (absorbed) | Meta-gate aggregating GR-11-15 |
| GR-29 | Gate Runner | Orchestrator (Section 7) | PA-05 >= 3.5 = RELEASE -- orchestrator verdict |
| GR-30 | Gate Runner | Orchestrator (Section 7) | PA-05 2.5-3.5 = IMPROVE -- orchestrator verdict |
| GR-31 | Gate Runner | Orchestrator (Section 7) | PA-05 < 2.5 = RETHINK -- orchestrator verdict |
| GR-32 | Gate Runner | Orchestrator (Section 7) | 3+ AP FAIL = RETHINK -- orchestrator verdict |
| GR-35 | Gate Runner | PA Auditors | Layout driver -- not automatable |
| GR-36 | Gate Runner | Experiment Protocol | Experiment #19 state |
| GR-37 | Gate Runner | Experiment Protocol | Experiment #20 state |
| GR-38 | Gate Runner | Experiment Protocol | Experiment #21 state |
| GR-39 | Gate Runner | Experiment Protocol | Experiment tracking |
| GR-40 | Gate Runner | Orchestrator | Single-pass default policy |
| GR-41 | Gate Runner | Orchestrator | Fresh builder on RETHINK policy |
| GR-42 | Gate Runner | Orchestrator | Builder gate-free policy (overlaps GR-27) |

### Reclassified Gates (6 total, Wave 3 FIX-094)
| Gate | Original Location | New Location | Reason |
|------|------------------|-------------|--------|
| GR-23 | Gate Runner (precondition) | Orchestrator Section 9 | Builder model check -- pipeline config, not DOM inspection |
| GR-24 | Gate Runner (precondition) | Orchestrator Section 9 | Content heterogeneity -- Phase 0 output check, not DOM inspection |
| GR-25 | Gate Runner (precondition) | Orchestrator Section 9 | Suppressor count -- brief text check, not DOM inspection |
| GR-26 | Gate Runner (precondition) | Orchestrator Section 9 | Brief size cap -- brief text check, not DOM inspection |
| GR-27 | Gate Runner (precondition) | Orchestrator Section 9 | Builder gate-free -- brief text check, not DOM inspection |
| GR-28 | Gate Runner (precondition) | Orchestrator Section 9 | Recipe format -- brief text check, not DOM inspection |

---

## Council-Reclassified Items (Pattern 1, 4, 5)

### Pattern 1: GATES -> BUILDER (10 items)
| Item ID | Source | Reclassified To | Reason |
|---------|--------|-----------------|--------|
| ITEM 120 | d01-d03 L261 | ORCHESTRATION | Routing policy |
| ITEM 124 | d01-d03 L263 | DISPOSITION | Builder-facing disposition |
| ITEM 137 | d01-d03 L308 | DISPOSITION | Builder-facing mode instruction |
| ITEM 138 | d01-d03 L313 | ORCHESTRATION | Format specification |
| ITEM 057 | d18-d20 L1502 | VALUES | CSS vocabulary exemplar |
| ITEM 061 | d18-d20 L1512 | VALUES | CSS vocabulary exemplar |
| ITEM 066 | d18-d20 L1524 | VALUES | Value table entry |
| ITEM 067 | d18-d20 L1525 | VALUES | Value table entry |
| ITEM 068 | d18-d20 L1526 | VALUES | Value table entry |
| ITEM 078 | d18-d20 L1554 | ORCHESTRATION | Mode selection logic |

### Pattern 4: ROUTING -> GATE-RUNNER (2 items)
| Item ID | Source | Reclassified To | Reason |
|---------|--------|-----------------|--------|
| ITEM 005 | d18-d20 L1346-1357 | GATES/ORCHESTRATOR | Survival function -- prompt assembly |
| ITEM 007 | d18-d20 L1356-1357 | GATES/ORCHESTRATOR | Survival function threshold |

### Pattern 5: VALUES -> GATE-RUNNER (34 items rerouted)
- **Category A:** 17 items -> ORCHESTRATOR (planning tools, historical data)
- **Category B:** 12 items -> PA-AUDITOR (quality assessment framework)
- **Category C:** 5 items -> DOCUMENTATION (historical facts, research data)

Full rerouting tables preserved in `artifact-gate-runner-MONOLITHIC.md` Appendices A-D.

---

## Item Traceability Summary

- **Active Playwright gates:** 52 in-file executable (44 GR + 7 BV + 1 utility A-03; see gate-manifest.json for canonical counts)
- **Active orchestrator gates:** 6 (GR-23-28, reclassified Wave 3)
- **Removed gates:** 13 (Wave 1)
- **Council-reclassified:** 12 (Pattern 1: 10, Pattern 4: 2)
- **VALUES rerouted:** 34 (Pattern 5)
- **Total items accounted for:** 72 Layer 6 items + additional cross-layer references
- **GR-47 skipped:** Brief Line Budget covered by BV-01 per CONFLICT-007
- **GR-51 renumbered:** Was GR-43 in source, renumbered to avoid collision

---

## Appendix References

The following appendices are preserved in full in `artifact-gate-runner-MONOLITHIC.md`:
- **Appendix A:** 34 VALUES items rerouted (3 categories)
- **Appendix B:** Council-reclassified gate items
- **Appendix C:** Gate-adjacent items (not gates themselves)
- **Appendix D:** Complete Layer 6 item traceability (72 items)

---

*For executable code: see `gate-runner-core.js`*
*For specifications: see `gate-runner-spec.md`*
*For manifest: see `gate-manifest.json`*
