# Mobile Claude Code - Phone-First Development

## Source
- **Author:** @dabit3 (Nader Dabit) - DevRel at EigenCloud, ex-AWS/Aave
- **Date:** 2026-01-05
- **URL:** https://x.com/dabit3/status/2008218122994520253
- **Engagement:** 1.3K likes, 98K views, 1.7K bookmarks

---

## Core Insight

**One-liner:** Run 6 parallel Claude Code agents on a $7/day cloud VM, accessed via phone SSH with push notifications when Claude needs input—no laptop required.

**The Paradigm Shift:**
> "Instead of long periods of intense focus, software development can now just fit into the gaps of your day."

---

## The Setup

### Components
```
┌─────────────────────────────────────────────────────────────┐
│  PHONE                                                       │
│  ├─ Termius (SSH/mosh client)                               │
│  ├─ Tailscale VPN                                           │
│  ├─ Poke (push notifications)                               │
│  └─ iOS Shortcuts (VM lifecycle)                            │
└─────────────────────────────────────────────────────────────┘
                           │
                    Tailscale VPN
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  CLOUD VM (Vultr vhf-8c-32gb, ~$7/day)                      │
│  ├─ tmux (persistent sessions)                              │
│  ├─ 6x Claude Code agents (parallel tmux windows)           │
│  ├─ Git worktrees (branch isolation)                        │
│  ├─ PreToolUse hook → Poke webhook                          │
│  └─ Security: nftables, fail2ban, no public SSH             │
└─────────────────────────────────────────────────────────────┘
```

### Why mosh over SSH
- Survives WiFi → cellular transitions
- Persists through device sleep
- Network-resilient connection

---

## Implementation

### tmux Session Management
```bash
# Create session
tmux create -s work

# Attach to session
tmux attach -t work
```

Shell auto-attaches to tmux on login. Each Claude agent runs in its own tmux window.

### Push Notifications (The Magic)
Hook in `~/.claude/settings.json`:
- Trigger: PreToolUse when Claude calls `AskUserQuestion`
- Action: Script extracts question, sends to Poke API via curl
- Result: Phone buzzes with the question, you respond

### VM Lifecycle
```bash
vm-start   # Custom script wrapping Vultr API
vm-stop    # Stop to save costs
```

iOS Shortcut can trigger `vm-start` via Vultr API.

### Git Worktrees for Parallelism
Each feature branch gets:
- Its own directory (worktree)
- Its own Claude agent
- Its own tmux window
- Hash-based port allocation (branch name → port) to avoid conflicts

### Security
- **No public SSH** - Tailscale only
- **Cloud firewall** + nftables + fail2ban
- **Permissive mode** safe on isolated VM

---

## The Workflow

1. **Start VM** via iOS Shortcut
2. **Connect** via Termius → Tailscale → SSH/mosh
3. **Auto-attach** to tmux session
4. **Kick off agents** on different feature branches
5. **Go about your day**
6. **Phone buzzes** when agent needs input
7. **Respond** via Termius keyboard
8. **Agent continues**
9. **Stop VM** when done

---

## Thread Gold: Alternative Setups

### @randomor - Mac-at-Home Version
> "You just need Tailscale, Termius, tmux and a Mac that's always plugged in and lid open."

Cheaper than VM ($0/day), but requires always-on Mac.

### @GabGarrett - Laptop Version
> "Just leave your laptop open at home and use Tailscale to control Claude"

Same idea, no cloud costs.

### @sergeykarayev - Superconductor App
iOS app that orchestrates Claude Code, Codex, Amp, Opencode:
> "Launched agents, went on a hike, checked in on my phone, tweaked code, and opened a PR from the trail."

GUI alternative to raw SSH.

### @ayvee_bera - Add Ralph on Top
Layer orchestration tools like Ralph for automated iterations:
```bash
gh issue view 4
claude --resume 06fef6c1-b865-4761-b54d-42771423b56d
```

---

## Cost Analysis

| Setup | Daily Cost | Tradeoffs |
|-------|------------|-----------|
| Cloud VM | ~$7 | Always available, isolated, scalable |
| Home Mac | $0 | Must stay powered, less isolated |
| Home Laptop | $0 | Must stay open, battery concerns |

---

## Mental Model

> "View software development as an asynchronous, agent-orchestrated process that interleaves with life, rather than a synchronous, focused activity requiring dedicated hardware/time."

**Key principles:**
- Cheap cloud for compute
- Persistence (tmux, mosh) for handoffs
- Notifications for async human-in-loop
- Isolation (worktrees) for parallelism
- Security enables permissive AI modes

---

## Caveats

- VM costs add up if not stopped (~$210/month if always running)
- Notifications can disrupt off-time
- Requires reliable mobile data
- Permissive mode safe ONLY on isolated VM
- Hash collisions could cause port conflicts (rare)

---

## Actionability

🟡 **Medium Lift** - Need to set up VM, Tailscale, Termius, hooks

### Quick Start (Minimal Version)
1. Install Tailscale on phone + home Mac
2. Install Termius on phone
3. Set up tmux on Mac
4. SSH from phone via Tailscale IP
5. Run Claude Code in tmux
6. Detach, reconnect anytime

### Full Version
1. Provision Vultr VM
2. Configure Tailscale (no public SSH)
3. Set up tmux auto-attach
4. Configure PreToolUse → Poke webhook
5. Create vm-start/vm-stop scripts
6. Set up iOS Shortcut for VM lifecycle

---

## What You'll See When You Run This

**Before running:** You have a cloud VM with Claude Code, Tailscale, and tmux configured.

### Starting Your VM (iOS Shortcut)

Tap the iOS Shortcut on your home screen:

```
╔═══════════════════════════════════════╗
║  🚀 Start Dev VM                       ║
╚═══════════════════════════════════════╝

[Shortcut runs...]

Calling Vultr API...
  Instance: vhf-8c-32gb
  Status: starting...

VM booted in 45 seconds!
  IP: 100.x.x.x (Tailscale)
  Cost: ~$0.29/hour

Connect via Termius now.
```

### Connecting from Phone (Termius)

Open Termius app, select your VM:

```
┌─────────────────────────────────────┐
│ Termius                              │
├─────────────────────────────────────┤
│                                      │
│ 📱 Saved Hosts:                      │
│                                      │
│ > dev-vm (100.x.x.x)     [Connect]  │
│   home-mac (100.y.y.y)              │
│                                      │
└─────────────────────────────────────┘
```

Tap Connect:

```
Connecting via mosh...               ← Network-resilient connection
  Using Tailscale VPN
  Surviving WiFi→cellular transitions

mosh: Connected to 100.x.x.x

[Auto-attach to tmux...]              ← From .zshrc config

╔═══════════════════════════════════════════════════════════════╗
║  tmux: session 'work' (6 windows)                             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                                ║
║  Windows:                                                      ║
║  0: main (current)                                            ║
║  1: auth-feature       ← Claude agent on feature/auth branch ║
║  2: dashboard          ← Claude agent on feature/dashboard   ║
║  3: api-refactor       ← Claude agent working                ║
║  4: mobile-styles      ← Claude agent idle                   ║
║  5: tests              ← Claude agent running tests          ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝

dev@vm:~/project$ _
```

### Starting Agents on Multiple Branches

```bash
# Window 1: Auth feature
$ cd ~/project-auth && claude
```

```bash
# Window 2: Dashboard feature
$ cd ~/project-dashboard && claude
```

Each window shows its Claude agent working:

```
╔═════════════════════════════════════╗
║ Window 1: auth-feature              ║
╠═════════════════════════════════════╣
║                                      ║
║ claude> Implement JWT refresh flow  ║
║                                      ║
║ [Working...]                         ║
║   Reading src/auth/jwt.ts           ║
║   Editing src/auth/refresh.ts       ║
║   Running npm test                  ║
║                                      ║
║ ✓ JWT refresh implemented           ║
║   Running on port 8023              ║
║                                      ║
║ ? How should I handle token expiry? ║ ← Claude needs input!
║                                      ║
╚═════════════════════════════════════╝
```

### Push Notification on Phone

**Phone buzzes!**

```
╔═══════════════════════════════════════╗
║ 📱 Poke Notification                   ║
╠═══════════════════════════════════════╣
║                                        ║
║ 🤖 auth-feature:                       ║
║    Claude needs input                  ║
║                                        ║
║    "How should I handle token expiry?  ║
║     Option 1: Auto-refresh             ║
║     Option 2: Redirect to login"       ║
║                                        ║
║    [Open Termius]                      ║
║                                        ║
╚═══════════════════════════════════════╝
```

### Responding from Couch/Train/Wherever

Open Termius, navigate to window 1:

```bash
# In tmux, switch to auth-feature window
Ctrl+B, 1                              ← Switch to window 1
```

```
claude> ? How should I handle token expiry?

You: Use auto-refresh with a 5-minute buffer before expiry

claude> Got it! Implementing auto-refresh...
  [Working...]

  ✓ Added token refresh 5 minutes before expiry
  ✓ Tests passing

claude> _                              ← Ready for next task
```

**Go back to your day. Agent continues working.**

### Stopping VM When Done

```bash
$ vm-stop
```

**Or via iOS Shortcut:**

```
╔═══════════════════════════════════════╗
║  🛑 Stop Dev VM                        ║
╚═══════════════════════════════════════╝

Calling Vultr API...
  Instance stopping...

VM stopped!
  Today's cost: $2.12
  Sessions saved to tmux
```

### End-of-Day Review

```bash
$ git log --all --oneline --since="8 hours ago"
```

**Output:**
```
abc1234 (auth) feat: JWT refresh with auto-refresh
def5678 (auth) fix: Token validation edge case
ghi9012 (dashboard) feat: Widget persistence
jkl3456 (dashboard) feat: Dark mode toggle
mno7890 (api) refactor: Error handling cleanup
```

**Result:** 5 commits across 3 features from your phone throughout the day!

**Timing Expectations:**
- VM boot: 30-60 seconds
- SSH/mosh connect: 5-10 seconds
- tmux auto-attach: Instant
- Notification delivery: 1-3 seconds
- Response round-trip: Your typing speed

**What to Do Throughout the Day:**
- Check phone when notifications buzz
- Respond to agent questions
- Switch between windows to check on different agents
- Push commits when features complete
- Stop VM when done to save money

**If you skip push notifications:** You won't know when agents need input until you manually check - they could be stuck waiting for hours.

**This connects to:** The paradigm shift from "intense focus sessions" to "asynchronous, agent-orchestrated development that interleaves with life."

---

## Future Direction

From @ryohhno:
> "Mobile code interfaces are going to become a large area of VC interest in 2026: 'code from your phone', 'voice memos → code', 'ssh into your terminal from your phone', kanban style drag-and-drop visual coding"

This is early innings of a paradigm shift.

---

## Follow-up Questions
1. Exact PreToolUse hook script for Poke notifications?
2. Is Superconductor app open-source?
3. How does Ralph integrate with this mobile setup?

---

## Tags
`#mobility` `#teleportation` `#cloud-vm` `#tmux` `#tailscale` `#push-notifications` `#async-development` `#phone-coding` `#git-worktrees`
