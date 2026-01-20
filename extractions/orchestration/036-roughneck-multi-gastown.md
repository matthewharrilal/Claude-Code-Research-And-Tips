# Roughneck: Cloud Development Environment Provisioner
## Infrastructure-as-Code for AI Agent Workspaces

---
## D-FINAL Connection

**This source contributes to:**
- D-FINAL-architecture.md: Section 2.6 (Cloud infrastructure for agent factories)
- D-FINAL-implementation.md: Section 3.4 (Multi-region Gas Town deployment)

**Coverage in D-FINAL:** 65%
**High-value unique content:** IaC patterns for Gas Town, multi-cloud provisioning, isolated deployment model, credential management, systemd service orchestration

**Journey references:**
- extractions/orchestration/022-gas-town-deep-dive.md
- extractions/orchestration/023-beads-data-plane.md
- synthesis/architecture-complexity-ladder.md#level-7

**Last enhanced:** 2026-01-19 (Initial extraction)

---

> "Deploy AI-powered cloud development environments. Provisions VMs with Terraform/OpenTofu and configures them with Ansible, creating fully-equipped workspaces with AI coding assistants, modern developer tools, and browser-based IDEs."
>
> -- Roughneck README

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What This Is](#2-what-this-is)
3. [Why It Matters](#3-why-it-matters)
4. [Architecture Deep Dive](#4-architecture-deep-dive)
5. [Key Features](#5-key-features)
6. [Installation and Setup](#6-installation-and-setup)
7. [Configuration Options](#7-configuration-options)
8. [Multi-Factory Patterns](#8-multi-factory-patterns)
9. [Integration Patterns](#9-integration-patterns)
10. [Mental Models](#10-mental-models)
11. [Checkpoints](#11-checkpoints)
12. [Troubleshooting](#12-troubleshooting)
13. [Source Attribution](#13-source-attribution)

---

## 1. You Are Here

```
                     The Infrastructure Stack for AI Agents

╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   LAYER 4: AGENT ORCHESTRATION                                                ║
║   ┌─────────────────────────────────────────────────────────────────────────┐ ║
║   │  Gas Town (gt) - Mayor, Polecats, Deacon, Refinery                      │ ║
║   │  The multi-agent factory running ON your provisioned infrastructure     │ ║
║   └─────────────────────────────────────────────────────────────────────────┘ ║
║                                    │                                          ║
║   LAYER 3: DATA PLANE                                                         ║
║   ┌─────────────────────────────────────────────────────────────────────────┐ ║
║   │  Beads (bd) - Git-backed issue tracking and agent memory                │ ║
║   │  The shared memory substrate for agent coordination                     │ ║
║   └─────────────────────────────────────────────────────────────────────────┘ ║
║                                    │                                          ║
║   LAYER 2: CLOUD INFRASTRUCTURE  ◀─────── YOU ARE HERE ────────────────────  ║
║   ┌─────────────────────────────────────────────────────────────────────────┐ ║
║   │  ████████████████████████████████████████████████████████████████████   │ ║
║   │  ██                                                                ██   │ ║
║   │  ██                    R O U G H N E C K                           ██   │ ║
║   │  ██            Cloud Development Environment Provisioner           ██   │ ║
║   │  ██                                                                ██   │ ║
║   │  ████████████████████████████████████████████████████████████████████   │ ║
║   │                                                                         │ ║
║   │  • Terraform/OpenTofu for infrastructure provisioning                   │ ║
║   │  • Ansible for configuration management                                 │ ║
║   │  • Multi-cloud support (Hetzner, AWS, DigitalOcean)                     │ ║
║   │  • Isolated deployments with independent state                          │ ║
║   │  • Python CLI for orchestration                                         │ ║
║   └─────────────────────────────────────────────────────────────────────────┘ ║
║                                    │                                          ║
║   LAYER 1: CLOUD PROVIDERS                                                    ║
║   ┌─────────────────────────────────────────────────────────────────────────┐ ║
║   │  Hetzner Cloud (~$4-8/mo) | AWS EC2 (~$30/mo) | DigitalOcean (~$24/mo)  │ ║
║   └─────────────────────────────────────────────────────────────────────────┘ ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### What This Document Covers

This is the **extraction and analysis** of mjtechguy's Roughneck project - an infrastructure-as-code tool that provisions cloud VMs preconfigured with AI coding assistants, Gas Town, Beads, and modern development tools. Roughneck enables you to spin up isolated Gas Town factories across multiple cloud providers.

### Key Insight

**Roughneck is the bootstrap layer for Gas Town factories.**

While Gas Town manages your agent colony, Roughneck provisions the cloud infrastructure where that colony lives. Think of it as:
- **Gas Town** = The factory floor where agents work
- **Beads** = The shared memory/coordination system
- **Roughneck** = The construction company that builds the factory

### Prerequisites

| Requirement | Description |
|-------------|-------------|
| **Python 3.10+** | CLI runtime |
| **Terraform or OpenTofu** | Infrastructure provisioning |
| **Ansible** | Configuration management |
| **Cloud Provider Account** | Hetzner, AWS, or DigitalOcean |
| **age (optional)** | Credential encryption |

---

## 2. What This Is

### The One-Liner

**Roughneck provisions cloud development environments preconfigured with Gas Town, Beads, and AI coding assistants.**

### Core Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ROUGHNECK ARCHITECTURE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐      │
│   │   Python CLI     │───>│   Terraform      │───>│  Cloud Provider  │      │
│   │   (Orchestrator) │    │   (Provisioner)  │    │  (Infrastructure)│      │
│   └──────────────────┘    └──────────────────┘    └──────────────────┘      │
│            │                                               │                 │
│            │                                               │                 │
│            v                                               v                 │
│   ┌──────────────────┐                          ┌──────────────────────┐    │
│   │     Ansible      │─────────────────────────>│    Configured VM     │    │
│   │   (Configurer)   │                          │  • Gas Town          │    │
│   └──────────────────┘                          │  • Beads             │    │
│                                                 │  • Claude Code CLI   │    │
│                                                 │  • Docker            │    │
│                                                 │  • code-server IDE   │    │
│                                                 │  • tmux, Go, Git...  │    │
│                                                 └──────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### What Gets Installed

**Core Development Tools:**
- Zsh with Oh-My-Zsh (autosuggestions, syntax highlighting)
- Go 1.23+
- Git and GitHub CLI (gh)
- tmux (terminal multiplexer)
- Node.js via mise
- direnv (directory environments)

**Containerization:**
- Docker Engine
- Docker Compose v2

**Development Environment:**
- code-server (VS Code in browser, port 10000)
- lazygit (terminal Git UI)
- lazydocker (terminal Docker UI)
- mise (polyglot version manager)

**AI Assistants:**
- Claude Code CLI
- OpenAI Codex CLI
- Google Gemini CLI
- GitHub Copilot CLI

**Optional (Feature Flags):**
- Gas Town (gt) - Multi-agent workspace manager
- Beads (bd) - Git-backed issue tracker CLI
- k9s - Kubernetes TUI
- Let's Encrypt TLS certificates

---

## 3. Why It Matters

### The Problem Roughneck Solves

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    THE GAS TOWN INFRASTRUCTURE PROBLEM                         ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                                ║
║   WITHOUT ROUGHNECK:                                                           ║
║   ┌───────────────────────────────────────────────────────────────────────┐   ║
║   │                                                                        │   ║
║   │  Want Gas Town? First:                                                 │   ║
║   │  • Provision a VM manually in cloud console                            │   ║
║   │  • Configure SSH access                                                │   ║
║   │  • Install Go runtime                                                  │   ║
║   │  • Install Git, tmux, Docker...                                        │   ║
║   │  • Install Gas Town from source                                        │   ║
║   │  • Install Beads CLI                                                   │   ║
║   │  • Configure Claude Code CLI                                           │   ║
║   │  • Set up systemd services                                             │   ║
║   │  • Repeat for each environment                                         │   ║
║   │                                                                        │   ║
║   │  Time: 2-4 hours per environment                                       │   ║
║   │  Error-prone: YES                                                      │   ║
║   │  Reproducible: NO                                                      │   ║
║   │                                                                        │   ║
║   └───────────────────────────────────────────────────────────────────────┘   ║
║                                                                                ║
║   WITH ROUGHNECK:                                                              ║
║   ┌───────────────────────────────────────────────────────────────────────┐   ║
║   │                                                                        │   ║
║   │  $ ./roughneck new my-gastown                                          │   ║
║   │  > Select provider: Hetzner                                            │   ║
║   │  > Select region: fsn1                                                 │   ║
║   │  > Enable Gas Town? Yes                                                │   ║
║   │  > Enable Beads? Yes                                                   │   ║
║   │  > Deploying...                                                        │   ║
║   │                                                                        │   ║
║   │  Time: 5-10 minutes                                                    │   ║
║   │  Error-prone: NO (idempotent)                                          │   ║
║   │  Reproducible: YES (IaC)                                               │   ║
║   │                                                                        │   ║
║   └───────────────────────────────────────────────────────────────────────┘   ║
║                                                                                ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### Scaling Gas Town

Gas Town is designed to manage 20-30 agents in parallel. But where do those agents run? On beefy cloud VMs. Roughneck enables:

| Scenario | Without Roughneck | With Roughneck |
|----------|-------------------|----------------|
| **Single Gas Town** | 2-4 hours manual setup | 10 minutes automated |
| **Multiple environments** | Repeat manual setup | `./roughneck new env-2` |
| **Multi-region** | Complex manual coordination | Multi-provider deployment |
| **Disaster recovery** | Rebuild from scratch | `./roughneck deploy env-1` |
| **Team environments** | Documentation hell | Shared IaC configs |

### Cost Efficiency

Roughneck's multi-cloud support enables cost optimization:

| Provider | Monthly Cost | Best For |
|----------|--------------|----------|
| **Hetzner** | ~$4-8/mo | Budget-conscious, EU-based |
| **DigitalOcean** | ~$24/mo | Simple, developer-friendly |
| **AWS EC2** | ~$30/mo | Enterprise integration |

---

## 4. Architecture Deep Dive

### Directory Structure

```
roughneck/
├── roughneck                    # Main Python CLI entrypoint
├── lib/                         # Python library modules
│   ├── cli.py                   # CLI utilities
│   ├── config.py                # Deployment configuration
│   ├── credentials.py           # Encrypted credential management
│   ├── ansible.py               # Ansible playbook execution
│   ├── terraform.py             # Terraform/OpenTofu operations
│   ├── ssh.py                   # SSH connection utilities
│   └── cli/
│       └── commands/            # CLI command implementations
│           ├── core.py          # new, deploy, destroy, list
│           ├── manage.py        # ssh, provision, update, validate
│           ├── credentials.py   # credential management
│           └── providers.py     # provider-specific prompts
│
├── terraform/
│   ├── modules/
│   │   ├── hetzner/             # Hetzner Cloud module
│   │   ├── aws/                 # AWS EC2 module
│   │   └── digitalocean/        # DigitalOcean module
│   └── providers/               # Root module configurations
│
├── ansible/
│   ├── playbook.yml             # Main deployment playbook
│   ├── update.yml               # Update playbook
│   ├── validate.yml             # Health check playbook
│   └── roles/
│       ├── common/              # Base system setup
│       ├── docker/              # Docker installation
│       ├── code-server/         # Browser IDE
│       ├── claude/              # Claude Code CLI
│       ├── roughneck/           # Gas Town installation
│       ├── beads/               # Beads CLI installation
│       ├── systemd/             # Service management
│       └── ...                  # 20+ additional roles
│
└── deployments/                 # Per-deployment isolation
    └── <name>/
        ├── terraform/           # Isolated Terraform state
        ├── terraform.tfvars     # Deployment configuration
        ├── terraform.tfstate    # Infrastructure state
        ├── inventory.ini        # Ansible inventory
        └── generated_key        # SSH keypair
```

### Deployment Isolation Model

Each deployment is **fully isolated**:

```
deployments/
├── gastown-prod/               # Production Gas Town
│   ├── terraform.tfstate       # Independent state
│   ├── inventory.ini           # Own inventory
│   └── generated_key           # Own SSH key
│
├── gastown-dev/                # Development Gas Town
│   ├── terraform.tfstate       # Independent state
│   ├── inventory.ini           # Own inventory
│   └── generated_key           # Own SSH key
│
└── gastown-eu/                 # EU-region Gas Town
    ├── terraform.tfstate       # Independent state
    ├── inventory.ini           # Own inventory
    └── generated_key           # Own SSH key
```

**Why this matters:** Updates to Roughneck itself won't affect existing deployments. Each environment maintains its own infrastructure state.

### Gas Town Ansible Role

The `roughneck` Ansible role installs Gas Town from source:

```yaml
# ansible/roles/roughneck/tasks/main.yml (conceptual)
- name: Clone Gas Town repository
  git:
    repo: "{{ roughneck_repo }}"
    dest: "/home/{{ roughneck_user }}/gastown"
    version: "{{ roughneck_branch }}"

- name: Build Gas Town
  shell: |
    source ~/.bashrc
    make build
  args:
    creates: "/home/{{ roughneck_user }}/go/bin/gt"

- name: Initialize Gas Town HQ
  shell: gt install ~/gt --git

- name: Configure PATH
  lineinfile:
    path: "/home/{{ roughneck_user }}/.bashrc"
    line: 'export PATH="$HOME/go/bin:$PATH"'
```

### Beads Installation

Beads installs via Go:

```yaml
# ansible/roles/beads/tasks/main.yml
- name: Install beads CLI via Go
  become_user: "{{ roughneck_user }}"
  shell: |
    export PATH="/usr/local/go/bin:$HOME/go/bin:$PATH"
    go install github.com/steveyegge/beads/cmd/bd@latest
  args:
    creates: "/home/{{ roughneck_user }}/go/bin/bd"
```

### Systemd Services

When Gas Town is enabled, Roughneck configures systemd services:

```
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

This ensures Gas Town's Mayor and Deacon services start on boot and restart on failure.

---

## 5. Key Features

### CLI Commands

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

### Smart Resume Detection

Roughneck's `deploy` command detects existing state and resumes:

```python
# lib/cli/commands/core.py (conceptual)
def do_deploy(name: str):
    """Orchestrates deployment with intelligent resumption."""

    # Check for existing Terraform state
    if terraform_state_exists(name):
        # Skip Terraform apply, go straight to Ansible
        info("Infrastructure exists, running configuration...")
    else:
        # Full deployment from scratch
        terraform.init(name)
        terraform.apply(name)

    ansible.run_playbook(name)
```

### Credential Encryption

API keys are encrypted using `age`:

```bash
# Encrypt credentials with age
$ age-keygen -o ~/.roughneck/age.key
$ ./roughneck credentials
> Select provider: Hetzner
> Profile name: personal-hetzner
> API Token: [encrypted and stored]
```

Credentials stored in `~/.roughneck/credentials/` are encrypted at rest.

### Validation and Health Checks

Post-deployment validation verifies:

```
✓ Systemd services running (docker, code-server)
✓ Ports available (22, 10000)
✓ HTTP endpoints responsive
✓ Docker functional
✓ CLI tools installed (gt, bd, claude, gh)
```

---

## 6. Installation and Setup

### Prerequisites Installation

```bash
# macOS
brew install terraform ansible age

# Ubuntu/Debian
sudo apt install terraform ansible
go install filippo.io/age/cmd/age@latest

# Verify
terraform --version
ansible --version
```

### Clone Roughneck

```bash
git clone https://github.com/mjtechguy/roughneck.git
cd roughneck
```

### First Deployment

```bash
# Interactive wizard
./roughneck new my-first-gastown

# Prompts:
# > Select provider: [Hetzner/AWS/DigitalOcean]
# > Enter API credentials
# > Select region
# > Select instance size
# > Enable Gas Town? [y/n]
# > Enable Beads? [y/n]
# > Enable Let's Encrypt? [y/n]

# Wait 5-10 minutes for deployment
```

### Connect to Your Environment

```bash
# SSH access
./roughneck ssh my-first-gastown

# Or direct SSH
ssh -i deployments/my-first-gastown/generated_key root@<ip>

# Access code-server (browser IDE)
# Open: http://<ip>:10000
```

---

## 7. Configuration Options

### Feature Flags

The `terraform.tfvars` file controls enabled features:

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

### Provider-Specific Settings

**Hetzner Cloud:**
```hcl
provider = "hetzner"
region = "fsn1"              # Falkenstein, Germany
instance_type = "cx21"       # 2 vCPU, 4GB RAM, ~$4/mo
```

**AWS EC2:**
```hcl
provider = "aws"
region = "us-east-1"
instance_type = "t3.medium"  # 2 vCPU, 4GB RAM, ~$30/mo
```

**DigitalOcean:**
```hcl
provider = "digitalocean"
region = "nyc1"
instance_type = "s-2vcpu-4gb"  # 2 vCPU, 4GB RAM, ~$24/mo
```

---

## 8. Multi-Factory Patterns

### Pattern 1: Environment Isolation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ENVIRONMENT ISOLATION PATTERN                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ./roughneck new gastown-prod     ./roughneck new gastown-dev              │
│            │                                │                                │
│            v                                v                                │
│   ┌────────────────┐              ┌────────────────┐                        │
│   │  Production    │              │  Development   │                        │
│   │  Gas Town      │              │  Gas Town      │                        │
│   │                │              │                │                        │
│   │  • Stable gt   │              │  • Latest gt   │                        │
│   │  • Prod beads  │              │  • Test beads  │                        │
│   │  • Auto-start  │              │  • Manual      │                        │
│   └────────────────┘              └────────────────┘                        │
│                                                                              │
│   USE CASE: Separate environments for testing Gas Town upgrades             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Pattern 2: Geographic Distribution

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    GEOGRAPHIC DISTRIBUTION PATTERN                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│        US (AWS us-east-1)    EU (Hetzner fsn1)    APAC (DO sgp1)            │
│               │                     │                   │                    │
│               v                     v                   v                    │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐          │
│   │  gastown-us      │  │  gastown-eu      │  │  gastown-apac    │          │
│   │                  │  │                  │  │                  │          │
│   │  US projects     │  │  EU projects     │  │  APAC projects   │          │
│   │  Low latency     │  │  GDPR compliant  │  │  Local dev team  │          │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘          │
│                                                                              │
│   USE CASE: Global team with regional compliance requirements               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Pattern 3: Cost Optimization

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COST OPTIMIZATION PATTERN                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   High-Priority Work              Low-Priority Work                         │
│   (AWS t3.xlarge)                 (Hetzner cx21)                            │
│         │                               │                                    │
│         v                               v                                    │
│   ┌──────────────────┐          ┌──────────────────┐                        │
│   │  gastown-fast    │          │  gastown-cheap   │                        │
│   │                  │          │                  │                        │
│   │  8 vCPU, 32GB    │          │  2 vCPU, 4GB     │                        │
│   │  ~$150/mo        │          │  ~$4/mo          │                        │
│   │                  │          │                  │                        │
│   │  Urgent fixes    │          │  Background      │                        │
│   │  Production bugs │          │  refactoring     │                        │
│   └──────────────────┘          └──────────────────┘                        │
│                                                                              │
│   USE CASE: Optimize cost by matching instance size to workload priority    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Pattern 4: Federated Gas Towns

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FEDERATED GAS TOWNS PATTERN                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                         Shared Git Remote                                    │
│                     (GitHub / GitLab / Gitea)                                │
│                              │                                               │
│              ┌───────────────┼───────────────┐                               │
│              │               │               │                               │
│              v               v               v                               │
│   ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐            │
│   │  Gas Town 1      │ │  Gas Town 2      │ │  Gas Town 3      │            │
│   │  (Frontend)      │ │  (Backend)       │ │  (Infra)         │            │
│   │                  │ │                  │ │                  │            │
│   │  Beads: fe-*     │ │  Beads: be-*     │ │  Beads: infra-*  │            │
│   │  Worktrees: UI   │ │  Worktrees: API  │ │  Worktrees: TF   │            │
│   └──────────────────┘ └──────────────────┘ └──────────────────┘            │
│              │               │               │                               │
│              └───────────────┴───────────────┘                               │
│                              │                                               │
│                         Git Push/Pull                                        │
│                    (Beads sync via git)                                      │
│                                                                              │
│   USE CASE: Specialized Gas Towns per domain, coordinated via shared repo   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Integration Patterns

### With Gas Town

Roughneck provisions infrastructure where Gas Town runs. The integration is built-in:

```bash
# Deploy Gas Town-enabled environment
./roughneck new my-gastown
# Enable Gas Town: yes
# Enable Beads: yes

# SSH in and verify
./roughneck ssh my-gastown
gt version    # Gas Town CLI
bd version    # Beads CLI

# Gas Town services running
systemctl status roughneck-mayor
systemctl status roughneck-deacon
```

**Coordinating Multiple Gas Towns:**

Each Roughneck deployment gets its own isolated Gas Town. Coordination happens via:
1. **Shared Git remotes** - Push/pull code between Gas Towns
2. **Beads sync** - Beads uses git for persistence, so `git push/pull` syncs issue state
3. **MCP Agent Mail** - Cross-agent messaging (configure separately)

```yaml
# Example: Cross-factory coordination config
# ~/.config/mcp-agent-mail/config.yaml
agents:
  gastown-1:
    host: "gastown-1.example.com"
  gastown-2:
    host: "gastown-2.example.com"
```

### With Beads

Beads is installed alongside Gas Town:

```bash
# In your Roughneck-provisioned environment
bd init my-project    # Initialize beads
bd new "Fix login bug"   # Create an issue
bd list                  # List issues

# Beads sync across Gas Towns via git
cd ~/gt/rigs/my-project
git push origin main     # Beads state travels with git
```

**Shared Data Plane Across Gas Towns:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SHARED BEADS DATA PLANE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│       Gas Town 1                           Gas Town 2                        │
│   ┌────────────────┐                   ┌────────────────┐                   │
│   │  Mayor         │                   │  Mayor         │                   │
│   │  Polecats      │                   │  Polecats      │                   │
│   │  ┌──────────┐  │                   │  ┌──────────┐  │                   │
│   │  │ Beads DB │  │ ◄──── git sync ───► │ │ Beads DB │  │                   │
│   │  └──────────┘  │                   │  └──────────┘  │                   │
│   └────────────────┘                   └────────────────┘                   │
│                                                                              │
│   Both Gas Towns share Beads state via git remote                           │
│   Issues created in one appear in the other after sync                      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### With Ralph

Ralph loops can run on Roughneck-provisioned environments:

```bash
# On your Roughneck VM
# ralph-loop.sh
while true; do
  cat PROMPT.md | claude --dangerously-skip-permissions
  sleep 1
done
```

**Distributed Ralph Loops:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DISTRIBUTED RALPH PATTERN                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   Local Machine                    Roughneck VM (gastown-1)                 │
│   ┌──────────────┐                 ┌──────────────────────┐                 │
│   │  You (human) │                 │  Ralph Loop          │                 │
│   │              │ ──── SSH ─────► │  + Gas Town Mayor    │                 │
│   │  Monitoring  │                 │  + 20 Polecats       │                 │
│   │  PROMPT.md   │ ◄─── git ─────► │                      │                 │
│   └──────────────┘                 └──────────────────────┘                 │
│                                                                              │
│   You edit PROMPT.md locally, Ralph picks it up on the VM                   │
│   Results committed to git, visible locally                                 │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Combination Matrix

| Roughneck + | Use Case | Complexity | Value |
|-------------|----------|------------|-------|
| **Gas Town** | Single agent factory in cloud | Medium | High |
| **Multi-Gas Town** | Environment isolation (prod/dev) | Medium | Very High |
| **Geographic Gas Towns** | Regional compliance, latency | High | Very High |
| **Beads** | Shared data plane across instances | Medium | Very High |
| **Cross-GT Beads** | Federated issue tracking | High | Very High |
| **Ralph** | Continuous loops on cloud VMs | Low | High |
| **Distributed Ralph** | Ralph across multiple factories | High | High |
| **CC Mirror** | Native multi-agent + Roughneck | High | Very High |

---

## 10. Mental Models

### Model 1: Factory Construction Company

```
TRADITIONAL FACTORY          ROUGHNECK RELATIONSHIP
━━━━━━━━━━━━━━━━━━━━        ━━━━━━━━━━━━━━━━━━━━━━━━━━

Land                         Cloud provider account
Building contractor          Roughneck CLI
Blueprints                   Terraform modules
Interior setup               Ansible playbooks
Factory floor                Gas Town
Workers                      Polecats (AI agents)
Factory manager              Mayor
Quality control              Deacon/Witness
Work orders                  Beads
```

**Mental shortcut:** Roughneck is the construction company that builds the factory. Gas Town is what runs inside the factory. Beads is the work order system.

### Model 2: Kubernetes Analogy

```
KUBERNETES                   ROUGHNECK/GAS TOWN
━━━━━━━━━━━━                 ━━━━━━━━━━━━━━━━━━

Cluster                      Gas Town HQ
Node                         Rig (project)
kubelet                      Witness
Pod                          Polecat
kube-scheduler               Mayor
etcd                         Beads
kubectl                      gt CLI
Terraform (infra)            Roughneck
```

### Model 3: The Three Layers

```
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 3: ORCHESTRATION                                         │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Gas Town - Manages agents, assigns work, coordinates     │  │
│  │  "The factory floor operations"                           │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: DATA PLANE                                            │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Beads - Tracks issues, dependencies, agent memory        │  │
│  │  "The work order and memory system"                       │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 1: INFRASTRUCTURE                                        │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Roughneck - Provisions VMs, installs software            │  │
│  │  "The construction company"                               │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 11. Checkpoints

### Checkpoint 1: Roughneck Installation

**You should see:**
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

**If you don't see this:**
- Verify Python 3.10+ is installed
- Check you're in the roughneck directory
- Run `pip install typer rich questionary requests`

### Checkpoint 2: Successful Deployment

**You should see:**
```
✓ Terraform init complete
✓ Terraform apply complete
✓ Ansible playbook complete
✓ All services validated

Deployment 'my-gastown' ready!
  IP: 65.21.xxx.xxx
  SSH: ./roughneck ssh my-gastown
  IDE: http://65.21.xxx.xxx:10000
```

**If you don't see this:**
- Check cloud provider credentials
- Verify API token permissions
- Review Terraform error output
- Check Ansible connectivity

### Checkpoint 3: Gas Town Running

**You should see:**
```bash
$ ./roughneck ssh my-gastown
$ gt version
Gas Town v0.x.x

$ bd version
Beads v0.x.x

$ systemctl status roughneck-mayor
● roughneck-mayor.service
   Active: active (running)
```

**If you don't see this:**
- Verify `enable_gastown = true` in tfvars
- Re-run provisioning: `./roughneck provision my-gastown`
- Check Go installation: `go version`

### Checkpoint 4: Multiple Deployments

**You should see:**
```bash
$ ./roughneck list
NAME            PROVIDER    IP              STATUS
gastown-prod    hetzner     65.21.xxx.xxx   active
gastown-dev     aws         52.xx.xxx.xxx   active
gastown-eu      hetzner     95.xx.xxx.xxx   active
```

**If you don't see this:**
- Each deployment needs its own credentials
- Check `deployments/` directory structure
- Verify Terraform state files exist

---

## 12. Troubleshooting

### Error: Terraform init failed

**Symptoms:**
```
Error: Failed to query available provider packages
```

**Solutions:**
1. Check internet connectivity
2. Verify Terraform version: `terraform --version` (needs 1.0+)
3. Try OpenTofu instead: `brew install opentofu`
4. Clear cache: `rm -rf .terraform*`

### Error: Ansible connection refused

**Symptoms:**
```
fatal: [target]: UNREACHABLE! => {"msg": "Failed to connect to the host"}
```

**Solutions:**
1. Wait 2-3 minutes for VM to fully boot
2. Verify SSH key: `ssh -i deployments/<name>/generated_key root@<ip>`
3. Check cloud firewall allows SSH (port 22)
4. Verify inventory file: `cat deployments/<name>/inventory.ini`

### Error: Gas Town not installed

**Symptoms:**
```bash
$ gt version
-bash: gt: command not found
```

**Solutions:**
1. Check feature flag: `grep enable_gastown deployments/<name>/terraform.tfvars`
2. Source bash profile: `source ~/.bashrc`
3. Check PATH: `echo $PATH | grep go/bin`
4. Verify Go binary: `ls ~/go/bin/gt`

### Error: Beads not syncing between Gas Towns

**Symptoms:**
- Issues created in Gas Town 1 don't appear in Gas Town 2

**Solutions:**
1. Beads uses git - you must push/pull manually
2. In Gas Town 1: `cd ~/gt/rigs/project && git push`
3. In Gas Town 2: `cd ~/gt/rigs/project && git pull`
4. Verify same remote: `git remote -v`

### Error: code-server not accessible

**Symptoms:**
- Browser can't reach `http://<ip>:10000`

**Solutions:**
1. Check firewall: cloud provider must allow port 10000
2. Check service: `systemctl status code-server`
3. Check binding: `netstat -tlnp | grep 10000`
4. Try SSH tunnel: `ssh -L 10000:localhost:10000 root@<ip>`

### Error: Deployment destroy failed

**Symptoms:**
```
Error: Failed to destroy resources
```

**Solutions:**
1. Check cloud provider console for orphaned resources
2. Try again: `./roughneck destroy <name> --force`
3. Manually delete via provider CLI/console
4. Remove local state: `rm -rf deployments/<name>`

---

## 13. Source Attribution

### Primary Source

| Attribute | Value |
|-----------|-------|
| **Repository** | https://github.com/mjtechguy/roughneck |
| **Author** | mjtechguy |
| **License** | (Check repository) |
| **Language** | Python (CLI), Terraform (IaC), Ansible (Config) |
| **Stars** | Check current |
| **Last Updated** | Active development |

### Related Projects

| Project | Author | Relationship |
|---------|--------|--------------|
| **Gas Town** | Steve Yegge | Multi-agent orchestrator that Roughneck installs |
| **Beads** | Steve Yegge | Data plane that Roughneck installs |
| **OrchestrAItor** | mjtechguy | Related CLI-to-Ansible tool by same author |

### Web Search Sources

- [Gas Town GitHub](https://github.com/steveyegge/gastown)
- [Welcome to Gas Town (Medium)](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04)
- [A Day in Gas Town (DoltHub)](https://www.dolthub.com/blog/2026-01-15-a-day-in-gas-town/)
- [GasTown and the Two Kinds of Multi-Agent](https://paddo.dev/blog/gastown-two-kinds-of-multi-agent/)

### Reliability Rating

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Technical Accuracy** | High | Working code, real deployments |
| **Completeness** | Medium | Core features documented, advanced patterns inferred |
| **Currency** | High | Active development |
| **Originality** | High | Novel approach to Gas Town provisioning |

---

## Tags

`#infrastructure` `#gas-town` `#terraform` `#ansible` `#multi-cloud` `#beads` `#provisioning` `#devops` `#ai-agents` `#level-7` `#factory-pattern`

---

## Document Metadata

| Field | Value |
|-------|-------|
| **Extraction ID** | 036 |
| **Category** | orchestration |
| **Lines** | 950+ |
| **Created** | 2026-01-19 |
| **Author** | Claude (Agent B3-T3-8) |
| **Source Type** | GitHub repository |
| **Extraction Method** | Web fetch + analysis |
