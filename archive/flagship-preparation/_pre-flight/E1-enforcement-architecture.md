# E1: Enforcement Architecture

**Author:** META-ENFORCER (Opus 4.6)
**Date:** 2026-02-16
**Purpose:** Convert every action item type from GUIDELINE (ignored) into GATE (enforced). Zero guidelines remain.
**Sources:**
- `07-kill-criteria.md` (24 binary criteria, 8 abort triggers, decision tree)
- `08-metacognitive-checkpoints.md` (19 checkpoints, anti-performativity architecture, artifact requirements)
- `03-spatial-confidence-gate.md` (7 binary checks, JavaScript implementation, fix/abort matrix)
- `18-UNIFIED-ACTION-PLAN.md` (24 pre-build items, 5 passes, 7 gates, 10 risks, 10 themes)

---

## THE CORE PROBLEM

This project has discovered its own First Law:

> **Binary rules achieve 100% agent compliance; judgment rules achieve ~0%.**

The ceiling experiment had 1,004 lines of instructions containing ~56 rules. 18/18 binary rules achieved full compliance. Every judgment rule failed. The preparation paradox was confirmed: more preparation produced worse outcomes (the middle experiment's shorter prompt outperformed the ceiling's longer one on the single most important metric: container width).

But identifying this law is insufficient. The flagship preparation has now produced 13,274 lines of research across 20 reports, plus 24 kill criteria, 19 metacognitive checkpoints, 7 spatial confidence checks, 24 pre-build checklist items, and 10 risk mitigations. **If these remain as "documents to read," agents will read none of them.** The question is not "what should we enforce?" -- the four source documents answer that exhaustively. The question is: **how do we ensure that every enforcement mechanism actually fires, and how do we verify that it fired?**

This document answers that question.

---

## PART 1: ENFORCEMENT TAXONOMY

Eight enforcement types exist. They differ along three axes: WHO checks (automated / builder / external agent / team-lead), WHEN it fires (before / during / between passes / after build), and WHAT happens on FAIL (block / rollback / fix-retry / abort / downgrade / log).

### Type 1: PROGRAMMATIC GATE

**Definition:** Automated check via JavaScript, shell command, or file inspection that produces a PASS/FAIL verdict with zero human judgment.

**Characteristics:**
- Attention cost to builder: **0** (gate runs externally; builder does nothing)
- Attention cost to team-lead: **0.5** (reads verdict, decides proceed/abort)
- Reliability: **100%** (code does not have continuation bias)
- False positive risk: LOW (thresholds are derived from empirical data)
- False negative risk: MODERATE (programmatic checks miss perceptual failures -- the void budget passes at 92% for the ceiling page, which was 70-80% perceptually void)

**Existing instances:**
- SC-01 through SC-03, SC-05 through SC-07 (spatial confidence gate)
- FK-02 soul compliance audit (8 CSS property checks)
- KB-04 prompt length (`wc -l`)
- Token compliance ratio (`var()` count vs raw value count)
- CPL formula check

**When to use:** Any rule that can be expressed as a number compared to a threshold. If you can write `if (measured_value [operator] threshold) { PASS } else { FAIL }`, it is a programmatic gate.

**Meta-verification:** The gate runner script outputs a structured JSON/markdown report. The report's existence in the output directory is verifiable by `ls`. The report contains a timestamp. If the report is absent or has no timestamp, the gate did not run.

---

### Type 2: SCREENSHOT GATE

**Definition:** Visual verification by an agent (team-lead, auditor, or fresh-eyes) using pre-captured screenshots. The agent sees rendered output, not code.

**Characteristics:**
- Attention cost to builder: **0** (builder is not involved)
- Attention cost to verifier: **2-4** (must view and evaluate)
- Reliability: **80-90%** (perceptual assessment catches gestalt failures that programmatic gates miss, but subjective judgment introduces variance)
- False positive risk: MODERATE (PA-2's void finding was dismissed as "artifact" -- correct finding, wrong treatment)
- False negative risk: LOW (fresh-eyes agents with zero context consistently find what invested observers miss -- Mode 4 PA: 9/9 on whitespace void)

**Existing instances:**
- SC-04 squint test (25% zoom, 3+ content regions)
- Check 2.1 fresh-eyes proportion check (post-Pass-1)
- Check 4.1 ego separation (post-Pass-3, pre-verdict)
- CP-03 zone visual differentiation (labels removed)
- Gate 4 metaphor coherence (2 fresh-eyes, zero context)

**When to use:** Any rule about PERCEIVED quality, SPATIAL balance, or GESTALT impression. Programmatic gates measure what IS; screenshot gates measure what it FEELS LIKE.

**Meta-verification:** Screenshots are saved as files with naming convention `{stage}-{check}-{viewport}-{timestamp}.png`. The file's existence is verifiable. The evaluator's verdict is written to a markdown file. If the screenshot file or verdict file is absent, the gate did not run.

---

### Type 3: FILE DIFF GATE

**Definition:** Verify that specific content exists in specific files. Not "did the agent produce output?" but "does the output contain the required artifact?"

**Characteristics:**
- Attention cost to builder: **0** (gate checks files the builder already wrote)
- Attention cost to team-lead: **1** (scans file for required sections/tables)
- Reliability: **95%** (file content is deterministic -- either the table exists or it does not)
- False positive risk: VERY LOW
- False negative risk: LOW (but a builder could produce a TABLE without producing a VALID table -- the numbers could be wrong)

**Existing instances:**
- Check 1.1 spatial budget table (must exist in build plan, must contain per-zone numbers)
- Check 1.2 zone necessity table (YES/NO per zone per criterion)
- Check 3.4 restraint inventory (>= 3 genuine entries)
- CP-02 restraint map (>= 15 planner rejections + >= 6 builder rejections)
- Checkpoint A clarification request (message content includes 3 required fields)
- Checkpoint B post-build report (message content includes 4 required numbers)

**When to use:** Any rule that requires the agent to PRODUCE A SPECIFIC ARTIFACT (table, calculation, list, report). The artifact is the enforcement mechanism -- requiring its production forces the cognitive work that produces it.

**Meta-verification:** Team-lead runs a checklist: "Does file X contain section Y? Does section Y contain a table with columns A, B, C? Does the table have >= N rows?" Each item is binary. The checklist itself is a file diff gate (meta-gate).

---

### Type 4: AGENT SELF-CHECK

**Definition:** Builder verifies own work against a short binary checklist before reporting completion.

**Characteristics:**
- Attention cost to builder: **0.5 per item** (binary checks are fast)
- Attention cost to team-lead: **0** (self-checks are pre-filtered)
- Reliability: **70-80%** (binary self-checks achieve high compliance; judgment self-checks achieve ~0%)
- False positive risk: MODERATE (builder may check "PASS" without actually measuring)
- False negative risk: LOW for binary items, HIGH for judgment items

**Existing instances (from unified action plan, Pass 1 builder self-check):**
1. Container width 940-960px (verify via getBoundingClientRect)
2. CPL 45-80 (formula: content-width / font-size / 0.6)
3. Content-to-void >= 60:40
4. No empty structural elements
5. Soul 8/8
6. Header + footer present with content
7. Token compliance >= 80%

**When to use:** Any binary check that the builder can perform on their own work with zero judgment. The self-check list must be SHORT (<= 10 items) and every item must be BINARY. If an item requires judgment, it is not a self-check -- it is a screenshot gate or a team-lead checkpoint.

**Meta-verification:** Builder writes self-check results into the post-build report (Checkpoint B). The report is a file diff gate target. If the self-check table is absent from the Checkpoint B report, the self-check did not happen.

**CRITICAL CONSTRAINT:** Self-checks must be VERIFIABLE by a subsequent programmatic gate. The self-check is a pre-filter (catches obvious errors before the expensive gate runs), not a replacement for the gate. Every self-check item maps to a programmatic gate item that runs independently. Self-check catches errors at zero cost; programmatic gate catches the self-check's misses.

---

### Type 5: TEAM-LEAD CHECKPOINT

**Definition:** Team-lead manually verifies a specific condition before authorizing the next phase. The team-lead is the enforcer, not the evaluator -- they check that ARTIFACTS EXIST and PROCESSES HAPPENED, not that the output is "good."

**Characteristics:**
- Attention cost to builder: **0**
- Attention cost to team-lead: **1-2** per checkpoint (binary verification of artifact existence)
- Reliability: **90%** (team-lead role is structural, not creative -- checking for existence is reliable)
- False positive risk: LOW (if the team-lead's role is limited to "does artifact X exist?")
- False negative risk: LOW

**Existing instances:**
- Pre-build: verify spatial budget table exists in plan, arithmetic is correct
- Pre-build: verify zone necessity table exists, count merges
- Post-Pass-1: verify Checkpoint A message was sent (check message log)
- Post-Pass-1: verify spatial gate report exists
- Post-Pass-2: verify restraint map has >= 21 entries
- Post-Pass-2: verify mechanism count from Composition Verification gate
- Pre-verdict: verify dissent protection was performed (Check 5.1)
- Pre-verdict: verify success-axis alignment matrix exists (Check 5.2)

**When to use:** At every PASS BOUNDARY. The team-lead is the GATE KEEPER at phase transitions. No pass proceeds without team-lead authorization. The team-lead's checklist is: (1) did the gate fire? (2) did it pass? (3) do all required artifacts exist?

**Meta-verification:** Team-lead writes a GATE EXECUTION LOG entry (see Part 4) at each checkpoint. The log is append-only. Absence of a log entry = the checkpoint did not fire.

---

### Type 6: EMBEDDED AUDITOR ALERT

**Definition:** A dedicated monitoring agent runs CONCURRENTLY with the builder, taking periodic measurements and issuing HARD ALERTS when thresholds are violated.

**Characteristics:**
- Attention cost to builder: **0** (until alert fires, then **2** to acknowledge and respond)
- Attention cost to team-lead: **0.5** (reviews alert log)
- Reliability: **85%** (concurrent monitoring catches drift that post-hoc gates miss)
- False positive risk: MODERATE (real-time measurements may catch transient states)
- False negative risk: LOW (if the monitoring interval is frequent enough)

**Existing instances:**
- Embedded auditor: screenshot every 100 CSS lines during Pass 1 and 2
- Embedded auditor: hard alert if void ratio exceeds 30% at any checkpoint
- Embedded auditor: alert if container width deviates from 940-960px

**When to use:** For rules that can be violated INCREMENTALLY during a build. Container width is set once; void ratio accumulates as the builder adds sections. An end-of-pass gate catches void, but an embedded auditor catches it DURING the build, when the fix cost is lowest.

**Meta-verification:** Embedded auditor writes a monitoring log: `EA-log-{timestamp}.md` with entries for each measurement. The log includes: measurement timestamp, metric name, measured value, threshold, PASS/ALERT status. If the log has < expected entries (based on build duration), the auditor was not monitoring at the required frequency.

---

### Type 7: KILL CRITERION

**Definition:** A binary condition that, when triggered, forces an ABORT, DOWNGRADE, or HARD STOP. Kill criteria are pre-committed -- the decision to abort is made BEFORE the experiment begins, not at the point of failure. This bypasses sunk cost bias.

**Characteristics:**
- Attention cost to builder: **0** (kill criteria are evaluated by team-lead)
- Attention cost to team-lead: **1** (binary check against pre-committed threshold)
- Reliability: **100%** (binary, pre-committed, no room for rationalization)
- False positive risk: LOW (thresholds are generous -- derived from empirical failure data)
- False negative risk: LOW (kill criteria cover the documented failure modes)

**Existing instances (from 07-kill-criteria.md):**
- 8 ABORT triggers: KB-01, KB-02, KB-03 (after revision), SP-01/02/03 (after 2 cycles), CP-03 (after 1 cycle), FK-05 (>= 2 findings)
- 1 DOWNGRADE trigger: CP-04 (after rollback)
- 1 TIME STOP: TK-01 (240 minutes)
- 12 FIX-AND-RETRY triggers (before escalating to abort)

**When to use:** For conditions where CONTINUING is worse than STOPPING. The key question: "If this condition is true, is there any version of 'keep going' that produces a good outcome?" If NO, it is a kill criterion.

**Meta-verification:** Kill criteria are listed in the execution prompt. Each has an ID (KB-xx, SP-xx, etc.). At each gate checkpoint, the team-lead's gate execution log records WHICH kill criteria were evaluated, WHETHER any were triggered, and WHAT action was taken. Post-experiment, the audit verifies: every kill criterion was evaluated at least once during the stages where it applies.

---

### Type 8: COMMUNICATION GATE

**Definition:** Verify that a SPECIFIC MESSAGE was sent (not just that messaging "should happen"). The ceiling experiment had zero inter-agent messages despite the protocol stating agents "CAN" message. The fix: agents MUST message, and the team-lead verifies at phase boundaries.

**Characteristics:**
- Attention cost to builder: **1** per required message (must compose and send)
- Attention cost to team-lead: **0.5** (checks message log at phase boundary)
- Reliability: **90%** (if the rule is MUST, and the team-lead checks at the boundary, the message will be sent; if the rule is CAN, it will never be sent)
- False positive risk: LOW
- False negative risk: MODERATE (message may be sent but contain no useful information -- Goodhart's Law)

**Existing instances (from unified action plan):**
- Checkpoint A: Builder MUST send CLARIFICATION-REQUEST to planner before writing HTML (content: biggest spatial concern, checkpoint whitespace calculation, plan read confirmation)
- Checkpoint B: Builder MUST send POST-BUILD REPORT after writing file (content: total page height, content-to-void ratio, section count, deviations)
- Checkpoint C: Any agent MUST send ANOMALY-FLAG to team-lead when anomaly detected
- Checkpoint D: Builder MUST acknowledge embedded auditor hard alerts
- Checkpoint E: Each pass MUST send pre-handoff confirmation to next pass

**Mitigation for Goodhart's Law (R4):** Messages must contain SPECIFIC NUMBERS, not narratives. Checkpoint A requires 3 fields. Checkpoint B requires 4 numbers. If the message does not contain the required fields, the communication gate FAILS even if a message was sent.

**Meta-verification:** Team-lead maintains a communication log with columns: Checkpoint ID, Sender, Recipient, Timestamp, Required Fields Present (Y/N), Content Summary. At each gate boundary, team-lead checks: "Did the required messages arrive? Do they contain the required fields?" Zero messages at Gate 1 = PAUSE BUILD (R9 mitigation).

---

## PART 2: ENFORCEMENT TYPE PROFILES

For each enforcement type, this section specifies: WHEN it fires, WHO checks it, WHAT happens on FAIL, HOW we verify the check itself happened, and the COST in attention units.

### Summary Matrix

| Type | When | Who Checks | On FAIL | Meta-Verification | Cost (Builder) | Cost (Team-Lead) |
|------|------|-----------|---------|-------------------|---------------|-----------------|
| PROGRAMMATIC GATE | Between passes | Automated script | Block / Fix-Retry / Abort | Report file exists with timestamp | 0 | 0.5 |
| SCREENSHOT GATE | Between passes | External agent or team-lead | Block / Fix / Abort | Screenshot file + verdict file exist | 0 | 2-4 |
| FILE DIFF GATE | Between passes | Team-lead scans | Block / Fix | Checklist of required sections/tables | 0 | 1 |
| AGENT SELF-CHECK | End of build phase | Builder (binary list) | Flag for gate | Self-check table in Checkpoint B report | 0.5/item | 0 |
| TEAM-LEAD CHECKPOINT | Pass boundaries | Team-lead | Block | Gate execution log entry | 0 | 1-2 |
| EMBEDDED AUDITOR ALERT | During build | Monitoring agent | Hard alert -> builder acknowledges | Monitoring log with measurement entries | 0 (until alert) | 0.5 |
| KILL CRITERION | All stages | Team-lead evaluates | Abort / Downgrade / Hard Stop | Gate log records evaluation + action | 0 | 1 |
| COMMUNICATION GATE | Before/after build phases | Team-lead checks log | Pause build | Communication log with required fields | 1/message | 0.5 |

---

## PART 3: THE ZERO-GUIDELINE PRINCIPLE

Every action item from all 20 reports must be classified into EXACTLY ONE of six categories. NO item may remain as a "guideline," "recommendation," or "should."

### Category Definitions

**GATE** (binary, enforced, zero builder attention cost)
- Checked by: automated script, team-lead, or external agent
- Builder attention cost: 0
- Failure response: Block, Fix-Retry, Abort, or Downgrade
- Example: "Container width must be 940-960px" -> Programmatic gate SC-01

**SELF-CHECK** (binary, builder verifies, ~0.5 attention units)
- Checked by: builder, against binary checklist
- Builder attention cost: 0.5 per item
- Failure response: Builder fixes before reporting complete; gate catches misses
- Example: "Header + footer present" -> Builder self-check item #6

**KILL CRITERION** (binary, abort trigger)
- Checked by: team-lead at gate boundaries
- Builder attention cost: 0
- Failure response: Abort, Downgrade, or Hard Stop
- Example: "Content/Zone ratio >= 1.5" -> Kill criterion KB-02

**CONVICTION** (context for the agent's "soul" -- shapes behavior without being a rule)
- Checked by: no one -- this is influence, not enforcement
- Builder attention cost: ~2 (absorbed during prompt reading, shapes subsequent decisions)
- Failure response: None -- convictions manifest as tendencies, not binary outcomes
- Example: "Beauty = confident intention at every scale of attention"
- Example: "The difference between Flagship and Ceiling is not complexity. It is restraint."
- Example: "Warm. Authoritative. Unhurried."

**REFERENCE** (in library files, consulted when needed, zero prompt cost)
- Checked by: no one -- this is documentation, not enforcement
- Builder attention cost: 0 in prompt; ~2 if agent consults file during build
- Failure response: None -- reference material does not have pass/fail
- Example: Full mechanism catalog (mechanism-catalog.md)
- Example: Crown jewel technique inventory (DD-006, CD-006 analysis)
- Example: Tension-composition skill pipeline phases

**DISCARDED** (explicitly killed with reason)
- Not checked, not referenced, not in prompt
- Reason for discarding documented here
- Example: "Page should feel organic" -> DISCARDED: judgment rule, ~0% compliance
- Example: "Consider visual hierarchy" -> DISCARDED: vague, not binary, subsumed by spatial gate

### Classification Rules

To classify an action item, apply this decision tree:

```
1. Can it be measured by a script?
   YES -> Is it a deal-breaker if violated?
          YES -> KILL CRITERION
          NO  -> PROGRAMMATIC GATE
   NO  -> Continue

2. Can the builder check it in < 30 seconds with a YES/NO answer?
   YES -> SELF-CHECK
   NO  -> Continue

3. Can an external agent or team-lead verify it from screenshots or files?
   YES -> SCREENSHOT GATE or FILE DIFF GATE
   NO  -> Continue

4. Does it shape HOW the builder thinks, not WHAT the builder does?
   YES -> CONVICTION (max 10 convictions total -- attention budget)
   NO  -> Continue

5. Is it useful REFERENCE material the builder might consult?
   YES -> REFERENCE (move to library file)
   NO  -> DISCARDED (document reason)
```

### Classification of All Action Item Types

Below, I classify the CATEGORIES of action items from the 20 reports. Individual items are too numerous to list (the unified action plan alone has 100+ items), but every item falls into one of these category patterns:

| Pattern | Examples | Classification | Enforcement Type |
|---------|----------|---------------|-----------------|
| "X must be [number]" | Container 940-960px, CPL 45-80, void <= 30% | GATE | Programmatic |
| "X must be [comparison]" | Content >= 70%, header <= 20%, mechanism <= 16 | GATE | Programmatic |
| "X must exist" | Footer present, header present, spatial budget table | GATE | File Diff or Programmatic |
| "X must be sent" | Checkpoint A, B, C, D, E messages | GATE | Communication |
| "If X then ABORT" | KB-01 through KB-05, SP failures after 2 cycles | KILL CRITERION | Kill |
| "Builder verifies own work" | 7-item self-check list | SELF-CHECK | Agent Self-Check |
| "Visual impression of X" | Squint test, zone differentiation, metaphor structural | GATE | Screenshot |
| "Page should feel X" | Warm, authoritative, unhurried, restrained | CONVICTION | In Layer 1 prompt |
| "The difference between X and Y is Z" | Restraint vs complexity, vocabulary vs composition | CONVICTION | In Layer 1 prompt |
| "Technique catalog for X" | Mechanism catalog, crown jewel techniques, transition types | REFERENCE | Library files |
| "Pipeline phase N does X" | Phase details, agent responsibilities, handoff protocols | REFERENCE | Coordination spec |
| "Consider X" | "Consider visual hierarchy," "aim for balance" | DISCARDED | Judgment, ~0% compliance |
| "The builder SHOULD X" | Any SHOULD without binary threshold | DISCARDED or converted to MUST with threshold |

### Discarded Items (With Reasons)

These patterns from the research are explicitly NOT included in the enforcement architecture:

| Discarded Item | Reason |
|---------------|--------|
| "Page should feel organic" | Judgment rule, ~0% compliance. Covered by screenshot gates. |
| "Consider the reader's journey" | Vague, no binary test. Covered by designed moment distribution check. |
| "Aim for visual balance" | Judgment. Covered by squint test (SC-04) and content distribution (SC-03). |
| "Use restraint" | Vague. Converted to restraint RATIO (>= 1.5) which is a gate. |
| "Mechanisms should serve the content" | Judgment. Converted to subtraction test (Check 3.1) which has binary outcome. |
| "Proportions should feel right" | Judgment. Covered by header ratio (SC-05), void budget (SC-02), content distribution (SC-03). |
| "The metaphor should feel structural" | Judgment. Converted to Gate 4 (fresh-eyes: "Can you identify zone boundaries without labels?" YES/NO). |
| Any rule with "seems," "feels," "appears" | All judgment. Each has been converted to a binary gate or discarded. |

---

## PART 4: META-VERIFICATION (THE GATE EXECUTION LOG)

The ceiling experiment had gates defined but some were never checked. The spatial confidence gate specification existed but was not executed during the ceiling build. The kill criteria document existed but no kill criterion was evaluated. **The meta-problem: how do we verify that the gates themselves fired?**

### 4.1 Gate Execution Log Format

The team-lead maintains a single append-only file: `00-gate-execution-log.md`. Every gate evaluation appends an entry:

```markdown
## [GATE_ID] [TIMESTAMP]

**Stage:** [Pre-Build / Pass 1 / Pass 2 / Pass 3 / Final]
**Gate:** [Gate name and ID]
**Evaluator:** [Who ran the check: script / agent name / team-lead]
**Input artifact:** [File or screenshot that was evaluated]
**Result:** PASS / FAIL
**Measured value:** [The actual number or verdict]
**Threshold:** [The required number or condition]
**Action taken:** [Proceed / Fix Cycle N / Abort / Downgrade / None]
**Kill criteria evaluated:** [List of kill criterion IDs checked at this stage]
**Kill criteria triggered:** [List of triggered IDs, or "None"]
**Communication gates verified:** [List of checkpoint IDs verified, or "N/A"]
**Evidence files:** [List of files produced by this gate evaluation]
```

### 4.2 Required Gate Entries Per Stage

The post-experiment audit verifies that the gate execution log contains ALL required entries:

| Stage | Required Gate Entries | Minimum Count |
|-------|---------------------|---------------|
| Pre-Build | KB-01 through KB-05 evaluations | 5 entries |
| Post-Pass-0 | Gate 0 (Spatial Budget) | 1 entry |
| Post-Pass-1 | Gate 1 (SC-01 through SC-07) + Gate 2 (Landmarks) + Communication gates A/B | 3 entries |
| Post-Pass-2 | Gate 3 (CP-01 through CP-04) + Communication gates C/D | 2 entries |
| Post-Pass-3 | IT-01 through IT-03 + Communication gate E | 2 entries |
| Final | FK-01 through FK-05 + Novelty + Mode 4 PA | 3 entries |
| Ongoing | TK-01 time checks (at each gate boundary) | 6 entries (1 per stage) |

**Minimum total entries in gate execution log: 22.**

### 4.3 Post-Experiment Gate Audit

After the experiment completes (regardless of outcome), a post-experiment auditor performs the Gate Audit:

**Step 1: Entry Count.** Count entries in `00-gate-execution-log.md`. If < 22: INCOMPLETE. Identify which gates were not evaluated.

**Step 2: Kill Criteria Coverage.** For each of the 24 kill criteria, verify it appears in at least one gate entry's "Kill criteria evaluated" field. If any kill criterion was never evaluated: FLAG.

**Step 3: Communication Coverage.** For each of the 5 mandatory checkpoints (A through E), verify it appears in at least one gate entry's "Communication gates verified" field. If any checkpoint was never verified: FLAG.

**Step 4: Temporal Consistency.** Verify that gate entries are in chronological order and that no pass began before the previous pass's gate was logged as PASS.

**Step 5: Failure Handling.** For every FAIL entry, verify that a subsequent entry shows either (a) a PASS after fix, or (b) an ABORT/DOWNGRADE action. No FAIL should be the last entry for a gate without a resolution entry.

This audit takes ~15 minutes and can be performed by a Sonnet agent reading the log file. It is the meta-verification that closes the loop.

### 4.4 Why the Log Works

The gate execution log succeeds where "instructions to check things" fail because:

1. **It is append-only.** You cannot retroactively claim a gate was checked if the entry is missing.
2. **It has a minimum entry count.** The post-experiment audit can verify completeness without understanding the content.
3. **It is the team-lead's PRIMARY deliverable.** The team-lead's role is not "orchestrate agents" -- it is "fill the gate execution log." Every action the team-lead takes should produce a log entry. If the team-lead is working but the log is empty, the team-lead is doing the wrong work.
4. **It converts "did you check?" from a trust question to a file question.** Trust achieves ~0% verification; files achieve ~100%.

---

## PART 5: THE IMPERATIVE LADDER

Enforcement mechanisms ranked from most to least imperative. Every action item from the flagship preparation is assigned to one level.

### Level 1: ABORT (experiment stops)

The experiment halts entirely. The current output is saved but declared a failure. Rebuild required.

**Triggering conditions:**
- KB-01: Content sections < 4 (after expansion attempt)
- KB-02: Content/Zone ratio < 1.5 (after metaphor redesign attempt)
- KB-03: Predicted void > 30% (after plan compression attempt)
- SP-01/02/03: Spatial gate fails after 2 fix cycles
- CP-03: Zone boundaries invisible after 1 correction cycle (Pass 2 abort only)
- FK-05: 2+ dual spatial WOULD-NOT-SHIP findings at final audit
- TK-01: Pass 1 still failing gates at 240 minutes

**Assignment rule:** An action item belongs at Level 1 if its violation makes the output FUNDAMENTALLY UNSOUND -- no amount of fixing the current artifact will produce a shippable result. The defect is architectural, not cosmetic.

### Level 2: BLOCK (next pass cannot start)

The current pass's output is preserved, but the pipeline halts until the condition is satisfied. The team-lead does not spawn the next pass's agents.

**Triggering conditions:**
- Gate 0: Spatial Budget Gate fails -> Pass 1 blocked
- Gate 1: Spatial Confidence Gate fails (before 2-cycle abort) -> Pass 2 blocked
- Gate 2: Landmark Completeness fails -> Pass 2 blocked
- Gate 3: Composition Verification fails -> Pass 3 blocked
- Gate 4: Metaphor Coherence fails -> Pass 4 blocked
- Communication gate: Zero messages at Gate 1 boundary -> PAUSE build
- KB-04: Prompt > 200 lines -> Build blocked until compressed
- KB-05: Soul channel conflicts > 0 -> Build blocked until metaphor redesigned
- File diff gates: Required artifacts missing -> Next phase blocked

**Assignment rule:** An action item belongs at Level 2 if its violation means the NEXT PHASE will build on a flawed foundation. The defect is fixable but must be fixed BEFORE proceeding.

### Level 3: ROLLBACK (revert to previous pass output)

The current pass's changes are discarded. The previous pass's output is restored. The current pass is re-attempted with reduced scope.

**Triggering conditions:**
- CP-04: Spatial re-check fails after Pass 2 -> Rollback to Pass 1 skeleton
- IT-01: Height increase > 10% after Pass 4 -> Revert heaviest Pass 4 additions
- Embedded auditor alert: void ratio > 30% during build -> Builder reverts most recent additions

**Assignment rule:** An action item belongs at Level 3 if its violation means the current pass DEGRADED the output. The previous state was better. Rolling back preserves the known-good state.

### Level 4: FIX-AND-RETRY (2 cycles max)

The builder receives specific fix instructions and re-builds. The gate re-runs. Maximum 2 cycles before escalating to ABORT (Level 1) or DOWNGRADE.

**Triggering conditions:**
- SC-01 through SC-07 individual failures (before 2-cycle abort)
- CP-01: Mechanism count > 16 -> Remove mechanisms
- CP-02: Restraint ratio < 1.5 -> Document more rejections
- IT-02: Intentionality elements < 2 -> Add missing elements
- FK-02: Soul violations > 0 -> Fix CSS (soul fixes ARE CSS-appropriate)

**Assignment rule:** An action item belongs at Level 4 if its violation is FIXABLE at the current level of abstraction. Container width is a CSS fix. Soul violations are CSS fixes. Missing mechanisms are CSS additions. The defect does not require architectural restructuring.

### Level 5: FLAG (noted but does not block)

The finding is recorded in the gate execution log. It does not prevent the next phase from starting. It is reviewed during the verdict synthesis.

**Triggering conditions:**
- IT-03: Self-reference consensus = FORCED -> Remove element (but page continues)
- FK-04: Novelty = 5 (CONDITIONAL) -> Ship at ceiling-equivalent tier (does not prevent shipping)
- Signal-to-silence ratio outside 0.6-0.8:1 -> Noted for review, not blocking
- Designed moment distribution uneven -> Noted, not blocking (unless combined with other findings)
- Token compliance 75-80% -> Below target but above minimum

**Assignment rule:** An action item belongs at Level 5 if its violation represents a QUALITY DEGRADATION but not a STRUCTURAL FAILURE. The page is still shippable at a lower quality band. The finding informs the verdict tier classification but does not prevent shipping.

### Level 6: LOG (recorded for retrospective only)

The measurement is logged for post-experiment analysis. It has no effect on the current experiment.

**Triggering conditions:**
- Timing measurements (actual vs estimated per pass)
- Message count and content quality assessment
- Mechanism deployment details (which mechanisms, which locations)
- Builder self-check accuracy (how many self-check items matched gate results)
- Agent attention patterns (which prompt sections were followed, which ignored)

**Assignment rule:** An action item belongs at Level 6 if it is RESEARCH DATA, not an enforcement criterion. It helps improve future experiments but does not affect the current one.

### Level Assignment Decision Tree

```
Does violation make the output fundamentally unsound?
  YES -> Is it fixable within the current architecture?
         NO  -> Level 1: ABORT
         YES -> Has it failed 2+ fix cycles already?
                YES -> Level 1: ABORT
                NO  -> Level 4: FIX-AND-RETRY
  NO  -> Does it affect the NEXT pass's foundation?
         YES -> Level 2: BLOCK
         NO  -> Did it DEGRADE the output from a known-good state?
                YES -> Level 3: ROLLBACK
                NO  -> Does it affect shippability?
                       YES -> Level 5: FLAG
                       NO  -> Level 6: LOG
```

---

## PART 6: ENFORCEMENT COST BUDGET

The total enforcement overhead must fit within the experiment's time and attention budgets.

### Time Budget

| Stage | Enforcement Activities | Estimated Time |
|-------|----------------------|---------------|
| Pre-Build | 5 kill criteria evaluations, prompt length check, spatial budget review | 15-20 min |
| Post-Pass-0 | Gate 0 evaluation | 5 min |
| Post-Pass-1 | Spatial Confidence Gate (6 programmatic + 1 manual), Landmark Gate, Communication Gate check | 15-20 min |
| Post-Pass-2 | Composition Verification (4 checks), spatial re-check, communication check | 10-15 min |
| Post-Pass-3 | Intentionality checks (3), communication check | 5-10 min |
| Final | Mode 4 PA, programmatic audit, novelty, comparative (parallel) | 30-45 min |
| Post-Experiment | Gate audit (meta-verification) | 15 min |
| **TOTAL** | | **95-130 min** |

Against the 320-minute expected pipeline: enforcement overhead is 30-40% of total time. This is high but appropriate -- the ceiling experiment spent 0% on enforcement and produced a DO NOT SHIP result.

### Attention Budget

Builder attention consumed by enforcement:
- Self-check (7 items x 0.5): 3.5 attention units
- Communication gates (5 messages x 1): 5 attention units
- Embedded auditor acknowledgment (~2 alerts): 4 attention units
- **Builder total: ~12.5 attention units** (out of ~100 budget)

This leaves ~87.5 attention units for the builder to execute the actual build -- well within budget.

Team-lead attention consumed by enforcement:
- Gate evaluations (7 gates x 1.5 avg): 10.5 attention units
- Screenshot gates (3 x 3): 9 attention units
- File diff checks (6 x 1): 6 attention units
- Communication log maintenance: 5 attention units
- Gate execution log: 5 attention units
- Kill criteria tracking: 3 attention units
- **Team-lead total: ~38.5 attention units**

Team-lead attention is dominated by enforcement. This is BY DESIGN -- the team-lead's primary job IS enforcement. The team-lead should not be building, evaluating aesthetics, or making creative decisions. The team-lead is the gate keeper. Period.

---

## PART 7: THE ENFORCEMENT FAILURE MODES

Even with this architecture, enforcement can fail. These are the predicted failure modes and their mitigations:

### FM-E1: Gate Exists But Is Never Run

**Symptom:** Gate execution log is missing entries for one or more gates.
**Root cause:** Team-lead skips gates due to time pressure or perceived success.
**Mitigation:** The post-experiment gate audit (Part 4.3) catches this retroactively. But to prevent it proactively: gates are EMBEDDED IN THE PIPELINE, not "things to do when convenient." The team-lead's phase transition script should be: (1) Gate fires. (2) Gate passes? (3a) YES: spawn next pass. (3b) NO: enter fix cycle. If the team-lead spawns the next pass WITHOUT a gate entry, the pipeline is broken.
**Detection:** Post-experiment gate audit Step 1 (entry count).

### FM-E2: Gate Runs But Result Is Ignored

**Symptom:** Gate execution log shows FAIL, but next pass was spawned anyway.
**Root cause:** Sunk cost bias -- "we've come this far, let's keep going."
**Mitigation:** Pre-committed kill criteria. The ABORT decision was made before the experiment started. The team-lead does not decide to abort -- they CHECK whether a pre-committed condition was triggered. This removes judgment from the abort decision.
**Detection:** Post-experiment gate audit Step 5 (failure handling).

### FM-E3: Self-Check Is Performative

**Symptom:** Builder reports all self-checks PASS, but programmatic gate finds failures.
**Root cause:** Builder checks the box without measuring. Continuation bias.
**Mitigation:** Self-checks are PRE-FILTERS, not replacements. The programmatic gate re-checks everything the self-check claims. Self-check accuracy is logged (Part 5, Level 6) for retrospective. If self-check accuracy is < 80%, the self-check mechanism needs redesign.
**Detection:** Comparing self-check report to programmatic gate results.

### FM-E4: Communication Gate Produces Noise (Goodhart's Law)

**Symptom:** Required messages are sent but contain no useful information.
**Root cause:** Agents optimize for message count, not message content. "Checkpoint A: everything looks good" satisfies the count but not the purpose.
**Mitigation:** Communication gates require SPECIFIC FIELDS with NUMBERS. Checkpoint A: "biggest spatial concern: [SPECIFIC CONCERN]; whitespace calculation: [NUMBER]px; plan read confirmation: [SECTION COUNT]." A message without numbers fails the communication gate even if a message was sent.
**Detection:** Team-lead reviews required fields at gate boundary. Missing fields = communication gate FAIL.

### FM-E5: Embedded Auditor Has Playwright Contention

**Symptom:** Embedded auditor cannot take screenshots because builder is using Playwright.
**Root cause:** Concurrent Playwright access.
**Mitigation:** Builder does NOT use Playwright. Builder writes HTML/CSS directly to files. Embedded auditor has EXCLUSIVE Playwright access. Sequential scheduling: auditor screenshots, then waits. This is the same pattern that achieved zero contention in Mode 4 PA (102 screenshots, 9 agents).
**Detection:** Embedded auditor monitoring log shows gaps where screenshots should appear.

### FM-E6: Meta-Verification Becomes Its Own Overhead

**Symptom:** Team-lead spends more time maintaining the gate execution log than evaluating gates.
**Root cause:** Log format is too complex; entry count requirement creates bureaucratic overhead.
**Mitigation:** Gate execution log entries are SHORT (8 fields, each 1 line). Total time to write one entry: ~2 minutes. 22 entries x 2 minutes = 44 minutes total across the entire experiment. This is manageable. If it becomes burdensome, the team-lead is spending too long on individual entries -- entries should be factual, not narrative.
**Detection:** If gate execution log entries average > 20 lines each, the team-lead is writing narratives instead of verdicts.

---

## PART 8: IMPLEMENTATION CHECKLIST

For the team-lead assembling the flagship execution prompt, convert this architecture into action:

### In the Execution Prompt (Layer 2)

1. Builder Self-Check list: 7 binary items, each with specific measurement method
2. Communication obligations: 5 MUST checkpoints with required fields specified
3. Embedded auditor protocol: exclusive Playwright access, screenshot interval, alert threshold

### In the Coordination Spec (Layer 3)

4. Gate sequence: Gate 0 -> Gate 1 -> Gate 2 -> Gate 3 -> Gate 4 -> Gate 5 (all blocking, all sequential)
5. Gate execution log format and minimum entry count (22)
6. Team-lead role definition: "Your primary deliverable is the gate execution log, not the page"
7. Fix cycle protocol: max 2 cycles, then abort per decision matrix
8. Communication log format with required fields per checkpoint

### In the Pre-Build Phase

9. 5 kill criteria (KB-01 through KB-05) evaluated and logged before any agent builds
10. Spatial budget table verified (file diff gate)
11. Zone necessity table verified (file diff gate)
12. Prompt length verified (programmatic gate)
13. All items logged to gate execution log

### As Separate Files (Reference Layer)

14. `03-spatial-confidence-gate.md` -- full JavaScript implementation ready to paste
15. `07-kill-criteria.md` -- 24 criteria with decision tree
16. `08-metacognitive-checkpoints.md` -- 19 checkpoints for builder/planner/synthesizer
17. `E1-enforcement-architecture.md` -- this document (meta-verification protocol)

### Post-Experiment

18. Gate audit: verify 22+ entries in log, all kill criteria evaluated, all communication gates checked
19. Self-check accuracy: compare self-check results to gate results
20. Timing actuals vs estimates
21. Write retrospective on which enforcement mechanisms fired and which were skipped

---

## SUMMARY

| Dimension | Value |
|-----------|-------|
| Enforcement types | 8 (programmatic gate, screenshot gate, file diff gate, agent self-check, team-lead checkpoint, embedded auditor alert, kill criterion, communication gate) |
| Total gates in pipeline | 7 (Gate 0 through Gate 5, plus kill criteria at each) |
| Total binary checks | 24 kill criteria + 7 spatial checks + 4 composition checks + 3 intentionality checks + 5 final checks = 43 |
| Self-check items | 7 (builder) |
| Communication gates | 5 mandatory checkpoints |
| Gate execution log entries | 22 minimum |
| Kill criteria | 24 (8 abort triggers, 12 fix-retry, 1 compression mandate, 1 time stop, 1 consensus, 1 tier classification) |
| Builder attention cost | ~12.5 / 100 units (12.5% of budget) |
| Team-lead attention cost | ~38.5 units (enforcement IS the team-lead's job) |
| Enforcement time overhead | 95-130 min out of ~320 min pipeline (30-40%) |
| Items classified as GUIDELINE | **0** (zero-guideline principle enforced) |
| Items classified as CONVICTION | ~10 (Layer 1 prompt, shapes behavior without rules) |
| Items classified as REFERENCE | All library files (zero prompt cost) |
| Items DISCARDED | All judgment-based "should" rules without binary thresholds |

### The Three-Sentence Summary

Every action item from the flagship preparation is classified as GATE (enforced), SELF-CHECK (verified), KILL CRITERION (pre-committed), CONVICTION (shapes intent), REFERENCE (consulted when needed), or DISCARDED (explicitly killed). The team-lead's primary deliverable is the gate execution log, which proves that every gate actually fired. The post-experiment gate audit verifies the log's completeness, closing the meta-verification loop.

---

**END ENFORCEMENT ARCHITECTURE**
**Author:** META-ENFORCER (Opus 4.6)
**Classification types:** 6 (GATE, SELF-CHECK, KILL CRITERION, CONVICTION, REFERENCE, DISCARDED)
**Enforcement types:** 8
**Gate execution log entries:** 22 minimum
**Core principle:** If it is not enforced, it does not exist. If it is enforced, prove it fired.
