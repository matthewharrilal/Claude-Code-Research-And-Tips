# Gas Town GUI (gtgui): Visual Interface for Multi-Agent Orchestration

---
## D-FINAL Connection

**This source contributed to:**
- D-FINAL-architecture.md: Section 2.5 (Visual orchestration layer, factory-scale visibility)

**Coverage in D-FINAL:** New addition (not previously covered)
**High-value unique content:** Complete technical specification of Age of Empires-style visual interface for Gas Town, Phaser game engine architecture, real-time agent monitoring via RTS paradigm, API bridge patterns

**Journey references:**
- synthesis/mastery-ralph-complete.md#visual-monitoring
- extractions/orchestration/gas-town-complete-8-roles.md#visibility-challenges

**Last enhanced:** 2026-01-19 (Phase 2B)

---

> **The definitive technical reference for TRIBE-INC's visual interface bringing RTS game conventions to multi-agent orchestration.**

---

## Table of Contents

1. [You Are Here](#you-are-here)
2. [What This Is](#what-this-is)
3. [Why It Matters](#why-it-matters)
4. [Architecture Deep Dive](#architecture-deep-dive)
5. [Key Features](#key-features)
6. [Installation and Setup](#installation-and-setup)
7. [Configuration Options](#configuration-options)
8. [UX Patterns](#ux-patterns)
9. [Integration Patterns](#integration-patterns)
10. [Mental Models](#mental-models)
11. [Checkpoints](#checkpoints)
12. [Troubleshooting](#troubleshooting)
13. [Comparison with Alternatives](#comparison-with-alternatives)
14. [Source Attribution](#source-attribution)

---

## You Are Here

```
                        Visual Orchestration Tooling

    gtgui (THIS DOCUMENT)     gas-town-game-ui          gastown-ui
    Age of Empires Style      Pixel Art RPG Style       Dashboard Style
    ├── Phaser 3 Engine       ├── PixiJS + React        ├── Next.js 16
    ├── Isometric Map         ├── Animated Sprites      ├── React Flow
    ├── RTS Controls          ├── Character Chat        ├── Analytics
    └── CLI Bridge            └── WebSocket Bridge      └── Mayor Chat

                                    │
                                    ▼
                           ┌─────────────────┐
                           │    Gas Town     │
                           │  CLI Backend    │
                           │   (gt binary)   │
                           └─────────────────┘
```

**What this document covers:** Complete technical specification of gtgui, an Age of Empires-inspired browser interface for visualizing and commanding Gas Town multi-agent orchestration systems.

**Prerequisites:**
- Gas Town installed and configured
- Node.js runtime
- Understanding of Gas Town roles (Mayor, Deacon, Polecats, etc.)
- Familiarity with RTS game interfaces (helpful)

**Complexity Level:** 7 (Factory-Scale Autonomous)

---

## What This Is

**gtgui** is a browser-based graphical user interface that transforms Gas Town's multi-agent orchestration into an interactive **Real-Time Strategy (RTS) game experience**. Built with Phaser 3, it renders your agent factory as an isometric map where:

- **Polecats** appear as selectable units with color-coded status
- **Infrastructure** manifests as buildings (Town Hall, Refinery, Barracks, Rigs)
- **Commands** issue through familiar RTS controls (click, drag, right-click)
- **Resources** track in a classic HUD layout (tokens, issues, convoys)

### The Core Insight

> "Gas Town feels like Claude Code in 'limitless mode' but there's really too much going on for you to reasonably comprehend."
> — Tim Sehn, DoltHub

**gtgui addresses the fundamental challenge of parallel agent orchestration: cognitive overload.** When running 20-30 Claude instances simultaneously, terminal output becomes incomprehensible. Visual metaphors provide the abstraction layer humans need.

### Repository Information

| Attribute | Value |
|-----------|-------|
| **Repository** | [github.com/TRIBE-INC/gtgui](https://github.com/TRIBE-INC/gtgui) |
| **Language** | JavaScript (98.2%), HTML (1.8%) |
| **Framework** | Phaser 3 |
| **Build Tool** | Vite |
| **Server** | Node.js/Express |
| **License** | Open Source |
| **Status** | Active Development |

---

## Why It Matters

### The Visibility Problem at Scale

Running a single Claude Code instance is straightforward—you watch the terminal, provide feedback, iterate. Running three instances stretches attention. Running twenty becomes chaos.

**Observable symptoms of scale blindness:**
1. Agents silently stuck on the same error for hours
2. Duplicate work across multiple workers
3. Merge conflicts accumulating in the Refinery queue
4. Cost spiraling without visible progress
5. Critical failures buried in terminal scroll

### The RTS Metaphor Solution

Real-Time Strategy games solved a similar problem decades ago: **managing many units across a complex battlefield**. Players learn to:

- Scan the minimap for activity hotspots
- Use color coding to instantly identify unit states
- Issue commands through spatial selection
- Trust the abstraction layer rather than micromanaging

**gtgui applies these battle-tested UX patterns to agent orchestration.**

### Concrete Benefits

| Challenge | Terminal Experience | gtgui Experience |
|-----------|---------------------|------------------|
| Agent health | Scroll through logs | Glance at unit colors |
| Work distribution | Run `gt status` repeatedly | See units clustered around rigs |
| Stuck detection | Notice repeated errors | Red units immediately visible |
| Cost monitoring | Check API dashboard | Resource bar always visible |
| Command execution | Type CLI commands | Right-click context menus |

---

## Architecture Deep Dive

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        BROWSER LAYER                             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Phaser 3 Game Engine                      ││
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        ││
│  │  │  BootScene   │ │  GameScene   │ │   UIScene    │        ││
│  │  │  • Assets    │ │  • Iso Map   │ │  • HUD       │        ││
│  │  │  • Sprites   │ │  • Units     │ │  • Commands  │        ││
│  │  │  • Progress  │ │  • Buildings │ │  • Minimap   │        ││
│  │  └──────────────┘ └──────────────┘ └──────────────┘        ││
│  │                           │                                  ││
│  │                           ▼                                  ││
│  │              ┌──────────────────────┐                       ││
│  │              │    GasTownAPI.js     │                       ││
│  │              │  • Fetch wrapper     │                       ││
│  │              │  • State management  │                       ││
│  │              └──────────────────────┘                       ││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                   │
│                              │ HTTP/REST                         │
│                              ▼                                   │
├─────────────────────────────────────────────────────────────────┤
│                        SERVER LAYER                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                   server.js (Express)                        ││
│  │  • Static file serving                                       ││
│  │  • API route handlers                                        ││
│  │  • CLI command execution                                     ││
│  │  • SSE activity feed                                         ││
│  └─────────────────────────────────────────────────────────────┘│
│                              │                                   │
│                              │ Shell execution                   │
│                              ▼                                   │
├─────────────────────────────────────────────────────────────────┤
│                      GAS TOWN LAYER                              │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                     gt CLI Binary                            ││
│  │  • Go-based orchestrator                                     ││
│  │  • tmux session management                                   ││
│  │  • Beads work tracking                                       ││
│  │  • Agent lifecycle control                                   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### File Structure

```
gtgui/
├── src/
│   ├── main.js                 # Phaser game configuration
│   ├── scenes/
│   │   ├── BootScene.js        # Asset loading, sprite generation
│   │   ├── GameScene.js        # Isometric map, units, buildings
│   │   └── UIScene.js          # HUD overlay, commands, minimap
│   └── api/
│       └── GasTownAPI.js       # REST client for backend
├── server.js                   # Express bridge to gt CLI
├── public/
│   ├── index.html              # Single page app entry
│   └── assets/                 # Sprites, tiles, audio (if any)
├── package.json
├── vite.config.js
└── README.md
```

### Scene Architecture

gtgui uses Phaser 3's scene system to separate concerns:

#### BootScene (Initialization)

**Purpose:** Load and generate all visual assets before gameplay

```javascript
// Procedural sprite generation approach
generateSprites() {
  // Terrain: Isometric diamond tiles
  // - Grass, dirt, stone variants
  // - Grid lines for visual clarity

  // Buildings: Town structures
  // - Town Hall (Mayor HQ)
  // - Refinery (merge queue)
  // - Barracks (spawn point)
  // - Oil Rigs (project containers)

  // Units: Agent representations
  // - Polecats in multiple states
  // - Mayor (gold)
  // - Deacon (purple)
  // - Selection rings
}
```

**Design Decision:** Procedural sprites keep the bundle lightweight and allow easy customization.

#### GameScene (Core Gameplay)

**Purpose:** Render the isometric world and handle interaction

**Key Systems:**

1. **Isometric Grid Conversion**
   ```javascript
   // Transform grid coordinates to isometric screen position
   const isoX = (x - y) * this.tileWidth / 2;
   const isoY = (x + y) * this.tileHeight / 2;
   ```

2. **Unit Management**
   - Units stored in Map collection
   - Each unit: container with sprite + selection ring
   - 3-second polling updates unit states

3. **Selection System**
   - Single click: Select unit within 20px threshold
   - Drag: Box selection for multiple units
   - Selection ring visibility toggles

4. **Command Execution**
   - Right-click: Move selected units
   - Phaser tweens animate movement (500ms, Power2 easing)

#### UIScene (Interface Overlay)

**Purpose:** Heads-up display independent of map scrolling

**Components:**

| Component | Size | Position | Function |
|-----------|------|----------|----------|
| Resource Bar | Full width | Top | Tokens, issues, convoys |
| Minimap | 150x150px | Bottom-right | Map overview + viewport |
| Command Panel | 250x200px | Above minimap | Context actions |
| Tooltip | Dynamic | Cursor follow | Hover information |

### API Layer

#### Frontend Client (GasTownAPI.js)

```javascript
class GasTownAPI {
  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl;
  }

  // Core pattern: All methods use centralized request()
  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  }

  // Status & Infrastructure
  getStatus()           // Overall town health
  getRigs()             // List project containers
  getPolecats(rigName)  // Agents per rig
  getConvoys()          // Work package status

  // Agent Operations
  sling(agentId, issueId)              // Assign work
  getHook(agentId)                      // Current task
  sendMail(to, subject, message)        // Inter-agent comms
  stop(agentId)                         // Emergency halt

  // Economics
  getCosts()            // Token usage
}
```

#### Backend Bridge (server.js)

The Express server wraps `gt` CLI commands:

```javascript
// Execution pattern with timeout
async function gt(args) {
  return new Promise((resolve, reject) => {
    exec(`${GT_PATH} ${args}`, {
      cwd: TOWN_ROOT,
      timeout: 10000
    }, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

// JSON parsing wrapper
async function gtJson(args) {
  const output = await gt(args);
  return JSON.parse(output);
}
```

**Endpoints:**

| Endpoint | Method | CLI Command | Purpose |
|----------|--------|-------------|---------|
| `/api/status` | GET | `gt status --json` | Town health |
| `/api/rigs` | GET | `gt rigs --json` | List rigs |
| `/api/rigs/:name/polecats` | GET | `gt polecats -r NAME --json` | Rig agents |
| `/api/convoys` | GET | `gt convoys --json` | Work packages |
| `/api/sling` | POST | `gt sling AGENT ISSUE` | Assign work |
| `/api/mail/send` | POST | `gt mail send TO SUBJ MSG` | Send mail |
| `/api/agents/:id/hook` | GET | `gt hook AGENT` | Current task |
| `/api/agents/:id/stop` | POST | `gt stop AGENT` | Emergency stop |
| `/api/feed` | GET | SSE stream | Real-time events |

---

## Key Features

### 1. Isometric Map Rendering

**What:** A 20x20 tile isometric grid representing your Gas Town workspace

**Visual Elements:**
- **Terrain Tiles:** Grass, dirt, stone with procedural variation
- **Buildings:** Infrastructure mapped to Gas Town roles
- **Units:** Polecats rendered as selectable game units

**Building Types:**

| Building | Represents | Visual Style |
|----------|-----------|--------------|
| Town Hall | Mayor HQ | Large central structure |
| Refinery | Merge queue processing | Industrial with pipes |
| Barracks | Spawn point | Military aesthetic |
| Oil Rig | Per-project container | Platform structure |

### 2. Unit Status Visualization

**Color Coding:**

| Color | Status | Meaning |
|-------|--------|---------|
| Blue | Idle | Waiting for assignment |
| Green | Active/Working | Processing a task |
| Red | Error/Stuck | Needs attention |
| Gold | Mayor | The orchestrator |
| Purple | Deacon | Central pulse daemon |
| Orange | Refinery | Merge queue manager |

**Interaction:**
- Hover: Tooltip with agent details
- Click: Select individual unit
- Drag: Box selection for groups

### 3. RTS-Style HUD

**Resource Bar (Top):**
- Token count (API costs)
- Issue count (work items)
- Convoy count (grouped work)
- Town name display

**Minimap (Bottom-Right):**
- Simplified terrain overview
- Building positions
- Viewport rectangle showing current view
- Click to jump camera

**Command Panel (Above Minimap):**
- Context-sensitive buttons
- 2-column grid layout
- Updates on selection change
- Color-coded by action type

### 4. Camera Controls

| Input | Action |
|-------|--------|
| WASD / Arrow Keys | Pan camera |
| Mouse Wheel | Zoom in/out |
| Right-Drag | Drag camera |
| Left-Click | Select unit |
| Left-Drag | Box selection |
| Right-Click | Issue command |

### 5. Real-Time State Synchronization

**Polling Interval:** 3 seconds

**State Updates:**
1. Fetch current status from `/api/status`
2. Update unit sprite textures based on state
3. Refresh resource bar values
4. Emit events to UI scene

**SSE Feed:**
- Real-time activity streaming
- `/api/feed` endpoint
- Complements polling for immediate updates

---

## Installation and Setup

### Prerequisites

```bash
# Verify Node.js
node --version  # Should be 18+

# Verify Gas Town installed
gt --version    # Should show Gas Town version

# Verify Gas Town running
gt status       # Should show town status
```

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/TRIBE-INC/gtgui.git
cd gtgui

# 2. Install dependencies
npm install

# 3. Start development server (with hot reload)
npm run dev

# OR: Production build and server
npm run build
npm run server
```

### Accessing the Interface

Open browser to: `http://localhost:3000`

**Expected Initial State:**
- Isometric map with terrain
- Town Hall building (Mayor HQ)
- Any active agents as colored units
- HUD with resource tracking

### Verifying Connection

```bash
# In another terminal, check Gas Town is responding
curl http://localhost:8080/api/status

# Expected: JSON with town status
```

---

## Configuration Options

### Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `8080` | Server listening port |
| `GT_PATH` | `~/go/bin/gt` | Path to Gas Town binary |
| `TOWN_ROOT` | `~/gt` | Workspace root directory |

### Setting Configuration

```bash
# Option 1: Export before running
export PORT=3000
export GT_PATH=/usr/local/bin/gt
export TOWN_ROOT=/home/user/gastown
npm run server

# Option 2: Inline
PORT=3000 GT_PATH=/usr/local/bin/gt npm run server

# Option 3: .env file (if dotenv configured)
echo "PORT=3000" >> .env
echo "GT_PATH=/usr/local/bin/gt" >> .env
npm run server
```

### Phaser Configuration (main.js)

```javascript
const config = {
  type: Phaser.AUTO,           // WebGL with Canvas fallback
  parent: 'game-container',
  backgroundColor: '#1a1a2e',  // Dark theme
  pixelArt: true,              // Crisp sprites
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [BootScene, GameScene, UIScene]
};
```

**Customization Points:**
- `backgroundColor`: Change base map color
- `pixelArt`: Set to false for smoother sprites
- Scene order determines layer stacking

---

## UX Patterns

### The RTS Control Paradigm

gtgui deliberately mimics classic RTS games (Age of Empires, StarCraft) because these conventions are **deeply intuitive** to developers who grew up gaming:

**Pattern 1: Spatial Reasoning**
- Agents near each other = working on same rig
- Isolated agent = independent task
- Cluster around building = that role is busy

**Pattern 2: Color as State**
- No need to read logs—color tells you everything
- Red draws immediate attention
- Green is "all systems nominal"

**Pattern 3: Selection Then Action**
- Select target → issue command
- Same muscle memory as RTS games
- Reduces cognitive load vs. CLI

### Information Hierarchy

```
                    GLANCEABILITY SPECTRUM

HIGH (Immediate)                           LOW (Requires Focus)
     │                                              │
     ▼                                              ▼
Unit Colors → Resource Bar → Minimap → Command Panel → Tooltips
  (State)      (Metrics)     (Map)     (Actions)     (Details)
```

**Design Principle:** Most critical information (agent health) requires zero focus. Detailed information (specific error messages) requires deliberate interaction.

### Command Patterns

| User Intent | Action | Result |
|-------------|--------|--------|
| "Is everyone working?" | Scan map | See unit colors |
| "What's the Mayor doing?" | Find gold unit | Hover for tooltip |
| "Assign work to Alice" | Click Alice → right-click | Context menu appears |
| "How much have I spent?" | Glance top-left | Token count visible |
| "Where's the bottleneck?" | Check Refinery | Queue visualization |

---

## Integration Patterns

### With Gas Town

gtgui is the **visual layer** for Gas Town. It does not replace the CLI—it augments it.

**Relationship:**

```
                    ┌────────────────────────────┐
                    │        OVERSEER (You)      │
                    └─────────────┬──────────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
       ┌──────────┐        ┌──────────┐        ┌──────────┐
       │ Terminal │        │  gtgui   │        │   TUI    │
       │   (CLI)  │        │  (RTS)   │        │ (future) │
       └──────────┘        └──────────┘        └──────────┘
              │                   │                   │
              └───────────────────┼───────────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │      Gas Town Backend      │
                    │         (gt binary)        │
                    └────────────────────────────┘
```

**GUI for Gas Town Management:**

| Gas Town Concept | gtgui Representation |
|------------------|----------------------|
| Mayor | Gold unit in Town Hall |
| Deacon | Purple unit, central position |
| Polecats | Blue/green/red units |
| Rigs | Oil Rig buildings |
| Refinery | Industrial building |
| Beads (work items) | Issue count in HUD |
| Convoys | Convoy count in HUD |

**Visual Agent Monitoring:**

1. **Health Check:** Color scan in < 1 second
2. **Assignment View:** Units cluster near their rig
3. **Stuck Detection:** Red units = immediate visual flag
4. **Cost Awareness:** Token counter always visible

**Configuration Example:**

```bash
# Start Gas Town normally
gt start

# In another terminal, start gtgui
cd gtgui
PORT=3000 npm run server

# Both systems now synchronized
# CLI commands reflect in GUI
# GUI commands execute via CLI
```

### With Ralph

**Visualizing Ralph in Gas Town:**

Ralph loops spawn fresh Claude instances repeatedly. In Gas Town, each iteration can be visualized as:

1. **Polecat spawns** → New unit appears
2. **Task assignment** → Unit moves toward rig
3. **Work in progress** → Unit turns green
4. **Completion** → Unit may despawn
5. **Error** → Unit turns red

**Progress Tracking:**

```
Ralph Iteration 1    Ralph Iteration 2    Ralph Iteration 3
      │                    │                    │
      ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Unit spawns  │    │ Unit spawns  │    │ Unit spawns  │
│ → Green      │    │ → Green      │    │ → Red (!)    │
│ → Completes  │    │ → Completes  │    │ → Stuck      │
│ → Despawns   │    │ → Despawns   │    │ → Visible    │
└──────────────┘    └──────────────┘    └──────────────┘
```

**Key Insight:** gtgui makes Ralph failures **immediately visible** rather than buried in log files.

### With HUD

**gtgui vs. HUD:**

| Aspect | gtgui | HUD |
|--------|-------|-----|
| **Metaphor** | RTS game | Dashboard |
| **Primary Input** | Mouse + spatial | Keyboard + text |
| **Information Density** | Moderate | High |
| **Best For** | Monitoring state | Detailed inspection |
| **Learning Curve** | Low (gamers) | Low (CLI users) |

**Complementary Features:**

- **gtgui:** "Where is everyone? What's their status?"
- **HUD:** "What exact error did Agent-7 encounter?"

Run both simultaneously:
```bash
# Terminal 1: gtgui for visual overview
npm run server

# Terminal 2: HUD for detailed inspection
gt hud
```

### Combination Matrix

| gtgui + | Use Case | Complexity | Value |
|---------|----------|------------|-------|
| **Gas Town** | Visual factory management | Low | **Very High** |
| **Ralph** | Visual Ralph iteration monitoring | Low | **High** |
| **HUD** | Complementary visibility (overview + detail) | Low | **Medium** |
| **Beads** | See work items as game objects | Medium | **High** |
| **Convoys** | Visualize grouped work movement | Medium | **Medium** |

---

## Mental Models

### Mental Model 1: The War Room

Think of gtgui as a **military command center's tactical display**:

- **Map = Battlefield** → Your codebase
- **Units = Troops** → Your agent workforce
- **Colors = Health** → Combat readiness
- **Buildings = Infrastructure** → Coordination points
- **You = General** → Strategic direction

You don't micromanage soldiers—you issue strategic orders and monitor outcomes.

### Mental Model 2: Factory Floor Cameras

Imagine security cameras overlooking a factory:

- **Wide shot** → Isometric map (overall activity)
- **Specific angles** → Unit tooltips (worker details)
- **Status lights** → Colors (immediate problems)
- **Supervisor station** → HUD (metrics + commands)

You observe, intervene only when red lights appear.

### Mental Model 3: The Ant Farm

> "Claude Code is the world's biggest fuckin' ant."
> — Steve Yegge

gtgui is the **glass wall of your ant farm**:

- Ants (agents) move autonomously
- You see patterns emerge
- Bottlenecks become visible
- You occasionally tap the glass (issue commands)

---

## Checkpoints

### Checkpoint 1: Installation Verified

**You should see:**
- Browser loads at `http://localhost:3000`
- Isometric map renders with terrain tiles
- No JavaScript console errors
- Loading bar completes, transitions to game

**If not:**
- Check Node version (`node --version` >= 18)
- Verify npm install completed without errors
- Check port 3000 not already in use

### Checkpoint 2: Gas Town Connection Established

**You should see:**
- Resource bar shows non-zero values (if Gas Town active)
- API call to `/api/status` returns 200
- Units appear if agents are running

**If not:**
- Verify Gas Town is running (`gt status`)
- Check `GT_PATH` environment variable
- Check `TOWN_ROOT` points to valid workspace

### Checkpoint 3: Unit Interaction Working

**You should see:**
- Hovering unit shows tooltip
- Clicking unit shows selection ring
- Selected unit appears highlighted
- Right-click shows command context

**If not:**
- Check GameScene loaded (no scene errors)
- Verify mouse events registering (Phaser debug)
- Clear browser cache, hard refresh

### Checkpoint 4: Real-Time Updates

**You should see:**
- Unit colors update when agent state changes
- Resource bar updates every ~3 seconds
- New agents appear when spawned in Gas Town

**If not:**
- Check polling interval in GameScene (default 3000ms)
- Verify SSE endpoint functional (`/api/feed`)
- Check network tab for failed requests

---

## Troubleshooting

### Common Issues

#### Issue: "Cannot connect to Gas Town"

**Symptoms:**
- API errors in console
- Resource bar shows zeros
- No units appear

**Solutions:**
1. Verify Gas Town is running: `gt status`
2. Check GT_PATH: `echo $GT_PATH`
3. Check TOWN_ROOT: `echo $TOWN_ROOT`
4. Test API directly: `curl localhost:8080/api/status`

#### Issue: "Units not updating"

**Symptoms:**
- Colors stay stale
- New agents don't appear
- Commands seem to not work

**Solutions:**
1. Check browser console for errors
2. Verify polling: Network tab should show `/api/status` calls
3. Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
4. Check Gas Town logs: `gt logs`

#### Issue: "Map not rendering"

**Symptoms:**
- Black or colored rectangle only
- No isometric tiles
- Loading never completes

**Solutions:**
1. Check WebGL support: [get.webgl.org](https://get.webgl.org)
2. Try different browser (Chrome recommended)
3. Check BootScene completion in console
4. Verify Vite build succeeded

#### Issue: "Controls not responding"

**Symptoms:**
- WASD does nothing
- Mouse clicks don't select
- Right-click opens browser context menu

**Solutions:**
1. Click inside game canvas to focus
2. Check Phaser input listeners in GameScene
3. Disable browser extensions that might interfere
4. Verify scene is active (not paused)

#### Issue: "Performance problems"

**Symptoms:**
- Low FPS
- Stuttering
- High CPU usage

**Solutions:**
1. Reduce polling frequency (edit GameScene interval)
2. Check agent count (>50 may strain rendering)
3. Close other browser tabs
4. Use production build: `npm run build && npm run server`

---

## Comparison with Alternatives

### Gas Town Visualization Ecosystem

Three major projects provide visual interfaces for Gas Town:

| Project | Style | Framework | Unique Feature |
|---------|-------|-----------|----------------|
| **gtgui** (this) | Age of Empires RTS | Phaser 3 | Isometric map, RTS controls |
| **gas-town-game-ui** | Pixel Art RPG | PixiJS + React | Character chat, room exploration |
| **gastown-ui** | Dashboard | Next.js + React Flow | Dependency graphs, analytics |

### When to Choose gtgui

**Choose gtgui if:**
- You want **quick visual scanning** of agent states
- RTS game conventions are **intuitive** to you
- You prefer **spatial reasoning** over data tables
- Low complexity setup is important

**Choose gas-town-game-ui if:**
- You want **immersive** agent interaction
- Direct character chat appeals to you
- You enjoy **RPG aesthetics**

**Choose gastown-ui if:**
- You need **analytics** and insights
- Dependency graphs are critical
- Dashboard format matches your workflow
- Mayor chat integration matters

### Feature Comparison

| Feature | gtgui | gas-town-game-ui | gastown-ui |
|---------|-------|------------------|------------|
| Isometric map | Yes | No | No |
| Unit selection | Yes | Click character | N/A |
| Minimap | Yes | No | No |
| Resource HUD | Yes | No | Yes |
| Agent chat | No | Yes | Yes (Mayor) |
| Dependency graph | No | No | Yes |
| Analytics | No | No | Yes |
| Real-time updates | Polling | WebSocket | Polling |
| Setup complexity | Low | Medium | Medium |

---

## Source Attribution

### Primary Sources

| Source | Type | Reliability |
|--------|------|-------------|
| [TRIBE-INC/gtgui](https://github.com/TRIBE-INC/gtgui) | Repository | **Primary** (9/10) |
| [Steve Yegge - Welcome to Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04) | Blog | **Primary** (10/10) |
| [DoltHub - A Day in Gas Town](https://www.dolthub.com/blog/2026-01-15-a-day-in-gas-town/) | Experience Report | **Secondary** (8/10) |

### Related Projects

| Project | URL |
|---------|-----|
| Gas Town (core) | [github.com/steveyegge/gastown](https://github.com/steveyegge/gastown) |
| gas-town-game-ui | [github.com/newideas99/gas-town-game-ui](https://github.com/newideas99/gas-town-game-ui) |
| gastown-ui | [github.com/m1chael-pappas/gastown-ui](https://github.com/m1chael-pappas/gastown-ui) |

### Community Discussion

| Source | Platform | Link |
|--------|----------|------|
| Cedric Chee | Twitter/X | [x.com/cedric_chee/status/2008343778810360303](https://x.com/cedric_chee/status/2008343778810360303) |
| Justin Abrahms | Blog | [justin.abrah.ms/blog/2026-01-05-wrapping-my-head-around-gas-town](https://justin.abrah.ms/blog/2026-01-05-wrapping-my-head-around-gas-town.html) |
| Enterprise Vibe Code | Medium | [medium.com/@enterprisevibecode/10-hours-with-gas-town](https://medium.com/@enterprisevibecode/10-hours-with-gas-town-out-of-a-possible-48-17a6b2801a73) |

---

## Appendix: Quick Reference

### Essential Commands

```bash
# Start gtgui (development)
cd gtgui && npm run dev

# Start gtgui (production)
cd gtgui && npm run build && npm run server

# Check Gas Town status
gt status

# List active agents
gt polecats

# Stop a stuck agent
gt stop AGENT_NAME
```

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| W / Up Arrow | Pan camera up |
| A / Left Arrow | Pan camera left |
| S / Down Arrow | Pan camera down |
| D / Right Arrow | Pan camera right |
| Mouse Wheel | Zoom in/out |

### Color Quick Reference

| Color | Meaning | Action |
|-------|---------|--------|
| Blue | Idle | Assign work |
| Green | Working | Monitor |
| Red | Stuck/Error | Investigate immediately |
| Gold | Mayor | Strategic coordination |
| Purple | Deacon | System health |
| Orange | Refinery | Merge queue |

---

*Document version: 1.0*
*Lines: 600+*
*Last updated: 2026-01-19*
