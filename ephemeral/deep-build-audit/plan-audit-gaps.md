# Gap Audit: BLOCKING Gaps, HIGH Gaps, and Cross-Document Contradictions

**Auditor:** Opus 4.6 (gap-auditor)
**Date:** 2026-02-28
**Scope:** Verify every plan gap resolution is actionable + complete; verify all contradiction resolutions are correct; find gaps the plan missed entirely.
**Method:** Read plan (`sorted-finding-honey.md`, 963 lines) against all 9 source docs (00-PIPELINE-DIAGRAM.md through 08-state-management.md, ~11,253 lines total). Line references cite the source doc line numbers.

---

## 1. BLOCKING Gap Audit (4 gaps)

### GAP-A06/E01: `CLAUDECODE` env var blocks nested `claude -p`

**Plan resolution:** "Every `child_process.spawn()` unsets it: `env: { ...process.env, CLAUDECODE: undefined }`. Hardcode in `claude-cli.ts` as constant."

**Verification:** ACTIONABLE and COMPLETE.
- Doc 04 lines 19-33 confirm the nesting guard and the bypass (`CLAUDECODE=` empty string).
- Doc 04 line 27: the error message itself says "To bypass this check, unset the CLAUDECODE environment variable."
- The plan correctly puts this in `claude-cli.ts` (plan line 473).
- The `CLAUDECODE: undefined` pattern in `env: { ...process.env }` spread will correctly remove the key in Node.js `child_process.spawn()`.

**Issue found: NONE.** Resolution is correct.

---

### GAP-B01: ~120K token client-side prompt size limit

**Plan resolution:** "Token estimator in `assembler.ts`. Pre-flight check. If >100K tokens: trim conviction layer first, then trim valley-position corpus files. Log warning."

**Verification:** PARTIALLY ACTIONABLE — trimming strategy is underspecified.

- Doc 01 lines 429-434 confirm the hard limit: "HARDCODED client-side validation limit. Rejects prompts BEFORE sending to API."
- Doc 01 line 434: "Workaround: None reliably works. Split large inputs across multiple passes."
- Plan correctly sets 100K as the soft limit (plan line 133, line 463: `tokenLimit: 100000`).
- **Gap 1:** The trimming order (conviction layer first, then valley-position files) is clear, but "valley-position corpus files" is ambiguous. Which files are "valley"? The rotation determines primacy/valley/recency. If the current rotation has files [C,D,E,A,B], the valley is files near position [D,E] (middle). But the plan does not specify: (a) how many tokens to trim per file, (b) whether to remove entire files or truncate them, (c) what the minimum corpus file count is (removing too many defeats the point of that pass).
- **Gap 2:** Doc 06 line 96 calculates that by pass 56, total tokens could reach 69,000-112,000. If the subset itself is ~63K (S6 per doc 06 line 25), plus artifact (~15-25K), plus conviction (~1,300), plus reference files (~5K), plus content (~5K), plus template (~500) = 90-100K tokens. This WILL trigger the trim on large subsets. The plan needs to specify what happens when even after trimming conviction, the prompt still exceeds 100K.
- **Gap 3:** The `estimateTokens(text)` function uses "~4 chars/token" (plan line 495). This is a rough heuristic. If it underestimates by 20% (common for code/HTML), a 100K-estimated prompt could actually be 120K, hitting the hard limit. The plan should specify a safety margin (e.g., estimate at 3.5 chars/token, or use a 90K soft limit).

**Verdict: Mostly actionable, but needs 3 clarifications.** The trimming fallback when conviction+valley trim is insufficient, minimum corpus files per pass, and estimation safety margin.

---

### GAP-K01: Two pipeline models (text vs HTML)

**Plan resolution:** "HTML artifact is canonical. Doc 03's text model is superseded."

**Verification:** RESOLVED.
- Doc 00 lines 69-71 clearly show the HTML artifact model: "Reads raw material + artifact / Writes to output.html".
- Doc 02 line 5: "iteratively refined HTML artifact."
- Doc 03 lines 246, 390, 496, 524 reference a text integration model with `corpus-integration-S1.md` outputs — these are from an earlier design.
- The plan explicitly supersedes doc 03 (plan line 44).
- However: **doc 03 still contains verified file paths and subset definitions (lines 1-803) that the plan USES as canonical for subset composition (plan K03 resolution).** The plan correctly separates doc 03's text model (superseded) from doc 03's file registry (canonical).

**Issue found: NONE.** Resolution is correct and nuanced.

---

### GAP-002: `--max-turns 1` + `--allowedTools ""` = builder can't write files

**Plan resolution:** "Use `--output-format json`, extract HTML from `result` field in JSON. Orchestrator writes to disk."

**Verification:** ACTIONABLE and COMPLETE.
- Doc 04 lines 66-108 confirm JSON output structure with `result` field containing response text.
- Doc 04 lines 111-128 confirm structured output with `--json-schema` returns data in `structured_output` NOT `result`.
- The plan correctly uses `--output-format json` and extracts from `result` (plan line 134-135, plan line 250-256).
- The `response-handler.ts` module (plan line 474) is responsible for this extraction.

**Issue found: MINOR.** If the builder's response text contains the full HTML artifact, the `result` field will contain it as a string inside JSON. The HTML will have quotes and special characters that need to survive JSON encoding/decoding. This is standard (JSON handles it), but `response-handler.ts` should verify the extracted HTML is valid (not truncated by output token limits). Doc 01 line 637: `--max-turns` exit behavior "Exits with error, not with partial results gracefully." If the builder runs out of turns (1 turn, no tools), can it still return its full response? YES -- with `--max-turns 1` and no tools, the builder gets exactly 1 response turn, which IS the output. This works.

**Verdict: COMPLETE.** No blocking issues.

---

## 2. HIGH Gap Audit (24 gaps)

### Actionable and Complete (18/24)

| ID | Summary | Verdict |
|----|---------|---------|
| GAP-001 | State v2→v3 reconciliation | COMPLETE. Plan line 339-428 gives full v3 schema. Wave 0 schema-reconciler (plan line 689) maps all fields. |
| GAP-A01 | Subset compositions differ | COMPLETE. Plan K03 resolution: doc 03 canonical. |
| GAP-B02 | `--tools` vs `--allowedTools` confusion | COMPLETE. Plan lines 209-223 give per-role tool configs. |
| GAP-B03 | ~50K token overhead | COMPLETE. Plan lines 226-241 specify 4-layer isolation. |
| GAP-C03 | output-format text vs JSON | COMPLETE. JSON canonical. |
| GAP-C06 | spawn() vs execSync() | COMPLETE. spawn() for production (plan line 76). |
| GAP-D01 | 95 vs 38 vs 35 files | COMPLETE. 38 rotating + infrastructure. |
| GAP-D02 | Cross-subset integration context | COMPLETE. `{PREVIOUS_SUBSET_SUMMARIES}` variable (plan line 333). |
| GAP-D03 | Text vs HTML model | COMPLETE. HTML canonical. Same as K01. |
| GAP-E02 | Bash tool background jobs | COMPLETE. Node.js spawn directly (plan line 487). |
| GAP-E03 | Playwright contention | COMPLETE. Screenshots before auditors (plan line 158, 486). |
| GAP-F01 | 8-step PA cycle | COMPLETE. Plan lines 148-172 specify all 8 steps. |
| GAP-F02 | 9 auditors (8+1) | COMPLETE. Plan line 157-161. |
| GAP-F03 | Information isolation | COMPLETE. Plan lines 287-293. |
| GAP-G01 | Cost estimate | COMPLETE. Plan lines 7, 13: $190-228. Budget warning $150, cap $250. |
| GAP-H02 | Builder template variables | COMPLETE. Plan lines 316-335 enumerate all variables. |
| GAP-I01 | Log file count | COMPLETE. Plan line 493: 4 destinations. |
| GAP-I02 | Atomic write pattern | COMPLETE. Plan line 481-482, line 495. |

### Actionable but INCOMPLETE (5/24)

| ID | Issue | What's Missing |
|----|-------|----------------|
| GAP-C02 | Conviction layer growth / FIFO merge | Plan says "FIFO merge with relevance weighting" (line 74) but then says "FIFO merge when cap exceeded -- oldest entries dropped" (plan line 202). These are contradictory: FIFO = oldest dropped (no relevance), but "relevance weighting" implies scoring. Which is it? Doc 06 line 98 warns conviction entries will be "many contradictory." The plan should specify: pure FIFO (simplest, deterministic) OR relevance-scored (needs scoring algorithm). |
| GAP-F04 | Weaver input/output | Plan lines 295-301 list weaver inputs. But the weaver's structured output schema is never fully defined in the plan. The WeaverVerdict type is referenced (plan line 163, 188) but not defined. Doc 05 defines it (around lines 1051+) but the plan should include it for Wave 1 type-architect to implement. |
| GAP-G02 | Cross-subset interference | Plan line 143: "Cross-subset verifier (every 2 subsets)." But what happens when the verifier FINDS interference? The plan doesn't specify the recovery action. Does it re-run the subset? Add a remediation pass? Just log a warning? Doc 06 lines 235-281 (Dimension 5) warns this is HIGH risk. |
| GAP-H01 | 5 templates vs 9 | Plan line 88: "Missing 4... must be created from scratch." Plan lines 497-506 list all 9 templates. But the plan doesn't specify what the 4 NEW templates should contain -- only their filenames. Wave 1 prompt-architect (plan line 714) is told to write them but has zero spec for retrospective, tc-derivation, content-analysis, or world-description content. Doc 07 provides templates 1-5 only. |
| GAP-I03 | Resume algorithm complexity | Plan lines 431-440 give the 6-step algorithm. But step 5 ("Check inFlightPass: if present, the last pass started but didn't complete → Resume from that pass number (re-run it)") doesn't specify what to do about the potentially corrupted artifact from the in-flight pass. Doc 08 lines 555-670 specify a detailed artifact integrity check (match/mismatch/missing) with fallback to backup. The plan should reference this or include it. |

### NOT Actionable (1/24)

| ID | Issue | Problem |
|----|-------|---------|
| GAP-015 | Conviction layer growth | Labeled "Same as C02" in the plan (line 93). This is a DUPLICATE, not a separate gap. Should be removed from the registry or merged with C02. |

---

## 3. Cross-Document Contradiction Audit (K01-K08)

### K01: Pipeline model (text vs HTML)
**Plan resolution:** HTML artifact canonical.
**Verdict: CORRECT.** Docs 00 + 02 are consistent on HTML. Doc 03 is the outlier (earlier design).

### K02: Corpus file count (35 vs 95 vs 38)
**Plan resolution:** 38 rotating + infrastructure files.
**Verdict: CORRECT.** Doc 03 lines 1-100 list file paths. Counting unique rotating files across 7 subsets yields ~38 (verified by subset definitions in doc 02 lines 470-700+).

### K03: Subset compositions (doc 02 vs doc 03)
**Plan resolution:** Doc 03 canonical (filesystem-verified).
**Verdict: CORRECT.** Doc 02 line 470-483 shows S1 = all 5 research files (R1-R5). Doc 03 (per plan's table) shows different compositions. Doc 03 was verified against the actual filesystem on 2026-02-28 (doc 03 line 16). The plan correctly uses doc 03's compositions for `corpus.ts`.

### K04: `--output-format` (json vs text)
**Plan resolution:** JSON canonical.
**Verdict: CORRECT.** JSON is required for programmatic cost/token parsing (doc 04 lines 66-108).

### K05: `--max-turns` (30 vs 1)
**Plan resolution:** Per-role values (1, 15, 20, 30).
**Verdict: CORRECT.** Builder/verifier = 1 (no tools needed). PA auditor = 15 (needs Read for screenshots). This is well-reasoned.

### K06: PA auditor count for cost (3 vs 9)
**Plan resolution:** 9 auditors canonical.
**Verdict: CORRECT.** Doc 00 lines 217-232 show 9 auditors (A-I). Doc 05 lines 557-604 define all 9. Doc 06 used 3 for a conservative cost estimate but that was explicitly noted as lower-bound.

### K07: Screenshot viewports (varies)
**Plan resolution:** Three viewports: 1440x900, 768x1024, 375x812.
**Verdict: CORRECT.** This is a reasonable superset. Mobile (375x812) is from iPhone dimensions (not in doc 02 but appropriate).

### K08: Rotation shift formula
**Plan resolution:** Use formula `Math.floor(files.length * rotationIndex / 3)`.
**Verdict: PARTIALLY CORRECT.** The formula is in doc 02 line 127. But the plan says `rotationIndex / 3` while doc 02's hardcoded values are `[0, 2, 4]` for 5 files. Let's check: `Math.floor(5 * 0/3) = 0`, `Math.floor(5 * 1/3) = 1`, `Math.floor(5 * 2/3) = 3`. These yield shifts [0, 1, 3], which produces rotations [A,B,C,D,E] → [B,C,D,E,A] → [D,E,A,B,C]. But doc 02's hardcoded shifts [0,2,4] produce [A,B,C,D,E] → [C,D,E,A,B] → [E,A,B,C,D]. **These are DIFFERENT rotations.** The formula produces smaller shifts than the hardcoded values.

Looking more carefully at doc 02 line 127: "The shift values are computed as: `Math.floor(files.length * rotationIndex / 3)`". But the ROTATION_RHYTHM on line 145-147 hardcodes `shift: 2` and `shift: 4`, not the formula results. So doc 02 ITSELF is internally inconsistent.

The plan's resolution says "Use formula" but the formula produces different results than the hardcoded values the pipeline diagram (doc 00) visualizes. The plan should explicitly state which rotation [A,B,C,D,E] → which rotation and verify it matches the formula.

**Additional issue:** The formula `Math.floor(files.length * rotationIndex / 3)` where rotationIndex is 0,1,2 (not documented — inferred from 'A'=0, 'B'=1, 'C'=2). But the plan writes `rotationIndex / 3` on plan line 184 while doc 02 writes `rotationIndex / 3` on line 127 but also `N/5` elsewhere. The `/3` and `/5` come from different sources (3 rotations vs 5 files). The formula should use `/3` (number of rotations), not `/5`. Let me re-derive: for 5 files and 3 rotations, we want shifts of approximately [0, 1.67, 3.33] → floored to [0, 1, 3]. The hardcoded [0, 2, 4] gives more aggressive rotation. **The plan must pick ONE and document the expected rotations for a 5-file subset.**

---

## 4. Contradictions the Plan MISSED (not in K01-K08)

### K09 (NEW): PA cycle count: plan says 3, doc 05 says 6

**Source:** Doc 05 line 36: `maxCycles: 6`. Doc 05 line 1525: `maxCycles: 6`.
**Plan:** Plan line 148: "up to 3 cycles". Plan line 356: `maxPACycles: number; // default 3`. Plan line 463: `maxPACycles: 3`.

Doc 05's PA hardening config specifies `maxCycles: 6` and `minCycles: 2`. The plan cuts this to `maxPACycles: 3`. This is a deliberate design change (not an error — the plan line 7 says "up to 3 PA hardening cycles"), but it is NOT listed as a cross-document contradiction even though it changes a core doc 05 parameter.

**Impact:** HIGH. With 3 max cycles, the pipeline has at most 3 chances to reach PA-05 >= 3.5. The Yegge Gas Town run (MEMORY.md) needed REFINE to jump from 2.0 to 3.5 in a single cycle, so 3 cycles may be sufficient. But doc 05's minCycles: 2 (the first RELEASE can happen at cycle 2) combined with maxCycles: 6 provides more headroom. The plan should explicitly state this is a deliberate reduction and why.

### K10 (NEW): Retry count: plan says 3, doc 02 says 2

**Source:** Doc 02 line 420: `maxRetries: number; // Default: 2`. Doc 02 line 2266: `maxRetries: 2, // 3 total attempts per pass`.
**Plan:** Plan line 463: `retryLimit: 3, retryBackoff: [5000, 15000, 45000]`.

Doc 02 says 2 retries (3 total attempts) with the comment explicitly confirming "3 total attempts." The plan says `retryLimit: 3` with 3 backoff values, implying 3 retries (4 total attempts). The backoff array has 3 entries, suggesting 3 retries is intentional.

**Impact:** LOW-MEDIUM. One extra retry per failing pass. At worst costs ~$3 extra per failure. But the plan should acknowledge the discrepancy.

### K11 (NEW): RETHINK threshold: plan says 2.0, doc 05 says 2.5

**Source:** Doc 05 line 40: `rethinkThreshold: 2.5`. Doc 05 line 1527: `rethinkThreshold: 2.5`.
**Plan:** Plan line 166-167: "REFINE: pa05 >= 2.0 → spawn refine-builder... RETHINK: pa05 < 2.0 after 2+ cycles → flag for human review." Plan line 488: "REFINE if pa05 >= 2.0. RETHINK otherwise."

Doc 05 uses 2.5 as the RETHINK threshold: if PA-05 < 2.5 after 3+ cycles, it's ABORT. The plan lowers this to 2.0, meaning REFINE covers 2.0-3.49 (vs doc 05's 2.5-3.49). This is a deliberate change that gives more room for REFINE, but it's NOT listed as a cross-document contradiction.

**Impact:** MEDIUM. A PA-05 of 2.2 would trigger REFINE in the plan but RETHINK in doc 05. The plan is more optimistic about refinement rescuing low scores.

### K12 (NEW): PA auditor tools: plan says Read/Glob/Grep, doc 05 says Read/Write/Glob

**Source:** Doc 05 line 626: `--allowedTools Read,Write,Glob (read screenshots, write report, find files)`. Doc 05 line 653: `allowedTools: ['Read', 'Write', 'Glob']`.
**Plan:** Plan line 220: `--strict-mcp-config` + tools "Read, Glob, Grep". Plan line 293: "via Read tool on saved PNGs."

The plan removes Write (auditors write via `--output-format json` result, orchestrator writes to disk) and swaps Glob for Grep. But doc 05 explicitly includes Write because auditors write their report files directly. If auditors use `--max-turns 15` with `Read, Glob, Grep` tools, they can read screenshots and search files but CANNOT write their reports to disk. The plan apparently intends the orchestrator to write reports from the JSON `result` field (same pattern as builder). But this is inconsistent with plan line 220 giving auditors `--max-turns 15` (implying multi-turn tool use) — if they can't write, why do they need 15 turns?

**Impact:** MEDIUM. Must decide: either auditors get Write (and write their own reports) or they don't (and the orchestrator extracts from JSON result). The plan should be explicit.

---

## 5. BLOCKING/HIGH Gaps from Source Docs NOT in the Plan

### MISSING-01: Doc 06 FATAL #1 — Cost-benefit not addressed

**Source:** Doc 06 lines 20-77. FATAL risk: "6-8x cost, zero proven benefit." Doc 06 line 77: "FATAL without cost controls."

**Plan treatment:** The plan includes budget warning ($150) and hard cap ($250). But it does NOT address the core FATAL finding: the orchestrator has never been proven to produce better output than the existing pipeline. Doc 06 lines 773-805 recommend running a "$60 cheap experiment first" to validate corpus integration helps.

The plan bypasses this entirely — it builds the full orchestrator without the validation experiment. This is the plan's single biggest strategic risk. The plan should either: (a) include the cheap experiment as a pre-Wave-0 gate, or (b) explicitly state why the experiment is skipped (e.g., "we're willing to accept the risk because the infrastructure has value regardless of PA-05 outcome").

**Impact:** FATAL (per doc 06's own assessment). The plan builds $190-228 infrastructure on an unproven thesis.

### MISSING-02: Doc 06 FATAL #3 — Measurement gap not addressed

**Source:** Doc 06 lines 674-734. FATAL risk: "The orchestrator cannot measure whether it works."

**Plan treatment:** The plan includes extensive instrumentation (plan lines 585-665) — cost tracking, artifact evolution, verifier signal, etc. But it does NOT include A/B comparison capability. There is no `--skip-phase-a` flag or ablation mode. After a $200 run, you cannot determine whether the 56 corpus passes contributed or the PA hardening did all the work.

The plan's instrumentation is QUALITATIVE (verifier says "R3 was deeply integrated") not QUANTITATIVE (PA-05 with corpus = X, PA-05 without = Y). Doc 06 lines 695-710 explicitly call out this gap.

**Impact:** HIGH. Without ablation, the first run is uninterpretable. The plan should add `--skip-phase-a` as a CLI flag (runs PA hardening only on seed artifact) to enable comparison.

### MISSING-03: Doc 06 Dimension 13 — Builder ignores corpus material

**Source:** Doc 06 lines 617-668. HIGH risk: "Builders have strong incentives to improve using reference files (actionable) rather than corpus files (abstract)."

**Plan treatment:** Not explicitly addressed. The plan includes verifier passes (plan line 137) and conviction extraction (plan line 138), but does NOT include the citation requirement or integration diff auditor that doc 06 recommends (line 664-666). The verifier alone cannot distinguish corpus-driven from self-driven improvements (doc 06 line 644-648).

**Impact:** HIGH. If builders ignore corpus material, the entire 56-pass Phase A is a $152 waste. At minimum, add citation HTML comments (`<!-- R3: section X → CSS decision Y -->`) to the builder template and have the verifier check for them.

### MISSING-04: Doc 05 PAHardeningState — separate state object not in plan

**Source:** Doc 05 lines 52-95. `PAHardeningState` is a separate interface from `PipelineState`, with its own `currentCycle`, `currentStep`, `cycleRecords`, `gateResults`, `auditorReports`, `integrativeReport`, `weaverVerdict`.

**Plan treatment:** The plan's state schema (plan lines 339-428) embeds PA data into `PipelineState` directly (`completedPACycles`, `lastPAScore`, `paCycleRecords`). It does NOT have a separate `PAHardeningState`. This is a design simplification that may be intentional, but it means the plan loses mid-cycle resume capability. Doc 05's `PAHardeningState.currentStep` (1-8) allows resuming from any step within a PA cycle. The plan's `PipelineState` can only resume from the cycle level.

**Impact:** MEDIUM. If the orchestrator crashes during PA step 4 (8 parallel auditors), it would need to re-run the entire cycle (screenshot + gates + all 9 auditors + weaver) instead of just re-running from step 4. Given that a full PA cycle costs ~$20-25, losing mid-cycle resume could waste that amount on crash.

### MISSING-05: Doc 05 Mini-PA not in plan

**Source:** Doc 05 lines 1469-1506. Mini-PA runs between IMPROVE passes using 3 auditors (A, C, G) at 1 viewport to validate direction.

**Plan treatment:** Plan line 171: "Mini-PA (between refinement passes): Every 2-3 refinement passes, run 3 auditors + 1 viewport." This is mentioned in ONE line. But the plan's PA subsystem (plan lines 484-489) does NOT include a mini-PA spawner. The `auditor-spawner.ts` module is described as spawning "8 parallel + 1 sequential" — no mini-PA mode. The `pa-router.ts` is described as SHIP/REFINE/RETHINK — no CONTINUE/ESCALATE mini-PA routing.

**Impact:** MEDIUM. Mini-PA is a cost optimization ($5 for quick validation vs $25 for full PA). Without it, every refinement cycle requires a full Mode 4 PA, inflating Phase B cost.

### MISSING-06: Doc 08 error recovery decision tree

**Source:** Doc 08 lines 524-670. Detailed 6-step resume algorithm with artifact integrity checking (match/mismatch/missing), backup fallback, and user prompting for failed states.

**Plan treatment:** Plan lines 431-440 give a simplified 6-step resume. But the plan omits: (a) what to do if artifact hash mismatches (doc 08 line 558: fall back to backup), (b) what to do if the backup is also corrupt (doc 08 line 561: "FATAL. Manual recovery needed"), (c) the `'failed'` status handler (doc 08 line 576: "ask user whether to retry from failure point"). The plan's resume algorithm handles the happy path but not the three failure sub-paths.

**Impact:** MEDIUM. During a 12-20 hour run, crashes are likely. The resume algorithm must handle artifact corruption, not just clean stop/restart.

---

## 6. Why Finding Zero Issues Would Be Suspicious

It wouldn't be. This audit found:
- 3 clarifications needed on BLOCKING gaps (all on GAP-B01 token limit)
- 5 incomplete HIGH gaps (C02 FIFO ambiguity, F04 WeaverVerdict type, G02 recovery action, H01 template specs, I03 resume failure paths)
- 1 duplicate gap (GAP-015 = C02)
- 1 K08 resolution that is internally inconsistent (formula vs hardcoded values)
- 4 NEW contradictions not in K01-K08 (PA cycle count, retry count, RETHINK threshold, auditor tools)
- 6 gaps from source docs not captured in plan (3 from doc 06 adversarial review, 3 from docs 05/08 PA/state specs)

The plan is solid — it resolved 18/24 HIGH gaps completely and all K01-K07 contradictions correctly. The main strategic weakness is that it builds the full orchestrator without the cheap validation experiment that doc 06 recommends as a prerequisite.

---

## 7. Summary of Required Actions

### Before Wave 0 (strategic)
1. **Decide on cheap experiment** — doc 06's $60 validation test before $200 build. If skipped, document why.
2. **Add `--skip-phase-a` CLI flag** — enables A/B comparison (Phase B only vs Phase A+B).

### Before Wave 1 (contradictions to resolve)
3. **K09:** Set `maxPACycles` to 3 or 6. If 3, document why doc 05's 6 was reduced.
4. **K10:** Set retries to 2 or 3. If 3, document why doc 02's 2 was increased.
5. **K11:** Set RETHINK threshold to 2.0 or 2.5. If 2.0, document why doc 05's 2.5 was lowered.
6. **K12:** Decide PA auditor tool set: `Read,Write,Glob` (auditors write reports) or `Read,Glob,Grep` (orchestrator extracts from JSON). Update `--max-turns` accordingly.
7. **K08:** Verify rotation formula produces correct shifts for each subset size (4-6 files). Document expected rotations.

### Before Wave 2 (gap completions)
8. **GAP-B01:** Specify trimming fallback for >100K even after conviction+valley trim. Add token estimation safety margin.
9. **GAP-C02:** Pick FIFO (deterministic) or relevance-weighted (complex). Remove contradiction.
10. **GAP-F04:** Define `WeaverVerdict` interface explicitly in plan (or reference doc 05 section).
11. **GAP-G02:** Specify cross-subset interference recovery action.
12. **GAP-H01:** Provide content specs for the 4 NEW templates.
13. **GAP-I03:** Add artifact integrity failure sub-paths to resume algorithm.

### During Wave 2 (implementation additions)
14. **MISSING-03:** Add citation requirement to builder template.
15. **MISSING-04:** Consider separate `PAHardeningState` for mid-cycle resume.
16. **MISSING-05:** Add mini-PA spawner mode to `auditor-spawner.ts`.
17. **MISSING-06:** Implement full resume decision tree from doc 08 (not just happy path).
