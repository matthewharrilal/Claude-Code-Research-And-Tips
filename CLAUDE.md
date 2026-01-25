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
├── extractions/             # Research organized by category (120+ files)
│   ├── orchestration/       # Ralph, Gas Town, CC Mirror, multi-agent (39 files)
│   ├── deep/                # Deep dives on key thinkers (22 files)
│   ├── techniques/          # Skills, MCP, hooks, security (9 files)
│   ├── tooling/             # Plugins, CLI tools, SDKs (13 files)
│   ├── philosophy/          # Foundational thinking, .md philosophy (7 files)
│   ├── sources/             # Platform-specific research compilations (12 files)
│   ├── cross-cutting/       # Production patterns, edge cases (7 files)
│   ├── infrastructure/      # Remote, cloud, Chrome MCP (6 files)
│   └── mobility/            # Mobile-first workflows (5 files)
│
├── synthesis/               # Processed insights and frameworks (65 files)
│   ├── architecture-*.md    # Primitives, composition, complexity ladder
│   ├── mastery-*.md         # Ralph complete, context management, multi-agent
│   ├── compare-*.md         # Architecture, orchestration, memory comparisons
│   ├── transform-*.md       # Single→autonomous, beginner→staff journeys
│   ├── taxonomy-*.md        # Tools, patterns, orchestration taxonomies
│   ├── principles-*.md      # Core principles, anti-patterns
│   ├── combinations-*.md    # Pattern combinations and extensions
│   └── MASTER-PLAYBOOK.md   # Complete capability progression guide
│
├── html-site/               # Web-ready versions (237 HTML files)
│   ├── index.html
│   ├── journeys/            # Learning path pages (NEW)
│   ├── synthesis/
│   └── extractions/spotlight/ # Deep-dive case studies (NEW)
│
├── gallery/                 # Design POC (NEW)
│   ├── ralph-mintlify-poc.html
│   └── poc-knowledge/
│
├── UI-Tips/                 # AI Design Workflows (NEW)
│   └── CLAUDE.md
│
└── mvp/                     # Pattern Website (NEW)
    └── index.html
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
| See the design POC | `gallery/ralph-mintlify-poc.html` |
| Learn AI design workflows | `UI-Tips/CLAUDE.md` |
| Explore pattern showcase | `mvp/index.html` |

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

## Methodology Reference

Consolidated methodology files in `~/.claude/plans/`:

| Task | Reference File |
|------|----------------|
| Ingest new sources | `METHODOLOGY-EXTRACTION.md` |
| Audit content quality | `METHODOLOGY-QUALITY-AUDIT.md` |
| Restore damaged content | `METHODOLOGY-RESTORATION.md` |
| Copy HTML components | `TEMPLATES-HTML-COMPONENTS.md` |

**Key Frameworks:**
- Two-layer scoring (40% content + 60% journey)
- Four-context evaluation (2AM debugging, decisions, quick lookup, mastery)
- 6-phase restoration process
- 10 transcendent patterns for multi-phase projects

---

## Current Session Work

**Latest Session:** `dreamy-tickling-pike` (2026-01-25)

**Project Phase Status:**
| Phase | Status |
|-------|--------|
| Phase 1: Extraction | ✅ COMPLETE (120+ files) |
| Phase 2A: Quality Audit | ✅ COMPLETE (83.5% rated GOOD) |
| Phase 2B: Content Enhancement | ✅ COMPLETE (checkpoints, failure handling) |
| Phase 3: HTML Generation | 🔄 IN PROGRESS |

**Recent Completions:**
- Gallery POC with resizable panels (2026-01-25)
- 4 granular commits pushed to GitHub
- Unified sidebar navigation for journeys
- README & CLAUDE.md maintenance update

**Plan Files:** `~/.claude/plans/`
- `METHODOLOGY-*.md` - Reusable frameworks for future work
- `TEMPLATES-HTML-COMPONENTS.md` - Copy-paste ready components
- `PHASE-3-MASTER-PLAN.md` - HTML generation plan
- `archive/` - Historical files (17 files)

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
