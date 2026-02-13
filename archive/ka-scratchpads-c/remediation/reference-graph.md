# Reference Graph — Diagnostic Scan

**Generated:** 2026-02-08
**Scope:** All CLAUDE.md files, key infrastructure files in showcase/ directory tree
**Files Scanned:** 25 source files (16 CLAUDE.md + 9 infrastructure files)

## Summary

- Total edges: 147
- Broken edges (target missing): 5
- Unreciprocated edges: 38
- Stale status claims: 12
- Orphan nodes: 4

---

## Stale Status Claims

| File | Claim | Reality | Line(s) |
|------|-------|---------|---------|
| `DESIGN-SYSTEM/provenance/CLAUDE.md` | stage-3-organization-od: "IN PROGRESS" | OD explorations COMPLETE (6/6 built, audited, visual audit PASSED per OD-CHECKPOINT) | L69 |
| `DESIGN-SYSTEM/provenance/CLAUDE.md` | stage-4-axis-ad: "PENDING" | Correct, but stage-3 claim above is stale | L70 |
| `DESIGN-SYSTEM/provenance/CLAUDE.md` | stage-5-combination-cd: "PENDING" | Correct (no stale) | L71 |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | "OD work is PENDING" (threading header L11) | OD work is COMPLETE — 6 explorations built and audited | L11 |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | Status: "IN PROGRESS" (body) | Should be COMPLETE — all 6 OD explorations built, audited, visual audit PASSED | L41 |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | OD-outbound-findings.md "PENDING" | File does not exist yet, but OD work IS complete — findings need extraction | L69 |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` | "PENDING — OD work has not begun" (threading header L31) | OD work IS COMPLETE — 6 explorations built, audited | L31 |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md` | Status: "IN PROGRESS" (body, H2) | Should be COMPLETE (explorations done, provenance chain files pending) | L74 |
| `DESIGN-SYSTEM/BACKBONE.md` | Stage 3 (OD): "IN PROGRESS" | OD explorations COMPLETE (6/6), provenance chain files pending | L110, L221-254 |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md` | frontmatter status: "PASSED" | Correct — gate was passed before builds. No stale claim here. | L8 |
| `checkpoints/DISCOVERIES-LOG.md` | OD-001 through OD-006: "NOT STARTED" | ALL 6 OD explorations are COMPLETE and audited per OD-CHECKPOINT | L367-483 |
| `checkpoints/DISCOVERIES-LOG.md` | "Explorations Completed: 6/24 minimum" | Should be 12/24 — 6 DD + 6 OD complete | L67 |

---

## Broken Edges (Target Missing)

| Source File | Target File | Reference Type | Issue |
|-------------|-------------|----------------|-------|
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | `stage-3-organization-od/OD-outbound-findings.md` | PRODUCES | File does not exist — OD findings not yet extracted to formal document |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | `stage-3-organization-od/HANDOFF-OD-TO-AD.md` | PRODUCES | File does not exist — handoff not yet created |
| `DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md` | `stage-3-organization-od/OD-SYNTHESIS.md` | PRODUCES | File does not exist — synthesis not yet created |
| `DESIGN-SYSTEM/provenance/stage-5-combination-cd/CLAUDE.md` | `stage-4-axis-ad/HANDOFF-AD-TO-CD.md` | CONSUMES (future) | File does not exist — AD not started, expected |
| `DESIGN-SYSTEM/provenance/stage-4-axis-ad/CLAUDE.md` | `stage-3-organization-od/HANDOFF-OD-TO-AD.md` | CONSUMES (future) | File does not exist — handoff not yet created |

---

## Full Edge List

All paths relative to `docs-spa/app/showcase/`.

### Source: DESIGN-SYSTEM/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 1 | DESIGN-SYSTEM/README.md | BUILT ON | YES | NO (README doesn't reference CLAUDE.md) |
| 2 | DESIGN-SYSTEM/BACKBONE.md | BUILT ON | YES | YES (BACKBONE consumed-by lists CLAUDE.md) |
| 3 | DESIGN-SYSTEM/patterns/PATTERN-INDEX.md | LINKS TO | YES | NO |
| 4 | DESIGN-SYSTEM/tokens/* (colors, typography, spacing, geometry) | LINKS TO | YES | NO |
| 5 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | LINKS TO | YES | YES (PIPELINE-MANIFEST consumed-by lists CLAUDE.md) |
| 6 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | LINKS TO | YES | YES (HANDOFF consumed-by lists CLAUDE.md) |
| 7 | DESIGN-SYSTEM/components/OVERVIEW.md | LINKS TO | YES | NO |
| 8 | DESIGN-SYSTEM/anti-patterns/registry.md | LINKS TO | YES | NO |
| 9 | DESIGN-SYSTEM/guides/migration-guide.md | LINKS TO | YES | NO |
| 10 | explorations/ | LINKS TO | YES | NO |
| 11 | checkpoints/ | LINKS TO | YES | NO |

### Source: DESIGN-SYSTEM/BACKBONE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 12 | DESIGN-SYSTEM/patterns/PATTERN-INDEX.md | LINKS TO | YES | NO |
| 13 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | LINKS TO | YES | NO |
| 14 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | LINKS TO | YES | NO |
| 15 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | LINKS TO | YES | YES |
| 16 | DESIGN-SYSTEM/provenance/original-research/ | LINKS TO | YES | NO |
| 17 | checkpoints/SOUL-DISCOVERIES.md | LINKS TO | YES | NO |
| 18 | checkpoints/RESEARCH-ACTIVE.md | LINKS TO | YES | NO |
| 19 | explorations/density/ | LINKS TO | YES | NO |
| 20 | explorations/organizational/ | LINKS TO | YES | NO |
| 21 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | BUILT ON | YES | YES |
| 22 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | BUILT ON | YES | NO |
| 23 | DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md | BUILT ON | YES | NO |
| 24 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | BUILT ON | YES | NO |
| 25 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | BUILT ON | YES | NO |

### Source: DESIGN-SYSTEM/provenance/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 26 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | BUILT ON | YES | YES |
| 27 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | LINKS TO | YES | YES |
| 28 | DESIGN-SYSTEM/provenance/original-research/ | LINKS TO | YES | NO |
| 29 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | LINKS TO | YES | NO |
| 30 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | LINKS TO | YES | NO |
| 31 | DESIGN-SYSTEM/BACKBONE.md | CITES | YES | NO |
| 32 | DESIGN-SYSTEM/patterns/ | CITES | YES | NO |
| 33 | explorations/ | CITES | YES | NO |

### Source: DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 34 | DESIGN-SYSTEM/BACKBONE.md | BUILT ON (frontmatter) | YES | YES |
| 35 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | BUILT ON | YES | NO |
| 36 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | BUILT ON | YES | NO |
| 37 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | BUILT ON | YES | NO |
| 38 | DESIGN-SYSTEM/provenance/original-research/R1-R5 | BUILT ON | YES | NO |
| 39 | DESIGN-SYSTEM/patterns/density-patterns.md | CONSUMED BY | YES | NO |

### Source: DESIGN-SYSTEM/provenance/stage-1-components/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 40 | DESIGN-SYSTEM/provenance/stage-1-components/STAGE-HEADER.md | LINKS TO | YES | NO |
| 41 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | LINKS TO | YES | NO |
| 42 | DESIGN-SYSTEM/provenance/stage-1-components/FOUNDATION-REMEDIATION-SYNTHESIS.md | LINKS TO | YES | NO |
| 43 | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | CITES (successor) | YES | YES |

### Source: DESIGN-SYSTEM/provenance/stage-2-density-dd/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 44 | DESIGN-SYSTEM/provenance/stage-2-density-dd/STAGE-HEADER.md | LINKS TO | YES | NO |
| 45 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | LINKS TO | YES | NO |
| 46 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | LINKS TO | YES | YES |
| 47 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | LINKS TO | YES | NO |
| 48 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-REAUDIT-CHECKPOINT.md | LINKS TO | YES | NO |
| 49 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | CONSUMES | YES | YES |
| 50 | DESIGN-SYSTEM/provenance/original-research/R3-DENSITY-DIMENSIONS.md | CONSUMES | YES | NO |
| 51 | DESIGN-SYSTEM/provenance/stage-3-organization-od/ | PRODUCES FOR | YES | YES |
| 52 | DESIGN-SYSTEM/patterns/density-patterns.md | PRODUCES | YES | NO |

### Source: DESIGN-SYSTEM/provenance/stage-3-organization-od/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 53 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | CONSUMES | YES | NO |
| 54 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | CONSUMES | YES | YES |
| 55 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | CONSUMES | YES | NO |
| 56 | DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md | CONSUMES | YES | NO |
| 57 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | CONSUMES | YES | NO |
| 58 | DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md | LINKS TO | YES | NO |
| 59 | DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md | PRODUCES | NO (MISSING) | N/A |
| 60 | DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md | PRODUCES | NO (MISSING) | N/A |
| 61 | DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md | PRODUCES | NO (MISSING) | N/A |
| 62 | DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md | LINKS TO | YES | NO |

### Source: DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 63 | DESIGN-SYSTEM/provenance/stage-2-density-dd/STAGE-HEADER.md | BUILT ON (frontmatter predecessor) | YES | NO |
| 64 | DESIGN-SYSTEM/provenance/stage-4-axis-ad/STAGE-HEADER.md | CONSUMED BY (frontmatter successor) | YES | NO |
| 65 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | CONSUMES | YES | YES |
| 66 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | CONSUMES | YES | NO |
| 67 | DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md | CONSUMES | YES | NO |
| 68 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | CONSUMES | YES | NO |
| 69 | DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md | CONSUMES | YES | NO |
| 70 | DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md | CONSUMES | YES | NO |
| 71 | DESIGN-SYSTEM/BACKBONE.md | CITES (frontmatter backbone_ref) | YES | YES |
| 72 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | CITES (frontmatter manifest_ref) | YES | YES |
| 73 | DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-outbound-findings.md | PRODUCES | NO (MISSING) | N/A |
| 74 | DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md | PRODUCES | NO (MISSING) | N/A |
| 75 | DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md | PRODUCES | YES | NO |
| 76 | DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-SYNTHESIS.md | PRODUCES | NO (MISSING) | N/A |
| 77 | explorations/organizational/OD-001-006.html | PRODUCES | YES | NO |
| 78 | DESIGN-SYSTEM/patterns/organizational-patterns.md | PRODUCES | NO (MISSING) | N/A |

### Source: DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 79 | DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md | BUILT ON (frontmatter predecessor) | YES | NO |
| 80 | DESIGN-SYSTEM/BACKBONE.md | CITES (frontmatter backbone_ref) | YES | NO |
| 81 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | CONSUMES | YES | NO |
| 82 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | CONSUMES | YES | NO |
| 83 | DESIGN-SYSTEM/patterns/density-patterns.md | CONSUMES | YES | NO |
| 84 | explorations/density/DD-001-breathing.html | CONSUMES | YES | NO |
| 85 | explorations/density/DD-003-islands.html | CONSUMES | YES | NO |
| 86 | explorations/density/DD-005-rivers.html | CONSUMES | YES | NO |
| 87 | explorations/density/DD-006-fractal.html | CONSUMES | YES | NO |

### Source: DESIGN-SYSTEM/provenance/stage-4-axis-ad/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 88 | DESIGN-SYSTEM/provenance/stage-3-organization-od/HANDOFF-OD-TO-AD.md | CONSUMES (future) | NO (MISSING) | N/A |
| 89 | DESIGN-SYSTEM/provenance/original-research/R4-AXIS-INNOVATIONS.md | CONSUMES | YES | NO |
| 90 | DESIGN-SYSTEM/provenance/stage-4-axis-ad/STAGE-HEADER.md | LINKS TO | YES | NO |

### Source: DESIGN-SYSTEM/provenance/stage-5-combination-cd/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 91 | DESIGN-SYSTEM/provenance/stage-4-axis-ad/HANDOFF-AD-TO-CD.md | CONSUMES (future) | NO (MISSING) | N/A |
| 92 | DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md | CONSUMES | YES | NO |
| 93 | DESIGN-SYSTEM/provenance/stage-5-combination-cd/STAGE-HEADER.md | LINKS TO | YES | NO |

### Source: DESIGN-SYSTEM/provenance/original-research/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 94 | DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md | LINKS TO | YES | NO |
| 95 | DESIGN-SYSTEM/provenance/original-research/R2-CREATIVE-LAYOUTS.md | LINKS TO | YES | NO |
| 96 | DESIGN-SYSTEM/provenance/original-research/R3-DENSITY-DIMENSIONS.md | LINKS TO | YES | NO |
| 97 | DESIGN-SYSTEM/provenance/original-research/R4-AXIS-INNOVATIONS.md | LINKS TO | YES | NO |
| 98 | DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md | LINKS TO | YES | NO |
| 99 | DESIGN-SYSTEM/provenance/original-research/RESEARCH-SYNTHESIS.md | LINKS TO | YES | NO |
| 100 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | CITES | YES | NO |
| 101 | checkpoints/RESEARCH-ACTIVE.md | CITES | YES | NO |

### Source: DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 102 | DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md | BUILT ON | YES | NO |
| 103 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | CONSUMES | YES | NO |
| 104 | DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md | CONSUMES | YES | NO |
| 105 | DESIGN-SYSTEM/provenance/original-research/R5-COMBINATION-THEORY.md | CONSUMES | YES | NO |
| 106 | DESIGN-SYSTEM/provenance/original-research/R3-DENSITY-DIMENSIONS.md | CONSUMES | YES | NO |
| 107 | DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md | CONSUMED BY (frontmatter successor) | YES | YES |
| 108 | DESIGN-SYSTEM/BACKBONE.md | CITES (frontmatter backbone_ref) | YES | YES |
| 109 | DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md | CITES (frontmatter manifest_ref) | YES | NO |
| 110 | DESIGN-SYSTEM/provenance/CLAUDE.md | CONSUMED BY | YES | YES |
| 111 | DESIGN-SYSTEM/CLAUDE.md | CONSUMED BY | YES | YES |
| 112 | explorations/organizational/CLAUDE.md | CONSUMED BY | YES | YES |

### Source: knowledge-architecture/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 113 | knowledge-architecture/PIPELINE-BACKBONE.md | BUILT ON | YES | NO |
| 114 | knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md | BUILT ON | YES | YES (SoTR consumed-by lists ka/CLAUDE.md) |
| 115 | knowledge-architecture/PHASE-1B-MEGA-DEBRIEF.md | BUILT ON | YES | NO |
| 116 | knowledge-architecture/KA-DECISIONS.md | LINKS TO | YES | NO |
| 117 | knowledge-architecture/KA-POSITION.md | LINKS TO | YES | NO |
| 118 | knowledge-architecture/KA-VERIFICATION.md | LINKS TO | YES | NO |
| 119 | dependency-trace/PHASE-2A-CLASSIFICATION.md | LINKS TO | YES | NO |
| 120 | dependency-trace/02-threading-data/ | LINKS TO | YES | NO |

### Source: knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 121 | (external) perceptual-audit-v2/synthesis/MASTER-SOUL-SYNTHESIS.md | BUILT ON | YES (external) | NO |
| 122 | (external) perceptual-audit-v2/foundation/SOUL-TRANSLATION-GUIDE.md | BUILT ON | YES (external) | NO |
| 123 | (external) perceptual-audit-v2/foundation/KORTAI-ESSENCE-FOUNDATION.md | BUILT ON | YES (external) | NO |
| 124 | (external) perceptual-audit-v2/synthesis/CHARACTER-FAMILY-COMPLETE.md | BUILT ON | YES (external) | NO |
| 125 | (external) perceptual-audit-v2/synthesis/DESIGN-TOKEN-SUMMARY.md | BUILT ON | YES (external) | NO |
| 126 | research/ R1-R5 files | CITES | YES | NO |
| 127 | explorations/density/DD-002-gradient.html | CITES (T3 gold standard) | YES | NO |
| 128 | checkpoints/MASTER-STATE.md | CITES | YES | NO |
| 129 | checkpoints/DISCOVERIES-LOG.md | CITES | YES | NO |
| 130 | checkpoints/SECTIONS-PROGRESS.md | CITES | YES | NO |
| 131 | knowledge-architecture/KA-POSITION.md | CITES | YES | NO |
| 132 | knowledge-architecture/KA-DECISIONS.md | CITES | YES | NO |
| 133 | knowledge-architecture/KA-VERIFICATION.md | CITES | YES | NO |
| 134 | FINDINGS-INDEX.md | CITES (T2 FRAMEWORK) | YES | NO |

### Source: checkpoints/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 135 | checkpoints/MASTER-STATE.md | LINKS TO | YES | NO |
| 136 | checkpoints/RESEARCH-ACTIVE.md | LINKS TO | YES | NO |
| 137 | checkpoints/SOUL-DISCOVERIES.md | LINKS TO | YES | NO |
| 138 | checkpoints/DISCOVERIES-LOG.md | LINKS TO | YES | NO |
| 139 | DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md | CITES (sync target) | YES | NO |
| 140 | DESIGN-SYSTEM/provenance/RESEARCH-ACTIVE.md | CITES (sync target) | YES | NO |
| 141 | DESIGN-SYSTEM/provenance/stage-1-components/ | CITES (sync target) | YES | NO |
| 142 | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | CITES (sync target) | YES | NO |

### Source: checkpoints/DISCOVERIES-LOG.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 143 | checkpoints/DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md | CITES | YES | NO |
| 144 | checkpoints/DD-REAUDIT-CHECKPOINT.md | BUILT ON | YES | YES |
| 145 | explorations/density/DD-001-breathing.html | CITES | YES | NO |
| 146 | explorations/density/DD-006-fractal.html | CITES | YES | NO |

### Source: explorations/CLAUDE.md

| # | Target | Type | Target Exists? | Reciprocated? |
|---|--------|------|----------------|---------------|
| 147 | DESIGN-SYSTEM/provenance/stage-2-density-dd/ | LINKS TO (provenance) | YES | YES |

---

## Orphan Nodes

Files that appear in the formal provenance tree but have **zero inbound references from the scanned infrastructure files**:

| File | Notes |
|------|-------|
| `DESIGN-SYSTEM/QUICK-START.md` | Listed in WHAT'S HERE tables but never referenced as BUILT ON or CONSUMED BY |
| `DESIGN-SYSTEM/guides/migration-guide.md` | Only referenced in navigation table of CLAUDE.md, not in any provenance chain |
| `DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-REAUDIT-CHECKPOINT.md` | Only referenced from DISCOVERIES-LOG; not in any CLAUDE.md BUILT ON or CONSUMED BY |
| `DESIGN-SYSTEM/provenance/stage-2-density-dd/STAGE-HEADER.md` | Referenced as predecessor in stage-3 frontmatter, but not in any CLAUDE.md body section |

---

## Cross-Cutting Issues

### 1. OD Provenance Gap (CRITICAL)
The OD explorations are COMPLETE (6/6 built, audited, visual audit PASSED per OD-CHECKPOINT.md), but the following formal provenance chain files do NOT exist:
- `OD-outbound-findings.md` — OD-F-### findings not extracted
- `OD-SYNTHESIS.md` — Cross-OD insights not written
- `HANDOFF-OD-TO-AD.md` — Gate file for Stage 4 not created
- `organizational-patterns.md` — Pattern file not created

This means **the OD findings exist only in the HTML explorations and OD-CHECKPOINT.md**, not in the formal provenance chain. Downstream consumers (AD, CD) cannot consume OD outputs through formal channels.

### 2. DISCOVERIES-LOG vs OD-CHECKPOINT Divergence
`checkpoints/DISCOVERIES-LOG.md` shows all 6 OD explorations as "NOT STARTED" with blank scores (lines 367-483), while `checkpoints/OD-CHECKPOINT.md` shows all 6 as COMPLETE with scores and INCLUDE decisions. These two files contradict each other.

### 3. Unreciprocated Reference Pattern
Most CONSUMES edges from stage-3 and stage-4 CLAUDE.md files to upstream artifacts (DD-outbound-findings, component-findings, SOUL-DISCOVERIES) are unreciprocated — the upstream files don't list these as consumers. This is acceptable for stage-1/stage-2 files that were written before stage-3/stage-4 existed, but indicates the upstream files have not been updated to reflect their actual consumers.

### 4. SOURCE-OF-TRUTH-REGISTRY Internal Contradiction
The registry lists TYPOGRAPHY-TOKENS.md, SPACING-TOKENS.md, COLOR-TOKENS.md, and CONTAINER-TOKENS.md as both T1 FOUNDATION (lines 154-157) AND as SUPERSEDED by DESIGN-TOKEN-SUMMARY.md (lines 230-233). A file cannot be both authoritative and superseded.

### 5. R-2 Finding Count Discrepancy
`research/CLAUDE.md` and `DESIGN-SYSTEM/provenance/original-research/CLAUDE.md` both list R-2 as 78 findings. `showcase/CLAUDE.md` lists 337 total = 28+27+51+192+39, which would make R-2 = 27. The research/CLAUDE.md notes this as a "known discrepancy" (line 19-21), but it remains unresolved. The total 337 likely uses 78, not 27 (since 28+78+51+192+39=388, not 337). Alternatively 337 = 28+27+51+192+39, so R-2 = 27 in reality.

---

## Edge Statistics by Type

| Reference Type | Count | Broken | Unreciprocated |
|----------------|-------|--------|----------------|
| BUILT ON | 28 | 0 | 18 |
| CONSUMES | 31 | 2 | 22 |
| CONSUMED BY | 8 | 0 | 2 |
| LINKS TO | 52 | 0 | 42 |
| PRODUCES | 11 | 5 | 4 |
| CITES | 17 | 0 | 14 |
| **TOTAL** | **147** | **7** | **102** |

**Note:** The "unreciprocated" count for LINKS TO is expected since LINKS TO is navigational, not formal provenance. Restricting to formal provenance types (BUILT ON, CONSUMES, CONSUMED BY, PRODUCES), unreciprocated edges = 38.

---

## Key Recommendations for Remediation

1. **Create OD provenance chain files** (OD-outbound-findings.md, OD-SYNTHESIS.md, HANDOFF-OD-TO-AD.md, organizational-patterns.md) — CRITICAL, blocks AD
2. **Update DISCOVERIES-LOG.md** OD-001 through OD-006 entries from "NOT STARTED" to actual scores/decisions
3. **Update DISCOVERIES-LOG.md** "Explorations Completed" count from 6/24 to 12/24
4. **Update stage-3 CLAUDE.md and STAGE-HEADER.md** status claims from IN PROGRESS/PENDING to reflect OD completion
5. **Update BACKBONE.md** Stage 3 section from IN PROGRESS to reflect OD exploraton completion
6. **Resolve SOURCE-OF-TRUTH-REGISTRY** T1/SUPERSEDED contradiction for tracking token files
7. **Resolve R-2 finding count** (78 vs 27) across all files
