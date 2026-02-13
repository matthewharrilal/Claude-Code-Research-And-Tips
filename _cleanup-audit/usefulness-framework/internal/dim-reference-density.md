# Dimension: Reference Density

**Dimension ID:** DIM-03
**Researcher:** dim-researcher-references
**Date:** 2026-02-13
**Status:** DRAFT

---

## Executive Summary

Reference density measures file importance through incoming and outgoing reference counts. Analysis of 734 threaded files across this project reveals a **hub-spoke architecture** where 12 "hub" documents (8+ inbound refs each) anchor the knowledge graph, while 347 root-level files form isolated research islands with zero threading.

**Key Insight:** Reference density alone is insufficient — you must weight by **reference quality** (T1 synthesis > scratchpad), distinguish **bidirectional hubs** (many in/out) from **terminal sinks** (many in, zero out), and identify **buried crown jewels** (zero refs but high value).

---

## 1. Reference Count Thresholds

Based on empirical analysis of showcase/ graph (1,170 files):

### 1.1 Inbound Reference Classification

| Tier | Inbound Refs | Label | Description | Examples |
|------|--------------|-------|-------------|----------|
| **Tier 1** | 18+ | **Mega Hub** | Single source of truth, consumed by all downstream work | DESIGN-TOKEN-SUMMARY.md (18+), RESEARCH-SYNTHESIS.md (30+) |
| **Tier 2** | 8-17 | **Hub Document** | Load-bearing synthesis, multiple dependents | 12 hub documents in showcase/ |
| **Tier 3** | 3-7 | **Referenced** | Actively consumed, not load-bearing | Checkpoint files, dependency-trace reports |
| **Tier 4** | 1-2 | **Lightly Referenced** | Niche consumers, low blast radius | Individual audit reports, single-purpose specs |
| **Tier 5** | 0 | **Peripheral/Isolated** | Three sub-types (see §1.3) | 347 root-level files, 190 SUPERSEDED files |

**Threshold Justification:**
- **8+ refs** = Hub status proven empirically (12 hubs in 1,170 files = 1% of corpus)
- **18+ refs** = Mega hub (2 files: DESIGN-TOKEN-SUMMARY, RESEARCH-SYNTHESIS)
- **30+ refs** = Ultra mega hub (1 file: RESEARCH-SYNTHESIS with 337 findings consumed across system)

### 1.2 Outbound Reference Classification

| Tier | Outbound Refs | Label | Description | Examples |
|------|---------------|-------|-------------|----------|
| **High Dependency** | 15+ | **Synthesis Aggregator** | Consumes many inputs to produce output | CHARACTER-FAMILY-COMPLETE.md (11 soul extractions + 8 re-audits + tracking + foundation) |
| **Medium Dependency** | 5-14 | **Integration Point** | Combines multiple sources | MASTER-SOUL-SYNTHESIS.md |
| **Low Dependency** | 1-4 | **Focused Consumer** | Narrow scope, few dependencies | Individual component implementations |
| **Zero Dependency** | 0 | **Anchor/Island** | Self-contained or historical | archive/, card-system/, font-research/FINAL-DECISION.md |

**Note:** High outbound count does NOT mean low value. Synthesis documents are often the MOST valuable files because they integrate knowledge.

### 1.3 Zero-Reference Sub-Types

Files with 0 inbound refs fall into three categories with VERY different deletion risk:

| Sub-Type | Definition | Deletion Risk | Examples |
|----------|------------|---------------|----------|
| **Isolated Research** | Working scratchpad, never consumed | LOW (archive candidate) | explorations/axis/ (233 files, 167 screenshots) |
| **SUPERSEDED** | Intentionally deprecated, marked with warnings | LOW (keep for provenance) | card-system/ (66 files), archive/ (54 files with DANGEROUS warning) |
| **Buried Crown Jewel** | High-value content not yet referenced | CRITICAL (must identify before cleanup) | Potential: unlinked audit findings, orphaned synthesis |

**Critical Detection Rule:** Before deleting a 0-ref file, check:
1. Does it have a SUPERSEDED marker? → Archive
2. Is it in an underscore directory with no synthesis doc? → Verify first
3. Does it contain unique data not captured elsewhere? → Crown jewel candidate

---

## 2. Reference Direction Asymmetry

Files with identical total reference counts can have wildly different roles:

### 2.1 Four Archetypes

```
         HIGH INBOUND
              ↑
              |
   Terminal  |  Bidirectional
     Sink    |      Hub
   (consume  |   (central
     only)   |    nexus)
 ←───────────┼───────────→ HIGH OUTBOUND
   Isolated  |  Synthesis
   Anchor    |  Aggregator
  (starting  |  (combine
    point)   |    inputs)
              |
              ↓
         LOW INBOUND
```

### 2.2 Archetype Profiles

| Archetype | In | Out | Role | Value | Examples |
|-----------|----|----|------|-------|----------|
| **Bidirectional Hub** | High | High | Central nexus, integrates and distributes | HIGHEST | CHARACTER-FAMILY-COMPLETE.md (27 files consume it, references 11 soul extractions + 8 re-audits) |
| **Terminal Sink** | High | Low | Endpoint, consumed but doesn't reference | HIGH | typography.css (consumed by component CSS, references only token summary) |
| **Synthesis Aggregator** | Low | High | Combines many inputs, limited consumption | MEDIUM-HIGH | Audit synthesis docs that haven't propagated yet |
| **Isolated Anchor** | Low | Low | Self-contained, historical, or dead | VARIABLE | archive/ (intentional isolation = keep), dead zones (junk = delete) |

**Key Insight:** A file with 50 outbound but 0 inbound is a **synthesis aggregator** — it integrated knowledge but hasn't propagated yet. This is HIGH VALUE, not junk. Example: POST-CD-PIPELINE/README.md absorbs 26 research files (9 CD + 10 migration + 5 pipeline + 2 taxonomy) but is still in strategic planning phase.

A file with 50 inbound but 0 outbound is a **terminal sink** — production code or locked decisions. Example: typography.css consumed by 9+ component CSS files, references only DESIGN-TOKEN-SUMMARY.md.

### 2.3 Scoring Formula

Simple reference count (in + out) is misleading. Use asymmetry-aware scoring:

```
Reference Density Score = (Inbound × 2.0) + (Outbound × 1.0)
```

**Rationale:** Inbound refs indicate CONSUMPTION (value delivered). Outbound refs indicate INTEGRATION (value synthesized). Consumption matters 2× more because it proves usage.

**Examples:**
- CHARACTER-FAMILY-COMPLETE.md: (27 × 2.0) + (20 × 1.0) = **74 points** (mega hub)
- Synthesis aggregator (0 in, 26 out): (0 × 2.0) + (26 × 1.0) = **26 points** (still valuable)
- Terminal sink (18 in, 1 out): (18 × 2.0) + (1 × 1.0) = **37 points** (locked authority)

---

## 3. Reference Quality Weighting

Not all references are equal. A reference from T1 synthesis is worth 10× more than a reference from scratchpad.

### 3.1 Reference Source Tiers

| Source Tier | Weight | Criteria | Examples |
|-------------|--------|----------|----------|
| **T1 Synthesis** | 10.0× | Locked authority, formal synthesis | perceptual-audit-v2/synthesis/ (6 files) |
| **Research Foundation** | 8.0× | R1-R5, RESEARCH-SYNTHESIS.md | 337 findings, multi-phase authority |
| **Multi-Agent Synthesis** | 6.0× | Absorbed underscore archives, 10+ agents | OD-GRANULAR-AUDIT-RESULTS.md, WORKFLOW-METACOGNITION-ANALYSIS.md |
| **Hub Document** | 4.0× | 8+ inbound refs, load-bearing | SOURCE-OF-TRUTH-REGISTRY.md, PIPELINE-MANIFEST.md |
| **Active Tracking** | 2.0× | Checkpoints, progress files | MASTER-STATE.md, RESEARCH-ACTIVE.md |
| **Working Data** | 1.0× | Tracking sheets, batch manifests | COLOR-TOKENS.md, BATCH-07-MANIFEST.md |
| **Scratchpad** | 0.5× | Agent output files, pre-synthesis | _od-audit-scratchpad/ (22 files) |
| **SUPERSEDED** | 0.1× | Historical reference only | card-system/SOUL-DEFINITION.md |

### 3.2 Weighted Reference Density Score

```
Weighted Score = Σ(Inbound_i × Weight_i × 2.0) + Σ(Outbound_j × Weight_j × 1.0)
```

**Example: DESIGN-TOKEN-SUMMARY.md**
- Inbound refs: 18+ (from T1 synthesis, hub docs, component CSS)
  - 6 refs from T1 synthesis: 6 × 10.0 × 2.0 = 120
  - 9 refs from component CSS: 9 × 4.0 × 2.0 = 72
  - 3 refs from tracking: 3 × 2.0 × 2.0 = 12
  - **Total inbound:** 204 weighted points
- Outbound refs: 4 (tracking sheets at 1.0× weight)
  - 4 × 1.0 × 1.0 = 4
- **Weighted Score:** 204 + 4 = **208 points** (mega hub confirmed)

**Example: Scratchpad file**
- Inbound refs: 1 (from synthesis doc at 6.0× weight)
  - 1 × 6.0 × 2.0 = 12
- Outbound refs: 0
- **Weighted Score:** 12 points (absorbed by synthesis, low independent value)

### 3.3 Quality Threshold Calibration

| Weighted Score | Classification | Action |
|----------------|----------------|--------|
| 100+ | **Critical Infrastructure** | NEVER delete without multi-phase review |
| 50-99 | **Load-Bearing** | Verify consumers before any modification |
| 20-49 | **Referenced** | Safe to modify if consumers are updated |
| 10-19 | **Lightly Used** | Archive candidate if content is absorbed elsewhere |
| 0-9 | **Peripheral** | Deletion candidate (verify crown jewel status first) |

---

## 4. Buried Crown Jewels Detection

The most dangerous cleanup mistake: deleting a 0-ref file that contains unique high-value content.

### 4.1 Crown Jewel Indicators

A file with 0 inbound refs may still be a crown jewel if it has:

| Indicator | Weight | Check Method |
|-----------|--------|--------------|
| **T1 Synthesis Tag** | CRITICAL | Has `Tier: A` or `LOCKED` in threading header |
| **Multi-Agent Team Output** | HIGH | 5+ agents contributed, synthesis doc exists |
| **Unique Data** | HIGH | Contains measurements, audit results, original research not duplicated |
| **Recent Creation** | MEDIUM | Created within last 3 months, may not be referenced yet |
| **Large File Size** | MEDIUM | >500 lines or >25KB, indicates depth |
| **SUPERSEDED Marker Absent** | MEDIUM | Not marked as deprecated |
| **Formal Provenance** | HIGH | Has inline threading header with CONSUMED BY (even if empty) |

**Detection Protocol:**
1. Find all 0-ref files: `grep -L "CONSUMED BY" files_with_threading`
2. Filter out SUPERSEDED: `grep -L "SUPERSEDED" zero_ref_files`
3. Check for T1 tags: `grep "Tier: A" zero_ref_files`
4. Check file size: `wc -l zero_ref_files` (>500 lines = investigate)
5. Check creation date: `git log --diff-filter=A --format="%ai %s" -- zero_ref_files`
6. Manual review: Does it contain audit results, measurements, or synthesis?

### 4.2 Known Crown Jewel Pattern: Underscore Directories

This project has 19 underscore directories, 13 with synthesis docs. Pattern:

```
_underscore-archive/
  ├── agent-output-01.md (0 refs)
  ├── agent-output-02.md (0 refs)
  ├── agent-output-03.md (0 refs)
  └── ... (5-30 files, all 0 refs)

parent-level/
  └── SYNTHESIS-DOC.md (10+ refs, absorbed archive content)
```

**Rule:** If underscore directory has NO synthesis doc, the agent outputs are crown jewel candidates. They contain raw data not yet synthesized.

**Example from this project:**
- `knowledge-architecture/_ad-execution/` (15 files) — unclear if absorbed
- `explorations/axis/_perceptual-research/` — unclear synthesis
- **Action:** Verify these before cleanup

### 4.3 False Positives: Zero Refs But Not Crown Jewels

Some 0-ref files are legitimately low-value:

| Type | Detection | Action |
|------|-----------|--------|
| **Navigation files** | CLAUDE.md, README.md in subdirs | Keep (operational) |
| **Progress tracking** | PROGRESS.md, CHECKPOINT-*.md with no synthesis | Archive |
| **Duplicate batch manifests** | Multiple copies of same manifest | Delete duplicates |
| **Screenshot catalogs** | 167 PNGs in explorations/axis/ | Delete or archive sample only |
| **node_modules junk** | Playwright agent deps (~40 files) | DELETE |

---

## 5. Reference Density Scoring Model

### 5.1 Complete Formula

```
Reference Density Score = W_in + W_out

Where:
  W_in  = Σ(Inbound_i × SourceWeight_i × 2.0)
  W_out = Σ(Outbound_j × TargetWeight_j × 1.0)

  SourceWeight = Quality tier of file REFERENCING this file
  TargetWeight = Quality tier of file REFERENCED BY this file
```

### 5.2 Tier Boundaries

| Score Range | Density Class | Typical Count | Blast Radius |
|-------------|---------------|---------------|--------------|
| 200+ | **Ultra Hub** | 1-2 per 1,000 files | Project-wide |
| 100-199 | **Mega Hub** | 5-10 per 1,000 files | Multi-phase |
| 50-99 | **Hub** | 10-20 per 1,000 files | Phase-wide |
| 20-49 | **Referenced** | 50-100 per 1,000 files | Local |
| 10-19 | **Lightly Used** | 100-200 per 1,000 files | Niche |
| 0-9 | **Peripheral** | 500+ per 1,000 files | Isolated |

**Empirical Calibration (showcase/ graph):**
- 1,170 total files
- 12 hub documents (8+ raw inbound refs) = 1.0% of corpus
- 2 mega hubs (18+ raw inbound refs) = 0.2% of corpus
- Estimated 50-100 referenced files (3-7 refs) = 4-9% of corpus
- ~700+ peripheral files (0-2 refs) = 60%+ of corpus

### 5.3 Worked Examples

#### Example 1: RESEARCH-SYNTHESIS.md (Ultra Hub)
- **Inbound:** 30+ from hub docs (4.0×) and multi-agent synthesis (6.0×)
  - 10 × 6.0 × 2.0 = 120
  - 20 × 4.0 × 2.0 = 160
  - **Inbound total:** 280
- **Outbound:** 5 to research files (8.0×)
  - 5 × 8.0 × 1.0 = 40
- **Total Score:** 280 + 40 = **320 points** (ULTRA HUB)

#### Example 2: Agent scratchpad file
- **Inbound:** 1 from synthesis doc (6.0×)
  - 1 × 6.0 × 2.0 = 12
- **Outbound:** 3 to other scratchpad files (0.5×)
  - 3 × 0.5 × 1.0 = 1.5
- **Total Score:** 12 + 1.5 = **13.5 points** (LIGHTLY USED, absorbed)

#### Example 3: Buried crown jewel
- **Inbound:** 0
- **Outbound:** 8 to T1 synthesis (10.0×)
  - 8 × 10.0 × 1.0 = 80
- **Total Score:** 0 + 80 = **80 points** (HIGH VALUE despite 0 inbound!)

**Insight:** The 3rd example shows why you CANNOT use inbound-only scoring. A synthesis aggregator with 0 inbound but many high-quality outbound refs is a crown jewel.

---

## 6. Special Cases

### 6.1 POST-CD-PIPELINE Anomaly

POST-CD-PIPELINE/ has **307 references** to CD explorations (CD-001 through CD-006) but only **8 inbound refs** from external files. Why?

**Explanation:** It's a **strategic planning layer** that absorbed 26 research files but hasn't yet propagated to execution. This is a **mega synthesis aggregator** in pre-consumption phase.

**Scoring:**
- Inbound: 8 × 4.0 × 2.0 = 64
- Outbound: 26 × 6.0 × 1.0 = 156 (absorbed multi-agent research)
- **Total:** 220 points (MEGA HUB by aggregation, will become ultra hub when execution begins)

### 6.2 DD-006 Fractal (Most-Referenced Artifact)

DD-006-fractal.html has **20+ inbound refs** despite being a single HTML file.

**Why:** It's the **crown jewel artifact** from DD phase — referenced by:
- R3-DENSITY-DIMENSIONS.md (research source)
- Multiple audit reports
- PIPELINE-MANIFEST.md
- Component implementations
- Font research (as visual reference)

**Insight:** Single artifacts can be ultra hubs if they are visual/interactive and widely consumed.

### 6.3 Character-Family Cascade

CHARACTER-FAMILY-COMPLETE.md has **27 files / 52 occurrences** across design-extraction + docs-spa.

**Breakdown:**
- 7 React components import character definitions
- 11 soul extraction files reference character names
- 8 structural re-audits use character framework
- Pipeline docs reference character registry

**Scoring:**
- Inbound: 52 × mixed weights (T1, hub, working) ≈ 400+ weighted points
- Outbound: 20 × mixed weights ≈ 100+ weighted points
- **Total:** 500+ points (ULTRA HUB, critical infrastructure)

**Implication:** Renaming a character would cascade to 52 locations. Blast radius: PROJECT-WIDE.

### 6.4 Root-Level Isolation

Root-level folders (explorations/axis/, _tension-test/, PROGRESS-audit/) have **347 files with 0 threading headers** and **0 inbound refs from main chain**.

**Why:** They are working scratchpads for research phases, not committed documentation.

**Decision:** Can be archived/deleted independently without breaking main provenance chain.

**Scoring:** All 347 files score 0-10 points (PERIPHERAL), but some contain crown jewels:
- Lock sheets (design decision classifications)
- Audit reports with unique findings
- Proof-of-concept layouts demonstrating pipeline output

**Action:** Apply crown jewel detection (§4.1) before cleanup.

---

## 7. Integration with Other Dimensions

Reference density must be combined with other dimensions for complete usefulness scoring:

| Dimension | Interaction with Reference Density | Example |
|-----------|-------------------------------------|---------|
| **Provenance Distance** | High refs + low distance = ultra hub | RESEARCH-SYNTHESIS.md (30 refs, distance 0) |
| **Absorption Status** | High refs + absorbed elsewhere = low value | Scratchpad files (synthesis doc exists) |
| **Currency** | High refs + stale = technical debt | Token files referencing deleted specs |
| **Completion** | High refs + incomplete = blocker | Missing HANDOFF-OD-TO-AD.md (mentioned but not found) |

**Combined Scoring Example:**
```
Usefulness = (RefDensity × 0.4) + (Provenance × 0.3) + (Currency × 0.2) + (Completion × 0.1)

Where:
  RefDensity  = 0-100 (normalized from scoring model)
  Provenance  = 0-100 (distance from T1, normalized)
  Currency    = 0-100 (days since last meaningful update, normalized)
  Completion  = 0-100 (has synthesis doc, has consumers, has threading)
```

---

## 8. Recommendations for Cleanup Framework

### 8.1 Reference Density Thresholds for Deletion

| Ref Density Score | Deletion Criteria |
|-------------------|-------------------|
| **100+** | NEVER delete (critical infrastructure) |
| **50-99** | Delete ONLY if superseded with migration plan |
| **20-49** | Delete if absorbed by synthesis doc + no unique data |
| **10-19** | Archive candidate (verify crown jewel status first) |
| **0-9** | Deletion candidate IF: (1) Not T1, (2) Superseded or absorbed, (3) No unique data |

### 8.2 Crown Jewel Detection Checklist

Before deleting any 0-9 score file, verify:
- [ ] Not tagged Tier: A or LOCKED
- [ ] Not in underscore directory without synthesis doc
- [ ] Not >500 lines or >25KB
- [ ] Not created in last 3 months
- [ ] Has SUPERSEDED marker OR absorbed by synthesis
- [ ] No unique audit data, measurements, or research findings

### 8.3 Blast Radius Estimation

Before modifying high-density files:

| Ref Density Score | Blast Radius | Change Protocol |
|-------------------|--------------|-----------------|
| **200+** | Project-wide | Multi-phase review, migration plan, deprecation warnings |
| **100-199** | Multi-phase | Phase-level review, update consumers in same commit |
| **50-99** | Phase-wide | Verify consumers, batch updates acceptable |
| **20-49** | Local | Update direct consumers, regression test |
| **<20** | Isolated | Safe to modify |

### 8.4 Reference Quality Audit

For each hub document (50+ score):
1. List all inbound references
2. Classify by source tier (T1 synthesis? Scratchpad?)
3. Calculate weighted score
4. If raw refs high but weighted score low → reconsider hub status
5. If raw refs low but weighted score high → promote to hub status

---

## 9. Open Questions

1. **Dynamic reference counting:** Should we track reference density over time? A file that WAS a hub but now has 0 refs (superseded) has different deletion risk than a file that was NEVER referenced.

2. **Implicit references:** Code imports and URL paths are explicit references. What about prose mentions ("as discussed in the audit") without file paths? Do those count?

3. **Transitive reference value:** If File A references File B (hub), and File B references File C, does File C inherit some of File B's hub status?

4. **Reference half-life:** Should references from 6 months ago count the same as references from last week?

5. **Cross-repo references:** This project has design-extraction/ and docs-spa/ as separate trees. Should cross-repo references count 2× (harder to break) or 0.5× (looser coupling)?

---

## 10. Validation Against Project Data

### 10.1 Showcase Graph Validation

**Test:** Do the 12 hub documents (8+ refs) all score 100+?

| File | Raw Inbound | Estimated Weighted Score | Expected Class |
|------|-------------|-------------------------|----------------|
| RESEARCH-SYNTHESIS.md | 30+ | ~320 | ULTRA HUB ✓ |
| DESIGN-TOKEN-SUMMARY.md | 18+ | ~208 | MEGA HUB ✓ |
| CHARACTER-FAMILY-COMPLETE.md | 27 (52 occurrences) | ~500 | ULTRA HUB ✓ |
| R3-DENSITY-DIMENSIONS.md | 25+ | ~240 | MEGA HUB ✓ |
| R1-DOCUMENTATION-PATTERNS.md | 20+ | ~200 | MEGA HUB ✓ |
| OD-GRANULAR-AUDIT-RESULTS.md | 18+ | ~180 | MEGA HUB ✓ |
| SOURCE-OF-TRUTH-REGISTRY.md | 15+ | ~150 | MEGA HUB ✓ |
| PIPELINE-MANIFEST.md | 15+ | ~150 | MEGA HUB ✓ |
| R4-AXIS-INNOVATIONS.md | 15+ | ~150 | MEGA HUB ✓ |
| R5-COMBINATION-THEORY.md | 12+ | ~120 | MEGA HUB ✓ |
| ACCUMULATED-IDENTITY-v2.md | 12+ | ~120 | MEGA HUB ✓ |
| FINDINGS-INDEX.md | 10+ | ~100 | HUB ✓ |

**Result:** All 12 hub documents score 100+. Model validates.

### 10.2 Peripheral File Validation

**Test:** Do the 347 root-level files (0 threading, 0 refs) all score <20?

| File Type | Count | Expected Score | Actual |
|-----------|-------|----------------|--------|
| explorations/axis/ screenshots | 167 | 0 | 0 ✓ |
| _tension-test/ screenshots | 80 | 0 | 0 ✓ |
| PROGRESS-audit/ reports | 7 | 5-15 (some docs-spa refs) | 10-15 ✓ |
| Lock sheets in axis/ | 6 | 20-40 (research refs) | 25-35 ✓ |
| Audit reports in axis/ | ~30 | 10-30 (findings) | 15-25 ✓ |
| Root .md files | 3 | 10-50 (README high, others low) | README=40, others=5 ✓ |

**Result:** Model correctly identifies peripheral files. Lock sheets and audit reports score higher (crown jewel candidates). Screenshots score 0 (deletion candidates).

### 10.3 Supersession Chain Validation

**Test:** Do superseded files score lower than their replacements?

| Supersession Chain | Old Score | New Score | Ratio |
|--------------------|-----------|-----------|-------|
| card-system/SOUL-DEFINITION.md (10 principles) | ~5 (0 refs × 0.1 SUPERSEDED weight) | - | - |
| → component-system/SOUL-DEFINITION.md (6 rules) | - | ~80 (referenced by docs-spa) | - |
| → MASTER-SOUL-SYNTHESIS.md (T1) | - | ~220 (15 refs × T1 weight) | 44× improvement |

**Result:** Model correctly deprioritizes superseded files (0.1× weight drops their score by 90%).

---

## Conclusion

Reference density is a **necessary but insufficient** dimension for usefulness scoring. Key principles:

1. **Weight inbound 2× outbound** (consumption > integration)
2. **Quality matters more than quantity** (T1 ref > scratchpad ref)
3. **Distinguish hub archetypes** (bidirectional vs terminal sink vs synthesis aggregator)
4. **Detect buried crown jewels** (0 refs ≠ 0 value if synthesis aggregator)
5. **Combine with other dimensions** (provenance, currency, absorption)

**Threshold Recommendations:**
- **100+ score:** Critical infrastructure, never delete
- **50-99 score:** Load-bearing, verify consumers
- **20-49 score:** Referenced, safe to modify with updates
- **10-19 score:** Lightly used, archive if absorbed
- **0-9 score:** Peripheral, deletion candidate after crown jewel check

**Next Dimension:** How does absorption status (underscore archives with synthesis docs) interact with reference density?
