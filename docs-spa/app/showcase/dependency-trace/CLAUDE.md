<!--
LIGHT SECTION — Phase 2D
Part Of: dependency-trace — Dependency analysis and classification data
Contributed To: PHASE-2A-CLASSIFICATION.md; threading data for Phase 2B execution
Full Context: knowledge-architecture/PIPELINE-BACKBONE.md
-->
# dependency-trace — CLAUDE.md

## STATUS: ACTIVE — DEPENDENCY ANALYSIS DATA

This folder contains the dependency analysis, classification, and threading data that powers the provenance pipeline.

## What This Folder Contains

- **Phase 1B outputs** — Reachability reports, relationship maps, threading data
- **Phase 2A classification** — The master file classifying all 910 source files
- **DD audits** — Source-of-truth extraction, typography visual audit
- **Numbered analysis files** — 01-11, each covering a different analysis dimension

## Why This Exists

Phase 1B performed a comprehensive dependency trace of all files in the design system. This produced the raw data that Phase 2A used for classification and Phase 2B used for threading. The files here are the analytical foundation of the provenance pipeline.

## Pipeline Position

```
[DEPENDENCY-TRACE] ──feeds──> knowledge-architecture/ ──documents──> Pipeline
     ↑                                                                  ↑
 Raw analysis data                                              Meta-documentation
```

## Key Files

| File | Purpose |
|------|---------|
| `PHASE-2A-CLASSIFICATION.md` | Master classification of all 910 source files |
| `PHASE-2A-CLASSIFICATION.yaml` | Machine-readable classification data |
| `TRACE-SUMMARY.md` | Summary of dependency trace findings |
| `01-reachability-report.md` | T1 reachability analysis (76% connected) |
| `02-threading-data/` | Per-directory threading data for Phase 2B |
| `03-relationship-map.md` | File relationship visualization |

## Constraints

- **DO NOT modify classification data** — It's the basis for all Phase 2B/2D work
- **DO NOT update threading data** — It reflects the state at time of analysis
- **Treat as historical record** — New analysis should create new files

## Where To Go Next

| If You Want To... | Go To |
|-------------------|-------|
| See pipeline narrative | `../knowledge-architecture/PIPELINE-BACKBONE.md` |
| See authority declarations | `../knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md` |
| See T1 synthesis files | `design-extraction/component-system/perceptual-audit-v2/synthesis/` |
