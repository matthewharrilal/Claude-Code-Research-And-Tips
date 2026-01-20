# MCP Ecosystem Complete: Protocol, SDKs, Coordination, and Knowledge Packaging

**Version:** 1.0
**Compiled:** 2026-01-19
**Sources:** 4 extraction documents synthesized (Python SDK, TypeScript SDK, Agent Mail, N-Skills)
**Status:** Comprehensive reference for MCP ecosystem components and integration patterns

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [Protocol Implementation Comparison](#2-protocol-implementation-comparison)
3. [Agent Mail as Coordination Layer](#3-agent-mail-as-coordination-layer)
4. [N-Skills Knowledge Packaging](#4-n-skills-knowledge-packaging)
5. [Context Reduction Techniques](#5-context-reduction-techniques)
6. [Transport Abstraction](#6-transport-abstraction)
7. [When to Use Which MCP Component](#7-when-to-use-which-mcp-component)
8. [Mental Models](#8-mental-models)
9. [Checkpoints](#9-checkpoints)
10. [Troubleshooting](#10-troubleshooting)
11. [Integration Patterns](#11-integration-patterns)
12. [Source Attribution](#12-source-attribution)

---

## 1. You Are Here

### **Con**text Box: MCP in the **Cla**ude Code **Eco**system

```
+===========================================================================+
|                     MCP ECOSYSTEM POSITION                                 |
+===========================================================================+
|                                                                           |
|  ┌─────────────────────────────────────────────────────────────────────┐ |
|  │                    CLAUDE CODE RUNTIME                               │ |
|  │                                                                       │ |
|  │   ┌─────────────────────────────────────────────────────────────┐   │ |
|  │   │                 Extension Layer                              │   │ |
|  │   │                                                               │   │ |
|  │   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │   │ |
|  │   │   │ SKILLS       │  │ MCP SERVERS  │  │ HOOKS        │      │   │ |
|  │   │   │ (N-Skills)   │  │ (Agent Mail) │  │ (Automation) │      │   │ |
|  │   │   │              │  │              │  │              │      │   │ |
|  │   │   │ Knowledge    │  │ Tool         │  │ Event        │      │   │ |
|  │   │   │ Packaging    │  │ Endpoints    │  │ Triggers     │      │   │ |
|  │   │   └──────────────┘  └──────────────┘  └──────────────┘      │   │ |
|  │   │            ▲                ▲                                 │   │ |
|  │   │            │                │                                 │   │ |
|  │   │   ┌────────┴────────────────┴────────────────────────────┐   │   │ |
|  │   │   │           MCP PROTOCOL (JSON-RPC 2.0)                 │   │   │ |
|  │   │   │   ┌─────────────────┐  ┌─────────────────┐           │   │   │ |
|  │   │   │   │  Python SDK     │  │ TypeScript SDK  │           │   │   │ |
|  │   │   │   │  (FastMCP)      │  │ (McpServer)     │           │   │   │ |
|  │   │   │   └─────────────────┘  └─────────────────┘           │   │   │ |
|  │   │   └───────────────────────────────────────────────────────┘   │   │ |
|  │   └───────────────────────────────────────────────────────────────┘   │ |
|  └───────────────────────────────────────────────────────────────────────┘ |
|                                                                           |
|  ┌───────────────────────────────────────────────────────────────────┐   |
|  │              ORCHESTRATION PATTERNS (USE MCP)                      │   |
|  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │   |
|  │   │   RALPH     │  │  GAS TOWN   │  │  CC-MIRROR  │               │   |
|  │   │   Loops     │  │  Factory    │  │  Multi-Mod  │               │   |
|  │   └─────────────┘  └─────────────┘  └─────────────┘               │   |
|  └───────────────────────────────────────────────────────────────────┘   |
|                                                                           |
+===========================================================================+
```

### What This **Doc**ument **Cov**ers

This **syn**thesis brings together **fou**r critical **com**ponents of the MCP **eco**system:

| Component | Purpose | Source Document |
|-----------|---------|-----------------|
| **Pyt**hon SDK | **Ser**ver/client **imp**lementation in Python | `012-mcp-python-sdk.md` |
| **Type**Script SDK | **Typ**e-safe **ser**ver/client in TypeScript | `013-mcp-typescript-sdk.md` |
| **Age**nt Mail | **Asy**nchronous **age**nt coordination | `009-mcp-agent-mail.md` |
| **N-Ski**lls | **Uni**versal **ski**ll marketplace | `010-n-skills-collection.md` |

### Why This **Mat**ters

**MCP** (Model **Con**text Protocol) is the **sta**ndardized interface for **ext**ending AI **age**nts. Understanding the **eco**system enables:

- **Bui**lding custom **too**ls that **wor**k across **pla**tforms
- **Coo**rdinating **mul**tiple **age**nts safely
- **Pac**kaging **dom**ain expertise for **reu**se
- **Red**ucing **con**text overhead **thr**ough smart **arc**hitecture

### **Pre**requisites

Before **div**ing in, you **sho**uld understand:

1. **Bas**ic Claude Code usage
2. **JSO**N-RPC 2.0 **pro**tocol concepts
3. **Asy**nc programming (**eit**her Python **asy**ncio or **Typ**eScript **asy**nc/await)
4. **Whe**n/why you'd **wan**t external **too**ls (see complexity ladder Level 3+)

### **Com**plexity Ladder **Pos**ition

```
Level 0: Single session                [ ]
Level 1: Hooks and automation          [ ]
Level 2: Skills and enhanced context   [*] <-- N-Skills STARTS HERE
Level 3: External tool integration     [*] <-- MCP SDKs START HERE
Level 4: Native orchestration          [*] <-- Agent Mail ENABLES THIS
Level 5: Multi-instance coordination   [*] <-- Agent Mail CORE USE
Level 6: Factory components            [*] <-- Agent Mail + SDKs
Level 7: Factory-scale (Gas Town)      [*] <-- ALL COMPONENTS
```

---

## 2. Protocol Implementation Comparison

### The USB-C **Ana**logy

> "**Thi**nk of MCP like a **USB**-C port for AI **app**lications. Just as **USB**-C provides a **sta**ndardized way to **con**nect electronic **dev**ices, MCP **pro**vides a **sta**ndardized way to **con**nect AI **app**lications to **ext**ernal systems."
> -- MCP **Doc**umentation

### Python SDK vs TypeScript SDK: **Sid**e-by-Side

```
+==================================================================================+
|                    PYTHON SDK vs TYPESCRIPT SDK                                   |
+==================================================================================+
|                                                                                   |
|  PYTHON SDK                              TYPESCRIPT SDK                           |
|  ───────────────────────                 ───────────────────────                  |
|                                                                                   |
|  Repository:                             Repository:                              |
|  modelcontextprotocol/python-sdk         modelcontextprotocol/typescript-sdk      |
|                                                                                   |
|  Stars: 21.2k+                           Stars: 11.4k+                            |
|  License: MIT                            License: Apache 2.0 (new) / MIT          |
|  Version: v2 (pre-alpha), v1.x (stable)  Version: v1.25.2 (stable), v2 (alpha)   |
|                                                                                   |
|  ┌──────────────────────────────────┐    ┌──────────────────────────────────┐    |
|  │  DECORATOR-BASED                 │    │  METHOD-BASED                    │    |
|  │                                  │    │                                  │    |
|  │  from mcp.server.fastmcp import  │    │  import { McpServer } from       │    |
|  │    FastMCP                       │    │    "@modelcontextprotocol/       │    |
|  │                                  │    │     server/mcp.js";              │    |
|  │  mcp = FastMCP("MyServer")       │    │                                  │    |
|  │                                  │    │  const server = new McpServer({  │    |
|  │  @mcp.tool()                     │    │    name: "my-server",            │    |
|  │  def my_tool(x: str) -> str:     │    │    version: "1.0.0"              │    |
|  │      return f"Got: {x}"          │    │  });                             │    |
|  │                                  │    │                                  │    |
|  │  mcp.run()                       │    │  server.registerTool(            │    |
|  │                                  │    │    "my_tool",                    │    |
|  │                                  │    │    { inputSchema: { x: z.str } },│    |
|  │                                  │    │    async ({ x }) => ({           │    |
|  │                                  │    │      content: [{ type: "text",   │    |
|  │                                  │    │        text: `Got: ${x}` }]      │    |
|  │                                  │    │    })                            │    |
|  │                                  │    │  );                              │    |
|  └──────────────────────────────────┘    └──────────────────────────────────┘    |
|                                                                                   |
+==================================================================================+
```

### **Det**ailed Comparison **Mat**rix

| Aspect | **Pyt**hon SDK | **Typ**eScript SDK |
|--------|---------------|-------------------|
| **Type Safety** | Runtime via **Pyd**antic | Compile-time via **Typ**eScript + Zod |
| **Async Model** | `asyncio` | Native `async/await` |
| **Primary Use** | Scripts, **not**ebooks, **bac**kend | **Cla**ude Desktop, VS Code, web |
| **Framework** | **Fas**tMCP, ASGI | Express, Hono, Node HTTP |
| **Learning Curve** | Lower (**dec**orator-based) | Higher (TS + Zod) |
| **Performance** | Slightly slower **sta**rtup | Faster startup |
| **Ecosystem** | pip, ML libraries | npm, browser **com**pat |
| **Structured Output** | **Pyd**antic **mod**els | Zod **sch**emas |
| **Context Injection** | `Context[ServerSession, None]` | `context` parameter |
| **Lifespan Management** | `@asynccontextmanager` | Middleware patterns |

### The **Thr**ee Primitives (**Bot**h SDKs)

```
+===============================+
|    MCP THREE PRIMITIVES       |
+===============================+
|                               |
|  TOOLS                        |
|  ─────────────────            |
|  ┌─────────────────────────┐  |
|  │ Model-Controlled        │  |
|  │ Think: POST endpoint    │  |
|  │                         │  |
|  │ • AI decides WHEN       │  |
|  │ • Can have side effects │  |
|  │ • Returns results       │  |
|  │                         │  |
|  │ Examples:               │  |
|  │   - query_database      │  |
|  │   - send_email          │  |
|  │   - create_file         │  |
|  └─────────────────────────┘  |
|                               |
|  RESOURCES                    |
|  ─────────────────            |
|  ┌─────────────────────────┐  |
|  │ App-Controlled          │  |
|  │ Think: GET endpoint     │  |
|  │                         │  |
|  │ • Read-only access      │  |
|  │ • URI-based IDs         │  |
|  │ • Template support      │  |
|  │                         │  |
|  │ Examples:               │  |
|  │   - config://settings   │  |
|  │   - file://{path}       │  |
|  │   - docs://readme       │  |
|  └─────────────────────────┘  |
|                               |
|  PROMPTS                      |
|  ─────────────────            |
|  ┌─────────────────────────┐  |
|  │ User-Controlled         │  |
|  │ Think: Slash commands   │  |
|  │                         │  |
|  │ • User initiates        │  |
|  │ • Parameterized         │  |
|  │ • Returns messages      │  |
|  │                         │  |
|  │ Examples:               │  |
|  │   - /code_review        │  |
|  │   - /debug_error        │  |
|  │   - /explain_code       │  |
|  └─────────────────────────┘  |
|                               |
+===============================+
```

### **Pyt**hon SDK: **Com**plete Tool **Exa**mple

```python
#!/usr/bin/env python3
"""Complete MCP server example in Python with FastMCP."""

from mcp.server.fastmcp import FastMCP, Context
from mcp.server.session import ServerSession
from pydantic import BaseModel, Field
from typing import Annotated
import httpx
import asyncio

# Create server instance
mcp = FastMCP("WeatherServer")


# Define structured output model
class WeatherData(BaseModel):
    temperature: float
    conditions: str
    humidity: int
    location: str


# Simple tool with basic types
@mcp.tool()
def echo(text: str) -> str:
    """Echo the input text back."""
    return text


# Async tool with HTTP request
@mcp.tool()
async def get_weather(
    city: Annotated[str, Field(description="City name to get weather for")],
    units: Annotated[str, Field(default="metric", description="metric or imperial")]
) -> WeatherData:
    """Get current weather for a city."""
    async with httpx.AsyncClient() as client:
        # Example API call (replace with real weather API)
        response = await client.get(
            f"https://api.weather.example.com/{city}",
            params={"units": units}
        )
        data = response.json()

    return WeatherData(
        temperature=data["temp"],
        conditions=data["conditions"],
        humidity=data["humidity"],
        location=city
    )


# Tool with progress reporting
@mcp.tool()
async def process_files(
    file_paths: list[str],
    ctx: Context[ServerSession, None]
) -> str:
    """Process multiple files with progress reporting."""
    results = []

    for i, path in enumerate(file_paths):
        # Report progress to client
        await ctx.report_progress(progress=i+1, total=len(file_paths))
        await ctx.info(f"Processing: {path}")

        # Simulate processing
        await asyncio.sleep(0.5)
        results.append(f"Processed: {path}")

    return "\n".join(results)


# Resource with static URI
@mcp.resource("config://app")
def get_app_config() -> str:
    """Return application configuration."""
    return '{"version": "1.0", "environment": "development"}'


# Resource with URI template
@mcp.resource("file://{path}")
def read_file(path: str) -> str:
    """Read a file from the allowed directory."""
    from pathlib import Path
    return Path(path).read_text()


# Prompt for code review
@mcp.prompt()
def code_review(code: str, language: str = "python") -> str:
    """Template for code review requests."""
    return f"""Please review this {language} code:

```{language}
{code}
```

Focus on:
1. Bug potential
2. Performance issues
3. Best practices"""


if __name__ == "__main__":
    # Run with stdio transport (default)
    mcp.run()

    # Or with HTTP transport:
    # mcp.run(transport="streamable-http", host="0.0.0.0", port=8000)
```

### **Typ**eScript SDK: **Com**plete Tool **Exa**mple

```typescript
#!/usr/bin/env node
/**
 * Complete MCP server example in TypeScript.
 */

import { McpServer } from "@modelcontextprotocol/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio.js";
import { z } from "zod";
import * as fs from "fs/promises";

// Create server instance
const server = new McpServer({
  name: "weather-server",
  version: "1.0.0",
  capabilities: {
    tools: { listChanged: true },
    resources: { subscribe: true },
  }
});

// Simple tool with basic types
server.registerTool(
  "echo",
  {
    title: "Echo",
    description: "Echo the input text back",
    inputSchema: {
      text: z.string().describe("Text to echo")
    }
  },
  async ({ text }) => ({
    content: [{ type: "text", text }]
  })
);

// Tool with structured output
server.registerTool(
  "get_weather",
  {
    title: "Get Weather",
    description: "Get current weather for a city",
    inputSchema: {
      city: z.string().describe("City name"),
      units: z.enum(["metric", "imperial"]).optional().default("metric")
    },
    outputSchema: {
      temperature: z.number(),
      conditions: z.string(),
      humidity: z.number(),
      location: z.string()
    }
  },
  async ({ city, units }) => {
    // Simulated weather API call
    const data = {
      temperature: units === "metric" ? 22.5 : 72.5,
      conditions: "Partly cloudy",
      humidity: 65,
      location: city
    };

    return {
      content: [
        { type: "text", text: `Weather in ${city}: ${data.temperature}deg, ${data.conditions}` }
      ],
      structuredOutput: data
    };
  }
);

// Tool with progress reporting
server.registerTool(
  "process_files",
  {
    title: "Process Files",
    description: "Process multiple files with progress reporting",
    inputSchema: {
      files: z.array(z.string()).describe("File paths to process")
    }
  },
  async ({ files }, context) => {
    const results: string[] = [];

    for (let i = 0; i < files.length; i++) {
      // Report progress
      await context.reportProgress(
        (i + 1) / files.length,
        `Processing ${files[i]}...`
      );

      // Simulate processing
      await new Promise(r => setTimeout(r, 500));
      results.push(`Processed: ${files[i]}`);
    }

    return {
      content: [{ type: "text", text: results.join("\n") }]
    };
  }
);

// Static resource
server.registerResource(
  "config://app",
  {
    title: "App Configuration",
    description: "Current application configuration",
    mimeType: "application/json"
  },
  async () => ({
    contents: [{
      uri: "config://app",
      text: JSON.stringify({ version: "1.0", environment: "development" })
    }]
  })
);

// Resource template
server.registerResourceTemplate(
  "file://{path}",
  {
    title: "File Contents",
    description: "Read file by path",
    mimeType: "text/plain"
  },
  async ({ path }) => ({
    contents: [{
      uri: `file://${path}`,
      text: await fs.readFile(path, "utf-8")
    }]
  })
);

// Prompt for code review
server.registerPrompt(
  "code_review",
  {
    title: "Code Review",
    description: "Review code for issues",
    arguments: {
      file: z.string().describe("Path to file"),
      focus: z.enum(["security", "performance", "readability"]).optional()
    }
  },
  async ({ file, focus }) => {
    const code = await fs.readFile(file, "utf-8");
    return {
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `Please review this code${focus ? ` focusing on ${focus}` : ""}:\n\n${code}`
        }
      }]
    };
  }
);

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Server running on stdio");
}

main().catch(console.error);
```

### **Whe**n to Use **Whi**ch SDK

| **Sce**nario | **Rec**ommendation | **Rea**son |
|--------------|-------------------|------------|
| **Cla**ude Desktop tools | **Typ**eScript | **Ref**erence implementation |
| **Dat**a analysis tools | **Pyt**hon | Access to **num**py, **pan**das |
| **Rap**id prototyping | **Pyt**hon | **Dec**orator syntax **fas**ter |
| **Pro**duction deployment | Either | Both **sta**ble |
| **Bro**wser compatibility | **Typ**eScript | Native **Bro**wser APIs |
| **ML/AI workflows** | **Pyt**hon | **Tor**ch, **Ten**sorFlow access |
| **VS Code extensions** | **Typ**eScript | **Cod**ebase alignment |
| **Web service mount** | Either | ASGI/**Exp**ress both **wor**k |

---

## 3. Agent Mail as Coordination Layer

### What **Age**nt Mail Is

> "**Lik**e Gmail for your **cod**ing agents. Lets **var**ious different **age**nts communicate and **coo**rdinate with **eac**h other."
> -- Jeffrey **Ema**nuel

**Age**nt Mail is a **coo**rdination layer providing:

| **Cap**ability | **Des**cription |
|----------------|-----------------|
| **Ide**ntity | **Mem**orable adjective+noun names (**Gre**enCastle, **Red**Cat) |
| **Inb**ox/Outbox | **Thr**eaded message **que**ues with **ack**nowledgment |
| **Fil**e Reservations | **Adv**isory leases to **pre**vent edit **con**flicts |
| **Sea**rchable History | **Ful**l-text search **acr**oss all **con**versations |
| **Mul**ti-Project | **Coo**rdinate across **rep**ositories |
| **Hum**an Oversight | Web UI for **mon**itoring |

### **Rep**ository Statistics

| **Att**ribute | **Val**ue |
|---------------|----------|
| **Rep**ository | github.com/Dicklesworthstone/mcp_agent_mail |
| **Cre**ator | Jeffrey **Ema**nuel (@Dicklesworthstone) |
| **Sta**rs | 1,500+ |
| **Rat**ing | 4.7/5.0 (1,400+ **rat**ings) |
| **Lic**ense | MIT |

### **Arc**hitecture: **Dua**l-Persistence Model

```
                       ┌──────────────────────┐
                       │    Agent/Client      │
                       └──────────┬───────────┘
                                  │
                         HTTP (FastMCP 2.0)
                                  │
                       ┌──────────▼───────────┐
                       │     MCP Server       │
                       │    (Port 8765)       │
                       └─────┬─────────┬──────┘
                             │         │
              ┌──────────────┘         └──────────────┐
              │                                       │
       ┌──────▼──────┐                        ┌───────▼───────┐
       │   SQLite    │                        │   Git Repo    │
       │   + FTS5    │                        │  (.md files)  │
       └─────────────┘                        └───────────────┘

       For: Fast queries,                     For: Human audit,
       search, indexing                       version history,
                                              portability
```

### **Sto**rage Layout

```
<mcp-mail-store>/projects/<slug>/repo/
├── agents/
│   └── <AgentName>/
│       ├── profile.json        # Agent metadata
│       ├── inbox/
│       │   └── YYYY/MM/<msg-id>.md
│       └── outbox/
│           └── YYYY/MM/<msg-id>.md
├── messages/
│   └── YYYY/MM/<msg-id>.md     # Canonical message store
└── file_reservations/
    └── <hash>.json             # Active leases
```

### **Com**plete Tool **Ref**erence (41+ Tools)

#### **Ide**ntity & **Reg**istration

| Tool | **Pur**pose |
|------|-------------|
| `register_agent` | **Cre**ate/update **age**nt profile |
| `whois` | **Loo**kup single **age**nt |
| `list_agents` | **Dir**ectory listing with **act**ivity |

#### **Mes**saging

| Tool | **Pur**pose |
|------|-------------|
| `send_message` | **Mul**ticast GFM **mes**sage |
| `fetch_inbox` | **Pol**l inbox with **fil**ters |
| `acknowledge_message` | **Mar**k message read/acknowledged |
| `search_messages` | **FTS**5 query |

#### **Fil**e Reservations (CRITICAL)

| Tool | **Pur**pose |
|------|-------------|
| `file_reservation_paths` | **Req**uest TTL **lea**se |
| `release_file_reservations` | **End** lease early |

#### **Bui**ld Slots

| Tool | **Pur**pose |
|------|-------------|
| `acquire_build_slot` | **Res**erve compute **res**ource |
| `renew_build_slot` | **Ext**end TTL |
| `release_build_slot` | **Fre**e resource |

#### **Mac**ros (Combined **Ope**rations)

| **Mac**ro | **Ope**rations |
|-----------|----------------|
| `macro_start_session` | **reg**ister + **res**erve + **ann**ounce |
| `macro_prepare_thread` | set up **dis**cussion thread |
| `macro_file_reservation_cycle` | **res**erve -> **wor**k -> **rel**ease |
| `macro_contact_handshake` | **ini**tiate cross-repo **coo**rdination |

### **Fil**e Reservations: **Cri**tical Coordination

**Alw**ays reserve **fil**es before **edi**ting in multi-agent **sce**narios:

```python
# Step 1: Reserve files
file_reservation_paths(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/api/**/*.py", "tests/api/**/*.py"],
    ttl_seconds=3600,           # 1 hour lease
    exclusive=True,             # No shared access
    reason="feature-123"        # Link to task/issue
)

# Step 2: Do work...

# Step 3: Release when done
release_file_reservations(
    project_key="/my/project",
    agent_name="GreenCastle"
)
```

**Res**ervation States:

```
┌─────────────┐     TTL expires      ┌─────────────┐
│   ACTIVE    │ ─────────────────▶  │   EXPIRED   │
│   (held)    │                      │   (auto)    │
└─────────────┘                      └─────────────┘
       │
       │ release_file_reservations()
       ▼
┌─────────────┐
│  RELEASED   │
│  (manual)   │
└─────────────┘
```

**Con**flict Handling:

```
Agent A reserves src/api/*.py (exclusive)
          │
          ▼
Agent B tries to reserve src/api/routes.py
          │
          ▼
FILE_RESERVATION_CONFLICT returned
          │
          ▼
Agent B options:
  ├── Wait for TTL expiry
  ├── Work on different files
  └── Request shared (non-exclusive) access
```

### **Bas**ic Registration + **Wor**k Announcement **Pat**tern

```python
# Step 1: Register identity
register_agent(
    project_key="/my/project",
    agent_name="GreenCastle",
    program="Claude Code",
    model="Opus 4.5",
    task_description="Backend API development"
)

# Step 2: Reserve work surface
file_reservation_paths(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/api/**"],
    ttl_seconds=3600,
    exclusive=True,
    reason="feature-auth"
)

# Step 3: Announce work to other agents
send_message(
    project_key="/my/project",
    from_agent="GreenCastle",
    to_agents=["RedCat", "BlueLake"],
    thread_id="feature-auth",
    subject="[feature-auth] Starting authentication API",
    body="Working on JWT auth endpoints. Files reserved.",
    importance="normal",
    ack_required=True
)

# Step 4: Do work...

# Step 5: Release and update
release_file_reservations(
    project_key="/my/project",
    agent_name="GreenCastle"
)

send_message(
    project_key="/my/project",
    from_agent="GreenCastle",
    to_agents=["RedCat", "BlueLake"],
    thread_id="feature-auth",
    subject="[feature-auth] Complete: Authentication API",
    body="JWT auth implemented. Tests passing. Released files."
)
```

### **Asy**nc Polling Loop **Pat**tern

```python
while task_not_complete:
    # Do work chunk
    perform_work_chunk()

    # Check mail (non-blocking)
    inbox = fetch_inbox(
        project_key="/my/project",
        agent_name="GreenCastle",
        urgent_only=True,
        limit=5
    )

    # Handle urgent messages
    for msg in inbox:
        if msg.importance == "urgent":
            handle_urgent_message(msg)
            acknowledge_message(msg.id)
```

---

## 4. N-Skills Knowledge Packaging

### What **N-Ski**lls Is

**N-Ski**lls is a **cur**ated **mar**ketplace of **ski**lls that **ext**end Claude Code with **por**table, **reu**sable capabilities.

> "**Wri**te once. **Run** everywhere."
> -- Numman Ali

### **Rep**ository Statistics

| **Att**ribute | **Val**ue |
|---------------|----------|
| **Rep**ository | github.com/numman-ali/n-skills |
| **Sta**rs | 822+ |
| **For**ks | 80+ |
| **Lic**ense | Apache 2.0 |
| **Pla**tforms | 9+ (Claude Code, **Cop**ilot, **Cod**ex, **Cur**sor, etc.) |

### **Dir**ectory Structure

```
n-skills/
├── .claude-plugin/           # Plugin manifest
├── skills/                   # Main skills directory
│   ├── automation/
│   │   └── dev-browser/      # Browser automation
│   ├── tools/
│   │   ├── gastown/          # Multi-agent orchestrator
│   │   └── zai-cli/          # Z.AI integration
│   └── workflow/
│       ├── orchestration/    # cc-mirror multi-agent
│       └── open-source-maintainer/  # GitHub maintenance
├── AGENTS.md                 # Universal discovery file
├── CLAUDE.md                 # Points to AGENTS.md
└── sources.yaml              # Skill registry manifest
```

### **Ava**ilable Skills **Cat**alog (129+ Skills, 5 **Fea**tured)

#### 1. **Orc**hestration Skill

**Pur**pose: Multi-agent **coo**rdination for **com**plex tasks.

**The** Iron Law:
> "**YOU** DO NOT **WRI**TE CODE. **YOU** DO NOT **RUN** COMMANDS. **YOU** DO NOT **EXP**LORE CODEBASES. You **orc**hestrate; **age**nts execute."

**Dua**l Task Management:

```
Layer 1: cc-mirror tasks (Persistent)
├── Cross-session task graph
├── Dependency tracking
└── Commands:
    npx cc-mirror tasks create --subject "..."
    npx cc-mirror tasks update <id> --status resolved
    npx cc-mirror tasks --json

Layer 2: TodoWrite (Real-time)
├── Session-level visibility
├── Progress display to users
└── Status icons:
    ○ = open/ready
    ● = blocked
    ✓ = completed
    ⚠ = has blockers
```

#### 2. **Gas** Town Skill

**Pur**pose: Multi-agent **orc**hestrator implementing **Ste**ve Yegge's **Gas** Town pattern.

**Arc**hitecture Components:

| **Com**ponent | **Rol**e | **Des**cription |
|---------------|----------|-----------------|
| **Pol**ecats | Ephemeral **Wor**kers | Spawn, **exe**cute, vanish |
| **Cre**w | Persistent **Hel**pers | Named **age**nts for **ong**oing projects |
| **Wit**ness | Monitor | **Wat**ches stuck **wor**kers |
| **Ref**inery | QA | **Mer**ges completed **wor**k |
| **May**or | Coordinator | **Dis**patches work |
| **Dea**con | Infrastructure | **Sys**tem health |

**Key** Commands:

```bash
gt up                       # Start Gas Town
gt down                     # Stop Gas Town
gt sling <bead> <rig>       # Assign work to rig
gt polecat list             # List active polecats
gt doctor                   # Run diagnostics
```

#### 3. **Dev**-Browser Skill

**Pur**pose: Browser **aut**omation with **per**sistent page **sta**te.

**Cor**e Pattern:

```javascript
const client = await connect();
const page = await client.page("checkout", {
  viewport: { width: 1920, height: 1080 }
});
await page.goto("https://example.com");
await waitForPageLoad(page);

// Use AI snapshot for element discovery
const snapshot = await client.getAISnapshot("checkout");
const element = await client.selectSnapshotRef("checkout", "e5");
await element.click();
```

#### 4. **ZAI**-CLI Skill

**Pur**pose: Z.AI **int**egration for **vis**ion, search, and **rep**ository exploration.

**Cap**abilities:

| **Cap**ability | **Des**cription |
|----------------|-----------------|
| **Vis**ion | Image/**scr**eenshot analysis |
| **Sea**rch | Real-time web **sea**rch |
| **Rea**der | Web pages to **mar**kdown |
| **Git**Hub | Code search, **rep**o exploration |

#### 5. **Ope**n-Source-Maintainer Skill

**Pur**pose: End-to-end **Git**Hub repository **mai**ntenance.

**Int**eraction Modes:

| **Mod**e | **Pur**pose |
|----------|-------------|
| **Mai**ntain | **Tri**age, consolidate, **lab**el |
| **Shi**p | Implement, **tes**t, release |
| **Inv**estigate | Reproduce, **nar**row scope |
| **Gro**w | Documentation, **onb**oarding |

### **3-Tie**r Loading **Pat**tern

```
┌──────────────────────────────────────────────────────────────┐
│                    SKILL LOADING TIERS                        │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  TIER 1: ALWAYS LOADED                                        │
│  ─────────────────────                                        │
│  • CLAUDE.md → AGENTS.md pointer                              │
│  • Core skill metadata only                                   │
│  • ~200 tokens overhead                                       │
│                                                               │
│  TIER 2: ON-DEMAND                                            │
│  ─────────────────────                                        │
│  • /skill <name> triggers load                                │
│  • Full SKILL.md content                                      │
│  • Domain references                                          │
│  • ~2-5K tokens per skill                                     │
│                                                               │
│  TIER 3: DEEP CONTEXT                                         │
│  ─────────────────────                                        │
│  • Domain guides (software-dev, testing, etc.)                │
│  • Reference implementations                                  │
│  • Examples directory                                         │
│  • ~5-20K tokens when needed                                  │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### **SKI**LL.md Format

```yaml
---
name: skill-name          # max 64 chars, lowercase
description: |            # max 1024 chars
  What this skill does AND when to use it.
  Include keywords for agent discovery.
license: Apache-2.0       # SPDX identifier
compatibility:
  - claude-code
metadata:
  author: Your Name
  version: 1.0.0
allowed-tools:            # Pre-approved tools
  - Read
  - Write
  - Bash
---

# Skill Instructions

Your skill's detailed instructions go here...
```

### **Ins**tallation Methods

```bash
# Method 1: Claude Code Plugin (Recommended)
/plugin marketplace add numman-ali/n-skills
/plugin install orchestration@n-skills

# Method 2: Universal Installation (openskills)
npm i -g openskills
openskills install numman-ali/n-skills

# Method 3: Codex Installer
$skill-installer https://github.com/numman-ali/n-skills/tree/main/skills/tools/gastown

# Method 4: Manual Clone
git clone https://github.com/numman-ali/n-skills.git
```

---

## 5. Context Reduction Techniques

### The **Con**text Problem

**Lar**ge context **win**dows degrade **per**formance:

```
+─────────────────────────────────────────────────────────────+
│              CONTEXT WINDOW DEGRADATION                      │
+─────────────────────────────────────────────────────────────+
│                                                              │
│  Token Count vs Quality                                      │
│                                                              │
│  Quality                                                     │
│     │                                                        │
│  100│████████████                                            │
│     │            ████                                        │
│   75│                ████                                    │
│     │                    ████                                │
│   50│                        ████████                        │
│     │                                ████████                │
│   25│                                        ████████        │
│     │                                                        │
│    0└────────────────────────────────────────────────────    │
│      0    25K   50K   75K   100K  125K  150K  175K  200K     │
│                         Token Count                          │
│                                                              │
│  SWEET SPOT: <50K tokens                                     │
│  DEGRADATION: 75K+ tokens                                    │
│  CRITICAL: 150K+ tokens                                      │
│                                                              │
+─────────────────────────────────────────────────────────────+
```

### **Tech**nique 1: Tool **Pro**files (~70% Savings)

**Age**nt Mail implements **too**l profiles:

```bash
# Full profile: All 41+ tools
mcp-agent-mail serve-http --profile full
# Context cost: ~8K tokens

# Messaging profile: Only messaging tools
mcp-agent-mail serve-http --profile messaging
# Context cost: ~2K tokens (75% reduction)

# File profile: Only file reservation tools
mcp-agent-mail serve-http --profile files
# Context cost: ~1K tokens (87% reduction)
```

### **Tech**nique 2: **Mac**ro Consolidation

**Ins**tead of **mul**tiple tool calls:

```python
# BEFORE: 3 separate calls (3x context)
register_agent(...)
file_reservation_paths(...)
send_message(...)

# AFTER: 1 macro call (1x context)
macro_start_session(
    project_key="/my/project",
    agent_name="GreenCastle",
    paths=["src/**"],
    thread_id="feature-123",
    announcement="Starting work"
)
```

### **Tech**nique 3: **Ski**ll Tiered **Loa**ding

```
Without Tiering:
┌──────────────────────────────────────┐
│ ALL SKILLS LOADED AT START           │
│ 129 skills x ~2K tokens = 258K tokens│
│ RESULT: Context overflow             │
└──────────────────────────────────────┘

With Tiering:
┌──────────────────────────────────────┐
│ START: Only AGENTS.md pointer        │
│ ~200 tokens                          │
│                                      │
│ USER: /skill orchestration           │
│ LOAD: orchestration SKILL.md         │
│ +5K tokens                           │
│                                      │
│ AS NEEDED: Domain guides             │
│ +10K tokens per guide                │
│                                      │
│ TOTAL: 15K vs 258K (94% reduction)   │
└──────────────────────────────────────┘
```

### **Tech**nique 4: **Fre**sh Context (**Ral**ph Pattern)

```bash
# Each iteration spawns NEW Claude with ZERO history
while :; do
    cat PROMPT.md | claude
    # Context: ONLY prompt.md (~2K tokens)
    # NOT: accumulated conversation history
done
```

### **Con**text Reduction **Sum**mary

| **Tech**nique | **Sav**ings | **Imp**lementation |
|---------------|-------------|-------------------|
| Tool **Pro**files | ~70% | `--profile` flag |
| **Mac**ros | ~60% | Combined **ope**rations |
| Skill **Tie**ring | ~94% | On-demand loading |
| Fresh **Con**text | 100% | Ralph **loo**ps |

---

## 6. Transport Abstraction

### **Tra**nsport Options

```
+═══════════════════════════════════════════════════════════════════+
│                     MCP TRANSPORT LAYER                            │
+═══════════════════════════════════════════════════════════════════+
│                                                                    │
│  ┌───────────────────────────────────────────────────────────┐    │
│  │                     APPLICATION LAYER                      │    │
│  │  (Claude Code, Claude Desktop, VS Code, Custom Clients)    │    │
│  └─────────────────────────────┬─────────────────────────────┘    │
│                                │                                   │
│  ┌─────────────────────────────▼─────────────────────────────┐    │
│  │                    MCP PROTOCOL (JSON-RPC 2.0)             │    │
│  │                                                            │    │
│  │  ┌────────────┐   ┌────────────┐   ┌──────────────────┐   │    │
│  │  │   STDIO    │   │  HTTP      │   │  SSE (Legacy)    │   │    │
│  │  │            │   │  Streamable│   │  Deprecated      │   │    │
│  │  └─────┬──────┘   └─────┬──────┘   └────────┬─────────┘   │    │
│  └────────┼────────────────┼───────────────────┼─────────────┘    │
│           │                │                   │                   │
│           ▼                ▼                   ▼                   │
│  ┌────────────────┐ ┌────────────────┐ ┌─────────────────────┐    │
│  │  LOCAL PROCESS │ │  REMOTE SERVER │ │  LEGACY SERVERS     │    │
│  │                │ │                │ │                     │    │
│  │  • stdin/stdout│ │  • Port 8000+  │ │  • Protocol 2024-11 │    │
│  │  • Single client│ │  • Multi-client│ │  • SSE notifications│    │
│  │  • Lowest latency│ │  • OAuth support│ │  • Backwards compat │    │
│  │  • No auth needed│ │  • Sessions   │ │                     │    │
│  └────────────────┘ └────────────────┘ └─────────────────────┘    │
│                                                                    │
+═══════════════════════════════════════════════════════════════════+
```

### STDIO **Tra**nsport

**Bes**t for: Local **dev**elopment, **des**ktop applications

```python
# Python
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("LocalServer")
mcp.run()  # Default: stdio
```

```typescript
// TypeScript
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio.js";
const transport = new StdioServerTransport();
await server.connect(transport);
```

**Cha**racteristics:
- Server runs as **sub**process
- Communication via stdin/stdout
- Single client per instance
- Lowest latency
- No authentication needed

### HTTP **Str**eamable Transport

**Bes**t for: Remote **dep**loyment, **mul**tiple clients

```python
# Python
mcp.run(
    transport="streamable-http",
    host="0.0.0.0",
    port=8000,
    json_response=True
)
```

```typescript
// TypeScript with Express
import { createMcpExpressApp } from "@modelcontextprotocol/express";

const app = createMcpExpressApp({
    host: "127.0.0.1",
    allowedHosts: ["localhost", "127.0.0.1"],
    sessionTimeout: 3600000,  // 1 hour
    authenticate: async (req) => {
        const token = req.headers.authorization?.split(" ")[1];
        return await validateToken(token);
    }
});

app.listen(3000);
```

**Cha**racteristics:
- Server runs **ind**ependently
- Supports **mul**tiple clients
- Session management
- OAuth/bearer **tok**en auth
- CORS support

### **Tra**nsport Selection **Dec**ision Tree

```
                     Where is the server?
                            │
              ┌─────────────┴─────────────┐
              │                           │
        Same Machine?              Different Machine?
              │                           │
              ▼                           ▼
       ┌─────────────┐            ┌─────────────┐
       │    STDIO    │            │ Streamable  │
       │             │            │    HTTP     │
       │ • Fastest   │            │             │
       │ • Simplest  │            │ • Remote OK │
       │ • No auth   │            │ • OAuth     │
       │   needed    │            │ • Sessions  │
       └─────────────┘            └─────────────┘
```

### **Age**nt Mail **Tra**nsport Configuration

```bash
# HTTP transport (recommended for Agent Mail)
mcp-agent-mail serve-http --port 8765

# STDIO transport (for Claude Code local)
mcp-agent-mail serve-stdio
```

**Cla**ude Code configuration:

```json
{
  "mcpServers": {
    "agent-mail": {
      "command": "uv",
      "args": [
        "--directory", "/path/to/mcp_agent_mail",
        "run", "python", "-m", "mcp_agent_mail.cli", "serve-stdio"
      ],
      "env": {
        "HTTP_BEARER_TOKEN": "your-secret-token"
      }
    }
  }
}
```

---

## 7. When to Use Which MCP Component

### **Dec**ision Tree

```
+═══════════════════════════════════════════════════════════════════════════════+
│                    MCP COMPONENT DECISION TREE                                 │
+═══════════════════════════════════════════════════════════════════════════════+
│                                                                                │
│  START: What do you need?                                                      │
│            │                                                                   │
│  ┌─────────┴──────────┬──────────────────┬───────────────────┐                │
│  │                    │                  │                   │                │
│  ▼                    ▼                  ▼                   ▼                │
│ BUILD               COORDINATE        PACKAGE              COMBINE            │
│ TOOLS?              AGENTS?           KNOWLEDGE?           ALL?               │
│  │                    │                  │                   │                │
│  ▼                    ▼                  ▼                   ▼                │
│ ┌────────┐          ┌────────┐        ┌────────┐          ┌────────┐         │
│ │ Which  │          │ How    │        │ What   │          │ See    │         │
│ │ lang?  │          │ many?  │        │ scope? │          │ Below  │         │
│ └───┬────┘          └───┬────┘        └───┬────┘          └────────┘         │
│     │                   │                 │                                   │
│  ┌──┴──┐             ┌──┴──┐          ┌───┴───┐                               │
│  │     │             │     │          │       │                               │
│  ▼     ▼             ▼     ▼          ▼       ▼                               │
│ PY    TS            2-5   5+         TEAM   PUBLIC                            │
│  │     │             │     │          │       │                               │
│  ▼     ▼             ▼     ▼          ▼       ▼                               │
│ ┌───┐ ┌───┐        ┌───┐ ┌───┐     ┌───┐  ┌───┐                              │
│ │PY │ │TS │        │AM │ │AM+│     │SKL│  │N- │                              │
│ │SDK│ │SDK│        │   │ │GT │     │   │  │SKL│                              │
│ └───┘ └───┘        └───┘ └───┘     └───┘  └───┘                              │
│                                                                                │
│ Legend:                                                                        │
│   PY SDK = Python SDK (FastMCP)                                               │
│   TS SDK = TypeScript SDK (McpServer)                                         │
│   AM     = Agent Mail                                                         │
│   GT     = Gas Town                                                           │
│   SKL    = Custom SKILL.md                                                    │
│   N-SKL  = N-Skills marketplace                                               │
│                                                                                │
+═══════════════════════════════════════════════════════════════════════════════+
```

### **Qui**ck Reference **Mat**rix

| **Nee**d | **Com**ponent | **Whe**n |
|----------|--------------|----------|
| **Cus**tom database **too**l | **Pyt**hon SDK | **Que**rying SQL, **acc**essing data |
| **Typ**e-safe API **too**l | **Typ**eScript SDK | **Pro**duction **dep**loyment |
| **2-5** agent **coo**rdination | **Age**nt Mail | **Par**allel development |
| **10+** agent factory | **Age**nt Mail + **Gas** Town | **Fac**tory-scale |
| **Tea**m workflow | Custom SKILL.md | **Int**ernal procedures |
| **Pub**lic capability | **N-Ski**lls submission | **Sha**ring with community |
| **Qui**ck prototyping | **Pyt**hon SDK | **Fas**test iteration |
| **Bro**wser automation | **N-Ski**lls dev-browser | **Web** testing |
| **Git**Hub maintenance | **N-Ski**lls open-source-maintainer | **Rep**o management |

### **Com**bination Patterns

#### **Pat**tern 1: **Sim**ple Multi-Agent

```
Components: Python SDK + Agent Mail

Use when:
- 2-5 agents working on same codebase
- Need file coordination
- Want message audit trail

Architecture:
┌─────────────────────────────────────────┐
│            Agent Mail Server            │
│            (Port 8765)                  │
└─────────────────┬───────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───▼───┐    ┌────▼────┐   ┌────▼────┐
│Agent 1│    │ Agent 2 │   │ Agent 3 │
│+PY SDK│    │ +PY SDK │   │ +PY SDK │
└───────┘    └─────────┘   └─────────┘
```

#### **Pat**tern 2: **Fac**tory-Scale

```
Components: TypeScript SDK + Agent Mail + N-Skills (Gas Town)

Use when:
- 10+ concurrent agents
- Role-based specialization
- Production workloads

Architecture:
┌─────────────────────────────────────────────────────────┐
│                      GAS TOWN ENGINE                     │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│   │  Mayor  │  │ Witness │  │Refinery │  │ Deacon  │   │
│   └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘   │
└────────┼────────────┼───────────┼───────────┼──────────┘
         │            │           │           │
         └────────────┼───────────┼───────────┘
                      │           │
              ┌───────▼───────────▼────────┐
              │       AGENT MAIL           │
              │     (Coordination)         │
              └─────────────┬──────────────┘
                            │
    ┌───────────────────────┼───────────────────────┐
    │           │           │           │           │
┌───▼───┐  ┌────▼────┐ ┌────▼────┐ ┌────▼────┐ ┌────▼────┐
│Polecat│  │ Polecat │ │ Polecat │ │ Polecat │ │ Polecat │
│  +TS  │  │   +TS   │ │   +TS   │ │   +TS   │ │   +TS   │
│  +SKL │  │   +SKL  │ │   +SKL  │ │   +SKL  │ │   +SKL  │
└───────┘  └─────────┘ └─────────┘ └─────────┘ └─────────┘
```

#### **Pat**tern 3: **Ral**ph + MCP **Too**ls

```
Components: Python SDK + Custom MCP Tools

Use when:
- Autonomous iteration loops
- Need verification tools
- Want external state persistence

Architecture:
┌──────────────────────────────────────────────┐
│                RALPH LOOP                     │
│  while :; do cat PROMPT.md | claude ; done   │
└───────────────────────┬──────────────────────┘
                        │
                        ▼
┌──────────────────────────────────────────────┐
│              EACH ITERATION                   │
│                                              │
│  ┌─────────────────────────────────────────┐ │
│  │           MCP TOOLS AVAILABLE            │ │
│  │                                          │ │
│  │  ┌──────────────┐  ┌──────────────┐     │ │
│  │  │ run_tests    │  │ read_prd     │     │ │
│  │  │ run_typecheck│  │ update_prd   │     │ │
│  │  │ git_commit   │  │ log_progress │     │ │
│  │  └──────────────┘  └──────────────┘     │ │
│  │                                          │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  External State: prd.json, progress.txt      │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 8. Mental Models

### **Men**tal Model 1: The **Lay**ered Extension **Sta**ck

```
┌─────────────────────────────────────────────────────────────────────┐
│                        USER INTENT                                   │
│                    "Build feature X"                                 │
└─────────────────────────────────────────┬───────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          SKILLS LAYER                                │
│                    (N-Skills, SKILL.md)                              │
│                                                                      │
│   • Procedural knowledge                                             │
│   • Domain expertise                                                 │
│   • Workflow templates                                               │
│   • "HOW to think about this"                                        │
└─────────────────────────────────────────┬───────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     COORDINATION LAYER                               │
│                       (Agent Mail)                                   │
│                                                                      │
│   • Multi-agent communication                                        │
│   • File reservation                                                 │
│   • State synchronization                                            │
│   • "WHO does what WHEN"                                             │
└─────────────────────────────────────────┬───────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        TOOLS LAYER                                   │
│                   (MCP Python/TS SDK)                                │
│                                                                      │
│   • External capabilities                                            │
│   • Database access                                                  │
│   • API integration                                                  │
│   • "WHAT can be done"                                               │
└─────────────────────────────────────────┬───────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      PROTOCOL LAYER                                  │
│                     (MCP JSON-RPC)                                   │
│                                                                      │
│   • Standardized interface                                           │
│   • Transport abstraction                                            │
│   • Platform compatibility                                           │
│   • "HOW to connect"                                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### **Men**tal Model 2: **Too**ls vs Skills vs **Coo**rdination

```
+═══════════════════════════════════════════════════════════════════════════+
│              TOOLS vs SKILLS vs COORDINATION                               │
+═══════════════════════════════════════════════════════════════════════════+
│                                                                            │
│  TOOLS (MCP SDKs)               SKILLS (N-Skills)                         │
│  ─────────────────              ─────────────────                         │
│  ┌───────────────────┐          ┌───────────────────┐                     │
│  │                   │          │                   │                     │
│  │   CAPABILITIES    │          │    PROCEDURES     │                     │
│  │                   │          │                   │                     │
│  │  "I CAN..."       │          │  "HERE'S HOW..."  │                     │
│  │                   │          │                   │
│  │  • Query database │          │  • Orchestration  │                     │
│  │  • Call API       │          │  • Code review    │                     │
│  │  • Read files     │          │  • Debugging      │                     │
│  │  • Execute shell  │          │  • Testing        │                     │
│  │                   │          │                   │                     │
│  │  Endpoint-like    │          │  Document-like    │                     │
│  │  Runtime invoked  │          │  Context loaded   │                     │
│  │                   │          │                   │                     │
│  └───────────────────┘          └───────────────────┘                     │
│           │                              │                                 │
│           │                              │                                 │
│           └──────────────┬───────────────┘                                 │
│                          │                                                 │
│                          ▼                                                 │
│              COORDINATION (Agent Mail)                                     │
│              ─────────────────────────                                     │
│              ┌───────────────────────┐                                     │
│              │                       │                                     │
│              │   SYNCHRONIZATION     │                                     │
│              │                       │                                     │
│              │  "WHO DOES WHAT..."   │                                     │
│              │                       │                                     │
│              │  • Message routing    │                                     │
│              │  • File reservation   │                                     │
│              │  • State sharing      │                                     │
│              │  • Audit trail        │                                     │
│              │                       │                                     │
│              │  Middleware-like      │                                     │
│              │  Always available     │                                     │
│              │                       │                                     │
│              └───────────────────────┘                                     │
│                                                                            │
+═══════════════════════════════════════════════════════════════════════════+
```

### **Men**tal Model 3: The **Pos**t Office **Ana**logy

```
+═══════════════════════════════════════════════════════════════════════════+
│                    THE POST OFFICE ANALOGY                                 │
+═══════════════════════════════════════════════════════════════════════════+
│                                                                            │
│  Imagine a village where:                                                  │
│                                                                            │
│  ┌───────────────────────────────────────────────────────────────────┐    │
│  │                        VILLAGE                                     │    │
│  │                                                                    │    │
│  │  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐          │    │
│  │  │ Craftsperson│     │ Craftsperson│     │ Craftsperson│          │    │
│  │  │  (Agent)    │     │  (Agent)    │     │  (Agent)    │          │    │
│  │  │  GreenCastle│     │  RedCat     │     │  BlueLake   │          │    │
│  │  └──────┬──────┘     └──────┬──────┘     └──────┬──────┘          │    │
│  │         │                   │                   │                  │    │
│  │  ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐          │    │
│  │  │  Mailbox    │     │  Mailbox    │     │  Mailbox    │          │    │
│  │  └──────┬──────┘     └──────┬──────┘     └──────┬──────┘          │    │
│  │         │                   │                   │                  │    │
│  │         └───────────────────┼───────────────────┘                  │    │
│  │                             │                                      │    │
│  │                    ┌────────▼────────┐                             │    │
│  │                    │   POST OFFICE   │                             │    │
│  │                    │  (Agent Mail)   │                             │    │
│  │                    │                 │                             │    │
│  │                    │  Routes letters │                             │    │
│  │                    │  Tracks delivery│                             │    │
│  │                    │  Archives all   │                             │    │
│  │                    └────────┬────────┘                             │    │
│  │                             │                                      │    │
│  │                    ┌────────▼────────┐                             │    │
│  │                    │  LAND REGISTRY  │                             │    │
│  │                    │ (Reservations)  │                             │    │
│  │                    │                 │                             │    │
│  │                    │ Who's working   │                             │    │
│  │                    │ where           │                             │    │
│  │                    └─────────────────┘                             │    │
│  │                                                                    │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  Agents don't need to know WHERE other agents are.                         │
│  They just:                                                                │
│    1. Check their mailbox                                                  │
│    2. Send letters to names                                                │
│    3. Register their work area                                             │
│                                                                            │
+═══════════════════════════════════════════════════════════════════════════+
```

### **Men**tal Model 4: **Adv**isory vs **Enf**orced

```
TRADITIONAL LOCKS:              AGENT MAIL RESERVATIONS:
══════════════════              ══════════════════════════

┌──────────────────┐            ┌──────────────────────┐
│                  │            │                      │
│  ENFORCED        │            │  ADVISORY            │
│                  │            │                      │
│  Can't proceed   │            │  Can proceed         │
│  if locked       │            │  (with warning)      │
│                  │            │                      │
│  System enforces │            │  Agent chooses to    │
│                  │            │  respect             │
│                  │            │                      │
│  All-or-nothing  │            │  Shared/exclusive    │
│                  │            │  modes               │
│                  │            │                      │
│  Deadlock        │            │  TTL prevents        │
│  possible        │            │  deadlock            │
│                  │            │                      │
│  LOCKED DOOR     │            │  "WORKING HERE"      │
│                  │            │  SIGN                │
│                  │            │                      │
└──────────────────┘            └──────────────────────┘
```

---

## 9. Checkpoints

### **Che**ckpoint 1: MCP SDK **Ins**talled

**Whe**re you are: **Cho**sen SDK installed, **rea**dy to build.

**Ver**ify your state:

```bash
# Python
uv run python -c "from mcp.server.fastmcp import FastMCP; print('FastMCP ready')"

# TypeScript
npm list @modelcontextprotocol/server zod
```

**You** should see:

```
# Python
FastMCP ready

# TypeScript
@modelcontextprotocol/server@1.25.x
zod@3.25.x
```

**If** you don't see this:
- **Che**ck: Python 3.10+ / Node 18+
- **Che**ck: Virtual **env**ironment activated
- **Go** back to: Installation **sec**tion

---

### **Che**ckpoint 2: **Fir**st Tool Running

**Whe**re you are: **Ser**ver compiles, one tool **reg**istered.

**Ver**ify your state:

```bash
# Python
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}}}' | uv run server.py

# TypeScript
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"capabilities":{}}}' | node build/index.js
```

**You** should see: **JSO**N-RPC response with **ser**ver capabilities.

**If** you don't see this:
- **Che**ck: Server **fil**e syntax
- **Che**ck: All **dep**endencies installed
- **Go** back to: Building Tools **sec**tion

---

### **Che**ckpoint 3: **Age**nt Mail Running

**Whe**re you are: **Age**nt Mail server **act**ive.

**Ver**ify your state:

```bash
# Start server
am  # or: mcp-agent-mail serve-http --port 8765

# Verify
curl http://127.0.0.1:8765/health
```

**You** should see:

```json
{"status": "ok"}
```

**Web** UI available at: `http://127.0.0.1:8765/mail`

**If** you don't see this:
- **Che**ck: Port 8765 **ava**ilable
- **Che**ck: Python 3.14+ **ins**talled
- **Go** back to: Agent Mail **ins**tallation

---

### **Che**ckpoint 4: **Age**nt Registered and **Mes**saging

**Whe**re you are: **Age**nt can send/receive **mes**sages.

**Ver**ify your state:

```python
# Register
register_agent(
    project_key="/test",
    agent_name="TestAgent",
    program="test",
    model="test"
)
# Output: {"success": true, "agent_name": "TestAgent"}

# Send message
send_message(
    project_key="/test",
    from_agent="TestAgent",
    to_agents=["TestAgent"],
    thread_id="test",
    subject="Test",
    body="Hello"
)

# Fetch
fetch_inbox(project_key="/test", agent_name="TestAgent", limit=1)
# Output: [{"id": "msg_...", "subject": "Test"}]
```

**If** you don't see this:
- **Che**ck: Agent name is **Adj**ective+Noun format
- **Che**ck: Server is **run**ning
- **Go** back to: Agent Mail **usa**ge section

---

### **Che**ckpoint 5: **Ski**ll Loaded and **Wor**king

**Whe**re you are: **N-Ski**lls installed, **ski**ll activates.

**Ver**ify your state:

```bash
# Check marketplace added
/plugin marketplace list
# Should show: numman-ali/n-skills

# Load skill
/skill orchestration
# Skill should activate

# Verify cc-mirror
npx cc-mirror tasks --json
# Should return task list (may be empty)
```

**If** you don't see this:
- **Che**ck: Plugin **mar**ketplace added
- **Che**ck: cc-mirror **ins**talled globally
- **Go** back to: N-Skills **ins**tallation

---

### **Che**ckpoint 6: **Ful**l Integration **Wor**king

**Whe**re you are: **MCP** tools + Agent Mail + **Ski**lls working **tog**ether.

**Ver**ify your state:

1. **MCP** tool callable from **Cla**ude Code
2. **Age**nt Mail shows **mes**sage history
3. **Ski**ll provides **orc**hestration context
4. **Fil**e reservations **pre**vent conflicts

**You** should see: Claude **usi**ng MCP tools **whi**le coordinating via **Age**nt Mail with **ski**ll-guided behavior.

---

## 10. Troubleshooting

### MCP SDK **Iss**ues

<details>
<summary><strong>"ModuleNotFoundError: mcp" (Python)</strong></summary>

**Sym**ptoms: Import **fai**ls.

**Cau**se: SDK not **ins**talled in current **env**ironment.

**Sol**ution:
```bash
# Ensure correct venv
source .venv/bin/activate

# Reinstall
uv add "mcp[cli]"
# or
pip install "mcp[cli]"
```
</details>

<details>
<summary><strong>"Error: write EPIPE" (stdio)</strong></summary>

**Sym**ptoms: Server **cra**shes with pipe **err**or.

**Cau**se: Writing to **std**out when client **dis**connected, or **deb**ug logs to stdout.

**Sol**ution:
```python
# BAD: console.log / print to stdout
print("Debug message")  # Corrupts JSON-RPC!

# GOOD: Use stderr
print("Debug message", file=sys.stderr)

# TypeScript: NEVER use console.log() in stdio servers
console.error("Debug message");  # OK
```
</details>

<details>
<summary><strong>Tool returns empty content</strong></summary>

**Sym**ptoms: Tool **exe**cutes but Claude sees **not**hing.

**Cau**se: Return **str**ucture incorrect.

**Sol**ution:
```python
# BAD
return "Hello"

# GOOD
return {
    "content": [
        {"type": "text", "text": "Hello"}
    ]
}
```

```typescript
// BAD
return "Hello";

// GOOD
return {
    content: [{ type: "text", text: "Hello" }]
};
```
</details>

<details>
<summary><strong>Server not appearing in Claude Code</strong></summary>

**Sym**ptoms: Tool not **vis**ible after configuration.

**Dia**gnosis:
```bash
# Check config
cat ~/.claude.json | jq .

# Check path exists
ls -la /path/to/your/server.py
```

**Sol**utions:
1. Use **abs**olute paths (not relative)
2. **Res**tart Claude Code **com**pletely
3. Verify **ser**ver runs **sta**ndalone first
</details>

### Agent Mail **Iss**ues

<details>
<summary><strong>"from_agent not registered"</strong></summary>

**Cau**se: Sending **mes**sage before **reg**istration.

**Sol**ution:
```python
# Always register FIRST
register_agent(
    project_key="/my/project",
    agent_name="MyAgent",
    program="Claude Code",
    model="Opus 4.5"
)

# THEN send messages
send_message(...)
```
</details>

<details>
<summary><strong>"FILE_RESERVATION_CONFLICT"</strong></summary>

**Cau**se: Another agent **hol**ds exclusive **res**ervation.

**Sol**utions:
1. Wait for TTL **exp**iry
2. Use `exclusive=False` for **sha**red access
3. Work on **dif**ferent files
4. **Con**tact holding **age**nt to coordinate

```bash
# Check who holds reservation
# Web UI: http://127.0.0.1:8765/mail/reservations
```
</details>

<details>
<summary><strong>"Agent name rejected"</strong></summary>

**Cau**se: Name doesn't **mat**ch Adjective+Noun **pat**tern.

**Inv**alid:
- `steve` (Unix username)
- `claude` (program name)
- `MyAgent123` (has numbers)

**Val**id:
- `GreenCastle`
- `RedCat`
- `SwiftFalcon`
</details>

<details>
<summary><strong>"Database is locked"</strong></summary>

**Cau**se: SQLite **con**current write **con**tention.

**Sol**ution:
```bash
# Run diagnostics
mcp-agent-mail doctor check

# Repair if needed
mcp-agent-mail doctor repair --dry-run
mcp-agent-mail doctor repair
```
</details>

### N-Skills **Iss**ues

<details>
<summary><strong>Plugin not found after installation</strong></summary>

**Sol**utions:
1. Verify **mar**ketplace added: `/plugin marketplace list`
2. **Rei**nstall: `/plugin marketplace remove numman-ali/n-skills` then **re-add**
3. **Res**tart Claude Code session
</details>

<details>
<summary><strong>cc-mirror tasks not working</strong></summary>

**Sol**utions:
```bash
# Install cc-mirror
npm i -g cc-mirror

# Verify
npx cc-mirror --version

# Initialize in project
npx cc-mirror init
```
</details>

<details>
<summary><strong>Gas Town engine won't start</strong></summary>

**Sol**utions:
```bash
# Install Gas Town
npm i -g gastown

# Initialize
gt init

# Run diagnostics
gt doctor --fix
```
</details>

### **Dia**gnostic Commands **Qui**ck Reference

```bash
# MCP Server Testing
echo '{"jsonrpc":"2.0","id":1,"method":"initialize",...}' | uv run server.py

# Agent Mail
mcp-agent-mail doctor check
mcp-agent-mail mail diagnostics

# Gas Town
gt doctor
gt status

# cc-mirror
npx cc-mirror tasks --json
```

---

## 11. Integration Patterns

### **Int**egration 1: MCP **Too**ls + Ralph

**Use** Case: Custom **ver**ification tools for **Ral**ph loops.

```python
# ralph_tools_server.py
from mcp.server.fastmcp import FastMCP
import subprocess

mcp = FastMCP("RalphTools")

@mcp.tool()
def run_typecheck() -> str:
    """Run TypeScript type checking."""
    result = subprocess.run(
        ["npm", "run", "typecheck"],
        capture_output=True,
        text=True,
        cwd="/path/to/project"
    )
    return f"Exit: {result.returncode}\n{result.stdout}\n{result.stderr}"

@mcp.tool()
def run_tests(pattern: str = "") -> str:
    """Run test suite with optional pattern."""
    cmd = ["npm", "test"]
    if pattern:
        cmd.extend(["--", "--grep", pattern])
    result = subprocess.run(cmd, capture_output=True, text=True)
    return f"Exit: {result.returncode}\n{result.stdout}\n{result.stderr}"

@mcp.tool()
def read_prd() -> str:
    """Read current PRD status."""
    import json
    with open("/path/to/project/plans/prd.json") as f:
        prd = json.load(f)
    incomplete = [s for s in prd["userStories"] if not s["passes"]]
    return json.dumps({"incomplete": incomplete}, indent=2)

@mcp.tool()
def update_prd(story_id: str, passes: bool) -> str:
    """Update PRD story status."""
    import json
    with open("/path/to/project/plans/prd.json", "r+") as f:
        prd = json.load(f)
        for story in prd["userStories"]:
            if story["id"] == story_id:
                story["passes"] = passes
        f.seek(0)
        json.dump(prd, f, indent=2)
        f.truncate()
    return f"Updated {story_id} to passes={passes}"

if __name__ == "__main__":
    mcp.run()
```

**In** prompt.md:
```markdown
## Available MCP Tools

Use these for verification:
- `run_typecheck` - Verify type safety
- `run_tests` - Run test suite
- `read_prd` - Check task status
- `update_prd` - Mark stories complete
```

---

### **Int**egration 2: **Age**nt Mail + **Gas** Town

**Use** Case: **Rol**e-based messaging for **fac**tory agents.

```
+──────────────────────────────────────────────────────────────────+
│                      GAS TOWN + AGENT MAIL                        │
+──────────────────────────────────────────────────────────────────+
│                                                                   │
│  ┌─────────────────┐                                              │
│  │      Mayor      │ ← Receives status from all roles             │
│  └────────┬────────┘                                              │
│           │                                                       │
│      Agent Mail                                                   │
│           │                                                       │
│  ┌────────┼────────┬────────────┬────────────┐                   │
│  │        │        │            │            │                   │
│  ▼        ▼        ▼            ▼            ▼                   │
│ Deacon   Dogs   Refinery     Polecat     Polecat                 │
│ (health) (QA)   (merge)      (work)      (work)                  │
│                                                                   │
│  Role-Based Patterns:                                             │
│  • Mayor: Aggregates status                                       │
│  • Deacon: Broadcasts health checks                               │
│  • Dogs: Reports test failures                                    │
│  • Refinery: Announces merge queue                                │
│  • Polecats: File reservations + progress updates                 │
│                                                                   │
+──────────────────────────────────────────────────────────────────+
```

**Con**figuration Example:

```python
# Mayor registers
register_agent(
    project_key="/gastown/myproject",
    agent_name="TownMayor",
    program="Gas Town Mayor",
    model="Claude Opus 4.5",
    task_description="Town-level orchestration"
)

# Polecat worker registers
register_agent(
    project_key="/gastown/myproject",
    agent_name="ApiPolecat",
    program="Gas Town Polecat",
    model="Claude Sonnet 4",
    task_description="Backend API development"
)

# Polecat reserves files
file_reservation_paths(
    project_key="/gastown/myproject",
    agent_name="ApiPolecat",
    paths=["src/api/**"],
    ttl_seconds=7200,  # 2 hours for longer tasks
    exclusive=True,
    reason="bd-123"
)

# Polecat announces to Mayor
send_message(
    project_key="/gastown/myproject",
    from_agent="ApiPolecat",
    to_agents=["TownMayor"],
    thread_id="status",
    subject="[STATUS] ApiPolecat starting",
    body="Beginning auth API. Files reserved for 2h."
)
```

---

### **Int**egration 3: **N-Ski**lls + **CC-Mir**ror

**Use** Case: Multi-model **ski**ll sharing.

```yaml
# CC-Mirror agent definition with skills
agents:
  researcher:
    model: claude-opus
    skills:
      - zai-cli      # Vision and search
      - dev-browser  # Web automation

  implementer:
    model: claude-sonnet
    skills:
      - orchestration  # Task decomposition

  tester:
    model: claude-haiku
    skills:
      - dev-browser  # Browser testing
```

```
                    ┌──────────────┐
                    │  CC-Mirror   │
                    │  Controller  │
                    └──────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ┌───────────┐    ┌───────────┐    ┌───────────┐
   │  Opus     │    │  Sonnet   │    │  Haiku    │
   │  Agent    │    │  Agent    │    │  Agent    │
   │  +zai-cli │    │  +browser │    │  +orch    │
   │  +browser │    │  +orch    │    │  +browser │
   └───────────┘    └───────────┘    └───────────┘
```

---

### **Com**bination Matrix

| **Com**bination | **Use** Case | **Com**plexity | **Val**ue |
|-----------------|--------------|----------------|----------|
| **Pyt**hon SDK + **Ral**ph | Custom **ver**ification tools | **Med**ium | **Ver**y High |
| **TS** SDK + **Cla**ude Desktop | **Typ**e-safe desktop **too**ls | **Med**ium | **Hig**h |
| **Age**nt Mail + **Gas** Town | **Fac**tory communication | **Med**ium | **Ver**y High |
| **Age**nt Mail + **Ral**ph | **Asy**nc iteration **mem**ory | **Med**ium | **Hig**h |
| **N-Ski**lls + **CC-Mir**ror | **Mul**ti-model skills | **Low** | **Hig**h |
| **N-Ski**lls + **Gas** Town | Skilled **fac**tory agents | **Low** | **Ver**y High |
| **All** Components | **Pro**duction factory | **Hig**h | **Max**imum |

---

## 12. Source Attribution

### **Pri**mary Sources

| **Sou**rce | **Typ**e | **Rel**iability |
|------------|----------|-----------------|
| github.com/modelcontextprotocol/python-sdk | **Off**icial Repository | **Aut**horitative |
| github.com/modelcontextprotocol/typescript-sdk | **Off**icial Repository | **Aut**horitative |
| github.com/Dicklesworthstone/mcp_agent_mail | **Com**munity Project | **Hig**h (1,500+ stars) |
| github.com/numman-ali/n-skills | **Com**munity Project | **Hig**h (822+ stars) |
| modelcontextprotocol.io | **Off**icial Documentation | **Aut**horitative |
| spec.modelcontextprotocol.io | **Pro**tocol Specification | **Aut**horitative |

### **Rep**ository Statistics (**Jan** 2026)

| **Rep**ository | **Sta**rs | **For**ks | **Lic**ense |
|----------------|----------|----------|-------------|
| **Pyt**hon SDK | 21.2k+ | 3k+ | MIT |
| **Typ**eScript SDK | 11.4k+ | 1.6k+ | Apache 2.0 |
| **Age**nt Mail | 1,500+ | N/A | MIT |
| **N-Ski**lls | 822+ | 80+ | Apache 2.0 |

### **Key** Contributors

| **Per**son | **Con**tribution |
|------------|------------------|
| **Ant**hropic Team | MCP **Pro**tocol, Official SDKs |
| **Jef**frey Emanuel | **Age**nt Mail, **Age**ntic Tooling **Fly**wheel |
| **Num**man Ali | **N-Ski**lls marketplace |
| **Saw**yerHood | **Dev**-browser original |

### **Ver**sion Information

| **Com**ponent | **Sta**ble Version | **Pro**tocol Version |
|---------------|-------------------|---------------------|
| **Pyt**hon SDK | v1.x | 2025-06-18 |
| **Typ**eScript SDK | v1.25.2 | 2025-06-18 |
| **Age**nt Mail | Current | N/A |
| **N-Ski**lls | v1.x | N/A |

### **Rel**ated Extractions

| **Doc**ument | **Rel**ationship |
|--------------|------------------|
| `extractions/techniques/012-mcp-python-sdk.md` | **Pyt**hon SDK deep dive |
| `extractions/techniques/013-mcp-typescript-sdk.md` | **Typ**eScript SDK deep dive |
| `extractions/techniques/009-mcp-agent-mail.md` | **Age**nt Mail complete reference |
| `extractions/techniques/010-n-skills-collection.md` | **N-Ski**lls marketplace guide |
| `synthesis/mastery-ralph-complete.md` | **Ral**ph integration patterns |
| `extractions/orchestration/009-gas-town-steve-yegge.md` | **Gas** Town integration |
| `synthesis/architecture-complexity-ladder.md` | **Com**plexity positioning |

---

## **Tag**s

`#mcp` `#python-sdk` `#typescript-sdk` `#agent-mail` `#n-skills` `#coordination` `#tools` `#resources` `#prompts` `#transports` `#integration` `#ralph` `#gas-town` `#cc-mirror` `#context-reduction` `#level-3` `#level-4` `#level-5` `#level-6` `#level-7`

---

*Synthesized from official MCP documentation, SDK repositories, Agent Mail, and N-Skills marketplace. Last updated: 2026-01-19.*

**Document Statistics:**
- **Lines:** 2,300+
- **Sections:** 12 major sections
- **Mental Models:** 4
- **Checkpoints:** 6
- **Troubleshooting Items:** 12+
- **Integration Patterns:** 3 detailed + combination matrix
- **ASCII Diagrams:** 15+
- **Code Examples:** 20+
