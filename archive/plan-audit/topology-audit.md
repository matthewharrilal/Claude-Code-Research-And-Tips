# Team Topology Audit — Phase D Execution Plan

**Auditor:** topology-auditor
**Date:** 2026-02-14
**Plan:** `~/.claude/plans/giggly-drifting-eich.md` (640 lines)
**Context:** User requirement — "TeamCreate should be the FIRST line of our plan" and topology should be "enriched and inherent throughout the whole plan's process"

---

## EXECUTIVE SUMMARY

**OVERALL STATUS: SURFACE topology integration**

The plan describes a well-structured team topology (Section 2, lines 17-51) BUT:
- TeamCreate is NOT the first action — it's buried in Section 2 as documentation
- Topology is BOLTED-ON (standalone section) not INHERENT (organizing principle)
- Agent prompts are COMPLETE (role, files, output, binary rules) BUT scattered across waves
- 14-team lessons are PARTIALLY incorporated (7/10 YES, 3/10 PARTIAL/MISSING)

**What this means:**
The plan is EXECUTABLE and will likely produce valid results. However, it doesn't meet the user's KEY requirement: topology should DRIVE the plan structure, not just be described.

**Recommended action:**
- RESTRUCTURE: Move TeamCreate to literal first line of Section 5 (Wave-by-Wave Execution)
- REFRAME: Organize entire plan by waves (not by conceptual sections)
- ENRICH: Add topology concepts to Sections 6-10 (criteria assignment, risk mitigation)

---

## 1. CRITICAL: TeamCreate as First Action

**Status: NO** — TeamCreate is in Section 2 (documentation), not Section 5 (execution)

### Current State

**Line 20:** `TeamCreate: "phase-d-execution"` appears in Section 2 (Team Topology)

**Section 5 starts (line 128):** "WAVE 0: Content Preparation (15-30 min)"
- First action: Lead creates directory scaffold (`mkdir`)
- Second action: Lead starts HTTP server
- Third action: Spawn content-preparer agent

**TeamCreate is NOT executed** — it's referenced in documentation, but Section 5 (actual execution flow) starts with `mkdir`, not `TeamCreate`.

### Required Change

**User requirement:** "TeamCreate should be the FIRST line of our plan"

**Correct structure:**
```
## 5. Wave-by-Wave Execution

**Step 1: Create Team**
TeamCreate: "phase-d-execution"

**Step 2: Setup (Lead actions BEFORE spawning)**
1. Create directory scaffold: mkdir -p ephemeral/phase-d-execution/{content,builds,logs,evaluation,screenshots}
2. Start HTTP server: cd ephemeral/phase-d-execution/builds && python3 -m http.server 8888 &
3. Verify: curl http://localhost:8888/

**Step 3: Spawn Content Preparer**
...
```

**Current plan:** Section 2 describes team (documentation) → Section 5 executes waves (action)
**Required plan:** Section 5 starts with `TeamCreate` (action) → waves follow → topology is HOW work flows

**Severity:** CRITICAL — this is the user's PRIMARY requirement, explicitly stated

---

## 2. TOPOLOGY AS ORGANIZING PRINCIPLE

**Status: BOLTED-ON** — topology is described (Section 2) but doesn't organize the plan

### Evidence: Topology is Separate Section

**Section 2 (lines 17-51):** "Team Topology — 12 Agents + Lead"
- This is a DESCRIPTION of the topology
- Beautiful ASCII tree structure
- Wave breakdowns, gate definitions
- BUT: It's standalone (not integrated into execution flow)

### Evidence: Execution is NOT Organized by Topology

**Section 5 (lines 128-383):** "Wave-by-Wave Execution"
- Organized by waves (good first step)
- BUT: Each wave section includes:
  - Lead actions (setup, gates)
  - Agent prompts (detailed specs)
  - Mixed organization (some waves have tables, some have prose)

**What's MISSING:** Every action should be AGENT-ASSIGNED from the start

Example of INHERENT topology (what the plan SHOULD look like):

```
### WAVE 1: Build Phase (5 agents, ALL PARALLEL)

| Agent | Role | Reads | Writes | Model | Expected Time |
|-------|------|-------|--------|-------|---------------|
| builder-track-1 | Track 1 assembly | prohibitions, tokens, components.css, guidelines, content | builds/track-1-assembly.html + logs/track-1-log.md | Sonnet | 45-90 min |
| builder-variant-a | Variant A (skill only) | prohibitions, tokens, skill, content | builds/variant-a-skill-only.html + logs/variant-a-log.md | Sonnet | 150-300 min |
...

**Agent Prompts:**
[Each agent's FULL prompt with binary rules, file paths, model spec]

**Gate 1 Verification (Lead):**
ls ephemeral/phase-d-execution/builds/*.html | wc -l  # Should return 5
ls ephemeral/phase-d-execution/logs/*.md | wc -l      # Should return 5
```

**Current plan:** Waves described → agent details → gate checks (linear narrative)
**Topology-driven plan:** Waves as tables (agent assignments explicit) → prompts → gates (structure IS topology)

### Verdict

Topology is DESCRIBED (Section 2) but not INTEGRATED (Section 5+).

The plan will WORK (agents know what to do). But it doesn't meet the user's vision: "topology should be enriched and inherent throughout the whole plan's process."

**Status: BOLTED-ON** — topology is an artifact of the plan, not the skeleton

---

## 3. 14-TEAM LESSONS CHECK

| # | Lesson | Status | Plan Reference | Gap / Notes |
|---|--------|--------|----------------|-------------|
| 1 | **THIN Lead Rule** | ✅ YES | Line 22: "you — orchestrate only, THIN rule" | Lead doesn't build/audit |
| 2 | **File-writing binary rule** | ✅ YES | Line 172-174: "CRITICAL: You MUST write your HTML file... You MUST write your process log..." | In EVERY builder prompt |
| 3 | **Playwright max 2 concurrent** | ✅ YES | Line 212-216: "Phase 2a: programmatic + integration (parallel), Phase 2b: judge-a (after programmatic), Phase 2c: judge-b (after judge-a)" | Sequential scheduling |
| 4 | **File existence as completion signal** | ✅ YES | Line 206: "Gate 1 → 2: All 5 HTML files... Lead verifies file sizes > 0" | Lead checks files, not TaskUpdate |
| 5 | **HTTP server in Wave 0** | ✅ YES | Line 137-143: "Start HTTP server... curl http://localhost:8888/" | Before Playwright agents |
| 6 | **Per-file ownership** | ✅ YES | Line 168-170: "All 5 builders are file-only... Zero file contention — each writes to unique path" | Table 191-197 shows unique paths |
| 7 | **File-only agents preferred** | ✅ YES | Line 168: "All 5 builders are file-only (no Playwright)" | Builders don't need Playwright |
| 8 | **Recovery agents** | ⚠️ PARTIAL | Section 9, Risk #1 (line 494): "Nudge message → recovery agent" | Mentioned in risks, not execution flow |
| 9 | **Wave execution** | ✅ YES | Section 5 structure: Wave 0 → Gate 0 → Wave 1 → Gate 1 → Wave 2 → Gate 2 → Wave 3 | Clear wave boundaries |
| 10 | **Sonnet model for all agents** | ❌ MISSING | Prompts reference "Sonnet" in prose BUT not in agent specs | Table 191-197 has no Model column |

### Detailed Findings

**Lesson 8 (Recovery agents) — PARTIAL:**
- Risk mitigation (line 494) mentions recovery agents
- BUT: Not in execution flow (Wave sections don't say "if file missing, spawn recovery-X")
- Gap: Execution flow assumes perfect compliance (no recovery paths)

**Lesson 10 (Sonnet model) — MISSING:**
- Line 146: "Agent: content-preparer (general-purpose, Sonnet, file-only)" — YES
- Line 219: "Agent: programmatic-auditor (general-purpose, Sonnet, Playwright)" — YES
- BUT: Agent prompts (lines 172-187) don't include model specification
- Table 191-197: No "Model" column (should be "Sonnet" for all 5 builders)
- Gap: Agent spawn calls might not specify model (defaults to Opus?)

### Recommendations

1. **Add Model column** to Table 191-197 (all builders = Sonnet)
2. **Recovery agents in execution flow:** Add to each wave's verification gate
   ```
   Gate 1 Verification:
   - Check file existence (ls)
   - If file missing: Nudge agent "CRITICAL: File not found..."
   - If nudge fails: Spawn recovery-builder-X (read conversation, write file)
   ```
3. **Binary file-writing rule** is excellent (lines 172-174) — KEEP THIS

---

## 4. GATE STRUCTURE

| Gate | Type | Enforcement | Status | Line Ref |
|------|------|-------------|--------|----------|
| **Gate 0 → 1** | Content Pre-Audit | STRUCTURAL (file existence + content quality check) | ✅ GOOD | 159-164 |
| **Gate 1 → 2** | Build Completion | STRUCTURAL (file existence + size > 0) | ✅ GOOD | 206 |
| **Gate 2 → 3** | Evaluation Completion | STRUCTURAL (4 files exist) | ✅ GOOD | 283 |

### Analysis

All 3 gates are STRUCTURAL (file-based verification) not BEHAVIORAL (trust agent reports).

**Gate 0 (Content Pre-Audit):**
- Lead performs checks (line 160-164)
- Track 1: ≥8 component types annotated
- Track 2: prose >70%, richness ≥12, ≥4 tension axes
- File existence: Both content files exist, not empty
- **Excellent** — prevents "test content too simple" failure mode (05-failure-modes.md §1.1)

**Gate 1 (Build Completion):**
- Lead verifies: `All 5 HTML files in builds/ + all 5 log files in logs/. Lead verifies file sizes > 0.`
- **Excellent** — prevents "agents don't write files" failure mode (05-failure-modes.md §4.1)

**Gate 2 (Evaluation Completion):**
- Lead verifies: `All 4 evaluation files exist. Lead reviews for completeness.`
- **Excellent** — structural check before synthesis

**Missing:** What happens if gate FAILS?
- Gate 0 fails (content too simple) → "adapt content before spawning builders" (line 161)
- Gate 1 fails (file missing) → Not specified (assumes success)
- Gate 2 fails (evaluation incomplete) → Not specified

**Recommendation:** Add failure branches to each gate
```
Gate 1 → 2 Failure Protocol:
- If any HTML file missing: Check agent status (idle? crashed?)
- Nudge agent: "File not found at [path], MUST write before proceeding"
- If nudge fails (agent terminated): Spawn recovery-builder-X
- If file corrupt (size = 0): Respawn builder with same content
```

---

## 5. AGENT PROMPT COMPLETENESS

Checking EACH agent for: Role? Files? Output? Binary Rules? File-Write? Model?

### Wave 0: Content Preparer

| Element | Present? | Line Ref |
|---------|----------|----------|
| Role description | ✅ YES | 146: "Adapts real corpus content for both tracks" |
| Specific files to read | ✅ YES | 147-150: 3 files listed with full paths |
| Specific files to write | ✅ YES | 152-154: 2 output files with exact paths |
| Binary rules | ❌ NO | No MUST/NEVER language |
| File-writing emphasis | ❌ NO | No "CRITICAL: You MUST write..." |
| Model specification | ✅ YES | 146: "Sonnet" |

**Gap:** Content-preparer prompt lacks binary rules + file-writing emphasis (only builders have this)

### Wave 1: Builders (ALL 5)

| Element | Present? | Line Ref |
|---------|----------|----------|
| Role description | ✅ YES | Table 191-197: distinct roles |
| Specific files to read | ✅ YES | Table 191-197: "Reads" column |
| Specific files to write | ✅ YES | Table 191-197: "Writes HTML" + "Writes Log" |
| Binary rules | ✅ YES | Lines 172-187: CRITICAL rules, soul constraints, guardrails, epistemological framing |
| File-writing emphasis | ✅ YES | Lines 172-174: "CRITICAL: You MUST write your HTML file... You MUST write your process log..." |
| Model specification | ⚠️ PARTIAL | Prose mentions "Sonnet" (line 170) BUT table has no Model column |

**Gap:** Table 191-197 should have explicit "Model" column (all = Sonnet)

### Wave 2: Evaluation Agents

**programmatic-auditor** (line 219):
- Role: ✅ YES (19 binary checks × 5 pages × 2 viewports)
- Files: ✅ YES (HTML files via HTTP)
- Output: ✅ YES (`evaluation/programmatic-audit.md`)
- Binary rules: ⚠️ PARTIAL (checks are binary, but no agent prompt rules)
- File-write: ❌ NO (no "CRITICAL: You MUST write...")
- Model: ✅ YES ("Sonnet, Playwright")

**blind-judge-a** (line 231):
- Role: ✅ YES (extraction-aware PA evaluation)
- Files: ✅ YES (HTML via HTTP)
- Output: ✅ YES (`evaluation/visual-audit-judge-a.md`)
- Binary rules: ❌ NO
- File-write: ❌ NO
- Model: ✅ YES ("Sonnet, Playwright")

**blind-judge-b** (line 242):
- Role: ✅ YES (fresh-eyes PA evaluation)
- Files: ✅ YES (HTML via HTTP)
- Output: ✅ YES (`evaluation/visual-audit-judge-b.md`)
- Binary rules: ❌ NO
- File-write: ❌ NO
- Model: ✅ YES ("Sonnet, Playwright")

**integration-auditor** (line 248):
- Role: ✅ YES (PD-01 to PD-12 checks)
- Files: ✅ YES (HTML source + CSS + logs)
- Output: ✅ YES (3 files: integration-audit, gap-catalog, component-utilization)
- Binary rules: ⚠️ PARTIAL (PD criteria are binary thresholds)
- File-write: ❌ NO
- Model: ✅ YES ("Sonnet, file-only")

**Gap:** Wave 2 agents lack "CRITICAL: You MUST write..." emphasis (14th team lesson: file-writing failures occur in Playwright agents)

### Wave 3: Synthesis Agents

**cross-variant-analyst** (line 289):
- Role: ✅ YES (6 dimensions × 4 variants + 4 hypotheses)
- Files: ✅ YES (all evaluation files + logs)
- Output: ✅ YES (`evaluation/cross-variant-comparison.md`)
- Binary rules: ❌ NO
- File-write: ❌ NO
- Model: ✅ YES ("Sonnet, file-only")

**report-writer** (line 312):
- Role: ✅ YES (FINAL-REPORT.md with 12 sections)
- Files: ✅ YES (all evaluation files + cross-variant + logs)
- Output: ✅ YES (`FINAL-REPORT.md`)
- Binary rules: ❌ NO
- File-write: ❌ NO
- Model: ✅ YES ("Sonnet, file-only")

**Gap:** Synthesis agents lack file-writing emphasis

### Summary

| Agent Type | Role? | Files? | Output? | Binary? | File-Write? | Model? |
|------------|-------|--------|---------|---------|-------------|--------|
| content-preparer | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| 5 builders | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| programmatic-auditor | ✅ | ✅ | ✅ | ⚠️ | ❌ | ✅ |
| blind-judge-a | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| blind-judge-b | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| integration-auditor | ✅ | ✅ | ✅ | ⚠️ | ❌ | ✅ |
| cross-variant-analyst | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| report-writer | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |

**Key finding:** Builders have EXCELLENT prompts (lines 172-187 are crown jewel). All other agents LACK file-writing emphasis.

**Critical gap:** 14th team lesson — "All 19 agents wrote files successfully — ZERO file-writing failures (best team performance ever)." WHY? Because file-writing emphasis was in EVERY prompt, not just builders.

**Recommendation:** Add to EVERY agent prompt:
```
CRITICAL: You MUST write your output file [exact path] using the Write tool. Your work does NOT exist until the file is written. Return ONLY after Write tool call confirmed.
```

---

## 6. TOPOLOGY ENRICHMENT IN OTHER SECTIONS

Checking whether topology concepts appear in Sections 6-10 (not just Section 2+5)

### Section 6: Success Criteria (lines 386-456)

**Current state:** 43 criteria listed (29 mandatory + 14 recommended + 4 diagnostic)

**Topology concept:** None — criteria are NOT assigned to specific agents

**What's missing:**
- Which agent VERIFIES each criterion?
- M1.1-M1.6 (soul) → programmatic-auditor
- M2.1-M2.8 (guardrails) → programmatic-auditor
- M3.1-M3.2 (library utilization) → integration-auditor
- PA-01 to PA-05 → blind-judge-a + blind-judge-b

**Topology-enriched version:**
```
### Mandatory Criteria (29 items — ALL verified by agents)

**Soul Compliance (6 items — programmatic-auditor):**
M1.1: border-radius = 0 (programmatic check)
M1.2: box-shadow = none (programmatic check)
...

**Guardrails (8 items — programmatic-auditor at 1440px + 768px):**
M2.1: container ≥ 940px (DOM measurement)
...

**Visual Mandatory (5 items — blind-judge-a + blind-judge-b consensus):**
PA-01 through PA-05 (both judges MUST agree)
...
```

**Status:** NOT topology-enriched (criteria exist but not agent-assigned)

### Section 7: Disagreement Resolution (lines 462-470)

**Current state:** Protocol for judge disagreement (lines 462-470)

**Topology concept:** Lead's role defined (resolves PA-05 splits)

**Status:** ✅ PARTIAL topology enrichment (Lead's role clear, but doesn't reference team structure)

### Section 8: Required Downstream Artifacts (lines 472-487)

**Current state:** Table with 8 artifacts

**Topology concept:** "Producer" column assigns artifacts to agents

**Example (line 477):**
| # | Artifact | Producer | File Location | Consumer |
|---|----------|----------|---------------|----------|
| 2 | Gap Analysis | integration-auditor | evaluation/gap-catalog.md | Phase C, Phase E |

**Status:** ✅ EXCELLENT topology enrichment (artifacts assigned to producers)

### Section 9: Risk Mitigations (lines 489-501)

**Current state:** 7 risks with mitigations

**Topology concept:** None — risks describe WHAT, not WHO handles them

**What's missing:**
- Risk #1 (builders don't write files) → Lead detects (file check), Lead recovers (nudge/respawn)
- Risk #2 (Playwright contention) → Lead prevents (sequential spawning)
- Risk #7 (HTTP server) → Lead mitigates (starts server in Wave 0)

**Topology-enriched version:**
```
| # | Risk | Owner | Detection | Mitigation | Recovery |
|---|------|-------|-----------|------------|----------|
| 1 | Builders don't write files | Lead | File existence check (Gate 1) | Binary rule in prompts | Nudge → recovery agent (Lead spawns) |
| 2 | Playwright contention | Lead | Max 2 concurrent Playwright | Sequential Wave 2 spawning | Source-code fallback (agents adapt) |
```

**Status:** NOT topology-enriched (risks not assigned to owners)

### Section 10: Output Directory Structure (lines 503-535)

**Current state:** Directory tree with file descriptions

**Topology concept:** None — files are NOT assigned to producers

**What's missing:** Which agent writes each file?

**Topology-enriched version:**
```
ephemeral/phase-d-execution/
  content/
    track-1-content.md                    [content-preparer]
    track-2-content.md                    [content-preparer]
  builds/
    track-1-assembly.html                 [builder-track-1]
    variant-a-skill-only.html             [builder-variant-a]
    ...
  logs/
    track-1-log.md                        [builder-track-1]
    ...
  evaluation/
    programmatic-audit.md                 [programmatic-auditor]
    visual-audit-judge-a.md               [blind-judge-a]
    ...
  FINAL-REPORT.md                         [report-writer]
```

**Status:** NOT topology-enriched (files not tagged with producers)

### Summary Table

| Section | Topology Concept | Present? | Notes |
|---------|------------------|----------|-------|
| 6. Success Criteria | Agent assignments | ❌ NO | Criteria exist, not assigned to verifiers |
| 7. Disagreement | Lead role | ⚠️ PARTIAL | Lead resolves, but not framed as topology |
| 8. Downstream Artifacts | Producer assignments | ✅ YES | Table has Producer column (excellent) |
| 9. Risk Mitigations | Risk owners | ❌ NO | Risks described, not assigned |
| 10. Output Directory | File producers | ❌ NO | Directory tree, no [agent] tags |

**Overall:** 1/5 sections have topology enrichment (Section 8 only)

---

## 7. COMPARISON TO USER REQUIREMENT

**User's vision:** "TeamCreate should be the FIRST line of our plan" and topology should be "enriched and inherent throughout the whole plan's process."

### What the Plan DOES

✅ **Describes topology beautifully** (Section 2, ASCII tree, wave structure)
✅ **Organizes execution by waves** (Section 5, clear wave boundaries)
✅ **Assigns agents to waves** (explicit spawn points, parallel vs sequential)
✅ **Includes EXCELLENT builder prompts** (lines 172-187, binary rules)
✅ **Uses structural gates** (file existence checks, not behavioral trust)
✅ **Incorporates 7/10 of 14-team lessons** (THIN Lead, file ownership, Playwright sequencing)

### What the Plan DOESN'T DO

❌ **TeamCreate is NOT first action** (appears in Section 2 docs, not Section 5 execution)
❌ **Topology is bolted-on** (Section 2 is separate, not integrated into Sections 6-10)
❌ **Criteria not agent-assigned** (Section 6 lists criteria, doesn't say WHO verifies)
❌ **Risks not topology-framed** (Section 9 describes risks, doesn't assign owners)
❌ **Files not producer-tagged** (Section 10 directory tree, no agent attributions)
❌ **File-writing emphasis ONLY in builders** (Wave 2+3 agents lack binary rules)
❌ **Model specification inconsistent** (prose says "Sonnet", tables don't show Model column)

### Verdict

**The plan is EXECUTABLE** — agents will know what to do, gates will catch failures, output will be produced.

**The plan is NOT topology-driven** — topology is described (Section 2) but doesn't ORGANIZE the plan (Sections 5-10).

**Meets user requirement?** NO — TeamCreate is not first, topology is not inherent.

**Severity:** MODERATE — plan will work, but doesn't match user's architectural vision.

---

## 8. RECOMMENDED CHANGES

### 8.1 Move TeamCreate to First Action (CRITICAL)

**Current:** Section 2 (docs) → Section 5 (execution starts with `mkdir`)
**Required:** Section 5 starts with `TeamCreate`

**Change:**
```diff
## 5. Wave-by-Wave Execution

+**STEP 1: Create Team**
+
+TeamCreate: "phase-d-execution"
+
+Team members:
+- 1 content-preparer (Wave 0)
+- 5 builders (Wave 1, parallel)
+- 4 evaluators (Wave 2, staggered)
+- 2 synthesizers (Wave 3, parallel)
+
+Total: 12 agents across 4 waves + 2 gates
+
+---

-### WAVE 0: Content Preparation (15-30 min)
+### STEP 2: Setup (Lead actions BEFORE spawning)

-**Lead actions BEFORE spawning:**
1. Create directory scaffold: ...
2. Start HTTP server: ...
```

### 8.2 Add Model Column to Builder Table (HIGH)

**Current:** Table 191-197 has no Model column
**Required:** Explicit model specification

**Change:**
```diff
| Agent | Reads | Writes HTML | Writes Log | Skill? | Library Access |
+| Agent | Reads | Writes HTML | Writes Log | Skill? | Library Access | Model |
|-------|-------|------------|-----------|--------|----------------|
+|-------|-------|------------|-----------|--------|----------------|-------|
| builder-track-1 | ... | ... | ... | PA only | FULL | + Sonnet |
```

### 8.3 Add File-Writing Emphasis to ALL Agents (CRITICAL)

**Current:** Only builders (lines 172-174) have "CRITICAL: You MUST write..."
**Required:** ALL 12 agents need binary file-writing rule

**Change:** Add to content-preparer, programmatic-auditor, judges, integration-auditor, analysts, report-writer:

```
CRITICAL PROMPT RULES (every agent):
1. "You MUST write your output file [exact path] using the Write tool."
2. "Your work does NOT exist until the file is written."
3. "Return ONLY after Write tool call confirmed."
4. "Document your completion in the file itself (timestamp, status)."
```

### 8.4 Enrich Section 6 with Agent Assignments (MEDIUM)

**Current:** Criteria listed, not assigned
**Required:** Each criterion shows WHO verifies

**Change:**
```diff
### Mandatory (ALL must pass — binary)

-**Soul Compliance (6):** M1.1-M1.6 — border-radius=0, ...
+**Soul Compliance (6 items — programmatic-auditor verifies):**
+M1.1: border-radius = 0 everywhere (DOM check)
+M1.2: box-shadow = none everywhere (computed style check)
+...
+Agent: programmatic-auditor
+Method: Playwright DOM traversal + getComputedStyle()
+Pass threshold: 0 violations across all elements
```

### 8.5 Enrich Section 9 with Risk Owners (MEDIUM)

**Current:** Risks described, mitigations listed
**Required:** Each risk assigned to owner (who detects + who recovers)

**Change:**
```diff
-| # | Risk | Probability | Mitigation | Recovery |
+| # | Risk | Owner (Detect) | Owner (Recover) | Mitigation | Recovery |
|---|------|-------------|------------|----------|
-| 1 | Builders don't write files | MEDIUM | Binary rule in EVERY prompt + file existence gate | Nudge message → recovery agent |
+| 1 | Builders don't write files | Lead (Gate 1 check) | Lead (spawn recovery-X) | Binary rule in prompts + file existence gate | Nudge → respawn → recovery agent |
```

### 8.6 Enrich Section 10 with Producer Tags (LOW)

**Current:** Directory tree, no agent attributions
**Required:** Each file tagged with producer

**Change:**
```diff
ephemeral/phase-d-execution/
  content/
-    track-1-content.md
+    track-1-content.md                  [content-preparer]
-    track-2-content.md
+    track-2-content.md                  [content-preparer]
  builds/
-    track-1-assembly.html
+    track-1-assembly.html               [builder-track-1]
```

### 8.7 Add Recovery Protocol to Gates (MEDIUM)

**Current:** Gates check file existence, no failure branches
**Required:** Each gate includes failure protocol

**Change:**
```diff
**Gate 1 → 2:** All 5 HTML files in `builds/` + all 5 log files in `logs/`. Lead verifies file sizes > 0.

+**Gate 1 Failure Protocol:**
+- If any file missing: Check agent status (TaskList)
+- If agent idle: Nudge "CRITICAL: File [path] not found, you MUST write before proceeding"
+- If agent terminated: Spawn recovery-builder-X (read conversation, write file from output)
+- If file corrupt (size = 0): Respawn builder with same content + explicit file-write reminder
+- Maximum 2 recovery attempts per agent
```

---

## 9. FINAL VERDICT

**OVERALL: SURFACE topology integration**

### Strengths (What Works)

✅ **Team structure is sound** — 12 agents, 4 waves, 2 gates, clear hierarchy
✅ **Builder prompts are EXCELLENT** — binary rules, file-writing emphasis, epistemological framing (lines 172-187)
✅ **Structural gates** — file existence checks (not behavioral trust)
✅ **7/10 team lessons incorporated** — THIN Lead, per-file ownership, Playwright sequencing
✅ **Wave organization** — clear wave boundaries, parallel vs sequential explicit
✅ **Downstream artifacts assigned** — Section 8 has Producer column (topology-enriched)

### Gaps (What's Missing)

❌ **TeamCreate NOT first action** — buried in Section 2 (documentation), not Section 5 (execution)
❌ **Topology is bolted-on** — Section 2 describes team, doesn't organize Sections 6-10
❌ **File-writing emphasis ONLY in builders** — Wave 2+3 agents lack binary rules (critical gap from 14th team lesson)
❌ **Criteria not agent-assigned** — Section 6 lists criteria, doesn't say WHO verifies
❌ **Risks not topology-framed** — Section 9 describes risks, doesn't assign owners/detectors
❌ **Files not producer-tagged** — Section 10 directory tree lacks agent attributions
❌ **Model specification inconsistent** — prose says "Sonnet", table has no Model column
❌ **Recovery agents in risks, not gates** — failure protocols not in execution flow

### Severity Assessment

**CRITICAL gaps (must fix):**
1. TeamCreate not first action (user's PRIMARY requirement)
2. File-writing emphasis missing from 7/12 agents (14th team lesson: this prevents THE most common failure)

**HIGH gaps (should fix):**
3. Model specification inconsistent (table needs Model column)
4. Recovery protocols in risks, not gates (execution flow incomplete)

**MEDIUM gaps (nice to have):**
5. Criteria not agent-assigned (Section 6)
6. Risks not topology-framed (Section 9)
7. Files not producer-tagged (Section 10)

### Will the Plan Work?

**YES** — the plan is EXECUTABLE. Agents have clear roles, files, outputs. Gates catch failures. Output will be produced.

**BUT** — it doesn't meet the user's architectural vision: "topology should be enriched and inherent throughout the whole plan's process."

### Does It Meet User Requirements?

**NO** — for two reasons:

1. **TeamCreate is NOT first** — user explicitly said "TeamCreate should be the FIRST line of our plan." Current plan has `mkdir` as first action (line 133), TeamCreate in Section 2 (docs).

2. **Topology is NOT inherent** — it's described (Section 2) but doesn't organize the plan. Sections 6, 9, 10 have NO topology enrichment (criteria not assigned, risks not owned, files not producer-tagged).

### Recommended Action

**MINIMUM FIX (addresses critical gaps):**
- Move TeamCreate to literal first line of Section 5
- Add file-writing binary rule to ALL 12 agent prompts (not just builders)
- Add Model column to builder table (all = Sonnet)

**FULL TOPOLOGY ENRICHMENT (addresses user vision):**
- Restructure plan: Waves ARE the plan (not waves within sections)
- Assign criteria to agents (Section 6)
- Assign risks to owners (Section 9)
- Tag files with producers (Section 10)
- Add recovery protocols to gates (failure branches)

**Time estimate:**
- Minimum fix: 15-20 min (3 edits)
- Full enrichment: 45-60 min (restructure + 5 section edits)

---

## 10. APPENDIX: Example of INHERENT Topology

**What the plan currently looks like (BOLTED-ON):**

```
Section 2: Team Topology [describes team]
Section 5: Wave-by-Wave Execution [uses team]
Section 6: Success Criteria [lists criteria]
```

**What INHERENT topology looks like:**

```
Section 1: Team Definition
TeamCreate: "phase-d-execution"
[team structure, roles, model specs]

Section 2: Execution Flow (organized BY topology)
Wave 0: content-preparer → Gate 0 (Lead checks) → Wave 1
Wave 1: 5 builders (parallel, Sonnet, file-only) → Gate 1 (Lead checks) → Wave 2
Wave 2: 4 evaluators (staggered, 2 Playwright max) → Gate 2 (Lead checks) → Wave 3
Wave 3: 2 synthesizers (parallel, file-only) → Final output

Section 3: Success Criteria (organized BY agent)
programmatic-auditor verifies:
  - M1.1-M1.6 (soul)
  - M2.1-M2.8 (guardrails)
  - M5.1-M5.2 (multi-viewport)

blind-judge-a + blind-judge-b verify:
  - PA-01 to PA-05 (Tier 1, both must agree)
  - PA-06 to PA-20 (Tier 2)

integration-auditor verifies:
  - M3.1-M3.2 (library utilization)
  - M4.1-M4.3 (phase compliance)
  - M6.1-M6.2 (buildability)

report-writer synthesizes:
  - Overall verdict (PASS/CONDITIONAL/FAIL)
  - Recommended criteria (≥10/14 for PASS)

Section 4: Risk Mitigation (organized BY owner)
Lead mitigates:
  - Risk #1 (file-writing failures) → binary rules + Gate 1 check + recovery agents
  - Risk #2 (Playwright contention) → sequential Wave 2 spawning
  - Risk #7 (HTTP server) → Wave 0 setup

Agents mitigate:
  - Risk #2 (Playwright contention) → source-code fallback if browser blocked
  - Risk #6 (context exhaustion) → chunked builds, reference files

Section 5: Output (organized BY producer)
[Same directory tree, but each file tagged with [agent-name]]
```

**Key difference:** Topology IS the organizing principle (waves, agents, assignments). Not an artifact OF the plan, but the SKELETON of the plan.

---

**END TOPOLOGY AUDIT**
