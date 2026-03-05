# MASTER SYNTHESIS: Deep Build Plan Audit

**Synthesizer:** master-synthesizer (Opus 4.6)
**Date:** 2026-02-28
**Sources:** types-auditor report (472 lines), plan (`sorted-finding-honey.md`, 963 lines), all 9 canonical docs in `_deterministic-orchestration/` (11,253 lines total)
**Note:** Several auditor tasks were still in-progress at synthesis time. This document synthesizes the completed types audit + independent cross-referencing by the synthesizer against all canonical sources. When additional audit reports arrive (structure, prompts, fresh-eyes, pipeline, topology, checklist, gaps, etc.), this document should be updated with their findings.

---

## 1. BLOCKING Findings (must fix before exiting plan mode)

These issues will cause implementation failure if not resolved. Workers cannot write correct code with these ambiguities.

### B-01: PACycleRecord type UNDEFINED in plan

**Sources:** types-auditor (Section 7), independent verification
**Impact:** `PipelineState.paCycleRecords: PACycleRecord[]` references a type that is never defined in the plan. Doc 08 defines it with 12 fields including 3 complex sub-objects (auditors array, weaver object, refine object). Doc 05 defines a DIFFERENT `PACycleRecord` with different fields (pa05Score, tier5Score, verdict, decision, gateResultPath, screenshotDir, auditorReportPaths, etc.).
**Fix:** Add complete PACycleRecord definition to plan's State Schema section. Must reconcile doc 08 and doc 05 versions — they differ significantly:
- Doc 08: `paScore: number | null`, `metThreshold: boolean`
- Doc 05: `pa05Score: number`, `tier5Score: number`, `verdict`, `decision`, `cost` sub-object
- Recommendation: adopt doc 05 version (richer, includes tier5 which is required for SHIP routing)

### B-02: ErrorRecord type UNDEFINED in plan

**Sources:** types-auditor (Section 8), independent verification
**Impact:** `PipelineState.errorHistory: ErrorRecord[]` references a type never defined. Doc 08 Section 1.5 defines it with fields: `globalPassNumber`, `timestamp`, `category` (ErrorCategory), `message`, `stack`, `recovered`, `retryAttempt`.
**Fix:** Add ErrorRecord interface to plan:
```typescript
interface ErrorRecord {
  globalPassNumber: number | null; // null for non-pass errors
  timestamp: string;
  category: ErrorCategory;
  message: string;
  stack?: string;
  recovered: boolean;
  retryAttempt: number;
}
```

### B-03: `currentSubsetId` type mismatch — string vs number EVERYWHERE

**Sources:** types-auditor (PipelineState #13, PassRecord #3, ConvictionEntry)
**Impact:** Doc 08 uses `string` ("S1"-"S7" or null). Plan uses `number` (1-7). This propagates to every type that references subsetId: PipelineState, PassRecord, ConvictionEntry, CostTracker.perSubset. Workers implementing different modules will use different types and integration will fail at compile time.
**Fix:** Standardize on `string` ("S1"-"S7") per doc 08. Rationale: JSON keys are strings, subset IDs appear in log messages and file paths as "S1" not "1", and doc 03 uses "S1"-"S7" throughout.

### B-04: PA hardening config contradicts between plan and doc 05

**Sources:** independent cross-reference
**Impact:** The plan says:
- `maxPACycles: 3` (constants.ts), `paThreshold: 3.5`
- Routing: SHIP if `pa05 >= 3.5 AND tier5 >= 6/8`, REFINE if `pa05 >= 2.0`, RETHINK if `pa05 < 2.0 after 2+ cycles`
- Stall: 2 consecutive no-improvement → force SHIP

Doc 05 says:
- `minCycles: 2`, `maxCycles: 6`, `releaseThreshold: 3.5`, `rethinkThreshold: 2.5`, `maxStalledCycles: 2`
- RELEASE: pa05 >= 3.5 AND zero soul violations AND cycle >= minCycles AND (builder_ideas == 0 OR cycle >= 2)
- STALLED: no improvement for maxStalledCycles → force RELEASE or ABORT
- ABORT: pa05 < 2.5 after cycle >= 3
- MAX REACHED: cycle == 6 → force RELEASE

Key contradictions:
| Parameter | Plan | Doc 05 | Which? |
|-----------|------|--------|--------|
| Max PA cycles | 3 | 6 | MUST DECIDE |
| Min PA cycles | none | 2 | Doc 05 has one, plan doesn't |
| RETHINK threshold | 2.0 | 2.5 | MUST DECIDE |
| RETHINK trigger | after 2+ cycles | after cycle >= 3 | MUST DECIDE |
| Soul violation check | absent | required for RELEASE | Doc 05 |
| ABORT vs RETHINK | "RETHINK" only | RETHINK + ABORT distinct | Doc 05 |

**Fix:** Add PAHardeningConfig interface to plan with all 5 parameters. Adopt doc 05 values since they represent more mature thinking. Update phase-router.ts description to match.

### B-05: Rotation formula uses wrong divisor

**Sources:** independent cross-reference
**Impact:** Plan says: `shift = Math.floor(files.length * rotationIndex / 3)`. Doc 02 says: `Math.floor(fileCount * N/5)` where N is rotation-specific. These produce different results:
- 5 files, rotation B (index 1): Plan = `Math.floor(5*1/3)` = 1. Doc 02 = `Math.floor(5*2/5)` = 2.
- Plan's formula gives shifts [0, 1, 3] for 5 files. Doc 02's hardcodes [0, 2, 4] for 5 files.
- Plan shifts by 1/3 of array each rotation. Doc 02 shifts by ~2/5 each rotation.
**Fix:** Decide which formula is canonical. The plan says "Use formula" in K08 resolution but uses a different formula than doc 02. Recommendation: use plan's formula (simpler, handles variable sizes) but verify it produces adequate separation for all subset sizes (4-6 files).

### B-06: Conviction storage architecture — fundamentally different between plan and doc 08

**Sources:** types-auditor (PipelineState #25-28), independent verification
**Impact:** Two incompatible architectures:
- **Doc 08:** File-based. `convictionLayerPath: string` and `discoveryLogPath: string`. Append-only files with structured markers. Uncapped growth. Doc 06 discusses growth as feature (5,000-7,500 tokens by pass 56) and risk.
- **Plan:** In-state array. `convictionLayer: ConvictionEntry[]` and `discoveryLog: string[]`. Capped at 10 entries, FIFO merge.

These are fundamentally different architectures. The cap at 10 entries means that by pass 56, only the most recent 10 entries survive — 46 entries are discarded. Doc 06 explicitly flags conviction growth as a design decision point, but the plan resolves it silently with a cap. Doc 08 treats the conviction file as append-only and references it by path.

**Fix:** The plan's architecture (in-state, capped) is actually more practical for `claude -p` prompts (you need the actual text, not a file path). But:
1. Document the choice explicitly: "We diverge from doc 08's file-based storage"
2. Justify the cap: "10 entries × ~130 words = ~1,300 tokens, within prompt budget"
3. Add the FIFO merge strategy: what determines which entries survive?
4. Address the information loss: the plan's `convictionEntryCount` tracks total added, but 82% of entries are discarded by pass 56

---

## 2. HIGH Findings (must fix before Wave 0)

### H-01: Resume algorithm step ordering is wrong

**Sources:** types-auditor (Section 6), independent verification
**Impact:** Plan's 6-step resume:
1. Read state.json
2. Check schemaVersion
3. Check configHash
4. Verify artifact hash ← WRONG ORDER
5. Check inFlightPass ← WRONG ORDER
6. Resume from totalCorpusPasses + 1

Doc 08's algorithm checks inFlightPass (step 4) BEFORE artifact hash (step 5b). This matters because:
- If a builder crashed mid-pass, the artifact may be partially modified
- You must detect the in-flight pass FIRST to know whether to restore from backup
- Checking hash before inFlightPass means you detect "corruption" that is actually a partially-applied pass

**Fix:** Reorder to: 1→2→3→5→4→6. Also add:
- Builder vs verifier distinction (verifier crash = safe retry, builder crash = check artifact)
- Backup restoration on hash mismatch during crash recovery
- Phase-specific resume (plan only handles corpus-integration, not pa-hardening, paused, or failed)

### H-02: `passRecords` structural mismatch — Record vs Array

**Sources:** types-auditor (PipelineState #19-20)
**Impact:** Doc 08 uses `Record<string, PassRecord>` (O(1) lookup by pass number). Plan uses `PassRecord[]` (array, requires linear scan). The resume algorithm needs to look up specific passes. With 56+ passes, this matters for correctness more than performance — array indexing by position vs lookup by key are different semantics.
**Fix:** Use `Record<string, PassRecord>` per doc 08. Same for `paCycleRecords`.

### H-03: 7 missing path fields in PassRecord

**Sources:** types-auditor (Section 2)
**Impact:** Plan's PassRecord omits: `description`, `durationMs`, `promptPath`, `rawOutputPath`, `backupPath`, `artifactPath`, `validationDetails`. The 4 path fields are critical — they enable:
- Forensic replay of any pass (what prompt was sent, what was returned)
- Artifact history navigation (which backup corresponds to which pass)
- Validation result inspection (what checks passed/failed per pass)
Without these, a bad artifact at pass 37 cannot be diagnosed.
**Fix:** Add all 7 fields to PassRecord. The paths are relative to outputDir.

### H-04: 4 missing ErrorCategory values with recovery strategies

**Sources:** types-auditor (Section 4)
**Impact:** Plan omits 4 error categories that doc 08 handles with specific recovery:
- `output-truncated` — doc 08 has entire recovery function (Section 4.3.3)
- `output-empty` — builder returned nothing
- `output-no-modification` — builder returned artifact unchanged (soft failure, log + continue)
- `claude-p-spawn-failed` — process couldn't start (PATH, permissions)
**Fix:** Add these 4 categories. Map to plan's naming convention: `output-truncated`, `output-empty`, `output-no-modification`, `spawn-failed`.

### H-05: `status` field redundant with `currentPhase`

**Sources:** types-auditor (PipelineState #36)
**Impact:** Plan has both:
- `currentPhase: 'corpus-integration' | 'pa-hardening' | 'paused' | 'completed' | 'failed'`
- `status: 'running' | 'paused' | 'completed' | 'failed'`

These can drift. `currentPhase` already encodes paused/completed/failed. `status` adds 'running' which maps to corpus-integration or pa-hardening. Two sources of truth for the same information.
**Fix:** Remove `status`. If "running" state is needed, derive it: `isRunning = currentPhase === 'corpus-integration' || currentPhase === 'pa-hardening'`.

### H-06: Plan says "9 templates" but doc 07 only has 5 — 4 must be created from scratch

**Sources:** independent cross-reference, plan line ~889-912
**Impact:** Plan correctly identifies this gap in GAP-H01, but the Wave 1 `prompt-architect` agent description says "Write all 9 prompt templates" without distinguishing which 4 are FROM SCRATCH vs which 5 are FROM DOC 07. The from-scratch templates (retrospective, tc-derivation, content-analysis, world-description) have no reference material — the architect must invent them.
**Fix:** Wave 1 prompt-architect prompt should explicitly flag: "Templates 1-5 have source material in doc 07. Templates 6-9 are NEW — you must create them from the plan's Pass-to-Pass Anatomy section and the README ideology."

### H-07: Plan's `completedAt` and `phaseReason` use `?` (optional) instead of `| null`

**Sources:** types-auditor (PipelineState #7, #10, #17)
**Impact:** In TypeScript, `field?: T` means the field may be absent (undefined). `field: T | null` means the field is always present but may be null. Doc 08 uses `| null` throughout. For JSON serialization, undefined fields are omitted while null fields are explicitly written. The resume algorithm checks `completedAt` to determine if the pipeline is still running — `undefined` and `null` are different checks.
**Fix:** Change all `?` optional fields to `| null` in plan's schema: `completedAt: string | null`, `phaseReason: string | null`, `lastPAScore: number | null`, `inFlightPass: { ... } | null`.

### H-08: CostTracker loses per-role token breakdown

**Sources:** types-auditor (CostTracker #6-8)
**Impact:** Doc 08's CostTracker has `byRole: Record<string, RoleCost>` where RoleCost includes inputTokens, outputTokens, costUsd, passCount. Plan's CostTracker has `perRole: Record<string, number>` — just total cost USD per role. This loses the ability to answer: "How many tokens did builder passes consume vs PA auditor passes?" Also missing: `byPACycle` breakdown.
**Fix:** Add RoleCost sub-type. Change `perRole` and `perSubset` from `Record<_, number>` to `Record<_, RoleCost>`. Add `byPACycle`.

### H-09: ConvictionEntry has 6 dimensions but PROTECTION LIST is unrepresented

**Sources:** types-auditor (Section 5)
**Impact:** Doc 07's builder reflection has 5 sections: CONVICTION, ALTERNATIVES, DISCOVERIES, UNRESOLVED, PROTECTION LIST. Plan's ConvictionEntry maps 6 dimensions (built, trying, rejected, surprised, wanted, unresolved) — splitting CONVICTION into 2 and ALTERNATIVES into 2. But PROTECTION LIST ("3-5 things preserved and WHY") has NO dimension. Protection tracking is critical: it prevents later passes from destroying earlier work.
**Fix:** Either add a 7th dimension `'protected'` or document that PROTECTION LIST is handled differently (e.g., embedded in verifier observations rather than conviction layer).

---

## 3. MEDIUM Findings (should fix, can defer to Wave 0)

### M-01: Rotation field type mismatch
PassRecord.rotation: doc 08 = `'A' | 'B' | 'C'` (string literal), plan = `rotationIndex: number` (0-2). Recommendation: use plan's numeric form (simpler for formula) but add human-readable mapping.

### M-02: PassRecord.role expanded without justification
Doc 08: `'builder' | 'verifier'` (2 values). Plan: adds 5 more roles (`'retrospective' | 'pa-auditor' | 'integrative-auditor' | 'weaver' | 'refine-builder'`). Doc 08 uses PACycleRecord for PA-related roles. Plan unifies into PassRecord. This is a design choice, not a bug, but should be documented.

### M-03: Token fields nested vs flat
Doc 08 nests tokens in `{ inputTokens, outputTokens, ... }` object. Plan flattens to top-level fields. Flat is simpler but loses groupability. Defer to implementation.

### M-04: `currentPhase` enum value mismatch
Doc 08: `'complete'`. Plan: `'completed'`. Pick one. Recommendation: `'completed'` (past tense, consistent with `completedAt`).

### M-05: `totalCorpusPasses` semantics ambiguity
Doc 08: total count (always 56). Plan: "0-56 completed" (progress counter). These are different: one is constant, one increments. Doc 08 uses `lastCompletedCorpusPass` as the progress counter.
Fix: rename plan's field to `completedCorpusPasses` if it's a counter, or keep as `totalCorpusPasses: 56` (constant) per doc 08.

### M-06: `checkpoints` structural mismatch
Doc 08: `CheckpointRecord[]` (full records with type, timestamp, paths). Plan: `string[]` (just paths). Doc 08 is richer and more useful for resume.

### M-07: `inFlightPass` field name mismatches
Doc 08: `{ globalPassNumber, startedAt, agentRole, subsetId }` (4 fields). Plan: `{ passNumber, startedAt, role }` (3 fields, missing subsetId). Missing subsetId means resume can't determine which subset was interrupted.

### M-08: `configHash` truncation detail
Doc 08: "SHA-256, first 16 hex chars". Plan: "SHA-256". Minor, but if doc 08 says 16 chars, the plan should match to avoid hash comparison failures between tools.

### M-09: `word limit` for ConvictionEntry undocumented in sources
Plan says "max ~130 words" per entry. Doc 07 says "2-5 sentences". Neither gives a token count. These are approximately equivalent but should be standardized.

### M-10: No stale state archival
Doc 08 resume step 2: if configHash doesn't match, ARCHIVE old state, then fresh start. Plan step 3: "reject if changed → stale state" — no archival. Old run data would be lost.

---

## 4. Cross-Auditor Patterns

### What multiple sources independently discovered

1. **subsetId type inconsistency** — types-auditor found it in 3 types, plan itself uses both forms in different sections
2. **Conviction storage architecture divergence** — types-auditor flagged it, doc 06 discusses it as a design decision, plan resolves it silently
3. **PACycleRecord undefined** — types-auditor found the missing definition, plan's checklist item B.2 says "ALL v3 fields" but the definition isn't present
4. **Resume algorithm oversimplification** — types-auditor found ordering issues, doc 08 has 6 steps with sub-steps vs plan's flat 6 steps

### What synthesizer caught beyond the types audit

1. **PA config contradiction between plan and doc 05** — the plan says max 3 PA cycles, doc 05 says max 6 with min 2. This has massive cost implications ($38-76 vs $76-152 for Phase B).
2. **Rotation formula divergence** — plan and doc 02 use different divisors (3 vs 5), producing different file orderings
3. **4 templates from scratch** — plan identifies the gap (GAP-H01) but Wave 1 agent prompt doesn't distinguish new vs existing
4. **WeaverVerdict type from doc 05** — complex structured type with pa05SubCriteria, tier5Results, emotionalArc, shipDecision. Plan references "WeaverVerdict" in Phase B routing but never defines it.
5. **PAHardeningState from doc 05** — doc 05 defines per-step state tracking within a PA cycle (currentStep, gateResults, auditorReports, etc.). Plan has no equivalent — the PA cycle is described procedurally but not as persistent state.

### Audit gaps (what NO auditor caught)

1. **AuditorReport type from doc 05** — completionManifest with per-question tracking, never referenced in plan
2. **ViewportConfig** and **ScreenshotManifest** types from doc 05 — defined there but absent from plan
3. **GateResult type** — plan mentions "gate results" in 4 places but never defines the type
4. **Interaction between budget cap and PA cycles** — if budget cap ($250) is hit mid-PA-cycle, what happens to the partial cycle's data?

---

## 5. File Triage Verdict

### _deterministic-orchestration/ — ALL 9 docs are CANONICAL (KEEP)

User confirmed this directory contains the updated architecture. All 9 files serve distinct purposes:

| Doc | File | Status | Role |
|-----|------|--------|------|
| 00 | `00-PIPELINE-DIAGRAM.md` | CANONICAL | Visual architecture reference, subset compositions |
| 01 | `01-cli-capabilities.md` | CANONICAL | All `claude -p` flags and empirical behaviors |
| 02 | `02-orchestrator-architecture.md` | CANONICAL (v2 schema SUPERSEDED by doc 08 v3) | TypeScript interfaces, execution loop, data structures |
| 03 | `03-pipeline-mapping.md` | CANONICAL | 95 corpus files with verified absolute paths |
| 04 | `04-claude-code-integration.md` | CANONICAL | Empirical testing proof of `claude -p` behavior |
| 05 | `05-pa-integration.md` | CANONICAL | Phase B PA cycle spec, PAHardeningConfig, WeaverVerdict |
| 06 | `06-adversarial-review.md` | CANONICAL | 14 risk dimensions, cost model, attention degradation |
| 07 | `07-prompt-templates.md` | CANONICAL | 5 agent role templates with variable mappings |
| 08 | `08-state-management.md` | CANONICAL (v3 schema is AUTHORITATIVE) | State schema, resume algorithm, logging, error recovery |

### Peripheral files (outside _deterministic-orchestration/)

| Directory | Status | Notes |
|-----------|--------|-------|
| `_corpus-ingestion-ARCHIVED/` | ARCHIVED | Superseded by doc 03's verified paths |
| `_relay-chain/` | SUPERSEDED | Pre-deterministic approach; adversarial review killed it |
| `_research/` | REFERENCE ONLY | Original research that fed into _deterministic-orchestration/ |
| `_window-design/` | SUPERSEDED | Multi-window design replaced by deterministic orchestrator |

### Key precedence rules

1. Doc 08 (state-management) SUPERSEDES doc 02 (orchestrator-architecture) for ALL state schema definitions
2. Doc 05 (pa-integration) is AUTHORITATIVE for Phase B types (PACycleRecord, WeaverVerdict, PAHardeningConfig)
3. Doc 03 (pipeline-mapping) is AUTHORITATIVE for corpus file paths and subset compositions
4. Doc 02 is still authoritative for execution loop logic, CorpusFile/CorpusSubset types, and non-state architecture
5. Plan is AUTHORITATIVE for cross-document contradiction resolutions (K01-K08) and gap resolutions

---

## 6. Specific Plan Edits Required

### For B-01 (PACycleRecord undefined):

**Add after the ConvictionEntry interface in State Schema v3 section (~line 421):**

```typescript
interface PACycleRecord {
  cycleNumber: number;
  startedAt: string;
  completedAt: string;
  durationMs: number;
  screenshotDir: string;
  screenshotCount: number;
  pa05Score: number | null;
  tier5Score: number | null;
  verdict: 'RELEASE' | 'POLISH' | 'IMPROVE' | 'RETHINK';
  decision: 'SHIP' | 'REFINE' | 'REBUILD' | 'ABORT';
  gateResultPath: string;
  auditorReportPaths: string[];
  integrativeReportPath: string;
  weaverReportPath: string;
  refinementPassCount: number;
  metThreshold: boolean;
  totalCycleCostUsd: number;
}
```

### For B-02 (ErrorRecord undefined):

**Add after PACycleRecord:**

```typescript
interface ErrorRecord {
  globalPassNumber: number | null;
  timestamp: string;
  category: ErrorCategory;
  message: string;
  stack?: string;
  recovered: boolean;
  retryAttempt: number;
}
```

### For B-03 (subsetId type):

**Change in PipelineState:**
```
- currentSubsetId: number;          // 1-7
+ currentSubsetId: string | null;   // "S1"-"S7" or null (between subsets)
```

**Change in PassRecord:**
```
- subsetId: number;                 // 1-7
+ subsetId: string;                 // "S1"-"S7"
```

**Change in ConvictionEntry:**
```
- subsetId: number;
+ subsetId: string;                 // "S1"-"S7"
```

**Change in CostTracker:**
```
- perSubset: Record<number, number>;
+ perSubset: Record<string, number>;  // keyed by "S1"-"S7"
```

### For B-04 (PA config contradiction):

**Add to State Schema section, after CostTracker:**

```typescript
interface PAHardeningConfig {
  minCycles: number;               // default 2 (doc 05)
  maxCycles: number;               // default 6 (doc 05)
  releaseThreshold: number;        // PA-05 score for RELEASE, default 3.5
  rethinkThreshold: number;        // PA-05 score below which RETHINK, default 2.5
  maxStalledCycles: number;        // consecutive no-improvement before force, default 2
}
```

**Update constants.ts description:**
```
- maxPACycles: 3
+ maxPACycles: 6 (doc 05 canonical — plan's "3" was underspecified)
+ minPACycles: 2
```

**Update Phase B routing in Pipeline Architecture section:**
```
- REFINE: pa05 >= 2.0
+ IMPROVE: pa05 >= 2.5 AND pa05 < 3.5
- RETHINK: pa05 < 2.0 after 2+ cycles
+ RETHINK: pa05 < 2.5 after cycle >= 3
+ ABORT: pa05 < 2.0 after cycle >= 3 (fundamental failure)
+ RELEASE requires: pa05 >= 3.5 AND zero soul violations AND cycle >= minCycles
```

### For B-05 (rotation formula):

**Update Carousel Rotation section:**
```
Rotation shift formula (handles variable subset sizes 4-6 files):
  shift = Math.floor(files.length * rotationIndex / 3)

NOTE: Doc 02 uses a different formula (Math.floor(fileCount * N/5) with N=[0,2,4]).
This plan's formula produces shifts [0, 1, 3] for 5 files (separations of 1, 2).
Doc 02's formula produces shifts [0, 2, 4] for 5 files (separations of 2, 2).
DECISION: [Plan author must choose]. Both are valid; doc 02's gives more separation.
```

### For B-06 (conviction storage):

**Add note after ConvictionEntry definition:**
```
NOTE: This diverges from doc 08, which stores conviction as an append-only FILE
(convictionLayerPath) referenced by path. This plan uses in-state typed objects
for two reasons:
1. claude -p needs the actual text in the prompt, not a file path
2. Capping at 10 entries keeps prompt tokens bounded (~1,300 max)

FIFO merge strategy: when 11th entry arrives, discard the OLDEST entry from the
SAME dimension. If no same-dimension entry exists, discard the globally oldest.
This preserves dimension diversity across the 6 creative tissue types.

Information loss acknowledgment: by pass 56, up to 46 conviction entries will have
been discarded. The convictionEntryCount field tracks total accumulated (for
forensics), while the array contains only the active 10.
```

### For H-01 (resume step ordering):

**Replace Resume Algorithm section:**
```
1. Read state.json (if absent → fresh start)
2. Check schemaVersion === 3 (if mismatch → reject, suggest migration)
3. Check configHash matches current config (if changed → archive old state → fresh start)
4. Check inFlightPass:
   a. If null → go to step 5 (clean resume)
   b. If non-null → crash recovery:
      - If role was 'verifier' → safe to retry (verifier doesn't modify artifact)
      - If role was 'builder' → check artifact integrity:
        - Compute SHA-256 of current artifact file
        - Compare with state.currentArtifactHash
        - MATCH → artifact not yet modified, safe to retry pass
        - MISMATCH → restore from most recent backup in state.artifactBackups
        - Backup also corrupt → FATAL, abort
      - Clear inFlightPass, resume from that pass number
5. Clean resume:
   a. Verify currentArtifactHash matches file on disk
      - MATCH → good
      - MISMATCH → WARN (user may have edited), update hash, continue
   b. Route by currentPhase:
      - 'corpus-integration' → resume from lastCompletedCorpusPass + 1
      - 'pa-hardening' → resume from completedPACycles + 1
      - 'paused' → wait for user signal
      - 'completed' → nothing to do
      - 'failed' → offer retry from failure point
```

### For H-07 (optional vs null):

**Change throughout State Schema:**
```
- completedAt?: string;
+ completedAt: string | null;
- phaseReason?: string;
+ phaseReason: string | null;
- lastPAScore?: number;
+ lastPAScore: number | null;
- inFlightPass?: { passNumber: number; startedAt: string; role: string };
+ inFlightPass: { passNumber: number; startedAt: string; role: string; subsetId: string } | null;
```
(Note: also adds missing `subsetId` to inFlightPass per M-07)

---

## 7. Summary Statistics

| Category | Count | Items |
|----------|-------|-------|
| BLOCKING | 6 | B-01 through B-06 |
| HIGH | 9 | H-01 through H-09 |
| MEDIUM | 10 | M-01 through M-10 |
| Total findings | 25 | |
| Types requiring definition | 5 | PACycleRecord, ErrorRecord, WeaverVerdict, PAHardeningConfig, RoleCost |
| Cross-doc contradictions found | 3 | PA config, rotation formula, conviction architecture |
| Plan edits specified | 10 | All BLOCKING + H-01 + H-07 have exact edit text |

### Priority order for fixes

1. **B-01 + B-02:** Add PACycleRecord and ErrorRecord (5 min, unlocks Wave 1 type-architect)
2. **B-03:** Standardize subsetId as string (10 min, touches 4 types)
3. **B-04:** Reconcile PA config with doc 05 (15 min, changes routing logic)
4. **H-01:** Fix resume algorithm (10 min, critical for crash recovery)
5. **H-07:** Change `?` to `| null` (5 min, prevents undefined/null bugs)
6. **B-05:** Decide rotation formula (5 min, one decision)
7. **B-06:** Document conviction architecture divergence (10 min, add note)
8. **H-02 through H-09:** Remaining HIGH items (30 min total)

**Estimated total fix time: ~90 min of plan editing before Wave 0 can begin.**

---

*This synthesis will be updated as additional audit reports arrive from in-progress auditors (structure, fresh-eyes, prompts-2, error-flow, integration-sequence, file-triage-core, spec-contradiction-hunter).*
