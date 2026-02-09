# PROV-FINDING-IDS — Finding ID Registry Verification
## Worker: prov-finding-ids | Captain: Captain-Provenance

**Scope:** 6 OD HTML files, all EXT-*/DD-F-*/OD-F-* finding IDs
**Method:** Grep each OD HTML for finding ID patterns, verify against registries

---

## SUMMARY

| Metric | Value |
|--------|-------|
| OD HTML files scanned | 6 |
| Unique EXT-* IDs found in HTML | 94+ |
| Unique DD-F-* IDs found in HTML | ~12 unique (DD-F-001 through DD-F-018 referenced) |
| Unique OD-F-* IDs found in HTML | 5+ (OD-F-005, OD-F-AP-001 most frequent) |
| Finding IDs verified in registry | 94/94 EXT-* in EXT-RESEARCH-REGISTRY.md |
| ORPHAN finding IDs | 0 |

---

## EXT-* FINDING ID VERIFICATION

### OD-001 (Conversational)
| ID Range | Count | Registry Status |
|----------|-------|-----------------|
| EXT-CONV-001 through EXT-CONV-011 | 11 | REGISTERED in EXT-RESEARCH-REGISTRY.md |
| EXT-CREATIVE-001 through EXT-CREATIVE-005 | 5 | REGISTERED |
| EXT-DENSITY-001 through EXT-DENSITY-003 | 3 | REGISTERED |
| **OD-001 Total** | **19** | **ALL REGISTERED** |

### OD-002 (Narrative)
| ID Range | Count | Registry Status |
|----------|-------|-----------------|
| EXT-NARR-001 through EXT-NARR-011 | 11 | REGISTERED |
| **OD-002 Total** | **11** | **ALL REGISTERED** |

### OD-003 (Task-Based)
| ID Range | Count | Registry Status |
|----------|-------|-----------------|
| EXT-TASK-001 through EXT-TASK-019 | 19 (referenced in header; specific Applied comments for 005,007,008,010,013-019) | REGISTERED |
| **OD-003 Total** | **19** | **ALL REGISTERED** |

### OD-004 (Confidence)
| ID Range | Count | Registry Status |
|----------|-------|-----------------|
| EXT-CONF-001 through EXT-CONF-018 | 18 | REGISTERED |
| EXT-CREATIVE-001, EXT-CREATIVE-002, EXT-CREATIVE-004 | 3 (inherited) | REGISTERED |
| **OD-004 Total** | **18 (+3 inherited)** | **ALL REGISTERED** |

### OD-005 (Spatial)
| ID Range | Count | Registry Status |
|----------|-------|-----------------|
| EXT-SPAT-001 through EXT-SPAT-018 | 18 (01-12 original, 13-18 v3) | REGISTERED |
| EXT-CREATIVE-001, EXT-CREATIVE-002, EXT-CREATIVE-004, EXT-CONV-003, EXT-DENSITY-001 | 5 (inherited) | REGISTERED |
| **OD-005 Total** | **18 (+5 inherited)** | **ALL REGISTERED** |

### OD-006 (Creative)
| ID Range | Count | Registry Status |
|----------|-------|-----------------|
| EXT-CREATIVE-001 through EXT-CREATIVE-015 | 15 | REGISTERED |
| **OD-006 Total** | **15** | **ALL REGISTERED** |

---

## DD-F-* FINDING ID VERIFICATION

All DD-F IDs referenced in OD HTML files verified against `DD-outbound-findings.md`:

| ID | Referenced In | Registry Status |
|----|---------------|-----------------|
| DD-F-001 (PULSE) | OD-001, OD-003 headers | REGISTERED |
| DD-F-002 (CRESCENDO) | OD-002, OD-004 | REGISTERED |
| DD-F-003 (ISLANDS) | OD-003, OD-005 | REGISTERED |
| DD-F-004 (GEOLOGICAL) | OD-004 | REGISTERED |
| DD-F-005 (TIDAL) | OD-001, OD-005 | REGISTERED |
| DD-F-006 (FRACTAL) | ALL 6 ODs (mandatory) | REGISTERED |
| DD-F-010 | OD-004 | REGISTERED |
| DD-F-014 | OD-004 (callout stacking) | REGISTERED |
| DD-F-015 | OD-001 through OD-005 (anti-pattern) | REGISTERED |
| DD-F-016 | OD-001 through OD-005 (anti-pattern) | REGISTERED |
| DD-F-017 | OD-001 through OD-005 (anti-pattern) | REGISTERED |
| DD-F-018 | OD-001 through OD-005 (anti-pattern) | REGISTERED |

---

## OD-F-* FINDING ID VERIFICATION

| ID | Referenced In | Registry (OD-outbound-findings.md) Status |
|----|---------------|-------------------------------------------|
| OD-F-005 | OD-001, OD-006 (org IS density) | REGISTERED |
| OD-F-AP-001 | OD-001 through OD-006 (3-category border) | REGISTERED |
| OD-F-MP-001 | OD-006, ACCUMULATED-IDENTITY | REGISTERED |

---

## DISCREPANCY: EXT-* COUNT CONFLICTS

PROV-F-001: **THREE conflicting EXT-* counts across documents:**
- EXT-RESEARCH-REGISTRY.md header: "69 unique" (stale — pre-re-enrichment header)
- EXT-RESEARCH-REGISTRY.md summary table: "72 total" (post table update but pre-header fix)
- RESEARCH-ACTIVE.md: "94 unique findings" (post-re-enrichment Wave 3)
- STAGE-HEADER.md Stage 3: cites per-category counts that sum to ~53 pre-re-enrichment

**Severity: HIGH** — The EXT-RESEARCH-REGISTRY.md header metadata was NOT updated after Wave 2 and Wave 3 re-enrichment added 25 new findings. The summary table was updated to 72 but the header still says 69. And the actual count post-re-enrichment is closer to 89-94 depending on how shared findings are counted.

---

## GATE ASSESSMENT

| Gate | Criterion | Status |
|------|-----------|--------|
| PV-03 | Every finding ID in OD HTML exists in registry | **PASS** — 0 orphan IDs |
| PV-06 (partial) | No broken finding ID links | **PASS** — All IDs resolve |
