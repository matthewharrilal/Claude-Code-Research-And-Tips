# Infrastructure Stack Blueprint: Cloud to Production Deployment

## The Complete Path from Zero to Production-Grade Agent Orchestration

---

## D-FINAL Connection

**This synthesis integrates:**
- extractions/orchestration/036-roughneck-multi-gastown.md (Terraform + Ansible provisioning)
- extractions/orchestration/037-station-nats.md (NATS messaging backbone)
- extractions/infrastructure/005-agentic-flow-deploy.md (Development to production bridge)
- extractions/infrastructure/006-kimaki-discord.md (Discord interface layer)

**Coverage:** End-to-end deployment infrastructure for AI agent systems

**Cross-references:**
- synthesis/architecture-complexity-ladder.md#level-6-7
- synthesis/mastery-ralph-complete.md
- extractions/orchestration/022-gas-town-deep-dive.md

**Last updated:** 2026-01-19

---

## 1. You Are Here

```
+=====================================================================================+
|                                                                                     |
|            THE COMPLETE INFRASTRUCTURE STACK FOR AI AGENT DEPLOYMENT                |
|                                                                                     |
+=====================================================================================+
|                                                                                     |
|   LAYER 5: USER INTERFACES                                                          |
|   +-------------------------------------------------------------------------+       |
|   |  Kimaki (Discord) | Web UIs | Terminal CLI | Mobile Apps                |       |
|   |  Human interaction layer - how users talk to agents                     |       |
|   +-------------------------------------------------------------------------+       |
|                                       |                                             |
|   LAYER 4: ORCHESTRATION PLATFORM                                                   |
|   +-------------------------------------------------------------------------+       |
|   |  Gas Town (Mayor, Dogs, Refinery) | Agentic-Flow Swarms                 |       |
|   |  Agent coordination, task distribution, workflow management              |       |
|   +-------------------------------------------------------------------------+       |
|                                       |                                             |
|   LAYER 3: MESSAGING BACKBONE         |                                             |
|   +-------------------------------------------------------------------------+       |
|   |  Station NATS | JetStream Persistence | Lattice Mesh Network            |       |
|   |  Pub/sub messaging, service discovery, event sourcing                    |       |
|   +-------------------------------------------------------------------------+       |
|                                       |                                             |
|   LAYER 2: COMPUTE INFRASTRUCTURE  <====== THIS DOCUMENT FOCUSES HERE =====         |
|   +-------------------------------------------------------------------------+       |
|   |  ################################################################        |       |
|   |  ##                                                            ##        |       |
|   |  ##           ROUGHNECK + AGENTIC-FLOW DEPLOYMENT             ##        |       |
|   |  ##                                                            ##        |       |
|   |  ##  Terraform provisioning | Ansible configuration            ##        |       |
|   |  ##  Docker containers | Kubernetes orchestration              ##        |       |
|   |  ##  ReasoningBank persistence | QUIC transport                ##        |       |
|   |  ##                                                            ##        |       |
|   |  ################################################################        |       |
|   +-------------------------------------------------------------------------+       |
|                                       |                                             |
|   LAYER 1: CLOUD PROVIDERS                                                          |
|   +-------------------------------------------------------------------------+       |
|   |  Hetzner (~$4-8/mo) | DigitalOcean (~$24/mo) | AWS EC2 (~$30/mo)        |       |
|   |  The raw compute resources where everything runs                         |       |
|   +-------------------------------------------------------------------------+       |
|                                                                                     |
+=====================================================================================+
```

### **Con**text **Ori**entation

This **doc**ument is your **com**plete **blue**print for **dep**loying AI **ag**ent **sys**tems from **loc**al **dev**elopment to **pro**duction **infra**structure. It **syn**thesizes four **crit**ical **ex**tractions into one **co**herent **dep**loyment **path**.

### **Who** This Is For

| **Your** **Sit**uation | **What** You'll **Ga**in |
|------------------------|--------------------------|
| Building Gas Town factory | IaC provisioning + multi-region deployment |
| Running Ralph loops | Production containerization + persistence |
| Need multi-machine agents | NATS mesh network + service discovery |
| Want team collaboration | Discord interface + shared state |
| Scaling from laptop to cloud | Complete migration path with checkpoints |

### **Pre**requisites

| **Re**quirement | **Desc**ription |
|-----------------|-----------------|
| **Ter**raform/OpenTofu | Infrastructure as Code execution |
| **An**sible | Configuration management |
| **Doc**ker | Container runtime |
| **Cl**oud Provider Account | Hetzner, AWS, or DigitalOcean |
| **No**de.js 18+ | For Agentic-Flow |
| **Py**thon 3.10+ | For Roughneck CLI |

---

## 2. Roughneck Terraform + Ansible Provisioning

### **The** **Con**struction **Com**pany for **Ag**ent **Fact**ories

**Rough**neck is **in**frastructure-as-**co**de that **pro**visions **cl**oud VMs **pre**configured with **Gas** **To**wn, **Be**ads, and **AI** **cod**ing **ass**istants. Think of it as the **cons**truction **com**pany that **bui**lds the **fact**ory where your **ag**ents **wo**rk.

### Architecture Overview

```
+-----------------------------------------------------------------------------+
|                         ROUGHNECK ARCHITECTURE                               |
+-----------------------------------------------------------------------------+
|                                                                              |
|   +------------------+    +------------------+    +------------------+       |
|   |   Python CLI     |--->|   Terraform      |--->|  Cloud Provider  |       |
|   |   (Orchestrator) |    |   (Provisioner)  |    |  (Infrastructure)|       |
|   +------------------+    +------------------+    +------------------+       |
|            |                                               |                 |
|            |                                               |                 |
|            v                                               v                 |
|   +------------------+                          +----------------------+     |
|   |     Ansible      |------------------------->|    Configured VM     |     |
|   |   (Configurer)   |                          |  * Gas Town          |     |
|   +------------------+                          |  * Beads             |     |
|                                                 |  * Claude Code CLI   |     |
|                                                 |  * Docker            |     |
|                                                 |  * code-server IDE   |     |
|                                                 |  * tmux, Go, Git...  |     |
|                                                 +----------------------+     |
|                                                                              |
+-----------------------------------------------------------------------------+
```

### Directory Structure

```
roughneck/
+-- roughneck                    # Main Python CLI entrypoint
+-- lib/                         # Python library modules
|   +-- cli.py                   # CLI utilities
|   +-- config.py                # Deployment configuration
|   +-- credentials.py           # Encrypted credential management
|   +-- ansible.py               # Ansible playbook execution
|   +-- terraform.py             # Terraform/OpenTofu operations
|   +-- ssh.py                   # SSH connection utilities
|   +-- cli/
|       +-- commands/            # CLI command implementations
|           +-- core.py          # new, deploy, destroy, list
|           +-- manage.py        # ssh, provision, update, validate
|           +-- credentials.py   # credential management
|           +-- providers.py     # provider-specific prompts
|
+-- terraform/
|   +-- modules/
|   |   +-- hetzner/             # Hetzner Cloud module
|   |   +-- aws/                 # AWS EC2 module
|   |   +-- digitalocean/        # DigitalOcean module
|   +-- providers/               # Root module configurations
|
+-- ansible/
|   +-- playbook.yml             # Main deployment playbook
|   +-- update.yml               # Update playbook
|   +-- validate.yml             # Health check playbook
|   +-- roles/
|       +-- common/              # Base system setup
|       +-- docker/              # Docker installation
|       +-- code-server/         # Browser IDE
|       +-- claude/              # Claude Code CLI
|       +-- roughneck/           # Gas Town installation
|       +-- beads/               # Beads CLI installation
|       +-- systemd/             # Service management
|       +-- ...                  # 20+ additional roles
|
+-- deployments/                 # Per-deployment isolation
    +-- <name>/
        +-- terraform/           # Isolated Terraform state
        +-- terraform.tfvars     # Deployment configuration
        +-- terraform.tfstate    # Infrastructure state
        +-- inventory.ini        # Ansible inventory
        +-- generated_key        # SSH keypair
```

### CLI Commands Reference

```bash
# Deployment lifecycle
./roughneck new [name]          # Create new deployment (interactive)
./roughneck deploy [name]       # Deploy existing configuration
./roughneck destroy [name]      # Tear down infrastructure
./roughneck list                # Show all deployments

# Management
./roughneck provision [name]    # Re-run Ansible (no Terraform)
./roughneck update [name]       # Update packages/tools
./roughneck validate [name]     # Run health checks
./roughneck ssh [name]          # SSH into deployment

# Credentials
./roughneck credentials         # Manage stored credentials
```

### Deployment Isolation Model

**Each** **dep**loyment is **ful**ly **is**olated with **in**dependent **st**ate:

```
deployments/
+-- gastown-prod/               # Production Gas Town
|   +-- terraform.tfstate       # Independent state
|   +-- inventory.ini           # Own inventory
|   +-- generated_key           # Own SSH key
|
+-- gastown-dev/                # Development Gas Town
|   +-- terraform.tfstate       # Independent state
|   +-- inventory.ini           # Own inventory
|   +-- generated_key           # Own SSH key
|
+-- gastown-eu/                 # EU-region Gas Town
    +-- terraform.tfstate       # Independent state
    +-- inventory.ini           # Own inventory
    +-- generated_key           # Own SSH key
```

**Why** this **mat**ters: Updates to Roughneck itself won't affect existing deployments. Each environment maintains its own infrastructure state.

### Configuration File (terraform.tfvars)

```hcl
# deployments/<name>/terraform.tfvars

# Core settings
project_name = "my-gastown"
provider = "hetzner"
region = "fsn1"
instance_type = "cx21"

# AI Assistants
enable_claude = true
enable_codex = true
enable_gemini = true
enable_copilot = true

# Gas Town Ecosystem
enable_gastown = true          # Install Gas Town (gt CLI)
enable_beads = true            # Install Beads (bd CLI)
enable_systemd_services = true # Start Mayor/Deacon on boot

# Infrastructure
enable_letsencrypt = false     # TLS certificates
domain_name = ""               # Domain for Let's Encrypt
enable_k9s = false             # Kubernetes TUI
```

### Systemd Service Configuration

**Wh**en Gas Town is enabled, Roughneck configures systemd services for automatic startup:

```ini
# roughneck-mayor.service
[Service]
ExecStart=/home/roughneck/go/bin/gt start mayor
User=roughneck
Restart=on-failure

# roughneck-deacon.service
[Service]
ExecStart=/home/roughneck/go/bin/gt start deacon
User=roughneck
Restart=on-failure
After=network.target roughneck-mayor.service
```

---

## 3. Multi-Cloud Pricing Comparison

### Cost Analysis by Provider

| **Pro**vider | **Mon**thly Cost | **Sp**ecs | **Best** **Fo**r |
|--------------|------------------|-----------|------------------|
| **Het**zner | ~$4-8/mo | 2 vCPU, 4GB RAM | Budget-conscious, EU-based |
| **Dig**italOcean | ~$24/mo | 2 vCPU, 4GB RAM | Simple, developer-friendly |
| **AW**S EC2 | ~$30/mo | 2 vCPU, 4GB RAM (t3.medium) | Enterprise integration |

### Provider-Specific Configuration

**Hetzner Cloud (Budget Choice):**
```hcl
provider = "hetzner"
region = "fsn1"              # Falkenstein, Germany
instance_type = "cx21"       # 2 vCPU, 4GB RAM, ~$4/mo
```

**AWS EC2 (Enterprise Choice):**
```hcl
provider = "aws"
region = "us-east-1"
instance_type = "t3.medium"  # 2 vCPU, 4GB RAM, ~$30/mo
```

**DigitalOcean (Simplicity Choice):**
```hcl
provider = "digitalocean"
region = "nyc1"
instance_type = "s-2vcpu-4gb"  # 2 vCPU, 4GB RAM, ~$24/mo
```

### Scaling Tiers

```
+-----------------------------------------------------------------------------+
|                        RECOMMENDED INSTANCE SIZES                            |
+-----------------------------------------------------------------------------+
|                                                                              |
|   TIER 1: Development/Testing                                                |
|   +---------------------------------------------------------------------+   |
|   | Hetzner cx21 | DO s-2vcpu-4gb | AWS t3.medium                       |   |
|   | 2 vCPU, 4GB RAM | $4-30/month                                       |   |
|   | Use: Single Gas Town, 5-10 agents, development                      |   |
|   +---------------------------------------------------------------------+   |
|                                                                              |
|   TIER 2: Production Workloads                                               |
|   +---------------------------------------------------------------------+   |
|   | Hetzner cx31 | DO s-4vcpu-8gb | AWS t3.large                        |   |
|   | 4 vCPU, 8GB RAM | $10-60/month                                      |   |
|   | Use: Production Gas Town, 15-20 agents, moderate load               |   |
|   +---------------------------------------------------------------------+   |
|                                                                              |
|   TIER 3: High Performance                                                   |
|   +---------------------------------------------------------------------+   |
|   | Hetzner cx51 | DO s-8vcpu-16gb | AWS t3.xlarge                      |   |
|   | 8 vCPU, 16GB RAM | $30-150/month                                    |   |
|   | Use: Full factory, 30+ agents, high throughput                      |   |
|   +---------------------------------------------------------------------+   |
|                                                                              |
+-----------------------------------------------------------------------------+
```

### Cost Optimization Patterns

```
+-----------------------------------------------------------------------------+
|                    COST OPTIMIZATION PATTERN                                 |
+-----------------------------------------------------------------------------+
|                                                                              |
|   High-Priority Work              Low-Priority Work                          |
|   (AWS t3.xlarge)                 (Hetzner cx21)                             |
|         |                               |                                    |
|         v                               v                                    |
|   +------------------+          +------------------+                         |
|   |  gastown-fast    |          |  gastown-cheap   |                         |
|   |                  |          |                  |                         |
|   |  8 vCPU, 32GB    |          |  2 vCPU, 4GB     |                         |
|   |  ~$150/mo        |          |  ~$4/mo          |                         |
|   |                  |          |                  |                         |
|   |  Urgent fixes    |          |  Background      |                         |
|   |  Production bugs |          |  refactoring     |                         |
|   +------------------+          +------------------+                         |
|                                                                              |
|   USE CASE: Optimize cost by matching instance size to workload priority     |
|                                                                              |
+-----------------------------------------------------------------------------+
```

---

## 4. Station NATS Backbone

### **The** **Mess**aging **In**frastructure for **Dis**tributed **Ag**ents

**Sta**tion is an **op**en-source **run**time that uses **NA**TS as the **co**ordination **back**bone. This **pro**vides **inf**rastructure-**gr**ade **mess**aging for **pro**duction **mul**ti-agent **dep**loyments.

### Why NATS?

**NA**TS isn't just "another message queue." It's purpose-built for:

| **Cap**ability | **Ben**efit |
|----------------|-------------|
| **Sub**-millisecond latency | Real-time agent coordination |
| **Jet**Stream persistence | Exactly-once semantics, audit trails |
| **Bui**lt-in clustering | High availability without external tools |
| **Key**Value stores | Distributed state management |
| **Emb**edded server option | Simple deployments without separate infra |

### Architecture Overview

```
+---------------------------------------------------------------------+
|                        LATTICE MESH                                   |
|  +--------------+    +--------------+    +--------------+            |
|  |  Station A   |    |  Station B   |    |  Station C   |            |
|  |  (Security)  |<-->|  (Orchestr.) |<-->|   (SRE)      |            |
|  |              |    |              |    |              |            |
|  | VulnScanner  |    | Coordinator  |    | K8sHealth    |            |
|  | CVELookup    |    |              |    | LogAnalyzer  |            |
|  | NetworkAudit |    |              |    | Deployer     |            |
|  +--------------+    +--------------+    +--------------+            |
|         |                   |                   |                    |
|         +-------------------+-------------------+                    |
|                             |                                        |
|                    +--------v--------+                               |
|                    |   NATS Server   |                               |
|                    |   + JetStream   |                               |
|                    +-----------------+                               |
+---------------------------------------------------------------------+
```

### NATS Subject Hierarchy

```
lattice.
+-- presence.
|   +-- announce        # Station startup
|   +-- heartbeat       # Health signals
|   +-- goodbye         # Graceful shutdown
+-- station.{id}.
|   +-- agent.invoke    # Agent invocation
+-- work.
|   +-- {stationID}.assign  # Work assignment
|   +-- {workID}.response   # Work responses
+-- events.
    +-- StationJoined
    +-- StationLeft
    +-- AgentRegistered
    +-- WorkAssigned
    +-- ...
```

### JetStream Configuration

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

**Aud**it Trail Guarantees:
- `DenyDelete: true` - No message deletion
- `DenyPurge: true` - No stream purging
- Append-only semantics

### Event Types

**Sta**tion Lifecycle:
```go
EventTypeStationJoined  = "station.lattice.station.joined"
EventTypeStationLeft    = "station.lattice.station.left"
```

**Ag**ent Events:
```go
EventTypeAgentRegistered   = "station.lattice.agent.registered"
EventTypeAgentDeregistered = "station.lattice.agent.deregistered"
EventTypeAgentInvoked      = "station.lattice.agent.invoked"
```

**Wo**rk Events:
```go
EventTypeWorkAssigned   = "station.lattice.work.assigned"
EventTypeWorkAccepted   = "station.lattice.work.accepted"
EventTypeWorkProgress   = "station.lattice.work.progress"
EventTypeWorkCompleted  = "station.lattice.work.completed"
EventTypeWorkFailed     = "station.lattice.work.failed"
EventTypeWorkEscalated  = "station.lattice.work.escalated"
EventTypeWorkCancelled  = "station.lattice.work.cancelled"
```

### Service Architecture

**Wh**en running `stn up`:

| **Ser**vice | **Po**rt | **Fun**ction |
|-------------|----------|--------------|
| Web UI | 8585 | Configuration interface |
| MCP Server | 8586 | Primary tool endpoint |
| Agent MCP | 8587 | Dynamic execution |
| Jaeger UI | 16686 | Distributed tracing |
| NATS (Orchestrator) | 4222 | Client connections |
| NATS HTTP | 8222 | Monitoring endpoints |

---

## 5. Lattice Mesh Network Modes

### **Th**ree **Op**erating **Mo**des for **Dif**ferent **Sc**ales

**Sta**tion's **dis**tributed **co**ordination **lay**er is called **Lat**tice - a **NA**TS-based **me**sh **net**work **en**abling **sta**tion-to-**sta**tion **dis**covery, **ag**ent **man**ifest **shar**ing, and **re**mote **ag**ent **in**vocation.

### Mode Comparison

| **Mo**de | **Com**mand | **Pur**pose | **Us**e Case |
|----------|-------------|-------------|--------------|
| **Stan**dalone | `stn serve` | Default single-station, no mesh | Development, testing |
| **Orc**hestrator | `stn serve --orchestration` | Runs embedded NATS (port 4222) | Hub deployment |
| **Mem**ber | `stn serve --lattice <url>` | Joins orchestrator mesh | Distributed agents |

### Mode Architecture Diagrams

**Standalone Mode:**
```
+----------------------------------+
|          Single Station          |
|  +----------------------------+  |
|  |    Agents + JetStream      |  |
|  |    (All-in-one)            |  |
|  +----------------------------+  |
+----------------------------------+
No external NATS dependency
Perfect for development
```

**Orchestrator Mode:**
```
+----------------------------------+
|      Orchestrator Station        |
|  +----------------------------+  |
|  |    Embedded NATS Server    |  |
|  |    Port 4222               |  |
|  +----------------------------+  |
|  |    Coordinator Agent       |  |
|  |    Registry                |  |
|  +----------------------------+  |
+----------------------------------+
         |         |
    +----+         +----+
    |                   |
    v                   v
+--------+         +--------+
| Member |         | Member |
+--------+         +--------+
```

**Full Mesh Mode:**
```
+------------------------------------------------------------------+
|                        PRODUCTION MESH                             |
|                                                                    |
|  +----------------+    +------------------+    +----------------+  |
|  |   Station A    |    |   Orchestrator   |    |   Station C    |  |
|  |   (Security)   |<-->|   (Coordinator)  |<-->|   (SRE)        |  |
|  |                |    |                  |    |                |  |
|  | - VulnScanner  |    | - Task Dispatch  |    | - K8sHealth    |  |
|  | - CVELookup    |    | - Agent Registry |    | - LogAnalyzer  |  |
|  | - NetworkAudit |    | - Work Tracking  |    | - Deployer     |  |
|  +----------------+    +------------------+    +----------------+  |
|          |                     |                       |          |
|          +---------------------+-----------------------+          |
|                                |                                  |
|                    +-----------+-----------+                      |
|                    |    NATS JetStream     |                      |
|                    |    (Persistence)      |                      |
|                    +-----------------------+                      |
|                                                                    |
+------------------------------------------------------------------+
```

### Configuration Examples

**Orchestrator Configuration:**
```yaml
lattice:
  mode: orchestrator
  station_id: "orchestrator-main"
  station_name: "Main Coordinator"

  embedded:
    port: 4222
    http_port: 8222
    store_dir: ~/.local/share/station/lattice
    auth:
      enabled: true
      users:
        - username: admin
          password: ${NATS_ADMIN_PASSWORD}
      token: ${NATS_TOKEN}
```

**Member Configuration:**
```yaml
lattice:
  mode: member
  station_id: "worker-security-01"
  station_name: "Security Station"

  nats:
    url: "nats://orchestrator:4222"
    auth:
      user: "security-worker"
      password: ${NATS_WORKER_PASSWORD}
    tls:
      enabled: true
      cert: /path/to/cert.pem
      key: /path/to/key.pem
      ca: /path/to/ca.pem
    reconnect_wait_sec: 2
    max_reconnects: -1  # Unlimited

  presence_ttl_sec: 30
  cleanup_interval_sec: 60
  timeout_sec: 60
  retry_count: 3
```

### Quick Start Commands

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

# Orchestrator mode
stn serve --orchestration

# Member mode (connect to orchestrator)
stn serve --lattice nats://orchestrator:4222
```

---

## 6. Agentic-Flow Development to Production Bridge

### **The** **Miss**ing **Lin**k Between **Lap**top and **Cl**oud

**Ag**entic-Flow **trans**forms **dev**elopment-stage **ag**ent **work**flows into **scal**able, **per**sistent, **ent**erprise-grade **dep**loyments.

### The Production Gap Problem

```
Development World                    Production World
-----------------                    ----------------
"It works on my laptop"      --->    "How do I scale this?"
Single Claude session        --->    Multiple coordinated agents
Manual restart loops         --->    Self-healing infrastructure
Lost context every time      --->    Persistent organizational memory
$10/day experiments          --->    $100+/day mission-critical
```

### System Architecture

```
+==============================================================================+
|                         AGENTIC-FLOW ARCHITECTURE                             |
+==============================================================================+
|                                                                               |
|  +-------------------------------------------------------------------------+ |
|  |                         ORCHESTRATION LAYER                              | |
|  |  +--------------+  +--------------+  +--------------+  +-------------+  | |
|  |  | Multi-Model  |  |    Swarm     |  |     MCP      |  |    Task     |  | |
|  |  |   Router     |  | Coordinator  |  |   Tools      |  |  Scheduler  |  | |
|  |  |  (20+ LLMs)  |  | (Topologies) |  |  (213 tools) |  | (Priority)  |  | |
|  |  +--------------+  +--------------+  +--------------+  +-------------+  | |
|  +-------------------------------------------------------------------------+ |
|                                      |                                        |
|                                      v                                        |
|  +-------------------------------------------------------------------------+ |
|  |                          AGENT LAYER (66 Agents)                         | |
|  |                                                                          | |
|  |  Development        Swarm           Consensus        GitHub              | |
|  |  -----------        -----           ---------        ------              | |
|  |  * Coder            * Hierarchical  * Byzantine      * PR Manager        | |
|  |  * Reviewer         * Mesh          * Raft           * Code Reviewer     | |
|  |  * Tester           * Adaptive      * Gossip         * Issue Tracker     | |
|  |  * Planner          * Collective    * CRDT           * CI/CD             | |
|  |  * Researcher       * Ring          * Paxos          * Release           | |
|  |                                                                          | |
|  +-------------------------------------------------------------------------+ |
|                                      |                                        |
|                                      v                                        |
|  +-------------------------------------------------------------------------+ |
|  |                         MEMORY & LEARNING LAYER                          | |
|  |  +-----------------+  +-----------------+  +-------------------------+  | |
|  |  |    AgentDB      |  |  ReasoningBank  |  |   SONA (Self-Optimizing |  | |
|  |  |  Vector Store   |  |  Pattern Memory |  |   Neural Architecture)  |  | |
|  |  |  HNSW Index     |  |  Confidence     |  |   LoRA Fine-tuning      |  | |
|  |  |  150x faster    |  |  Experience     |  |   <1ms overhead         |  | |
|  |  +-----------------+  +-----------------+  +-------------------------+  | |
|  +-------------------------------------------------------------------------+ |
|                                      |                                        |
|                                      v                                        |
|  +-------------------------------------------------------------------------+ |
|  |                          TRANSPORT LAYER                                 | |
|  |  +--------------+  +--------------+  +--------------+  +-------------+  | |
|  |  |    QUIC      |  |  WebSocket   |  |   REST API   |  |    CLI      |  | |
|  |  | Sub-ms RTT   |  |  Real-time   |  |   Standard   |  |  Direct     |  | |
|  |  | 0-RTT Resume |  |   Streaming  |  |    HTTP      |  |  Execution  |  | |
|  |  | TLS 1.3      |  |              |  |              |  |             |  | |
|  |  +--------------+  +--------------+  +--------------+  +-------------+  | |
|  +-------------------------------------------------------------------------+ |
|                                                                               |
+==============================================================================+
```

### Key Performance Metrics

| **Fea**ture | **Per**formance | **Ben**efit |
|-------------|-----------------|-------------|
| **HN**SW Vector Search | 150x-12,500x faster | Sub-millisecond retrieval |
| **Fla**sh Attention | 2.49x-7.47x speedup | 50-75% memory reduction |
| **Pat**tern Retrieval | 300x faster (150ms to 0.5ms) | Real-time learning |
| **QU**IC Transport | 50-70% faster execution | 0-RTT reconnection |
| **Lo**RA Fine-tuning | 99% parameter reduction | Efficient adaptation |

### Swarm Topologies

```
HIERARCHICAL                    MESH                        RING
    +---+                    +---+---+---+                +---+
    | C | Coordinator        | A | B | C |              +-| A |-+
    +-+-+                    +---+---+---+              | +---+ |
  +---+---+                  | D | E | F |            +-+-+   +-+-+
+-+-+ | +-+-+                +---+---+---+            | E |   | B |
| A | | | B |                | G | H | I |            +-+-+   +-+-+
+---+ | +---+                +---+---+---+              | +---+ |
    +-+-+                    All-to-all                 +-| D |-+
    | C |                    communication                +-+-+
    +---+                                                 +-+-+
                                                          | C |
Scales to ~100 agents        Full redundancy              +---+
Clear chain of command       High bandwidth               Ordered flow
Best for: Codebase analysis  Best for: Consensus          Best for: Pipelines
```

### SONA Profile Configuration

```typescript
const sonaConfig = {
  // Profile selection
  profile: 'balanced',  // real-time | batch | research | edge | balanced

  // Profile characteristics:
  // real-time: 2200 ops/sec, minimal latency
  // batch:     High throughput, background processing
  // research:  +55% quality, extensive reasoning
  // edge:      <5MB footprint, mobile deployment
  // balanced:  Default, good tradeoffs

  // Fine-tuning options
  loraEnabled: true,
  loraRank: 8,  // Lower = faster, higher = more capacity

  // Continual learning
  ewcEnabled: true,
  ewcLambda: 0.5  // Forgetting prevention strength
};
```

### Basic Initialization Code

```typescript
import { EnhancedAgentDBWrapper } from 'agentic-flow/core';

// Initialize with default settings
const wrapper = new EnhancedAgentDBWrapper({
  enableAttention: true,
  enableGNN: true,
  attentionConfig: {
    type: 'flash'  // 2.49x-7.47x speedup
  },
});

await wrapper.initialize();
```

### Multi-Agent Swarm Setup

```typescript
import { createSwarm } from 'agentic-flow';

// Create a hierarchical swarm for code analysis
const swarm = await createSwarm({
  topology: 'hierarchical',
  maxAgents: 8,
  agents: [
    { type: 'coordinator', role: 'task_delegation' },
    { type: 'analyst', role: 'data_analysis' },
    { type: 'coder', role: 'code_generation' },
    { type: 'optimizer', role: 'performance_tuning' }
  ],
  memory: {
    namespaces: {
      'swarm-state': { ttl: '1h' },
      'task-queue': { ttl: '2h' },
      'shared-knowledge': { ttl: '24h' }
    }
  },
  taskStrategy: 'adaptive'  // Self-organizing distribution
});

// Start the swarm
await swarm.start();

// Monitor performance
swarm.on('metrics', (data) => {
  console.log(`Active agents: ${data.activeAgents}`);
  console.log(`Tasks completed: ${data.completedTasks}`);
  console.log(`Avg latency: ${data.avgLatency}ms`);
});
```

---

## 7. Production Readiness Checklist

### **Comp**lete **Check**list for **Go**ing **Li**ve

---

### Phase 1: Infrastructure Provisioning

- [ ] **Cl**oud provider account created and verified
- [ ] **AP**I credentials secured and encrypted
- [ ] **Ter**raform/OpenTofu installed and configured
- [ ] **An**sible installed with required collections
- [ ] **Rou**ghneck cloned and dependencies installed

**Ver**ification Command:
```bash
./roughneck --help
# Should display available commands
```

---

### Phase 2: Environment Configuration

- [ ] **Pro**vider-specific settings configured in terraform.tfvars
- [ ] **Fee**ature flags set (Gas Town, Beads, etc.)
- [ ] **SS**H keys generated or imported
- [ ] **Fir**ewall rules planned (ports 22, 4222, 8585, 10000)
- [ ] **DN**S records prepared (if using Let's Encrypt)

**Con**figuration Template:
```hcl
# terraform.tfvars
project_name = "production-gastown"
provider = "hetzner"
region = "fsn1"
instance_type = "cx31"
enable_gastown = true
enable_beads = true
enable_systemd_services = true
```

---

### Phase 3: Deployment Execution

- [ ] **Ter**raform init successful
- [ ] **Ter**raform plan reviewed (no unexpected changes)
- [ ] **Ter**raform apply completed without errors
- [ ] **An**sible playbook executed successfully
- [ ] **All** services validated via health checks

**Dep**loyment Command:
```bash
./roughneck new production-gastown
# Follow interactive prompts
```

---

### Phase 4: Service Verification

- [ ] **SS**H access working
- [ ] **Gas** Town Mayor service running
- [ ] **Gas** Town Deacon service running
- [ ] **Be**ads CLI functional
- [ ] **Cl**aude Code CLI functional
- [ ] **cod**e-server accessible (if enabled)
- [ ] **Doc**ker engine running

**Ver**ification Commands:
```bash
./roughneck ssh production-gastown

# On remote VM:
gt version           # Gas Town CLI
bd version           # Beads CLI
claude --version     # Claude Code CLI
systemctl status roughneck-mayor
systemctl status roughneck-deacon
docker info
```

---

### Phase 5: NATS/Station Setup (If Using)

- [ ] **STA**tion CLI installed
- [ ] **NAT**S server running (orchestrator mode)
- [ ] **Jet**Stream persistence configured
- [ ] **Mem**ber stations connected
- [ ] **Age**nt registration confirmed
- [ ] **Jae**ger tracing operational

**Ver**ification Commands:
```bash
stn status
stn lattice --nats nats://localhost:4222 status
stn lattice --nats nats://localhost:4222 agents
curl http://localhost:16686/api/traces
```

---

### Phase 6: Agentic-Flow Production Configuration

- [ ] **Nod**e.js 18+ installed
- [ ] **Age**ntic-Flow package installed
- [ ] **Age**ntDB initialized with HNSW indexing
- [ ] **Rea**soningBank configured
- [ ] **QUI**C transport enabled (if using)
- [ ] **Met**rics export configured

**Ver**ification Commands:
```bash
npx agentic-flow --version
npx agentic-flow doctor
npx agentdb status
```

---

### Phase 7: User Interface Layer

- [ ] **Dis**cord bot created (if using Kimaki)
- [ ] **Bot** intents enabled (Server Members, Message Content)
- [ ] **Kim**aki connected to project directories
- [ ] **Per**missions configured (Kimaki role created)
- [ ] **Voi**ce features configured (if using)

**Ver**ification:
```
After running npx kimaki, you should see:
- Connected to Discord as YourBotName#1234
- Registered 15 slash commands
- Watching N project channels
```

---

### Phase 8: Monitoring and Alerting

- [ ] **Log**ging configured (systemd journal or external)
- [ ] **Met**rics collection enabled
- [ ] **Ale**rt thresholds defined
- [ ] **Bac**kup strategy implemented
- [ ] **Dis**aster recovery plan documented

---

### Phase 9: Security Hardening

- [ ] **SS**H key-only authentication (password disabled)
- [ ] **Fir**ewall rules locked down
- [ ] **AP**I keys rotated from defaults
- [ ] **TL**S enabled for all external endpoints
- [ ] **Sec**rets management solution in place

---

### Phase 10: Documentation

- [ ] **Run**book created for common operations
- [ ] **Inc**ident response procedures documented
- [ ] **Sca**ling procedures documented
- [ ] **Tea**m access credentials distributed securely

---

## 8. Mental Models

### Mental Model 1: The Factory Construction Metaphor

```
TRADITIONAL FACTORY          INFRASTRUCTURE EQUIVALENT
--------------------        ---------------------------

Land                         Cloud provider account
Building contractor          Roughneck CLI
Blueprints                   Terraform modules
Interior setup               Ansible playbooks
Factory floor                Gas Town
Workers                      Polecats (AI agents)
Factory manager              Mayor
Quality control              Deacon/Witness
Work orders                  Beads
Communication system         NATS/Station
Security guards              Authentication layer
Visitor reception            Kimaki (Discord interface)
```

**Men**tal shortcut: Roughneck is the construction company. Gas Town is the factory floor. Station is the communication backbone. Kimaki is the reception desk.

### Mental Model 2: The Three-Layer Stack

```
+---------------------------------------------------------------------+
|  LAYER 3: ORCHESTRATION                                              |
|  +---------------------------------------------------------------+  |
|  |  Gas Town / Agentic-Flow - Manages agents, assigns work       |  |
|  |  "The factory floor operations"                               |  |
|  +---------------------------------------------------------------+  |
+---------------------------------------------------------------------+
|  LAYER 2: MESSAGING & DATA                                           |
|  +---------------------------------------------------------------+  |
|  |  Station/NATS + Beads - Coordination & memory                 |  |
|  |  "The nervous system and memory"                              |  |
|  +---------------------------------------------------------------+  |
+---------------------------------------------------------------------+
|  LAYER 1: COMPUTE INFRASTRUCTURE                                     |
|  +---------------------------------------------------------------+  |
|  |  Roughneck + Cloud Providers - VMs, networking, storage       |  |
|  |  "The physical foundation"                                    |  |
|  +---------------------------------------------------------------+  |
+---------------------------------------------------------------------+
```

### Mental Model 3: The Kubernetes Analogy

```
KUBERNETES CONCEPT           ROUGHNECK/GAS TOWN EQUIVALENT
------------------           -----------------------------

Cluster                      Gas Town HQ
Node                         Rig (project)
kubelet                      Witness
Pod                          Polecat (agent)
kube-scheduler               Mayor
etcd                         Beads / JetStream
kubectl                      gt CLI / stn CLI
Terraform (infra)            Roughneck
Service Mesh                 Station Lattice
Ingress                      Kimaki (Discord interface)
```

### Mental Model 4: The Event Sourcing Model

**All** state changes are **ev**ents in a **str**eam:

```
Timeline:
---------
StationJoined --> AgentRegistered --> WorkAssigned --> WorkProgress --> WorkCompleted
     |                 |                    |               |               |
     v                 v                    v               v               v
  JetStream         JetStream           JetStream       JetStream       JetStream
  (persisted)       (persisted)         (persisted)     (persisted)     (persisted)
```

**You** can:
- **Rep**lay history to reconstruct state
- **Que**ry temporal ranges for debugging
- **Nev**er lose data (append-only)

---

## 9. Checkpoints

### Checkpoint 1: Roughneck Installation

<div style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Check**point: Roughneck CLI Operational

**You** should see:
```bash
$ ./roughneck --help
Usage: roughneck [OPTIONS] COMMAND [ARGS]...

Commands:
  new          Create a new deployment
  deploy       Deploy an existing configuration
  destroy      Remove infrastructure
  list         List all deployments
  ...
```

**If** you don't see this:
- Verify Python 3.10+ is installed: `python --version`
- Check you're in the roughneck directory
- Run: `pip install typer rich questionary requests`

</div>

---

### Checkpoint 2: Successful VM Deployment

<div style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Check**point: Infrastructure Provisioned

**You** should see:
```
+ Terraform init complete
+ Terraform apply complete
+ Ansible playbook complete
+ All services validated

Deployment 'my-gastown' ready!
  IP: 65.21.xxx.xxx
  SSH: ./roughneck ssh my-gastown
  IDE: http://65.21.xxx.xxx:10000
```

**If** you don't see this:
- Check cloud provider credentials
- Verify API token permissions
- Review Terraform error output in `deployments/<name>/terraform/`
- Check Ansible connectivity: `ansible -i inventory.ini all -m ping`

</div>

---

### Checkpoint 3: Gas Town Running

<div style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Check**point: Agent Orchestration Active

**You** should see:
```bash
$ ./roughneck ssh my-gastown
$ gt version
Gas Town v0.x.x

$ bd version
Beads v0.x.x

$ systemctl status roughneck-mayor
  roughneck-mayor.service
   Active: active (running)
```

**If** you don't see this:
- Verify `enable_gastown = true` in terraform.tfvars
- Re-run provisioning: `./roughneck provision my-gastown`
- Check Go installation: `go version`
- Check PATH: `echo $PATH | grep go/bin`

</div>

---

### Checkpoint 4: Station/NATS Operational

<div style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Check**point: Messaging Backbone Active

**You** should see:
```bash
# CLI installed
$ stn version
Station CLI vX.X.X

# Jaeger running
$ curl http://localhost:16686/api/traces
# JSON response

# Station running
$ stn status
Station is running

# Lattice operational
$ stn lattice --nats nats://localhost:4222 status
Connection successful, station listed

# Agents registered
$ stn lattice --nats nats://localhost:4222 agents
List of registered agents
```

**If** you don't see this:
- Verify NATS port is open: `nc -zv localhost 4222`
- Check orchestrator is running with `--orchestration` flag
- Verify URL format: `nats://host:port` (not `http://`)
- Check firewall allows port 4222

</div>

---

### Checkpoint 5: Agentic-Flow Ready

<div style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Check**point: Production Platform Active

**You** should see:
```bash
$ npx agentic-flow doctor
Agentic-Flow Health Check
-----------------------------------------
+ Node.js version: 18.x (required: >=18)
+ TypeScript version: 5.9 (required: >=5.9)
+ Anthropic API key: configured
+ AgentDB: initialized
+ ReasoningBank: ready
+ QUIC transport: available
+ Flash Attention: supported

Status: HEALTHY
```

**If** you don't see this:
- Check Node.js version: `node --version`
- Verify API key: `echo $ANTHROPIC_API_KEY | head -c 10`
- Initialize AgentDB: `npx agentdb init --path ./data/agentdb`

</div>

---

### Checkpoint 6: Kimaki Discord Interface

<div style="background: #f0ebe3; border-left: 4px solid #6b9b7a; border-radius: 8px; padding: 1.5rem; margin: 2rem 0;">

**Check**point: User Interface Layer Active

**You** should see:
```
After running npx kimaki:

+ Connected to Discord as YourBotName#1234
+ Registered 15 slash commands
+ Watching 3 project channels
```

**Channel** topic should show:
```xml
<kimaki>
  <directory>/path/to/your/project</directory>
</kimaki>
```

**If** you don't see this:
- Enable Discord intents (Server Members, Message Content)
- Verify bot token is correct
- Check bot has necessary permissions
- Run `npx kimaki --add-channels` to link projects

</div>

---

## 10. Troubleshooting

### Infrastructure Provisioning Issues

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Terraform init failed</strong>
</summary>
<div style="padding: 1rem;">

**Sym**ptoms:
```
Error: Failed to query available provider packages
```

**Sol**utions:
1. Check internet connectivity
2. Verify Terraform version: `terraform --version` (needs 1.0+)
3. Try OpenTofu instead: `brew install opentofu`
4. Clear cache: `rm -rf .terraform*`

</div>
</details>

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Ansible connection refused</strong>
</summary>
<div style="padding: 1rem;">

**Sym**ptoms:
```
fatal: [target]: UNREACHABLE! => {"msg": "Failed to connect to the host"}
```

**Sol**utions:
1. Wait 2-3 minutes for VM to fully boot
2. Verify SSH key: `ssh -i deployments/<name>/generated_key root@<ip>`
3. Check cloud firewall allows SSH (port 22)
4. Verify inventory file: `cat deployments/<name>/inventory.ini`

</div>
</details>

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Gas Town not installed</strong>
</summary>
<div style="padding: 1rem;">

**Sym**ptoms:
```bash
$ gt version
-bash: gt: command not found
```

**Sol**utions:
1. Check feature flag: `grep enable_gastown deployments/<name>/terraform.tfvars`
2. Source bash profile: `source ~/.bashrc`
3. Check PATH: `echo $PATH | grep go/bin`
4. Verify Go binary: `ls ~/go/bin/gt`

</div>
</details>

---

### NATS/Station Issues

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Failed to connect to NATS</strong>
</summary>
<div style="padding: 1rem;">

**Sym**ptoms:
```
failed to connect to NATS: connection refused
```

**Sol**utions:
1. Verify orchestrator is running: `stn status`
2. Check NATS port: `nc -zv localhost 4222`
3. Verify firewall allows port 4222
4. Check URL format: `nats://host:port` (not `http://`)

</div>
</details>

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Authentication failed</strong>
</summary>
<div style="padding: 1rem;">

**Sol**utions:
1. Verify credentials match orchestrator config
2. Check credential file permissions: `chmod 600 creds.txt`
3. Try token auth as fallback
4. Check orchestrator logs for auth errors

</div>
</details>

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Agent not appearing in mesh</strong>
</summary>
<div style="padding: 1rem;">

**Sol**utions:
1. Check station registration: `stn lattice status`
2. Verify agent name is unique across mesh
3. Check presence heartbeat is running
4. Review conflict detection logs

</div>
</details>

---

### Agentic-Flow Issues

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: HNSW index building is slow</strong>
</summary>
<div style="padding: 1rem;">

**Sym**ptoms:
- 183-516ms per vector insertion
- AgentDB CLI unresponsive

**Sol**utions:
1. Use batch insertion:
```typescript
await db.batchStore(vectors, { batchSize: 100 });
```

2. Enable WASM acceleration:
```typescript
const db = new AgentDB({
  acceleration: 'wasm',
  indexBuildMode: 'background'
});
```

3. Pre-build index offline:
```bash
npx agentdb index build --input vectors.json --output ./data/agentdb
```

</div>
</details>

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Swarm agents not connecting</strong>
</summary>
<div style="padding: 1rem;">

**Sym**ptoms:
- Workers stuck in "connecting" state
- Coordinator shows 0 workers

**Check**list:
1. Verify network connectivity:
```bash
docker exec worker curl http://coordinator:3000/health
```

2. Check coordinator logs:
```bash
docker logs coordinator --tail 100
```

3. Verify environment variables:
```bash
docker exec worker env | grep COORDINATOR
```

4. Ensure QUIC ports are open (if using):
```bash
nc -uz coordinator 4433
```

</div>
</details>

---

### Kimaki/Discord Issues

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Missing required intents</strong>
</summary>
<div style="padding: 1rem;">

**Fix:**
1. Go to https://discord.com/developers/applications
2. Select your bot -> Bot settings
3. Enable "Server Members Intent"
4. Enable "Message Content Intent"
5. Restart Kimaki

</div>
</details>

<details style="border: 1px solid #c97065; border-radius: 8px; margin: 1rem 0;">
<summary style="background: #fef6f5; padding: 1rem; cursor: pointer; color: #c97065;">
<strong>Error: Bot doesn't respond to messages</strong>
</summary>
<div style="padding: 1rem;">

**Cau**ses:
1. User lacks permission (not admin/owner/Kimaki role)
2. Channel not linked to project
3. Message Content Intent disabled

**Fix**es:
1. Assign "Kimaki" role to user
2. Run `npx kimaki --add-channels` and select the project
3. Enable Message Content Intent in Discord developer portal

</div>
</details>

---

## 11. Integration Patterns

### Pattern Matrix

| **Com**bination | **Use** **Ca**se | **Comp**lexity | **Val**ue |
|-----------------|------------------|----------------|-----------|
| **Rou**ghneck + Gas Town | Single agent factory in cloud | Medium | High |
| **Rou**ghneck + Multi-Gas Town | Environment isolation (prod/dev) | Medium | Very High |
| **Sta**tion + Gas Town | NATS messaging layer for factory | High | High |
| **Sta**tion + Ralph | Message-driven continuous loops | Medium | Medium |
| **Age**ntic-Flow + Ralph | Production Ralph with persistence | Medium | High |
| **Age**ntic-Flow + Gas Town | Factory-scale with enterprise features | High | Very High |
| **Kim**aki + Ralph | Discord interface for iteration loops | Medium | High |
| **Kim**aki + Gas Town | Discord monitoring for factory output | Medium | High |
| **Fu**ll Stack (All) | Complete enterprise deployment | Very High | Maximum |

### Full Stack Integration Architecture

```
+==============================================================================+
|                     COMPLETE PRODUCTION INFRASTRUCTURE                        |
+==============================================================================+
|                                                                               |
|   DISCORD (KIMAKI)                                                            |
|   +-------------------------------------------------------------------------+ |
|   |  #ralph-project  |  #gastown-control  |  #alerts  |  voice: dev-chat   | |
|   +-------------------------------------------------------------------------+ |
|                                       |                                       |
|                                       v                                       |
|   ORCHESTRATION (GAS TOWN + AGENTIC-FLOW)                                     |
|   +-------------------------------------------------------------------------+ |
|   |  Mayor (Coordinator)  |  Dogs (Workers)  |  Refinery (Code Processing)  | |
|   |  66 specialized agents  |  Hierarchical swarms  |  ReasoningBank        | |
|   +-------------------------------------------------------------------------+ |
|                                       |                                       |
|                                       v                                       |
|   MESSAGING (STATION + NATS)                                                  |
|   +-------------------------------------------------------------------------+ |
|   |  JetStream Persistence  |  Lattice Mesh  |  Presence Heartbeats         | |
|   |  Event Sourcing  |  KeyValue Stores  |  Work Distribution               | |
|   +-------------------------------------------------------------------------+ |
|                                       |                                       |
|                                       v                                       |
|   COMPUTE (ROUGHNECK)                                                         |
|   +-------------------------------------------------------------------------+ |
|   |  gastown-prod (Hetzner fsn1)  |  gastown-dev (AWS us-east-1)            | |
|   |  gastown-eu (Hetzner nbg1)    |  gastown-staging (DO nyc1)              | |
|   +-------------------------------------------------------------------------+ |
|                                                                               |
+==============================================================================+
```

### Integration Pattern 1: Geographic Distribution

```
+-----------------------------------------------------------------------------+
|                    GEOGRAPHIC DISTRIBUTION PATTERN                           |
+-----------------------------------------------------------------------------+
|                                                                              |
|        US (AWS us-east-1)    EU (Hetzner fsn1)    APAC (DO sgp1)            |
|               |                     |                   |                    |
|               v                     v                   v                    |
|   +------------------+  +------------------+  +------------------+           |
|   |  gastown-us      |  |  gastown-eu      |  |  gastown-apac    |           |
|   |                  |  |                  |  |                  |           |
|   |  US projects     |  |  EU projects     |  |  APAC projects   |           |
|   |  Low latency     |  |  GDPR compliant  |  |  Local dev team  |           |
|   +------------------+  +------------------+  +------------------+           |
|               |                     |                   |                    |
|               +---------------------+-------------------+                    |
|                                     |                                        |
|                              Station NATS Mesh                               |
|                         (Cross-region coordination)                          |
|                                                                              |
|   USE CASE: Global team with regional compliance requirements                |
|                                                                              |
+-----------------------------------------------------------------------------+
```

### Integration Pattern 2: Federated Gas Towns

```
+-----------------------------------------------------------------------------+
|                    FEDERATED GAS TOWNS PATTERN                               |
+-----------------------------------------------------------------------------+
|                                                                              |
|                         Shared Git Remote                                    |
|                     (GitHub / GitLab / Gitea)                                |
|                              |                                               |
|              +---------------+---------------+                               |
|              |               |               |                               |
|              v               v               v                               |
|   +------------------+ +------------------+ +------------------+             |
|   |  Gas Town 1      | |  Gas Town 2      | |  Gas Town 3      |             |
|   |  (Frontend)      | |  (Backend)       | |  (Infra)         |             |
|   |                  | |                  | |                  |             |
|   |  Beads: fe-*     | |  Beads: be-*     | |  Beads: infra-*  |             |
|   |  Worktrees: UI   | |  Worktrees: API  | |  Worktrees: TF   |             |
|   +------------------+ +------------------+ +------------------+             |
|              |               |               |                               |
|              +---------------+---------------+                               |
|                              |                                               |
|                         Git Push/Pull                                        |
|                    (Beads sync via git)                                      |
|                                                                              |
|   USE CASE: Specialized Gas Towns per domain, coordinated via shared repo   |
|                                                                              |
+-----------------------------------------------------------------------------+
```

### Integration Pattern 3: Discord as Unified Control Plane

```
Discord Server: "My Dev Operations"
+-- #ralph-main-project     (Kimaki --> Ralph loop)
+-- #gas-town-control       (Kimaki --> Gas Town Mayor)
+-- #gas-town-alerts        (Notifications from Deacon)
+-- #quick-tasks            (Kimaki --> Ad-hoc requests)
+-- #ci-cd-channel          (Build notifications)
+-- Voice: dev-conversations (Voice coding)

Benefits:
- Single interface for all AI coding operations
- Mobile access to entire development infrastructure
- Team visibility into ongoing automated work
- Voice support for hands-free interaction
```

---

## 12. Source Attribution

### Primary Sources

| **Ext**raction | **Rep**ository | **Aut**hor |
|----------------|----------------|------------|
| Roughneck | https://github.com/mjtechguy/roughneck | mjtechguy |
| Station | https://github.com/cloudshipai/station | CloudShip AI |
| Agentic-Flow | https://github.com/ruvnet/agentic-flow | Reuven Cohen |
| Kimaki | https://github.com/remorses/kimaki | Tommy Morello |

### Extraction File References

| **Top**ic | **Fi**le |
|-----------|----------|
| **Ter**raform/Ansible provisioning | `extractions/orchestration/036-roughneck-multi-gastown.md` |
| **NA**TS backbone | `extractions/orchestration/037-station-nats.md` |
| **Pro**duction deployment | `extractions/infrastructure/005-agentic-flow-deploy.md` |
| **Dis**cord interface | `extractions/infrastructure/006-kimaki-discord.md` |

### Related Synthesis Documents

| **Doc**ument | **Rel**evance |
|--------------|---------------|
| `synthesis/architecture-complexity-ladder.md` | Where these tools fit (Level 6-7) |
| `synthesis/mastery-ralph-complete.md` | Ralph pattern for continuous loops |
| `extractions/orchestration/022-gas-town-deep-dive.md` | Gas Town architecture details |
| `synthesis/MASTER-PLAYBOOK.md` | Complete capability progression |

### Reliability Ratings

| **Sou**rce | **Mat**urity | **Doc**umentation | **Com**munity |
|------------|--------------|-------------------|---------------|
| **Rou**ghneck | Active development | Medium (core documented) | Small |
| **Sta**tion | Active development | High (extensive docs) | Medium |
| **Age**ntic-Flow | Alpha (v2.0.1-alpha) | High (241+ files) | Growing (385+ stars) |
| **Kim**aki | Production-ready (v0.4.37) | High | Small |

---

## Quick Reference Card

```
+==============================================================================+
|                    INFRASTRUCTURE STACK QUICK REFERENCE                       |
+==============================================================================+
|                                                                               |
|   ROUGHNECK (Infrastructure Provisioning)                                     |
|   -----------------------------------------------------------------------    |
|   ./roughneck new <name>           Create new deployment                     |
|   ./roughneck deploy <name>        Deploy configuration                      |
|   ./roughneck ssh <name>           SSH into VM                               |
|   ./roughneck validate <name>      Health check                              |
|   ./roughneck destroy <name>       Tear down                                 |
|                                                                               |
|   STATION (NATS Messaging)                                                    |
|   -----------------------------------------------------------------------    |
|   stn init --provider anthropic    Initialize                                |
|   stn up                           Start services                            |
|   stn serve --orchestration        Run as orchestrator                       |
|   stn serve --lattice <url>        Run as member                             |
|   stn lattice status               Check mesh status                         |
|                                                                               |
|   AGENTIC-FLOW (Production Platform)                                          |
|   -----------------------------------------------------------------------    |
|   npx agentic-flow doctor          Health check                              |
|   npx agentic-flow swarm status    Swarm status                              |
|   npx agentdb init                 Initialize vector DB                      |
|   npx agentic-flow reasoningbank   Memory management                         |
|   npx agentic-flow quic server     Start QUIC transport                      |
|                                                                               |
|   KIMAKI (Discord Interface)                                                  |
|   -----------------------------------------------------------------------    |
|   npx kimaki                       Interactive setup                         |
|   npx kimaki --add-channels        Link projects                             |
|   npx kimaki send --channel <id>   Programmatic message                      |
|   /session, /resume, /fork         Discord commands                          |
|                                                                               |
|   KEY PORTS                                                                   |
|   -----------------------------------------------------------------------    |
|   22     - SSH                                                               |
|   4222   - NATS                                                              |
|   4433   - QUIC                                                              |
|   8222   - NATS HTTP monitoring                                              |
|   8585   - Station Web UI                                                    |
|   8586   - Station MCP Server                                                |
|   10000  - code-server IDE                                                   |
|   16686  - Jaeger UI                                                         |
|                                                                               |
|   COST QUICK REFERENCE                                                        |
|   -----------------------------------------------------------------------    |
|   Development:  Hetzner cx21  ~$4/mo                                         |
|   Production:   Hetzner cx31  ~$10/mo                                        |
|   High-Perf:    AWS t3.xlarge ~$150/mo                                       |
|                                                                               |
+==============================================================================+
```

---

## Document Metadata

| **Fi**eld | **Val**ue |
|-----------|-----------|
| **Syn**thesis ID | infrastructure-stack-blueprint |
| **Cat**egory | synthesis/infrastructure |
| **Lin**es | 2,200+ |
| **Cre**ated | 2026-01-19 |
| **Aut**hor | Claude (Opus 4.5) |
| **Sou**rce Type | Multi-extraction synthesis |
| **Inp**ut Files | 4 extraction documents |

---

## Tags

`#infrastructure` `#deployment` `#terraform` `#ansible` `#nats` `#station` `#agentic-flow` `#kimaki` `#discord` `#multi-cloud` `#production` `#gas-town` `#level-6` `#level-7` `#factory-pattern` `#messaging` `#orchestration`

---

## Appendix A: Complete Docker Deployment Configurations

### Single Container Development Setup

```dockerfile
# Dockerfile.dev
FROM node:18-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    git \
    python3 \
    py3-pip \
    curl \
    openssh-client

# Install Roughneck dependencies
RUN pip3 install --no-cache-dir \
    typer \
    rich \
    questionary \
    requests

# Install Agentic-Flow
COPY package*.json ./
RUN npm ci --production

COPY . .

# Initialize AgentDB data directory
RUN mkdir -p /data/agentdb

ENV NODE_ENV=development
ENV AGENTDB_PATH=/data/agentdb

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

```yaml
# docker-compose.dev.yml
version: '3.8'

services:
  agentic-flow-dev:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app:cached
      - agentdb-dev-data:/data/agentdb
      - node_modules:/app/node_modules
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - SONA_PROFILE=balanced
      - ATTENTION_TYPE=flash
      - NODE_ENV=development
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

volumes:
  agentdb-dev-data:
  node_modules:
```

### Multi-Container Production Swarm

```yaml
# docker-compose.production.yml
version: '3.8'

services:
  # ===== COORDINATOR =====
  coordinator:
    image: agentic-flow:latest
    command: ["npx", "agentic-flow", "swarm", "coordinator"]
    ports:
      - "3000:3000"
      - "4433:4433"  # QUIC
    environment:
      - ROLE=coordinator
      - SWARM_TOPOLOGY=hierarchical
      - QUIC_ENABLED=true
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - CONSENSUS_MECHANISM=raft
      - REPLICATION_FACTOR=3
    volumes:
      - coordinator-data:/data
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '4'
          memory: 8G
        reservations:
          cpus: '2'
          memory: 4G
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - swarm-network

  # ===== WORKERS =====
  worker:
    image: agentic-flow:latest
    command: ["npx", "agentic-flow", "swarm", "worker"]
    environment:
      - ROLE=worker
      - COORDINATOR_URL=http://coordinator:3000
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - WORKER_SPECIALIZATION=general
    deploy:
      replicas: 8
      resources:
        limits:
          cpus: '2'
          memory: 4G
        reservations:
          cpus: '1'
          memory: 2G
      update_config:
        parallelism: 2
        delay: 10s
      restart_policy:
        condition: on-failure
    depends_on:
      - coordinator
    networks:
      - swarm-network

  # ===== AGENTDB =====
  agentdb:
    image: agentic-flow:latest
    command: ["npx", "agentdb", "server"]
    ports:
      - "6379:6379"
    volumes:
      - agentdb-data:/data
    environment:
      - INDEX_TYPE=hnsw
      - QUANTIZATION=true
      - MAX_MEMORY=6G
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '4'
          memory: 8G
    healthcheck:
      test: ["CMD", "npx", "agentdb", "health"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - swarm-network

  # ===== REASONINGBANK =====
  reasoningbank:
    image: agentic-flow:latest
    command: ["npx", "agentic-flow", "reasoningbank", "server"]
    environment:
      - AGENTDB_URL=http://agentdb:6379
      - CONFIDENCE_THRESHOLD=0.8
      - PATTERN_TTL=7d
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '2'
          memory: 4G
    depends_on:
      - agentdb
    networks:
      - swarm-network

  # ===== NATS (STATION) =====
  nats:
    image: nats:alpine
    command: ["-js", "-sd", "/data", "-m", "8222"]
    ports:
      - "4222:4222"
      - "8222:8222"
    volumes:
      - nats-data:/data
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '2'
          memory: 2G
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:8222/healthz"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - swarm-network

  # ===== JAEGER =====
  jaeger:
    image: jaegertracing/all-in-one:latest
    ports:
      - "16686:16686"
      - "4317:4317"
      - "4318:4318"
    environment:
      - COLLECTOR_OTLP_ENABLED=true
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '1'
          memory: 2G
    networks:
      - swarm-network

  # ===== PROMETHEUS =====
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro
      - prometheus-data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.enable-lifecycle'
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '1'
          memory: 2G
    networks:
      - swarm-network

  # ===== GRAFANA =====
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    volumes:
      - grafana-data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
      - GF_USERS_ALLOW_SIGN_UP=false
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '1'
          memory: 1G
    depends_on:
      - prometheus
    networks:
      - swarm-network

networks:
  swarm-network:
    driver: overlay
    attachable: true

volumes:
  coordinator-data:
  agentdb-data:
  nats-data:
  prometheus-data:
  grafana-data:
```

### Kubernetes Production Deployment

```yaml
# k8s/namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: agentic-flow
  labels:
    app.kubernetes.io/name: agentic-flow
    app.kubernetes.io/component: ai-orchestration
---
# k8s/secrets.yaml
apiVersion: v1
kind: Secret
metadata:
  name: api-keys
  namespace: agentic-flow
type: Opaque
stringData:
  anthropic: "${ANTHROPIC_API_KEY}"
  openai: "${OPENAI_API_KEY}"
  openrouter: "${OPENROUTER_API_KEY}"
---
# k8s/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: agentic-flow-config
  namespace: agentic-flow
data:
  SWARM_TOPOLOGY: "hierarchical"
  SONA_PROFILE: "balanced"
  ATTENTION_TYPE: "flash"
  CONSENSUS_MECHANISM: "raft"
  QUIC_ENABLED: "true"
---
# k8s/coordinator-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: agentic-flow-coordinator
  namespace: agentic-flow
  labels:
    app: agentic-flow
    role: coordinator
spec:
  replicas: 1
  selector:
    matchLabels:
      app: agentic-flow
      role: coordinator
  template:
    metadata:
      labels:
        app: agentic-flow
        role: coordinator
    spec:
      containers:
      - name: coordinator
        image: agentic-flow:latest
        command: ["npx", "agentic-flow", "swarm", "coordinator"]
        ports:
        - containerPort: 3000
          name: http
        - containerPort: 4433
          name: quic
          protocol: UDP
        env:
        - name: ANTHROPIC_API_KEY
          valueFrom:
            secretKeyRef:
              name: api-keys
              key: anthropic
        envFrom:
        - configMapRef:
            name: agentic-flow-config
        resources:
          requests:
            memory: "4Gi"
            cpu: "2"
          limits:
            memory: "8Gi"
            cpu: "4"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 5
        volumeMounts:
        - name: data
          mountPath: /data
      volumes:
      - name: data
        persistentVolumeClaim:
          claimName: coordinator-pvc
---
# k8s/worker-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: agentic-flow-worker
  namespace: agentic-flow
  labels:
    app: agentic-flow
    role: worker
spec:
  replicas: 8
  selector:
    matchLabels:
      app: agentic-flow
      role: worker
  template:
    metadata:
      labels:
        app: agentic-flow
        role: worker
    spec:
      containers:
      - name: worker
        image: agentic-flow:latest
        command: ["npx", "agentic-flow", "swarm", "worker"]
        env:
        - name: COORDINATOR_URL
          value: "http://agentic-flow-coordinator:3000"
        - name: ANTHROPIC_API_KEY
          valueFrom:
            secretKeyRef:
              name: api-keys
              key: anthropic
        envFrom:
        - configMapRef:
            name: agentic-flow-config
        resources:
          requests:
            memory: "2Gi"
            cpu: "1"
          limits:
            memory: "4Gi"
            cpu: "2"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
---
# k8s/agentdb-statefulset.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: agentdb
  namespace: agentic-flow
spec:
  serviceName: agentdb
  replicas: 1
  selector:
    matchLabels:
      app: agentdb
  template:
    metadata:
      labels:
        app: agentdb
    spec:
      containers:
      - name: agentdb
        image: agentic-flow:latest
        command: ["npx", "agentdb", "server"]
        ports:
        - containerPort: 6379
          name: agentdb
        env:
        - name: INDEX_TYPE
          value: "hnsw"
        - name: QUANTIZATION
          value: "true"
        resources:
          requests:
            memory: "4Gi"
            cpu: "2"
          limits:
            memory: "8Gi"
            cpu: "4"
        volumeMounts:
        - name: agentdb-data
          mountPath: /data
  volumeClaimTemplates:
  - metadata:
      name: agentdb-data
    spec:
      accessModes: ["ReadWriteOnce"]
      storageClassName: fast-ssd
      resources:
        requests:
          storage: 100Gi
---
# k8s/services.yaml
apiVersion: v1
kind: Service
metadata:
  name: agentic-flow-coordinator
  namespace: agentic-flow
spec:
  selector:
    app: agentic-flow
    role: coordinator
  ports:
  - name: http
    port: 3000
    targetPort: 3000
  - name: quic
    port: 4433
    targetPort: 4433
    protocol: UDP
---
apiVersion: v1
kind: Service
metadata:
  name: agentdb
  namespace: agentic-flow
spec:
  selector:
    app: agentdb
  ports:
  - port: 6379
    targetPort: 6379
  clusterIP: None  # Headless for StatefulSet
---
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: worker-hpa
  namespace: agentic-flow
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: agentic-flow-worker
  minReplicas: 4
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Pods
        value: 2
        periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
```

---

## Appendix B: Prometheus Monitoring Configuration

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

rule_files:
  - /etc/prometheus/rules/*.yml

scrape_configs:
  # Agentic-Flow Coordinator
  - job_name: 'agentic-flow-coordinator'
    static_configs:
      - targets: ['coordinator:3000']
    metrics_path: /metrics
    scrape_interval: 10s

  # Agentic-Flow Workers
  - job_name: 'agentic-flow-workers'
    dns_sd_configs:
      - names:
          - 'tasks.worker'
        type: 'A'
        port: 3000
    metrics_path: /metrics
    scrape_interval: 10s

  # AgentDB
  - job_name: 'agentdb'
    static_configs:
      - targets: ['agentdb:6379']
    metrics_path: /metrics
    scrape_interval: 30s

  # NATS
  - job_name: 'nats'
    static_configs:
      - targets: ['nats:8222']
    metrics_path: /metrics
    scrape_interval: 10s

  # Jaeger
  - job_name: 'jaeger'
    static_configs:
      - targets: ['jaeger:14269']
    scrape_interval: 30s

  # Node Exporter (system metrics)
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']
    scrape_interval: 15s
```

### Alert Rules

```yaml
# prometheus-rules.yml
groups:
- name: agentic-flow-alerts
  rules:
  # Coordinator Health
  - alert: CoordinatorDown
    expr: up{job="agentic-flow-coordinator"} == 0
    for: 1m
    labels:
      severity: critical
    annotations:
      summary: "Agentic-Flow Coordinator is down"
      description: "The coordinator has been down for more than 1 minute"

  # Worker Availability
  - alert: WorkerPoolLow
    expr: count(up{job="agentic-flow-workers"} == 1) < 4
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "Worker pool below minimum"
      description: "Less than 4 workers available for more than 5 minutes"

  # Memory Usage
  - alert: HighMemoryUsage
    expr: container_memory_usage_bytes / container_spec_memory_limit_bytes > 0.85
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "High memory usage detected"
      description: "Container {{ $labels.name }} is using {{ $value | humanizePercentage }} of memory"

  # AgentDB Vector Index Health
  - alert: AgentDBSlowQueries
    expr: histogram_quantile(0.95, rate(agentdb_query_duration_seconds_bucket[5m])) > 0.1
    for: 10m
    labels:
      severity: warning
    annotations:
      summary: "AgentDB queries are slow"
      description: "P95 query latency is above 100ms"

  # NATS JetStream
  - alert: JetStreamConsumerLag
    expr: nats_jetstream_consumer_ack_pending > 1000
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "JetStream consumer has high pending acks"
      description: "Consumer {{ $labels.consumer }} has {{ $value }} pending messages"

  # Task Queue
  - alert: TaskQueueBacklog
    expr: agentic_flow_task_queue_size > 100
    for: 10m
    labels:
      severity: warning
    annotations:
      summary: "Task queue backlog growing"
      description: "{{ $value }} tasks pending in queue"
```

---

## Appendix C: Complete CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy Agentic-Flow Infrastructure

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deployment environment'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      image-tag: ${{ steps.meta.outputs.tags }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=sha,prefix=
            type=ref,event=branch
            type=semver,pattern={{version}}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: ${{ github.event_name != 'pull_request' }}
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-staging:
    needs: build
    if: github.event_name != 'pull_request'
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Roughneck
        run: |
          pip install typer rich questionary requests

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Update ECS Service
        run: |
          aws ecs update-service \
            --cluster agentic-flow-staging \
            --service coordinator \
            --force-new-deployment

      - name: Wait for deployment
        run: |
          aws ecs wait services-stable \
            --cluster agentic-flow-staging \
            --services coordinator

      - name: Notify Discord
        env:
          KIMAKI_BOT_TOKEN: ${{ secrets.KIMAKI_BOT_TOKEN }}
        run: |
          npx kimaki send \
            --channel ${{ secrets.DISCORD_DEPLOY_CHANNEL }} \
            --prompt "Staging deployment complete: ${{ github.sha }}" \
            --notify-only

  deploy-production:
    needs: [build, deploy-staging]
    if: github.ref == 'refs/heads/main' && github.event.inputs.environment == 'production'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Configure kubectl
        uses: azure/k8s-set-context@v3
        with:
          kubeconfig: ${{ secrets.KUBE_CONFIG }}

      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/agentic-flow-coordinator \
            coordinator=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} \
            -n agentic-flow

          kubectl set image deployment/agentic-flow-worker \
            worker=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} \
            -n agentic-flow

          kubectl rollout status deployment/agentic-flow-coordinator -n agentic-flow
          kubectl rollout status deployment/agentic-flow-worker -n agentic-flow

      - name: Run smoke tests
        run: |
          curl -f http://coordinator.agentic-flow.svc.cluster.local:3000/health || exit 1

      - name: Notify Discord
        env:
          KIMAKI_BOT_TOKEN: ${{ secrets.KIMAKI_BOT_TOKEN }}
        run: |
          npx kimaki send \
            --channel ${{ secrets.DISCORD_DEPLOY_CHANNEL }} \
            --prompt "Production deployment complete: ${{ github.sha }}" \
            --notify-only
```

---

## Appendix D: Security Hardening Checklist

### Infrastructure Security

- [ ] **SSH Key Authentication Only**
  ```bash
  # In /etc/ssh/sshd_config
  PasswordAuthentication no
  PubkeyAuthentication yes
  PermitRootLogin prohibit-password
  ```

- [ ] **Firewall Configuration**
  ```bash
  # UFW rules
  ufw default deny incoming
  ufw default allow outgoing
  ufw allow 22/tcp    # SSH
  ufw allow 4222/tcp  # NATS
  ufw allow 4433/udp  # QUIC
  ufw enable
  ```

- [ ] **TLS Everywhere**
  ```yaml
  # NATS TLS config
  tls:
    enabled: true
    cert: /certs/server.crt
    key: /certs/server.key
    ca: /certs/ca.crt
    verify: true
  ```

- [ ] **API Key Rotation**
  ```bash
  # Rotate every 90 days
  0 0 1 */3 * /scripts/rotate-api-keys.sh
  ```

- [ ] **Secrets Management**
  ```bash
  # Using age encryption
  age-keygen -o ~/.roughneck/age.key
  age -r $(age-keygen -y ~/.roughneck/age.key) -o secrets.age secrets.txt
  ```

### Network Security

- [ ] **Private Network Isolation**
  ```yaml
  # Docker network
  networks:
    internal:
      driver: bridge
      internal: true  # No external access
  ```

- [ ] **Rate Limiting**
  ```nginx
  # Nginx rate limiting
  limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

  location /api/ {
      limit_req zone=api burst=20 nodelay;
  }
  ```

- [ ] **NATS Authorization**
  ```yaml
  authorization:
    users:
      - user: coordinator
        password: $COORDINATOR_PASSWORD
        permissions:
          publish: ["lattice.>"]
          subscribe: ["lattice.>"]
      - user: worker
        password: $WORKER_PASSWORD
        permissions:
          publish: ["lattice.work.*.response"]
          subscribe: ["lattice.work.*.assign"]
  ```

---

## Appendix E: Backup and Disaster Recovery

### Backup Strategy

```bash
#!/bin/bash
# backup.sh - Daily backup script

BACKUP_DIR="/backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR

# AgentDB backup
echo "Backing up AgentDB..."
npx agentdb backup --output $BACKUP_DIR/agentdb.tar.gz

# JetStream backup
echo "Backing up NATS JetStream..."
nats stream backup -a -o $BACKUP_DIR/jetstream

# Terraform state backup
echo "Backing up Terraform state..."
for deployment in $(ls deployments/); do
    cp deployments/$deployment/terraform.tfstate \
       $BACKUP_DIR/terraform-$deployment.tfstate
done

# Compress and encrypt
echo "Encrypting backup..."
tar -czf - $BACKUP_DIR | \
    age -r $(cat /etc/backup-key.pub) > /backups/backup-$(date +%Y%m%d).tar.gz.age

# Upload to S3
echo "Uploading to S3..."
aws s3 cp /backups/backup-$(date +%Y%m%d).tar.gz.age \
    s3://backups-bucket/agentic-flow/

# Cleanup old local backups (keep 7 days)
find /backups -name "*.age" -mtime +7 -delete

echo "Backup complete!"
```

### Restore Procedure

```bash
#!/bin/bash
# restore.sh - Disaster recovery script

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
    echo "Usage: restore.sh <backup-file.tar.gz.age>"
    exit 1
fi

# Download from S3 if URL provided
if [[ $BACKUP_FILE == s3://* ]]; then
    aws s3 cp $BACKUP_FILE /tmp/restore.tar.gz.age
    BACKUP_FILE="/tmp/restore.tar.gz.age"
fi

# Decrypt
echo "Decrypting backup..."
age -d -i /etc/backup-key $BACKUP_FILE | tar -xzf - -C /tmp/restore/

# Restore AgentDB
echo "Restoring AgentDB..."
npx agentdb restore --input /tmp/restore/agentdb.tar.gz

# Restore JetStream
echo "Restoring JetStream..."
nats stream restore -a /tmp/restore/jetstream

# Restore Terraform state
echo "Restoring Terraform state..."
for state in /tmp/restore/terraform-*.tfstate; do
    deployment=$(basename $state .tfstate | sed 's/terraform-//')
    cp $state deployments/$deployment/terraform.tfstate
done

echo "Restore complete! Verify services with: ./roughneck validate"
```

### Recovery Time Objectives

| **Com**ponent | **RT**O | **RP**O | **Rec**overy Method |
|---------------|---------|---------|---------------------|
| **Age**ntDB | 30 min | 24 hours | Restore from backup |
| **Jet**Stream | 15 min | 1 hour | Stream restore |
| **Co**ordinator | 5 min | N/A | Redeploy from image |
| **Wor**kers | 2 min | N/A | Auto-heal via HPA |
| **Ter**raform state | 10 min | 24 hours | Restore + plan/apply |

---

## Final Notes

This **inf**rastructure **st**ack **blue**print represents the **com**plete **pat**h from **loc**al **dev**elopment to **pro**duction-**gr**ade **AI** **ag**ent **dep**loyment. The **com**bination of:

1. **Rou**ghneck for **inf**rastructure **pro**visioning
2. **Sta**tion/NATS for **mess**aging **back**bone
3. **Age**ntic-Flow for **pro**duction **fea**tures
4. **Kim**aki for **us**er **int**erfaces

...provides a **com**prehensive **sol**ution that **sc**ales from **sin**gle **dev**eloper to **ent**erprise **te**ams.

**Key** **tak**eaways:

- **St**art **sm**all with **Het**zner ($4/mo) and **sc**ale as **ne**eded
- **Us**e **Sta**tion's **lat**tice **me**sh for **mul**ti-machine **co**ordination
- **Le**verage **Rea**soningBank for **per**sistent **le**arning
- **Kim**aki **en**ables **mo**bile and **te**am **acc**ess via **Dis**cord
- **Fol**low the **che**cklist **me**thodically for **rel**iable **dep**loyments

For **ques**tions or **iss**ues, refer to the **tro**ubleshooting **sec**tion or the **in**dividual **ext**raction **doc**uments for **dee**per **de**tail.
