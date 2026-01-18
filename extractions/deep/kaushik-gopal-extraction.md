# Kaushik Gopal: The Complete Mental Model
## Principal Engineer at Instacart - AGENTS.md & Planning-First Pioneer

---
## D-FINAL Connection
**Contributed to:** D-FINAL-mental-models.md
**Last enhanced:** 2026-01-18 (Phase 2B)
---

> "Claude Code really nailed the onboarding experience for agentic coding."

---

## TIER 2 EXTRACTION: Practitioner Level

**Status:** COMPLETE
**Depth:** Deep extraction (350+ lines)
**Research Date:** 2026-01-13
**Sources:** kau.sh blog, Bluesky, LinkedIn

---

## Part I: Who Is Kaushik Gopal?

### Professional Identity

Kaushik Gopal (@kau.sh) is a Principal Engineer at Instacart, leading development of Caper smart carts. He is known for his systematic approach to AI tooling and pioneering the AGENTS.md single-source-of-truth methodology.

### Public Presence

- **Bluesky:** @kau.sh
- **Website:** kau.sh
- **LinkedIn:** gopalkaushik
- **Podcast:** Fragmented (Android development)

### Background

Kaushik brings a unique perspective:
- **Google Developer Expert (Android)** - Deep mobile expertise
- **Fragmented podcast host** - Popular Android developer podcast
- **Systems thinker** - Approaches AI tooling as infrastructure
- **Principal-level experience** - Staff+ decision making

### Key Distinction

Unlike practitioners who focus on one tool, Kaushik uses **multiple AI coding tools** (Claude Code, Cursor, Gemini CLI, Codex, Firebender) and has developed systems to keep them in sync.

---

## Part II: The AGENTS.md Philosophy

### What Is AGENTS.md?

AGENTS.md is a master instructions file that provides persistent rules shaping every interaction with AI coding agents.

> "One of the simplest ways you can do this is with your master instructions or AGENTS.md file."

### The Problem It Solves

When using multiple AI tools, you face:
- Different instruction formats per tool
- Repetitive updates across configs
- Inconsistent behavior between tools
- Maintenance burden

### The Solution: Single Source of Truth

```
┌─────────────────────────────────────────────────────────────┐
│              SINGLE SOURCE OF TRUTH PATTERN                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                     ┌─────────────┐                         │
│                     │  AGENTS.md  │                         │
│                     │ (MASTER)    │                         │
│                     └──────┬──────┘                         │
│                            │                                 │
│           ┌────────────────┼────────────────┐               │
│           │                │                │               │
│           ▼                ▼                ▼               │
│    ┌──────────┐     ┌──────────┐     ┌──────────┐          │
│    │ CLAUDE.md│     │ .cursorrules│  │.gemini/   │          │
│    │ (pointer)│     │ (pointer)│     │settings   │          │
│    └──────────┘     └──────────┘     └──────────┘          │
│                                                              │
│  Each tool-specific file POINTS to AGENTS.md                │
│  Edit once, applies everywhere                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Part III: Implementation Details

### Tool-Specific Pointers

#### Claude Code

```markdown
# CLAUDE.md
See AGENTS.md for instructions.
```

#### Cursor

Points `.cursorrules` to reference AGENTS.md content.

#### Gemini CLI

Uses `.gemini/settings.json` to configure system prompt from AGENTS.md.

#### Firebender

References via `.firebender/firebender.json`.

### Nested AGENTS.md Support

Modern tools recognize folder-specific instruction files:

```
project/
├── AGENTS.md              # Project-wide instructions
├── backend/
│   └── AGENTS.md          # Backend-specific rules
├── frontend/
│   └── AGENTS.md          # Frontend-specific rules
└── tests/
    └── AGENTS.md          # Testing conventions
```

This prevents parent files from becoming bloated with context-specific rules.

---

## Part IV: The .ai/ Folder Structure

### Organizing AI Assets

Kaushik creates a `.ai/` folder for AI-related artifacts:

```
project/
└── .ai/
    ├── commands/          # Prompt templates for frequent tasks
    ├── skills/            # Progressive disclosure-based tools
    └── plans/             # Technical execution plans
```

### Why This Structure?

| Folder | Purpose | Example |
|--------|---------|---------|
| `commands/` | Repeatable prompts | `/review`, `/test`, `/deploy` |
| `skills/` | Domain-specific behaviors | `react-patterns.md`, `api-design.md` |
| `plans/` | Major change plans | `migration-plan.md`, `refactor-auth.md` |

---

## Part V: The /init Command

### What Claude Code Does Right

> "Claude Code really nailed the onboarding experience for agentic coding."

Kaushik praises the `/init` command:

> "Using the /init command, you get a CLAUDE.md that delivers better results than a repo without proper system instructions."

### Build Your Own /init

Kaushik's blog post details building custom `/init` commands:

1. **Scan repository structure** - Understand project layout
2. **Detect frameworks** - React, Django, Rails, etc.
3. **Identify conventions** - Existing patterns in code
4. **Generate AGENTS.md** - Custom to your repo

### The Value Proposition

> "It's a clever way to ramp a repo fast."

Instead of manually writing instructions, let AI analyze your codebase and generate appropriate context.

---

## Part VI: Progressive Disclosure Philosophy

### Why Kaushik Values It

On Anthropic's Agent Skills:

> "I don't think the innovation is what Skills does or achieves, but rather how it does it that's super interesting."

### The Key Mechanism

```
Startup:
┌─────────────────────────────────────────────────────────────┐
│ Claude scans each Skill's YAML frontmatter                  │
│ Builds a lightweight index with minimal token cost          │
│ Only loads full details when relevant                       │
└─────────────────────────────────────────────────────────────┘

Runtime:
┌─────────────────────────────────────────────────────────────┐
│ User asks about React patterns                              │
│ Index matches to "react-patterns" skill                     │
│ Full skill content loaded on-demand                         │
│ Context window preserved for actual work                    │
└─────────────────────────────────────────────────────────────┘
```

### Connection to Context Engineering

> "Anthropic's ongoing push on context engineering as the next frontier."

Kaushik sees Skills as part of a larger pattern: intelligent context management.

---

## Part VII: Maintenance Philosophy

### Instructions Require Pruning

> "You need to be pruning and tweaking these instructions to get the best results."

### The Maintenance Loop

```
1. Use AI tools → 2. Notice suboptimal behavior → 3. Update AGENTS.md
                                    ↑                        │
                                    └────────────────────────┘
```

### What to Prune

- Outdated patterns (framework changed)
- Redundant rules (AI already knows)
- Overly specific instructions (context bloat)
- Conflicting guidance (confuses the model)

### When to Add

- Repeated mistakes (same error twice)
- Project-specific conventions
- Architecture decisions
- Integration patterns

---

## Part VIII: Multi-Tool Reality

### The Problem

> "If you use multiple tools (Claude, Cursor, Gemini CLI, Codex, Firebender), then updating the same rules for each quickly becomes untenable."

### Kaushik's Toolset

| Tool | Use Case |
|------|----------|
| **Claude Code** | Complex features, planning |
| **Cursor** | Quick edits, IDE integration |
| **Gemini CLI** | Google ecosystem work |
| **Codex** | Specific code generation |
| **Firebender** | Experimentation |

### The Solution (Again)

Single AGENTS.md → Multiple tool configs pointing to it.

---

## Part IX: Planning-First Approach

### Why Planning Matters

Kaushik's approach emphasizes:
1. Think before coding
2. Document the plan
3. Execute with AI
4. Capture learnings

### Plans Folder

```
.ai/plans/
├── q1-migration-plan.md
├── auth-refactor.md
└── performance-optimization.md
```

Each plan contains:
- Problem statement
- Proposed solution
- Step-by-step execution
- Acceptance criteria
- Risk considerations

---

## Part X: Mental Model Summary

### The Kaushik Gopal Mental Model

```
┌─────────────────────────────────────────────────────────────┐
│               KAUSHIK GOPAL'S APPROACH                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CORE PRINCIPLE: "Single source of truth for AI"            │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ CENTRALIZATION                                        │   │
│  │ • AGENTS.md as master file                           │   │
│  │ • Tool configs point to master                       │   │
│  │ • Edit once, applies everywhere                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ ORGANIZATION                                          │   │
│  │ • .ai/ folder for AI artifacts                       │   │
│  │ • commands/ for repeatable prompts                   │   │
│  │ • skills/ for domain knowledge                       │   │
│  │ • plans/ for major changes                           │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ PROGRESSIVE DISCLOSURE                                │   │
│  │ • Minimal token cost at startup                      │   │
│  │ • Full details loaded on demand                      │   │
│  │ • Context window preserved                           │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ MAINTENANCE                                           │   │
│  │ • Continuous pruning and tweaking                    │   │
│  │ • Remove outdated rules                              │   │
│  │ • Add learnings from mistakes                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Part XI: Actionable Takeaways

### Immediate Actions

1. **Create AGENTS.md** in your repo root
2. **Point tool configs** to AGENTS.md
3. **Run /init** if using Claude Code
4. **Create .ai/ folder** for AI artifacts

### Medium-Term

1. **Add nested AGENTS.md** for subdirectories
2. **Build command library** for repeated tasks
3. **Document skills** for domain patterns
4. **Create plans folder** for major work

### Ongoing

1. **Prune regularly** - Remove stale rules
2. **Add learnings** - Capture mistakes
3. **Sync configs** - Keep tools aligned
4. **Review effectiveness** - Does this still help?

---

## Part XII: Quotes in Kaushik's Voice

### On AGENTS.md

> "One of the simplest ways you can do this is with your master instructions or AGENTS.md file."

> "You need to be pruning and tweaking these instructions to get the best results."

### On Claude Code

> "Claude Code really nailed the onboarding experience for agentic coding."

> "It's a clever way to ramp a repo fast."

### On Skills

> "I don't think the innovation is what Skills does or achieves, but rather how it does it that's super interesting."

### On Multi-Tool Reality

> "If you use multiple tools (Claude, Cursor, Gemini CLI, Codex, Firebender), then updating the same rules for each quickly becomes untenable."

---

## Part XIII: Sources

### Primary

1. **AGENTS.md Blog Post:** https://kau.sh/blog/agents-md/
2. **Build /init Command:** https://kau.sh/blog/build-ai-init-command/
3. **Bluesky Profile:** https://bsky.app/profile/kau.sh

### Secondary

4. **Personal Site:** https://kau.sh/
5. **About Page:** https://kau.sh/about
6. **LinkedIn:** https://www.linkedin.com/in/gopalkaushik/

---

## Verification: Extraction Complete

- [x] Professional identity verified
- [x] AGENTS.md methodology documented
- [x] Progressive disclosure philosophy captured
- [x] Multi-tool strategy explained
- [x] Maintenance approach detailed
- [x] Mental model extractable

---

## Tags

`#kaushik-gopal` `#instacart` `#principal-engineer` `#agents-md` `#single-source-of-truth` `#progressive-disclosure` `#multi-tool` `#planning-first` `#practitioner` `#android-gde`

---

*Extracted: 2026-01-13*
*Agent: Claude Opus 4.5*
*Depth: Tier 2 practitioner extraction (350+ lines)*
