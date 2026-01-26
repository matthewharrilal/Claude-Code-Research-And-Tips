---
**DEPRECATED** (2026-01-18)

This content has been superseded by D-FINAL synthesis.

**Replacement:** See D-FINAL-operations Section 4 for current content.
**Reason:** Content fully covered in D-FINAL with production validation.
**Original preserved below for reference.**

---

# Deployment Architecture Taxonomy for Claude Code

> **You Are Here:** This is the **infrastructure reference** for running Claude Code. If you're deciding where and how to deploy (local, cloud VM, Docker, serverless, mobile), this document covers every deployment pattern with security considerations, cost analysis, and decision trees. **Note:** This file is DEPRECATED - for current content, see `D-FINAL-operations.md` Section 4.

**Comprehensive Classification of Infrastructure Patterns, Sandboxing Strategies, and Execution Environments**

*Generated: 2026-01-09*
*Status: Exhaustive Synthesis*

---

## Table of Contents

1. [Overview](#overview)
2. [Local Development](#1-local-development)
3. [Remote Terminal Access](#2-remote-terminal-access)
4. [Containerized Execution](#3-containerized-execution)
5. [Serverless and Cloud](#4-serverless-and-cloud)
6. [Browser Automation Infrastructure](#5-browser-automation-infrastructure)
7. [Multi-Agent Orchestration Infrastructure](#6-multi-agent-orchestration-infrastructure)
8. [Mobile and Cross-Device](#7-mobile-and-cross-device)
9. [Sandboxing Strategies](#8-sandboxing-strategies)
10. [Security Architecture by Deployment Type](#9-security-architecture-by-deployment-type)
11. [Decision Tree](#10-decision-tree)
12. [Cost Analysis](#11-cost-analysis)
13. [Quick Reference](#12-quick-reference)

---

## Overview

Claude Code can be deployed across a spectrum of infrastructure patterns, from bare-metal local execution to fully serverless cloud architectures. This taxonomy provides an exhaustive classification to help practitioners select the appropriate deployment strategy based on their requirements.

### Deployment Spectrum

```
                    LOCAL ←────────────────────────────────→ CLOUD
                      │                                         │
    Direct CLI ─────────► VM/SSH ─────────► Container ─────────► Serverless
         │                  │                   │                    │
    Bare metal         Persistent          Isolated            Ephemeral
    Full access        Terminal            Sandboxed           Managed
    No isolation       Manual              Reproducible        Scalable
```

### Key Dimensions

| Dimension | Spectrum |
|-----------|----------|
| **Isolation** | None → Process → Container → VM → Cloud Sandbox |
| **Persistence** | Ephemeral → Session → Persistent → Durable |
| **Scalability** | Single Instance → Parallel → Auto-Scaling |
| **Network** | Full Access → Allowlist → API-Only → Isolated |
| **Security** | Permissive → Gated → Sandboxed → Zero-Trust |

---

## 1. Local Development

### 1.1 Direct Claude Code CLI

The simplest deployment pattern: Claude Code running directly on your local machine.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Local Machine                                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Terminal                                                 ││
│  │  └── claude (CLI)                                        ││
│  │       ├── Tools: Read, Write, Edit, Bash                ││
│  │       ├── File System: Full access                       ││
│  │       └── Network: Full access (API calls)               ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Characteristics:**
- Zero setup overhead
- Full file system access
- Interactive permission prompts
- Session-based context
- Single instance typically

**When to Use:**
- Personal development work
- Interactive exploration
- Quick prototyping
- Supervised AI-assisted coding

**Commands:**
```bash
# Basic usage
claude

# With specific model
claude --model claude-opus-4-5-20251101

# Continue previous session
claude --continue

# Headless/scripted mode
claude --print "Review this file" < file.ts
```

### 1.2 tmux-Based Local Sessions

Persistent terminal sessions for long-running work.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Local Machine                                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  tmux Session ("work")                                   ││
│  │  ├── Window 1: Claude Code (main)                       ││
│  │  ├── Window 2: Claude Code (feature-1)                  ││
│  │  ├── Window 3: Claude Code (feature-2)                  ││
│  │  └── Window 4: Monitoring (htop, logs)                  ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**tmux Configuration for Claude:**
```bash
# ~/.tmux.conf
set -g mouse on
set -g history-limit 100000
set -g base-index 1

# Auto-save sessions
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @continuum-restore 'on'
set -g @resurrect-processes 'claude node python'

# Status bar showing git branch
set -g status-right '#(cd #{pane_current_path} && git branch --show-current)'
```

**Benefits:**
- Sessions persist through disconnects
- Multiple parallel agents
- Easy window switching
- Local machine resources

### 1.3 Git Worktrees for Parallel Isolation

Branch-based parallelization without conflicts.

**Architecture:**
```
Main Repo (~/project/)
├── .git/                  # Shared git database
└── src/                   # Working directory

Worktrees (~/worktrees/)
├── feature-auth/          # Agent 1: Auth feature
│   └── src/
├── feature-payments/      # Agent 2: Payments feature
│   └── src/
└── bugfix-login/          # Agent 3: Bug fix
    └── src/
```

**Setup Script:**
```bash
#!/bin/bash
# spawn-parallel-agent.sh

BRANCH=$1
TASK=$2
WORKTREE_DIR="../worktrees/$BRANCH"

# Create worktree
git worktree add "$WORKTREE_DIR" -b "$BRANCH" 2>/dev/null || \
git worktree add "$WORKTREE_DIR" "$BRANCH"

# Launch Claude in worktree
cd "$WORKTREE_DIR"
tmux new-window -n "$BRANCH" "claude '$TASK'"

echo "Agent started in $WORKTREE_DIR"
```

**Benefits:**
- No file conflicts between agents
- Shared git history
- Isolated branches
- Can run on same machine

### 1.4 Ralph Loop Local Execution

Autonomous iteration with fresh context per cycle.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Ralph Loop (Bash Script)                                    │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  ITERATION 1                                             ││
│  │  └── Fresh Claude Instance                               ││
│  │       ├── Read: prd.json, progress.txt                   ││
│  │       ├── Execute: Task #1                               ││
│  │       ├── Verify: Tests pass                             ││
│  │       └── Update: Mark passes: true, commit              ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │  ITERATION 2                                             ││
│  │  └── Fresh Claude Instance (no memory of Iter 1)         ││
│  │       ├── Read: prd.json (updated), progress.txt         ││
│  │       ├── Execute: Task #2                               ││
│  │       └── ...                                             ││
│  └─────────────────────────────────────────────────────────┘│
│  ... repeats until completion ...                            │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**
```bash
#!/bin/bash
# ralph.sh
MAX_ITERATIONS=${1:-25}

for (( i=1; i<=MAX_ITERATIONS; i++ )); do
  echo "=== Iteration $i / $MAX_ITERATIONS ==="

  claude "Review plans/prd.json and plans/progress.txt.
    Pick ONE feature with passes: false.
    Implement it. Run tests.
    If passing, mark passes: true and commit.
    Append learnings to progress.txt.
    If ALL complete, output: <promise>COMPLETE</promise>" | tee output.txt

  if grep -q "<promise>COMPLETE</promise>" output.txt; then
    echo "=== PRD Complete! ==="
    break
  fi
done
```

**Benefits:**
- Avoids context rot
- External memory (files, git)
- Overnight autonomous execution
- Fresh reasoning each iteration

---

### Checkpoint: Local Development
**You should now understand:**
- [ ] The 4 local patterns: Direct CLI, tmux, Git Worktrees, Ralph Loop
- [ ] How to set up tmux for persistent sessions
- [ ] The worktree spawn pattern for parallel agents
- [ ] Ralph loop file structure (prd.json, progress.txt, ralph.sh)

**If unclear:** Re-read Section 1 or see `mastery-ralph-complete.md`

**Terminal verification:**
```bash
# Test your local setup
claude --version && tmux -V && git worktree list
# You should see: version numbers and worktree list
```

---

## 2. Remote Terminal Access

### 2.1 Cloud VM with SSH/mosh

Dedicated cloud VM for development, accessed remotely.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  CLIENT DEVICES                                              │
│  ├── Laptop ──────────────────────────────┐                 │
│  ├── Phone ───────────────────────────────┤                 │
│  └── Tablet ──────────────────────────────┤                 │
└───────────────────────────────────────────┼─────────────────┘
                                            │ SSH/mosh
                                            │ (Tailscale VPN)
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  CLOUD VM (Hetzner/Vultr/AWS)                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Security                                                 ││
│  │  ├── No public SSH (Tailscale only)                      ││
│  │  ├── fail2ban + nftables                                 ││
│  │  └── Non-root user                                        ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  tmux Session                                            ││
│  │  ├── Window 1: Claude Code (main)                        ││
│  │  ├── Window 2-6: Parallel agents (worktrees)             ││
│  │  └── Window 7: Monitoring                                 ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Provider Comparison:**

| Provider | Tier | Cost/Month | Best For |
|----------|------|------------|----------|
| **Hetzner** | CX31 (4 vCPU, 8GB) | $13 | Best value (EU) |
| **Vultr** | vhf-8c-32gb | ~$210 (or $7/day) | US, hourly billing |
| **DigitalOcean** | s-4vcpu-8gb | $48 | Simple UX |
| **AWS EC2** | t3.xlarge | $120 | Enterprise |
| **Oracle Cloud** | Always Free | $0 | Budget option |

**Setup Pattern (Hetzner):**
```bash
# 1. Create VM
hcloud server create --name claude-dev --type cx31 --image ubuntu-24.04

# 2. Install Tailscale
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

# 3. Harden SSH
ufw allow from 100.64.0.0/10  # Tailscale CIDR only
ufw enable

# 4. Install Claude Code
npm install -g @anthropic-ai/claude-code

# 5. Configure tmux auto-attach
echo 'if [[ -z "$TMUX" ]]; then tmux attach -t main 2>/dev/null || tmux new -s main; fi' >> ~/.zshrc
```

### 2.2 Home Mac/PC as Always-On Server

Zero-cost cloud alternative using home hardware.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  PHONE/TABLET (Remote)                                       │
│  └── Termius/Blink App                                       │
└────────────────────────────────┬────────────────────────────┘
                                 │ Tailscale VPN
                                 ▼
┌─────────────────────────────────────────────────────────────┐
│  HOME MAC MINI (Always On)                                   │
│  ├── caffeinate -i (prevent sleep)                          │
│  ├── Tailscale VPN                                          │
│  ├── tmux (persistent sessions)                             │
│  └── Claude Code agents                                      │
└─────────────────────────────────────────────────────────────┘
```

**Requirements:**
- Mac/PC that can stay powered on
- Reliable home internet
- Tailscale installed
- Lid open (laptops) or external display (Mac Mini)

**Keep-Alive Configuration:**
```bash
# Prevent Mac sleep
caffeinate -i &

# Or via pmset
sudo pmset -a sleep 0 disksleep 0

# Auto-start on boot
# Add to Login Items: Terminal with `claude`
```

**Cost:** $0/month (electricity only)

### 2.3 Codespaces and Gitpod

Cloud-hosted development environments with browser/SSH access.

**Architecture (GitHub Codespaces):**
```
┌─────────────────────────────────────────────────────────────┐
│  GitHub Codespaces                                           │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Codespace Container                                      ││
│  │  ├── VS Code in browser                                   ││
│  │  ├── Terminal with Claude Code                           ││
│  │  ├── Git integration (repo mounted)                      ││
│  │  └── Port forwarding (dev server preview)                ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Setup (.devcontainer/devcontainer.json):**
```json
{
  "name": "Claude Code Dev",
  "image": "mcr.microsoft.com/devcontainers/base:ubuntu",
  "postCreateCommand": "npm install -g @anthropic-ai/claude-code",
  "customizations": {
    "vscode": {
      "settings": {
        "terminal.integrated.defaultProfile.linux": "zsh"
      }
    }
  },
  "secrets": {
    "ANTHROPIC_API_KEY": {
      "description": "Anthropic API key for Claude Code"
    }
  }
}
```

**Comparison:**

| Feature | Codespaces | Gitpod |
|---------|------------|--------|
| Free Tier | 60 hrs/month | 50 hrs/month |
| Self-Host | No | Yes |
| GitHub | Native | Extension |
| GitLab | No | Yes |
| SSH Access | Yes | Yes |

---

### Checkpoint: Remote Access
**You should now understand:**
- [ ] SSH/mosh patterns for cloud VMs
- [ ] GitHub Codespaces and Gitpod configuration
- [ ] Mobile-first workflows (SSH apps, nano-prompts)
- [ ] Session persistence strategies (tmux, mosh)

**If unclear:** Re-read Section 2 or see `extractions/infrastructure/` and `extractions/mobility/`

---

## 3. Containerized Execution

### 3.1 Basic Docker Setup

Isolated Claude Code execution in containers.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Host Machine                                                │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Docker Container                                         ││
│  │  ├── Node.js 20                                           ││
│  │  ├── Claude Code CLI                                      ││
│  │  ├── Non-root user                                        ││
│  │  └── Volume mounts:                                       ││
│  │       ├── /workspace (project files)                      ││
│  │       └── /home/claude/.claude (config)                   ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Dockerfile:**
```dockerfile
FROM node:20-alpine

# Security hardening
RUN apk add --no-cache dumb-init git
RUN npm install -g @anthropic-ai/claude-code

# Non-root user
RUN addgroup -g 1000 claude && adduser -u 1000 -G claude -D claude
USER claude

WORKDIR /workspace
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["claude"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  claude:
    build: .
    volumes:
      - ./project:/workspace
      - claude-config:/home/claude/.claude
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    read_only: true
    tmpfs:
      - /tmp:size=100M,mode=1777

volumes:
  claude-config:
```

**Benefits:**
- Isolated environment
- Reproducible setup
- Easy cleanup
- Resource limits

### 3.2 Secure Docker with Network Isolation

Production-grade containerization with security controls.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Host                                                        │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Network: claude-internal (no internet)                   ││
│  │  ┌─────────────────────────────────────────────────────┐ ││
│  │  │  Claude Container                                     │││
│  │  │  ├── No internet access                               │││
│  │  │  └── Read-only filesystem                             │││
│  │  └─────────────────────────────────────────────────────┘ ││
│  │                                                           ││
│  │  ┌─────────────────────────────────────────────────────┐ ││
│  │  │  API Proxy Container                                   │││
│  │  │  ├── Allowlist: api.anthropic.com                     │││
│  │  │  └── Egress firewall                                   │││
│  │  └─────────────────────────────────────────────────────┘ ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Secure docker-compose.yml:**
```yaml
version: '3.8'

services:
  claude:
    build:
      context: .
      dockerfile: Dockerfile.secure
    networks:
      - internal
    volumes:
      - project:/workspace:ro
      - output:/output:rw
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - HTTP_PROXY=http://proxy:8080
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
          pids: 100
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    read_only: true

  proxy:
    image: nginx:alpine
    networks:
      - internal
      - external
    volumes:
      - ./nginx-egress.conf:/etc/nginx/nginx.conf:ro

networks:
  internal:
    internal: true  # No internet
  external:
    driver: bridge

volumes:
  project:
  output:
```

### 3.3 Multi-Container Parallel Agents (AI-Maestro Pattern)

Container-per-agent architecture for heavy parallel work.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│                      AI-Maestro Orchestrator                 │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Agent Pool                                               ││
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         ││
│  │  │ Container 1 │ │ Container 2 │ │ Container 3 │         ││
│  │  │ Claude      │ │ Claude      │ │ Claude      │         ││
│  │  │ Branch: A   │ │ Branch: B   │ │ Branch: C   │         ││
│  │  └─────────────┘ └─────────────┘ └─────────────┘         ││
│  │        │               │               │                  ││
│  │        └───────────────┼───────────────┘                  ││
│  │                        │                                  ││
│  │            ┌───────────────────────┐                     ││
│  │            │  Shared Docker Volume │                     ││
│  │            │  (file-based messaging)│                     ││
│  │            └───────────────────────┘                     ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**docker-compose.yml (Parallel Agents):**
```yaml
version: '3.8'

services:
  orchestrator:
    build: ./orchestrator
    volumes:
      - shared:/shared
      - ./project:/workspace:ro
    environment:
      - AGENT_COUNT=4
    depends_on:
      - agent

  agent:
    build: ./agent
    deploy:
      replicas: 4
      resources:
        limits:
          memory: 2G
    volumes:
      - shared:/shared
      - ./project:/workspace
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}

volumes:
  shared:
```

**Inter-Agent Communication:**
```bash
# Agent 1 writes result
echo '{"status": "complete", "output": "..."}' > /shared/agent1-output.json

# Agent 2 reads and continues
result=$(cat /shared/agent1-output.json)
```

### 3.4 Infinite Orchestra (Self-Improving Docker)

Self-improving orchestrator that runs 24/7 in Docker.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Docker Container (Always Running)                           │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Central Orchestrator                                     ││
│  │  ├── Monitor for idle state                               ││
│  │  ├── Trigger self-improvement workflows                   ││
│  │  └── Spawn specialized workers                            ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Worker Profiles (orchestrator.json)                      ││
│  │  ├── vision:     Visual analysis                          ││
│  │  ├── docs:       Documentation research                   ││
│  │  ├── research:   Deep investigation                       ││
│  │  ├── coder:      Implementation                           ││
│  │  ├── memory:     Context persistence                      ││
│  │  └── architect:  System design                            ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Self-Improvement Loop                                    ││
│  │  Example: Detected resource issues → Added Docker         ││
│  │           containerization to protect host                ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Key Innovation:**
> "Set goal to 'improve itself' and it added Docker containerization to prevent destroying the host machine."

**Repository:** github.com/0xSero/orchestra

---

## 4. Serverless and Cloud

### 4.1 Cloudflare Workers + Claude Agent SDK

Fully serverless Claude Code deployment with Durable Objects for persistence.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Cloudflare Edge Network                                     │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Worker (Stateless Compute)                               ││
│  │  ├── Claude Agent SDK                                     ││
│  │  ├── Skills (mini-apps)                                   ││
│  │  ├── Tool orchestration                                   ││
│  │  └── WebSocket for real-time                              ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Durable Object (Stateful)                                ││
│  │  ├── Session persistence                                  ││
│  │  ├── Transcript storage                                   ││
│  │  └── Resume on sandbox death                              ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Sandbox (Code Execution)                                 ││
│  │  ├── Tier: standard-2 (required for >10s)                ││
│  │  ├── Dynamic code writing                                 ││
│  │  └── Safe execution environment                           ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**The Stack:**
```
Claude Agent SDK = Reliable tool loop (official harness)
        +
Skills = Composable mini-applications
        +
Sandbox = Safe code execution
        =
Production-capable serverless agent
```

**Key Requirements:**
- **Sandbox Tier:** At least "standard-2" for responses >10 seconds
- **Session Persistence:** Save transcript in Durable Object after each method
- **Skills:** Package Claude Code skills for production use

**Workflow:**
1. **Prototype** skills locally with Claude Code desktop
2. **Test** fast on local machine
3. **Deploy** unchanged to Cloudflare sandbox
4. **Run** via Agent SDK in production

**Starter Template:** github.com/craigsdennis/claude-in-the-box

**Use Cases:**
- Chatbots and email agents
- Data analysis agents with dynamic code
- Distributable production agents
- Multi-tenant applications

### 4.2 System: Mac as API via Cloudflare

Cloudflare Worker brain controlling local Mac body.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  BRAIN (Cloudflare Worker)                                   │
│  ├── Claude AI for NLP                                       │
│  ├── State in Durable Objects                                │
│  ├── Scheduling (cron/natural language)                      │
│  └── Tool orchestration                                       │
└────────────────────────────────┬────────────────────────────┘
                                 │
                    Cloudflare Tunnel (secure, no ports)
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────┐
│  BODY (Local Mac Bridge)                                     │
│  ├── Express server                                          │
│  ├── AppleScript execution                                   │
│  ├── Safe shell commands (allowlist)                         │
│  └── Raycast extension deep links                            │
└─────────────────────────────────────────────────────────────┘
```

**Capabilities:**
- Play music (Apple Music/Spotify)
- Send texts (iMessages)
- Create Linear issues
- Run Shortcuts
- Execute AppleScript
- Trigger Raycast extensions
- Schedule recurring tasks

**Security Features:**
- No exposed ports (tunnel only)
- Shell allowlist (dangerous commands blocked)
- Human confirmation for sensitive actions
- Zero Trust ready (Terraform configs)

**Repository:** github.com/ygwyg/system

### 4.3 E2B Sandboxed Execution

Cloud-based sandboxes for agent code execution.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Your Application                                            │
│  └── Claude Agent                                            │
│       ├── Reasoning                                          │
│       └── Tool Use: "Execute this code"                      │
│                     │                                        │
└─────────────────────┼────────────────────────────────────────┘
                      │ API Call
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  E2B Sandbox                                                 │
│  ├── Isolated VM per execution                               │
│  ├── Filesystem, network access                              │
│  ├── Language runtimes (Python, Node, etc.)                  │
│  └── Time-limited execution                                  │
└─────────────────────────────────────────────────────────────┘
```

**Integration Pattern:**
```python
from e2b import Sandbox

with Sandbox() as sandbox:
    result = sandbox.run_code(agent_generated_code)
    # Returns to agent for analysis
```

**Similar Services:**
- **Daytona.io** - Claude integration
- **Modal** - Serverless compute
- **Replit** - Cloud IDE with execution

### 4.4 Replit as Mobile Cloud IDE

Cloud development environment with instant preview.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Replit Cloud                                                │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Repl Container                                           ││
│  │  ├── Full IDE (browser or mobile app)                    ││
│  │  ├── Terminal with Claude Code CLI                       ││
│  │  ├── Live preview (web apps)                              ││
│  │  ├── Automatic hosting                                    ││
│  │  └── Git integration                                       ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Setup:**
```bash
# In Replit terminal
npm install -g @anthropic/claude-code-cli
claude
```

**Power Combo:**
- **Replit Agent** for big structural changes
- **Claude Code** for detailed/iterative work

**Benefits:**
- Full IDE on mobile
- Instant preview
- No Replit credits consumed (Claude Code uses Anthropic API)
- Full Linux shell
- Instant deploy

---

## 5. Browser Automation Infrastructure

### 5.1 Claude for Chrome (Local Browser)

Native browser automation via Chrome extension.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Claude Code (MCP Client)                                    │
│  └── Binary Protocol                                         │
│       └── 4-byte little-endian length + JSON                 │
│                     │                                        │
└─────────────────────┼────────────────────────────────────────┘
                      │ Native Messaging
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Chrome Extension (MCP Server)                               │
│  └── Local Browser                                           │
│       ├── 19 tools: navigate, screenshot, click, etc.        │
│       └── Full access to browser state                       │
└─────────────────────────────────────────────────────────────┘
```

**Available Tools (19 total):**
- `mcp__claude-in-chrome__navigate`
- `mcp__claude-in-chrome__get_text`
- `mcp__claude-in-chrome__click`
- `mcp__claude-in-chrome__screenshot`
- And more...

**Security Concerns:**
- Cookies/sessions exposed
- Prompt injection could exfiltrate data
- Personal browser state vulnerable

### 5.2 Browserbase (Remote Cloud Browsers)

Cloud browser infrastructure for safe, scalable automation.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Claude Code (MCP Client)                                    │
│  └── Binary Protocol (thinks it's local Chrome)              │
│                     │                                        │
└─────────────────────┼────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Intercepting Server (MCP → CDP Translation)                 │
│  └── Translates MCP tool calls to Chrome DevTools Protocol   │
│                     │                                        │
└─────────────────────┼────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Browserbase Cloud Browsers                                  │
│  ├── Isolated browser instances                              │
│  ├── Parallel sessions                                       │
│  ├── Headless, reliable                                      │
│  └── No local machine risks                                  │
└─────────────────────────────────────────────────────────────┘
```

**Benefits:**
- **Security:** Isolated cloud execution
- **Scale:** Parallel browser sessions
- **Production-grade:** Headless, reliable
- **Stealth:** Claude doesn't know the difference

**Demo Use Case:**
- Compile real-time outage status table
- Check GitHub, Cloudflare, AWS in parallel
- All via same MCP protocol

### 5.3 Playwright MCP Server

Browser automation via Playwright for testing and verification.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Claude Code                                                 │
│  └── MCP Client                                              │
│       └── Tools: navigate, click, type, screenshot           │
│                     │                                        │
└─────────────────────┼────────────────────────────────────────┘
                      │ MCP Protocol
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  Playwright MCP Server                                       │
│  └── Playwright Engine                                       │
│       ├── Chrome, Firefox, Safari                            │
│       ├── Headless or headed                                 │
│       └── Screenshots, recordings                            │
└─────────────────────────────────────────────────────────────┘
```

**Configuration:**
```json
{
  "mcp": {
    "servers": {
      "playwright": {
        "command": "npx",
        "args": ["@anthropic-ai/mcp-server-playwright"],
        "env": {
          "HEADLESS": "true"
        }
      }
    }
  }
}
```

**Use Case:** UI verification in Ralph loops
```
"Verify in browser:
1. Navigate to /users
2. Click filter dropdown
3. Select 'Active'
4. Confirm list shows only active users
5. Take screenshot for verification"
```

---

## 6. Multi-Agent Orchestration Infrastructure

### 6.1 Personal Panopticon (Domain-Isolated Instances)

8 parallel Claude instances, each owning a life domain.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Personal Panopticon                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│  │~/nox    │ │~/metrics│ │~/email  │ │~/growth │            │
│  │Company  │ │Analytics│ │Comms    │ │Marketing│            │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘            │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│  │~/trades │ │~/health │ │~/writing│ │~/personal│           │
│  │Finance  │ │Wellness │ │Content  │ │Life Admin│           │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘            │
│                                                              │
│  Each instance:                                              │
│  ├── Isolated directory                                      │
│  ├── Spawns short-lived subagents                            │
│  ├── File-based handoffs between domains                     │
│  └── Can control desktop apps via mouse/keystroke            │
└─────────────────────────────────────────────────────────────┘
```

**Setup:**
```bash
# Keep system awake
caffeinate -i

# Simple alias
alias c='claude'

# Cron jobs for scheduled runs
0 6 * * * cd ~/trades && claude "Generate morning brief" > brief.md
```

**Philosophy:**
> "Reverse the data asymmetry that institutions have over you - you surveilling yourself across all life domains."

### 6.2 CC Mirror (Orchestration Unlocked)

Unlock Claude Code's hidden multi-agent orchestration.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  CC Mirror Orchestrator                                      │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  CONDUCTOR (never writes code directly)                   ││
│  │  ├── TaskCreate, TaskUpdate, TaskGet, TaskList           ││
│  │  ├── Dependency management (blocks/blockedBy)            ││
│  │  └── Spawns worker agents via Task tool                  ││
│  └─────────────────────────────────────────────────────────┘│
│                           │                                  │
│           ┌───────────────┼───────────────┐                  │
│           ▼               ▼               ▼                  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │ Worker: API │ │Worker: Tests│ │ Worker: Docs│            │
│  │ Tools: Edit,│ │Tools: Edit, │ │Tools: Write,│            │
│  │ Write, Bash │ │Bash, Read   │ │Read, Grep   │            │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
└─────────────────────────────────────────────────────────────┘
```

**Demo Output:**
```
Agent #1 completed! It chose FastAPI (Python)

Tasks:
[x] #1 Design API architecture
[ ] #2 Create project structure
[ ] #3 Implement data models
[!] #4 Implement REST API endpoints (blocked by #3)
[!] #5 Write integration tests (blocked by #4)
```

**Quick Start:**
```bash
npx cc-mirror quick --provider mirror --name mclaude
```

### 6.3 Gas Town (Agent Factory)

Industrial-scale agent orchestration for power users.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  Gas Town (~/.gt)                                            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  HQ (Town-Level Management)                               ││
│  │  └── Mayor: Town coordination                             ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Rigs (Project Repos)                                     ││
│  │  ├── Witness: Per-rig observer                            ││
│  │  └── Beads: Git-backed data plane                         ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Workers                                                   ││
│  │  ├── Deacon: Monitoring/handshakes                        ││
│  │  ├── Dogs: Quality gates                                  ││
│  │  ├── Refinery: Task decomposition                         ││
│  │  ├── Polecat: Named persistent workers                    ││
│  │  └── Crew: Ephemeral workers                              ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Overseer (YOU)                                           ││
│  │  └── Human with inbox                                     ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Scale:**
- ~225,000 lines of Go code vibe-coded in 3 weeks
- Multiple Claude accounts required
- tmux as primary UI

**Warning:**
> "If you have any doubt whatsoever, then you can't use it."

**Requirements:**
- Stage 7+ in dev evolution (10+ agents, hand-managed)
- Significant budget
- Comfort with chaos

**Repository:** github.com/steveyegge/gastown

### 6.4 rpai: tmux Multi-Agent Manager

TUI dashboard for monitoring parallel agents.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  rpai TUI Dashboard                                          │
│  ┌─────────────────────────────────────────────────────────┐│
│  │  Agent List                                               ││
│  │  ├─ [running] agent-1: Implementing auth                 ││
│  │  ├─ [waiting] agent-2: Needs approval                    ││
│  │  ├─ [idle]    agent-3: Complete                          ││
│  │  └─ [running] agent-4: Writing tests                     ││
│  ├─────────────────────────────────────────────────────────┤│
│  │  Output Preview (selected agent)                          ││
│  │  > Implementing JWT validation...                         ││
│  │  > Tests: 5/7 passing                                     ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Install:**
```bash
cargo install rpai
rpai  # Run in any tmux session
```

**Features:**
- Scans tmux panes for running agents
- Status indicators (running/idle/waiting)
- Output preview
- One-click jump to agent pane

---

## 7. Mobile and Cross-Device

### 7.1 Phone SSH Setup (dabit3 Pattern)

Full development from phone via SSH.

**Architecture:**
```
┌─────────────────────────────────────────────────────────────┐
│  PHONE                                                       │
│  ├── Termius (SSH/mosh client)                               │
│  ├── Tailscale VPN                                           │
│  └── Poke (push notifications)                               │
└────────────────────────────────┬────────────────────────────┘
                                 │ Tailscale VPN
                                 ▼
┌─────────────────────────────────────────────────────────────┐
│  CLOUD VM ($7/day)                                           │
│  ├── tmux (6 parallel Claude windows)                        │
│  ├── Git worktrees (branch isolation)                        │
│  ├── PreToolUse hook → Poke webhook                          │
│  └── Security: nftables, fail2ban, no public SSH             │
└─────────────────────────────────────────────────────────────┘
```

**Push Notification Hook:**
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

```bash
#!/bin/bash
# notify-mobile.sh
QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question')
curl -X POST "https://api.poke.fm/v1/notify" \
  -H "Authorization: Bearer $POKE_TOKEN" \
  -d "{\"title\": \"Claude needs input\", \"body\": \"$QUESTION\"}"
```

**Workflow:**
1. Start VM via iOS Shortcut
2. Connect via Termius → Tailscale
3. Auto-attach to tmux
4. Kick off agents
5. Go about your day
6. Phone buzzes when agent needs input
7. Respond via Termius
8. Stop VM when done

### 7.2 iPad Pro as Primary Dev

Full development environment on tablet.

**Setup:**
- iPad Pro 12.9" M4
- Magic Keyboard
- Blink Shell (SSH + mosh)
- Working Copy (Git)
- Tailscale VPN

**Stage Manager Layout:**
```
┌────────────────────────────────┬────────────────────────────────┐
│                                │                                 │
│  Blink Shell (Primary)         │  GitHub Mobile                  │
│  └── tmux with Claude          │  └── PR Reviews                 │
│                                │  └── Issue Tracking             │
│                                │                                 │
├────────────────────────────────┼────────────────────────────────┤
│                                │                                 │
│  Safari (Documentation)        │  Notes/Obsidian                 │
│  └── API docs                  │  └── Task tracking              │
│  └── Stack Overflow            │  └── Quick notes                │
│                                │                                 │
└────────────────────────────────┴────────────────────────────────┘
```

### 7.3 Teleportation (Session Handoff)

Seamlessly move sessions between devices.

**Native Claude Code Teleport:**
```bash
# In terminal Claude session
--teleport
# or just type: &

# Outputs URL like: https://claude.ai/code/session/abc123
# Open URL on any device to continue
```

**tmux Teleportation:**
```bash
# On laptop
tmux attach -t work
# Work for a while, close laptop

# On phone
ssh devuser@vm
# Auto-attaches to existing tmux session
# Continue exactly where you left off
```

---

## 8. Sandboxing Strategies

### 8.1 Sandboxing Levels Overview

| Level | Isolation | Performance | Use Case |
|-------|-----------|-------------|----------|
| **None** | No isolation | Full speed | Trusted, supervised work |
| **Process** | Limited | Good | Basic separation |
| **Container** | Strong | Good | Development, CI/CD |
| **VM** | Maximum | Overhead | Untrusted, autonomous |
| **Cloud Sandbox** | Maximum + Managed | Variable | Production serverless |

### 8.2 macOS App Sandbox

Basic isolation using macOS sandbox profiles.

```bash
# Run with sandbox profile
sandbox-exec -f ~/.claude/sandbox.sb claude
```

**Example Profile (~/.claude/sandbox.sb):**
```lisp
(version 1)
(deny default)

; Allow reading from project directory
(allow file-read*
    (subpath "/Users/username/projects"))

; Allow writing only to specific paths
(allow file-write*
    (subpath "/Users/username/projects/current")
    (subpath "/tmp"))

; Allow network for API calls
(allow network-outbound
    (remote host "api.anthropic.com"))

; Allow executing node
(allow process-exec
    (literal "/usr/local/bin/node"))
```

### 8.3 Linux Sandboxing Options

**Firejail:**
```bash
sudo apt install firejail
firejail --private=~/claude-sandbox --net=none claude
```

**Bubblewrap (bwrap):**
```bash
bwrap \
    --ro-bind /usr /usr \
    --bind ~/project /workspace \
    --unshare-net \
    --die-with-parent \
    claude
```

**Systemd Sandboxing:**
```ini
# ~/.config/systemd/user/claude-sandboxed.service
[Service]
ExecStart=/usr/local/bin/claude
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
NoNewPrivileges=true
ReadWritePaths=/home/user/project
```

### 8.4 Docker Security Hardening

**Production-Grade Dockerfile:**
```dockerfile
FROM node:20-alpine AS base

# Security hardening
RUN apk add --no-cache dumb-init

# Install Claude Code
RUN npm install -g @anthropic-ai/claude-code && npm cache clean --force

# Remove unnecessary tools
RUN apk del wget curl 2>/dev/null || true

# Non-root user
RUN addgroup -g 1000 claude && adduser -u 1000 -G claude -D claude
USER claude

WORKDIR /workspace
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["claude"]
```

**Security Compose Settings:**
```yaml
services:
  claude:
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    read_only: true
    network_mode: none  # Complete network isolation
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
          pids: 100
```

### 8.5 YOLO Mode (Permissive) - When Appropriate

`--dangerously-skip-permissions` should ONLY be used:

| Scenario | Safe? | Notes |
|----------|-------|-------|
| Isolated VM/container | Yes | No risk to host |
| Disposable cloud instance | Yes | Can terminate/rebuild |
| CI/CD sandboxed runners | Conditional | Only in isolated runners |
| Local development machine | **No** | Risk of destructive commands |
| Production systems | **Never** | Catastrophic potential |
| Shared/team machines | **No** | Risk to others' work |

**Safe YOLO Pattern:**
```yaml
# Docker container with YOLO
services:
  claude:
    command: ["claude", "--dangerously-skip-permissions"]
    network_mode: none
    read_only: true
    # Container isolation makes YOLO safe
```

---

## 9. Security Architecture by Deployment Type

### 9.1 Security Matrix

| Deployment | Network | Filesystem | Permissions | Audit |
|------------|---------|------------|-------------|-------|
| **Local CLI** | Full | Full | Interactive | Manual |
| **Remote SSH** | VPN-only | Restricted | Config-based | Logs |
| **Docker** | Isolated/Proxy | Mount-based | Config-based | Logs |
| **Serverless** | Managed | Ephemeral | Minimal | Built-in |
| **Enterprise** | Zero Trust | Encrypted | SSO/RBAC | SIEM |

### 9.2 Permission Configuration Template

```json
{
  "permissions": {
    "tools": {
      "Bash": "ask",
      "Read": "allow",
      "Edit": "allow",
      "Write": "ask",
      "WebFetch": "ask",
      "WebSearch": "ask"
    },
    "commands": {
      "git status": "allow-always",
      "git diff": "allow-always",
      "npm test": "allow-always",
      "rm -rf": "deny-always",
      "git push --force": "deny-always",
      "sudo": "deny-always"
    },
    "paths": {
      "read": ["**/*"],
      "write": ["src/**", "tests/**"],
      "deny": [".env*", "*.pem", "*.key", "node_modules/**"]
    }
  }
}
```

### 9.3 Network Isolation Strategies

**Level 1: No Network**
```bash
docker run --network none claude
firejail --net=none claude
```

**Level 2: API-Only**
```bash
iptables -A OUTPUT -d api.anthropic.com -p tcp --dport 443 -j ACCEPT
iptables -A OUTPUT -j DROP
```

**Level 3: Allowlist Domains**
```json
{
  "network": {
    "allowedDomains": [
      "api.anthropic.com",
      "github.com",
      "registry.npmjs.org"
    ],
    "mode": "allowlist"
  }
}
```

### 9.4 Secrets Management

**Never:**
- Store API keys in CLAUDE.md
- Expose secrets in environment visible to Claude
- Commit .env files to git

**Patterns:**
```bash
# Ephemeral injection
API_KEY=$(vault kv get -field=key secret/anthropic)
ANTHROPIC_API_KEY="$API_KEY" claude

# Docker secrets
docker secret create anthropic_key key.txt
# Mount at /run/secrets/anthropic_key
```

### 9.5 Audit Logging Hook

```bash
#!/bin/bash
# ~/.claude/hooks/audit-log.sh

LOG_DIR="$HOME/.claude/audit"
mkdir -p "$LOG_DIR"

jq -nc \
    --arg ts "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
    --arg event "$1" \
    --arg tool "${TOOL_NAME:-}" \
    --argjson data "${EVENT_DATA:-{}}" \
    '{ts:$ts,event:$event,tool:$tool,data:$data}' \
    >> "$LOG_DIR/$(date +%Y-%m-%d).jsonl"
```

---

## 10. Decision Tree

### 10.1 Primary Decision Flow

```
START: What are you building?
│
├── Personal dev work (supervised)
│   └── LOCAL CLI
│       └── Add tmux for persistence
│
├── Overnight autonomous tasks
│   ├── Can use local machine?
│   │   └── Yes → LOCAL + RALPH LOOP
│   └── No → CLOUD VM + RALPH LOOP
│
├── Multi-agent parallel work
│   ├── Same branch conflicts likely?
│   │   └── Yes → GIT WORKTREES or DOCKER MULTI-CONTAINER
│   └── No → TMUX PARALLEL SESSIONS
│
├── Team/production deployment
│   ├── Need code execution sandbox?
│   │   └── Yes → CLOUDFLARE SANDBOX or E2B
│   └── No → CONTAINERIZED with security controls
│
├── Mobile-first workflow
│   ├── Have always-on home Mac?
│   │   └── Yes → HOME MAC + TAILSCALE
│   └── No → CLOUD VM + TAILSCALE
│
├── Browser automation needed
│   ├── Production/parallel?
│   │   └── Yes → BROWSERBASE (cloud)
│   └── No → LOCAL CHROME MCP
│
└── Enterprise deployment
    └── HYBRID: Cloudflare Workers + VPC endpoints + SSO
```

### 10.2 Isolation Level Selection

```
What's the risk level of agent actions?
│
├── Reading/exploring only
│   └── NO SANDBOX needed
│
├── Writing files in project
│   └── PATH RESTRICTIONS in config
│
├── Running shell commands
│   ├── Known safe commands?
│   │   └── Yes → WHITELIST commands
│   └── Unknown commands → CONTAINER with limits
│
├── Autonomous overnight work
│   └── CONTAINER or VM isolation
│
└── Running untrusted/generated code
    └── CLOUD SANDBOX (Cloudflare/E2B)
```

### 10.3 Cost vs Capability Trade-offs

| Budget | Recommended Setup | Capabilities |
|--------|-------------------|--------------|
| **$0/month** | Home Mac + Tailscale + tmux | Full power, always-on dependent |
| **$13/month** | Hetzner CX31 | Full power, reliable |
| **$50/month** | Vultr (stopped when idle) | Heavy parallel work |
| **$100+/month** | Multi-VM + Container orchestration | Enterprise scale |
| **Usage-based** | Cloudflare Workers + Sandbox | Serverless, auto-scale |

---

## 11. Cost Analysis

### 11.1 Infrastructure Costs

| Setup | Monthly Cost | Notes |
|-------|--------------|-------|
| Local only | $0 | Electricity only |
| Home Mac server | $0 | Already owned |
| Hetzner CX31 | $13 | Best value |
| DigitalOcean | $48 | Simple UX |
| Vultr (always-on) | $210 | US presence |
| Vultr (8h/day) | $70 | Stop when idle |
| AWS EC2 Spot | $12-40 | 70-90% cheaper |
| Codespaces (free tier) | $0 | 60 hrs/month |

### 11.2 API Costs (Claude Code Usage)

| Operation | Est. Tokens | Cost @ $15/M |
|-----------|-------------|--------------|
| Ralph iteration | 3K-15K | $0.05-0.25 |
| 25 iterations | 75K-375K | $1.13-5.63 |
| 50 iterations | 150K-750K | $2.25-11.25 |
| Daily heavy use | ~500K | ~$7.50 |

### 11.3 Cost Optimization Strategies

1. **Stop VMs when idle** - Use iOS Shortcuts/cron
2. **Use Haiku for simple tasks** - 95% cheaper than Opus
3. **Prompt caching** - 90% savings on repeated context
4. **Batch API** - 50% discount
5. **Ralph file-based state** - 60-80% context reduction
6. **Spot instances** - 70-90% cheaper than on-demand

---

## 12. Quick Reference

### 12.1 Deployment Commands

```bash
# Local
claude
claude --model claude-opus-4-5-20251101
claude --dangerously-skip-permissions  # VM/container only!

# Docker
docker run -it -v ./project:/workspace \
  -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
  claude-code

# tmux
tmux new -s work
tmux attach -t work

# Git worktrees
git worktree add ../feature-branch feature-branch

# Ralph loop
./ralph.sh 25

# Tailscale
tailscale up
tailscale ip -4
```

### 12.2 Essential Configuration Files

**~/.claude/settings.json:**
```json
{
  "permissions": {
    "tools": { "Bash": "ask", "Read": "allow" },
    "commands": { "git status": "allow-always" },
    "paths": { "deny": [".env*", "*.pem"] }
  },
  "hooks": {
    "PreToolUse": [
      { "matcher": "AskUserQuestion", "command": "~/.claude/hooks/notify.sh" }
    ]
  }
}
```

**CLAUDE.md:**
```markdown
# Project Name

## Commands
- `npm test` - Run tests
- `npm run build` - Build

## For Claude
- Run tests after changes
- Follow patterns in src/
```

### 12.3 Notification Services

| Service | Platform | Cost | Self-Host |
|---------|----------|------|-----------|
| Poke | iOS | Free | No |
| Pushover | All | $5 one-time | No |
| ntfy | All | Free | Yes |
| Telegram | All | Free | No |
| Discord | All | Free | No |

### 12.4 SSH Clients for Mobile

| App | Platform | Cost | mosh Support |
|-----|----------|------|--------------|
| Termius | iOS/Android | Free/$10mo | Yes |
| Blink Shell | iOS | $20 | Yes |
| Prompt 3 | iOS | $25 | No |
| Termux | Android | Free | Yes |

---

## Summary: Deployment Selection Guide

| Scenario | Recommended Deployment |
|----------|------------------------|
| **Quick prototyping** | Local CLI |
| **Single feature, overnight** | Local + Ralph Loop |
| **Multiple life domains** | Panopticon (isolated directories) |
| **Team parallel features** | Git worktrees + tmux |
| **Production app** | Docker + security hardening |
| **Serverless agents** | Cloudflare Workers + Sandbox |
| **Browser automation at scale** | Browserbase |
| **Mobile-first development** | Cloud VM + Tailscale + push notifications |
| **Self-improving systems** | Infinite Orchestra (Docker 24/7) |
| **Industrial scale** | Gas Town (10+ agents) |
| **Enterprise** | Hybrid cloud + SSO + audit logging |

---

## Troubleshooting

### Common Issue: SSH Session Drops During Long Operation
**Symptom:** Claude Code disconnects mid-task, work lost
**Cause:** SSH connection timeout, network instability
**Fix:**
```bash
# 1. Use mosh instead of SSH for mobile connections
mosh user@server

# 2. Use tmux for session persistence
tmux new -s claude
# Reconnect: tmux attach -t claude

# 3. Configure SSH keepalive (~/.ssh/config)
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

### Common Issue: Docker Container Permission Denied
**Symptom:** Claude Code can't write to mounted volumes
**Cause:** UID/GID mismatch between container and host
**Fix:**
```bash
# 1. Check host user ID
id -u && id -g

# 2. Match in Dockerfile
RUN addgroup -g 1000 claude && adduser -u 1000 -G claude -D claude

# 3. Or use --user flag
docker run --user $(id -u):$(id -g) ...

# 4. Or fix permissions on host
chown -R $(id -u):$(id -g) ./project
```

### Common Issue: Tailscale MagicDNS Not Resolving
**Symptom:** Can't reach server by hostname, only IP
**Cause:** DNS not configured or MagicDNS not enabled
**Fix:**
```bash
# 1. Enable MagicDNS in Tailscale admin console

# 2. Check Tailscale status
tailscale status

# 3. Verify DNS
tailscale dns

# 4. Force re-authentication if needed
tailscale up --reset
```

### Common Issue: Cloudflare Worker Hitting CPU Limits
**Symptom:** Request terminated, "Worker exceeded CPU time limit"
**Cause:** Claude Code request too complex for serverless
**Fix:**
1. Cloudflare free tier: 10ms CPU per request
2. Paid plan: 30 seconds CPU
3. For complex tasks, use Cloudflare Queue or Durable Objects
4. Or switch to dedicated VM for agent operations

### Common Issue: Push Notifications Not Arriving
**Symptom:** Agent finishes but no mobile notification
**Cause:** Hook not configured, service not running, or rate limited
**Fix:**
```bash
# 1. Test notification service directly
curl -d "title=Test&message=Test&priority=5" \
  -H "Access-Token: YOUR_KEY" \
  https://api.pushover.net/1/messages.json

# 2. Check hook is configured in settings.json
cat ~/.claude/settings.json | jq '.hooks'

# 3. Verify hook script is executable
chmod +x ~/.claude/hooks/notify.sh

# 4. Test hook manually
TOOL_NAME="AskUserQuestion" ~/.claude/hooks/notify.sh
```

### Common Issue: API Key Not Found in Container
**Symptom:** "ANTHROPIC_API_KEY not set" error
**Cause:** Environment variable not passed to container
**Fix:**
```bash
# Option 1: Pass at runtime
docker run -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY ...

# Option 2: Use .env file with docker-compose
# .env
ANTHROPIC_API_KEY=sk-...

# docker-compose.yml
env_file: .env

# Option 3: Use Docker secrets (production)
docker secret create anthropic_key key.txt
# Then mount in container
```

---

## Sources

This taxonomy synthesizes patterns from:

1. **Official Documentation:** Anthropic Claude Code docs, Agent SDK
2. **Infrastructure Pioneers:**
   - @burcs (System - Mac as API)
   - @johnturner (Cloudflare Sandbox)
   - @pk_iv (Browserbase reverse engineering)
3. **Mobile Workflows:**
   - @dabit3 (Phone-first development)
   - @itspaulai (Replit mobile)
4. **Multi-Agent Patterns:**
   - @mollycantillon (Personal Panopticon)
   - @steve_yegge (Gas Town)
   - @0xSero (Infinite Orchestra)
   - @nummanali (CC Mirror)
5. **Orchestration:**
   - Geoffrey Huntley (Ralph Wiggum)
   - @mattpocockuk (Ralph best practices)
   - @ryancarson (PRD-driven development)
6. **Security:**
   - Community best practices for sandboxing, permissions, audit logging

---

*Last Updated: 2026-01-09*
*Wave-3 Enhanced: 2026-01-19*
*Status: Exhaustive Taxonomy Complete*

---

## Tags

`#deployment` `#infrastructure` `#docker` `#cloudflare` `#serverless` `#sandboxing` `#remote-execution` `#browser-automation` `#multi-agent` `#mobile` `#security` `#orchestration` `#ralph-loop` `#cloud-vm` `#tailscale` `#tmux`
