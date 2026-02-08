# Traversal Baseline -- Diagnostic Scan

**Agent:** diag-c | **Date:** 2026-02-08 | **Task:** #4

---

## Summary

- Forward traces attempted: 3
- Forward traces fully complete: 0/3
- Backward traces attempted: 3
- Backward traces fully complete: 0/3
- Average hops before break (forward): 2.7
- Average hops before break (backward): 1.7
- **Critical finding: OD-outbound-findings.md does not exist. All forward traces terminate at the OD formal provenance boundary. All backward traces for EXT-* findings terminate because no EXT-RESEARCH-REGISTRY.md exists and no formal definition file exists outside of inline headers and audit scratchpad files.**

---

## Forward Traces

### DD-F-006 (fractal self-similarity)

| Hop | File | Line(s) | Finding ID | Next Target | Status |
|-----|------|---------|-----------|-------------|--------|
| 1 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | 129 (definition), 131-136 (explanation), 194 (consumption matrix) | DD-F-006 | HANDOFF-DD-TO-OD.md | **PASS** |
| 2 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` | 117 (FRACTAL row in density table), 137 (mandatory consumption row), 298 (verification checklist), 320 (note), 330 (acknowledgment) | DD-F-006 ref | OD-RESEARCH-GATE.md | **PASS** |
| 3 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | 44, 54, 56, 74, 82-85, 92-93, 116 (DD constraints table) | DD-F-006 ref | OD-outbound-findings.md (expected) | **PASS** |
| 4 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | -- | -- | -- | **FAIL -- FILE DOES NOT EXIST** |

**BREAKS AT:** Hop 4 -- `OD-outbound-findings.md` does not exist. The YAML frontmatter in DD-outbound-findings.md (line 6) declares `successor: provenance/stage-3-organization-od/OD-outbound-findings.md` and the HANDOFF-DD-TO-OD.md (line 245) lists it as a file OD must create. The STAGE-HEADER.md (line 158) lists it as PENDING. The file was never created.

**Additional notes:** DD-F-006 IS successfully referenced in OD exploration inline headers (OD-001 line 22/line 47-50, OD-005 line 22/44-48, OD-006 line 33/60-64), but these are inline header references in HTML files, not formal provenance chain entries. The chain through the provenance infrastructure is broken at hop 4.

**Hops succeeded: 3/4**

---

### DD-F-001 (PULSE)

| Hop | File | Line(s) | Finding ID | Next Target | Status |
|-----|------|---------|-----------|-------------|--------|
| 1 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | 117 (definition row), 189 (consumption matrix: OD-001 primary) | DD-F-001 | HANDOFF-DD-TO-OD.md | **PASS** |
| 2 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` | 112 (PULSE density table row), 132 (mandatory consumption row) | DD-F-001 ref | OD-RESEARCH-GATE.md | **PASS** |
| 3 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | 42-43, 47 (DD-F-001 PULSE in DD Constraint column for OD-001 findings), 110 (DD constraints table: DD-001 PULSE) | DD-F-001 ref | OD-outbound-findings.md (expected) | **PASS** |
| 4 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | -- | -- | -- | **FAIL -- FILE DOES NOT EXIST** |

**BREAKS AT:** Hop 4 -- Same as DD-F-006. `OD-outbound-findings.md` does not exist. DD-F-001 is cited in OD-001-conversational.html inline header (line 11, line 27) but has no formal OD provenance chain entry.

**Hops succeeded: 3/4**

---

### DD-F-004 (GEOLOGICAL)

| Hop | File | Line(s) | Finding ID | Next Target | Status |
|-----|------|---------|-----------|-------------|--------|
| 1 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md` | 120 (definition row), 192 (consumption matrix: OD-004 primary) | DD-F-004 | HANDOFF-DD-TO-OD.md | **PASS** |
| 2 | `DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md` | 115 (GEOLOGICAL density table row), 135 (mandatory consumption row) | DD-F-004 ref | OD-RESEARCH-GATE.md | **PASS** |
| 3 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | 73, 76 (DD-F-004 GEOLOGICAL in DD Constraint column for OD-004 findings) | DD-F-004 ref | OD-outbound-findings.md (expected) | **PASS** |
| 4 | `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md` | -- | -- | -- | **FAIL -- FILE DOES NOT EXIST** |

**BREAKS AT:** Hop 4 -- Same pattern. `OD-outbound-findings.md` does not exist.

**Hops succeeded: 3/4**

---

## Backward Traces

### EXT-CONV-001 (from OD-001 header)

**Starting point:** OD-001-conversational.html, line 27 -- `EXT-CONV-001 (Socratic Progressive Narrowing)`

| Hop | File | Line(s) | Finding ID | Next Target | Status |
|-----|------|---------|-----------|-------------|--------|
| 1 | `explorations/organizational/OD-001-conversational.html` | 27 (inline header applied research), 700 (CSS comment), 1014 (research record), 2097 (enrichment card) | EXT-CONV-001 | Definition source file | **PASS** (reference found) |
| 2 | `knowledge-architecture/_od-audit-scratchpad/identity-brief.md` | 377 (table row: "Socratic Progressive Narrowing -- broadQ -> narrowQ -> specificQ -> answer") | EXT-CONV-001 definition | Formal registry (EXT-RESEARCH-REGISTRY.md or PIPELINE-MANIFEST.md) | **PARTIAL** (definition exists but only in audit scratchpad) |
| 3 | `knowledge-architecture/_od-audit-scratchpad/research-refinement.md` | 22 (section header with soul test) | EXT-CONV-001 analysis | Formal registry | **FAIL -- NO FORMAL REGISTRY EXISTS** |

**BREAKS AT:** Hop 2/3 boundary -- EXT-CONV-001 has definitions in two audit scratchpad files (identity-brief.md line 377, research-refinement.md line 22) but these are operational/scratch files, not formal provenance infrastructure. There is:
- No `EXT-RESEARCH-REGISTRY.md` (planned but never created -- confirmed by gap analysis report 13-target-topology.md line 805)
- No entry in `PIPELINE-MANIFEST.md` Section B (OD findings section says "TBD -- OD explorations not yet complete" at line 185)
- No entry in `OD-outbound-findings.md` (file does not exist)
- The OD-001 inline header (line 96) references `OD-004-EXTERNAL-RESEARCH.md` and `OD-006-CREATIVE-RESEARCH-FEED.md` as sources, but EXT-CONV-001 is NOT present in either of those files

**Chain status:** EXT-CONV-001 exists in 4 locations within OD-001-conversational.html and 2 audit scratchpad files, but has zero formal provenance chain registration. Its definition is only recoverable from inline headers and scratchpad analysis files.

**Hops succeeded: 1/3 (2 partial)**

---

### OD-F-005 (from OD-006 header)

**Starting point:** OD-006-creative.html, line 67 -- `OD-F-005: "Organization IS Density"`

| Hop | File | Line(s) | Finding ID | Next Target | Status |
|-----|------|---------|-----------|-------------|--------|
| 1 | `explorations/organizational/OD-006-creative.html` | 67 (inline header definition), 154, 157, 163-164 (consumed-by references), 1712, 2030, 2117, 2171, 2222 (HTML body references) | OD-F-005 | Formal provenance (OD-outbound-findings.md or PIPELINE-MANIFEST.md) | **PASS** (definition found in inline header) |
| 2 | `checkpoints/OD-CHECKPOINT.md` | 117, 153 (OD-F-005 definition table row) | OD-F-005 ref | PIPELINE-MANIFEST.md or OD-outbound-findings.md | **PARTIAL** (tracked in checkpoint but not in provenance) |
| 3 | `checkpoints/RESEARCH-ACTIVE.md` | 701 (OD-F-005 row) | OD-F-005 ref | Formal provenance chain | **FAIL -- NOT IN PROVENANCE INFRASTRUCTURE** |

**BREAKS AT:** Hop 2/3 boundary -- OD-F-005 is defined in OD-006's inline header and tracked in two checkpoint files (OD-CHECKPOINT.md, RESEARCH-ACTIVE.md), but:
- NOT in `PIPELINE-MANIFEST.md` (Section B Stage 3 says "TBD -- OD explorations not yet complete" at line 185)
- NOT in `OD-outbound-findings.md` (file does not exist)
- NOT in any `provenance/stage-3-organization-od/` file (confirmed: zero grep matches in that directory)
- The inline header references "Future" consumers (OD-SYNTHESIS.md, HANDOFF-OD-TO-AD.md) that also do not exist yet

**Chain status:** OD-F-005 is fully defined in OD-006's inline header and tracked in checkpoint files, but has zero presence in the formal provenance infrastructure (provenance/ directory).

**Hops succeeded: 1/3 (1 partial)**

---

### EXT-SPAT-001 (from OD-005 header)

**Starting point:** OD-005-spatial.html, line 25 -- `EXT-SPAT-001 (Hub-and-Spoke ISLANDS) -- Square tiles in CSS Grid`

| Hop | File | Line(s) | Finding ID | Next Target | Status |
|-----|------|---------|-----------|-------------|--------|
| 1 | `explorations/organizational/OD-005-spatial.html` | 25 (inline header applied research), 478 (CSS comment), 1082 (research record) | EXT-SPAT-001 | Definition source file | **PASS** (reference found) |
| 2 | `knowledge-architecture/_od-audit-scratchpad/identity-brief.md` | 427 (table row: "Hub-and-Spoke ISLANDS -- square tiles in CSS Grid") | EXT-SPAT-001 definition | External research file or formal registry | **PARTIAL** (definition in scratchpad only) |
| 3 | `knowledge-architecture/OD-005-EXTERNAL-RESEARCH.md` | -- (file exists, 1725 lines, but does NOT use EXT-SPAT-### IDs -- uses descriptive resource names instead) | -- | -- | **FAIL -- ID NOT PRESENT IN SOURCE FILE** |

**BREAKS AT:** Hop 2/3 boundary -- EXT-SPAT-001 is defined in identity-brief.md (audit scratchpad) and research-refinement.md (line 224), but:
- `OD-005-EXTERNAL-RESEARCH.md` (1725 lines) does NOT use the EXT-SPAT-### naming convention -- it uses descriptive resource titles ("Kevin Lynch -- The Image of the City", etc.). The EXT-SPAT-### IDs were apparently assigned AFTER the research was conducted, during the audit/enrichment phase, not in the research file itself.
- No `EXT-RESEARCH-REGISTRY.md` exists
- No entry in `PIPELINE-MANIFEST.md`
- No entry in `OD-outbound-findings.md`
- The dark-matter-census (report 10, line 468) confirms: "EXT-SPAT-001 through 012 | OD-005-EXTERNAL-RESEARCH.md | 12 | NO" (not registered)

**Chain status:** EXT-SPAT-001 exists in OD-005's inline header and 2 audit scratchpad files, but has a naming gap -- the research source file (OD-005-EXTERNAL-RESEARCH.md) uses different naming, and no formal registry maps the EXT-SPAT-### IDs to their source resources.

**Hops succeeded: 1/3 (1 partial)**

---

## Baseline Scores

| Trace | Direction | Hops Succeeded | Total Possible | Score | Break Point |
|-------|-----------|---------------|----------------|-------|-------------|
| DD-F-006 (FRACTAL) | Forward | 3 | 4 | 75% | OD-outbound-findings.md missing |
| DD-F-001 (PULSE) | Forward | 3 | 4 | 75% | OD-outbound-findings.md missing |
| DD-F-004 (GEOLOGICAL) | Forward | 3 | 4 | 75% | OD-outbound-findings.md missing |
| EXT-CONV-001 | Backward | 1 | 3 | 33% | No formal registry; definition only in scratchpad |
| OD-F-005 | Backward | 1 | 3 | 33% | Not in provenance infrastructure; only in checkpoints |
| EXT-SPAT-001 | Backward | 1 | 3 | 33% | No registry; source file uses different naming |
| **AVERAGE** | **Both** | **10** | **21** | **48%** | |

---

## Key Diagnostic Findings

### 1. Single Point of Failure: OD-outbound-findings.md

All 3 forward traces break at the same point. The DD provenance chain (DD-outbound-findings.md -> HANDOFF-DD-TO-OD.md -> OD-RESEARCH-GATE.md) is complete and well-linked (3/3 hops pass). But the chain terminates at the OD formal provenance boundary because `OD-outbound-findings.md` was never created. This is the **#1 file to create** to restore forward chain continuity.

### 2. EXT-* Findings Are Provenance Dark Matter

EXT-CONV-001, EXT-SPAT-001, and (by inference) all ~50+ EXT-* findings exist only in:
- OD exploration inline headers (runtime references)
- Audit scratchpad files (identity-brief.md, research-refinement.md)

They have NO presence in formal provenance infrastructure (no PIPELINE-MANIFEST entry, no dedicated registry file, no OD-outbound-findings.md entry). The planned `EXT-RESEARCH-REGISTRY.md` was never created.

### 3. OD-F-### Findings Are Checkpoint-Only

OD-F-005 (and by inference OD-F-001 through OD-F-008) are tracked in checkpoint files (OD-CHECKPOINT.md, RESEARCH-ACTIVE.md) but have zero presence in the provenance/ directory tree. The provenance infrastructure for Stage 3 is structurally incomplete -- only STAGE-HEADER.md, OD-RESEARCH-GATE.md, and CLAUDE.md exist; the 3 critical output files (OD-outbound-findings.md, OD-SYNTHESIS.md, HANDOFF-OD-TO-AD.md) are all missing.

### 4. Naming Discontinuity in EXT-SPAT-*

The EXT-SPAT-### IDs were assigned post-hoc during the audit/enrichment phase, not in the original research file. OD-005-EXTERNAL-RESEARCH.md (1725 lines) uses descriptive resource names. This means even if a registry existed, there is no ID-to-source mapping in the research file itself.

### 5. Forward Chain Is Strong Through DD Infrastructure

The DD provenance infrastructure (DD-outbound-findings.md, HANDOFF-DD-TO-OD.md, OD-RESEARCH-GATE.md) forms a tight, well-linked 3-hop chain. Every DD-F finding traced successfully through all 3 DD infrastructure files with multiple line references per hop. The problem is exclusively at the DD->OD formal boundary.
