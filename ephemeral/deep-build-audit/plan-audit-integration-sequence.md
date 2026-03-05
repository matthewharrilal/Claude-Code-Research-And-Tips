# Integration Sequence Audit

Two complete execution traces through the pipeline, step by step, module by module. Every ambiguity is flagged as a GAP with a proposed resolution.

---

## SEQUENCE 1: Phase A, Subset 3, Pass 4 (Builder, Rotation B)

### Context
- Subset 3 = "Organization Domain" (files: OD-001, OD-004, OD-006, OD-Spec, OD-Synth)
- Pass 4 within subset 3 = global pass number (2 subsets * 8 passes + 4) = **pass 20**
- Rotation B starts at pass 4 within each subset
- Role: Builder (passes 1,3,4,6,7 are builders; passes 2,5,8 are verifiers)
- This is the first pass of Rotation B — a new rotation, so the builder gets "new rotation" context

---

### Step 1: pipeline.ts determines the next pass

**Module:** `src/orchestrator/pipeline.ts` → `runCorpusIntegration()`

**State fields consulted:**
1. `state.currentPhase` — must be `'corpus-integration'` to enter this branch
2. `state.lastCompletedCorpusPass` — value is **19** (passes 1-19 complete, pass 20 is next)
3. `state.totalCorpusPasses` — value is **56** (7 subsets × 8 passes)
4. `state.cost.totalEstimatedCostUsd` — checked against `config.budgetWarningThresholdUsd` ($150) and `config.budgetHardCapUsd` ($250)
5. `state.cost.hardCapHit` — if true, pipeline pauses

**Logic:**
```
nextPassNumber = state.lastCompletedCorpusPass + 1  // 19 + 1 = 20
if (nextPassNumber > state.totalCorpusPasses) → transition to 'pa-hardening'
else → execute pass 20
```

**How it finds the pass definition:**
The `allPasses` array was pre-computed by `computeAllPasses(config)` at pipeline start (Step 3 of `runPipeline()`). This is a pure function — deterministic, computed once. `allPasses[19]` (0-indexed) = pass 20.

**Pre-pass checks (before executing):**
1. Budget check: `state.cost.totalEstimatedCostUsd < config.budgetHardCapUsd`
2. If budget warning threshold crossed but not yet logged: log warning, set `state.cost.warningThresholdHit = true`

**GAP-IS-01:** The plan does NOT specify whether `allPasses` is indexed from 0 or keyed by globalPassNumber. Doc 02 uses `allPasses` as an array (0-indexed), but the plan's state schema uses `passRecords` as a Record keyed by string of global pass number. The orchestrator must use `allPasses[nextPassNumber - 1]` or `allPasses.find(p => p.globalPassNumber === nextPassNumber)`.
**Proposed resolution:** Use `allPasses[nextPassNumber - 1]` since `computeAllPasses()` returns an ordered array with globalPassNumber starting at 1.

**GAP-IS-02:** The plan mentions `inFlightPass` tracking in doc 08 state schema but doc 02's `runPipeline()` code does NOT show setting `inFlightPass` before executing. The plan's `executePass()` function (doc 02 Section 4.4) also does not show setting `inFlightPass`.
**Proposed resolution:** `executePass()` must set `state.inFlightPass = { globalPassNumber: 20, startedAt: now, agentRole: 'builder', subsetId: 'S3' }` and save state BEFORE invoking `claude -p`. Clear it on completion. This is critical for crash recovery.

---

### Step 2: pass-executor.ts receives the pass definition

**Module:** `src/orchestrator/pass-executor.ts` → `executePass(pass, config, state)`

**Input fields of PassDefinition:**
```typescript
{
  globalPassNumber: 20,
  subsetPassNumber: 4,
  subsetId: 'S3',
  rotation: 'B',
  agentRole: 'builder',
  rotatedFiles: [OD-006, OD-Spec, OD-Synth, OD-001, OD-004],  // shifted by 2
  description: '[S3] Pass 4/8 — Rotation B (Mid files promoted) — Builder — Organization Domain'
}
```

**First actions:**
1. Create pass directory: `{outputDir}/_orchestrator/passes/pass-020/`
2. Record start time: `startedAt = new Date()`
3. Log pass header: `═══...` separator + pass description

---

### Step 3: rotation.ts computes file order

**Module:** `src/orchestrator/rotation.ts` → `computeRotation()` (called during `computeAllPasses()` at pipeline init, NOT at pass execution time)

**Subset S3 files (base Rotation A order):**
```
Index 0: OD-001-conversational.md     (3,725 tokens)
Index 1: OD-004-confidence.md         (3,750 tokens)
Index 2: OD-006-creative.md           (4,175 tokens)
Index 3: OD-CONVENTION-SPEC.md        (5,850 tokens)
Index 4: OD-SYNTHESIS.md              (8,400 tokens)
```
Total: 5 files, 25,900 tokens

**Rotation B formula:**
```
rotationIndex = 'B' → index 1 (A=0, B=1, C=2)
shift = Math.floor(files.length * rotationIndex / 3)
     = Math.floor(5 * 1 / 3)
     = Math.floor(1.667)
     = 1
```

**CONTRADICTION FOUND:** The plan text says Rotation B shift = 2 (giving `[F3, F4, F5, F1, F2]`). But the plan's formula says `Math.floor(fileCount * N/5)` where N is the rotation index. Meanwhile doc 02 uses a DIFFERENT formula: `Math.floor(fileCount * 2/5)` for B. Let me resolve:

- **Plan's "Carousel Rotation" section:** `shift = Math.floor(files.length * rotationIndex / 3)` with `rotationIndex` for B presumably = 1. Result: `Math.floor(5 * 1 / 3) = 1`. Files: `[OD-004, OD-006, OD-Spec, OD-Synth, OD-001]`
- **Plan's K08 resolution:** `Math.floor(fileCount * N/5)` — if N=2 for rotation B, result = `Math.floor(5 * 2 / 5) = 2`. Files: `[OD-006, OD-Spec, OD-Synth, OD-001, OD-004]`
- **Doc 02 `getShiftForRotation()`:** Hardcodes B: `Math.floor(fileCount * 2 / 5)` = `Math.floor(2) = 2`. Files: `[OD-006, OD-Spec, OD-Synth, OD-001, OD-004]`
- **ROTATION_RHYTHM constant in doc 02:** `{ rotation: 'B', shift: 2, passes: [4, 5, 6] }` — hardcoded shift 2 for 5 files
- **Plan pipeline diagram:** "Rotation B (passes 4-6): [C, D, E, A, B]" for files [A,B,C,D,E] — shift 2

**GAP-IS-03 (CRITICAL):** Three different rotation formulas exist across the spec:
1. Plan "Carousel Rotation" section: `Math.floor(files.length * rotationIndex / 3)` → shift 1 for B
2. Plan K08 + Doc 02 hardcoded: `Math.floor(fileCount * 2 / 5)` → shift 2 for B
3. Doc 02 ROTATION_RHYTHM constant: hardcoded `shift: 2`

**Proposed resolution:** Doc 02's `getShiftForRotation()` is canonical (most explicit, most consistent with examples). For 5 files:
- A: shift 0 → `[0,1,2,3,4]`
- B: shift `Math.floor(5*2/5)` = 2 → `[2,3,4,0,1]`
- C: shift `Math.floor(5*4/5)` = 4 → `[4,0,1,2,3]`

**Actual rotated order for S3 Rotation B (shift=2):**
```
[OD-006-creative.md, OD-CONVENTION-SPEC.md, OD-SYNTHESIS.md, OD-001-conversational.md, OD-004-confidence.md]
```

The `rotateFiles()` function:
```typescript
function rotateFiles<T>(files: T[], shift: number): T[] {
  const effectiveShift = shift % files.length;  // 2 % 5 = 2
  return [...files.slice(2), ...files.slice(0, 2)];
  // = [files[2], files[3], files[4], files[0], files[1]]
  // = [OD-006, OD-Spec, OD-Synth, OD-001, OD-004]
}
```

---

### Step 4: assembler.ts loads the template

**Module:** `src/prompts/assembler.ts` → `constructPrompt(pass, config, state)`

**Template file:** `templates/builder-corpus.md` (from doc 07, ~200 lines, ~1,800 tokens of template text)

The assembler does NOT simply load-and-fill. It constructs the prompt in 8 sections:

1. **System context** — `buildSystemContext(pass, config)` — describes pass number, rotation, role
2. **Reference files** — `buildReferenceSection(config)` — always-loaded files
3. **Accumulated state** — `buildAccumulatedState(state)` — conviction layer + discovery log
4. **Verifier observations** — EMPTY for pass 4 (only passes 3 and 6 get this; pass 4 is "new rotation" not "addressing verifier")
5. **Artifact** — `buildArtifactSection(state.currentArtifactPath, 'builder')` — current HTML
6. **Corpus files** — `buildCorpusSection(pass.rotatedFiles)` — S3 files in Rotation B order
7. **Content markdown** — `buildContentSection(config.contentPath)` — user's input
8. **Task instructions** — `buildTaskInstructions(pass, config)` — builder-specific

**GAP-IS-04:** Doc 02's `constructPrompt()` uses 8 INLINE sections built by functions. Doc 07 provides a SEPARATE template file (`builder-corpus.md`) with `{VARIABLE}` placeholders. The plan says assembler "loads template file, resolves all {VARIABLES}". These are two different architectures:
- **Doc 02:** Programmatic section assembly (no template file)
- **Doc 07 + Plan:** Template file with variable substitution
- **Plan's assembler.ts description:** "loads template file, resolves all {VARIABLES}, concatenates corpus files, estimates token count"

**Proposed resolution:** The Plan's description is canonical (it supersedes doc 02's inline approach). `assembler.ts` reads `templates/builder-corpus.md`, replaces `{VARIABLES}`, and returns the assembled string. Doc 02's `constructPrompt()` with its 8 inline sections is the IMPLEMENTATION APPROACH for what the template describes, not a competing architecture. During implementation, the builder should use template files as the base structure and programmatic assembly for dynamic sections like corpus files and accumulated state.

---

### Step 5: assembler.ts loads corpus files (S3 in Rotation B order)

**Files loaded, in order (with sizes):**

| Position | File | Path | Est. Tokens |
|----------|------|------|-------------|
| 1 (PRIMACY) | OD-006 | `compositional-core/case-studies/OD-006-creative.md` | 4,175 |
| 2 | OD-Spec | `specification/od/OD-CONVENTION-SPEC.md` | 5,850 |
| 3 | OD-Synth | `specification/od/OD-SYNTHESIS.md` | 8,400 |
| 4 | OD-001 | `compositional-core/case-studies/OD-001-conversational.md` | 3,725 |
| 5 | OD-004 | `compositional-core/case-studies/OD-004-confidence.md` | 3,750 |

Each file is wrapped:
```
## [1/5] OD-006 (PRIMACY POSITION)

{file contents}

## [2/5] OD-Spec

{file contents}
...
```

A `{FILE_ORDER_DESCRIPTION}` variable is also computed:
```
"OD-006 → OD-Spec → OD-Synth → OD-001 → OD-004 order (Rotation B, mid files promoted)"
```

---

### Step 6: assembler.ts loads infrastructure (reference files)

**These load on EVERY pass regardless of subset or rotation:**

| File | Path | Est. Size |
|------|------|-----------|
| World Description | `templates/world-description.md` (or `ephemeral/build-page-v2/world-description.md`) | ~17 lines, ~461 tokens |
| Conviction Brief | `{outputDir}/_tc-brief.md` | 80-165 lines, ~2K tokens |
| Mechanism Catalog | `compositional-core/grammar/mechanism-catalog.md` | 1,878 lines, ~7,171 tokens |
| Components CSS | `compositional-core/components/components.css` | 944 lines, ~3,500 tokens |
| Design Tokens | `compositional-core/vocabulary/tokens.css` | 183 lines, ~700 tokens |

**Also loaded (from state, not config):**
| File | Source | Size |
|------|--------|------|
| Conviction Layer | `{outputDir}/_orchestrator/conviction-layer.md` | Depends on accumulated entries (up to ~1,300 tokens at cap of 10) |
| Discovery Log | `{outputDir}/_orchestrator/discovery-log.md` | Growing, uncapped |
| Case Study (CD-006) | `compositional-core/case-studies/CD-006-pilot-migration.md` | ~387 lines, ~4,850 tokens |

**GAP-IS-05:** The case study (CD-006) is listed in the plan's builder template variables as `{CASE_STUDY}` but is NOT listed in doc 02's `buildReferenceSection()` function. Doc 02's reference section loads: World Description, Conviction Brief, Mechanism Catalog, Components CSS, Design Tokens. The case study is mentioned in the plan's "Pass-to-Pass Anatomy" section as item 5 ("Case study: CD-006 exploration HTML (387 lines)") but is absent from doc 02's implementation code.
**Proposed resolution:** Add case study to `buildReferenceSection()` or add a separate `buildCalibrationSection()` in `constructPrompt()`. The template has `{CASE_STUDY}` so the assembler must resolve it.

**GAP-IS-06:** The conviction layer has a cap of 10 entries with FIFO merge (plan + doc 08). But doc 02's `buildAccumulatedState()` function simply reads the conviction layer file with no capping logic. The cap is presumably enforced at WRITE time (when appending), not at read time.
**Proposed resolution:** Confirm: conviction layer capping happens in `extractAccumulation()` → `appendToFile()` path, not in `buildAccumulatedState()`. The conviction-layer.md file should never exceed 10 entries because the WRITE path enforces the cap.

**GAP-IS-07:** The discovery log has NO cap specified anywhere. It grows unboundedly. For a 56-pass pipeline where each pass may add 3-5 discoveries, this could reach ~200 entries. At ~50 tokens each, that's ~10,000 tokens of discovery log by S7.
**Proposed resolution:** Add discovery log cap (30 entries, ~3,000 tokens) or progressive summarization at subset boundaries. Flag for Wave 2 impl-prompts.

---

### Step 7: assembler.ts resolves variables

**Full variable resolution for S3 Pass 4:**

| Variable | Value Source | Resolved To |
|----------|-------------|-------------|
| `{WORLD_DESCRIPTION}` | `templates/world-description.md` (static file, ~17 lines) | KortAI identity prose |
| `{CONVICTION_BRIEF}` | `{outputDir}/_tc-brief.md` (generated by TC derivation step, pre-pipeline) | 80-165 lines of creative direction |
| `{CONTENT_MARKDOWN}` | `config.contentPath` (user's input file) | Varies by content |
| `{FILE_ORDER_DESCRIPTION}` | Computed by rotation.ts | "OD-006 → OD-Spec → OD-Synth → OD-001 → OD-004 order (Rotation B, mid files promoted)" |
| `{CORPUS_FILES_CONCATENATED}` | 5 files loaded from disk, wrapped with labels | ~25,900 tokens |
| `{CASE_STUDY}` | CD-006 exploration HTML | ~387 lines, ~4,850 tokens |
| `{MECHANISM_CATALOG}` | `mechanism-catalog.md` | 1,878 lines, ~7,171 tokens |
| `{COMPONENTS_CSS}` | `components.css` | 944 lines |
| `{TOKENS_CSS}` | `tokens.css` | 183 lines |
| `{CONVICTION_LAYER}` | `conviction-layer.md` (accumulated) | 0-1,300 tokens (at pass 20: ~6-8 entries) |
| `{DISCOVERY_LOG}` | `discovery-log.md` (accumulated) | Growing (~2,000 tokens by pass 20) |
| `{VERIFIER_OBSERVATIONS_SECTION}` | EMPTY for pass 4 (not a post-verifier pass) | "" |
| `{PASS_CONTEXT}` | Computed per pass table | "New rotation: files that were last in previous passes are now first. Re-read the corpus material with fresh attention — the files now in primacy position may reveal integration opportunities you missed when they appeared later in the ordering." |
| `{PREVIOUS_SUBSET_SUMMARIES}` | Generated from S1 and S2 checkpoints | ~2 × 3 sentences = ~200 tokens |
| `{SEVEN_LENSES}` | Static from README ideology | ~20 lines |

**GAP-IS-08:** `{PREVIOUS_SUBSET_SUMMARIES}` appears in the plan's variable table (Section "Prompt Variable Reference") but does NOT appear in the doc 07 builder template text. The template text has no `{PREVIOUS_SUBSET_SUMMARIES}` placeholder. Also, doc 02's `constructPrompt()` does not have a section for cross-subset summaries.
**Proposed resolution:** Add `{PREVIOUS_SUBSET_SUMMARIES}` to the builder template (after the conviction layer section) and add `buildCrossSubsetSummaries(state)` to `constructPrompt()`. Without this, subsets are completely isolated — the S3 builder has no knowledge of what S1 and S2 established.

---

### Step 8: assembler.ts estimates tokens

**Formula:** `estimateTokens(text) = Math.ceil(text.length / 4)` (from utils.ts, ~4 chars per token)

**Token breakdown for S3 Pass 4:**

| Section | Est. Characters | Est. Tokens |
|---------|----------------|-------------|
| System context | ~1,500 | ~375 |
| World description | ~2,000 | ~500 |
| Conviction brief | ~5,000 | ~1,250 |
| Content markdown | varies | ~3,000 (typical) |
| Corpus files (S3) | ~103,600 | ~25,900 |
| Case study (CD-006) | ~19,400 | ~4,850 |
| Mechanism catalog | ~28,500 | ~7,171 |
| Components CSS | ~15,000 | ~3,750 |
| Design tokens | ~3,000 | ~750 |
| Conviction layer | ~2,000 | ~500 |
| Discovery log | ~3,000 | ~750 |
| Cross-subset summaries | ~800 | ~200 |
| Seven lenses | ~1,000 | ~250 |
| Task instructions | ~2,000 | ~500 |
| Template framing text | ~7,200 | ~1,800 |
| **TOTAL** | **~194,000** | **~51,546** |

**Token limit check:** 51,546 < 100,000 → PASS. No trimming needed.

**If >100K tokens (e.g., for S6 at ~63K corpus alone + infrastructure):**
1. Trim conviction layer first (remove oldest entries, save ~1,000 tokens)
2. Then trim "valley-position" corpus files (files in positions 3-4, the least-attended)
3. Log warning: `[WARN] Token estimate ${N} exceeds 100K. Trimmed conviction layer and valley files.`

**GAP-IS-09:** The plan says trim "valley-position corpus files" but does not specify HOW MUCH to trim. Remove entire files? Truncate them? If a valley file is 8,000 tokens, removing it entirely saves 8K but loses all its content for this pass. Doc 02 does not address this.
**Proposed resolution:** Truncate valley files to 50% of their original size (preserving the first half, which contains the file's thesis). Never remove entirely — partial exposure is better than zero. If still >100K after truncating all valley files, remove the discovery log entirely (it is supplementary, not critical).

---

### Step 9: claude-cli.ts constructs spawn args

**Module:** `src/agents/claude-cli.ts` → `spawnClaude()` (or `invokeClaudeP()` in doc 02)

**Exact flags for a Phase A builder pass:**
```typescript
const args = [
  '--print',              // Pipe mode (read stdin, write stdout)
  '--model', 'claude-opus-4-6',
  '--output-format', 'text',  // NOTE: Doc 02 says 'text', plan says 'json'
  '--max-turns', '1',         // Single turn, no tool calls
  '--allowedTools', '',       // No tools allowed
  '--no-session-persistence', // Fresh context (no session memory)
  '--verbose',                // Token usage in stderr
];
```

**Environment variables:**
```typescript
const env = {
  ...process.env,
  CLAUDECODE: undefined,           // BLOCKING FIX: unset to allow nested calls
  DISABLE_TELEMETRY: '1',         // Reduce token overhead
  DISABLE_AUTO_COMPACT: '1',      // No auto-compacting
  DISABLE_AUTOUPDATER: '1',       // No update checks
};
```

**Working directory:**
```typescript
const cwd = isolatedWorkdir;  // Directory with .git/HEAD to block CLAUDE.md traversal
```

**GAP-IS-10 (CRITICAL):** The plan says builder uses `--output-format json` (plan K04 resolution, plan pipeline diagram step 5). Doc 02's `invokeClaudeP()` says `--output-format text` with token parsing from stderr. These are contradictory.

With JSON: the response is structured `{ type, subtype, is_error, result, session_id, total_cost_usd, usage }`. HTML is extracted from `result` field. Cost/tokens are directly in the JSON.

With text: the response is raw text. HTML must be extracted by regex (doctype-to-/html). Token usage must be parsed from stderr `--verbose` output.

**Proposed resolution:** Use JSON format. Reasons:
1. Plan K04 explicitly resolves this contradiction in favor of JSON
2. JSON provides structured `is_error`, `total_cost_usd`, and `usage` fields
3. JSON provides `result` containing the LLM's text output (from which HTML is still extracted by regex, but with cleaner boundaries)
4. But NOTE: with `--output-format json` and `--max-turns 1`, the entire response is a single JSON object on stdout, not streaming text. The builder's HTML output + conviction/discovery markers are all inside `result`.

**GAP-IS-11:** The plan mentions `--setting-sources ""` as optional for preventing user settings loading. But it also says `--strict-mcp-config` for PA auditors. Neither flag appears in the builder invocation. Should builders also use `--strict-mcp-config`?
**Proposed resolution:** Builders use `--allowedTools ""` which is sufficient — no tools means no MCP access. `--strict-mcp-config` is only needed for PA auditors who DO have tool access and need to be blocked from Playwright specifically.

---

### Step 10: claude-cli.ts spawns process

**Module:** `src/agents/claude-cli.ts`

**Process spawn:**
```typescript
const proc = spawn('claude', args, {
  stdio: ['pipe', 'pipe', 'pipe'],
  timeout: config.passTimeoutMs,  // Default: 600,000ms (10 minutes)
  env,
  cwd: isolatedWorkdir,
});
```

**The prompt is piped via stdin:**
```typescript
proc.stdin.write(assembledPrompt);  // ~194,000 characters for this pass
proc.stdin.end();
```

**Output collection:**
```typescript
let stdout = '';
let stderr = '';
proc.stdout.on('data', (chunk) => { stdout += chunk.toString(); });
proc.stderr.on('data', (chunk) => { stderr += chunk.toString(); });
```

**Timeout handling:** `child_process.spawn` with `timeout` option sends SIGTERM after timeout. The orchestrator catches the `close` event with exit code.

**Error handling:**
- Exit code 0 → success
- Exit code non-zero → retry with exponential backoff
- Spawn error (e.g., `claude` not in PATH) → throw immediately, no retry
- Timeout → treat as non-zero exit, retry

**Retry logic:**
```
Attempt 1: immediate
Attempt 2: wait retryBackoff[0] = 5,000ms
Attempt 3: wait retryBackoff[1] = 15,000ms
(max 3 attempts = maxRetries + 1)
```

**GAP-IS-12:** Doc 02's `invokeClaudeP()` does NOT pass `timeout` to `spawn()`. The `timeout` option in `child_process.spawn()` options causes the process to be killed with SIGTERM. Doc 02 shows timeout as a concept but does not implement it in the spawn call. The plan specifies `passTimeoutMs: 600_000`.
**Proposed resolution:** Add timeout to spawn options. Also handle the edge case where SIGTERM doesn't kill the process within 5 seconds → send SIGKILL.

---

### Step 11: response-handler.ts parses JSON

**Module:** `src/agents/response-handler.ts` → `parseResponse()`

**With `--output-format json`, stdout contains:**
```json
{
  "type": "result",
  "subtype": "success",
  "is_error": false,
  "result": "<!DOCTYPE html>...(full HTML)...\n<!-- CONVICTION_ADDITION_START -->\n...\n<!-- CONVICTION_ADDITION_END -->\n<!-- DISCOVERY_LOG_START -->\n...\n<!-- DISCOVERY_LOG_END -->",
  "session_id": "...",
  "total_cost_usd": 1.18,
  "usage": {
    "input_tokens": 51546,
    "output_tokens": 21858,
    "cache_read_tokens": 12000,
    "cache_write_tokens": 0
  }
}
```

**Fields checked:**
1. `is_error` — ALWAYS checked first (can be true even with subtype "success")
2. `type` — must be "result"
3. `subtype` — "success" or one of the error subtypes
4. `result` — the LLM's actual text response (contains HTML + markers)
5. `total_cost_usd` — for cost tracking
6. `usage.input_tokens` / `usage.output_tokens` — for metrics

**Error checks:**
- If JSON parsing fails (truncated output) → retry
- If `is_error: true` → log error, check `subtype`, retry
- If `subtype` is `error_max_turns` → this should not happen (max-turns 1 with no tools)
- If `result` is empty → retry

**GAP-IS-13:** The plan notes the `--json-schema` gotcha: "With --json-schema, structured data is in `structured_output`, NOT `result`." But the plan does NOT use `--json-schema` for builders. This gotcha is informational. However, if anyone later adds `--json-schema` for structured builder output, this would break HTML extraction.
**Proposed resolution:** Add a comment in `response-handler.ts`: `// IMPORTANT: If --json-schema is ever added, check structured_output instead of result`.

---

### Step 12: response-handler.ts extracts HTML

**Module:** `src/agents/response-handler.ts` → `extractHTMLArtifact(result)`

**Input:** The `result` string from the JSON response.

**Extraction strategy (3 attempts, in order):**

1. **Fenced code block:** Regex `\`\`\`html\s*\n([\s\S]*?)\`\`\`` — if the builder wrapped HTML in markdown fences
2. **DOCTYPE to /html:** Regex `(<!DOCTYPE html[\s\S]*?<\/html>)` — most common case
3. **html to /html:** Regex `(<html[\s\S]*?<\/html>)` — fallback

If all 3 fail → return null → validation will flag this as `artifact-extraction` failure.

**GAP-IS-14:** Strategy 2's regex uses a non-greedy match `[\s\S]*?`. If the builder outputs text BEFORE the HTML (like a preamble "Here is the updated artifact:"), the regex correctly starts at `<!DOCTYPE`. But if the builder outputs text AFTER `</html>` (like the conviction/discovery markers), the non-greedy match will correctly end at the FIRST `</html>`. However, if the HTML itself contains a literal `</html>` in a code example (unlikely for this use case), the regex would truncate. This is acceptable risk.

**GAP-IS-15:** The conviction/discovery markers are OUTSIDE the HTML (after `</html>`). The extraction function extracts HTML first, then `extractAccumulation()` runs on the FULL `result` string (not just the extracted HTML). This means markers in both locations (inside or outside HTML) will be found. Good.

---

### Step 13: response-handler.ts extracts conviction

**Module:** `src/agents/response-handler.ts` → `extractAccumulation(result)`

**Markers searched:**
```
<!-- CONVICTION_ADDITION_START --> ... <!-- CONVICTION_ADDITION_END -->
<!-- DISCOVERY_LOG_START --> ... <!-- DISCOVERY_LOG_END -->
```

**Regex patterns:**
```javascript
/<!--\s*CONVICTION_ADDITION_START\s*-->([\s\S]*?)<!--\s*CONVICTION_ADDITION_END\s*-->/
/<!--\s*DISCOVERY_LOG_START\s*-->([\s\S]*?)<!--\s*DISCOVERY_LOG_END\s*-->/
```

**If missing:**
- Missing conviction → `warnings.push('No conviction addition found in builder output')` — non-fatal
- Missing discovery → `warnings.push('Discovery log entry missing from builder output')` — non-fatal
- State fields `hasConvictionAddition` and `hasDiscoveryAddition` set accordingly

**If found:**
- Conviction text is trimmed and formatted: `formatConvictionEntry(pass, text)` adds pass metadata
- Appended to `conviction-layer.md` via `appendToFile()`
- If conviction layer already has 10 entries → FIFO merge (oldest dropped)
- State `convictionEntryCount` incremented

**GAP-IS-16:** The conviction layer FIFO merge logic is specified in the plan but NOT implemented in doc 02's code. Doc 02's `extractAccumulation()` and `appendToFile()` simply append. The cap enforcement is completely missing from the implementation spec.
**Proposed resolution:** Add `enforceConvictionCap()` function that:
1. Reads conviction-layer.md
2. Counts entries (delimited by pass metadata headers)
3. If count > 10, removes oldest entries until count = 10
4. Writes back atomically
Called after every `appendToFile()` on conviction layer.

---

### Step 14: html-validator.ts validates

**Module:** `src/validation/html-validator.ts` → `validatePassOutput(output, pass)`

**Checks performed for a BUILDER pass:**

| Check | Test | Pass Condition |
|-------|------|----------------|
| `non-empty` | `output.length > 0` | Output is not empty |
| `minimum-length` | `output.length > 500` | Output is >500 chars |
| `html-present` | `extractHTMLArtifact(output) !== null` | HTML artifact found |
| `html-complete` | `artifact.includes('</html>') && artifact.includes('</body>')` | Not truncated |
| `container-width` | Regex `max-width:\s*(\d+)px` → value 940-960 | Container within range |

**Warnings (non-fatal):**
- Artifact < 2,000 chars → "Artifact is short — may be missing content"
- No conviction addition → "No conviction addition found"

**On validation FAILURE:**
- The pass is still recorded (with `validationPassed: false`)
- The artifact is NOT updated (extraction failure means nothing to write)
- State is saved with the failure recorded
- The pipeline does NOT retry on validation failure — it continues to the next pass

**GAP-IS-17:** Validation failure on a builder pass means the artifact was NOT updated. But the plan does NOT specify what happens to the conviction layer / discovery log if the HTML extraction failed but conviction markers were successfully extracted. Should the conviction be appended even if the HTML is bad?
**Proposed resolution:** Yes — conviction and discovery extraction is independent of HTML extraction. Even if the builder's HTML is malformed, their creative observations are still valuable for future passes. This is already the behavior in doc 02's code (Steps 6 and 7 are independent).

---

### Step 15: state-manager.ts updates state

**Module:** `src/state/state-manager.ts` → `saveState()`

**Fields that change after pass 20:**

| Field | Old Value | New Value |
|-------|-----------|-----------|
| `lastCompletedCorpusPass` | 19 | 20 |
| `lastSavedAt` | (previous) | (now) |
| `passRecords["20"]` | (absent) | (new PassRecord) |
| `currentArtifactHash` | SHA-256 of pass-19 artifact | SHA-256 of pass-20 artifact |
| `artifactBackups` | [...19 entries] | [...19 entries, "pass-020/artifact-backup.html"] |
| `convictionEntryCount` | N | N+1 (if conviction found) |
| `discoveryEntryCount` | N | N+1 (if discovery found) |
| `cost.totalEstimatedCostUsd` | X | X + 1.18 |
| `cost.totalInputTokens` | Y | Y + 51546 |
| `cost.totalOutputTokens` | Z | Z + 21858 |
| `cost.byRole.builder` | {...} | {costUsd: +1.18, passCount: +1, ...} |
| `cost.bySubset.S3` | {...} | {costUsd: +1.18, passCount: +1, ...} |
| `inFlightPass` | { globalPassNumber: 20, ... } | null |

**Atomic write protocol:**
```typescript
const tmpPath = statePath + '.tmp';
fs.writeFileSync(tmpPath, JSON.stringify(state, null, 2));
fs.renameSync(tmpPath, statePath);
```

`renameSync` is atomic on POSIX — the file is either the old version or the new version, never corrupt.

---

### Step 16: metrics.ts records

**Module:** `src/instrumentation/metrics.ts` → `recordPassMetrics()`

**What gets logged:**

1. **passes.jsonl** — one line appended:
```json
{"pass":20,"subset":"S3","subsetPass":4,"rotation":"B","role":"builder","startedAt":"...","completedAt":"...","durationMs":166000,"inputTokens":51546,"outputTokens":21858,"cacheReadTokens":12000,"costUsd":1.18,"cumulativeCostUsd":45.23,"validationPassed":true,"hasConviction":true,"hasDiscovery":true,"artifactSizeBefore":85000,"artifactSizeAfter":87500,"corpusFiles":["OD-006","OD-Spec","OD-Synth","OD-001","OD-004"]}
```

2. **cost.jsonl** — one line appended:
```json
{"ts":"...","pass":20,"role":"builder","subset":"S3","model":"claude-opus-4-6","inputTokens":51546,"outputTokens":21858,"cacheRead":12000,"cacheWrite":0,"costUsd":1.18,"cumulativeCostUsd":45.23}
```

3. **orchestrator.log** — summary line:
```
[INFO]  PASS 20 COMPLETE in 166.0s | 51,546 in / 21,858 out | $1.18 | validation: PASS
```

4. **decisions.jsonl** — entries for accept-output, extract-conviction, extract-discovery

---

### Step 17: checkpoint.ts — does anything happen at pass 4?

**Module:** `src/state/checkpoint.ts`

**NO.** Checkpoints happen at subset boundaries (after pass 8 of each subset). Pass 4 is mid-subset. No checkpoint is created.

However, the plan mentions **cross-subset verifier** "every 2 subsets." S3 is subset 3 — the cross-subset verifier would run after S2 (not S3) and after S4 (not S3). So no cross-subset verification here either.

**What DOES happen at the end of S3 (after pass 24):**
1. `createCheckpoint(state, '_checkpoints/S3/')` — copies artifact + state + metrics
2. A retrospective pass (not a builder or verifier — a separate `claude -p` call reviewing all verifier observations from S3)

**GAP-IS-18:** The plan mentions cross-subset verifier "every 2 subsets" but the specific implementation is ambiguous. Does it run after S2, S4, S6? Or after S2 and S4 only? Doc 02 mentions it in the loop: "Cross-subset verifier (every 2 subsets): check early patterns still visible." But there is no function specification for this verifier.
**Proposed resolution:** Run after S2, S4, S6 (every even subset). The cross-subset verifier is a `claude -p` call (verifier role) that receives the current artifact + summaries from all completed subsets. It checks: "Are patterns from S1-S2 still visible in the artifact?" This is NOT the same as the per-subset retrospective.

---

## SEQUENCE 2: Phase B, PA Cycle 1

### Context
- Phase A is complete: 56 corpus integration passes done
- State: `currentPhase` transitions from `'corpus-integration'` to `'pa-hardening'`
- The artifact has absorbed all 7 subsets across 3 rotations each
- This is the FIRST PA cycle

---

### Step B-0: Phase transition

**Module:** `src/orchestrator/pipeline.ts` → `runPipeline()`

**Trigger:** After `runCorpusIntegration()` completes (all 56 passes), the main loop checks:
```typescript
if (state.currentPhase === 'corpus-integration' && state.lastCompletedCorpusPass >= state.totalCorpusPasses) {
  state.currentPhase = 'pa-hardening';
  state.completedPACycles = 0;
  await saveState(config.outputDir, state);
  log.info('Phase A complete. Transitioning to Phase B: PA Hardening.');
}

if (state.currentPhase === 'pa-hardening') {
  state = await runPAHardening(config, state);
}
```

---

### Step B-1: Screenshot capture (deterministic, no LLM)

**Module:** `src/pa/screenshot-capture.ts` → `captureScreenshots()`

**Sub-steps:**

**B-1.1: Start HTTP server**
The artifact HTML must be served via HTTP because Playwright blocks `file://` protocol.
```typescript
const server = http.createServer((req, res) => {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});
server.listen(0);  // Random available port
const url = `http://localhost:${server.address().port}`;
```

**B-1.2: Launch Playwright browser**
```typescript
const browser = await chromium.launch({ headless: true });
```

**B-1.3: For each viewport (sequentially):**

| Viewport | Width | Height | Purpose |
|----------|-------|--------|---------|
| Desktop | 1440 | 900 | Primary evaluation viewport |
| Tablet landscape | 1024 | 768 | Responsive check |
| Tablet portrait | 768 | 1024 | Mobile/responsive check |

**GAP-IS-19:** The plan (PA viewports section) lists 3 viewports: 1440x900, 768x1024, 375x812. Doc 05 lists: 1440x900, 1024x768, 768x1024. Plan K07 resolves to: 1440x900, 768x1024, 375x812. But doc 05's implementation code has `PA_VIEWPORTS` with 1440x900, 1024x768, 768x1024 — NO 375px mobile viewport. THREE DIFFERENT VIEWPORT LISTS.
**Proposed resolution:** Use Plan K07 resolution: 1440x900, 768x1024, 375x812 (Desktop + Tablet + Mobile). This is the most comprehensive set and matches the plan's final resolution.

**B-1.4: Per-viewport capture:**
1. Create browser context with `deviceScaleFactor: 1` (DPR-1 to prevent Retina scaling issues)
2. Navigate to HTTP server URL, wait for `networkidle`
3. Wait for `document.fonts.ready` (critical for font-dependent layouts)
4. Inject animation disabling CSS: `animation: none !important; transition: none !important; opacity: 1 !important; visibility: visible !important; transform: none !important;`
5. Wait 200ms for style recalculation
6. **Cold-look screenshot:** Full viewport, no scroll — saves as `{vpDir}/cold-look.png`
7. **Scroll-through:** Calculate `stepHeight = floor(viewport.height * 0.8)`, `scrollCount = ceil(scrollHeight / stepHeight)`
   - For each scroll position: scroll to position, wait 100ms, screenshot → `scroll-01.png`, `scroll-02.png`, etc.
8. Close browser context

**B-1.5: Validate screenshots (GR-62 logic):**
- No more than 2 consecutive blank screenshots (<5KB file size)
- Blank screenshots do not exceed 20% of total per viewport
- If validation fails → `BLOCK_PA` gate verdict (cannot deploy auditors)

**B-1.6: Kill HTTP server**
```typescript
server.close();
```

**B-1.7: Save screenshot manifest:**
```typescript
const manifest: ScreenshotManifest = {
  viewports: [
    { width: 1440, height: 900, coldLookPath: '...', scrollPaths: [...], totalScreenshots: N },
    { width: 768, height: 1024, coldLookPath: '...', scrollPaths: [...], totalScreenshots: M },
    { width: 375, height: 812, coldLookPath: '...', scrollPaths: [...], totalScreenshots: P },
  ],
  validated: true,
};
```

**Expected output:** ~30-50 screenshots total (varies by page length). Desktop typically 8-15 scroll screenshots.

---

### Step B-2: Gate runner (deterministic Playwright JS, no LLM)

**Module:** `src/validation/gate-runner.ts` → `runGateRunner()`

**Sub-steps:**

**B-2.1: Load artifact HTML**
Read the HTML file from disk for text-only gates.

**B-2.2: Run text-only gates (no Playwright):**
- BV-08: Brief-output diff (if conviction brief available)
- GR-83: INTENT comment count (checks for `<!-- INTENT: ... -->` comments in HTML)
- GR-84: IMPROVEMENTS comment (checks for `<!-- IMPROVEMENTS: ... -->` comment)

**B-2.3: Navigate Playwright to artifact at 1440px:**
```typescript
await page.setViewportSize({ width: 1440, height: 900 });
const url = await serveHtml(htmlPath);
await page.goto(url, { waitUntil: 'networkidle' });
```

**B-2.4: Run core gates (GR-01 through GR-63):**
Gate-runner-browser.js is injected via `page.evaluate()`. This ~500+ line JavaScript file runs in the browser context and returns structured results. It checks:
- GR-01: Container width (940-960px)
- GR-02: Font loading
- GR-03: Color palette (warm: R >= G >= B)
- GR-04 through GR-10: Identity gates
- GR-11 through GR-16: Perception gates
- GR-17 through GR-22: Anti-pattern gates
- GR-23 through GR-44: Structural/compositional gates
- GR-45 through GR-63: Wave 2 gates

**B-2.5: DPR check (GR-61):**
`window.devicePixelRatio` must equal 1.

**B-2.6: Screenshot quality gate (GR-62):**
Checks saved screenshots against validation criteria.

**B-2.7: Visible content check (A-03):**
Confirms content is actually visible (not hidden by overflow, opacity, etc.)

**B-2.8: Responsive gates at 768px:**
```typescript
await page.setViewportSize({ width: 768, height: 1024 });
await page.waitForTimeout(300);
// Re-run core gates at this viewport
```

**B-2.9: Meta-verification (GR-48, GR-49):**
GR-48 checks gate coverage — did all gates actually run?
GR-49 checks gate consistency.

**B-2.10: Aggregate results:**
```typescript
return {
  results: [...allGateResults],
  gateCount: N,
  passed: countPassed,
  failed: countFailed,
  warnings: countWarnings,
  timestamp: new Date().toISOString(),
};
```

---

### Step B-3: Gate verdict (deterministic code, no LLM)

**Module:** `src/validation/gate-runner.ts` → `computeGateVerdict()`

**Precedence chain:**
1. GR-61 FAIL → `BLOCK_SCREENSHOTS`
2. GR-62 FAIL → `BLOCK_PA`
3. Any identity gate FAIL (GR-01 through GR-10 minus GR-07) → `RETHINK`
4. ≥3 recommended gates FAIL → `RETHINK`
5. Any perception gate FAIL (GR-11, GR-13-15, GR-18, GR-44, GR-60, GR-63-64) → `IMPROVE`
6. GR-48 FAIL → `INCOMPLETE`
7. Otherwise → `PROCEED_TO_PA`

**CRITICAL: Gate verdict does NOT stop PA from running.** Even RETHINK and IMPROVE still proceed to PA deployment. The verdict only informs the final routing decision (Step B-7).

---

### Step B-4: Deploy 8 PA auditors in parallel

**Module:** `src/pa/auditor-spawner.ts` → `runAllAuditors()`

**B-4.1: Construct 8 auditor prompts (A through H):**

For each auditor, `constructAuditorPrompt()` assembles:
1. System prompt (auditor letter, role, mandate, experiential pass protocol)
2. Screenshot manifest (paths to read via Read tool)
3. Assigned questions (filtered from pa-questions.md — ONLY their questions)
4. Guardrails file path
5. HTML artifact path (for code inspection if needed)
6. PA-05 cross-validation section (only for B, C, F, G)

**What auditors DO NOT receive (information isolation):**
- Conviction brief
- Builder context / reflections
- Gate results or scores
- Design system docs (mechanism catalog, etc.)
- World description
- Other auditor reports
- Content markdown

**B-4.2: Spawn 8 parallel `claude -p` processes:**
```typescript
const promises = AUDITOR_CONFIGS.slice(0, 8).map(auditor =>
  runPAAuditor(auditor, screenshotManifest, htmlPath, outputDir, config)
    .catch(async (err) => {
      log.warn(`Auditor ${auditor.letter} failed. Retrying...`);
      return runPAAuditor(auditor, screenshotManifest, htmlPath, outputDir, config);
    })
);
const results = await Promise.allSettled(promises);
```

**Per-auditor `claude -p` flags:**
```
--model claude-opus-4-6
--output-format text          (auditor writes report via Write tool)
--max-turns 30                (needs multiple tool calls for screenshots)
--allowedTools Read,Write,Glob
--no-session-persistence
--strict-mcp-config           (blocks Playwright MCP access)
```

**GAP-IS-20:** Doc 05 says auditors use `--output-format text` (they write their own report files). The plan's invocation table says auditors use JSON output. Doc 05's approach is correct because auditors need tool access (Read for screenshots, Write for report) which requires `--max-turns > 1` and text mode.
**Proposed resolution:** Auditors use `--output-format text` with `--max-turns 30`. The auditor writes its report to `{outputDir}/pa-auditor-{letter}.md` via the Write tool. The orchestrator then reads this file to confirm completion.

**B-4.3: Failure handling:**
- If 1 auditor fails after retry → proceed with 8/9 reports (log warning)
- If 2+ auditors fail → halt PA cycle, record error, attempt re-run of failed auditors
- Each auditor has ~10-15 minute timeout

**B-4.4: Validate reports:**
For each completed auditor report:
- File exists at expected path
- Parse completion manifest (table at end of report)
- Verify all assigned questions appear in manifest
- If questions are missing → log warning but don't fail

---

### Step B-5: Deploy integrative auditor (I) sequentially

**Module:** `src/pa/auditor-spawner.ts` → `runIntegrativeAuditor()`

**Dependency:** ALL 8 auditors (A-H) must complete first. The integrative auditor runs AFTER them, but does NOT read their reports.

**GAP-IS-21:** Doc 05 Section 5.1 says the Integrative Auditor "reads ALL screenshots but does NOT read the 9 auditor reports." But earlier the plan says Auditor I is "Cross-Page + Adversarial" with 6 assigned questions (PA-24 through PA-28, PA-48). These are CONTRADICTORY descriptions:
- Doc 05: Integrative = gestalt impression, no assigned questions, free-form
- Plan auditor assignment table: I has 6 specific questions
- Doc 05 Section 5.2: Integrative verifies A-H reports EXIST (structural dependency) but doesn't READ them

**Proposed resolution:** The Integrative Auditor (I) has a DUAL role:
1. It answers its 6 assigned questions (PA-24 through PA-28, PA-48) — making it like the other auditors
2. It ALSO provides a gestalt impression (free-form section)
3. It does NOT read other auditor reports (it maintains fresh-eyes independence)
4. The structural dependency (waiting for A-H) is about sequencing, not content sharing

**Integrative `claude -p` flags:**
```
--model claude-opus-4-6
--output-format text
--max-turns 20
--allowedTools Read,Write,Glob
--no-session-persistence
--strict-mcp-config
```

---

### Step B-6: Deploy weaver (sequential)

**Module:** `src/pa/weaver-spawner.ts` → `runWeaver()`

**Dependency:** ALL 9 auditors (A-I) must complete.

**Weaver inputs (EVERYTHING):**
1. All 9 PA auditor reports (full text, read via Read tool)
2. Integrative auditor report
3. `pa-weaver.md` protocol file (verdict protocol, calibration scales)
4. `pa-questions.md` FULL file (including Section 4 — Weaver-only content)
5. Gate results JSON (from Step B-2)
6. Screenshot file paths (for experiential anchor)
7. Previous cycle's weaver report (null for Cycle 1)
8. Artifact mode (APPLIED or COMPOSED from gate results)
9. The HTML artifact itself

**Weaver protocol (10-step sequence it must follow):**
1. EXPERIENTIAL ANCHOR — view screenshots BEFORE reading reports
2. MANIFEST VERIFICATION — all 9 auditors answered all questions
3. PA-05 SCORING — primary (Auditor A) + cross-validation from B, C, F, G
4. TIER 5 SCORING — 9 Tier 5 questions
5. COMBINED VERDICT — PA-05 × Tier 5 matrix
6. TOP-5 FIXES — classified MECHANICAL / STRUCTURAL / COMPOSITIONAL
7. FIX-TYPE CLASSIFICATION SUMMARY
8. EMOTIONAL ARC SYNTHESIS — 4 registers (surprise, delight, authority, earned closure), 1-10 each
9. SHIP DECISION — RELEASE / POLISH / IMPROVE / RETHINK
10. IMPROVEMENT VECTOR — single most elevating creative change

**Weaver `claude -p` flags:**
```
--model claude-opus-4-6
--output-format text
--max-turns 40        (many tool calls to read 10 reports + screenshots)
--allowedTools Read,Write,Glob
--no-session-persistence
--timeout doubled     (passTimeoutMs * 2 = 20 minutes)
```

**Weaver output:** Written to `{outputDir}/weaver-verdict-cycle-1.md`

**B-6.1: Parse WeaverVerdict from report text:**
```typescript
const verdict = parseWeaverVerdict(reportText);
// Extracts: pa05Score, tier5Score, shipDecision, top5Fixes, emotionalArc, etc.
// Uses regex patterns to find "PA-05: X.X/4", "Tier 5: N/9", "Ship Decision: RELEASE|POLISH|IMPROVE|RETHINK"
```

**B-6.2: Post-weaver gates (GR-64, GR-81):**
These run AFTER the weaver completes. GR-64 is a usability priority override that can downgrade RELEASE to IMPROVE.

**GAP-IS-22:** `parseWeaverVerdict()` uses regex on free-form markdown. If the weaver formats its PA-05 score differently (e.g., "PA-05 Score: 3.0 out of 4" instead of "PA-05: 3.0/4"), the regex may fail. Doc 05's regex: `/PA-05[:\s]+(\d+(?:\.\d+)?)\s*\/\s*4/i` would NOT match "3.0 out of 4".
**Proposed resolution:** Add multiple regex patterns for each field. Also add a fallback: if parsing fails, set `pa05Score = -1` and flag as `IMPROVE` (conservative default). The weaver template should include explicit formatting instructions: "Format your PA-05 score as: `PA-05: X.X/4`".

---

### Step B-7: Routing decision (deterministic code, no LLM)

**Module:** `src/orchestrator/phase-router.ts` → `computeRoutingDecision()`

**Inputs:**
1. Gate verdict from Step B-3 (e.g., `PROCEED_TO_PA`)
2. Weaver verdict from Step B-6 (e.g., `{ pa05Score: 2.5, shipDecision: 'IMPROVE', ... }`)
3. Cycle number: 1
4. Cycle history: [] (empty — first cycle)
5. Config: `{ minCycles: 2, maxCycles: 6, releaseThreshold: 3.5, rethinkThreshold: 2.5, maxStalledCycles: 2 }`

**Decision precedence (evaluated top to bottom):**

1. BLOCK_SCREENSHOTS / BLOCK_PA from gate verdict → ABORT (should not reach here)
2. RETHINK from gate or weaver → If cycle < maxCycles → REBUILD. If at maxCycles → ABORT.
3. **Stall check:** Look at last `maxStalledCycles` scores. If no improvement → force SHIP. *(Cycle 1 = first cycle, no history → stall check skipped)*
4. RELEASE from weaver → If cycle < minCycles (2) → force REFINE (even if RELEASE criteria met). If cycle >= minCycles → SHIP.
5. POLISH from weaver → REFINE with `polishMode: true`
6. Max cycles reached → force SHIP
7. **Default: IMPROVE from weaver → REFINE**

**For Cycle 1 with PA-05 = 2.5:**
- Gate verdict: PROCEED_TO_PA ✓
- Weaver: IMPROVE (PA-05 2.5 < 3.5 threshold, > 2.0 rethink floor)
- Cycle 1 < minCycles 2 → even if RELEASE, would force REFINE
- No stall (first cycle)
- **Decision: REFINE (action: 'REFINE', reason: 'IMPROVE — standard refinement path')**

---

### Step B-8: Refinement passes (IMPROVE builder)

**Module:** `src/pa/` → `executeRefinement()` calls `constructImproveBuilderPrompt()`

**B-8.1: IMPROVE builder prompt construction:**

The IMPROVE builder receives:
1. **Weaver's conviction report** (`weaver-verdict-cycle-1.md`) — artistic impressions, NOT gate scores
2. **The HTML artifact** — current state
3. **Conviction brief** — from TC derivation (creative soul)
4. **Reference files** — mechanism catalog, components CSS, design tokens

The IMPROVE builder does NOT receive:
- Gate results or scores
- PA question IDs
- Threshold numbers
- Fix checklists
- Other auditor reports

**B-8.2: IMPROVE `claude -p` flags:**
```
--model claude-opus-4-6
--output-format text
--max-turns 15
--allowedTools Read,Write
--no-session-persistence
```

**B-8.3: IMPROVE refinement loop (1-4 passes):**
```
For pass 1 to maxRefinementPasses (4):
  1. Construct IMPROVE prompt with Weaver report
  2. Spawn claude -p
  3. If exit code != 0 → stop refinement
  4. Validate output (HTML structure, container width)
  5. If validation fails → revert to previous, stop refinement
  6. Backup current artifact → update artifact
  7. Check if builder reported no [HIGH] improvements remaining → stop
  8. Continue to next pass
```

**B-8.4: After refinement:**
- The refined artifact becomes the current artifact
- State updated: new `currentArtifactHash`, `currentArtifactPath`

---

### Step B-9: PA Cycle record and loop

**Module:** `src/state/state-manager.ts` + `src/orchestrator/pipeline.ts`

**B-9.1: Record PA cycle:**
```typescript
state.paCycleRecords["1"] = {
  cycleNumber: 1,
  startedAt: cycleStartTime,
  completedAt: now,
  pa05Score: 2.5,
  tier5Score: 5,  // example
  verdict: 'IMPROVE',
  decision: 'REFINE',
  gateResultPath: '...',
  screenshotDir: '...',
  auditorReportPaths: [...],
  integrativeReportPath: '...',
  weaverReportPath: '...',
  refinementPassCount: 3,  // example: 3 IMPROVE passes ran
  cost: { inputTokens: ..., outputTokens: ..., estimatedCostUsd: ... },
};
state.completedPACycles = 1;
state.lastPAScore = 2.5;
```

**B-9.2: Checkpoint:**
```typescript
await createCheckpoint(state, '_checkpoints/PA-1/');
// Copies: artifact, state, screenshots, auditor reports, weaver verdict, gate results
```

**B-9.3: Loop decision:**
Since `decision = REFINE` (not SHIP or ABORT):
- Increment to Cycle 2
- Go back to Step B-1 (screenshot capture on the refined artifact)
- Cycle 2 will have:
  - Previous weaver report (Cycle 1's) available for Finding Status Map
  - Cycle history with one entry (for stall detection)
  - The refined artifact from IMPROVE passes

**B-9.4: Termination conditions checked each cycle:**
1. `pa05Score >= 3.5 AND tier5 >= 6/8 AND zero soul violations AND cycle >= 2` → SHIP
2. PA-05 stalled for 2 consecutive cycles → force SHIP
3. `cycle == maxCycles (6)` → force SHIP
4. `pa05Score < 2.5 after cycle >= 3` → ABORT (fundamental failure)

---

## Summary of Gaps Found

| Gap ID | Severity | Description | Proposed Resolution |
|--------|----------|-------------|---------------------|
| IS-01 | LOW | allPasses array indexing ambiguous | Use `allPasses[nextPassNumber - 1]` |
| IS-02 | HIGH | `inFlightPass` never set in doc 02 code | Add set/clear to `executePass()` before/after spawn |
| IS-03 | **CRITICAL** | Three different rotation formulas | Doc 02 `getShiftForRotation()` is canonical: B=`floor(N*2/5)`, C=`floor(N*4/5)` |
| IS-04 | MEDIUM | Template file vs inline assembly contradiction | Template file is canonical; inline assembly is implementation approach |
| IS-05 | MEDIUM | Case study (CD-006) missing from `buildReferenceSection()` | Add to reference section or separate calibration section |
| IS-06 | LOW | Conviction cap enforced at write, not read — verify | Confirm write-time enforcement |
| IS-07 | HIGH | Discovery log has NO cap, grows unboundedly | Add 30-entry cap or progressive summarization |
| IS-08 | HIGH | `{PREVIOUS_SUBSET_SUMMARIES}` in plan but missing from template and doc 02 | Add to builder template and `constructPrompt()` |
| IS-09 | MEDIUM | Token trimming strategy for valley files undefined | Truncate valley files to 50%, then drop discovery log |
| IS-10 | **CRITICAL** | `--output-format json` vs `text` unresolved for builders | JSON is canonical (Plan K04). Implement JSON parsing. |
| IS-11 | LOW | `--strict-mcp-config` scope unclear | Only needed for agents with tool access |
| IS-12 | MEDIUM | Timeout not implemented in `spawn()` call | Add timeout + SIGKILL fallback |
| IS-13 | LOW | `--json-schema` gotcha informational | Add code comment |
| IS-14 | LOW | Regex edge case with nested `</html>` | Acceptable risk |
| IS-15 | LOW | Conviction markers found in full result, not just HTML | Correct behavior, no fix needed |
| IS-16 | HIGH | Conviction cap FIFO merge logic not implemented in doc 02 | Add `enforceConvictionCap()` function |
| IS-17 | LOW | Conviction extracted even on HTML validation failure | Correct behavior, no fix needed |
| IS-18 | MEDIUM | Cross-subset verifier specification incomplete | Run after S2, S4, S6; separate from per-subset retrospective |
| IS-19 | MEDIUM | Three different viewport lists | Plan K07 resolution canonical: 1440x900, 768x1024, 375x812 |
| IS-20 | HIGH | Auditor output format: text (doc 05) vs JSON (plan) | Text is correct — auditors need tool access |
| IS-21 | HIGH | Integrative auditor role contradicted (gestalt vs assigned questions) | Dual role: 6 assigned questions + gestalt impression section |
| IS-22 | MEDIUM | Weaver verdict parsing fragile (regex on free-form markdown) | Multiple regex fallbacks + explicit format instructions in template |

### Gap Severity Summary
- **CRITICAL:** 2 (IS-03 rotation formula, IS-10 output format)
- **HIGH:** 6 (IS-02 inFlightPass, IS-07 discovery cap, IS-08 cross-subset summaries, IS-16 conviction cap, IS-20 auditor format, IS-21 integrative role)
- **MEDIUM:** 6
- **LOW:** 8

### Cross-Reference with Existing Gaps
- IS-03 = K08 (rotation formula) — plan resolved it but the resolution contradicts the plan's own "Carousel Rotation" section formula
- IS-10 = K04 (output format) — plan resolved it as JSON but doc 02 implements text
- IS-19 = K07 (viewports) — plan resolved it as 3 viewports but doc 05 implements 3 different ones
- IS-05 relates to GAP-H02 (builder template variables)
- IS-07 relates to GAP-C02 (conviction layer growth) — discovery log has the SAME problem but no resolution
- IS-08 relates to GAP-D02 (cross-subset context) — explicitly specified as needed but never implemented
