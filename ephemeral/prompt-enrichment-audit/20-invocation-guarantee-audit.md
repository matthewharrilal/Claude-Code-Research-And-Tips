# 20: Zero Dead Lines -- Invocation Guarantee Audit

**Author:** INVOCATION-GUARANTEE-SPECIALIST (Opus 4.6)
**Date:** 2026-02-17
**Task:** #37
**Sources:**
- `00-PROMPT-STRUCTURE-OUTLINE.md` (prompt structure: 9 sections, 17 success criteria, 10 known gaps)
- `E2-information-loss-analysis.md` (6 loss mechanisms, 50:1 compression, routing thesis)
- `20-attention-bandwidth-theory.md` (attention budget model, ~100 units, preparation paradox)
- `E1-enforcement-architecture.md` (8 enforcement types, 6 classification categories, gate execution log)

---

## 1. INVOCATION MAP

Every section of the enriched prompt is mapped to: WHO reads it, WHEN they read it, WHAT action reading causes, HOW we verify they processed it, and WHAT happens if they skip it.

### Section 1: PREAMBLE (Urgency + Metacognitive Architecture)

| Field | Value |
|-------|-------|
| **WHO reads** | Team-lead (primary), all Opus agents (metaphor, content architect, planner, intentionality builder) |
| **WHEN** | Pass 0 -- before any agent is spawned. Team-lead reads first, then embeds selected quotes in agent prompts. |
| **WHAT action** | Team-lead extracts 3 key phrases and includes them in the "CONVICTION SUMMARY" block at the top of each Opus agent's prompt. Team-lead writes a 5-line `00-preamble-digest.md` file. |
| **Evidence artifact** | `00-preamble-digest.md` exists, contains 3 extracted phrases, references specific preamble line numbers. |
| **If skipped** | No framing. Agents produce technically compliant but soulless output. The difference between "ceiling" and "flagship" behavior disappears. |

### Section 2: READING LIST (66+ files across 6 layers)

| Field | Value |
|-------|-------|
| **WHO reads** | Nobody reads all 66. Team-lead routes SPECIFIC files to SPECIFIC agents (see routing table below). |
| **WHEN** | Pass 0. Team-lead constructs per-agent reading lists BEFORE spawning agents. |
| **WHAT action** | Team-lead produces `00-agent-reading-assignments.md` with columns: Agent Name, Files Assigned, Key Extraction Required. Each agent's prompt includes ONLY its assigned files. |
| **Evidence artifact** | `00-agent-reading-assignments.md` exists with all 66 files assigned to at least one agent. Zero unassigned files. |
| **If skipped** | STRUCTURAL LOSS: files exist but no agent reads them. The 50:1 compression happens through neglect, not intentional routing. |

**Routing Table (Layer -> Agent):**

| Layer | Files | Primary Reader | Secondary Reader |
|-------|-------|---------------|-----------------|
| A: Pre-flight (24) | E1-E4, S1-S4, V1-V3, states, extractions | Team-lead (gate setup) | Planner (spatial budget) |
| B: Flagship prep (21) | 01-21 | Team-lead (routing only) | Per-topic agent: metaphor->01,02; planner->03,04,05; builder->06,07 |
| C: Enriched design system (6) | prohibitions, mechanism-catalog, tokens, semantic-rules, TC skill, PA skill | Planner (catalog), Builder (tokens, prohibitions), Auditors (PA skill) | Crown jewel analyst (semantic-rules) |
| D: Crown jewels (2) | CD-006, DD-006 | Crown jewel analyst (primary) | Metaphor agent (secondary) |
| E: Experiment research (12) | 6 scale + 6 flagship prep | Metaphor agent (scale), Content architect (flagship prep) | Team-lead (for gate calibration) |
| F: Experiment artifacts | Ceiling + middle outputs | Content architect (comparative) | Auditors (for baseline) |

### Section 3: LAYER 1 -- CONVICTION (~70 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Metaphor agent, Content architect, Intentionality builder (Opus agents ONLY). Builder does NOT read this. |
| **WHEN** | Pass 0 for metaphor agent. Pass 1 for content architect. Pass 3 for intentionality builder. |
| **WHAT action** | Each Opus agent QUOTES one conviction line in their first checkpoint message. The quote demonstrates they absorbed the framing. Metaphor agent produces metaphor derivation that references at least 1 conviction phrase. |
| **Evidence artifact** | Checkpoint messages from each Opus agent contain a conviction quote. Metaphor derivation document references conviction by line number or phrase. |
| **If skipped** | Output is technically correct but lacks philosophical coherence. The "warm, authoritative, unhurried" personality never materializes. |

### Section 4: LAYER 2 -- EXECUTION SPEC (~100-120 lines)

This is the CRITICAL section. It decomposes into 5 sub-sections:

#### 4A: SPATIAL (~15 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Builder (lines 1-5 of their prompt, primacy zone), Planner (spatial budget template), Team-lead (gate thresholds) |
| **WHEN** | Builder: at build start. Planner: at plan phase. Team-lead: at every gate. |
| **WHAT action** | Builder lists all spatial rule IDs (S1-S5) in Checkpoint A message. Planner includes spatial budget table in build plan. Team-lead runs SC-01 through SC-07 at Gate 1. |
| **Evidence artifact** | Checkpoint A message lists S1-S5. Build plan contains spatial budget table. Gate execution log has SC-01 through SC-07 entries. |
| **If skipped** | THE historical dominant failure mode. 70-80% whitespace void. PA-05 drops from 4/4 to 1.5/4. |

**Per-rule invocation tracking:**

| Rule ID | Rule | Builder Sees? | Gate Checks? | Self-Check Item? |
|---------|------|:---:|:---:|:---:|
| S1 | Container: 940-960px | YES (line 1) | SC-01 | Self-check #1 |
| S2 | No contiguous void > 1.5 viewports (2,160px) | YES (line 2) | SC-02 | Self-check #3 |
| S3 | Content in >= 70% of scroll depth | YES (line 3) | SC-03 | Self-check #3 |
| S4 | Header < 25% of first viewport | YES (line 4) | SC-05 | Self-check #6 |
| S5 | Max spacing 96px between elements | YES (line 5) | SC-06 | (implicit in void check) |

#### 4B: SOUL (~10 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Builder (lines 6-13, high-compliance zone) |
| **WHEN** | At build start; re-checked during self-check phase |
| **WHAT action** | Builder produces CSS that passes all 8 binary soul checks. Self-check item #5: "Soul 8/8." |
| **Evidence artifact** | Self-check report shows "Soul 8/8: PASS." Programmatic gate FK-02 confirms zero soul violations. |
| **If skipped** | Identity violation. Page looks like generic web, not the design system. Historically ~100% compliance when specified as binary. |

| Rule ID | Rule | Builder Sees? | Gate Checks? | Self-Check? |
|---------|------|:---:|:---:|:---:|
| U1 | border-radius: 0 | YES | FK-02 | #5 |
| U2 | box-shadow: none | YES | FK-02 | #5 |
| U3 | No drop-shadow | YES | FK-02 | #5 |
| U4 | No semi-transparent backgrounds | YES | FK-02 | #5 |
| U5 | No gradients | YES | FK-02 | #5 |
| U6 | No pure #000 or #FFF | YES | FK-02 | #5 |
| U7 | Instrument Serif: display headings ONLY | YES | FK-02 | #5 |
| U8 | h3 italic | YES | FK-02 | #5 |

#### 4C: COMPOSITIONAL (~15 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Planner (mechanism selection), Builder (per-category minimums), Auditor (verification) |
| **WHEN** | Planner: during plan phase. Builder: during build. Auditor: post-build. |
| **WHAT action** | Planner's build plan shows per-category mechanism allocation table. Builder's self-check verifies transition count. Auditor's programmatic check verifies mechanism count and category coverage. |
| **Evidence artifact** | Build plan mechanism allocation table. Self-check #7: "3+ transition types." Gate 3 (CP-01 through CP-04) entries. |
| **If skipped** | Metronomic rhythm (Middle experiment defect). No reinforcing pairs. Mechanism dumping without compositional intent. |

| Rule ID | Rule | Builder Sees? | Gate Checks? |
|---------|------|:---:|:---:|
| C1 | Per-category minimums (S:1+, H:1+, C:1+, D:1+, N:1+) | YES | CP-01 |
| C2 | 2+ reinforcing pairs | YES | CP-02 |
| C3 | 3+ transition types, no identical adjacent | YES | CP-03 |
| C4 | 1 designed moment per scroll quartile | YES | CP-04 |
| C5 | 2+ purpose-built components | YES | CP-02 |
| C6 | Mechanism cap: 14 (hard), 16 (absolute max) | YES | CP-01 |

#### 4D: PROCESS (~15 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Team-lead (coordination), Builder (two-instance pattern, checkpoints) |
| **WHEN** | Team-lead: before spawning. Builder: build start and self-check. |
| **WHAT action** | Team-lead enforces two-instance pattern (Pass 1 builder != Pass 2 builder). Builder sends Checkpoint A and B messages. |
| **Evidence artifact** | Agent roster shows distinct builder IDs per pass. Communication log has Checkpoint A and B entries. |
| **If skipped** | Continuation bias (same builder for all passes = no fresh perspective). Isolation failure (no messages = B+ quality ceiling). |

| Rule ID | Rule | Builder Sees? | Gate Checks? |
|---------|------|:---:|:---:|
| P1 | Phase 0E library prohibition | YES | File diff (no new CSS files created) |
| P2 | Two-instance pattern | NO (team-lead enforces) | Agent roster check |
| P3 | Checkpoints A+B mandatory | YES | Communication gate |
| P4 | Builder self-scroll before file write | YES | Self-check report |
| P5 | Embedded auditor acknowledgment | YES (when alert fires) | EA monitoring log |

#### 4E: BUILDER SELF-CHECK (~15 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Builder (exclusively) |
| **WHEN** | AFTER main build, BEFORE file write. This timing is critical -- self-check runs on the completed work, not during creation. |
| **WHAT action** | Builder runs each check, records results in Checkpoint B report. If ANY check fails, builder messages team-lead BEFORE writing file. |
| **Evidence artifact** | Checkpoint B message contains self-check table with PASS/FAIL per item. If all PASS: file written. If any FAIL: message to team-lead describing failure. |
| **If skipped** | Measurable violations escape to the gate phase. Gate catches them, but fix-cycle time is wasted. Self-check is the cheap pre-filter. |

### Section 5: LAYER 3 -- COORDINATION SPEC (~60 lines)

#### 5A: AGENT ROSTER (~25 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Team-lead (exclusively -- they spawn agents) |
| **WHEN** | Pass 0, before any spawn |
| **WHAT action** | Team-lead creates agents matching the roster spec. Each agent gets a prompt that ONLY contains their role-relevant sections. |
| **Evidence artifact** | Agent creation log shows correct model (Opus/Sonnet) per role. Per-agent prompt length fits attention budget (<80 lines for builder). |
| **If skipped** | Wrong model assignments (Sonnet for creative roles = flat output; Opus for mechanical roles = waste). Agents receive irrelevant prompt content. |

#### 5B: COMMUNICATION PROTOCOL (~20 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Team-lead (enforcement), Builder (message obligations), Planner (message expectations) |
| **WHEN** | Embedded in each agent's prompt as communication obligations |
| **WHAT action** | Builder sends 5 mandatory checkpoint messages. Team-lead verifies at gate boundaries. Zero messages at Gate 1 = PAUSE BUILD. |
| **Evidence artifact** | Communication log has entries for Checkpoints A-E. Each entry has required fields (numbers, not narratives). Gate execution log records communication gate results. |
| **If skipped** | Zero inter-agent messaging (ceiling experiment failure mode). Builder isolation. Missing footer (builder couldn't ask planner). |

#### 5C: AUDIT PROTOCOL (~15 lines)

| Field | Value |
|-------|-------|
| **WHO reads** | Team-lead (orchestration), Auditors (their specific protocol) |
| **WHEN** | Post-build, during audit phase |
| **WHAT action** | Team-lead spawns 9 PA auditors with screenshot pre-capture pattern. Each auditor receives their PA question subset and produces findings. |
| **Evidence artifact** | 9 auditor reports, each containing findings or explicit "NO FINDING for PA-XX" per assigned question. Screenshot files in output directory. |
| **If skipped** | Light audit misses dominant defects. The whitespace void was caught by 9/9 Mode 4 auditors but missed by the lighter 2-auditor audit. |

### Section 6: LAYER 4 -- REFERENCE LIBRARY (zero prompt cost)

| Field | Value |
|-------|-------|
| **WHO reads** | Per-agent routing (mechanism catalog -> planner; tokens.css -> builder; PA skill -> auditors) |
| **WHEN** | On-demand during relevant phase |
| **WHAT action** | Agent accesses file when needed. No mandatory read. Reference files are AVAILABLE, not REQUIRED. |
| **Evidence artifact** | None mandatory -- reference access is opportunistic. Planner's mechanism selection quality is the indirect evidence. |
| **If skipped** | Moderate impact. Planner uses generic mechanisms instead of catalog-informed selection. Builder uses raw values instead of tokens. Auditors miss sub-criteria. |

### Sections 7-9: TOPOLOGY, PRINCIPLES, SUCCESS CRITERIA

| Field | Value |
|-------|-------|
| **WHO reads** | Team-lead (topology = assembly orchestration). Team-lead + Verdict synthesizer (principles + success criteria). |
| **WHEN** | Team-lead: Pass 0. Verdict synthesizer: post-audit. |
| **WHAT action** | Team-lead follows topology for prompt ASSEMBLY. Verdict synthesizer evaluates all 17 success criteria and produces final verdict. |
| **Evidence artifact** | Assembly follows phase sequence (files dated/numbered in order). Verdict report addresses all 17 criteria with PASS/FAIL per item. |
| **If skipped** | Assembly: chaotic agent spawning without routing. Verdict: no structured evaluation, ship/no-ship decision becomes gut feel. |

---

## 2. VERIFICATION SYSTEM

### 2.1 Section Checksums

Each section contains a KEY PHRASE that the reading agent MUST quote in their first output artifact. The phrase serves as proof-of-read.

| Section | Key Phrase (Checksum) | Who Quotes It | Where Quoted |
|---------|----------------------|--------------|-------------|
| Preamble | "Everything converges into this artifact" | Team-lead | `00-preamble-digest.md` line 1 |
| Layer 1 Conviction | "Confident intention at every scale of attention" | Metaphor agent | Metaphor derivation document |
| Layer 2A Spatial | "Container: max-width: 960px" | Builder | Checkpoint A message |
| Layer 2B Soul | "Soul 8/8" | Builder | Self-check report header |
| Layer 2C Compositional | "Per-category minimums" | Planner | Build plan mechanism table header |
| Layer 2D Process | "Two-instance pattern" | Team-lead | Agent roster log |
| Layer 2E Self-Check | "Run BEFORE file write" | Builder | Checkpoint B timing annotation |
| Layer 3A Roster | Model assignments (Opus/Sonnet) | Team-lead | Agent creation log |
| Layer 3B Communication | "5 mandatory checkpoints" | Team-lead | Communication log header |
| Layer 3C Audit | "9 PA auditors" | Team-lead | Audit spawn log |
| Layer 4 Reference | File routing table | Team-lead | `00-agent-reading-assignments.md` |
| Principles | "Binary rules = 100% compliance" | Team-lead | Gate execution log preamble |
| Success Criteria | All 17 criteria IDs | Verdict synthesizer | Verdict report criteria list |

**Verification protocol:** Post-experiment, a verification agent checks each checksum location. If the key phrase is absent, the section was not processed. Verification takes ~10 minutes (13 checksum checks).

### 2.2 Response Templates

Each section that requires agent action includes a FILL-IN-THE-BLANK template. The agent cannot complete the template without having read and understood the section.

**Builder Response Templates:**

```
CHECKPOINT A (after reading prompt, before building):
- My biggest spatial concern is: ___
- My whitespace calculation shows: ___px total void
- Container width I will use: ___px
- Rules I am tracking (list IDs): S1, S2, S3, S4, S5, U1-U8, C1-C6, ___
```

```
CHECKPOINT B (after build, before file write):
- Page height: ___px
- Content-to-void ratio: ___:___
- Token compliance: ___% (var() count: ___, raw count: ___)
- CPL at body text: ___
- Self-check results: S1[___] S2[___] S3[___] S4[___] U[___/8] C3[___] C4[___]
- Deviations from plan: ___
```

**Planner Response Template:**

```
BUILD PLAN SPATIAL BUDGET TABLE:
Zone | Content Height | Void Height | Mechanism Count | Content Ratio
-----|----|----|----|----
[zone 1] | ___px | ___px | ___ | ___%
[zone 2] | ___px | ___px | ___ | ___%
...
TOTALS  | ___px | ___px | ___ | ___%
THRESHOLD: Content ratio >= 60%. Actual: ___%
```

**Metaphor Agent Response Template:**

```
METAPHOR DERIVATION:
Primary metaphor: ___
Conviction reference: "___" (quoted from Layer 1)
Structural obligations: [table]
Anti-scale model alignment: Richness = ___ x ___ x ___
```

**Team-Lead Gate Template (per gate):**

```
## [GATE_ID] [TIMESTAMP]
Stage: ___
Gate: ___
Evaluator: ___
Result: PASS / FAIL
Measured: ___
Threshold: ___
Action: Proceed / Fix / Abort
Kill criteria checked: ___
Communication gates verified: ___
```

### 2.3 Execution Log Entries

Every agent writes a structured log entry upon reading each assigned section. The log entry format is:

```
READ [SECTION ID]: [LINE COUNT] lines. Key rules: [RULE IDs].
Flagging: [CONCERN or "none"].
```

Example from builder:
```
READ 2A-SPATIAL: 15 lines. Key rules: S1, S2, S3, S4, S5.
Flagging: S2 void limit (2,160px) may conflict with 5-zone metaphor architecture -- need to verify with planner.
```

These entries go into the agent's checkpoint message, NOT into a separate file. The communication gate verifies their presence.

---

## 3. ANTI-SKIMMING ARCHITECTURE

### 3.1 Rule Numbering System

Every rule in the prompt gets a unique ID. The ID namespace is:

| Prefix | Domain | Range |
|--------|--------|-------|
| S | Spatial rules | S1-S10 |
| U | Soul (identity) rules | U1-U8 |
| C | Compositional rules | C1-C10 |
| P | Process rules | P1-P10 |
| K | Kill criteria | KB-01 through KB-05, SP-01 through SP-03, etc. |
| M | Mechanism assignments (per build plan) | M01-M16 |
| T | Transition types | T1-T3+ |

Total unique rule IDs: ~50-60 (within the ~55 rule budget from the attention model).

### 3.2 Mandatory Acknowledgment Protocol

**Step 1: Builder receives prompt containing rule IDs.**

**Step 2: Builder's FIRST action is to produce a rule acknowledgment list in Checkpoint A:**

```
RULE ACKNOWLEDGMENT (Builder, Checkpoint A):
SPATIAL: S1[container 960px] S2[void <1.5vp] S3[content >=70%] S4[header <25%] S5[max-spacing 96px]
SOUL: U1-U8 [8 binary checks acknowledged]
COMPOSITIONAL: C1[per-cat min] C2[reinforcing pairs] C3[3+ transitions] C4[designed moments] C5[purpose-built] C6[cap 14]
PROCESS: P1[no library] P3[checkpoints] P4[self-scroll] P5[EA acknowledgment]
TOTAL TRACKED: __ rules
```

**Step 3: Team-lead verifies at Gate 1 boundary.** If the rule acknowledgment is missing from Checkpoint A, the communication gate FAILS. Build is paused.

**Step 4: Post-build, the self-check cross-references against the acknowledgment.** Every acknowledged rule has a PASS/FAIL in the self-check report. Rules acknowledged but not self-checked = FLAG.

### 3.3 Spot Check Protocol

The team-lead performs 2 spot checks during the experiment:

**Spot Check 1 (during Pass 1 build, via embedded auditor relay):**
- Team-lead selects 1 random rule ID from the builder's acknowledgment list.
- Sends message: "Builder: What does rule [ID] require? Reply with the threshold."
- Builder must reply with the correct threshold within 1 message.
- If incorrect or no reply: FLAG (does not block, but logged).

**Spot Check 2 (during Pass 2 or 3):**
- Same protocol with a different rule ID from a different domain.

Spot checks cost ~1 attention unit each. They catch performative acknowledgment (builder listed rule IDs without reading them).

### 3.4 Cross-Reference Challenges

Certain rules are DEPENDENT -- one section references content from another. These cross-references create a verification chain:

| Dependent Section | References Content From | Verification |
|------------------|------------------------|-------------|
| Build plan spatial budget (planner) | S1 container width, S3 content ratio | Spatial budget table uses 960px as container width. If it uses a different value: planner didn't read 2A. |
| Metaphor derivation | Layer 1 conviction phrases | Derivation document quotes at least 1 conviction phrase. If zero quotes: metaphor agent didn't read Layer 1. |
| Builder self-check | Rule IDs from 2A-2E | Self-check lists rule IDs. If IDs are missing or wrong: builder didn't internalize 2E. |
| Auditor PA questions | PA skill routing table | Each auditor's report headers match their assigned PA question numbers. Mismatched numbers = wrong routing. |
| Gate execution log | Kill criteria IDs from KB section | Log references specific KB-XX IDs. If IDs are absent: team-lead didn't read kill criteria section. |

### 3.5 Structural Deduplication

Dead lines often arise from REDUNDANCY -- the same rule stated in multiple places. The invocation guarantee requires that each rule appears EXACTLY ONCE in the builder's prompt. The rule may appear in other agents' prompts, but within a single agent's prompt, zero duplication.

**Deduplication protocol:**
1. After assembling each agent's prompt, grep for duplicate rule IDs.
2. If a rule ID appears more than once: remove the duplicate that is furthest from the primacy zone (lines 1-10).
3. Log removed duplicates in the assembly changelog.

---

## 4. PER-AGENT CONTRACTS

An invocation contract specifies: what the agent RECEIVES, what the agent MUST PRODUCE, and the verification method.

### 4.1 Team-Lead Contract

```
RECEIVES:
- Full enriched prompt (all sections)
- Pre-flight files (Layer A: 24 files)
- Gate specifications (E1, spatial confidence, kill criteria)

MUST PRODUCE:
- 00-preamble-digest.md (5 lines, 3 key phrases)
- 00-agent-reading-assignments.md (66 files, zero unassigned)
- Agent roster log (per-agent: name, model, prompt line count, attention estimate)
- Gate execution log (22+ entries, append-only)
- Communication log (5 checkpoint entries minimum)
- 2 spot check results

VERIFICATION:
- Post-experiment gate audit checks: entry count >= 22, kill criteria coverage,
  communication coverage, temporal consistency, failure handling
- Assembly audit checks: 00-agent-reading-assignments.md covers all 66 files
```

### 4.2 Metaphor Agent Contract (Opus)

```
RECEIVES:
- Layer 1 Conviction (~70 lines)
- Scale exploration reports (Layer E: 6 files)
- Crown jewels CD-006 + DD-006 (via routing)
- 1-paragraph content summary from content architect

MUST PRODUCE:
- Metaphor derivation document containing:
  * Primary metaphor with structural obligations table
  * At least 1 conviction quote (checksum verification)
  * Anti-scale model alignment: "Richness = ___ x ___ x ___"
  * Zone architecture with content-zone mapping
- Checkpoint message with conviction quote

VERIFICATION:
- Conviction checksum present in derivation document
- Anti-scale formula populated with specific values
- Zone architecture table has at least 4 zones with content assignments
- Gate 4 (metaphor coherence): 2 fresh-eyes agents identify zone boundaries
```

### 4.3 Planner Contract (Opus)

```
RECEIVES:
- Metaphor derivation (from metaphor agent)
- Mechanism catalog (reference file)
- Layer 2C Compositional rules (C1-C6)
- Spatial budget template (from team-lead)

MUST PRODUCE:
- Build plan containing:
  * Spatial budget table (per-zone content/void/mechanism count, total ratio >= 60%)
  * Mechanism allocation table (per-category: S:1+, H:1+, C:1+, D:1+, N:1+)
  * Zone necessity table (YES/NO per zone per criterion)
  * Transition plan (3+ types specified, no identical adjacent)
  * Designed moment locations (1 per scroll quartile)
  * Reinforcing pair definitions (2+)
- Checkpoint message with "Per-category minimums" checksum phrase

VERIFICATION:
- Gate 0 (Spatial Budget): ratio >= 60%, table complete
- File diff: spatial budget table exists, has required columns, >= 4 rows
- File diff: mechanism allocation table has 5 categories, each >= 1
- File diff: zone necessity table exists
```

### 4.4 Builder Contract (Pass 1 -- Skeleton)

```
RECEIVES:
- ~75 lines total:
  * Spatial rules S1-S5 (lines 1-5, primacy zone)
  * Soul rules U1-U8 (lines 6-13)
  * Communication obligations (lines 14-17)
  * Mechanism table from build plan (lines 18-32)
  * Compositional rules C1-C6 (lines 33-42)
  * Token + measurement rules (lines 43-48)
  * Self-check list (lines 49-62)
  * 1-paragraph metaphor summary (lines 63-72)

MUST PRODUCE:
- Checkpoint A message containing:
  * Rule acknowledgment list (all rule IDs tracked)
  * Biggest spatial concern (free text, must be specific)
  * Whitespace calculation (specific number in px)
  * Container width being used (must match S1)
- HTML/CSS file (flagship-page-v1.html)
- Checkpoint B message containing:
  * Page height (px)
  * Content-to-void ratio (N:N format)
  * Token compliance (% + counts)
  * CPL value
  * Self-check table (PASS/FAIL per rule ID)
  * Deviations from plan

VERIFICATION:
- Communication gate: Checkpoint A has 4 required fields
- Communication gate: Checkpoint B has 6 required fields
- Self-check: all rule IDs from acknowledgment appear in self-check table
- Programmatic gates: SC-01 through SC-07
- Programmatic gates: FK-02 (soul)
- Screenshot gate: squint test (SC-04)
```

### 4.5 Builder Contract (Pass 2 -- Elaboration)

```
RECEIVES:
- Pass 1 output (flagship-page-v1.html) -- ARTIFACT, not prompt
- ~60 lines of elaboration prompt:
  * Reinforcing pair definitions from plan
  * 4-scale coherence table
  * Additional mechanisms (4-6)
  * Transition refinement rules
  * Designed moment specifications
  * Restraint protocol ("for every element added, document what was considered and rejected")

MUST PRODUCE:
- Checkpoint C message (elaboration concerns + scale coherence self-assessment)
- HTML/CSS file (flagship-page-v2.html)
- Restraint map (>= 15 planner rejections + >= 6 builder rejections)
- Checkpoint D message (post-elaboration report with numbers)

VERIFICATION:
- Communication gate: Checkpoints C and D
- Gate 3: CP-01 through CP-04
- File diff: restraint map exists with >= 21 entries
- Spatial re-check: SC-01 through SC-07 re-run on v2 (regression detection)
```

### 4.6 Builder Contract (Pass 3 -- Intentionality)

```
RECEIVES:
- Pass 2 output (flagship-page-v2.html) -- ARTIFACT
- ~50 lines of intentionality prompt:
  * Intentionality checklist (bookending, self-reference, cognitive transitions, meta-annotation)
  * Height constraint: additions must not increase total height by > 10%
  * Content addition guidelines (HTML-only, no new CSS complexity)

MUST PRODUCE:
- Checkpoint E message (pre-handoff confirmation + height prediction)
- HTML file (flagship-page-v3.html)

VERIFICATION:
- IT-01: Height increase <= 10%
- IT-02: >= 2 intentionality elements present
- IT-03: Self-reference consensus (if forced, remove)
- Communication gate: Checkpoint E
```

### 4.7 Auditor Contracts (9 PA Auditors)

```
RECEIVES:
- Pre-captured screenshots (from team-lead, using screenshot pre-capture pattern)
- Assigned PA question subset (5-6 questions each, no overlap between auditors)
- Comparative baseline: Middle experiment scores

MUST PRODUCE:
- Finding report with EXACTLY one entry per assigned question:
  * PA-XX: [FINDING or "NO FINDING"]
  * If finding: severity (BLOCKING / SIGNIFICANT / MINOR), evidence (screenshot reference),
    recommendation

VERIFICATION:
- Each auditor's report has entries for ALL assigned PA questions
- "NO FINDING for PA-XX" is explicitly required (prevents silent skipping)
- Zero unaddressed PA questions across all 9 auditors (team-lead cross-references)
```

### 4.8 Embedded Auditor Contract

```
RECEIVES:
- Exclusive Playwright access
- Alert thresholds: void > 30%, container != 940-960px
- Screenshot interval: every 100 CSS lines during Pass 1 and 2

MUST PRODUCE:
- EA monitoring log: measurement timestamp, metric, value, threshold, PASS/ALERT
- Hard alerts sent to builder when threshold exceeded
- Screenshots saved as files: EA-{pass}-{seq}-{viewport}-{timestamp}.png

VERIFICATION:
- Monitoring log has >= expected entries (based on build duration)
- Alert files exist when thresholds were violated
- Screenshots are timestamped and sequential
```

---

## 5. FAILURE DETECTION

### 5.1 Failure Detection Matrix

For each invocation guarantee, how to DETECT that it failed:

| Guarantee | Detection Method | Detection Timing | Cost |
|-----------|-----------------|-----------------|------|
| Preamble was read | `00-preamble-digest.md` exists | Pass 0 end | 1 min |
| Reading list was routed | `00-agent-reading-assignments.md` has 66 entries | Pass 0 end | 2 min |
| Conviction was absorbed | Opus agents quote conviction in checkpoints | Per-checkpoint | 0.5 min each |
| Spatial rules were read | Checkpoint A contains S1-S5 IDs | Gate 1 boundary | 1 min |
| Soul rules were read | Self-check shows U1-U8 (8/8) | Checkpoint B | 1 min |
| Compositional rules processed | Build plan has per-category table | Gate 0 | 2 min |
| Process rules followed | Communication log has entries | Per-gate boundary | 1 min |
| Self-check was run | Checkpoint B has self-check table | Gate 1 boundary | 1 min |
| Audit protocol followed | 9 auditor reports exist with all PA questions covered | Post-audit | 5 min |
| Kill criteria evaluated | Gate execution log references KB-XX IDs | Post-experiment | 5 min |
| Gate execution log complete | Entry count >= 22 | Post-experiment | 2 min |
| Communication gates verified | 5 checkpoint entries in communication log | Post-experiment | 2 min |
| Spot checks performed | 2 spot check results in team-lead log | Post-experiment | 1 min |
| Rule acknowledgment complete | Checkpoint A lists all rule IDs | Gate 1 boundary | 2 min |

**Total detection cost: ~25 minutes** (distributed across experiment, not a single block).

### 5.2 Silent Failure Patterns

These are failure modes where an agent APPEARS to have processed a section but actually didn't:

**Pattern 1: Performative Acknowledgment**
- Agent lists rule IDs without reading the rules
- Detection: Spot check. "What does rule C3 require?" If answer is wrong, acknowledgment was performative.
- Frequency: ~20% estimated (based on self-check accuracy data from ceiling experiment)

**Pattern 2: Template Fill Without Comprehension**
- Agent fills template with plausible but incorrect numbers
- Detection: Cross-reference template values against programmatic gate results. If Checkpoint B says "content-to-void 65:35" but SC-03 measures 40:60, the template was filled performatively.
- Frequency: ~10% estimated

**Pattern 3: Section Scanning Without Absorption**
- Agent reads section but retains only the first and last items (primacy + recency effects)
- Detection: The middle rules (positions 3-8 in a 10-rule section) are the most vulnerable. The spot check protocol specifically targets mid-section rules.
- Frequency: ~30% estimated for mid-section rules

**Pattern 4: Checkpoint Message Copy-Paste**
- Agent copies checkpoint format from prompt and fills in generic responses
- Detection: Checkpoint messages must contain SPECIFIC NUMBERS derived from the actual build. Generic text ("everything looks good") fails the communication gate.
- Frequency: ~40% if not gated; ~5% if communication gate requires specific fields with numbers.

### 5.3 Cascade Failure Detection

If one section's invocation fails, which downstream sections are at risk?

```
Layer 1 (Conviction) NOT READ
  -> Metaphor agent produces generic metaphor (no philosophical grounding)
  -> Builder receives generic mechanism plan (no load-bearing structure)
  -> Output feels "assembled" not "designed"
  DETECTION: Metaphor derivation has zero conviction quotes

Layer 2A (Spatial) NOT READ
  -> Builder doesn't track container width or void budgets
  -> 70-80% whitespace void (ceiling experiment repeat)
  -> PA-05 drops to 1.5/4
  DETECTION: Checkpoint A missing S1-S5 IDs; SC-01 through SC-07 FAIL

Layer 3B (Communication) NOT READ
  -> Zero inter-agent messages
  -> Builder isolation
  -> Missing footer, unresolved spatial concerns
  DETECTION: Communication log is empty at Gate 1 boundary -> PAUSE BUILD

Build Plan (Planner output) NOT READ BY BUILDER
  -> Builder improvises mechanism deployment
  -> No spatial budget respected
  -> Mechanism dumping without compositional intent
  DETECTION: Builder's mechanism deployment doesn't match plan's mechanism table
```

---

## 6. PHASED REVEAL PROTOCOL

### 6.1 Rationale

Giving the builder ALL rules at once invites scanning. The attention model shows that agents process rules following a power law: deep engagement with a few items, superficial scanning of most. Phased reveal FORCES sequential engagement by delivering rules in batches, with confirmation required between batches.

### 6.2 Three-Batch Delivery for Builder

**Batch 1: SPATIAL + SOUL (lines 1-13, ~10 attention units)**
Delivered at build start. Builder confirms receipt by listing rule IDs in Checkpoint A.

Why first: These are the highest-priority rules (identity + spatial = the two historical failure modes). Primacy effect ensures deep processing.

**Batch 2: MECHANISM TABLE + COMPOSITIONAL (lines 14-42, ~15 attention units)**
Delivered AFTER Checkpoint A is confirmed. Builder receives the build plan's mechanism table and compositional rules.

Why second: Mechanisms are the builder's PRIMARY TASK. Compositional rules shape HOW mechanisms are deployed. These rules need processing AFTER spatial/soul anchors are locked.

**Batch 3: SELF-CHECK + METAPHOR SUMMARY (lines 43-72, ~12 attention units)**
Delivered AFTER the main build is complete (builder reports "build done, running self-check"). Self-check runs on completed work with fresh attention allocation.

Why last: Self-check is a VERIFICATION task, not a CREATION task. It needs to run after the build, when the builder shifts from creative mode to verification mode. The metaphor summary refreshes the "why" before the builder writes the final file.

### 6.3 Implementation

**In a single-prompt architecture** (all rules delivered at once), phased reveal is achieved through STRUCTURAL FORMATTING:

```
=== PHASE 1: READ AND ACKNOWLEDGE (before building) ===
[Spatial + Soul rules]
>>> STOP. Send Checkpoint A with rule acknowledgment before continuing. <<<

=== PHASE 2: BUILD (after Checkpoint A confirmed) ===
[Mechanism table + Compositional rules]
>>> BUILD the page. When build is complete, continue to Phase 3. <<<

=== PHASE 3: VERIFY (after build complete, before file write) ===
[Self-check + Metaphor summary]
>>> Run self-check. Send Checkpoint B. Then write file. <<<
```

The `>>> STOP <<<` markers create NATURAL BREAKING POINTS. The agent processes Phase 1, sends Checkpoint A (which requires completing the response template), then reads Phase 2. This is cheaper than true multi-prompt delivery but achieves ~70% of the anti-skimming benefit.

**In a multi-prompt architecture** (team-lead sends batches via SendMessage), each batch is a separate message with explicit confirmation:

```
Team-lead -> Builder: "Here are your spatial and soul rules. Reply with Checkpoint A."
Builder -> Team-lead: [Checkpoint A with rule acknowledgment]
Team-lead -> Builder: "Acknowledged. Here is your mechanism table and compositional rules. Begin building."
[Builder builds]
Builder -> Team-lead: "Build complete."
Team-lead -> Builder: "Here is your self-check list and metaphor summary. Run self-check and send Checkpoint B."
Builder -> Team-lead: [Checkpoint B with self-check results]
```

Multi-prompt delivery achieves ~95% anti-skimming but costs ~6 additional attention units (3 message round-trips x 2 units each).

### 6.4 Phased Reveal for Other Agents

**Planner:** Receives metaphor derivation (Batch 1) -> confirms understanding -> receives mechanism catalog + compositional rules (Batch 2) -> produces build plan (Batch 3 is the plan itself).

**Auditors:** Receive screenshots (Batch 1) -> receive PA questions (Batch 2) -> produce findings (no Batch 3 -- auditors are single-pass).

**Team-lead:** Receives full prompt at once (no phasing needed -- team-lead's job IS to process the full prompt). But gate evaluation is naturally phased by the pipeline structure.

---

## 7. SPECIFIC PROMPT FORMATTING

### 7.1 Line-Level Formatting Rules

Every line in the enriched prompt MUST follow these formatting rules to maximize invocation probability:

**Rule F1: Every rule has an ID.**
```
BAD:  Container width must be 940-960px.
GOOD: [S1] Container: max-width: 960px; margin: 0 auto;
```
The ID makes the rule REFERABLE. The builder can say "S1: PASS" in the self-check. Without the ID, the rule is an anonymous sentence in a paragraph.

**Rule F2: Every section has a reader annotation.**
```
BAD:  ## Spatial Rules
GOOD: ## Spatial Rules [BUILDER: lines 1-5 of your prompt] [GATE: SC-01 through SC-07]
```
The annotation tells the reader WHO this section is for and HOW it will be verified. If a section has no reader annotation, it has no owner, and ownership = invocation.

**Rule F3: Every section ends with an ACTION DIRECTIVE.**
```
BAD:  [rules end, next section begins]
GOOD: >>> ACTION: List all rule IDs from this section in Checkpoint A. <<<
```
The action directive is the invocation trigger. Without it, the reader may absorb the rules passively. With it, the reader knows they must DO something.

**Rule F4: Binary rules use FORMULA notation, not prose.**
```
BAD:  The characters per line should be between 45 and 80.
GOOD: [S6] CPL: (content-width-px) / (font-size-px) / 0.6 = 45-80
```
Formula notation is cheaper to process (~0.75 attention units) than prose (~2 units). It is also unambiguous -- there is exactly one way to compute CPL from the formula.

**Rule F5: No orphan lines.**
Every line belongs to a rule (has an ID) or to an action directive (has `>>>` markers) or to a section header (has `##`). Lines that are none of these are DEAD BY DEFINITION -- they have no owner, no verification, no invocation trigger. Remove them.

**Rule F6: Conviction lines are QUOTED, not stated.**
```
BAD:  The difference between Flagship and Ceiling is restraint.
GOOD: > "The difference between Flagship and Ceiling is not complexity. It is restraint."
```
Quoted lines signal "this is a mindset to absorb, not a rule to follow." They are processed differently by the agent -- as framing context rather than execution instructions. This is intentional: conviction lines should shape behavior without consuming rule-processing attention.

### 7.2 Section Order Optimization

The prompt sections should be ordered by INVOCATION PRIORITY, not by logical grouping:

```
OPTIMAL ORDER (for builder prompt):

1. SPATIAL ANCHORS (S1-S5)          -- Highest priority, worst historical failure
2. SOUL CHECKS (U1-U8)             -- Second priority, highest historical compliance
3. COMMUNICATION OBLIGATIONS        -- Third, prevents isolation failure
4. >>> CHECKPOINT A STOP <<<        -- Phased reveal break
5. MECHANISM TABLE                  -- Builder's primary task
6. COMPOSITIONAL RULES (C1-C6)     -- Shapes mechanism deployment
7. TOKEN + MEASUREMENT              -- Quantitative checks
8. >>> BUILD NOW <<<                -- Action directive
9. SELF-CHECK LIST                  -- Post-build verification
10. METAPHOR SUMMARY               -- Final "why" refresh
11. >>> CHECKPOINT B STOP <<<       -- Final confirmation
```

This order exploits the primacy effect (spatial anchors get deepest processing) and the recency effect (metaphor summary refreshes purpose before file write). The middle section (mechanism table + compositional rules) is the builder's primary task and gets WORK attention rather than RULE attention.

### 7.3 Dead Line Indicators

A line is DEAD if it matches ANY of these patterns:

| Pattern | Example | Fix |
|---------|---------|-----|
| No rule ID | "Container width matters." | Add ID: "[S1] Container: 960px" |
| No owner annotation | A paragraph between sections | Add `[BUILDER]` or `[PLANNER]` tag |
| No action consequence | "Consider spatial proportion." | Convert to gate or delete |
| Restates another line | "Remember: container is 960px" (already in S1) | Delete (deduplication) |
| Uses "should" without threshold | "Transitions should feel varied." | Convert: "[C3] 3+ transition types" |
| Explanation of rationale | "This matters because the ceiling experiment..." | Move to reference doc or delete |
| Addresses wrong reader | PA criteria in builder's prompt | Move to auditor's prompt |
| Aspirational without measurement | "Aim for beauty." | Move to conviction layer or delete |

**The dead line test:** For each line, ask:
1. Does it have an ID? (If not: dead or conviction)
2. Does it have an owner? (If not: dead)
3. Does it trigger an action? (If not: dead or reference)
4. Can we detect if it was skipped? (If not: dead)

If a line fails all 4 questions, it is dead. Remove it.

### 7.4 Line Budget

Based on the attention model (~100 units budget, ~37 units demand target, ~63 surplus):

| Prompt | Max Lines | Max Rules | Max Attention |
|--------|-----------|-----------|---------------|
| Builder (Pass 1) | 75 | 30 binary | 37 units |
| Builder (Pass 2) | 60 | 20 binary | 30 units |
| Builder (Pass 3) | 50 | 15 binary | 25 units |
| Planner | 100 | 25 binary + 10 judgment | 55 units |
| Auditor (each) | Unlimited | Unlimited (observation, not creation) | N/A |
| Team-lead | 200 | N/A (coordination, not creation) | 38.5 units on enforcement |

**Every line beyond the max is a candidate dead line.** The attention model provides the mathematical ceiling: exceeding the line budget means exceeding the attention budget, which means shedding emergent properties.

---

## 8. SUMMARY: THE INVOCATION GUARANTEE SYSTEM

### 8.1 The Five Layers of Guarantee

```
Layer 1: OWNERSHIP          Every line has a named reader (WHO)
Layer 2: TIMING             Every section has a read phase (WHEN)
Layer 3: ACTION             Every section triggers a verifiable action (WHAT)
Layer 4: EVIDENCE           Every action produces an artifact (PROOF)
Layer 5: DETECTION          Every skipped section causes a detectable downstream failure (ALARM)
```

### 8.2 The Invocation Equation

```
Invocation Probability = f(Ownership × Timing × Action × Evidence × Detection)

If ANY factor is zero, invocation probability collapses:
- No owner -> nobody reads it -> dead line
- No timing -> maybe someone reads it eventually -> attention-starved line
- No action -> read but not processed -> scanned line
- No evidence -> processed but unverifiable -> trust line (unreliable)
- No detection -> skipped without consequence -> optional line (will be skipped)
```

### 8.3 Minimum Viable Invocation System

If the full system (checksums + templates + logs + spot checks + phased reveal) is too heavyweight, the MINIMUM VIABLE subset is:

1. **Rule IDs on every rule** (cost: 0, benefit: referability)
2. **Checkpoint A with rule acknowledgment** (cost: 1 attention unit, benefit: proof of read)
3. **Checkpoint B with self-check table** (cost: 3.5 attention units, benefit: proof of process)
4. **Gate execution log with entry count >= 22** (cost: 44 min team-lead time, benefit: proof of enforcement)
5. **"NO FINDING for PA-XX" requirement for auditors** (cost: 0, benefit: prevents silent skipping)

These 5 elements provide ~80% of the invocation guarantee at ~20% of the overhead.

### 8.4 The Zero Dead Lines Guarantee

A prompt has ZERO DEAD LINES when:
- Every line has a rule ID or is a section header or action directive
- Every rule ID appears in at least one agent's acknowledgment list
- Every rule ID appears in at least one gate check or self-check
- Every section has a checksum phrase that appears in the reading agent's output
- No line matches any dead line indicator pattern (Section 7.3)

**This is verifiable.** A post-assembly audit can check all 5 conditions in ~30 minutes. If any condition fails, the line is dead and must be either given an owner/action/gate or removed.

---

**END INVOCATION GUARANTEE AUDIT**
**Lines:** ~570
**Core model:** Invocation = Ownership x Timing x Action x Evidence x Detection; if any factor is zero, the line is dead
**Key mechanism:** Rule IDs + mandatory acknowledgment + response templates + gate verification + checksum phrases
**Minimum viable system:** 5 elements providing ~80% guarantee at ~20% overhead
**Dead line test:** Does it have an ID? An owner? An action? A detection method? If not, remove it.
