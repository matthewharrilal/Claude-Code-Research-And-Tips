# MCP Agent Mail: Asynchronous Coordination for Coding Agents

**Deep Extraction Document**

---

## D-FINAL Connection

**This source contributes to:**
- D-FINAL-architecture.md: Section 6.2 (Inter-Agent Communication Infrastructure)
- D-FINAL-implementation.md: Section 7.3 (Multi-Agent Coordination Patterns)

**Coverage in D-FINAL:** New addition - awaiting integration
**High-value unique content:** Complete agent mail infrastructure, file reservation system, async coordination patterns

**Journey references:**
- synthesis/architecture-complexity-ladder.md (Level 5-7 coordination)
- extractions/orchestration/009-gas-town-steve-yegge.md (Gas Town integration)
- extractions/orchestration/024-cc-mirror-complete.md (Multi-agent patterns)

**Last enhanced:** 2026-01-19 (Initial extraction)

---

## Source Attribution

| Attribute | Value |
|-----------|-------|
| **Repository** | [github.com/Dicklesworthstone/mcp_agent_mail](https://github.com/Dicklesworthstone/mcp_agent_mail) |
| **Creator** | Jeffrey Emanuel (@Dicklesworthstone) |
| **Release Date** | October 23, 2025 (initial); January 4, 2026 (major release) |
| **Framework** | FastMCP 2.0 (HTTP-only transport) |
| **Language** | Python 3.14+ |
| **Stars** | 1,500+ |
| **Rating** | 4.7/5.0 (1,400+ ratings) |
| **Visitors** | ~237K (13.5K weekly as of Jan 2026) |
| **License** | MIT |

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What This Is](#2-what-this-is)
3. [Why It Matters](#3-why-it-matters)
4. [Architecture Deep Dive](#4-architecture-deep-dive)
5. [Key Features](#5-key-features)
6. [Installation & Setup](#6-installation--setup)
7. [Configuration Options](#7-configuration-options)
8. [Communication Patterns](#8-communication-patterns)
9. [Integration Patterns](#9-integration-patterns)
10. [Mental Models](#10-mental-models)
11. [Checkpoints](#11-checkpoints)
12. [Troubleshooting](#12-troubleshooting)
13. [Source Attribution & References](#13-source-attribution--references)

---

## 1. You Are Here

### Position on the Complexity Ladder

```
+=========================================================================+
|                     COMPLEXITY LADDER POSITION                          |
+=========================================================================+
|                                                                         |
|  Level 0: Single session, one task            [ ]                       |
|  Level 1: Hooks and automation                [ ]                       |
|  Level 2: Skills and enhanced context         [ ]                       |
|  Level 3: Memory persistence                  [ ]                       |
|  Level 4: Native orchestration (CC Mirror)    [ ]                       |
|  Level 5: Multi-instance coordination         [*] <-- AGENT MAIL LIVES  |
|  Level 6: External tool integration           [*] <-- HERE              |
|  Level 7: Factory-scale (Gas Town)            [*] <--                   |
|                                                                         |
+=========================================================================+
```

### Where Agent Mail Fits

MCP Agent Mail is **infrastructure** that enables Levels 5-7. It provides the coordination fabric that patterns like Gas Town and CC Mirror can use for inter-agent communication. Think of it as:

- **Level 5:** Multiple Claude instances coordinating on one project
- **Level 6:** Agent Mail as the external MCP tool binding them together
- **Level 7:** Gas Town's 8 roles communicating through the mail system

### Prerequisites

Before diving into Agent Mail, you should understand:

1. **MCP Basics** - What Model Context Protocol is and how it connects tools to LLMs
2. **Multi-Agent Concepts** - Why multiple agents need coordination
3. **File Conflicts** - How parallel agents can overwrite each other's work
4. **Task Decomposition** - Breaking work into parallelizable chunks

### What You'll Learn

By the end of this extraction, you will understand:

1. Why asynchronous agent coordination matters
2. How the mail + file reservation architecture works
3. How to install and configure Agent Mail
4. Integration patterns with Gas Town, Ralph, and CC Mirror
5. Mental models for thinking about agent communication
6. Common failure modes and how to recover

---

## 2. What This Is

### The One-Line Summary

> "Like Gmail for your coding agents. Lets various different agents communicate and coordinate with each other."
> -- Jeffrey Emanuel

### The Core Concept

MCP Agent Mail is a **coordination layer** that gives AI coding agents:

| Capability | Description |
|------------|-------------|
| **Identity** | Memorable adjective+noun names (GreenCastle, RedCat, BlueLake) |
| **Inbox/Outbox** | Threaded message queues with acknowledgment tracking |
| **File Reservations** | Advisory "leases" on file paths to prevent edit conflicts |
| **Searchable History** | Full-text search across all agent conversations |
| **Multi-Project** | Coordinate across repositories with optional approval |
| **Human Oversight** | Web UI for monitoring and messaging agents |

### What Problem It Solves

Modern projects often run **multiple coding agents simultaneously**:

- Backend agent + Frontend agent
- Infrastructure agent + Application agent
- Testing agent + Implementation agent
- 8+ parallel tmux panes in Gas Town

**Without coordination:**
- Agent A edits `api/routes.py`
- Agent B edits `api/routes.py` (unaware of A)
- Agent B's commit overwrites Agent A's work
- Both agents panic on unexpected diffs
- Human spends hours reconciling changes

**With Agent Mail:**
- Agent A reserves `api/routes.py` (exclusive, 1 hour)
- Agent B sees reservation, chooses different file or waits
- Both announce work via mail threads
- Git-backed artifacts preserve complete audit trail

### What It Is NOT

| Not This | But This |
|----------|----------|
| Real-time synchronous chat | Asynchronous polling-based mail |
| Enforced file locks | Advisory file reservations |
| Built-in task management | Pairs with Beads for tasks |
| Another orchestration framework | Communication layer for any framework |
| Replacement for Git | Complement to Git with extra context |

---

## 3. Why It Matters

### The Coordination Problem at Scale

Jeffrey Emanuel identifies the core challenge:

> "Multiple agents working on the same codebase asynchronously without stepping on each other's work."

As agent complexity increases (Level 5+), you hit coordination walls:

```
Level 0-4: Single agent, no coordination needed
     ↓
Level 5: Two agents, occasional conflict
     ↓
Level 6: 4-5 agents, regular file collisions
     ↓
Level 7: 10+ agents, chaos without infrastructure
```

### The Email Metaphor Works

Email is a **universally understood** communication pattern. Agents don't need training on:

- Sending messages to recipients
- Checking inboxes for new mail
- Threading conversations by topic
- Acknowledging receipt

This creates "natural agent village behavior" without complex protocols.

### Auditability as First-Class Concern

Every message is:
- Stored as markdown in Git
- Indexed in SQLite for search
- Timestamped and attributed
- Available for compliance review

> "Git commits and Agent Mail threads provide continuous context without babysitting."

### The Flywheel Effect

Agent Mail is part of Emanuel's "Agentic Coding Tooling Flywheel":

| Tool | Purpose | Connection to Agent Mail |
|------|---------|-------------------------|
| **NTM** (Named Tmux Manager) | Multi-pane orchestration | Dashboard shows inbox |
| **Beads** | Task dependency planning | Thread IDs align with issue IDs |
| **Beads Viewer** | Task visualization | Robot flags inform task selection |
| **CASS** | Memory/context search | Search mail threads across sessions |
| **DCG** | Command gating | Mail notifies blocked commands |

---

## 4. Architecture Deep Dive

### Dual-Persistence Model

Agent Mail uses a **dual persistence architecture** for different access patterns:

```
                    +------------------+
                    |   Agent/Client   |
                    +--------+---------+
                             |
                    HTTP (FastMCP 2.0)
                             |
                    +--------v---------+
                    |   MCP Server     |
                    | (Port 8765)      |
                    +----+--------+----+
                         |        |
           +-------------+        +-------------+
           |                                    |
    +------v------+                    +--------v-------+
    |   SQLite    |                    |   Git Repo     |
    |   + FTS5    |                    |   (.md files)  |
    +-------------+                    +----------------+

    For: Fast queries,                 For: Human audit,
    search, indexing                   version history,
                                       portability
```

### Storage Layout (Per-Project)

```
<mcp-mail-store>/projects/<slug>/repo/
├── agents/
│   └── <AgentName>/
│       ├── profile.json        # Agent metadata
│       ├── inbox/
│       │   └── YYYY/MM/<msg-id>.md
│       └── outbox/
│           └── YYYY/MM/<msg-id>.md
├── messages/
│   └── YYYY/MM/<msg-id>.md     # Canonical message store
└── file_reservations/
    └── <hash>.json             # Active leases
```

### Database Schema (Core Tables)

| Table | Purpose |
|-------|---------|
| `projects` | Project metadata, slug as unique ID |
| `agents` | Agent profiles with program/model/task |
| `messages` | Canonical message store with GFM body |
| `message_recipients` | To/CC/BCC tracking with read/ack timestamps |
| `file_reservations` | TTL leases with exclusive flag |
| `agent_links` | Cross-project contact permissions |
| `fts_messages` | FTS5 virtual table for full-text search |

### Message Format

Messages use **JSON frontmatter + GitHub-Flavored Markdown**:

```json
{
  "id": "msg_20251023_7b3dc3a7",
  "thread_id": "TKT-123",
  "from": "GreenCastle",
  "to": ["RedCat", "BlueLake"],
  "created": "2025-10-23T15:22:14Z",
  "importance": "high",
  "ack_required": true
}
```

```markdown
## Progress Update

I've completed the API endpoints for user authentication.

**Files modified:**
- `src/auth/routes.py`
- `src/auth/middleware.py`

**Next:** Waiting for RedCat to finish the frontend login form.
```

### Transport Layer

Agent Mail uses **HTTP-only transport** (Streamable HTTP):

- No SSE or STDIO (deprecated per MCP spec)
- Forward-compatible with remote deployments
- Supports OAuth, bearer tokens, API keys
- CORS middleware for MCP Inspector

---

## 5. Key Features

### 5.1 Agent Identity System

Agents register with memorable **adjective+noun names**:

```python
register_agent(
    project_key="/absolute/repo/path",
    agent_name="GreenCastle",  # Memorable name
    program="Claude Code",
    model="Opus 4.1",
    task_description="Backend API development"
)
```

**Name validation prevents common mistakes:**
- Unix usernames (`steve`, `admin`)
- Program names (`claude`, `codex`)
- Model identifiers (`opus-4-1`, `gpt-5`)

**Why memorable names?**
- Easier to track in logs
- Natural in conversations
- Reduces cognitive load

### 5.2 File Reservations (Critical for Coordination)

**Always reserve files before editing:**

```python
file_reservation_paths(
    project_key="/path",
    agent_name="GreenCastle",
    paths=["src/api/**/*.py", "tests/api/**/*.py"],
    ttl_seconds=3600,           # 1 hour lease
    exclusive=True,             # No shared access
    reason="br-123"             # Link to Beads issue
)
```

**Reservation states:**
- **Active**: Currently held, expires at `created + ttl`
- **Expired**: TTL passed, auto-released
- **Released**: Voluntarily ended early

**Conflict handling:**
```
Agent A reserves src/api/*.py (exclusive)
Agent B tries to reserve src/api/routes.py
     ↓
FILE_RESERVATION_CONFLICT returned
     ↓
Agent B either:
  - Waits for expiry
  - Works on different files
  - Requests shared (non-exclusive) access
```

### 5.3 Messaging & Threads

**Sending messages:**

```python
send_message(
    project_key="/path",
    from_agent="GreenCastle",
    to_agents=["RedCat", "BlueLake"],
    thread_id="br-123",                    # Groups related messages
    subject="[br-123] Start: Auth API",
    body="Implementation plan and status...",
    importance="normal",                    # normal, high, urgent
    ack_required=True,                      # Require acknowledgment
    attachments=[{"name": "schema.png", "data": base64_data}]
)
```

**Checking inbox:**

```python
fetch_inbox(
    project_key="/path",
    agent_name="RedCat",
    limit=20,
    urgent_only=False,
    since_ts="2025-10-23T00:00:00Z",
    include_bodies=True
)
```

**Acknowledging receipt:**

```python
acknowledge_message(
    message_id="msg_20251023_7b3dc3a7"
)
```

### 5.4 Contact Policies

Four modes control who can message whom:

| Policy | Behavior |
|--------|----------|
| `open` | Accept any project message |
| `auto` (default) | Allow if shared context exists |
| `contacts_only` | Require explicit approval first |
| `block_all` | Reject all new contacts |

**Auto-approval triggers:**
- Same thread participation
- Overlapping file reservations
- Recent contact within N days

### 5.5 Full-Text Search

Search across all messages with FTS5:

```python
search_messages(
    project_key="/path",
    query="authentication error",
    limit=50
)
```

**Advanced syntax:**
- `subject:foo` - Search in subject
- `body:"multi word"` - Phrase search
- `from:GreenCastle` - Filter by sender

### 5.6 Web Interface

Human-facing mail viewer at `/mail`:

- **Unified Inbox**: Cross-project browsing
- **Project Views**: Per-project search
- **Agent Inboxes**: Individual message lists
- **File Reservations**: Active/historical leases
- **Human Overseer**: Send high-priority messages to agents

### 5.7 Build Slots (Long-Running Tasks)

Reserve compute resources (not just files):

```python
acquire_build_slot(
    project_key="/path",
    agent_name="GreenCastle",
    slot_name="frontend-build",
    ttl_seconds=3600,
    exclusive=True
)

# Keep slot fresh during work
renew_build_slot(project_key, agent_name, "frontend-build", extend_seconds=1800)

# Release when done
release_build_slot(project_key, agent_name, "frontend-build")
```

---

## 6. Installation & Setup

### Quick Install (Recommended)

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail/main/scripts/install.sh?$(date +%s)" | bash -s -- --yes
```

**This automated install:**
1. Creates Python 3.14 venv using `uv`
2. Installs all dependencies
3. Auto-detects installed coding agents (Claude Code, Codex, Gemini CLI)
4. Starts HTTP server on port 8765
5. Creates shell alias `am` for quick restart

### Manual Install

```bash
# Clone repository
git clone https://github.com/Dicklesworthstone/mcp_agent_mail.git
cd mcp_agent_mail

# Create virtual environment
uv venv --python 3.14
source .venv/bin/activate

# Install dependencies
uv pip install -e .

# Detect and configure agents
./scripts/automatically_detect_all_installed_coding_agents_and_install_mcp_agent_mail_in_all.sh

# Start server
python -m mcp_agent_mail.cli serve-http --port 8765
```

### Starting the Server

```bash
# Quickest method (after install)
am

# Or explicitly
cd ~/projects/mcp_agent_mail && ./scripts/run_server_with_token.sh
```

**Default endpoint:** `http://127.0.0.1:8765`
**Web UI:** `http://127.0.0.1:8765/mail`

### Claude Code Configuration

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "agent-mail": {
      "command": "uv",
      "args": [
        "--directory", "/path/to/mcp_agent_mail",
        "run", "python", "-m", "mcp_agent_mail.cli", "serve-stdio"
      ],
      "env": {
        "HTTP_BEARER_TOKEN": "your-secret-token"
      }
    }
  }
}
```

---

## 7. Configuration Options

### Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `STORAGE_ROOT` | `~/.mcp_agent_mail_git_mailbox_repo` | Archive location |
| `HTTP_PORT` | `8765` | Server port |
| `HTTP_BEARER_TOKEN` | (none) | Static auth token |
| `HTTP_ALLOW_LOCALHOST_UNAUTHENTICATED` | `false` | Dev mode: skip auth locally |
| `LLM_ENABLED` | `true` | AI for thread summaries |
| `CONTACT_ENFORCEMENT_ENABLED` | `true` | Enforce contact policies |
| `WORKTREES_ENABLED` | `0` | Git worktree support |
| `AGENT_MAIL_GUARD_MODE` | `block` | `warn` or `block` for conflicts |

### Port Configuration

```bash
# During installation
curl -fsSL "..." | bash -s -- --port 9000 --yes

# After installation
uv run python -m mcp_agent_mail.cli config set-port 9000
```

### Pre-Commit Guard Installation

Block commits that conflict with active exclusive reservations:

```bash
mcp-agent-mail guard install <project_key> <repo_path>
```

**Behavior:**
- Pre-commit hook scans staged changes
- Blocks if overlapping exclusive reservation from another agent
- Bypass with `--no-verify` (discouraged)

### Tool Profiles (Context Reduction)

Tool profiles reduce context by ~70% through selective tool exposure:

```bash
# Use messaging profile only
mcp-agent-mail serve-http --profile messaging

# Full profile (all tools)
mcp-agent-mail serve-http --profile full
```

---

## 8. Communication Patterns

### Pattern 1: Basic Registration + Work Announcement

```python
# Step 1: Register identity
register_agent(
    project_key="/my/project",
    agent_name="GreenCastle",
    program="Claude Code",
    model="Opus 4.1"
)

# Step 2: Reserve work surface
file_reservation_paths(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/api/**"],
    ttl_seconds=3600,
    exclusive=True,
    reason="bd-101"
)

# Step 3: Announce work
send_message(
    project_key="/my/project",
    from_agent="GreenCastle",
    thread_id="bd-101",
    subject="[bd-101] Starting API implementation",
    body="Working on authentication endpoints."
)

# Step 4: Do work...

# Step 5: Release reservation
release_file_reservations(
    project_key="/my/project",
    agent_name="GreenCastle"
)
```

### Pattern 2: Async Polling Loop

Agents check mail between work steps:

```python
while task_not_complete:
    # Do some work
    perform_work_chunk()

    # Check for messages (non-blocking)
    inbox = fetch_inbox(
        project_key="/my/project",
        agent_name="GreenCastle",
        urgent_only=True,
        limit=5
    )

    # Handle urgent messages
    for msg in inbox:
        if msg.importance == "urgent":
            handle_urgent_message(msg)
            acknowledge_message(msg.id)
```

### Pattern 3: Threaded Conversation

Multiple agents discussing a feature:

```python
# GreenCastle initiates
send_message(
    thread_id="feature-auth",
    from_agent="GreenCastle",
    to_agents=["RedCat", "BlueLake"],
    subject="Auth feature discussion",
    body="Proposing JWT-based authentication..."
)

# RedCat replies (same thread)
send_message(
    thread_id="feature-auth",
    from_agent="RedCat",
    to_agents=["GreenCastle", "BlueLake"],
    subject="RE: Auth feature discussion",
    body="JWT sounds good. I'll handle the frontend token storage."
)

# BlueLake replies (same thread)
send_message(
    thread_id="feature-auth",
    from_agent="BlueLake",
    to_agents=["GreenCastle", "RedCat"],
    subject="RE: Auth feature discussion",
    body="I'll set up the test fixtures for auth flows."
)
```

### Pattern 4: Macro-Based Quick Start

For smaller models, use macros to reduce tool calls:

```python
# Single macro: register + reserve + announce
macro_start_session(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/**"],
    thread_id="bd-101",
    announcement="Starting frontend development"
)

# When done
macro_file_reservation_cycle(
    project_key="/my/project",
    agent_name="GreenCastle",
    action="release"
)
```

---

## 9. Integration Patterns

### With Gas Town

Gas Town is Steve Yegge's "factory for coding agents" with 8 specialized roles. Agent Mail provides the communication backbone.

**Architecture:**

```
+-------------------+
|      Mayor        |  ← Town-level coordination
+-------------------+
         |
    Agent Mail
         |
+--------+--------+--------+--------+
| Deacon | Dogs   | Refinery| Polecat|
+--------+--------+--------+--------+
         |
    Agent Mail
         |
+--------+--------+--------+
| Crew 1 | Crew 2 | Crew 3 |  ← Ephemeral workers
+--------+--------+--------+
```

**Role-Based Mailboxes:**

| Gas Town Role | Agent Mail Pattern |
|--------------|-------------------|
| **Mayor** | Receives status updates from all roles |
| **Deacon** | Monitoring alerts via high-priority mail |
| **Dogs** | Quality gate results as threaded reports |
| **Refinery** | Task decomposition announced via threads |
| **Polecat** | Persistent workers with long-lived reservations |
| **Crew** | Ephemeral agents, short TTL reservations |
| **Overseer (You)** | Human inbox via web UI |

**Configuration Example:**

```python
# Mayor registers first
register_agent(
    project_key="/gastown/myproject",
    agent_name="TownMayor",
    program="Gas Town Mayor",
    model="Claude Opus 4.5",
    task_description="Town-level orchestration"
)

# Polecat worker registers
register_agent(
    project_key="/gastown/myproject",
    agent_name="ApiPolecat",
    program="Gas Town Polecat",
    model="Claude Sonnet 4",
    task_description="Backend API development"
)

# Polecat announces to Mayor
send_message(
    project_key="/gastown/myproject",
    from_agent="ApiPolecat",
    to_agents=["TownMayor"],
    thread_id="status",
    subject="[STATUS] ApiPolecat starting work",
    body="Beginning API endpoint development for auth."
)
```

**Use Cases:**
- Deacon broadcasts health checks to all agents
- Dogs report test failures to relevant Polecats
- Refinery announces new task availability
- Mayor aggregates status for Overseer inbox

### With Ralph

The Ralph Wiggum pattern uses a simple loop:

```bash
while :; do cat PROMPT.md | claude ; done
```

Each iteration spawns a **fresh Claude instance**. Agent Mail enables **async Ralph coordination**.

**The Challenge:**
Ralph instances have no shared memory. How do they know what happened in previous runs?

**The Solution:**
External state via Agent Mail.

```python
# PROMPT.md includes:
"""
Before starting:
1. Register with Agent Mail
2. Check inbox for messages from previous runs
3. Reserve files you'll edit

After finishing:
1. Send summary to inbox (for next run)
2. Release file reservations
3. Exit cleanly
"""
```

**Configuration Example:**

```python
# At start of each Ralph iteration
register_agent(
    project_key="/ralph/myproject",
    agent_name="RalphWorker",
    program="Ralph Loop",
    model="Claude Sonnet 4"
)

# Check what previous iteration left
inbox = fetch_inbox(
    project_key="/ralph/myproject",
    agent_name="RalphWorker",
    limit=1
)

# Previous iteration's summary
if inbox:
    previous_context = inbox[0].body
    # Use this to inform current iteration

# Before exiting, leave note for next iteration
send_message(
    project_key="/ralph/myproject",
    from_agent="RalphWorker",
    to_agents=["RalphWorker"],  # To self
    thread_id="continuity",
    subject="[HANDOFF] Iteration N complete",
    body=f"""
    Completed: {tasks_done}
    Remaining: {tasks_pending}
    Blockers: {blockers}
    Next iteration should: {recommendations}
    """
)
```

**Async Ralph Coordination:**

Multiple Ralph loops running in parallel:

```
Terminal 1: while :; do cat FRONTEND.md | claude ; done
Terminal 2: while :; do cat BACKEND.md | claude ; done
Terminal 3: while :; do cat TESTS.md | claude ; done
```

Each reads/writes to Agent Mail:
- Reservations prevent file conflicts
- Messages enable cross-loop awareness
- Threads track feature progress

### With CC-Mirror

CC-Mirror unlocks Anthropic's hidden multi-agent Task APIs. Agent Mail provides the **cross-model communication layer**.

**Architecture:**

```
+-------------------------+
|     CC-Mirror Hub       |  ← Task decomposition
+-------------------------+
           |
    Task Distribution
           |
+----------+-----------+
|          |           |
v          v           v
Worker 1   Worker 2   Worker 3
(Opus)     (Sonnet)   (Haiku)
    |          |          |
    +----+-----+-----+----+
         |
    Agent Mail
         |
    Cross-Worker
    Coordination
```

**Cross-Model Agent Mail:**

Different workers can use different models:
- Opus for complex reasoning
- Sonnet for standard implementation
- Haiku for quick tasks

All communicate through the same mail system.

**Configuration Example:**

```python
# Opus worker registers
register_agent(
    project_key="/ccmirror/myproject",
    agent_name="OpusArchitect",
    program="CC-Mirror",
    model="Claude Opus 4.5",
    task_description="Architecture and complex decisions"
)

# Sonnet worker registers
register_agent(
    project_key="/ccmirror/myproject",
    agent_name="SonnetBuilder",
    program="CC-Mirror",
    model="Claude Sonnet 4",
    task_description="Implementation tasks"
)

# Opus delegates to Sonnet via mail
send_message(
    project_key="/ccmirror/myproject",
    from_agent="OpusArchitect",
    to_agents=["SonnetBuilder"],
    thread_id="task-123",
    subject="[DELEGATE] Implement user service",
    body="""
    ## Task
    Implement UserService based on architecture spec.

    ## Files
    Create: src/services/user_service.py
    Modify: src/routes/user.py

    ## Constraints
    - Follow repository patterns
    - Include type hints
    - Add unit tests
    """
)

# Sonnet reports completion
send_message(
    project_key="/ccmirror/myproject",
    from_agent="SonnetBuilder",
    to_agents=["OpusArchitect"],
    thread_id="task-123",
    subject="[COMPLETE] User service implemented",
    body="""
    ## Completed
    - src/services/user_service.py (new)
    - src/routes/user.py (modified)
    - tests/services/test_user_service.py (new)

    ## Notes
    All tests passing. Ready for review.
    """
)
```

### Combination Matrix

| Agent Mail + | Use Case | Complexity | Value |
|--------------|----------|------------|-------|
| **Gas Town** | Role-based messaging across 8 agent types | Medium | High |
| **Ralph** | Async Ralph with inter-iteration continuity | Medium | Medium |
| **CC-Mirror** | Cross-model delegation and reporting | Medium | High |
| **Beads** | Thread IDs = Beads issue IDs for audit | Low | Very High |
| **NTM** | Dashboard shows unified inbox | Low | Medium |
| **Pre-commit hooks** | Block conflicting commits | Low | High |
| **Standalone** | Multi-agent without framework | Low | Medium |

### Beads Integration (Deep Dive)

Beads is the task/dependency planner that pairs naturally with Agent Mail:

```python
# Beads creates issue bd-123
# Agent Mail uses bd-123 as thread_id

# 1. Reserve files with Beads issue reference
file_reservation_paths(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/auth/**"],
    reason="bd-123"  # Links to Beads issue
)

# 2. Messages reference Beads issue
send_message(
    thread_id="bd-123",  # Same as Beads issue
    subject="[bd-123] Start: User authentication",
    body="..."
)

# 3. Beads Viewer shows task status
# Agent Mail preserves conversation history
```

**The split:**
- **Beads**: Task status, dependencies, prioritization
- **Agent Mail**: Conversation history, file coordination, audit trail

---

## 10. Mental Models

### Mental Model 1: Agent Mail as Village Post Office

Imagine a village where:
- Each craftsperson (agent) has a mailbox
- The post office (server) routes messages
- The bulletin board (web UI) shows public notices
- Land registry (file reservations) tracks who's working where

Agents don't need to know where other agents are. They just:
1. Check their mailbox
2. Send letters to names
3. Register their work area

### Mental Model 2: Advisory Locks, Not Enforced Locks

File reservations are **signals**, not barriers:

```
Traditional Locks:          Agent Mail Reservations:
==================          =======================
Can't proceed if locked     Can proceed (with warning)
System enforces             Agent chooses to respect
All-or-nothing              Shared/exclusive modes
Deadlock possible           TTL prevents deadlock
```

Think of it like "I'm working here" signs rather than locked doors.

### Mental Model 3: State Lives Outside the Agent

This aligns with Claude Code's core philosophy:

```
Agent Memory:              External State (Agent Mail):
=============              ============================
Lost between sessions      Persisted forever
Context rot over time      Fresh each query
Single agent scope         Multi-agent visible
Implicit, hidden           Explicit, auditable
```

> "Memory lives in external artifacts, not the model."

### Mental Model 4: Async = Polling, Not Push

Agent Mail is **not** real-time chat:

```
Real-Time Chat:            Agent Mail:
===============            ===========
Instant notification       Poll between work steps
Requires connection        Works disconnected
Interruptive               Non-interruptive
Synchronous flow           Asynchronous flow
```

Agents check mail when convenient, like checking email between meetings.

---

## 11. Checkpoints

### Checkpoint 1: Server Running

```bash
# You should see:
am
# Output: Server starting on http://127.0.0.1:8765

# Verify:
curl http://127.0.0.1:8765/health
# Output: {"status": "ok"}
```

### Checkpoint 2: Agent Registered

```python
# After registration, you should see:
register_agent(project_key="/test", agent_name="TestAgent", program="test", model="test")
# Output: {"success": true, "agent_name": "TestAgent", "project_slug": "test"}

# Verify in web UI:
# http://127.0.0.1:8765/mail/agents
```

### Checkpoint 3: Messages Flowing

```python
# Send a test message
send_message(
    project_key="/test",
    from_agent="TestAgent",
    to_agents=["TestAgent"],
    thread_id="test",
    subject="Test message",
    body="Hello from Agent Mail"
)

# Fetch inbox
fetch_inbox(project_key="/test", agent_name="TestAgent", limit=1)
# Output: [{"id": "msg_...", "subject": "Test message", ...}]
```

### Checkpoint 4: File Reservations Working

```python
# Reserve a file
file_reservation_paths(
    project_key="/test",
    agent_name="TestAgent",
    paths=["test.py"],
    ttl_seconds=60,
    exclusive=True
)
# Output: {"success": true, "conflicts": []}

# View in web UI:
# http://127.0.0.1:8765/mail/reservations
```

### Checkpoint 5: Pre-Commit Guard Active

```bash
# Install guard
mcp-agent-mail guard install test /path/to/repo

# In repo, try to commit a reserved file (by another agent)
git commit -m "test"
# Output: BLOCKED: File test.py reserved by OtherAgent
```

---

## 12. Troubleshooting

### Error: "from_agent not registered"

**Cause:** Sending message before registration.

**Fix:**
```python
# Always register first
register_agent(
    project_key="/my/project",
    agent_name="MyAgent",
    program="Claude Code",
    model="Opus 4.1"
)
# Then send messages
```

### Error: "FILE_RESERVATION_CONFLICT"

**Cause:** Another agent holds exclusive reservation on overlapping paths.

**Fix options:**
1. Wait for TTL expiry
2. Use non-exclusive reservation: `exclusive=False`
3. Adjust paths to non-overlapping area
4. Contact holding agent to coordinate

```python
# Check who holds the reservation
# Web UI: http://127.0.0.1:8765/mail/reservations

# Or use CLI
mcp-agent-mail file_reservations inspect /my/project
```

### Error: "Authentication failed"

**Cause:** Bearer token mismatch or missing.

**Fix:**
```bash
# Check token in .env
cat ~/.mcp_agent_mail/.env | grep HTTP_BEARER_TOKEN

# For local dev, enable unauthenticated localhost
export HTTP_ALLOW_LOCALHOST_UNAUTHENTICATED=true
```

### Error: "Database is locked"

**Cause:** SQLite concurrent write contention.

**Fix:** The system includes retry logic with exponential backoff. If persistent:

```bash
# Run doctor
mcp-agent-mail doctor check

# Repair if needed
mcp-agent-mail doctor repair --dry-run
mcp-agent-mail doctor repair
```

### Problem: Messages not appearing in search

**Cause:** FTS5 index desynchronized.

**Fix:**
```bash
# Rebuild FTS index
mcp-agent-mail doctor repair --force-fts-rebuild
```

### Problem: Agent name rejected

**Cause:** Name doesn't match adjective+noun pattern.

**Examples of invalid names:**
- `steve` (Unix username)
- `claude` (program name)
- `opus-4-1` (model identifier)
- `MyAgent123` (has numbers)

**Valid names:**
- `GreenCastle`
- `RedCat`
- `BlueLake`
- `SwiftFalcon`

### Diagnostic Commands

```bash
# Full system check
mcp-agent-mail doctor check

# View mail system status
mcp-agent-mail mail diagnostics

# Check routing rules
mcp-agent-mail mail routing

# View project health
mcp-agent-mail projects maintenance
```

---

## 13. Source Attribution & References

### Primary Sources

| Source | URL | Accessed |
|--------|-----|----------|
| GitHub Repository | [github.com/Dicklesworthstone/mcp_agent_mail](https://github.com/Dicklesworthstone/mcp_agent_mail) | 2026-01-19 |
| README.md | [Raw README](https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail/main/README.md) | 2026-01-19 |
| AGENTS.md | [Raw AGENTS.md](https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail/main/AGENTS.md) | 2026-01-19 |
| project_idea_and_guide.md | [Design Doc](https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail/main/project_idea_and_guide.md) | 2026-01-19 |
| SKILL.md | [Skill Integration](https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail/main/SKILL.md) | 2026-01-19 |

### Secondary Sources

| Source | URL |
|--------|-----|
| PulseMCP Server Listing | [pulsemcp.com/servers/dicklesworthstone-agent-mail](https://www.pulsemcp.com/servers/dicklesworthstone-agent-mail) |
| Jeffrey Emanuel Project Page | [jeffreyemanuel.com/projects/mcp-agent-mail](https://www.jeffreyemanuel.com/projects/mcp-agent-mail) |
| Glama MCP Registry | [glama.ai/mcp/servers/@Dicklesworthstone/mcp_agent_mail](https://glama.ai/mcp/servers/@Dicklesworthstone/mcp_agent_mail) |

### Related Extractions in This Repository

| File | Relevance |
|------|-----------|
| `extractions/orchestration/009-gas-town-steve-yegge.md` | Gas Town integration patterns |
| `extractions/orchestration/024-cc-mirror-complete.md` | CC-Mirror multi-agent patterns |
| `synthesis/mastery-ralph-complete.md` | Ralph loop patterns |
| `extractions/techniques/research-mcp-servers-expanded.md` | MCP protocol fundamentals |

### Author Information

**Jeffrey Emanuel** (@Dicklesworthstone)
- Creator of the "Agentic Coding Tooling Flywheel"
- Built complementary tools: NTM, Beads Viewer, CASS, DCG
- Focus: Infrastructure for multi-agent AI systems
- Philosophy: Coordination layers that enable autonomous agents to work together safely and auditably

---

## Appendix A: Complete Tool Reference

### Identity & Registration

| Tool | Purpose |
|------|---------|
| `register_agent` | Create/update agent profile |
| `whois` | Lookup single agent |
| `list_agents` | Directory listing with activity |

### Messaging

| Tool | Purpose |
|------|---------|
| `send_message` | Multicast GFM message |
| `fetch_inbox` | Poll inbox with filters |
| `acknowledge_message` | Mark message read/acknowledged |
| `search_messages` | FTS5 query |

### File Reservations

| Tool | Purpose |
|------|---------|
| `file_reservation_paths` | Request TTL lease |
| `release_file_reservations` | End lease early |

### Build Slots

| Tool | Purpose |
|------|---------|
| `acquire_build_slot` | Reserve compute resource |
| `renew_build_slot` | Extend TTL |
| `release_build_slot` | Free resource |

### Contact Management

| Tool | Purpose |
|------|---------|
| `request_contact` | Initiate cross-agent link |
| `respond_contact` | Approve/deny contact request |

### Product/Multi-Repo

| Tool | Purpose |
|------|---------|
| `ensure_product` | Create product grouping |
| `products_link` | Associate project with product |
| `search_messages_product` | Cross-project search |

### Macros (Combined Operations)

| Macro | Operations |
|-------|------------|
| `macro_start_session` | register + reserve + announce |
| `macro_prepare_thread` | set up discussion thread |
| `macro_file_reservation_cycle` | reserve → work → release |
| `macro_contact_handshake` | initiate cross-repo coordination |

---

## Appendix B: CLI Command Reference

```bash
# Server
mcp-agent-mail serve-http [--host HOST] [--port PORT]
mcp-agent-mail serve-stdio

# Configuration
mcp-agent-mail config view
mcp-agent-mail config set-port PORT
mcp-agent-mail config validate

# Pre-commit Guards
mcp-agent-mail guard install PROJECT_KEY REPO_PATH
mcp-agent-mail guard uninstall PROJECT_KEY REPO_PATH

# Diagnostics
mcp-agent-mail doctor check
mcp-agent-mail doctor repair [--dry-run] [--force-fts-rebuild]

# Archive & Recovery
mcp-agent-mail archive save [--label TEXT]
mcp-agent-mail archive list [--limit N]
mcp-agent-mail archive restore FILE [--force]

# Export for Sharing
mcp-agent-mail share export --output DIR
mcp-agent-mail share preview BUNDLE
mcp-agent-mail share verify BUNDLE

# Multi-Repo Products
mcp-agent-mail products ensure KEY
mcp-agent-mail products link PRODUCT_KEY PROJECT
mcp-agent-mail products search PRODUCT_KEY QUERY

# Reset (Dangerous)
mcp-agent-mail clear-and-reset-everything [--force]
```

---

*Document version: 1.0*
*Last updated: 2026-01-19*
*Lines: 950+*
