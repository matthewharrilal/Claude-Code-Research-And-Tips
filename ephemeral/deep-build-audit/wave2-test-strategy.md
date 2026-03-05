# Test Strategy & Coverage Audit: tools/deep-build/

**Date:** 2026-02-28
**Auditor:** Test Engineering Expert (Opus Agent)
**Scope:** Full test coverage audit of `tools/deep-build/src/` (39 source files, ~5,600 lines)

---

## 1. Current Test State

### Existing Tests
**Zero test files exist.** The `tests/` directory contains only:
- `tests/fixtures/sample-content.md` (178 lines) -- a fixture file for manual/integration testing

### Test Infrastructure
- **No test runner configured.** `package.json` has no `test` script.
- **No test framework installed.** `devDependencies` contains only `typescript`, `tsx`, and `@types/node`.
- **No test configuration files** (no `vitest.config.ts`, `jest.config.ts`, or similar).

### Assessment
Test coverage is **0%**. This is a greenfield testing opportunity.

---

## 2. Module-by-Module Testability Assessment

### Legend
- **Pure:** No side effects, no I/O. Trivially testable.
- **DI-Ready:** Uses dependency injection -- testable with mocks.
- **I/O-Bound:** Direct filesystem/network/process calls. Requires mocking.
- **Playwright-Bound:** Requires browser. Requires full integration setup.

### 2.1 Pure Functions (EASY to test)

| Module | Functions | Notes |
|--------|-----------|-------|
| `src/utils.ts` | `sha256`, `estimateTokens`, `slugify`, `formatDuration`, `computeConfigHash`, `stripTrailingPartialEscape` (private), `recoverTruncatedClaudeResponse` (private) | Zero I/O. Core utility layer. |
| `src/orchestrator/rotation.ts` | `computeRotation` | Pure rotation math. Zero I/O. |
| `src/orchestrator/phase-router.ts` | `routePhaseB`, `detectStall`, `checkBudget` | Pure routing logic. Zero I/O. |
| `src/orchestrator/conviction-manager.ts` | `addConviction`, `extractConvictionFromResponse`, `parseConvictionBlock` | Pure state transforms + text parsing. |
| `src/orchestrator/cross-subset-verifier.ts` | `shouldRunCrossSubsetVerification`, `buildCrossSubsetVerifierPrompt` | Pure (prompt is just string concatenation from state). |
| `src/validation/diff-checker.ts` | `diffArtifact`, `extractSections` (private) | Pure string comparison. |
| `src/validation/html-validator.ts` | `validateHtml` | Pure HTML string analysis. |
| `src/agents/response-handler.ts` | `parseClaudeResponse`, `extractHtml`, `extractConvictionAddition`, `extractDiscoveryLog`, `extractVerifierObservations` | Pure text parsing (uses `safeJsonParse` which is also pure). |
| `src/types/pass.ts` | `getRotationIndex` | Pure math (3 branches). |
| `src/types/state.ts` | `createInitialState` | Pure factory (constructs default state). |
| `src/config/pa-questions.ts` | `getQuestionsForAuditor` | Pure lookup. |
| `src/config/corpus.ts` | `getAllCorpusFilePaths` | Pure set aggregation. |
| `src/logging/cost-tracker.ts` | `updateCost`, `checkBudget` | Pure state mutation + threshold checks. |
| `src/instrumentation/report.ts` | `generateReport` | Pure aggregation from PipelineState. |
| `src/pa/mini-pa-spawner.ts` | `determineTrend` (private) | Pure sentiment keyword counting. |
| `src/pa/weaver-spawner.ts` | `parseWeaverVerdict` (private) | Pure JSON extraction from text. |

### 2.2 DI-Ready Functions (MEDIUM to test)

| Module | Functions | DI Interface | Notes |
|--------|-----------|-------------|-------|
| `src/orchestrator/pass-executor.ts` | `executeSinglePass` | `PassExecutorDeps` | Clean DI -- mock `assemblePrompt`, `spawnClaude`, `validateHtml`, `saveState`. Internal helpers (`recordPassFailure`, `updateCostTracker`, `archivePass`, `createErrorResponse`) are private but called by `executeSinglePass`. |
| `src/orchestrator/pipeline.ts` | `runPipeline`, `runPhase0`, `runPhaseA`, `runPhaseB` | `PipelineDeps` (extends `PassExecutorDeps`) | Full pipeline orchestrator. Mock all 13 dep functions. |
| `src/prompts/assembler.ts` | `assembleBuilderPrompt`, `assembleVerifierPrompt`, etc. | Reads template files from disk | Needs mock filesystem or temp templates. Also: `formatConvictionLayer`, `formatDiscoveryLog`, `formatPassContext` are pure helpers that can be tested directly. |

### 2.3 I/O-Bound Functions (MEDIUM to test with mocks)

| Module | Functions | I/O Type | Notes |
|--------|-----------|----------|-------|
| `src/utils.ts` | `atomicWriteFile`, `ensureDir`, `readFileChecked`, `appendJsonl`, `safeJsonParse` (partial I/O) | Filesystem | Use temp dirs. `safeJsonParse` is pure but error messages reference files. |
| `src/state/state-manager.ts` | `saveState`, `loadState`, `validateState` | Filesystem | `validateState` is pure. `saveState`/`loadState` use `atomicWriteFile`/`readFileChecked`. |
| `src/state/checkpoint.ts` | `createCheckpoint`, `listCheckpoints`, `loadCheckpointState` | Filesystem | Needs temp directory structure. |
| `src/state/resume.ts` | `resumePipeline`, `verifyArtifactIntegrity`, `attemptBackupRecovery`, `computeResumePoint`, `resumeFromCompletedState` | Filesystem | Complex -- 6-step algorithm, integrity checks, backup recovery. `computeResumePoint` is pure. |
| `src/orchestrator/workspace-setup.ts` | `createWorkspace`, `createSubsetCheckpointDir`, `createPassArchiveDir` | Filesystem | Creates directories, writes files. `validateCorpusPaths` checks all corpus files exist. |
| `src/logging/logger.ts` | `Logger` class (all methods) | Filesystem (append) | Writes to 5 log files. |
| `src/config/paths.ts` | `resolveProjectRoot`, `resolveProjectPaths`, `buildOutputDir` | Filesystem (.git detection) | `resolveProjectPaths` and `buildOutputDir` are pure transforms; `resolveProjectRoot` does filesystem walk. |
| `src/cli.ts` | `main`, `buildConfig`, `printDryRun` | Process args + filesystem | `buildConfig` validates filesystem paths. `printDryRun` is console output. |

### 2.4 External Process Functions (HARD to test)

| Module | Functions | External Dependency | Notes |
|--------|-----------|-------------------|-------|
| `src/agents/claude-cli.ts` | `spawnClaude`, `spawnOnce`, `buildArgs`, `buildEnv` | `claude` CLI binary | `buildArgs` and `buildEnv` are pure. `spawnOnce` spawns child process. Need mock child_process or stubbed `claude` binary. |
| `src/pa/auditor-spawner.ts` | `spawnAuditors`, `buildAuditorPrompt`, `buildIntegrativePrompt` | `claude` CLI | Prompt builders are pure. `spawnAuditors` spawns 8+1 Claude processes. |
| `src/pa/weaver-spawner.ts` | `spawnWeaver`, `buildWeaverPrompt` | `claude` CLI | Prompt builder is pure. `spawnWeaver` spawns 1 Claude process. |
| `src/pa/mini-pa-spawner.ts` | `spawnMiniPA`, `buildMiniAuditorPrompt` | `claude` CLI | Prompt builder is pure. |

### 2.5 Playwright-Bound Functions (HARD to test)

| Module | Functions | Notes |
|--------|-----------|-------|
| `src/validation/gate-runner.ts` | `runGates` | Launches chromium, navigates to served URL, injects JS. |
| `src/pa/screenshot-capture.ts` | `captureScreenshots` | Launches chromium, takes full-page screenshots. |
| `src/pa/http-server.ts` | `startArtifactServer`, `findAvailablePort` | Creates HTTP server. `findAvailablePort` probes ports. |
| `src/validation/gate-runner-browser.js` | `runAllGates`, `runBriefVerification`, `runPhase3Gates`, etc. | ~1,200 lines of Playwright-evaluated JS. Runs in browser context. |

---

## 3. Critical Code Paths That Need Tests

### 3.1 State Machine Transitions (HIGH PRIORITY)
- `pipeline.ts`: Phase 0 -> Phase A -> Phase B transitions
- Phase B routing: SHIP / REFINE / RETHINK decision tree
- Stall detection logic
- Budget exceeded -> pause transition
- Resume from in-flight pass vs. completed state
- Error -> failed state transition

### 3.2 Data Integrity (HIGH PRIORITY)
- `safeJsonParse`: Normal parse, lastBrace fallback, truncated response recovery
- `atomicWriteFile`: Atomic write guarantees (tmp -> rename)
- State save/load roundtrip (schema v3 validation)
- Artifact integrity verification (SHA-256 hash match)
- Checkpoint creation and restoration

### 3.3 Prompt Assembly (MEDIUM PRIORITY)
- Template variable substitution (all 46 variable names)
- V-05 defense: `{UPPER_CASE}` in content doesn't get substituted
- Token trimming: conviction layer trim, valley-position corpus trim
- Token limit enforcement (fail at TOKEN_FAIL)

### 3.4 Response Parsing (HIGH PRIORITY)
- HTML extraction: markers, DOCTYPE fallback, full-result fallback
- Conviction extraction: all 6 dimensions, partial matches, missing markers
- Discovery log extraction
- Weaver verdict JSON parsing (multiple candidates, validation)
- Truncated JSON recovery (3-stage fallback)

### 3.5 Rotation Math (MEDIUM PRIORITY)
- Carousel rotation for all file counts (4, 5, 6)
- Edge cases: unknown file count (fallback to 5-file shifts)
- Rotation index clamping (negative, >2)

### 3.6 Cost Tracking (MEDIUM PRIORITY)
- Per-role, per-subset accumulation
- Warning threshold detection
- Hard cap enforcement
- Budget exceeded error creation

---

## 4. Mocking Strategy

### 4.1 Claude CLI Mock
The `claude` binary is the primary external dependency. Three approaches:

**Option A: DI Mock (Recommended for unit tests)**
`spawnClaude` is already injected via `PassExecutorDeps`. Create mock implementations:
```typescript
const mockDeps: PassExecutorDeps = {
  async spawnClaude(prompt, role, config) {
    return {
      type: 'result', subtype: 'success', is_error: false,
      result: '<!-- HTML_START --><html>...</html><!-- HTML_END -->',
      session_id: 'mock', total_cost_usd: 0.50,
      usage: { input_tokens: 1000, output_tokens: 500 },
    };
  },
  // ...other deps
};
```

**Option B: Module-level stub (for response-handler integration)**
Mock `child_process.spawn` for `claude-cli.ts` unit tests. Return pre-recorded stdout.

**Option C: Fixture responses (for prompt-response roundtrip)**
Store JSON responses in `tests/fixtures/claude-responses/` for each role.

### 4.2 Filesystem Mock
Use `node:fs/promises` with temp directories via `os.tmpdir()` + `crypto.randomUUID()`. Clean up in `afterEach`.

**Key pattern:**
```typescript
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';

function createTempDir(): string {
  const dir = path.join(os.tmpdir(), `deep-build-test-${crypto.randomUUID()}`);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}
```

### 4.3 Playwright Mock
For unit tests: do not mock Playwright. Gate-runner and screenshot tests belong in Tier 3.
For integration tests: use a minimal HTML fixture and real Playwright.

### 4.4 Fixture Strategy
```
tests/
  fixtures/
    sample-content.md          (exists)
    claude-responses/
      builder-success.json     (valid ClaudeResponse with HTML markers)
      builder-no-html.json     (valid response, no HTML in result)
      verifier-success.json    (valid verifier observations)
      weaver-verdict.json      (valid response with ```json WeaverVerdict)
      truncated-response.txt   (truncated mid-JSON for safeJsonParse)
      rate-limited.json        (is_error: true, rate limit text)
    html-artifacts/
      valid-complete.html      (passes all validateHtml checks)
      no-doctype.html          (missing DOCTYPE)
      with-script.html         (contains <script> -- should fail)
      with-event-handler.html  (inline onload -- should fail)
      minimal.html             (< 500 bytes -- warning)
    state/
      valid-state-v3.json      (complete PipelineState, schema v3)
      invalid-schema-v2.json   (schema version 2 -- should fail)
      corrupted.json           (invalid JSON)
    templates/
      builder-corpus.md        (minimal builder template with {VARIABLES})
      verifier-corpus.md       (minimal verifier template)
```

---

## 5. Priority Test Plan

### Tier 1: Must-Have Unit Tests (run on every commit)

**Estimated: ~150 test cases, ~1,500 lines of test code**

These test pure functions with zero I/O. Fast (<5s total).

#### 5.1 `utils.test.ts` (~30 cases)

```
describe('sha256')
  it('should return 64-char hex string for non-empty input')
  it('should return consistent hash for same input')
  it('should return different hash for different input')
  it('should handle empty string')
  it('should handle unicode content')

describe('estimateTokens')
  it('should return ceil(length / 4) for ASCII text')
  it('should return 1 for 1-4 char strings')
  it('should return 0 for empty string') -- actually ceil(0/4) = 0
  it('should handle very long text (1MB)')

describe('slugify')
  it('should lowercase and replace non-alphanum with hyphens')
  it('should strip .md extension')
  it('should trim leading/trailing hyphens')
  it('should truncate to 80 chars')
  it('should handle empty string')
  it('should handle string of only special chars')

describe('formatDuration')
  it('should return "0s" for 0ms')
  it('should return seconds only for < 60s')
  it('should return minutes and seconds for < 1h')
  it('should return hours, minutes, seconds for >= 1h')
  it('should handle large values (24h+)')

describe('computeConfigHash')
  it('should return consistent hash for same config')
  it('should sort keys deterministically')
  it('should produce different hash when values change')

describe('safeJsonParse')
  it('should parse valid JSON normally')
  it('should handle trailing newlines after JSON')
  it('should recover truncated claude response with complete result')
  it('should recover truncated claude response with incomplete result')
  it('should throw with context on completely invalid input')
  it('should handle lastBrace fallback for extra trailing data')
  it('should extract usage fields from truncated response')

describe('stripTrailingPartialEscape (via safeJsonParse)')
  it('should strip trailing lone backslash')
  it('should preserve matched trailing backslashes (even count)')
  it('should strip incomplete unicode escape \\uXX')
  it('should not strip complete unicode escape \\uXXXX')
  it('should handle empty string')
```

#### 5.2 `rotation.test.ts` (~15 cases)

```
describe('computeRotation')
  it('should return unshifted order for rotation index 0 (shift=0)')
  it('should shift by 2 for 5-file subset at rotation index 1')
  it('should shift by 4 for 5-file subset at rotation index 2')
  it('should use 5-file shifts when file count not in SHIFT_TABLE')
  it('should clamp rotation index to 0-2 range')
  it('should handle negative rotation index (clamp to 0)')
  it('should handle 4-file subsets with correct shifts [0, 2, 3]')
  it('should handle 6-file subsets with correct shifts [0, 2, 4]')
  it('should return file paths (not objects) in rotatedFiles')
  it('should include human-readable description')
  it('should handle single-file subset (shift % 1 = 0)')
  it('should handle empty files array')
  it('edge case: rotation index exactly 2')
  it('should extract filename from path for description')
```

#### 5.3 `phase-router.test.ts` (~20 cases)

```
describe('routePhaseB')
  it('should return SHIP when pa05 >= 3.5 AND tier5 >= 6 AND zero soul violations')
  it('should return REFINE when pa05 >= 3.5 but tier5 < 6')
  it('should return REFINE when pa05 >= 3.5 but soul violations > 0')
  it('should return REFINE when pa05 >= 2.0 but < 3.5')
  it('should return RETHINK when pa05 < 2.0 AND completedPACycles >= 2')
  it('should return REFINE when pa05 < 2.0 AND completedPACycles < 2')
  it('should return REFINE when pa05 exactly equals 2.0')
  it('should return SHIP when pa05 exactly equals 3.5')

describe('detectStall')
  it('should return false when fewer than 3 PA cycle records')
  it('should return false when latest cycles improved over baseline')
  it('should return true when 2 consecutive cycles show no improvement over baseline')
  it('should use score at index length-3 as baseline')
  it('should handle exactly STALL_THRESHOLD+1 records (minimum for detection)')
  it('should not false-positive on regression after improvement')
  it('edge case: all scores identical')
  it('edge case: score at baseline is 0')

describe('checkBudget')
  it('should return {warning: false, exceeded: false} below thresholds')
  it('should return {warning: true, exceeded: false} at warning threshold')
  it('should return {warning: true, exceeded: true} at hard cap')
  it('should use configured thresholds from CostTracker')
```

#### 5.4 `conviction-manager.test.ts` (~15 cases)

```
describe('addConviction')
  it('should append entry and increment convictionEntryCount')
  it('should return NEW state object (not mutate original)')
  it('should cap at MAX_CONVICTION_ENTRIES (10)')
  it('should drop oldest entries (lowest passNumber) when over cap')
  it('should break passNumber ties by addedAt timestamp')
  it('should add addedAt timestamp to entry')

describe('extractConvictionFromResponse')
  it('should extract all 6 dimensions when present')
  it('should extract subset of dimensions')
  it('should return empty array when markers missing')
  it('should return empty array when end marker before start marker')
  it('should handle multi-line dimension content')
  it('should trim whitespace from dimension values')
  it('should ignore empty dimension values')

describe('parseConvictionBlock')
  it('should parse all 6 dimensions from block text')
  it('should return empty object for empty block')
```

#### 5.5 `html-validator.test.ts` (~12 cases)

```
describe('validateHtml')
  it('should return valid for well-formed HTML with doctype, head, body, style')
  it('should fail on empty string')
  it('should fail on missing DOCTYPE')
  it('should fail on missing <head>')
  it('should fail on missing <body>')
  it('should fail on <script> tag')
  it('should fail on inline event handler (onerror, onload)')
  it('should warn on very small artifact (< 500 bytes)')
  it('should warn on very large artifact (> 500KB)')
  it('should warn on missing <style> tag')
  it('should fail on UTF-8 replacement characters')
  it('should handle case-insensitive matching')
```

#### 5.6 `diff-checker.test.ts` (~10 cases)

```
describe('diffArtifact')
  it('should compute positive line delta for growth')
  it('should compute negative line delta for shrinkage')
  it('should compute zero delta for same size')
  it('should detect added sections via HTML comments')
  it('should detect removed sections')
  it('should compute size percent change correctly')
  it('should handle empty before (100% growth)')
  it('should handle both empty (0% change)')
  it('should generate human-readable summary')
  it('should include sign prefix in summary (+N or -N)')
```

#### 5.7 `response-handler.test.ts` (~20 cases)

```
describe('extractHtml')
  it('should extract HTML between <!-- HTML_START --> and <!-- HTML_END --> markers')
  it('should fall back to DOCTYPE to </html> when markers absent')
  it('should handle lowercase <!doctype')
  it('should fall back to full result when <html> and </html> present')
  it('should throw HtmlExtractionError when no HTML found')
  it('should trim whitespace around extracted HTML')
  it('should handle markers with extra whitespace')

describe('extractConvictionAddition')
  it('should extract all 6 dimensions from marked block')
  it('should return null when markers absent')
  it('should return null when markers present but no dimensions parsed')
  it('should handle partial dimensions (only BUILT and TRYING)')

describe('extractDiscoveryLog')
  it('should extract bullet-pointed entries from marked block')
  it('should strip leading - * or bullet chars')
  it('should filter empty lines')
  it('should return empty array when markers absent')

describe('extractVerifierObservations')
  it('should return trimmed result text')
  it('should return null for empty text')

describe('parseClaudeResponse')
  it('should parse valid JSON response')
  it('should throw on is_error with rate-limit pattern')
  it('should throw on is_error with overload pattern')
  it('should throw on generic is_error')
```

#### 5.8 `state-manager.test.ts` (validateState portion) (~10 cases)

```
describe('validateState')
  it('should pass for valid v3 state')
  it('should fail for wrong schemaVersion')
  it('should fail for empty runId')
  it('should fail for invalid currentPhase')
  it('should fail for invalid status')
  it('should fail for negative currentSubsetId')
  it('should fail for missing cost tracker')
  it('should fail for non-array passes')
  it('should fail for non-array convictionLayer')
  it('should accumulate multiple errors')
```

#### 5.9 `types/*.test.ts` (~5 cases)

```
describe('getRotationIndex')
  it('should return 0 for passes 1-3')
  it('should return 1 for passes 4-6')
  it('should return 2 for passes 7-8')

describe('createInitialState')
  it('should create state with schema version 3')
  it('should use default maxPACycles and paScoreThreshold')
```

#### 5.10 `cost-tracker.test.ts` (~8 cases)

```
describe('updateCost')
  it('should accumulate token counts from pass result')
  it('should accumulate cost per-subset')
  it('should accumulate cost per-role')
  it('should set warningThresholdHit when crossing warning threshold')
  it('should set hardCapHit when crossing hard cap')
  it('should not re-set thresholds if already hit')

describe('checkBudget (cost-tracker version)')
  it('should return exceeded=true and message when hardCapHit')
  it('should return warning=true and remaining budget message when warningThresholdHit')
```

#### 5.11 `report.test.ts` (~5 cases)

```
describe('generateReport')
  it('should compute duration from startedAt to completedAt')
  it('should determine BUDGET_CAP verdict when hardCapHit')
  it('should determine FAILED verdict when status is failed')
  it('should extract PA trajectory from paCycleRecords')
  it('should count errors by category')
```

#### 5.12 `cross-subset-verifier.test.ts` (~5 cases)

```
describe('shouldRunCrossSubsetVerification')
  it('should return true for subsets 2, 4, 6')
  it('should return false for subsets 1, 3, 5, 7')

describe('buildCrossSubsetVerifierPrompt')
  it('should include all checkpoint paths')
  it('should include verifier observations')
  it('should include correct subset count')
```

#### 5.13 `config/*.test.ts` (~3 cases)

```
describe('getQuestionsForAuditor')
  it('should return 7 questions for auditor A')
  it('should return empty array for auditor I')

describe('getAllCorpusFilePaths')
  it('should return unique set of all file paths from all subsets + infrastructure')
```

---

### Tier 2: Should-Have Integration Tests (run on PR)

**Estimated: ~50 test cases, ~2,000 lines of test code**

These require filesystem setup (temp dirs) or module-level mocking.

#### 5.14 State Machine Integration (~15 cases)

```
describe('saveState + loadState roundtrip')
  it('should serialize and deserialize PipelineState faithfully')
  it('should throw StateCorruptionError for schema v2 state')
  it('should throw StateCorruptionError for invalid fields')

describe('createCheckpoint + loadCheckpointState')
  it('should create checkpoint directory with artifact, state, hash')
  it('should load checkpoint state back correctly')

describe('listCheckpoints')
  it('should return sorted list of checkpoint dirs')
  it('should return empty array when no checkpoints exist')

describe('resumePipeline')
  it('should resume from in-flight pass by re-running it')
  it('should resume from completed state at next pass')
  it('should throw on schema version mismatch')
  it('should throw on config hash mismatch')
  it('should verify artifact integrity via SHA-256')
  it('should attempt backup recovery on hash mismatch')
  it('should throw on completed pipeline (nothing to resume)')
  it('should throw on failed pipeline')
  it('should compute correct resume point from global pass number')
```

#### 5.15 Prompt Assembly Integration (~10 cases)

```
describe('assembleBuilderPrompt (with temp templates)')
  it('should substitute all {VARIABLE} placeholders')
  it('should escape {UPPER_CASE} patterns in content values (V-05)')
  it('should report unresolved variables')
  it('should trim conviction layer when over token limit')
  it('should trim valley-position corpus files when over token limit')
  it('should throw ValidationError when still over TOKEN_FAIL after trimming')

describe('format helpers')
  it('formatConvictionLayer should group by dimension with markdown headers')
  it('formatDiscoveryLog should number entries')
  it('formatPassContext should include rotation label and pass numbers')
```

#### 5.16 Pass Executor Integration (~15 cases)

```
describe('executeSinglePass (with mock deps)')
  it('should set and clear inFlightPass during execution')
  it('should extract HTML for builder passes')
  it('should extract conviction and discovery entries')
  it('should handle verifier passes (observations, not HTML)')
  it('should record pass failure when HTML extraction fails')
  it('should record pass failure when HTML validation fails')
  it('should record pass failure when spawnClaude throws')
  it('should throw BudgetExceededError when budget exceeded')
  it('should update cost tracker with pass results')
  it('should update artifact hash and size history')
  it('should add conviction entries via addConviction')
  it('should cap verifier observations at rolling window of 3')
  it('should archive pass (prompt, response, artifact backup)')
  it('should save state after each pass')
  it('should return immutable new state object')
```

#### 5.17 Pipeline Orchestrator Integration (~10 cases)

```
describe('runPipeline (with full mock deps)')
  it('should execute dry run (print plan, no side effects)')
  it('should run Phase 0 -> Phase A -> Phase B for fresh start')
  it('should skip Phase A when --skip-phase-a set')
  it('should resume from existing state when --resume set')
  it('should transition to completed on SHIP verdict')
  it('should transition to paused on RETHINK verdict')
  it('should spawn refine builder on REFINE verdict')
  it('should detect stall and force SHIP')
  it('should pause on budget exceeded')
  it('should create cross-subset verification after S2, S4, S6')
```

#### 5.18 CLI Integration (~5 cases)

```
describe('buildConfig')
  it('should resolve project root from filesystem walk')
  it('should create slug from content filename')
  it('should validate content file exists and is text')
  it('should reject binary files (null bytes)')
  it('should reject files > 5MB')
```

#### 5.19 Workspace Setup Integration (~5 cases)

```
describe('createWorkspace')
  it('should create isolated workspace with .git/HEAD')
  it('should create .claude/settings.json with empty object')
  it('should create all output subdirectories')
  it('should freeze content copy')
  it('should initialize state.json with v3 defaults')
```

---

### Tier 3: Nice-to-Have E2E Tests (run weekly or manually)

**Estimated: ~20 test cases, ~1,500 lines of test code**

These require Playwright, HTTP server, or long-running processes.

#### 5.20 Gate Runner E2E (~8 cases)

```
describe('runGates (with real Playwright)')
  it('should launch browser and inject gate-runner-browser.js')
  it('should return GateVerdict with gate results')
  it('should handle valid HTML (all REQUIRED gates pass)')
  it('should detect missing DOCTYPE (GR-01 fail)')
  it('should close browser on success')
  it('should close browser on error')
  it('should throw PlaywrightError on navigation failure')
  it('should wait for document.fonts.ready')
```

#### 5.21 Screenshot Capture E2E (~5 cases)

```
describe('captureScreenshots (with real Playwright)')
  it('should capture screenshots at all 3 viewports')
  it('should save PNG files to output directory')
  it('should return ScreenshotManifest with correct metadata')
  it('should disable animations via injected CSS')
  it('should close browser on error')
```

#### 5.22 HTTP Server E2E (~5 cases)

```
describe('startArtifactServer')
  it('should serve HTML on found port')
  it('should find available port when default is taken')
  it('should kill cleanly (destroy connections)')
  it('should set no-store cache control')
  it('should throw FileNotFoundError for missing HTML')
```

#### 5.23 Full Pipeline E2E (~2 cases)

```
describe('full pipeline with mock claude')
  it('should complete Phase A (all 56 passes) with fixture responses')
  it('should complete Phase B (1 PA cycle) and reach SHIP verdict')
```

---

## 6. Top 10 Most Critical Functions: Detailed Test Cases

### 1. `safeJsonParse` (utils.ts:114)

```typescript
describe('safeJsonParse', () => {
  it('should parse valid JSON object', () => {
    const result = safeJsonParse<{ a: number }>('{"a": 1}', 'test');
    expect(result).toEqual({ a: 1 });
  });

  it('should handle trailing data after closing brace', () => {
    const result = safeJsonParse<{ a: number }>('{"a": 1}\n\n', 'test');
    expect(result).toEqual({ a: 1 });
  });

  it('should recover truncated claude response with complete result field', () => {
    const truncated = '{"type":"result","subtype":"success","is_error":false,"result":"Hello world","session_id":"abc","total_cost_usd":0.5,"usage":{"input_tokens":100,"output_tokens":50';
    const result = safeJsonParse<any>(truncated, 'test');
    expect(result.result).toBe('Hello world');
    expect(result.type).toBe('result');
  });

  it('should recover truncated response with escaped chars in result', () => {
    const truncated = '{"type":"result","result":"line1\\nline2\\n<!-- HTML_START -->\\n<html","session_id":"x';
    const result = safeJsonParse<any>(truncated, 'test');
    expect(result.result).toContain('line1');
    expect(result.result).toContain('HTML_START');
  });

  it('should throw with context message on completely invalid input', () => {
    expect(() => safeJsonParse('not json at all', 'my-context'))
      .toThrow(/JSON parse failed \(my-context\)/);
  });

  it('should strip trailing incomplete unicode escape from truncated result', () => {
    const truncated = '{"type":"result","result":"hello\\u00';
    const result = safeJsonParse<any>(truncated, 'test');
    expect(result.result).toBe('hello');
  });

  it('should strip trailing lone backslash from truncated result', () => {
    const truncated = '{"type":"result","result":"hello\\';
    const result = safeJsonParse<any>(truncated, 'test');
    expect(result.result).toBe('hello');
  });
});
```

### 2. `routePhaseB` (phase-router.ts:25)

```typescript
describe('routePhaseB', () => {
  function makeVerdict(overrides: Partial<WeaverVerdict>): WeaverVerdict {
    return {
      pa05Score: 3.5, tier5: 6, top5Fixes: [], emotionalArc: { authority: 0, closure: 0, surprise: 0, delight: 0 },
      soulViolations: [], verdict: 'SHIP', mode: 'DESIGNED', narrativeSummary: '',
      ...overrides,
    };
  }
  function makeState(overrides: Partial<PipelineState>): PipelineState {
    return createInitialState({ runId: 'test', configHash: 'h', contentPath: 'c', slug: 's', artifactPath: 'a' }) as any;
  }

  it('should return SHIP when all criteria met', () => {
    expect(routePhaseB(makeVerdict({ pa05Score: 4.0, tier5: 7, soulViolations: [] }), makeState({}))).toBe('SHIP');
  });

  it('should return REFINE when tier5 below minimum', () => {
    expect(routePhaseB(makeVerdict({ pa05Score: 4.0, tier5: 3 }), makeState({}))).toBe('REFINE');
  });

  it('should return REFINE when soul violations present', () => {
    expect(routePhaseB(makeVerdict({ soulViolations: ['violation1'] }), makeState({}))).toBe('REFINE');
  });

  it('should return RETHINK when pa05 < 2.0 and 2+ completed cycles', () => {
    const state = { ...makeState({}), completedPACycles: 2 } as PipelineState;
    expect(routePhaseB(makeVerdict({ pa05Score: 1.5 }), state)).toBe('RETHINK');
  });

  it('should return REFINE when pa05 < 2.0 but fewer than 2 completed cycles', () => {
    const state = { ...makeState({}), completedPACycles: 1 } as PipelineState;
    expect(routePhaseB(makeVerdict({ pa05Score: 1.5 }), state)).toBe('REFINE');
  });

  it('should return SHIP at exact threshold boundaries', () => {
    expect(routePhaseB(makeVerdict({ pa05Score: 3.5, tier5: 6, soulViolations: [] }), makeState({}))).toBe('SHIP');
  });
});
```

### 3. `extractHtml` (response-handler.ts:58)

```typescript
describe('extractHtml', () => {
  it('should extract HTML via markers (strategy 1)', () => {
    const text = 'prefix <!-- HTML_START --> <html><body>test</body></html> <!-- HTML_END --> suffix';
    const result = extractHtml(text);
    expect(result.method).toBe('markers');
    expect(result.html).toContain('<html>');
  });

  it('should fall back to DOCTYPE (strategy 2)', () => {
    const text = 'Some preamble\n<!DOCTYPE html><html><head></head><body>test</body></html>\nSome suffix';
    const result = extractHtml(text);
    expect(result.method).toBe('doctype');
    expect(result.html).toStartWith('<!DOCTYPE html>');
    expect(result.html).toEndWith('</html>');
  });

  it('should handle lowercase doctype', () => {
    const text = '<!doctype html><html><body></body></html>';
    const result = extractHtml(text);
    expect(result.method).toBe('doctype');
  });

  it('should throw HtmlExtractionError when no HTML found', () => {
    expect(() => extractHtml('just plain text, no html')).toThrow(HtmlExtractionError);
  });

  it('should prefer markers over DOCTYPE when both present', () => {
    const text = '<!-- HTML_START --> <div>marked</div> <!-- HTML_END --> <!DOCTYPE html><html></html>';
    const result = extractHtml(text);
    expect(result.method).toBe('markers');
    expect(result.html).toContain('marked');
  });
});
```

### 4. `computeRotation` (rotation.ts:23)

```typescript
describe('computeRotation', () => {
  const fiveFiles: CorpusFile[] = [
    { path: 'a.md', name: 'A', approximateLines: 100 },
    { path: 'b.md', name: 'B', approximateLines: 100 },
    { path: 'c.md', name: 'C', approximateLines: 100 },
    { path: 'd.md', name: 'D', approximateLines: 100 },
    { path: 'e.md', name: 'E', approximateLines: 100 },
  ];

  it('should return original order for rotation 0 (shift=0)', () => {
    const result = computeRotation(fiveFiles, 0);
    expect(result.rotatedFiles).toEqual(['a.md', 'b.md', 'c.md', 'd.md', 'e.md']);
    expect(result.shift).toBe(0);
  });

  it('should shift by 2 for rotation 1', () => {
    const result = computeRotation(fiveFiles, 1);
    expect(result.rotatedFiles).toEqual(['c.md', 'd.md', 'e.md', 'a.md', 'b.md']);
    expect(result.shift).toBe(2);
  });

  it('should shift by 4 for rotation 2', () => {
    const result = computeRotation(fiveFiles, 2);
    expect(result.rotatedFiles).toEqual(['e.md', 'a.md', 'b.md', 'c.md', 'd.md']);
    expect(result.shift).toBe(4);
  });

  it('should clamp negative rotation index to 0', () => {
    const result = computeRotation(fiveFiles, -1);
    expect(result.rotationIndex).toBe(0);
  });

  it('should clamp rotation index > 2 to 2', () => {
    const result = computeRotation(fiveFiles, 5);
    expect(result.rotationIndex).toBe(2);
  });
});
```

### 5. `addConviction` (conviction-manager.ts:32)

```typescript
describe('addConviction', () => {
  it('should return new state object (immutable)', () => {
    const state = createInitialState({ runId: 'r', configHash: 'h', contentPath: 'c', slug: 's', artifactPath: 'a' });
    const entry = { passNumber: 1, subsetId: 1, dimension: 'built' as const, content: 'test' };
    const newState = addConviction(state, entry);
    expect(newState).not.toBe(state);
    expect(newState.convictionLayer.length).toBe(1);
    expect(state.convictionLayer.length).toBe(0); // original unchanged
  });

  it('should cap at MAX_CONVICTION_ENTRIES and drop oldest', () => {
    let state = createInitialState({ runId: 'r', configHash: 'h', contentPath: 'c', slug: 's', artifactPath: 'a' });
    for (let i = 1; i <= 12; i++) {
      state = addConviction(state, { passNumber: i, subsetId: 1, dimension: 'built' as const, content: `entry-${i}` });
    }
    expect(state.convictionLayer.length).toBe(10); // MAX_CONVICTION_ENTRIES
    expect(state.convictionLayer[0].content).toBe('entry-3'); // oldest 2 dropped
    expect(state.convictionEntryCount).toBe(12); // total count tracks all additions
  });
});
```

### 6. `validateHtml` (html-validator.ts:12)

```typescript
describe('validateHtml', () => {
  const validHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><style>.x{}</style><p>Hello</p></body></html>';

  it('should return valid for well-formed HTML', () => {
    const result = validateHtml(validHtml);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should reject <script> tags (security)', () => {
    const result = validateHtml(validHtml.replace('</body>', '<script>alert(1)</script></body>'));
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(expect.stringContaining('script'));
  });

  it('should reject inline event handlers (security)', () => {
    const result = validateHtml(validHtml.replace('<p>', '<p onerror="alert(1)">'));
    expect(result.valid).toBe(false);
    expect(result.errors).toContain(expect.stringContaining('event handler'));
  });
});
```

### 7. `detectStall` (phase-router.ts:65)

```typescript
describe('detectStall', () => {
  function makeCycleRecord(pa05Score: number): PACycleRecord {
    return {
      cycleNumber: 1, startedAt: '', completedAt: '', screenshotPaths: [], gateResults: {},
      auditorReportPaths: [], routingDecision: 'REFINE', cost: 0,
      weaverVerdict: { pa05Score, tier5: 0, top5Fixes: [], emotionalArc: { authority: 0, closure: 0, surprise: 0, delight: 0 }, soulViolations: [], verdict: 'REFINE', mode: 'FLOOR', narrativeSummary: '' },
    };
  }

  it('should not detect stall with insufficient records', () => {
    expect(detectStall([makeCycleRecord(2.0), makeCycleRecord(2.0)])).toBe(false);
  });

  it('should detect stall when 2 recent cycles do not improve over baseline', () => {
    const records = [makeCycleRecord(2.5), makeCycleRecord(2.3), makeCycleRecord(2.1)];
    expect(detectStall(records)).toBe(true);
  });

  it('should not false-positive when improving over baseline despite recent regression', () => {
    const records = [makeCycleRecord(2.0), makeCycleRecord(3.0), makeCycleRecord(2.8)];
    expect(detectStall(records)).toBe(false); // 3.0 and 2.8 both > 2.0 baseline
  });
});
```

### 8. `parseWeaverVerdict` (weaver-spawner.ts:136)

```typescript
describe('parseWeaverVerdict', () => {
  const validVerdict = JSON.stringify({
    pa05Score: 3.5, tier5: 6, top5Fixes: [{ rank: 1, category: 'MECHANICAL', description: 'fix border', auditorSources: ['A'], convergenceCount: 2 }],
    emotionalArc: { authority: 0.8, closure: 0.7, surprise: 0.5, delight: 0.6 },
    soulViolations: [], verdict: 'SHIP', mode: 'DESIGNED', narrativeSummary: 'Good page.',
  });

  it('should extract WeaverVerdict from ```json block', () => {
    const text = `Analysis here...\n\`\`\`json\n${validVerdict}\n\`\`\`\n\nMore text.`;
    const result = parseWeaverVerdict(text);
    expect(result.pa05Score).toBe(3.5);
    expect(result.verdict).toBe('SHIP');
  });

  it('should prefer last ```json block when multiple present', () => {
    const other = JSON.stringify({ someOther: 'data' });
    const text = `\`\`\`json\n${other}\n\`\`\`\n\nNow the real one:\n\`\`\`json\n${validVerdict}\n\`\`\``;
    const result = parseWeaverVerdict(text);
    expect(result.verdict).toBe('SHIP');
  });

  it('should throw when no ```json block found', () => {
    expect(() => parseWeaverVerdict('No JSON here at all')).toThrow(/does not contain/);
  });

  it('should throw when required fields missing', () => {
    const incomplete = JSON.stringify({ pa05Score: 3.0, verdict: 'SHIP' });
    const text = `\`\`\`json\n${incomplete}\n\`\`\``;
    expect(() => parseWeaverVerdict(text)).toThrow(/missing required field/);
  });
});
```

### 9. `executeSinglePass` (pass-executor.ts:37)

```typescript
describe('executeSinglePass', () => {
  // This requires full mock deps -- see Tier 2 tests above for detailed cases.
  // Core behaviors to verify:
  it('should set inFlightPass at start and clear it at end')
  it('should call assemblePrompt -> spawnClaude -> validateHtml in order')
  it('should write artifact to disk on successful builder pass')
  it('should extract conviction and discovery from response')
  it('should record failure when spawnClaude throws')
  it('should throw BudgetExceededError before spawning when budget exceeded')
});
```

### 10. `diffArtifact` (diff-checker.ts:31)

```typescript
describe('diffArtifact', () => {
  it('should compute positive deltas for growth', () => {
    const result = diffArtifact('abc', 'abcdef');
    expect(result.sizeDelta).toBe(3);
    expect(result.sizePercent).toBeCloseTo(100, 0);
  });

  it('should detect section changes', () => {
    const before = '<!-- SECTION: Header -->\n<h1>Title</h1>';
    const after = '<!-- SECTION: Header -->\n<h1>Title</h1>\n<!-- SECTION: Footer -->\n<footer/>';
    const result = diffArtifact(before, after);
    expect(result.sectionsAdded).toContain('Footer');
    expect(result.sectionsRemoved).toHaveLength(0);
  });

  it('should handle empty before string', () => {
    const result = diffArtifact('', '<html>new</html>');
    expect(result.sizePercent).toBe(100);
  });
});
```

---

## 7. Test Infrastructure Recommendations

### 7.1 Test Framework: Vitest

**Recommendation: Vitest** over Jest or node:test.

Rationale:
- Native ESM support (project uses `"type": "module"`)
- TypeScript support via tsx/esbuild (zero config)
- Compatible with `import.meta.url` (used in `paths.ts`, `cli.ts`, `gate-runner.ts`)
- Jest has ESM issues with `import.meta.url` -- requires experimental flags
- `node:test` lacks assertion helpers and snapshot testing
- Vitest API is Jest-compatible (easy mental model)

### 7.2 Configuration

**`vitest.config.ts`:**
```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    exclude: ['tests/fixtures/**'],
    globals: true,
    testTimeout: 10_000,
    hookTimeout: 10_000,
    // E2E tests (Playwright) need longer timeout
    sequence: {
      shuffle: true, // Detect test coupling
    },
  },
});
```

### 7.3 Package.json Changes

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:tier1": "vitest run tests/unit/",
    "test:tier2": "vitest run tests/integration/",
    "test:tier3": "vitest run tests/e2e/"
  },
  "devDependencies": {
    "vitest": "^3.0.0",
    "@vitest/coverage-v8": "^3.0.0"
  }
}
```

### 7.4 Directory Structure

```
tests/
  unit/                         # Tier 1: Pure function tests
    utils.test.ts
    rotation.test.ts
    phase-router.test.ts
    conviction-manager.test.ts
    html-validator.test.ts
    diff-checker.test.ts
    response-handler.test.ts
    state-validator.test.ts
    cost-tracker.test.ts
    report.test.ts
    cross-subset-verifier.test.ts
    types.test.ts
    config.test.ts
  integration/                  # Tier 2: I/O + DI tests
    state-roundtrip.test.ts
    checkpoint.test.ts
    resume.test.ts
    pass-executor.test.ts
    pipeline.test.ts
    assembler.test.ts
    workspace-setup.test.ts
    cli.test.ts
  e2e/                         # Tier 3: Browser + full pipeline
    gate-runner.test.ts
    screenshot-capture.test.ts
    http-server.test.ts
    full-pipeline.test.ts
  fixtures/
    sample-content.md           (exists)
    claude-responses/
    html-artifacts/
    state/
    templates/
  helpers/
    mock-deps.ts               # Mock PassExecutorDeps + PipelineDeps
    temp-dir.ts                # createTempDir / cleanupTempDir helpers
    factories.ts               # createMockState, createMockPass, etc.
```

### 7.5 Mocking Strategy for Claude CLI

The primary mock strategy is **DI-level mocking** since `PassExecutorDeps` and `PipelineDeps` already exist:

```typescript
// tests/helpers/mock-deps.ts
import type { PassExecutorDeps } from '../../src/orchestrator/pass-executor.js';
import type { PipelineDeps } from '../../src/orchestrator/pipeline.js';

export function createMockPassDeps(overrides?: Partial<PassExecutorDeps>): PassExecutorDeps {
  return {
    async assemblePrompt() { return 'mock prompt'; },
    async spawnClaude() {
      return {
        type: 'result', subtype: 'success', is_error: false,
        result: '<!-- HTML_START --><!DOCTYPE html><html><head></head><body><style>.x{}</style></body></html><!-- HTML_END -->',
        session_id: 'mock', total_cost_usd: 0.50,
        usage: { input_tokens: 1000, output_tokens: 500 },
      };
    },
    validateHtml() { return { valid: true, errors: [], warnings: [] }; },
    async saveState() {},
    ...overrides,
  };
}
```

### 7.6 CI Integration

```yaml
# .github/workflows/test.yml (conceptual)
jobs:
  test-tier1:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: cd tools/deep-build && npm ci && npm run test:tier1
    # Runs on every push/PR. Must pass for merge.

  test-tier2:
    runs-on: ubuntu-latest
    steps:
      - run: cd tools/deep-build && npm ci && npm run test:tier2
    # Runs on PR only. Must pass for merge.

  test-tier3:
    runs-on: ubuntu-latest
    steps:
      - run: cd tools/deep-build && npx playwright install chromium
      - run: cd tools/deep-build && npm run test:tier3
    # Runs weekly or manually. Informational.
```

---

## 8. Summary

### Key Numbers

| Metric | Value |
|--------|-------|
| Source files | 39 |
| Estimated source lines | ~5,600 |
| Current test files | 0 |
| Current test coverage | 0% |
| Pure functions (EASY to test) | ~65 |
| DI-ready functions (MEDIUM) | ~15 |
| I/O-bound functions (MEDIUM with mocks) | ~20 |
| External process functions (HARD) | ~10 |
| Playwright-bound functions (HARD) | ~5 |
| Proposed Tier 1 test cases | ~150 |
| Proposed Tier 2 test cases | ~50 |
| Proposed Tier 3 test cases | ~20 |
| Total proposed test cases | ~220 |

### Implementation Priority

1. **Start with Tier 1** (pure functions). These can be written today with zero infrastructure changes beyond adding Vitest. Highest ROI: catches regressions in rotation math, routing logic, JSON parsing, HTML extraction.

2. **Add Tier 2** after Tier 1 is green. Needs `tests/helpers/` with mock factories and temp dir utilities. Catches state machine bugs, prompt assembly regressions, resume integrity failures.

3. **Add Tier 3** last. Needs Playwright installed in CI. Catches browser-side gate regressions and screenshot issues.

### DI Quality Assessment

The codebase has **good DI architecture** for its core path:
- `PassExecutorDeps` cleanly separates the pass executor from its dependencies
- `PipelineDeps` extends it for Phase 0 / Phase B capabilities
- All external calls (claude CLI, Playwright, filesystem) flow through these interfaces

**Gaps in DI:**
- `prompts/assembler.ts` directly reads template files from disk (needs temp dir or template mock)
- `claude-cli.ts` directly spawns processes (but is only called through DI deps, so this is fine)
- `workspace-setup.ts` directly writes to filesystem (needs temp dir)
- Private functions in several modules (`stripTrailingPartialEscape`, `recoverTruncatedClaudeResponse`, `extractSections`, `determineTrend`, `parseWeaverVerdict`) need to be tested through their public callers or exported for testing

### Highest-Risk Untested Code

1. **`safeJsonParse` truncated response recovery** -- handles real production failures (claude responses truncated mid-JSON). One bug here = silent data loss.
2. **`routePhaseB` routing logic** -- controls whether pipeline SHIPs, REFINEs, or RETHINKs. One boundary error = wrong verdict.
3. **`extractHtml` fallback chain** -- 3-strategy fallback with edge cases. One regression = no HTML extracted = failed pass.
4. **`detectStall` baseline selection** -- subtle off-by-one in window vs baseline indexing could cause false positives (force-SHIP too early) or false negatives (infinite loop).
5. **`resumePipeline` 6-step algorithm** -- integrity checks, backup recovery, resume point computation. One bug here = corrupted state on resume = lost work.
