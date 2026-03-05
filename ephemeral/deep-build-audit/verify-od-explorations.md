# OD Exploration Files Verification

**Task:** Find all OD (Organization Dimension) exploration files in the project.
**Expected:** ~20 files totaling ~20,500 lines.
**Date:** 2026-02-28

---

## Summary

**Finding: OD HTML explorations = 6 files, 12,012 lines. Far below the ~20 files / ~20,500 line target.**

The discrepancy is because:
- Only 6 HTML source files exist in `design-system/validated-explorations/organizational/`
- 3 additional OD case study `.md` files exist (referenced in corpus.ts) totaling 939 lines
- Combined total: 9 files, ~12,951 lines — still well short of the ~20 file / ~20,500 line expectation

The "~20 files" target likely included OD-related `.md` files (protocol docs, audit docs, checkpoints) spread across `archive/`, `design-system/specification/`, etc. Those are NOT exploration artifacts — they are process/protocol documents.

---

## OD HTML Explorations (Primary Artifacts)

**Location:** `design-system/validated-explorations/organizational/`

| File | Absolute Path | Lines | In corpus.ts? |
|------|--------------|-------|--------------|
| OD-001-conversational.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-001-conversational.html` | 2,293 | NO (HTML not in corpus) |
| OD-002-narrative.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-002-narrative.html` | 1,659 | NO |
| OD-003-task-based.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-003-task-based.html` | 1,163 | NO |
| OD-004-confidence.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-004-confidence.html` | 1,978 | NO |
| OD-005-spatial.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-005-spatial.html` | 2,284 | NO |
| OD-006-creative.html | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-006-creative.html` | 2,635 | NO |

**Subtotal: 6 HTML files, 12,012 lines**

**Note:** HTML source files are not referenced in corpus.ts directly. The pipeline uses the `.md` case study derivatives (see below), not the raw HTML explorations. This is by design — the HTML files are the visual artifacts; the .md files are the distilled case studies for agent consumption.

---

## OD Case Study .md Files (In corpus.ts — Subset 2: Identity & Perception)

| File | Absolute Path | Lines | In corpus.ts? | Exists on Disk? |
|------|--------------|-------|--------------|----------------|
| OD-001-conversational.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/OD-001-conversational.md` | 297 | YES (S2) | YES |
| OD-004-confidence.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/OD-004-confidence.md` | 309 | YES (S2) | YES |
| OD-006-creative.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/compositional-core/case-studies/OD-006-creative.md` | 333 | YES (S2) | YES |

**Subtotal: 3 .md files, 939 lines**

**NOTE: OD-002 and OD-003 and OD-005 have NO .md case study derivatives.** Only OD-001, OD-004, OD-006 were promoted to case studies.

---

## Supporting OD Document (Not a corpus file)

| File | Absolute Path | Notes |
|------|--------------|-------|
| OD-006-CREATIVE-RESEARCH-FEED.md | `/Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips/design-system/validated-explorations/organizational/OD-006-CREATIVE-RESEARCH-FEED.md` | Research feed used to build OD-006. Not in corpus.ts. |

---

## corpus.ts OD Reference Validation

**All 3 OD .md files referenced in corpus.ts EXIST on disk. Zero broken references for OD files.**

corpus.ts references OD files in **Subset 2 (Identity & Perception)**:
- `design-system/compositional-core/case-studies/OD-001-conversational.md` — EXISTS
- `design-system/compositional-core/case-studies/OD-004-confidence.md` — EXISTS
- `design-system/compositional-core/case-studies/OD-006-creative.md` — EXISTS

**corpus.ts does NOT reference OD-002, OD-003, or OD-005** (no .md case studies were created for those).

---

## Non-Exploration OD Files (Process/Protocol Documents)

These match `*OD*.md` but are NOT exploration artifacts. Listed for completeness.

| File | Location | Role |
|------|----------|------|
| OD-CHECKPOINT.md | `archive/checkpoints/` | Build checkpoint |
| OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md | `archive/ka-large-files/` | Process protocol |
| OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md | `archive/ka-large-files/` | Team architecture |
| OD-EXECUTION-PROTOCOL.md | `archive/ka-large-files/` | Execution protocol |
| OD-RETROSPECTIVE-AND-PROTOCOL-v2.md | `archive/ka-large-files/` | Retrospective |
| OD-004-EXTERNAL-RESEARCH.md | `archive/knowledge-architecture/core/` | External research |
| OD-005-EXTERNAL-RESEARCH.md | `archive/knowledge-architecture/core/` | External research |
| OD-FIX-EXECUTION-PROMPT.md | `archive/knowledge-architecture/core/` | Fix prompt |
| OD-GRANULAR-AUDIT-PROMPT.md | `archive/knowledge-architecture/core/` | Audit prompt |
| OD-GRANULAR-AUDIT-RESULTS.md | `archive/knowledge-architecture/core/` | Audit results |
| OD-REENRICHMENT-SPECIFICATION.md | `archive/knowledge-architecture/core/` | Re-enrichment spec |
| HANDOFF-DD-TO-OD.md | `design-system/specification/provenance/stage-2-density-dd/` | Stage handoff |
| HANDOFF-OD-TO-AD.md | `design-system/specification/provenance/stage-3-organization-od/` | Stage handoff |
| OD-AUDIT-SYNTHESIS.md | `design-system/specification/provenance/stage-3-organization-od/` | Audit synthesis |
| OD-CONVENTION-SPEC.md | `design-system/specification/provenance/stage-3-organization-od/` | Convention spec |
| OD-RESEARCH-GATE.md | `design-system/specification/provenance/stage-3-organization-od/` | Research gate |
| OD-SYNTHESIS.md | `design-system/specification/provenance/stage-3-organization-od/` | Synthesis |
| OD-outbound-findings.md | `design-system/specification/provenance/stage-3-organization-od/` | Outbound findings |

These 18 files are archived process artifacts. NOT referenced in corpus.ts.

---

## Gap Analysis

| Metric | Expected | Actual | Delta |
|--------|----------|--------|-------|
| Total OD exploration files | ~20 | 6 HTML + 3 .md = 9 | -11 |
| Total lines | ~20,500 | 12,012 (HTML) + 939 (.md) = 12,951 | -7,549 |
| corpus.ts OD references | — | 3 files | OK |
| Broken corpus.ts paths | 0 | 0 | PASS |

**Root cause of gap:** Only OD-001, OD-004, OD-006 were promoted to `.md` case studies. OD-002, OD-003, OD-005 exist as HTML explorations only — they were never distilled into agent-readable case studies. If the ~20 file expectation assumed case studies for all 6 ODs, that gap is: 3 missing .md files (~900 lines potential).

The 12,012 HTML lines vs 20,500 expectation gap (~8,500 lines) likely comes from the HTML explorations being shorter than expected (avg 2,002 lines each vs an expected ~3,400 each), OR from assuming more HTML files existed.

---

## Verdict

- **6 OD HTML files exist, all in `design-system/validated-explorations/organizational/`** — confirmed on disk
- **3 OD .md case studies referenced in corpus.ts** — all exist on disk, zero broken references
- **corpus.ts references NO OD files that don't exist** — clean
- **OD-002, OD-003, OD-005 have no .md derivatives** — potential gap if pipeline benefits from those case studies
- **Total is ~12,951 lines, not ~20,500** — expectation may have been inflated
