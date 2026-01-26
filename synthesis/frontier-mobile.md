# Mobile-First & Cross-Device Orchestration

> **You Are Here:** This document covers mobile-first development patterns for Claude Code - how to run agents from your phone, tablet, or any device. If you need to work while away from your desk or want to orchestrate overnight runs remotely, start here. For core orchestration patterns, see `synthesis/mastery-multi-agent.md`. For Ralph loops, see `synthesis/ralph-ecosystem-complete.md`.

A synthesis of mobile development patterns, cloud infrastructure configurations, and asynchronous workflows for running Claude Code from anywhere.

---

## The Mobile Vision

**The Paradigm Shift:**
> "Instead of long periods of intense focus, software development can now just fit into the gaps of your day." - @dabit3

Software development is transforming from a synchronous, focused activity requiring dedicated hardware and time into an asynchronous, agent-orchestrated process that interleaves with life.

```
Traditional Development:
[Open laptop] -> [Focus 2-4 hours] -> [Close laptop]

Mobile-First Development:
[Start agents] -> [Go about day] -> [Phone buzzes] ->
[Quick response] -> [Agents continue] -> [Review later]
```

**Core Principle:** Your phone becomes a command center for AI agents working on your behalf, not a replacement for deep coding work.

---

## Current Mobile Approaches

### SSH + tmux (The Foundation)

The most battle-tested approach: persistent terminal sessions that survive network changes, device switches, and interruptions.

**Architecture:**
```
Phone -> SSH Client -> Cloud VM or Home Mac -> tmux -> Claude Code
```

**Key Components:**
- **tmux**: Persistent sessions that survive disconnects
- **mosh**: Network-resilient SSH alternative (survives WiFi to cellular transitions)
- **Tailscale**: Zero-config VPN for secure access without exposed ports

**Implementation:**
```bash
# ~/.zshrc - Auto-attach to tmux on login
if [[ -z "$TMUX" ]] && [[ -n "$SSH_CONNECTION" ]]; then
  tmux attach -t main 2>/dev/null || tmux new -s main
fi
```

**SSH Clients:**
| Platform | App | Strengths |
|----------|-----|-----------|
| iOS | Termius | Beautiful UI, snippet sync, mosh support |
| iOS | Blink Shell | Native mosh, Files app integration, $20 one-time |
| Android | Termux | Full Linux environment, can run Claude Code locally |
| Android | JuiceSSH | Snippet library, session logging |

### Replit + Claude Code

Web-based IDE with full Claude Code integration. The easiest path to mobile development.

**Setup (5 minutes):**
1. Install Replit mobile app
2. Create new project
3. Open terminal
4. `npm install -g @anthropic/claude-code-cli`
5. Authenticate with API key
6. Run `claude`

**Stack:**
```
Replit Mobile App -> Terminal -> Claude Code CLI -> Anthropic API -> Live Preview
```

**Benefits:**
- Full IDE in your pocket
- Instant preview of changes
- No VM management
- Claude Code usage does not consume Replit credits
- Full Linux shell (grep, git, custom scripts work)
- Instant deploy capability

**Power Combo:**
- **Replit Agent**: Big structural changes, scaffolding
- **Claude Code**: Detailed/iterative work, fine-grained edits

### Teleportation (/teleport)

Seamlessly move sessions between devices without losing state.

**Native Claude Code Teleportation:**
```bash
# In terminal Claude session
/teleport
# or
--teleport

# Outputs URL like: https://claude.ai/code/session/abc123
# Open on any device to continue
```

**tmux-Based Teleportation:**
tmux sessions persist on the server. Detach anywhere, attach from anywhere:

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

---

## Mobile Workflow Patterns

### Quick Check Pattern

For 5-minute windows between meetings or activities.

**Flow:**
1. SSH into VM from phone (Termius/Blink)
2. Auto-attach to tmux session
3. Review agent progress (scroll up)
4. Answer any pending questions
5. Disconnect

**Key Commands:**
```bash
# Check agent status
tmux list-panes -a -F '#{session_name}: #{pane_current_command}' | grep claude

# Capture recent output
tmux capture-pane -t work -p | tail -50
```

**Time:** 2-5 minutes

### Full Mobile Dev Pattern

For extended mobile sessions (commute, travel, waiting rooms).

**Setup:**
1. Replit app OR Termius with good connectivity
2. External keyboard (recommended for iPad/phone)
3. Voice dictation for long prompts

**Workflow:**
1. Open Replit or SSH client
2. Review overnight/previous agent work
3. Use voice dictation for complex prompts
4. Preview changes in browser/Replit webview
5. Iterate with quick text corrections
6. Deploy when satisfied

**Voice Dictation Tips:**
- iOS/Android built-in dictation works well
- Superwhisper (macOS) has code mode for technical terms
- Wispr Flow for continuous voice coding

### Device Handoff Pattern

Start work on one device, seamlessly continue on another.

**Desktop to Mobile:**
1. Start Claude agents on desktop
2. `/teleport` to get web URL OR leave tmux session running
3. Continue on mobile via URL or SSH
4. Review, adjust, approve

**Mobile to Desktop:**
1. Start task on mobile (quick prompt)
2. Agents work autonomously
3. Return to desktop for deep review
4. Merge, refine, deploy

**State Preservation Checklist:**
- Save any local changes
- Push to branch
- Detach tmux (or let it auto-detach on disconnect)
- Connect from new device
- Verify tmux session state

---

## Mobile Limitations & Workarounds

### Typing Limitations

**Problem:** Typing long prompts on mobile is painful and error-prone.

**Workarounds:**
1. **Voice Dictation**: Use iOS/Android built-in or Superwhisper for code mode
2. **Pre-written Prompts**: Store common prompts in notes app, copy-paste
3. **Termius Snippets**: Save reusable commands
4. **External Keyboard**: Logitech K380 ($40) or folding Bluetooth

### Screen Size Constraints

**Problem:** Limited real estate for reviewing code.

**Workarounds:**
1. **Focus on Specific Files**: Ask Claude to show only relevant sections
2. **Use tmux Scroll**: Navigate with copy-mode (prefix + [)
3. **iPad Split View**: Terminal + reference docs side by side
4. **Stage Manager (iPadOS)**: Multiple overlapping windows

### Connection Reliability

**Problem:** Mobile connectivity is unreliable (tunnels, airplane mode, spotty cellular).

**Workarounds:**
1. **mosh over SSH**: Survives network transitions, local echo for typing
   ```bash
   mosh --ssh="ssh -p 47892" devuser@100.x.x.x
   ```
2. **Tailscale**: Handles WiFi/cellular transitions gracefully
3. **Auto-reconnect Settings**: Enable in Termius/Blink
4. **Offline Task Queue**: Prepare commands, execute when connected

**mosh vs SSH:**
| Feature | SSH | mosh |
|---------|-----|------|
| Protocol | TCP | UDP |
| Network Change | Disconnects | Survives |
| Device Sleep | Times out | Persists |
| Local Echo | No | Yes (feels faster) |
| SSH Agent Forward | Yes | No (use SSH in tmux for git) |

---

## Push Notifications (The Magic)

The key to async mobile development: Claude comes to you when needed.

### Architecture

```
Claude Code asks question -> PreToolUse hook fires ->
Script extracts question -> Sends to notification service ->
Phone buzzes with question
```

### Configuration

**~/.claude/settings.json:**
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

**~/.claude/hooks/notify-mobile.sh:**
```bash
#!/bin/bash
QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question // "Input needed"')
PROJECT=$(basename "$PWD")

# Option 1: Pushover ($5 one-time)
curl -s \
  --form-string "token=$PUSHOVER_APP_TOKEN" \
  --form-string "user=$PUSHOVER_USER_KEY" \
  --form-string "title=Claude: $PROJECT" \
  --form-string "message=$QUESTION" \
  --form-string "priority=1" \
  https://api.pushover.net/1/messages.json

# Option 2: ntfy (free, self-hostable)
# curl -d "$PROJECT: $QUESTION" ntfy.sh/your-topic

# Option 3: Telegram (free)
# curl -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
#   -d chat_id="$CHAT_ID" -d text="$PROJECT: $QUESTION"
```

### Notification Services Compared

| Service | Platform | Cost | Self-Host | Priority Levels |
|---------|----------|------|-----------|-----------------|
| Poke | iOS | Free | No | No |
| Pushover | All | $5 one-time | No | Yes |
| ntfy | All | Free | Yes | Yes |
| Telegram | All | Free | No | No |
| Discord | All | Free | No | No |

### Smart Notification Filtering

Avoid notification fatigue with priority-based filtering:

```bash
#!/bin/bash
# ~/.claude/hooks/smart-notify.sh

QUESTION=$(echo "$CLAUDE_HOOK_EVENT_DATA" | jq -r '.tool_input.questions[0].question // ""')

# Skip low-priority questions
if [[ "$QUESTION" == *"confirm"* ]] || [[ "$QUESTION" == *"proceed"* ]]; then
  exit 0  # Don't notify for confirmations
fi

# High priority for errors
PRIORITY=0
if [[ "$QUESTION" == *"error"* ]] || [[ "$QUESTION" == *"fail"* ]]; then
  PRIORITY=1  # Emergency notification
fi

curl -s \
  --form-string "priority=$PRIORITY" \
  --form-string "message=$QUESTION" \
  https://api.pushover.net/1/messages.json
```

---

## Mobile + Orchestration

How Ralph, CC Mirror, and multi-agent patterns work on mobile.

### Multi-Agent Mobile Pattern

**Setup:**
```
Phone -> SSH -> VM with 6 tmux windows -> 6 Claude agents on different branches
```

**@dabit3's Setup:**
- Vultr VM (vhf-8c-32gb, ~$7/day)
- 6 parallel Claude agents in tmux
- Git worktrees for branch isolation
- Push notifications via Poke

**Git Worktrees for Parallelism:**
```bash
~/Code/myproject/              # main branch
~/Code/myproject-sidebar/      # feature/sidebar branch
~/Code/myproject-dark-mode/    # feature/dark-mode branch
```

Each worktree = separate directory = separate Claude agent = separate tmux window.

### Ralph on Mobile

Layer orchestration tools on top of mobile access:

```bash
# Start Ralph loop on VM
gh issue view 4
claude --resume 06fef6c1-b865-4761-b54d-42771423b56d

# Ralph works autonomously
# Monitor from phone via SSH
# Intervene when notified
```

### rpai Agent Monitor

TUI dashboard for seeing all running Claude/Codex/Cursor agents:

```bash
# Install
cargo install rpai

# Run to see all agents
rpai
```

Shows:
- All running agents
- Status (running/idle/waiting)
- Output preview
- One-click jump to agent pane

---

## Infrastructure Options

### Architecture Comparison

| Architecture | Cost | Best For |
|--------------|------|----------|
| Cloud VM (Vultr/Hetzner) | $7-13/day | Heavy parallel workloads, isolation |
| Home Mac | $0 | Personal use, always-on setup |
| Home Laptop | $0 | Casual use (must stay open) |
| Replit | $0-20/mo | Zero infrastructure, quick start |
| GitHub Codespaces | $0-20/mo | GitHub-native projects |

### Cloud VM Setup (Hetzner - Best Value)

```bash
# 1. Create server
hcloud server create --name claude-dev --type cx31 --image ubuntu-24.04

# 2. Install essentials
apt install -y tmux mosh git curl jq nodejs npm
curl -fsSL https://cli.anthropic.com/install.sh | sh

# 3. Install Tailscale (VPN)
curl -fsSL https://tailscale.com/install.sh | sh
tailscale up

# 4. Install Claude Code
npm install -g @anthropic/claude-code
```

**Security:**
- No public SSH - Tailscale only
- Cloud firewall: `ufw allow from 100.64.0.0/10` (Tailscale CIDR)
- fail2ban for rate limiting
- Non-root user for Claude

### Home Mac Setup (Zero Cost)

**Requirements:**
- Mac stays powered on
- Lid open (for laptops)
- Tailscale installed

**Steps:**
1. Install Tailscale on Mac: `brew install tailscale`
2. `tailscale up`
3. Install Tailscale app on phone
4. Configure tmux auto-attach
5. SSH from phone to Tailscale IP (100.x.x.x)

### iOS Shortcut for VM Lifecycle

**"Start Dev VM" Shortcut:**
1. Run Vultr API call to start instance
2. Wait 30 seconds
3. Open Termius to saved host

**"Stop Dev VM" Shortcut:**
1. Run Vultr API call to halt instance
2. Save ~$7/day when not coding

---

## iPad as Primary Dev Device

### Hardware Setup

| Component | Recommendation | Why |
|-----------|---------------|-----|
| iPad | Pro 13" M4 | Screen real estate |
| Keyboard | Magic Keyboard | Trackpad essential |
| Stand | Twelve South Curve | Ergonomic angle |

### App Ecosystem

| App | Purpose | Price |
|-----|---------|-------|
| Blink Shell | SSH + mosh | $20 |
| Working Copy | Git client | $30 |
| GitHub Mobile | PR/Issue management | Free |
| Safari | Documentation | Free |

### Stage Manager Layout

```
+-----------------------------------+
|  Stage Manager - Main Stage        |
+-------------------+----------------+
|                   |                |
|  Blink Shell      |  GitHub Mobile |
|  (tmux/Claude)    |  (PRs/Issues)  |
|                   |                |
+-------------------+----------------+
|                   |                |
|  Safari (docs)    |  Notes/Obsidian|
|                   |  (task list)   |
+-------------------+----------------+
```

---

## Real-World Case Studies

### Conference Travel (@dabit3 style)

**Scenario:** Week-long conference, hotel WiFi only.

**Pattern:**
```
7:00 AM  - Hotel: Review overnight agent work (iPad, 30 min)
10:00 AM - Coffee break: Quick phone check for urgent questions (2 min)
12:00 PM - Lunch: Kick off afternoon tasks (iPad, 20 min)
6:00 PM  - Dinner: Review, merge PRs (iPad, 30 min)
10:00 PM - Hotel: Plan next day, start overnight work (30 min)
```

**Result:** Ship features with 2-3 hours total hands-on time across 5 days.

### Commuter Developer

**Scenario:** 1-hour train commute, spotty cellular with tunnels.

**Setup:** iPhone + mosh (connection-resilient)

**Pattern:**
```
Train departing: Start mosh, review, kick off tasks
Mid-commute (tunnel): Connection drops, mosh buffers input locally
Exiting tunnel: mosh reconnects automatically, buffered commands execute
Arriving at office: Agents running autonomously
```

**Key Insight:** mosh + tmux = never losing context, even with Swiss-cheese connectivity.

### Parent with Young Kids

**Scenario:** Unpredictable 5-minute windows throughout day.

**Pattern:**
```
6:00 AM  - Start day's agents (20 min before kids wake)
9:00 AM  - Quick phone response to agent question (while kids play)
11:00 AM - Naptime: Deep work if needed (1 hour optional)
3:00 PM  - Kids TV time: Review, adjust course (15 min)
8:00 PM  - Kids in bed: Review day's work, plan tomorrow (30 min)
```

**Key Insight:** "I'm not looking for continuous hours. I'm looking for 5-minute windows to keep agents productive."

---

## Future of Mobile AI Coding

### Emerging Tools

| Project | Status | What It Does |
|---------|--------|--------------|
| Superconductor | Beta | Native iOS agent orchestration |
| AI Maestro | Active | Dashboard for distributed agents |
| Vibetunnel | Active | Easy tunnel to local dev |

### Predicted Developments

From @ryohhno:
> "Mobile code interfaces are going to become a large area of VC interest in 2026: 'code from your phone', 'voice memos to code', 'ssh into your terminal from your phone', kanban style drag-and-drop visual coding"

**What's Coming:**
1. **Native Mobile Claude Apps**: First-party Anthropic mobile app with voice-native interface
2. **Kanban-Style Visual Coding**: Drag-and-drop task boards for agents, non-terminal interfaces
3. **Voice-First Development**: Dictate feature requirements, voice-control agent swarms
4. **Wearable Integration**: Apple Watch for notifications, quick voice responses

---

## Quick Reference: Mobile Commands

**Essential One-Liners:**
```bash
# Check agent status
tmux list-panes -a -F '#{session_name}: #{pane_current_command}' | grep claude

# Capture current output
tmux capture-pane -t work -p | tail -50

# Start agent on branch
cd ~/project && git checkout feature/x && tmux new-window -n feature-x 'claude'

# Quick notification test
curl -d "Test" ntfy.sh/your-topic
```

**Emergency Commands:**
```bash
# Kill all Claude processes
pkill -f claude

# Reset tmux completely
tmux kill-server

# Kill stuck agent (send Ctrl+C)
tmux send-keys -t work C-c
```

---

### Checkpoint: Mobile Infrastructure
**You should now understand:**
- [ ] The difference between SSH/tmux vs Replit approaches
- [ ] How teleportation (/teleport) enables device handoff
- [ ] When to use quick check vs full mobile dev patterns
- [ ] How push notifications enable async development

**If unclear:** Re-read the "Current Mobile Approaches" and "Mobile Workflow Patterns" sections above.

---

## 30-Minute Quick Start

### Minimal Mobile Setup

**Prerequisites:**
- Phone (iOS or Android)
- Existing Mac at home OR $10 for cloud VM
- Anthropic API key

**Steps:**

1. **Install Tailscale (5 min)**
   - Download app on phone, sign in
   - Download on Mac/VM, run `tailscale up`
   - Note the Tailscale IP (100.x.x.x)

2. **Install Termius (2 min)**
   - Download from App Store/Play Store
   - Add host with Tailscale IP

3. **Configure tmux (5 min)**
   ```bash
   # On Mac/VM
   echo 'if [[ -z "$TMUX" ]]; then tmux attach -t main 2>/dev/null || tmux new -s main; fi' >> ~/.zshrc
   ```

4. **Test Connection (3 min)**
   - Open Termius
   - Connect to Tailscale IP
   - Should auto-attach to tmux

5. **Run Claude Code (2 min)**
   ```bash
   claude
   ```

6. **Set Up Notifications (10 min)**
   - Sign up for ntfy.sh (free)
   - Create hook script
   - Configure in settings.json

---

## Cost Calculator

| Component | Monthly Cost | Notes |
|-----------|--------------|-------|
| Cloud VM (Hetzner) | $13 | Always on |
| Cloud VM (Vultr hourly) | $0-210 | Stop when not using |
| Home Mac | $0 | Electricity only |
| Tailscale | $0 | Free tier |
| Termius | $0-10 | Free works fine |
| ntfy | $0 | Self-host or free hosted |
| Pushover | $5 one-time | Per platform |

**Budget Setup:** Home Mac + Tailscale + Termius + ntfy = $0/month
**Power Setup:** Hetzner VM + Tailscale + Termius + Pushover = $13/month + $5 one-time

---

## Troubleshooting

### Problem: "SSH connection drops constantly"

**Symptom:** Connection terminates when switching networks (WiFi to cellular) or after screen lock.

**Cause:** Standard SSH uses TCP which doesn't handle network transitions well.

**Fix:**
```bash
# Use mosh instead of SSH
mosh user@server

# If mosh not available, configure SSH keepalives
# In ~/.ssh/config:
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 3
```

---

### Problem: "tmux session not attaching on connect"

**Symptom:** Connect to server but don't see your Claude Code session.

**Cause:** Auto-attach not configured or session was killed.

**Fix:**
```bash
# Check if session exists
tmux list-sessions

# If exists, attach manually
tmux attach -t main

# If not exists, start new
tmux new -s main

# Configure auto-attach in ~/.zshrc:
if [[ -z "$TMUX" ]] && [[ -n "$SSH_CONNECTION" ]]; then
  tmux attach -t main 2>/dev/null || tmux new -s main
fi
```

---

### Problem: "Notifications not arriving"

**Symptom:** Claude asks questions but no push notification on phone.

**Cause:** Hook not configured correctly or notification service issue.

**Fix:**
```bash
# Test notification service directly
curl -d "Test message" ntfy.sh/your-topic

# Check hook is executable
chmod +x ~/.claude/hooks/notify-mobile.sh

# Verify hook is configured in settings.json
cat ~/.claude/settings.json | grep -A5 PreToolUse

# Test hook manually
echo '{"tool_input":{"questions":[{"question":"Test"}]}}' | \
  CLAUDE_HOOK_EVENT_DATA=$(cat) ~/.claude/hooks/notify-mobile.sh
```

---

### Problem: "Tailscale connection refused"

**Symptom:** Can't reach home Mac or cloud VM via Tailscale IP.

**Cause:** Tailscale not running on target machine, or firewall blocking.

**Fix:**
```bash
# On target machine, check Tailscale status
tailscale status

# Restart if needed
sudo tailscale down && sudo tailscale up

# On Mac, check if SSH enabled
# System Preferences → Sharing → Remote Login

# Test connection
ping 100.x.x.x  # Your Tailscale IP
```

---

## Sources

- @dabit3 (Nader Dabit) - Original mobile Claude Code workflow
- @omarsar0 (Elvis) - Implementation details
- @itsPaulAi (Paul Couvert) - Replit mobile vibe coding guide
- @mgranda - granda.org/en/2026/01/02/claude-code-on-the-go/
- @randomor - Home Mac setup variant
- @sergeykarayev - Superconductor app
- @jkpelaez - AI Maestro
- @antranapp - antran.app/2025/claude_everywhere/
- @ryohhno - Future of mobile coding predictions
- Boris Cherny - Claude Code teleportation feature
