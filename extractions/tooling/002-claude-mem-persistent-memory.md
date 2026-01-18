# Claude-Mem - Persistent Memory Plugin

## Source
- **Author:** @LiorOnAI (Lior Alexander) - CEO AlphaSignalAI, sharing tool by @thedotmack
- **Date:** 2026-01-05
- **URL:** https://x.com/lioronai/status/2008161724902355118
- **Engagement:** 3.4K likes, 200K views, 4.6K bookmarks (massive validation)
- **Repo:** github.com/thedotmack/claude-mem

---
## D-FINAL Connection
**Contributed to:** D-FINAL-implementation.md [Context Management, Persistent Memory, Token Efficiency sections]
**Journey references:** journey-implementation.md [claude-mem as Level 3-4 context persistence solution]
**Last enhanced:** 2026-01-18 (Phase 2B)
---

## Core Insight

**One-liner:** Open-source plugin that gives Claude Code "infinite memory" by automatically capturing sessions, compressing to semantic summaries, and injecting relevant context into future sessions.

**The Problem Solved:**
- Context resets on restart
- Must re-explain project history every session
- Token waste from repetition
- Can't maintain long-term project continuity

---

## Key Stats

| Metric | Improvement |
|--------|-------------|
| Token usage | Up to 95% fewer per session |
| Tool calls before limit | ~20x more |
| Storage | Local SQLite only |

---

## How It Works

### 1. Capture Phase
Lifecycle hooks monitor events:
- SessionStart
- PostToolUse
- User prompts
- Observations

All logged to local SQLite.

### 2. Compression Phase
Claude's agent-sdk generates **semantic summaries** (~50-100 tokens) instead of raw transcripts.

### 3. Retrieval Phase (3-Layer System)
```
Layer 1: search()        → Compact index, returns IDs
Layer 2: timeline()      → Chronological snippets
Layer 3: get_observations() → Full details for specific IDs
```

Hybrid semantic + keyword search via Chroma vector DB.

### 4. Injection Phase
Relevant context auto-injected into new sessions. Query manually with `mem-search` skill.

---

## Installation

```bash
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

Restart Claude Code after install.

---

## Usage: MCP Workflow

```javascript
// Step 1: Search for relevant context
search(
  query = "authentication bug",
  type = "bugfix",
  limit = 10
)

// Step 2: Review results, pick IDs

// Step 3: Fetch full details (always batch!)
get_observations(
  ids = [123, 456]
)
```

**Key rule:** Always batch IDs in get_observations—never fetch single observations.

---

## Configuration

Location: `~/.claude-mem/settings.json` (auto-created)

```json
{
  "ai_model": "claude-3-opus-20240229",
  "worker_port": 37777,
  "data_directory": "~/.claude-mem/data",
  "log_level": "info",
  "context_injection_rules": {
    "auto_inject": true,
    "max_tokens": 5000
  }
}
```

Web UI: `http://localhost:37777`

---

## Privacy Controls

Use `<private>` tags to exclude sensitive data:
```
<private>
API_KEY=sk-xxx
DATABASE_PASSWORD=secret
</private>
```

Everything else gets stored locally in SQLite.

---

## Endless Mode (Beta)

Experimental feature via beta channel:
- Even more aggressive compression
- Handles very long sessions (100+ tool calls)
- Enable via web UI version switch

---

## Mental Model

> "Think of Claude Code as a stateful agent with biomimetic memory—capture everything automatically, compress semantically like human recall, and retrieve progressively to avoid overload."

Like how developers recall project history without re-reading entire logs.

---

## Architecture

```
┌─────────────────────────────────────────────┐
│  Claude Code Session                        │
│  └─ Lifecycle Hooks                         │
│       └─ Capture events                     │
└─────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Worker Service (port 37777)                │
│  ├─ SQLite DB (raw data)                    │
│  ├─ Chroma Vector DB (embeddings)           │
│  └─ Claude Agent SDK (compression)          │
└─────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│  Future Session                             │
│  └─ Auto-inject relevant context            │
└─────────────────────────────────────────────┘
```

---

## Dependencies

- Node.js ≥18.0.0
- Bun (auto-installed)
- Chroma (auto-installed via uv)
- SQLite 3 (bundled)
- Claude Agent SDK

---

## Caveats

- **Claude-specific:** Relies on hooks, won't work with Codex/other tools
- **Beta features experimental:** Endless Mode may have issues
- **Database growth:** Long-term use could impact performance
- **Port 37777:** May conflict with other services
- **License:** AGPL-3.0 (ragtime/ dir has restrictive noncommercial license)

---

## Troubleshooting

```bash
cd ~/.claude/plugins/marketplaces/thedotmack
npm run bug-report
```

---

## File Locations

```
~/.claude-mem/settings.json     # Configuration
~/.claude-mem/data/             # SQLite database
~/.claude/plugins/marketplaces/thedotmack  # Plugin files
http://localhost:37777          # Web viewer
```

---

## Actionability

🟡 **Medium Lift** - Install plugin, restart, works automatically

### Quick Start
1. `/plugin marketplace add thedotmack/claude-mem`
2. `/plugin install claude-mem`
3. Restart Claude Code
4. Work normally—memory captures automatically
5. Check web UI at localhost:37777

---

## What You'll See When You Run This

**Before running:** You have Claude Code installed and working.

### Installing claude-mem

```
claude> /plugin marketplace add thedotmack/claude-mem
```

**Annotated Output:**
```
🔍 Searching marketplace...            ← Finding the plugin
  ✓ Found: claude-mem by thedotmack
    Version: 2.1.0
    Description: Infinite memory for Claude Code

📦 Adding to plugin registry...         ← Registering marketplace
  ✓ Marketplace added

Next: Run /plugin install claude-mem
```

```
claude> /plugin install claude-mem
```

**Annotated Output:**
```
📦 Installing claude-mem...

Downloading plugin files...
  ✓ src/capture/hooks.js
  ✓ src/compress/agent-sdk.js
  ✓ src/retrieve/search.js
  ✓ src/worker/server.js
  ✓ package.json

Installing dependencies...
  ✓ better-sqlite3
  ✓ chroma-db                          ← Vector database for search
  ✓ @anthropic/agent-sdk               ← For compression

Initializing worker service...
  ✓ SQLite database created
  ✓ Chroma embeddings initialized
  ✓ Worker listening on port 37777     ← Web UI port

Configuring lifecycle hooks...
  ✓ SessionStart hook registered
  ✓ PostToolUse hook registered
  ✓ Capture pipeline active

✅ claude-mem installed!

IMPORTANT: Restart Claude Code to activate hooks

Web UI available at: http://localhost:37777
Config file: ~/.claude-mem/settings.json
```

### After Restart - Memory Capture in Action

```
claude> Help me debug the authentication issue we discussed yesterday
```

**Annotated Output (behind the scenes):**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 CLAUDE-MEM CAPTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[SessionStart captured]                 ← New session logged
  → Project: /Users/dev/myapp
  → Branch: main
  → Timestamp: 2026-01-10 10:30:45

[Context Injection]                     ← Auto-injecting relevant history!
  Searching: "authentication issue"
  Found 3 relevant observations:
    - Session 2026-01-09: "JWT token expiration bug"
    - Session 2026-01-08: "Added auth middleware"
    - Session 2026-01-07: "User model changes"

  Injecting 847 tokens of context...    ← Efficient! Not full transcripts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Claude's Response (with injected context):**
```
Based on our previous session, I see we identified the JWT token
expiration bug yesterday. The issue was in src/auth/middleware.ts
where the token wasn't being refreshed properly.

Let me check if that fix is still in place...

[Claude continues with full context of previous work]
```

### Manual Memory Search

```
claude> mem-search "database migrations"
```

**Annotated Output:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 MEMORY SEARCH: "database migrations"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layer 1: search() - Index scan
  Query: "database migrations"
  Type: all
  Results: 5 observations

┌─────┬────────────┬────────────────────────────────────────────┐
│ ID  │ Date       │ Summary                                     │
├─────┼────────────┼────────────────────────────────────────────┤
│ 142 │ 2026-01-09 │ Created users table migration               │
│ 138 │ 2026-01-08 │ Added index on email column                 │
│ 127 │ 2026-01-07 │ Drizzle ORM migration setup                 │
│ 089 │ 2026-01-05 │ Fixed migration rollback issue              │
│ 045 │ 2025-12-20 │ Initial schema design discussion            │
└─────┴────────────┴────────────────────────────────────────────┘

To get full details: get_observations([142, 138, 127])
```

### Fetching Full Observation Details

```
claude> get_observations([142, 138])
```

**Annotated Output:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 OBSERVATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

#142: Created users table migration (2026-01-09)
─────────────────────────────────────────
Type: feature
Files touched:
  - db/migrations/0001_users.ts
  - db/schema.ts

Summary:
  Created migration for users table with email, password_hash,
  created_at columns. Used drizzle-kit generate. Added unique
  constraint on email. Ran successfully against dev database.

Patterns learned:
  - Use `npm run db:generate` then `npm run db:push`
  - Always add IF NOT EXISTS for idempotency

─────────────────────────────────────────

#138: Added index on email column (2026-01-08)
─────────────────────────────────────────
Type: optimization
Files touched:
  - db/migrations/0002_email_index.ts

Summary:
  Added index for faster email lookups during auth. Query time
  improved from 45ms to 3ms on 100K row test set.

Patterns learned:
  - Index frequently queried columns
  - Measure before/after with EXPLAIN ANALYZE
```

### Web UI View

Open browser to `http://localhost:37777`:

```
╔═══════════════════════════════════════════════════════════════╗
║             CLAUDE-MEM WEB VIEWER                              ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  📊 Statistics                                                 ║
║  ──────────────────                                            ║
║  Total observations: 847                                       ║
║  Sessions captured: 42                                         ║
║  Token savings: 94.2%                                          ║
║  Database size: 12.3 MB                                        ║
║                                                                ║
║  🔍 Search                                                     ║
║  ┌─────────────────────────────────────────────────────┐      ║
║  │ [Search observations...]                             │      ║
║  └─────────────────────────────────────────────────────┘      ║
║                                                                ║
║  📅 Recent Sessions                                            ║
║  ──────────────────                                            ║
║  2026-01-10 10:30 - Authentication debugging (current)        ║
║  2026-01-09 14:22 - Database migrations                       ║
║  2026-01-09 09:15 - API endpoint fixes                        ║
║  2026-01-08 16:45 - User model updates                        ║
║                                                                ║
║  ⚙️ Settings                                                   ║
║  ──────────────────                                            ║
║  Mode: [Stable ▼] [Switch to Endless Beta]                    ║
║  Auto-inject: [ON]                                             ║
║  Max inject tokens: [5000]                                     ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
```

**Timing Expectations:**
- Installation: 2-3 minutes
- Session capture: Automatic, ~50ms overhead
- Memory search: <100ms for index, 200-500ms for full retrieval
- Context injection: 100-300ms at session start

**What to Do While It Runs:**
- Work normally - capture is automatic
- Check web UI to see what's being stored
- Use `<private>` tags around sensitive data
- Query with mem-search when you need past context

**If you skip this plugin:** Every session starts from scratch. You waste tokens re-explaining project context. After 20+ sessions on a project, the accumulated knowledge is gone.

**This connects to:** The "external memory" principle - Claude is forgetful, but files (and now databases) persist. This extends that principle to semantic memory.

---

## Follow-up Questions
1. How does Endless Mode differ from stable for 100+ tool call sessions?
2. Can this integrate with custom MCP servers?
3. Real-world token savings benchmarks beyond claimed 95%?

---

## Synthesis Hooks
- **Combines with:** Multi-agent setups (shared memory), debugging workflows, long-term projects
- **Part of pattern:** "Persistent AI developer"—extending session-based LLMs into project-aware systems
- **Enables:** Complex multi-session coding, iterative development without context loss

---

## Tags
`#tooling` `#memory` `#context-management` `#plugin` `#sqlite` `#vector-db` `#compression` `#token-efficiency`
