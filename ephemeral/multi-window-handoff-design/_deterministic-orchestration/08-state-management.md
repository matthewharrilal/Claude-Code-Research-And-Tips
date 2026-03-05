# State Management, Logging, Resume, and Error Recovery

## Relationship to 02-orchestrator-architecture.md

The orchestrator architecture (02) defines `PipelineState`, `PassRecord`, `CostTracker`, `ValidationResult`, `saveState`, `loadState`, and basic retry logic. This document goes DEEPER on seven dimensions: the complete state file schema with every field justified, the multi-log architecture, the resume algorithm with integrity verification, error recovery for every failure mode, the checkpoint system, artifact versioning, and real-time terminal reporting. Where 02 defines the data structures, this document defines the behavior, edge cases, and operational guarantees.

---

## 1. State File (JSON) -- Complete Schema

The state file is the single source of truth for pipeline progress. It is written atomically after every pass. If the orchestrator process dies at any point, the state file tells the resume algorithm exactly where to continue.

### 1.1 Schema

```typescript
/**
 * STATE FILE SCHEMA -- Version 3
 *
 * Written to: {outputDir}/_orchestrator/state.json
 * Written after: every completed pass, every phase transition, every checkpoint
 * Write method: atomic (write to .tmp, then rename -- see Section 3.3)
 *
 * Design principles:
 *   1. Everything needed to resume is in this file. No external state.
 *   2. Every field has a reason. No speculative fields.
 *   3. Paths are relative to outputDir so the directory can be moved.
 *   4. Timestamps are ISO 8601 UTC everywhere.
 */
interface PipelineState {
  // ─── Identity ───

  /** Schema version. Increment on breaking changes. Resume refuses mismatched versions. */
  schemaVersion: 3;

  /** Unique run ID (UUIDv4). Distinguishes runs even if timestamps collide. */
  runId: string;

  /** SHA-256 hash (first 16 hex chars) of the significant config fields.
   *  If this changes between runs, resume is impossible (pass definitions shifted). */
  configHash: string;

  // ─── Timestamps ───

  /** When runPipeline() was first called for this run. */
  startedAt: string;       // ISO 8601 UTC

  /** When this state file was last written to disk. */
  lastSavedAt: string;     // ISO 8601 UTC

  /** When the pipeline completed (null if still running). */
  completedAt: string | null;

  // ─── Phase Tracking ───

  /**
   * The current macro-phase of the pipeline.
   *
   * 'corpus-integration': Running the 7 subsets x 8 passes = 56 passes.
   * 'pa-hardening':       Running screenshot -> auditor -> weaver -> refine cycles.
   * 'complete':           Pipeline finished successfully.
   * 'paused':             User-initiated pause (between subsets or budget threshold).
   * 'failed':             Unrecoverable failure. State is frozen for forensic analysis.
   */
  currentPhase: 'corpus-integration' | 'pa-hardening' | 'complete' | 'paused' | 'failed';

  /**
   * Reason for current phase, if applicable.
   * For 'paused': "user-review", "budget-threshold", "quality-gate"
   * For 'failed': the error message
   * For others: null
   */
  phaseReason: string | null;

  // ─── Progress ───

  /** Total number of corpus integration passes (7 subsets * 8 = 56). */
  totalCorpusPasses: number;

  /** Global pass number of the last COMPLETED corpus pass. 0 = none completed.
   *  This is the resume point: the next pass to execute is lastCompletedCorpusPass + 1. */
  lastCompletedCorpusPass: number;

  /** Which subset is currently active ("S1" through "S7", or null if between subsets). */
  currentSubsetId: string | null;

  /** Total PA hardening cycles completed. */
  completedPACycles: number;

  /** Maximum PA cycles allowed (from config, but stored here for resume). */
  maxPACycles: number;

  /** The PA-05 score from the most recent completed PA cycle. null if no cycles completed. */
  lastPAScore: number | null;

  /** The PA score threshold to stop hardening (from config, stored for resume). */
  paScoreThreshold: number;

  // ─── Per-Pass Records ───

  /**
   * Record of every completed pass. Keyed by global pass number (string because JSON keys).
   * This is append-only: once a pass record is written, it is never modified.
   *
   * Each record is self-contained: it includes the pass definition, timing,
   * cost, validation results, and paths to all artifacts produced.
   */
  passRecords: Record<string, PassRecord>;

  // ─── PA Cycle Records ───

  /**
   * Record of every completed PA hardening cycle.
   * Keyed by cycle number (1-indexed).
   */
  paCycleRecords: Record<string, PACycleRecord>;

  // ─── Artifact Tracking ───

  /**
   * Relative path (from outputDir) to the current artifact.
   * This is the "live" file that builder passes modify.
   */
  currentArtifactPath: string;

  /**
   * SHA-256 hash of the current artifact file contents.
   * Used by the resume algorithm to verify artifact integrity.
   * Updated after every builder pass.
   */
  currentArtifactHash: string;

  /**
   * Ordered list of all artifact backup paths (relative to outputDir).
   * A backup is created before every builder pass and before every PA refine pass.
   * Index 0 is the oldest backup.
   */
  artifactBackups: string[];

  // ─── Accumulated State ───

  /** Relative path to the conviction layer file (append-only). */
  convictionLayerPath: string;

  /** Relative path to the discovery log file (append-only). */
  discoveryLogPath: string;

  /** Number of conviction entries accumulated. */
  convictionEntryCount: number;

  /** Number of discovery entries accumulated. */
  discoveryEntryCount: number;

  // ─── Checkpoints ───

  /**
   * Ordered list of checkpoints. A checkpoint is created after each subset
   * completes (every 8 corpus passes) and after each PA cycle.
   */
  checkpoints: CheckpointRecord[];

  // ─── Cost Tracking ───

  cost: CostTracker;

  // ─── Error History ───

  /**
   * Append-only log of all errors encountered, including transient ones
   * that were recovered from via retry. Used for post-run forensics.
   */
  errorHistory: ErrorRecord[];

  // ─── In-Flight Pass Tracking ───

  /**
   * If a pass is currently executing, this records its start time and definition.
   * Set to non-null when a pass begins, cleared when it completes or fails.
   * The resume algorithm uses this to detect passes that started but never completed
   * (e.g., process was killed mid-pass).
   */
  inFlightPass: {
    globalPassNumber: number;
    startedAt: string;
    agentRole: 'builder' | 'verifier';
    subsetId: string;
  } | null;
}
```

### 1.2 PassRecord -- Complete Fields

```typescript
interface PassRecord {
  // ─── Identity ───
  globalPassNumber: number;
  subsetPassNumber: number;
  subsetId: string;
  rotation: 'A' | 'B' | 'C';
  agentRole: 'builder' | 'verifier';
  description: string;

  // ─── Timing ───
  startedAt: string;      // ISO 8601 UTC
  completedAt: string;    // ISO 8601 UTC
  durationMs: number;
  /** Number of retry attempts before success (0 = first attempt succeeded). */
  retryCount: number;

  // ─── Artifact Paths (all relative to outputDir) ───

  /** Path to the prompt file sent to claude -p. Always written, never deleted. */
  promptPath: string;
  /** Path to the raw output from claude -p. Always written, never deleted. */
  rawOutputPath: string;
  /** Path to the artifact backup taken BEFORE this pass (null for verifier passes). */
  backupPath: string | null;
  /** Path to the extracted artifact AFTER this pass (null for verifier passes). */
  artifactPath: string | null;
  /** SHA-256 hash of the artifact after this pass (null for verifier passes). */
  artifactHash: string | null;

  // ─── Validation ───
  validationPassed: boolean;
  validationDetails: ValidationResult;

  // ─── Cost ───
  tokens: {
    inputTokens: number;
    outputTokens: number;
    cacheReadTokens: number;    // claude -p may cache reference files
    cacheWriteTokens: number;
    estimatedCostUsd: number;
  };

  // ─── Accumulation ───
  /** Whether a conviction addition was extracted from this pass's output. */
  hasConvictionAddition: boolean;
  /** Whether a discovery log entry was extracted from this pass's output. */
  hasDiscoveryAddition: boolean;

  // ─── Files Loaded ───
  /** Labels of the corpus files loaded in this pass, in rotated order. */
  corpusFilesLoaded: string[];
  /** Labels of the reference files loaded in this pass. */
  referenceFilesLoaded: string[];
}
```

### 1.3 PACycleRecord

```typescript
interface PACycleRecord {
  cycleNumber: number;
  startedAt: string;
  completedAt: string;
  durationMs: number;

  // ─── Screenshots ───
  /** Relative path to the screenshot directory for this cycle. */
  screenshotDir: string;
  /** Number of screenshots captured. */
  screenshotCount: number;

  // ─── Auditors ───
  auditors: {
    id: string;           // "auditor-A", "auditor-B", etc.
    reportPath: string;   // relative to outputDir
    tokens: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
    durationMs: number;
  }[];

  // ─── Weaver ───
  weaver: {
    reportPath: string;
    tokens: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
    durationMs: number;
  };

  // ─── Refine ───
  refine: {
    artifactPath: string | null;    // null if refine failed
    backupPath: string;
    tokens: { inputTokens: number; outputTokens: number; estimatedCostUsd: number };
    durationMs: number;
    validationPassed: boolean;
  } | null;   // null if PA score met threshold (no refine needed)

  // ─── Score ───
  paScore: number | null;     // PA-05 score extracted from weaver
  metThreshold: boolean;      // Whether paScore >= threshold

  // ─── Cost ───
  totalCycleCostUsd: number;
}
```

### 1.4 CheckpointRecord

```typescript
interface CheckpointRecord {
  /** Unique checkpoint ID: "cp-S1", "cp-S2", ..., "cp-PA-1", "cp-PA-2", etc. */
  id: string;
  /** When this checkpoint was created. */
  createdAt: string;
  /** The global pass number at the time of this checkpoint. */
  atPassNumber: number;
  /** The PA cycle number at the time (0 during corpus integration). */
  atPACycle: number;
  /** Relative path to the checkpoint directory. */
  checkpointDir: string;
  /** SHA-256 hash of the artifact at checkpoint time. */
  artifactHash: string;
  /** SHA-256 hash of the state file at checkpoint time. */
  stateHash: string;
  /** Cumulative cost at this checkpoint. */
  costAtCheckpoint: number;
  /** Quality metrics at this checkpoint. */
  qualitySnapshot: {
    lastPAScore: number | null;
    validationFailureCount: number;
    convictionEntries: number;
    discoveryEntries: number;
  };
}
```

### 1.5 ErrorRecord

```typescript
interface ErrorRecord {
  /** When the error occurred. */
  timestamp: string;
  /** Which pass or phase the error occurred during. */
  context: string;            // e.g., "pass-34", "pa-cycle-2-auditor-B", "screenshot-capture"
  /** Error category (used for pattern detection). */
  category: ErrorCategory;
  /** The error message. */
  message: string;
  /** Whether the error was recovered from (retry succeeded). */
  recovered: boolean;
  /** Which retry attempt recovered it (null if not recovered). */
  recoveredAtAttempt: number | null;
  /** Stack trace or additional diagnostics (truncated to 2000 chars). */
  diagnostics: string;
}

type ErrorCategory =
  | 'claude-p-exit-nonzero'     // claude -p returned non-zero exit code
  | 'claude-p-timeout'          // claude -p exceeded timeout
  | 'claude-p-spawn-failed'     // could not spawn claude process
  | 'output-truncated'          // output appears truncated (no </html>)
  | 'output-empty'              // claude -p returned empty output
  | 'output-no-artifact'        // builder output didn't contain HTML
  | 'output-no-modification'    // builder output identical to input artifact
  | 'validation-failed'         // structural validation failed
  | 'screenshot-failed'         // Playwright screenshot capture failed
  | 'rate-limit'                // API rate limit hit
  | 'budget-exceeded'           // cumulative cost exceeded budget
  | 'file-io'                   // filesystem read/write error
  | 'state-corruption'          // state file failed integrity check
  | 'config-mismatch'           // config hash changed between resume attempts
  | 'unknown';                  // unclassified error
```

### 1.6 CostTracker (Extended)

```typescript
interface CostTracker {
  totalInputTokens: number;
  totalOutputTokens: number;
  totalCacheReadTokens: number;
  totalCacheWriteTokens: number;
  totalEstimatedCostUsd: number;

  /** Cost broken down by agent role. */
  byRole: {
    builder: RoleCost;
    verifier: RoleCost;
    pa: RoleCost;       // includes auditors + weaver + refine
  };

  /** Cost broken down by subset. */
  bySubset: Record<string, RoleCost>;

  /** Cost broken down by PA cycle. */
  byPACycle: Record<string, RoleCost>;

  /** Budget warning threshold (from config). Warn when cost exceeds this. */
  budgetWarningThresholdUsd: number;

  /** Budget hard cap (from config). Pause when cost exceeds this. */
  budgetHardCapUsd: number;

  /** Whether the warning threshold has been hit (prevents duplicate warnings). */
  warningThresholdHit: boolean;

  /** Whether the hard cap has been hit. */
  hardCapHit: boolean;
}

interface RoleCost {
  inputTokens: number;
  outputTokens: number;
  costUsd: number;
  passCount: number;   // how many passes contributed to this total
}
```

---

## 2. Logging Architecture (Append-Only)

The orchestrator maintains SIX distinct log files. All are append-only. None are ever overwritten. They serve different audiences and purposes.

### 2.1 Log File Layout

```
{outputDir}/_orchestrator/logs/
  orchestrator.log       # Human-readable execution log (Section 2.2)
  decisions.jsonl        # Machine-readable decision log (Section 2.3)
  errors.jsonl           # Machine-readable error log (Section 2.4)
  cost.jsonl             # Per-invocation cost log (Section 2.5)
  quality.jsonl          # Quality assessments over time (Section 2.6)
  passes.jsonl           # Per-pass summary log (Section 2.7)
```

All `.jsonl` files use JSON Lines format: one JSON object per line, each self-contained. This format is grep-friendly, append-safe, and resilient to partial writes (a corrupt last line = only the last entry is lost).

### 2.2 Execution Log (orchestrator.log)

Human-readable, timestamped, multi-level. This is what the operator reads when something goes wrong.

```
[2026-02-28T14:23:01.234Z] [INFO]  Pipeline started. Run ID: a1b2c3d4-e5f6-...
[2026-02-28T14:23:01.235Z] [INFO]  Config hash: 3f8a2b1c9d4e5f67
[2026-02-28T14:23:01.236Z] [INFO]  Resuming from pass 35/56 (previous run crashed at pass 35)
[2026-02-28T14:23:01.237Z] [INFO]  ═══════════════════════════════════════
[2026-02-28T14:23:01.238Z] [INFO]  PASS 35/56: [S5] Pass 3/8 — Rotation A — Builder — Grammar
[2026-02-28T14:23:01.239Z] [INFO]    Artifact backed up to _orchestrator/passes/pass-035/artifact-backup.html
[2026-02-28T14:23:01.500Z] [INFO]    Prompt written (142,891 chars, ~35,723 tokens)
[2026-02-28T14:23:01.501Z] [INFO]    Invoking claude -p (attempt 1/3)...
[2026-02-28T14:25:47.123Z] [INFO]    Output received (87,432 chars, ~21,858 tokens)
[2026-02-28T14:25:47.200Z] [INFO]    Validation: PASS (5/5 checks)
[2026-02-28T14:25:47.201Z] [INFO]    Conviction addition appended (234 chars)
[2026-02-28T14:25:47.202Z] [INFO]    Artifact updated (85,012 chars)
[2026-02-28T14:25:47.203Z] [INFO]    PASS 35 COMPLETE in 166.0s | 35,723 in / 21,858 out | $1.18 | validation: PASS
[2026-02-28T14:25:47.204Z] [WARN]    Discovery log entry missing from builder output
```

Level semantics:
- **INFO**: Normal execution flow. Every pass start/end, every file written.
- **WARN**: Non-fatal issues. Missing accumulation entries, validation warnings, short outputs.
- **ERROR**: Failures requiring attention. Failed passes, retries exhausted, extraction failures.

### 2.3 Decision Log (decisions.jsonl)

Records WHY the orchestrator made each decision. This is the forensic record.

```jsonl
{"ts":"2026-02-28T14:23:01Z","decision":"resume","reason":"state.configHash matches config hash","passNumber":35}
{"ts":"2026-02-28T14:23:01Z","decision":"skip-pass","reason":"pass already completed","passNumber":34}
{"ts":"2026-02-28T14:23:01Z","decision":"execute-pass","passNumber":35,"role":"builder","subset":"S5","rotation":"A","files":["Mechanisms","Rules","Combinations","Borders","SemanticRules"]}
{"ts":"2026-02-28T14:25:47Z","decision":"accept-output","passNumber":35,"validationResult":"pass","checks":5}
{"ts":"2026-02-28T14:25:47Z","decision":"extract-conviction","passNumber":35,"length":234}
{"ts":"2026-02-28T14:25:47Z","decision":"skip-discovery","passNumber":35,"reason":"no discovery markers found in output"}
{"ts":"2026-02-28T16:00:00Z","decision":"create-checkpoint","id":"cp-S5","atPass":40,"artifactHash":"a1b2c3d4..."}
{"ts":"2026-02-28T18:30:00Z","decision":"pause-pipeline","reason":"budget-threshold","cost":245.00,"threshold":250.00}
{"ts":"2026-02-28T19:00:00Z","decision":"retry-pass","passNumber":42,"attempt":2,"reason":"claude-p-exit-nonzero","exitCode":1}
```

### 2.4 Error Log (errors.jsonl)

Every error, including transient ones recovered from via retry.

```jsonl
{"ts":"2026-02-28T19:00:00Z","context":"pass-42","category":"claude-p-exit-nonzero","message":"claude -p exited with code 1","recovered":true,"recoveredAtAttempt":2,"diagnostics":"stderr: Connection reset by peer"}
{"ts":"2026-02-28T20:15:00Z","context":"pa-cycle-1-screenshot","category":"screenshot-failed","message":"Playwright browser launch failed: browser not found","recovered":true,"recoveredAtAttempt":1,"diagnostics":"Reinstalled browser via npx playwright install chromium"}
```

### 2.5 Cost Log (cost.jsonl)

One entry per `claude -p` invocation. Enables post-run cost analysis.

```jsonl
{"ts":"2026-02-28T14:25:47Z","pass":35,"role":"builder","subset":"S5","model":"claude-opus-4-6","inputTokens":35723,"outputTokens":21858,"cacheRead":0,"cacheWrite":0,"costUsd":1.18,"cumulativeCostUsd":87.45}
{"ts":"2026-02-28T14:30:00Z","pass":36,"role":"verifier","subset":"S5","model":"claude-opus-4-6","inputTokens":42100,"outputTokens":3200,"cacheRead":12000,"cacheWrite":0,"costUsd":0.87,"cumulativeCostUsd":88.32}
```

### 2.6 Quality Log (quality.jsonl)

Records quality-related signals over time. Enables quality trend analysis.

```jsonl
{"ts":"2026-02-28T14:25:47Z","pass":35,"type":"validation","result":"pass","checks":5,"warnings":1,"warningDetails":["Discovery log entry missing"]}
{"ts":"2026-02-28T14:30:00Z","pass":36,"type":"verifier-depth","deeplyIntegrated":7,"surfaceLevel":3,"absent":2}
{"ts":"2026-02-28T22:00:00Z","paCycle":1,"type":"pa-score","score":2.5,"threshold":3.5,"auditorCount":3}
{"ts":"2026-02-28T23:30:00Z","paCycle":2,"type":"pa-score","score":3.0,"threshold":3.5,"auditorCount":3}
{"ts":"2026-02-29T01:00:00Z","paCycle":3,"type":"pa-score","score":3.5,"threshold":3.5,"auditorCount":3,"metThreshold":true}
```

### 2.7 Pass Summary Log (passes.jsonl)

One line per pass. Machine-readable summary for dashboarding and analysis.

```jsonl
{"pass":35,"subset":"S5","subsetPass":3,"rotation":"A","role":"builder","durationMs":166000,"inputTokens":35723,"outputTokens":21858,"costUsd":1.18,"validationPassed":true,"retries":0,"conviction":true,"discovery":false,"artifactSizeChars":85012}
```

### 2.8 Log Rotation

Logs are NOT rotated during a pipeline run. A single run's logs stay intact. If the output directory is reused for a new run (config hash mismatch), the old logs are archived alongside the old state file (see Section 3.2).

---

## 3. Resume Capability

### 3.1 The Resume Algorithm

```typescript
/**
 * THE RESUME ALGORITHM
 *
 * Called at pipeline start. Determines whether to resume an existing run
 * or start fresh. This is the CRITICAL path that makes 12-20 hour runs
 * survivable.
 *
 * Decision tree:
 *
 * 1. Does state.json exist?
 *    NO  → Fresh start. Initialize state, begin from pass 1.
 *    YES → Continue to step 2.
 *
 * 2. Does state.configHash match the current config hash?
 *    NO  → Config changed. Archive old state. Fresh start.
 *    YES → Continue to step 3.
 *
 * 3. Is state.schemaVersion compatible?
 *    NO  → Schema migration needed. Attempt migration, then continue.
 *          If migration fails, archive old state. Fresh start.
 *    YES → Continue to step 4.
 *
 * 4. Is state.inFlightPass non-null? (crash during a pass)
 *    YES → Continue to step 5 (partial failure recovery).
 *    NO  → Continue to step 6 (clean resume).
 *
 * 5. PARTIAL FAILURE RECOVERY:
 *    The process crashed while a pass was executing.
 *    a. Was the in-flight pass a VERIFIER?
 *       → Safe to retry. Verifiers don't modify the artifact.
 *         Clear inFlightPass, resume from that pass number.
 *    b. Was the in-flight pass a BUILDER?
 *       → The artifact MAY be corrupted (partial write).
 *         Check artifact integrity:
 *         i.  Read current artifact file.
 *         ii. Compute its hash.
 *         iii. Compare with state.currentArtifactHash (the hash BEFORE this pass).
 *              MATCH → Artifact was not yet modified. Safe to retry the pass.
 *              MISMATCH → Artifact was partially modified.
 *                         Restore from the backup created at pass start.
 *                         Verify backup hash matches state.currentArtifactHash.
 *                         If backup is also corrupt → FATAL. Manual recovery needed.
 *         Clear inFlightPass, resume from that pass number.
 *
 * 6. CLEAN RESUME:
 *    a. Verify artifact integrity: hash of current artifact matches
 *       state.currentArtifactHash.
 *       MATCH → Good. Resume from lastCompletedCorpusPass + 1.
 *       MISMATCH → Artifact was modified outside the orchestrator.
 *                  Log a WARNING but continue (the user may have manually edited it).
 *                  Update the hash.
 *    b. Check phase:
 *       'corpus-integration' → Resume from lastCompletedCorpusPass + 1.
 *       'pa-hardening' → Resume from completedPACycles + 1.
 *       'paused' → Log pause reason. Wait for user input to continue.
 *       'complete' → Pipeline already finished. Nothing to do.
 *       'failed' → Previous run failed fatally. Ask user whether to retry from failure point.
 */
async function resolveResumeState(config: PipelineConfig): Promise<{
  action: 'fresh-start' | 'resume' | 'paused' | 'already-complete' | 'failed-needs-decision';
  state: PipelineState;
  resumeFromPass?: number;
  resumeFromPACycle?: number;
  warnings: string[];
}> {
  const warnings: string[] = [];

  // Step 1: Check for existing state
  const existing = await loadState(config.outputDir);
  if (!existing) {
    return {
      action: 'fresh-start',
      state: initializeState(config),
      warnings: [],
    };
  }

  // Step 2: Config hash match
  const currentHash = hashConfig(config);
  if (existing.configHash !== currentHash) {
    await archiveState(config.outputDir, existing);
    warnings.push(`Config changed (old: ${existing.configHash}, new: ${currentHash}). Archived old state. Starting fresh.`);
    return {
      action: 'fresh-start',
      state: initializeState(config),
      warnings,
    };
  }

  // Step 3: Schema version
  if (existing.schemaVersion !== 3) {
    const migrated = await attemptSchemaMigration(existing);
    if (!migrated) {
      await archiveState(config.outputDir, existing);
      warnings.push(`Schema version ${existing.schemaVersion} cannot be migrated to v3. Starting fresh.`);
      return {
        action: 'fresh-start',
        state: initializeState(config),
        warnings,
      };
    }
    Object.assign(existing, migrated);
  }

  // Step 4: In-flight pass detection
  if (existing.inFlightPass) {
    const inflight = existing.inFlightPass;
    warnings.push(`Detected in-flight pass ${inflight.globalPassNumber} (${inflight.agentRole}) -- process likely crashed during execution.`);

    if (inflight.agentRole === 'verifier') {
      // Safe to retry -- verifiers don't modify artifacts
      warnings.push(`In-flight pass was a verifier. Safe to retry.`);
    } else {
      // Builder -- check artifact integrity
      const artifactIntegrity = await verifyArtifactIntegrity(
        config.outputDir,
        existing.currentArtifactPath,
        existing.currentArtifactHash
      );

      if (artifactIntegrity === 'match') {
        warnings.push(`Artifact unchanged (builder hadn't written yet). Safe to retry.`);
      } else if (artifactIntegrity === 'mismatch') {
        warnings.push(`Artifact partially modified. Restoring from backup.`);
        const restored = await restoreFromBackup(config.outputDir, existing);
        if (!restored) {
          existing.currentPhase = 'failed';
          existing.phaseReason = `Artifact corrupted at pass ${inflight.globalPassNumber} and backup restoration failed. Manual recovery needed.`;
          await saveState(config.outputDir, existing);
          return { action: 'failed-needs-decision', state: existing, warnings };
        }
      }
    }

    existing.inFlightPass = null;
    await saveState(config.outputDir, existing);

    return {
      action: 'resume',
      state: existing,
      resumeFromPass: inflight.globalPassNumber,
      warnings,
    };
  }

  // Step 6: Clean resume
  const artifactIntegrity = await verifyArtifactIntegrity(
    config.outputDir,
    existing.currentArtifactPath,
    existing.currentArtifactHash
  );
  if (artifactIntegrity === 'mismatch') {
    warnings.push(`Artifact modified outside orchestrator. Updating hash.`);
    existing.currentArtifactHash = await computeFileHash(
      path.join(config.outputDir, existing.currentArtifactPath)
    );
    await saveState(config.outputDir, existing);
  }

  switch (existing.currentPhase) {
    case 'complete':
      return { action: 'already-complete', state: existing, warnings };
    case 'paused':
      return { action: 'paused', state: existing, warnings };
    case 'failed':
      return { action: 'failed-needs-decision', state: existing, warnings };
    case 'corpus-integration':
      return {
        action: 'resume',
        state: existing,
        resumeFromPass: existing.lastCompletedCorpusPass + 1,
        warnings,
      };
    case 'pa-hardening':
      return {
        action: 'resume',
        state: existing,
        resumeFromPACycle: existing.completedPACycles + 1,
        warnings,
      };
  }
}
```

### 3.2 State Archival

When a resume is impossible (config changed), the old state directory is archived:

```typescript
async function archiveState(outputDir: string, state: PipelineState): Promise<void> {
  const archiveDir = path.join(
    outputDir,
    '_orchestrator',
    'archives',
    `run-${state.runId}-${state.startedAt.replace(/[:.]/g, '-')}`
  );
  await fs.mkdir(archiveDir, { recursive: true });

  // Archive state file
  const statePath = path.join(outputDir, '_orchestrator', 'state.json');
  await fs.copyFile(statePath, path.join(archiveDir, 'state.json'));

  // Archive logs
  const logDir = path.join(outputDir, '_orchestrator', 'logs');
  if (await fileExists(logDir)) {
    await copyDir(logDir, path.join(archiveDir, 'logs'));
  }

  // Archive conviction and discovery files
  if (await fileExists(path.join(outputDir, state.convictionLayerPath))) {
    await fs.copyFile(
      path.join(outputDir, state.convictionLayerPath),
      path.join(archiveDir, 'conviction-layer.md')
    );
  }
  if (await fileExists(path.join(outputDir, state.discoveryLogPath))) {
    await fs.copyFile(
      path.join(outputDir, state.discoveryLogPath),
      path.join(archiveDir, 'discovery-log.md')
    );
  }
}
```

### 3.3 Atomic State Writes

The state file write is the most critical I/O operation. A corrupt state file means the pipeline cannot resume. We use write-to-temp-then-rename:

```typescript
async function saveState(outputDir: string, state: PipelineState): Promise<void> {
  const statePath = path.join(outputDir, '_orchestrator', 'state.json');
  const tempPath = statePath + `.tmp.${Date.now()}`;

  state.lastSavedAt = new Date().toISOString();
  const json = JSON.stringify(state, null, 2);

  // Write to temp file
  await fs.writeFile(tempPath, json, 'utf-8');

  // Verify the temp file is valid JSON (defense against partial write)
  try {
    const readBack = await fs.readFile(tempPath, 'utf-8');
    JSON.parse(readBack);
  } catch {
    // Temp file is corrupt. Delete it and throw.
    await fs.unlink(tempPath).catch(() => {});
    throw new Error('State file verification failed after write. State NOT updated.');
  }

  // Atomic rename (on POSIX, rename is atomic within the same filesystem)
  await fs.rename(tempPath, statePath);
}
```

### 3.4 Artifact Integrity Verification

```typescript
async function verifyArtifactIntegrity(
  outputDir: string,
  relativePath: string,
  expectedHash: string
): Promise<'match' | 'mismatch' | 'missing'> {
  const fullPath = path.join(outputDir, relativePath);

  if (!(await fileExists(fullPath))) {
    return 'missing';
  }

  const actualHash = await computeFileHash(fullPath);
  return actualHash === expectedHash ? 'match' : 'mismatch';
}

async function computeFileHash(filePath: string): Promise<string> {
  const crypto = require('crypto');
  const content = await fs.readFile(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}
```

### 3.5 Backup Restoration

```typescript
async function restoreFromBackup(outputDir: string, state: PipelineState): Promise<boolean> {
  // Find the most recent backup
  if (state.artifactBackups.length === 0) {
    return false;
  }

  const lastBackupRelative = state.artifactBackups[state.artifactBackups.length - 1];
  const lastBackupPath = path.join(outputDir, lastBackupRelative);

  if (!(await fileExists(lastBackupPath))) {
    return false;
  }

  // Verify backup matches the expected pre-pass hash
  const backupHash = await computeFileHash(lastBackupPath);
  if (backupHash !== state.currentArtifactHash) {
    // Backup doesn't match expected state. Try older backups.
    for (let i = state.artifactBackups.length - 2; i >= 0; i--) {
      const olderBackup = path.join(outputDir, state.artifactBackups[i]);
      if (await fileExists(olderBackup)) {
        const olderHash = await computeFileHash(olderBackup);
        if (olderHash === state.currentArtifactHash) {
          await fs.copyFile(olderBackup, path.join(outputDir, state.currentArtifactPath));
          return true;
        }
      }
    }
    return false; // No backup matches
  }

  // Restore from backup
  await fs.copyFile(lastBackupPath, path.join(outputDir, state.currentArtifactPath));
  return true;
}
```

---

## 4. Error Recovery

Every failure mode the orchestrator can encounter, categorized by severity and recovery strategy.

### 4.1 Error Classification

```
TRANSIENT (retry with backoff):
  - claude -p non-zero exit code
  - claude -p timeout
  - Rate limit (429 or similar)
  - Network errors (connection reset, DNS failure)

STRUCTURAL (retry once with output repair):
  - Truncated output (no </html> or </body>)
  - No artifact extracted from builder output
  - No observation sections in verifier output

SOFT FAILURE (log and continue):
  - No conviction addition in output
  - No discovery log entry in output
  - Artifact unchanged by builder (no modification detected)
  - Validation warnings (short artifact, missing sections)

HARD FAILURE (pause pipeline):
  - Budget exceeded
  - 3 consecutive passes fail on the same pass number
  - Artifact corruption detected with no valid backup

FATAL (abort):
  - State file unreadable/corrupt with no archive
  - Config validation failure
  - Output directory permissions error
```

### 4.2 Retry with Exponential Backoff

```typescript
interface RetryConfig {
  maxAttempts: number;      // Default: 3 (1 initial + 2 retries)
  baseDelayMs: number;      // Default: 5000 (5 seconds)
  maxDelayMs: number;       // Default: 120000 (2 minutes)
  backoffMultiplier: number; // Default: 2.0
}

/**
 * Compute the delay before a retry attempt.
 *
 * Attempt 1: 5s
 * Attempt 2: 10s
 * Attempt 3: 20s (capped at maxDelayMs)
 *
 * Jitter is added (0-20% of computed delay) to prevent thundering herd
 * if multiple pipeline instances are running.
 */
function computeRetryDelay(attempt: number, config: RetryConfig): number {
  const exponentialDelay = config.baseDelayMs * Math.pow(config.backoffMultiplier, attempt - 1);
  const cappedDelay = Math.min(exponentialDelay, config.maxDelayMs);
  const jitter = cappedDelay * Math.random() * 0.2;
  return Math.round(cappedDelay + jitter);
}
```

### 4.3 Per-Error-Type Recovery Strategies

#### 4.3.1 `claude -p` Non-Zero Exit Code

```typescript
/**
 * RECOVERY: claude -p exited with non-zero code.
 *
 * Common causes:
 *   Exit 1: General error (API error, invalid request, authentication failure)
 *   Exit 2: Rate limit or overloaded
 *
 * Strategy:
 *   1. Log the exit code and stderr contents.
 *   2. Parse stderr for rate limit indicators (429, "rate limit", "overloaded").
 *   3. If rate limit: use extended delay (60s base instead of 5s).
 *   4. Otherwise: retry with standard backoff.
 *   5. After maxAttempts: record error, save state, throw PassExecutionError.
 *
 * The CALLER (runCorpusIntegration) catches PassExecutionError and terminates
 * the pipeline. State is saved BEFORE the throw, so resume will retry this pass.
 */
function classifyExitCode(exitCode: number, stderr: string): {
  category: ErrorCategory;
  retryConfig: RetryConfig;
} {
  if (/rate.?limit|429|overloaded|capacity/i.test(stderr)) {
    return {
      category: 'rate-limit',
      retryConfig: {
        maxAttempts: 5,           // More retries for rate limits
        baseDelayMs: 60_000,     // Start at 60s
        maxDelayMs: 300_000,     // Cap at 5 minutes
        backoffMultiplier: 2.0,
      },
    };
  }

  return {
    category: 'claude-p-exit-nonzero',
    retryConfig: {
      maxAttempts: 3,
      baseDelayMs: 5_000,
      maxDelayMs: 120_000,
      backoffMultiplier: 2.0,
    },
  };
}
```

#### 4.3.2 Timeout

```typescript
/**
 * RECOVERY: claude -p exceeded timeout.
 *
 * The child process is killed. The output may be partial.
 *
 * Strategy:
 *   1. Kill the child process (SIGTERM, then SIGKILL after 5s).
 *   2. Save any partial output for forensics.
 *   3. Retry with the same timeout.
 *   4. If 2nd retry also times out: retry with 1.5x the timeout.
 *   5. If 3rd retry times out: record error, save state, throw.
 *
 * NOTE: Timeouts during builder passes are more common than verifier
 * passes because builders produce longer output. The default timeout
 * (10 minutes) should be generous for most passes. If consistently
 * hitting timeouts, the prompt is probably too large.
 */
function handleTimeout(pass: PassDefinition, attempt: number, config: PipelineConfig): number {
  if (attempt >= 3) {
    return Math.round(config.passTimeoutMs * 1.5);
  }
  return config.passTimeoutMs;
}
```

#### 4.3.3 Truncated Output

```typescript
/**
 * RECOVERY: Builder output appears truncated.
 *
 * Detection: output contains <html or <!DOCTYPE but no </html>.
 * This means the LLM hit its output token limit mid-artifact.
 *
 * Strategy:
 *   1. Log the truncation (output length, where it cuts off).
 *   2. Do NOT use the truncated artifact (it will break the page).
 *   3. Retry the pass. Truncation is often non-deterministic -- the
 *      same prompt may produce complete output on retry.
 *   4. If still truncated after maxAttempts: record the error,
 *      flag the pass as failed, and CONTINUE TO THE NEXT PASS.
 *      The verifier will catch the issue, and the next builder
 *      will address it.
 *
 * IMPORTANT: Do NOT save a truncated artifact to state.currentArtifactPath.
 * The artifact from the previous pass remains the "current" artifact.
 */
function detectTruncation(output: string, role: 'builder' | 'verifier'): boolean {
  if (role !== 'builder') return false;

  const hasHtmlStart = /<!DOCTYPE html|<html/i.test(output);
  const hasHtmlEnd = /<\/html>/i.test(output);

  if (hasHtmlStart && !hasHtmlEnd) {
    return true;
  }

  // Also check for common truncation markers
  if (output.endsWith('...') || output.endsWith('<!-- rest')) {
    return true;
  }

  return false;
}
```

#### 4.3.4 No Artifact Modification

```typescript
/**
 * RECOVERY: Builder output is identical to the input artifact.
 *
 * This means the builder read the corpus material but didn't change anything.
 * This is a SOFT FAILURE -- it happens, especially in later rotations where
 * the material is already integrated.
 *
 * Strategy:
 *   1. Log the non-modification (pass number, subset, rotation).
 *   2. Record it in the quality log as "no-modification".
 *   3. Continue to the next pass. Do NOT retry -- if the builder
 *      chose not to modify, retrying will likely produce the same result.
 *   4. The verifier pass will assess integration depth.
 *
 * This is expected behavior for:
 *   - Pass 7 (Rotation C, builder) when material was well-integrated in A and B
 *   - Subsets where the material is already represented in the artifact
 */
function handleNoModification(pass: PassDefinition, state: PipelineState): void {
  logDecision({
    decision: 'accept-no-modification',
    passNumber: pass.globalPassNumber,
    reason: `Builder pass produced artifact identical to input. Subset ${pass.subsetId}, rotation ${pass.rotation}, pass ${pass.subsetPassNumber}/8.`,
  });

  logQuality({
    pass: pass.globalPassNumber,
    type: 'no-modification',
    subset: pass.subsetId,
    rotation: pass.rotation,
  });
}
```

#### 4.3.5 Playwright/Screenshot Failure

```typescript
/**
 * RECOVERY: Screenshot capture failed.
 *
 * Common causes:
 *   - Playwright browser not installed
 *   - Browser crash during rendering
 *   - Port conflict with local HTTP server
 *   - File permissions on screenshot directory
 *
 * Strategy:
 *   1. Log the error.
 *   2. If "browser not found": attempt `npx playwright install chromium`.
 *   3. If port conflict: try a different port (increment from base port).
 *   4. Retry the entire screenshot capture (all viewports).
 *   5. If still failing after 3 attempts: CONTINUE without screenshots.
 *      The PA auditors will receive the HTML source instead.
 *      Log a WARNING that PA quality may be degraded.
 *
 * Screenshots are IMPORTANT but not ESSENTIAL. The pipeline can
 * degrade gracefully to source-only PA evaluation.
 */
async function captureScreenshotsWithRecovery(
  artifactPath: string,
  outputDir: string,
  viewports: { width: number; height: number }[],
  maxAttempts: number = 3
): Promise<{ paths: string[]; degraded: boolean }> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const paths = await captureScreenshots(artifactPath, outputDir, viewports);
      return { paths, degraded: false };
    } catch (err) {
      const error = err as Error;
      logError({
        context: 'screenshot-capture',
        category: 'screenshot-failed',
        message: error.message,
        recovered: attempt < maxAttempts,
        recoveredAtAttempt: attempt < maxAttempts ? attempt + 1 : null,
        diagnostics: error.stack?.slice(0, 2000) || '',
      });

      if (error.message.includes('browser') && error.message.includes('not found')) {
        // Attempt browser installation
        try {
          const { execSync } = require('child_process');
          execSync('npx playwright install chromium', { timeout: 120_000 });
        } catch {
          // Installation failed too -- will retry or degrade
        }
      }

      if (attempt < maxAttempts) {
        await sleep(5000 * attempt); // Linear backoff for screenshot retries
      }
    }
  }

  // All attempts failed -- degrade gracefully
  return { paths: [], degraded: true };
}
```

#### 4.3.6 Budget Exceeded

```typescript
/**
 * RECOVERY: Cumulative cost exceeded budget threshold.
 *
 * Two thresholds:
 *   WARNING threshold (default: 80% of budget): Log a warning, continue.
 *   HARD CAP (default: budget value): Pause the pipeline.
 *
 * Strategy:
 *   1. After each pass, check cumulative cost against thresholds.
 *   2. If warning threshold hit (first time): log WARNING with cost breakdown.
 *   3. If hard cap hit: set state.currentPhase = 'paused',
 *      state.phaseReason = 'budget-threshold'. Save state. Exit gracefully.
 *   4. The pipeline can be resumed by increasing the budget in config
 *      or by the user manually changing state.currentPhase back to the
 *      appropriate phase.
 *
 * IMPORTANT: Budget exceeded does NOT abort. It PAUSES. No work is lost.
 * The state file is saved with all progress intact.
 */
function checkBudget(state: PipelineState): 'ok' | 'warning' | 'exceeded' {
  const cost = state.cost;

  if (cost.totalEstimatedCostUsd >= cost.budgetHardCapUsd && !cost.hardCapHit) {
    cost.hardCapHit = true;
    return 'exceeded';
  }

  if (cost.totalEstimatedCostUsd >= cost.budgetWarningThresholdUsd && !cost.warningThresholdHit) {
    cost.warningThresholdHit = true;
    return 'warning';
  }

  return 'ok';
}
```

### 4.4 Consecutive Failure Detection

```typescript
/**
 * Detect if the same pass is failing repeatedly across resume attempts.
 *
 * If a pass fails, the pipeline saves state and exits. On resume, it
 * retries the same pass. If the SAME pass fails 3 times across 3
 * separate resume attempts, something is fundamentally wrong with
 * that pass's prompt or the API.
 *
 * Detection: count how many ErrorRecords exist for the same pass number.
 * If >= 3: pause the pipeline with a diagnostic message.
 */
function detectConsecutiveFailures(state: PipelineState, passNumber: number): boolean {
  const failuresForPass = state.errorHistory.filter(
    e => e.context === `pass-${passNumber}` && !e.recovered
  );
  return failuresForPass.length >= 3;
}
```

---

## 5. Checkpoints

A checkpoint is a consistent snapshot of the pipeline at a known-good point. It enables the user to revert to any subset boundary and re-run from there.

### 5.1 When Checkpoints Are Created

1. **After each subset completes** (every 8 corpus passes): `cp-S1`, `cp-S2`, ..., `cp-S7`
2. **After each PA hardening cycle**: `cp-PA-1`, `cp-PA-2`, ...
3. **On user-initiated pause**: `cp-PAUSE-{timestamp}`

### 5.2 What a Checkpoint Contains

```
{outputDir}/_orchestrator/checkpoints/
  cp-S1/
    state-snapshot.json     # Complete state at checkpoint time
    artifact.html           # Copy of the artifact at checkpoint time
    conviction-layer.md     # Copy of the conviction layer
    discovery-log.md        # Copy of the discovery log
    manifest.json           # Checkpoint metadata
```

### 5.3 Checkpoint Creation

```typescript
async function createCheckpoint(
  state: PipelineState,
  checkpointId: string,
  outputDir: string
): Promise<CheckpointRecord> {
  const cpDir = path.join(outputDir, '_orchestrator', 'checkpoints', checkpointId);
  await fs.mkdir(cpDir, { recursive: true });

  // 1. Copy artifact
  const artifactSrc = path.join(outputDir, state.currentArtifactPath);
  const artifactDst = path.join(cpDir, 'artifact.html');
  await fs.copyFile(artifactSrc, artifactDst);
  const artifactHash = await computeFileHash(artifactSrc);

  // 2. Copy conviction layer
  const convictionSrc = path.join(outputDir, state.convictionLayerPath);
  if (await fileExists(convictionSrc)) {
    await fs.copyFile(convictionSrc, path.join(cpDir, 'conviction-layer.md'));
  }

  // 3. Copy discovery log
  const discoverySrc = path.join(outputDir, state.discoveryLogPath);
  if (await fileExists(discoverySrc)) {
    await fs.copyFile(discoverySrc, path.join(cpDir, 'discovery-log.md'));
  }

  // 4. Snapshot state
  const stateSnapshot = JSON.parse(JSON.stringify(state)); // deep clone
  await fs.writeFile(
    path.join(cpDir, 'state-snapshot.json'),
    JSON.stringify(stateSnapshot, null, 2),
    'utf-8'
  );
  const stateHash = await computeFileHash(path.join(cpDir, 'state-snapshot.json'));

  // 5. Write manifest
  const record: CheckpointRecord = {
    id: checkpointId,
    createdAt: new Date().toISOString(),
    atPassNumber: state.lastCompletedCorpusPass,
    atPACycle: state.completedPACycles,
    checkpointDir: path.relative(outputDir, cpDir),
    artifactHash,
    stateHash,
    costAtCheckpoint: state.cost.totalEstimatedCostUsd,
    qualitySnapshot: {
      lastPAScore: state.lastPAScore,
      validationFailureCount: Object.values(state.passRecords)
        .filter(r => !(r as PassRecord).validationPassed).length,
      convictionEntries: state.convictionEntryCount,
      discoveryEntries: state.discoveryEntryCount,
    },
  };

  await fs.writeFile(
    path.join(cpDir, 'manifest.json'),
    JSON.stringify(record, null, 2),
    'utf-8'
  );

  // 6. Add to state
  state.checkpoints.push(record);

  return record;
}
```

### 5.4 Reverting to a Checkpoint

```typescript
/**
 * Revert the pipeline to a specific checkpoint.
 *
 * This restores:
 *   1. The artifact to its state at checkpoint time
 *   2. The conviction layer and discovery log
 *   3. The pipeline state (which pass to resume from)
 *
 * Pass records and logs from AFTER the checkpoint are NOT deleted.
 * They are preserved for forensic analysis. But the state file's
 * lastCompletedCorpusPass and completedPACycles are rewound so
 * the orchestrator will re-execute those passes.
 *
 * @param checkpointId - Which checkpoint to revert to
 * @param outputDir - Pipeline output directory
 * @returns The reverted state
 */
async function revertToCheckpoint(
  checkpointId: string,
  outputDir: string
): Promise<PipelineState> {
  const cpDir = path.join(outputDir, '_orchestrator', 'checkpoints', checkpointId);

  // Load checkpoint manifest
  const manifest: CheckpointRecord = JSON.parse(
    await fs.readFile(path.join(cpDir, 'manifest.json'), 'utf-8')
  );

  // Load checkpoint state
  const snapshotState: PipelineState = JSON.parse(
    await fs.readFile(path.join(cpDir, 'state-snapshot.json'), 'utf-8')
  );

  // Verify artifact integrity
  const artifactHash = await computeFileHash(path.join(cpDir, 'artifact.html'));
  if (artifactHash !== manifest.artifactHash) {
    throw new Error(`Checkpoint ${checkpointId} artifact integrity check failed. Checkpoint may be corrupted.`);
  }

  // Restore artifact
  await fs.copyFile(
    path.join(cpDir, 'artifact.html'),
    path.join(outputDir, snapshotState.currentArtifactPath)
  );

  // Restore conviction layer
  const convictionSrc = path.join(cpDir, 'conviction-layer.md');
  if (await fileExists(convictionSrc)) {
    await fs.copyFile(convictionSrc, path.join(outputDir, snapshotState.convictionLayerPath));
  }

  // Restore discovery log
  const discoverySrc = path.join(cpDir, 'discovery-log.md');
  if (await fileExists(discoverySrc)) {
    await fs.copyFile(discoverySrc, path.join(outputDir, snapshotState.discoveryLogPath));
  }

  // Update state to resume from checkpoint
  snapshotState.inFlightPass = null;
  snapshotState.currentPhase = manifest.atPACycle > 0 ? 'pa-hardening' : 'corpus-integration';
  snapshotState.phaseReason = null;

  // Append revert record to error history
  snapshotState.errorHistory.push({
    timestamp: new Date().toISOString(),
    context: `revert-to-${checkpointId}`,
    category: 'unknown',
    message: `Pipeline reverted to checkpoint ${checkpointId} (pass ${manifest.atPassNumber}, PA cycle ${manifest.atPACycle})`,
    recovered: true,
    recoveredAtAttempt: null,
    diagnostics: `Previous cost: $${manifest.costAtCheckpoint.toFixed(2)}`,
  });

  // Persist reverted state
  await saveState(outputDir, snapshotState);

  return snapshotState;
}
```

### 5.5 Listing Checkpoints

```typescript
/**
 * List all available checkpoints with their quality metrics.
 * Used by the CLI for the user to choose a revert target.
 */
async function listCheckpoints(outputDir: string): Promise<{
  id: string;
  createdAt: string;
  atPass: number;
  atPACycle: number;
  cost: number;
  paScore: number | null;
  validationFailures: number;
}[]> {
  const state = await loadState(outputDir);
  if (!state) return [];

  return state.checkpoints.map(cp => ({
    id: cp.id,
    createdAt: cp.createdAt,
    atPass: cp.atPassNumber,
    atPACycle: cp.atPACycle,
    cost: cp.costAtCheckpoint,
    paScore: cp.qualitySnapshot.lastPAScore,
    validationFailures: cp.qualitySnapshot.validationFailureCount,
  }));
}
```

---

## 6. Artifact Versioning

Every intermediate artifact is preserved. Nothing is ever deleted during a pipeline run.

### 6.1 Directory Structure

```
{outputDir}/
  artifact.html                    # The live artifact (modified by builders)
  _orchestrator/
    state.json                     # Pipeline state (atomic writes)
    conviction-layer.md            # Accumulated conviction (append-only)
    discovery-log.md               # Accumulated discoveries (append-only)
    logs/
      orchestrator.log             # Human-readable log
      decisions.jsonl              # Decision log
      errors.jsonl                 # Error log
      cost.jsonl                   # Cost log
      quality.jsonl                # Quality log
      passes.jsonl                 # Pass summary log
    passes/
      pass-001/
        prompt.md                  # Full prompt sent to claude -p
        raw-output.txt             # Full output from claude -p
        artifact-backup.html       # Artifact BEFORE this pass (builder only)
      pass-002/
        prompt.md
        raw-output.txt
      ...
      pass-056/
        prompt.md
        raw-output.txt
        artifact-backup.html
    screenshots/
      cycle-1/
        full-1440x900.png
        viewport-1440x900.png
        scroll-1440x900-step1.png
        scroll-1440x900-step2.png
        ...
        full-768x1024.png
        viewport-768x1024.png
        scroll-768x1024-step1.png
        ...
        auditor-A-report.md
        auditor-B-report.md
        auditor-C-report.md
        weaver-synthesis.md
        artifact-before-refine.html
      cycle-2/
        ...
    checkpoints/
      cp-S1/
        state-snapshot.json
        artifact.html
        conviction-layer.md
        discovery-log.md
        manifest.json
      cp-S2/
        ...
      cp-PA-1/
        ...
    archives/
      run-{uuid}-{timestamp}/      # Archived state from previous runs
        state.json
        logs/
        ...
```

### 6.2 Naming Conventions

| Artifact | Naming Pattern | Example |
|----------|---------------|---------|
| Pass directory | `pass-{NNN}` (zero-padded to 3 digits) | `pass-001`, `pass-056` |
| Prompt file | `prompt.md` | (fixed name within pass dir) |
| Raw output | `raw-output.txt` | (fixed name within pass dir) |
| Failed raw output | `raw-output-FAILED.txt` | (only if pass failed) |
| Artifact backup | `artifact-backup.html` | (fixed name within pass dir) |
| Screenshots | `{type}-{width}x{height}[-step{N}].png` | `full-1440x900.png`, `scroll-768x1024-step3.png` |
| PA reports | `auditor-{letter}-report.md` | `auditor-A-report.md` |
| Weaver synthesis | `weaver-synthesis.md` | (fixed name) |
| Pre-refine backup | `artifact-before-refine.html` | (fixed name within cycle dir) |
| Checkpoint dir | `cp-{id}` | `cp-S3`, `cp-PA-2` |

### 6.3 Disk Space Estimation

Per pass:
- Prompt: ~150-200KB (embedded files + artifact + corpus)
- Raw output (builder): ~80-120KB (full HTML artifact + conviction + discovery)
- Raw output (verifier): ~5-15KB (observations only)
- Artifact backup: ~80-100KB (copy of current artifact)
- **Per-pass average: ~300KB**

Per PA cycle:
- Screenshots: ~20-40 per cycle * ~500KB each = ~10-20MB
- Auditor reports: 3 * ~10KB = ~30KB
- Weaver synthesis: ~15KB
- Artifact backup: ~100KB
- **Per-cycle average: ~15MB**

Total estimate:
- 56 corpus passes * 300KB = ~17MB
- 3-6 PA cycles * 15MB = ~45-90MB
- Checkpoints (7 subset + 3-6 PA) * ~500KB = ~5MB
- Logs: ~2MB
- **Total: ~70-115MB**

This is very manageable. No intermediate deletion is needed.

---

## 7. Real-Time Terminal Reporting

### 7.1 Progress Display

The orchestrator renders a live progress display to the terminal, updated after every pass. This uses ANSI escape codes for cursor positioning and colors.

```
╔══════════════════════════════════════════════════════════════════════╗
║  MULTI-PASS CORPUS INTEGRATION PIPELINE                            ║
║  Run: a1b2c3d4  │  Started: 2026-02-28 14:23 UTC                  ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Phase: CORPUS INTEGRATION                                         ║
║  Progress: ████████████████████░░░░░░░░░░░░░░░░░░░░  35/56 (62%)  ║
║  Subset:   S5 (Grammar + Compositional Rules)     Pass: 3/8        ║
║  Rotation: A (Base ordering)                      Role: Builder    ║
║                                                                    ║
║  ┌─ Current Pass ────────────────────────────────────────────────┐  ║
║  │  Pass 35/56 │ S5 Rotation A Builder                          │  ║
║  │  Status: Running... (2m 14s elapsed)                         │  ║
║  │  Files: Mechanisms → Rules → Combinations → Borders → Sem.   │  ║
║  └──────────────────────────────────────────────────────────────┘  ║
║                                                                    ║
║  ┌─ Timing ──────────────────────────────────────────────────────┐  ║
║  │  Elapsed:    4h 23m          Avg/pass: 4m 32s                │  ║
║  │  Remaining:  ~3h 10m (est)   Avg/subset: 36m 18s             │  ║
║  └──────────────────────────────────────────────────────────────┘  ║
║                                                                    ║
║  ┌─ Cost ────────────────────────────────────────────────────────┐  ║
║  │  Total: $87.45               Budget: $350.00 (25% used)      │  ║
║  │  Builder: $62.30  Verifier: $25.15  PA: $0.00                │  ║
║  │  Avg/pass: $2.50             Est. total: $140 (projected)    │  ║
║  └──────────────────────────────────────────────────────────────┘  ║
║                                                                    ║
║  ┌─ Quality ─────────────────────────────────────────────────────┐  ║
║  │  Validation:  34/34 passed   0 warnings                      │  ║
║  │  Conviction:  31 entries     Discovery: 28 entries            │  ║
║  │  No-modify:   2 passes       Retries: 1                      │  ║
║  └──────────────────────────────────────────────────────────────┘  ║
║                                                                    ║
║  ┌─ Subset Progress ─────────────────────────────────────────────┐  ║
║  │  S1 ████████ done  │  S2 ████████ done  │  S3 ████████ done  │  ║
║  │  S4 ████████ done  │  S5 ███░░░░░ 3/8   │  S6 ░░░░░░░░ —    │  ║
║  │  S7 ░░░░░░░░ —     │                                         │  ║
║  └──────────────────────────────────────────────────────────────┘  ║
║                                                                    ║
║  Last 3 passes:                                                    ║
║    33: S5/1A Builder  166s  $1.18  PASS                            ║
║    34: S5/2A Verifier  42s  $0.87  PASS                            ║
║    35: S5/3A Builder  ...running...                                ║
║                                                                    ║
╚══════════════════════════════════════════════════════════════════════╝
```

### 7.2 PA Hardening Progress Display

When the pipeline transitions to PA hardening, the display changes:

```
╔══════════════════════════════════════════════════════════════════════╗
║  Phase: PA HARDENING                                               ║
║  Cycle: 2/6            PA-05 Score: 2.5 → 3.0 (target: 3.5)       ║
║                                                                    ║
║  Score trend:  ●─────●─────○ ─ ─ ─ ─ ─ ─                          ║
║               2.5   3.0  3.5                                       ║
║                                                                    ║
║  Cycle 2:  Screenshots ✓  Auditors ✓  Weaver ✓  Refine ▶          ║
║  Auditor scores:  A: 2.5  B: 3.0  C: 3.5                          ║
║  Weaver PA-05: 3.0/4                                               ║
╚══════════════════════════════════════════════════════════════════════╝
```

### 7.3 Time Estimation

```typescript
/**
 * Estimate remaining time based on completed passes.
 *
 * Uses a weighted moving average of the last 8 pass durations
 * (one full subset), with recent passes weighted more heavily.
 * This adapts to changing pass duration patterns (e.g., later subsets
 * may take longer because the artifact is larger).
 *
 * Returns null if fewer than 3 passes are completed (insufficient data).
 */
function estimateRemainingTime(state: PipelineState): number | null {
  const records = Object.values(state.passRecords) as PassRecord[];
  if (records.length < 3) return null;

  // Use last 8 passes (or all if fewer)
  const recent = records
    .sort((a, b) => b.passNumber - a.passNumber)
    .slice(0, 8);

  // Weighted average: most recent pass has weight 8, oldest has weight 1
  let weightedSum = 0;
  let weightTotal = 0;
  for (let i = 0; i < recent.length; i++) {
    const weight = recent.length - i;
    weightedSum += recent[i].durationMs * weight;
    weightTotal += weight;
  }
  const avgDuration = weightedSum / weightTotal;

  const remainingPasses = state.totalCorpusPasses - state.lastCompletedCorpusPass;
  const estimatedCorpusMs = remainingPasses * avgDuration;

  // Estimate PA hardening time (rough: 4 passes per cycle, ~3 cycles average)
  const estimatedPACycles = Math.max(0, state.maxPACycles - state.completedPACycles);
  const estimatedPAMs = estimatedPACycles * 4 * avgDuration;

  return estimatedCorpusMs + estimatedPAMs;
}

/**
 * Format milliseconds as human-readable duration.
 */
function formatDuration(ms: number): string {
  const hours = Math.floor(ms / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}
```

### 7.4 Cost Projection

```typescript
/**
 * Project total pipeline cost based on current spending rate.
 *
 * Uses the cost-per-pass average from completed passes,
 * then multiplies by remaining passes (corpus + estimated PA).
 */
function projectTotalCost(state: PipelineState): number {
  const completedPasses = Object.keys(state.passRecords).length;
  if (completedPasses === 0) return 0;

  const avgCostPerPass = state.cost.totalEstimatedCostUsd / completedPasses;
  const remainingCorpusPasses = state.totalCorpusPasses - state.lastCompletedCorpusPass;

  // Estimate PA passes: 5 per cycle (3 auditors + 1 weaver + 1 refine), ~3 cycles
  const estimatedRemainingPACycles = Math.max(0, state.maxPACycles - state.completedPACycles);
  const estimatedPAPasses = estimatedRemainingPACycles * 5;

  return state.cost.totalEstimatedCostUsd +
    (remainingCorpusPasses + estimatedPAPasses) * avgCostPerPass;
}
```

### 7.5 Terminal Rendering

```typescript
/**
 * Render the progress display.
 *
 * Uses ANSI escape codes:
 *   \x1b[2J      - Clear screen
 *   \x1b[H       - Move cursor to top-left
 *   \x1b[32m     - Green text
 *   \x1b[33m     - Yellow text
 *   \x1b[31m     - Red text
 *   \x1b[0m      - Reset
 *
 * Called after every pass completes and periodically during pass execution
 * (via a setInterval timer, every 10 seconds, to update elapsed time).
 */
function renderProgress(state: PipelineState, currentPassStatus?: {
  passNumber: number;
  description: string;
  startedAt: Date;
}): void {
  // Only render if stdout is a TTY (not piped to a file)
  if (!process.stdout.isTTY) return;

  const lines: string[] = [];
  const width = Math.min(process.stdout.columns || 70, 70);

  // Header
  lines.push('='.repeat(width));
  lines.push(`  MULTI-PASS CORPUS INTEGRATION PIPELINE`);
  lines.push(`  Run: ${state.runId.slice(0, 8)}  |  Started: ${formatTimestamp(state.startedAt)}`);
  lines.push('='.repeat(width));
  lines.push('');

  // Phase and progress
  lines.push(`  Phase: ${state.currentPhase.toUpperCase()}`);
  const pct = Math.round((state.lastCompletedCorpusPass / state.totalCorpusPasses) * 100);
  const barLength = 40;
  const filled = Math.round(barLength * pct / 100);
  const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(barLength - filled);
  lines.push(`  Progress: ${bar}  ${state.lastCompletedCorpusPass}/${state.totalCorpusPasses} (${pct}%)`);

  if (state.currentSubsetId) {
    lines.push(`  Subset: ${state.currentSubsetId}`);
  }
  lines.push('');

  // Current pass (if running)
  if (currentPassStatus) {
    const elapsed = Date.now() - currentPassStatus.startedAt.getTime();
    lines.push(`  Current: Pass ${currentPassStatus.passNumber} | ${currentPassStatus.description}`);
    lines.push(`  Status: Running... (${formatDuration(elapsed)} elapsed)`);
    lines.push('');
  }

  // Timing
  const totalElapsed = Date.now() - new Date(state.startedAt).getTime();
  const completedPasses = Object.keys(state.passRecords).length;
  const avgPerPass = completedPasses > 0 ? totalElapsed / completedPasses : 0;
  const remaining = estimateRemainingTime(state);

  lines.push(`  Timing:`);
  lines.push(`    Elapsed: ${formatDuration(totalElapsed)}    Avg/pass: ${formatDuration(avgPerPass)}`);
  if (remaining !== null) {
    lines.push(`    Remaining: ~${formatDuration(remaining)} (est)`);
  }
  lines.push('');

  // Cost
  const projected = projectTotalCost(state);
  lines.push(`  Cost:`);
  lines.push(`    Total: $${state.cost.totalEstimatedCostUsd.toFixed(2)}    Budget: $${state.cost.budgetHardCapUsd.toFixed(2)} (${Math.round(state.cost.totalEstimatedCostUsd / state.cost.budgetHardCapUsd * 100)}% used)`);
  lines.push(`    Projected total: $${projected.toFixed(0)}`);
  lines.push('');

  // Quality
  const validationFailures = Object.values(state.passRecords)
    .filter(r => !(r as PassRecord).validationPassed).length;
  const retries = state.errorHistory.filter(e => e.recovered).length;
  lines.push(`  Quality:`);
  lines.push(`    Validation: ${completedPasses - validationFailures}/${completedPasses} passed    Retries: ${retries}`);
  lines.push(`    Conviction: ${state.convictionEntryCount} entries    Discovery: ${state.discoveryEntryCount} entries`);

  if (state.lastPAScore !== null) {
    lines.push(`    PA-05: ${state.lastPAScore.toFixed(1)}/4 (target: ${state.paScoreThreshold})`);
  }
  lines.push('');
  lines.push('='.repeat(width));

  // Render
  process.stdout.write('\x1b[2J\x1b[H'); // Clear and move to top
  process.stdout.write(lines.join('\n') + '\n');
}
```

### 7.6 Progress Timer

```typescript
/**
 * Start a periodic progress display update during pass execution.
 * Updates every 10 seconds to show elapsed time for the current pass.
 * Returns a cleanup function to stop the timer.
 */
function startProgressTimer(state: PipelineState, pass: PassDefinition): () => void {
  const startedAt = new Date();
  const timer = setInterval(() => {
    renderProgress(state, {
      passNumber: pass.globalPassNumber,
      description: pass.description,
      startedAt,
    });
  }, 10_000);

  return () => clearInterval(timer);
}
```

---

## 8. Integration: How These Systems Work Together

### 8.1 The Pass Execution Lifecycle with All Systems

```
1. BEFORE PASS EXECUTION:
   a. Set state.inFlightPass = { passNumber, startedAt, role, subset }
   b. Save state (atomic write)
   c. Start progress timer
   d. Backup artifact (builder passes only)
   e. Log decision: "execute-pass"

2. DURING PASS EXECUTION:
   a. Construct prompt
   b. Write prompt to disk
   c. Invoke claude -p with retry logic
   d. On transient error: log to errors.jsonl, retry with backoff
   e. On rate limit: log, switch to extended backoff
   f. Progress timer updates display every 10s

3. AFTER PASS EXECUTION:
   a. Stop progress timer
   b. Save raw output to disk
   c. Log to passes.jsonl
   d. Validate output → log to quality.jsonl
   e. Extract conviction/discovery → append to accumulation files
   f. Update artifact (builder passes only) → compute new hash
   g. Record pass in state.passRecords
   h. Log to cost.jsonl
   i. Update cost tracker → check budget thresholds
   j. Clear state.inFlightPass = null
   k. Update state.lastCompletedCorpusPass
   l. Save state (atomic write)
   m. Update progress display
   n. If last pass of subset: create checkpoint
   o. If budget warning: log warning
   p. If budget exceeded: pause pipeline
```

### 8.2 The Resume Lifecycle

```
1. Load state.json
2. Verify config hash matches
3. Check for in-flight pass (crash recovery)
4. Verify artifact integrity (hash comparison)
5. Restore from backup if needed
6. Skip already-completed passes
7. Continue from next pass
8. All logs are appended to (not overwritten)
9. Cost tracking continues from cumulative totals
10. Checkpoints created at each new subset boundary
```

### 8.3 User Interaction Points

The pipeline is designed for MINIMAL user interaction during the 12-20 hour run, but there are defined interaction points:

1. **Between subsets**: The progress display shows the checkpoint was created. The user CAN Ctrl+C here and resume later. State is saved.

2. **Budget warning**: The terminal displays a prominent warning. The user can decide to continue or Ctrl+C.

3. **Budget exceeded (hard cap)**: The pipeline pauses automatically. The user must update the budget in config and restart.

4. **PA hardening review**: After each PA cycle, the PA score is displayed. The user can Ctrl+C to review artifacts before continuing.

5. **Consecutive failures**: If the same pass fails 3 times across resumes, the pipeline pauses with diagnostics. The user must investigate.

### 8.4 Ctrl+C Handling (Graceful Shutdown)

```typescript
/**
 * Handle SIGINT (Ctrl+C) gracefully.
 *
 * On first Ctrl+C:
 *   - If a pass is in progress: let it complete, then pause.
 *   - If between passes: pause immediately.
 *   - Save state with currentPhase = 'paused'.
 *
 * On second Ctrl+C (within 5 seconds of first):
 *   - Force exit immediately.
 *   - State was saved at last pass completion, so resume is still possible.
 *   - inFlightPass will be non-null if a pass was running, triggering
 *     the partial failure recovery on next start.
 */
let shutdownRequested = false;

process.on('SIGINT', () => {
  if (shutdownRequested) {
    // Second Ctrl+C: force exit
    console.log('\nForce exit. State saved at last completed pass.');
    process.exit(1);
  }

  shutdownRequested = true;
  console.log('\nGraceful shutdown requested. Finishing current pass...');
  console.log('Press Ctrl+C again to force exit.');

  // The main loop checks shutdownRequested between passes
});

// In the main loop:
async function runCorpusIntegration(/* ... */) {
  for (const pass of allPasses) {
    // ... execute pass ...

    if (shutdownRequested) {
      state.currentPhase = 'paused';
      state.phaseReason = 'user-requested';
      await createCheckpoint(state, `cp-PAUSE-${Date.now()}`, config.outputDir);
      await saveState(config.outputDir, state);
      log.info('Pipeline paused by user. Resume with the same configuration.');
      process.exit(0);
    }
  }
}
```

---

## 9. CLI Interface for State Operations

The orchestrator exposes a CLI for state management operations:

```
$ node orchestrator.js run --config ./config.json
  # Start or resume the pipeline

$ node orchestrator.js status --output-dir ./builds/2026-02-28
  # Print current pipeline status (reads state.json)

$ node orchestrator.js checkpoints --output-dir ./builds/2026-02-28
  # List all checkpoints with quality metrics

$ node orchestrator.js revert --checkpoint cp-S3 --output-dir ./builds/2026-02-28
  # Revert to checkpoint S3

$ node orchestrator.js resume --output-dir ./builds/2026-02-28
  # Resume a paused pipeline

$ node orchestrator.js cost-report --output-dir ./builds/2026-02-28
  # Print detailed cost breakdown from cost.jsonl

$ node orchestrator.js quality-report --output-dir ./builds/2026-02-28
  # Print quality trend from quality.jsonl
```

### 9.1 Status Command Output

```
Pipeline Status
═══════════════
Run ID:    a1b2c3d4-e5f6-7890-abcd-1234567890ab
Phase:     PAUSED (user-requested)
Started:   2026-02-28 14:23 UTC
Last save: 2026-02-28 22:15 UTC (7h 52m ago)

Progress:  40/56 corpus passes (71%)  +  0 PA cycles
Subset:    S5 completed, S6 pending
Cost:      $112.45 / $350.00 (32%)

Last 3 passes:
  38: S5/6B Builder   189s  $1.45  PASS
  39: S5/7C Builder   156s  $1.22  PASS
  40: S5/8C Verifier   48s  $0.92  PASS  ← subset complete, checkpoint created

Checkpoints: 5 (cp-S1 through cp-S5)
Errors:      2 recovered, 0 unrecovered
```

---

## 10. Invariants and Guarantees

These properties MUST hold at all times. If any is violated, the orchestrator has a bug.

1. **State file consistency**: The state file on disk is always valid JSON representing a complete `PipelineState`.

2. **Artifact integrity**: `state.currentArtifactHash` matches the SHA-256 hash of the file at `state.currentArtifactPath`, EXCEPT during the window between artifact write and state save (which is a few milliseconds).

3. **Log append-only**: No log file is ever truncated, overwritten, or deleted during a run.

4. **Pass monotonicity**: `state.lastCompletedCorpusPass` only increases.

5. **Checkpoint availability**: A checkpoint exists for every completed subset and PA cycle.

6. **Backup completeness**: For every builder pass N, there exists a backup at `pass-{NNN}/artifact-backup.html` containing the artifact state from BEFORE pass N.

7. **Cost accuracy**: `state.cost.totalEstimatedCostUsd` is the sum of all individual `passRecord.tokens.estimatedCostUsd` values plus all PA cycle costs.

8. **Resume idempotency**: Running the orchestrator twice with the same config and output directory produces the same result as running it once (completed passes are skipped, state is resumed).

9. **Graceful degradation**: Screenshot failure does not halt the pipeline. Missing conviction/discovery entries do not halt the pipeline. Validation warnings do not halt the pipeline.

10. **No silent data loss**: Every `claude -p` output is saved to disk (even failed ones, as `raw-output-FAILED.txt`). No output is ever discarded without being persisted.
