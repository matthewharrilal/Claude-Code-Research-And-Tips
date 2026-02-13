<!--
LIGHT SECTION — Phase 2D
Part Of: knowledge-architecture — Phase 2B process documentation
Contributed To: PHASE-2B-HANDOFF.md; procedural reference for threading execution
Full Context: knowledge-architecture/PIPELINE-BACKBONE.md
-->
# Phase 2B — Master Execution Prompt (Source of Truth)

**Generated:** 2026-02-06
**Status:** ACTIVE
**Purpose:** Single procedural reference for Phase 2B inline threading header insertion across 253 KEEP+FULL files.

---

## Part 1: Context & Prerequisites

Phase 2A is fully complete:
- 132 files deleted
- 46 SUPERSEDED headers added
- 7 CLAUDE.md + 1 FOLDER-MAP.md created
- 253 KEEP+FULL files identified and classified

Phase 2B Discovery Parts 1 & 2 are complete with all quality decisions locked:
- Primary Use Case: **Modification Guard** — "You're about to touch this — here's what you need to know"
- Tiered Templates: Tier A (10 sections), Tier B (7 sections), Tier C (4 sections)
- Why This Exists: 1 paragraph (3-5 sentences)
- Must Honor Scope: File-specific + inherited summary

### Existing Artifacts
- `PHASE-2B-BATCH-MANIFEST.md` — 253 files, 13 batches, all PENDING (enhanced as tracking file)
- `PHASE-2B-EXECUTION-SPEC.md` — Insertion formats + quality gates
- `PHASE-2B-DEEP-DISCOVERY-PART2.md` — 3 verbatim sample inline sections (734 lines)

### Threading Data Sources
- `dependency-trace/02-threading-data/design-extraction-threading.md` (567 lines)
- `dependency-trace/02-threading-data/design-system-threading.md` (328 lines)
- `dependency-trace/02-threading-data/showcase-threading.md` (680 lines)
- `dependency-trace/03-relationship-map-data.yaml`
- `dependency-trace/06-threading-summary.md`

---

## Part 2: File Strategy

### 2 Permanent Files + 1 Temp Directory

```
PERMANENT:
  docs-spa/app/showcase/knowledge-architecture/PHASE-2B-MASTER-EXECUTION.md  ← THIS FILE
  scratchpad/PHASE-2B-BATCH-MANIFEST.md  ← enhanced tracking file

TEMPORARY (deleted after Phase 2C):
  scratchpad/PHASE-2B-OUTPUTS/  ← flat directory, batch-prefixed filenames
    B01-MASTER-SOUL-SYNTHESIS.md
    B01-DESIGN-TOKEN-SUMMARY.md
    B01-CHARACTER-FAMILY-COMPLETE.md
    B01-PRODUCTION-RULES.md
    B01-ANTI-PATTERNS-REGISTRY.md
    B01-CONSISTENCY-VERIFICATION.md
    ... (253 files total across all batches)
```

### Consolidated Into Manifest (no separate files)
- Consistency fixes → per-batch table in manifest
- Quality audit → batch checkpoints in manifest
- Decision audit → per-batch "Decisions" subsection in manifest
- Rollback log → section at bottom of manifest

---

## Part 3: Tier Templates

### Tier A — 10 Sections (27 files)
For T1 synthesis, DD explorations, files with 10+ inbound refs, critical pipeline docs.

```
1. Why This Exists (3-5 sentences)
2. The Question This Answers (1-2 sentences in quotes)
3. Status (ACTIVE/LOCKED/SUPERSEDED + lifecycle + authority)
4. Soul Alignment (which soul pieces, with CSS values for implementors)
5. Built On ← (table: Source | Role | Path)
6. Must Honor (constraints this file establishes or must honor)
7. What Breaks If This Changes (blast radius + specific files)
8. Consumed By → (table: Consumer | How It Uses This File)
9. Research Debt (specific gaps, TODOs, unresolved questions)
10. Diagnostic Questions (5 testable questions)
```

### Tier B — 7 Sections (117 files)
For standard files: research, tracking, patterns, checkpoints, CSS, re-audits.

```
1. Why This Exists
2. The Question This Answers
3. Status
5. Built On ←
6. Must Honor
8. Consumed By →
10. Diagnostic Questions (3 questions)
```

### Tier C — 4 Sections (109 files)
For CLAUDE.md navigation, configs, content pages, PROGRESS files, low-ref tracking.

```
1. Why This Exists
3. Status
5. Built On ←
8. Consumed By →
```

---

## Part 4: Insertion Formats

### 4.1 Markdown Files (.md)
**Placement:** Top of file, BEFORE first heading.
**Format:** HTML comment block (invisible in rendered view, visible in source).
**Exception:** T1 Synthesis files use VISIBLE markdown headers (not comments).

### 4.2 HTML Files (.html)
**Placement:** FIRST thing in file, BEFORE `<!DOCTYPE html>`.
**Format:** HTML comment block.
**Section headers:** `N. UPPERCASE TITLE` format (no markdown inside HTML comments).

### 4.3 CSS Files (.css)
**Placement:** FIRST thing in file, BEFORE any existing comments or rules.
**Format:** CSS block comment `/* ... */`.

### 4.4 TypeScript/JavaScript Files (.ts, .tsx, .js)
**Placement:** FIRST thing in file, BEFORE any imports.
**Format:** Block comment `/* ... */`.

### 4.5 JSON Files (.json)
**JSON does not support comments.** Skip inline and track in manifest with note "CONFIG — no inline possible."

### 4.6 Config Files
Tier C (4 sections only). For package.json: skip inline, manifest note only.

---

## Part 5: Batch Execution Order

### 5.1 Corrected Batch Table

| Batch | Name | Files | Tier | Priority | Human Review? |
|-------|------|-------|------|----------|---------------|
| 1 | T1 Synthesis (EXEMPLAR) | 6 | A | CRITICAL | YES |
| 2 | T1 Foundation + Tracking | 17 | A/B | HIGH | No |
| 3 | DD Explorations | 6 | A | HIGH | YES (HTML) |
| 4 | Research Files (R1-R5 + Synthesis) | 7 | A/B/C | HIGH | No |
| 5 | KA + Pipeline + Navigation | 26 | A/B/C | HIGH | No |
| 6 | DESIGN-SYSTEM Provenance | 27 | A/B/C | MEDIUM | YES (midpoint) |
| 7 | Component Audits + Checkpoints | 20 | B | MEDIUM | No |
| 8 | CSS Implementation + App Code | 24 | B/C | MEDIUM | No |
| 9 | design-extraction Root + Content Components | 24 | B/C | MEDIUM | No |
| 10 | Debrief Outputs — Dependency Trace | 19 | B/C | LOW | No |
| 11 | Content Pages A-D | 25 | C | LOW | No |
| 12 | Content Pages E-M | 22 | C | LOW | No |
| 13 | Content Pages P-Z + Supporting | 30 | C | LOW | YES (final) |

### 5.2 Human Review Gates
- After Batch 1: Calibration review — quality bar right?
- After Batch 3: HTML format review
- After Batch 6: Midpoint running quality check
- After Batch 13: Final completeness verification

---

## Part 6: Quality Gates

### 6.1 Universal Quality Criteria (ALL tiers)

| # | Criterion | Pass | Fail |
|---|-----------|------|------|
| 1 | Why This Exists is 3-5 sentences | Real synthesis | "Defines soul." (1 sentence) |
| 2 | No placeholder text | All real content | Contains "[TBD]", "[TODO]" |
| 3 | No references to deleted files | All paths exist | References "design-system/src/" |
| 4 | Status matches actual state | Correct lifecycle | "ACTIVE" for SUPERSEDED file |
| 5 | Built On has ≥1 entry | Real upstream or "ORIGIN FILE" | Empty or "[unknown]" |
| 6 | Consumed By has ≥1 entry | Real downstream or "LEAF NODE" | Empty or "[unknown]" |
| 7 | File path in header correct | Matches actual path | Wrong path |
| 8 | Tier matches assignment | Correct section count | Tier A with only 7 sections |

### 6.2 Tier A Additional Criteria

| # | Criterion | Pass | Fail |
|---|-----------|------|------|
| 9 | Soul Alignment maps to specific soul pieces | "--border-radius: 0 in :root (line 33)" | "Follows the soul" (vague) |
| 10 | Must Honor has file-specific entries | Table with Constraint/Value/Why/Consequence | "Follows all rules" |
| 11 | What Breaks has blast radius rating | "BLAST RADIUS: CATASTROPHIC" + files | "Things would break" |
| 12 | Research Debt has ≥1 specific gap | Specific coverage gap | "No gaps known" |
| 13 | Diagnostic Questions are testable | "Do :root values match?" (checkable) | "Is this file good?" |

### 6.3 Severity Calibration

| Severity | Trigger | Consequence |
|----------|---------|-------------|
| CATASTROPHIC | T1 synthesis modified | ALL downstream ungrounded |
| HIGH | DD exploration changed | Forward-flowing findings break |
| MEDIUM | Research file changed | Application tracking invalid |
| LOW | Tracking/state file changed | Session recovery affected |

---

## Part 7: Edge Case Mitigations (F1-F9)

### F1: Soul Alignment for Non-Visual Files
Research/tracking files have no CSS. Use: "This file is soul-adjacent, not soul-implementing" + describe conceptual alignment.

### F2: Built On for Origin Files
Files with no upstream: "ORIGIN FILE — no upstream within repository. Sources are [external research / Sanrok screenshots / etc.]"

### F3: Consumed By for Leaf Nodes
Files with no downstream: "LEAF NODE — consumed during [audit/exploration] process, not referenced by path in other files."

### F4: Must Honor for Pure Consumers
Files that only consume, never establish: Use "MUST HONOR" format with inherited constraints table.

### F5: Must Honor for Constraint Origins
Files that establish constraints: Use "ESTABLISHES" format listing what this file defines.

### F6: Research Debt Inference
No file documents its own gaps. Infer from: TODO/TBD markers, threading gaps, coverage gaps, methodology limitations.

### F7: DO NOT TOUCH Files
Files >50KB or locked: Prepend-only minimal header. Do not modify existing content.

### F8: Synced Duplicate Files
Provenance copies: Note "SYNCED DUPLICATE of [original path]" in Status section.

### F9: SUPERSEDED Files with Headers
Files already marked SUPERSEDED: Threading header goes ABOVE the SUPERSEDED header.

---

## Part 8: Content Extraction Strategies

### 8.1 Section-by-Section Extraction

| Section | Strategy |
|---------|----------|
| 1. Why This Exists | First 50 lines + threading "source" + KA cross-refs. Cover: what/when/why/authority/unique. |
| 2. The Question | Threading "source" + file purpose. One sentence in quotes. |
| 3. Status | ACTIVE/LOCKED/SUPERSEDED + threading_ready. Include verify command. |
| 4. Soul Alignment | ORIGIN: extract soul pieces. CONSUMER: grep CSS values, map to soul pieces. |
| 5. Built On | Threading "built_on" → resolve paths → extract KEY VALUES from source. |
| 6. Must Honor | ORIGIN: "ESTABLISHES" constraints. CONSUMER: "MUST HONOR" with refs. |
| 7. What Breaks | Threading "cited" + grep. Severity: >20=CRITICAL, 10-20=HIGH, <10=MEDIUM. |
| 8. Consumed By | Threading "cited" + "mandatory_for". Verify each consumer. |
| 9. Research Debt | Scan for TODO/TBD/future/unclear + threading gaps. |
| 10. If You're Trying To | Action table: Reference, Modify, Add, Delete, Understand. |

### 8.2 Key Value Extraction for "Built On"
`BAD: "Soul definitions"` → `GOOD: "border-radius: 0, box-shadow: none — NEVER deviate"`
Method: grep source for CSS properties/named constants. Use literal values.

### 8.3 Source Truth Verification

| Check | Pass Criteria |
|-------|---------------|
| File exists | `[ -f "$SOURCE" ]` exits 0 |
| Content matches claim | grep for key terms > 0 |
| Reference exists | grep for source name in file > 0 |
| Value accuracy | Exact match in source |

---

## Part 9: Accuracy Metrics

### 9.1 Per-File Thresholds

| Metric | Target |
|--------|--------|
| Source Verification | ≥90% |
| Constraint Accuracy | 100% |
| Consumer Verification | ≥80% |
| Path Existence | 100% |
| Value Match | 100% |

### 9.2 Stop Conditions
- Constraint Accuracy < 100% → STOP
- Path Existence < 100% → STOP
- Source Verification < 90% → FLAG
- Batch Average < 90% → STOP

### 9.3 Rollback Protocol
If agent fails or >50% quality gates fail:
1. Delete PHASE-2B-OUTPUTS/B[NN]-* files
2. Reset manifest status to PENDING
3. Log in manifest Rollback Log section
4. Notify human

---

## Part 10: Verification Protocols

### 10.1 Traversal Verification
- **Forward:** All "Consumed By" paths exist on disk
- **Backward:** All "Built On" paths exist on disk
- **Graph Integrity:** Bidirectional pairs match
- **Path Depth:** MASTER-SOUL-SYNTHESIS.md → ≥3 levels via "Consumed By"

### 10.2 Bidirectional Cross-Check
For each pair (A, B) where A claims "Consumed By: B": check B claims "Built On: A".
Mismatches → manifest Consistency Fixes table. Trust consumer > producer.

### 10.3 Spot Checks (4 minimum per batch)
1. Random file, random section → verify against source
2. Random "Built On" → verify source's "Consumed By" includes original
3. Random "Must Honor" → grep actual file for value
4. Random "What Breaks" → verify downstream references this file

### 10.4 Cross-Batch Dependency Check
1. Next batch deps on current batch listed in "Consumed By"
2. Sample 2-3 from later batches, verify threading confirms
3. Log missing links

---

## Context Recovery

```bash
# Everything is in ONE file:
head -50 scratchpad/PHASE-2B-BATCH-MANIFEST.md     # Quick status
grep "CHECKPOINT" scratchpad/PHASE-2B-BATCH-MANIFEST.md | tail -1  # Last batch
ls scratchpad/PHASE-2B-OUTPUTS/ | wc -l              # Output count
grep "PENDING" scratchpad/PHASE-2B-BATCH-MANIFEST.md | head -5    # Next files
```

## Post Phase 2C Cleanup

```bash
rm -rf scratchpad/PHASE-2B-OUTPUTS/   # Delete temp outputs after insertion
# Manifest stays as audit trail. This file stays as reference.
# Net result: 2 files remain, 0 noise.
```
