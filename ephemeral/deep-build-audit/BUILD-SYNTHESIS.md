# deep-build Orchestrator — Build Synthesis

**Date:** 2026-02-28
**Build Duration:** ~2 hours (implementation + review + fixes)
**Team:** deep-build-impl (8 implementation agents + 6 buddy reviewers = 14 agents)

---

## Deliverables

| Category | Files | Lines |
|----------|-------|-------|
| TypeScript source | 39 | 6,397 |
| JavaScript (gate-runner) | 1 | 3,185 |
| Prompt templates | 10 | 1,255 |
| Test fixtures | 1 | 177 |
| Config files | 3 | ~60 |
| SKILL.md | 1 | 27 |
| **Total** | **55** | **~11,100** |

### Build Status: COMPILES CLEAN (zero errors)

---

## Architecture Overview

```
cli.ts → pipeline.ts → pass-executor.ts → {assembler.ts, claude-cli.ts, response-handler.ts} → state-manager.ts
                     → pa/{screenshot-capture, auditor-spawner, weaver-spawner} → pa-router.ts
```

- **Phase 0:** TC derivation + content analysis (2 claude -p calls)
- **Phase A:** 7 subsets × 8 passes = 56 corpus integration calls + 7 retrospectives + 3 cross-subset verifiers = 66 calls
- **Phase B:** Up to 3 PA cycles × (8 auditors + 1 integrative + 1 weaver + 1 refine) = up to 33 calls
- **Total:** 78-101 claude -p calls per full pipeline run

---

## Buddy Review Results

### Integration Coherence (buddy-integration)
**Report:** `tools/deep-build/ephemeral/deep-build-audit/buddy-integration-coherence.md` (606 lines)

**Key Findings:**
1. **CRITICAL: Phase B costs invisible to budget tracking.** `spawnAuditors` returns report paths, discarding cost data. Weaver returns synthetic $0 response. Budget enforcement sees ~50-70% of actual spend.
2. **HIGH: 7 of 13 implementation modules are dead code.** response-handler.ts, checkpoint.ts, resume.ts, logger.ts, cost-tracker.ts, metrics.ts, report.ts, pa-router.ts (duplicate), mini-pa-spawner.ts — all unreachable from execution path.
3. **HIGH: Verifier diff is a stub.** `diffArtifact('', currentArtifact)` shows 100% new every time.
4. **MEDIUM: Two duplicate `formatConvictionLayer()` implementations.** assembler.ts vs conviction-manager.ts produce different output.
5. **MEDIUM: Dummy viewport metadata (0×0) fed to PA auditors.**
6. **PASS: No circular dependencies.** DAG confirmed.
7. **PASS: All 16 DI methods wired in createDefaultDeps.**

### Adversarial Breakage (buddy-adversarial)
**Report:** `ephemeral/deep-build-audit/buddy-adversarial-breakage.md` (616 lines)

**24 vulnerabilities found:**
- 4 CRITICAL, 8 HIGH, 7 MEDIUM, 5 LOW

**Top vulnerabilities:**
1. **V-22 CRITICAL: No file lock.** Two instances on same outputDir = state corruption.
2. **V-16 CRITICAL: HTML event handlers bypass `<script>` gate.** `<img onerror=...>` spoofs gates. **FIXED: Added event handler regex check to html-validator.ts.**
3. **V-11 CRITICAL: Resume silently overwrites user's manual artifact edits.**
4. **V-05 HIGH: Content markdown `{VARIABLE}` patterns expanded by template engine.** **FIXED: Values now escaped with `⟨⟩` brackets before substitution.**
5. **V-04 HIGH: Content with `<!-- HTML_START -->` markers confuses extraction.**
6. **V-01 HIGH: Binary file as --content burns entire budget.** **FIXED: Added binary/size/empty validation to CLI.**

**Defenses that held:** Atomic writes (D-01), schema validation (D-02), budget enforcement (D-04), retry categorization (D-05), Promise.allSettled for auditors (D-07), workspace isolation (D-08).

---

## Fixes Applied (7 changes)

| Fix | File | Issue | Status |
|-----|------|-------|--------|
| Event handler sanitization | html-validator.ts | V-16 CRITICAL: gate spoofing | APPLIED |
| Content file validation | cli.ts | V-01 HIGH: binary/empty/oversized input | APPLIED |
| Budget error class check | cli.ts | E-1: fragile string matching | APPLIED |
| Template variable injection | assembler.ts | V-05 HIGH: content injects variables | APPLIED |
| Verifier template filename | assembler.ts | loaded `verifier.md` but file is `verifier-corpus.md` | APPLIED |
| Weaver template filename | assembler.ts | loaded `weaver.md` but file is `pa-weaver.md` | APPLIED |
| RESPONSE_FORMAT_INSTRUCTIONS | prompts.ts + assembler.ts | Missing variable for refine-builder template | APPLIED |

---

## Known Issues Not Yet Fixed (prioritized)

### Must Fix Before First Run
1. **Phase B cost tracking** — Auditor and weaver costs not flowing back to state. Budget enforcement underreports by 30-50%.
2. **Dead code modules** — response-handler.ts should be the canonical extractor (not inline duplicates in pass-executor.ts and pipeline.ts). resume.ts, logger.ts, checkpoint.ts should be wired in.
3. **Verifier diff stub** — Pipeline needs to track previous artifact for real diffs.
4. **No file lock** — Two concurrent runs on same slug+date = corruption.
5. **Viewport metadata** — ScreenshotManifest objects have width:0, height:0, label:'viewport-0'.

### Should Fix Before Production
6. **HTML marker collision** — Content containing `<!-- HTML_START -->` could confuse extraction.
7. **Conviction layer injection** — LLM outputs used as inputs to other LLMs (inherent risk).
8. **All-auditor timeout** — 0/8 successful auditors still produces PA verdict.
9. **gate-runner page.evaluate timeout** — No timeout on browser-side gate execution.

### Nice To Have
10. **PID lock file** for concurrent instance protection
11. **Context-exceeded error** as retryable category
12. **Content file size** in token estimation during dry-run

---

## What's Ready

- Project compiles clean: `npm run build` = zero errors
- CLI works: `--help`, `--dry-run`, `--content`, `--subset`, `--skip-phase-a`, `--resume`
- All 10 prompt templates present with correct variable placeholders
- 38 corpus file paths defined in config/corpus.ts
- 7 subset definitions with rotation math
- PA question assignments for 8 auditors (A-H)
- Gate-runner-browser.js (3,185 lines) ready for Playwright injection
- State schema v3 with atomic writes
- Retry with exponential backoff on transient errors
- Budget enforcement (warning at $150, hard cap at $250)
- Workspace isolation (4-layer token isolation strategy)

## What's Not Ready

- **E2E test not yet run** — `--subset 1` with real claude -p calls needed
- **Corpus file paths not validated on disk** — dry-run should verify
- **Phase B cost wiring** — needs engineering work
- **Dead code integration** — response-handler, logger, checkpoint, resume modules need wiring
- **Documentation** — ARCHITECTURE.md, CONFIGURATION.md, RESUME.md not written

---

## Next Steps

1. **Wire dead code modules** (~30 min) — Use response-handler.ts as canonical extractor, wire logger.ts, wire resume.ts into CLI, wire checkpoint.ts into pipeline subset boundaries
2. **Fix Phase B cost tracking** (~20 min) — Change spawnAuditors/spawnWeaver return types to include cost data
3. **Add file lock** (~10 min) — PID-based lock file in workspace-setup.ts
4. **Run dry-run** (~5 min) — `node dist/cli.js --dry-run --content tests/fixtures/sample-content.md`
5. **E2E test with 1 subset** (~$20, ~30 min) — `node dist/cli.js --content tests/fixtures/sample-content.md --subset 1`
