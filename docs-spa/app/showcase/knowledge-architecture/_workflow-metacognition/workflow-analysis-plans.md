# Comprehensive Analysis: Planning Workflow Patterns in ~/.claude/plans/

**Analyst:** Claude Opus 4.6
**Date:** 2026-02-07
**Scope:** All files in `~/.claude/plans/`, `~/.claude/plans/archive/`, CLAUDE.md files at three levels, and MEMORY.md
**Files Analyzed:** 50+ plan files, 4 CLAUDE.md files, 1 MEMORY.md, archive INDEX.md

---

## 1. How Plans Are Structured

### 1.1 The Three-Generation Evolution

The planning system has gone through three distinct generations, each visible in the file archive:

**Generation 1 (Jan 13-19): Hierarchical Wave Plans**
- Master plan (`smooth-coalescing-rabin.md`) with 8 subplans
- Content specs as separate documents
- Tracking/recovery as dedicated files
- Structured as `PLAN-HIERARCHY.md` -> `PLAN-INDEX.md` -> `WAVE-N/` directories
- 289 files archived from this era

**Generation 2 (Jan 25-Feb 2): Session-Scoped Plans**
- Named with Claude Code's auto-generated session names (e.g., `dreamy-tickling-pike.md`, `effervescent-cuddling-peach.md`)
- Each session gets its own plan file
- Methodology files extracted as reusable frameworks (`METHODOLOGY-EXTRACTION.md`, `METHODOLOGY-RESTORATION.md`, `TEMPLATES-HTML-COMPONENTS.md`)
- 65 conversion plans mass-generated for content transformation (each 30-55KB)

**Generation 3 (Feb 3-7): Agent Team Execution Plans**
- Massive single-file plans (25-150KB) that serve as complete execution specifications
- Plans now include team architecture, agent prompts, crash recovery, and verification protocols
- Plans reference companion protocol/architecture documents (e.g., `OD-EXECUTION-PROTOCOL.md` at 3,640 lines, `OD-EXECUTION-AGENT-TEAM-ARCHITECTURE-v4.md` at 4,412 lines)
- Files like `tranquil-bouncing-koala.md` (88KB), `woolly-riding-yeti.md` (150KB), `moonlit-growing-clover.md` (70KB)

### 1.2 Universal Plan Anatomy

Across all three generations, plans consistently contain these sections (with varying weight):

| Section | Gen 1 Weight | Gen 2 Weight | Gen 3 Weight |
|---------|-------------|-------------|-------------|
| Context / What Exists Already | 10% | 15% | 15% |
| What We'll Produce (Deliverables) | 15% | 10% | 10% |
| Task Breakdown (Phases/Steps) | 40% | 30% | 20% |
| Tracking / Status Dashboard | 15% | 15% | 15% |
| Recovery / Compaction Survival | 10% | 15% | 20% |
| Guardrails / DO NOT Rules | 5% | 10% | 15% |
| Verification / Audit Protocol | 5% | 5% | 5% |

The most striking shift: **recovery and guardrails have doubled** from Gen 1 to Gen 3, while pure task breakdown has halved. The system has learned that knowing what NOT to do and how to survive context loss matters more than having a perfect task list.

### 1.3 Structural Elements (Present in Nearly All Plans)

1. **Context Block** - Always first. States what exists, what's been done, what's next. Often includes exact file paths.

2. **Scope Table** - A markdown table quantifying the work: file counts, agent counts, expected line counts.

3. **Phase Sequence** - Numbered phases (Phase 0, Phase 1, ...) with gates between them. Phase 0 is always "Setup/Orientation."

4. **Agent Architecture Diagram** - ASCII art showing agent topology, communication paths, and lifecycle (PERSISTENT vs EPHEMERAL).

5. **Checkpoint Templates** - Literal markdown templates to paste at phase boundaries, with running totals and recovery instructions.

6. **DO NOT / Critical Guardrails** - Numbered prohibitions. Always placed prominently.

7. **Verification Gates** - Named V1-V5 or similar, each with pass/fail criteria.

8. **Recovery Protocol** - Explicit instructions for what to read and in what order after context loss.

---

## 2. Consistent Patterns Across Plans

### 2.1 The Checkpoint-as-Compaction-Firewall Pattern

The single most distinctive pattern across all plans is the treatment of checkpoints not as progress markers but as **compaction survival infrastructure**. Every plan assumes context will be lost. The checkpoint format is designed so that reading it alone reconstitutes enough state to resume.

Example from `moonlit-growing-clover.md`:
```
CHECKPOINT: Pre-Flight Complete

COMPLETED:
- Read 7 reference files
- Built Protected Files List (~40 entries)
- DD visual verification PASS/FAIL
- Master File List generated (945 entries)

COUNTS SO FAR:
- DELETE: 0 / SUPERSEDED: 0 / KEEP + FULL: 0 / KEEP + LIGHT: 0

NEXT SECTION:
- Chunk C1: design-system/ (36 files, dead island)

RECOVERY INSTRUCTION:
If context is lost, resume from: Chunk C1. Protected Files List is in
PHASE-2A-CLASSIFICATION.yaml header.
```

This pattern appears in every plan from Jan 25 onward. The `RECOVERY INSTRUCTION` block is always the last element of a checkpoint.

### 2.2 The "Gate Before Proceed" Pattern

Plans never allow sequential phases to flow into each other. Every phase boundary has an explicit gate:

- **Content Gate:** "Read OD-FIX-EXECUTION-PROMPT.md in FULL -- all 10 sections, 1,001 lines"
- **Quality Gate:** "Score >= 32 for INCLUDE"
- **Verification Gate:** "V1-V5 gates must pass"
- **Human Gate:** "HUMAN PAUSE 1 -- User approves OD-001 quality"

Gates serve a dual purpose: they prevent drift and they create natural checkpoints for compaction recovery.

### 2.3 The "Per-File Agent Ownership" Pattern (Gen 3)

A lesson explicitly learned and documented in MEMORY.md:
> "Per-file ownership eliminates all contention -- 4 fixers, zero file conflicts"

This is applied consistently in Gen 3 plans. The `rosy-gliding-sparkle.md` fix plan assigns:
- Fixer-A: OD-001 + OD-002
- Fixer-B: OD-003
- Fixer-C: OD-004
- Fixer-D: OD-005 + OD-006

No file is touched by more than one agent. This pattern emerged from painful experience with the first agent team (builders couldn't iterate, context collisions occurred).

### 2.4 The "Lead THIN" Rule

Documented in MEMORY.md and enforced in plans:
> "Lead THIN rule validated again -- zero building, zero Playwright, orchestrate only"

The lead agent in team architectures is explicitly prohibited from doing implementation work. Its role is: spawn agents, track progress, commit code, handle recoveries. This is stated as a constraint in every Gen 3 plan.

### 2.5 The "Sequential Verification" Pattern

Learned from Playwright contention during audits:
> "Sequential verification (programmatic then visual) eliminates Playwright contention"

Plans consistently specify: run programmatic verification first (faster, catches most issues), then visual verification second. Never in parallel.

### 2.6 The "Write Report Before Returning" Pattern

Every agent in Gen 3 plans is instructed to write a completion report to a specific file path before terminating. This ensures that even if the agent crashes during shutdown, its work product is preserved:
> "All agents wrote reports before returning -- zero data loss"

### 2.7 The "Adversarial Framing" Pattern

Verification agents are explicitly told to try to DISPROVE that work was done correctly:
> "Verifiers must actively try to DISPROVE that fixes worked. Verification is NOT a rubber stamp."

This includes the "INVERSION TEST": "If this fix had NOT been applied, would I notice?"

### 2.8 The Batch Size Sweet Spot

Across all plans, the consistently recommended batch sizes are:
- 5-10 files per agent (documented explicitly: ">12 risks context exhaustion")
- 4-6 agents per wave (prevents context overload at the orchestrator level)
- Maximum 9 parallel agents (launched 4 at a time)

### 2.9 The "Absorption Protocol" Pattern (Gen 3)

Before any agent touches a file, it must undergo an "Absorption Protocol" -- reading and internalizing the file's identity, constraints, and relationships. This is not a skim; it's a structured 5-step process:
1. Read with Purpose
2. Reflect (answer specific questions)
3. Traverse references when needed
4. Carry Forward (hold identity while working)
5. Use the Identity (let it inform judgment calls)

---

## 3. What the CLAUDE.md Files Reveal About Workflow Enforcement

### 3.1 Three-Tier CLAUDE.md Architecture

The system uses CLAUDE.md files at three levels, each serving a distinct enforcement purpose:

**Level 1: Global (`~/.claude/CLAUDE.md`)**
- HTML styling rules (color scheme, component styles)
- Tool and skill awareness protocol
- Design token values
- Applies to ALL projects, ALL sessions

**Level 2: Project Root (`/Desktop/Claude-Research-And-Tips/CLAUDE.md`)**
- Repository structure map
- File naming conventions
- Phase status dashboard
- Key entry points table
- Quality standards for content types
- Updated with current session work

**Level 3: Directory-Specific (e.g., `showcase/CLAUDE.md`, `knowledge-architecture/CLAUDE.md`)**
- Mandatory research grounding (5-file read requirement before ANY action)
- Refinement loop (8-step iterative process, mandatory every time)
- Output format enforcement (Research Application Record template)
- Soul compliance checklist (border-radius: 0, box-shadow: none, etc.)
- Compaction survival instructions
- Self-check questions (10 yes/no gates before outputting anything)
- Per-task-type file reading requirements

### 3.2 CLAUDE.md as Process Enforcement, Not Documentation

The `showcase/CLAUDE.md` file (460 lines) is the most revealing. It uses:
- Full-width block characters for section headers (`*****`)
- All-caps "MANDATORY" labels repeated 8 times
- "WHAT HAPPENS IF THESE RULES ARE VIOLATED" section with explicit consequences
- "COMPACTION SURVIVAL" section ensuring rules persist across context clears

This file is not documenting a process -- it IS the process enforcement mechanism. It functions as a contract that Claude Code reads automatically on directory entry.

### 3.3 The Research Grounding Constraint

The most unique enforcement pattern: before ANY work in the showcase directory, the agent must:
1. READ 5 specific files (not from memory -- actually read them)
2. IDENTIFY applicable research findings with IDs
3. COMMIT to specific applications before building
4. ANNOTATE where research was applied during building
5. VERIFY application after building

This creates a closed loop where the research-to-implementation pipeline is enforced at the session level, not just documented.

### 3.4 Research Finding Count as Enforcement

The CLAUDE.md explicitly states:
> "The actual finding counts (as of 2026-02-04): R-1=28, R-2=27, R-3=51, R-4=192, R-5=39. TOTAL: 337 findings."

This prevents agents from claiming they've "reviewed the research" without engaging with the actual scope. The count serves as an integrity check.

---

## 4. The Relationship Between Plans, CLAUDE.md, and Execution Documents

### 4.1 The Three-Document System

For any significant work unit, three document types interact:

```
CLAUDE.md (persistent rules)     Plans (session-scoped)     Execution Docs (task-scoped)
        |                               |                           |
        |-- "Always do X"               |-- "Today, do Y"          |-- "For OD-003, do Z"
        |-- Process constraints          |-- Team architecture       |-- Exact CSS values
        |-- Quality standards            |-- Phase sequence          |-- Line numbers
        |-- Recovery protocol            |-- Agent prompts           |-- Investigation steps
        |                               |-- Crash recovery          |
        +---------- read first ---------+---------- read second ---+---- read during -----+
```

**CLAUDE.md** establishes invariants (border-radius: 0, always read research first).
**Plans** establish the session's work scope (6 ODs, 7 agents, 3 phases).
**Execution Documents** contain technical specifics (exact CSS patches, exact DOM selectors).

### 4.2 The Plan as Orchestration Layer

Plans serve as the middle layer that connects persistent rules to concrete execution. A plan like `rosy-gliding-sparkle.md` explicitly:
- References the CLAUDE.md constraints: "Soul Compliance Checklist (Appended to EVERY Fixer Prompt)"
- References execution documents: "Read Section 5 of OD-FIX-EXECUTION-PROMPT.md"
- Adds session-specific orchestration: agent assignments, timing estimates, crash recovery

### 4.3 MEMORY.md as Cross-Session Learning Store

The `MEMORY.md` file (in the Claude-specific project memory path) captures lessons learned that are too specific for CLAUDE.md but need to persist across sessions:
- "Per-file ownership eliminates all contention"
- "Fixer-B finished first (~7 min); Fixer-A ~10 min"
- "document.fonts.ready is CRITICAL before checking computed font"
- "Sequential verification eliminates Playwright contention"
- "Sessions processing 50+ files in serial hit context wall"

These lessons directly inform plan design. For example, the "sequential verification" lesson from MEMORY.md appears as a structural constraint in every subsequent audit plan.

### 4.4 The Supersession Chain

The system has a clear supersession model:
1. Plans supersede earlier plans (tracked in archive INDEX.md)
2. CLAUDE.md files can be superseded but are flagged explicitly
3. Methodology files extract reusable patterns from session plans
4. The archive preserves history but marks it as non-authoritative

The `PLAN-HIERARCHY.md` was explicitly marked deprecated:
> "DEPRECATED (2026-01-17) -- This file is superseded by: PLAN-INDEX.md"

---

## 5. How the Planning Meta-Process Itself Has Evolved

### 5.1 From Blueprint to Survival Document

**Jan 13 (Gen 1):** Plans were blueprints. `PLAN-HIERARCHY.md` was a clean tree of what to build, in what order. Recovery was a side concern.

**Jan 25 (Gen 2):** Plans became survival documents. The session plan `SESSION-POC-TRANSFORMATION-PLAN.md` includes "Resume Point," explicit todo checkboxes, and "Key Context to Remember" sections designed to survive /clear.

**Feb 3-7 (Gen 3):** Plans are now agent orchestration manuals. `tranquil-bouncing-koala.md` (88KB) includes:
- 15 non-negotiable execution requirements
- Agent mesh diagrams showing identity flow
- Compaction recovery with journal-first, checkpoint-second ordering
- Human pause points
- Crash recovery procedures
- Soul compliance checklists appended to agent prompts verbatim

### 5.2 The Granularity Explosion

The conversion plans directory (`conversions/`) contains 65 files averaging 44KB each -- approximately **2.86MB of plan content** for a batch of content transformations. Each individual plan (e.g., `PLAN-CONVERSION-mastery-gastown-complete.md` at 47KB) contains complete specifications for transforming a single markdown file into a POC format.

This represents peak granularity: one plan per source file, each containing the full 8-section POC specification, activity zone types, mining guides, and quality rubrics. The total exceeds the source content itself in volume.

### 5.3 The "What To Do" vs "How To Track" vs "How To Recover" Ratio

Measured across representative files:

| Plan | What To Do | How To Track | How To Recover |
|------|-----------|-------------|----------------|
| `PLAN-HIERARCHY.md` (Gen 1) | 60% | 25% | 15% |
| `SESSION-POC-TRANSFORMATION-PLAN.md` (Gen 2) | 45% | 30% | 25% |
| `rosy-gliding-sparkle.md` (Gen 3 Fix) | 35% | 25% | 40% |
| `tranquil-bouncing-koala.md` (Gen 3 Build) | 30% | 30% | 40% |
| `moonlit-growing-clover.md` (Gen 3 Classify) | 40% | 35% | 25% |

The trend is clear: recovery infrastructure has grown from 15% to 40% of plan content. In Gen 3, plans spend more space telling agents how to survive failure than telling them what to build.

### 5.4 The Methodology Extraction Pattern

When a process proves reusable, it gets extracted into a methodology file:
- `METHODOLOGY-EXTRACTION.md` -- Source ingestion framework
- `METHODOLOGY-RESTORATION.md` -- Content restoration framework
- `TEMPLATES-HTML-COMPONENTS.md` -- Copy-paste HTML/CSS/JS components

These live alongside session plans but are marked as permanent (not session-scoped). They capture the invariant process while session plans capture the variable instance.

### 5.5 The Archive as Institutional Memory

The archive is not just storage -- it's a deliberate institutional memory system:
- 289 files archived on Jan 25 during the Gen 1 -> Gen 2 transition
- Archive structured by function: `COMPLETED-WAVES/`, `OLD-AUDITS/`, `OLD-METHODOLOGY/`, etc.
- Archive INDEX.md explains WHY each category was archived and WHAT remains active
- Recovery note: "If content from archived files is needed: Files are preserved unchanged"

### 5.6 The Agent Team Lessons Feedback Loop

MEMORY.md contains three explicit "Agent Team Lessons" sections, one per team deployment:
1. First Team (Builders): "Parallel builders can't iterate," "Research agents MUST write to file before returning"
2. Second Team (Auditors): "17 agents completed in ~45 min," "Synthesizer agent hardest to shut down"
3. Third Team (Fixers): "Per-file ownership eliminates all contention," "Playwright investigation disproved 2 audit findings"

Each lesson set directly informs the next plan's design. The fix execution plan (`rosy-gliding-sparkle.md`) explicitly implements lessons from the audit plan (`effervescent-cuddling-peach.md`), which implemented lessons from the build plan.

### 5.7 Scale Progression

| Metric | Gen 1 | Gen 2 | Gen 3 |
|--------|-------|-------|-------|
| Total plan files | 30 | 65+ conversion + 12 active | 15-20 per session |
| Max agents per wave | 20 | 40 | 17 |
| Largest single plan | ~11KB | ~50KB | 150KB |
| Recovery mechanisms | 1 (START-HERE) | 2 (Checkpoint + resume) | 4 (Journal + checkpoint + tracker + CLAUDE.md) |
| Verification types | 1 (manual audit) | 2 (programmatic + manual) | 3 (programmatic + visual + adversarial) |
| Total active plan space | ~200KB | ~3MB | ~800KB (fewer but denser) |

---

## 6. Key Insights

### 6.1 Plans Are Not Project Management -- They Are Agent Programming

These plans are not traditional project plans. They are **programs for agents**. The checkpoint templates, recovery protocols, and agent prompt templates are executable specifications, not status reports. The plan tells a future agent (which may be a different Claude instance after compaction) exactly what to do, read, and verify.

### 6.2 The System Learns From Its Own Failures

The MEMORY.md -> Plan -> MEMORY.md feedback loop is explicit and disciplined. Lessons are:
1. Extracted from execution experience
2. Written to MEMORY.md with specific evidence
3. Applied as constraints in the next plan
4. Verified through execution
5. Updated if the lesson was wrong (e.g., "RESOLVED -- was false positive")

### 6.3 The Cost of Recovery Increases With Capability

As the system became more capable (more agents, more complex tasks), the recovery infrastructure grew proportionally. The 150KB plan (`woolly-riding-yeti.md`) is ~40% recovery/survival content. This suggests a fundamental law: **the cost of coordination grows faster than the cost of execution**.

### 6.4 CLAUDE.md Files Are the Constitution; Plans Are Legislation

CLAUDE.md files establish immutable rules (soul pieces, process requirements, quality bars). Plans interpret those rules for specific contexts. Execution documents implement the plans. This constitutional metaphor holds consistently across the system.

### 6.5 The Conversion Plans Represent Peak Plan-to-Content Ratio

The 65 conversion plans in `conversions/` total approximately 2.86MB of planning documentation for transforming ~185 markdown files. This is a plan-to-content ratio exceeding 1:1. This may represent an over-planning inflection point, though the plans were generated programmatically (by agents) rather than manually.

---

## 7. Summary Table: Key Files and Their Roles

| File | Role | Generation | Size |
|------|------|-----------|------|
| `~/.claude/CLAUDE.md` | Global styling/behavior rules | Persistent | ~6KB |
| `CLAUDE.md` (project root) | Repository map, phase status | Persistent | ~5KB |
| `showcase/CLAUDE.md` | Process enforcement (research grounding) | Persistent | ~25KB |
| `knowledge-architecture/CLAUDE.md` | Directory orientation | Persistent | ~3KB |
| `MEMORY.md` | Cross-session learning store | Persistent | ~6KB |
| `PLAN-INDEX.md` | Navigation hub for wave plans | Gen 1 | ~11KB |
| `METHODOLOGY-EXTRACTION.md` | Reusable extraction framework | Gen 2 | ~7KB |
| `METHODOLOGY-RESTORATION.md` | Reusable restoration framework | Gen 2 | ~10KB |
| `TEMPLATES-HTML-COMPONENTS.md` | Copy-paste component library | Gen 2 | ~19KB |
| `tranquil-bouncing-koala.md` | OD execution agent team plan | Gen 3 | ~88KB |
| `rosy-gliding-sparkle.md` | OD fix execution plan | Gen 3 | ~18KB |
| `moonlit-growing-clover.md` | Phase 2D provenance pipeline | Gen 3 | ~70KB |
| `archive/INDEX.md` | Archive navigation and rationale | Meta | ~3KB |
