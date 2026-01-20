# Superconductor iOS: Mobile Multi-Agent Orchestration

---
## D-FINAL Connection

**This content contributed to:**
- D-FINAL-implementation.md: Informed Section 3 (Ralph Implementation - mobile oversight), Section 5 (Enterprise Implementation - parallel agent management)
- D-FINAL-operations.md: Informed Section 1 (Monitoring - mobile dashboard patterns), Section 4 (Operational Checklists - mobile agent orchestration)

**GAP STATUS:** **This content fills a D-FINAL gap - native iOS orchestration not in D-FINAL**

Superconductor represents a paradigm shift from SSH-based mobile workflows to native iOS orchestration. This extraction provides:
- Native iOS app for Claude Code agent management
- Parallel agent orchestration from phone/tablet
- GUI alternative to terminal-based mobile workflows
- Live preview comparison for agent outputs
- One-click PR creation from mobile

**Platform-specific considerations:**
- iOS 16.6+, iPadOS 16.6+, macOS 13.5+ (Apple Silicon)
- visionOS 1.0+ (Apple Vision Pro)
- Requires user API keys (Claude, OpenAI, Amp, Gemini, Opencode)
- GitHub integration for PR workflows

**Journey references:**
- [journey-implementation.md - Mobile orchestration patterns]
- [journey-operations.md - Parallel agent monitoring]
- [001-mobile-claude-code-dabit3.md - SSH alternative approach]
- [research-mobile-workflows-expanded.md - Full mobile ecosystem]

**Last enhanced:** 2026-01-19 (Phase 2B)

---

## You Are Here

**Context:** You're exploring mobile-first Claude Code workflows. You've seen the SSH+tmux+Tailscale approach. Now you're looking at **Superconductor**---a native iOS app that provides GUI-based orchestration of multiple AI coding agents.

**Where This Fits:**
```
Mobile Claude Code Options
|
+-- Terminal-Based (SSH + tmux + Tailscale)
|   +-- Full control, steep learning curve
|   +-- 001-mobile-claude-code-dabit3.md
|
+-- Native App (Superconductor) <-- YOU ARE HERE
|   +-- GUI orchestration, lower barrier
|   +-- Parallel agents, live previews
|
+-- Hybrid (Cloud IDE + Mobile Browser)
    +-- Codespaces/Gitpod via mobile Safari
```

**What You Need First:**
- Understanding of parallel agent patterns (see: `synthesis/mastery-multi-agent.md`)
- Familiarity with Ralph/Gas Town concepts helpful but not required
- API key for at least one provider (Anthropic Claude, OpenAI, Amp, or Gemini)

---

## Source

- **Product:** Superconductor
- **Company:** Volition, Inc. (developer ID: 1782944140)
- **Creator:** Sergey Karayev (@sergeykarayev)
- **Background:** Co-founder of Gradescope (acquired by Turnitin), PhD UC Berkeley (Computer Vision)
- **Website:** https://superconductor.com
- **iOS App:** https://apps.apple.com/us/app/superconductor/id6749349238
- **Blog:** https://superconductor.com/blog/
- **Reliability:** 4/5 - Active development, production use, growing community

---

## What This Is

### Core Definition

**Superconductor** is a native iOS/macOS app and web platform for orchestrating multiple AI coding agents in parallel. Instead of running one Claude Code session and waiting for results, Superconductor lets you:

1. Spin up MANY agents for each ticket/task
2. Each agent works in its own isolated cloud environment
3. Watch live previews of each agent's implementation
4. Compare results and pick the best one
5. One-click PR the winning implementation

### The Elevator Pitch

From Sergey Karayev:
> "Superconductor: Manage an entire team of Claude Code agents, right from your phone or laptop. Write informal tickets. Spin up MANY agents for each ticket. Each agent has its own live app preview. One-click PR the best one!"

### The Mental Model

Think of Superconductor as a **hiring manager for AI developers**:

```
Traditional Workflow:
  You -> Single Claude Agent -> Wait -> Result -> Maybe try again

Superconductor Workflow:
  You -> [Agent 1, Agent 2, Agent 3, Agent 4] -> Compare live previews -> Pick best -> PR
```

Instead of serial iteration, you get parallel exploration.

---

## Why It Matters

### The Problem Superconductor Solves

**Pain Point 1: Single-Agent Bottleneck**
Traditional Claude Code: One agent, one attempt, wait to see if it works.

**Pain Point 2: Terminal Friction on Mobile**
SSH + tmux works but requires:
- VPN setup (Tailscale)
- SSH client (Termius/Blink)
- Terminal navigation on phone keyboard
- Manual session management

**Pain Point 3: No Easy Preview**
With terminal-based mobile, you can't easily see what your app looks like mid-development.

### Superconductor's Solutions

| Problem | Superconductor Solution |
|---------|------------------------|
| Single-agent bottleneck | Parallel agents on same task |
| Terminal friction | Native iOS GUI |
| No easy preview | Live browser previews per agent |
| Manual PR creation | One-click PR button |
| Agent comparison | Swipe between previews |
| Status awareness | Push notifications |

### Who This Is For

**Primary Audience:**
- Developers who want mobile oversight of AI coding
- Teams running parallel experiments on features
- Anyone who wants GUI over terminal for mobile dev

**Not For:**
- Users who need fine-grained terminal control
- Offline development (requires internet)
- Those wanting to self-host (it's a managed service)

---

## Architecture Deep Dive

### Platform Components

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
|  - Claude Code         - GitHub           - Anthropic              |
|  - OpenAI Codex        - PR creation      - OpenAI                 |
|  - Amp                 - Comment sync     - Amp                    |
|  - Gemini                                 - Google                 |
|  - Opencode                               - Opencode Zen           |
|                                                                    |
+-------------------------------------------------------------------+
```

### iOS App Architecture

**Technical Specs:**
- Size: 1 MB (lightweight, cloud-backed)
- iOS Requirement: 16.6+
- iPadOS Requirement: 16.6+
- macOS Requirement: 13.5+ with Apple Silicon (M1+)
- visionOS: 1.0+ (Apple Vision Pro supported!)

**Key iOS Features:**
1. **Native Push Notifications** - Agent status updates
2. **Swipe Navigation** - Browse between implementation previews
3. **iPad Multitasking** - Side-by-side app preview + chat (v1.0.2+)
4. **Video Playback** - Watch agent screen recordings (v1.0.2+)
5. **Ticket Sharing** - Share tickets across team (v1.0.1+)

### Agent Execution Model

```
Ticket Created
     |
     v
+--------------------+
| Environment Setup  | ~30 seconds
| - Clone repo       |
| - Install deps     |
| - Run build        |
| - State snapshot   |
+--------------------+
     |
     v
+--------------------+
| Agent Spawned      |
| - Uses your API key|
| - Full sandbox     |
| - Isolated changes |
+--------------------+
     |
     v
+--------------------+
| Live Preview       |
| - Real browser     |
| - Tests running    |
| - Visual diff      |
+--------------------+
     |
     v
+--------------------+
| Ready for Review   |
| - Compare agents   |
| - Pick winner      |
| - One-click PR     |
+--------------------+
```

### BYOK (Bring Your Own Key) Model

Superconductor doesn't sell AI access. You bring your own credentials:

| Provider | Supported Plans | Notes |
|----------|-----------------|-------|
| Anthropic (Claude) | Claude Pro, Claude Max, API | Recommended, full Claude Code |
| OpenAI | Codex, API keys | Alternative agent |
| Amp | Standard plans | Alternative agent |
| Google Gemini | API access | Alternative agent |
| Opencode | Zen API | Access to multiple models |

**Why BYOK:**
- Use your existing subscriptions
- No markup on AI costs
- Flexibility to compare providers

---

## Key Features

### 1. Parallel Agent Execution

**The Core Innovation:**
Instead of waiting for one agent to complete, run 3-5 agents simultaneously on the same task.

**Example Workflow:**
```
Task: "Add dark mode toggle to settings page"

Superconductor spins up:
  Agent 1 (Claude Opus): CSS-in-JS approach
  Agent 2 (Claude Sonnet): Tailwind approach
  Agent 3 (Codex): styled-components approach

30 seconds later: 3 live previews to compare

You: Pick Agent 2's implementation -> One-click PR
```

**Karayev's Usage Pattern:**
> "Our regular workflow is to fire off a Sonnet, an Opus, and an Amp and compare live app previews. A single feature implementation attempt can easily be $5 or more. We like to launch many attempts at once, so maybe $20/feature."

### 2. Live Browser Previews

Each agent runs in a cloud environment with:
- Your full repository cloned
- Dependencies installed
- Build commands executed
- Live web server running
- Real browser preview accessible

**Speed:** From launching agent to live preview: ~30 seconds (via state snapshots after build).

### 3. iOS Native Experience

**What You See on iPhone:**

```
+------------------------------------------+
|  Superconductor                    [+]   |
+------------------------------------------+
|                                          |
|  Active Tickets                          |
|  +------------------------------------+  |
|  | Add dark mode toggle              |  |
|  | 3 agents | 2 previews ready       |  |
|  +------------------------------------+  |
|  | Fix auth bug #1234                |  |
|  | 1 agent | Waiting for input       |  |
|  +------------------------------------+  |
|                                          |
|  [Swipe to see previews]                 |
|                                          |
|  +------------------------------------+  |
|  |  [Preview 1]  [Preview 2]  [...]  |  |
|  |  < swipe >                         |  |
|  +------------------------------------+  |
|                                          |
|  [Chat with Agent]                       |
|                                          |
+------------------------------------------+
```

**Push Notification Example:**
```
Superconductor
Agent completed: dark-mode-toggle
3 implementations ready for review
[View Previews]
```

### 4. GitHub Integration

**Two-Way Integration:**

**From GitHub to Superconductor:**
- Mention `@superconductor` in any comment
- Or use `/superconductor` or `/sc`
- Superconductor creates ticket and spins up agents

**From Superconductor to GitHub:**
- One-click PR creation
- Changes properly attributed
- Tests visible in PR checks

**Example GitHub Comment:**
```markdown
@superconductor please add input validation to the registration form.
Check for email format and password strength (min 8 chars, 1 number).
```

Result: Superconductor creates ticket, launches agents, notifies you when ready.

### 5. Slack Integration

**Thread-Aware Bot:**
- Start tickets from Slack threads
- Full thread context passed to agents
- Responses appear in same thread
- Team visibility into agent progress

### 6. Workspaces (Team Feature)

**Multi-Developer Collaboration:**
- Shared ticket queues
- Role-based permissions (Admin, Developer, Collaborator, Viewer)
- Persistent agent sessions
- Team members can continue each other's work

### 7. Diff Viewer & Commenting

**Built-In Code Review:**
- View all agent-made changes before merging
- Add inline comments on specific diff lines
- Iterate with agent based on feedback

### 8. Artifacts (Screenshots)

**Visual Documentation:**
> "Claude Code can now capture and share screenshots of its work right in the chat."

Agents can screenshot their progress, visible in your mobile app.

---

## Installation & Setup

### Prerequisites

1. **iOS/iPadOS 16.6+** or **macOS 13.5+ (Apple Silicon)**
2. **API Key** for at least one provider:
   - Anthropic API key (for Claude)
   - OpenAI API key (for Codex)
   - Amp credentials
   - Google Gemini API key
   - Opencode Zen API key
3. **GitHub Account** (for repo connection and PR creation)

### Installation Steps

**Step 1: Download App**
```
iOS: App Store -> Search "Superconductor" -> Install
     https://apps.apple.com/us/app/superconductor/id6749349238

macOS: Same App Store link (Designed for iPad, runs on M1+ Mac)
```

**Step 2: Create Account**
```
1. Open Superconductor app
2. Sign up with email or GitHub
3. Verify email
```

**Step 3: Connect API Keys**
```
1. Go to Settings
2. Add API keys for your providers:
   - Anthropic: sk-ant-api03-...
   - OpenAI: sk-proj-...
   - Amp: [your amp token]
   - Gemini: [your google key]
   - Opencode: [zen api key]
```

**Step 4: Connect Repository**
```
1. Authorize GitHub integration
2. Select repository to connect
3. Superconductor clones and analyzes project structure
4. Initial build runs to create state snapshot
```

**Step 5: Create First Ticket**
```
1. Tap [+] to create ticket
2. Write informal description:
   "Add a logout button to the navbar that clears session"
3. Select agents to spawn (Claude, Codex, etc.)
4. Tap "Launch"
```

### Checkpoint: Verify Setup

You should see:
- [ ] App installed and signed in
- [ ] At least one API key configured
- [ ] Repository connected (green checkmark)
- [ ] First ticket created
- [ ] Agent(s) spawning with progress indicator
- [ ] Push notifications enabled

---

## Configuration Options

### Agent Configuration

**Per-Ticket Agent Selection:**
```
Ticket: "Implement feature X"
Agents:
  [x] Claude Code (Opus)
  [x] Claude Code (Sonnet)
  [ ] OpenAI Codex
  [ ] Amp
  [x] Gemini

Parallel Count: 3
```

**API Key Priority:**
If you have multiple keys, set default provider order.

### Notification Settings

**Push Notification Types:**
- Agent started
- Agent needs input
- Agent completed
- Agent failed
- PR created

**Configure:**
```
Settings -> Notifications
  [x] Agent completion alerts
  [x] Input needed alerts
  [ ] Progress updates (can be noisy)
  [x] PR creation confirmation
```

### Workspace Settings (Teams)

**Role Permissions:**
| Role | Create Tickets | View Tickets | Launch Agents | Create PR |
|------|---------------|--------------|---------------|-----------|
| Admin | Yes | All | Yes | Yes |
| Developer | Yes | All | Yes | Yes |
| Collaborator | Yes | Assigned | Limited | No |
| Viewer | No | All | No | No |

### GitHub Integration Options

**Trigger Keywords:**
- `@superconductor` - Default mention
- `/superconductor` - Slash command
- `/sc` - Short alias

**Auto-Sync:**
- PR comments sync to Superconductor chat
- Superconductor responses appear in GitHub

---

## Mobile Patterns

### Pattern 1: Morning Kickoff

**Scenario:** Start agents before commute, review during lunch.

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

### Pattern 2: Hiking PR

From Sergey Karayev:
> "Launched agents, went on a hike, checked in on my phone, tweaked code, and opened a PR from the trail."

**Steps:**
1. Before hike: Create ticket, launch agents
2. During hike: Receive completion notification
3. Trail break: Review previews on phone
4. Still on trail: One-click PR
5. Back home: PR already reviewed by CI

### Pattern 3: Parallel Comparison

**Scenario:** You're unsure which approach is best for a feature.

```
Ticket: "Implement search with autocomplete"

Launch:
  Agent 1: Claude Opus (high reasoning)
  Agent 2: Claude Sonnet (faster)
  Agent 3: Codex (different perspective)

30-60 seconds later:
  Preview 1: Full-featured, elegant, $8 token cost
  Preview 2: Simpler, fast, $2 token cost
  Preview 3: Novel approach you didn't consider

Pick the one that balances quality/cost for your needs.
```

### Pattern 4: Mobile Hotfix

**Scenario:** Production bug reported, you're away from laptop.

```
1. Receive bug report via Slack
2. Open Superconductor on phone
3. Create ticket: "Fix: User session expires on refresh"
4. Launch single Claude Opus agent (high priority)
5. Agent investigates, proposes fix
6. Review diff on phone
7. Approve, one-click PR
8. PR merges (auto-merge if configured)
9. Fix deployed before you reach laptop
```

### Pattern 5: iPad Dashboard Mode

**Setup:** iPad in stand, running Superconductor alongside other work.

```
+---------------------------+---------------------------+
|  Superconductor           |  Slack / Email            |
|                           |                           |
|  Active Tickets: 3        |  Team messages            |
|  Agents Running: 7        |  Customer feedback        |
|  Previews Ready: 4        |                           |
|                           |                           |
|  [Ticket 1: ===75%]       |  [Respond to agent?]      |
|  [Ticket 2: Done!]        |  < Quick reply >          |
|  [Ticket 3: ===30%]       |                           |
+---------------------------+---------------------------+
```

---

## Integration Patterns

### With Ralph

**Mobile Ralph Monitoring**

Ralph Wiggum loops typically run on a server, continuously iterating. Superconductor can serve as your mobile monitoring layer:

**Pattern: Superconductor + SSH Ralph Hybrid**
```
Server (always running):
  while :; do cat PROMPT.md | claude-code ; done

Superconductor (mobile oversight):
  - Create tickets for new Ralph iterations
  - Monitor via GitHub integration
  - Receive notifications on Ralph milestones
  - Review and approve from phone
```

**Configuration Example:**

1. **On Server (Ralph loop):**
```bash
# ralph-loop.sh
while :; do
  cat PROMPT.md | claude-code
  # After each iteration, create GitHub comment for Superconductor
  gh issue comment 1 --body "@superconductor iteration complete, please verify"
done
```

2. **In Superconductor:**
- Connect to same repo
- Configure to respond to `@superconductor` mentions
- Get mobile notifications on each Ralph iteration
- Review from phone, provide feedback

**Use Case:**
- Ralph runs 24/7 on server
- You're mobile but want oversight
- Superconductor shows you each iteration's result
- Approve/redirect from phone

### With Gas Town

**Mobile Gas Town Oversight**

Gas Town (Steve Yegge's agent factory) typically involves multiple specialized agents:
- Mayor (orchestrator)
- Dogs (workers)
- Deacon (verifier)
- Refinery (improver)

**Pattern: Superconductor as Gas Town Dashboard**
```
Gas Town Agents (VM/Server):
  Mayor -> Assigns tasks
  Dogs -> Execute tasks
  Deacon -> Verifies outputs
  Refinery -> Improves quality

Superconductor (Mobile):
  - View each Dog's work as a preview
  - Compare Dog outputs
  - Approve Deacon verifications
  - Guide Refinery improvements
```

**Configuration Example:**

1. **Gas Town Webhook to Superconductor:**
```bash
# In Gas Town Deacon output script
curl -X POST "https://superconductor.com/api/notify" \
  -H "Authorization: Bearer $SC_TOKEN" \
  -d '{"event": "verification_complete", "agent": "dog-3", "status": "approved"}'
```

2. **Superconductor as Human-in-Loop:**
- Gas Town Dogs create branches
- Superconductor shows each Dog's preview
- Human reviews on phone
- Approve via Superconductor -> Dog continues

**Use Case:**
- Running factory-scale Gas Town
- Need human oversight without laptop
- Superconductor provides mobile control plane

### Combination Matrix

| Superconductor + | Use Case | Complexity | Value |
|------------------|----------|------------|-------|
| **Ralph** | Mobile Ralph monitoring | Medium | High |
| **Gas Town** | Mobile Gas Town oversight | Medium | High |
| **Any workflow** | Mobile access to agents | Low | High |
| **SSH/tmux setup** | Hybrid GUI + terminal | Medium | Medium |
| **Personal Panopticon** | 8-domain mobile management | High | Very High |
| **CC Mirror** | Multi-agent spawn from phone | Medium | High |
| **Codespaces** | Cloud IDE + mobile preview | Low | Medium |

### With Personal Panopticon

**Pattern: Domain Management from Phone**

Molly Cantillon's 8-domain pattern (code, docs, finances, etc.) can use Superconductor for each domain:

```
Superconductor Workspaces:
  - Workspace: Code Projects
    - Active tickets: 3
    - Agents: 5 running

  - Workspace: Documentation
    - Active tickets: 1
    - Agents: 2 running

  - Workspace: Blog Content
    - Active tickets: 2
    - Agents: 3 running

Mobile Overview:
  - Swipe between domains
  - Unified notification stream
  - Cross-domain status at a glance
```

### With CC Mirror

**Pattern: Spawn Multi-Agent from Mobile**

CC Mirror enables hidden multi-agent capabilities in Claude Code. Combined with Superconductor:

```
Superconductor Ticket:
  "Implement payment flow with CC Mirror parallel research"

Agent Configuration:
  Primary: Claude Opus (coordinator)

  The Claude Opus agent uses CC Mirror internally:
    - Spawns research agent for payment APIs
    - Spawns implementation agent for code
    - Spawns test agent for verification

Result:
  3+ effective agents from 1 Superconductor launch
  Previews show composite output
```

---

## Mental Models

### 1. The Hiring Manager Model

**Traditional:** You're a solo developer using one AI assistant.

**Superconductor:** You're a hiring manager with a pool of AI developers.

```
Old: "Hey Claude, build this feature" -> Wait -> Maybe it's good

New: "Hey candidates, show me your implementations"
     -> Compare portfolios (previews)
     -> Hire the best one (PR)
```

### 2. The Parallel Universe Model

Each agent explores a different "universe" of implementation:

```
Universe 1: Agent chose React Query for data fetching
Universe 2: Agent chose SWR for data fetching
Universe 3: Agent chose native fetch with custom caching

You peek into all universes, pick the best timeline.
```

### 3. The Movie Audition Model

**Casting Call:** "Show me how you'd implement dark mode"

**Auditions:**
- Actor 1 (Claude Opus): Method acting, deeply thought-through
- Actor 2 (Sonnet): Quick study, efficient performance
- Actor 3 (Codex): Different interpretation entirely

**You:** Pick the performance that fits your production.

### 4. The Investment Portfolio Model

**Diversification:**
- Don't put all tokens in one agent
- Spread across 3-4 attempts
- Reduce risk of bad implementation
- Cost: $15-20/feature vs $5 single-agent (but way less rework)

### 5. The Time Collapse Model

**Without Superconductor:**
```
Attempt 1: 30 min -> Bad
Attempt 2: 30 min -> Better
Attempt 3: 30 min -> Good
Total: 90 minutes serial
```

**With Superconductor:**
```
Attempt 1-2-3: 30 seconds parallel
Review: 2 minutes
Pick winner: 10 seconds
Total: ~3 minutes
```

You've collapsed 90 minutes into 3 minutes by parallelizing.

---

## Checkpoints

### Installation Checkpoint

After completing setup, verify:

- [ ] **App Running:** Superconductor opens without errors
- [ ] **Logged In:** Account shows your email/username
- [ ] **API Keys:** At least one provider shows green/connected
- [ ] **Repo Connected:** Your repository appears with green status
- [ ] **Initial Build:** First build completed (state snapshot saved)
- [ ] **Notifications:** Push notifications enabled in iOS Settings

**Expected State:**
```
Dashboard shows:
  Connected: github.com/your-username/your-repo
  Agents available: Claude Code, [others you configured]
  No active tickets yet
```

### First Ticket Checkpoint

After creating first ticket:

- [ ] **Ticket Created:** Appears in "Active Tickets" list
- [ ] **Agent Launched:** Progress indicator shows "Spawning..."
- [ ] **Environment Ready:** Status changes to "Running" (~30s)
- [ ] **Preview Available:** "View Preview" button enabled
- [ ] **Notification Received:** Push notification on completion

**Expected Preview:**
```
Live browser showing your app with agent's changes
Diff view available showing what was modified
Chat available for follow-up prompts
```

### Mobile Workflow Checkpoint

After first mobile session:

- [ ] **Swipe Works:** Can navigate between multiple previews
- [ ] **Chat Works:** Can send message to agent, receive response
- [ ] **PR Creation Works:** One-click creates GitHub PR
- [ ] **Notifications Work:** Receive alerts when away from app
- [ ] **Offline Resume:** Can reopen app and see previous state

---

## Troubleshooting

### Common Issues

**Issue: Agent Spawning Takes Forever**

*Symptoms:* Stuck on "Spawning..." for more than 2 minutes.

*Causes:*
- Large repository taking time to clone
- Heavy dependencies installing
- Build step failing silently

*Solutions:*
1. Check if repo is too large (>1GB can slow things)
2. Verify build commands work locally
3. Check API key is valid and has credits
4. Look at agent logs in web interface for details

**Issue: Preview Not Loading**

*Symptoms:* Preview button active but shows blank/error.

*Causes:*
- App not actually running
- Wrong port exposed
- Build failed but agent proceeded

*Solutions:*
1. Check agent logs for build errors
2. Verify your app's start command in config
3. Try refreshing preview (pull down)
4. Re-launch agent if persistent

**Issue: Push Notifications Not Arriving**

*Symptoms:* No alerts even when agent completes.

*Causes:*
- iOS notifications disabled for app
- Do Not Disturb mode
- App not backgrounded correctly

*Solutions:*
1. iOS Settings > Superconductor > Notifications > Enable All
2. Check Focus modes aren't blocking
3. Reinstall app if persistent

**Issue: GitHub PR Creation Fails**

*Symptoms:* "Create PR" button errors.

*Causes:*
- GitHub token expired
- Branch protection rules
- Merge conflicts

*Solutions:*
1. Re-authorize GitHub in Superconductor settings
2. Check branch protection allows app
3. Resolve conflicts in diff view first

**Issue: API Key Invalid**

*Symptoms:* "Invalid API key" when launching agent.

*Causes:*
- Key copied incorrectly (extra whitespace)
- Key expired or revoked
- Wrong key type (need API key, not session token)

*Solutions:*
1. Re-copy key carefully from provider dashboard
2. Verify key works via curl test
3. Check provider account for key status

### Error Glossary

| Error Message | Meaning | Fix |
|--------------|---------|-----|
| "Environment setup failed" | Clone or build problem | Check repo access, build commands |
| "Agent timeout" | Took too long, killed | Simpler task, or check for infinite loop |
| "API rate limited" | Hit provider limits | Wait and retry, or upgrade plan |
| "Preview unavailable" | App not serving | Verify dev server starts correctly |
| "Authentication failed" | Token issue | Re-authorize affected service |

---

## Cost Analysis

### Superconductor Platform Costs

**Pricing Model:** Bring Your Own API Keys (BYOK)
- No Superconductor subscription fee disclosed
- You pay your AI provider directly
- Platform may have usage tiers (check superconductor.com/pricing)

### AI Provider Costs

**Per-Feature Estimate (Karayev's data):**
- Single agent attempt: ~$5
- Recommended parallel (4 agents): ~$20
- Cost-optimized (2 Sonnet + 1 Opus): ~$12

**Provider Rate Card:**
| Provider | Model | Approx. $/Feature |
|----------|-------|-------------------|
| Anthropic | Claude Opus | $6-10 |
| Anthropic | Claude Sonnet | $2-4 |
| OpenAI | Codex | $3-5 |
| Amp | Standard | $2-4 |
| Gemini | Pro | $2-4 |

### Cost vs Value Analysis

**Without Parallel Agents:**
```
Attempt 1: $5 -> Bad output, redo
Attempt 2: $5 -> Better, but missing edge case
Attempt 3: $5 -> Good enough, ship it
Total: $15, 90 minutes elapsed
```

**With Parallel Agents:**
```
Attempts 1-4: $20 (parallel)
Pick best: 2 minutes elapsed
Total: $20, 3 minutes elapsed
```

**Verdict:** Pay ~$5 more, save 87 minutes. Worth it for most developers.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.5 | Jan 8, 2026 | Backend domain migration (superconductor.dev -> superconductor.com) |
| 1.0.4 | Nov 14, 2025 | Menu bug fixes |
| 1.0.3 | Nov 13, 2025 | Navigation improvements |
| 1.0.2 | Oct 31, 2025 | iPad multitasking, video playback in previews |
| 1.0.1 | Oct 23, 2025 | Ticket sharing functionality |
| 1.0.0 | Oct 2025 | Initial release |

---

## Tech Stack Support

**Confirmed Compatible:**
- Ruby on Rails
- React (Create React App, Next.js, Vite)
- Docker
- Python (Django, Flask, FastAPI)
- PostgreSQL
- Node.js

**Likely Compatible (cloud-native stacks):**
- Vue.js, Angular
- Go, Rust
- Any standard web framework

---

## Privacy & Data

**Data Collection (from App Store):**
- Contact info (linked to identity)
- Usage data (linked to identity)
- User content - photos/videos (linked to identity)
- Device identifiers (linked to identity)
- Crash/performance diagnostics (linked to identity)

**Purpose:** App functionality and analytics

**Your Code:**
- Cloned to Superconductor cloud environments
- Isolated per-agent sandbox
- Deleted after session (verify with their privacy policy)

**API Keys:**
- Stored encrypted
- Used only for agent execution
- Not shared externally

---

## Source Attribution

### Primary Sources

- **Sergey Karayev (@sergeykarayev)** - Creator, product announcements
  - X/Twitter: https://x.com/sergeykarayev
  - Website: https://sergeykarayev.com

- **Superconductor Official**
  - Website: https://superconductor.com
  - Blog: https://superconductor.com/blog/
  - App Store: https://apps.apple.com/us/app/superconductor/id6749349238

### Secondary Sources

- Simon Willison - Parallel coding agents lifestyle: https://simonwillison.net/2025/Oct/5/parallel-coding-agents/
- Community discussions on X/Twitter
- Mobile Claude Code patterns from @dabit3

### Reliability Assessment

| Aspect | Score | Notes |
|--------|-------|-------|
| Active Development | 5/5 | Regular updates (5 versions in 3 months) |
| Community Adoption | 3/5 | Growing, still early |
| Documentation | 3/5 | Blog posts, needs more technical docs |
| Stability | 4/5 | Production use by creator's team |
| Future Viability | 4/5 | Strong founder, clear vision |

**Overall: 4/5** - Solid product from experienced founder, actively developed, worth watching and using.

---

## Future Roadmap (Predicted)

Based on blog posts and creator statements:

1. **More Agent Providers** - Continuous expansion of supported agents
2. **Enhanced Workspaces** - Better team collaboration features
3. **Voice Integration** - Voice-to-ticket from mobile
4. **Apple Watch** - Status notifications on wrist
5. **Android App** - Currently iOS only, Android likely coming
6. **Self-Hosting Option** - For enterprise/privacy needs

---

## Tags

`#mobility` `#ios` `#superconductor` `#parallel-agents` `#multi-agent` `#mobile-orchestration` `#sergey-karayev` `#gui` `#preview` `#github-integration` `#byok` `#volition`

---

## See Also

- [001-mobile-claude-code-dabit3.md](/extractions/mobility/001-mobile-claude-code-dabit3.md) - SSH/terminal approach (complementary)
- [research-mobile-workflows-expanded.md](/extractions/mobility/research-mobile-workflows-expanded.md) - Full mobile ecosystem
- [synthesis/mastery-multi-agent.md](/synthesis/mastery-multi-agent.md) - Multi-agent patterns
- [extractions/orchestration/009-gas-town-steve-yegge.md](/extractions/orchestration/009-gas-town-steve-yegge.md) - Gas Town pattern
- [synthesis/mastery-ralph-complete.md](/synthesis/mastery-ralph-complete.md) - Ralph pattern
