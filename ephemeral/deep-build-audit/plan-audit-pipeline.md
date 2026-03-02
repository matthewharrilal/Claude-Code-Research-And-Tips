# Pipeline Architecture & claude -p Invocation Audit

**Auditor:** pipeline-auditor (Opus agent)
**Sources:** Plan (sorted-finding-honey.md), Doc 00 (PIPELINE-DIAGRAM.md), Doc 01 (cli-capabilities.md), Doc 02 (orchestrator-architecture.md), Doc 04 (claude-code-integration.md), Doc 05 (pa-integration.md)

---

## 1. Per-Role Flag Comparison Table (Plan vs Docs)

### 1.1 Phase A Roles

| Role | Flag | Plan Value | Doc 00 Value | Doc 02 Value | Match? | Notes |
|------|------|------------|-------------|-------------|--------|-------|
| **Builder (Phase A)** | `--model` | `opus` | `claude-opus-4-6` (line 20) | `config.model` (line 1266) | YES | Plan uses alias "opus"; doc 00 uses full ID. Doc 01 Sec 2.3 confirms alias resolves correctly. |
| | `--max-turns` | `1` | Not explicit | `1` (line 1268) | YES | |
| | `--tools/--allowedTools` | `None (--allowedTools "")` | `--allowedTools "Read,Write,Edit"` (line 356) | No tools (line 1252: "Single turn, no tool use") | **MISMATCH** | Plan says `--allowedTools ""` (no tools). Doc 00 says `"Read,Write,Edit"`. Doc 02 agrees with plan (no tools). **Plan + Doc 02 are aligned (builder responds with HTML in output, orchestrator writes to disk). Doc 00 is stale/wrong on this.** Plan acknowledges this: GAP-002 resolves it by extracting HTML from `result` field. |
| | `--output-format` | `json` | `json` (line 356) | `text` (line 1267) | **MISMATCH** | Plan resolves this via K04 and GAP-C03: "JSON canonical." Doc 02's `text` is explicitly overridden. |
| | `--no-session-persistence` | YES | Not in diagram | Not in doc 02 | **GAP** | Plan specifies it. Doc 02 doesn't include it in the invocation code. Since each pass is independent, this is correct behavior but the implementation code in doc 02 is missing the flag. |
| **Verifier (Phase A)** | `--model` | `opus` | Not explicit per-role | Same as builder | YES | |
| | `--max-turns` | `1` | Not explicit | Same as builder | YES | |
| | `--tools` | `None` | Not explicit | Same as builder | YES | |
| | `--output-format` | `json` | Not explicit | Same as builder | YES | Resolved same as builder. |
| | `--no-session-persistence` | YES | — | — | **GAP** (same as builder) | |
| **TC Derivation** | `--model` | `opus` | — | — | YES | TC derivation not detailed in docs 00/02 (pre-Phase-A). |
| | `--max-turns` | `30` | — | — | N/A | Only in plan. |
| | `--tools` | `Read, Write, Edit` | — | — | N/A | Only in plan. |
| **Content Analysis** | `--model` | `opus` | — | — | YES | |
| | `--max-turns` | `30` | — | — | N/A | |
| | `--tools` | `Read, Write, Edit` | — | — | N/A | |
| **Retrospective** | `--model` | `opus` | — | — | YES | |
| | `--max-turns` | `10` | — | — | N/A | Plan-only role. |
| | `--tools` | `Read` | — | — | N/A | |

### 1.2 Phase B Roles

| Role | Flag | Plan Value | Doc 00 Value | Doc 05 Value | Match? | Notes |
|------|------|------------|-------------|-------------|--------|-------|
| **PA Auditor (x8)** | `--model` | `opus` | `claude-opus-4-6` | `claude-opus-4-6` (line 651, 1778) | YES | |
| | `--max-turns` | `15` | — | `30` (line 625, 652) in code, `30` in table (line 1778) | **MISMATCH** | **Plan says 15. Doc 05 says 30 everywhere** (code, table, comment). 30 is needed because auditors read multiple screenshots (multiple Read tool calls). Plan's 15 is too low. |
| | `--tools` | `Read, Glob, Grep` | — | `Read, Write, Glob` (line 626, 653) | **MISMATCH** | Plan has `Grep` but not `Write`. Doc 05 has `Write` but not `Grep`. **Doc 05's `Write` is needed for auditors to write their report file.** Plan's `Grep` is unnecessary (auditors don't search files). |
| | `--output-format` | `json` (table header) | — | `text` (lines 624, 1742) | **MISMATCH** | Doc 05 uses `text` because auditors write reports via the Write tool. Plan says JSON in the invocation reference table. Since auditors write files (not return structured data), `text` is correct for the actual `claude -p` output format, but orchestrator needs to verify the report file exists. |
| | `--strict-mcp-config` | YES | — | Not in doc 05 code | **GAP** | Plan includes `--strict-mcp-config` to prevent MCP tool inheritance. Doc 05 doesn't specify it. Plan is correct — auditors must NOT have Playwright access. |
| | `--no-session-persistence` | YES | — | Not in doc 05 code | **GAP** | Same pattern — plan has it, doc 05 omits it. |
| **Integrative Auditor** | `--model` | `opus` | — | `claude-opus-4-6` (line 852) | YES | |
| | `--max-turns` | `15` | — | `20` (line 852, 1779) | **MISMATCH** | Plan says 15. Doc 05 says 20. Integrative reads 8 auditor reports (more tool calls), so 20 is more appropriate. |
| | `--tools` | `Read, Glob, Grep` | — | `Read, Write, Glob` (line 853) | **MISMATCH** | Same as PA auditors: plan has Grep, doc 05 has Write. Write is needed. |
| | `--strict-mcp-config` | YES | — | Not in doc 05 | **GAP** | Same as PA auditors. |
| **Weaver** | `--model` | `opus` | — | `claude-opus-4-6` (line 1013) | YES | |
| | `--max-turns` | `20` | — | `40` (line 1014, 1780) | **MISMATCH** | Plan says 20. Doc 05 says 40 (reads 10 reports + screenshots, double timeout). **40 is more appropriate.** |
| | `--tools` | `Read` | — | `Read, Write, Glob` (line 1015) | **MISMATCH** | Plan only gives Read. Doc 05 gives Read, Write, Glob. **Write is needed** for the weaver to write its verdict file. |
| | `--no-session-persistence` | YES | — | Not in doc 05 | **GAP** | |
| **Refine Builder** | `--model` | `opus` | — | `claude-opus-4-6` (line 1781) | YES | |
| | `--max-turns` | `30` | — | `15` (line 1781) | **MISMATCH** | Plan says 30. Doc 05 table says 15. Plan's 30 may be excessive for a refinement pass; doc 05's 15 may be tight. Needs reconciliation. |
| | `--tools` | `Read, Write, Edit` | — | `Read, Write` (line 1781) | **MISMATCH** | Plan includes Edit. Doc 05 doesn't. Since the refine builder modifies an existing HTML file, Edit could be useful, but Write is sufficient (overwrite entire file). |

### 1.3 Mismatch Summary

| # | Role | Flag | Plan | Doc | Severity | Resolution |
|---|------|------|------|-----|----------|------------|
| M1 | PA Auditor | `--max-turns` | 15 | 30 | **HIGH** | Adopt doc 05's 30. Auditors need ~15-25 tool calls for screenshots + reading. |
| M2 | PA Auditor | `--tools` | `Read,Glob,Grep` | `Read,Write,Glob` | **HIGH** | Auditors must have Write to produce report files. Replace Grep with Write. |
| M3 | PA Auditor | `--output-format` | `json` | `text` | MEDIUM | Plan's table says JSON for all roles. But auditors write reports to files and don't return structured data. Text is correct for the `claude -p` output since the real output is the written file. However, JSON gives cost tracking via `total_cost_usd`. Recommend `json` with file-based output verification. |
| M4 | Integrative | `--max-turns` | 15 | 20 | MEDIUM | Adopt doc 05's 20. Reads 8 reports. |
| M5 | Integrative | `--tools` | `Read,Glob,Grep` | `Read,Write,Glob` | **HIGH** | Same as M2. |
| M6 | Weaver | `--max-turns` | 20 | 40 | **HIGH** | Adopt doc 05's 40. Reads 10 reports + screenshots. |
| M7 | Weaver | `--tools` | `Read` | `Read,Write,Glob` | **HIGH** | Weaver must Write its verdict file. |
| M8 | Refine Builder | `--max-turns` | 30 | 15 | MEDIUM | Reconcile. 15 may be tight if builder reads multiple reference files. Suggest 20-25. |

**Why are there this many mismatches?** The plan's invocation reference table (lines 213-223) was written as a compact summary. Doc 05 was written later with more detailed per-agent specifications including actual TypeScript code. The plan adopted the simpler version without reconciling against doc 05's more thorough analysis. The pattern of mismatches is systematic: the plan table consistently under-specifies tools (missing Write), under-allocates turns, and uses a blanket "JSON" output format. The doc 05 values are more carefully tuned to each agent's actual workload.

---

## 2. CLAUDECODE Bypass Verification

### 2.1 Plan Specification

The plan correctly specifies the CLAUDECODE bypass in the token isolation section (line 232):

```typescript
const spawnOptions = {
  env: {
    ...process.env,
    CLAUDECODE: undefined,  // BLOCKING: must unset for nested calls
    // ...
  }
};
```

This is also listed as a gap (GAP-A06/E01, line 61): "Every `child_process.spawn()` unsets it: `env: { ...process.env, CLAUDECODE: undefined }`. Hardcode in `claude-cli.ts` as constant."

### 2.2 Cross-Reference with Docs

- **Doc 04 (line 27-33):** Confirms `CLAUDECODE=` (empty string) bypasses the nesting guard. The error message itself documents the bypass. Empirically verified.
- **Doc 04 (line 39-43):** Confirms `CLAUDECODE=1` is the env var set by parent Claude Code.
- **Doc 01 (Section 11.4, line 624):** Mentions CLAUDE.md traversal — related but not the same issue.

### 2.3 Verdict

**CORRECT.** The plan correctly handles the CLAUDECODE bypass. One nuance: the plan uses `CLAUDECODE: undefined` (removes the key entirely) while doc 04's shell tests use `CLAUDECODE=` (sets to empty string). Both work, but `undefined` is cleaner in Node.js because it removes the key from the inherited environment rather than passing an empty string. No issue.

### 2.4 Verification Checklist Item

The plan includes verification step I.9: "CLAUDECODE bypass works from within Claude Code" and verification table item 6: `CLAUDECODE= claude -p --model opus --max-turns 1 -p "say hi" --output-format json` succeeds.

**Note:** The verification command has a bug: `--max-turns 1 -p "say hi"` — the `-p` flag appears twice (once at the start of the command, implicitly, and once before the prompt). This would likely be interpreted as `claude -p --model opus --max-turns 1 -p "say hi" --output-format json` where `-p "say hi"` is a second `-p` flag. The correct form should use stdin piping: `echo "say hi" | CLAUDECODE= claude -p --model opus --max-turns 1 --output-format json`. Minor but a copy-paste bug in the verification section.

---

## 3. Token Isolation Strategy Verification (4 Layers from Doc 01 Section 9)

### 3.1 Doc 01's 4-Layer Strategy (Section 9.2)

1. **Scoped working directory:** Set subprocess `cwd` to dedicated workspace
2. **Git boundary:** Create `.git/HEAD` in workspace (blocks upward CLAUDE.md traversal)
3. **Empty plugin directory:** `--plugin-dir /empty/dir`
4. **Setting sources:** `--setting-sources project,local` (excludes user-level settings)

### 3.2 Plan's Implementation

The plan's token isolation section (lines 226-241) covers:

| Layer | Doc 01 Spec | Plan Spec | Present? |
|-------|------------|-----------|----------|
| 1. Scoped cwd | Set subprocess `cwd` to dedicated workspace | `cwd: isolatedWorkdir` (line 237: "Dir with .git/HEAD to block CLAUDE.md traversal") | **YES** |
| 2. Git boundary | Create `.git/HEAD` in workspace | Implied by line 237 comment but **NO explicit code** to create `.git/HEAD` | **PARTIAL** — mentioned as a comment, no creation code |
| 3. Empty plugin dir | `--plugin-dir /empty/dir` | **MISSING** | **NO** |
| 4. Setting sources | `--setting-sources project,local` | `// Optional: --setting-sources "" to prevent loading user settings` (line 240) | **PARTIAL** — mentioned as optional comment, not in the actual flags |

### 3.3 Verdict

**INCOMPLETE.** 2 of 4 layers are missing or demoted to optional:

- **Layer 3 (plugin dir)** is entirely absent from the plan. Doc 01 says plugin injection can add significant tokens. This should be in the `execClaude` wrapper.
- **Layer 4 (setting sources)** is marked "Optional" in a comment. It should be mandatory for the pipeline — user settings can inject CLAUDE.md content that conflicts with agent prompts.
- **Layer 2 (git boundary)** is described in the comment but the plan doesn't include code to create the `.git/HEAD` file in the workspace setup phase. The directory structure section (lines 460-515) doesn't include a setup step for the isolated workspace.

**Recommendation:** Add all 4 layers as mandatory in the `execClaude` wrapper or in a one-time workspace setup function. The plan should include:
```typescript
// In workspace setup (run once at pipeline start):
await fs.mkdir(path.join(workspaceDir, '.git'), { recursive: true });
await fs.writeFile(path.join(workspaceDir, '.git/HEAD'), 'ref: refs/heads/main');
await fs.mkdir(path.join(workspaceDir, '.claude'), { recursive: true });
await fs.writeFile(path.join(workspaceDir, '.claude/settings.json'), '{}');

// In every execClaude call:
const args = [
  '-p',
  '--setting-sources', '',       // Layer 4: no user/global settings
  '--disable-slash-commands',    // Prevent skill injection
  // ... other flags
];
```

---

## 4. Rotation Formula Verification

### 4.1 Plan's Formula (line 184)

```
shift = Math.floor(files.length * rotationIndex / 3)
```

With `rotationIndex` = 0, 1, 2 for rotations A, B, C.

### 4.2 Doc 02's Formula (line 127)

```
shift = Math.floor(files.length * rotationIndex / 3)
```

Identical formula. Doc 02 also provides concrete examples:
- 5 files: shifts 0, 2, 4 (hardcoded in `ROTATION_RHYTHM`)
- `rotateFiles` function: `[...files.slice(shift), ...files.slice(0, shift)]`

### 4.3 Doc 00's Visualization (lines 419-438)

```
Files: [A] [B] [C] [D] [E]
Rotation A (passes 1-3): A B C D E        (shift 0)
Rotation B (passes 4-6): C D E A B        (shift 2)
Rotation C (passes 7-8): E A B C D        (shift 4)
```

For 5 files:
- rotationIndex=0: `floor(5*0/3) = 0` -> A B C D E  -- MATCHES
- rotationIndex=1: `floor(5*1/3) = 1` -> B C D E A  -- **DOES NOT MATCH** (doc 00 shows C D E A B = shift 2)
- rotationIndex=2: `floor(5*2/3) = 3` -> D E A B C  -- **DOES NOT MATCH** (doc 00 shows E A B C D = shift 4)

### 4.4 Contradiction Analysis

The formula `Math.floor(files.length * rotationIndex / 3)` with indices 0, 1, 2 produces shifts 0, 1, 3 for 5 files. But doc 02's `ROTATION_RHYTHM` constant hardcodes shifts 0, 2, 4. The formula and the constant are **inconsistent**.

**The hardcoded values (0, 2, 4) match doc 00's visualization.** The formula does NOT produce these values for 5 files.

The formula would work if `rotationIndex` were 0, 1, 2 but the divisor were `numRotations` (3) and the multiplier were `files.length`:
- For 5 files: `floor(5*0/3)=0, floor(5*1/3)=1, floor(5*2/3)=3` -> shifts 0, 1, 3 (WRONG)

A correct formula producing 0, 2, 4 for 5 files would be:
- `rotationIndex * Math.floor(files.length / 3)` -> `0*1=0, 1*1=1, 2*1=2` (WRONG)
- OR simply: `shift = Math.round(files.length * rotationIndex / 3)` -> `0, 2, 3` (STILL WRONG for C)

Actually for 5 files with shifts 0, 2, 4:
- `shift = rotationIndex * 2` -> 0, 2, 4 -- works for 5 files specifically

The formula in doc 02 is a generic formula that tries to evenly distribute. Let's check: for 4 files, `floor(4*0/3)=0, floor(4*1/3)=1, floor(4*2/3)=2` gives shifts 0, 1, 2 which is decent. For 6 files: 0, 2, 4 which is good.

**But doc 02 hardcodes shifts 0, 2, 4 as constants and ALSO provides the formula.** The implementation uses `ROTATION_RHYTHM` (the constants), not the formula. So the formula is documentation that doesn't match the code.

### 4.5 Plan's Handling

The plan (line 184) cites the formula but also defers to doc 02: "Rotation shift formula (handles variable subset sizes 4-6 files): `shift = Math.floor(files.length * rotationIndex / 3)`". The plan's file structure (line 468) says: `rotation.ts — computeRotation(files, rotationIndex): pure function, no I/O. shift = Math.floor(files.length * rotationIndex / 3). Returns reordered file array.`

This means the plan WILL implement the formula, not the hardcoded constants. For 5 files, the formula gives shifts 0, 1, 3 instead of 0, 2, 4.

### 4.6 Verdict

**CONTRADICTION.** The rotation formula in the plan and doc 02 does not produce the shift values shown in doc 00's visualization or doc 02's own `ROTATION_RHYTHM` constant. For subsets with 5 files (which is the most common), Rotation B would shift by 1 instead of 2, and Rotation C would shift by 3 instead of 4.

**Impact:** Rotation B would give primacy to the 2nd file (not 3rd), and Rotation C would give primacy to the 4th file (not 5th). The "every file gets turns at every attention position" claim (doc 00 line 438) would be violated — the last file in a 5-file subset would never get primacy.

**Recommendation:** The `rotation.ts` implementation should either:
1. Use the hardcoded `ROTATION_RHYTHM` from doc 02 (shifts 0, 2, 4 — works well for 4-6 file subsets), OR
2. Fix the formula to: `shift = Math.round(files.length * rotationIndex / numRotations)` with `numRotations = 3` and clamp to `files.length - 1`, OR
3. Use `shift = Math.floor(files.length * (rotationIndex + 1) / (numRotations + 1))` which gives: for 5 files -> floor(5/4)=1, floor(10/4)=2, floor(15/4)=3 (still not 0, 2, 4).

The simplest correct approach: compute the shift as `Math.floor(files.length * rotationIndex / 3)` BUT use `rotationIndex` values of 0, 1.2, 2.4 (i.e., evenly spaced across the array length). Or just hardcode per-subset: that's what doc 02's actual code does.

---

## 5. Phase A Loop Logic Verification

### 5.1 56 Passes

The plan specifies (lines 105-146):
```
For each subset S1..S7:
  For each pass P1..P8:
    1-10 steps per pass
  Checkpoint after subset
  Cross-subset verifier (every 2 subsets)
  Retrospective
```

7 subsets x 8 passes = **56 passes**. CORRECT.

### 5.2 Step-by-Step Verification

| Step | Plan Spec | Complete? |
|------|-----------|-----------|
| 1. Compute rotation | "carousel: shift every 2-3 passes" | YES — rotation A (1-3), B (4-6), C (7-8) |
| 2. Assemble prompt | 5 layers enumerated | YES — world, corpus, artifact+tissue+verifier, role, cross-subset |
| 3. Token check | "if >100K tokens, trim conviction layer -> trim valley files" | YES — trimming strategy specified |
| 4. Spawn builder | `claude -p --model opus --output-format json --max-turns 1 --allowedTools ""` | YES |
| 5. Parse JSON response | "extract HTML from `result` field" | YES |
| 6. Validate | "structural checks + diff from previous + size sanity" | YES |
| 7. Conditional verifier | "If pass is 2, 5, or 8: spawn verifier" | YES — 3 verifier passes per subset (one per rotation) |
| 8. Extract conviction | "conviction additions + discovery log" | YES |
| 9. Record metrics | "cost, tokens, artifact size delta, verifier signal" | YES |
| 10. Save state | "write .tmp -> rename" | YES — atomic write pattern |

### 5.3 Checkpoint and Retrospective

- **Checkpoint:** "snapshot artifact + state + metrics to `_checkpoints/SN/`" — YES, after each subset.
- **Cross-subset verifier:** "every 2 subsets: check early patterns still visible" — YES.
- **Retrospective:** "claude -p reviewing all verifier observations + artifact evolution" — YES. Listed in the invocation reference table with `--max-turns 10, --tools Read`.

### 5.4 Verdict

**Phase A loop is COMPLETE.** All 56 passes accounted for, checkpoint/retrospective specified, 10-step per-pass sequence is thorough.

### 5.5 Minor Gaps

- **Verifier on passes 2, 5, 8** — pass 8 is the final verifier in Rotation C. But the builder only has passes 7 in Rotation C. If verifier pass 8 finds issues, there's no builder pass to address them within the subset. The plan acknowledges this implicitly (it's the final quality check before checkpoint).
- **Cross-subset verifier frequency:** "every 2 subsets" = after S2, S4, S6. What about after S7 (the final one)? Not specified, but Phase B's PA cycle serves this purpose.

---

## 6. Phase B Loop Logic Verification

### 6.1 8 Steps Per Cycle

The plan (lines 148-172) specifies:

| Step | Plan Spec | Doc 00 Spec | Doc 05 Spec | Match? |
|------|-----------|-------------|-------------|--------|
| 1. Serve + screenshot | "Serve artifact via local HTTP server" | "Deterministic Playwright" (3 viewports, DPR 1.0) | Full implementation with HTTP server, 3 viewports, animation disable | YES |
| 2. Gate runner | "Run programmatic gates (gate-runner-browser.js via Playwright page.evaluate)" | "42 gates executed as pure code" | Not detailed (Step 2 references doc 02) | YES |
| 3. Gate verdict | "Compute gate verdict (deterministic code — GR-01 through GR-84)" | "Gate verdict: PROCEED_TO_PA / IMPROVE / RETHINK" | Binary code routing | **PARTIAL** — plan says GR-01 through GR-84 (84 gates) but doc 00 says 42 gates. The plan's constants.ts mentions 42+ gate functions. |
| 4. 8 PA auditors | "Spawn 8 PA auditors (A-H) in PARALLEL" | "9 PARALLEL claude -p calls" | "9 parallel claude -p invocations" (8 A-H + 1 integrative spawned after) | **INCONSISTENCY** — plan says 8 parallel (step 6), doc 00 diagram shows 8 parallel + 1 sequential (I), doc 05 matches this |
| 5. Wait for A-H | "Wait for all 8 to complete" | — | — | YES |
| 6. Integrative (I) | "Spawn integrative auditor (I) SEQUENTIALLY — reads A-H reports" | "PA-I: Integrative (spawns AFTER A-H complete)" | Step 5: 1 sequential `claude -p` | YES |
| 7. Weaver | "Spawn weaver — reads all 9 reports + gate results + screenshots + conviction" | "Reads all 9 auditor reports, reads gate results, own experiential anchor" | Full prompt construction + `WeaverVerdict` structure | YES |
| 8. Routing | "SHIP: pa05 >= 3.5 AND tier5 >= 6/8 AND zero soul violations" | "SHIP / REFINE / REBUILD" | "RELEASE / POLISH / IMPROVE / RETHINK" + binary routing | **PARTIAL** — see 6.2 |

### 6.2 Routing Verdicts Mismatch

| Verdicts | Plan | Doc 00 | Doc 05 |
|----------|------|--------|--------|
| Good enough to ship | SHIP | SHIP | RELEASE |
| Needs refinement | REFINE | REFINE | POLISH / IMPROVE |
| Fundamentally broken | RETHINK | REBUILD | RETHINK |
| Abort | (not specified) | (not specified) | ABORT (pa05 < 2.5 after cycle >= 3) |

The plan uses doc 00's simpler 3-verdict model. Doc 05 has a 4-verdict model (RELEASE / POLISH / IMPROVE / RETHINK) plus ABORT. The plan should adopt doc 05's vocabulary since it's the more detailed spec and distinguishes between light polish and structural improvement.

### 6.3 9 Auditors (8+1) Verification

- **Plan step 6:** 8 parallel (A-H)
- **Plan step 8:** 1 sequential integrative (I) — reads A-H reports
- **Doc 00:** Shows 8 parallel (A-H) then 1 sequential (I)
- **Doc 05:** 9 total: 8 parallel (A-H with assigned questions) + 1 integrative (I, no assigned questions, reads A-H)

**CONSISTENT across all sources.** Total: 8 parallel + 1 sequential = 9 auditor reports fed to weaver.

### 6.4 Stall Detection

Plan (line 168): "2 consecutive cycles with no PA improvement -> force SHIP"
Doc 05 (line 42-43): `maxStalledCycles: 2` — "PA-05 did not improve for maxStalledCycles consecutive cycles"

**CONSISTENT.** Both specify 2 consecutive no-improvement cycles as the trigger.

### 6.5 Mini-PA

Plan (line 171): "Every 2-3 refinement passes, run 3 auditors + 1 viewport"
Doc 05 (Section 9.3): Not found in the sections I read.

The plan mentions mini-PA but doesn't detail which 3 auditors, which viewport, or how the mini-PA verdict feeds back. This is a specification gap that may be deferred to implementation.

### 6.6 Budget Enforcement

Plan (line 169): "if total cost > $250 -> pause and warn"
Plan constants (line 463): `budgetWarning: 150, budgetCap: 250`
Doc 05 (line 1864): "If cumulative cost exceeds $200, force SHIP regardless of PA-05"

**MISMATCH:** Plan says $250 hard cap. Doc 05 says $200 force SHIP. The plan also has a $150 warning threshold (not in doc 05).

### 6.7 Verdict

**Phase B loop is SUBSTANTIALLY COMPLETE but has reconciliation gaps:**
1. Verdict vocabulary needs unification (SHIP/REFINE/RETHINK vs RELEASE/POLISH/IMPROVE/RETHINK/ABORT)
2. Budget cap: $200 vs $250
3. Gate count: 42 vs 84
4. Mini-PA is under-specified
5. Missing ABORT path in plan (doc 05 has it: pa05 < 2.5 after 3+ cycles)

---

## 7. Budget Enforcement Verification

| Budget Feature | Plan | Doc 05 | Docs 00/01/02/04 | Present? |
|---------------|------|--------|-------------------|----------|
| Per-call `--max-budget-usd` | GAP-G01 mention, not in invocation table | Not specified per-call | Doc 01: `--max-budget-usd` flag exists (Sec 2.7) | **MISSING from invocation table** |
| Warning threshold | $150 (constants.ts) | Not specified | — | YES (plan only) |
| Hard cap | $250 (constants.ts, line 169) | $200 (line 1864) | — | **MISMATCH** |
| Cost tracking | `total_cost_usd` from JSON output | Per-cycle cost tracking | Doc 04 confirms field exists | YES |
| Cost circuit breaker | GAP-G01 mentions "budget warning at $150, hard cap at $250" | Time ceiling: 4 hours | — | PARTIAL — plan has cost, doc 05 adds time ceiling |
| Per-agent budget | Not in invocation table | Not specified | Doc 01 Sec 2.7 supports it | **MISSING** |

**Recommendation:** Add `--max-budget-usd` to each agent's invocation. Suggested per-agent budgets:
- Builder/Verifier (Phase A): $3-5 per call
- PA Auditor: $2-3 per call
- Weaver: $5-8 per call (high input token count)
- Refine Builder: $5 per call

---

## 8. Missing Flags Audit

### 8.1 `--no-session-persistence`

**In the plan?** YES — listed in the invocation reference table for all roles (lines 215-223) and in the token isolation section (line 239).

**In the docs?**
- Doc 01 Sec 2.8: Fully documented. "Sessions not saved to disk, cannot be resumed."
- Doc 01 Sec 5.2: "Fastest startup, no disk I/O for session files. Cannot be resumed. Ideal for stateless pipeline passes."
- Doc 02: NOT in the `invokeClaudeP` code (line 1264-1270). Missing from the args array.
- Doc 05: NOT in the `execClaude` code (line 1738-1744). Missing from the args array.

**Verdict:** Plan correctly specifies it for all roles. Doc 02 and Doc 05 implementation code omit it. The implementation must add it.

### 8.2 `--fallback-model`

**In the plan?** Mentioned in the medium-gaps paragraph (line 97): "`--fallback-model` for 12-20hr runs". NOT in the invocation reference table. NOT in the token isolation section.

**In the docs?**
- Doc 01 Sec 2.10: `--fallback-model sonnet`. "Auto-fallback when primary model is overloaded."
- Doc 04 Sec 3.1: Tested and working.

**Verdict:** **MISSING from plan's invocation specifications.** For a 12-20 hour pipeline run, Opus overload is almost certain. `--fallback-model sonnet` should be on every Opus call as a resilience measure. Doc 01 recommends it. The plan acknowledges the need (medium gap) but never resolves it into the invocation table.

### 8.3 `--effort`

**In the plan?** Mentioned in the medium-gaps paragraph (line 97): "`--effort` flag per role". NOT in the invocation reference table.

**In the docs?**
- Doc 01 Sec 2.4: `--effort low/medium/high`. "Currently supported on Opus 4.6."
- Doc 04 Sec 12.1: Tested with `--effort low` for quick checks.

**Verdict:** **MISSING from plan's invocation specifications.** This is a cost optimization opportunity:
- Builder/Verifier (Phase A): `--effort high` (creative work, needs full reasoning)
- PA Auditor: `--effort high` (perceptual judgment)
- Weaver: `--effort high` (synthesis)
- Gate verification (if any LLM involvement): `--effort low`
- Retrospective: `--effort medium`

Without `--effort`, all calls default to `high`, which is fine for quality but may be unnecessarily expensive for mechanical tasks.

### 8.4 `--debug-file`

**In the plan?** Mentioned in the medium-gaps paragraph (line 97): "`--debug-file` for diagnostics". NOT in the invocation reference table.

**In the docs?**
- Doc 01 Sec 2.14: `--debug-file /tmp/debug.log`. "Write debug to file."

**Verdict:** **MISSING from invocation specifications.** This is a nice-to-have for debugging pipeline issues. Suggest adding `--debug-file` to a per-pass log file (`logs/debug-S{subset}-P{pass}.log`) gated behind a `--debug` CLI flag on the orchestrator itself.

### 8.5 `--dangerously-skip-permissions`

**In the plan?** **NOT FOUND.** Searched the entire plan — zero mentions.

**In the docs?**
- Doc 01 Sec 2.9: Required for automation. "Claude continues consuming tokens even when lacking permissions. Does NOT fail gracefully."
- Doc 01 Sec 11.2: "Always use `--dangerously-skip-permissions` for unattended automation."
- Doc 04 Sec 4.3: Empirically verified as required.
- Doc 01 Sec 12.1 (recommended config): Includes `--dangerously-skip-permissions`.

**Verdict:** **CRITICAL OMISSION.** Without `--dangerously-skip-permissions`, every `claude -p` call will prompt for tool permissions and hang indefinitely in pipe mode. The plan's `claude-cli.ts` (line 473) mentions "CLAUDECODE=undefined" but does not mention `--dangerously-skip-permissions`. This is a **BLOCKING** issue — the pipeline will not function without this flag.

The plan uses `--allowedTools` which auto-approves specific tools, but doc 01 Sec 11.2 explicitly warns that `--allowedTools` "does NOT reliably restrict built-in tools" and that permission prompting still occurs for tools not in the list. The safe approach for a headless pipeline is `--dangerously-skip-permissions`.

### 8.6 `--disable-slash-commands`

**In the plan?** NOT FOUND.

**In the docs?**
- Doc 01 Sec 2.15: `--disable-slash-commands` — disables all skills.
- Doc 01 Sec 12.1: Included in recommended configuration.

**Verdict:** **MISSING.** Should be added to prevent agents from accidentally invoking skills (like `/commit`, `/review-pr`). Low severity but good hygiene for automation.

### 8.7 `--tools` vs `--allowedTools` Confusion

The plan uses `--allowedTools ""` for the Phase A builder (no tools). Doc 01 Sec 11.3 warns: "`--allowedTools` does NOT reliably restrict built-in tools. Use `--tools` to control the available tool SET."

For the builder that should have NO tools, the plan should use `--tools ""` (controls availability) rather than `--allowedTools ""` (controls auto-approval). The plan's gap GAP-B02 (line 72) acknowledges this confusion: "Per-role tool config: Builder `--max-turns 1 --allowedTools ""`. PA `--tools "Read,Glob,Grep"`." It mixes `--tools` and `--allowedTools` without a clear strategy.

**Recommendation:** Use `--tools` to define what tools are AVAILABLE, and `--dangerously-skip-permissions` to skip approval. Do not use `--allowedTools` at all.

---

## 9. Summary of Findings

### BLOCKING Issues (must fix before implementation)

| # | Finding | Severity | Location |
|---|---------|----------|----------|
| B1 | `--dangerously-skip-permissions` entirely absent from plan | **BLOCKING** | All invocations |
| B2 | PA Auditor/Integrative/Weaver missing `Write` tool (can't produce report files) | **BLOCKING** | Plan invocation table lines 220-222 |
| B3 | Rotation formula produces wrong shifts for 5-file subsets (0,1,3 instead of 0,2,4) | **HIGH** | Plan line 184, doc 02 lines 127+143 |

### HIGH Issues (significant impact)

| # | Finding | Severity |
|---|---------|----------|
| H1 | PA Auditor `--max-turns 15` should be 30 (doc 05) | HIGH |
| H2 | Weaver `--max-turns 20` should be 40 (doc 05) | HIGH |
| H3 | Token isolation missing 2 of 4 layers (plugin dir, setting sources) | HIGH |
| H4 | `--fallback-model` not in invocation table (12-20hr run needs resilience) | HIGH |
| H5 | Budget cap mismatch: plan $250 vs doc 05 $200 | HIGH |

### MEDIUM Issues (should fix)

| # | Finding | Severity |
|---|---------|----------|
| M1 | `--output-format` text vs json confusion for Phase B agents | MEDIUM |
| M2 | Verdict vocabulary not unified (SHIP/REFINE/RETHINK vs RELEASE/POLISH/IMPROVE/RETHINK/ABORT) | MEDIUM |
| M3 | Integrative auditor `--max-turns 15` should be 20 | MEDIUM |
| M4 | Refine Builder `--max-turns` 30 (plan) vs 15 (doc 05) needs reconciliation | MEDIUM |
| M5 | `--effort` not specified per role (cost optimization missed) | MEDIUM |
| M6 | Mini-PA under-specified (which 3 auditors, which viewport, how verdict feeds back) | MEDIUM |
| M7 | Gate count: plan says GR-01 through GR-84 but doc 00/doc 05 say 42 gates | MEDIUM |
| M8 | `--tools` vs `--allowedTools` strategy not consistent (GAP-B02 unresolved) | MEDIUM |
| M9 | Missing ABORT path in plan's routing logic | MEDIUM |
| M10 | `--disable-slash-commands` missing (automation hygiene) | MEDIUM |

### LOW Issues (nice to have)

| # | Finding | Severity |
|---|---------|----------|
| L1 | `--debug-file` not in invocation table | LOW |
| L2 | Verification item 6 has `-p` flag duplication bug | LOW |
| L3 | Per-agent `--max-budget-usd` not specified | LOW |
| L4 | Doc 05 adds time ceiling (4 hours) not in plan | LOW |

### What's Correct

- CLAUDECODE bypass: properly specified and verified
- Phase A loop: complete (56 passes, 10 steps, checkpoint, retrospective)
- Phase B structure: 8 steps, 8+1 auditors, weaver, routing (substantially complete)
- Model selection: consistently Opus for all creative/judgment roles
- Stall detection: 2 consecutive no-improvement cycles -> force SHIP (matches doc 05)
- Atomic state writes: .tmp -> rename pattern
- JSON output format for Phase A (resolves doc 02's text vs doc 00's json)
- Cross-subset verifier every 2 subsets
- Information isolation matrix in doc 05 (auditors get ZERO build context)

---

## 10. Recommended Canonical Invocation Template

Based on reconciling all sources, the canonical `execClaude` wrapper should use:

```typescript
const baseArgs = [
  '-p',
  '--dangerously-skip-permissions',   // B1: BLOCKING — must have
  '--no-session-persistence',         // Stateless passes
  '--output-format', 'json',          // Cost tracking + structured parsing
  '--disable-slash-commands',         // Automation hygiene
  '--model', role.model,              // Per-role model
  '--max-turns', String(role.maxTurns),
  '--tools', role.tools.join(','),    // Use --tools (not --allowedTools)
  '--fallback-model', 'sonnet',       // Resilience for 12-20hr runs
];

// Add per-role extras
if (role.strictMcp) {
  baseArgs.push('--strict-mcp-config');  // PA auditors: no MCP
}
if (role.effort !== 'high') {
  baseArgs.push('--effort', role.effort);
}
if (config.debug) {
  baseArgs.push('--debug-file', role.debugLogPath);
}
```

And the per-role configurations should be:

| Role | Model | Max Turns | Tools | Effort | Strict MCP | Budget |
|------|-------|-----------|-------|--------|------------|--------|
| TC Derivation | opus | 30 | Read,Write,Edit | high | no | $5 |
| Content Analysis | opus | 30 | Read,Write,Edit | high | no | $5 |
| Builder (Phase A) | opus | 1 | (none: `--tools ""`) | high | no | $5 |
| Verifier (Phase A) | opus | 1 | (none) | high | no | $3 |
| Retrospective | opus | 10 | Read | medium | no | $3 |
| PA Auditor (x8) | opus | 30 | Read,Write,Glob | high | YES | $3 |
| Integrative Auditor | opus | 20 | Read,Write,Glob | high | YES | $3 |
| Weaver | opus | 40 | Read,Write,Glob | high | no | $8 |
| Refine Builder | opus | 20 | Read,Write,Edit | high | no | $5 |
