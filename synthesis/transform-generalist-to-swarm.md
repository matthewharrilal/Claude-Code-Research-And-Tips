# Transformation: Generalist Agent to Specialized Swarm

> **You Are Here:** This document shows how to evolve from a single agent doing everything (poorly) to specialized workers doing their domains excellently. If your full-stack features have inconsistent quality or take forever due to context dilution, the swarm pattern solves this. This connects to Level 5-6 (CC Mirror Hub-and-Spoke) on the complexity ladder and enables true parallel execution with domain expertise.

**The paradigm shift from single-context everything to orchestrated domain specialists**

---

## D-FINAL Integration

**Validates invariants:** INV-1 (Context is constraint), INV-3 (Fresh context beats extended), INV-5 (Parallelization over single-agent), INV-8 (Model tiering), INV-14 (Claims-based coordination)
**Maps to complexity ladder:** Level 1-2 (Single/Ralph) → Level 5-6 (CC Mirror Hub-and-Spoke)
**Cross-references:**
- D-FINAL-architecture.md Section 2.2 (CC Mirror Hub-and-Spoke)
- D-FINAL-architecture.md Section 7 (Architecture Invariants - The Iron Law)
- D-FINAL-mental-models.md Model 5 (Parallelization Over Single-Agent)
- D-FINAL-mental-models.md Model 8 (Model Tiering)
**Journey link:** journey-architecture.md (pattern selection and scaling)
**Last updated:** 2026-01-18 (Phase 2B)

---

## The Workload

Build a full-stack feature: User Authentication System

**Requirements:**
- Database schema (users table, sessions table, password hashing)
- API endpoints (register, login, logout, refresh token)
- Frontend components (login form, registration form, auth context)
- Tests (unit tests, integration tests, E2E flow)

---

## BEFORE: Single Generalist Agent

### Approach

One Claude instance handles everything sequentially:

```
┌─────────────────────────────────────────────────────────────┐
│                    GENERALIST AGENT                          │
│                     (Single Instance)                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   Context Window (filling up...)                            │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ DB schema design decisions...                        │   │
│   │ SQL migration syntax...                              │   │
│   │ API route patterns...                                │   │
│   │ JWT token implementation...                          │   │
│   │ React component structure...                         │   │
│   │ Form validation patterns...                          │   │
│   │ Test setup boilerplate...                           │   │
│   │ Mock configuration...                                │   │
│   │ [CONTEXT GETTING CROWDED]                           │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                              │
│   Execution: Sequential                                     │
│   Step 1: Design schema          [45 min]                   │
│   Step 2: Write migrations       [30 min]                   │
│   Step 3: Implement API          [60 min]                   │
│   Step 4: Build UI components    [45 min]                   │
│   Step 5: Write tests            [60 min]                   │
│   ─────────────────────────────────────                    │
│   Total:                         [240 min = 4 hours]        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Session Transcript (Illustrative)

```
Human: Build a user authentication system with DB, API, UI, and tests.

Agent: I'll start by designing the database schema.

[Agent reads existing schema files]
[Agent writes users table migration]
[Agent writes sessions table migration]
[Agent runs migrations]

Agent: Now I'll implement the API endpoints.

[Agent reads API patterns from codebase]
[Agent implements register endpoint]
[Agent implements login endpoint]
[Agent implements logout endpoint]
[Agent implements token refresh]

Agent: Moving on to the frontend components.

[Agent reads existing component patterns]
[Agent creates LoginForm component]
[Agent creates RegistrationForm component]
[Agent creates AuthContext provider]
[Agent updates app routing]

Agent: Finally, I'll write the tests.

[Agent reads test patterns]
[Agent writes unit tests for API]
[Agent writes unit tests for components]
[Agent writes integration tests]
[Agent writes E2E test]

Agent: Done! The authentication system is complete.
```

### Problems with This Approach

| Problem | Impact |
|---------|--------|
| **Context Dilution** | By the time we reach tests, early schema decisions are pushed out of context window. Agent may forget why certain choices were made. |
| **Domain Switching Overhead** | Mental model shifts: SQL thinking to Node.js thinking to React thinking to testing thinking. Each switch has cognitive cost. |
| **No Parallelism** | 4 hours sequential. Human waits the entire time. |
| **Jack of All Trades** | Agent is adequate at everything but expert at nothing. Backend code has frontend patterns; tests miss edge cases. |
| **Single Point of Failure** | If context corrupts at hour 3, all progress since last commit at risk. |
| **No Specialization** | Same prompt patterns for schema design and UI components. No domain-specific optimization. |

### Quality Distribution

```
Quality Across Domains (Generalist)
─────────────────────────────────────────────────────────────

Database:    ████████░░░░░░░░░░░░  40% (adequate but not optimal)
API:         ██████████░░░░░░░░░░  50% (working but inconsistent)
Frontend:    ██████░░░░░░░░░░░░░░  30% (functional, rough edges)
Tests:       ████░░░░░░░░░░░░░░░░  20% (basic coverage, context exhausted)

Average:     35% of potential quality
```

**Why tests suffer most:** They come last, when context is most crowded with implementation details from three different domains.

---

## AFTER: Specialized Swarm (CC Mirror Pattern)

### Architecture

```
╔═══════════════════════════════════════════════════════════════════╗
║                         SPECIALIZED SWARM                          ║
╠═══════════════════════════════════════════════════════════════════╣
║                                                                    ║
║              ┌─────────────────────────────────┐                  ║
║              │       ORCHESTRATOR              │                  ║
║              │       (Opus 4.5)                │                  ║
║              │                                 │                  ║
║              │  "I coordinate. I never code."  │                  ║
║              │                                 │                  ║
║              │  Tools: Task*, Read (minimal)   │                  ║
║              └─────────────┬───────────────────┘                  ║
║                            │                                       ║
║           ┌────────────────┼────────────────┐                     ║
║           │                │                │                     ║
║           ▼                ▼                ▼                     ║
║  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               ║
║  │  BACKEND    │  │  FRONTEND   │  │   TEST      │               ║
║  │  WORKER     │  │  WORKER     │  │   WORKER    │               ║
║  │  (Sonnet)   │  │  (Sonnet)   │  │  (Haiku)    │               ║
║  │             │  │             │  │             │               ║
║  │ DB schema   │  │ UI comps    │  │ Integration │               ║
║  │ Migrations  │  │ Forms       │  │ tests       │               ║
║  │ API routes  │  │ Auth ctx    │  │ E2E tests   │               ║
║  └─────────────┘  └─────────────┘  └─────────────┘               ║
║                                                                    ║
║  Execution:                                                        ║
║  ├── Backend Worker    ████████░░  [60 min]                       ║
║  ├── Frontend Worker   ████████░░  [45 min] (parallel after APIs) ║
║  └── Test Worker       ██████░░░░  [30 min] (after both complete) ║
║  ─────────────────────────────────────────                        ║
║  Total Wall Clock:     [~90 min with dependencies]                ║
║                                                                    ║
╚═══════════════════════════════════════════════════════════════════╝
```

### Implementation

#### Step 1: Orchestrator Prompt

```markdown
# ORCHESTRATOR SYSTEM PROMPT

You are the orchestrator for building a user authentication system.

## IRON LAW
- You do NOT write code
- You do NOT run commands
- You do NOT explore codebases directly
- You ONLY coordinate workers

## YOUR TOOLS
- Task (to spawn workers)
- Read (only for high-level overview, 1-2 files max)

## TASK BREAKDOWN

1. **Backend Task** (blocked_by: none)
   - Design and implement users/sessions schema
   - Create API endpoints: register, login, logout, refresh
   - Run backend tests before reporting complete

2. **Frontend Task** (blocked_by: Backend Task)
   - Create LoginForm, RegistrationForm components
   - Implement AuthContext provider
   - Wire up to API endpoints
   - Run component tests before reporting complete

3. **Test Task** (blocked_by: Frontend Task)
   - Write integration tests for auth flow
   - Write E2E test for complete user journey
   - Verify all tests pass

## WORKFLOW
1. Spawn Backend Worker (run_in_background: true)
2. Wait for Backend completion
3. Spawn Frontend Worker (run_in_background: true)
4. Wait for Frontend completion
5. Spawn Test Worker
6. Synthesize results and report to human
```

#### Step 2: Worker Preambles

**Backend Worker Preamble:**
```markdown
# WORKER CONTEXT

ROLE: Backend Worker
SCOPE: Database schema and API endpoints ONLY

## RULES
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, Glob, Grep)
- Do NOT spawn sub-agents
- Do NOT call Task or TaskCreate
- Report results with absolute file paths

## AVAILABLE TOOLS
Read, Write, Edit, Bash, Glob, Grep, WebSearch

## TASK
Implement user authentication backend:

1. Database Schema
   - users table (id, email, password_hash, created_at, updated_at)
   - sessions table (id, user_id, token, expires_at, created_at)
   - Use existing migration patterns in /db/migrations/

2. API Endpoints
   - POST /auth/register
   - POST /auth/login
   - POST /auth/logout
   - POST /auth/refresh
   - Follow patterns in /src/api/

3. Verification
   - Run: npm run test:backend
   - All tests must pass before reporting complete

## DELIVERABLES
Report with:
- Files created/modified (absolute paths)
- Any blockers encountered
- Test results summary
```

**Frontend Worker Preamble:**
```markdown
# WORKER CONTEXT

ROLE: Frontend Worker
SCOPE: UI components and auth state ONLY

## RULES
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash, Glob, Grep)
- Do NOT spawn sub-agents
- Do NOT call Task or TaskCreate
- Report results with absolute file paths

## AVAILABLE TOOLS
Read, Write, Edit, Bash, Glob, Grep

## TASK
Implement authentication UI:

1. Components (follow patterns in /src/components/)
   - LoginForm.tsx (email, password, submit, error handling)
   - RegistrationForm.tsx (email, password, confirm, submit)
   - Protected route wrapper

2. Auth Context
   - AuthProvider with user state
   - useAuth hook
   - Token storage and refresh logic

3. Verification
   - Run: npm run test:components
   - All component tests must pass

## API ENDPOINTS (from Backend Worker)
- POST /auth/register { email, password }
- POST /auth/login { email, password }
- POST /auth/logout
- POST /auth/refresh

## DELIVERABLES
Report with:
- Files created/modified (absolute paths)
- Any blockers encountered
- Test results summary
```

**Test Worker Preamble:**
```markdown
# WORKER CONTEXT

ROLE: Test Worker
SCOPE: Integration and E2E tests ONLY

## RULES
- Complete ONLY the task described below
- Use tools directly (Read, Write, Edit, Bash)
- Do NOT spawn sub-agents
- Do NOT call Task or TaskCreate
- Report results with absolute file paths

## AVAILABLE TOOLS
Read, Write, Edit, Bash, Glob, Grep

## TASK
Create comprehensive auth test coverage:

1. Integration Tests
   - Test API endpoints with real DB
   - Test auth flow: register -> login -> access protected -> logout
   - Test error cases: invalid credentials, expired tokens

2. E2E Tests
   - Full browser test: navigate -> register -> login -> use app -> logout
   - Use Playwright patterns from /tests/e2e/

3. Verification
   - Run: npm run test:integration
   - Run: npm run test:e2e
   - ALL tests must pass

## DELIVERABLES
Report with:
- Files created/modified (absolute paths)
- Test coverage summary
- Any edge cases identified
```

### Orchestrator Execution Flow

```
ORCHESTRATOR LOG
════════════════════════════════════════════════════════════════

[00:00] Received task: Build user authentication system

[00:01] Decomposing into worker tasks...
        Task 1: Backend (DB + API)     [no dependencies]
        Task 2: Frontend (UI + State)  [depends on: Backend]
        Task 3: Tests (Integration/E2E) [depends on: Frontend]

[00:02] Spawning Backend Worker (run_in_background: true)
        → Worker ID: backend-auth-001

[00:45] Backend Worker completed
        → Files modified: 8
        → /db/migrations/20260109_users.sql
        → /db/migrations/20260109_sessions.sql
        → /src/api/auth/register.ts
        → /src/api/auth/login.ts
        → /src/api/auth/logout.ts
        → /src/api/auth/refresh.ts
        → /src/api/auth/index.ts
        → /src/api/auth/__tests__/auth.test.ts
        → Tests: 12 passed, 0 failed

[00:46] Spawning Frontend Worker (run_in_background: true)
        → Worker ID: frontend-auth-001

[01:15] Frontend Worker completed
        → Files modified: 6
        → /src/components/auth/LoginForm.tsx
        → /src/components/auth/RegistrationForm.tsx
        → /src/components/auth/ProtectedRoute.tsx
        → /src/context/AuthContext.tsx
        → /src/hooks/useAuth.ts
        → /src/components/auth/__tests__/auth.test.tsx
        → Tests: 8 passed, 0 failed

[01:16] Spawning Test Worker
        → Worker ID: test-auth-001

[01:35] Test Worker completed
        → Files created: 2
        → /tests/integration/auth.integration.test.ts
        → /tests/e2e/auth.e2e.spec.ts
        → Integration tests: 6 passed
        → E2E tests: 4 passed

[01:36] SYNTHESIS
        ════════════════════════════════════════

        Authentication system complete.

        Total files: 16
        Total tests: 30 (all passing)

        Backend:  /src/api/auth/
        Frontend: /src/components/auth/, /src/context/
        Tests:    /tests/integration/, /tests/e2e/

        Ready for human review.

════════════════════════════════════════════════════════════════
```

### Benefits of the Swarm Approach

| Benefit | Explanation |
|---------|-------------|
| **Parallel Execution** | Backend can complete while frontend waits. Total time: ~90 min vs 4 hours sequential. |
| **Domain Specialization** | Each worker loads only relevant patterns. Backend worker doesn't pollute context with React. |
| **Focused Context** | Each worker's context window is 100% dedicated to its domain. No context dilution. |
| **Better Quality per Domain** | Workers can go deep on their specialty without breadth pressure. |
| **Fault Isolation** | If frontend worker fails, backend work is preserved. Retry just the failed piece. |
| **Scale Horizontally** | Need more features? Add more workers. Orchestrator scales the coordination. |
| **Model Optimization** | Use Opus for orchestration (complex reasoning), Sonnet for implementation, Haiku for simple tests. |

### Quality Distribution

```
Quality Across Domains (Swarm)
─────────────────────────────────────────────────────────────

Database:    ████████████████████  85% (specialist worker, focused)
API:         ██████████████████░░  80% (same worker, coherent design)
Frontend:    ████████████████░░░░  75% (specialist, fresh context)
Tests:       ██████████████████░░  80% (specialist, comprehensive)

Average:     80% of potential quality
```

**Why quality improves across all domains:** Each worker starts fresh, loads only relevant context, and can focus entirely on its specialty.

---

## Comparison Matrix

| Aspect | Generalist | Specialized Swarm |
|--------|------------|-------------------|
| **Parallelism** | None (sequential) | Full (with dependency awareness) |
| **Specialization** | None (one agent does all) | Per-worker domain focus |
| **Context** | Shared/diluted across domains | Focused per domain |
| **Speed** | Linear (4 hours) | Parallel (~90 min with deps) |
| **Quality** | Averages down (35%) | High per domain (80%) |
| **Fault Tolerance** | Single point of failure | Isolated failures, retry individual workers |
| **Cost** | Lower (one agent) | Higher (multiple agents) |
| **Complexity** | Simple to run | Requires orchestration setup |
| **Debugging** | Single context to examine | Multiple contexts, need monitoring |
| **Scaling** | Add more time | Add more workers |

---

## Implementation Patterns

### Starting Simple: Manual Swarm

Before investing in CC Mirror or Gas Town, you can manually orchestrate:

```bash
# Terminal 1: Backend Worker
cd ~/project
claude --print "You are a backend worker. Implement auth DB and API..." > backend.log &

# Wait for backend to complete (monitor backend.log)
# Then Terminal 2: Frontend Worker
claude --print "You are a frontend worker. Implement auth UI..." > frontend.log &

# Wait for frontend to complete
# Then Terminal 3: Test Worker
claude --print "You are a test worker. Write integration tests..." > test.log
```

---

#### Checkpoint: After Manual Swarm Setup

**Where you are:** You've launched workers manually in separate terminals with dedicated log files.
**What this enables:** Testing swarm patterns without infrastructure. Validates the concept before investing in tooling.

**Verify your state:**
```bash
# Check workers are running (if backgrounded)
jobs -l

# Check log files exist
ls -la backend.log frontend.log test.log

# Check backend completed (look for exit indicator)
tail -20 backend.log
```

**You should see:**
```
[1]  + 12345 running    claude --print ...   ← Worker running
[2]  + 12346 running    claude --print ...   ← Worker running

-rw-r--r--  backend.log                      ← Logs being written
-rw-r--r--  frontend.log

# In backend.log, near end:
Files modified:
- /src/api/auth/register.ts
- /src/api/auth/login.ts                     ← Work completed
```

**Monitor workers:**
```bash
# Watch backend progress
tail -f backend.log

# In another terminal, watch frontend
tail -f frontend.log
```

**If you don't see this:**
- Check: Did Claude start without errors? (check log start)
- Check: Is `--print` mode outputting to file?
- Check: Are worker prompts including "WORKER CONTEXT" preamble?
- Go back to: Worker prompt structure (needs explicit boundaries)

**This connects to:** Git Worktrees (isolation) → CC Mirror (native orchestration) → Full swarm capability

---

### Intermediate: Git Worktrees

Isolate workers by filesystem:

```bash
# Create worktrees for each worker
git worktree add ../auth-backend feature/auth-backend
git worktree add ../auth-frontend feature/auth-frontend
git worktree add ../auth-tests feature/auth-tests

# Run workers in parallel
(cd ../auth-backend && claude "Implement auth backend...") &
(cd ../auth-frontend && claude "Implement auth frontend...") &
wait

# Sequential tests after parallel work completes
cd ../auth-tests && claude "Write auth tests..."

# Merge back
git checkout main
git merge feature/auth-backend
git merge feature/auth-frontend
git merge feature/auth-tests
```

---

#### Checkpoint: After Git Worktrees Setup

**Where you are:** You have isolated filesystem environments for parallel agent work via git worktrees.
**What this enables:** True parallel execution without file conflicts. Each agent has complete isolation.

**Verify your state:**
```bash
# List all worktrees
git worktree list

# Check each worktree is on correct branch
cd ../auth-backend && git branch --show-current
cd ../auth-frontend && git branch --show-current

# Verify worktrees are independent
ls ../auth-backend/src && ls ../auth-frontend/src
```

**You should see:**
```
/Users/you/project           abc1234 [main]
/Users/you/auth-backend      def5678 [feature/auth-backend]   ← Worktree 1
/Users/you/auth-frontend     ghi9012 [feature/auth-frontend]  ← Worktree 2
/Users/you/auth-tests        jkl3456 [feature/auth-tests]     ← Worktree 3

feature/auth-backend    ← On correct branch
feature/auth-frontend   ← On correct branch

# Both directories have src/ but are independent copies
```

**Test parallel execution:**
```bash
# Launch parallel workers (background all except last)
(cd ../auth-backend && claude "Implement auth backend...") &
(cd ../auth-frontend && claude "Implement auth frontend...") &
wait  # Wait for both to complete

# After completion, merge
git checkout main
git merge feature/auth-backend
git merge feature/auth-frontend
```

**If you don't see this:**
- Check: Did branches exist before creating worktrees?
- Check: Are worktree paths outside main repo directory?
- Check: Any git lock errors? (`rm .git/index.lock`)
- Go back to: Create branches first

**This connects to:** CC Mirror (native orchestration) → Merge workflow → Team-scale parallel development

---

### Advanced: CC Mirror Native

Use Claude Code's native Task tool with orchestrator prompt:

```markdown
# .claude/orchestrator.md

You are an orchestrator. Your only tool is Task.

For this session, break work into:
1. Backend tasks (subagent_type: "coder")
2. Frontend tasks (subagent_type: "coder")
3. Test tasks (subagent_type: "coder")

Each worker prompt must include:
- WORKER CONTEXT header
- Explicit scope boundaries
- "Do NOT spawn sub-agents" rule
- Required verification steps
```

---

#### Checkpoint: After CC Mirror Setup

**Where you are:** You have native orchestration enabled via CC Mirror with Task tool access.
**What this enables:** Automatic task dependency management. Workers spawn and coordinate without manual intervention.

**Verify your state:**
```bash
# Check mclaude exists (or your custom variant name)
which mclaude

# Launch and test Task availability
mclaude
# Then type: "List all available task management tools"
```

**You should see:**
```
/usr/local/bin/mclaude       ← Variant installed

# Claude should respond mentioning:
- TaskCreate
- TaskList
- TaskGet
- TaskUpdate
```

**Test orchestration flow:**
```
You: "Create a task to implement login form with two subtasks:
      1. Backend API
      2. Frontend component"

# Claude should use TaskCreate and show dependency structure
```

**If you don't see this:**
- Check: Did `npx cc-mirror quick` complete successfully?
- Check: Does mclaude launch without errors?
- Check: Try `mclaude "TaskList"` to test tool availability
- Go back to: CC Mirror installation step

**This connects to:** Task dependency management → Worker spawning → Full orchestration capability (80% of use cases)

---

## When to Use Each Approach

### Use Generalist When:
- Task is simple (< 30 min equivalent human time)
- Single domain (backend only, frontend only)
- Exploratory/research work
- Quick iterations with human feedback
- Budget constraints (one agent is cheaper)
- Learning the codebase (context sharing is valuable)

### Use Swarm When:
- Multi-domain work (full-stack features)
- Task size would exhaust context window
- Parallelism provides significant time savings
- Quality requirements are high per domain
- Team is comfortable with orchestration overhead
- Overnight/AFK execution desired

### Hybrid Approach:
- Use generalist for planning and exploration
- Spawn swarm for execution once plan is clear
- Generalist synthesizes and reviews swarm output

---

## Anti-Patterns to Avoid

### 1. Spawning Workers for Simple Tasks
```
BAD:  Orchestrator spawns worker to add a comment
GOOD: Just do it directly (if generalist) or batch with other work
```

### 2. Deep Worker Nesting
```
BAD:  Orchestrator → Worker → SubWorker → SubSubWorker
GOOD: Orchestrator → Worker (flat structure, max 2 levels)
```

### 3. Orchestrator Doing Code
```
BAD:  Orchestrator: "Let me just quickly fix this bug..."
GOOD: Orchestrator: "Spawning bugfix worker for issue #123..."
```

### 4. Workers Spawning Workers
```
BAD:  Backend Worker spawns "DB Worker" and "API Worker"
GOOD: Backend Worker does all backend work, reports to orchestrator
```

### 5. No Verification Before Complete
```
BAD:  Worker: "I wrote the code, marking complete"
GOOD: Worker: "Tests pass: 12/12. Files: [...]. Marking complete."
```

---

## Monitoring the Swarm

### Claude HUD for Context Tracking
```
[Opus 4.5] Orchestrator    ████░░░░░░ 15% context
[Sonnet]   Backend Worker  ██████████ 95% context (completing)
[Sonnet]   Frontend Worker ████████░░ 70% context (in progress)
[Haiku]    Test Worker     ░░░░░░░░░░ waiting
```

### rpai for tmux Management
```
┌─────────────────────────────────────────────────────────────┐
│ rpai - Agent Monitor                                         │
├─────────────────────────────────────────────────────────────┤
│ 1. [IDLE]    orchestrator-main     Last: 2m ago             │
│ 2. [ACTIVE]  backend-worker-001    "Writing login endpoint" │
│ 3. [ACTIVE]  frontend-worker-001   "Creating LoginForm"     │
│ 4. [WAITING] test-worker-001       Blocked by: 2, 3         │
└─────────────────────────────────────────────────────────────┘
```

---

## Summary

The transformation from generalist to swarm is not about adding complexity for its own sake. It's about:

1. **Matching architecture to workload** - Multi-domain work benefits from multi-agent execution
2. **Respecting context limits** - Fresh, focused contexts outperform crowded, diluted ones
3. **Enabling parallelism** - Wall-clock time matters for human productivity
4. **Improving quality through specialization** - Domain experts beat generalists

Start simple. Use the generalist for learning and planning. Graduate to swarms when the workload demands it.

---

## References

- [CC Mirror Multi-Agent Pattern](/synthesis/taxonomy-architectures.md#21-hub-and-spoke-pattern-cc-mirror)
- [Orchestration Pattern Taxonomy](/synthesis/taxonomy-orchestration.md)
- [The Iron Law of Worker Separation](/synthesis/taxonomy-architectures.md#7-the-iron-law-of-worker-separation)
- [Domain Isolation Strategies](/synthesis/architecture-domain-isolation.md)

---

## Troubleshooting

### Common Issue: Workers Interfere With Each Other's Files

**Symptom:** Merge conflicts when combining worker output. One worker overwrites another's changes.

**Cause:** Workers are operating on overlapping file scopes without isolation.

**Fix:**
```bash
# Option 1: Git worktrees (filesystem isolation)
git worktree add ../backend-work feature/backend
git worktree add ../frontend-work feature/frontend

# Run workers in separate worktrees
(cd ../backend-work && claude "Backend worker task...") &
(cd ../frontend-work && claude "Frontend worker task...") &
wait

# Merge back
git merge feature/backend
git merge feature/frontend

# Option 2: Clear scope boundaries in prompts
# Each worker prompt must include explicit file scope:
# "SCOPE: Only modify files in /src/api/** - do NOT touch /src/components/**"
```

---

### Common Issue: Orchestrator Waits Too Long (No Parallelism)

**Symptom:** Workers run sequentially when they could run in parallel. Total time = sum of all workers.

**Cause:** Dependencies defined too conservatively, or `run_in_background: true` not used.

**Fix:**
```bash
# Check which workers have no dependencies
# These can run in parallel

# In orchestrator prompt, explicitly mark parallel-safe tasks:
# Task 1: Backend DB schema (no dependencies) → run_in_background: true
# Task 2: Frontend static components (no dependencies) → run_in_background: true
# Task 3: Integration tests (depends on 1+2) → wait for both, then run

# Manual parallel launch:
claude "Backend task..." &
claude "Frontend task..." &
wait  # Wait for both to complete
claude "Test task..."  # Sequential after parallel
```

---

### Common Issue: Worker Spawns Sub-Workers (Nesting)

**Symptom:** Backend worker spawns "DB worker" and "API worker". Deep hierarchy, hard to track.

**Cause:** Worker prompt didn't prohibit Task tool usage, or task was too large for single worker.

**Fix:**
```markdown
# Add to EVERY worker preamble:

## WORKER RULES (NON-NEGOTIABLE)
- Do NOT spawn sub-agents
- Do NOT call Task, TaskCreate, or TaskList
- Complete the ENTIRE task yourself
- If task is too large, report back to orchestrator

# If tasks genuinely need splitting, do it at orchestrator level:
# BAD:  Orchestrator → Backend Worker → DB Worker + API Worker
# GOOD: Orchestrator → DB Worker + API Worker (flat)
```

---

### Common Issue: Worker Reports Complete But Verification Fails

**Symptom:** Worker says "Done!" but tests fail when orchestrator checks.

**Cause:** Worker prompt didn't require verification before reporting, or verification command is wrong.

**Fix:**
```markdown
# Add to worker preamble:

## VERIFICATION REQUIREMENTS
Before reporting complete, you MUST:
1. Run: npm run typecheck
2. Run: npm run test:[domain]
3. Include test results in your report

If any verification fails:
- Fix the issue
- Re-run verification
- Only report complete when ALL pass

## REPORT FORMAT
Files modified:
- /path/to/file.ts (what changed)

Verification:
- typecheck: PASS (0 errors)
- tests: PASS (12/12)

# Orchestrator should verify claims independently
```

---

### Common Issue: Swarm Cost Is Too High

**Symptom:** Multiple workers + orchestrator = 3-5x the token cost of a generalist approach.

**Cause:** Swarm pattern has overhead. Not all tasks benefit from it.

**Fix:**
```
Cost-benefit analysis before swarm:

Generalist cost: ~50K tokens × 1 agent = 50K tokens
Swarm cost: ~30K tokens × 4 agents = 120K tokens

BUT:
Generalist time: 4 hours sequential
Swarm time: 90 minutes parallel

When to accept higher cost:
- Time savings justify cost (billing rate > token cost)
- Quality improvement justifies cost (fewer bugs to fix later)
- Parallelism is required (deadline)

When to use generalist:
- Task < 30 minutes
- Single domain (no parallelism benefit)
- Exploration/learning (context sharing valuable)
- Budget constrained
```

---

### Common Issue: Can't Monitor Swarm Progress

**Symptom:** Multiple workers running, no idea what's happening, anxiety increases.

**Cause:** No monitoring infrastructure set up.

**Fix:**
```bash
# Option 1: Log files per worker
(cd ../backend && claude "..." > backend.log 2>&1) &
(cd ../frontend && claude "..." > frontend.log 2>&1) &

# Monitor in separate terminals
tail -f backend.log
tail -f frontend.log

# Option 2: tmux session with panes
tmux new-session -d -s swarm
tmux split-window -h -t swarm
tmux send-keys -t swarm:0.0 'tail -f backend.log' Enter
tmux send-keys -t swarm:0.1 'tail -f frontend.log' Enter
tmux attach -t swarm

# Option 3: Simple status check
watch -n 5 'echo "Backend:"; tail -3 backend.log; echo "Frontend:"; tail -3 frontend.log'
```

---

### Common Issue: Merge Conflicts After Worker Completion

**Symptom:** Workers complete successfully in worktrees, but `git merge` fails with conflicts.

**Cause:** Workers modified the same file (boundary violation) or shared dependencies changed.

**Fix:**
```bash
# Before merging, check for conflicts
git merge --no-commit --no-ff feature/backend
git diff --name-only --diff-filter=U  # List conflicted files

# If conflicts exist:
# Option 1: Resolve manually
git checkout --conflict=merge <file>
# Edit file to resolve
git add <file>
git commit

# Option 2: Sequential merge with human review
git merge feature/backend
# Review changes
git merge feature/frontend
# Resolve any conflicts interactively

# Prevention: Ensure worker scopes don't overlap
# Backend: /src/api/**, /db/**
# Frontend: /src/components/**, /src/hooks/**
# Tests: /tests/**
# No overlap = no conflicts
```

---

### Terminal Output: Successful Swarm Run

Here's what a healthy swarm execution looks like:

```bash
$ ./run-swarm.sh

=== Swarm Orchestrator Starting ===
Task: User Authentication System
Workers: 3 (backend, frontend, test)

[00:00] Spawning Backend Worker (parallel)
        Scope: /src/api/auth/**, /db/migrations/**
        Background PID: 12345

[00:00] Spawning Frontend Worker (parallel)
        Scope: /src/components/auth/**, /src/context/**
        Background PID: 12346

[00:02] Backend Worker progress: Creating migrations...
[00:05] Frontend Worker progress: Building LoginForm...
[00:15] Backend Worker progress: Implementing endpoints...
[00:20] Frontend Worker progress: Creating AuthContext...

[00:35] Backend Worker COMPLETE
        Files: 8 modified
        Tests: 12/12 passed
        Branch: feature/auth-backend

[00:40] Frontend Worker COMPLETE
        Files: 6 modified
        Tests: 8/8 passed
        Branch: feature/auth-frontend

[00:41] Spawning Test Worker (sequential, depends on backend+frontend)
        Scope: /tests/integration/**, /tests/e2e/**

[00:55] Test Worker COMPLETE
        Files: 2 created
        Integration: 6/6 passed
        E2E: 4/4 passed

[00:56] Merging branches...
        feature/auth-backend → main: SUCCESS
        feature/auth-frontend → main: SUCCESS (no conflicts)
        feature/auth-tests → main: SUCCESS

=== Swarm Complete ===
Total time: 56 minutes
Files changed: 16
Tests passed: 30/30
Ready for human review.
```

---

## Tags

`#transformation` `#generalist-to-swarm` `#multi-agent` `#orchestration` `#specialization` `#parallelism` `#cc-mirror` `#worker-pattern` `#before-after` `#architecture-evolution`
