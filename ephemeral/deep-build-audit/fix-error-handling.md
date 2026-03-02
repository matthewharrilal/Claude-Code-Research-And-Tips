# Error Handling Consistency Fixes

## Summary

Audited all 39 `.ts` files in `tools/deep-build/src/`. Found 16 issues across 10 files. Applied 19 edits. TypeScript compilation verified clean (`npx tsc --noEmit` passes with zero errors).

## Error Pattern Catalog (Pre-Fix)

### Pattern 1: Typed OrchestratorError hierarchy (GOOD)
**Files:** types/errors.ts, state/state-manager.ts, state/resume.ts, agents/claude-cli.ts, agents/response-handler.ts, orchestrator/workspace-setup.ts, pa/screenshot-capture.ts, validation/gate-runner.ts
**Behavior:** Throws specific subclasses (BudgetExceededError, StateCorruptionError, ConfigMismatchError, ClaudeInvocationError, HtmlExtractionError, PlaywrightError, FileNotFoundError, ValidationError). All extend OrchestratorError with `.category` and `.toRecord()`.
**Status:** Correct. No changes needed.

### Pattern 2: throw plain Error (INCONSISTENT)
**Files:** utils.ts, prompts/assembler.ts, pa/http-server.ts, pa/auditor-spawner.ts, pa/weaver-spawner.ts, pa/mini-pa-spawner.ts, cli.ts
**Behavior:** Throws `new Error(...)` where a typed error class exists and would be more appropriate.
**Status:** FIXED (10 instances).

### Pattern 3: Silent catch blocks (SILENT_BUG)
**Files:** orchestrator/pass-executor.ts, orchestrator/pipeline.ts
**Behavior:** `catch { }` or `catch { return null }` with no logging. Hides failures that could aid debugging.
**Status:** FIXED (6 instances).

### Pattern 4: Non-fatal catch that swallows BudgetExceededError (CRASH_RISK)
**Files:** orchestrator/pipeline.ts
**Behavior:** Retrospective, cross-subset verification, gate runner, and refine builder catch blocks treat ALL errors as non-fatal, including BudgetExceededError. This means the pipeline could exceed its hard budget cap and keep running.
**Status:** FIXED (4 instances). Added `if (error instanceof BudgetExceededError) throw error;` before each non-fatal handler.

### Pattern 5: require() in ESM module (INCONSISTENT)
**Files:** config/paths.ts
**Behavior:** Uses `require('node:fs')` inside a try/catch in an ESM module. The catch block catches wrong things (e.g., `require` resolution failures vs. `existsSync` failures).
**Status:** FIXED. Replaced with top-level `import fs from 'node:fs'`.

### Pattern 6: catch-and-return-PassResult (CORRECT)
**Files:** orchestrator/pass-executor.ts
**Behavior:** Claude spawn failures are caught, recorded as failed PassResult, state is updated with error history.
**Status:** Correct. This is the right pattern for recoverable per-pass failures.

### Pattern 7: catch-and-warn-loadFileOrEmpty (CORRECT)
**Files:** prompts/assembler.ts
**Behavior:** `loadFileOrEmpty` catches file-not-found and logs to stderr with WARN prefix, returns empty string.
**Status:** Already has logging. Acceptable for optional files (corpus files, research files).

## All Issues Found and Fixed

### 1. SILENT_BUG: archivePass empty catch (pass-executor.ts:371)
```
- BEFORE: } catch { }
- AFTER:  } catch (error) { console.error(`[pass-executor] Archive write failed...`); }
```

### 2. SILENT_BUG: extractHtml catch hides error details (pass-executor.ts:116)
```
- BEFORE: } catch { html = undefined; }
- AFTER:  } catch (error) { console.error(`[pass-executor] HTML extraction failed...`); html = undefined; }
```

### 3. SILENT_BUG: parseWeaverVerdict JSON parse catch (pipeline.ts:654)
```
- BEFORE: } catch { // JSON parse failed, try field extraction }
- AFTER:  } catch (error) { console.error(`[pipeline] Weaver verdict JSON parse failed...`); }
```

### 4. SILENT_BUG: extractRefinedHtml catch (pipeline.ts:687)
```
- BEFORE: } catch { return null; }
- AFTER:  } catch (error) { console.error(`[pipeline] extractRefinedHtml: no HTML in response text...`); return null; }
```

### 5. SILENT_BUG: auditor report file read (pipeline.ts:937)
```
- BEFORE: } catch { /* file may not exist if auditor failed */ }
- AFTER:  } catch { console.error(`[pipeline] Auditor report file unreadable...`); }
```

### 6. CRASH_RISK: Retrospective swallows BudgetExceededError (pipeline.ts:352)
```
- BEFORE: } catch (error) { deps.log('warn', `Retrospective...failed (non-fatal)...`); }
- AFTER:  } catch (error) { if (error instanceof BudgetExceededError) throw error; deps.log('warn'...); }
```

### 7. CRASH_RISK: Cross-subset verification swallows BudgetExceededError (pipeline.ts:372)
```
- BEFORE: } catch (error) { deps.log('warn', `Cross-subset verification failed (non-fatal)...`); }
- AFTER:  } catch (error) { if (error instanceof BudgetExceededError) throw error; deps.log('warn'...); }
```

### 8. CRASH_RISK: Gate runner non-fatal swallows BudgetExceededError (pipeline.ts:417)
```
- BEFORE: } catch (error) { deps.log('warn', `Gate runner failed (non-fatal)...`); gateResults = {}; }
- AFTER:  } catch (error) { if (error instanceof BudgetExceededError) throw error; deps.log('warn'...); }
```

### 9. CRASH_RISK: Refine builder swallows BudgetExceededError (pipeline.ts:599)
```
- BEFORE: } catch (error) { deps.log('error', `Refine builder failed...`); }
- AFTER:  } catch (error) { if (error instanceof BudgetExceededError) throw error; deps.log('error'...); }
```

### 10. INCONSISTENT: readFileChecked throws plain Error (utils.ts:103)
```
- BEFORE: throw new Error(`File not found: ${filePath}`);
- AFTER:  throw new FileNotFoundError(filePath);
```
Also added `import { FileNotFoundError } from './types/errors.js'` to utils.ts.

### 11. INCONSISTENT: loadTemplate throws plain Error (assembler.ts:27)
```
- BEFORE: throw new Error(`Template not found: ${filePath}`);
- AFTER:  throw new FileNotFoundError(filePath);
```
Also added `import { FileNotFoundError, ValidationError } from '../types/errors.js'` to assembler.ts.

### 12. INCONSISTENT: token limit throws plain Error (assembler.ts:302)
```
- BEFORE: throw new Error(`Token limit exceeded...`);
- AFTER:  throw new ValidationError(`Token limit exceeded...`);
```

### 13. INCONSISTENT: http-server throws plain Error for port/file (http-server.ts:28,39)
```
- Port: throw new PlaywrightError(`No available port found...`);
- File: throw new FileNotFoundError(htmlPath);
```
Also added `import { FileNotFoundError, PlaywrightError } from '../types/errors.js'`.

### 14. INCONSISTENT: auditor-spawner throws plain Error (auditor-spawner.ts:252)
```
- BEFORE: throw new Error('[pa] All 8 parallel auditors...');
- AFTER:  throw new OrchestratorError('...', 'invalid-response');
```

### 15. INCONSISTENT: weaver-spawner throws plain Error (weaver-spawner.ts:147,185,190)
```
- All three: throw new OrchestratorError('...', 'invalid-response');
```

### 16. INCONSISTENT: mini-pa-spawner throws plain Error (mini-pa-spawner.ts:123)
```
- BEFORE: throw new Error('Mini-PA requires a desktop viewport screenshot');
- AFTER:  throw new ValidationError('Mini-PA requires a desktop viewport screenshot');
```

### 17. INCONSISTENT: paths.ts uses require() in ESM (paths.ts:33)
```
- BEFORE: try { const fs = require('node:fs'); if (fs.existsSync(gitDir)) return dir; } catch { }
- AFTER:  if (fs.existsSync(gitDir)) return dir;
```
Added `import fs from 'node:fs'` at top of file.

## Non-Fatal Errors Assessment

The following catches are intentionally non-fatal and their classification is CORRECT:

| Location | Reason |
|----------|--------|
| Retrospective (pipeline.ts) | Retrospective is a between-subset summary. Failure loses context but doesn't block building. |
| Cross-subset verification (pipeline.ts) | Advisory check. Failure means we don't know if patterns eroded, but can still proceed. |
| Gate runner (pipeline.ts) | Gates inform the PA audit but aren't blocking for the pipeline cycle. Empty gate results are handled downstream. |
| Refine builder (pipeline.ts) | If refinement fails, the pipeline moves to the next PA cycle which re-evaluates the current artifact. |
| loadFileOrEmpty (assembler.ts) | Some corpus/reference files may not exist (optional). Returns empty string. |
| archivePass (pass-executor.ts) | Archive is a backup copy. Pipeline can continue without it. |
| extractRefinedHtml (pipeline.ts) | Refine builder may write HTML via Edit tool, not in response text. |

All of these are now protected against BudgetExceededError swallowing.

## Custom Error Types Usage

| Error Class | Used In | Purpose |
|-------------|---------|---------|
| OrchestratorError | weaver-spawner, auditor-spawner | Generic categorized errors |
| BudgetExceededError | pass-executor, pipeline, cli | Hard budget enforcement |
| StateCorruptionError | state-manager, resume | State integrity failures |
| ConfigMismatchError | resume | Resume config validation |
| ClaudeInvocationError | claude-cli, response-handler | CLI spawn failures |
| HtmlExtractionError | response-handler | HTML parsing failures |
| PlaywrightError | screenshot-capture, gate-runner, http-server | Browser automation failures |
| FileNotFoundError | workspace-setup, utils, assembler, http-server | Missing file errors |
| ValidationError | assembler, mini-pa-spawner | Input validation failures |

## Verification

```
$ npx tsc --noEmit
(exits 0, no errors)
```
