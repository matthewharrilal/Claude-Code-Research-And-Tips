# MCP TypeScript SDK: Complete Implementation Guide

**Deep Extraction Document**

---

## D-FINAL Connection

**This source contributes to:**
- D-FINAL-implementation.md: Section 4.2 (MCP Integration Patterns)
- D-FINAL-architecture.md: Section 5.3 (External Tool Architecture)

**Coverage in D-FINAL:** New addition - awaiting integration
**High-value unique content:** Type-safe MCP development, SDK architecture, custom tool building, framework adapters

**Journey references:**
- synthesis/architecture-complexity-ladder.md (Level 3-6 external integration)
- extractions/techniques/research-mcp-servers-expanded.md (MCP ecosystem context)
- extractions/techniques/009-mcp-agent-mail.md (Coordination infrastructure)

**Last enhanced:** 2026-01-19 (Initial extraction)

---

## Source Attribution

| Attribute | Value |
|-----------|-------|
| **Repository** | [github.com/modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) |
| **Creator** | Anthropic / Model Context Protocol Working Group |
| **Current Version** | v1.25.2 (stable), v2 (pre-alpha) |
| **Protocol Version** | 2025-06-18 |
| **Language** | TypeScript |
| **Stars** | 11.4k+ |
| **Forks** | 1.6k+ |
| **Contributors** | 144 |
| **License** | Apache 2.0 (new) / MIT (existing) |

---

## Table of Contents

1. [You Are Here](#1-you-are-here)
2. [What This Is](#2-what-this-is)
3. [Why It Matters](#3-why-it-matters)
4. [Architecture Deep Dive](#4-architecture-deep-dive)
5. [Key Features](#5-key-features)
6. [Installation & Setup](#6-installation--setup)
7. [Configuration Options](#7-configuration-options)
8. [Building Custom Tools](#8-building-custom-tools)
9. [Integration Patterns](#9-integration-patterns)
10. [Mental Models](#10-mental-models)
11. [Checkpoints](#11-checkpoints)
12. [Troubleshooting](#12-troubleshooting)
13. [Source Attribution & References](#13-source-attribution--references)

---

## 1. You Are Here

### Position on the Complexity Ladder

```
+=========================================================================+
|                     COMPLEXITY LADDER POSITION                          |
+=========================================================================+
|                                                                         |
|  Level 0: Single session, one task            [ ]                       |
|  Level 1: Hooks and automation                [ ]                       |
|  Level 2: Skills and enhanced context         [ ]                       |
|  Level 3: External tool integration           [*] <-- MCP TS SDK STARTS |
|  Level 4: Native orchestration (CC Mirror)    [*] <-- HERE              |
|  Level 5: Multi-instance coordination         [*] <--                   |
|  Level 6: Factory components                  [*] <--                   |
|  Level 7: Factory-scale (Gas Town)            [ ]                       |
|                                                                         |
+=========================================================================+
```

### Where the TypeScript SDK Fits

The MCP TypeScript SDK is **foundational infrastructure** for building type-safe MCP servers and clients. It enables:

- **Level 3:** Custom tools for Claude Code (database access, API integration)
- **Level 4:** Tools that enhance CC Mirror capabilities
- **Level 5:** Inter-agent communication tools (like MCP Agent Mail)
- **Level 6:** Factory components with type-safe interfaces

### Prerequisites

Before diving into the TypeScript SDK, you should understand:

1. **TypeScript Basics** - Types, interfaces, async/await
2. **MCP Core Concepts** - Tools, Resources, Prompts (see research-mcp-servers-expanded.md)
3. **JSON-RPC 2.0** - The protocol MCP is built on
4. **Zod** - Schema validation library (required peer dependency)

### What You'll Learn

By the end of this extraction, you will understand:

1. Why type-safe MCP development matters
2. The SDK's architecture and package structure
3. How to build custom tools, resources, and prompts
4. Integration patterns with Ralph, Gas Town, and CC Mirror
5. Transport options and deployment patterns
6. Common issues and their solutions

---

## 2. What This Is

### The One-Line Summary

> "The official TypeScript SDK for building MCP servers and clients with full type safety."

### The Core Concept

The MCP TypeScript SDK enables developers to:

| Capability | Description |
|------------|-------------|
| **Build Servers** | Expose tools, resources, and prompts to MCP clients |
| **Build Clients** | Connect to MCP servers and consume their capabilities |
| **Type Safety** | Full TypeScript types with Zod schema validation |
| **Multiple Transports** | Stdio for local, Streamable HTTP for remote |
| **Framework Adapters** | Express, Hono, and Node.js HTTP integrations |

### Split Package Design

The SDK follows a modular architecture:

```
@modelcontextprotocol/
├── server          # Server-side: tools, resources, prompts, transports
├── client          # Client-side: connections, OAuth, high-level helpers
├── core            # Shared types and protocol definitions
├── node            # Node.js HTTP wrapper (optional middleware)
├── express         # Express integration (optional middleware)
└── hono            # Hono integration (optional middleware)
```

### What Problem It Solves

**Without the SDK:**
- Manual JSON-RPC message handling
- No type checking on tool inputs/outputs
- Custom transport implementations
- Error-prone schema definitions

**With the SDK:**
```typescript
// Type-safe tool definition with Zod
server.registerTool(
  "weather",
  {
    description: "Get weather for a location",
    inputSchema: {
      location: z.string().describe("City name"),
      units: z.enum(["metric", "imperial"]).optional()
    }
  },
  async ({ location, units }) => {
    // location is typed as string, units as "metric" | "imperial" | undefined
    const data = await fetchWeather(location, units);
    return { content: [{ type: "text", text: data }] };
  }
);
```

### What It Is NOT

| Not This | But This |
|----------|----------|
| An MCP server collection | SDK for building your own servers |
| Orchestration framework | Building block for orchestration tools |
| Replacement for Claude Code | Enhancement for Claude Code capabilities |
| Python SDK | TypeScript-specific implementation |

---

## 3. Why It Matters

### Type Safety at Protocol Boundaries

The biggest source of bugs in MCP integrations is **schema mismatches**:

```typescript
// Without SDK: runtime errors
const tool = { inputSchema: { location: "string" } }; // Wrong!
const result = await callTool({ loc: "NYC" }); // Typo not caught!

// With SDK: compile-time errors
const inputSchema = {
  location: z.string().describe("City name") // Zod catches type issues
};
// TypeScript catches: { loc: "NYC" } - property 'location' is missing
```

### Production-Ready Transports

The SDK handles transport complexity:

| Transport | Use Case | Features |
|-----------|----------|----------|
| **Stdio** | Local process communication | Lowest latency, simplest setup |
| **Streamable HTTP** | Remote/deployed servers | SSE notifications, OAuth, session management |
| **HTTP + SSE (Legacy)** | Backwards compatibility | Protocol version 2024-11-05 |

### Framework Integration

Optional middleware packages reduce boilerplate:

```typescript
// Express integration
import { createMcpExpressApp } from "@modelcontextprotocol/express";
const app = createMcpExpressApp({ host: "0.0.0.0" });

// Hono integration
import { createMcpHonoApp } from "@modelcontextprotocol/hono";
const app = createMcpHonoApp();
```

### Ecosystem Compatibility

The TypeScript SDK is the reference implementation used by:
- Claude Desktop
- Claude Code
- VS Code MCP extensions
- Third-party MCP clients

Building with the official SDK ensures compatibility across the ecosystem.

---

## 4. Architecture Deep Dive

### Package Structure

```
typescript-sdk/
├── packages/
│   ├── core/           # Protocol types, JSON-RPC primitives
│   │   ├── src/
│   │   │   ├── types/  # Tool, Resource, Prompt type definitions
│   │   │   ├── protocol/ # JSON-RPC message formats
│   │   │   └── experimental/ # Preview features (tasks)
│   │   └── index.ts
│   │
│   ├── server/         # Server implementation
│   │   ├── src/
│   │   │   ├── server/
│   │   │   │   ├── mcp.js         # McpServer class
│   │   │   │   ├── stdio.js       # StdioServerTransport
│   │   │   │   ├── streamableHttp.js # StreamableHTTPServerTransport
│   │   │   │   └── completable.js # Completion helpers
│   │   │   └── experimental/      # Task-based execution
│   │   └── index.ts
│   │
│   ├── client/         # Client implementation
│   │   ├── src/
│   │   │   ├── client.js          # Client class
│   │   │   ├── transports/        # Transport implementations
│   │   │   └── auth/              # OAuth helpers
│   │   └── index.ts
│   │
│   └── middleware/     # Framework adapters
│       ├── node/
│       ├── express/
│       └── hono/
│
└── examples/           # Reference implementations
    ├── server/         # Example servers
    ├── client/         # Example clients
    └── shared/         # Shared utilities
```

### Server Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       McpServer                              │
│                                                              │
│  ┌───────────────┐  ┌───────────────┐  ┌─────────────────┐ │
│  │    Tools      │  │   Resources   │  │     Prompts     │ │
│  │               │  │               │  │                 │ │
│  │ registerTool()│  │ registerRes() │  │ registerPrompt()│ │
│  │ listTools()   │  │ listResources │  │ listPrompts()   │ │
│  │ callTool()    │  │ readResource()│  │ getPrompt()     │ │
│  └───────────────┘  └───────────────┘  └─────────────────┘ │
│                           │                                  │
│  ┌────────────────────────┴────────────────────────────┐   │
│  │                    Transport Layer                    │   │
│  │  ┌──────────────┐  ┌────────────────────────────┐   │   │
│  │  │    Stdio     │  │    Streamable HTTP         │   │   │
│  │  │              │  │                            │   │   │
│  │  │ stdin/stdout │  │ POST /mcp (request)        │   │   │
│  │  │ for process  │  │ SSE for notifications      │   │   │
│  │  │ communication│  │ Session management         │   │   │
│  │  └──────────────┘  └────────────────────────────┘   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Client Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client                               │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                  High-Level Methods                     │ │
│  │                                                         │ │
│  │  listTools()    listResources()    listPrompts()       │ │
│  │  callTool()     readResource()     getPrompt()         │ │
│  │  complete()     getTask()          getTaskResult()     │ │
│  └───────────────────────────────────────────────────────┘ │
│                           │                                  │
│  ┌────────────────────────┴────────────────────────────┐   │
│  │                   Transport Selection                 │   │
│  │                                                       │   │
│  │  StdioClientTransport    → spawn local process       │   │
│  │  StreamableHTTPClient    → connect to HTTP server    │   │
│  │  SSEClientTransport      → legacy HTTP+SSE (deprecated)│ │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                  │
│  ┌────────────────────────┴────────────────────────────┐   │
│  │                  OAuth/Auth Module                    │   │
│  │                                                       │   │
│  │  ClientCredentialsProvider                           │   │
│  │  PrivateKeyJwtProvider                               │   │
│  │  StaticPrivateKeyJwtProvider                         │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Protocol Flow

```
┌──────────────┐                           ┌──────────────┐
│    Client    │                           │    Server    │
└──────┬───────┘                           └──────┬───────┘
       │                                          │
       │  1. initialize (capabilities)            │
       │─────────────────────────────────────────>│
       │                                          │
       │  2. initialize result (server caps)      │
       │<─────────────────────────────────────────│
       │                                          │
       │  3. notifications/initialized            │
       │─────────────────────────────────────────>│
       │                                          │
       │  4. tools/list                           │
       │─────────────────────────────────────────>│
       │                                          │
       │  5. tools list result                    │
       │<─────────────────────────────────────────│
       │                                          │
       │  6. tools/call { name, arguments }       │
       │─────────────────────────────────────────>│
       │                                          │
       │  7. tool result { content }              │
       │<─────────────────────────────────────────│
       │                                          │
       │  8. notifications/tools/list_changed     │
       │<─────────────────────────────────────────│ (Server pushes)
       │                                          │
```

---

## 5. Key Features

### 5.1 Tools (Model-Controlled Actions)

Tools enable AI models to perform actions:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "my-server",
  version: "1.0.0"
});

// Basic tool registration
server.registerTool(
  "search_files",
  {
    title: "Search Files",
    description: "Search for files matching a pattern",
    inputSchema: {
      pattern: z.string().describe("Glob pattern to search"),
      directory: z.string().optional().describe("Directory to search in")
    },
    outputSchema: {
      files: z.array(z.string()).describe("Matching file paths")
    }
  },
  async ({ pattern, directory }) => {
    const files = await glob(pattern, { cwd: directory || "." });
    return {
      content: [
        { type: "text", text: `Found ${files.length} files` }
      ],
      // Structured output when outputSchema defined
      structuredOutput: { files }
    };
  }
);
```

### 5.2 Resources (Read-Only Data Access)

Resources expose data without computation:

```typescript
// Static resource
server.registerResource(
  "config://app",
  {
    title: "App Configuration",
    description: "Current application configuration",
    mimeType: "application/json"
  },
  async () => ({
    contents: [
      {
        uri: "config://app",
        text: JSON.stringify(appConfig, null, 2)
      }
    ]
  })
);

// Resource template (dynamic URIs)
server.registerResourceTemplate(
  "file://{path}",
  {
    title: "File Contents",
    description: "Read file contents by path",
    mimeType: "text/plain"
  },
  async ({ path }) => ({
    contents: [
      {
        uri: `file://${path}`,
        text: await fs.readFile(path, "utf-8")
      }
    ]
  })
);
```

### 5.3 Prompts (User-Controlled Templates)

Prompts provide reusable interaction patterns:

```typescript
server.registerPrompt(
  "code_review",
  {
    title: "Code Review",
    description: "Review code for issues and improvements",
    arguments: {
      file: z.string().describe("Path to file to review"),
      focus: z.enum(["security", "performance", "readability"]).optional()
    }
  },
  async ({ file, focus }) => {
    const code = await fs.readFile(file, "utf-8");
    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please review this code${focus ? ` focusing on ${focus}` : ""}:\n\n${code}`
          }
        }
      ]
    };
  }
);
```

### 5.4 Sampling (Server-Initiated LLM Calls)

Servers can request completions from clients:

```typescript
// In a tool handler
server.registerTool(
  "summarize",
  {
    description: "Summarize a document",
    inputSchema: { content: z.string() }
  },
  async ({ content }, context) => {
    // Request completion from the client's LLM
    const response = await context.server.createMessage({
      messages: [
        {
          role: "user",
          content: { type: "text", text: `Summarize: ${content}` }
        }
      ],
      maxTokens: 500
    });

    return {
      content: [{ type: "text", text: response.content }]
    };
  }
);
```

### 5.5 Elicitation (User Input)

Two patterns for gathering user information:

```typescript
// Form Elicitation (non-sensitive data)
const result = await server.server.elicitInput({
  mode: "form",
  message: "Please provide your preferences",
  requestedSchema: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "string", format: "email" }
    }
  }
});

// URL Elicitation (sensitive data - opens browser)
const result = await server.server.elicitInput({
  mode: "url",
  message: "Please authenticate",
  url: "https://auth.example.com/login?callback=..."
});
// CRITICAL: Never collect secrets via form elicitation
```

### 5.6 Task-Based Execution (Experimental)

Long-running operations with "call-now, fetch-later" pattern:

```typescript
// Server-side: Register task-enabled tool
server.experimental.tasks.registerToolTask(
  "long_analysis",
  {
    description: "Perform lengthy analysis",
    inputSchema: { data: z.string() }
  },
  async ({ data }, taskContext) => {
    // Report progress
    await taskContext.reportProgress(0.1, "Starting analysis...");

    const result = await analyze(data);

    await taskContext.reportProgress(1.0, "Complete");
    return { content: [{ type: "text", text: result }] };
  }
);

// Client-side: Call and poll
const stream = client.experimental.tasks.callToolStream("long_analysis", { data });
for await (const update of stream) {
  console.log(`Progress: ${update.progress}`);
}
const result = await client.getTaskResult(taskId);
```

---

## 6. Installation & Setup

### Basic Installation

```bash
# Server package (for building MCP servers)
npm install @modelcontextprotocol/server zod

# Client package (for connecting to MCP servers)
npm install @modelcontextprotocol/client zod

# Both (common scenario)
npm install @modelcontextprotocol/server @modelcontextprotocol/client zod
```

### Framework Middleware (Optional)

```bash
# Express integration
npm install @modelcontextprotocol/express express

# Hono integration
npm install @modelcontextprotocol/hono hono

# Node.js HTTP (vanilla)
npm install @modelcontextprotocol/node
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Package.json Setup

```json
{
  "name": "my-mcp-server",
  "version": "1.0.0",
  "type": "module",
  "main": "./build/index.js",
  "bin": {
    "my-mcp-server": "./build/index.js"
  },
  "scripts": {
    "build": "tsc",
    "start": "node build/index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/server": "^1.25.0",
    "zod": "^3.25.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "typescript": "^5.7.0"
  }
}
```

### Minimal Server Example

```typescript
#!/usr/bin/env node
// src/index.ts

import { McpServer } from "@modelcontextprotocol/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "hello-world",
  version: "1.0.0"
});

server.registerTool(
  "greet",
  {
    description: "Say hello",
    inputSchema: { name: z.string() }
  },
  async ({ name }) => ({
    content: [{ type: "text", text: `Hello, ${name}!` }]
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Server running on stdio");
}

main().catch(console.error);
```

### Configure in Claude Code

```json
// ~/Library/Application Support/Claude/claude_desktop_config.json (macOS)
// %APPDATA%/Claude/claude_desktop_config.json (Windows)
{
  "mcpServers": {
    "hello-world": {
      "command": "node",
      "args": ["/absolute/path/to/build/index.js"]
    }
  }
}
```

---

## 7. Configuration Options

### Server Configuration

```typescript
const server = new McpServer({
  // Required
  name: "my-server",
  version: "1.0.0",

  // Optional capabilities
  capabilities: {
    tools: { listChanged: true },      // Notify on tool list changes
    resources: { subscribe: true },     // Support resource subscriptions
    prompts: { listChanged: true },    // Notify on prompt list changes
    logging: { level: "info" }         // Logging configuration
  },

  // Optional: Enable experimental features
  experimental: {
    tasks: true  // Enable task-based execution
  }
});
```

### Transport Configuration

#### Stdio Transport

```typescript
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio.js";

const transport = new StdioServerTransport();
await server.connect(transport);
```

#### Streamable HTTP Transport (Express)

```typescript
import express from "express";
import { createMcpExpressApp } from "@modelcontextprotocol/express";

const app = createMcpExpressApp({
  // DNS rebinding protection
  host: "127.0.0.1",
  allowedHosts: ["localhost", "127.0.0.1"],

  // Session management
  sessionTimeout: 3600000, // 1 hour

  // Optional: Authentication
  authenticate: async (req) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Missing token");
    return await validateToken(token);
  }
});

app.listen(3000, () => {
  console.log("MCP server listening on port 3000");
});
```

### Client Configuration

```typescript
import { Client } from "@modelcontextprotocol/client/client.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/client/transports/streamableHttp.js";

const client = new Client({
  name: "my-client",
  version: "1.0.0",
  capabilities: {
    sampling: {},        // Enable server-initiated completions
    elicitation: {}      // Enable user input requests
  }
});

const transport = new StreamableHTTPClientTransport(
  new URL("http://localhost:3000/mcp"),
  {
    // OAuth configuration
    credentials: {
      clientId: "my-client-id",
      clientSecret: "my-client-secret"
    }
  }
);

await client.connect(transport);
```

---

## 8. Building Custom Tools

### Complete Tool Example: Database Query

```typescript
import { McpServer } from "@modelcontextprotocol/server/mcp.js";
import { z } from "zod";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const server = new McpServer({
  name: "postgres-tools",
  version: "1.0.0"
});

// Safe query tool with parameterized queries
server.registerTool(
  "query_database",
  {
    title: "Query Database",
    description: "Execute a read-only SQL query",
    inputSchema: {
      query: z.string().describe("SQL SELECT query"),
      params: z.array(z.union([z.string(), z.number(), z.boolean(), z.null()]))
        .optional()
        .describe("Query parameters (prevents SQL injection)")
    },
    outputSchema: {
      rows: z.array(z.record(z.unknown())),
      rowCount: z.number()
    }
  },
  async ({ query, params }) => {
    // Security: Only allow SELECT queries
    if (!query.trim().toUpperCase().startsWith("SELECT")) {
      return {
        content: [{ type: "text", text: "Error: Only SELECT queries allowed" }],
        isError: true
      };
    }

    try {
      const result = await pool.query(query, params);
      return {
        content: [
          {
            type: "text",
            text: `Returned ${result.rowCount} rows`
          }
        ],
        structuredOutput: {
          rows: result.rows,
          rowCount: result.rowCount || 0
        }
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `Query error: ${error.message}` }],
        isError: true
      };
    }
  }
);
```

### Tool with Resource Links

```typescript
server.registerTool(
  "list_documents",
  {
    description: "List available documents",
    inputSchema: { folder: z.string() }
  },
  async ({ folder }) => {
    const files = await fs.readdir(folder);

    return {
      content: files.map(file => ({
        type: "resource_link",
        resource: {
          uri: `file://${path.join(folder, file)}`,
          title: file,
          mimeType: getMimeType(file)
        }
      }))
    };
  }
);
```

### Tool with Progress Reporting

```typescript
server.registerTool(
  "process_files",
  {
    description: "Process multiple files",
    inputSchema: {
      files: z.array(z.string())
    }
  },
  async ({ files }, context) => {
    const results = [];

    for (let i = 0; i < files.length; i++) {
      // Report progress
      await context.reportProgress(
        (i + 1) / files.length,
        `Processing ${files[i]}...`
      );

      results.push(await processFile(files[i]));
    }

    return {
      content: [{ type: "text", text: `Processed ${results.length} files` }]
    };
  }
);
```

---

## 9. Integration Patterns

### With Ralph

Custom MCP tools dramatically enhance Ralph's verification capabilities:

```typescript
// mcp-server/src/ralph-tools.ts
import { McpServer } from "@modelcontextprotocol/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "ralph-verification",
  version: "1.0.0"
});

// Database verification tool
server.registerTool(
  "verify_database_state",
  {
    description: "Verify database state matches expectations",
    inputSchema: {
      query: z.string().describe("SQL query to verify state"),
      expected: z.string().describe("Expected result (JSON)"),
      storyId: z.string().describe("User story being verified")
    }
  },
  async ({ query, expected, storyId }) => {
    const result = await db.query(query);
    const expectedObj = JSON.parse(expected);
    const matches = deepEqual(result.rows, expectedObj);

    return {
      content: [{
        type: "text",
        text: matches
          ? `PASS: ${storyId} - Database state verified`
          : `FAIL: ${storyId} - Expected ${expected}, got ${JSON.stringify(result.rows)}`
      }]
    };
  }
);

// TypeScript type checker
server.registerTool(
  "run_typecheck",
  {
    description: "Run TypeScript type checking",
    inputSchema: {
      project: z.string().optional().describe("tsconfig.json path")
    }
  },
  async ({ project }) => {
    const { stdout, stderr, code } = await exec(
      `npx tsc --noEmit ${project ? `-p ${project}` : ""}`
    );

    return {
      content: [{
        type: "text",
        text: code === 0
          ? "PASS: TypeScript compilation successful"
          : `FAIL: TypeScript errors:\n${stderr}`
      }]
    };
  }
);
```

**Ralph prd.json Integration:**

```json
{
  "userStories": [
    {
      "id": "US-003",
      "title": "Add user to database",
      "acceptanceCriteria": [
        "User created in PostgreSQL",
        "MCP verify_database_state: SELECT COUNT(*) FROM users WHERE email='test@test.com' returns [{count:1}]",
        "MCP run_typecheck passes"
      ],
      "passes": false
    }
  ]
}
```

### With Gas Town

MCP tools can provide capabilities to Gas Town's specialized roles:

```typescript
// mcp-server/src/gas-town-tools.ts

// Tool for the Deacon (Architect) role
server.registerTool(
  "analyze_architecture",
  {
    description: "Analyze codebase architecture for Deacon role",
    inputSchema: {
      entryPoint: z.string(),
      depth: z.number().optional().default(3)
    }
  },
  async ({ entryPoint, depth }) => {
    const analysis = await analyzeImports(entryPoint, depth);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(analysis, null, 2)
      }]
    };
  }
);

// Tool for the Dogs (Watchdog) role
server.registerTool(
  "lint_and_format",
  {
    description: "Run linting and formatting checks",
    inputSchema: {
      files: z.array(z.string()).describe("Files to check")
    }
  },
  async ({ files }) => {
    const eslintResult = await runEslint(files);
    const prettierResult = await runPrettier(files);

    return {
      content: [{
        type: "text",
        text: `ESLint: ${eslintResult.errorCount} errors, ${eslintResult.warningCount} warnings\n` +
              `Prettier: ${prettierResult.changedCount} files would change`
      }]
    };
  }
);

// Tool for the Refinery (Build/Deploy) role
server.registerTool(
  "deploy_preview",
  {
    description: "Deploy a preview environment",
    inputSchema: {
      branch: z.string(),
      commit: z.string()
    }
  },
  async ({ branch, commit }) => {
    const preview = await deployPreview({ branch, commit });
    return {
      content: [{
        type: "text",
        text: `Preview deployed: ${preview.url}`
      }]
    };
  }
);
```

**Gas Town Configuration:**

```yaml
# gas-town-config.yml
roles:
  deacon:
    mcp_servers:
      - architecture-analyzer
    tools:
      - analyze_architecture
      - dependency_graph

  dogs:
    mcp_servers:
      - code-quality
    tools:
      - lint_and_format
      - security_scan

  refinery:
    mcp_servers:
      - deployment
    tools:
      - deploy_preview
      - rollback
```

### With CC Mirror

MCP tools can enhance multi-agent coordination in CC Mirror:

```typescript
// Tool for task synchronization
server.registerTool(
  "sync_task_state",
  {
    description: "Synchronize task state across agents",
    inputSchema: {
      taskId: z.string(),
      status: z.enum(["pending", "in_progress", "completed", "blocked"]),
      agentId: z.string()
    }
  },
  async ({ taskId, status, agentId }) => {
    await taskStore.update(taskId, { status, lastUpdatedBy: agentId });

    // Notify other agents via SSE
    await broadcastToAgents({
      type: "task_update",
      taskId,
      status,
      agentId
    });

    return {
      content: [{ type: "text", text: `Task ${taskId} updated to ${status}` }]
    };
  }
);

// Resource for task visibility
server.registerResource(
  "tasks://active",
  {
    title: "Active Tasks",
    description: "All currently active tasks",
    mimeType: "application/json"
  },
  async () => {
    const tasks = await taskStore.getActive();
    return {
      contents: [{
        uri: "tasks://active",
        text: JSON.stringify(tasks, null, 2)
      }]
    };
  }
);
```

### Comparison with Python SDK

| Aspect | TypeScript SDK | Python SDK |
|--------|----------------|------------|
| **Type Safety** | Compile-time via TypeScript + Zod | Runtime via Pydantic |
| **Async Model** | Native async/await | asyncio |
| **Primary Use** | Claude Desktop, VS Code, web | Scripts, notebooks, backend |
| **Framework** | Express, Hono, Node HTTP | FastMCP, ASGI |
| **Learning Curve** | Higher (TS + Zod) | Lower (decorator-based) |
| **Performance** | Faster startup | Slightly slower |
| **Ecosystem** | npm, browser compat | pip, ML libraries |

**When to Use TypeScript SDK:**
- Building MCP servers for Claude Desktop or VS Code
- Type safety is critical for your tools
- Deploying to Node.js or edge environments
- Need browser compatibility

**When to Use Python SDK:**
- Integrating with ML/AI workflows
- Building data analysis tools
- Quick prototyping with decorators
- Need access to scientific Python libraries

### Combination Matrix

| MCP TS + | Use Case | Complexity | Value |
|----------|----------|------------|-------|
| **Ralph** | Type-safe verification tools | Medium | Very High |
| **Gas Town** | Specialized role capabilities | Medium | Very High |
| **CC Mirror** | Multi-agent coordination tools | Medium | High |
| **Playwright MCP** | Browser automation + custom tools | Medium | High |
| **Claude-Mem** | Memory tools with type safety | Low | High |
| **Hooks** | Pre/post tool use automation | Low | Medium |
| **Docker** | Isolated tool execution | Medium | High |
| **Agent Mail** | Communication infrastructure | High | Very High |

---

## 10. Mental Models

### Model 1: The USB-C Analogy

```
Before MCP:
┌─────────────┐    Custom Code    ┌─────────────┐
│ AI App      │───────────────────│ Database    │
├─────────────┤    Custom Code    ├─────────────┤
│             │───────────────────│ API         │
├─────────────┤    Custom Code    ├─────────────┤
│             │───────────────────│ Files       │
└─────────────┘                   └─────────────┘

With MCP (like USB-C):
┌─────────────┐                   ┌─────────────┐
│ AI App      │                   │ Database    │
│             │     MCP Server    │ MCP Server  │
│ MCP Client  │◄────────────────►│             │
│             │                   ├─────────────┤
│             │     MCP Server    │ API         │
│             │◄────────────────►│ MCP Server  │
│             │                   ├─────────────┤
│             │     MCP Server    │ Files       │
│             │◄────────────────►│ MCP Server  │
└─────────────┘                   └─────────────┘
```

### Model 2: The Three Primitives

```
Tools (Model-Controlled)      Resources (App-Controlled)     Prompts (User-Controlled)
         │                              │                              │
         ▼                              ▼                              ▼
┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐
│  "Do something" │          │  "Read something"│          │  "Start with..." │
│                 │          │                 │          │                 │
│  - Send email   │          │  - Get config   │          │  - Code review  │
│  - Query DB     │          │  - Read file    │          │  - Refactor     │
│  - Call API     │          │  - List items   │          │  - Debug        │
└─────────────────┘          └─────────────────┘          └─────────────────┘
```

### Model 3: Type Safety Flow

```
Developer               SDK                  Runtime
    │                    │                      │
    │  Define with Zod   │                      │
    │─────────────────► │                      │
    │                    │                      │
    │  Type Errors       │                      │
    │◄───────────────── │                      │
    │                    │                      │
    │  Fix Types         │                      │
    │─────────────────► │                      │
    │                    │                      │
    │  Compile OK        │                      │
    │◄───────────────── │                      │
    │                    │                      │
    │                    │  Schema Validation   │
    │                    │─────────────────────►│
    │                    │                      │
    │                    │  Validated Input     │
    │                    │◄─────────────────────│
```

### Model 4: Transport Selection

```
                      Which Transport?
                            │
           ┌────────────────┴────────────────┐
           │                                 │
    Same Machine?                     Different Machine?
           │                                 │
           ▼                                 ▼
    ┌─────────────┐                   ┌─────────────┐
    │    Stdio    │                   │ Streamable  │
    │             │                   │    HTTP     │
    │ - Fastest   │                   │             │
    │ - Simplest  │                   │ - Remote OK │
    │ - No auth   │                   │ - OAuth     │
    │   needed    │                   │ - Sessions  │
    └─────────────┘                   └─────────────┘
```

---

## 11. Checkpoints

### Checkpoint: After Installation

**Where you are:** Dependencies installed, TypeScript configured.

**Verify your state:**
```bash
# Check packages installed
npm list @modelcontextprotocol/server zod

# Check TypeScript config
cat tsconfig.json | grep '"module"'
```

**You should see:**
```
@modelcontextprotocol/server@1.25.x
zod@3.25.x

"module": "Node16"
```

**If you don't see this:**
- Check: Did you run `npm install`?
- Check: Is tsconfig.json using ES modules (Node16)?
- Go back to: Installation & Setup section

---

### Checkpoint: After Building First Tool

**Where you are:** Server compiles, one tool registered.

**Verify your state:**
```bash
# Build succeeds
npm run build

# Check output exists
ls build/index.js
```

**You should see:**
```
Successfully compiled
build/index.js
```

**Test locally:**
```bash
# Run server and send test message
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"capabilities":{}}}' | node build/index.js
```

**If you see JSON-RPC response:**
Your server is working. Proceed to Claude Code configuration.

---

### Checkpoint: After Claude Code Configuration

**Where you are:** MCP server configured in Claude Code.

**Verify your state:**
1. Restart Claude Code completely (Cmd+Q on macOS)
2. Open a new conversation
3. Ask Claude to list available tools

**You should see:**
```
Available MCP tools include:
- greet (from hello-world server)
```

**If tool not visible:**
- Check: `claude_desktop_config.json` syntax (valid JSON?)
- Check: Path to server is absolute, not relative
- Check: Server builds and runs without errors
- Check Claude logs: `tail -f ~/Library/Logs/Claude/mcp*.log`

---

### Checkpoint: After Tool Execution

**Where you are:** Claude has successfully called your tool.

**Verify your state:**
1. Ask Claude: "Use the greet tool to say hello to Test"
2. Tool should execute and return result

**You should see:**
```
Claude: I'll use the greet tool for you.
[Tool execution: greet with name="Test"]
Result: Hello, Test!
```

**If tool fails:**
- Check: Server logs for errors
- Check: Input schema matches what you're sending
- Check: Tool handler doesn't throw unhandled exceptions
- Go back to: Troubleshooting section

---

## 12. Troubleshooting

### Server Not Appearing in Claude Code

**Symptoms:** Tool not visible, MCP server not listed

**Diagnosis:**
```bash
# Check config file exists and is valid JSON
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json | jq .

# Check server path exists
ls -la /path/to/your/build/index.js

# Check server runs standalone
node /path/to/your/build/index.js
```

**Solutions:**
1. **Invalid JSON:** Fix syntax errors in config
2. **Path not found:** Use absolute path, not relative
3. **Server crashes:** Check for runtime errors
4. **Permissions:** Ensure script is executable

**Prevention:** Always test server locally before configuring in Claude

---

### "TypeError: Cannot read property 'x' of undefined"

**Symptoms:** Runtime error when tool is called

**Cause:** Input not validated or optional field accessed unsafely

**Solution:**
```typescript
// Bad: Assumes field exists
async ({ user }) => {
  return { content: [{ type: "text", text: user.name }] }; // Crashes if no user
}

// Good: Validate with Zod, handle missing
inputSchema: {
  user: z.object({
    name: z.string().optional()
  }).optional()
}

async ({ user }) => {
  const name = user?.name ?? "Anonymous";
  return { content: [{ type: "text", text: name }] };
}
```

**Prevention:** Always use Zod schemas with `.optional()` for nullable fields

---

### "Error: write EPIPE" (Stdio Transport)

**Symptoms:** Server crashes with pipe error

**Cause:** Writing to stdout when client has disconnected, or writing debug logs to stdout

**Solution:**
```typescript
// Bad: Using console.log (writes to stdout, corrupts JSON-RPC)
console.log("Processing request");

// Good: Use console.error for logging
console.error("Processing request");

// Or use proper logging library
import { createLogger } from "./logger.js";
const log = createLogger("my-server");
log.info("Processing request");
```

**Prevention:** NEVER use `console.log()` in stdio-based MCP servers

---

### Tool Returns Empty Content

**Symptoms:** Tool executes but Claude sees no result

**Cause:** Return structure incorrect

**Solution:**
```typescript
// Bad: Returns string directly
async () => "Hello"

// Bad: Wrong content type
async () => ({ content: "Hello" })

// Good: Proper content array
async () => ({
  content: [
    { type: "text", text: "Hello" }
  ]
})
```

**Prevention:** Always return `{ content: [{ type: "text", text: "..." }] }`

---

### Rate Limiting / Timeout Issues

**Symptoms:** Tools fail intermittently, "Request timed out"

**Solutions:**
```typescript
// 1. Add timeout handling
server.registerTool("long_operation", {
  // ...
}, async (input, context) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const result = await fetch(url, { signal: controller.signal });
    return { content: [{ type: "text", text: await result.text() }] };
  } finally {
    clearTimeout(timeout);
  }
});

// 2. Use tasks for long operations
server.experimental.tasks.registerToolTask("long_operation", {
  // ...
});
```

**Prevention:** Implement timeouts, use tasks for operations > 30 seconds

---

### "Session not found" (HTTP Transport)

**Symptoms:** Tool calls fail with session error

**Cause:** Session expired or server restarted

**Solution:**
```typescript
// Server: Persist sessions
const sessionStore = new Map<string, Session>();

// Or use Redis for distributed setups
const sessionStore = new RedisSessionStore({
  url: process.env.REDIS_URL
});
```

**Prevention:** Implement session persistence for production deployments

---

### Version Compatibility Issues

**Symptoms:** Errors about protocol version, missing methods

**Current Status:**
- **v1.x** - Stable, recommended for production
- **v2** - Pre-alpha, breaking changes expected

**Solution:**
```json
// Use stable version
{
  "dependencies": {
    "@modelcontextprotocol/server": "^1.25.0"
  }
}
```

**Prevention:** Pin to v1.x until v2 is stable (expected Q1 2026)

---

## 13. Source Attribution & References

### Official Resources

| Resource | URL |
|----------|-----|
| TypeScript SDK | github.com/modelcontextprotocol/typescript-sdk |
| MCP Specification | spec.modelcontextprotocol.io |
| Official Docs | modelcontextprotocol.io |
| Example Servers | github.com/modelcontextprotocol/servers |
| Python SDK | github.com/modelcontextprotocol/python-sdk |

### Related Extractions

| Document | Relationship |
|----------|-------------|
| research-mcp-servers-expanded.md | MCP ecosystem overview |
| 009-mcp-agent-mail.md | Communication infrastructure |
| mastery-ralph-complete.md | Ralph integration patterns |
| research-gas-town-expanded.md | Gas Town integration patterns |

### Version History

| Version | Protocol | Status | Notes |
|---------|----------|--------|-------|
| v1.x | 2024-11-05 | Stable | Production recommended |
| v2 | 2025-06-18 | Pre-alpha | New features, breaking changes |

### Community

- **Discord:** discord.gg/modelcontextprotocol
- **GitHub Discussions:** github.com/modelcontextprotocol/typescript-sdk/discussions

---

## Tags

`#mcp` `#typescript` `#sdk` `#tools` `#resources` `#prompts` `#type-safety` `#integration` `#level-3` `#level-4` `#level-5` `#level-6` `#ralph` `#gas-town` `#cc-mirror`

---

*Compiled from official MCP documentation and TypeScript SDK repository. Last updated: 2026-01-19.*
