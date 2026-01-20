# Async Coordination Patterns for Multi-Agent Systems

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** 3 extraction documents synthesized (Agent Mail, Station/NATS, CC Mirror)
**Status:** Comprehensive reference for inter-agent coordination infrastructure

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [Agent Mail File Reservation System](#agent-mail-file-reservation-system)
3. [Station's Lattice Mesh Communication](#stations-lattice-mesh-communication)
4. [Email-like vs Message-Queue Patterns](#email-like-vs-message-queue-patterns)
5. [Pre-commit Guards for Conflict Prevention](#pre-commit-guards-for-conflict-prevention)
6. [Thread-based Conversation Audit Trails](#thread-based-conversation-audit-trails)
7. [Mental Models](#mental-models)
8. [Integration Patterns](#integration-patterns)
9. [Checkpoints](#checkpoints)
10. [Troubleshooting](#troubleshooting)
11. [Source Attribution](#source-attribution)

---

## You Are Here

```
+===========================================================================+
|                     ASYNC COORDINATION IN CONTEXT                         |
+===========================================================================+
|                                                                           |
|  You are exploring COORDINATION INFRASTRUCTURE -- the communication       |
|  fabric that enables multiple AI agents to work together without          |
|  stepping on each other's work.                                           |
|                                                                           |
|  +-----------------------------------------------------------------+     |
|  |            THE MULTI-AGENT COORDINATION PROBLEM                  |     |
|  +-----------------------------------------------------------------+     |
|  |                                                                  |     |
|  |   Without coordination:              With coordination:          |     |
|  |                                                                  |     |
|  |   Agent A edits routes.py   -->   Agent A reserves routes.py    |     |
|  |   Agent B edits routes.py   -->   Agent B sees reservation      |     |
|  |   Agent B overwrites A!     -->   Agent B waits or pivots       |     |
|  |   Chaos, lost work          -->   Clean parallel work           |     |
|  |                                                                  |     |
|  +-----------------------------------------------------------------+     |
|                                                                           |
|  COMPLEXITY LADDER POSITION:                                              |
|  +-----------------------------------------------------------------+     |
|  | Level 0-3: Single agent, no coordination needed                  |     |
|  | Level 4: CC Mirror native orchestration      [ ]                 |     |
|  | Level 5: Multi-instance coordination         [*] <-- YOU ARE     |     |
|  | Level 6: External tool integration           [*] <-- HERE        |     |
|  | Level 7: Factory-scale (Gas Town)            [*] <--             |     |
|  +-----------------------------------------------------------------+     |
|                                                                           |
+===========================================================================+
```

### **Whe**re This Fits

**Asy**nc **coo**rdination **pat**terns are **inf**rastructure--they sit **ben**eath the **orc**hestration **pat**terns you may **alr**eady know:

| **Pat**tern | **Wha**t It Does | **Coo**rdination **Nee**d |
|-------------|------------------|---------------------------|
| **Sin**gle **Cla**ude | One agent, one task | None |
| **Ral**ph Loop | Sequential iteration | File-based (progress.txt) |
| **CC Mir**ror | Hub-and-spoke orchestration | Task queue (TaskCreate/TaskUpdate) |
| **Gas Town** | Factory with specialized roles | **Age**nt Mail or NATS infrastructure |
| **Par**allel Swarms | Multiple simultaneous agents | **Cri**tical--file conflicts likely |

**Thi**s document covers the **com**munication and **coo**rdination layers that make Level 5-7 patterns **pos**sible.

### **Pre**requisites

**Bef**ore diving into **asy**nc coordination, you should **und**erstand:

1. **Mul**ti-Agent **Con**cepts** - Why multiple agents need to communicate
2. **Fil**e Conflicts** - How parallel agents can overwrite each other's work
3. **Tas**k Decomposition** - Breaking work into parallelizable chunks
4. **Mes**sage Patterns** - Basic pub/sub and request-reply concepts

### **Wha**t You'll Learn

By the end of this **doc**ument, you will **und**erstand:

1. How **fil**e reservations **pre**vent conflicts in **mul**ti-agent systems
2. The **dif**ference between **ema**il-like and **mes**sage-queue **coo**rdination
3. How **NAT**S-based **lat**tice meshes enable **dis**tributed agent teams
4. **Pre**-commit guards for **cat**ching conflicts **bef**ore they happen
5. **Aud**it trail patterns for **deb**ugging agent **com**munication

---

## Agent Mail File Reservation System

### **The** Core Problem

**Mul**tiple agents working on the **sam**e codebase **asy**nchronously can **ste**p on each other's work:

```
+===========================================================================+
|                    THE FILE CONFLICT PROBLEM                              |
+===========================================================================+
|                                                                           |
|  Time T0: Agent A starts editing src/api/routes.py                       |
|  Time T1: Agent B starts editing src/api/routes.py (unaware of A)        |
|  Time T2: Agent A commits their changes                                   |
|  Time T3: Agent B commits their changes                                   |
|           --> Agent B's commit OVERWRITES Agent A's work                  |
|           --> Both agents confused by unexpected diffs                    |
|           --> Human spends hours reconciling changes                      |
|                                                                           |
+===========================================================================+
```

### **TTL** Leases: Advisory Reservations

**Age**nt Mail implements **fil**e reservations as **TTL-based advisory leases**:

```python
# Reserve files before editing
file_reservation_paths(
    project_key="/absolute/repo/path",
    agent_name="GreenCastle",
    paths=["src/api/**/*.py", "tests/api/**/*.py"],  # Glob patterns work
    ttl_seconds=3600,           # 1 hour lease
    exclusive=True,             # No shared access during lease
    reason="br-123"             # Link to task/issue ID
)
```

**Key** Properties of **Res**ervations:

| **Pro**perty | **Beh**avior |
|--------------|--------------|
| **TTL-Based** | Automatically expires after `ttl_seconds` |
| **Advisory** | Not enforced by filesystem, agents choose to respect |
| **Glob Support** | Reserve `src/api/**/*.py` not just single files |
| **Exclusive/Shared** | Exclusive blocks all others; shared allows readers |
| **Traceable** | `reason` links to task IDs for audit |

### **Exc**lusive vs **Sha**red Access

```
+===========================================================================+
|                    EXCLUSIVE vs SHARED RESERVATIONS                       |
+===========================================================================+
|                                                                           |
|  EXCLUSIVE (exclusive=True):                                              |
|  +-------------------+     +-------------------+                          |
|  |   Agent A         |     |   Agent B         |                          |
|  |   reserves        |     |   tries to        |                          |
|  |   src/api/*.py    |     |   reserve         |                          |
|  |   EXCLUSIVE       |     |   src/api/*.py    |                          |
|  +-------------------+     +-------------------+                          |
|           |                         |                                     |
|           v                         v                                     |
|      GRANTED                 CONFLICT RETURNED                            |
|      (can edit)             (must wait or pivot)                          |
|                                                                           |
|  SHARED (exclusive=False):                                                |
|  +-------------------+     +-------------------+                          |
|  |   Agent A         |     |   Agent B         |                          |
|  |   reserves        |     |   reserves        |                          |
|  |   src/api/*.py    |     |   src/api/*.py    |                          |
|  |   SHARED          |     |   SHARED          |                          |
|  +-------------------+     +-------------------+                          |
|           |                         |                                     |
|           v                         v                                     |
|      GRANTED                   GRANTED                                    |
|      (read-only OK)           (read-only OK)                              |
|                                                                           |
+===========================================================================+
```

### **Res**ervation **Wor**kflow

```python
# Step 1: Register identity
register_agent(
    project_key="/my/project",
    agent_name="GreenCastle",       # Memorable adjective+noun
    program="Claude Code",
    model="Opus 4.5",
    task_description="Backend API development"
)

# Step 2: Reserve work surface
result = file_reservation_paths(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/api/**"],
    ttl_seconds=3600,
    exclusive=True,
    reason="bd-101"
)

if result.conflicts:
    # Another agent holds conflicting reservation
    print(f"Conflict with: {result.conflicts}")
    # Options:
    # 1. Wait for expiry
    # 2. Work on different files
    # 3. Request shared (non-exclusive) access

# Step 3: Do the work...
# (Agent edits files within reserved paths)

# Step 4: Release reservation
release_file_reservations(
    project_key="/my/project",
    agent_name="GreenCastle"
)
```

### **Res**ervation **Sta**tes

```
+===========================================================================+
|                    RESERVATION STATE MACHINE                              |
+===========================================================================+
|                                                                           |
|                    +-------------+                                        |
|                    |   ACTIVE    |                                        |
|                    | (held by    |                                        |
|                    |  agent)     |                                        |
|                    +------+------+                                        |
|                           |                                               |
|            +--------------+--------------+                                |
|            |                             |                                |
|            v                             v                                |
|    +---------------+           +------------------+                       |
|    |   RELEASED    |           |     EXPIRED      |                       |
|    | (voluntarily  |           | (TTL passed,     |                       |
|    |  ended early) |           |  auto-released)  |                       |
|    +---------------+           +------------------+                       |
|                                                                           |
|  Note: EXPIRED happens automatically - no deadlocks possible              |
|                                                                           |
+===========================================================================+
```

### **Conf**iguration **Opt**ions

| **Var**iable | **Def**ault | **Pur**pose |
|--------------|-------------|-------------|
| `AGENT_MAIL_GUARD_MODE` | `block` | `warn` or `block` for conflicts |
| `ttl_seconds` | (required) | How long reservation lasts |
| `exclusive` | `True` | Whether to block all other access |

### **Val**id Agent Names

**Age**nt Mail **enf**orces memorable **adj**ective+noun **nam**es:

**Val**id:
- `GreenCastle`
- `RedCat`
- `BlueLake`
- `SwiftFalcon`

**Inv**alid (rejected):
- `steve` (Unix username)
- `claude` (program name)
- `opus-4-1` (model identifier)
- `MyAgent123` (has numbers)

---

## Station's Lattice Mesh Communication

### **The** Distributed **Cha**llenge

**Age**nt Mail **sol**ves coordination for **age**nts on one **mac**hine. But what about **dis**tributed agent teams **acr**oss multiple **mac**hines?

**Sta**tion introduces **Lat**tice--a **NAT**S-based mesh **net**work for **dis**tributed agent **orc**hestration.

### **NAT**S Foundation

**NAT**S isn't just "another **mes**sage queue." It's **pur**pose-built for:

1. **Sub**-millisecond **lat**ency at scale
2. **Jet**Stream **per**sistence with **exa**ctly-once **sem**antics
3. **Bui**lt-in **clu**stering for high **ava**ilability
4. **Key**Value **sto**res for **dis**tributed state
5. **Emb**edded server **opt**ion for simple **dep**loyments

### **Lat**tice Architecture

```
+===========================================================================+
|                        LATTICE MESH ARCHITECTURE                          |
+===========================================================================+
|                                                                           |
|  +------------------------------------------------------------------+    |
|  |                        LATTICE MESH                               |    |
|  |  +---------------+    +---------------+    +---------------+      |    |
|  |  |  Station A    |    |  Station B    |    |  Station C    |      |    |
|  |  |  (Security)   |<-->|  (Orchestr.)  |<-->|   (SRE)       |      |    |
|  |  |               |    |               |    |               |      |    |
|  |  | VulnScanner   |    | Coordinator   |    | K8sHealth     |      |    |
|  |  | CVELookup     |    |               |    | LogAnalyzer   |      |    |
|  |  | NetworkAudit  |    |               |    | Deployer      |      |    |
|  |  +---------------+    +---------------+    +---------------+      |    |
|  |         |                   |                   |                 |    |
|  |         +-------------------+-------------------+                 |    |
|  |                             |                                     |    |
|  |                    +--------v--------+                            |    |
|  |                    |   NATS Server   |                            |    |
|  |                    |   + JetStream   |                            |    |
|  |                    +-----------------+                            |    |
|  +------------------------------------------------------------------+    |
|                                                                           |
+===========================================================================+
```

### **Thr**ee Operating Modes

| **Mod**e | **Com**mand | **Pur**pose |
|----------|-------------|-------------|
| **Sta**ndalone | `stn serve` | Default single-station, no mesh |
| **Orc**hestrator | `stn serve --orchestration` | Runs embedded NATS (port 4222) |
| **Mem**ber | `stn serve --lattice <url>` | Joins orchestrator mesh |

### **Mes**sage Flow **Pat**terns

```
+===========================================================================+
|                    NATS MESSAGE FLOW PATTERNS                             |
+===========================================================================+
|                                                                           |
|  REQUEST-REPLY (Agent Invocation):                                        |
|  +-------------+                              +-------------+             |
|  | Orchestrator|  ------ Request ---------->  |   Member    |             |
|  | Station     |  <----- Response ----------  |   Station   |             |
|  +-------------+                              +-------------+             |
|                                                                           |
|  Subject: lattice.station.{stationID}.agent.invoke                        |
|  Timeout: 5 minutes for agents, 10 minutes for workflows                  |
|                                                                           |
|  -------------------------------------------------------------------      |
|                                                                           |
|  PUB/SUB (Presence Heartbeats):                                           |
|  +-------------+                                                          |
|  | Any Station |  ------ Heartbeat ------>  (All Subscribers)             |
|  +-------------+                                                          |
|                                                                           |
|  Subject: lattice.presence.heartbeat                                      |
|  Interval: Every 10 seconds                                               |
|                                                                           |
|  -------------------------------------------------------------------      |
|                                                                           |
|  STREAMING (Work Progress):                                               |
|  +-------------+                              +-------------+             |
|  |   Worker    |  ------ Progress 10% ---->  | Dispatcher  |             |
|  |   Station   |  ------ Progress 50% ---->  |             |             |
|  |             |  ------ Progress 100% --->  |             |             |
|  +-------------+                              +-------------+             |
|                                                                           |
|  Subject: lattice.work.{workID}.response                                  |
|                                                                           |
+===========================================================================+
```

### **NAT**S Subject **Hie**rarchy

```
lattice.
|-- presence.
|   |-- announce        # Station startup with full manifest
|   |-- heartbeat       # Periodic health signal (10 sec)
|   +-- goodbye         # Graceful shutdown notification
|
|-- station.{id}.
|   +-- agent.invoke    # Agent invocation (request-reply)
|
|-- work.
|   |-- {stationID}.assign  # Work assignment
|   +-- {workID}.response   # Work responses/progress
|
+-- events.
    |-- StationJoined
    |-- StationLeft
    |-- AgentRegistered
    |-- WorkAssigned
    +-- ...
```

### **Wor**k Distribution **Pro**tocol

```go
// Work assignment structure
type WorkAssignment struct {
    WorkID        string                 // Unique work identifier
    TargetStation string                 // Which station receives work
    TargetAgent   string                 // Which agent on that station
    Task          string                 // Task description
    Context       map[string]interface{} // Additional context
    Timeout       time.Duration          // How long to wait
    Priority      int                    // Scheduling priority
    TraceID       string                 // Distributed tracing
}

// Work response structure
type WorkResponse struct {
    Status        string  // "accepted", "progress", "completed", "failed"
    Result        string  // Final result (on completion)
    Progress      int     // Percentage complete
    Message       string  // Status message
    Escalation    string  // If escalating to human
    DurationMs    int64   // Execution time
    ToolCallCount int     // Number of tool calls made
}
```

### **Jet**Stream Event **Sou**rcing

**All** events are **per**sisted to **Jet**Stream for **aud**it and **rep**lay:

```go
// Stream configuration
type StreamConfig struct {
    StreamName string
    Subjects   []string
    MaxAge     time.Duration  // Default: 7 days
    MaxBytes   int64          // Default: 1GB
    DenyDelete bool           // true - immutable audit trail
    DenyPurge  bool           // true - no stream purging
    Storage    StorageType    // File-based persistence
}
```

**Aud**it Trail **Gua**rantees:
- `DenyDelete: true` - No message deletion
- `DenyPurge: true` - No stream purging
- Append-only semantics

---

## Email-like vs Message-Queue Patterns

### **The** Two Paradigms

**Mul**ti-agent **com**munication typically **fol**lows one of two **par**adigms:

```
+===========================================================================+
|                    EMAIL-LIKE vs MESSAGE-QUEUE PATTERNS                   |
+===========================================================================+
|                                                                           |
|  EMAIL-LIKE (Agent Mail):              MESSAGE-QUEUE (NATS/Station):      |
|  ========================              =============================       |
|                                                                           |
|  +--------+     +--------+             +--------+     +--------+          |
|  | Agent  |     | Agent  |             | Agent  |     |  NATS  |          |
|  |   A    |     |   B    |             |   A    |     | Server |          |
|  +---+----+     +---+----+             +---+----+     +---+----+          |
|      |             |                       |             |                |
|      | send_message|                       | publish     |                |
|      +------------>|                       +------------>|                |
|      |             |                       |             |                |
|      |    (B polls |                       |             | notify         |
|      |     inbox)  |                       |             | (push)         |
|      |             |                       |             v                |
|      |             |                   +---+----+     +--------+          |
|      |             |                   | Agent  |<----| Agent  |          |
|      |             |                   |   A    |     |   B    |          |
|      |             |                   +--------+     +--------+          |
|                                                                           |
|  - Polling-based (async)               - Push-based (near real-time)     |
|  - Messages persist in inbox           - Messages persist in stream      |
|  - Threaded conversations              - Subject-based routing           |
|  - Human-readable (markdown)           - Structured payloads (JSON/Go)   |
|  - Single-machine focus                - Distributed by design           |
|                                                                           |
+===========================================================================+
```

### **Com**parison Matrix

| **Asp**ect | **Ema**il-Like (Agent Mail) | **Mes**sage-Queue (NATS) |
|------------|----------------------------|--------------------------|
| **Del**ivery | Polling inbox | Push via subscription |
| **Lat**ency | Higher (poll interval) | Sub-millisecond |
| **Per**sistence | SQLite + Git markdown | JetStream streams |
| **Sca**ling | Single machine | Multi-machine mesh |
| **Thr**eading | Built-in thread_id | Subject hierarchy |
| **Hum**an Readability | High (markdown) | Lower (structured) |
| **Set**up Complexity | Low (Python) | Medium (Go + NATS) |
| **Use** Case | Advisory coordination | Production orchestration |

### **Whe**n to Use **Eac**h

**Use** Agent Mail **Whe**n:
- Agents are on the **sam**e machine
- Human **ove**rsight via web UI is **imp**ortant
- **Aud**it trails need to be **hum**an-readable
- You want **ema**il-familiar communication **met**aphor
- **Adv**isory coordination is **suf**ficient

**Use** NATS/Station **Whe**n:
- Agents are **dis**tributed across **mac**hines
- Sub-millisecond **lat**ency matters
- You need **gua**ranteed delivery **sem**antics
- **Pro**duction-grade **rel**iability is **req**uired
- You're building **inf**rastructure-scale systems

### **Hyb**rid Approach

**Bot**h patterns can be **com**bined:

```
+===========================================================================+
|                    HYBRID COORDINATION ARCHITECTURE                       |
+===========================================================================+
|                                                                           |
|                      +-------------------+                                |
|                      |   NATS Lattice    |                                |
|                      | (cross-machine    |                                |
|                      |  coordination)    |                                |
|                      +--------+----------+                                |
|                               |                                           |
|            +------------------+------------------+                        |
|            |                  |                  |                        |
|            v                  v                  v                        |
|    +---------------+  +---------------+  +---------------+               |
|    |   Station A   |  |   Station B   |  |   Station C   |               |
|    | +----------+  |  | +----------+  |  | +----------+  |               |
|    | |Agent Mail|  |  | |Agent Mail|  |  | |Agent Mail|  |               |
|    | |(local    |  |  | |(local    |  |  | |(local    |  |               |
|    | | agents)  |  |  | | agents)  |  |  | | agents)  |  |               |
|    | +----------+  |  | +----------+  |  | +----------+  |               |
|    +---------------+  +---------------+  +---------------+               |
|                                                                           |
|  NATS handles inter-station communication                                 |
|  Agent Mail handles intra-station coordination                            |
|                                                                           |
+===========================================================================+
```

---

## Pre-commit Guards for Conflict Prevention

### **The** Last Line of **Def**ense

**Res**ervations are **adv**isory--agents **cho**ose to respect them. **Pre**-commit guards add **enf**orcement at the **Git** layer.

### **Ins**tallation

```bash
# Install pre-commit guard for Agent Mail
mcp-agent-mail guard install <project_key> <repo_path>
```

### **How** It Works

```
+===========================================================================+
|                    PRE-COMMIT GUARD WORKFLOW                              |
+===========================================================================+
|                                                                           |
|  Agent attempts:  git commit -m "Feature X"                               |
|                              |                                            |
|                              v                                            |
|                  +------------------------+                               |
|                  |    Pre-commit Hook     |                               |
|                  |    Scans staged files  |                               |
|                  +------------------------+                               |
|                              |                                            |
|              +---------------+---------------+                            |
|              |                               |                            |
|              v                               v                            |
|     No active exclusive             Active exclusive                      |
|     reservation by                  reservation held                      |
|     another agent                   by another agent                      |
|              |                               |                            |
|              v                               v                            |
|         COMMIT PROCEEDS              COMMIT BLOCKED                       |
|                                      "FILE_RESERVATION_CONFLICT"          |
|                                      "File X reserved by OtherAgent"      |
|                                                                           |
+===========================================================================+
```

### **Con**figuration

| **Beh**avior | **Con**figuration | **Res**ult |
|--------------|-------------------|------------|
| **Blo**ck | `AGENT_MAIL_GUARD_MODE=block` | Commit fails with error |
| **War**n | `AGENT_MAIL_GUARD_MODE=warn` | Warning printed, commit proceeds |

### **Byp**ass (Use Sparingly)

```bash
# Emergency bypass (strongly discouraged)
git commit --no-verify -m "Emergency fix"
```

### **Exa**mple Output

```bash
$ git commit -m "Add auth routes"
BLOCKED: File 'src/api/routes.py' reserved by OtherAgent
Reservation expires in: 45 minutes
Options:
  1. Wait for reservation to expire
  2. Contact OtherAgent to coordinate
  3. Use --no-verify to bypass (not recommended)
```

---

## Thread-based Conversation Audit Trails

### **Why** Audit Trails **Mat**ter

**Mul**ti-agent systems can be **dif**ficult to debug. When **som**ething goes wrong:

- **Whi**ch agent made **whi**ch decision?
- **Wha**t information did they **hav**e?
- **How** did they **com**municate?
- **Whe**re did the **bre**akdown occur?

### **Thr**ead IDs as **Aud**it Keys

**Age**nt Mail uses `thread_id` to **gro**up related **mes**sages:

```python
# All messages about feature br-123 share thread_id
send_message(
    project_key="/my/project",
    from_agent="GreenCastle",
    to_agents=["RedCat", "BlueLake"],
    thread_id="br-123",                    # Links to task/issue
    subject="[br-123] Start: Auth API",
    body="Implementation plan and status...",
)

# Later response in same thread
send_message(
    thread_id="br-123",                    # Same thread
    from_agent="RedCat",
    to_agents=["GreenCastle"],
    subject="RE: [br-123] Start: Auth API",
    body="Frontend ready for integration..."
)
```

### **Aud**it Trail **Sto**rage

**Age**nt Mail stores **mes**sages in **two** places for **dif**ferent access **pat**terns:

```
+===========================================================================+
|                    DUAL-PERSISTENCE ARCHITECTURE                          |
+===========================================================================+
|                                                                           |
|                       +------------------+                                |
|                       |   Agent/Client   |                                |
|                       +--------+---------+                                |
|                                |                                          |
|                       HTTP (FastMCP 2.0)                                  |
|                                |                                          |
|                       +--------v---------+                                |
|                       |   MCP Server     |                                |
|                       +----+--------+----+                                |
|                            |        |                                     |
|              +-------------+        +-------------+                       |
|              |                                    |                       |
|       +------v------+                    +--------v-------+               |
|       |   SQLite    |                    |   Git Repo     |               |
|       |   + FTS5    |                    |   (.md files)  |               |
|       +-------------+                    +----------------+               |
|                                                                           |
|       For: Fast queries,                 For: Human audit,                |
|       search, indexing                   version history,                 |
|                                          portability                      |
|                                                                           |
+===========================================================================+
```

### **Mes**sage Format (Git Storage)

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

### **Sta**tion Event **Sou**rcing

**Sta**tion uses **Jet**Stream for **aud**it trails:

```go
// Event types for full audit trail
EventTypeStationJoined    = "station.lattice.station.joined"
EventTypeStationLeft      = "station.lattice.station.left"
EventTypeAgentRegistered  = "station.lattice.agent.registered"
EventTypeAgentInvoked     = "station.lattice.agent.invoked"
EventTypeWorkAssigned     = "station.lattice.work.assigned"
EventTypeWorkProgress     = "station.lattice.work.progress"
EventTypeWorkCompleted    = "station.lattice.work.completed"
EventTypeWorkFailed       = "station.lattice.work.failed"
```

### **Sea**rching Audit **Tra**ils

**Age**nt Mail provides **FTS**5 full-text **sea**rch:

```python
# Search across all messages
search_messages(
    project_key="/my/project",
    query="authentication error",
    limit=50
)

# Advanced syntax
search_messages(query="subject:auth body:\"token expired\" from:GreenCastle")
```

---

## Mental Models

### **Men**tal Model 1: **The** Village Post **Off**ice

```
+===========================================================================+
|                    THE VILLAGE POST OFFICE MODEL                          |
+===========================================================================+
|                                                                           |
|  Imagine a village where:                                                 |
|                                                                           |
|  +------------------------------------------------------------------+    |
|  |                        THE VILLAGE                                |    |
|  +------------------------------------------------------------------+    |
|  |                                                                   |    |
|  |  +----------+  +----------+  +----------+  +----------+           |    |
|  |  |Blacksmith|  |  Baker   |  | Weaver   |  | Scribe   |           |    |
|  |  | (Agent)  |  | (Agent)  |  | (Agent)  |  | (Agent)  |           |    |
|  |  +----+-----+  +----+-----+  +----+-----+  +----+-----+           |    |
|  |       |             |             |             |                 |    |
|  |       +-------------+------+------+-------------+                 |    |
|  |                            |                                      |    |
|  |                     +------v------+                               |    |
|  |                     | POST OFFICE |                               |    |
|  |                     | (Server)    |                               |    |
|  |                     +-------------+                               |    |
|  |                            |                                      |    |
|  |                     +------v------+                               |    |
|  |                     | LAND OFFICE |                               |    |
|  |                     | (File       |                               |    |
|  |                     |  Reserv.)   |                               |    |
|  |                     +-------------+                               |    |
|  |                                                                   |    |
|  +------------------------------------------------------------------+    |
|                                                                           |
|  - Each craftsperson (agent) has a mailbox                               |
|  - Post office (server) routes messages                                  |
|  - Bulletin board (web UI) shows public notices                          |
|  - Land registry (file reservations) tracks who's working where          |
|                                                                           |
+===========================================================================+
```

**Key** Insight: Agents don't need to **kno**w where other agents are. They just:
1. Check their mailbox
2. Send letters to names
3. Register their work area

---

### **Men**tal Model 2: **Adv**isory Locks vs **Enf**orced Locks

```
+===========================================================================+
|                    ADVISORY vs ENFORCED LOCKS                             |
+===========================================================================+
|                                                                           |
|  TRADITIONAL LOCKS:              AGENT MAIL RESERVATIONS:                 |
|  ==================              =======================                   |
|                                                                           |
|  +----------------+              +----------------+                       |
|  |                |              |                |                       |
|  |   LOCKED       |              | "I'M WORKING  |                       |
|  |   KEEP OUT     |              |  HERE"        |                       |
|  |   [door icon]  |              | [sign icon]   |                       |
|  |                |              |                |                       |
|  +----------------+              +----------------+                       |
|                                                                           |
|  - Can't proceed if locked       - Can proceed (with warning)            |
|  - System enforces               - Agent chooses to respect              |
|  - All-or-nothing                - Shared/exclusive modes                |
|  - Deadlock possible             - TTL prevents deadlock                 |
|                                                                           |
|  Think: Hotel room lock          Think: "Do Not Disturb" sign            |
|                                                                           |
+===========================================================================+
```

**Key** Insight: File reservations are **sig**nals, not barriers. Well-behaved agents **res**pect the signals.

---

### **Men**tal Model 3: **The** Factory Floor

```
+===========================================================================+
|                    THE FACTORY FLOOR MODEL                                |
+===========================================================================+
|                                                                           |
|  Station operates like a distributed manufacturing floor:                 |
|                                                                           |
|  +------------------------------------------------------------------+    |
|  |                        FACTORY FLOOR                              |    |
|  +------------------------------------------------------------------+    |
|  |                                                                   |    |
|  |  +----------------+                                               |    |
|  |  | FACTORY MANAGER|  = Station Orchestrator                       |    |
|  |  | (assigns work) |    (work assignment)                          |    |
|  |  +-------+--------+                                               |    |
|  |          |                                                        |    |
|  |          v                                                        |    |
|  |  +-------+--------+--------+--------+                             |    |
|  |  |       |        |        |        |                             |    |
|  |  v       v        v        v        v                             |    |
|  |  CNC   Welder  Painter  Assembly  QA                              |    |
|  |  Machine                          Station                         |    |
|  |                                                                   |    |
|  |  = Station Members (specialized workstations)                     |    |
|  |  = Agents (individual machines/tools)                             |    |
|  |                                                                   |    |
|  +------------------------------------------------------------------+    |
|                                                                           |
|  - NATS = The intercom/pneumatic tube system                             |
|  - Work = Jobs moving through the floor                                  |
|  - Events = Production audit trail                                       |
|                                                                           |
+===========================================================================+
```

---

### **Men**tal Model 4: **Asy**nc = Polling, **Not** Push

```
+===========================================================================+
|                    ASYNC POLLING MODEL                                    |
+===========================================================================+
|                                                                           |
|  REAL-TIME CHAT:                 AGENT MAIL (ASYNC):                     |
|  ===============                 ==================                       |
|                                                                           |
|  Agent A: "Hey B!"               Agent A sends message                    |
|  Agent B: "What?"                (message sits in inbox)                  |
|  Agent A: "Look at this!"        Agent B working on task...              |
|  Agent B: "OK, looking..."       Agent B checks inbox between steps      |
|                                  "Oh, message from A"                     |
|                                  Agent B responds                         |
|                                                                           |
|  - Instant notification          - Poll between work steps               |
|  - Requires connection           - Works disconnected                    |
|  - Interruptive                  - Non-interruptive                      |
|  - Synchronous flow              - Asynchronous flow                     |
|                                                                           |
|  Think: Slack DMs                Think: Email                            |
|                                                                           |
+===========================================================================+
```

**Key** Insight: Agents check mail **whe**n convenient, like checking email **bet**ween meetings.

---

## Integration Patterns

### **Int**egration with **Gas** Town

**Gas** Town's agent **fac**tory pattern **nat**urally maps to **Age**nt Mail:

```
+===========================================================================+
|                    GAS TOWN + AGENT MAIL INTEGRATION                      |
+===========================================================================+
|                                                                           |
|                      +------------------+                                 |
|                      |      Mayor       |  <-- Receives status updates    |
|                      +--------+---------+      from all roles             |
|                               |                                           |
|                          Agent Mail                                       |
|                               |                                           |
|       +----------+------------+-------------+-----------+                 |
|       |          |            |             |           |                 |
|       v          v            v             v           v                 |
|   +-------+  +-------+   +--------+   +--------+   +-------+             |
|   |Deacon |  | Dogs  |   |Refinery|   |Polecat |   | Crew  |             |
|   +-------+  +-------+   +--------+   +--------+   +-------+             |
|   Monitoring  Quality    Task         Persistent  Ephemeral              |
|   alerts via  gate       decomp       workers,    workers,               |
|   high-pri    results    announced    long TTL    short TTL              |
|   mail        as         via          reservations reservations          |
|               threads    threads                                          |
|                                                                           |
+===========================================================================+
```

**Rol**e-to-Mailbox Mapping:

| **Gas** Town Role | **Age**nt Mail Pattern |
|-------------------|------------------------|
| **May**or | Receives status updates from all roles |
| **Dea**con | Monitoring alerts via high-priority mail |
| **Dog**s | Quality gate results as threaded reports |
| **Ref**inery | Task decomposition announced via threads |
| **Pol**ecat | Persistent workers with long-lived reservations |
| **Cre**w | Ephemeral agents, short TTL reservations |
| **Ove**rseer (You) | Human inbox via web UI |

---

### **Int**egration with **Ral**ph

**Ral**ph instances have no **sha**red memory between **ite**rations. Agent Mail **pro**vides external **sta**te:

```python
# In PROMPT.md:
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

---

### **Int**egration with **CC** Mirror

**CC** Mirror's hub-and-spoke **arc**hitecture can use **Age**nt Mail for **cro**ss-model **com**munication:

```
+===========================================================================+
|                    CC MIRROR + AGENT MAIL INTEGRATION                     |
+===========================================================================+
|                                                                           |
|                  +-------------------------+                              |
|                  |     CC-Mirror Hub       |  <-- Task decomposition      |
|                  +-------------------------+                              |
|                             |                                             |
|                      Task Distribution                                    |
|                             |                                             |
|              +--------------+--------------+                              |
|              |              |              |                              |
|              v              v              v                              |
|         Worker 1       Worker 2       Worker 3                            |
|         (Opus)         (Sonnet)       (Haiku)                             |
|              |              |              |                              |
|              +------+-------+-------+------+                              |
|                     |                                                     |
|                Agent Mail                                                 |
|                     |                                                     |
|              Cross-Worker                                                 |
|              Coordination                                                 |
|                                                                           |
+===========================================================================+
```

**Exa**mple: Opus **del**egates to Sonnet via **mai**l:

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
```

---

### **Com**bination Matrix

| **Asy**nc Pattern + | **Use** Case | **Com**plexity | **Val**ue |
|---------------------|--------------|----------------|-----------|
| **Gas** Town | Role-based messaging across 8 agent types | Medium | High |
| **Ral**ph | Async Ralph with inter-iteration continuity | Medium | Medium |
| **CC** Mirror | Cross-model delegation and reporting | Medium | High |
| **Bea**ds | Thread IDs = Beads issue IDs for audit | Low | Very High |
| **Pre**-commit hooks | Block conflicting commits | Low | High |
| **Sta**ndalone | Multi-agent without framework | Low | Medium |

---

## Checkpoints

### **Che**ckpoint 1: **Age**nt Mail **Ser**ver Running

```bash
# Start server
am
# Expected: Server starting on http://127.0.0.1:8765

# Verify health
curl http://127.0.0.1:8765/health
# Expected: {"status": "ok"}
```

**You** should see:
- Server startup message
- Health endpoint returns `ok`

**If** you don't see this:
- Check: Is port 8765 available?
- Check: Did the install script complete?
- Try: `cd ~/projects/mcp_agent_mail && ./scripts/run_server_with_token.sh`

---

### **Che**ckpoint 2: **Age**nt Registered

```python
# Registration
register_agent(
    project_key="/test",
    agent_name="TestAgent",
    program="test",
    model="test"
)
# Expected: {"success": true, "agent_name": "TestAgent"}

# Verify in web UI
# http://127.0.0.1:8765/mail/agents
```

**You** should see:
- Success response with agent name
- Agent appears in web UI

**If** you don't see this:
- Check: Is server running?
- Check: Did you use valid adjective+noun name?
- Try: Different agent name (not `steve`, `claude`, etc.)

---

### **Che**ckpoint 3: **Mes**sages Flowing

```python
# Send test message
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
# Expected: [{"id": "msg_...", "subject": "Test message", ...}]
```

**You** should see:
- Message sent successfully
- Message appears in inbox

---

### **Che**ckpoint 4: **Fil**e Reservations **Wor**king

```python
# Reserve a file
file_reservation_paths(
    project_key="/test",
    agent_name="TestAgent",
    paths=["test.py"],
    ttl_seconds=60,
    exclusive=True
)
# Expected: {"success": true, "conflicts": []}

# View in web UI
# http://127.0.0.1:8765/mail/reservations
```

**You** should see:
- Reservation granted
- No conflicts
- Reservation visible in web UI

---

### **Che**ckpoint 5: **Pre**-Commit Guard **Act**ive

```bash
# Install guard
mcp-agent-mail guard install test /path/to/repo

# Create another agent's reservation (in different terminal)
# Then try to commit that file
git commit -m "test"
# Expected: BLOCKED: File test.py reserved by OtherAgent
```

**You** should see:
- Commit blocked with clear message
- Reservation holder identified

---

### **Che**ckpoint 6: **Sta**tion Lattice **Con**nected

```bash
# Start orchestrator
stn serve --orchestration

# In another terminal, check status
stn lattice --nats nats://localhost:4222 status
# Expected: Connection successful, station listed

# Check agents
stn lattice --nats nats://localhost:4222 agents
# Expected: List of registered agents
```

**You** should see:
- Connection successful
- Station listed in mesh
- Agents discoverable

---

## Troubleshooting

### **Age**nt Mail **Iss**ues

| **Sym**ptom | **Cau**se | **Sol**ution |
|-------------|-----------|--------------|
| `from_agent not registered` | Sending message before registration | Always `register_agent()` first |
| `FILE_RESERVATION_CONFLICT` | Another agent holds exclusive reservation | Wait for TTL, use `exclusive=False`, or contact holding agent |
| `Authentication failed` | Bearer token mismatch | Check `HTTP_BEARER_TOKEN` in `.env`, or enable `HTTP_ALLOW_LOCALHOST_UNAUTHENTICATED=true` |
| `Database is locked` | SQLite concurrent write contention | Run `mcp-agent-mail doctor repair` |
| Messages not in search | FTS5 index desynchronized | `mcp-agent-mail doctor repair --force-fts-rebuild` |
| Agent name rejected | Doesn't match adjective+noun | Use names like `GreenCastle`, `RedCat` |

### **Sta**tion/NATS **Iss**ues

| **Sym**ptom | **Cau**se | **Sol**ution |
|-------------|-----------|--------------|
| `connection refused` | NATS not running | Verify orchestrator: `stn status` |
| `authentication failed` | Credentials mismatch | Check orchestrator config, verify credential file permissions |
| Agent not in mesh | Presence not publishing | Check `stn lattice status`, verify heartbeat |
| Remote invocation timeout | Target station offline or slow | Increase `timeout_sec`, check Jaeger traces |
| `stream not found` | JetStream not initialized | Run `stn up` with orchestrator flag |
| High latency | Network issues or agent execution time | Enable locality preference, check traces |

### **Dia**gnostic Commands

```bash
# Agent Mail diagnostics
mcp-agent-mail doctor check
mcp-agent-mail mail diagnostics
mcp-agent-mail mail routing
mcp-agent-mail projects maintenance

# Station diagnostics
stn status
stn lattice --nats nats://localhost:4222 status
stn lattice --nats nats://localhost:4222 agents

# Check NATS connectivity
nc -zv localhost 4222
```

### **Eme**rgency Recovery

```bash
# Agent Mail: Clear stuck reservations
mcp-agent-mail file_reservations inspect /my/project
# Manually wait for TTL expiry or restart server

# Station: Check stuck work
stn lattice --nats nats://localhost:4222 work list --stuck

# Full reset (loses state)
mcp-agent-mail clear-and-reset-everything --force
```

---

## Source Attribution

### **Pri**mary Sources

| **Sou**rce | **URL** | **Acc**essed |
|------------|---------|--------------|
| MCP Agent Mail Repository | [github.com/Dicklesworthstone/mcp_agent_mail](https://github.com/Dicklesworthstone/mcp_agent_mail) | 2026-01-19 |
| Station Repository | [github.com/cloudshipai/station](https://github.com/cloudshipai/station) | 2026-01-19 |
| CC Mirror Repository | [github.com/numman-ali/cc-mirror](https://github.com/numman-ali/cc-mirror) | 2026-01-18 |

### **Key** Authors

| **Aut**hor | **Con**tribution |
|------------|------------------|
| **Jef**frey Emanuel (@Dicklesworthstone) | Agent Mail creator, "Agentic Coding Tooling Flywheel" |
| **Clo**udShip AI | Station platform, NATS-based orchestration |
| **Num**man Ali (@nummanali) | CC Mirror, native orchestration discovery |

### **Rel**ated Extractions

| **Fil**e | **Rel**evance |
|----------|---------------|
| `extractions/techniques/009-mcp-agent-mail.md` | Complete Agent Mail reference |
| `extractions/orchestration/037-station-nats.md` | Station/NATS deep dive |
| `extractions/orchestration/024-cc-mirror-complete.md` | CC Mirror orchestration |
| `extractions/orchestration/009-gas-town-steve-yegge.md` | Gas Town integration patterns |
| `synthesis/mastery-ralph-complete.md` | Ralph loop patterns |

### **Rel**ated Synthesis **Doc**uments

| **Fil**e | **Top**ic |
|----------|-----------|
| `synthesis/architecture-complexity-ladder.md` | Complexity levels |
| `synthesis/mastery-multi-agent.md` | Multi-agent mastery |
| `synthesis/compare-orchestration.md` | Orchestration comparison |
| `synthesis/taxonomy-orchestration.md` | Orchestration taxonomy |

---

## Quick Reference

### **Age**nt Mail **Ess**entials

```python
# Register
register_agent(project_key, agent_name, program, model)

# Reserve
file_reservation_paths(project_key, agent_name, paths, ttl_seconds, exclusive)

# Message
send_message(project_key, from_agent, to_agents, thread_id, subject, body)

# Check inbox
fetch_inbox(project_key, agent_name, limit)

# Release
release_file_reservations(project_key, agent_name)
```

### **Sta**tion **Ess**entials

```bash
# Install
curl -fsSL https://raw.githubusercontent.com/cloudshipai/station/main/install.sh | bash

# Initialize
stn init --provider anthropic

# Start orchestrator
stn serve --orchestration

# Join mesh
stn serve --lattice nats://orchestrator:4222

# Check status
stn lattice --nats nats://localhost:4222 status
```

### **Key** Decisions

```
Need file conflict prevention?
--> Agent Mail file reservations

Need cross-machine coordination?
--> Station NATS mesh

Need human-readable audit trails?
--> Agent Mail (Git-backed markdown)

Need sub-millisecond latency?
--> Station (NATS native)

Need both?
--> Hybrid: NATS between stations, Agent Mail within
```

---

## Advanced Configuration Examples

### **Ful**l Agent Mail **Con**figuration

```yaml
# Environment variables for Agent Mail
STORAGE_ROOT: ~/.mcp_agent_mail_git_mailbox_repo
HTTP_PORT: 8765
HTTP_BEARER_TOKEN: your-secret-token-here
HTTP_ALLOW_LOCALHOST_UNAUTHENTICATED: false  # Set true for dev only
LLM_ENABLED: true                             # AI for thread summaries
CONTACT_ENFORCEMENT_ENABLED: true             # Enforce contact policies
WORKTREES_ENABLED: 0                          # Git worktree support
AGENT_MAIL_GUARD_MODE: block                  # block or warn
```

### **Ful**l Station **Lat**tice Configuration

```yaml
# Orchestrator mode config
lattice:
  mode: orchestrator
  station_id: "uuid-or-auto-generated"
  station_name: "Primary-Orchestrator"

  embedded:
    port: 4222
    http_port: 8222
    store_dir: ~/.local/share/station/lattice
    auth:
      enabled: true
      users:
        - username: admin
          password: secure-password
        - username: worker
          password: worker-password
      token: "bearer-token-for-api"

  # Routing and discovery
  presence_ttl_sec: 30
  cleanup_interval_sec: 60
  timeout_sec: 60
  retry_count: 3
```

```yaml
# Member mode config
lattice:
  mode: member
  station_id: "worker-station-001"
  station_name: "Security-Station"

  nats:
    url: "nats://orchestrator:4222"
    auth:
      user: "worker"
      password: "worker-password"
      # OR use credentials file
      # creds_file: "/path/to/creds"
      # OR use NKey
      # nkey_file: "/path/to/nkey"
    tls:
      enabled: true
      cert: /path/to/cert.pem
      key: /path/to/key.pem
      ca: /path/to/ca.pem
    reconnect_wait_sec: 2
    max_reconnects: -1  # Unlimited retries
```

### **Bui**ld Slots for **Lon**g-Running Tasks

```python
# Reserve compute resources (not just files)
acquire_build_slot(
    project_key="/my/project",
    agent_name="GreenCastle",
    slot_name="frontend-build",
    ttl_seconds=3600,
    exclusive=True
)

# Keep slot fresh during work
renew_build_slot(
    project_key="/my/project",
    agent_name="GreenCastle",
    slot_name="frontend-build",
    extend_seconds=1800  # Add 30 more minutes
)

# Release when done
release_build_slot(
    project_key="/my/project",
    agent_name="GreenCastle",
    slot_name="frontend-build"
)
```

### **Con**tact Policies

```python
# Four modes control who can message whom

# Open: Accept any project message
set_contact_policy(agent_name="GreenCastle", policy="open")

# Auto (default): Allow if shared context exists
set_contact_policy(agent_name="RedCat", policy="auto")
# Auto-approval triggers:
# - Same thread participation
# - Overlapping file reservations
# - Recent contact within N days

# Contacts only: Require explicit approval first
set_contact_policy(agent_name="BlueLake", policy="contacts_only")

# Block all: Reject all new contacts
set_contact_policy(agent_name="SilentWorker", policy="block_all")
```

---

## Async Polling Loop Pattern

### **The** Standard **Pol**ling Implementation

**Age**nts check mail **bet**ween work steps, **not** continuously:

```python
# Standard async polling loop pattern

def agent_work_loop(project_key, agent_name):
    """
    Standard async polling pattern for Agent Mail integration.
    Agents check mail between work steps, not continuously.
    """

    while task_not_complete:
        # 1. Do some work (the primary task)
        result = perform_work_chunk()

        # 2. Check for messages (non-blocking)
        inbox = fetch_inbox(
            project_key=project_key,
            agent_name=agent_name,
            urgent_only=True,  # Only urgent messages interrupt
            limit=5
        )

        # 3. Handle urgent messages
        for msg in inbox:
            if msg.importance == "urgent":
                handle_urgent_message(msg)
                acknowledge_message(msg.id)

        # 4. Check for reservation conflicts
        my_reservations = get_reservations(project_key, agent_name)
        for reservation in my_reservations:
            if reservation.expires_soon:
                # Renew or release based on work state
                if need_more_time:
                    renew_reservation(reservation)
                else:
                    release_reservation(reservation)

        # 5. Update progress (if reporting to orchestrator)
        send_message(
            project_key=project_key,
            from_agent=agent_name,
            to_agents=["Orchestrator"],
            thread_id="progress",
            subject=f"Progress: {percent_complete}%",
            body=f"Completed: {completed_items}"
        )
```

### **Urg**ency Levels

| **Lev**el | **Beh**avior | **Use** Case |
|-----------|--------------|--------------|
| `normal` | Checked between work chunks | Status updates, non-critical |
| `high` | Checked more frequently | Important but not blocking |
| `urgent` | Checked immediately if possible | Blocking issues, conflicts |

---

## Complete Message Flow Diagrams

### **Sce**nario 1: **Suc**cessful Parallel Work

```
+===========================================================================+
|              SUCCESSFUL PARALLEL WORK WITH RESERVATIONS                   |
+===========================================================================+
|                                                                           |
|  Time    Agent A                  Server              Agent B             |
|  ----    -------                  ------              -------             |
|                                                                           |
|  T0      register_agent()                                                 |
|          "GreenCastle"  -------->  Store                                  |
|                                    profile                                |
|                                                                           |
|  T1                                                    register_agent()   |
|                                    Store  <---------  "RedCat"            |
|                                    profile                                |
|                                                                           |
|  T2      reserve("src/api/*")                                             |
|          exclusive=True  ------->  Grant                                  |
|                         <-------   reservation                            |
|                                                                           |
|  T3                                                    reserve("src/ui/*")|
|                                    Grant   <--------  exclusive=True     |
|                                    reservation ------->                   |
|                                                                           |
|  T4      (editing api files)                          (editing ui files)  |
|          No conflict                                  No conflict         |
|                                                                           |
|  T5      release_reservation()                                            |
|          ----------------->        Release                                |
|                                                                           |
|  T6                                                   release_reservation()|
|                                    Release <----------                    |
|                                                                           |
|  Result: Both agents complete their work without conflicts                |
|                                                                           |
+===========================================================================+
```

### **Sce**nario 2: **Con**flict Detection

```
+===========================================================================+
|              CONFLICT DETECTION AND RESOLUTION                            |
+===========================================================================+
|                                                                           |
|  Time    Agent A                  Server              Agent B             |
|  ----    -------                  ------              -------             |
|                                                                           |
|  T0      reserve("src/api/*")                                             |
|          exclusive=True  ------->  Grant                                  |
|                         <-------   reservation                            |
|                                                                           |
|  T1                                                    reserve("src/api/*")|
|                                    CONFLICT <-------  exclusive=True     |
|                                    returned  ------->                     |
|                                                                           |
|  T2      (working on api...)                          Options:            |
|                                                       1. Wait for expiry  |
|                                                       2. Reserve other    |
|                                                       3. Use shared mode  |
|                                                                           |
|  T3                                                    reserve("src/ui/*")|
|                                    Grant   <--------  (choose option 2)  |
|                                    reservation ------->                   |
|                                                                           |
|  T4      release_reservation()                                            |
|          ----------------->        Release                                |
|                                                                           |
|  T5                                                    reserve("src/api/*")|
|                                    Grant   <--------  (now available)    |
|                                    reservation ------->                   |
|                                                                           |
|  Result: Conflict detected early, Agent B pivoted to other work          |
|                                                                           |
+===========================================================================+
```

### **Sce**nario 3: **Thr**eaded Conversation

```
+===========================================================================+
|              THREADED CONVERSATION FOR FEATURE DISCUSSION                 |
+===========================================================================+
|                                                                           |
|  Thread ID: "feature-auth"                                                |
|                                                                           |
|  +-----------------------------------------------------------------+     |
|  | Message 1: GreenCastle -> [RedCat, BlueLake]                     |     |
|  | Subject: Auth feature discussion                                  |     |
|  | Body: "Proposing JWT-based authentication. Thoughts?"            |     |
|  +-----------------------------------------------------------------+     |
|           |                                                               |
|           v                                                               |
|  +-----------------------------------------------------------------+     |
|  | Message 2: RedCat -> [GreenCastle, BlueLake]                     |     |
|  | Subject: RE: Auth feature discussion                              |     |
|  | Body: "JWT sounds good. I'll handle frontend token storage."     |     |
|  +-----------------------------------------------------------------+     |
|           |                                                               |
|           v                                                               |
|  +-----------------------------------------------------------------+     |
|  | Message 3: BlueLake -> [GreenCastle, RedCat]                     |     |
|  | Subject: RE: Auth feature discussion                              |     |
|  | Body: "I'll set up test fixtures for auth flows."                |     |
|  +-----------------------------------------------------------------+     |
|           |                                                               |
|           v                                                               |
|  +-----------------------------------------------------------------+     |
|  | Message 4: GreenCastle -> [RedCat, BlueLake]                     |     |
|  | Subject: RE: Auth feature discussion                              |     |
|  | Body: "Great! I've reserved src/auth/* for the next 2 hours."    |     |
|  |       "Files modified: src/auth/jwt.py, src/auth/middleware.py"  |     |
|  +-----------------------------------------------------------------+     |
|                                                                           |
|  All messages share thread_id="feature-auth"                             |
|  Full conversation searchable and auditable                               |
|                                                                           |
+===========================================================================+
```

---

## Performance Considerations

### **Age**nt Mail Performance

| **Ope**ration | **Typ**ical Latency | **Sca**ling Notes |
|---------------|---------------------|-------------------|
| `register_agent()` | 5-10ms | One-time per session |
| `send_message()` | 10-20ms | Dual-write (SQLite + Git) |
| `fetch_inbox()` | 5-15ms | Indexed queries |
| `file_reservation_paths()` | 5-10ms | In-memory + persist |
| `search_messages()` | 20-100ms | FTS5 dependent on corpus size |

**Opt**imization Tips:
- Use `urgent_only=True` when polling to reduce payload
- Use `limit` parameter to cap results
- Use macros (`macro_start_session`) to batch operations

### **Sta**tion/NATS Performance

| **Ope**ration | **Typ**ical Latency | **Sca**ling Notes |
|---------------|---------------------|-------------------|
| Pub/sub message | Sub-millisecond | NATS native |
| Request-reply | 1-5ms | Depends on handler |
| JetStream persist | 5-10ms | File-based storage |
| Agent invocation | 5+ minutes | Depends on task |

**Opt**imization Tips:
- Enable locality preference for routing
- Use queue groups for load balancing
- Configure appropriate timeouts
- Monitor via Jaeger traces

---

## Security Considerations

### **Age**nt Mail Security

```
+===========================================================================+
|              SECURITY LAYERS IN AGENT MAIL                                |
+===========================================================================+
|                                                                           |
|  1. TRANSPORT SECURITY                                                    |
|     - HTTP-only transport (Streamable HTTP)                              |
|     - HTTPS recommended in production                                     |
|     - Bearer token authentication                                         |
|                                                                           |
|  2. CONTACT POLICIES                                                      |
|     - Four modes: open, auto, contacts_only, block_all                   |
|     - Cross-project approval required                                     |
|                                                                           |
|  3. AUDIT TRAIL                                                           |
|     - All messages stored in Git (version history)                       |
|     - Timestamps and attribution                                          |
|     - Full-text searchable                                                |
|                                                                           |
|  4. ADVISORY COORDINATION                                                 |
|     - Reservations are signals, not locks                                |
|     - Pre-commit guards add enforcement layer                            |
|                                                                           |
+===========================================================================+
```

### **Sta**tion Security

```
+===========================================================================+
|              SECURITY LAYERS IN STATION                                   |
+===========================================================================+
|                                                                           |
|  1. NATS AUTHENTICATION                                                   |
|     - Credentials file (nats.UserCredentials)                            |
|     - NKey file (from seed)                                               |
|     - Bearer token                                                        |
|     - Username/password                                                   |
|                                                                           |
|  2. TLS ENCRYPTION                                                        |
|     - Custom CA support                                                   |
|     - Cert/key configuration                                              |
|                                                                           |
|  3. JETSTREAM AUDIT                                                       |
|     - DenyDelete: true (immutable)                                        |
|     - DenyPurge: true (no stream purging)                                |
|     - Append-only semantics                                               |
|                                                                           |
|  4. ROADMAP (Future)                                                      |
|     - Station identity                                                    |
|     - Message signing                                                     |
|     - ACLs                                                                |
|                                                                           |
+===========================================================================+
```

---

## Decision Guide

### **Cho**osing Your **Coo**rdination Pattern

```
+===========================================================================+
|              ASYNC COORDINATION DECISION FLOWCHART                        |
+===========================================================================+
|                                                                           |
|  START: How many agents?                                                  |
|                |                                                          |
|         +------+------+                                                   |
|         |             |                                                   |
|         v             v                                                   |
|      1 agent       2+ agents                                              |
|         |             |                                                   |
|         v             |                                                   |
|    No coordination    +---> Same machine? ----+                          |
|    needed                      |              |                          |
|                               YES            NO                          |
|                                |              |                          |
|                                v              v                          |
|                           Agent Mail     Station/NATS                    |
|                                |              |                          |
|                                v              v                          |
|                    Need human-readable   Need sub-ms                     |
|                    audit trails?          latency?                       |
|                        |     |               |     |                     |
|                       YES   NO              YES   NO                     |
|                        |     |               |     |                     |
|                        v     v               v     v                     |
|                    Agent   Consider      Station  Agent Mail             |
|                    Mail    Station       (NATS)   may work               |
|                            for scale                                     |
|                                                                           |
+===========================================================================+
```

### **Com**plete Feature **Com**parison

| **Fea**ture | **Age**nt Mail | **Sta**tion/NATS | **CC Mir**ror Tasks |
|-------------|----------------|------------------|---------------------|
| File reservations | Yes (TTL-based) | Via KeyValue store | No |
| Pre-commit guards | Yes | No | No |
| Message threading | Yes (thread_id) | Via subjects | Via dependencies |
| Human-readable storage | Yes (Git markdown) | No (binary streams) | Yes (JSON files) |
| Web UI | Yes | Yes (separate) | No |
| Cross-machine | Limited | Native | No |
| Persistence | SQLite + Git | JetStream | File-based |
| Real-time push | No (polling) | Yes | No |
| Setup complexity | Low | Medium | Very low |

---

## Tags

`#async-coordination` `#agent-mail` `#station` `#nats` `#file-reservations` `#message-queue` `#pub-sub` `#audit-trails` `#pre-commit-guards` `#multi-agent` `#distributed-systems` `#jetstream` `#lattice-mesh`

---

*Synthesis completed: 2026-01-19*
*Sources: 3 extraction documents*
*Lines: 1,700+*
