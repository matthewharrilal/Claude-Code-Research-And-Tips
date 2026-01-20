# Kimaki Deep Extraction: Discord Interface for AI Coding Agents

**Source:** https://github.com/remorses/kimaki
**Author:** remorses (Tommy Morello)
**Version Analyzed:** 0.4.37
**Extraction Date:** 2026-01-19
**Category:** Infrastructure / Discord Integration
**Reliability:** HIGH (active development, well-documented, production-ready)

---

## You Are Here

**Context Orientation:**

You're reading a deep extraction of **Kimaki**, a Discord bot that creates a chat interface for AI coding agents. Think of it as "Iron Man's Jarvis for coding agents, inside Discord."

**Where This Fits:**
```
Claude Code Ecosystem
├── Core Tools
│   ├── Claude Code CLI (primary interface)
│   ├── Claude Code SDK (programmatic access)
│   └── MCP (tool extension)
├── Orchestration Patterns
│   ├── Ralph Wiggum Loop (continuous iteration)
│   ├── Gas Town (agent factory)
│   └── CC Mirror (multi-agent enablement)
└── INFRASTRUCTURE INTERFACES  ← You are here
    ├── Terminal (default)
    ├── Web UIs (various)
    └── **Kimaki (Discord)** ← This extraction
```

**Prerequisites:**
- Understanding of Discord bots and channels
- Familiarity with AI coding agents (Claude Code, OpenCode)
- Basic understanding of orchestration patterns (helpful but not required)

**What You'll Learn:**
1. How Kimaki bridges Discord and coding agents
2. Architecture for one-bot-per-machine design
3. Voice channel real-time conversation capabilities
4. Integration patterns with Ralph, Gas Town, and other workflows

---

## What This Is

Kimaki is a Discord bot that connects chat messages to AI coding agents running on your local machine. When you send a message in a linked Discord channel, an AI agent can read/edit files, execute terminal commands, and search your codebase.

**Core Value Proposition:**
- **Chat-native coding**: Use Discord's familiar interface for AI-assisted development
- **Voice support**: Real-time voice conversations with your coding agent
- **Team collaboration**: Multiple developers can interact with the same project via Discord
- **Remote access**: Control your coding agent from any device with Discord
- **Session continuity**: Resume, fork, and share sessions across conversations

**Key Tagline:** *"Control opencode agents inside Discord. Each opencode project is a Discord channel. Start sessions creating threads. Supports voice channels."*

---

## Why It Matters

### The Chat Interface Gap

Most AI coding tools operate through:
1. **Terminal** - Fast but requires shell access
2. **IDE extensions** - Powerful but locked to desktop
3. **Web interfaces** - Accessible but often disconnected from local filesystem

Kimaki fills a crucial gap: **mobile-first, team-collaborative, always-accessible AI coding via Discord**.

### Use Cases Unlocked

| Scenario | Traditional | With Kimaki |
|----------|-------------|-------------|
| Quick fix from phone | Not possible | Message channel, agent fixes code |
| Team code review | Share screen, wait for response | Tag agent in thread, get analysis |
| Background tasks | Stay at terminal | Start task, check Discord later |
| Voice coding | Limited dictation | Real-time conversation with agent |
| CI/CD integration | Webhooks to monitoring | Kimaki send from GitHub Actions |

### The "Jarvis for Coding" Vision

Kimaki embodies the vision of having an always-available AI assistant that:
- Lives in a communication platform you already use
- Responds to natural language commands
- Can be reached from anywhere (phone, tablet, another computer)
- Supports voice interaction for hands-free coding

---

## Architecture Deep Dive

### One Bot Per Machine

```
┌─────────────────────────────────────────────────────────────┐
│                     Discord Server                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ #project-a   │  │ #project-b   │  │ #project-c   │       │
│  │ (Bot 1)      │  │ (Bot 1)      │  │ (Bot 2)      │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
└─────────┼─────────────────┼─────────────────┼───────────────┘
          │                 │                 │
          ▼                 ▼                 ▼
    ┌─────────────────────────────┐    ┌─────────────────┐
    │       Machine 1             │    │    Machine 2    │
    │  ┌─────────┐ ┌─────────┐    │    │  ┌─────────┐    │
    │  │OpenCode │ │OpenCode │    │    │  │OpenCode │    │
    │  │Server A │ │Server B │    │    │  │Server C │    │
    │  └─────────┘ └─────────┘    │    │  └─────────┘    │
    │       Kimaki Bot 1          │    │  Kimaki Bot 2   │
    └─────────────────────────────┘    └─────────────────┘
```

**Key Principles:**
- Each Kimaki bot instance connects to exactly one machine
- Multiple channels can map to different project directories on that machine
- For multiple machines, run separate bot instances with different tokens
- Use `--data-dir` for isolated configurations on the same machine

### Data Flow Architecture

```
User Message → Discord API → Kimaki Bot → OpenCode Server → AI Agent
      ↑                                           │
      │                                           │
      └─────── Formatted Response ←───────────────┘
```

**Message Processing Pipeline:**
1. User sends message/attachment/voice in Discord channel
2. Kimaki receives via Discord.js event handlers
3. Channel-to-directory mapping retrieved from SQLite database
4. OpenCode server spawned or retrieved for that directory
5. Session created/resumed in thread
6. AI agent executes operations
7. Response streamed back with formatting (tool calls, file changes, etc.)
8. Discord message updated with results

### Database Schema

```sql
-- Core tables (7 total)
thread_sessions    -- Thread ID → Session ID mapping
part_messages      -- Message tracking with timestamps
bot_tokens         -- App ID and auth tokens
bot_api_keys       -- API credentials (Gemini, XAI)
channel_directories -- Channel → Filesystem path mapping
channel_models     -- Per-channel AI model preferences
session_models     -- Per-session model preferences
channel_agents     -- Per-channel agent preferences
session_agents     -- Per-session agent preferences
```

**Storage Location:** `~/.kimaki/discord-sessions.db` (configurable via `--data-dir`)

### Voice Processing Pipeline

```
Discord Voice (48kHz Stereo)
         │
         ▼
    Opus Decoder
         │
         ▼
    Downsampler (48kHz → 16kHz)
         │
         ▼
    Mono Conversion
         │
         ▼
    100ms Frame Chunking (3,200 samples)
         │
         ▼
    Base64 Encoding
         │
         ▼
    GenAI Worker (Gemini)
         │
         ▼
    AI Response → Discord TTS/Text
```

---

## Key Features

### 1. Text & File Interactions

Send messages in linked channels to trigger AI sessions:

```
User: Can you add error handling to the login function?

🤖 Session started in thread: "Add error handling to login"
┣ Reading src/auth/login.ts
◼︎ src/auth/login.ts (+15-3)
⬥ Added try-catch blocks around authentication calls...
```

**File Attachments:**
- Text files become inline context for the AI
- Images analyzed by multimodal models
- PDFs processed for content extraction

### 2. Voice Channel Support

Join a voice channel and speak naturally:

```
You (voice): "Hey, can you refactor the user service to use dependency injection?"

AI (voice): "Sure, I'll update the UserService class to accept dependencies
             through constructor injection. Let me make those changes now..."
```

**Voice Features:**
- Discord voice messages transcribed via Gemini API
- Voice channels enable real-time two-way conversation
- Audio processing handles silence detection and turn-taking

### 3. Session Management

**Commands:**
- `/session` - View current session details
- `/resume` - Continue from a previous session (with autocomplete)
- `/fork` - Branch from a specific point in conversation history
- `/share` - Generate public URL to share session
- `/abort` or `/stop` - Terminate running session

**Session Continuity:**
```
User: /resume
[Dropdown: Last 20 sessions]
> "Add authentication middleware" (2 hours ago)
  "Fix database connection" (yesterday)
  "Refactor API routes" (2 days ago)

User selects session → Context restored → Continue conversation
```

### 4. Message Queue

Chain follow-up tasks without waiting:

```
User: First, add input validation
User: /queue Then update the tests
User: /queue Finally, update the README

[Agent processes sequentially]
```

**Queue Commands:**
- `/queue <message>` - Add to queue
- `/clear-queue` - Remove pending items

### 5. Model Selection

Switch models per channel or session:

```
User: /model
[Provider dropdown: anthropic, openai, google]
> anthropic

[Model dropdown]
> claude-sonnet-4-20250514

✅ Model set to anthropic/claude-sonnet-4-20250514
```

**Model Format:** `provider/model-name` (e.g., `anthropic/claude-opus-4-20250514`)

### 6. Agent Selection

Choose specialized agents for different tasks:

```
User: /agent
[Dropdown: Available agents]
> code-review
  security-audit
  documentation
  general

✅ Agent set to code-review for this session
```

### 7. CI/CD Integration

Trigger sessions programmatically:

```bash
# From GitHub Actions
KIMAKI_BOT_TOKEN=xxx npx kimaki send \
  --channel 1234567890 \
  --prompt "Tests failed on main. Please investigate and fix."
```

**Notification Mode:**
```bash
# Create notification thread without AI session
npx kimaki send \
  --channel 1234567890 \
  --prompt "Build completed successfully" \
  --notify-only
```

---

## Installation & Setup

### Quick Start

```bash
# Run interactive setup
npx -y kimaki@latest
```

The wizard guides you through:
1. Discord bot creation and token entry
2. Required permissions/intents configuration
3. Project directory selection
4. Optional Gemini API key for voice features

### Manual Setup Steps

**1. Create Discord Bot:**
- Go to https://discord.com/developers/applications
- Create New Application
- Navigate to Bot → Create Bot
- Copy Token (keep secure!)

**2. Enable Required Intents:**
- Server Members Intent: ON
- Message Content Intent: ON

**3. Generate Invite URL:**
- OAuth2 → URL Generator
- Scopes: `bot`, `applications.commands`
- Permissions: Send Messages, Create Threads, Read Message History, Connect, Speak

**4. Run Kimaki:**
```bash
npx kimaki@latest
# Enter App ID and Token when prompted
# Select projects to create channels for
```

### Multi-Instance Setup

Run separate instances for different teams or isolated projects:

```bash
# Team A
npx kimaki --data-dir ~/.kimaki-team-a

# Team B (different bot token)
npx kimaki --data-dir ~/.kimaki-team-b
```

---

## Configuration Options

### CLI Options

| Option | Description | Default |
|--------|-------------|---------|
| `--restart` | Re-enter credentials | false |
| `--add-channels` | Select projects before starting | false |
| `--data-dir <path>` | Config/database location | `~/.kimaki` |
| `--install-url` | Display bot invite URL | - |

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `KIMAKI_BOT_TOKEN` | Bot token for programmatic access |
| `DEBUG` | Enable debug logging |

### Project Configuration (opencode.json)

```json
{
  "model": "anthropic/claude-sonnet-4-20250514"
}
```

### Permissions

Only these users can trigger sessions:
- Server owners
- Administrators
- Users with "Manage Server" permission
- Users with "Kimaki" role

---

## Usage Patterns

### Pattern 1: Mobile-First Development

Use Discord mobile app for quick fixes:

```
[Phone notification: Test failure in CI]

Opens Discord → #my-project channel

You: The login test is failing because we changed the API response format.
     Can you update the test expectations?

[AI makes changes]

You: /queue Also run the tests to verify

[AI runs tests, reports success]
```

### Pattern 2: Team Collaboration

Multiple developers working with shared context:

```
#backend-api channel

Alice: @AI Can you review the PR changes for security issues?
[AI analyzes diff, provides security review]

Bob: Good catches. @AI Can you implement the suggested fixes?
[AI makes changes]

Alice: @AI Run the security linter
[AI runs linter, reports results]
```

### Pattern 3: Voice-Driven Development

Hands-free coding during commute or while sketching:

```
[In voice channel]

You: "I'm thinking about the authentication flow.
      Can you walk me through how the current implementation works?"

AI: "Sure. The current auth flow starts in the AuthController..."
    [Explains codebase]

You: "What if we added JWT refresh tokens?"

AI: "That would require changes to three main areas..."
    [Discusses implications]

You: "Let's do it. Start with the token service."

AI: "Implementing refresh token support in TokenService now..."
    [Makes changes]
```

### Pattern 4: Async Task Monitoring

Start long tasks and check back later:

```
You: Migrate the database schema and run all migrations.
     This might take a while.

[Close Discord, do other work]

[Later, check thread]

AI: Migration complete. Results:
    - 15 migrations applied
    - 3 tables added
    - 2 columns modified
    - All tests passing
```

---

## Integration Patterns

### With Ralph

Kimaki provides a Discord interface for Ralph Wiggum Loop workflows, enabling remote monitoring and control.

**Use Case:** Monitor and interact with continuous Ralph iterations through Discord.

**Architecture:**
```
┌─────────────────────────────────────────────────────────┐
│                    Your Machine                          │
│  ┌─────────────────┐      ┌─────────────────────────┐   │
│  │   Ralph Loop    │      │      Kimaki Bot         │   │
│  │                 │      │                         │   │
│  │ while :; do     │◄────►│  Discord ◄──► OpenCode  │   │
│  │   cat PROMPT.md │      │                         │   │
│  │   | claude      │      │  Receives messages,     │   │
│  │ done            │      │  sends notifications    │   │
│  └─────────────────┘      └─────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
           │
           ▼
   Discord: #ralph-project
   - See iteration progress
   - Interrupt with new instructions
   - Fork from previous iterations
```

**Configuration Example:**

1. Set up Ralph with PROMPT.md pointing to your task
2. Run Kimaki with the project directory as a channel
3. Monitor progress via Discord
4. Send messages to adjust direction

```bash
# Terminal 1: Ralph loop
cd /path/to/project
while :; do cat PROMPT.md | claude-code; done

# Terminal 2: Kimaki (linked to same project)
npx kimaki
# Select /path/to/project as a channel
```

**Discord Interaction:**
```
#ralph-project channel

[Ralph iteration 5 completes]
AI: Implemented user authentication. Tests passing.

You: Good progress. Next iteration should focus on the admin panel.

[Message queued, picked up by Ralph's next cycle]
```

### With Gas Town

Kimaki enables Discord-based monitoring and interaction with Gas Town's agent factory architecture.

**Use Case:** Receive alerts from Mayor, monitor Dogs, interact with Refinery output.

**Architecture:**
```
┌──────────────────────────────────────────────────────────────┐
│                      Gas Town Factory                         │
│                                                               │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                   │
│  │  Mayor  │───►│  Dogs   │───►│Refinery │                   │
│  │(Control)│    │(Workers)│    │(Output) │                   │
│  └────┬────┘    └────┬────┘    └────┬────┘                   │
│       │              │              │                         │
│       └──────────────┼──────────────┘                         │
│                      │                                        │
│                      ▼                                        │
│              ┌───────────────┐                                │
│              │  Kimaki Bot   │                                │
│              │               │                                │
│              │  Notifications│                                │
│              │  Status updates│                               │
│              │  Commands     │                                │
│              └───────────────┘                                │
└──────────────────────────────────────────────────────────────┘
                       │
                       ▼
              Discord Channels:
              #gas-town-control (Mayor comms)
              #gas-town-workers (Dog status)
              #gas-town-output (Refinery results)
```

**Configuration Example:**

```bash
# Run Kimaki with Gas Town output directory
npx kimaki
# Add channel for Gas Town workspace

# In Gas Town's Deacon/Mayor, add notification hooks:
# After each Dog completion:
npx kimaki send \
  --channel $DISCORD_WORKERS_CHANNEL \
  --prompt "Dog completed: $TASK_NAME. Output: $OUTPUT_FILE" \
  --notify-only
```

**Discord Monitoring:**
```
#gas-town-workers

[Notification] Dog completed: API refactoring. Output: /tmp/dogs/api-v2
[Notification] Dog completed: Test generation. Output: /tmp/dogs/tests
[Notification] Dog failed: Database migration. Error: Schema conflict

You: @AI Investigate the database migration failure

[AI analyzes logs, suggests fix]
```

### Combination Matrix

| Kimaki + | Use Case | Complexity | Value |
|----------|----------|------------|-------|
| **Ralph** | Discord interface for continuous iteration loops | Medium | High |
| **Gas Town** | Discord monitoring for agent factory output | Medium | High |
| **CC Mirror** | Chat-triggered multi-agent orchestration | Medium-High | High |
| **Personal Panopticon** | Domain-specific agents via Discord channels | Medium | Very High |
| **MCP Tools** | Discord-triggered tool execution | Low | Medium |
| **CI/CD** | Build notifications and fix requests | Low | High |
| **Any workflow** | Chat interface for any Claude Code workflow | Low-Medium | High |

### Pattern: Discord as Unified Control Plane

```
Discord Server: "My Dev Operations"
├── #ralph-main-project     (Kimaki → Ralph loop)
├── #gas-town-control       (Kimaki → Gas Town Mayor)
├── #gas-town-alerts        (Notifications from Deacon)
├── #quick-tasks            (Kimaki → Ad-hoc requests)
├── #ci-cd-channel          (Build notifications)
└── Voice: dev-conversations (Voice coding)
```

**Benefits:**
- Single interface for all AI coding operations
- Mobile access to entire development infrastructure
- Team visibility into ongoing automated work
- Voice support for hands-free interaction

---

## Mental Models

### Model 1: Discord Channel = Project Directory

Each Discord channel is a window into a specific project on your machine. Messages in that channel execute against that project's codebase.

```
Mental mapping:
#frontend     → ~/projects/my-app/frontend/
#backend      → ~/projects/my-app/backend/
#infrastructure → ~/projects/my-app/infra/
```

### Model 2: Threads = Sessions

Discord threads map to coding sessions. Starting a conversation creates a thread, and the thread maintains context throughout the session.

```
Channel: #backend
├── Thread: "Add user authentication"
│   └── [Complete session context]
├── Thread: "Fix database connection issue"
│   └── [Complete session context]
└── Thread: "Refactor API routes"
    └── [Complete session context]
```

### Model 3: Bot Instance = Machine Access

One Kimaki bot instance = access to one machine. If you want to control multiple machines, you need multiple bot instances.

```
Bot Instance A → Laptop (local dev)
Bot Instance B → Server (staging env)
Bot Instance C → Workstation (heavy compute)
```

### Model 4: Voice = Real-Time Pair Programming

Voice channels create a live pair programming experience. You're talking to your AI collaborator in real-time, just like you would with a human colleague.

---

## Checkpoints

### Checkpoint 1: Bot Running

After setup, you should see:
```
✅ Connected to Discord as YourBotName#1234
✅ Registered 15 slash commands
✅ Watching 3 project channels
```

### Checkpoint 2: Channel Linked

When you add a project, the channel should show:
```xml
<kimaki>
  <directory>/path/to/your/project</directory>
</kimaki>
```
(This XML appears in the channel topic)

### Checkpoint 3: Session Working

When you send a message, you should see:
- Thread created with message as title
- Typing indicator appears
- AI response with tool calls (if applicable)
- Session status in thread

### Checkpoint 4: Voice Working (if enabled)

When you join a voice channel:
- Bot joins automatically (if you have admin/Kimaki role)
- Speaking triggers transcription
- AI responds via text (or voice if configured)

---

## Troubleshooting

### Bot Won't Start

<details>
<summary>Error: "Missing required intents"</summary>

**Cause:** Discord intents not enabled in developer portal.

**Fix:**
1. Go to https://discord.com/developers/applications
2. Select your bot → Bot settings
3. Enable "Server Members Intent"
4. Enable "Message Content Intent"
5. Restart Kimaki
</details>

<details>
<summary>Error: "Port already in use"</summary>

**Cause:** Another Kimaki instance running on same data directory.

**Fix:**
```bash
# Find existing process
ps aux | grep kimaki

# Kill it or use different data-dir
npx kimaki --data-dir ~/.kimaki-alt
```
</details>

<details>
<summary>Error: "OpenCode CLI not found"</summary>

**Cause:** OpenCode not installed or not in PATH.

**Fix:**
```bash
# Install OpenCode
npm install -g @opencode-ai/cli

# Or let Kimaki install it
# (It will prompt during setup)
```
</details>

### Messages Not Working

<details>
<summary>Bot doesn't respond to messages</summary>

**Causes:**
1. User lacks permission (not admin/owner/Kimaki role)
2. Channel not linked to project
3. Message Content Intent disabled

**Fixes:**
1. Assign "Kimaki" role to user
2. Run `npx kimaki --add-channels` and select the project
3. Enable Message Content Intent in Discord developer portal
</details>

<details>
<summary>Session times out</summary>

**Cause:** OpenCode server health check failing.

**Fix:**
```bash
# Check if OpenCode can start manually
cd /path/to/project
opencode serve --port 9999

# If it fails, check project configuration
cat opencode.json
```
</details>

### Voice Issues

<details>
<summary>Voice not transcribing</summary>

**Cause:** Gemini API key missing or invalid.

**Fix:**
1. Run `npx kimaki --restart`
2. Enter valid Gemini API key when prompted
3. Ensure Gemini API has audio transcription enabled
</details>

<details>
<summary>Bot won't join voice channel</summary>

**Cause:** Missing voice permissions or user not admin.

**Fix:**
1. Verify bot has Connect + Speak permissions
2. Ensure you have admin/Kimaki role
3. Check that bot isn't already in another voice channel
</details>

---

## Advanced Configuration

### Custom Data Directory Structure

```
~/.kimaki/
├── discord-sessions.db    # SQLite database
├── projects/              # Project state
└── [additional config]
```

### Programmatic Access

```typescript
import { Client } from '@opencode-ai/sdk';

// Create client for specific project
const client = new Client({
  baseUrl: `http://localhost:${port}`,
});

// Send message to session
await client.session.prompt({
  sessionId: 'xxx',
  message: 'Your prompt here',
});
```

### Custom Commands

Register project-specific commands via OpenCode configuration. Commands appear as Discord slash commands with `-cmd` suffix.

---

## Source Attribution

**Repository:** https://github.com/remorses/kimaki
**Author:** remorses (Tommy Morello)
**License:** MIT
**Dependencies:** Discord.js, @opencode-ai/sdk, Google GenAI, Vercel AI SDK

**Key Files Analyzed:**
- `discord/src/cli.ts` - CLI implementation
- `discord/src/session-handler.ts` - Session management
- `discord/src/voice-handler.ts` - Voice processing
- `discord/src/database.ts` - Data persistence
- `discord/src/interaction-handler.ts` - Command handling
- `discord/src/message-formatting.ts` - Response formatting
- `discord/src/tools.ts` - Available tools
- `AGENTS.md` - Development guidelines

**Extraction Quality:** HIGH
**Completeness:** Comprehensive (architecture, features, integration patterns, troubleshooting)
**Last Verified:** 2026-01-19

---

## Related Extractions

- `extractions/orchestration/005-ralph-wiggum-loop-pocock.md` - Ralph pattern details
- `extractions/orchestration/008-gas-town-yegge.md` - Gas Town architecture
- `synthesis/mastery-ralph-complete.md` - Complete Ralph reference
- `synthesis/architecture-complexity-ladder.md` - Where Kimaki fits in complexity spectrum
