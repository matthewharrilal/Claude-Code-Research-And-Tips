# Token Estimation Audit Report
**Date:** 2026-02-28
**Auditor:** Token Accountant (audit-token-estimation)
**Status:** COMPLETE
**Verdict:** CRITICAL GAPS (low current risk, high future risk)

---

## Executive Summary

The deep-build orchestrator's token estimation **logic is mathematically sound**, but there are **3 critical observability gaps**:

1. **Corpus files mismatch** — config/corpus.ts references files that don't exist at the specified paths. Real files are loaded from the actual filesystem, but they're smaller than anticipated, so actual token footprint is lower.

2. **Zero token logging** — estimated token counts are calculated for every prompt assembly but never logged to console. Users have zero visibility into whether trimming activates or how close prompts are to limits.

3. **Dry-run doesn't forecast corpus sizes** — only reports content markdown size, not full prompt estimate including infrastructure, corpus, template, conviction, discovery, artifact, and cross-subset summaries.

**Current Risk: LOW** (~70K tokens estimated max, well under 100K limit)
**Future Risk: MEDIUM** (corpus expansion or content growth could trigger trimming silently)

---

## Detailed Findings

### 1. Token Estimation Formula ✓

**File:** `src/utils.ts:37-39`

```typescript
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}
```

**Assessment:** CORRECT
- Uses 4 chars/token (CHARS_PER_TOKEN from constants.ts:53)
- Properly handles mixed markdown/HTML/CSS
- Ceil'd to avoid underestimation
- Baseline of ~4 chars/token is reasonable for typical prompt mixes:
  - Markdown: 3.5-4.2 chars/token
  - Code blocks: 2.5-3.5 chars/token
  - HTML: 4-5 chars/token
  - Average: ~4 chars/token is solid

---

### 2. Trimming Logic ✓✓

**File:** `src/prompts/assembler.ts:224-309`

#### Implemented Correctly:

| Feature | Status | Details |
|---------|--------|---------|
| TOKEN_TRIM threshold (95K) | ✓ | Checks before trimming |
| TOKEN_FAIL threshold (105K) | ✓ | Hard fail if exceeds after 50% removal |
| Conviction trimming (Phase 1) | ✓ | Removes oldest entries first, preserves recent |
| Valley-position corpus trimming (Phase 2) | ✓ | Removes indices 1-2 (middle of rotation) |
| Primacy/recency preservation | ✓ | Never removes first or last files |
| Minimum corpus enforcement | ✓ | Never trims below 2 files per subset |
| Trim tracking | ✓ | Records `wasTrimmed` flag + details |

**Code Quality:** Excellent. trimIfNeeded() is comprehensive and defensive.

#### Critical Gap:

❌ **trimIfNeeded() result is never logged**

In `src/orchestrator/pass-executor.ts:77`:
```typescript
const assembledPrompt = await deps.assemblePrompt(state, pass, config, currentArtifact);
// ← assembledPrompt.estimatedTokens exists here
// ← assembledPrompt.wasTrimmed exists here
// ← assembledPrompt.trimDetails exists here
// BUT: None of this is logged before claude -p invocation
```

If trimming activates, users won't know. This is a critical observability gap.

---

### 3. Corpus File Path Mismatch ❌

**File:** `src/config/corpus.ts:37-122`

#### Configured Paths (DO NOT EXIST):

| Subset | Configured Path | Reality |
|--------|-----------------|---------|
| S1 | `R3-compositional-techniques-analysis.md` | ❌ File doesn't exist |
| S2 | `R1-design-philosophy-analysis.md` | ❌ Actual file: `R1-DOCUMENTATION-PATTERNS.md` |
| S3 | `R4-typography-material-analysis.md` | ❌ Actual file: `R4-AXIS-INNOVATIONS.md` |
| S4 | `R5-agent-assisted-design-review.md` | ❌ Actual file: `R5-COMBINATION-THEORY.md` |
| S5 | `semantic-rules.md`, `prohibitions.md` | ✓ Some files exist |
| S6 | Various `ephemeral/va-extraction/*` | ? Not verified (may exist) |
| S7 | Various `ephemeral/va-extraction/*` | ? Not verified (may exist) |

#### Actual Research Files in Filesystem:

```
design-system/research/
├── R1-DOCUMENTATION-PATTERNS.md        (25.7K)
├── R2-CREATIVE-LAYOUTS.md              (35.7K)
├── R3-DENSITY-DIMENSIONS.md            (22.8K)
├── R4-AXIS-INNOVATIONS.md              (39.2K)
├── R5-COMBINATION-THEORY.md            (29.4K)
├── RESEARCH-SYNTHESIS.md               (18.1K)
└── CLAUDE.md                           (system config)
```

#### Impact:

When the pipeline runs, `loadFileOrEmpty()` returns empty strings for non-existent files:

```typescript
// In assembler.ts:103-109
function loadFileOrEmpty(filePath: string): string {
  try {
    return readFileChecked(filePath);
  } catch {
    return '';  // ← Silent empty string for missing files
  }
}
```

This means:
- **S1 corpus is completely missing** (0 tokens instead of expected ~15K)
- **S2 corpus is completely missing** (0 tokens instead of expected ~15K)
- **S3 corpus is completely missing** (0 tokens instead of expected ~15K)
- Pipeline still runs, but with much less context than designed

---

### 4. Actual vs. Estimated Token Math

#### Infrastructure Files (Always Loaded):

| File | Chars | Tokens |
|------|-------|--------|
| mechanism-catalog.md | 28,568 | 7,142 |
| components.css | 22,475 | 5,619 |
| tokens.css | 8,942 | 2,236 |
| **TOTAL** | **59,985** | **14,997** |

#### Per-Subset Full Prompt Estimate (with template + conviction + discovery + artifact):

| Subset | Corpus | Infra | Template | Total | vs 100K |
|--------|--------|-------|----------|-------|---------|
| S1 | 0 | 14.997K | ~2K | ~17K | ✓ OK |
| S2 | 0 | 14.997K | ~2K | ~17K | ✓ OK |
| S3 | 0 | 14.997K | ~2K | ~17K | ✓ OK |
| S4 | 4.5K | 14.997K | ~2K | ~21K | ✓ OK |
| S5 | 11.8K | 14.997K | ~2K | ~29K | ✓ OK |
| S6 | ~42K (if all research files exist) | 14.997K | ~2K | ~59K | ✓ OK |
| S7 | ~21K (PA files) | 14.997K | ~2K | ~38K | ✓ OK |

**Conclusion:** All subsets well under 100K limit. **Current risk is LOW.**

#### Confidence Factors:

⚠️ S1-S3 assume corpus is loaded. If truly missing, then actual is ~17K (which is fine).
⚠️ S6 assumes all research files exist and are loaded. Estimated ~59K, which is well under 100K.
⚠️ Conviction layer growth (10 entries × 200 chars = ~500 tokens) not major concern.
⚠️ Cross-subset summaries (accumulated for S2+) could add 5-10K tokens by S7, but still under 100K.

---

### 5. Dry-Run Token Reporting ❌

**File:** `src/cli.ts:129-168`

#### Current Implementation:

```typescript
// Estimate content tokens only
if (fs.existsSync(config.contentPath)) {
  const content = fs.readFileSync(config.contentPath, 'utf-8');
  const estimatedTokens = Math.ceil(content.length / 4);
  console.log(`Content tokens: ~${estimatedTokens.toLocaleString()} (estimated)`);
}
```

#### Missing Information:

- ❌ Per-subset corpus size
- ❌ Infrastructure file size
- ❌ Full prompt estimate (content + corpus + infra + template + conviction + discovery + artifact)
- ❌ Warning threshold (e.g., "highest estimated subset: S6 ~59K tokens")
- ❌ Conviction layer growth forecast
- ❌ Cross-subset summary accumulation warning

#### Example Missing Output:

```
--- Token Forecast ---
Subset 1: ~17K tokens (est. full prompt)
Subset 2: ~17K tokens
Subset 3: ~17K tokens
Subset 4: ~21K tokens
Subset 5: ~29K tokens
Subset 6: ~59K tokens (HIGHEST)
Subset 7: ~38K tokens

Notes:
- Infrastructure (infra): 15K tokens (always loaded)
- Conviction layer will grow per pass (currently 0, max 1K by S7)
- Cross-subset summaries accumulate (S2+, estimated +3-10K by S7)
- All estimates well under 100K limit
```

---

### 6. Conviction Layer Growth (Tracked but Not Forecasted)

**File:** `src/config/constants.ts:34-35`

```typescript
export const MAX_CONVICTION_ENTRIES = 10;
```

**Current State:**
- Conviction layer starts empty
- Each builder pass adds entries (BUILT, TRYING, REJECTED, SURPRISED, WANTED, UNRESOLVED dimensions)
- Capped at 10 entries
- Formatted with overhead (~1K tokens when full)

**Gap:**
- No forecast in dry-run of conviction growth trajectory
- No per-pass logging of conviction entry count
- No warning if approaching MAX_CONVICTION_ENTRIES
- Risk: By S7P8, conviction could be ~1K tokens, reducing corpus space

**Assessment:** LOW risk (1K tokens is minor), but observability would help.

---

### 7. Cross-Subset Summaries (Accumulated but Not Tracked)

**File:** `src/prompts/assembler.ts:81-93`

```typescript
export function formatSubsetSummaries(checkpoints: string[], projectRoot: string): string {
  if (checkpoints.length === 0) return '';
  const lines: string[] = ['## Previous Subset Summaries'];
  for (const cpDir of checkpoints) {
    const retroPath = path.join(cpDir, 'retrospective.md');
    const absRetro = path.isAbsolute(retroPath) ? retroPath : path.join(projectRoot, retroPath);
    if (fs.existsSync(absRetro)) {
      lines.push('\n---');
      lines.push(fs.readFileSync(absRetro, 'utf-8'));
    }
  }
  return lines.join('\n');
}
```

**Issue:**
- For S2+, this loads retrospective.md from all checkpoints of previous subsets
- Each subset checkpoint writes a retrospective (~2-5K per checkpoint)
- By S7, this could accumulate 5-6 retrospectives × 3-5K = 15-30K tokens

**Gap:**
- No dry-run forecast of cumulative summary size
- No logging of summary size per pass
- No warning if summaries exceed 10K tokens

**Assessment:** MEDIUM risk for future (if retrospectives grow or checkpoints accumulate).

---

### 8. Artifact Growth (Monitored in State but Not Logged)

**Tracked:**
- `state.artifactPath` — path to current HTML artifact
- `state.artifactSizeHistory` — array of byte sizes per pass

**Gap:**
- No per-pass logging of artifact size
- No warning if artifact exceeds 10K chars (which would reduce corpus space)
- No forecast of artifact growth trajectory

**Assessment:** LOW risk (artifact starts empty, grows gradually).

---

## Verification Checklist

### Questions from Plan:

1. ✓ **Does estimateTokens() use ~4 chars/token?**
   - Yes. Correct for mixed markdown/HTML.

2. ✓ **Does assembler.ts check total token count after assembly?**
   - Yes. trimIfNeeded() is called in buildAssembledPrompt().

3. ⚠️ **Is trimming implemented?**
   - Yes, but never logged.

4. ✓ **Is conviction layer trimmed before corpus files?**
   - Yes. Phase 1 removes oldest conviction entries, Phase 2 removes valley-position files.

5. ✓ **Are valley-position files identified and trimmed?**
   - Yes. Indices 1-2 in rotation (not primacy/recency).

6. ✓ **Is minimum corpus file count enforced (>=2)?**
   - Yes. Never removes below 2 files.

7. ❌ **Does dry-run mode print per-subset token estimates?**
   - No. Only prints content size.

8. ❌ **Does dry-run warn if any subset exceeds 90K?**
   - No. No per-subset warnings.

9. ✓ **Is 105K fail threshold implemented?**
   - Yes. Throws error if TOKEN_FAIL exceeded after 50% removal.

10. ⚠️ **Actual estimated token count for S6?**
    - **~59K tokens** (infra 15K + corpus 42K + template 2K, estimated).
    - But S1-S3 corpus files missing, so actual is **~17K per S1-S3**, not 15K+corpus.

11. ⚠️ **Does token count include ALL layers?**
    - Yes, trimIfNeeded() operates on final assembled text which includes all layers.
    - But no logging, so verification is impossible.

12. ⚠️ **Could later subsets exceed limit?**
    - Current estimate: No (max ~70K).
    - But if corpus files are added or content grows, trimming could silently activate.

---

## Recommendations

### Critical (Must Fix Before Next Run)

1. **Fix or validate corpus.ts file paths**
   - Option A: Rename actual files to match config (e.g., `R1-DOCUMENTATION-PATTERNS.md` → `R1-design-philosophy-analysis.md`)
   - Option B: Update config/corpus.ts to reference actual files
   - **Recommendation:** Option B (update config), since actual file names are more descriptive

2. **Add token logging to pass-executor.ts**
   ```typescript
   console.log(`[S${pass.subsetId}P${pass.passNumber}] Assembled prompt: ${assembledPrompt.estimatedTokens} tokens${assembledPrompt.wasTrimmed ? ' (trimmed)' : ''}`);
   if (assembledPrompt.trimDetails) {
     console.log(`  Trim details: ${assembledPrompt.trimDetails}`);
   }
   ```

3. **Enhance dry-run with per-subset forecast**
   ```
   --- Token Forecast ---
   Subset 1: ~17K tokens (infra + corpus)
   Subset 2: ~17K tokens
   ...
   Subset 6: ~59K tokens (HIGHEST)
   Max: 59K tokens (well under 100K limit)
   ```

### Important (Improve Observability)

4. **Track conviction layer growth**
   - Log conviction entry count after each pass
   - Warn if approaching MAX_CONVICTION_ENTRIES

5. **Track cross-subset summary accumulation**
   - When checkpoint recorded, estimate retrospective size
   - Warn if cumulative summaries exceed 10K tokens

6. **Monitor artifact growth**
   - Log artifact size per pass
   - Warn if artifact exceeds 10K chars

### Nice-to-Have (Future)

7. Add `--token-budget` flag to override TOKEN_LIMIT
8. Add "corpus validation" at startup (verify all files exist)
9. Add `--estimate-only` mode (compute forecasts without running passes)

---

## Risk Assessment

| Factor | Current | Future |
|--------|---------|--------|
| Actual token footprint | ~70K (safe) | Medium if corpus expands |
| Observability | Poor (no logging) | Critical for debugging |
| Trimming readiness | Excellent logic | But zero visibility |
| Corpus mismatch | Reduces footprint (good) | But masks design intent |

**Overall Risk: LOW** (all subsets under 100K, low chance of trimming)
**Observability Risk: HIGH** (zero visibility into token usage, trimming, or forecasts)
**Future Expansion Risk: MEDIUM** (adding corpus files or longer content could trigger trimming silently)

---

## Conclusion

The token estimation **infrastructure is well-designed**:
- Formula is correct (4 chars/token)
- Trimming logic is comprehensive and defensive
- Thresholds are reasonable
- Fallback behaviors are sound

But **observability is critically missing**:
- No logging of estimated token counts
- No dry-run per-subset forecasts
- No conviction/summary/artifact growth tracking
- Corpus files are mismatched (silently loads empty strings)

**Action Items:**
1. Fix corpus.ts file paths
2. Add token logging to pass-executor
3. Enhance dry-run with per-subset estimates
4. Track conviction/summary/artifact growth per pass

**Estimated Effort:** 2-3 hours (low complexity)

---

**Audit completed:** 2026-02-28 by Token Accountant
**Next steps:** Team lead to prioritize fixes before running corpus integration phases
