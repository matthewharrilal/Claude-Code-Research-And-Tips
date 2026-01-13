# Mobile Claude Code - Implementation Details

## Source
- **Author:** @omarsar0 (Elvis) - AI educator at dair_ai, ex-Meta AI, PhD
- **Date:** 2026-01-05
- **URL:** https://x.com/omarsar0/status/2008196366645031251
- **Engagement:** 625 likes, 86K views, 704 bookmarks
- **Original blog:** granda.org/en/2026/01/02/claude-code-on-the-go/ by mgranda

**Note:** This supplements [001-mobile-claude-code-dabit3.md](./001-mobile-claude-code-dabit3.md) with exact implementation code.

---

## Exact Implementation Code

### 1. tmux Auto-Attach (.zshrc)
```bash
if [[ -z "$TMUX" ]]; then
  tmux attach -t main 2>/dev/null || tmux new -s main
fi
```
Automatically attaches to existing session or creates new one on login.

### 2. Hook Configuration (~/.claude/settings.json)
```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh question"
      }]
    }]
  }
}
```

### 3. Notification Script (~/.claude/hooks/poke-notify.sh)
```bash
#!/bin/bash
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')
MESSAGE="$PROJECT_NAME: Claude needs input - $QUESTION"
curl -X POST "$API_URL" -d "{\"message\": \"$MESSAGE\"}"
```

### 4. Port Allocation (avoid conflicts between agents)
```python
hash_val = sum(ord(c) for c in branch_name)
django_port = 8001 + (hash_val % 99)
```
Deterministic port from branch name - same branch always gets same port.

### 5. Mosh Connection
```bash
mosh --ssh="ssh -p 47892" mgranda@100.100.100.100
```

---

## Git Worktree Structure
```
~/Code/myproject/              # main branch
~/Code/myproject-sidebar/      # feature/sidebar branch
~/Code/myproject-dark-mode/    # feature/dark-mode branch
```

Each directory = separate worktree = separate Claude agent = separate tmux window.

---

## Thread Gold: Extended Ecosystem

### Alternative Mobile Clients
- **Blink** (iOS) - Alternative to Termius for mosh (@TylerIsBuilding)
- **Termius** - Works well, agents can help set it up (@koltregaskes)

### Additional Tools
- **RealVNC** - Remote desktop to Raspberry Pi for hybrid access
- **Syncthing** - Sync files to phone for local-first approach

### AI Maestro - Distributed Agent Orchestrator
From @jkpelaez:
> "Same idea plus some other goodies and distributed agents and some UI"

**Repo:** github.com/23blocks-OS/ai-maestro

Features:
- Dashboard for agent management
- Messaging between agents
- Memory/context sharing
- Multi-machine support via Tailscale

### Curated Resource List
From @antranapp: **antran.app/2025/claude_everywhere/**

Collection of "Claude Code everywhere" methods:
- Web-based interfaces
- VPS installation guides
- Tools: Vibetunnel, Omnara, Happy Engineering
- Repos: claude-code-webui

---

## Key Gotcha: mosh + Git Auth

> "mosh doesn't forward SSH agent"

**Solution:** Use regular SSH inside tmux for git operations needing GitHub auth:
```bash
# Inside tmux, when you need to push:
ssh-add ~/.ssh/id_ed25519  # or your key
git push
```

---

## Notification Service Alternatives

The Poke webhook pattern can be adapted for:
- **Pushover** - Similar API
- **ntfy** - Open source, self-hostable
- **Telegram Bot** - Free, reliable
- **Discord Webhook** - If you live in Discord

Just change the curl endpoint and payload format.

---

## File Locations Summary
```
~/.claude/settings.json       # Hook configuration
~/.claude/hooks/poke-notify.sh  # Notification script
~/.zshrc                      # tmux auto-attach
```

---

## Dependencies Checklist
- [ ] Vultr account + API key
- [ ] Tailscale account
- [ ] Termius or Blink app
- [ ] mosh installed on VM
- [ ] tmux installed on VM
- [ ] Poke account (or alternative notification service)
- [ ] jq installed (for JSON parsing)
- [ ] Git configured with worktrees

---

---

## What You'll See When You Run This

**Before running:** You have the base mobile setup from 001 and want to add the exact implementation code.

### Configuring tmux Auto-Attach

Add to `~/.zshrc`:

```bash
$ vim ~/.zshrc
```

Add this block:
```bash
if [[ -z "$TMUX" ]]; then
  tmux attach -t main 2>/dev/null || tmux new -s main
fi
```

**What Happens on Next Login:**

```
$ ssh user@100.x.x.x                   ← Connect to VM

[Auto-attaching to tmux...]            ← The magic!

Either:
  - Attaching to existing 'main' session (if exists)
  - Creating new 'main' session (if doesn't exist)

╔═══════════════════════════════════════════════════════════════╗
║  tmux: session 'main'                                          ║
╚═══════════════════════════════════════════════════════════════╝

user@vm:~$ _                           ← Already in tmux!
```

### Setting Up the Notification Hook

**Step 1: Create hook directory**
```bash
$ mkdir -p ~/.claude/hooks
```

**Step 2: Create notification script**
```bash
$ vim ~/.claude/hooks/poke-notify.sh
```

```bash
#!/bin/bash
# Extract question from Claude's event data
QUESTION=$(echo "$EVENT_DATA" | jq -r '.tool_input.questions[0].question')

# Your project name for context
PROJECT_NAME="my-feature-branch"

# Build message
MESSAGE="$PROJECT_NAME: Claude needs input - $QUESTION"

# Send to Poke (or your notification service)
curl -X POST "https://api.pokepush.com/notify" \
  -H "Authorization: Bearer $POKE_TOKEN" \
  -d "{\"message\": \"$MESSAGE\"}"
```

```bash
$ chmod +x ~/.claude/hooks/poke-notify.sh
```

**Step 3: Configure Claude settings**
```bash
$ vim ~/.claude/settings.json
```

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "AskUserQuestion",
      "hooks": [{
        "type": "command",
        "command": "~/.claude/hooks/poke-notify.sh question"
      }]
    }]
  }
}
```

### Testing the Notification

```bash
$ claude
```

```
claude> Build a login form and ask me about the design

[Claude working...]

Creating login form...
  - Email field
  - Password field

? What styling should I use?          ← Triggers hook!
  1. Minimal/clean
  2. Branded colors
  3. Material Design
```

**On your phone (within 2-3 seconds):**

```
╔═══════════════════════════════════════╗
║ 📱 Poke Push Notification              ║
╠═══════════════════════════════════════╣
║                                        ║
║ my-feature-branch:                     ║
║ Claude needs input - What styling      ║
║ should I use? 1. Minimal/clean         ║
║ 2. Branded colors 3. Material Design   ║
║                                        ║
╚═══════════════════════════════════════╝
```

### Git Worktrees for Parallel Agents

```bash
# Create worktrees for each feature branch
$ git worktree add ../myproject-sidebar feature/sidebar
$ git worktree add ../myproject-dark-mode feature/dark-mode
```

**Result:**
```
~/Code/
├── myproject/              ← main branch (original)
├── myproject-sidebar/      ← feature/sidebar (worktree)
└── myproject-dark-mode/    ← feature/dark-mode (worktree)
```

**Each gets its own tmux window:**
```
╔═══════════════════════════════════════════════════════════════╗
║  tmux windows:                                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  0: main        ~/Code/myproject/                             ║
║  1: sidebar     ~/Code/myproject-sidebar/     claude running  ║
║  2: dark-mode   ~/Code/myproject-dark-mode/   claude running  ║
╚═══════════════════════════════════════════════════════════════╝
```

### Port Allocation (Avoid Conflicts)

When running dev servers, each worktree needs a unique port:

```python
# port_for_branch.py
import sys
branch_name = sys.argv[1]
hash_val = sum(ord(c) for c in branch_name)
django_port = 8001 + (hash_val % 99)
print(django_port)
```

```bash
$ python port_for_branch.py sidebar
8047                                   ← sidebar gets port 8047

$ python port_for_branch.py dark-mode
8023                                   ← dark-mode gets port 8023
```

**Deterministic:** Same branch always gets same port!

### mosh Connection (Network Resilient)

```bash
$ mosh --ssh="ssh -p 47892" user@100.x.x.x
```

**What mosh provides:**
```
Normal SSH:
  WiFi → Cellular = CONNECTION LOST
  Phone sleeps = RECONNECT NEEDED

mosh:
  WiFi → Cellular = SEAMLESS ✓
  Phone sleeps = SEAMLESS ✓
  Spotty connection = SURVIVES ✓
```

**mosh Gotcha - Git Auth:**
```bash
# mosh doesn't forward SSH agent
# Inside tmux, when you need to push:

$ ssh-add ~/.ssh/id_ed25519           ← Add key manually
Identity added: /home/user/.ssh/id_ed25519

$ git push                            ← Now works!
```

**Timing Expectations:**
- Hook trigger to notification: 1-3 seconds
- tmux auto-attach: Instant
- Git worktree creation: 2-5 seconds
- mosh reconnection after sleep: <1 second

**What to Do During Setup:**
- Test notification hook with a dummy question
- Verify all worktrees have unique ports
- Confirm mosh survives network transitions
- Set up SSH key in tmux for git auth

**If you skip port allocation:** Multiple dev servers will fight for the same port, causing confusing errors.

**This connects to:** The detailed implementation layer beneath the conceptual mobile workflow - these are the exact commands to make it work.

---

## Tags
`#mobility` `#implementation` `#hooks` `#push-notifications` `#tmux` `#mosh` `#git-worktrees` `#port-allocation`
