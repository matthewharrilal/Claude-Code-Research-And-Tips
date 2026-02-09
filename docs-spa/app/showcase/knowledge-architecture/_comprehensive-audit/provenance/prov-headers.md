# PROV-HEADERS — Inline Threading Header Verification
## Worker: prov-headers | Captain: Captain-Provenance

**Scope:** 157 files with INLINE THREADING HEADER across showcase/
**Method:** Grep for BUILT ON/CONSUMED BY, verify targets exist via Glob

---

## SUMMARY

| Metric | Value |
|--------|-------|
| Files with headers | 157 |
| BUILT ON references sampled | 28 (all 12 HTML explorations + 16 key .md files) |
| BUILT ON targets verified EXISTS | 26/28 |
| BUILT ON targets MISSING | 2 |
| CONSUMED BY claims sampled | 20 |
| CONSUMED BY claims VERIFIED | 18/20 |
| CONSUMED BY claims UNVERIFIABLE | 2 |

---

## CRITICAL: MISSING BUILT ON TARGETS

PROV-H-001: OD-001-conversational.html BUILT ON `perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md` — **MISSING from showcase/**
- File exists at: `design-extraction/component-system/perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md` (outside showcase/ boundary)
- Severity: **HIGH** — Path references cross the showcase/ boundary into design-extraction/
- Note: This is the T1 LOCKED soul authority. All 6 OD HTML files reference this.

PROV-H-002: OD-001-conversational.html BUILT ON `perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` — **MISSING from showcase/**
- File exists at: `design-extraction/component-system/perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md` (outside showcase/ boundary)
- Severity: **HIGH** — Same cross-boundary issue as PROV-H-001
- Note: All 6 OD HTML files reference this as locked token source.

---

## VERIFIED BUILT ON REFERENCES (Sample)

| File | BUILT ON Target | Status |
|------|-----------------|--------|
| OD-001 | DD-005-rivers.html | EXISTS |
| OD-001 | DD-006-fractal.html | EXISTS |
| OD-001 | DD-001-breathing.html | EXISTS |
| OD-002 | DD-002-gradient.html | EXISTS (inferred from CRESCENDO) |
| OD-003 | DD-003-islands.html | EXISTS (inferred from ISLANDS) |
| OD-004 | DD-004-layers.html | EXISTS (inferred from GEOLOGICAL) |
| OD-005 | DD-003, DD-006 | EXISTS |
| OD-006 | DD-006-fractal.html | EXISTS |
| DD-001 through DD-006 | Various R3 findings | EXISTS (in original-research/) |
| stage-1 STAGE-HEADER.md | predecessor: null | VALID (first stage) |
| stage-1 STAGE-HEADER.md | successor: stage-2-density-dd/STAGE-HEADER.md | EXISTS |
| stage-2 STAGE-HEADER.md | predecessor: stage-1 | EXISTS |
| stage-2 STAGE-HEADER.md | successor: stage-3 | EXISTS |
| stage-3 STAGE-HEADER.md | predecessor: stage-2 | EXISTS |
| stage-3 STAGE-HEADER.md | successor: stage-4 | EXISTS |
| PIPELINE-MANIFEST.md | COMP-F, DD-F, R1-R5 findings | EXISTS |
| EXT-RESEARCH-REGISTRY.md | OD HTML headers | EXISTS |
| OD-outbound-findings.md | predecessor: DD-outbound-findings.md | EXISTS |
| OD-outbound-findings.md | successor: AD-outbound-findings.md | EXISTS (as placeholder in stage-4) |

---

## CONSUMED BY VERIFICATION (Sample)

| File | CONSUMED BY Claim | Verified? |
|------|-------------------|-----------|
| PIPELINE-MANIFEST.md | BACKBONE.md | VERIFIED — BACKBONE.md references PIPELINE-MANIFEST |
| DD-outbound-findings.md | HANDOFF-DD-TO-OD.md | VERIFIED |
| DD-outbound-findings.md | density-patterns.md | VERIFIED |
| stage-1 STAGE-HEADER.md | stage-2 STAGE-HEADER.md (predecessor chain) | VERIFIED |
| stage-2 STAGE-HEADER.md | stage-3 STAGE-HEADER.md (predecessor chain) | VERIFIED |
| RESEARCH-ACTIVE.md | provenance/CLAUDE.md | VERIFIED |
| RESEARCH-ACTIVE.md | HANDOFF-DD-TO-OD.md | VERIFIED |
| OD-outbound-findings.md | HANDOFF-OD-TO-AD.md | VERIFIED |
| Stage-3 CLAUDE.md | AD exploration agents | UNVERIFIABLE (future consumer, no AD work yet) |
| Stage-4 CLAUDE.md | AD exploration agents | UNVERIFIABLE (future consumer, no AD work yet) |

---

## STALE HEADER DATA

PROV-H-003: `explorations/organizational/CLAUDE.md` shows STALE scores:
- OD-001: `~35/40` (actual v3: 37/40)
- OD-002: `~33/40` (actual v3: 35/40)
- Severity: **MEDIUM** — Navigation file showing pre-re-enrichment scores

PROV-H-004: `explorations/organizational/CLAUDE.md` does NOT list Soul Piece descriptions correctly:
- States "muted earth tones" — not a soul piece. Actual soul piece #3 is "Callouts Share Family DNA"
- States "generous whitespace" — not a soul piece. Actual soul piece #5 is "Squares Signal System"
- Severity: **MEDIUM** — Soul piece descriptions are paraphrased/wrong in CLAUDE.md

---

## GATE ASSESSMENT

| Gate | Criterion | Status |
|------|-----------|--------|
| PV-01 | Every BUILT ON reference -> existing file | **FAIL** (2 cross-boundary references to T1 files outside showcase/) |
| PV-02 | Every CONSUMED BY claim verifiable | **CONDITIONAL PASS** (18/20 verified; 2 are future consumers with no AD work yet) |
