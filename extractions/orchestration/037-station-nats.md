# Station: NATS-Based Agent Orchestration Platform

## You Are Here

**Context:** You're exploring **Station** by CloudShip AI—a self-hosted, NATS-powered platform for building and deploying multi-agent AI systems. This sits at **Level 5-6** of the complexity ladder: production-grade distributed agent orchestration with persistent messaging, service discovery, and cross-station coordination.

**Prerequisites:**
- Familiarity with multi-agent patterns (Gas Town, CC Mirror concepts)
- Understanding of message queues and pub/sub patterns
- Docker for deployment
- Go or general systems programming exposure helpful

**Why This Matters Now:**
Most AI agent frameworks operate in-process or use HTTP/REST for coordination. Station introduces **infrastructure-grade messaging** via NATS with JetStream persistence—the same foundation used by production systems at scale. This is the missing piece between "multi-agent demo" and "production multi-agent deployment."

---

## What This Is

Station is an **open-source runtime** for deploying AI agent teams on your own infrastructure. The distinctive architecture choice: **NATS messaging as the coordination backbone**.

### Core Value Proposition

```
Build → Test → Deploy intelligent agent teams
Self-hosted | Git-backed | Production-ready
```

**Key Differentiators:**
- **41+ MCP tools** for natural language agent management
- **LLM-as-judge** built-in evaluation framework
- **NATS JetStream** for persistent, distributed messaging
- **Jaeger integration** for distributed tracing
- **Three operating modes**: Standalone, Orchestrator, Member (mesh network)

### What Makes Station Different

| Traditional Approach | Station Approach |
|---------------------|------------------|
| HTTP/REST between agents | NATS pub/sub with JetStream persistence |
| In-memory state | JetStream KeyValue stores |
| Manual agent discovery | Automatic mesh-based discovery |
| Single-node execution | Distributed multi-station execution |
| Ad-hoc coordination | Structured work assignment protocol |

---

## Why It Matters

### The Problem Station Solves

Traditional agent setups isolate AI agents by team—security agents on one system, SRE agents on another, DevOps agents elsewhere. Synthesizing results across tools requires **manual coordination**.

**Before Station:** 30+ minute manual workflow to aggregate results across specialized agents.

**With Station:** Seconds. The lattice mesh automatically discovers agents, routes requests, and aggregates results.

### The NATS Foundation

NATS isn't just "another message queue." It's purpose-built for:

1. **Sub-millisecond latency** at scale
2. **JetStream persistence** with exactly-once semantics
3. **Built-in clustering** for high availability
4. **KeyValue stores** for distributed state
5. **Embedded server option** for simple deployments

Station leverages all of this:
- Agent manifests in KeyValue stores
- Work assignments via JetStream streams
- Presence tracking via pub/sub
- Event sourcing for audit trails

---

## Architecture Deep Dive

### The Lattice System

Station's distributed coordination layer is called **Lattice**—a NATS-based mesh network enabling:

- Station-to-station discovery
- Agent manifest sharing
- Remote agent invocation
- Work distribution and tracking

```
┌─────────────────────────────────────────────────────────────────┐
│                        LATTICE MESH                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │  Station A   │    │  Station B   │    │  Station C   │       │
│  │  (Security)  │◄──►│  (Orchestr.) │◄──►│   (SRE)      │       │
│  │              │    │              │    │              │       │
│  │ VulnScanner  │    │ Coordinator  │    │ K8sHealth    │       │
│  │ CVELookup    │    │              │    │ LogAnalyzer  │       │
│  │ NetworkAudit │    │              │    │ Deployer     │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
│         │                   │                   │                │
│         └───────────────────┼───────────────────┘                │
│                             │                                    │
│                    ┌────────▼────────┐                          │
│                    │   NATS Server   │                          │
│                    │   + JetStream   │                          │
│                    └─────────────────┘                          │
└─────────────────────────────────────────────────────────────────┘
```

### Operating Modes

| Mode | Command | Purpose |
|------|---------|---------|
| **Standalone** | `stn serve` | Default single-station, no mesh |
| **Orchestrator** | `stn serve --orchestration` | Runs embedded NATS (port 4222) |
| **Member** | `stn serve --lattice <url>` | Joins orchestrator mesh |

### Core Components

#### 1. LatticeClient (`internal/lattice/client.go`)

NATS connection wrapper with:
- Multiple auth methods (credentials, NKey, token, user/pass)
- TLS configuration with custom CA support
- Auto-reconnect with configurable intervals
- JetStream context management

```go
type Client struct {
    cfg       LatticeConfig
    stationID string        // UUID if not provided
    mu        sync.RWMutex  // Thread safety
    conn      *nats.Conn
    js        nats.JetStreamContext
}
```

**Authentication Priority:**
1. Credentials file (`nats.UserCredentials`)
2. NKey file (from seed)
3. NKey seed string (direct)
4. Bearer token
5. Username/password

#### 2. Registry (`internal/lattice/registry.go`)

Service registry using JetStream KeyValue:

```go
type Registry struct {
    client      *Client
    stationsKV  nats.KeyValue  // Bucket: lattice-stations
    agentsKV    nats.KeyValue  // Bucket: lattice-agents
}
```

**Station Manifest Structure:**
```go
type StationManifest struct {
    StationID   string
    StationName string
    Agents      []AgentInfo
    Workflows   []WorkflowInfo
    LastSeen    time.Time
    Status      StationStatus
}
```

**Conflict Detection:** Prevents duplicate agent names across stations. An agent named "code-review" on Station B cannot coexist with identically-named agent on Station A.

#### 3. Presence (`internal/lattice/presence.go`)

Heartbeat-based station health tracking:

```go
// Presence message types
- PresenceAnnounce  // Station startup with full manifest
- PresenceHeartbeat // Periodic signal (default: 10 seconds)
- PresenceGoodbye   // Graceful shutdown notification
```

**NATS Subjects:**
- `lattice.presence.announce`
- `lattice.presence.heartbeat`
- `lattice.presence.goodbye`

#### 4. AgentRouter (`internal/lattice/router.go`)

Intelligent request routing with locality preference:

```go
// Routing priority
1. Check local agents first
2. Query registry for online remote stations
3. Match by name or capability
4. Return location metadata
```

**Location Data:**
```go
type AgentLocation struct {
    StationID   string
    StationName string
    AgentID     string
    AgentName   string
    IsLocal     bool
}
```

#### 5. Invoker (`internal/lattice/invoker.go`)

Remote agent execution via NATS request-reply:

**NATS Subject:** `lattice.station.{stationID}.agent.invoke`

**Request/Response Pattern:**
```go
type InvokeAgentRequest struct {
    AgentID   string  // One required
    AgentName string  // One required
    Task      string
    Context   map[string]interface{}
}

type InvokeAgentResponse struct {
    Status     string
    Result     string
    Error      string
    DurationMs int64
    ToolCalls  int
    StationID  string
}
```

**Timeouts:** 5 minutes for agents, 10 minutes for workflows.

### Event System

JetStream-backed event sourcing for audit trails.

#### Event Types (`internal/lattice/events/types.go`)

**Station Lifecycle:**
```go
EventTypeStationJoined  = "station.lattice.station.joined"
EventTypeStationLeft    = "station.lattice.station.left"
```

**Agent Events:**
```go
EventTypeAgentRegistered   = "station.lattice.agent.registered"
EventTypeAgentDeregistered = "station.lattice.agent.deregistered"
EventTypeAgentInvoked      = "station.lattice.agent.invoked"
```

**Work Events:**
```go
EventTypeWorkAssigned   = "station.lattice.work.assigned"
EventTypeWorkAccepted   = "station.lattice.work.accepted"
EventTypeWorkProgress   = "station.lattice.work.progress"
EventTypeWorkCompleted  = "station.lattice.work.completed"
EventTypeWorkFailed     = "station.lattice.work.failed"
EventTypeWorkEscalated  = "station.lattice.work.escalated"
EventTypeWorkCancelled  = "station.lattice.work.cancelled"
```

#### Stream Configuration

```go
type StreamConfig struct {
    StreamName string
    Subjects   []string
    MaxAge     time.Duration  // Default: 7 days
    MaxBytes   int64          // Default: 1GB
    MaxMsgs    int64
    Replicas   int
    Storage    nats.StorageType  // File-based
}
```

**Audit Trail Guarantees:**
- `DenyDelete: true` - No message deletion
- `DenyPurge: true` - No stream purging
- Append-only semantics

#### Publishing Patterns

```go
type Publisher struct {
    js       nats.JetStreamContext
    config   PublisherConfig
    batch    []*pendingEvent  // Async batching
}

// Configuration
BatchSize:   100       // Events per batch
FlushPeriod: 100ms     // Auto-flush interval

// Subject format
"lattice.events.{eventType}"
```

### Work Distribution System

The `internal/lattice/work` package implements structured task coordination.

#### Dispatcher (`work/dispatcher.go`)

Work assignment and tracking:

**NATS Subjects:**
- Assignment: `lattice.work.{targetStation}.assign`
- Response: `lattice.work.{workID}.response`

**Message Types:**
```go
MsgWorkAssigned  // Task assignment
MsgWorkAccepted  // Worker acceptance
MsgWorkProgress  // Status updates
MsgWorkComplete  // Success
MsgWorkFailed    // Failure
MsgWorkCancelled // Cancellation
MsgWorkEscalate  // Escalation request
```

**Work Structures:**
```go
type WorkAssignment struct {
    WorkID        string
    TargetStation string
    TargetAgent   string
    Task          string
    Context       map[string]interface{}
    Timeout       time.Duration
    Priority      int
    TraceID       string
}

type WorkResponse struct {
    Status        string
    Result        string
    Progress      int      // Percentage
    Message       string
    Escalation    string
    DurationMs    int64
    ToolCallCount int
}
```

#### Consumption Patterns

```go
// Synchronous: Block until result
result := dispatcher.AwaitWork(workID, 5*time.Minute)

// Asynchronous: Stream progress
progressCh := dispatcher.StreamProgress(workID)
for update := range progressCh {
    fmt.Printf("Progress: %d%%\n", update.Progress)
}

// Non-blocking: Check status
status := dispatcher.CheckWork(workID)

// Cancellation
dispatcher.CancelWork(workID)
```

---

## Key Features

### MCP Tool Integration

Station exposes 41+ MCP tools for AI assistant integration:

| Category | Tools | Examples |
|----------|-------|----------|
| Agent Management | 11 | create_agent, list_agents, delete_agent |
| Execution | 4 | call_agent, inspect_run |
| Evaluation | 7 | evaluate_benchmark, batch_execute_agents |
| Reports | 4 | generate_report |
| Environments | 3 | switch_environment |
| Scheduling | 3 | schedule_job |

### Service Architecture

When running `stn up`:

| Service | Port | Function |
|---------|------|----------|
| Web UI | 8585 | Configuration interface |
| MCP Server | 8586 | Primary tool endpoint |
| Agent MCP | 8587 | Dynamic execution |
| Jaeger UI | 16686 | Distributed tracing |
| NATS (Orchestrator) | 4222 | Client connections |
| NATS HTTP | 8222 | Monitoring endpoints |

### Embedded NATS Server

Orchestrator mode embeds NATS directly:

```go
type EmbeddedServer struct {
    cfg    config.LatticeEmbeddedNATSConfig
    server *natsserver.Server
}

// JetStream configuration
JetStream:  true
StoreDir:   ~/.local/share/station/lattice
MaxPayload: 8MB
ServerName: "station-lattice-orchestrator"
```

**Storage Location (XDG):**
- `$XDG_DATA_HOME/station/lattice` if set
- `~/.local/share/station/lattice` fallback

---

## Installation & Setup

### Prerequisites

- Docker (for Jaeger/observability)
- AI Provider API key (Anthropic, OpenAI, Google, or CloudShip)

### Quick Install

```bash
# Install Station CLI
curl -fsSL https://raw.githubusercontent.com/cloudshipai/station/main/install.sh | bash

# Initialize with provider
export ANTHROPIC_API_KEY="sk-ant-api03-..."
stn init --provider anthropic

# Start services
stn jaeger up           # Tracing backend
stn up                  # Station server
stn status              # Verify status
```

### Provider Configuration

**Anthropic:**
```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
stn init --provider anthropic
```

**OpenAI:**
```bash
export OPENAI_API_KEY="sk-..."
stn init --provider openai --ship
```

**Google Gemini:**
```bash
export GEMINI_API_KEY="..."
stn init --provider gemini --ship
```

### MCP Client Integration

**Claude Code CLI:**
```bash
claude mcp add station -e OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318 \
  --scope user -- stn stdio
```

**Cursor IDE (`.cursor/mcp.json`):**
```json
{
  "mcpServers": {
    "station": {
      "command": "stn",
      "args": ["stdio"],
      "env": {
        "OTEL_EXPORTER_OTLP_ENDPOINT": "http://localhost:4318"
      }
    }
  }
}
```

**Claude Desktop:**
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- Linux: `~/.config/Claude/claude_desktop_config.json`

---

## Configuration Options

### Lattice Configuration

```yaml
lattice:
  mode: standalone | orchestrator | member
  station_id: "uuid-here"          # Auto-generated if blank
  station_name: "My Station"

  # Orchestrator mode (embedded NATS)
  embedded:
    port: 4222
    http_port: 8222
    store_dir: ~/.local/share/station/lattice
    auth:
      enabled: true
      users:
        - username: admin
          password: secret
      token: "bearer-token"

  # Member mode (connect to orchestrator)
  nats:
    url: "nats://orchestrator:4222"
    auth:
      user: "member"
      password: "secret"
      # OR
      creds_file: "/path/to/creds"
      # OR
      nkey_file: "/path/to/nkey"
      # OR
      token: "bearer-token"
    tls:
      enabled: true
      cert: /path/to/cert.pem
      key: /path/to/key.pem
      ca: /path/to/ca.pem
    reconnect_wait_sec: 2
    max_reconnects: -1  # Unlimited

  # Routing & discovery
  presence_ttl_sec: 30
  cleanup_interval_sec: 60
  timeout_sec: 60
  retry_count: 3
```

### Agent Configuration (dotprompt)

Agents use `.prompt` files with YAML frontmatter:

```yaml
---
name: security-scanner
description: Scans code for vulnerabilities
tags:
  - security
  - scanning
model: gpt-4o-mini
max_steps: 8
tools:
  - filesystem
  - web
sandbox:
  enabled: true
  runtime: python
  timeout: 300
input:
  type: object
  properties:
    target:
      type: string
      description: Target to scan
  required:
    - target
---

[system]
You are a security scanning agent...

[user]
Scan {{target}} for vulnerabilities.
```

---

## Messaging Patterns

### Subject Hierarchy

```
lattice.
├── presence.
│   ├── announce        # Station startup
│   ├── heartbeat       # Health signals
│   └── goodbye         # Graceful shutdown
├── station.{id}.
│   └── agent.invoke    # Agent invocation
├── work.
│   ├── {stationID}.assign  # Work assignment
│   └── {workID}.response   # Work responses
└── events.
    ├── StationJoined
    ├── StationLeft
    ├── AgentRegistered
    ├── WorkAssigned
    └── ...
```

### Request-Reply Pattern

```go
// Publisher (Orchestrator)
client.Request("lattice.station.{id}.agent.invoke", request, timeout)

// Subscriber (Member Station)
client.Subscribe("lattice.station.{myID}.agent.invoke", handler)
```

### Queue Group Pattern

Load-balanced agent execution across replicas:

```go
client.QueueSubscribe(subject, "agent-workers", handler)
```

### Streaming Pattern

Real-time progress updates:

```go
// Publisher sends progress
client.Publish("lattice.work.{workID}.response", progressUpdate)

// Consumer streams
for msg := range subscription.Messages() {
    handleProgress(msg)
}
```

---

## Integration Patterns

### With Gas Town

Station can serve as the **messaging infrastructure layer** for Gas Town's agent factory pattern.

**Mapping:**
- **Mayor** → Station Orchestrator mode with Coordinator agent
- **Deacon** → Station's Registry + Presence system
- **Dogs** → Station Member stations with specialized agents
- **Refinery** → JetStream event streams for audit trails

**Configuration Example:**
```yaml
# Gas Town Mayor as Station Orchestrator
lattice:
  mode: orchestrator
  station_name: "GasTown-Mayor"
  embedded:
    port: 4222

# Gas Town Dogs as Station Members
lattice:
  mode: member
  station_name: "GasTown-Dog-Security"
  nats:
    url: "nats://mayor:4222"
```

**Integration Value:**
- Replace Gas Town's ad-hoc coordination with NATS pub/sub
- Add persistent audit trails via JetStream
- Enable multi-machine Dog deployment
- Standardize agent discovery protocol

### With Ralph

Station enables **message-driven Ralph** execution—replacing the shell loop with distributed work assignment.

**Traditional Ralph:**
```bash
while :; do
    cat PROMPT.md | claude-code
done
```

**Message-Driven Ralph with Station:**
```yaml
# Orchestrator publishes work
lattice:
  mode: orchestrator

# Station auto-executes on assignment
# (Propulsion principle from roadmap)
```

**Configuration Example:**
```yaml
# Ralph Controller Station
lattice:
  mode: orchestrator
  station_name: "Ralph-Controller"

agents:
  - name: ralph-agent
    description: Continuous iteration agent
    prompt: |
      Execute the task. If verification fails,
      iterate until success or max_iterations.
```

**Integration Value:**
- Distributed Ralph across machines
- Progress streaming during iteration
- Persistent work state in JetStream
- Graceful failure handling with escalation

### With CC-Mirror

Station provides **robust multi-model messaging** for CC-Mirror's hidden orchestration layer.

**CC-Mirror Challenge:** Coordinating multiple Claude instances without explicit orchestration commands.

**Station Solution:**
- Each Claude instance → Station Member
- Central orchestrator → Invisible coordinator
- NATS subjects → Model-specific channels

**Configuration Example:**
```yaml
# CC-Mirror Coordinator (hidden)
lattice:
  mode: orchestrator
  station_name: "mirror-coordinator"
  embedded:
    port: 4222

# Model Instance A
lattice:
  mode: member
  station_name: "claude-instance-a"
  nats:
    url: "nats://coordinator:4222"

# Model Instance B
lattice:
  mode: member
  station_name: "claude-instance-b"
  nats:
    url: "nats://coordinator:4222"
```

**Integration Value:**
- Replace HTTP polling with NATS push
- KeyValue store for shared context
- Event streams for coordination audit
- Capability-based routing for model selection

### Combination Matrix

| Station + | Use Case | Complexity | Value | Notes |
|-----------|----------|------------|-------|-------|
| **Gas Town** | NATS messaging layer | High | High | Full Gas Town on production infrastructure |
| **Ralph** | Message-driven iteration | Medium | Medium | Distributed Ralph with persistence |
| **CC-Mirror** | Multi-model messaging | High | High | Robust multi-instance coordination |
| **Personal Panopticon** | Domain station mesh | High | Very High | 8 specialized stations, centralized discovery |
| **Bare Claude Code** | Single-agent enhancement | Low | Low | Overkill unless multi-station needed |

### Integration Decision Guide

```
Do you need multi-machine agent coordination?
├── No → Skip Station, use simpler patterns
└── Yes
    ├── Do you need persistent audit trails?
    │   ├── No → Consider simpler message queue
    │   └── Yes → Station is excellent fit
    │
    ├── Do you need automatic agent discovery?
    │   ├── No → Manual coordination may suffice
    │   └── Yes → Station's Registry shines
    │
    └── Do you need sub-second message latency?
        ├── No → HTTP-based coordination okay
        └── Yes → NATS foundation is ideal
```

---

## Mental Models

### The Mesh Network Model

Think of Station like a **peer-to-peer network for AI agents**:

- **Stations** = Nodes with specialized capabilities
- **Lattice** = The mesh protocol connecting nodes
- **NATS** = The transport layer (like TCP for the mesh)
- **Registry** = DNS-like service discovery
- **Presence** = Heartbeat-based health protocol

### The Factory Floor Model

Station operates like a **distributed manufacturing floor**:

- **Orchestrator** = Factory manager assigning work orders
- **Members** = Specialized workstations
- **Agents** = Individual machines/tools
- **Work** = Jobs moving through the floor
- **Events** = Production audit trail

### The Event Sourcing Model

All state changes are **events in a stream**:

```
StationJoined → AgentRegistered → WorkAssigned → WorkProgress → WorkCompleted
```

You can:
- Replay history to reconstruct state
- Query temporal ranges for debugging
- Never lose data (append-only)

---

## Checkpoints

### Installation Checkpoint

After installation, verify:

```bash
# CLI installed
stn version
# Expected: Station CLI vX.X.X

# Jaeger running
curl http://localhost:16686/api/traces
# Expected: JSON response

# Station running
stn status
# Expected: "Station is running"
```

### Lattice Checkpoint

After starting orchestrator:

```bash
# Orchestrator mode
stn serve --orchestration

# In another terminal:
stn lattice --nats nats://localhost:4222 status
# Expected: Connection successful, station listed

# Check agents
stn lattice --nats nats://localhost:4222 agents
# Expected: List of registered agents
```

### MCP Integration Checkpoint

After MCP setup:

1. In Claude Code, run: `list available MCP tools`
2. Expected: Station tools appear (create_agent, call_agent, etc.)
3. Test: `call the list_agents tool`
4. Expected: Returns registered agents

### Multi-Station Checkpoint

After joining member:

```bash
# Terminal 1: Orchestrator running

# Terminal 2: Start member
stn serve --lattice nats://localhost:4222

# Terminal 3: Verify mesh
stn lattice --nats nats://localhost:4222 status
# Expected: Both stations listed

stn lattice --nats nats://localhost:4222 agents
# Expected: Agents from both stations
```

---

## Troubleshooting

### Connection Issues

**Problem:** `failed to connect to NATS: connection refused`

**Solutions:**
1. Verify orchestrator is running: `stn status`
2. Check NATS port: `nc -zv localhost 4222`
3. Verify firewall allows port 4222
4. Check URL format: `nats://host:port` (not `http://`)

**Problem:** `authentication failed`

**Solutions:**
1. Verify credentials match orchestrator config
2. Check credential file permissions: `chmod 600 creds.txt`
3. Try token auth as fallback
4. Check orchestrator logs for auth errors

### Discovery Issues

**Problem:** Agent not appearing in mesh

**Solutions:**
1. Check station registration: `stn lattice status`
2. Verify agent name is unique across mesh
3. Check presence heartbeat is running
4. Review conflict detection logs

**Problem:** Remote invocation timeout

**Solutions:**
1. Increase timeout: `timeout_sec: 120`
2. Check target station is online
3. Verify NATS subjects match
4. Check Jaeger traces for bottleneck

### JetStream Issues

**Problem:** `stream not found`

**Solutions:**
1. Run `stn up` with orchestrator flag to initialize streams
2. Check JetStream is enabled in config
3. Verify store directory has write permissions
4. Check disk space for persistence

**Problem:** Event publishing failures

**Solutions:**
1. Verify JetStream connection: `js.Info()`
2. Check stream exists and is healthy
3. Review batch flush errors in logs
4. Reduce batch size if memory constrained

### Performance Issues

**Problem:** High latency on invocations

**Solutions:**
1. Enable locality preference (default)
2. Check network latency to NATS server
3. Review agent execution time in traces
4. Consider adding more member stations

**Problem:** Memory growth

**Solutions:**
1. Reduce batch size in publisher config
2. Set MaxAge on streams (default 7 days)
3. Configure MaxBytes limit
4. Run cleanup manually: `stn lattice cleanup`

---

## Real-World Example: SRE Team

Station ships with a production-ready incident response team:

### Team Structure (9 Agents)

| Agent | Responsibility |
|-------|---------------|
| Logs Investigator | Error pattern analysis |
| Metrics Investigator | Performance anomaly detection |
| Traces Investigator | Distributed trace analysis |
| Change Detective | Deployment correlation |
| Infrastructure SRE | Kubernetes/AWS checks |
| SaaS Dependency Analyst | External service monitoring |
| Runbook Recommender | Documentation lookup |
| Scribe | Report generation |
| Coordinator | Orchestrates team |

### Performance Results

Automated testing achieved **7.5/10 performance score** across evaluation benchmarks.

### Deployment

```bash
stn up --bundle sre-team
```

---

## Comparison: Station vs Alternatives

### vs. Direct Claude Code

| Aspect | Claude Code | Station |
|--------|------------|---------|
| Agents | Single | Unlimited mesh |
| State | In-memory | JetStream persistent |
| Discovery | Manual | Automatic |
| Tracing | Basic | Full Jaeger |
| Deployment | Local | Multi-machine |

### vs. wasmCloud

| Aspect | wasmCloud | Station |
|--------|-----------|---------|
| Focus | WebAssembly | LLM agents |
| Complexity | Higher | Lower |
| Transport | NATS ✓ | NATS ✓ |
| Persistence | JetStream ✓ | JetStream ✓ |

### vs. Custom Solution

| Aspect | Custom | Station |
|--------|--------|---------|
| Time to deploy | Weeks | Minutes |
| MCP integration | DIY | Built-in |
| Evaluation | DIY | Built-in |
| Maintenance | High | Community |

---

## Roadmap Highlights

From the architecture comparison document:

**Phase 1 (Foundation):**
- Multi-tenancy via org-based subject prefixes
- Witness pattern for stuck work detection
- Propulsion (auto-execute on startup)

**Phase 2 (Observability):**
- Full CloudEvents streaming
- Enhanced telemetry

**Phase 3 (Scalability):**
- Auction-based scheduling (capacity-aware)
- Registry sharding
- High availability

**Phase 4 (Security):**
- Station identity
- Message signing
- ACLs

---

## Source Attribution

**Primary Source:**
- Repository: https://github.com/cloudshipai/station
- License: Apache-2.0
- Maintainer: CloudShip AI

**Documentation Files Analyzed:**
- `README.md` - Project overview
- `docs/ARCHITECTURE.md` - System design
- `docs/LATTICE.md` - Distributed coordination
- `docs/LATTICE_ARCHITECTURE_COMPARISON.md` - Design decisions
- `docs/agents/CREATING_AGENTS.md` - Agent configuration

**Source Code Files Analyzed:**
- `go.mod` - NATS dependencies confirmed
- `internal/lattice/client.go` - NATS connection management
- `internal/lattice/registry.go` - Service registry
- `internal/lattice/presence.go` - Heartbeat system
- `internal/lattice/router.go` - Agent routing
- `internal/lattice/invoker.go` - Remote execution
- `internal/lattice/embedded.go` - Embedded NATS server
- `internal/lattice/events/*.go` - Event system
- `internal/lattice/work/*.go` - Work coordination
- `internal/config/config.go` - Configuration options

**Reliability:** High - Official repository, Apache-licensed, active development.

---

## Key Takeaways

1. **Station = Production NATS + Agent Orchestration**
   - Not a toy framework; infrastructure-grade messaging

2. **Three Modes Cover All Scales**
   - Standalone for development
   - Orchestrator for hub deployment
   - Member for mesh participation

3. **JetStream Enables True Persistence**
   - Events survive restarts
   - Audit trails are append-only
   - State in KeyValue stores

4. **Lattice Pattern is Reusable**
   - Can integrate with Gas Town, Ralph, CC-Mirror
   - Provides missing infrastructure layer

5. **MCP-First Design**
   - Natural language agent management
   - No CLI memorization required
   - Works in Claude Code, Cursor, etc.

---

*Extraction completed: 2026-01-19*
*Agent: B3-T3-9*
*Lines: 850+*
