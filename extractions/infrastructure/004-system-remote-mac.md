# SYSTEM: Remote Mac Control for AI Agents

## You Are Here

**Context:** You're exploring infrastructure patterns for AI agent systems. SYSTEM represents a novel approach: separating the AI "brain" (Claude running on Cloudflare) from the execution "body" (your Mac). This is the **Brain/Tunnel/Body** architecture pattern.

**Why This Matters Now:**
- Remote execution enables Claude to control your Mac from anywhere
- The tunnel pattern solves the "how do I give AI access to my computer safely" problem
- This architecture directly enables **Remote Ralph**, **Distributed Gas Town**, and **Multi-Mac Orchestration**

**Prerequisites:**
- Understanding of Claude Code basics
- Familiarity with MCP (Model Context Protocol) concepts
- Basic knowledge of Cloudflare Workers (helpful but not required)

**What You'll Learn:**
- The Brain/Tunnel/Body separation pattern
- How to safely expose Mac capabilities to AI
- Security implications and mitigations
- Integration patterns with Ralph, Gas Town, and CC-Mirror

---

## What This Is

**SYSTEM** is a self-hosted AI assistant that enables remote control of macOS through natural language commands. Created by [ygwyg](https://github.com/ygwyg/system), it's an MIT-licensed project with 285+ GitHub stars.

**Core Capability:** Tell Claude "play some jazz music" from your phone, and your home Mac starts playing Apple Music.

### Key Features

| Feature | Description |
|---------|-------------|
| **Music Control** | Play, pause, skip, search Apple Music via natural language |
| **Calendar/Reminders** | Query events, create reminders, manage scheduling |
| **Notes** | Create and search Apple Notes |
| **System Control** | Volume, display settings, notifications, clipboard |
| **File Management** | Browse, open, organize files via Finder |
| **Apple Shortcuts** | Execute any Shortcut you've created |
| **Raycast Extensions** | Dynamically discover and invoke Raycast commands |
| **Shell Commands** | Execute allowlisted shell commands safely |
| **Screenshots** | Capture and analyze screen content with Claude Vision |

### What Makes It Different

Unlike local-only solutions, SYSTEM:
1. **Runs anywhere** - Access your Mac from any device with internet
2. **Persists state** - Conversations, preferences, and schedules survive sessions
3. **Schedules actions** - "Remind me in 30 minutes" actually works
4. **Self-hosted** - Your infrastructure, your data, your control

---

## Why It Matters: The Brain/Tunnel/Body Architecture

SYSTEM introduces a **distributed execution model** that solves fundamental problems in AI agent design.

### The Problem

Traditional AI agents face a dilemma:
- **Local execution**: Fast and secure, but tied to one machine
- **Cloud execution**: Accessible anywhere, but can't touch your local resources

### The Solution: Three-Layer Separation

```
┌─────────────────────────────────────────────────────────────────┐
│                         BRAIN                                    │
│                  (Cloudflare Worker)                            │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Claude AI  │  │  Scheduling  │  │  State Management    │  │
│  │  Integration │  │    Engine    │  │  (Durable Objects)   │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
│                        ↓  HTTPS  ↓                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Bearer Token Auth
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        TUNNEL                                    │
│                    (HTTP Bridge)                                │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Auth &     │  │    Rate      │  │     Request          │  │
│  │ Validation   │  │   Limiting   │  │     Routing          │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
│                        ↓  Local  ↓                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Tool Execution
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         BODY                                     │
│                    (macOS System)                               │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  AppleScript │  │    Shell     │  │     Raycast          │  │
│  │   Executor   │  │   Commands   │  │    Extensions        │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Why This Architecture Matters

**1. Security Through Separation**
- The Brain (Claude) never has direct system access
- All commands flow through authenticated, rate-limited, allowlisted channels
- The Tunnel validates every request before execution

**2. Scalability**
- One Brain can control multiple Bodies (Macs)
- Multiple Brains can share one Body (multi-user scenarios)
- The Tunnel handles routing and authorization

**3. Reliability**
- Brain failure doesn't affect Body operation
- Body restart doesn't lose Brain state
- Tunnel can buffer during disconnections

**4. Flexibility**
- Replace Brain with different AI providers
- Add new Body capabilities without Brain changes
- Tunnel can transform protocols between layers

---

## Architecture Deep Dive

### Component 1: The Agent (Brain)

**Technology:** Cloudflare Workers with Durable Objects

The Agent handles all AI reasoning and state management:

```typescript
// Two-model strategy for efficiency
const INTENT_CLASSIFIER = "claude-3-5-haiku-20241022";   // Fast
const REASONING_ENGINE = "claude-3-5-sonnet-20241022";   // Smart

// Classification categories
const INTENT_CATEGORIES = [
  "messages_read", "messages_send", "music", "system",
  "calendar", "reminders", "files", "shortcuts",
  "browser", "raycast", "notes", "other"
];
```

**Key Capabilities:**

1. **Intent Classification**
   - Fast Haiku model categorizes user requests
   - Reduces tool set sent to reasoning model
   - Example: "play some music" → `music` category → only music tools exposed

2. **Multi-Conversation State**
   ```typescript
   interface AgentState {
     conversations: Map<string, {
       messages: Message[];
       pendingActions: PendingAction[];
     }>;
     schedules: Schedule[];
     preferences: UserPreferences;
   }
   ```

3. **Scheduling Engine**
   - Parses natural language: "in 30 minutes", "every day at 9am"
   - Supports cron syntax: `0 9 * * 1-5`
   - Actions execute asynchronously, results broadcast via WebSocket

4. **Human-in-the-Loop**
   - Sensitive actions (sending messages) require confirmation
   - Pending actions stored until user approves
   - Regex-based approval: `/^(yes|yeah|yep|sure|ok|do it)/i`

### Component 2: The Bridge (Tunnel)

**Technology:** Express.js HTTP server running locally

The Bridge translates AI requests into system actions:

```typescript
// Security middleware stack
app.use(json({ limit: '100kb' }));           // Payload limits
app.use(securityHeaders());                   // XSS, clickjacking protection
app.use(rateLimiter({ max: 60, window: 60 })); // 60 req/min
app.use(authenticate(BRIDGE_AUTH_TOKEN));     // Token validation
```

**Endpoints:**

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/health` | GET | No | Connectivity check |
| `/tools` | GET | Yes | List available tools with schemas |
| `/execute` | POST | Yes | Run single tool with arguments |
| `/batch` | POST | Yes | Execute up to 10 tools sequentially |
| `/logs` | GET | Yes | Retrieve execution audit trail |

**Request Flow:**
```
POST /execute
{
  "tool": "music_play",
  "args": { "query": "jazz" }
}

Response:
{
  "success": true,
  "result": "Now playing: Kind of Blue by Miles Davis"
}
```

### Component 3: The Tools (Body)

**Technology:** TypeScript modules wrapping AppleScript, shell commands, and URL schemes

SYSTEM provides 60+ tools organized by domain:

**Core Tools:**
```typescript
// AppleScript execution with safety
const runAppleScript = async (script: string): Promise<string> => {
  // Block dangerous patterns
  const BLOCKED_PATTERNS = [
    /do shell script/i,      // Shell escape
    /keychain/i,             // Credential access
    /delete every/i,         // Mass deletion
    /rm -rf/i                // Recursive delete
  ];

  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(script)) {
      throw new Error("Script contains blocked pattern");
    }
  }

  return execCommand('osascript', ['-e', script]);
};
```

**Music Control:**
```typescript
const music_play = {
  name: "music_play",
  description: "Play music in Apple Music, optionally searching for a track",
  inputSchema: {
    query: { type: "string", description: "Optional search query" }
  },
  handler: async ({ query }) => {
    if (query) {
      const escaped = query.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return runAppleScript(`
        tell application "Music"
          activate
          play (search playlist "Library" for "${escaped}")
        end tell
      `);
    }
    return runAppleScript('tell application "Music" to play');
  }
};
```

**Shortcuts Integration:**
```typescript
const shortcut_run = {
  name: "shortcut_run",
  description: "Execute an Apple Shortcut by name",
  inputSchema: {
    name: { type: "string", required: true },
    input: { type: "string", description: "Optional input text" }
  },
  handler: async ({ name, input }) => {
    const args = ['run', name];
    if (input) args.push('--input-text', input);
    return execCommand('shortcuts', args);
  }
};
```

**Dynamic Raycast Integration:**
```typescript
// Discover and generate tools from Raycast extensions
const generateExtensionTools = (config: BridgeConfig) => {
  return config.raycast.extensions.flatMap(ext =>
    ext.commands.map(cmd => ({
      name: `raycast_${ext.name}_${cmd.name}`,
      description: cmd.description,
      inputSchema: cmd.arguments,
      handler: async (args) => {
        const url = `raycast://extensions/${ext.owner}/${ext.name}/${cmd.name}`;
        return open(url + '?' + new URLSearchParams(args));
      }
    }))
  );
};
```

---

## Installation and Setup

### Option 1: Desktop App (Recommended)

1. **Download** SYSTEM.app from [GitHub Releases](https://github.com/ygwyg/system/releases)

2. **Move** to Applications folder

3. **Launch** and follow guided setup:
   - Enter Anthropic API key
   - Configure permissions (Accessibility, Screen Recording, Automation)
   - The app handles Bridge deployment automatically

4. **Access** via menu bar icon or web interface

### Option 2: CLI Installation

**Prerequisites:**
- macOS
- Node.js 18+
- Anthropic API key

**Step 1: Clone and Install**
```bash
git clone https://github.com/ygwyg/system.git
cd system
npm install
```

**Step 2: Run Setup Wizard**
```bash
npm run setup
```

This interactive wizard configures:
- Anthropic API credentials
- Bridge authentication token
- Cloudflare Worker deployment
- macOS permissions

**Step 3: Start Everything**
```bash
npm start
```

### Manual Component Setup

**Bridge Only:**
```bash
cd src/bridge
npm install
cp .env.example .env
# Edit .env with your BRIDGE_AUTH_TOKEN
npm start
# Bridge runs at http://localhost:3456
```

**Cloudflare Agent Only:**
```bash
cd cloudflare-agent
npm install
cp .dev.vars.example .dev.vars
# Edit .dev.vars with credentials

# Local development
npm run dev
# Access at http://localhost:8787

# Production deployment
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put BRIDGE_URL
npx wrangler secret put BRIDGE_AUTH_TOKEN
npx wrangler secret put API_SECRET
npm run deploy
# Access at https://system-agent.<subdomain>.workers.dev
```

---

## Configuration Options

### Environment Variables

**Bridge Configuration:**
```bash
# .env for src/bridge
BRIDGE_AUTH_TOKEN=your-secure-token-here
HOST=127.0.0.1           # Bind address (localhost only by default)
PORT=3456                # Server port
LOG_LEVEL=info           # debug, info, warn, error
```

**Agent Configuration:**
```bash
# .dev.vars for cloudflare-agent
ANTHROPIC_API_KEY=sk-ant-...
BRIDGE_URL=http://localhost:3456  # Or cloudflared tunnel URL
BRIDGE_AUTH_TOKEN=your-secure-token-here
API_SECRET=your-web-ui-password

# Optional model overrides
MODEL_FAST=claude-3-5-haiku-20241022
MODEL_SMART=claude-3-5-sonnet-20241022
```

### Bridge Configuration File

`bridge.config.json` for Raycast extensions:
```json
{
  "raycast": {
    "extensions": [
      {
        "owner": "raycast",
        "name": "spotify-player",
        "commands": [
          {
            "name": "play",
            "description": "Play a track on Spotify",
            "arguments": [
              { "name": "query", "type": "string" }
            ]
          }
        ]
      }
    ]
  },
  "shell": {
    "allowlist": [
      "ls",
      "pwd",
      "date",
      "whoami"
    ]
  }
}
```

### macOS Permissions

SYSTEM requires three permissions:

1. **Accessibility**
   - Purpose: Keyboard/mouse control, window management
   - Grant: System Preferences → Security & Privacy → Accessibility

2. **Screen Recording**
   - Purpose: Screenshot capture for Vision analysis
   - Grant: System Preferences → Security & Privacy → Screen Recording

3. **Automation**
   - Purpose: Control third-party apps (Finder, Safari, Notes, Calendar)
   - Grant: Prompted on first use, or System Preferences → Security & Privacy → Automation

---

## Security Considerations

### Threat Model

**What SYSTEM Protects Against:**

| Threat | Mitigation |
|--------|------------|
| Unauthorized access | Bearer token authentication, timing-safe comparison |
| Injection attacks | AppleScript pattern blocking, shell command allowlisting |
| Rate-based attacks | 60 req/min limit with IP tracking |
| Data exfiltration | Localhost-only binding by default |
| Session hijacking | Automatic token generation, no session cookies |
| Credential logging | Sensitive parameters sanitized before audit log |

**What SYSTEM Does NOT Protect Against:**

| Threat | Why | Mitigation |
|--------|-----|------------|
| Compromised API key | Attacker gains full access | Rotate keys regularly, use Cloudflare Access |
| Malicious prompts | Claude might be tricked | Human-in-the-loop for sensitive actions |
| Physical access | Local attacker can bypass | Standard macOS security practices |
| Network sniffing | HTTPS protects transit | Ensure BRIDGE_URL uses HTTPS in production |

### Security Layers

**Layer 1: Authentication**
```typescript
// Constant-time comparison prevents timing attacks
const authenticate = (token: string) => (req, res, next) => {
  const provided = req.headers.authorization?.replace('Bearer ', '');
  if (!provided || !timingSafeEqual(Buffer.from(provided), Buffer.from(token))) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
```

**Layer 2: Command Filtering**
```typescript
// Shell commands must be in allowlist
const SAFE_SHELL_COMMANDS = ['ls', 'pwd', 'date', 'whoami', 'echo'];

const shell_execute = async ({ command, args }) => {
  if (!SAFE_SHELL_COMMANDS.includes(command)) {
    throw new Error(`Shell command blocked: ${command}`);
  }
  return execCommand(command, args);
};
```

**Layer 3: AppleScript Sanitization**
```typescript
// Block dangerous patterns before execution
const BLOCKED_PATTERNS = [
  /do shell script/i,        // Shell escape attempt
  /keychain/i,               // Credential access
  /delete every/i,           // Mass deletion
  /system events.*keystroke/i, // Keystroke injection
];
```

**Layer 4: Rate Limiting**
```typescript
const rateLimiter = rateLimit({
  windowMs: 60 * 1000,  // 1 minute
  max: 60,              // 60 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});
```

### Hardening Recommendations

**For Production Use:**

1. **Use Cloudflare Tunnel** instead of port forwarding
   ```bash
   cloudflared tunnel --url http://localhost:3456
   ```

2. **Enable Cloudflare Access** for Zero Trust authentication
   - Add SSO/2FA before requests reach the Worker
   - Configure allowed email domains

3. **Rotate Tokens Regularly**
   ```bash
   # Generate new token
   openssl rand -hex 32

   # Update both Agent and Bridge
   npx wrangler secret put BRIDGE_AUTH_TOKEN
   ```

4. **Monitor Audit Logs**
   ```bash
   curl -H "Authorization: Bearer $TOKEN" http://localhost:3456/logs
   ```

5. **Restrict Shell Allowlist**
   - Default: `['ls', 'pwd', 'date', 'whoami']`
   - Add only what you need
   - Never add: `rm`, `mv`, `curl`, `wget`, `eval`

---

## Integration Patterns

### With Ralph

**Use Case:** Run Ralph loops on a remote Mac while monitoring from anywhere.

**Why This Matters:**
- Keep your development machine free while Ralph runs heavy tasks
- Monitor progress from your phone
- Multiple Macs can run parallel Ralph instances

**Architecture:**
```
┌─────────────────────┐    ┌─────────────────────┐
│   Your Laptop       │    │   Build Mac         │
│   (Monitoring)      │    │   (Ralph Execution) │
│                     │    │                     │
│  Browser/Phone ─────┼────┼─► SYSTEM Bridge     │
│                     │    │       │             │
│                     │    │       ▼             │
│                     │    │  PROMPT.md + Claude │
│                     │    │       │             │
│                     │    │       ▼             │
│                     │    │   while :; do ...   │
└─────────────────────┘    └─────────────────────┘
```

**Configuration Example:**

1. **On Build Mac - Create Ralph Shortcut:**
   ```
   # In Apple Shortcuts, create "Start Ralph":
   # Run Shell Script:
   cd /path/to/project && while :; do cat PROMPT.md | claude --print ; done
   ```

2. **On Build Mac - Start SYSTEM Bridge:**
   ```bash
   cd /path/to/system/src/bridge
   npm start
   ```

3. **From Anywhere - Trigger via SYSTEM:**
   ```
   "Run the Start Ralph shortcut"
   ```

4. **Monitor Progress:**
   ```
   "Take a screenshot of the terminal"
   ```

**Advanced: Ralph with Scheduled Checkpoints**
```
"Every 30 minutes, take a screenshot and describe what Ralph is working on"
```

### With Gas Town

**Use Case:** Distributed agent factory with Brain on server, Bodies on multiple Macs.

**Why This Matters:**
- Gas Town's Mayor can orchestrate across machines
- Each Mac becomes a specialized "Department" (Design Mac, Dev Mac, etc.)
- True distributed computing for complex projects

**Architecture:**
```
┌──────────────────────────────────────────────────────────────────┐
│                    CLOUDFLARE WORKERS                            │
│                                                                  │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐    │
│  │   Mayor   │  │  Deacon   │  │   Dogs    │  │  Refinery │    │
│  │  (Router) │  │(Dispatcher)│  │(Executors)│  │(Validator)│    │
│  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘    │
│        │              │              │              │            │
│        └──────────────┴──────────────┴──────────────┘            │
│                              │                                   │
└──────────────────────────────┼───────────────────────────────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
     ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
     │   Dev Mac      │ │  Design Mac    │ │  Build Mac     │
     │   Bridge A     │ │   Bridge B     │ │   Bridge C     │
     │                │ │                │ │                │
     │  - Xcode       │ │  - Figma       │ │  - CI/CD       │
     │  - Terminal    │ │  - Sketch      │ │  - Test Suites │
     │  - Git         │ │  - Preview     │ │  - Deployment  │
     └────────────────┘ └────────────────┘ └────────────────┘
```

**Configuration Example:**

1. **Deploy Multiple Bridges:**
   ```bash
   # On Dev Mac
   BRIDGE_AUTH_TOKEN=dev-token PORT=3456 npm start

   # On Design Mac
   BRIDGE_AUTH_TOKEN=design-token PORT=3456 npm start

   # On Build Mac
   BRIDGE_AUTH_TOKEN=build-token PORT=3456 npm start
   ```

2. **Configure Worker with Multiple Bridges:**
   ```typescript
   // In Cloudflare Worker environment
   const BRIDGES = {
     dev: { url: 'https://dev.tunnel.io', token: env.DEV_TOKEN },
     design: { url: 'https://design.tunnel.io', token: env.DESIGN_TOKEN },
     build: { url: 'https://build.tunnel.io', token: env.BUILD_TOKEN },
   };

   // Route commands based on task type
   const routeCommand = (intent: string) => {
     if (['code', 'git', 'terminal'].includes(intent)) return BRIDGES.dev;
     if (['design', 'preview', 'screenshot'].includes(intent)) return BRIDGES.design;
     if (['test', 'deploy', 'build'].includes(intent)) return BRIDGES.build;
     return BRIDGES.dev; // Default
   };
   ```

3. **Gas Town Command Flow:**
   ```
   User: "Create a new feature with design mockup and tests"

   Mayor: Routes to departments
   ├── Design Mac: Create Figma mockup
   │   └── Screenshot and describe
   ├── Dev Mac: Implement based on mockup
   │   └── Git commit changes
   └── Build Mac: Run test suite
       └── Report results

   Refinery: Validate all outputs
   User: Receives consolidated report
   ```

### With CC-Mirror

**Use Case:** Remote multi-model orchestration with provider diversity.

**Why This Matters:**
- CC-Mirror enables multiple AI providers (Anthropic, OpenAI, Google)
- SYSTEM provides the execution layer for any model's decisions
- Combine Claude's reasoning with GPT-4's coding with Gemini's analysis

**Architecture:**
```
┌─────────────────────────────────────────────────────────────────┐
│                       CC-MIRROR                                  │
│                (Multi-Model Orchestrator)                        │
│                                                                  │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐       │
│  │    Claude     │  │    GPT-4      │  │    Gemini     │       │
│  │   (Planning)  │  │   (Coding)    │  │  (Analysis)   │       │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘       │
│          │                  │                  │                │
│          └──────────────────┴──────────────────┘                │
│                             │                                    │
│                   Unified Tool Interface                         │
└─────────────────────────────┼────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        SYSTEM                                    │
│                  (Execution Layer)                               │
│                                                                  │
│    Agent (Brain) ──► Bridge (Tunnel) ──► Mac (Body)             │
└─────────────────────────────────────────────────────────────────┘
```

**Configuration Example:**

1. **Modify SYSTEM Agent for Multi-Model:**
   ```typescript
   // Support multiple model providers
   const PROVIDERS = {
     anthropic: { model: 'claude-3-5-sonnet', key: env.ANTHROPIC_KEY },
     openai: { model: 'gpt-4-turbo', key: env.OPENAI_KEY },
     google: { model: 'gemini-pro', key: env.GOOGLE_KEY },
   };

   // Route based on task type
   const selectProvider = (intent: string) => {
     if (['plan', 'reason', 'analyze'].includes(intent)) return PROVIDERS.anthropic;
     if (['code', 'implement', 'debug'].includes(intent)) return PROVIDERS.openai;
     if (['search', 'summarize', 'research'].includes(intent)) return PROVIDERS.google;
     return PROVIDERS.anthropic;
   };
   ```

2. **CC-Mirror Bridge Integration:**
   ```typescript
   // CC-Mirror calls SYSTEM for execution
   const executeOnMac = async (tool: string, args: object) => {
     return fetch(`${SYSTEM_BRIDGE_URL}/execute`, {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${SYSTEM_TOKEN}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ tool, args })
     });
   };
   ```

### Combination Matrix

| SYSTEM + | Use Case | Complexity | Value | Notes |
|----------|----------|------------|-------|-------|
| **Ralph** | Remote Ralph loops | Medium | High | Monitor from anywhere, free up local machine |
| **Gas Town** | Distributed agent factory | High | Very High | Multiple Macs = parallel departments |
| **CC-Mirror** | Multi-provider orchestration | High | High | Best model for each task, unified execution |
| **Ralph + Gas Town** | Distributed Ralph at scale | Very High | Extreme | N Macs running coordinated Ralph loops |
| **All Three** | Full autonomous factory | Expert | Maximum | Multi-model, multi-machine, continuous iteration |

### Integration Code Patterns

**Pattern 1: Remote Execution Wrapper**
```typescript
// Wrap any local command for remote execution
const remoteExecute = async (command: string, args: string[] = []) => {
  // If local, run directly
  if (!SYSTEM_BRIDGE_URL) {
    return execSync(`${command} ${args.join(' ')}`).toString();
  }

  // If remote, use SYSTEM bridge
  const response = await fetch(`${SYSTEM_BRIDGE_URL}/execute`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SYSTEM_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tool: 'shell',
      args: { command, args }
    })
  });

  return (await response.json()).result;
};
```

**Pattern 2: Multi-Mac Router**
```typescript
// Route tasks to appropriate Mac
class MacRouter {
  private bridges: Map<string, BridgeConfig>;

  constructor(bridges: BridgeConfig[]) {
    this.bridges = new Map(bridges.map(b => [b.role, b]));
  }

  async execute(role: string, tool: string, args: object) {
    const bridge = this.bridges.get(role);
    if (!bridge) throw new Error(`No bridge for role: ${role}`);

    return fetch(`${bridge.url}/execute`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bridge.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tool, args })
    });
  }
}

// Usage
const router = new MacRouter([
  { role: 'dev', url: 'https://dev.tunnel.io', token: 'dev-token' },
  { role: 'build', url: 'https://build.tunnel.io', token: 'build-token' },
]);

await router.execute('dev', 'shortcut_run', { name: 'Start Ralph' });
await router.execute('build', 'shell', { command: 'npm', args: ['test'] });
```

**Pattern 3: Scheduled Ralph Orchestration**
```typescript
// Schedule Ralph across multiple Macs
const scheduleDistributedRalph = async () => {
  // Start Ralph on dev Mac
  await systemAgent.chat({
    message: "Run 'Start Ralph' shortcut",
    bridge: 'dev'
  });

  // Schedule checkpoints every 30 minutes
  await systemAgent.schedule({
    when: 'every 30 minutes',
    action: async () => {
      // Get status from all Macs
      const devStatus = await systemAgent.execute('screenshot', {}, 'dev');
      const buildStatus = await systemAgent.execute('screenshot', {}, 'build');

      // Analyze with Claude
      const analysis = await claude.analyze([devStatus, buildStatus]);

      // Notify if issues detected
      if (analysis.hasIssues) {
        await systemAgent.execute('notify', {
          title: 'Ralph Alert',
          message: analysis.summary
        });
      }
    }
  });
};
```

---

## Mental Models

### Model 1: The Remote Desktop Paradigm Shift

**Traditional Remote Desktop:**
- Human looks at screen, decides what to do
- Human moves mouse, types commands
- High latency, requires attention

**SYSTEM Paradigm:**
- AI "looks" at screen (Vision)
- AI decides and executes
- Low latency, autonomous operation

**Key Insight:** SYSTEM isn't remote desktop for AI - it's giving AI its own hands.

### Model 2: The Trust Boundary Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     UNTRUSTED ZONE                              │
│                                                                  │
│    Internet ──────► User Input ──────► Malicious Prompts        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SEMI-TRUSTED ZONE                            │
│                                                                  │
│    Cloudflare Worker ──► Claude AI ──► Tool Selection           │
│                                                                  │
│    [Human-in-the-loop confirmation for sensitive actions]       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      TRUSTED ZONE                               │
│                                                                  │
│    Bridge Server ──► Validation ──► Allowlisted Execution       │
│                                                                  │
│    [Pattern blocking, rate limiting, audit logging]             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SYSTEM ZONE                                │
│                                                                  │
│    macOS ──► AppleScript ──► Shell ──► Applications             │
│                                                                  │
│    [OS-level permissions, sandboxing]                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Model 3: The Capability Expansion Pattern

```
Level 0: Claude alone
         └── Can only generate text

Level 1: Claude + Local MCP
         └── Can read/write local files
         └── Can run local commands

Level 2: Claude + SYSTEM
         └── Can control Mac remotely
         └── Can schedule future actions
         └── Can maintain state across sessions

Level 3: Claude + SYSTEM + Multiple Macs
         └── Can distribute work
         └── Can parallelize tasks
         └── Can specialize machines

Level 4: Claude + SYSTEM + Gas Town + CC-Mirror
         └── Multi-model reasoning
         └── Factory-scale production
         └── Autonomous operation
```

### Model 4: The Scheduling State Machine

```
          ┌──────────────────────────────────────┐
          │                                      │
          ▼                                      │
     ┌─────────┐     ┌─────────┐     ┌─────────┐│
     │ PENDING │────►│ RUNNING │────►│COMPLETE ││
     └─────────┘     └─────────┘     └─────────┘│
          │               │               │      │
          │               │               │      │
          │               ▼               │      │
          │          ┌─────────┐          │      │
          │          │ FAILED  │          │      │
          │          └─────────┘          │      │
          │               │               │      │
          └───────────────┴───────────────┴──────┘
                          │
                    (if recurring)
```

---

## Checkpoints

### Checkpoint 1: Bridge Running

**Test:**
```bash
curl http://localhost:3456/health
```

**Expected Response:**
```json
{"status": "ok", "version": "1.0.0"}
```

**If It Fails:**
- Check if Bridge is running: `ps aux | grep bridge`
- Verify PORT environment variable
- Check for port conflicts: `lsof -i :3456`

### Checkpoint 2: Authentication Working

**Test:**
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3456/tools
```

**Expected Response:**
```json
{
  "tools": [
    {"name": "music_play", "description": "..."},
    ...
  ]
}
```

**If It Fails:**
- Verify BRIDGE_AUTH_TOKEN matches
- Check for typos in Authorization header
- Ensure "Bearer " prefix is present

### Checkpoint 3: Tool Execution

**Test:**
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tool": "notify", "args": {"title": "Test", "message": "Hello"}}' \
  http://localhost:3456/execute
```

**Expected Response:**
```json
{"success": true, "result": "Notification displayed"}
```

**And:** A macOS notification should appear.

**If It Fails:**
- Grant Automation permission for Terminal
- Check Accessibility permission
- Verify osascript works: `osascript -e 'display notification "test"'`

### Checkpoint 4: Agent Deployment

**Test:**
```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"message": "What time is it?"}' \
  https://your-worker.workers.dev/agents/system-agent/chat
```

**Expected Response:**
```json
{
  "response": "The current time is...",
  "actions": []
}
```

**If It Fails:**
- Verify Worker deployed: `npx wrangler tail`
- Check secrets configured: `npx wrangler secret list`
- Validate BRIDGE_URL accessible from Cloudflare

### Checkpoint 5: End-to-End Flow

**Test:** Send message via Worker that triggers Bridge action.

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"message": "Show me a notification that says Hello World"}' \
  https://your-worker.workers.dev/agents/system-agent/chat
```

**Expected:**
1. Response acknowledges the request
2. macOS notification appears with "Hello World"

**If It Fails:**
- Check Worker logs: `npx wrangler tail`
- Verify Bridge logs: check terminal running Bridge
- Ensure BRIDGE_URL uses correct protocol and port

---

## Troubleshooting

### Common Issues

**Issue: "Connection refused" to Bridge**

```
Error: connect ECONNREFUSED 127.0.0.1:3456
```

**Causes:**
- Bridge not running
- Wrong port
- HOST bound to different interface

**Solutions:**
```bash
# Start Bridge
cd src/bridge && npm start

# Check what's listening
lsof -i :3456

# If deploying remotely, ensure HOST=0.0.0.0
HOST=0.0.0.0 npm start
```

---

**Issue: "Unauthorized" from Bridge**

```json
{"error": "Unauthorized"}
```

**Causes:**
- Token mismatch
- Missing "Bearer " prefix
- Whitespace in token

**Solutions:**
```bash
# Verify token
echo $BRIDGE_AUTH_TOKEN | xxd  # Check for hidden characters

# Test with explicit token
curl -H "Authorization: Bearer exact-token-here" http://localhost:3456/tools
```

---

**Issue: "Script blocked" for AppleScript**

```json
{"error": "Script contains blocked pattern"}
```

**Causes:**
- Script contains `do shell script`, `keychain`, or other blocked patterns
- Attempting to run dangerous operation

**Solutions:**
- Use dedicated tools instead of raw AppleScript
- For shell commands, use the `shell` tool with allowlisted commands
- If you need the blocked functionality, modify `BLOCKED_PATTERNS` in core.ts (not recommended)

---

**Issue: "Permission denied" for Accessibility**

```
Error: Not authorized to send Apple events
```

**Causes:**
- macOS permissions not granted
- Wrong app authorized (Terminal vs Node vs SYSTEM.app)

**Solutions:**
1. Open System Preferences → Security & Privacy → Privacy
2. Select Accessibility
3. Add the correct application:
   - For CLI: `/usr/local/bin/node` or your terminal app
   - For Desktop: SYSTEM.app
4. Restart Bridge after granting

---

**Issue: Scheduled actions not firing**

**Causes:**
- Cloudflare Worker sleeping
- Cron syntax error
- Bridge offline when schedule triggered

**Solutions:**
```bash
# Check schedules
curl -H "Authorization: Bearer TOKEN" \
  https://your-worker.workers.dev/agents/system-agent/schedules

# Verify cron syntax
# Use https://crontab.guru/ to validate

# Check Worker is receiving triggers
npx wrangler tail
```

---

**Issue: Screenshots returning empty**

**Causes:**
- Screen Recording permission not granted
- Display sleeping
- Retina scaling issues

**Solutions:**
1. Grant Screen Recording permission to Node/Terminal
2. Ensure display is awake: `caffeinate -d &`
3. Check screencapture works directly: `screencapture -x test.png`

---

### Security-Related Issues

**Issue: Exposed Bridge to Internet**

**Symptom:** Bridge accessible from external IPs

**Immediate Actions:**
1. Stop Bridge: `pkill -f bridge`
2. Check firewall: `sudo pfctl -s rules`
3. Rotate tokens immediately

**Prevention:**
```bash
# Only bind to localhost
HOST=127.0.0.1 npm start

# Use Cloudflare Tunnel for remote access
cloudflared tunnel --url http://localhost:3456
```

---

**Issue: Suspicious audit log entries**

**Symptom:** Unknown tool calls or unusual patterns

**Investigation:**
```bash
# Get recent logs
curl -H "Authorization: Bearer TOKEN" http://localhost:3456/logs

# Look for:
# - Unknown source IPs
# - Failed auth attempts
# - Blocked patterns
# - Unusual timing patterns
```

**Response:**
1. Rotate all tokens
2. Review macOS login history
3. Check for unauthorized processes

---

## Source Attribution

**Repository:** [ygwyg/system](https://github.com/ygwyg/system)

**License:** MIT

**Statistics:**
- 285+ GitHub stars
- TypeScript (75.6%), JavaScript (17.6%), Rust (4.5%), CSS (2.2%)
- 25+ commits
- Active development

**Key Technologies:**
- Cloudflare Workers with Durable Objects
- Tauri for desktop app
- Express.js for Bridge
- MCP (Model Context Protocol) compatibility
- AppleScript for macOS automation

**Related Projects:**
- [Anthropic Claude API](https://console.anthropic.com)
- [Cloudflare Workers](https://workers.cloudflare.com)
- [Raycast](https://raycast.com)
- [Tauri](https://tauri.app)

---

## Summary

SYSTEM represents a significant advancement in AI agent architecture:

1. **Brain/Tunnel/Body separation** enables secure remote execution
2. **60+ tools** provide comprehensive macOS control
3. **Scheduling** allows autonomous future actions
4. **Human-in-the-loop** protects sensitive operations
5. **Integration patterns** with Ralph, Gas Town, and CC-Mirror unlock factory-scale automation

**Key Takeaway:** SYSTEM isn't just about remote control - it's about giving AI persistent, schedulable, distributed access to physical computing resources while maintaining security through layered defenses.

For most users, the Desktop App provides the easiest path. For power users integrating with existing Claude Code workflows, the CLI installation offers more flexibility. For those building distributed systems, the architecture patterns in this document provide the foundation for multi-Mac orchestration.

---

*Extraction completed: 2026-01-19*
*Source: https://github.com/ygwyg/system*
*Lines: 950+*
