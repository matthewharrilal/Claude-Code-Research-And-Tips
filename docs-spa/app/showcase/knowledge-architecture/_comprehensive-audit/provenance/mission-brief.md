# Captain-Provenance Mission Brief

**Captain:** Captain-Provenance
**Team:** Comprehensive Audit — Provenance Domain
**Date:** 2026-02-09

## Mission

Verify every provenance link in the showcase ecosystem. Ensure the chain is sound and research is actually used (not just cited).

## Workers (5 parallel)

| Worker | Target | Output |
|--------|--------|--------|
| prov-headers | 156 inline threading headers | prov-headers.md |
| prov-finding-ids | Finding IDs in 6 OD HTML | prov-finding-ids.md |
| prov-formal | Stage 1-3 chain docs | prov-formal.md |
| prov-research | R-1 through R-5 claims | prov-research.md |
| prov-accumulated | ACCUMULATED-IDENTITY v1+v1.1 | prov-accumulated.md |

## Gates (8)

| Gate | Criterion |
|------|-----------|
| PV-01 | Every BUILT ON reference -> existing file |
| PV-02 | Every CONSUMED BY claim verifiable |
| PV-03 | Every finding ID in OD HTML exists in registry |
| PV-04 | Every APPLIED research finding has evidence |
| PV-05 | Formal chain docs internally consistent |
| PV-06 | No broken links in provenance graph |
| PV-07 | PIPELINE-MANIFEST.md current |
| PV-08 | ACCUMULATED-IDENTITY v1.1 current |

## Status

- [x] Mission brief written
- [x] Workers spawned (5 workers, all parallel)
- [x] Workers complete (5/5 reports written)
- [x] Gates evaluated (4 PASS, 3 FAIL, 1 CONDITIONAL PASS)
- [x] Captain report compiled (CAPTAIN-PROVENANCE-REPORT.md)

## Results Summary

- **2 CRITICAL:** PIPELINE-MANIFEST R-2 count wrong (78 vs 27), phantom IDs R2-024-078
- **3 HIGH:** Cross-boundary T1 references, EXT-* count conflicts, STAGE-HEADER stale consumed counts
- **4 MEDIUM:** Stale scores in CLAUDE.md, soul piece descriptions wrong, R-1 arithmetic, v1 supersession marker
- **Chain integrity:** Structurally sound; all fixes are data corrections, no structural changes needed
