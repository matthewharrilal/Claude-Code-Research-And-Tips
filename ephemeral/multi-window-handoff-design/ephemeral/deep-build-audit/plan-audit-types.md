# Types & State Schema Audit: Plan vs Doc 08 (Canonical)

**Auditor:** types-auditor (Opus 4.6)
**Date:** 2026-02-28
**Sources compared:**
- **Plan:** `/Users/spacewizardmoneygang/.claude/plans/sorted-finding-honey.md` (lines 338-428, "State Schema v3" section)
- **Doc 08:** `_deterministic-orchestration/08-state-management.md` (canonical v3 schema, sections 1.1-1.6)
- **Doc 02:** `_deterministic-orchestration/02-orchestrator-architecture.md` (original v2 schema, section 2.4)

---

## 1. PipelineState: Side-by-Side Field Comparison

| # | Field | Doc 08 (Canonical) | Plan | Status |
|---|-------|--------------------|------|--------|
| 1 | `schemaVersion` | `3` (literal) | `3` (literal) | MATCH |
| 2 | `runId` | `string` (UUIDv4) | `string` (UUIDv4) | MATCH |
| 3 | `configHash` | `string` (SHA-256, first 16 hex) | `string` (SHA-256) | MATCH (plan omits "first 16 hex" detail but functionally equivalent) |
| 4 | `contentPath` | **NOT IN DOC 08** | `string` | **PLAN-ONLY ADDITION** |
| 5 | `slug` | **NOT IN DOC 08** | `string` | **PLAN-ONLY ADDITION** |
| 6 | `startedAt` | `string` (ISO 8601 UTC) | `string` (ISO 8601) | MATCH |
| 7 | `completedAt` | `string \| null` | `string?` (optional) | MISMATCH: Doc 08 uses `string \| null`, plan uses `?` (optional). Semantic difference: `null` means "running", `undefined` means "field absent". Should be `string \| null`. |
| 8 | `lastSavedAt` | `string` (ISO 8601 UTC) | **MISSING FROM PLAN** | **MISSING** |
| 9 | `currentPhase` | `'corpus-integration' \| 'pa-hardening' \| 'complete' \| 'paused' \| 'failed'` | `'corpus-integration' \| 'pa-hardening' \| 'paused' \| 'completed' \| 'failed'` | MISMATCH: Doc 08 says `'complete'`, plan says `'completed'`. Pick one. |
| 10 | `phaseReason` | `string \| null` | `string?` (optional) | MISMATCH: Same `null` vs `?` issue as #7. |
| 11 | `totalCorpusPasses` | `number` (7*8=56) | `number` (0-56 completed) | MISMATCH: Doc 08 says this is the TOTAL count (56), plan's comment says "0-56 completed" suggesting it's a progress counter. These are different semantics. Doc 08 is correct: this is the total, `lastCompletedCorpusPass` tracks progress. |
| 12 | `lastCompletedCorpusPass` | `number` (0=none) | `number` | MATCH |
| 13 | `currentSubsetId` | `string \| null` ("S1"-"S7" or null) | `number` (1-7) | **TYPE MISMATCH**: Doc 08 uses `string` ("S1"-"S7"), plan uses `number` (1-7). This propagates everywhere subsetId appears. |
| 14 | `currentPass` | **NOT IN DOC 08** | `number` (1-8 within subset) | **PLAN-ONLY ADDITION** |
| 15 | `completedPACycles` | `number` | `number` (0-3) | MATCH |
| 16 | `maxPACycles` | `number` (from config) | `number` (default 3) | MATCH |
| 17 | `lastPAScore` | `number \| null` | `number?` | MISMATCH: `null` vs `?` again. |
| 18 | `paScoreThreshold` | `number` (from config) | `number` (default 3.5) | MATCH |
| 19 | `passRecords` | `Record<string, PassRecord>` (keyed by global pass number as string) | `PassRecord[]` (array) | **STRUCTURAL MISMATCH**: Doc 08 uses a string-keyed Record (because JSON keys are strings), plan uses an array. Array loses O(1) lookup by pass number. |
| 20 | `paCycleRecords` | `Record<string, PACycleRecord>` (keyed by cycle number) | `PACycleRecord[]` (array) | **STRUCTURAL MISMATCH**: Same issue as #19. |
| 21 | `currentArtifactPath` | `string` (relative to outputDir) | named `artifactPath: string` | RENAME: Different field name. Plan uses `artifactPath`, doc 08 uses `currentArtifactPath`. |
| 22 | `currentArtifactHash` | `string` (SHA-256) | `string` (SHA-256) | MATCH |
| 23 | `artifactBackups` | `string[]` (ordered backup paths) | **MISSING FROM PLAN** | **MISSING** |
| 24 | `artifactSizeHistory` | **NOT IN DOC 08** | `number[]` | **PLAN-ONLY ADDITION** |
| 25 | `convictionLayerPath` | `string` (relative path) | **MISSING FROM PLAN** (plan uses inline `convictionLayer: ConvictionEntry[]`) | **STRUCTURAL DIVERGENCE**: Doc 08 stores conviction as an append-only FILE (path reference). Plan stores it as an in-memory array capped at 10 with FIFO merge. Fundamentally different architecture. |
| 26 | `discoveryLogPath` | `string` (relative path) | **MISSING FROM PLAN** (plan uses inline `discoveryLog: string[]`) | **STRUCTURAL DIVERGENCE**: Same as #25. Doc 08 uses file-based, plan uses in-state array. |
| 27 | `convictionLayer` | **NOT IN DOC 08** | `ConvictionEntry[]` (capped at 10, FIFO) | **PLAN-ONLY** (see #25) |
| 28 | `discoveryLog` | **NOT IN DOC 08** | `string[]` | **PLAN-ONLY** (see #26) |
| 29 | `convictionEntryCount` | `number` | `number` | MATCH |
| 30 | `discoveryEntryCount` | `number` | `number` | MATCH |
| 31 | `verifierObservations` | **NOT IN DOC 08** | `string[]` (rolling window of last 3) | **PLAN-ONLY ADDITION** |
| 32 | `checkpoints` | `CheckpointRecord[]` (full records) | `string[]` (paths only) | **STRUCTURAL MISMATCH**: Doc 08 stores full CheckpointRecord objects, plan stores only path strings. Doc 08 is richer. |
| 33 | `cost` | `CostTracker` | `CostTracker` | MATCH (type name; see CostTracker comparison below) |
| 34 | `errorHistory` | `ErrorRecord[]` | `ErrorRecord[]` | MATCH |
| 35 | `inFlightPass` | `{ globalPassNumber, startedAt, agentRole, subsetId } \| null` | `{ passNumber, startedAt, role }?` | MISMATCH: Doc 08 has 4 fields (globalPassNumber, startedAt, agentRole, subsetId), plan has 3 fields (passNumber, startedAt, role). **Missing `subsetId`**. Also field name mismatches: `globalPassNumber` vs `passNumber`, `agentRole` vs `role`. |
| 36 | `status` | **NOT IN DOC 08** | `'running' \| 'paused' \| 'completed' \| 'failed'` | **PLAN-ONLY ADDITION**: Redundant with `currentPhase`? `currentPhase` already has 'paused', 'failed', 'complete'. This creates dual state that can drift. |

### Summary: PipelineState

| Category | Count | Fields |
|----------|-------|--------|
| MATCH | 12 | schemaVersion, runId, configHash, startedAt, lastCompletedCorpusPass, completedPACycles, maxPACycles, paScoreThreshold, currentArtifactHash, convictionEntryCount, discoveryEntryCount, cost |
| MISSING from plan | 2 | `lastSavedAt`, `artifactBackups` |
| PLAN-ONLY additions | 6 | `contentPath`, `slug`, `currentPass`, `artifactSizeHistory`, `verifierObservations`, `status` |
| TYPE/STRUCTURAL MISMATCH | 8 | completedAt (null vs ?), currentPhase ('complete' vs 'completed'), totalCorpusPasses (comment semantics), currentSubsetId (string vs number), passRecords (Record vs Array), paCycleRecords (Record vs Array), checkpoints (CheckpointRecord[] vs string[]), inFlightPass (4 fields vs 3) |
| STRUCTURAL DIVERGENCE | 2 | conviction storage (file path vs inline array), discovery storage (file path vs inline array) |
| FIELD RENAME | 1 | currentArtifactPath vs artifactPath |

**Zero missing fields would be suspicious** because doc 08 is 1,975 lines and the plan condenses this to ~90 lines. Finding 2 missing + 8 mismatches + 2 structural divergences is exactly the expected compression-loss pattern. The plan-only additions (contentPath, slug, currentPass, artifactSizeHistory, verifierObservations, status) are reasonable conveniences that doc 08 doesn't need because it stores them elsewhere or computes them.

---

## 2. PassRecord: Side-by-Side Field Comparison

| # | Field | Doc 08 (Section 1.2) | Plan | Status |
|---|-------|--------------------|------|--------|
| 1 | `globalPassNumber` | `number` | named `passNumber: number` | RENAME |
| 2 | `subsetPassNumber` | `number` | named `passWithinSubset: number` | RENAME |
| 3 | `subsetId` | `string` ("S1"-"S7") | `number` (1-7) | **TYPE MISMATCH**: Same as PipelineState.currentSubsetId. |
| 4 | `rotation` | `'A' \| 'B' \| 'C'` | named `rotationIndex: number` (0-2) | **TYPE MISMATCH**: Doc 08 uses string literal union, plan uses numeric index. |
| 5 | `agentRole` | `'builder' \| 'verifier'` | named `role: 'builder' \| 'verifier' \| 'retrospective' \| 'pa-auditor' \| 'integrative-auditor' \| 'weaver' \| 'refine-builder'` | **EXPANDED**: Plan adds 5 additional role values. Doc 08 only has builder/verifier for corpus passes; PA roles are in PACycleRecord. Plan seems to unify all pass types into one PassRecord. |
| 6 | `description` | `string` | **MISSING FROM PLAN** | **MISSING** |
| 7 | `startedAt` | `string` (ISO 8601) | `string` | MATCH |
| 8 | `completedAt` | `string` (ISO 8601) | `string` | MATCH |
| 9 | `durationMs` | `number` | **MISSING FROM PLAN** | **MISSING** (easily computed from startedAt/completedAt, but doc 08 stores it explicitly) |
| 10 | `retryCount` | `number` (0=first attempt) | `number` | MATCH |
| 11 | `promptPath` | `string` (relative) | **MISSING FROM PLAN** | **MISSING** |
| 12 | `rawOutputPath` | `string` (relative) | **MISSING FROM PLAN** | **MISSING** |
| 13 | `backupPath` | `string \| null` | **MISSING FROM PLAN** | **MISSING** |
| 14 | `artifactPath` | `string \| null` | **MISSING FROM PLAN** | **MISSING** |
| 15 | `artifactHash` | `string \| null` | `string` (named `artifactHash`) | MISMATCH: Doc 08 allows null (for verifier passes), plan does not. |
| 16 | `validationPassed` | `boolean` | named `success: boolean` | RENAME (semantically close but not identical: "validation passed" vs "success") |
| 17 | `validationDetails` | `ValidationResult` | **MISSING FROM PLAN** | **MISSING**: Plan has no ValidationResult type at all. |
| 18 | `tokens.inputTokens` | `number` (nested) | `inputTokens: number` (flat) | STRUCTURAL: Doc 08 nests in `tokens` object, plan flattens. |
| 19 | `tokens.outputTokens` | `number` (nested) | `outputTokens: number` (flat) | STRUCTURAL: Same as above. |
| 20 | `tokens.cacheReadTokens` | `number` (nested) | `cacheReadTokens: number` (flat) | STRUCTURAL: Same. |
| 21 | `tokens.cacheWriteTokens` | `number` (nested) | `cacheWriteTokens: number` (flat) | STRUCTURAL: Same. |
| 22 | `tokens.estimatedCostUsd` | `number` (nested) | named `cost: number` (flat, USD) | RENAME + STRUCTURAL |
| 23 | `hasConvictionAddition` | `boolean` | `boolean` | MATCH |
| 24 | `hasDiscoveryAddition` | `boolean` | `boolean` | MATCH |
| 25 | `corpusFilesLoaded` | `string[]` | `string[]` | MATCH |
| 26 | `referenceFilesLoaded` | `string[]` | `string[]` | MATCH |
| 27 | `artifactSizeBefore` | **NOT IN DOC 08** | `number` | PLAN-ONLY |
| 28 | `artifactSizeAfter` | **NOT IN DOC 08** | `number` | PLAN-ONLY |
| 29 | `error` | **NOT IN DOC 08** | `string?` | PLAN-ONLY (doc 08 handles errors via ErrorRecord in errorHistory) |

### Summary: PassRecord

| Category | Count | Fields |
|----------|-------|--------|
| MATCH | 6 | startedAt, completedAt, retryCount, hasConvictionAddition, hasDiscoveryAddition, corpusFilesLoaded, referenceFilesLoaded |
| MISSING from plan | 7 | `description`, `durationMs`, `promptPath`, `rawOutputPath`, `backupPath`, `artifactPath`, `validationDetails` |
| PLAN-ONLY | 3 | `artifactSizeBefore`, `artifactSizeAfter`, `error` |
| TYPE MISMATCH | 3 | subsetId (string vs number), rotation (literal vs number), role (2 values vs 7 values) |
| RENAME | 4 | globalPassNumber/passNumber, subsetPassNumber/passWithinSubset, validationPassed/success, estimatedCostUsd/cost |
| STRUCTURAL | 4 | tokens nested vs flat |

**7 missing fields is significant.** The 5 path fields (`promptPath`, `rawOutputPath`, `backupPath`, `artifactPath`, and `validationDetails`) are critical for forensics and resume. Without them, you cannot replay a pass or understand what went wrong. The plan should either include these or document why they're omitted.

---

## 3. CostTracker: Side-by-Side Field Comparison

| # | Field | Doc 08 (Section 1.6) | Plan | Status |
|---|-------|--------------------|------|--------|
| 1 | `totalInputTokens` | `number` | `number` | MATCH |
| 2 | `totalOutputTokens` | `number` | `number` | MATCH |
| 3 | `totalCacheReadTokens` | `number` | `number` | MATCH |
| 4 | `totalCacheWriteTokens` | `number` | `number` | MATCH |
| 5 | `totalEstimatedCostUsd` | `number` | named `totalCostUsd: number` | RENAME |
| 6 | `byRole` | `{ builder: RoleCost; verifier: RoleCost; pa: RoleCost }` | named `perRole: Record<string, number>` | **TYPE MISMATCH**: Doc 08 uses structured `RoleCost` per role (with inputTokens, outputTokens, costUsd, passCount), plan uses a flat `Record<string, number>` (cost only, no token breakdown). Massive information loss. |
| 7 | `bySubset` | `Record<string, RoleCost>` | named `perSubset: Record<number, number>` | **TYPE MISMATCH**: Same issue. Also `string` keys vs `number` keys. |
| 8 | `byPACycle` | `Record<string, RoleCost>` | **MISSING FROM PLAN** | **MISSING** |
| 9 | `budgetWarningThresholdUsd` | `number` | `number` (default $150) | MATCH |
| 10 | `budgetHardCapUsd` | `number` | `number` (default $250) | MATCH |
| 11 | `warningThresholdHit` | `boolean` | `boolean` | MATCH |
| 12 | `hardCapHit` | `boolean` | `boolean` | MATCH |

### RoleCost sub-type (doc 08 only)

Doc 08 defines `RoleCost` as:
```typescript
interface RoleCost {
  inputTokens: number;
  outputTokens: number;
  costUsd: number;
  passCount: number;
}
```

Plan has no equivalent. `perRole` and `perSubset` are just `number` (total cost USD). This loses token-level breakdown per role/subset and pass count tracking.

### Summary: CostTracker

| Category | Count |
|----------|-------|
| MATCH | 6 |
| MISSING from plan | 1 (`byPACycle`) |
| TYPE MISMATCH | 2 (`byRole`/`perRole`, `bySubset`/`perSubset` - both lose RoleCost structure) |
| RENAME | 1 (`totalEstimatedCostUsd`/`totalCostUsd`) |

---

## 4. ErrorCategory: All 14 Values

### Doc 08 ErrorCategory values (Section 1.5):
```typescript
type ErrorCategory =
  | 'claude-p-exit-nonzero'
  | 'claude-p-timeout'
  | 'claude-p-spawn-failed'
  | 'output-truncated'
  | 'output-empty'
  | 'output-no-artifact'
  | 'output-no-modification'
  | 'validation-failed'
  | 'screenshot-failed'
  | 'rate-limit'
  | 'budget-exceeded'
  | 'file-io'
  | 'state-corruption'
  | 'config-mismatch'
  | 'unknown';
```

**Count: 15 values** (doc 08 actually has 15, not 14 as doc claims in its own text)

### Plan ErrorCategory values:
```typescript
type ErrorCategory = 'model-overload' | 'rate-limit' | 'timeout' | 'invalid-response' |
  'html-extraction-failed' | 'validation-failed' | 'state-corruption' | 'config-mismatch' |
  'budget-exceeded' | 'playwright-error' | 'file-not-found' | 'permission-denied' |
  'network-error' | 'unknown';
```

**Count: 14 values**

### Comparison Table:

| # | Doc 08 Value | Plan Value | Match? |
|---|-------------|------------|--------|
| 1 | `claude-p-exit-nonzero` | `model-overload` | RENAMED (broader) |
| 2 | `claude-p-timeout` | `timeout` | RENAMED (shorter) |
| 3 | `claude-p-spawn-failed` | **NO EQUIVALENT** | **MISSING** |
| 4 | `output-truncated` | **NO EQUIVALENT** | **MISSING** |
| 5 | `output-empty` | **NO EQUIVALENT** | **MISSING** |
| 6 | `output-no-artifact` | `html-extraction-failed` | RENAMED (close enough) |
| 7 | `output-no-modification` | **NO EQUIVALENT** | **MISSING** |
| 8 | `validation-failed` | `validation-failed` | MATCH |
| 9 | `screenshot-failed` | `playwright-error` | RENAMED |
| 10 | `rate-limit` | `rate-limit` | MATCH |
| 11 | `budget-exceeded` | `budget-exceeded` | MATCH |
| 12 | `file-io` | `file-not-found` + `permission-denied` | SPLIT into 2 values |
| 13 | `state-corruption` | `state-corruption` | MATCH |
| 14 | `config-mismatch` | `config-mismatch` | MATCH |
| 15 | `unknown` | `unknown` | MATCH |
| -- | **NO EQUIVALENT** | `invalid-response` | PLAN-ONLY |
| -- | **NO EQUIVALENT** | `network-error` | PLAN-ONLY |

### Summary: ErrorCategory

- **Exact matches:** 5 (validation-failed, rate-limit, budget-exceeded, state-corruption, config-mismatch, unknown)
- **Renamed but equivalent:** 4 (model-overload, timeout, html-extraction-failed, playwright-error)
- **Missing from plan:** 4 (`claude-p-spawn-failed`, `output-truncated`, `output-empty`, `output-no-modification`)
- **Plan-only:** 2 (`invalid-response`, `network-error`)
- **Split:** 1 (file-io split into file-not-found + permission-denied)

**Verdict:** The plan has 4 missing error categories that doc 08 explicitly handles with recovery strategies. `output-truncated` is particularly important -- doc 08 has an entire recovery function for it (Section 4.3.3). `output-no-modification` is a soft failure that doc 08 logs and continues (Section 4.3.4). These need to be present or the error handler won't classify these failure modes correctly.

---

## 5. ConvictionEntry: 6 Creative Tissue Dimensions

The plan defines:
```typescript
interface ConvictionEntry {
  passNumber: number;
  subsetId: number;
  dimension: 'built' | 'trying' | 'rejected' | 'surprised' | 'wanted' | 'unresolved';
  content: string;  // max ~130 words
  addedAt: string;
}
```

### Where do these 6 dimensions come from?

Doc 07 (prompt templates) defines the builder's reflection format (lines 855-879):
```
## CONVICTION - What were you trying to make?
## ALTERNATIVES - What roads did you not take? What creative energy did you suppress?
## DISCOVERIES - What emerged that you did not plan?
## UNRESOLVED - What tension remains?
## PROTECTION LIST - 3-5 things preserved and WHY
```

The reflection has **5 sections** (CONVICTION, ALTERNATIVES, DISCOVERIES, UNRESOLVED, PROTECTION LIST), not 6.

The plan's 6 dimensions map approximately:
| Plan Dimension | Probable Source |
|---------------|----------------|
| `'built'` | CONVICTION section ("What were you trying to make?") |
| `'trying'` | CONVICTION section ("did you achieve it?") |
| `'rejected'` | ALTERNATIVES section ("What roads did you not take?") |
| `'surprised'` | DISCOVERIES section ("What emerged during refinement?") |
| `'wanted'` | ALTERNATIVES sub-section ("What creative energy did you suppress?") |
| `'unresolved'` | UNRESOLVED section ("What tension remains?") |

**Findings:**
1. `'built'` and `'trying'` both map to the same CONVICTION section -- the plan splits one section into two dimensions. Reasonable but undocumented.
2. `'rejected'` and `'wanted'` both map to the ALTERNATIVES section -- another split.
3. PROTECTION LIST (the 5th reflection section) has NO corresponding dimension in ConvictionEntry. This is an information loss point.
4. **Doc 08 does NOT define ConvictionEntry at all.** The plan's ConvictionEntry is a plan-only invention. Doc 08 stores conviction as an append-only file (plain text with structured markers `CONVICTION_ADDITION_START/END`), not as typed objects.
5. The "capped at 10, FIFO merge" strategy is also plan-only. Doc 08's conviction layer is uncapped and append-only (doc 06 warns it could reach 5,000-7,500 tokens by pass 56).
6. The `max ~130 words` constraint appears nowhere in doc 08. Doc 07 says "2-5 sentences."

**Verdict:** ConvictionEntry is a plan-only type that restructures doc 08's file-based conviction storage into typed in-state objects. The 6 dimensions are a reasonable decomposition of the reflection format, but:
- PROTECTION LIST is unrepresented
- The cap at 10 entries contradicts doc 08's append-only design (doc 06 explicitly discusses the growing conviction layer as a feature/risk)
- The word limit (130 words) is undocumented in source specs

---

## 6. Resume Algorithm: Plan's 6 Steps vs Doc 08's Full Algorithm

### Doc 08 Resume Algorithm (Section 3.1, 6 steps with sub-steps):

```
1. Does state.json exist?
   NO  -> Fresh start
   YES -> Step 2

2. Does configHash match?
   NO  -> Archive old state. Fresh start.
   YES -> Step 3

3. Is schemaVersion compatible?
   NO  -> Attempt migration. If fails, archive + fresh start.
   YES -> Step 4

4. Is inFlightPass non-null? (crash during pass)
   YES -> Step 5 (partial failure recovery)
   NO  -> Step 6 (clean resume)

5. PARTIAL FAILURE RECOVERY:
   a. Verifier? -> Safe to retry. Clear inFlightPass.
   b. Builder? -> Check artifact integrity:
      i.   Read current artifact, compute hash
      ii.  Compare with state.currentArtifactHash
      iii. MATCH -> artifact not yet modified, safe to retry
           MISMATCH -> restore from backup
           Backup also corrupt -> FATAL
   Clear inFlightPass, resume from that pass.

6. CLEAN RESUME:
   a. Verify artifact hash matches currentArtifactHash
      MATCH -> good, resume from lastCompletedCorpusPass + 1
      MISMATCH -> WARN, update hash (user may have edited)
   b. Check phase:
      corpus-integration -> resume from lastCompletedCorpusPass + 1
      pa-hardening -> resume from completedPACycles + 1
      paused -> wait for user
      complete -> nothing to do
      failed -> ask user to retry from failure point
```

### Plan's 6 Steps:

```
1. Read state.json
2. Check schemaVersion === 3 (reject if mismatched)
3. Check configHash matches current config (reject if changed -> stale state)
4. Verify currentArtifactHash matches SHA-256 of file on disk (detect corruption)
5. Check inFlightPass: if present, resume from that pass (re-run it)
6. If no inFlightPass: resume from totalCorpusPasses + 1
```

### Gap Analysis:

| Doc 08 Feature | Plan Coverage | Severity |
|---------------|---------------|----------|
| Step 1: State existence check | Implicit (plan's "Read state.json") | OK |
| Step 2: Config hash with ARCHIVE on mismatch | Step 3 says "reject" but doesn't mention archival | **MEDIUM** -- old state data would be lost |
| Step 3: Schema migration attempt | Step 2 says "reject if mismatched" -- no migration | **LOW** -- migration is future-proofing, not critical for v1 |
| Step 4: inFlightPass detection | Step 5 | OK |
| Step 5a: Verifier crash = safe retry | **MISSING** | **HIGH** -- plan doesn't distinguish builder vs verifier crash recovery |
| Step 5b: Builder crash = artifact integrity check | Step 4 checks hash, but doesn't link to crash recovery | **HIGH** -- plan checks hash in step 4 (before inFlightPass check in step 5), which is the wrong order. Should check inFlightPass FIRST, then hash. |
| Step 5b.iii: Backup restoration on mismatch | **MISSING** | **HIGH** -- no mention of backup restoration in plan's algorithm |
| Step 5b.iii: FATAL if backup also corrupt | **MISSING** | **MEDIUM** |
| Step 6a: Hash mismatch = WARN + continue | **MISSING** | **MEDIUM** -- plan's step 4 says "detect corruption" but doesn't say what to do about it |
| Step 6b: Phase-specific resume logic | Step 6 only covers corpus-integration | **HIGH** -- no pa-hardening resume, no paused handling, no complete handling, no failed handling |
| Archival of old state | **MISSING** | **MEDIUM** |
| Return type with action enum | **MISSING** | **LOW** -- implementation detail |

**Verdict:** The plan's resume algorithm is a SIMPLIFIED version that covers the happy path (steps 1, 2/3, 4, 6) but misses critical failure recovery:
- No builder-vs-verifier distinction during crash recovery
- No backup restoration
- No phase-specific resume (only corpus-integration)
- Steps 4 and 5 are in wrong order (hash check before inFlightPass check)
- No archival of stale state

---

## 7. PACycleRecord: Definition Status

### Doc 08 defines PACycleRecord (Section 1.3):
```typescript
interface PACycleRecord {
  cycleNumber: number;
  startedAt: string;
  completedAt: string;
  durationMs: number;
  screenshotDir: string;
  screenshotCount: number;
  auditors: {
    id: string;
    reportPath: string;
    tokens: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
    durationMs: number;
  }[];
  weaver: {
    reportPath: string;
    tokens: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
    durationMs: number;
  };
  refine: {
    artifactPath: string | null;
    backupPath: string;
    tokens: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
    durationMs: number;
    validationPassed: boolean;
  } | null;
  paScore: number | null;
  metThreshold: boolean;
  totalCycleCostUsd: number;
}
```

**12 fields, including 3 complex sub-objects (auditors array, weaver object, refine object).**

### Plan's PACycleRecord:

The plan references `PACycleRecord` in the PipelineState interface (`paCycleRecords: PACycleRecord[]`) but **DOES NOT DEFINE THE TYPE ANYWHERE IN THE STATE SCHEMA SECTION.**

Searching the full plan for `PACycleRecord`:
- Line 370: `paCycleRecords: PACycleRecord[];` -- usage
- That's it. No interface definition.

**Verdict: PACycleRecord is REFERENCED BUT UNDEFINED in the plan.** This is a gap. The `type-architect` worker (Wave 1) is told to "define ALL TypeScript interfaces" including "Every field from State Schema v3 section above" -- but they will not find the PACycleRecord definition in the plan. They must consult doc 08 directly.

---

## 8. Additional Missing Types

### Types defined in doc 08 but absent from plan:

| Type | Doc 08 Section | Defined in Plan? |
|------|---------------|-----------------|
| `CheckpointRecord` | Section 1.4 | NO (plan has `checkpoints: string[]` but no type) |
| `ErrorRecord` | Section 1.5 | Referenced (`errorHistory: ErrorRecord[]`) but **NOT DEFINED** |
| `RoleCost` | Section 1.6 | NO (plan uses flat `number` instead) |
| `ValidationResult` | Doc 02 Section 2.5 | NO |
| `ValidationCheck` | Doc 02 Section 2.5 | NO |
| `RetryConfig` | Doc 08 Section 4.2 | NO |

### Types defined in doc 02 but absent from plan:

| Type | Doc 02 Section | In Plan? |
|------|---------------|----------|
| `CorpusFile` | Section 2.1 | Not in schema section (mentioned elsewhere in plan) |
| `CorpusSubset` | Section 2.1 | Not in schema section (mentioned elsewhere in plan) |
| `RotationSchedule` | Section 2.2 | Not in schema section |
| `PassDefinition` | Section 2.3 | Not in schema section |
| `PipelineConfig` | Section 2.6 | Not in schema section |

Note: Doc 02 types may be covered in other plan sections (File/Folder Structure mentions `pipeline.ts`, `pass.ts`, etc.).

---

## 9. BLOCKING Issues (Must Fix Before Implementation)

| # | Issue | Severity | Description |
|---|-------|----------|-------------|
| B1 | PACycleRecord undefined | BLOCKING | Type is used in PipelineState but never defined. Workers cannot implement without it. |
| B2 | ErrorRecord undefined | BLOCKING | Type is used in PipelineState but never defined. |
| B3 | `currentSubsetId` type mismatch | BLOCKING | Doc 08 says `string` ("S1"-"S7"), plan says `number` (1-7). Propagates to PassRecord.subsetId and ConvictionEntry.subsetId. Must pick one. Recommendation: use `string` per doc 08 (JSON is string-keyed). |
| B4 | `passRecords` Record vs Array | HIGH | Doc 08 uses `Record<string, PassRecord>` for O(1) lookup. Plan uses `PassRecord[]`. Affects resume algorithm (needs to look up by pass number). |
| B5 | Resume step ordering | HIGH | Plan checks artifact hash (step 4) before inFlightPass (step 5). Should be reversed per doc 08. |
| B6 | Missing path fields in PassRecord | HIGH | 5 path fields (promptPath, rawOutputPath, backupPath, artifactPath) enable forensics and replay. |
| B7 | CostTracker `byRole`/`bySubset` flattened | MEDIUM | Losing per-role token breakdown prevents cost analysis by role. |
| B8 | Conviction storage architecture | MEDIUM | File-based (doc 08) vs in-memory array capped at 10 (plan). Different architectures. Cap at 10 contradicts doc 06's design discussion. |
| B9 | 4 missing ErrorCategory values | MEDIUM | `output-truncated`, `output-empty`, `output-no-modification`, `claude-p-spawn-failed` all have specific recovery strategies in doc 08. |
| B10 | `status` field redundant with `currentPhase` | LOW | Creates dual state that can drift. Remove one. |

---

## 10. Recommendations

1. **Add PACycleRecord and ErrorRecord definitions** to the plan's State Schema section, or add an explicit note: "See doc 08 sections 1.3 and 1.5 for complete type definitions."

2. **Standardize subsetId as `string`** ("S1"-"S7") everywhere. The numeric representation loses the semantic prefix.

3. **Use `Record<string, PassRecord>`** instead of `PassRecord[]` for O(1) lookup during resume.

4. **Add the 5 path fields** to PassRecord (promptPath, rawOutputPath, backupPath, artifactPath, validationDetails) or explicitly document why they're omitted.

5. **Fix resume algorithm step ordering**: inFlightPass check (step 5) must come before artifact hash check (step 4), and add builder/verifier distinction.

6. **Resolve conviction storage architecture**: File-based (doc 08) or in-state array (plan)? If in-state, address the growth concern from doc 06. If file-based, remove ConvictionEntry type.

7. **Add missing ErrorCategory values** or explicitly map the plan's categories to doc 08's recovery strategies.

8. **Remove `status` field** -- it's redundant with `currentPhase` and creates a dual-state drift risk.

---

*End of audit. 36 fields compared in PipelineState, 29 in PassRecord, 12 in CostTracker, 15 ErrorCategory values, 6 ConvictionEntry dimensions, 6 resume algorithm steps, 1 undefined referenced type.*
