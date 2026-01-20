# Lisa: Specification Interview Workflow for Claude Code
## "Lisa Plans. Ralph Does." - BLEN Engineering's Planning-to-Execution Pipeline

---
## D-FINAL Connection
**Contributes to:** D-FINAL-implementation.md (Section 3 - Ralph Variants)
**Category:** Orchestration/Planning
**Complexity Level:** 3-4 (Pre-Ralph Planning Phase)
---

> "Lisa plans. Ralph does."
> -- BLEN Engineering Team

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What Lisa Is](#2-what-lisa-is)
3. [Why Lisa Matters](#3-why-lisa-matters)
4. [Architecture Deep Dive](#4-architecture-deep-dive)
5. [Key Features](#5-key-features)
6. [Installation and Setup](#6-installation-and-setup)
7. [Configuration Options](#7-configuration-options)
8. [The Interview Process](#8-the-interview-process)
9. [Output Artifacts](#9-output-artifacts)
10. [Integration Patterns](#10-integration-patterns)
11. [Comparison to Other Ralphs](#11-comparison-to-other-ralphs)
12. [Mental Models](#12-mental-models)
13. [Checkpoints](#13-checkpoints)
14. [Troubleshooting](#14-troubleshooting)
15. [Source Attribution](#15-source-attribution)

---

## 1. You Are Here

```
                    THE DEVELOPMENT WORKFLOW PIPELINE

    PLANNING PHASE                    EXECUTION PHASE
    ==============                    ===============

    ┌─────────────┐                  ┌─────────────────┐
    │   LISA      │     specs/       │     RALPH       │
    │  (Planning) │ ──────────────►  │  (Execution)    │
    │             │    .md, .json    │                 │
    │ "Interview" │    progress.txt  │ "Loop & Build"  │
    └─────────────┘                  └─────────────────┘
           │                                  │
           │                                  │
           ▼                                  ▼
    Requirements             ────►      Working Code


    ╔═══════════════════════════════════════════════════════════╗
    ║                  COMPLEXITY LADDER POSITION               ║
    ╠═══════════════════════════════════════════════════════════╣
    ║                                                           ║
    ║  Level 0: Single session                    [ ]           ║
    ║  Level 1: CLAUDE.md + Slash Commands        [ ]           ║
    ║  Level 2: Subagents + Hooks                 [ ]           ║
    ║  Level 3: Simple Loops (Basic Ralph)        [*]           ║
    ║  Level 3.5: LISA (Spec Generation)          [*] <── HERE  ║
    ║  Level 4: PRD-Driven Loops (Full Ralph)     [ ]           ║
    ║  Level 5: Multi-Agent (CC Mirror)           [ ]           ║
    ║  Level 6: Parallel Swarms + Worktrees       [ ]           ║
    ║  Level 7: Factory-Scale (Gas Town)          [ ]           ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
```

### What This Document Covers

Lisa is a **Claude Code plugin** that automates the specification gathering process before Ralph loops execute. It sits at Level 3.5 on the complexity ladder - the critical bridge between having an idea and having executable user stories.

**Lisa answers the question:** "How do I create the PRD that Ralph needs?"

### Prerequisites

| Requirement | Description |
|-------------|-------------|
| Claude Code | Installed and configured |
| Plugin Support | Claude Code with marketplace access |
| Ralph Understanding | Basic familiarity with Ralph pattern |
| Project Context | A feature idea you want to specify |

### Who This Is For

- Developers who struggle with PRD creation for Ralph loops
- Teams wanting systematic requirement gathering
- Solo devs who need structured self-interviewing
- Anyone who finds creating acceptance criteria challenging

---

## 2. What Lisa Is

### The Core Concept

Lisa is an **interactive specification interview workflow** for Claude Code. It conducts systematic, in-depth interviews about feature requirements and generates comprehensive technical specifications that Ralph can execute.

```
┌────────────────────────────────────────────────────────────────┐
│                     LISA'S PURPOSE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  INPUT:  "I want to add user authentication"                   │
│                                                                │
│  LISA:   Conducts 15-30 question interview covering:           │
│          - Scope boundaries                                    │
│          - User stories with acceptance criteria               │
│          - Technical implementation details                    │
│          - Edge cases and error handling                       │
│          - Trade-offs and priorities                           │
│          - Implementation phases                               │
│                                                                │
│  OUTPUT: - Markdown specification (human-readable)             │
│          - JSON specification (machine-readable for Ralph)     │
│          - Progress tracking file                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### The Name Philosophy

The "Lisa plans. Ralph does." tagline captures the division of labor:

| Role | Named After | Responsibility |
|------|-------------|----------------|
| **Lisa** | Lisa Simpson (The Simpsons) | Intelligent, thorough planning |
| **Ralph** | Ralph Wiggum (The Simpsons) | Persistent, dogged execution |

Lisa is the thoughtful planner who asks the right questions. Ralph is the tireless worker who implements until done. Together they form a complete pipeline.

### Plugin Identity

| Attribute | Value |
|-----------|-------|
| **Repository** | github.com/blencorp/lisa |
| **Author** | BLEN Engineering Team (Mike Endale + Claude) |
| **Version** | 1.1.0 |
| **Language** | Shell (100%) |
| **Stars** | 79+ |
| **License** | Open source |

---

## 3. Why Lisa Matters

### The Problem Lisa Solves

The Ralph Wiggum pattern requires well-structured PRDs with:
- Clear user stories
- Verifiable acceptance criteria
- Proper task ordering
- Right-sized tasks

**Most Ralph failures trace back to poor specification:**

```
COMMON RALPH FAILURE MODES           LISA PREVENTION
━━━━━━━━━━━━━━━━━━━━━━━━            ━━━━━━━━━━━━━━━━
Tasks too large                      Interview forces decomposition
Vague acceptance criteria            Systematic criteria extraction
Missing edge cases                   Dedicated edge case questions
Wrong task order                     Implementation phases defined
No verification steps                Built-in verification in output
```

### The Spec-Driven Development Insight

Community wisdom from Thariq (December 2025):
> "My favorite way to use Claude Code to build large features is spec-based: start with a minimal spec or prompt and ask Claude to interview you using the AskUserQuestionTool, then make a new session to execute the spec."

Lisa formalizes this approach into a repeatable plugin.

### The Planning Investment

```
TIME INVESTMENT COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━

Without Lisa:                    With Lisa:
├── Jump into coding             ├── 20-30 min interview
├── Hit blockers                 ├── Clear spec generated
├── Backtrack                    ├── Ralph executes cleanly
├── Re-plan                      ├── Minimal rework
├── Try again                    └── Ship faster
├── Eventually ship
└── Total: 3-5x longer

"Measure twice, cut once" - applied to AI-assisted development
```

### Value Proposition

| Without Lisa | With Lisa |
|--------------|-----------|
| Manual PRD creation | Automated interview |
| Miss edge cases | Systematic coverage |
| Vague criteria | Verifiable criteria |
| Human bias in scoping | Structured questioning |
| Inconsistent format | Standard output |
| Ralph failures from bad specs | Ralph success from good specs |

---

## 4. Architecture Deep Dive

### Plugin Structure

```
lisa/
├── .claude-plugin/           # Plugin metadata & configuration
│   └── metadata.json         # Plugin identity and version
│
├── commands/                 # Four command definitions
│   ├── plan.md              # Main interview initiation
│   ├── resume.md            # Continue interrupted interviews
│   ├── cleanup.md           # Remove state files
│   └── help.md              # Documentation display
│
├── hooks/                    # Minimal hook configuration
│   └── (empty or minimal)   # Lisa is command-driven, not hook-driven
│
├── scripts/                  # Interview initialization
│   └── setup-lisa.sh        # Core interview logic
│
└── README.md                 # Documentation
```

### State Management

Lisa uses file-based state to persist across sessions:

```
YOUR PROJECT/
├── .claude/                    # Claude Code state directory
│   ├── lisa-{feature-slug}.md  # Interview state tracking
│   └── lisa-draft.md           # Continuously updated draft spec
│
└── docs/specs/                 # Output directory (configurable)
    ├── {feature}.md            # Final markdown specification
    ├── {feature}.json          # Machine-readable JSON spec
    └── {feature}-progress.txt  # Ralph integration file
```

### Interview Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         LISA INTERVIEW FLOW                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────┐                                                       │
│  │ /lisa:plan  │                                                       │
│  │ "Feature X" │                                                       │
│  └──────┬──────┘                                                       │
│         │                                                               │
│         ▼                                                               │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    INITIALIZATION PHASE                          │   │
│  │  1. Run setup-lisa.sh with arguments                            │   │
│  │  2. Create state file (.claude/lisa-{slug}.md)                  │   │
│  │  3. Create draft file (.claude/lisa-draft.md)                   │   │
│  │  4. If --context provided, load initial requirements            │   │
│  │  5. If --first-principles, enable assumption-challenging        │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │              FIRST PRINCIPLES PHASE (Optional)                   │   │
│  │                                                                  │   │
│  │  If --first-principles flag enabled:                            │   │
│  │                                                                  │   │
│  │  Q1: "What specific problem triggered this idea?"               │   │
│  │  Q2: "What if we don't build it?"                               │   │
│  │  Q3: "What's the simplest solution that could work?"            │   │
│  │  Q4: "What assumptions are we making?"                          │   │
│  │  Q5: "Is this the right approach?"                              │   │
│  │                                                                  │   │
│  │  Only proceeds to detailed spec if approach validated           │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                     INTERVIEW PHASE                              │   │
│  │                                                                  │   │
│  │  Uses AskUserQuestion tool exclusively (never plain text)       │   │
│  │                                                                  │   │
│  │  SCOPE DEFINITION                                                │   │
│  │  • What are explicit boundaries?                                 │   │
│  │  • What's MVP vs future work?                                    │   │
│  │  • What's explicitly out of scope?                               │   │
│  │                                                                  │   │
│  │  USER STORIES                                                    │   │
│  │  • What discrete features are needed?                            │   │
│  │  • What are the acceptance criteria for each?                    │   │
│  │  • How do we verify completion?                                  │   │
│  │                                                                  │   │
│  │  TECHNICAL IMPLEMENTATION                                        │   │
│  │  • Data models required?                                         │   │
│  │  • API endpoints needed?                                         │   │
│  │  • Third-party integrations?                                     │   │
│  │  • Error handling strategy?                                      │   │
│  │  • Authentication/authorization?                                 │   │
│  │                                                                  │   │
│  │  USER EXPERIENCE                                                 │   │
│  │  • User flows?                                                   │   │
│  │  • Edge cases?                                                   │   │
│  │  • Accessibility requirements?                                   │   │
│  │  • Error states and messaging?                                   │   │
│  │                                                                  │   │
│  │  TRADE-OFFS                                                      │   │
│  │  • Performance vs features?                                      │   │
│  │  • Security vs convenience?                                      │   │
│  │  • Scalability considerations?                                   │   │
│  │  • Technical debt acceptance?                                    │   │
│  │                                                                  │   │
│  │  IMPLEMENTATION PHASES                                           │   │
│  │  • 2-4 incremental phases                                        │   │
│  │  • Verification commands per phase                               │   │
│  │  • Dependencies between phases                                   │   │
│  │                                                                  │   │
│  │  Continues until user says "done", "finalize", or "complete"    │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                   FINALIZATION PHASE                             │   │
│  │                                                                  │   │
│  │  CRITICAL CONSTRAINTS:                                           │   │
│  │  ✓ Read files for spec compilation                              │   │
│  │  ✓ Write final .md specification                                │   │
│  │  ✓ Write final .json specification                              │   │
│  │  ✓ Write progress.txt (all phases [PENDING])                    │   │
│  │  ✓ Delete state file                                            │   │
│  │                                                                  │   │
│  │  ✗ NO Bash commands                                              │   │
│  │  ✗ NO code edits via Edit tool                                   │   │
│  │  ✗ NO subagent launches via Task tool                            │   │
│  │  ✗ NO implementation work                                        │   │
│  │                                                                  │   │
│  │  Output "SPEC COMPLETE" then STOP                                │   │
│  └──────────────────────────────┬──────────────────────────────────┘   │
│                                 │                                       │
│                                 ▼                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                      OUTPUT FILES                                │   │
│  │                                                                  │   │
│  │  docs/specs/{feature}.md      Human-readable specification      │   │
│  │  docs/specs/{feature}.json    Machine-readable for Ralph        │   │
│  │  docs/specs/{feature}-progress.txt   Phase tracking file        │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Tool Permissions

Lisa is intentionally constrained in what tools it can use:

| Phase | Allowed Tools | Prohibited Tools |
|-------|---------------|------------------|
| Interview | AskUserQuestion, Read | Bash, Edit, Task |
| Finalization | Read, Write | Bash, Edit, Task |

This constraint ensures Lisa never accidentally starts implementing during specification.

---

## 5. Key Features

### 5.1 Interactive Interview System

Lisa uses the **AskUserQuestion tool exclusively** for all user interaction:

```
WHY AskUserQuestion ONLY:
━━━━━━━━━━━━━━━━━━━━━━━━

1. Creates structured conversation flow
2. Prevents accidental plain-text that users miss
3. Ensures questions are answerable
4. Captures responses for spec generation
5. Allows resume functionality to work

INTERVIEW QUALITY REQUIREMENT:
"Ask substantive questions beyond surface-level understanding"

NOT THIS:                        THIS:
"What should it do?"            "When the user submits the form with
                                 invalid data, should we show inline
                                 errors immediately, or wait for
                                 submit and show a summary?"
```

### 5.2 First Principles Mode

The `--first-principles` flag adds an assumption-challenging phase before detailed specification:

```bash
/lisa:plan "Add user authentication" --first-principles
```

**First Principles Questions:**

1. "What specific problem triggered this idea?"
2. "What if we don't build it?"
3. "What's the simplest solution that could work?"
4. "What assumptions are we making?"
5. "Is this the right approach given the constraints?"

**When to Use:**
- Greenfield features
- Uncertain requirements
- When stakeholders haven't validated the approach
- Before large investments of Ralph loop time

### 5.3 Context Loading

Load existing documents to inform the interview:

```bash
/lisa:plan "Payment processing" --context requirements/payments-prd.md
```

This pre-loads:
- Existing PRDs
- Requirements documents
- Technical specs
- User research

Lisa incorporates this context into questions, avoiding redundant exploration.

### 5.4 Interview Resume

Interrupted interviews can be continued:

```bash
/lisa:resume
```

**How It Works:**

1. Scans for `.claude/lisa-*.md` state files
2. Presents options to user via AskUserQuestion
3. Loads selected state file and draft
4. Continues from last question

**State Persistence:**
- Feature name stored in YAML frontmatter
- Interview progress tracked
- Draft spec continuously updated

### 5.5 Clean Slate

Remove all interview state:

```bash
/lisa:cleanup
```

**What Gets Deleted:**
- `.claude/lisa-*.md` (state files)
- `.claude/lisa-draft.md` (draft)

**What's Preserved:**
- Completed specs in `docs/specs/`
- Git history

---

## 6. Installation and Setup

### Method 1: Marketplace (Recommended)

```bash
# Step 1: Add the marketplace
/plugin marketplace add blencorp/lisa

# Step 2: Install the plugin
/plugin install lisa
```

### Method 2: Local Development

```bash
# Clone the repository
git clone https://github.com/blencorp/lisa.git ~/lisa-plugin

# Run Claude Code with plugin loaded
cc --plugin-dir ~/lisa-plugin
```

This method enables rapid iteration on plugin behavior.

---

## Checkpoint: After Installation

**Where you are:** Lisa plugin installed and ready.
**What this enables:** Systematic specification interviews for any feature.

**Verify your state:**
```bash
# Check Lisa is available
/lisa:help
```

**You should see:**
- Command list (plan, resume, cleanup, help)
- Usage instructions
- Integration documentation

**If you don't see help:**
- Check: Did marketplace add succeed?
- Check: Did install succeed?
- Try: Restart Claude Code session
- Go back to: Installation step

---

## 7. Configuration Options

### Command Options

| Option | Description | Default |
|--------|-------------|---------|
| `--context <file>` | Load existing PRD or requirements | None |
| `--output-dir <dir>` | Custom specification output location | `docs/specs` |
| `--max-questions <n>` | Limit interview rounds | Unlimited |
| `--first-principles` | Challenge assumptions before planning | Off |

### Usage Examples

```bash
# Basic feature interview
/lisa:plan "User authentication"

# With existing context
/lisa:plan "Payment processing" --context docs/requirements/payments.md

# Custom output location
/lisa:plan "Dashboard redesign" --output-dir specs/frontend

# Limited interview (quick spec)
/lisa:plan "Add logout button" --max-questions 10

# Full challenge mode
/lisa:plan "Rebuild search engine" --first-principles --context docs/search-prd.md
```

---

## 8. The Interview Process

### Question Categories

Lisa systematically covers six dimensions:

```
┌────────────────────────────────────────────────────────────────┐
│                 LISA INTERVIEW DIMENSIONS                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. SCOPE DEFINITION                                           │
│     ├── Explicit boundaries                                    │
│     ├── MVP constraints                                        │
│     └── Out-of-scope declarations                              │
│                                                                │
│  2. USER STORIES                                               │
│     ├── Discrete, verifiable features                          │
│     ├── Acceptance criteria per story                          │
│     └── Priority ordering                                      │
│                                                                │
│  3. TECHNICAL IMPLEMENTATION                                   │
│     ├── Data models and schemas                                │
│     ├── API endpoints and contracts                            │
│     ├── Third-party integrations                               │
│     ├── Error handling patterns                                │
│     └── Authentication/authorization                           │
│                                                                │
│  4. USER EXPERIENCE                                            │
│     ├── User flows and journeys                                │
│     ├── Edge case handling                                     │
│     ├── Accessibility requirements                             │
│     └── Error states and messaging                             │
│                                                                │
│  5. TRADE-OFFS                                                 │
│     ├── Performance vs features                                │
│     ├── Security vs convenience                                │
│     ├── Scalability considerations                             │
│     └── Scope vs timeline                                      │
│                                                                │
│  6. IMPLEMENTATION PHASES                                      │
│     ├── 2-4 incremental steps                                  │
│     ├── Verification commands per phase                        │
│     └── Dependencies between phases                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Interview Best Practices

**As the Interviewee:**

1. **Be Specific** - "Users can reset password" is better than "password stuff"
2. **Define Done** - Every feature needs measurable completion criteria
3. **Think Edge Cases** - What happens when things go wrong?
4. **Prioritize** - What's MVP vs nice-to-have?
5. **Be Honest About Unknowns** - Lisa can note uncertainties

**Lisa's Questioning Philosophy:**

> "Ask substantive questions beyond surface-level understanding"

Lisa won't ask:
- "What should the feature do?" (too vague)
- "Is it important?" (obvious yes)

Lisa will ask:
- "When validation fails on the email field, should error messages appear inline immediately, or after submit with a summary at top?"
- "If the user's session expires mid-checkout, should we persist their cart? For how long?"

---

## 9. Output Artifacts

### 9.1 Markdown Specification

Human-readable document for review and discussion:

```markdown
# Feature: User Authentication

## Overview
Enable secure user registration and login for the application.

## Scope
### In Scope
- Email/password registration
- Login with session management
- Password reset flow

### Out of Scope
- Social login (OAuth)
- Two-factor authentication
- Single sign-on

## User Stories

### US-001: User Registration
**As a** visitor
**I want to** create an account
**So that** I can access personalized features

**Acceptance Criteria:**
- [ ] Registration form with email/password
- [ ] Email validation (format + uniqueness)
- [ ] Password strength requirements displayed
- [ ] Success redirects to dashboard
- [ ] `npm run typecheck` passes
- [ ] `npm run test` passes

### US-002: User Login
...

## Technical Design

### Data Model
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/reset-password

## Implementation Phases

### Phase 1: Foundation
- Database schema
- User model
- Verification: `npm run db:migrate && npm run typecheck`

### Phase 2: Core Auth
- Registration endpoint
- Login endpoint
- Session management
- Verification: `npm run test:auth`

### Phase 3: UI
- Registration form component
- Login form component
- Verification: `npm run test && npm run build`
```

### 9.2 JSON Specification (snarktank/ralph Compatible)

Machine-readable format for Ralph execution:

```json
{
  "project": "user-authentication",
  "branchName": "ralph/user-authentication",
  "description": "Enable secure user registration and login",
  "userStories": [
    {
      "id": "US-001",
      "category": "setup",
      "title": "Database schema for users",
      "description": "As a developer, I need a users table to store credentials",
      "acceptanceCriteria": [
        "Users table created with id, email, password_hash, created_at",
        "Email has unique constraint",
        "Migration runs successfully",
        "npm run typecheck passes"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-002",
      "category": "core",
      "title": "User registration endpoint",
      "description": "As a visitor, I want to register with email/password",
      "acceptanceCriteria": [
        "POST /api/auth/register accepts email and password",
        "Validates email format",
        "Validates password strength (8+ chars, 1 number)",
        "Returns 201 on success with user object",
        "Returns 400 on validation failure",
        "npm run test passes"
      ],
      "priority": 2,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-003",
      "category": "core",
      "title": "User login endpoint",
      "description": "As a user, I want to login to access my account",
      "acceptanceCriteria": [
        "POST /api/auth/login accepts email and password",
        "Returns session token on success",
        "Returns 401 on invalid credentials",
        "npm run test passes"
      ],
      "priority": 3,
      "passes": false,
      "notes": ""
    },
    {
      "id": "US-004",
      "category": "integration",
      "title": "Registration form component",
      "description": "As a visitor, I want a registration form UI",
      "acceptanceCriteria": [
        "Form renders email and password fields",
        "Shows validation errors inline",
        "Submits to registration endpoint",
        "Redirects to dashboard on success",
        "npm run typecheck passes",
        "npm run test passes"
      ],
      "priority": 4,
      "passes": false,
      "notes": ""
    }
  ]
}
```

### 9.3 Progress Tracking File

Bridges Lisa output to Ralph tracking:

```
# User Authentication - Progress Tracking

## Phase 1: Foundation [PENDING]
- [ ] US-001: Database schema
Verification: npm run db:migrate && npm run typecheck

## Phase 2: Core Auth [PENDING]
- [ ] US-002: Registration endpoint
- [ ] US-003: Login endpoint
Verification: npm run test:auth

## Phase 3: UI [PENDING]
- [ ] US-004: Registration form
- [ ] US-005: Login form
Verification: npm run test && npm run build

---
Generated by Lisa v1.1.0
Ready for Ralph execution: ./ralph.sh 25
```

---

## 10. Integration Patterns

### 10.1 Lisa + Ralph (Basic Pipeline)

The foundational integration pattern:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LISA + RALPH PIPELINE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  STEP 1: Run Lisa interview                                        │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ /lisa:plan "My Feature" --first-principles                   │  │
│  │                                                               │  │
│  │ [Answer 15-30 questions]                                      │  │
│  │ [Say "done" when complete]                                    │  │
│  │                                                               │  │
│  │ Output: docs/specs/my-feature.json                            │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  STEP 2: Copy spec to Ralph location                               │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ cp docs/specs/my-feature.json scripts/ralph/prd.json         │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  STEP 3: Run Ralph loop                                            │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ ./scripts/ralph/ralph.sh 25                                  │  │
│  │                                                               │  │
│  │ Ralph reads prd.json, executes user stories                   │  │
│  │ Marks passes: true as each completes                          │  │
│  │ Outputs <promise>COMPLETE</promise> when done                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.2 Lisa + Gas Town

Lisa as a planning Dog in the Gas Town factory:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LISA + GAS TOWN                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  GAS TOWN ARCHITECTURE WITH LISA:                                   │
│                                                                     │
│  ┌───────────────┐                                                 │
│  │    MAYOR      │  Coordination, task routing                      │
│  └───────┬───────┘                                                 │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                 │
│  │   REFINERY    │  Decomposes features into Lisa interview tasks  │
│  └───────┬───────┘                                                 │
│          │                                                          │
│          ├──────────────────┬────────────────────┐                 │
│          │                  │                    │                  │
│          ▼                  ▼                    ▼                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐            │
│  │ LISA DOG    │    │ CODER DOG   │    │ TESTER DOG  │            │
│  │             │    │             │    │             │             │
│  │ Runs Lisa   │    │ Ralph loops │    │ Verification│             │
│  │ interviews  │    │ on specs    │    │ testing     │             │
│  │             │    │             │    │             │             │
│  │ OUTPUT:     │    │ INPUT:      │    │ INPUT:      │             │
│  │ prd.json    │───►│ prd.json    │───►│ code changes│             │
│  └─────────────┘    └─────────────┘    └─────────────┘            │
│                                                                     │
│  CONFIGURATION EXAMPLE:                                             │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ # gas-town.yaml                                              │  │
│  │ dogs:                                                        │  │
│  │   lisa-planner:                                              │  │
│  │     role: "specification"                                    │  │
│  │     command: "cc --plugin-dir ~/lisa"                        │  │
│  │     trigger: "new-feature-request"                           │  │
│  │     output: "docs/specs/{feature}.json"                      │  │
│  │                                                              │  │
│  │   ralph-executor:                                            │  │
│  │     role: "implementation"                                   │  │
│  │     command: "./ralph.sh"                                    │  │
│  │     input: "docs/specs/{feature}.json"                       │  │
│  │     depends_on: "lisa-planner"                               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  USE CASE: Factory-scale development with systematic planning      │
│  COMPLEXITY: Medium (requires Gas Town infrastructure)             │
│  VALUE: High (ensures all features have proper specs)              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.3 Lisa + CC-Mirror

Lisa with multi-model orchestration for complex specifications:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LISA + CC-MIRROR                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  MULTI-MODEL SPEC GENERATION:                                       │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                     ORCHESTRATOR                               │ │
│  │              (Coordinates spec creation)                       │ │
│  └────────────────────────┬──────────────────────────────────────┘ │
│                           │                                         │
│         ┌─────────────────┼─────────────────┐                      │
│         │                 │                 │                       │
│         ▼                 ▼                 ▼                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │ LISA WORKER │  │ TECH WORKER │  │ UX WORKER   │                │
│  │   (Opus)    │  │  (Sonnet)   │  │  (Sonnet)   │                │
│  │             │  │             │  │             │                 │
│  │ Feature     │  │ Technical   │  │ User flow   │                │
│  │ interview   │  │ feasibility │  │ analysis    │                │
│  │             │  │ check       │  │             │                 │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘                │
│         │                │                │                         │
│         └────────────────┼────────────────┘                        │
│                          │                                          │
│                          ▼                                          │
│              ┌─────────────────────┐                               │
│              │   MERGED SPEC       │                               │
│              │   (Comprehensive)   │                               │
│              └─────────────────────┘                               │
│                                                                     │
│  CONFIGURATION EXAMPLE:                                             │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ # Using CC-Mirror Task APIs                                  │  │
│  │                                                              │  │
│  │ # Orchestrator creates parallel tasks:                       │  │
│  │ TaskCreate("lisa-interview", "Run Lisa for feature X")       │  │
│  │ TaskCreate("tech-review", "Technical feasibility check")     │  │
│  │ TaskCreate("ux-review", "User flow analysis")                │  │
│  │                                                              │  │
│  │ # Workers claim and execute in parallel                      │  │
│  │ # Results merged in final specification                      │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  USE CASE: Complex features needing multi-perspective analysis     │
│  COMPLEXITY: Medium-High (requires CC-Mirror setup)                │
│  VALUE: High (catches issues from multiple angles)                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.4 Lisa + HUD (Enhanced Visibility)

Lisa logs feeding real-time progress display:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LISA + HUD                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  REAL-TIME INTERVIEW PROGRESS:                                      │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    HUD DISPLAY                               │   │
│  │ ┌─────────────────────────────────────────────────────────┐ │   │
│  │ │  LISA INTERVIEW: user-authentication                    │ │   │
│  │ │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │ │   │
│  │ │                                                         │ │   │
│  │ │  Phase: TECHNICAL IMPLEMENTATION      Progress: 65%     │ │   │
│  │ │  Questions Asked: 12 / ~20                              │ │   │
│  │ │                                                         │ │   │
│  │ │  ┌─────────────────────────────────────────────────┐   │ │   │
│  │ │  │ Scope Definition         [████████████] DONE     │   │ │   │
│  │ │  │ User Stories             [████████████] DONE     │   │ │   │
│  │ │  │ Technical Implementation [████████░░░░] 65%      │   │ │   │
│  │ │  │ User Experience          [░░░░░░░░░░░░] PENDING  │   │ │   │
│  │ │  │ Trade-offs               [░░░░░░░░░░░░] PENDING  │   │ │   │
│  │ │  │ Implementation Phases    [░░░░░░░░░░░░] PENDING  │   │ │   │
│  │ │  └─────────────────────────────────────────────────┘   │ │   │
│  │ │                                                         │ │   │
│  │ │  Current Question:                                      │ │   │
│  │ │  "What error handling strategy for the auth endpoints?" │ │   │
│  │ │                                                         │ │   │
│  │ │  Draft Spec: 847 lines, 12 user stories extracted       │ │   │
│  │ │                                                         │ │   │
│  │ └─────────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  IMPLEMENTATION:                                                    │
│  Lisa state files (.claude/lisa-*.md) feed HUD display             │
│  Progress calculated from interview phase detection                 │
│  Real-time updates as draft spec grows                              │
│                                                                     │
│  USE CASE: Visible progress during long specification interviews   │
│  COMPLEXITY: Low (HUD reads Lisa state files)                      │
│  VALUE: Very High (reduces anxiety, shows progress)                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.5 Combination Matrix

| Lisa + | Use Case | Complexity | Value | Notes |
|--------|----------|------------|-------|-------|
| **Ralph** | Standard pipeline | Low | High | Foundational integration |
| **Gas Town** | Logged agent factory | Medium | High | Lisa as planning Dog |
| **CC-Mirror** | Multi-model specs | Medium | High | Parallel spec analysis |
| **HUD** | Enhanced visibility | Low | Very High | Real-time progress |
| **Marathon Ralph** | Full SDLC | Medium | High | Comprehensive specs |
| **Compounding Ralph** | Learning specs | Medium | High | Specs improve over time |

---

## 11. Comparison to Other Ralphs

### 11.1 vs Original Ralph (ghuntley)

```
┌────────────────────────────────────────────────────────────────┐
│              LISA vs ORIGINAL RALPH (ghuntley)                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ORIGINAL RALPH                    LISA                        │
│  ══════════════                    ════                        │
│                                                                │
│  Execution loop only               Planning phase ONLY         │
│  Assumes PRD exists                Creates the PRD             │
│  while :; do claude ; done         Interactive interview       │
│  Marks tasks complete              Defines what tasks ARE      │
│                                                                │
│  RELATIONSHIP:                                                 │
│  Lisa fills the gap BEFORE Ralph runs.                        │
│                                                                │
│  Without Lisa: Manual PRD creation (error-prone, inconsistent) │
│  With Lisa: Automated, systematic specification                │
│                                                                │
│  WHAT LISA ADDS:                                               │
│  • Systematic question coverage                                │
│  • Consistent output format                                    │
│  • First-principles validation                                 │
│  • Resume capability for long interviews                       │
│  • Standard JSON compatible with Ralph ecosystem               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 11.2 vs Production Ralph (snarktank)

```
┌────────────────────────────────────────────────────────────────┐
│              LISA vs PRODUCTION RALPH (snarktank)              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PRODUCTION RALPH                  LISA                        │
│  ════════════════                  ════                        │
│                                                                │
│  Execution framework               Specification framework     │
│  prd.json consumer                 prd.json producer           │
│  progress.txt writer               progress.txt initializer    │
│  Runs until COMPLETE               Runs until "done"           │
│                                                                │
│  DIFFERENT FOCUS:                                              │
│                                                                │
│  Production Ralph optimizes:       Lisa optimizes:             │
│  • Loop efficiency                 • Spec completeness         │
│  • Error recovery                  • Acceptance clarity        │
│  • Cost management                 • Task decomposition        │
│  • Stuck detection                 • Edge case coverage        │
│                                                                │
│  COMPLEMENTARY:                                                │
│  Lisa's JSON output follows snarktank/ralph schema.            │
│  Production Ralph consumes Lisa's output directly.             │
│                                                                │
│  WORKFLOW:                                                     │
│  Lisa → prd.json → Production Ralph → Working Code             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 11.3 vs Marathon Ralph

```
┌────────────────────────────────────────────────────────────────┐
│                  LISA vs MARATHON RALPH                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  MARATHON RALPH                    LISA                        │
│  ══════════════                    ════                        │
│                                                                │
│  Full SDLC integration             Planning phase only         │
│  E2E test generation               Spec generation             │
│  Build entire apps                 Define what to build        │
│                                                                │
│  COMPLEMENTARY FEATURES:                                       │
│                                                                │
│  Lisa can generate specs that Marathon Ralph executes.         │
│  Marathon Ralph's test requirements inform Lisa's questions.   │
│                                                                │
│  COMBINED WORKFLOW:                                            │
│  1. Lisa interview with --first-principles                     │
│  2. Lisa output includes test acceptance criteria              │
│  3. Marathon Ralph generates tests AND implementation          │
│  4. Full coverage from spec to production                      │
│                                                                │
│  WHEN TO USE WHICH:                                            │
│  • Quick feature: Lisa → Basic Ralph                          │
│  • Full app: Lisa → Marathon Ralph                            │
│  • Test-critical: Lisa (with test criteria) → Marathon Ralph  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 11.4 When to Choose Lisa

| Scenario | Best Choice | Why |
|----------|-------------|-----|
| Know what to build, need to specify | **Lisa** | Creates structured PRD |
| Have PRD, need execution | Ralph | Lisa already done |
| Starting from scratch | **Lisa** → Ralph | Full pipeline |
| Complex requirements | **Lisa** --first-principles | Challenge assumptions |
| Quick one-off feature | Basic Ralph | Lisa overhead not justified |
| Factory-scale development | **Lisa** as Dog + Ralph | Systematic planning at scale |
| Existing PRD needs improvement | **Lisa** --context | Enhance existing spec |

---

## 12. Mental Models

### 12.1 The Interview as Requirements Engineering

Lisa automates what senior developers do intuitively:

```
EXPERT DEVELOPER PROCESS           LISA AUTOMATION
══════════════════════════         ═══════════════

"Let me understand the              Systematic question
 requirements first..."             categories

"What about edge cases?"            Dedicated edge case
                                    phase in interview

"How will we verify this?"          Acceptance criteria
                                    extraction

"What's the priority?"              Priority ordering
                                    in output

"Is this even the right             --first-principles
 approach?"                         mode
```

### 12.2 Specs as Executable Contracts

Lisa outputs aren't just documents - they're machine-readable contracts:

```
TRADITIONAL SPEC                    LISA SPEC
═══════════════                     ═════════

"Users can login"                   {
                                      "id": "US-002",
                                      "title": "User login",
                                      "acceptanceCriteria": [
                                        "POST /api/auth/login works",
                                        "Returns 401 on bad creds",
                                        "npm run test passes"
                                      ],
                                      "passes": false
                                    }

Human-readable only                 Machine-executable by Ralph
```

### 12.3 The Planning Tax

Every minute spent in Lisa saves multiple minutes in Ralph:

```
                    TIME INVESTMENT COMPARISON
                    ══════════════════════════

    WITHOUT LISA:                   WITH LISA:
    ─────────────                   ──────────

    Start coding    ───►            Lisa interview  ───►
         │                               │
         ▼                               ▼
    Hit blocker     ───►            Clear spec      ───►
         │                               │
         ▼                               ▼
    Re-plan         ───►            Ralph executes  ───►
         │                               │
         ▼                               ▼
    Retry           ───►            Ship            ───►
         │                               │
         ▼
    Eventually ship
         │
         ▼

    Total: 4-5 hours                Total: 1.5-2 hours

    "Pay the planning tax upfront to avoid the rework tax later"
```

---

## 13. Checkpoints

### Checkpoint: After Running First Lisa Interview

**Where you are:** Completed a full Lisa interview for a feature.
**What this enables:** A complete specification ready for Ralph execution.

**Verify your state:**
```bash
# Check output files exist
ls -la docs/specs/

# Verify JSON is valid
cat docs/specs/{your-feature}.json | jq .

# Check user stories extracted
cat docs/specs/{your-feature}.json | jq '.userStories | length'
```

**You should see:**
```
docs/specs/
├── your-feature.md         # Human-readable spec
├── your-feature.json       # Machine-readable spec
└── your-feature-progress.txt  # Phase tracking

Valid JSON
5                           # (or however many stories)
```

**If you don't see this:**
- Check: Did you say "done" to finalize the interview?
- Check: Did Lisa output "SPEC COMPLETE"?
- Try: `/lisa:resume` to continue interrupted interview
- Go back to: Review interview flow section

**This connects to:** Your spec is now ready for Ralph → Copy to ralph/prd.json → Run Ralph loop → Ship feature

---

### Checkpoint: After Integrating Lisa with Ralph

**Where you are:** Lisa spec is loaded into Ralph and ready to execute.
**What this enables:** Automated implementation of your specified feature.

**Verify your state:**
```bash
# Check prd.json is Lisa's output
cat scripts/ralph/prd.json | jq '.userStories[0].title'

# Check all stories are pending
cat scripts/ralph/prd.json | jq '[.userStories[] | select(.passes == false)] | length'

# Ensure ralph.sh is ready
ls -la scripts/ralph/ralph.sh
```

**You should see:**
```
"Your first user story title"    # From Lisa interview
5                               # All stories passes: false
-rwxr-xr-x  ralph.sh            # Executable script
```

**If you don't see this:**
- Check: Did you copy the JSON correctly?
- Check: Is JSON valid? `jq . scripts/ralph/prd.json`
- Try: Re-copy from docs/specs/
- Go back to: Integration patterns section

**This connects to:** Running `./scripts/ralph/ralph.sh 25` → Ralph implements Lisa's spec → Wake up to completed feature

---

## 14. Troubleshooting

### Interview Issues

#### Problem: "Lisa asks vague questions"
**Symptoms:** Questions like "What should it do?" instead of specific queries
**Cause:** Generic prompting, missing context
**Solution:**
```bash
# Provide initial context
/lisa:plan "Feature" --context docs/requirements.md

# Or start interview with specific context in first answer:
"This is a fintech app for invoice management. Users need to..."
```
**Prevention:** Always provide --context or detailed first answer

---

#### Problem: "Interview goes too long"
**Symptoms:** 50+ questions, losing focus
**Cause:** Scope creep, no limits set
**Solution:**
```bash
# Limit questions
/lisa:plan "Feature" --max-questions 20

# Or steer during interview:
"Let's focus on MVP only. Out of scope: [list]"
```
**Prevention:** Use --max-questions or explicitly define scope early

---

#### Problem: "Lost interview progress"
**Symptoms:** Session ended, work lost
**Cause:** Session timeout, crash
**Solution:**
```bash
# Resume interrupted interview
/lisa:resume

# List available state files
ls .claude/lisa-*.md
```
**Prevention:** Lisa auto-saves state; use /lisa:resume

---

### Output Issues

#### Problem: "JSON spec doesn't match Ralph format"
**Symptoms:** Ralph can't parse Lisa's JSON output
**Cause:** Version mismatch, custom Ralph setup
**Solution:**
```bash
# Check Lisa's JSON structure
cat docs/specs/feature.json | jq 'keys'

# Expected keys:
# ["branchName", "description", "project", "userStories"]

# If different, manually transform or update Lisa version
```
**Prevention:** Use latest Lisa version; verify JSON format

---

#### Problem: "Missing acceptance criteria in output"
**Symptoms:** User stories lack verification steps
**Cause:** Skipped questions, rushed interview
**Solution:**
```bash
# Re-run with focus on criteria
/lisa:plan "Feature" --max-questions 30

# During interview, emphasize:
"Every story needs: what passes, npm run typecheck, npm run test"
```
**Prevention:** Explicitly request criteria during interview

---

### Integration Issues

#### Problem: "Lisa output in wrong location"
**Symptoms:** Files not in expected directory
**Cause:** Custom --output-dir or wrong defaults
**Solution:**
```bash
# Find Lisa output
find . -name "*.json" -path "*/specs/*" -mtime -1

# Or specify explicitly
/lisa:plan "Feature" --output-dir scripts/ralph
```
**Prevention:** Use explicit --output-dir matching your Ralph setup

---

#### Problem: "Ralph fails on Lisa spec"
**Symptoms:** Ralph errors when reading prd.json
**Cause:** JSON format incompatibility
**Solution:**
```bash
# Validate JSON
cat scripts/ralph/prd.json | jq .

# Check userStories array exists
cat scripts/ralph/prd.json | jq '.userStories'

# If null, Lisa output format may differ from Ralph's expected format
# Transform manually or check Lisa version
```
**Prevention:** Verify JSON compatibility before Ralph run

---

## 15. Source Attribution

### Primary Sources

| Source | Type | URL |
|--------|------|-----|
| **blencorp/lisa** | Repository | github.com/blencorp/lisa |
| **BLEN Engineering** | Creator | Digital services firm |
| **Mike Endale** | Lead author | BLEN team |

### Related Resources

| Resource | Description |
|----------|-------------|
| snarktank/ralph | Production Ralph framework |
| ghuntley.com/ralph | Original Ralph philosophy |
| awesomeclaude.ai/ralph-wiggum | Community Ralph documentation |

### Community Context

Lisa emerged from the spec-driven development philosophy articulated by community members:

> "My favorite way to use Claude Code to build large features is spec-based: start with a minimal spec or prompt and ask Claude to interview you using the AskUserQuestionTool, then make a new session to execute the spec."
> -- Thariq, December 2025

Lisa formalizes this workflow into a reusable plugin.

### Reliability Rating

| Aspect | Rating | Notes |
|--------|--------|-------|
| Documentation | 4/5 | Clear README, good examples |
| Maintenance | 4/5 | Active development |
| Community | 3/5 | Growing adoption |
| Integration | 5/5 | Native Ralph compatibility |

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════╗
║                    LISA QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                   ║
║  INSTALLATION:                                                    ║
║  /plugin marketplace add blencorp/lisa                            ║
║  /plugin install lisa                                             ║
║                                                                   ║
║  COMMANDS:                                                        ║
║  /lisa:plan "Feature Name"            Start interview             ║
║  /lisa:plan "Feature" --first-principles  Challenge assumptions  ║
║  /lisa:plan "Feature" --context file  Load existing docs          ║
║  /lisa:plan "Feature" --max-questions 20  Limit interview         ║
║  /lisa:resume                         Continue interrupted        ║
║  /lisa:cleanup                        Remove state files          ║
║  /lisa:help                           Show documentation          ║
║                                                                   ║
║  OUTPUT FILES:                                                    ║
║  docs/specs/{feature}.md              Human-readable spec         ║
║  docs/specs/{feature}.json            Machine-readable (Ralph)    ║
║  docs/specs/{feature}-progress.txt    Phase tracking              ║
║                                                                   ║
║  INTEGRATION:                                                     ║
║  1. /lisa:plan "My Feature"                                       ║
║  2. cp docs/specs/my-feature.json scripts/ralph/prd.json          ║
║  3. ./scripts/ralph/ralph.sh 25                                   ║
║                                                                   ║
║  INTERVIEW TIPS:                                                  ║
║  • Be specific in answers                                         ║
║  • Define "done" clearly                                          ║
║  • Think edge cases                                               ║
║  • Prioritize MVP                                                 ║
║  • Say "done" to finalize                                         ║
║                                                                   ║
║  FINALIZATION SIGNAL:                                             ║
║  Lisa outputs "SPEC COMPLETE" and stops                           ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

---

## Tags

`#orchestration` `#planning` `#lisa` `#ralph-wiggum` `#specification` `#prd` `#interview` `#spec-driven` `#blencorp` `#claude-code-plugin`

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Created** | 2026-01-19 |
| **Author** | Claude (Extraction Agent) |
| **Source Repository** | github.com/blencorp/lisa |
| **Lines** | 1200+ |
| **Status** | Complete extraction |
| **Version** | 1.0 |

---

*"Lisa plans. Ralph does." - The complete planning-to-execution pipeline for Claude Code development.*
