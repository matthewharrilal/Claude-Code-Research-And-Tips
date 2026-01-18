# Transformation: Manual Context -> Filesystem State

---

## D-FINAL Integration

**Validates invariants:** INV-2 (External state over internal memory), INV-9 (Learning must compound), INV-11 (Ralph Mindset - files carry state)
**Maps to complexity ladder:** Level 0-1 (Manual/Single Session) → Level 2+ (Ralph and beyond)
**Cross-references:**
- D-FINAL-implementation.md Section 2 (State Management Implementation)
- D-FINAL-implementation.md Section 2.2 (PRD Schema Templates)
- D-FINAL-mental-models.md Model 2 (External State Over Internal Memory)
- D-FINAL-mental-models.md Model 9 (Learning Must Compound)
**Journey link:** journey-implementation.md (state file setup)
**Last updated:** 2026-01-18 (Phase 2B)

---

## The Problem

You're building a complex feature across multiple sessions and need to track:
- What's done and what's next
- Patterns you've discovered in this codebase
- Decisions made and why
- Learnings that should persist

The question: Where does this knowledge live?

---

## BEFORE: Manual Context Management

### The Approach

```
[Your Brain] -----> [Claude Session] -----> [Code Changes]
     |                    |
     |                    v
     |              Session ends
     |                    |
     v                    v
  Remembers?         [Knowledge Lost]
```

You keep state in your head:
- "I was working on the auth module"
- "I discovered we use bcrypt 12 rounds here"
- "US-003 is blocked by that migration bug"
- "The pattern for new routes is..."

### What This Looks Like

**Starting a new session:**
```
Human: I'm continuing work on the user dashboard.
Yesterday we finished the login form (US-001).
We learned that server actions are required for forms.
The migration pattern uses IF NOT EXISTS.
Today we need to do US-002 (profile page).
Also remember that types go in actions.ts...
```

**Every. Single. Session.**

### The Problems

| Problem | Impact |
|---------|--------|
| Context lost on clear/compact | Start over explaining everything |
| Human memory limits | Forget discoveries, repeat mistakes |
| No compounding learning | Each session starts from zero |
| Tribal knowledge | Only you know the patterns |
| Session-dependent | Can't hand off to another agent |

### The Failure Mode

```
Session 1: Discover bcrypt needs 12 rounds (the hard way)
Session 2: Forget, use default 10 rounds
Session 3: Debug production auth issues
Session 4: Rediscover bcrypt needs 12 rounds
```

Knowledge doesn't compound. You're running in circles.

---

## AFTER: Filesystem State

### The New Architecture

```
[Filesystem State] <---> [Claude Session] -----> [Code Changes]
       |                        |                      |
       v                        v                      v
  [Persists]              [Reads State]          [Updates State]
       |                        |                      |
       +------------------------+----------------------+
                    |
              [Compounds Over Time]
```

State lives in files. Sessions read and write. Knowledge persists.

### State Files

**scripts/ralph/progress.txt** - Session Memory
```markdown
# Progress Log
Project: User Dashboard
Started: 2026-01-09

## Codebase Patterns Discovered
- Migrations: Always use IF NOT EXISTS (learned from failed deploy)
- Types: Export from actions.ts, import in components
- React: useRef<Timeout | null>(null) for timer refs
- Forms: Server actions required, not API routes
- Auth: bcrypt rounds = 12 (security requirement)

## Session Log

### 2026-01-09 - US-001: Login Form
- Status: COMPLETE
- Files modified:
  - app/login/page.tsx
  - lib/actions/auth.ts
  - lib/schemas/auth.ts
- Learnings:
  - Server actions handle form submission
  - Zod validation happens server-side
  - Toast notifications via sonner
- Time: ~2 hours
---

### 2026-01-09 - US-002: Profile Page
- Status: IN PROGRESS
- Files modified:
  - app/profile/page.tsx (started)
- Blocked by: Need to understand image upload pattern
- Next: Check how settings page handles uploads
---
```

**scripts/ralph/prd.json** - Task State
```json
{
  "project": "User Dashboard",
  "lastUpdated": "2026-01-09T14:30:00Z",
  "userStories": [
    {
      "id": "US-001",
      "title": "Login Form",
      "status": "complete",
      "passes": true,
      "completedAt": "2026-01-09T10:00:00Z"
    },
    {
      "id": "US-002",
      "title": "Profile Page",
      "status": "in_progress",
      "passes": false,
      "blockers": ["image-upload-pattern"]
    },
    {
      "id": "US-003",
      "title": "Settings Page",
      "status": "pending",
      "passes": false,
      "dependencies": ["US-002"]
    }
  ],
  "discoveries": {
    "patterns": ["server-actions-for-forms", "bcrypt-12-rounds"],
    "antipatterns": ["api-routes-for-forms", "inline-validation"]
  }
}
```

**AGENTS.md** - Permanent Learnings
```markdown
# Agent Learnings

This file contains patterns and knowledge discovered through development.
Read before starting work. Update when you learn something new.

## Authentication Module

### Security Requirements
- Password hashing: bcrypt with minimum 12 rounds
- Session tokens: 7-day expiry, refresh on activity
- Rate limiting: 5 attempts per 15 minutes

### Patterns
- All auth actions in `lib/actions/auth.ts`
- Schemas in `lib/schemas/auth.ts`
- Use `getServerSession()` not `useSession()` in server components

## Database

### Migration Patterns
- Always use `IF NOT EXISTS` for table creation
- Always use `IF EXISTS` for drops
- Name format: `YYYYMMDD_description.sql`
- Test migrations against production clone before deploy

### Query Patterns
- Use prepared statements exclusively
- Connection pooling via `lib/db/pool.ts`
- Transactions for multi-table operations

## Frontend

### Form Handling
- Server actions, not API routes
- Zod validation server-side
- `useFormState` + `useFormStatus` for state
- Toast feedback via sonner

### Component Patterns
- Ref typing: `useRef<HTMLElement | null>(null)`
- Timer refs: `useRef<Timeout | null>(null)`
- Cleanup in useEffect return
```

### Starting a New Session Now

```
Human: Continue work on user dashboard

[Claude reads progress.txt, prd.json, AGENTS.md]

Claude: I see we completed US-001 (login form) and US-002 (profile page)
is in progress, blocked on the image upload pattern. Let me check the
settings page to understand how uploads work here, then continue with
the profile page.
```

**Zero context re-explanation. Knowledge compounds.**

---

## Filesystem State Architecture

```
project/
├── scripts/ralph/              # Agent working memory
│   ├── progress.txt            # Session log, discoveries
│   ├── prd.json                # Task tracking, dependencies
│   └── scratch/                # Temporary analysis files
│
├── AGENTS.md                   # Permanent learnings
│                               # (or .claude/AGENTS.md)
│
├── .git/                       # History as memory
│   └── (commits tell the story)
│
└── src/                        # The actual code
```

### What Each Layer Does

| Layer | Purpose | Lifespan | Who Reads |
|-------|---------|----------|-----------|
| progress.txt | Session continuity | This project | Same agent, next session |
| prd.json | Task state machine | This project | Agent, potentially CI |
| AGENTS.md | Pattern library | Permanent | All future agents |
| .git | Change history | Permanent | Anyone |

---

## The Transformation Benefits

### Before vs After

| Aspect | Manual Context | Filesystem State |
|--------|---------------|------------------|
| Session start | Re-explain everything | Read files, continue |
| Pattern discovery | Lost on session end | Persists, compounds |
| Handoff to new agent | Impossible | Read the files |
| Debugging old work | "What was I thinking?" | Check progress.txt |
| Avoiding past mistakes | Hope you remember | It's documented |

### Compounding Returns

```
Session 1:  Learn pattern A, write to AGENTS.md
Session 2:  Read AGENTS.md, learn pattern B, write it
Session 3:  Read AGENTS.md, know A+B already, learn C
...
Session N:  Read AGENTS.md, know A through N-1, highly effective
```

Each session is more productive than the last.

---

## Migration Checklist

### Getting Started (Do Once)

- [ ] Create `scripts/ralph/` directory (or your preferred name)
- [ ] Initialize `progress.txt` with project header
- [ ] Initialize `prd.json` with user stories structure
- [ ] Create `AGENTS.md` at project root (or in `.claude/`)

---

#### Checkpoint: After Getting Started

**Where you are:** You have the core state file infrastructure in place.
**What this enables:** Sessions can now read state from files instead of relying on human memory or context window.

**Verify your state:**
```bash
# Check directory structure
ls -la scripts/ralph/

# Check all files exist
ls scripts/ralph/progress.txt scripts/ralph/prd.json AGENTS.md

# Verify prd.json has valid structure
jq 'keys' scripts/ralph/prd.json
```

**You should see:**
```
scripts/ralph/:
-rw-r--r--  progress.txt    ← Session log ready
-rw-r--r--  prd.json        ← Task state ready

AGENTS.md exists             ← Pattern library ready

["project", "userStories"]   ← Required keys present
```

**Your folder should look like:**
```
project/
├── scripts/ralph/
│   ├── progress.txt   ← created
│   └── prd.json       ← created
├── AGENTS.md          ← created
└── src/
```

**If you don't see this:**
- Check: Did you create the scripts/ralph/ directory?
- Check: Is prd.json valid JSON?
- Check: Is AGENTS.md at project root?
- Go back to: Creating the directory structure

**This connects to:** Every Session Start → During Session → Compounding knowledge

---

### Every Session Start

- [ ] Read `progress.txt` to understand where you left off
- [ ] Read `prd.json` to see task states and blockers
- [ ] Read `AGENTS.md` to load project patterns
- [ ] Identify the next task to work on

### During Session

- [ ] Update `progress.txt` when you learn something
- [ ] Update `prd.json` when task status changes
- [ ] Note blockers and dependencies as you discover them

### Every Session End

- [ ] Update `progress.txt` with session summary
- [ ] Update `prd.json` with final task states
- [ ] Add any permanent learnings to `AGENTS.md`
- [ ] Commit state files with meaningful message

---

#### Checkpoint: After First Complete Session Cycle

**Where you are:** You've completed read → work → write cycle for all state files.
**What this enables:** Knowledge compounds. Next session starts ahead. Patterns persist.

**Verify your state:**
```bash
# Check progress.txt has at least one session entry
grep -c "## Session" scripts/ralph/progress.txt

# Check prd.json has updated task states
jq '.userStories | map(select(.status != "pending")) | length' scripts/ralph/prd.json

# Check AGENTS.md has patterns
grep -c "^- " AGENTS.md  # Count bullet points (patterns)

# Check git has state files committed
git log --oneline --name-only -1 | grep -E "progress|prd|AGENTS"
```

**You should see:**
```
1                              ← At least 1 session logged
1                              ← At least 1 task started/completed
5                              ← Multiple patterns documented
progress.txt                   ← State files in commit
prd.json
```

**Test next session start:**
```bash
# Simulate what Claude would read at session start
head -30 scripts/ralph/progress.txt
jq '.userStories[] | {id, status}' scripts/ralph/prd.json
```

**If you don't see this:**
- Check: Did you append to progress.txt (not overwrite)?
- Check: Did you update prd.json task states?
- Check: Did you git commit the state files?
- Go back to: Session End checklist

**This connects to:** Periodic Maintenance → Compounding returns → Knowledge compounds forever

---

### Periodic Maintenance

- [ ] Review `AGENTS.md` for outdated patterns
- [ ] Archive completed work from `progress.txt`
- [ ] Clean up resolved blockers in `prd.json`

---

## Quick Reference: File Templates

### Minimal progress.txt
```markdown
# Progress Log
Project: [Name]
Started: [Date]

## Patterns
- [Pattern 1]

## Sessions
### [Date] - [Task]
- Status: [complete|in_progress|blocked]
- Files: [list]
- Learnings: [what you discovered]
---
```

### Minimal prd.json
```json
{
  "project": "Name",
  "userStories": [
    {"id": "US-001", "title": "Task", "status": "pending", "passes": false}
  ]
}
```

### Minimal AGENTS.md
```markdown
# Agent Learnings

## [Module Name]
- [Pattern or requirement]
```

---

## The Mental Model

**Manual Context:** Knowledge lives in wetware, dies with the session.

**Filesystem State:** Knowledge lives in files, compounds forever.

```
Your brain is RAM.
The filesystem is disk.
Persist what matters.
```
