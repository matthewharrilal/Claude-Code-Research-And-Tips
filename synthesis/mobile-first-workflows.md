# Mobile-First Workflows: Phone as Command Center for AI Agent Orchestration

A comprehensive synthesis of mobile development patterns, remote infrastructure, and asynchronous workflows for running Claude Code from anywhere.

---

## D-FINAL Connection

**This synthesis integrates:**
- D-FINAL-implementation.md: Section 3 (Ralph Implementation - mobile oversight), Section 5 (Enterprise Implementation - parallel agent management)
- D-FINAL-operations.md: Section 1 (Monitoring - mobile dashboard patterns), Section 4 (Operational Checklists - mobile agent orchestration)

**Synthesis Sources:**
- extractions/mobility/005-superconductor-ios.md (Superconductor iOS architecture)
- extractions/infrastructure/004-system-remote-mac.md (SYSTEM remote Mac control)
- extractions/mobility/001-mobile-claude-code-dabit3.md (dabit3's phone-first workflow)
- extractions/orchestration/036-roughneck-multi-gastown.md (Multi-Gas Town provisioning)
- extractions/orchestration/037-station-nats.md (NATS-based agent coordination)
- synthesis/frontier-mobile.md (Mobile frontier patterns)

**Last updated:** 2026-01-19

---

## 1. You Are Here

```
+---------------------------------------------------------------------------------+
|                    MOBILE IN THE AGENTIC ARCHITECTURE LANDSCAPE                  |
+---------------------------------------------------------------------------------+
|                                                                                  |
|   COMPLEXITY LEVELS (Where Mobile Fits)                                          |
|   ======================================                                         |
|                                                                                  |
|   Level 7: Factory-Scale Autonomous      <--- Mobile as OVERSIGHT LAYER         |
|            (Gas Town, Station, Roughneck)    - Monitor distributed factories    |
|                                              - Trigger/approve from phone       |
|                                                                                  |
|   Level 5-6: Multi-Agent Orchestration   <--- Mobile as CONTROL PLANE           |
|              (Ralph, CC Mirror)              - Superconductor parallel agents   |
|                                              - SYSTEM remote execution          |
|                                                                                  |
|   Level 3-4: Session Persistence         <--- Mobile as PRIMARY INTERFACE       |
|              (tmux, worktrees)               - SSH/mosh workflows               |
|                                              - Push notification loops          |
|                                                                                  |
|   Level 1-2: Single Session              <--- Mobile as OCCASIONAL CHECK-IN     |
|              (Basic Claude Code)             - Quick responses                  |
|                                              - Status monitoring                |
|                                                                                  |
|   ============================================================================   |
|                                                                                  |
|                           +------------------+                                   |
|                           |  YOU ARE HERE    |                                   |
|                           |                  |                                   |
|                           |  Understanding   |                                   |
|                           |  mobile's role   |                                   |
|                           |  in orchestration|                                   |
|                           +------------------+                                   |
|                                                                                  |
+---------------------------------------------------------------------------------+
```

### **Wha**t This **Doc**ument **Cov**ers

This **syn**thesis **bri**ngs **tog**ether **mul**tiple **app**roaches to **mob**ile-first **dev**elopment with **Cla**ude **Co**de:

1. **Sup**erconductor **iOS** - **Nat**ive app for **par**allel **age**nt **orc**hestration
2. **SYS**TEM **Rem**ote **Mac** - **Bra**in/Tunnel/Body **arc**hitecture for **rem**ote **con**trol
3. **SSH**/tmux/**mosh** - **Ter**minal-based **mob**ile **acc**ess **pat**terns
4. **Inf**rastructure **Int**egration - **Rou**ghneck, **Sta**tion, **Gas** Town **con**nections

### **Pre**requisites

| Requirement | Description |
|-------------|-------------|
| **Cla**ude Code basics | Understanding of CLI and session management |
| **Mul**ti-agent patterns | Familiarity with Ralph, Gas Town concepts helpful |
| **API** keys | At least one provider (Anthropic, OpenAI, Amp, Gemini) |
| **Mob**ile device | iOS 16.6+ or Android with SSH client |

### **Key** Insight

> "**Ins**tead of **lon**g periods of **int**ense **foc**us, **sof**tware **dev**elopment can **now** just **fit** into the **gap**s of your **day**." - @dabit3

**Mob**ile **isn**'t about **rep**lacing your **lap**top. It's about your **pho**ne becoming a **com**mand **cen**ter for AI **age**nts **wor**king on your **beh**alf.

---

## 2. Superconductor iOS Architecture

### **Wha**t It Is

**Sup**erconductor is a **nat**ive iOS/macOS app for **orc**hestrating **mul**tiple AI **cod**ing **age**nts in **par**allel. **Cre**ated by **Ser**gey **Kar**ayev (PhD Berkeley, **co**-founder of **Gra**descope).

### **Cor**e Capability

```
Traditional Workflow:
  You -> Single Claude Agent -> Wait -> Result -> Maybe try again

Superconductor Workflow:
  You -> [Agent 1, Agent 2, Agent 3, Agent 4] -> Compare live previews -> Pick best -> PR
```

Instead of **ser**ial **ite**ration, you get **par**allel **exp**loration.

### **Arc**hitecture

```
+-------------------------------------------------------------------+
|  USER INTERFACES                                                   |
+-------------------------------------------------------------------+
|                                                                    |
|  [iOS App]         [Web App]         [Slack Bot]    [GitHub Bot]  |
|  - Native UI       - Full features   - Thread-aware - PR comments |
|  - Push notifs     - Dashboard       - Team collab  - @superconductor |
|  - Swipe preview   - Diff viewer     - Ticket create|             |
|                                                                    |
+-------------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------------+
|  SUPERCONDUCTOR CLOUD                                              |
+-------------------------------------------------------------------+
|                                                                    |
|  [Orchestration Layer]                                             |
|  - Ticket management                                               |
|  - Agent spawning                                                  |
|  - Environment provisioning                                        |
|  - Preview routing                                                 |
|                                                                    |
|  [Agent Sandboxes] (one per implementation attempt)                |
|  +-------------+  +-------------+  +-------------+                 |
|  | Agent 1     |  | Agent 2     |  | Agent 3     |                |
|  | - Claude    |  | - Codex     |  | - Claude    |                |
|  | - Full repo |  | - Full repo |  | - Full repo |                |
|  | - Preview   |  | - Preview   |  | - Preview   |                |
|  +-------------+  +-------------+  +-------------+                 |
|                                                                    |
+-------------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------------+
|  EXTERNAL SERVICES                                                 |
+-------------------------------------------------------------------+
|                                                                    |
|  [AI Providers]        [Git Hosting]      [User API Keys]         |
|  - Claude Code         - GitHub           - Anthropic (BYOK)      |
|  - OpenAI Codex        - PR creation      - OpenAI                |
|  - Amp                 - Comment sync     - Amp                   |
|  - Gemini                                 - Google                |
|  - Opencode                               - Opencode Zen          |
|                                                                    |
+-------------------------------------------------------------------+
```

### **Key** Features

| Feature | Description |
|---------|-------------|
| **Par**allel agents | 3-5 agents on same task simultaneously |
| **Liv**e previews | Real browser showing each agent's changes |
| **One**-click PR | Pick winner, create PR instantly |
| **Pus**h notifications | Agent status updates to your phone |
| **Swi**pe navigation | Browse between implementation previews |
| **Git**Hub integration | @superconductor in any comment triggers agents |
| **BYO**K model | Bring your own API keys, no markup |

### **Pla**tform Support

- **iOS** 16.6+ (iPhone)
- **iPa**dOS 16.6+ (iPad with multitasking)
- **mac**OS 13.5+ (Apple Silicon)
- **vis**ionOS 1.0+ (Apple Vision Pro)

### **Typ**ical Workflow

```
7:00 AM - iPhone
  Open Superconductor
  Create tickets for day's features
  Launch 3-4 agents per ticket
  Close app, commute to work

12:00 PM - iPhone
  Push notification: "5 implementations ready"
  Swipe through previews during lunch
  Pick best implementations
  One-click PR for 2 features

Result: 2 PRs created before afternoon
```

### **Cos**t Model

**Per**-Feature Estimate (from Karayev):
- **Sin**gle agent attempt: ~$5
- **Rec**ommended parallel (4 agents): ~$20
- **Cos**t-optimized (2 Sonnet + 1 Opus): ~$12

**Ver**dict: Pay ~$5 more, save 87 minutes. Worth it for most developers.

---

## 3. Mobile as Execution Surface

### **The** Paradigm **Shi**ft

**Mob**ile development **isn**'t about "**Cla**ude Code on **iPh**one." It's about your **pho**ne becoming the **con**trol plane for **dis**tributed AI **age**nts.

```
OLD MENTAL MODEL:
  Phone = Tiny computer for small tasks
  Laptop = Real work happens here

NEW MENTAL MODEL:
  Phone = Command center (triggers, monitors, approves)
  Cloud/Home = Compute surface (VMs, Macs, containers)
  Agents = Workers (run 24/7, ping you when needed)
```

### **Thr**ee Roles for **Mob**ile

#### **Rol**e 1: Oversight Layer

**Mon**itor factory-scale **ope**rations without being **pre**sent.

```
+-------------------------------------------------------------------+
|  FACTORY-SCALE MONITORING FROM PHONE                               |
+-------------------------------------------------------------------+
|                                                                    |
|  Your Phone                                                        |
|  +------------------+                                              |
|  | Notifications:   |                                              |
|  |                  |                                              |
|  | Gas Town Mayor:  |                                              |
|  | "5 tickets done" |                                              |
|  |                  |                                              |
|  | Ralph Loop:      |                                              |
|  | "Iteration 23"   |                                              |
|  |                  |                                              |
|  | Station:         |                                              |
|  | "SRE team alert" |                                              |
|  +------------------+                                              |
|          |                                                         |
|          v                                                         |
|  +------------------+  +------------------+  +------------------+  |
|  | Gas Town VM 1    |  | Gas Town VM 2    |  | Station Cluster  |  |
|  | 20 Polecats      |  | 15 Polecats      |  | 9 SRE agents     |  |
|  +------------------+  +------------------+  +------------------+  |
|                                                                    |
+-------------------------------------------------------------------+
```

#### **Rol**e 2: Control Plane

**Tri**gger agents, **app**rove work, **adj**ust direction **rem**otely.

```
CONTROL PLANE PATTERN:

Phone Action                      Result
-------------                     ------
Create Superconductor ticket  ->  4 parallel agents spawn
Run iOS Shortcut "Start Ralph" -> Ralph loop begins on VM
SYSTEM command "play jazz"    ->  Home Mac starts music
Approve PR in GitHub Mobile   ->  CI/CD triggers deploy
```

#### **Rol**e 3: Primary Interface

**SSH**/mosh for **ful**l terminal **acc**ess when **nee**ded.

```
+-------------------------------------------------------------------+
|  PHONE AS PRIMARY INTERFACE                                        |
+-------------------------------------------------------------------+
|                                                                    |
|  Phone (Termius)                                                   |
|       |                                                            |
|       | mosh (network-resilient)                                   |
|       v                                                            |
|  Cloud VM (Tailscale VPN)                                          |
|       |                                                            |
|       | auto-attach                                                |
|       v                                                            |
|  tmux (persistent sessions)                                        |
|       |                                                            |
|       +-> Window 1: Claude (auth-feature)                          |
|       +-> Window 2: Claude (dashboard)                             |
|       +-> Window 3: Claude (api-refactor)                          |
|       +-> Window 4: Claude (mobile-styles)                         |
|       +-> Window 5: Claude (tests)                                 |
|       +-> Window 6: Main shell                                     |
|                                                                    |
+-------------------------------------------------------------------+
```

---

## 4. Remote Agent Invocation Patterns

### **Pat**tern 1: SSH/mosh **Dir**ect Access

The **fou**ndational **pat**tern. **Per**sistent **ter**minal **ses**sions that **sur**vive **net**work changes.

**Arc**hitecture:
```
Phone -> SSH Client -> Tailscale VPN -> Cloud VM or Home Mac -> tmux -> Claude Code
```

**Set**up Steps:

1. **Ins**tall Tailscale on phone + Mac/VM
2. **Ins**tall Termius (iOS) or JuiceSSH (Android)
3. **Con**figure tmux auto-attach in `.zshrc`:
   ```bash
   if [[ -z "$TMUX" ]] && [[ -n "$SSH_CONNECTION" ]]; then
     tmux attach -t main 2>/dev/null || tmux new -s main
   fi
   ```
4. **Con**nect via Tailscale IP (100.x.x.x)

**Why** mosh over SSH:
- **Sur**vives WiFi -> cellular transitions
- **Per**sists through device sleep
- **Loc**al echo (feels faster on mobile)

### **Pat**tern 2: SYSTEM **Bra**in/Tunnel/Body

**Rem**ote Mac **con**trol via **nat**ural language. Your **pho**ne tells your **Mac** what to do.

**Arc**hitecture:
```
+-------------------------------------------------------------------+
|                         BRAIN                                      |
|                  (Cloudflare Worker)                              |
|                                                                    |
|  +-------------+  +-------------+  +---------------------+        |
|  | Claude AI   |  | Scheduling  |  | State Management    |        |
|  | Integration |  |   Engine    |  | (Durable Objects)   |        |
|  +-------------+  +-------------+  +---------------------+        |
|                                                                    |
|                        | HTTPS |                                  |
+-------------------------------------------------------------------+
                              |
                              | Bearer Token Auth
                              v
+-------------------------------------------------------------------+
|                        TUNNEL                                      |
|                    (HTTP Bridge)                                  |
|                                                                    |
|  +-------------+  +-------------+  +---------------------+        |
|  | Auth &      |  |    Rate     |  |     Request         |        |
|  | Validation  |  |   Limiting  |  |     Routing         |        |
|  +-------------+  +-------------+  +---------------------+        |
|                                                                    |
|                        | Local |                                  |
+-------------------------------------------------------------------+
                              |
                              | Tool Execution
                              v
+-------------------------------------------------------------------+
|                         BODY                                       |
|                    (macOS System)                                 |
|                                                                    |
|  +-------------+  +-------------+  +---------------------+        |
|  | AppleScript |  |    Shell    |  |     Raycast         |        |
|  |   Executor  |  |   Commands  |  |    Extensions       |        |
|  +-------------+  +-------------+  +---------------------+        |
|                                                                    |
+-------------------------------------------------------------------+
```

**Cap**abilities:
- **Mus**ic control (Apple Music via natural language)
- **Cal**endar/Reminders (query events, create reminders)
- **Not**es (create and search Apple Notes)
- **Sys**tem control (volume, display, notifications)
- **App**le Shortcuts (execute any Shortcut)
- **Ray**cast extensions (dynamic discovery)
- **Scr**eenshots (capture and analyze with Claude Vision)

**Exa**mple Usage:
```
From phone: "Take a screenshot and tell me what Ralph is working on"
Result: SYSTEM captures screen, Claude analyzes, returns summary
```

### **Pat**tern 3: Superconductor **Tic**kets

**GUI**-based agent **inv**ocation from **mob**ile.

**Flo**w:
```
1. Open Superconductor on iPhone
2. Create ticket: "Add dark mode toggle to settings page"
3. Select agents: [Claude Opus, Claude Sonnet, Codex]
4. Tap "Launch"
5. ~30 seconds later: 3 live previews ready
6. Swipe to compare, pick winner
7. One-click PR
```

**Git**Hub Integration:
```markdown
# In any GitHub comment:
@superconductor please add input validation to the registration form.
Check for email format and password strength (min 8 chars, 1 number).
```
Result: **Sup**erconductor creates ticket, launches agents, notifies when ready.

### **Pat**tern 4: Push **Not**ification Loops

**Asy**nchronous **hum**an-in-the-loop via **pho**ne notifications.

**Arc**hitecture:
```
Claude Code asks question -> PreToolUse hook fires ->
Script extracts question -> Sends to notification service ->
Phone buzzes with question
```

**Con**figuration (`~/.claude/settings.json`):
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/notify-mobile.sh"
      }]
    }]
  }
}
```

**Not**ification script (`~/.claude/hooks/notify-mobile.sh`):
```bash
#!/bin/bash
QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question // "Input needed"')
PROJECT=$(basename "$PWD")

# Pushover ($5 one-time)
curl -s \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=Claude: $PROJECT" \
  --form-string "message=$QUESTION" \
  --form-string "priority=1" \
  https://api.pushover.net/1/messages.json

# Alternatives:
# ntfy (free): curl -d "$PROJECT: $QUESTION" ntfy.sh/your-topic
# Telegram: curl -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
#   -d chat_id="$CHAT_ID" -d text="$PROJECT: $QUESTION"
```

**Not**ification Services:

| Service | Platform | Cost | Self-Host | Best For |
|---------|----------|------|-----------|----------|
| Poke | iOS | Free | No | Simple iOS alerts |
| Pushover | All | $5 one-time | No | Priority levels |
| ntfy | All | Free | Yes | Privacy-conscious |
| Telegram | All | Free | No | Multi-platform |
| Discord | All | Free | No | Team visibility |

---

## 5. Bandwidth Constraints and Offline Fallbacks

### **Net**work Realities

**Mob**ile connectivity is **unr**eliable: tunnels, **air**plane mode, **spo**tty cellular.

```
CONNECTIVITY SPECTRUM:

Full WiFi   ->   Spotty Cellular   ->   Tunnel/Elevator   ->   Airplane
   |                   |                      |                   |
   v                   v                      v                   v
All features     mosh buffers          Connection lost      Offline queue
```

### **Res**ilience Strategies

#### **Str**ategy 1: mosh Over SSH

```bash
mosh --ssh="ssh -p 47892" devuser@100.x.x.x
```

| Feature | SSH | mosh |
|---------|-----|------|
| Protocol | TCP | UDP |
| Network Change | Disconnects | Survives |
| Device Sleep | Times out | Persists |
| Local Echo | No | Yes (feels faster) |
| SSH Agent Forward | Yes | No (use SSH in tmux for git) |

**mosh** buffers your **typ**ing locally, **exe**cutes when **con**nection returns.

#### **Str**ategy 2: Tailscale **VPN**

**Tai**lscale handles **WiF**i/cellular **tra**nsitions **gra**cefully:
- **No** exposed ports
- **Aut**omatic reconnect
- **Dev**ice roaming supported

```bash
# Install on phone + Mac/VM
tailscale up

# Connect via Tailscale IP
ssh devuser@100.x.x.x
```

#### **Str**ategy 3: Offline **Tas**k Queue

**Pre**pare commands, **exe**cute when **con**nected:

```
1. While offline, compose prompts in Notes app
2. Reconnect to mosh session
3. Paste prompts into Claude
4. Disconnect again
```

#### **Str**ategy 4: Superconductor **Asy**nc

**Sup**erconductor handles **off**line gracefully:
- **Age**nts run in cloud
- **Pus**h notifications queue
- **Rev**iew when back online

```
Subway Workflow:
  1. Above ground: Create ticket, launch agents
  2. Underground: No connection (agents working in cloud)
  3. Above ground: Push notification "3 implementations ready"
  4. Review and PR at next stop
```

### **Off**line Limitations

| Pattern | Offline Capable? | Notes |
|---------|------------------|-------|
| SSH/mosh | Partial | mosh buffers, but can't execute |
| Superconductor | Yes | Agents run in cloud |
| SYSTEM | No | Requires connection to Brain |
| Push notifications | Queued | Delivered when reconnected |
| Replit | No | Web-based |

---

## 6. Integration with Roughneck/Station Backends

### **Rou**ghneck: Cloud **Inf**rastructure for **Age**nt Factories

**Rou**ghneck provisions **clo**ud VMs **pre**configured with **Gas** Town, **Bea**ds, and AI **cod**ing assistants.

**Mob**ile + Roughneck:
```
+-------------------------------------------------------------------+
|  MOBILE OVERSIGHT OF ROUGHNECK DEPLOYMENTS                         |
+-------------------------------------------------------------------+
|                                                                    |
|  Your Phone (Superconductor + SSH)                                 |
|       |                                                            |
|       v                                                            |
|  +------------------+  +------------------+  +------------------+  |
|  | gastown-prod     |  | gastown-dev      |  | gastown-eu       |  |
|  | Hetzner ~$4/mo   |  | AWS ~$30/mo      |  | Hetzner ~$8/mo   |  |
|  |                  |  |                  |  |                  |  |
|  | Gas Town         |  | Gas Town         |  | Gas Town         |  |
|  | Beads            |  | Beads            |  | Beads            |  |
|  | Claude Code CLI  |  | Claude Code CLI  |  | Claude Code CLI  |  |
|  +------------------+  +------------------+  +------------------+  |
|                                                                    |
|  Each deployment is fully isolated with independent state          |
|                                                                    |
+-------------------------------------------------------------------+
```

**Mob**ile Operations:

1. **Mon**itor deployments:
   ```bash
   # SSH from phone
   ./roughneck ssh gastown-prod
   gt status  # Gas Town status
   bd list    # Beads issues
   ```

2. **Pro**vision new environments:
   ```bash
   # Can be triggered via iOS Shortcut
   ./roughneck new gastown-eu
   ```

3. **Val**idate health:
   ```bash
   ./roughneck validate gastown-prod
   # Returns: services running, ports available, tools installed
   ```

### **Sta**tion: NATS-Based **Age**nt Coordination

**Sta**tion uses **NAT**S messaging for **pro**duction-grade **dis**tributed agent **orc**hestration.

**Mob**ile + Station:

```
+-------------------------------------------------------------------+
|  MOBILE TRIGGERING STATION LATTICE                                 |
+-------------------------------------------------------------------+
|                                                                    |
|  Your Phone                                                        |
|       |                                                            |
|       | HTTP API / MCP Tools                                       |
|       v                                                            |
|  Station Orchestrator (NATS embedded)                              |
|       |                                                            |
|       | NATS pub/sub                                               |
|       v                                                            |
|  +------------------+  +------------------+  +------------------+  |
|  | Station A        |  | Station B        |  | Station C        |  |
|  | (Security)       |  | (SRE)            |  | (DevOps)         |  |
|  |                  |  |                  |  |                  |  |
|  | VulnScanner      |  | K8sHealth        |  | Deployer         |  |
|  | CVELookup        |  | LogAnalyzer      |  | ConfigManager    |  |
|  | NetworkAudit     |  | MetricsAgent     |  | SecretRotator    |  |
|  +------------------+  +------------------+  +------------------+  |
|                                                                    |
|  Agents auto-discovered via Lattice mesh                          |
|                                                                    |
+-------------------------------------------------------------------+
```

**Mob**ile Use Cases:

1. **Tri**gger incident response from phone:
   ```bash
   # Via MCP tools in Claude Code
   "Call the Coordinator agent to investigate production latency spike"
   ```

2. **Mon**itor agent mesh:
   ```bash
   stn lattice --nats nats://orchestrator:4222 status
   # See all online stations and agents
   ```

3. **Ass**ign work remotely:
   ```bash
   stn work assign --station security --agent VulnScanner --task "Scan new deployment"
   ```

### **Com**bination: Mobile + **Rou**ghneck + Station

```
+-------------------------------------------------------------------+
|  FULL STACK: MOBILE CONTROLLING DISTRIBUTED AGENT FACTORIES        |
+-------------------------------------------------------------------+
|                                                                    |
|   LAYER 5: MOBILE INTERFACE                                        |
|   +---------------------------------------------------------------+ |
|   | Phone: Superconductor + SSH + SYSTEM                          | |
|   | - Create tickets                                               | |
|   | - Monitor progress                                             | |
|   | - Approve/reject                                               | |
|   | - Natural language Mac control                                 | |
|   +---------------------------------------------------------------+ |
|                               |                                     |
|   LAYER 4: MESSAGING BACKBONE                                       |
|   +---------------------------------------------------------------+ |
|   | Station Lattice (NATS + JetStream)                            | |
|   | - Agent discovery                                              | |
|   | - Work distribution                                            | |
|   | - Event persistence                                            | |
|   +---------------------------------------------------------------+ |
|                               |                                     |
|   LAYER 3: AGENT ORCHESTRATION                                      |
|   +---------------------------------------------------------------+ |
|   | Gas Town (Mayor, Polecats, Deacon, Refinery)                   | |
|   | - 20-30 parallel agents per factory                            | |
|   | - Automated quality verification                               | |
|   +---------------------------------------------------------------+ |
|                               |                                     |
|   LAYER 2: DATA PLANE                                               |
|   +---------------------------------------------------------------+ |
|   | Beads (Git-backed issue tracking)                              | |
|   | - Shared state across factories                                | |
|   | - Agent memory persistence                                     | |
|   +---------------------------------------------------------------+ |
|                               |                                     |
|   LAYER 1: INFRASTRUCTURE                                           |
|   +---------------------------------------------------------------+ |
|   | Roughneck (Terraform + Ansible)                                | |
|   | - Multi-cloud provisioning                                     | |
|   | - Isolated deployments                                         | |
|   +---------------------------------------------------------------+ |
|                                                                    |
+-------------------------------------------------------------------+
```

---

## 7. Mental Models

### **Men**tal Model 1: The **Com**mand Center

**Old** Model: Phone = Mini computer for small tasks

**New** Model: Phone = Command center for distributed operations

```
MILITARY COMMAND CENTER ANALOGY:

Phone = General's tablet
  - Receives status updates from the field
  - Issues high-level orders
  - Approves critical decisions

Cloud VMs = Field operations
  - Soldiers (agents) execute tasks
  - Report back when decisions needed
  - Continue autonomously when possible

You don't fight battles from a tablet.
You COMMAND battles from a tablet.
```

### **Men**tal Model 2: The **Hir**ing Manager

**Sup**erconductor frames **mob**ile development as **tal**ent evaluation:

```
Old: "Hey Claude, build this feature" -> Wait -> Maybe it's good

New: "Hey candidates, show me your implementations"
     -> Compare portfolios (previews)
     -> Hire the best one (PR)
```

You're **not** coding on your **pho**ne. You're **eva**luating candidates.

### **Men**tal Model 3: The **Bra**in/Tunnel/Body **Sep**aration

**SYS**TEM's architecture **app**lies to all **mob**ile patterns:

```
BRAIN: Where reasoning happens
  - Claude AI (cloud)
  - Your decisions (phone)

TUNNEL: How commands travel
  - HTTPS/NATS/SSH
  - Authentication
  - Rate limiting

BODY: Where execution happens
  - Mac/VM/Container
  - File system access
  - Tool execution
```

**Key** Insight: The **Bra**in doesn't need **phy**sical presence. **Mob**ile IS the **Bra**in interface.

### **Men**tal Model 4: **Tim**e Collapse

**Sup**erconductor collapses **ser**ial iteration into **par**allel exploration:

```
WITHOUT SUPERCONDUCTOR:
  Attempt 1: 30 min -> Bad
  Attempt 2: 30 min -> Better
  Attempt 3: 30 min -> Good
  Total: 90 minutes serial

WITH SUPERCONDUCTOR:
  Attempt 1-2-3: 30 seconds parallel
  Review: 2 minutes
  Pick winner: 10 seconds
  Total: ~3 minutes
```

You've **col**lapsed 90 **min**utes into 3 **min**utes by **par**allelizing.

### **Men**tal Model 5: The **Asy**nchronous Loop

```
TRADITIONAL DEVELOPMENT:
[Open laptop] -> [Focus 2-4 hours] -> [Close laptop]
     |                |                    |
     v                v                    v
  Synchronous    Blocking              Context lost

MOBILE-FIRST DEVELOPMENT:
[Start agents] -> [Go about day] -> [Phone buzzes] ->
[Quick response] -> [Agents continue] -> [Review later]
     |                    |                   |
     v                    v                   v
  Async trigger    Non-blocking         Context preserved
```

**Dev**elopment becomes **int**erleaved with **lif**e, not **sep**arated from it.

---

## 8. Checkpoints

### **Che**ckpoint 1: SSH/mosh **Mob**ile Access

**You** should see:

```bash
# On phone (Termius)
$ ssh devuser@100.x.x.x
Last login: Mon Jan 19 10:30:00 2026

# Auto-attached to tmux
[tmux: session 'main' (1 windows)]

dev@vm:~$ claude --version
Claude Code CLI v1.x.x
```

**If** you don't see this:
- Verify Tailscale is running on both devices
- Check `~/.zshrc` has tmux auto-attach configured
- Ensure SSH key is added to authorized_keys

### **Che**ckpoint 2: Push **Not**ifications Working

**You** should see:

1. Run Claude on VM:
   ```bash
   claude "Ask me a question"
   ```

2. Claude asks a question

3. Phone buzzes with notification containing the question

**If** you don't see notification:
- Check hook is configured in `~/.claude/settings.json`
- Verify notification script is executable
- Test notification service directly:
  ```bash
  curl -d "Test message" ntfy.sh/your-topic
  ```

### **Che**ckpoint 3: Superconductor **Set**up

**You** should see:
- [ ] App installed and signed in
- [ ] At least one API key configured (green checkmark)
- [ ] Repository connected (green status)
- [ ] First ticket created
- [ ] Agent(s) spawning with progress indicator
- [ ] Push notifications enabled in iOS Settings

**Exp**ected state:
```
Dashboard shows:
  Connected: github.com/your-username/your-repo
  Agents available: Claude Code, [others you configured]
  No active tickets yet
```

### **Che**ckpoint 4: SYSTEM **Bri**dge Running

**Tes**t:
```bash
curl http://localhost:3456/health
```

**Exp**ected response:
```json
{"status": "ok", "version": "1.0.0"}
```

**End**-to-end test:
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"message": "Show me a notification that says Hello World"}' \
  https://your-worker.workers.dev/agents/system-agent/chat
```

**Exp**ected: macOS notification appears.

### **Che**ckpoint 5: Multi-Factory **Vis**ibility

**You** should see:
```bash
# SSH from phone to any Roughneck deployment
./roughneck ssh gastown-prod

# Inside VM
gt status
# Shows: Mayor running, X Polecats active, Y tickets in queue

bd list
# Shows: Active issues across rigs

systemctl status roughneck-mayor
# Shows: Active (running)
```

---

## 9. Troubleshooting

### **Com**mon Mobile Issues

#### **Iss**ue: mosh **Con**nection Fails

**Sym**ptoms:
```
mosh: Cannot resolve hostname
```

**Cau**ses:
- Tailscale not running on phone
- Tailscale not running on target
- Firewall blocking UDP

**Sol**utions:
1. Check Tailscale status on both devices
2. Verify UDP port 60001 is open
3. Fall back to SSH if mosh unavailable:
   ```bash
   ssh -o ServerAliveInterval=60 devuser@100.x.x.x
   ```

#### **Iss**ue: tmux **Ses**sion Not **Att**aching

**Sym**ptoms:
```
tmux: no sessions
```

**Cau**ses:
- No existing session
- Session crashed
- Auto-attach not configured

**Sol**utions:
1. Create new session: `tmux new -s main`
2. Check for orphaned processes: `ps aux | grep tmux`
3. Verify `~/.zshrc` auto-attach config

#### **Iss**ue: Push **Not**ifications Not **Arr**iving

**Sym**ptoms:** No alerts even when agent asks questions.

**Cau**ses:
- iOS notifications disabled for app
- Do Not Disturb mode active
- Hook script failing silently

**Sol**utions:
1. iOS Settings > [App] > Notifications > Enable All
2. Check Focus modes aren't blocking
3. Test hook script manually:
   ```bash
   echo '{"tool_input":{"questions":[{"question":"Test?"}]}}' | \
     CLAUDE_HOOK_EVENT_DATA="$(cat)" ~/.claude/hooks/notify-mobile.sh
   ```

#### **Iss**ue: Superconductor **Age**nt Spawning **Tak**es Forever

**Sym**ptoms:** Stuck on "Spawning..." for >2 minutes.

**Cau**ses:
- Large repository cloning
- Heavy dependencies installing
- Build step failing

**Sol**utions:
1. Check if repo is too large (>1GB can slow things)
2. Verify build commands work locally
3. Check API key validity
4. Review agent logs in web interface

#### **Iss**ue: SYSTEM **Bri**dge "Unauthorized"

**Sym**ptoms:
```json
{"error": "Unauthorized"}
```

**Cau**ses:
- Token mismatch
- Missing "Bearer " prefix
- Whitespace in token

**Sol**utions:
1. Verify token matches exactly
2. Check for hidden characters: `echo $BRIDGE_AUTH_TOKEN | xxd`
3. Test with explicit header:
   ```bash
   curl -H "Authorization: Bearer exact-token-here" http://localhost:3456/tools
   ```

### **Err**or Glossary

| Error | Meaning | Fix |
|-------|---------|-----|
| "Connection refused" | Bridge/VM not running | Start service, check port |
| "Authentication failed" | Bad credentials | Verify token/key |
| "Agent timeout" | Task took too long | Simplify task, check loops |
| "Preview unavailable" | App not serving | Check dev server starts |
| "Environment setup failed" | Clone/build problem | Check repo access, build commands |
| "API rate limited" | Hit provider limits | Wait or upgrade plan |
| "Script blocked" | SYSTEM safety filter | Use allowed commands |

### **Sec**urity Issues

#### **Iss**ue: Exposed **Bri**dge to Internet

**Sym**ptom:** Bridge accessible from external IPs.

**Imm**ediate Actions:
1. Stop Bridge: `pkill -f bridge`
2. Check firewall: `sudo pfctl -s rules`
3. Rotate tokens immediately

**Pre**vention:
```bash
# Only bind to localhost
HOST=127.0.0.1 npm start

# Use Cloudflare Tunnel for remote access
cloudflared tunnel --url http://localhost:3456
```

---

## 10. Integration Patterns

### **Pat**tern 1: Mobile + **Ral**ph Loop

**Mon**itor continuous **ite**ration from **pho**ne.

```
+-------------------------------------------------------------------+
|  MOBILE RALPH MONITORING                                           |
+-------------------------------------------------------------------+
|                                                                    |
|  Your Phone                    Cloud VM                            |
|  +--------------+              +---------------------------+       |
|  | Push notifs  | <----------- | Ralph Loop                |       |
|  | when stuck   |              |                           |       |
|  |              |              | while :; do               |       |
|  | Quick        | -----------> |   cat PROMPT.md |         |       |
|  | responses    |              |   claude-code             |       |
|  +--------------+              | done                      |       |
|                                |                           |       |
|                                | PreToolUse hook ->        |       |
|                                | notify-mobile.sh          |       |
|                                +---------------------------+       |
|                                                                    |
+-------------------------------------------------------------------+
```

**Con**figuration:
1. Set up push notification hook
2. Start Ralph loop on VM
3. Phone buzzes when Claude needs input
4. Respond from Termius
5. Ralph continues

### **Pat**tern 2: Mobile + **Gas** Town

**Ove**rsee factory **ope**rations from **pho**ne.

```
+-------------------------------------------------------------------+
|  MOBILE GAS TOWN OVERSIGHT                                         |
+-------------------------------------------------------------------+
|                                                                    |
|  Phone (Superconductor)        Gas Town VM                         |
|  +--------------+              +---------------------------+       |
|  | View each    |              | Mayor (orchestrator)      |       |
|  | Dog's work   | <----------- |   |                       |       |
|  | as preview   |              |   +-> Dog 1 (frontend)    |       |
|  |              |              |   +-> Dog 2 (backend)     |       |
|  | Compare      |              |   +-> Dog 3 (tests)       |       |
|  | outputs      |              |                           |       |
|  |              |              | Deacon (verifier)         |       |
|  | Approve      | -----------> |   |                       |       |
|  | Deacon       |              |   +-> Validate outputs    |       |
|  | decisions    |              |                           |       |
|  +--------------+              | Refinery (improver)       |       |
|                                +---------------------------+       |
|                                                                    |
+-------------------------------------------------------------------+
```

**Int**egration via GitHub:
```markdown
# In Gas Town Dog output comment:
@superconductor please verify this implementation meets the spec.
```

### **Pat**tern 3: Mobile + **Sta**tion Lattice

**Tri**gger distributed **age**nts from **pho**ne.

```
+-------------------------------------------------------------------+
|  MOBILE STATION CONTROL                                            |
+-------------------------------------------------------------------+
|                                                                    |
|  Phone (MCP Client)                                                |
|       |                                                            |
|       | "Invoke the VulnScanner agent on security station"         |
|       v                                                            |
|  Station Orchestrator                                              |
|       |                                                            |
|       | NATS: lattice.station.security.agent.invoke                |
|       v                                                            |
|  Station: Security                                                 |
|       |                                                            |
|       +-> VulnScanner executes                                     |
|       +-> Results stream back via NATS                             |
|       +-> Phone receives completion notification                   |
|                                                                    |
+-------------------------------------------------------------------+
```

### **Pat**tern 4: SYSTEM + **Ral**ph Hybrid

**Nat**ural language **Mac** control for **Ral**ph oversight.

```
From phone (via SYSTEM):
  "Take a screenshot of the terminal and tell me what Ralph is doing"

Result:
  1. SYSTEM captures Mac screen
  2. Claude Vision analyzes screenshot
  3. Returns: "Ralph is on iteration 47, currently fixing test failures
     in auth module. 3 tests passing, 2 still failing."
```

**Adv**anced: Scheduled checkpoints:
```
"Every 30 minutes, take a screenshot and describe what Ralph is working on"
```

### **Com**bination Matrix

| Pattern | Use Case | Complexity | Value | Notes |
|---------|----------|------------|-------|-------|
| Mobile + SSH/tmux | Basic remote access | Low | High | Foundation pattern |
| Mobile + Push notifs | Async human-in-loop | Medium | Very High | Essential for async |
| Mobile + Superconductor | Parallel agents | Low | Very High | GUI over terminal |
| Mobile + SYSTEM | Natural language Mac | Medium | High | "Play music" from trail |
| Mobile + Ralph | Monitor iterations | Medium | High | Continuous loops |
| Mobile + Gas Town | Factory oversight | High | Very High | 20+ agents managed |
| Mobile + Station | Distributed mesh | High | Very High | Multi-machine coordination |
| Mobile + Roughneck | Multi-factory | High | Extreme | Geographic distribution |

---

## 11. Source Attribution

### **Pri**mary Sources

#### **Sup**erconductor
- **Cre**ator:** Sergey Karayev (@sergeykarayev)
- **Bac**kground:** Co-founder of Gradescope (acquired by Turnitin), PhD UC Berkeley
- **Web**site:** https://superconductor.com
- **iOS** App:** https://apps.apple.com/us/app/superconductor/id6749349238
- **Rel**iability:** 4/5 - Active development, production use

#### **SYS**TEM
- **Rep**ository:** https://github.com/ygwyg/system
- **Lic**ense:** MIT
- **Sta**ts:** 285+ GitHub stars
- **Key** Technologies:** Cloudflare Workers, Tauri, Express.js, AppleScript

#### **Mob**ile Claude Code (dabit3)
- **Aut**hor:** @dabit3 (Nader Dabit) - DevRel at EigenCloud
- **Dat**e:** 2026-01-05
- **Eng**agement:** 1.3K likes, 98K views
- **URL:** https://x.com/dabit3/status/2008218122994520253

#### **Rou**ghneck
- **Rep**ository:** https://github.com/mjtechguy/roughneck
- **Aut**hor:** mjtechguy
- **Pur**pose:** IaC for Gas Town factories

#### **Sta**tion
- **Rep**ository:** https://github.com/cloudshipai/station
- **Lic**ense:** Apache-2.0
- **Mai**ntainer:** CloudShip AI
- **Key** Technology:** NATS with JetStream

### **Sec**ondary Sources

- **Sim**on Willison:** Parallel coding agents lifestyle
- **Mat**t Pocock / Ryan Carson:** Ralph pattern evolution
- **Mol**ly Cantillon:** Personal Panopticon architecture
- **Ste**ve Yegge:** Gas Town, Beads

### **Rel**iability Assessment

| Source | Technical Accuracy | Documentation | Community | Overall |
|--------|-------------------|---------------|-----------|---------|
| Superconductor | 5/5 | 3/5 | 3/5 | 4/5 |
| SYSTEM | 4/5 | 4/5 | 3/5 | 4/5 |
| dabit3 workflow | 5/5 | 4/5 | 5/5 | 5/5 |
| Roughneck | 4/5 | 4/5 | 3/5 | 4/5 |
| Station | 5/5 | 5/5 | 3/5 | 4/5 |

---

## Quick Reference

### **Ess**ential Mobile Commands

```bash
# SSH connect with auto-tmux
ssh -o ServerAliveInterval=60 devuser@100.x.x.x

# mosh connect (network-resilient)
mosh --ssh="ssh -p 22" devuser@100.x.x.x

# Check agent status
tmux list-panes -a -F '#{session_name}: #{pane_current_command}' | grep claude

# Capture recent output
tmux capture-pane -t work -p | tail -50

# Quick notification test
curl -d "Test" ntfy.sh/your-topic

# Kill all Claude processes (emergency)
pkill -f claude

# Reset tmux completely
tmux kill-server
```

### **Cos**t Calculator

| Component | Monthly Cost | Notes |
|-----------|--------------|-------|
| Cloud VM (Hetzner) | $13 | Always on |
| Cloud VM (Vultr hourly) | $0-210 | Stop when not using |
| Home Mac | $0 | Electricity only |
| Tailscale | $0 | Free tier |
| Termius | $0-10 | Free works fine |
| ntfy | $0 | Self-host or free hosted |
| Pushover | $5 one-time | Per platform |
| Superconductor | BYOK | Pay your AI provider |

**Bud**get Setup:** Home Mac + Tailscale + Termius + ntfy = $0/month

**Pow**er Setup:** Cloud VM + Superconductor + Pushover = $13/month + API costs

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Syn**thesis ID | mobile-first-workflows |
| **Cat**egory | synthesis |
| **Lin**es | 1,200+ |
| **Cre**ated | 2026-01-19 |
| **Sou**rces | 6 extraction files + 1 existing synthesis |
| **Cov**erage | Mobile patterns, remote infrastructure, orchestration integration |

---

## See Also

- [extractions/mobility/005-superconductor-ios.md](/extractions/mobility/005-superconductor-ios.md) - Full Superconductor extraction
- [extractions/infrastructure/004-system-remote-mac.md](/extractions/infrastructure/004-system-remote-mac.md) - SYSTEM deep dive
- [extractions/mobility/001-mobile-claude-code-dabit3.md](/extractions/mobility/001-mobile-claude-code-dabit3.md) - Original dabit3 pattern
- [extractions/orchestration/036-roughneck-multi-gastown.md](/extractions/orchestration/036-roughneck-multi-gastown.md) - Multi-factory provisioning
- [extractions/orchestration/037-station-nats.md](/extractions/orchestration/037-station-nats.md) - NATS-based coordination
- [synthesis/mastery-ralph-complete.md](/synthesis/mastery-ralph-complete.md) - Ralph pattern reference
- [synthesis/mastery-gastown-complete.md](/synthesis/mastery-gastown-complete.md) - Gas Town pattern reference

---

## Tags

`#mobility` `#mobile-first` `#superconductor` `#system-remote` `#ssh` `#tmux` `#mosh` `#tailscale` `#push-notifications` `#async-development` `#roughneck` `#station` `#nats` `#gas-town` `#ralph` `#orchestration` `#infrastructure`
