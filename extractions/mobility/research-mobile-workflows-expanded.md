# Mobile Development Workflows with Claude Code - Expanded Research

---
## D-FINAL Connection

**This content contributed to:**
- D-FINAL-implementation.md: Informed Section 1 (Context Management - session persistence), Section 4 (Hook Templates - notification patterns), Section 5 (Enterprise Implementation - remote access security)
- D-FINAL-operations.md: Informed Section 1 (Monitoring - session tracking), Section 3 (Security Operations - VPN hardening), Section 4 (Operational Checklists - mobile setup)

**GAP STATUS:** **This content fills a D-FINAL gap - mobile coverage not in D-FINAL**

This is the comprehensive mobile reference document synthesizing patterns from multiple sources. Unique contributions not in D-FINAL:
- Complete phone-first development architectures (3 variants)
- SSH client comparison (Termius, Blink, Prompt 3, Termux)
- Push notification service comparison (Poke, Pushover, ntfy, Telegram)
- tmux configurations optimized for mobile
- Tailscale/ZeroTier/WireGuard VPN comparisons
- iPad-as-primary-dev-machine patterns
- Voice-to-code workflow architectures
- Offline/low-bandwidth strategies
- Battery/heat management for extended mobile sessions

**Platform-specific considerations:**
- iOS: Blink, Termius, Working Copy, Stage Manager
- Android: Termux (can run Claude Code locally!)
- Cloud: Hetzner, Vultr, DigitalOcean, AWS, GCP cost comparison
- Hardware: Keyboard recommendations, power management

**Journey references:**
- [journey-implementation.md - Infrastructure deployment]
- [journey-operations.md - Remote monitoring patterns]

**Last enhanced:** 2026-01-18 (Phase 2B)

---

A comprehensive corpus of mobile-first development patterns, cloud infrastructure configurations, and asynchronous workflows for running Claude Code from anywhere.

---

## Table of Contents

1. [Phone-First Development Workflows](#1-phone-first-development-workflows)
2. [Cloud VM Setups](#2-cloud-vm-setups)
3. [SSH Clients for Mobile](#3-ssh-clients-for-mobile)
4. [tmux Configuration](#4-tmux-configuration)
5. [Secure Remote Access (VPN/Mesh Networks)](#5-secure-remote-access)
6. [Push Notification Systems](#6-push-notification-systems)
7. [Claude Code Hooks for Mobile](#7-claude-code-hooks-for-mobile)
8. [iPad/Tablet Development](#8-ipad-tablet-development)
9. [Teleportation Patterns](#9-teleportation-patterns)
10. [Voice-to-Code Workflows](#10-voice-to-code-workflows)
11. [Offline/Low-Bandwidth Strategies](#11-offline-low-bandwidth-strategies)
12. [Production Mobile Workflows](#12-production-mobile-workflows)
13. [Battery/Heat Management](#13-battery-heat-management)
14. [GitHub Codespaces / Gitpod](#14-github-codespaces-gitpod)
15. [Implementation Templates](#15-implementation-templates)

---

## 1. Phone-First Development Workflows

### Core Pattern: Async Agent Orchestration

**Source:** @dabit3 (Nader Dabit), @mgranda, community synthesis

The fundamental shift: **software development as an asynchronous, agent-orchestrated process that interleaves with life, rather than a synchronous, focused activity requiring dedicated hardware/time.**

```
┌─────────────────────────────────────────────────────────────┐
│  Traditional Development                                    │
│  [Open laptop] → [Focus 2-4 hours] → [Close laptop]        │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  Mobile-First Development                                   │
│  [Start agents] → [Go about day] → [Phone buzzes] →        │
│  [Quick response] → [Agents continue] → [Review later]      │
└─────────────────────────────────────────────────────────────┘
```

### The Three Architectures

#### Architecture A: Cloud VM (Maximum Flexibility)
```
Phone → Tailscale → Cloud VM (Hetzner/Vultr/AWS) → tmux → Claude Code
```
- **Cost:** $5-20/day depending on specs
- **Best for:** Heavy parallel workloads, team setups, isolation needs
- **Latency:** Depends on region selection

#### Architecture B: Home Mac/PC (Zero Cost)
```
Phone → Tailscale → Home Mac → tmux → Claude Code
```
- **Cost:** $0 (electricity only)
- **Best for:** Personal use, always-on home setup
- **Caveat:** Must keep machine running, lid open (Mac)

#### Architecture C: Hybrid (Best of Both)
```
Phone → Tailscale → [Home Mac for light work | VM for heavy work]
```
- **Cost:** $0-7/day depending on usage
- **Best for:** Cost-conscious power users

### Workflow Patterns

#### Pattern 1: Morning Kickoff
1. Wake up, coffee
2. SSH into VM from phone
3. Review overnight agent progress in tmux
4. Kick off new tasks for the day
5. Go to work/life

#### Pattern 2: Gap Development
1. 10-minute break between meetings
2. Pull out phone, check tmux
3. Agent asking question → respond
4. Agent needs review → quick approval
5. Back to meeting

#### Pattern 3: Evening Review
1. SSH in after dinner
2. Review all agent outputs
3. Merge successful branches
4. Queue up overnight tasks
5. Sleep while agents work

---

## 2. Cloud VM Setups

### Provider Comparison

| Provider | Recommended Tier | Monthly Cost | Strengths |
|----------|-----------------|--------------|-----------|
| **Hetzner** | CX31 (4 vCPU, 8GB) | ~$13 | Best price/performance in EU |
| **Vultr** | vhf-8c-32gb | ~$210 | US presence, hourly billing |
| **DigitalOcean** | s-4vcpu-8gb | ~$48 | Simple UX, good docs |
| **AWS EC2** | t3.xlarge | ~$120 | Enterprise features |
| **GCP** | e2-standard-4 | ~$100 | GCP ecosystem |
| **Linode** | Dedicated 8GB | ~$72 | Solid performance |
| **Oracle Cloud** | Always Free VM | $0 | Free tier (limited) |

### Hetzner Setup (Best Value)

```bash
# 1. Create server via Hetzner Cloud Console or CLI
hcloud server create \
  --name claude-dev \
  --type cx31 \
  --image ubuntu-24.04 \
  --location nbg1 \
  --ssh-key your-key-name

# 2. Basic hardening
apt update && apt upgrade -y
apt install -y fail2ban ufw
ufw allow from 100.64.0.0/10  # Tailscale only
ufw enable

# 3. Install essentials
apt install -y tmux mosh git curl jq nodejs npm
curl -fsSL https://cli.anthropic.com/install.sh | sh

# 4. Install Tailscale
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

# 5. Configure for Claude Code
npm install -g @anthropic/claude-code
```

### Vultr Hourly Setup (Pay-As-You-Go)

**Source:** @dabit3 workflow

```bash
# Create via API for iOS Shortcut automation
curl -X POST "https://api.vultr.com/v2/instances" \
  -H "Authorization: Bearer $VULTR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "region": "ewr",
    "plan": "vhf-8c-32gb",
    "os_id": 2284,
    "label": "claude-dev",
    "sshkey_id": ["your-key-id"]
  }'
```

**vm-start script:**
```bash
#!/bin/bash
INSTANCE_ID="your-instance-id"
curl -X POST "https://api.vultr.com/v2/instances/$INSTANCE_ID/start" \
  -H "Authorization: Bearer $VULTR_API_KEY"
```

**vm-stop script:**
```bash
#!/bin/bash
INSTANCE_ID="your-instance-id"
curl -X POST "https://api.vultr.com/v2/instances/$INSTANCE_ID/halt" \
  -H "Authorization: Bearer $VULTR_API_KEY"
```

### AWS EC2 with Spot Instances (Cost Optimization)

```bash
# Launch spot instance (70-90% cheaper)
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --instance-type t3.xlarge \
  --instance-market-options '{"MarketType":"spot","SpotOptions":{"MaxPrice":"0.05"}}' \
  --key-name your-key \
  --security-groups tailscale-only

# Set up auto-persistence
aws ec2 create-fleet \
  --spot-options '{"AllocationStrategy":"lowest-price","InstanceInterruptionBehavior":"hibernate"}'
```

### Security Best Practices

1. **No Public SSH** - Use Tailscale/VPN only
2. **Cloud Firewall** - Block all except VPN CIDR
3. **fail2ban** - Rate limit auth attempts
4. **Non-root user** - Never run Claude as root
5. **SSH key only** - No password auth
6. **Regular updates** - Automate with unattended-upgrades

```bash
# /etc/ssh/sshd_config
Port 47892  # Non-standard port
PermitRootLogin no
PasswordAuthentication no
AllowUsers devuser
```

---

## 3. SSH Clients for Mobile

### iOS Apps

#### Termius (Recommended)
- **URL:** https://termius.com
- **Price:** Free tier, $10/month for sync
- **Strengths:** Beautiful UI, snippet sync, SFTP, mosh support
- **Setup:**
  1. Add host with Tailscale IP
  2. Import SSH key or generate new
  3. Enable "Reconnect automatically"
  4. Set up snippets for common commands

#### Blink Shell
- **URL:** https://blink.sh
- **Price:** $20 one-time
- **Strengths:** Native mosh, Files app integration, keyboard customization
- **Why mosh matters:** Survives network transitions (WiFi → cellular)

**Source:** @TylerIsBuilding recommends Blink for mosh

#### Prompt 3
- **URL:** https://panic.com/prompt
- **Price:** $25 one-time
- **Strengths:** Clean design, reliable, Panic quality
- **Note:** No mosh support

#### a]Shell
- **URL:** a-shell.app
- **Price:** Free/open source
- **Strengths:** Local terminal + SSH, can run Python locally
- **Use case:** Hybrid local/remote workflows

### Android Apps

#### Termux + OpenSSH
- **URL:** termux.com
- **Price:** Free
- **Strengths:** Full Linux environment, can run Claude Code locally (!)
- **Setup:**
```bash
pkg install openssh mosh tmux
ssh-keygen -t ed25519
ssh devuser@100.x.x.x
```

#### JuiceSSH
- **URL:** juicessh.com
- **Price:** Free, $5 pro
- **Strengths:** Snippet library, session logging

### Keyboard Recommendations

For serious mobile coding:

| Keyboard | Platform | Price | Notes |
|----------|----------|-------|-------|
| **Apple Magic Keyboard** | iOS | $99 | Best for iPad |
| **Logitech K380** | Both | $40 | Multi-device, compact |
| **Keychron K3** | Both | $84 | Mechanical, low-profile |
| **Folding Bluetooth** | Both | $30 | Ultra-portable |

---

## 4. tmux Configuration

### Auto-Attach Configuration

**~/.zshrc or ~/.bashrc:**
```bash
# Auto-attach to tmux on SSH login
if [[ -z "$TMUX" ]] && [[ -n "$SSH_CONNECTION" ]]; then
  tmux attach -t main 2>/dev/null || tmux new -s main
fi
```

### Mobile-Optimized tmux.conf

```bash
# ~/.tmux.conf - Mobile-optimized configuration

# Basics
set -g default-terminal "screen-256color"
set -g history-limit 50000
set -g mouse on

# Faster key response
set -s escape-time 0

# Start windows and panes at 1, not 0 (easier on phone)
set -g base-index 1
setw -g pane-base-index 1

# Larger scrollback for catching up on agent work
set -g history-limit 100000

# Status bar - show which agent/branch in each window
set -g status-interval 5
set -g status-left-length 30
set -g status-right-length 60
set -g status-left '#[fg=green]#S #[fg=white]| '
set -g status-right '#[fg=yellow]#(cd #{pane_current_path} && git branch --show-current) #[fg=white]| #[fg=cyan]%H:%M'

# Window names auto-update to current directory
set -g automatic-rename on
set -g automatic-rename-format '#{b:pane_current_path}'

# Easy pane switching (good for phone keyboards)
bind -n M-h select-pane -L
bind -n M-j select-pane -D
bind -n M-k select-pane -U
bind -n M-l select-pane -R

# Quick window switching
bind -n M-1 select-window -t 1
bind -n M-2 select-window -t 2
bind -n M-3 select-window -t 3
bind -n M-4 select-window -t 4
bind -n M-5 select-window -t 5
bind -n M-6 select-window -t 6

# Split panes with easier keys
bind | split-window -h -c "#{pane_current_path}"
bind - split-window -v -c "#{pane_current_path}"

# Reload config
bind r source-file ~/.tmux.conf \; display "Reloaded!"

# Copy mode improvements
setw -g mode-keys vi
bind -T copy-mode-vi v send -X begin-selection
bind -T copy-mode-vi y send -X copy-selection-and-cancel

# Session persistence (survives reboot)
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'
set -g @continuum-restore 'on'

# Initialize TMUX plugin manager
run '~/.tmux/plugins/tpm/run'
```

### Multi-Agent tmux Layout

```bash
#!/bin/bash
# create-agent-layout.sh - Set up 6-agent layout

SESSION="agents"

# Create session with first window
tmux new-session -d -s $SESSION -n "agent-1"

# Create additional windows for each agent
for i in {2..6}; do
  tmux new-window -t $SESSION -n "agent-$i"
done

# Create overview window with all agents visible
tmux new-window -t $SESSION -n "overview"
tmux split-window -h -t $SESSION:overview
tmux split-window -v -t $SESSION:overview.1
tmux split-window -v -t $SESSION:overview.2
tmux split-window -h -t $SESSION:overview.3
tmux split-window -h -t $SESSION:overview.4

# Attach
tmux attach -t $SESSION
```

### tmux + rpai Integration

**Source:** @radoslav11's rpai tool

```bash
# Install rpai for agent monitoring
cargo install rpai

# Run in tmux to see all agents
rpai
```

rpai provides a TUI dashboard showing:
- All running Claude/Codex/Cursor agents
- Status (running/idle/waiting)
- Output preview
- One-click jump to agent pane

---

## 5. Secure Remote Access

### Tailscale (Recommended)

**Why Tailscale:**
- Zero config VPN
- Works through NAT/firewalls
- End-to-end encrypted
- Free for personal use (100 devices)

**Setup:**
```bash
# On VM/Mac
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

# Note the Tailscale IP (100.x.x.x)
tailscale ip -4

# On phone
# Download Tailscale app, sign in, auto-connects
```

**Advanced: Exit Nodes**
Route all phone traffic through your VM for consistent IP:
```bash
# On VM
tailscale up --advertise-exit-node

# On phone
# Enable exit node in Tailscale app settings
```

**MagicDNS:**
Access devices by name instead of IP:
```
ssh devuser@claude-vm  # Instead of 100.x.x.x
```

### ZeroTier (Self-Hostable Alternative)

```bash
# On VM
curl -s https://install.zerotier.com | sudo bash
zerotier-cli join YOUR_NETWORK_ID

# On phone
# Download ZeroTier app, join same network
```

**Advantages over Tailscale:**
- Fully self-hostable (own controller)
- More network topology control
- Works in restricted environments

### WireGuard (DIY Option)

For maximum control, run your own WireGuard server:

```bash
# On VM
apt install wireguard
wg genkey | tee privatekey | wg pubkey > publickey

# /etc/wireguard/wg0.conf
[Interface]
Address = 10.0.0.1/24
PrivateKey = <server-private-key>
ListenPort = 51820

[Peer]
PublicKey = <phone-public-key>
AllowedIPs = 10.0.0.2/32
```

**Phone Setup:**
- iOS: Official WireGuard app
- Android: Official WireGuard app
- Import config via QR code

### SSH Hardening with VPN

Once VPN is working, lock down SSH completely:

```bash
# /etc/ssh/sshd_config
ListenAddress 100.x.x.x  # Tailscale IP only
# or
ListenAddress 10.0.0.1   # WireGuard IP only
```

```bash
# Firewall
ufw default deny incoming
ufw allow from 100.64.0.0/10  # Tailscale CIDR
ufw enable
```

---

## 6. Push Notification Systems

### The Why

When Claude needs input, you shouldn't have to constantly check. Notifications bring the async loop to you.

### Poke (iOS)

**Source:** @dabit3 workflow

- **URL:** https://poke.fm
- **Setup:**
  1. Create Poke account
  2. Get webhook URL
  3. Configure Claude hook to POST to webhook

**Webhook Format:**
```bash
curl -X POST "https://api.poke.fm/v1/notify" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title": "Claude Code", "body": "Agent needs input"}'
```

### Pushover (Cross-Platform)

- **URL:** https://pushover.net
- **Price:** $5 one-time per platform
- **Strengths:** Reliable, priority levels, quiet hours

**API Usage:**
```bash
curl -s \
  --form-string "token=APP_TOKEN" \
  --form-string "user=USER_KEY" \
  --form-string "message=Claude needs input: $QUESTION" \
  --form-string "priority=1" \
  https://api.pushover.net/1/messages.json
```

### ntfy (Self-Hosted/Free)

- **URL:** https://ntfy.sh
- **Price:** Free (hosted or self-host)
- **Strengths:** Open source, no account needed, topic-based

**Usage:**
```bash
# Send notification
curl -d "Claude needs: $QUESTION" ntfy.sh/your-topic

# Subscribe on phone
# Just open https://ntfy.sh/your-topic in browser
# Or use ntfy app
```

### Telegram Bot (Free, Reliable)

```bash
# Create bot via @BotFather, get token
# Get your chat_id by messaging the bot

# Send notification
curl -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
  -d chat_id="$CHAT_ID" \
  -d text="Claude needs input: $QUESTION"
```

### Discord Webhook

```bash
curl -X POST "$DISCORD_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"content": "Claude needs input: '"$QUESTION"'"}'
```

### Slack Webhook

```bash
curl -X POST "$SLACK_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"text": "Claude needs input: '"$QUESTION"'"}'
```

### Comparison

| Service | Platform | Cost | Self-Host | Priority Levels |
|---------|----------|------|-----------|-----------------|
| Poke | iOS | Free | No | No |
| Pushover | All | $5 | No | Yes |
| ntfy | All | Free | Yes | Yes |
| Telegram | All | Free | No | No |
| Discord | All | Free | No | No |
| Slack | All | Free | No | No |

---

## 7. Claude Code Hooks for Mobile

### Hook Architecture

Claude Code hooks are shell commands (not AI prompts) that trigger on lifecycle events.

**Events:**
- `PreToolUse` - Before a tool executes
- `PostToolUse` - After a tool completes
- `SessionStart` - Session begins
- `SessionEnd` - Session ends

### Mobile Notification Hook

**~/.claude/settings.json:**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "AskUserQuestion",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/notify-mobile.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Task",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/task-complete.sh"
          }
        ]
      }
    ]
  }
}
```

**~/.claude/hooks/notify-mobile.sh:**
```bash
#!/bin/bash
# Extract question from event data
QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question // .tool_input.question // "Input needed"')
PROJECT=$(basename "$PWD")

# Choose your notification service
# Option 1: Pushover
curl -s \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=Claude: $PROJECT" \
  --form-string "message=$QUESTION" \
  --form-string "priority=1" \
  https://api.pushover.net/1/messages.json

# Option 2: ntfy
# curl -d "$PROJECT: $QUESTION" ntfy.sh/your-claude-topic

# Option 3: Telegram
# curl -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
#   -d chat_id="$CHAT_ID" \
#   -d text="$PROJECT: $QUESTION"
```

**~/.claude/hooks/task-complete.sh:**
```bash
#!/bin/bash
TASK_RESULT=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.result // "Task completed"')
PROJECT=$(basename "$PWD")

curl -s \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=Task Done: $PROJECT" \
  --form-string "message=$TASK_RESULT" \
  --form-string "priority=0" \
  https://api.pushover.net/1/messages.json
```

### Environment Variables

Set these in your shell profile:
```bash
# ~/.zshrc or ~/.bashrc
export PUSHOVER_APP_TOKEN="your-app-token"
export PUSHOVER_USER_KEY="your-user-key"
export TELEGRAM_BOT_TOKEN="your-bot-token"
export TELEGRAM_CHAT_ID="your-chat-id"
export NTFY_TOPIC="your-topic"
```

### Advanced: Smart Notification Filtering

Don't get notified for everything. Filter by importance:

```bash
#!/bin/bash
# smart-notify.sh

QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question // ""')

# Skip low-priority questions
if [[ "$QUESTION" == *"confirm"* ]] || [[ "$QUESTION" == *"proceed"* ]]; then
  exit 0  # Auto-approve these, don't notify
fi

# High priority for certain keywords
PRIORITY=0
if [[ "$QUESTION" == *"error"* ]] || [[ "$QUESTION" == *"fail"* ]]; then
  PRIORITY=1
fi
if [[ "$QUESTION" == *"critical"* ]] || [[ "$QUESTION" == *"security"* ]]; then
  PRIORITY=2
fi

# Send with appropriate priority
curl -s \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "message=$QUESTION" \
  --form-string "priority=$PRIORITY" \
  https://api.pushover.net/1/messages.json
```

---

## 8. iPad/Tablet Development

### iPad Pro as Primary Dev Device

The iPad (especially with M-chip) can serve as a serious development terminal.

**Setup:**
1. **Termius or Blink** for SSH/mosh
2. **Magic Keyboard** for typing
3. **Tailscale** for VPN
4. **Working Copy** for local Git operations
5. **Split View** - Terminal + reference docs

### Hardware Recommendations

| Device | Best For | Notes |
|--------|----------|-------|
| iPad Pro 12.9" M4 | Primary replacement | Screen real estate |
| iPad Pro 11" M4 | Portable power | Great balance |
| iPad Air M2 | Budget pro option | 90% of Pro features |
| iPad Mini | Ultra-portable | Quick checks on the go |

### Apps Ecosystem

| App | Purpose | Price |
|-----|---------|-------|
| Blink Shell | SSH + mosh | $20 |
| Termius | SSH + SFTP | Free/$10mo |
| Working Copy | Git client | $30 |
| Textastic | Code editor | $10 |
| Inspect Browser | Safari DevTools | Free |
| Scriptable | Automation | Free |
| GitHub Mobile | PR/Issue management | Free |

### Workflow: iPad as Hub

```
┌─────────────────────────────────────────────────────────────┐
│  iPad Split View                                            │
│  ┌──────────────────────┐ ┌──────────────────────────┐     │
│  │  Blink Shell         │ │  GitHub Mobile           │     │
│  │  ├─ tmux session     │ │  ├─ PR reviews           │     │
│  │  │  └─ Claude Code   │ │  │  └─ Comments          │     │
│  │  └─ Live output      │ │  └─ Issue tracking       │     │
│  └──────────────────────┘ └──────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### Stage Manager for Multi-Window

iPadOS Stage Manager allows multiple overlapping windows:
- Terminal window (Blink)
- Documentation (Safari)
- Notes (Obsidian/Notes)
- Chat (Slack/Discord)

### iPad Shortcuts Automation

Create Shortcuts for common operations:

**"Start Dev VM" Shortcut:**
1. Run Shell Script (via Shortcuts + SSH):
   ```bash
   ssh devuser@claude-vm "tmux new-session -d -s work 'claude'"
   ```
2. Open Blink Shell
3. Connect to saved host

**"Check Agent Status" Shortcut:**
1. Run Shell Script:
   ```bash
   ssh devuser@claude-vm "tmux capture-pane -t work -p | tail -20"
   ```
2. Show output in notification

---

## 9. Teleportation Patterns

### Definition

"Teleportation" = seamlessly moving sessions/context between devices without losing state.

### Native Claude Code Teleportation

**Source:** Boris Cherny / Claude Code built-in feature

```bash
# In terminal Claude session
&
# or
--teleport

# Outputs URL like: https://claude.ai/code/session/abc123
# Open URL on any device to continue
```

### tmux Session Teleportation

tmux sessions persist on the server - you can detach anywhere, attach from anywhere.

```bash
# On laptop
tmux attach -t work
# Work for a while
# Close laptop lid (connection drops)

# On phone (via Termius)
ssh devuser@vm
# Auto-attaches to existing tmux session
# Continue exactly where you left off
```

### Git Worktree Teleportation

For multi-device development where each device might work on different features:

```bash
# On VM, create worktrees
git worktree add ../project-feature-auth feature/auth
git worktree add ../project-feature-ui feature/ui

# Each worktree is independent
# Run different Claude agents in each
# Merge when ready
```

### Session State File Pattern

For complex teleportation, maintain state in files:

**~/project/.claude-state.json:**
```json
{
  "current_task": "Implementing user authentication",
  "branch": "feature/auth",
  "last_action": "Created login endpoint",
  "pending_questions": [],
  "context_files": [
    "src/auth/login.ts",
    "src/auth/session.ts"
  ],
  "timestamp": "2026-01-09T10:30:00Z"
}
```

Claude can read this at session start to restore context.

### Device Handoff Checklist

When switching devices:
1. ✅ Save any local changes
2. ✅ Push to branch
3. ✅ Detach tmux (or let it auto-detach)
4. ✅ Connect from new device
5. ✅ Verify tmux session state
6. ✅ Continue working

---

## 10. Voice-to-Code Workflows

### The Vision

Dictate code intentions, have Claude implement them. No typing required.

### Tools

#### Superwhisper (macOS)
- **URL:** superwhisper.com
- **Price:** Free tier, $8/month pro
- **Strengths:** System-wide dictation, AI enhancement
- **Integration:** Dictate → Superwhisper → clipboard → paste to Claude

#### Whisper.cpp (Self-Hosted)
- **URL:** github.com/ggerganov/whisper.cpp
- **Setup on VM:**
```bash
git clone https://github.com/ggerganov/whisper.cpp
cd whisper.cpp && make
./main -m models/ggml-base.en.bin -f audio.wav
```

#### iOS Voice Memos → Claude
1. Record voice memo
2. Share to Files/Obsidian
3. Transcribe with Whisper
4. Feed to Claude

#### Wispr Flow
- **URL:** wispr.ai
- **Best for:** Real-time coding dictation
- **Integration:** Bidirectional voice loops

### Voice Command Patterns

```
"Hey Claude, add a new endpoint for user registration
that takes email and password, validates them,
hashes the password, and stores in the users table"
```

Claude interprets intent and writes code.

### Voice → Code Pipeline

```
┌─────────┐    ┌───────────┐    ┌──────────┐    ┌─────────────┐
│  Voice  │ →  │ Whisper   │ →  │   Text   │ →  │ Claude Code │
│  Input  │    │ (STT)     │    │  Prompt  │    │   Output    │
└─────────┘    └───────────┘    └──────────┘    └─────────────┘
```

### Bidirectional Voice (Advanced)

**Eric Buess's setup:** Claude can speak back using TTS.

```bash
# After Claude response, convert to speech
echo "$CLAUDE_RESPONSE" | say  # macOS
# or
echo "$CLAUDE_RESPONSE" | espeak  # Linux
```

---

## 11. Offline/Low-Bandwidth Strategies

### The Challenge

Mobile connectivity is unreliable:
- Airplane mode
- Spotty cellular
- Roaming data limits

### Strategy 1: Queue-Based Development

Prepare tasks offline, execute when connected.

**task-queue.md:**
```markdown
## Pending Tasks
1. [ ] Add input validation to form component
2. [ ] Write tests for auth module
3. [ ] Refactor database queries

## Ready to Execute
When connected, run:
\`\`\`bash
claude "Complete the tasks in task-queue.md"
\`\`\`
```

### Strategy 2: Session Caching

Before going offline:
```bash
# Cache current session state
tmux capture-pane -t work -p > ~/offline-cache/session-$(date +%s).txt

# Cache recent file changes
git diff > ~/offline-cache/changes.patch

# Cache Claude conversation
# (Export from web interface)
```

### Strategy 3: Local Claude (Experimental)

For truly offline work, run local models:

**Ollama + Claude-like models:**
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Run a capable model
ollama run codellama:34b
# or
ollama run deepseek-coder:33b
```

Not Claude quality, but usable for simpler tasks.

### Strategy 4: Compression Techniques

**mosh** handles poor connections better than SSH:
- Local echo (type before network confirms)
- UDP-based (survives connection changes)
- Automatic reconnection

```bash
mosh --ssh="ssh -p 47892" devuser@100.x.x.x
```

### Low-Bandwidth tmux Settings

```bash
# ~/.tmux.conf additions for low bandwidth
set -g status-interval 30  # Less frequent updates
set -g visual-activity off
set -g visual-bell off
set -g visual-silence off
```

---

## 12. Production Mobile Workflows

### Case Study: @dabit3's Setup

**Source:** Full thread extraction

**Components:**
- Vultr VM (vhf-8c-32gb, ~$7/day)
- Tailscale VPN
- Termius iOS app
- Poke notifications
- 6 parallel Claude agents in tmux
- Git worktrees for branch isolation

**Daily Workflow:**
1. Start VM via iOS Shortcut
2. SSH in via Termius
3. Auto-attach to tmux
4. Kick off agents on different branches
5. Go about day
6. Phone buzzes when agents need input
7. Respond via Termius
8. End of day: review, merge, stop VM

### Case Study: Home Mac Setup

**Source:** @randomor thread reply

**Components:**
- Mac Mini (always on, lid open for laptops)
- Tailscale
- Termius
- tmux

**Cost:** $0/day (just electricity)

**Trade-offs:**
- Must keep Mac powered and awake
- Less isolated than VM
- But: instant availability, no cloud costs

### Case Study: Superconductor App

**Source:** @sergeykarayev mention

iOS app that orchestrates multiple AI code agents:
- Claude Code
- Codex
- Amp
- Opencode

GUI alternative to raw SSH. "Launched agents, went on a hike, checked in on my phone, tweaked code, and opened a PR from the trail."

### Case Study: AI Maestro Distributed Setup

**Source:** @jkpelaez - github.com/23blocks-OS/ai-maestro

Features:
- Dashboard for agent management
- Messaging between agents
- Memory/context sharing
- Multi-machine support via Tailscale

Good for teams or complex multi-repo setups.

---

## 13. Battery/Heat Management

### The Problem

Long SSH sessions on mobile drain battery and generate heat, especially:
- Screen always on
- Constant network activity
- Background processing

### Phone Strategies

1. **Reduce Screen Brightness**
2. **Enable Dark Mode** (OLED screens)
3. **Disable Auto-Lock** (Settings → Display)
4. **Low Power Mode** when possible
5. **WiFi over Cellular** (less battery)

### App-Specific Settings

**Termius:**
- Enable "Keep alive" (sends minimal packets)
- Use mosh (lower bandwidth)
- Black terminal theme

**Tailscale:**
- Disable "Run in background" when not needed
- Use exit nodes sparingly (adds overhead)

### Portable Power

For extended mobile sessions:
- 10,000mAh+ power bank
- MagSafe battery for iPhone
- USB-C PD for fast charging

### Heat Management

- Remove case during heavy sessions
- Avoid direct sunlight
- Consider phone holder with airflow
- Take breaks if phone gets hot

### iPad Advantages

iPad runs cooler and lasts longer than phones:
- Larger battery
- Better thermal management
- Magic Keyboard doesn't need phone battery

---

## 14. GitHub Codespaces / Gitpod

### GitHub Codespaces

Cloud dev environment hosted by GitHub.

**Setup:**
1. Open any repo on GitHub
2. Press `.` or go to Code → Codespaces
3. Create new codespace
4. Access via browser or VS Code

**Claude Code in Codespaces:**
```bash
# In codespace terminal
npm install -g @anthropic-ai/claude-code
export ANTHROPIC_API_KEY="your-key"
claude
```

**Mobile Access:**
- GitHub mobile app (limited terminal)
- Browser on phone/tablet (full access)
- SSH from phone (expose port, use Termius)

**Pricing:**
- Free: 60 hours/month (2-core)
- Paid: $0.18/hour (4-core)

### Gitpod

Open-source alternative to Codespaces.

**Setup:**
1. Prefix any GitHub URL with `gitpod.io/#`
   Example: `gitpod.io/#https://github.com/user/repo`
2. Or install Gitpod browser extension

**Claude Code in Gitpod:**
```yaml
# .gitpod.yml
tasks:
  - init: npm install -g @anthropic-ai/claude-code
    command: claude
```

**Pricing:**
- Free: 50 hours/month
- Paid: $9/month (unlimited)

### Comparison

| Feature | Codespaces | Gitpod |
|---------|------------|--------|
| GitHub Integration | Native | Extension |
| GitLab Support | No | Yes |
| Free Hours | 60/month | 50/month |
| VS Code | Yes | Yes |
| Self-Host | No | Yes |

### Mobile Workflow with Cloud IDEs

```
Phone → Browser → Codespace/Gitpod → Claude Code
```

**Pros:**
- No VM management
- Instant environments
- Pay-per-use

**Cons:**
- Less control than own VM
- Timeout after inactivity
- Can get expensive at scale

---

## 15. Implementation Templates

### Quick Start: 30-Minute Mobile Setup

**Prerequisites:**
- iPhone/Android phone
- Existing Mac or $10 for cloud VM
- Anthropic API key

**Steps:**

1. **Install Tailscale** (5 min)
   - Download app on phone
   - Sign in
   - Download on Mac/VM, run `tailscale up`

2. **Install Termius** (2 min)
   - Download from App Store
   - Add host with Tailscale IP

3. **Configure tmux** (5 min)
   ```bash
   # On Mac/VM
   echo 'if [[ -z "$TMUX" ]]; then tmux attach -t main 2>/dev/null || tmux new -s main; fi' >> ~/.zshrc
   ```

4. **Test Connection** (3 min)
   - Open Termius
   - Connect to Tailscale IP
   - Should auto-attach to tmux

5. **Run Claude Code** (2 min)
   ```bash
   claude
   ```

6. **Set Up Notifications** (10 min)
   - Sign up for Pushover/ntfy
   - Create notification script
   - Configure hook in settings.json

### Full Production Setup Checklist

```markdown
## Infrastructure
- [ ] Cloud VM provisioned (or home Mac configured)
- [ ] Tailscale installed and connected
- [ ] SSH hardened (key-only, non-standard port)
- [ ] Firewall configured (Tailscale CIDR only)
- [ ] fail2ban active

## Development Environment
- [ ] Claude Code installed
- [ ] tmux configured with auto-attach
- [ ] mosh installed (optional)
- [ ] Git configured with worktrees
- [ ] Node.js/Python/etc. installed

## Mobile Apps
- [ ] Termius/Blink installed
- [ ] Tailscale app installed
- [ ] Notification app installed (Pushover/ntfy)
- [ ] GitHub mobile (optional)

## Hooks & Automation
- [ ] Notification hook configured
- [ ] Smart filtering implemented (optional)
- [ ] VM lifecycle scripts (for cloud VM)
- [ ] iOS Shortcuts (optional)

## Testing
- [ ] SSH from phone works
- [ ] tmux auto-attach works
- [ ] Claude Code runs
- [ ] Notifications fire on AskUserQuestion
- [ ] Can respond and continue workflow
```

### Cost Calculator

| Component | Monthly Cost | Notes |
|-----------|--------------|-------|
| **Cloud VM (hourly)** | $0-210 | Stop when not using |
| **Cloud VM (always on)** | $13-120 | Provider dependent |
| **Home Mac** | $0 | Electricity only |
| **Tailscale** | $0 | Free tier |
| **Termius** | $0-10 | Free works fine |
| **Pushover** | $5 (one-time) | Per platform |
| **ntfy** | $0 | Self-host or free hosted |

**Budget Setup:** Home Mac + Tailscale + Termius + ntfy = $0/month
**Power Setup:** Hetzner VM + Tailscale + Termius + Pushover = $13/month

---

## Summary: The Mobile Development Mindset

### Core Philosophy

> "Instead of long periods of intense focus, software development can now just fit into the gaps of your day." - @dabit3

### The Stack

```
┌──────────────────────────────────────────────────────────────────┐
│                    MOBILE DEVELOPMENT STACK                       │
├──────────────────────────────────────────────────────────────────┤
│  Layer 5: Human Interface                                        │
│  └─ Phone/Tablet → SSH Client → Terminal                         │
├──────────────────────────────────────────────────────────────────┤
│  Layer 4: Session Management                                     │
│  └─ tmux → Persistent Sessions → Detach/Attach Anywhere          │
├──────────────────────────────────────────────────────────────────┤
│  Layer 3: Notifications                                          │
│  └─ Hooks → Webhook → Push Service → Phone Alert                 │
├──────────────────────────────────────────────────────────────────┤
│  Layer 2: Secure Connectivity                                    │
│  └─ Tailscale/WireGuard → Zero Trust → No Exposed Ports          │
├──────────────────────────────────────────────────────────────────┤
│  Layer 1: Compute                                                │
│  └─ Cloud VM / Home Mac → Claude Code → Multiple Agents          │
└──────────────────────────────────────────────────────────────────┘
```

### Key Principles

1. **Persistence** - tmux/mosh ensure work survives disconnects
2. **Notifications** - Claude comes to you, not the other way around
3. **Security** - VPN-only access, no exposed ports
4. **Parallelism** - Multiple agents working on different branches
5. **Cost control** - Stop VMs when not using, or use free home setup
6. **Teleportation** - Seamlessly move between devices

### Future Directions

From @ryohhno:
> "Mobile code interfaces are going to become a large area of VC interest in 2026: 'code from your phone', 'voice memos → code', 'ssh into your terminal from your phone', kanban style drag-and-drop visual coding"

This is early innings of a paradigm shift in how software development happens.

---

## Tags

`#mobility` `#teleportation` `#cloud-vm` `#tmux` `#tailscale` `#push-notifications` `#async-development` `#phone-coding` `#git-worktrees` `#mosh` `#ipad` `#voice-to-code` `#codespaces` `#gitpod`

---

## Sources Referenced

- @dabit3 (Nader Dabit) - Original mobile Claude Code thread
- @omarsar0 (Elvis) - Implementation details
- @mgranda - granda.org/en/2026/01/02/claude-code-on-the-go/
- @randomor - Home Mac setup variant
- @GabGarrett - Laptop variant
- @sergeykarayev - Superconductor app
- @jkpelaez - AI Maestro
- @antranapp - antran.app/2025/claude_everywhere/
- @radoslav11 - rpai tmux agent manager
- @burcs - System remote Mac control
- @TylerIsBuilding - Blink recommendation
- Boris Cherny - Claude Code creator (teleportation feature)
- Various community discussions and implementations

---

## Deep Dive Expansion

Additional patterns, advanced configurations, and specialized techniques discovered through extended research. This section covers topics not fully explored above.

---

### 16. Advanced SSH Client Configurations

#### Termius Pro Features for Power Users

Beyond basic SSH, Termius offers workflow-enhancing features:

**Snippet Library:**
```yaml
# Snippets for common Claude Code operations
snippets:
  - name: "Claude Quick Start"
    command: "cd ~/projects && tmux attach -t work || tmux new -s work 'claude'"

  - name: "Agent Status Check"
    command: "tmux list-panes -a -F '#{session_name}: #{pane_current_command}' | grep -E 'claude|node'"

  - name: "Kill All Agents"
    command: "tmux kill-session -t agents"

  - name: "Context Checkpoint"
    command: "tmux capture-pane -t work -p > ~/checkpoints/$(date +%Y%m%d_%H%M%S).txt"
```

**SFTP Integration:**
Use Termius SFTP to:
- Pull generated code files for local review
- Push config updates to remote VM
- Sync CLAUDE.md changes bidirectionally

**Port Forwarding Profiles:**
```
# For local development preview from phone
Local: 3000 -> Remote: 3000 (dev server)
Local: 5432 -> Remote: 5432 (database)
```

#### Blink Shell Advanced Usage

**Files App Integration (iOS 17+):**
```bash
# Mount remote directories in iOS Files app
# Navigate in Blink: Settings > iCloud Drive Integration

# Access remote project files in any iOS app
# E.g., view generated docs in iA Writer, images in Photos
```

**Custom Fonts for Code:**
- Install programming fonts (JetBrains Mono, Fira Code)
- Enable ligatures for cleaner code reading
- Adjust font size for outdoor visibility

**Keyboard Shortcuts (with external keyboard):**
| Shortcut | Action |
|----------|--------|
| Cmd+1-9 | Switch shells |
| Cmd+T | New tab |
| Cmd+W | Close tab |
| Ctrl+Space | Toggle prediction bar |

#### Termux Advanced (Android)

**Full Claude Code Installation (Experimental):**
```bash
# Install Node.js
pkg install nodejs-lts

# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Set API key
export ANTHROPIC_API_KEY="your-key"

# Run locally on Android (!)
claude
```

**Caveats:**
- High battery usage
- Heat generation
- Not officially supported
- Best for quick edits, not heavy work

**Termux + Widget for Quick Commands:**
```bash
# ~/.shortcuts/check-agents
#!/data/data/com.termux/files/usr/bin/bash
ssh devuser@100.x.x.x "tmux list-panes -a -F '#{session_name}: #{pane_current_command}'"
```

Add to Android home screen as widget for one-tap status.

---

### 17. ntfy Deep Configuration

#### Self-Hosted ntfy Server

For privacy-conscious users, run your own notification server:

**Docker Compose:**
```yaml
version: "3"
services:
  ntfy:
    image: binwiederhier/ntfy
    container_name: ntfy
    command: serve
    environment:
      - TZ=America/New_York
    volumes:
      - ./ntfy/cache:/var/cache/ntfy
      - ./ntfy/etc:/etc/ntfy
    ports:
      - "8080:80"
    restart: unless-stopped
```

**Configuration (/etc/ntfy/server.yml):**
```yaml
base-url: "https://ntfy.yourdomain.com"
listen-http: ":80"
cache-file: "/var/cache/ntfy/cache.db"
cache-duration: "12h"
auth-default-access: "deny-all"
```

**Reverse Proxy (Caddy):**
```
ntfy.yourdomain.com {
    reverse_proxy localhost:8080
}
```

#### Priority-Based Notification Filtering

**Enhanced Hook Script:**
```bash
#!/bin/bash
# ~/.claude/hooks/smart-ntfy.sh

QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question // ""')
PROJECT=$(basename "$PWD")
TOPIC="${NTFY_TOPIC:-your-claude-topic}"

# Default priority (3 = normal)
PRIORITY=3
TAGS=""

# High priority for errors/failures
if [[ "$QUESTION" =~ (error|fail|broken|critical|security) ]]; then
  PRIORITY=5
  TAGS="warning,rotating_light"
fi

# Low priority for confirmations
if [[ "$QUESTION" =~ (confirm|proceed|continue|approve) ]]; then
  PRIORITY=2
  TAGS="white_check_mark"
fi

# Silent for routine checks
if [[ "$QUESTION" =~ (ready|done|complete) ]]; then
  PRIORITY=1
fi

# Send with priority
curl -H "Priority: $PRIORITY" \
     -H "Tags: $TAGS" \
     -H "Title: Claude: $PROJECT" \
     -d "$QUESTION" \
     "ntfy.sh/$TOPIC"
```

#### ntfy Actions for Mobile Response

**Interactive Notifications:**
```bash
# Send notification with response actions
curl \
  -H "Actions: http, Reply, https://your-api.com/respond, method=POST, body={\"response\": \"yes\"}" \
  -H "Actions: http, Reject, https://your-api.com/respond, method=POST, body={\"response\": \"no\"}" \
  -d "Deploy to production?" \
  ntfy.sh/your-topic
```

This creates tap-to-respond buttons on mobile.

---

### 18. Tailscale Advanced Patterns

#### Tailscale ACLs for Security

**Restrict Claude VM Access:**
```json
{
  "acls": [
    {
      "action": "accept",
      "src": ["tag:phone", "tag:laptop"],
      "dst": ["tag:claude-vm:22"]
    },
    {
      "action": "accept",
      "src": ["tag:claude-vm"],
      "dst": ["*:443"]
    }
  ],
  "tagOwners": {
    "tag:phone": ["autogroup:admin"],
    "tag:laptop": ["autogroup:admin"],
    "tag:claude-vm": ["autogroup:admin"]
  }
}
```

#### Tailscale Funnel for Webhooks

Expose a webhook endpoint on your VM without public IP:

```bash
# On VM: Enable funnel for webhook port
tailscale funnel 8080

# Creates: https://your-vm-name.ts.net/
# Webhook endpoint for Claude hooks to call external services
```

**Use Case:** Claude completes task -> webhook -> triggers external CI/CD.

#### Tailscale SSH (Keyless Auth)

Skip SSH key management entirely:

```bash
# Enable Tailscale SSH on VM
tailscale up --ssh

# Connect from phone
ssh devuser@your-vm-name  # Authenticates via Tailscale identity
```

**Benefits:**
- No SSH keys to manage
- ACL-based access control
- Session logging in Tailscale admin

---

### 19. Voice-to-Code Deep Dive

#### Superwhisper Advanced Modes

**Code Mode:**
Superwhisper has a "code mode" that:
- Preserves technical terminology
- Handles camelCase/snake_case
- Recognizes programming keywords

```
Dictation: "create a function named get user by id that takes an integer id parameter and returns a user object"

Output: "Create a function named getUserById that takes an integer id parameter and returns a User object"
```

**Custom Vocabulary:**
Train Superwhisper with project-specific terms:
- Class names
- Library names
- Domain terminology

#### Voice Pipeline Architecture

**Full Voice Loop Setup:**
```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  AirPods    │ ->  │  iOS/macOS   │ ->  │ Superwhisper│
│  (mic)      │     │  (capture)   │     │  (STT)      │
└─────────────┘     └──────────────┘     └─────────────┘
                                                │
                                                ▼
                                         ┌─────────────┐
                                         │   Claude    │
                                         │   Code      │
                                         └─────────────┘
                                                │
                                                ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  AirPods    │ <-  │  macOS say   │ <-  │   TTS       │
│  (speaker)  │     │  command     │     │  Response   │
└─────────────┘     └──────────────┘     └─────────────┘
```

**Implementation Script:**
```bash
#!/bin/bash
# voice-claude.sh

# Capture voice input
VOICE_INPUT=$(superwhisper --capture --timeout 30)

# Send to Claude
RESPONSE=$(echo "$VOICE_INPUT" | claude --print)

# Speak response
say "$RESPONSE"
```

#### iOS Shortcuts Voice Integration

**Shortcut: "Hey Claude"**
1. Trigger: Voice (Siri)
2. Get text input (dictation)
3. Run shell script over SSH:
   ```bash
   ssh devuser@claude-vm "echo '$input' | claude --print"
   ```
4. Speak result

**Limitations:**
- Siri dictation quality varies
- SSH timeout may occur
- Long responses truncated

#### Wispr Flow for Continuous Coding

**Setup:**
```bash
# Install Wispr Flow
brew install wispr-flow

# Configure for Claude Code
wispr config set --target claude-code
wispr config set --mode continuous

# Start voice session
wispr start
```

**Continuous Mode:**
- Wispr listens continuously
- Silence detection triggers send
- Claude response streams back
- Can be bidirectional with TTS

---

### 20. Offline Development Strategies

#### Pre-Caching Project Context

Before going offline, cache everything Claude might need:

```bash
#!/bin/bash
# cache-for-offline.sh

CACHE_DIR="$HOME/.claude-offline/$(basename $PWD)"
mkdir -p "$CACHE_DIR"

# Cache all source files
find . -name "*.ts" -o -name "*.tsx" -o -name "*.py" -o -name "*.go" | \
  xargs -I{} cp --parents {} "$CACHE_DIR/"

# Cache project structure
tree -L 4 > "$CACHE_DIR/structure.txt"

# Cache recent git history
git log --oneline -100 > "$CACHE_DIR/git-log.txt"
git diff HEAD~10 > "$CACHE_DIR/recent-changes.diff"

# Cache CLAUDE.md and any context files
cp CLAUDE.md "$CACHE_DIR/" 2>/dev/null || true
cp -r .claude/ "$CACHE_DIR/" 2>/dev/null || true

# Create offline task queue
cat > "$CACHE_DIR/offline-tasks.md" << 'EOF'
## Offline Task Queue
Add tasks here while offline, execute when connected.

### Pending
- [ ]

### Ready to Execute
When back online:
```bash
claude "Complete tasks in offline-tasks.md"
```
EOF

echo "Cached $(find $CACHE_DIR -type f | wc -l) files to $CACHE_DIR"
```

#### Local Models for Offline Work

**Ollama Setup for Degraded Mode:**
```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull capable models (do this while online!)
ollama pull codellama:34b
ollama pull deepseek-coder:33b
ollama pull qwen2.5-coder:32b

# Offline usage
ollama run qwen2.5-coder:32b "Refactor this function for clarity: $(cat function.ts)"
```

**Limitations vs Claude:**
- Lower reasoning capability
- No tool use
- No file editing
- Best for: code review, explanations, simple edits

#### Airplane Mode Development Pattern

**The Pattern:**
1. **Before flight:** Cache project, prepare task list
2. **During flight:** Use local model for thinking/drafting
3. **On landing:** Execute cached tasks with Claude

**Task Queue Format:**
```markdown
## Airplane Tasks

### High Priority (execute first)
1. [ ] Fix authentication bug in auth/session.ts
   Context: Token expiration not handled

### Medium Priority
2. [ ] Add input validation to form components

### Low Priority (if time)
3. [ ] Improve error messages
```

---

### 21. Advanced tmux for Mobile

#### tmux Status Bar for Mobile Context

**Enhanced Status Bar Config:**
```bash
# ~/.tmux.conf additions for mobile context

# Show git branch and Claude status
set -g status-right-length 100
set -g status-right '\
#[fg=cyan]#{pane_current_path} \
#[fg=yellow]#(cd #{pane_current_path} && git branch --show-current 2>/dev/null || echo "no-git") \
#[fg=green]#(pgrep -f "claude" >/dev/null && echo "CLAUDE" || echo "idle") \
#[fg=white]| %H:%M'

# Highlight window with active Claude session
setw -g window-status-current-format '#[fg=green,bold]#I:#W*'

# Bell when Claude needs input (match AskUserQuestion in output)
set -g visual-bell on
set -g bell-action any
```

#### tmux Session Naming Conventions

**Convention for Multi-Agent Mobile:**
```
Session: work
├── Window 1: main     (Primary Claude session)
├── Window 2: tests    (Test runner)
├── Window 3: agent-1  (Feature branch 1)
├── Window 4: agent-2  (Feature branch 2)
└── Window 5: monitor  (rpai or logs)
```

**Quick Navigation:**
```bash
# In .zshrc
alias t1='tmux select-window -t 1'
alias t2='tmux select-window -t 2'
alias ta='tmux select-window -t agent-1'
```

#### tmux Plugins for Mobile Workflows

**tmux-resurrect:** Save and restore sessions
```bash
# ~/.tmux.conf
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-continuum'

# Auto-save every 15 minutes
set -g @continuum-save-interval '15'

# Auto-restore on tmux start
set -g @continuum-restore 'on'

# Restore Claude processes
set -g @resurrect-processes 'claude node python'
```

**Usage:** Reboot VM, tmux auto-restores all sessions including Claude state.

---

### 22. iPad Pro as Primary Development Machine

#### Stage Manager Multi-Window Layout

**Optimal Layout for Coding:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Stage Manager - Main Stage                                      │
├────────────────────────────────┬────────────────────────────────┤
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

**Side Stages (Quick Access):**
- Slack/Discord for team communication
- Tailscale for VPN status
- ntfy for notification history

#### Hardware Recommendations Refined

**The Ultimate iPad Dev Setup:**
| Component | Recommendation | Why |
|-----------|---------------|-----|
| iPad | Pro 13" M4 | Screen real estate for split views |
| Keyboard | Magic Keyboard | Trackpad essential for terminal |
| Stand | Twelve South Curve | Ergonomic angle for long sessions |
| Charger | 100W GaN | Fast charge + power accessories |
| Monitor | Portable 15" USB-C | Hotel room/travel desk setup |

#### Working Copy as Local Git Bridge

**Pattern: Local Git for Offline Work**
```
1. Clone repo in Working Copy
2. Edit files locally (when offline)
3. SSH into VM, pull changes
4. Claude continues work
5. Push back to Working Copy for sync
```

**Working Copy + Blink Integration:**
```bash
# In Working Copy: Share file to Blink
# File appears in local ~/Documents/Working Copy/

# In Blink (or any terminal):
cat "~/Documents/Working Copy/project/file.ts"
```

---

### 23. Battery Optimization Deep Dive

#### iOS/iPadOS Low Power Mode Workflow

**Strategy:** Toggle Low Power Mode based on task type.

| Task | Power Mode | Why |
|------|------------|-----|
| Starting agents | Normal | Quick response needed |
| Waiting for work | Low Power | Conserve while polling |
| Responding to question | Normal | Fast interaction |
| Background monitoring | Low Power | Minimal drain |

**Shortcut Automation:**
```
Trigger: When Termius opens
Action: Turn off Low Power Mode

Trigger: When Termius closes
Action: Turn on Low Power Mode
```

#### Terminal App Power Usage

**Termius Power Settings:**
- Background App Refresh: OFF (use notifications instead)
- Location: Never (not needed)
- Fetch: Manual for SFTP sync

**Blink Power Optimization:**
- Reduce key repeat rate (saves CPU on repeated keys)
- Disable local echo preview
- Use dark theme (OLED screens)

#### Extended Session Power Management

**For 4+ Hour Sessions:**
1. Use iPad over iPhone (larger battery)
2. Connect to power if available
3. Reduce screen brightness to 30%
4. Enable Auto-Lock (15 minutes) - tmux preserves session
5. Use AirPods for audio cues vs screen checking

**MagSafe Battery Rotation (iPhone):**
- Battery 1 charging while Battery 2 on phone
- Swap every 2 hours
- Maintains continuous operation

---

### 24. Notification System Integration Patterns

#### Multi-Channel Notification Strategy

**Priority-Based Routing:**
```bash
#!/bin/bash
# ~/.claude/hooks/multi-channel-notify.sh

PRIORITY=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.priority // "normal"')
MESSAGE=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question')
PROJECT=$(basename "$PWD")

case $PRIORITY in
  "critical")
    # Phone call via Twilio
    curl -X POST "https://api.twilio.com/..." \
      -d "Body=CRITICAL: Claude needs immediate input on $PROJECT"
    ;;
  "high")
    # Push notification + sound
    curl -H "Priority: urgent" \
         -d "$PROJECT: $MESSAGE" \
         ntfy.sh/claude-urgent
    ;;
  "normal")
    # Standard push
    curl -d "$PROJECT: $MESSAGE" ntfy.sh/claude-work
    ;;
  "low")
    # Silent/batch
    echo "$MESSAGE" >> ~/.claude/pending-notifications.txt
    ;;
esac
```

#### Notification Aggregation for Busy Days

**Batch Notification Hook:**
```bash
#!/bin/bash
# Aggregate notifications, send summary every 30 minutes

BATCH_FILE="/tmp/claude-notification-batch.txt"
echo "[$(date)] $PROJECT: $QUESTION" >> "$BATCH_FILE"

# Check if it's time to send batch (every 30 min)
LAST_SEND=$(stat -f %m ~/.claude/last-batch-send 2>/dev/null || echo 0)
NOW=$(date +%s)
INTERVAL=$((30 * 60))

if (( NOW - LAST_SEND > INTERVAL )); then
  COUNT=$(wc -l < "$BATCH_FILE")
  curl -d "$(cat $BATCH_FILE)" \
       -H "Title: $COUNT Claude notifications" \
       ntfy.sh/claude-batch

  rm "$BATCH_FILE"
  touch ~/.claude/last-batch-send
fi
```

#### Do Not Disturb Integration

**Respect iOS/Android DND:**
```bash
#!/bin/bash
# Check time-based DND (example: silent 10pm-7am)

HOUR=$(date +%H)
if (( HOUR >= 22 || HOUR < 7 )); then
  # Store for morning digest
  echo "$MESSAGE" >> ~/.claude/morning-digest.txt
  exit 0
fi

# Otherwise send normally
curl -d "$MESSAGE" ntfy.sh/your-topic
```

---

### 25. Real-World Mobile Workflow Case Studies

#### Case Study: Conference Travel Development

**Scenario:** Week-long conference, hotel WiFi only, limited laptop time.

**Setup:**
- iPad Pro with Magic Keyboard
- Blink Shell connected to home Mac Mini via Tailscale
- ntfy for notifications (silent during talks)
- Termius on iPhone for quick checks

**Daily Pattern:**
```
7:00 AM  - Hotel room: Review overnight agent work (iPad, 30 min)
8:30 AM  - Keynote starts: Put agents on "hold" tasks
10:00 AM - Coffee break: Check phone for urgent questions (2 min)
12:00 PM - Lunch: iPad session, kick off afternoon tasks (20 min)
3:00 PM  - Break: Quick phone check (2 min)
6:00 PM  - Dinner: Review, merge successful PRs (iPad, 30 min)
10:00 PM - Hotel: Plan next day tasks, start overnight work (30 min)
```

**Result:** Shipped 3 features during 5-day conference with 2-3 hours total hands-on time.

#### Case Study: Parent with Young Kids

**Scenario:** Stay-at-home parent with unpredictable availability windows.

**Setup:**
- iPhone always accessible
- Home Mac Mini (always on, Tailscale)
- Pushover notifications (quiet at naptime)
- tmux session persists through interruptions

**Pattern:**
```
6:00 AM  - Kids asleep: Start day's agents (20 min)
           Agents work autonomously
9:00 AM  - Kids playing: Quick phone response to agent question
11:00 AM - Naptime: Deep work session if needed (1 hour)
           Or let agents continue autonomously
3:00 PM  - Kids TV time: Review, adjust course (15 min)
8:00 PM  - Kids in bed: Review day's work, plan tomorrow (30 min)
```

**Key Insight:** "I'm not looking for continuous hours. I'm looking for 5-minute windows to keep agents productive."

#### Case Study: Commuter Developer

**Scenario:** 1-hour train commute each way, spotty cellular.

**Setup:**
- iPhone with Termius
- mosh for connection resilience
- Offline task queue for tunnel sections
- Cellular + WiFi handoff via Tailscale

**Pattern:**
```
Train departing:
  - Start mosh session
  - Review overnight work
  - Kick off tasks for the day

Mid-commute (tunnel):
  - Connection drops
  - mosh buffers input locally
  - Prepare next commands

Exiting tunnel:
  - mosh reconnects automatically
  - Buffered commands execute
  - Continue work

Arriving at office:
  - Agents running autonomously
  - Transition to laptop if needed
```

**Key Insight:** mosh + tmux means never losing work context, even with Swiss-cheese connectivity.

---

### 26. Security Hardening for Mobile Access

#### SSH Security Beyond Basics

**Advanced sshd_config:**
```bash
# /etc/ssh/sshd_config

# Only listen on Tailscale interface
ListenAddress 100.x.x.x

# Strong algorithms only
KexAlgorithms curve25519-sha256@libssh.org
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com
MACs hmac-sha2-512-etm@openssh.com

# Prevent brute force
MaxAuthTries 3
MaxSessions 5
LoginGraceTime 30

# Logging for audit
LogLevel VERBOSE

# Restrict to specific user
AllowUsers devuser

# Require key + 2FA
AuthenticationMethods publickey,keyboard-interactive
```

**2FA with SSH (Google Authenticator):**
```bash
# Install
apt install libpam-google-authenticator

# Configure per user
google-authenticator

# /etc/pam.d/sshd
auth required pam_google_authenticator.so
```

#### API Key Security in Mobile Context

**Never store API keys on mobile device.**

**Pattern: Keychain on VM, not phone**
```bash
# On VM: Store key securely
security add-generic-password -a "$USER" -s "anthropic-api" -w "your-key"

# In .zshrc (VM only)
export ANTHROPIC_API_KEY=$(security find-generic-password -a "$USER" -s "anthropic-api" -w)

# Phone never sees the actual key
```

#### Audit Logging for Remote Sessions

```bash
#!/bin/bash
# /etc/profile.d/session-audit.sh

if [[ -n "$SSH_CONNECTION" ]]; then
  LOGFILE="/var/log/ssh-sessions.log"
  echo "[$(date)] Session start: $USER from $SSH_CLIENT" >> "$LOGFILE"

  # Log all commands
  export PROMPT_COMMAND='echo "$(date) $(whoami) $(history 1)" >> /var/log/user-commands.log'
fi
```

---

### 27. Emerging Mobile Development Tools

#### Superconductor App (iOS)

**Status:** In beta, limited availability

**What It Offers:**
- Native iOS app for orchestrating Claude Code, Codex, Amp
- GUI for agent management (no terminal needed)
- Push notifications built-in
- Session persistence across app launches

**From @sergeykarayev:**
> "Launched agents, went on a hike, checked in on my phone, tweaked code, and opened a PR from the trail."

**Waiting List:** superconductor.app (if available)

#### AI Maestro Dashboard

**GitHub:** github.com/23blocks-OS/ai-maestro

**Features Beyond Basic Setup:**
- Web dashboard accessible from any device
- Agent-to-agent messaging
- Shared memory/context across agents
- Multi-machine support via Tailscale
- Built-in notification system

**Mobile Access Pattern:**
```
Phone Browser -> ai-maestro Dashboard (on VM) -> Claude Agents
```

#### Vibetunnel

**From @antranapp's curation:** vibetunnel.app

Creates secure tunnels to local dev environments:
- Expose localhost to internet securely
- Access from any mobile device
- No Tailscale setup needed

**Use Case:** Quick one-off access without VPN infrastructure.

---

### 28. Cost Optimization for Mobile Workflows

#### VM Lifecycle Automation

**iOS Shortcut: Auto-Stop VM After Idle**
```
1. Wait 2 hours
2. Run SSH command: "pgrep -f claude || vm-stop"
   (If no Claude process, stop VM)
```

**Cron Job on VM:**
```bash
# Stop VM if no activity for 1 hour
*/15 * * * * pgrep -f "claude\|node\|npm" || sudo shutdown -h +5
```

#### Spot Instance Mobile Pattern

**AWS Spot Instances:**
```bash
# Launch spot instance
aws ec2 run-instances \
  --instance-market-options '{"MarketType":"spot"}' \
  --instance-type t3.xlarge \
  ...

# Set up interruption handling
# On interruption notice: tmux sessions persist, can resume on new instance
```

**Cost Comparison:**
| Type | Hourly | Monthly (8h/day) |
|------|--------|------------------|
| On-demand | $0.17 | $40.80 |
| Spot | $0.05 | $12.00 |
| Reserved | $0.10 | $24.00 |

**Mobile-Friendly:** Spot interruptions don't matter if tmux state is on persistent storage.

#### Hetzner Hourly Billing Trick

Hetzner bills monthly, but you can:
1. Snapshot VM
2. Delete VM (stop billing)
3. Recreate from snapshot when needed

**iOS Shortcut Integration:**
```
"Start Dev VM":
1. Hetzner API: Create server from snapshot
2. Wait for IP
3. Tailscale: Wait for device online
4. Open Termius
```

---

### 29. Future Directions: What's Coming

#### Predicted Developments

**Based on @ryohhno's analysis and community patterns:**

1. **Native Mobile Claude Apps:**
   - First-party Anthropic mobile app for Claude Code
   - Voice-native interface
   - Offline mode with sync

2. **Kanban-Style Visual Coding:**
   - Drag-and-drop task boards for agents
   - Visual git branch management
   - Non-terminal interfaces

3. **Voice-First Development:**
   - Dictate feature requirements
   - Voice-control agent swarms
   - Audio status updates

4. **Wearable Integration:**
   - Apple Watch for notifications
   - Quick voice responses
   - Haptic feedback for agent status

#### Community Experiments to Watch

| Project | Status | What It Does |
|---------|--------|--------------|
| Superconductor | Beta | Native iOS agent orchestration |
| AI Maestro | Active | Dashboard for distributed agents |
| System | Active | Natural language Mac control |
| CC Mirror | Active | Unlock hidden orchestration |
| Vibetunnel | Active | Easy tunnel to local dev |

---

### 30. Quick Reference: Mobile Workflow Commands

**Essential One-Liners:**
```bash
# Check agent status
tmux list-panes -a -F '#{session_name}: #{pane_current_command}' | grep claude

# Kill stuck agent
tmux send-keys -t work C-c

# Capture current output
tmux capture-pane -t work -p | tail -50

# Start agent on branch
cd ~/project && git checkout feature/x && tmux new-window -n feature-x 'claude'

# Quick notification test
curl -d "Test notification" ntfy.sh/your-topic

# Check VM resources
htop -d 50  # Low refresh rate for mobile
```

**Emergency Commands:**
```bash
# Kill all Claude processes
pkill -f claude

# Reset tmux completely
tmux kill-server

# Check disk space
df -h /

# View recent errors
journalctl -p err -n 20
```

---

## Additional Sources (Deep Dive)

- @mollycantillon - Personal Panopticon architecture
- Community experiments with Superconductor, AI Maestro
- ntfy.sh official documentation
- Tailscale ACL documentation
- iOS Shortcuts developer documentation
- Termux Wiki for Android development
- Working Copy documentation for iPad Git workflows
