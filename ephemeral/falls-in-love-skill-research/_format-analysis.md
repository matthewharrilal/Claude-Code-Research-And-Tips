# Skill File Format Analysis

Research for building `/falls-in-love` skill. Based on reading 8 existing skills across `~/.claude/skills/`.

---

## A. SKILL FILE STRUCTURE CONVENTIONS

### Header / Frontmatter

Every SKILL.md starts with a YAML frontmatter block:

```yaml
---
name: skill-name
description: Full prose description of what the skill does, when to use it, and trigger phrases. This is one long string — no line breaks. Some skills include a version field (e.g., `version: 2.0.0`) but most omit it.
---
```

Key observations:
- `name` is lowercase, hyphenated (e.g., `research-compose`, `tension-composition`, `systematic-debugging`)
- `description` is a single string (can use `>` for YAML folded style, as build-page does). It includes:
  - What the skill does
  - When to invoke it
  - Trigger phrases inline ("Trigger phrases include...")
  - Some wrap trigger phrases into a `Trigger:` field in the YAML directly (build-page does this)
- No `triggers` array or separate field — trigger phrases are embedded in the description prose

### Title Line

Immediately after the frontmatter, a markdown H1 heading:

```markdown
# /skill-name — Human-Readable Title
```

Pattern: `# /command-name — Descriptive Subtitle`

Examples:
- `# /research-compose — Tripod Pipeline Orchestrator`
- `# /compose — Page Composition Orchestrator`
- `# /build-page — Page Builder (v2)`
- `# Tension-Composition Pipeline` (TC breaks the pattern — no slash prefix)
- `# Perceptual Auditing — Skill Definition` (PA also breaks — no slash)
- `# Essence Extraction` (simplest form)
- `# Systematic Debugging` (simplest form)

The `/slash-name` prefix is used by orchestrator-type skills that the user invokes as commands. Analysis/framework skills sometimes omit it.

### Opening Orientation

After the title, most skills have a 1-3 paragraph orientation block that establishes:
1. **What the agent IS** — its role identity ("You are the ORCHESTRATOR", "You are CONSTRUCTING a composition")
2. **What it does NOT do** — anti-patterns, scope limits ("You do NOT build, evaluate quality, or interpret creative decisions")
3. **The critical principle** — the one thing that matters most, often in bold

Some skills use a callout-style block for this:
```markdown
**CRITICAL PRINCIPLE — READ THIS FIRST**
```

PA skill opens with a deliberate anti-pattern warning:
```markdown
**If you are consulting this skill BEFORE building:** You are doing it wrong.
**If you are consulting this skill AFTER building:** You are doing it right.
```

### Typical Sections (in order of appearance)

**For orchestrator skills (compose, research-compose, build-page):**
1. Frontmatter + Title + Role Identity
2. Context Recovery (how to resume after context compression)
3. Quick Reference Table (phases/outputs/gates at a glance)
4. Prerequisites (input file, output directory, agent spawning conventions)
5. Instrumentation / Logging format
6. Phase 0: SETUP
7. Phase 1..N: Sequential phases with validation gates
8. Pipeline Complete (final report template)
9. Output Manifest (directory tree of all artifacts)
10. Key Principles (numbered list of design philosophy)
11. Version History (table)
12. Key Design Decisions (numbered rationale)
13. Prompt File Reference (table mapping agents to prompt files)

**For framework skills (TC, PA, essence, principle-extraction):**
1. Frontmatter + Title + Critical Principle
2. When to Use / When NOT to Use
3. Core Concepts / Laws / Rules
4. Phase 0..N: Sequential process steps
5. Specific instructions per step (more prose-heavy, less validation-gate-heavy)
6. Output expectations

**For simple utility skills (youtube-research, systematic-debugging):**
1. Frontmatter + Title
2. Prerequisites (pip install, etc.)
3. Step 1..N: Linear instructions
4. No validation gates, no agent spawning

### Agent Spawning Instructions

Orchestrator skills specify agent spawning precisely:

```markdown
**Spawn:** One Opus agent for TC derivation.

**Agent receives (provide file paths for agent to Read):**
- {list of files, with absolute paths}

**Agent does NOT receive:**
- {list of excluded files, with rationale}

**Agent prompt:** Read the full prompt from `path/to/prompt.md`...

**Agent outputs to:** `{OUTPUT_DIR}/_artifact-name.md`
```

The pattern is always: Spawn -> Receives -> Does NOT receive -> Prompt source -> Output path.

For `research-compose`, the instruction is explicitly: "Pass the file PATH to the agent and let the agent read it via the Read tool — do NOT read the full prompt into your own context." This is context-management discipline.

For `compose` (older), the instruction was: "Include full file contents in prompt." The newer pattern (research-compose) evolved to path-passing.

### File Path References

- Design system files use relative paths from project root: `design-system/compositional-core/...`
- Skill files use `~/` home-relative paths: `~/.claude/skills/tension-composition/SKILL.md`
- Output dirs use template variables: `{OUTPUT_DIR}/_tc-brief.md`
- All paths are explicitly called out — no implicit assumptions

### Validation Gates

Orchestrator skills have explicit validation between every phase:

```markdown
### Phase N Validation (YOU verify before proceeding)

1. File exists: `{OUTPUT_DIR}/_artifact.md`
2. File is > N lines (rationale for minimum)
3. Content has required sections: [list]
4. Specific quality checks: [list]

**If validation fails:** Re-spawn with feedback: "[specific remediation]"

**DO NOT proceed to Phase N+1 until Phase N validation passes.**
```

Key pattern: Gates are always phrased as what the ORCHESTRATOR checks, not what the agent self-reports. External verification, not self-assessment.

---

## B. KEY PATTERNS

### Design System File References

Skills reference design system files by relative path from project root. Common references:

```
design-system/compositional-core/identity/identity.md
design-system/compositional-core/identity/vocabulary.md
design-system/compositional-core/vocabulary/tokens.css
design-system/compositional-core/components/components.css
design-system/compositional-core/grammar/mechanism-catalog.md
```

The pattern is: skills know WHERE the design system lives and route specific files to specific agents based on what each agent needs. The orchestrator reads some files itself (Phase 0 setup) and passes others by path to agents.

### Playwright / Screenshots

Screenshot handling appears in orchestrator skills (research-compose, build-page):
- HTTP server started: `python3 -m http.server 8080 --directory "{OUTPUT_DIR}" &`
- Screenshots captured at multiple viewports (1440px, 1024px, 768px)
- Server killed after capture: `lsof -ti:8080 | xargs kill -9`
- Screenshots saved to `{OUTPUT_DIR}/_screenshots/`
- PA auditors receive ONLY screenshots, never source code

Critical rules from MEMORY.md:
- Disable scroll animations before screenshotting
- Never batch screenshots in browser_run_code
- Verify file sizes (real content = 30k+, blank = ~5-6k)

### Output Directories

Convention: `ephemeral/builds/<content-name>-<date>/`

Subdirectories created upfront:
```
_screenshots/
_pa/
_pa/_images/
_fixes/
```

All output artifacts prefixed with `_` (underscore convention for pipeline-generated files).

### Cross-Skill References

Skills reference other skills by path:
- `~/.claude/skills/tension-composition/SKILL.md` (referenced by compose, research-compose, build-page)
- `~/.claude/skills/perceptual-auditing/SKILL.md` (referenced by compose, research-compose)

The pattern is: orchestrator skill A invokes skill B by passing skill B's SKILL.md path to an agent, who reads it and follows its instructions. Skills compose via file-path delegation.

### Cost Estimates

Only the complex orchestrator skills include cost estimates:

```markdown
Cost estimate ranges per phase: Phase 1 ($3-5), Phase 2 ($10-18), ...
Estimated total per run: $30-59 base + $0-16 per refine cycle.
If cumulative upper bound exceeds $50, this is a HARD GATE: PAUSE and report to user.
```

Simple skills don't mention cost at all.

---

## C. WHAT'S DIFFERENT FOR /falls-in-love

### Fundamental Architecture Difference

Every existing skill falls into one of two categories:
1. **Orchestrator** (research-compose, compose, build-page): Spawns many agents, routes files between them, validates between phases
2. **Framework** (TC, PA, essence): Provides instructions for a SINGLE agent to follow a multi-phase process

`/falls-in-love` is closest to category 2 (Framework) but with critical differences:

| Property | Existing Framework Skills | /falls-in-love |
|----------|--------------------------|----------------|
| Phases | Linear, numbered, gated | Waves — organic, overlapping, taste-driven |
| Validation | Explicit gates between phases | None — the agent decides when it's done |
| Endpoint | Metric-based (checklist, section count) | Taste-based (the agent falls in love with what it built) |
| Agent count | 1 agent following instructions | 1 agent following its own creative judgment |
| Context | Pipeline vocabulary, design system refs | Raw content + absorbed research, no pipeline vocabulary |
| Output | Defined artifacts with required sections | One HTML file. Maybe a reflection. That's it. |

### Structural Implications

1. **No Quick Reference Table needed** — there's no multi-phase pipeline to track
2. **No Context Recovery section** — the single agent either finishes or doesn't
3. **No Validation Gates** — taste replaces metrics
4. **No Agent Spawning section** — the skill IS the agent's instructions
5. **No Output Manifest with 20+ files** — one HTML file is the deliverable
6. **No Instrumentation / Logging** — no pipeline to instrument
7. **No Prompt File Reference table** — no separate prompts to route

### What IS Needed

1. **Frontmatter** — standard format, with trigger phrases
2. **Title + Critical Principle** — the creative philosophy (like TC's "CONSTRUCTING not DISCOVERING")
3. **Input specification** — what the agent receives (content path, research files)
4. **The Process** — described as waves of absorption, not pipeline phases
5. **The Endpoint** — how the agent knows it's done (falls in love)
6. **Soul constraints** — the non-negotiable design physics (border-radius: 0, etc.)
7. **Anti-patterns** — what this skill explicitly rejects (compliance mentality, metric-chasing)

### Who Reads This File?

This is the key question. Two options:

**Option A: The orchestrator reads it, spawns one agent.**
- SKILL.md tells the orchestrator: "spawn one Opus agent, give it these files, let it run"
- Similar to how compose/research-compose tell the orchestrator to spawn a TC agent
- The orchestrator is minimal — just file routing and a single spawn

**Option B: The agent itself reads it.**
- SKILL.md IS the agent's instructions
- The user says "/falls-in-love path/to/content.md" and the current Claude instance follows SKILL.md directly
- No orchestrator/agent split — the executing Claude IS the builder
- Similar to how TC, PA, and essence work (single-agent framework skills)

**Option B is the correct model.** The TC skill, PA skill, and essence skill all work this way — the current Claude instance reads SKILL.md and follows it. There is no orchestrator for single-agent skills. The user invokes the skill, and the current Claude becomes the agent.

If the user wants it orchestrated (e.g., spawned as a subagent from research-compose), the orchestrator passes the SKILL.md path to an agent just like it does with TC. But the SKILL.md itself is written for the executing agent, not for an orchestrator.

---

## D. PROMPT FILE CONVENTIONS

### Which Skills Use Separate Prompt Files?

| Skill | Prompt Files? | Location |
|-------|--------------|----------|
| research-compose | YES — 13 files | `~/.claude/skills/research-compose/prompts/` |
| tension-composition | NO — 1 supplementary file | `STANDALONE-APPENDIX.md` alongside SKILL.md |
| perceptual-auditing | NO — 6 supplementary files | `ANTI-QUESTIONS.md`, `EMBEDDED-PROMPT.md`, `GATES.md`, `PROTOCOL.md`, `TEAM.md` alongside SKILL.md |
| build-page | NO — all in SKILL.md | (but it's 200+ lines of inline prompt construction) |
| compose | NO — all in SKILL.md | |
| essence | Partially — lens files | `lenses/universal.md`, `lenses/code.md`, etc. |
| All others | NO | |

### Pattern

Separate prompt files exist ONLY when:
1. Multiple different agents need different prompts (research-compose has 13 agents, each with a unique prompt)
2. The prompts are long enough that including them in SKILL.md would make it unmanageable

Single-agent skills keep everything in SKILL.md. Some factor out supplementary reference material into sibling files (PA's GATES.md, TC's STANDALONE-APPENDIX.md) but these are reference, not agent-routing prompts.

### Implication for /falls-in-love

**Just SKILL.md.** No prompts/ subdirectory needed. The skill is one agent following one set of instructions. If the instructions grow long, supplementary files can live alongside SKILL.md (e.g., `RESEARCH-LOADING.md` or `WAVE-GUIDE.md`), but the primary file is SKILL.md and it contains everything the agent needs.

---

## E. RECOMMENDED STRUCTURE FOR /falls-in-love SKILL.md

Based on this analysis, the file should follow this skeleton:

```markdown
---
name: falls-in-love
description: [trigger phrases, what it does, when to use it]
---

# /falls-in-love — [Subtitle]

[Critical Principle — the creative philosophy, 2-3 paragraphs]

---

## When to Use / When NOT to Use

[Scope definition]

---

## Input

[What the agent receives — content path, optional research paths]

---

## The Process

[Described as waves, not phases. No gates. Organic.]

### Wave 1: Absorption
### Wave 2: ...
### Wave N: ...

---

## The Endpoint

[How the agent knows it's done — taste, not metrics]

---

## Constraints

[The physics of the world — soul rules, non-negotiables]

---

## Anti-Patterns

[What this skill explicitly rejects]
```

Estimated length: 150-300 lines. Much shorter than research-compose (918 lines) or TC (839 lines). Closer to essence (~200 lines) or systematic-debugging (~100 lines). The skill's power is in creative freedom, not procedural density. The instructions should be evocative, not exhaustive.
