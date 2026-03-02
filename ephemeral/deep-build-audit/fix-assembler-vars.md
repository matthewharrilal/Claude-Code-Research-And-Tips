# Assembler Variable Fixes Report

**File:** `tools/deep-build/src/prompts/assembler.ts`
**Date:** 2026-02-28
**Status:** 3 bugs FIXED, 3 issues ANALYZED (no code change needed)
**Verification:** `npx tsc --noEmit` passes cleanly after all edits

---

## Issue 1: CURRENT_ARTIFACT path-vs-content bug [FIXED]

**Location:** Lines 438 (PA auditor) and 470 (integrative auditor)

**Bug:** Both `assemblePaAuditorPrompt` and `assemblePaIntegrativePrompt` set:
```ts
vars.set('CURRENT_ARTIFACT', htmlPath);  // passes FILE PATH string
```
The template expects the HTML content to be substituted, not a file path. Compare with `assembleWeaverPrompt` (line 501) and `assembleRefineBuilderPrompt` (line 518) which correctly do:
```ts
vars.set('CURRENT_ARTIFACT', loadFileOrEmpty(htmlPath));
```

**Failure scenario:** PA auditor and integrative auditor templates that reference `{CURRENT_ARTIFACT}` receive a string like `/path/to/artifact.html` instead of the actual HTML content. The auditor sees a path string where it expects to read and analyze HTML, making HTML-based audit questions unanswerable from the template variable alone. In practice the auditor-spawner's `buildAuditorPrompt` builds its OWN prompt inline (not via assembler), so it reads the file directly -- but the assembler function is the one used when the template-based path is taken, and it was broken.

**Fix:** Changed both lines to `loadFileOrEmpty(htmlPath)`.

---

## Issue 2: loadFileOrEmpty silent failure [FIXED]

**Location:** Line 103-109

**Bug:** When `readFileChecked` throws (file doesn't exist), the catch block returned empty string with ZERO logging. This means:
- If a corpus file path is misconfigured, the builder gets an empty variable silently
- If infrastructure files (mechanism-catalog.md, components.css, etc.) are missing, the builder loses critical context with no diagnostic
- If `_tc-brief.md` or `_content-map.md` aren't written by Phase 0, builders silently run without them

**Failure scenario:** During pipeline runs, missing files produce empty variables that get substituted into templates. The resulting prompt looks syntactically valid but is semantically hollow. No log entry means debugging requires reading the assembled prompt to discover which variables resolved to empty.

**Fix:** Added `process.stderr.write` warning:
```ts
process.stderr.write(`[assembler] WARN: failed to load file (returning empty): ${filePath}\n`);
```
Used `process.stderr.write` instead of `console.warn` to match the existing pattern in the Logger class. The `[assembler]` prefix enables grep-based filtering.

---

## Issue 3: Token trim $-pattern corruption [FIXED]

**Location:** Line 248 (original), trimIfNeeded function

**Bug:** The conviction layer trimming used `.replace(oldConviction, newConviction)`. While the first argument (search string) is treated literally by JavaScript's `.replace()` when it's a string, the REPLACEMENT string interprets special `$`-patterns:
- `$&` = the matched substring
- `$'` = the portion after the match
- `` $` `` = the portion before the match
- `$<n>` = capture group n

Conviction entries are free-text from the builder's creative output. If a builder wrote conviction content containing `$&` or similar patterns (e.g., "I used the `$&` operator" or pricing like "$200"), the replacement would corrupt the prompt text.

**Failure scenario:** A conviction entry like `"Rejected: $200 budget constraint felt artificial"` would cause `.replace()` to interpret `$2` as a capture group reference (resolving to empty string since there are no capture groups), silently corrupting the trimmed prompt.

**Fix:** Replaced `.replace()` with `indexOf` + `slice` concatenation:
```ts
const convictionIdx = result.indexOf(oldConviction);
if (convictionIdx !== -1) {
  result = result.slice(0, convictionIdx) + newConviction + result.slice(convictionIdx + oldConviction.length);
}
```
This performs literal string substitution with zero interpretation of special patterns.

---

## Issue 4: V-05 defense analysis [NO CHANGE NEEDED]

**Location:** Line 207, substituteTemplate function

**Current code:**
```ts
const safeValue = value.replace(/\{([A-Z_]{2,})\}/g, '⟨$1⟩');
```

**Analysis:** The regex `{[A-Z_]{2,}}` matches `{` + 2 or more uppercase letters/underscores + `}`. This means:
- `{AB}` (2 chars) -- CAUGHT
- `{A}` (1 char) -- NOT CAUGHT
- `{A_B}` (3 chars) -- CAUGHT

The question is whether `{A}` is a risk. Looking at the PromptVariableName type, ALL variable names have 7+ characters (shortest: `CASE_STUDY` = 10). No single-letter variable names exist. For `{A}` to cause injection, it would need to match a template placeholder, but no such placeholder exists.

The regex also uses `replaceAll` semantics via the `g` flag on `.replace()` -- this is correct since `.replace()` with a RegExp with the `g` flag replaces all occurrences.

**Verdict:** The V-05 defense is sound for the current variable name set. The `{2,}` minimum prevents false-positive escaping of common patterns like `{x}` in CSS or `{i}` in code. If single-letter variable names were ever added, this would need revision, but that's unlikely given the naming convention.

---

## Issue 5: Template loading inconsistency [NO CHANGE NEEDED]

**Analysis:**
- `loadTemplate(name)` throws if file not found (line 27)
- `loadAllTemplates()` checks `existsSync(TEMPLATES_DIR)` first and iterates `.md` files

These are NOT inconsistent in a harmful way:
1. `loadAllTemplates` calls `loadTemplate` for each file found by `readdirSync` -- these files definitely exist since they were just enumerated by the directory listing
2. The `existsSync(TEMPLATES_DIR)` guard in `loadAllTemplates` handles the case where the templates directory itself doesn't exist (returns empty map)
3. `loadTemplate` is also called directly by assembly functions like `assembleBuilderPrompt` -- and these SHOULD throw if a template is missing, because a missing template is a fatal configuration error

**Verdict:** The behavior is correct. `loadAllTemplates` is a discovery function (find what exists), while `loadTemplate` is a demand function (this template MUST exist). The difference in error handling reflects their different contracts.

---

## Issue 6: Refine builder artifact race [NO CHANGE NEEDED]

**Location:** `assembleRefineBuilderPrompt` line 518

**Code:**
```ts
vars.set('CURRENT_ARTIFACT', loadFileOrEmpty(state.artifactPath));
```

**Analysis:** The concern was: what if the refine builder already wrote a new version to `state.artifactPath` before the assembler loads it?

This cannot happen because:
1. `assembleRefineBuilderPrompt` is called BEFORE spawning the refine builder (see `pipeline.ts` line 948-950):
   ```ts
   const assembled = assembleRefineBuilderPrompt(weaverReport, '', state, cfg);
   return spawnClaude({ role: 'refine-builder', prompt: assembled.text, ... });
   ```
2. The prompt is assembled first, THEN passed to `spawnClaude`. The refine builder hasn't started yet when the artifact is read.
3. During execution, the refine builder uses Read/Write/Edit tools to modify the artifact at `state.artifactPath`. But by then the prompt is already assembled and sent.

The real concern would be: what if a PREVIOUS refine cycle wrote to `state.artifactPath` and the state object doesn't reflect the new hash? Looking at `pipeline.ts` lines 547-555, after a refine builder runs, the pipeline updates `currentArtifactHash` and `artifactSizeHistory`. So state stays in sync.

**Verdict:** No race condition. The assembly-then-spawn sequence is inherently sequential.

---

## Summary of Changes

| Line(s) | Change | Risk |
|---------|--------|------|
| 103-109 | Added stderr warning to `loadFileOrEmpty` catch block | Zero -- logging only |
| 438 (now 443) | `htmlPath` -> `loadFileOrEmpty(htmlPath)` in PA auditor | Low -- fixes bug, loads file content instead of path |
| 470 (now 475) | `htmlPath` -> `loadFileOrEmpty(htmlPath)` in integrative auditor | Low -- same fix |
| 248-253 | `.replace()` -> `indexOf` + `slice` in conviction trim | Zero -- eliminates $-pattern corruption risk |

**Note on auditor-spawner.ts dual path:** The `auditor-spawner.ts` file has its OWN `buildAuditorPrompt` function (line 22-89) that reads HTML directly via `readFileChecked(htmlPath)`. This is a SEPARATE code path from the assembler's `assemblePaAuditorPrompt`. The auditor-spawner builds prompts inline, while the assembler function exists for template-based assembly. Both paths should work correctly now. The duplication itself is a code smell (two ways to build auditor prompts), but that's an architectural concern, not a bug.
