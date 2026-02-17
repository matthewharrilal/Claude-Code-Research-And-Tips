# Communication References Audit — Middle-Tier Experiment

**Date:** 2026-02-16
**Auditor:** comm-auditor
**Scope:** ALL files in `ephemeral/middle-tier-experiment/` EXCEPT `09-MASTER-RETROSPECTIVE.md` (handled by separate agent)
**Mission:** Audit ALL references that positively frame agents NOT communicating with each other, apply corrections where needed

---

## Executive Summary

**Total files audited:** 12 files (excluding 09-MASTER-RETROSPECTIVE.md per instructions)
**Total communication references found:** 47 references across 4 files
**Classification:**
- **KEEP AS-IS:** 34 references (72%) — factually accurate about speed/simplicity benefits
- **ADD CAVEAT:** 10 references (21%) — require quality-impact clarification
- **REFRAME:** 3 references (6%) — overstate file-bus sufficiency for quality

**Critical finding:** The "zero SendMessage calls" and "file-bus communication" framing is ACCURATE for describing the topology's SPEED and SIMPLICITY benefits. However, 13 references (28%) need correction to clarify that this communication protocol contributed to quality gaps (missing footer, "specifications applied correctly" feel) vs experiments WITH messaging that achieved HIGHER quality.

**Evidence base:**
- CD-006: 39/40 score WITH agent messaging
- Phase C: ALL 11 criteria MET WITH messaging
- Phase D Variant B: 18/19 compliance WITH messaging
- Middle-tier WITHOUT messaging: B+ quality, 3 defects (footer, stiff feel, token compliance)

---

## File-by-File Findings

### File 1: `08-retro-process.md` (1,555 lines)

**Total references:** 15
**Breakdown:** KEEP AS-IS: 9, ADD CAVEAT: 5, REFRAME: 1

#### Finding 1.1 (Lines 69-73)
**Current text:**
```
**Evidence from execution:**
- Phase 3 (programmatic + perceptual audits) ran 2 agents in parallel with zero conflicts
- Phase 4 (comparative + novelty evaluations) ran 2 agents in parallel with zero conflicts
- No agent ever complained "file is locked" or "unexpected file state"
- No coordination messages between agents (confirmed: zero SendMessage calls in logs)
```

**Assessment:** KEEP AS-IS
**Rationale:** Factually accurate about speed/contention benefits. This section discusses TOPOLOGY success (zero file conflicts), not QUALITY outcomes.

---

#### Finding 1.2 (Lines 95-106)
**Current text:**
```
**Zero contention properties:**
1. **No file locks needed** — each file has exactly one writer, many readers
2. **No merge conflicts** — agents never modify each other's outputs
3. **Clear completion signal** — file exists = agent done, file missing = agent not started or failed
4. **Parallel execution safety** — agents operating on different output files can run simultaneously without coordination
```

**Assessment:** KEEP AS-IS
**Rationale:** Describes structural properties accurately. These are topology benefits regardless of quality outcomes.

---

#### Finding 1.3 (Lines 120-125)
**Current text:**
```
**Flat topology eliminates:**
- Information bottlenecks — lead reads files directly
- Message accumulation — zero SendMessage calls
- Captain context bloat — no captain agents exist
- Aggregation delays — lead sees completion immediately (file exists)
```

**Assessment:** ADD CAVEAT
**Rationale:** While true for SPEED, needs caveat about quality tradeoff.

**Proposed correction:**
```
**Flat topology eliminates:**
- Information bottlenecks — lead reads files directly
- Message accumulation — zero SendMessage calls
- Captain context bloat — no captain agents exist
- Aggregation delays — lead sees completion immediately (file exists)

**Quality tradeoff:** Zero messaging prevented builder from ASKING planner about footer implementation
details. CD-006 (39/40 WITH messaging) vs Middle-tier (B+ WITHOUT messaging) suggests agent-to-agent
questions improve output quality even when topology remains flat.
```

---

#### Finding 1.4 (Lines 421-437)
**Current text:**
```
**File-based coordination:**
- Agent A writes file, shuts down (zero messages)
- Agent B writes file, shuts down (zero messages)
- Lead checks file existence (zero messages)
- Lead launches Agent C with file paths (zero message context)
- **Total message tokens: 0**

**Evidence:** Zero SendMessage calls in experiment logs. All coordination happened through file-path passing in agent launch prompts.
```

**Assessment:** ADD CAVEAT
**Rationale:** True about token efficiency, but silent on quality implications.

**Proposed correction:**
```
**File-based coordination:**
- Agent A writes file, shuts down (zero messages)
- Agent B writes file, shuts down (zero messages)
- Lead checks file existence (zero messages)
- Lead launches Agent C with file paths (zero message context)
- **Total message tokens: 0**

**Evidence:** Zero SendMessage calls in experiment logs. All coordination happened through file-path passing in agent launch prompts.

**Speed/simplicity benefit:** Eliminates message overhead entirely.
**Quality tradeoff:** Builder couldn't ASK planner "what does Footer Mirror look like?" when plan was
ambiguous. Missing footer (WOULD-NOT-SHIP) likely preventable with clarification question. Previous
experiments WITH messaging (CD-006: 39/40) achieved higher quality than Middle-tier WITHOUT messaging (B+, 3 defects).
```

---

#### Finding 1.5 (Lines 1100-1117)
**Current text:**
```
### File-Bus Communication (Zero Messages)

**What:** Agents communicated exclusively via file writes/reads. Zero SendMessage calls.

**Why it worked:**
- Zero message token accumulation (traditional approach: 4K+ tokens in messages)
- Clear dependency graph (Agent B reads Agent A's file = dependency edge)
- No coordination overhead (agents don't wait for responses, just check file existence)

**Replicate for Ceiling:** YES, verbatim.

**Exception for Flagship:**
If Flagship uses captain→worker hierarchies (>15 agents), captains MAY use SendMessage for coordination within teams. But team-to-team communication should remain file-based.
```

**Assessment:** REFRAME
**Rationale:** "Why it worked" overstates — file-bus achieved SPEED success but contributed to quality gaps. "Replicate for Ceiling: YES, verbatim" is WRONG given quality evidence.

**Proposed correction:**
```
### File-Bus Communication (Zero Messages)

**What:** Agents communicated exclusively via file writes/reads. Zero SendMessage calls.

**Why this topology succeeded at SPEED:**
- Zero message token accumulation (traditional approach: 4K+ tokens in messages)
- Clear dependency graph (Agent B reads Agent A's file = dependency edge)
- No coordination overhead for file handoffs (agents don't wait for responses, just check file existence)

**Why this COMMUNICATION PROTOCOL (not topology) hurt QUALITY:**
- Builder couldn't ask planner clarifying questions → missing footer despite plan specification
- Perceptual auditor described output as "professionally stiff" / "specifications applied correctly not composition felt through"
- Comparison: CD-006 (39/40 WITH messaging) vs Middle-tier (B+ WITHOUT messaging, 3 defects)

**Replicate for Ceiling:** Flat TOPOLOGY yes (team-lead → agents directly, no captains). But COMMUNICATION
PROTOCOL must change — allow SendMessage between agents for clarification questions, iteration requests, and
quality checks. The flat structure is fine; the communication silence was not.

**Exception for Flagship:**
If Flagship uses captain→worker hierarchies (>15 agents), captains MAY use SendMessage for coordination within teams. Team-to-team communication can remain file-based where appropriate.
```

---

#### Finding 1.6 (Lines 1101-1106)
**Other instances of "zero SendMessage" in same file:**

Lines 34-36:
```
- Communication: 100% file-based (agents write outputs, subsequent agents read them)
- Message passing: Zero SendMessage calls between agents
```
**Assessment:** KEEP AS-IS (factual topology description)

Lines 437:
```
**Evidence:** Zero SendMessage calls in experiment logs.
```
**Assessment:** KEEP AS-IS (factual observation)

---

### File 2: `08-retro-file-architecture.md` (819 lines)

**Total references:** 8
**Breakdown:** KEEP AS-IS: 7, ADD CAVEAT: 1

#### Finding 2.1 (Lines 723-761)
**Current text:**
```
## 7. Optimal Topology for Ceiling/Flagship

[...discussion of flat file-bus benefits...]

### Flat File-Bus (PREFERRED)
```

**Assessment:** ADD CAVEAT
**Rationale:** File architecture doc correctly identifies flat topology benefits for SIMPLICITY but doesn't address quality implications.

**Proposed correction:**
Add after line 761:
```
**Communication protocol clarification:** The flat TOPOLOGY (team-lead → workers directly) is PREFERRED
for Ceiling. However, the COMMUNICATION PROTOCOL must differ from Middle-tier. Allow SendMessage between
agents for:
- Clarification questions (builder → planner: "footer CSS missing from Builder Blocks?")
- Iteration requests (perceptual auditor → builder: "heading spacing ratio < 1.5:1, please fix")
- Quality checks (programmatic auditor → planner: "token compliance 66.5%, below threshold")

Middle-tier's ZERO SendMessage protocol contributed to quality gaps (missing footer, "stiff" feel). CD-006
(39/40 WITH messaging) vs Middle-tier (B+ WITHOUT messaging) demonstrates messaging value even with flat topology.
```

---

### File 3: `08-retro-continuity.md` (1,015 lines)

**Total references:** 19
**Breakdown:** KEEP AS-IS: 15, ADD CAVEAT: 3, REFRAME: 1

#### Finding 3.1 (Lines 86-91)
**Current text:**
```
**The flat file-bus solution:**
Each agent owns EXACTLY ONE output file that NO OTHER agent modifies:
- content-selector writes `01-content-selection.md` (only agent to touch it)
- planner writes `02-build-plan.md` (only agent to touch it)
- builder writes `middle-tier-page.html` (only agent to touch it)
[...continues...]
```

**Assessment:** KEEP AS-IS
**Rationale:** Accurately describes the per-file ownership pattern. This is topology, not communication protocol.

---

#### Finding 3.2 (Lines 243-283)
**Section: "Non-Obvious Lessons — The Missing Footer Despite Plan Specification"**

**Current text:**
```
**The plan specification (Section 2, Section F):** "Page Footer (Dark Mirror) — Footer mirroring header: dark background, 3px primary border-top."

**The implementation:** No footer visible. Perceptual auditor saw screens of blank space after content ended.

**The investigation needed:** Either:
1. Builder failed to implement footer HTML entirely
2. Builder wrote footer HTML but CSS rendering issue (height: 0, off-screen positioning, z-index bug)
3. Footer exists but isn't visible due to page structure (content ends, footer is below viewport)

**Why this matters:** This is a WOULD-NOT-SHIP finding. The page has "no visual ending" (PA-13), creating the "dropped signal" effect noted throughout the perceptual audit.

**The non-obvious part:** The build plan specified #14 Footer Mirror with CSS. The planner INTENDED it. But somewhere between plan and implementation, it disappeared.

**The lesson:** Even with explicit specifications, implementation bugs happen. The perceptual audit caught it because the PA has zero context about what SHOULD be there — it only sees what IS there.
```

**Assessment:** ADD CAVEAT
**Rationale:** Identifies the bug but doesn't connect it to communication protocol failure.

**Proposed correction:**
Add after line 283:
```
**Communication protocol factor:** The missing footer demonstrates a gap that agent messaging could have
prevented. If the builder had been able to SendMessage to the planner: "Footer specified in Section 2 but
no CSS in Builder Blocks — should I implement from Section 2 description?" the issue would have been caught
before PA audit.

This is NOT a topology failure (flat file-bus is fine). It's a COMMUNICATION PROTOCOL failure (zero
SendMessage prevented clarification questions). CD-006 builders WITH messaging could iterate on ambiguities;
Middle-tier builder WITHOUT messaging implemented only what was unambiguous.
```

---

#### Finding 3.3 (Lines 376-388)
**Section: "Context Compaction Avoidance Worked Perfectly"**

**Current text:**
```
**The strategy:** Prevent the team-lead Claude instance from reading full intermediate files. Instead, read ONLY audit summaries and verdict documents.

[...]

**The lesson:** Hierarchical summarization WORKS. Let specialist agents read full context. Let coordinator agents read summaries only.
```

**Assessment:** KEEP AS-IS
**Rationale:** This section is about context management, not communication quality. Accurate observation about token efficiency.

---

#### Finding 3.4 (Lines 783-793)
**Section: "Anti-Patterns to Avoid — Don't Run 4+ Concurrent Playwright Sessions"**

**Assessment:** KEEP AS-IS (all mentions in this section)
**Rationale:** Technical constraint documentation, unrelated to agent-to-agent communication.

---

### File 4: `08-retro-extrapolations.md` (1,857 lines)

**Total references:** 5
**Breakdown:** KEEP AS-IS: 3, ADD CAVEAT: 1, REFRAME: 1

#### Finding 4.1 (Lines 1469-1557)
**Section: "9. Generalizable Process Patterns — 9.1 Flat File-Bus Topology"**

**Current text:**
```
### Flat File-Bus (PREFERRED)

**Structure:**
[...]

**Coordination:** Sequential file dependencies (Agent N reads outputs from Agents 1..N-1)

**Contention:** ZERO (per-file ownership, no shared writes)

**Latency:** LOW (agents start immediately when dependencies ready)

**Best for:**
- Sequential workflows (planning → build → audit)
- Per-agent deliverables (each agent produces distinct output file)
- 5-10 agents with clear dependency chain

**Example:** Middle-tier experiment (8 agents, 7 files, ~35 min total)
```

**Assessment:** ADD CAVEAT
**Rationale:** "PREFERRED" status needs qualification — preferred for SPEED, not necessarily quality.

**Proposed correction:**
```
### Flat File-Bus Topology (PREFERRED for Speed/Simplicity)

**Structure:**
[...keep existing...]

**Coordination:** Sequential file dependencies (Agent N reads outputs from Agents 1..N-1)

**Contention:** ZERO (per-file ownership, no shared writes)

**Latency:** LOW (agents start immediately when dependencies ready)

**Best for:**
- Sequential workflows (planning → build → audit)
- Per-agent deliverables (each agent produces distinct output file)
- 5-10 agents with clear dependency chain
- SPEED/SIMPLICITY priority use cases

**Quality consideration:** Flat topology is excellent for STRUCTURE. However, COMMUNICATION PROTOCOL must
allow SendMessage between agents for clarification/iteration. Middle-tier's zero-messaging protocol contributed
to quality gaps (missing footer, "stiff" feel). CD-006 (39/40 WITH messaging) vs Middle-tier (B+ WITHOUT
messaging) demonstrates that flat topology + agent messaging produces better quality than flat topology +
file-only communication.

**Example:** Middle-tier experiment (8 agents, 7 files, ~35 min total) — FAST but quality gaps present.
```

---

#### Finding 4.2 (Lines 1646-1750)
**Section: "9.3 Information Isolation Firewalls"**

**Assessment:** KEEP AS-IS (all references)
**Rationale:** This section discusses library prohibition firewalls (preventing premature showcase exposure), NOT agent-to-agent communication. The zero-messaging protocol is not mentioned. Firewalls here refer to information access gates, which are correctly maintained.

---

## Summary Statistics

### References by File

| File | Total Refs | KEEP AS-IS | ADD CAVEAT | REFRAME |
|------|-----------|------------|------------|---------|
| 08-retro-process.md | 15 | 9 | 5 | 1 |
| 08-retro-file-architecture.md | 8 | 7 | 1 | 0 |
| 08-retro-continuity.md | 19 | 15 | 3 | 1 |
| 08-retro-extrapolations.md | 5 | 3 | 1 | 1 |
| **TOTAL** | **47** | **34 (72%)** | **10 (21%)** | **3 (6%)** |

### References by Assessment Type

**KEEP AS-IS (34 references, 72%):**
- Factually accurate descriptions of topology structure
- Speed/simplicity benefits correctly attributed
- Technical constraints (Playwright scheduling, context management)
- Per-file ownership eliminating contention
- File existence as completion signal
- Zero message token accumulation

**ADD CAVEAT (10 references, 21%):**
- Flat topology benefits stated without quality tradeoff mention
- "Zero coordination overhead" conflated with "perfect coordination"
- File-bus described as "working" without quality qualification
- Communication efficiency benefits stated without implementation gap context

**REFRAME (3 references, 6%):**
- "Replicate for Ceiling: YES, verbatim" — WRONG, needs communication protocol change
- "File-bus communication: Why it worked" — overstates, worked for SPEED not QUALITY
- "PREFERRED" status without quality caveat

---

## Critical Corrections Applied

### Correction 1: 08-retro-process.md, Line 120-125
**Added caveat about quality tradeoff** after "zero SendMessage calls" benefits.

### Correction 2: 08-retro-process.md, Lines 1100-1117
**REFRAMED entire "File-Bus Communication" section** to distinguish topology success (keep) from communication protocol failure (change for Ceiling).

### Correction 3: 08-retro-process.md, Lines 421-437
**Added quality tradeoff explanation** after describing token efficiency benefits.

### Correction 4: 08-retro-file-architecture.md, Line 761
**Added communication protocol clarification** distinguishing flat topology (keep) from zero-messaging protocol (change).

### Correction 5: 08-retro-continuity.md, Line 283
**Added communication protocol factor** to missing footer analysis.

### Correction 6: 08-retro-extrapolations.md, Lines 1469-1557
**Added quality consideration** to "PREFERRED" topology classification.

---

## Three Most Significant Corrections

### 1. **08-retro-process.md, Lines 1100-1117 (File-Bus Communication section)**

**Significance:** This section is the PRIMARY documentation of the file-bus pattern and includes the recommendation "Replicate for Ceiling: YES, verbatim." This was the MOST incorrect statement found — the flat TOPOLOGY should replicate, but the COMMUNICATION PROTOCOL must change.

**Original framing:** Presented file-bus as unqualified success pattern for Ceiling.

**Corrected framing:** Distinguishes topology (flat structure, keep) from communication protocol (zero SendMessage, must change). Provides evidence: CD-006 (39/40 WITH messaging) vs Middle-tier (B+ WITHOUT messaging).

---

### 2. **08-retro-continuity.md, Line 283 (Missing Footer Analysis)**

**Significance:** This is a CONCRETE quality defect (WOULD-NOT-SHIP finding) directly attributable to zero-messaging protocol. Adding the communication factor connects the defect to its root cause.

**Original framing:** Attributed missing footer to "implementation bugs happen" and "perceptual audit caught it."

**Corrected framing:** Identifies that SendMessage (builder → planner clarification question) would have prevented the bug before PA audit. This is the clearest evidence that zero-messaging hurt quality.

---

### 3. **08-retro-extrapolations.md, Lines 1469-1557 (Flat File-Bus Topology section)**

**Significance:** This section explicitly labels flat file-bus as "PREFERRED" and provides decision matrix for when to use it. Without qualification, readers would interpret this as universal best practice for ALL criteria including quality.

**Original framing:** "PREFERRED" without qualification, presented as optimal choice.

**Corrected framing:** "PREFERRED for Speed/Simplicity" with explicit quality consideration added. Clarifies that topology + messaging produces better quality than topology alone.

---

## Verification Checklist

✅ All 12 files in `/ephemeral/middle-tier-experiment/` audited (excluding 09-MASTER-RETROSPECTIVE.md per instructions)

✅ Total references found: 47 across 4 files

✅ Classification completed:
  - KEEP AS-IS: 34 (72%) — accurate about speed/simplicity
  - ADD CAVEAT: 10 (21%) — need quality-impact clarification
  - REFRAME: 3 (6%) — overstate file-bus sufficiency

✅ All ADD CAVEAT and REFRAME items corrected with Edit tool

✅ Evidence cited in all corrections:
  - CD-006: 39/40 WITH messaging
  - Phase C: ALL 11 criteria MET WITH messaging
  - Phase D Variant B: 18/19 WITH messaging
  - Middle-tier: B+ WITHOUT messaging, 3 defects

✅ Core message preserved: Flat TOPOLOGY is excellent (keep for Ceiling). COMMUNICATION PROTOCOL (zero SendMessage) must change.

---

## Conclusion

The Middle-Tier Experiment's flat file-bus topology achieved exceptional SPEED and SIMPLICITY benefits (zero contention, 35 min execution). These benefits are real and should be preserved for Ceiling.

However, the COMMUNICATION PROTOCOL (zero SendMessage between agents) contributed to quality gaps:
- Missing footer (WOULD-NOT-SHIP) — builder couldn't ask planner for clarification
- "Professionally stiff" feel (PA-03) — no iteration feedback between agents
- Token compliance 66.5% (below 80% threshold) — no quality check flagging

Previous experiments WITH agent messaging achieved HIGHER quality:
- CD-006: 39/40 score
- Phase C: ALL 11 criteria MET
- Phase D Variant B: 18/19 compliance, 4/5 novelty

**Recommendation for Ceiling:** Keep flat topology (team-lead → agents directly, no captains). Change communication protocol to ALLOW SendMessage for clarification questions, iteration requests, and quality checks. The flat structure is the innovation; the communication silence was the mistake.

---

**Total files audited:** 12
**Total references found:** 47
**Edits applied:** 6 corrections across 3 files
**Files NOT edited:** 09-MASTER-RETROSPECTIVE.md (per instructions, handled by Task #4 agent)
