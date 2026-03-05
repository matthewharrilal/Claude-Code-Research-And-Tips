# State Management + Resume Audit

**Auditor:** audit-state agent
**Date:** 2026-02-28
**Files Audited:**
- `tools/deep-build/src/state/state-manager.ts` (142 lines)
- `tools/deep-build/src/state/checkpoint.ts` (94 lines)
- `tools/deep-build/src/state/resume.ts` (200 lines)
- `tools/deep-build/src/utils.ts` (atomicWriteFile, sha256, computeConfigHash)
- `tools/deep-build/src/orchestrator/pipeline.ts` (checkpoint integration, resume entry)
- `tools/deep-build/src/orchestrator/pass-executor.ts` (inFlightPass lifecycle)
- `tools/deep-build/src/orchestrator/workspace-setup.ts` (createSubsetCheckpointDir)
- `tools/deep-build/src/types/errors.ts` (StateCorruptionError, ConfigMismatchError)

**Plan Reference:** Lines 566-714 (State Schema v3 + Resume Algorithm), GAP-001, GAP-I02, GAP-I03, Checklist C.13-C.15

---

## Summary Verdict

| Area | Status |
|------|--------|
| Atomic writes (.tmp -> rename) | **IMPLEMENTED** |
| Schema version validation (=== 3) | **IMPLEMENTED** |
| configHash computation + checking | **IMPLEMENTED** |
| 6-step resume algorithm | **PARTIAL** (see finding F-03) |
| Checkpoint creation at subset boundaries | **PARTIAL** (see finding F-04) |
| Artifact hash (SHA-256) computation + storage | **IMPLEMENTED** |
| inFlightPass tracking | **IMPLEMENTED** |
| Error handling for failure sub-paths | **IMPLEMENTED** |

Overall: **6 IMPLEMENTED, 2 PARTIAL, 0 MISSING, 0 WRONG**

---

## Detailed Findings

### F-01: Atomic Writes — IMPLEMENTED

**Plan spec (GAP-I02):** "write-to-.tmp-then-rename"

**Implementation** (`utils.ts:14-18`):
```typescript
export function atomicWriteFile(filePath: string, data: string): void {
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, data, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
```

**Usage:** `saveState()` in `state-manager.ts:14` delegates to `atomicWriteFile`. Pass archives also use `atomicWriteFile`. Checkpoint state snapshots use `atomicWriteFile` in `pipeline.ts:318`.

**Verdict:** Exactly matches plan. The rename is atomic on POSIX filesystems.

---

### F-02: Schema Version Validation — IMPLEMENTED

**Plan spec:** "Check schemaVersion === 3 — If mismatched: FATAL"

**Implementation** (`state-manager.ts:25-30`):
```typescript
if (state.schemaVersion !== 3) {
  throw new StateCorruptionError(
    `Schema version mismatch: expected 3, got ${state.schemaVersion}.`
  );
}
```

Double-checked: `validateState()` (lines 48-49) also redundantly checks `schemaVersion !== 3`. Both `loadState()` and `validateState()` enforce this. `StateCorruptionError` extends `OrchestratorError` with category `'state-corruption'` (`errors.ts:74-79`).

**Verdict:** Matches plan exactly. FATAL on mismatch via thrown error.

---

### F-03: 6-Step Resume Algorithm — PARTIAL

**Plan spec (lines 692-714):**
1. Read state.json (FATAL if missing/corrupt)
2. Check schemaVersion === 3 (FATAL if mismatch)
3. Check configHash matches current config (FATAL if changed)
4. Verify currentArtifactHash matches SHA-256 of file on disk (backup fallback)
5. Check inFlightPass (re-run if present)
6. Resume from totalCorpusPasses + 1

**Implementation in `resume.ts`:** All 6 steps are implemented correctly in `resumePipeline()`:

| Step | Status | Details |
|------|--------|---------|
| 1. Read state.json | IMPLEMENTED | `fs.existsSync()` check + `loadState()` which uses `readFileChecked` + `safeJsonParse` (FATAL on missing/corrupt) |
| 2. Schema version | IMPLEMENTED | Delegated to `loadState()` which checks `schemaVersion !== 3` |
| 3. Config hash | IMPLEMENTED | `computeConfigHash()` uses sorted-key JSON + SHA-256. Throws `ConfigMismatchError` with `--force-restart` hint |
| 4. Artifact hash | IMPLEMENTED | `verifyArtifactIntegrity()` checks disk hash, falls back to `_passes/{N}/artifact-backup.html`, falls back to last checkpoint, then FATAL |
| 5. inFlightPass | IMPLEMENTED | Checks `state.inFlightPass`, computes resume point from that pass number |
| 6. Resume from completed | IMPLEMENTED | `resumeFromCompletedState()` handles completed (exit), failed (error w/ hint), running/paused (totalCorpusPasses + 1) |

**THE PROBLEM: `resumePipeline()` is NEVER CALLED.**

The pipeline's actual resume path (`pipeline.ts:120-124`) is:
```typescript
if (config.resume) {
  deps.log('info', 'Resuming pipeline from existing state...');
  state = await deps.loadState(config);  // Only does steps 1-2
  deps.log('info', `Resumed at subset ${state.currentSubsetId}, pass ${state.currentPass}`);
}
```

This only performs steps 1-2 (load + schema validation via `loadState`). Steps 3-6 are **skipped**:
- **Step 3 (configHash check):** NOT performed on resume. A user could change config between runs and silently get wrong behavior.
- **Step 4 (artifact integrity):** NOT verified on resume. A corrupted/modified artifact is silently accepted.
- **Step 5 (inFlightPass re-run):** NOT checked on resume. A crashed pass is silently skipped rather than re-run.
- **Step 6:** The pipeline does position-based resume via `state.currentSubsetId` + `state.currentPass` (line 247), which is functionally equivalent but does NOT handle `status === 'failed'` or `status === 'completed'` edge cases.

**Severity:** HIGH. The full 6-step algorithm exists in `resume.ts` but is dead code. The pipeline rolls its own simpler (incomplete) resume.

---

### F-04: Checkpoint Creation — PARTIAL

**Plan spec:** "Checkpoint creation: artifact + state + metrics to _checkpoints/SN/"

**Two implementations exist — one in `checkpoint.ts`, one inline in `pipeline.ts`:**

| Feature | checkpoint.ts `createCheckpoint()` | pipeline.ts inline (lines 309-325) |
|---------|-----------------------------------|-------------------------------------|
| Directory creation | `_checkpoints/S{N}/` | `_checkpoints/S{N}/` via `createSubsetCheckpointDir` |
| Artifact copy | `readFileChecked` + `writeFileSync` | `fs.copyFileSync` |
| Artifact hash recorded | Yes (`artifact-hash.txt`) | No |
| State snapshot | Via `saveState()` (atomic) | Via `atomicWriteFile` with `JSON.stringify` |
| Verifier observations | Yes (conditional) | No |
| Cost metrics snapshot | Yes (`cost-snapshot.json`) | No |
| Checkpoint path recorded in state | Not done (caller's responsibility) | Yes (`state.checkpoints.push`) |

**The problem:** `checkpoint.ts:createCheckpoint()` is NEVER CALLED. The pipeline uses its own inline implementation that is **less complete**:
- Missing `artifact-hash.txt` (needed for integrity verification during recovery)
- Missing `verifier-observations.json`
- Missing `cost-snapshot.json`
- Uses `fs.copyFileSync` instead of read+write (not a bug, but different pattern)

Additionally, `listCheckpoints()` and `loadCheckpointState()` from `checkpoint.ts` are also never called from the orchestrator. The resume algorithm in `resume.ts` references `listCheckpoints()` for fallback recovery, but since `resumePipeline()` itself is never called, this is also dead code.

**Severity:** MEDIUM. Checkpoints ARE created, but they're less robust than what the plan specifies. The dedicated checkpoint module is dead code.

---

### F-05: Artifact Hash (SHA-256) — IMPLEMENTED

**Plan spec:** "currentArtifactHash: string; // SHA-256 of current HTML"

**Implementation:**
- `sha256()` in `utils.ts:30-32`: `crypto.createHash('sha256').update(content, 'utf-8').digest('hex')`
- Pass executor (`pass-executor.ts:170`): `const artifactHash = html ? sha256(html) : state.currentArtifactHash`
- State updated (`pass-executor.ts:218`): `currentArtifactHash: artifactHash`
- `artifactSizeHistory` also tracked (`pass-executor.ts:219`)
- Each `PassRecord` stores `artifactHash` (line 206)

**Verdict:** Fully implemented. Hash is computed on every builder pass and stored in both the PassRecord and state.

---

### F-06: inFlightPass Tracking — IMPLEMENTED

**Plan spec:** "Set before pass, clear after"

**Implementation in `pass-executor.ts`:**
- **Set before pass** (lines 54-63): Inline spread `{ ...state, inFlightPass: { passNumber, startedAt, role } }` + immediate `saveState()`
- **Clear after success** (line 252): `{ ...state, inFlightPass: undefined }` + `saveState()` at line 255
- **Clear after failure** (lines 92, 131, 151): `{ ...state, inFlightPass: undefined }` in all three error paths (spawn error, HTML extraction failure, HTML validation failure)

**Note:** The dedicated `setInFlightPass()` and `clearInFlightPass()` functions in `state-manager.ts` (lines 106-126) are NEVER CALLED. The pass executor uses inline spreads instead. This is functionally equivalent but means the dedicated functions are dead code.

**Verdict:** Functionally correct. The tracking IS happening — just via inline code rather than the dedicated functions.

---

### F-07: configHash Computation — IMPLEMENTED

**Plan spec:** "SHA-256 of PipelineConfig"

**Implementation** (`utils.ts:123-126`):
```typescript
export function computeConfigHash(config: Record<string, unknown>): string {
  const serialized = JSON.stringify(config, Object.keys(config).sort());
  return sha256(serialized);
}
```

Uses sorted keys for deterministic serialization. The cast `config as unknown as Record<string, unknown>` in `resume.ts:52` is necessary for the sorted-key trick.

**Note:** The hash is computed and checked in `resumePipeline()` (which is dead code — see F-03). It is NOT checked during the actual resume path in `pipeline.ts`.

**Verdict:** The function itself is correctly implemented. But it's only used in dead code.

---

### F-08: State Validation — IMPLEMENTED

**Plan spec (implied by schema v3):** Validate required fields.

**Implementation** (`state-manager.ts:45-100`): `validateState()` checks:
- `schemaVersion === 3`
- `runId` non-empty string
- `configHash` non-empty string
- `contentPath` non-empty string
- `slug` non-empty string
- `startedAt` is string
- `currentPhase` is one of 5 valid values
- `status` is one of 4 valid values
- `currentSubsetId` positive number
- `totalCorpusPasses` non-negative number
- `artifactPath` is string
- `passes` is array
- `convictionLayer` is array
- `checkpoints` is array
- `cost` is present

**Verdict:** Comprehensive validation. Called on every `loadState()`.

---

### F-09: Error Types — IMPLEMENTED

**Plan spec:** 14 error categories from doc 08.

**Implementation** (`types/errors.ts`):
- `StateCorruptionError` (category: `'state-corruption'`) — used for schema mismatch, artifact integrity failure, completed/failed status on resume
- `ConfigMismatchError` (category: `'config-mismatch'`) — used for changed config hash on resume

Both extend `OrchestratorError` which carries an `ErrorCategory` type. Error messages include actionable hints (`--force-restart`, checkpoint paths).

**Verdict:** Correctly implemented for the state management domain.

---

## Dead Code Summary

| Function | File | Status |
|----------|------|--------|
| `resumePipeline()` | `resume.ts:39` | **DEAD** — never imported or called |
| `verifyArtifactIntegrity()` | `resume.ts:80` | **DEAD** — only called by resumePipeline |
| `attemptBackupRecovery()` | `resume.ts:109` | **DEAD** — only called by verifyArtifactIntegrity |
| `computeResumePoint()` | `resume.ts:152` | **DEAD** — only called by resumePipeline |
| `resumeFromCompletedState()` | `resume.ts:177` | **DEAD** — only called by resumePipeline |
| `createCheckpoint()` | `checkpoint.ts:17` | **DEAD** — never imported or called |
| `listCheckpoints()` | `checkpoint.ts:70` | **DEAD** — only imported by resume.ts (dead) |
| `loadCheckpointState()` | `checkpoint.ts:90` | **DEAD** — never imported or called |
| `setInFlightPass()` | `state-manager.ts:106` | **DEAD** — never imported or called |
| `clearInFlightPass()` | `state-manager.ts:123` | **DEAD** — never imported or called |

**10 functions across 3 files are dead code.** The entire `resume.ts` module (200 lines) and `checkpoint.ts` module (94 lines) are effectively dead — their functionality was reimplemented inline in `pipeline.ts` and `pass-executor.ts` with lower fidelity.

---

## Checklist Items

| ID | Description | Status |
|----|-------------|--------|
| C.13 | `state/state-manager.ts` — atomic read/write (.tmp -> rename), validate schema version | **PASS** — atomicWriteFile delegates correctly, schema validation present |
| C.14 | `state/checkpoint.ts` — subset boundary snapshots to `_checkpoints/SN/` | **PARTIAL** — checkpoint.ts exists and is correct but is dead code; pipeline.ts has inline checkpoint without hash/observations/cost |
| C.15 | `state/resume.ts` — 6-step integrity verification + artifact hash mismatch recovery | **PARTIAL** — resume.ts implements all 6 steps correctly but is dead code; pipeline.ts resume skips steps 3-6 |

---

## Recommendations

1. **HIGH PRIORITY: Wire `resumePipeline()` into the pipeline's resume path.** Replace the simplistic `deps.loadState(config)` at `pipeline.ts:123` with a call to `resumePipeline()`. This would immediately gain configHash checking, artifact integrity verification, inFlightPass re-run, and completed/failed status handling. The entire 6-step algorithm is already written and tested in isolation — it just needs to be called.

2. **HIGH PRIORITY: Wire `createCheckpoint()` into the pipeline's subset completion.** Replace the inline checkpoint code at `pipeline.ts:309-325` with a call to `createCheckpoint()` from `checkpoint.ts`. This adds artifact hash file, verifier observations snapshot, and cost metrics — all needed for robust recovery.

3. **LOW PRIORITY: Use `setInFlightPass()` and `clearInFlightPass()` in pass-executor.** The inline spreads work but the dedicated functions are more readable and semantically clear. Minor cleanup.

4. **MEDIUM PRIORITY: Step 6 failed-state handling.** The resume algorithm in `resume.ts` throws on `status === 'failed'`, telling the user to `--force-restart`. But the pipeline's inline resume at `pipeline.ts:120-124` doesn't check status at all — it would blindly continue from a failed state. This could produce undefined behavior.
