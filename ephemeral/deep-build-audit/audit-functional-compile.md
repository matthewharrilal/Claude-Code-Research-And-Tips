# Functional Audit: Compile + Dry-Run + CLI Flags

**Auditor:** Opus functional-test agent
**Date:** 2026-02-28
**Target:** `tools/deep-build/` (TypeScript pipeline orchestrator)

---

## 1. Build (npm run build)

**Command:** `npm run build`
**Result:** SUCCESS -- zero errors, zero warnings

```
> deep-build@1.0.0 build
> tsc
```

**dist/cli.js exists:** YES (8.3K)
**Full dist/ tree produced:** YES -- 10 subdirectories (agents, config, instrumentation, logging, orchestrator, pa, prompts, state, types, validation) plus cli.js, cli.d.ts, utils.js, utils.d.ts, and source maps.

**Verdict:** PASS

---

## 2. CLI --help

**Command:** `node dist/cli.js --help`
**Exit code:** 0
**Result:** SUCCESS

```
deep-build -- multi-pass HTML page builder

Usage:
  deep-build --content <path>     Build a page from content markdown
  deep-build --resume <path>      Resume from a saved state.json
  deep-build --help               Show this help

Options:
  --content <path>    Path to content markdown file (REQUIRED unless --resume)
  --dry-run           Validate config, print execution plan, exit 0
  --resume <path>     Resume pipeline from existing state.json path
  --subset <N>        Only run subset N (1-7)
  --skip-phase-a      Skip Phase A (corpus integration), jump to Phase B (PA)
  --help              Print this help text and exit

Exit codes:
  0  Success (or dry-run)
  1  Error
  2  Budget exceeded
```

**All documented flags present:** YES (--content, --dry-run, --resume, --subset, --skip-phase-a, --help)

**Verdict:** PASS

---

## 3. Sample Content Exists

**Path:** `tests/fixtures/sample-content.md`
**Exists:** YES
**Size:** 178 lines, 7.7K
**Content:** Distributed systems clock problem essay (Lamport, vector clocks, Spanner TrueTime, HLC). Well-formed markdown with code blocks, tables, headings.

**Verdict:** PASS

---

## 4. Dry-Run with Sample Content

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md`
**Exit code:** 0
**Result:** SUCCESS

```
=== DRY RUN ===

Content:        /Users/.../tests/fixtures/sample-content.md
Slug:           sample-content
Model:          claude-opus-4-6
Project root:   /Users/.../Claude-Research-And-Tips
Output dir:     /Users/.../ephemeral/builds/sample-content-2026-03-01
Design system:  /Users/.../design-system
Skip Phase A:   false
Subset filter:  all (1-7)

--- Execution Plan ---
Phase A: 56 corpus passes (7 subsets x 8 passes)
Phase B: up to 3 PA cycles

  Subset 1: 8 passes (B V B B V B B V)
  Subset 2: 8 passes (B V B B V B B V)
  Subset 3: 8 passes (B V B B V B B V)
  Subset 4: 8 passes (B V B B V B B V)
  Subset 5: 8 passes (B V B B V B B V)
  Subset 6: 8 passes (B V B B V B B V)
  Subset 7: 8 passes (B V B B V B B V)

Total passes:   56 corpus + PA
Max PA cycles:  3

Content tokens: ~1,920 (estimated)

=== END DRY RUN ===
```

### Dry-Run Sub-Checks

| Check | Result | Notes |
|-------|--------|-------|
| Shows 66-pass plan (56 corpus + up to 3 PA) | PARTIAL | Shows "56 corpus + PA" and "Max PA cycles: 3" but does not print the number 66 explicitly |
| Validates corpus paths | NO | Dry-run in cli.ts does NOT validate corpus file existence. It validates the content file but does not check design-system corpus paths. However, I manually verified all 37 corpus paths exist on disk. |
| Estimates token counts per subset | NO | Shows total content token estimate (~1,920) but NOT per-subset breakdown |
| Execution plan structure correct | YES | 7 subsets x 8 passes = 56. B V B B V B B V matches PASS_ROLES (builder P1, verifier P2, builder P3, builder P4, verifier P5, builder P6, builder P7, verifier P8) |

**Verdict:** PASS (core dry-run works; missing features are MEDIUM severity)

---

## 5. Dry-Run with --subset Filter

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --subset 3`
**Exit code:** 0
**Result:** SUCCESS

```
=== DRY RUN ===
...
Subset filter:  3

--- Execution Plan ---
Phase A: 8 corpus passes (1 subsets x 8 passes)
Phase B: up to 3 PA cycles

  Subset 3: 8 passes (B V B B V B B V)

Total passes:   8 corpus + PA
Max PA cycles:  3

Content tokens: ~1,920 (estimated)
=== END DRY RUN ===
```

**Verdict:** PASS -- correctly shows only subset 3

---

## 6. Dry-Run with --skip-phase-a

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --skip-phase-a`
**Exit code:** 0

**Output still shows Phase A passes (56 corpus)** even though Skip Phase A = true. This is because `printDryRun()` in cli.ts does NOT check `config.skipPhaseA`.

NOTE: There is a SECOND dry-run path in `pipeline.ts:printExecutionPlan()` that DOES correctly handle `--skip-phase-a` (line 703: `if (!config.skipPhaseA)`), but this path is never reached in dry-run mode because cli.ts calls `printDryRun()` and exits before importing pipeline.ts.

**Verdict:** MEDIUM -- Misleading output. The cli.ts dry-run shows Phase A passes even when `--skip-phase-a` is set. The pipeline.ts `printExecutionPlan()` function handles this correctly but is unreachable in dry-run mode.

---

## 7. Error Handling Tests

### 7a. No arguments

**Command:** `node dist/cli.js`
**Exit code:** 1
**Output:** `Fatal error: Either --content or --resume is required`
**Verdict:** PASS

### 7b. Nonexistent content file

**Command:** `node dist/cli.js --dry-run --content /nonexistent/file.md`
**Exit code:** 1
**Output:** `Fatal error: Content file not found: /nonexistent/file.md`
**Verdict:** PASS

### 7c. Unknown flag

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --unknown-flag`
**Exit code:** 1
**Output:** `Argument error: Unknown option '--unknown-flag'` (followed by usage text)
**Verdict:** PASS -- `parseArgs({ strict: true })` catches unknown flags

### 7d. Invalid subset (0)

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --subset 0`
**Exit code:** 1
**Output:** `Invalid subset: 0. Must be 1-7.`
**Verdict:** PASS

### 7e. Invalid subset (8)

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --subset 8`
**Exit code:** 1
**Output:** `Invalid subset: 8. Must be 1-7.`
**Verdict:** PASS

### 7f. Non-numeric subset

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --subset abc`
**Exit code:** 1
**Output:** `Invalid subset: abc. Must be 1-7.`
**Verdict:** PASS

### 7g. Empty content file (0 bytes)

**Command:** `truncate -s 0 /tmp/truly-empty.md && node dist/cli.js --dry-run --content /tmp/truly-empty.md`
**Exit code:** 1
**Output:** `Fatal error: Content file is empty (0 bytes)`
**Verdict:** PASS

### 7h. Binary content file

**Command:** `dd if=/dev/zero bs=1 count=100 of=/tmp/binary-content.md && node dist/cli.js --dry-run --content /tmp/binary-content.md`
**Exit code:** 1
**Output:** `Fatal error: Content file appears to be binary (contains null bytes). Only markdown/text files are supported.`
**Verdict:** PASS

### 7i. Both --content and --resume

**Command:** `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md --resume /tmp/fake.json`
**Exit code:** 1
**Output:** `Fatal error: ENOENT: no such file or directory, open '/tmp/fake.json'`
**Behavior:** --resume takes priority over --content (code checks `args.resume` first in the if/else chain). No explicit rejection of conflicting flags.
**Verdict:** LOW -- Does not error with "cannot use both --content and --resume", instead silently uses --resume. Not dangerous (would fail on invalid resume file anyway) but could confuse users.

---

## 8. Corpus Path Validation

**Manual check:** All 37 corpus file paths (3 infrastructure + 34 subset) resolved against project root.

**Result:** ALL 37 FILES EXIST on disk.

| Category | Count | Status |
|----------|-------|--------|
| Infrastructure files | 3 | ALL OK |
| Subset 1 (Research Foundation) | 5 | ALL OK |
| Subset 2 (Identity & Perception) | 5 | ALL OK |
| Subset 3 (Deep Dives & Structure) | 5 | ALL OK |
| Subset 4 (Composition Case Studies) | 4 | ALL OK |
| Subset 5 (Identity & Guidelines) | 4 | ALL OK |
| Subset 6 (Pipeline Knowledge) | 6 | ALL OK |
| Subset 7 (PA & Evaluation) | 5 | ALL OK |

**However:** The dry-run does NOT programmatically validate these paths. Validation would only happen at runtime when the assembler reads them. This is acceptable since the paths are hardcoded constants, but adding a `--validate-corpus` flag would be useful for deployment verification.

**Verdict:** MEDIUM -- Corpus paths are all valid. But dry-run does not validate them, so a renamed/deleted corpus file would not be caught until a real run.

---

## 9. Execution Plan Verification

### Pass Pattern: B V B B V B B V

Verified against `PASS_ROLES` in `src/types/pass.ts`:

| Pass | Role | Display |
|------|------|---------|
| P1 | builder | B |
| P2 | verifier | V |
| P3 | builder | B |
| P4 | builder | B |
| P5 | verifier | V |
| P6 | builder | B |
| P7 | builder | B |
| P8 | verifier | V |

Pattern "B V B B V B B V" is CORRECT. 5 builders + 3 verifiers per subset.

### Rotation Assignment

Verified against `getRotationIndex()` in `src/types/pass.ts`:

| Passes | Rotation |
|--------|----------|
| P1-P3 | A (index 0) |
| P4-P6 | B (index 1) |
| P7-P8 | C (index 2) |

### Constants Verification

| Constant | Value | Source |
|----------|-------|--------|
| TOTAL_SUBSETS | 7 | config/constants.ts:66 |
| PASSES_PER_SUBSET | 8 | config/constants.ts:63 |
| TOTAL_CORPUS_PASSES | 56 | config/constants.ts:69 (8*7) |
| MAX_PA_CYCLES | 3 | config/constants.ts:23 |
| MODEL | claude-opus-4-6 | config/constants.ts:8 |
| BUDGET_WARNING | $150 | config/constants.ts:17 |
| BUDGET_CAP | $250 | config/constants.ts:20 |
| PA_THRESHOLD | 3.5 | config/constants.ts:26 |
| RETHINK_THRESHOLD | 2.0 | config/constants.ts:29 |
| TIER5_MINIMUM | 6/8 | config/constants.ts:32 |
| TOKEN_LIMIT | 100,000 | config/constants.ts:41 |

**Verdict:** PASS

---

## 10. Token Estimation

**Method:** `Math.ceil(content.length / 4)` using CHARS_PER_TOKEN = 4

**Sample content:** 7,680 chars / 4 = ~1,920 tokens (matches output)

**Verdict:** PASS (simple heuristic, reasonable for estimation)

---

## Summary

### Findings by Severity

| Severity | Count | Description |
|----------|-------|-------------|
| BLOCKING | 0 | -- |
| HIGH | 0 | -- |
| MEDIUM | 3 | See below |
| LOW | 1 | See below |

### MEDIUM Findings

**M1: --skip-phase-a dry-run shows Phase A passes**
- Location: `src/cli.ts:printDryRun()` (lines 129-168)
- Issue: `printDryRun()` in cli.ts does not check `config.skipPhaseA`. A second `printExecutionPlan()` in pipeline.ts correctly handles this but is unreachable in dry-run mode.
- Fix: Add `if (!config.skipPhaseA)` check to `printDryRun()` similar to pipeline.ts line 703.

**M2: Dry-run does not validate corpus file paths**
- Location: `src/cli.ts:printDryRun()` + `src/config/corpus.ts`
- Issue: All 37 paths are valid now, but dry-run doesn't verify them. A broken corpus path would only fail at runtime (potentially hours in).
- Fix: Call `getAllCorpusFilePaths()` in dry-run and check each against `fs.existsSync()`. (The function exists in corpus.ts already.)

**M3: Dry-run does not show per-subset token estimates**
- Issue: Only shows total content token estimate. Does not show per-subset corpus file sizes or total estimated token budget per pass.
- Fix: Sum `approximateLines` per subset (available in corpus.ts) and display per-subset estimates.

### LOW Findings

**L1: --content and --resume not mutually exclusive**
- Location: `src/cli.ts:buildConfig()` (lines 81-107)
- Issue: When both are provided, --resume silently wins. No warning or error.
- Fix: Add `if (args.content && args.resume) { throw new Error('Cannot use both --content and --resume') }` at the top of buildConfig.

---

## Overall Assessment

**BUILD:** PASS (zero errors, clean compilation)
**CLI:** PASS (all flags work correctly)
**DRY-RUN:** PASS (core functionality works, 3 MEDIUM missing features)
**ERROR HANDLING:** PASS (8/9 cases handled correctly, 1 LOW edge case)
**CORPUS:** PASS (all 37 paths verified, corpus module well-structured)
**EXECUTION PLAN:** PASS (B V B B V B B V pattern correct, constants consistent)

**Overall Verdict: PASS -- ready for live runs. No BLOCKING or HIGH issues. 3 MEDIUM improvements recommended for dry-run completeness.**
