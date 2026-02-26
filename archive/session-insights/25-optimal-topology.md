# Optimal Team Topology for Middle-Tier Experiment

## The Problem

If team-lead orchestrates all 5 phases, it accumulates messages from every agent across every phase. By Phase 5, context is bloated with Phase 1-4 output that is no longer needed. The team-lead becomes the bottleneck -- not computationally, but in context window capacity.

**Quantified risk:** The plan describes 8 agents producing 7 output files across 5 sequential phases. If each agent sends even a 2,000-token status message, the team-lead accumulates ~16,000 tokens of message overhead alone -- on top of the initial plan (~6,000 tokens), memory (~4,000 tokens), and its own reasoning. By Phase 5, team-lead is at 30-40K tokens of accumulated noise with no way to shed it.

---

## Design Principles (from Project Memory)

These are confirmed patterns from prior sessions, not speculation:

1. **Per-file builder ownership = zero contention** (confirmed 6+ teams)
2. **Recovery agents (direct workers) MORE reliable than captain->worker hierarchies**
3. **File-writing emphasis must be in ALL worker prompts** (workers frequently complete WITHOUT writing files)
4. **Sequential Playwright scheduling; 2 concurrent usually safe; 4+ causes severe contention**
5. **Fresh-eyes zero-context agents find issues research-loaded agents miss entirely**
6. **Binary rules achieve 100% agent compliance; judgment rules achieve ~0%**

---

## Recommended Topology: Flat File-Bus

### Why NOT Phase-Leads

The plan's example topology shows phase-leads managing workers. This is a **captain->worker hierarchy** -- the exact pattern that memory says is LESS reliable than recovery agents (direct workers). Phase-leads add:
- Extra agent cost (5 more agents)
- Extra message hops (worker -> phase-lead -> team-lead)
- Extra failure points (phase-lead can fail to relay)
- No real benefit: each phase has 1-2 workers, so the "lead" is just a passthrough

**Verdict: Eliminate phase-leads entirely.** Team-lead launches workers directly. Workers read input files and write output files. Team-lead never receives large payloads -- only 1-line verdicts.

### The Architecture

```
TEAM-LEAD (thin orchestrator)
│
│  Reads: plan file (once, at start)
│  Writes: launch prompts (one per phase)
│  Receives: 1-line verdicts only ("PASS file written" / "FAIL reason")
│  Context budget: ~25K tokens (plan + prompts + verdicts)
│
├── Phase 0: content-selector ──→ writes 01-content-selection.md
│     (Sonnet, no dependencies)
│
├── Phase 1: planner ──→ writes 02-build-plan.md
│     (Opus, reads 01-content-selection.md + reference files)
│
├── Phase 2: builder ──→ writes middle-tier-page.html
│     (Sonnet, reads 02-build-plan.md + Appendix B blocks)
│
├── Phase 3a: programmatic-auditor ──→ writes 03-programmatic-audit.md
│     (Sonnet, reads middle-tier-page.html via HTTP)
│
├── Phase 3b: perceptual-auditor ──→ writes 04-perceptual-audit.md
│     (Sonnet, reads middle-tier-page.html via Playwright, ZERO prior context)
│
├── Phase 4a: comparative-auditor ──→ writes 05-comparison-report.md
│     (Sonnet, reads middle-tier-page.html + variant-b-weak-perm.html)
│
├── Phase 4b: novelty-evaluator ──→ writes 06-novelty-assessment.md
│     (Sonnet, reads middle-tier-page.html + crown jewels)
│
└── Phase 5: verdict-synthesizer ──→ writes 07-VERDICT.md
      (Sonnet, reads files 03 through 06 ONLY)
```

### File Bus Protocol

Every agent follows the same contract:

```
INPUT:  Read specific files from disk (listed in prompt)
OUTPUT: Write exactly ONE file to ephemeral/middle-tier-experiment/
SIGNAL: Send team-lead a 1-line message: "DONE: [filename] written" or "FAIL: [reason]"
```

**No agent sends its output as a message.** All output goes to files. The team-lead never reads intermediate files -- it only needs to know the file was written successfully before launching the next phase.

---

## Per-Agent Specification

### Agent 1: content-selector
| Property | Value |
|----------|-------|
| Model | Sonnet |
| Phase | 0 (first) |
| Input files | None (generates original content) |
| Output file | `ephemeral/middle-tier-experiment/01-content-selection.md` |
| Context budget | ~15K tokens |
| Playwright | No |
| Key constraints | A2.1-A2.10, A3.1-A3.3, NO mechanism access, NO design system content |
| Message to team-lead | "DONE: 01-content-selection.md written" |

**Prompt must include:** "You MUST write your output to `ephemeral/middle-tier-experiment/01-content-selection.md` using the Write tool. If you do not write this file, your work is lost."

### Agent 2: planner
| Property | Value |
|----------|-------|
| Model | **Opus** (creative synthesis required) |
| Phase | 1 (after content-selector) |
| Input files | `01-content-selection.md`, prohibitions.md, tokens.css, mechanism-catalog.md, semantic-rules.md, usage-criteria.md, SKILL.md |
| Output file | `ephemeral/middle-tier-experiment/02-build-plan.md` |
| Context budget | ~60K tokens (heaviest agent -- reads 7 reference files) |
| Playwright | No |
| Key constraints | B8.2 always-load, per-category minimum (M1 override), 7-section plan output format |
| Message to team-lead | "DONE: 02-build-plan.md written" |

**Critical sequencing in prompt:** "Read prohibitions.md and tokens.css BEFORE reading mechanism-catalog.md. Read content selection BEFORE mechanisms. Produce all 7 plan sections."

### Agent 3: builder
| Property | Value |
|----------|-------|
| Model | Sonnet (executing a detailed spec) |
| Phase | 2 (after planner) |
| Input files | `02-build-plan.md`, Appendix B blocks (embedded in prompt) |
| Output file | `ephemeral/middle-tier-experiment/middle-tier-page.html` |
| Context budget | ~40K tokens |
| Playwright | No |
| Key constraints | Container 940-960px, soul checklist, single self-contained HTML, all CSS inline |
| Message to team-lead | "DONE: middle-tier-page.html written" |

**Prompt must include Appendix B blocks verbatim:** Block 1 (Soul Checklist), Block 2 (File-Write), Block 3 (Container Width), Block 4 (M1 Override).

### Agent 4a: programmatic-auditor
| Property | Value |
|----------|-------|
| Model | Sonnet |
| Phase | 3a (after builder, parallel with 3b) |
| Input files | `middle-tier-page.html` (via HTTP server) |
| Output file | `ephemeral/middle-tier-experiment/03-programmatic-audit.md` |
| Context budget | ~25K tokens |
| Playwright | YES -- sequential with perceptual-auditor (see scheduling below) |
| Key constraints | Measure COMPUTED styles, check at 1440px AND 768px, Critical-10 gate, Quick Check 15 items |
| Message to team-lead | "DONE: 03-programmatic-audit.md written. Critical-10: [PASS/FAIL]" |

### Agent 4b: perceptual-auditor
| Property | Value |
|----------|-------|
| Model | Sonnet |
| Phase | 3b (after builder, parallel with 3a) |
| Input files | `middle-tier-page.html` (via Playwright browser) |
| Output file | `ephemeral/middle-tier-experiment/04-perceptual-audit.md` |
| Context budget | ~20K tokens |
| Playwright | YES -- sequential with programmatic-auditor (see scheduling below) |
| Key constraints | **ZERO prior context** (fresh-eyes), PA-01 through PA-20, PA-SEM-01 through PA-SEM-03, PA-05 operationalization |
| Message to team-lead | "DONE: 04-perceptual-audit.md written. PA-05: [YES/MARGINAL/NO]" |

**CRITICAL: This agent receives NO design system context, NO plan, NO mechanism information.** It sees only the rendered page. This is the fresh-eyes principle.

### Agent 5a: comparative-auditor
| Property | Value |
|----------|-------|
| Model | Sonnet |
| Phase | 4a (after audits, parallel with 5b) |
| Input files | `middle-tier-page.html`, `variant-b-weak-perm.html` (both via Playwright) |
| Output file | `ephemeral/middle-tier-experiment/05-comparison-report.md` |
| Context budget | ~25K tokens |
| Playwright | YES |
| Key constraints | Side-by-side at same viewport, perceptual observations, "better than Variant B" assessment |
| Message to team-lead | "DONE: 05-comparison-report.md written. Better than B: [YES/NO/MARGINAL]" |

### Agent 5b: novelty-evaluator
| Property | Value |
|----------|-------|
| Model | Sonnet |
| Phase | 4b (after audits, parallel with 5a) |
| Input files | `middle-tier-page.html`, DD-006-fractal.html, CD-006-pilot-migration.html |
| Output file | `ephemeral/middle-tier-experiment/06-novelty-assessment.md` |
| Context budget | ~25K tokens |
| Playwright | YES |
| Key constraints | D3.1 (blur test), D3.2 (CSS overlap), D3.3 (mechanism combination), 3 binary verdicts |
| Message to team-lead | "DONE: 06-novelty-assessment.md written. Novel signals: [count]/3" |

### Agent 6: verdict-synthesizer
| Property | Value |
|----------|-------|
| Model | Sonnet |
| Phase | 5 (final, after all audits + evaluations) |
| Input files | Files 03 through 06 ONLY (4 audit/evaluation files) |
| Output file | `ephemeral/middle-tier-experiment/07-VERDICT.md` |
| Context budget | ~20K tokens |
| Playwright | No |
| Key constraints | Decision matrix (Section 10.1), SUCCESS/PARTIAL/FAILURE criteria, post-experiment recommendations |
| Message to team-lead | "DONE: 07-VERDICT.md written. Verdict: [SUCCESS/PARTIAL/FAILURE]" |

**This agent does NOT read the HTML, the plan, or the content.** It reads only the audit outputs and applies the decision matrix. This prevents re-evaluation bias.

---

## Team-Lead Context Management Strategy

### What team-lead does per phase

| Phase | Team-lead action | Context cost |
|-------|-----------------|--------------|
| Setup | Create directory, start HTTP server, verify files exist | ~2K tokens |
| Phase 0 | Launch content-selector, wait for "DONE" | ~500 tokens |
| Phase 1 | Launch planner, wait for "DONE" | ~500 tokens |
| Phase 2 | Launch builder, wait for "DONE" | ~500 tokens |
| Phase 3 | Launch both auditors, wait for 2 "DONE" messages | ~1K tokens |
| Phase 4 | Launch both evaluators, wait for 2 "DONE" messages | ~1K tokens |
| Phase 5 | Launch verdict-synthesizer, wait for "DONE" + verdict | ~500 tokens |
| Report | Read 07-VERDICT.md, report to user | ~2K tokens |

**Total team-lead context:** ~25K tokens (plan + prompts + verdicts + report). Well within safe limits.

### What team-lead does NOT do

- Does NOT read intermediate files (01-06)
- Does NOT relay content between agents (agents read files directly)
- Does NOT accumulate audit output in its context
- Does NOT make quality judgments (verdict-synthesizer does that)

### Abort protocol

If any agent sends "FAIL" instead of "DONE":
1. Team-lead reads the failure reason (1 line)
2. Team-lead decides: retry same agent, or abort experiment
3. No cascading -- downstream agents were never launched

---

## Playwright Scheduling Plan

### Constraint: 2 concurrent Playwright sessions is safe; 4+ causes severe contention

### Phase 3 (Audits): SEQUENTIAL, not parallel

Even though programmatic-auditor and perceptual-auditor are independent, they both need Playwright. Run them **sequentially**:

```
Phase 3a: programmatic-auditor (Playwright at 1440px + 768px)
   ↓ completes
Phase 3b: perceptual-auditor (Playwright at 1440px + 768px)
```

**Rationale:** The programmatic auditor runs fast (5-10 min) with automated measurements. The perceptual auditor runs slower (30-40 min) with subjective evaluation. Sequential adds only 5-10 min but eliminates contention risk entirely.

**Alternative (acceptable risk):** Run both concurrently (2 Playwright sessions). This is within the "usually safe" window but adds risk for minimal time savings since programmatic finishes quickly anyway.

### Phase 4 (Evaluations): SEQUENTIAL Playwright, parallel non-Playwright work

Both comparative-auditor and novelty-evaluator need Playwright for screenshot comparison:

```
Phase 4a: comparative-auditor (Playwright: middle-tier vs Variant B)
   ↓ completes
Phase 4b: novelty-evaluator (Playwright: middle-tier vs crown jewels)
```

**Alternative:** If using the 2-concurrent-safe window: run Phase 4a and 4b in parallel. Both need Playwright but for different comparisons, so they won't contend on the same page.

### Recommended schedule (conservative)

```
Time    Agent                    Playwright?
0:00    content-selector         No
0:25    planner                  No
1:45    builder                  No
2:55    programmatic-auditor     YES (sole user)
3:05    perceptual-auditor       YES (sole user)
3:45    comparative-auditor      YES (sole user)
4:15    novelty-evaluator        YES (sole user)
4:35    verdict-synthesizer      No
4:55    COMPLETE
```

### Recommended schedule (moderate parallelism)

```
Time    Agent                    Playwright?
0:00    content-selector         No
0:25    planner                  No
1:45    builder                  No
2:55    programmatic-auditor     YES ──┐ (2 concurrent, OK)
2:55    perceptual-auditor       YES ──┘
3:45    comparative-auditor      YES ──┐ (2 concurrent, OK)
3:45    novelty-evaluator        YES ──┘
4:15    verdict-synthesizer      No
4:35    COMPLETE
```

**Time saved by moderate parallelism: ~20 min.** Both schedules are valid.

---

## HTTP Server Management

The HTML file must be served via HTTP because Playwright MCP blocks `file://` protocol.

**Option A: Team-lead starts server before Phase 3**
```bash
cd /Users/spacewizardmoneygang/Desktop/Claude-Research-And-Tips
python3 -m http.server 8080 &
```
Team-lead starts this once. All Playwright agents access `http://localhost:8080/ephemeral/middle-tier-experiment/middle-tier-page.html`. Team-lead kills the server after Phase 5.

**Option B: Each Playwright agent starts its own server**
More isolated but wasteful. Not recommended.

**Recommendation: Option A.** Team-lead starts the server as part of Phase 2 completion (after builder writes the HTML). Include the server URL in all Playwright agent prompts.

---

## Agent Count and Model Allocation

| Metric | Value |
|--------|-------|
| Total agents | **8** (excluding team-lead) |
| Opus agents | **1** (planner only) |
| Sonnet agents | **7** |
| Playwright agents | **4** (programmatic-auditor, perceptual-auditor, comparative-auditor, novelty-evaluator) |
| Max concurrent agents | **2** (Phase 3 or Phase 4 with moderate parallelism) |
| Max concurrent Playwright | **2** (within safe window) |

### Cost estimate (relative)

- 1 Opus agent (~60K context) = ~$0.90 input + ~$0.60 output = ~$1.50
- 7 Sonnet agents (~25K avg context) = 7 * ~$0.25 = ~$1.75
- **Total estimated cost: ~$3.25** (rough order of magnitude)

The planner is the most expensive single agent because it reads 7 reference files (~15K tokens of input) and produces a detailed plan. All other agents are context-light.

---

## File-Based Handoff Protocol

### Directory structure

```
ephemeral/middle-tier-experiment/
├── 01-content-selection.md      ← content-selector writes
├── 02-build-plan.md             ← planner writes
├── middle-tier-page.html        ← builder writes
├── 03-programmatic-audit.md     ← programmatic-auditor writes
├── 04-perceptual-audit.md       ← perceptual-auditor writes
├── 05-comparison-report.md      ← comparative-auditor writes
├── 06-novelty-assessment.md     ← novelty-evaluator writes
└── 07-VERDICT.md                ← verdict-synthesizer writes
```

### Dependency graph

```
01-content-selection.md
         │
         ▼
02-build-plan.md
         │
         ▼
middle-tier-page.html
         │
    ┌────┼────┐
    ▼    ▼    │
   03   04    │
    │    │    │
    ▼    ▼    ▼
    ┌────┼────┐
    ▼    ▼    │
   05   06    │
    │    │    │
    └────┼────┘
         ▼
   07-VERDICT.md
```

### Handoff rules

1. **No agent reads a file that hasn't been written yet.** Team-lead gates each phase launch on "DONE" from the prior phase.
2. **No agent modifies another agent's file.** Each file has exactly one writer.
3. **No agent sends large content via messages.** All substantive output goes to files.
4. **Team-lead verifies file existence** (not content) before launching the next phase: `ls ephemeral/middle-tier-experiment/[expected-file]`.

---

## Prompt Template for All Agents

Every agent prompt must include these elements (binary rules for 100% compliance):

```
## Your Role
[role-specific description]

## Input Files (READ THESE FIRST)
[explicit file paths]

## Output File (YOU MUST WRITE THIS)
You MUST write your output to: ephemeral/middle-tier-experiment/[filename]
Use the Write tool to create this file.
If you do not write this file, your work is LOST and the experiment FAILS.

## Constraints
[role-specific binary constraints]

## When Done
Send a message to team-lead with ONLY: "DONE: [filename] written. [1-line summary]"
Do NOT send your output as a message. It is in the file.
```

**The file-write emphasis appears THREE times** (role description, output section, when-done section) per the memory pattern that workers frequently complete without writing files.

---

## Comparison: This Topology vs. Phase-Lead Topology

| Dimension | Phase-Lead (rejected) | Flat File-Bus (recommended) |
|-----------|----------------------|----------------------------|
| Agent count | 13 (8 workers + 5 leads) | 8 (workers only) |
| Message hops | worker -> lead -> team-lead (2) | worker -> team-lead (1) |
| Failure points | 13 agents + 5 relay points | 8 agents, 0 relay points |
| Team-lead context | ~40K (receives lead summaries) | ~25K (receives 1-line verdicts) |
| Cost | ~$5.50 (5 extra Sonnet agents) | ~$3.25 |
| Reliability | Lower (captain->worker pattern) | Higher (recovery agent pattern) |
| Complexity | Higher (lead prompts + worker prompts) | Lower (worker prompts only) |

**The phase-lead topology solves a problem that doesn't exist.** With file-based handoff, there is nothing for a phase-lead to do that the team-lead can't do with a 1-line message check.

---

## Edge Cases and Failure Modes

### What if an agent fails to write its file?

Team-lead checks file existence before launching next phase. If file missing after "DONE" message: re-prompt agent with "Your file was not found. Write it now." If still missing: launch a replacement agent with same prompt.

### What if the planner produces a bad plan?

The team-lead does NOT evaluate plan quality (that would require reading the plan and bloating context). The builder executes whatever plan it receives. If the plan is bad, the auditors will catch it. This is the two-instance pattern working as designed.

### What if Playwright contention occurs?

Symptoms: screenshots are blank, timeouts, "browser not available" errors. Response: kill all Playwright sessions, re-launch the failing agent alone. Never retry concurrent -- switch to fully sequential.

### What if context overflow occurs in an agent?

Most likely victim: the planner (reads 7 reference files). Mitigation: the planner prompt should specify which sections of each file to read (e.g., "Read mechanism-catalog.md sections 1-18, skip examples" rather than "Read the entire file"). This keeps input under 40K tokens.

---

## Summary

**Topology:** Flat file-bus. No phase-leads. 8 workers + 1 thin team-lead.

**Communication:** File-based. Workers read input files, write output files, send 1-line "DONE" messages.

**Team-lead context:** ~25K tokens total across all phases. Never reads intermediate files.

**Playwright:** Sequential or 2-concurrent. Never 3+. HTTP server started once by team-lead.

**Key principle:** The team-lead is a launcher and gate-checker, not a processor. All intelligence is in the worker prompts and the file handoff protocol.
