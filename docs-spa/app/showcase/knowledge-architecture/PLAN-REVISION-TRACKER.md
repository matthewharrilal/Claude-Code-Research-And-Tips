# OD EXECUTION PLAN — COMPREHENSIVE REVISION TRACKER
## Cross-Referencing: OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md (ARCH) + OD-EXECUTION-PROTOCOL.md (PROTO)

**Purpose:** Line-by-line cross-reference of the Claude-generated plan against both source files, generating specific, actionable revisions. This file is incremental — revisions are added in batches. Each batch is self-contained so work can resume after context compaction.

**Source Files:**
- `ARCH` = `docs-spa/app/showcase/knowledge-architecture/OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md`
- `PROTO` = `docs-spa/app/showcase/knowledge-architecture/OD-EXECUTION-PROTOCOL.md`

**Current Status:** ALL BATCHES COMPLETE — 56 revisions total (1.1-1.10 + 2.1-2.10 + 3.1-3.15 + 4.1-4.15 + 5.1-5.6) — 100% COVERAGE

---

## BATCH 1: FOUNDATIONAL ARCHITECTURE MISMATCHES (Agent Count, Roles, Paradigm)

### REVISION 1.1 — WRONG AGENT COUNT: Plan says 5 agents, ARCH says 3 teammates + 3 subagent protocols + 3 embedded functions

**Plan Section:** Section 1 "Team Architecture — 5 Agents Mapped to Protocol"
**Source:** ARCH lines 1-36 (banner), lines 456-520 (Section 2.1)

**What the plan says:**
The plan maps 7 conceptual agents to 5 practical agents: Lead, Reader, Builder, Auditor, Researcher. It frames this as a consolidation from 7→5.

**What ARCH actually says (lines 28-34):**
> "WHY THREE, NOT SEVEN:
> Agent Teams are heavyweight — each teammate is a full Claude instance with its own context window, token budget, and async lifecycle.
> Roles that read files and return data → subagents (one call, one return).
> Roles that write a single file → tool calls, not agents.
> Roles that do sustained creative work or multi-file updates → teammates."

The ARCH specifies exactly **3 teammates**: Lead, Builder, Weaver. NOT 5 agents. The plan has 5 agents which is WRONG.

**Specific Revision:**
Replace the entire 5-agent table with the ARCH's 3-tier model:
- **3 TEAMMATES:** Lead (main instance), Builder (general-purpose), Weaver (general-purpose)
- **3 SUBAGENT PROTOCOLS:** Traverser (Task tool, read-only), Research (Task tool, deployed BY Builder), Auditor (Task tool, fresh context each time)
- **3 EMBEDDED FUNCTIONS:** Guardian (checklist in Lead), Checkpoint Manager (file writes by Lead), Execution Journal (file writes by all agents)

Reference: ARCH Section 2.1 lines 460-520, especially the role mapping table at lines 468-520.

---

### REVISION 1.2 — MISSING AGENT: "Reader" doesn't exist. It should be "Traverser Subagent"

**Plan Section:** Section 1 table, row A2 — "reader" with subagent_type: Explore, PERSISTENT lifecycle
**Source:** ARCH Section 2.6 (lines 1392-1507)

**What the plan says:**
A2 is a "reader" agent of type Explore, with PERSISTENT lifecycle, covering "Context Guardian + Traverser."

**What ARCH actually says (lines 1392-1412):**
> "This is the most critical PROTOCOL in the architecture. It was an agent in v3.0. In v4.0, it is a subagent — because traversal is a one-shot read-only operation. The Lead deploys it, it reads files absorptively, it returns structured accumulated identity, it's done. No iteration. No file editing. No sustained work."
> "A fresh subagent reads the current web with fresh eyes. That's exactly right."

The Traverser is NOT a persistent teammate. It is an EPHEMERAL subagent deployed via the Task tool each time. Each deployment is stateless by design. The "Reader" agent in the plan conflates two things:
1. **Traverser subagent** — absorptive reading, one-shot, returns accumulated identity
2. **Guardian validation** — embedded IN the Lead as a 4-check enforcement loop (ARCH Section 2.8, lines 1758-1968)

**Specific Revision:**
- DELETE the "Reader" (A2) agent row entirely
- ADD a "Traverser Subagent Protocol" section explaining: Lead deploys it via Task tool, it reads absorptively per the 6-step Absorption Protocol (ARCH lines 1414-1507), returns ACCUMULATED IDENTITY, and is done
- MOVE Guardian validation into the Lead's responsibilities as an embedded checklist (ARCH Section 2.8, lines 1758-1968)
- Reference the exact Absorption Protocol steps from ARCH: WHY THIS EXISTS → BUILT ON → MUST HONOR → SOUL ALIGNMENT → RESEARCH DEBT → CONSUMED BY → Synthesize into ACCUMULATED IDENTITY

---

### REVISION 1.3 — MISSING AGENT: "Weaver" not in the plan at all

**Plan Section:** Section 1 table — no Weaver agent exists
**Source:** ARCH Section 2.5 (lines 1197-1390)

**What the plan says:**
The plan has no Weaver agent. Inline section creation and bidirectional threading updates appear scattered across Lead responsibilities and "Post-Build" steps, but no dedicated agent owns this work.

**What ARCH actually says (lines 1197-1213):**
> "The Weaver is responsible for the RETURN breath of the pipeline. When the Builder completes an exploration, the Weaver threads it into the knowledge web — creating its inline section, updating every source file's CONSUMED BY table, logging findings to RESEARCH-ACTIVE.md, and verifying that all bidirectional links are complete."
> "The Weaver touches 5-10+ files per exploration. It's not a one-shot read-only call (subagent) or a single file write (embedded function). It's sustained multi-file editing work that benefits from its own context window."

**Why this matters:** The Weaver is the SECOND most important teammate (after Builder). It owns ALL bidirectional threading, ALL inline section creation, ALL CONSUMED BY updates, ALL RESEARCH-ACTIVE.md updates. Without it, the plan assigns threading to either the Lead (which overloads the Lead's context) or leaves it as an afterthought.

**Specific Revision:**
- ADD a full Weaver teammate section matching ARCH Section 2.5
- Weaver Responsibilities (from ARCH lines 1214-1222):
  - Create Tier B inline sections for new explorations (full 10-section format)
  - Update source files' CONSUMED BY tables (bidirectional link completion)
  - Update RESEARCH-ACTIVE.md with new findings and external validations
  - Handle T1 LOCKED files: note pending updates in checkpoint instead of editing
  - Verify bidirectional threading is complete
  - Report threading status to Lead via message
  - Append to `_execution-journal/weaver-log.md`
- Include the full Bidirectional Update Protocol from ARCH lines 1233-1390 (6-step protocol: Trigger → Create inline section → Update CONSUMED BY → Update RESEARCH-ACTIVE → Verify threading → Log + Report)
- The Weaver can work WHILE Lead pre-loads context for next exploration (Parallelism Window 2, ARCH Section 3.2, lines 2650-2677)

---

### REVISION 1.4 — "Researcher" should NOT be a standalone agent. It's a subagent deployed BY Builder

**Plan Section:** Section 1 table, row A5 — "researcher" with subagent_type: general-purpose, EPHEMERAL lifecycle
**Source:** ARCH Section 2.7 (lines 1601-1748), ARCH lines 492-498

**What the plan says:**
A5 "researcher" is a general-purpose agent spawned per-need, covering "Research Orchestrator + sub-agent deployment."

**What ARCH actually says (lines 1165-1181):**
> "Agent Teams explicitly prohibit nested teams. The Research Orchestrator would need to use the Task tool to deploy subagents — which is exactly what the Builder can do directly."
> "More importantly: the Builder is the agent that KNOWS what weakness needs research. The Builder scored 31/40 and identified 'clusters too uniform.' Having a separate Research Orchestrator introduces indirection — the Builder would message Lead, Lead would message Research Orchestrator, Research Orchestrator would deploy subagent, receive results, message Lead, Lead would message Builder. That's 6 hops for what should be 2: Builder deploys subagent → subagent returns."

**Specific Revision:**
- DELETE the "Researcher" (A5) agent row
- MERGE research capability INTO the Builder's responsibilities
- The Builder deploys Research subagents DIRECTLY via the Task tool (ARCH Section 2.7, lines 1601-1748)
- Builder can deploy MULTIPLE research subagents in PARALLEL (ARCH lines 1183-1195 — Parallelism Window 1, Section 3.2 lines 2626-2648)
- Include the full Context-Rich Sub-Agent Deployment Protocol from ARCH lines 1622-1748
- The context-rich prompt must carry ACCUMULATED IDENTITY into the search (ARCH lines 1638-1708): Mission → Context I Carry → Constraints Active → Task → Output Format → Integration Path → Do Not

---

### REVISION 1.5 — "Auditor" role description is wrong. It's a SUBAGENT, not a teammate

**Plan Section:** Section 1 table, row A4 — "auditor" with subagent_type: general-purpose, EPHEMERAL per-iteration lifecycle
**Source:** ARCH Section 2.10 (lines 2042-2238), ARCH lines 528-558

**What the plan says:**
A4 is an "auditor" of type general-purpose, covering "Perceptual deepening sub-agents." It's described as conducting the full perceptual deepening skill audit.

**What ARCH actually says (lines 2042-2071):**
> "The Auditor is v4.0's answer to a fundamental blind spot in v3.0: nobody independently verified that outputs ACTUALLY matched what was CLAIMED."
> "The Auditor has NO accumulated context. It gets a fresh context window every time. It receives ONLY the output to check and the criteria to check against."
> "A teammate accumulates context over time. After 3 audits, a teammate would start developing the same blind spots the Lead has — familiarity, pattern-matching, trust. The entire value of the Auditor is FRESH EYES."

The plan CONFLATES two different things:
1. **Auditor subagent** — fresh-eyes verification of constraints, CONSUMED BY entries, file integrity (ARCH Section 2.10)
2. **Perceptual Deepening** — visual auditing via `/soul-audit`, `/zones`, `/squint` done BY THE BUILDER (ARCH Section 2.4, lines 936-1163, Parallelism Window 4, lines 2720-2797)

**Specific Revision:**
- CLARIFY that the Auditor is a Task tool SUBAGENT (not a teammate), deployed FRESH each time with zero accumulated context
- The Auditor does TWO types of audits (ARCH lines 2073-2141):
  1. **BUILD AUDIT** — after Builder completes, before Weaver starts. Checks CSS constraints, soul pieces, structure, noise in ACTUAL FILES
  2. **THREAD AUDIT** — after Weaver completes, before Lead proceeds. Checks CONSUMED BY entries ACTUALLY exist, inline section ACTUALLY complete, RESEARCH-ACTIVE ACTUALLY updated
- The Perceptual Deepening skill (`/soul-audit`, `/zones`, `/squint`) is done BY THE BUILDER, not the Auditor (ARCH Section 2.4 lines 947-963, Parallelism Window 4 lines 2720-2797)
- Include the Auditor deployment triggers table from ARCH Section 4.2, lines 2973-2992
- Include both Build Audit and Thread Audit prompt templates from ARCH lines 2146-2220

---

### REVISION 1.6 — MISSING CONCEPT: The Execution Journal (3 layers of state persistence)

**Plan Section:** Section 7 "Checkpoint System" — only mentions OD-CHECKPOINT.md
**Source:** ARCH Section 1.4 (lines 273-450), Section 2.11 (lines 2240-2437)

**What the plan says:**
Section 7 defines a checkpoint system with a single primary file (OD-CHECKPOINT.md) that stores all state. The plan mentions embedding the Context Digest in the checkpoint. Recovery is purely structural.

**What ARCH actually says (lines 273-314):**
ARCH defines THREE LAYERS of state persistence:
1. **THE WEB** (permanent, bidirectional) — inline sections, CONSUMED BY tables, RESEARCH-ACTIVE.md. Stores WHAT was built. Maintained by Weaver.
2. **THE CHECKPOINT** (structural, recoverable) — OD-CHECKPOINT.md. Stores WHERE we are. Maintained by Lead.
3. **THE JOURNAL** (contextual, ephemeral, essential) — `_execution-journal/` folder. Stores WHY decisions were made, what the mental model is, what patterns are emerging. Maintained by all agents.

The plan is MISSING Layer 3 entirely. Without it, compaction recovery rebuilds position but NOT understanding. ARCH lines 304-314 make this viscerally clear:
> "The difference between:
> - Recovering to 'OD-003 is done, OD-004 is next, here are the constraints'
> - Recovering to 'OD-003 taught us that organizational density IS fundamentally about spacing hierarchies, not visual weight. This is why we chose OD-004's hypothesis...'"

**Specific Revision:**
- ADD the full `_execution-journal/` concept from ARCH Section 1.4 and 2.11
- Journal structure (ARCH lines 318-347):
  - `CURRENT-STATE.md` — OVERWRITTEN (not appended) after every significant operation. THE read-first file. Lead only.
  - `lead-log.md` — Lead appends: gates, decisions, emerging patterns
  - `builder-log.md` — Builder appends: iterations, insights, research revelations
  - `weaver-log.md` — Weaver appends: threading edge cases, surprises
  - `decisions.md` — Lead appends: formal decision records (alternatives, rationale, consequences)
- The CURRENT-STATE.md contract (ARCH lines 422-448): answers 5 questions — Where are we? What are we doing and why? What key decisions got us here? What's the current mental model? What comes next and why?
- Journal lifecycle (ARCH lines 2408-2424): Created at phase start, used during execution, archived/deleted after phase completion
- Anti-noise guarantees (ARCH lines 2426-2437): `_` prefix, dedicated folder, no web references, explicit lifecycle, 5 files only

---

### REVISION 1.7 — WRONG: Plan says "Context Digest ~2K condensed identity." ARCH says "Accumulated Identity" — a fundamentally different concept

**Plan Section:** Section 2 "The Mesh" — describes a "Context Digest" as a ~2K file
**Source:** ARCH Section 1.2 (lines 108-137), Section 2.6 (lines 1392-1599)

**What the plan says:**
A "Context Digest" is a ~2K file that condenses soul pieces, universal rules, DD-F-006, quality bar, and current OD's density pairing. Produced once and embedded in checkpoint.

**What ARCH actually says (lines 108-137):**
> "You are not just passing information. You are transferring IDENTITY."
> The accumulated identity includes: What this file IS, What it BUILT ON, What it MUST HONOR, What BREAKS if it changes, What CONSUMES it, What it DOESN'T KNOW.

The ARCH's "Accumulated Identity" is NOT a static condensed file. It is a DYNAMIC, EVOLVING output from the Traverser subagent that grows with EVERY cycle. Each time the Traverser is deployed, it reads the CURRENT state of the web and returns a FRESH accumulated identity that includes whatever new nodes the Weaver has added.

**Specific Revision:**
- REPLACE "Context Digest" terminology with "Accumulated Identity" throughout the plan
- The accumulated identity is NOT a file — it is the OUTPUT of a Traverser subagent deployment, transferred to teammates via messages
- It has a specific structure (ARCH lines 1491-1503, 1547-1599):
  ```
  ACCUMULATED IDENTITY = {
    purposes: [purpose statements from each file],
    provenance: [full chain of what is inherited],
    constraints: [all MUST HONOR from all files],
    soul_requirements: [all soul alignment requirements],
    research_debt: [all unknowns, uncertainties],
    validation_candidates: [debt items suitable for subagent],
    consumers_to_update: [files to update when done]
  }
  ```
- It EVOLVES: v0 (before OD-001) < v1 (after OD-001) < v2 (after OD-002) < ... (ARCH lines 100-103, 239-249)
- Include the Traverser Subagent Prompt Template from ARCH lines 1509-1545
- Include the Traverser Output Format from ARCH lines 1547-1599

---

## BATCH 1 CONTINUED: PROTOCOL-SPECIFIC GAPS

### REVISION 1.8 — MISSING: Phase -1 Orientation details from PROTO

**Plan Section:** Phase -1 Orientation — lists 3 files to read
**Source:** PROTO Section "PHASE -1" (lines 638-684)

**What the plan says:**
Lead reads: HANDOFF-DD-TO-OD.md, MASTER-STATE.md, STAGE-HEADER.md. Notes FOLDER-MAP.md discrepancy.

**What PROTO actually says (lines 641-684):**
PROTO's Phase -1 is MORE detailed:
1. Read FOLDER-MAP.md — extract current phase state, T1 vs T2 files, folder purposes, cross-references (lines 642-649)
2. Read RELEVANT CLAUDE.md files — showcase/CLAUDE.md, DESIGN-SYSTEM/CLAUDE.md, DESIGN-SYSTEM/components/CLAUDE.md, DESIGN-SYSTEM/patterns/CLAUDE.md (lines 650-667). Extract: what each folder is for, what's current vs deprecated, how folders connect, identity signature
3. IDENTIFY ALL FILES YOU WILL TOUCH — create a table of every file with columns: Path, Role, Will Read?, Will Modify?, Will Create? (lines 668-684)

**Specific Revision:**
- EXPAND Phase -1 to include ALL of PROTO's orientation steps
- The plan should include the FOLDER-MAP.md reading (despite the discrepancy — the plan should note: "If FOLDER-MAP.md doesn't exist, use HANDOFF + STAGE-HEADER + CLAUDE.md files as equivalent orientation")
- ADD the "Identify All Files You Will Touch" table requirement from PROTO lines 668-684
- ADD the CLAUDE.md reading requirement from PROTO lines 650-667
- The HANDOFF-DD-TO-OD.md reading from the plan is CORRECT — keep it, but ADD the PROTO's additional orientation steps around it

---

### REVISION 1.9 — MISSING: Phase 0 skill invocation step from PROTO

**Plan Section:** Phase 0 Step 0.3 — Lead reads the perceptual deepening skill
**Source:** PROTO Phase 0 (lines 688-727)

**What the plan says:**
Step 0.3 says "Lead reads the perceptual deepening skill" and extracts sub-agent definitions.

**What PROTO actually says (lines 693-727):**
The skill invocation is the ABSOLUTE FIRST COMMAND in Phase 0. PROTO specifies:
1. Read `~/.claude/skills/perceptual-deepening/SKILL.md` (actual path, not `/mnt/skills/`)
2. EXTRACT VERBATIM and OUTPUT before proceeding — full definitions for Sub-Agent A through E, Iteration Protocol, Squint Test Protocol, Soul Documentation Format, Scoring Rubric
3. This is a CHECKPOINT — cannot proceed without it

Furthermore, ARCH Section 2.4 (lines 936-968) specifies that the Builder — not just the Lead — must use the Perceptual Deepening skill:
> "CRITICAL: The Builder does NOT just check CSS values. The Builder LOOKS at its work."
> Builder invokes `/soul-audit` after final iteration, `/squint` between iterations, `/zones` for deep analysis

And ARCH Parallelism Window 4 (lines 2720-2797) specifies the Builder deploys 5 zone sub-agents in parallel: ZONE-TYPOGRAPHY, ZONE-SPACING, ZONE-CONTAINERS, ZONE-HIERARCHY, ZONE-COMPOSITION

**Specific Revision:**
- MOVE skill invocation to be FIRST step in Phase 0 (matching PROTO)
- The FULL extraction protocol from PROTO lines 700-726 must be included: extract Sub-Agent A-E definitions verbatim, plus iteration protocol, squint test protocol, soul documentation format, scoring rubric
- CLARIFY that the Builder (not the Auditor) is the agent that uses the Perceptual Deepening skill during iteration
- ADD the 5 zone sub-agent parallel deployment from ARCH lines 2726-2766
- Reference PROTO Section 5 (lines 567-623) on "The Skill Is Not a Template" — perceptual DEPTH, not template COMPLETION

---

### REVISION 1.10 — MISSING: Phase 0.5 Inline Section Pre-Flight (entirely absent from plan)

**Plan Section:** Phase 0.5 "Pre-Flight" — vaguely mentions verifying provenance chain
**Source:** PROTO Phase 0.5 (lines 1101-1244)

**What the plan says:**
Phase 0.5 has the "Reader" verify provenance chain intact, extract MUST HONOR constraints, compile into constraint table.

**What PROTO actually says (lines 1101-1244):**
Phase 0.5 is a DETAILED, MANDATORY pre-flight protocol that:
1. For EVERY file you will CONSUME: Read its inline section, extract STATUS (LOCKED/EDITABLE), copy MUST HONOR table verbatim, copy WHAT BREAKS section, ANSWER DIAGNOSTIC QUESTIONS (lines 1109-1141)
2. For EVERY file you will CREATE: Plan its inline section NOW — specify Location, Tier, BUILT ON sources, which source CONSUMED BY tables to update (lines 1142-1184, with explicit table mapping OD-001→OD-006 to their DD sources)
3. Pre-Flight Checklist per OD: Table of every file with Role, Inline Section Read, Constraints Extracted, Diagnostic Questions Answered (lines 1185-1243)
4. Compile a CONSTRAINT SUMMARY from all inline sections — numbered constraint table with Source File and Consequence columns (lines 1222-1243)

This is NOT just "verify the chain" — it's a structured extraction-and-compilation exercise.

**Specific Revision:**
- REPLACE the vague Phase 0.5 with the FULL pre-flight protocol from PROTO
- Include the per-file pre-flight template from PROTO lines 1111-1141 (STATUS, MUST HONOR, WHAT BREAKS, DIAGNOSTIC QUESTIONS, DECISION checkboxes)
- Include the "Files to Create" planning table from PROTO lines 1142-1184 (mapping each OD to its sources and which CONSUMED BY tables to update)
- Include the Constraint Summary compilation from PROTO lines 1222-1243
- CRITICAL: The plan must state "CHECK EVERY iteration against this constraint table" (PROTO line 1243)

---

---

## BATCH 2: PER-OD EXECUTION LOOP, ITERATION PROTOCOL, SCORING, VISUAL AUDIT

### REVISION 2.1 — WRONG LOOP STRUCTURE: Plan's per-OD loop is missing the full 17-step execution flow from ARCH

**Plan Section:** Section 4 "Per-OD Execution Loop" (Steps 4A through 4H)
**Source:** ARCH Section 3.1 (lines 2441-2618) — Complete Execution Flow diagram

**What the plan says:**
Section 4 describes ~8 steps (4A-4H): Lead assigns, Builder builds, auditor checks, researcher runs, synthesis step. The loop is vague about ordering, has wrong agent assignments, and misses critical steps.

**What ARCH actually says (lines 2474-2570):**
The EXPLORATION LOOP per-OD has 13 distinct numbered steps (5-17) with substeps, in an EXACT sequence:

```
5.  Lead creates task → assigns to Builder (with accumulated identity via message)
6.  Builder works autonomously (build + score + identify weakness)
7.  IF weakness + score < 34.5 → Builder deploys Research subagent(s) in parallel
    → Builder integrates findings → Builder builds next iteration → LOOP to 6
8.  LOOP until score ≥ 34.5 or max iterations
8.5 Builder appends to _execution-journal/builder-log.md
9.  Builder messages Lead with completion report
10. Lead runs Guardian validation on output (4 checks: provenance, constraints, debt, threading readiness)
    → IF FAIL: Lead messages Builder with fix request
    → IF PASS: Continue to Auditor
10.5 Lead deploys Auditor subagent (BUILD AUDIT — fresh context, zero prior)
    → IF FAIL: Lead messages Builder → fix → re-deploy Auditor
    → IF PASS: Continue to Weaver
11. Lead creates task → assigns to Weaver (with exploration details)
12. Weaver works autonomously (inline section, CONSUMED BY, RESEARCH-ACTIVE, threading verification)
12.5 Weaver appends to _execution-journal/weaver-log.md
13. Weaver messages Lead with threading status
14. Lead runs Guardian validation on threading (3 checks)
    → IF FAIL: Lead messages Weaver with fix
14.5 Lead deploys Auditor subagent (THREAD AUDIT — fresh context)
    → IF FAIL: Lead messages Weaver → fix → re-deploy Auditor
    → IF PASS: Continue to checkpoint
15. Lead writes checkpoint
15.5 Lead updates execution journal (CURRENT-STATE.md overwrite, lead-log.md append, decisions.md if fork)
16. Lead deploys Traverser subagent → returns ACCUMULATED IDENTITY v[X+1]
17. LOOP: Next exploration
```

**Specific Revision:**
- REPLACE the plan's 4A-4H steps with the FULL 17-step flow from ARCH Section 3.1
- The critical steps the plan MISSES entirely:
  - Step 10: Lead's Guardian validation BETWEEN Builder completion and Weaver assignment
  - Step 10.5: BUILD AUDIT by Auditor subagent (fresh context) BEFORE Weaver starts
  - Step 14: Lead's Guardian validation of threading output
  - Step 14.5: THREAD AUDIT by Auditor subagent (fresh context) AFTER Weaver completes
  - Step 15.5: Execution journal updates by Lead
  - Step 16: Traverser re-deployment to build enriched accumulated identity for NEXT exploration
- The plan conflates Builder iteration (steps 6-8.5) with the post-build pipeline (steps 10-16). These are DISTINCT phases with DISTINCT agents.

---

### REVISION 2.2 — CRITICALLY UNDERSPECIFIED: Builder's Visual Audit Protocol

**Plan Section:** Section 4 — mentions "perceptual deepening audit" generically
**Source:** ARCH Section 2.4 (lines 936-1163), specifically lines 999-1162

**What the plan says:**
The plan mentions the auditor conducting perceptual deepening. It vaguely references sub-agents A through G.

**What ARCH actually says (lines 999-1163):**
The Builder — NOT the Auditor — performs the visual audit. The ARCH defines a detailed BUILDER ITERATION LOOP with these visual audit steps embedded WITHIN each iteration:

1. **VISUAL AUDIT AFTER EVERY ITERATION** (lines 1017-1039):
   - Builder takes screenshot (Playwright MCP)
   - SQUINT TEST: "Does this feel like KortAI? Sharp? Precise? Archival?"
   - SOUL PIECE CHECK (visual, not structural):
     - SP#1: Do edges feel SHARP? (not: is border-radius 0?)
     - SP#2: Does wisdom text feel DIFFERENT? (not: is it serif?)
     - SP#3: Do callouts feel like FAMILY? (not: do they have zones?)
     - SP#4: Does depth come from EDGES? (not: is box-shadow 0?)
     - SP#5: Do markers feel SQUARE? (not: are list-style squares?)
   - ZONE QUICK-CHECK: Identify which zone feels wrong → feeds weakness

2. **DECISION BRANCHING** (lines 1042-1050):
   - Score < 34.5 + weakness → Deploy Research subagent
   - Score < 34.5 + soul violation → Deploy zone sub-agents (`/zones`)
   - Score ≥ 34.5 + visual audit clean → Proceed to `/soul-audit`

3. **FINAL `/soul-audit`** (lines 1094-1132) — MANDATORY before signaling Lead:
   - Final screenshot
   - Deploy 5 ZONE SUB-AGENTS IN PARALLEL:
     - ZONE-TYPOGRAPHY: Font feel, letter endings, hierarchy
     - ZONE-SPACING: Whitespace generosity, content-to-chrome
     - ZONE-CONTAINERS: Borders trapped vs floating, frames
     - ZONE-HIERARCHY: What dominates, visual order
     - ZONE-COMPOSITION: Tension, opposition, energy
   - Synthesize zone reports: Do all 5 soul pieces PERCEPTUALLY manifest?
   - IF any soul piece not manifest: VISUAL FAIL even if structural score ≥ 34.5
   - Builder makes targeted single change (one per iteration), re-screenshots, re-audits
   - Document in builder-log.md using perceptual terms, not CSS

**Specific Revision:**
- MOVE ALL visual audit responsibility from the Auditor to the Builder
- Include the FULL per-iteration visual audit protocol from ARCH lines 1017-1039
- Include the decision branching tree from ARCH lines 1042-1050
- Include the FINAL `/soul-audit` protocol with 5 zone sub-agents from ARCH lines 1094-1132
- Emphasize ARCH's critical distinction: visual/perceptual audit (Builder) vs constraint/integrity audit (Auditor subagent)
- Reference PROTO B.3-B.6 (lines 1311-1397) which specifies the same visual inspection with even MORE granularity: First Impression (3-second rule), 8-Step Visual Inspection, Sub-Agent Deployment, Soul Piece Verification

---

### REVISION 2.3 — INCOMPLETE: Scoring rubric details and thresholds

**Plan Section:** Section 4 — mentions quality score but not the full rubric
**Source:** PROTO Phase 1 B.11 (lines 1484-1501), C.7 (lines 1571-1588), C.8 (lines 1590-1591)

**What the plan says:**
The plan mentions a score target of ≥34/40 and references "quality bar" generically.

**What PROTO actually says (lines 1484-1501):**
The scoring rubric has 4 DIMENSIONS, each scored /10:
1. **Innovation** (/10) — How new is this organizational concept? What makes it novel?
2. **Utility** (/10) — Would real documentation use this? Why/why not?
3. **Soul Alignment** (/10) — Soul pieces verified + tokens + character expressed
4. **Execution** (/10) — Research applied + visual quality + organizational clarity + DD constraints honored

The TOTAL is /40 with these decision thresholds (PROTO line 1591):
- **INCLUDE** (≥32/40 AND 0 soul violations AND 0 DD constraint violations)
- **DOCUMENT** (24-31/40 OR violations present)
- **DISCARD** (<24/40)

Note: ARCH uses 34.5 as the iteration quality bar (matching DD average), while PROTO uses ≥32 as the INCLUDE floor and ≥34 as the per-iteration target. Both documents have these:
- Per-iteration target: ≥34/40 (PROTO line 1294, ARCH line 1097)
- INCLUDE decision floor: ≥32/40 with 0 violations (PROTO line 1591)
- DD average benchmark: 34.5/40 (PROTO line 1756)

**Specific Revision:**
- ADD the full 4-dimension scoring rubric with specific justification requirements
- CLARIFY the THREE-TIER decision system: INCLUDE / DOCUMENT / DISCARD with exact thresholds
- Each dimension score must have SPECIFIC justification — "not 'good'" (PROTO line 1487)
- Include the iteration verdict decision tree from PROTO B.12 (line 1504):
  - CONVERGED (≥34/40 + all soul verified + research ≥80% + DD constraints 100%) → Final Audit
  - IMPROVING (score increasing, clear hypothesis) → Next iteration
  - STUCK (plateaued after 3+) → Reassess
  - DIVERGING (score decreasing) → Revert to best, rethink
  - CONSTRAINT VIOLATION → STOP immediately
- Maximum 6 iterations per OD (PROTO line 1524)
- Reference the DD quality bar benchmark of 34.5/40 average from PROTO Phase 2 score table (line 1756)

---

### REVISION 2.4 — MISSING: PROTO's 12-step per-iteration template (B.1-B.12)

**Plan Section:** Section 4 — the build loop
**Source:** PROTO Phase 1, B.1 through B.12 (lines 1298-1524)

**What the plan says:**
The plan describes a generic build-iterate-audit cycle without the granular per-step checklist.

**What PROTO actually says (lines 1298-1524):**
PROTO defines a SPECIFIC 12-step template for EVERY iteration of EVERY OD:

- **B.1 BUILD** — Create/modify HTML, use realistic content, apply tokens, apply research FROM gate file, apply density pattern, use planned components, CHECK CONSTRAINT TABLE
- **B.2 SCREENSHOT** — Immediately after any change. Save to `audit-screenshots/od-explorations/`
- **B.3 FIRST IMPRESSION** — 3-second rule: what draws eye first? Organized or chaotic? Info unfolds naturally? Feels like KortAI? Emotional response?
- **B.4 8-STEP VISUAL INSPECTION** — Edge Scan, Shadow Scan, Typography Scan, Structure Scan, Shape Scan, Color Scan, Organization Scan (OD-specific), DD-Echo Scan + Inline Constraint Check
- **B.5 DEPLOY SUB-AGENTS** — From perceptual-deepening skill. Sub-Agents A-E with EXACT methodology. THREE specific observations minimum per agent. Named problems, hypothesized causes.
- **B.6 SOUL PIECE VERIFICATION** — Table: 5 soul pieces × status × specific evidence
- **B.7 RESEARCH CHECK** — Against OD-RESEARCH-GATE.md. Application rate percentage.
- **B.8 DD INLINE CONSTRAINT CHECK** — Check EVERY iteration. If violations >0: STOP.
- **B.9 DOWNWARD TRACE CHECK** — Did organizational concept FAIL because component doesn't support it? Document component gaps.
- **B.10 OUTBOUND FINDINGS CHECK** — Did iteration GENERATE new insight for AD/CD? Give it OD-F-### ID. Add to RESEARCH-ACTIVE.md.
- **B.11 ITERATION SCORE** — 4 dimensions × /10 with specific justification
- **B.12 ITERATION VERDICT** — CONVERGED/IMPROVING/STUCK/DIVERGING/CONSTRAINT VIOLATION + checkpoint update

**Specific Revision:**
- The plan's per-OD loop MUST include ALL 12 steps from PROTO's B-template
- Steps B.4 (8-Step Visual Inspection) and B.8 (DD Inline Constraint Check) are CRITICAL and entirely missing from the plan
- Step B.9 (Downward Trace Check) is a unique PROTO concept — discovering component GAPS that feed back to the design system. Plan must include this.
- Step B.10 (Outbound Findings Check) ensures OD findings flow FORWARD to AD/CD. This is the UPWARD FLOW mechanism within the iteration loop, not just at synthesis time.
- The plan should embed PROTO's OD-RESEARCH-GATE.md reference throughout (B.1, B.7, B.8) — the gate file is the per-OD research manifest that ensures research is applied, not just referenced.
- Include the full checkpoint update template from B.12 (lines 1505-1522): Status, Timestamp, Score, Key issue, Sub-agent that found it, Change made, Next action, Hypothesis, Screenshot path, Soul violations, DD constraint violations, Research applied/remaining, New findings, Component gaps, Potential soul pieces

---

### REVISION 2.5 — INACCURATE: OD-to-DD Density Pairings need precision from PROTO

**Plan Section:** Section 3 or 4 — references DD pairings generically
**Source:** PROTO Section 2 (lines 229-329), specifically the Per-OD Deep Briefs (lines 253-329)

**What the plan says:**
The plan mentions DD connections for each OD but doesn't specify the EXACT density pattern name, the EXACT DD file to consume, or the EXACT constraint extraction requirement.

**What PROTO actually says (lines 205-329):**
PROTO specifies EXACT pairings with MANDATORY inline section reading:

| OD | DD Source(s) | Density Pattern | Mechanism |
|-----|-------------|-----------------|-----------|
| OD-001 Conversational | DD-005 Tidal/Rivers | **PULSE** (question=sparse, answer=dense) | Questions WIDEN the river, answers NARROW it |
| OD-002 Narrative Arc | DD-001 Breathing + DD-002 CRESCENDO | **CRESCENDO** (sparse setup → dense climax) | Narrative tension mirrors breathing; complexity builds like crescendo |
| OD-003 Task-Based | DD-003 Islands | **BOOKENDS** (dense header → sparse explanation → dense verification) | Tasks are CLUSTERS of related information |
| OD-004 Confidence-Based | DD-002 CRESCENDO + DD-004 Geological | **CRESCENDO** (sparse certainty → dense uncertainty) | Certainty→uncertainty mirrors sparse→dense; layers of certainty like strata |
| OD-005 Spatial/Map | DD-006 Fractal | **WAVE** (density varies by path chosen) | Map at every zoom level; DD-006 is HIGHEST SCORING (36/40) — elevated constraints |
| OD-006 Creative | Emergent from OD-001-005 | Emergent | Must honor ALL accumulated constraints |

For EACH pairing, PROTO mandates (lines 258-261, repeated per OD):
- "MANDATORY: Read `showcase/explorations/density/DD-[###]-*.html` inline section"
- "Extract: MUST HONOR constraints from DD-[###]"
- Specific research streams (R-1 through R-5) per OD

**Specific Revision:**
- ADD the full OD-to-DD pairing table from PROTO Section 2 into the plan
- For each OD, the plan must specify: DD file(s) to consume, density pattern name, mechanism, research streams
- CRITICAL: OD-002 and OD-004 each consume TWO DD files (dual constraint extraction). Plan must note this.
- DD-006 constraint is UNIVERSAL — it applies to ALL ODs (PROTO line 216: "ALL ODs: page arc mirrors section arc mirrors paragraph arc")
- OD-005 specifically notes DD-006 is the highest scoring DD (36/40) — "its constraints are elevated" (PROTO line 316)
- OD-006 is the CREATIVE SLOT — "Whatever EMERGES from building OD-001 through OD-005" (PROTO line 324). Plan should not pre-define it.
- Include the specific component-role mappings from PROTO per-OD briefs (e.g., OD-001: "Essence = wise elder's aside, Gotcha = watch out!, Tip = friendly colleague")

---

### REVISION 2.6 — MISSING: The post-build pipeline (Guardian → BUILD AUDIT → Weaver → THREAD AUDIT → Traverser)

**Plan Section:** Section 4 — after Builder completes
**Source:** ARCH Section 3.1 steps 10-16 (lines 2512-2568)

**What the plan says:**
After Builder completes, the plan goes roughly: audit → synthesis step → checkpoint. It does not specify the precise handoff chain or the TWO distinct Auditor deployments.

**What ARCH actually says (lines 2512-2568):**
After Builder messages Lead (step 9), there is a 7-step post-build pipeline:

**Step 10:** Lead runs GUARDIAN VALIDATION (4 checks on Builder output):
- Provenance intact? ✓/✗
- Constraints honored? ✓/✗
- Research debt tracked? ✓/✗
- Threading ready? ✓/✗
- IF FAIL → Lead messages Builder with specific fix request

**Step 10.5:** Lead deploys AUDITOR subagent (BUILD AUDIT — fresh context):
- Reads ACTUAL output file with ZERO prior context
- Checks: CSS constraints, soul pieces, structure, noise
- Returns: PASS with evidence / FAIL with file:line issues
- IF FAIL → Lead messages Builder → fix → re-deploy Auditor
- IF PASS → Continue to Weaver

**Step 11-13:** Lead assigns Weaver → Weaver threads (inline section, CONSUMED BY, RESEARCH-ACTIVE) → Weaver messages Lead

**Step 14:** Lead runs GUARDIAN VALIDATION (3 checks on Weaver output):
- All sources updated? ✓/✗
- RESEARCH-ACTIVE.md updated? ✓/✗
- Threading checklist complete? ✓/✗
- IF FAIL → Lead messages Weaver with specific fix

**Step 14.5:** Lead deploys AUDITOR subagent (THREAD AUDIT — fresh context):
- Reads ACTUAL source files with zero prior context
- Checks: CONSUMED BY entries exist, inline section complete, RESEARCH-ACTIVE entries exist, no broken paths, no noise
- Returns: PASS with file:line evidence / FAIL with specifics
- IF FAIL → Lead messages Weaver → fix → re-deploy Auditor

**Step 15-15.5:** Checkpoint + Journal update

**Step 16:** TRAVERSER re-deployment → Accumulated Identity v[X+1]

**Specific Revision:**
- ADD the full post-build pipeline as a distinct section in the plan
- The plan MUST show the alternating pattern: AGENT WORK → GUARDIAN CHECK → AUDITOR CHECK (for both Build and Thread phases)
- The TWO Auditor deployments per OD are critical: BUILD AUDIT (after Builder, before Weaver) and THREAD AUDIT (after Weaver, before checkpoint)
- Each Auditor deployment is a FRESH subagent with ZERO accumulated context
- The Traverser re-deployment (step 16) is what creates the COMPOUNDING LOOP — accumulated identity evolves with EVERY completed OD
- Include the fix-loop: if Auditor fails, Lead messages the responsible agent (Builder or Weaver), they fix, Auditor is re-deployed FRESH

---

### REVISION 2.7 — MISSING: PROTO's Final Verification protocol (Section C) — same rigor as DD re-audit

**Plan Section:** Section 4 — final steps per OD
**Source:** PROTO Phase 1 Section C (lines 1526-1623)

**What the plan says:**
The plan mentions a final audit step generically.

**What PROTO actually says (lines 1526-1623):**
PROTO defines 11 specific final verification steps (C.1 through C.11):

- **C.1** Final Screenshot → save to `audit-screenshots/od-explorations/OD-[###]-final.png`
- **C.2** Full Sub-Agent Deployment on final state — EACH sub-agent from skill, apply TECHNIQUE not template, specific observations
- **C.3** Squint Test (from skill) — defocus eyes, list masses that persist, what disappears, organizational PATTERN visible when squinting?, KortAI feeling?, DD family feeling?
- **C.4** Soul Piece Final Verification — all 5 pieces + any new OD pieces with specific evidence, 0 violations required
- **C.5** DD Inline Constraint Final Verification — table of EVERY DD constraint with evidence, 0 violations required for INCLUDE
- **C.6** Research Application Verification against OD-RESEARCH-GATE.md — application rate target ≥80%, explain if <80%
- **C.7** Quality Score Final — 4 dimensions × /10 with justification
- **C.8** Decision — INCLUDE (≥32/40 + 0 violations) / DOCUMENT / DISCARD
- **C.9** DD Coherence Check — same design family? components identical? soul consistent? density vocabulary visible? DD inline constraints honored?
- **C.10** Outbound Research Summary — compile ALL outbound findings from all iterations, verify all in RESEARCH-ACTIVE.md
- **C.11** Audit Sign-Off — complete summary: Score, Decision, Soul pieces (X/5 verified + X new), DD constraints (X/X honored), Research (X% applied), New findings (count), Component gaps (count), DD coherence, Iterations, File path

**Specific Revision:**
- ADD the FULL C.1-C.11 final verification protocol into the plan's per-OD loop
- This is NOT generic — it has specific templates and checklists that must be followed
- C.9 (DD Coherence Check) is especially important: it asks whether the OD exploration feels like it belongs in the SAME FAMILY as DD-001 through DD-006
- C.11 (Audit Sign-Off) is the formal checkpoint record that feeds into Phase 2 synthesis
- PROTO explicitly states this must match "DD re-audit granularity" (line 1527) — not a lighter version

---

### REVISION 2.8 — MISSING: PROTO's Inline Section Creation (Section D) and Bidirectional Threading (Section E) per OD

**Plan Section:** Section 4 — post-build steps
**Source:** PROTO Phase 1 Sections D-E (lines 1624-1745)

**What the plan says:**
The plan vaguely mentions inline section creation as part of the post-build process, but doesn't specify the template or bidirectional update protocol.

**What PROTO actually says:**

**Section D — Inline Section Creation (lines 1624-1708):**
After achieving INCLUDE status, create the inline section. PROTO provides the FULL Tier B template with 10 sections:
1. WHY THIS EXISTS — hypothesis, density pairing, score, key insight
2. THE QUESTION THIS ANSWERS — "How should documentation be organized when..."
3. STATUS — ACTIVE, LOCKED if INCLUDE / EDITABLE if DOCUMENT
4. SOUL ALIGNMENT — specific manifestation of each SP (what elements, what CSS), plus any CANDIDATE soul pieces discovered
5. BUILT ON — Table: Source | Role | Key Values | Path (DD files, research findings, T1 synthesis files)
6. MUST HONOR — Table: Constraint | Source | Consequence of Violation
7. WHAT BREAKS IF THIS CHANGES — blast radius: organizational-patterns.md, AD-[###], CD-[###], migration
8. CONSUMED BY — Table: Consumer | How It Uses This File (AD, CD, patterns.md, synthesis)
9. RESEARCH DEBT — partially applied findings, component gaps, forward questions, untested assumptions
10. DIAGNOSTIC QUESTIONS — 5 questions including one specific to this OD's concept

**Section E — Bidirectional Threading Update (lines 1718-1745):**
Files to update after inline section creation:
- DD-[###] inline section → "8. CONSUMED BY" → add OD-[###] entry
- DD-006 inline section → "8. CONSUMED BY" → add OD-[###] entry (ALWAYS — universal constraint)
- R1-### inline section → "8. CONSUMED BY" → add OD-[###] entry (if it has one)
- IF source file is LOCKED (T1 authority): Do NOT modify directly. Document in OD-CHECKPOINT.md under "Bidirectional Threading Updates Needed"

**Specific Revision:**
- ADD the full Tier B inline section template from PROTO Section D
- This is what the WEAVER creates (per ARCH). The plan must assign this to the Weaver teammate.
- ADD the bidirectional threading update protocol from PROTO Section E — specifically which files to update and what entries to add
- Include the LOCKED file handling: if T1, document in checkpoint, don't edit (PROTO lines 1734-1738)
- This pairs with ARCH Section 2.5's Weaver responsibilities — the Weaver creates the inline section AND updates CONSUMED BY tables AND handles T1 LOCKED files
- The plan must include PROTO's checkpoint updates for threading (lines 1739-1745): source files updated, threading complete YES/NO, OD-RESEARCH-GATE.md updated

---

### REVISION 2.9 — WRONG: Plan says Research triggers come from Lead/Auditor. ARCH says Builder owns all research deployment

**Plan Section:** Section 4H — Research Agent Deployment Triggers
**Source:** ARCH Section 2.7 (lines 1601-1748), ARCH Section 2.4 (lines 1165-1195)

**What the plan says:**
The plan has a separate "researcher" agent (A5) spawned by the Lead or triggered by auditor findings. Research deployment is described as a coordination between Lead, Auditor, and Researcher agents.

**What ARCH actually says (lines 1601-1621, 1165-1181):**
Research is deployed EXCLUSIVELY by the Builder. The rationale (ARCH lines 1611-1620):

1. Builder KNOWS what weakness needs research (it scored the exploration)
2. Builder CARRIES the accumulated identity (received from Lead)
3. Builder will USE the findings in its next iteration
4. Builder can deploy MULTIPLE research subagents in PARALLEL

"Having the Lead mediate (Builder → Lead → Research → Lead → Builder) adds 4 extra message hops with no value." (ARCH lines 1619-1620)

Research subagent deployment follows the Context-Rich Sub-Agent Deployment Protocol (ARCH lines 1622-1748):
- Step 1: Builder identifies weakness from iteration scoring
- Step 2: Builder builds context-rich prompt FROM accumulated identity (NOT generic search)
- Step 3: Builder deploys subagent via Task tool (general-purpose with WebSearch)
- Step 4: Builder receives and integrates findings

The prompt MUST carry accumulated identity into the search (ARCH lines 1648-1708):
- Mission (what to validate/challenge)
- Context I Carry (what is known, what is uncertain, constraints active)
- Your Task (specific searches)
- Output Format (table: Source | Finding | Relationship | Confidence Impact)
- Integration Path (if VALIDATES/CHALLENGES/EXTENDS — specific actions)
- Do Not (generic returns, skip integration, orphan findings)

Research subagent types (ARCH lines 1750-1756):
- EXTERNAL-V-### (Validation — confirms/denies internal findings)
- EXTERNAL-E-### (Extension — adds new insight)
- EXTERNAL-G-### (Gap-Fill — answers specific question)

**Specific Revision:**
- DELETE any mention of a standalone Researcher agent deploying research
- ALL research deployment goes through the Builder
- Include the FULL context-rich prompt template from ARCH lines 1648-1708
- Include the 3 research subagent types and their ID patterns
- Include the integration path: VALIDATES boosts confidence, CHALLENGES may require hypothesis adjustment, EXTENDS adds new scope
- Emphasize: Builder can deploy MULTIPLE research subagents in PARALLEL (ARCH lines 1717-1722) — this is Parallelism Window 1 (ARCH Section 3.2)
- Findings flow: Builder integrates into next iteration → Builder includes in completion report to Lead → Lead passes to Weaver for threading into web

---

### REVISION 2.10 — MISSING: The OD Definition step (PROTO Section A) before iteration begins

**Plan Section:** Section 4A — how each OD starts
**Source:** PROTO Phase 1 Section A (lines 1257-1297)

**What the plan says:**
The plan jumps into building without a structured definition step.

**What PROTO actually says (lines 1257-1297):**
Before ANY iteration begins, each OD requires a full DEFINITION step (Section A):

1. **Hypothesis** — "What if documentation was organized as [concept]?"
2. **Expected outcome** — what this organizational structure will achieve
3. **DD connection table** (FROM PRE-FLIGHT — inline section constraints):
   | DD File | Constraint from Inline Section | How OD Will Honor It |
   DD-006 fractal self-similarity ALWAYS applies
4. **Research basis** (FROM OD-RESEARCH-GATE.md — not from memory):
   | Finding ID | Finding | How Applied | Expected Evidence | DD Inline Constraint |
5. **Components planned** — Table: Component | Role in This Organization | Density Behavior
6. **Density pattern** — which DD pattern, how density SERVES the cognitive organization, constraint from DD inline section
7. **Target score** — ≥34/40 (DD quality bar)
8. **File to create** — `explorations/organizational/OD-[###]-[name].html`, inline section tier: B, which CONSUMED BY tables to update
9. **CHECKPOINT** — "OD-[###] defined — update state snapshot"

**Specific Revision:**
- ADD the full OD Definition step (PROTO Section A) as the FIRST sub-step of each OD execution
- This happens BEFORE the Lead sends the task to the Builder
- The Lead should complete the definition step using accumulated identity, THEN send it to the Builder along with the accumulated identity
- The DD connection table and research basis MUST come from actual inline sections and OD-RESEARCH-GATE.md — "not from memory" (PROTO line 1270)
- The components table (what components, what role, what density behavior) is critical for the Builder to know WHAT to build
- Include the checkpoint update at the end of the definition step

---

## BATCH 3: FOUNDATIONAL PHILOSOPHY, CROSS-OD SYNTHESIS, UPWARD FLOW, ARCHITECTURE DEEP STRUCTURE

### REVISION 3.1 — MISSING: Post-Compaction Recovery Protocol (PROTO 12-step + ARCH 4-phase)

**Plan Section:** Section 7 "Checkpoint System" — mentions recovery vaguely
**Source:** PROTO lines 17-76 (12-step recovery), ARCH Section 5.2 lines 3222-3310 (4-phase recovery)

**What the plan says:**
The plan mentions that checkpoints enable resumption but provides no specific recovery protocol — no step ordering, no time estimate, no mandatory files.

**What PROTO actually says (lines 24-76):**
PROTO defines a 12-step recovery protocol in 4 phases with a 15-25 minute time estimate:

**RECOVERY PHASE 1: ORIENTATION (5 min)**
1. Read FOLDER-MAP.md — extract phase state, T1 vs T2, folder purposes, cross-refs
2. Read showcase/CLAUDE.md — lab navigation
3. Read DESIGN-SYSTEM/CLAUDE.md — design system state

**RECOVERY PHASE 2: STATE RESTORATION (5 min)**
4. Read OD-CHECKPOINT.md — LATEST state snapshot, "Currently working on," "Next action"
5. Read OD-RESEARCH-GATE.md — which findings mapped/applied/pending
6. Read MASTER-STATE.md — overall project position

**RECOVERY PHASE 3: CONSTRAINT LOADING (5 min)**
7. Read INLINE SECTION of target file — extract MUST HONOR, BUILT ON, WHAT BREAKS, answer DIAGNOSTIC QUESTIONS
8. Read SOUL-DISCOVERIES.md — reload 5 soul pieces + any new
9. Read T1 authority inline sections (MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md)

**RECOVERY PHASE 4: SKILL + VISUAL STATE (5 min)**
10. View LATEST screenshot for current OD
11. Re-read this protocol from current phase onward
12. Re-invoke /perceptual-deepening skill — extract sub-agents fresh

**What ARCH says (lines 3222-3310):**
ARCH defines the recovery ORDER explicitly:
> "Journal FIRST (mental model) → Checkpoint SECOND (position) → Web THIRD (accumulated identity) → Resume FOURTH (with full context)"

ARCH's 4-phase recovery:
1. CONTEXTUAL RECOVERY — Read journal (CURRENT-STATE.md, lead-log.md, decisions.md) to restore mental model and thought process
2. STRUCTURAL RECOVERY — Read OD-CHECKPOINT.md to restore position
3. IDENTITY RECOVERY — Deploy Traverser subagent to re-absorb enriched web
4. RESUMPTION — Combine all 3 layers, resume with CONTEXTUAL FRAMING from CURRENT-STATE.md included in Builder message

**Specific Revision:**
- ADD the full PROTO 12-step recovery protocol as a standalone section in the plan
- ADD the ARCH 4-phase recovery with the CRITICAL ordering: Journal FIRST, Checkpoint SECOND, Web THIRD
- The plan MUST state: "NOT: Checkpoint → Web → Resume (this loses mental model)" (ARCH line 3300)
- Include the time estimate: 15-25 minutes (PROTO line 21)
- Include the specific file reading order from both sources — they are complementary, not redundant
- The plan's journal concept (from Revision 1.6) is the bridge: without the journal, recovery gives position but not understanding

---

### REVISION 3.2 — MISSING: The Paradigm Shift — Inline Sections as Modification Guards (PROTO Section 0)

**Plan Section:** Not explicitly addressed — the plan treats inline sections as documentation
**Source:** PROTO lines 78-157 (Section 0)

**What the plan says:**
The plan mentions inline sections in the context of creating them for new files, but never articulates the paradigm shift that Phase 2B established: inline sections are MODIFICATION GUARDS, not documentation.

**What PROTO actually says (lines 78-157):**
PROTO Section 0 defines the paradigm shift with a complete mindset comparison table:

| Old Thinking | New Thinking |
|---|---|
| "I'll read the research files" | "I'll read the INLINE SECTION of each file FIRST" |
| "The constraint is documented somewhere" | "The constraint is in the MUST HONOR table of the file I'm touching" |
| "What might this affect?" | "The WHAT BREAKS section tells me exactly what depends on this" |
| "I think this file is authoritative" | "The STATUS line tells me if this is LOCKED or superseded" |
| "I shouldn't create new files" | "I SHOULD create new files — but with inline sections and threading" |

PROTO also defines the NEW workflow (lines 87-96):
1. Read FOLDER-MAP.md for orientation
2. For EVERY file you will touch: Open it → Read INLINE SECTION FIRST → Note MUST HONOR → Note WHAT BREAKS → Answer Diagnostic Questions
3. Build exploration with constraints ACTIVE
4. Create inline sections for files you CREATE
5. Update inline sections of source files you CONSUME (CONSUMED BY tables)

And the FULL inline section structure: 10 sections (WHY THIS EXISTS, THE QUESTION, STATUS, SOUL ALIGNMENT, BUILT ON, MUST HONOR, WHAT BREAKS, CONSUMED BY, RESEARCH DEBT, DIAGNOSTIC QUESTIONS) — PROTO lines 98-141.

**Specific Revision:**
- ADD a dedicated "Paradigm Shift" section to the plan explaining that inline sections are modification guards, not just documentation
- Include the Old/New mindset comparison table from PROTO lines 142-156
- Include the 5-step NEW workflow from PROTO lines 87-96
- The plan must establish this as a FOUNDATIONAL concept — every subsequent protocol builds on the assumption that agents read inline sections FIRST
- Reference PROTO line 81: "Phase 2B added inline threading sections to 253 files. These sections are NOT documentation. They are MODIFICATION GUARDS"

---

### REVISION 3.3 — MISSING: Foundation Status — Soul Pieces, Quality Bar, Research Counts (PROTO Section 3)

**Plan Section:** Section 2 or 3 — mentions soul pieces and quality bar vaguely
**Source:** PROTO lines 331-446 (Section 3)

**What the plan says:**
The plan mentions "5 soul pieces" and a "quality bar" but doesn't embed the full status tables or the specific research breakdown that the executing agent needs.

**What PROTO actually says (lines 331-446):**
PROTO Section 3 is a COMPLETE foundation status document that must be embedded in the plan:

**Foundation Verification Table** (lines 334-366): 7 stages ALL ✅ COMPLETE — Component Audit, Remediation, DD Explorations, DD Re-Audit, Interweaving, Design System, Phase 2B Threading. Each with specific results and inline section status.

**5 Soul Pieces Table** (lines 367-401): For each soul piece:
- #1: Sharp Edges Command Authority — border-radius: 0 — ALL containers sharp — T1: MASTER-SOUL-SYNTHESIS.md
- #2: The Archivist Speaks in Serif — Serif italic = wisdom voice — Essence/CoreAbstraction serif
- #3: Callouts Share Family DNA — 2-zone = family cohesion — Label + body structure
- #4: Shadows Lie About Depth — box-shadow: none = honesty — No shadows anywhere
- #5: Squares Signal System — Square shapes = exactness — Step indicators square

With CRITICAL instruction (line 398): "Read the inline section of MASTER-SOUL-SYNTHESIS.md to understand the full context"

**Quality Bar Table** (lines 402-420): DD achievements that OD must meet/exceed:
- Average score: 34.5/40 → ≥34/40
- INCLUDE rate: 6/6 (100%) → Target 6/6
- Soul compliance: 100% → 100%
- Research application: ~76% → ≥80% (R-1 is PRIMARY)
- Inline section quality: Standard established → Must match

**Research Available** (lines 421-446): 337 findings with OD relevance ratings:
- R-1: ★★★ PRIMARY (directly feeds OD) — only 2.97% applied before OD
- R-2: ★★ Feeds OD-005 Spatial
- R-3: ★ Cognitive density relevant
- R-4: ★ Informs OD-005
- R-5: ★★ Component combinations

Line 446: "R-1 is the big one. OD is WHERE R-1 findings finally get applied."

**Specific Revision:**
- ADD the full foundation verification table from PROTO to the plan — the agent needs to KNOW that all 7 stages are complete
- ADD the 5 soul pieces table with CHECK instructions, T1 source references, and specific manifestations
- ADD the quality bar table with DD benchmarks as OD targets
- ADD the research relevance ratings table — the plan must specify which research streams are PRIMARY (★★★) for OD
- Emphasize: R-1 application rate is currently <3% — OD is R-1's moment to shine
- Include PROTO line 398: "Read the inline section of MASTER-SOUL-SYNTHESIS.md to understand the full context of each soul piece"

---

### REVISION 3.4 — MISSING: Research as Living Fuel — Bidirectional Flow + Compounding Loop (PROTO Section 4)

**Plan Section:** Research handling is underspecified
**Source:** PROTO lines 448-565 (Section 4), ARCH Section 1.3 lines 139-271

**What the plan says:**
The plan mentions research should be applied during building but doesn't describe the BIDIRECTIONAL research flow or the compounding mechanism.

**What PROTO actually says (lines 448-520):**
PROTO defines 6 requirements for research:
1. MAPPED before building (not vaguely "referenced")
2. APPLIED with evidence during building (not assumed)
3. VERIFIED after building (not forgotten)
4. GENERATE NEW FINDINGS that feed future phases (not dead-end)
5. STORED in the design system so AD/CD can consume (not lost)
6. TRACEABLE through inline sections (not scattered)

PROTO provides a complete RESEARCH FLOW DIAGRAM (lines 462-507) showing:
- 337 findings → RESEARCH GATE → mapped to specific ODs → each OD APPLIES and CREATES → OD FINDINGS flow to: organizational-patterns.md, RESEARCH-ACTIVE.md, AD/CD phases

And the KEY PRINCIPLE (lines 508-520):
> "Research doesn't just flow IN to OD. OD generates NEW research that flows OUT"
- Inbound: R-1 → informs OD-001 structure
- Outbound: OD-001 discovers "questions need 2x whitespace" → stored in organizational-patterns.md → ADDED to RESEARCH-ACTIVE.md → flagged as INPUT to AD and CD → referenced in OD-001 inline section

PROTO also provides the COMPOUNDING LOOP diagram (lines 521-564):
Accumulated Research → Sub-Agent Prompt (with FULL context) → External Exploration (targeted) → External Findings (EXTERNAL-V/E/G) → Integrated into Chain (BUILT ON + CONSUMED BY updated) → Available for Next Stage → Even More Accumulated Research → LOOP

**What ARCH says (lines 139-271):**
ARCH Section 1.3 provides the same concept with a FULL WORKED EXAMPLE showing how OD-003 benefits from DD-003's context, deploys research subagent WITH accumulated identity, integrates finding, improves score from 31/40 to 35/40, threads into web, and enriches next exploration's starting context.

ARCH lines 253-264: "Why this is a pipeline, not a mesh" — execution is sequential, but the knowledge STRUCTURE it produces IS a mesh. DD-003 → OD-003 → EXTERNAL-V-007 — bidirectional links, no single root.

**Specific Revision:**
- ADD a dedicated "Research as Living Fuel" section to the plan with the full bidirectional flow concept
- Include PROTO's 6 research requirements (lines 454-460) — these are enforcement criteria
- Include the research flow diagram or its logic (PROTO lines 462-507)
- Include the compounding loop mechanism (PROTO lines 521-564)
- Include ARCH's worked example (OD-003 + DD-003 + EXTERNAL-V-007, lines 139-249) — this is the best illustration
- The plan must explicitly state: "Every finding flows somewhere. Nothing discovered is a dead end." (PROTO line 520)
- Include the anti-sprawl rule: findings go to RESEARCH-ACTIVE.md, NOT separate files (PROTO line 515)

---

### REVISION 3.5 — MISSING: "The Skill Is Not a Template" — Perceptual DEPTH Philosophy + OD Soul Discovery (PROTO Section 5)

**Plan Section:** Mentions perceptual deepening generically
**Source:** PROTO lines 567-623 (Section 5)

**What the plan says:**
The plan references the perceptual deepening skill as a tool to use but doesn't convey the PHILOSOPHY behind it.

**What PROTO actually says (lines 571-623):**
PROTO Section 5 is a CRITICAL philosophical anchor presented in a boxed manifesto (lines 572-597):

> "THE /perceptual-deepening SKILL IS NOT A FORM TO FILL IN. It is a set of PERCEPTUAL TECHNIQUES to APPLY."
> When skill says "squint test" → Actually DEFOCUS, report what MASSES persist and DISAPPEAR. Don't write "squint test: PASS"
> When skill says "three observations" → Make three SPECIFIC, DIFFERENT observations. "The spacing is off" is NOT specific. "The 24px gap between the Gotcha callout and the code block breaks the PULSE rhythm" — THAT is specific.

Then (lines 598-622): OD IS FERTILE GROUND FOR SOUL DISCOVERY:
- DD discovered 5 visual soul pieces. OD explores COGNITIVE truth.
- New soul pieces are EXPECTED. Examples: "Questions Need Air," "Certainty Compresses," "Stories Need Turning Points," "Tasks Are Islands"
- DURING EVERY ITERATION, ask: "WHY does this organizational flow FEEL right or wrong?"
- Sub-Agent E (Soul Documenter) is NOT optional for OD
- Document every potential soul piece IMMEDIATELY to SOUL-DISCOVERIES.md AND in the inline section under "4. SOUL ALIGNMENT" with "CANDIDATE SOUL PIECE" marker

**Specific Revision:**
- ADD the perceptual depth philosophy as a foundational concept in the plan — not a procedural step, but a MINDSET
- Include the anti-template manifesto from PROTO lines 572-597 verbatim or summarized
- ADD the OD soul discovery expectation — the plan must explicitly tell the Builder to SEEK new cognitive soul pieces
- Include the specific instruction: "DURING EVERY ITERATION, ASK: 'WHY does this organizational flow FEEL right or wrong?'" (PROTO line 609)
- Include the storage rule: New soul pieces → SOUL-DISCOVERIES.md + inline section "CANDIDATE SOUL PIECE" marker (lines 617-622)
- This pairs with ARCH Section 2.4 (Builder visual audit) — the Builder must LOOK, not just check

---

### REVISION 3.6 — MISSING: DD Lesson — "Audit DURING, Not After" (PROTO Section 6)

**Plan Section:** Not explicitly stated
**Source:** PROTO lines 625-635 (Section 6)

**What the plan says:**
The plan's per-OD loop doesn't explicitly state the lesson from DD.

**What PROTO actually says (lines 627-634):**
```
DD approach (what we did): Built → Scored → Discovered broken → Audited → Fixed → Re-audited
OD approach (what we do now): Read inline sections → Invoke skill FIRST → Load ALL context → Build WITH sub-agents → Audit DURING every iteration → Verify at end → Create inline sections → Update source files → Interweave upward
```

Line 634: "The perceptual-deepening skill is the BUILD METHODOLOGY, not a post-hoc check. The inline sections are the CONSTRAINT SYSTEM, not post-hoc documentation."

**Specific Revision:**
- ADD this DD/OD methodology contrast as a prominent early section in the plan
- The plan must explicitly state: perceptual deepening is the BUILD METHODOLOGY, inline sections are the CONSTRAINT SYSTEM
- This is NOT just a process improvement — it's the central lesson from DD that changes how OD executes

---

### REVISION 3.7 — INCOMPLETE: Phase 0 Context Loading + Research Gate Full Deliverable (PROTO 0.2-0.4)

**Plan Section:** Phase 0 — mentions loading context and research gate
**Source:** PROTO lines 729-884 (Phase 0, Steps 0.2-0.4)

**What the plan says:**
The plan lists files to read and mentions creating a research gate file but doesn't include the full file list, the extraction requirements, or the complete Research Gate deliverable template.

**What PROTO actually says:**

**Step 0.2 (lines 729-777):** Load ALL Prior Context with a SPECIFIC file list — 15+ files in 4 categories:
- T1 AUTHORITY FILES (LOCKED): MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md
- CHECKPOINT FILES: SOUL-DISCOVERIES.md, PERCEPTUAL-AUDIT-LOG.md, FOUNDATION-REMEDIATION-SYNTHESIS.md
- DD RESULTS: DD-REAUDIT-CHECKPOINT.md, DD-REAUDIT-PERCEPTUAL-SYNTHESIS.md
- CURRENT STATE: MASTER-STATE.md, DISCOVERIES-LOG.md
- DESIGN SYSTEM (11 files): README.md (109KB!), 4 token files, OVERVIEW.md, density-patterns.md, combination-rules.md, anti-patterns/registry.md

Plus a CRITICAL EXTRACTION requirement (lines 764-776): Build a constraint table from MASTER-SOUL-SYNTHESIS.md inline section with columns: Constraint, Source, If I Violate This...

**Step 0.3 — The Research Gate (lines 779-884):** THIS IS A HARD DELIVERABLE, not a checkbox.
The plan must include the FULL OD-RESEARCH-GATE.md template which requires:
- Inline Section Verification table: 9+ files × (Read? | Constraints Extracted)
- R-1 Finding-by-Finding Mapping: Per OD, minimum 3 R-1 findings with: Finding ID, Exact text, Implementation plan, Expected evidence, DD inline constraint
- R-5, R-3 same structure
- DD Constraints Inherited table: DD file × MUST HONOR × Applies to which ODs
- Summary table: Research × Findings × Mapped × Percentage
- Application target: ≥80%
- Gate status: PASSED/NOT PASSED

Lines 880-883: "If it doesn't exist → don't build. If it's vague → be specific. If it doesn't include inline section verification → read them."

**Step 0.4 (lines 886-918):** DD Lessons Extraction from inline sections — DD density patterns table, quality standards, "WHAT BREAKS" warnings, iteration insights. All extracted FROM DD inline sections, not from memory.

**Specific Revision:**
- ADD the complete file reading list from PROTO 0.2 (15+ files in 4 categories) — the plan's list is incomplete
- ADD the CRITICAL EXTRACTION constraint table requirement
- ADD the FULL OD-RESEARCH-GATE.md deliverable template from PROTO 0.3 — including inline section verification, per-OD finding mapping, DD constraint inheritance, summary table
- ADD the DD Lessons extraction step (0.4) with the full DD→OD transfer brief table structure
- The plan must NOT summarize these as "read research and create a gate file" — the SPECIFICITY of the template IS the value

---

### REVISION 3.8 — INCOMPLETE: Phase 0.5 Checkpoint Infrastructure Template (PROTO lines 920-1099)

**Plan Section:** Section 7 "Checkpoint System" — has a basic checkpoint structure
**Source:** PROTO lines 920-1099 (Phase 0.5 continued — checkpoint template)

**What the plan says:**
The plan has a simple checkpoint with current exploration, score, and completed explorations.

**What PROTO actually says (lines 920-1099):**
PROTO defines a COMPREHENSIVE checkpoint template that is significantly more detailed than what the plan includes:

- **CURRENT POSITION section** (lines 930-942): Currently working on, Last completed action, Next action, Quality trajectory, Quick Recovery Pointers (gate file, target file inline section, latest screenshot, key constraint)
- **FILES CREATED THIS PHASE section** (lines 945-957): Track 8 files × (Created | Inline Section | Source Files Updated)
- **Per-OD State Snapshots** (lines 984-1040): PER ITERATION tracking with: Score, Key issue identified, Sub-agent that found it, Next action, Hypothesis, Screenshot path, Soul violations, DD constraint violations, Research applied/remaining, New findings generated, Change made (iterations 2+), Did change help? Did change violate constraints?
- **Final Audit per OD** (lines 1017-1028): Score, Decision, Soul compliance, DD constraint compliance, Research rate, DD coherence, New soul pieces, Inline section created YES/NO
- **Upward Flow per OD** (lines 1029-1039): Findings added to RESEARCH-ACTIVE, Soul pieces to SOUL-DISCOVERIES, Component gaps, Inline section created, Source CONSUMED BY updated
- **Cross-OD Synthesis section** (lines 1042-1051): Master score, Soul matrix, DD coherence, Research coverage, All inline sections count, All CONSUMED BY updates count
- **Upward Flow section** (lines 1054-1064): 8 files to update
- **DOWNWARD TRACE LOG** (lines 1067-1072): Component gaps found during OD
- **RESEARCH FINDINGS GENERATED** (lines 1075-1083): With "ADDED to RESEARCH-ACTIVE.md" checkboxes
- **BIDIRECTIONAL THREADING UPDATES NEEDED** (lines 1086-1098): Pre-populated with DD-001 through DD-006 × specific CONSUMED BY updates

**Specific Revision:**
- REPLACE the plan's simple checkpoint structure with the FULL PROTO template
- The per-OD state snapshots are CRITICAL for recovery — each iteration must track score, key issue, hypothesis, screenshot, violations, AND research status
- The DOWNWARD TRACE LOG (component-level issues) is entirely missing from the plan
- The BIDIRECTIONAL THREADING UPDATES table is pre-populated in PROTO with exact DD→OD mappings — the plan needs this
- The plan must include the "FILES CREATED THIS PHASE" tracker for inline section and threading completion

---

### REVISION 3.9 — MISSING: Cross-OD Synthesis — 7 Mandatory Subsections (PROTO Phase 2)

**Plan Section:** Section 5 "Synthesis" — mentions post-OD synthesis vaguely
**Source:** PROTO lines 1749-2039 (Phase 2)

**What the plan says:**
The plan has a brief synthesis section that mentions comparing scores and checking design family coherence. It does not specify the 7 mandatory subsections.

**What PROTO actually says (lines 1749-2039):**
PROTO Phase 2 defines 7 MANDATORY synthesis subsections:

**2.1 MASTER SCORE TABLE** (lines 1754-1764): All 6 ODs × Score, Decision, DD Avg comparison, Meets Bar?, Inline Section Created?, DD Constraints Honored?, Threading Complete? Plus OD Average row.

**2.2 SOUL PIECE VERIFICATION MATRIX** (lines 1766-1816): 5 soul pieces × 6 ODs, plus row for "#6+ (new OD pieces)." "Total violations: [must be 0]"

**2.3 DD INLINE CONSTRAINT MATRIX** (lines 1818-1875): Each DD constraint × 6 ODs with ✅/❌/N/A. Shows which ODs inherit which constraints. DD-006 Fractal applies to ALL. "Total violations: [must be 0]"

**2.4 RESEARCH FLOW ANALYSIS** (lines 1877-1949): THREE directions:
- INBOUND: R-1/R-5/R-3 application rates. KEY METRIC: "R-1 rate before OD: <3%, R-1 rate after OD: [X]% ← THIS IS R-1'S MOMENT"
- OUTBOUND: OD findings compiled with AD?/CD? flags. "Total new findings for AD/CD: [count]. All ADDED to RESEARCH-ACTIVE.md: [count]/[count] (must be 100%)"
- DOWNWARD: Component gaps with severity and inline section RESEARCH DEBT documentation status

**2.5 DD↔OD DESIGN FAMILY CHECK** (lines 1951-1956): 5 questions including "Could you mix DD and OD screenshots and they'd look like ONE system?"

**2.6 OD ORGANIZATIONAL PATTERN CATALOGUE** (lines 1958-2008): Table of all 6 patterns with: OD, Score, When to Use, DD Pattern It Pairs With, Components, Inline Section status.

**2.7 INLINE SECTION & THREADING COMPLETENESS CHECK** (lines 2009-2038): Per-OD: Exploration Inline Section Created? + organizational-patterns.md Entry? + Source CONSUMED BY Updated? With specific DD files per OD.

**Specific Revision:**
- ADD ALL 7 subsections as mandatory deliverables in the plan's synthesis phase
- The score table, soul matrix, and DD constraint matrix are QUANTITATIVE VERIFICATION — not optional summaries
- The research flow analysis MUST track inbound, outbound, AND downward directions
- The pattern catalogue is the precursor to organizational-patterns.md creation
- The threading completeness check is the final verification before moving to upward flow
- The plan must include the "R-1'S MOMENT" framing — R-1 application rate is the key success metric for OD

---

### REVISION 3.10 — MISSING: Upward Flow — 8 File Updates Including organizational-patterns.md (PROTO Phase 3)

**Plan Section:** Section 6 — mentions updating some files
**Source:** PROTO lines 2040-2398 (Phase 3)

**What the plan says:**
The plan mentions updating MASTER-STATE.md and creating a synthesis file but doesn't specify all 8 file updates or their exact content templates.

**What PROTO actually says (lines 2040-2398):**
PROTO Phase 3 defines 8 SPECIFIC file updates:

**3.1 MASTER-STATE.md** (lines 2045-2068): ADD (not replace) a section with OD stats, DD bar comparison, research flow summary, files created, inline sections count, threading updates count. Plus "Next Action: AD" with what AD must consume.

**3.2 DISCOVERIES-LOG.md** (lines 2070-2100): ADD section with 7 subsections — Patterns Validated, What Didn't Work, DD→OD Transfer Results, New Soul Pieces, Research Breakthroughs, Outbound Findings for AD/CD, Component Gaps.

**3.3 RESEARCH-ACTIVE.md** (lines 2101-2122): ADD 3 sections — OD Inbound (finding statuses), OD Outbound (new findings for AD/CD), External Findings Integrated. Plus Cumulative Stats showing progression: "Before DD: 0% → After DD: ~76% → After OD: [X]% — Total corpus: 337 + [X] OD-generated"

**3.4 organizational-patterns.md** (lines 2124-2255): This is OD's UNIQUE DESIGN SYSTEM CONTRIBUTION. PROTO provides a COMPLETE file template including:
- FULL TIER A INLINE SECTION (70+ lines, lines 2126-2203) with all 10 sections
- Pattern catalogue with per-pattern structure: When to use, Pairs with, Structure, Components, Score, Key insight, DD constraints inherited, Source exploration path
- Pattern Selection Guide table (Content Type × Pattern × DD Density × Why × Source OD)
- Density Pairing Rules table — "These pairings are LOCKED. They were validated experimentally."

**3.5 SOUL-DISCOVERIES.md** (lines 2256-2268): IF new cognitive soul pieces discovered, add with category: COGNITIVE, truth, manifestation, discovered in, verified across, applies to AD/CD, status: CANDIDATE. "DO NOT create a separate OD-SOUL-PIECES.md file."

**3.6 OD-SYNTHESIS.md** (lines 2270-2351): CREATE with Tier C inline section. Template includes: Executive Summary, Research Flow, Organizational Patterns, Soul Pieces, DD Constraint Compliance, Lessons for AD, Lessons for CD, Files Created table.

**3.7 OD-RESEARCH-GATE.md** (lines 2353-2374): FINALIZE every finding with APPLIED/NOT APPLIED status. Gate Final Status with application rate and completeness counts.

**3.8 FOLDER-MAP.md** (lines 2376-2398): UPDATE with new files created — new organizational/ folder, organizational-patterns.md, OD-SYNTHESIS.md, OD-CHECKPOINT.md, OD-RESEARCH-GATE.md. Plus Context Recovery section for AD.

**Specific Revision:**
- ADD ALL 8 file updates as mandatory deliverables with their content templates
- organizational-patterns.md MUST include the full Tier A inline section template from PROTO — this is the HIGHEST IMPACT file OD produces
- The plan must include the Pattern Selection Guide and Density Pairing Rules tables — these are what AD/CD consume
- RESEARCH-ACTIVE.md update must track the progression metric (0% → 76% → [X]%)
- Every update is ADD (not replace) to preserve previous phase data
- The plan must include the anti-sprawl instruction: "DO NOT create separate files" for soul pieces, findings, or tracking

---

### REVISION 3.11 — MISSING: Phase 4 Final Checklist + 15 Non-Negotiable Execution Requirements (PROTO)

**Plan Section:** End section — mentions a basic completion checklist
**Source:** PROTO lines 2400-2462 (Phase 4 + Execution Requirements)

**What the plan says:**
The plan has a brief completion checklist.

**What PROTO actually says:**

**Phase 4 Final Checklist** (lines 2405-2441): A COMPREHENSIVE checklist organized into 12 categories:
- Orientation (Phase -1) — 4 items
- Skill — 4 items
- Research Gate — 5 items
- Inline Section Pre-Flight — 5 items
- Build Quality — 2 items
- Soul Compliance — 2 items
- DD Inline Constraint Compliance — 3 items
- Research Flow — 5 items
- Checkpoints — 4 items
- Quality — 3 items
- Files Created — 4 items
- Inline Sections — 5 items
- Bidirectional Threading — 8 items
- Upward Flow — 8 items
- Handoff to AD — 5 items

Plus final status line (lines 2436-2442): OD PHASE STATUS, FILES CREATED count, INLINE SECTIONS count, THREADING UPDATES count, RESEARCH ADDED count, READY FOR AD EXPLORATIONS YES/NO.

**15 Non-Negotiable Execution Requirements** (lines 2444-2461):
1. ORIENT FIRST — Read FOLDER-MAP.md, CLAUDE.md files
2. INVOKE /perceptual-deepening FIRST — skill is PERCEPTUAL TECHNIQUES, not a form
3. READ INLINE SECTIONS BEFORE TOUCHING FILES — extract constraints, answer diagnostic questions, plan inline sections to CREATE
4. PASS THE RESEARCH GATE — create OD-RESEARCH-GATE.md with finding-by-finding mapping. This is a DELIVERABLE.
5. SUB-AGENTS = LOOKING, NOT FILLING — "When the skill says squint, SQUINT"
6. CHECK DD INLINE CONSTRAINTS EVERY ITERATION — 0 violations for INCLUDE
7. CHECKPOINT = STATE SNAPSHOTS — score, key issue, hypothesis, screenshot, DD status
8. RESEARCH FLOWS TO CANONICAL LOCATIONS — NOT OD-FINDINGS.md, OD-SOUL-PIECES.md, COMPONENT-GAPS.md
9. 5 SOUL PIECES EVERY ITERATION + SEEK NEW ONES
10. DD LESSONS ARE INPUTS — DD-006 fractal everywhere, 34.5 bar
11. MINIMUM 3 ITERATIONS — convergence requires evidence
12. CREATE INLINE SECTIONS FOR ALL NEW FILES — Tier B for ODs, Tier A for patterns, Tier C for synthesis
13. UPDATE BIDIRECTIONAL THREADING — orphan files fragment the web
14. INTERWEAVE UPWARD — organizational-patterns.md is OD's unique contribution
15. SURVIVE COMPACTION — Recovery Protocol + state snapshots + inline sections

**Specific Revision:**
- ADD the full 12-category Phase 4 checklist to the plan — it's the comprehensive validation that nothing was missed
- ADD ALL 15 non-negotiable execution requirements as a prominent, early section (these should come BEFORE the detailed protocol, not after)
- These 15 rules should be the plan's EXECUTIVE SUMMARY — an agent who reads only these 15 rules would understand the essential constraints
- The plan's current checklist is far too sparse compared to PROTO's 67+ checkbox items

---

### REVISION 3.12 — MISSING: ARCH Part I Philosophy — Bidirectional Pattern + Identity Transfer + Compounding Loop

**Plan Section:** Section 2 "The Mesh" — superficial treatment
**Source:** ARCH Part I, Sections 1.1-1.3 (lines 38-271)

**What the plan says:**
The plan mentions "the mesh" and "knowledge web" but treats these as background context rather than the CORE PARADIGM that drives every protocol decision.

**What ARCH actually says:**

**Section 1.1 — Why Bidirectional Matters (lines 38-107):**
ARCH opens with an ANTI-PATTERN diagram (lines 50-57): Agent reads → Agent works → Output is orphan → No provenance → Knowledge lost. Then the ENFORCED PATTERN (lines 65-102): A 15-step flow from Traverser absorption → identity transfer → Builder construction → Research subagent → Builder iteration → Guardian validation → Auditor verification → Weaver threading → CONSUMED BY updates → Traverser re-deployment → LOOP CONTINUES.

Lines 105-106: "Every output is born connected. Every source knows about its consumers. Every finding has a home. The web grows denser with every cycle."

**Section 1.2 — Identity Transfer Principle (lines 108-137):**
> "You are not just passing information. You are transferring IDENTITY."
6 aspects: What this file IS, What it BUILT ON, What it MUST HONOR, What BREAKS, What CONSUMES it, What it DOESN'T KNOW

Lines 133-137: The difference between "build a task-based layout" and "build a task-based layout knowing that ISLANDS need 48px sparse surround, FRACTAL must be self-similar at all scales, border-radius is 0 because that's how this system expresses precision, and R1-015 only has 65% confidence" — that difference IS the identity transfer principle.

**Section 1.3 — The Compounding Loop (lines 139-271):**
- Full WORKED EXAMPLE diagram (~100 lines) showing OD-003 execution
- "Why this is a pipeline, not a mesh" (lines 253-257): execution is sequential because compounding is inherently serial
- "Why the pipeline GROWS a mesh" (lines 259-264): knowledge structure IS a mesh (bidirectional links)
- The EXCEPTION: genuine parallelism when two explorations test independent hypotheses (lines 266-271)

**Specific Revision:**
- ADD the ARCH anti-pattern/pattern diagrams (or summarize them) as the OPENING section of the plan — this is the WHY before the HOW
- Include the identity transfer principle with its 6 aspects — this drives everything from Traverser protocol to research prompts
- Include the pipeline/mesh distinction — sequential execution producing a mesh knowledge structure
- Include the worked example from ARCH Section 1.3 (OD-003) — it makes the abstract concrete
- The plan currently treats these as background; they should be FOUNDATIONAL — every protocol step should trace back to these principles

---

### REVISION 3.13 — INCOMPLETE: ARCH Team Overview + Async Communication + Lead Full Specification

**Plan Section:** Section 1 — agent table
**Source:** ARCH Section 2.2 (lines 560-709), Section 2.3 (lines 710-935)

**What the plan says:**
The plan has a table of agents with basic descriptions.

**What ARCH actually says:**

**Team Overview (lines 560-668):** A COMPLETE ASCII diagram showing:
- The Lead at center with 3 EMBEDDED functions (Guardian, Checkpoint Manager, Execution Journal)
- Subagent connections: Traverser (Task tool, read-only), Research Subagents (deployed BY Builder)
- Teammates: Builder + Weaver with specific responsibilities listed
- Auditor subagent (fresh eyes, 2 audit types)
- _execution-journal/ folder with all 5 files and lifecycle note
- Optional: Second Builder (Builder-B) for independent pairs
- Line 665-666: "The Guardian checks CLAIMS. The Auditor checks REALITY."

**Communication Pattern (lines 692-708):** Agent Teams are ASYNCHRONOUS:
> "Lead creates task in TaskList → Builder claims task → Builder works autonomously → Builder sends completion message → Lead processes when ready"
> "This is NOT RPC (call → wait → response). This is TASK-BASED coordination."
- Lead creates WELL-DEFINED tasks with ALL context included
- Teammates work AUTONOMOUSLY with full accumulated identity
- Completion signaled via messages, not return values

**Lead Full Specification (lines 710-935):**
- 14 specific responsibilities (lines 720-733)
- 4 explicit DOES NOTs (lines 735-740): doesn't build, doesn't thread, doesn't deploy research, doesn't read inline sections directly
- FULL Communication Pattern with EXAMPLES (lines 742-918): Pre-execution (Traverser deployment, Guardian validation, journal initialization with worked examples), Per-exploration (task creation, message to Builder with full identity, Builder completion, Guardian validation, Auditor BUILD AUDIT with specific prompt, Weaver assignment with message, Thread AUDIT, checkpoint + journal update), Next-exploration (Traverser re-deployment)
- Quality Gate checklist (lines 920-934): 9 items including journal updates

**Specific Revision:**
- ADD the async communication pattern — the plan assumes synchronous execution which is WRONG for Agent Teams
- Include the "This is NOT RPC" distinction from ARCH lines 704-708
- Include the Lead's 14 responsibilities AND 4 "DOES NOT" items — the plan currently overloads the Lead
- Include the Lead's communication pattern with examples — ARCH provides complete message templates showing exactly what context the Lead sends to Builder and Weaver
- Include the Lead's quality gate (9 items including journal updates) — the plan's gate is incomplete
- The plan must show the task-based coordination: Lead creates task with context → teammate works → teammate messages completion → Lead processes

---

### REVISION 3.14 — WRONG: Guardian is 5 checks, not 4. Plus Constraint Registry + 6 Gate Locations

**Plan Section:** Section 1 — mentions Guardian as 4-check loop
**Source:** ARCH Section 2.8 (lines 1758-1968)

**What the plan says:**
The plan and earlier revisions reference a "4-check enforcement loop" for the Guardian.

**What ARCH actually says (lines 1778-1968):**
The Guardian has **5 checks**, not 4:

**CHECK 1 — Provenance** (lines 1791-1802): Does output reference accumulated identity? Does it cite inline sections consumed? Does it acknowledge MUST HONOR constraints? Does it show provenance in BUILT ON?

**CHECK 2 — Constraints** (lines 1805-1816): Does output violate any MUST HONOR? Compare against EVERY constraint. Check soul piece compliance. Verify density pattern adherence.

**CHECK 3 — Research Debt** (lines 1819-1830): Does output acknowledge what it doesn't know? Is research debt identified? Are untested assumptions flagged? Are questions forwarded?

**CHECK 4 — Threading Readiness** (lines 1833-1844): Are all sources identified for BUILT ON? All consumers for CONSUMED BY? Can Weaver create a complete inline section from this?

**CHECK 5 — Visual Audit** (lines 1847-1862): Did Builder perform visual audit? Did Builder invoke /soul-audit? Are zone reports included? Are all 5 soul pieces confirmed PERCEPTUALLY? "FAIL → 'Visual audit incomplete. You MUST invoke /soul-audit and include zone reports. Looking at the output is not optional.'"

**Constraint Registry** (lines 1873-1915): Lead maintains an ACTIVE CONSTRAINT REGISTRY built from Traverser's accumulated identity, organized by source (DD-001, DD-003, DD-006, MASTER-SOUL-SYNTHESIS) with Constraint × Consequence tables. Plus Research Debt Active table.

**6 Gate Locations** (lines 1917-1967):
1. Before exploration build — after Traverser returns
2. After exploration build — after Builder reports
3. After inline section creation — after Weaver reports
4. Before handoff to next exploration — after all updates
5. Before handoff to AD phase — after ALL explorations
5.5. Comprehensive Audit — Auditor full system verification (final gate)

**Specific Revision:**
- CORRECT all references to "4-check" → "5-check" enforcement loop
- ADD CHECK 5 (Visual Audit) — this is what ensures the Builder actually LOOKED at the output
- ADD the full Constraint Registry concept from ARCH lines 1873-1915 — the Lead maintains this throughout execution
- ADD ALL 6 gate locations with their specific checklists
- Gate 5.5 (Comprehensive Audit) is especially important — it's a FINAL system-wide Auditor deployment before AD handoff
- The plan must show that Guardian + Auditor provide TWO-LAYER validation: Guardian checks CLAIMS (report-based), Auditor checks REALITY (file-based + visual)

---

### REVISION 3.15 — MISSING: ARCH Parallelism Windows 2-5 + Refinement Loop Visualization

**Plan Section:** Not addressed — plan assumes serial execution only
**Source:** ARCH Section 3.2 (lines 2650-2820), Section 3.3 (lines 2850-2944)

**What the plan says:**
The plan doesn't address parallelism opportunities beyond mentioning research subagents.

**What ARCH says (lines 2650-2820):**
ARCH defines 5 SPECIFIC parallelism windows (Window 1 was covered in Revision 2.9):

**Window 2 — Weaver + Lead Overlap** (lines 2650-2677): While Weaver threads OD-[N], Lead pre-deploys Traverser for DD foundation files. REQUIRES a SECOND Traverser deployment after Weaver finishes to capture OD-[N]'s inline section. Value: MODERATE (30-60 sec savings).

**Window 3 — Independent Exploration Pairs** (lines 2679-2718): OPTIONAL SECOND BUILDER (Builder-B). Both build different explorations simultaneously. CRITICAL CONSTRAINT: "ONLY works for genuinely independent explorations." Lead checks independence: "Does OD-[X]'s hypothesis require knowledge from OD-[Y]'s findings? If NO for both directions → independent." Team temporarily grows to 4 (Lead + Builder-A + Builder-B + Weaver). Builder-B shut down after parallel build.

**Window 4 — Perceptual Deepening** (lines 2720-2797): Builder deploys 5 zone sub-agents in parallel (ZONE-TYPOGRAPHY, ZONE-SPACING, ZONE-CONTAINERS, ZONE-HIERARCHY, ZONE-COMPOSITION). Three frequency levels: EVERY iteration (quick squint), AFTER final iteration (thorough /soul-audit), WHEN something feels off (deep /soul loop). "This requires NO additional teammates."

**Window 5 — Auditor + Traverser Overlap** (lines 2799-2820): Lead deploys Auditor (Thread Audit) AND Traverser (foundation pre-load) in parallel. Both are Task tool subagent calls. Value: MODERATE.

**Parallelism Summary Table** (lines 2821-2841): 5 windows × Uses × Value.

**Refinement Loop** (lines 2850-2944): A comprehensive visualization of TRAVERSE → ACCUMULATED IDENTITY → BUILD/RESEARCH/VALIDATE/AUDIT → NEW OUTPUT + EXTERNAL FINDING → THREAD → WEB GROWS + JOURNAL → TRAVERSE AGAIN. With 5 per-cycle outcomes (lines 2937-2942):
1. Web has more nodes than before
2. Accumulated identity is richer
3. Constraints are more validated
4. Research debt is smaller
5. Next exploration starts with MORE context

Line 2944: "The pipeline grows a mesh. The execution is linear. The knowledge structure is not."

**Specific Revision:**
- ADD ALL 5 parallelism windows with their value assessments and conditions
- Window 3 (independent pairs + optional Builder-B) is the most impactful — include the independence check protocol
- Window 4 (perceptual deepening zones) should cross-reference Revision 2.2 (Builder visual audit)
- Include the parallelism summary table from ARCH
- ADD the refinement loop visualization or its 5 per-cycle outcomes — this is the concrete promise of the compounding loop
- Include the journal parallelism note: "Journal writes do NOT create contention — each agent writes to its OWN log file"

---

## BATCH 4: INTEGRATION POINTS, FAILURE MODES, SUCCESS CRITERIA, APPENDICES (ARCH + PROTO)

### REVISION 4.1 — MISSING: ARCH Part IV Section 4.1 — Inline Section Update Triggers (8 Triggers, ALL Through Weaver)

**Plan Section:** Weaver responsibilities are underspecified
**Source:** ARCH Part IV Section 4.1 (lines 2952-2971), PROTO Appendix D Bidirectional Update Protocol (lines 3173-3194)

**What the plan says:**
The plan mentions the Weaver updates inline sections but doesn't specify WHEN updates are triggered or the principle that ALL updates flow through one agent.

**What ARCH actually says (lines 2952-2971):**
ARCH defines 8 SPECIFIC inline section update triggers, ALL handled by the Weaver:

| Trigger | What Gets Updated | Who Does It |
|---------|-------------------|-------------|
| New exploration created | Create new inline section (Tier B) | Weaver |
| Exploration consumes source | Source's CONSUMED BY table | Weaver |
| External finding integrated | RESEARCH-ACTIVE.md + source BUILT ON | Weaver (on Lead's instruction) |
| New finding discovered | RESEARCH-ACTIVE.md entry | Weaver |
| Score improves from iteration | Update exploration's inline PURPOSE | Weaver (after final iteration) |
| Research debt identified | Source's RESEARCH DEBT section | Weaver |
| Constraint violated (fixed) | Note in relevant inline's MUST HONOR | Weaver (on Lead's instruction) |
| Pattern validated | organizational-patterns.md + source CONSUMED BY | Weaver |

ARCH lines 2968-2971: "In v4.0, ALL update triggers flow through the Weaver. The Builder and Lead report what needs updating; the Weaver does the actual file editing. This prevents concurrent write conflicts and keeps threading responsibility in one place."

**What PROTO adds (lines 3173-3194):**
PROTO Appendix D provides the SPECIFIC bidirectional update protocol after completing each OD:
- For each source in BUILT ON → update that source's CONSUMED BY table (Section 8)
- If source is T1 LOCKED → "Do NOT modify the file directly" → "Document in OD-CHECKPOINT.md" (PROTO line 3191)

**Specific Revision:**
- ADD the complete 8-trigger table from ARCH 4.1 to the plan
- Establish the principle: ALL file modifications to inline sections flow through the Weaver — Builder and Lead REPORT, Weaver WRITES
- Include the T1 LOCKED handling rule from PROTO line 3191-3194: note in checkpoint, don't modify
- When the Lead **creates the agent team** and spawns the Weaver teammate, the Weaver's prompt must include these 8 trigger conditions
- **CHECKPOINT:** After establishing update trigger rules, checkpoint the plan state: "Update trigger protocol defined — 8 triggers, all through Weaver"

---

### REVISION 4.2 — MISSING: ARCH Part IV Section 4.2 — Auditor Subagent Deployment Triggers (5 Triggers, BLOCKING Gate)

**Plan Section:** Auditor is mentioned but deployment conditions are unspecified
**Source:** ARCH Part IV Section 4.2 (lines 2973-2992)

**What the plan says:**
The plan mentions auditing generically. It does not specify the 5 mandatory deployment triggers or the BLOCKING nature of the Auditor gate.

**What ARCH actually says (lines 2973-2992):**
5 MANDATORY Auditor deployment triggers — "NO EXCEPTIONS" (ARCH line 2975):

| Trigger | Audit Type | What Auditor Checks |
|---------|------------|---------------------|
| Builder reports exploration complete | BUILD AUDIT | CSS constraints, soul pieces, structure, noise |
| Weaver reports threading complete | THREAD AUDIT | CONSUMED BY entries, inline section, RESEARCH-ACTIVE |
| Builder-B reports complete (parallel) | BUILD AUDIT | Same as Builder, independent instance |
| Weaver reports synthesis threading done | THREAD AUDIT | Tier A section, all OD CONSUMED BY entries |
| Before AD handoff (final gate) | COMPREHENSIVE AUDIT | All 6 explorations + all threading + full web integrity |

ARCH lines 2985-2987: "The Auditor is NOT optional. It is a BLOCKING gate. The pipeline does not advance until the Auditor returns PASS. If the Auditor returns FAIL, the responsible teammate fixes the issue, and the Lead deploys a NEW Auditor instance (fresh eyes again)."

ARCH lines 2989-2992: The comprehensive audit before AD handoff "is the most thorough: a single Auditor subagent reads ALL 6 exploration files, ALL source CONSUMED BY tables, the complete RESEARCH-ACTIVE.md, and the organizational-patterns.md."

**Specific Revision:**
- ADD the 5-trigger deployment table to the plan as a mandatory protocol
- The plan must state: "Auditor is a BLOCKING gate — pipeline does NOT advance until PASS" (ARCH line 2985)
- When the Lead **creates the agent team**, the Lead must know these 5 triggers by heart — the Lead deploys Auditor via Task tool after EACH trigger
- Include the NEW instance principle: failed audit → fix → deploy NEW Auditor (fresh eyes again, no accumulated bias)
- **CHECKPOINT:** After each Auditor deployment, the Lead must update both OD-CHECKPOINT.md (structural state) AND _execution-journal/CURRENT-STATE.md (contextual state) with the Auditor's pass/fail result and specific findings

---

### REVISION 4.3 — MISSING: ARCH Part IV Section 4.3 — Research Subagent Deployment (Builder's Decision Process)

**Plan Section:** Research deployment is vaguely described
**Source:** ARCH Part IV Section 4.3 (lines 2994-3027), PROTO Section 4 (lines 448-565)

**What the plan says:**
The plan mentions the Builder deploying research subagents but doesn't include the decision flowchart or the score-based trigger system.

**What ARCH actually says (lines 2994-3027):**
The Builder — NOT the Lead — makes research deployment decisions. ARCH line 2997: "The Lead does NOT mediate research deployment."

**Trigger table** (lines 2999-3006):
| Trigger | Subagent Type | Priority |
|---------|---------------|----------|
| Research debt marked "small sample" | VALIDATION (EXTERNAL-V-###) | HIGH |
| Constraint has low confidence | VALIDATION (EXTERNAL-V-###) | HIGH |
| Iteration score stuck < 34.5 | GAP-FILL (EXTERNAL-G-###) | HIGH |
| Finding has no external support | VALIDATION (EXTERNAL-V-###) | MEDIUM |
| New hypothesis needs grounding | EXTENSION (EXTERNAL-E-###) | MEDIUM |
| Question forwards to future phase | GAP-FILL (mark for later, don't deploy) | LOW |

**Builder's decision flowchart** (ARCH lines 3010-3027):
```
After iteration scoring:
  IF score < 34.5 AND weakness identified:
    1. Can I fix this with existing accumulated identity?
       → YES: Iterate without research
       → NO: Continue to 2
    2. Is this weakness addressable by external research?
       → YES: Deploy Research subagent with context-rich prompt
       → NO: Flag to Lead as structural issue
    3. Are there MULTIPLE independent weaknesses?
       → YES: Deploy multiple Research subagents IN PARALLEL
       → NO: Deploy single Research subagent
  IF score ≥ 34.5:
    → Report completion to Lead (no research needed)
```

**What PROTO adds (lines 508-520):**
PROTO Section 4 establishes the BIDIRECTIONAL research flow principle:
> "Research doesn't just flow IN to OD. OD generates NEW research that flows OUT."
Inbound: R-1 findings → OD builds. Outbound: OD discoveries → stored in RESEARCH-ACTIVE.md → flagged as INPUT to AD and CD.

**Specific Revision:**
- ADD the complete trigger table and decision flowchart from ARCH 4.3
- The plan must establish: Builder deploys Research subagents DIRECTLY via Task tool — "Lead does NOT mediate" (ARCH line 2997)
- Include parallel deployment option: "multiple Research subagents IN PARALLEL" for multiple independent weaknesses
- Cross-reference PROTO Section 4 bidirectional flow: every research finding flows somewhere — outbound findings get OD-F-### IDs
- When the Lead **spawns the Builder teammate**, the Builder's initial prompt must include this decision flowchart
- **CHECKPOINT:** After each research subagent deployment, the Builder must log in _execution-journal/builder-log.md: what weakness triggered it, what prompt was sent, what findings returned, how they were integrated

---

### REVISION 4.4 — MISSING: ARCH Part IV Section 4.4 — Threading Verification Points (6 Detailed Gate Checklists)

**Plan Section:** Gates are mentioned vaguely
**Source:** ARCH Part IV Section 4.4 (lines 3029-3192)

**What the plan says:**
The plan mentions "gates" without specifying the 6 gate locations, their specific checklists, or who runs them (Guardian vs Auditor).

**What ARCH actually says (lines 3034-3192):**
ARCH provides the MOST DETAILED section in the entire document — 160 lines of specific gate checklists. This is the operational backbone of the pipeline. 6 gates with specific checklists:

**GATE 1 — Before exploration build** (lines 3035-3048): Lead runs after Traverser returns. Checks: accumulated identity loaded? All MUST HONOR registered? Research debt categorized? FAIL → re-deploy Traverser.

**GATE 2 — After exploration build** (lines 3050-3066): Lead runs Guardian. Checks: constraints honored? Soul pieces visible? Score ≥ 34.5? Research integrated? Research debt identified? FAIL → Lead messages Builder: "Re-iterate with [specific fix]."

**GATE 2.5 — Build Audit** (lines 3068-3096): Lead deploys Auditor subagent. STRUCTURAL CHECKS: CSS constraints in actual HTML, file location. VISUAL CHECKS: screenshot via Playwright MCP, SQUINT TEST ("Does this FEEL sharp, archival?"), soul pieces PERCEPTUALLY confirmed (SP#1 through SP#5 with perceptual language). FAIL → Lead messages Builder with file:line findings.

**GATE 3 — After inline section creation** (lines 3098-3115): Lead runs after Weaver reports. Checks: complete 10-section inline? All source CONSUMED BY updated? RESEARCH-ACTIVE updated? FAIL → Lead messages Weaver with specific gaps.

**GATE 3.5 — Thread Audit** (lines 3117-3134): Lead deploys Auditor. Checks: CONSUMED BY entries ACTUALLY exist? Inline section ACTUALLY complete? RESEARCH-ACTIVE ACTUALLY has entries? No duplicates? No broken paths? FAIL → Weaver fixes, Lead deploys NEW Auditor.

**GATE 4 — Before handoff to next exploration** (lines 3136-3152): Lead runs. Checks: all threading confirmed by Auditor? Checkpoint written? Journal updated (CURRENT-STATE.md, lead-log.md, decisions.md)? Builder-log and weaver-log updated? Accumulated identity ready for re-traversal? FAIL → resolve before proceeding. "Does NOT start next exploration with incomplete threading." (ARCH line 3151)

**GATE 5 — Before AD handoff** (lines 3154-3171): Lead runs after ALL explorations done. Checks: all 6 Tier B inline sections? All ≥ 34.5? organizational-patterns.md Tier A? All findings logged? All research debt forwarded? Full provenance chain intact? Journal CURRENT-STATE.md has final synthesis?

**GATE 5.5 — Comprehensive Audit** (lines 3173-3191): Lead deploys Auditor for FINAL system verification. This reads ALL 6 files, ALL CONSUMED BY tables, complete RESEARCH-ACTIVE.md. "Does NOT hand off to AD until Auditor returns PASS." (ARCH line 3190)

**Specific Revision:**
- ADD ALL 6 gate checklists verbatim to the plan — these are the OPERATIONAL PROTOCOL that the executing agent team follows
- For each gate, specify WHO runs it (Guardian embedded in Lead vs Auditor subagent)
- The plan must clearly distinguish: Guardian checks CLAIMS (report-based), Auditor checks REALITY (file-based + visual) — ARCH line 665-666
- Gate 2.5's visual checks (squint test, perceptual soul piece confirmation) are especially critical — reference PROTO Section 5 "The Skill Is Not a Template" (lines 571-597)
- The plan must include the FAIL → FIX → RE-AUDIT cycle for Auditor gates (ARCH lines 3094-3096, 3132-3134)
- **CHECKPOINT:** After EVERY gate pass, the Lead must rigorously update: (1) OD-CHECKPOINT.md threading status table, (2) _execution-journal/CURRENT-STATE.md with current mental model, (3) _execution-journal/lead-log.md with gate result and emerging patterns. This checkpoint discipline ensures that if context compacts between gates, the agent team can recover to the exact gate position.

---

### REVISION 4.5 — MISSING: ARCH Part V Section 5.1 — Common Failure Modes Table (20+ Failure Modes)

**Plan Section:** No failure mode documentation exists
**Source:** ARCH Part V Section 5.1 (lines 3196-3221)

**What the plan says:**
The plan has no failure mode table or recovery procedures for common problems.

**What ARCH actually says (lines 3200-3221):**
ARCH defines 20+ specific failure modes in a table with: Failure | Detection | Recovery | Who Acts. Critical examples:

- "Traverser subagent skips inline section" → Lead re-deploys Traverser with explicit file list
- "Builder ignores constraint" → Lead messages Builder: "Re-iterate honoring [constraint]"
- "Builder deploys generic research prompt" → Results can't integrate → Builder re-deploys with context-rich prompt (see Section 2.7)
- "Weaver forgets CONSUMED BY update" → Lead messages Weaver: "Complete bidirectional update for [file]"
- "Checkpoint stale after compaction" → Follow recovery protocol (ARCH Section 5.2)
- "Guardian passes but Auditor fails (discrepancy)" → "Auditor is authoritative (reads files, not reports). Lead trusts Auditor." (ARCH line 3214)
- "CURRENT-STATE.md not updated after operation" → "Auditor or teammate notices stale state" → "Lead writes immediately — every checkpoint MUST have journal update" (ARCH line 3216)
- "Context compacts without CURRENT-STATE.md update" → "This is the WORST failure" (ARCH line 3220) → "Prevention: Lead updates CURRENT-STATE.md BEFORE any planned break"
- "Journal grows too large (>500 lines per log)" → "Lead archives older entries to _execution-journal/archive/" (ARCH line 3219)

**Specific Revision:**
- ADD the complete 20+ failure mode table to the plan — this is the TROUBLESHOOTING GUIDE for the agent team
- Highlight the WORST failure: context compaction without CURRENT-STATE.md update (ARCH line 3220) — prevention is updating BEFORE breaks
- Highlight the discrepancy rule: Auditor is ALWAYS authoritative over Guardian (ARCH line 3214)
- When the Lead **creates the agent team**, the Lead must internalize this failure table as a diagnostic reference
- **CHECKPOINT:** After each failure recovery, the Lead must log: (1) what failed, (2) how detected, (3) what recovery action, (4) result — this goes in _execution-journal/lead-log.md AND _execution-journal/decisions.md if a significant fork occurred

---

### REVISION 4.6 — DEEPENING: ARCH 5.2 Compaction Recovery — Detailed 9-Step Protocol (Deepens Revision 3.1)

**Plan Section:** Recovery protocol needs the full operational detail
**Source:** ARCH Part V Section 5.2 (lines 3222-3310), PROTO lines 17-76

**What Revision 3.1 established:**
Revision 3.1 covered the HIGH-LEVEL recovery concept: Journal FIRST → Checkpoint SECOND → Web THIRD → Resume FOURTH. And the PROTO 12-step recovery.

**What ARCH provides in OPERATIONAL DETAIL (lines 3228-3310):**
ARCH's 4-phase recovery is broken into 9 specific steps:

**PHASE 1 — CONTEXTUAL RECOVERY** (steps 1-3):
1. Lead reads _execution-journal/CURRENT-STATE.md → "WHERE we are, WHAT we're doing, WHY we're doing it, WHAT the mental model is" (ARCH line 3235-3237)
2. Lead reads _execution-journal/lead-log.md → "Pattern observations, gate results, decision rationale" — reconstructs THOUGHT PROCESS (ARCH lines 3242-3244)
3. Lead reads _execution-journal/decisions.md → "What alternatives were considered, why this path was chosen" — reconstructs REASONING (ARCH lines 3247-3248)

**PHASE 2 — STRUCTURAL RECOVERY** (step 4):
4. Lead reads OD-CHECKPOINT.md → current state, completed explorations, threading status, accumulated identity snapshot (ARCH line 3254-3256)

**PHASE 3 — IDENTITY RECOVERY** (steps 5-6):
5. Lead deploys Traverser subagent: "Absorb all files listed in checkpoint's 'Completed Explorations'" → rebuilds ACCUMULATED IDENTITY from current web state (ARCH lines 3262-3265)
6. Lead rebuilds constraint registry from accumulated identity (ARCH lines 3267-3268)

**PHASE 4 — RESUMPTION** (steps 7-9):
7. Lead resumes from last checkpoint WITH CONTEXTUAL FRAMING from CURRENT-STATE.md in the message to Builder — ARCH lines 3277-3282 provide exact example: "We are building OD-004 because OD-003 showed that spacing hierarchy is the organizing principle."
8. Lead verifies threading status matches checkpoint → if mismatch: assigns Weaver to complete missing updates (ARCH lines 3284-3286)
9. Lead verifies journal is current → if CURRENT-STATE.md seems stale: Lead updates immediately (ARCH lines 3288-3291)

**CRITICAL ORDERING** (ARCH lines 3294-3301):
> "Journal FIRST (mental model) → Checkpoint SECOND (position) → Web THIRD (accumulated identity) → Resume FOURTH (with full context)"
> "NOT: Checkpoint → Web → Resume (this loses mental model)"

**Why this works** (ARCH lines 3302-3309): The WEB stores identity, the CHECKPOINT stores position, the JOURNAL stores understanding. All three layers needed for FULL recovery.

**Specific Revision:**
- REPLACE any vague "recovery: read checkpoint" language with the FULL 9-step operational protocol
- The plan must specify the EXACT reading order and what each file provides
- Include the worked example of contextual framing (ARCH lines 3277-3282) — this is what the Lead sends to the Builder after recovery
- When the agent team recovers from compaction, the Lead MUST follow this 9-step protocol — no shortcuts
- **CHECKPOINT:** The recovery protocol itself IS a checkpoint mechanism. After completing recovery, the Lead must write a FRESH CURRENT-STATE.md confirming: "Recovery complete. Position: [X]. Mental model: [Y]. Next action: [Z]." This creates a clean state for the next potential compaction.

---

### REVISION 4.7 — MISSING: ARCH 5.3 Teammate Lifecycle Management — How the Agent Team Is Managed

**Plan Section:** No lifecycle management exists
**Source:** ARCH Part V Section 5.3 (lines 3312-3343)

**What the plan says:**
The plan doesn't address agent team lifecycle — spawning, assignment, idle states, or shutdown.

**What ARCH actually says (lines 3317-3343):**

**SPAWNING:** "Lead spawns Builder and Weaver at session start (or as needed). Both receive their role descriptions in their initial prompts. Both are told: 'Check TaskList for assignments. Message Lead when done.'" (ARCH lines 3319-3321)

**ASSIGNMENT:** "Lead creates tasks in TaskList. Lead sends messages to teammates with full context. Teammates claim tasks and work autonomously." (ARCH lines 3323-3326)

**IDLE:** "After each turn, teammates go idle. This is expected. Lead does NOT treat idle as an error. Lead sends messages when there's new work." (ARCH lines 3328-3331)

**OPTIONAL SECOND BUILDER:** "Lead spawns Builder-B only when independent exploration pairs identified. Builder-B is shut down after parallel build completes. Default team size: 3 (Lead + Builder + Weaver)." (ARCH lines 3333-3336)

**SHUTDOWN:** "When OD phase is complete, Lead sends shutdown requests. Teammates confirm shutdown. Lead cleans up team resources. (Or: Lead reassigns teammates for AD phase with fresh prompts.)" (ARCH lines 3338-3342)

**Specific Revision:**
- ADD a complete "Agent Team Lifecycle" section to the plan with all 5 phases: SPAWN → ASSIGN → IDLE (normal) → OPTIONAL SCALE → SHUTDOWN
- Use explicit team-invoking language throughout: "The Lead **creates an agent team** using TeamCreate with team_name: 'od-execution'" → "The Lead **spawns the Builder teammate** via Task tool with team_name" → "The Lead **spawns the Weaver teammate**"
- Include the IDLE clarification: "Teammates going idle between turns is NORMAL — the Lead sends messages when new work is available"
- Include the optional Builder-B scaling: "Lead **spawns a second Builder** (Builder-B) ONLY when genuinely independent explorations are identified" — team grows temporarily from 3 to 4
- Include SHUTDOWN: "Lead sends shutdown_request to Builder and Weaver. Teammates confirm. Lead cleans up team resources using TeamDelete."
- **CHECKPOINT:** After spawning the agent team, the Lead must checkpoint: "Team spawned — Lead + Builder + Weaver active. Builder-B: not spawned. Team name: od-execution." This state goes into both OD-CHECKPOINT.md and CURRENT-STATE.md.

---

### REVISION 4.8 — MISSING: ARCH Part VI Section 6.1 — Success Criteria (8 Categories of "Working")

**Plan Section:** No success criteria exist
**Source:** ARCH Part VI Section 6.1 (lines 3349-3418), PROTO Section 3 quality bar (lines 402-420)

**What the plan says:**
The plan has no formal success criteria — no way to know if the pipeline IS working.

**What ARCH actually says (lines 3349-3418):**
ARCH defines 8 CATEGORIES of success with specific observable behaviors:

**1. "Every output has provenance"** (lines 3351-3355): Every exploration has BUILT ON, every finding links to source by ID, every external finding links to internal, no orphan outputs.

**2. "Every output updates the web"** (lines 3357-3361): Every new file triggers CONSUMED BY updates, every finding in RESEARCH-ACTIVE.md, every pattern in organizational-patterns.md.

**3. "Research compounds, not just accumulates"** (lines 3363-3367): Each exploration's identity is RICHER, external findings enrich identity, Builder iterations show measurable improvement from research, AD inherits richer context (provable via traversal comparison).

**4. "Constraints are enforced, not just documented"** (lines 3369-3373): Guardian BLOCKS violations, every failure results in corrective action, research debt tracked.

**5. "The loop never stops until the phase is done"** (lines 3375-3381): Continuous Traverser, Builder, Research, Weaver deployment. Checkpoint + Journal reflect current state after every significant operation.

**6. "Every output is visually audited — consistently"** (lines 3383-3390): Builder squint test EVERY iteration, full /soul-audit after FINAL, 5 zone sub-agents, all 5 soul pieces PERCEPTUALLY confirmed, Guardian CHECK 5 BLOCKS without visual audit. "Visual auditing is a HABIT embedded in the iteration loop, not a ceremony at the end." (ARCH line 3390)

**7. "Every output is independently verified with fresh eyes"** (lines 3392-3402): Build Audit (structural + visual), Thread Audit, Auditor reads ACTUAL FILES, Auditor has ZERO accumulated context, Guardian + Auditor = two-layer validation. "When Guardian passes but Auditor fails, Auditor is authoritative." (ARCH line 3400)

**8. "Context survives compaction"** (lines 3404-3411): CURRENT-STATE.md always current, logs capture WHY not just WHAT, recovery reads journal FIRST. "The team can resume not just POSITION but UNDERSTANDING after compaction." (ARCH line 3411)

**PLUS efficiency criterion** (lines 3413-3418): 3 teammates, 3 subagent protocols, embedded functions. Parallelism exploited where genuine, sequential where compounding requires.

**What PROTO adds (lines 402-420):**
PROTO Section 3 provides the QUANTITATIVE quality bar from DD achievements: Average score 34.5/40, INCLUDE rate 100%, soul compliance 100%, research application ≥80%.

**Specific Revision:**
- ADD ALL 8 success criteria categories to the plan as the "Definition of Done" for the OD phase
- Include the observable behaviors for each category — these are HOW the agent team knows it's succeeding
- Include the PROTO quality bar numbers as quantitative targets alongside the qualitative criteria
- The plan must frame these as the agent team's operating principles — every decision the team makes should advance these 8 criteria
- **CHECKPOINT:** At the midpoint (after OD-003) and endpoint (after OD-006), the Lead must evaluate against all 8 criteria and log the assessment in _execution-journal/lead-log.md. This midpoint checkpoint enables course correction before the second half.

---

### REVISION 4.9 — MISSING: ARCH Part VI Section 6.2 — Final Verification Checklist (30+ Items)

**Plan Section:** Final checklist is far too sparse
**Source:** ARCH Part VI Section 6.2 (lines 3420-3453), PROTO Phase 4 (lines 2405-2441)

**What the plan says:**
The plan has a brief completion checklist with ~10 items.

**What ARCH actually says (lines 3424-3453):**
ARCH provides a 30+ item checklist that is the DEFINITIVE completion gate:

```
□ All 6 explorations have Tier B inline sections
□ All explorations score ≥ 34.5/40
□ organizational-patterns.md has Tier A inline section
□ All DD files' CONSUMED BY list their OD consumers
□ All external findings integrated into RESEARCH-ACTIVE.md
□ All findings have provenance chains (no orphans)
□ OD-SYNTHESIS.md captures lessons for AD
□ Research debt forwarded to appropriate phases
□ Threading checklist complete for every file
□ Checkpoint ready for AD phase handoff
□ Accumulated identity comprehensive and recoverable
□ All T1 LOCKED pending updates documented
□ Lead's constraint registry matches web state
□ All Build Audits passed — structural AND visual (one per exploration)
□ All /soul-audit invocations completed (one per exploration, Builder)
□ All 5 zone reports confirmed for every exploration
□ All squint tests passed — every exploration FEELS like KortAI
□ All Thread Audits passed (one per exploration)
□ Comprehensive Audit passed (final gate before AD handoff)
□ CURRENT-STATE.md has final OD synthesis
□ lead-log.md complete — all gates, decisions, patterns
□ builder-log.md complete — all iterations, insights, research
□ weaver-log.md complete — all threading operations, edge cases
□ decisions.md complete — all significant decision points
□ Journal archived or ready for AD handoff
□ Builder and Weaver shut down (or reassigned)
□ Team resources cleaned up
```

**What PROTO adds (lines 2405-2441):**
PROTO Phase 4 provides a 67+ item checklist organized by 12 categories: Orientation, Skill, Research Gate, Inline Section Pre-Flight, Build Quality, Soul Compliance, DD Inline Constraint Compliance, Research Flow, Checkpoints, Quality, Files Created, Inline Sections, Bidirectional Threading, Upward Flow, Handoff to AD. Plus final status counts.

**Specific Revision:**
- MERGE the ARCH 30+ item checklist and the PROTO 67+ item checklist into a single comprehensive final verification
- The plan must include BOTH checklists — ARCH focuses on pipeline health, PROTO focuses on protocol compliance
- Group items by category (matching PROTO's 12-category structure but incorporating ARCH's journal/team items)
- Include PROTO's final status line format (lines 2436-2442): "OD PHASE STATUS: [COMPLETE/INCOMPLETE], FILES CREATED: [count], INLINE SECTIONS: [count], THREADING UPDATES: [count], RESEARCH ADDED: [count], READY FOR AD: [YES/NO]"
- The agent team Lead must run this checklist as the FINAL gate before AD handoff — every □ must be ✓
- **CHECKPOINT:** The Lead must write a FINAL checkpoint after completing this checklist: both OD-CHECKPOINT.md (final structural state) and CURRENT-STATE.md (final contextual synthesis including lessons for AD). This is the LAST write before agent team shutdown.

---

### REVISION 4.10 — MISSING: ARCH Appendix A + PROTO Appendix A — Inline Section Templates by Tier (A/B/C)

**Plan Section:** No inline section templates included
**Source:** ARCH Appendix A (lines 3459-3524) — Tier B template, PROTO Appendix A (lines 2463-2569) — Tier A, B, C templates

**What the plan says:**
The plan mentions creating inline sections but provides no template for any tier.

**What ARCH provides (lines 3464-3524):**
ARCH Appendix A provides the COMPLETE Tier B template for explorations — 10 sections, every field mandatory:
1. WHY THIS EXISTS (2-4 sentences)
2. THE QUESTION THIS ANSWERS (single question in quotes)
3. STATUS (ACTIVE/SUPERSEDED | LOCKED/EDITABLE | size)
4. SOUL ALIGNMENT (SP#1 through SP#5, each with specific manifestation + CANDIDATE marker)
5. BUILT ON (table: Source | Role | Key Values | Path — minimum 5 entries for explorations)
6. MUST HONOR (table: Constraint | Source | Consequence — minimum 3 for explorations)
7. WHAT BREAKS IF THIS CHANGES (specific files + blast radius)
8. CONSUMED BY (table: Consumer | How It Uses This File)
9. RESEARCH DEBT (specific items + forwards-to phase)
10. DIAGNOSTIC QUESTIONS (Q1-Q5, each testing understanding)

**What PROTO provides (lines 2463-2569):**
PROTO Appendix A provides templates for ALL THREE tiers:

**Tier A** (lines 2468-2537): For organizational-patterns.md, high-impact files consumed by 5+ others. All 10 sections, comprehensive detail. Size: 60-100 lines. Minimum 3-5 sources for BUILT ON, 3-4 constraints for MUST HONOR, 3-5 consumers.

**Tier B** (lines 2538-2542): For OD-001 through OD-006, research files, files consumed by 2-4 others. All 10 sections, moderate detail. Size: 40-60 lines.

**Tier C** (lines 2543-2569): For OD-CHECKPOINT.md, OD-SYNTHESIS.md, operational files consumed by 1 other. Sections 1, 3, 5, 8 ONLY. Size: 15-25 lines.

**Specific Revision:**
- ADD ALL THREE tier templates to the plan — the executing agent team needs these as copy-paste references
- Include PROTO's tier classification rules: "Tier A = T1 authority files, pattern catalogues, files consumed by 5+; Tier B = explorations, consumed by 2-4; Tier C = supporting files, consumed by 1"
- Include PROTO's OD-specific assignments (PROTO lines 3079-3081): organizational-patterns.md → Tier A, OD-001 through OD-006 → Tier B, OD-CHECKPOINT.md → Tier C
- When the Lead **spawns the Weaver teammate**, the Weaver's prompt must include or reference these templates
- **CHECKPOINT:** After each inline section creation, the Weaver must verify tier correctness and log in _execution-journal/weaver-log.md: "Created [tier] inline section for [file]. Sections populated: [list]. Sources in BUILT ON: [count]."

---

### REVISION 4.11 — MISSING: ARCH Appendix B + PROTO Appendix B — Research Subagent Prompt Template (Context-Rich)

**Plan Section:** Research subagent prompts not specified
**Source:** ARCH Appendix B (lines 3528-3590), PROTO Appendix B (lines 2571-2655)

**What the plan says:**
The plan mentions deploying research subagents but provides no prompt template — risking generic searches that produce orphan findings.

**What ARCH provides (lines 3534-3590):**
ARCH Appendix B provides the COMPLETE context-rich prompt template structure:

```markdown
## RESEARCH SUBAGENT MISSION: [Specific mission]

### CONTEXT I CARRY (From Inline Section Traversal)
**What I Know:** [findings with source and confidence]
**What I'm Uncertain About:** [uncertainties with stakes]
**Constraints Active:** [from MUST HONOR tables]

### YOUR TASK
[Specific search targets — numbered]

### OUTPUT FORMAT
| Source | Finding | Relationship | Confidence Impact | Integration |
(VALIDATES/CHALLENGES/EXTENDS with specific internal finding)

### INTEGRATION PATH
If VALIDATES → EXTERNAL-V-### → update confidence → add to BUILT ON
If CHALLENGES → EXTERNAL-V-### with CHALLENGES → RESEARCH DEBT → reassess
If EXTENDS → EXTERNAL-E-### → evaluate for future phases

### DO NOT
- Return generic articles without integration path
- Skip ID assignment
- Return findings that can't link to accumulated identity
```

**What PROTO provides (lines 2597-2655):**
PROTO Appendix B provides the SAME template with a WORKED EXAMPLE (lines 2600-2654) showing a complete prompt for validating R1-015 (task-based organization) with accumulated context from DD-003, DD-006, OD-003 iteration 1.

**What PROTO Appendix E adds (lines 3198-3436):**
PROTO Appendix E provides the FULL PHILOSOPHY: why accumulated context matters, generic vs context-rich contrast, 3-step context extraction protocol, complete OD-003 worked example (80+ lines showing the compounding loop with 8 explicit steps), and the detailed EXTERNAL FINDING INTEGRATION PROTOCOL (lines 3387-3416) with 5 specific steps: assign ID → create RESEARCH-ACTIVE.md entry → update internal finding's inline section → note in current exploration's inline section → finding now has a home.

**Specific Revision:**
- ADD the complete prompt template from ARCH Appendix B to the plan
- ADD the worked example from PROTO Appendix E (lines 3255-3308) — this is the BEST illustration of context-rich research
- ADD the External Finding Integration Protocol from PROTO (lines 3387-3416) — the 5-step procedure for integrating findings back into the web
- Include the anti-pattern contrast from PROTO (lines 3203-3211): generic search → orphan results vs context-rich search → integrated findings
- When the Lead **creates the agent team** and the Builder deploys research subagents, the Builder MUST use this template — "generic prompts produce orphan findings" (ARCH line 3532)
- **CHECKPOINT:** After each research subagent returns, the Builder must log in _execution-journal/builder-log.md: "Research subagent returned [N] findings. IDs assigned: [list]. Integration status: [integrated/pending]. Confidence changes: [list]."

---

### REVISION 4.12 — MISSING: ARCH Appendix C — Accumulated Identity Snapshot Template (JSON Format)

**Plan Section:** Accumulated identity format is unspecified
**Source:** ARCH Appendix C (lines 3594-3758)

**What the plan says:**
The plan mentions "accumulated identity" but never specifies the structured format.

**What ARCH provides (lines 3601-3758):**
ARCH Appendix C provides a COMPLETE JSON snapshot template (~160 lines) showing the EXACT structured format for accumulated identity:

```json
{
  "snapshot_version": "2.0",
  "phase": "OD",
  "current_exploration": "OD-003",
  "current_iteration": 2,
  "architecture_version": "v4.0",
  "team": { "lead": "active", "builder": "active", "weaver": "active", "builder_b": "not_spawned" },
  "traversed_files": [ { "path": "...", "purpose": "...", "key_values": [...], "constraints_extracted": N } ],
  "active_constraints": [ { "constraint": "...", "source": "...", "consequence": "..." } ],
  "research_debt": [ { "item": "...", "status": "...", "forwards_to": "..." } ],
  "external_findings_integrated": [ { "id": "EXTERNAL-V-007", "validates": [...], "deployed_by": "Builder" } ],
  "soul_alignment": { "SP1_sharp_edges": "...", ... },
  "findings_generated": [ { "id": "OD-F-003", "provenance": [...], "applies_to": ["AD", "CD"] } ],
  "threading_status": { "files_with_inline_sections": [...], "sources_updated": [...] }
}
```

This is NOT just documentation — it's the OPERATIONAL FORMAT that:
- The Traverser subagent returns to the Lead (ARCH line 3596)
- The Lead stores in OD-CHECKPOINT.md for structural recovery (ARCH line 3597)
- The Lead contextualizes in CURRENT-STATE.md for contextual recovery (ARCH line 3598)

**Specific Revision:**
- ADD the JSON snapshot template to the plan — the executing agent team needs this format
- The plan must specify: Traverser RETURNS this format → Lead STORES it in checkpoint → Lead CONTEXTUALIZES it in journal
- The snapshot includes team status (line 3609-3613) — this enables recovery after compaction to know which teammates are active
- When the Lead deploys the Traverser subagent, the Traverser's prompt must instruct it to produce output in this structured format
- **CHECKPOINT:** After each Traverser deployment, the Lead must update OD-CHECKPOINT.md with the latest accumulated identity snapshot. This is the structural layer of the 3-layer persistence system.

---

### REVISION 4.13 — MISSING: ARCH Appendix D — Team Spawning Protocol (Exact Prompts for Builder, Weaver, Auditor)

**Plan Section:** Agent spawning is not specified
**Source:** ARCH Appendix D (lines 3763-3992+)

**What the plan says:**
The plan doesn't include any concrete team spawning protocol — no specific prompts, no tool invocations, no configurations.

**What ARCH provides (lines 3763-3992+):**
ARCH Appendix D is the MOST OPERATIONALLY CONCRETE section — exact tool invocations and prompts:

**Team Creation** (lines 3771-3775): Lead uses TeamCreate with team_name: "od-execution", description: "OD Execution Pipeline — 6 explorations with compounding identity"

**Spawning Builder** (lines 3779-3847): Lead uses Task tool with name: "builder", subagent_type: "general-purpose", team_name: "od-execution", mode: "plan". Prompt includes:
- YOUR ROLE: Create HTML explorations, receive accumulated identity, deploy research subagents, iterate to ≥ 34.5
- YOUR CONSTRAINTS: 9 constraints including "NEVER build without accumulated identity", "ALWAYS VISUALLY AUDIT every iteration", "ALWAYS write to _execution-journal/builder-log.md"
- VISUAL AUDITING PROTOCOL: After EVERY iteration (screenshot + squint), after FINAL iteration (full /soul-audit + 5 zone sub-agents)
- YOUR WORKFLOW: 13-step workflow from TaskList check through completion message

**Spawning Weaver** (lines 3849-3895): Lead uses Task tool with name: "weaver", subagent_type: "general-purpose", team_name: "od-execution", mode: "default". Prompt includes:
- YOUR ROLE: Thread explorations into web, create inline sections, update CONSUMED BY, update RESEARCH-ACTIVE
- YOUR CONSTRAINTS: 7 constraints including "ALWAYS create full 10-section inline headers", "ALWAYS write to _execution-journal/weaver-log.md"
- YOUR WORKFLOW: 10-step workflow

**Deploying Auditor (Build Audit)** (lines 3897-3948): Lead uses Task tool with name: "auditor-build-od-[N]", subagent_type: "general-purpose". Prompt includes STRUCTURAL CHECKS (CSS constraints, location) AND VISUAL CHECKS (screenshot, squint test, soul piece perceptual check SP#1-SP#5).

**Deploying Auditor (Thread Audit)** (lines 3950-3992): Lead uses Task tool with name: "auditor-thread-od-[N]". Prompt includes expected updates table and verification protocol.

**Deploying Auditor (Comprehensive Audit)** (lines 3994+): Lead uses Task tool with name: "auditor-comprehensive-od". Reads ALL 6 exploration files for final system verification.

**Specific Revision:**
- ADD the COMPLETE team spawning protocol to the plan — this is the "how to actually start" section
- Include EXACT prompts for Builder, Weaver, and all 3 Auditor types — these are copy-paste ready
- Use explicit team language: "**Create an agent team** using TeamCreate" → "**Spawn the Builder teammate**" → "**Spawn the Weaver teammate**" → "**Deploy Auditor subagent** via Task tool"
- The Builder prompt includes the visual auditing protocol AND the journal writing requirement — critical for perceptual deepening and compaction survival
- The Weaver prompt includes the inline section template reference AND journal writing
- The Auditor prompts include both STRUCTURAL and VISUAL checks
- **CHECKPOINT:** After spawning all teammates, the Lead must checkpoint: "Agent team created: od-execution. Builder spawned (general-purpose, plan mode). Weaver spawned (general-purpose, default mode). All teammates instructed to check TaskList and message Lead." This checkpoint goes in both OD-CHECKPOINT.md and CURRENT-STATE.md.

---

### REVISION 4.14 — MISSING: PROTO Appendices C + E — File Creation & Placement + Sub-Agent Paradigm (Anti-Sprawl + Growth Principle)

**Plan Section:** No file creation rules or anti-sprawl principle
**Source:** PROTO Appendix C (lines 2656-2979), PROTO Appendix E (lines 3198-3436)

**What the plan says:**
The plan doesn't address file creation discipline or the anti-sprawl principle. An executing agent might create file sprawl (OD-FINDINGS.md, OD-TRACKING.md, etc.).

**What PROTO Appendix C says (lines 2661-2979):**

**The Growth Principle** (PROTO lines 2662-2668): "Research GROWS. Findings EMERGE. New files are EXPECTED." But every new file must: (1) Have inline section, (2) Update source files, (3) Live in right location, (4) Be threaded bidirectionally. "A new file that follows these rules STRENGTHENS the web. A new file that ignores these rules FRAGMENTS the web." (PROTO line 2668/3500)

**Expected Files Table** (PROTO lines 2669-2705 / 3501-3531): OD-001 through OD-006 → explorations/organizational/ (Tier B), organizational-patterns.md → DESIGN-SYSTEM/patterns/ (Tier A), OD-SYNTHESIS.md → checkpoints/ (Tier C), OD-CHECKPOINT.md → checkpoints/ (no inline), OD-RESEARCH-GATE.md → checkpoints/ (no inline). Plus: new findings ADD to RESEARCH-ACTIVE.md (not new files), external findings ADD to RESEARCH-ACTIVE.md (not new files).

**Decision Tree** (PROTO lines 2707-2760 / 3533-3583): "You have NEW content to add. WHAT KIND?" — 8 branches covering explorations, findings, patterns, external findings, soul pieces, component gaps, AD questions, and catch-all. Each branch specifies CREATE vs ADD vs STOP.

**Canonical Locations Table** (PROTO lines 2762-2791 / 2937-2967): Content Type → Canonical Location → Notes. 9 content types mapped to specific files.

**Anti-Patterns** (PROTO lines 2792-2836 / 3584-3605): 6 specific anti-patterns: Create OD-FINDINGS.md (WRONG — use RESEARCH-ACTIVE.md), Create OD-TRACKING.md (WRONG — use OD-CHECKPOINT.md), Create exploration without inline section, Create file without updating sources, Put exploration in wrong folder, Create file without noting in FOLDER-MAP.md.

**"Should I Create a New File?" Test** (PROTO lines 2968-2979): 5 questions to ask before creating ANY new file. "If you MUST create a new file: It MUST have an inline section, It MUST be added to FOLDER-MAP.md, It MUST be added to the relevant CLAUDE.md."

**Anti-Sprawl Principle** (PROTO lines 2875-2895): LOCKED DECISIONS — "Single manifest for tracking" (not multiple tracking files), "Findings go in RESEARCH-ACTIVE.md" (not OD-FINDINGS.md), "Patterns go in patterns/*.md" (not checkpoints/), "Explorations go in explorations/[phase]/" (not root), "Checkpoints stay minimal" (state snapshots only).

**What PROTO Appendix E adds (lines 3198-3436):**
The complete sub-agent paradigm with accumulated context — philosophy, generic vs context-rich contrast, 3-step context extraction, compounding loop visualization, and the 5-step External Finding Integration Protocol.

**Specific Revision:**
- ADD the Growth Principle, Expected Files Table, Decision Tree, Canonical Locations, Anti-Patterns, and "Should I Create?" Test to the plan
- ADD the Anti-Sprawl Principle with its LOCKED DECISIONS table — these are NON-NEGOTIABLE
- The plan must frame this as: ENCOURAGE file creation that strengthens the web, DISCOURAGE file creation that fragments it
- ADD the complete External Finding Integration Protocol from PROTO Appendix E (lines 3387-3416)
- When the Lead **creates the agent team**, all teammates must understand these placement rules — especially the Builder (creates explorations) and Weaver (creates inline sections and updates)
- **CHECKPOINT:** After creating each new file, the Weaver must verify against the Threading Checklist (PROTO lines 3607-3631): (1) inline section created, (2) source files updated, (3) navigation updated, (4) tracking updated. Log this in _execution-journal/weaver-log.md.

---

### REVISION 4.15 — MISSING: PROTO Appendix D — Inline Section Specification (Exact Field-by-Field Structure + Concrete OD-001 Example)

**Plan Section:** No field-by-field inline section specification
**Source:** PROTO Appendix D (lines 2980-3194)

**What the plan says:**
The plan mentions inline sections generically but doesn't provide the exact field-by-field specification or a concrete filled-in example.

**What PROTO Appendix D provides (lines 2986-3060):**
PROTO Appendix D provides the EXACT structure that every inline section must follow — the Phase 2B standard:

**10 sections with specific instructions:**
1. WHY THIS EXISTS — "First sentence: what this file IS. Second sentence: what unique value it provides." (PROTO lines 2994-2996)
2. THE QUESTION THIS ANSWERS — "Single question in quotes. THE question someone would ask that leads them here." (PROTO lines 2998-3000)
3. STATUS — "[ACTIVE/SUPERSEDED/DEPRECATED] | [LOCKED/EDITABLE] | [size]. If LOCKED: what approval needed. If SUPERSEDED: path to replacement." (PROTO lines 3002-3005)
4. SOUL ALIGNMENT — "For each relevant soul piece, explain HOW this file honors it, not just that it does." + "If CANDIDATE soul pieces discovered: CANDIDATE — [name]: [description]" (PROTO lines 3007-3015)
5. BUILT ON — Table with Source | Role | Key Values | Path. "Include ALL files this file consumes. Minimum 2 for any significant file. For T1 authority files, always include MASTER-SOUL-SYNTHESIS.md." (PROTO lines 3017-3022)
6. MUST HONOR — Table with Constraint | Source | Consequence of Violation. "VISCERAL consequence — '47 files break' not 'violates principle.'" (PROTO lines 3024-3029)
7. WHAT BREAKS IF THIS CHANGES — "List specific files and systems, not abstract categories." + Blast radius. (PROTO lines 3031-3035)
8. CONSUMED BY — Table with Consumer | How It Uses This File. "This table gets UPDATED when new consumers emerge." (PROTO lines 3037-3042)
9. RESEARCH DEBT — "Known gaps, untested assumptions, questions that forward to next phase." (PROTO lines 3044-3048)
10. DIAGNOSTIC QUESTIONS — "3-5 questions that someone should be able to answer YES to before modifying this file." (PROTO lines 3050-3056)

**Tier Classification Rules** (PROTO lines 3061-3081):
- Tier A: T1 authority, pattern catalogues, consumed by 5+ → All 10 sections, 60-100 lines
- Tier B: Explorations, consumed by 2-4 → All 10 sections, 40-60 lines
- Tier C: Supporting, consumed by 1 → Sections 1, 3, 5, 8 only, 15-25 lines

**CONCRETE OD-001 EXAMPLE** (PROTO lines 3082-3172): A COMPLETE, filled-in Tier B inline section for OD-001-conversational.html — 90 lines showing exactly what every field looks like when properly completed. This is the GOLD STANDARD reference:
- Section 5 (BUILT ON): 8 sources including DD-005, DD-006, DD-001, R1-007, R1-019, R5-004, MASTER-SOUL-SYNTHESIS.md, DESIGN-TOKEN-SUMMARY.md
- Section 6 (MUST HONOR): 4 constraints with VISCERAL consequences ("Conversational rhythm collapses into uniform density")
- Section 4 (SOUL ALIGNMENT): Specific manifestations for all 5 soul pieces
- Section 9 (RESEARCH DEBT): 4 specific debt items including "Mobile viewport not tested" → "forwards to AD"

**Bidirectional Update Protocol** (PROTO lines 3173-3194): After creating OD-001's inline section, the protocol requires updating CONSUMED BY in: DD-005-tidal.html, DD-006-fractal.html, DD-001-pulse.html, R1-DOCUMENTATION-PATTERNS.md. T1 LOCKED files → note in checkpoint, don't modify.

**Specific Revision:**
- ADD the field-by-field specification from PROTO Appendix D to the plan — this is the REFERENCE STANDARD
- ADD the complete OD-001 example (PROTO lines 3082-3172) as a CONCRETE illustration — the executing agent team can use this as a model
- ADD the Bidirectional Update Protocol (PROTO lines 3173-3194) — the specific source files to update after each OD
- Include the tier classification rules with OD-specific assignments
- The plan must emphasize: "VISCERAL consequences" in MUST HONOR — not abstract ("violates principle") but specific ("47 files break")
- When the Lead **spawns the Weaver teammate** and assigns threading tasks, the Lead must reference this specification and the OD-001 example
- **CHECKPOINT:** After each inline section is created and verified by Auditor (Thread Audit), log completion in OD-CHECKPOINT.md's Threading Status table AND _execution-journal/weaver-log.md. Track: file path, tier, sections populated, sources in BUILT ON, constraints in MUST HONOR, CONSUMED BY sources updated. This granular tracking ensures nothing falls through the cracks during compaction recovery.

---

## BATCH 5: FINAL COMPLETENESS SWEEP — GAP ANALYSIS + CROSS-REVISION COHERENCE

### REVISION 5.1 — GAP: ARCH Section 2.9 — Checkpoint-Journal Distinction + "Written Together" Principle + Threading Status Table

**Plan Section:** Checkpoint system needs the ARCH 2.9 specifics
**Source:** ARCH Section 2.9 (lines 1970-2040)

**What the existing revisions cover:**
Revision 1.6 covers the journal concept from ARCH 1.4. Revision 3.8 covers the PROTO checkpoint template. But NEITHER covers ARCH 2.9's specific operational detail.

**What ARCH 2.9 actually says (lines 1978-2040):**

**CRITICAL DISTINCTION** (lines 1978-1987):
> "The checkpoint (OD-CHECKPOINT.md) stores STRUCTURAL state: what exploration number, what score, what threading status. This is recoverable even without the checkpoint because the web itself contains this information."
> "The journal (_execution-journal/) stores CONTEXTUAL state: why decisions were made, what the mental model is, what patterns are emerging. This is NOT recoverable from the web."

**WRITTEN TOGETHER principle** (lines 1989-1991):
> "The checkpoint and journal are written TOGETHER — every checkpoint write is accompanied by a CURRENT-STATE.md overwrite and a lead-log.md append. They are two views of the same moment: structural position + contextual understanding."

**Threading Status Table** (lines 2020-2025): A table tracking per-OD: Inline Section | Sources Updated | RESEARCH-ACTIVE | Build Audit | Thread Audit — with ✓/✗ status per file.

**T1 LOCKED Pending Updates Table** (lines 2027-2030): Tracks T1 files that should list OD consumers but can't be edited directly.

**Checkpoint Recovery Protocol** (lines 2032-2039): 5-step mini-recovery: Lead reads checkpoint → deploys Traverser → rebuilds identity → resumes → verifies threading matches.

**Specific Revision:**
- ADD the "WRITTEN TOGETHER" principle as a MANDATORY rule: every checkpoint write MUST be accompanied by a CURRENT-STATE.md overwrite and a lead-log.md append
- ADD the threading status table to the plan's checkpoint template (per-OD tracking of 5 completion flags)
- ADD the T1 LOCKED pending updates table — the plan must track these for T1 file maintainers
- The plan must establish: checkpoint = STRUCTURAL (WHERE), journal = CONTEXTUAL (WHY) — BOTH needed for full recovery
- When the Lead **creates the agent team** and performs checkpoint operations, the Lead must ALWAYS write checkpoint + journal in the same operation — "never one without the other"
- **CHECKPOINT:** After establishing this principle, verify that every checkpoint instruction in Revisions 1.6-4.15 is compatible with the "written together" principle. Any revision that says "write checkpoint" should implicitly mean "write checkpoint AND update CURRENT-STATE.md AND append to lead-log.md."

---

### REVISION 5.2 — GAP: ARCH Section 2.11 — Full Journal Protocol (Entry Formats, Triggers, Who-Writes-What, Anti-Noise)

**Plan Section:** Journal needs the full OPERATIONAL PROTOCOL, not just the concept
**Source:** ARCH Section 2.11 (lines 2240-2437)

**What Revision 1.6 established:**
Revision 1.6 introduced the journal concept from ARCH Section 1.4: 3 layers of state, 5 files, CURRENT-STATE.md contract. That was the CONCEPT.

**What ARCH 2.11 adds — the OPERATIONAL PROTOCOL:**

**Journal Entry Format — Log Files** (lines 2316-2328):
```markdown
## [ISO timestamp] — [OPERATION SUMMARY]

**What:** [factual description]
**Why:** [rationale]
**Key Insight:** [most important takeaway]
**Decision:** [if applicable — what and why]
**Result:** [score, status, findings]
**Frame Update:** [how mental model changed]
**Next:** [what comes next and why]
```

**Journal Entry Format — decisions.md** (lines 2330-2345):
```markdown
## [ISO timestamp] — DEC-[NNN]: [Decision Title]

**Context:** [situation requiring decision]
**Alternatives:** [numbered options with pros/cons]
**Choice:** [selected option]
**Rationale:** [specific reasoning]
**Expected Consequence:** [prediction]
**Actual Consequence:** [filled in LATER when known]
```

**Who Writes What table** (lines 2347-2368): Lead → CURRENT-STATE + lead-log + decisions; Builder → builder-log; Weaver → weaver-log; Auditor → DOES NOT write (results captured in Lead's log); Traverser → DOES NOT write (results captured in Lead's log).

**When to Write — Trigger List** (lines 2371-2406):
- CURRENT-STATE.md overwrite: 6 triggers (after init, after exploration completion, after threading completion, after checkpoint, after significant decision, before planned compaction)
- lead-log.md append: 5 triggers (Guardian validation, Auditor result, hypothesis selection, gate passage, decision point)
- builder-log.md append: 3 triggers (after iteration, after research return, after completion)
- weaver-log.md append: 3 triggers (after threading op, after edge case, after completion)
- decisions.md append: 6 triggers (exploration ordering, skip decision, research priority, Auditor/Guardian discrepancy, Builder-B spawning, significant fork)

**Anti-Noise Guarantees** (lines 2426-2437): 7 specific guarantees — dedicated folder, `_` prefix, no web references, no code imports, explicit lifecycle, 5 files only, append-only logs.

**Journal Lifecycle** (lines 2408-2424): Created at phase start → used during execution → archived or deleted after phase completion. "The permanent record is in the web. The journal is working memory."

**Specific Revision:**
- ADD the journal entry formats (BOTH log format and decision format) to the plan as copy-paste templates
- ADD the "Who Writes What" table — the executing agent team must know exactly which teammate writes to which file
- ADD the complete trigger list — these are the EXACT moments when journal writes happen
- ADD the anti-noise guarantees — the plan must assure the executing agent that the journal is ephemeral and safe
- When the Lead **creates the agent team** and spawns the Builder and Weaver, their prompts must specify which journal file they write to and when
- **CHECKPOINT:** After establishing the full journal protocol, every subsequent operation in the plan should reference the appropriate journal trigger. For example: "After Gate 2 passes → Lead appends to lead-log.md (trigger: Guardian validation)" and "After iteration 2 → Builder appends to builder-log.md (trigger: after iteration)."

---

### REVISION 5.3 — GAP: ARCH Section 3.1 Pre-Execution Steps 1-4 (3.5) — Pipeline Initialization Before First Exploration

**Plan Section:** Pre-execution initialization sequence is underspecified
**Source:** ARCH Section 3.1, Steps 1-4 + 3.5 (lines 2441-2472)

**What Revision 2.1 covered:**
Revision 2.1 covers the EXPLORATION LOOP (Steps 5-17). But Steps 1-4 + 3.5 are the PRE-EXECUTION setup that must happen BEFORE the first exploration.

**What ARCH says (lines 2454-2472):**

**Step 1:** Lead deploys Traverser subagent: "Absorb DD-001, DD-003, DD-006, R1-***, SOUL, TOKENS" → Traverser returns ACCUMULATED IDENTITY v0

**Step 2:** Lead runs Guardian validation on identity v0:
- CHECK 1: Constraints registered? ✓
- CHECK 2: Research debt tracked? ✓
- CHECK 3: Soul alignment captured? ✓

**Step 3:** Lead writes initial checkpoint: OD-CHECKPOINT.md

**Step 3.5:** Lead creates _execution-journal/ folder:
- Writes CURRENT-STATE.md (initial mental model + first hypothesis)
- Writes lead-log.md (initialization entry)
- Writes decisions.md (DEC-001: exploration ordering + rationale)
- Creates EMPTY builder-log.md and weaver-log.md

**Step 4:** Lead creates tasks in TaskList for first exploration

**Specific Revision:**
- ADD the complete pre-execution sequence (Steps 1-4, 3.5) as a MANDATORY initialization protocol in the plan
- Step 3.5 (journal creation) is the FIRST thing the Lead does with the journal — this is where all 5 files are initialized
- DEC-001 (exploration ordering) must include alternatives and rationale — the plan should show that the FIRST decision is WHY this particular OD comes first
- The plan must frame this as: "Before the Lead **creates the agent team** and assigns the first task to the Builder, these 4 + 1 initialization steps MUST be complete"
- Steps 1-3.5 happen BEFORE any teammate is spawned — only the Lead is active during initialization
- **CHECKPOINT:** After completing Step 3.5, the Lead must verify: "Initialization complete: identity v0 loaded, Guardian validated, checkpoint created, journal initialized. Ready to spawn Builder and Weaver." This checkpoint goes into the freshly-created CURRENT-STATE.md.

---

### REVISION 5.4 — GAP: PROTO End Material — Encourage/Discourage Framing + Per-File Threading Checklist Template

**Plan Section:** File creation guidance needs the framing correction
**Source:** PROTO end material (lines 3449-3639)

**What Revision 4.14 covered:**
Revision 4.14 covers the anti-sprawl principle, decision tree, canonical locations, and anti-patterns from PROTO Appendix C.

**What the PROTO end material adds (lines 3449-3639):**

**Encourage/Discourage Framing** (lines 3449-3468): The intent is NOT "don't create files" — it's "create files CORRECTLY." The protocol explicitly ENCOURAGES: new research findings, new explorations, new patterns, new external findings, new soul pieces, growing the knowledge base. It DISCOURAGES: duplicate tracking, scattered findings, orphan files, unlinked files.

**The Key Principle** (lines 3463-3472):
> "Every new file GROWS the web by: (1) Having its own inline section, (2) Updating source files' CONSUMED BY, (3) Living in the right location. NOT by: Being isolated, Duplicating what exists, Breaking the threading."

**Per-File Threading Checklist Template** (lines 3606-3631): A concrete checklist to complete for EVERY new file:
1. Inline Section Created — Tier determined, all required sections populated, BUILT ON complete, MUST HONOR complete, CONSUMED BY initialized
2. Source Files Updated — each source's CONSUMED BY updated (or T1/LOCKED noted)
3. Navigation Updated — FOLDER-MAP.md, relevant CLAUDE.md
4. Tracking Updated — OD-CHECKPOINT.md, RESEARCH-ACTIVE.md

**Summary** (lines 3633-3639): 4-point message: (1) CREATE new files, (2) Create them CORRECTLY, (3) Thread them BIDIRECTIONALLY, (4) Don't DUPLICATE.

**Specific Revision:**
- ADD the Encourage/Discourage framing as the OPENING of the file creation section — this corrects any impression that file creation is discouraged
- ADD the per-file Threading Checklist template as a MANDATORY deliverable for every file the Weaver creates
- The plan must frame file creation positively: "Research grows, findings emerge, new files are expected — but every new file must be threaded into the web"
- When the Lead **spawns the Weaver teammate**, the Weaver must know this threading checklist and complete it for EVERY file
- **CHECKPOINT:** After each new file is created and threaded, the Weaver must complete the threading checklist and log completion in _execution-journal/weaver-log.md with: file path, tier, sources updated, T1/LOCKED notes. This per-file checkpoint ensures no file is left orphaned.

---

### REVISION 5.5 — COHERENCE: Cross-Revision Self-Corrections and Dependency Notes

**Purpose:** Ensure the plan updater knows which revisions supersede or correct earlier revisions.

**Self-Corrections Across Batches:**

**1. Guardian check count: 4 → 5**
- Revisions 1.2, 1.5, 1.6 reference "4-check enforcement loop" for Guardian
- Revision 3.14 CORRECTS this to "5-check enforcement loop" (adding CHECK 5: Visual Audit)
- **ACTION for plan updater:** When applying Revisions 1.2/1.5/1.6, use the CORRECTED 5-check count from Revision 3.14. Revision 3.14 is authoritative.

**2. Recovery protocol: Revision 3.1 establishes concept, Revision 4.6 deepens**
- Revision 3.1 covers the HIGH-LEVEL recovery (Journal FIRST, 4-phase concept)
- Revision 4.6 provides the OPERATIONAL 9-step detail
- **ACTION for plan updater:** Apply both. 3.1 provides the WHY. 4.6 provides the HOW. They are complementary, not contradictory.

**3. Research deployment: Revisions 1.4 and 2.9 establish, Revision 4.3 completes**
- Revision 1.4 deletes the standalone Researcher agent
- Revision 2.9 establishes Builder owns all research
- Revision 4.3 adds the decision flowchart and trigger table
- **ACTION for plan updater:** Apply all three sequentially. 1.4 removes the wrong structure. 2.9 establishes the right principle. 4.3 provides the operational detail.

**4. Per-OD loop: Revisions 2.1 and 2.4 are complementary views**
- Revision 2.1 covers the FULL 17-step flow from ARCH Section 3.1 (pipeline-level view)
- Revision 2.4 covers the PROTO 12-step B-template (iteration-level view)
- **ACTION for plan updater:** Both must be in the plan. 2.1 is the pipeline orchestration (Lead + Builder + Weaver + Auditor sequence). 2.4 is the Builder's internal iteration protocol. They nest: the B-template runs INSIDE Steps 6-8.5 of the 17-step flow.

**5. Inline section templates: Revisions 2.8, 4.10, and 4.15 are complementary**
- Revision 2.8 covers PROTO's inline section creation + bidirectional threading (per-OD)
- Revision 4.10 covers the tier-specific templates (Tier A/B/C)
- Revision 4.15 covers the field-by-field specification + concrete OD-001 example
- **ACTION for plan updater:** 2.8 goes in the per-OD loop. 4.10 and 4.15 go in the appendices/reference section.

**6. Checkpoint system: Revisions 1.6, 3.8, 5.1, and 5.2 form a complete picture**
- Revision 1.6: Journal concept (3 layers)
- Revision 3.8: PROTO checkpoint template (per-OD state snapshots)
- Revision 5.1: Checkpoint-journal distinction + "written together" principle
- Revision 5.2: Full journal operational protocol (entry formats, triggers, who-writes-what)
- **ACTION for plan updater:** All four form the plan's state persistence system. Apply in order: 1.6 (concept) → 5.1 (distinction) → 3.8 (template) → 5.2 (protocol).

**Revision Dependency Map:**
```
1.1 (agent count) → 1.2 (Traverser) → 1.3 (Weaver) → 1.4 (Research) → 1.5 (Auditor)
1.6 (journal) → 5.1 (checkpoint distinction) → 5.2 (journal protocol)
1.7 (accumulated identity) → 4.12 (JSON format)
1.8 (Phase -1) → 1.9 (Phase 0) → 3.7 (Phase 0.2-0.4) → 1.10 (Phase 0.5) → 3.8 (checkpoint template)
2.1 (17-step flow) → 5.3 (pre-execution steps 1-4) [fills the gap before step 5]
2.1 (17-step flow) → 2.6 (post-build pipeline) → 4.4 (gate checklists)
2.2 (visual audit) → 3.5 (perceptual depth philosophy) → 3.6 (audit DURING not after)
2.4 (B-template) → 2.7 (final verification C.1-C.11) → 2.3 (scoring rubric)
2.5 (DD-OD pairings) → 2.10 (OD definition step A)
2.8 (inline creation D + threading E) → 4.15 (field-by-field spec) → 4.10 (tier templates)
2.9 (Builder research) → 4.3 (research triggers/flowchart) → 4.11 (prompt template)
3.1 (recovery concept) → 4.6 (9-step recovery detail)
3.2 (paradigm shift) → 3.4 (research as fuel) → 3.12 (ARCH philosophy)
3.9 (synthesis 7 subsections) → 3.10 (upward flow 8 files) → 3.11 (final checklist)
3.13 (team overview + Lead spec) → 4.7 (lifecycle) → 4.13 (spawning protocol)
3.14 (Guardian 5 checks) → 4.4 (6 gate checklists)
3.15 (parallelism 5 windows) → 4.7 (lifecycle with Builder-B)
4.1 (update triggers) → 4.2 (Auditor triggers) → 4.5 (failure modes)
4.8 (success criteria) → 4.9 (final verification) → 3.11 (PROTO final checklist)
4.14 (anti-sprawl) → 5.4 (encourage/discourage framing + threading checklist)
```

**CHECKPOINT:** This coherence map is the META-CHECKPOINT for the entire revision tracker. The plan updater should reference this map when applying revisions to ensure no contradictions are introduced and all dependencies are respected.

---

### REVISION 5.6 — FINAL COVERAGE VERIFICATION: Every Section of Both ARCH and PROTO Mapped to Revisions

**Purpose:** Confirm that every section of both source files has at least one revision referencing it. This is the DEFINITIVE coverage map.

**ARCH Section Coverage:**

| ARCH Section | Lines | Covered By | Status |
|---|---|---|---|
| Banner (WHY THREE, NOT SEVEN) | 1-36 | 1.1 | ✅ |
| **Part I: Core Paradigm** | | | |
| 1.1 Why Bidirectional Matters | 38-107 | 3.12 | ✅ |
| 1.2 Identity Transfer Principle | 108-137 | 1.7, 3.12 | ✅ |
| 1.3 The Compounding Loop | 139-271 | 3.4, 3.12 | ✅ |
| 1.4 Execution Journal (concept) | 273-450 | 1.6 | ✅ |
| **Part II: Agent Team Structure** | | | |
| 2.1 Why Three, Not Seven | 456-559 | 1.1, 1.2, 1.4, 1.5 | ✅ |
| 2.2 Team Overview (ASCII diagram) | 560-668 | 3.13 | ✅ |
| 2.3 The Lead (14 responsibilities) | 710-935 | 3.13 | ✅ |
| 2.4 The Builder (iteration protocol) | 936-1163 | 2.2, 1.9 | ✅ |
| 2.5 The Weaver (bidirectional protocol) | 1197-1390 | 1.3, 4.1 | ✅ |
| 2.6 Traverser Subagent (absorption) | 1392-1599 | 1.2, 1.7 | ✅ |
| 2.7 Research Subagent (context-rich) | 1601-1748 | 1.4, 2.9, 4.3, 4.11 | ✅ |
| 2.8 Guardian (5 checks + registry) | 1758-1968 | 3.14 | ✅ |
| 2.9 Checkpointing (embedded) | 1970-2040 | 3.8, **5.1** | ✅ |
| 2.10 Auditor (fresh eyes) | 2042-2238 | 1.5, 4.2 | ✅ |
| 2.11 Journal Protocol (full) | 2240-2437 | 1.6, **5.2** | ✅ |
| **Part III: Pipeline in Motion** | | | |
| 3.1 Full Execution Flow (Steps 1-17) | 2441-2618 | 2.1 (steps 5-17), **5.3** (steps 1-4) | ✅ |
| 3.2 Parallelism (5 windows) | 2626-2820 | 3.15 | ✅ |
| 3.3 Refinement Loop | 2850-2944 | 3.15 | ✅ |
| **Part IV: Integration Points** | | | |
| 4.1 Inline Update Triggers (8) | 2952-2971 | 4.1 | ✅ |
| 4.2 Auditor Deployment (5 triggers) | 2973-2992 | 4.2 | ✅ |
| 4.3 Research Deployment | 2994-3027 | 4.3 | ✅ |
| 4.4 Threading Verification (6 gates) | 3029-3192 | 4.4 | ✅ |
| **Part V: Recovery & Lifecycle** | | | |
| 5.1 Failure Modes (20+) | 3196-3221 | 4.5 | ✅ |
| 5.2 Compaction Recovery (9 steps) | 3222-3310 | 3.1, 4.6 | ✅ |
| 5.3 Teammate Lifecycle | 3312-3343 | 4.7 | ✅ |
| **Part VI: Success Criteria** | | | |
| 6.1 Success Criteria (8 categories) | 3349-3418 | 4.8 | ✅ |
| 6.2 Final Verification (30+ items) | 3420-3453 | 4.9 | ✅ |
| **Appendices** | | | |
| A: Tier B Template | 3459-3524 | 4.10 | ✅ |
| B: Research Prompt Template | 3528-3590 | 4.11 | ✅ |
| C: Accumulated Identity JSON | 3594-3758 | 4.12 | ✅ |
| D: Team Spawning Protocol | 3763-3992+ | 4.13 | ✅ |

**ARCH Total: 30/30 sections covered ✅**

---

**PROTO Section Coverage:**

| PROTO Section | Lines | Covered By | Status |
|---|---|---|---|
| Post-Compaction Recovery | 17-76 | 3.1 | ✅ |
| Section 0: Paradigm Shift | 78-157 | 3.2 | ✅ |
| Section 1: Why OD Exists | 158-228 | 2.5 | ✅ |
| Section 2: 6 OD Explorations | 229-329 | 2.5, 2.10 | ✅ |
| Section 3: Everything True | 331-446 | 3.3 | ✅ |
| Section 4: Research as Fuel | 448-565 | 3.4, 4.3 | ✅ |
| Section 5: Perceptual Depth | 567-623 | 3.5 | ✅ |
| Section 6: DD Lesson | 625-635 | 3.6 | ✅ |
| Phase -1: Orientation | 638-684 | 1.8 | ✅ |
| Phase 0: Skill + Context | 688-918 | 1.9, 3.7 | ✅ |
| Phase 0.5: Pre-Flight + Checkpoint | 920-1244 | 1.10, 3.8 | ✅ |
| Phase 1A: OD Definition | 1257-1297 | 2.10 | ✅ |
| Phase 1B: Iteration Template (B.1-B.12) | 1298-1524 | 2.4 | ✅ |
| Phase 1C: Final Verification (C.1-C.11) | 1526-1623 | 2.7 | ✅ |
| Phase 1D: Inline Section Creation | 1624-1708 | 2.8 | ✅ |
| Phase 1E: Bidirectional Threading | 1718-1745 | 2.8 | ✅ |
| Phase 2: Cross-OD Synthesis (7 subsections) | 1749-2039 | 3.9 | ✅ |
| Phase 3: Upward Flow (8 files) | 2040-2398 | 3.10 | ✅ |
| Phase 4: Final Checklist | 2400-2462 | 3.11 | ✅ |
| Appendix A: Tier Templates | 2463-2569 | 4.10 | ✅ |
| Appendix B: Subagent Deployment | 2571-2655 | 4.11 | ✅ |
| Appendix C: File Creation & Placement | 2656-2979 | 4.14 | ✅ |
| Appendix D: Inline Section Spec + OD-001 | 2980-3194 | 4.15 | ✅ |
| Appendix E: Sub-Agent Paradigm | 3198-3436 | 4.11, 4.14 | ✅ |
| End Material: Encourage/Discourage + Checklist | 3449-3639 | 4.14, **5.4** | ✅ |

**PROTO Total: 25/25 sections covered ✅**

---

**FINAL COVERAGE SUMMARY:**

| Source | Total Sections | Sections Covered | Coverage |
|---|---|---|---|
| ARCH (OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md) | 30 | 30 | **100%** |
| PROTO (OD-EXECUTION-PROTOCOL.md) | 25 | 25 | **100%** |
| **COMBINED** | **55** | **55** | **100%** |

**Total Revisions:** 56 (Batches 1-5: 10 + 10 + 15 + 15 + 6)

Every section of both source files is now accounted for in at least one revision. The cross-revision coherence notes (5.5) provide the dependency map and self-correction guidance. The plan updater can apply these revisions with confidence that full coverage is achieved.

**CHECKPOINT:** This is the TERMINAL checkpoint for the revision tracker. No additional batches are needed. The plan updater should:
1. Read ALL 56 revisions
2. Reference the dependency map (Revision 5.5) to apply revisions in correct order
3. Reference the coverage verification (Revision 5.6) to confirm nothing was missed
4. After applying all revisions, run the merged ARCH + PROTO final verification checklist (Revision 4.9)
5. The updated plan should carry: all team-invoking language, all checkpoint instructions, all PROTO granularity, and all ARCH operational detail

---

## PROGRESS TRACKER

| Batch | Revisions | Status | Focus Area |
|-------|-----------|--------|------------|
| 1 | 1.1–1.10 | COMPLETE | Agent architecture, missing roles, missing concepts, early phases |
| 2 | 2.1–2.10 | COMPLETE | Per-OD execution loop, iteration protocol, scoring, Builder visual audit |
| 3 | 3.1–3.15 | COMPLETE | Foundation philosophy, cross-OD synthesis, upward flow, Guardian, parallelism |
| 4 | 4.1–4.15 | COMPLETE | Integration points, failure modes, success criteria, appendices, team spawning |
| 5 | 5.1–5.6 | COMPLETE | Gap-filling (2.9 checkpointing, 2.11 journal protocol, pre-execution steps, threading checklist), cross-revision coherence, 100% coverage verification |

---

*FINAL STATUS: All 5 batches complete — 56 revisions total. 30/30 ARCH sections covered + 25/25 PROTO sections covered = 55/55 sections at 100% coverage. Cross-revision dependency map and coherence notes included (Revision 5.5). Every line from both source files is reflected in these revisions.*
