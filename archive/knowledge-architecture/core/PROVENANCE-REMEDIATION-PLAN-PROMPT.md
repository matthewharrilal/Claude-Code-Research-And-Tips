# Provenance Chain Remediation — Plan Creation Prompt

**Purpose:** Give this entire document to a Claude instance. It will force granular document-level research, sub-agent deployment for multi-angle analysis, and produce a comprehensive execution plan that satisfies every verification item, handles every edge case, and makes the provenance chain both structurally and architecturally sound.

**Prerequisite:** The instance should have already read and reflected on `PROVENANCE-CHAIN-REMEDIATION-HANDOFF.md`. If not, read that first.

---

## YOUR TASK

You are going to create the most comprehensive, granular execution plan for remediating a broken provenance chain. This plan must:

1. Close all 33 documented gaps (5 CRITICAL, 9 HIGH, 14 MEDIUM, 3 LOW)
2. Process all 51 dark matter files (eliminate research trapped outside the formal chain)
3. Satisfy all 104 verification items in the verification framework
4. Make the chain both STRUCTURALLY sound (every link works) AND ARCHITECTURALLY sound (files live in logical places, navigation is intuitive, no clutter)
5. Correct hidden gaps in "complete" prior stages (DD tracking drift, Stage 1 uncitable reference)
6. Design the agent team structure to execute it

You are NOT executing the plan. You are CREATING it — with enough granularity that execution agents can follow it without judgment calls.

---

## HOW TO APPROACH THIS

You will work in 4 stages. Do NOT skip ahead. Each stage builds on the previous.

### STAGE 1: GROUND TRUTH RESEARCH (use sub-agents)

Before planning anything, you must understand the ACTUAL state of every document in the system. Not from summaries — from the source files. Deploy sub-agents to build ground truth.

**Launch these sub-agents IN PARALLEL:**

#### Sub-Agent A: The Finding Registry Builder
```
Read EVERY file listed below. For each file, extract EVERY finding ID mentioned
(R1-*, R2-*, R3-*, R4-*, R5-*, COMP-F-*, DD-F-*, OD-F-*, EXT-*, F-E-*, CA-*, DEC-*).
For each finding ID, record:
- The file it appears in
- The line number
- Whether it's a DEFINITION (first declaration) or a CITATION (reference to existing)
- The exact text of the definition (if definition)

Files to scan:
1. DESIGN-SYSTEM/provenance/PIPELINE-MANIFEST.md (full)
2. DESIGN-SYSTEM/provenance/stage-2-density-dd/DD-outbound-findings.md (full)
3. DESIGN-SYSTEM/provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md (full)
4. DESIGN-SYSTEM/provenance/stage-1-components/component-findings.md (full)
5. DESIGN-SYSTEM/provenance/stage-3-organization-od/OD-RESEARCH-GATE.md (full)
6. DESIGN-SYSTEM/provenance/stage-3-organization-od/STAGE-HEADER.md (full)
7. checkpoints/OD-CHECKPOINT.md (full)
8. checkpoints/RESEARCH-ACTIVE.md (full)
9. checkpoints/DISCOVERIES-LOG.md (full)
10. First 200 lines of each OD HTML file (6 files — inline headers)
11. First 200 lines of DD-006-fractal.html and DD-001 (2 files — inline headers)
12. knowledge-architecture/ACCUMULATED-IDENTITY-v1.md (full)
13. DESIGN-SYSTEM/provenance/SOUL-DISCOVERIES.md (full)
14. DESIGN-SYSTEM/BACKBONE.md (full)
15. DESIGN-SYSTEM/patterns/PATTERN-INDEX.md (full)
16. DESIGN-SYSTEM/anti-patterns/registry.md (full)
17. explorations/organizational/OD-006-CREATIVE-RESEARCH-FEED.md (first 100 lines)
18. DESIGN-SYSTEM/provenance/original-research/R1-DOCUMENTATION-PATTERNS.md (first 50 lines for finding numbering scheme)

Output: Write complete finding registry to a file. Include:
- Total unique finding IDs found
- Per-ID: definition location, all citation locations, any collisions (same ID different meaning)
- Ghost IDs (cited but never defined)
- Orphan IDs (defined but never cited downstream)
- Collision report (R3-023/R3-036, OD-F-005, any others discovered)
```

#### Sub-Agent B: The Reference Graph Builder
```
Read EVERY file that contains BUILT ON, CONSUMES, CONSUMED BY, or explicit file path
references. For each reference, record:
- Source file (the file containing the reference)
- Target file (the file being referenced)
- Reference type (BUILT ON / CONSUMES / CONSUMED BY / CITES / LINKS TO)
- Whether the target file EXISTS
- Whether the target file RECIPROCATES the reference

Files to scan: Same list as Sub-Agent A, plus:
- Every CLAUDE.md navigation file in the showcase directory tree
- DESIGN-SYSTEM/provenance/CLAUDE.md
- DESIGN-SYSTEM/CLAUDE.md
- explorations/CLAUDE.md
- explorations/organizational/CLAUDE.md
- explorations/density/CLAUDE.md
- knowledge-architecture/CLAUDE.md

Output: Write complete reference graph to a file. Include:
- Total edges (file-to-file references)
- Broken edges (target doesn't exist)
- Unreciprocated edges (A references B but B doesn't reference A)
- Orphan nodes (files not referenced by anything)
- Stale status claims (file says "PENDING" but content is done, or says "COMPLETE" but content is stale)
```

#### Sub-Agent C: The Dark Matter Deep Auditor
```
Read the dark matter census: knowledge-architecture/_provenance-gap-analysis/10-dark-matter-census.md

Then for EACH of the 51 Category B (dark matter) files identified, read at least the first
100 lines and answer:
1. What unique information does this file contain that exists NOWHERE else?
2. What finding IDs does it define or cite?
3. If this file were deleted tomorrow, what knowledge would be LOST?
4. Where SHOULD this information live in the formal chain?
5. Is this file's current location architecturally sensible, or is it clutter?

Also identify any files the census MISSED — are there markdown files in the showcase
tree not covered by the census?

Output: Write deep dark matter audit to a file. Include per-file assessment and a
master disposition recommendation (ABSORB/CONSOLIDATE/ARCHIVE/KEEP/DELETE) with
specific reasoning.
```

#### Sub-Agent D: The DD Gold Standard Extractor
```
Read the COMPLETE DD provenance chain — every file in stage-2-density-dd/:
- DD-outbound-findings.md (full — note every section, every table, every finding format)
- HANDOFF-DD-TO-OD.md (full — note every section, every table, every constraint format)
- STAGE-HEADER.md (full)
- CLAUDE.md (full)
- Any other files in this directory

For each file, produce a STRUCTURAL TEMPLATE: what sections does it have? What tables?
What format are findings in? What format are constraints in? How are scores presented?
How are pairings documented?

This is the gold standard. OD's provenance documents must match this structural rigor
while containing OD-specific content.

Output: Write DD structural templates to a file. These become the blueprints for
OD-outbound-findings.md, HANDOFF-OD-TO-AD.md, etc.
```

#### Sub-Agent E: The Verification Checklist Decomposer
```
Read the FULL verification framework:
knowledge-architecture/_provenance-gap-analysis/17-verification-framework.md

For EACH of the 104 checklist items:
1. What SPECIFIC file(s) must exist or be updated to satisfy this item?
2. What SPECIFIC content must that file contain?
3. What agent/phase in the phase architecture (Report 15) is responsible for this?
4. Is there any item that is NOT covered by the current phase architecture?
5. Is there any item that requires information not currently available in any file?

Output: Write a verification-to-action mapping to a file. Every checklist item maps to
a specific file, specific content, and specific phase/agent. Flag any items that have
no clear path to satisfaction.
```

#### Sub-Agent F: The Architectural Soundness Auditor
```
This agent focuses on ARCHITECTURAL soundness — not whether chains are complete, but
whether the directory structure makes navigational sense.

Read the current directory structure:
- List all files in DESIGN-SYSTEM/ (recursive)
- List all files in explorations/ (recursive)
- List all files in checkpoints/ (recursive)
- List all files in knowledge-architecture/ (recursive)

Then assess:
1. If a human wanted to find "OD research," where would they look? Is it there?
2. If an agent wanted to find "all findings from Stage 3," where would they look?
3. Are there files whose names don't match their content?
4. Are there directories that have become dumping grounds?
5. Are there files that should be co-located but aren't?
6. What would the IDEAL directory structure look like for both human browsing and
   agent navigation?
7. What files need to be MOVED (not just referenced) for architectural soundness?
8. What directories need to be created, renamed, or restructured?

Output: Write architectural assessment to a file. Include current structure analysis,
proposed restructuring, and specific file moves/renames needed.
```

**CHECKPOINT 1:** After all 6 sub-agents complete, read ALL their outputs. Write a brief
synthesis: what did you learn that the existing reports (01-17) didn't already cover?
What's new? What contradicts the existing reports? What confirms them?

Do NOT proceed to Stage 2 until you've written this synthesis.

---

### STAGE 2: GAP-BY-GAP PLANNING (granular, not summary)

Now read the master gap table from Report 07:
`knowledge-architecture/_provenance-gap-analysis/07-perfect-state-gap-audit.md`

For EACH of the 33 gaps (GAP-001 through GAP-033), write a specific closure plan:

```
### GAP-[NNN]: [Name]

**Severity:** [CRITICAL/HIGH/MEDIUM/LOW]
**Current state:** [What exists now — from your sub-agent ground truth, not the report]
**Target state:** [What must exist — from the perfection dimensions]
**Specific action:** [Exactly what to do — which file to create/edit, what content]
**Source material:** [Where the raw data comes from — specific file paths from sub-agent findings]
**Verification items satisfied:** [Which of the 104 items does closing this gap satisfy?]
**Dependencies:** [Which other gaps must be closed first?]
**Agent assignment:** [Which agent in the team structure handles this?]
**Estimated effort:** [Lines to write, files to read, complexity]
```

Also identify any NEW gaps discovered by your sub-agents that aren't in the original 33.

**CHECKPOINT 2:** After completing all 33+ gap closure plans, verify coverage:
- Does every gap have a closure plan? (count them)
- Does every verification item (104) map to at least one gap closure? (cross-reference Sub-Agent E's output)
- Are there verification items that NO gap closure addresses? (these need new actions)
- Are there circular dependencies in the gap closure plans? (A needs B, B needs A)

Do NOT proceed to Stage 3 until coverage is 100%.

---

### STAGE 3: TEAM STRUCTURE AND EXECUTION ARCHITECTURE

Now design the execution. You have:
- 33+ gap closure plans from Stage 2
- Finding registry from Sub-Agent A
- Reference graph from Sub-Agent B
- Dark matter dispositions from Sub-Agent C
- DD structural templates from Sub-Agent D
- Verification-to-action mapping from Sub-Agent E
- Architectural restructuring plan from Sub-Agent F

Design the team:

#### 3A: Define Every Agent Role

For each agent, specify:
- **Name** (short, descriptive)
- **Files it OWNS** (exclusive write access — NO two agents share a file)
- **Files it READS** (input — list every one)
- **Gaps it closes** (by GAP-NNN)
- **Verification items it satisfies** (by item code)
- **Binary rules** (what it MUST do — no judgment, no "if appropriate")
- **Output file** (what it writes and where)
- **What it must NOT do** (explicit constraints)
- **Completion signal** (how does the lead know it's done?)

#### 3B: Define the Wave Execution Plan

Group agents into waves. For each wave:
- **Start trigger** (what must be true before this wave starts?)
- **Agents in this wave** (all run in parallel within a wave)
- **Expected duration**
- **What this wave produces** (specific files)
- **Completion gate** (what must be verified before the next wave starts?)

#### 3C: Define the File Ownership Matrix

Create a complete matrix: every file that will be created or modified, mapped to exactly
one agent. Verify ZERO contention. If two gap closures require editing the same file,
they must be assigned to the same agent.

#### 3D: Define Crash Recovery

For each agent type:
- What partial output survives a crash?
- How does a replacement agent pick up?
- What's the minimum state file needed?

#### 3E: Define the Verification Phase

After all construction waves complete:
- Which agent(s) run verification?
- Do they run ALL 104 items or a subset?
- What happens when items fail?
- How many verification rounds are budgeted?

**CHECKPOINT 3:** After completing the team design:
- Count agents. Count files owned. Verify ownership is exclusive.
- Count gaps assigned. Verify all 33+ are assigned.
- Count verification items. Verify all 104 are covered.
- Check the dependency graph for cycles.
- Estimate total wall time.

---

### STAGE 4: PLAN DOCUMENT ASSEMBLY

Assemble everything into a single, executable plan document. Structure:

```
# Provenance Chain Remediation — Execution Plan

## 1. Pre-Flight Checklist
   - State file creation
   - Directory structure creation (if architectural changes needed)
   - HTTP server (if needed — probably not for doc remediation)

## 2. Agent Roster
   - Per-agent specification (from 3A)

## 3. Wave Execution Schedule
   - Per-wave specification (from 3B)

## 4. File Ownership Matrix
   - Complete matrix (from 3C)

## 5. Gap Closure Plans
   - All 33+ plans (from Stage 2) organized by wave/agent

## 6. Dark Matter Disposition Schedule
   - Per-file decisions (from Sub-Agent C) organized by agent

## 7. Architectural Changes
   - Directory restructuring (from Sub-Agent F)
   - File moves/renames

## 8. Infrastructure Updates
   - PIPELINE-MANIFEST changes (specific sections, specific content)
   - BACKBONE changes
   - SOUL-DISCOVERIES changes
   - PATTERN-INDEX changes
   - Anti-pattern registry changes
   - All CLAUDE.md navigation updates

## 9. Verification Protocol
   - 104-item execution plan (from 3E)
   - Failure handling

## 10. Commit Strategy
   - How many commits
   - What goes in each commit
   - Commit message formats
   - What files are staged by name (never git add .)

## 11. Post-Remediation State
   - What the directory tree looks like when done
   - What the dark matter ratio is
   - What traversals now work that didn't before

## 12. Coverage Verification
   - Every GAP-NNN → agent → wave → verification items
   - Every verification item → gap closure → agent
   - Every dark matter file → disposition → agent
   - Zero uncovered items in any direction
```

**CHECKPOINT 4 (FINAL):** Before presenting the plan:
- Read the verification framework (Report 17) one more time
- For each of the 104 items, trace through your plan: which agent, which wave, which gap closure addresses it?
- If ANY item has no path to satisfaction, the plan is incomplete. Fix it.
- Read the architectural assessment (Sub-Agent F) one more time
- For each architectural change proposed, verify it's in the plan
- If ANY change is missing, add it.
- Count: gaps covered, verification items covered, dark matter files covered, agents defined, files owned
- All counts must match the expected totals. If they don't, reconcile.

---

## HARD RULES FOR PLAN CREATION

1. **Every instruction to an agent must be BINARY.** Not "consider whether..." or "if appropriate, then..." — instead "DO X" or "DO NOT DO Y." Binary rules achieve 100% compliance. Judgment rules achieve 0%.

2. **Every agent must own files EXCLUSIVELY.** If two agents need to update the same file, merge them into one agent or split the file. Zero contention.

3. **Every gap must map to a verification item. Every verification item must map to a gap closure.** If there's a gap with no verification, add a verification item. If there's a verification item with no gap, add a gap closure action.

4. **No dark matter file goes unassessed.** Every one of the 51 files gets a disposition. If Sub-Agent C finds MORE files the census missed, those get dispositions too.

5. **The plan must produce ARCHITECTURAL soundness, not just structural soundness.** If research files are in illogical locations, the plan moves them. If directories are cluttered, the plan cleans them. If navigation is broken, the plan fixes it. The user wants to OPEN the provenance directory and find things where they expect them.

6. **Agent prompts in the plan must be VERBATIM-READY.** Not summaries of what to tell agents — the actual prompt text that gets pasted into the Task tool. Include file paths, line numbers, finding IDs, and exact instructions.

7. **The plan must handle the migrate-vs-reference decision explicitly.** For each dark matter file: is its content ABSORBED into the formal chain (migrated), REFERENCED by the formal chain (linked), or ARCHIVED (moved to archive with metadata)? No file gets "we'll figure it out later."

8. **Read the ACTUAL files, not reports about them.** Reports 01-17 are analysis. The ACTUAL provenance files, checkpoint files, and dark matter files are the ground truth. When there's a conflict between a report and the actual file, the actual file wins.

---

## WHAT SUCCESS LOOKS LIKE

When your plan is complete, someone should be able to:

1. Read the plan from top to bottom and know EXACTLY what to do at every step
2. Spawn every agent with copy-paste prompts from the plan
3. Verify completion by running the 104-item checklist
4. Open the provenance directory and find everything where they expect it
5. Trace any finding from origin to endpoint without hitting a broken link
6. Navigate the directory structure intuitively — research is where research should be, operational files are archived, navigation files are accurate

No ambiguity. No judgment calls. No "use your best judgment." Every decision is made in the plan, not during execution.
