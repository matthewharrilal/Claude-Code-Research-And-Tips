# AD Skeleton: Protocol Mining Results
## Proven Structural Patterns from 4 OD Execution Plans

**Source Documents Mined (8 total):**
1. `tranquil-bouncing-koala.md` — OD Build plan (3-teammate + 3-subagent + 3-embedded, serial)
2. `synthetic-orbiting-firefly.md` — OD Re-enrichment plan (43 agents, 7 waves, gate-based flat)
3. `synthetic-shimmying-tarjan.md` — Comprehensive audit plan (~58 agents, hierarchical)
4. `rosy-gliding-sparkle.md` — Provenance remediation plan (16 agents, 5 waves)
5. `OD-GRANULAR-AUDIT-PROMPT.md` — Adversarial audit prompt (2,154 lines)
6. `OD-REENRICHMENT-SPECIFICATION.md` — Re-enrichment specification (1,684 lines)
7. `OD-FIX-EXECUTION-PROMPT.md` — Fix execution prompt (per-file ownership)
8. `OD-AUDIT-RETROSPECTIVE-AND-PROTOCOL-v3.md` — Lessons learned (most insightful)
9. `COMPREHENSIVE-AUDIT-SPECIFICATION.md` — Hierarchical audit spec (1,537 lines)

---

## 1. TEAM TOPOLOGY FOR AD

### Topology Evolution (Chronological)
| Phase | Topology | Agents | Lead Compactions | Outcome |
|-------|----------|--------|-----------------|---------|
| OD Build | 3 teammates (Lead+Builder+Weaver) + subagents | 3+N | Multiple (plan was 763 lines in single context) | Build quality good, provenance dropped |
| Provenance Remediation | Flat, wave-gated | 16 | 0 (session fit one window, 75-100 min) | 93/104 PASS |
| OD Granular Audit | Flat, wave-gated | 17 | 0 (77% context at finish, 45 min) | 89 findings |
| OD Fix Execution | Flat, per-file ownership | 7 | 0 (25 min) | 16/16 fixes |
| OD Re-enrichment | Flat, wave-gated | 43 | 3+ compactions | Good output, lost 20 min to recovery |
| Comprehensive Audit | Hierarchical, captain-based | ~58 | 0 (Lead context ~19K vs 129K) | VALIDATED hierarchical model |

### RECOMMENDATION FOR AD: HYBRID TOPOLOGY

**Build Phase:** Hierarchical with 2 captains + Weaver (Lead manages 3 direct reports)
- Captain-Build: Manages builders (1 per AD exploration, possibly 2 parallel)
- Captain-Provenance: Manages scribes + research trackers (Mode C incremental)
- Weaver: Cross-references, state maintenance (PROVEN across ALL 4 teams)

**Audit Phase:** Hierarchical with 4 captains + Weaver (Lead manages 5)
- Reuse comprehensive audit structure (Captain-Visual, Captain-Structural, Captain-Provenance, Captain-FreshEyes)
- Weaver continues

**Fix Phase:** Flat, per-file ownership (PROVEN most effective for fixes)
- One fixer per AD file, no contention

**Justification:**
- Flat works for <17 agents (audit 17, remediation 16, fix 7: all 0 compactions)
- Flat fails at 43 agents (re-enrichment: 3+ compactions)
- Hierarchical validated at ~58 agents (0 Lead compactions)
- Build phase creates fewer agents than audit, so captain overhead should be minimal
- The key innovation: Captain-Provenance runs IN PARALLEL with Captain-Build, enforcing Mode C (incremental provenance) as a structural constraint, not a prose guideline

### WORKER RELIABILITY DATA
| Worker Type | File Writing Rate | Failure Mode |
|-------------|-------------------|-------------|
| File-only (no Playwright) | ~95% reliable | Occasional no-TaskUpdate |
| Playwright workers | ~30-40% reliable | Context exhaustion before Write, Playwright contention |
| Single recovery agents (no spawning) | ~100% reliable | None observed |
| Captain spawning workers | ~60% reliable | Workers complete without writing files |

**AD IMPLICATION:**
- For build agents that need Playwright (visual iteration): keep agent count low, use SEQUENTIAL visual checks
- For provenance/research agents (file-only): can parallelize freely
- "CRITICAL: You MUST write your output file using the Write tool" must be in EVERY agent prompt
- Single-agent deep work > multi-agent shallow work for creative tasks

---

## 2. GATE ARCHITECTURE FOR AD

### Gate Template (Extracted from All Plans)

Every gate follows this proven structure:
```
GATE {PHASE}-{SEQ}: {Description} — PASS/FAIL
  Criterion: {Binary check — YES/NO, EXISTS/MISSING, >=N/< N}
  Checked by: {Who verifies}
  Evidence: {File path or computed value}
  FAIL route: {What happens on failure — respawn/retry/escalate}
```

### Proven Gate Categories (from all 4 plans)

**SETUP GATES (Phase 0):**
- G0-1: TeamCreate success — PASS/FAIL
- G0-2: HTTP server returning 200 — PASS/FAIL
- G0-3: Working directories exist — PASS/FAIL
- G0-4: State file created — PASS/FAIL
- G0-5: Playwright navigated to test page — PASS/FAIL (MOST CRITICAL — blank tabs = wasted agents)
- G0-6: Screenshot shows content (not blank) — PASS/FAIL
- G0-7: Tasks created — PASS/FAIL

**BUILD GATES (Per-Exploration):**
- GB-1: Builder read inline section of target file BEFORE building — PASS/FAIL
- GB-2: Research package exists with >=N SOUL PASS findings — PASS/FAIL
- GB-3: Score >= target (32 minimum, 34 target, 36 crown jewel) — PASS/FAIL
- GB-4: Soul compliance (0 violations across all elements) — PASS/FAIL
- GB-5: Convention spec applied (7 dimensions) — PASS/FAIL
- GB-6: Completion report written to file — PASS/FAIL

**PROVENANCE GATES (Per-Exploration, Mode C):**
- GP-1: Finding IDs written IMMEDIATELY on discovery — PASS/FAIL
- GP-2: RESEARCH-ACTIVE.md updated within same wave — PASS/FAIL
- GP-3: Inline threading header created for new files — PASS/FAIL
- GP-4: CONSUMED BY tables updated on source files — PASS/FAIL
- GP-5: Zero new dark matter files created — PASS/FAIL

**AUDIT GATES (Per-Page):**
- VA-01 through VA-13 (13 binary visual gates from comprehensive audit)
- CS-01 through CS-04 (4 structural gates)
- PV-01 through PV-08 (8 provenance gates)
- TR-01 through TR-04 (4 triage gates)

**VERIFICATION GATES (Final):**
- VF-1: All Critical findings fixed — PASS/FAIL
- VF-2: All High findings fixed — PASS/FAIL
- VF-3: Playwright verification screenshots confirm visual fixes — PASS/FAIL
- VF-4: Git status shows only intended changes — PASS/FAIL

### KEY LESSON: Gates Must Be Physical, Not Prose
From retrospective Part 6.1: "The OD execution plan contained 15 non-negotiable requirements encoded as prose instructions in a planning document, not as physical checks in the file system or team architecture. When context compacted mid-build, gate instructions vanished."

**AD ENFORCEMENT:** Every gate is verified by:
1. File existence check (binary: file exists or not)
2. File content check (binary: contains required section or not)
3. Computed value check (binary: getComputedStyle().borderRadius === '0px' or not)
4. Score comparison (binary: >= 34 or not)

Never by: "did the agent remember to check this?" (impossible to verify)

---

## 3. WAVE SEQUENCING FOR AD

### Proven Wave Patterns

**Pattern A: Serial Build with Parallel Support (OD Build)**
```
Build OD-001 → Build OD-002 → ... → Build OD-006
  (Research + Weaver threading run parallel to each build)
```
- WEAKNESS: No iteration for later explorations
- STRENGTH: Compounding identity grows with each

**Pattern B: Batched Parallel Build (OD Re-enrichment)**
```
Wave 0: Convention + Dark Matter + Screenshots (all parallel)
Wave 1: Batch 1 (2 explorations parallel) → Research → Build → Scribe → Verify
Wave 2: Batch 2 (2 explorations parallel) → same flow
Wave 3: Batch 3 (2 explorations parallel) → same flow
Wave 4: Synthesis + Infrastructure
Wave 5: Adversarial Audit
Wave 6: Final Verification
```
- STRENGTH: Controlled parallelism, identity deltas between waves
- WEAKNESS: 43 agents caused Lead compaction

**Pattern C: Hierarchical Parallel (Comprehensive Audit)**
```
Phase 0: Setup (Lead only)
Phase 1: Parallel Audit (4 Captains + Weaver simultaneously)
Phase 1.5: Fresh Eyes (after Phase 1)
Phase 2: Cross-Reference (Lead + Weaver)
Phase 3: Fix Execution (Captain-Fix)
Phase 4: Verification + Commit
```
- STRENGTH: Zero Lead compaction, clear phase transitions
- WEAKNESS: Captain-worker file-writing unreliable

**Pattern D: Remediation Waves (Provenance Remediation)**
```
Wave 1: Diagnostic (3 parallel)
Wave 2: Census + Triage (3 parallel, reads Wave 1 outputs)
Wave 3: Chain Builders (4 parallel, reads Wave 1+2)
Wave 4: Gate + Updaters (3 parallel, reads Wave 3)
Wave 5: Verification (1 sequential, fresh-eyes)
```
- STRENGTH: Each wave reads prior wave outputs — physical dependency
- WEAKNESS: None significant (93/104 PASS)

### RECOMMENDED AD WAVE SEQUENCE

```
Phase 0: Setup + Playwright Verification (Lead only, ~10 min)
  Gate 0: 7 binary checks

Phase 1: Convention + Identity Loading (~15 min)
  - Convention agent: AD-CONVENTION-SPEC.md
  - Traverser agent: Load accumulated identity, produce AD identity brief
  - Gate 1: Convention spec exists + identity brief exists

Phase 2: Batched Build (2 AD explorations per wave, 3 waves)
  Wave 2A: AD-001 + AD-002
    Sub-Phase A: Research (2 parallel researchers)
    Sub-Phase B: Build (2 parallel builders)
    Sub-Phase C: Scribe (1 sequential — provenance update)
    Sub-Phase D: Verify (1 sequential — binary gate check)
    Sub-Phase E: Identity Delta (Lead writes delta for next wave)
    Gate 2A: Scores >= target, soul compliance, provenance written

  Wave 2B: AD-003 + AD-004
    (Same sub-phase structure, reads identity delta from 2A)
    Gate 2B: Same criteria

  Wave 2C: AD-005 + AD-006
    (Same sub-phase structure, reads identity deltas from 2A+2B)
    Gate 2C: Same criteria

Phase 3: Synthesis + Infrastructure (~20 min)
  - Synthesizer: AD-SYNTHESIS, AD-AUDIT-SYNTHESIS
  - Handoff-writer: HANDOFF-AD-TO-CD
  - Updaters: STAGE-HEADER, CLAUDE.md, PIPELINE-MANIFEST, BACKBONE, IDENTITY v2
  Gate 3: All synthesis files exist, finding IDs non-colliding

Phase 4: Adversarial Audit (~45 min)
  - Hierarchical: Captain-Visual + Captain-Structural + Captain-FreshEyes + Weaver
  Gate 4: All captain reports exist, master audit compiled

Phase 5: Fix Execution (~25 min)
  - Per-file fixers (1 per AD file that needs fixes)
  Gate 5: All Critical/High fixed, Playwright verification PASS

Phase 6: Final Verification + Commit (Lead)
  Gate 6: Git clean, intended changes only
```

### SEQUENCING PRINCIPLES (from all plans)
1. **Convention BEFORE any build** — OD built without conventions, then discovered 3-dialect gap
2. **Identity loading BEFORE any build** — accumulated identity evolves between waves
3. **Research BEFORE build, never during** — role separation prevents builder context exhaustion
4. **Scribe AFTER build, same wave** — Mode C incremental provenance
5. **Visual audit BEFORE programmatic audit** — "look before you measure" is epistemologically sound
6. **Fresh-eyes AFTER regular audit** — different epistemic position produces different observations
7. **Per-file ownership for fixes** — zero contention, proven in OD fix execution

---

## 4. PROMPT DESIGN PATTERNS FOR AD

### Proven Patterns

**4.1 Length Limits**
- OD Audit prompt was 2,154 lines — retrospective says "overcalibrated" with 3:1 ambition-to-capacity ratio
- Re-enrichment agent prompts: ~50-100 lines each (embedded in plan)
- Comprehensive audit worker prompts: ~40-80 lines each (embedded in captain prompt)
- **RECOMMENDATION:** Agent prompts should be 50-100 lines max. Describe OUTCOMES, not PROCEDURES.

**4.2 Binary Rule Embedding**
The most critical finding across ALL retrospectives:

> "Binary rules achieve 100% agent compliance; judgment rules achieve ~0%."

Binary rules that achieved 100% compliance:
- `border-radius: 0` — every element, every agent, every file
- `box-shadow: none` — same
- "WRITE findings to file BEFORE sending messages" — compliance when stated
- "You do NOT message the Lead directly" — 100% when stated

Judgment rules that achieved ~0% compliance:
- "Apply research findings with citations" — builders dropped under context pressure
- "Update inline headers" — dropped as secondary mission
- "Iterate at least 3 times" — not enforced
- "1-2px borders signal uncertainty" — 108 violations (requires judgment)

**AD IMPLICATION:** Every constraint must be expressible as: "DO X" or "DO NOT do X" — never "consider whether X."

**4.3 Embedded Constants (in EVERY agent prompt)**

The 10-line soul compliance checklist was THE mechanism that achieved 0 violations across ~13,000 elements:
```
- border-radius: 0 everywhere (no rounded corners)
- box-shadow: none (no shadows, except solid-offset pseudo-elements)
- No filter: drop-shadow() anywhere
- No fake depth, gradients, or blur
- Locked palette: #E83025, #1A1A1A, #FAFAF5, #E0D5C5, #6B9B7A, #4A7C9B, #C97065, #7C3AED
- Font trio: 'Instrument Serif' (display), 'Inter' (body), 'JetBrains Mono' (code)
- Border weights: 4px left accent OR 3px full -- never 1-2px structural
- Spacing model: --space-* tokens
- Max 2 callouts per viewport section
- DD-F-006 fractal self-similarity at 4 scales
```

**4.4 Compaction Survival Block (in EVERY agent prompt)**
```
If your context compacts mid-task:
1. RE-READ your output file to see what you've already done
2. RE-READ {STATE-FILE}.md for current phase status
3. RE-READ your input files to rebuild context
4. Continue from where your output file left off
5. DO NOT restart from scratch — your partial output file IS your checkpoint
```

**4.5 File-Write Enforcement (MOST CRITICAL)**
From comprehensive audit lessons: "Workers spawned by captains via Task tool frequently complete without writing files — THE critical failure mode."

Every agent prompt MUST include:
```
CRITICAL: You MUST write your output file using the Write tool BEFORE you finish.
Your output file is: {exact path}
```

**4.6 Convention Values Block**
Full :root CSS block embedded in every visual/structural agent prompt. Not a reference to a file — the ACTUAL values inline. This prevents agents from misremembering or not reading the convention spec.

**4.7 OD-006 Intentional Divergences Block**
A compact table of known intentional variations so agents don't flag them as findings. AD will need its own version.

---

## 5. FILE OWNERSHIP MODEL FOR AD

### Proven Template (from all 4 plans)

**Principle:** Every file has EXACTLY ONE owner. Zero contention. The ownership matrix is the enforcement mechanism.

```
| File | Phase | Owner | Change Type | Size Estimate |
|------|-------|-------|-------------|---------------|
| AD-001-{name}.html | 2A | builder-1a | CREATE | 80-120K |
| AD-002-{name}.html | 2A | builder-1b | CREATE | 80-120K |
| AD-003-{name}.html | 2B | builder-2a | CREATE | 80-120K |
| AD-004-{name}.html | 2B | builder-2b | CREATE | 80-120K |
| AD-005-{name}.html | 2C | builder-3a | CREATE | 80-120K |
| AD-006-{name}.html | 2C | builder-3b | CREATE | 80-120K |
| AD-CONVENTION-SPEC.md | 1 | convention | CREATE | 200-350 |
| AD-outbound-findings.md | 2A→2B→2C (incremental) | scribe-1→2→3 | CREATE+UPDATE | 250-500 |
| AD-SYNTHESIS.md | 3 | synthesizer | CREATE | 400-600 |
| AD-AUDIT-SYNTHESIS.md | 4 | audit-synthesizer | CREATE | 300-500 |
| HANDOFF-AD-TO-CD.md | 3 | handoff-writer | CREATE | 320-450 |
| EXT-RESEARCH-REGISTRY.md | 2A→2B→2C | scribe-1→2→3 | UPDATE (append) | +100-200 |
| RESEARCH-ACTIVE.md | 2A→2B→2C→3 | scribe→updater | UPDATE | +50-100 |
```

### Ownership Rules
1. **No agent touches a file they don't own. Ever.** (from Fix Execution prompt)
2. **Sequential chain ownership allowed** — scribe-1 writes, scribe-2 appends (same file, non-overlapping regions)
3. **Builder NEVER touches provenance files** (from re-enrichment: Builder writes HTML, Scribe writes provenance)
4. **Weaver maintains state files** (STATE.md, CLAUDE.md for working directory)
5. **Lead NEVER reads worker files** (reads captain/agent summaries only)
6. **New files MUST have inline threading header at creation** (from re-enrichment binary rule)

---

## 6. RECOVERY PROTOCOL FOR AD

### Compaction Survival Architecture (from all plans)

**State Files (written to disk, survive compaction):**
1. `AD-STATE.md` — Master state file. Phase status, agent status, finding summary. Updated by Weaver after every agent completion.
2. `_ad-execution/CLAUDE.md` — Working directory manifest. File list with owners, purposes, line counts.
3. `identity-delta-wave{N}.md` — Identity evolution between waves. 10-15 lines each. Written by Lead after each wave verification.
4. Per-agent output files — Agent's partial output IS its checkpoint.

**Recovery Protocol (triggered on context compaction):**
```
1. RE-READ AD-STATE.md → current phase, which agents completed, what's pending
2. RE-READ _ad-execution/CLAUDE.md → file manifest, what exists
3. RE-READ identity-delta-wave{N}.md (latest) → current identity state
4. CHECK TaskList → which tasks are completed vs in_progress vs pending
5. VERIFY file existence for expected outputs (Glob for _ad-execution/*.md)
6. CONTINUE from where state indicates — DO NOT restart
```

**Re-Entry Points (from remediation plan):**
- Each wave has a named entry point (Wave 2A, 2B, 2C, etc.)
- If Lead compacts mid-wave: re-read state, check which sub-phases completed, re-enter at next incomplete sub-phase
- If agent compacts mid-task: agent re-reads its output file (partial work IS checkpoint)
- If captain compacts: captain re-reads mission brief + state file + worker output files

**Skeleton-First Pattern (from remediation):**
Agents write file SKELETON first (headers + structure + empty sections), then populate. If crash occurs, skeleton survives and can be continued by respawned agent.

### WHAT FAILED IN RECOVERY
- Flat topology at 43 agents: Lead compacted 3+ times, lost ~20 min to recovery
- State files worked for recovery but information was still lost between compactions
- Identity deltas worked perfectly — small files (10-15 lines) that survived and maintained generative loop continuity

### WHAT WORKED IN RECOVERY
- Hierarchical topology: 0 compactions across 58 agents (validated)
- Per-agent output files as checkpoints: 100% effective
- Weaver maintaining state file: critical for recovery orientation
- "Written Together" principle: checkpoint + journal, never one without the other
- Skeleton-first: data survived all crashes in remediation

---

## 7. SHUTDOWN PROTOCOL FOR AD

### Proven Shutdown Sequence (from all plans)

**Per-Agent Shutdown:**
```
1. Verify agent output file exists and is non-empty
2. Send shutdown_request via SendMessage
3. Wait for shutdown_response (approve)
4. If no response within 2 min: verify file written, proceed anyway
5. Update state file: agent status → SHUTDOWN
```

**Per-Wave Shutdown:**
```
1. All agents in wave verified complete (file existence + TaskUpdate check)
2. Lead reviews gate criteria (binary checks)
3. Gate PASS → send shutdown_request to ALL wave agents
4. Gate FAIL → route back to responsible agent (respawn if needed)
5. Update state file: wave status → COMPLETE
6. Create tasks for next wave (wave-gated task creation, not all-at-once)
```

**Session Shutdown:**
```
1. All phases complete (state file shows all phases COMPLETE)
2. All verification gates PASS
3. Git status shows only intended changes
4. Lead sends shutdown_request to Weaver (last to shut down — always)
5. Verify all agents shutdown
6. Commit changes (Lead only — one committer, one branch)
7. TeamDelete (cleanup)
```

### SHUTDOWN LESSONS
- Synthesizer agent needed 4 shutdown attempts in OD audit — didn't respond to first 3
- Workers sometimes don't call TaskUpdate on completion — verify via file existence instead
- Weaver should be LAST to shut down (maintains state through final verification)
- "After gate PASSES: Send shutdown_request to [all wave agents]. Verify shutdown before next wave." (from re-enrichment)
- Idle notifications are noise — filter them, don't act on them

---

## 8. CROSS-CUTTING PATTERNS (Critical for AD)

### 8.1 The Binary Rule Principle (MOST IMPORTANT)
> "Simple, absolute, zero-tolerance rules propagate reliably through agent teams. Complex, contextual, judgment-dependent guidelines do not."

- `border-radius: 0` → 0 violations across ~13,000 elements (binary)
- "1-2px borders signal uncertainty" → 108 CSS declarations with thin borders (judgment)
- "Write to file before sending messages" → ~90% compliance when stated (binary)
- "Apply research findings with citations" → ~0% compliance under context pressure (judgment)

### 8.2 The Governance Compression Principle
> "showcase/CLAUDE.md is 500+ lines. Agents never read it. The 10-line soul checklist embedded in every prompt achieved 100% compliance."

- 500-line governance document → 0% compliance (agents never traverse directory)
- 10-line soul checklist embedded in prompt → 100% compliance
- 50:1 compression from agent output to behavioral constraint
- **AD RULE:** Every constraint that matters goes INTO the agent prompt, not into a reference file

### 8.3 The Role Separation Principle
> "All 15 responsibilities loaded onto the SAME agent. Under context constraint, the agent rationally kept the primary mission (build) and dropped secondary missions (document, thread, update)."

- Builder builds. NEVER touches provenance.
- Scribe writes provenance. NEVER builds.
- Researcher writes research. NEVER builds.
- Verifier runs binary checks. NEVER exercises judgment.
- Lead orchestrates. NEVER builds, NEVER runs Playwright, NEVER reads source code.

### 8.4 The Fresh Eyes Principle
> "Cost: 1 agent. Value: 2 Nuclear Question contradictions that no other agent produced."

- Fresh-eyes is MANDATORY for any audit phase
- The constraint — full identity knowledge but zero builder justifications — IS the mechanism
- Consider 2 fresh-eyes agents with different withheld information for higher-confidence findings
- Fresh-eyes produces genuinely different observations that confirmatory auditing cannot

### 8.5 The Wave Model Principle
> "Visual-first, programmatic-second isn't just about Playwright contention. It mirrors how competent human auditors work: look before you measure."

- Visual without programmatic = "something feels off" without specifics
- Programmatic without visual = "all values are correct" with false confidence
- Sequential dependency produced better findings than parallel would have

### 8.6 The Weaver Principle
> "The Weaver is now a proven pattern across 2 team executions with different team structures. It's no longer experimental. It's infrastructure."

- 18 cross-references in audit, multiple in re-enrichment
- Maintains state file (CRITICAL for recovery)
- Tracks cross-batch findings
- Tracks identity evolution
- Must be LAST to shut down

### 8.7 The Mode C Provenance Principle
> "Create provenance INCREMENTALLY during build. DO NOT defer to post-build session."

Three modes observed:
- Mode A (DD): Build first, formalize later → tracking drift, non-repeatable
- Mode B (OD): Build + document simultaneously → secondary missions dropped under context pressure
- Mode C (target): Write provenance incrementally → requires structural enforcement (separate Scribe agent)

**AD MUST use Mode C enforced by role separation:** Builder builds, Scribe writes provenance in same wave, Verifier checks both before next wave.

### 8.8 The Agent Count Sweet Spot
From retrospective: "Proposed sweet spot for future audits: 10-12 agents."
- Agents 1-5: HIGH value
- Agents 6-10: MEDIUM value
- Agents 11-14: LOW-MEDIUM value
- Agents 15-17: LOW value

For BUILD (creative work): 2 parallel builders per wave + 2 parallel researchers + 1 scribe + 1 verifier = 6 per wave
For AUDIT: 10-12 agents (3 visual, 3 systematic, 1 fresh-eyes, 1 secondary concerns, 1 weaver, 1 synthesizer)
For FIX: 1 per file needing fixes (6 max) + 2 verifiers = 8

### 8.9 Playwright Contention Management
- Only ONE agent per HTML page at any time
- `document.fonts.ready` BEFORE any computed style check (prevents false font findings)
- Inject animation-disable CSS BEFORE any screenshot
- HTTP server MUST be running and verified BEFORE any visual agent spawns
- Sequential verification (programmatic then visual) eliminates contention
- Never use `file://` protocol — always HTTP

### 8.10 The Prompt-Capacity Ratio
> "The gap between prompt ambition and agent execution capacity is a design problem, not an agent problem."

- 2,154-line prompt → agents executed ~33% of described checks
- ~50-100 line focused prompts → agents executed ~90%+ of described checks
- Design prompts that match agent capacity (30-40 turns per agent)
- Describe OUTCOMES not PROCEDURES
- Split exhaustive checks into focused micro-agents rather than one agent with 17 sub-checks

---

## 9. ANTI-PATTERNS TO AVOID IN AD

### From OD Build (What FAILED)
1. Single agent carrying 7 responsibilities simultaneously
2. Gates encoded as prose instructions, not physical checks
3. 763-line planning document in single agent context → vanished on compaction
4. No role separation → secondary missions dropped under context pressure
5. Research agents terminated before persisting results to files

### From Re-enrichment (What Was Suboptimal)
1. 43 agents in flat topology → Lead compacted 3+ times
2. All tasks created at once (vs wave-gated task creation)
3. Lead composing 43 detailed prompts consumed ~30K tokens
4. Lead receiving 43 idle notifications consumed ~4K tokens

### From Comprehensive Audit (What Partially Failed)
1. Workers spawned by captains frequently completed without writing files
2. Only 2/13 visual workers got actual Playwright access (rest fell back to source analysis)
3. Captain-FreshEyes required replacement with single recovery agent after 25 min of no output
4. Adversarial debates were largely performative (agent arguing both sides lacks genuine epistemic tension)

### From Audit Prompt Design (What Was Wrong)
1. 2,154 lines overcalibrated with 3:1 ambition-to-capacity ratio
2. "30 seconds of attention per viewport" — time-based instructions meaningless for agents
3. Bias self-detection tables — agents can't detect their own biases by definition
4. Single agent simulating prosecution+defense produces debate-shaped output without debate-quality insight

---

## 10. AD-SPECIFIC RECOMMENDATIONS

### 10.1 Build WITH Convention + Iteration from Day 1
> "Iteration and convention maturity pull quality in opposite directions unless both are present simultaneously."

OD-001 had iteration without conventions. OD-005 had conventions without iteration. Neither achieved what both together would produce. AD MUST have conventions established (Phase 1) AND iteration on every exploration (Phase 2 sub-phases).

### 10.2 Research BEFORE Build, Never During
Builder agents under context pressure will drop research commissioning. Separate researcher agents complete their work BEFORE builders start. Research packages are the INPUT to builders, not a side-quest during building.

### 10.3 Generative Identity Loop
Identity evolves BETWEEN waves via identity deltas (10-15 lines each):
```
Identity v1 → Wave 2A builds → Lead writes identity-delta-2A
→ Identity v1 + delta-2A → Wave 2B builds (DIFFERENT questions)
→ Lead writes identity-delta-2B → etc.
```
This is NOT acquisitive (finding confirming patterns). It is GENERATIVE (discovering surprising patterns that change the questions).

### 10.4 Planted Violations for Audit Calibration
From retrospective Open Question 6: Before audit, intentionally introduce 5 known violations. Check whether agents catch them. This gives a measurable detection rate and validates audit thoroughness.

### 10.5 Adversarial PAIRING Not PROMPTING
> "Two separate agents — one whose prompt says 'defend this design' and another whose prompt says 'attack this design' — would produce genuine disagreement."

Single-agent adversarial debates are performative. Real epistemic separation (as demonstrated by fresh-eyes) produces real disagreement.
