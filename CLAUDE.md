# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Repository Purpose

This is a **Claude Code research and mastery knowledge base** - a curated library documenting Claude Code workflows, patterns, orchestration techniques, and community innovations. It distills insights from:

- 150+ cataloged sources (GitHub, Twitter, YouTube, blogs, official docs)
- 40+ community thought leaders and power users
- Official Anthropic documentation and creator Boris Cherny's philosophy

**This is a documentation repository.** There is no code to build, test, or deploy.

---

## Directory Structure

```
Claude-Research-And-Tips/
├── SOURCE-INDEX.md          # Master bibliography (150+ sources, START HERE)
├── claude-code-mastery.md   # Core techniques from basics to autonomous
├── ideas-lab.md             # Experimental concepts and compound intelligence
├── productivity-workflows.md # Daily routines and feedback loops
│
├── extractions/             # Research organized by category
│   ├── orchestration/       # Ralph, Gas Town, CC Mirror, multi-agent (21 files)
│   ├── deep/                # Deep dives on key thinkers (12 files)
│   ├── techniques/          # Skills, MCP, hooks, security (8 files)
│   ├── tooling/             # Plugins, CLI tools, SDKs (7 files)
│   ├── philosophy/          # Foundational thinking, .md philosophy (7 files)
│   ├── sources/             # Platform-specific research compilations (9 files)
│   ├── cross-cutting/       # Production patterns, edge cases (7 files)
│   ├── infrastructure/      # Remote, cloud, Chrome MCP (3 files)
│   └── mobility/            # Mobile-first workflows (4 files)
│
├── synthesis/               # Processed insights and frameworks (42 files)
│   ├── architecture-*.md    # Primitives, composition, complexity ladder
│   ├── mastery-*.md         # Ralph complete, context management, multi-agent
│   ├── compare-*.md         # Architecture, orchestration, memory comparisons
│   ├── transform-*.md       # Single→autonomous, beginner→staff journeys
│   ├── taxonomy-*.md        # Tools, patterns, orchestration taxonomies
│   ├── principles-*.md      # Core principles, anti-patterns
│   ├── combinations-*.md    # Pattern combinations and extensions
│   └── MASTER-PLAYBOOK.md   # Complete capability progression guide
│
└── html-site/               # Web-ready versions
    ├── index.html
    ├── synthesis/
    └── extractions/
```

---

## Key Entry Points

| If You Want To... | Start Here |
|-------------------|------------|
| Understand the source ecosystem | `SOURCE-INDEX.md` |
| Learn fundamentals (Boris Cherny's workflow) | `claude-code-mastery.md` |
| See the full capability progression | `synthesis/MASTER-PLAYBOOK.md` |
| Understand the complexity ladder (Level 0-7) | `synthesis/architecture-complexity-ladder.md` |
| Deep dive on Ralph pattern | `synthesis/mastery-ralph-complete.md` |
| Make architectural decisions | `synthesis/JUDGMENT-GUIDE.md` |

---

## File Naming Conventions

| Directory | Pattern | Example |
|-----------|---------|---------|
| `extractions/orchestration/` | `NNN-descriptive-name-source.md` | `005-ralph-wiggum-loop-pocock.md` |
| `extractions/deep/` | `name-extraction.md` | `boris-cherny-extraction.md` |
| `synthesis/` | `category-subcategory.md` | `mastery-context-management.md` |
| Master files | `ALL-CAPS.md` | `MASTER-PLAYBOOK.md`, `JUDGMENT-GUIDE.md` |

---

## Core Concepts

**Patterns:**
- **Ralph Wiggum Loop** - `while :; do cat PROMPT.md | claude-code ; done` for continuous iteration
- **Gas Town** - Steve Yegge's agent factory (Mayor, Deacon, Dogs, Refinery)
- **CC Mirror** - Hidden multi-agent orchestration enablement
- **Personal Panopticon** - 8 parallel Claude instances managing life domains

**Frameworks:**
- **8 Core Principles** - Context as constraint, external state > internal memory, fresh context > extended sessions, etc.
- **Complexity Ladder** - Level 0 (single session) → Level 7 (factory-scale autonomous)
- **8-Stage Developer Evolution** - From basic prompting to orchestration architect

**Key Thinkers:**
- Boris Cherny (Claude Code creator) - Vanilla workflow, verification loops
- Steve Yegge - Gas Town, 6 Waves of AI
- Matt Pocock / Ryan Carson - Ralph pattern evolution
- Molly Cantillon - Personal Panopticon architecture

---

## Current Session Work

**Session:** `shiny-finding-pnueli`

**Status:**
```
Phase 1: Extraction       ✅ COMPLETE (12 files, 10,000+ lines)
Phase 2A: Audit           ✅ COMPLETE (25 agents, 116 files)
Phase 2B: Content Create  🔲 PENDING (checkpoints, failure handling)
Phase 3: HTML Overhaul    🔲 BLOCKED BY 2B
```

**Key Finding:** Content is 83.5% GOOD but structured as REFERENCE, not USER JOURNEY. 70% lack checkpoints, 50% lack failure handling.

**Plan Files:** `~/.claude/plans/`
- `START-HERE-AFTER-CONTEXT-LOSS.md` - Quick orientation
- `CONTEXT-RECOVERY-2026-01-10.md` - Full reasoning chain
- `PHASE-2B-CONTENT-CREATION.md` - Next steps with templates
- `shiny-finding-pnueli.md` - Master session plan

---

## Working in This Repository

**Adding New Content:**
1. Extractions go in `/extractions/[category]/`
2. Synthesized insights go in `/synthesis/`
3. Follow naming conventions above
4. Update cross-references in related files

**Quality Standards:**
- Extractions: 400-600+ lines, mental models transferable
- Synthesis: Cross-referenced, navigation clear
- All files: Source attribution, reliability ratings where applicable

**User Journey Requirements (for tutorials):**
- ORIENTATION - "You are here" context
- MOTIVATION - Pain point framing
- PROCEDURES - Numbered steps, copy-paste ready
- CHECKPOINTS - "You should see..." verification
- FAILURE - Error glossary with recovery

---

## 100% Score Template Files

Use these as models for new content:
- `synthesis/architecture-complexity-ladder.md`
- `synthesis/mastery-ralph-complete.md`
- `synthesis/JUDGMENT-GUIDE.md`
- `extractions/orchestration/research-ralph-expanded.md`
