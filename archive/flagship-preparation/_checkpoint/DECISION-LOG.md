# DECISION LOG -- Flagship Pre-Flight

> APPEND-ONLY. Captures WHY for every decision. Never edit previous entries.

---

## [2026-02-17T00:00] D-001: Implementation Order for Phase 1 Enrichments

**Decision:** Follow prescribed order B1 -> C3 -> A3+D3 -> A1 -> A2 -> B3
**Why:** Cross-gap dependency tree in 02-enrichment-specifications.md shows:
- A3 (content density floors) references C3 max spacing tokens
- D3 (content-form fit) references A3 density definitions
- A2 (restraint protocol) references A1 transition types
- B3 (front-loaded weight) references B1 void measurement methodology
**Alternative considered:** Parallel all 7 -- rejected because dependencies require ordering within files
**Actual parallelism:** 3 workers by TARGET FILE (prohibitions.md, mechanism-catalog.md, semantic-rules.md + tokens.css), each applying their enrichments in prescribed order

---

## [2026-02-17T00:00] D-002: Worker Topology -- 3 Workers by File, Not 7 by Enrichment

**Decision:** 3 enrichment workers (1 per target file group) + 1 skill worker, each with paired auditor
**Why:** Per-file ownership = zero contention (confirmed pattern from 6+ previous teams). 7 separate workers for 4 files would create write conflicts. Workers apply enrichments sequentially within their file.
**Worker assignments:**
- Worker 1: prohibitions.md (B1 then B3) + tokens.css (C3) -- 3 enrichments, 2 files
- Worker 2: mechanism-catalog.md (A1 then A2) -- 2 enrichments, 1 file
- Worker 3: semantic-rules.md (A3 then D3) -- 2 enrichments, 1 file
- Worker 4 (skill): PA SKILL.md (BT-08, BT-10, BT-11) + tension-composition SKILL.md (BT-09) -- 4 enrichments, 2 files

---

## [2026-02-17T00:00] D-003: Checkpoint Architecture Created Per User Directive

**Decision:** Create 6-file checkpoint system in `_checkpoint/` immediately before spawning any agents
**Why:** User explicitly required this as anti-compaction infrastructure. Quote: "This is not optional. This is the infrastructure that makes everything else possible."
**Impact:** Adds ~5 min setup overhead but ensures zero information loss across context boundaries

---

## [2026-02-17T00:20] D-004: Supplementary File Insights for Prompt Assembly

**Decision:** Document key supplementary findings that must inform Phase 5 prompt assembly
**Source:** supplementary-files-summary.md (8 files, ~6,684 lines)

**Critical for Phase 5:**
1. S3: Builder prompt CEILING ~120 lines (longer = DILUTION, not PRECISION). CD-006 with shorter prompt = 39/40.
2. S4: Mechanism hard cap should be 14, not 16 (reducing from TC-04's value). Restraint reject-to-deploy ratio >=2.0.
3. V1: VOID THRESHOLD DISCREPANCY still active: SC-02=2160px vs SP-02=1620px. V1 calculates 1350px as correct (1.5x900px height). Registry says 2160px. MUST RESOLVE.
4. V2: Prompt structure = CONVICTION -> EXECUTION -> CONVICTION (sandwich). Builder reads conviction first AND last.
5. V2: "Performative checkpoints" are useless. Every checkpoint must produce an ARTIFACT.
6. V2: 5 interaction types for conviction layer (REINFORCING, MODULATING, RESPONDING, CONTRASTING, CASCADING).
7. V3: Each rule gets ~1/56th attention at 56 rules. PRIMACY EFFECT is the ONLY amplifier.
8. V3: Passes 1-3 = 93% quality in 160 min. Passes 4-6 = +5% in +70 min. Cliff between Pass 3 and 4.
9. V3: CD-006 container width was 1100px (NOT 960px) -- important for container width rule.
10. S4: Gate fatigue risk: 47 evaluation points = ~235 min overhead > estimated build time. Combine gates.

**Action required:** Phase 5 prompt assembler MUST read supplementary-files-summary.md before writing.

---
